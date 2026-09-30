---
title: Security Chaos Engineering with Aaron Rinehart
description: So you feel like you've got a good handle on chaos engineering...but can you use it for security use cases? Aaron Rinehart of Verica (and the author of the upcoming O'Reilly book on the topic) walks Matt and Jessica through some of the exciting ways that chaos engineering can be used for security approaches.
date: 2020-05-18T13:29:19.000Z
publishDate: 2020-05-18T13:29:19.000Z
episodeNumber: "154"
podcastFile: arrested-devops-podcast-episode154.mp3
podcastDuration: 54:45
episodeImage: episode/img/chaos-security.png
episodeBanner: episode/img/chaos-security-banner.png
images:
  - img/social/fb/chaos-security.png
guests:
  - person: arinehart
    snapshot: arinehart2
hosts:
  - mstratton
  - jkerr
sponsors:
  - sdt
aliases:
  - /154
  - /chaossecurity
transcript: chaos-security
explicit: yes
---

Matty and Jessica Kerr talk with Aaron Rinehart, CTO and co-founder of Verica, about applying chaos engineering to security. Aaron co-founded Verica with Casey Rosenthal and was last on the show a few years earlier, talking about taking an internal enterprise project to open source. Aaron is writing an O'Reilly book on security chaos engineering with Kelly Shortridge, and a chapter of a new O'Reilly book on chaos engineering covers the security case. The cold open is Matty's line "We're adults, but we're all kids at heart."

## How Security Chaos Engineering Started

At UnitedHealth Group, Aaron was chief security architect and helped lead the DevOps transformation. The company hired its first SRE, who described chaos engineering, proactively breaking parts of a system, and it blew Aaron's mind, because Aaron had never seen the system and its security as separate things. The team decided that control validation made sense: you build security measures into a system with a design in mind, and need a way of continuously verifying they work as intended. Aaron was also frustrated as chief security architect that a data architect and a solutions architect would bring different diagrams of the same system, and wanted a way that wasn't subjective "to ask the computer a question." Does the firewall fire when this condition occurs? Does configuration management catch these misconfigurations?

Aaron's short definition is a proactive methodology for understanding an inherent failure within a system before it manifests as pain, for customers or for engineers. Jessica says the key is forming a hypothesis about how the system works in some non-optimal condition and asking the real system.

## What Chaos Monkey Was For

Aaron says Chaos Monkey began during Netflix's move from DVDs in the mail to streaming, in 2008, when AMIs were disappearing in AWS and causing outages. Netflix had no chief architect to mandate anything, so it designed services to be resilient, and Chaos Monkey would pseudorandomly take down one during business hours. Aaron says that puts a well-defined problem in front of an engineer, and "when you put a well-defined problem in front of an engineer, they solve it." Jessica says it turns "works on my machine" into a reproducible test.

Matty adds that chaos is about testing a hypothesis that everything will be fine, not one where everything goes to hell, and quotes Netflix's line about running it in the middle of a business day in a carefully monitored environment with engineers standing by. Everybody knows the experiment is happening, and when things look squirrelly it's done, so if the key business metric heads south, pull the plug.

## What a Security Experiment Looks Like

Aaron says most security experiments focus on accidents and mistakes, the low-hanging fruit: a weak password, ports open that shouldn't be, too much access. With 680 accounts and 200 services with conflicting IAM policies it's easy to miss a misconfiguration, so they proactively introduce these mistakes to build confidence that the tools catch them. Jessica's summary: engineers aren't perfect, so stop asking them to be, notice when they're not, and let them learn.

Aaron's example is the open source tool ChaoSlingr, written at UnitedHealth Group, whose original name was a poop-themed joke that kept a side project fun. It had three functions, a generator, a slinger and a tracker, written in Python on AWS Lambda, with opt-in and opt-out tags. The main experiment opened an unauthorized port in AWS security groups, on the assumption that the firewall would immediately block it. They found the firewall detected it only about 60 percent of the time, due to configuration drift between their non-commercial and commercial AWS environments. The cloud-native configuration management tool, which they weren't paying extra for, caught it every time. Both tools sent log data to the security operations center, but the operators couldn't tell which AWS account and instance the alert came from, which could take hours to work out, so they added metadata to the alerts. Aaron says "Nobody's freaking out" and they learned all of it without customer pain.

Aaron's boss, the CIO, said the tool keeps the incident team sharp by testing the tools, people, skills and runbooks. Matty adds that business hours are the best time to have an outage, since everyone is available, and practice makes incident response normal. Jessica compares it to unit tests, which give you privacy on your own computer, while chaos tests give you privacy within the company.

## Logging, Root Cause and Who Security Is

Aaron says there is no software security logging anywhere, and that log events must be written by a software engineer and need to make sense to a human. Aaron also says "Root cause is a fallacy," and Jessica adds there are many necessary conditions, any of which could be called the root cause. Aaron says security is always an engineering problem, and that the book's audience is about 70-30 security people, trying to bring them toward the software engineering and SRE communities.

Matty says security has come from two directions, business risk and controls in the 90s and engineering now, and that zero trust replaces the fence with locking your door. Aaron wants security in the value chain, and says DevOps helped. At UnitedHealth Group, Aaron taught over a thousand security people to write Python, not to make them engineers but to build empathy, and Aaron figures 15 to 20 percent wrote interesting scripts. Matty says ops and security are like a corporate lawyer, known only when something goes wrong, yet security and reliability are aspects of quality. Aaron also says security spending takes about 30 percent of project cost in unregulated environments and 40 in regulated ones, and mapping an experiment to the control it verifies gives "free compliance." Matty says audits are often theater and an automated trail is better than "a bunch of information that a human being typed in," and Jessica's version is "That is not an audit trail. That's a blame trail."

## What Makes It Hard

Aaron says security chaos engineering is only about three and a half years old, there are few open source tools, and ChaoSlingr is somewhat deprecated since Aaron left UnitedHealth Group. Others are writing their own Python and bash scripts to inject failures, mostly for cloud and container security experiments. Aaron adds that one of the better tools is a Java one from a person in Berlin that hadn't been open sourced.

Aaron is @aaronrinehart on Twitter, and there's a chance to win a printed copy of the O'Reilly book through the show notes.

- [Last time Aaron was on ADO](https://www.arresteddevops.com/inner-source-to-open-source/)
- [ChaoSlinger](https://github.com/Optum/ChaoSlinger)
- Enter to win a free copy of the upcoming *Security Chaos Engineering* O'Reilly book
