**Bridget:** [00:00:00] There are several thrones in this building, which is fascinating. I've got to get a picture of myself sitting on one of them.

**Lindsay:** Something, something, DevOps Illuminati.

**Bridget:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Bridget, and today we're at DevOps Days Sydney. This will be a co-production with Software Defined Talk. The show notes for this episode can be found at arresteddevops.com/devopsdays-sydney-2016. But first, a word from our sponsors. Arrested DevOps is brought to you by 10th Magnitude, a company that figures if you're listening to this podcast, you must be pretty cool. 10th Magnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/10thmagnitude.

[00:01:10] This episode is also brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 70 common infrastructure tools such as Chef, Docker, and AWS, so that dev and ops teams share their key data and alerts in a single place, and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog. This episode is sponsored by VictorOps, the company that makes being on call suck less. Built by a team of avid DevOps practitioners, VictorOps is the most innovative platform available to support modern IT and DevOps incident management. They do it with an unmatched feature set that's designed to support teams through the entire incident lifecycle. From first alert to final retrospective. This means you can respond to incidents more effectively, which in turn helps you release faster, minimize downtime, and get your life back. Visit arresteddevops.com/victorops to schedule a demo or start your trial. Mention Arrested DevOps and you'll be eligible for some great discounts too.

[00:02:14] I think probably the best way to get started is to say this is a— here we are at DevOps Days Sydney.

**Mick:** Yep.

**Bridget:** And this is not just Arrested DevOps.

**Mick:** Nope.

**Matt Ray:** Software Defined Talk and Arrested DevOps. Yeah. Both community sponsors. It'll pop up here on the screen before too long.

**Bridget:** Absolutely. So, Matt Ray, this is exciting for me because I listen to your podcast all the time, and I think I've actually technically been on your podcast without knowing ahead of time that I was going to be.

**Mick:** Yes. Yes.

**Matt Ray:** I think a previous— was it DevOps Day Chicago?

**Bridget:** No, it wasn't that one. It was, Cote and I recorded something, and I thought it was for one of his, you know, Cote-branded podcasts.

**Lindsay:** Ah, yes.

**Bridget:** And then he ended up putting it out on Software Defined Talk, and I found that out by having it pop up in my Overcast app.

**Matt Ray:** Always nice hearing yourself.

**Bridget:** Sorry?

**Matt Ray:** Always nice hearing yourself.

**Bridget:** I mean, it was a great surprise. So, maybe let's start with, here we are at DevOps Days Sydney. Matt Raee, what are you doing on this side of the planet?

**Matt Ray:** So, I actually moved to Sydney in July. I'm here to do evangelism and some sales, putting a footprint for Chef over here and doing the DevOps stuff on this side.

**Bridget:** [00:03:29] That is really exciting. And though I imagine it does make scheduling recordings of Software Defined Talk a little bit more difficult.

**Matt Ray:** Yeah. You know, Kotay and Brandon, my co-hosts, are always like, oh, so can we record, you know, Wednesday afternoon? I'm like, Yes, Thursday morning. And then they're like, how about Friday afternoon? I'm like, nope, that's the weekend. How about Sunday afternoon?

**Bridget:** And they're like, oh wait, no, that's the weekend. Yeah. Time, it's difficult. I honestly keep looking at— this is my first time in Australia, and I keep looking at the world clock on my phone and saying, home is negative 17 hours from now. It's hard to wrap my brain around that.

**Matt Ray:** You get used to it. You get used to it.

**Bridget:** Nice. So, I feel like Software Defined Talk has recorded at DevOps Days before. They did the big recording of— Dallas.

**Matt Ray:** In Chicago.

**Bridget:** Dallas, they did all of the podcasts were there.

**Matt Ray:** Yeah.

**Bridget:** But you've been to several of these. Can you kind of talk from the sponsor point of view of what your experience at DevOps Days Sydney has been like?

**Matt Ray:** [00:04:31] So, Chef has, for the last couple of years, been a sponsor of multiple DevOps Days. Like, the devopsdays.org has you know, you can say, hey, I just want to buy all of them. You know, we want to sponsor as many as we can. And, and so, uh, you know, this year, knowing that we were going to be in Sydney, I made sure that, you know, that we were going to sponsor here. Uh, we were also sponsoring Singapore. Um, and, you know, uh, we just missed New Zealand. Um, you know, I think it was in April or something like that, right before, right before I moved here. Um, but, you know, the, the intention is, you know, we want to build community everywhere we go. And that's, you know, that's part of it.

**Bridget:** Yeah. I feel like the building community motivator is a big part of why people either, you know, sponsor or show up at or organize these things. And we also have Katie here who is a— Hi.

**Matthew:** Hi.

**Bridget:** Who is an organizer of this particular DevOps Days and a couple of more organizers who Just entered the room, so come on up. We'll have everybody who's an organizer, current, past, possibly future, introduce themselves. Let's start with Katie. Tell us about yourself.

**Katie:** [00:05:45] Hi, I'm Katie. I've been like emceeing this entire event, so if my voice sounds like gravel, that's probably why.

**Matt Ray:** And the karaoke.

