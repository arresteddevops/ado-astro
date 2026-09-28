**Matty:** [00:00:07] Welcome to Arrested DevOps, episode 29, Hiring in a Post-DevOps World. I'm your co-host, Matt Stratton, @MattStratton on Twitter.

**Trevor:** And I'm your co-host, Trevor Hess, @TrevorGHess on Twitter.

**Matty:** Arrested DevOps is brought to you by 10th Magnitude, a cloud services company that figures if you're listening to this podcast, then you are pretty cool. You can find out about joining their cloud services team at arresteddevops.com/xm.

**Trevor:** We all know that being on call sucks, but what if there was a tool out there that allowed you to route incidents to the right team, mention specific people to ask for help, and hop in to chat with your team from easy-to-decipher incident timelines that give you full context on what's happening? That tool is VictorOps, and they're different. From setting up global on-call rotations to creating a postmortem report, VictorOps is there with you through every step of the incident lifecycle. Our real-time collaboration platform helps your team solve problems faster. Sign up for a 14-day free trial to see how we're making on-call suck less. Visit arresteddevops.com/victorops to sign up.

**Matty:** [00:01:14] This episode is also brought to you by Datadog, a monitoring service for scaling cloud infrastructures that bridges together data from servers, databases, apps, and other tools. Datadog provides dev and ops teams with insights from their cloud environments that keep applications running smoothly. Datadog is available for a 14-day free trial at arresteddevops.com/datadog29, and they are hiring.

**Trevor:** If you're into that IRC thing, you can find us on Freenode in channel Arrested DevOps during the show or on Twitter @ArrestedDevOps with questions for the panel.

**Matty:** So, at DevOps Days Ghent back in 2014, last year, there was a— comments were made, kind of jokingly, maybe seriously, that we are living in a post-DevOps world. So we want to talk about some of the challenges in hiring for DevOps-related jobs. We've got a panel on all sides of the table, from recruiting, from hiring, and also just some rabble-rousing about why you should stop looking for ninjas and rock stars. And basically, that was the impetus or catalyst for this episode. My friend Josh was ranting to me about how everybody wants ninjas and rock stars. And there was a specific job posting that we were just laughing about. And we decided we needed to do an episode about it. So here we go. Let's introduce our panel. First, we have a returning guest that I'm really glad that he's able to make it, because I know he wasn't feeling well the other day. So this is our good pal Mike Fiedler. So Mike, can you give us kind of a quick intro into your role in hiring people?

**Mike:** [00:02:44] Absolutely. Hi, I'm glad to be back. It's always fun to come guest with some really cool people. Mike Fiedler, I'm the Director of Technical Operations at Datadog. As director of the team, I deal a lot with trying to find the right people to hire into our team. So that involves both dealing with recruiters, dealing with people submitting resumes, and just overall networking. To try and find new recruits, as well as guiding them through the recruiting process and then ultimately working with the team to make the decision to hire people.

**Matty:** Awesome.

**Trevor:** And we also have Jill Jubinski of DigitalOcean. Jill, what's your role and why am I an asshole for saying you have a background in DevOps and recruiting?

**Jill:** Hey guys, thanks so much for having me on. So I am the manager of technical recruiting over at DigitalOcean. And I am involved in all things recruiting. So from sourcing candidates and those horrible emails, cold emails that everybody hates getting from recruiters, we'll talk more about those later, to closing candidates and onboarding. I've been doing this for the DevOps recruiting thing for about 4 years now. So yeah, excited to talk more about it. And you're just an asshole in general.

**Matty:** [00:04:02] So fantastic. This is what happens when we read our script, the Google Notes, literally. Also, Jill is like one of the most fun people to follow on Twitter.

**Jill:** Yeah, I'm @JillJubs, so J-I-L-L-J-U-B-S, and I can't have a lower third because Google hates me right now.

**Matty:** So yeah, it makes you feel better, our next guest doesn't have one either. So finally, the catalyst for this episode, professional rabble-rouser and technology neophyte Josh Hertz. So, Josh, how do you fit into this conversation?

**Josh:** I don't know. I drink beers with Matt whenever he's in town, and we got to talking about recruiters and some of the recruiting emails I've gotten, that he got, and various people we know got. Also, job postings about DevOps that are not being terribly accurate. But I work in Los Angeles for a company, and I'm also the system administrator for CostasXotaPodcast.com. And rabble-rousing. I don't have a lower third either because Google hates me as much as it hates Jill.

**Matty:** [00:05:07] Yes. So one of the questions I kind of want to throw out for the panel is, when we're trying to hire someone into this, this new world of DevOps, what are some of the biggest hiring challenges that you've run into? Either Jill or Mike could jump in with that.

**Mike:** I think one of the biggest problems that we face today is the job description is entirely too wide and hazy because we all use words that we don't necessarily agree upon the meaning of. We all want somebody who has 20 years of experience with Docker. We want somebody who's got every DevOps tool because there's, there's a bunch of DevOps tools out there, and we want people who are both capable at doing everything and being amazing at anything. So the skill set that we kind of need and desire is very poorly defined, and we don't necessarily convey what we really want to the people who think they have what we want. So I think that's one of the biggest challenges, because you want your job postings to be attractive, you want them to show up in searches, you want them to to become available. So you use, you know, search engine optimizations, you use keywords, you use all these things, but that means you're going to get a lot of people kind of seeing the information that don't necessarily need it. So if you post for DevOps and what you're looking for is a build engineer, then, you know, you're going to have some contention with, oh, well, that's not what you kind of posted. It's I understand what you're looking for, but let's use words that we all agree on. And since this term DevOps is still something that we don't all kind of agree on, that just makes everything a lot harder.

