#!/usr/bin/env node
// One-time (but re-runnable) conversion of ado-hugo's TOML content into this
// repo's Astro content collections. See ADR-0002 and ADR-0003.
//
// Usage: node scripts/migrate-content.mjs [path-to-ado-hugo]
// Defaults to ../ado-hugo (sibling checkout).

import fs from "node:fs";
import path from "node:path";
import * as TOML from "smol-toml";
import YAML from "yaml";

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const REPO_ROOT = path.resolve(scriptDir, "..");
const HUGO_ROOT = path.resolve(REPO_ROOT, process.argv[2] ?? "../ado-hugo");
const OUT_ROOT = path.join(REPO_ROOT, "src/content");

const warnings = [];
function warn(msg) {
  warnings.push(msg);
}

// ---------- generic helpers ----------

function ensureEmptyDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function stem(filePath) {
  return path.basename(filePath, ".md");
}

function listMd(dir, { exclude = [] } = {}) {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !exclude.includes(f))
    .map((f) => path.join(dir, f));
}

// Case-insensitive frontmatter getter — legacy files mix `Title`/`title` etc,
// but never both in the same file (confirmed by survey), so first-match wins.
function get(data, ...keys) {
  for (const k of keys) if (data[k] !== undefined) return data[k];
  const lower = Object.fromEntries(Object.entries(data).map(([k, v]) => [k.toLowerCase(), v]));
  for (const k of keys) {
    const v = lower[k.toLowerCase()];
    if (v !== undefined) return v;
  }
  return undefined;
}

function toDate(v) {
  if (v === undefined) return undefined;
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
}

function toArray(v) {
  if (v === undefined) return [];
  const arr = Array.isArray(v) ? v : [v];
  // A handful of episodes have a stray trailing "" in hosts/sponsors arrays
  // in the legacy TOML itself (e.g. `hosts = ["mstratton", ""]`) — not a
  // reference to anything, drop silently rather than warning on it.
  return arr.filter((x) => x !== "");
}

// Hugo content is almost entirely TOML frontmatter (+++ ... +++), but a
// couple of guest files (mpais.md, mskelton.md) use YAML (---) instead —
// detect and parse either.
function readHugoFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const tomlMatch = raw.match(/^\+\+\+\r?\n([\s\S]*?)\r?\n\+\+\+\r?\n?([\s\S]*)$/);
  const yamlMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const match = tomlMatch ?? yamlMatch;
  if (!match) throw new Error(`No frontmatter block found in ${filePath}`);
  const [, block, body] = match;
  let data;
  try {
    data = tomlMatch ? TOML.parse(block) : YAML.parse(block);
  } catch (err) {
    throw new Error(`Frontmatter parse failed in ${filePath}: ${err.message}`);
  }
  return { data: data ?? {}, body: body.trim() };
}

// Hugo's archetypes default a lot of optional fields to "" rather than
// omitting them. An empty string is a valid (if useless) value for every
// z.string().optional() field in our schemas, so nothing would crash — but
// leaving them in just means phase 3 renders empty social-icon links. Strip
// at the write boundary, recursively, rather than scattering `|| undefined`
// through every field extraction above.
function stripBlanks(value) {
  if (Array.isArray(value)) return value.map(stripBlanks);
  if (value !== null && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (v === "") continue;
      out[k] = stripBlanks(v);
    }
    return out;
  }
  return value;
}

function writeMarkdown(outPath, frontmatter, body) {
  const yaml = YAML.stringify(stripBlanks(frontmatter), { lineWidth: 0 });
  fs.writeFileSync(outPath, `---\n${yaml}---\n\n${body ?? ""}\n`);
}

function writeYaml(outPath, data) {
  fs.writeFileSync(outPath, YAML.stringify(stripBlanks(data), { lineWidth: 0 }));
}

// pcheslock -> {base: 'pcheslock', order: 0}; pcheslock2 -> {base: 'pcheslock', order: 2}
// Filename numeric suffix is the reliable chronology signal (the Date field is not
// — bulk-migration files share one identical timestamp across a whole group).
function parseStemOrder(s) {
  const m = s.match(/^(.*?)(\d+)$/);
  return m ? { base: m[1], order: Number(m[2]) } : { base: s, order: 0 };
}

