---
title: Secure by Design
description: Jessica chats with Dan Bergh Johnsson, Daniel Deogun, Daniel Sawano - authors of the book Secure by Design
date: 2020-04-09T12:00:40.000Z
publishDate: 2020-04-09T12:00:40.000Z
episodeNumber: "150"
podcastFile: arrested-devops-podcast-episode150.mp3
podcastDuration: 55:38
episodeImage: episode/img/secure-by-design.png
episodeBanner: /episode/img/secure-by-design-banner.png
images:
  - /img/social/fb/secure-by-design.png
guests:
  - person: ddeogun
    snapshot: ddeogun
  - person: djohnsson
    snapshot: djohnsson
  - person: dsawano
    snapshot: dsawano
hosts:
  - jkerr
sponsors:
  - circleci
  - logzio
  - sdt
aliases: []
explicit: no
---

## Secure By Design

Guests Dan Bergh Johnsson, Daniel Deogun, and Daniel Sawano join host Jessica Kerr to discuss their book [Secure by Design.](https://secure-by-design.io/)

Daniel: “There’s a lot of good designs which come naturally to us as programmers but which has the interesting side effect that they also prevent security-related bugs.”

## Domain Primitives

The panel discusses domain primitives as an example of coding practices that naturally provide security through good design.

Dan Bergh: “It’s a good starting point to understand that using domain-driven design not only makes your code more expressive, solves more domain problems. Even though these designs were not crafted to address security to start with, they’ve also had that as a side effect.”

Jessica: “I love that what you’re recommending in this part is to think harder about what you do want in the system, express that in the code, and suddenly a bunch of things that you don’t want in the system just aren’t.”

## Testing

The panel talks about the ways in which testing contributes to secure design.

Daniel Sawano: “It tends to be so much easier and more robust if you start defining your own domain types.”

## Immutability

The panel discusses the benefits of immutability.

Dan Berg: “It’s possible to...configure and mutate them until they are kind of safe-ish.”
Jessica: “Kind of safe-ish?”
Dan Berg: “Well, we are on a DevOps podcast.”

## Logging

The panel talks about the security implications of logging practices.

Daniel Deogan: “One thing that’s very important is that if you log input directly into your logs, it becomes an attack surface for second-order injection attacks.”

Dan Bergh: “It’s a perfect launchpad for doing a really, really hard attack inside your system.”

Daniel Deogan: “The common mistake that many developers do is that they more or less dump inputs blindly.”

Jessica: “We have this illusion that logging is simple, but it isn’t.”

## Cloud Thinking

The panel discusses the chapter on cloud thinking.

Dan Bergh: “In a way, we’re instructing the system to become more intelligent.”

[Symmathesy!](https://blog.jessitron.com/2018/10/25/symmathecist-n/)

The book is [available online](https://www.manning.com/books/secure-by-design?a_aid=sawano&a_bid=0b3fac80&chan=g) in its entirety.
