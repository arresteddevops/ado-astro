**Nicole:** [00:00:00] I'm freaking happy to be here. Everything's fetching great.

**Matthew:** We're—

**Nicole:** everything's darn good. I'm pulling out all my Utah swears.

**Matty:** Excellent. Welcome to Arrested DevOps, the show where we help you achieve understanding, develop good practices, and optimize your team and organization for maximum DevOps awesomeness. I'm your host, Matty Stratton, and with me is I'm Nicole Forsgren.

**Nicole:** Today, we're at DevOps Days Salt Lake City, also known as Silicon Slopes.

**Matty:** Silicon Slopes.

**Nicole:** Where it is real pretty outside today.

**Matty:** It is. So, this is, this is my first time at DevOps Days Salt Lake City. It's my first time in Salt Lake City, and it's also my first time in Utah.

**Nicole:** So, welcome.

**Matty:** So, it's pretty exciting.

**Nicole:** I'm so excited you're here. I was a professor at Utah State for a few years, so I am, like, real excited to be back.

**Matty:** So you're all local and stuff?

**Nicole:** I mean, I walked into the speaker's lounge and saw all the Utah sugar and I was like, diet starts tomorrow.

**Matty:** [00:01:01] Can you say something Utah?

**Nicole:** Um, all of the F-word derivatives. I'm freaking happy to be here. Everything's fetching great. Everything's darn good. I'm pulling out all my Utah swears.

**Matty:** Excellent.

**Wes:** Perfect.

**Nicole:** Yeah.

**Matty:** And see, normally we've made our peace with the explicit tag, but we don't have to on this one.

**Nicole:** I know.

**Matty:** So yeah, so, um, I just gave my talk. So I was a presenter here. They invited me to come, which was amazing. And I'm really pleased. So I gave a talk called How to Infect Your Organization with Humane Ops. We'll put a link to at least the slides in the show notes. I don't know when the videos and stuff will be up, but when they are, we'll put them in there. So that's great. I was— it's a new piece of content. I came up with the idea a while ago and haven't had a chance to present it yet. So I'm really pleased I was able to do that. It had a lot to do with when we're not the big strategy person that's running the whole IT organization, how can we actually make things more humane for people that are on call? And Nicole, you're presenting tomorrow, right? You're kicking everything off tomorrow?

**Nicole:** [00:02:04] No, which is great because then it's going to let me get over my sugar high in case I need to sleep in, which is good. I'm doing the late morning keynote, so I think 11 o'clock, and then I'm going to go do a book signing, which is It means I'm gonna be snacking and signing all at the same time. It'll be like college.

**Matty:** Oh, perfect.

**Jason:** Great.

**Chris:** Yeah.

**Matty:** So, we've got our little studio audience here. So, studio audience, make a little bit of noise for the recording. It's always fun to record these episodes at DevOpsDays because we have an audience. Usually, the audience is Bridget's attack kitten and maybe my kids coming in pounding on the door and wanting to know if we can go play Drawful or something like that. Trevor, I guess, is just— I don't know. I don't know who bothers Trevor when he's recording, but we have a great audience, which is good. And we're going to be pulling people from the audience who maybe have been repeat attendees here, because this is the 3rd DevOps Days Salt Lake City. And we also have— so our first guest is Wes Novack. So Wes, you want to tell our audience a little bit about what you do and your experience with DevOps Days Salt Lake City and DevOps Days in general?

**Wes:** [00:03:14] Sure, thank you. Again, Wes Novack. I'm a systems engineer at Pluralsight where I do CloudOps, DevOps, SysOps, etc.

**Matty:** All of the ops.

**Wes:** All of the ops. And this is my second year here at DevOps Days Salt Lake City. I have not been to DevOps Days at any other cities.

**Matty:** Gotcha. So you're a repeat attendee here. And if I understand correctly, this was in the same venue as last year, so I'm not going to ask how it compares to last year's venue because it should be The same, right?

**Nicole:** But let's go with equally amazing.

**Matty:** Yeah, it's equally amazing, not just the same. Sorry, that sounded a little bit, a little bit down. What, uh, so again, we're not quite halfway through, through this event, but you have last year to go by. What's been your favorite thing about, uh, this year's DevOps Days, uh, Salt Lake City?

**Wes:** Uh, that Humane Ops talk.

**Matty:** Okay, I was gonna say it doesn't have to be me. I like it, but I'll take it.

**Nicole:** I'll take it.

**Matty:** So really, what was your favorite?

**Wes:** No, I think, you know, so far, you know, we're only partway through the, you know, 2-day event so far, but I like what I'm seeing this year compared to last year, and that's we're getting a little bit more into the details and into, you know, particular sections of, you know, the DevOps space here this year. I feel like last year was a bit more generalized, so I'm enjoying it more.

