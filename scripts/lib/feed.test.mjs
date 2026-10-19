import { test } from "node:test";
import assert from "node:assert/strict";
import { parseFeedEpisodeNumbers, diffFeed } from "./feed.mjs";

const XML = `<channel>
  <item><title>A</title><itunes:episode>210</itunes:episode></item>
  <item><title>B</title><itunes:episode>211</itunes:episode></item>
</channel>`;

test("parseFeedEpisodeNumbers collects every item's itunes:episode", () => {
  assert.deepEqual([...parseFeedEpisodeNumbers(XML)].sort(), ["210", "211"]);
});

test("diffFeed reports a leaked item and a missing one, sorted", () => {
  const out = diffFeed(new Set(["210", "211", "212"]), new Set(["209", "210"]));
  assert.deepEqual(out, { leaked: ["211", "212"], missing: ["209"] });
});

test("diffFeed is empty when the feed matches what's expected", () => {
  assert.deepEqual(diffFeed(new Set(["1", "2"]), new Set(["2", "1"])), { leaked: [], missing: [] });
});
