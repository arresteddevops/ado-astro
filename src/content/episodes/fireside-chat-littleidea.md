---
title: Fireside Chat with Andrew Clay Shafer
description: Bridget and Matt discuss the past and future of tech with Andrew Clay Shafer.
date: 2018-02-10T13:55:48.000Z
publishDate: 2018-02-10T13:55:48.000Z
episodeNumber: "103"
podcastFile: arrested-devops-podcast-episode103.mp3
episodeImage: episode/img/fireside-chat-littleidea.png
episodeBanner: /episode/img/fireside-chat-littleidea-banner.png
images:
  - /img/social/fb/fireside-chat-littleidea.png
guests:
  - person: ashafer
    snapshot: ashafer
hosts:
  - bkromhout
sponsors:
  - chef
  - datadog
aliases:
  - /103
  - /firesidechatlittleidea
youtube: 8Cvd8sae00Q
explicit: yes
transcript: fireside-chat-littleidea
---

Bridget and Matty sit down on February 7, 2018 with Andrew Clay Shafer, whose Twitter handle is littleidea, for the first time without an audience or other guests. Andrew has been on roughly 5% of the show's episodes, including the Kelsey Hightower platforms episode, three live devopsdays Minneapolis recordings and the GOTO Chicago episode with Bryan Cantrill. Andrew notes that Bridget once had expense reports approved by Andrew. The cold open is Andrew: "It will be obvious when it's too late."

## The Agile 2008 Story

Bridget asks for Andrew's version of the Agile 2008 gathering that led to devopsdays. Andrew calls that conference formative for reasons beyond Patrick Debois: it is where Andrew met two people who influenced Andrew, one of whom introduced Lean, while Andrew was working on Puppet and talking about agile infrastructure. There was a board of index cards for topics, and Andrew posted one about Puppet and agile infrastructure, then showed up late, because a conversation about moving from Scrum sprints toward flow, Kanban and Lean was too absorbing. Patrick had already written a paper on bringing agile practices to infrastructure and sysadmins, with small chunks and standups, ideas Andrew had been articulating from a development background. Andrew says Puppet let you bring tools and practices honed on software development to infrastructure problems.

## Arguing Over Words and Attached Identities

Andrew observes that people like to argue over the meanings of words, as in the new term GitOps, when "everything's been Git-centric" from a Puppet perspective for ten years. Andrew says there's no need to argue whether it's new. Andrew spent three years on a debate scholarship, where you have to disassociate your ego from arguments, since you're assigned positions arbitrarily. Andrew says people get defensive because "they're in love with their identity" and attach it to their tasks and even the definitions of words.

Matty recalls a recruiter's post asking why DevOps engineers are so hard to find, a joking tweet that upset someone, and a long LinkedIn post about it that reached about 80,000 people in four or five days. The argumentative response came from someone who built a consulting practice on DevOps engineers being a thing. Andrew says it's worse when it's livelihood, and Matty adds that ITIL takes years to implement, so telling the person who did it they're wrong is hard. Andrew adds, speaking as the attached ego, "it's also my artwork."

## Why Transformations Succeed

Andrew says the conversation about organizational learning has been sad, because it's too meta for most people, who want paint-by-the-numbers tools, and because "most organizations don't actually want to change." They get sold transformation in waves, most rooted in different metrics on top of Taylorism. Andrew has seen two archetypes of success and many failures, quoting the line that all happy families are alike: "the unhappy ones, the unsuccessful ones are all different." Success needs an impetus, either a visionary with social capital at the highest level, or an existential crisis for the business.

Andrew adds institutional theory and isomorphism, meaning organizations ending up with the same shape. Early adopters chase competitive advantage, and later adopters are motivated by legitimacy, because a trade magazine or Gartner said a buzzword is what legitimate organizations do. Andrew used to use the cargo cult metaphor, and now leans toward "they actually don't believe in the religion," and since they're not doing it for advantage they don't get one. Matty says the outcome such organizations want is to say they're doing DevOps or ITIL, not better uptime, and asks everyone, from CIO to the junior sysadmin changing backup tapes, how their company makes money. Andrew was always baffled by colleagues who focused on technology details and disregarded why the system existed, and says in an organization you either build or sell.

## Complexity Below the Value Line

Bridget asks what's new to pay attention to. Andrew says not everyone needs to twiddle cgroups, and that designing an organization is like designing a web service, with inputs, outputs and throughput, noting distributed systems papers don't presuppose the nodes are computers. Matty cites Cindy Sridharan's post that everyone is not ops, and says you can't know everything about Kubernetes, and someone should know cgroups.

