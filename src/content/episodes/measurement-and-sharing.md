---
title: Measurement and Sharing with Nicole Forsgren
description: Chef's Dr. Nicole Forsgren has a frank talk with Matt about the often neglected portions of CAMS theory - Measurement and Sharing. She gives real-world, practical tips on how to use data to drive a transformation...and even how culture can be measured.
date: 2015-12-15T17:20:55.000Z
publishDate: 2015-12-15T17:20:55.000Z
episodeNumber: "52"
podcastFile: arrested-devops-podcast-episode052.mp3
episodeImage: episode/img/measurement-and-sharing.png
episodeBanner: /episode/img/measurement-and-sharing-banner.png
images:
  - /img/social/fb/measurement-and-sharing.png
guests:
  - person: nforsgren
    snapshot: nforsgren
hosts:
  - mstratton
sponsors:
  - 10thmagnitude
  - datadog
aliases:
  - /52
  - /measurementandsharing
explicit: yes
transcript: measurement-and-sharing
---

Matty sits down with Chef's Dr. Nicole Forsgren, recorded at the Chef Community Summit, to cover the two parts of CAMS the show hasn't gotten to: measurement and sharing. Matty apologizes at the end for taking so long to edit and publish it. The conversation is mostly practical: what to measure first, how to get the numbers in front of people who don't speak your language, and how to measure culture without giving up and calling it squishy.

## From an AS/400 to a PhD in Charts and Graphs

Matty says Adam Jacob likes to say Nicole has a doctorate in charts and graphs. Nicole started on an AS/400 doing programming and system administration, in green screen, "laying cable in 4-inch heels," which she says is true. She then got a PhD in management information systems, because she wanted to look at how technology use plays into business outcomes, and how organizational and cultural factors affect it, which she says is really CAMS. Her focus since her dissertation has been tech professionals, and she tells a story about her dissertation advisor calling excitedly after the announcement that she was joining Chef to say "you were right" that sysadmins were a population worth studying.

## Why Measure

Matty says measurement isn't just monitoring, like Nagios paging you when a disk hits 80%. It's how you tell that the needle is moving as you change things, and shorten the feedback loop. Nicole agrees that monitoring is good, since you want to know when everything is on fire, but says measurement at the start of a transformation matters because you have to understand where you've been and where you're going, and communicate that to your team and beyond. Vocabulary is part of the problem. Lead time can mean code commit to deploy, ideation to deploy, or deploy to delivery, and dev, ops and QA may each use the same term differently.

Her advice is to measure it, write down what it is and how you capture it, and name it something meaningful. If she says lead time and you say cycle time and the numbers don't line up, you can compare notes on what each of you is measuring and why they differ, and "it's no longer a fight." If you start with a baseline, even an ugly one, you can tell whether changes to tooling, practice, process, culture or team structure are making a difference. Nicole describes the path as starting with a handful of metrics in a spreadsheet, moving to exploratory correlations and visualizations, and eventually predictive analyses of what happens if you turn a knob, which some of the most innovative companies are doing.

## Measuring in Terms of Selling Shoes

Matty says the ultimate driver is selling shoes, so the job of the sysadmin is "really not uptime," it is facilitating the business selling shoes. Nicole's suggestion is to treat your work as a product for a customer who may be elsewhere in the company, and to create your own little marketing deck of basic metrics that show quarter over quarter what value you provide. She thinks Amazon is an example of internal infrastructure that became a product. To find where to start, ask what your company does, how it makes money, what your executives care about, and how you directly support that. If you sell shoes and you're on the infrastructure team, you limit downtime because you provide the infrastructure for shoes to be sold, even if that means EDI and the FedEx order making it through.

Nicole was on the metrics group of Gene Kim's DevOps Enterprise Forum, which set out to name the ten most essential metrics for everyone and, she's pretty sure, started with 155. They settled on three areas: internal facing, external facing, and culture, since culture is a big indicator of when things are going well or about to break. The white paper was released at the DevOps Enterprise Summit and is linked below. Her practical advice for a team is "Start with 3. Honestly, start with 3," and treat it like an MVP you can add to. She also warns that measurements drive behavior, and that showing improvement with the resources you've been given may earn you more resources, or a seat at the table when those decisions are made.

## Bimodal IT

Matty gives a snarky summary of Gartner's bimodal IT, where one half of IT does the cool DevOps and Docker work and the other keeps the mail servers and desktops running. His view is that the traditional half should be measuring how it drives the business as well, and that it often measures things that just make its own job easier, and he brings up the sysadmin subreddit complaining about the head of marketing wanting a MacBook.

