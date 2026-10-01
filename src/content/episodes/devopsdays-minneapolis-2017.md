---
title: devopsdays Minneapolis 2017 with Bryan Liles, Jessie Frazelle, and Andrew Clay Shafer
description: Bridget and Matt chat about enterprise transformation and open source with guests Bryan Liles, Jessie Frazelle, and Andrew Clay Shafer, in front of a live studio audience at devopsdays Minneapolis 2017.
date: 2017-07-29T12:55:48.000Z
publishDate: 2017-07-29T12:55:48.000Z
episodeNumber: "91"
podcastFile: arrested-devops-podcast-episode091.mp3
episodeImage: episode/img/devopsdays-minneapolis-2017.png
episodeBanner: /episode/img/devopsdays-minneapolis-2017-banner.png
images:
  - /img/social/fb/devopsdays-minneapolis-2017.png
guests:
  - person: bliles
    snapshot: bliles
  - person: jfrazelle
    snapshot: jfrazelle2
  - person: ashafer
    snapshot: ashafer
hosts:
  - mstratton
  - bkromhout
sponsors:
  - thoughtworks
  - victorops
  - 10thmagnitude
aliases:
  - /91
  - /devopsdaysminneapolis2017
youtube: nlOIxfLBok4
explicit: yes
transcript: devopsdays-minneapolis-2017
---

Bridget and Matty record live at devopsdays Minneapolis 2017, putting two keynote speakers in one conversation. Bryan Liles of Capital One, who opened the conference, took what Bryan calls a total non-tech approach: people matter more than anything, plus experiences of DevOps in the enterprise and how it could be better. Jessie Frazelle of Google, who closed, talked about security in a containerized world, making security on by default so that 99% of users benefit. Bridget calls the pairing "fanfic of the conference talks." Midway through, Andrew Clay Shafer wanders in from a game of werewolf in another room and describes Andrew as "A villager, not a werewolf." The cold open is Bryan explaining the vein of a banana.

## Incentives With Nothing but a Smile

Bridget asks how to incentivize people in tech. Bryan says "the only incentive that I have is a smile," and describes spheres of influence: tensions occur where bubbles touch, so Bryan tries to make a bubble more permeable and bigger. Jessie says incentives are hard in open source because you can't pay people, so you use their interests, and don't push them into work they don't want to do, since it's free labor. Matty notes that Jessie's slides paired each deep technical point with a person problem, and that making security hard is itself an incentive, since people turn it off. Bryan adds that incentives are harder at big companies because "you can really blend in" and do the bare minimum for years.

## Let Users Fail Well

Bryan took a note from Jessie's talk: "We should always allow our users to fail well." People will do the worst thing possible, so the default should leave no room for it: "You can't add privileges to Docker. You get what you get and you can only take away." Bridget says defaults apply to organizations too, and asks what a team does if no one takes any action. Bryan says people do the easiest thing, like turning off SELinux or booting cloud instances without thinking about security groups, and wants all that to be on by default, like a banana you have to peel.

Matty tells of a sysadmin who wanted a release manager reporting to the CTO with hiring and firing power over developers so they'd follow a new release process. Matty's answer was to "make the right way the easy way," as in the book Switch, whose factory machine was redesigned to need both hands on switches away from the blade. The happy path should be a glide path, where "the default should be the happy path," and doing it wrong means fighting the current.

## Saying No as a Maintainer

Bridget points to a GitHub thread in Jessie's slides where users wanted a use case that would harm the general one. Jessie says the maintainer takes the heat for saying no, and the aim is to leave the mass of users unaffected, while "someone's always going to be pissed off at the end of the day." Bryan recalls one key moment in that thread, when someone came 100 posts down and admitted reading none of it. Jessie remembers the reply, "maybe if you find the time to read the rest of the issue, you will know what is happening right now," and says friends in Slack absorb the heat not sent back on GitHub. Matty calls it a troll flame radiator.

Bridget asks Bryan how to handle people fighting for their local optimizations. Bryan says a job isn't a place where you get your way all the time, and "at the end of the day, it's org first," but the approach is to set expectations early and offer tradeoffs, inside what Bryan calls a "circle of respect." Jessie says in open source there is mutual respect, and multiple maintainers will take the wheel when someone gets frustrated.

