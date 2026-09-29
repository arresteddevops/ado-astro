---
title: Discovery with Julia Evans
description: Bridget chats with Julia Evans (Stripe) about learning, service discovery, CAP theorem, distributed systems, remote work, zines, and more!
date: 2016-11-16T01:59:40.000Z
publishDate: 2016-11-16T01:59:40.000Z
episodeNumber: "77"
podcastFile: arrested-devops-podcast-episode077.mp3
episodeImage: episode/img/discovery.png
episodeBanner: /episode/img/discovery-banner.png
images:
  - /img/social/fb/discovery.png
guests:
  - person: jevans
    snapshot: jevans
hosts:
  - bkromhout
sponsors:
  - 10thmagnitude
  - victorops
  - hired
aliases:
  - /77
youtube: d1P7HGo4fg4
explicit: yes
transcript: discovery
---

Bridget chats with Julia Evans, a software developer at Stripe who lives in Montreal, writes a blog about what they learn, and makes paper zines and comics about it. Bridget's framing is that of everyone Bridget knows, Julia is the most excited about learning, so the topic is discovery: what to learn, how to find it, and how to ask for help. At Stripe, Julia works on making programs run on the company's AWS instances and making that easier for developers. The cold open is Julia's story of running out of inodes, and vowing to tell the world you can.

## The CAP Theorem, Reconsidered

Julia has been trying to understand distributed systems in a way that maps to a real system. Stripe cares about both consistency and availability, though some systems can be a little less consistent than others. They say it took a long time to get the CAP theorem even with a math degree. Strong consistency means linearizable, meaning all the actions in the system can be put on a line, which is a very strong property, and availability means people can use the database. Because networks partition, you can't have both at once. Bridget cites Katie McCaffrey's point that you don't get to choose to skip partitions, and Julia adds garbage collection pauses as another way a system goes quiet. Bridget mentions the Juliet pause Bridget saw running HBase, where a system decides the other side is dead and kills itself.

At Strange Loop, Julia told Martin Kleppmann they were confused about the CAP theorem, and Kleppmann said not to pay attention to it, since there are more interesting things to say. Julia read Kleppmann's paper, A Critique of the CAP Theorem, the night before. It proposes thinking about what happens to reads and writes when the network is slow: a linearizable system has slow reads and writes, a weaker causal consistency has fast reads and writes, and some intermediate models have slow writes and fast reads. That is a richer model than CAP's two scenarios but not a complicated one, and it describes a replicated database that writes to a primary and reads from a secondary, which CAP doesn't help you reason about.

## Discomfort as a Guide

Julia mostly doesn't read papers. They go to Papers We Love in Montreal, listen, and ask dumb questions, and they read a paper when someone hands over a printed copy. What motivates them is a feeling of not understanding: "I got all the words, but I still don't really understand what's happening." They spend time being uncomfortable about how well they understand something and asking why, and with CAP the answer may be that the theorem isn't the answer to their questions, not that they're missing something. Bridget says people in tech are drawn to things that sound like answers.

## Service Discovery at Stripe

Julia is on the team that owns service discovery, didn't set it up, and wrote the blog post after giving an internal talk to solidify their own understanding. If you lose instances, you don't need service discovery, since load balancers do health checks. It matters for registering new nodes. Before, Stripe used Puppet to write a configuration file on an HAProxy load balancer listing the nodes, which was slow and toilsome. Consul runs an agent on each host that reports what it is running to the Consul servers, which hold a database you can query.

The interesting part is consistency. Consul is strongly consistent, so it sometimes says it is having a leader election and gives no servers, and "Consul was like too consistent." For service discovery, "a lot of the time you don't really care if your results are exactly right. You just want to be mostly right." So Stripe uses Consul Template to generate an HAProxy configuration file every minute, which stays in place if Consul goes away, so the worst case is a slightly old list of servers. HAProxy does a graceful reload, forking so the old process handles old connections. Health checking happens in the load balancer, separately from Consul.

## Blogging, Asking Questions, and Working Remotely

Julia started blogging at the Recurse Center three years earlier, writing a post every day about what they learned, joking it was a media strategy to get a job, and it worked. Their rule was that it doesn't have to be perfect. Bridget appreciates that they say what they don't know, and Julia says it matters at work too: when they joined the team they didn't know how the service discovery cluster worked, and now they do and can work on it responsibly.

