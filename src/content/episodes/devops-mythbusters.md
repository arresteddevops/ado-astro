---
title: DevOps mythbusters
description: On this episode of Arrested DevOps Matt and Trevor are  joined by some of the finest minds in DevOps podcastery - Damon Edwards of DevOps Cafe and Sascha Bates of The Ship Show. The panel addresses some common beliefs on DevOps, and whether these beliefs are true...or just MYTHS.
date: 2014-02-10T14:56:24.000Z
publishDate: 2014-02-10T14:56:24.000Z
episodeNumber: "6"
podcastFile: arrested-devops-podcast-episode006.mp3
podcastDuration: 01:06:01
episodeImage: episode/img/devops-mythbusters.png
episodeBanner: /episode/img/devops-mythbusters-banner.png
images:
  - /img/social/fb/devops-mythbusters.png
guests:
  - person: dedwards
    snapshot: dedwards
  - person: sbates
    snapshot: sbates
hosts:
  - thess
  - mstratton
sponsors: []
aliases:
  - /6
  - /devopsmythbusters
youtube: haufNRriE70
transcript: devops-mythbusters
explicit: no
---

## An Aspiration, Not a Finish Line

Damon Edwards, who runs DTO Solutions and SimplifyOps and co-hosts DevOps Cafe, and Sascha Bates, who works for Chef and co-hosts The Ship Show, take a list of beliefs Matty and Trevor compiled from clients and rule each one a myth or not. The first is that you're either DevOps or you're not. Sascha's answer is "I don't think anything is absolute, ever." Damon defines DevOps as looking at everything from a business idea to a customer outcome in production and removing the bottlenecks in between, which means you never finish, so it's "more of an aspiration" than a state.

On whether DevOps is only for startups and web companies, Damon says any business that runs on software can benefit, and web companies simply got there first because they have no legacy and "this is their factory floor." Sascha thinks it's "more likely more valuable in big companies," since that's where the silos are. When enterprises push back with "we can't do things exactly like Facebook does," Sascha's summary is "My special snowflake is too special." Matty says a client once pointed out he was the second person to compare them to Netflix.

Behind a lot of that is the way we've always done it. Sascha says the reason is often one that "isn't even valid anymore, and often was implemented by somebody who isn't even there anymore." Damon calls them hallway requirements. Matty tells clients that "nobody does things because they're dumb," and Trevor adds the follow-up: "Is that reason still valid?" Matty: "Doesn't mean we can't change it."

## Silos Grow With the Company

Does DevOps scale? Damon's answer is that it's the wrong question. In a five-person garage startup there are no silos "because everyone's on the same team," so there are no DevOps problems. The problems arrive as the company grows and the handoffs go bad, which makes DevOps "more and more essential as you scale." Unlike scaling Agile, he says, it isn't a methodology: "It's a mindset. It's a goal. It's a set of practices." Sascha offers floating experts and cross-functional generalists as ways to adapt it, and says there's "no magic sparkle dust" and no way to make people do it.

Damon adds that people are hard in every field. Manufacturing lived through these problems, and so did "organizing armies," and the industry shouldn't think it's made of special snowflakes.

## Agile Without Scrum

Can you do DevOps without being Agile? Sascha says you probably won't be able to help it, since DevOps, Agile and Kanban share a goal of fast feedback loops. Damon notes that a lot of people equate Agile with Scrum, and if that's the definition, then no, one doesn't depend on the other. If you mean fast feedback, small batches and the lean principles underneath, "you really can't escape getting there."

His evidence is HP's printer firmware division, which worked out a continuous-delivery-style process by thinking through its own quality and throughput problems, and only afterward read the books and found a match he calls "pretty much a one-to-one." Matty says the first DevOps Cafe episode he ever listened to, with Jez Humble, had him yelling "that won't work" at the car radio until Humble brought up the HP book: "oh, okay. Never mind."

Matty then has trouble stating his own answer. He's worked on a DevOps-style team that wasn't Agile, because the product didn't suit small feedback loops, and it still helped to erase the line between sysadmins and developers. He lands on a verdict of "No, it's not a myth. It is a myth," Trevor offers "It's plausible," and Sascha says the two are "correlation without causation in some ways, and they're apples and oranges in other ways." Matty's excuse is that "there's too many negatives in this thing."

