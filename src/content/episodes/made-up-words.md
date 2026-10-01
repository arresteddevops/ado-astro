---
title: Let’s do the devops again with Nicole Forsgren & Tim Gross
description: Bridget and Matt chat with Nicole Forsgren (DORA) and Tim Gross (Joyent).
date: 2017-05-19T00:59:40.000Z
publishDate: 2017-05-19T00:59:40.000Z
episodeNumber: "85"
podcastFile: arrested-devops-podcast-episode085.mp3
episodeImage: episode/img/made-up-words.png
episodeBanner: /episode/img/made-up-words-banner.png
images:
  - /img/social/fb/made-up-words.png
guests:
  - person: nforsgren
    snapshot: nforsgren2
  - person: tgross
    snapshot: tgross
hosts:
  - mstratton
  - bkromhout
sponsors:
  - 10thmagnitude
  - victorops
  - datadog
aliases:
  - /85
  - /madeupwords
youtube: RFY_8Q3pk20
explicit: yes
transcript: made-up-words
---

Bridget and Matty record at GOTO Chicago with Tim Gross, a product engineer at Joyent, and Nicole Forsgren, CEO and Chief Scientist at DORA. Tim kicked off the DevOps track the day before with a talk on software-defined culture, and Nicole gave a talk on how metrics provide signposts and goalposts on a journey to awesome. Matty, who missed both talks, plays the listener, and notes that recording six episodes in a day leaves about three months of content. The cold open is Nicole's LISA story: "Who do you think pays your bills?"

## Measuring the Squishy Stuff

Matty says it's easy to think you can't put science behind culture: "You can't put a Nagios monitor on a human." Nicole says people often respond by proposing to pull measures about people out of HR systems, which won't capture what teams mean by culture, which is high trust, information flow and collaboration across silos. The alternative is a proxy, and turnover is Nicole's example of a weak one, since someone may leave for a better culture, a worse one, a partner's job, or $1 million. Chat logs work only if Slack is the only way people talk, and Nicole's example of what no system will catch is a coworker dropping off a Diet Coke at a desk.

Nicole's answer is psychometric methods, meaning survey questions, done in a research-based way. The Westrum model is the example, named for the researcher Ron Westrum, whose work shows that in high-risk, high-performance teams, a culture that values information flow, high trust, risk sharing and boundary spanning predicts performance. Nicole says the Westrum typology was rewritten, with Nicole's help, into survey questions, six in the short version and seven in the extended one, and that they are open sourced for teams to use every quarter. In the DORA findings over the previous four years it was one of the highest predictors of delivering software with both speed and stability, and it also predicted profitability, productivity and market share. The 2017 State of DevOps Report was due June 15th.

## Small Teams, Moving Needles

Tim has worked mostly in small and mid-sized organizations and worries that a survey would have no meaningful sample size. Nicole says "you can do it with small teams. It still works." Matty, who did this with Nicole at Chef and with customers, says to scope down to the size of a feature team, and adds that Matty doesn't care what number a team lands on, since there's no magic score. What matters is that the parts important to you move, which means asking regularly, not once for a pass or fail.

## Four Principles of Software-Defined Culture

Bridget asks Tim to walk through the four areas from the talk, and Tim says the four are reliability, operability, observability and responsibility, and Tim takes them out of order. Tim jokes that they're a map, not an array, and Matty adds that it will be unsorted every time.

### Reliability

Tim says unreliable software has knock-on effects on the organization. People up all night because of bad on-call burn out and fight with each other, and chasing the shiny normalizes risky decision-making. Nicole says teams need to understand that taking risks is a safe bet and that risks will be shared. Matty cites Charity Majors, who would say that if you haven't broken production, you're not trying.

Nicole says the S3 outage was a favorite case, because the published postmortem described a fat-finger incident and "nowhere does it say human error," which speaks well of both the culture and the systems. Bridget takes from that that building for reliability implicitly means not blaming people when reliability falls short. Matty agrees that "you can't work around human error," since people are going to make mistakes and that doesn't scale. Tim adds that many system measurements are themselves proxies for culture. Uptime, for example, is often a proxy for what your people are doing, and Bridget says it may just reflect whether you patch. Nicole says "anything that's a metric becomes a proxy," representing something in someone else's head, and Nicole recalls that as a hardware performance engineer, response time was "my jam".

### Operability

Tim says operability is about delivering quickly and about keeping an application's behavior understandable and self-contained with the team that owns it. Tim objects to the trend of pushing intelligence out of the application into a third party or a platform, because it creates a cultural imperative that it's fine not to understand these things, and it widens the gap between the platform team and the development team. Matty says black boxes let people treat a problem as someone else's, and supply an excuse: if I don't understand how that works, how could I have done it better? Bridget sums it up as "microservices are a game of point the finger and plausible deniability," and Matty says "All of IT is a game of point the finger." Nicole adds "Wait, you mean containers won't fix my culture? What?"

