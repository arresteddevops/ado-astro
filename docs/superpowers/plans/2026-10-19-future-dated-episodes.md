# Future-Dated Episodes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** An episode whose `date` is in the future is invisible in production (pages, listings, search, redirects, images, feed) until 6:00 am US Eastern on its date, and goes live then with no human step.

**Architecture:** One plain-JS helper (`scripts/lib/go-live.mjs`) answers "is this live?" and is imported by both the Astro code and the pre-build scripts. A post-build guard checks the built feed against the same rule. A scheduled GitHub Action pings a Netlify build hook only when a live episode is missing from the live feed, then verifies it appeared.

**Tech Stack:** Astro 7 (static), Node 22 (`node --test`, no new deps), `yaml` (already a devDependency), GitHub Actions, Netlify build hook.

**Spec:** `docs/superpowers/specs/2026-10-19-future-dated-episodes-design.md`

## Global Constraints

- Go-live instant is 06:00 `America/New_York` on the UTC calendar day of `date` (10:00Z in EDT, 11:00Z in EST).
- `date` is the gate. `publishDate` stays the feed item's `<pubDate>` (`publishDate ?? date`). **`pubDate` and all existing feed items must not change.**
- The gate is OFF when `CONTEXT` is `deploy-preview` or `branch-deploy`, and in `astro dev`. It is ON otherwise (production, and local builds with no `CONTEXT`).
- A guest/host with at least one episode, none of them live, gets no page and no redirects in production. A guest/host with zero episodes at all is unaffected.
- No new dependencies. Tests use `node:test`.
- Node 22 required: prefix commands with `PATH="$HOME/.nvm/versions/node/v22.22.2/bin:$PATH"` (default shell is Node 20 and `astro build` fails on it).
- Feed URL, channel metadata, GUIDs unchanged. Package manager is pnpm.

## Review Focus

- A `date` with a time component (`2026-11-12T01:00:00Z`) gates on its UTC calendar day: 6am ET Nov 12, not Nov 11. Pinned in Task 1.
- A guest in one live and one unreleased episode keeps their page, and the page and the guest-list count show only the live one. Pinned in Task 5.
- Deploy previews show everything, and the feed guard does not fail there (it compares against the same gate). Pinned in Tasks 4 and 5.
- The Action's cron run is a no-op when the feed already has every live episode, and it **fails** (not "nothing due") if the live feed fetch errors. Pinned in Task 6.
- A future episode's aliases (`/211`) and guest-version redirects are absent from `public/_redirects`. Pinned in Task 5.

---

### Task 1: Go-live helper

**Files:**
- Create: `scripts/lib/go-live.mjs`
- Create: `scripts/lib/go-live.test.mjs`
- Modify: `package.json` (add script `"test": "node --test \"scripts/**/*.test.mjs\""`)

**Interfaces:**
- Produces (all exported from `scripts/lib/go-live.mjs`, with JSDoc types):
  - `goLiveInstant(date: Date): Date`
  - `gateEnabled(env?: { CONTEXT?: string }, dev?: boolean): boolean`: `false` if `dev`, or `env.CONTEXT` is `deploy-preview` or `branch-deploy`; else `true`. `env` defaults to `process.env`.
  - `isLive(date: Date, opts?: { now?: Date, gate?: boolean }): boolean`: `true` when `gate` is false; else `now >= goLiveInstant(date)`. Defaults: `now = new Date()`, `gate = gateEnabled()`.
  - `unreleasedPersonIds(episodes: { date: Date, guestIds: string[], hostIds: string[] }[], opts?: { now?: Date, gate?: boolean }): { guests: Set<string>, hosts: Set<string> }`: ids that appear in at least one episode where none of their episodes are live.

- [ ] **Step 1: Write the failing tests in `scripts/lib/go-live.test.mjs`**
  - `goLiveInstant` of `new Date("2026-11-11")` equals `2026-11-11T11:00:00.000Z` (EST); of `2026-07-15` equals `2026-07-15T10:00:00.000Z` (EDT).
  - DST edges: `2026-03-08` (spring forward) equals `10:00Z`; `2026-11-01` (fall back) equals `11:00Z`.
  - Time-component date: `new Date("2026-11-12T01:00:00Z")` equals `2026-11-12T11:00:00.000Z`.
  - `isLive`: false at instant minus 1 ms, true at the instant, true when `gate: false` for a far-future date.
  - `gateEnabled`: `{CONTEXT:"production"}` true, `{}` true, `deploy-preview` false, `branch-deploy` false, `({}, true)` false.
  - `unreleasedPersonIds`: a guest only in a future episode is returned; a guest in one future and one past episode is not; a host only in future episodes is returned in `hosts`; with `gate: false` both sets are empty.
