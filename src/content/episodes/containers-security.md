---
title: Containers and Security with Ben Hughes and Jessie Frazelle
description: "Bridget chats with lovable reprobate/returning guest Ben Hughes (Etsy) and badass container expert Jessie Frazelle (Mesosphere) about everyone's favorite topic: security."
date: 2016-05-12T23:16:10.000Z
publishDate: 2016-05-12T23:16:10.000Z
episodeNumber: "63"
podcastFile: arrested-devops-podcast-episode063.mp3
episodeImage: episode/img/containers-security.png
episodeBanner: /episode/img/containers-security-banner.png
images:
  - /img/social/fb/containers-security.png
guests:
  - person: bhughes
    snapshot: bhughes
  - person: jfrazelle
    snapshot: jfrazelle
hosts:
  - bkromhout
sponsors:
  - 10thmagnitude
  - datadog
aliases:
  - /63
  - /containerssecurity
youtube: qPs5U5hdciM
explicit: yes
transcript: containers-security
---

Bridget hosts solo, pulled together at the last minute, and talks security with two guests who agree on more than they argue about. Ben Hughes of Etsy last appeared on the show for the security episode about two years earlier, and Jessie Frazelle works on container security at Mesosphere. Ben opens with the line that "YAML is readable by humans if your humans are going through a stroke," a theme that comes back near the end. Ben introduces Jessie as the leading authority on running silly things in containers on a Linux desktop, and the only person who gets audio, networking and everything else working on a bleeding-edge Linux kernel. Jessie, meanwhile, has just gotten back from CraftConf in Budapest.

## What Security Is

Bridget asks Ben what security even is. Ben's answer: you have the stuff, and you don't want other people to get it. Computers aren't as deterministic as we'd like, since CPUs and microcode have bugs and Rowhammer showed that physics can corrupt memory, so insecurity goes all the way down. The role of security people is managing that risk, and Ben adds that "security often loses sight of the fact that they are a business function." For most companies the goal is a profit, not being the most secure company in the world.

## What Containers Buy You

Jessie's view is measured: "you're better off with containers than without them," as long as you run them correctly. If someone gets into an app inside a container, the world they see is different from what they'd see on the host. It can't save the world. Ben puts containers in the broader category of sandboxing, like Chrome sandboxing Flash, and says the main thing you can do is reduce attack surface, especially by dropping as many permissions as you can. Bridget and Ben both remember jails and chroots.

Jessie explains unprivileged containers, from Jessie's blog post and CraftConf talk. Docker on your host runs as root, and adding a user to the Docker group also gives root, which some people don't realize. With unprivileged containers, the user starting the container is a normal local user with no added capabilities. Jessie also runs Chrome in a container with cgroup limits on RAM and CPU, but had to remove the limits because of a Chrome memory leak, so if Ben and Bridget see Jessie drop out of the Hangout, the out-of-memory killer is probably to blame.

## The Mundane Beats the Dramatic

Asked where the sweet spot is between securing everything and nothing, Ben says humans are really bad at risk analysis. Nobody says "safe ride to the airport," they say "safe flight," though Ben has been more terrified by taxis than by pilots. Ben loves a kernel-hardening project that makes whole swathes of kernel exploits stop working, but would rather have people use longer passwords and a password manager. Most compromises are found credentials or very old software, not an amazing new kernel zero-day. The dramatic wins headlines, logos and RSA booth sales, as with the $100,000 appliance that claims to stop all zero-days. Ben uses ImageMagick as an example of an exploit whose barrier is nonexistent: "If you can write a sentence, you can probably exploit it." A logo and a domain got more people to patch than a blog post did.

They wander into online voting, where Ben says the paper system is reasonably trusted and the government contracts go to companies like Diebold. On chip-and-signature cards, Ben has heard the banks didn't want to change two things at once. Jessie says the line is Linux in cars, though open source, Jessie admits, is better than every company writing its own firmware.

## Impostor Syndrome and Who Gets Hired

Ben's recent blog post, written on a flight back from Berlin, is about impostor syndrome in security, a field with a lot of posturing and an attack-defense mindset. "We should try and be nicer to each other." The field has a huge skill shortage, but it's an unwelcoming place if you have to be popping shells on day one. It also tends to want only breakers, and a team of breakers doesn't build secure software, it finds bugs in all the software you have. Ben's example is Wireshark, which parses loads of wire formats in a big C program: "Wireshark is just a CVE-generating machine." Jessie has a container for it, though it would need a custom seccomp profile, and Ben recommends capturing with tcpdump and loading into Wireshark in a VM or container.