**Matty:** [00:04:33] A little more specific, a little more how to actually do the things that last year you learned that you actually need to care to do.

**Wes:** Yes.

**Matty:** So to speak. Gotcha. Excellent. And some questions. Yeah, we're super prepared for this, by the way.

**Nicole:** So, I mean, if we think about it, that's really how DevOps works, right? Like, you show up, you find out there's something that needs to be done, you kind of dig into it, and you iterate from there, right?

**Wes:** So last year, what was something that you took away from the conference that you, like, Last year, there was a lot of discussion around DevOps culture, and, you know, myself and a few of my colleagues on my team were here, and for us, it was the realization that, you know, we are doing things well and that we're doing things in ways that a lot of other organizations are trying to aspire to. So it was good affirmation for us and things we're doing.

**Matty:** I think the validation can help. I was just going to say, it's not always that you come to these and have this aha moment of everything that you're doing terribly, terribly wrong. Sometimes it's nice to know that it's not all terribly, terribly wrong. Some of it's terribly right.

**Nicole:** [00:05:40] Absolutely. And do we have any, like, takeaways from this year yet? Are you still looking for those little nuggets?

**Wes:** I, like I said, I did. I'm not pandering here, but I really enjoyed your talk, Matt. And I got some, you know, good, you know, nuggets and ideas for making OnCall better. So. Thanks again for that.

**Matty:** One of the things that I've enjoyed that they're doing at this event is asking for people after the talk to say, or maybe just in general, I guess it could happen because of a talk or whatever, what's an aha moment? And as a speaker, I really enjoy that because that's a good validation. We were talking a little bit in the speaker lounge before about what's your metric of understanding if you connected while you were speaking to people, and it used to be for me questions, but then I realized not everybody Just comfortable asking the questions right away, or you might have to think about them. Then for a while, my metric was how many times people were taking pictures of your slides, which I saw happening a lot, which that was pretty good. But I think this aha moment, because to me that was saying, okay, not only could I see that it resonated with an individual, but this is specifically what resonated. So I could say that, you know, I could get that feedback to myself. Keep that in the talk. That's something that was valuable. And also, by doing that for the participants, it's providing the structure to say, give this a minute. What was that key takeaway versus sort of like, well, what did you like about it? Well, I liked it because the slides had Star Wars in them. You know, that's not an aha moment. The aha moment was interrupts actually caused me to lose productivity for 45 minutes. You know, that kind of thing. So I think that's a cool structure and we may have to acquire, steal that for Chicago. So I really like anything that helps more of the connection between the speaker and the audience.

**Nicole:** [00:07:23] Oh, for sure. Very nice. And I like that you mentioned ways to make on-call better, right? Because like who here, or even who at home, think to yourself, like, has had on-call or has been stuck in on-call or is desperately avoiding on-call, right? On-call's a thing. And I loved when Alice Goldfuss started that on-call selfie thing, right? It was like, it was a way to bond, even if you're like trapped at home and you have to do on-call, right? On-call selfies were nice because it helped people think about who else was out there. It helped make it visible so we could kind of realize it was a thing and was still a thing and then try to make it a little bit better.

**Matty:** Because it can feel very lonely to be on-call, especially when it's a critical system. You're sitting there, you can't really do anything. You're like, maybe I'm stuck here. I can't go out. I can't go to the movies. I can't, you know, And I do remember, in some ways, it's— I don't want to say that it's better, but when I was walking out of the hall, someone made a comment to me about having been on call for 30 years. And I said, I do like the fact that at least we're now having conversations that say it can be better versus that's just how it is. But pre-MiFi and stuff like that, I remember when I worked at a bank, a certain bank, I almost said the bank because that's how you call it when you work at the bank. You call it working at the bank. When I worked at the bank, when you were on call, you could not— you worked at home the entire weekend, was the only time you worked at home. You couldn't go anywhere. And the reason was because you had to be able to get on a terminal within 5 minutes, and that wasn't possible. You got on the train to go to work, you couldn't do it. You know, it was like, I can't walk my dog more than a couple blocks away from the house. And it adds this incredible layer of stress, um, and it can be very lonely kind of thing. It's either very lonely or you're really annoying to your family because you never leave the house. So either way, it's not super healthy. What's been— so you're at Pluralsight, you ops all the things. What are some of the things you think that y'all are doing well when it comes to your on-call culture?

