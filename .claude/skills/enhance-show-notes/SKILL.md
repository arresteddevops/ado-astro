---
name: enhance-show-notes
description: Rewrite thin or missing show notes for an existing episode from its transcript, in the house voice (docs/SHOW_NOTES_VOICE.md). Keeps the existing links/resources list untouched, reformats raw-HTML lists to markdown bullets, and flags anything that doesn't match the transcript instead of guessing. Run per-episode, in batches of ~10 (5 for a pilot), oldest first. See issue #84.
---

This is `create-episode` step 3 run backward over old episodes. Formatting a
transcript was mechanical (#19); this is interpretive, so the failure mode is
a hallucinated claim or a misquoted line, not a wrong speaker letter. Read
every transcript in full before drafting. Do not skim.

## 1. Pick the episodes

```
node scripts/list-thin-episodes.mjs --limit 10     # oldest first; 5 for a pilot
```

Word-count heuristic, so it's a starting point: if an episode it lists
already reads as a real writeup, or one it skips clearly needs work, say so
and adjust by hand. Leave already-good episodes alone entirely. Episodes
Matty has excluded (none yet) get skipped and noted in the review file.

## 2. Read everything for one episode

- `src/content/episodes/<slug>.md`: frontmatter and current body
- `src/content/transcripts/<slug>.md`: the whole thing
- Guest/host names via `src/content/guests/<id>.yaml` and
  `src/content/hosts/<id>.md`, same lookup `create-episode` uses
- `docs/SHOW_NOTES_VOICE.md`: read it every batch, it has the good and bad
  worked examples, the no-em-dash rule, and the de-slop checklist

## 3. Draft the body

New body = narrative H2 sections drafted per the voice guide, **then the
existing links/resources content below it, preserved.**

- Every claim traces to this episode's transcript. No outside knowledge
  about the guest, company, or topic, even if you're sure.
- Quote directly for specifics (numbers, book/tool names, memorable lines).
  Tidying a stutter inside a quote is fine ("is is" to "is"). Stitching two
  separate sentences into one quote, or paraphrasing inside quote marks, is
  not. If you need to compress, paraphrase without quote marks.
- **Do not edit the existing links/resources.** Spoken URLs and titles are
  less trustworthy than what's written down. Keep their text, URLs, and
  order exactly. Only if they are raw HTML (`<ul><li><a href>`): convert to
  the markdown bullet convention (`- [text](url)`) and change nothing else.
  Keep any existing heading over them, and put the new prose above it.
- If an existing show notes fact conflicts with the transcript (guest name
  spelling, a link that seems to belong to a different segment, a
  participant who isn't in the frontmatter), **don't fix it, don't guess**.
  Add it to the review notes (step 6).
- Sponsor reads and small talk stay out, as in `create-episode`.
- No em dashes anywhere. Repunctuate.
- Thin transcript (very short episode, mostly music, garbled ASR)? Write a
  proportionally short body rather than padding. One or two sections is fine.

Assemble with `python3 scripts/show-notes/assemble.py <slug> <prose.md>` (repo
root, untouched episode file; `git checkout` the file first to redo one). It puts
your prose above the existing body and converts raw-HTML lists to markdown via
`scripts/show-notes/html2md.py`, changing markup only. Pass `--description "..."`
where step 4 applies, and `--body <file>` with a hand-converted body when an
episode's HTML is too messy for the converter. Keep short quoted phrases (under
8 characters) out of the prose, since `check-quotes.mjs` mis-pairs quotes after them.

## 4. Description

Only touch `description` where it is missing or a thin stub (a fragment, a
single line of boilerplate). A real description that's a bit teaser-ish
stays as is; flag it in the review notes if it fails the voice guide's
avoid list. Where you do write one: 1-2 sentences, same voice rules, no em
dashes.

## 5. Verify, per batch

```
node scripts/check-quotes.mjs <slug> [<slug>...]
grep -n '—' src/content/episodes/<slug>.md          # must find nothing you added
pnpm run build
```

`check-quotes.mjs` fuzzy-matches each quoted passage against the transcript.
Every hit it reports is either a misquote to fix or a paraphrase to un-quote.
It can't catch an invented paraphrase, so also spot-check each draft's
claims against the transcript yourself. Confirm on disk that the files
actually changed (`git diff --stat`) rather than trusting a summary of your
own work.

## 6. Review notes

Append flags to `.cache/show-notes/review-notes.md` (gitignored, local-only,
same pattern as the transcript batches), one bullet per episode with an
issue. Also copy them into the batch PR description, since the cache file
isn't visible across sessions.

## 7. Ship

One draft PR per batch via the `pr` skill. **No auto-merge for this work.**
Matty reads the first batch by hand before deciding whether to extend a
"merge once green" permission, since whether a summary is accurate and
well-written is a call a build can't make. Don't commit or open a PR unless
asked.
