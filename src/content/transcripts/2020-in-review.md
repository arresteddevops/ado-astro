**Bridget:** [00:00:10] I will try to apocalypse less in the future.

**Jeff:** Yes, Matt, I'll help you bury the body.

**Trevor:** I'm the 46th best shuffle player in the world.

**Jessica:** Well, I'm in Tennessee at the moment, and the liquor store has an astonishing bourbon selection.

**Joe:** Well, I'm editing this, so I can guarantee 100% Kubernetes-free conversation.

**Matty:** What's interesting about that is almost nothing.

**Joe:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Joe Lahey. Co-hosting with me today is Matt Stratton, Trevor Hess, Bridget Kromhout, Jeff Smith.

**Jessica:** [00:01:18] That's a good calendar.

**Joe:** Well, if it's that time on the calendar and all of us are gathered together and you can actually hear my voice, That must mean it's time for the year-end wrap-up episode. We've got a lot to get to, but first, a word from our sponsors.

**Matty:** This episode is sponsored by CircleCI. Designed for modern software teams, CircleCI's continuous integration and delivery platform helps developers push code with confidence. Trusted by thousands of companies, from 4-person startups to Fortune 500 businesses, CircleCI helps teams take their software from idea to delivery quickly, safely, and at scale. Visit arresteddevops.com/circleci to learn why high-performing DevOps teams use CircleCI to automate and accelerate their CI/CD pipelines.

**Joe:** The worst thing about the Arrested DevOps podcast is when it ends. You're left wondering what to do next. What are you going to listen to on your commute home? How do you occupy your time when walking the dog? What are you going to listen to during the quarterly all-hands meeting? But fear not, dear listener, there is a solution. You need to subscribe to Software Defined Talk right now. It's a weekly podcast that recaps all the news in cloud computing, DevOps, and enterprise software. The hosts, Cote, Matt Ray, and Brandon Wichard, will keep you up to date on all things cloud while offering tips on how to optimize your Costco haul, and how to PowerPoint. It's a fun, free-flowing conversation that will keep you entertained and informed. What are you waiting for? Subscribe to the podcast today by visiting softwaredefinedtalk.com or by searching for Software Defined Talk in your favorite podcast app. All right, so we have a full house here today to discuss the, discuss the, the still ongoing trash fire that is 2020, uh, the most 2020 of years. Um, so let's hop right into our agenda.

**Matty:** [00:03:26] So such as it is, Joe said we have a lot to get to. I, I debate that statement.

**Jessica:** Well, we do actually have 5.

**Joe:** We're gonna, we're gonna need, we're gonna need quite a bit of this episode saved at the end for, for the unveiling of our new, of our new '90s era sci-fi TV show, uh, podcast.

**Matty:** Our pivot.

**Trevor:** Last I checked, there was that— there was that show that was about nothing that filled how many seasons?

**Bridget:** Oh yeah, how many seasons did Seinfeld—

**Joe:** Seinfeld, I thought was 7 seasons.

**Matty:** No, it's like 9. I've just been rewatching it on Hulu. It's a lot. It's like, yeah, that's right.

**Joe:** Now we're all ready. We're all ready.

**Trevor:** You can fit a lot into an episode about nothing.

**Bridget:** More than 6.

**Jeff:** Never watched Seinfeld.

**Bridget:** Can we have 6 seasons in a movie? Is this season 6 of Arrested DevOps?

**Matty:** Um, I'm always bad at get— okay, so fundamentally, let's put it this way. I'm gonna have to count on my fingers. Um, but there was 2014, 2015, 2016, 2017, 2018, 2019, 2020. This is the 7th season of Arrested DevOps.

**Bridget:** See, there you go.

**Joe:** [00:04:28] So this is just about the time where Duchovny decides he doesn't want anything to do with this show anymore. Just have me, have me get abducted. Yeah, so we're also skipping ahead to the '90s sci-fi TV show talk. We're deep into season 9 in our X-Files rewatch, and oh God.

**Bridget:** At this point, I just work on a puzzle, like an actual jigsaw puzzle made of cardboard while he watches X-Files.

**Matty:** But we don't have an Arrested DevOps movie yet though, so no.

**Bridget:** No, no. So if we were going to create a composite movie of our favorite episodes, Wow, segue, nice.

**Trevor:** Okay, so of all time or, or of the past?

**Joe:** I think we're, I think we're talking about the, about the year of our apocalypse, 2020. Um, so Matt, talk to us about some of your favorite episodes from this year.

**Matty:** I had 2 that I really liked for different reasons. So one was I did an episode earlier in the year about the deserted island DevOps virtual events that took place on April 1st. And no, it wasn't a joke, even though that was kind of— no, it took place later. I think it was announced on April 1st. And the reason I really like this one is twofold. One is Bridget continually told me she thought I was going to have way too many people on an episode and was going to be a complete trash fire. And I'm happy to report that it was not a complete trash fire. We actually— but it required a lot more orchestration than the average episode, but I really liked it because I think at the time I thought it was one of the best produced virtual events, and that was new in the year of, you know, that it was the Island DevOps Conference, right?

**Jessica:** [00:06:14] Not your episode.

**Matty:** Not our episode. Our episode was not the best produced virtual event, although compared to a lot of the virtual events have been produced, that episode might still be ranking higher than some other ones I can think of. But even looking back today, I'm like There was a lot that people could have learned from that event, and as evidenced throughout the conference calendar of this year, people did not. But it was, uh, I think there's a lot of interesting insight about how it, uh, how it worked, and we had a lot of great, you know, I said it was with a cast of thousands. It was really, it might have been our largest ADO episode, uh, ever if you don't count the audience at DevOps Days conferences, events, or episodes we do live.

**Joe:** There were quite a few speakers on that one. I, I recall, I recall editing that one.

**Matty:** That was, yeah, it was not trivial. Uh, and actually our transcription did a fairly good job. It only confused me and Austin once or twice, so I was pretty impressed that the transcribers— and we're actually going to talk about transcription a little bit later. And the other one is an episode I recorded just recently. I think it might have been our— might have been our most recent episode. I can't keep track, but it was an episode I did with Tim Banks, and it's called Breaking Down Gates, and it was We started talking about one thing and we ended up talking about something else. And I think what we ended up talking about was a lot better than our original one. We were just going to kind of talk about ops-y things. And we really got into a conversation just again about the gates, especially that are for underrepresented folks in tech and just some very actionable tactical things that people need to do. And we also talked about chili a lot. And Tim has strong feelings.

**Jessica:** [00:07:50] Do you mean chili the food or the country?

**Matty:** The food. Okay, so, uh, so, so I thought that was really good. You want to check that one out if you haven't heard it. It's a recent episode, and Tim also has the most mellifluous, soothing, radio-style voice you'll ever hear. So it's worth listening to just for the mellow tones of Tim Banks.

**Bridget:** So wait, what you're saying is we have to get Tim Banks and Michael Cote on a podcast together?

**Matty:** That would be too much for anybody to handle, I think. It would be—

**Joe:** don't listen to this episode while driving.

**Matty:** It would be so smooth that everybody would just slide off their chair. Into a puddle on the floor.

**Joe:** Okay, Trevor, how about you? Favorite episodes?

**Trevor:** Um, I'm gonna have to go with the, the one episode, my traditional one episode of the year, um, not including this one, uh, which was the DevOps Days Chicago 2020 review, the, the, the magic behind the musical, um, uh, which was a lot of fun. I mean, and the event in and of itself for me was a It was a really good opportunity to open my eyes and realize how far I've shoved my head in the sand over the past 2 years, and time to figure some things out.

**Jessica:** [00:09:07] Kubernetes.

**Matty:** There's a lot of subjects dripping from your words there, Trevor.

**Trevor:** There's no context there at all.

**Bridget:** How many minutes did it take us to get to Kubernetes? Meantime to Kubernetes.

**Joe:** If this makes it into the— if this makes it into the cut.

**Bridget:** What are you saying?

**Trevor:** Only Joe can save us from Kubernetes.

**Joe:** That's right. I pledge 100% Kubernetes-free content. It's Christmas. So can I at least have one day where we don't talk about Kubernetes? I almost made Jessica do a spit take. This is now my new goal for this episode.

**Jessica:** It's likely to happen with this weird orange bourbon.

**Matty:** Oh, why is it orange?

**Jessica:** Well, I'm in Tennessee at the moment and the liquor store has an astonishing bourbon selection.

**Trevor:** That sounds about right.

**Jessica:** Yep. I'm, I'm into peanut butter bourbon lately.

**Trevor:** [00:10:09] Interesting.

**Jessica:** Bizarre. Or peanut butter whiskey, I guess. Bizarrely good.

**Matty:** What is peanut butter whiskey?

**Jessica:** Like, it's whiskey. It's so, you know, like Fireball, the cinnamon whiskey?

**Trevor:** Yeah.

**Jessica:** And that's like, for its price, it just does not suck nearly as much as you expect it to. Also, you expect the cinnamon thing to suck and it kind of doesn't. The peanut butter whiskey is like that.

**Matty:** So it's like a peanut butter infusion in college. I'm very interested by this.

**Jessica:** And it's great because I'm not gonna drink too much of it because it's sticky, because it's peanut butter.

**Matty:** Like, you, you know, your mouth would get stuck together, right? Is that not how it works?

**Trevor:** Now I'm uncomfortable.