Most of Julia's team, and most of the teams they've worked on for almost three years, is remote. They are aggressive about asking questions. When they joined a data infrastructure team, on the plane back from San Francisco they interrogated people about every noun they didn't understand, from HBase to Spark to YARN. They use Slack, sometimes schedule a Hangout, and visit San Francisco, and once gave a colleague who set up the cluster a list of questions. They think it helps the person who built it to hand a system off, since it's bad to be in charge of something forever, and Bridget says being territorial won't get you promoted.

## Zines and Comics

Julia describes a zine as a tiny magazine about something you love. In 2014 they were giving a PyCon talk about Linux debugging tools, and people asked what to read afterward, and the links didn't get read. Inspired by a movie about riot grrrl and fanzines, they wrote a zine about strace to hand out at the talk. Bridget saw copies at DevOpsDays New York. They made a second zine in September about Linux debugging tools.

For comics, someone suggested a cute drawing at the top of the service discovery post, and Julia drew it on a six-hour flight. The person said the post was much easier to understand from the drawing, which works as a summary tool. They also drew the eight steps for setting up a new web service at Stripe. On Twitter, images communicate more, and a comic on /proc took off. The inodes comic came from running out of them once. Every inode lives in a flat numbered array on disk, and Bridget notes it's possible to run out. Julia says everyone has a day when they learn that, and it's better if it's when they read an adorable comic than while troubleshooting.

## Containers and Hype

Julia's interest in containers is about making infrastructure easier for Stripe developers, and they find the Kubernetes hype frustrating. The appeal is a uniform infrastructure where every box is configured the same and all the special snowflake configuration lives in the container, so that setting up a new service is less work. Containers have been very successful on the desktop as a developer tool, but people conflate that with production, where it is less clear. Utilization makes sense as a business reason, though 99% is too high, and going from 20% to 80% would be reasonable. Bridget asks what business problem you're solving.

## How to Stay Excited About Learning

Julia says they became more excited about learning at the Recurse Center, with 12 weeks to learn whatever they wanted, and got stuck learning things all the time. Bridget notes their employer lets them stretch, unlike places that just want you to ship. Julia says asking questions is a skill, and that "I don't understand" is not a very good question. They try to understand it a bit alone, then describe how they think it works to someone and ask them to check their understanding, and they wrote a blog post on asking questions. They also have an unshakable confidence that they can figure things out, and think "I haven't taken the time to learn it" and not "this is too hard." Learning one thing at a time adds up, and "no one has ever anointed me the expert of anything." Their comfort limit is the Linux kernel code.

Bridget takes the opportunity to talk about CFPs, and Julia says the first conference talk they gave was at PyCon Canada, after the person who runs Montreal Python told them to submit, and they said someone had already talked on the topic. The organizer said it didn't matter, and both talks turned out to be great.

Distributed systems, service discovery, load balancing: [Service Discovery at Stripe](https://stripe.com/blog/service-discovery-at-stripe)

## Community & Event Stuff

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)

### Upcoming conferences

For any [devopsdays](http://devopsdays.org), try the code **ADO2016**! It should get you 20% off.

* [DevOpsDays Berlin](https://www.devopsdays.org/events/2016-berlin/welcome) Nov 16, 2016 - Nov 17, 2016
* [DevOpsDays Brazil](https://www.devopsdays.org/events/2016-brasilia/welcome) Nov 18, 2016
* [DevOpsDays Warsaw](https://www.devopsdays.org/events/2016-warsaw/welcome) Nov 22, 2016 - Nov 23, 2016
* [DevOpsDays Paris](https://www.devopsdays.org/events/2016-paris/welcome) Nov 28, 2016
* [DevOpsDays Sydney](https://www.devopsdays.org/events/2016-sydney/welcome) Dec 1, 2016 - Dec 2, 2016


### Open CFPs

* [DevOpsDays Baltimore](https://devopsdaysbaltimore2017.busyconf.com/proposals/new) - closing on Dec 12, 2016
* [ChefConf 2017](https://chefconf.chef.io) - closing on January 18, 2017
* [Velocity San Jose](http://conferences.oreilly.com/velocity/vl-ca) until Jan 10th
* [Monitorama](http://monitorama.com/#cfp) - May 22-24 - CFP opening soon



## Check Outs

### Julia
- A critique of the CAP theorem: https://arxiv.org/pdf/1509.05393v2.pdf

### Bridget
- [Catchafire - matching volunteers with skills to orgs that can use their skills](https://www.catchafire.org/)
- [Minnesota Literacy Council - look for your local literacy org to teach English, math, civics, and more to immigrants & refugees](http://mnliteracy.org/)
