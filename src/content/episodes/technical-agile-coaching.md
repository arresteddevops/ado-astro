---
title: Technical Agile Coaching with Emily Bache
description: Author and technical agile coach Emily Bache chats with Matty on testing, software engineering practices, and ensemble programming.
date: 2021-11-22T16:56:38.000Z
publishDate: 2021-11-22T16:56:38.000Z
episodeNumber: "177"
podcastFile: arrested-devops-podcast-episode177.mp3
podcastDuration: 35:27
podcastBytes: 16200000
episodeImage: episode/img/technical-agile-coaching.jpg
episodeBanner: episode/img/technical-agile-coaching-banner.jpg
images:
  - img/social/fb/technical-agile-coaching.jpg
guests:
  - person: ebache
    snapshot: ebache
hosts:
  - mstratton
sponsors:
  - honeycomb
  - rootly
  - cloudsmith
aliases:
  - /177
  - /technicalagilecoaching
explicit: no
transcript: technical-agile-coaching
---

Matty talks with Emily Bache, a technical agile coach and author who lives in Sweden and works at ProAgile, about technical agile coaching, testing and ensemble programming. Emily has been a professional developer for more than 20 years, started as a Java and Python programmer, got into extreme programming around 2000, wrote a book on coding dojos that came out in 2011, and published a new book in January, Technical Agile Coaching with the Samman Method. Samman is a Swedish word meaning together, which Emily chose so people could find it online. Emily says the method draws on many influences and is "not just me."

## Why "Technical"

Emily's colleagues at ProAgile coach leadership, teams, processes and management. The technical coaching Emily does focuses on developers, to some extent testers, and on code and technical ways of working, which needs a different skill set and gives different results, and "to be really successful, you need both kinds of coaching." Matty says that's a gap in many Agile transformations, which stop at how to organize work, and the software engineering practices get left to the teams. Emily says DevOps is also very much about technical practices, and says the title technical agile coach, not DevOps consultant, is historical, since Agile came first.

## Testing, Feedback and Approval Tests

For Emily, testing is about feedback loops: they give the feedback needed to write good code, know you're on track and know it's safe to deliver. Emily teaches unit test design and has worked as an architect on larger integration and system tests, and does a lot with approval testing. Emily explains that in a regular test you arrange, act and assert, while in an approval test you compare the system's output to a version you approved earlier, recorded from the system, using a straight diff. In essence it's "a fancy way of doing assertEquals," with a human decision on whether to approve. It works best with tools, and Emily is involved in two open source ones, Approvals and TextTest, both linked in the existing notes.

Matty raises shift left and the worry that getting developers to write tests means no testers. Emily says there's absolutely a place for people skilled at testing: they set the strategy for where automation matters, do exploratory testing and find areas lacking coverage, and can contribute to automation. Matty adds that Etsy's John Allspaw answered the question of why Etsy still had a web operations team with "I've got so much for them to do," and the same applies to testers. Matty also notes that DevOps is named after two roles but has always been about being cross-functional.

## Small Steps and Pull Requests

Emily says most of the coaching is with developers: take smaller steps, get better feedback, commit more often, practice continuous integration and test-driven development, and learn to split tasks. Developers should push small commits several times an hour, each with passing tests, and the tests should run in a short time, which usually means unit tests. Many developers neglect test design because they think it's not production code. Emily says continuous delivery and pipelines depend on a steady stream of small, safe changes.

Matty asks about criticism of the pull request workflow. Emily isn't a great fan: review forces you to drop what you're doing, the discussion delays merging into master, and teammates can't build on the work until they see it. Emily wants to keep code review and design discussion but not tie it to a pull request or an integration gate, and wrote a blog post on a technique called pre-tested integration. Matty says pull requests suit open source projects where you can't pair with thousands of people, but inside an organization in the same time zone you can just pair, and that PRs encourage long-lived branches. Emily's test: if you diff the code on each team member's machine, the difference should be at most a few hours of work, so everyone designs from the same state of play, and "that's where you start to really see teamwork."

## Pairing and Ensemble Working

Emily says pairing is a skill, and if nobody taught you, you may not be doing it well. Emily does more ensemble working, which is another word for mob programming, preferred because it sounds friendlier, and Matty adopts it. As coach, Emily can ask the ensemble to write a test now or back out a change to do it in smaller steps. About 10 sessions of 2 hours usually teaches a team to ensemble, and they keep using it for onboarding, starting a new task or a critical bug. Matty says live streaming coding while learning a new project has turned into pseudo pair programming with the audience, and Emily says remote work lowered the barrier to collaboration and remote ensembles work pretty well.

## Learning, Getting Better and Learning Hours

Emily learns by practicing code katas, including doing the same kata in a new language, and designing exercises for refactoring, and likes learning in a group or with a teacher. On whether practice is getting better, Emily says it's big and diverse: at one organization with a 30-year-old C codebase, Emily is helping write better unit tests, while a JavaScript and React team was so agile there was little to teach. If things aren't getting better where you are, you could think about going somewhere else, and the Accelerate report shows the variety of organizations.

Emily's one thing is "keep learning." Emily runs one-hour learning hours with teams: a new technique in about five minutes, an exercise, and a reflection, with a growing collection of lesson plans, scheduled in everyone's calendar, and notes that sometimes people cancel for a crisis. Matty says intentionality around learning matters, and learning is easier to protect when the whole team commits, though it takes teaching other people your expectations. Emily says the Samman method is basically ensemble working plus learning hours.

- [Emily's book](https://leanpub.com/techagilecoach)
- [ProAgile](http://proagile.eu/)
- [Emily's blog](https://coding-is-like-cooking.info/)
- [Emily's github](https://github.com/emilybache)

Approval testing tools mentioned
- https://approvaltests.com/
- https://github.com/texttest/texttest
