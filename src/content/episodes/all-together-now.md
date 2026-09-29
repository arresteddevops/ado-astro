---
title: all together now
description: Angela Dugan of Polaris Solutions and Todd Vernon, CEO & co-founder of VictorOps, join the ADO crew to chat about the challenges of collaborating in a cross-functional team. How can tools help facilitate communication among developers, testers, and operations? What are some of the best practices to keep in mind? And, of course, there just might be some "horror stories" of communication gone horribly wrong.
date: 2014-02-23T14:57:34.000Z
publishDate: 2014-02-23T14:57:34.000Z
episodeNumber: "7"
podcastFile: arrested-devops-podcast-episode007.mp3
podcastDuration: 01:00:24
episodeImage: episode/img/all-together-now.png
episodeBanner: /episode/img/all-together-now-banner.png
images:
  - /img/social/fb/all-together-now.png
guests:
  - person: adugan
    snapshot: adugan
  - person: tvernon
    snapshot: tvernon
hosts:
  - mstratton
  - thess
sponsors: []
aliases:
  - /7
  - /alltogethernow
youtube: lDf2s44f7W0
transcript: all-together-now
explicit: yes
---

## It Has to Be Substantially Better Than Email

Matty's retro is that his team has been piloting Flowdock for talking to on-site consultants, and that Hubot is now installed there, mostly to post memes and Breaking Bad quotes. That sets up the topic: collaboration, with guests Angela Dugan and Todd Vernon. Angela manages the ALM practice at Polaris Solutions in Chicago and spent about five years as an evangelist at Microsoft. Todd started out writing software for X-planes at NASA, went on to found Raindance Communications and Lijit Networks, and now runs VictorOps.

Matty says he hates email "with the fury of a thousand suns," and asks how you get people to switch. Todd's answer is that a new tool "has to be substantially better." He thinks collaboration works best when it's vertical instead of horizontal: HipChat is horizontal, so a salesperson, a DevOps person and a developer can all use it, but you lose the value of a platform that combines the data and the dialogue. Angela wants a natural fit. Email reminders "would kind of make you angry" because they yank you out of what you're doing, so she looks for a tool that plugs into what people already live in, with low friction and a phone version. Todd adds that for DevOps it has to be nearly mobile-first, because you might need to communicate on weekends, in the middle of the night, or "if you're skiing in the mountains."

## One Stream, Infinitely Filterable

Todd says his company argued internally over whether the right metaphor was chat or a Twitter-like stream, and chose the stream, so that the alert feed and other events sit alongside what people are saying. Chat, he says, tends to make people talk about the problem and leaves no room for updates and data.

Angela says information isn't collaboration if it's an undifferentiated deluge: the DevOps person shouldn't have to filter everything to find what matters. Matty tells of an application throwing errors nobody could interpret until Splunk dashboards put the number, 14,000 errors a minute, on a big screen the whole company walked past. "Very quickly it got looked at." Todd's ideal is a single timeline, "the black box recorder of the whole business," infinitely filterable, because otherwise a postmortem means pulling the story from seven different sources.

## Use Your Feet

Angela cautions that dashboards without context invite people to "do very evil things with data," such as judging a team's value by bug counts and severities, so teams still need to meet face to face, and product owners and stakeholders should be invited to retrospectives. Her closing tip for the episode is the same: "use your feet." Email and IM become a crutch, tone gets lost, and if you can't be in the room, get on a hangout.

## A Common Language

Todd asks whether writing software has become more social than it was a decade ago, and whether codifying deployment has given developers and ops a common language. Matty agrees on both. He came up as "the grizzled old sysadmin that sat in my silo and bitched about those cowboy developers," and says infrastructure work has become more like development, which is where it started, since the earliest sysadmins had to write their own tools. He thinks the meld is easier for developers, since ops is the one adopting practices like version control and test-driven development, "hell, testing at all." Developers building services have to care about operations in ways they didn't before.

