---
title: Into the VOID Report with Casey Rosenthal and Courtney Nash
description: Courtney Nash and Casey Rosenthal from Verica join Matty for a deep dive into the results of the VOID (Verica Open Incident Database) report.
date: 2023-04-13T12:39:42.000Z
publishDate: 2023-04-13T12:39:42.000Z
episodeNumber: "184"
podcastFile: arrested-devops-podcast-episode184.mp3
podcastDuration: 59:50
episodeImage: episode/img/into-the-void.png
episodeBanner: episode/img/into-the-void-banner.png
images:
  - img/social/fb/into-the-void.png
guests:
  - person: crosenthal
    snapshot: crosenthal
  - person: cnash
    snapshot: cnash2
hosts:
  - mstratton
sponsors:
  - drata
aliases:
  - /184
  - /intothevoid
explicit: yes
transcript: into-the-void
---

Matty, coming back for a new season in 2023, talks with Casey Rosenthal and Courtney Nash of Verica about the VOID, the Verica Open Incident Database, and what its research says about incident metrics. Casey is best known for chaos engineering: Casey wrote the definition with a team at Netflix, started the conferences and the community broadcast, wrote the book on it, and is now CEO of Verica. Courtney is a former chair of the Velocity Conference who worked at O'Reilly, Amazon and Microsoft before taking a research role at Verica, and calls themself "the world's only internet incident librarian." The cold open is Courtney: "We've got a bunch of data that have allowed us to bust a few myths."

## What the VOID Is

Courtney started collecting incident reports while doing product research on Kubernetes and Kafka, looking for non-marketing information on how they fail in the wild. Having gathered about 1,000, people said thank you and "we have more of that," and the database and its metadata emerged in late 2020, with a first report in 2021 and a second more recently. The database takes a broad view of incidents: postmortems, status page updates, tweets and media articles, anything where someone talked about a website or service falling over. It also collects metadata such as how long the organization said the incident lasted, severity and methodology. Courtney wants data, not abstraction, to address myths about software incidents.

The VOID focuses on availability incidents since security breach databases already exist. Courtney says the DevOps mentality of sharing failure is a long way off in security. The analogy Courtney uses is the US airline industry in the 1990s, where the push to share incidents came from pilots, not regulation, and they set competitive concerns aside. Courtney and Casey both worry about regulation of software, with Courtney citing the call to regulate software after the Southwest Airlines meltdown, which was an organizational and cultural problem, and Casey calling it a personal nightmare. Casey says the VOID can help redefine the value of availability work, be it incident analysis, response or chaos engineering, and that availability and security are two sides of the same coin for system safety.

## Why MTTR Is Junk

Courtney explains that MTTR comes from physical manufacturing, where widgets wear in predictable ways with a normal distribution of repair times. Software incidents don't look like that: the duration data are heavily skewed, with a big bump under an hour or two and a long tail, so "you can't take averages of that. It's just garbage." An engineer from Google wrote an O'Reilly report that ran Monte Carlo simulations on incident durations, shortening some and taking averages, and the results were a mess. The VOID team did the same with its own data and got the same results. Courtney says people react either with "oh shit" or "oh shit, but I'm going to fight you on it." Casey adds layers: the statistics are wrong, the data coming in is garbage because methods for determining how long an incident lasts are fraught, and you'd need more data points than Google has.

Matty says the metric is used to report on the performance of people within a quarter and is about the closest thing to putting a Nagios counter on your people, and recalls incident command workshops where people said they spent their time on mean time to innocence. Courtney asks what decision you would make based on it, since either way you'd have to go look at what's happening in the system and the people operating it. Courtney says the industry's data-driven obsession overlooks data about human behavior, which is still data.

## Bureaucracy and Taylorism

Casey says organizational researchers call software the bureaucratic profession, bought wholesale from manufacturing and scientific management. Every role, such as people manager, project manager and architect, takes responsibility for expertise away from engineers, which makes sense on an assembly line and is the wrong model for knowledge work. The business must change if it wants availability, resilience and security. Courtney's line: "Taylorism is a corporate disease that we haven't developed a vaccine for yet." Matty recalls the Upton Sinclair quote about salary and understanding, and the frozen middle, where people's jobs exist because of metrics like MTTR.

Courtney says reliability and security are now central to business concerns, as Southwest showed. Casey describes how every Netflix engineer knew how to look up stream starts per second, one metric correlated with value, and Netflix found that going from four nines to five was pointless because users' Wi-Fi and ISPs wash it out, so they invested in regional failover. Courtney says to find the core metric according to your business, and Matty notes public sector people know their mission better than private sector people know how their company makes money.

## What to Use Instead

Courtney says what replaces MTTR is the recognition that no single metric captures reliability, and that software systems are sociotechnical, so you need people skilled in social science methods: interviewing, collecting stories, building narratives and finding patterns. Organizations are hiring incident analysts, and Courtney believes the ones who invest will gain a competitive advantage, though the data for that is further off. Courtney's favorite example is an organization in the CIO's office at IBM, described in a DevOps Enterprise Summit talk, where a skunkworks team did quality incident analysis, a bad incident gave the opening to try something different, and now monthly learning-from-incident reviews draw hundreds of people. Courtney also notes that the Microsoft Azure team changed its public reports from RCAs to post-incident reviews and the quality and depth improved dramatically.

Matty tells how a PagerDuty SRE quietly changed the word "root cause" in the postmortem template without asking permission, nobody objected, and suggests the homework for PagerDuty users: change the template to contributing factors. Casey "fully supports small acts of vandalism." Courtney's last finding is that the VOID data shows zero relationship between an incident's duration and its severity, and Matty and Courtney note severity is negotiable and changes during an incident. Casey says the whole model of severity is wrong at scale, since some group of users is always unable to reach your system.

- [VOID](https://www.thevoid.community/)
- The Verica Open Incident Database (VOID) makes public software-related incident reports available to everyone, increasing understanding of software-based failures in order to make the internet a more resilient and safe place. After scrutinizing nearly 10,000 incidents, one thing is crystal clear: Resilience saves time. Taking the time to understand how to better respond when something green turns red—learning from the people, the processes, and the systems—will make your next incident smoother.
- [2022 VOID Report](https://www.thevoid.community/report)
- “Taylorism is a corporate disease that we haven’t developed a vaccine for yet” - Courtney
