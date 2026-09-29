**Trevor:** [00:00:04] I am the 25th best shuffleboarder in Chicago.

**Bridget:** And I don't even know if it's pronounced bona fide or bona fide, and I don't care because I don't have to.

**Matty:** The worst part is I think I know what you're talking about. It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matty Stratton, and co-hosting with me, Trevor Hess, Bridget Kromhout, and Joe Laha. So it's the end of 2018. It's time to wrap up this year thinking about what we learned, what we didn't learn, what we liked, what we didn't like, and mostly just have Joe be a host as he is once a year. But first, a word from our sponsors.

**Bridget:** Chef is a community of professionals practicing DevOps every day. We are making, proving, learning, and shaping the future. We are known for welcoming, encouraging, and liberating others to do the same. We do not talk about change. We do change. Join the community and learn about our solutions at chef.io.

**Matty:** [00:01:22] This episode is brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 120 common infrastructure tools such as Chef, Docker, and AWS so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog. The worst time to learn about incident response is during an incident. Don't wait for an outage to strike before getting started. The PagerDuty Incident Response Training Course is now open source and free for everyone at response pagerduty.com. Based on the same training that PagerDuty employees go through, this course will show you how to streamline your incident response process, turn chaos into calm, and demonstrate the role of an incident commander. So what are you waiting for? Go to response pagerduty.com today and check it out.

**Joe:** [00:02:23] The worst thing about the Arrested DevOps podcast is when it ends. You're left wondering what to do next. What are you going to listen to on your commute home? How do you occupy your time when walking the dog? What are you going to listen to during the quarterly all-hands meeting? But fear not, dear listener, there is a solution. You need to subscribe to Software Defined Talk right now. It's a weekly podcast that recaps all the news in cloud computing, DevOps, and enterprise software. The hosts, Cote, Matt Ray, and Brandon Wichard, will keep you up to date on all things cloud while offering tips on how to optimize your Costco haul and how to PowerPoint. It's a fun, free-flowing conversation that will keep you entertained and informed. What are you waiting for? Subscribe to the podcast today by visiting softwaredefinedtalk.com or by searching for Software Defined Talk in your favorite podcast app. So 2018 was a thing that happened, um, and we're gonna talk about some stuff and also some jokes.

**Bridget:** [00:03:26] Are we gonna talk about how 2018 has been going on forever?

**Matty:** Forever. Yeah, how 2018 is a race condition.

**Bridget:** We don't believe 2018 ever had a starting point or possibly an ending point. We'll see.

**Matty:** It definitely does. There's no exit to the loop.

**Joe:** Yeah, so, so we're gonna, we're gonna talk, we're gonna kind of kind of go back and talk about some of the things that happened in 2018 and some of the things that we, that we think will happen in the future. And also we have some, we have some, some, some carefully curated questions by people that I won't, I won't, I won't out them. It was all me.

**Bridget:** He wrote the questions.

**Joe:** I did come up with the questions. Um, but first off, we're going to talk about some of the episodes that, uh, that we put out this year and some of our favorites. Who wants to go first?

**Bridget:** I feel like Matty has the most to say on this, so let's start with his.

**Matty:** Sure, yeah, so I kind of picked 3 episodes that I really enjoyed, uh, and then I realized after the fact that they're all episodes that I did by myself. So you can interpret that however you want. Um, so one of the first ones was the episode Let's Be Careful Out There with J. Paul Reed and Mary Thengvall, and we talked about resiliency, both resiliency of organizations, resiliency of people, and resiliency of teams, which just so happened to be a theme of Mary and Paul's conference, Redeploy. We talked a little bit about Redeploy. This episode came out prior to Redeploy, so there's a little bit of insider scoop on what it was like to get that conference ready to go. But it was a really, really interesting conversation. I really enjoyed it. We always have a good time when we have those folks on the show. I also really liked the episode Punk Rock DevOps with Jay Gordon. And this was the episode where you really probably would normally just say it was a fireside chat, but it didn't— with Jay, it didn't seem right to call it a fireside chat. We decided to, because we mostly talked about punk music and metal, and then I think Chipotle a little bit. And I'll tell you a little bit, this episode is going to come up a little bit later in the podcast when we talk about some interesting statistics of the year, so I don't want to give too much away, but You also, if you go and check out the show notes for that episode at arresteddevops.com/punkrock, you can see the carefully curated playlist that Jay and I put together of music to listen to while DevOpsing. If you like, you know, kind of stuff that's not so much of the easy listening variety.

**Bridget:** [00:05:53] Wait, is the music synced up with the episode? Like if you start the music just at a certain time, the Wicked Witch dies at a certain time?

**Trevor:** It's like, it's like backwards.

**Matty:** Yes, you should try that. You should try playing the playlist according to the episode and like You know, certain howling happens when we talk about being on call. And then finally, we did a crossover episode with Corey Quinn's podcast, and so this was called Shouting at the DevOps. And if you know Corey, it was the two of us— as Corey said on the episode, we're both in love with the sound of our own voice. So I think we did an exceptionally good job of not being dueling banjos and stepping on each other. We mostly talked about the age-old topic of prepping talks for conferences. What are some tips and tricks on kind of how to get through getting started in this and not being afraid? And it was really, really helpful. And we've gotten some— I've gotten some great feedback on Twitter from some folks who have said they heard that show and now they're getting ready to submit some abstracts and kind of throw their hat in the ring.

**Joe:** [00:06:59] Excellent. So Bridget, what episode that you recorded by yourself are you going to talk about?

**Matty:** I—

**Bridget:** it's hard to call it by myself. I will point out that at GOTO Chicago, it was kind of fun to do an episode that was just a panel of all of the speakers. Because I think sometimes when you curate— not all the speakers at the entire conference, all the speakers from the distributed systems track that I curated. Because It's sort of like fanfic, right? Usually, you look at a whole track, and it's great, and you're like, oh, they approach things from this angle. They approach things from this angle. That's cool. And then the next talk goes a different direction, and you're like, they built their own S3-alike. What would happen if they talked to Kyle Kingsbury, if Jordan talked to Kyle? And so yeah, getting all the speakers from the track together to discuss each other's talks on stage was super fun. I know that most of the episodes that I did this year were live episodes at events, but I think that was probably my favorite, just because getting all the speakers to talk to each other is like life goals.

**Matty:** [00:08:07] This may be the only episode of the year so far that we've all been on.

**Trevor:** I think that might be correct.

**Bridget:** Were you there?

**Trevor:** No, I was, I was somewhere else that week. I don't remember.

**Bridget:** I was gonna say like, I don't know, this episode right now.

**Joe:** Yes, the one we're doing right now is the only one that you guys have all been on together.

**Bridget:** Scheduling is hard. I think when Dratton gave us like a very reasonable set of choices, and then Joe replies for me and says, well, the only date that works for Bridget is this one. Like, that's when we're doing it.

**Matty:** So that being said, it's not terrible to be— for us to be picking our favorite episodes to be ones that we hosted by ourselves, because the odds are, if we did an episode, we probably did do it by ourselves.

**Joe:** I was being snarky.

**Bridget:** Or if you're Trevor, you did a whole bunch of episodes.

**Joe:** Yes. Trevor, tell us about your favorite episodes.

**Trevor:** So, I actually, I mean, again, since I did only 5 this year, I kind of love all of them. I got to do the theater episode, I got to do the DevOps Days Chicago episode, which was fun because I got to tease Matt about not taking over as host so that I could host. And I think it worked for the most part. But I actually really had a lot of fun at Ignite this year, getting to talk to a bunch of folks who I've been watching inside of Microsoft, and getting to kind of talk to them and get their different perspectives of what was going on at that conference. I especially liked hearing some of the history of Git and TFS, a couple of tools I've worked with at length, and getting to hear the scoop on Azure DevOps and why it exists in the form that it does.

