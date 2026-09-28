**Matty:** [00:00:07] Welcome to Arrested DevOps, episode 21, Conference Love. I am your co-host, Matt Stratton, on Twitter @MattStratton.

**Trevor:** And I'm your co-host, Trevor Hess, @TrevorGHess on Twitter, which I've actually started using.

**Matty:** Great. Arrested DevOps is brought to you by 10th Magnitude, a cloud services company that believes DevOps makes their clients more awesome.

**Trevor:** You can check out their 360-degree cloud services at 10th Everybody, the Chef Community Summit is coming up October 2nd and 3rd in Seattle or October 15th and 16th in London. If you use the discount code ArrestedDevOps, you can get 10% off your registration at arresteddevops.com/chefcommunity.

**Matty:** I want to remind everybody too that registration is still available for the first ever DevOps Days Chicago. Arrested DevOps listeners can get 10% off their registration with the code ADO10. Visit arresteddevops.com/devopsdayschicago for all the details.

**Trevor:** We all know that being on call sucks, but what if there was a tool out there that allowed you to route incidents to the right team, @mention specific people to ask for help, and hop in on chat to chat with your team from an easy-to-decipher incident timeline that gives you full context of what's happening? That tool is VictorOps, and they're different. From setting up global on-call rotations to creating a postmortem report, VictorOps is there with you through every step of the incident lifecycle. Our real-time collaboration platform allows your team to solve problems faster. Sign up for our 14-day free trial to see how we're making on-call suck less. Visit arresteddevops.com/victorops to sign up.

**Matty:** [00:01:44] This podcast is also brought to you by Datadog, a monitoring service for dev and ops teams who work collaboratively to write and run applications on highly scalable infrastructures. Datadog brings together system metrics, events, and alerts from over 80 common infrastructure tools to provide teams with graphing, correlation, and data analytics. Datadog is available for a free 14-day trial at arresteddevops.com/datadog21.

**Trevor:** Tonight we're going to be talking about tech conferences and why they can be a great way to level up your knowledge. Why are conferences awesome? Well, joining us tonight we have Jason Dixon, Bridget Krumhout, and Stewie Pete Cheslock. And I think I just butchered everybody's name because I tripped over my own tongue. So Jason, can you tell us a little bit about yourself?

**Jason:** Sure. My Twitter ID is @obfuscurity. I'm currently the Director of Product Solutions/Integrations for Librato. I've worked for companies like Heroku and GitHub and Dyn in the past. I have a tendency towards open source monitoring tools. To that effect, I actually started a conference around that called Monitorama. So, that's basically what I've been up to the last 2 or 3 years.

**Trevor:** [00:02:52] Excellent.

**Matty:** And joining us again, repeat guest, Bridget Kromhout. Bridget, welcome back.

**Bridget:** Thanks. Glad to be here again. My name is Bridget Kromhout, @BridgetKromhout on Twitter. I'm an operations engineer for DramaFever.com for all of your international video content. And let's see, I also help organize DevOps Days Minneapolis and the Minneapolis AWS Meetup. So you can find me in all of those corners of the interwebs.

**Matty:** Awesome.

**Trevor:** And also another repeat guest, Pete Cheslock. Welcome back, sliding in under the gun at the last minute.

**Pete:** In for the win, I guess. I am Pete Cheslock, or as I'm currently known today as Pete Burrito, because I'm eating a burrito right now. This is number 2 because that's how I roll. I am Pete Cheslock on Twitter. Currently work for a company called ThreatStack, and we do continuous security monitoring for elastic infrastructure. I think is our most recent tagline. So, and I love conferences, so when I heard you guys were talking about conferences, I just, you know, was excited to be invited to talk about it because I love them.

**Jason:** [00:04:00] I think what everybody really wants to know is, is that a Chipotle burrito?

**Trevor:** Dude, that's a good question.

**Pete:** No, no, no, no, no, no. It's from a taqueria that has people who know how to make burritos, not Chipotle.

**Jason:** Dude, it's Boston, come on.

**Pete:** That's true. Okay, let's be honest.

**Jason:** It is.

**Pete:** It's a Boston burrito.

**Matty:** It's, you know, burrito at scale. So getting off to a rollicking good start. So going around the panel, what is the first tech conference that you attended? Anybody can jump in whenever they want.

**Bridget:** Go ahead. I'll go first. The first one I remember going to was actually LISA '95, which I was an undergraduate. It's what all of the cool kids on alt.system and recovery on Usenet seemed to be into. So I went to it and it was actually pretty fun. I haven't been to another one, but that was a good long while ago. I think I may have just dated myself quite severely.

**Matty:** I have a feeling we're all going to do that. So we might as well just, you know, well, some in different directions. 4 out of 5 of us will. Well, it's not a recipe for disaster if I don't give Trevor a hard time first.

**Jason:** [00:05:06] Bridget, at least you're not so old that you forget what is the first tech conference.

**Bridget:** You note that I said, I think.

**Matty:** The funny thing is I was thinking about it. I was trying to think of what the first one was. And the first one I can think of, and I wouldn't even call it a conference, but I remember going to COMDEX back in like 1996, I think it was. But COMDEX was more like a trade show. But I remember thinking it was super, super cool. Just like, that was also when COMDEX was big. But I think actually the funny thing is I went a long time without really going to conferences. And the first one I went to was TechEd 2008, believe it or not. For as much as I like conferences now, it took me a long time before I actually started attending them.

**Trevor:** I mean, if we're going to count trade shows, I was going to computer shows with my dad since I was like 5.

**Pete:** Well, I guess I get to be the more recent one then. My first tech conference was actually Surge, I want to say 2012, which actually, Jason, might be the Surge that we had met at the first time.

**Jason:** Was that the first one?

**Pete:** It wasn't the first Surge, no, but yeah, I think that was a few years before. I can't remember that one, but yeah, so I'm definitely much more recent into that. Worked for a lot of companies that, you know, didn't really have money or budget or see the value of sending people to conferences. And only until more recently, you know, did I actually get, you know, lucky enough, you know, to be able to go to them and meet people and, you know, expand my network and stuff like that.

**Jason:** [00:06:28] You're like a swaddling conference babe.

**Matty:** I feel much better because I was feeling like all noobish by the fact that my first conference was like 6 years ago. So, and if Chesslock has only been doing this for a couple years, I feel better.

**Pete:** So, I mean, I would say, yeah.

**Bridget:** Jason was going to tell us something. Yeah, Jason, I want to hear what you're going to tell us.

**Jason:** I want to say that one of my first ones was probably LinuxWorld in New York, but I honestly don't remember. I mean, that would have been early 2000s, like 2003, something like that. The first one I really truly remember was probably OSCON 2005, and that's— I think I was actually speaking at that one and doing some booth duties. So I guess that was before they moved it to California temporarily, so that was still in Portland. But yeah, it's been a while.