**Katie:** I did not karaoke. I did check the karaoke and there was not enough Disney. Oh, but, but I did do an escape room last night. That was quite fun. The events here for the last 2 years have done on the first day will go out, have bowling and activities, and the conference will not supply beer, which has been really good for people actually showing up the next day.

**Bridget:** You know, that is actually excellent. And we are also joined by Lindsay and Matthew, who— Lindsay, you were speaking in the very first slot today. So how do you feel about the fact the conference didn't supply beer? How do you feel that it affected the attendance of the morning talk?

**Lindsay:** It's funny because I gave an opening talk talk at the last one that was here in Sydney in 2013, and the attendance today was spectacular compared to that.

**Bridget:** [00:06:47] That's fantastic. And between the 3 of you, I feel like we have DevOps Days organizers who have— is this your second year?

**Katie:** No, this is my first year organizing. First year organizing, I did a panel keynote last year as a speaker. And this year, I just went, let's do all the things. So, yeah.

**Bridget:** And meanwhile, we also have some of our OG DevOps Days core organizers here. Yeah, you're gonna be called out. And Lindsay too.

**Lindsay:** Hi.

**Matthew:** Yeah. So, Lindsay kicked off, I think it was the 2nd or 3rd DevOps Days outside of Ghent, Second. Second, uh, in Sydney back in 2010.

**Katie:** Wow.

**Matthew:** So it's the longest running one in the world, uh, and the DevOps meetup as well.

**Lindsay:** Yeah, so Mick and I here, we started the first ever DevOps meetup in the world. Um, so that was— when was it?

**Matt Ray:** [00:07:49] January?

**Mick:** February 2010 we started.

**Lindsay:** Yeah, right. Wasn't it January?

**Mick:** We started organizing at the end of December. Yeah, and the first meetup in February 2010.

**Bridget:** And we do, by the way, for those who are not in the room, and we are doing the live studio audience thing, but for those who are not in the room, we should also introduce Mick. And honestly, like, I'm terrible at pronouncing people's last names, which is why I haven't been using them. But next time you introduce yourself, Mick, you get to go this time, everybody else after. Please do say your last name, maybe Twitter handle too, so our readers— what?

**Matt Ray:** Listeners.

**Bridget:** Listeners have some idea of who they're listening to.

**Mick:** Hi, my name is Mick Pollard, and pretty much everywhere I'm known as Aussie Linux. And I'm here as an attendee this year.

**Bridget:** And this is, I feel like this is something that is maybe different about DevOps Days versus a lot of events, which is, I think a lot of events, you have your sponsors, and you have your speakers, and you have your organizers, and then there's that vast teeming mass of people who probably don't matter and don't have a lot of input on how the conference goes. But that's not actually true at DevOps Days. And can you kind of maybe, Lindsay or Matthew, if you want to give us a little bit perspective on how DevOps Days is different in terms of the participatory aspect?

**Matthew:** [00:09:11] So, definitely from my perspective, I'm Matt Jones, or Geekle on all the things, is I really enjoy DevOps Days because half of it is open spaces, which the organizers do not shape the conversation, the attendees do. And we can influence that some ways with the morning track, but apart from that, it's up to the attendees and what they get back out of the conference.

**Lindsay:** Yeah, it's sort of like there are— you've only got participants. You don't have any sort of silent witnesses or silent attendees to the whole experience, which is great because the thing that we tend to find is that the people that enjoy the conference the most are the people who participate the most in it, right? So it's It's like that old cliché, you get out as much as you put in.

**Matt Ray:** Yeah. But, and as a vendor sponsoring it, and I've been an organizer, it's like you get as much as you put into it. So, you don't really feel like, oh, well, we sponsored it. We're gonna get this. Well, you actually still have to show up and talk and engage. And just having a table isn't really as important as talking to the people who come to your table, going and finding them out in the halls. I think it's, as a vendor, it's a great experience just because, you know, you get to talk with people who actually use the software.

**Lindsay:** [00:10:30] I guess I don't, in my job, I'm attending a lot more sort of corporate-type events, and it's put into very stark relief the difference between the community stuff that I've been involved in for so long and the way that the rest of the industry operates. It's like, you're from a vendor, but like, I don't see you as from a vendor. I just see you as an actual person.

**Mick:** Right, right.

**Lindsay:** You can have a conversation with.

**Matt Ray:** And you can even not feel like you have a conflict of interest as an organizer, a sponsor, a keynote, and, you know, running open spaces. Like, yeah, it's just, that's what we do.

**Matthew:** And it's the draw for me is DevOps Days. They're run by volunteers. It's not-for-profit, you know, with the caveat that we need to be profitable to actually put them on every year. But we're not filling our pockets or anything like that. It's for the community. I'm here because I am one of the community. And back to the open spaces as well, one thing I find challenging in Australia, I'm not sure if the other organizers from around the world have the same experience, is selling open spaces to people that have never been to them before. Yeah, so they see the agenda and see that half the day has nothing. So I think it's one thing that I'm taking from some feedback I've received over the past few days that we need to do a better job of selling the open spaces to people that haven't even turned up to a DevOpsDays before.