Angela describes consulting years when "we were the ones pushing things to production," then the shift at Microsoft between 2005 and 2011, when infrastructure people started showing up to her ALM meetings to ask about source control and deployment tools. In her experience, companies that treat software as a social activity are "far less dysfunctional," with less contention between teams and less sandbagging on estimates. Trevor gives the counterexample: in a conversation about preparing the development environments so they'd fit into the client's production environment, the response was a flat "oh, that's up to them."

## Will There Still Be a DevOps Group?

Todd asks whether a separate DevOps group is a temporary situation, and whether in ten years everyone will be in it. Matty says DevOps is "not a tool, title, or team. It's a philosophy," and that a delivery team can and should be cross-functional. As he told sysadmin teams he managed, not everyone should be able to do everything, but anyone should be able to do most things. Trevor mentions he'd just been elected stack lead of DevOps for CI, Azure and AWS. Matty's response is that it's "more work for no more pay," and Todd agrees.

Matty calls the cross-functional team "more aspirational than executed." Todd, who sees how many teams use his product, pushes back: old-school companies deploy it to an ops group of 20 or 30 seats, while new-school ones deploy it to hundreds, and at the most progressive, "everyone has pager duty." Todd's verdict is "I think we're both right," and Matty adds that more places see the value without knowing how to get there, "and that's why people like me have a job."

## Age, Fear, and the Old-School Ops Person

Todd asks whether resistance is generational. Angela has seen a mix: sometimes the people who've been there 30 years are the most fed up and ready for change, and she thinks the fear is about confidence and personality, and about whether management will accept that "it might be ugly for a few months." Trevor thinks some resist because they fear extra responsibility, expecting ten more hours a week "because now I'm a DevOps person." Matty says it's experience, not age, and that if you've been somewhere 20 years, "the ship probably isn't sinking."

Todd has empathy for old-school ops, who have to learn to code and get no credit for keeping the machine running. Matty agrees, and says his profile on his last employer's Yammer read "you have no idea what my team does, and that's a good thing." His joke is that ops "doesn't have a dog to kick." He argues that continuous delivery is really built around stability. Todd adds that it isn't less work for ops, but the problems are smaller, and "I've never known one of these teams to get smaller." Matty recalls telling a team he managed that he was paying them "an awful lot of money to copy files around" and would rather they innovate.

## Stand-Ups for the Waterfall Crowd

Angela says the best practices of Agile are really just best practices in software development, and she has convinced some very waterfall customers to hold a daily stand-up anyway: "I don't care if you only deliver once every 4 months, you should still be meeting every day for at least 15 minutes." Her reasoning is that a company releasing to the public every six months can still work in small chunks internally. She wants testers, BAs and PMs doing the same, and across products too.

Asked for one tip each, Matty says: "No email. Stop using email. Find something else." Angela's is to use your feet. Todd's is to quantify your job in terms of value to the business, since most teams he talks to don't know the value of downtime, and so can't argue for the tools they need. Trevor's is to know how to talk to everyone on your team: if the CEO walks by and asks about your project, be able to describe it in a way that makes sense to them.

## Check-Outs

### Angela

- [*Drive: The Surprising Truth About What Motivates Us*](http://www.amazon.com/Drive-Surprising-Truth-About-Motivates/dp/1594484805)
- SockDreams - [@SockDreams](http://twitter.com/SockDreams) and [www.sockdreams.com](http://www.sockdreams.com)

### Todd

- Best BBQ chicken receipt in the world on [http://www.thepauperedchef.com/](http://www.thepauperedchef.com/) : [http://bit.ly/1chcmH](http://bit.ly/1chcmH)Q
- Aberdeen report on DataCenter Downtime: How Much Does it Really Cost, free to download here: [http://bit.ly/Mpd2E0](http://bit.ly/Mpd2E0)

### Matt

- [Meez](http://github.com/paulczar/meez) - Setup tool for Chef authoring
- [Downtown Chicago Azure Meetup - Feb 27, 2013](http://www.meetup.com/Downtown-Chicago-Azure-Meet-Up/events/160731772/)
