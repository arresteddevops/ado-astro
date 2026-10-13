# Guest intake form on the site — design

**Issue:** #25 (follow-up from #13)
**Status:** draft for review

## Goal

Replace the Google Form → Google Doc guest intake with a form on this site,
so that:

1. A guest's answers arrive already shaped like the `guests` content schema
   (ADR-0002) — no hand translation from a Hugo-TOML doc.
2. The headshot is **uploaded**, not linked. The `create-guest` skill can't
   fetch Google Photos share links, so today Matty downloads every headshot
   by hand.
3. `create-guest` can read a submission mechanically from somewhere it can
   reach with tools it already has.

Non-goal: changing the guest content model, the episode `guests[]` references,
or the returning-guest/Bio Snapshot logic. All unchanged.

## Decisions (made in brainstorming)

| Decision | Choice | Why |
| --- | --- | --- |
| Where the form lives | A page on this site, Netlify Forms | `contact.astro` already does this (honeypot, `/thank-you/`, styling). No new infra. |
| Where submissions go | Stay in Netlify Forms; `create-guest` pulls them via the `netlify` CLI/API | CLI is installed, authed, and linked to `ado-astro`; `listSiteForms` already returns the `contact` form with its submissions. Nothing is committed until Matty runs the skill. |
| Rejected: function that opens a PR per submission | — | New Netlify Function + GitHub token + public abuse surface, to save one skill invocation. |
| Rejected: keep Google Form, fix template | — | Doesn't solve headshot attachment. |

## The page

- **Path:** `/guestform/` (`src/pages/guestform.astro`). **Not** `/guest/` —
  that is the guest profile directory (`src/pages/guest/index.astro`). The
  issue's "/guest" is a typo for `/guestform`, which is the existing form
  redirect.
- **Redirect stub must go.** `src/data/redirect-stubs.txt` line 9 maps
  `/guestform` → the Google Form with a forced `301!`, which would shadow the
  new static page. Remove that line in the same PR so the URL keeps working
  (served by the page, not redirected). `public/_redirects` is regenerated on
  every build by `scripts/generate-redirects.mjs`; don't edit it by hand.
- **Form wiring**, copied from `contact.astro`: `name="guestform"`,
  `method="POST"`, `enctype="multipart/form-data"`, `data-netlify="true"`,
  `netlify-honeypot="bot-field"`, hidden `form-name` input,
  `action="/guestform-thanks/"`.
- **Thanks page:** small `src/pages/guestform-thanks.astro` with guest-specific
  copy (reusing `thank-you.astro` would say "Message Sent"). Exclude it from the
  sitemap in `astro.config.mjs`, like `/thank-you/`.
- **Styling:** reuse `contact.astro`'s card/field styles. Anything the headshot
  script injects at runtime (error text) goes in a `<style is:global>` block —
  scoped styles don't reach client-inserted markup (see CLAUDE.md).

## Fields

Mapped 1:1 onto a `snapshots[]` entry in `content.config.ts`.

| Field | Required | Notes |
| --- | --- | --- |
| `name` | yes | Becomes `name` and drives the id (first initial + lowercased last name). |
| `email` | yes | **Never published.** Lives only in the Netlify submission; not in the schema. |
| `pronouns` | no | |
| `bio` | yes | Copied verbatim by the skill. |
| `website` | no | Full URL. |
| `linkedin`, `github`, `twitter`, `bluesky` | no | **Handle only.** |
| `headshot` | no | File upload; see below. |

Other schema socials (facebook, instagram, pinterest, youtube, twitch,
threads) are deliberately left off the form; add if wanted.

**Handle-only is enforced natively**, with an HTML `pattern` that rejects
`http…`, `/`, and a leading `@`, plus placeholders showing the format. No JS.
This removes the skill's "strip the LinkedIn URL down to a username" step and
the doubled-URL bug that `SocialLinks.astro` produces from a full URL.