**Wes:** [00:09:28] I think we push the notion of autonomous with response— autonomous teams with responsibilities. So we have individual product teams. Working on particular applications and pushing those to production, but we maintain on-call for each individual team as well so that we can get the people from a particular product team on an issue and responding to it when there is one. So I think that's really good and exemplifies DevOps culture and DevOps philosophies there to have the team owning the application that they build all the way up into production and responding to alerts. I think we do that well. At Pluralsight. And our teams are also very highly decoupled from one another, so they're not dependent on each other. We don't have much in the forms of cascading failure type issues, so that one team that owns a vertical slice of the product maintains everything from the front end all the way back down to the database level that no other teams are allowed to put their hooks into. So that helps with responding to on-call issues and resolving it in that they have access to everything because they own everything.

**Matty:** [00:10:37] That seems to make for a pretty healthy thing. Now, that being said, I presume you think things could be better.

**Wes:** Yeah, right, everybody has room for improvement, right? So again, going back to your talk, I thought I found some interesting nuggets from that around noisy alerts that aren't actionable. Like, I think everybody knows actionable alerts are no good, but having that conversation with the business that if you're not gonna prioritize making these error logs or alerts actionable and makes sense, then we're going to turn off the monitoring for it or dial it back because you don't— you feel like that's not worth doing. So I thought that was good. And also took away some good thinking around having the functional tests be production monitoring plus tests in the deployment pipeline as well, and vice versa. So I thought that was really good.

**Matty:** I think I liked how Pete's talk, or it was more in the Q&A that Pete gave earlier, and it came up in mine, was a little bit about needing to feel empowered to push back on that, this idea of having the cake and eat it too within your organization, which is we need things to be, you know, it's pick a couple, right? And like you said, if it's a matter of we have these flapping alerts, we're gonna have to invest the time Or else we're just not going to be able to monitor anymore. And if that's the case, maybe it's— and sometimes the answer is that. And I think we do oftentimes have this cynical approach where we're just assuming that we're going to be told no, so we don't try it, right? And don't get me wrong, there are toxic environments where people will just, you know, you will have this pushback. But painting with those broad strokes about thinking that just because you try to do the right thing, you're going to be told no, there is a certain amount of courage that we can display. And usually, and where I'm going with this is some of the stuff that I think Nicole's going to talk about. I don't know what you're talking about completely tomorrow, but when you put science on it, right, and put this culture of learning, I talked about that a little bit in my talk, which is if you simply tell, you know, push back and say, well, we can't do that because reasons, don't be surprised when the answer is go do it anyway. But if you push back and say we can't do that because Or we have to invest some time in fixing this flapping alert because right now it's having us fly blind and that's actually more dangerous than not alerting at all. That's something that reasonable people understand. And as much as we may sometimes think that our management is not reasonable, they may not be reasonable management, but they're usually reasonable humans. And when given information in a way that they can understand and specifically speaking in the language that they want to understand, at least, you know, that's sort of the optimist in me. And just as I've said before that I have the cognitive dissonance of of having the optimism of DevOps, but also inherently believing that humans are terrible. So somehow I can hold both of those thoughts in my head at the same time. So I think everybody else can as well. So great.

**Nicole:** [00:13:35] Okay.

**Matty:** So Wes, it was great to meet you. I want to bring up somebody, if I can, who this is your first experience at DevOps Days Salt Lake City. Who's a newbie? Okay. Chris, do you go by Chris or Christopher?

**Chris:** Chris is great.

**Matty:** Okay. So Chris is joining us. Chris, tell us a little bit about what you do and what got you to come to DevOps Days. DevOps Days here today? Sure.

**Chris:** I work for Qualtrics. I'm on our data platform. I work kind of on automation and alerting. I'm not really in the ops world, not really in the developer world. I'm kind of in between. And so I have a buddy here with Elastic who mentioned he was coming up, and I was like, oh, that sounds like fun. So I mentioned to my manager, said, hey, could I go? He's like, sure, expense it. So I'm here.

**Nicole:** Dear Chris's manager, love you.

**Matty:** Thanks. It's a Cinderella story. How, how is your experience so far today compared with maybe some other tech conferences that you've been to?

**Chris:** [00:14:35] I've honestly never been to a tech conference at all.

**Matty:** Well, you may be sorely disappointed when you go to some other ones then.

**Chris:** No, I've really enjoyed it. It's been really cool to kind of, you know, see some of these discussions and stuff happen live, listen to some of the talks and speakers. And get the different perspectives. You know, there's been a lot of— you know, I've worked at Qualtrics for 7 years, been there for a long time, kind of, you know, a little bit of an echo chamber for myself in terms of like I have a real narrow scope. And so it's nice to come get a wider perspective and idea of what's going on.

**Wes:** Awesome.

**Nicole:** Sorry, I'm, I'm just excited to hear your story.