**Jill:** [00:07:00] I totally agree. In general, it's just a super broad set. And I mean, we know from being in the community that this word DevOps is meaningless, basically. It's just something that— so we have things to make fun of in general. But yeah, so I mean, and at every company it's something different. So in some companies they use DevOps for support. Sometimes they use DevOps for engineers. Sometimes for developers. So being able to understand what the needs of the company are and the experiences that we actually need to do the job and not just have all those crazy buzzwords is really important and hard to do.

**Matty:** Yeah, I remember that this was something that I brought up on an earlier episode. I don't remember exactly what we were talking about, but it was kind of my comment, and I've said this before, that I find it really amusing that no one's hiring sysadmins in Chicago anymore. They're all hiring DevOps engineers. But then you read the job description and it's like, support, you know, 50 Windows 2000 servers and change backup tapes and assign group policies. You know, I'm like, okay, it's just a sysadmin. Again, there's nothing wrong with being a sysadmin. Just a sysadmin. I just realized that sounded shitty. But it's a sysadmin job. And this is kind of, to me, where I kind of wonder about the cycle of it. Is it the thing of that from a sourcing perspective, is it that, well, no one's going to want to look for a sysadmin job? People are going to want a title that's cool and awesome, so we better say that's what we do. At the same time, you've got people saying, well, I want to say that's what I do, so I want to go get that job. And then the thing, though, is everybody ends up disappointed. Because you're not doing that type of work. I made the joke, and I think I did talk about this on an episode once, where I ended up talking to— I got a cold call recruiter for a DevOps engineer job and ended up talking to her for like 25 minutes when I was in a cab about why the job posting was bad. It wasn't a yelling, screaming rant. It was kind of a, let me tell you in my opinion why this is a problem. And she explained in her position, because it was contract or whatever, she's like, hey, I have no control over what my client wants to call this thing. And I was like, that's cool, but what you can do is you can show the proper— if you're talking to a candidate who's going to do the kind of stuff that you want, when you just very quickly describe what the work is. Because also that's the thing, I see a lot of these posts, they're like, all I hear is we're hiring someone to lead our DevOps team. I get a lot of those. We're looking for a senior DevOps engineer. And they don't tell me what the job is. And I'm OK with calling it whatever you want. I guess I'm over that rant. I'm over the fuck it, I don't care what you call it. But describe it. And again, to Mike's point, if what you really want is a build engineer, and for whatever reason you want to call that a senior DevOps engineer within your organization, awesome. But make sure that right away— job descriptions need to be really specific, I feel like. Not like, help us transform our organization using critical processes and synergies and whatever. It would be like, no, we use Jenkins. I don't know.

**Mike:** [00:10:14] I think part of the problem is that at some point in the past 10 years, the job title of system administrator became a dirty, dirty badge. Like you said, nobody is hiring systems administrators anymore. Because, A, you can't go to school to become a systems administrator. I mean, there's like 2 courses in 2 universities, and like there's very limited resources to train for this kind of job. Most of the experience you get is on-the-job training, and you kind of have to fall into this kind of role. But at some point, I think there was a mind shift as more and more companies became internet-focused or internet-connected where they needed people with an operational mindset to sustain a company. And up until that point, the only people you had who knew how to run servers were systems administrators, and they were busy running the mail servers and the web servers for the corporate side of the company, and they hated everybody because running a mail server is usually not very much fun. So the system administrator badge became something that nobody wanted to carry anymore because it's not a sexy job title. So then, you know, oh wait, there's this other term we can apply, it's DevOps. Oh, we can be a DevOps and then, you know, we can be this other thing. We can be, oh wait, not only can we be a DevOps, we can be a DevOps ninja.

**Matty:** [00:11:43] Yeah, I remember like the transition from system administrator to system engineer in states where you're allowed to do that, right, where you can use that term. I remember going through that in a position where we, you know, again, there was nothing wrong with it, but it was like you said, well, sysadmin seemed like the lower thing. And I was thinking like when, you know, when you talked earlier, Mike, about this like, hey, we put things that say you must have 10 years experience with Docker, and I'm like, I kind of feel like that's not really a new problem. You know, I remember, you know, jokes and, you know, seeing job posts in 2008 saying you must have 5 years experience with Windows 2008. Which those are especially hilarious because I'm like, oh my God, it's a year number. Even if you don't know versions, you should be able to figure that one out.

**Jill:** Yeah, you don't have to be a dumb recruiter to even know that.

**Josh:** In my experience, I started out as a sysadmin, and then as I grew my skill set, I moved away from maintenance tasks we normally associate with system administration onto a system engineer role where I was now designing systems and designing things. To scale. I think that adding the label DevOps kind of throws it in to say, okay, well, you're doing some DevOps concepts like continuous integration, configuration management, all those sexy DevOps tools that we use on a daily basis that make our lives a lot easier.

**Matty:** [00:13:01] I think you're right, Josh. I mean, like, I didn't want to sort of give this impression that, like, system engineer was just a nicer way to say sysadmin. That was actually part of the problem, is I think when you actually are a system engineer, you are doing a broader scale type of work than sysadmin. But to Mike's point, when sysadmin became like this server janitor kind of job title, right, this maintenance title that even though it's super essential, then it was like, we have to come up with something new so that people will still want to do this kind of work. And applying, you know, I still go to this like, what does it mean to be, you know, and we brought this up on, you know, I kind of asked the DevOps subreddit about this and it was a huge You know, it spurred a whole lot of controversy— or not controversy, just a lot of comments on a pretty quiet subreddit. So I'm pretty proud of that one. So there are a couple things that came up in that. There's actually one specific thing that I kinda like. So we're talking about this idea of ninjas and rock stars, right? So we talk— and I've been so guilty of this myself. I mean, I look back and I look at job postings that I created years ago, and I would say like, are you, you know, do you have rock star skills with whatever? Because you want to make it sound sexy. But someone with the Reddit user LinuxyDave on r/DevOps, he said, ninja and rock star are code words for you will be one person doing the job of an 8-person team.

