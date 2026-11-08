---
title: All Things Observability and OpenTelemetry with Adriana Villela
description: "Adriana Villela, an OpenTelemetry community manager, and Matty talk about why the trace is the star of observability and why you should instrument the flow instead of every microservice. They also get into what OTel Weaver does for semantic conventions and who on a team should own any of this."
date: 2026-12-09T06:00:00.000Z
publishDate: 2026-12-09T06:00:00.000Z
episodeNumber: "213"
podcastFile: arrested-devops-podcast-episode213.mp3
podcastDuration: "00:30:07"
podcastBytes: 14458168
episodeImage: episode-img/all-things-observability.jpg
episodeBanner: episode-img/all-things-observability-banner.jpg
images: []
guests:
  - person: avillela
    snapshot: avillela
hosts:
  - mstratton
sponsors: []
aliases:
  - /213
  - /allthingsobservability
youtube: B5HijHiuKrU
transcript: all-things-observability
explicit: "yes"
---
## From Grepping Java Logs to Writing Blog Posts for a Living

Adriana spent 16 years as a Java developer, which is where the wish for something sturdier than log lines came from: "Are you here? Are you here? Is this executing?" Observability showed up by accident. A Charity Majors tweet got passed to the friend Adriana was building a startup with, and both of them started following her. A year later Adriana was at Tucows, managing two teams at once, a HashiCorp platform team and an observability practices team, while knowing nothing about the Hashi stack beyond Terraform.

The fix was to learn in public. Adriana blogged on Medium about Nomad, translating it from Kubernetes, and joined the Honeycomb Pollinators Slack without being a Honeycomb customer, just to ask lots of questions. Since the company was already paying a SaaS vendor, Adriana turned the team from running observability infrastructure into an observability practices team, then pushed developers toward OpenTelemetry in 2021, before it was GA. Liz Fong-Jones of Honeycomb and Ted Young of Lightstep came in for a Q&A with the Tucows developers. Adriana had prepared seed questions so there would be no dead air, and nobody needed them. Under ten months in, Austin Parker, then at Lightstep, saw one of the blog posts and asked how Adriana would like to do this for a living. The reaction: "That's a job? What, I can write blog posts as a job? Sign me up."

## Questions You Didn't Know You Wanted to Ask

Adriana's favorite definition comes from Hazel Weakly: the ability to ask meaningful questions, get useful answers, and act effectively on what you learned. Matty's version is that it lets you ask questions you didn't know you wanted to ask. Monitoring makes you know the question in advance, and mid-incident the first step too often turns out to be "invent a time machine and go back and start doing that."

What separates the two, Adriana says, is the distributed trace. Logs and metrics matter, but the trace is the star: "it's the outline, it's the chapters." Logs are the supporting actors that say what happened at a point in time, and metrics are the indicators of "Oh shit, is this gonna go off the rails?"

## Instrument the Flow, Not the Microservice

The trap on the other side is over-instrumenting. Teams instrument everything, pour it all into the backend, and end up with a pile of data and no idea what matters. Adriana compares it to SLOs, something you keep tweaking forever. Some of it will even vary by moment: you may want to feature flag debug logs so they are off most of the time and on when you need them.

For a team that isn't Netflix, Adriana's answer is that every system has one or two flows where the production incidents keep pointing. "Let's not instrument a microservice or 10. Let's instrument the flow," which crosses services without requiring all of them to be done. Add the libraries and frameworks your code touches anyway, and the rest becomes manageable. Matty connects this to value stream mapping, with a nod to Steve Pereira: we know our own part, so we reach for the microservice in front of us, when what we care about is how the whole thing happens.

Auto-instrumentation is the other place teams spin their wheels. OpenTelemetry supports it for Java, .NET, Python, PHP, Go and JavaScript, at zero or very little code, and it beats staring at a blank sheet of paper. But it doesn't know your business, so it won't capture the critical business events, and if you aren't careful it over-instruments and leaves you searching for a needle in a haystack.

## What OTel Is, and Where It Still Hurts

