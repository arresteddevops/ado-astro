#!/usr/bin/env node
// Submits episode audio to AssemblyAI for diarized transcription and caches the
// raw result. See issue #19 — this is the deterministic half of the transcript
// pipeline; speaker-name mapping and markdown formatting happen in the
// `add-transcript` skill, not here.
//
// Usage:
//   node scripts/submit-transcripts.mjs --slugs slug-a,slug-b
//   node scripts/submit-transcripts.mjs --limit 20
//   node scripts/submit-transcripts.mjs --slugs slug-a --force   # re-submit even if cached
//
// Without --slugs, candidates are every episode missing a `transcript` field,
// sorted by episodeNumber ascending — --limit then takes the next N in that order.
//
// CONCURRENCY stays under AssemblyAI's free-tier cap of 5 simultaneous jobs.
// 429s get retried with exponential backoff rather than failing the batch.

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

const API_KEY = process.env.ASSEMBLYAI_API_KEY;
if (!API_KEY) {
  console.error("ASSEMBLYAI_API_KEY is not set (check your .env).");
  process.exit(1);
}

const MEDIA_PREFIX =
  "https://media.blubrry.com/arresteddevops/content.blubrry.com/arresteddevops/";
const CONCURRENCY = 4;

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const REPO_ROOT = path.resolve(scriptDir, "..");
const EPISODES_DIR = path.join(REPO_ROOT, "src/content/episodes");
const CACHE_DIR = path.join(REPO_ROOT, ".cache/transcripts");

function readFrontmatter(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  return YAML.parse(match ? match[1] : raw);
}

function parseArgs(argv) {
  const args = { slugs: null, limit: null, force: false };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--slugs") args.slugs = argv[++i].split(",");
    else if (argv[i] === "--limit") args.limit = Number(argv[++i]);
    else if (argv[i] === "--force") args.force = true;
  }
  return args;
}

async function withBackoff(fn) {
  for (let attempt = 0; ; attempt++) {
    const res = await fn();
    if (res.status !== 429) return res;
    if (attempt >= 5) throw new Error("gave up after 5 retries on 429");
    const wait = 2 ** attempt * 1000;
    console.log(`429, backing off ${wait}ms`);
    await new Promise((r) => setTimeout(r, wait));
  }
}

async function submit(audioUrl) {
  const res = await withBackoff(() =>
    fetch("https://api.assemblyai.com/v2/transcript", {
      method: "POST",
      headers: { authorization: API_KEY, "content-type": "application/json" },
      body: JSON.stringify({ audio_url: audioUrl, speaker_labels: true }),
    }),
  );
  if (!res.ok) throw new Error(`submit failed: ${res.status} ${await res.text()}`);
  return res.json();
}

async function poll(id) {
  for (;;) {
    const res = await withBackoff(() =>
      fetch(`https://api.assemblyai.com/v2/transcript/${id}`, {
        headers: { authorization: API_KEY },
      }),
    );
    if (!res.ok) throw new Error(`poll failed: ${res.status} ${await res.text()}`);
    const data = await res.json();
    if (data.status === "completed" || data.status === "error") return data;
    await new Promise((r) => setTimeout(r, 5000));
  }
}

async function processSlug(slug, force) {
  const cachePath = path.join(CACHE_DIR, `${slug}.json`);
  const errorPath = path.join(CACHE_DIR, `${slug}.error.json`);
  if (!force && fs.existsSync(cachePath)) {
    console.log(`skip ${slug} (cached)`);
    return;
  }

  const episodePath = path.join(EPISODES_DIR, `${slug}.md`);
  const data = readFrontmatter(episodePath);
  const audioUrl = `${MEDIA_PREFIX}${data.podcastFile}`;

  console.log(`submitting ${slug} (${audioUrl})`);
  const submission = await submit(audioUrl);
  const result = await poll(submission.id);

  fs.mkdirSync(CACHE_DIR, { recursive: true });
  if (result.status === "completed") {
    fs.writeFileSync(cachePath, JSON.stringify(result, null, 2));
    console.log(`done ${slug}: ${result.utterances?.length ?? 0} utterances`);
  } else {
    fs.writeFileSync(errorPath, JSON.stringify(result, null, 2));
    console.error(`error ${slug}: ${result.error}`);
  }
}

async function runPool(slugs, force, concurrency) {
  const queue = [...slugs];
  const workers = Array.from({ length: concurrency }, async () => {
    let slug;
    while ((slug = queue.shift()) !== undefined) {
      try {
        await processSlug(slug, force);
      } catch (err) {
        console.error(`failed ${slug}: ${err.message}`);
      }
    }
  });
  await Promise.all(workers);
}

const args = parseArgs(process.argv.slice(2));

let slugs = args.slugs;
if (!slugs) {
  slugs = fs
    .readdirSync(EPISODES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.basename(f, ".md"))
    .map((slug) => ({ slug, data: readFrontmatter(path.join(EPISODES_DIR, `${slug}.md`)) }))
    .filter(({ data }) => !data.transcript)
    .sort((a, b) => Number(a.data.episodeNumber) - Number(b.data.episodeNumber))
    .map(({ slug }) => slug);
  if (args.limit) slugs = slugs.slice(0, args.limit);
}

await runPool(slugs, args.force, CONCURRENCY);
