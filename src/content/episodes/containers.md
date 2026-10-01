---
title: Tupperware Party with Jérôme Petazzoni, Mark Heckler, and Jennifer Heckler
description: Bridget and Matt chat with Jérôme Petazzoni (Docker), Mark Heckler (Pivotal), and Jennifer Heckler (Edward Jones).
date: 2017-06-28T00:59:40.000Z
publishDate: 2017-06-28T00:59:40.000Z
episodeNumber: "89"
podcastFile: arrested-devops-podcast-episode089.mp3
episodeImage: episode/img/containers.png
episodeBanner: /episode/img/containers-banner.jpg
images:
  - /img/social/fb/containers.png
guests:
  - person: jpetazzoni
    snapshot: jpetazzoni
  - person: mheckler
    snapshot: mheckler
  - person: jheckler
    snapshot: jheckler
hosts:
  - bkromhout
  - mstratton
sponsors:
  - 10thmagnitude
  - victorops
  - datadog
aliases:
  - /89
youtube: p7WizGqjM5A
explicit: yes
transcript: containers
---

Bridget and Matty record at GOTO Chicago with three guests to talk about containers, with Matty playing the listener who knows very little about them. Mark Heckler is a developer advocate on Bridget's team at Pivotal, a Java and Spring developer who also works with Cloud Foundry. Mark and Jennifer Heckler, Mark's daughter and a programmer analyst at Edward Jones, gave a talk that morning on clouds and containers aimed at developers. Jérôme Petazzoni has been at Docker since before it was Docker and once managed a small team of SREs, before giving up the pager to explain Docker and containers to people. Jérôme says that adds up to six years of Docker experience "even though Docker is only 4 years old." Jennifer is the only person on stage who doesn't work at a vendor.

## From Lightweight VM to Just Processes

Matty asks what the paradigm shift is, since customers often just want to spin up a container instead of a VM. Jérôme says the lightweight VM idea helps people grasp what a container is, but it should be dropped quickly: "it's just processes," or for the technically inclined, cgroups and namespaces. Containers will be many things to many people, the way virtualization went from stacking machines on a host, to cloud APIs, to disposable environments for CI. Matty asks whether calling a container a lightweight VM is itself a wrong statement as a global claim, and Bridget says it depends on the use case. Jérôme sticks to the point, calling the metaphor "just the tip of the iceberg," and noting there are use cases where it doesn't make sense.

Mark adds the developer view, which is packaging. A VM is "just like driving a nail with a sledgehammer," while a declaratively configured image is repeatable, lightweight and easy to deploy. Bridget adds that a golden image stamps out your application and also a Heartbleed baked in, and Mark says rebuilding and retesting an entire golden image each time a backing service moves is heavy compared with a new Docker build.

## Runtimes and Choosing One

Bridget asks for the most incendiary line in the talk, and Mark says nothing was flame-worthy, except that some people will not run on a Docker runtime while others will only run on one. Every new Docker release brings cries of anguish when something breaks, and some people are frustrated by the move-fast approach. Bridget asks Mark to explain what a runtime is. Mark sketches runc for initiating containers from images and containerd as the Docker runtime, with other vendors using other execution engines: Joyent Triton, which Mark describes as running Docker containers on Solaris zones, Cloud Foundry, which builds a container per the Docker image format and still uses runc, and CoreOS Rocket.

Jérôme says Docker's strategy is to give people options, such as swapping runc for Rocket, or SwarmKit for Kubernetes, and compares the choice to picking a hypervisor. For a first cloud VM, you shouldn't spend an hour deciding between EC2 and DigitalOcean, and after hacking at the "cloud jungle" with a machete you'll know enough to choose. Matty agrees that you can't judge engines by letters you don't understand yet, and that "you'll know you need a scheduler when you need a scheduler."

## Diving In

