---
title: Something About Security With Ben Hughes
description: When we talk about DevOps, often times we focus only on the two disciplines that feature in the name - Development and Operations. But DevOps, truly, is about collaboration across all areas of the business, even those security blokes. Ben Hughes, Security Manager at Etsy, joins the ADO crew to review how to work WITH your security teams, and show that they're not really scary at all.
date: 2014-09-09T23:26:31.000Z
publishDate: 2014-09-09T23:26:31.000Z
episodeNumber: "20"
podcastFile: arrested-devops-podcast-episode020.mp3
podcastDuration: 56:12
episodeImage: episode/img/devops-security.png
episodeBanner: /episode/img/devops-security-banner.png
images:
  - /img/social/fb/devops-security.png
guests:
  - person: bhughes
    snapshot: bhughes
hosts:
  - thess
  - mstratton
sponsors:
  - trueability
  - 10thmagnitude
aliases:
  - /20
  - /devopssecurity
youtube: EJeccu3Lcis
explicit: yes
transcript: devops-security
---

## Security, the Etsy Way

Ben Hughes of Etsy is one of the senior network engineers there, though Ben's team looks after infrastructure, about a thousand machines and a hundred laptops, and leaves networking to a NetOps team. The guest fell into security after dropping out of school on discovering 2600 and Linux, and at one point had around 1,500 accounts on the Unix system at Ben's high school. Ben came to Etsy from Puppet Labs, learning about DevOps Days there.

Ben's current work includes Python on Midas, a host-based intrusion detection system for the Mac that Etsy released with Facebook, and Go to trick Logstash into using different TLS ciphers. Next week Ben is at an incident response conference, because for breaches "the days of it being an if are long gone."

## Blameless Phishing

Matty recalls Ben's point about phishing: the question is what you do once someone gets phished. Ben says Etsy focuses on people first. You can't shout at a recruiter for opening a PDF, since that's their job, and "blameless postmortems work for blameless phishing campaigns." What matters is that people tell the security team when something screwy happens, and "the more you chastise people, the less they will tell you." So when someone reports a phish, they say thank you and give them an Etsy gift card. Being able to respond matters more than believing you have full coverage: "Nothing's 100% in security, despite what some people will try and sell you."

## Scary Clouds and the Trusted Network That Isn't

Matty raises the belief that you can secure your own stuff better than a cloud provider. Ben says that if you bring the "armadillo" security model of the last 20 or 30 years into the cloud, "you're going to have a bad time," because unless you build a private network, there's no trusted internal network at all. Matty passes on a Microsoft data center manager's remark that after the US government Microsoft is the most attacked entity on the internet, so who better to learn from.

Ben's caution is about outsourcing security to someone else. Without a complete overview of your organization and your threat model, "you're going to be hit by a surprise," and security vendors sell silver bullets using fear. Etsy is big enough to build its own tools, as Netflix and Square do for their particular problems, and those tools "you can't buy commercially."

## Don't Throw It Over the Wall to Security

Ben says throwing something over the wall to security at the last minute is as bad as throwing it over to operations, and everyone who's had a bad time says they should have talked to security sooner. Given budget to allocate, Ben would spend it on a security team early, not on products or pen testing, because until you map what you're defending and from whom, you can't build defenses. Etsy's first security person was one of its toolsmiths who took on security on the side, and Ben says you can find people interested in security in operations, development or QA.

For developers, Ben's number one request is "please stop turning off TLS verification," and the age-old rule of never trusting user input: "never trust users," in the nicest possible way.

## Proxies and the People Who Route Around Them

Matty rants about transparent HTTPS proxies that decrypt traffic, which break a `gem install` because the certificate doesn't verify, so people turn verification off. Ben gives the benefit of the doubt, since there are good reasons to inspect web traffic, and suggests trusting the proxy's CA cert in the gem config. The guest says people will route around anything that stops them doing their job, with SSH tunnels, OpenVPN or tunneling IP over DNS: "However you need to get out of a network, you will." So "we can either work with these people or kind of be avoided by these people."

Trust famously doesn't scale, Ben says: at 50 people you know everyone's name, and at 10,000 you don't trust other buildings. Etsy defaults to trusting everyone, monitors everything, and is transparent about what the security team is doing, which is how you get trust back. The guest sums up DevOps as "why don't we work together?"

## Secrets, Passwords, and Breaking Things on Purpose