Nicole says metrics shape culture and can help teams communicate across boundaries, but they turn problematic when a team throws a container or an app over the wall with a metric that only makes sense to that team. Bridget asks what makes or breaks operability, and Tim says the measurements have to mean something to the consumers of the system, not serve as cover. A vague service uptime number isn't what a consuming team needs. They need to know whether they're being throttled, or whether clients should refresh service discovery. Nicole says to tie metrics to a line-of-business goal, and Bridget cites James Turnbull's argument in The Art of Monitoring that you are not the consumer of your metrics, which Bridget says ops-focused people forget when they build dashboards around what wakes them up.

## Outcomes, Not NGINX

Matty says that outside the echo chamber the simple point still needs making: "Outcomes are like the only thing that matters," specifically the business outcome, and for a nonprofit, Tim adds, that is a mission. Matty recalls a sysadmin freaking out that SQL Server was using all the memory on the server, when that is what the memory is for. Matty also says to write a Chef test for whether a web server does its job and not whether it installed NGINX, and Bridget says the test should look at ports 80 and 443.

Matty retells a story Sasha Bates told on the Ship Show about working for a large retailer right before Christmas, when a product team wanted to push a release and Sasha objected on stability grounds. The boss's answer was "your job is not to keep the website up. Your job is to deliver the features that the company needs." Bridget's reply: "I think the company might need a feature of being up."

Nicole tells of chairing the LISA conference in 2014, when Courtney Kistler, who had been leading the Nordstrom transformation, stood in for a closing keynote speaker who had a medical emergency. The ballroom of old-school sysadmins was restless about a talk on business transformation, so Nicole and Tom Limoncelli told them to listen, asking "Who the F do you think you're keeping email servers up for?" After about ten minutes of business translation, Nicole says, the room was into it, and "Courtney won them over hard."

## Responsibility and People

Tim says the fourth principle is about externalities. When talking to people about containers, Tim says they don't care about containers: they have a mission, and people whose lives should be fulfilling. Tim adds that people are not just there to fulfill the mission, and on the CEO's duty to shareholders Tim says "fiduciary duty, which is bullshit, by the way. That's not actually a law."

Nicole supplies data: over four years, the DORA research found that employees of high-performing teams are 2.2 times more likely to recommend their organization as a great place to work, and research from Harvard found that employees who recommend their workplace predict higher revenue growth. So "even if you want to be a selfish asshole," making the workplace better increases hiring, retention and revenue. Bridget asks the room who is hiring, and every hand is up. Nicole says hiring costs more than retaining, and "Don't be a jerk." Tim says Tim's gut says the same thing, and it's good to see data.

## Observability and Debuggability

Tim says the observability section moves from traditional monitoring toward tools for exploring systems iteratively and collaboratively, not a lone sysadmin watching a dashboard. The stronger point was debuggability, which Bryan Cantrill discussed in the keynote. When a stack has a black box, whether the operating system, a platform or a web server's event loop, people end up saying "and then magic happened." That leaves software less reliable and is dissatisfying for technical people, Tim says, because "This is all software. It's not magic."

Nicole adds that it's not enough to have data: you have to act on it, and the highest paid person in the organization "sucks at this. Use your data." For teams without instrumentation, Nicole says to start by asking people. Can you roll anything out without asking other teams? Are you testing, have you shifted left on security? Bridget adds that if you can't deploy a microservice without deploying three others, you may have built a distributed monolith. Matty says to do it iteratively: one question is better than none, and it's information you didn't have yesterday.

Nicole says some things only surveys can give you. Systems can tell you what's in version control but not what isn't: "Only your people can tell you what is not in version control," and what is bypassing your systems. Bridget asks Tim about the automation Tim built to capture the state of an AWS account before a migration, and Tim says you can't capture everything, so you start from the top level. That meant documenting the network first, "because nothing else runs without the network."

Nicole cautions that instrumenting the easy thing for a quick win creates a pile of metrics, and once something is measured people start paying attention to it. Matty adds that it creates a culture that cares about CPU. Tim asks whether asking people questions has the same effect, and Nicole says it does, because collecting any metric sends the signal that it matters. The problem comes when it turns into a demand to answer 10 on a 1 to 10 scale or else. Matty says the survey for the car Matty had just bought worked that way, and did the same for a Microsoft TAM years earlier, where a scale of 1 to 10 was really pass or fail.

## Closing Advice

Nicole says to start measuring, do it honestly, and keep measuring periodically: "Even a bad baseline is super powerful." Tim agrees and adds that you will chase what you measure, so measure the right things. Nicole is glad they agreed, and Tim says there was no screaming on this stage at all.

Bridget and Matt chat with Nicole Forsgren (DORA) and Tim Gross (Joyent).

### Nicole
* [Be Awesome With DevOps (Through Data!)](https://gotochgo.com/2017/sessions/42)
* [State of DevOps Report](https://devops-research.com/research.html)
* [Westrum model of organizational culture](https://continuousdelivery.com/implementing/culture/)

### Tim
* [Software-Defined Culture](https://gotochgo.com/2017/sessions/43)
* [ContainerPilot](https://www.joyent.com/containerpilot)


## Community & Event Stuff

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)

### Upcoming conferences

- [Velocity San Jose](https://conferences.oreilly.com/velocity/vl-ca) - discount code "ADO2017" gives 20% off for Gold, Silver, and Bronze passes.

### Open CFPs

* [lots of DevOpsDays](https://devopsdays.org/speaking)
