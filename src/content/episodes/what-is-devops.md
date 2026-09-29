---
title: What Is DevOps?
description: Matt and Trevor talk about the reason for Arrested DevOps, the format of the show (sort of), and then 'what does DevOps mean?'' Then somehow the topic devolves into open floorspaces and Matt puts his foot in his mouth a few times.
date: 2013-12-06T01:52:00.000Z
publishDate: 2013-12-06T01:52:00.000Z
episodeNumber: "1"
podcastFile: arrested-devops-podcast-episode001.mp3
podcastDuration: 37:24
episodeImage: episode/img/what-is-devops.png
images:
  - /img/social/fb/what-is-devops.png
guests: []
hosts:
  - mstratton
  - thess
sponsors: []
aliases:
  - /1
  - /whatisdevops
youtube: 88iUXN5cCas
explicit: no
transcript: what-is-devops
---

## Why Another DevOps Podcast

Matty and Trevor open the first real episode by saying who it's for: not "your super deep, knowledgeable DevOps guru," but software and infrastructure practitioners who want to know more about DevOps and how it can help them. Matty wants to get newbies ramped up so the advanced material already out there is easier to consume, and to pull in people outside the usual sysadmin and developer circle, like product owners and DBAs. Trevor's angle is that, as a developer, he'd "been doing all kinds of DevOps" without ever having a name for it.

The ground rules are short. No judging anyone's technology, which Matty puts as "you don't have to feel dirty for using Microsoft." Not tool-focused either, because "tools are easy. People are what's tough." And no name-dropping, which Matty notes is easy to promise, since he's never spoken with John Allspaw at Velocity.

## Not a Job Title, and Not a Group Hug

Matty leans on John Vincent's blog post (linked below). Skipping the language, its gist is that DevOps means caring about your job enough not to pass the buck, and that "developers need to understand infrastructure and Ops people need to understand code." Matty is quick to add that this isn't the slide of the developer and the ops person hugging each other. Even in companies with a wall between the two, people mostly like each other fine.

His example of what DevOps isn't is error logging. It gets pushed to the last sprint, the developers ask tech ops what they want logged, and tech ops answers "I don't know, what does your app do?" Each side is basically saying "not it."

Trevor's version is closer to the ground. He sets up the CI server and the deployments to the user acceptance servers, and he also knows what instances the team runs, how big they are and when they need to scale. Recently he had to scale up the database server because there wasn't enough memory to run the ETL process, which was taking six hours. With more defined roles, he figures, someone would have caught that sooner instead of waiting on him.

Matty's other example of what DevOps isn't is a job title. A CareerBuilder search for the keyword turned up listings that were plain sysadmin work: "There are no jobs listed for sysadmins anymore, they all want DevOps engineers," and the description then asks for someone to manage a farm of Windows 2003 servers and do weekly code pushes with Robocopy.

## Patching, Fiefdoms, and the Easiest Thing to Blame

Matty admits he was "very quote-unquote anti-DevOps a few years ago," and that the thing he got most wound up about, in a Facebook thread he can no longer find, was patching: "who's going to patch those servers?" He now thinks the whole premise missed that you still have ops people whose job is to care for this stuff, even if sometimes they're the same person as the developer. Ops likes command and control because they're the ones on the line when the web server goes down. Trevor describes the twitch when someone asks to make themselves administrator on the VM, and Matty repeats a line he once heard: "every time someone logs onto a server interactively, they compromise everybody's knowledge of that system."

The blame runs both ways. Ops assumes developers want a Wild West and will break things, when nobody wants to be the one who takes the site down. Developers, asked in sprint review why they didn't get their story points, say they were waiting on TechOps, which after blaming environment differences is "the easiest thing in the world to blame." Matty's point is that neither story is true, and that when a developer blames TechOps, "chances are TechOps isn't in the room."

## The Maintenance-Only Pilot

A listener question from Twitter, from Brian, asks whether DevOps works when you have ops plus maintenance programmers and the original developers have moved on. Matty says yes, and that a product in maintain-only mode is "a great candidate for a DevOps pilot because you're talking low risk." He also warns that culture changes like this "tend to slow you down before they speed you up."

He describes a previous employer with engineering doing new features, TechOps keeping the lights on, and a separate production support group of developers doing bug fixes. When something broke, prod support worked from the app's logs while TechOps worked from Keynote alerts, so the two groups were often troubleshooting the exact same problem independently. The best case was wasted time. The worst was that they started screwing each other up. Trevor has a smaller version: two development teams in the same area, one of which committed a new version of the database to the branch without telling anyone, and the other spent two hours hunting for a bad merge that wasn't there.

## Open Floor Plans Won't Fix It

Technicians want to solve problems with tools, Matty says, and organizations want to solve them with concepts, like open workspaces. His view is that "you can't make somebody inherently change what they do or how they do it by changing how they sit." Trevor adds that it annoys people more often than not, and Matty says the organization he watched try it had coworkers tweeting about the person sitting next to them.

Nathan Harvey, also by Twitter, suggests keeping the cube walls and going to lunch together instead. Matty agrees, with the caveat that it can't be artificial, and gives the Myers-Briggs afternoon as the example of forced bonding that leaves everyone annoyed about the time it took. Trevor's own open office does get him talking to other teams, usually over the question of who wants to go to Portillo's. Both come down on getting product teams to sit near each other, not for bonding, but because it's faster communication.

The conversation then wanders into what to wear when a client visits, which ends with Matty saying "I don't know why we're talking about the clothes" and Trevor answering "I forget how we got here."

[DevOps – the Title Match](http://blog.lusis.org/blog/2013/06/04/devops-the-title-match/) – John Vincent’ blog post about what DevOps is and isn’t, that Matt totally read from and referred to.

[Food Fight Show](http://foodfightshow.org/) – The Podcast where DevOps chefs do battle. These guys totally watched this live. Which is more than I can say for [The Ship Show](http://theshipshow.com/). Just kidding.

## Check Outs

### Matt

* Ender’s Game
* [High West Whiskey Campfire](http://www.highwest.com/spirits/new-campfire/)

### Trevor

* [Saints Row](http://www.saintsrow.com/)