For a listener's question on secrets, Ben says Chef encrypted data bags "turn your encryption problem into a key management problem," and points to Nordstrom's Chef Vault, which Matty says ships with ChefDK. The guest would also like Square to release its resident-only in-memory file systems built on FUSE. Ben's main advice is to get to where you can change a secret and nothing breaks: once sharing works, randomly change some passwords, "it'll break a ton of stuff, and you'll have a terrible day," but you'll know next time credentials leak, which they do. "Pastebin is a treasure trove of other people's mistakes, and GitHub Gists is just a shopping cart full of logins."

Personally, Ben uses a password manager with around 600 credentials and two-factor on everything. Matty asks front-end developers to name password fields password so managers can find them, and mentions a six-word Diceware passphrase, learned by making 1Password prompt for it every time for a couple of days.

## What People Get Wrong

Ben's first misconception is that HTTPS is too slow, and the rebuttal is istlsfastyet.com. Ben's second is the media's fixation on zero days, which "99.99999% of organizations do not need to worry about," when the unpatched Linux kernel and users' four-character passwords are bigger problems.

Trevor asks how to start security where there's no team. Ben says find the person who stays up late on IRC, give them time, and get leadership to treat security like backups. Some security is better than none, and "smaller incremental gains is always the way to do it." To sell it, Ben says you can do it "not out of fear, but out of this is the responsible thing to do," and customers pick the vendor that's more secure. Matty realizes there's no padlock in a mobile app to tell you whether traffic is encrypted, and Ben says the ideal is for platforms to show one only when certificates are validated. The guest tells of a game site that showed a picture of a padlock next to an HTTP URL.

## The Villain in The Phoenix Project

Matty asks whether InfoSec is still the right name, given the band Information Society, and Ben says it's still used, that Ben's own LinkedIn said Security Monkey for a long time, and that hacker versus cracker is settled. On The Phoenix Project's security manager, who's cast as a villain, Ben says many see security as Big Brother, and that Etsy's team held a hackers party watching the film Hackers, taught people to pick locks, and ran a security hack week. If you're the villain, Ben says, "start being nicer to people because you work with them."

Ben also thinks security needs to buck up its own ideas: the military jargon, like the phrase threat intelligence, which "brings me out in a rage," makes the field seem aggressive. The guest wants less preaching that it's 100% or nothing, noting that even CPUs ship with errata lists, so "computers are broken from the ground upwards" and it doesn't all have to be doom and gloom.

- What exactly do you security folks do all day?
- So let's talk about ZOMG SCARY CLOUDS
- I'm a developer. What do I need to know to help me be pals with InfoSec?
- Ops people know security, right? Or not?
- Common security mistakes/misconceptions
- How can InfoSec be better buddies with other functions?
- Are you tired of Matt calling it "InfoSec"? Does it remind you of [Information Society](http://www.youtube.com/watch?v=UPuXvpkOLmM)?

## Check Outs

### Matt

- [zsh](http://whaaat.com/content/update-shell-zsh-osx-unix) and oh my zsh - [http://github.com/robbyrussell/oh-my-zsh](http://github.com/robbyrussell/oh-my-zsh)
- [zmojii plugin](http://github.com/scarolan/oh-my-zsh/tree/master/plugins/zmoji)
- [all of the chef 12 things!](http://www.getchef.com/blog/2014/09/08/chef-releases-chef-12-to-power-devops-practices-in-the-enterprise/)
- st. tom waits prayer candle - [http://www.etsy.com/listing/177742614/saint-tom-waits-prayer-candle](http://www.etsy.com/listing/177742614/saint-tom-waits-prayer-candle)

### Ben

- [http://cybersymposium.isis.poly.edu/symposium/](http://cybersymposium.isis.poly.edu/symposium/) The NYU “Bridge to cyber security: a women's Symposium” which is a two day event aimed at introducing women of all ages and points in their career to security.
- (if you’re gonna talk oh-my-zsh, you should really talk prezto - [http://github.com/sorin-ionescu/prezto](http://github.com/sorin-ionescu/prezto))
- [http://gauntlt.org/](http://gauntlt.org/) by James Wickett (of Signal Science) and Mattjay (of Whitehat security) (and others) is pretty amazing CI/CD tool for security testing your code.
- [http://twofactorauth.org/](http://twofactorauth.org/) list of places that do and don’t have two factor authentication. *cough* iCloud drama *cough*

### Trevor

- [http://www.strengthsfinder.com/home.aspx](http://www.strengthsfinder.com/home.aspx) Strengthsfinder- recommended to me by Kay Johansen at FlowCon, interesting analysis of leadership strengths
- Amazon Instant Video is F&$king finally on Android (still needs Chromecast support built in, but screencast works just fine)
- Rampage the boardgame. [http://boardgamegeek.com/boardgame/97903/rampage](http://boardgamegeek.com/boardgame/97903/rampage)
