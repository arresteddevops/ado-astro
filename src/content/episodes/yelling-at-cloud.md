---
title: Old Geeks Yell at Cloud with Andrew Clay Shafer & Bryan Cantrill
description: Bridget and Matt chat with Andrew Clay Shafer (Pivotal) and Bryan Cantrill (Joyent).
date: 2017-05-08T00:59:40.000Z
publishDate: 2017-05-08T00:59:40.000Z
episodeNumber: "84"
podcastFile: arrested-devops-podcast-episode084.mp3
episodeImage: episode/img/yelling-at-cloud.png
episodeBanner: /episode/img/yelling-at-cloud-banner.png
images:
  - /img/social/fb/yelling-at-cloud.png
guests:
  - person: ashafer
    snapshot: ashafer
  - person: bcantrill
    snapshot: bcantrill
hosts:
  - mstratton
  - bkromhout
sponsors:
  - 10thmagnitude
  - victorops
  - datadog
aliases:
  - /84
  - /yellingatcloud
youtube: bNfAAQUQ_54
explicit: yes
transcript: yelling-at-cloud
---

Bridget and Matty sit down live in Chicago with Andrew Clay Shafer and Bryan Cantrill, right after Bryan's keynote, for a panel Bridget pitches as two people with a lot of perspective on where the industry has been. It goes where the title suggests. The next room over asks them to yell less, and Bryan's reply is "It's in the title, it says yell!" Along the way, "Genghis Khan" becomes a code name for Jeff Bezos and "Serpentor" one for Larry Ellison, which Matty asks everyone to use in all future subtweeting.

## The Nineties Sucked, and Then Everything Closed Up

Bridget asks how we got into the pickle we're in. Bryan and Andrew dispute the pickle, but Bryan is clear that "the '90s really sucked": a very proprietary, closed era in which people thought systems were done. Andrew points to the dark ages of the relational database and the Java middleware stack that "totally paused everything for a decade." Bryan adds that Java was not open source, and that Windows was deeply proprietary, "then there's asshole proprietary." Bridget sees real willingness to open source coming out of Microsoft now. Andrew says Microsoft has been forced to, since it lost its monopoly.

## A New Proprietary Era

Bridget says the proprietary era is over, and both guests disagree. Andrew says that once you're in the cloud, it doesn't matter how much open source built the stuff at Google or Amazon, because you can't change that code. Bryan says "We are in a new proprietary era," and that it rhymes with the '90s, when everything was going to Microsoft and doing anything else was stupid. Now everything goes to AWS. Andrew says "Nothing's more proprietary than Lambda."

Bryan argues that the great myth Amazon created is that cloud is a terrible business nobody should be in, when cloud computing has very good margins and Amazon's overall margin is very low. In Bryan's telling, AWS is underwriting a war on big box retail, and a lingerie retailer that was a Joyent customer answered Amazon's $9 bra with "no, forget it". Andrew says Amazon runs analytics on what sellers and partners do in its marketplaces and turns around with its own products on both the retail and cloud sides. Andrew calls Jeff Bezos "the Genghis Khan of the internet." Andrew remembers Rackspace saying it was playing a different game than Amazon, after throwing a Hail Mary with OpenStack, and Bryan says "Genghis Khan does not follow you on Twitter. He does not care."

The Serpentor detour begins with Bryan raising Larry Ellison's philanthropy and a longevity institute, and arrives at cord blood. It ends with Bridget remarking that vampires and zombies came up earlier in the day than expected.

## Lambda, State, and the Borg Paragraph

Bridget asks what the two see among enterprise customers, given all the hype that Lambda functions will save us. Andrew says nothing ever goes away, and describes sedimentary layers of mainframes and Java middleware. Some places are like opening a time capsule, where "you can kind of tell what year they stopped learning." Bryan agrees that mainframes still run but are not a growth area, since nobody holds a conference of several hundred people on z/OS.

Andrew says people over-rotate on running a function. What Lambda represents is a fabric of event sources, and S3 is one, so "you can't build useful things with functions, stateless functions, until you have these things." Bryan says Lambda is "a needle exchange for AWS services," and Bridget adds DynamoDB as the other example of services built to keep you in. Bryan, from "stateless land," is asked whether there's state in the world, and Andrew says there is, along with all the hard problems. Bridget says state is all the customer data and money people do business because of.

Looking ahead, Andrew says new applications should be much more aware of their own state. Andrew recommends the Borg paper, which has pages on schedulers and then a single paragraph that Andrew considers more impactful than the best scheduling algorithm: every application running in Borg has an HTTP endpoint that broadcasts metrics about its health. Andrew says that if you did just that in your applications, "you'd get 85%, 90% of the benefit of the way Google runs their applications." Bryan calls Prometheus the Google idea taken to the open source world. Andrew adds that frameworks should make doing the right thing the easy thing for the app developer, and that people are already struggling to monitor Lambda infrastructure.

