**Bridget:** [00:00:04] This is going to be one of those awkward silences Joe has to edit out. It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm your host, Bridget Kromhout, @bridgetkromhout on Twitter. Arrested DevOps is brought to you by Tenth Magnitude, a company that figures if you're listening to this podcast, you must be pretty cool. Tenth Magnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/tenthmagnitude. This episode is also brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 70 common infrastructure tools such as Chef, Docker, and AWS, so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog.

[00:01:18] All right, so we're here at DevOps Days Toronto. We just finished up selecting open space on the second day. And as typical at a DevOps Days, we're fitting in a recording of Arrested DevOps in one of the open spaces. In this particular case, we have a wide variety of awesome guests representing a lot of aspects of the conference. So, I'm going to just ask people to introduce themselves, starting with a couple of our organizers.

**Dave:** Hey, I'm Dave Cliff from PagerDuty. I've been organizing, I guess this is our 3rd time doing DevOps Days Toronto, so a couple of different venues, very diverse audience each time, certainly growing towards more of an enterprise focus, which has been really neat to see.

**Steve:** Steve Pereira, I'm with StatFlow, and yeah, it's been a great year, I think. This is the second year at the same venue for us, and we're just consistently trying to improve year over year with limited success.

**Bridget:** [00:02:21] I think it's, I mean, granted, I wasn't at the first year, though I heard good things about it, but I think that this was a pretty successful DevOps Days. I've been to a few of them, and I like this one. And another thing, of course, you had a great venue. We can talk more about that, but a lot of what makes DevOps Days successful and even possible is the sponsors. So, we have a representative from one of our sponsors here we'd love to hear from.

**Sarah:** Hi, I'm Sarah Kowalik, and I work at PagerDuty on the operations team.

**Bridget:** And Sarah, can you tell us about what brought you to this particular DevOps Days?

**Sarah:** Well, DevOps Days is always interesting. One always learns new things and learns what people, teaches you what people in your industry and perhaps a little outside of your industry are actually doing. I've been to a couple of DevOps Days in Australia before, and it was really interesting to see the difference here. Toronto has a lot more of a focus on the financial tech industries and the banks. So it's really interesting to see what their journeys are and what they differ to the more normal things we find in Australia.

**Bridget:** [00:03:26] I like how you're describing Australia as normal. I feel like if you have Australia set as your bar of like, this is what the world is like, then everywhere else must feel a little bit different.

**Sarah:** Yeah, there's nowhere near as many spiders or snakes and everything's upside down and the roads are the wrong way around, as are the cars.

**Bridget:** Nice. All right, and we also have a representative from the speakers here. Can you introduce yourself?

**Sean:** Hi, I'm Sean Walberg. I'm with the National Football League. I'm out of Virginia and was really happy to come here to Toronto and speak and attend.

**Bridget:** All right, we'll talk more about your talk in a minute here, but I'm also going to pick on Joe, who likes to be silent during all these podcasts. But Joe was here as a DevOpsDays Minneapolis organizer doing his typical scouting out all of the things that they're doing that he wants to copy and things that he wants to do differently. Tell us a little bit about your experience here at DevOpsDays Toronto, Joe?

**Joe:** Yeah, I do kind of, I come to these events and I pretty much steal all the good ideas and implement them in Minneapolis. And I do have plenty to work with here. This, I mean, we'll get into it a little bit later, but I really enjoyed this, the main stage venue I thought was really nice. One of the better ones I've seen from a DevOps Days.

**Bridget:** [00:04:39] All right, awesome. So we've talked about DevOps Days before on this podcast, and I think that When a lot of people hear about, hear us talking about DevOps Days, they sometimes get coupon codes from the podcast. If you go to any of the conferences on devopsdays.org and use the code ADO2016, it will usually get you 20% off. So, take a look at that for our loyal listeners, or our not so loyal listeners who are just checking the podcast out now. That's okay. But for the people who have been to a number of these, and I know that some of you have, At this particular one, like from the organizer point of view, what were you specifically trying to curate?

