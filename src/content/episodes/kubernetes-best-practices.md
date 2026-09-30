---
title: Kubernetes Best Practices
description: "Bridget chats with the authors of Kubernetes Best Practices: Brendan Burns, Eddie Villalba, Dave Strebel, and Lachlan Evenson"
date: 2019-11-18T07:00:48.000Z
publishDate: 2019-11-18T07:00:49.000Z
episodeNumber: "140"
podcastFile: arrested-devops-podcast-episode140.mp3
podcastDuration: 40:00
episodeImage: episode/img/kubernetes-best-practices.png
episodeBanner: /episode/img/kubernetes-best-practices-banner.png
images:
  - /img/social/fb/kubernetes-best-practices.png
guests:
  - person: bburns
    snapshot: bburns
  - person: evillalba
    snapshot: evillalba
  - person: dstrebel
    snapshot: dstrebel
  - person: levenson
    snapshot: levenson
hosts:
  - bkromhout
sponsors:
  - sdt
aliases:
  - /140
  - /kubernetesbestpractices
explicit: no
transcript: kubernetes-best-practices
---

Bridget talks with all four authors of the forthcoming O'Reilly book Kubernetes Best Practices: Brendan Burns, Eddie Villalba, Dave Strebel and Lachlan Evenson. Brendan writes because "I like to teach," a legacy of once being a professor. Eddie has been at Microsoft for 10 years and wants to spread what the big organizations learn, good and bad, to startups that can't get that help. Dave helps customers succeed with Kubernetes daily and never aspired to write a book, but likes breaking down complex technology. Lachlan wanted to give back to the community, remembering Brendan standing in a hallway in late 2014 or early 2015 answering all of Lachlan's questions, and to write the book Lachlan wished existed in 2015. The cold open is Brendan's line: "It's a powerful tool, but it's also kind of a footgun."

## Short Essays, Not a Narrative

Brendan says the project has moved from something people heard about to something everyone wants to implement, but people struggle with specific tasks, and hands-on help doesn't scale. They've seen "lots of people sort of shoot themselves in their foot." Unlike general introductions to Kubernetes, the book is focused on specific topics, to dip into when working on machine learning or setting up a cluster for a bunch of developers, so it's "a series of short essays rather than a whole put-together book." The 258-page PDF Bridget has in front of them has no narrative flow, which is on purpose.

Lachlan says now is the right time because adoption has grown, the ecosystem has become more complex, and Kubernetes has a sprawling variety of APIs, so the book shows where to start on topics like policy, rolling upgrades, governance and security. Eddie says organizations are already down the path and don't want another step-by-step walkthrough, and the authors tried not to make it a snapshot of one version. Dave says users need to focus on the core concepts and often skip them to over-engineer. Lachlan likes the mix of philosophy, meaning why you'd want policy, and the tactical how.

## Chapter Favorites

Lachlan's favorite was Chapter 11, on policy. Lachlan notes "everybody loves hearing Chapter 11 for anything," and says enterprises moving workloads to Kubernetes ask how to make sure workloads conform to policy, whether regulated or just wanting to understand configuration. Bridget notes the chapter covers the open source project Gatekeeper, and Lachlan says it's a Kubernetes-native implementation of OPA, the Open Policy Agent.

Dave's was resource management, which "doesn't sound really exciting at all" but is something users struggle with and affects scaling. The book covers best practices around requests and limits and how workloads behave when capacity runs out. Lachlan says most of the outages Lachlan was paid to handle in the early days came from resource management, as clusters got to 80, 90, 100%, and would have liked to have had the chapter in 2015, to avoid a cluster going into cascading failure at 3:00 AM.

Eddie's was Chapter 9, covering networking, network security and service meshes, which was the most challenging to fit into a concise format. Eddie calls networking the foundation, where little things trip people up, like the move from kube-dns or SkyDNS to CoreDNS, and describes a customer where divisions put Kubernetes in without telling anyone, and then security asked why their controls were gone. Eddie says people want a service mesh as an "easy button" for observability, security and policy, and find it's "Thousands of little buttons that you have to press in the right combination." The chapter describes what all service meshes should do, what to prioritize, and the SMI spec, a common API for those things.