Jessie chose container security because the problem of real multi-tenancy appeals, and says that nobody has 10 years of Docker experience, so you hire people who are good at what they do and can jump in. What Etsy actually finds more useful, Ben says, is people who can talk to developers and explain an attack, which won't get a conference talk but helps the business more. Jessie sums it up as "enabling people to do the right thing versus telling them that they were wrong in the first place," and Bridget adds that at Etsy corporate security enables people to do their job, which differs from how security usually interacts with the business.

## DevOpsSec and curl Bash

Ben spoke in Berlin on the topic, whose name Ben blames on Gareth Rushgrove, to an audience mostly of executives. It included Pete Cheslock's image of the DevOps unicorn emitting rainbows while security shovels them out. Etsy doesn't use the term DevOps much, but the point is to get security involved early, embed security people on other teams and stop shouting at people for writing code with bugs. Ben also mentions an article on detecting curl piped to bash through server-side timing, since the shell buffers differently than a plain curl, which lets a server send different output.

## Tooling, Config Formats, and Containers Done Right

Jessie says the talk was for anyone running containers, and surprisingly popular with the academic physics community, whose servers don't allow running as root. Real sandboxing needs custom seccomp and AppArmor profiles, which will land on the security team. Better tooling would help, since no one likes writing SELinux policy. Jessie's proof of concept for AppArmor uses TOML, which Jessie thinks should be JSON. Ben objects that "JSON isn't a config format," since you can't put comments in it, and that YAML's significant whitespace is "not acceptable in a config format."

## Predictions and Wishes

Jessie predicts containers will keep getting more secure. Ben's bold prediction: "I predict in the next 12 to 18 months, there will be another OpenSSL vulnerability," and more ImageMagick bugs, since image and config parsing is a minefield. Ben thinks "the container security story is great in the kernel but is terrible on the actual things in the container," with hundreds of things running out-of-date code where there used to be one monolith. Bridget says that if you can't build images repeatably and roll them at a moment's notice, "you probably have no business using containers in production." Ben says the speed everyone was sold on disappears once you build a repeatable, testable build system, and Bridget answers that you can still push fast through CI with tagged images.

For wishes, Ben wants security to stop blaming everyone. You tell people not to click links in emails while employing a recruiting team to click on PDFs from the internet, so "the tools have failed. So make better tools. Stop blaming users." Jessie wants a desktop OS made of containers, like Subgraph, and people to stop making gigantic images. Ben adds: "People should stop using curl in Dockerfiles," and stop using HTTP there too. Bridget adds pinning versions, and Ben's advice is to find an ops person and work it out.

* [Jess on unprivileged containers](https://blog.jessfraz.com/post/getting-towards-real-sandbox-containers/)
* [Ben on infosec, hubris, and impostor syndrome](https://mumble.org.uk/blog/2016/04/30/malory-isnt-the-only-imposter-in-infosec/)

## Community Stuff

### Upcoming conferences

For any [devopsdays](http://devopsdays.org), try the code ADO2016! It should get you 20% off.

* [DevOpsDays Salt Lake City](http://www.devopsdays.org/events/2016-saltlakecity/) June 14 - June 15
* [DevOpsDays Silicon Valley](http://www.devopsdays.org/events/2016-siliconvalley) June 24 - June 25
* [DevOpsDays Minneapolis](http://www.devopsdays.org/events/2016-minneapolis) is July 20-21
* [DevOpsDays Chicago](http://www.devopsdays.org/events/2016-chicago) is August 30-31

### Open CFPs

* [DOD Amsterdam](http://www.devopsdays.org/events/2016-amsterdam/propose/) open until May 30
* [DOD Chicago](http://www.devopsdays.org/events/2016-chicago/propose/) open until May 30

### ADO Merchandise

We have t-shirts now! And mugs! They are available at [store.arresteddevops.com](http://store.arresteddevops.com)! Only unisex for now, but more styles coming! Buy one today. Or not. We’re not the boss of you.

### Check outs

Ben:

* [The 2016 DZIR report](https://www.google.com/search?q=DZIR+2016+threatbutt+security+report)
* Which is similar to the [DBIR from Verizon](http://www.verizonenterprise.com/verizon-insights-lab/dbir/)
* [Phrack 69 is out!](http://phrack.org/issues/69/16.html#article) great stuff from Joern on RoR, horrors of Adobe, how OSX gets rootkitted.
* [Detecting curl bash](https://www.idontplaydarts.com/2016/04/detecting-curl-pipe-bash-server-side/)

Jessie:

* [Linux Container Security Paper from NCC Group](https://www.nccgroup.trust/globalassets/our-research/us/whitepapers/2016/april/ncc_group_understanding_hardening_linux_containers-10pdf/)
* [Subgraph OS](https://subgraph.com/sgos/)


Bridget:

* Having a lot of fun with terraform lately - be sure to read [the great posts Charity Majors wrote about it](https://charity.wtf/tag/terraform/)
