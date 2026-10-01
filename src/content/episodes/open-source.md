---
title: Open Source with Phil Dibowitz
description: Matt is joined by Facebook Production Engineer Phil Dibowitz to talk about the state of Open Source today, the changes it has gone through in his career, as well as some of the best ways to get started in the world of Open Source.
date: 2016-01-20T23:56:53.000Z
publishDate: 2016-01-20T23:56:53.000Z
episodeNumber: "55"
podcastFile: arrested-devops-podcast-episode055.mp3
episodeImage: episode/img/open-source.png
episodeBanner: /episode/img/open-source-banner.png
images:
  - /img/social/fb/open-source.png
guests:
  - person: pdibowitz
    snapshot: pdibowitz
hosts:
  - mstratton
sponsors:
  - 10thmagnitude
  - datadog
aliases:
  - /55
  - /opensource
explicit: yes
transcript: open-source
---

Matty corners Phil Dibowitz, a production engineer at Facebook, at the Chef Community Summit in October 2015 and talks open source: how it has changed over Phil's career, why companies do it, and how someone who benefits from it can start giving back. Phil hasn't been on the show before, and, as Matty tells it, didn't run away fast enough.

## Phil's Background

Phil has spent a couple of years building a pattern at Facebook for teams to own their own tiers of machines. Phil's team wrote low-level core cookbooks that expose an API on attributes, so setting a sysctl or adding a cron job is a variable assignment in your own cookbook, with no need to understand every kernel tunable or every other cron job on the system. They deliberately used templates and notifications so that deleting those lines from a cookbook cleans everything up. It took a couple of years to get everyone migrated. Along the way Phil got deeply involved in the Chef community as a maintainer, most recently adding multi-package support, and mentions internal Facebook tools people have found useful, like Taste Tester and Grocery Delivery.

Phil will hit five years at Facebook in November. Before that came Google, working on Gmail infrastructure, and before that at Ticketmaster, where Puppet and Chef didn't exist yet, so a group of them wrote their own configuration management system called Spine. It was very cool for its day, Phil says, but it never had a community and wasn't maintained, and the industry had moved on by the time of Phil's return to it.

## Open Source Because It's the Faster Way

Matty describes the odd alternate universe at ChefConf, with Mark Russinovich and Jeffrey Snover on stage talking about running Linux on Azure, and says it feels like Michael Corleone: every time the Windows chapter looks closed, they pull Matty back in. Matty asks how open source has evolved over Phil's career.

Phil got into the industry young by hacking on open source as a kid, and when interviewing at Facebook wanted to be able to open source what they built. Phil sees a shift since the late '90s, as Linux, Apache and the browsers showed open source would not only work but be better. What changed is that companies no longer do it for moral reasons: "the best way to move fast is to let everyone else help you move fast." Phil's example is the HipHop PHP to C compiler, which Facebook released and tried to build a real community around, including engaging the Zend community, so a lot of the work now gets done for them. It is also why nobody at Facebook wanted to write a new config management system when good ones were being maintained.

On Microsoft, Phil says it was lip service for a long time, but thinks large parts of the company have bought in and finds it exciting. Like Chrome and Firefox, each side makes the other better, and Phil doesn't expect Linux and Windows to merge. Matty adds the open source that doesn't accept PRs as the lip-service version.

## Plumbing Isn't Your Competitive Advantage

Matty says enterprises used to keep quiet about how they worked, so the only stories were from Facebook, Netflix and Etsy, which is where the unicorn idea came from, and clients would say Matty was the fifth person that day to tell them they should be like Netflix. Matty credits the DevOps Enterprise Summit for getting companies like Target, Nordstrom and GE to talk. Most of what gets shared is plumbing, not competitive advantage. Netflix doesn't open source its video encoding, and if someone is going to disrupt Facebook it won't be by being better at building 300,000 servers fast. Phil calls it infrastructure scaffolding.

## DevOps Isn't New

Phil wants to comment on the history. As a junior admin in the '90s, Phil asked a mentor what made a senior sysadmin, and the answer was being able to read the code of the applications you deploy and to bridge the gap with developers and DBAs. "That's what DevOps is," Phil says, and "it drives me nuts when people talk about, oh, look at this new idea that we just came up with, and it's never been new." Matty quotes a friend who has been doing DevOps for a long time, "back when I just called it work," and suggests the current wave corrects a pendulum swing toward admins who only care about the box. Phil's take is "those people are just bad at their job." Matty says the problem is that there are a lot of them.

## Lawyers, Precedent, and Policy

Getting a company to release code is the harder part, Phil says. Inside a company you have to persuade a legal team to give a thing away, and Phil has been lucky to work with lawyers who weigh the risk against the value and decide. Lawyers weren't trained on releasing internal intellectual property as open source until recently. Now there is a decent chance someone in marketing, business and legal will get it, and you can find a path through the gauntlet even at an older company.

Matty says that's the realization that every company is a software company, and the rest of the business has to catch up. Matty adds that lawyers worry about setting a precedent for the IP they are protective of, and Phil says that is where written policies come in, guidelines on what you'd release and what you wouldn't. Phil's sign that open source has reached critical mass is that a stranger on a plane, even a flight attendant, has heard of it.

## Tooling and Inclusivity

Phil says two things have changed in communities. The first is tooling. Running a project once meant juggling patches that no longer applied and email threads you forgot to reply to, and contributing meant knowing a project's patch policy. With GitHub you send a pull request and don't even need to join the mailing list.

The second is inclusivity, which Phil says the community is struggling with. Phil describes being a "loud, obnoxious, aggressive guy," and says someone who isn't may feel steamrolled and go away. The project needs both: people who feel able to bring ideas, and the culture of ripping apart a patch so the contributor can make a better one, without hard code review becoming an excuse to attack someone. Phil says ChefConf strikes a good balance, with people around to help with code of conduct issues, and that "the tooling kind of was stage 1, and this is stage 2."

## How to Start Contributing

Matty asks how someone who gets a lot of value from Chef but isn't going to commit to core as a first step should begin. Phil started around 12 or 13, when a little Perl was readable but bug fixes were out of reach, by writing docs. Phil maintained the IPFilter FAQ, watched the mailing list, and put questions that came up three or four times on a webpage. Phil's view is "there's no meaningless contribution," and adds "Any contribution is a contribution, we're a community." Matty adds meetups, facilitating a talk, and even whitespace fixes. Phil mentions people on projects who aren't coders but triage bug reports, asking for debug logs and version numbers so developers don't go back and forth six times.

Phil also wants people to remember there are no gatekeepers. Phil cites a DEF CON 101 talk that tells newcomers that no speaker is above them, and says the same goes at Chef: go talk to Adam, who loves talking to people, and "there is no one above you or better than you." If someone comes off as a jerk, tell an organizer, because everyone does by accident sometimes.

## What Surprises People About Facebook

Asked for something surprising, Phil says internally the goal is to do the best thing for the user, with constant discussions about privacy, and that user trust is your bread and butter for any company where people share things. Phil points to a line in the S-1: "we make money to build products, we don't build products to make money." Phil has never stayed at a company longer than two and a half years except here, and says the technology was the draw and the company is why Phil stayed.

* [Panel Discussion from ChefConf 2015: Have Your Bets on Open Paid Off?](https://www.youtube.com/watch?v=HZnbGNtcyMc)
Moderated by Cade Metz, Wired Magazine
Panelists: Mark Russinovich (Microsoft), Jeff Arcuri (Gap), Phil Dibowitz (Facebook)

* Errata: "We're no longer an airline. We're a software company with wings." Matt's quote at 17:02 was from Alaska Airlines, not United Airlines.