Adriana describes OpenTelemetry as a unified format for expressing and transporting telemetry, plus the collector, a vendor neutral binary that ingests data from applications and infrastructure, transforms it (mapping, obfuscation, adding and removing attributes), and exports it to one or more backends. It started in 2019 as a merger of OpenCensus and OpenTracing, which Matty places at the Monitorama where Liz Fong-Jones talked about it. It is the second-highest velocity project in the CNCF, behind Kubernetes, and recently graduated, which Adriana calls the "bat signal" for anyone who wasn't sure it was production ready. Plenty of organizations were running it in production before that.

The rough edges are documentation and ergonomics. With so many sub-projects, READMEs are hard to follow and the whole thing is hard to keep track of, and Adriana, who became an OTel community manager this year alongside Reece Lee, taking over from Austin Parker, started a monthly What's New in OTel stream that spotlights different special interest groups. Adriana admits it is "a little selfish endeavor" to stay current too. Some parts are just awkward to use, "and that's not knocking on OTel," just what happens to big projects.

One fix is OTel Weaver. Semantic conventions are the standard labels for telemetry, and Adriana likens them to nutrition labels, which look the same on every product from every vendor. Weaver lets an organization define its own conventions and then enforces them in CI/CD, failing the build when code doesn't match. Without common labels, Adriana asks, "what's an observability backend other than a really fancy database with really fancy charts?" and how do you query it?

## Whose Underwear Drawer Is It?

Observability is a team sport. Adriana saw the opposite at Tucows, where teams asked the observability practices team to instrument their code and build their dashboards: "it's like asking me to look in your underwear drawer." Observability is part of reliability and shouldn't be its own silo. Platform engineers are the first line of defense in the backend, but they can only use what developers instrumented, and developers are the ones who understand the code. They are used to writing logs and now are being asked for metrics and traces. Adriana's pitch is that since you are doing the work anyway, you can use it to troubleshoot your own code.

There is a second payoff. If QA can open the observability tool while doing exploratory testing, a bug either gets explained or exposes a gap, and the developer hears "you're missing instrumentation." Then "instrumentation becomes a quality gate" before anything reaches the SREs.

Adriana also wants a central body accountable for observability practices, who define semantic conventions, instrumentation guidance and tooling. "Centers of excellence" is a term Adriana is not a huge fan of. Standardizing tooling matters, and Adriana once worked at a bank with five different version control systems and an audit to untangle them. But that body can't work from an island, or it becomes the InfoSec move: declare something org-wide and hear "What the fuck? Now I can't code." Matty's summary of how easy it is to get right: "Humans, humans gonna human."

## What to Do This Week

Adriana's shameless plug is an O'Reilly video course on observability with OpenTelemetry, for visual learners, and the pointer to opentelemetry.io. Since a lot of people write blog posts about how to do things with OTel, Adriana asks that they also contribute the learning back to the docs, and that anyone who hits a gap while starting out treat it as a way into open source. A beginner's view is "a gift" to maintainers who have forgotten "the novice brain which has never seen this thing before." The OTel YouTube channel, otel-official, has What's New in OTel, OTel for Beginners, OTel Me, where people using it in the wild share their struggles and fixes, and OTel in Practice. Matty floats an observability roundtable at some point, and Adriana says to count them in.

## Links to Resources Mentioned

- [OpenTelemetry on GitHub](https://github.com/open-telemetry)
- [opentelemetry.io](https://opentelemetry.io), the official docs and source of truth
- [What's New in OTel](https://youtube.com/playlist?list=PLVYDBkQ1TdyzQJSuzy7wrqVQ-q067fANz&si=HLvryDaOxAKdZF0D), the monthly stream Adriana co-runs
- [Adriana on OTel Weaver](https://adrianavillela.com/post/let-s-learn-about-otel-weaver-together/)
- [Adriana's O'Reilly course on observability](https://learning.oreilly.com/course/fundamentals-of-observability/0636920926597/)
- [The OpenTelemetry YouTube channel](https://youtube.com/@otel-official)
- [Adriana's podcast](https://bio.site/geekingout)
- [Adriana's socials](https://adrianavillela.com/socials)
