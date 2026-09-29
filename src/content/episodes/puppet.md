---
title: What Is New At Puppet? with Eric Sorenson
description: Special guest Eric Sorenson of Puppet Labs chats with Matt about all the new hotness with Puppet, including Application Orchestration. Plus, Matt and Eric put on their pundit hats and talk about the acquisition of Ansible by Red Hat.
date: 2015-11-25T14:12:13.000Z
publishDate: 2015-11-25T14:12:13.000Z
episodeNumber: "49"
podcastFile: arrested-devops-podcast-episode049.mp3
episodeImage: episode/img/puppet.png
episodeBanner: /episode/img/puppet-banner.png
images:
  - /img/social/fb/puppet.png
guests:
  - person: esorenson
    snapshot: esorenson
hosts:
  - mstratton
sponsors:
  - victorops
  - datadog
  - 10thmagnitude
aliases:
  - /49
explicit: yes
transcript: puppet
---

Matty catches up with Eric Sorenson, technical product manager for Puppet and the Puppet platform, about Puppet 4, the application orchestration announced at PuppetConf, and, once the two of them agree to put on their pundit hats, Red Hat's acquisition of Ansible. Matty says up front that he hasn't used Puppet in about three years, so a fair amount of this is a Chef person asking a Puppet person how things work now.

## Eric's Background and What Puppet Is

Eric's first CFEngine deployment was in 1998. Before joining Puppet in 2012 he built out a Puppet infrastructure at Apple for MobileMe and the iCloud services, and he moved to Portland partly for the cycling. Puppet itself is about 10 years old: he went back for a PuppetConf talk to the earliest commit in the Git repository, which turned out to be an import from Subversion, dated 2005.

For listeners who only know it as the thing that configures servers, the pitch is that you describe the desired state of your system in a domain-specific language and Puppet enforces that state on the nodes it runs on, in master-agent mode or standalone. Matty says the point is caring about what you want rather than how the sausage gets made. Eric agrees: "I want to have a delicious bratwurst at the end of it."

## Puppet 4 and the New Parser

Puppet 4 is the first major version since Matty last used it. The headline change is a completely rewritten parser for the Puppet language, which had been available for about a year behind a feature flag. Eric got in the habit of calling it the future parser, and now, as Matty puts it, it's the present parser: "Now it's the present parser and the previous parser is gone." The old one came out of what Luke wrote in a series of hotel rooms in 2006 and 2007, and Eric says it had a lot of emergent behavior, some of which people came to rely on and some of which was just odd.

The new one brings features people had asked about for a long time, like loops and iteration and a type system, where a module can declare what it expects passed in, such as a Boolean, one of three strings or a number. Most of it is opt-in, and Eric says Puppet 3 code is pretty much compatible. Puppet 4 syntax starts out looking like a Nagios configuration file, and you can add conditionals and loops as you need them.

On adoption, Eric points to EvenUp, a customer that went all in on the type system with Justin Lambert of the community driving it, and got a big gain in reliability and cleared out a lot of technical debt in their modules. About 17,000 Puppet 4 installations have checked in, though he has no numbers on how many use the new syntax. Puppet Forge's quality score, 1 through 5, includes a check that an uploaded module is compatible with the Puppet 4 parser.

## The Agent, the Compiler, and the Server

The other big change is the agent package. Following Chef's Omnibus lead, Puppet now ships an all-in-one package with a Ruby interpreter, Facter and OpenSSL, unified between open source and Puppet Enterprise, so Eric calls it "the one package to rule them all." He says that gives a consistent experience on older platforms like RHEL 4 and, in the commercial version, Solaris and AIX. He was surprised how much AIX is out there, and Puppet goes back to AIX 5.1.

Facter, roughly Puppet's equivalent of Ohai, was rewritten in C++ using Boost, and it is fast and still extensible in Ruby or with structured YAML or JSON. That laid the foundation for a demo on the PuppetConf main stage of a prototype of the Puppet compiler in C++, which Eric says is something like 50 times faster than the Ruby one. Matty points out that catalog compilation is the step that runs on the master, and Eric agrees that in agent-master mode "the bottleneck in Puppet is definitely the catalog compilation." On the server side, Puppet has been moving off Apache and Passenger, which could fall apart at large scale with erratic response times, to a stack written in Clojure running on the JVM through Jetty, with the Puppet masters inside JRuby.

## How Often Should the Agent Run

Eric wonders what it would look like if Puppet ran fast and cheap enough to be running all the time, converging across the infrastructure almost as soon as you push a change. Matty says some of the organizations he works with would be terrified by that, and want it running once a month, which is "scary as hell."

Eric understands where they're coming from. The CFEngine model was to run continuously and revert manual edits immediately, which we now call configuration drift. He thinks the shift has been toward understanding drift rather than auto-reverting it in a bastard-operator-from-hell way, with no-op or why-run modes that show what drifted without fixing it until someone acts. Matty adds the argument for frequency: the longer the interval between runs, the bigger the change when the agent finally makes it, and "more frequent, smaller changes really are safer." How often the agent runs should be a conscious business decision and not a limit of the technology.

