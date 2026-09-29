---
title: how to eff up devops
description: DevOps 'Thought Leaders' Pete Cheslock, Nathen Harvey, and Randi Harper help us understand all the things you can do wrong when 'doing the DevOps'.
date: 2014-07-07T17:27:03.000Z
publishDate: 2014-07-07T17:27:03.000Z
episodeNumber: "14"
podcastFile: arrested-devops-podcast-episode014.mp3
podcastDuration: 59:26
episodeImage: episode/img/how-to-eff-up-devops.png
episodeBanner: /episode/img/how-to-eff-up-devops-banner.png
images:
  - /img/social/fb/how-to-eff-up-devops.png
guests:
  - person: pcheslock
    snapshot: pcheslock
  - person: nharvey
    snapshot: nharvey
  - person: rharper
    snapshot: rharper
hosts:
  - mstratton
  - thess
sponsors:
  - pagerduty
  - 10thmagnitude
aliases:
  - /14
  - /howtoeffupdevops
youtube: 3Z-_aeby-3g
transcript: how-to-eff-up-devops
explicit: yes
---

## Three Definitions and a Retitled Sysadmin

Pete Cheslock, Nathen Harvey and Randi Harper each open with what DevOps means to them. Pete takes the historical view, the "cultural and professional movement," a little tools and a little culture. Nathen says it's everyone working toward a common goal, typically a delightful customer experience, across development, operations, business, marketing, sales and finance. Randi came back to engineering after four years away, found a title called DevOps, and concluded it was "sysadmins who actually know what the hell they're doing," the people who aren't afraid of strace and developer tools and who work with developers.

The first misconception, Nathen says, is taking a sysadmin role and stamping DevOps engineer on it. Pete has stopped fighting it, since it works as a qualifier for a senior operator who writes code, and Nathen has capitulated too: "fine, internet, you win." Randi likes the title, and says it's a bridge, because developers see it and don't just see an ops person they throw things over the wall to. Matty's version is that in Chicago there are no sysadmin jobs anymore, only DevOps engineer listings that say install patches on Windows servers and perform backups. Candidates with DevOps on their resumes, he says, answer his question about continuous delivery with "but I'm good at patching, and our group was called DevOps."

## They Want the DevOps, Not the Change

Pete says he meets companies that all say the same things about continuous delivery and business value, and some who ask him to "bring me the DevOps." When he lists what would have to change, they say "we don't actually want to change anything. We just want the DevOps." Nathen adds that hiring a DevOps expert and expecting to have DevOps now is "a really good way to fail," and Trevor compares it to bringing in an Agile coach to Agile you up. Pete: "We're going to Scrum like crazy."

Matty also has a preference for how to say it. People hear DevOps as an abbreviation of development operations, he says, when it's a portmanteau, dev plus ops, and that's where it slides into meaning release engineering. Pete says the enterprise teams being called DevOps look a lot like release engineering, "but you know what? That's okay."

## DevOps Smell

Matty borrows code smell and asks what DevOps smell would be. Nathen's first is developers saying "that's DevOps' problem." Matty's is a DevOps project about implementing tools, which brings back Nathen's line that the only DevOps tool is someone with the title Director of DevOps, to Pete's objection. Pete says you can sell DevOps but not buy it, and that a tool on a broken culture gives you "2 problems, essentially: a broken culture and a broken tool," while Nathen says that if implementing the tool is the end goal, "you've clearly missed the point."

Pete's smell is DevOps talk that involves only developers and operations, and leaves out product, QA, security, and even sales, which sells features that don't exist. He has seen initiatives succeed because executives gave real trust, and fail because they wanted the DevOps without trusting anyone to change things. Trevor's contribution is that "the usage of the term DevOps is inversely proportional to a company's understanding of DevOps," and Pete proposes calling it Trevor's Law.

## Culture, Tools, or Both

Randi sees it as culture: the same work she did before, with a culture that lets her tell developers about a memory leak instead of adding more memory to the server. Pete says start with culture, but by 2014, if you're not using config management, "you're probably doing something wrong." Nathen says he'd like to call bullshit: culture and tools are too intertwined to separate. His example is version control. Copying a file to .bak isn't version control, Subversion is a central authority, and with Git "you're trusting everyone on your team to have a copy of the repository." You can't claim to trust your team and also insist on a centralized system.

