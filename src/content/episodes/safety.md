---
title: Let’s be careful out there
description: Guests J. Paul Reed and Mary Thengvall talk about resiliency, safety, and a great new conference - REdeploy
date: 2018-08-01T20:55:48.000Z
publishDate: 2018-08-01T20:55:48.000Z
episodeNumber: "110"
podcastFile: arrested-devops-podcast-episode110.mp3
episodeImage: episode/img/safety.png
episodeBanner: /episode/img/safety-banner.png
images:
  - /img/social/fb/safety.png
guests:
  - person: jreed
    snapshot: jreed
  - person: mthengvall
    snapshot: mthengvall
hosts:
  - mstratton
sponsors:
  - datadog
  - pagerduty
aliases:
  - /110
explicit: no
transcript: safety
---

Matty talks with J. Paul Reed, who returns after the fireside chat with "Grandpa Paul" at the end of the previous year, about the thesis Paul is finishing, and then with Mary Thengvall about resilient systems, teams and people, and the re:Deploy conference they are putting on. Matty records right after ChefConf. The cold open is Paul telling Matty to cut something out.

## Human Factors and System Safety

Paul is finishing the Human Factors and System Safety program at Lund University, a two-year program founded by Sidney Dekker, author of the Field Guide to Understanding Human Error, who built it after getting type rated on the 737 and noticing odd questions about how the airline industry works. Paul's classmates include pilots, air traffic controllers, accident investigators and doctors, among them an orthopedic trauma surgeon and an investigator who looks into deaths in live-fire military exercises. John Allspaw went through the program earlier, making Paul the second IT person. Allspaw's thesis looked at decisions under high-tempo, high-stress incidents. Paul's is on what happens after: how organizations use the artifacts of postmortems and retrospectives.

Paul says classmates in other industries deal with high-tempo, high-stakes situations and keep raising technology's effect on their fields, from electronic health records to airline flight decks and the NTSB report on the Uber crash. Paul says tech people in the program bring context, such as how software gets developed and into an emergency room. Nora Jones of Netflix is in the year behind Paul, and Paul says it opens up how you think about the world when reading postmortems and NTSB reports.

## What Safety Means in IT

Matty asks what safety means beyond redundancy. Paul says many people think they're not in a safety group since they don't write flight control or nuclear software, pointing to the old Java license that excluded certain industries, and Matty mentions Chef's similar EULA. Paul gives two meanings: the business's financial safety, which means understanding the value stream, and the fact that "we live in an increasingly interconnected world," where you don't know how technology gets used. Examples: Wi-Fi pet feeders that starved pets for about a day during a cloud outage, security hardware sold with a cable service that failed to unlocked when the network was cut, and Netflix reaching out to someone who had watched one show for about 80 hours to ask if they were okay. Matty raises Google Duplex, and Paul a report of an Alexa sending a family's conversations to an employee. Matty recalls a tweet that Black Mirror is not supposed to be a how-to, and Paul says letting humans train AI without rules means bad things happen, as with Microsoft's chatbot.

Paul says more backups and redundancy was the right answer up until Three Mile Island, and that Three Mile Island, Chernobyl and the Challenger explosion made people think about the problem differently.

## What Postmortems Produce

Paul's research question asks how the artifacts of a post-incident review are used in a software development and operations company. There was an industry survey and a case study of a high-performing company. In the survey, postmortem was by far the most common term at about 60%, followed by retrospective at 17%, and root cause analysis came up in write-ins. The top two items collected, each at 85 to 90%, were a list of remediation items and an event timeline. One respondent wrote in blame and fault. Some organizations record luck, meaning where they got lucky. Operations engineers update documentation notably more than managers or developers, and larger organizations are less open with their retrospective reports inside the company, which Paul says means people without a conscious bias toward transparency may unconsciously default to less.

## The Company That Doesn't Chase Action Items

The case study company is one everyone would know, called DevOps Co. in the thesis for research protocol reasons. It calls the process an after-incident review, and "they don't focus on remediation items," and sometimes decide not to fix something. Paul found three things. First, the aim is context sharing, not action items. Second, the reviews continuously map the complex sociotechnical system, both technical connections between systems and human ones, such as an overseas team under attack that didn't know who to talk to, and small fires before they blow up. Third, the reviews curate tribal knowledge and culture: anyone can deploy at any time, within guidelines mostly generated by outages. Matty's question for any protective process, such as a change board, is "how many times in the past year has your process saved you?" and nobody can say. Paul says you can get the same outcomes by trusting people's gut feel and not heavyweight checklists.

## Resilient People

Mary has dealt with burnout personally and looks at how to prevent it, how to treat people respectfully, and how to ensure work is valuable in context. Paul tweeted that it's an organizational anti-pattern when some people's vacations matter more than others, and Mary says you can't pay people enough to be online all the time and miss family occasions. Mary says developer relations has no real downtime, since low-season time goes to conference prep and content, and burned-out people say they can't step away because nobody else can cover. Paul describes the sharp end of the system, where work gets done and trade-offs are made without all the information, and says we assume we know how work is done there. Mary says to keep track of your work and be your own PR system to show why your work is valuable and why you need time off.

## re:Deploy

Paul and Mary describe re:Deploy, August 16 and 17 in San Francisco, where the RE stands for resilience engineering, to look at the intersection of technology, organizations and people. Mary says you can't separate resilient tech, people and teams: "You can't have resilient people without having resilient teams to support them." Paul adds that many have run disaster recovery sites that don't work when turned on, so redundancy isn't the whole answer. The conference is looking for sponsors.

Matty's checkouts include Chef Workstation and Automate 2.0 from ChefConf, and the Cardhop contact manager. Mary's pre-order book is The Business Value of Developer Relations, which Matty says Matty is in.

Guests J. Paul Reed and Mary Thengvall talk about resiliency, safety, and a great new conference - [REdeploy](https://re-deploy.io)!

## Community & Event Stuff

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)

### Upcoming conferences

### Open CFPs

- [lots of DevOpsDays](https://devopsdays.org/speaking)

### Discount codes
- ADO2018 for 20% off lots of devopsdays
- MATTY for 20% off [REdeploy](https://re-deploy.io)
