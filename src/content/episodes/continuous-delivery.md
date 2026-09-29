---
title: continuous delivery
description: One of the most commonly associated principles with DevOps is that of Continuous Delivery. Continuing (ha ha) upon our previous episode on Continuous Integration, Jez Humble talks about what CD is, how it can help your organization, and how he's seen the world of DevOps change since the first publication of the Continuous Delivery book.
date: 2014-07-15T17:33:16.000Z
publishDate: 2014-07-15T17:33:16.000Z
episodeNumber: "15"
podcastFile: arrested-devops-podcast-episode015.mp3
podcastDuration: 50:47
episodeImage: episode/img/continuous-delivery.png
episodeBanner: /episode/img/continuous-delivery-banner.png
images:
  - /img/social/fb/continuous-delivery.png
guests:
  - person: jhumble
    snapshot: jhumble
hosts:
  - mstratton
  - thess
sponsors:
  - pagerduty
  - datadog
  - codeship
  - 10thmagnitude
aliases:
  - /15
  - /continuousdelivery
youtube: AITXRdswz2A
transcript: continuous-delivery
explicit: yes
---

## Deployable From Day One

Jez Humble, co-author of the Continuous Delivery book and the forthcoming Lean Enterprise, contrasts continuous delivery with the phase-gate approach, where planning, development, integration and testing come in sequence and the integration and testing phases "telescope and be very unpredictable." Instead, he says, have something very small deployable from day one, even if feature number 1 is just a status page, and keep the software releasable at all times, prioritizing that "over doing new work." He points to the HP LaserJet firmware team, who don't update printers ten times a day but found that keeping software releasable "changes the economics of software development." Matty says he first heard the story on DevOps Cafe, yelling at his car that it wouldn't work for his company, until the firmware example made him say "oh, okay."

It works, Jez says, because it forces you to deal with scalability, availability, logging and monitoring early. Everyone lists those as requirements, but "knowing that you've got to do something is very different from verifying that you actually did it," and the idea that you can fix performance or operability later "is just false."

## Start Where the Constraint Is

Starting is harder with a brownfield system, he says, but that's no reason not to. Continuous delivery isn't a project you plan and finish, it's "just continuous improvement": make the release process boring, and start where the biggest payoff is, which you can find by mapping the value stream from check-in to release. If you fix a part that isn't the constraint, he says, you won't change end-to-end cycle time. Step 0 is version control. Step 1 is automated builds with fast feedback, plus the discipline to fix a red build immediately.

## Two Architectures, One Pipeline

Matty asks whether it's still continuous delivery if each product has its own pipeline. Jez describes two patterns. The Amazon and Netflix way is many small, loosely coupled services, deployed independently and versioned side by side, which needs strong monitoring because a request may pass through 100 services and you need to trace where the latency is. Facebook and Google build a huge binary, and Jez says Google compensates with very rigorous code-level CI, running the tests of every downstream dependency to give quick feedback. If you go monolithic, he says, "you have to make sure your CI is really, really, really good."

## Expand and Contract

Matty raises data, since you can't roll back a schema change. Jez points to the expand-contract pattern from Michael Nygard's Release It: never change existing objects, add new ones. To split an address field into two lines, add the new columns beside the old one, have the app read from the new columns and fall back to the old, and write to both so the data migrates lazily. Then you can roll back the app freely and later batch-migrate and drop the old column. Jez says he's heard Facebook makes no guarantees about what database version is in production, so developers code defensively. The cost, he says, is an added layer of indirection and complexity in the app, and what you get is deployment flexibility: "So again, trade-off."

## Small Steps, Whether or Not You Like It

Continuous delivery, Jez says, changes how developers think: breaking large changes into small increments that keep trunk releasable, not going off on a feature branch for days. He cites the Puppet State of DevOps survey for data that working in small incremental steps increases IT performance. To developers who say some things can't be broken up: "There aren't." The question is what you optimize for, and "we don't actually want to optimize for how fast I can say I'm done on my feature branch." What continues to astonish him is that developers who love new languages resist changing their practices, and he asks "why did you go into the technology industry if you don't want to change the way you think about things?"