**Jessica:** So good things about 2020: I discovered peanut butter whiskey, and now this weird blood orange whiskey.

**Joe:** Why don't you talk to us about your favorite episode from this year?

**Jessica:** Oh, and I discovered That Netflix is hiring remotely now, by the way. But I learned that when I talked to Aaron Blachowiak. We talked about some of Netflix's philosophies around, for instance, letting developers start up however many AWS containers and services that they want to. That episode is called Don't worry, do care. Because don't worry about what it costs if this is worth it, but care how much it costs. They enable developers to care by giving them reports and nudging them, hey, you might want to look at this graph, kind of thing. There's humans in the loop there too. It's not just automation. But that was a fun conversation.

**Joe:** [00:12:02] How about you, Bridget? What episodes did you enjoy from this year?

**Bridget:** I mean, I did a few episodes this year. They were all good. Some stuff about Helm, some stuff about service mesh, some stuff about Kubernetes. Actually, that might have been in late last year.

**Joe:** But— Cut!

**Jessica:** It's all fine.

**Bridget:** He's going to bleep it out!

**Joe:** Yeah, I'll bleep it out.

**Bridget:** You cannot bleep it out.

**Joe:** I will bleep it out.

**Matty:** No, no, that is some deep cut Arrested DevOps. Yes, yes, we don't—

**Jessica:** it's just gonna sound like—

**Matty:** yeah, we used to do that and then I got in trouble, so we don't do that anymore.

**Bridget:** No bleeping me.

**Jessica:** To bleep out Kubernetes and you got in trouble?

**Bridget:** What I will tell you is, um, I had a really fun episode where we talked about tea and anarchy with Alice Goldfuss and Ian Coldwater, and that was a— I like when it's possible to bring together people from Um, overlapping, intersecting, yet disparate points of view and have them talk to each other. I think that's one of the most fun things about podcasting. So that'd be my answer. Uh, how about you, Jeff?

**Jeff:** [00:13:07] You know, I, I think for me, I, I gotta go with Trevor, uh, the DevOps Days Chicago 2021. And I think the big thing about it was, and, and, you know, this is, this is gonna sound self-serving on Arrested DevOps, but hear me out, right? Like the I felt like the DevOps Days 2020 event was the best virtual event that I have attended. And I felt like, you know, that is the live shows are like such a central part of that. It's just part of the, I don't know, tradition. So to have that continue on given the circumstances for me, I don't know, it just, it sort of hit me all in the feels. So that's kind of where I'm at, but I am, I haven't listened to it yet, but I'm really interested in listening to the Tim Banks episode. I've never met Tim, you know, I've followed him from afar. He just seems like a really warm, genuine, like, open person. And I had a feeling your conversation, Matt, was probably gonna like diverge a bit and to get into something. So I'm happy to hear that that's what happened. So I am looking forward to listening to that episode soon.

**Matty:** [00:14:10] We got our money's worth out of the explicit tag on that episode, and none of it was gratuitous. They were all required. So it's the— well, and actually, okay, we might as well, because again, we're being self-indulgent. There was a little bit of a debate, and I don't mean debate because nobody agreed, but I was wondering because I was putting that together and I knew what I wanted to put for the cold open of that episode, but it included some profanity. And I was like, I didn't know how I felt about that because I'm like, it's the very first thing you hear when you start it if you're not expecting it. And Joe actually pointed out that number one, we have had profanity in the cold open. And in fact, that's a good way to ensure your comment makes it into the cold open is to use profanity. So now we know.

**Trevor:** You know, I have been watching in 2020 as I've been getting back into some hobbies that I've forgotten. I've been watching a lot of Adam Savage's Tested. And he has a wonderful quote about swearing that I like. And that is, it's really fucking cool when adults swear, but it's gross when kids swear.

**Matty:** [00:15:17] I almost thought about something, but then I realized it's not true, but I'm gonna say it anyway, is I was starting to listen as we were listing our favorite episodes, and, but they were all, because now, you know, we've kind of very distributed with who does the episodes, and I was gonna ask the other hosts, does anybody listen to the episodes they're not on? And I was about to say, the only person on this show who's probably heard every episode this, this year is Joe. But even that might not be true because Joe didn't edit all of them. Like, there were—

**Joe:** no, this, uh, this, this one, this one, this one where you argue about chili, I, I was not involved in because I probably would have had opinions.

**Bridget:** I, I actually did listen to the Tim Banks one, and I feel like I don't always listen to every episode just because turns out when you're not on planes, you have significantly less podcast listening time. I see Jeff nodding like this is also occurring to you. No commute, no podcast listening.

**Joe:** More significantly, true. I found myself listening to more podcasts in the apocalypse than I did.

**Jeff:** [00:16:18] I can't focus on anything.

**Jessica:** Right, right.

**Bridget:** It's like you can do that if that's your entertainment, but there's no task where it can be in the background really.

**Matty:** I found I've been more aware of other people's episodes since we started doing the transcription, because I have to like put the transcript— I don't do the transcribing, by the way, just so we're clear. Then I would absolutely be very cognizant. But I, you know, will go and I'll run it through our transcription service and then update the show notes. And then once it's there, I, I, even if I haven't listened to the episode, I'll usually probably do a quick one to see if I notice anything really blatant, which I probably won't because I didn't listen to the episode. But, you know, something where I'm like, that sure doesn't look like something Bridget would say. That was probably someone else. But this is the one thing I will say about transcription, because I was talking to somebody about like, well, why do you— would you transcribe? And, you know, obviously the clear answer is for accessibility. But I think it's also helpful because it's another medium for the show. And sometimes people don't want to listen, but they want to read. And I will tell you the very— because again, traditionally, the year-end wrap-up show is when we're self-indulgent. The self-indulgent thing about why I like it when I'm on a podcast that has transcriptions is it's really easy for me to go look through the transcription and see what I said, right? You know, because I'm just curious, because it's like, you don't really know. I'm like, I don't want to listen to this whole thing, okay, but I can kind of span through. And also my latest one is that I look at the transcriptions of Corey Quinn's podcast to see if he's talking about me, and sometimes he is.

**Bridget:** [00:17:52] Yeah, you need to set your Google Alerts to tell you about mentions of you specifically in his podcast.

**Matty:** I need to— yes, I need to do that one, or else I'm getting the other Matt Strattons that are like in banking or baseball players or whatever. Well, this is a nice— sign up for Taco Bell accounts under my email address. So that's what happened yesterday anyway.

**Joe:** Yeah, well, this is a nice segue into talking about everybody's favorite topic, podcast statistics. So, uh, take it away, Matt. Yeah, tell us all about the numbers there.

**Trevor:** There—

**Matty:** we've gotten better about this over the years because I used to like get really specific and talk about page views and stuff, and nobody gives a shit. I mean, even when nobody gave a shit, I still said it. But now, more importantly, it's not so much that nobody gives a shit, it's that I don't. So therefore I don't bring it up. But I always do think it's kind of interesting to look at, uh, the episodes that get the most traffic. And again, as I'm fond of saying, there are 3 kinds of lies: lies, damn lies, and podcast listening statistics. Which is why I don't say numbers, because the numbers don't matter. But I think relative to each other Anyway, as of last week when I pulled the stats, the most listened to episode this year by a relatively large margin, because last year when I did this, the number 1, 2, and 3 were all within 1% of each other. There was a much larger margin. Anyway, the number 1 listened to episode in 2020 was Deserted Island DevOps. So, which doesn't surprise me because virtual conferences and talking about them, I don't know if you're on this thing called Twitter, but that's all anybody ever wants to fucking talk about these days. And I'm tired of it, but we're gonna talk about it on the episode a bunch, I bet.

**Jessica:** [00:19:36] Yes.

**Matty:** But so number 2, which I think is exciting, and we haven't really touched on the reason I think it's exciting, was an episode called We're Always Learning, which featured Patrick Dubois, but most importantly, Sorry, Patrick, when I say most importantly was the premiere episode of our new co-host Jeff Smith, who we haven't really acknowledged that Jeff has joined the show on this episode yet except that Jeff is talking. So anyway, Jeff joined us this year.

**Joe:** So this episode, this episode is just for the super fans and they already know.

**Matty:** That's true, they do already know. Yeah, uh, they also know I rode the coattails of Patrick. Yeah, yeah, hey, hey, that's, that's Trust me, I can tell you all the people I've been coattailing for my career. Our honorable mention for number 3 was an episode I did early in the year about communities with Jono Bacon, which was really good. I really liked Jono's book and it was fun, but it doesn't really connect as personally to having it be like our first show of a new co-host. Sorry, Jono. Anyway, that was number 3. The thing that I think is interesting without going into the details about statistics, is that our work— number one, I find it interesting that, you know, our audience continues to grow. You know, it's not hockey stick growth, but year over year, when I look at what our average listens are, they're always going up, which means more people are finding the show, more people are at least downloading it. By the way, that's the trick. Um, all we can tell from the— for the majority of our statistics is that the episode was downloaded, not that you listened to it. Um, so if anybody wants to know my very scientific way of figuring out, uh, 2 numbers, as in how many listens there really were and how many subscribers we have, I take— so this is very scientific. And the funny thing is I've said this enough that I know lots of podcasters that use this technique because they think it's legitimate. I take our number of downloads and I cut it in half. And that's the number I use because 50%, that seems like a conservative number. Um, but what I also do when I think about our subscribers is I look at how many downloads an episode gets within 24 hours of it being published. Because you may not know this, but if you have your handy little podcast app on your device, when there's a new episode of Arrested DevOps, the app downloads it to your phone whether you listen to it or not. So when I look at how many episodes, how many downloads we get almost right away, I'm like, that's probably a fair guess of how many subscribers. And that number also continues to grow. So thanks for listening, everybody. And we're going to keep doing this because, I don't know, why not?