**Matty:** And what, uh, has there been anything so far that's been an aha moment for you?

**Chris:** There are a couple things, honestly. Like, you're talking about complexity leads to fragility. As engineers, we like to build really complex systems because they're cool and they have really neat functionality. But like, I spent, about 2 years ago I joined the platform and we launched a product, a system that was nowhere near ready for primetime and spent about 8 months in Optel to get that thing stabilized. And so thinking about what we had to do to actually get it to a stable state was we actually reduced a lot of the complexity. Like, we assumed that we needed, you know, to break messages and stuff up by the individual low granularity so we didn't have any blockages. Instead, we ended up down to a per-database queue with some, you know, fairness protocols built into the system, and it reduced the complexity and reduced the problems we had with the system.

**Matty:** [00:16:12] That's great. That's a great— that's a great success to have there. Again, avoiding It's when you're, again, going back to understanding, when you go back to really understanding the requirement versus the assumption, which we talked about a little bit, which is, hey, everything should just be faster. So, let's make all the things as fast as possible. And it's like, well, is that necessary? What's the real place where that comes? And this is where going back to data, right? No pun intended from being working on a data platform, is these things have to be driven by by information, by science, not by how it feels in your gut.

**Nicole:** Well, and it's such a great example of smart trade-offs, right? I mean, so many— everyone has like done this release where it's like, we're gonna do this thing. Oops, JK, that was not ready. And so many companies and organizations and teams will just power through instead of doing the really smart decrease complexity, decrease scope, make really, really, really smart decisions. And honestly, that's where like Qualtrics shines. And Qualtrics is actually known for doing really, really, really smart releases. So I was in academia for years, I was actually a professor, and Qualtrics was known for actually like starting the platform among professors, right? Like that's where they kind of started was doing stuff like that because we're We do, we're ridiculous, but we test it out in like really bizarre, edge, rigorous ways, but we don't bang on it like industry, right? We bang on it in different ways. And then they went to industry to bang on it in different other ways, and now they're just killing it, right? But it was also a really interesting data-driven approach to kill it in the market, right? And so it's just like, amazing platform, but they have this background by doing things in, like, really, really smart data-driven ways, which is dope.

**Matty:** [00:18:16] Would you ever consider submitting a talk to speak at a DevOpsDays? Would that be something you might be into?

**Chris:** For sure, yeah. Like, I've honestly— one of my things, one of my goals for the year is to figure out some conference or something I can submit something to. Still working on what, where, when, but I'd like to do it at some point.

**Matty:** Well, I think that's a fantastic idea, and you heard it here first, unless you've heard it from Chris before when he's told you.

**Nicole:** But, and then you heard it here second, but close.

**Matty:** The internet heard it here first, so now we can all say we knew you when, when you're a big deal conference speaker and doing that. But good luck to that. Uh, thank you for, for joining us, telling us about your experience. That was great. So thanks, Chris. Um, actually, Jason, I want to talk to you.

**Jason:** Okay.

**Nicole:** So, you just got voluntold.

**Matty:** Yes, I did. So, I always like to, at the events, kind of also talk to the organizers a little bit and their experience through that, both because there's a lot of stuff that as an attendee we don't know about, and also as a fellow organizer of DevOpsDays, we always have some little things where we see how things differ from city to city. And I know we've had a couple of conversations already that I'd like to to go to that. So what— so this is your third time you've done that. Um, I remember you were— you mentioned that now you're, you're starting to feel comfortable with that, which is careful. But what, what do you think, uh, made this year special compared to the, the other two ones? What's, what's new? What's different?

**Jason:** [00:19:49] So the biggest thing is, is I think that, uh, you know, we kind of followed a things. One, we documented everything last year. We did a lot. We did a retrospective, and we actually do a live retrospective with the staff that runs this that goes, okay, we could do this better next year, we could do this better. And we take that list to go, okay, we're going to do this better. Second thing is, is I've just got a really good board. I got people who commit to this. It's, you know, we don't get paid for it. You know, you don't get paid for it. You do a lot of extra work for it to get it done. So you're going out and, you know, we're starting in September. Uh, when all the way through May to put it on. Um, you know, of course, September, October, November, we're not really doing a lot. We're just kind of getting the, the frameworks in place. But I think it's because the board's willing to commit that time and to, uh, you know, to doing that. This year has been especially good because we've had most of the board members now 3 years in a row. Um, I think we've only swapped out 2 board members. And so everybody kind of knows the role already. So we have one person to go out and, you know, like, uh, we have— we were talking last night, we have one person who is our dedicated CFO, and he just deals with all the money stuff. I, you know, my role was really dealing with the sponsors, making sure that they get value out of the conference because we have a lot of people, you know, we've got a lot of people here, but, you know, it's 70% funded by sponsors. So, everybody knows what their role is and what they need to do to get done to do this.

