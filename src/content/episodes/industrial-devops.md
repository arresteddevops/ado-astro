---
title: Industrial DevOps with Doug Pagnutti
description: Doug Pagnutti spent fifteen years as an automation engineer caught between the IT and OT worlds inside manufacturing plants. The friction sounds a lot like what's been happening in DevOps for over a decade. Matty and Doug dig into why industrial operations never got the memo, and what OT and IT could still learn from each other now that the wall between them is collapsing.
date: 2026-08-17T11:38:00.000Z
publishDate: 2026-08-17T11:38:00.000Z
episodeNumber: "206"
podcastFile: arrested-devops-podcast-episode206.mp3
podcastDuration: "00:41:55"
podcastBytes: 20122262
episodeImage: episode-img/industrial-devops.png
episodeBanner: episode-img/industrial-devops-banner.png
images: []
guests:
  - person: dpagnutti
    snapshot: dpagnutti
hosts:
  - mstratton
sponsors:
  - attribute
aliases:
  - /206
  - /industrialdevops
transcript: industrial-devops
explicit: "yes"
---
## The Wall Nobody Talks About

Long before "DevOps" had a name, manufacturing plants had already split into two tribes: the automation and manufacturing engineers who built up their own scrappy plant-floor IT, and the corporate IT department issuing laptops and running the domain a few buildings over. They grew up independently, with different tools and different goals, until, inevitably, they collided. IT wanted plant data flowing to corporate; OT wanted to reach out for data too. Add different incentive structures on top, and, as Matty points out, it's the same "wall of confusion" that gave rise to DevOps in the first place, just wearing safety glasses instead of a hoodie.

## "I Broke the Rules Just to Get It Going"

Doug's clearest example: a robot on the plant floor goes down because of a network issue, and the routers are owned by IT: a help desk routed through Bogotá with zero context on an explosives manufacturing line. The ticket crawls through triage while production sits at zero and the CEO starts calling. Doug's fix was to log into the router console himself and get it running again. "Everyone's like, 'Ooh, yeah, you're a hero.' Like, no, I'm not a hero. I broke the rules just to get it going." It's shadow IT, industrial-plant edition: the AWS-credit-card moment of manufacturing.

## Converging, Whether Anyone Planned It or Not

What actually helped, in Doug's experience, wasn't process; it was knowing people. "It's always gonna be personal relationships," he says, and his pitch to leadership has been simple: IT needs someone who's had OT experience, and OT needs a rep who understands IT's constraints, because the requirements on both sides have already converged. Neither side can keep pretending plant data stays on the plant floor; predictive maintenance and machine learning mean data has to leave the building, sent out to third parties for analysis, whether or not the old "peace treaty" between IT and OT accounted for it. That same shift is dragging OT into IT's security concerns for the first time, too. Doug is blunt that OT folks "just don't have a good concept of the security requirements," a gap he's only closed by talking directly to security engineers in IT.

## Manufacturing Already Solved This: In Manufacturing

Matty pulls in *The Phoenix Project* and its inspiration, *The Goal*, both built on the theory of constraints and value-stream mapping from actual manufacturing. The irony: software loves borrowing metaphors from manufacturing (Andon cords, the Toyota Production System) while the people doing real manufacturing haven't necessarily absorbed the lessons about visibility and bottlenecks that DevOps eventually learned from them. Doug agrees the CAMS/CALMS framework (culture, automation, measurement, learning or lean, sharing) maps cleanly onto OT/IT, especially the parts industrial teams already live: lean practices are baked into manufacturing, but the *value* an OT change delivers is far easier to point to (100 widgets became 110) than the value of infrastructure work that only shows up when it's absent.

## Incentives Explain Almost Everything

The conversation lands on a favorite Matty theme: people work to the incentives you give them, not the ones you intended. A mandate for developers to write ten tests a sprint produces `assert(true)`. A cash bonus for testers finding bugs and developers fixing them produces a black market in planted bugs. And "litigating severity" on an incident call is really about whoever's compensation is tied to P1 counts. Matty points to the [STELLA Report](https://snafucatchers.github.io/) as the same pattern in postmortems generally: after a well-handled incident, it's easy to reason "nothing bad happened, so you shouldn't have shut it down," the same Y2K cognitive dissonance in miniature. Doug's closing advice for anyone straddling the OT/IT divide is almost embarrassingly simple: **find out the name of your IT person.** Treat them like a teammate with real expertise, not a request queue ("not AWS," as Matty puts it) and the rest gets a lot easier.
