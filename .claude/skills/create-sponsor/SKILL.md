---
name: create-sponsor
description: Add a new sponsor — src/content/sponsors/<id>.yaml plus their ad banner image, if they have one.
---

The simplest of the three content-creation skills — sponsors have no
folding/snapshot model like guests do, just one file per sponsor.

## 1. Get the details

Ask for whatever isn't already given: sponsor name, their URL (the one to
link out to — usually has UTM params, check a few existing files in
`src/content/sponsors/` for the pattern), and an ad banner image if they
have one.

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

## 4. Write the sponsor file

`src/content/sponsors/<id>.yaml`:

```yaml
name: <sponsor name>
url: <their URL, omit if there isn't one yet>
ad: img/sponsors/<id>.<ext>
placeholder: false
```

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

Don't commit or open a PR unless asked.
