---
name: draft-episode-promo
description: Draft a staged promo campaign for an episode, in Matty's first-person voice for his personal accounts. A launch post plus three follow-ups spaced over about nine days, each written for LinkedIn, Twitter, and Bluesky. Reads the episode, its show notes, transcript, and guest data. Drafts are shown in chat for approval, then put on a private copy-paste page (or a file) so nothing is lost to terminal line endings. Nothing is ever posted. See issues #117 and #120.
---

Run this when Matty wants promo posts for an episode. Argument: the episode's
slug or number (`/draft-episode-promo wtf-is-going-on`, `/draft-episode-promo
208`). The posts are from **Matty's personal accounts, first person**, about a
conversation he had. They are not show-account copy.

## 1. Find the episode

Slug: `src/content/episodes/<slug>.md`. Number: grep
`episodeNumber: "<N>"` across `src/content/episodes/*.md`. If nothing matches,
stop and ask. If the episode only exists on an open PR branch, it won't be on
the current branch; say so and ask which branch to read it from instead of
guessing.

## 2. Gather

- **Episode frontmatter**: `title`, `description`, `publishDate` (the go-live
  date, which anchors the schedule), `guests`, `transcript`.
- **Show notes body**: each `##` section is a discussion thread. The
  follow-up posts each draw on a different one.
- **Transcript**: `src/content/transcripts/<transcript>.md`. Speaker turns look
  like `**Matty:** [00:12:00] text`, with a `[HH:MM:SS]` marker inline roughly
  once a minute.
- **Guests**: for each `guests[]` entry, read `src/content/guests/<person>.yaml`
  and use the snapshot whose `key` matches `snapshot`. Name is the top-level
  `name`; `bio`, `pronouns`, and the social fields live on the snapshot. A blank
  `bio` means a placeholder stub, so don't invent one and skip any line that
  would need it.
- **Normalize the handles**; the data is inconsistent:
  - `twitter`: strip a leading `@`, and if it's a URL take the last path
    segment. Write it as `@handle`.
  - `linkedin`: a bare username becomes
    `https://www.linkedin.com/in/<username>`; a full URL stays as is.
  - `bluesky`: it's a profile URL (e.g. `https://bsky.app/profile/kat.lol`), so
    the handle is the last path segment, written `@kat.lol`.
  - A field that's missing means no tag. Use the plain name and flag it.

## 3. Voice

If `~/src/github.com/mattstratton/mattstratton-web/VOICE.md` exists, read it and
match it. If it doesn't, say nothing and carry on. These rules apply either
way:

- First person, Matty talking about his conversation. Conversational, direct,
  dry. Short sentences, specifics over abstractions, real numbers and real
  details from the episode.
- **Never use**: em dashes, emoji, hashtags (unless Matty asks), teaser copy
  ("you won't believe," "Spoiler:," "this one's for you"), marketing speak,
  hollow reassurance, LinkedIn-guru voice (empty maxims, manufactured urgency),
  paragraphs starting "I mean,", forced triples, engagement bait ("Thoughts?",
  "Agree?", "Drop a comment").
- Profanity only when it's inside a verbatim quote, and flag that post so Matty
  can decide.
- Guest pronouns come from their yaml; if absent, they/them.
- Every claim must trace to the transcript, show notes, or the guest's bio. No
  outside knowledge about the guest, their company, or the topic.
- Quoted text is verbatim from the **transcript**, trimmed of stutters and
  filler only (same tolerance as the show notes). Never paraphrase inside
  quotation marks.
- This is not the third-person show-notes voice in `docs/SHOW_NOTES_VOICE.md`.
  Only its no-em-dash rule and de-slop checklist carry over.

## 4. The campaign

Four waves, spaced from the `publishDate` date. Every wave gets a LinkedIn,
Twitter, and Bluesky post.

| Wave | Day | Angle |
|---|---|---|
| 1. Launch | +0 | The episode is out. Two or three sentences on what it's actually about, one line on who the guest is (from their bio), and the link. |
| 2. Quote | +2 | One verbatim line, with enough context that it stands alone. |
| 3. Story | +5 | A specific anecdote or example someone tells in the episode, with the concrete detail. |
| 4. Take | +9 | The sharpest opinion in the conversation. It may end as a question only if that question is actually asked in the episode. |

- Each follow-up draws on a different show-notes thread. Don't reuse one.
- Follow-ups never say "new episode." Say "from the episode" or "on the show,"
  since they run days later.
