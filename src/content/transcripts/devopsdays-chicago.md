**Matty:** [00:00:07] Welcome to Arrested DevOps, episode 22, DevOps Days Chicago. I am your co-host Matt Stratton, @MattStratton on Twitter.

**Trevor:** And I'm your co-host Trevor Hess, @TrevorGHess on Twitter.

**Matty:** Arrested DevOps is brought to you by TenthMagnitude, a cloud services company that figures if you're listening to this podcast, then you are pretty cool. You can find out about joining their cloud services team at 10thmagnitude.com. This episode is also sponsored by PagerDuty. PagerDuty eliminates the noise, chaos, and manual processes across the entire incident lifecycle to decrease resolution time. PagerDuty is trusted by companies like Etsy, Nike, and GitHub. To sign up for a free 30-day trial, visit arresteddevops.com/pagerduty.

**Trevor:** This episode is sponsored by Redgate Software as well. Redgate makes tools that bring the benefits of continuous delivery, safe releases, efficient development, and fast feedback to your database. Find out more about database lifecycle management, download free trials, and browse the database delivery learning program at arresteddevops.com/redgate.

**Matty:** [00:01:12] So we are coming to you from day 2 of the very first DevOps Days Chicago. We've got a full room of people who are joining us, so room, make some noise. Got some folks who are going to talk to us about their experiences. This is, as I said, the very first DevOps Days that took place in Chicago. It is the second DevOps Days in the Midwest, as the first DevOps Days in the Midwest was DevOps Days Minneapolis, and we'll have a link to our show about that in the show notes. Trevor, have you been to a DevOps Days before?

**Trevor:** No, this is my first DevOps Days, and I need to project again like I'm in theater.

**Matty:** So also joining us, normally I'm going to kind of go around people who are sitting at the table with us.

**Paul:** Paul? This is Paul Reed, @SoberBuildEng on Twitter. I'm defecting from The Ship Show and joining Arrested DevOps for one episode.

**Mark Cornick:** Hi, I'm Mark Cornick, @MarkCornick on Twitter. I was an Ignite speaker at the conference, and I'm returning to my hometown of Chicago after a long time away.

**Michael:** I'm Michael Ducy. @mfdii, the hardest Twitter handle there is. And I'm returning to Chicago after being gone from Chicago for about 7 years.

**Jason:** [00:02:24] Hey, this is Jason Hand, @JasonHand on Twitter, evangelist for VictorOps, and just sort of excited to be here at another DevOps Days event.

**Matty:** Also, this is as good a time as any to introduce the fact that Michael Ducy is the new special field correspondent for Arrested DevOps. So basically anytime there's a thing that Ducy's going to be at that Trevor and I can't be at, then we're just going to tap him and he can represent. So it's a lot of responsibility with no glamour.

**Michael:** It's kind of like I'm the Walter Cronkite of DevOps now.

**Matty:** Pretty much, yeah. I think that's a fair statement.

**Paul:** Good night and good luck. That was some other one.

**Michael:** Good night and good day.

**Matty:** Edward R. Murrow. Mark, have you been to a DevOps Days before?

**Mark Cornick:** Yes, actually. I've been on kind of a DevOps Days tour this year. I've gone to several, including the one you mentioned in Minneapolis, Boston, New York, and Pittsburgh earlier in the year. And every one I've been to has been great in its own way. For anyone who hasn't been to these DevOps Days conferences before, the way I would summarize it is it's highly focused on learning stuff. It's full of opportunities to participate. The open space format is very good for that. And it's also inexpensive. I have not paid more than $100 for a ticket to any of these conferences. So if there's one in your area and you want to go, you really should go check it out. It's, you know, the one in New York was actually only one day this year, but usually it's 2 days with a combination of invited talks in the morning and an open space in the afternoon. So, and again, it's very much focused on talking with people, learning stuff, There are sponsors, but they're not here to pitch stuff to you. They're just here to be part of it on the same terms as everyone else. So definitely something worth checking out if you've never been here before.

**Matty:** [00:04:14] So I wanted to ask too, Ducy, so you talked earlier today about kind of what you've seen as the journey or the development of DevOps in the Midwest. And I'd like to, if you wouldn't mind, kind of reiterating that exactly verbatim, word for word, what you said before.