**Bridget:** [00:09:47] If you find out, you should tell me because I am way behind on understanding all of the exciting new things.

**Trevor:** I listened to Donovan's episode. I think that had the most okay episode.

**Bridget:** Oh, okay.

**Trevor:** The most okay answer.

**Matty:** Coworkers.

**Bridget:** Okay. I mean, as it turns out—

**Trevor:** Are they really coworkers in a 40,000-person company?

**Bridget:** It's like 130,000 is what I think Wikipedia said last time I looked. Okay.

**Trevor:** So that's 4 times what I was thinking.

**Bridget:** Yeah. I mean, I get my answers from Wikipedia like everyone else, just like I find out about things like the GitHub acquisition from Twitter like everyone else.

**Joe:** Yeah, so I'm gonna throw— I'm gonna throw in a plug. I'm gonna throw in a plug for, for the Theater Geeks episode. That one, that one I enjoyed as, you know, as the fellow theater geek. I enjoyed, I enjoyed listening to that one.

**Matty:** And I was very frustrated to have to miss that because that was like, I had kind of planned for that episode. I was super excited about it, about doing it with Trevor, and then for, for various reasons I wasn't able to make it when we actually scheduled it. So, but I loved listening to it, although it was— there was a little FOMO kind of from that perspective. But it's probably— well, again, we're going to talk about that when we talk about stats.

**Joe:** [00:11:05] Yeah, I enjoyed that one. I also, for my own selfish reasons, as I pointed out last year, I enjoy the live episodes. They're a lot easier to edit than the ones we prerecord.

**Matty:** We had quite a few live episodes this year because we had Amsterdam, Bridget said go-to.

**Joe:** Minneapolis.

**Matty:** Minneapolis, Kansas City, Chicago, Salt Lake City.

**Joe:** Yeah, Salt Lake City. Yeah, I remember Nicole Utah swearing.

**Matty:** Yeah, Nicole is our— I believe she was our special guest host for that one. Yeah, we also had a bunch of special guest hosts. We had Jessica DeVita was a special guest host for DevOps Days Kansas City recording. Nicole was a special guest host for Salt Lake City with her Utah— giving the lessons on Utah swearing.

**Trevor:** Jason Hand hopped on with me at Ignite.

**Joe:** No, just randomly walking by. Just, hey, I want to jump on this episode.

**Matty:** I was gonna say, if you see Trevor sitting in a booth with a microphone at an event, you could find yourself being pulled into a podcast, right?

**Trevor:** [00:12:08] Absolutely. Why not?

**Matty:** Or you could just walk in.

**Trevor:** The more the merrier.

**Matty:** Invite yourself to it. You know, I'm sure he wouldn't mind.

**Trevor:** Well, Joe, you may hate my new idea. So I've been trying to think of more podcasts to do. Joe, have you seen Alton Brown's new revisited Good Eats episodes?

**Joe:** I haven't seen any of the, any of the new because it airs on a cable channel that, that YouTube TV does not carry in my, in my neck of the woods. I have not had a chance, but I am an, I am an OG Good Eats fan.

**Trevor:** So he goes back to old episodes before he— so he's gonna make new episodes of Good Eats, but first he's going back to old episodes of Good Eats and he kind of talks over them and says where he's wrong or where he learned better ways to do things.

**Joe:** Oh, so he MSTs his own show.

**Trevor:** Exactly. He literally MST3Ks his own show. And so that's kind of what I'm thinking we should do with a select few of our old episodes is go through and say, this is where we said things like me in the first episode where I literally had Googled the definition of DevOps to say it on a podcast.

**Bridget:** [00:13:14] Oh, timeout, timeout. We're not having any more definition of DevOps discussions, please.

**Trevor:** I know, I know, I know.

**Matty:** But that's why it would be fun.

**Trevor:** But that is a concrete example I can point back to about somewhere where I know something I said was very wrong without going back and listening to the whole catalog first.

**Joe:** I think it would be fun to do, but I think it would be really annoying to listen to, especially if you had the same 2 people just kind of talking over themselves. It would be really difficult to to figure out.

**Trevor:** I think you'd have to have a lead in and lead out sound effect.

**Matty:** Yeah, there'd have to be a sound, and it would have to be kind of a it would. I would think you would do it as one episode where you would just take a couple clips from a little thing, and you know, we'd like listen to a couple minutes of one episode. This happens, and then there's do do do do do do.

**Bridget:** Run old timey banjo music under it.

**Matty:** Right. Oh my god! I can't believe I did that.

**Joe:** The Wayne's World dream. Sequence. Yes, that's probably the way to do it.

**Matty:** So listeners, if you like this idea, tweet at us @ArrestedDevOps and tell us if you think it's a great idea or how we could do it better, or what are some things you remember from old episodes where you thought we were completely full of horse crap? And that's theoretically—

**Joe:** [00:14:23] we take somebody else's podcast and that is not—

**Bridget:** only if they participate.

**Matty:** Well, obviously only— I thought you were gonna say only if it's Software Defined Talk, because I think that one we could probably I have, I have, uh, listened to every episode of Software Defined Talk. Some of them are begging for the riff tracks treatment.

**Bridget:** I think some of them I listen to on a plane and I'm falling asleep, and then I rewind it and I listen to it when I'm actually awake because I don't want to miss it. Because it's not—

**Matty:** I, I really like this idea of doing a crossover riff tracks thing with SDT where we, where we would give them enough and be like, listen to this episode, provide some audio commentary for it, then give us one of your old ones that you want that you don't mind if we riff on.

**Bridget:** Okay, so we're now in danger of making a podcast about podcasting. So I want to bring this—

**Matty:** This is the one time a year that we do that.

**Joe:** Yes.

**Bridget:** Well, I want to bring this back to—

**Matty:** Just like Sasha used to have to listen to conversations about source code management on The Ship Show.

**Joe:** Well, and we'll get further into the podcast about podcasting, but you brought up statistics. What statistics would you like to share With with the with the people that are brave enough to listen to this episode.

**Matty:** [00:15:34] So we've only got a few that we're going to talk about. We're not going to drive into like how many people visited the website and how many episodes were downloaded and everything, except for one. In 2018, we passed a landmark number, and we had over what we have now had over one million listens to the Arrested DevOps podcast. What does that mean? A whole lot of nothing, but it's a big number that has two commas in it.

**Bridget:** Million.

**Trevor:** One, if you think Matt doesn't know what the other statistics are, they're his home screen on his iWatch.

**Matty:** No, to be honest, I was telling Joe during the— and Bridget during the time before we recorded— is I didn't even look at— this was the first time I looked at our Google Analytics was today for this entire year. So, but I do like find out, like I get daily— not daily, I get like weekly reports on like referrers and stuff, which is always interesting to see where we're being linked to. Different people write blogs, and that's always really kind of fun to be on those lists of good podcasts. I haven't found us being listed on a list of bad podcasts. But if you want to get my attention, refer, you could do that with the referrer and I will notice it. So if you want to get my attention, do it through referrer links. But what I thought were some interesting ones were to think about what our most listened to episodes were. So the number one most listened to episode in all of 2018 was Punk Rock DevOps with Jay Gordon. And I can only assume that it's also— it's partially because of Jay's immense popularity on the Twitters, but also because, I mean, it's a very, I think, alluring-sounding name to be like, I'm gonna listen to some stuff about some music, maybe. I don't know. But if you super love that episode, tweet us and tell me why you think it was the most listened to episode. Our number 2 most popular—

**Trevor:** [00:17:17] Matt, do you have hashtags for each of these tweets?

**Matty:** No, just tweet, just whatever. Don't— I don't like hashtags, especially when you do too many hashtags, like when people hashtag the word the and all the stuff.