**Mike:** [00:14:20] So the whole rock stars and ninjas thing has been around for, you know, a while, and I think the rock star thing originally applied to, you know, developers. You want to hire rock star developers, right? Because you want them to be amazing. You want them to stand out and be rock stars. But then, you know, if you think about that term, like, a rock star is a single person who stands in the spotlight and then are typically supported by this whole group of other people. But if you're not there, if you don't have that support, then you're just a rock star with no band. Then, you know, why do I want to hire just a rock star if I don't have a band for them to play with, or if they excel at just stepping out into the spotlight on their own? I actually want somebody more along the lines of like a tenor in a choir. You know, somebody who harmonizes well with everyone else and who can augment and improve the team as a whole. So the whole, oh, I want a rock star, it immediately conveys the wrong idea of I want somebody who is better than everyone else that I have. How does that make everyone else you have feel? It's, oh, well crap, they're not good enough. I want somebody better than all of you. You know, that's a terrible spot to put people in. Absolutely.

**Josh:** [00:15:41] It seems like you want a DevOps session musician more than you want a DevOps rock star.

**Matty:** Yeah. You don't want a DevOps Axl Rose is really what it boils down to.

**Jill:** Yeah, it definitely gives the wrong connotation of hiring that one asshole on your team, which nobody wants to do, or the majority of us don't want to do. But I just think that the team player thing in general, I know it's not as sexy, but that is really what we're looking for on teams, and it's hard to find for sure.

**Josh:** Well, I think DevOps ultimately is all about teamwork, because you're working— your developers and your operations team, they're working together. And a rock star is not someone who works together. I guess if you're a startup and you're looking for one guy to do everything, you do want that rock star. But I think a lot of teams or recruiters that don't understand the sort of DevOps mentality of working as a team to deliver the best you can as a team are kind of losing meaning there.

**Jill:** Mike, you were talking about you don't want to hire someone better than everyone else. I think there's a different way to look at it, too, where a lot of people and a lot of teams— and I can't remember, someone from Google or something wrote an article about this— about always wanting your next hire to be one up from everyone else. I think that's a definite plus. So I just wanted to reiterate that, to bring maybe a tool or a skill set that the rest of the team doesn't have, but to be able to knowledge share and then in turn move everybody else up.

**Mike:** [00:17:04] No, don't get me wrong, Jill. It's not that I don't think that that's a good idea. I think you should always hire and improve your team. It's the way you convey that to the rest of the team is, oh, you guys are all now playing second string to Barry, who's going to be amazing and just going to, you know, all the stuff that you guys have been— What's that?

**Trevor:** You're all bass players.

**Mike:** You're all bass players. That's exactly it, right? So I think, yes, you should always try to hire the best people you can. And if they are better in some way, in some skill, in something than some of the people you currently have, that's great. But I don't think that saying, oh, this guy is a super ninja and he's going to save us, or this gal is a what is it, a sparkly DevOps princess unicorn plus 7 sword can win everything. I think that conveys the wrong idea.

**Jill:** Agreed. Plus, all those buzzwords, ninja, rock star, I was talking to my engineers at work the other day about it. I mean, it's just so utterly lame that it's such a turn-off for most engineers if you're reading a job description to see that.

**Matty:** [00:18:11] Yeah. It's funny. I think last month I was visiting our old pals at 10th Magnitude, and I was talking to Shannon, who does a lot of the recruiting stuff over there, and was talking about putting up an ad, just sort of like a banner ad that was about— we got into the conversation about ninjas and rock stars, and I kind of talked about this. Oh, and one of them was— so there was an ad, and it was actually going to be on the ADO site, and it talked about a rock star. And I'm like, you can't do that, because we're about to have an episode where we completely make fun of that. And she's like, oh. And so we talked about it, and then kind of moved it around to that the ad is really not— and again, I'm going to get the exact verbiage wrong, but it's more like not hiring ninjas or rock stars or unicorns, just really good developers. And like, I was like, that's actually kind of an interesting way to brand that, which is to say like, we are cognizant of the fact that all this stuff is kind of silly. And like, Jill, like you said, it's become cliché, it's become kind of a different kind of a thing. So you can kind of, when you're sourcing, you can almost turn it on its head, you know, and kind of wink at it, I think. And I'm not just saying that because it was my idea. I also think I wanted to talk about like that in addition to Mike, to what you said about what it says to the rest of the team is I think that when an organization says we want rock stars, they're indicators of hero culture, right, which is something that— so Jennifer Davis has given a talk many times now called From Hero to Zero, and we'll put a link in the show notes to it, and it talks about this idea of That, and this is the thing that I think about in my career, has always been we think about being heroes. We think about like we want the people that save the day. You know, I remember distinctly like kind of a, it was like a Microsoft poster that said, how does it feel to save the day every day? You know, not all heroes wear capes. And that's how we thought about doing this kind of work before. And I think that lends itself into both hero culture and into why we think that's how we're going to source people. And I think that's really potentially damaging, but I wonder, do you think that— I guess who needs to get the message, right? Do you think candidates are still liking to hear this because it makes them feel like they're going to go do something, they really think they're going to go do something awesome, or do you think it's just the message needs to get caught up to the people that are writing these job descriptions?