**Michael:** Oh, okay, good. Luckily I wrote all that down. So I can do that very easily. No, it's been an interesting journey. The Midwest typically, and there's actually some data that Donnie Burkholz of Red Monk has actually put together and wrote a pretty nice blog post on, the Midwest tends to be a little bit of a laggard in technology adoption. San Francisco is, well, nobody understands where San Francisco is. They're so far in the future. Jay, Paul, do you agree with that?

**Paul:** We don't even know where we are. All the cool kids in SoMa are doing something. We don't know what it is.

**Michael:** And then New York picks up on things a little bit faster, I think, than we in the Midwest do. But what's interesting is there's been a good journey over the last 2 years of DevOps meetups getting spun up and actually being very successful. DevOps Minneapolis is actually one of the largest meetups in the country. DevOps Chicago is actually a very strong meetup as well, and we see a lot of activity there. What I don't think people really realize is, and sometimes us in Chicago don't realize it as well, or us in the Midwest, is we're doing a lot of really cool, awesome stuff here. We don't always get together to talk about it, and that is starting to change. I think the whole idea of DevOps culture and collaboration and sharing is something that we start to see that change take place.

**Paul:** [00:05:57] This is Paul. I've been to a lot of DevOps Days in different parts of the country too, and we were at Minneapolis, and I think the thing that I find most interesting about these events in the Midwest is, you know, you go to meetups in the Bay Area or in Seattle, and it's like you talk to people, and this is fine, but they're doing like Airbnb for their— for your cat, stuff like that. And there's nothing wrong with that. But what's interesting that I think, you know, Minneapolis, like Target is based there. I think people forget there's like a futures exchange in Chicago. There's a lot of really industries that are doing important things that are very related to sort of like the backbone of the country in those, those cities. And I think we often forget that. And so the topics that they are talking about and the way that they frame the problems that they have are actually very interesting and actually very important for the people on the coast. It's not just about, you know, Uber for Furbies, whatever it is, right? You know, so I think that's actually really important. You get a very different perspective and a very important perspective when you come to events.

**Michael:** [00:07:06] Like, there's a lot of large enterprises that tend to come out of the woodwork at the Midwest type events.

**Paul:** And that you didn't know were actually based there.

**Michael:** And it's like, wow. Yeah, so we saw Allstate, People from Allstate this week, Kroger, McDonald's, Kohl's.

**Matty:** Kohl's sent a lot of people. Yeah, there are a lot of people from Kohl's.

**Michael:** So it's really interesting to see like Crate and Barrel, these, these what you would see like legacy enterprise companies coming out to these events and wanting to learn and wanting to make themselves better.

**Paul:** And just very—

**Justin Smith:** that's awesome.

**Paul:** A funny story, I was talking with the gentleman that was here, like from Crate and Barrel, and, and I had just ordered wine glasses and not, 2 weeks ago, and he was asking me, really, so how was the checkout experience? And I said, actually, it wasn't that good. There was a problem. And he said, oh, this is really good feedback because we had to make a change related to how we handle cookies, blah, blah, blah, blah, blah. So we were funneling everyone through our mobile site. And then he was like, here's the test credit card number. Go place an order again and give me the order number so I can go research, like, your problem. And I was like, wow, okay, I will go do that. So it's kind of funny. You talk to people that are actually— you are using their products and services all the time. You may not even know it. And you meet them at these Midwestern DevOps Meetups. It's really cool.

**Jason:** [00:08:19] And one thing I would also point out at both Minneapolis and here, one of the things we always do at the beginning of DevOps Days is just get a show of hands. Is this your first time at a DevOps Days? And both Minneapolis and here, by far, majority of the room, this is their first time. So I think that's also a good thing. Good indicator of what's going on around here.

**Matty:** Yeah, I was really— I have to say, so I guess I didn't put the thing at the beginning of this. So I am one of the organizing committee for DevOps Days Chicago. And in a little bit, we kind of might talk a little bit about the history of how this came to be, or at least how I kind of remember that it came to be. And I'm going to mess it up, but that's okay. And I was thinking a little bit when Ducy was saying, like, you know, we're doing cool stuff and nobody talks about it. And I have to admit that I kind of sold my town a little short when we were doing some of the planning. Because I was thinking about it and I was like, again, thinking about just sort of what I knew and I'm like, you know what, there's some basic stuff that we just gotta make sure everybody knows and blah blah blah. And I think a lot of the, I mean the talks were all great and stuff like that, but I was really, and other people told me the same thing, were really impressed with the maturity that the space is in when we saw the stuff in the open spaces. You know, um, like someone was telling me they were in the, the postmortem open space and it got really advanced really fast. And I'm sitting there like, I proposed that one and I will fully admit that I was being a total asshole. I was like the, all right, we gotta learn about blameless postmortems here because nobody knows that shit. And it was like, nope, dummy, we know that. We know it so good that we got better ideas than that. You know, not that anybody said that, but maybe they do. So I have been just blown away by our community here. I mean, by the level of interest, the level of knowledge, the turnout. You know, I mean, we had over 300 people here, and that was our target. We sold out, and we turned people away. You know, I mean, we had to say, like, we tried, you know, but there were people were like, We just don't have room. I mean, that room was full. And, and Ducy pointed out to me this morning, he said the turnout today, today's the second day, he said that's a great second day turnout. Like, I don't have the numbers, but I would say it was pretty close to almost all the same people.