**Bridget:** [00:22:16] What else are we going to do?

**Matty:** What else are we going to do?

**Jessica:** Talk about '90s sci-fi?

**Bridget:** Right.

**Matty:** Well, that's—

**Joe:** yeah, we'll get— we're getting there.

**Matty:** We're getting there.

**Jessica:** Before we get there, I would really like to hear more from Jeff.

**Matty:** I would too.

**Jessica:** I'd like to know, like, you know, Jeff, who are you? Why'd you join the podcast?

**Jeff:** Oh my goodness. Yeah. Um, so hi, I'm Jeff. Um, based out of Chicago. I joined the podcast just because, like, uh, I, I love having these sorts of conversations. Uh, I find it almost impossible to say no to Matt. Uh, so when he asks me anything, it's typically like, yes, Matt, I'll help you bury the body. Um, so, you know, Even if it's Patrick Dubois. Right.

**Matty:** Yeah.

**Jeff:** Yeah. I love Patrick, but if he's got to go, he's got to go.

**Matty:** There have been, not to interrupt you, but I just wanted to pile on to the Jeff can't say no to me thing, is there have been times, and Trevor knows this too, because it'll happen sometimes with DevOps Days, where I'll be like, can somebody else ask Jeff? Because I've just asked Jeff for a lot of shit in the last couple of weeks. So it has to be somebody else.

**Trevor:** [00:23:20] This is 100% true. This is, this has come up at least 4 times this year.

**Jeff:** Matt's the closer. You can just, just send him in. Like, just, just tell him, like, Matt, you got to do it, man. You can't say no. Jeff, yeah, I just love having these sorts of conversations.

**Trevor:** I don't know if you know this, probably don't, but you were my last hug before the pandemic started at C2E2.

**Jeff:** Yep, yep, I remember that. I think that might have been my last one too.

**Trevor:** It's beautiful outside of household.

**Jessica:** I hope you both have.

**Matty:** Yeah. Yeah, yeah.

**Jeff:** You know, and it was sort of ominous too, because my friend was like, who is that? You kind of held him a little bit longer.

**Matty:** I was like, I don't know. Aww.

**Joe:** There's your cold open.

**Jeff:** There's something weird going on. I don't know. It's Trevor. And I don't know. We usually don't hug that long. But I don't know. There was something special this moment. Right?

**Trevor:** How'd that gaming table turn out?

**Jeff:** It came— turned out great, except for it got delivered a day after the pandemic started.

**Trevor:** [00:24:21] So it sits unused.

**Matty:** Yeah, right.

**Jeff:** So I, I—

**Trevor:** that's how all my minis feel.

**Jeff:** Yeah, I joined the Kickstarter for like this gaming table, uh, you know, city living, so you got to have, you know, multiple ways to do things.

**Jessica:** Like, wait, wait, wait, gaming like board games?

**Jeff:** So like D&D, board games. Okay, so it's a game topper, right? So the idea is you can have some cheap plastic tables, but then you put this giant game topper on top of it and it's nice and weighted, so you've got plenty of space to play these massive board games.

**Jessica:** Does it have like railings so your dice don't roll off?

**Jeff:** It has railings, yes, absolutely.

**Bridget:** Does it have covers? Does it have covers to prevent the pets from attacking?

**Jeff:** You can have, uh, different mats that, uh, scroll out on it.

**Jessica:** Okay, well, when the pandemic's over, I want to come to your house.

**Matty:** I was going to say, we also need a link to this to put in the show notes, probably, if I assume you can still buy it. Did any—

**Joe:** did anybody watch the YouTube show Tabletop?

**Trevor:** Yes, I did.

**Joe:** Yeah, yeah, the all-star, the all-star celebrity poker but for board games. Uh, that was back when, back when YouTube was throwing a bunch of money around to content creators. They threw a bunch of money at Geek and Sundry and they produced a show called TableTop.

**Bridget:** [00:25:30] Yep.

**Joe:** And Wil Wheaton got his, like, his only sort of funny friends to come over and they would play, they would play a board game sort of all-star celebrity poker style. And they had an awesome, like, gaming table.

**Trevor:** They had a Wormwood table.

**Matty:** My favorite tabletop episode memory was when they— and they may have done this more than once, so I wasn't like a super fan, so you can check me if you're like, no, they played Ticket to Ride at least 3 times. But at least one of the times when they were doing Ticket to Ride, so at the very end and they're, you know, totaling up all the scores and counting the routes and everything, And Ann Wheaton, so Wil Wheaton's wife, is like talking to somebody and she's very animated and she slams her hand down on the table and all the little train cars go flying. So they weren't able to actually— and of course they replay it in slow motion and everything. But I think about that every single time I play Ticket to Ride, which is not a small amount of times, which means I think about TableTop a lot.

**Jessica:** [00:26:31] For the record, Wil Wheaton is in Star Trek: The Next Generation, and that makes this a '90s era sci-fi reference.

**Joe:** Hey, very, very, very good.

**Trevor:** But the, but the question is, was, was Wil Wheaton primarily in '90s Star Trek: The Next Generation or '80s Star Trek: The Next Generation?

**Jeff:** Pretty sure he was out by the '90s.

**Joe:** No, he lasted, he lasted until, he lasted at least until the 4th or 5th season.

**Trevor:** I thought it was the 3rd.

**Jeff:** Oh no, you're right, because he comes back up in there after the 3rd season.

**Joe:** He comes, he comes back in the, in that, uh, that episode where he's like a cadet and they'll do the, they have that like, they have that, they have not Tom Paris. Yeah, the, the not Tom Paris because they didn't want to pay the, they didn't want to pay the writer of that episode.

**Trevor:** Is that what happened?

**Joe:** Yeah, they were going, they were going to, they were going to make the Tom Paris character in Voyager, that character from that episode of Next Gen, but then they would have had to give the, give the author of that episode, uh, uh, royalties for that episode. So they made him not— they made him Tom Paris as opposed to that other, that other whatever his character name was in that, in that episode, which I can't remember, which I can't remember.

**Jeff:** [00:27:53] But I think what's darker is that he doesn't get royalties anyways.

**Matty:** Don't forget that your podcast app probably has a 30-second skip feature.

**Joe:** Listen, I can go deeper on this tough subject in particular.

**Trevor:** They were both, they were both the same character. They were both like rogue shuttlecraft pilots that were like getting in all kinds of trouble with Starfleet. I'm gonna stop myself because I can go even further.

**Joe:** So Trevor, in addition to rando episodes of Next Gen, what was 2020 like for you?

**Trevor:** I mean, I assume it was the same steaming pile as everybody else, but, you know, there's a few glints of hope in the steaming pile. So this was my first year as a product manager, which has been an incredible roller coaster of all over the place-ness, though I do feel good about it, which is nice. Despite some of the head-sandery aforementioned. I've gotten a lot into streaming, but not the streaming that you might think. I'm not on Twitch or doing whatever. I've been doing— a friend of the show and another DevOps Day Chicago organizer, Kevin Reedy, and I, and our friend Teddy Waffles, have been doing shuffleboard streaming. And watching streaming.

**Jessica:** [00:29:23] Uh, so we actually have the physical game.

**Matty:** Yeah, um, floor shuffleboard, not table shuffleboard. Like, it's a shuffleboard you're imagining that's like on a cruise ship that like your grandparents play. That's what— and, and, and our friend Kevin that he's talking about is like, like, uh, world ranked or something crazy like that, right? Isn't he like the 100th best shuffleboard player in the world or something?

**Trevor:** No, no, no, no, no, no. I'm, I'm the 46th best shuffle player in the world.

**Joe:** He's the 16th out of 47.

**Matty:** Now what they're not telling you is there are— what, what, what they're not saying is yes, there, there are like, yeah, 100 people in the entire world that play shuffleboard.

**Trevor:** So no, there's, there's many, many more than that. Um, but the, uh, the, the, um The World Championship is invitational. It's not like, it's not like ranked truly in any way.

**Jessica:** So it's really, you know, somebody.

**Trevor:** There's a little bit of that to it. I mean, we did, we did also, I suppose that is enough. That's actually another highlight of the year. We founded the, we founded the Illinois Shuffleboard Association this year. I am the treasurer of that because Kevin beat me in a shuffleboard game for the presidency.

**Bridget:** [00:30:38] But you control the money, so the joke's on him. Exactly.

**Joe:** You won the popular vote, so—

**Jeff:** Please tell me you guys remember Love Boat: The Next Generation. That's all I can think about is Worf screaming like, the weak have no place in shuffleboard!

**Matty:** That's amazing.

**Trevor:** Yeah, I mean, sorry, also, so if you want to check out that, if you're interested, there's a series called Shuffle Insanity on the Royal Palm Shuffleboard Clubs. YouTube channel. There's also some stuff on our channel, Chef.io. Also, I had a ton of fun doing the virtual conferencing stuff for DevOps Days Chicago. I got to learn how to do green screening things, which I had never, never thought I would do, but that was a blast, as well as getting all the other things going. And probably more important than any of the other things, and like the most serendipitous thing of the year, January 1st, Jen and I got a puppy.

