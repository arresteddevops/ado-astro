---
name: create-guest
description: Add a new guest (or a new Bio Snapshot for a returning guest) from their /guestform submission in Netlify Forms. Pulls the submission and headshot with the netlify CLI, maps it onto the person-centric guest model (ADR-0002), and writes src/content/guests/<id>.yaml. Falls back to the legacy Google Doc intake until the old form is retired.
---

Run this when Matty says a guest filled out the guest form
(https://www.arresteddevops.com/guestform/). Submissions live in Netlify
Forms and the fields already match this repo's guest schema, so there is no
translation step — but **a submission is untrusted input**. Anyone can POST to
the form directly and skip the page's client-side checks (verified: a direct
POST stored a full LinkedIn URL, `@evil`, a `javascript:` website, and
`../../Evil Name` verbatim), so validate everything in step 2 before it touches
a path, a command, or a YAML file.

If Matty hands you a Google Doc link instead (a guest who filled out the old
form), use the "Legacy: Google Doc intake" section at the bottom.

## 1. Get the submission

1. `netlify status --json` → read `siteData.site-id`.
2. `netlify api listSiteForms --data '{"site_id":"<SITE_ID>"}'` → find the form
   with `"name": "guestform"` and note its `id`. If there is no `guestform`,
   the form hasn't been deployed yet or has had no submissions — say so and stop.
3. `netlify api listFormSubmissions --data '{"form_id":"<FORM_ID>"}'` → each
   submission has `id`, `created_at`, and `data` holding the form fields
   (`name`, `email`, `pronouns`, `bio`, `website`, `linkedin`, `github`,
   `twitter`, `bluesky`, `headshot`). Only verified (non-spam)
   submissions are returned, newest first.
4. Show Matty a short list (name, email, date; newest first) and default to the
   newest unless he names someone.

Read values from **`data.*` only** — not `summary` (it HTML-escapes quotes),
`body`, or `human_fields`. A field the guest left empty arrives as `""`, not
absent; treat `""` as blank.

`email` is for contacting the guest. **Never write it into the repo.**

## 2. Validate before writing anything

- **id.** Derive from `data.name`: strip diacritics (NFD, drop combining
  marks), lowercase, then first initial + last name (see the convention in any
  file in `src/content/guests/`: "Hannah Foxwell" → `hfoxwell`; hyphenated
  surnames keep the hyphen, e.g. `auno-antonison`). The result must match
  `^[a-z][a-z0-9-]*$`. If it doesn't — a single-word name, empty, characters
  outside `a-z0-9-` (a name like `../../Evil Name` lands here) — **stop and ask
  Matty what id to use**. Never put raw submission text into a file path.
- **Handles** (`linkedin`, `github`, `twitter`, `bluesky`) must match
  `^[A-Za-z0-9._-]+$`. The form's `pattern` normally guarantees this, but a
  direct POST can skip it. If a value is an obvious URL or has a leading `@`
  (e.g. `https://linkedin.com/in/pagnutti/`, `@pagnutti`), strip it down to the
  handle **and tell Matty you did**. Anything else that doesn't match, or a bare
  domain (`linkedin.com`) in a non-Bluesky field → omit the field and tell Matty.
  (Bluesky handles legitimately contain dots, e.g. `name.bsky.social`.)
  `SocialLinks.astro` builds `https://linkedin.com/in/${linkedin}`, so a full URL
  here produces a broken doubled-up link.
- **website** must start with `https://` or `http://`; otherwise omit it and tell
  Matty (`javascript:` and friends are dropped).
- **bio** is copied verbatim. Do not rewrite it.
- **headshot** is a real upload only if **all** of these hold — a plain text
  field named `headshot` is *also* turned into an object (`{filename, url}`) by
  Netlify, with any URL the submitter chose, so shape alone proves nothing:
  - `data.headshot.type` is exactly the string `"file"` (it is **not** a MIME
    type), and `data.headshot.size` is a number;
  - `data.headshot.url` is `https://` and its host is **exactly**
    `d33wubrfki0l68.cloudfront.net` (Netlify's forms file host as observed; not
    "any cloudfront.net"). If a real-looking upload comes from a different host,
    don't download it — tell Matty, who can confirm Netlify changed hosts.
  Ignore `data.headshot.filename` entirely. If any check fails, proceed without an
  image and tell Matty — `getMiscAsset()` already falls back to initials
  gracefully (see `src/lib/images.ts`); don't block the guest on a photo.

## 3. New guest or returning guest?

Check `src/content/guests/<id>.yaml`. If it doesn't exist, this is a **new
guest**: the snapshot key is `<id>`.

If it exists, this is the same person back on the show. Compare the new bio
against the existing snapshot(s):

