---
title: ITIL Eye for the DevOps Folks with Steven Boyd
description: What's this ITIL thing all about? How can it complement DevOps? Can't we all just get along? Special guest Steven Boyd joins us to discuss how ITIL can help an organization, and help correct some misconceptions about what ITIL is (and is not).
date: 2015-10-31T03:24:02.000Z
publishDate: 2015-10-31T03:24:02.000Z
episodeNumber: "46"
podcastFile: arrested-devops-podcast-episode046.mp3
episodeImage: episode/img/itil.png
episodeBanner: /episode/img/itil-banner.png
images:
  - /img/social/fb/itil.png
guests:
  - person: sboyd
    snapshot: sboyd
hosts:
  - mstratton
  - thess
sponsors:
  - victorops
  - datadog
  - 10thmagnitude
aliases:
  - /46
youtube: SuaZcx4BuVA
explicit: yes
transcript: itil
---

Steven Boyd is a certified ITIL expert and a federal employee at the U.S. Patent and Trademark Office, running the service desk's problem management and major incident processes. Trevor opens the show by noting that "DevOps can be a swear word depending on who you talk to," and Matty comes in with a theory: DevOps is the natural merging of Agile and ITIL. This conversation is mostly Steven correcting what the DevOps crowd thinks ITIL is, and Matty and Steven finding out how much they agree.

## What ITIL Is, and How to Say It

The pronunciation debate goes nowhere fast. Steven says the spelled-out ITIL is the common one, but that people in the DoD community say it like the word idle, which Matty had never heard. Trevor has never been exposed to it at all, so Steven gives the short version: decades of best practices for IT service management, originally collected inside a UK government organization to cut costs and improve efficiency. The current 2011 version is a repackaging of those practices. Steven stresses that it is "a descriptive framework, not necessarily a prescriptive."

Matty is ITIL V3 Foundation certified, and came to it backward. When Matty took the workshop, the realization was that it was the thing the team at Bank One had been doing the whole time. They just hadn't known they didn't invent it.

## Change Management Is Not the Whole Framework

Steven walks through the certification ladder. Foundation gives you the vocabulary and an overview. The intermediate certificates split into a lifecycle track (service strategy, design, transition, operations, and continual service improvement) and a capabilities track. The expert level, Managing Across the Lifecycle, is the one that covers the ability to actually create internal processes based on the framework.

Steven's diagnosis of the ITIL backlash is that when someone says ITIL, they usually mean the change management process inside service transition. Matty adds that for most people in ops, change management is the piece they actually touch, through change requests that get rejected while nobody knows what's going on. Steven's explanation for why it is the only piece people know: "Because that's how it was sold." When an organization implements a piece of it badly and brands the result as ITIL, the whole framework takes the blame.

## Risk Management, Not Risk Aversion

One listener question asked how ITIL's risk aversion squares with fail fast, fail small. Steven pushes back on the premise. ITIL is about classifying changes and documenting them so risk can be assessed, not avoided. Once an organization understands a risk and accepts it, the change becomes a standard change with standing approval, so it doesn't go to the CAB every time. The documentation also gives you traceability when you have to work out which change led to an incident.

Matty takes that in the automation direction: a standard change could be standard because a set of automated compliance, security and test checks are all green, rather than because someone wrote down which buttons to push. Matty wants humans in the loop only where something needs human judgment. That leads to separating risk from impact. Something likely to break that touches one thousandth of your users for five seconds may be fine, while something very unlikely to break that would "set the whole building on fire" may not be. Steven agrees the tolerance is specific to the organization, but says it only works if change management is wired to incident and problem management. Without that flow you have silos of information, "and now you're not making a real risk assessment."

Trevor asks what a CAB is. Steven says Change Approval Board, then corrects that later in the episode: it's the Change Advisory Board, and the advisory part is the point, since the board is meant to receive information back from operations.

## Blameless Postmortems and Problem Management

Matty ties this to blameless postmortems: people will make mistakes, so the question is how to improve the system. If a change passed every automated check and still caused a problem, the answer is to fix the system, not to tell Trevor the code was awful.

