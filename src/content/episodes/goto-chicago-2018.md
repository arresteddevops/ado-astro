---
title: GOTO Chicago 2018
description: Bridget discusses distributed systems with speakers from GOTO Chicago 2018.
date: 2018-04-28T23:55:48.000Z
publishDate: 2018-04-28T23:55:48.000Z
episodeNumber: "107"
podcastFile: arrested-devops-podcast-episode107.mp3
episodeImage: episode/img/goto-chicago-2018.png
episodeBanner: /episode/img/goto-chicago-2018-banner.png
images:
  - /img/social/fb/goto-chicago-2018.png
guests:
  - person: jhodges
    snapshot: jhodges
  - person: jhendricks
    snapshot: jhendricks
  - person: estmartin
    snapshot: estmartin
  - person: ahall
    snapshot: ahall
  - person: kkingsbury
    snapshot: kkingsbury
hosts:
  - bkromhout
sponsors:
  - chef
  - datadog
aliases:
  - /107
  - /gotochicago2018
youtube: rT_cPdMqg5A
explicit: yes
transcript: goto-chicago-2018
---

Bridget curated the distributed systems track at GOTO Chicago 2018 and closes it with a live panel of the five speakers: Jeff Hodges, a consultant who talked about productionizing distributed systems, Jordan Hendricks of Joyent, who talked about adding a feature to the Manta object store within its original design trade-offs, Erik St. Martin of Microsoft, who talked about Kubernetes as building blocks for distributed systems, Alena Hall, who talked about running distributed data stores and Spark on Kubernetes, and Kyle Kingsbury, who talked about testing for safety with Jepsen and recent concurrency bugs in databases. The cold open is Erik: "it's the unknown unknowns in production are what get you every time."

## Keeping State Safe

Bridget asks for tips on storing state safely. Kyle says do as much immutable as possible, since it solves consensus trivially: the Lamport proof says it takes two rounds only when proposals conflict, and immutable data has no conflicts. Alena adds Kyle's point not to trust the documentation, but to learn the distributed algorithms behind a system and test it against your own use case, and if it works, maybe keep running it. Jordan says to think clearly about which services are stateless and which are stateful, to keep the stateful list very short, and to keep the design simple, since "we're not very good at reasoning about these things on our own."

Bridget asks how to tell content you want to keep from content like spam. Jeff says you can accept writes without distributing them: rather than fanning out a tweet, analyze it, and if it looks suspicious by your heuristics, don't deliver it. Jeff says that's common, because "the acceptance of writing doesn't mean that you have to accept all the reads that are gonna come out of it," and there are far more reads than writes.

## Building on Kubernetes

Bridget asks Erik how to know what to build when building systems no one has thought of. Erik says many of the pieces would have been created anyway, like schedulers, and the important thing is to build on what exists, such as Kubernetes and etcd, because that's where mistakes are made, and leveraging existing guarantees prevents repeating them and adds less complexity.

## Learning From Failure

Bridget asks Kyle whether organizations learn from other people's failures. Kyle says testing under failure conditions like partitions and clock skew has been adopted rapidly, often after a customer reports a production problem. There's also a settling-in period where a system must run at scale with weird inputs to solve corner cases, which a greenfield project doesn't have. Jeff says a talk from five years earlier had to be updated, with the future idea of Docker, Mesos and data center schedulers now being reusable pieces, and "Fortunately, we still screw up the same exact things."

Alena says there are engineering errors and algorithmic errors, and that specification languages like TLA+ describe the algorithm as mathematics to catch logic errors before engineering ones. Kyle sees a continuum of safety from proof to implementation, and gives the example of a missing fsync invalidating a correct proof. Erik notes that proofs rest on known failure modes.

## Unknown Unknowns in Production

Jeff says feature flags still lack a robust implementation, because they integrate with your deploy processes and user models, though metrics systems like Prometheus and Stackdriver have become reasonable, and dark rollouts need both. Even Let's Encrypt had to build its own. Jordan says Joyent's team is wrestling with how Manta behaves at scale, including whether every service for an instance will fit in DNS packets, and having to think about infinite scale from the beginning. Jeff adds that there was a patch for an old Samsung mobile platform that didn't do HTTP as expected, kept for four years.

Erik is excited about chaos engineering, and notes how shared suites can teach people failure modes like exhausting file descriptors and local ports. Jordan adds running out of TCP connections, Kyle says "What up, time wait?", and Erik explains connections closed in batches can be handed back to the operating system faster than it makes them reusable. Kyle mentions a major cloud provider that occasionally swapped pages of a VM's RAM with other VMs', which Kyle says is fixed. Jeff says anyone running about 20 machines will one day stare at a TCP state machine diagram in lsof wondering why time wait is crying.

## Conference Talks as Hooks

Bridget notes Alena's cautions about Spark on Kubernetes. Alena says the demos work but production may make you the first person to run it, and gives corner cases, such as a driver pod dying as a single point of failure, and a Cassandra-to-Spark connector that didn't support Spark 2.3. Erik recalls a DEF CON badge maker's comment that talks aren't exhaustive training: they give hooks to research further, so don't feel bad if you can't follow everything in 30 minutes.

## Best Advice

Erik says "it doesn't matter how many distributed systems you build or how long you do it for, it's still hard." Erik recommends understanding what consistency guarantees your use case needs, and building in backpressure, circuit breakers and idempotency from the beginning. Jordan says "everything fails all the time," and suggests bounding request time, avoiding compound operations, and remembering that adding instances won't fix a memory leak. Alena recounts Leslie Lamport telling a TLA+ workshop, "It took me 20 years to get all of the pieces," and recommends building observability into as many pieces as possible to find new unknown unknowns. Kyle points to Jeff's post Distributed Systems for Youngbloods and Kyle's own class, and says "Assume your clocks are garbage. Assume your runtimes will pause." Jeff takes the social ground: distributed systems involve more capital, teams and organizations, and without a migration plan to get people onto a new system, it goes nowhere, since there is "a technical set of problems embedded inside of a social space." Bridget concludes that distributed systems, like Soylent Green, are made of people.

Bridget curated the [distributed systems track at GOTO Chicago 2018](https://gotochgo.com/2018/tracks/65). In the last timeslot of the day, she gathered all the speakers from the track to discuss their topics.

## Show notes

- [Jeff Hodges - Practicalities of Productionizing Distributed Systems, 2018](https://gotochgo.com/2018/sessions/378)
- [Jordan Hendricks - Designing Features for Mature Systems: Lessons Learned from Manta](https://gotochgo.com/2018/sessions/364)
- [Erik St. Martin - Building Distributed Systems with Kubernetes](https://gotochgo.com/2018/sessions/347)
- [Alena Hall - Distributed Data Stores on Kubernetes](https://gotochgo.com/2018/sessions/348)
- [Kyle Kingsbury - Jepsen 9: A Fsyncing Feeling](https://gotochgo.com/2018/sessions/450); [Kyle's distributed systems class](https://github.com/aphyr/distsys-class)

## Community & Event Stuff

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)

### Upcoming conferences

### Open CFPs

- [lots of DevOpsDays](https://devopsdays.org/speaking)
- [Velocity EU](https://conferences.oreilly.com/velocity/vl-eu/public/cfp/648) - CFP closes May 8

### Discount codes
- ADO2018 for 20% off lots of devopsdays, 10% off ChefConf, 5% off GopherCon.