**Trevor:** I would say probably my first conference was probably the Visual Studio 2010 launch party that Microsoft threw in Chicago, which was actually really interesting because they actually went over features, unlike the 2013 launch party, which was a suckfest.

**Matty:** [00:07:28] I think I was to that too. So, so they're kind of coming from different types of pieces, but here's the thing. So when we kind of talk about the point of a conference, right, we said we all love them, right? So what do you think are some of the things that you get from a conference that you can't learn other ways? Because like Pete, you alluded to this and you said, you know, working for companies that didn't see the value in sending people to conferences. I mean, so what makes going to a tech conference special in terms of what you can gain from it?

**Pete:** Yeah. So, I mean, something that I've definitely gotten a lot of value out of is not just, I guess probably the number one thing is what we kind of call the hallway track. So for those who haven't been to a conference before, there's essentially what, I don't know, we'd call it like an unconference basically, but there's a separate track, you know, tracks to conferences in different areas, but But one track is called the hallway track, which is basically people out in the hallways between sessions chatting with each other and chatting about different talks and kind of the value they got out of the talks. And in a lot of conferences, the hallway track is actually the most interesting one because that's where you meet people, you kind of swap stories, share experiences of things that you're doing at your job. And honestly, there's a lot of value that I was able to get from that. And not only the people I had met, which is pretty much everyone that I'm talking to right now in this chat and many others, but also You know, when it comes to, you know, hiring, recruiting, bouncing ideas off of people, you know, it's just this kind of opens things up where now you have people that you can kind of, you know, chat with and talk to even long after the conference has ended.

**Bridget:** [00:08:58] So Pete actually has a really good Ignite that he's given. I think I saw it at DevOps Days New York 2013, where he talks about recruiters and, you know, this idea of building your network and how nobody wants to do this networking thing because it just sounds awful and like something somebody wants to sell you on LinkedIn. And it is so true. It's like just meeting people and talking to them is something that you're not going to be able to do in such a high-bandwidth way anywhere else. People in your industry, I mean.

**Pete:** Yeah, actually that's a really good point, which is people— I've talked to a lot of engineers who have immediately been like, you know, they hear the word networking and if it's not dealing with routes and subnets, then immediately they're kind of like, oh, who wants that time? Who wants to do that marketing stuff? Like, I don't do that. But the reality is, is that, you know, networking is massive. I mean, it allows you to meet people, get in to people. I mean, I feel really comfortable being able to reach out to a lot of people I've met even years ago and just say, hey, like, you know, I'm trying to do this thing, you know, have you ever done it? Do you know anyone who has? And honestly, a lot of times if they haven't done whatever I'm trying to do, they can introduce me to someone who has, and then that just kind of further expands the network.

**Jason:** [00:10:06] Yeah, I think it's interesting. Like, I think we're all kind of touching on the same thing, and we're not necessarily going there for the learning aspect because Yeah, we're not really going there to learn because we can do a lot of that online, you know, through the people we work with. Like, there's so much good content online through blogs and everything these days that we don't necessarily need to go there to learn from the talks per se. But I think what we get beyond just the general networking and the hallway tracks is that it gives us an opportunity in a lot of these cases to really meet face-to-face with the innovators, the developers behind open source projects, and you get those kind of serendipitous interactions and building these friendships that kind of just, you know, go on year after year after year. And again, it just kind of gives you that 2-way conversation that you don't necessarily get online. I mean, you can say that there's comments, but we all know how effective comments can be. So, that's the biggest thing I think I get out of it is just meeting those kind of subject matter experts in person and picking their brain.

**Bridget:** And the ones you meet won't always necessarily even be the ones that you are looking to meet or expect to meet or have carefully lined up and scheduled to meet. Like, for example, at Velocity Santa Clara in 2013, I went to one of the Dyn after-parties. I know a couple of you used to work for Dyn. It was very loud in there, and I stepped out into the hallway and ended up talking to this guy, Miles Ward from AWS, who I went to talk to because I saw AWS on his— I saw Amazon Web Services on his badge. I said, hey, we're having all of these issues with our Hadoop and our MongoDB. What are we doing wrong? Well, it turns out he actually wrote the white paper for MongoDB on AWS. Katherine would say it just says don't, but no, it's actually longer than that. It actually allowed me to go back home from the conference. And completely re-architect everything we were doing, move it all to SSDs, different instances, and remove all of the unnecessary sharding. And so right there, that sliced a huge amount of money off of our Amazon bill. I'm pretty sure that paid for the conference plane ticket that my company had picked up, no problem. So that turned out to be a very valuable investment for them.

**Pete:** [00:12:01] That's a really good one too. I mean, when I try to talk about conferences now, I definitely always use either marketing, the tech side of things where you can save money, or the third one is the recruiting aspect. I don't know if a lot of people understand how like tech recruiters work and why, you know, they're so often kind of spamming our inboxes because they can make a lot of money for relatively small amount of work, you know, oftentimes receiving 20 to 30% of your first-year salary to place you in a position. So for a startup or a small company, that's a lot of money based on, you know, how much engineers are kind of making nowadays.

**Jason:** That explains why everybody's after you, Cheslock.

**Pete:** So, you know, the story I always tell, which is if you're gonna spend, you know, $10,000, $20,000, I mean, whatever the number is that you're gonna spend on this recruiter, what if instead you can send your engineers or yourself out to conferences to meet people, to expand your network? I mean, as much as I have to apologize to Jason because, you know, I make job recommendations and sometimes they don't work out, but, you know, I, you know, I was able to, you know, kind of convince, probably begrudgingly later, you know, Jason to come work with me.

**Jason:** [00:13:06] Keep it awesome, Cheslock. Keep it awesome.

**Pete:** Keep it awesome. But yeah, so I mean, Jason's like a great example of someone who I met at a conference. You know, we kept in touch. When the kind of the time came where he was looking for a new opportunity, I said, hey, like, we got this thing, you know, are you interested? And basically, like, you kind of— I don't know, for lack of a better word— you kind of jump the line, like, by having that relationship with people in order to kind of, you know, pick them up before they find some other opportunities. So, you know, selfishly, as a recruiting aspect, I think that's another, you know, great way that you can get that return on investment, if you're gonna use the business speak with your managers for convincing why to send you to one.

**Trevor:** Absolutely. And I think tacking on to that quickly, I just want to ask, just, you know, meetups serve that purpose very well too. You get to build, you know, similar relationships that you do going to a conference like we're talking about. I mean, that's how Matt and I met. Matt and I met at an Azure meetup, which eventually the people who run the Azure meetup wound up convincing me that the place I was working kind of wasn't fun and I wanted to work with them because they're more fun.