**Paul:** [00:10:40] Yeah, you see that, and, you know, I helped, I was on the committee with Silicon Valley DevOps Days, and we were talking about holding it over a Friday and a Saturday because you you do lose a lot of people that second day because a lot of times, even if it's not weekend, right, it's 2 days away from work. Maybe they can only take a day. I was very surprised that the room was— there weren't, you know, big bare spots in the room today in the morning talks. It was very full. So yeah, I was surprised by that in a very happy way.

**Matty:** Another thing that was— so Mark alluded to this. It's kind of a common structure of DevOps Days is kind of speaker track in the morning and then open spaces in the afternoon, which is the format that we followed. And when we went to go do the open spaces, you know, again, we said, how many people have participated in an open or have not? And it was pretty much everybody. I mean, you know, I mean, there was a small handful of people had done it before, but I would say the vast majority. And it was, it was kind of a little rough to get it started, but they were really, really well attended. And at last night's evening event, I'd say there were at least half a dozen people that came up to me that said, I gotta tell you, I thought that sounded so dumb. You know, I was like, how could you do that? And I completely changed my mind once I did it. And then today, when we went to do the open spaces, it was like way more like, first of all, everybody kind of understood how the organizing went, but people were invested in like, okay, I got stuff I want to talk about. I know how that works. So, I was pretty excited.

**Trevor:** [00:12:21] There was a lot of chatter at the event last night about Open Spaces and people were talking about what they wanted to present for an Open Space or if people thought it would be a good idea for an Open Space, if people would be interested in going. It was really interesting to kind of hear that conversation take place.

**Justin Smith:** Yeah.

**Jason:** And I can kind of say, like, I had that same experience. You know, I've been— this is my 4th or 5th Open Space. With one this year. And I was one of those guys who just didn't think it was, you know, gonna be that interesting or that useful. And maybe it was a little bit intimidating to try to go to these little spaces where you don't know anybody and you just sort of want to ask questions. But honestly, now that's my favorite part of these types of events. And just having those types of engaging conversations, I think, you know, is the most useful part of these.

**Mark Cornick:** Yeah, I'll absolutely agree with Jason on that. And I'll say, you know, going into my first open space experience, my feelings were very similar. And I myself am a fairly introverted person, and one of the first open spaces that I went to in Minneapolis was by Tom Duffield from Chef talking about how can you enjoy things like open spaces and tech conferences when you're an introvert. I'm like, okay, sign me up. And as a result, here I am. I did an Ignite talk. I'm here on this podcast, you know. So even if you're the type of person who thinks, you know, this scares me to death because I'm not that kind of person, you know, give it a shot. You'll be pleasantly surprised, I bet.

**Matty:** [00:13:47] So from our studio audience, who has— was this your very first DevOps Days? So I would say of the— yeah, pretty much almost everybody who's sitting in the room with us, it was their first time. So would one of you who it was your first time like to come up and tell us your thoughts?

**Michael:** Don't be shy, come on.

**Matty:** Just introduce yourself and just tell us a little bit about what your experience has been like.

**Justin Smith:** Yeah, my name's Justin Smith. I'm a developer from here in Chicago. This is my first DevOps Days. I'm kind of on the outer skirts of this and trying to learn more about it. It's a really awesome community here. The talks have been great, the open spaces have been amazing. What you were saying earlier about even being more introverted, it's still a really great chance to get out, kind of get out of your shell and talk with people a little more and get exposed to different ideas.

**Matty:** What would you say, this being your first one, so what were your expectations? Like, what did you think you were getting yourself into, you know, 48 hours ago when you first walked into the Sears Tower yesterday morning?

**Justin Smith:** [00:14:53] Yeah, I'd like to use We called it Sears.