**Bridget:** [00:11:50] Well, and there's about— every time I go to a DevOpsDays and ask people how many people have been to one before, about 85% of the room has never been to one. And so, we have started putting in the stock template that we're not calling them, at least it's in the Minneapolis template for sure. I'll make sure it's in the stock template for 2017. Hi, I'm Bridget. I'm terrible at the website stuff, which is why Matt Stratton, who is a co-host of Arrested DevOps, of course, and is not here in Australia, is in charge of the, you know, devopsdays.org website stuff. But the stock template, we're starting to say attendee-suggested breakout sessions, you know, something like that. Because when you say the word open, well, not just do people think, oh, I'll go back to the office during that time, but I think also people sometimes think, they don't have a talk for that time. It's 2 days out. I'm a vendor and I would really like to give my pitch. I will send in ideas. It's like, no, not exactly.

**Lindsay:** Mick, weren't you telling me a story last week about somebody who had— who was saying exactly that?

**Mick:** [00:12:52] Damn. With—

**Lindsay:** Yeah, with the open spaces.

**Mick:** Yes.

**Lindsay:** You're like, you're 2 weeks out or whatever.

**Mick:** So we got some— that was— I think I forwarded that feedback on to Matthew. Someone emailed in and said, I'd love to come to your conference, but why am I giving you money to come to a conference that has no speakers? Allocated. They didn't quite understand.

**Lindsay:** 2 weeks out and you don't have speakers on your program. Like, how disorganized are you?

**Bridget:** And this is actually someplace where, because I know Katie speaks at a lot of conferences, I would love to hear your perspective on what emceeing this particular one was like.

**Katie:** I didn't introduce myself earlier properly, but hi, I'm Katie. I'm Glasnt on all the things. I also run KatieConf. Yes. Yeah, this is pretty much DevOps Days is a supercharged hallway track and some talks. And it, like yesterday, trying to get people to come back in after some of the sessions was like, we're in the Sydney Masonic Center and they have a giant bell and I got to ring the giant bell and I got yelled at by the other people who were doing it. Their conference across the hallway. And I got in trouble because I was too loud for the bell and people still didn't come back in because there are so many amazing conversations happening. I mean, after the last DevOps Days, it was weeks afterwards that I was still remembering, oh, I remember I talked to that person at the thing about the thing. I should go investigate that. And there's only one other conference that I go to that really emphasizes the fact that you don't have to go to all the talks because all the talks are recorded, and that's LinuxConf Australia, which is in January in Hobart, and y'all should come along. They just announced that they're doing free childcare thanks to GitHub, which is great. I'm totally involved in organizing that conference as well. That's my little caveat. But people go out of their way to travel across the world to attend conferences, not to sit in a room and watch a livestream. They come to meet the people, and the people are the thing, and the people make it all happen, whether it's vendors, sponsors, keynotes, speakers, attendees, and being all in the same place, in the same room with these people is why I go to conferences.

**Matthew:** [00:15:07] Yeah, that's spot on.

**Bridget:** Yeah, yeah, 100%, totally agree.

**Mick:** One of the feedbacks I've heard in the hallway here with the open spaces yesterday was as a non-technical person, they felt really involved, and that's great to hear at a technical conference. They joined in a conversation and they got a lot from it, which was great.

**Bridget:** Well, and on that note, because we're doing the live studio audience thing and I have here a handheld mic that's not a lapel mic attached to me in any way, it means that we can in fact hear from people in the audience. And so, like, let's maybe seed that with some of the topics that we've been discussing, whether it was in the talks, in the last couple of days, topics in the hallway track, topics in the open spaces. Like, I'll start and say, Lindsay, your talk this morning, you're talking about one of those squishy things that's kind of difficult, which is, gosh, we're trying to create these complex distributed systems made out of humans building teams. Can you talk a little bit about that for people who have not yet been able to watch the video of that talk because the wonderful video people just recorded it?

**Lindsay:** [00:16:23] Yeah, no worries. Sort of on the distributed system bit, it's like the— like a human itself is like a pretty complex distributed system when you think about it, right? And then like you get this, all of this other emergent complexity that happens when you put other people together. And that's, that's really interesting to try and deal with, right? Because I'm like, I've been doing the whole DevOps thing since like the really beginning. Like I was doing it back in Gen in 2009 and I came because I was just interested in the technology and like people were like, yeah, let's do Agile Systems Administration. I'm like, fuck yeah, I can get on board with that. And then from that, it's like, oh, none of the technology problems are the hard ones in our industry. It's actually people, and people are, like, really interesting. And so, I wanna learn everything that I possibly can about people so that I can make sure that they're looked after well.

**Matt Ray:** I think to generalize, the talks kind of break down to, you know, there's a container track, but there's also, like, how to do DevOps with people in the enterprise, how to make this thing work in the real world. It's like we can get up and talk about it and you can say, oh, yeah, we should all sit in a circle and sing Kumbaya, but it's like, how do I get my boss to listen to me? And there's probably a whole track on that today. And that's recurring. Like, every DevOps Days, there's always, like, yeah, that sounds nice, but... And that's, like, a track of its own. And then you have the people who are like, yeah, it actually does work. And we're like, nah.