**Matty:** [00:14:06] So we've kind of started to talk about how to maximize the value, you know, about the value that you get. So it would seem to me that if we want to look at how we maximize the value out of going to a conference, a lot of it seems to be these kind of intangibles, right? It's the, you know, the dirty word networking. It's the interacting with other people. It's learning in the hallway track like Pete talked about. So, but that being said, I know I've had experiences, you know, where I've gone to a conference where I don't know anybody at all. In fact, I think that's a pretty common thing. So what advice do you have for folks who are like, hey, I'm going to, you know, DevOps Days Chicago and I don't know anyone that's going, or I'm going to go to Velocity and I don't know anyone. It can be pretty intimidating, I feel like, because those of us that already have these network relationships, we get real excited when we see each other, and sometimes it can feel exclusionary. So what would you tell people?

**Jason:** I'm going to toss in mine because my answer is probably totally useless, but let's go ahead and get it out of the way. And that is, if you feel like— if you want to maximize your value out of a conference, Do what I do, and that's start your own conference. I literally started— no, I'm serious. I literally started a conference to get exactly what I wanted out of it, to get the speakers that I wanted, to get the content and the sort of interactions that I was looking for that I didn't see in a lot of the other conferences. Fortunately, I think that's— for whatever it's worth, I think that's where the market, if you want to call it a market, is kind of going towards. You see a lot more of these community-focused or local and regional conferences that are specific to a particular topic. So I think you're getting away from the massive 8/10-track conferences that are all about— again, I'm not going to get particular topics because that will kind of give it away, but you get where I'm going at. That's how I do it. That's how I maximize my conference ROI, is find the small, inexpensive conferences where you're going to find really intriguing, exciting speakers, maybe people you haven't heard of, people that are going to challenge your concepts, and that's how I do it.

**Matty:** [00:16:03] You know, it's crazy. It's what you said. I mean, that's like art, man, right? Because that's what art is, is when there's a thing that you want and it's not there, then quit bitching about it and make it happen, right? That's why there's Puppet. That's why there's Chef. That's why Kevin Smith made the movie Clerks, right? That's why you made Monitorama. So that's— I don't know, I just thought that— I dig that. Thank you for sharing that because I think that's pretty cool.

**Bridget:** And I love Monitorama. I gotta say, it's a fantastic conference. I've only been to one of them. I hope to go to more. Jason, you're gonna have one again pretty soon? Would you like to appeal to us?

**Jason:** I would if I could. I don't have dates yet. But yeah, there will be another Monochroma or 10 or 20.

**Bridget:** But yeah, just keep asking him that, hoping to get an answer.

**Jason:** Rest assured there will be more because I'm having too much fun, not, you know, I'm having too much fun doing them.

**Bridget:** So back to our gracious host's question about being new to the conference scene, as it were. So despite having mentioned that, yeah, I did actually go to some conferences. I think I also went to the O'Reilly Open Source Conference in like 2000 before it was called OSCON. I don't know, a long time ago. But then I stopped going to conferences for quite a while. And some of it had to do with where I was working and some of it had to do with just, you know, not focusing on that at that time. And it was actually Velocity Santa Clara last year that I went to knowing almost no one. I knew Sasha Bates, who works at Chef now and is also from Minneapolis. And other than knowing her, I knew no one. And I seriously just went in and sat at a different table at lunch every day and, you know, put myself out there and talked to people, looked for other people with blue and pink hair. I figured they were probably a good bet. As it turns out, most of them work for Etsy. So yeah, probably a good bet. And if you put yourself out there and are willing to go up to and talk to people, some of them might ignore you, but a lot of them will probably be pretty cool and be pretty excited to talk to you because that's why they're there too.

**Pete:** [00:17:47] Actually, Bridget, you brought up a great point, which is for kind of people who don't know anyone is the lunch aspect, right? Because you're gonna go into this big room and you're gonna grab some food and you're gonna find an open table and get some snack there. Sorry.

**Trevor:** So, you know, you sit down and just start chatting with people.

**Pete:** Everyone's there kind of to meet everyone else too. So it's not, you know, You're not alone is really the kind of key point there.

**Matty:** I think it's interesting. And I actually had this experience from a meetup perspective just tonight, and it may strike some of you as odd, but I am very introverted. I can be very— it can be kind of tough for me to get out. Actually, a big part of the reason that I do this podcast is because now you guys have to know who I am and then you have to be my friends. Kidding. But I went to the DevOps Columbus meetup tonight and I didn't know anybody. I was in there and it was kind of, yeah, the first 20 minutes I was there, it was kind of like, I don't really know what to do. And then what you do though, is you just introduce yourself, right? And that's easier said than done. Tom Duffield did an Ignite, I think at DevOps Days Silicon Valley. He's going to do it again at DevOps Days Chicago, hint hint. I'll put the link in the show notes, but it was like an introvert's guide to tech conferences. But even if you're not an introvert, sometimes it's just intimidating to show up. And I found one of the things that has helped me with things like that is, I mean, the Twitterverse, right? You know, because there's usually a hashtag for the conference. And I start to, before I go to a conference, like a week or two before, I start tweeting to that hashtag. I start following that, put a search for that hashtag in my tweetbot, and just start interacting with people on Twitter in advance. And then you already have people that you've met virtually beforehand.

**Bridget:** [00:19:19] So, if there's anybody who is listening to Arrested DevOps and who is not using Twitter, you should stop listening right now, pause it if you're not listening to it live, and go make a Twitter account and then come back. We'll wait. It's actually a pretty important way to make sure you can actually connect with the wonderful people you meet at conferences. Even a lot of conference badges will end up having people's Twitter handles on them.

**Trevor:** Make sure you get a good client because that can make the difference between hating Twitter and starting to enjoy Twitter more than you hated it.

**Matty:** Matt, from his experience, he has been dragged kicking and screaming into Twitter.

**Trevor:** I'm hating it less.

**Pete:** Sorry.

**Jason:** I think that's a really good point. Bridget makes. I mean, in fact, like with our conference badges, I made a point of putting like everybody's— not just their username, but actually putting their avatar on the badge because a lot of people don't know me by face, but they know my stupid avatar. So like, I mean, I found that's really helpful, especially at the larger conferences. So I mean, it's not going to solve the problem like if you're just intimidated because you don't know anybody. It's magnified more so if you're at a conference where it is a really tightly, you know, just really well-established community, and a lot of people know each other. I mean, like, I went to a front-end conference last year, and it was a miserable experience for me because even though it was a small event and there were, you know, there was Twitter and hashtags, there were so many people that knew everybody else in the community. And for me, I'm kind of like more of a traditional operations person. I really felt like an outsider. You know, it definitely influenced the way I handled my next event. So I guess some good did come out of it.

**Trevor:** [00:20:52] You know, I think one thing that when I get intimidated, one of the things that I run into is I always, I, you know, comes up against that imposter syndrome again where I, you know, I may be somewhere and I know that technically I know what I'm talking about, you know, when we're discussing things at an event. But, you know, there's that panging sound in the back of my head saying these guys are all way smarter than me and I have no idea what I'm talking about. And I should just go over by that snack table and eat something.