**Matty:** [00:21:10] That's a— speaking of the sponsors, everybody should be aware, and also listeners know this, sponsors make a really big difference to DevOpsDays. They don't pay a whole lot, to be here. Relatively speaking, it's an easy win for them to be here, but we still need to be able to get them to come back. So even though you may have talked to that vendor 100 times already at different events, still go and say hi. Like, we want to, you know, so you can always help the event by at least visiting the sponsors. You don't have to see a demo, you don't have to give them your information. Sorry, fellow sponsors like myself included, but you know, a little, little how you doing. Always helps, uh, them feel justified when the next year comes around and you're like, hey vendor, want to come give us some money again?

**Jason:** And that's, you know, that's the one funny thing is, uh, we've had only— we have 2 new vendors. All the rest have been repeat offenders.

**Matty:** So that's great. So that's repeat vendors, repeat offenders. It works. What, uh, I know we're kind of in the middle of this here, but, you know, always thinking towards the future So, if you could say what you would do next time, what's maybe some secret dream for DevOpsDays Salt Lake City that might come to fruition in the future?

**Jason:** [00:22:28] Not plan it during a major security conference.

**Matthew:** Okay.

**Jason:** That was kind of one of the big, kind of scary things is there was a big conference going on, actually starting tomorrow. We didn't know we kind of have overlapping. And so, knowing us being in operations, there's you can only have so many of your team go to one or the other. We've still got to keep people with the lights on. So that's probably the biggest thing for next year's planning is we're going to make sure that there's nothing overlapping. It's kind of like what you do with the Worldwide DevOps Days where there's not really conferences overlapping. They're close, but not.

**Matty:** We try. There was, just for record, I don't even know what the number is. There's over 50 DevOps Days this year. And the first few years there would be maybe, well, the first year there was one. You know, and then there'd be 2 to 3. And so at first it was, it was pretty critical to sit there and say like, we don't want them to overlap. And that's become a factor that you just can't do now. But we at least try to offer up the suggestion to geographically not overlap. So for example, Chicago and Minneapolis will try not to be in the same week. And a lot of that has to do with, with attendance, but also with sponsors and with speakers. But you're probably not gonna have a sponsor conflict between Berlin and Los Angeles. The same company might want to sponsor, but they're not going to send the same people. But it becomes challenging when you start trying. There's so many, just even DevOps Days themselves, but also other events. You're going to hit something, but at least if you can try to avoid something in your hometown. As a person who's done this before, I can tell you the thing that's really annoying is that like VMworld, they don't tell you till it gets pretty close. We've gotten hit by— last year, Chicago conflicted with VMworld and it was like, what are you going to do? It happens. And we are conflicting with GopherCon, which they did GopherCon on a different week than they usually do. And I'm not really terribly worried about losing, not that I'm like people are going to come to us over GopherCon. I realized how arrogant that just sounded, but we'll be fine. But I'm bummed because I want to go to GopherCon, which I can't because I have to go run Chicago. So there's always a challenge. So you do your best, but that's, uh, yeah, you're right. It's hard to be able to send a team to multiple events within the same same couple of days. So, um, who was— we had a vendor that we were going to talk to.

**Jason:** [00:24:44] Yeah.

**Matty:** Okay, does he have a name?

**Jason:** Matthew.

**Matty:** Matthew.

**Nicole:** Okay, the vendor.

**Matty:** Matthew the vendor.

**Matthew:** The 2 new vendors. Cool.

**Matty:** All right, we'll have a seat. Yeah, Matthew, nice to meet you.

**Matthew:** I'll shake after.

**Matty:** Yeah. Okay. All right, so who are you from? Where are you from, Matthew? Like, I mean, company location?

**Matthew:** Yeah, so Blue Matador, we're actually just down the street, like 3 miles. This main street, 104th South, I think it's behind us actually, uh, but 104th South and down about 3 miles, uh, just next to a Costco. So I can actually see my house, well, on the 3rd floor anyway, uh, so very, very close anyway.

**Matty:** Okay, and, um, what, what does Blue Matador do?

**Matthew:** So Blue Matador is a recommendation engine. For proactive monitoring. There are a lot of monitoring tools. Okay. You know, PagerDuty—

**Matty:** Can you recommend which tool to use? You should recommend PagerDuty.

