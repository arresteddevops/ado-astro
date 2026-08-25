#!/usr/bin/env node
// Generates the Netlify `public/_redirects` file from this repo's own
// content — regenerated on every build (see package.json "build") so it can
// never drift from what's actually in src/content/. See ADR-0002, PRD
// decision 2, and issue #5.
//
// Three sources:
//   1. Legacy vanity-URL stubs, carried over verbatim from ado-hugo's
//      static/_redirects (src/data/redirect-stubs.txt) — these point at
//      external URLs with no equivalent in this repo's content.
//   2. Episode aliases (e.g. /205) -> the episode's canonical /:slug/.
//   3. Guest version URLs: every non-canonical Bio Snapshot key (a folded
//      guest's old per-episode stem, e.g. /guest/pcheslock2) -> the
//      canonical person page. Derived by diffing each guest's snapshot
//      keys against its own id — no separate mapping to maintain.

import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const REPO_ROOT = path.resolve(scriptDir, "..");
const OUT_PATH = path.join(REPO_ROOT, "public/_redirects");

// Episodes (.md) have `---`-delimited frontmatter; guests (.yaml) are plain YAML.
function readFrontmatter(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  return YAML.parse(match ? match[1] : raw);
}

function listFiles(dir, ext) {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(ext))
    .map((f) => path.join(dir, f));
}

const rules = [];
function addRule(from, to, source) {
  rules.push({ from, to, code: "301!", source });
}

// 1. Legacy vanity-URL stubs (already "<from> <to> <code>" lines).
const stubsPath = path.join(REPO_ROOT, "src/data/redirect-stubs.txt");
for (const line of fs.readFileSync(stubsPath, "utf8").split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const [from, to] = trimmed.split(/\s+/);
  addRule(from, to, "stub");
}

// 2. Episode aliases.
for (const file of listFiles(path.join(REPO_ROOT, "src/content/episodes"), ".md")) {
  const id = path.basename(file, ".md");
  const data = readFrontmatter(file);
  for (const alias of data.aliases ?? []) {
    addRule(alias, `/${id}/`, "alias");
  }
}

// 3. Guest version URLs.
for (const file of listFiles(path.join(REPO_ROOT, "src/content/guests"), ".yaml")) {
  const id = path.basename(file, ".yaml");
  const data = readFrontmatter(file);
  for (const snapshot of data.snapshots ?? []) {
    if (snapshot.key !== id) {
      addRule(`/guest/${snapshot.key}`, `/guest/${id}/`, "guest-version");
    }
  }
}

// 4. The root feed alias.
addRule("/index.xml", "/episode/index.xml", "feed");

// Duplicate "from" paths would silently shadow each other in Netlify's
// _redirects (first match wins) — surface that instead of guessing.
const bySource = new Map();
for (const rule of rules) {
  if (!bySource.has(rule.from)) bySource.set(rule.from, []);
  bySource.get(rule.from).push(rule);
}
const warnings = [];
for (const [from, group] of bySource) {
  if (group.length > 1) {
    warnings.push(`${from} defined ${group.length}x (${group.map((r) => r.source).join(", ")}) — first wins`);
  }
}

const lines = rules.map((r) => `${r.from}  ${r.to}  ${r.code}`);
fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, lines.join("\n") + "\n");

console.log(`Generated public/_redirects: ${rules.length} rules.`);
if (warnings.length > 0) {
  console.log(`Warnings (${warnings.length}):`);
  for (const w of warnings) console.log(`  - ${w}`);
} else {
  console.log("No warnings.");
}