// ---------- sponsors: data/sponsors/*.yml is the real source; content/sponsor/
// and content/redirect/ and data/hosts/ are dead, confirmed by survey — skipped
// entirely, not read at all. ----------

function migrateSponsors() {
  const dir = path.join(HUGO_ROOT, "data/sponsors");
  const outDir = path.join(OUT_ROOT, "sponsors");
  ensureEmptyDir(outDir);

  const known = new Map(); // stem -> stem (no folding, but keeps resolveRefs uniform)
  for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".yml"))) {
    const s = path.basename(f, ".yml").toLowerCase();
    const data = YAML.parse(fs.readFileSync(path.join(dir, f), "utf8")) ?? {};
    writeYaml(path.join(outDir, `${s}.yaml`), {
      name: get(data, "Name", "name") ?? s,
      url: get(data, "url", "URL"),
      ad: get(data, "ad", "Ad"),
      placeholder: false,
    });
    known.set(s, s);
  }

  // One legacy typo + one genuinely-missing sponsor, both confirmed by survey.
  const fixMap = { victrops: "victorops" };
  const placeholders = ["stackexchange"];
  for (const stemName of placeholders) {
    writeYaml(path.join(outDir, `${stemName}.yaml`), {
      name: stemName,
      placeholder: true,
    });
    known.set(stemName, stemName);
  }

  return { known, fixMap };
}

// ---------- hosts: content/host/*.md, no folding — Host stays a fully
// separate collection from Guest even when the same human has both. ----------

function migrateHosts() {
  const dir = path.join(HUGO_ROOT, "content/host");
  const outDir = path.join(OUT_ROOT, "hosts");
  ensureEmptyDir(outDir);

  const known = new Map(); // stem -> stem
  for (const filePath of listMd(dir, { exclude: ["_index.md"] })) {
    const s = stem(filePath);
    const { data, body } = readHugoFile(filePath);
    writeMarkdown(
      path.join(outDir, `${s}.md`),
      {
        name: get(data, "Title", "title") ?? s,
        thumbnail: get(data, "Thumbnail", "thumbnail"),
        website: get(data, "Website", "website"),
        twitter: get(data, "Twitter", "twitter"),
        github: get(data, "GitHub", "github"),
        linkedin: get(data, "Linkedin", "linkedin"),
        facebook: get(data, "Facebook", "facebook"),
        instagram: get(data, "Instagram", "instagram"),
        pinterest: get(data, "Pinterest", "pinterest"),
        youtube: get(data, "YouTube", "youtube"),
        twitch: get(data, "Twitch", "twitch"),
        pronouns: get(data, "Pronouns", "pronouns"),
      },
      body,
    );
    known.set(s, s);
  }

  // about.md's `hosts = [...]` used a nickname not matching any host stem.
  const fixMap = { bridget: "bkromhout" };
  return { known, fixMap };
}

// ---------- guests: fold 332 version files into person entities keyed by
// guest_group, per ADR-0002. Canonical id = the base (no-suffix) stem when one
// exists in the group, else the lowest-numbered member — matching the real
// precedent already in static/_redirects (ashafer2 -> ashafer). ----------

