---
title: Go Small or Go Home with Daphne Chong and Kenny Bastani
description: Bridget and Matt chat with Daphne Chong (Amazon) and Kenny Bastani (Pivotal).
date: 2017-07-02T14:59:40.000Z
publishDate: 2017-07-02T14:59:40.000Z
episodeNumber: "90"
podcastFile: arrested-devops-podcast-episode090.mp3
episodeImage: episode/img/microservices.png
episodeBanner: /episode/img/microservices-banner.png
images:
  - /img/social/fb/microservices.png
guests:
  - person: dchong
    snapshot: dchong
  - person: kbastani
    snapshot: kbastani
hosts:
  - mstratton
  - bkromhout
sponsors:
  - 10thmagnitude
  - victorops
  - datadog
aliases:
  - /90
youtube: Q0wKMKI61Lk
explicit: yes
transcript: microservices
---

Bridget and Matty record the last of six live episodes at GOTO Chicago, a panel on microservices with Kenny Bastani and Daphne Chong. Kenny is a Spring developer advocate at Pivotal, on Bridget's team. Daphne is a software engineer at Amazon who has lived in the UK, the US and Australia, and gave a talk on video transcoding at the ABC, which Daphne clarifies is the Australian Broadcasting Corporation. The episode opens with Bridget asking what advice Daphne would give someone who thinks they need some microservices, and the answer is "Don't."

## Why Split It Up

Daphne's reason for microservices at the ABC was scale. One part of the system, transcoding, has to scale far more than everything else, and the microservices part "tended by accident really," once that piece was separated. Transcoding means converting a video or audio file from one format to another, and the ABC needed to do it over its whole catalog, with requirements that commercial transcoders and Elastic Transcoder didn't meet. The transcoding service takes a JSON packet saying which file to transcode and where to save the output. It can run on a larger AWS instance type suited to the job, and Daphne says the cost of that instance goes 100% to transcoding. Matty calls that an interesting angle on showback and chargeback.

Bridget points out that spreading work across services adds complexity, and Daphne answers "I think you just move the complexity. Because there's always complexity everywhere." Bridget says that is Tim Gross's "conservation of complexity." Daphne says independently deployed services tend to be stable, and adding a captioning extraction service would sit apart from the others, leaving the main complexity in coordinating which service is called when.

## What Is a Microservice?

Matty asks how this differs from service-oriented architecture, which Matty worked with at a dot-com years earlier, with a mail service and a lead conversion service behind versioned APIs. Kenny says recent research into continuous delivery changed the definition Kenny started with. A shared delivery pipeline means you're "technically taking public transportation to production," batching up changes from, say, 500 engineers on one monolith. Splitting the pipelines lets people commit and deploy independently. Kenny admits "We're really bad at naming things," then lists small teams organized around business capabilities, independent deployability and a decomposition strategy, and calls it "a better SOA." A rule of thumb: if a new engineer takes longer than a day to ramp up on a service, it should probably be two services. Bridget, speaking as someone on the receiving end of the pager, adds that if a health check can only say some of it is working, too much is crammed into the service.

Kenny's talk covered event-driven microservices, using events to maintain the integrity of foreign key relationships when a large shared database is torn apart. Somebody had found the Cloud Foundry management endpoint on a Spring Boot app in one of Kenny's demos, and crashed the application of ten microservices from an iPhone. Matty guesses that someone thought they were at DEF CON.

## Don't Just Rub Microservices on It

Kenny passes along Matt Stein's line that microservices aren't the solution: you already have a problem, and want to go faster or scale. Matty says every VP wants a fill-in-the-blank this quarter, and Bridget recalls an open space at an Agile conference where someone said their VP wanted microservices that quarter. Kenny's advice is to get data first, for instance "How much unchanged code are you deploying per deployment?" Kenny notes that even a monolith on continuous delivery could be deploying every 11.6 seconds. Matty adds that the question is whether you need to go faster at all. Daphne says unchanged code is risk, since every deployment might go wrong, and Matty says small changes minimize the blast radius, which is a reason even if speed isn't.

