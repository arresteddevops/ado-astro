// Podcast feed checks shared by the post-build guard (scripts/check-feed.mjs)
// and the go-live Action (scripts/go-live-check.mjs). Issue #131.

/** @param {string} xml @returns {Set<string>} every item's <itunes:episode> number */
export function parseFeedEpisodeNumbers(xml) {
  return new Set([...xml.matchAll(/<itunes:episode>(\d+)<\/itunes:episode>/g)].map((m) => m[1]));
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