**Dave:** Yeah, one of the things that we definitely take very seriously is first off the code of conduct, and actually had an incident that we had to deal with pretty promptly in this particular example, and I thought Steve and the team did a great job there. So I think that's one piece, is kind of, I guess, curating the attendees, if you will, but certainly from a, from a speaker's perspective, we are always on the lookout for ensuring diversity. Steven, you want to comment on what the speaker selection process looked like?

**Steve:** [00:05:56] I think this year we did an outstanding job in terms of topic diversity. I would say we did a poor job in representation of groups and demographics, which is always a struggle. But it's something that there's really no excuse for. And it's something, had we started earlier and spent more time sort of going out into the community, you can always do a better job. So that for sure is top of my list for next year. And I would say it's probably the the biggest sore spot for this year. But in terms of what we actually had to select from in terms of submissions and what we ultimately chose, we're so pleased with the program. And we're so pleased with the reaction from attendees. Like, everyone is happy with the subject matter and the range of culture and technical talks and how everything is tied together. And I think there's a lot that was applicable to enterprise, but not enterprise-specific. So we tried to sort of cater to the audience, but not in an echo chamber sort of way.

**Bridget:** [00:07:22] Yeah, absolutely. And on the subject of talks, so I feel like DevOpsDays always tries to strike that balance between having talks about the wider culture and talks with real, you know, implementable tools or takeaways that somebody can go and actually try something versus now I have to convince my organization to act in this way. So I'd love to talk a little bit about Sean's talk, just because, well, I think Sean can tell us a little bit about the topic of his talk, both like how he decided that that was the right sort of idea to submit, and then kind of give us the, for the people who were following along on Twitter and wish that they could watch the video already, tell us a little bit about your talk, Sean.

**Sean:** Yeah, so I submitted a talk about our chatbot Waterboy. I'd actually submitted 2 talks, and I didn't think that this one would get accepted, but I was really— when it did get accepted, I had to think for a bit on how I was going to present it, and I'm glad it did.

**Bridget:** So why did that one get accepted? Can you give us some insight into why you picked this talk?

**Steve:** [00:08:27] Well, I'm personally a very big fan of ChatOps in general, and I think A lot of DevOps fans see it as sort of an easy path into adopting a lot of patterns and practices that are really DevOps positive. So in terms of sharing and collaboration, having everything sort of happen out in the open in a chat environment, recorded for audit purposes and for reference purposes, And just as a single interface to so many backend operations in a company, ChatOps for me is one of the easiest ways to get people following those patterns.

**Bridget:** That makes a ton of sense. And I'm actually going to put Sarah on the spot here and ask, can you talk to us at all about what role chat, if any, plays in the operations team at PagerDuty?

**Sarah:** [00:09:32] Sure. Actually, I've been building out very recently a number of things that we now do via ChatOps. Previously, we did a lot of deploy stuff using ChatOps. Now we've actually moved towards doing provisioning and decommissioning with ChatOps. And we also have Chef converges being done by ChatOps as well. So we no longer— our operations team no longer provides keyboard as a service for converging Chef over the environments that our teams want to change. One of the other things that we've been doing is the operations team gets asked for a lot of information about various systems. So one of the things that has been done with ChatOps is like our enhanced plugin, which will actually take an IP or a hostname and actually give a whole bunch of contextual information back about that. That's been really helpful to us, and we keep adding more things to it. And then we stop getting questions about it. So it's a really easy metric to realize things are working.

**Bridget:** [00:10:36] I like that. And you say enhance, and I think zoom and enhance.

**Sean:** Yeah.

**Steve:** CSI.

**Bridget:** But it sounds like it's a good way to surface things that you want to make visible to your coworkers.

**Sarah:** Yeah, exactly. And that particular plugin is Leader Enhance and is public on GitHub.

**Bridget:** Nice. All right. And I think Sean was talking about that too, like exactly how you are making things more visible to and accessible to your coworkers through chat. Do you want to go into a little more detail about that, Sean?