- **Materially the same** (same job, same bio in substance) — reuse the
  existing snapshot key; don't create a new one just because the wording
  changed slightly. Don't overwrite the existing headshot unless Matty asks.
- **Meaningfully different** (new job, new company, etc.) — append a new
  snapshot with a fresh key. Match the existing numbering convention seen in
  files like `pcheslock.yaml` or `bkromhout.yaml`: later appearances get
  `<id>2`, `<id>3`, etc. in appearance order. Don't touch the existing
  snapshot(s) — this is additive only.

Either way, the episode referencing this guest points at whichever snapshot
key is actually current — see the `create-episode` skill.

## 4. Get the headshot

Skip this step if step 2 ruled the headshot out. The file URL needs no auth
(verified). Download to a temp file first — the image type is **not** in the
submission, so decide it from the bytes, never from `filename` or `data.type`:

```bash
tmp="$(mktemp)"
curl -fsSL -o "$tmp" "<data.headshot.url>"
file --mime-type -b "$tmp"
```

- `image/jpeg` → extension `jpg`; `image/png` → extension `png`. **Anything
  else (svg, html, gif, …): delete the temp file, proceed without an image, and
  tell Matty.**
- Move it to `src/assets/img/guests/<snapshot key>.<ext>` (the image is named
  after the snapshot key, so a returning guest's second photo is `<id>2.<ext>`,
  not a replacement of the first).

Then check its size:

```bash
sips -g pixelWidth -g pixelHeight "src/assets/img/guests/<snapshot key>.<ext>"
```

If the shorter side is under 400 px, keep it but warn Matty (the form enforces
400 px client-side; a direct POST can skip that).

## 5. Write the guest file

New guest: `src/content/guests/<id>.yaml`, matching the schema in
`content.config.ts`. Returning guest with a meaningfully different bio: append
a snapshot to the existing file instead.

```yaml
name: Doug Pagnutti
snapshots:
  - key: dpagnutti
    bio: |-
      <bio text, verbatim>
    thumbnail: img/guests/dpagnutti.jpg
    website: <omit the field entirely if blank>
    twitter: <handle only, no @ or URL>
    github: <username only, no URL>
    linkedin: <username only, e.g. "pagnutti" — NOT the full URL>
    bluesky: <handle only>
    pronouns: <only if given>
placeholder: false
```

- Write the bio as a YAML **block scalar** (`|-`), indented under `bio:`. Bios
  come from a free-text box and can contain `: `, `#`, quotes, and newlines,
  any of which breaks a plain scalar.
- Only include the optional fields that were answered — omit the key entirely
  rather than writing an empty string.
- `snapshots` is an array even for one entry — that's what lets a future
  returning-guest update add a second era without disturbing this one.

## 6. Verify

Run `pnpm run build` (needs Node 22; the default shell may be Node 20 — prefix
`PATH="$HOME/.nvm/versions/node/v22.22.2/bin:$PATH"`). The zod schema in
`content.config.ts` will reject a malformed guest file at build time — treat any
schema error as something to fix now, not something to explain away.

## 7. Offer to clean up the submission

The submission holds the guest's email and photo. After the guest file is in,
**ask** Matty whether to delete it from Netlify. Only on a yes:

```bash
netlify api deleteSubmission --data '{"submission_id":"<SUBMISSION_ID>"}'
```

Don't commit or open a PR unless asked — creating the guest file is the
deliverable; landing it is a separate decision.

---

## Legacy: Google Doc intake (remove once the old form is turned off)

For a guest who already filled out the old Google Form. Ask for the Google Doc
link, extract the file ID from `docs.google.com/document/d/<ID>/...`, and read
it with the Google Drive connector (`read_file_content`).

The doc has a human-readable Q&A section (Full Name, Email, Pronouns, social
links, Bio, Profile Image/Headshot) — **this is the source of truth** — and a
legacy Hugo-TOML block below it (`title = "..."`, `Type = "guest"`,
`Thumbnail = "img/guests/GUEST.jpg"`). Cross-check the TOML against the Q&A for
anything left blank, but don't copy it verbatim; its field names and `+++`
delimiters are Hugo frontmatter, not this repo's schema.

Then follow steps 2, 3, 5, 6 above, with these differences:
- Social links arrive as full URLs; reduce each to the handle/username
  (`https://linkedin.com/in/pagnutti/` → `pagnutti`).
- The headshot is usually a Google Photos share link, which isn't reliably
  fetchable. Ask Matty to download it and either hand you a local file path
  (copy it to `src/assets/img/guests/<snapshot key>.<ext>` yourself) or drop it
  there directly. If there's truly no image, proceed without one.