**Bridget:** You know, you know, some people set their like tweetbot up such that it filters out any tweets with too many hashtags.

**Matty:** Oh really? Sweet, smart. Um, and the number 2 most popular episode— I'll take this. So right now, listeners, Try to guess what it might be. And if you said Theater Geeks Unite and Tech Over the World, you were right. You don't win anything, but that— I've seen that episode referred to many times because I'll see these Twitter threads when people keep bringing up like, oh hey, I was an acting major and now I'm in tech, and everyone's like, you should listen to this special episode of Arrested DevOps with Chloe talked about this and Nathan talked about that and blah blah blah. So please continue to do that because It's a really, really fun episode.

**Joe:** [00:18:18] Yeah, that was a good one.

**Bridget:** Yeah, I was gonna say, like, actually considering that our most popular episodes have my coworkers on them, I'm gonna say that's pretty much fantastic.

**Matty:** We should just keep interviewing them. Well, the odds are pretty good these days. I mean, it all depends.

**Joe:** Well, because as we figured, there are 100 and some odd thousand of your coworkers.

**Bridget:** Oh no, no, it's not that. It's like on the advocates team, I think we have like 80 or so that haven't been on the show yet.

**Matty:** Oh, okay.

**Joe:** Only 80.

**Matty:** Only 80. I was gonna say, but that's the thing.

**Bridget:** But like, 10 of us have been on the show.

**Matty:** Yeah, I was gonna say.

**Trevor:** So we should get— we should get everybody who hasn't been on yet.

**Joe:** Yeah, that's 3 years worth of content.

**Matty:** But there's quite a few.

**Trevor:** Everybody says a sentence in order and we'll make up a podcast out of it.

**Matty:** You know something that happened this year that we weren't talking about, but I was thinking about this when we were talking about some more of Bridget's co-workers who weren't on the show this year, but they did record an episode with us. So Brian Kettleson and Eric St. Martin. Yeah, we recorded. So this is the lost episode of Arrested DevOps that Eric is going to find.

**Trevor:** [00:19:24] One of many.

**Bridget:** No, Eric was on the show this year. He was in the GOTO Chicago episode.

**Matty:** Oh, he was in the GOTO Chicago episode. Okay.

**Joe:** And the GopherCon episode. That wasn't? That was last year.

**Matty:** That was last year. So we recorded. We attempted. The impossible, and it proved to be improbable and mostly unlistenable. But we decided to do a big crossover episode about tech podcasting with hosts from the aforementioned— from The Ship Show, from—

**Bridget:** I tried to listen to that.

**Matty:** Oh my God. From the Popcorn Food Fight, from Software Defined Talk, from—

**Bridget:** You can't have a podcast with like 10 people.

**Matty:** No, no, but I still think if it's— the worst part is it's like 2 hours long. So not only would it be very hard to listen to, it would have to be 2 episodes that were very hard to listen to. So we may eventually just put that available somewhere for the— this is a deep cut Arrested DevOps. We're going to put that behind a Patreon link.

**Joe:** [00:20:25] It's like, if you want to listen to that one, it'd be our unreleased and B-sides, just like Bob Dylan.

**Matty:** Exactly.

**Trevor:** Put those up.

**Bridget:** Oh gosh.

**Matty:** So, but it was, it was a lot of fun to do. I just don't know that it's a lot of fun to listen to.

**Bridget:** I don't think I ever want to go to a meeting where 10 people are trying to talk, let alone listen to a podcast.

**Joe:** All right, so moving on. So we're going to talk about what happened to y'all in 2018. Um, some fun stuff. Go talk about— okay, talk about some—

**Bridget:** honestly, for 2018, I'll just say that, um, I tweeted some time ago that airline status is the gamification of poor life choices, and which is why after I made the top-level status on Delta in 2016, I cut way back for 2017. And I made the mistake in 2018 of saying yes to too many things, which means I have Diamond on Delta again. Fantastic. Which means, of course, I will not get to enjoy it much in 2019 because I will say no to everything. This is the cycle.

**Matty:** [00:21:29] Yeah, you're kind of butting them up in the— yeah, maybe do a 2-year cycle.

**Bridget:** I know, right? I mean, like, you get the status, like buying iPhones, right? Right.

**Matty:** Yeah, you—

**Bridget:** anyway, so there was a lot of travel. It's all kind of a blur. I'll write a blog post about it at some point. Um, I will say that the parts where Joe gets to come with me are really nice because you can't very well expect, like, you know, conference and colleagues and whatnot to entertain you at every second of the day and night, which apparently my job, which Joe is great for. But I think that probably the, the main thing that changed a little bit in terms of my job is getting more involved with and paying more attention to like the product side of things. So more on that when we get to what I'm looking forward to next year. But basically, it was interesting to kind of move from giving so many, uh, I didn't do so many conference talks this year. I did a bunch more workshops, which still involved travel, but that was the open source Kubernetes workshops on container.training with Jerome Pettazzoni. And it was nice to spend some time focused on workshops, and then it was also nice to start getting involved with product. So that's, that's 2018 for me. How about you, Matty?

**Matty:** [00:22:48] So I did a lot of travel this year. I was surprised when I kind of pulled up my TripIt stats that I traveled more in 2015 than I did this year because I have a perception that I traveled more this year than I ever have. But then I started to do the math and realized that I only traveled for about half the year. So when you kind of look at these things cumulatively, when you see that I was on the road 135 days out of probably 200 days, that's quite a bit. The one interesting statistic is I went to more— I visited more countries for the first time this year than I have visited in my entire life up until this year. Otherwise, that would not be possible to do because you'd get into a loop. Yeah, yeah. So I did a lot more international travel this year. I got to go to a lot of great events, went to Australia. I was in Amsterdam twice. DevOps Days Amsterdam was great. I recommend all of our listeners, you should just go. Figure out a way to make it happen, you know, because stroopwafel, fries with mayonnaise and stuff. So, and this was, yeah, this was really my first full year at PagerDuty. I had just, when we did our wrap-up show last year, I had literally just left Chef and just started joining PagerDuty. So I had no idea what I was in for. And it's been kind of a fun growth year. When I started, most of the beginning, most of the first half of the year, I was the sole DevOps advocate at PagerDuty, and now we have— there are now 3 of us, and we're hiring a developer advocate as well. So the team is growing, which is helping things scale, and I'll have some thoughts on that when we talk about what I'm looking forward to for 2019. I did a relocation. I moved from Chicago to San Francisco over the summer, but because of all that travel, I probably lived in San Francisco cumulatively about 2 and a half months out of the 6 months that I've actually had an address here. So I— and it's only been in the last couple months that I've been here for any extended amount of time. So I still feel like very new to the city, but I can walk to work. As a lifetime Chicagoan and Midwestern person, it sure doesn't feel a lot like Christmas right now because it's out.

**Bridget:** [00:25:01] It doesn't feel that much like Christmas here either. It's like 40 degrees Fahrenheit, not Celsius.

**Joe:** What snow we have is melting.

**Matty:** I— we had like our, our happy hour, like our after, uh, our work happy hour kind of event last week, and they had like a disco ball going with lights, and the lights were playing over one of the windows, and like my default thing was, oh shit, it's snowing. I just caught, you know, like sparkles out of the window, and I'm like, it looked like snow blowing around. I'm like, No, of course it's not. We're on the other end of California. And I got 5 new tattoos this year, so one of which I just got today.

**Bridget:** Wow, that's pretty impressive.

**Matty:** So that was, yeah, so it was a year of a lot of change.

**Trevor:** I spent a ton of time with Microsoft this year.

**Matty:** Okay, me too.