## Application Orchestration

The product is called Application Orchestration, though Matty prefers choreography, in the Swan Lake sense, and Eric is a Balanchine fan. Eric's counter to the container hype is "even if you have containers, you still need orchestration." He hedges on calling it a game changer, since it may be one of the words that makes him cringe, but says it might be true here. It started as a prototype Luke wrote years ago, and this year the team productized it.

The idea is to apply the model-based approach Puppet uses for a single node's resources across the application. You describe the components, such as the database server and the app server, how they communicate, and what data one produces for another to consume, like a database connect string that you don't want hardcoded into the app server's configuration. A second part binds those component roles to nodes, which can be machines, VMs or containers. That binding feeds a version of the compiler that builds an environment graph, and a new deployer service walks it, contacts the machines in order, and if an earlier one fails, reports it and aborts the job. Normally you'd run the deployer from CI or the command line after a new commit is promoted, and the nodes talk back over a WebSocket each of them opens to a central service.

Matty is wary of people who think they have an orchestration problem that is really an architecture problem, and of people who want to use it as a script recorder for the manual runbook, with a sysadmin copying binaries and a DBA running SQL. If Puppet or Chef has told a node to install a package, you don't write a check that it got installed, and orchestration should be the same convergent idea with a bigger graph. Eric says there is a mind shift to go through, just as you wouldn't transcribe a bootstrap script line for line into your config management tool. He adds that the orchestrator ties together modules you already have or that are on the Forge.

Eric also tells the story of the keynote demo, done live by a teammate named Ryan. A chunk of the configuration was still commented out from an earlier trial run, so in front of 1,500 people he had to open vi and uncomment it. Eric says Ryan went into full Bill O'Reilly mode, with the profane live-demo catchphrase to match.

## Red Hat Buys Ansible

They announce they are moving to the pundit part of the show, and Matty promises to cut it if it goes badly. Eric's favorite reaction was that Red Hat probably could have gotten Robyn Bergeron back for less than $150 million, and Matty agrees that is the real reason. On the substance, Eric says the business logic makes sense because there was so much Red Hat DNA in Ansible already, and it fits the Red Hat ecosystem of Python tools. He sees the appeal in the low-friction model: you need Python on the box, SSH as transport and a root key, and you can run a sequence of commands across the fleet, which is like capturing an administrator's SSH steps in a repeatable way.

Matty says the ramp-up on Ansible is faster than Puppet or Chef, though in his mind that runway might run out quickly, and he wonders what happens to Windows support, since Red Hat has never had to do cross-platform work. Eric adds that Red Hat has a vested interest in people not running Windows, because they pay Microsoft for a license instead of buying a RHEL license. He says the Puppet integration with Red Hat Satellite 6 isn't changing, and that the Ansible piece is a separate layer of command and control, which he thinks was the point of the acquisition.

Matty recalls a note from Luke's keynote that fewer than 15% of enterprises use these tools, which is great for people in the space and also a little terrifying. Eric passes along a description from his old boss, Scott Johnston, now at Docker, of the other 85% as whitespace, and says this is why he promotes #HugOps: a small number of tool partisans want a deathmatch, and it isn't like that. Matty adds that when a customer isn't ready, he'd rather say so than sell them the wrong thing. If they buy it, hate it and implement it badly, they won't buy again next year, so it is bad business, and readiness is harder than the technology.

## What Else Is Happening in the Puppet Ecosystem

Working a demo booth at PuppetConf let Eric see things he wouldn't in his regular job. One was Gareth Rushgrove's work on a Puppet module for managing Amazon resources. The `puppet resource` subcommand can print Puppet code describing users or files on a system, and with the module it can do the same for AWS. You can build a VPC and instances in the web console, run `puppet resource` against the API, and get Puppet code you can check into Git.

The other was a talk by Dan Bode on using Consul from HashiCorp to build health checks into resources. Consul publishes a service to its registry only once the check passes, and takes it out when it starts failing, which gives a reactive picture of what is running on the network within 5 or 10 seconds. Eric ties it back to Matty's earlier point about verification being part of the resource.

Matty closes with two stories about HugOps from DevOpsDays Minneapolis. In one, Eric tweeted that when a bystander asked whether Puppet and Chef were going to fight, he and Sascha Bates said no, they were going to hug. In the other, Sascha said "friends are more important than where you work." Eric's own metaphor is that "it's all of us together in this tiny little boat trying to get across a giant sea of stupidity."

Various links referenced in the episode!

- [PuppetConf 2015 Videos](http://info.puppetlabs.com/PuppetConf-2015-Videos-and-Presentations.html)
- [Why Red Hat Acquired Ansible](https://www.redhat.com/en/about/blog/why-red-hat-acquired-ansible)
- [DevOps Weekly](http://www.devopsweekly.com/)
- [puppetlabs-aws](https://github.com/puppetlabs/puppetlabs-aws)

Matt and Eric are pretty sure the only reason that Red Hat acquired Ansible was to get [Robyn Bergeron](https://twitter.com/robynbergeron) back.

---