function migrateGuests() {
  const dir = path.join(HUGO_ROOT, "content/guest");
  const outDir = path.join(OUT_ROOT, "guests");
  ensureEmptyDir(outDir);

  const files = listMd(dir, { exclude: ["_index.md"] });
  const records = files.map((filePath) => {
    const s = stem(filePath);
    const { data, body } = readHugoFile(filePath);
    return {
      stem: s,
      group: get(data, "guest_group"),
      name: get(data, "Title", "title") ?? s,
      bio: body,
      thumbnail: get(data, "Thumbnail", "thumbnail"),
      website: get(data, "Website", "website"),
      twitter: get(data, "Twitter", "twitter"),
      github: get(data, "GitHub", "github"),
      linkedin: get(data, "Linkedin", "linkedin"),
      facebook: get(data, "Facebook", "facebook"),
      instagram: get(data, "Instagram", "instagram"),
      pinterest: get(data, "Pinterest", "pinterest"),
      youtube: get(data, "YouTube", "youtube"),
      twitch: get(data, "Twitch", "twitch"),
      threads: get(data, "Threads", "threads"),
      bluesky: get(data, "Bluesky", "bluesky"),
      pronouns: get(data, "Pronouns", "pronouns"),
    };
  });

  const byGroup = new Map();
  for (const r of records) {
    const key = r.group ?? `__solo__:${r.stem}`;
    if (!byGroup.has(key)) byGroup.set(key, []);
    byGroup.get(key).push(r);
  }

  const stemToCanonicalId = new Map();
  let personCount = 0;

  for (const members of byGroup.values()) {
    members.sort((a, b) => parseStemOrder(a.stem).order - parseStemOrder(b.stem).order);
    const canonicalId = members[0].stem;
    for (const m of members) stemToCanonicalId.set(m.stem, canonicalId);

    const snapshots = members.map((m) => ({
      key: m.stem,
      bio: m.bio || `(no bio recorded for ${m.stem})`,
      thumbnail: m.thumbnail,
      website: m.website,
      twitter: m.twitter,
      github: m.github,
      linkedin: m.linkedin,
      facebook: m.facebook,
      instagram: m.instagram,
      pinterest: m.pinterest,
      youtube: m.youtube,
      twitch: m.twitch,
      threads: m.threads,
      bluesky: m.bluesky,
      pronouns: m.pronouns,
    }));

    // Most-recently-updated snapshot's name wins as the person's display name.
    const name = members[members.length - 1].name;

    writeYaml(path.join(outDir, `${canonicalId}.yaml`), {
      name,
      snapshots,
      placeholder: false,
    });
    personCount += 1;
  }

  // 11 of the 15 broken episode `guests[]` references are typos/numbering gaps
  // pointing at a real, existing stem — fix them up here rather than at
  // episode-conversion time, so they benefit from the same group resolution.
  const fixMap = {
    bkromhout2: "bkromhout",
    jdixon2: "jdixon",
    jhand1: "jhand",
    jturnbull2: "jturnbull",
    jturnbull3: "jturnbull",
    kkingsbury2: "kkingsbury",
    mcote2: "mcote",
    mimbriaco2: "mimbriaco",
    pburkholder2: "pburkholder",
    smurawski1: "smurawski",
    smurawksi: "smurawski",
  };

  // The remaining 4 have no matching file at all — minimal placeholder persons
  // so the episode's guest chip still renders, flagged for a real bio later.
  const placeholderStems = ["alakhani", "derding", "jteinback", "jvandervoort"];
  for (const s of placeholderStems) {
    writeYaml(path.join(outDir, `${s}.yaml`), {
      name: s,
      snapshots: [{ key: s, bio: "Guest profile not found during migration — needs manual research." }],
      placeholder: true,
    });
    stemToCanonicalId.set(s, s);
    personCount += 1;
  }

  console.log(`guests: ${records.length} legacy files -> ${personCount} persons`);
  return { known: stemToCanonicalId, fixMap };
}

// ---------- episodes ----------

// All three indices (guests, hosts, sponsors) are Maps from legacy stem to
// canonical collection-entry id, so resolution is uniform regardless of
// whether that collection folds multiple stems into one entity or not.
function resolveRefs(rawStems, { known, fixMap }, { kind, episodeStem }) {
  const out = [];
  for (const raw of rawStems) {
    const resolved = known.get(raw) ?? known.get(fixMap[raw]);
    if (resolved) {
      out.push(resolved);
    } else {
      warn(`episode "${episodeStem}": unresolved ${kind} reference "${raw}"`);
    }
  }
  return out;
}

// Guests need BOTH the folded person id (for the reference()) and the
// original stem the episode actually pointed at (for picking the
// era-correct Bio Snapshot off that person — the point of ADR-0002). A
// fixed-up typo/gap (e.g. "jturnbull2" -> "jturnbull") has no snapshot of
// its own, so it falls back to the corrected stem as the snapshot key too.
function resolveGuestRefs(rawStems, { known, fixMap }, { episodeStem }) {
  const out = [];
  for (const raw of rawStems) {
    const snapshotKey = known.has(raw) ? raw : fixMap[raw];
    const person = known.get(raw) ?? known.get(fixMap[raw]);
    if (person) {
      out.push({ person, snapshot: snapshotKey });
    } else {
      warn(`episode "${episodeStem}": unresolved guest reference "${raw}"`);
    }
  }
  return out;
}

