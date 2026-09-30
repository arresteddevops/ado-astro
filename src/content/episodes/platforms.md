---
title: Platforms with Kelsey Hightower and Andrew Clay Shafer
description: If you build, deploy, and operate software in production, you have a platform. Andrew Clay Shafer and Kelsey Hightower discuss different choices available in the platform space, from unstructured to structured with all the considerations along the road to operational maturity.
date: 2016-01-13T18:09:26.000Z
publishDate: 2016-01-13T18:09:26.000Z
episodeNumber: "54"
podcastFile: arrested-devops-podcast-episode054.mp3
episodeImage: episode/img/platforms.png
episodeBanner: /episode/img/platforms-banner.png
images:
  - /img/social/fb/platforms.png
guests:
  - person: ashafer
    snapshot: ashafer
  - person: khightower
    snapshot: khightower
hosts:
  - bkromhout
sponsors:
  - 10thmagnitude
  - datadog
aliases:
  - /54
youtube: -1qhT4hcofY
explicit: yes
transcript: platforms
---

Bridget hosts solo and talks platforms with Kelsey Hightower and Andrew Clay Shafer, a colleague of Bridget's at Pivotal. The show opens and closes with Andrew's New Year's goal of being more like Kelsey Hightower, to which Kelsey replies that it is Kelsey's goal too and Andrew wishes Kelsey luck. It is a wandering conversation, and Bridget lets it wander, but the two of them agree on more than a cage match would need.

## From Automating Everything to Platforms

Andrew says it wasn't a moment when things switched. Andrew saw the same patterns of success across projects of many scales, and realized the architecture you are automating matters as much as the fact that you automate it, and that automation can entrench bad practices. Kelsey says when good patterns are found they become foundational, like moving something into a language's standard library. The trap is people wanting the platform to do everything, and if you're truly a unique snowflake you'll need third-party packages outside the standard.

Andrew separates standards from patterns, since standards aren't always good patterns, and says what we are participating in is a trend for complexity to move up the stack. As practitioners recognize patterns and abstract them, we can stop reimplementing them and solve some other problem that creates value for the business.

## Context Is the Missing Piece

Kelsey says people rarely account for situation. Kelsey's analogy is house hunting: the same style of house is built differently in the hills, the city or the suburbs. If you get one user per hour you can use almost anything for your platform, and if you get a billion requests per second some things that don't matter to the rest of the world matter to you. Engineers rarely get enough time to evaluate the full situation before someone says they need something by Friday.

Andrew adds that experience changes what you can see. Without scars, two solutions look equivalent when one is far better, though Andrew notes some organizations have frozen their tech stack in amber for a decade, so years of experience isn't the only factor. Andrew thinks microservices, platform as a service, DevOps and continuous delivery are all aspects of one phenomenon, the patterns from high-performing organizations that deliver services that are highly available and rapidly changing. If you want all those qualities, "you're going to converge on something that starts to look suspiciously like a platform as a service."

Kelsey says when it works, it works, and Andrew counters that everyone has a different threshold of pain and what they call working may not be. Andrew brings in Tolstoy: happy families are alike and unhappy ones are unhappy in different ways, and the high-functioning organizations look similar.

## Fashion, Tribalism, and Abstractions All the Way Up

Bridget asks what to pay attention to among containers, schedulers and orchestration. Kelsey says if managing infrastructure isn't your job, you pick a platform like Heroku and write the app. Otherwise you'll have to compromise: adopt something that exists, or use a fraction of it and build on top. Kelsey thinks the debate is fueled by emotional attachment to tools, and Andrew adds that "everything in tech, even though it looks like it's about logic and reason, is really about fashion and tribalism." Kelsey's version is that if you're great at Bash you attack every problem with Bash, like Batman's utility belt, and "You can write bad code in any language." Kelsey also thinks people play a zero-sum game, and abandon a platform like Heroku over one missing feature and reinvent the whole wheel.

Andrew describes the arc of the thinking as it played out for Andrew. You feel powerful the first time you configure a server with Puppet, and then 100 servers, and then you have Amazon, and it turns into the Fantasia broom story: the brooms become their own problem and you need another layer to orchestrate them. Bridget asks if it's abstractions all the way down, and Andrew says of course, the complexity is moving up the stack.

## Fear of Losing Control

