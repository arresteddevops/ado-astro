---
title: managing systems in the cloud
description: "Tom Limoncelli, one of the authors of _The Practice of Cloud System Administration: Designing and Operating Large Distributed Systems_ talks with Matt and Trevor (but mostly Trevor) about the challenges of modern system management."
date: 2014-10-15T00:21:18.000Z
publishDate: 2014-10-15T00:21:18.000Z
episodeNumber: "23"
podcastFile: arrested-devops-podcast-episode023.mp3
podcastDuration: 49:20
episodeImage: episode/img/managing-systems-in-the-cloud.png
episodeBanner: /episode/img/managing-systems-in-the-cloud-banner.png
images:
  - /img/social/fb/managing-systems-in-the-cloud.png
guests:
  - person: tlimoncelli
    snapshot: tlimoncelli
hosts:
  - mstratton
  - thess
sponsors:
  - victorops
  - 10thmagnitude
aliases:
  - /23
  - /managingsystemsinthecloud
youtube: _SddIa6iej0
transcript: managing-systems-in-the-cloud
explicit: yes
---

## What "Cloud" Means Here

The episode opens with the show reading its first glowing iTunes review, titled "Two Chimps and a Mic," which gives five stars because the reviewer "had no clue what they're talking about." Trevor's only correction is that there are two microphones. Then Tom Limoncelli, co-author of The Practice of Cloud System Administration, explains why the book exists. Tom's first book came out in 2001, and system administration has since shifted from help desk and machine administration toward service administration, including what Tom learned at Google.

Tom says the word cloud "has been taken by marketing people and kind of destroyed" (the publisher wanted it in the title, so the book's first use of the word is to explain what they mean by it). What they mean is distributed computing, systems so large that work is divided among many machines, as opposed to the 1990s pattern of buying a bigger and bigger server, which stops scaling because machines only get so large. Trevor asks for horizontal versus vertical scaling, and Tom admits to keeping a cheat sheet on Tom's palm: vertical is one machine getting bigger, and horizontal is dividing the work across 8, 80 or 800.

## Data Over Hunches, and Analog Systems

The first skill change moving to Google, Tom says, was that monitoring became far more important, because in a big distributed system no one person understands everything, so you have to instrument it and make decisions from data. Tom tells of the second or third week there, when Tom offered a solution from senior sysadmin experience and a very junior sysadmin pulled out a graph showing that the change Tom had made moved the line the other way, so they should do the opposite of what Tom said. Tom says it was humbling and "such a better way of doing system administration." The second change is that at large scale downtime is more visible, and you get good at sensing a sick system and fixing it before it becomes an outage, not at responding to outages.

Matty asks about servers as interchangeable cogs, and Tom says "the components don't matter, the system matters." RAID is Tom's small-scale example of decoupling component failure from service failure. In a very large system, Tom says, computers aren't up or down but degraded: "Gmail is never up or down. It's running at 90% up or 80% up. It's an analog thing."

## Your Architecture Is Wrong, With Details

Trevor's clients are finding their software is all-or-nothing, and Tom says that's why sysadmins need to be at the architectural level, not saying "we don't use that." Even in the most distributed system there's a dirty secret: "there's always that one thing that can't be replicated," like a lock server. When Matty cites Jez Humble's "your architecture is wrong," Tom says a sysadmin who says that gets asked how it should be done, and often doesn't know. So the first third of the book is distributed architecture explained for sysadmins, "like a boot camp for the architectural decisions," and the second part is operating large systems, with on-call and monitoring.

The book's "surprise ending" is an assessment system, twelve questionnaires you rate from 1 to 5, and if you redo it monthly in a spreadsheet you get a heat map of improvement, going from red to green. It can be done per service, and rolled up across teams so a CIO can see where to move resources. At Stack Exchange, Tom says, the Director of Engineering used it to focus on the top-priority service.

## Twenty-Seven Handoffs

To find where to start, Tom uses a lean analysis to find the bottleneck, or gets silos into a room to talk about the pain they cause each other. On one project the team analyzed one iteration and found 27 handoffs across 15 teams, and "no one had ever drawn a picture" of it. They sat down with each team and walked through the graph, and found many unnecessary dependencies and undocumented ones that explained delays. During a break, someone from one team cornered Tom, embarrassed to admit they'd never realized their delays caused five others. Tom says "an executive standing in front of everyone saying we have to break down the silos" has never broken one, but sitting down with another team builds empathy. In a sorting example, one team always handed the database down unsorted and every team after them spent two hours sorting it, when it could have been sorted once.

At Stack Exchange, Tom adds, the first disaster recovery failover drill took 10 hours, then 5, and now 1 or 2. In one drill they filed about 30 bugs, and half were closed before it ended because developers watching operations do the steps built a button that did it in one click. Matty says you can't have "the empathy project"; Tom agrees the goal has to be improved service or uptime, and that empathy is the route. Tom's illustration is continuous integration, where the point isn't a two-hour build but the confidence to push constantly, and Tom compares software to a car company that warehoused every car for a year before selling it.

## Hipsters, Unicorns, and Damn Humans

Matty says jargon can make the field intimidating, and mentions the blog post Matty wrote on hipster DevOps. Tom says technology always has the top 5% inventing things and someone has to push it to the other 95%, and is glad the DevOps community has stopped acting as if enterprises would never understand. On J. Paul Reed's closing talk at DevOpsDays Chicago about ending the unicorn talk, Matty says the unicorns themselves say "we're not unicorns," and that the concept of "the other" propagates the myth that DevOps only works at unicorn companies. Tom points to Todd Underwood's LISA talk debunking the idea that Google's problems are unique, and says every company has the biggest problem, "those damn humans." Tom cites The Forbin Project, where a computer concludes the real problem is people.

## Coping Mechanisms and "Bring Us the DevOps"

Tom's time management book for sysadmins, which Matty has on Matty's shelf, is a list of coping mechanisms, since "no human actually has good time management skills." Tom kept it around 120 pages, with the top three tips in the first 20, because "always front-load."

Asked what to do when the boss says bring us DevOps, Tom says to find out what they mean, since after a month you may hear "I don't see any difference" because they wanted something else. It's like "bring me the cloud," which to executives usually means getting a server in 15 minutes and not waiting 6 months, and to consumers means their photos are backed up. If they don't know, cynical Tom says fix your biggest pain point and call it DevOps, while non-cynical Tom says turn business priorities into measurable results, automate measuring them, and work on projects that move them.

## Check Outs

### Tom

Stack Exchange is open sourcing its monitoring system called “Bosun”. Look for the presentation at Usenix LISA http://www.usenix.org/conference/lisa14/conference-program/presentation/brandt

### Matt

pester busser for test kitchen by Jay Mundrawala (discussed in [Matt Wrock’s post](http://www.hurryupandwait.io/blog/configure-and-test-windows-infrastructure-using-powershell-technologies-dsc-and-pester-running-from-chef-and-test-kitchen) which I will link to because it is a long url)

- [Riffsy](http://www.riffsy.com/) ios8 keyboard for animated gifs

### Trevor

- [http://www.jeremymorgan.com/blog/programming/the-great-unicorn-hunt/](http://www.jeremymorgan.com/blog/programming/the-great-unicorn-hunt/)
- Borderlands the Pre-Sequel is out :D
