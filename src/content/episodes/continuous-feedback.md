---
title: Continuous Feedback with Roni Dover
description: Roni Dover, founder of [Digma.ai](https://digma.ai), joins Jess to chat about continuous feedback and what's missing in every DevOps loop.
date: 2022-07-28T12:39:42.000Z
publishDate: 2022-09-20T12:39:42.000Z
episodeNumber: "183"
podcastFile: arrested-devops-podcast-episode183.mp3
podcastDuration: 51:04
episodeImage: episode/img/continuous-feedback.png
episodeBanner: episode/img/continuous-feedback-banner.jpg
images:
  - img/social/fb/continuous-feedback.png
guests:
  - person: rdover
    snapshot: rdover
hosts:
  - jkerr
sponsors:
  - honeycomb
  - rootly
aliases:
  - /183
  - /continuousfeedback
explicit: no
transcript: continuous-feedback
---

Jessica Kerr talks with Roni Dover, a developer who has also worked as a product manager and describes oscillating between the two, about continuous feedback as the missing loop in DevOps. Roni is a board game fan and a self-described skeptic, and started an open source project called Digma to put the idea into practice. The cold open is Roni on code: "the tales that this code could tell, if only it could tell what happened back when it was, you know, used or abused."

## Optimizing for Speed Only

Roni says development processes try to optimize for speed of deployment, cadence and time to release. If you only optimize for speed, "you're just creating a system where you're hurling features over the fence faster," 24 times a day instead of once a month, without improving the learning or the feedback. Jessica points out DevOps is supposed to keep caring after production, and Roni says the tools for that look for problems, which is reactive and generic. As a product manager Roni had tools like Google Analytics showing the impact of a decision, such as whether a navigation change increased adds to cart, and didn't feel like they were running blind, while developers had CI, CD and testing tools that say nothing about impact or performance in production. Jessica calls the missing piece observability, and adds it must be more than monitoring.

## The Inverse Pipeline

Roni describes continuous feedback as the inverse of continuous deployment: the DevOps loop takes code from source to production, while continuous feedback starts with information from production, goes through stages to work out what's relevant, and ends back in the developer's tools, including the IDE. Roni stresses it's not actually linear, since feedback also exists before you start coding. Code ownership has grown from "done when I sent it to QA" to owning tests and deployment, which Jessica compares to moving from owning a car to parenting, where you want to know how your kids did in kindergarten.

Roni's examples of what code could tell you: how heavily the code is used and whether it's a bottleneck in a high-concurrency environment, which tells you what to optimize, whether it runs in production at all, which Roni has seen surprise teams who invested three years in a feature whose code path was never reached, and how it scales with concurrency, database size or payload. It could also report runtime errors, such as whether a "should never happen" branch does. Roni adds that developers misuse logging for this and forget to check.

## Biases and Why It Doesn't Happen

Roni says continuous feedback makes the organization a learning process instead of a shipping process, and stretches the definition of done. Without it you accumulate technical debt and end up "running around, putting out fires." Roni cites biases: estimation anchoring and optimism bias, and confirmation bias in tests, which codify expectations and miss things nobody thought of. Observability injects relatively objective data, and "if you know about a bias, it seldom helps you actually overcome it." Jessica adds that combinations of features, data and ordering go well beyond edge cases.

Roni says very few engineering organizations actually practice continuous feedback, for three reasons: engineers are busy and can't keep looking for trouble in logs and dashboards, not all have the expertise, and they get data, not insights, and context switching is costly. Roni says an insight would be that this is a bottleneck and why, with a way to double-click for more.

## Digma and OpenTelemetry

Roni started Digma, which is open source and entering beta, to tackle those three issues by codifying the tribal knowledge about how to measure latency and read time series, bringing it into the IDE so there's no context switch, and making it proactive, so the code sends "life signs" after it ships. Roni also wants to celebrate wins and not make observability all about blame. Readers can sign up at digma.ai, and mentioning the podcast gets a bump up the beta list.

Roni says OpenTelemetry was pivotal because everyone agrees on it, with vendors aligning around it and a spec that lets new open source tools make the data more useful. The libraries auto-instrument code, so getting from no telemetry to useful data is quick. Digma works as a pipeline and not an APM, ingesting OpenTelemetry data, scanning the code to correlate data to locations, and, if you add the commit ID via an environment variable in CI, relating insights to the code change that precipitated them, which Roni describes as a matryoshka design. Roni would like shorter loops, so adding a trace gives feedback in testing, CI and staging quickly. Jessica relays a friend's wish for something that says there's an N+1 query right here, and Roni says that's exactly Digma's point.

Roni says a developer wants control, not a 2 AM call three days after a push, and had written a blog post called Breaking the Fourth Wall, about code that talks back. The biggest risk is being spammy or sending people on a wild goose chase, so the feedback has to be accurate and pertinent. Jessica says to test in production as well as before it.

Roni is @DoppleWare on Twitter and writes on Medium, and the favorite board game Roni mentions is New Angeles, though Roni rarely plays the same game twice, since repeat plays become rule hacking.

Jess and Roni talk about what continous feedback: where it came from, what it looks like in the context of a dev proces, and the benefits it can bring to engineers and developers. They also discuss Roni's observability project, [Digma.ai](https://digma.ai)... and his other passion, [complicated board games.](https://boardgamegeek.com/boardgame/205716/new-angeles)