**Sean:** For sure. We're a very distributed organization, so we are finding a lot of conversations were happening in private, and moving these tools to the chat room really made it— these troubleshooting efforts more collaborative. And again, there's that history where we could see what happened. We have tools like being able to look at a URL and get the timing for it. Is it fast? Is it slow? Are the handshakes slow? Also being able to deconstruct some of our microservices and finding out, say, how the CDN's affecting them.

**Bridget:** Nice, and I gotta say, as a user of NFL.com and NFL-related sites and services, I appreciate when it's fast, especially, of course, with any kind of live sporting event. You care a lot about real time.

**Sean:** [00:11:50] Absolutely.

**Dave:** And I'm on there probably 20 times a day or something, just refreshing, waiting, new story, new story about the Seahawks, new story about the Seahawks. Just, I guess, me. But on the chat side specifically, you know, I'm coming from— I'm a product manager at PagerDuty, and so a little bit of a different perspective on the role of chat. And I just love how accessible it's made, you know, a lot of the information around specifically incidents. So it's actually the chat integration into the incident response lifecycle around a company I think is really interesting. And so the ability for say, the customer support team to come in and say, hey, we're hearing some customer reports of this, that, or the other thing, and to be able to just immediately via the chatbot, okay, page the incident commander and have that continue, that process kick off, I think is just incredibly powerful.

**Steve:** I think for myself and my team, what I find really valuable is just reducing the amount of questions that need to be directed at someone. Or disrupting someone. I always feel bad asking a question that I feel I should know or I might know if I had just written it down somewhere or if it was just available to me in a format that I'm not aware of. So maybe there's a doc, but I don't know. And so if 90% of things that I'm supposed to know are in chat, I can search for them there, and I can pull up some context. Where I don't have to hesitate and be like, before I bother this person, should I go and check 5 different things and see if I can find it on my own? Because I'm always very conscious of disrupting people's workflow. So I think it's super valuable for that.

**Sarah:** [00:13:42] And one point I would point out with doing ChatOps is if you are, then make sure you actually log that stuff to centralized logging as well. And then it's actually searchable there as well, which is really handy.

**Bridget:** Yeah, I like it. And I gotta, before we, we probably won't spend too much more time on chat, but I do wanna say one thing, which is these DevOps Days events actually get organized in a large part through chat as well. So there's a lot of tools that get used. Chat is one of them for sure. And I think, Joe, you may be the person who gets asked the most for the same things again and again that you just end up pointing people to. What you put in chat already.

**Joe:** Yeah, it's nice, especially we, DevOps uses Slack for a lot of their, for all of their chat stuff. And being able to put an audiovisual vendor form in Slack, so when it gets asked for 6 times, you can just say, it's there, just go search for it. I mean, that's very, all that integration is very handy. And the stuff I was working on earlier, while everybody else was at, enjoying open spaces, I was working on DevOps Days Minneapolis stuff, playing with some of our vendor on-screen scroll stuff. And I put a sample slideshow up in the Slack channel for people to give a thumbs up or thumbs down for.

**Bridget:** [00:15:07] Yeah, and we already got some feedback from people who are back in Minneapolis as to what they think of what you've been working on here. So distributed teams for the win.

**Steve:** Is it ethical to work on another DevOps Days while you're at a DevOps Days?

**Bridget:** It sounds kind of recursive, right? So, let's talk a little bit more about the experience of being at DevOpsDays. So, is anyone here, was it their first DevOpsDays? Ooh, Sean. All right, tell us a little bit about what you expected and what you actually experienced.

**Sean:** I really thought the open spaces were interesting. Everyone who told me about them before said, Don't think too much about it. They're going to seem weird, but go do it. And exactly what it was. We had a couple, had some interesting conversations about metrics, about chat, about incidents. It was really good. And then I really liked the diversity of the talks. The talks were by people just like us.

**Dave:** [00:16:08] No, I think that's a huge part of it and something that we continue to is really just, you don't have to be a professional speaker in order to get up and talk at a DevOps Days. I think that's incredibly powerful, and it's awesome to have first-time speakers coming and speaking at DevOps Days, or people just introducing topics and being willing to get up there and talk about the things that are relevant to them. I think that's a huge part of the community that I've got out of it, for sure.

