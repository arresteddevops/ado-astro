---
title: Pushing Left with Tanya Janca
description: Tanya Janca of Microsoft joins Matty to talk about threat modeling, pushing left, serverless, and more!
date: 2019-06-13T17:47:41.000Z
publishDate: 2019-06-13T17:47:41.000Z
episodeNumber: "131"
podcastFile: arrested-devops-podcast-episode131.mp3
podcastDuration: 48:58
episodeImage: episode/img/pushing-left.png
episodeBanner: episode/img/pushing-left-banner.png
images:
  - img/episode/default-social.jpg
guests:
  - person: tjanca
    snapshot: tjanca
hosts:
  - mstratton
sponsors:
  - sdt
aliases:
  - /131
  - /pushingleft
explicit: no
transcript: pushing-left
---

Matty talks security with Tanya Janca, a cloud advocate at Microsoft who went from software developer to security person to cloud advocate, doing web app hacking and incident response along the way. The episode covers threat modeling, the Pushing Left blog series, serverless security, what developers and ops people should know, and the Mentoring Monday hashtag. The cold open is Tanya's invitation to developers: "Come on over, bring coffee, we will worship you."

## Threat Modeling

Tanya first saw threat modeling when the CISO brought Tanya, newly on the security team, to a meeting with the business about what kept them up at night, and found the business worried about completely different things than a developer who just wants the app to stay up. The idea is to work out the threats to your system, then fix or protect against them, or accept the small ones. Formal frameworks like STRIDE and PASTA exist, but an informal conversation works as a warm-up, such as asking how you would hack your own app. Tanya tells of a friend with an IoT app whose view of the threats changed when Tanya asked about the users, and says it's "basically evil brainstorming, and the more point of views you have, the better."

## Where to Start

Tanya suggests a half-hour to hour meeting with someone from the business, someone from tech and a security person, asking about confidentiality, integrity and availability: how sensitive the data is and where it's stored, what happens if something changes it, and what could knock it down and what you can tolerate, from a pacemaker to a neighborhood flower shop. Don't start with attack trees and a long formal process, which can scare people away. Mistakes include thinking threat modeling is the only thing needed, using a heavy process, and starting late: doing it at the end beats not at all, but it's "so much cheaper to find a design flaw really early than at the end." The OWASP application threat modeling wiki page is a good place to start.

## Pushing Left, Not Shifting

If you draw the system development lifecycle left to right, from requirements and design to coding, testing and release, left is earlier. Shifting left, Tanya says, implies everyone's on board, while at previous workplaces Tanya and a friend from the Canadian government had to fight to start security earlier, so it was pushing. The blog series runs 14 posts because the fifth one was going to be 20 pages: a security activity at each stage, such as security requirements like HTTPS-only and key strength, secure design principles and threat modeling, secure coding and code review, static analysis and dynamic scanning. Tanya writes it as what Tanya wished someone had said two years earlier. Matty says we learn by teaching, and adds the swing-dance saying that "advanced dancers take beginner classes," so experts should read beginner material and just absorb it.

## Serverless Security

Matty asks whether serverless is Amazon's problem. "No, serverless is not Amazon's problem." It's still an app, and functions appear and disappear, so a function that runs five minutes a week can be missed in testing, while malicious actors don't punch a clock. OWASP has a Top 10 for serverless risks, nearly the same as for web apps, and injection is still possible if a function talks to the operating system or a database. Keep an inventory, since "if you don't know you have them, how can you secure them?" Tanya has responded to an incident for an app no one knew the company had. Logging matters even when functions are fast, since without it there's nothing to investigate. Tanya says to log usernames and failed-login bursts, not social insurance numbers or dates of birth. Matty adds you can't log retroactively, and recalls an application error that simply said something has happened, and Tanya recalls apps that sent a daily ping to an inbox that everyone ignored. Matty calls it normalization of deviance.

## What Developers and Ops Should Know

Tanya wishes developers knew the CIA triad, which isn't taught in school, and that the security team wants to help: "keep annoying us till you get what you need because that's our job is to help you." Tanya tells of a design that called double Base64 encoding encryption, and said another team had already built the real thing, but nobody knew who to ask. For searching, Tanya says "Whatever is at the top is the worst in regards to security every time," and recommends searching for OWASP cheat sheets for what you're trying to do, which surface the right answer. Matty adds that being good at searching has always been the secret, recalling using AltaVista in 1998.

For ops, Tanya says ops people get beaten up for unpatched systems though they work in slow waterfall settings, and that smaller, more frequent changes make emergency patches quicker. Security teams should buy ops people licenses and training for scanners like Nessus, and add container and VM scanning to pipelines. Tanya says assume breach and zero trust, recalling a network that drew zones on paper and was one flat network, and says a database should talk only to the app and its administrators, with the perimeter gone.

## Mentoring Monday

Tanya mentors a few people and couldn't take on more, so started a #MentoringMonday tweet that thousands answered, now a weekly hashtag where people post what they want help with and others respond. Tanya retweets it, and women can also get a retweet from the WoSec account. It isn't only for infosec: Python, blockchain, project management and startups are welcome, since "Everyone is welcome." Tanya says to consider mentoring after two years in an industry, even if it's just naming the first book. Tanya recommends The DevOps Handbook, The Phoenix Project and Accelerate, and Matty says telling people to read those is most of Matty's job.

* [Pushing Left, Like a Boss: Part 1](https://code.likeagirl.io/pushing-left-like-a-boss-part-1-80f1f007da95)
* [OWASP Serverless Top 10 Project](https://www.owasp.org/index.php/OWASP_Serverless_Top_10_Project)