Returning guests: the form doesn't ask. `create-guest` already detects an
existing `src/content/guests/<id>.yaml` and handles the new-snapshot logic.

## Headshot

- `<input type="file" name="headshot" accept="image/jpeg,image/png">`,
  one file (Netlify allows one file per field).
- **Netlify limits:** 8 MB for the whole request, 30 s upload timeout; the
  failure mode when exceeded is not friendly. So validate client-side first.
- **Rules:** ≤ 5 MB; shorter side ≥ **400 px**. Basis: of the 337 existing guest
  images, the median shorter side is 500 px, p10 is 250 px, min 167 px — 400
  accepts normal phone and profile photos and rejects the weak tail. Aspect
  ratio is not enforced.
- **Mechanism:** a short inline script on `change` — check `file.type` and
  `file.size`, load via `createImageBitmap` for dimensions, and report failure
  with `setCustomValidity` (native validity blocks submit, so no separate
  "disable" logic). The type/size/dimension predicates are pure functions with
  one assert-style self-check (the only real logic in this change).
- The headshot is optional. `getMiscAsset()` already falls back to initials.

## Pickup: `create-guest` reads Netlify, not a Google Doc

All via the `netlify` CLI (site id from `netlify status --json`).

1. `netlify api listSiteForms` → the form named `guestform`.
2. `netlify api listFormSubmissions` for that form. Show name, email, date;
   default to the newest; accept a named person instead.
3. Map fields straight to YAML. Id derivation, returning-guest/snapshot logic,
   omit-blank-fields convention are unchanged from the current skill.
4. Download the headshot straight to `src/assets/img/guests/<id>.<ext>`
   (replaces step 3, "ask Matty to download it").
5. `pnpm run build` — zod still gates the schema.
6. **Cleanup is an offer, never automatic:** submissions hold emails and
   photos, so after the guest file lands, ask before deleting the submission
   via the API.

The Google-Doc steps are replaced. Keep a short **legacy doc fallback** in the
skill until the old Google Form is turned off, so anyone who already filled it
out isn't stranded; remove it as a follow-up then.

## Unverified assumptions (verify before writing the skill steps)

Needs a real submission, so test on a deploy preview with a dummy one:

1. The shape of the file object in a submission (expected
   `{url, filename, size, type}`).
2. Whether the file URL requires auth or expires — if it needs a token, skill
   step 4 changes (fetch with credentials), the flow doesn't.
3. Whether `/guestform/` serving as a static page behaves identically to the
   forced redirect it replaces for anyone with the old link (it should; confirm
   on the preview).
4. Whether the form named in the issue (`1FAIpQLSe…`) and the one the stub
   points to (`1zqG…`) are the same Google Form. Doesn't block the build; matters
   only for knowing which form to turn off later.

## Manual steps (not code)

- Add a Netlify email notification for new `guestform` submissions (Netlify UI)
  so Matty knows when one lands.
- Turn off the old Google Form once the new one is live and the legacy doc
  fallback is no longer needed.

## Testing

No test framework in this repo and this change doesn't add one. Verification:

- `pnpm run build` green (needs Node 22; the default shell is Node 20).
- `grep` assertions on `dist/`: `/guestform/index.html` exists, contains
  `data-netlify="true"`, `enctype="multipart/form-data"`, and an
  `<input type="file" name="headshot"`; `public/_redirects` has no `/guestform`
  rule; `/guestform-thanks/` exists.
- One assert-style self-check for the headshot size/dimension predicate.
- Deploy preview: submit a dummy guest with a headshot, run the updated
  `create-guest` against it end to end, resolve the unverified assumptions above.
- `/guestform/` is not in the Lighthouse plugin's audited paths
  (`netlify.toml`); the PR's accessibility review covers the form.

## Out of scope

- Other social fields beyond the six above.
- Auto-PR/function pipeline.
- Spam handling beyond the honeypot and Netlify's built-in filtering.
- Any change to the guest schema, episodes, or the feed (no ADR needed — this
  touches neither the feed nor URL permalinks).
