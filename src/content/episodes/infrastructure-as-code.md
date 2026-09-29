---
title: infrastructure as code with Joshua Timberman, Eric Sorenson, and Robyn Bergeron
description: What does "infrastructure as code" actually mean? How is it different from configuration management? Special guests Joshua Timberman (Chef), Eric Sorenson (Puppet Labs), and Robyn Bergeron (Ansible) talk with Matt and Trevor about this very topic.
date: 2015-10-01T13:31:42.000Z
publishDate: 2015-10-01T13:31:42.000Z
episodeNumber: "44"
podcastFile: arrested-devops-podcast-episode044.mp3
episodeImage: episode/img/infrastructure-as-code.png
episodeBanner: /episode/img/infrastructure-as-code-banner.png
images:
  - /img/social/fb/infrastructure-as-code.png
guests:
  - person: jtimberman
    snapshot: jtimberman
  - person: esorenson
    snapshot: esorenson
  - person: rbergeron
    snapshot: rbergeron
hosts:
  - mstratton
  - thess
sponsors:
  - victorops
  - datadog
  - 10thmagnitude
aliases:
  - /44
  - /infrastructureascode
youtube: 7voRnzzUZb4
transcript: infrastructure-as-code
explicit: yes
---

## What "Infrastructure as Code" Means

Joshua Timberman of Chef, Eric Sorenson of Puppet Labs and Robyn Bergeron of Ansible join Matty and Trevor for a panel on treating infrastructure as code. Joshua has been at Chef about seven years with a systems administration background. Eric started by running an ISP "when 14.4K modems were the new hotness," used CFEngine for a long time, and now does product management at Puppet. Robyn was a sysadmin from 1996 to 2000, then Fedora project leader at Red Hat for two and a half years, and has been at Ansible for a month: "systemd is not my fault."

Matty's working definition is that infrastructure is versioned, modularized and testable in an automated way. Eric says at AtomicCon in Portland, seven of ten talks opened with their own definition, and the most compelling to him was that if a natural disaster destroys your infrastructure, you could rebuild it in a new place "using just the contents of a version control repository." Joshua says the original line was Adam Jacob's. Robyn reads the many definitions as a sign that everyone's is shaped by their experiences and should stay open to evolving. Eric adds that seeing scripts checked in, with commit logs you can read like archaeology to divine intent, can be revolutionary for people who have never had it.

## Unit Tests, Integration Tests, and "Is Nginx Installed?"

Eric says test-driven configuration management didn't exist when he started, and credits the Chef community for pushing it. Trevor says people are amazed to find they can check that "the thing I did actually was the thing I did." Joshua likes unit tests because you're testing inputs across platforms, since real environments mix SmartOS, Linux and Windows, and tests catch regressions when someone breaks the most popular platform. Matty says sysadmins are used to testing but not to automating it. Eric quotes an AtomicCon line that everybody has a test environment, and some people are lucky enough to have it be different from production. Robyn's own is "via Twitter when everything goes down."

