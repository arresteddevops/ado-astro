---
title: Brigade with Kent Rancourt
description: Bridget chats with Kent Rancourt about Brigade.
date: 2021-09-16T22:17:28.000Z
publishDate: 2021-09-16T22:17:28.000Z
episodeNumber: "175"
podcastFile: arrested-devops-podcast-episode175.mp3
podcastDuration: 34:41
episodeImage: episode/img/brigade.png
episodeBanner: episode/img/brigade-banner.jpg
images:
  - img/social/fb/brigade.png
guests:
  - person: krancourt
    snapshot: krancourt
hosts:
  - bkromhout
sponsors:
  - rootly
  - bridgecrew
  - cloudsmith
aliases:
  - /175
youtube: pfMDwC6des8
explicit: no
transcript: brigade
---

Bridget talks with Kent Rancourt, a senior engineer at Microsoft based in Connecticut who is also a dad, martial arts instructor, comic book nerd and Lego maniac, about Brigade and its upcoming v2. Brigade's tagline is event-driven scripting for Kubernetes, and the episode is billed as "not just Kubernetes." The cold open is Kent: "We weren't going to just be talking about Kubernetes, and yet we've said Kubernetes so many times."

## Where Brigade Came From

Kent came from a startup that Microsoft acquired around 2017. That company held an annual offsite with a Shark Tank-style exercise, a hackathon where you only needed an idea and a low-fidelity proof of concept. Helm won the first year and Brigade won the second, and both came from comparing Kubernetes to an operating system: what features of a traditional OS don't exist yet in Kubernetes? Helm closed the gap of no package manager, and Brigade closed the gap of no scripting environment. Kent isn't aware of any alternate name for Brigade, though thinks Armada would have been more fitting given Kubernetes's nautical names.

## Event-Driven

Kent says the thing to emphasize is that Brigade is event-driven, unlike Kubernetes's declarative model of "do this and reconcile." Something happened, and now you handle that event. Kent compares it to AppleScript, where a gesture triggers a script. Kent calls it good for background work, "your minions," and says it's often mistaken for a CI/CD platform, which it isn't, though it does CI and CD well. The Brigade team uses it tied to GitHub, so opening a pull request triggers the build and tests and sends results back.

## Why a v2

Kent says v1 was a minimal viable product and lightweight, with consequences: there was no API, and every event Brigade responded to was a Kubernetes secret, created either by a user at the command line or by a gateway, which bridges external systems like GitHub to Brigade, by talking directly to Kubernetes. A user therefore needed credentials to the cluster, and a cluster operator wouldn't hand those over unless the user was a competent Kubernetes user, a high barrier to entry. The aim of v2 was to abstract Kubernetes away from the end user, so Brigade went from "event-driven scripting platform for Kubernetes" to "event-driven scripting parentheses for Kubernetes." Kubernetes is now an implementation detail. There are no plans to support other orchestrators, but the architecture makes it possible, and Kent doesn't want to assume Kubernetes will be around forever.

Before starting v2 the team put a proposal of roughly 20 pages before the community explaining what was not optimal in v1 and couldn't be fixed without breaking changes. Kent says v2 is a complete rewrite, and the project is light on process compared with Kubernetes's KEPs or Helm's HIPs.

## Community

Kent says a fairly vibrant community going into v2 seems to have stepped back and let the maintainers handle the shift, which "gives me the sads." The project is in beta, and Kent says it's safe now for people to come back. It's much easier to build integrations, with a rich API and language bindings for Go, JavaScript and TypeScript, and a Rust SDK in the works, and Kent has new swag set aside for anyone who helps kick the tires or contributes an integration. V2 work happens in the v2 branch on GitHub, and there's a Brigade channel on the Kubernetes Slack.

There's no exact release date, but Kent says v2 is definitely coming in Q4 of that year. Feature development is pretty much done, and the team is avoiding breaking changes, as Kubernetes does once something is beta. Brigade is a CNCF sandbox project that would like to reach incubation, contingent on v2 going GA and more community building. Kent says most maintainers work at Microsoft, a few others aren't currently active, and the project wants to diversify its maintainers, including by employer, and adds that contributions needn't be code.

## Where to Look

Kent says most repositories under the Brigade core GitHub organization have a .brigade folder with the project definitions and scripts used to build those projects with Brigade 2. The main repo is the plain Brigade one, and there are gateway repositories for GitHub, Bitbucket, Docker Hub, Azure Container Registry and CloudEvents, with Slack and Teams in progress. Most are simple, and Kent invites people to clone one and adapt it to another system. Kent asks people to star and watch the repositories.

Bridget chats with Kent Rancourt about Brigade, a tool for running scriptable, automated tasks (in Kubernetes).

- [Brigade website](https://brigade.sh)
- [Brigade GitHub org](https://github.com/brigadecore/)
- [Brigade blog](https://blog.brigade.sh/)
- [Brigade v2 docs](https://v2--brigade-docs.netlify.app/intro/quickstart/)
- [Brigade on Kubernetes slack](https://kubernetes.slack.com/archives/C87MF1RFD)

[Brigade art](https://github.com/cncf/artwork/blob/master/examples/sandbox.md#brigade-logos) by [Ronan Flynn-Curran](https://ronan.design/)