**Matty:** Oh, nice.

**Trevor:** [00:31:38] Which turned out to be an amazing thing this year.

**Bridget:** Yeah.

**Matty:** Does your, does your dog have an Instagram? And if not, why not?

**Trevor:** She doesn't because you know how good I am with social media.

**Matty:** Well, yeah, but I thought if anything, maybe you at least would do it for the damn dog.

**Trevor:** I have posted pictures of the dog to my Instagram.

**Matty:** Yeah, I didn't even know you had one. Okay, but if you had a dog one, I would follow it. That's all I'm trying to say because that is my main use of Instagram is to follow the accounts of my friends' dogs.

**Trevor:** Yes, there are. I follow many dogs myself. But that's enough about me. Jessica, how about you?

**Jessica:** Yeah, yeah. So 2020, very big year in transitionist things. Y'all talked about the last hug. That's pretty cool. I talk about the last conference at which My partner Avdi and I gave the last keynote. It was the first one we did together. This was Codebeam on March 7th and 8th, which they almost canceled but didn't. A lot of the international speakers had trouble getting home because the pandemic was just beginning. But I'm so glad we got to do this. It was wonderful to give a keynote together. It was hilarious. It was a big hit. It closed the conference. Conference. And yeah, I got to like, you know, kind of finish my conference speaking career on a high note. I mean, you know, maybe, maybe there'll be conferences to speak at someday in the future, but virtual ones don't count in my opinion. That's a different— it's just different. It's not invalid, but it's not the same category. So it's been a lot of adjustment. I'm very extroverted and this is not a good year for extroverts. But there's— Trevor, earlier you said something about being in a different rut. It is. We all have to change to become someone who can live in this different world. And by this time, I kind of feel like I have changed a lot. And I'm okay with being home and there's other things to do. I do love workshops. So, oh, and, and I cut my hair, finally cut it short and dyed the whole thing instead of just the front. And I started wearing makeup, which is because I'm like on Zoom all day and now I'm looking at my face all day and I'm like, oh wow, I actually like it when I wear makeup. It's not for you, it's for me. Yeah, and workshops, I think that's, That is the one thing I've found that like gives me the kind of buzz I used to get for conferences because it's a group of people that get together for a couple hours and talk about something interesting. And then a couple days later, they talk about something interesting again. And I like that. I'm doing these, oh wait, it's called Invitation to Systems Thinking. And it's me and Kent Beck teaching it, and that's been super fun. So that's—

**Matty:** [00:34:50] I have been trying, I think. Yeah, I remember like missing the one and then being like, I'm watching Jessica's Twitter for when the next one is open or whatever, because there's 2 tickets left to the next one. Oh, okay. Well, let's talk, because I will say, like, I— while it may be called Introduction, this, this is— this goes back to a thing we used to say back when I was a swing dancer. We used to say that beginner dancers take intermediate classes, intermediate dancers take advanced classes, and advanced dancers take beginner classes. And I— while I would never call myself—

**Jessica:** that is definitely happening.

**Matty:** Yeah. Like, I love things that go back to first principle. And like, even if I think I know a thing, an intro class that bills itself as intro is super fascinating to me. And that's why I want to take you and Kent's class.

**Jessica:** Yeah. So that's my 2020. Bridget, what's going on with you?

**Bridget:** So when we had this call, um, at the end of 2019, I vividly recall saying that I plan to travel less and stay home a lot. I'm really sorry for causing the apocalypse.

**Matty:** [00:35:54] Um, monkey's paw curls.

**Bridget:** Yeah, big time. Uh, so that was a slight error in judgment. Um, I will try to apocalypse less in the future. Uh, I will say I have been doing far fewer events, some virtual events. I have started enjoying the pre-record format for the options it avails you of. I'll give a couple of examples. KubeCon EU, my colleague here— or sorry, my collaborator and I recorded the talk, then we showed a draft of it to the rest of the project maintainers, The project maintainers gave us commentary and Joe edited it in in the form of a pop-up video so that we had a little pop-up of commentary coming from the other project maintainers as we were talking about the intro to Helm. Little bits of trivia and added things.

**Joe:** Now, I'm going to jump in here and say, the way this actually went was, hey, this is a great video. I want to add commentary from the community. Can we do a pop-up video style?

**Bridget:** [00:37:06] And he did, and he found the noise, to which I—

**Joe:** it went, yeah, you, the, the, you have the sound effect sells it. With, without, without the sound effect, it's just a bunch of shit on screen. If you get, if you actually get a little, a little bubble pop noise sells it.

**Trevor:** So have we yet again made it back to '90s television?

**Bridget:** Mm-hmm.

**Matty:** Yep.

**Bridget:** Um, we didn't repeat that for the, um the KubeCon North America version, but for the KubeCon North America one, we completely ditched slides and did it just like this as a podcast-style conversation. And then I had Joe add the occasional— some links here and there. And you did a thing. How did you do that with the lower thirds to get our names to come in, fade in and out?

**Joe:** Oh, that was just— see, this is the thing. These, these virtual events that she does basically just eventually become Final Cut projects for me.

**Bridget:** So that part has been pretty great.

**Matty:** [00:38:08] It's something I just thought of. So I, I have— everybody has opinions on pre-recorded versus live. And actually, Jess and I had a really long discussion, uh, right around the time of Deserted Island DevOps. And I had been very, very pro pre-recorded, and then Jess kind of had me change my mind a little bit. But going back to it, I have now gone back to my previous. And the reason I want to bring this up, because the— I hesitate to say argument, but the thing that Jess pointed out, which I was like, that's a really good point, is if it's a live nat versus prerecorded, speakers can reference earlier talks, they can kind of jam on things. And what I've seen now, especially having now several many months of virtual events in this year is, you know, I don't know if he came up with it, but I always sort of attribute back to the, the, you know, venerable John Allspaw is he's the one who introduced me to the idea of work as imagined versus work as done. I think what Jess describes is a lot more work as imagined versus work as done, especially in the virtual space. And here's why. Um, in the real life conferences where, especially if it's a single track, which is also where you're generally only going to see this, We all have to sit in the room together most of the day, and you're actually kind of rude if you don't. In the virtual, people are even more likely to do the pop in, do their talk, peace out, now I'm done. And the one exception— I hate to always go back to it— and the only virtual conference where I've seen this connection was Deserted Island DevOps. And you want to know what was interesting about that? All the speakers sat in Zoom together all day long.

**Jessica:** [00:39:49] It's my favorite virtual conference, only one I actually attended this year.

**Matty:** So that's sort of the reason I bring that up is while you're making your decisions, and there are definitely advantages and disadvantages to both sides, I feel like we over-rotate on it. Now, if you want to have what Jess talks about, you can do it in a virtual conference, but you have to— don't just expect it's going to happen because the talks were live.

**Joe:** You have to do it.

**Jessica:** Yeah, I don't watch anybody else's live talks in a virtual conference. But I absolutely never did the pop-in, pop-out thing. Yeah, in real conferences and every virtual conference I've spoken at, I'm like, well, okay, I did my talk. See ya.

**Bridget:** Though there's other things to consider there. Like, even if you want to watch a bunch of talks, your colleagues have scheduled you for a zillion meetings and they don't think that you're at an event.

**Matty:** I should, I should be very clear that that's not supposed to be any kind of a judgment on people who do only do their talk, because that goes back to a whole other virtual conference thing where it's much harder in the virtual world to get your teammates or your management to say, for you to just be like, hey, I'm going to go to DevOps Days Chicago today, leave me alone all day. They're like, but isn't it virtual? Can't you do a call? And we get that in real life, but it's easier to block that time. So the whole thing is, again, it's the gist, and I, we're not gonna do a whole episode about this. And I feel like I have this conversation on Twitter every other week. Is that the biggest thing is do not try to make your virtual event the same implementation as your physical event. There are so many things that we do, and in fact the whole structure of the way events work are based around the immutable laws of physics, right? Around people in a space and moving people in a space, and so much of what folks are doing, and I will honestly, I will you know, toot our own horn or whatever. Part of the reason that whatever success we had in Chicago being good was when we started, we said, everybody, I don't wanna hear a damn word about technology. What are the outcomes? What do we want to make happen? And then we will figure out how to implement that. But a lot of folks with their events go, well, we had this thing, so we need to have an expo booth because we always had— no, what's the point of it? And I, I said, how do we replicate the conference experience online? You know what's coming next? A virtual buffet line. I guarantee it. Watch it. In the next 2 months, someone will have a— we'll say like, well, people have good conversations waiting in line for food. We should replicate the virtual buffet line. It will come. Watch it.

**Jessica:** [00:42:26] Will they give me food at the end? Will it be from Taco Bell?

**Jeff:** Yeah, I would sign up for that though. I would sign up for that Taco Bell, virtual Taco Bell. That could be magical. But you're right, like, it could actually be a fun fundraiser, right? Man, I got ideas. But so many of the virtual conferences did suffer from the sort of like skeuomorphism, right, where they were just like, you know, hey, we're gonna take this real thing and then we're gonna just transplant that to the digital world. And it didn't work and it didn't take into consideration like a lot of the challenges. Like, I was just at a conference and, you know, they have a virtual hallway and then you click for your virtual ballroom. And, you know, like, it works, but it doesn't take advantage of, you know, some of the new avenues that you can kind of explore. And I felt like I would be much more forgiving if a conference decided to take a chance, right? Like, if they were like, we're gonna try something crazy, it may not work, right? But we're just gonna take a stab at it and see what happens. Because then you're like, all right, you know, it didn't work, but, you know, next time we might catch lightning in a bottle. So totally agree, Matt.

