---
title: Developer Experience with Stephanie Stimac
description: What exactly is "Developer Experience"? Stephanie Stimac (Design Technologist and Program Manager for Microsoft Edge Developer Experiences) shares what DevEx is, and why it matters. We also discuss The Web We Want initiative and maybe even try to solve work item tracking issues!
date: 2020-07-27T12:57:15.000Z
publishDate: 2020-07-27T12:57:15.000Z
episodeNumber: "156"
podcastFile: arrested-devops-podcast-episode156.mp3
podcastDuration: 49:11
episodeImage: episode/img/developer-experience.png
episodeBanner: episode/img/developer-experience-banner.png
images:
  - img/social/fb/developer-experience.png
guests:
  - person: sstimac
    snapshot: sstimac
hosts:
  - mstratton
sponsors:
  - sdt
aliases:
  - /156
  - /developerexperience
transcript: developer-experience
explicit: no
---

Matty, back after a gap between episodes, talks with Stephanie Stimac, a program manager on the Microsoft Edge Developer Experiences team, about what developer experience is and why it matters. Stephanie has a web design degree, spent four years at an agency as a designer and front-end developer, and got a DM on Twitter from a PM on the Edge team looking for a designer in a PM role. The first three years at Microsoft were a hybrid of designer, front-end developer and PM, including design on the open-source tool webhint and a brief stint refreshing Chromium DevTools to look like Microsoft DevTools. The cold open is Matty's line: "I can make stuff up. Trust me. I'm good at that."

## What Developer Experience Means

Stephanie sees developer experience as a subset of user experience design: the experience developers have when using your product, which for Stephanie is a web browser. Edge Developer Experiences brings together the DevTools team, the web apps and PWA team, and the Ecosystem team, which Stephanie is on, after the move to Chromium. Stephanie explains that the Ecosystem team works like developer relations, helping other teams scale up and get good documentation out, and works closely with the HTML platform team on standards and features such as CSS requests. Stephanie describes WebView2 as a way to embed HTML, CSS and JavaScript in native applications, and has seen it demoed in Excel.

Matty compares it to the days of throwing things in Notepad and putting a green border on every div, and says tools like Firebug were revolutionary.

## Ask Developers What They Want

Stephanie says the biggest thing is that the Edge team now comes "from a place of humbleness" and asks developers what they want. Stephanie understands that building a browser used to be more closed off, with an assumption that browser makers are web developers and so know what developers want, which isn't true. Focusing on your developers is "the key to building a great developer experience," because "if you can build some cool feature, but if no one uses it," it doesn't matter. Matty adds the danger that when you think you're close to your users, you're really orthogonal to them, and skip the research.

## Documentation, Support and Crisis Design

For products where developer support is a sidebar, Stephanie says two things to bake in are documentation and support, which "can make or break a developer's experience." Documentation tends to be left to the end, with an assumption about what users know. Stephanie calls out some popular static site generators where debugging leads to an endless loop of docs with nobody to contact. Stephanie recalls an Eric Meyer talk about designing for users in crisis, the idea being that an experience a user in crisis can navigate will work for everyone, which applies to developers whose site has broken. Stephanie's advice is to keep iterating on documentation and stay open to feedback.

Matty ties it to empathy: things make sense to you because it was your idea, and swagger output isn't documentation, since examples matter and "I am coming to solve a problem." Matty adds that if someone keeps asking how to do the same thing, "that's on you," and compares it to learning to drive a manual so you can drive an automatic.

## The Web We Want

Stephanie spends about 60 percent of the time on The Web We Want, a cross-browser and standards initiative that started on the Edge team but isn't Edge-specific. It's a forum for developers to say what's missing from the web platform, asking what they'd change if they could wave a magic wand. So far it's had about 150 valid feature requests or gaps, and "developers are really hungry to give their feedback." HTML controls is one request that matched work already underway. Some submissions are things standards groups decided years ago weren't worth the investment, and now there's data from developers.

Matty links it to the saying that in open source "no is temporary, yes is forever," and that for no to be temporary you have to keep looking. Matty adds a change-management tip: reassure people that with the information they had, they made the right decision, and now things are different.

## Design Skills and Tracking the Work

Stephanie says "at my core, I am a designer," solving problems and looking at the whole developer experience, such as what a developer sees when arriving at the website. Stephanie gave design feedback on the Grid tooling going into Chromium, since a designer debugs layout differently from someone who only develops.

Stephanie says the team tracks engineering work in Azure DevOps, and that Web We Want submissions and problems extracted from interviews are hard to track there, because it isn't an engineering task you can give a number of dev days, and there's a "bucket of wants." Stephanie doesn't have a solution, noting the tool was built for dev work. Matty says you'd have the same problem in Jira, and it's the classic DevRel problem of tying work to value. Stephanie adds that features in DevTools aren't viewed as done when they ship, since usage and feedback continue to drive iteration, and Matty says organizations' measures don't map to continuous improvement.

## Empathy and History

Stephanie's steady message is empathy: talk to a subset of your users about their pain points and what they like, and "embracing your empathy and shed your assumptions." Stephanie likes telling stories about history, and in the HTML Controls talk dug into a 1994 or 1995 specification. Stephanie says an unresolved developer complaint can linger for years, and calls Internet Explorer a great example. Stephanie is speaking about HTML controls at FrontCon in Latvia the next month, and has a YouTube channel with the February version.

- [The Web We Want](https://webwewant.fyi)
- [Webhint tool](https://webhint.io/)
- [Designing For Crisis](https://aneventapart.com/news/post/eric-meyer-designing-for-crisis) - Eric Meyer talk
- [FrontCon](https://2020.frontcon.com/speaker/stephanie-stimac/) - upcoming speaking appearance for Stephanie
- [Stephanie's current and past talks](https://stephaniestimac.com/speaking)
- [Stephanie's talk on web controls](https://www.youtube.com/watch?v=b7Oke8pd6uE)
- Go to Stephanie's [YouTube channel](https://www.youtube.com/channel/UCO6Clt5KKCZmvgJKSbm4iBA) for past talks!
