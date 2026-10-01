---
title: Operationalizing Open Source with Michael Hedgpeth and Doug Ireton
description: Matt and Bridget chat with Michael Hedgpeth (NCR) and Doug Ireton (1Strategy) about organizations adopting open source.
date: 2016-08-30T01:55:48.000Z
publishDate: 2016-08-30T01:55:48.000Z
episodeNumber: "70"
podcastFile: arrested-devops-podcast-episode070.mp3
episodeImage: episode/img/open-source-ops.png
episodeBanner: /episode/img/open-source-ops-banner.png
images:
  - /img/social/fb/open-source-ops.png
guests:
  - person: mhedgpeth
    snapshot: mhedgpeth
  - person: direton
    snapshot: direton
hosts:
  - mstratton
  - bkromhout
sponsors:
  - 10thmagnitude
  - datadog
  - hired
aliases:
  - /70
  - /opensourceops
youtube: UGUg6F4gCuM
explicit: yes
transcript: open-source-ops
---

This is the show's first experiment with a guest host. Michael Hedgpeth of NCR, who is working on DevOps in the company's hospitality division and worked with Matty on bringing Chef into NCR, takes the host chair, and Matty and Bridget are the guests, alongside Doug Ireton, a Senior AWS Chef Engineer at 1Strategy. Michael proposed the show after catching part of Doug's ChefConf talk on operationalizing open source in the enterprise, and realizing there were questions for all three of them. Bridget, who does tech advocacy for Cloud Foundry at Pivotal, opens with the line that comes back later: people contribute to open source out of passion, but they "also like to sleep. And see their families."

## Nordstrom's Four-Year Journey

Doug was the unofficial go-to person for open source questions at Nordstrom, a setup that needed no formal committee or title, just people who care, as Doug tells it. Doug's main takeaway is that "culture change takes time": it took about four years to go from open source contributions being allowed to open source being the default for fast-moving teams. Doug walks through the timeline. In 2008 the only open source they used was Red Hat Enterprise Linux and nobody went to conferences. They bought Chef in spring 2012, and in fall 2012 a VP said contributing is part of using open source, and employees signed an intellectual property agreement. In 2015 developers wanted to contribute to React.js, which required a contributor license agreement, and getting Facebook's approved took about four months, a lot of back and forth from legal and two VPs' approval. By 2016 the Google corporate CLA, for Kubernetes contributions, was signed in a week.

Doug says the close relationship with legal never developed, and wishes it had. Leadership approval was in place, but the VP first approached sent the request to another VP who then left, and Doug suspects a non-technology company's legal team may not focus on differences between licenses.

## From Config Management to Everything Else

Michael asks how starting with Chef led to open source in core development. Doug says Nordstrom is a big company, Doug's team never used Kubernetes or React, but leadership came to see that open source lets you move faster instead of a six-month vendor selection, and app teams co-evolved with the Chef users. Bridget says it isn't only for frontend teams, and that if a vendor tells you their platform is the only thing, you should ask whether it's built out of open source. Michael says for a Microsoft organization like NCR, the world of many tools instead of one umbrella is a big shift, and Chef helped them take baby steps toward being community members.

Matty says the same holds for IBM shops, with the old joke that nobody got fired for buying IBM. Matty describes going to a vendor with a problem and being told they don't quite have it, then buying the closest thing anyway and taking on tech debt, as with a BizTalk system that could have been a small open source tool. CIOs love "single throat to choke," but buying everything from one vendor doesn't mean it works together.

## Standardization Versus Freedom

Michael says NCR wants to standardize for efficiency, which runs against the open source idea of letting teams pick the best tools. Bridget says a well-composed platform like Cloud Foundry isn't opposed to devs using small tools, as long as choices are open and compatible. Doug uses Netflix, where most teams use Java because there is a paved road, but you can choose something else and support it yourself. People resist standards from a central architecture team that reads white papers and talks to vendors, and accept them from architects embedded on dev teams who write code and support production, and Nordstrom's API teams have moved to Go and Node.

Matty says the best way to get people to do something is "to make the thing you want them to do to be the easiest way to do the thing they want to do," not "thou must." Matty advises a customer to think about the result they don't want, such as an artifact that enables remote logging, instead of policing how people write infrastructure code, and notes that in a huge enterprise, standards have to get vague as you move up. Michael's takeaway is that "standardization is great when it enables freedom," and that Chef works that way for NCR, since it made adding HashiCorp Consul easy. Bridget adds that organizations adopt Netflix OSS like Eureka and Hystrix because good, battle-tested tooling gives an incentive to choose the tried-and-true path.

## Open Source and Hiring

Doug's talk argued that an open source stance affects hiring. Several engineers said they looked at Nordstrom's GitHub profile before interviewing, and Doug says "your GitHub organization is your organization's resume in the open source world." They were able to hire someone from Chef primarily because they contributed, and it helps retention too. Doug ran a Twitter poll asking whether people would work for a company that didn't allow open source contributions: 68% disagreed, 25% were neutral and 7% agreed. Bridget says companies building on open source can't expect it all to be written in people's spare time, and should pay employees to contribute. Doug adds that private forks become untenable quickly.

## Internal Community, Vendors, and Pull Requests

Michael asks when paying for help with open source makes sense. Michael describes the open source workflow of running it, Googling the error and running it again, and Matty says the important part is then sharing what you learned so the next person doesn't repeat it. Companies with healthy internal communities look just like public ones, behind the firewall, and Matty can tell what wiki software customers use from referral links to ADO episodes. Michael says the relationship with Chef morphed from support to consulting, which helped with thinking strategically about who talks to whom, and gives an example of a colleague in Prague who disagreed with how Michael did Chef, and Michael told the colleague to go with it, which was freeing.

