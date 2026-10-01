---
title: The Database Calls Are Coming From Inside The DevOps
description: in which we define DevOps and what it means for your code's database interactions
date: 2019-01-08T11:04:29.000Z
publishDate: 2019-01-08T21:04:29.000Z
episodeNumber: "124"
podcastFile: arrested-devops-podcast-episode124.mp3
podcastDuration: 51:35
episodeImage: episode/img/devops-database.jpg
episodeBanner: episode/img/devops-database-banner.png
images:
  - img/social/fb/devops-database.png
guests:
  - person: bschwartz
    snapshot: bschwartz
hosts:
  - mstratton
  - jkerr
sponsors:
  - chef
  - datadog
  - pagerduty
  - sdt
aliases:
  - /124
  - /devopsdatabase
explicit: no
transcript: devops-database
---

Jessica Kerr hosts for the first time, alongside Matty, with Baron Schwartz, founder and CTO of VividCortex, whose QCon San Francisco talk opened the DevOps track Jessica chaired. Baron started as a developer into extreme programming, moved to databases and consulting around performance, and founded VividCortex, which monitors MySQL, Postgres, Redis, MongoDB and Aurora and RDS by combining database signals, operating system data and a measurement of every query from network traffic. The cold open is Jessica's line "to be present with your data in all its persistence," and Baron's "And mindful of your queries."

## What Is DevOps?

Baron says DevOps is something you live, hard to put in words, and that the core community, by not defining it, unintentionally gatekept while vendors like AWS, Microsoft and New Relic wrote decent definitions. Baron once wrote on O'Reilly that a manifesto might help. Matty says the official definition is CALMS, culture, automation, lean, measurement and sharing, which is a starting point for conversation and not a definition. Jessica offers one: DevOps "is not a thing, capital T. It's a situation," where operations and development responsibility sit with the same people, which gives them more options. Matty adds that a DevOps team or engineer can be "an organizational smell," since it's often an automation team, and Baron suggests calling it a team that supports DevOps outcomes.

## The Second Age

Baron cites Charity Majors: the first age of DevOps was operations people writing infrastructure as code, and the second is developers owning things in production, accountable for performance, operability and observability. For databases, Baron sees DBAs automating away manual work, but less often developers owning database performance. In a survey Baron tweeted, developers owning database performance of their code ranked only about halfway, which surprised Baron, who would put it at the top. Customers that succeed with VividCortex are in the second age, with developers engaged daily and DBAs having moved from guarding a walled garden to running a self-service platform, while some companies declined to replace a departing DBA. VividCortex can't push a company there, but it helps when a company is going anyway.

Matty asks how to avoid assuming software engineers know everything, citing the islands and bridges metaphor from the Effective DevOps book in place of silos. Jessica says developers have respect for DBAs that they didn't always have for ops people, and Baron says the database is scary because we push statefulness down the stack so the upper layers can be stateless, and "It's terrifying down there," with logs, file systems and RAID controllers turning into distributed systems on one server. Baron says everyone needs to model data well, and 80% of indexing and schema design is reachable by developers, who then need specialists for hard cases and to "make friends with the optimizer." Jessica says making friends with the DBAs early in a career earned query permissions. Baron adds that SQL hides intent, so as a consultant, Baron would ask what a query is trying to do.

## What Doesn't Work

The first thing is that "you can't bring in a vendor to solve a culture problem." Baron thinks culture is "emergent from the ways that things are done," from incentives and what is praised, so changing incentives or making things easier changes culture, and no vendor can be asked to create culture change. Matty agrees a good vendor helps you see what to change, though you can't just rub DevOps on it, and uses the Switch story of a machine redesigned so both hands had to be away from the blade, the right way being the easy way. Jessica says Agile's manifesto was co-opted by vendors selling culture change, which Jessica calls garbage. Baron notes cloud providers sell a new way of life, like Google's customer reliability engineering team, and that professional services or customer success matter in early markets, so Baron wants customers to learn from each other.

## What Works

Baron groups what's correlated with success in four buckets, people, culture, structure and process, and tooling, which align with CAMS and CALMS: deploy and release tooling, monitoring and observability that make you a better programmer, and shared knowledge and process, such as deploy confidence dashboards linked from deploy tooling. Baron mentions the full-cycle developer idea from Netflix, and Matty prefers full-cycle to full-stack, being involved through the whole cycle without being responsible for all of it. Baron says it's more important to be present with what you built and shipped and your customers' experience through time, not through layers of the stack.

<!-- show notes -->

* Greg Burrell at QCon SF 2018: [Full Cycle Developers at Netflix](https://www.infoq.com/presentations/netflix-devops)
* Baron's [talk](https://qconsf.com/sf2018/presentation/devops-database) from QCon SF isn't public yet, sorry. It will be. Meanwhile, here are the [slides](https://www.xaprb.com/slides/qconsf-2018-devops-for-the-database/)
* Bonus: Baron tweeted to ask ppl about their favorite on-call resources, and Mike Julian compiled all the answers into https://monitoring.love/articles/how-to-improve-on-call/

### What is DevOps? 

According to...

* [Microsoft](https://azure.microsoft.com/en-us/overview/what-is-devops/)
* [Amazon](https://aws.amazon.com/devops/what-is-devops/)
* [New Relic](https://newrelic.com/devops/what-is-devops#Chapter1WhatIsDevOps)
* [Atlassian](https://www.atlassian.com/devops) "DevOps is the next most famous portmanteau next to Brangelina"

### Check these out

* Jess: [Quantum Mechanics Without the Observer](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.473.23&rep=rep1&type=pdf)
* Baron: Podcast rec: http://www.sceneonradio.org/
* Matty: John Allspaw on [Incidents as We Imagine Them Versus How They Actually Are](https://community.pagerduty.com/t/incidents-as-we-imagine-them-versus-how-they-actually-are-with-john-allspaw/2708)