**Matthew:** Obviously PagerDuty. Actually, PagerDuty, we interact, we integrate with PagerDuty. But most of them, the data gathering ones, incident management aside, the data gathering one, it's all reactive. It's all, hey, something's broken, wake up now. And PagerDuty helps a lot with that. What I really want to get away from is the reactive nature of it, though. So, I mean, I don't know if you were there during the keynote this morning. I feel like maybe you were.

**Matty:** [00:26:12] But the listeners were not there necessarily.

**Nicole:** So we should fill them in with the highlights.

**Matthew:** So during that keynote, I got up, I got a minute, and I told this story, which I was very brief on. But basically, I'm sitting in the hospital. My third son is born. This is so I remember the date mostly. It's the 20th of April.

**Nicole:** But if you're wrong, someone's gonna be pissed.

**Matthew:** That's true. But she won't watch this.

**Matty:** Yeah. You never know how things get out. We have a lot of reach.

**Matthew:** That is fair. So you know, I'm sitting there. She's still in the recovery room. Like she she didn't witness any of this. And my third-born son is, like, right next to me, right? Hours old, just maybe not even an hour. And so, Lucid Software, at the time I was working at Lucid Software, I was employee number 7, chief architect. Like, you know, I knew a lot of things about the system. They called me up even though I wasn't on call. They said, hey, in a very Star Wars-esque manner, help us, you're our only hope. All right.

**Nicole:** [00:27:16] And some people are like, you must feel so important. And you're like—

**Matthew:** I'm like, leave me alone. I was not thrilled at this moment in time. Uh, so I fixed it, but man, I hated it, right? Like, and I could tell you other stories like Lucid, they're mostly about Lucid. I spent a lot of time with Lucid, but, uh, we went up for a snow— what is it— a sledding thing up in Park City or near Park City. And right, my wife and kids like showed up, and then I got an alert. And so like everybody else took off, they're going up there, uh, enjoying their time. A couple of them texted me like, hey, you coming up here? I'm like, nope, sure I'm not. I hate it, I hate it, I hate it so bad. Uh, so Blue Matador is all about getting ahead of it, fixing it on your schedule. There's always these leading indicators, we catch those.

**Matty:** So it's recommending who to page because they're doing the least important thing. That, that's your million-dollar idea there.

**Matthew:** Get that.

**Matty:** [00:28:18] Like you're sledding, but she's having a baby. So who pays the sledding person? Almost.

**Matthew:** Almost. That's a good idea.

**Nicole:** Let's build it.

**Jason:** We will.

**Matty:** That's done.

**Nicole:** I'll make a deck. Yeah, that's as far as we have to do.

**Matty:** Tucero can get money. Fantastic. So, um, when you're— so this is your first experience as a, as a sponsor here. Have you been to this event before?

**Matthew:** Yeah, so I, uh, it was the first one, I believe, right? Yeah, I came to the first one, uh, and that was great. That was up at, uh, what was that called?

**Jason:** Church and State.

**Matthew:** Church and State. Yeah, downtown, a little bit harder to get to for me, so this one's better by far.

**Jason:** We should—

**Matty:** well, it was convenient of them to make the change for you.

**Matthew:** Yeah, I called them up. So yeah, I went to the first one, missed the middle one, just a scheduling conflict, and then I'm back here. You were sledding in May.

**Matty:** In May, right?

**Nicole:** Well, as far as I know, you can go down the luge in the summertime.

**Matthew:** I have yet to do that. I'm a programmer.

**Matty:** [00:29:21] Gravity still affects you.

**Matthew:** Yeah, that is true.

**Matty:** And how is— so have you been, uh, you know, working the booth, working the table?

**Matthew:** Yeah, in and out of the booth and table, lots of demos, uh, the, the pitch this morning. Uh, I have yet to get lunch. I'll pick that up here soon. Got my waiver in my pocket.

**Matty:** And have you, uh, have you worked as a sponsor at other events? Have you worked booth? Have you done booth duty, table duty at stuff, or is this kind of your first time trying this out as a sponsor?

**Matthew:** First time ever.

**Matty:** Oh, okay.

**Matthew:** So yeah, I mean, I've been at companies where we sponsored them, but I never manned the booth. Yeah. Uh, so very, very different, which is funny because I'm an introverted person.

**Matty:** Yeah, yeah, we can tell.

**Matthew:** Yeah, it's very odd. I turn it on as necessary, but, uh, it's very difficult for me. I'm an engineer, right? I, I am the Chief Architect, that's how I see myself and how I react. So, it's very different.