**Michael:** What else would you call it?

**Mark Cornick:** We can edit that out if family members listen.

**Paul:** The name that shall not be spoken.

**Justin Smith:** Yeah, I had never heard of Open Spaces before, so I thought this was going to be just kind of a run-of-the-mill conference. Somebody gets up and talks at you, and that's it. You go have drinks at night, and then you go home. But it really— You know, it brings a lot of people out of the woodwork to get the open spaces going, and you get nice topics that maybe aren't full enough for a whole presentation, but it's still stuff that needs to be talked about in the space, which I think is really valuable.

**Matty:** Which open spaces did you participate in?

**Justin Smith:** So I actually went to the postmortem one yesterday. It was awesome. I went to the introvert one that you talked about. They did that one again here, and what was the third one? I'm blanking right now. Yeah, another one. Yeah, all really interesting though.

**Matty:** [00:15:59] Excellent. Yeah, one of the things that— so Michael Lanyon, who's one of the co-organizers, feels very strongly about is, you know, we said that the badges do not say attendee, they say participant, and that's because DevOps Days is a participants conference. Yes, there are the times when people are giving the talks, but they're intended to be interactive. And that was, you know, this morning's first talk, Randy's talk, was intended to be very interactive. You know, she switched it up to say it was supposed to be about DevOps therapy. We didn't quite get into all of it, but I think they're actually, right now while we're doing this, I think they're having their therapy session.

**Paul:** And part of her presentation, she actually did ask for like you know, horror stories and things. That was the end of it, which is nice, especially sort of first talk of the second day gets people kind of out of shell, woken up, sort of thing.

**Jason:** And we were all a little hungover, I think, too.

**Matty:** Yeah, so it gets things kind of going.

**Michael:** Speak for yourself.

**Paul:** A quick digression because people always ask. So first of all, one of the things people ask, the venue that it was in. I think somebody said that this was the highest DevOps Days they've ever been in, which they meant 37th floor. This is not Colorado or Washington yet.

**Michael:** [00:17:12] Or DevOps Days Amsterdam.

**Paul:** Right, exactly. But no, and in fact, if you search the hashtag, which I also love, #DeepDishDevOps, you will see people were posting photos, just beautiful photos.

**Matty:** Yeah, we were on the 37th floor of the Sears Tower downtown Chicago.

**Paul:** And so the venue space was awesome, but then the other thing that I loved, the evening event was like a blast back to my childhood. There were some photos like, you know, is it, what's it called?

**Michael:** It's called a beer case.

**Paul:** Yeah, and they just had, you know, Dig Dug and Joust and Teenage Mutant Ninja Turtles and The Simpsons game and, you know, and Tron, oh, Tetris. Yeah, we did that. It was a lot of fun. The funniest comment there was like, if you've played the Teenage Mutant Ninja Turtles before, right, it's a lot harder when you're not 10 years old to like crowd around this machine to play the game.

**Aaron:** So that was a little weird.

**Paul:** Yeah, it was a great event, lots of fun.

**Matty:** So I want to talk a little bit about the organizing story. So actually, I'm going to ask Aaron and Shannon to come pull up a little bit. So a couple of the co-organizers are here. And I'm going to try to— I may get some of the details of this wrong, and Ducy knows some of them as well, so feel free to jump in. So my involvement with DevOps Days Chicago, I believe, was started in about April. Of last year, March or April, and I think I emailed Ducy and said, hey, do you know, like, why isn't there a DevOps Days Chicago, or do you know anything about there being one? And he's like, actually, yeah, we're kind of working on a thing, you know, I can put you in touch with— well, actually, it started with the, I'm trying to help do a thing, and then I think he's like, well, I'm going to do Minneapolis instead.

**Michael:** [00:18:57] Yeah, well, so Jerry Cattell, one of the organizers, has has given me trouble about this. I made the statement that DevOps Chicago, while it was a strong meetup and it actually one of the first DevOps meetups in the country, it's a little flaky at times. And that's the statement that I made. And Jerry's— and this is of course like on tape and recorded and everything. And Jerry's like, oh, so we're a little flaky, are we? But we had found a pretty strong and consistent community. And so I had wanted to do a DevOps Days in the Midwest. And we had found a pretty strong consistent community in Minneapolis. And we had a meetup and we do social mixers at our DevOps Days or our DevOps meetups. And we were at a social mixer and there were about 4 people standing around and we were talking about doing DevOps Days and Bridget Kromholt put her hand up and she's like, I'll organize it. And we're like, all right, go. Right. And so the nice thing was, is like we had talked about doing it in Chicago for a little while, but there was like, nobody who was like passionate enough to pick it up and take it on. And I don't live in Chicago, I don't live in Minneapolis, so it's hard for me to like manage it remotely.

