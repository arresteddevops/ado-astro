import { test } from "node:test";
import assert from "node:assert/strict";
import { parseFeedEpisodeNumbers, diffFeed, isDue, fetchFeedXml } from "./feed.mjs";

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

test("isDue is false when the live feed already has every live episode", () => {
  assert.equal(isDue(XML, new Set(["210", "211"])), false);
});

test("isDue is true when a live episode is absent from the live feed", () => {
  assert.equal(isDue(XML, new Set(["210", "211", "212"])), true);
});

test("isDue ignores an extra item in the feed (that's the build guard's job)", () => {
  assert.equal(isDue(XML, new Set(["210"])), false);
});

test("fetchFeedXml returns the body on a 2xx", async () => {
  const fetchImpl = async () => ({ ok: true, status: 200, text: async () => XML });
  assert.equal(await fetchFeedXml(fetchImpl, "https://example.test/feed"), XML);
});

test("fetchFeedXml rejects on a non-2xx so a failed fetch can't read as 'nothing due'", async () => {
  const fetchImpl = async () => ({ ok: false, status: 503, text: async () => "" });
  await assert.rejects(() => fetchFeedXml(fetchImpl, "https://example.test/feed"), /503/);
});
