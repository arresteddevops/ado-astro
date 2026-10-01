---
title: ChefConf 2016 with Jon Cowie, Fletcher Nichol, and Annie Hedgpeth
description: Recorded at ChefConf 2016 in Austin, Texas, with delightful guests Annie Hedgpeth, Fletcher Nichol, and Jon Cowie. We talk about all the new hotness of Habitat and Chef Automate, as well as cover the experiences of five years span of ChefConf attendee experience. Plus, Trevor throws shade at 'DevOps 2.0'.
date: 2016-07-27T01:55:48.000Z
publishDate: 2016-07-27T01:55:48.000Z
episodeNumber: "67"
podcastFile: arrested-devops-podcast-episode067.mp3
episodeImage: episode/img/chefconf-2016.png
episodeBanner: /episode/img/chefconf-2016-banner.png
images:
  - /img/social/fb/chefconf-2016.png
guests:
  - person: ahedgpeth
    snapshot: ahedgpeth
  - person: fnichol
    snapshot: fnichol
  - person: jcowie
    snapshot: jcowie
hosts:
  - mstratton
  - thess
sponsors: []
aliases:
  - /67
  - /chefconf2016
youtube: U7i4JE4Zk7w
transcript: chefconf-2016
explicit: yes
---

Matty and Trevor record live from the expo floor at ChefConf 2016 in Austin, at the end of day one, with three guests who between them span all five ChefConfs. Jon Cowie, a staff ops engineer at Etsy, was on episode 11 and is at a third or fourth ChefConf. Fletcher Nichol, a longtime Chef user who now works on Habitat, has been to every one. Annie Hedgpeth is at a first-ever technical conference and has been in technology for about three months. Matty is at a third ChefConf and works at Chef, so parts of this are a report on the company's announcements from the inside. The show opens on Trevor pleading, "dear God, don't call it DevOps 2.0."

## Big Companies Shipping Ideas

Matty notes the keynote theme of shipping delight and velocity. Jon says what has been most interesting over the years is that this rapid delivery has spread to much bigger companies that traditionally didn't work that way: the National Football League and GE spoke that day, and GE said it generates something like 40% of the world's power and needs to iterate on features. Trevor adds Alaska Airlines to the list and says the point is that they're succeeding, since so many have said they can't because they're big.

Fletcher brings an example to conversations with friends whose companies say they can't move faster: Standard Bank went from days or weeks to hours or minutes, and Disney said last year it had been at it five years, so a competitor starting now is five years behind a company that's already faster than it was two years ago. Fletcher argues the audit-every-three-years compliance theater "just does not ring true to me anymore." Matty says Alaska presented itself as an 84-year-old multi-billion-dollar startup that doesn't throw money at problems. Jon says it is easy to call startups disruptive when the cost of being wrong is slight, and it's cool to see an airline attack the idea that travel just sucks, including a demo of e-ink baggage tags that update from the mobile app.

Matty adds a customer who said Chef had started to break down their silos, because everyone in the room had never worked together until they started doing it. Matty also recalls enterprise customers saying Matty was the fifth person that day to tell them to be like Facebook, and the Etsy episode line that they're "not a unicorn, they're a sparkly horse." Trevor has just been in Singapore, running a Chef training at a PowerShell meetup where DBAs, bankers and machine automation people all had the same story.

## Accessible, Not Dumbed Down

Annie wants to show people that InSpec and Chef are accessible, and says, at three months in, that "there should be no fear." Matty says the idea behind Chef Compliance and InSpec was to communicate with code, so compliance and audit teams hand you compliant InSpec code in place of Excel sheets and PDFs, and has been asked whether they'd want to. Annie's point, which Matty loves, is that it is accessible, though not easy. Annie credits Test Kitchen, and a long conversation with Fletcher the day before, for lowering the barrier to entry, and says open source is making things more accessible to non-technical people, and "I don't think it's dumbing it down at all."

Matty says that moves the value to the content, not the arcane, and admits some veterans took protectiveness or job security from being the only one who knows. Matty's response is to let the robots do the boring stuff and use your big brain on other things.

## The Community Summit

Annie loved the Community Summit, calling it a hallway track times five. Annie proposed a security compliance topic and only about eight people put a dot on the card, which was informative, given Barry's keynote claim that compliance is the bottleneck. Fletcher's take is to give it a year or two: at the very first Opscode summit, where Fletcher got a free ticket for having contributed to Chef, conversations about testing infrastructure got mixed reactions, and it later became a real thing. Matty adds having asked Fletcher about Test Kitchen for Windows two years ago, then 45 people showed up to an open space six months later, and six months after that it shipped.