Trevor asks what versioning means here. Jez's answer is small identifiable changes so you can reproduce any state for debugging, and so that when a soak test finds a performance regression across 20 check-ins, you can binary search for the one that caused it.

## Four Years Later

On what has changed since the book came out in 2010, Jez says mobile, the cloud and the Internet of Things have grown and a lot of tools have arrived, but practices and process haven't. He says the industry has "a terrible grasp of our history," is bad at communicating and experimenting with process ideas, and is still cliquey. He thinks it will be "5, 10 years, at least" before continuous delivery is standard, and that "this is an echo chamber that we're in right now."

## Etymology, Briefly

Matty and Jez both misspell continuous, so Jez looks it up on Google, which shows the word's origin: con plus tenere makes continere, "hang together." His theory is "we use continuous because it's easier to spell than uninterrupted." He then suggests searching for recursion, and Google asks whether you meant recursion.

## "It Can't Possibly Work Here"

Trevor passes on a listener's question from someone at a company of 35,000 people with 9,000 in IT, where infrastructure staff are 15 miles away. Jez says ThoughtWorks has seen these problems close up, and that a lot of it "is just excuses." He suggests assuming it can work and asking what little thing you could do. Large companies, he says, have friction, and what works at scale is what he found in both the Toyota Production System and maneuver warfare: everyone knows the mission, and you tell people the outcome, not how to get there.

As examples, he says Google has over 10,000 developers who can all check into trunk and revert each other's changes, except for locked-down crown jewels, and that Amazon spent 2001 to 2005 re-architecting a monolith into services, partly to decentralize authority, with the architecture mirroring the organization, which he calls Conway's Law. The obstacle is leadership that clings to command and control, which he says "hasn't been fashionable in military circles since Napoleon destroyed everyone else in Europe in 1806." If leadership is political, people on the ground have to work under the radar until they meet someone incentivized to block them.

## Stretch Goals Need Trust

Matty remembers a Jez talk in Chicago where he figured most of 100 people were afraid of being fired for the wrong move, and says he told his sysadmin team "let's just pretend it will work and see what happens." Jez says Toyota sets outrageous goals and tells people to work out how, but that it needs trust. He tells of the NUMMI plant, where Toyota decided hiring should be central, not by your own boss, because "your loyalty is to Toyota, not to your boss," which lets people say no or even automate themselves out of a job. The alternative is a stretch goal in an atmosphere of fear, where someone says "we'll ship it in a month" and you spend your evenings eating pizza. It's fine to commit to a month, he says, if you decide what's in the release.

## Make It Safe to Fail

Asked about anti-patterns, Jez lists developers not changing how they think, ignoring a red build, always deprioritizing test and deployment automation for features because management tracks utilization, and automating "horrible, broken manual processes" step for step. You will screw it up, he says, so don't blame people, and make failures safe. He borrows "safe-to-fail experiments" from the Cynefin framework, and applies it to a top-down mandate to automate all tests in QTP: automate five tests in JUnit and put them in the pipeline, since five tests that mean something when they fail beat a comprehensive suite "that everyone ignores because it's just red all the time."

## Infrastructure as Code, and the Next Big Thing

Can you do continuous delivery without infrastructure as code? Jez says probably, if your system is small, but manual point-and-click configuration makes each release error-prone and disaster recovery unpredictable. His acceptance criterion is "can I recreate my production system's state purely from information stored in version control?" with production data as the only exception. He mentions Martin Fowler's thought experiment of blowing up a data center with a flamethrower and timing recovery, and Google's disaster recovery exercises, including disconnecting the campus from the internet. If enterprises were truly risk-averse, he says, they'd worry about disaster recovery, and "the question is, what risks are you actually averse to?"

Asked about the next big thing after continuous delivery becomes standard, Jez says the world has larger problems than automation, and that in software each new technology means relearning things learned 15 or 20 years ago in another domain, like test and deployment automation for mobile. What he'd actually like is for the industry to become less "pseudo-meritocratic" and white-male-dominated, with more women and people of color, and he takes the defensiveness he sees as a sign that things are slowly changing.


