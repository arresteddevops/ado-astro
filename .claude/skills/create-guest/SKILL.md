---
name: create-guest
description: Add a new guest (or a new Bio Snapshot for a returning guest) from their filled-out intake Google Doc. Reads the doc directly, maps it onto the person-centric guest model (ADR-0002), and writes src/content/guests/<id>.yaml.
---

Run this when Matty has a guest intake Google Doc link (the guest form still
generates a doc formatted for the *old* Hugo site — this skill translates it
into this repo's current schema, it doesn't use the doc's own TOML block
verbatim).

## 1. Get the doc

Ask for the Google Doc link if not already given. Extract the file ID from
the URL (`docs.google.com/document/d/<ID>/...`) and read it with the Google
Drive connector (`read_file_content`) — these docs are viewable via the
connector directly; you do not need to ask Matty to download a PDF.

The doc has two parts:
- A human-readable Q&A section (Full Name, Email, Pronouns, social links,
  Bio, Profile Image/Headshot) — **this is the source of truth**.
- A legacy TOML-formatted block the old form auto-generates below it
  (`title = "..."`, `Type = "guest"`, `Thumbnail = "img/guests/GUEST.jpg"`,
  etc.) — cross-check it against the Q&A section for anything the Q&A
  section left blank, but don't copy it verbatim: its field names and the
  `+++` delimiters are Hugo TOML frontmatter, not this repo's schema.

## 2. Derive the canonical id

This repo's convention (see any file in `src/content/guests/`): first
initial + lowercased last name, e.g. "Hannah Foxwell" → `hfoxwell`, "Doug
Pagnutti" → `dpagnutti`. Check `src/content/guests/<id>.yaml` — if it
already exists, this is a **returning guest**, not a new one: see step 5.

## 3. Get the headshot

Profile-image links in these docs are usually a Google Photos share link,
which isn't reliably fetchable as a raw image. Ask Matty to download it and
either hand you a local file path or drop it directly at
`src/assets/img/guests/<id>.<ext>` (match whatever extension the source
file actually is — png/jpg both appear elsewhere in that directory). If
Matty gives you a local path instead, copy it there yourself.

If there's truly no image yet, proceed without one — `getMiscAsset()`
already falls back to initials gracefully (see `src/lib/images.ts`); don't
block the whole guest on a missing photo.

## 4. Write the guest file (new guest)

`src/content/guests/<id>.yaml`, matching the schema in `content.config.ts`:

```yaml
name: Doug Pagnutti
snapshots:
  - key: dpagnutti
    bio: <bio text from the doc, verbatim — don't rewrite it>
    thumbnail: img/guests/dpagnutti.jpg
    website: <from the doc, omit the field entirely if blank>
    twitter: <handle only, no @ or URL>
    github: <username only, no URL>
    linkedin: <username only, e.g. "pagnutti" from ".../in/pagnutti/" — NOT the
      full URL. SocialLinks.astro builds the link as
      `https://linkedin.com/in/${linkedin}`, so a full URL here produces a
      broken doubled-up link. A few older migrated guest files got this
      wrong — don't repeat it.>
    pronouns: <only if the doc gave one>
placeholder: false
```

Only include the optional fields the doc actually answered — omit the key
entirely rather than writing an empty string (`stripBlanks()` in
`scripts/migrate-content.mjs` does this for the original migration; match
that convention by hand here). `snapshots` is an array even though there's
only one entry — that's what lets a future returning-guest update add a
second era without disturbing this one.

## 5. Returning guest: add a snapshot instead

If `src/content/guests/<id>.yaml` already exists, this is the same person
back on the show. Compare the new bio against the existing snapshot(s):

- **Materially the same** (same job, same bio in substance) — reuse the
  existing snapshot key; don't create a new one just because the wording
  changed slightly.
- **Meaningfully different** (new job, new company, etc.) — append a new
  snapshot with a fresh key. Match the existing numbering convention seen
  in files like `pcheslock.yaml` or `bkromhout.yaml`: second appearance
  gets no suffix change if it's truly the first snapshot, later ones get
  `<id>2`, `<id>3`, etc. in appearance order. Don't touch the existing
  snapshot(s) — this is additive only.

Either way, the episode referencing this guest points at whichever snapshot
key is actually current — see the `create-episode` skill.

## 6. Verify

Run `pnpm run build`. The zod schema in `content.config.ts` will reject a
malformed guest file at build time — treat any schema error as something to
fix now, not something to explain away.

Don't commit or open a PR unless asked — creating the guest file is the
deliverable; landing it is a separate decision.