Nicole says bimodal IT is a thing right now, since companies can't transform all at once, but she doesn't think it is sustainable. As lead on the 2014 State of DevOps report, she has data from 20,000 respondents, and the trade-offs between throughput and stability that ITIL suggests, which would justify a bimodal approach, "never show up anywhere in the data." Instead, "you're either doing it or you're not," all fast, all slow or all in the middle. She's watching stock trading and air travel, with systems like Sabre, where everyone is terrified to touch legacy systems. Matty tells a story from his time at a big bank, where a computer operator in the basement pointed at a machine nobody had seen before and said nobody knew what it did, but they weren't going to turn it off.

For traditional IT that has a solid reason to run as it does, Nicole says that is an even stronger reason to collect metrics and tell the business, because otherwise the business asks, as Matty puts it, "why aren't we just using Gmail?" Or, Nicole adds, why aren't you doing the DevOps. Her advice is to be the one architecting the new service and not to have the rug pulled out from under you. She and Carolyn Rowland have given a half-day workshop on communicating value and being a strategic partner to the business.

## Sharing: Speaking the Other Person's Language

Matty brings up his talk The 5 Love Languages of DevOps, and the point that what matters to you may not matter to your CFO, so it just sounds like complaining. His story is from Apartments.com. A web service was throwing something like 14,000 fake errors a minute because of a bug, flooding the logs. The sysadmin on his team kept trying to get it into a sprint, and Matty at the time figured product just didn't understand. It wasn't communicated in a way product cared about, since product's question was whether there had been an outage. What actually got it fixed was Splunk dashboards on the wall, one with a dial in the red at 14,000 errors a minute, which the GM walked past and asked what the hell it was. Matty admits that isn't a good way to sell. He quotes Bill Joyce from the DevOps culture change episode: "if you ever find yourself saying, this is crystal clear to me, why aren't they seeing it? Then it's more about you than it's about them."

Nicole loves the dashboard. Three measures is a nice number because you can hold it in your head, and it fits on a reasonably priced monitor on a wall. Across three periods, even if the first baseline was horrendous, the GM or CFO who walks by sees progress. She suggests big letters and few words, so it's readable across a room. Matty remembers a website performance report sent to the board with so much data nobody cared about most of it, and Nicole's answer is that "your team is gonna want 37 metrics," but executives should get three or four, the ones that show improvement plus maybe one that doesn't. That one is your business case: we've optimized as much as we can with tooling, and I need the headcount, because I refuse to work my team insane hours, and here's the data to show it.

## Measuring Culture

Matty says people tell him you can't measure culture. He recalls Bernard Golden's line that "culture is for yogurt." Nicole says people accuse her of being the squishy culture girl, but she cares about culture because it matters, and because it tends to be a leading indicator: if it tanks for no expected reason, go check on your team, since it is often a sign your tooling is about to fall apart. If you want to avoid the squishiness entirely, you can proxy. You can't take the temperature of culture, but you can look at HR data like attrition rates, at access to natural light, which she jokes is bad news for teams in the basement, and at work hours.

Better, in the 2014 State of DevOps report they used a six-item measure based on research by Ron Westrum, also used in 2015 and included in the white paper. It's a survey on a 1 to 7 scale from strongly disagree to strongly agree, and Nicole, who has a background in psychometrics, says it has been shown to be statistically valid and reliable across samples of 9,000 and 5,000. The six statements are "On my team, information is actively sought," "On my team, failures are learning opportunities, and messengers of them are not punished," "On my team, responsibilities are shared," "On my team, cross-functional collaboration is encouraged and rewarded," "On my team, failure causes inquiry," and "On my team, new ideas are welcomed." Matty recognizes it from taking it at Chef, and Nicole says Jez was hired shortly after and used it.

Because it is a latent construct, you can average the answers into one number per person and combine them for a team, and look at any single item that comes out low. If everyone scores low on failure causing inquiry, look at your practices: are you doing blameless postmortems, and are your backup systems so bad that failure is scary? She suggests a hack day around making things fail, with silly prizes, and then remeasuring. That item in particular is a strong predictor of both IT performance, in throughput and reliability, and of organizational performance. It's all open. Nicole's last word is not to give up when a measure stops working, because "it's always just an improvement kata," and it has probably stopped working because your processes have improved.

- [Metrics For DevOps Initiatives](http://devopsenterprise.io/media/DOES_forum_metrics_102015.pdf) from the DevOps Enterprise Summit 2015
- [Nicole's Working Papers](http://ssrn.com/author=2468935)
- [Nicole's Google Scholar Page](https://scholar.google.com/citations?user=vis0ZxUAAAAJ&hl=en)