- [ ] **Step 2: Run `pnpm test`.** Expected: FAIL, module not found.
- [ ] **Step 3: Implement the four functions in `scripts/lib/go-live.mjs`.** For `goLiveInstant`, take Y-M-D from the UTC getters, try 10:00Z then 11:00Z on that day, and return the one whose `Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hour: "numeric", hourCycle: "h23" })` hour is 6. Add the `test` script to `package.json`.
- [ ] **Step 4: Run `pnpm test`.** Expected: PASS, all tests.
- [ ] **Step 5: Commit** `feat: add go-live helper (issue #131)`

---

### Task 2: Astro site consumes the helper

**Files:**
- Modify: `src/lib/episodes.ts`, `src/lib/guests.ts`, `src/lib/hosts.ts`
- Modify: `src/pages/[episode].astro` (`getStaticPaths`), `src/pages/about.astro:7`, `src/pages/search.astro:5-6`
- Modify: `src/pages/guest/[slug].astro` (`getStaticPaths`), `src/pages/host/[slug].astro` (`getStaticPaths`)

**Interfaces:**
- Consumes: `isLive`, `gateEnabled`, `unreleasedPersonIds` from `scripts/lib/go-live.mjs` (pass `gateEnabled(process.env, import.meta.env.DEV)` as `gate`).
- Produces, in `src/lib/episodes.ts`:
  - `getLiveEpisodes(): Promise<CollectionEntry<"episodes">[]>`: all episodes passing `isLive`.
  - `getUnreleasedPersonIds(): Promise<{ guests: Set<string>, hosts: Set<string> }>`: wraps `unreleasedPersonIds`, mapping entries to `{ date: data.date, guestIds: data.guests.map(g => g.person.id), hostIds: data.hosts.map(h => h.id) }`.
  - `getEpisodesNewestFirst()` keeps its signature and now sorts `getLiveEpisodes()`.

- [ ] **Step 1: Capture a baseline.** `PATH=... pnpm build` on the current tree (no future episodes exist), then `find dist -type f | sort > <scratchpad>/dist-before.txt` and count `<item>` in `dist/episode/index.xml`.
- [ ] **Step 2: Add `getLiveEpisodes` and `getUnreleasedPersonIds`** to `src/lib/episodes.ts`; make `getEpisodesNewestFirst` use the former.
- [ ] **Step 3: Switch consumers.** `[episode].astro`, `about.astro` and `search.astro` use `getLiveEpisodes()`. `getEpisodesByGuestId` and `getEpisodesByHostId` build from `getLiveEpisodes()`. `getGuestsSorted` additionally drops ids in `getUnreleasedPersonIds().guests`. The `getStaticPaths` of `guest/[slug].astro` and `host/[slug].astro` skip ids in the matching unreleased set. `about.astro` already gets its guest count from `getGuestsSorted()`, so it needs nothing more. `search.astro` counts `getCollection("guests")` (placeholders included, keep that), so filter out ids in `getUnreleasedPersonIds().guests` before taking `.length`.
- [ ] **Step 4: Verify no regression.** Rebuild; `find dist -type f | sort` diffed against `dist-before.txt` is empty, and the `<item>` count is unchanged. Expected: identical.
- [ ] **Step 5: Commit** `feat: gate site pages on episode go-live (issue #131)`

---

### Task 3: Pre-build scripts consume the helper

**Files:**
- Create: `scripts/lib/episode-files.mjs`
- Modify: `scripts/generate-redirects.mjs`, `scripts/generate-og-images.mjs`, `scripts/generate-social-cards.mjs`

**Interfaces:**
- Consumes: `isLive`, `unreleasedPersonIds` (Task 1).
- Produces, in `scripts/lib/episode-files.mjs`:
  - `readEpisodes(repoRoot: string): { slug: string, date: Date, episodeNumber: string, guestIds: string[], hostIds: string[], data: object }[]`: reads `src/content/episodes/*.md` frontmatter with `yaml` (note `yaml` leaves dates as strings; wrap in `new Date(...)`).
  - `liveEpisodeNumbers(episodes: ReturnType<typeof readEpisodes>, opts?: { now?: Date, gate?: boolean }): Set<string>`

