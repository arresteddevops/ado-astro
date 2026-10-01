---
title: The Database Calls are Coming from Inside the House with Grant Fritchey
description: Grant Fritchey returns after almost ten years to talk about databases and DevOps, and why treating the database like code is still the most useful message.
date: 2023-10-26T13:47:58.000Z
publishDate: 2023-10-26T13:47:58.000Z
episodeNumber: "195"
podcastFile: arrested-devops-podcast-episode195.mp3
podcastDuration: 42:19
podcastBytes: 19400000
episodeImage: episode/img/database-calls-inside-the-house.jpg
episodeBanner: episode/img/database-calls-inside-the-house-banner.jpg
images:
  - img/social/fb/database-calls-inside-the-house.png
guests:
  - person: gfritchey
    snapshot: gfritchey2
hosts:
  - mstratton
sponsors:
  - devopsworld
  - uffizzi
  - gliffy
aliases:
  - /195
  - /databasecallsinsidethehouse
explicit: yes
transcript: database-calls-inside-the-house
---

Matty talks with Grant Fritchey, who last appeared on the show in December 2014 in The Database: The Elephant in the Room, about what has and hasn't changed for data and DevOps in the almost ten years since. Grant is still at Redgate Software and has added PostgreSQL to the skill set, and Matty now works at Aiven, a data platform, which comes up as context. Both describe themselves as having "storied careers, which is a nice way of saying we are getting old." The cold open is that line from Matty.

## Nobody Has to Explain DevOps Anymore

Matty frames the problem: code is close to immutable and easy to roll back, while data is living, and orchestration tools work well until someone asks about the data and it becomes somebody else's problem. Grant says that ten years ago every data person needed an explanation of what DevOps even was, and now "you don't have to talk about or explain what DevOps is anymore," which saves half an hour of every talk. Grant uses Donovan Brown's ordering of people, process and products.

Matty asks whether the organizational divide has improved, based on conversations at an AWS Summit booth where infrastructure people treated databases and Kafka as another team's job. Grant says it's getting way better, with a split between companies that build DevOps in from the start and incorporate data management, and companies that add DevOps later. Grant also notices that database administrator is a term going away: people who do backups, availability and query tuning now call themselves data engineers. Matty compares it to sysadmins becoming DevOps engineers with a pay bump, and both say to change the title if it helps, since the work matters more.

## Still Struggling

Grant admits being "a bit of a negative Nelly" here: "We are still struggling." The obstacle is persistence, since you can't toss the database and start over, and deployments have to happen without taking the server down for three hours. Grant thinks data management people haven't explained well enough to developers what they need, and developers often look at the database and see something scruffy. The joke that data work is like sweeping up behind a parade with elephants in it is, Grant says, how it sometimes feels, though the job is fun. Teams that have been bitten by data problems either embrace automation or avoid the topic altogether.

## Databases Are Code

For the platform engineer who runs Kubernetes and leaves data to a data team, Grant's message is "Databases are code," and Matty adds "just big code." It's big, so it can't move fast and self-provisioned development databases need third-party tools or empty databases, but it can be treated like the rest of the code, with the special part being persistence. Grant says the biggest misconception is that the database can't be automated. It takes a bit more discipline than automating development because the data must be kept, but it's fully automatable, and wildly successful organizations automate their data management and deployments.

## Communities and History

Grant finds the PostgreSQL community as welcoming as the SQL Server community is most of the time, and notices a split in Postgres between committers oriented around academics, theory and science, and everyone else who uses it and wants help. Grant says the same split is familiar from DevOps, where "Peggy does DevOps" doesn't make a DevOps company. Matty draws on the history-of-databases talk with Kat Cosgrove, from 1970s Ingres through Postgres, and says knowing why things are the way they are helps. Matty recounts that the relational model's creator disliked rows, columns and tables and wanted something more mathematical, like tuples.

Grant says the old foundations persist because they work, "rebar inside of concrete," which the Romans used. Grant is building a LoRa and IoT project on Azure and still uses a relational store, since the data volume is small. Specialized databases such as Cosmos DB are like a specialty tool for taking antennas off a radio, and you still need a hammer and nails.

## What's Exciting

Grant is excited by open source being everywhere: AWS, Azure and GCP all include or support it, and the divide between the commercial and open source camps is shrinking, though paid software will remain, as with Query Store in Postgres on Azure. Grant also expects people to try to put AI into production tooling.

Grant's advice for growing a career is to "assume automation from the start," then decide whether you enjoy the why of things, such as query tuning and design, or the how, such as automation in Azure and AWS, Kubernetes and containers. The local job market matters too: in Tulsa, Oklahoma, SQL Server dominates, while on the coasts Postgres is growing. Grant has submitted to PGConf Europe in Prague. Grant's last word: "Treat your database like code."

- [Arrested DevOps - The Database: The Elephant in the Room](https://www.arresteddevops.com/continuous-delivery-database/)
- [Arrested DevOps - Data! Data! Data! With Francesco Tisiot](https://www.arresteddevops.com/data-data-data/)
- [Arrested DevOps - The New DevOps With Adam Jacob](https://www.arresteddevops.com/the-new-devops/)
[History of databases talk from Matty and Kat Cosgrove](https://www.youtube.com/watch?v=TEZhDsJXQeY)