Andrew describes the arc from Puppet, wrangling mismatched data center boxes, to the cloud-native world that eliminates complexity by collapsing variation: identical racks, standard operating systems, fewer runtimes. Andrew recalls a talk by Jeff Hodges at Twitter arguing "polyglot is bullshit," and says people excited that Cloud Foundry and Kubernetes can patch operating systems and collect logs forget that some teams did that with Puppet and Chef years ago, only each had to solve it alone. Bridget asks if the future will be more evenly distributed, and Andrew says no: "the consolidation below the value line is going to continue ever upward," and value is created above it.

## Foundations and Irrational Choices

Andrew is not always a fan of foundations, which can act as kingmakers and invite projects to chase legitimacy, as with OpenStack and possibly CNCF. There is a Cambrian explosion and then a contraction, so Andrew's advice is to experiment, fix the obvious and not go all in until it settles. Bridget notes large enterprises have pockets of everything, and Andrew says sometimes one group picks one because the other didn't.

Matty says a sales leader asked why companies have salespeople, and the answer was that humans are irrational, and recalls a blog post from Michael Hedgepeth saying NCR chose Chef because of its pre-sales experience, not steak dinners. Matty, now at PagerDuty, has spent time at Chef. Andrew says it's usually legitimacy, not the best solution, and people buy a story they can see themselves in. Matty says people think they're snowflakes, and that Sasha Bates has said every snowflake has six sides.

## Team of Teams

On a morning Twitter argument about tools, Andrew says the two sides talk past each other: tools aren't enough is not tools don't matter. Andrew recommends Team of Teams, about the Joint Task Force in Iraq, where each team had the qualities you want but there was a command of teams and no horizontal collaboration. Andrew says that parallels DevOps silos: you don't want to tear down the silos or functional specialties, you want to leverage each group's context, and "The mission is not to configure servers. The mission is not to develop software." Andrew says the book argues what must change is not how workers do work but "It's how we manage people," and that one of the dimensions of organizational learning is participation in dialogue regardless of rank.

## Consolidation, Gold Rushes and Witch Hunts

Bridget asks about Red Hat buying CoreOS and CloudBees buying CodeShip. Andrew expects more consolidation: "You're not gonna have 2 dozen Kubernetes startups that, like, survive," and thinks CoreOS's team and etcd fit Red Hat. On the CNCF chart, Andrew says it will be obvious what to adopt when it's too late, with patterns emerging and dominant ones legitimized. Bridget notes KubeCon proposals for projects with two contributors. Andrew describes gold rushes and witch hunts: people rushing for gold that may or may not be there, and tribes uniting against something. Andrew sees people saying DevOps is over because of containers and serverless, but "if you actually think about it as a systems thinking optimization problem, then DevOps will never die." The two laugh that getting expense reports approved is simple but not easy: "It's simple. It's not easy."

## What's Next

Andrew plans a book on a five-element model of DevOps, essentially CALMS, to make the meta ideas more actionable, and has joined a reverse book club that meets every two weeks.

Bridget and Matt discuss the past and future of tech with Andrew Clay Shafer.

## Previous episodes with Andrew Clay Shafer
- [Platforms](https://www.arresteddevops.com/platforms/) with Kelsey Hightower
- [Devopsdays MSP 2017](https://arresteddevops.com/devopsdays-minneapolis-2017) with Bryan Liles & Jess Frazelle
- [Devopsdays MSP 2016](https://arresteddevops.com/devopsdays-minneapolis-2016) with Nicole Forsgren, Charity Majors, and James Watters
- [Devopsdays MSP 2015](https://arresteddevops.com/eating-sushi-with-andrew-clay-shafer)
- [GOTO Chicago 2017](https://arresteddevops.com/yelling-at-cloud) with Bryan Cantrill


## Referenced in this episode:

- Cindy’s post about [Everyone is not ops](https://medium.com/@copyconstruct/the-death-of-ops-is-greatly-exaggerated-ff3bd4a67f24)
- [The full-time job of keeping up with Kubernetes](https://gravitational.com/blog/kubernetes-release-cycle/)
- [Team of Teams: New Rules of Engagement for a Complex World](https://www.amazon.com/dp/B00KWG9OF4/)

## Header image

[Guernica](https://en.wikipedia.org/wiki/Guernica_(Picasso)) by Picasso

## Community & Event Stuff

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)

### Upcoming conferences

### Open CFPs

- [lots of DevOpsDays](https://devopsdays.org/speaking)
- [GopherCon](https://www.gophercon.com/): [CFP](https://www.papercall.io/gophercon2018) closes March 15; Conference Aug 27-30.

### Discount codes
- ADO2018 for 20% off lots of devopsdays, 10% off ChefConf, 5% off GopherCon.
