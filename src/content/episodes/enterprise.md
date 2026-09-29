---
title: Enterprises with Bryan Liles
description: Bridget and Matt chat about devops in a large enterprise with Bryan Liles (Capital One).
date: 2017-04-17T19:59:40.000Z
publishDate: 2017-04-17T19:59:40.000Z
episodeNumber: "83"
podcastFile: arrested-devops-podcast-episode083.mp3
episodeImage: episode/img/enterprise.png
episodeBanner: /episode/img/enterprise-banner.png
images:
  - /img/social/fb/enterprise.png
guests:
  - person: bliles
    snapshot: bliles
hosts:
  - mstratton
  - bkromhout
sponsors:
  - 10thmagnitude
  - victorops
  - datadog
aliases:
  - /83
youtube: 9V0bfPLeYvo
explicit: yes
transcript: enterprise
---

Bridget and Matty talk about DevOps in a large enterprise with Bryan Liles, a director of engineering at Capital One who started as a sysadmin over 20 years ago and has done security, networking and development. Bryan says up front that this isn't Capital One's position, only what Bryan thinks while working there. Bridget met Bryan when Bryan was at DigitalOcean, and Bryan says the appeal wasn't the hot startup but getting back to the basics where Bryan started, at an ISP and a hosting provider, before wanting to do something bigger than Bryan could do alone, which a bank offers. Bridget also apologizes in the intro for audio problems in the recording. The cold open is Bryan's line that "When you have more than 2 lawyers, everything becomes harder."

## Start With Why

Matty says that a couple of years ago the statement was that DevOps won't work at big corp, and now the question is how to do it at big corp, which is a fundamental shift. Bryan says how is easy, since you can read a book, and what people miss when they look at Google or Dropbox SREs is why: why they needed that solution and what issues you have. Without understanding why, you never know what success looks like. Even at Capital One, Bryan says, the DevOps teams bring in CI/CD, which is a tiny smattering of what DevOps is.

Matty describes a CIO buying the big-picture message and never getting it to the boots on the ground, who conclude a DevOps initiative means installing Puppet. Matty recalls Jez Humble saying Jez will have a job for life because nobody gets this, and says leaders are now asking people to come to a town hall to explain the principles, not the product. Bryan says to talk about CI, CD, logging, monitoring and declarative infrastructure as principles first, then bring in tools, and Matty asks how you pick a CI tool if you don't know why you're doing CI. Bryan says a big company will just tell you it uses Jenkins, with 20 or 30 people on it, and the conversation loses whether the tool is helping ship code or just being used. Bryan says developers are often given a problem with constraints and told someone else handles ops.

## Strategy, Practitioners, and Constraints

Bryan says at a larger org leaders such as directors, VPs and CXOs should talk strategy and where they need to be, and let practitioners figure out how to get there, with a feedback loop. Because tools like Terraform and GitHub Enterprise cost a lot, higher-level people get involved, and should realize they are there for financial support and direction. Matty adds that outcomes are all that matter, and Bryan adds that they must be repeatable, since if you can do it on Tuesday you'd better be able to on Wednesday.

Bryan's view is that "Constraints are a great thing." People who say their startup's problems would go away with more money are naive, since projects with lots of money aren't guaranteed to succeed, and Google succeeded partly because it was trying to do it with fewer people. At Capital One, moving into AWS, they hit account limits, like how many VPCs can be peered, how many images you can copy across regions at a time, and how many security groups you can have. Bryan's example of copying an AMI between accounts, when you have hundreds of accounts and can copy five at a time, means deploying images alone can take more hours than a week has, which forces creative solutions that wouldn't have appeared with unlimited freedom.

## Cloud Custodian and Why Enterprises Matter

Bryan says open source is hard at a bank, with lots of lawyers and regulation, but they created Cloud Custodian, a governance tool they released to the community. It enforces 100% encryption at rest: Bryan booted an instance with something unencrypted and got an email 30 seconds later, and again after trying a second time. It also lets you limit things like which instance types can be booted. Matty says that feedback loop through open source and vendors matters, since compliance ideas on a whiteboard differ from a customer's real compliance issues, and someone will be the first at a given industry's problem for Pivotal or Chef.