**Mike:** [00:20:26] So I think there's a couple different categories of job workplaces or positions that companies need to hire for that need different types of skill sets. If you're a 3 to 8 person startup and you're hiring your first person to cover your operations and your systems, you may very well want somebody who's got that kind of hero complex, who's willing to, you know, work 120 hours a week, who just lives for something to fail so that way they can jump in and save the day. Because that's what your company needs at that moment, because you haven't had the time to bootstrap it with all of the resilience and operational knowledge that a growing company may need. But as a company grows, you know, and you want to expand to a team, or you need the hero kind of vibe to be like, all right, we don't need a hero anymore, we need stable kind of operations, then you're looking for a different caliber of individual. So I think there's still a place for that kind of mentality, but there's also very much a time for it. If you've got a company of, you know, 200-300 people and you've got, you know, a 30-person operations team and you've got a hero on that team, they're quickly going to be not as popular amongst their peers because of the way they exhibit this heroism thing where they maybe won't build in the stability that they could. Maybe it's even subconscious, so that way an emergency happens that only they can solve. Watch the talk. She goes into this a lot deeper. Jennifer goes into this a lot deeper than I can. There's a time and place for heroism, and your company is going to have to make that kind of decision of Okay, we're over the firefighting hump. We need to actually produce viable, stable environments. If this guy ever goes on vacation, then we've got to be able to sustain that.

**Matty:** [00:22:35] Absolutely. We can have a couple little— move into a little less serious topic for a little bit. Thinking about recruiter fail, and that's not to— I don't really want to pick on recruiters because It's a really crappy job, I'm sure.

**Trevor:** Jill, how many people do you reach out to in a given day?

**Jill:** Not very many. So I am super particular about who I reach out to.

**Matty:** She has people to do that for her, Trevor.

**Jill:** No.

**Trevor:** But I mean, just to get a sense of what recruiters are going through when you get some of these odd requests. Because you've already mentioned where sometimes you don't have control over the message you convey for titles and such.

**Matty:** Well, I think it's different in a case like— and I'm not trying to— but like when I gave that, it was an idea, it was a contract recruiter. So they were working for— there was something they couldn't do. So actually, that's a good question. When you're part of the company like you are, Jill, right, where you're not just being paid to just go find somebody, how do you help kind of shape that?

**Jill:** [00:23:42] Yeah, so we work with the teams to create our job postings as well, along with all of our messaging that we send out to candidates. That's all our own. And I found that for engineer hiring, it works best for me. So in a given week, we're hiring super heavily at Deo for software engineers, mostly focusing on backend infrastructure stuff. But there are few and far between of those types of people, especially like we're working in Go, which is like it's like, you know, asking for Microsoft 2008, 5 years of experience shortly after. It just doesn't happen that much. But anyway, so our messaging is super particular. So in a given week, I might reach out to 15 to 20 engineers. They all get emails that are special to them because, you know, every engineer is just their own special snowflake. And so my messaging is very particular just because I find that's what works best in the area. And gosh, everybody sees all the harshness that recruiters get on Twitter and on Tumblr and all that kind of stuff. But it is much easier when you're in-house. If you're an agency recruiter, it's all about numbers. And I mean, your day-to-day living depends on those numbers. So that's where those like mass emails come from, because it's just a game at that point.

**Josh:** [00:24:57] Do you find that targeting your recruitment letters gets you a better return from the people you're reaching out to?

**Jill:** 100%. Yeah. So I will get a lot more. It doesn't necessarily mean that when they write back, they're like, oh yes, like DO is the place that I want to be, or Rackspace when I worked there, but they're much more receptive to responding in general and being open and just like making that connection, which is all I really want to do in the long run, is to build out my network greater, which is— I've kind of done on Twitter as well, just so that if and when you, your friend, your friend's friend is looking for a job, you'll think of a non-shitty recruiter to hand them off to.

**Matty:** Yeah, I think that's definitely true. And kind of going to the from a targeted perspective, as a person who, when I get those, when I get something that I feel like is custom and not customized to the way of like you think about when people talk about like online dating profiles, right, where they might go through and they're like, I'm gonna find a couple of the words so you can think I read your thing, but it's still my form letter that I send you. Like, we know when we get those, right? But I'll have ones where they very specific, I can tell they were like, hey, you do this thing as chef and I see you did this over at apartments and that's kind of cool. But then the one that kind of annoys me is my LinkedIn very specifically says, I'm sure your opportunity is amazing and your company is outstanding. I love my job. I guarantee I have zero interest in your opportunity. And then I went through this with one recently where I was— obviously she had read my profile. It was a very targeted note, but then it was still this. And I wrote back and I said, And her response was, well, sometimes people put that up there so they can lay low for their existing employer, so it's always worth a shot. I'm like, that's actually kind of— I don't know. I thought it was kind of rude because I'm like, you're— I don't know.

**Trevor:** [00:26:42] So Matt, how do you remove that from your profile?

**Matty:** How do I remove what?

**Trevor:** Saying that you're very happy where you're at.

**Matty:** Oh, without anybody noticing?

**Trevor:** And all of a sudden Jeff will be like, wait a minute. Now we all know Matt's tell.

**Matty:** That's right, that's true. But then, but I wanted to think to Jill, when your response though is that I had the, the thing where recently I had a friend who was looking for a new opportunity and he came to me and was like, hey, do you know anything? And I was able, I kind of went back and I looked through my InMails, my messages, and I was like, here's some things I got and from people who I was like, this sounds like a cool opportunity. And I was, to your point, I was very open to saying like, hey, Remember when you emailed me about this thing and I wasn't in for it? Here's a person. And there's recruiters that I've had relationships with for years that have never placed me in a job. And, you know, I have, I have one that every, I don't know, every 6 months I get a note and, you know, she'll be like, hey, I'm hiring for this kind of position and I don't really know what chef is, or I don't know what puppeteer or whatever. You got 5 minutes to jump on a call and help me out? I'm like, yeah, you know what, I'll do it because You've been polite to me and respectful. So I think it's useful to have that network.

**Jill:** [00:27:53] Yeah, I think it's all about really knowing your audience. And some recruiters just don't take the time to do that. I mean, engineers are very particular. They don't have strong opinions or anything like that.

**Mike:** You get me. You totally get me.