**Bridget:** But something to keep in mind, Trevor, I mean, if you're feeling that way, and I hope you're not, but if you are feeling that way or other listeners are feeling that way, is that pro tip, pretty much everyone loves to talk about themselves. You can get pretty far just by asking people polite questions and then listening to them. You might even find out interesting things, but at the very least, they'll leave the conversation feeling like they had a wonderful conversation.

**Trevor:** Absolutely. I completely agree. I mean, it's— no, it doesn't happen as much anymore, but there's certainly, there's certainly times when I'm like, you know, it all depends on the mood. Like when I was at Flowcon, there was a little bit of that, but I think it was actually because I felt like terrible the entire time I was there. And so there was like that, you know, the emotional checking of myself was winning because I was already dealing with the sick.

**Matty:** [00:22:04] That's no good. So how do you guys find out about new events to attend?

**Jason:** So that—

**Matty:** because I would think that like it's kind of key to like not always, you know, like we talk about echo chamber and stuff like that. And while there's events that are super awesome you want to keep going to because they keep getting better and better, but like diversifying your attendance in different kinds of events. How do you each personally kind of, you know, learn about events that you didn't know about before?

**Bridget:** I heard about Monitorama on Twitter and I basically got excited about it because a number of people whom I had met at Velocity and been following on Twitter were saying that they were going to go and it was going to be wonderful. And so that made me interested and then I went and I registered and then later I actually decided to submit to their CFP and I did end up speaking there which was really fun. But the whole reason I decided to go was because of seeing other people saying that they were going to go.

**Matty:** Yeah.

**Jason:** I mean, for me, it's typically been Twitter as well. I mean, it's just been such a great tool for kind of identifying other people in your circles. Ironically, tools that literally try to get you in their circles like Google+. Are just horrendous for this sort of thing. I think Lanyard, at least for a time, filled a niche. I don't know how popular that still is. I mean, it's clearly very large. It was acquired. But, for me, there's just too much— there's too much— the signal-to-noise ratio is way off. And, I think Twitter, because you have that kind of curated and perhaps, to an extent, an echo chamber, at least you're able to kind of find out what those other events are because, you know, you have shared interests.

**Matty:** [00:23:33] This episode of Arrested DevOps is brought to you by Twitter.

**Bridget:** You know what's kind of funny actually is I spoke last week at a conference called Beyond the Code. It was a new conference that Shopify was putting on. It was like a women in engineering speaker series in Ottawa of all places. And apparently the way this woman, Anna from Shopify, found me and a lot of the other speakers was just like Googling for blog posts and also on Twitter. And I think she found me through SysAdvent.

**Pete:** Yeah, so I was also going to say the same thing about using Twitter, but I've been a little bit more aware of it recently in that my concern is that it's like the constant echo chamber, which is— I love the DevOps Days events because I love the unconference format of them. You know, the talks obviously are good as well, but they're more regional-based. But my constant worry is kind of going to those kind of same events where I'm seeing and talking to the same people. The one good thing at some of the DevOps Days I've been to recently, at least, is that when recently DevOps Days Boston, which I helped at, The first day they asked who had been to a DevOpsDays before, and it was maybe 10% of the group. So it was like, oh, there's a whole completely different group of people that it was their first DevOpsDays. I'd be curious to see if that was a similar thing. And I know, Bridget, at your DevOpsDays, I don't know if you had a kind of a similar question, you know, to the group.

**Jason:** [00:24:46] Yeah.

**Bridget:** Yeah, I did ask the first day and I would say it looked like over 80% of the room, probably more, was saying it was their first DevOpsDays. We did a poll later and 75% of the people who even answered the poll said it was their first DevOpsDays. So.

**Pete:** Yeah, so I mean, those, those are always good to see that just so it's not kind of the same people over and over. But, but yeah, I mean, you know, obviously through Twitter, like, I see people talk about interesting conferences and talks, or a lot of times people kind of share and communicate talks from other conferences. And when you see the talks, you're like, wow, like, that's an interesting topic, like, that would be a fun one to go to. The one interesting one that was kind of totally different was the, the one I think Jason might have mentioned before, was the Mountain West Ruby Conference. And I had actually never been to like a programming language specific one, even though, like, I'm not really a Rubyist. I'm as much of a Rubyist as, like, writing bad Ruby, I guess.

**Bridget:** Enough Ruby to write Chef.

**Pete:** Yeah, like, I can write Chef, and I can, like, cargo cult some stuff that kind of works, I guess. But, you know, that was an interesting conference in that, you know, I think, like, Jason kind of mentioned that, like, you know, all these people, like, kind of knew each other, but it was the topics were totally different that I found it really fascinating. And that was nice to kind of get out of, like, my normal comfort zone.

**Jason:** [00:25:52] See, that was actually my example of one where I didn't know anybody. So, I wasn't mentioning it by name, but thanks for calling them out there, Pete.

**Pete:** I think it's a great conference.

**Jason:** It is a great conference. Like I said, I think I personally— because they have it broken up into different— not tracks, but different days. So, you have the JS one, and then you have Ruby, and then you have DevOps. I think DevOps may be in the middle.

**Bridget:** Yeah, it was in the middle, and I was there. You knew me.

**Jason:** Yeah.

**Matty:** This is true.

**Jason:** Like I said, it was just the JS, which I can't believe I'm saying this on recording, but I actually kind of like JS.

**Pete:** I don't generally swing in those circles.

**Jason:** Circle, so I don't know a lot of the subject matter experts.

**Pete:** One conference I'd gone to, I actually spoke at, which was one of the main reasons why I went, was a conference that is totally outside of my normal comfort zone, which was an Agile conference.

**Matty:** I was just going to steal my thunder. I had a whole thing.

**Pete:** I know, I've got to beat everybody.

**Jason:** We know you were right in your sweet spot. Come on.

**Pete:** I will say this, which was you know, again, I'm like trying to be kind of cognizant of like the communities that I kind of travel in just so that it's not always the same echo chamber. And the Agile conference was actually really brilliant. There was a lot of people in totally different worlds. I did a kind of a question like raise your hand at the beginning of my talk to get a feel for what size of businesses the people there worked for. And it started off like, all right, you know, you know, everyone raise your hand, like start off everyone's hands in the air. It's like, all right, put your hands down if you work for a company, you know, with up to 100 employees. And like no one put their hand down. And I was like, okay, 1,000. Pinnacle of this though. But yeah, so it basically got to the point where I was basically saying, you know, how many people like were at the company that you were at. And pretty much 90% of the people at my talk were at 10,000 and up companies, which I know there's a lot of those, but I have never worked for one.

**Jason:** [00:27:37] And how depressing is that?

**Pete:** I mean, it was a room full of Scrum Masters, so plus one. Yeah, but I will say this, which was it was, it was a really fantastic place to chat with a totally different group of people that literally are trying to solve the exact same problems we're trying to solve, but at a scale none of us here, I think, really can imagine. I mean, if you want to talk about doing DevOps, try to do it with 2,000-person engineering teams and multi-thousand-person operations teams. It's a totally different ballgame.

