---
title: Shiny Objects with Jessie Frazelle and Andrew Clay Shafer
description: Bridget chats with Jessie Frazelle and Andrew Clay Shafer about what shiny objects have caught their attention recently.
date: 2019-03-03T19:05:47.000Z
publishDate: 2019-03-03T19:05:47.000Z
episodeNumber: "125"
podcastFile: arrested-devops-podcast-episode125.mp3
podcastDuration: 1:01:11
episodeImage: episode/img/shiny-objects.png
episodeBanner: episode/img/shiny-objects-banner.png
images:
  - img/social/fb/shiny-objects.png
guests:
  - person: jfrazelle
    snapshot: jfrazelle3
  - person: ashafer
    snapshot: ashafer
hosts:
  - bkromhout
sponsors:
  - chef
  - datadog
  - pagerduty
  - sdt
  - agiledevopswest
aliases:
  - /125
  - /shinyobjects
youtube: hSRmUIgwbxY
explicit: yes
transcript: shiny-objects
---

Bridget talks with Jessie Frazelle and Andrew Clay Shafer in what the show notes call the unofficial pilot of their new podcast, weird trick mafia. Andrew's pitch for it came from watching Jessie have adventures: "a weekly podcast where Jess could explain computers and I could explain feelings." Jessie is between jobs, bored, and spent the week job shadowing, so the conversation wanders from the Pentagon to an operating room to organization design, with Andrew applying CAP theorem to people. The cold open is Jessie on reaching a level where "you're just one amongst the dipshits."

## Job Shadowing

Jessie ran out of New York museums and went to Washington, where a friend at the US Digital Service gave about half a day's tour of the Pentagon, including an office called Protocol that reminded Jessie of Parks and Recreation. The next day Jessie shadowed a friend who is a surgical resident and watched a liver procedure, finding it less dramatic than Grey's Anatomy. The takeaways: the military is an intense authoritarian system, which the US Digital Service is trying to shake up with support from the Secretary of State, and a childhood wish to be a doctor gave way to being far more interested in computers. Jessie liked how respectful the residents, nurses and attending doctors were, and how knowledge moves between them by doing your time and getting promoted.

Andrew points to the book Team of Teams, by General McChrystal of the Joint Task Force, which has DevOps themes: empower the edge to make decisions, and avoid silos that deprive people of context. Jessie says the USDS practice of bureaucracy hacking is like cold-emailing another team across an organizational boundary.

## Organizations as Distributed Systems

Andrew says the CAP theorem papers say nothing about computers, only nodes passing messages, which applies to humans, except that humans will acknowledge writes that never happened. A designed organization must choose consistency or availability, and partitions get injected through acquisitions and personalities. Bridget wonders about speculative execution, with many similar initiatives running in a large organization. Jessie says weird organizational structures keep coming up, such as laptop firmware teams at big vendors that apparently don't talk to each other, and Andrew says "It's almost like Conway's Law is true."

## Pressure in Medicine and Tech

Andrew, whose wife is a doctor, calls residency a medieval system and an extended hazing ritual not optimized for learning or patient care, with 80-hour weeks. Jessie agrees tech stakes are lower since no life is on the line. Andrew notes that experienced doctors feel less pressure because they've run the procedure a hundred times, while tech pressure comes from anomalies nobody has practiced, for which there aren't good algorithms. Bridget adds that anything easy has been automated, leaving only mysterious corner cases.

## Ethics, Supply Chains and Carbon

Andrew raises the geopolitics of Huawei and chips, and Bridget the difficulty of sourcing parts locally. Andrew says the price of computers and clothing rests on a chain of human suffering that cost-externalizing hides, and doesn't have an answer. Bridget says every choice has an impact and suggests looking at the carbon footprint of computing, such as cloud providers moving toward carbon-neutral data centers and the CoEd Ethics conference in London, while Andrew says to skip Bitcoin. Bridget mentions Astrid Atkinson leaving Google for a clean energy startup.

## Designing an Organization

Asked to imagine being the CEO, Jessie says Jessie hates titles and career ladders, like the military's authoritarian rule, and cites a talk by Bryan Cantrill about everyone having the same title. Purpose and mission motivate people more than climbing a ladder. Jessie describes the n+1 shithead problem: the person one level up is a shithead, so why climb. Andrew and Bridget note incentive structures like OKRs get gamed, and Andrew says the industry's state of the art is Taylorism, which doesn't unlock the creative potential software needs.

Andrew describes the cube-square law: an ant, with an exoskeleton and no lungs, can lift 50 times its weight, while an elephant has the highest bone-to-mass ratio, and an ant scaled to elephant size would suffocate and crush its own organs. So "the majority of the DevOps presentations" from cat-pictures companies "are the equivalent of ants explaining how they can lift 50 times their body weight." You can't copy what someone did without the context of why, and an organization should evolve for its habitat: "if you have an undifferentiated mass in a human body, then that's a tumor," but an amoeba-sized organization looks like one, and that's fine. Andrew's goal is that "leaders should make more leaders, not leaders should have followers," and there's no magic formula, since scale breaks culture in phase shifts. Andrew recalls Brian Foote's talk on the Ball of Mud, asking what to call people who build such architectures: "Millionaires."

## Upcoming Talks

Andrew will speak at devopsdays Atlanta, starting with chess puzzles to argue that seeing the board, as Wardley maps emphasize, isn't enough without understanding its dynamics, with John Boyd in the mix. Jessie is speaking at QCon on Intel SGX, where new information from experts changed Jessie's mind, and at dotGo on eBPF in Linux and Go, which Jessie would like to see replace iptables, which is "just archaic," though eBPF is hard to debug. Jessie explains SGX, built first as DRM for Netflix, then used for running code in enclaves in a cloud you don't trust, which just shifts trust to the hardware provider, and Andrew says "All security starts with physical security."

<!-- show notes -->

* This is the unofficial pilot for their new podcast: [weird trick mafia](https://weirdtrickmafia.fm/)

* Jessie's job-shadowing blog posts: [Government. Medicine. Capitalism?](https://blog.jessfraz.com/post/government-medicine-capitalism/) (Wednesday, February 27, 2019) and [Trust and Integrity](https://blog.jessfraz.com/post/trust-and-integrity/) (Friday, March 1, 2019)

* Andrew mentions a book: [Team of Teams](https://www.mcchrystalgroup.com/insights/teamofteams/)

* Jessie wrote a blog post about [Intel SGX](https://blog.jessfraz.com/post/reflections-on-sgx/).

* Image credit: [oldpatterns](https://www.flickr.com/photos/oldpatterns/3564400938/)


## Upcoming talks

Jessie: [QCon London](https://qconlondon.com/london2019/speakers/jessie-frazelle), [dotGo Paris](https://www.dotgo.eu/#speakers)

Andrew: [devopsdays Atlanta](https://www.devopsdays.org/events/2019-atlanta/welcome/)

### Community

* [Velocity San Jose](https://conferences.oreilly.com/velocity/vl-ca) June 10-13 2019 - discount code "ADO2019" gives 20% off for Gold, Silver, and Bronze passes.

* For any [devopsdays](http://devopsdays.org), try the discount code ADO2019!
