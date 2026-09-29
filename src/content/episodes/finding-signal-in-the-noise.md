---
title: Finding Signal in the Noise, with Aneel Lakhani and Jason Dixon
description: Bridget and Matt (in his triumphant return) chat with Aneel Lakhani (SignalFX) and Jason Dixon about modern monitoring, alerting, event streams, and more.
date: 2016-06-05T17:36:25.000Z
publishDate: 2016-06-05T17:36:25.000Z
episodeNumber: "65"
podcastFile: arrested-devops-podcast-episode065.mp3
episodeImage: episode/img/finding-signal-in-the-noise.png
episodeBanner: /episode/img/finding-signal-in-the-noise-banner.png
images:
  - /img/social/fb/finding-signal-in-the-noise.png
guests:
  - person: jdixon
    snapshot: jdixon
  - person: alakhani
    snapshot: alakhani
hosts:
  - mstratton
  - bkromhout
sponsors:
  - 10thmagnitude
  - datadog
aliases:
  - /65
  - /findingsignalinthenoise
youtube: 6YYVayCRfgI
explicit: yes
transcript: finding-signal-in-the-noise
---

Matty makes a triumphant return alongside Bridget to talk modern monitoring with two people who build it for a living. Jason Dixon works on Monitorama and open source projects like Graphite, was finishing up at Librato and about to move to a startup called RainTank, and Aneel Lakhani works at SignalFx, both monitoring-as-a-service providers. Aneel says he is nearing 20 years of full-time ops work, and that he started at 15 with a tech support job. The show opens on the exchange that Bridget calls serverless nonsense "because there are still servers. You just can't SSH into them," and Aneel adds, "There are always servers."

## From Checks to Event Streams

Jason describes the old Nagios model as monitoring how something is doing right now, which loses the historical context of how the service has behaved. Over six or seven years, open source projects for different functional areas produced the event stream model, with collected metrics, window threshold queries and alerts, and eventually paid services for specific areas of the architecture. Aneel says the old way only asked about one thing, whether it was up, and nothing about the cluster, the service or the user's experience, and between checks you have no idea how it is doing. That isn't enough if you measure yourself on real performance for real people.

## Thresholds, Machine Learning, and Business Context

On thresholds, Jason says monitoring works like security in depth, with layers, since no single answer says how a service is doing. He is not a fan of machine learning as the solution, though it is a great addition, and thresholds are fine where you know what to expect. What matters is business context: am I doing the work I'm supposed to be doing, not just returning 200s? He recalls a customer at OmniTI who said something to the effect that they didn't care if their servers were on fire as long as they were making money. Aneel says people think moving beyond static checks is only for ephemeral infrastructure, but what you always wanted was to know whether you were within your expected performance envelope, and now you can measure it. Matty adds a story about a sysadmin alarmed that a database was at 90% CPU when it was SQL Server doing its job.

## The Single Pane of Glass

Matty asks "how big is your pane of glass?" Jason says a single pane is specific to your role, and that tools should be dynamic, which is why he built dashboards that let you look for hotspots on the fly, and says horizon charts are handy for spotting problems at the surface. Aneel, who spent a long time at IBM watching single panes come and go, says each role wants one, but the systems shouldn't be walled gardens, since the CEO's may be Tableau and marketing's Mixpanel. Data has to flow in and out so everyone can compose their own view. Jason says "if you're siloing your data within your organization, I think you have bigger cultural issues." Aneel describes a company where one metric, the number of documents users open in a time period, is tracked by everyone from the CEO to network engineering, though not every business reduces to one.

Bridget cites James Turnbull's point that the operations team isn't the only customer of monitoring, and concludes that it should be self-service and composable. Jason loves self-service monitoring, and describes a Heroku tool that queried Graphite and returned an HTTP status code, so anyone could put a check into Pingdom in minutes.

## Monitoring Is Testing With a Time Dimension

Matty quotes John Sheehan, from an earlier episode, that "monitoring is just testing with a time dimension," and asks customers whether something important enough to monitor in production is being tested. Jason jokes that testing is monitoring without context. Aneel says the engineers at SignalFx bake metrics into code from day one and carry pagers, and that if you want to know whether a change had its intended effect, the same metrics have to follow it from code through test, QA, canary and production.

