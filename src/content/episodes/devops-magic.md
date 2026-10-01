---
title: Making DevOps Magic with Arup Chakrabarti
description: "Making DevOps Magic: Matty chats with Arup Chakrabarti (PagerDuty)."
date: 2019-04-05T09:05:47.000Z
publishDate: 2019-04-05T09:05:47.000Z
episodeNumber: "128"
podcastFile: arrested-devops-podcast-episode128.mp3
podcastDuration: 49:42
episodeImage: episode/img/devops-magic.png
episodeBanner: episode/img/devops-magic-banner.png
images:
  - img/social/fb/devops-magic.png
guests:
  - person: achakrabarti
    snapshot: achakrabarti
hosts:
  - mstratton
sponsors:
  - chef
  - datadog
  - pagerduty
  - sdt
aliases:
  - /128
  - /devopsmagic
explicit: yes
transcript: devops-magic
---

Matty talks with Arup Chakrabarti, a director of engineering at PagerDuty who previously worked at Amazon and Netflix, about guiding DevOps transformations. Both work at PagerDuty, and Arup says a draw of the job was helping customers reach the business results the large consumer companies got. The cold open is Matty: "The real world will destroy all your plans."

## Start Small, Find Allies

Arup's step zero is to start small, with one team, project or codebase instead of a 10,000-person department, then find champions, meaning people who reply to your emails about change with enthusiasm, or build them by giving context. Arup says the journey gets lonely, and allies make it easier. Matty compares it to making a movie, since there are days you hate it. Arup adds that leaders should expect some short-term negative business impact, such as more incidents, before long-term gains, and that conviction tends to spread.

## Metrics and Context

Arup likes number of deploys as a metric, because it is a proxy for operational maturity, including incident response and end-to-end ownership, and suggests moving from yearly to quarterly, not straight to continuous deployment. After that comes SLAs, SLOs and SLIs, and the Google SRE book. Arup describes a previous company that tracked revenue no longer lost to downtime, reviewed weekly with the question of whether the team had done something to change it. Matty says "you can't know if you're moving the needle if you don't have a needle," and stresses there's no magic number of deploys, so Amazon's frequency isn't a target. Arup says there is a lot of DevOps FOMO, and "you're not PagerDuty. You're not any of the companies that you saw at a conference," and quoting another company's way alienates stakeholders.

Matty adds that stage talks are success stories, because speakers feel better telling them and PR departments block failure stories. Arup says a bank has constraints but can use its customers' priority of an accurate ledger as an advantage. Matty recalls listening to sales calls at Apartments.com after an office move, learning the value of a lead, and says to learn how your company makes money. Arup says to talk to finance and product managers. Arup's examples of a right metric: Amazon's order graph, Netflix's stream starts per minute, and three at PagerDuty, endpoint availability, time from event to incident to notification, and web experience, which took years to settle. Metrics are proxies, so halving incidents doesn't double the customer experience, "but we know we've made it better."

## When Metrics Backfire

Matty says to question metrics, asking why, and to avoid targets like "not slower than last month." Arup says to set metrics early, then "question the crap out of it" a month or two in, and tells a story of measuring availability as the percentage of 200 responses, when an engineer served every 500 from the load balancer as an empty 200, and the team congratulated itself until the manager asked what happened. Matty cites Andrew Clay Shafer on people working to metrics to the organization's detriment, and Jez Humble's story of a goal of one test per sprint that produced assert-equals-true tests. Matty says "There's a difference between being committed and being compliant," and that people usually just lack the why. Arup compares intent of a metric to the intent of a law. Arup tracks median pull request duration but sets no goal on it, so it stays a temperature reading, though an engineer noticed it could be gamed. Matty says don't litigate severity in an incident call, and that when teams are measured on counts of Sev 1s, the metric becomes "mean time to innocence."

## Anti-Patterns

Arup says a common mistake is expecting a transformation in months: "if it took you a decade to get into a problem, it's going to take at least a year to get out of it," and you're never done. Matty adds the urge to plan everything first, recalling a large insurance company that took six months to plan a first change with Chef. Arup says rigid plans and assuming no risk are dangerous, and starting small accepts a bit of risk that de-risks later.

## Treat It as an Experiment

Matty draws the parallel to chaos engineering: a hypothesis, a limited blast radius, known measures and a learning experience, though the word experiment may unsettle stakeholders. Arup likes the word because it implies humility, and tells stakeholders Arup will be first to acknowledge a failure. Arup describes PagerDuty's introduction of Chef about seven years earlier as an experiment at the lower levels of the organization that over about a year and a half became the way. Another customer of around 5,000 engineers feared engineers would quit if everyone went on call, and so tracked the number who quit and slowed the rollout if it rose, and the number went down as they invested in explaining why. Matty warns about mistaking correlation for causation, such as an acquisition happening alongside.

## Wrapping Up

Arup's tactic for any leader who can't say how the business makes money is to go talk to the CFO's finance team, who are transparent, and jokes "Can't boil everything down to a single shell script, unfortunately." Matty says to find a buddy if you're not good at selling change, and to make the tent big, including testers, product and FinOps, since DevOps is unfortunately named. Arup says DevOps means pulling in whatever stakeholders you need and owning the problem, not throwing it over the fence, including to product management.

<!-- show notes -->

* Image credit: photo by [GotCredit](https://www.flickr.com/photos/gotcredit/32995608738)

### Community

* [Velocity San Jose](https://conferences.oreilly.com/velocity/vl-ca) June 10-13 2019 - discount code "ADO2019" gives 20% off for Gold, Silver, and Bronze passes.

* For any [devopsdays](http://devopsdays.org), try the discount code ADO2019!
