---
title: Data! Data! Data! with Francesco Tisiot
description: Let's dig into the world of data, with Aiven's Francesco Tisiot.
date: 2023-06-01T16:07:50.000Z
publishDate: 2023-06-01T16:07:50.000Z
episodeNumber: "186"
podcastFile: arrested-devops-podcast-episode186.mp3
podcastDuration: 46:33
podcastBytes: 21300000
episodeImage: episode/img/data-data-data.png
episodeBanner: episode/img/data-data-data-banner.png
images:
  - img/social/fb/data-data-data.png
guests:
  - person: ftisiot
    snapshot: ftisiot
hosts:
  - mstratton
sponsors:
  - drata
  - sysdig
aliases:
  - /186
  - /datadatadata
explicit: no
transcript: data-data-data
---

Matty talks with Francesco Tisiot, a data professional with 15 years in the field, including 12 years of consultancy across a wide range of sectors and about ten of those with big enterprises. The conversation covers how data moves through a company, what event streaming and change data capture are, why data sprawl is a technical, financial and security problem, and four directions for judging whether a data platform is robust. The cold open is Matty, after Francesco explains replaying events from Kafka: "I'm still stuck back in 1999."

## Data Is a Journey

Matty asks how the field has changed from the days when the DBA was the person in the closet. Francesco picked data because the work sits between computers and people: analysts, scientists and engineers translate business expectations into models and documents. "Data is data, but how you think about it, how you make sense of the data, changes every time you interact with different people."

Francesco frames data as a journey, using a company that sells shoes online. A purchase lands as a record in a transactional database. A startup then runs analytics queries against that same database to compare today's sales with yesterday's, which works at small scale. As the company grows, those queries make the transactional database suffer, so the data gets moved into an analytical database, and one piece of technology becomes a chain of them. Francesco notes the chain follows the growth of the company, including change data capture, event-driven architecture and analytical databases.

## Batch, Streaming and Change Data Capture

Francesco explains the old batch approach: wait for the night when the website is offline, extract everything from the transactional database, and load it into the analytical database to feed the data marts and warehouses. That still suits reporting on last month's data. It doesn't suit cases that need an immediate reaction, such as reordering inventory when ten pairs of shoes sell. There the work moves from batch to real-time or near real-time, per event. With Kafka, a streaming technology, a change in the database can be propagated to downstream systems, for example an application that compares current stock against a data scientist's prediction.

Change data capture tracks changes in the database by reading its logs, without continuously querying it. Francesco says it lets a company evolve from batch to event-driven without touching the transactional database or the application in front of it, so the business keeps running while the backend changes.

## Losing the Map

Matty asks how large organizations keep their data interactions aligned. Francesco describes enterprises where you don't know about a data mart sitting there, or who purchased a tool, because "people come and go and company remains and data remains and, you know, bills remain." With non-technical users building analytics through point and click, there is no longer a single view of reality. Francesco admits losing a ten-year battle against people exporting transactional data into Excel, and says what matters is a global view of which data assets and pipelines exist and how they connect. "If you don't have the map, you are lost."

Without the map, a company can pay a consulting firm six months later to solve an inventory problem it already solved, or let two teams solve the same problem and end up with different answers because of a small detail in a KPI definition. Francesco adds the financial and security side: GDPR aside, loose control over where data lands invites someone to dump a database export into a bucket by mistake.

Matty asks whether anyone does this well. Francesco has seen two approaches work. One is documentation, which is risky because it's an afterthought, though Francesco wonders if ChatGPT could help with parsing it. The other is a single tool for all transformations, such as Informatica, which can give column-level data lineage, but data now spans many technologies and teams. Matty says relying on documentation and training is the worst way and prefers guardrails that make the right way the easy way, and notes that Kubernetes is great until you want state.

Francesco sees a way forward through metadata. Within one database like Postgres, catalog views list tables, users and permissions. Between systems, the gap can be closed by parsing the configuration that connects them, for example the JSON payload of Kafka Connect, which says where data comes from and where it goes. Automated tooling can describe how a pipeline was built but never why, so the reasoning behind a KPI, such as using the last six months of sales instead of three, still needs documentation.

## Four Directions for a Robust Data Platform

Francesco's framework has four directions, and the episode's existing links include the blog post on it.

- **Scalability.** It covers technical scale, such as going from one node to a cluster of 50, and whether the technology can segment all the business cases. It also covers whether the humans can scale, since a technology with no talent pool becomes a problem in five years, and financial scale, since a perfect solution that costs twice what each user brings in is not affordable. Francesco adds that data platforms are sticky and few backend migrations succeeded.
- **Observability.** Metrics, alerting and notifications matter because the data team is offering a service within the company. A bird's-eye view also helps when GDPR queries arrive, since you know who to ask. Francesco asks why versioning shouldn't apply to data too, with a way to replay yesterday's data after a mistake.
- **Fast.** Speed covers time to develop, time to deliver and time to recover from errors. A dashboard built in a day is not worth it if you always wait 23 hours for the right data.
- **Trustworthy.** With one analyst, that person's Excel file is the source of truth, but with 55 analysts there is no number anymore. The company needs a single golden truth, delivered on time, because a KPI that is right at 9 AM one day and 1 PM the next erodes trust. Data also needs to be secure, so nobody who shouldn't see or alter it can.

Francesco says some of these will bite immediately and some in the long term, and looking at all four lets you compare technologies and make a 360 degree decision.

## Replaying Data With Kafka

Matty finds versioning and replay hard to imagine, since even restoring batch data to a point in time was nearly impossible. Francesco describes Kafka as a log: events are written one after the other, and reading doesn't delete them, so another application can read the same messages. Add schemas, and Kafka refuses messages in the wrong format. Schema evolution lets you change the schema while existing consumers can still parse messages. In the example, a boolean for putting initials on the shoes is added, billing ignores it and the printing team uses it. If the flag later needs to be a color, the log can be kept for days or years and a new set of consumers can be fed the data generated since yesterday, five hours ago or an hour ago.

## Misconceptions

Asked about what developers and infrastructure folks get wrong about data, Francesco says the biggest misconception is that data systems are old and boring. The data world is hot, and ChatGPT and AI are data. Innovation with data depends on quality data, which is the biggest problem to solve everywhere, and "Data pipelines are cool."

Francesco is on Twitter as @ftiziot, which is consistent almost everywhere apart from LinkedIn, and the DMs are mostly open. Francesco also says the main mission in life is telling people how to properly eat Italian dishes, which for example excludes carbonara with cream, pineapple on pizza and cappuccino with lunch or dinner.

- [Kafka Connect tool](https://aiven.io/kafka-connect)
- [Metadata parser](https://github.com/aiven/metadata-parser)
- [Francesco’s SOFT blog post](https://dev.to/ftisiot/a-soft-methodology-to-define-robust-data-platforms-998)
