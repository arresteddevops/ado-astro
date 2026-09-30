---
title: Tis The Season...For Scaling! with Rob Cummings and Matt Curry
description: Holiday! It’s a time of merriment… and terror. Let’s talk about how to prepare for a known spike in traffic, and what’s worked (and hasn’t)!
date: 2015-11-13T21:51:25.000Z
publishDate: 2015-11-13T21:51:25.000Z
episodeNumber: "47"
podcastFile: arrested-devops-podcast-episode047.mp3
episodeImage: episode/img/seasonal-scaling.png
episodeBanner: /episode/img/seasonal-scaling-banner.png
images:
  - /img/social/fb/seasonal-scaling.png
guests:
  - person: rcummings
    snapshot: rcummings
  - person: mcurry
    snapshot: mcurry
hosts:
  - mstratton
  - bkromhout
sponsors:
  - datadog
  - 10thmagnitude
aliases:
  - /47
  - /seasonalscaling
youtube: c4uiiSj2SPU
explicit: yes
transcript: seasonal-scaling
---

Bridget hosts this one solo and talks holiday scaling with two people who have been through a lot of peaks. Rob Cummings has spent 10 years at Nordstrom and, since January, supports the operations teams for nordstrom.com. Matt Curry is Director of Platform Engineering at Allstate, and before that spent 8 years at PayPal, or, in Matt's words, "8 delightful holiday seasons of scaling." The twist is that a holiday spike is a known quantity, and the stories are mostly about what people still get wrong when they know it's coming.

## Predicting a Spike You Already Know About

Nordstrom has two big peaks a year, the anniversary sale in July and Cyber Monday, with elevated load through the holidays. Bridget asks whether the prediction is a Magic 8 Ball, and Rob says it's "more magic than I would like to admit to." In practice the forecast is worked out with product management as a percentage above last year plus a safety margin. Their habit had been to start testing for Cyber Monday right after the anniversary sale. Since Cyber Monday is the bigger peak, that left too little time to get the kinks out, so they now test for the next peak of the year from the start.

At PayPal the forecasting was more rigorous. Matt says Cyber Monday and the second Monday in December, which eBay called Green Monday, were the biggest days, with a smaller spike in March when people listed the gifts they didn't want. The capacity team used R and other forecasting algorithms to know weekly volume within about 5%. By March, April and May the number barely moved, and the planning went on from there.

## Testing Peak Load

Rob describes two methods. They model the traffic in an internal lab, and the models differ because Cyber Monday is mostly anonymous shoppers while the anniversary sale is registered checkout, which hits different systems. They also do what Rob calls "testing in production, because what could go wrong?" That means ramping production-shaped load against production during a non-peak hour and stopping the moment they hit a breaking point. The gap is register checkout and new account signups, which they can't yet test that way in production.

Matt describes PayPal's Holiday Canary Program. Applications got flagged when response time climbed sharply for small increases in throughput, and the flagged ones got canary tests where the team pulled nodes out of traffic or changed load balancer settings to push more load at one host. The bigger challenge, Matt says, was always the giant shared backend resources.

## Getting Teams to Care and Not Gating Them

Rob says everyone at Nordstrom cares about the anniversary sale, but Cyber Monday had a culture of assuming it would be fine because anniversary just went fine, so this year took some flag-waving. Rob also changed how performance testing worked. It used to happen at the very end of a dev sprint, right before release, so every problem turned into a question of whether the perf environment or the new code was at fault, and they shipped anyway to find out. Now performance testing is not a gate. Engineering teams are expected to use the perf lab themselves for risky changes, with a full-on test reserved for big complex features.

Bridget asks how you keep speed from letting an index on a query slip through. Matt says PayPal's database team watched new queries and schema changes in staging and ran SQL explains, and that features almost never went in live. They went in off and were turned on over time. Feature flags "are awesome, and they can be terrible if you don't manage them well," Matt says, having seen a feature start corrupting cookies, where turning it off did not put things back to normal. Matt's view is still that restoring service fast matters most: "failure is always going to happen. You just want to make sure the customer doesn't know it's happening."

## Sending a Slice of Traffic Somewhere New

Rob adds another trick as more of Nordstrom moves to public cloud: send a portion of traffic to the new infrastructure. They routed 10% of product page traffic to it, and performance and add-to-bag rates were worse than legacy. They scaled back to 1%, the team diagnosed the problem and shipped a fix, and the traffic went back up to 50% with performance better and add-to-bag rates where they wanted them. "Having that variable, that slider is handy."

Bridget points out that this works because they measure business outcomes, not only response times. Rob says that has been a culture change, with heavy investment in real user monitoring so they see what the client sees, and it has found anomalies nothing else would. Rob noticed that performance degrades at night when people go home to slower connections. Matt says PayPal could see measurable differences in conversion and cart abandonment based on client time, and Rob confirms Nordstrom sees a link too, though for anything short of a bad performance issue the effect is small.

## Code Freezes

Rob's answer on freezes is "it depends." Legacy systems that were not built for continuous delivery still freeze, with extra rigor on any fix that has to ship. The newer systems on public cloud are not frozen.

