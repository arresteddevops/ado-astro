---
title: Why Are We Still Talking About DevOps And Security
description: Sue Choi and Dominic of Mondoo join Matty to talk about why DevOps and security still struggle to work together, from paper security and false positives to supply chain and building trust.
date: 2022-02-16T04:06:23.000Z
publishDate: 2022-02-16T04:06:23.000Z
episodeNumber: "180"
podcastFile: arrested-devops-podcast-episode180.mp3
podcastDuration: 53:02
podcastBytes: 25480396
episodeImage: episode/img/still-talking-about-security.jpg
episodeBanner: episode/img/still-talking-about-security-banner.jpg
images:
  - img/social/fb/still-talking-about-security.jpg
guests: []
hosts:
  - mstratton
sponsors:
  - kolide
  - zenhub
  - honeycomb
aliases:
  - /180
  - /stilltalkingaboutsecurity
explicit: yes
transcript: still-talking-about-security
---

Matty talks about DevOps and security with Sue Choi, co-founder and CEO of Mondoo, an infrastructure security company, and Dominic, another Mondoo co-founder, co-creator of InSpec and other tools, whom Matty knows from Chef. The conversation is about why security and DevOps still struggle to work together. The cold open is Dominic on attackers: "the hackers are making the same discovery with the same speed," except they're "highly motivated to use them as quickly as they can."

## Hidden Work and Paper Security

Sue says that if software is eating the world, hackers are having a feast, and there aren't enough security professionals. DevOps teams already do a lot of security work that's hidden. Sue thinks security should be everyone's job but people don't know how, aren't incentivized with shared metrics, and often "black out" at the topic because the stakes are high. Matty cites a tweet, which turned out to be from someone the transcript renders as Cat Sweet, asking why security incidents don't get the same blameless "time I took down production" stories, with the reply that they cost money, to which Matty answers that tech incidents do too.

Dominic says both aim to make infrastructure run as intended: a service that's secure but down isn't useful, and one that's running while giving out credit card numbers like Halloween candy isn't either. Not every security finding will be fixed or needs to be. Sue calls the security team's mandate "paper security," as opposed to real security, which is what DevOps cares about and is hard to determine. Matty says organizations often claim a regulation requires something when it's how they implemented the control, and uses a Simpsons image of layers of physical security ending at a broken screen door.

## A Story From Deutsche Telekom

Dominic recalls that about ten years earlier, at Deutsche Telekom, when cloud and DevOps were new, an auditor arrived with paper security manuals that didn't fit how they ran infrastructure. The team rejected the binders, distrusted security and ended up worse off. It resolved when a new pen tester and auditing team came in with fresh eyes and said some docs applied and others didn't, and together they wrote new requirements and put them into the automation pipeline. Dominic adds that ransomware attacks leverage the same automation that DevOps preaches.

## Empathy and the CISO

Matty says policies are organizational scar tissue, and that almost nobody blocks you because they're a dick. Sue says security conferences lack empathy and team-building workshops, but that's shifting as security diversifies. Matty says classic security is adversarial, which shapes the whole outlook, like Matty's own old-school ops view of developers as the enemy. Sue says CISOs often feel peers dislike them, since CTOs can relate work to business value while security talks about risk, so the change needs to start at the top. Matty says ops is like being the corporate lawyer, known only for failures, and Sue wants to invite security to devopsdays.

Dominic says both sides have tried crossing over, but each lacks the other's context. Security asks why ops can't just auto-remediate, and ops worries about what that does to infrastructure. DevOps has built the muscle for safe, reproducible change with development teams, and it's time to extend it to security: don't hand over a list of 300 findings, give 10 critical ones to tackle together. Sue says that needs negotiation skills and a decision-making framework. Matty says shift left without nuance sounds like developers doing all the security, like NoOps, which failed because domain expertise matters, and Dominic adds it's subject matter expertise around one table.

## Practical Advice

Dominic suggests picking one topic, like SSL/TLS, and discussing it with the security team, and not taking all 300 results. Sue says people in security have a hard time, like a SOC 2 checkbox about cameras at the entrance for a fully remote company, and DevOps people's answer is always "it depends." Dominic describes two trust-breaking stories: security freezing an environment for three weeks for an audit, and the DevOps team changing the environment the Monday after certification so nobody knew what happened. You can't change the other side but can change yourself.

Sue would love success stories to match DevOps metrics. Matty agrees and says that talk-worthy failures can be told without revealing attack details. Sue raises Equifax, and Dominic says there's technical security and legal security, and to find the security person who will have the technical conversation.

## Supply Chain

Dominic describes the supply chain as everything that goes into building software: dependencies and infrastructure components. Shift left applied to supply chain with the same 300 findings means people react only to critical issues, and then findings get relabeled as critical. Tools are full of false positives, and "nobody's going to give me those 15 minutes of my life back." Dominic says progress comes in three steps: visibility, prioritization, then fixing, and thinks auto-remediation vendors are getting ahead of themselves. Matty notes that requiring CIO approval for every open source component isn't protection.

## What to Do Tomorrow

Dominic's two suggestions: build a relationship with a security person, even by talking about anime or Star Wars, and get visibility into your infrastructure, since companies have a bigger visibility problem than they admit. Sue's are to make time to build relationships in a remote world, and to align on goals, since one DevOps team assumed security should own policies and tools while security didn't know.