- [ ] **Step 1: Implement `episode-files.mjs`.**
- [ ] **Step 2: Gate `generate-redirects.mjs`.** Skip alias rules for episodes that are not live; skip guest-version rules for ids in `unreleasedPersonIds(...).guests`.
- [ ] **Step 3: Gate `generate-og-images.mjs` and `generate-social-cards.mjs`.** Skip non-live episodes in their episode loops; skip unreleased guests and hosts in the guest/host card loops; compute `episodeCount` and `guestCount` in `generateShowIdentityCards` from live episodes and non-unreleased, non-placeholder guests; `buildEpisodeCountsByGuest` counts live episodes only.
- [ ] **Step 4: Verify.** Run `node scripts/generate-redirects.mjs`; `git diff --stat public/_redirects` shows no change (nothing is future-dated yet).
- [ ] **Step 5: Commit** `feat: gate redirects and image generation on go-live (issue #131)`

---

### Task 4: Feed filter and post-build guard

**Files:**
- Modify: `src/pages/episode/index.xml.ts` (nothing to change if it already goes through `getEpisodesNewestFirst`; confirm and leave `pubDate` alone)
- Create: `scripts/lib/feed.mjs`, `scripts/lib/feed.test.mjs`, `scripts/check-feed.mjs`
- Modify: `package.json` (`build`: insert `&& node scripts/check-feed.mjs` after `astro build`, before `pagefind`)

**Interfaces:**
- Consumes: `readEpisodes`, `liveEpisodeNumbers` (Task 3).
- Produces, in `scripts/lib/feed.mjs`:
  - `parseFeedEpisodeNumbers(xml: string): Set<string>`: collects every `<itunes:episode>N</itunes:episode>`.
  - `diffFeed(feed: Set<string>, expected: Set<string>): { leaked: string[], missing: string[] }`: `leaked` = in feed but not expected, `missing` = expected but not in feed, both sorted.

- [ ] **Step 1: Write failing tests in `feed.test.mjs`.** `parseFeedEpisodeNumbers` on a two-item XML snippet returns `{"210","211"}`; `diffFeed` reports `leaked: ["211"]` and `missing: ["209"]` for the matching inputs, and both empty when equal.
- [ ] **Step 2: Run `pnpm test`.** Expected: FAIL.
- [ ] **Step 3: Implement `feed.mjs`.**
- [ ] **Step 4: Write `check-feed.mjs`.** Reads `dist/episode/index.xml`, computes expected from `liveEpisodeNumbers(readEpisodes(root))` under the **current gate** (so previews expect everything), prints leaked/missing, exits 1 if either is non-empty.
- [ ] **Step 5: Run `pnpm test` (PASS), then `PATH=... pnpm build`.** Expected: build passes and prints a clean feed check.
- [ ] **Step 6: Commit** `feat: fail build when feed disagrees with go-live gate (issue #131)`

---

### Task 5: End-to-end verification (throwaway fixture, not committed)

**Files:**
- Create then delete: a fixture episode `src/content/episodes/zz-future-fixture.md` with `date` 30 days out, `episodeNumber: "9999"`, `aliases: ["/9999"]`, and a guest id that appears in no other episode; plus a second fixture guest-episode pairing: reuse one real existing guest id on the fixture episode to check the "one live, one unreleased" case.