**Matty:** [00:43:30] That's why I think everybody needs to look to— sorry, just real quick— to the smaller events for inspiration because the risk profile is less. And so much of the conversation I see on Twitter is all about KubeCon and re:Invent and what are they doing? And I'm like, there's going to be no innovation there because the risk is too high. But you know what? Deserted Island DevOps was Austin fucking around, right?

**Joe:** Sure.

**Matty:** Try wacky shit and see what happens. And we even did that with intentionality with Chicago. We're like, We could take a risk. So, but I think, and I've seen this in so much of the discourse around virtual events is they're all, no one is looking at the small events and that is where the innovation is happening because they can, because someone's job isn't on the line, because hundreds of thousands of sponsor dollars are not on the line. So you can try a thing, you know? So I'm like, yeah, don't go look at what KubeCon did, go look and see what Austin did. Austin, as in, I mean, Austin Parker, the deserted island DevOps guy. Look at these smaller things. Look at even what Patrick did with all the talks or whatever. It was experiments. That's where the innovation will be.

**Bridget:** [00:44:37] All right. Just to put a capper on this prerecord thing, I will say that Matt Farina and Matt Butcher and I recorded, I think, an hour and a half of footage that Joe edited down to a 35-minute KubeCon talk slot. And that actually worked pretty well. So that's something just in all of our considerations. Uh, yes, there were some tough cuts. There were some places where you had to say—

**Joe:** the first, the first, I believe the first cut of that was about 55 minutes. It was like, okay, you're 20 minutes over. What do you want to cut out of this?

**Matty:** Now you need to make that available as a director's cut, you know, the extended version.

**Bridget:** That's probably not going to happen. But just that the idea that when you have the opportunity to really hone your message, you can say, You know what? This fun anecdote about the airport is not 100% essential. We're gonna cut that and we're just gonna move things along. So, and on that note, Jeff, tell us about your 2020. Were you editing things in Final Cut? Were you spending all your time on the internet?

**Matty:** [00:45:42] Like everyone else? I was gonna say, you got some big news, man. So don't be like, well, I bought a tabletop thing.

**Bridget:** Yeah, tell us about it.

**Jeff:** I wanted to comment on Bridget's last point, though, too. The other nice thing about recorded talks is like, you know, as we're trying to increase underrepresented folks participating, right, like that is a huge barrier that gets lifted in the event of folks that are nervous or, you know, aren't comfortable speaking in front of crowds, like being able to prerecord that, edit it up and get it exactly how you want before you ship it out. Right. That's huge. And that could be the stepping stone that someone has before they say, all right, I'm ready for a live talk now. So I do agree that there's value there. 2020 for me, I— when I talk about 2020 in like public forums, I always have to start it with a disclaimer. I know that things are difficult for a lot of people. I have a friend that has a saying that I absolutely love. I don't know if it's hers or if she borrowed it from somewhere, but it's like, we're all in the same storm. We're not all in the same boat, right? Some of us have yachts and we're just cutting through the waves. Others of us are in little dinghies and we're taking on a lot of water. So I want to say that I recognize that, but at the same time, you know, I'm trying to stay as upbeat as possible as I can about 2020. So a few of the, you know, positive things that came out. One, as you alluded to, I finished my book.

**Trevor:** [00:47:08] Yay!

**Jeff:** Operations Anti-Patterns: DevOps Solutions. With Manning Publishing. That was like a year and a half in the making. And, um, you know, it was— I think the best review that I got for the book was when my daughter and my son opened it and they saw their names in the dedications. And it was just like me, our teacher aide, and my wife both just sort of teared up a little bit, right? Because like it's so important for me to have my kids see that they can like participate in this larger world, right? Like they don't have to be on the sidelines. They're like, Daddy, this is a book that you wrote! Daddy, our names are in it! So that was, that was absolutely magical. We did an RV trip in 2020, which was a lot of fun. We said, you know what, COVID's kind of crazy, but if we rent an RV, we can be pretty safe. So we rented an RV and we drove out to Mount Rushmore. We were behind Trump by like 3 days, so it was an interesting trip. But, you know, had a lot of good conversations there. Yeah, it was interesting. It was a great experience. My kids still talk about it. My daughter was making a bunch of like trailers about the trip, and we were posting them on Twitter. It was a lot of fun. She still talks about it. So we're planning a road trip for 2021 as well. So that was great. Another thing that I thought was great for me was, again, looking at it from a positive light. These sort of like large economic downturns that happen really happen like once a decade. And this was related specifically to like, you know, a mass global event. But when you think about it from the perspective of operating in that sort of an environment, there's not a lot of ways that you sort of create that opportunity, right? Like, you know, fate sort of has to create that. So, you know, managing a team through this sort of downturn, you know, keeping the team together, trying to keep the team focused, adopting new ways of work, you know, relatively quickly, right? We basically had to turn the entire company virtual in a matter of days. You know, those are things that are big events that, you know, you just don't really necessarily get to switch companies and create. So, you know, taking a lot of learnings from the whole pandemic, the whole like quick shift, I thought was pretty interesting and eye-opening. And I say that from a position of privilege where I'm not worried about a job or, you know, worried about getting sick. I can have my groceries delivered. So I recognize that I'm, you know, blessed in that perspective. But, you know, from my point of view, that was, that was an interesting thing about 2020. But, you know, just gotta, just gotta try to stay positive. It's, it's, you know, I guess the alternative was we could be asked to go to war. So the alternative of staying home and watching Netflix sounds pretty good to me.

**Bridget:** [00:50:19] Good point.

**Jeff:** Yeah. Matty, what's going on with 2020 for you?

**Matty:** Yeah, so I was thinking kind of like Jess said with her last conference, my last one was pretty much right around the same date. I don't remember. It was definitely within a few days and it was DevOps Days New York, which was the last in-person DevOps Days of the year, if I recall correctly. Also one of those that, you know, we look back in retrospect and you're like, wow, did we get lucky? That, that wasn't— that nobody spread any, you know, because remember, it was— and like, in retrospect, it's really adorable. It was all like, make sure you wash your hands, let's elbow bump. And now you're like, wow, like, that even— it freaks me out to think about. Um, nothing against the organizer, like, we all, you know, where it was. Um, but there are so many people that I saw at that event that do fall into that— that was my last time, that was the last person, the last people that I, that I, that I saw. But also very shortly after that, so I got a new job. So I started— so I left PagerDuty and now I work at Red Hat in our transformation office. And what's interesting about that is almost nothing, but is my focus is actually on the North American public sector, and I specifically focus on state and local government agencies. So where that matters is it's a totally different, in some ways, a totally different kind of conversation than I've been having. And in so many ways, the exact same conversation, uh, that I've been having. But I will tell you, the funny thing in government is the, uh, local government equivalent of we're not Netflix is we're not the Department of Defense. So everybody, no matter where you're at, somebody has an excuse as to why they can't change because the people you talk about are different than them. But in reality, everybody has the same problem. Um, I did—

**Bridget:** [00:52:04] talking to the Department of Defense, what do they say?

**Matty:** What do they say? They probably say they're not the private sector would be my guess. They actually do say we're not Netflix, probably. I don't know. I don't talk to DOD, which is— I was going to, but then they said they wanted me to do local, and I'm like, cool, now I don't have to get a clearance. So that was helpful. It's funny too, I was in a group chat with some friends in DevRel, and we're talking about speaking this year, and I said, yeah, I feel like I really didn't do a lot of speaking this year. I only gave like 10 talks. And then that's also just relative, right? Like to a normal human, that's a lot. But to most of us on the call, that, that seems like, wow, yeah, you really pared it back. One of the other things that was fun that happened this year as a result of, you know, major contributing factor to doing it at all was pandemic, was, uh, my, my friend Jeremy Meese and I started a little virtual, maybe you could call it a mini virtual event. Maybe you call it a game show. It's called DevOps Party Games. And Joe has been on the show, Jess has been on the show, Jeff has been on a couple times, and it came out of, uh, as you may recall, in the early days of pandemic, a lot of folks were just like, let's get on a Zoom and play some like games together. Let's play Jackbox together, you know, these games that normally you play around a TV with your device. And we realized like, oh, you can put custom content in these. And so wouldn't it be fun to like make some like nerdy DevOpsy cloud tech content. And then, then of course we're like, well, why wouldn't we stream it? And then now it's a thing that we do once a month. And boy, am I glad we decided not to do it every week like we thought we were going to at first. Uh, but yeah, devopspartygames.com. In fact, actually next year, starting in January, we're going to expand and we will have episodes that are also in more non-US time zone friendly times because it's been pointed out to me that 8 o'clock PM Chicago time is a really shitty time for people in Europe. Uh, so we're gonna launch a, a second league, if you will, next year. So you EMEA time zone friendly people. But yeah, check that out. Um, it's been super fun and I've learned a lot about production and streaming, and I of course over-engineered the entire thing, surprising no one. The other thing is Bridget didn't really say a thing that happened to her this year, but it's a thing that was special about Bridget's 2020 that affects me. If you don't know this, and honestly, if you listen to the show, how do you not know this? For the last 5 years or so, our friendly neighborhood Kromhout here has been the global chair of DevOps Days around the world. Finally, she was like, Fuck this, this is too much. No, no, no.

