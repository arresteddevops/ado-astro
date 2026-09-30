---
title: devopsdays Minneapolis 2016
description: Bridget chats about enterprise transformation and the democratizing effect of platforms with guests Charity Majors, Nicole Forsgren, Andrew Clay Shafer, and James Watters, in front of a live studio audience at devopsdays Minneapolis 2016.
date: 2016-07-30T12:55:48.000Z
publishDate: 2016-07-30T12:55:48.000Z
episodeNumber: "68"
podcastFile: arrested-devops-podcast-episode068.mp3
episodeImage: episode/img/devopsdays-minneapolis-2016.png
episodeBanner: /episode/img/devopsdays-minneapolis-2016-banner.png
images:
  - /img/social/fb/devopsdays-minneapolis-2016.png
guests:
  - person: nforsgren
    snapshot: nforsgren
  - person: cmajors
    snapshot: cmajors2
  - person: ashafer
    snapshot: ashafer
  - person: jwatters
    snapshot: jwatters
hosts:
  - bkromhout
sponsors: []
aliases:
  - /68
  - /devopsdaysminneapolis2016
youtube: 5CM5_JkrRa4
explicit: yes
transcript: devopsdays-minneapolis-2016
---

Bridget records a live panel in front of a studio audience at DevOpsDays Minneapolis, largely improvised. The panelists are Charity Majors, who founded Honeycomb, the company formerly known as Hound until a rename two or three weeks earlier, Nicole Forsgren, who is at Chef and a co-founder of DevOps Research and Assessment, Andrew Clay Shafer, and James Watters of Pivotal, who is responsible for Pivotal's products. Bridget reports to Andrew at Pivotal. Bridget admits forgetting to tell most of them that a podcast was the plan, and that they are in fact being live-streamed. Andrew reminds Bridget that last year's taping, which was billed as eating sushi with Andrew, had no sushi. Nicole opens with a line that returns later: "Teams deliver software, individuals don't. Teams perform, individuals don't."

## Everyone Is a Software Company

Bridget asks what kinds of companies are realizing software matters. James mentions Merrill, a sponsor, whose executives were betting on a new software product as a global SaaS brand. Charity says platforms mean you never know who will show up: Disney signed up and created an account without talking to them, next to 13-year-olds building software on the same platforms as corporate America. Charity calls it the democratization of tools that used to be a competitive edge for big vendors with giant R&D budgets. Andrew describes a reinforcing spiral that started with open source, where the primitives for building Facebook, Google and Amazon became available, and has gone up the stack to things like TensorFlow, so you can start thinking about your domain and have neural networks. "The democracy is going up the stack," Andrew says, and James adds "abstraction levels going up democratize technologies," like a toddler using a touchscreen.

Nicole says the companies doing it right reach customers earlier, get to market and feedback faster, and reduce complexity with an MVP, and the ones that spend a year on an RFP fall behind. Charity says that's why hashtag NoOps draws a wince: operations isn't vanishing, good operations is a competitive advantage, and what is shifting is the definition.

## Operations Isn't Going Away, and Neither Is Its Value

Charity describes "the shadow self of DevOps": the industry has spent almost a decade telling ops people to write better code and tests, but hasn't told developers what they need to learn, the operational skills that let them build, ship and maintain products. Andrew dislikes labeling people as ops or dev, and prefers thinking in capabilities, since not everyone can do everything as organizations scale. Andrew says NoOps is a reaction to a world where sysadmins were responsible for the mail, and that "the systems are actually a reflection of the organization." Charity says anyone giving advice without context is selling nonsense. James asks enterprises what problem they're solving before talking about product differentiation, and asks how long deploys take. One bank told James eight weeks and 10% of their staff, a year into building their own platform. Nicole says that is solidly mid-to-low performance, and not even the worst of it.

Charity says an inherent trait of infrastructure done well is that you don't notice it, like roads, and Bridget recalls the Minneapolis freeway that fell into the river in 2007. Nicole adds "when the work is done correctly, the work disappears," which contributes to devaluing it, and points to systematic salary differences between development and ops, and Charity says Google couldn't retain SREs until it paid them more than software engineers. Andrew says leading-edge cloud-native companies don't have as much of a disparity, and that treating IT as a cost center forces bad behavior. James says offshoring tried to lower the unit cost of developers as paying less for ops did. James describes operators running thousands of containers and hundreds of apps and says raising abstraction lets an operator have leverage, so James tells the operators' bosses how valuable the operators are.

James's advice for IT professionals is that "application architecture and operations architecture are not dissimilar things," and to think about how a database is operated, not just its API. Andrew says lots of people who think they have operations problems have architecture problems, and adds, "Day 2 matters."

## Meeting People Where They Are