Randi points out there's a difference between having Chef or Puppet installed and using it. Matty says the consultants on the call mostly hear tools conversations, and that Jez Humble told a Chicago audience the bar in the industry is low. Matty adds that culture change "has to happen from the top. It can't come grassroots." Trevor's summary is that doing just culture or just tools is another way to screw it up. Pete agrees: you have to do both with purpose. At Dyn he picked Chef over CFEngine because operations and developers had each pushed a different one and weren't talking, and the right choice, he says, isn't Chef or Puppet but "the thing that delivers value to your customers." Nathen adds, "change for change's sake is stupid."

## Changing Minds Without Changing Culture

A listener question asks how to convince coworkers that it's Dev+Ops and not DevOps. Pete says you can't change culture, and that trying is "a fool's errand," but you can build something that shows value, as he did at Dyn with a Chef workflow integrated into a CI pipeline that CFEngine didn't have. Matty adds that you should show and invite, so others help make it better. Randi notices that the best DevOps people she knows are public speakers or podcasters, because this is a communication problem.

Nathen describes two approaches: put developers and operations near each other and have them eat lunch and get beers together, or lock a cross-functional team in a room with a project, since "sometimes the right way to break down silos is to build another silo." He adds not to make the bastard operator from hell the first member. Pete says he took passionate, curious engineers, trained them on something like configuration management, and embedded them in teams as "patient zero," so the excitement spread. Matty's condition is that these teams be temporary, "bridges," so they don't become the team everything gets pushed onto.

## One Way to Screw It Up

Asked for the one way to screw up DevOps, Randi says not to use one tool for everything. Specifically: don't use a Jenkins build job to execute scripts on servers or restart services. Pete's version: "Jenkins is not orchestration." Matty knows an organization that uses Jenkins as the job scheduler for its product's batch jobs, "because hey, Jenkins does that stuff." Randi: "Just because it can do it doesn't mean it should do it."

## Can a Tool Have Opinions?

Matty floats an idea from a night of drinks: whether a tool's own opinions can drive culture, the way an opinionated framework like Rails pushes you in a direction, or the way you train a bonsai tree. Pete first hears it as tool bias and talks about people looking down on others for their language or tool. Trevor takes to the actual idea: using Chef forced him and Matty to answer each other's questions and reach a shared understanding.

Nathen tells how his own team learned. He would change the code, test on a new machine, and then, nervous about running the client in production, make the same change by hand on every production machine. He calls it his fault, not the tool's, and says that once the team trusted the tool, they let the client enforce policy continuously, which changed how they worked. Pete says developers who distrust a new tool will say "Chef changed this file, and it broke everything," when it changed the file because they wrote code to do it. Nathen: every Java developer who moves to Rails writes Rails that looks like Java, and sysadmins write procedural Chef.

## Escaping the Echo Chamber

Matty is helping plan the first DevOps Days Chicago and asks how to reach the people who haven't gotten religion. Pete calls DevOps Days "a massive echo chamber" and is looking forward to his Agile 2014 talk for a different audience, and thinks enterprises are where the next big shift is. Nathen suggests going to new cities, bringing a developer along to every event since these gatherings lean toward operations, and reading books and listening to podcasts about lean manufacturing and change outside of technology.

- What are some common misconceptions about what DevOps is?
- What are some symptoms of "DevOps Smell"[1]?
- Development Operations vs Dev + Ops
- Is it really just about culture?
- Can the opinions of a tool help drive the culture? This is a theory Matt is marinating upon, and might be totally wrong.
- How can we avoid the "echo chamber" of DevOps discussion?

## Check-Outs

### Pete

- [Ansible](http://www.ansible.com/home)

### Nathen

Remap your CAPS LOCK key as Ctrl key. Also new Supermarket site for Chef - [supermarket.getchef.com](http://supermarket.getchef.com)

### Randi

Anything BUT Jenkins.

### Trevor

- [A little bit of Hodor](http://drazmazen.github.io/coding-shenanigans-and-a-little-bit-of-Hodor/#.U7mt-d_MoRQ.reddit) and the Google Now voice thing.

### Matt

- [Sunrise calendar](http://calendar.sunrise.am) for iOS and OS X.