Brendan's favorite, after the first chapter on laying out a service, is the one on developer workflows. Brendan worries that operators love the technology, or it's great for continuous delivery, "but we've made the developers' lives miserable." The chapter covers partitioning a cluster with namespaces, onboarding a new developer, RBAC so people don't step on each other, cluster-level logging and monitoring that's just there, and testing and debugging, since "if it's not easy, people will do less of it, and then you ship buggier software."

## Will Organizations Do This?

Bridget asks whether people in the field actually follow these recommendations. Brendan says people want to, and "the recipes just aren't there, necessarily." Eddie describes a customer creating a new division to build patterns for developers and ops so onboarding is easy and everything is automated. Dave says there's a big cultural impact, since you leave control to Kubernetes that you used to hold tightly, much like adopting a DevOps culture. Lachlan says there's no single right answer, but a set of tools and techniques that have worked, which the book offers as blueprints, so you aren't "left scrounging."

## Best Advice

Lachlan's advice: this is a journey and not a destination, there will never be a point where the system is perfect, and people paralyzed by indecision should use best practices to make a decision and keep adjusting. Dave's is to walk before you run, and get good at the core capabilities, network security, resource management and policy before layering on tools like a service mesh installed with one Helm command. Eddie's is to keep an open mind, since practices from on-premises servers and VMs may no longer fit, and the bias of "that's not how we did things" is the biggest challenge in the field.

Brendan's is to understand why you're making every decision, including Kubernetes itself, and not adopt it because "Everybody needs a Kubernetes strategy" appeared in a magazine. Brendan says Kubernetes makes deploying easy without helping you understand the system, and that things hard to manage over time are easy to start, so people assume the ease will continue. Brendan's summary: Kubernetes "is alive," a living thing and not a static one, that "could turn on you at any moment." Bridget calls it the Admiral Ackbar principle: "it's a trap if you think that it's going to be easy." The episode closes with a joke about putting a paper copy in a time machine, or a DeLorean, so Biff can't steal it.

Bridget chats with the authors of [Kubernetes Best Practices](https://shop.oreilly.com/product/0636920273219.do): Brendan Burns, Eddie Villalba, Dave Strebel, and Lachlan Evenson. ([Kindle version](https://www.amazon.com/Kubernetes-Best-Practices-Blueprints-Applications-ebook-dp-B081J62KLW/dp/B081J62KLW/) available now!)

## Community & Events & Stuff

Dave:
- [All Things Open - Talk on Non-Code Contributions To OSS](https://allthingsopen.org/talk/2-for-1-non-code-contributors-guide-to-open-source-the-5-most-common-licenses-on-github/)
- [KubeCon NA - Lightning Talk on Non-Code Contributions to Kubernetes](https://kccncna19.sched.com/speaker/dastrebe?iframe=no)

Brendan:
- [K8s meetup in Heidelburg Germany](https://www.meetup.com/Rhein-Neckar-Kubernetes/events/264886582/)
- [Microsoft Ignite](https://www.microsoft.com/en-us/ignite)
- [KubeCon North America](https://kccncna19.sched.com/event/UagX/deep-dive-into-cloud-provider-azure-pengfei-ni-microsoft-brendan-burns-microsoft)

Eddie:
- [Medium Blog](https://medium.com/@evillgenius)
- [Kubernetes on Azure Best Practices Series](https://learn.microsoft.com/en-us/azure/aks/best-practices)
- [KubeCon NA and Contributors Summit in November](https://kubecon.io)
- [Austin Kubernetes Meetup](https://www.meetup.com/Kubernetes-Austin/)

Lachie:
- [OSS Unboxing on Youtube](https://www.youtube.com/LachlanEvenson)
- [At KubeCon and the Kubernetes contributor summit in San Diego in November](https://kubecon.io)

Bridget:
- [Twin Cities Startup week](https://sched.co/Vkbn), [devopsdays Philly](https://devopsdays.org/events/2019-philadelphia/program/bridget-kromhout/), [devopsdays Ghent](https://devopsdays.org/events/2019-ghent/program/bridget-kromhout/), [Velocity Berlin](https://conferences.oreilly.com/velocity/vl-eu), [KubeCon](https://kubecon.io)
- [Van Moof ebikes](https://www.vanmoof.com/en_us/electrified-s2-x2)! Joe and I just got these.

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)

### Upcoming conferences

### Open CFPs

- [lots of DevOpsDays](https://devopsdays.org/speaking)

### Discount codes
- ADO2019 or ADO2020 for discounts on lots of devopsdays