**Bridget:** [00:17:50] Well, and I think that as we're having these conversations, I've been to a number of DevOpsDays this year and the last couple of years. I actually, I'm remembering now that I met Matthew Jones at the first DevOpsDays I went to. It was 2013. Well, it was Velocity, actually, but I met you at Velocity 2013 in Santa Clara. And then you were one of the people telling me, oh, hey, DevOpsDays is right here in this same venue. Stick around for it. Like, it's gonna be great. And I was very confused by open space. Like, I went to a couple of talks and then at open space time I bailed because I had no idea what was going on.

**Matthew:** Yeah, it's quite interesting having that difference between such a large conference with thousands and thousands of people, an exhibitor hall, you know, big talks, big keynotes, to a DevOps Days which 200 people, maybe a little bit more, and it's the attendees set the tone, set the discussions. And it's, as Katie said, it's a hallway track on steroids kind of thing.

**Bridget:** [00:18:52] And I feel like, yeah, I feel like it's the conversations that we've been having at DevOpsDays in the last few years and even all the way back to 2009 again, I think you're right. I think they have been evolving. Like, what are some of the topics that you organizers and attendees and and even sponsors are hearing now that maybe are different than at other conferences or different than you've heard in past years?

**Lindsay:** I think the stuff that we're seeing around Lambda is fundamentally changing things. It's interesting because I've been working really heavily in the Cloud Foundry space in the last year or so. And it's interesting watching other people get up to the same point that we are in the Cloud Foundry space. Maybe that's a little bit rude because the— The functions as a service stuff that you're seeing there, like, that's a fundamental game changer. And when you look at the amount of execution time that you get for free, like, I do a bunch of stuff in government, right? And so I look at how much we can get for free with Lambda, and it's not going to cost the taxpayer a single thing. Like, that is massively disruptive. And Peter, who gave the talk earlier in the day about, you know, functions as a service, the insights that he had at the end of that were like bang on, which is like a operations as a craft is going to rapidly change between now. I expect that when I come to another DevOps Days in 2, 3 years from now, we probably won't be talking about any of the same sort of stuff technology-wise that we are today.

**Matt Ray:** [00:20:20] I mean, definitely, you see, like, if you think back year to year to year, it's like, this year it's the functions as a service, that sort of stuff is really hot. But last year it was containers. Well, It's been containers and Docker, like, the last 2 or 3 years. But the things that continue are the people. The people problems never go away.

**Katie:** Yeah.

**Matthew:** One topic that keeps coming up the past couple of years in Australia is DevOps and the rest of the business. So, we had an Ignite yesterday, which was FinOps or FinDevOps, which was interfacing with the finance department. Security and DevOps, that's quite big. I run a meetup in Melbourne, and security is a massive thing in the market in Melbourne and around the world, really.

**Matt Ray:** Yeah.

**Bridget:** And really, there's— I'm looking at Katie again because I know you also go to a number of conferences that aren't strictly speaking in the DevOps space. Like, what kind of intersection do you see between the topics that you're seeing in this space and the topics you're seeing in some of the more, like, OSCon, programming language-focused conferences, etc.?

**Katie:** [00:21:31] Thankfully, I'm seeing that a lot of the language communities are picking up on the fact that, yeah, the tools we use kind of come and go, but the people are still squishy and awkward. And so the underlying tones that I've been seeing around the place about content culture and about improving the hiring and diversity and inclusion inclusion. And now more than once seeing linguists giving keynotes. We just had Nigel, who has come off an interesting sickness, to give that amazing talk that we just had that people listening to this podcast are going to have to go and look up because it was amazing. And just these concepts of we have these tools, but we don't make stuff to make stuff. We make stuff to solve problems. And it's trying to get that abstraction happening is a really big thing. And so the contempt culture about the tooling and stuff is what a lot of people are finally realizing that, hey, WordPress does solve problems and that's okay. Just please keep it up to date and patch it.

**Matthew:** [00:22:40] Thank you.

**Matt Ray:** I mean, one of the things I actually appreciate about the culture stuff that we talk about at DevOpsDays is it's people who have a lifetime investment in this industry, and they want it to be a better place for everybody. And, you know, it's like, yeah, we kind of hammer on the same topics year after year, but I feel like some progress is being made.

**Mick:** I hope.

**Katie:** That's why I do all these conferences and stuff. It's like, I'm not an evangelist. I don't get paid for this stuff. I'm taking annual leave right now to be here, and it's because it's like, hey, I kind of can help facilitate these conversations, and heck yes, I want to make sure that these events keep happening, because when they don't, that's like— organizer burnout is a thing, and all this stuff. So it's like, hey, I'm like up-and-coming and kind of know what's going on, let me help. And I accidentally ended up emceeing the entire event. On purpose, I did, I did volunteer volunteered for this one, but that is a thing I'm learning how to do, actively volunteering, not being told what to do, but voluntold, which is a wonderful term that Lindsay introduced me to many moons ago and that I've used in talks since, the suggestioneering type thing. Yes.

**Matt Ray:** [00:23:56] It's a valuable skill.

**Katie:** Yeah. But burnout and temp culture, all this kind of stuff is just like a really common thread. And then you get the talk about how to work out how to do stuff with OS X and security and stuff that I was just at KiwiCon for, or talks about how robots are changing social structures that I was just at BuzzCon for, or linguists and how language is awful at the keynote that was just here at DevOpsDays. So it's just like all these other kind of specialty things and then the squishy bits. And it's really lovely to see.

