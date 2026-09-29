---
title: Chocolatey Goodness With Rob Reynolds
description: Rob Reynolds, creator of the popular Windows packaging tool Chocolatey, joins Trevor for a discussion on the future of the project, as well as some historical details on the journey so far.
date: 2016-01-30T15:25:47.000Z
publishDate: 2016-01-30T15:25:47.000Z
episodeNumber: "56"
podcastFile: arrested-devops-podcast-episode056.mp3
episodeImage: episode/img/chocolatey.png
episodeBanner: /episode/img/chocolatey-banner.png
images:
  - /img/social/fb/chocolatey.png
guests:
  - person: rreynolds
    snapshot: rreynolds
hosts:
  - thess
sponsors:
  - 10thmagnitude
  - datadog
aliases:
  - /56
explicit: yes
transcript: chocolatey
---

Trevor said a few things about Chocolatey on the switching operating systems episode that caught the attention of Rob Reynolds, its creator, so Rob comes on to set the record straight and walk through where the project is headed. Rob lives in Topeka, Kansas, is a senior software engineer on the Windows team at Puppet Labs, and created Chocolatey a little over four years ago. Trevor opens with an apology for spreading misinformation, and Rob's answer is that nothing said was really incorrect.

## Where Chocolatey Came From

Rob was moving from company to company and repeating the same silent-installer work each time, and he wanted to make the concept more global so he wouldn't have to keep restarting the wheel, including when he was outside the company firewall. He wanted to be able to sit down to pair with someone who didn't have Notepad++ and fix it quickly instead of doing "the nice long yak shave." At the time he was on the NuGet team, which had decided not to approach machine package management. They joked that if they ever built one they'd call it Chocolatey NuGet, since it wasn't vanilla NuGet packages, and the name stuck.

## The Community Feed and Trust

Rob's one clarification is that Chocolatey is a decentralized package management tool, and in production "you definitely don't want to be depending on the community feed." There is little control and very low trust there. Trust is something they are building, and package signing is the next big step, giving traceability from who you think created a package to who actually did. Companies can and do use Chocolatey by creating their own packages, hosting them on an internal repository, and never touching the internet. Community feed packages typically point to a binary at an official distribution point, with a checksum (many packages have one, some still don't) and the silent arguments to install or upgrade it.

Underneath, Chocolatey works through the NuGet packaging framework plus automation scripts, which are currently PowerShell, with Script.cs support to come. Script.cs is a C# scripting tool with a REPL that runs on Mono, which Trevor finds exciting.

## The Rewrite

Chocolatey started as a command line app written entirely in PowerShell, which meant starting PowerShell on every command and paying a one to two second startup penalty. It had about 20-some thousand lines of code and became interesting to maintain. For maintainability, speed and the possibility of going cross-platform, Rob decided to take the pain of a rewrite in C#. It was in beta for a while and came out that March. He says the goal is to make Chocolatey look like what you would expect from a Linux package manager, and that there is more work to do.

## Hosting Your Own Packages

Trevor asks how a company mirrors community packages when they point at external download sites, as when his Notepad++ install broke. Rob says you currently have to edit each package, a process called repackaging. The business version coming next year will make that a single command that fetches the package and its downloads, puts them internally, and rewrites the package to point there. The paid versions will also add virus checking and, for pro users still on the community feed, an alternate private CDN so a vendor's 404 doesn't break the install.

## Moderation, the Verifier, and the Validator

Rob says a free service still costs money, and after three or four years of running the site he had to decide whether to keep pouring money into it or find a business model. He ran a Kickstarter last year, which succeeded. Moderation was introduced in October 2014, and before that a package went live the moment it was uploaded. It was popular but they probably turned it on too early, before the infrastructure automation was ready. Some maintainers push up to 200 packages at a time, so automation on one side and human review on the other doesn't work very well.

A couple of weeks earlier they released the verifier, which checks existing packages every two weeks to see if they still install, and emails the maintainer if not. On new submissions it runs headlessly through Vagrant, installs Chocolatey, sets up a sandbox, installs the package, and checks the uninstall too. Chocolatey takes a registry snapshot on install so it can uninstall automatically, which means about 80% of packages need no uninstall script. The validator checks quality and consistency against about 35 rules, such as naming guidelines, where an icon is hosted, and use of Start-Process, and posts notes on the package page. Only when a package installs cleanly and passes validation does a human reviewer step in, mostly to read the install script and check that the download comes from the official distribution point. Rob says the messaging is not being reported back to users yet, because they want it short and rock solid.

Trevor asks about malicious packages. Rob says they haven't found one, but "it only takes one." They have seen packages that use SourceForge, which pulls down malware. To see more of what an install touches, they plan to add Turbo, a tool formerly called Spoon that can diff a container to show every registry key and file touched.

## Compared With Linux Package Managers

Rob says Chocolatey lacks virtual packages, so a package can't depend on "a PDF reader" and have Adobe or Sumatra satisfy it, and it lacks concepts like replaces or conflicts. It also has no package indexes, so it hits remote systems whenever you query. Checking for upgrades took about four minutes in the old PowerShell version and about 40 seconds in the C# version, which is still too long, and with indexes it should take under a second. It has a CLI and a GUI, called Chocolatey GUI, which Trevor suggests could be renamed.

## Growing Pains and Getting Involved

Microsoft's OneGet is a package manager aggregator that talks to other package managers, and the Chocolatey provider for it is unfinished, since the few volunteers working on it are stretched thin. Rob wants help from people who know PowerShell and C#, and would like it done in the first half of the year. He is also dealing with growth: downloads went from about 5 million total before moderation to, by his account, another 20 to 25 million in the following year, and the site handles about a terabyte a day and 4 to 7 million requests. Approvals have slowed, and "we've sort of failed, that we didn't get the automation in place as quickly as we needed to." He works on stability problems on his own time, sometimes taking PTO, because as the guy behind Chocolatey he hears about outages.

To get involved, Rob points to the mailing list and Gitter, taking over a package whose maintainer has disappeared, or the Up for Grabs items, which are often small and documentation-related. He says a longtime user told him "once you go chocolatey, you don't go back." Puppet has a Chocolatey provider and Chef has a cookbook, and there is more coming for offline use. Rob also likes the open source business model, since the paid version keeps driving features into the free one. His closing plea is for better documentation, and he ends with: "Chocolatey, it's awesome. Use it."

## Check-Outs

Rob's pick is Turbo, and he had another one he couldn't remember, so Trevor jokes it will be posted as Rob's latte thoughts. Trevor recommends playing with DSC and Windows Management Framework 5, Agents of S.H.I.E.L.D., and David Bowie's new video Blackstar. Rob adds that both Puppet and Chef have DSC providers, and that it is a sign of Microsoft doing things differently and more openly.

* [Chocolatey.org](https://chocolatey.org)
* [Chocolatey Mailing List](https://groups.google.com/forum/#!forum/chocolatey)
* [Chocolatey on Gitter](https://gitter.im/chocolatey/choco)