After James leaves, Charity says context is everything, and Andrew says continuous delivery and microservices can sound like fairy tales to someone far from them. Nicole says you have to meet people where they are and help them envision what's possible, remembering the comfort of doing it manually back at IBM. Andrew uses a marathon analogy: if you're not ready and you try it, you'll hurt yourself. Charity's version is a patient in the emergency room with a broken leg and blood spurting from their head, who shouldn't be worried about skin cancer yet. First stabilize the patient, and the top skill in startups is "ruthless prioritization." Andrew says overfunded startups fail because cash protects them from their context.

Asked how large organizations get startup nimbleness, Nicole says it happens in small teams that try something and scale, not in an organization-wide nimble process with posters. Charity says Facebook was a revelation, with a horizon 18 months out, and that what works at scale is "Outcomes-oriented and trust," define an outcome, develop trust and then go hands-off, empowering people to make mistakes as long as they won't destroy the company. Andrew says smart people solve problems, and also, "Smart people also cause problems." Charity says every workplace of Charity's had an outage caused by nearly dropping all the data.

## Careers, Teams, and Performance Reviews

An audience member asks about HR and career development in DevOps teams. Charity says what an org values differs, like Heroku's five nines counting toward promotions, and signaling what you value is how people are incentivized. Charity likes asking reviewers who they would most like to be paired with on call, or would call at 3 a.m., and who they least want to be paired with, since it differs from who the best engineer is. Andrew says work can be done so that you're better at it afterwards, and if not, reevaluate the work, and adds that not confronting incompetence demoralizes the rest. Nicole says university doesn't prepare you for distributed software or continuous delivery, for developers or ops.

Nicole's rant is that individual performance reviews are nonsense, because "Teams deliver software, individuals don't," and invisible work like the person who glues the team together may show the fewest commits. Andrew says "As soon as you make a measure a target, you made the measure useless," and takes a contrarian position that humans are non-fungible. Nicole says Google's study of 36,000 engineers found team dynamics, with psychological safety first, matter most, and Charity says Google still hires "as though they're hiring for Lego bricks." Andrew describes the 80 percenter persona who can prototype anything overnight and will never build anything that belongs in production. Bridget recalls Alice Goldfuss's talk on rock stars, builders and janitors. Charity says startups have the advantage of hiring for what the team needs, and that constrained resources drive creativity, and you can carve out a small budget for a team inside a big company, like a startup.

## What the Data Says About Enterprises

Nicole responds to the assumption that the data doesn't apply to enterprises: "there are no statistical differences among the different enterprise sizes," or by industry, including highly regulated ones. Nicole classifies teams as high, medium and low performers by throughput, meaning deploy frequency and lead time, and stability, meaning mean time to restore and change fail rate. High performers score significantly higher on the Westrum culture measure, with high trust, good information flow and messengers not shot. Practices like version control of infrastructure, application and configuration differ, and the firms' characteristics don't. Nicole also sees a 50% difference in stock price performance between high and low performers over three years. Charity summarizes: you have no excuse. Bridget notes a recent conversation with a large company excited to be getting Git this year.

An audience member asks whether high performers do stability or throughput first. Nicole doesn't have data on sequence and doesn't see trade-offs, and says gains now come in speed because "slow is the new down" and stability is near its ceiling. Andrew adds "Each nine costs 10 times more than the last one." Another audience member asks Andrew about synthesizing ideas, and Andrew says the best thing a technical person can do for their career is learn to speak and to write, helped by Andrew's time on a debate scholarship.

## Takeaways

Charity has said no to 26 conferences over the next six months, and wants more acknowledgement at DevOpsDays that this is for software engineers too. Nicole shares Andrew's ideas from the conference: "all code is technical debt," so people should be rewarded for removing it, and "software is never the endgame," so do things for the business, the customer, not because of DevOps. Andrew adds that tests are code and thinks DevOps, microservices and continuous delivery are a single phenomenon, a cloud-native paradigm that can't be treated as separate initiatives in separate silos, and cites Deming: "change is not mandatory. Survival is not mandatory either." Bridget closes by praising Jeff Smith's talk from Grubhub about what happened when they did DevOps, with the spoiler that not everything is unicorns and rainbows.

How do large enterprises transform the way they do IT? What does it mean for every company to become a software company? Our panel of experts at devopsdays Minneapolis 2016 has worked in some of the largest orgs out there and has seen a lot of transformation first-hand.

- [devopsdays Minneapolis](http://www.devopsdays.org/events/2016-minneapolis/welcome/)

- [Alice Goldfuss - Rockstars, Builders, Janitors: You're doing it wrong](https://www.youtube.com/watch?v=posb7CzWSFc)

- [2016 State of DevOps Report](https://puppet.com/resources/white-paper/2016-state-of-devops-report)
