---
title: Catching Up With Steven Murawski
description: Trevor catches up with Steven Murawski at Microsoft Build 2019 about learning from failure, testing infrastructure as code, PowerShell 7 and Windows Terminal, and the growing interest in SRE.
date: 2019-05-23T21:05:33.000Z
publishDate: 2019-05-23T21:05:33.000Z
episodeNumber: "130"
podcastFile: arrested-devops-podcast-episode130.mp3
podcastDuration: 36:16
episodeImage: img/episode/default.jpg
images:
  - img/episode/default-social.jpg
guests:
  - person: smurawski
    snapshot: smurawski
hosts:
  - thess
sponsors:
  - datadog
  - pagerduty
  - sdt
  - agiledevopswest
aliases:
  - /130
  - /stevenmurawski
explicit: no
transcript: steven-murawski
---

Trevor catches up with Steven Murawski at Microsoft Build 2019, the first appearance since Ignite. Steven is a cloud advocate at Microsoft focused on the operations side of DevOps, site reliability engineering and cloud-native operations, and the two worked together at Chef. They first met on an early episode about PowerShell Desired State Configuration, when Steven was at Stack Overflow. Trevor is still at Chef and has a workshop, a session and a keynote demo coming at ChefConf. The cold open is Steven joking about a movie scene where someone is taken out back and "you'd hear a bang."

## Ignite the Tour and Learning From Failure

Ignite the Tour is Microsoft's 17-city, six-month, two-day event with Microsoft 365 content and Azure learning paths for migrating apps, running services in the cloud and hybrid operations. Steven's team ran the modern operations track: infrastructure as code, instrumenting applications, troubleshooting in the cloud when you can't crawl under the floor, scaling and global resilience. A favorite session, with input from Jason Hand, was about responding to and learning from failure. A colleague, David Blank-Edelman, coined the phrase "you cannot fire your way to reliable": if people fear for their jobs they'll minimize their part and stop sharing what happened, so the question becomes what about the system allowed the failure and how to engineer it out. For bad actors, Steven says to minimize the opportunity with a just culture, and recognizes that HR or the law may be involved.

Steven says a core SRE question is the appropriate level of reliability. Some software, like airplane systems or pacemakers, needs better than five nines, while others don't, and incidents can show that the impact on users is lower than expected, so a service might need four nines. Trevor's example is a coffee shop site that only matters from 9 to 5. Fail gracefully in dependent apps, or invest more where a service is critical.

## Infrastructure as Code and Open Source Integrations

At Build, Steven's session was on infrastructure as code in a pipeline, focused on testing, because Steven likes code that does what it says. Steven has spent a lot of time on integrations with Ansible, Terraform, Jenkins and Spinnaker. People at Build see Azure and DevOps signs together and assume Azure DevOps is the only way to deploy to Azure, which isn't so. "We don't want you to have to change your toolchain just to be successful in Azure," whether it's Habitat, Chef, Ansible, Jenkins or Octopus Deploy. For people with nothing yet, Steven recommends Azure DevOps, but otherwise keep what works. Steven says a service company has to keep earning business: "If we can't make it easy and effective for you to consume our services, we're going to have a bad day," which Steven also liked at Chef's transition to services, unlike the old enterprise model of a pile of money up front.

## PowerShell 7 and Windows Terminal

Steven is excited about PowerShell 7, the next open source drop, moving from PowerShell Core to just PowerShell, built on .NET Core 3, with expected compatibility of 70 to 90% with Windows PowerShell and a path forward from PowerShell 5.1 to bring back into Windows. Steven notes AWS bakes PowerShell into its Linux images, and describes PowerShell Summit the previous week, with a new on-ramp track and scholarships. The biggest thing for Steven is Windows Terminal, which can host WSL, command.exe and multiple side-by-side PowerShell versions, making it possible to test across versions without a box per release. It was due in June, and Steven said "I want it now." They also talk about Cortana as a framework automakers build assistants on.

## Interest in SRE

Steven says a trend from the tour is interest in site reliability engineering, because operations people find its definitions more prescriptive than DevOps, which can feel fuzzy, like having a CI/CD pipeline. People ask whether SRE has to look like the Google book, and Steven says Microsoft is figuring out its own practice, and that service level indicators, objectives and error budgets give useful language for negotiating reliability. Monitoring also shifts: black-box monitoring of CPU and memory infers application behavior in a known environment, but in the cloud you need application performance metrics and the business drivers behind them. Trevor says the same question about DevOps having a uniform shape has the same answer: a core set of structures, and you figure out which fits.

Trevor chats with Steven Murawski of Microsoft about Azure DevOps, Windows Terminal and all the cool things from Microsoft Build 2019.