Bryan wonders how much Lambda will be used in anger rather than for prototyping, noting that the people who love utility billing are utilities, since you can't predict costs in a utility model. Bridget describes a Minneapolis meetup talk from SPS Commerce engineers, who used Lambda a year earlier and then built their own Lambda-alike in-house because Lambda billing didn't fit. Andrew says that when people cite cost savings from Lambda, it's because they were running mostly idle compute instances.

## Open Source Doesn't Die

Bryan says "the open source business model is the second worst business model on the planet," and the worst is being a proprietary infrastructure software company. The Docker CEO had just been replaced that morning, and Bryan recalls the painful period at Joyent when parts of the stack weren't open source. On OpenStack, Bryan says the problem it was solving was a middle management problem in soon-to-be-dead infrastructure companies, and Andrew disagrees that this was the initial goal. Andrew says it became a weird political marketing exercise with little engineering in the core, and that it pulled attention from other promising projects. Andrew's history begins with Eucalyptus, which Andrew says had the birthright to be the open source cloud and mismanaged its community, so that "OpenStack would never have existed if Eucalyptus didn't mismanage its community in the beginning." Bryan says both made the same mistake by trying to be an open source AWS. Andrew's view is that Amazon's advantage wasn't necessarily software but the socio-technical system that had run a massive distributed system for a decade, and that many of the organizations trying to build clouds couldn't manage a multi-node Rails app.

Bryan argues open source outlasts any company: "because open source software can't die." The system Bryan works on descends from Unix, with parts 40 and 50 years old. Postgres was dead on the operating table for a long time, Bryan says, and was revived when things changed. Bryan insists that Illumos has been independent of its Solaris roots for seven years, and that Solaris "is just a very brief proprietary era in a much longer system." Andrew says the Linux and Solaris kernels differ in the quality of engineering, especially around observability. Bryan likes small communities that share values, and says large ones are a mixed blessing. Node.js is the example: Joyent was the company behind it, and Bryan says Joyent and the V8 team shared values around observability, debuggability and rigor that the broader community did not. The community wanted promises, which Bryan calls a bad model "in the operability of software years down the line." Bridget sums it up: day one is very short and day two is forever.

## Doing It Right Now

Bryan says doing things properly initially makes you faster than the limit, and that executive leadership has to understand it. Bridget pushes back that doing it right the first time is seductive and impossible, since nobody has perfect future knowledge. Andrew says "there's nothing more expensive than building the wrong thing," and that sometimes testing a hypothesis with a hack that lives forever is cheaper. Bryan says the complaint isn't about prototypes but about the corners you know you're cutting, like being in someone's code that has never been executed and thinking it would have taken an extra 20 minutes. Andrew says every developer on every keyboard is choosing "between doing things right and doing things right now," every second of every day. Bryan passes on advice from a senior engineer that every line of code is a business decision, so an organization has to value not cutting the corner and "be a craftsperson." Andrew adds that values are about who gets rewarded, and that on a resume with stints of 18 months, 18 months, 18 months, each move often came with a big raise. Matty says the same pressure shows up as analysis paralysis among Matty's customers.

## Integrity

The reward point sets Bryan off. Bryan says the leadership principles of Amazon and similar organizations leave out integrity, noting that Amazon has 14 leadership principles and integrity is not among them. Bryan contrasts that with corporate values of a generation ago, when integrity topped the list, and says "we have stopped aspiring." Bryan admires a final email to Sun employees saying that in 30 years there had been no need to hide the newspaper from the children, and sets that against Uber's behavior. Andrew asks whether Uber has been rewarded or punished, and Bryan answers that Uber's valuation is pretend. Andrew pushes back that many developers have mortgages and families and are managed like factory workers from the Industrial Revolution. Bryan says they are not, that "our children don't die," and that anyone using their brain in a cube farm is among the haves. Andrew answers that the choices people make to get through the day under imposed management structures aren't something Andrew will begrudge them.

## Closing Advice

Bridget asks for a closing statement in 60 seconds. Andrew says "This might not be the podcast you wanted, but it's the podcast you needed," and that integrity starts with individuals: to build structures that have it, you have to think more globally about politics and the implications of decisions, and elevate yourself inside your organization or by creating new ones. Bryan says we live in a great time, making "castles from thought," and "We are literate in a society that is broadly not literate," so it's incumbent on us to increase literacy. Bryan adds "Anyone who bets against humanity is simply ignorant of history," and tells listeners to find their own motivation and take the luxury of being true to themselves. Andrew's last word is that the panel might not have yelled at the cloud, but "we definitely yelled."

Bridget and Matt chat with Andrew Clay Shafer (Pivotal) and Bryan Cantrill (Joyent).


## Community & Event Stuff

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)

### Upcoming conferences

- [Velocity San Jose](https://conferences.oreilly.com/velocity/vl-ca) - discount code "ADO2017" gives 20% off for Gold, Silver, and Bronze passes.

### Open CFPs

* [lots of DevOpsDays](https://devopsdays.org/speaking)