**Trevor:** Weird. One of us works for them though. It's not me. So I spent— my job this year has been to be a partner architect with Microsoft for Chef. And so as part of doing that, I helped launch the Chef Automate managed service for Azure preview this year at Ignite, which meant I got to go up on stage with Jeremy Winter and show it off, which was super fun to get to, A, put a product together, and B, then get to show it off and launch it on stage. I'm also finally learning guitar properly. I've been failing to play the guitar for about 20 years, and so now I finally hired a teacher, and it's amazing how quickly it's going because of the, like, little baby steps I put in over 20 years, which has just been super delightful. That's awesome.

**Bridget:** [00:26:46] Yeah, Joe actually, a couple years back, hired a teacher because he's like, Money can be exchanged for knowledge about guitar.

**Joe:** I continue to fail at playing guitar every Monday night from 8 to 9.

**Bridget:** But you get someone telling you how to improve.

**Matty:** I hope only that at the 2019 wrap-up show I'm able to sit down and say, and in 2019 I learned how to play guitar, because that is one of my goals.

**Joe:** Yes.

**Bridget:** Oh, are we gonna have an extended outtake with all you gentlemen playing guitar together?

**Matty:** That is really going to be amazing. Yeah.

**Trevor:** Speaking of which, I did get to play at the Chicago House of Blues this year with the chef band, which was an amazing experience.

**Bridget:** Fun.

**Trevor:** We did 5 songs, which is 4 more than we usually do.

**Bridget:** Wow.

**Joe:** Very cool. Very cool.

**Trevor:** Hey, Joe, what did you do this year?

**Joe:** Oh God, what did I do this year? I felt like I followed this person around the world.

**Bridget:** We went to Australia again.

**Joe:** We went to Australia again. The coolest place we went, it was also the coldest place we went. I say Norway just because I think that was— now I'm racking my brain. Yeah, I think that was the, that was the new country. I think everywhere else we went we had been before, but we hadn't been to Norway, which was part of the reason we picked— we said yes, or I had you say yes to BoosterConf because we hadn't been to Norway.

**Bridget:** [00:28:14] Is this the part where we admit to all of our listeners that if you want me to speak at your event. It's him. Yeah, if you convince Joe, he will convince me.

**Matty:** The secret pipeline is through—

**Joe:** the secret pipeline is me. So yeah, Norway was really fun. We did a fjord cruise, and yeah, Bergen was cool. So now moving on to the carefully curated questions. All right, so esteemed panel of tech experts. 2 years ago—

**Trevor:** Techsperts, if you will.

**Matty:** Yes. Since you didn't show up, let's ask Matt, Trevor, and Bridget.

**Joe:** All right, so 2 years ago, everything was Docker, Docker, Docker. This year, it appears to be everybody wants to kuber some netties, TM Bridget Krumhaupt. What are all the conference talks going to be? What are you going to be seeing in the CFPs? Next year and the year after?

**Bridget:** [00:29:17] So those are 2 different questions. What are you going to be seeing in the CFPs, and what are the conferences actually going to program? I do think that in the case of something like a KubeCon, you're going to be in that ecosystem. What I saw a lot of in the CFP, even in Copenhagen this spring, and I think we're getting a lot of traction in terms of people wanting to discuss it, is a service mesh. That's, okay, you have some containers. Cool, let's orchestrate them. The containers are dancing around to your tune. Ooh, how do we deal with all these containers and sending things to them?

**Joe:** Shrug.

**Bridget:** Then people start talking about service mesh. It's interesting to note that there are only 3 projects that have graduated from the CNCF's little program there. I can't remember the name of it right now. Maybe the program itself doesn't have a name. It's just kind of the status of the project. Kubernetes is a graduated project. Prometheus is a graduated project. And now Envoy, which is underpinning a lot of service mesh stuff, is a graduated project. I think that that's because, again, whether people are trying to sell something in the space when a space is heating up, or, hey, maybe, hopefully, cross fingers for program committees everywhere, there are actually some experience reports, I think we're going to be hearing, hopefully, some unvarnished good, bad, and ugly of what happened when you decided to glue some Envoy to your Kubernetes. That's what I think I'm going to be seeing in that specific corner of the ecosystem. How about you folks?

**Matty:** [00:30:54] Serverless DevSecOps, whatever that means. That was a joke.

**Bridget:** I did appreciate that when Kelsey Hightower was speaking at KubeCon, he mentioned that You can have serverless and also Kubernetes, just like you can have zip files and tarballs. It's not like you pick one and you never have another choice.

**Trevor:** Absolutely.

**Matty:** I think we're going to continue to see more, and again, depending on where you're at, but this DevSecOps thing, for whatever we call it, or whatever we care about its name being silly or not, I'm seeing more and more of customers and prospects and people in the field that are very interested in how do we leverage these same technologies, these same approaches that we've been doing through DevOps and getting security involved. And should— have we been seeing talks about this? Of course we have, but I think it's going to multiply, and I think it's going to be a pretty consistent theme as opposed to kind of a novelty through next year, through a lot of events, and thinking about kind of also the business response and the business side of all of this DevOpsing, because as companies are starting to understand, and we've got some experience reports now too, as Bridget mentioned, referred to, which is a great thing when we've got— here are organizations that actually have adopted these practices through their own business response and their own business operations. It's not just the technology operations side, so I'm expecting to see a lot more of that, at least I'm hoping to see a lot more of that because where I'm seeing it, it's pretty successful.

**Trevor:** [00:32:29] So for me, in my little niche of the world, what I think we'll start seeing more of is the minimum viable application modernization project. So everybody knows they have their crazy old crusty app that they just shoveled into the cloud, and it's sitting there on an IaaS machine. Not been optimized or anything. I think we're going to start seeing those experience reports of how folks have either shunted it into Kubernetes in a positive way or figured out how to turn it serverless into some capacity without having to do some giant rewrite by just extracting some of the functions if it's an appropriate language for a serverless project. But I think we're going to see some conversations around that space.

**Bridget:** I find that really interesting, actually, because A lot of times when people say application modernization, they are talking about maybe decomposing into some microservices or whatever, but the scary, hoary legacy ball of mud, they probably are not going to do a complete rewrite on. They're going to just strangle or pattern it as much as they have to, to be able to iterate on the pieces they need to change. When I saw that you had written this, I was thinking you were describing a lift and shift paradigm, but I think what you're saying is, They lift and shift, and they feel like that's not enough? If they got rid of the old data center, what problem are they trying to solve by no longer just using the thing that they shoved into a container?

**Trevor:** [00:33:58] Well, they may not have shoved it into a container, is the thing. They may have just gotten it into the cloud, or they may not have gotten it to the cloud yet at all. Once you've got it in, even if you've just lifted and shifted it into the cloud, there's still the solve for— you may not have optimized it. For the cloud. And for that, I don't even necessarily mean that you've optimized it as in you've converted it to cloud services. Optimized it as in made it so that it's on an appropriately sized VM, you know, that if it can be scheduled, it's scheduled, things like that.

**Joe:** Right, right.

**Bridget:** And especially if your traffic patterns vary. I know I've seen people who are like, we don't really want to pay for an instance.enormous.expensive.forever 2XL, you know, 20XL, but sometimes our traffic is like this, so we have it in one of those just in case. And I'm like, oh God.

**Trevor:** You put your data center in the cloud.

**Bridget:** You put your data center in the cloud and you wonder why the cloud is expensive.

**Trevor:** I think we'll see some talks. It may not be called minimum viable application modernization. It may be that things fit into that, but I think those are some of the conversations we'll start seeing. Over the next couple of years.

**Bridget:** [00:35:09] I think you're right that we're going to see those— we are seeing those conversations in the customers. I will be very interested to see if it's going to be vendors who convince the customers to tell that story on stage. I bet we're going to see this at the first-party events. This is going to be like, while the long-winded CTO stops talking, like 20 minutes of this customer coming out and talking about this is when I think we're going to see the earliest of these.