**Bridget:** I think one of the things that was great about your talk selection is you didn't just go for the ocean. Shiny, you also seem to encourage, or at least you got the result of people talking about the stuff that didn't work as well. Like Sean talked about, and then we tried this, that wasn't as successful. Or you had other speakers talking about their attempts to introduce DevOps tools, practices, whatever, culture inside organizations, and where it went wrong and what they learned. Can you talk a little bit, Steve, about how you decided to bring that focus in? Was that a complete completely by chance or it looked a little bit curated?

**Steve:** [00:17:14] Oh, it was definitely curated. I'm a big fan of, you know, failure stories. I think, you know, if you're coming to the event and you don't really know what to expect, as many of our attendees are, you might be thinking that I'm going to go and watch talks by people that I have no hope of emulating or are way beyond my organization's capabilities. And so mixing the talks between success stories from companies like Shopify doing great things with companies and teams that have failed in their attempts and really walking the path is, I think, hugely inspirational to people who might be stuck in the mud or not sure where to start or are afraid to start. Because of the possibility of failure.

**Dave:** I mean, it breaks down boundaries, right? I mean, if people think you're perfect and you're getting up there and giving a talk, it's really hard to relate to that. And guess what? We all fail. We suck in places. And that's a really OK thing. That's a wonderful thing, in fact. And those are often the best learning opportunities.

**Bridget:** [00:18:31] Yeah, absolutely. I mean, many a conference, you'll hear about the really aspirational infrastructure. And you're like, well, that's fantastic. We can't have anything like that. And so hearing about maybe more process, or I'm in Canada, should I say process? Process along the way, I think is pretty valuable. So Sarah, if you wanna say you were considering giving a talk at DevOps Days Toronto next year, give us kind of a rundown of you being here and looking at these talks. What kind of thing does it inspire you to wanna talk about?

**Sarah:** I usually prefer to talk on something like ChatOps, but that just got covered.

**Bridget:** So a lot of times DevOps Days is full of new people every year. So that's a fine thing to talk about. I think ChatOps every year.

**Steve:** I'm super happy to have ChatOps every year. I think it's huge.

**Dave:** And it's important to note that we're not going to invite Sean back specifically.

**Steve:** Sean's done. He had his one chance.

**Bridget:** [00:19:32] That's actually kind of great because when you see somebody give a talk about something and get good response from the crowd, get people excited, then you know, hey, this is a topic that has some legs in this particular realm. Because I would say not every DevOps Days is exactly the same. I mean, we were just at one in London and you had some observations about what you thought about the general direction of it as opposed to some of the other cities you've been in, Joe. What do you think?

**Joe:** Well, London especially because of the, I guess because of who it was being organized by and and the speakers they were bringing in, it was very financially— it was very— what's the— fintech. Yeah. It was very fintech-focused. Barclays was a sponsor and played a big part in that. And a lot of the other London-area banks were very key. So it was kind of targeted specifically kind of the problems associated with with coming into older organizations that were— so it was a lot of changing in how do you do this sort of stuff, but it was very targeted at one specific industry, which I haven't seen at other DevOps Days, tend to be more broad.

**Steve:** [00:20:51] There's something kind of interesting about Toronto specifically is that we have a large attendee population from fintech and just legacy banks in general, but very little participation from the financial community at all. Like, they don't come to us as sponsors.

**Bridget:** So talk to the London team, figure out how.

**Steve:** Yeah, if only the London team find out. If only Barclays was a big presence in Toronto, that would be fantastic. I remember actually seeing Barclays present at DevOps Enterprise in 2014, and it was one of the best presentations. Like, they're 300 years old and a massive legacy. Exactly. That's, that's massive. It wasn't like going from the abacus to a fully distributed cloud architecture. But, you know, I'm sure they have their share of legacy issues. But yeah, Toronto is interesting for that. We would definitely like to see more participation by the banks because I think there's definitely a lot of enthusiasm from their staff. We just have to sort of tap that enthusiasm at the organization level, I think.

