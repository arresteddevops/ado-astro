---
title: Open Your Stack with JJ Asghar
description: JJ Asghar joins us to help school Matt about what is going on in the OpenStack world
date: 2016-02-26T04:09:46.000Z
publishDate: 2016-02-26T04:09:46.000Z
episodeNumber: "58"
podcastFile: arrested-devops-podcast-episode058.mp3
episodeImage: episode/img/openstack.png
episodeBanner: /episode/img/openstack-banner.png
images:
  - /img/social/fb/openstack.png
guests:
  - person: jjasghar
    snapshot: jjasghar
hosts:
  - mstratton
sponsors:
  - datadog
  - 10thmagnitude
aliases:
  - /58
explicit: yes
transcript: openstack
---

Matty asks JJ Asghar to explain what's going on in the OpenStack world. JJ calls himself the OpenStack Chef guy, representing OpenStack in the Chef community and Chef in the OpenStack community, and owns the Knife plugin, the Test Kitchen plugin and the Chef Provisioning Fog integration. He got involved back around the Diablo release, the fourth one, so about four years ago, and OpenStack is about five years old. Matty opens by saying the story sounds like Chicago politics, which makes him feel right at home, and comes back to it later.

## What OpenStack Is

JJ's 50,000-foot view is that OpenStack is a private cloud you build yourself, from database as a service and compute to imaging, object storage and even container clusters. It started between Rackspace and NASA, with NASA's front end to Nova for spinning up VMs and Rackspace's Swift for object storage. It has since grown to about 19 projects on a six-month release cadence, which JJ says is a challenge for operators, and you can pick and choose which ones you use. The core ones are Keystone for identity, Glance for images and Nova, with Neutron the subject of debate about whether it counts as core. JJ says OpenStack recently got nonprofit status in the US under the same tax code as the NFL and churches, so contributing can be described to your employer as charitable work, which Matty calls joining the Church of OpenStack.

## Why Not VMware or EC2

JJ says if you care about owning your data in your data center, OpenStack is an open source way to build a cloud instead of paying a VMware tax. At scale, VMware "gets prohibitively expensive around the 10,000 hypervisor mark," and he would rather spend that on hiring an engineer you can train than on a license and support contract. It is also good for dev and QA, where a machine sitting idle on EC2 for a year costs $1,200, and reclaimed hardware can run the same APIs as EC2 locally and get more life out of its depreciation.

## The Hard Part Is the Mindset

According to JJ, "9 out of 10 times, it's teaching a company to go to the cloud." At a previous employer, they spent money and effort on an OpenStack infrastructure, but the idea that a misbehaving machine gets rebuilt from scratch never took hold, since the company couldn't accept ephemeral machines. His warning is "OpenStack is not free VMware." Handing someone who has spent their career on vSphere an OpenStack cloud is like putting a lifelong Windows user in front of a FreeBSD box: they'll get by, but with a long learning curve. Matty compares it to Windows being API-based and Unix file-based.

The Microsoft footprint is surprisingly high, JJ says. The main hypervisors are KVM and QEMU, there are Hyper-V ports, he knows of production Windows 2012 R2 boxes, and one company, cloudbase.it, built its business on Windows images for OpenStack clouds.

## Operators and OSOps

JJ says OpenStack has three camps: developers who commit code to OpenStack, users he prefers to call consumers who just want an API endpoint for a Test Kitchen instance or a Redis server, and operators who run the clouds. Operators have been underrepresented for a long time. The Foundation responded with mid-cycle operator meetups, the next in Manchester, UK, the first outside the US. Operators also usually can't get an ATC, the Active Technical Contributor status that earns a free summit ticket worth $600 or $700 for anyone who has contributed in the last 12 to 18 months, because their bash, Python and Ruby scripts don't go into official projects. OSOps is a place for operators to share those tools, with the goal of getting them ATC someday. He says the Foundation is happy with how it has taken off, and is considering making it a core project, since you need people to run these clouds.

## Getting Started

JJ says to run away from DevStack, which "has grown into a monstrosity" and won't teach you what you need. First figure out what you want to build, because saying you want an OpenStack cloud gets you choice paralysis. Projects like OpenStack Chef and OpenStack Model T, along with some Puppet and Ansible builds, let you build small clouds to learn. Commercial options include Mirantis and Blue Box, now IBM, which are useful, but you are handing off understanding of the cloud to a third party, no different from asking an MSP. He comes from the camp that if you want full control, you should understand how the whole thing works, though he admits the engineering time may be cost prohibitive.

OpenStack fits with other technologies: apps.openstack.org has a one-button push to pull a Glance image and build a Kubernetes cluster, and a project called Magnum uses Heat to spin up CoreOS machines with Fleet and etcd and points your API endpoint at the cluster so you can use Docker as usual.

## Running for the Board

JJ is running for the OpenStack Board of Directors, and Matty says he'd vote for him if he could. JJ's argument is that board members have been removed from day-to-day OpenStack. He uses a story about pioneers, town planners and city builders. CIO magazines and Foundation blog posts make OpenStack sound like it is in the city-building phase, but he believes "we are just getting out of the pioneering phase and just getting into the town planning phase." He sees apps.openstack.org as the general store, a milestone, but says features get pushed into releases before operators have adopted the previous ones. His example is that people are still arguing about basic layer 2 and layer 3 networking while vendors fund edge routers inside SDNs. He wants a seat so he can ask why, and to see "how the sausage is made." Who has the right to vote isn't clear to him either. He had it last year but not the year before, which is how Matty got to Chicago politics.

## OpenStack Model T and the Chef Project

JJ is proud of OpenStack Model T, an opinionated build of OpenStack in one Chef cookbook, which automates the long OpenStack install guide, with RabbitMQ as the queue and Ubuntu as the base OS. Run one recipe on a controller and one on each compute node you add, and you have a horizontally scalable cloud on reclaimed hardware. He hopes to give a ChefConf 2016 talk on a reference architecture bootstrapped with a cookbook called Pixie Dust and tested with Test Kitchen on bare metal.

The OpenStack Chef project has cookbooks for all the major projects, and a small team that needs more help. It is in the middle of a refactor because the last two cycles added everything including the kitchen sink, which JJ thinks scared people off. With a 16-gig MacBook Pro you can build a multi-node OpenStack cluster with Chef Provisioning and Vagrant, and JJ used the same approach on a donated 96-gig quad-core Xeon to build a production-ready all-in-one cloud in about 45 minutes, which is still running. His parting message is that operators are trying to come together, and if you have a tool, drop it into OSOps and, once ATC is possible, you'll get it.

* [OpenStack OSOps](https://wiki.openstack.org/wiki/Osops)
* [Check out this tool library for OpenStack operators](http://superuser.openstack.org/articles/check-out-this-tool-library-for-openstack-operators)
* [OpenStack-model-t](https://github.com/chef-partners/openstack-model-t)
*	[Using Automation to build an OpenStack Cloud](http://sysadvent.blogspot.com/2015/12/day-1-using-automation-to-build.html)
* [OpenStack-Chef project](https://wiki.openstack.org/wiki/Chef)

## Check Outs

### JJ
* [This War of Mine](http://www.11bitstudios.com/games/16/this-war-of-mine)
* [Labyrinth Black Ale](https://untappd.com/b/uinta-brewing-company-labyrinth-black-ale/10948)

### Matt
* [Asphalt 8](http://www.gameloft.com/asphalt8/)