// Hugo's {{< figure >}} shortcode appears twice, in one episode body only.
function convertFigureShortcode(body) {
  return body.replace(
    /\{\{<\s*figure\s+([^>]*?)\s*>\}\}/g,
    (_match, attrs) => {
      const get = (name) => attrs.match(new RegExp(`${name}="([^"]*)"`))?.[1];
      const src = get("src");
      const title = get("title") ?? "";
      const link = get("link");
      const img = `![${title}](${src})`;
      return link ? `[${img}](${link})` : img;
    },
  );
}

// Legacy transcript frontmatter points at `/static/transcripts/<slug>.<md|txt>`
// (Hugo's `static/` maps to site root, so that literal path 404s on any real
// server). The transcript becomes its own collection entry; this copies the
// source file over and returns the slug to store as the reference id.
function migrateTranscript(rawPath, transcriptsOutDir, episodeStem) {
  if (!rawPath) return undefined;
  const source = path.join(HUGO_ROOT, rawPath.replace(/^\//, ""));
  if (!fs.existsSync(source)) {
    warn(`episode "${episodeStem}": transcript "${rawPath}" not found at ${source}`);
    return undefined;
  }
  const slug = path.basename(source, path.extname(source));
  fs.copyFileSync(source, path.join(transcriptsOutDir, `${slug}.md`));
  return slug;
}

function migrateEpisodes(guestIndex, hostIndex, sponsorIndex) {
  const dir = path.join(HUGO_ROOT, "content/episode");
  const outDir = path.join(OUT_ROOT, "episodes");
  ensureEmptyDir(outDir);
  const transcriptsOutDir = path.join(OUT_ROOT, "transcripts");
  ensureEmptyDir(transcriptsOutDir);

  // The 2 episodes missing an `episode` number entirely (survey-confirmed):
  // backfill from their alias.
  const episodeNumberFixups = {
    "2018-in-review": "116",
    "jessica-kerr": "159",
  };

  // Aliases must be globally unique — a legacy authoring bug had two episodes
  // each claim the same alias (see issue #5); catch a repeat instead of
  // silently letting one episode's redirect shadow the other's.
  const aliasOwners = new Map();

  let count = 0;
  for (const filePath of listMd(dir, { exclude: ["_index.md"] })) {
    const s = stem(filePath);
    const { data, body } = readHugoFile(filePath);

    let episodeNumber = get(data, "episode", "Episode");
    if (episodeNumber === undefined) {
      episodeNumber = episodeNumberFixups[s];
      if (episodeNumber === undefined) {
        warn(`episode "${s}": no episode number and no fixup on file — leaving unset`);
      }
    }

    const guests = resolveGuestRefs(toArray(get(data, "guests", "Guests")), guestIndex, {
      episodeStem: s,
    });
    const hosts = resolveRefs(toArray(get(data, "hosts", "Hosts")), hostIndex, {
      kind: "host",
      episodeStem: s,
    });
    const sponsors = resolveRefs(toArray(get(data, "sponsors", "Sponsors")), sponsorIndex, {
      kind: "sponsor",
      episodeStem: s,
    });

    const aliases = toArray(get(data, "aliases"));
    for (const alias of aliases) {
      const owner = aliasOwners.get(alias);
      if (owner && owner !== s) {
        warn(`alias "${alias}" claimed by both "${owner}" and "${s}" — keeping "${owner}"`);
      } else {
        aliasOwners.set(alias, s);
      }
    }

    writeMarkdown(
      path.join(outDir, `${s}.md`),
      {
        title: get(data, "title", "Title"),
        description: get(data, "Description", "description") ?? "",
        date: toDate(get(data, "Date", "date")),
        publishDate: toDate(get(data, "PublishDate", "publishdate")),
        episodeNumber: episodeNumber !== undefined ? String(episodeNumber) : undefined,
        podcastFile: get(data, "podcast_file"),
        podcastDuration: get(data, "podcast_duration"),
        podcastBytes: (() => {
          const v = get(data, "podcast_bytes");
          const n = v !== undefined ? Number(v) : undefined;
          return Number.isFinite(n) ? n : undefined;
        })(),
        episodeImage: get(data, "episode_image"),
        episodeBanner: get(data, "episode_banner"),
        images: toArray(get(data, "images")),
        guests,
        hosts,
        sponsors,
        aliases: aliases.filter((a) => aliasOwners.get(a) === s),
        youtube: get(data, "youtube"),
        transcript: migrateTranscript(get(data, "transcript"), transcriptsOutDir, s),
        explicit: get(data, "explicit") === "yes" ? "yes" : "no",
      },
      convertFigureShortcode(body),
    );
    count += 1;
  }
  console.log(`episodes: ${count} files converted`);
}

// ---------- pages: content/page/*.md (8 files, uniform schema) plus
// contact.md and faq.md, whose real prose is worth preserving. about.md and
// search.md are skipped — about.md's legacy body is empty (just a hosts
// array the new design's About page already supersedes) and search.md is a
// pure {{<staticsearch>}} stub with no prose; search's /search alias is a
// phase-5 redirects concern, not a phase-2 content one. ----------

// Every invocation in the source is already preceded by its own `- ` list
// marker (and sometimes followed by trailing prose on the same line) — the
// replacement must NOT add a second one.
function convertPageShortcodes(body) {
  return body
    .replace(
      /\{\{<\s*booklink\s+([^>]*?)\s*>\}\}/g,
      (_m, attrs) => {
        const get = (name) => attrs.match(new RegExp(`${name}="([^"]*)"`))?.[1];
        const url = get("url");
        const title = get("title");
        const author = get("author");
        return `[${title}](${url})${author ? ` — by ${author}` : ""}`;
      },
    )
    .replace(
      /\{\{<\s*podcast\s+([^>]*?)\s*>\}\}/g,
      (_m, attrs) => {
        const get = (name) => attrs.match(new RegExp(`${name}="([^"]*)"`))?.[1];
        const title = get("title");
        const url = get("url");
        const rss = get("rss");
        const itunes = get("itunes");
        const android = get("android");
        const extras = [rss && `[RSS](${rss})`, itunes && `[iTunes](${itunes})`, android && `[Android](${android})`]
          .filter(Boolean)
          .join(" · ");
        return `[${title}](${url})${extras ? ` (${extras})` : ""}`;
      },
    );
}

function migratePages() {
  const outDir = path.join(OUT_ROOT, "pages");
  ensureEmptyDir(outDir);

  let count = 0;
  const pageDir = path.join(HUGO_ROOT, "content/page");
  for (const filePath of listMd(pageDir)) {
    const s = stem(filePath);
    const { data, body } = readHugoFile(filePath);
    writeMarkdown(
      path.join(outDir, `${s}.md`),
      { title: get(data, "title", "Title"), description: get(data, "Description", "description") },
      convertPageShortcodes(body),
    );
    count += 1;
  }

  for (const [rel, s] of [["content/contact.md", "contact"], ["content/faq.md", "faq"]]) {
    const filePath = path.join(HUGO_ROOT, rel);
    const { data, body } = readHugoFile(filePath);
    writeMarkdown(
      path.join(outDir, `${s}.md`),
      { title: get(data, "title", "Title"), description: get(data, "description", "Description") },
      body,
    );
    count += 1;
  }

  console.log(`pages: ${count} files converted`);
}

// ---------- run ----------

if (!fs.existsSync(HUGO_ROOT)) {
  console.error(`Legacy repo not found at ${HUGO_ROOT}. Pass its path as an argument.`);
  process.exit(1);
}

fs.mkdirSync(OUT_ROOT, { recursive: true });

const sponsorIndex = migrateSponsors();
const hostIndex = migrateHosts();
const guestIndex = migrateGuests();
migrateEpisodes(guestIndex, hostIndex, sponsorIndex);
migratePages();

if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  - ${w}`);
} else {
  console.log("\nNo warnings.");
}