**Jill:** But, you know, you want to know who you're interacting with. And so when all of these, you know, things come out about the wrong way for recruiters to do it, and yet recruiters keep doing it, it's a little bit frustrating on my end to see that because it gives me a bad rap, and I don't want that.

**Matty:** No, I think it— like you said, it's also really easy to play, you know, armchair recruiter, right? And be like, oh, this is clearly the wrong— you know, because again, and you talked about this too, you're like people are different, you know, sometimes they want to be reached in different ways. And so I don't— while I get annoyed by, you know, kind of the blasts, or I get— and, you know, some of the ones that kind of really annoy me are the, hey, I have a contract-to-hire position in Virginia for, you know, help desk administrator, you know, the help desk position. I'm like, come on, at least get close.

**Mike:** [00:29:03] At that point, isn't it basically just spam?

**Trevor:** Yeah.

**Mike:** That's exactly what it is. They might as well be selling you Viagra at that point. It's unsolicited email. You didn't ask for it. And you've clearly stated that you aren't interested in this. I love the ones who will do the cursory lookup. They'll Google you really briefly. And then they'll send— I get this one at least once a month about, hey, Mike, I've looked at your GitHub. I have this super attractive Ruby on Rails front-end developer thing. And I'm like, all right, should I respond to this? And waste my time, or should I just move on with my life? And 9 times out of 10, I just move on because it's like, you clearly haven't done the homework. I am not a Ruby on Rails front-end developer by any stretch of imagination.

**Jill:** Yeah, those are my favorite too. A lot of my engineers and sysadmins will send me the funny emails they get from other recruiters. Sometimes if I have a couple minutes and I feel like getting a laugh, I'll send a cold email to my coworkers. Asking them if they want a Drupal job.

**Matty:** [00:30:13] So on the other side of that, Jill, so like what's the— I don't want to say like candidate fail, but where do you kind of see the other piece when people are— I mean, I think we've probably been in positions, those of us who've hired people before, where, you know, kind of, yeah, it's good to aim high, but sometimes you're like, whoa. But where are some of the mistakes or some of the places when people are looking, people It's the other side, like, because now we've been kind of a little arrogant on this show, like, oh, we are— no recruiter should talk to us. I mean, we will talk to you, you know, because we are the high, you know, these immensely, you know, valuable human beings, which, I mean, we are, but the truth is I'm also sure everybody on this show at one point or another has been looking for a job, you know, and I'm curious, so I want to talk about—

**Trevor:** I actively don't seek jobs.

**Matty:** You don't actively seek jobs, Trevor?

**Trevor:** No, I said I actively don't seek jobs.

**Matty:** You actively don't seek— I'm confused.

**Josh:** So actively not seeking.

**Matty:** There you go, it'll fall in your lap. It's like love, Trevor, it'll happen when you're not looking for it.

**Josh:** [00:31:16] He keeps a webpage open and then purposely looks away while he scrolls through things.

**Matty:** So maybe telling the story in the case of what not to do, because that might be a little funnier. What are some of the what not to do when you're looking to move into these types of DevOps-type positions? And I'll leave that to, you know, because I know, Mike, you hire around this and Jill, obviously you're kind of in these roles. What would you say? I don't want to say advice, but—

**Jill:** Yeah, I would say it's interesting, like screening resumes, people who actively apply, because a resume has kind of become equivalent to how I think. And we were talking about job descriptions is they're so like overarching and broad and buzzwordy. And it doesn't really tell me anything about you. So it's on— what I have to do is, of course, do some Googling to find out the real you, about your GitHub, about your Twitter, so that I can get a better understanding of you. But yeah, it's hard because resumes don't really convey that. But just to make sure that your resume isn't full of those buzzwords or full of those things that you've touched but you haven't actually dug into, or they were done on your team and you didn't really play a part, because those will be figured out. And then it just makes you look bad and feel weird.

**Mike:** [00:32:29] Yeah, and to add on to that, I'd say be honest. Like Jill said, if you touched on a topic and you didn't learn it, don't put it on your resume. If you wrote 3 lines of Perl, I don't think you're qualified to put Perl as a skilled language on your resume. You don't know Perl.

**Matty:** I like to say on my resume things I'm familiar with. I'm familiar. I've seen it. I've seen it.

**Josh:** Yeah.

**Mike:** When I see that resume and I'm going to see, oh, okay, that looks esoteric, that looks like something interesting, I'm going to ask you about it. And if you flounder around and don't know what you're talking about, that's going to come out really quick. And then that's going to immediately kind of like take that— it's not even an interview at that point, that's a phone screen— and that's going to take a nosedive. And now we're just wasting each other's time. So Just be honest about what you know, about what you want to do. Like Jill said, doing some background research on people is time-consuming, but it's also, if you're not upfront about who you are on your resume, then we have to look, who are you? Because that's ultimately who you want to hire, is you want to hire a person, not a list of, I know how to read Perl, I know how to debug a 3PAR. Those aren't the things you want. You're hiring a person.

**Trevor:** [00:33:54] On the note of honesty as well, if you're going through a multi-part interview and in the first interview you say you don't know something explicitly, don't come back an hour later and pretend you're an expert for the next interviewer because the interviewers do talk to each other.

**Jill:** Yeah, that— it's crazy. So we'll have feedback sessions afterwards and you'll, with some people, get a different answer for like every group and people are like, wait a second, like he didn't know that then. She knows it now, whatever. Yeah, that looks weird.

**Josh:** I had a candidate— I've done interviews for various companies I've worked for over the years. But we had one candidate who put expert on the OSI model on their resume. And I was like, OK, well, what are the 7 layers of the OSI model? And they got 3 of them. And they were just shooting in the dark. They had no idea what they were talking about.

**Matty:** Well, if they were a baseball player, that would have been pretty good.

**Josh:** 3 out of 7?

**Matty:** Yeah.

**Josh:** I don't understand sports well.