Jason asks about usage-based pricing, which both companies use. Aneel says it is the scale of monitoring you want to do, not the number of things, and that it gives you freedom to change rates and stop measuring things, like buying bandwidth, but it comes with the mindset of iterating on which handful of metrics matter.

## What's Worth Monitoring

Jason says the most common and hardest question is what to monitor, and the honest answer is that you're the only one who knows. Aneel adds that the approach has to be non-static. He uses Kafka, which has no metric for average message size, though a change in message size affects throughput, unless the producers and consumers are designed for size to change. Bridget confesses to a cron job checking whether an Elasticsearch cluster had gone yellow, and Aneel says you should get one alert when a cluster changes status, not 40 alerts from static checks.

## Ephemeral Systems and Serverless

Jason cites an Adrian Cockcroft talk about systems moving from months to weeks to days to minutes or seconds with containers. You can't cron that, and hostnames don't matter since the system is gone before you finish a sentence, so you have to think in work units: how much work has to happen, and is it happening? Aneel says with Lambda-style systems you still measure the timing and performance of the functions and the experience downstream, and with service level objectives, changes in the underlying model change only how you measure. He also says ephemeral infrastructure isn't what drives the need for metrics. A customer of his runs 100 physical machines with 20 to 30 Docker containers each across five locations, measures performance so precisely they don't need auto scaling, and still wants metrics.

## Where to Start

Jason's advice is to start with open source until you hit the point where your time is better spent elsewhere, then outsource to someone like Librato or SignalFx, since knowing the technology makes you an informed shopper. Aneel recommends collectd as a collection agent, for its plugin ecosystem, and, compared with every other agent he has played with in 20 years, stability, though he says to watch its plugins. Jason trusts the team because many are OpenBSD developers, and says the biggest problem with agents is leaking memory and consuming CPU. Aneel adds that Graphite is a good starting point, and Jason mentions that his Graphite book is nearly done. For Windows, Aneel and Jason mention a collectd port by a team at Bloomberg, a PerfCounter reporter that SignalFx engineers wrote, and Metrics.NET.

Aneel returns to machine learning. In his experience in operations, he has never seen anything do better than about a 50% false positive rate. The right use is as an additional tool, like a system that classifies incoming metrics as in-line or out-line and sends the outliers to another process, and "the single worst thing you could do" is turn on an algorithm and let it generate alerts.

## Monitoring Versus Alerting

Bridget asks about the difference between monitoring and alerting. Aneel says "there's no monitoring without alerting": in operations, you monitor to figure out what is worth alerting on, and you should page only when something takes you outside the performance envelope of your service. Everything else should be an event you can go back and interrogate. Jason says alerting is a subset of monitoring, and the same data feeds capacity planning and analytics. Aneel adds availability to the mix: "if something is available and non-performant, it might as well not be available," so capacity, availability and performance move together.

## Closing Advice

Jason's advice is to "try not to chase the shiny stuff," to start with basics like instrumenting your code and to ask why configuration management providers don't do more to emit instrumentation to storage engines. He also says that if a tool is painful to use, try another, since there's so much choice now. Aneel says no one will figure out what metrics matter to you: "If you don't take responsibility for figuring out what metrics matter to you, no amount of money and technology is going to do that for you." Matty's version is that the hardest part of monitoring is figuring out what you care about.

* Jason's Graphite book: [Monitoring with Graphite: Tracking Dynamic Host and Application Metrics at Scale](http://shop.oreilly.com/product/0636920035794.do)
* James Turnbull's [Art of Monitoring](https://artofmonitoring.com/)

## Checkouts

* Jason - [Charity Majors' recent blog posts about serverless conf, etc](https://charity.wtf)

* Matt - [Fish-like autosuggestions for zsh](https://github.com/zsh-users/zsh-autosuggestions)

## Community & Event Stuff
If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at arresteddevops.com/conf

## Upcoming conferences

For any [devopsdays](http://devopsdays.org), try the code ADO2016! It should get you 20% off.

* DevOpsDays Silicon Valley June 24, 2016 - June 25
* DevOpsDays Minneapolis is July 20-21

### Open CFPs

* DOD Dallas & Raleigh June 19, Philly June 30, New York July 15, Singapore Aug 15, Detroit Aug 31
* New cities: Porto Alegre in Brazil, Baltimore


We have t-shirts now! And mugs! They are available at store.arresteddevops.com! Only unisex for now, but more styles coming! Buy one today. Or not. We’re not the boss of you.
