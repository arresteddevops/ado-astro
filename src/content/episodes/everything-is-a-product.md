---
title: Everything's a Product with Sarah Morgan
description: Guest Sarah Morgan helps dig into how we can apply the principles of product management into our DevOps approaches!
date: 2023-08-10T15:50:33.000Z
publishDate: 2023-08-10T15:50:33.000Z
episodeNumber: "190"
podcastFile: arrested-devops-podcast-episode190.mp3
podcastDuration: 51:00
podcastBytes: 23300000
episodeImage: episode/img/everything-is-a-product.png
episodeBanner: episode/img/everything-is-a-product-banner.png
images:
  - img/social/fb/everything-is-a-product.png
guests:
  - person: smorgan
    snapshot: smorgan
hosts:
  - mstratton
sponsors:
  - drata
  - sysdig
  - devopsworld
aliases:
  - /190
  - /everythingisaproduct
explicit: no
transcript: everything-is-a-product
---

Matty talks with Sarah Morgan, senior product manager at Telemetry Hub, about applying product management thinking to DevOps, SRE and internal platform work. Sarah has about ten years in product after an engineering background, and a career that goes back to the early 2000s. Matty's talk Everything's a Product, linked below, is the starting point. The cold open is Matty: "I think everything's a DevOps problem."

## Thinking Like a Product Owner

Sarah says product people tend to stop at the business case and the features and forget reliability, stability and the rest of the user experience. Ownership has also gotten more siloed as systems have grown, so nobody sees the big picture. Matty recalls a product owner for the SRE team at PagerDuty and failing to find any posts or talks from that person. Sarah contrasts the two roles: supporting a SQL Server cluster meant caring about the health of the cluster and little else, while a product manager has to care about all of it, whether or not every piece is understood, because it all affects the end user.

Matty's line from the talk is that you won't put an NPS score on your Jenkins pipeline, "but kind of are you," since it's about users and feedback loops, and that's DevOps. Sarah suggests a health rating for every piece of the system, covering whether it does what's needed to support the people paying the bills. Sarah has mostly worked in B2B software, where users often have no choice, and says internal stakeholders should be treated the same way: don't build things so hard to understand or so locked down that colleagues can't make sense of them.

## A PM on the DevOps Team

Sarah was the product manager for a DevOps team at a company whose product was a messaging gateway for an IoT platform, a role the company hadn't had before. The team, spread across Boston and Budapest, managed development environments, AWS infrastructure, federation access control, security and disaster recovery, and was about six people before Sarah made it seven. After watching for a month, Sarah saw repetitive work that could be productized and automated, and spent much of the time running interference between the team and people used to going straight to a favorite engineer for access. The team's customers were the software developers, so the job was finding their pain points and building a strategic roadmap, where ops work is usually "pipeline-style ticketing" of whatever is oldest or loudest. The team liked having a direction.

## Roadmaps and Promises

Matty's talk has a slide that says "this is why roadmaps are bad, and if you have one, you should feel bad," since a roadmap can be read as a promise, and asks how to keep transparency without that. Sarah calls it the bane of every product manager's existence and handles it sneakily: only the roadmap shared with engineers is called a roadmap, and that's where dates live. Everything else goes out as vague documents with names like "H1 priorities." Sarah tells sales to say "new alerting integrations" and not whether it's PagerDuty or a webhook, and adds detail as a release date firms up.

Matty recalls Marty Cagan spending two days at Apartments.com, and the LivingSocial story of running an experiment, removing it, and having sales say it was already sold. Matty's point is that you can't be agile in only one part of the company, and ties it to Andrew Clay Shafer's observation that everyone wants more reliability, stability and velocity without changing anything.

## Platforms as Products