**Matty:** [00:20:05] Um, yeah, and that's what was— it was kind of funny.

**Michael:** So it was like you, you stepped up, you said you're gonna do it, and you took it over, and that's what we needed, right?

**Paul:** Yeah.

**Matty:** And that was the thing, I reached out to Patrick and he said, oh well, there had been some talk in 2013, so yeah, I can give you the names of the people who had been interested. And this is where I'm gonna get the things not completely completely right of who was— but I, you know, Jerry was one of them. I think Kevin Reedy was one of the— you know, some— there were, of the people who had been interested, some of them made it all the way through today, you know, and there were some people who didn't. But what we kind of did is we, you know, kind of threw it out there. We said, okay, we're gonna do this thing. And we, you know, I reached out to the, the people that I already knew had been interested. We scheduled kind of a kickoff meeting. We said We did a survey because, you know, internet, right? Did a SurveyMonkey thing. But we, you know, basically said we're going to have kind of a kickoff meeting. So if you are— you want to be a part of this, and there were way more people at that meeting than are wearing maroon shirts today. That is definitely true. But that is to be expected. And the thing that I think is really kind of neat is I look at, you know, at those— and again, you're listening to this, you don't know, but the organizers' shirts are maroon. That's why I said that. But I, but I keep referring to the maroon shirts. When I think about those of us in the maroon shirts, with very few exceptions, there was no connection between any of us before we started this. I mean, Shannon and I worked together. I think a couple people had been former Orbitz people, but I don't even think they knew each other at Orbitz, you know, or whatever. But we definitely didn't. And there was, to me, my take is that it was very much I don't know that I would say it was controlled chaos because I think we were very organized, but we were very flat, you know. I mean, I just— I don't know, I, I wish I could like tell you how to do it, like the things we did right, but to me I feel like it just kind of all worked. And it doesn't mean like, oh, we didn't have problems and we didn't bike shed over ridiculous crap and all this kind of stuff, but I'm just really, really pleased. And I think what, what happened too is that people people selected themselves out of participating for various reasons. Either we had some people who, like, there was a point, it's kind of funny, this is also if you're thinking about organizing a DevOps Days or something like that, so there's a couple little lessons learned. The other thing that we will be doing the same thing, Minneapolis, I gotta give a shout out to Minneapolis. We would not have the event we had today if it weren't for Minneapolis's 18-page postmortem doc that was so helpful, and we are planning to Someone might be a little obsessive. Yeah, it was incredibly useful. Doesn't mean that we went and said, oh, let's replicate. And that was— that's an interesting thing too, is if you're looking to— you need to make— need to make it your own, right? And do things the way that are right for you. But it's nice when someone else has made a couple mud pies. Oh yeah, exactly. I won't step in that one, or if I do, I'm going to step in it very deliberately. And but so one of the things though that we we did was at a certain point, you know, we, uh, so some people selected themselves out in terms of, you know, just like, hey, you know what, this isn't necessarily what I thought it was going to be. You know, some people became too busy with work. And then there was a point when we kind of— the joke, and I'll refer to this way because I called it that myself, but I, I kind of asked for a, a reaffirmation of the loyalty oath at one point because we were getting close and it was like, you guys have an oath? Well, we—

**Michael:** [00:23:31] can you recite it?

**Matty:** It was a reaffirmation of an oath that we actually never took. Oh, but it was one of those things where you— where we— I think it was about 6 weeks ago we said, hey, this is getting real, yo. Like, there's gonna be a lot of stuff to do and it's gonna, you know, because when you're starting organizing an event like this, it's, it's very deceptively low amount of work because the first couple months there's very little to do because there's a lot of— it's a lot of waiting, a lot of waiting. And then all of a sudden at the end, it's like, holy shit, there's so much to do. And we knew that was coming. What's that?

**Paul:** It's like an agile sprint.

**Matty:** Exactly right. So we knew that was coming, so we were like, let's just make sure. And everybody, again, I mean, there's— I'm really amazed. Actually, no, I'm not amazed at all at how well this team has executed over these 2 days. So I'm really, really, really happy about that. So Shannon, I'm gonna pick on you. So what do you kind of, how would you describe the experience of organizing a DevOps Days that you started organizing before you'd ever been to one?