Kelsey says there is a real fear of yielding control to a service that just works. If we do this long enough, will we never be able to buy a server and configure it, and end up renting forever? Kelsey half sympathizes, because some people want to look under the hood, though Kelsey says it slows platforms down: Cloud Foundry needs BOSH partly because it has to support so many install targets, and the number cited is 80,000. Andrew says some of the fear is people attaching their tribal identity to their tasks, so that the ability to do that thing is what defines them. Kelsey jokes about people who think they can hit eight nines in a single data center in their backyard, and Andrew calls it Dunning-Kruger.

Andrew points out that this replays every time: moving from assembler to C brought the same worry about losing control. "You don't fight the future. You just have to figure out where you want to live inside of it." Kelsey notes stuff from the '70s is still running, and Andrew describes sedimentary layers that never go away, pointing out that the mainframe business's top line grew every year for the last decade.

## Containers, APIs, and Unikernels

Kelsey says the true benefit of containers, stripped of hype, is that they let you swap out what's underneath more easily, and that the new legacy we create will be easier to deal with in 30 years. Andrew argues that much of the benefit comes from Linux having won as a standard: the syscall interface is what got standardized. Bridget notes cgroups and namespaces predate Docker, which made them accessible. Andrew agrees, but says what became accessible was using them, not the mental model of how they work, so what's being iterated on is the abstraction.

Kelsey says "containers mean nothing without the API," and when people say containers they mean Docker's API. Unikernels would only swap one containment technology for another, and you can't introduce a new containment boundary without an API. Andrew agrees they aren't usable until they're in fabrics with tooling like Docker's, and recommends an interview that argues unikernels are exokernels, which Andrew doesn't buy.

Kelsey also says "You should not be using Kubernetes directly for all of your needs." Kelsey works lower in the stack and Andrew higher, and if you're building a Cloud Foundry-like thing on top of Kubernetes, you're probably wasting someone's time. Kelsey's endgame is that you have an app in a bundle, and you don't care whether it runs on unikernels, VMs or containers.

## 12-Factor Apps and 12-Factor Ops

Andrew introduces 12-factor ops, the other side of the 12-factor contract. Each factor implies that something exists to make the app work, so if the app is configured through environment variables, something had better inject them. When people say they don't need a platform because they have Docker, Andrew says "that's adorable," and asks how they deployed things before platform as a service. Your platform might be Heroku, or a configuration management tool, or Julie running a shell script in a loop. Kelsey adds that we've neglected app behavior because humans will look at the logs and do the needful.

## How to Choose

Asked to be prescriptive, Kelsey has people whiteboard how their organization works before they look at tools, since no tool does everything, and then asks whether they are willing to own the missing piece. Andrew says to work out what you're trying to accomplish and back into a solution, and to think about how automatable your architecture is. Andrew gives an example: if your service needs an order-dependent stateful install process, that process is the lower bound on your recovery time, and in practice worse, because you have to figure out what state you're in and unwind first. Separating state from statelessness gives you more power regardless of automation choices.

Kelsey says people need to get over the hump of change, and some code changes need to be on the table. Andrew points to a sentence in the Borg paper that Andrew thinks most people miss, that most of what ran on Borg had an embedded web server broadcasting metrics about the application's health. Kelsey says we used to probe apps from outside with Nagios, and they should just report their health, as New Relic did by importing one package: "We've learned too much in 30 years. No more excuses." Andrew adds that Spring Boot ships with embedded metrics, and the Netflix open source circuit breakers come with those patterns.

## What Comes Next

Andrew expects mass enterprise adoption of cloud and many failures, because adoption isn't always enlightened. Andrew tells of being asked to help a company that wants the DevOps and then, after the analysis, asking whether Andrew could help them do it without changing anything. At that point, Andrew says, you should just use Puppet, because they have political issues to work through first.

Kelsey predicts people will be forced to outsource compute by things outside their control. Machine learning services, petabytes of data per day and IoT data volumes go beyond what a team can build, and Kelsey thinks there will be six or seven platforms that mature and work. Andrew adds that high performers didn't set out to do DevOps, they were pushed by Darwinian force, and the organizations that seem healthy haven't met theirs yet.

Kelsey's last word, on the Kubernetes workshop at OSCON that Kelsey now chairs, is a conclusion: "Most people do not want to run it themselves. It's a fallacy." So the material will be about what to do next.


