---
title: "Fast and Furious: Configuration Drift"
description: One of the key technologies to help automate your DevOps environment is Configuration Management. There's a lot of chatter around what exactly this means, and how you can use it. Special panel guests Sean OMeara, Chris Webber, and Steven Murawksi join Matt and Trevor to talk about how Config Management can make your systems and stack more stable, predictable, and more fun to manage.
date: 2014-03-29T17:10:10.000Z
publishDate: 2014-03-29T17:10:10.000Z
episodeNumber: "9"
podcastFile: arrested-devops-podcast-episode009.mp3
podcastDuration: 01:05:24
episodeImage: episode/img/configuration-management.png
episodeBanner: /episode/img/configuration-management-banner.png
images:
  - /img/social/fb/configuration-management.png
guests:
  - person: someara
    snapshot: someara
  - person: cwebber
    snapshot: cwebber
  - person: smurawski
    snapshot: smurawski
hosts:
  - mstratton
  - thess
sponsors: []
aliases:
  - /9
  - /configurationmanagement
youtube: btr9WWi8hsc
transcript: configuration-management
explicit: yes
---

## Executable Documentation

Sean O'Meara of Chef, Chris Webber of Demand Media, and Steven Murawski of Stack Exchange each define configuration management a little differently. Matty calls it creating "a trusted target," since it's hard to automate deployment safely if you don't know what the systems look like. Chris, who works in Puppet, calls it "executable documentation that keeps reinforcing itself," which is accurate "assuming no one SSHs to it and fixes it." Steven stresses that it's an ongoing process, not a setup script, and that it only manages what you explicitly tell it to, so anything you change outside of it is invisible. Chris has another framing: treat servers as software objects that happen to have "really crappy APIs," with Chef or Puppet as the better API on top. Sean gives it the widest umbrella, covering any technique for managing configuration and its complexity.

Trevor, who's only recently started using it, likes that there's no lost knowledge, because everything done to a server is in the scripts. Steven says small-shop admins tell him they only have a handful of servers, until hardware fails and they're asking what registry key or service they had to tweak four years ago. Trevor's example is a coworker who objected to scripting the WebSockets setup when he could just click through Server Manager. The script came to two lines, and the coworker's reaction was "oh, that was way easier than I expected it to be."

## Easier to Build a New One Than Fix a Broken One

On the business problems it solves, Matty says a trusted target enables more automation in the delivery process and shortens the feedback loop. Chris started out just wanting the same SSH config on every box, but what won people over wasn't Puppet itself. It was the stored configuration, which gave him a database of facts about every machine, and, for DBAs, machines that looked identical, down to the roughly 30 users Oracle needs before you can even install it. Matty adds that it kills "it worked on my laptop," and that laptops, outside the VMs on them, "should be used for email."

Steven's case is the one box out of four that behaves differently. Instead of two hours troubleshooting, reimage it in 20 minutes and pull its logs offline. Matty's rule: "it should always be easier to build a new environment than fix a broken one," and his nightmare is finding out months later that one of 300 web servers is different from the other 299. That leads to the Mark Burgess line, as Matty and Steven both recall it, that once someone logs in interactively you no longer know the state of the machine. Steven adds that even a login can trigger startup scripts or Group Policy.

Matty's own version: he was new to Puppet, saw broken images in QA, SSHed in and fixed a symlink by hand, and the developer confirmed it was working. Fifteen minutes later it was broken again, because a Puppet run had undone his fix.

## Monoculture, Images, and Why Immutable Is the Wrong Word

Sean says a common way operations shops manage complexity is monoculture, being a Windows 2003 shop or a RHEL 5.8 shop until the next refresh. With configuration in code, moving from RHEL 5 to RHEL 6 means diffing the two and adjusting the policy, instead of boiling the ocean, and "it's a huge bummer when you want to run software and you can't because you're on a 10-year-old operating system." Steven agrees that easy replicas and version control make testing a new OS much less scary.

Sean dislikes the term immutable servers, because systems still need small changes. His examples are adding a machine to a load balancer pool and updating one firewall rule across a cluster: are you going to destroy every machine and push another 4 gigabytes down a pipe "when you need to change literally one line of config"? Matty explains the Netflix-style canary release that inspired the idea, and when Matty notes that most people aren't deploying ten times a day, Sean's answer is "they should be." Containers, Sean says, are really execution management and don't conflict with configuration management.

