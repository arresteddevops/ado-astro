---
name: add-transcript
description: Turn a cached AssemblyAI diarized transcript into a published transcript file for an existing episode — maps generic speaker labels (Speaker A/B/C) to real names, formats the markdown, and wires up the episode's transcript reference. Run per-episode (or per small batch) after scripts/submit-transcripts.mjs has produced .cache/transcripts/<slug>.json. See issue #19.
---

Run this for an episode that already has a cached diarized transcript at
`.cache/transcripts/<slug>.json` but no `transcript:` field yet in
`src/content/episodes/<slug>.md`. This is the judgment-call half of the
pipeline — `submit-transcripts.mjs` handles the deterministic submit/poll
part, this skill handles the part that actually needs an LLM reading the
conversation.

## 1. Read the cached result

Load `.cache/transcripts/<slug>.json`. The fields that matter are
`utterances[]` — each has `speaker` (a letter like `"A"`), `text`, `start`
and `end` (milliseconds).

## 2. Resolve who's actually in the episode

Read `src/content/episodes/<slug>.md` frontmatter for `hosts` and
`guests[].person`. Resolve each id to a real display name via
`src/content/hosts/<id>.md` and `src/content/guests/<id>.yaml` — same
lookup `create-episode` uses.

## 3. Map speaker letters to real names

Read through the utterances (or enough of them) to figure out which letter
is which person — self-introductions and host/guest-intro cues are the
strongest signal ("I'm joined today by...", "my name's..."). Build an
explicit map before writing anything.

If the number of distinct speaker letters doesn't reconcile with the known
host/guest count for the episode (someone got split into two letters
mid-call, or two people got merged into one), **don't guess** — flag it
when you report back and make your best-effort mapping explicit about
which letters were ambiguous.

## 4. Format the transcript markdown

Match the convention in `src/content/transcripts/ai-sdlc.md` exactly:

- Each speaker turn starts with a bold real-name label: `**Matty:**`.
- The label appears only when the speaker changes — consecutive utterances
  from the same speaker merge into one block under a single label, with
  blank-line paragraph breaks inside that block wherever a natural reading
  break falls.
- Inline timestamps in `[HH:MM:SS]` (converted from the utterance `start`
  ms) are dropped in wherever roughly a minute has passed since the last
  one — not necessarily at the start of every utterance or paragraph, just
  often enough to let someone jump around. The first timestamp in the file
  is `[00:00:00]`.
- No frontmatter in the file (the `transcripts` collection schema is
  `z.object({})`).
- Keep content as-is, light cleanup only — fix obvious ASR garbage
  (mis-transcribed words you're confident about, stray filler if it makes
  a sentence unreadable) but don't rewrite or summarize. Sponsor reads stay
  in, same as `create-episode` step 4's rule for transcript copies.

Write the result to `src/content/transcripts/<slug>.md`.

## 5. Wire up the episode

Add `transcript: <slug>` to `src/content/episodes/<slug>.md` frontmatter
(the schema already has `transcript: reference("transcripts").optional()`
in `content.config.ts` — no schema change needed).

If this episode's body has a dead legacy transcript link (e.g. an inline
`transcripts.castingwords.com` URL from the old Hugo site), remove that
line now — same file, same edit pass.

## 6. Report back

Per episode: confirm the file was written, the frontmatter updated, and
call out anything from step 3 that was ambiguous or any name/jargon
spelling you weren't confident about — this is what Matty spot-checks.
Don't maintain a persistent notes file for a small pilot batch; only worth
adding once running the full ~190-episode batch.

## 7. Verify

Run `pnpm run build`. Don't commit or open a PR unless asked.
