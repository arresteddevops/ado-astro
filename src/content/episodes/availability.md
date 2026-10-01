---
title: Who owns your availability? With Charity Majors and Pete Cheslock
description: Who owns your availability? Recent events in the npm community have rekindled the perennial discussion about dependency management and controlling points of potential failure. Long-time operations professionals Charity Majors (Hound) and Pete Cheslock (Threat Stack) join the ADO crew to discuss.
date: 2016-03-25T20:47:22.000Z
publishDate: 2016-03-25T20:47:22.000Z
episodeNumber: "61"
podcastFile: arrested-devops-podcast-episode061.mp3
episodeImage: episode/img/availability.png
episodeBanner: /episode/img/availability-banner.png
images:
  - /img/social/fb/availability.png
guests:
  - person: cmajors
    snapshot: cmajors2
  - person: pcheslock
    snapshot: pcheslock2
hosts:
  - mstratton
  - thess
  - bkromhout
sponsors:
  - 10thmagnitude
  - datadog
aliases:
  - /61
youtube: fZsYnGpIgIU
explicit: yes
transcript: availability
---

Bridget, Matty and Trevor bring in two longtime ops people to talk about dependency management and points of failure, after the npm left-pad episode rekindled the perennial argument. Pete Cheslock runs operations and support at Threat Stack, and Charity Majors just co-founded Hound after being the first infrastructure hire at Parse, which Facebook acquired. Bridget invited Charity for some ranting, and the conversation delivers.

## You Own It, But Not Just You

Bridget points to whoownsmyavailability.com, which keeps telling you that you do. Charity loves it as a gut check, but says it is also not only you. It's your team, your processes and the teams around you. Operations people tend to have a "hero-martyr complex," and Charity wants to say both that "You can't pass the buck" on a vendor or platform and that it isn't up to you to be a hero. Pete says blaming is comical, since the one guarantee is that "if it's online and on the internet, it's going to go down."

Matty notes podcasters have their own version, own your own RSS feed, since everyone loved FeedBurner, and it's a reminder that the service you depend on is somebody else's business. They pour one out for Parse, though Charity says it didn't fail for technical reasons and won't say more. Bridget was impressed that the Parse community pulled together on open source options. Charity says the same holds for Parse, Heroku and AWS: if an availability zone goes down and you chose to be single-homed, that may have been the right choice, but you can't say it's their fault.

## What Happened With npm

Trevor reads from the npm blog: a package many projects depend on, directly or indirectly, was unpublished by its author in a dispute over a package name. Bridget's summary is that the namespace is global, and lots of sites were importing the package live, so when it disappeared they couldn't build. Go, PyPI and Chef Supermarket users have all had a version of this problem, which brings up Pete's rage-tweeted advice to vendor your dependencies.

## Vendoring Your Dependencies

Pete says Threat Stack has a lot of Node.js, and it wasn't affected because they use Artifactory. Vendoring means taking a copy of a package, bringing it internal and serving it yourself. Every dependency adds risk. Pete vendors all Chef dependencies and doesn't talk to Supermarket, and does the same for full Debian packages such as Cassandra's third-party packages. Charity says Cassandra stopped publishing an older package they relied on, and they couldn't bring up new instances without upgrading the cluster. Pete says it was the exact scenario they hit: only the newest version was kept.

Charity adds a caveat about company lifecycle. At a three-month startup vendoring every package would be a waste of time, since availability requirements and time are both in different places. But there's a stage where these failures affect your ability to push code and roll back, and at that point you should have a local cache of every apt package, gem and npm package. Bridget recalls a broken Docker registry release pushed without changing the version number, which they worked around by copying the official registry container into their own account. Trevor says Jenkins only hosts the latest Debian package, and a release that broke Trevor's Groovy scripts forced learning to build a package feed.

Matty points out that the enterprises everyone teases for banning internet access from build systems didn't get burned, though not for availability reasons. Matty adds that the depth of dependencies is scary, since people use systems that depend on left-pad without knowing they touch Node. Charity's example is a first boot script that turns out to call half a dozen apt repos and gem sources, when the goal was just to bring up a host. When trying to fix a scaling problem, the last thing Charity wants is to "detangle somebody else's outage."

## Bake It, Don't Bootstrap It

Pete is one of a few people who sign the packages Threat Stack ships to customers, and says there is "a high pucker factor" when thousands of systems can grab what you push. Charity's advice on resilience is to avoid reinstalling every package every time a node boots. Build a base image with Packer, bake in everything except the package that changes, such as Cassandra, and cache that in an apt repo you control, so if it fails you can blame yourself and fix it quickly. As Charity puts it, "you should have as few things that can fail while you're doing critical things as possible." Bridget's team at Drama Fever built AMIs with Packer from a Chef definition using Jenkins jobs, and a failed image build is annoying but doesn't affect production.

