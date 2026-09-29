// Lists episodes whose show notes are still thin (issue #84), oldest first.
//
//   node scripts/list-thin-episodes.mjs            # slug, episode number, prose words, raw-html flag
//   node scripts/list-thin-episodes.mjs --limit 5  # just the next 5
//
// "Thin" = fewer than THRESHOLD words of actual prose in the body, after
// dropping headings, list items, and HTML. Rewritten episodes grow past it, so
// re-running this naturally skips them. Only episodes with a transcript count,
// since the rewrite drafts from one.
//
// ponytail: word-count heuristic, not a quality judgment. If it misclassifies
// an episode, pass --slugs to the skill by hand.

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

const EPISODES_DIR = "src/content/episodes";
const THRESHOLD = 80;

const limitIdx = process.argv.indexOf("--limit");
const limit = limitIdx > -1 ? Number(process.argv[limitIdx + 1]) : null;

const rows = fs
  .readdirSync(EPISODES_DIR)
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const raw = fs.readFileSync(path.join(EPISODES_DIR, f), "utf8");
    const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    const data = YAML.parse(m[1]);
    const body = m[2];
    const prose = body
      .split("\n")
      .filter((l) => l.trim() && !/^\s*(#|[-*]\s|\d+\.\s|<)/.test(l))
      .join(" ")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");
    return {
      slug: f.replace(/\.md$/, ""),
      num: Number(data.episodeNumber),
      words: prose.split(/\s+/).filter(Boolean).length,
      rawHtml: /<ul>|<li>/.test(body),
      hasTranscript: Boolean(data.transcript),
    };
  })
  .filter((r) => r.hasTranscript && r.words < THRESHOLD)
  .sort((a, b) => a.num - b.num);

for (const r of limit ? rows.slice(0, limit) : rows) {
  console.log(`${r.slug}\t#${r.num}\t${r.words}w${r.rawHtml ? "\traw-html" : ""}`);
}
console.error(`${rows.length} thin episodes (${rows.filter((r) => r.rawHtml).length} raw-html)`);