- [ ] **Step 1: Create the fixture** (copy a recent episode's frontmatter, change the fields above).
- [ ] **Step 2: Production-like build** (`PATH=... pnpm build`, no `CONTEXT`). Check in `dist/`: no `zz-future-fixture/index.html`; `grep 9999 dist/episode/index.xml` finds nothing; `grep 9999 public/_redirects` finds nothing; the new-only guest has no `dist/guest/<id>/`; the reused real guest's page and the guest-list count show only their live episodes; `build` passes.
- [ ] **Step 3: Preview-like build** (`CONTEXT=deploy-preview PATH=... pnpm build`). Check: the fixture page, alias, and feed item are all present, and the feed guard passes.
- [ ] **Step 4: Leak check.** Temporarily break the gate (set `gate` default to false in `getLiveEpisodes`), run a production-like build, and confirm `check-feed.mjs` fails the build with `leaked: ["9999"]`. Revert.
- [ ] **Step 5: Delete the fixture and regenerate** (`node scripts/generate-redirects.mjs`); `git status` is clean apart from Task 1-4 commits.

---

### Task 6: Go-live Action and checker

**Prerequisite (Matty, manual, do before merging this task to main):** create a Netlify build hook for the production branch and save its URL as the GitHub Actions secret `NETLIFY_BUILD_HOOK`. The plan stops and asks if the secret is absent.

**Files:**
- Create: `scripts/go-live-check.mjs`, `.github/workflows/go-live.yml`
- Modify: `scripts/lib/feed.mjs` (add `isDue`), `scripts/lib/feed.test.mjs`

**Interfaces:**
- Consumes: `readEpisodes`, `liveEpisodeNumbers` (Task 3); `parseFeedEpisodeNumbers`, `diffFeed` (Task 4).
- Produces, in `scripts/go-live-check.mjs` (constant `FEED_URL = "https://www.arresteddevops.com/episode/index.xml"`):
  - `node scripts/go-live-check.mjs due`: fetches `FEED_URL` (`cache: "no-store"`), prints `due=true|false` (and appends to `$GITHUB_OUTPUT` if set). `due=true` iff `diffFeed(...).missing` is non-empty. **Exits non-zero on any fetch error or non-2xx.**
  - `node scripts/go-live-check.mjs verify [--timeout-seconds 900] [--interval-seconds 30]`: polls until `missing` is empty; exits 1 on timeout, printing the still-missing numbers.

- [ ] **Step 1: Extract the pure decision into `scripts/lib/feed.mjs` and test it.** Add `isDue(feedXml: string, expected: Set<string>): boolean` (true iff `diffFeed(...).missing` is non-empty), with tests: equal sets false; one missing true; an extra (leaked) item alone does not make it due.
- [ ] **Step 2: Run `pnpm test`.** Expected: FAIL, then PASS after implementing `isDue`.
- [ ] **Step 3: Write `go-live-check.mjs`** with the two modes above.
- [ ] **Step 4: Write `.github/workflows/go-live.yml`.** Triggers: `schedule` crons `5 10 * * *` and `5 11 * * *`, plus `workflow_dispatch`. Steps: checkout, `pnpm/action-setup`, `actions/setup-node` (22), `pnpm install --frozen-lockfile`, `node scripts/go-live-check.mjs due` (step id `due`), then, `if: steps.due.outputs.due == 'true'`: `curl -fsS -X POST "$NETLIFY_BUILD_HOOK"` then `node scripts/go-live-check.mjs verify`. Failure notification is GitHub's default failure email.
- [ ] **Step 5: Verify locally.** Run `node scripts/go-live-check.mjs due` against the live feed with the fixture absent. Expected: `due=false`, exit 0. Then point `FEED_URL` at a bad host temporarily and confirm a non-zero exit.
- [ ] **Step 6: Commit** `feat: scheduled go-live rebuild with feed verification (issue #131)`
- [ ] **Step 7: After merge and the secret exists, run the workflow once via `workflow_dispatch`.** Expected: green run, `due=false`, no hook call.

---

### Task 7: Docs

**Files:**
- Create: `docs/adr/0006-future-dated-episodes-are-withheld-until-go-live.md`
- Modify: `.claude/skills/create-episode/SKILL.md` (frontmatter section near line 90), `CLAUDE.md` (one line under "Hard constraints" pointing at the ADR)

- [ ] **Step 1: Write ADR-0006**, matching ADR-0005's shape (context, Decision, consequences). Record: 6am ET, `date` is the gate, `pubDate` deliberately untouched and why, the two build guards, the absent-from-feed cron trigger, preview behavior, and the accepted weak spots (GitHub schedule delays, 60-day inactivity).
- [ ] **Step 2: Update `create-episode` SKILL.md** so `date` is documented as the go-live date (may be in the future, use a bare `YYYY-MM-DD`), and `publishDate` as the same value.
- [ ] **Step 3: Add the one-line `CLAUDE.md` pointer.**
- [ ] **Step 4: Commit** `docs: ADR-0006 and create-episode date semantics (issue #131)`