**Dave:** [00:22:10] Even the talk around being a change agent that was given around on the Ignite, I think, is super valuable for those people who are on the ground, and needing to really start this kind of transformation in their company. But yeah, seeing some kind of top-down investment would be wonderful too.

**Bridget:** Well, and that kind of brings us to the— I think it's always a struggle. As a conference organizer myself, I always struggle with the— we know we have content, industries, populations we want represented, Well, crap, they didn't submit anything to the CFP. Do we try to go chase them now? And I think what we've ended up doing in order to combat that is try to chase them ahead of time, like even before we open the CFP, so that those people that we, you know, in whatever groups they are that we want to make sure are represented, we're talking to them ahead of time and saying, hey, our CFP is open now. Here's the link. Please put your talk in. We want you speaking. And here's the funniest thing is with DevOps Days Minneapolis this year, I definitely did that. I mean, I hand-fed that CFP link to a few people. The talks that they put in were upvoted by the rest of the team without any names or companies on them. So, I think that— and these are people who might not have considered submitting something. And so, I think that encouraging people and making them say— saying to them, hey, giant Bank of Canada, you know, we'll fill in the blank with the name, but hey, giant bank, we really would like to see a proposal from you. Talk to us about your journey. If you do that, I mean, I'm not saying you can Field of Dreams this shit, but I'm saying if you do that, you might be able to get more of them participating who wouldn't have paid attention to the CFPs that a lot of us in the vendor space, like, we jump on it as soon as it's open because we know. And getting those people who don't know is the key, right?

**Steve:** [00:24:07] Absolutely. Yeah, I think that's a great point. And, you know, it's something we are reminded of as organizers every year is that we have to start immediately. As soon as 2016 is done, 2017 has to begin, if not beforehand. I mean, we're sort of sowing the seeds the whole time, but you can never start too early. And it's really a continuous thing, especially with running the meetup, just constantly reminding people that this is coming up and we always need content.

**Bridget:** At the meetup, just put up the Ned Stark meme, DevOps Days is coming.

**Dave:** Yes, absolutely.

**Bridget:** But hey, we've started right here because it sounds like you have a ChatOps topic from Sarah. So you've already seeded next year.

**Steve:** Thanks, Sarah.

**Bridget:** Thanks. I think the technical term for this is voluntold. You've been voluntold. You're going to give a great ChatOps talk. You're going to have to live up to Sean. I normally do the voluntelling, so this isn't going to work.

**Steve:** So very enterprise.

**Dave:** [00:25:09] One thing I will say, having worked for a very large enterprise in the past, One of the things that I think goes undervalued is just the fact, for us coming in from the outside, is just that there are different cultural pockets within each of these large companies, right? And so reaching out to one group, they may be doing tech in a particular way, and another department within the organisation might be completely different. And so actually getting some of those different perspectives can be interesting. Multimodal, if you will, or something. I don't know. Yeah, I know. I just got an eye roll from Bridget actually on that one.

**Bridget:** I think that on-ramp is really good. Yeah, so like I said from the stage yesterday, bimodal IT is bullshit because telling people that, sorry, your coworkers get to be in awesome mode, but you have to be in sad mode. Good luck with the hating them or not. Like, that's not a good way to build the culture inside your organization. Absolutely not, you're absolutely right. That's not to say that you're going to absolutely change absolutely everything in your organization at the same time. That's not implementable. No one's saying to do that, but segmenting people into the, you get to have fun and everything for you is going to be terrible, and telling them that that's their labels is like, oh, don't do that. That's so cruel.

**Dave:** [00:26:30] Embrace, I mean, within an enterprise, the only thing that I've seen that works is really just that land and expand, change agent in one area, and then you expand out, and then that just starts the avalanche.

**Bridget:** And I'm seeing smiles from Sean, and he certainly works at a large organization. Do you have any comment there, Sean?

