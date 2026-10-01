---
title: "Gophers: Brian Ketelsen & Erik St. Martin"
description: Bridget discusses all things Go with Brian Ketelsen and Erik St. Martin.
date: 2018-01-23T17:55:48.000Z
publishDate: 2018-01-23T17:55:48.000Z
episodeNumber: "101"
podcastFile: arrested-devops-podcast-episode101.mp3
episodeImage: episode/img/gophers.png
episodeBanner: /episode/img/gophers-banner.png
images:
  - /img/social/fb/gophers.png
guests:
  - person: bketelsen
    snapshot: bketelsen
  - person: estmartin
    snapshot: estmartin
hosts:
  - bkromhout
sponsors:
  - chef
  - thoughtworks
aliases:
  - /101
youtube: SOMbbTM6PWs
explicit: yes
transcript: gophers
---

Bridget talks Go with two teammates, Brian Ketelsen and Erik St. Martin, both cloud developer advocates at Microsoft. Brian had just helped form a new team focused almost entirely on open source, and Erik had recently joined it. Brian started in IT at an ISP in Wyoming in 1993, billing customers on 3x5 index cards until automating it in Microsoft Access, and has since been a DBA, done data warehousing and been a CIO. Erik worked on web development, spent years on Disney's e-commerce platforms, and then moved into distributed systems and databases, with a side interest in security that began with writing no-CD cracks for video games. Erik says neither of them mentioned Go in their intros, though it has been a big part of their lives for seven or eight years. The cold open is Brian: "Writing a book is very similar to having a baby."

## How They Came to Go

Brian saw the Go announcement in 2009 and played with it, and six to eight months later had a problem that needed concurrency: a big Ruby on Rails monolith that wasn't meeting its SLAs while calling many data sources. Go "blew the doors off of what I expected out of concurrency," and Brian has been a fan since. Erik remembers a group at Disney in 2009 playing with it without seeing a selling point. Two years later, Erik was job hunting, interviewed at Brian's company, and was asked to maintain a service Brian had written, too busy as CIO. That meant learning Go in the days of makefiles and a language changing about weekly.

Brian explains that before 1.0, releases were numbered like R56, which was the first version they put in production. The team shipped go fix, which rewrote old code to the new syntax, and Erik recalls only one case needing manual fixing, when rune was introduced. Brian's view is "ship it with a tool like go fix." Erik says that care for the developer is part of the love. Since the 1.0 API freeze, "anything that compiles on Go 1.0 will compile on Go 1.10."

## Why Concurrency Matters

Bridget asks for the ops-audience version. Brian says Ruby and Python historically execute on one core at a time, and Erik adds the global interpreter lock, so only one thread interprets code at a time, though blocking I/O can run in parallel. Go has goroutines, which Brian calls lightweight, low-memory threads, with many running on one OS thread. Erik adds that the concurrent code is easier to reason about, since threading was added to many languages after the fact while Go designed around concurrency from the start. Bridget calls that concurrency as a first-class citizen, and Brian asks if they can record that and put it on the GopherCon website.

## Go in Action and the Next Book

Brian and Erik and a third author wrote Go in Action, published in November 2015. Since the API froze at 1.0, Brian says the book isn't out of date at all after three years. Brian has time booked that afternoon to finish an O'Reilly proposal with a co-author, which Brian won't describe, and would pick an otter for the animal. Erik says the original book began with wanting to tech review a stalled Manning Go book, and being asked if anyone they knew would write it: "screw it. Let's do it. How hard could it be?" Both say writing is like a baby: after swearing never again, you forget how painful it was.

## Go Time FM

The pair co-host Go Time FM with Carlesia, which came out of a relationship with Changelog, who invited them on to talk about GopherCon and later wanted to produce other podcasts. Erik says both groups wanted a Go podcast, and they merged. They want three co-hosts each time, and when one is missing, a guest sits in, such as Ashley McNamara, Kelsey Hightower or Scott Mansfield, and when more than one is out, they skip the episode. Erik says the format is "like we're all sitting around just having a conversation at the dinner table," with only loose notes, and the show had just reached its 65th episode.

## Starting GopherCon

