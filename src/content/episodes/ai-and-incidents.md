---
title: AI and Incidents with Sylvain Kalache
description: "Sylvain Kalache, who runs the AI lab at Rootly, walks Matty through what AI SREs can and can't do during an incident. They get into why handing every small incident to a robot erodes the practice responders need for the big ones, and what to measure so the humans on call don't burn out."
date: 2026-10-19T06:00:00.000Z
publishDate: 2026-10-19T06:00:00.000Z
episodeNumber: "210"
podcastFile: arrested-devops-podcast-episode210.mp3
podcastDuration: "00:33:22"
podcastBytes: 16016148
episodeImage: episode-img/ai-and-incidents.jpg
episodeBanner: episode-img/ai-and-incidents-banner.jpg
images: []
guests:
  - person: skalache
    snapshot: skalache
hosts:
  - mstratton
sponsors: []
aliases:
  - /210
  - /aiandincidents
transcript: ai-and-incidents
explicit: "no"
---
## What an AI SRE Actually Does

Sylvain Kalache runs the AI lab at Rootly, and he starts by explaining the two kinds of memory behind the tools the industry has settled on calling AI SRE. The long-term one is a knowledge graph built from your code base, past incident reports, knowledge base, and Slack channels, the machine version of the instinct a veteran gets when something breaks and they think "I think I know where it is." The live one is whatever just happened: recent deploys, telemetry, traces. From the two, the tool forms hypotheses and starts investigating. Sylvain's claim is that the unglamorous part, collecting the data, is already "a huge time saver," since the tool can chase ten hypotheses at once and put what it finds on one dashboard.

Matty has been waiting for this for a while. Years ago he talked with Damon Edwards, Rundeck's founder, about having a robot run the same first-look checks while the responder is still getting out of bed. That never needed AI. What AI adds is the guessing: it doesn't have to be told which logs to pull for this particular shape of incident.

## Easy Incidents, Jagged Results

For toil-level incidents, Sylvain says the tools get close to a hundred percent accuracy on sev 3s and sev 2s. Past that it gets "jagged." His best example comes from an AI and reliability conference in Berlin, where an Anthropic reliability engineer described an outage in which a request carrying 22 images crashed the service. Claude didn't stop at the bug. It noticed the same request coming from 4,000 accounts, concluded this was an attack and not just an outage, and suggested contacting the safety team about abuse. A human patching the bug, Sylvain notes, would likely never have looked past it.

The same talk had the opposite case: the model grabbing a red herring, a cache hit rate graph that told a very persuasive story and turned out to have nothing to do with the problem. Matty points out that humans fall for this constantly, which is a large part of why incident commanders exist.

## Could Claude Be the Incident Commander?

Matty admits his skin shivers a little when he says it, but he floats the question anyway. Everything you have to watch out for with an LLM responder is what a good incident commander already does for human ones: sitting there asking "is that what we need to do right now to get service restored?" So either side of the role might work with the right setup. What he finds dangerous is the person who says "it can do every damn thing" if you just write the right agent description.

He also brings the PagerDuty-era version of this argument. Back when it was machine learning and not LLMs, the pitch was to train on all your incident data so it knows what to do. He and a colleague there kept running into two problems. Organizations don't have enough data, and the cost of a wrong answer matters: a bad Netflix recommendation wastes an episode of your time, a bad restaurant recommendation costs you hundreds of dollars, and a model that decides something probably wasn't a sev 1 when it was has the same problem. Sylvain agrees, and says that among Rootly's customers using the AI SRE, "the human is always involved." Nobody he sees runs it blind.

## Children of Magenta

The bigger risk, Sylvain argues, is what happens to the people. If the tool takes every easy incident, you lose the small ones responders use to practice, to understand how their systems work, and to build the instinct they'll need when the huge one arrives and the AI can't solve it. He points to aviation, where American Airlines pilots in the 1990s coined "children of magenta," after the magenta line on the screens they were watching. Autopilot tends to be engaged in exactly the situations it can't handle, so the industry's fix was required simulator training every year for emergencies a pilot may never see.