**Shannon:** [00:24:42] Yeah, exactly.

**Trevor:** And also, I want, also, If you could talk a little bit about how the difficulty, because again last night when I was talking to actually a listener of Arrested DevOps, he was asking, he asked one of the organizers, on a scale of 1 to 10, how much more difficult was it to organize this than is it to paint a house? Which we agreed at the time was not a good analogy.

**Shannon:** No, no, no, the analogy is that this is exactly like planning my wedding. Except actually I think planning my wedding will be easier because only be 2 people instead of 10 who are making decisions.

**Matty:** There's less bike shedding.

**Michael:** Um, but, um, yeah, so, um, one of the truth about that is that you'll be making all the decisions, right?

**Shannon:** Um, no, but, um, I think one of the most remarkable things about, um, doing this is that it's an event that's, you know, entirely run by volunteers, which is like— I, I just, I've never really been to a conference or attended or even heard of a conference really where there's no one who's in it for some sort of ulterior motive or who's trying to raise money or make money off of it. So it's all just organized for the community and run by people who are super involved and have volunteered their time to put this on. So that's kind of from the start start. I think that, that kind of sets the tone for the whole conference, which is, is just again really unique. But yeah, I think if you're, if you're interested in organizing a DevOps Days, a DevOps Days in your city, um, or being part of, you know, our, one of our teams, uh, you know, I'm assuming if we will definitely do it again in Chicago. I don't know, I don't know who, who in the organizer group will come back. I don't want to say our—

**Matty:** [00:26:29] that's what, that's what Jerry said earlier, and I said I assume we're doing this get in front of somebody and goes, I assume there will be another one. I do not yet want to assume that I will be back.

**Shannon:** I don't know if I'll sign myself up again.

**Matty:** Until we've gotten a little more sleep.

**Shannon:** But yeah, I think, I think if you're interested in doing it, it's, it's definitely a worthy activity. It's definitely, it's definitely a commitment. Like Matt said, it was almost like we did have to make an oath of, hey, we're in this, we're gonna pull the extra hours and you know, stay, stay late and finally get the effing t-shirt design finalized.

**Paul:** Wait, stay late and come early? Because you were saying that you, to set everything up, you had to be here at like 6:00 in the morning.

**Matty:** I was here at 6:30 yesterday. Yeah, some people were here. Yeah, and so I was like, oh man, after, after that after-party. Yeah, I wasn't here at 6:30 this morning.

**Paul:** No, it was the first day. Yeah, the first day to set things up, it was early. It was— there was a 6 as the first— as the hour.

**Matty:** Yeah, there's a 6 in the morning.

**Paul:** [00:27:29] Yeah, there was. Yeah.

**Matty:** So Aaron, um, again, so like, and you had not been to DevOps Days before either, so—

**Aaron:** right, this is, this is— yeah, this is my first DevOps Days.

**Matty:** I recommend going to one and not just— right, yeah, it's a different experience.

**Aaron:** I actually kind of think that it was— I, I almost feel like I got more out of the, the experience by having to help organize than just going alone because I mean I got to see everything that happened up to the day of and see all the behind-the-scenes stuff. So it's almost like I feel sorry for some people just because I got more content just, you know, looking at all the papers and everything that we got to review for the presentations. And like that just helped me like look into a lot of stuff that I never even thought of before. So, as much as I may probably not suggest it to other people, I actually had an awesome time doing the organizing as well as participating in the open spaces and stuff like that that I've never done before.

**Matty:** [00:28:30] It's definitely a different experience doing the 2 things. And that was another thing that we made kind of clear for a couple reasons was one was early on and we had some people in the in the group that it wasn't quite clear as to why we, we did it this way was we said if you were an organizer, you can't give a talk. And actually, the funny thing was at first when that was brought up, it was like, oh, because of conflict of interest. And then very quickly it was like, no, because for crying out loud, you're not gonna have any time. Because everybody who's an organizer— this is the downside of being the organizer— is you consume as much of the conference as you can, but at any given time You could be in the middle of the most interesting— you are on call. And actually, we're going to give a little plug to our buddies VictorOps, who we actually did an on-call situation where we had an email address that people could email into. So again, at any given time, like, no one was going to come and bug us in a maroon shirt, and I'm not going to be like, dude, I'm not on call, you know, screw you. But emails would come in like to our help email address, and they weren't like critical things, but they would be something like, hey, the sound is bad in the back or whatever. But it was like, it was during Aaron's time, so he was getting alerted, and then he's like, okay, I know during my time to, to do that. And we're gonna write kind of that up a little bit too about how that worked. And that was— we got that idea from Minneapolis, is that was one of the things I think y'all had talked about wanting to and didn't get around to, and then we're like, let's kind of try that.