**Bridget:** Yeah, I think for people who are interested in something like that, there is the Enterprise Scale DevOps Conference that John Willis and Gene Kim and a number of other people are putting on in October. I'm sure we could put something in the show notes about that. But that one's interesting because Heather and Ross, who spoke from Target at DevOps Days Minneapolis, are going to be speaking there to, of course, a very different crowd of people like people from Disney and GE Capital and whatever, who are all trying to do the same stuff that we're trying to do, which is actually kind of cool.

**Matty:** [00:28:40] So, before we had our little technical hiccup, I was trying to move to another question. So I was gonna ask the question, what is the coolest piece of swag that you've ever gotten from a conference?

**Pete:** So I've gotten bags, which the first bag I got was like, hell yeah, like free Timbuk2 bag. And then it was like, which I think was AWS re:Invent, and I didn't have a good laptop bag, so I was super excited about that. And then I went to another conference not long after that, I got another Timbuk2 bag, which again, these are like the most epic first world problems ever. But then like my back doesn't— it's like I'm an old man apparently, and my back does not survive wearing these messenger bags. So I have all these bags.

**Trevor:** You have to use both of them, one on each side, so it balances out.

**Matty:** Yeah.

**Pete:** But I will say this, which is this is gonna be just because I like to make fun of Jason or call him out any chance I can, but the Monitorama hoodies, like, they weren't really swag, and I had to work really hard to get to the point where Jason would even give me one.

**Jason:** There was a whole lot of thought-leadering going on.

**Pete:** I had to do a talk, I had to like work the table, He put me to work. It was like unbelievable, but I finally got my hoodie and it was a good day.

**Jason:** [00:29:46] What about the monitoring socks, man?

**Bridget:** See, I had to give the monitoring socks to my partner Joe because they did not work with me. I don't know. They were not the exact sock that I would have been able to wear, but on the other hand, he loves them and wears them all the time when he's not wearing his Settlers of Catan socks. But I was going to also say the Monitorama hoodie. I was wearing it earlier today. It is super, super comfy.

**Matty:** Pete's repping his Monitorama hoodie there.

**Pete:** For those people listening, I'm now wearing— it's like getting a hug from Jason.

**Trevor:** I don't know, it kind of looks like you're wearing Palpatine's—

**Jason:** I'm rolling in the wrong circles because I don't get good swag. I don't get Timbuk2 bags and I have to make my own hoodies, so I don't know what I'm doing wrong. The only decent swag that I recall is probably— wow, I once got a bottle opener that I still use. It's still on my keychain. Actually, at Velocity last week, for the alumni, they had a nice little portable power strip.

**Pete:** [00:30:51] I don't know.

**Jason:** I'm a sucker for practical stuff. I don't want to go off on a big rant, but actually, this is kind of close to home for me. I'm not anti-swag. But I like to be, and I guess this falls back on my, you know, because I'm an organizer, like I would like for people to understand the ecological or, you know, the actual footprint of the swag that sponsors and organizers give out because like there's a huge landfill footprint. And so like, you know, all the badges that I do are biodegradable, like the bamboo stuff that goes into the actual lanyards and it's a biodegradable plastic, things like that. So I generally try to dissuade sponsors from bringing a lot of excess swag. I don't know. Again, I don't want to be a downer, but—

**Bridget:** I think that's a really good point, actually. I'm with you on the practical stuff. I really like some of the tote bags I've gotten at conferences. Sometimes at the end of a trip, it's really hard to shove that tote bag into my suitcase because I didn't have room when I came, which is why we did the speaker gifts for DevOps Days Minneapolis were actually just like those tiny little Hue card battery packs you can use to charge your cell phone. As it turns out, that is something that people pretty much need all the time, especially if they come on a day trip to Velocity and forget their Lightning cable, Jason.

**Jason:** [00:32:07] Yeah, I'm not a total downer. Like, I'm a sucker for stickers. I think I have Sticker Mule on speed dial. I love stickers, so you always make me happy with those.

**Matty:** We are working on Arrested DevOps stickers, by the way.

**Bridget:** I should also point out that while we did actually do t-shirts for DevOps Days Minneapolis this year, some DevOps Days have not done t-shirts. For example, DevOps Days New York last year, actually Dave actually had them work with Lotus Outreach and build a well in Cambodia with the money that would have otherwise gone to t-shirts. So there are some really cool efforts in that direction.

**Jason:** That's awesome.

**Pete:** That was a great idea. I was actually there for that one. That's— Bridget, that was the talk that you had mentioned before. And when Dave had mentioned that he was doing that, I thought it was a great idea. And I actually mentioned it to a few other places as well, as saying like, hey, like you know, just make it an option. Even if you don't want to do it, just make it an option at like checkout. You know, would you want to donate instead of get a free t-shirt? And honestly, like, a lot of people will probably just do that because again, like, I don't know, who needs more stuff really?

**Bridget:** [00:33:09] Yeah, totally.

**Matty:** Where were you guys when we were like creating the signup form for DevOps Days Chicago?

**Bridget:** Dude, I gave you a 14-page postmortem from Minneapolis. Don't ask me where I was.

**Matty:** Okay, so we've talked a little bit about kind of like picking conferences, what you get out of it. Let's talk a little bit about for lack of a better word, etiquette behavior? Like, what are some of the things that people should keep in mind? Let's kind of talk about how people act at conferences because I think it can be kind of tricky.

**Bridget:** I'm laughing because yes.

**Matty:** Yes. So we'll post a link in the show notes. Bridget wrote a pretty awesome blog yesterday on this topic, so it's very time appropriate. But I think, I mean, just to kind of put things in perspective and like kind of to color it a little bit is You have this interesting mix of people at a conference. You can have a mix of people who all know each other super well and already have boundaries set and things like that. And to kind of know where those are, you know, like, why is it okay for me to go and like give Pete a big like kiss on the cheek, but someone else does that, that'll piss him off. Also, by the way, I don't know that that's okay for me to do that to Pete, but I plan to try that at the next conference we're at.

**Jason:** [00:34:21] As long as you start with a burrito, I think you're safe.

**Bridget:** That would probably work best if you actually verbally asked Pete if that was a good idea. So yeah, the thing about conference etiquette, I think it's conferences are this weird space where it's like you're at work, but you're not really at work. You certainly have shittier internet connectivity than you would have at work because conference Wi-Fi, you know, or trying to tether when you're in Midtown Manhattan on your AT&T, good luck with that. But so it's kind of like you're at work except that, you know, you can't do anything with Docker because everything is too slow. And you also are in these social situations with people you don't necessarily know super well. And a lot of them are drinking, and so it feels kind of like fun nightlife activity. And so a lot of people, I think, get confused about where the bounds of professional behavior are and how they should be relating to each other. I mean, I would say have fun, but err on the side of thinking, hey, would I like these people to try to recruit me for their next startup? And if the way you're acting is going to dissuade them from that, then you're, you know, you're doing yourself a disservice.

