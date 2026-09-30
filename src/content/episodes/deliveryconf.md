---
title: DeliveryConf
description: Matty talks with Ken Mugrage and Sasha Rosenbaum about DeliveryConf.
date: 2019-10-14T17:48:39.000Z
publishDate: 2019-10-14T17:48:39.000Z
episodeNumber: "137"
podcastFile: arrested-devops-podcast-episode137.mp3
podcastDuration: 34:30
episodeImage: episode/img/deliveryconf.png
episodeBanner: /episode/img/deliveryconf-banner.png
images:
  - /img/social/fb/deliveryconf.png
guests:
  - person: kmugrage
    snapshot: kmugrage
  - person: srosenbaum
    snapshot: srosenbaum3
hosts:
  - mstratton
sponsors:
  - atomist
  - pagerduty
  - sdt
aliases:
  - /137
explicit: yes
transcript: deliveryconf
---

Matty talks with two organizers of a brand new conference, DeliveryConf, which runs January 21st and 22nd, 2020 in Seattle. Ken Mugrage is a Technology Advocate at ThoughtWorks who works on DevOps and continuous delivery and helps organize devopsdays Seattle. Sasha Rosenbaum is a Program Manager on the Azure DevOps team at Microsoft and co-organizes devopsdays Chicago with Matty, who says this isn't paid programming. The date was chosen to avoid the heavy conference season in a city where they probably won't have snow.

## The Gap Between Advice and Implementation

Sasha says devopsdays keeps having non-technical conversations, partly because the audience is so mixed that you don't know who is dev, ops or PM, and partly because as an open source event it doesn't want to endorse products or go deep on technology. People leave with amazing ideas and "have not seen anybody do any implementation of stuff." Ken says every conference has a DevOps track, but the talks say to do security testing, not how it was done on a specific project. Looking around, there were DevOps conferences and language conferences "but not CD conferences."

Ken picks on the talks Ken gives, which stay at a high level because the audience's tech stacks are unknown and 30 minutes isn't enough to go deep. The hope is that what was 5 minutes of a talk becomes a 30-minute talk on how compliance was done on one specific project. Sasha adds that the conference aims to be vendor-neutral, so people can showcase products and techniques and compare them. It's for hands-on practitioners, closer to "hone your craft" than an introduction, and Sasha says a first-timer is probably better off at devopsdays. One gap Sasha hopes to close is continuous delivery for databases: "you can't really continuously deliver your entire software application if you're not able to continuously deliver your database."

## Discussions as First-Class Content

The format is a 30-minute talk followed by a 20-minute facilitated discussion, which will be recorded. Sasha says they love open spaces and wanted to make the conversation first-class content, so people who couldn't attend can listen. Ken says the conversation is about the topic, not the talk, and the aim is "to take the speakers off the pedestal," though the speaker can join or not. The facilitator will ask what challenges people have, what successes they can share, and the magic wand question: what would you want to see in the next two to five years, in product or culture, to make this easier. Sasha notes that Q&A isn't for arguing with the speaker, and this gives people with a different opinion a place to voice it, with rooms to continue offline.

The recordings are audio only, to respect privacy, with a microphone used as a totem, and participation is optional. Ken's hard metric for success is that the discussions get at least as much traffic as the talk videos. Sasha's softer one is seeing the light bulbs go on and people learning they're not alone in their experience. Ken adds that it's a "paid focus group after every talk" for vendors.

## Program

The tagline is learning from today and shaping tomorrow. The opening keynote is Jez Humble and Dave Farley, co-authors of the book Continuous Delivery, which has its 10-year anniversary next year. Heidi Waterhouse from LaunchDarkly will speak on feature toggles. Ken teases machine learning in pipelines and hands-on security sessions, and a second-day panel of executive-level people on what CD will be in the future. The CFP closes the night of the recording.

## Fast Versus Safe

Matty asks where the state of the art is. Ken says the industry is at a crossroads: there's a focus on how long a pipeline takes from commit to production, and a 3-minute pipeline can't have done compliance and security checks. Jez's definition of continuous delivery on continuousdelivery.com "specifically says safely," and Ken was glad DORA now says "on-demand" for the top tier. Matty's version is that it's not as fast as possible but as fast as you need it to be. Matty also tells of an e-commerce boss who said the target for a site performance dashboard was "not slower than last month," which is good while you're improving and less useful once you reach what's appropriate.

Ken argues that what you measure isn't the business value of deploying on demand but the value of the thing you deployed, framed as a hypothesis, and wonders whether machine learning in the pipeline could learn what a change did to the business and kill the canary automatically. Ken also says "I don't think hardly anything that we call AI is AI." Sasha says not everyone is a startup deploying straight to production: people have different compliance requirements and levels of legacy, and "I don't even like the word legacy because like, hey, this is software that's making money for you." Matty supplies "heritage systems."

Matty brings up incident response, where you'd like to restore service without bypassing your normal checks. Ken describes a pipeline on the most recent team that was fairly long with all the security checks, but had a short circuit for emergencies. Basic unit tests and fast tests ran and produced the installer, and someone with the right permissions could click a button to reach production, with the rest of the pipeline tailing it. It was still the same pipeline with things skipped.

## Tickets, Sponsors and Who's Missing

Tickets are at deliveryconf.com, and the code ADO gets 10% off. Ken says the price, about $400 to $450, is higher than most community events because of three tracks and all the recordings, and people who can't attend for financial reasons should reach out, since some sponsors may help. The conference is a not-for-profit backed by devopsdays Seattle, and Ken says it lacks the budget for big promotions. Sasha says hearing that people who didn't know of Sasha's involvement call it a solid conference means "we're actually hitting the mark."

Gold sponsorship includes a sponsored talk, and the goal is deep technical talks and not product pitches. Sponsors submit decks two weeks ahead for review. Ken tells sponsors to bring engineers and product managers, not just sales staff, and says the aim is real solutions to real problems, without requiring live coding. Sasha closes by citing a study that only 3% of women identify as technical in the Dev/CICD space, says it's proving hard to find non-male speakers for the CFP, and invites diverse participants onto the stage.

Matty Stratton talks with guests Ken Mugrage and Sasha Rosenbaum about their new event [DeliveryConf](https://www.deliveryconf.com/).
