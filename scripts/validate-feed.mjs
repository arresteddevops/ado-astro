#!/usr/bin/env node
// Diffs the built Astro feed against the live production feed: same item
// count, same GUIDs, same enclosure URLs, same order. Run after `pnpm run
// build` — see ADR-0001 and issue #4. Exits non-zero on any mismatch.

import { readFile } from "node:fs/promises";

const PRODUCTION_FEED_URL =
  process.env.PRODUCTION_FEED_URL ?? "https://www.arresteddevops.com/episode/index.xml";
const NEW_FEED_PATH = process.env.NEW_FEED_PATH ?? "dist/episode/index.xml";

function extractTagValues(xml, tag) {
  const re = new RegExp(`<${tag}>([^<]*)</${tag}>`, "g");
  return [...xml.matchAll(re)].map((m) => m[1].trim());
}

function extractEnclosureUrls(xml) {
  const re = /<enclosure url="([^"]*)"/g;
  return [...xml.matchAll(re)].map((m) => m[1]);
}

async function loadFeed(source) {
  if (source.startsWith("http://") || source.startsWith("https://")) {
    const res = await fetch(source);
    if (!res.ok) throw new Error(`fetch ${source} failed: ${res.status}`);
    return res.text();
  }
  return readFile(source, "utf8");
}

function diffList(label, a, b) {
  const errors = [];
  if (a.length !== b.length) {
    errors.push(`${label}: count differs — production ${a.length}, new ${b.length}`);
  }
  const len = Math.min(a.length, b.length);
  for (let i = 0; i < len; i++) {
    if (a[i] !== b[i]) {
      errors.push(`${label}: mismatch at index ${i} — production "${a[i]}", new "${b[i]}"`);
    }
  }
  return errors;
}

const [productionXml, newXml] = await Promise.all([
  loadFeed(PRODUCTION_FEED_URL),
  loadFeed(NEW_FEED_PATH),
]);

const productionGuids = extractTagValues(productionXml, "guid");
const newGuids = extractTagValues(newXml, "guid");
const productionEnclosures = extractEnclosureUrls(productionXml);
const newEnclosures = extractEnclosureUrls(newXml);

const errors = [
  ...diffList("guid", productionGuids, newGuids),
  ...diffList("enclosure", productionEnclosures, newEnclosures),
];

if (errors.length > 0) {
  console.error(`Feed validation FAILED (${errors.length} issue(s)):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(`Feed validation passed: ${newGuids.length} items, GUIDs/enclosures/order match production.`);
