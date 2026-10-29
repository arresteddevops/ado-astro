#!/usr/bin/env node
// Post-build guard (issue #131, ADR-0006): the built feed must contain exactly
// the episodes that are live under the current gate. Checks dist/ independently
// of the filtering code, so a bug in the filter can't hide itself.
//   leaked  -> an unreleased episode is in the feed (podcast apps would ingest it)
//   missing -> a live episode dropped out (directories can read that as a deletion)
// Run after `astro build` (see package.json). Exits 1 on either.

import fs from "node:fs";
import path from "node:path";
import { readEpisodes, liveEpisodeNumbers } from "./lib/episode-files.mjs";
import { parseFeedEpisodeNumbers, diffFeed } from "./lib/feed.mjs";

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const REPO_ROOT = path.resolve(scriptDir, "..");

const feed = parseFeedEpisodeNumbers(fs.readFileSync(path.join(REPO_ROOT, "dist/episode/index.xml"), "utf8"));
const expected = liveEpisodeNumbers(readEpisodes(REPO_ROOT));
const { leaked, missing } = diffFeed(feed, expected);

if (leaked.length > 0 || missing.length > 0) {
  if (leaked.length > 0) console.error(`Feed check FAILED: unreleased episode(s) leaked into the feed: ${leaked.join(", ")}`);
  if (missing.length > 0) console.error(`Feed check FAILED: live episode(s) missing from the feed: ${missing.join(", ")}`);
  process.exit(1);
}
console.log(`Feed check OK: ${feed.size} item(s), matches the go-live gate.`);