**Trevor:** Yeah, that's probably true.

**Joe:** Um, okay, moving right along. Obligatory podcast about podcasting. When you folks— when you're listening to podcasts for fun, not work-related, if you listen to podcasts for work-related reasons, um, what podcasts are you listening to?

**Bridget:** Well, you know the answer to this for me because you actually got me listening to this podcast. During the most recent election stuff, Joe was watching the video version of the Pod Save America specials. And I thought, oh, hey, those are like all those Obama speechwriters I really liked. They do a podcast together now? Bizarre and kind of awesome. So I started listening to Pod Save America and it's excellent.

**Matty:** [00:36:23] I don't listen to a lot of podcasts these days because I don't find myself driving as much. As I used to, which was really my podcast listening time. I tend not to listen on planes because I want to fall asleep on planes and podcasts tend to engage my brain. But one that I really liked is NPR has a podcast called The Hidden Brain, and it talks a lot about mental patterns and why we think the way that we do. And there was a great episode that was sort of talking about the different mental patterns between Democrats and Republicans. And just from the, you know, kind of the physiology of cognition that has to do— it's really, really interesting if you're curious about kind of how we think and why we think the way that we do from that perspective. So it's The Hidden Brain.

**Bridget:** All right, 2 political podcasts in a row.

**Matty:** Only sometimes political.

**Trevor:** For me, I still don't listen to podcasts, but I've actually started watching series on YouTube here and there. Like, it's a good way to do something for me to have to watch while I eat lunch so that I'm not working. So I've been watching a lot of Techmoan, and Techmoan is this guy named Matt who basically finds old, like, weird formats of audio or video recording and will, like, dig up the history of them and do, like, a little History Channel special on what that technology is, where it came from, when it was used, and things like that. I've mentioned it on the show before, but it's really been holding my interest. So I've been kind of catching up on all that.

**Matty:** [00:37:57] So he does videos about like jazz drives?

**Trevor:** Yeah. Or like, one of the ones I watched recently was this little like special mini cassette format that was used exclusively for this little like caricature figure as a message recorder for families. So you stick the little tape in its mouth and record, like press a button to record a message to leave for your family members. And put like a card in it to indicate who it's for.

**Matty:** Oh, I think I— the worst part is I think I know what you're talking about. That sounds so confusing.

**Trevor:** Familiar. But it's super interesting. He just goes through all these like old obscure audio formats, or like he'll go into like why LaserDisc failed, or why like why Philips and RCA were going against each other in the tape formats. It's just—

**Bridget:** that actually sounds interesting. Is this— it's on YouTube, but can you enjoy it without watching? Because I usually listen to a podcast while I'm on a plane while I'm working on slides.

**Trevor:** [00:38:58] I think you could. I think he does show you the mechanism sometimes, but most of the time it's like, it's something that you could listen to. I've listened to it before instead of watching it.

**Bridget:** All right, YouTube DL, here we come.

**Joe:** I'm gonna throw a quick plug in here for the sole podcast that I that I still listen to these days. It's called Extra Hot Great. It's, it's a, it's a TV-themed podcast. Um, they've— it's a bunch of— I don't know if you, if you folks ever read Television Without Pity. Um, they were, yeah, they were the, the early writers, kind of the people that started that website. Um, and they do— well, they do a, they do a, uh, they still do like a TV website called previously.tv. But the thing that I, that I interact with them most is listening to Extra Hot Great. It is a very well-produced and highly entertaining podcast, even if you don't watch the TV shows that they're talking about, which a lot of it is reality TV, and I don't, I don't much with that, but—

**Matty:** [00:40:02] Well, that's sort of like how I was always able to watch The Soup even though I didn't watch those shows.

**Joe:** Okay, so moving on to our next carefully curated question. So you folks All travel way more than normal humans travel. What's the favorite— your favorite place that you went this year?

**Matty:** Oh, so I'm going to say it's a toss-up between 2. One of my absolute favorites was Sydney. So I haven't been there before. Sydney was one of the places that I actually had a little bit of time to myself. So I kind of did some touristy stuff. I got to see the city. I really enjoyed it there, but I was jet-lagged to hell. And wasn't there long enough to get any kind of adjustment. So that's why it's a tie with Helsinki. So I went and spoke at an event in Helsinki, and part of the reason it was my favorite, I have to admit, was how well we were treated by the conference organizers. We had probably one of the coolest organizer speaker events I've ever been to, which was— and they took us to some cabin out 2 hours away from Helsinki and had sauna and beautifully created dinner, and it was just absolutely gorgeous there. But I really did enjoy being in Finland. The Finns are an interesting folk. They— one thing I learned, my fellow speakers told me, they're like, don't expect a lot of questions. Like, Finns don't ask questions. It's not a good question in general. Yeah, yeah.

**Bridget:** [00:41:29] Cool. I feel like we sort of already talked about places we enjoyed, but I'm gonna say one of the travelly things that I hadn't done before that I recommend is this year we had 2 events back to back in Paris and London, and we actually took the train. We took the Eurostar, and it went through the tunnel, which was nowhere near as terrifying as I thought it might be because it's not like there's a window and you can see the water or anything like that, right? Um, and it— you're not under there very long.

**Joe:** The tunnel, the tunnel isn't clear.

**Bridget:** That would be entertaining though.

**Trevor:** Like, one of the times I went through the Eurostar, it stopped Just on the other side of the tunnel because another car was stuck in the tunnel.

**Bridget:** Ooh, okay, that's slightly terrifying. That didn't happen to us. I will say if people decide to do it though, um, be aware that everywhere that you have shitty cell reception through Paris— after Paris, everywhere you have shitty cell reception all the way to the English Channel, uh, the train will also have terrible Wi-Fi because the train is just using like a cell repeater or something. It's like the train is basically just using cellular service, so it's not like it has satellite or I don't know, whatever a train could have. It's, it's worse than like the Acela in the Northeast Corridor in terms of like the train just not— the Wi-Fi just doesn't work. And this happens a lot. And the part that's really annoying about it is— and this is the reason it's annoying— is because if you're going from one conference to another, you might be trying to work on you know, your presentation materials, you're not going to be able to. So I suggest doing what I did, which is just close your laptop, look out the window, and enjoy the fact that you're going through a very fast train through France. And it's very cool.

**Trevor:** [00:43:11] It's beautiful. Did you go in during the daytime or—

**Joe:** Yeah, yeah, I was during that. It was raining, but yeah, I was—

**Bridget:** But it was still beautiful. All right, how about you, Trevor?

**Trevor:** I actually didn't go to a lot of places this year. Mostly I went to Seattle.

**Bridget:** Um, was Seattle awesome?

**Trevor:** It was fantastic. Uh, but for the first time this year, I actually went on international travel for me instead of for work. So they let you do that? I, I know, it's strange. Apparently when you get on the planes enough times throughout the year, they'll let you get on the plane for free. Wow.

**Bridget:** Yeah, hashtag life choices.

**Trevor:** Yeah, although I'm not gonna hit— I'm only gonna be platinum this year on American. I'm not going to hit Executive Platinum, which is equal parts happy and sad.

**Bridget:** Generally happy.

**Trevor:** Yeah. So we went to Tokyo, which was just absolutely fantastic. I got to see the city from a totally different angle than when I'd been there for work. And we got to do a whole bunch of fun and cool things. Other interesting travel, I also went to Vegas for the first time and I hated it just as much as I thought I would.

**Joe:** [00:44:20] I was gonna say, did you do that on purpose?

**Bridget:** Can confirm.

**Trevor:** Please tell me. It was for Inspire.

**Bridget:** Okay, good. So you didn't pay to go there?