**Michael:** [00:30:03] That's actually an interesting idea. Um, the guys and gals in Amsterdam, they, they went all out professional and got like the headset walkie-talkie system, and so they're like radioing around to each other and various things like that.

**Matty:** Dude, if you told me they did that, we would have done that. It's so cool. Would have just interfered with everything else that was secret service.

**Michael:** Yeah, I prefer the model where you have like the thing strapped around your neck. Yeah, it seems like more like special ops, right? I wouldn't call it my favorite, but one that I thought was very interesting and something that needs to get discussed, and I think in the DevOps community we don't do an extremely good job of discussing it, was the, you know, how do I deal with compliance and kind of managing that risk scenario? So that was the 3rd talk on the first day, if you're wanting to look it up. We'll link to that in the show notes.

**Steve Pereira:** Exactly.

**Michael:** Is that how I do it, Matt?

**Steve Pereira:** Yes.

**Michael:** All right, thanks.

**Matty:** On-the-job training.

**Michael:** So it was really interesting to hear this talk because there's a lot of fear and uncertainty when you talk about moving faster. And it's just a topic that needs to come up more of like, how do you handle compliance and audits and things like that?

**Paul:** [00:31:16] Yeah, I like that one too because We went through a lot of the like vocabulary that you find, and that we don't understand. We don't know, right?

**Shannon:** Yeah.

**Paul:** And so you know, because because because we do this to other people, right? Where we come in and we say, "Well, the net scaler is down." Da da da. And they're like, "I don't know what you were talking about," right? But the auditors come in, they're like, "Do you have a control for the thing?" And the da. And then we're like, "Control." What? Yeah.

**Michael:** So DevOps is not about control.

**Paul:** I know. Yeah. Right.

**Jason:** Yeah.

**Paul:** So. So it was good to, to get concrete definitions for those things so we could actually work through that.

**Matty:** Uh, yeah, introduce yourself.

**Steve Pereira:** This is Steve Pereira from Toronto. I'm, uh, visiting. Um, so a talk I really enjoyed, and I, I think it's easy for me to remember because it was just today. I've probably forgotten everything from yesterday.

**Michael:** I'll go over—

**Matty:** this is why it's on YouTube.

**Steve Pereira:** This is why I watch the videos. But, uh, uh, yeah, Paul's talk about how DevOps equaling 42 was awesome for me because I was totally expecting something completely different. Like, I was expecting the talk about DevOps being the answer. And, you know, I expected humor in that, but then to hear that the talk was actually about, you know, not knowing the right question and not being clear on what you actually want out of this pursuit was really refreshing. And, you know, it's for me as a fellow consultant, I think we get to talk about certain academic aspects of DevOps a lot more than other people do, but it's really nice to sort of be reminded of principles where we should be examining the details behind that, you know, the word that gets thrown around so often.

**Paul:** [00:33:06] Yeah, you, you can thank Matt for that because he came up with the title, and then when you linked, when you linked to the, like, clicked on the title on the schedule, it didn't go to an abstract.

**Matty:** Yeah, so it's like, I can basically remember that. Michael, Michael Lanyon came up with this.

**Shannon:** Oh, okay.

**Paul:** All right, there you go.

**Matty:** Yeah, but it was, yeah, so that was very funny watching this. So when you do watch it, I will, we will, uh, kind of pull back the curtain And the whole story is not exactly as Wade has told. It is true in that we did have an idea, and then when we tried to like reconstruct it, it wasn't quite so much as I don't remember it at all. It just didn't, it didn't add up as much as it did after a lot of tequila in Orlando. So, um, but then as— so the DevOps equals equals 42 was just, was a placeholder, and then we kind of talked, but that is kind of talked about.

**Paul:** Yeah, well then he was like, let me do something with it. Yeah, well, well, and then I was like, do you want to update the abstract. Yeah, you know, and I was like, no, no, it's so appropriate.

**Steve Pereira:** Yeah, it's not be—

