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
which letters were ambiguous. If an extra letter turns out to be a
pre-recorded sponsor-ad voiceover or a clear mid-call split of a real
participant, map it to that same person's name in the map below —
`format-transcript.mjs` merges by resolved name, so this automatically
folds it into the surrounding speaker's block with no separate label.

## 4. Format the transcript markdown

Don't hand-format this — run `node scripts/format-transcript.mjs <slug>
'{"A":"Matty","B":"Trevor",...}'` with the speaker map from step 3. It
mechanically produces `src/content/transcripts/<slug>.md` matching the
convention in `src/content/transcripts/ai-sdlc.md` exactly: bold real-name
label only when the speaker changes, consecutive same-speaker utterances
merged into one paragraph block, inline `[HH:MM:SS]` timestamps dropped in
roughly every 60s. No frontmatter (the `transcripts` collection schema is
`z.object({})`).

After it writes the file, do light cleanup only as a follow-up edit pass —
fix obvious ASR garbage (mis-transcribed names/words you're confident
about) with targeted find/replace, don't rewrite or summarize. Sponsor
reads stay in, same as `create-episode` step 4's rule for transcript
copies.

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

Also append a line to `.cache/transcripts/review-notes.md` (gitignored,
create it with a `# Flagged for review` header if it doesn't exist yet) for
each episode that had anything worth flagging — `- <slug>: <what's
uncertain>`. This accumulates across batches so a full-batch spot-check
pass doesn't depend on re-reading every agent's chat output. Skip the file
entirely for a clean episode with nothing to flag.

## 7. Verify

Run `pnpm run build`. Don't commit or open a PR unless asked.
