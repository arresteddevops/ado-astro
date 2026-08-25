#!/usr/bin/env node
// Crawls the legacy production sitemap and confirms every URL in it still
// resolves on the new site — either as a real built page, or via a 301 in
// the generated public/_redirects (dead Hugo pages shadowed by a working
// redirect count as passing; see issue #5). Run after `pnpm run build`.

import fs from "node:fs";
import path from "node:path";

const SITEMAP_URL = process.env.PRODUCTION_SITEMAP_URL ?? "https://www.arresteddevops.com/sitemap.xml";
const DIST_DIR = process.env.DIST_DIR ?? "dist";
const REDIRECTS_PATH = process.env.REDIRECTS_PATH ?? path.join(DIST_DIR, "_redirects");

const IGNORE_PATTERNS = [
  // Hugo's default pagination size differs from this site's (9/page — see
  // src/lib/episodes.ts), so the two sites' /page/N/ counts don't line up.
  // Nobody links to a specific pagination page; not a broken-link concern.
  /^\/page\/\d+\/?$/,
  // Hugo auto-generates a list page for every content type and taxonomy,
  // even ones with no reader-facing equivalent here: /episode/ and /page/
  // (the episode list lives at "/" instead), /redirect/ and /sponsor/
  // (internal-only content types, never meant to be browsed), /categories/
  // and /tags/ (taxonomies this site never used — see CONTEXT.md).
  /^\/(episode|page|redirect|sponsor|categories|tags)\/?$/,
  // Leftover Hugo theme demo content (castanet's example posts) — never
  // real site content.
  /^\/post(\/(first|second))?\/?$/,
];

function pagePathname(url) {
  return new URL(url).pathname.replace(/\/$/, "") || "/";
}

function loadRedirects(redirectsPath) {
  const rules = new Map();
  if (!fs.existsSync(redirectsPath)) return rules;
  for (const line of fs.readFileSync(redirectsPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [from, to] = trimmed.split(/\s+/);
    rules.set(from.replace(/\/$/, "") || "/", to);
  }
  return rules;
}

function existsAsPage(pathname) {
  const trimmed = pathname.replace(/^\//, "");
  const file = trimmed ? path.join(DIST_DIR, trimmed, "index.html") : path.join(DIST_DIR, "index.html");
  return fs.existsSync(file);
}

// Follows redirect hops (bounded) until landing on a real page (pass), an
// external URL (pass — that's the expected legacy stub behavior), or
// nothing (broken).
function resolve(pathname, redirects, hops = 0) {
  if (existsAsPage(pathname)) return { ok: true, via: hops > 0 ? "redirect" : "page" };
  if (hops > 5) return { ok: false, reason: "too many redirect hops" };
  const target = redirects.get(pathname);
  if (!target) return { ok: false, reason: "no page and no redirect rule" };
  if (target.startsWith("http://") || target.startsWith("https://")) {
    return { ok: true, via: "redirect-external" };
  }
  return resolve(target, redirects, hops + 1);
}

const res = await fetch(SITEMAP_URL);
if (!res.ok) throw new Error(`fetch ${SITEMAP_URL} failed: ${res.status}`);
const sitemapXml = await res.text();
const urls = [...sitemapXml.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);

const redirects = loadRedirects(REDIRECTS_PATH);
const pathnames = [...new Set(urls.map(pagePathname))].filter(
  (p) => !IGNORE_PATTERNS.some((re) => re.test(p)),
);

const broken = [];
for (const pathname of pathnames) {
  const result = resolve(pathname, redirects);
  if (!result.ok) broken.push({ pathname, reason: result.reason });
}

if (broken.length > 0) {
  console.error(`Link check FAILED: ${broken.length}/${pathnames.length} broken.`);
  for (const b of broken) console.error(`  - ${b.pathname}: ${b.reason}`);
  process.exit(1);
}

console.log(`Link check passed: ${pathnames.length} legacy URLs all resolve (page or 301).`);
