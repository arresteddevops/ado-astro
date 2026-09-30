---
title: Foundational Practices with Johan Abildskov
description: '"If you invest enough into foundational practices you can ignore them" - this is a heady statement, and special guest Johan Abildskov takes us through a journey to explore what our foundational practices are, and how we can improve our learning and implementation of them.'
date: 2021-06-15T13:12:06.000Z
publishDate: 2021-06-15T13:12:06.000Z
episodeNumber: "172"
podcastFile: arrested-devops-podcast-episode172.mp3
podcastDuration: 01:00:54
podcastBytes: 27900000
episodeImage: episode/img/foundational-practices.jpg
episodeBanner: episode/img/foundational-practices-banner.jpg
images:
  - img/social/fb/foundational-practices.jpg
guests:
  - person: jabildskov
    snapshot: jabildskov
hosts:
  - mstratton
sponsors:
  - circleci
  - container-solutions
  - macstadium
aliases:
  - /172
  - /foundationalpractices
explicit: no
transcript: foundational-practices
---

Matty talks with Johan Abildskov, a DevOps consultant who works with teams on how they interact as much as on pipelines and cloud, and who has written a book on Git. The episode starts from something Johan said beforehand: "If you invest enough into foundational practices, you can ignore them." The cold open is Johan: "I have read the Google SRE book so you don't have to."

## What the Statement Means

Johan says that when you visit software teams, a lot of effort goes to things that should be boring: daily ceremonies, meetings, arguments over who failed a build and why the Git branching strategy is so complex. Because teams don't invest enough in core practices, those stay roadblocks to thinking at the level of abstraction they want. Johan's example is skill in an IDE, which never feels important enough to invest in, so Johan keeps paying a little and never becomes awesome at it. The idea came from the book The Art of Learning, recommended by the streamer Day9, about practicing fundamentals until they become muscle memory. Johan says we have an intuition for this in physical things but not in programming, and we lack the vocabulary for building automated responses that free the mind for creative work.

## Practice With Intent

Matty says muscle memory comes from practicing with intent, and that you can practice in a bubble, like a Vim playground or Vim Adventures, but the skills must be used in real work. Matty has read about VS Code tricks and then gone back to old habits. Matty's approach, from bowling and public speaking, is to think about one thing at a time, such as making gestures big in a talk, and to do the same with a team, choosing one practice to be intentional about for a sprint, because foundational things are so broad that you feel you need to do all of it and so do none.

Johan says most software teams lack intentionality, discipline and explicitness, and that test-driven development forces doing things with intention. Matty says not all work is equal, since exploratory work like a spike is a different kind of work, and Johan says naming what mode you're in helps: with a spike, you're accountable to see what sticks.

Johan separates awareness from proficiency. Practicing a new IDE trick in a sandbox makes you aware, then applying it in context until it becomes muscle memory is "very Toyota Kata thinking." For other basics, such as fast and stable builds or a programming language so unfamiliar you can't read the screen, you need to practice outside your context so the smaller component parts stop mattering, like no longer pondering what float64 means. Matty compares it to thinking in a language instead of translating, and adds progressive disclosure: people with a new tool want to solve their specific problem right away, but first need the vocabulary, like the staging area in Git.

## Teaching and Knowing What to Ignore

Johan brings up the zone of proximal development, meaning what you can do alone, with help, or not at all, and says experts forget what was difficult. Putting too much on a slide makes it hard for newcomers, who don't know what they can ignore, which is why teams argue endlessly about one repository versus many, GitFlow versus trunk-based development, or merge versus rebase, which Johan says isn't that important. To teach, you have to decompose things or hide details, even if not technically correct, so the learner gets the correct intuition. Matty suggests a simplified test in a pipeline demo, like checking 1 plus 1, to show that something tested a thing, and says it's fine if the educator corrects it soon and tells people it's a simplified view. Johan says being exhaustive does people a disservice, and taking responsibility to filter is like reading the SRE book so they don't have to.

## Agendas, Open Spaces and Not Controlling the Audience

Matty says the best conversations often go somewhere other than planned, as in the Tim Banks episode, which started as ops life and became gatekeeping, and compares it to open spaces: whatever conversation happens is the right one. Matty says you can't control your audience: early listeners of the show weren't the target audience. Matty recalls that people tell Matty things they got from talks that Matty didn't intend, and gives the example of the film Memento and the question of whether a character was ever a cop. Matty also says some meetings need structure, like a stand-up, but others should stay open.

Johan says being agile requires strong foundations, and suggests a stack of index cards as an agenda where each topic change adds a card on top and each completed topic removes one. Johan says that if important things go unaddressed they become urgent, and under pressure you fall back on what's the path of least resistance, so the right way has to be the muscle-memory one. Johan adds that people often believe unit tests will slow them down when they'd finish sooner by writing them, and there's a disconnect between how we believe we use time and how we spend it.

## Work as Imagined Versus Work as Done

Matty, crediting John Allspaw, says the gap isn't only between management and practitioners: we also do it to ourselves, and closing it takes honesty and psychological safety, like logging food in MyFitnessPal without recording what you actually ate.

## Caring About the Wrong Things

Johan has an antipathy for GitFlow, which has done good for the community, but in organizations it often achieves the opposite, as feature branches get huge and end in horrible merges, and people afraid of their workflow postpone. Johan says mono versus many repositories is a discussion people can feel, but the better question is which developer workflows you want to enable. Johan says you shouldn't care about Git or Kubernetes but about the platform built on top, and that if an IDE and a backend like GitHub can't handle your version control tasks, they are too complex. Johan's point is that "a developer doesn't want to do a push. A developer wants to move some code somewhere."

Matty adds commit-message formatting as another over-rotation, between the pedantic commit hook and "fix typo." Johan warns against elaborate gated workflows that don't match how work is done, and suggests documenting the process as it is first, then changing it organically, because friction kills productivity, motivation and trust.

- *[The Art of Learning: An Inner Journey to Optimal Performance](https://smile.amazon.com/Art-Learning-Journey-Optimal-Performance/dp/0743277465)*
- ["Zone of proximal development"](https://www.simplypsychology.org/Zone-of-Proximal-Development.html)
