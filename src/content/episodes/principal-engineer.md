---
title: Principal Engineering with Silvia Botros
description: Matty and Jessica discuss Principal Engineering with Silvia Botros.
date: 2019-04-21T15:05:47.000Z
publishDate: 2019-04-21T15:05:47.000Z
episodeNumber: "129"
podcastFile: arrested-devops-podcast-episode129.mp3
podcastDuration: 51:51
episodeImage: episode/img/principal-engineer.png
episodeBanner: episode/img/principal-engineer-banner.png
images:
  - img/social/fb/principal-engineer.png
guests:
  - person: sbotros
    snapshot: sbotros
hosts:
  - mstratton
  - jkerr
sponsors:
  - datadog
  - pagerduty
  - sdt
aliases:
  - /129
  - /principalengineer
explicit: no
transcript: principal-engineer
---

Matty and Jessica Kerr talk with Silvia Botros of Twilio SendGrid about what it means to be a principal engineer. Silvia started as a Python developer at a since-gone CDN in New York, tripped over the database when it had issues and never left, and has been at SendGrid for about seven years, which grew from about 60 people to 500 and was acquired by Twilio about two months before. As of the Monday before recording, Silvia is a senior principal engineer, which mostly means "a lot more meetings." Silvia's org, SendGrid engineering, is about 130 engineers. The cold open is Silvia's line about being the org's archaeologist: "Table X, what does that do? I'll be like, let me tell you a story."

## Tripping Onto Databases

Silvia says nobody grows up wanting to manage databases, since people trip on them and never come out, and Matty adds that nobody wants to be a sysadmin either, though an intern once said so and was hired. Silvia started with the DBA title at SendGrid, which changed to DBE as the role involved more code, and now works to expand beyond MySQL.

## What a Principal Engineer Is

In Silvia's org, the role "is not like a senior, senior engineer." It is more strategic and business-oriented, built on influence without a manager's title or performance review authority. Silvia says a principal must be a force multiplier: Silvia's own shift over about a year and a half was from writing code to teaching others how to write it without trouble down the line, and in a large org principal engineers write design documents and help the team build, with mentoring the biggest part of the job. They can have a home area of the stack and still need to be T-shaped.

The skill Silvia calls most controversial is learning to talk to people other than engineers: product managers, finance and security. Principal engineers answer security and compliance questions about encryption and backups. Silvia says it would be a red flag for a principal not to understand what problem is being solved for customers.

## Talking to Product

The process at SendGrid starts with a product canvas that lays out the problem and customer type, followed by solution validation with engineers, where principal engineers come in and explain, in English, what a request will cost, like a multi-region consistent database requiring Spanner and a large budget. Silvia dislikes the tech community's dismissiveness toward "just the product person," who is the voice of the customer. Silvia admits it didn't come naturally, having once been a DBA who got cranky at customers who called an API too often, until realizing that the company let them. Rate limits are an example: if you allow a behavior, you need to support it. Jessica calls it setting expectations. Silvia says "That's the biggest part of a principal engineer's job, is to make sure that what we're promising is what we're building."

## Blueprints

Once product settles on what to solve, the delivery team writes a blueprint in a Google Doc covering what they're building, which helps onboarding and lets changes be explicit, with product able to see and comment on technical limits such as a service's SLA. An architecture team made of senior principal engineers reviews blueprints for one-way doors, decisions that can't be undone. It's a gate to production but not to proof-of-concept work. Silvia says the process can look waterfall-ish but tries to keep it fast, because customers build businesses on the product, and it shouldn't reach production by accident. Jessica says rewrites are appealing because it's the only time requirements are nearly complete, and Silvia adds that rewrites need a higher bar than Go being cool. Silvia notes that SLA math starts early: a service promising four nines in one region gives fewer nines across regions, and the more components, the lower the overall SLA.

## Titles and Challenges

Asked about misuse, Silvia says "All over Silicon Valley," a title lottery, and "Staff engineer at Google does not equal principal engineer or architect at a company that's 18 months old." Jessica says it's about salary bands. The biggest challenge is the calendar, and finding the middle ground, since senior people become aware of other limits such as customer revenue, deadlines and security risks. Silvia's team motto is "strong opinions, loosely held," and Silvia used to be a no person earlier at SendGrid and earned flak for it. Jessica says the job is not to say no but "how do we get to yes?" Silvia also names the calendar as the best part, since it lets Silvia swap the DBA hat for a product or security one. Principal engineers partner with engineering managers, who are less in tune with the technical implementation.

## The Org's Archaeologist

SendGrid hires principal engineers from outside, and onboarding is a team exercise, like Support Bootcamp, a four-day course where the support team teaches how to use every part of the product. Silvia, with the longest history, is one of the org's archaeologists who can explain what a table does. Jessica says to find such people and make friends with them. Silvia is now learning data stores beyond MySQL, and is a pragmatist: none will work all the time, and the question is whether somebody else found the sharp edges. Matty jokes that Silvia disrupts electronics, and Silvia tells of a hotel booking that failed twice and then said it was already booked, "I'm a living Jepsen," and a network flap at a Chicago data center the moment Silvia landed in Denver.

## Advice

Silvia's advice for aspiring technical leaders: strong opinions loosely held, be an enabler, not the person who always says no, expect to spend a good chunk of time mentoring, and learn why things work the way they do, with healthy skepticism of new tools. Silvia is "very much of the Dan McKinley school of like, use boring tools to build cool things." Silvia recommends a talk by Tanya Reilly on glue work, and says "the internet is duct taped together with Bash."

<!-- show notes -->

* [On being a principal engineer](http://blog.dbsmasher.com/2019/01/28/on-being-a-principal-engineer.html) - blog post by Silvia

* [Silvia's talks](http://blog.dbsmasher.com/talks/)

[Image credit](https://www.flickr.com/photos/sixteenmilesofstring/1384073790)

### Community

* [Velocity San Jose](https://conferences.oreilly.com/velocity/vl-ca) June 10-13 2019 - discount code "ADO2019" gives 20% off for Gold, Silver, and Bronze passes.

* For any [devopsdays](http://devopsdays.org), try the discount code ADO2019!

* [CFP for devopsdays Chicago](https://www.devopsdays.org/events/2019-chicago/propose/): open until May 3rd


### Checkouts

* Silvia: the Beyoncé movie came out on Netflix: [Homecoming](https://www.netflix.com/title/81013626)

* Jessica: Do something outside! It’s spring!

* Matty: [Stocksy](https://www.stocksy.com/) - for affordable stock imagery that benefits the artists and [Super Team Deluxe](https://superteamdeluxe.com/) for great pins and stuff
