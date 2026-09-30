---
title: Fireside Chat with Bryan Cantrill
description: Bridget sits down for a classic fireside chat with Bryan Cantrill (Joyent), ranging from containers to social justice to lawn care.
date: 2016-09-14T01:55:48.000Z
publishDate: 2016-09-14T01:55:48.000Z
episodeNumber: "72"
podcastFile: arrested-devops-podcast-episode072.mp3
episodeImage: episode/img/fireside-chat.png
episodeBanner: /episode/img/fireside-chat-banner.png
images:
  - /img/social/fb/fireside-chat.png
guests:
  - person: bcantrill
    snapshot: bcantrill
hosts:
  - bkromhout
sponsors:
  - 10thmagnitude
  - victorops
aliases:
  - /72
  - /firesidechat
youtube: lybeocYXujU
explicit: yes
transcript: fireside-chat
---

Bridget sits down with Bryan Cantrill, CTO of Joyent and self-described agent provocateur, and lets the conversation wander from containers to open source economics to production empathy to computational literacy and, eventually, climate change and WarGames. They never settle on a title, and Bryan ends by apologizing for the "random tour" through disconnected things. The cold open sets the tone: "we're a couple of apathetic Xers," for whom a sense of community is something you make fun of on The Simpsons.

## The Floppy and the Skeuomorph

Bryan has just come from HashiConf, where the guest gave the closing keynote and, for the first time, used a physical prop: a 3.5-inch floppy disk to make a point about hardware virtualization. Bryan explains that the disk is a skeuomorph, like the save icon or the fake wood grain on a station wagon, and says "I do think that VMs are skeuomorph." Your VM has a floppy controller, and these legacy devices have no place in a modern container architecture. Worse, Bryan says, provisioning containers inside virtual machines on hardware wastes resources, "and this can't last forever."

## Containers on the Metal

Most containers today run inside VMs, a layer people don't see, and Bridget raises the objection that unprivileged containers may not be production-ready without another security layer around them. Bryan is up front that this is talking one's book: SmartOS and Triton have run containers securely on the metal for over a decade, with zones designed to be completely isolated. Bryan contrasts that design center with Linux, where "containers" are really namespaces and cgroups that cut across the system. The guest draws a parallel to ZFS and DTrace, designed to be production-ready on day zero, and says the difference between a facility at birth and later is the scope of features, not readiness.

Bridget concedes that Linux won, and Bryan refines it: what won is the Linux binary interface. Because that is settled, Joyent implemented a Linux system call table for SmartOS, so a Linux stack can run in a Triton zone and looks like a VM but is a container on the metal. Bryan notes that FreeBSD and Windows have done something similar, including Bash on Windows, a phrase Bryan never expected to hear in a sentence. The guest believes open source has won an unconditional victory, and everything in the container ecosystem, from Kubernetes to Docker Swarm to BOSH, is open. That is why Joyent implemented the Docker Remote API, to have Docker without the Docker engine, and why Bryan wants an API separate from its implementation, so people can compete on the engine.

## Forks, Agendas, and Open Thinking

On the rumored Docker fork, Bryan says people shouldn't talk about forking, they should do it or not, and suspects some who talk are goading others. The guest would rather see de novo implementations of a stable Docker Remote API than a fork of the engine. Bryan advises people not to get swept up by vendors with an agenda: the people ginning up a fork have a solution in search of a problem, not a problem to solve. Bridget raises Red Hat's downstream patches, and Bryan says "I am a much stronger believer in incompetence than malice," since there are 20,000 issues on those repositories. Bridget adds that taking a patch is like adopting a free puppy.

Bryan says Joyent open sourced its stack almost two years earlier and found it wasn't enough, because the design discussions were still in hallways and chat rooms: "we actually need to be open sourcing our thinking, not just our code." Their answer was requests for discussion, or RFDs, written in an RFC style, which anyone can search to see the Triton roadmap. Customers read them and react to specific numbers. Bryan thinks design discussion in GitHub issues is an anti-pattern, since an issue gets closed and the valuable discussion is buried.

## Foundations

Bridget says the Cloud Foundry Foundation is valuable because employees of competitors pair on the open source project. Bryan, who is involved with the Cloud Native Computing Foundation, says it is still finding its footing and it can't be the Kubernetes Foundation: "If we are the Kubernetes Foundation, then we have failed." Bryan wants the CNCF to have as public a mission as it can, contrasting a nonprofit with a public mission and an industry consortium, and says its constituents should be the people running and contributing to the infrastructure, not the vendors that paid for a seat.

## The GitHub Resume and Paying for Open Source

Bridget respects companies that pay employees to write open source, including Joyent. Bryan objects to the GitHub resume because contributions to a fork don't show up on your activity. SmartOS and Illumos Joyent are GitHub forks of Illumos, so Bryan's own history looks empty. Bridget says paying people means they can write open source all day, then go home and not write more when exhausted.

