---
title: Ignite 2018 Catch Up with Ed Thomson
description: Trevor is joined by Edward Thomson at Microsoft Ignite 2018, and have a quick catch up on the event and the state of the DevOps world.
date: 2018-10-16T00:55:48.000Z
publishDate: 2018-10-16T00:55:48.000Z
episodeNumber: "117"
podcastFile: arrested-devops-podcast-episode117.mp3
episodeImage: episode/img/ignite-2018-ethomson.png
episodeBanner: /episode/img/ignite-2018-ethomson-banner.png
images:
  - /img/social/fb/ignite-2018-ethomson.png
guests:
  - person: ethomson
    snapshot: ethomson
hosts:
  - thess
sponsors:
  - chef
  - datadog
aliases:
  - /117
  - /edward-ignite18
  - /ignite2018ethomson
explicit: yes
transcript: ignite-2018-ethomson
---

Trevor talks with Edward Thomson, a program manager on the Azure DevOps team at Microsoft, at Ignite 2018. Edward came to the role about a year and a half earlier after writing software at Microsoft and at GitHub, and is, in Trevor's words, "that guy from Office Space," the person who takes customer requirements to the feature PMs, not even to the engineers. The episode covers decades of version control, how Git got into Microsoft's tools, and what the Azure DevOps split means for open source projects. Trevor works at Chef and Edward's employer owns the products discussed.

## Program Manager

Edward says the role means different things for different people: feature PMs shape the direction of a component like Azure Repos, mastering the backlog, while Edward is more customer-focused and doesn't own a feature. Edward began with Git and version control customers and noticed that people now struggle more with the rest of the pipeline, so Edward looks increasingly at CI and CD.

## Decades of Version Control

Edward started in scientific computing, then went to SourceGear in central Illinois, where the first product was Source Offsite, a TCP/IP server layered over Visual SourceSafe to stop its habit of corrupting itself, then worked at Teamprise, building cross-platform clients for Team Foundation Server, until Microsoft bought the company. The requirement to explicitly check out files in early Team Foundation Version Control came from huge teams like Windows and Office: the Windows source tree is about 350 gigabytes, so scanning for changes would take forever. Later versions offered scanning, since most people don't have 350-gigabyte trees.

Moving Windows to Git was a challenge, since LFS pages in large files, not a giant tree. Edward's team built the Virtual File System for Git, a kernel driver built with the Windows team, because "nobody should trust me writing kernel code." A clone gets metadata only, takes about a minute or two on the Windows repository, and files are pulled from Azure Repos as they are opened. The first try at a 350-gig Git clone finished overnight, and git status took about eight minutes.

Edward says centralized version control still makes sense for game development, since TFVC lets you lock files and handles big files, that Perforce influenced TFVC, and that "Git is just dominant." Edward thinks SVN's time is past and appreciates Mercurial users.

## Getting Git Into Microsoft's Tools

Edward's friend Martin, who came over from Teamprise, pushed to bake Git into Team Foundation Server and what was then Visual Studio Team Services. Edward first thought it absurd, then they worked out how to put GPL code into Visual Studio. The lawyer for the developer division, who had been a software engineer, answered the pitch that it would be great, since the lawyer was tired of using GitHub for after-hours projects. Edward wrote much of the code, while Martin did the planning and "sneaky execution," including getting it past Steve Ballmer. The work used libgit2, which built a relationship with GitHub, and Edward later left Microsoft for GitHub's Git infrastructure team. Edward missed customer interaction and returned as a program manager, now writing code at night and on airplanes.

## The Azure DevOps Split and Open Source

Edward says it isn't a rebrand, since "rebranding suggests that all we did was change the name," and it was split into separate products like Azure Boards, Repos and Pipelines, so a Jira and GitHub shop can adopt just Pipelines. Services are free for up to five users, and open source projects get 10 parallel pipelines with unlimited minutes for free. Edward moved libgit2's CI, which used several providers of mixed speed, some paid out of pocket, to Azure Pipelines, with Mac, Linux and Windows agents, for lower cost and faster builds. Edward's answer to what open source projects want: "make it free." Because the agents are real virtual machines, QEMU can run PowerPC and ARM images, which Edward says libgit2 is about to add. Edward credits the DevDiv lawyer, Jason Barnwell, with changing Microsoft's open source culture, and Trevor says the explanation of the name makes sense, though some people object to it, and some CIOs might hear DevOps in a box.

## Announcements

Edward missed most Ignite announcements, as a last-day speaker. Trevor names Azure Blueprints, a governance framework that deploys a subscription with resources and policy, and, for Chef, the announcement of a managed Chef Automate service on Azure, which Trevor says is a private preview and describes as the first product Trevor has released as product owner. Edward is looking forward to seeing open source projects adopt Azure Pipelines.

Trevor is joined by Edward Thomson at Microsoft Ignite 2018, and have a quick catch up on the event and the state of the DevOps world.
