# Future-dated episodes are withheld until go-live

Episode 209 went out late because its PR merged late and nobody remembered. Issue #131
asked for the opposite of the old process ("hold the PR until publish day"): merge an
episode, its guest and its artwork whenever, and have it appear on its date by itself.

The audio is already public on Blubrry well before an episode's date, so this site and its
feed are the only gate. The feed is what podcast apps and directories read to learn what
is live, and an item that leaks into it early can't be recalled. That makes this a change
to feed behavior, which `CLAUDE.md` says needs a decision, not an accident.

## Decision

An episode is **live at 06:00 America/New_York on the UTC calendar day of its `date`**
(10:00Z in summer, 11:00Z in winter). Before that moment, in production, it has no page,
no listing or search entry, no redirect alias, no OG/social image, no sitemap entry, and
**no item in `/episode/index.xml`**. A guest or host whose every episode is unreleased
gets no page or redirects either, or their page would leak the episode.

- **`date` is the gate.** `publishDate` stays the feed item's `<pubDate>`
  (`publishDate ?? date`) and is by convention equal to `date`.
- **`pubDate` is deliberately untouched.** An item enters the feed at 06:00 ET or later,
  and its `pubDate` (midnight UTC that day) is already in the past by then, so no item ever
  has a future `pubDate`. Rewriting `pubDate` to the go-live instant would have changed
  ~200 existing items for no benefit. GUIDs, feed URL and channel metadata are unchanged.
- **One rule, one implementation.** `scripts/lib/go-live.mjs` is plain JS so the Astro code
  and the pre-build scripts (which can't import `astro:content`) agree.
- **Preview deploys show everything.** The gate is off for Netlify `CONTEXT` of
  `deploy-preview` and `branch-deploy` and in `astro dev`, on everywhere else (so a local
  build with no `CONTEXT` hides future episodes).
- **Two build guards**, `scripts/check-feed.mjs`, run after `astro build` against
  `dist/episode/index.xml`: the build fails if an unreleased episode is in the feed
  (leak) or a live episode is missing from it (a published item dropping out can read as a
  deletion to directories). They read the built output independently of the filtering
  code, so a filter bug can't hide itself.
- **An automatic go-live rebuild.** The site is static, so a hidden episode stays hidden
  until something rebuilds it. `.github/workflows/go-live.yml` runs at 10:05Z and 11:05Z
  daily (both sides of DST), checks whether a live episode is absent from the live feed,
  and only then POSTs to a Netlify build hook (secret `NETLIFY_BUILD_HOOK`), then polls
  the live feed and fails the run if the episode never appears. The check is idempotent,
  so the run on the wrong side of DST, and any late run, is a no-op, and the feed only
  changes when an episode is actually due.

## Consequences

- Merging an episode early is safe and intended. Merging one *after* its go-live time
  makes it live on that merge's own deploy, with no cron involved.
- Going live early: change `date` and merge. At an exact non-6am time: trigger the build
  hook by hand.
- Accepted weak spots: GitHub can delay or drop scheduled runs, and disables scheduled
  workflows after 60 days with no repo activity. The post-trigger feed check covers the
  delayed and failed cases; failures surface as GitHub's default failure email.
- New episodes should use a bare `YYYY-MM-DD` `date`. Older episodes carry full
  timestamps; a timestamp late in the UTC day resolves to the next UTC day's 6am ET.