Matt says PayPal called it a moratorium, and moratorium day was the day all of operations threw a giant party. Matt's reasoning is that "the last release and the first release of the year are always the 2 worst": everyone crams features in before the freeze, and then the pent-up features go out at the start of the year. Bridget says that sounds like an argument for small batches, and Rob says Nordstrom sees the exact same behavior. Matt adds that as a payment processor PayPal owed merchants predictability, since the merchants have the same holiday peak.

Bridget asks about the difference between releasing code and making a breaking change. Matt says a PayPal checkout touched something like 80 services, and you never know how the most minor change will interact in production. Matt's example was an eBay seller who became a buyer and ended up with 10,000 addresses, because every address they had ever shipped to became one of theirs, and the system was deduplicating in memory. It "didn't work very well."

Bridget objects that if devs aren't pushing code, entropy and third parties can still break things. Matt agrees, but says a freeze narrows what you have to look at. Rob says incident data on frozen systems shows fewer breaking incidents, and adds that "it's a lot easier to explain to our business partners when a third-party device fails than when we touch something and it broke."

## Peak-Day Operations

Matt says PayPal ran all-day bridges on every peak day, with everyone in the command center or NOC and hourly checks that everything was green. Rob says Nordstrom's third parties staff up for the peak days, open proactive incidents and review systems, and Matt says the worst that happened with a merchant was a threat to wire PayPal off their checkout.

Matt also says capacity is a sensitive topic around the holidays, because everyone wants to fix every problem by adding hardware, and that can make things worse and cause cascading failure. Matt is honest about the people side too: it makes the CTO warm and fuzzy to see a room full of people watching monitors. Rob says in a 1,600-person technology org some teams are further along with ChatOps and automated monitoring, and others still need the all-day call.

Incident handling itself doesn't change much. Rob says on-calls sit in a room together so escalation is faster, and teams that are not normally on-call get pulled in and escalate sooner. It is the see-something-say-something mentality of "let's just overreact to everything, at least on these couple days." Rob has been pushing the panic button sooner in recent weeks to keep teams practiced, because they only do this a couple of times a year.

## Lessons and a Horror Story

Matt's takeaway is that "heroism isn't scalable," and that if you already have a process for finding your risk, you should assess it all year instead of right before the holidays. PayPal also hit years where a software architecture constraint meant no amount of infrastructure would help even at 20% CPU. So they set the target at double what they expected to hit, to force the engineering teams to fix the architecture.

Rob's horror story is from Rob's first year at Nordstrom, a few months in. The whole site came down for the entire anniversary weekend under load. They had never done performance testing and were still on bare metal, so scaling wasn't really a thing. It initially looked like a denial of service attack, and then, "no, no, it's just our customers trying to buy things." Cloud helps, but Rob says the catch is the services that still live in Nordstrom's data center: "I'll tell you what you can't provision on demand, and that's bandwidth." That means dealing with telcos and, sometimes, construction equipment.

## Beyond Retail

Matt says Allstate's worry is a disaster where people need claims and the systems aren't there, which is much less predictable than a holiday. They aren't in public cloud yet, but they run platform as a service, which makes it easier to move workloads and forces them to be more metrics-driven. The cultural work, like rethinking least-access security when job functions change, is ongoing.

Rob says Nordstrom is investing in continuous delivery, infrastructure as code and lean continuous improvement, with plan-do-check-act cycles, and that the customer mobile teams are their unicorns. To spread it, they needed senior leadership bought in, shared weekly demos, and a dedicated team of practitioners who assess whether a team is ready, run a workshop and measure afterward. On measurement, Matt talks about the quality of tests and code coverage on CI servers and about cycle time, and Rob says cycle time is the big one for Nordstrom, where a VP set a goal of reducing it by 20%.

As they wrap up, Rob says the most exciting part of the move to public cloud is teams taking ownership of their systems, so it's "not an ops problem anymore, it's all our problems." Rob wants what Matt has, which is a platform that abstracts some of that responsibility. Matt says of Rob's public cloud developer empowerment, "I want what he has."

## Checkouts

### Rob:
- [You Are Not So Smart](http://youarenotsosmart.com/)
- [Margaret Heffernan - Why It's Time To Forget The Pecking Order At Work](https://www.ted.com/talks/margaret_heffernan_why_it_s_time_to_forget_the_pecking_order_at_work?language=en)

### Matt:
- [Who Owns My Availablity?](http://whoownsmyavailability.com/)
- *[Guerrilla Capacity Planning: A Tactical Approach to Planning for Highly Scalable Applications and Services](http://www.amazon.com/Guerrilla-Capacity-Planning-Tactical-Applications/dp/3540261389)*

### Bridget:
- [Bose QuietComfort 20 Acoustic Noise Cancelling Headphones](http://www.amazon.com/gp/product/B00X9KVLOM) (really work)
- [Lizone Extra Pro 26000mAh External Battery Charger](http://www.amazon.com/gp/product/B00HLDSMH2) (charges laptops!)
