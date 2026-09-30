---
title: Platform Engineering with Daniel Bryant
description: Is DevOps dead? Did Platform Engineering kill it off? Matty chats with Daniel Bryant (Ambassador Labs) about Platform Engineering.
date: 2023-05-18T11:32:19.000Z
publishDate: 2023-05-18T11:32:19.000Z
episodeNumber: "185"
podcastFile: arrested-devops-podcast-episode185.mp3
podcastDuration: 49:25
podcastBytes: 22600000
episodeImage: episode/img/platform-engineering.png
episodeBanner: episode/img/platform-engineering-banner.png
images:
  - img/social/fb/platform-engineering.png
guests:
  - person: dbryant
    snapshot: dbryant
hosts:
  - mstratton
sponsors:
  - drata
  - sysdig
aliases:
  - /185
  - /platformengineering
explicit: no
transcript: platform-engineering
---

Matty talks with Daniel Bryant, who runs the DevRel team at Ambassador Labs, about platform engineering: what it means, whether it killed DevOps, and how to approach building a platform. Daniel started as a Java engineer, did software architecture and then operations, and built platforms on Mesos and Kubernetes. Matty refers back to an episode recorded in January 2016 with Kelsey Hightower and Andrew Clay Shafer that talked about platforms before the buzzword existed. The cold open is Matty's opening to a topic that might be on the tips of listeners' tongues.

## What Platform Engineering Is

Daniel's formal definition is the discipline of building toolchains, workflows and platforms to support the team going from idea to observable business value in production. Continuous delivery doesn't end when the app reaches production, since feedback from a business or operational point of view has to come back. Matty says that means Kubernetes alone isn't a platform, and cites James Governor's line that everyone is trying to build their own Heroku.

## Is DevOps Dead?

Matty asks about "DevOps is dead" marketing at KubeCon. Daniel, with 20 years in Java where "Java is dead" recurs, says a shock headline draws attention, and that engineers want to bury the previous generation to look like they're innovating, while history rhymes. Matty says the question is what you mean by DevOps: if a DevOps team is an automation team that builds infrastructure, platform engineering replaces that, but the principles have been the same throughout. Matty adds that DevOps takes research seriously, and the research behind some of that marketing was talking to three companies.

## Platforms Versus Portals

Daniel says some people say IDP for internal developer platform and others for internal developer portal, and the difference matters: Backstage is a great jumping-off point, but Daniel sees it as the UI, CLI, SDK and API on top of a platform. So Daniel asks whether people mean a platform soup to nuts or just a service catalog. Matty likes the idea of a service catalog that catches the 80 percent case and lets you do other things at a cost, and raises Charity Majors's maxim that the best tool is the one you don't need and the second best is a SaaS, asking whether there's any SaaS for this, and whether Heroku was the closest.

Daniel says Heroku and Cloud Foundry were built for web monoliths, but now the 80 percent includes machine learning apps, front ends and systems of record. Spotify talks about golden paths, such as one for machine learning apps, one for microservices and one for front ends, so there's no longer one true way and a one-size-fits-all platform hits at most half the apps. Matty says that makes it a big ask to build an internal SaaS, treated as a product.

## Thinnest Viable Platform

Daniel borrows a phrase from Team Topologies, the thinnest viable platform. Large organizations like Intuit, which has a global team supporting its platform, can justify it, but for a startup of three people without product-market fit, "please don't build a platform," and something like Cloud Run or Knative with GitHub Actions is enough. Matty says the tech is the easy part, the hard part is how people communicate, and cites a line that source control is a communication tool for developers. Matty also cites Adam Jacob's point that tools influence culture and culture influences tools, a variant of Conway's Law. Matty says large platforms like OpenShift or Tanzu are hard to start small with and get decided at the CIO level, and Daniel says the cognitive load is high, while bottom-up requirements plus mid-management buy-in and then exec support works better than the old golf-course selling.

Matty says to begin with the end in mind, without solving everything, but avoiding decisions that make it impossible later. Daniel says this is the role of a platform product owner, who starts small and thinks big.

## Who Builds It and Where It Sits on the Curve

Daniel says platform teams are often drawn from infrastructure or developer experience and enablement teams, and often a pain triggers them, such as an exec discovering 10 versions of a platform and nobody who knows how to maintain version 9. Matty says this is the early adopter part of crossing the chasm, and that typical enterprises haven't arrived, recalling arguing with PagerDuty's founder that enterprises still have production support teams and calling it survivor bias. Matty worries the late majority skips the pre-work and just renames teams: tech ops became cloud ops, then DevOps, then SRE, then platform, with the same remit, and says "get your bag" to anyone getting a better title.

## Backstage

Daniel describes Backstage as a jumping-off point for an internal developer portal, with a service catalog, automation hooks, search, who's on call and ownership, and TechDocs for living documentation. Spotify sells extensions, and Roadie offers Backstage as a service since it's hard to install, and many people use it as a facade or for inspiration, for templates that spin up a new service with observability and security baked in and links to dashboards.

## Do and Don't

Daniel's three keys are treating the platform as a product, since you can't have good developer experience without good user experience, focusing on workflows and tool interoperability, and making it composable. The thing not to do is buy a platform. Matty adds "you can't buy DevOps, but I can sell it to you." Daniel says late adopters worry about being left behind and throw money at it, while it's better to read the many blog posts from companies that have built platforms and spend time understanding the problem space first.

- [ADO Episode - Platforms with Kelsey Hightower and Andrew Clay Shafer](https://www.arresteddevops.com/platforms/)
- [Daniel’s Kubecon talk](https://www.youtube.com/watch?v=btUYeOa7JPI)
- [Daniel’s blog/tweet thread the kicked off his interest in Platform Eng](https://blog.getambassador.io/is-platform-engineering-the-new-devops-or-sre-472ed97a1885)
- [Spotify golden paths](https://engineering.atspotify.com/2020/08/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem/)
- [Crossing the Chasm - Technology Adoption Lifecycle](https://www.business-to-you.com/crossing-the-chasm-technology-adoption-life-cycle/)
- [Backstage project](https://backstage.io/)
- [Backstage as a service](https://roadie.io/)