A Reddit post Matty flags argues that unit tests alone aren't enough for configuration code. Eric agrees they're necessary but not sufficient, and says the state of the art has moved to integration-style tests that spin up machines and assert how they interact, using tools like ServerSpec. Matty borrows a framing from a colleague: signal in is unit tests, signal processing is whether the tool works (the vendors' job), and signal out is acceptance tests, which are "is what I said what I meant." He'd have newcomers write the "is nginx installed?" test because it teaches the pattern and guards against regressions, and Joshua has come around to 100% coverage of resources so that an accidental deletion during refactoring is a conscious choice.

Matty tells, as he remembers Paul Reed telling it, of Firefox shipping a build that broke MLB.com on the first day of a World Series, and a regression test that has run in every build since. Eric says acceptance tests are your codebase's scar tissue, and that they can slow releases as they accumulate. Joshua says skipping tests just moves the cost, because "you're gonna have to refactor the entire world anyway."

## Crawl, Walk, Run

Matty's advice is to start doing it right from day one: even a pipeline with no tests, so the only way anything reaches a server is through source control, because habits are hard to break. Why bother, he asks as devil's advocate, when you could keep playbooks on your laptop? Joshua says that works for one person, but real professionals need to recover when a quick change goes wrong. Eric says it's fine "as long as you don't have any coworkers or any customers," and Robyn says otherwise you're making other people have bad days.

Robyn stresses baby steps, since a run of failures demoralizes people, while small successes add up to minutes, and then to a week not spent patching fires. Matty's version is crawl, walk, run: learn to install Apache before you manage the storage array, and pilot with people open to change the way Agile transformations do. Trevor types "trickle-down DevOps" in the chat.

## Aligning Infrastructure Code With Application Code

Trevor finds it's often easier to let the infrastructure tool deploy the code, having spent two weeks fighting Octopus over environments. Matty says the application is just another configuration point, but that if you already have a working Capistrano setup you should keep it, and that aligning the two takes a high level of trust. Robyn says it takes trust, transparency and simplicity, and that a group insisting on a tool nobody else has a month to learn is the start of an unhappy relationship. Trevor says don't force everyone onto two tools at once.

Eric describes high-functioning teams where application developers build versioned native packages, like RPMs, and not an obscure tarball or WAR file, so the application sits alongside the OS packages, and calls that what empathy means in practice. Matty notes that people used the empathy talk at DevOpsDays to say the community was all feelings, and points to a line in the Continuous Delivery book that having a very skilled person do mundane tasks is the surest way to ensure error, short of sleep deprivation or inebriation. Eric jokes about a world where Jordan Sissel never had to write FPM, and adds that the tool came out of a low-trust environment where he couldn't ask the team to deliver something installable.

## Empathy Includes Sales and Marketing

Robyn says people at open source companies see trust and transparency on both sides, in the community and in the workplace. Trevor says marketing colleagues at 10th Magnitude were upset by a tweet at a DevOps event asking why companies and their salespeople were there. Robyn's answer is that it's so they can develop empathy for the people using the tools, or it's "a gigantic feedback loop." She adds, "You're either an open source software company or you're not," and that saying you're all about DevOps but not talking to people leads them to expect a unicorn and get a box of Kleenex.

## What's Different Now

Asked what's changed since they first treated infrastructure as code, Joshua says "everything": you can't be a sysadmin without understanding how to write some kind of code. Eric says culture, with developers building monitoring in as a first-class thing, and tooling, since there are now test frameworks even for Bash. Robyn says open source used to be "no free hippie code" at work and is now acceptable. Matty says the shift is enterprises like Target and GE sharing their stories, after years of being told "you are the 5th person to come in here today and tell me that I should be like Netflix," and Robyn says companies now let employees share theirs, including the failures, in part to keep them.

The Reddit post referenced in the episode:

[Having a difficult time wrapping my head around test driven infrastructure](https://www.reddit.com/r/devops/comments/2xsq5d/having_a_difficult_time_wrapping_my_head_around/)

## Check Outs

### Joshua:
- Policyfiles! [Webinar](http://bit.ly/1MgVA1W) coming soon, or already happened!
- ChefDK 0.8.0, especially if you’re starting to work with Policyfiles
- Fat Scotch Ale - Silver City Brewing get it at SEA TAC! :D

### Eric:
- [Dark techno/dnb from Grey Area in the UK](http://soundcloud.com/samuraimusicgroup/)
- [Ansible](https://www.ansible.com) :) especially people using Ansible in conjunction with puppet and chef - @ me on twitter!

### Robyn:
- Eric: Lots of those peeps :) I am happy to help connect folks.
- Ansible 2.0… soonish!
- [Fedora 23 beta](https://getfedora.org/): GO GET IT
- SPLATOON


### Trevor:
- Welcome to the Dungeon boardgame
- Rocket League

### Matt:
- Pac-Man 256 [iOS](https://itunes.apple.com/us/app/pac-man-256-endless-arcade/id1002340615?mt=8) [Android](https://play.google.com/store/apps/details?id=eu.bandainamcoent.pacman256&hl=en)
- [The Martian](http://www.audible.com/pd/Sci-Fi-Fantasy/The-Martian-Audiobook/B00B5HZGUG) (audiobook)
- Felicia Day’s audiobook, []“You’re Never Weird On The Internet (Almost)”](http://www.audible.com/pd/Bios-Memoirs/Youre-Never-Weird-on-the-Internet-Almost-Audiobook/B00XUTQ692)