**Matty:** One thing, and Nicole, I don't know how much table duty you've done at DevOps Days, but in my Chef days, I did a fair amount and have yet to do it in PagerDuty, which is great. But having worked both DevOps Days and then worked shows like re:Invent or VMworld or Build or Ignite or whatever the heck Microsoft calls their giant conference today, I really like doing DevOps Days because people, if they come to talk to you, they want to talk to you. Whereas, especially at a big event, that first day, it's like trick-or-treat, right? It's the day when everyone's just got their bag of swag and they're just like, here, just give me stuff, give me stuff. And then you will maybe have that handful of— Yeah.

**Nicole:** [00:30:56] Everybody wants stickers and then they're just done.

**Matty:** Yeah. And then maybe you could come back tomorrow and we'll actually talk if you're actually interested in doing that. But there's actual engagement, which is something I really enjoy. I'll vouch for that. So I've been to other conferences.

**Matthew:** I'm not a first-timer anyway. So, I've been to AWS re:Invent and I've been to tons of other conferences, and most of the time it's trick-or-treat. I think there's a couple of interesting things that Jason in particular has implemented. The stamping thing, I haven't seen that in a lot of places. It's not unique, but it's helpful. And yeah, it gets them to come around and then, yeah, they're interested to talk. I'll vouch for that.

**Matty:** Listening. So there's the sponsor passport. So when you go, you visit a sponsor, you get it stamped or circled or signed or whatever kind of thing. And then when you've got it filled out, then you get to put in a drawing and win a Nintendo or a drone or all sorts of fancy stuff. And that's really, uh, a great way to kind of get that engagement, like I said, because I know one of the things in, in my event, I'm always kind of trying to remind people and being like, just go say hi, just go do that, because sponsors You know, they complain and they're like, oh, nobody came by the booth and why are we here? Oh, and you're like, well, no one likes me. Nobody likes me. How come everybody's at the Chef booth? I'm like, because they're more fun than you are.

**Nicole:** [00:32:13] You know, Chef is just an excuse to make like cool t-shirts and great stickers.

**Matty:** Yeah, my, uh, great swag. My old manager Ivo, his wife said that, you know, always said that Chef was a t-shirt design company who also sold software.

**Chris:** There was—

**Matty:** I'll see if I can find the video. They had at this, at the Seattle office about a month or two ago, they had a display of like all the, um, so I think Nathan had brought in like his, all his shirts. So they had a display of like all the chef shirts that ever existed and they had a video like spanning and the video is like 6 and a half minutes long, you know, as they're kind of going from shirt to shirt to get rid of most of mine.

**Nicole:** And someone found out and they'd lost their minds.

**Chris:** Yeah.

**Nicole:** I, why didn't you call me?

**Matty:** A lot of mine went to them. Went to probably to Goodwill. And it's just because, yeah, my, my house looked like Chef threw up in it, you know. I don't work there anymore, but I know.

**Nicole:** Yeah, I mean, DevOps Days booths are different because people like come and they're chill.

**Matty:** Like booths other places are just nuts and they're all fancy and they got lights and like sparkly things and firecrackers. And they should have—

**Wes:** [00:33:18] DevOps Days are chill.

**Matty:** No, you can't really usually have firecrackers. That's usually—

**Nicole:** I mean, yeah.

**Matthew:** So, AWS re:Invent, every time I go, I've gone about as many times as I've gone to DevOps Days, it's a contest, honestly. Like, the people I go with, last time I went, I came home with 76 shirts. Not a joke. Like, we counted them. I won.

**Matty:** And what did you do with them afterwards?

**Matthew:** Oh, gave them out. I didn't care.

**Matty:** Did you try to wear them all at once?

**Matthew:** Ooh, that would have been smart. But DevOps, so I mean, as a result, like AWS re:Invent, we're not sponsoring that this year. But we are sponsoring multiple DevOps Days.

**Matty:** Which other DevOps Days are you sponsoring?

**Matthew:** I don't know how many you go to. So next week I'm headed up to Victoria.

**Matty:** Okay, I won't be there, but that's still worth sponsoring.

**Matthew:** That's cool. Any others you won't be there because I'd like to name them so that you can't confirm? Victoria, and I'm hitting Boise.

**Matty:** [00:34:19] Uh, I want to go to Boise.

**Nicole:** I was gonna go to Boise, but they're overlapping.

**Matty:** Texas.

**Matthew:** They're Austin.

**Matty:** Austin. No, they just had Austin.

**Nicole:** They just had that. That was Cinco de Mayo.

**Matthew:** Maybe it's Dallas.

**Nicole:** I think it was Mexican.

**Matty:** There's Houston or Dallas or one of them. One of them has one coming. There's a few of them anyway, so that's good. I mean, you guys, y'all should sponsor Chicago.

**Matthew:** Chicago. When's that one coming up?

**Matty:** That is, uh, August 28th and 29th.

**Nicole:** Chicago is a great one.

