---
title: All Things Docker
description: Bridget chats with Justin Cormack and Donnie Berkholz of Docker.
date: 2021-03-13T20:54:10.000Z
publishDate: 2021-03-13T20:54:10.000Z
episodeNumber: "168"
podcastFile: arrested-devops-podcast-episode168.mp3
podcastDuration: 33:53
episodeImage: episode/img/all-things-docker.png
episodeBanner: episode/img/all-things-docker-banner.jpg
images:
  - img/social/fb/all-things-docker.png
guests:
  - person: jcormack
    snapshot: jcormack
  - person: dberkholz
    snapshot: dberkholz
hosts:
  - bkromhout
sponsors:
  - circleci
  - container-solutions
  - macstadium
aliases:
  - /168
  - /allthingsdocker
explicit: no
transcript: all-things-docker
---

Bridget talks with two people from Docker in early 2021: Justin Cormack, CTO, calling in from the UK, and Donnie Berkholz, VP Products, based in Minnesota. The conversation comes the day after Docker's second online Community Day, which drew 2,500 people, and covers the public roadmap, how product and technology decisions get made, working fully remote, and DockerCon. The cold open is Justin on the scope of the CNCF: "Sometimes it feels like" it covers everything on the planet.

## Listening to Customer Problems

Donnie joined Docker about five months earlier and has tried to focus the company on customer problems, since tech companies often build a solution and ship it, and then three-quarters of the time it flops. The pain points Donnie hears most are developer productivity and velocity, and finding things you can trust instead of a random repository with three stars or a Stack Overflow copy-paste. Bridget adds the question of whether to take a dependency on something that hasn't been updated since 2019.

## The Public Roadmap

Justin says Docker tried to change how it labels readiness. Previously enterprise products were marked experimental and you had to "figure out the magic runes" to turn a feature on, which discouraged trying things. The team is culling experimental flags in favor of notices that something is new, and offers early access to developers who want it. The public roadmap has stages, which Justin walks through. Anyone can add an idea as an issue, and product managers look at new items daily, with a weekly meeting that looks at new items and thumbs-up votes. Items move through investigating, writing the code, almost there (asking early users to try it), developer preview or experimental with a public way to try it, and shipped, which means some form of general availability, with feedback still welcome.

Donnie adds that "investigating" also asks whether a feature is valuable enough that people would subscribe for it, since Docker has a long history of giving lots away and needs a sustainable business model. As an example, the M1 support item became the most upvoted item on the roadmap of all time within days of Apple's announcement. Donnie says Docker isn't a huge company and has to be careful about big engineering investments without a customer signal, so they hadn't started earlier, since it was unclear when it would matter and what else they could be doing.

## CNCF and Open Source Decisions

Justin sits on the CNCF Technical Oversight Committee, and says cloud native is everything in modern software delivery. The community is large and open, people usually know what's coming, and there's less of a big-announcement culture and more collaboration. Justin says much of the CNCF is about the production end, but more developer-side projects are arriving, such as a Spotify project (whose name Justin forgot). Justin likes assessing projects, since it gives an excuse to ask users how a project is working for them.

Donnie says deciding what to open source comes down to what the company wants to accomplish, the maturity of that layer of the stack, and whether it's differentiating or becoming a utility or commodity. Open standards help align vendors around things that are becoming a commodity. Bridget notes that end users love any interoperability, anywhere they can just ship that container.

## Remote-First

Justin says Docker chose to become fully distributed and dropped offices, going from a San Francisco company to one about half European and half US by the end of 2019. The lease on the Cambridge office expired about six months earlier, and it seemed weird to renew it. Docker used to send every new hire to San Francisco for a week, which had become a relic, and the pandemic made the change happen faster. The main limits on hiring are tax, legal operation in different places, and time zone overlap, which Donnie says means deciding whether to look in geographies that overlap or find people willing to work different shifts. Donnie says the one hour of overlap between Germany and San Francisco means you have to optimize for autonomous or asynchronous work, since "force-feeding" synchronous models doesn't work. Donnie adds that online communities and platforms suited to online events reach people where they are.

## DockerCon

The DockerCon CFP was closing in a few days. Justin says last year's DockerCon was planned as online before the pandemic and drew about 80,000 people, and it showed how much more accessible conferences are without travel. DockerCon is about 80 percent people who identify strongly as developers, unlike KubeCon, where the strongest group works in infrastructure, and Justin wants stories from people who wouldn't normally be heard. The CFP asked about team collaboration, since helping teammates onboard and sharing images is part of the product, but Justin says to submit if it's interesting for developers.

Donnie says conferences let people swap stories, and that "nobody wakes up saying like, oh, I want to use this tool today." Donnie cites a stat, unverified, that 50 percent of developer time on cloud-native applications might go to configuring instead of writing new code, and Bridget wonders how much of that is usability and how much is security compliance. Donnie describes Docker's experimental Hub CLI tool, and says the interesting part is watching how people use it in pipelines, such as automating token rotation, making sure images have both M1 and x86 builds, or monitoring subscription seats, because people want a use case and not just a tool.

- [Docker Public Roadmap](https://github.com/docker/roadmap/projects/1)
- DockerCon CFP open until March 15th - [How to Write a Great Talk Proposal for DockerCon LIVE 2021](https://www.docker.com/blog/how-to-write-a-great-talk-proposal-for-dockercon-live-2021/)
- [Docker Career Openings](https://www.docker.com/career-openings)
- [Docker Hub Experimental CLI tool](https://www.docker.com/blog/docker-hub-experimental-cli-tool/)