**Matty:** yeah, it'd be totally evident. Yeah, yeah, yeah. So we're coming to the end. So normally at the end of our show, we do what we call checkouts, and no one is necessarily prepared for that, but if somebody has something cool, either a tip or a thing that they might have learned, um, this week, or, uh, a cool website or something they want to plug, go ahead.

**Michael:** [00:34:31] Yes, so I learned something cool. I had never heard of it, and it was in one of the open spaces on hybrid cloud and DevOps, but it's this idea of 12-factor. And so like 12 factors, it's essentially a methodology of how you build your application in a more software-as-a-service type manner, and it's geared towards operations people and it's geared towards developers as well. And what was interesting is there were a lot of ops people in this open space, but the developers, most of the developers had never heard of it. And it's— and some ops person made the point of like, this is definitely something to take back to your devs because they probably don't know, because most of the devs that person had interacted with had no idea. So it's 12-factor, onetwofactor.net. And it basically talks all about it.

**Matty:** That explains why this morning Tom Duffield says, what do you know about 12-factor apps? And I was like, not— I know what it is. I mean, like, I know it's a thing. Yes, there are 12 of them. And we're like, well, let's learn about it. But that was just kind of an out-of-the-blue conversation. So I'm sure he was probably part of that conversation.

**Shannon:** [00:35:37] Paul, you had a—

**Paul:** Yeah, I did. So I loved that the hashtag to search for DevOps Day Chicago content on Twitter was Deep Dish DevOps. And for lunch today we had pizza from, where was it?

**Matty:** Giordano's.

**Paul:** Yeah, have that. If you're in Chicago, go get that.

**Matty:** Okay, yes. We're gonna, we're actually probably gonna go get that.

**Jason:** Again?

**Paul:** That's how good it is. Yeah.

**Matty:** So that's a good one. Trevor, you had a—

**Trevor:** I did. So there's a library you can install in your terminal that will allow you to sudo make me a sandwich. It plugs into the Jimmy John's API and orders you a sandwich based on your JSON parameters. So somebody sudo make me a sandwich.

**Steve Pereira:** Perfect. So I just found out today in a tweet about a service called rollout.io. And apparently it's for apps that you push to the App Store and not being chained to their approval process, and it somehow allows you to push hotfixes into your app.

**Matty:** [00:36:42] Oh, wow.

**Steve Pereira:** So I only had like 3 seconds to scroll through the mobile website on my phone.

**Paul:** I know, it's really like, yes, give me that. I want all of that.

**Steve Pereira:** Yeah, it's probably worth investigating if you're in mobile app development.

**Matty:** I have One Checkout, which to some people in the DevOps community, this is nothing new, but it was Definitely a favorite of this week. So if you're familiar with the game Cards Against Humanity, Bridget Kromhout was the creator, which has now spawned into much larger than Bridget, of DevOps Against Humanity. So it's an open source list of Cards Against Humanity style deck with a lot of very inside baseball, goofy technical DevOps jokes. We played quite a bit of it last night at the after-party. People won a couple Raspberry Pis based on their their funny hands. So that's devopsagainsthumanity.com, I think. I'll link to it in the show notes. .org? I don't know.

**Michael:** We'll link to it in the—

**Matty:** Say it!

**Michael:** Just use a search engine. Oh no.

**Paul:** What you have to do with .com, you have to say all 3 and then you just edit.

**Michael:** [00:37:46] We'll link to it in the show notes.

**Trevor:** And also speaking of the after-party, it seemed one of the most popular beers going around last night was the local Daisy Cutter from Half Acre. So every once in a while we recommend some alcohol, so this time around I'm going to recommend that Daisy Cutter.

**Matty:** And just a reminder that we have a newsletter, arresteddevops.com/bananastand. It's the best way to know about upcoming podcast episodes and cool news with DevOps. I can assure you we don't spam you because I rarely remember to send it, but I swear I'm going to get better about Well, Matt lies to you all.

**Trevor:** Thanks to our sponsors PagerDuty and RedGate, and to our loyal listeners and everybody who was able to join us today in the room. If you enjoy Arrested DevOps, we would appreciate it if you go to arresteddevops.com/itunes and add a review to the iTunes store. Be sure to check us out at arresteddevops.com or @ArrestedDevOps on Twitter.

**Matty:** We are always happy to get your input, ideas, or feedback at shows@arresteddevops.com. Devops.com. I am Matt, @MattStratton, and I'm Trevor, @TrevorGHess. We are Arrested DevOps, and remember, there's always DevOps in the banana stand.
