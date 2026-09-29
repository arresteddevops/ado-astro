---
title: Microsoft Redux with Liam Bennett, Brandon Olin, Reuben Dunn, Glenn Sarti, and Chris Hunt
description: It's been almost two years since we've talked about doing DevOps in Microsoft environments, so it's about time to do it again. And it's one of our largest panels yet!
date: 2017-01-26T18:35:30.000Z
publishDate: 2017-01-26T18:35:30.000Z
episodeNumber: "81"
podcastFile: arrested-devops-podcast-episode081.mp3
episodeImage: episode/img/microsoft-again.png
episodeBanner: /episode/img/microsoft-again-banner.png
images:
  - /img/social/fb/microsoft-again.png
guests:
  - person: lbennett
    snapshot: lbennett
  - person: bolin
    snapshot: bolin
  - person: rdunn
    snapshot: rdunn
  - person: gsarti
    snapshot: gsarti
  - person: chunt
    snapshot: chunt
hosts:
  - mstratton
  - thess
sponsors:
  - 10thmagnitude
  - victorops
  - hired
aliases:
  - /81
  - /microsoft2
  - /windows-redux
  - /microsoft-redux
  - /microsoftagain
youtube: rsnxc1l3Fz8
explicit: yes
transcript: microsoft-again
---

Almost two years after the first episode on DevOps in Microsoft environments, Matty and Trevor bring back a panel that Matty bills as the largest in the show's history. Trevor's microphone fails almost immediately, so Trevor mostly appears through Matty's paraphrase and a checkouts segment near the end. The panel is Liam Bennett, who works at a managed hosting provider on Windows workloads across AWS, Azure and GCP and released many of the community Puppet modules from time at OpenTable, Brandon Olin, a systems engineer at Columbia Sportswear, Reuben Dunn, DevOps practice lead at Freedom in New Zealand, Glenn Sarti, a senior developer at Puppet specializing in Windows, and Chris Hunt, a Windows platform engineer at Ticketmaster who runs a DSC implementation approaching 1,000 nodes on a pull server. Matty works at Chef, after a pre-vendor career mostly as a Windows sysadmin. Liam's cold-open line is that "we're in this age of just kind of madness."

## What's Working

Chris says DSC works, with the caveat that it's challenging. Brandon says it's automation pipelines and ChatOps to expose tasks to groups who don't have the skills or access. Glenn says PowerShell has been an absolute saver, and Reuben adds PowerShell and Chocolatey for distributing everything from desktops to test environments. Matty notes that a robust shell and package management are what the Microsoft world lacked, and that the old automation in VBScript was really macros. Brandon says they don't like to talk about the VBScript days, and Chris says it took about 10 years before they had a way to package and distribute modules.

## Open Source Comes to the Windows World

Matty asks about sharing code in a historically closed-source platform. Liam says many organizations needed Microsoft to make the first move, and that "it required Microsoft to make that first move," because after Ballmer stepped away in 2014 the company got permission to change, and that gave everyone else permission. Chris says Microsoft had a history of building its own version and killing an open source project, and now seems to contribute instead. Glenn says that having worked for banks, military and government, contributing outside the firewall is still a big challenge. Brandon says using open source is a lower barrier than contributing back. Matty says it's often lawyers worried about setting precedent for other IP, and about telling apart plumbing from what's different. Chris says permissive licenses like MIT have helped, since companies now separate plumbing code from business code.

## The .NET Developer Stack

Matty asks whether anyone deploys with Microsoft's stack. Reuben's team uses TeamCity, not VSTS, and objects to building differently on a server than locally, and to the one-pane-of-glass developer experience and right-click publish: "their definition of done, when they're finished is just a package," which is fine for a monolith but makes ops people mad in distributed computing. Matty recalls the stack being built around a developer with a codebase spraying it somewhere, config transforms and a per-seat license of $8,000 to $10,000 for every sysop who needed to deploy, so everything ended up manual.

Liam says culturally "you win most of these places over just by making it easier." Once you beat the Microsoft tool once or twice, people begin to question the rest. Liam sees TeamCity and Jenkins increasingly, and the source control part of VSTS dying quickly as Microsoft itself moves to Git, with the Windows core apparently 40 billion lines of code. Matty ties it to the old "Microsoft is the answer, what's the question" attitude, and to Microsoft's own not using SCOM to monitor microsoft.com. Matty adds that the company has improved by decoupling, and that its leadership and engineers get it, while middle management and sales might not.

## Bringing Puppet and Chef to Windows

Glenn says some people used Windows in the dark days and never want to touch it again, and some new ones love Visual Studio, and Glenn has even met a Linux admin who loves PowerShell. The bigger shift is teaching people to model architecture, since Windows admins are used to next, next, next, finished. Matty compares it to Microsoft's own Office for Mac lesson: a tool should fit where its user's comfort zone is. Glenn says Chef and Puppet need to do a better job onboarding Windows people.