**Jason:** I think the problem is magnified by the fact that we are at technical events, and it's not an excuse, But I think that you get people that are already lacking in a lot of social skills in some areas and then you magnify it with alcohol, being around people that are generally not used to being around. So yeah, it has the potential for, you know, I don't want to say disaster, but clearly fraught with danger.

**Bridget:** [00:35:40] And not even just the evening event stuff where obviously everybody needs to keep an eye on their own behavior and their own intake of alcohol and just think about how they're acting, how they're representing their company, how they're representing themselves and their own personal brand or whatever. But also just the relating to people during the day, like our hosts were mentioning earlier about wanting to make sure that you're catching up with all the fun people you haven't had a chance to see in, you know, 6 months or whatever, but also being welcoming to new people. Like that, obviously, that's something that we all are always trying to find a balance with, but I think part of being welcoming to new people does include not making assumptions about them, like assuming that because they are a female-bodied person that they must be a recruiter. Or because they are an older person that they must be, I don't know, like some sort of person who's trying to make poor Julian Dunn put Chef on AIX or whatever it is. It's like going to people and making assumptions about them is probably not the best way to relate to them. So like actually just asking more open-ended questions and not coming to people and stating what you think you know about them already, I would say is my most general advice.

**Jason:** [00:36:45] I was going to say, I think that was my favorite, you know, item that you mentioned in your blog post was just about the open-ended questions, because I think generally speaking, people are just trying to make that connection. They just, you know, they're not as tactful as they could otherwise be.

**Trevor:** Yeah, I mean, I've seen people even, you know, take that opportunity instead of using that as a, you know, instead of starting a conversation with the person they're trying to make the assumption about and, you know, getting to actually know them, they go to the next person they feel comfortable around and say, you think they're a recruiter or you think they're an engineer? And then you're like, uh, I don't know, why don't you go talk to them? You know, why are you asking me this? You know, I don't know, sure, maybe statistics go one way or the other, but does it matter? Go talk to them. You've already not impressed me.

**Jason:** I'm sorry, did someone say personal branding?

**Trevor:** Stickers!

**Bridget:** We don't all have stickers with our avatar on them, but I bet Sticker Mule could help us with that. This episode of Arrested DevOps brought to you by—

**Trevor:** [00:37:46] So Jason, is that licensed from Epic Rap Battles?

**Jason:** Sure, it's licensed. What do you think me to be?

**Matty:** So just a little bit of trivia. Pete Shukoff of Epic Rap Battles of History, I knew him when? When he was a little punk in Chicago opening for my buddy's band and was not cool enough to not want to hang out with us and all that. So I have a special— they have a special place in my heart. Now they're too famous. I want to kind of wrap up now before we go into our checkouts. What's your favorite conference story? It can be something that was awesome, something that was hilarious, something that was just an epic fail. If it's an epic fail, please don't like, you know, point out who failed, but just something that maybe didn't come off the way you want.

**Jason:** Come on, Pete.

**Matty:** You got to have a good one there, Cheslock. No pressure.

**Pete:** I know, I'm trying to think.

**Jason:** It's got something sushi related.

**Matty:** All right. All right.

**Bridget:** I'll go. So those of you who were at DevOpsDays Minneapolis already know this story. But we got Patrick Dubois to fly all the way from Belgium and give the closing keynote at our conference. And I really, really, really wanted Andrew Clay Shafer to introduce him. And unfortunately, because of various personal circumstances with the way that summer's schedule was going, Andrew could not in any way be there. But through the magic of Google Hangouts, we decided to have Andrew introduce him anyway. And it was a complete surprise to Patrick when the giant head, the giant floating head of Andrew appeared on the screen. And we actually just gave Patrick a mic and let Andrew and Patrick talk to each other for a minute. And it was really nice of Patrick to come all the way from Belgium and know very few people at the conference, and then to actually have one of his dear friends from the whole DevOps world who, I don't know, could arguably be said to have started DevOps with him, be there, at least on Hangout. I think seeing those smiles was a huge, huge win for me.

**Matty:** [00:39:36] One of mine, again, not necessarily on the funny list. Well, it ends up being a little bit of a funny story because I'm not capable of telling stories that are just purely good. So at ChefConf this year, I was talking to someone at the Azure booth, at the Microsoft booth. We got into a conversation about Jeffrey Snover, who is one of my kind of tech heroes, you know, someone that I look up to, has done some, some pretty cool stuff. And we're just talking about him, and this fellow at the booth said, oh, you know, he's here. And I was like, oh wow, that's, you know, it's kind of like, oh cool, whatever, blah blah blah. And then that night at the, you know, kind of mixer thing, that Ben from Microsoft, he called me over, he goes, oh hey Matt, come over here. And he was talking to Snover and he introduced me. And it was totally— I ended up talking to him for about an hour. And it was one of those conversations where I felt I was not, I was not qualified to have the conversation that I was having with Jeff Snover. Because he was asking me a lot of really in-depth questions about my opinions about PowerShell and the direction that I thought things should go. And it was just super, super nice. But I managed to insult him and tell him that I thought PowerShell was as readable as Perl. And so that was kind of my introduction to— so that was me putting my foot in my mouth with one of my tech heroes, even though we're not supposed to have heroes in tech anymore. That's all right.

**Jason:** [00:40:45] Pete and Bridget are my heroes.

**Pete:** Yeah.

**Jason:** So I want to give a semi-serious story, and then I'll let Pete give his, and then I have some of the— I don't know, it's kind of funny that I'm finished with. So, in Portland at Monitorama this year— well, let's go back a little bit to Boston. You know, we did our first one in Boston last year, and I mean, it was pretty clear that, you know, that operations, you know, that our target market is largely white male. And it's bothered me ever since then. And I, you know, I don't know what one person could do, but I made it an effort to really try to do whatever I could to help increase the diversity ratio. It just Again, I'm just one guy running a conference, but I'm going to do whatever I can. Part of that was I was working with, talking with Ash Dryden. I don't know if any of the people listening know her, but she's just an amazing person and she's given me great advice since Boston through Berlin and then to Portland. I really wanted her to speak to our audience and kind of just give her side of how she— just give her story, basically. I was really kind of concerned because, just because of the lack of diversity in our industry And because she is kind of a polarizing figure to some people. But it was— sorry, I'm getting kind of choked up. But I mean, it's like, for me, it was an amazing moment to see the reaction that the crowd had to her. And Bridget was there. I don't— I mean, maybe you can elaborate on it better than I could, but it was just— for me, it would just really move me to see the way that our community reacted to the story and the message she had to convey.