**Sean:** Yeah, I wish people would stop treating the old stuff as boring. It's the stuff bringing in the money. But the companies always treat it as something that should be discarded, and we should be working on the new stuff. But where's all your users, all your traffic? If you want to do experimentation, it's all on your old stuff. So either move it over quickly or keep it up to date.

**Bridget:** Yeah, I couldn't agree with that more, because I mean, like I said yesterday, if the old stuff didn't matter, you would just turn it off. Like clearly it matters. All right, so from the DevOps Days, you know, this one's almost in the books sort of perspective, I would love to hear from Sarah, just because you've been to DevOps Days I have never been to. Like, how did this one compare, contrast with like, say, some of these Australian ones?

**Sarah:** [00:27:37] Yeah, so we did have the open spaces. This is the first time I've actually seen it be done by Trello board and by voting by show of hands. It actually seemed really cool. The ways I've seen it done before are just, people come up to pitch for a minute up to the microphone and I think it's actually 20 seconds. And they do their pitch and hand in their card. And then people during lunch go and put tally marks on the card. And then, you know, people go and view after lunch what went where based on popularity and turn up that way. And there's always a very large queue in front of the board because it— until someone takes a photograph and puts it on Twitter, which is always a good move. Beyond that, it's pretty much organized in roughly the same way and seems to work fairly well in both ways.

**Bridget:** I think a lot of people are always trying to iterate on how that works. I gotta say, I have a soft spot in my heart for the part where people come up and pitch, just because that way if there's somebody where you, if Sean stands up and says, I wanna talk more about ChatOps, people might be a lot more intrigued than just the word ChatOps on a Trello board. So there's a little bit of a give and take there, It definitely sped some parts up.

**Sarah:** [00:28:59] Yeah, particularly if you pitch it with, so how do you solve this problem? We know that this is an issue. So who's interested in talking about this? And then suddenly you've got bang, much more of a response.

**Bridget:** Yeah, but I like the part where everything was visible and everyone could see it at the same time. That definitely cut down on what Sarah's describing of the like mob around the board.

**Dave:** One of the things we tried this year in kind of the spirit of, I guess, DevOps Days Seattle and JJ Asghar's Ignite talk specifically on being an introvert at a conference like this. We did try kind of bringing the mic to the people so that they could kind of pitch sitting down, you know, a little bit more comfortable, trying to cater to that. Be curious for just kind of overall reaction. I think that'll be one of the things that we look at for feedback on the kind of post-survey from people.

**Bridget:** Okay, so I'm gonna put Sean on the spot again and say, so you've been to other tech events. You spoke in DC, you gave an earlier version of this talk, for example. Can you talk a little bit about what you saw as similar and different between DevOpsDays and other tech events in general?

**Sean:** [00:30:08] Where I've given this talk before was largely a lot of federal workers. So the idea of a chatbot doing work for you seemed very foreign. The jokes totally didn't fly. So it was a fairly awkward presentation. What I really liked about this one was a lot of the people talking about the problems they had in their jobs. They were far more open than what I've seen at other places.

**Bridget:** I think that's actually a hallmark of DevOps Days. And DevOps Days DC is coming up quickly. By the time this is published, it may even already have happened, beginning of June. And I think that The DevOps Days DC is held at the US Patent and Trade Office, and that's an environment that you would imagine would be full of people who would not necessarily share and talk in open space and what have you. And it does seem like that format of broadcast in the morning and then congregating in groups in the afternoon does get people opening up and sharing more. So that's something about the DevOps Days format that seems to work. So what about, like, now that you've decompressed a little bit from running the event this time, I'd just love to hear as we wrap up, what is everybody looking forward to coming up now that the event horizon of DevOps Days Toronto is almost past?

**Steve:** [00:31:26] Well, I think getting a jump on 2017 is always a big priority coming out of an event. But for me, I'm looking forward to sort of going back into speaker mode. Like, I'd like to start putting together a talk and start submitting. I, I sort of ignore that coming up to the event for the most part. I was in London a little while ago and that, that kind of got in the way, but in a good way. But, you know, I like to do a couple of conferences a year, so I'm looking forward to that for sure.