Matty credits Lucius from Food Fight with the term "leaden image" as opposed to a golden one, and a coworker suggested "brown and serve." Sean's position is that "images aren't bad. It's the loss of the resolution about the details of the image that's bad," as when teams with new VMware clusters hand-tuned a VM, snapshotted it and treated the snapshot as the artifact. Chris tells his developers that editing config on a box is like changing production code and never checking it in, or attaching a debugger to a running process and leaving no record. Sean's version: "why should my NTP configuration be any different than your HTML file? Stop it."

## Same Test-and-Repair, Different Attitudes

Sean starts with what the tools share. They all derive from the idea CFEngine introduced, convergent test-and-repair operations: don't write the file if it's already right, don't install a package that's already there. A lot of people call that idempotent, he says, and he thinks they're wrong. Promise bundles, Puppet modules and Chef recipes are all named groups of those operators, and the tools differ in their philosophies on ordering and in language, with plenty of people detesting Ruby "with the blaze of a thousand hot suns."

Chris's short answer to Puppet or Chef is "just pick one and go with it." Puppet limits what you can do, so there's less chance to shoot yourself in the foot, and its dependency graph means a failing web stack doesn't keep SSH from being configured, which in Chef's run list could lock you out of the box. The flip side is that string manipulation, "90% of configuration management sometimes," is painful in Puppet. He used to steer old-school ops people to Puppet and developers to Chef, but isn't sure that still holds.

## DSC and the Windows Problem

Steven says PowerShell Desired State Configuration "probably isn't ready for prime time yet as a standalone config management thing." Its key piece is the Local Configuration Manager, an agent on every Windows box reachable over WinRM, with a standard way to define and send a configuration, in the hope that Chef, Puppet and the rest will use it. He's been playing with its minimal built-in pieces at Stack Exchange, but wouldn't push anyone to be solely a DSC shop unless they were entirely Windows. Matty sees DSC as the agent that Chef can hand off to: a Chef recipe that runs a PowerShell script can only report an exit code, not confirm everything is as it should be. Steven adds that from Server 2012 on, PowerShell coverage grew from about 200 commands to about 2,400.

Chris says the hurdle on Windows is that Linux has a "package config service trifecta," and IIS on Windows doesn't; getting over it took "lots of bourbon." Matty spends his days configuring Windows with Chef: IIS is manageable, but a SQL Server cookbook works well for the single-exe Express edition and is much weaker for Standard or Enterprise, and it won't fix a changed configuration. Steven says official support for non-OS products is thin because DSC only shipped about six months earlier, and product teams respond to customer pressure. He curates the community repository at PowerShell.org, and tells Matty: "file an issue on GitHub. Seriously."

## Where to Start

Chris points people to the Chef and Puppet Labs tutorials and to writing a little code, since "it's just like code." Sean's advice is to start small, model one class of machine, and resist using community cookbooks and modules at first: you'd need to be an expert in both the technology and the tool to read the errors. Writing your own makes the learning curve less steep. Chris likes starting with something identical everywhere, like SSH, and his first host entry points back to the Puppet master so a broken resolv.conf can't strand a box. Sean's advice on DNS: "Don't try to start DNS."

Steven suggests starting from your server deployment checklist: his Linux checklist had four items, his Windows one about 30, which is why building resources for it became his way in. Sean and Matty add that the most effective step is translating existing runbooks, not pasting them in. Sean tells of a customer with a runbook an inch and a half thick, and translating it exposed gaps: "install Apache. What version of Apache?" Chris asks vendors to publish a module alongside their docs, "in that format instead of English, which sucks for describing the actual state of the world."

## Tools Are Cultural Artifacts

On the future, Chris says servers become software objects in "one gigantic development codebase." Sean thinks configuration management is "gonna eat the world" as developer culture does, since "tools are cultural artifacts." Steven expects the Windows space to be ripe for an explosion, and points out that executable documentation doesn't go stale like the inch-and-a-half binder. Trevor closes with what he remembers Matty saying earlier: the end of caring about individual machines, because you just spin one up and it stands up exactly as expected.