Bryan says enterprises are also where the money is for vendors, since companies like HashiCorp can't live on VC money forever and have to work with bigger companies. Matty had written off enterprises as where innovation goes to die, and being on the inside as a vendor changed that: it's harder, but the payoffs are better. Bryan says "we're a big, slow-moving ship, but guess what? When we turn around and we actually point in a direction, you get all the force of that ship." The problem is people: ten people have about 100 conversations, and 10,000 people have far more, and Matty says that means 10,000 conversations where good ideas come from. Bryan's favorite thing about working at a big company is that "we have internal tech conferences that are bigger than some conferences that I've been to," where people can talk about specifics without guarding. Matty says a healthcare customer's conference is bigger than every DevOpsDays combined, and that Matty can't go to the talks.

## Enterprise DevOps and the Security Door

Matty says "let's all temporarily mourn the term enterprise DevOps and be glad it died," since it was really DevOps without the culture. What Matty sees now is that the entry point into an organization has shifted from ops or dev to security and compliance, since InfoSec people love it. Bryan says governance and compliance are hard at scale, and Cloud Custodian showed there is a marketplace for it, though compliance isn't Capital One's business. Bryan also notes that being in tech at a financial company means not needing to know how the company makes money, and Matty says at Chase the line of business only became clear on updating a resume: $1.3 trillion a day in wires went through the systems Matty managed.

## The Changing Role of Ops

Bridget asks about Bryan's Twitter thread with Alice Goldfuss and Kelsey Hightower on ops. Bryan says there are two Bryans, the worker and the person, and the worker can do things wrong without being a bad person. Likewise, "Bad ops teams are teams that don't want to get better," as distinct from overloaded ones, and they need to go extinct. The advice is that you're responsible for your output, and if you can't effect change, "you shouldn't be in a place where you can't make positive change." Bryan says velocity is increasing, and if ops sits on the sidelines saying it's too hard, someone younger will take the job. Bryan is over 40 and expects to keep doing this because times change, from Sun pizza boxes to other people's hardware in data centers. Bryan says to change the solution: if the dev team throws things over the wall, use the SRE book's production readiness tenets and tell them you have production requirements as well as business requirements. Bryan says it's all about being the adult and owning the idea of change for the positive.

## Closing Advice

For anyone at a large enterprise, Bryan says to distill a problem to the basics: you're not curing cancer, so solve one little change, then combine them. Startups and enterprises are similar, with a few more rules because more money is on the line. Bryan adds that a big enterprise gives women and people of color more opportunity to move up, and Bryan sees more Black VPs and women at the SVP level than ever before. Bryan leaves listeners with a question: what did you do yesterday, and how can you make today better, and to do something for someone you hadn't yesterday.

Bridget and Matt chat about devops in a large enterprise with Bryan Liles (Capital One).


## Check Outs

### Matt:
- GFM supports [folded details (like, disclosure triangles)](https://twitter.com/felixrieseberg/status/849082760098709506)
- [Tables Generator](http://www.tablesgenerator.com/)
- [Hugo plugin for Atom written by me](https://atom.io/packages/language-hugo)
- [hub is a cool tool](https://github.com/github/hub)


## Community & Event Stuff

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)

### Upcoming conferences

- [GOTO Chicago](https://gotochgo.com/) - Matt and Bridget hosting an entire day of [Arrested DevOps Live](https://gotochgo.com/2017/tracks/43)! May 1-2 - $75 off with discount code "arresteddevops"
- [Velocity San Jose](https://conferences.oreilly.com/velocity/vl-ca) - discount code "ADO2017" gives 20% off for Gold, Silver, and Bronze passes.

### Open CFPs

* [lots of DevOpsDays](https://devopsdays.org/speaking)

[Image credit](https://www.flickr.com/photos/bradipo/1435739708)