Bryan says we're deep into what Bryan called supply-side open source a decade earlier, where infrastructure comes from companies dedicated to it, and asks how you monetize it. The guest thinks the era of proprietary software will be completely over, using ZFS as an example of a substrate where duplicated effort is over. In Bryan's view, people won't pay for the software, but for running a cloud, a service or metal, and for support: they will pay "for the ability to pick up the phone in the middle of the night and call for an upgrade that has gone sideways." Bridget says Cloud Foundry customers pay for integrations they could build but don't have time to. Bryan adds that if you intend to be the one who picks up the phone, it pushes you to make the software as reliable as possible, and to invest in debuggability and observability.

## Production Empathy

Bridget mentions a blog post by a Joyent engineer on a storage disaster, and Bryan says the details matter. Bryan doesn't think every software engineer should carry a pager, since it's like trying to train a dolphin with a shock collar, but does think "everyone needs to develop production empathy." Software engineers underestimate the stress of a working system that stops working while everyone asks why you can't turn back time. Bryan says that during an outage the personality types separate, and operators keep a cool head, while the dev mindset loses its mind. That makes Bryan a developer at heart, one who immediately goes to the worst case. Bridget suggests DevOpsDays organizers are often ops people because running live events is operations, with no do-over, as the event technology work of Bridget's spouse shows, and Bryan says if things go right nobody notices, so lighting and sound crews rarely hear thanks.

Bridget connects this to Simon Wardley's pioneers, settlers and town planners, placing the host in settlers mode caring about day two. Bryan says people have a preferred mode but can learn the other's empathy. Bryan tells of being told someone complained that Bryan talks about production too much, a complaint that, in Bryan's view, denigrates the people responsible for keeping systems up, since everything ultimately has to boil down to production. Bridget: "Otherwise, we're just making toys."

## Computational Literacy and Who Gets Access

Bryan takes the 40-year view and says we're doing well, since so much software simply works, and that "computational thinking has to become literacy," a way to think analytically, not necessarily to code. The guest says there's a bifurcated economy, and the dividing line is how much you're participating in this revolution. Bridget pushes back that there are systemic barriers, citing computer science professors hassled by campus security because they're Black. Bryan agrees and adds that Bryan's inner-city magnet high school needed an IBM investment of millions for a computer lab, while online courses and the cloud now cost far less, though you still need quality instructors.

Bridget says DevOpsDays Minneapolis had 700 people, and with sponsor support they donated about 10% of the surplus to local initiatives, including a job training center run by the American Indian Council whose graduates move from fast-food jobs to data center jobs. They talk about how "the world does not need another dating app" and how Bryan's marriage began on Match.com. Bryan says climate change is going to be kind of exciting, as a grand unifying engineering challenge, and describes deep optimism given how close the Cold War came and how the best minds were briefly in government.

## History, WarGames, and Container Summit

Bryan is an unapologetic Xer, and tells how a young engineer at Joyent who hadn't seen WarGames got demerits from the company's online demerit system until the engineer watched it, and afterward said it was a really good movie. The guest adds that Back to the Future is in the canon for millennials and WarGames isn't. Bryan also finds people are interested in history, which we don't teach, and Bridget says it involves rivalries like the split between Cray and Control Data in Minneapolis. Bryan recommends a book on the CDC 6600, with its parallel execution units and rotating Gatling gun, which is in the show notes.

Container Summit began as a marketing event disguised as a conference, Bryan says, and they took it on the road to have conversations with local technologists in front of local technologists. In smaller cities, people turn out for events, unlike in the Bay Area, and Bridget says about 135 people came to the Minneapolis one. The last topic is Joyent's acquisition by Samsung and Bryan's trips to Suwon, where, Bryan says, a baseball game in Korea is amazing and defies description.

Bridget sits down for a classic fireside chat with Bryan Cantrill (Joyent), ranging from containers to social justice to lawn care.

* [Container Summit](http://containersummit.io/)
* [Design of a Computer: The Control Data 6600 by J. E. Thornton](http://ygdes.com/CDC/DesignOfAComputer_CDC6600.pdf)

[photo credit](https://www.flickr.com/photos/wasabicube/2270557648/)


## Community & Event Stuff
If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at arresteddevops.com/conf

### Upcoming conferences

For any [devopsdays](http://devopsdays.org), try the code ADO2016! It should get you 20% off.
Also now works on O'Reilly [Security](http://conferences.oreilly.com/security) and [Velocity](http://conferences.oreilly.com/velocity) conferences.

* [Devopsdays.org](https://devopsdays.org) has dates announced for Sydney - Dec 1-2

### Open CFPs

* A lot of devopsdays CFPs closing soon - see [devopsdays.org/speaking](https://devopsdays.org/speaking)
* [OSCON's CFP](http://conferences.oreilly.com/oscon/oscon-tx/public/cfp/502) closes Oct 25
