---
title: Incident Retrospectives with Amy Tobey, Alex Hidalgo, and Rein Heinrichs
description: So you've had an incident. What can you learn from it afterwards? Amy Tobey, Alex Hidalgo, and Rein Heinrich talk with Matt about strategies and techniques for great incident retrospectives.
date: 2020-09-25T19:59:53.000Z
publishDate: 2020-09-25T19:59:53.000Z
episodeNumber: "159"
podcastFile: arrested-devops-podcast-episode159.mp3
podcastDuration: 58:38
episodeImage: episode/img/retrospectives.png
episodeBanner: /episode/img/retrospectives-banner.png
images:
  - img/social/fb/retrospectives.png
guests:
  - person: atobey
    snapshot: atobey
  - person: ahidalgo
    snapshot: ahidalgo
  - person: rheinrichs
    snapshot: rheinrichs
hosts:
  - mstratton
sponsors:
  - sdt
aliases:
  - /159
explicit: yes
transcript: retropsectives
---

Matty talks about incident retrospectives with three people who care about learning from incidents. Alex Hidalgo, an SRE for about ten years, has a book coming out from O'Reilly, Implementing Service Level Objectives. Amy Tobey is a DevRel and Staff SRE at Blameless who started in tech around 1999. Rein Heinrich is a principal software engineer who helped make Puppet in 2009 and co-hosts the podcast Greater Than Code. The episode started on Twitter, where Alex and Amy were discussing retrospectives and Alex suggested they go on the show. The cold open is Alex: "Oh shit moments are just about my favorite."

## What a Retrospective Is For

Matty defines the topic as what happens after service is restored, however you name it: postmortem, after-action review, retro. Amy frames an incident as an unplanned investment, with people time, software and cloud spend going in, so the question is whether the organization got the most out of it. Rein adds the view that an incident is an encoded message the system is trying to deliver, and while responding you decode just enough to restore service, so skipping the rest wastes the investment. Alex calls retrospectives the most sophisticated end of responding to a ticket, where you fix a problem in the best possible way and not just click close.

Matty says during an incident the goal isn't fixing the problem but restoring service, and that the two halves depend on each other: you can only skip the rabbit holes during response if the organization has a social contract to decode the message afterward. Amy describes different paces of engineering, with incident response at the fastest and a retrospective on a much longer timescale, like the architecture phase. Rein compares this to Kahneman's thinking fast and slow, where fast is about performance, not long-term learning.

## Start Before the Meeting

Matty notes the irony of "thinking slow" in a one-hour meeting, which should be a jumping-off point. Alex says you can start the slow learning during an incident with the incident command system, used conceptually, by asking someone to start the incident state document or the retrospective while responders focus on mitigation. Amy adds that assigning the scribe role is also a way to keep a nosy manager busy. Matty cautions with Ron Swanson that you should not half-ass two jobs, and Alex agrees that it takes a practiced organization where everyone knows who is doing what. Amy says if you show up to the meeting and most of the analysis isn't done, the meeting is a waste.

Rein says the idea that learning happens in one hour is a little silly, since learning is happening in a dozen or more brains for days and weeks, and the meeting is for the things only possible with those brains in one room.

## Action Items and Their Deadlines

Matty disagrees with a line from the PagerDuty postmortem guide that the most important outcome of the meeting is consensus on action items, though not if action items include questions to investigate and not just Jira tickets. Amy and Alex say that in the real world, follow-ups are the main point for most SREs, because they are the easiest to tie to business value and executives and directors want them. Rein's example is a junior SRE paged five times a week for the same thing, who won't accept "we're going to stop worrying about action items."

Matty warns against SLAs on action items, such as completing everything within two sprints, since people will only agree to items they know they can finish, and an engineer should be able to come back and say the plan changed after looking closer. Amy's workaround is to get follow-ups into a prioritization process and then let go, turning choices over to the engineering and product teams. Matty says the people who prioritize work should be in the retrospective. Alex says many organizations lack buy-in, and Matty replies that nobody has it everywhere and change has to happen in both directions. Amy and Matty also note that when people manage the numbers they will game them, the Pareto-inefficient Nash equilibrium problem: people work to the numbers you give them.

## Narrative and Timelines

Alex's goal is always to tell a story, since "we're storytellers," and finds a timestamp table less useful than a narrative of what happened first and next. Amy disagrees on timelines: the timeline is the outline before writing the narrative and common ground with readers, especially for complicated incidents. Matty calls the timeline supporting information, and notes that not every line in the Slack channel is worth including. Amy supports cranking out shallow incident reports cheaply and ubiquitously. Rein says there is no single timeline, with 12 people in a channel there are 12, and asking people to compare theirs is where the richness comes from. Matty adds that stories are more memorable than log entries, and that people don't read retros from other teams, which are the ones they most should.

Matty says one of the biggest anti-patterns is only doing postmortems for Sev 1s, and Alex has been on teams where every page got a retrospective, even if it meant deleting the alert. Amy notes organizations that aren't ready to hear the reports, where small insurrections matter more, and Matty argues that writing short reports helps engineers learn to speak in business value.

## Making It Easier to Try

Rein's rule is to ask what would have to happen to make a change easy, and suggests a Goldilocks zone between big, scary incidents and small, boring ones, and getting an organization used to trying things first, which can take six months. Alex has had success with facilitator rotations where people sit in on teams on the opposite side of the company, and Matty adds that a good facilitator isn't invested in the content, and that management facilitating is a problem. Matty says to stack the deck for change by starting with people who are interested, since they'll sand the rough edges.

## What They Changed Their Minds About

Alex used to believe timelines were crucial, and now thinks the narrative is the important part, though they remain good starting points. Rein says timelines are what let you reinstantiate context in cognitive interviewing ("it was Friday, it's 9 PM"). Rein also no longer believes the hour in the meeting is the most important part, which Amy also said, and Amy no longer favors an independent meeting per incident, preferring the weekly incident review run at GitHub, where everyone came for a cadence of caring about incidents and people shared what happened in narrative form, with follow-up done out of band.

## Better Questions

Alex suggests templates with prompts such as "where do we get lucky?", who happened to be online, and how to make sure we don't have to be lucky. Matty adds a prompt asking what questions aren't on the template. Rein suggests asking how priorities should change as a result of the incident, since action items tell people what to do without why they should care. To choose which incidents to study deeply, Rein suggests looking for cues like confusion, surprise or frustration, and in the mundane looking for the surprising. Matty's closing advice: find the mundane in the interesting and the interesting in the mundane, write good narratives, and "ask why 10 times, because if 5 are good, 10 must be twice as good."

Alex's book - *[Implementing Service Level Objectives: A Practical Guide to SLIs, SLOs, and Error Budgets](https://www.amazon.com/Implementing-Service-Level-Objectives-Practical/dp/1492076813)*