## How ChefConf Has Changed

Fletcher says the DNA is the same, professionally done and with talks you want to see, but at the first one companies were half saying this is what we're thinking of doing, and by years two and three they were sharing lessons learned, from automating infrastructure to testing it to continuous delivery. This year's theme is going from someone's brain to production, which pushes people to talk about the business, and CEOs now come too, so the audience is the whole organization. Fletcher's mind-blown year was when Facebook and Disney talked.

Trevor recalls telling Jon last year, a month into using Chef, that it felt like lying to clients, and Jon replied "slow down, you're an expert because you can find the answers." Jon adds that Chef is a for-profit company whose future is in enterprises, but the open source core hasn't been lost: Facebook invests heavily in the community, Target contributes cookbooks, and the governing board and most project lieutenants aren't Chef employees.

## Automate and Habitat

Jon says earlier Chef web UIs were built by and for terminal people, and someone told Jon during the announcement "thank God Chef has a sane UI at last." It gives a view of converging nodes, changes deployed and compliance, and Jon hesitates to call it a single pane of glass but says it's a tightly scoped one. Matty likes that the decisions were about what belongs in a UI, meaning visualization. Automate's three pillars are Chef, Habitat and InSpec, which Matty notes are the three guests, more or less, and Fletcher corrects Matty that they're products, not projects.

Fletcher wants well-behaved services from Habitat. Startups with infinite time might build everything like Netflix components, with health checks, streamed metrics and self-clustering, but most business software, even a mainframe, doesn't, and if every service, even Postgres, behaved the same way, you could compose systems on top. People try to fit it into something they know, like Docker, and Fletcher says the confusion comes from the pieces. The guest says the seed of the idea "has legs and I can feel it in my gut." Matty says people wrapped shell scripts in execute blocks when they first met Chef, and Habitat needs the same step back: articulate what you want and let the product handle the sausage. Fletcher says there's a "Chefness," a consistent company DNA across three products that come at you at right angles.

## DevOps 2.0

Trevor has been hearing people ask what comes next for DevOps 2.0, and hopes that saying it on the show will bring enough ridicule that it never sees daylight. Trevor called the person after the keynote and said the thing they meant already has a better name. Jon says these labels are usually a logical evolution of what people have been doing, moving into new areas, and "we just happen to like sticking names on it that look good in headlines." Matty says jargon is "a linguistic shortcut for communication," which fails when it means different things to different people.

## Favorite Talks and What's Next

Annie loved the InSpec talk by Christoph Hartmann, standing room only, where the speaker tested something for compliance and remediated it with a cookbook in 20 minutes. Fletcher's moments were the GE presenter and a colleague's Habitat talk that revealed an automatic sharding approach that was new to Fletcher. Jon's favorite was Tim Smith on composable cookbooks with custom resources, using the Tomcat community cookbook as an example of one that grew to include Gentoo and systemd support until it did none well, an honest retrospective from a Chef employee. Jon calls Chef "a toolbox that gives you the tools to solve your own problems," and says that is why composable resources beat a drop-in cookbook. Trevor liked the CTO and psychologist keynote, which helped with a transformation project Trevor is leading in Singapore, and the Target talk on Chef and SharePoint, which they are working on open sourcing.

Looking ahead, Jon is more interested in organizational transformation as Jon's role moves toward management, and this is the first ChefConf where the guest isn't speaking. Fletcher is looking forward to Adam Jacob's second-day keynote, which has been a personal turning point at earlier ones, and to talking to people about whether Habitat means you need less orchestration. Annie predicts next year will be a lot more about security, since it's still siloed and a huge bottleneck.

Awesome videos from ChefConf:

- [Chef Presents: HugOps](https://www.youtube.com/watch?v=pW48v1xAPyI)
- [Barry Crist - ChefConf 2016 Keynote](https://www.youtube.com/watch?v=mA-gozxxrPo)
- [Chef Automate Demo - ChefConf 2016 Keynote](https://www.youtube.com/watch?v=ihnrB_CNn0o)
- [Veresh Sita, Alaska Airlines - ChefConf 2016 Keynote](https://www.youtube.com/watch?v=mGJkhuRlvTo)

Other delightful stuff:

- [Habitat](https://habitat.sh)
- [Chef Automate](https://www.chef.io/automate/)