**Matty:** Okay. That's a pretty good batting average, but yeah.

**Mike:** [00:34:54] But yeah, calling yourself an expert and not even being able to name the 7, much less in order.

**Matty:** It's a simplified OSI model.

**Mike:** It's just an OS model.

**Josh:** Just leaving out the unimportant parts. Yeah, there you go.

**Matty:** Just the I.

**Trevor:** But also, another thing too is How do you— I mean, it's hard too sometimes being— I don't think I interview well. I stumble and I will on the spot forget things that I've done repeatedly. There's that side of interviewing also.

**Matty:** Well, and I think that that goes also into kind of like how you do interview. This could be a whole other thing. And I think about when I interview people, you know, again, I'm going to tech you, but I'm not going to tech you on stuff that I know you're gonna store in the Google machine, right? You know, you know, it's, it's more of— I think about like, do you understand it, right? So if I, you know— but again, to Josh's point, if you're gonna say you know something, especially a thing like that, that's a— there is no general way of knowing it. But, you know, I would think about knowing every particular flag to a certain command, you know, that, that's not a thing. But I'm gonna say like, what are some of the things you can do with that? Or why would you do it? You know, and yeah, because the reality is if you don't run it every single time, you're going to probably do/? and see what they are, right? You know, it's the XKCD, like, you know, this bomb can only be defused if you type the right flags to tar in the correct order, you know, the first time. Yeah.

**Jill:** [00:36:24] Yeah.

**Matty:** So I think they're more about ID because again, if it's just that you can like sort of spit stuff back, but it probably depends upon the position too, to a point. I don't know. And I feel like Developers, maybe it's a little different. Like, I've seen developer tests. I don't know, Trevor, have you kind of gone through those where they're like—

**Trevor:** I've actually never had to take a developer test. I've done the whiteboarding stuff, and the thing I've learned about the whiteboarding sessions, and now that I've done some myself as well, is contrary to what I was expecting coming into my interviews, it's not actually about like putting the right answer on the board. It's all about get like How do you get to anywhere in those answers?

**Mike:** That's right.

**Matty:** Yeah.

**Mike:** So I mean—

**Trevor:** I remember going into those interviews and getting those questions and thinking, like, oh god, I don't remember the exact arguments for this method, and thinking that that was going to be the thing that fails me because I didn't memorize the MSDN library.

**Josh:** Yeah.

**Mike:** So I mean, it's like Matt said. We could do a whole episode on how to interview for the operations-style position. It's very different from a developer-oriented position. Now obviously in this day and age, we expect everybody we hire to be able to have some coding ability, if only to read code and kind of like understand what it's doing. So that way they can, you know, find out where a problem may be and then triage from there. But a lot of it is just figuring out how people think in a new situation. Because the way we execute things is we take whatever knowledge we have at the moment We bootstrap from there and figure out the next thing. A lot of it is trial and error, scientific method, but a lot of it is just how do you approach solving a problem. Any kind of interviewee should expect to have a bunch of problems thrown at them. One that I take into every interview is a problem that there is no right answer. I just want to keep throwing monkey wrenches into whatever solution the candidate has just to see how they deal with another monkey wrench. There's no right answer, but you know, let's see how you deal with adversity.

**Trevor:** [00:38:37] Your keyboard's gone, what do you do?

**Mike:** Exactly.

**Jill:** And I think that kind of tying that into the whole DevOps thing or whatever that's happening now is really smart businesses or organizations hire people with great critical thinking skills, great problem-solving skills, and that's like the core. Because the tools and the languages and whatever will continue to change. So you can't keep hiring for someone who's great at Chef or who's great with Go, because that's going to change in 3 months. So if they have the core competencies that you need and they're able to do those changes and solve problems, then that's going to be a really great hire.

**Josh:** I think it's a lot of DevOps is not necessarily just knowing things. 'Cause you need to know what you know, but you also have to have an awareness of the things that you don't know. You have to know what you don't know. And the thing that really scares me is the things I don't know, I don't know. But I think definitely being aware of things, you know, potential solutions to problems you're going to be facing, is more important than knowing all the flags to tar or knowing exactly how to grab a process PID and pipe it into a kill command that's going to restart the process and yada yada yada. There are certain nuts and bolts that don't matter. You just want to know what the overall machine is supposed to do and how to fix it when it breaks.

**Jill:** [00:39:56] Huge, huge interview pro tip. If you don't know something, admit you don't know it. Don't make it up.

**Josh:** Absolutely.

**Matty:** I think kind of— this episode has gone by really, really fast. The one thing I wanted to think about too is we've talked about the challenges. A lot of the stuff we've talked about are just generally the world of recruiting today. And some of the things don't seem like they've changed very much. They're not necessarily things about DevOps. So some of it's about what we call things and some of those challenges around like the titling and things like that. But then I want to think a little bit about if we are treating DevOps as more than just an automation job, which in some places that's what it is and great, whatever. But if we think about it truly as saying, I want to hire somebody into an organization that embraces a DevOps culture, What are some of the things that, again, like Mike said, we could have an entire episode on interview techniques and things like that on both sides. I don't want to go too deep, but just thinking about like kind of broad strokes, how do you share that? Because that's a really hard thing I think to assess is culture fit. And I don't mean like, are we going to have a good time going and drinking beers together and are we going to be buddies? But is the way that you want to work, the way that you work well, work with the way that this kind of culture change? Exists or this type of culture within our company around our DevOps.

**Josh:** [00:41:12] Are you asking for more buzzwords?

**Matty:** A lot, at least like 5 or 6 more.

**Josh:** Yeah.

**Mike:** Synergizing.

**Matty:** Synergy.

