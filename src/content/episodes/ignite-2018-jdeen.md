---
title: Ignite 2018 Catch Up with Jessica Deen
description: Trevor is joined by Jessica Deen at Microsoft Ignite 2018, and have a quick catch up on the event and the state of the DevOps world.
date: 2018-10-16T01:55:48.000Z
publishDate: 2018-10-16T01:55:48.000Z
episodeNumber: "118"
podcastFile: arrested-devops-podcast-episode118.mp3
episodeImage: episode/img/ignite-2018-jdeen.png
episodeBanner: /episode/img/ignite-2018-jdeen-banner.png
images:
  - /img/social/fb/ignite-2018-jdeen.png
guests:
  - person: jdeen
    snapshot: jdeen
hosts:
  - thess
sponsors:
  - chef
  - datadog
aliases:
  - /118
  - /jdeen-ignite18
  - /ignite2018jdeen
explicit: yes
transcript: ignite-2018-jdeen
---

Trevor talks with Jessica Deen, a cloud developer advocate at Microsoft, at Ignite 2018. Jessica's last name is spelled with two Es, no relation to James Dean, and Jessica focuses on Azure, open source, Linux, DevOps, containers and Kubernetes. Trevor works at Chef, and Jessica's employer owns the products discussed.

## The League

Jessica is part of the DevOps advocacy team led by Donovan Brown, which the team calls the League, and whose stage motto is "rub a little DevOps on it." The team splits between dev-focused and ops-focused members, and Jessica says they try to embody the culture they talk about. Three members were at Ignite, all five at Build earlier in the year, and they keep in touch to borrow each other's knowledge even when apart. That week Jessica was in Scott Hanselman's general session showing Azure DevOps, led a 75-minute container DevOps session, recorded for Channel 9, gave an MVP interview and led another session with JFrog.

## Everything Goes Back to DevOps

Asked for a favorite topic, Jessica says every topic goes back to DevOps, even Kubernetes, Helm and Draft, which are built on infrastructure as code and automated release, like the Jim Carrey movie where everything adds up to 23. Jessica mentions Donovan opening sessions with a pit-crew video. A technical glitch that day meant switching to a failover demo: "I work in ops and I consider redundancy."

Announcements Jessica lists: serverless in Kubernetes clusters, tying Azure Container Instances into the Kubernetes service, changes to Cosmos DB billing, and the rebrand from VSTS to Azure DevOps. Another announcement, which Corey Sanders tweeted after leaving it out of a blog post, is a virtual machine image builder based on HashiCorp's Packer, supported for Ubuntu 16.04 and 18.04 and in private preview, with Windows containers on the roadmap. Jessica also learned this week that a KubeCon talk on Windows containers with Patrick Lang was accepted. All sessions were recorded and uploaded quickly, so Jessica watched the recording of a session the next day and will queue some for a flight. Jessica says staying current is hard even inside Microsoft: someone asked about in-cluster ACI and AKS three hours after it was announced, and the answer was that it was news to Jessica too.

## Prioritizing What to Learn

Jessica says "I need a Kanban board for my brain," and uses Trello for personal projects, demos and new content. Jessica is known for a dotfiles project called Badass Terminal, named by the community and popular on Reddit, which works on macOS, Windows Subsystem for Linux and Ubuntu, and opens PRs for the community. Trevor admits not having learned Kubernetes yet, and Jessica offers sessions and demos.

## Conference Feedback

Jessica says this may be the largest Ignite ever, and the conference center is about half a mile end to end. The recurring complaint in Jessica's session feedback was that rooms were cold, which the speaker didn't control. The moral: "always relay your feedback to the people who can make that change," using the survey for logistics and leaving session feedback for speakers and content.

## Kubernetes for Realsies

Jessica's content is mostly at the 200 to 300 level, and Jessica wants a real-world demo of a stateful application with a database: WordPress with Helm charts and MySQL on a persistent volume claim, then high availability, failover, load balancing, canary and blue-green deployments, using NGINX ingress or Azure's HTTP routing and Istio for traffic splitting. Jessica wonders whether the database belongs in Kubernetes or an external service. Trevor notes the trouble of finding an open source legacy application with a complex enough architecture, and used an old movie database sample from ASP.NET MVC 1. A working title for the session: Kubernetes for realsies.

## Know What's in Your Images

Jessica talks about artifacts: if you use an upstream image from Docker Hub you don't control what's in it, and if you write your own, you own the vulnerabilities, such as one Alpine Linux announced the day before. A base image with vulnerabilities baked in carries them through a multi-stage build. Jessica mentions a post by Jess Frazelle that found about 700 versions of Java in one image. Jessica's practice: "build small containers." An example is cloning a private repository in one stage without baking a personal access token or SSH key into a layer, with the artifact passed to a final image. Using Debian the image is about 86 megabytes, and with Alpine about 8.

Jessica tells Trevor that as a former consultant Jessica said "good, fast, and cheap. You can only pick 2." Pulling an image from Docker Hub is cheap and fast, but you don't know if it's good. The week's big takeaway: "there's 30,000 new people that I never knew existed that are obsessed about the same technology stuff I am."

Trevor is joined by Jessica Deen at Microsoft Ignite 2018, and have a quick catch up on the event and the state of the DevOps world.