## Vendors, Customers and the Scale of Jerkiness

Matty, who works for a vendor, explains that Matty and Bridget are advocates inside their companies, and a vendor doesn't have infinite resources. When a large customer demands a feature, a company may redo everything, run a 90-hour week, and compromise 10 to 20 other customers, without anyone asking five whys. Bryan's rule is "It's don't be a jerk," and every decision asks whether it's being a jerk, since there's a scale of jerkiness. Bryan wouldn't demand a feature now, but would point out that a vendor hinted at three months, and that was four months ago. Matty says roadmaps are not promises of dates.

Bridget wonders whether unpaid users are more demanding. Jessie says "Everybody wants their thing, their Turing-complete thing that will make their life so easy," and that some users eventually say thanks after a maintainer adds the feature out of spite. Jessie notices when an issue comes from someone at a company using the tool, and those people are mostly willing to contribute the fix. Bridget notes Allstate contributed authentication and authorization work to open source Cloud Foundry, which Pivotal sells in a commercial distribution.

## Intersourcing and Pressure From Above

Bryan describes intersourcing, open source to a company and no one else, and says it exists for good reasons in a specialized vertical like a bank. Inside Capital One, Bryan uses GitHub and gets pull requests all the time, and some are closed because they ignore the roadmap. Bryan says when people push hard internally it's because someone else is prodding them with a fork, and "we're all archaeologists." Matty calls it closed-door open source, and says open source has already solved collaborative coding, so vendors should stop trying to invent it. Matty adds that asking why uncovers the driver three levels up, and Bryan would call the person and say both of you are trying to get things done.

Matty asks about incentives for smaller maintainers. Jessie says "giving people responsibility actually goes a long way," meaning commit rights or code review, and it becomes gamification of reaching maintainer, though some people just want a thank you.

## Open Source in the Enterprise

Andrew says open source isn't always shiny, happy people. You can create a lot of value and capture little, and people assume they're entitled to enterprise-level support for weekend efforts. Bridget asks Bryan the right way for an enterprise to consume and contribute. Bryan says it's complicated: licenses and patents, for example, and without patent indemnity, using someone's open source could lead to being sued for IP, so "there's levels to this." Jessie says Jessie stays far from Google's secret sauce to avoid messing up.

Andrew says some people want to give money to projects and there's no good way to, and that adoption sometimes stalls for lack of governance or indemnification. Others go YOLO, and Andrew says "I would be shocked if most enterprises realize what code's actually in production." Matty knows a CTO who requires code review of every open source project, and someone submits 10,000 lines of code that goes straight to prod. Bryan has been at Capital One since the previous October, after doing open source full time, including contributing to Terraform and writing Go for DigitalOcean. Bryan says the bank tries to know everything that goes into production, given the stakes. Bridget adds that during a startup acquisition Bridget had to find every license and rip out one library whose terms would have given the acquirer's IP away.

## Closing: Tech and People Together

Asked how to get people to do the tech work and the people work, Bryan says to be the example, with empathy. Jessie says being kind makes people kind back. Matty, who coaches customers and isn't a line manager, says to be genuine, because fake coaches get smelled out. Andrew reinforces that, and says the two can't be solved separately: "there's not really a tech and a people thing. That it's one system."

Bridget and Matt chat about enterprise transformation and open source with guests Bryan Liles, Jessie Frazelle, and Andrew Clay Shafer, in front of a live studio audience at devopsdays Minneapolis 2017.

* [devopsdays Minneapolis 2017](http://www.devopsdays.org/events/2017-minneapolis/welcome/)

* [Sys Admins, DevOps, SRE. Oh My!](https://www.devopsdays.org/events/2017-minneapolis/program/bryan-liles/) - Bryan Liles' opening keynote

* [Security In A Containerized World ](https://www.devopsdays.org/events/2017-minneapolis/program/jessie-frazelle/) - Jessie Frazelle's closing keynote


## Community & Event Stuff

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)

### Upcoming conferences

### Open CFPs

* [lots of DevOpsDays](https://devopsdays.org/speaking)

Use code "ADO2017" for a discount on many devopsdays.