**Josh:** Vertical. I think it's hard to communicate that in a resume. Like, oh, well, I'm a problem solver. I'm a self-starter. I'm this, I'm that. Those tend to be more nebulous buzzwords that don't really help anyone get anywhere. Except maybe make the interview a lot harsher because someone didn't like a buzzword you listed. Yeah, how do you do that? How do you convey, you know, the DevOps mentality of problem solving and analytical thinking?

**Mike:** So I feel that that's something that will come across in an interview if the interviewer is posing the right questions to suss those details out. I don't think there's any words on a piece of paper that's going to tell me that this person has those abilities. It's more about, let's talk to you, see how you respond, see how you deal with adversity, and then not only my opinion but the opinion of other people who you may be working with. We try to interview around to the rest of the team so that way, you know, if everybody on the team has talked to this person and they're like, all right, yeah, thumbs up, then everybody's kind of committed.

**Trevor:** [00:42:25] That's getting in the door. You have to get past that first smokescreen of the resume to even get to that part of the conversation. If I suck at writing my resume and I'm the best person in the world, you're never going to look at my resume. You're never going to talk to me and find out that I can answer all those questions and respond in all those situations.

**Matty:** I think, though, to Josh's—

**Trevor:** I think it's important to ask that question of what do we put on a resume to try and at least convey the semblance of the idea so that you're not just put in the out pile?

**Matty:** I think what you do is, to me, and again thinking from reading resumes, to Josh's point, like listing qualities of yourself is just all bullshit. I'm like, to me, I'm like, whatever, I just care about what you did. And it's not so much because I care about that, but because I want— that's what's gonna express that thing. So I would look at stuff like if I was saying, okay, our culture is one where you know, we have, you know, that we work— our operations folks work really closely with the development folks and they help do X, Y, and Z. I'm gonna look at what you did in your last job and see if you did that. Even because the thing is, if I know that's a culture, if that's the thing that I want, even if that's not exactly how it was, I'm gonna probably try to find any bit of experience I had that shows that I want that, right? Like, I may work in the place that has the biggest silos in the world. I'm like, I want to be like Fuck silos, I wanna go be desiloed. But what I wanna do to express that is maybe just look for what is something I did in my current position or previous position that's an indicator, right? Like that's how I would look at it. 'Cause anybody can say, oh, I have a strong work ethic. And with that, we need to wrap it up 'cause we don't have Bridget on the show who will just let us talk forever and ever and ever. So we'll move into our checkouts. The one thing I do wanna mention though is—

**Trevor:** [00:44:15] So I do wanna ask one question though before you— So coming out of college, the resume advice that came with that was you need to have an objective statement on your resume that orally pleasures the company you're going to— you're trying to work for. How do you guys feel about that as a concept? Or like Matt said, should we really just be dumping experience on there?

**Jill:** I want to see experience. I think one thing that's telling about a person, both their skill set and a little bit of their personality, is contributing to open source. Tell me what you've done in open source, and then I can go look at it and see you talking to people and what you've done. I think that's a huge, huge plus for any resume.

**Mike:** That's a good point.

**Matty:** I think even if you're not working with open source technologies and if your company— I've heard people give all the excuses. You should be able to at least do something silly, even if it's whitespace fixes.

**Mike:** Beyond just open source, I'd say one of the things that is super difficult is that in this field, we value experience. And you're not going to get the experience of running 50,000 servers by running your college's, you know, 20-server lab. So, you know, experience coming out of college, that's super hard. So there's not a whole lot of like junior DevOps that have a lot of experience, there's typically, oh, you want that kind of junior position because you want a foot in the door. So you've got your objective statement. I want to understand why you want to get into operations instead of, you know, you were trained in computer science as a developer. Why do you want to do this other job, which, I mean, I kind of love, but many other people find very not as fun? So it's what is the motivating factor there? So I guess it's like an objective or a mission statement of why do you want to do this as opposed to anything else that you could be doing. Like, that's kind of an interesting essay, if you will. I think another point, Trevor, of what to put on your resume— a lot of people build one resume and then, just like the recruiters, farm out the same email to all candidates. If you have a company in mind and you see a job position, tweak your resume for that position, right? Have 5 versions of your resume that will show off these particular abilities and experiences so that way the person on the other side receiving that is going, oh, okay, you do kind of map what, you know, your experience maps to what we're looking for, and it's not the cookie-cutter resume that you've sent, you know, to every other company.

**Trevor:** [00:47:01] Throw all the shit at the wall and see what sticks.

**Jill:** And when you do that, make sure that you send the right resume to the right company, because that's a huge candidate fail I see quite often, actually. I want to work at Google because— I'm like, but I don't work for Google.

**Josh:** Yeah, to kind of echo that sentiment, I remember early in my career when I was looking at potential places to work, different places were heading different directions with the way they were managing their technology. So it was really important for me to look over my history and go, Oh, well, I did a lot of continuous integration that I don't mention very much of. This company is headed in that direction. I should highlight everything I've done with continuous integration, configuration management, or anything that makes you more appealing to that job. On the note of like an objective or summary, I can't remember the last time I seriously wrote a summary or objective on trying to get a job. I think my most current summary says, a DevOps rock star, 10x pirate ninja, katholical. It's just 100% snark.

**Matty:** [00:48:02] That's why Josh is endorsed for sarcasm. On that note, we're going to wrap it up. One thing before we go into the checkouts, I want to share with you we have a registration code for ChefConf. ChefConf will be March 31st through April 2nd. You can go to chef.io/chefconf. The code ADO, like for Arrested DevOps, will get you 10% off of your registration. Let's go into our checkouts. Jill, what do you have for us?

**Jill:** So I am bringing a beer to the table, which I wish I had one in my apartment now. I'm a huge beer fanatic, so my favorite winter beer is Brooklyn Black Chocolate Stout. So repping New York City and stouts, which are my favorite style. And then to have a wonderful balance, I wanted to talk about New Year. I've been trying to exercise and I've been doing these rowing classes here and they're kicking my ass, but in a fantastic way. So, you know, have a couple stouts, go row the next day. It's a fantastic mix.

