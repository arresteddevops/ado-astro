---
title: AI, Ethics, and Empathy with Kat Morgan
description: In this episode of Arrested DevOps, Matty and guest Kat Morgan discuss the ethical, practical, and technical implications of AI. They explore how AI can assist with coding, improve efficiency, and handle tasks, while emphasizing the importance of good practices and staying informed about the impact of AI.
date: 2025-06-03T10:18:43.000Z
publishDate: 2025-06-03T10:18:43.000Z
episodeNumber: "203"
podcastFile: arrested-devops-podcast-episode203.mp3
podcastDuration: 40:13
podcastBytes: 18400000
episodeImage: episode/img/using-ai.png
episodeBanner: episode/img/using-ai-banner.png
images:
  - img/social/fb/using-ai.png
guests:
  - person: kmorgan
    snapshot: kmorgan
hosts:
  - mstratton
sponsors:
  - flyio
aliases:
  - /203
  - /usingai
transcript: using-ai
explicit: no
---

Matty talks with Kat Morgan about AI from the point of view of two people who use it daily and have mixed feelings about it: where it helps, where it's a mess, and how to work with it responsibly. Matty currently works in a marketing-adjacent role that involves some coding, at a company that makes Steampipe, and uses Cursor mostly for prototyping. The cold open is Kat, "very strongly opposed to abusing the robots."

## Nuance in a Minefield

Matty frames the question by saying people are bad at nuance and asking someone's opinion on AI is like asking what they think about computers, since some people picture generative art and others picture assistive tools or agents. Kat lists the ethical threads that deserve attention: intellectual property and whether creators can keep a roof over their heads, accessibility and whether LLMs open the digital world to people who need it, and the ecological and academic impacts. Kat compares it to security and documentation, which end up being everyone's responsibility, and expects everyone to need enough AI knowledge to tell where the tools stop and where humans have to start. Even abstaining means gaining that awareness. Matty adds that the less educated we are the more likely we are to be steamrolled, and that for some uses "the juice is not worth the squeeze," like burning resources on a cute cartoon of a friend.

Kat notes that any line drawn today can move tomorrow as the tools change, and that LLMs have changed how long a tech career seems feasible given a tendency toward carpal tunnel. Kat also points out that significant models already run on a MacBook, which Kat compares to the room-sized computer that became a pocket one.

## What Worked and What Didn't

Matty uses ChatGPT for alt text on social media, which makes doing it well faster. With Cursor, Matty's good experiences come when Matty already knows what to build. One was a private website for friends to watch old videos, with S3 and signed URLs, in a well-trodden React setup where Matty had the architecture in mind and Cursor implemented it. The bad one was asking Cursor to write a Steampipe plugin for Bluesky: "oh boy was that terrible." Matty concludes vibe coding has not made Matty worried that engineers will go away.

Kat says context is everything: about 30 to 50 percent of a context window goes to building context, including recent library versions, docs for new functions, and the project's structure and hygiene. Kat recently spent about 90 minutes on context and planning, with a task file where a markdown checkbox marks not started, in progress and done. When Kat told the agent to knock out the tasks, the work Kat expected to take four or five hours finished in a few prompts, leaving time to review the code line by line and check whether the first version was the user experience the team was after.

## One More Thing

Both describe the rabbit hole: "just this function" becomes "just this entire feature." Matty ended up awake until 5:30 in the morning on a refactor of a podcast Hugo theme. Matty notes an upside, which is that an agent waits patiently with its context, so returning after two weeks costs nothing. Kat says burnout from layoffs and volatility has been real, and that Kat uses an LLM as an executive decision-making regulator, asking whether a tangent moves toward the milestone, which has helped with planning, estimating and sticking to a plan without difficult conversations with a manager.

## Treat It Like a Junior Colleague

Matty compares working with agents to a senior engineer working with a junior, where mistakes are expected and the process of plan, develop, test, iterate, document and commit exists to catch them. Kat adds that LLMs were trained on GitHub and respond well to work framed as GitHub issues: have the agent write an issue, edit it to the real requirements, then tell it to pull the issue and work it. That demands good code hygiene, with modular code, documented interfaces and an easy data model so a context window stays coherent for a one to two hour pairing session. Kat also uses the GitHub MCP server to have the agent comment on issues when the plan pivots and to pick up from the issue history on Monday mornings, and thinks a service account would help distinguish what a person wrote from what the agent wrote. Matty keeps issues in solo repos and has one with over a hundred comments that are all Matty talking to Matty.

## Guardrails and Private Setups

Kat is uncomfortable with data centers powered by gas turbines and plans to run a local setup, and cites a DevOpsDays Chicago talk by Paul Czarkowski, which wasn't recorded, about running open models locally on something like a Mac Mini. Kat doesn't want secrets in a context window, so secrets go in a file in the home directory that git commands can't reach, and the agent runs in a dev container, never directly on the host. Matty notes that an env file in the agent's workspace is exactly what it can read. "It's important to try and make it safe to make mistakes," Kat says.

Matty's last caution is that an agent will troubleshoot things that aren't broken: it once tried to uninstall a plugin because it ran the wrong CLI command, and it will "fix" a function that was already fixed, since the context window is small. Kat says healthy skepticism is warranted because it messes up a lot and isn't replacing people.

## Be Polite to the Robots

Matty says you should always be polite to agents, partly as a joke about who they'll remember and partly because being polite to them makes us more inclined to be polite to everyone. Kat's version: neural networks are loosely aligned with how our brains work, and reinforcing demeaning behavior in a chat reinforces it in us, making it harder to tell the difference between treating computers that way and treating people that way. "We actually have to respect our own presence enough to appreciate that what we put out in the world will also change ourselves."