**Bridget:** [00:42:15] Yeah, I was really, really impressed with her talk. And then I was happy to see that there were guys in the audience like Dan Slimmon, asking really nuanced, thoughtful questions and clearly listening to and taking in the stuff that she was saying. I feel like it's always a risk when, you know, a woman in tech speaks out about this stuff, just because there's, there's always backlash of one sort or another, and she's a really brave person, but she also, I think, was supported a lot by the environment where you started things off just saying this conference is going to be about us, you know, having empathy and caring about each other and listening to each other. So it worked for me. It definitely worked. You're killing me.

**Jason:** I know, I know. It really—

**Matty:** it—

**Jason:** like I said, I don't want to sound like a cheese, but it really, you know, it really moved me in a positive way. So yeah, anyway, so Pete, yeah, wow, what's your story, buddy? Follow that.

**Pete:** Mine's a last-minute story, what I just thought of, and then I got I follow that. Geez, thanks a lot.

**Trevor:** [00:43:16] I'll soften it for you and go first.

**Pete:** Yeah, okay, perfect. Take the bullet for me, man.

**Trevor:** So at the Visual Studio 2010 launch conference, as I've established was my first conference, I will also then establish and date myself in the opposite direction. It was my first semester of programming. So I was talking to all these different people, and every one of them were like, you know, you You sound intelligent. I was totally imposter syndrome because I really was at that time an imposter. I was a sheep among wolves. Everybody was just super encouraging. They gave, here's some things you should probably focus on if you want to stay in the .NET environment, things to make sure you keep up on, people you should pay attention to. Just super supportive and it was great. Then the other anecdote on the other side, my most recent conference would be my first conference since starting at Arrested DevOps. So it was definitely fun to have a couple people come up to me and be like, are you that guy from the podcast? And I was like, yes, yes, I am the guy from the podcast.

**Bridget:** [00:44:25] Did they recognize the fire helmet?

**Trevor:** The fire helmet's new. The fire helmet started today.

**Jason:** That's awesome.

**Matty:** Okay, chest lock.

**Pete:** All right. Yeah, all right. It's not a good story, but whatever. We'll do it. You wanted a sushi-related story. Story, so this is my sushi-related story. Everything comes back to sushi, just remember that. Anyway, this would have been Velocity last summer. I was out in Santa Clara. I think that was my first Velocity. I was out there, I met a lot of people for the first time who I chatted a lot with online. I think that might have been actually the first time I met with Andrew Schaeffer, and we obviously went out and got sushi because that's what we do when we're in the same town together. We go to the sushi place in San Jose or whatever because that's obviously pretty close to where Velocity And we go there, it was like me and him and a couple other like random people that I didn't really know and I kind of chatted with and have dinner and just talk about whatever random stuff. And then, you know, kind of towards the end of it, you know, one of the people that was there started talking about this, you know, this like project they worked on. And I was like, oh yeah, like I love that project, I use it all the time, and, you know, like a huge fan of it, you know, we've put a lot of resources into contributing back to it and everything else. And he was like, yeah, that's my project. And I'm like, wait, you're, you know, so-and-so? And, you know, obviously don't want to like mention all this stuff, but I was like, oh, you're so-and-so? He's like, Yeah. I'm like, oh wow. Like, it's like this like immediate connection that happens when you realize that like all of the conversations that you have in like pull requests or, you know, whatever, and you kind of just randomly, I don't know, randomly run into them. But it was kind of all centered around the conference. So, you know, I mean, that's kind of the last-minute thought that I had around, you know, funny conference stories. But to be honest, like, that happens at a shockingly large amount of time where you just run in, you know, to these totally random situations of finding someone that's like Oh yeah, you do that, or, you know, whatever. It's kind of hilarious to see when it happens.

**Jason:** [00:46:13] Yeah, that's cool. I have one last story if we have time. Yeah, I mentioned one of my earliest memories of conferences was at OSCON. I think it was like 2005. So before I was the Graphite guy, I was like the OpenBSD firewall guy.

**Pete:** And I don't know how many of—

**Jason:** I assume most of you probably know the BSDs. Yes?

**Matty:** No?

**Jason:** Okay. Yeah, I'm seeing nodding. Yeah, I'm gonna assume somebody knows an OpenBSD in the audience.

**Pete:** We know of them as a thing. We know they are a thing.

**Bridget:** Yes, Jason, we know the BSDs. I run FreeBSD myself.

**Jason:** All right, so anyway, so I was, I was at the conference to do a talk on failover firewalls with OpenBSD, and when I wasn't doing the talk, I was in the BSD booth, which was like a shared booth with the FreeBSD and OpenBSD communities. Of course, nobody actually uses NetBSD, so there was nobody there to represent them. So I had this really interesting setup. I had 3, like, 3 Dell servers, and I was doing like this failover thing, and I had all the cables plugged between them. Basically, the gist was you would ping one of the servers on the other side, and as you unplugged the cable, it would fail over to the other one. It would resume. It was a stateful firewall, so you wouldn't lose the connection. I was going back and forth, and I had my whole spiel. I was like a salesperson, kind of doing my thing for open source and showing people how this failover firewall worked. I've been doing a bunch of these demonstrations, and one of the guys from the previous D-Camp was like, oh, hey, this other guy needs to see this. He brought this guy over that he seemed to know pretty well. And I didn't know him, but you know, I did my spiel and started off. I'm like, oh yeah, hey, ever heard of OpenBSD? He's like, yeah, I think I've heard of it. And so I'm doing my thing and I'm, you know, going through it, explaining OpenBSD, explaining pfSense firewalls and doing the failover. And I got done, everything went great. He's like, yeah, that's really cool. Sitting around, we're just chit-chatting for a while. And all this time I hadn't actually looked down at his badge, you know, to see who he was. And I heard people kind of laughing behind me, and I finally looked down at his badge and And sure enough, it's Jordan Hubbard. And again, I don't know if you know who Jordan Hubbard is, but he just happens to be the creator of FreeBSD. Everybody behind me is just red-faced, and I just— that was pretty terrible, but made for a good story.

**Matty:** [00:48:23] That is a good way to wrap it up. So let's move into our checkouts. And we actually— Jason, we'll start with you. So what do you have for our listeners to check out?

**Jason:** What do I have? I think I have a couple of talks. I have a few talks. So the first one is actually— the first 2 are from a gentleman named John Rauser who has given a number of keynotes for Velocities. And so I think the first one's called Look at Your Data and the second one's called Investigate Anomalies. And they were back-to-back talks. I think he did around 2006, 2007 when he was still at Amazon. I may have the years wrong, but anyway, so he's at Pinterest now. Brilliant guy, really understands data. The first one's talking about the data tail. And the second one actually gives a really interesting anecdote about— not Chimera, I forget— but an interesting breakout that happened back in London in the 1700s, 1800s. So those are 2 of my favorite talks, just a brilliant speaker. And then the third one is actually one that I think I retweeted either today or yesterday, and it's by Kyle Kingsbury, again another one of my favorite speakers, brilliant guy. He's done the Jepsen Project about distributed data systems and how to break them and understand how, you know, the different ways that they break. So yeah, I think that's all I have for today.

**Matty:** [00:49:30] Bridget.