Bridget asks Jennifer about the actual adoption at Edward Jones. Jennifer says some teams are using containers, and some even run in production, which Jennifer only learned a few weeks earlier. Jennifer describes the financial advisors as the main moneymaker, and the concerns as security and reliability across six time zones. Containers connect to reliability because a sick container is replaced by a new one. Jennifer describes approaching the topic like standing on a beach and looking at the ocean, trying to find where to enter the water, then downloading VirtualBox, Docker, Kubernetes and PCF Dev, following Docker's docs, and running commands like ps to see the output. Jennifer says "You're not gonna horribly break something." Mark adds that Mac users should use the stable builds of Docker.

Matty, who uses Docker to test cookbooks because a container is faster than a VM, warns that at some point you have to test on something that looks like production, unless production is a container. Mark agrees that less deviation between dev, test and prod is better. On databases, Jérôme asks "should you be running your database in the first place?" If you have one Postgres server and a manual failover in the middle of the night, it probably shouldn't be in a container. If you spin up thousands of databases, say one per CI test, containers pay off. The one deviation Jérôme encourages between prod and dev is running the database in a container in dev when production uses a third-party service.

## Ops Visibility and Buildpacks

Matty says ops people see a container and ask what the hell it is. Bridget asks whether it holds an unpatched operating system. Jérôme calls the fear unfounded technically, but says techniques that work with VMs don't map to containers, and uses SSH as the example: you can attach a shell to a running container, so there's no need to cram an SSH server and keys into it. Communities, vendors and bloggers exist to share those tricks.

Mark raises the difference between a Docker image and a Cloud Foundry buildpack, where the container is built around your application. When something like Heartbleed hits, the ops team can patch the underlying platform and reach into those lower layers, so developers don't need to rebuild, and Mark says "That's good and bad, right?" Matty says Habitat is a similar idea of abstracting a layer away.

## Domain Experts and Guardrails

Bridget asks what to tell a developer who wants to create their thing and not care about buildpacks. Matty says to get off "this full-stack nonsense," since domain experts need to be domain experts, and that whatever is built, be it a Docker image, a Converge node or a binary, is an artifact that should be tested for compliance on its way through deployability. Jennifer says there are two sides: wanting to customize everything, and not having all the time in the world. Matty adds the example of a developer who reads on Stack Overflow that disabling SELinux helps a Node app and changes the cookbook, and says guardrails and fast feedback catch that before security wags fingers. Jennifer says you have to know what's valuable to your company. For a financial firm, that means regulation and privacy, plus user experience teams that once rejected a product for not being user-friendly to financial advisors. Mark says it's a matter of prioritization, developing your expertise and relying on others, and that containers "don't fix your broken culture."

## Aha Moments

Matty asks for the surprising moment. Jérôme says there was no single one, but a series of crazy experiments, such as running a container on Linux that held a VM showing a screen of Moby running containers inside containers. Matty compares it to Sean O'Meara's configuration management parlor trick of CFEngine installing Puppet that configures Chef. Mark's moment was a gradual realization, from asking why we need this when we have VMs to spinning up Redis or Mongo in containers and seeing the potential. Jennifer says reading Docker docs wasn't enough until building and deploying a simple application, with the realization that you deploy one application in one container, not onto a massive piece of machinery.

Bridget asks Jérôme for a two-sentence explanation of Moby, and the answer is one: "Docker Inc. is a company that makes Docker, a product that uses Moby, an open source project." Jérôme credits Laura Frank with the explanation.

Bridget and Matt chat with Jérôme Petazzoni (Docker), Mark Heckler (Pivotal), and Jennifer Heckler (Edward Jones).

* Mark & Jennifer's GOTO Chicago talk: [Clouds & Containers: Hit the High Points and Give it to Me Straight, What's the Difference & Why Should I Care?](https://gotochgo.com/2017/sessions/38)

* Jérôme's GOTO Chicago workshop: [Container deployment, scaling, and orchestration with Docker Swarm](https://gotochgo.com/2017/workshops/21)

## Community & Event Stuff

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)

### Upcoming conferences

### Open CFPs

* [lots of DevOpsDays](https://devopsdays.org/speaking)
