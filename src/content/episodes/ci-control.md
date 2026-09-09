---
title: CI/CD as Control System with Naga Sujitha Vummaneni and Sundeep Bobba
description: "Naga Sujitha Vummaneni and Sundeep Bobba join Matty to talk about their book, which reframes CI/CD pipelines as control systems: actuators, feedback signals, and constraints. They dig into what that model demands once AI agents start shipping code at machine speed, and why a bypassed control is a design signal, not a compliance failure."
date: 2026-09-08T11:38:00.000Z
publishDate: 2026-09-08T11:38:00.000Z
episodeNumber: "207"
podcastFile: arrested-devops-podcast-episode207.mp3
podcastDuration: "00:31:59"
podcastBytes: 15355786
episodeImage: episode-img/ci-control.png
episodeBanner: episode-img/ci-control-banner.png
images: []
guests:
  - person: nvummaneni
    snapshot: nvummaneni
  - person: sbobba
    snapshot: sbobba
hosts:
  - mstratton
sponsors:
  - attribute
aliases:
  - /207
  - /cicontrol
transcript: ci-control
explicit: "no"
---
## Control Theory Had a Name for This All Along

Naga Sujitha Vummaneni and Sundeep Bobba co-authored [*CI/CD as a Control System*](https://www.amazon.com/dp/B0GXHNV4Q2), which takes Jez Humble and Dave Farley's *Continuous Delivery*, now pushing 20 years old, and reframes it through control theory. As Sujitha puts it: "The pipelines are activators, observability is the feedback signal, policy is the constraint, and deployment strategy is how you regulate the risk." Once you see a CI/CD pipeline that way, a lot of what look like tooling problems turn out to be system-behavior problems, and most pipelines today are open loop: "They measure everything and on nothing." Sujitha traces the pattern back to a moment from [the Arrested DevOps episode with Hannah Foxwell and Robert Warner](/ai-sdlc/): enterprise clients insisting continuous delivery would never work at their company, until it was just how everyone shipped. The premise of the book is that this framing was always available, but AI agents moving at machine speed finally make it urgent.

## Bonded Automation and the Four Questions

Sundeep's answer to "should the agent handle this?" isn't a yes/no: it's a bounded operating envelope. Low-risk, reversible actions like restarting an unhealthy service or quarantining a known-bad artifact are fair game for automation. Changing security policy, touching production data, or anything with real customer blast radius pushes the threshold for human involvement way up. His framework is four questions: "How confident are we in the signal? What is the blast radius? Is the action reversible? And who owns the risk if the decision is wrong?" Sujitha adds the control-theory language underneath it: signal quality is itself a gate, because an automated rollback that fires on a noisy metric is worse than no automation at all, "you get flapping." Bounded blast radius, rate limits, and cooldowns exist so the system doesn't correct itself into a new outage.

## Writing "Always Run GitLeaks" in Your CLAUDE.md Doesn't Make It True

Matty pushes on the gap between guardrails you write down and guardrails that actually run. Telling an agent to always scan for secrets before committing is no different than the developer who says "you're right, I should have run that" after skipping a check themselves, "it's the same trust-but-verify thing we've been doing forever, except now it's exacerbated." The book's answer is to stop treating this as purely a tooling problem: platform controls enforce the non-negotiables, prompts tell the agent what good behavior looks like, and runtime feedback tells you whether the controls are actually producing the outcome you expected. Sundeep frames it as fundamentally organizational: "Who owns the control, who can change it, what evidence proves it ran, and what happens when it fails, and who is allowed to accept an exception."

## The Approve Button You Click 200 Times a Day

Sujitha's closing point reframes what a bypassed control actually means. "The bypass is a signal, not a violation. When engineers route around a control, the control was misdesigned. It might be in the wrong place, or too slow, or solving a problem they don't even have." She names the familiar shapes: the emergency-change process used for 40 percent of changes, the security scan everyone has a documented exception for, the staging environment nobody deploys to because it's never in a usable state, the approve button clicked 200 times a day without being read. Each one means leadership believes there's a control while the dashboard shows green and nobody actually knows what's happening behind it, control theory's version of losing observability of your own control layer.

## You Don't Need a Platform Team to Start

For smaller, scrappier teams, both guests argue the model still applies, maybe more cleanly. Sujitha notes that small teams often close feedback loops faster because the control boundary and the team boundary line up. Sundeep's advice: "Start with one service or one delivery path and make the loop visible. Know what signals tell us the system is healthy, what decisions we're making from those signals, and what actions we can safely automate." Observability is foundational to all of it, since without actionable feedback there's nothing to close the loop with. The through-line for organizations of any size: "It's whether you have a closed loop of feedback, decisions, constraints, and action, rather than a pile of automation."