Pete says Threat Stack started with a ten-minute Chef run on every node, and only packerized the base when uptime and scale demanded it, so nodes come up in a minute. Charity's message on best practice is "Dude, it's contextual," since over-engineering early can kill a company as surely as neglecting things later. Pete adds that a launch date moved up to re:Invent forced choices, and the important part is going back to pay down the tech debt. Matty says you make a decision about acceptable risk with your eyes open, and revisit it as the business changes.

## Decentralize Accountability

Asked what reduces operational risk, Charity says decentralizing accountability. In Charity's words, "your operations engineers honestly are not responsible for your reliability." Software engineers should own their services end to end, and ops should be in the first design meeting asking how it scales and how it's instrumented. The toss-it-over-the-wall model fails because "the feedback isn't effective if it isn't immediate and if it isn't somewhat painful." The goal is not never going down but limping along in a degraded state when a component fails, which Bridget calls circuit breakers and continuous partial failure.

Pete adds a security angle. Threat Stack monitors what systems do, and connections to Russia or China turned out to be apt repositories served over anycast. Vendoring cuts those random connections so an odd connection stands out. Matty warns you can overcorrect: if doing the right thing is hard, people will route around it. Matty quotes Sascha Bates that "if you treat your employees like children, they're going to behave like children." Pete says people will route everything over port 80 if it's the only port open, and Bridget recalls finding Comcast IPs in a production MongoDB security group that someone had added from home.

## How to Vendor

Pete's starting point is an object store like S3. The Ruby gem deb-s3 pushes Debian packages to S3, which is basically apt repos on the cheap. Charity suggests wrapping package installs in your image build so they stash a copy in S3, and Bridget says to make it a step in the CI job, not a 42-item checklist. Pete points to paid options like PackageCloud, Artifactory and Nexus, and says "open source is only free if your time is worth nothing." Bridget suggests not depending only on public Docker Hub, having been paged more by Docker going down than by Bridget's own stuff. Charity says that if it's just caching package files, "that's seriously one of the easiest problems in computer science."

Pete raises verifying that the packages you get are the ones you expect and treads lightly around GPG. Deb-s3, Artifactory and PackageCloud all make signing easy. Charity has built Debian packages at every job, and says the packages that have to be built become the seed of the local repo. Matty says the tension is trust: you don't want to build everything, but vendors mean trusting someone else.

## Open Source and Understanding What You Run

Charity says an agent that isn't open source is a non-starter if it runs on Charity's own hosts. When you get a stack trace, you need to read the code that generated it. Trevor likes walking traditional closed-source shops through Chef cookbooks and answering "what does this action do" with "you tell me." Matty adds that if a vendor goes out of business, understanding how it worked matters. Pete's example is an engineer who wanted to gem install Sensu plugins, when Pete preferred to bring them into a cookbook. A week later a chunk of the code turned out to be dead code that would have confused them if they had just installed it. Bridget says you want a good picture of what normal looks like before 3 a.m., and Pete says every dependency adds risk that some organizations can absorb.

Charity offers a cautionary note from repeatedly moving the source of truth from an untrusted repo to GitHub, "and then you have 2 problems."

## Managing Up

Matty asks about bosses who want someone to blame or sue. Pete says you sometimes have to play the game and call it a security issue, recruiting the biggest curmudgeon to hammer on it. Matty says SLAs are a lawyer's favorite thing to say, since they're made up and never apply. Charity says it's about audiences. Developers trust you when you give the dirty details and take ownership, while executives report to people who don't want to understand software. Translate for them: paying for something and getting an SLA won't reduce outages, and probably means more of them because "we won't be able to debug them." Charity says to translate that into corporate-ese, but it will build a better product.

## Who Owns Your Availability

Pete's closing point is that everyone's stage, risk tolerance and budget differ, and "you don't have to listen to what talking heads on the internet say" about vendoring every dependency. Use each crack in the mortar as a chance to make things a little more durable. Charity says the answer is "it's you, but not you personally": a successful culture is one where every person feels they own it, and it's not some other team's, a DBA's or a vendor's problem. Bridget notes the subtlety in English: "is you singular or you plural?" And the answer is yes.

* [kik, left-pad, and npm](http://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm)
* [Who owns my availability?](http://www.whoownsmyavailability.com/)
* [deb-s3](https://github.com/krobertson/deb-s3)
* [T-shirts and mugs](http://store.arresteddevops.com)

## Community Stuff

### Upcoming conferences
* DevOpsDays Rockies April 21st - 22nd - ADO listeners, save 10% off regular price with the discount code ADO2016
* DevOpsDays Atlanta April 26-27 - ADO listeners, save 20% off regular price with discount code ADO2016
* DevOpsDays Seattle May 12-13 - ADO listeners, get 15% off with the discount code ADO2016
### Open CFPs
* DOD Vancouver and MSP CFP and [Abstractions](http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=52700&copyownerid=86229) open until March 31
* DOD Washington DC open until April 15
* DOD Salt Lake City open until April 19
* DOD Amsterdam open until May 30
* CFP for [That Conference](https://www.thatconference.com/) Opens March 1- 31