## The DevOps Team and the Canary

Sascha's view of a team called DevOps is that it's usually the DevTools team, and "creating a siloed team to break down silos is really highly ironic." Damon's version starts from the release function, which is usually where things go wrong first and is the canary in the coal mine. When the canary falls over, "everybody says, well, we need a stronger canary." Then the release team gets renamed the DevOps team, and the silo has just changed its label. Sascha adds that release engineers don't like being rebranded, and "you're just stamping a label on them." Matty has also seen new teams built to go around ops, which makes things worse, and Damon says the current name for that is cloud operations.

Damon does think a team can work in two forms. One is a Toyota-style chief engineer, or value stream manager, who owns the flow of work end to end, which he says is more of an architecture job. The other is operations as a service, along the lines of a Netflix talk on metrics, where the monitoring group doesn't take tickets but builds services, APIs and libraries the rest of the company consumes. Put the DevOps title on it, though, and "that's the DevOps team's problem" is what you'll hear.

Sascha had a client who said "we have a DevOps team. We're not really sure what they do." Matty notes that in Chicago a DevOps engineer job listing is a sysadmin job, Damon says the title used to be a helpful hiring signal, and Trevor says he sees it used for developer tools like Git and CI. Sascha: "The words DevOps tools make me cry."

## One Gold Bar in a Pile of Straw

On "we can't do DevOps because we need separation of duties," Sascha reaches for a word considerably ruder than myth, and Trevor corrects her: "It's called a myth." Her argument is that better configuration management lets you isolate the parts that need separation, such as customer data, without locking everything else in Fort Knox "because you've got one gold bar in your giant pile of straw." Matty says a lot of these myths could be rebranded as excuses, compliance among them, and Trevor says it was hard not to use that word when writing the list.

Damon says people often can't say why they're doing it beyond an external force like PCI, SOX or HIPAA. His point is that the control is weak if Matty commits the code and Trevor deploys it as change one of 500 with no real validation. A continuous delivery pipeline that everyone adds tests and checks to works like an immune system, he argues, and those environments can be more secure and compliant than a system with one role that commits and another that deploys. He also says that for most of those requirements, separation of concerns isn't something anyone is actually checking for.

## Operations as a Service

Does DevOps mean developers do the ops work? Sascha says it depends on what the day-to-day work is. If it's tedious, it should be automated, developers should care for the health of their apps, and "the ops aren't babysitters." Damon's model is operations as a service. Operations has historically been ticket-driven and a bottleneck because developers vastly outnumber it, so turn deployment, environment management, restarts and diagnostics into self-service the rest of the organization can use, which frees operations to teach others and improve infrastructure. Matty's condensed version is that they don't do the work, they facilitate it.

Damon cites John Willis's name for the goal, the 80/20 flop: operations now spends 80 to 90 percent of its time "in the muck," and that should be flipped.

## Root Access, Children, and Visibility

On developers getting admin access in production, Sascha says that "if you treat developers like children, they're always going to be children," and asks why anyone is logging into production given today's tooling. Developers, she says, don't want to hand ops things that break, and given tools to monitor their apps they'll want to use them. Matty repeats a quote he attributes to Mark Burgess, that every time someone logs onto a system interactively, they compromise everybody's understanding of that system, and admits that when he planned to audit his team's interactive logins as part of their reviews, he was the worst offender. Sascha ties it to blameless culture: "if you make it a crime to make mistakes, people are not going to own up to mistakes."

Damon pushes back on both sides. Nobody needs root, but it's a little childish when developers demand it with "trust me." The real question is whether they have the control and visibility to do their jobs, and his formula is to centralize standards and decentralize control. Giving everyone root in a large organization is, he says, "a little bit naive."

## Windows Shops, and Tools That Enable But Don't Promote

