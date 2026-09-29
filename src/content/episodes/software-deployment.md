---
title: software deployment
description: "'It doesn't count until it's in production.'' How can organizations level-up at delivering software and features to their customers? What are some of the good practices that DevOps can bring to your company? Matt and Trevor are joined by Ranjib Dey, system administrator at PagerDuty, to talk about 'shipping that software.'"
date: 2014-06-23T17:23:24.000Z
publishDate: 2014-06-23T17:23:24.000Z
episodeNumber: "13"
podcastFile: arrested-devops-podcast-episode013.mp3
podcastDuration: 46:22
episodeImage: episode/img/software-deployment.png
episodeBanner: /episode/img/software-deployment-banner.png
images:
  - /img/social/fb/software-deployment.png
guests:
  - person: rdey
    snapshot: rdey
hosts:
  - mstratton
  - thess
sponsors:
  - pagerduty
  - 10thmagnitude
aliases:
  - /13
  - /softwaredeployment
youtube: qFLkBEGnOfk
transcript: software-deployment
explicit: yes
---

## Delivery Doesn't Count Until It Reaches the User

Ranjib Dey, a system administrator at PagerDuty with earlier stints at ThoughtWorks and Google, joins Matty and Trevor. His definition of software delivery runs from gathering a requirement from an end user to the finished feature reaching customers and drawing feedback. His three consistent themes are incremental changes, regular changes, and a whole process that is automated in a reliable way.

Continuous delivery, for him, is "the attitude towards delivering your software in a well-tested and incremental fashion," usually an extension of CI. What matters is that every merge passes through review and testing, whether that happens up front, as in XP, or after the commit, as with pull requests on GitHub. From there you can release a feature to a subset of users, by geography or age group, for example. In the process, he says, you also "learn the risk-taking abilities," and the organization goes through cultural change, because that wasn't common at the start.

## What Counts as a Small Commit

A small commit, to Ranjib, embodies a feature that is independently verifiable: "If you cannot think of a feature and we cannot associate that with our commits, then it's probably not a full commit." Infrastructure work counts, so moving from canary deployments to dark launching is a feature with its own tests, and known errors get a regression test so they don't come back.

## Which Tests, in What Order

More tests is better, Ranjib says, but you don't always get the time. For a greenfield project he'd start with functional tests, since the priority is whether a feature works, and add unit tests as design issues and tech debt show up. Good tests also work as documentation, which helps a new hire, and let you change code you no longer fully understand and know from the failing tests what you broke.

Integration tests are the black-box ones that involve external services, such as a load balancer with five unicorns and two databases, and checking what happens when one goes down. That takes a full simulated environment and automated failure injection, which he says you add as you grow. Matty prefers that meaning of the term, notes the Continuous Delivery book calls these non-functional tests, and points to episode 2 on testing. He also says that a cookbook is code, and Trevor tells him not to knock it now that he's tried it.

Ranjib adds that these terms mean different things depending on the concern, and gives a packaging example. Testing the libcurl code is unit testing, building the package and making a curl call is functional testing, and checking that Fedora works with that version of libcurl, the kernel and glibc is integration testing, because the user wants libcurl working together with the whole platform.

## Pipelines at PagerDuty

Matty asks whether PagerDuty has one pipeline for all its products. Ranjib says the setup shows their history. There was no CI when he joined a team of 14, so the first step was a Jenkins server with feature branching and per-project builds. Pull requests then piled up in the queue, so they moved that to Travis, which reports red, green or yellow on GitHub and posts to HipChat. Jenkins now takes master after a merge and deploys it to downstream environments. Ranjib is particular that a true pipeline has fan-in and fan-out stages, which Travis doesn't do. Matty's version is that you can have a virtual pipeline, where everything must go through the same steps, without a single physical one.

## Canaries, and Rolling Forward

Ranjib describes a canary deployment as a router, such as nginx, sending a particular URL to a subset of backend servers, which sandboxes a change to those servers. Blue-green deployment and dark launching are similar approaches. Matty asks about rollbacks and mentions Mark Burgess's paper arguing against them. Ranjib says the ability is nice but often hard or impossible, and his organization tends to roll forward, because its heavy automation and testing make a small fix safe to ship. For database migrations, he says, split the release in two, so that the first stops using the column and the second drops it, which preserves the rollback state. Containers let you keep a couple of old versions on the host, and even when you don't intend to roll back, you might do it for a short time to buy time for a hotfix. His rule: "you should always optimize for rolling forward. You should never optimize for rolling back." Matty repeats it "so I remember it."

## Who Gets the Deploy Button

Trevor is still nervous about a CI server deploying straight to production. Ranjib says there's no best way. His current favorite is a HipChat bot that deploys, with GitHub webhooks showing merges and reviews in the same room, though he stresses the integration is thin and the orchestration behind it matters more. Some people want a button, and you sometimes have to give them one in the CI server. The deciding factor is trust: all the tools "reflect your company's culture and trust at the end."

Matty puts on what he calls the psychiatrist hat, and asks why a person is nervous, because you don't want to steamroll someone's concerns. Ranjib says Trevor's concern is legitimate, since in ten years he's seen 80 to 90% of outages come from deployments. Automation doesn't avoid failure, it makes it faster, so the answer is to make failure "extremely cheap, extremely affordable," with multiple environments to test workflows in. Some things, like migrations on very large databases, will need different tools than a standard CI system. Trevor's summary is to fail quickly and fail cheaply.

## Anti-Patterns

The biggest anti-pattern Ranjib sees is people becoming hardliners about the nuance of a buzzword instead of its meaning. Arguing over what counts as integration testing is "a bike shedding discussion," and deploying 20 times a day doesn't make sense for a JVM application that has to restart each time. His second is accumulating tech debt, especially skipping monitoring: a service you can't monitor is "not gonna fly," and isolating services early is much cheaper than later. He'd also rather have small groups with independence, including over tools.

Asked for one piece of advice, he says there's no magic bullet: "Nobody's giving you the button that you click and it will solve your problem."

What is software delivery? There are a lot of approaches to this subject- what does "software delivery" mean at PagerDuty?

What is your idea of "best" way to deliver software, or line of best fit?

What gets in the way of companies or individuals delivering software?

- How do you mitigate and test for problems introduced by code changes?
- Deployments?
- Dependency issues?
- External factors?

What are some patterns and anti-patterns for consistent software delivery?

- [*On system rollback and totalised fields*](http://markburgess.org/papers/totalfield.pdf) by Mark Burgess

## Checkouts

### Ranjib

- [*Universal Principles of Design*](http://www.amazon.com/Universal-Principles-Design-William-Lidwell/dp/1592530079)

### Matt

- [homesick](http://github.com/technicalpickles/homesick) - keep your dotfiles in sync!

### Trevor

- [Willyouhack.me](http://Willyouhack.me)
- Fishing
