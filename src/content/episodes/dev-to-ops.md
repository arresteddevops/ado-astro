---
title: dev to ops
description: Aaron Blythe, John Smyth and Nate Burleson, three developers who drifted into operations, join Matty and Trevor to talk about what that move looks like, from first deployments to code review for sysadmins.
date: 2014-08-28T23:17:34.000Z
publishDate: 2014-08-28T23:17:34.000Z
episodeNumber: "19"
podcastFile: arrested-devops-podcast-episode019.mp3
podcastDuration: 52:00
episodeImage: episode/img/dev-to-ops.png
episodeBanner: /episode/img/dev-to-ops-banner.png
images:
  - /img/social/fb/dev-to-ops.png
guests:
  - person: nburleson
    snapshot: nburleson
  - person: jsmyth
    snapshot: jsmyth
  - person: ablythe
    snapshot: ablythe
hosts:
  - mstratton
  - thess
sponsors:
  - victorops
  - datadog
  - 10thmagnitude
aliases:
  - /19
  - /devtoops
youtube: weF8jrcSU7s
transcript: dev-to-ops
explicit: yes
---

## Ops by Necessity

Aaron Blythe of Cerner, and John Smyth and Nate Burleson, both senior consultants at 10th Magnitude, all started as developers. Aaron's first taste of ops was deploying a Rails e-commerce application himself: he learned Bash on the fly, decided there had to be a better way, and went from Capistrano to Chef. John says he moved into pure operations because an application was performing badly on SQL Server, and that the split between the two "wasn't so clear-cut." Matty says John has told him he'd been doing this for years, but "we used to just call it working."

Nate says the Unix sysadmins he met early in his career taught him Perl tricks, and were good programmers who knew the command line and automated their jobs. In his telling the division between dev and ops is modern and artificial, though sysadmins did tend to keep programmers away from the systems, "for fear that we didn't know what we were doing, which was true." Trevor says the move begins with necessity: something doesn't work, you find it isn't your software, and if nobody else can change it and you can, "you become the vector for that change." His own start was manually changing permissions on the wwwroot folder and blowing up IIS.

## What a Developer Brings to Ops

John says everything is layers of abstraction, and the deeper you know them the better you can troubleshoot. His development background started with learning assembler and the hardware by programming it. Aaron says the exchange goes both ways: the development team teaches ops code reuse, and ops has a vast knowledge he never had when the development environment was set up for him and he couldn't have built it from scratch.

## Code Review for People Who've Never Done One

Matty quotes Adam Jacob on cultural change: see what happens to sysadmins when you tell them they have to do a code review before an infrastructure change. Aaron says his development teams spend about half their time reviewing or testing someone else's code, which ops colleagues find hard to believe, and that with Lean, "you got to slow down to be able to speed up."

Matty admits he doesn't really know how to do a code review, and the guests explain. John says there's no right way but there's probably a wrong one: reviewing a sample of someone's code for style, or reviewing commits before they're committed. Trevor says review is subjective without agreed standards, like clean code conventions, and that it's mostly accountability. He describes a project with 100 design patterns "because the person who wrote the code had no one to be accountable to." John says "there's no better way to make sure the code is readable than to make sure somebody reads it other than you," and that with Chef they check attributes are used consistently and things are decomposed. Aaron says tools now let you comment inline on a single line, like a stray rm -rf, and that review is a learning experience for new hires, who are told to grab a line and ask what it does.

Trevor likes pair programming for the same reason, and Aaron has paired with an ops person, staying late and going from whiteboard to keyboard to system, and says "when you hit that magic, it's pretty sweet."

## Surprises

Nate was surprised by the immaturity of tooling in the Windows ops space, including source control and code review, since he'd found the most technically adept people tended to be in ops. Trevor's surprise was how far over the line toward ops he'd already gone: building and configuring machines, adding users and firewall rules, because nobody else was in that role.

## Incentives Without Friendship

A Twitter question asks about incentives for bringing dev and ops together. Aaron says there aren't concrete ones, and that the two groups sit on campuses 15 miles apart in Kansas City, so his team goes to the ops campus one day a week and ops comes to theirs two days a week, though no manager said they had to. They do it because they "want to be physically in the same location and humanize each other."

Matty says metricizing collaboration is tricky, and John says formal structure doesn't dictate relationships, since teams that are separate but whose people work together have accomplished the goal, and a joint team "doesn't prevent somebody from being a dick." Matty adds that collaboration doesn't require friendship. He and John worked together for years at a bank without socializing outside work and collaborated fine.

## Learning the Other Side

Trevor's advice for a developer who wants to understand ops is to talk to an ops person, and Matty calls that not really advice, asking how. Trevor: "Like a human being?" John says the opportunities to collaborate are situational, and that when you have a problem you should ask questions and not pretend to know: "Nothing makes me crazier than when somebody feels the need to answer a question despite the fact that they don't know what the answer is." Aaron asks what the most frustrating part of someone's job is, and is blown away by the answers, since he didn't know anyone had to worry about those things. Trevor adds not to ask "to ask the question," but "because you care." Matty asks John how he'd react if someone interrupted him during a fire to say it looks stressful, and John says he'd probably be a sarcastic ass.

## War Stories

Aaron deployed an application on a Friday at 5 o'clock, and during dinner with his wife his boss's boss said the CSS wasn't loading. It worked on one of the two nodes and not the other, so he had to leave dinner and fix it. John's was a single storage array that periodically ground to a halt and took down a fully virtualized data center. Nate released a new version of an error-logging SOAP service the day before his honeymoon, and it caused an infinite loop of logging its own errors: "the plane lands in Argentina, and my BlackBerry starts lighting up." His lesson was to never release on a weekend or before leaving town.

Matty tells one about a coworker who was handed a decommissioned database server, and panicked when the storage array wasn't visible. Matty checked the SCSI cables and found that in his hurry he'd plugged the two RAID cards into each other and the two storage arrays into each other, and for at least a year Matty called him Loopback.

[You Suck at Technical Interviews](http://seldo.com/weblog/2014/08/26/you_suck_at_technical_interviews)

John Vincent - [DevOps The Title Match](http://blog.lusis.org/blog/2013/06/04/devops-the-title-match/")

[Learn Linux](http://www.youtube.com/playlist?list=PLQK7ZMLUQcMoJfzkuUnXDQi5H6gk2Trju)

## Check Outs

### Nate

[ConEmu](http://code.google.com/p/conemu-maximus5/) (Console Emulator):

### John

[Nueske’s slab bacon](http://www.nueskes.com/shop-by-department/smoked-bacon.aspx)

### Aaron

Jez Humble’s [ChefConf talk](http://www.youtube.com/watch?v=oX8af9kLhlk)

### Trevor

[TeamCity](http://www.jetbrains.com/teamcity/)

[Encourage extension Visual Studio](http://visualstudiogallery.msdn.microsoft.com/1f3afebb-06c7-4b77-a54f-eb2f0784008d)

### Matt

[Lumosity Mobile](http://itunes.apple.com/us/app/lumosity-mobile/id577232024?mt=8)