Matty rewords the open source myth into a less absolute version: DevOps works better with open source tools, as opposed to not working at all in a Microsoft shop, and he notes that many of his consulting clients are Microsoft shops. Damon says the difference is small composable tools that are API-driven, against big integrated point-and-click stacks, so it's about ease of integration more than licensing. Matty agrees Linux is easier in practice: Test Kitchen's answer on Windows is that "it's not that we don't want to support Windows, we just don't know how to do it." Damon points to Jeffrey Snover's DevOps Cafe episode on Microsoft's GUI-centered history and the new PowerShell work, and Matty adds that System Center Configuration Manager is "a big database" and you can't version data.

Do tools promote cultural change? Sascha says they can enable it, but "promote is too strong a word," since without the cultural pieces a tool only exacerbates friction. Damon says people like talking about tools and think they're more self-aware about culture than they are, so they recreate their old broken world in the new tools. And "nobody ever gets fired for a successful tool implementation": the statement of work is complete, the tool works, and the person who installed Chef gets a promotion whether or not anything improved. Matty: "You got to add Chef to your resume."

## A Management Problem, and the Fish Market

For the last myth, that DevOps doesn't work, Sascha says it depends what you mean, and she's reached the point of not wanting to use the word at all: work on communication and collaboration and call it whatever gets it done. Matty says his company has to use the word because customers ask for it, but "we don't sell it as fairy dust."

Damon says DevOps is a management problem, and management has to align the organization around a goal. Tell developers to carry a pager with no context and the response is "Screw you. Who are you and what are you telling me all this stuff for?" Sascha adds that the message has to be relevant, and tells of a company she worked for where the Seattle fish market video came down from the top as a lesson in cooperation, and everyone below shrugged it off. "Don't try to peanut butter over with kumbaya."

Damon's Ford example is that the CFO could probably explain how a car is made, and asks how many technology companies have executives who could say how their software gets made. IT has played the high priest, he says, and business leaders have let it: "It's the Jedi droid trick."

## Myths!

**The intro**

- You’re either DevOps or you’re not

**The Company**

*Management Beliefs*

- DevOps only works for startups or web companies.
- DevOps doesn’t scale.
- You can’t do DevOps without being Agile

*Business Semantics*

- Shops practicing DevOps should have a DevOps team.
- We can’t do DevOps because we need separation of duties.

**The Team**

*Operations Assumptions*

- DevOps means “developers do operations work”
- A DevOps is a sysadmin that uses config mgmt.
- DevOps is about hiring sysadmins who code.

*Developer Expectations*

- DevOps means developers get admin access in production
- Developers cannot be trusted.

**The Tools**

- DevOps only works with Open Source tools and operating systems (i.e., I can’t do DevOps in a Microsoft shop)
- The tools promote the DevOps cultural change.

**The wrap up**

- DevOps doesn’t work.

## Reference Links

- [A Practical Approach to Large-Scale Agile Development: How HP Transformed LaserJet FutureSmart Firmware](http://www.amazon.com/gp/product/0321821726/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0321821726&linkCode=as2&tag=arrdev-20)
- [DevOps Cafe Episode 33](http://devopscafe.org/show/2012/9/26/devops-cafe-episode-33.html) - Jez Humble
- [Release Engineering Tools at Netflix](http://theshipshow.com/2013/10/to-be-continued-release-engineering-tools-at-netflix/) - The Ship Show
- [Keep Calm and PROD On](http://theshipshow.com/2013/08/keep-calm-and-prod-on/) - The Ship Show
- [DevOps Cafe Episode 36](http://devopscafe.org/show/2012/11/27/devops-cafe-episode-36.html) - Jeffrey Snover
- [There's No Such Thing As A DevOps Team](http://continuousdelivery.com/2012/10/theres-no-such-thing-as-a-devops-team/) - ContinuousDelivery.com

## Check-Outs

### Matt

- [gitdrunk.com](http://gitdrunk.com)
- [Downtown Chicago Azure Meetup - Feb 27, 2013](http://www.meetup.com/Downtown-Chicago-Azure-Meet-Up/events/160731772/)

### Trevor

- [Marvel Comics API](http://developer.marvel.com/)

### Sascha

- [DevOps meetup in Minneapolis](http://www.meetup.com/DevOps-Minneapolis/)
- Everyone should submit a talk for a conference!

### Damon

- [QCon Conference](http://qconlondon.com/) - DevOps track in London in March
- [Rundeck](http://rundeck.org/) 2.0 just released