**Jason:** Yeah.

**Matty:** So, and just one last little plug, because I think we're going to wrap up here, but a couple of things to think about speaking of Chicago. So, the CFP for Chicago, if you do want to speak at a DevOpsDays, that CFP is open, I think, for the rest of the month, maybe? That sounds right. Okay. So, if you go to devopsdays.org/speaking, it will actually also show you the link to Chicago to submit, but also any DevOpsDays that has an open call for papers or call for proposals, whichever you decide the P stands for in CFP.

**Nicole:** Which do you prefer?

**Matty:** Which do you think is right, proposals or papers?

**Nicole:** Probably proposals.

**Matty:** [00:35:19] Proposals.

**Nicole:** No one's going to write it.

**Matty:** It's not really a paper. Or maybe CFP is sort of like, it's actually not an acronym, it's a word by itself that's pronounced CFP.

**Matthew:** Maybe.

**Matty:** I don't know. I'm sure you will tell us on Twitter, people who are listening, how we're wrong. That is what Twitter is for. It is. It is super for what Twitter is for. Where are— so I guess, yes, that being said, so we know where Blue Matador is going to be coming up. Nicole, where can people— this always sounds creepy when I say it— where can people find you?

**Nicole:** I'm going to put in my own pitch too.

**Jason:** Yeah.

**Matty:** Oh yeah. Oh, there's all sorts of stuff going on.

**Nicole:** Everything is happening. Has anyone here heard of the State of DevOps Reports?

**Matty:** Oh, the right answer is yes.

**Nicole:** That's what I do. If you haven't heard of it, you need to go find it. The survey is open right now, and I will legit love you forever if you go take that survey. It's about 20 minutes, 19 with a bunch of people who tested it for me. So, go get y'all a Diet Coke, sit back, get comfortable, and please take the survey because we are collecting data right now. We have a bunch of really cool stuff in there, monitoring and observability, cloud platform, database, reliability.

**Matty:** [00:36:32] How long is the survey open? How long are you collecting data?

**Nicole:** It's open until June 8th.

**Matty:** Okay. So, we'll put a link to it in the show notes.

**Nicole:** We'll put a link in the show notes. Where am I? I will be around. I'm keynoting DevOps Days Toronto. I'm keynoting Velocity San Jose. DORA is kind of around, but I'm really, really excited. I'm gonna go back to the survey this year because we're partnering with Google. Cloud this year. So, we've got a bunch of really, really cool stuff that we're investigating this year, and I think it's going to be— so, I was talking to— so, we partner up with Jez Humble and Gene Kim, and Gene was like, you know, maybe we shouldn't do it this year because, like, I think the 2017 report was the best it's ever been. And then, he got through research design this year, and he's like, I take it back.

**Matty:** This year is amazing.

**Nicole:** So, I'm really excited about what we have coming.

**Matty:** Awesome. And then, you have a book?

**Nicole:** Oh, and the book, Accelerate, is the science of lean software and DevOps, building and scaling high-performing technology organizations. For people who are here, you can see, and tomorrow we're handing it out. VictorOps was lovely and sponsored a book signing, so we'll have a whole bunch of free ones here. If you're just tuning in, sorry, show up somewhere, we're handing out a bunch of free all over. Martin Fowler called it the software book of the year. Adrian Cockcroft said it's one of the best books he's only recommending for this year. So, I'm really excited.

**Matty:** [00:38:00] I called it a book that I bought on Kindle and haven't read yet.

**Nicole:** Yes. That launched March 27th.

**Matty:** Fantastic. So, great. So, I want to thank the guests that we had on the show. I'd like to thank the venue, the DevOps Days Salt Lake City, for letting us have the space. For everybody in the audience, give yourself a hand for being part of this. The show notes for this can be found eventually at restofdevops.com/devopsdaysaltlakecity.

**Nicole:** Thanks, Alia, for the crown.

**Matty:** Oh, yeah. Same one. There was a DevOps polar bear. There's all sorts of animals in DevOps. We got yaks, we got goats. Kote talks about donkeys or something somehow. He tried to do that once, but I like polar bears. I like the DevOps polar bear. I think we need to make that a thing. So, we'll talk about that. I'm sure we'll get a picture. I got a selfie with the DevOps polar bear, so we'll put that up on the show notes. So, I'm Matty, @MattStratton on Twitter.

**Nicole:** [00:39:06] And I'm Nicole Forsgren, @NicoleFV.

**Matty:** We are Arrested DevOps, and remember, there's always DevOps in the banana stand. Oh, you did that better than the people who are really on the show.

**Matthew:** All right, keep standing.

**Matty:** Thank you, everyone.