**Trevor:** No, I did not pay to go to Vegas, and I would never do that.

**Bridget:** Vegas is like, you walk around and everywhere is the stench of stale cigarette smoke and desperation. It's just depressing and awful.

**Joe:** Well, aside from Norway, which I thought was fun, I also enjoyed, we went to, we were in Amsterdam for DevOps Days Amsterdam and HashiDays. And aside from Amsterdam being a cool city that everybody should go and visit, it was also one of those things where it was like, everybody that we've run into at conferences seemed to be in Amsterdam. So the hanging out with people was really cool. And we hung out, the dinner after DevOps Days Amsterdam. Everybody was just hanging out. We went and took over a— we took over a restaurant, sort of pseudo got kicked out of the restaurant.

**Matty:** [00:45:25] Yeah, they weren't really thrilled with us there.

**Bridget:** No, they, they seem to remember being kicked out.

**Joe:** Well, they were, they were, they were very happy when we left.

**Bridget:** Oh yeah, I think we were—

**Matty:** because I think we started by coming in and we're like, there's gonna be like 10 of us, and then it eventually became like 45 of us. Yeah, 3 to 4 times that number.

**Bridget:** And I mean, whatever, everyone bought food.

**Matty:** Like, yeah, I was gonna say, I, I vaguely remember Bridget having the same response at the time. We'll just say we're giving you money.

**Bridget:** People bought food, it's fine.

**Joe:** Yeah, but that was, that was fun. And that whole, that whole week in Amsterdam was, was a, was a good time. Hashi Days was cool.

**Bridget:** And, uh, which we should clarify, since we're saying Amsterdam and Hashi Days, it was the Hashi Corp, like, you know, conference, and it had nothing to do with hash of any sort.

**Matty:** It was Hashi Days, not Hash Days.

**Joe:** Yes. All right, so ranty pants time. The tech or conference trend that needs to end.

**Bridget:** Okay, I'll start, and I have 2. And the first one, it's not just conference though, it's, it's sometimes conferences, but it's also meetups. But I experienced it at an event myself recently. I'm not gonna say which one, which is, look, people. If you want to serve beer and pizza, that is cool. You should serve beer and pizza. If you are literally serving nothing but beer and pizza, this is going to be a challenge for, say, the vegetarians because the vegetarian pizza is all gone, or the vegans, or the people with celiac, or the people who don't drink beer, or the people who have an allergy to, you know, wheat or yeast. Like, there are so many people who would really appreciate there being Something without booze in it, something without gluten in it. It doesn't have to be an amazing something, but it should be something. And if you think that this is just like small niche needs, keep in mind that those people are self-selecting to not come to your events because they're like, I don't know, I could go to that meetup, but I don't think I can eat pizza and drink beer again this week. So like, it's okay if you're serving pizza. I ran a meetup this weekend. I served pizza. We had a little bit of stuff that wasn't pizza. And we had beverages that were available that weren't just like lukewarm water. So that, that's my like, if you're running events, think hard about the fact that even if someone enjoys pizza and beer, they might not want it, but they might want to come to your event. Okay, so there's that. And whatever you do have at your event, it definitely needs labels so people can make informed choices about what they need. And then the other one is, and it's semi-related but not really. It's basically when I'm sitting in an audience, as I do often, watching other people's talks at events I didn't curate, I have heard so many great talks and less than great talks from dudes. So many dudes. I mean, it starts with some dudes, and then they're followed by dudes, and then it wraps up with more dudes. And like, I would really like to hear more from people who aren't. And this is a rant for the entire year, because for example, I saw a lot of great women speakers on the keynote stage at KubeCon. Where I just was. So I'm not talking about a specific recent event. I'm talking about in general that one of the biggest offenders here is us, is the tech company vendors who send someone to talk. And we send the dude who did the thing. And it's like, if he's really going to give like the 5-minute sponsor pitch and just read from a script, can you send one of his colleagues who's not him who also did the thing? So like, think hard about how you're representing your event. I'm not saying dudes can't give good talks. Some of the best talks I've ever seen are from dudes. But just think about that for a second. Who are you sending to represent your company and/or your organization of any sort? And is it going to help you get the messages across that you're trying to send? Because you might just not be thinking about that angle. And like, there are a lot of different identities that exist in the world that have a perspective to bring. And there's— yeah, I think that that is really worth considering when you're curating your event and you're deciding who to send from your organization. Anyway, so I could rant about this obviously for the entire podcast, so I'll stop now and just say, like, remember, basically the TL;DR for both of those: remember, not everyone is you. So maybe just think about that.

**Matty:** [00:49:47] Bridge it out. All right, I've got a couple, you know, and if I did a better Dennis Miller, it could be, I don't want to go off on a rant here, but not quite as ranty. One is that's been coming up lately in conversation, but I think it needs to die, which is having speakers have to pay for their own ticket. Yeah, that apparently still happens.

**Bridget:** Just don't go to those events, dude.

**Matty:** Well, it's not me. I'm not— that's the thing that's actually been frustrating is it's been coming up in several events that are actually their underrepresented minorities are being asked to pay for their own ticket. It's not, you know, I've never been asked to pay for my own ticket. I don't think, I don't remember. And if I did, it wouldn't really bother me personally because it's work. I'm in a position of privilege where that does not affect me, but it affects them.

**Bridget:** Sure, sure. You have a Corp Amex, you go on with your life. Right, right. But you still shouldn't say yes to it because you have the leverage to say no, this is bullshit.

**Matty:** To say no to that. Yes, I concur. I agree. So that's something— and we won't even get into whether or not you should pay your speakers, because that's something where it can get very complicated. But the short answer is, if you can, you should. And if you can't, you probably still can, and you just don't know it. Unless you're DevOps Days, and you're allowed to get away with it because you don't make a lot of money. You know what? Just cut that part out when I said unless you're DevOps Days.

**Bridget:** [00:51:11] I actually would like to drill down on that for a second and say, be very careful if you're going to take this advice and apply it broadly because there are tax implications, um, for your speakers if they are coming across an international border in particular to speak. Like visa implications? Yes, like their tax implications.

**Matty:** Well, I think you can—

**Bridget:** implications, just be very cautious with that.

**Matty:** Yeah, I mean, like I've had it offered to me and I've, I've, you know, the times I've had it offered to me and I've turned it down because it's like, great, give that to somebody else who Yeah, like we can't, we can't even have like, yeah, it's like, so a lot of times I said it's a complicated— the literally the least you can do is not charge them for the privilege of speaking. And that also can go back to helping with travel if that's appropriate. Yeah, of course. Another one, another trend that I think needs to die, and it's something that I am guilty of, and Corey Quinn has brought this to my attention, is we need to kill the resume slide. I think, or at least if you're going to do it, wait, as Corey would say, wait a little few slides in. Don't, don't launch immediately into your resume slide because it sort of is the, I need to validate my existence here. And you also, in your first couple slides, are the only time you have to really get everyone's attention. So I like the idea of if I'm going to— if you're going to do a resume slide, come in maybe after your first couple slides when you've had your exciting and, you know, your, your, your big open.

**Bridget:** [00:52:35] See, I will actually debate you on this one, and there was a thread on Twitter a while ago about this. I forget if you were in that thread or not, but, um, it is very easy to not worry about that unless you're not going to be taken seriously, in which case it's kind of nice to have a few bona fides there. And I don't even know if it's pronounced bona fide or bona fide, and I don't care because I don't have to. And if you're a new speaker and you're underrepresented at the conference and you're looking out at a sea of faces that don't look like yours and might be frowning at you, it's kind of nice to have some, and I totally belong here, up on the screen. So like, I think that advice is gonna apply differently to people who are in a different position of privilege.

**Matty:** What about the advice about saying do it, but do it a couple slides in so that you can have your attention-getting story to get started with?