Steven says the major incident process ended in what the DoD calls an after-action report, which Steven treats as akin to a blameless postmortem and as the trigger into problem management. Steven's problem management process starts with a preliminary analysis to scope the investigation and decide whether there is a viable business reason to pursue it. Steven argues that problem management is not only about prevention. It is also about minimizing and mitigating the impact on users, and most organizations invest in change management instead because vendors tell them that is where their incidents come from. In a fail fast, fail small shop you will have incidents anyway, so the question is how quickly what you see in service operations gets fed back into development and design.

Matty describes personal CAB experience as mostly making sure nobody changed a thing at the same time as someone else. Matty would rather trust an automated before-and-after showing that things weren't broken and still aren't, applied in a repeatable way. Matty quotes Mark Burgess: "every time someone logs interactively into a system, they compromise everybody's understanding of that system."

## Roles, Functions, and How the Records Connect

Matty relays a question from Dustin Collins, who had said a shallow understanding of ITIL is that it helps define roles, and who pointed at the failure mode in cross-functional teams: "if everyone owns it, no one owns it." Matty adds an anecdote Matty calls infamous or apocryphal, about a speaker at Etsy asked how people make sure the follow-ups from a blameless postmortem get done. The answer was that they just do, which Matty says doesn't scale.

Steven says ITIL does address this, through the RACI matrix and through the distinction between roles and functions. People like to sit in one silo, but ITIL says an analyst can also hold a role in the change management process. Steven had seen incident teams believe problem management was somebody else's job and that documentation was for the designers.

When Matty sketches how an incident flows into a problem and then into a change, Steven stops Matty with a clarification: "one type of record cannot turn into another type of record." Incidents can trigger a problem, and resolving a problem may require a change, but the records stay separate and are tied together. Matty describes the bridge Matty's team built at Apartments.com between the Agile backlog tooling and change requests, so releases tied into changes and a problem could land back with a product owner as a defect. Steven says ITIL won't dictate that as long as you know your inputs and outputs, and that defect management is a big part of service transition, because without it you can't trace what you see in production back to something testing appeared to resolve.

## Follow the Framework, Then Extend It

Matty raises zealotry: saying there is one ITIL way, and that anything else is doing it wrong, is the one thing that would actually be wrong. Matty also doesn't want people to decide they will never have a change board because they had a bad one three jobs ago.

Steven agrees on the zealotry but disagrees a little on cherry-picking. Steven says you shouldn't subjectively pick which parts of ITIL to implement, and you should deviate from the framework only when you are piloting something or you have a process that is better than the basic approach. "It's more of a guide," Steven says, and as long as you stay consistent and document your records, you can modify it. Matty clarifies that the point was extending it and building bridges, not skipping parts. Steven agrees that ITIL gives you the bare-bones best practice and that a better process only creates more value for users.

## CMDBs in a Volatile World

The last listener question asks how a CMDB fits when infrastructure is volatile and what is worth documenting. Matty's position: "any CMDB that requires manual updates is about as valuable as the bits that it's written onto." If you treat infrastructure as code with something like Chef or Puppet, the tool can populate the CMDB with accurate information, which Matty prefers to a discovery crawl that takes six days and is stale on arrival.

Matty also warns about capturing too much. At the bank, each VM had a CMDB record tied to its host, and since VMware could move VMs between hosts all day, every migration became a change control process because it touched the CMDB. That made automatic load balancing impossible. Steven's answer from the ITIL side is short: document whatever creates value. For problem management, that means enough data to scope an issue, because if you can't scope it you can't assess its impact and urgency, and so can't prioritize it.

Steven's line from the DevOps DC talk, which Matty calls the pull quote for the episode, is a question: would you accept DevOps in a box? If not, why would you accept ITIL in a box?

Matty wanted to spend the last stretch on incident, problem and root cause practices like ChatOps and blameless postmortems. Steven's answer was "We don't have time for that today." They wrap on the point that both ITIL and DevOps are built around continuous improvement, and Steven calls the two symbiotic.

* [Agile Change and Release Management at the #1 Online Rental Site in the US](http://www.slideshare.net/mattstratton/agile-change-and-release-management-at-the-1-online-rental-site-in-the-us) - Matt's talk about ITIL and Agile
* [Chef Style DevOps KungFu](https://www.youtube.com/watch?v=_DEToXsgrPc)

## Checkouts
### Trevor
* [Yoshi's Wooly World](http://yoshiswoollyworld.nintendo.com/)