Kenny says shared resources are a good reason to consider microservices or serverless, and expects a healthy microservice architecture to reduce unchanged code per deploy. Kenny would like to test that by mining GitHub, though no enterprise is going to put its code there. Kenny and Josh Long spent two years writing a book, Cloud Native Java, on cloud-native applications with Spring Boot, Spring Cloud and Cloud Foundry, which had gone to press, with a copy expected in early June.

Daphne's own route to microservices wasn't a formal journey. A team averaging about three people, each knowing a different part, built small pieces, and the scale question drove it. The project "kind of secretly started a bit off-piste" as a proof of concept that would save money.

## Conway's Law and Weaponized Microservices

Bridget says teams sometimes want independently deployable services to avoid interacting with other teams, and asks about weaponizing microservices. Kenny: "Oh, they're already weapons." Kenny says teams need empathy for the services they consume and produce, and describes consumer-driven contract testing, where you publish a contract and other services test against a mock, so you can't reach production without passing consumer tests. That pushes you to go to other teams instead of them coming to you, "a good way to prevent evil." Matty adds that Conway's Law also works in reverse: at places with little trust, a change from hunter green to forest green on the front end meant testing the whole website down to the data warehouse, because nobody trusted the contracts. "No matter what, people are terrible," Matty says, and Kenny says to make the less terrible thing easy.

## Serverless, Replatforming and Product Lifecycles

Bridget asks how serverless fits. Daphne says you still need to deploy and debug the serverless pieces, and the smaller the piece the easier it is: "it's a tool that you should wield in particular circumstances, and otherwise you're just gonna be shooting yourself in the foot." Kenny is researching how Lambda binds you to event sources that lock you into AWS, and suggests a Spring Boot microservice as an event source with Lambda functions as event handlers, though Kenny doesn't know of anyone doing it in production.

Matty says enterprises move slowly, and most enterprise customers on AWS or Azure use only compute, not things like RDS, because they want to hold on to configuration, and a DBA wants to look at a slow query log. Matty's private serverless GIF is an empty data center. The appeal of tools like Habitat is getting some of the value without rewriting an app into a 12-factor app, and Matty can't make a legacy .NET app on Windows 2008 serverless. Kenny defines replatforming as modifying applications to suit a platform that runs them differently, such as a cloud-native one, and says it makes sense where competition is rough. The IRS, Kenny guesses, wants to move faster but faces higher risk and little competition.

Matty brings in Marty Cagan's kill, maintain and innovate for products. A product on the kill list shouldn't be rewritten, one in maintenance doesn't need faster delivery, and only the innovate ones do. Matty says that's where bimodal IT goes wrong, though the Gartner idea properly read is that "different teams move at different speeds," like "one transmission for all of our teams, they're just in different gears." Bridget calls bimodal IT horseshit, and Matty's point is that declaring "microservice all the shit" skips thinking about each product's lifecycle.

## The Ridiculously Stupid Thing

Asked for the most ridiculously stupid thing to do, Kenny says creating microservices for things the business doesn't drive, or special snowflake services like image filtering for one consumer. Daphne's answer is languages: the ABC system used different ones for different services, which is fine as long as you don't end up with 20, so "Don't write them all in 10 different things." Matty adds "Don't write one in Ada." Kenny adds shared libraries, since upgrading one across 500 microservices is trouble. Bridget warns about the hidden distributed monolith, where everything still talks to the same database, and Kenny's test is that if one change means deploying all ten microservices, "you've got a distributed monolith."

Bridget and Matt chat with Daphne Chong (Amazon) and Kenny Bastani (Pivotal).

* Daphne's GOTO Chicago talk: [Video Transcoding at the ABC with Microservices](https://gotochgo.com/2017/sessions/81)

* Kenny's GOTO Chicago talk:  [In the Eventual Consistency of Succeeding at Microservices](https://gotochgo.com/2017/sessions/60)


## Community & Event Stuff

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)

### Upcoming conferences

### Open CFPs

* [lots of DevOpsDays](https://devopsdays.org/speaking)
