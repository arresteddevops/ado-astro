# Show notes voice

This describes the target voice for episode show notes: the markdown body of
`src/content/episodes/*.md`, plus the 1-2 sentence `description` frontmatter
field. It applies whenever that body is drafted or redrafted from a
transcript, whether that's a brand-new episode (`create-episode`) or an old
one getting a rewrite (issue #84).

**This file is optional context, not a dependency.** Nothing in the build
requires it. A skill that checks for it should read it and match the voice
if it's present, and say nothing if it's absent, same as
[mattstratton-web's VOICE.md](https://github.com/mattstratton/mattstratton-web/blob/main/VOICE.md)
does for Matty's personal blog. This doc is scoped to *show notes* only: it
does not cover the transcripts collection (verbatim, not rewritten), or
Matty's own first-person writing elsewhere.

## The genre: third-person recap, not a blog post

Show notes are not Matty's personal essay voice. They're an editor's recap
of a conversation someone else mostly did the talking in. Write in third
person about what the guest(s) said, not first person about what Matty
thinks. His personality still comes through, just indirectly: in which
quotes get pulled, which details get kept, and the dry asides connecting
them. Don't try to imitate his blog's "I" voice here, that's the wrong genre
for this job.

## What already works (steal from these, not from a template)

Three real episodes hit the bar. Read them before drafting anything:

- [`ci-control.md`](../src/content/episodes/ci-control.md)
- [`industrial-devops.md`](../src/content/episodes/industrial-devops.md)
- [`ai-sdlc.md`](../src/content/episodes/ai-sdlc.md)

What they have in common:

- **H2 headers pull out a discussion thread, not a chronological recap.**
  "Bonded Automation and the Four Questions," "Converging, Whether Anyone
  Planned It or Not." They're specific to what was actually said, often
  quote-adjacent, and would mean nothing pasted onto a different episode.
  Title case is fine here even though it's an AI tell in most contexts
  (see below): it matches this show's actual editorial convention, not a
  generic LLM habit.
- **Quotes carry the weight.** Real lines, attributed by first name,
  dropped in verbatim rather than paraphrased into blander prose. "The
  bypass is a signal, not a violation" does more work quoted than
  summarized.
- **Sections end on a concrete or ironic beat, not a wrap-up sentence.**
  "The AWS-credit-card moment of manufacturing." "The same Y2K cognitive
  dissonance in miniature." Never "and this shows why culture matters" or
  similar.
- **Every claim traces back to the transcript.** No outside knowledge about
  the guest, their company, or the topic gets introduced. If the transcript
  doesn't say it, it doesn't go in the show notes.
- **No em dashes.** Existing hard rule for this repo. Repunctuate instead:
  a comma for a light aside, a period to split two clauses, a colon when
  the second half explains the first.

## What to avoid

These are real excerpts that were published on this site before a rewrite
(issue #86), quoted here as frozen examples rather than links, since the
whole point of that rewrite is that the live files stop looking like this:

- **Forced triples.** "A mix of fear, eye rolls, and nervous laughter."
  "Heartfelt, funny, and sharply observant." If there are two things, say
  two. If there are four, say four. Three is a tic, not a count.
- **The bullet-listicle instead of prose.** "Kat and Matty cover: / - Why
  vulnerabilities never seem to stop showing up..." reads like a webinar
  landing page, not a recap of what was actually said. Write prose with
  real quotes instead of a bullet outline of topics.
- **Teaser copy and rhetorical throat-clearing.** "Spoiler: they don't."
  "The one topic that's guaranteed to turn any conversation into..." This
  is marketing voice, not editorial voice. State what was said.
- **CTA endings.** "If you've ever patched the same vulnerability three
  times in a week... this one's for you." Show notes describe the episode;
  they don't pitch it. End on content, not an audience-address hook.
- **Generic corporate-blog voice.** "The multiplier effect." "Harmonious."
  "Crucial," used twice in one piece. An actual `## Conclusion` header.
  This isn't LLM-specific, it's just bad writing, but it fails the same
  way: vague where it should be concrete.
- **"In conclusion," and the Hallmark-card ending that follows it.** "In
  conclusion, building a personal brand in tech is about more than just
  showcasing your skills... you can create a personal brand that truly
  stands out." Never signpost the ending, and never close on vague uplift.
- **"Not just X, but Y," repeated.** One instance is a normal sentence.
  Three in one piece is a tic. Say the thing directly instead.

If a rewrite under this guide ever needs a fresh worked-bad example (this
list going stale, or a new pattern showing up), grep recent episodes for
the de-slop tells below before reusing an old one.

## De-slop checklist

Most of TigerData's [de-slop catalog](https://github.com/timescale/marketing-skills/blob/main/plugins/tiger-marketing-skills/skills/de-slop/SKILL.md)
applies directly, since this is AI-drafted content and the same tells show
up. Run through it on every draft:

- **Inflators**: "pivotal moment," "testament to," "underscores," "evolving
  landscape." Say what happened instead.
- **Fakers**: "experts argue," "has garnered attention," any claim with no
  named source. Name the person and what they actually said, or cut it.
- **The vocabulary cluster**: delve, crucial, showcase, intricate, garner,
  fostering, tapestry, testament, underscore. Use the plain word, or cut it.
- **Structural tics**: copula-dodging ("serves as" for "is"), forced
  triples (see above), "not just X, but Y," synonym rotation, fake ranges
  ("from ancient wisdom to modern practice").
- **Performers**: colon reveals ("The result: chaos"), throat-clearing
  openers, faux-insight setups ("what nobody tells you").
- **Formatting tells**: em dashes (banned, see above), bold-header bullet
  lists (`**Performance:** The system is fast`, use prose instead),
  mechanical bolding, emoji.
- **Chatbot residue**: hedges, sycophancy, Hallmark-card endings ("the
  future looks bright"). None of this belongs in a recap of a conversation
  that already happened.

One deliberate departure from the general catalog: **title-case H2
headers are fine here.** They match this show's own packaging convention
(see the good examples above), not a generic AI habit to strip.

## Borrowing from Matty's personal voice (with limits)

[VOICE.md](https://github.com/mattstratton/mattstratton-web/blob/main/VOICE.md)
describes Matty's first-person blog voice. Show notes are third-person, so
most of it doesn't transfer directly, but a few things do, because they're
just good writing habits, not voice-specific:

- **Concrete over abstract.** "100 widgets became 110" instead of
  "measurable improvement." Real numbers, real specifics, every time one's
  available in the transcript.
- **No marketing speak, no hollow reassurance, no LinkedIn-guru voice.**
  Same anti-patterns Matty avoids in his own writing apply here for the
  same reason: they're bad writing, not just off-brand.
- **Dry humor is fine when it's actually in the material.** "Wearing
  safety glasses instead of a hoodie" works because the episode's own
  conversation supports it. Don't manufacture a joke the transcript
  doesn't earn.

What does *not* transfer: first-person "I," Matty's blog sentence rhythm
and paragraph structure, and the "count how many apply to you" device.
Those are personal-essay tools, not recap tools.

## Format checklist

- `description`: 1-2 sentences, same voice rules as the body, no em dashes.
- Body: H2s per discussion thread, prose paragraphs (not a bullet outline),
  direct quotes attributed by first name.
- Keep any existing links/resources list as-is; see issue #84's plan for
  how that interacts with a rewrite of an old episode.
- No em dashes anywhere in either field.