Matty says platform engineering is "fundamentally providing Heroku inside your company," and that an internal platform team might think it needn't worry about customers because the CIO mandated it. But people who don't get what they need will go around it, which is "shadow IT all over again," and platforms tend to be thought of as compute and orchestration while event streaming, data pipelines and messaging get left out. Sarah says a SOC audit reveals the rogue platforms, and that you have to think about use cases: at a previous company a backend service didn't handle bulk requests, a front-end engineer looped over a couple thousand rows, and it fell over as soon as two people used it at once.

## MVP Means Prototype

Matty says Marty Cagan reads MVP as minimum viable prototype, meant to help you learn, even though most people hear minimum viable product and treat it as version 1. Sarah says experiments are supposed to be fast and needn't scale, but then they ship and never get a version 2: "MVPs are not MVPs anymore." Matty compares it to critical production systems under someone's desk, including a machine in a Bank One data center that nobody could identify. Discovery, Matty adds, means asking questions and finding proxies, since people know what they want but don't always communicate it in a form you can build. Sarah says to repeat requirements back and to have conversations, because a PRD or ticket can't hold it all.

## Product Managers as Incident Commanders

Matty says the two places product people shine are community conference tables, where they spend the day talking to users, and incident command. At PagerDuty a product owner asked to join the incident commander rotation, which had been engineering management. Told that a product owner wasn't an engineer, the answer was that "that's a feature, not a bug." The product owner became the first non-engineering incident commander, and by the time Matty left there were no engineers in the rotation. The reasoning: "never half-ass 2 jobs, whole-ass one job," so an incident commander who isn't a software engineer never gets pulled into fixing. The skills overlap too: prioritizing, communicating and delegating. Matty says it also changes how product folks think about reliability, because the concerns arrive firsthand and not filtered through on-call.

Matty tells of a sysadmin on the team who couldn't get the product owner to care about a service throwing around 25,000 false errors a minute, because the sysadmin led with the symptom, and the argument that landed was that nobody would notice a real failure. Putting the error rate on the office dashboard got it fixed in about two days. Sarah's version is selling disaster recovery to a general manager by describing the worst outage scenario in dollars, and Matty adds that "money is a lingua franca," not that it's all anyone understands.

## Sidecar Skills and Learning

Matty calls business cases, writing and speaking "sidecar skills" that set engineers apart, recalling developers who dropped an idea when the CTO asked for a business case, and saying the exercise works like a rubber duck. Sarah says none of the interpersonal, interviewing, listening or public speaking skills came naturally and all were learned. Sarah also warns against underestimating colleagues' ability to learn technical details, from sales to product. Matty extends it to incident commanders, who need to understand a system well enough to know whom to call, without knowing how to rebuild the carburetor.

Sarah's start and stop: start thinking about who your stakeholders are, and stop building things without validating them.

- ["Everything is a Product"](https://speaking.mattstratton.com/QVCKIX/everything-is-a-product-how-to-apply-product-management-practices-to-technology-services) - Matty’s talk
- [“More Buzzwords Won’t Help”](https://www.youtube.com/watch?v=C8hma_YSBX0) - Andrew Clay Shafer
- [Telemetry Hub channel on YouTube](https://www.youtube.com/@telemetryhub)
<br>
<br>
*DevOps World is back for 2023, and you won't want to miss out on this one-of-a-kind event! This year's program is packed with exclusive insights, immersive workshops, and unparalleled networking opportunities taking place across multiple cities in the US, UK, and Asia. Elevate your DevOps game and register using the following links: [NYC area](https://reg.rainfocus.com/flow/cloudbees/devopsnyc/webinar3/page/landing), [Chicago](https://reg.rainfocus.com/flow/cloudbees/devopschicago/webinar3/page/landing), [Silicon Valley](https://reg.rainfocus.com/flow/cloudbees/devopssiliconv/webinar3/page/landing), [Singapore](https://reg.rainfocus.com/flow/cloudbees/devopssingapore/webinar3/page/landing), and [London](https://reg.rainfocus.com/flow/cloudbees/devopslondon/webinar3/page/landing).*
