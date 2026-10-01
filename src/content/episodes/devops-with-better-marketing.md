---
title: DevOps With Better Marketing with Pete Cheslock
description: Let's take another look at the topic of Platform Engineering, but perhaps with a different perspective. Pete Cheslock turns his attention to Platform Engineering, and if it's really anything new, or just what DevOps has always meant?
date: 2023-06-29T16:53:04.000Z
publishDate: 2023-06-29T16:53:04.000Z
episodeNumber: "188"
podcastFile: arrested-devops-podcast-episode188.mp3
podcastDuration: 57:09
podcastBytes: 26200000
episodeImage: episode/img/devops-with-better-marketing.png
episodeBanner: episode/img/devops-with-better-marketing-banner.png
images:
  - img/social/fb/devops-with-better-marketing.png
guests:
  - person: pcheslock
    snapshot: pcheslock4
hosts:
  - mstratton
sponsors:
  - drata
  - sysdig
aliases:
  - /188
  - /devopswithbettermarketing
explicit: yes
transcript: devops-with-better-marketing
---

Matty calls this the first "rogue session" of Arrested DevOps: a second look at platform engineering, after the episode with Daniel Bryant, with returning guest Pete Cheslock, who skipped that episode and comes in "unadulterated." The first half is Pete's and Matty's take on whether platform engineering is anything new. The second half is about Pete's side project of recording people pronouncing tech words. The cold open is Pete: "If charisma was an open source app or a product, it would be called Riz."

## DevOps With Better Marketing

Pete's hottest take is "DevOps with better marketing." The immediate reaction was the unoriginal one: isn't that what you've been doing all along, building a platform for your team? Pete cites James Governor's tweet that "we've spent a decade rebuilding Heroku poorly." Matty traces the lineage back through PaaS, with Azure's original web and worker services model, Engine Yard and Heroku, all of which boil down to getting software running somewhere faster without worrying about the bits that run it. Matty also admits to owning and maintaining Pete Chess Bot, which lived only in Heroku, with the code never put on GitHub, until an unpaid Heroku bill got it shut down.

Matty recalls an agile transformation in 2010 at Apartments.com, where agile coaches said infrastructure was a service that gets consumed and so didn't need to be in the conversation, which is "why the DevOps movement had to happen." Matty pushed for sysadmins embedded in squads, but with too few of them, each ended up on three squads with no time for real work after the ceremonies. When something can't be dedicated to one feature team, Matty says, an abstraction layer is the answer, and that's the evolution into platform engineering in theory.

## A Numbers Problem, and Nobody Owns the Product

Pete has built this kind of thing three times in a decade: a knife command to spin up servers with Chef on EC2, provisioning bare metal with Chef at a DNS company, and a framework at ThreatStack where developers filled in the application's shape and committed code. The problem is a numbers problem, with about 100 developers and 3 systems people, and self-service is how to stop being the bottleneck. The missing piece at most companies, Pete says, is that nobody acts as product manager for the ops team, whose customers are the developers.

Matty says that if you offer a platform, it's a product and you have to treat it as one, referencing a talk called Everything's a Product. A platform team may think adoption is guaranteed because the CIO chose the tool, but that attitude is what produced shadow IT. Matty also says a lot of platform engineering conversation is "incredibly Kubernetes-focused" and treats the runtime as the platform, while data and observability get left out, and then the platform team ends up integrating with 15 different ways to do Kafka. Pete says picking Kubernetes because everyone does is the same as "no one gets fired buying IBM."

Pete ties it to what Pete calls "the DevOps hangover": 10 to 15 years of growth where nobody minded how much Datadog or AWS got consumed, and now someone asks about the Datadog bill and the cost of running Kubernetes, and half the team has been laid off. "I guess we should have just had product managers the whole time." Matty's cynical read is that a product owner on a platform team would be one of the first people laid off. Pete notes that product management is the least defined role Pete has seen, from mini CEO at some companies to owner of one feature at others.

## Rebranding and Silos

Matty's worry is "the wrong way but faster," the Simpsons line about the max power way, where platform engineering is the SRE team, which was the rebranded ops team, which was the sysadmin team. A coworker once said of 12 years at the same desk and five different companies that the job never changed. Matty adds that "silos are okay" as long as domain experts work together earlier, and describes arguing about shift left and security on Twitter. Pete jokes that if platform engineering pays 24 percent more than SRE, Pete will be a platform engineer. Matty says that's good for the individual, but asks whether a team still doing tickets and requests on Kubernetes instead of vSphere is really treating it like a platform.

Pete says the step still missing is requirements gathering, which is talking to the other people in the organization about what outcome they want before writing the first YAML: "It's always a people problem." Matty adds that Backstage is a tool for building the portal, not a platform, so you can't "rub some Backstage on it." Platforms are a socio-technical system, and buying one takes buy-in from the people who do the work and the executives who fund it, with the frozen middle in between. Matty says selling OpenShift at Red Hat was hard for that reason, at half a million to $2 million.

Pete's story is a DNS company where "platform V2" became a trigger word. Pete wrote a ten-page product requirements document, renamed the project Honey Badger, and talked to every team to distill the minimum: provision a server anywhere in the world with a default operating system and a Chef role. It worked only with cross-team buy-in and budget. Matty also plugs a DevOpsDays Chicago talk on organizational politics.

## How Do You Say

Pete's side project started with a long-standing idea to record friends pronouncing tech words in a game show format, and a Slack teasing about how Pete says a load balancer's name, for which Pete made up an origin story. Pete now works at AppMap, a 10-person company that let Pete record the series, with weekly posts across YouTube Shorts, TikTok, Twitter and LinkedIn. The first iteration is supercuts of about 20 words, about 30 seconds each, from 31 interviewees. Pete's favorites were SQL, epoch, fsck, which has about 20 alternative pronunciations on Wikipedia, and JWT, where the docs say it's pronounced "jot" and nobody Pete recorded said it, until some had implemented it.

Matty says that's bad marketing, since nobody would search for jot. Pete says some pronunciations exist to help a listener type the word, like /etc and /lib, and that "all pronunciations are valid," since the goal was never to make fun of people. Pete wants more non-native English speakers for a season two, and a form for words and volunteers is linked below.

Matty's advice on names is to ask everyone how they want their name pronounced, even names you think you know, which is what DevOps Party Games did, and offers "which one do you prefer" as a better framing than asking which is right. The episode closes on words that still trip people up: Pete's words like through and throw while reading aloud to a child, and Matty's arugula, which Matty replaces with rocket. Pete's daughter, after a show says a word from a book they read together, looks over and says, "wow, you weren't even close on that one."

- [Pete's Video Project](https://www.youtube.com/@appmap/shorts)
- [Pete's TikTok](https://tiktok.com/@petecheslock)
- [Want to join a future version of Pete's videos?](https://docs.google.com/forms/d/e/1FAIpQLSdCBnbkuZCGjsd2h5Ut058gApsULfXZClNUfa3JGXWb5Zozfw/viewform?usp=sf_link)
- [Platform Engineering With Daniel Bryant](https://www.arresteddevops.com/platform-engineering/) (ADO Episode)