**Matthew:** I think the other thing back on culture and community, DevOps Days, as I was saying before, not-for-profit. It exists because we, the people in the audience here, are here. And I organized this with other organizers and we're volunteers and we're not motivated by making money. So, the year that we have zero attendees or attendees where it's not profitable, profitable enough, we'll break it down into something smaller or it will dissolve away. The community exists because there's a community here. We're not trying to force it.

**Mick:** [00:25:05] In February 2010, so at the end of 2009, the GFC was here. I was working in an ASX 200 telco. I'd moved to a startup. The startup didn't get their next round of funding and everyone was fired one morning. It was quite brutal. And it's like, I didn't have a name in the industry, I hadn't been to any community events, and I was doing the hard slog. Here's my resume, I'd like a job. And it was really hard. And I sat there and I thought, I don't want to do this ever again, and no one else should have to either. And that was the driving for me to actually start DevOps Sydney with Lindsay, was let's build a community that people can come and network. And it should be an inclusive community. It shouldn't be just for practitioners. It should be for all sorts of people. It could be recruiters, it could be anyone that comes along. If we help people find jobs and connect people, then I'm happy with that. That's the only reward I need.

**Lindsay:** And one thing that I think that we've done pretty well with the way that we're running DevOps Sydney, particularly around the recruiter bit, is that we're actively inclusive of people who are recruiters. A lot of meetups sort of turn up their nose at them. It's like, well, We're here for the technology, and what are you trying to do coming here and selling us?

**Matt Ray:** [00:26:18] We're trying to make it so we can pay our bills. Come on.

**Mick:** Yeah, I know.

**Lindsay:** How dare you try and get me into a place where I can get money for doing things? Assholes. But yeah, like, we go out of the way and it's like, well, okay, you can't come to a meetup. You can't join the meetup itself and then start cold calling people, or you can't be messaging people through meetup.com or whatever. But if you engage, you come to the meetup and we just have a conversation. And you can, you know, because we're all people at the end of the day, right? And, you know, these are real people that have got real things that they're trying to solve as well. And I see them as our allies in the community.

**Matt Ray:** So, Bridget, you and Matt, Matthew, Matt, either one's fine. You guys have both attended a lot of DevOps Days, you know, around the world, especially Bridget.

**Matthew:** Especially Bridget.

**Matt Ray:** Yeah. But so, how would you compare and contrast your experience here? I mean, you know, this is a nice venue. It's got its own peculiarities.

**Mick:** [00:27:20] I did like the—

**Matthew:** For listeners, this is a Freemason hall, basically.

**Bridget:** Yeah, there are several thrones in this building, which is fascinating. I've gotta get a picture of myself sitting on one of them.

**Lindsay:** Something, something DevOps Illuminati. Audience?

**Katie:** Well, no, there's like a hammer on the door outside, and there's, there's a throne just to— we're on a stage right now, and just to our left there's like an eagle and a throne right there. And behind the projector is a magnificent sort of just like throne, like proper throne. And yes, we'll definitely get a selfie with that later. Um, but, but It's like running these things, you need venues.

**Bridget:** Yeah.

**Katie:** And that's okay. And no one's been slanderous towards the Freemasons, which is really good because, yeah, it's a little bit weird, but hey, it's a venue.

**Matt Ray:** Yeah, no, I did. It's a nice venue.

**Bridget:** Yeah, I mean, and that's a really good point, which is the trappings of culture in any kind of community, community are going to be different and going to be unique, and there are markers Maybe our markers are stickers and t-shirts, but there are markers that show community. And some of that is— what does Schaefer like to say? Like 80 or 90% of tech is tribalism and fashion. I think we're in tech, we're pretty familiar with this exact sort of setup. But to your question, I've been really happy at this particular event with the amount of— like, for example, in open space, the amount of really active engagement And I definitely want to delve into some of the topics that we were— several of us were in an open space yesterday. But then there's also— I feel like there's— I speak at a fair number of events and you sometimes get an audience that kind of silently nods. And you sometimes get an audience that is a little more active and engaged and laughs and smiles and then comes up to you afterwards and starts talking and talking about their experience. And I think that that It kind of says that this is a very active community that's very engaged in actively discussing as opposed to passively receiving. And you sometimes, depending on the conference, and usually at DevOps Days people try to be more active, but depending on the conference, you sometimes end up with a lot more of a, again, passive as opposed to participatory environment. And I think you've really— it's clear that with CID DevOps and the DevOps Days Down Under, that you've created an environment where people are very participatory.

**Matthew:** [00:29:46] Yeah, so the local meetups in Australia, I feel they're very community and active-oriented. So in Melbourne, there's the DevOps Melbourne meetup, and I run InfraCoders with another chap, David Lutz, or Lutzy on Twitter. And it's— we encourage speakers and the audience to ask questions during the talks. It's a low barrier of entry. And to come back to Lindsay with your recruiting, at the end of our meetups we have what we call a community events space and that's where you stand up and sort of holler certain things like there's a meetup next week, it's just started, or there's a conference in a couple of weeks somewhere else. And that's the opportunity for recruiters, companies, and also individuals if they're looking for work to stand up and they get an audience and a captive audience.