Asked how GopherCon started, Brian says "It was a dare." Brian and Erik had been saying for two years that there should be a Go conference, and someone on Twitter said they should run it, so Brian registered a domain name. That was mid-2013, and they had hoped for 200 or 300 people and sold out at 750, needing to rearrange the venue. They had reserved a hack day for people waiting for flights and expected 100 people, but far more stayed, leaving them wondering how to feed everyone. Hotel attrition in the first years meant close calls, with Erik saying "Brian, we're gonna lose our houses, man," and the second year lost about $10,000, before hiring Convention Designs in Colorado. They remember committers to the Go project stuffing 750 swag bags on a production line in the Denver Marriott.

Attendance was about 1,200 in 2015, 1,400 in 2016 and just over 1,500 the previous year including staff, with about 1,800 expected. The dates were August 27 to 30 in Colorado: a workshop day, two days of talks and a community day. The CFP runs on PaperCall, which Brian says filled a hole in CFP management, and Erik recommends the community day, with a room of electronics programmable in Go and a Go contributor room last year where the Go team helped people get first patches in. Brian mentions a post saying conferences are dead, and agrees that loosely structured time to network matters as much as talks. They also lend the GopherCon name to events outside the US, provided there's a code of conduct and no selling speaking slots.

## Microsoft and the Community

Bridget asks whether Microsoft running a conference for a Google-born language makes it a corporate effort. Erik says from the beginning it was community-first: "we won't sell a speaking slot," and the conference has lost sponsors over it. GopherCon is run by Gopher Academy, which employs Erik and Brian legally, and Microsoft's role is letting them do it on company time. Brian says the interview made clear Microsoft wanted Brian "not in spite of the fact that I ran GopherCon, but because of it," and says "there's no forced shilling." Erik's reaction to the arrangement: "Pinch me."

## Virtual Kubelet

The new team's first project is the Virtual Kubelet, an interface anything can implement to look like a node on a Kubernetes cluster, be it a container, a virtual machine or a bash prompt. Brian says the Hyper.sh team built one to run virtual machines under Kubernetes, and an Amazon group is also working on the spec, with the goal of tools useful beyond Azure and of patching other projects to work better on Azure. Erik wrote a blog post explaining it, and asks people with a project to come say so.

Bridget and Erik also discuss Ashley McNamara's Gopherize Me, which began with Ashley making gophers for Brian and Erik and, Erik says, became a tool built with Matt Ryer in a day.

Bridget discusses all things Go with Brian Ketelsen and Erik St. Martin.


## Referenced in this ep:

- [GoTimeFM podcast](https://changelog.com/gotime)
- [GopherCon](https://www.gophercon.com/)
- [Go in Action](https://www.manning.com/books/go-in-action)
- [Microsoft CDA team](https://developer.microsoft.com/advocates/)
- [Gopherize Me](https://gopherize.me/) by [Ashley McNamara](https://twitter.com/ashleymcnamara)

Artwork credit: [Ashley McNamara](https://twitter.com/ashleymcnamara)'s [Gophers art repo on github](https://github.com/ashleymcnamara/gophers)


## Community & Event Stuff

If you have an upcoming conference you would like to see promoted on ADO, you can fill out the handy form at [arresteddevops.com/conf](https://arresteddevops.com/conf)

### Upcoming conferences

### Open CFPs

- [lots of DevOpsDays](https://devopsdays.org/speaking)
- [GopherCon](https://www.gophercon.com/): [CFP](https://www.papercall.io/gophercon2018) closes March 15; Conference Aug 27-30.

### Discount codes
- ADO2018 for 20% off lots of devopsdays, 10% off ChefConf, 5% off GopherCon.

### Checkouts

## Brian
* [kubed-sh](http://kubed.sh/) - web-based Kubernetes distributed shell
* [Isomorphic web applications using Go](https://isomorphicgo.org/)

## Erik
* [Blog post about virtual Kubelet](https://erikstmartin.com/post/virtual-kubelet/)
* [Building abstraction atop k8s](https://www.openfaas.com/)
* [Machine learning setup on k8s](https://github.com/google/kubeflow)
* [Reverse engineering circuit boards](https://www.amazon.com/PCB-RE-Techniques-Mr-Keng-Tiong/dp/1979331383/) (next book on my reading list)


## Bridget
* [Honeycomb engineering blog](https://honeycomb.io/blog/)
* [Bombsheller leggings](https://shop.bombsheller.com/) (again! because people ask for this at every conference!)
* [Leakproof Nalgene water bottle](https://www.amazon.com/dp/B0043TG59E/)
