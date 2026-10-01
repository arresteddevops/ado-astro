---
title: Platform Engineering goes to Flavortown with Matt Kurtiz
description: Matt Kuritz of The Farmer's Dog explains how a platform team that owns nothing works alongside product teams, with a monorepo and a code generator standing in for a portal.
date: 2023-10-05T12:10:33.000Z
publishDate: 2023-10-05T12:10:33.000Z
episodeNumber: "194"
podcastFile: arrested-devops-podcast-episode194.mp3
podcastDuration: 46:39
podcastBytes: 21400000
episodeImage: episode/img/flavor-town.jpg
episodeBanner: episode/img/flavor-town-banner.jpg
images:
  - img/social/fb/flavor-town.png
guests:
  - person: mkuritz
    snapshot: mkuritz
hosts:
  - mstratton
sponsors:
  - devopsworld
  - uffizzi
  - gliffy
aliases:
  - /194
  - /flavortown
explicit: yes
transcript: flavor-town
---

Matty talks with Matt Kuritz, staff engineer and tech lead of the platform engineering team at The Farmer's Dog, a fresh dog food company, about what platform engineering looks like at a company that has been doing it for about four years. The company has grown from a few engineers to roughly 50 to 100 and has shipped over 100 million meals. Matty frames the episode as a return to platform engineering after recent episodes with Daniel Bryant and Pete Cheslock, with the joke that none of them actually do it and just want to talk about it. The cold open is Matt Kuritz, on why tools are better: "infrastructure tools and software just becoming more like real software."

## Product Teams and Platform Teams

Matty starts from the Charity Majors post on the Honeycomb blog, which has a table contrasting platform engineers and ops engineers, including a row where SSH is a no for platform engineers. Matt Kuritz says the idea came partly from a diagram in Lean Enterprise about self-service operations building a PaaS, which Matt never wanted to build, but its goal stuck: in an ideal world there are no handoffs between developers and operations, and product teams own their software end to end. At The Farmer's Dog there are two kinds of team, product engineering and platform engineering, and "the only difference is who the customer is." Everyone cares about reliability and delivery. Matt Kuritz adds a disclaimer that if SRE or DevOps works for a company, there's no reason to drop it, and that some companies have to go deep on infrastructure.

Matty adds that nobody can talk about platform engineering without James Governor's line about "endlessly remaking remakes of Heroku," and says the point of Heroku was getting to value fast, with abstractions where they need to be, and not feeling like Dropbox. Matty repeats that "the best tool is the one you don't need. The second best one is a SaaS." Matt Kuritz says to "do what works at the right scale and then iterate and evolve from there," naming Vercel for front-end-heavy companies and Stripe as a business function nobody wants to run. The Farmer's Dog isn't building a PaaS but assembling a platform of preferred tools with glue where it pays off, which Matt sees as a pattern others could use.

## How the Team Measures Itself

Matt Kuritz says the team has to be aligned with product teams on the goal, and their north star is ownership. The first milestone was continuous deployment, since every commit then has one clear owner who is responsible through the pipeline to customers in production. The team reached 100 percent continuous deployment of its applications after fixing a distributed monolith, and before any golden paths. Matt is frustrated by takes that say DevOps is dead and platform engineering is the future, and recommends Charity's DevOpsDays New York talk. The work, Matt says, wasn't different from what a DevOps team might do, but the language and structure changed: platform and product, not dev and ops. Ownership is still a multi-year goal, with each application having one clear owner, and "platform doesn't own anything."

For the product management side, Matt prefers to work hands-on with internal customers: do a real use case manually, maybe one or two more times, and only then invest in a code generator or golden path. "We don't upfront really decide anything. It has to be done at least once and put into production." The mistake teams make, Matt says, is making decisions in their own echo chamber.

## Who Decides What

Matty's rule of thumb for what to standardize is whether something is an interface point between groups: a shared source control tool matters, the JavaScript form validation library doesn't. Matt Kuritz says platform steps in as the decider for cross-team choices, such as asynchronous messaging, where RabbitMQ, SNS, SQS, Kinesis and Kafka could all show up in one app. The team collects opinions from all teams and asks whether a tool that becomes the standard would be worth maintaining, and challenges assumptions. Matt says Kafka is powerful and flexible, with many ways to get hurt, and the team evaluated Confluent but couldn't find use cases yet. Matt describes path dependence with driving on the right side of the road, and says to be honest about migration costs. Matty adds that people who've never heard of a tool will say it's fine for their team, so the platform team has to bring the context.

## Bounded Contexts, Not Silos

Matt Kuritz says "functional silos are unhelpful," but not having boundaries means everyone has to know everything, so the answer is bounded contexts in the domain-driven design spirit: vertically integrated teams mapped to business domains, like fulfillment and signup, that rarely need to coordinate. Jess Kerr's blog post on better coordination or better software supports the idea: build technical components that let people work asynchronously instead of perfecting the handoffs.

On the technical side, the team chose a monorepo, Node and one language, and not introducing another until necessary. The monorepo exists to practice trunk-based development and continuous deployment, and works only if there's one version, which is head. Upgrading Fastify across dozens of apps is one atomic commit that triggers the tests of dependents. The team has no Backstage or internal developer portal, since a code owners file in a repo organized by business domain is the directory, and Git is what developers already know. "What's our platform? It's a monorepo and a code generator. That's our platform."

## Start and Stop

Matt Kuritz's thing to start is setting a long-term vision you can never fully achieve, an idea from Toyota Kata: for The Farmer's Dog it's that every dog lives its longest life. Then break it into 1 to 3 year challenges and near-term target conditions, like moving a 10-person team to three deploys a day. The thing to stop is copycatting, or cargo culting, which Matt ties to Feynman's Cargo Cult Science and to Lean being copied from Toyota by its artifacts like Kanban cards. In platform engineering it's launching Kubernetes and Backstage because other companies did. "Think about your problems, solve those problems from first principles, don't copy."

- [Arrested DevOps - DevOps With Better Marketing with Pete Cheslock](https://www.arresteddevops.com/devops-with-better-marketing/)
- [Arrested DevOps - Platform Engineering with Daniel Bryant](https://www.arresteddevops.com/platform-engineering/)
- [Arrested DevOps - Platforms with Kelsey Hightower and Andrew Clay Shafer](https://www.arresteddevops.com/platforms/)
- [Lean Enterprise](https://www.amazon.com/Lean-Enterprise-Performance-Organizations-Innovate/dp/1449368425)
- [The Future of Ops Is Platform Engineering](https://www.honeycomb.io/blog/future-ops-platform-engineering)
- [Charity’s talk from devopsdays NYC](https://www.youtube.com/watch?v=cQLRhqtO1O4)
- [Jess Kerr’s blog that Matt mentioned](https://jessitron.com/2021/08/02/better-coordination-or-better-software/)
- [Cargo Cult Science](https://calteches.library.caltech.edu/51/2/CargoCult.htm)