**Bridget:** Yeah, I really like that. And I think that that shows again in the kind of discussion, like really high-quality discussion that we were having in open space yesterday. And I know we are short on time because every podcast always runs out of time. That's a podcast rule. But Matt Ray, I think it would be really cool if you gave us a little bit of a background on the discussion that was happening around containers, orchestration thereof, et cetera, yesterday and how that discussion went.

[00:31:01] For you?

**Matt Ray:** So yesterday, the topic of the evolution of infrastructure and how that is ongoing, where what we call legacy or traditional infrastructure, your mainframes, has given way to virtualization, has given way to containerization, and now it's functions, where the focus really needs to be on applications. It needs to be on how you're delivering that application, whether it's— everything else is just less important. I mean, we can argue about containerization, we can argue about virtualization or operating systems, but what's really important is getting the value to customers, and that's the application. And that's where we were.

**Lindsay:** Yeah, I think like the— so I talk a lot in government as well about the stuff that we're doing from the DevOps side of things, but I don't ever use the DevOps word because it has all sorts of crazy connotations. But the 2 bits that I just keep focusing on and keep reinforcing is that the reason that you want to try and change your technical practices is because you want to go faster, because it means that you're delivering value more quickly, which means that you're hopefully meeting user needs better. But fast— going fast and being safe, they are not mutually exclusive. In fact, what we know, particularly from like the stuff that we see in the Puppet Labs DevOps survey is that people who go faster, they recover from failure a hell of a lot quicker, right? The stats are sort of ever-evolving and change every year. But when you actually battle— a lot of the pitches that I do to people, I just start with those stats and that just completely fundamentally changes their perspective on things, right? So like you said, it's not about tech, it's about what the business outcome is.

**Matt Ray:** [00:32:50] Yeah. And I like tech, don't get me wrong. But compliance at velocity is what we call it. And you have to move fast today. One of my observations as a foreigner coming to Australia is I don't think the level of paranoia is here that we have back in the States about the competition. Because Amazon's not here. I mean, they're here. They brought their data centers. But as a retailer, they're not here. They're just about here. Yeah, they're just— they're coming. Winter's coming. And Walmart too. And in America, we've got this one-two punch of Walmart and Amazon. And retail is— they're getting torched. And so that—

**Bridget:** then Walmart open sourced the one-op stuff. And people are just like, this is a very strange world we live in now.

**Matt Ray:** Yeah, yeah. And yeah, they kind of co-opt— it's hard. Yeah, you end up using your competition's products.

**Bridget:** Oh wait, this is a software-defined talk. We probably have to mention Costco. Do we have any inkling of a hint that Costco is open sourcing anything? Are they open sourcing anything around platforms, containers, microservices?

[00:33:58] No.

**Matt Ray:** Amazon added a new container orchestrator yesterday. So yeah, the world moves fast. But one of the things I don't sense in Australia yet is the fear of, you know, the competition is there, but it's also like, You know, it's 4 o'clock, let's hit the beach.

**Matthew:** So I found that very much to echo what you're saying where Australia traditionally, from my experience, we're pretty open and a lot of meetups, we talk about a lot of things that when I've gone to meetups in, say, the US or Europe, there's a lot of sort of that NDA culture where I can't talk about this publicly. Things like that. But we're starting— I'm feeling as an organizer of meetups, starting to feel that now because we're getting quite a few US or North American companies coming into Melbourne, which is great.

**Bridget:** Oh, so it's our fault.

**Matt Ray:** No, no, it's not your fault.

**Matthew:** It's just that they're bringing that culture with them.

**Matt Ray:** Yeah.

**Matthew:** And it's something that me as a community organizer is very mindful of, that we have meetups in certain companies and now there's an There's an extra thing. There's NDAs. There's like, we've got to sign everyone in.

**Matt Ray:** [00:35:10] I mean, I have noticed that Australians are in general more talkative about like, oh yeah, we're doing this at this bank and I ripped this out and kicked that vendor out. And you're like, okay, what would that vendor say? So, I've always been bad at NDAs too. But yeah, it's—

**Lindsay:** I think historically, like, if you sort of go back to colonialism and sort of the white culture that that was brought here, like the majority of people that came out here in the first 100 years, they're all convicts, right? So you're not going to try and—

**Bridget:** I mean, I wasn't going to say it.

**Lindsay:** Let's just be honest, right? And you're not going to try and screw over your other convicts, right? Because, you know, because there's a lot of honor among thieves. There's a lot of honor.

**Mick:** Exactly.

**Lindsay:** So, you know, the enemy is sort of like the, you know, the people that are running the show, right?

**Katie:** Something containers, something something jails.

**Lindsay:** And so I think that that sort of colonial heritage in modern white Australia has definitely flowed through to all different aspects of our culture, right? Like we don't have that ultra-competitive streak, like both at the organizational level, but I think just at the personal level as well. And like you see, you know, certain young male tennis stars displaying certain sort of you know, very sort of preening behavior and you're like, you sure that you're Australian? That's not the sort of behavior, like that's not the way that we act. And like probably the best example is like, remember when they did the first Australian Survivor? Like back in like the beginning of the 2000s, right? And there was just no competition. They were like, yeah, come on mate, let's— I don't really want to be here anymore. Like, oh, okay, we'll just vote you out and, you know, good luck. And You know, thanks for coming.

