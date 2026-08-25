# Rebuild the podcast feed as an Astro endpoint

Every podcast app subscription points at `/episode/index.xml`, so the feed URL cannot
change. We rebuild the feed as a custom Astro endpoint at that exact path rather than
outsourcing to a podcast host (permanent redirect dependency, subscriber migration risk)
or keeping Hugo alive just for the feed. GUIDs are deterministic — `media_prefix +
podcast_file` — so the Astro feed can reproduce them exactly; the feed carries all 205
episodes and is validated by diffing parsed items (GUIDs, enclosures, order) against the
production feed before cutover.
