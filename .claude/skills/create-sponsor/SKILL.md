---
name: create-sponsor
description: Add a new sponsor — src/content/sponsors/<id>.yaml plus their ad banner image and logo, if they have them.
---

The simplest of the three content-creation skills — sponsors have no
folding/snapshot model like guests do, just one file per sponsor.

## 1. Get the details

Ask for whatever isn't already given: sponsor name, their URL (the one to
link out to — usually has UTM params, check a few existing files in
`src/content/sponsors/` for the pattern), an ad banner image if they
have one, and **their logo** (see step 3b — without one they won't appear
on the `/sponsorship/` wall).

## 2. Derive the id

Lowercase, no spaces — check `src/content/sponsors/` for the convention
(e.g. `flyio`, `attribute`). If the sponsor already has a file (a repeat
sponsor), just reuse it — don't create a duplicate with a different id.

## 3. Place the ad image, if there is one

Ad banners are wide (most existing ones are ~600×110 or similar
leaderboard-style dimensions — see `src/assets/img/sponsors/` for
reference) — this is a real ad a sponsor is paying for, not an icon, so
don't shrink it into something tiny. Copy it to
`src/assets/img/sponsors/<id>.<ext>`, matching the source extension.

If there's no ad image yet, leave the `ad` field out entirely — episode
pages already fall back to a plain text chip for sponsors without one
(see the sponsor-rendering logic in `src/pages/[episode].astro`).

## 3b. Place the logo, if there is one

The `/sponsorship/` wall shows logos only, never banner ads. A sponsor gets
a tile on the wall only if its yaml has a `logo` that resolves to a file;
without one it appears at all only if its id is listed in `MORE_SPONSORS`
at the top of `src/pages/sponsorship.astro` (as a name pill). So a sponsor
with no logo is invisible on that page by default — say so, and ask Matty
for the logo, or whether to add them to `MORE_SPONSORS` instead.

Prefer SVG, otherwise PNG. Use the dark or full-colour version — tiles are
white, so white-on-transparent logos vanish. A horizontal wordmark lockup
fits the 3:1 tiles best. Copy it to
`src/assets/img/sponsors/logos/<id>.<ext>`.

## 4. Write the sponsor file

`src/content/sponsors/<id>.yaml`:

```yaml
name: <sponsor name>
url: <their URL, omit if there isn't one yet>
ad: img/sponsors/<id>.<ext>
logo: /img/sponsors/logos/<id>.<ext>
placeholder: false
```

Omit `ad` and/or `logo` if the sponsor doesn't have that asset yet.

## 5. Add their vanity redirect

Sponsors get a short vanity URL — `arresteddevops.com/<slug>` — redirecting
straight to their site (see `src/data/redirect-stubs.txt`, e.g. `/fly` →
fly.io, `/attribute` → attrb.io). This is generated into `_redirects` at
build time (`scripts/generate-redirects.mjs`); a new sponsor needs a new
line added to `redirect-stubs.txt` by hand, or the vanity URL won't exist.

Ask Matty what slug he wants (it doesn't have to match the content id —
`flyio.yaml` uses the shorter `/fly`). Append one line, matching the
existing format exactly:

```
/<slug> <their URL> 301!
```

Use the same URL as the sponsor's own `url` field unless Matty gives you a
different one (sponsors sometimes want the vanity redirect to carry UTM
params the in-page link doesn't).

## 6. Verify

Run `pnpm run build` to confirm the schema in `content.config.ts` accepts
it, and that any episode referencing this sponsor id resolves (zod's
`reference()` will fail the build loudly if it doesn't).

Then confirm the vanity redirect actually took: check the build output
for `generate-redirects.mjs`'s own summary line (`Generated public/_redirects:
N rules.`, plus any collision warnings — a duplicate slug shadows the
existing rule silently in Netlify otherwise) and grep the new slug in
`public/_redirects` to make sure it points at the right URL:

```
grep "^/<slug> " public/_redirects
```

Don't commit or open a PR unless asked.