**Matt Ray:** [00:36:53] And it was like, that's no TV.

**Lindsay:** And then you compare that to like Survivor this year, which is fucking cutthroat, right? That's how much we changed in that last year or so.

**Mick:** Sorry.

**Bridget:** Is this the part where I ask, does Software Defined Talk actually bleep expletives? No. Okay, good, because we don't. So it's like there could be like the TV version.

**Lindsay:** It's that fucking comedy caricature coming right out.

**Matt Ray:** Yeah.

**Bridget:** We've long since made our peace with the explicit label on iTunes. Like, this is not a problem on our podcast. Keep in mind, we've done episodes with Charity Majors. I know we're almost out of time. And I wanted— because right before, when I talked Mick into being on this podcast, we were discussing over in one of the breaks earlier, like, what— again, this is kind of back to the changing role of operations— what you're seeing as As an attendee here, as an operations professional, and of course, as a SID DevOps meetup organizer, I'm going to ask you first, and then I'm going to ask the rest of the panel, so be ready. What do you see as the future, TM, of where is this whole thing we call DevOps going for you?

**Mick:** [00:38:06] There's a lot more effort being put into what is it that we're actually delivering as a developer. And a lot less around the operating system layer now. And with containers, with CodeFoundry, with functions as a service, I see that, you know, if you've been around a while and you installed Apache 1.3, I think that was 25 years ago or something, it hasn't actually changed that much. It's still Apache. It's still got the same directory structure. Like, it's— why would you—

**Bridget:** Please run NGINX.

**Matt Ray:** We've got the Apache ConfD now.

**Mick:** The OS layer is really more a utility these days. Stop concentrating on that operating system. It was solved quite a while ago. And move on to, let's actually work on what is it that we're trying to solve? What is that business value? So, the time between starting a new feature and putting that into production isn't really providing much business value. So, the smaller we can bring that down to actually getting that service into production, the better we are. And it frees us up to concentrate more on things that matter and the culture side as well. So, my favorite open space yesterday was about how do we breed an industry by teaching and learning new people coming through. There's some great stuff came out of that.

**Bridget:** [00:39:29] All right. And I'm going to ask you the same question, Katie. Like, what do you see coming now that is different than what you saw before?

**Katie:** I'm still relatively new to like this ops space.

**Bridget:** Which is why you have a great perspective on the actual new stuff. You're not held back.

**Katie:** I'm still like, I open up like a Unix book every once in a while and go, oh, less is a joke because it used to be more and more is less and oh God. But gap filling is still a thing. Like even though the operating system level is solved, you can now run Bash in Windows and stuff. And there's still the gap filling and all that kind of stuff that has to happen for the new people coming in. And it may seem archaic, but I've had to go and Splunk through old Perl systems once in a while. And it's like there's this whole legacy DevOps thing that still has to happen, unfortunately. That's kind of what I'm seeing as a thing. It's like everyone's running off with the Node.js containerless Lambda functions as a service, as a service, as a service. And I'm sitting here with NetSane. What the heck? There's this whole dichotomy thing going on, and there's still some interesting stuff happening, but I'm literally still learning, and hopefully I never stop, but it's still like What's functional? What's Lambdas?

**Bridget:** [00:41:01] I don't know. It sounds like what you're saying is the past is— what's the quote? The past is not gone, it's not even past. All right. Lindsay, what do you think?

**Lindsay:** I think what Peter was talking about earlier in the day around, like, functions as a service, like, just radically changing what operations people do, like, that infrastructure is still going to need to exist, right? But you're going to see consolidation like we have in all sorts of other industries. Like, you know, people— if you want to work on that low-level infrastructure stuff, great. Like, there's, you know, Google opening up a cloud— Google Cloud Platform region here at the moment. So you should totally go and apply and work at that sort of level, right? But for everybody else who doesn't want to do that, then, you know, you know, like, if you look at some of the stuff that we're doing at the— in government at the moment at the DTA, like, we're supporting literally hundreds of apps with a team of 2 people, right? So that's sort of the economies of scale that you're going to start getting. I feel that we're a little bit further ahead than a lot of other people on that, but that's how I see the future looking, right? And so that means that, yeah, there's going to be less of those sort of jobs going around, but it also means that we can move further up the stack, right? So if you're an ops person, make sure you start learning at least one other programming language, preferably 2, right? Because you actually have an invaluable amount of experience that can be provided to developers because suddenly, like, the barrier to entry for developers to be able to get stuff running is, like, massively reduced, right? So, you know, that said, they're still gonna need help.

**Matt Ray:** [00:42:32] Yeah, it's massively reduced, but there's so many more places things can go wrong now. And having that wisdom of being around a lot of stuff, You know, just different tech stacks.

**Bridget:** Wait, Matt Ray, are you saying operability is still a thing?

**Matt Ray:** Yeah, I'm saying being able to understand, you know, get your head straight around what could possibly go wrong, that's always going to be, you know, important.