**Bridget:** It really, this again, like this advice varies so much. Like if it's a keynote, for example, a bio slide at all for the most part. If it's one of those short keynotes, like at a Velocity sort of thing, where you have 20 minutes, you're not going to waste time on that. If you're using the stuff you're about to say there as a launching off point to get your story started, for example, I work at a streaming video startup. Now I'm going to talk to you about our Docker in production. I've totally gone right from the stuff I do to the stuff I'm going to talk to you about. I think this is a very— it depends. It depends. I don't think there's—

**Matty:** [00:54:01] then I would say my advice— but definitely don't have any slides that are boring. Like, use it with intent.

**Bridget:** Well, and avoid the boring bullet point list no matter what is on the boring bullet points, because people are going to like read down the list of bullet points before you—

**Matty:** well, right. You can only—

**Bridget:** and then they're going to fall asleep.

**Matty:** You can only do one thing at a time. You can either read or you can listen right now.

**Joe:** And I think some of that— and I think some of that the conference can help out with a proper introduction. Because the, the com— I think the conference should be telling the attendees why they care about why this person is on stage, you know, kind of setting, kind of setting them up. And I've seen a lot of varying, like, varying, like, speaker introductions.

**Bridget:** But I hate when they read the thing from the program about you.

**Joe:** That's one of— that's one of the—

**Bridget:** everything wrong. That's one of the—

**Joe:** that would be, that would be the the poorer end of the speaker introduction, because the introduction really should take care of that. This person deserves to be here and this is why.

**Bridget:** [00:55:04] Yeah, this—

**Matty:** So that's a trend that needs to die is bad speaker introductions by conference organizers. Also.

**Bridget:** I actually, when they ask how you want to be introduced, I just say like, if you want to say something about why you're excited to hear the talk or why you want me on stage, that's cool, because that's not in the program already and it's not in my slides already. I just don't want you to repeat the things that are in the program or the slides.

**Matty:** Also, more conferences should do what we did in Chicago and ask people what opening music they want to come out to, because I have found that that was the most stressful thing anyone's ever asked a conference speaker to ever do, according to several of our speakers.

**Joe:** You gotta be very careful with that if you're live streaming it, because that'll, that'll get shut down.

**Matty:** Yeah. And my final rant, which goes— it's not quite as legitimate of a rant as Bridget's point about being cognizant of people who have differing dietary needs. But I will point out something very important, conference people. Not everybody wants to drink coffee for their caffeine in the morning. Have more Diet Coke. If you want me to speak at your event, there damn well better be Diet Coke there. There should not be Diet Pepsi. That's right, Diet Pepsi doesn't count. Diet Dr Pepper is acceptable.

**Bridget:** [00:56:14] I, I will, I will point out that I'm If you've run events in hotels, which maybe you have, Matt, you may have looked at the BEOs, and I think last I saw, the cans of soda were like $6.75 apiece, and I was just like, it's terrible.

**Trevor:** Robin, put 'em in your speaker.

**Joe:** And you might also run into a hotel that is Pepsi only.

**Matty:** I know, so stop having your events in hotels.

**Trevor:** There's been a disturbing trend of Pepsi in the world. You know, 6 out of 10 places.

**Matty:** I would like to point out, by the way, that I was instructed to go on a rant. I was not instructed to create a properly well-thought-out and formulated outline.

**Joe:** Very true. This episode not sponsored by Pepsi.

**Matty:** That's true.

**Bridget:** Wait, I want to hear what annoys Trevor. Trevor, what annoys you?

**Trevor:** Yeah, yeah. So, well, I haven't been to a ton of conferences this year, and most of them have been Microsoft conferences.

**Joe:** It could also be a technology trend that needs to, that needs to end. Sure.

**Trevor:** So the thing that annoyed me at the Microsoft conferences this year was I was tracked everywhere. All of the badges had this little Bluetooth beacon attached to it that watched everywhere you walked across the expo floor. And there was a place to say you didn't want it in your signup sheet, but if you didn't read all the tiny writing, you missed that that was part of— it was like the, can I use your information during the conference, which usually means I'm going to scan your badge, which Though you're probably going to scan my badge no matter what I say. But that one in particular, it was Ignite, and I think it was at Inspire also. They had these little beacons that were attached to your badge that tracked you through the entire expo hall.

**Bridget:** [00:57:56] So do they use that for like booth traffic pattern analysis? I have no idea. I mean, I don't work in that part of Microsoft, obviously.

**Trevor:** I would guess that's what it's for, but it was just kind of weird that I would like I know that somebody knows exactly where I was at every given moment of the conference.

**Bridget:** So can you disable that yourself? Like, can you kind of slice into your badge and like cut that piece out?

**Trevor:** I don't know. There's a sticky thing onto it and I did take it off. But like, you know, it is a technology conference, but not everybody may realize that that's what that is, right? Not everybody is interested in those things and, you know, is the first thing they think of.

**Bridget:** I just wonder what they're doing with it.

**Trevor:** I hope— that's exactly like—

**Bridget:** I hope it's an— I mean, it could be super useful is like, this is where we didn't have enough, uh, water fountains and this, or, you know, water coolers, and this is where we had like too narrow of a hallway. I mean, I hope—

**Joe:** no, it's probably so they can, so they can analyze that and go to like, you know, go to some sponsors and say, you know, hey, you're a first-party event, so it's not sponsors.

**Bridget:** [00:59:03] It's all like booths for different projects and departments of the company.

**Joe:** It could be for gauging interest to see which project should continue. It's like, hey, that one got a lot of foot traffic. We should probably think about giving them more money.

**Bridget:** I feel like you can use a data point like that, but you would need it in context because what if something got a lot of foot traffic because everyone hated it and went to go yell at them? There's lots of reasons. Totally true.

**Joe:** Well, you match that up with survey responses.

**Trevor:** And blah, blah, blah. I'm just— it'd be interesting if, like, as much as I'm annoyed that it happened, it would be interesting if that was like part of one of the keynotes next year was showing off something interesting that they did with ML or something of like with that data. Like, you'll notice this year when you go through the expo hall that bottlenecks have been reduced by a third, should be reduced by 30% because of the data we pulled, you know.

**Bridget:** I would appreciate that even if they called it ML, which by the way, I have like a search and replace in my brain for like When people say that, I just replace it with Python or something. Or maybe magic. Bonus rank.

**Trevor:** [01:00:13] The other thing I'd like to see more of— I saw a tweet from Sonja Gupta the other day about citing your sources in talks and in blog posts. And I thought that's interesting and something that is probably not the easiest thing to do necessarily, but also not impossible and would add value, add nothing but value.

**Bridget:** I actually do that a lot and I make sure that I'm quoting a lot of women. And I have had people, generally women, notice just because I get sick of— I also, ranty pants, all right, I get sick of the same, like, awesome 3 talks or whatever being quoted ad infinitum. Like, there are other great talks. Or the awesome blog post from whatever year. There are other awesome things, like let's quote things that aren't by the one person everyone has already heard about.

**Trevor:** And speaking of trying to, like, being intentional about being inclusive and not targeting one gender or another or any kind of category, one of the things when I was writing the product framing document for, or the personas for the project I worked on this year, was I made sure I picked non-gender-specific names. For all the personas. And it was something that I thought, you know, nobody's going to notice this. I'm doing this for me. And actually, one of the project managers I was working with at Microsoft was like, I see what you did. Like, sent me a direct message and was like, I see what you did and I super appreciate that. So people do notice, even if you think that they don't. Not everybody's going to speak up about it, but it does matter. Yeah.

**Bridget:** [01:01:50] Let's have more product docs all about Chris and Taylor and their adventures. I like this plan. All right.

