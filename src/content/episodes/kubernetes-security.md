---
title: Kubernetes Security
description: Bridget chats with Ian Coldwater about Kubernetes security
date: 2019-11-27T07:00:48.000Z
publishDate: 2019-11-27T07:00:49.000Z
episodeNumber: "141"
podcastFile: arrested-devops-podcast-episode141.mp3
podcastDuration: 22:40
episodeImage: episode/img/kubernetes-security.png
episodeBanner: /episode/img/kubernetes-security-banner.png
images:
  - /img/social/fb/kubernetes-security.png
guests:
  - person: icoldwater
    snapshot: icoldwater
hosts:
  - bkromhout
sponsors:
  - sdt
aliases:
  - /141
  - /kubernetessecurity
youtube: Tbzy7FCWnGw
explicit: no
transcript: kubernetes-security
---

Bridget talks with Ian Coldwater, recorded live at a meetup, about their KubeCon North America keynote and Kubernetes security. The cold open is Ian's line that "Attackers actually generally are unconcerned with whether or not you have your compliance boxes checked."

## Possible, But Not by Default

Bridget asks if Kubernetes security is possible. Ian says yes, but Kubernetes is not secure by default, so if you assume it's secure out of the box you may be unpleasantly surprised. Asked for the over-under on new CVEs between finishing the keynote and giving it, Ian says they don't personally know of anything anybody is sitting on, so the number is completely unknown. For learning, Ian points to the engineering blogs from Aqua Security, StackRox and Twistlock, the Kubernetes security announce list, the Kubernetes documentation, past KubeCon talks, and people on Twitter. Ian acknowledges it's a pile of stuff, because Kubernetes has a lot of moving parts, but "you can do it."

## Before You Go to Production

Ian's top item is admission control, "the biggest thing that you can do to stop attackers from being able to compromise your cluster." It's a set of policies that dictate what privileges get run and who is allowed access, and pod security policies are part of it. The user experience could use work, with pod security policies particularly notorious, but it's worth learning. Ian's second item is being careful about what's exposed to the internet, and suggests looking at Shodan, which indexes every 24 hours, so the idea of being too small to be a target isn't true. If SSH ports are exposed, use SSH bastions.

## What Developers Can Do

For developers who don't run the cluster, Ian says one way in is supply chain attacks. Software has a supply chain, and Ian uses npm as the example, where a Node module has dependencies that have dependencies. Libraries and container registries are all potential vectors, so know what you're running and keep it up to date. Ian adds that people are a vector too, including yourself: developers know they're smart and may be more vulnerable to phishing than marketing or sales, since they're confident and may "pay less attention to those trainings by the numbers," and they often have more access, so they make exciting targets.

On pinning versus staying current, Ian says containers done correctly make patching much easier, since you can spin down a container and spin up an updated one. In Kubernetes, have a plan for upgrading, and especially for upgrading in place, since newer security features may not come into an existing cluster to avoid breaking changes.

## Defenders Think in Lists, Attackers Think in Graphs

Bridget calls back to the keynote line. Ian explains that people who aren't attackers think in lists: a list of compliance boxes, or sprint points, and "did we get them all?" They aren't necessarily looking at the layout of what's running and how things connect. Attackers want to get in, find out what's there, how it talks to other things and whether anything is vulnerable, to get "a lay of the land." If you don't know the connections between your resources but the attackers do, "that's a disadvantage for you." For building the graph, Ian recommends a VMware tool (the transcript garbles its name) that's useful both to administrators and to pen testers, since you can run it locally with the privileges you have. Ian has heard of cluster visualization resources in Visual Studio Code but hasn't tried them. Bridget notes the Kubernetes extension for VS Code is open source and plugs colleagues who work on it.

## Not the Team of No

Bridget asks why Ian is "suspiciously positive for a security person." Ian says security people are notorious for being the team of no, and that it doesn't help relationships, since people who don't like you won't talk to or listen to you, and doesn't help security either, because developers and operators have their ears to the ground. Ian has worked in DevOps and knows what sprints are like, thinks most people mean well, and says "being a negative jerk doesn't really seem like it helps with that, so I just don't do it."

## Getting Into Offensive Security

For people who want to become pen testers or red team members, Ian recommends capture the flag games, in which the flags are on servers you're sanctioned to compromise, and mentions overthewire.org as a beginner-friendly site. Ian has put on CTFs internally for developers and operators, and it's amazingly effective when people find out how fast it is, like "you can literally just hit that button?" Ian warns that some developers get bit by the bug and want to do it all the time.

Ian is @IanColdwater on Twitter, says Twitter is a good place to learn about security, and warns that their LinkedIn says it's only good for phishing. Ian's parting thought: "You don't have to be anybody other than who you are," diversity is strength, and it's important to step into other people's shoes, whether a security person stepping into a developer's or an operator stepping into an attacker's. "Lead with empathy, it's important."

Bridget chats with Ian Coldwater at the devops Minneapolis meetup about their KubeCon North America 2019 [keynote](https://sched.co/UdIL).


Video from KubeCon: [Hello From the Other Side: Dispatches From a Kubernetes Attacker](https://www.youtube.com/watch?v=3jGNjan6I3Y)


Art credit: Sarah Becan - [original tweet](https://twitter.com/SarahBecan/status/1176499002679992320), [threadless store](https://sarahbecan.threadless.com/designs/no-gods-no-masters/), [website](http://sarahbecan.com/)

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)


### Open CFPs

- [lots of DevOpsDays](https://devopsdays.org/speaking)

### Discount codes
- ADO2019 or ADO2020 for discounts on lots of devopsdays
