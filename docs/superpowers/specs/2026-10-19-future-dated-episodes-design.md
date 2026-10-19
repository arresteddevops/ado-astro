# Hide future-dated episodes until go-live (issue #131)

## Why

Episode 209 went out late because the PR merged late and nobody remembered. The
goal is to be able to merge an episode (plus its guest and artwork) any time, and
have it go live by itself at a known moment, with no human step on publish day.

The audio is already public on Blubrry well before the episode date, so the site
and its feed are the only gate. Until an episode is live, nothing on
arresteddevops.com should reveal it: no page, no listing, no search hit, no
redirect, no sitemap entry, and above all **no item in `/episode/index.xml`**.
Podcast apps and directories ingest the feed, and an early leak can't be undone.

## Goals

- An episode with a future go-live is invisible in production until that moment.
- It appears by itself at go-live, with no human step.
- If it fails to appear, someone finds out immediately (the 209 failure mode must
  not be silent).
- Authors can still review unpublished episodes in deploy previews and branch
  deploys.

## Non-goals

- Changing the feed URL, channel metadata, or the shape of existing items.
- Anything about Blubrry hosting.
- Per-minute scheduling. One go-live time of day, for all episodes.
- Rewriting `pubDate` on existing episodes (see "Feed").

## Anti-goals

- A scheduler that dies quietly. Silent failure is the same bug as 209.
- A feed that changes when nothing is due (don't churn `lastBuildDate` for no reason).
- A published episode ever dropping out of the feed. Directories can read that as a
  deletion.

## Decisions (from Matty)

- **Go-live is 6:00 am US Eastern on the episode's `date`.** That is 10:00 UTC in
  summer and 11:00 UTC in winter.
- Missing a go-live by forgetting to merge is the problem being solved, so the
  rebuild trigger is automatic and is the core of the feature, not an add-on.
- The feed is the part to be most careful with.

## Design (the how, with who decided)

### The gate

- `date` is the gate. `publishDate` stays what it is today: the feed item's
  `<pubDate>` (`publishDate ?? date`). By convention they are equal; document that.
  *(Builder's call, mine.)*
- Go-live instant for an episode = 06:00 `America/New_York` on the calendar day of
  `date`. `date` is `z.coerce.date()`. New episodes use a bare date (midnight UTC),
  but older ones carry a full timestamp (e.g. `2017-05-08T00:59:40.000Z`), so in both
  cases read the Y-M-D with the UTC getters and convert. A timestamp late in the UTC
  day therefore resolves to the *next* UTC calendar day's 6am ET; document that new
  episodes should use a bare date.
- One helper answers "is this episode live at time T?" and every consumer goes
  through it. The scripts under `scripts/` run before `astro build` and can't import
  `astro:content`, so the helper is plain JS in `scripts/lib/` that
  `src/lib/episodes.ts` imports too. One implementation, no drift.
- Consumers that must filter, from grep of `src/` and `scripts/`:
  `src/lib/episodes.ts` (`getEpisodesNewestFirst`), `src/lib/guests.ts`,
  `src/lib/hosts.ts`, `src/pages/[episode].astro`, `index.astro`,
  `page/[page].astro`, `search.astro`, `about.astro`, `episode/index.xml.ts`,
  `scripts/generate-redirects.mjs`, `generate-og-images.mjs`,
  `generate-social-cards.mjs`. The `@astrojs/sitemap` integration lists generated
  pages, so it needs no change once `[episode].astro` stops generating them. The
  builder should still check that.
- The list above is from grep and may be incomplete. The builder re-greps for
  anything else that reads episodes, including sponsor pages that list episodes,
  transcript routes, and any other feed exclusions, and applies the same rule: not
  live in production means not reachable and not listed.
- Unpublished episodes in production: no page, no alias redirect, no OG or social
  image. `/211` is a 404 until go-live. *(My call.)*
- Guests and hosts whose only episodes are unpublished: **no page and no redirect in
  production** until their first live episode, or the guest page for episode 211
  leaks the episode's existence. *(My call; the issue doesn't mention it.)*

### Preview behavior

The gate is **off** for Netlify `CONTEXT` of `deploy-preview` and `branch-deploy`,
and for `astro dev`. It is **on** everywhere else (production, and a local
`pnpm build` with no `CONTEXT`), so the safe default is hidden. *(My call.)*

### The feed

- `index.xml` is built from the same helper. Items are filtered the same way as
  pages.
- `pubDate` is **not changed**. An item enters the feed at 06:00 ET or later, and its
  `pubDate` (midnight UTC that day, i.e. the evening before in ET) is already in the
  past by then, so no item ever has a future `pubDate`. Rewriting existing
  `pubDate`s would churn ~200 items for no benefit.
- Two build-time guards, run after `astro build` against `dist/episode/index.xml`
  (new script, added to the `build` chain in `package.json`):
  1. Fail if any item is for an episode that isn't live yet (production gate only).
  2. Fail if any episode that is live is missing from the feed.
  Neither can be bypassed by the filter, because they check the built output
  independently of the helper's filtering code.

### The go-live trigger

- A scheduled GitHub Action (`.github/workflows/`; today only `codeql.yml` exists)
  fires at **10:05 and 11:05 UTC** daily so both sides of DST are covered. It checks
  out the repo and asks the shared helper which episodes are live right now, then
  fetches the live feed. Only if a live episode is **absent from the live feed** does
  it POST to a Netlify build hook. This replaces a time-window check ("went live in
  the last hour"), which would double-fire in summer when both runs land within two
  hours of the same go-live, and would miss a run GitHub delays past the window. The
  absent-from-feed check is idempotent, so the second run is a no-op and a late run
  still works. On days nothing is due it does nothing, so the feed and
  `lastBuildDate` don't change needlessly. *(My call.)*
- After triggering, it polls `https://www.arresteddevops.com/episode/index.xml` for
  the new episode (bounded wait, e.g. ~15 min) and **fails the run if the episode
  isn't there**. Failure notification is GitHub's default Actions failure email.
  *(My call; Slack alerting is left out until wanted.)*
- Netlify build hook URL is a secret in the repo's GitHub Actions secrets. Creating
  the hook and the secret is a manual step for Matty and is listed in the plan.
- Known weak spots, accepted: GitHub can delay or drop scheduled runs, and disables
  scheduled workflows after 60 days of repo inactivity. The post-trigger feed check
  covers the delayed and failed cases. An episode merged *after* its go-live instant
  (late merge) goes live on the merge's own deploy, with no cron involved.
- Escape hatch: to go live early, change `date` and merge; the normal deploy shows
  it. To publish at an exact time other than 6am, trigger the build hook by hand.

### Documentation

- **ADR-0006** (short): withholding feed items until go-live is a deliberate change to
  the feed's behavior per `CLAUDE.md`. Records the 6am ET decision, the two build
  guards, and why `pubDate` is untouched.
- Update `create-episode` skill and `CLAUDE.md` so the `date` field's meaning is
  written down: it is the go-live date, and it can be in the future.

## Constraints

- URLs must not break; feed URL and existing item GUIDs are unchanged.
- `netlify.toml` stays the build source of truth. No change expected beyond what the
  build chain needs.
- Build needs Node 22; tests and the build run under it.

## Left to the builder

- Exact shape of the shared helper and where the DST conversion lives (`Intl` with
  `America/New_York` is enough; no date library).
- How to unit-test the helper and the feed guards (fixtures with fake `now`).
- Poll interval and timeout on the post-trigger feed check.
- Whether `search.astro` / Pagefind needs anything beyond the pages no longer being
  generated.
