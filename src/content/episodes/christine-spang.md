---
title: Fireside Chat with Christine Spang
description: Matty chats with Nylas CTO Christine Spang
date: 2018-08-22T22:55:48.000Z
publishDate: 2018-08-22T22:55:48.000Z
episodeNumber: "113"
podcastFile: arrested-devops-podcast-episode113.mp3
episodeImage: episode/img/christine-spang.png
episodeBanner: /episode/img/christine-spang-banner.png
images:
  - /img/social/fb/christine-spang.png
guests:
  - person: cspang
    snapshot: cspang
hosts:
  - mstratton
sponsors:
  - chef
  - datadog
aliases:
  - /113
  - /spang
  - /christinespang
explicit: no
transcript: christine-spang
---

Matty talks with Christine Spang, CTO and co-founder of Nylas, about building a welcoming company culture, on-call, and going remote. Christine grew up in upstate New York after being born in Toronto, played the French horn, got into programming through computer games and Debian, and went to MIT, where the MIT computer club, the Student Information Processing Board, led to a first job at Ksplice, which turned kernel security patches into binary hot patches. After about three years at Ksplice, two of them at Oracle following the sale, Christine founded Nylas around August 2013. The cold open is Christine: "they don't have this trauma from a world where development and operations were super, super separate."

## What Nylas Does

Nylas is an API company. Christine's thesis is that email hasn't seen much product innovation since Gmail because it has become so complicated to develop against, and Nylas exists to make it easier to build on email, contacts and calendar. Email is the lingua franca of business, and its usage keeps growing, unlike SMS.

## Writing Down the Culture

Christine says early values went unsaid, which works with a few people in a room but not as a company grows, and the company doubled in size in the past eight to ten months. A change in the founding team led to writing and publishing a company handbook, which Christine declines to dig into but calls valuable. Christine describes a leadership style rooted in trust and listening: "as a founder, you are the leader of the company, whether you say so or not," and listening and empathy build trust over time, which is the foundation of a great culture.

To build trust, Christine says lead by example, give people responsibility without micromanaging, and be consistent. Asking someone to write a blog post and then rewriting it undermines trust by not letting them share their voice, and switching direction constantly makes it hard for a team to commit, so be upfront when you change your mind.

## On-Call for Everyone

Christine says "our infrastructure is our product," and the team is backend heavy, so every new engineer joins the on-call rotation within about three to six months, first on a front-line rotation, and later some move to escalation. When the company hired its first full-time operations person, that person was surprised at how easy it was to ask engineers to join. Christine thinks younger engineers expect to own what they build. A past period when the company had two products, an API backend and a desktop email client, left the on-call rotation with three people on a three-week rotation, which Christine calls soul-crushing, and Christine wrote a blog post about it. Matty notes PagerDuty's incident commander rotation is three days, and that in Australia on-call pay complicates putting everyone on call.

Nylas caches a copy of the mailbox and calendar data it serves, since reconstructing a thread from IMAP can take half a dozen calls, so it runs a fleet of horizontally sharded MySQL clusters with a team of DBAs. One of them, based in Russia, volunteered to cover the nights, which helps the rotation and means fewer pages.

## Going Remote

Nylas began fully co-located in San Francisco, but after Series A hiring, office space and housing costs limited growth, and Christine says that affects diversity, since people with families are at a disadvantage. About 80% of the team is still in San Francisco and four engineers are full-time remote, with more offers to remote candidates. Steps to include them: moving the Friday all-hands to directly after lunch West Coast time once people were on the East Coast, limiting time zones to North America for now, and putting cameras and area microphones in conference rooms. The company writes things down in Slack and uses Dropbox Paper as a wiki. Matty, who was remote for eight years before moving to San Francisco, adds to start with noise-canceling headphones and to remember time zones.

## Why Structures Exist

Christine says scaling from two people to many shows why company structures form: past about ten people communication breaks down, and more diverse teams need to be clearer about the words they use. That has given Christine lasting empathy for other companies' processes, which can look like a black box unless you watch them grow: "there's always a reason why things end up that way." Matty's summary: "Context is a thing."

Matty has a chat with Christine Spang of Nylas about company culture and on-call techniques and war stories.

- [Student Information Processing Board](https://en.wikipedia.org/wiki/Student_Information_Processing_Board) - MIT
- [Ksplice](https://en.wikipedia.org/wiki/Ksplice)
- [Paying back technical debt - How we scaled infrastructure 20x and kept developers sane](https://www.nylas.com/blog/technical-debt/)
