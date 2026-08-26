---
name: create-episode
description: Create a new episode from a recording transcript plus whatever details Matty supplies (guests, sponsors, artwork, hosting details). Drafts show notes from the transcript, writes the episode + transcript content files, and wires up guest/host/sponsor references.
---

Run this when there's a new episode to publish. This is interactive — you
won't have everything up front, so ask for what's missing rather than
guessing at things like the episode number or podcast hosting details.

## 1. Gather what you need

Ask for (whatever isn't already given):
- **Transcript**: a local file path. If Matty only has it in some hosted
  service, ask him to download and point you at the file — don't try to
  scrape a transcript out of a web player.
- **Guests**: names. For each one, check `src/content/guests/` for an
  existing entry (first-initial+lastname id convention). If a guest doesn't
  exist yet, stop and run the `create-guest` skill for them first — don't
  invent a guest file inline here, that skill owns the Google Doc intake
  and returning-guest snapshot logic.
- **Hosts**: usually Matt Stratton (`mstratton`) plus whoever else was on
  the recording — check `src/content/hosts/` for ids.
- **Sponsors** (if any): check `src/content/sponsors/` for ids; if a
  sponsor doesn't exist yet, run `create-sponsor` for them first.
- **Episode number**: the next sequential number — check the highest
  `episodeNumber` across `src/content/episodes/*.md` (episodes aren't
  necessarily filed in number order by filename, actually check the data).
- **Podcast hosting details**: `podcastFile` (the filename on Blubrry —
  ask Matty; the established naming convention is
  `arrested-devops-podcast-episode<N>.mp3`, which is worth trying as a
  guess since it matches what's actually been uploaded before, but
  confirm it resolves — don't assume). Once you have a candidate
  filename, check `https://media.blubrry.com/arresteddevops/content.blubrry.com/arresteddevops/<podcastFile>`
  with `curl -sIL` — if it 200s, derive the rest yourself instead of
  asking Matty for them: `content-length` from the headers is
  `podcastBytes` directly, and downloading the file and running
  `ffprobe -v error -show_entries format=duration -of
  default=noprint_wrappers=1:nokey=1 <file>` gives the duration in
  seconds — convert to `HH:MM:SS` for `podcastDuration`. If the file
  isn't up yet (404/no response), draft everything else and leave these
  three fields as placeholders for Matty to fill in before publishing —
  don't block the whole draft on them.
- **Artwork**: `episodeImage` and `episodeBanner`. Ask Matty for local
  file paths; copy them into `src/assets/episode-img/<slug>.<ext>` and
  `src/assets/episode-img/<slug>-banner.<ext>` (see `getEpisodeAsset()` in
  `src/lib/images.ts` — it resolves by filename only, so name them to
  match the episode slug). If artwork isn't ready yet, leave the fields
  pointing at filenames Matty will provide later rather than inventing a
  placeholder image yourself.
- **Explicit flag**, **YouTube URL** (video episodes), **date** — ask if
  not obvious from context.

## 2. Derive the slug

Match the existing convention: a short, readable kebab-case slug from the
title (see any file in `src/content/episodes/` for examples) — not the
episode number. This becomes the URL (`/:slug/`), the content filename,
and the transcript filename, so get it right before writing anything;
changing it later means updating aliases too.

## 3. Draft the show notes from the transcript

Read the transcript file. Write the episode body the way existing episodes
read (skim 2-3 recent ones in `src/content/episodes/` for tone) — H2
section headings pulling out the actual discussion threads, not a
chronological recap; direct quotes where they land well; skip the
sponsor-read segments and small talk unless they're substantive. This is a
real writing task, not a mechanical transform — read the whole transcript
first, figure out what the episode is actually about, then write the
version a listener who didn't hear it would want to read.

Draft a 1-2 sentence `description` field the same way you'd write episode
show-notes copy elsewhere on the site — this is what search excerpts and
social cards pull from.

**No em dashes in the show notes body or description.** Use a period,
comma, colon, semicolon, or parentheses instead. Matty doesn't want the
"—" character showing up in published episode copy.

## 4. Write the transcript content file

Copy the transcript to `src/content/transcripts/<slug>.md` as-is (see
issue #5/CLAUDE.md — this collection holds the raw transcript, referenced
from the episode, rendered inline behind a toggle). No reformatting needed
unless the source file has obvious garbage in it (timestamps mid-sentence,
speaker-label artifacts) — light cleanup is fine, rewriting it is not.

## 5. Write the episode file

`src/content/episodes/<slug>.md`, matching the schema in
`content.config.ts`:

```yaml
---
title: <title>
description: <drafted in step 3>
date: <ISO datetime>
publishDate: <same, unless told otherwise>
episodeNumber: "<next number, as a string>"
podcastFile: <filename Matty gave you, or leave for him>
podcastDuration: <HH:MM:SS>
podcastBytes: <number>
episodeImage: episode-img/<slug>.<ext>
episodeBanner: episode-img/<slug>-banner.<ext>
images: []
guests:
  - person: <guest id>
    snapshot: <the snapshot key that's CURRENT for them right now>
hosts:
  - <host id>
sponsors:
  - <sponsor id>
aliases: []
youtube: <if applicable>
transcript: <slug>
explicit: "yes" | "no"
---
<drafted show notes body>
```

`guests[].snapshot` must point at whichever snapshot key is current for
that person (see `create-guest` step 5) — not always the same as the
person's own id once they've had multiple eras.

Leave `images` and `aliases` empty — those are for pre-made social cards
and short-URL redirects respectively, neither of which exists yet for a
brand-new episode. The build-time OG generator
(`scripts/generate-og-images.mjs`) will produce a branded fallback card
automatically since there's no `images[0]` yet.

## 6. Verify

Run `pnpm run build`. Check the new episode page renders sensibly — the
schema will catch structural problems, but only you can catch "the show
notes don't actually match what was said" or "the wrong snapshot got
referenced."

Don't commit or open a PR unless asked.
