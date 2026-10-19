#!/usr/bin/env node
// Used by .github/workflows/go-live.yml (issue #131, ADR-0006).
//   due     prints due=true|false: is a live episode (per the repo) absent from
//           the live feed? A failed fetch exits non-zero, never "due=false".
//   verify  polls the live feed until nothing is missing; exits 1 on timeout.
//           [--timeout-seconds 900] [--interval-seconds 30]
// GO_LIVE_FEED_URL overrides the feed URL (for local testing).

import fs from "node:fs";
import path from "node:path";
import { readEpisodes, liveEpisodeNumbers } from "./lib/episode-files.mjs";
import { parseFeedEpisodeNumbers, diffFeed, fetchFeedXml } from "./lib/feed.mjs";

const FEED_URL = process.env.GO_LIVE_FEED_URL ?? "https://www.arresteddevops.com/episode/index.xml";
const REPO_ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");

function flag(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? fallback : Number(process.argv[i + 1]);
}

const missingNow = async () =>
  diffFeed(parseFeedEpisodeNumbers(await fetchFeedXml(fetch, FEED_URL)), liveEpisodeNumbers(readEpisodes(REPO_ROOT))).missing;

const mode = process.argv[2];

if (mode === "due") {
  const missing = await missingNow();
  const due = missing.length > 0;
  console.log(due ? `due=true (missing from live feed: ${missing.join(", ")})` : "due=false");
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `due=${due}\n`);
} else if (mode === "verify") {
  const deadline = Date.now() + flag("timeout-seconds", 900) * 1000;
  const intervalMs = flag("interval-seconds", 30) * 1000;
  for (;;) {
    let missing;
    try {
      missing = await missingNow();
    } catch (err) {
      missing = [`(feed fetch failed: ${err.message})`];
    }
    if (missing.length === 0) {
      console.log("verify OK: every live episode is in the live feed.");
      break;
    }
    if (Date.now() >= deadline) {
      console.error(`verify FAILED: still missing from the live feed: ${missing.join(", ")}`);
      process.exit(1);
    }
    console.log(`waiting for the deploy... still missing: ${missing.join(", ")}`);
    await new Promise((r) => setTimeout(r, intervalMs));
  }
} else {
  console.error("usage: go-live-check.mjs due | verify [--timeout-seconds N] [--interval-seconds N]");
  process.exit(2);
}