Matty piles on from his "Fight, Flight, or Freeze" talk: practicing in a calm moment is how procedures get into muscle memory for the 3am version. He quotes Rein Heinrichs, "If you're bad at having incidents, have you tried having more of them?" He also notes that better systems and bigger on-call rotations mean you can go months without a page, then wake up unable to remember how to log into the tool. Game days are the obvious answer, and the obvious problem has always been that someone has to build and inject a realistic failure. LLMs could do that part. Rootly has already gone one step further with Rootly Academy, built with Uptime Labs, where a human plays incident commander and directs a cast of LLM personas playing the responders.

## Watching Is Not Doing

Sylvain's prediction is that the industry will push this too far, get bitten, and pull back. Incidents will get shorter on average, but he expects bigger major incidents that run for hours or days, because the engineers have lost touch with their systems. He spent half a decade running a software engineering school on the bet that people learn by doing instead of listening, and its students got hired at Facebook, LinkedIn, Meta, Google, and Nvidia. Applied to incidents: "just watching it is not the same as doing it." There are two ways this goes, he says. Either the models get so good that the lost knowledge doesn't matter, or there's a reckoning. "I don't have an answer to this."

Matty adds two things. Product owners make excellent incident commanders partly because the experience makes them care about reliability, and that visceral exposure goes missing when the entire story is that Claude fixed it overnight. And if your coding agents don't get the context of the incidents that happened, you're skipping the same feedback loop you'd expect human developers to get from postmortems, which were already write-only before LLMs showed up.

## More Incidents, Less Help

Sylvain brings data. Looking at the average number of incidents per Rootly customer, 2026 is running at three times 2023. "So far it's not becoming easier, it's becoming harder." Responders are also getting less backup: the old move of tapping the developer who wrote the thing on the shoulder now gets you "Hey, like, sorry, I didn't write it. I just prompted my agent." His summary of the on-call job today is more incidents with less help, and the trend could go either way.

Matty ties it to the humane ops work from his PagerDuty days, when burnout and responder health were a bigger part of the conversation. One CTO or CIO he talked to answered concerns about on-call load with "that's why I pay him so much money." Sylvain's response, in full: "It's dumb."

## On-Call Health and Etsy's Sleep Tracker

Rootly's AI lab built a methodology to catch overworked responders, and it combines two kinds of data. The observed kind is how many incidents someone handled, whether they worked nights or off hours, how severe the incidents were, and, newly added, how many tokens they're using, since "some people are token maxing and actually getting addicted." The self-reported kind borrows from medicine: just ask "how do you feel?", the way an Apple Watch does, and track the trend. It isn't a diagnostic tool, Sylvain stresses, but it gives you a signal. They released it as an open source project called On-Call Health, and he says large organizations are already using it.

Matty goes digging mid-conversation and finds the ancestor: Etsy's Ops Weekly, from the days when Etsy was a monitoring company that also sold tea cozies. Its GitHub repo was archived three years ago and the last commit is nine or ten years old, but it came with a sleep tracker and a metric called MTTS, mean time to sleep. Matty says he can't describe how good it makes him feel to see the idea carried forward, and he lobbies Sylvain on the spot to come back for an entire episode on caring for the humans on call. Sylvain: "I'm down."

Matty also points back to a few earlier episodes on the same ground: [Incident Retrospectives](/retropsectives/), [Incidents and Accidents](/blameless/), [Cognitive Neuroscience](/brains/), and [Let's Be Careful Out There](/safety/).

## Links to Resources Mentioned

- [Sylvain's post on engineers losing touch with their systems](https://www.sylvainkalache.com/blog/ai-handles-incidents-engineers-lose-touch-with-their-systems)
- [Sylvain's post on whether Claude can fix itself](https://www.sylvainkalache.com/blog/can-claude-fix-itself)
- [Rootly Academy](https://rootly.com/rootly-academy)
- [SRE Skills Bench](https://sreskillsbench.com/), Rootly's open source benchmark for LLMs on SRE-type skills
- [On-Call Health on GitHub](https://github.com/Rootly-AI-Labs/On-Call-Health) and the [hosted version](https://www.oncallhealth.ai/)
- [Etsy's Ops Weekly](https://github.com/etsy/opsweekly)
- [How Do You Infect Your Organization With Humane Ops?](https://speaking.mattstratton.com/talk/how-do-you-infect-your-organization-with-humane-ops), Matty's talk
- [Fight, Flight, or Freeze: Releasing Organizational Trauma](https://speaking.mattstratton.com/talk/fight-flight-or-freeze-releasing-organizational-trauma), Matty's talk
