---
title: Complexity with Michael Stahnke
description: It's a complex world! Matty and Michael Stahnke wax philosophical about whether our systems need to be as complicated as we have made them
date: 2023-11-09T21:22:53.000Z
publishDate: 2023-11-09T21:22:53.000Z
episodeNumber: "196"
podcastFile: arrested-devops-podcast-episode196.mp3
podcastDuration: 46:58
podcastBytes: 21500000
episodeImage: episode/img/complexity.jpg
episodeBanner: episode/img/complexity-banner.jpg
images:
  - img/social/fb/complexity.png
guests:
  - person: mstahnke
    snapshot: mstahnke2
hosts:
  - mstratton
sponsors:
  - uffizzi
  - gliffy
aliases:
  - /196
explicit: yes
transcript: complexity
---

Matty talks with Michael Stahnke about whether the systems we run need to be as complicated as they've become. Michael has spent 13 or 14 years on and off the DevOps circuit, was VP of engineering at CircleCI, and now works at Flox, an 18-person company building tooling aimed at removing complexity. Matty notes the episode isn't meant as a pitch, and Michael says caring about the problem is why Michael works there. The cold open is Michael: "the original problem was I couldn't get my developer environments unified, and therefore I ended up with Kubernetes. What the fuck?"

## Are We Better Off?

Michael's question is whether operational availability, debugging and troubleshooting are better than in 2004 or 2005, given that "what we keep doing is inventing new problems and then inventing new solutions." At CircleCI the availability struggles came from "doing really complicated shit," not bad engineers. Both recall 2003: Michael was writing software to replace spreadsheets and manual administration with SSH and for loops, managing thousands of servers, while Matty was moving from Exchange 5.5 to Exchange 2000 after an acquisition, and rebuilding dev servers at Allstate from an answer file on a floppy and a ProLiant CD while sitting in a cold data center with a book. Matty says you could hold the whole stack in your head, and asks whether microservices and distribution have left anyone better off. Michael says unequivocally yes in many scenarios and no in many others, and the first thing to understand is whether you actually have the scaling problems or just think the tools are cool. "Keeping one thing online is easier than keeping 25 things online."

## Build for the Problem You Have

Matty recalls a Rails app being "up in 3 days, down in 3 months," and Cars.com handling Super Bowl traffic by renting servers for 48 hours instead of re-architecting, since the spike happened at the same time every year. Michael says to find users and product market fit before investing in a service mesh and service discovery: "don't underestimate the power of rsync and cron," and a colo, Linode or DigitalOcean node can go a long way. The test is whether you're delivering the value, and time spent working out whether a Kubernetes minor version will change an ingress controller API is something no customer pays for. Matty adds that "you" is doing a lot of work, from a 12-person startup to JPMorgan Chase, and tells the story of a retailer's ops team insisting on site stability until management said the job was selling things.

## How Containers Led to Kubernetes

Michael walks back the chain: a developer environment needed to be consistent, so "we're going to package up your laptop, we're going to pass it around until it gets to production," which is what a container is. That led to a scheduler, service discovery, a service mesh, and businesses scanning containers for vulnerabilities, all layered on top instead of asking why the decision was made. If everyone developed in the same reproducible environment, Michael says, containers might not be needed, and then neither would the rest. Michael misses typing service start and strace, where a problem takes ten seconds to find, instead of launching a debug pod. Kubernetes "was originally designed to solve Google-scale problems. Unless you are Google, you do not have Google-scale problems," and Michael's image is that not everyone needs Everest climbing gear to cross the street. Matty: "What's the best container scheduler? The one you don't need."

## Organizations and Data

Matty describes booth conversations at an AWS Summit where Kubernetes people said data was another team's job. Matty is clear that's an organizational pattern and not a failing of the engineers, and says a platform engineer should care because data is part of a platform. Matty used to accept that DevOps means never saying "that's not my job," and no longer does: "not my circus, not my monkeys" is fine, and if your job is limiting, "maybe you need a bigger circus."

Michael adds that platform teams exist partly because the complexity was put inside the company, and asks whether they could have a smaller mandate. DevOps ideas of shared empathy and pain were good, Michael says, but operations expertise atrophied and developers reinvented tools, so a problem solved in 1995 gets rebuilt in 2018. "There's always a 27-year-old willing to redo everything you've already learned." Michael counts 150 AWS services, half competing with each other.

## What to Do About It

Michael thinks simpler tools had a chance and missed: Docker Swarm beside Kubernetes, and a Rust tool like Docker Compose that runs plain processes without containers. Michael's wish is for a generation of tools that abstract the good patterns without all the complexity, solving the 80 percent case. Practical examples from Michael's company: a website behind a CDN and cache that could run on a Raspberry Pi with a cell modem and cost $5 a month instead of $600, and a monolith, with Knuth's line about premature optimization and "I hope that's a problem we have," since scaling problems mean users. One team with one microservice is a success; most places end up with more services than developers, and then Backstage to keep track. Michael adds that "only in software is legacy a bad word": a legacy system made the money, so don't be mad at it.

Inside a large organization, Michael suggests shortening a workflow from 12 steps to 10, automating the repetitive debug steps, showing a decision maker two workflows and asking what you lose, and learning that "you're still a technical decision influencer." Matty recalls learning from a colleague's resume at Chase that treasury services processed $1.5 trillion in wires a day, information that sat on the business unit's intranet home page. Michael describes a Caterpillar division where every transaction ran through six servers, about $6 million a day, which made an $80,000 software upgrade an easy ask. Michael suggests reading an S-1's risk section to learn what matters to a business, and both lament that value stream mapping is discussed less than it used to be, with Matty blaming Steve Pereira no longer going to DevOpsDays.

Michael's closing ask: understand the outcomes at the other end, even approximately, so that "my complexity is built because it achieves this goal," and send in stories of solving a problem with a simple solution like installing an RPM and hitting start. Sometimes, Michael notes, you can't do that 300,000 times, and then you actually do have the problems the tools were designed for.