**Matthew:** So, the future for me, I worry less about technology. My background is sysadmin operations. I'll figure that out as I go. To me, the most important thing, and we say it at DevOps Days, is it's less about technology and more about people. And the interesting thing in the open spaces, we start talking about people and how can we be nicer to each other and how can we embrace community. And then there's always the discussion of me versus the business or me versus the organization. But people need to come to the realization that we need money to exist in this society. So, you need to get paid. And you need to keep that in mind. Everyone talks about business value, which is great, but remember your customer as well. Because at the end of the day, they're the person that gives you your paycheck.

**Matt Ray:** [00:43:54] And if you can bring— if you are the rare DevOps engineer who can speak to business, like, you can go anywhere. I mean, that's a valuable skill, is learning people and business.

**Bridget:** I was going to say the quantity of frequent flyer miles that I have currently, which by the way, gamification of poor life choices, but the quantity of frequent flyer miles will say yes, if you can do some DevOps and also talk to people in the C-suite, you can in fact go anywhere, even the other side of the planet. Tell me though, what do you think, Matt Ray? We were talking about Habitat yesterday. This is like, we don't need to go into specific open source projects that Chef does, though everyone should go to habitat.sh and check it out. But we're talking about this in the context of where you focus. And I feel like that's kind of key.

**Matt Ray:** Yeah, it keeps coming back to the application. You just, like Mick was saying, if you can have less focus on the what as how it runs and where it runs, and more focused on what you're actually doing and delivering. That's where you wanna get to. And so, the less trappings of the operating system you have to care about, the better. Because the future is probably running on somebody else's data center, running functions on somebody else's cloud. And there's always gonna be servers somewhere.

**Bridget:** [00:45:21] So, my spouse Joe, who's going to be editing this podcast later, is from Appleton, Wisconsin. And in Appleton, there is a historic site along the river where there was some really early power generation. And so, like New York City and a couple of other places, and Appleton, Wisconsin had electricity before almost anywhere else in the US. And I don't think most enterprises these days really want to set up their own water wheel and generate their own power. And I think that maybe a lot of people don't really need to run a data center, and it's possible they don't need to patch their own operating system. And I feel like that's kind of where I see the future going is when Nigel was giving his really great keynote, his closing keynote, earlier today, and he's talking about words and metaphors, I kept thinking about layers of abstraction. And, like, when we talk about, you know, James Waters' value line or any of the other talking points that any of us vendors all would like to sell you things or like to put out there. I think a lot of it comes down to, there's going to be, this is the stuff I want to do, this is not the stuff I want to do, and deciding which stuff you're going to abstract away, which stuff you're going to pay someone else to do, like where the best bang for your buck or where the most useful stuff for you is to do and doing all that stuff and not doing the other stuff. I mean, we probably all agree generating our own electricity is not on the list, except maybe Mick, because you do live out in the bush.

**Matt Ray:** [00:46:50] He lives pretty remote.

**Mick:** Yeah, I do harvest all my own electricity at home. It's probably a little unique amongst most of us.

**Bridget:** And this is again—

**Lindsay:** You're a Ubuntu user as well, right?

**Mick:** No, no, Arch Linux.

**Bridget:** Come on. You can of course get to the discussion of decentralization and solar panels and et cetera, et cetera. I mean, of course there are ways that that stuff can change over time, but There is a lot of stuff where you have to decide which stuff am I going to do, which stuff am I not going to do.

**Matt Ray:** Yeah.

**Bridget:** And like, I think that that's where our industry is at a really interesting place where we're figuring out which stuff makes the most sense for us to do and which stuff does not. That whole, you know, what is it versus OpEx? Yeah.

**Matt Ray:** What do we buy and build and what do we just spend money on?

**Bridget:** What is, what is a utility? What is a commodity, etc.?

**Mick:** Look at home right now. If you turn the tap or force it for others. Water just— but water just comes out. Like, do you actually sit there and think, where is it coming from? I wonder how much is left. What if I turn it on and nothing comes out? What do I do? That's where I was heading to before with the operating system is now like that. It's like, I'm gonna turn a tap on, force it, and my operating system's there waiting for me. I don't care how it gets there.

**Bridget:** [00:48:01] Yeah, that is very much the No matter which tools you're using to do this stuff, and hopefully you're going to try to interact well with the people you're doing it with since they're going to keep being there. We are not actually all gone and replaced by robots quite yet. And possibly replaced by emoji, ask Katie. And that, like that, what actually is the most valuable for you? What is producing business value?

**Matt Ray:** Yeah.

**Bridget:** Yeah, that's definitely been a theme here. And I know we're out of time.

**Matt Ray:** Yep. Sessions to go to.

**Bridget:** This has— you have a session to go run.

**Matt Ray:** Yeah.

**Bridget:** So, this has been—

**Katie:** It's afternoon tea time.

**Bridget:** And there's tea.

**Matt Ray:** And tea, yeah.

**Bridget:** So, this has been Arrested DevOps.

**Matt Ray:** And Software Defined Talk.

**Bridget:** Thank you all for being here.

**Katie:** Yep.

**Matt Ray:** Thanks.

**Mick:** Thank you.
