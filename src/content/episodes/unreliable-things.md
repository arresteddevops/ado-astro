---
title: Unreliable Things Can Be the Most Valuable Things
description: How do you make change in a complex system that is always failing, but must never break?
date: 2019-03-30T00:49:14.000Z
publishDate: 2019-03-30T00:49:14.000Z
episodeNumber: "127"
podcastFile: arrested-devops-podcast-episode127.mp3
podcastDuration: 53:55
episodeImage: episode/img/unreliable-things.jpg
episodeBanner: episode/img/unreliable-things-banner.jpg
images:
  - img/social/fb/unreliable-things.jpg
guests:
  - person: mhibberd
    snapshot: mhibberd
hosts:
  - jkerr
sponsors:
  - chef
  - datadog
  - pagerduty
  - sdt
  - agiledevopswest
aliases:
  - /127
  - /unreliablethings
explicit: no
transcript: unreliable-things
---

Jessica Kerr hosts Mark Hibberd, head of technology at Kinesis, a small company building software products that help cities with climate change. Mark has dabbled in distributed systems, security, cryptography and more recently data and machine learning systems, and the common thread is building complex systems that work: reliability, and how you change systems with many users that can't break. The episode's theme, as Jessica puts it in the opening, is making positive change in the world with DevOps.

## Why Change Is Where Failures Spread

Mark says complex systems are always failing, and failures become big problems when they cascade. If failures are independent, the probability of a combined failure drops, and change breaks independence: version 1 and version 2 of a service are coupled through their data, and clients couple through interfaces. With two versions of every client and service but one version of the data, everything is coupled to everything. So "your reliability is particularly dependent on how good your deployment process is," which Jessica promises to quote.

Mark says a deployment process needs a full feedback loop, where production tells you whether it's working and the process adapts, citing an AWS talk on closing loops and opening minds. Jessica compares it to test-driven development, asking "how will I know it works?" in terms of users, not just not crashing. Concrete examples: running old and new services in parallel, using only the old results, and comparing performance. Jessica calls it a shadow deployment, and mentions progressive delivery, a term from RedMonk. Mark says rewrites create a cliff, temporal coupling that removes independence, and that a deployment can carry its own checks, such as verifying that the first 100 queries to a spatial service return sensible shapes.

## Building, Operating, Changing

Mark's three topics are building, operating and changing systems. On building, accidental coupling happens at design time, and Mark cites Michael Nygard's entity service anti-pattern, which Mark says describes nearly every microservices tutorial, with a service per noun that makes everything chatty. A smell is a state field describing which part of the system is using the object. Using an order moving from cart to shipping to archive, Mark argues for services around lifecycle stages with handoffs, which Jessica ties to bounded contexts in Domain-Driven Design. Mark's chess example: in-flight games need a fast database for 5,000 games, while 5 million historical games suit a slower searchable one, instead of a Cassandra cluster with hundreds of nodes for terabytes of data when only a fast fraction needed speed. Toy examples in tutorials teach small systems, which isn't a problem unless people assume they scale.

On operating, Mark says health checks are commonly coupled so that one service's failure makes everything report unhealthy, and the cluster shuts production down. Jessica says as soon as you automate around diagnostics, "that's production code." Serving some requests beats serving none, which means aggressive timeouts, and Mark recalls a licensing system for a large antivirus product with 40 million clients where fast checks shared a server with 45-megabyte update downloads over dial-up.

## Unreliable Things Can Be the Most Valuable

Mark prefers a positive spin on reliability: "unreliable things are often the most valuable things," especially early in a product. Mark works with data scientists, and instead of handing their work off to programmers who take six months, ships their code to production independently, so that if it crashes it can't break the rest of the system. A similar approach works for feature spikes shipped in an afternoon, with the caveat that customers may come to expect a feature. Jessica notes that programmers take six months because of guidelines built for systems that can't fail, and calls it disposable code until it succeeds and needs hardening. Mark says reliability techniques can enable experiments as well as defend.

## Change as Science

For change, Mark says developers who know the operational environment should write a production check with each feature. Mark cites GitHub's Scientist library and Facebook's Hack language, where a programmer adds an indicative type and ships it, production monitors whether it's ever wrong, and after weeks of consistent data it raises a change request to enforce it. Jessica summarizes it as making a prediction, injecting an observation so you can be surprised, then escalating the consequences of surprise. Mark likens it to pair programming with the user, and Jessica mentions Dark, a language and environment for changing a running system. Jessica says this works for teams evaluated on how successful users are, not on cards completed. Jessica connects Safety II, which asks what causes success, to Mark's point that we should sell these techniques for what they enable, not only what they prevent.

## Kinesis and Cities

Kinesis brings together urban datasets, from weather and mobility to land use and electricity consumption, for analytics and predictions, such as the impact of a building standard on cost and greenhouse gas emissions. Mark describes a Sydney tower, where solar panels created excess power, which feeds a recycled water plant, which needed a way to use the water, so plants were grown up the side, which shades the building and reduces air conditioning. Kinesis found up to a 7 degree Celsius difference between parts of Sydney on a hot day, tied to tree canopy cover, and helped a government change policy on where to plant trees, correlating hot zones with at-risk populations. Competing customers share data in building partnerships that cut carbon footprints more than other buildings, and Mark says the work is "definitely better than selling ads."

* Mark's talk from YOW! Australia: [Principles of Reliable Systems](https://www.youtube.com/watch?v=3T2ttQjiP_o)
* [Progressive Delivery](https://redmonk.com/jgovernor/2018/08/06/towards-progressive-delivery/) by James Governor of RedMonk
* [Scientist](Scientist - https://github.com/github/scientist), a Ruby library for experiments
* [Dark](https://darklang.com/), a language/IDE for coding into a running system
* [Entity Service Antipattern](
https://www.michaelnygard.com/blog/2017/12/the-entity-service-antipattern/) by Michael Nygard
* [Facebook PHP Typechecking example](https://www.youtube.com/watch?v=GxA22JQWP94) from Julien Verlaguet
* the excellent [closing loops / control plane talk](https://youtu.be/O8xLxNje30M) by Colm MacCarthaigh
* [Safety II](http://www.safetydifferently.com/what-safety-ii-isnt/)
* [That cool building in Sydney](https://en.wikipedia.org/wiki/One_Central_Park)
* Credit for the drawing of Mark goes to [lyn.ia](https://www.instagram.com/lyn.ia/)

### Community

* [Velocity San Jose](https://conferences.oreilly.com/velocity/vl-ca) June 10-13 2019 - discount code "ADO2019" gives 20% off for Gold, Silver, and Bronze passes.

* For any [devopsdays](http://devopsdays.org), try the discount code ADO2019!