**Bridget:** [00:54:53] What I said was Patrick did 5 years and I did 5 years, and perhaps we can get Ivo and Stratton to do some amount of time and bring their exciting vision for, uh, DevOps Days with virtual and hybrid events into the future. Because hey, over in Europe and here in our very own Midwest, we had people showing real leadership in this area, and I was like this is the moment for me to pass the torch to the next generation of leaders who are doing the exciting new things.

**Matty:** Side note, Bridget and I are the same age.

**Bridget:** I am definitely older than you, young man.

**Matty:** I don't think so.

**Bridget:** Do you remember the 1970s? Because I actually remember them.

**Matty:** Yeah, yeah, I do.

**Jessica:** Yeah.

**Joe:** What year were you— what year were you born, Matt?

**Matty:** I was born in 1974.

**Joe:** So you're my— you're my age.

**Matty:** Okay, so, okay.

**Joe:** So she was born in 1976, so—

**Matty:** oh, well, there you go.

**Joe:** I was born in 19—

**Matty:** so let's just let the record show that it's going to the older generation. But I think Evo is like 19, so it's probably fine. Um, no, it's, it's actually— yeah, it's—

**Jessica:** [00:55:58] wait, does Evo—

**Bridget:** is Evo covered by that Joko lyric about how I still don't— I still can't believe people can be born in the '90s?

**Matty:** No, no, no, I think it doesn't. Yeah, I'm there with you, Bridget.

**Jeff:** 'Cause every time I think about it, I'm like, what?

**Bridget:** When you have coworkers who are born in the '90s and you're like, interesting, I still remember the SparkStation I had the year you were born.

**Jeff:** I was giving a training talk and I made a Skynet reference and everyone was like, what? And I'm like, what do you mean what? Skynet. It was, it blew my mind.

**Joe:** This is, this is totally becoming that '90s podcast.

**Matty:** It really is. So I think that actually that, Joe, that's probably a good transition to the content we've been threatening all along.

**Trevor:** Oh, okay.

**Matty:** We—

**Jessica:** yeah, because we've gone way too long without talking about that.

**Matty:** Just for context, do you want— okay, go ahead.

**Joe:** Go ahead.

**Matty:** I was just gonna say the other day, and by the other day I think it literally might have been just been yesterday, I, uh, just tweeted out and said, you know, for our year-end wrap-up, you know, ask the hosts anything. You know, normal disclaimer that just because you ask us doesn't mean we'll answer it. And we basically got one question. And it was, yeah, from Josh Zimmerman from the Juberwocky, who, in fact, it wasn't addressed to all of us. It was specifically addressed to Joe, which is, what's the best episode of Babylon 5?

**Joe:** [00:57:18] All right, how much time do we have? This comes from the first year of DevOps Days Madison, which was 20-something-something. 2016, I think, was the first year of DevOps Days Madison.

**Jeff:** Yes, the same year the Cubs won.

**Trevor:** Yeah.

**Joe:** Christian, my good friend from college, Christian Harrow, who is now a DevOps Days Chicago organizer, was living in Madison at the time. He and Josh were organizing Madison, and they came up short an Ignite talk. And Christian, Christian contacted me, says, can you give an Ignite talk? And I'm like, does it have to be about tech? Because I don't work in tech. And he was like, no, it can be about anything. So I gave an Ignite talk about, about the most influential TV show no one had ever heard of, which was Babylon 5. So that's, that's where this comes from. I, and I'm sure, I think they put all those talks online. And I'm sure you can go to Madison.

**Matty:** [00:58:23] I just looked. If they do have a video of it, it's not on the DevOps Days webpage because I did find the page for your talk, but all it has is the title and your bio. But we'll do a little digging. So go to the show notes. If it's not there, actually go on Twitter and yell at the Juberwocky because it's literally his fault.

**Joe:** Or no, no, no, it's Christian's fault because Christian was responsible for recording the talks, not for seeing it.

**Matty:** All the more reason that you should go and yell at Josh.

**Bridget:** Okay, moving it along.

**Joe:** Anyway, so that's where this question comes from. Christian and, well, I watched Babylon 5 with Christian because we went to college together, and Josh knows that I'm into Babylon 5. So how many people here are familiar with the show, the best show of the '90s, TV show of the '90s, Babylon 5? Okay, excellent.

**Jeff:** So I will tell you, I had not watched it until that talk. So after that talk, I went and downloaded, I mean, recovered, I had a backup of files from the internet. I wasn't pirating, I was just, yeah, making another archive. But yes, you introduced me to that show from that talk.

**Matty:** [00:59:31] Yes.

**Trevor:** I mean, and I'm familiar with it in that I know that it exists, and I'm pretty sure Walter Koenig is in it.

**Joe:** Walter, Walter Koenig was—

**Bridget:** it's—

**Joe:** is, is a, a very, a very prominent recurring character. Anyway, basically the The the TLDR, it's it's Deep Space Nine, but good.

**Bridget:** Wait.

**Joe:** I will I will I will fight you. I will fight you on on that.

**Trevor:** Right now I have a mission. I'm gonna watch I'm gonna watch Babylon Five and explain why Deep Space Nine is better.

**Jeff:** I'm gonna let you finish. I'm gonna let you finish.

**Bridget:** But okay, I'll explain to you why Joe said that. He said that because. Let's, let's explain it by explaining possibly the worst interview question I've ever been asked. And I shit you not, this was at a startup years ago. And the, the interview was like my second round interview. And the interviewer asked me one question. He said, Star Wars or Star Trek? Show your work. And of course, that's ridiculous gatekeeping and whatever. But I did get the job, and my answer to that question was neither. The correct answer is Babylon 5, because Star— he said, which is the best sci-fi? You know, justify it. I said, Star Wars is not sci-fi, it is fantasy, it is Campbellian myth, and Star Trek is a utopian future. And in Babylon 5, when, um, They have a, you know, space rebellion and people are no longer getting paid because they rebelled against their government. They get locked out of their offices 'cause they're not paying their rent. The dock workers on the spaceship go on strike for better working conditions. Like Babylon 5 has a very real future. I love the Star Trek uh, optimism. And Babylon 5 is, I think, the, the universe we could actually turn into.

**Joe:** [01:01:38] It's a, it has— it's a real world until it isn't, and we'll get to that. Um, but anyway, so Christian also— Christian then followed up on Twitter and said the obvious answer is, is the episode Severed Dreams, which he is correct that that is probably the single, the single best episode produced. It's mid-season 3, um, and it is, it is the, it is probably the best single episode.

**Bridget:** But, but I'm sitting here looking at this list going, this is full of spoilers. You can't say anything about any of these good episodes. What you can talk about is the bad episodes because that's not horrible spoilers. You cannot say all this stuff. I'm looking at this and thinking, no, no, no, we want people to watch this show. Many, many, many great shows, many great episodes.

**Joe:** Anyway, so basically what I, what I did, what I did to one-up Christian's obvious obvious trolling was I did the best episode from every season.

**Bridget:** But you can't explain why.

**Joe:** Well, I'm not gonna— I'm not gonna go deep into these, but get your 30-second stop buttons ready. I can show Christian that not only could I—

**Bridget:** [01:02:42] are you gonna edit this part out? No, I'm gonna just give it as a special edition to Christian.

**Joe:** Anyway, really quick, the 5 best episodes of Babylon 5, one from each season. Season 1, Episode 3, Born of the Purple, which is a great Londo Mollari episode. It's very early in the run when it was— when all those episodes were super clunky, but that one stands out because it's a great Londo Mollari episode and he's one of the best characters on that show. Season 2, Episode 20, The Long Twilight Struggle. It is a very— the thing about Babylon 5 is it hasn't— the— and what makes it an influential show is it was one of the very first shows that I was aware of that had an overarching plot. It wasn't where Star Trek at the time was very episodic, aside from a 2-parter here and there. You know, Best of Both Worlds was a, was a big, you know, a big plotty chunk of Star Trek. The Klingon Civil War, they had, they had episodes that they would come back to. But Babylon 5 told one overarching story over the course of, of 5 seasons. And, uh, season 2, episode 20 is a, is a very plot-heavy episode in that, in that run. And also a great, uh, a great Londo Jekar episode. Londo Mollari, Jekar.

**Matty:** [01:03:57] Yes, Matt, just a point of, point of order about Overarch being the first show to do overarching season-wide thing. What year was season 2 of Babylon 5?

**Joe:** That would have been 1994.

**Matty:** Oh, so it's like right around actually because X-Files X-Files is kind of known for doing that, which they did on accident because they had to write around Gillian Anderson's pregnancy, which made them actually have to write a myth arc.

**Joe:** So I would put what X-Files was doing much more in the vein of what Trek was doing. They would do, uh, they would do an arc, they would do, you know, a 3 or 4, like a 2 or 3 episode story, usually around the season premiere or the season finale, and they would come back to that. They would come back to the, uh, the, the bullshit conspiracy a plot that turned out to be nothing. And now that I'm deep into season 9, I can say that plot came out to be nothing. But yeah, they were, they were toying with it. They were toying with it. But Babylon 5 really committed to the whole single overarching story.

