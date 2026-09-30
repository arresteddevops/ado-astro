---
title: Digging Into Security with Kat Cosgrove
description: "Kat Cosgrove is back to talk about everyone’s favorite party topic: security. From container vulnerabilities to the chaos of patching, Matty and Kat dig into why “never not hot” feels like security’s permanent brand. Tune in for equal parts practical insight and DevOps-flavored sarcasm."
date: 2025-08-25T17:22:54.000Z
publishDate: 2025-08-25T17:22:54.000Z
episodeNumber: "204"
podcastFile: arrested-devops-podcast-episode204.mp3
podcastDuration: 29:00
podcastBytes: 13300000
episodeImage: episode/img/digging-into-security.png
episodeBanner: episode/img/digging-into-security-banner.png
images:
  - img/social/fb/digging-into-security.png
guests:
  - person: kcosgrove
    snapshot: kcosgrove2
hosts:
  - mstratton
sponsors:
  - flyio
aliases:
  - /204
  - /diggingintosecurity
explicit: yes
transcript: digging-into-security
---

Matty talks with returning guest Kat Cosgrove, now head of developer advocacy at Minimus, about why security stays in the news, how to live with an endless stream of CVEs, and which tools belong in every production environment. Kat's employer builds container images with very few vulnerabilities, which comes up in the tooling section.

## Worse Than Chain Emails

Kat's opening point: "Security is like a never not hot topic," and the stakes have risen as more of life and government runs on computers. The worms and Trojans of the 1990s look charming next to Meltdown, Spectre and Heartbleed, and a chain email that crashed your computer has been replaced by something that can take down much of the planet, as with the CrowdStrike outage, which Kat notes was a bug and not a vulnerability. Matty goes back to the Morris worm of the 1980s, when about 100 computers were on the internet and sysops hopped on conference calls because they were the only people affected. Today the whole thing is held together with "baling wire and good intentions."

## Three Dependencies Deep

Matty says that complexity makes it worse, since a vulnerable package may sit 17 layers below the thing you use, and brings up left-pad and the earlier Who Owns Your Availability episode. Kat uses the Equifax breach as the example: a wildly outdated version of Apache Struts, which anyone could imagine they'd never let happen, until it's three dependencies deep and nobody knows it's there. Kat has credit monitoring for life because of it. The breach is also how the industry got software bills of materials and a pile of security tooling.

Matty notes that an SBOM only helps after the fact, while something like Dependabot tells you about known vulnerabilities in what you already have, which is a bit more proactive. Both agree teams pull in far more dependencies than they need.

## Most CVEs Stay Put

Kat says companies spend an outrageous amount of time and money mitigating CVEs, sometimes with whole teams, and still only handle the very high and maybe high ones. If the fix costs more than the potential exploit is worth, it stays: "Most CVEs just get left chilling there." So anyone who thinks their software is secure is probably wrong, and nothing is immune. Kat cites a Kubernetes Ingress NGINX vulnerability scored 9.7 or 9.8, which affected 38 percent of cloud environments, and says it was not fun from a maintainer's perspective.

Matty asks about the dependency of a dependency whose maintainer left five years ago. Kat's answer is to fork it and fix it: "It's open source, baby. PRs welcome," and if the fork is public you risk becoming the new person in the XKCD comic. Kat still thinks open source is the best and most secure way to build software, since flaws are found and fixed faster, though they're also exploited faster, and a community of dedicated nerds can outrun proprietary teams.

## What Belongs in the Kit

Kat's list for anyone who should pause the episode and install something starts with observability and monitoring, such as OpenTelemetry or Prometheus, because "you cannot just be like raw-dogging production": you need to notice weird traffic from a weird location hitting a weird endpoint. Next is alerting smart enough that engineers aren't firehosed with nonsense, then dependency management, meaning you know your dependencies and theirs. Kat adds infrastructure as code, instead of clicking through the AWS console, since most DevOps tooling has a security angle, and an SBOM, which Kat admits everyone is tired of hearing about after roughly three years of KubeCon talks but which still matters.

Kat's employer makes very small container images, most with zero CVEs, rebuilt automatically when an update lands, which gives an application a clean starting point, though it can't fix questionable code a team adds. Along the way Kat and Matty decide that raw-dogging alone wouldn't earn the explicit tag, and then Matty swears and it does.

## Touch Grass

Kat says security and computers are a burnout factory and begs listeners to have a hobby that doesn't involve computers: "literally go outside and touch grass," especially anyone on the "mitigating CVEs treadmill," a much less fun cousin of the loot treadmill in games like Diablo. Matty recalls a friend who took up piano and kept it off social media for the same reason, and admits that all of Matty's own hobbies used to be reframings of work. Kat floats a miniature rage room with racks at conferences, like the therapy dogs and baby goats that have shown up at events, and both complain about status LEDs that can't be turned off on printers and routers. Kat's router lives in the bedroom, under a t-shirt.
