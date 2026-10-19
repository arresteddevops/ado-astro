// Podcast feed checks shared by the post-build guard (scripts/check-feed.mjs)
// and the go-live Action (scripts/go-live-check.mjs). Issue #131.

/** @param {string} xml @returns {Set<string>} every item's <itunes:episode> number */
export function parseFeedEpisodeNumbers(xml) {
  return new Set([...xml.matchAll(/<itunes:episode>(\d+)<\/itunes:episode>/g)].map((m) => m[1]));
}

/**
 * True iff a live episode is absent from the live feed, i.e. a rebuild is due.
 * Idempotent: once the feed has it, this is false, so a second cron run is a no-op.
 * @param {string} feedXml
 * @param {Set<string>} expected episode numbers that are live right now
 */
export function isDue(feedXml, expected) {
  return diffFeed(parseFeedEpisodeNumbers(feedXml), expected).missing.length > 0;
}

/**
 * Throws on any non-2xx so a failed fetch fails the run instead of reading as
 * "nothing due".
 * @param {typeof fetch} fetchImpl
 * @param {string} url
 */
export async function fetchFeedXml(fetchImpl, url) {
  const res = await fetchImpl(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return res.text();
}

/**
 * leaked: in the feed but shouldn't be (an unreleased episode got out).
 * missing: should be in the feed but isn't (a live episode dropped out).
 * @param {Set<string>} feed
 * @param {Set<string>} expected
 */
export function diffFeed(feed, expected) {
  return {
    leaked: [...feed].filter((n) => !expected.has(n)).sort(),
    missing: [...expected].filter((n) => !feed.has(n)).sort(),
  };
}