**Jeff:** [01:05:04] The thing I noticed was like, they would— not Babylon 5, but other shows before that— they would have a, a, a running current, like, story arc inside of a larger story arc. So even if you weren't following the full series, you could watch this episode with the cigarette-smoking man, still enjoy the episode within that context, and then, you know, just sort of leave out that, you know, 10 minutes that you might have of the overarching story. So, um, I'm giving you credit so far, but I'm still on you for this DS9 comment, so I'm listening.

**Joe:** Um, uh, Long Twilight Struggle also has one of the best, uh, this was— Babylon 5 was also a very early user of, of, uh, CGI, and this is one of the best effect shots that they ever did in the entire, the entire 5-year run of the show. Um, I'm not gonna— it's sort of spoilery, so I'm not gonna talk about it.

**Bridget:** Or I don't know what— I don't know, I don't know, they had—

**Joe:** I don't know what they used, but a very early, a very early user, heavy user of CGI. Anyway, uh, season 3, episode 20, And the Rock Cried Out, No Hiding Place. Another very, very plot— we're getting into the, the chunk, the part of the show where it's all very plot-heavy episodes. But more good Londo/Jakar in that episode. Those are the 2 best characters on the show.

**Bridget:** [01:06:20] We should be clear that when he says Londo/Jakar, he does not actually mean the romantic pairing Londo and Jakar, though that would be great too. He means the interactions between these 2 antagonists and later friends.

**Joe:** Yes. Um, season 4, episode 14, Moments of Transition. Another, another big plotty episode. This is a good— this is one of the few good Delenn episodes. I was never a particularly big fan of, of Delenn as a character. Um, this is also a good episode for, for a, a recurring character, Neyrun. He hasn't— he's awesome in this episode. And then season 5, episode 8, Day of the Dead. It's the only good episode of season 5. This show ran into major production issues at the end of season 4, and season 5 was kind of— was sketchy. Very, very sketchy.

**Jeff:** So am I gonna— so am I doing so far? Am I wrapped up at the end of season 5 though, or is it like season 5 is over now?

**Joe:** You are totally— you are totally—

**Bridget:** you— oh no, you don't have to read the books. There are some books, but you don't have to read them.

**Joe:** The problem with the, the production issues that they ran into was Uh, their, their production company decided at the— that in season 4 they found out they were canceled, so they hurried up and they rushed through.

**Bridget:** [01:07:33] They wrapped the storyline sooner than they should have.

**Joe:** Yes. And then they got, they got rescued by TNT, so season 5 happened on TNT. So they had to figure out how they— because they had already shot all of the, all the plot stuff for the entire run of the show in season 4. They wrapped everything up and then they needed to figure out what to do with season 5. And season 5 is kind of a—

**Bridget:** I mean, there was some good falling action, but like, you can't stretch falling action out over an entire season, 22 episodes. So what they ended up having in season 5 was, um, what we, uh, not so fondly referred to as the tele-goths.

**Joe:** We'll get there because— nice transition, thank you for the segue. I also put together The 5 worst episodes of Babylon 5 from every season, and I'll go through it really quick. Season 1, episode 10, Believers. This is basically Christian Scientists in space. I could have chosen TKO, which is Bloodsport in space, and, or the episode Infection, which has one of the all-time worst line readings in the history of TV.

**Bridget:** [01:08:43] It looked like this. It was the captain. And this is my spoiler that I will give everyone. Blink, blink, blink. He took a pretty bad hit.

**Joe:** And you're like, what?

**Bridget:** Basically, if you watch Babylon 5, and this is a very important public service message, and you hate the captain and you think, I cannot watch 5 seasons of this joker, don't worry. He is not the captain after season 1.

**Joe:** They fix that.

**Bridget:** They fix that. And so you can just look around the wooden acting of that actor.

**Joe:** And I picked, I picked Believers because it's super preachy and that episode has a very— it's got a, it's got a pedigree to it. It was written by David Gerrold, who was, who was a well-known sci-fi author, wrote the Tribbles episode of Original Recipe Trek. Um, so it's very— it's surprising to me that this episode was just horrible. Um, season 2, episode 18, Confessions and Lamentations. Um, this is A deadly plague threatens one of the major races. This is also another weak episode for the ship's doctor, Dr. Franklin. What other notes do I have? Also a deadly plague. Come on, read the room, B5.

**Bridget:** [01:09:53] No one wants that.

**Joe:** Season 3, episode 18. This is an episode called Walkabout. This one's prominent because one of the actresses in this episode plays Wallace's mom on Veronica Mars. Um, but this one, she plays a, a torch singer in a, uh, in a club on— in down below on Babylon 5. They have this whole—

**Bridget:** I don't think the space station should have had like jazz clubs with singing. Uh, it's just strange.

**Joe:** Yeah, the songs were written by series creator J. Michael Straczynski. Say what you will about him, he cannot write songs. Um, they are, they are truly wretched.

**Bridget:** You should just watch Babylon 5 instead of that episode.

**Joe:** Uh, season 4, episode 10, Racing Mars. This is This is 2 of my least favorite characters in an episode together. This is Marcus and Dr. Franklin.

**Bridget:** I wholeheartedly disagree because I feel like there was a bunch of stuff in season 4 that was exciting but also just like explosion after explosion after explosion. And this was a very character-driven episode where you kind of had the odd couple going and like being on an adventure together out of their usual milieu.

**Joe:** [01:10:55] I like that.

**Bridget:** So nope, he just doesn't like Marcus.

**Joe:** I could have gone with the honorable mention of Deconstruction of Falling Stars, which is their, their swap-in season finale.

**Bridget:** I love that episode because they— it's basically Cannibal for Leibovitz but in space.

**Joe:** They filmed the series finale that was supposed to be the end of season 4, but then when they got rescued by TNT, they had to swap in another episode. And Deconstruction of Falling Stars, otherwise a very fine episode, would have been great in season 1 or season 2. Doesn't really work as the finale of a pretty plot-heavy season of TV. And we get to season 5, episode 11, Phoenix Rising. This is the fucking Telegoths.

**Bridget:** So they had a very minor plotline that probably should have taken 2 episodes to wrap up about a bunch of—

**Joe:** I bet you it was half the season.

**Bridget:** A bunch of like very beautifully conditioned hair, like goths that took up residence on the space station and were like telepathic and dramatic and wore black all the time. And it was just like, it would have been a fine like 2-episode arc and it went on for like 10 episodes.

**Joe:** [01:12:06] And this is where it's a real world until it's not. Earlier in the show, you see the captain of the station going over oxygen consumption logs. Where oxygen consumption is the thing they pay attention to. And then you get to the Telegoths in season 5 and candles, and they're, they're in there, they're in their quarters and they have all these lit candles.

**Bridget:** And we're like, wouldn't that be flagging a whole bunch of alarms?

**Joe:** Yeah, you can't have—

**Bridget:** did your oxygen consumption logs like go offline a few seasons later?

**Trevor:** I don't—

**Joe:** yeah, anyway, to wrap, to wrap up this thing that has gone on far too long, Babylon 5 is a very fine show, except when it's not. I'm not a crackpot.

**Matty:** If you— the other news of this is that apparently we are pivoting Arrested DevOps to now be a '90s sci-fi themed show. So watch for new—

**Trevor:** wait till we get to our, uh, wait till we get to our episode about the worst episodes of Voyager. We talk about that creepy episode with Paris and Janeway.

**Matty:** [01:13:08] If you would like to hear more about the worst episodes of Star Trek Voyager, tune in to the 2021 year-end wrap-up show.

**Joe:** We can, we can talk about, we can talk about Time Tracks. We can talk about, about that, like, that Knight Rider 2055 or whatever that was. We can talk about the Lost in Space movie, the one with the Gary Oldman from the—

**Trevor:** yeah, yeah.

**Joe:** We could talk about all the, all the things Chris Carter tried to do that weren't X-Files. Harsh Realm, and all the things that Fox tried to, tried to fill in to like lead into The X-Files, like VR-5 and Sliders.

**Jeff:** And I have a question: why did we move away from these vehicle-themed shows, right? Like, remember for a long time there were all these— yeah, Airwolf, Knight Rider, Street Hawk, Street Hawk.

**Matty:** There were Hardcastle and McCormick. Who remembers Hardcastle and McCormick?

**Joe:** There was Riptide. They had a boat and a helicopter.

**Trevor:** Yeah, Power Rangers were big then too.

**Jeff:** [01:14:10] Magnum P.I., even when you think about it, right? Oh yeah, that car was definitely a character in the show.

**Matty:** I thought it was—

**Joe:** A-Team had their— A-Team had their bitchin' van.

**Matty:** So there need to be more vehicles-oriented shows. So Hollywood—

**Joe:** and there was that— there was that, uh, there was that, uh, post-apocalyptic show Uh, with the, with the, the Energizer, uh, the Energizer, the Australian dude that used to, they used to appear in Energizer commercials where it's post-apocalyptic and they have this like really cool post-apocalyptic sort of like Mad Max sort of vehicle that they travel around in. I can't remember the, I can't remember the, uh, the name of the show. If you think about it, Jacko was the, Jacko was the name of the, was the name of the actor. He appeared in a bunch of Energizer commercials.

**Trevor:** Does the show count if it bridges the, like, the '70s, '80s, '90s, and 2000s? And I'm not talking about Doctor Who.

**Joe:** Is the TARDIS really a vehicle?

**Trevor:** Red Dwarf?

**Matty:** Oh, but that's like, I don't, I don't want to say that was vehicle-driven. Not, not the way that, like, you know, Airwolf was.