Matty recounts Jeffrey Snover's line that Linux is a document-based operating system and Windows is API-based, which is why IIS, being document-based, is the easy example. Bootstrapping is easy on Linux with SSH, while enterprises turn off WinRM, and securing it means running a command and setting registry keys, not dropping a file. Brandon says onboarding matters because if Windows admins hit roadblock after roadblock, they'll give up. Glenn praises the Docker for Windows installer as the best of both worlds. On DSC, Chris says it's "delightful for about one server, and then after that it starts to go downhill," and Brandon says you need a management platform, which is where Chef and Puppet come in. Matty quotes Snover that DSC is a printer driver and Chef or Puppet is Microsoft Word.

## Maturity, Culture, and Table Stakes

Liam says initial usability of the tools is pretty good now. The roadblock is the second and third step of maturity, managing a whole fleet, and that story isn't told well. It depends on the company: if config management is in an internal IT organization that doesn't think of IT as its business, the jump feels epic. Matty says it's Conway's Law, and that in a low-trust culture people argue with math, as Adam Jacob says. Matty also notes that what vendors consider table stakes, like testing infrastructure code, isn't. Brandon says quite a few admins still use ".bak as their source control system," and one colleague with 30 years in IT said they were learning their job all over again.

Chris thinks Linux configuration management came from developers and Windows from ops. Matty has seen many Windows admins shred PowerShell and many Linux admins who want a click-button tool, and "being bad at command line knows no operating system." Liam calls this a golden age of managing Windows, with config management, Terraform and the PowerShell gallery, yet just as people reskill, the industry pulls the rug out with containers and .NET Core on Kubernetes. Liam sees mostly the other end, legacy apps never written for this, and cites that apparently 30% of Windows workloads on AWS are 32-bit.

## Advice and Daily Drivers

Matty's advice is not to boil the ocean or fall into analysis paralysis: don't design high availability before you have one node under management, write some code and improve later, and avoid yaks. The principles, like continuous delivery practice and thinking of infrastructure as code, carry over when tools change, and they are harder than learning any syntax.

Asked for their daily drivers, Brandon uses an old Mac Pro running Windows 10 through Boot Camp, and PowerShell is the indispensable tool, Chris a corporate Lenovo with Visual Studio Code, Glenn a MacBook Pro with Windows 10 and no macOS, with Hyper-V and VS Code, Liam Ubuntu with Atom and a Windows VM, and Reuben a Surface Pro 3. Matty notes it is ironic that VS Code's Git integration is better than Atom's. The checkouts include Liam's pick of Terraform and a forthcoming book on it, Brandon's Operation Validation Framework and Pester, Reuben's Serilog and Seq, Glenn's Neo4j and Flow Perth's hack days for nonprofits, and Chris's GitKraken.

[DevOps Cafe w/ Jeffery Snover](http://devopscafe.org/show/2012/11/27/devops-cafe-episode-36.html) - Linux is docs based, Windows is API based

## Check Outs

### Liam
- [James Turnbull Terraform Book](https://terraformbook.com)
- [Black Mirror](https://en.wikipedia.org/wiki/Black_Mirror) - My latest show to binge watch

### Brandon
- [Infrastructure testing with Pester](https://github.com/PowerShell/Operation-Validation-Framework)

### Reuben
- [Paramore, aka Brighter](https://github.com/iancooper/Paramore) - My goto reference implementation for understanding how to write robust “microservices” that gives you options
- https://serilog.net/ & https://getseq.net/ Logging is the “new” debugging...
- [Phil Haack - Be the scientist](https://github.com/github/Scientist.net)

### Glenn
- [neo4j](https://www.neo4j.com) Graph database- Works on Windows too!  
[Free OReilly ebook on graphdatabases](http://graphdatabases.com/)
- [Flow Perth](http://www.flowperth.org) create unique events in the technology community bringing skilled volunteers and not-for-profits together

### Chris
- I’m a big fan of [GitKraken](https://www.gitkraken.com/). I can actually do some useful things with Git without spending a couple hours reading man pages.
- [termeter](https://github.com/atsaki/termeter) - A Go app for “rendering” ascii graphs in the console.

### Trevor
- [Blue Raspberry](http://www.bluemic.com/products/raspberry/) Portable mic I’m looking at getting, tired of lugging the Yeti around (much like the 17” laptop I abandoned for my Surface)
- [Factorio](https://www.factorio.com/) - super fun collaboration game
- [pvpgn](https://github.com/pvpgn/pvpgn-server) open source classic Battle.net + Westwood server, got it running- trying to stand it up inside habitat now

### Matt
- Maybe weird to talk about Apple-only app on the Microsoft show, but I’m now enamored with [Bear Writer](http://www.bear-writer.com/) - just a nice markdown notes thing.
- I’m kind of obsessed with [Golang](https://golang.org/) now - the [go Fundamentals Pluralsight course](https://www.pluralsight.com/courses/go-fundamentals) by [Nigel Poulton](https://twitter.com/nigelpoulton?lang=en) was pretty dang rad