Michael asks whether relying on a vendor for support of an open source tool is unhealthy. Matty says the vast majority of Chef users don't pay, and that if all a vendor sells is support, it isn't a sustainable business, because you'll eventually get better at the product than they are. Matty adds that with closed source, support might be all you get and you can't stop paying. Bridget says Cloud Foundry has contributors like IBM, HP, Swisscom and GE, and Pivotal contributes about 65% of the commits, and that a free 60-day trial of the commercial product lets people try it before paying. So "I can't install it from GitHub, so I can't cut a PO" is a straw man. Matty says if a customer has to spend a week standing up infrastructure to see what a tool does, the vendor has failed, and the goal is time to first delight. Bridget says Andrew Clay Shafer calls it "mean time to dopamine." Bridget also says look at the community around a project, like the US government's 18F building cloud.gov on open source Cloud Foundry, with Terraform scripts on GitHub. Doug pushes vendors to hand over a Terraform script or CloudFormation.

Doug says enterprises new to open source respond to bugs with "the vendor should fix that," but they have unique insight into the problem. Doug found a bug in Supermarket that could be fixed in five minutes, and it was merged within an hour, versus filing a support ticket that takes two and a half weeks. Michael says Chef support once demonstrated the same lesson by opening a GitHub issue, submitting the PR and reporting back with a link. Doug has also been on a closed-source project where the vendor said it might get to a fix in six months, after millions were paid. Bridget likes subscription models because vendors care about churn, and Matty says the dirty secret is that "Renewal time is the best time to ask for anything from your vendor."

## Freemium and Build Versus Buy

Michael asks about the freemium model like Chef Automate. Matty says that in Chef 11 you had to reinstall everything to drop the enterprise version, whereas since Chef 12 and through Automate, the core is open source and everything around it is a wrapper, and "you want that premium thing to be sticky because it's valuable, not because it's in the way." Michael asks whether the answer is instead to build a Jenkins pipeline and Elasticsearch cluster in-house. Bridget's answer is that it depends, but the fallacy in organizations with smart people is thinking they must master everything down to chip fabrication: "you should only build the things that make a differentiating business value for you." At DramaFever, they didn't build their own CDN, and when the Akamai bill was high, they prepared to go multi-CDN and it turned out Akamai would negotiate. They did build a Docker, Packer and Chef-based platform, since it let them stand up a K-drama site or a horror site from the same image.

Matty says there's no reason to run your own email, and that "modern DevOps, we're all about coulda, not about shoulda." Pay someone to do the thing you'll never do again, like setting up a cluster once every five years, but not to write automation you'll change. Matty recalls dev leads at Apartments.com who wanted to write their own authentication for an internal customer service app when they were a Microsoft shop with Active Directory, and calls that hubris and resume-driven development. Doug adds that consulting is most useful when the consultants partner with you and you dedicate engineering hours, and that paying for Chef was worthwhile for the support and the add-ons customers expected, like a web UI. Matty ends with an example: at Chef they didn't write their own search provider, they use Solr and Elasticsearch.

Matt and Bridget chat with Michael Hedgpeth (NCR) and Doug Ireton (1Strategy) about organizations adopting open source.


### Checkouts

## Michael
* [DevOps Days DFW](https://www.devopsdays.org/events/2016-dallas/welcome/) on September 15 & 16 - I’ll be speaking
* [Toyota Kata](https://www.amazon.com/Toyota-Kata-Managing-Improvement-Adaptiveness/dp/0071635238/ref=sr_1_1?s=books&ie=UTF8&qid=1472494412&sr=1-1&keywords=toyota+kata) book
* [PBS SpaceTime](https://www.youtube.com/channel/UC7_gcs09iThXybpVgjHZ_7g)

## Doug
* [Habitat for application automation](https://www.habitat.sh/)
* [Adam Jacob’s DevOps KungFu talk](https://www.youtube.com/watch?v=_DEToXsgrPc)

## Bridget
* [Coté on “the ROI on devops/agile/etc”](https://cote.io/2016/08/27/roi-for-agile-and-devops/)
* BWCA is part of [Superior National Forest](http://www.recreation.gov/wildernessAreaDetails.do?contractCode=NRSO&parkId=72600). The [National Park Service](https://www.nps.gov/index.htm) is 100 years old this year and [National Forests](http://www.fs.fed.us/) are different than parks!
* The West Wing (streaming on Netflix), because it’s election time.

## Matt
* [Wakatime](http://wakatime.com) - fitbit for programmers
* Homeland!!!

Image credit: https://flic.kr/p/3V99c8

## Community & Event Stuff
If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at arresteddevops.com/conf

### Upcoming conferences

For any [devopsdays](http://devopsdays.org), try the code ADO2016! It should get you 20% off.
Also now works on O'Reilly [Security](http://conferences.oreilly.com/security) and [Velocity](http://conferences.oreilly.com/velocity) conferences.

* [Devopsdays.org](https://devopsdays.org) has dates announced for Sydney - Dec 1-2

### Open CFPs

* A lot of devopsdays CFPs closing soon - see [devopsdays.org/speaking](https://devopsdays.org/speaking)
* DevOpsDays Madison, Detroit, Cape Town, and Nashville open until August 31
* DevOpsDays Berlin open until September 1
* DevOpsDays Bangalore open until September 4
* DevOpsDays Ghent open until September 6

### Where we’ll be for the upcoming fortnight

* Bridget - Canoeing with no phone or internet, and then Velocity NY/devopsdays NY.
* Matt - DevOpsDays Chicago Aug 30-31