**Matty:** [00:49:04] It's like work-life balance. It's beer-row balance.

**Jill:** Exactly.

**Matty:** Josh?

**Josh:** I wish I was talking about beer.

**Matty:** I was thinking, thinking about— I'm like amazed you don't have a beer pic.

**Josh:** Yeah, I'm actually endorsed for beer on LinkedIn. Anytime I hang out with Matt, I have to assess his beer situation and make recommendations because he's not a big beer guy.

**Jill:** No.

**Josh:** I wish I could get my hands on Brooklyn Beer. I'm on the West Coast, so I'm not able to. But I do have access to the brewery, so they have a lot of really awesome funky beers. This went a completely different direction. I guess my checkouts, I wanted to mention Caustic Soda Podcast, but the more I thought about it today, the less I felt like recommending it, because they talk about a lot of really horrible things. If you're curious about horribleness, like a Mythbusters for horribleness and grossness, then Caustic Soda Podcast This is for you. sort of podcast is definitely for you. I do their system administration. Also technology related, I've started using or playing with InfluxDB, which is a time series database like Graphite that doesn't take hours to set up. And it has a Graphite plugin, so you can just have your statsd Graphite backend set to the InfluxDB. I hope this makes sense to other people. But they're in alpha right now. They're in 0.8.8. They're doing a huge refactor for 0.9.0, which is going to have better clustering and stuff. It's something that's worth looking into if you've ever had to set up Graphite and wished there was something better. It has the potential to be a lot better. Other than that, I'm like, I could talk for half an hour on beer, but—

**Matty:** [00:50:37] We'll have the DevOps beer episode. It will never end. Mike, what do you have?

**Mike:** Cool. So I got a couple checkouts. My first is Opera. Opschool.org, it's an open source curriculum for learning operations. It's an ongoing project. I edit a lot of the content. It's a good place to go and check out learn articles. It's not in kind of module or unit-based learning yet. We still need help with like content development and curriculum development. But it's definitely a great wealth of information, so check it out and contribute if you can. It's on GitHub, fully open source. The other one I'd like to call out is a book— 2 books. The first book is Tubes: A Journey to the Center of the Internet. It's a book by Andrew Blum. He talks about the origins of the networked computers, the internet, and it's a really good read. For both veterans to the internet as well as newcomers. A lot of people who pick up computing today don't really know how it works, they just trust that it does. And the author kind of takes you on his journey where he goes around to kind of like find the physical locations of the internet, this place that we all kind of assume exists but can't really see or touch unless you've been inside a data center before, and then you kind of know It's all just green blinky lights. The other book I'd like to reference is The No Asshole Rule to a Civilized Workplace. It's a good book, which kind of talks about organizational culture and how to deal with kind of toxicity in the workplace, to recognize it and call it what it is. So all of those I hope will be linked in the show notes.

**Matty:** [00:52:31] They will. That's how we do. So I have 2 quick ones. One is I've been using something called Elevate. Which is a brain training app. There's some other ones I feel like I may have— I've played with these before, so I go between various ones. I think Luminosity is another one, but I've been liking Elevate, and it's kind of a daily set of mind exercises you do that are based around being able to do quick math or looking for patterns or things like that to theoretically stimulate your brain. I kind of like it, so you can find that at elevateapp.com. The other thing is, in terms of not doing awesome rowing because I need to start with just like moving more. So I'm doing the Fitbit thing again, and if you want to be Fitbit buddies, if you go to mattstratton.com/fitbit, that will send you over to my Fitbit page so we can be Fitbit buddies and you can all walk a lot more steps than I do. I've also learned that when I give demos at a customer site, I hit my steps by the middle of the day because I pace so much. And Trevor, wrap us up.

**Trevor:** All right, well, it's been a few years now, but the Decemberists are back. With a new album, What a Beautiful Terrible World, that just came out today, and it's sitting in my record player waiting for me to end this podcast.

**Matty:** [00:53:45] Do you actually have a turntable, Trevor? Yeah, it's over there.

**Jill:** That's so hipster of you.

**Mike:** I mean, can't you see his argyle sweater?

**Trevor:** It's a sweater vest, okay?

**Josh:** That's even worse.

**Jill:** It's just cold right here.

**Trevor:** There's a video I need to put a link in here for. It's Microsoft was reviewing the pull requests from the C# repository from GitHub, which was just a really interesting video to hear them discuss the pieces and the requests people were trying to put into the repository. And just kind of an odd pick, but walk around your neighborhood. Just this weekend, my girlfriend and I were walking. We decided to finally walk north from our latest apartment and discovered a new spice shop and a new comic shop and about 100 restaurants within like 3 blocks that we had no idea existed. So yeah, walk around.

**Matty:** [00:54:50] With your fishbowl. Explore. A reminder, we have a newsletter, arresteddevops.com/bananastand. We are actually starting to release our shows in conjunction with that. We've been sending them out. So actually sign up for it because there's more information about upcoming podcast episodes, interesting links about DevOps, and all that kind of fun stuff. That's at arresteddevops.com/bananastand.

**Trevor:** Thanks again to our sponsors, VictorOps and Datadog. Please check them out at arresteddevops.com/victorops and arresteddevops.com/datadog Thanks to our loyal listeners. If you enjoy Arrested DevOps, we'd appreciate it if you'd visit arresteddevops.com/itunes and leave us a review in the iTunes store.

**Matty:** Be sure to check us out at arresteddevops.com or @ArrestedDevOps on Twitter. We're always happy to get your input, ideas, problems with your life at shows@arresteddevops.com. I'm Matt, @MattStratton.

**Trevor:** And I'm Trevor, @TrevorGHess.

**Matty:** We are Arrested DevOps, and remember, there's always DevOps in the banana stand.
