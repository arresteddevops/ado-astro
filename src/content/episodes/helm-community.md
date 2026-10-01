---
title: Helm Community with Matt Farina, Karen Chu, and Matt Butcher
description: Bridget chats with Matt Farina, Karen Chu, and Matt Butcher about the Helm community.
date: 2020-04-30T06:09:15.000Z
publishDate: 2020-04-30T06:09:15.000Z
episodeNumber: "153"
podcastFile: arrested-devops-podcast-episode153.mp3
podcastDuration: 39:52
episodeImage: episode/img/helm-community.png
episodeBanner: episode/img/helm-community-banner.png
images:
  - img/social/fb/helm-community.png
guests:
  - person: mfarina
    snapshot: mfarina
  - person: kchu
    snapshot: kchu
  - person: mbutcher
    snapshot: mbutcher
hosts:
  - bkromhout
sponsors:
  - circleci
  - logzio
  - sdt
aliases:
  - /153
  - /helmcommunity
youtube: WQ7_oCpP7CU
explicit: yes
transcript: helm-community
---

Bridget talks about Helm and its community with three people who work on it: Matt Farina, who works on Kubernetes and cloud-native at Samsung SDS and has done open source for more than 15 years, Karen Chu, a community program manager on Microsoft Azure's Cloud Native Upstream team, and Matt Butcher, an engineer at Microsoft. Karen and Matt Butcher both joined Microsoft through an acquisition of the company the transcript spells "Daeus," and Bridget works on the same Microsoft team as Karen. The transcript identifies the two Matts as Butcher and Farina, and this summary does the same.

## Where Helm Came From

Matt Butcher's one-phrase description is that Helm is the package manager for Kubernetes, and a chart is a package Helm can install into a cluster. The idea came out of a hackathon project at the company with Karen and a couple of other engineers, from wanting the package-manager experience for people starting out on Kubernetes. It's now "I don't know what, 1.8 million downloads a month or something like that."

Karen didn't expect it to get this big, since the company was still scrappy, and recalls helping debut Helm at the first KubeCon with a turnkey booth and socks, not long after the hackathon. Matt Butcher says the booth was about 6 feet by 8 feet and KubeCon had a couple hundred people.

## The Charts Repository

Matt Farina joined about two and a half years earlier. Farina co-chairs SIG Apps, which oversaw Helm when it was a Kubernetes subproject, and started contributing to the charts repository, a community-curated collection of packages such as MySQL and MariaDB, accessible out of the box in Helm 2. Matt Butcher says they expected 12 to 30 charts at most, and then the pull requests piled up. Farina saw a painful manual process, learned from an amazing maintainer whose reviews everyone trusted, and automated it: linting charts and pull requests, then testing installs in live clusters. That became a standalone tool, Chart Testing, now available to people who self-host repositories.

Matt Butcher describes four phases: the Wild West, design patterns and a best-practices document written by Farina and maintainers from Bitnami, automation, and tooling general enough for anyone's chart repository. Farina adds that charts grew from simple replacements to logic and design patterns, like specifying a URL to expose an application and having everything around it created.

## From Scrappy to CNCF

Karen organized the first Helm Summit shortly after the acquisition and before Helm joined the CNCF, and calls it scrappy and modest. Afterward, with CNCF support, logistics like the schedule and CFP were offloaded, so they could keep the conference technical, not salesy or flashy. Farina calls the first Helm Summit one of the favorite conferences Farina has been to, with different track styles, roundtable time and an intimate setting, in contrast to CNCF conferences with well over 10,000 people. Karen says they deliberately didn't scale the second one to 1,000.

## The Issue Queue

Bridget asks how to connect with a community that wants many things. Matt Butcher says the early community was small and eager, so they could pair on Zoom or Slack with people having problems. Now it feels like "the Time to Make the Doughnuts commercial," and early issue interactions are almost robotic, asking people to fill out the template. Butcher says the biggest emotional challenge is treating each issue as filed by a person with needs, "often filing the issue out of frustration, because they don't file issues when they're happy with something."

Farina says the way to keep focus is to say what Helm does and doesn't do: if someone has another idea, suggest a Helm plugin, or wrapping Helm, and Helm will list related projects, since it's "not a junk drawer." Generic Kubernetes questions also land in the Helm queue. They assign someone each week to triage, and Farina's best answer is better documentation and pointing people to it. Bridget agrees and mentions having sent a couple of doc updates.

## CNCF Benefits and Virtual Connection

Karen says CNCF brings webinars, conference support, and project pavilions, such as a Helm-dedicated booth at the last KubeCon in San Diego, a neutral space for a project built by many companies. Matt Butcher says the pavilion and Helm Summits are the opposite of the issue queue, with time set aside to talk to people as people. Farina says some people just came by to say thank you, which you don't see in issue queues, and that Karen organized maintainers, more than 20 from more than 10 companies, to staff the pavilion.

Bridget proposes a drop-in "Helm happy hour," distinct from the maintainer call, to replicate serendipity. Karen says it would remind people why they work on this. Farina says virtual conferences make speakers isolated, while a happy hour would be two-way, since "a community is a lot of people, not some people who know lecturing others."

## Phippy and Friends

Bridget asks which Phippy and Friends character each identifies with. Karen, who Butcher says was the brainchild behind the visuals, picks Zee, who is full of questions. Matt Butcher picks the pods that carry things around until they die, and says Captain Kube came from the owl, a favorite animal of Butcher's daughter, and that Phippy was the answer to the daughter asking what Butcher does. Farina picks Phippy, for a secret PHP past and because giraffes are a favorite of one of Farina's daughters, and Butcher and Farina first worked together doing Drupal. Bridget picks Goldie, tied to the University of Minnesota's Goldie Gopher mascot and the Go community.

## Where to Go

Matt Butcher points to helm.sh and its accessibility push for documentation, where you can learn it and re-express it in other languages. Farina points to hub.helm.sh for charts, and Karen to the Helm Twitter account and the helm.sh blog.

- [Helm.sh](https://helm.sh)
- [Celebrating Helm's CNCF Graduation](https://helm.sh/blog/celebrating-helms-cncf-graduation/)
- [CNCF announces Helm graduation](https://www.cncf.io/announcement/2020/04/30/cloud-native-computing-foundation-announces-helm-graduation/)
- [An Introduction to Helm - Matt Farina & Josh Dolitsky](https://www.youtube.com/watch?v=Zzwq9FmZdsU)
- [Phippy and Friends](https://www.cncf.io/phippy/)
- [Keynote: Phippy Goes to the Zoo: A Kubernetes Story - Matt Butcher & Karen Chu](https://www.youtube.com/watch?v=O1pv70lPlNc) - KubeCon North America 2018
- [Seven Hard Truths About Open Source Community](https://ossna19.sched.com/event/PUUc/seven-hard-truths-about-open-source-community-karen-chu-matt-butcher-microsoft)
- [Helm chart testing](https://github.com/helm/chart-testing)
- [Helm hub](https://hub.helm.sh/)
- [Helm twitter](https://twitter.com/HelmPack)

Helm logo art credit: [@flynnduism](https://twitter.com/flynnduism)

Banner image: [@bridgetkromhout](https://twitter.com/bridgetkromhout)