- **Give each follow-up one line of Matty's own.** A reaction, a question, an
  aside, or a related story he actually said in the episode on that thread.
  Find it in his `**Matty:**` turns near the transcript marker. Quote him
  verbatim (same stutter-trimming tolerance) or paraphrase closely, in first
  person ("I asked...", "my reaction was..."). Without it the follow-ups read
  like a neutral recap of the guest.
  - Never invent an opinion for him. If he said nothing on that thread, leave
    the line out and flag it.
  - A reaction to an adjacent point is fine if what it responded to is stated
    accurately. Don't let it read as agreement with something it wasn't about.
  - Put it in LinkedIn as its own short line. Use it on Twitter and Bluesky
    only if it fits.
- Tag the guest on the launch wave and on any wave that quotes or credits them.
- Show the real date for each wave as weekday plus date, computed from
  `publishDate`'s date part, e.g.
  `date -j -f '%Y-%m-%d' '2026-10-14' '+%a %b %d'`.

Per platform, written natively. Don't paste one post across all three, and keep
Twitter and Bluesky different from each other:

- **LinkedIn**: roughly 600 to 1300 characters, short paragraphs (two or three
  sentences), the hook in the first two lines since that's what shows before
  "see more", link on its own line at the end.
- **Twitter**: one post, no thread, 280 characters or under with the link
  counted at full length. Guest as `@handle` when known.
- **Bluesky**: one post, 300 characters or under with the link counted at full
  length. Guest as `@handle` when known, else their plain name.

Every post links to the canonical `https://www.arresteddevops.com/<slug>/`.

**Clip cue** on waves 2 to 4: the transcript marker nearest before the moment
the post draws on, plus the verbatim line where a 30 to 60 second clip should
start and the verbatim line where it should end. This is how Matty finds the
moment in Descript by hand when making an audiogram (issue #118).

## 5. Check before presenting

1. Every quoted string appears in the transcript. Grep a distinctive phrase from
   each one.
2. No em dashes: `grep -c '—'` on what you wrote. Count Twitter and Bluesky
   characters.
3. No emoji, no hashtags, no engagement bait.
4. Handles are normalized, and anyone without a handle is flagged.
5. Each Matty reaction line traces to a real `**Matty:**` turn, and says only
   what that turn was responding to.

## 6. Output

Print in chat, grouped by wave so Matty can schedule one wave at a time:

```
### Wave 2: Quote (Fri Oct 16)
Draws on: <show-notes thread>
Clip cue: [00:23:00] start "<verbatim line>" ... end "<verbatim line>"

**LinkedIn**
<post>

**Twitter** (<n> chars)
<post>

**Bluesky** (<n> chars)
<post>
```

Finish with a short **Tag by hand** list (name plus profile link for any guest
whose LinkedIn or Bluesky tag has to be added manually) and a **Flags** list
(profanity in a quote, a missing handle, a blank bio, a follow-up thread where
Matty said nothing so it has no reaction line, a post that amplifies a sweeping
claim on his personal accounts).

End by asking Matty to approve the drafts or say what to change. If a post's
hook doesn't land, rework it when asked. Don't go to step 7 until he approves.

## 7. After approval: make it copyable

Copying out of the terminal mangles line endings and soft wraps, and the posts
are gone when the session ends. Once Matty approves the drafts, and again after
any rework, put them somewhere he can copy from:

1. **Publish a private page** with the Artifact tool when it's available. One
   HTML page per episode, one section per wave (name, date, "draws on", clip
   cue), one card per post with the platform, a character count (against 280 for
   Twitter and 300 for Bluesky), a **Copy** button, and a "Posted" checkbox
   (remembered in `localStorage`, wrapped in try/catch, as a per-viewer
   convenience only). Tag-by-hand and Flags go at the bottom.
   - Copy must put the exact post text on the clipboard, line breaks included:
     `navigator.clipboard.writeText` inside the click handler, falling back to
     selecting the text if it rejects.
   - Don't retype the posts into the page. Embed the approved text as JSON in a
     `<script type="application/json">` block (escape `</`), render it with
     `textContent`, and check once that the embedded text equals the approved
     text.
   - Use the site's look from `src/styles/tokens.css` (cream, navy, red, yellow;
     Bricolage Grotesque and Archivo) and design light and dark. Follow the
     Artifact tool's own quickstart guidance for the page contract.
   - Title it `Episode <N> Promo`. Republish the same file path to keep the URL
     when posts change. It's private, so give Matty the link.
2. **Fallback**: if the Artifact tool isn't available, or Matty would rather
   have a file, write `~/Downloads/ado/promo-<slug>.md` (his episode working
   folder) with the same structure and each post in its own fenced block so
   nothing re-wraps.
3. **One post on request**: put the exact text on the clipboard with `pbcopy`
   and a quoted here-doc.

Never commit these to the repo; they're personal posts. Still don't post
anything and don't schedule. Pushing drafts into a posting tool is a separate
follow-up (see issue #120).
