---
title: Protocols and Sympathy with Martin Thompson
description: Making performance changes is about working smoothly with hardware AND with people.
date: 2019-07-20T19:28:55.000Z
publishDate: 2019-07-20T19:28:55.000Z
episodeNumber: "132"
podcastFile: arrested-devops-podcast-episode132.mp3
podcastDuration: 49:51
episodeImage: episode/img/protocols.jpg
episodeBanner: episode/img/protocols-banner.png
images:
  - img/social/fb/protocols.png
guests:
  - person: mthompson
    snapshot: mthompson
hosts:
  - jkerr
sponsors:
  - atomist
  - sdt
aliases:
  - /132
explicit: no
transcript: protocols
---

Jessica Kerr talks with Martin Thompson, known for the Disruptor and for mechanical sympathy, about performance, queuing theory and protocols, and how the same mathematics and etiquette apply to computers and to people. Martin spends days on distributed and concurrent systems, helping clients waste fewer CPU cycles, which often means helping people, because "getting people to behave well usually gets software to behave well." The cold open is Martin: "Computers, you don't have to be nice to them, but actually being nice to them, you get better things out of them."

## Being Nice to Systems

Martin's way of getting people to behave is to understand their motivations, give them interesting things to do and show them value, the best way being to let them meet real users, since so much software goes over a wall. Martin is hired for performance and finds it leads to delivery: you can't know you made something faster without tests and measurement, which needs CI and continuous delivery, so short cycles matter. Queuing theory and Little's Law are the fundamentals behind lean delivery, and "System being code or system being people, it's still the same thing. Same mathematics apply." Mechanical sympathy, Martin notes, is a term taken from racing driver Jackie Stewart, and is really empathy.

## Slack, Utilization and the J Curve

Martin describes the scientific method as the learning cycle: have an idea, design an experiment, analyze the results, and go back if wrong. The faster the cycle, the quicker you learn. Buffers exist because components run at different paces, and a team with no slack has no buffer to react, so backlog grows. Martin's example is a service that takes 100 milliseconds per job with jobs arriving at one per second, at 10% utilization. At five per second it's 50%, and as utilization climbs, response time follows a J curve, so past about 70% queues form. At 9 jobs per second, 90% utilization, a job waits about a second, and cutting the job to 50 milliseconds makes the system 20 times more responsive, not twice. That holds with the same resources and arrival rate, because it reduces utilization.

Adding resources only works if the work can be distributed without contention. Martin cites the Universal Scalability Law, which includes the coherence cost, the time to reach agreement, and says Brooks's Law in The Mythical Man-Month is the same math: adding people to a project costs time bringing them up to speed. Martin quotes Rob Pike: parallelism is doing multiple things at the same time, and concurrency is dealing with multiple things at the same time, which requires coordination. A team needs steady state, since Little's Law assumes it, and reshuffling teams constantly changes all the parameters. Conway's Law means dysfunctional team communication produces dysfunctional software.

## What a Protocol Is

For Martin, a protocol is "just the rules for engaging or interaction between components in a system," whether people or software: the etiquette and the precedence, meaning behavior in order. In real life we deal with out-of-order events by handling exceptions and not expecting perfection. Martin says English is directive with little redundancy, while languages elsewhere approach things from several angles, which is less efficient but safer. Claude Shannon's information theory says communication isn't complete until feedback confirms reception, yet software is often built as if delivery just happens. Martin calls two-phase commit a protocol sold as a silver bullet that is fundamentally broken.

## Zombies, Versioning and Idempotency

Martin says "nodes just dying is not a problem. Zombies are the real problem," and "Partial failure is much, much worse," so shoot a node in an indeterminate state and move on. Versioning helps at all levels: messages, protocols and state, since a process waking from a long GC pause may act as if no time has passed, and old messages from an earlier session can turn up in a new one, which Martin ties to TLS 1.3 fast-restart replay attacks. At the application level, give every message a unique, monotonic sequence number or correlation ID so duplicates, replays and out-of-order messages can be ignored, as in a banking system with transaction IDs. Martin calls this hygiene, like "a surgeon will not consider performing an operation without washing their hands," crediting Florence Nightingale, a statistician who popularized the pie chart to show infection rates. Tests, CI and monotonic sequences save time in the end.

## Development as a Protocol

Martin treats testing order as a protocol of precedence: write the test after fixing a bug and it may be bogus, while writing it first and watching it fail gives falsifiability, which is scientific maturity. Jessica adds "Never trust a test you haven't seen fail." Martin says software has only been around a few decades, without generations of trade knowledge, so we should admit mistakes and shorten feedback cycles, and that every protocol needs a way to change, which is why protocols need versioning. Legal systems are codified protocols that change as we learn.

## Amplification, Buffering and Canaries

Martin says, citing Dijkstra, that software is so novel that metaphors break down, and that one small change, such as a single incorrect bit, can have a catastrophic effect, more than almost anything in human history. Jessica notes that software amplification can be nearly instantaneous, while human systems take time to propagate, and Martin says buffering contains change, comparing it to shockwaves through air versus liquid. Martin gives a historical example of a society that ran by committee in peace, which slows change on purpose, and appointed a war leader only in wartime. Jessica mentions a Cloudflare outage from a pathological regular expression pushed globally, and Martin says use isolation and suitable buffering, like a canary, and Jessica says the same works for trying a process change on one team.

## Slowing Down

Martin's favorite thing learned that year was an article saying people are always trying to do the right thing, including when procrastinating, which usually means insufficient information or a worry ahead, so it's a canary: "don't treat anything as bad behavior. It's just interesting information." Martin's advice: "just slowing down and pausing is actually one of the best ways to speed up."

* Martin’s [talk on protocols](https://www.youtube.com/watch?v=A5ovSBt0-C0) from J on the Beach
* Mechanical sympathy:
  * https://mechanical-sympathy.blogspot.com/2011/07/why-mechanical-sympathy.html  
  * https://groups.google.com/forum/#!forum/mechanical-sympathy  
  * https://dzone.com/articles/mechanical-sympathy  
* Universal Scalability Law, Queuing theory, Little’s Law
  * http://www.perfdynamics.com/Manifesto/USLscalability.html 
  * https://blog.acolyer.org/2015/04/29/applying-the-universal-scalability-law-to-organisations/ 
  * https://www.infoq.com/presentations/little-usl-scalability-performance/  
  * http://perfdynamics.blogspot.com/2014/07/a-little-triplet.html 
  * http://www.vissinc.com/2012/09/07/littles-law-isnt-it-a-linear-relationship/
  * https://medium.com/@__bbak/dont-be-fooled-by-littles-law-18e18dba3717
* [Florence Nightingale](https://www.kopisusa.com/florence-nightingale-pie-charts-birth-bi/) and Pie Charts
* [Dijkstra on the radical novelty of software](https://www.cs.utexas.edu/~EWD/transcriptions/EWD10xx/EWD1036.html)
* Image credit: Ylva, Ebba, and Kashti Grimm

### Community

* [Velocity Berlin](https://conferences.oreilly.com/velocity/vl-eu) Nov 4-7 2019 - discount code "ADO2019" gives 20% off for Gold, Silver, and Bronze passes, and Best Price ends August 2.

* For any [devopsdays](http://devopsdays.org), try the discount code ADO2019!