**Joe:** All right. So I will spare you all my ranty things about conferences that need to end, just because we would be here the rest of the night if I were ranting about conference stuff.

**Bridget:** I'll give you one pointer, one prompt. Slide design.

**Joe:** Oh, well. That's, that's, that's a, that's a, that's an oldie. Please, please, if you're building your PowerPoint or Keynote or, or Google's or whatever, whatever, like hand-whittled, like hand-whittled, like JSON thing you come up with, which that is also another, that's a whole nother kettle of fish. Um, you know, it might look great when you put it together on your laptop, but imagine somebody in the back of a 500-seat auditorium having to read that and maybe, maybe think about those font choices or putting that spreadsheet in there. Yeah, colors too. Yeah, high contrast, black and white.

**Trevor:** [01:02:59] Also important to figure out if you're going to be on a projector or if you're going to be on a screen.

**Joe:** And also if you're standing on super bright video wall, or if you're going to be standing on stage and it's going to be, it's, you know, a big stage and it's going to be lit, don't shield your, your your eyes with your hand or make any comments about, oh, it's so bright up here. Yes, we know it's bright.

**Matty:** Oh, oh, so, so bright. Oh, you know.

**Joe:** Yeah, yeah, we know, we know it's bright. We put, we put those lights there for a reason. Those reasons so you can be seen because there's usually cameras involved and cameras need light. So stop complaining. Just don't look at the lights. Let's look about moving forward into 2019. And what are the things that you folks are most looking forward to in 2019? Sure.

**Trevor:** So I'm looking forward to getting deeper into product work and learning more about like product ownership and things like that. I'm hopefully going to get to do more speaking this year as like part of what I do at work, which is going to be fun because I'll actually have time to do it. Because there will be time for me to do it. I'm also looking forward to— I'm going to be going down to St. Petersburg, Florida in March to go play in a shuffleboard tournament at like the main shuffleboard club, which is going to be super fun. In Florida?

**Bridget:** [01:04:23] Are you going to be the only person there who's not geriatric? No.

**Trevor:** So there's actually a shuffleboard club that has opened up in New York City and in Chicago. And like shuffleboard is way more fun than you— shuffleboard is more fun than it deserves to be.

**Matty:** Which is a pretty low bar.

**Trevor:** It is, but like it's actually super fun and super interesting. And I've had a ton of fun. Like my friend Kevin Reedy has brought me into playing shuffleboard at the Royal Palms in Chicago. And I actually played in the tournament in Chicago and placed in placed 25th. So out of 64 people who entered the tournament in Chicago, I am the 25th best shuffleboarder in Chicago as of this year. That's likely to go— I'm likely to fall down that list next year.

**Matty:** You didn't qualify with the number of people that entered. If you just said, I'm the 25th best shuffleboard player in Chicago, full stop.

**Trevor:** [01:05:23] Yeah, but I don't feel like I deserve that, so I had to qualify it.

**Matty:** Of all the things to have imposter syndrome about, Trevor.

**Bridget:** I guess I'll go because mine is actually weirdly similar to Trevor's, which is I'm going to also do more product work. I'm going to do more involvement with— I'm hopefully, if all goes well, going to be helping PM our Helm 3 release and just in general, all of our upstream open source work, helping with. It's kind of exciting because the developers who are developing this stuff don't necessarily get a chance to talk to people across the whole ecosystem, and I've spent a lot of time talking to people across the whole ecosystem. So that's kind of nice. And in conjunction with that, I'm planning to do significantly less travel, and we'll see how that goes. Joe is skeptical.

**Joe:** I am deeply skeptical about that statement. I will believe it if we are sitting here at the end of 2019 And I am not gold pushing platinum on, on Delta.

**Bridget:** [01:06:26] I really think every year I make Diamond on Delta, I try very hard to travel less the next year. That's the plan.

**Matty:** So how about you, Maddie? So I am looking to be more focused with my travel. This was definitely a year of going lots of places to get a feel for what were the events that would be good for pager duty, what would be the events that were good for me. Just getting onto a wider stage, especially because there was a lot of rebranding for me this year around— I'd been kind of more focused on software delivery and configuration management. So kind of getting more into a different kind of ops. So this year I'm being more targeted where I'm going. Still already have, I think, 5 conferences booked for the first quarter, maybe at least 6 in the first half. So I'm hitting my goals already. That's good. My metrics. The other thing is I want to do more writing this year. I did an incredibly small amount of writing, both from our own docs. We're doing a lot more at PagerDuty with— if you've seen how we've open sourced our incident response documentation and some other things, we've got a lot more of that kind of content on the way. And so I'm writing some stuff about in the area of humane ops around burnout, psychological safety, and So I'm, I'm gonna be spending more time doing that, a lot more time blogging. Doing more writing is what I'm looking forward to in 2019 because that's the thing I used to like to do a lot. I should do it more.

**Joe:** [01:07:56] Okay, I want to know what you're looking forward to. What am I looking forward to? Well, I, I won't say less travel because that's not going to happen, but I will say I'm looking forward to the things that not constantly being on a plane allows me to do, like, um, actually being prepared for, for the, the fat bike race that I participated in the beginning of March, actually being ready for that and not like almost dying on the, on the course or feeling, or feeling like I didn't. Well, I didn't, I didn't almost die, but I did hurl like, like 3 miles into the race. Um, like actually being, feeling like I'm physically prepared for that. Would be a thing. And also being able to feel like I'm prepared for my guitar lessons on Mondays where I actually make time to do that kind of stuff. Because right now it's, it's, you know, I'm, I'm here getting off a plane or I'm like, or I'm getting home from work and, you know, maybe not even making sure the thing's in tune before I run off to my lesson. And did I, did I touch it since I, since the last lesson? Who knows?

**Trevor:** [01:09:09] So Joe, something that's been helping me immensely is I picked up a 3/4 guitar. Fits in the overhead.

**Bridget:** He has a Martin.

**Joe:** I, I have a, I have a Martin Backpacker that comes—

**Trevor:** that's the one I have.

**Bridget:** Yeah, that's awesome.

**Joe:** But he doesn't bring it on the plane, and I, I don't bring car rides. Yeah, I don't bring it on the plane just because I'm, you know, I don't check baggage when I travel, so, so I'm already, I'm already bringing the maximum allowed stuff on the plane and then some. Um, but yeah, that's just being able to like do the stuff that travel gets in the way of. Not that the travel isn't fun, but you know, the other— that other stuff is fun too. What do you like to say?

**Bridget:** You're like, I go to work and I look at PowerPoint, and then I get on a plane and I go look at other PowerPoint.

**Joe:** Yep, I look at PowerPoint professionally, and then I get on a plane and I go look at PowerPoint recreationally.

**Matty:** If you want to check out the show notes from this episode, go to arresteddevops.com/2018inreview. You can also, on our website, you can sign up for our newsletter if you want. I honestly can't remember the last time that I sent one out, so you can rest assured that we won't spam you. We do occasionally send them and So go ahead and sign up for the newsletter if you want. If you go to restdevops.com/itunes, leave us a review in the iTunes Store. That actually does make it easier for other people to find the show, and you never know, we might read your review on the podcast.

**Trevor:** [01:10:42] When was the last time we did that?

**Matty:** When someone wrote a review that I noticed. Yeah, the that I noticed is— Yeah, I think the last time that we read a review on the show, Trevor, was the one that Doocy wrote. The joke one that he wrote about us, and two chimps and a mic was how was the title of the review.

**Joe:** So well, on that note, on that note, I'm Joe at Joe Lehe.

**Bridget:** I'm Bridget at Bridget Kromhout.

**Trevor:** I'm Trevor at Trevor G Hess, and I'm Maddie at Matt Stratton. We're Arrested DevOps, and remember, there's always DevOps in the banana stand.