**Joe:** [01:15:19] Not the way Airwolf— yeah, Airwolf, the whole Blue Thunder, they tried to do a They tried to do a TV version of, uh, of, uh, Blue Thunder.

**Bridget:** So what I'm— yeah, anyway, I have not watched almost any of these shows, but what I can tell all of you is we do pretty well in pub trivia, or now online pub trivia, because he remembers shows that he hasn't even seen. He'll like see a picture of the actor and he'll be like, oh, that was that character's name in this show that I, I haven't watched it. I'm like, how does this happen?

**Matty:** Should we wrap this up for the 2 people that are still listening? And those 2 people, those 2 people are Josh Zimmerman and Christian Harrow, just so we're clear at this point.

**Trevor:** I don't think—

**Bridget:** but before we wrap it up, I do want to ask Jessica. I want to ask Jessica because she, like me, was sitting there going whatever to all of the vehicle-themed TV shows.

**Jessica:** I remember Knight Rider.

**Bridget:** Yeah, like when you look back at, say, your TV shows of the '90s or etc., which ones stand out for you?

**Jessica:** [01:16:24] I was a huge Star Trek: Next Generation fan, which is mostly '80s, but still, that was the big one, um, that I remember. What about you?

**Trevor:** Technically, I think it's technically more '90s than '80s. I think it just started in '87 and was 7 seasons.

**Jessica:** Yeah, I, I was like, I remember getting in trouble in choir in 7th grade for reading Star Trek books while the other parts were singing.

**Trevor:** So no joke, I literally just bought more Star Trek books the other day. I just bought, um, Trekonomics, and, um, it's a— I forget the title of the second book, but it's about, uh, a pre-postmodern scarcity— a pre-post-scarcity society, uh, and it kind of uses the—

**Matty:** that is, that is definitely no joke, Trevor, because jokes are funny and that was just concerning and sad.

**Bridget:** Yeah, explain to me pre-post scarcity.

**Trevor:** So it's the transition period between being a, like, a, like where we are today in a capitalistic society and the future where you are post-scarcity, where like resource constraints are literally So this is the thing that—

**Bridget:** [01:17:38] this is the missing Rosetta Stone that like explains, or the missing link that explains exactly how we get from reality to Truck Universe. Right.

**Matty:** It's—

**Trevor:** and it's like it talks about like, what do we do in this world where automation continues to grow and the amounts of like the amounts of work that is required to support the society is only— only requires 10% of the population. To actually deliver the resources that the rest of the population needs. And so—

**Jessica:** it's like when cars came along and got popular, and then they had all these horses. They were nicer to those horses than we are to people.

**Bridget:** I feel like this is our pivot back to a DevOps topic. So what does our pre-post-scarcity technological transformation and transition look like?

**Trevor:** And that's the end of the episode.

**Matty:** Unfortunately, we're out of time, so we can't solve global problems right now.

**Bridget:** Yeah, Jeff wrote about it.

**Jessica:** New problem.

**Bridget:** Assume that— yeah, I'm sure it's in the book.

**Jeff:** Just buy the book. All right, it's in the book, chapter 7.

**Joe:** [01:18:42] Oh, and I, I did, I did look it up. The episode— the series I was thinking of was The High Women.

**Matty:** Oh yeah.

**Jessica:** Oh, Highwayman.

**Joe:** The Highwayman.

**Bridget:** Yes.

**Jessica:** Okay, at first I thought you said The High Women and that—

**Joe:** no, no, no, The Highwayman.

**Matty:** That's a different show.

**Joe:** Anyway, moving right along. Are we, are we wrapping? Are we—

**Matty:** I think, I think we, I think we should. I think we've indulged ourselves about that time.

**Bridget:** We had a planned discussion of things we're looking forward to in 2021. Yeah, I think everyone's looking forward to scarcity, looking forward to, which is the part where, um, I get 2 shots that are spaced a few weeks apart. I'm really excited about that.

**Matty:** I think what it boils down to is you could summarize it this way: we had a section that was us talking about what we're looking forward to in 2021 and it's an empty dock.

**Trevor:** It wasn't quite that bad.

**Matty:** No, no, not quite that bad.

**Bridget:** I actually do want to step back to the boat and the storm thing.

**Matty:** Yeah.

**Bridget:** Okay, I want Trevor to tell us about the fun thing. Take us out on a, on a positive note of the fun— some fun things from 2020, because you, you had a few.

**Trevor:** [01:19:53] Okay, I'll start with my— I'll start with my, my one benefit of 2021. And this is the first time diabetes has come in handy. I will get to get a vaccine sooner.

**Joe:** Oh, always looking for that silver lining, right?

**Trevor:** You gotta have— you gotta stay positive. And with that, so I, uh, I, I have to thank myself this year for having a bunch of projects that I've started over the years and not finished, like various model kits and like stories and games and things of that nature. Um, I have gotten through some of them. I have, I have a nice Battlestar Galactica, which we didn't get to talk about, um, in our, in our review, that, that needs a second coat of paint and some detail.

**Matty:** Uh, take a picture of that and put it in the show notes, Trevor, because nobody saw it that you just held up for us.

**Trevor:** So, uh, I didn't think I referenced holding it up, but maybe I did and I just have no memory. But no, no, you didn't.

**Matty:** I meant that everybody missed it and I want them to— we— no, no, that wasn't like a shot at you for not doing that. I was saying we all got to see it, but the listeners didn't, so you should share it. That's all. It was—

**Trevor:** [01:21:06] I wasn't sure. I wasn't sure that I, I like— I could totally have imagined myself saying, and look, here's the model I have in my hand and I'm showing all of you right now in exquisite detail. This gives me, this gives me motivation to finish painting it this weekend. Um, also, I, uh, I, uh, got to playing Among Us, which I think a lot of people have gotten to play at this point. Um, and had, uh, much, much fun with being socially distant with friends. Um, and most of my suspicious—

**Matty:** most of my Among Us play is actually with my kids and their friends. And it's very amusing 'cause it will be like 9, 10-year-olds and a 46-year-old man playing Among Us. And, you know, I mean, it's fine, you can play the game, but— Do you win?

**Bridget:** Do they win? How does this work?

**Trevor:** They win.

**Jessica:** They win.

**Matty:** It's also like, I don't actually wanna have the— 'cause they all wanna play on voice, like on their Messenger Kids thing or whatever. And it looks like— so I just sort of listen to what they're having the conversation. They're also, my kids are very bad about like not talking when they're not supposed to talk during Among Us.

**Jessica:** [01:22:15] Oh, my kids are different. My kids are super strict about it. Now and then they let me play. They're like, all right, Mom, we could use another player. You can play if you want. It's pretty great though. We're on Discord with them.

**Bridget:** And I want to add a couple of plugs for really positive things. We have done a ton of Hunt a Killer this year. It is puzzle, like murder mystery in a box game stuff. Um, they vary in quality Especially because the Hunt a Killer folks, I think, acquired a couple of other companies along the way. So some of them are better than others, but they're generally very, very fun. We'll put a link in the show notes. And then also we've played a lot of online trivia run by Trivia Mafia, who ran the pub trivia we used to go to in person. We've been playing a lot more this year than we have for the last several years. I mean, even modulo travel, but like we play almost every week now. And even when we weren't traveling all the time, we didn't play play every week.

**Jessica:** And now we do.

**Bridget:** And it's a thing we do to get together with friends, basically, is play trivia online.

**Joe:** They run it on Twitch. They run it on YouTube. They do stuff on Zoom. And basically, they have a trivia game pretty much every night of the week, if you're so inclined.

**Matty:** [01:23:24] That's awesome.

**Trevor:** We've been doing a ton of— we've got like 3 Dungeons and Dragons campaigns running right now. We've got that Rime of the Frostmaiden going.

**Jeff:** How is that? You enjoying it?

**Trevor:** I'm loving it. It's a really dark story. Before that, at the beginning of the pandemic, we did Descent into Avernus. That was fun too.

**Joe:** On that note, I'll hand it over to Matt to wrap us up. Take us out.

**Matty:** Head over to arrestedevelopops.com/2020inreview for this episode's show notes, which apparently will be copious because we have lots of links of things, more so than usual, so check them out. You can listen to us on Spotify. We actually— a lot of you are listening to us on Spotify, which I'm finding interesting when I'm looking at our statistics. So cool, keep doing that for, I don't know, some reason. Uh, apparently people can listen to us on iHeartRadio, but I have no way of knowing if you do or you don't. If you do listen to us on iHeartRadio, shoot us a tweet because I'm curious. It doesn't really matter.

**Joe:** [01:24:26] On that note, I'm Joe @JoeLejeune.

**Bridget:** I'm Bridget @bridgetkromhout.

**Trevor:** I'm Trevor, @TrevorGHess.

**Jessica:** I'm Jessica, @Jessitron.

**Jeff:** I'm Jeff, @DarkAndNerdy.

**Matty:** And I'm Matt, @MattStratton.

**Joe:** We're Arrested DevOps.

**Jeff:** And remember, there's always DevOps in the banana stand.

**Matty:** A potentially dangerous alien technology was smuggled aboard this station. Now, until I hear otherwise, I intend to hold you personally responsible. Is that clear? Yes, yes, yes, it is.

**Jeff:** Is there any news of Steven's condition?

**Matty:** They're checking him out over at Med Lab 4. He took a pretty bad hit.