**Dave:** Yeah, I thought one thing that— one thing we were trying to do certainly to As the feedback came from attendees, we were definitely trying to throw that in Slack so that the organizers committee for DevOps Days Toronto could continue to keep things top of mind effectively. Hey, we got feedback on this. Hey, if we need to switch venues because we need to fit more people in next year, like, hey, here's some ideas that attendees came up with. So a lot of that I think is great. Like Steve, definitely, I love getting out there and being able to do some more talks. So, looking forward to having that freed up a little bit, as long as my wife's okay with that.

**Bridget:** [00:32:45] Pro tip, I just bring Joe along with me. It's like, we have a decent cat-sitting service, so.

**Dave:** 3 kids running around too.

**Bridget:** You know, a lot of people do bring their kids to DevOps Days. Every once in a while, their kids even give Ignites.

**Steve:** So, we did try to get Daniel Willis out.

**Dave:** He chose, what was it, a drum set instead of coming to DevOps Days Toronto, as per John Willis.

**Steve:** Nice choice, Daniel.

**Dave:** Keep it up.

**Bridget:** All right, let's hear what Sean's looking forward to.

**Sean:** Yeah, my talk is done. I've got to prepare another one in July for ChefConf. So, I'm looking forward to that. But based on this experience here, I'm really looking forward to trying to find another DevOps Days Whether or not I talk, I don't know, but I really like the format and got a lot out of it. So I'm looking forward to coming back.

**Bridget:** How about you, Sarah?

**Sarah:** Well, I really like monitoring, which means I guess I work in the right place. So I'm really looking forward to Monitorama.

**Bridget:** Me too.

**Sean:** Yeah.

**Bridget:** One conference this year that I am not speaking at and just showing up at because I love it.

**Sarah:** [00:33:46] You're probably going to get asked to speak anyway then. You know that, right?

**Bridget:** Jason knows that this is a Strictly I get to absorb. It's going to be fantastic.

**Sarah:** But yeah, I always find that the people are really good. The content's really good. And just the general atmosphere and environment is really good and really enjoyable. And everyone actually gets to know each other, which is kind of cool.

**Bridget:** I think that's something that Monitorama and DevOps Days have in common, the whole single-track conference thing. And Joe, since you've been working in meetings and event technology forever, if you want to give us a little bit of perspective on single-track versus Multi-track pros, cons?

**Joe:** Well, I guess from the vendor perspective, for the vendors sitting out in the hall, just talking to the folks at the Pivotal booth, there are giant lulls in the traffic to the vendor booths on a single track because everybody's in one room. There isn't a lot of milling about in the vendor area, where with a multi-track, you have people just kind of wandering around if they don't like the session that's currently going on, or they're moving between sessions. There'd be a lot more traffic in the vendor booths.

**Bridget:** [00:34:53] I mean, not to say that there isn't traffic, it's just that there are periods of high traffic and then periods of low traffic.

**Steve:** I think you get more, you definitely get more FOMO traffic in a multitrack. Like I've been there myself where I'm like halfway through a session, I'm like, is this the best session right now? And I'll just go and bolt out to something else.

**Sarah:** But at least it's all being recorded and that was publicized fairly early on that it is being recorded.

**Steve:** Yeah.

**Sarah:** You know, it's like, oh, I missed half a session. Oh well, I'll catch the recording later. Let's continue with this conversation or something instead.

**Steve:** Which I never do. I never go back and watch the recordings.

**Bridget:** Probably not gonna have time for checkouts. We usually do like recommendations on this and I'm not gonna put everyone on the spot and make them come up with one. Though if you want to, I'll say my recommendation, YouTube-DL. I watch a lot of conference talks on planes. And by watch, I mean listen to while answering email.

**Sarah:** Planes and trains and yep. Yep, download them all and then watch them during transit. It's wonderful stuff.

**Bridget:** [00:35:54] So Joe, you didn't tell us what you're looking forward to.