**Bridget:** All right, I have 2 ideas for checkouts. The first one is for any listeners who have been listening to all of this and thinking, well, this is great, my company has, you know, 3 grand for a training budget for our whole department for the entire year, and there's no way I can go to any of these big conferences, and it's gonna even be hard to get a plane ticket to Portland, which might be where the next Monitorama is.

**Matty:** Are you just trolling him now?

**Bridget:** I'm trying to get answers, yes.

**Jason:** The next event will be in Portland. So there may be one or more, but yeah, we're definitely— it's going to be a recurring thing in Portland.

**Bridget:** Right. So then people think to themselves, I love monitoring, but I can't get to Portland. How am I going to do this? Keep in mind that if you look at meetup.com for your local area, there are probably lots of fantastic meetups full of awesome people. Your local coworking spaces probably hold events. I was just tonight at a social event at the CoCo coworking space in Minneapolis where this guy Dave Stagner, who is a one-person startup who's making this thing called Congruence, which is a monitoring tool. He's doing that all himself, but he's going to local meetups. He came and demoed it at our local InfraCoders and got a lot of feedback from various people. So, there's a whole community of people around you that you can probably plug into that doesn't cost any money. It costs maybe an evening every month. So, I would really recommend that. Just go on meetup.com and search for anything you're interested in. And then, if you're interested in things that aren't tech, like I occasionally am, I actually I was also telling folks earlier that people should really check out the Monkey Electric bike lights. I participated in a 24-hour bike race earlier this summer, which was super fun. I wasn't awake the whole time. We had a 6-person team, but somebody from our team was on the course the entire time. And if you're going to be riding your bike through neighborhoods at 4 in the morning, you really want awesome lights on your bikes that are programmable and show pictures. I think we set our— Joe set his up to do rockets and I set mine up to be shiny happy people holding hands. So if you're into cycling at all, you totally need some of these lights. They're really fun. It was a Kickstarter project that's now actually available for purchase.

**Matty:** [00:51:32] Awesome. Thought Leader Cheslock.

**Pete:** Yes, so I have a couple of things. My first 2 are actually kind of work-related because since I'm at a small startup, that's all I do pretty much all the time. But just, you know, I'm sure there's not a lot of people who haven't used it yet, but there is a fantastic program that has been saving my butt a lot. Past couple weeks that Jordan Sissel wrote called FPM. That's short for Effing Package Manager. I'm pretty sure that's what it's pronounced. But anyway, it's a fantastic tool that allows you to basically take pretty much any sort of data and create a package. It is shockingly simple to use, so much so that even I can use it. So I mean, come on, if I can use it, anyone can use it. It's really simple. So definitely check that out if you haven't. The other thing I found— a coworker of mine shot this over to me, and it's a super easy way to create app repos on S3. I know some like ReproPro, or however it's pronounced, you have to kind of run the version locally and then use like S3 sync to bring it up to S3. This one doesn't require the local version, so it essentially downloads the like packages and the manifests and stuff, updates them, and then pushes them up. So it takes a little bit longer because obviously you have to, you know, download and then upload, but it doesn't download the packages, which are obviously the real meat of the repo. It's just the small files. So lastly is a non-computer related— well, not really because it holds my computer, but as I mentioned earlier, my back does not work with messenger bags. So I've been trying to find kind of a smaller bag to wear during my commuting downtown. And so I found this awesome STM bag. I actually saw someone during my commute wearing it and I was like, I need that bag. And so I kind of got close enough so I could read the, the brand, and then I googled it and bought it. So it works great, I love it.

**Matty:** [00:53:14] And yeah, definitely check them Trevor.

**Trevor:** All right, so first I'll start with my relevant thing. Anybody who's a student who's listening or who has access to a .edu email still, JetBrains just announced that you can get all their software stuff for free as a student or teacher, which is cool because they have a lot of fun tools that are really useful. So check that out. Secondly, Borderlands: The Pre-Sequel comes out in the middle of October. And the trailer for it featuring Sir Hammerlock and Mr. Torgue is hysterical. Even if you don't intend to play the game, it's funny to watch. Sir Hammerlock is an Englishman and Mr. Torgue is like a constantly shouting Hulk Hogan, if Hulk Hogan wasn't already always shouting. Finally, another fun little toy. Netflix just released this thing called Netflix Spoilers, which basically you click the little warning button and it gives you a spoiler from a random TV series or movie. It was really interesting. I actually noticed something I had never noticed before in one of the TV series. I realized one of the creators of one of the shows— the creator of the show was actually in the last frame, and I never realized it because I didn't know what he looked like before. But now I do, and I was like, oh, he's there. So it was neat, uh, fun to check out. Uh, there will be spoilers, so don't click.

**Matty:** [00:54:33] Go figure.

**Trevor:** Matt, you want to wrap it up?

**Matty:** Yep, absolutely. So I got a couple. So first of all, one of my new favorite podcasts is the Tech Douchebags podcast. Tech Douchebags is a 12-step program for technology snobs disguised as comedic interviews, each week humorously helping geeks confront their digital narcissism and unhealthy attachment to their gadgets and devices. It's super funny, so we'll have a link to that in the show notes. I found out about it because my internet friend @Jamie was on it about a month ago. And I'm really, really loving it. Another thing I want to give a shout out to is a project called Spoonium, which is containers on Windows. I'm just starting to look at it, so that's at spoonium.net. I'll probably talk about that a little bit more in the future as I learn more about it, but I think they're doing some interesting things. And so Pete talked about his bag, I'm gonna talk about mine. It's the Columbia Treadlite 10-liter backpack. It's this if you're watching the video. Basically, for me, it's super small. And actually, I found out about it indirectly from Pete because Pete asked the internet what backpack he should get, and Catherine Daniels @BeerOps on Twitter suggested this one. I looked at it, I love it. You can basically fit a 13-inch MacBook Pro Retina in it and a couple cables, but it's small enough that it fits under the seat in front of you and you still have room for your feet, which is important to me. So I am a big fan of that. That's going to do it for us. So remember, we have a newsletter. If you go to arresteddevops.com/bananastand, it is the best way to know about upcoming podcast episodes and cool news with DevOps.

**Trevor:** [00:56:08] Thanks to our sponsors, VictorOps and Datadog, and to our loyal listeners. If you enjoy Arrested DevOps, we'd appreciate it if you'd visit arresteddevops.com/itunes and leave us a review in the iTunes store. We'll read our favorite ones on upcoming episodes. Also, we want to thank Bridget, Jason, and Pete for joining us tonight. Be sure to check us out at arresteddevops.com or @ArrestedDevOps on Twitter.

**Matty:** We are always happy to get your input, ideas, feedback, or just general problems with your life at shows@arresteddevops.com.

**Trevor:** I am Matt, @MattStratton, and I'm Trevor, @TrevorGHess.

**Matty:** We are Arrested DevOps, and remember, there's always DevOps in the banana stand.