**Joe:** Well, when we get back to Minneapolis, it's gonna be crunch time on our DevOps Days Minneapolis. We have, you know, this is kind of when everything starts to come together for us. We have t-shirts to order and finalize, you know, we have to finalize what the AV is gonna be and what the room's gonna look like and picking out menus. We just have all the stuff that kind of comes in the last 2 months before a conference. So that's what— we're not necessarily looking forward to it, but that's what we have to look forward to when we get back home.

**Bridget:** That's gonna be a lot of fun. And I suppose now your shopping list has just— your wish list has gotten a lot longer after seeing everything that Dave and Steve and company have done.

**Joe:** Well, the room looked really good. The thing that I plan on stealing, and we've done this in kind of an informal thing, we have kind of an informal informal walkthrough kind of the night before for speakers if they want to come by, walk the stage, maybe plug their laptop in and make sure everything works. I think going with the kind of structured tech check-in at the beginning of the day for all the speakers, I think that's something I'm going to have to steal because that's a good way to kind of head off technical issues. We usually like it, we usually like it as the AV guy in the back of the room, we usually really like it. When the presenters kind of come up early on before things get crazy to kind of, hey, I want to check my laptop out. We usually appreciate that rather than the, I'm speaking in 15 seconds and I haven't tested this out yet. So having a thing, we're going to have to put this into the flow for the actual event to have all the speakers for the day come half hour before the event after you get breakfast. We'll check your laptop out and make sure it all works.

**Steve:** [00:37:39] Just make sure you take away their laptop afterwards so that they don't go and change all their settings, because that is also a reality.

**Bridget:** So, this sounds like we all have pretty full plates. We've all got a lot of stuff going on. So, I think that, I guess I just want to leave it with DevOps Days Toronto. Pretty good scene. It looks like your 3rd year next year is going to be even bigger. I apparently am a computer scientist and allowed to be off by one, but your fourth year next year—I think I was thrown off by you talking about being the second year in this venue. So you were somewhere else the first year. Yeah, your fourth year next year is going to be exciting as heck. So I've I've used up my one speaker token, but maybe I can sneak up here as an organizer or sponsor in the future.

**Steve:** Anytime you want to sneak up as anything. Please do.

**Sean:** You're all welcome.

**Bridget:** Thank you all so much for being on Arrested DevOps. If you have an upcoming conference you would like to see promoted on ADO, or maybe even have us record at your conference, you can fill out the handy form at arresteddevops.com/conf. Upcoming conferences include, of course, lots and lots of DevOps Days. When registering, if you use the code ADO2016, you may get 20% off. Especially DevOps Days Silicon Valley coming up June 24th and 25th, and DevOps Days Minneapolis July 20th and 21st. If you'd like to speak at a DevOps Days, open CFPs include Chicago and Boston are open until June 1st, Dallas and Raleigh open till June 19th, DevOps Days Philly is open till June 30th. July 15th is when DevOps Days New York is closing their CFP. Singapore, August 15th. Detroit, August 31st. And new cities have been added, so take a look at devopsdays.org. There's Baltimore coming up and Porto Alegre in Brazil, which is actually going to be a DevOps Days held entirely in Portuguese. So take a look. And we also have t-shirts now and mugs available at store.arresteddevops.com. Buy one today, or not. We're not the bossy. We also have a newsletter, arresteddevops.com/bananastand. Stratton wants you to know it's the best way to know about upcoming podcast episodes and cool news with DevOps. And thanks to our sponsors. Be sure to visit them at arresteddevops.com/10thmagnitude and arresteddevops.com/datadog. We, and yes, there are we, even though timing has been such that Stratton and Trevor have not been available for the episodes lately, they'll be on soon, hopefully. But we would appreciate it if you'd visit arresteddevops.com and leave us a review in the iTunes Store. Love to know what you thought of this episode, which will be at arresteddevops.com/devopsdays-toronto-2016. Be sure to check us out @ArrestedDevOps on Twitter. Send us email at shows@arresteddevops.com. We're always happy to get your ideas, input, feedback. Please let us know any ideas you have for future episodes. I'm Bridget, @bridgetkromhout. We're Arrested DevOps, and remember, There's always DevOps in the banana stand.
