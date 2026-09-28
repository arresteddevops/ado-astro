**Matty:** [00:00:05] Welcome to Arrested DevOps, episode 27, A Year of Arrested DevOps. I'm your co-host, Matt Stratton, @MattStratton on Twitter.

**Trevor:** I'm your co-host, Trevor Hess, @TrevorGHess on Twitter.

**Bridget:** And I'm your co-host, Bridget Kromhout, @bridgetkromhout on Twitter.

**Matty:** Arrested DevOps is brought to you by 10th Magnitude, a cloud services company that figures if you're listening to this podcast, you are pretty cool. You can find out about joining their cloud services team at 10thmagnitude.com.

**Trevor:** We all know that being on call sucks, but what if there were a tool out there that allowed you to route incidents to the right team, @mention specific people to ask for help, and hop into chat with your team from an easy-to-decipher incident timeline that gave you full context of what was happening? That tool is VictorOps, and they're different. From setting up global on-call rotations to creating a postmortem report, VictorOps is there with you through every step of the incident lifecycle. Our real-time collaboration platform helps your team solve problems faster. Sign up for a 14-day free trial and see how they're making on-call suck less. Visit arresteddevops.com/victorops to sign up.

**Matty:** [00:01:18] This episode is also sponsored by Redgate Software. Redgate makes tools that bring the benefits of continuous delivery, safe releases, efficient development, and fast feedback to your database. Find out more about database lifecycle management, download free trials, and browse the database delivery learning program at arresteddevops.com/redgate.

**Bridget:** If you're into that IRC thing, you can find us on Freenode and channel Arrested DevOps during the show, or on Twitter @ArrestedDevOps with questions for the panel. And those of you who have gotten used to the format of this show are taking a look and saying, wait a minute, Where's the panel this time? So after an entire year of Arrested DevOps, when they, Matt and Trevor have been, you know, interviewing folks with topics from CI to security and panels of devs and ops, dev to ops and every combination thereof, DevOps in the enterprise, sparkly horses. Finally, for this last episode of the year, we thought it would be fun to revisit Matt and Trevor chatting. Without guests, and that hasn't happened since the first episode. I guess I thought, as, you know, the newest host on the show, a fun place to start would be, how did all this start? Trevor, Matt, take it from the top.

**Matty:** [00:02:34] I had an idea to start blogging about DevOps based on kind of a DevOps 101 kind of an idea, and my friend Jessica Fritchie came up with the name Arrested DevOps. So shout out to her, and thanks to Timehop, I was able to find that recently. But then, as I kind of had been listening to a lot of podcasts, as one does, and came to the conclusion that there was a gap in terms of people who were just getting started from a podcasting perspective, not getting started podcasting, but just starting to learn about DevOps. And as I always like to say, that the mission statement of this podcast was to be the, hey, my boss read about DevOps in the in-flight magazine and now I'm supposed to do it. I made that comment to somebody the other day, and they're like, there's articles about DevOps in in-flight magazines? I'm like, I don't know, but apparently I think there are.

**Bridget:** Probably.

**Matty:** I would kind of love to read them and see what they're about. So, I mean, I'm a big fan of, you know, DevOps Cafe. I mean, I wouldn't be doing what I'm doing today if it wasn't for that show. I started to learn about DevOps from listening to Damon and Jon and kind of stumbled my way into the Food Fight show and to Ship Show after that. But one of the things that I had kind of discovered was the first few episodes, when I first started listening to Damon and John, and actually, to be honest, it still happens to me, I don't always know exactly what they're talking about. Usually it's John that I don't know what he's talking about because he's making really deep references to things and I'm just not smart enough to know what John Willis is talking about most of the time.

**Bridget:** [00:04:09] Yeah, I was going to say, and you're talking about John Willis and Damon Edwards and you're doing the name-dropping thing.

**Matty:** I'm doing the name-dropping thing, yes. There you go.

**Trevor:** You swore up and down would never ever happen.

**Matty:** Never ever happen. Yep. Oh yeah.

**Bridget:** Didn't you say you were never going to tell a story about how you were talking to John Allspaw at Velocity? Has this actually happened? Have you been talking to John Allspaw at Velocity or elsewhere?

**Matty:** No, because I have yet to attend Velocity and I actually haven't met the esteemed Mr. Allspaw in person yet.

**Bridget:** Back to the beginning. I think that you're skipping some of the original story. Trevor, can you tell us all about this Azure meetup?

**Trevor:** Many moons ago, as longtime listeners will know, I used to work at a company, a different company than I do now. We were looking for .NET people and there was this new Azure meetup that was listed, and so my boss and I started attending. Well, I went the first time and it was cool and I was learning new things, and the second time I went around, there was this really loud, knowledgeable guy there with the doctor's name tattooed on his arm. I got to chatting with him while he was vaping and it turned out this guy was Matt Stratton. The rest, as they say, is history in terms of that. But that's what it's the downtown Chicago meetup, though it's about to go through a rebranding.

**Bridget:** [00:05:27] Are they moving it to the suburbs?

**Trevor:** No, we're merging with another group so we can get more people there because more people is more fun. Although Matt hasn't shown up since he left.

**Matty:** That's how Trevor and I, how we met. And so when I went to go start wanting to do this podcast, I can be somewhat self-aware at times, and one of the things I'm self-aware of is that I don't always finish what I start. In fact, I rarely do. That's why I love being a solution architect and not an actual consultant that has to actually implement things. I knew that if I had a partner, that would keep me honest because if it was my own thing, if I got bored with it and went, ooh, shiny, something else, then I would be accountable to nobody. I thought about it and I said, well, you know, that Trevor guy, you know, I was like, well, it'd be kind of cool. He's a dev dude, you know, and we've had interesting conversations. And I remember actually talking to our marketing person saying, do you think Trevor would be interested in doing this? You know, because like I was intimidated by Trevor apparently. And then I— then we talked more and that's over. But yeah, and we actually have— it's been an interesting journey to see how that partnership relationship has changed over the year for the better. Not that it was bad, but, you know, just— I think you listen to us now and you listen back to the early episodes, there's different— the voices are different. I will also say that as I remember editing the very first episode and thinking to myself as I was going through it saying, are you ever gonna let Trevor talk? You become very conscious of this when you're editing.

**Bridget:** [00:07:05] Well, and guess what? You have me on the show now, and so I'm definitely not going to let you talk the whole time. Understand me?

**Matty:** I'll try much better about it.

**Trevor:** Okay, so— I, Matt, was also a little intimidated. I was surprised and pleased that you thought highly enough of me to ask me to do a show with you. I think the second time we met was at one of the when 10M was doing the Azure thing at the Microsoft campus in Chicago and you were doing a class. It was probably because you were super busy, but I was like, oh, hey, how are you? And you were just like, oh, I'm good.

**Matty:** Actually, it was because I was mostly freaking out because I was teaching a class about Azure that I had just learned everything about about 3 days before. Yeah.

**Bridget:** Okay. So moving on to— all right, that's how things started. Moving on to the current state of things. I'm a co-host now and pretty much, thanks, but pretty much all I know is we do this about twice a month. But when I asked, well, what other stats or what other things are there about this show? Like Matt and Trevor had a lot more information than this. We talk to people twice a month. Do you wanna run us through some of what you have found or seen over the last year in terms of like, you know, some raw numbers?

**Matty:** [00:08:27] Sure. And the one thing I do wanna point out is that when it comes to stats in the podcast world, it's all guesswork. Because there's no real way to know, like, did somebody listen to the whole thing, or you really, you know, we really couldn't call them listens. So we kind of talked about how many times was the actual audio file downloaded. That's kind of an audio download stat. So I look at it from the assumption of, just for myself, I look at our download numbers and I cut them in half, and I figure, well, if half the people who download the file listen to it, that would be amazing, just for my own unofficial purposes.

**Bridget:** But But so, so which, which one got downloaded the most?

**Matty:** Okay, this is—

**Bridget:** we're on the number 27, right? Episode has been the most popular so far.

**Matty:** Sure. Okay, well, that's even— that is kind of a hard number, so I'll tell you, I'll tell you my, my theories on this when it comes in and why that's, that's stuff. So the episode that has been downloaded the most, uh, is also the one that's been viewed the most on YouTube, and that would be episode 14, How to Fuck Up DevOps. So I guess, uh, That's the Pete Cheslock effect.

**Bridget:** [00:09:29] This is like the Colbert bump, like the Pete Cheslock effect.

**Matty:** It very well could be. Uh, the, the thing though is the reason it's a little unfair is that, you know, because I looked at it and I thought about, oh well, which episode was our least downloaded? And I looked and I'm like, well, it was one we did like 2 episodes ago. I guess that gives it away. But that's the— that's not a reflection on how popular the episode is. It was recent. So we look at our— so those old numbers, they just keep growing. But I will say That's real exciting to me when I look back and I see that every episode continually grows in its number of downloads, because that means that people are listening to the back catalog and are not just necessarily listening to whatever's latest, that people are going back when they— when we get new subscribers and new people who are new to the show, and that is clearly happening as the things grow. People are doing the kind of thing that I do with podcasts where I go Wow, this was awesome. Well, hopefully they're saying, wow, this is awesome, but they're going back and saying, I want to go listen to the old stuff too. And that to me is, is, is super valuable, um, to have that kind of, of an impact. The, the thing is too, when we look at the way that people can— like, we're always— I don't want to say surprised, but always have to think about that there's lots of different ways that people consume our show. So From a number perspective, audio is king, right? So just to throw this around there, we get about 2,500 to 3,000 audio downloads per episode versus the YouTube views are about 10% of that, about 200 to 300 views. Now what we discovered though, so I always kind of thought is the YouTube was like, oh, you know, Hangouts automatically post up there. So there's, there we get a couple people, 100 people watch it here or there, whatever the, uh, but the thing was, so there was a point and I think it was because of like the, um, cause we had the gap because of the DevOps Days Minneapolis episode that didn't go on YouTube. And so Some people reached out to us and were like, what's up with the show? I haven't seen a new episode in a while. And we're like— and that's how, you know, some people, that's how they consume our show is they watch it on YouTube and they don't use a podcatcher or iTunes or watch it on the web or whatever. They use the YouTubes. And I'm like, oh, you have to remember that, right? Like, and we can—

**Trevor:** [00:11:38] I have had countless arguments about how we can improve the audio quality without sacrificing the video component. I almost always lose those, but somehow we still use Hangouts.

**Matty:** I was gonna say, if you're losing— I don't know how you're losing, because we're 27 episodes in and every single one of them, except for Minneapolis, has been done on a Google Hangout. And Chicago. Except for our 2 live episodes, which is ironic, I guess, that our truly live episodes were not live streamed. Right. I wanted to think a little bit too about, like, kind of from a historical perspective, there's a couple little historical stories that I think are fun. One of them is— so Jez Humble is a cornerstone of a lot of things I think about with DevOps. When I first started, when I first bought into DevOps, because I heard Jez on DevOps Cafe, and, like, I had this lightbulb moment. So, to be honest, so Brian Berry of the Food Fight Show, he wrote a tech blog a while ago that was the dirty little secret of tech podcasting, and he said that it was The dirty secret is this is how you get people to talk to you for an hour who you would not be able to talk to in the hallway track, or, you know, they're too busy otherwise. So a good portion, I will admit, a big part of the reason this podcast exists was, you know, to get Jez on the show. And my joke to Trevor was that you would have to have 10 episodes in the can, 'cause I was just saying like, how many episodes do you think we have to have before like we're big enough that I can dare ask Jez? And again, all respect to Jez because he's not a jerk, right? Like I could have asked him probably right away and he would have been just as friendly and awesome.

**Bridget:** [00:13:14] And he works with you now, so—

**Matty:** He works with me now, yeah. So that's a whole other thing, right? But the funny thing was, right after our 10th episode, I tweeted him and I was like, so we got 10. He's like, can we now ask you to be on the podcast? And he said, well, the trick is getting me to shut up. He said something like, the hard thing isn't getting me on the show, it's getting me to shut up once I'm on. And episode 15 was with Jez.

**Trevor:** He accepted like 2 days before he was in town too. So we actually went up and talked to him at the meetup about being on the show like 3 weeks before we actually had him on the show.

**Bridget:** So that kind of does make— that kind of poses the question, like, which comes first, the topic or the guest? You know, like, under— I know from my point of view, at least, like, I've definitely— I can answer that question from the ones that I've been proposing. From your ideas, like, which one comes first? You think of a perfect topic and then you start thinking about the best people for it, or the other way around, or both?

**Trevor:** So for me, it's absolutely topic first, and then who can talk about that topic. I'm going to probably say the first explicit thing I've ever said on Arrested DevOps, but Matt is totally a starfucker.

**Bridget:** [00:14:24] So, you're thinking of just— you've got the deep cuts, you've got the people nobody's heard of, but they're brilliant, they're fucking brilliant. Is that what you're saying, Trevor?

**Trevor:** I wouldn't go that far, but I think they're very intelligent.

**Matty:** No, and I think actually that's a really— all kidding aside, that's a really good point because it's hard for me to not like go to the echo chamber, right? Because— and Trevor kind of lives outside the echo chamber and he comes up with people that I don't— I've never heard of. And that doesn't mean they're not important, but they're just like, they're not the usual suspects. And they've been super interesting from that perspective. And I think that's something we have been trying to, whether consciously or not, to get better about is, 'cause why do a show that, you know, Paula and the Ship Show already did? You know, why cover things that have already been done somewhere else and to get the same voices? And I like to have kind of a mix 'cause some of the people in the echo chamber still have smart things to say. And we have a lot of people. Well, we have a lot of, there's a lot of people that listen to our show that are not part of that, DevOps community, you know, that this is their introduction. So I don't think it's something where we have to continually go outside the norm, but the identity of the show is really hard.

**Bridget:** [00:15:43] We'll talk about that a little bit.

**Trevor:** Identity. This comes from, this comes from the man who since June has changed his Twitter handle 8 times.

**Bridget:** He didn't change the handle, he just changed his, you know, His name. What are you? Are you Hacker of Gibsons or something now? I can't even remember what you were.

**Matty:** I was Hacker of Gibsons 8 names ago. Now I'm E Too Many Nicknames.

**Bridget:** Yeah, that's about right.

**Matty:** I think the which comes first, right? Like the music or the misery, right? It kind of goes in both directions. I can think of episodes that exemplified both. So there were some where it's like, hey, we want Jez on. And what's Jez going to talk about? Well, duh, he's going to talk about continuous delivery. But then even then, when we talked to him and we were prepping for it, we said, well, you know what? Want to have the usual Jez Humble continuous delivery talk because you've given that and people have heard it. Let's talk about continuous delivery a little differently. I don't know if we succeeded at that or not. If we didn't, it's our fault and not Jez's because it's too easy to kind of go down the same path. There were episodes too where I was like, okay, well, we just want to have so-and-so on and we'll figure it out later. For example, I was like, I know we need to have a configuration management episode. And then we, then we went out, we said we want to have this, well, who should that be? And we said, okay, well, let's, let's have, you know, Steve Murawski come out and talk about PowerShell, let's have Chris Webber talk about Puppet, and get Sean O'Meara to talk about Chef. But then I think when I, when I look at like what we're trying to do going forward too, I think our proposed topics that we've been talking about for 2015 do split that difference, you know, where we've had some that were, like you said, Bridget, you proposed some that you were being specific about the guest, but it was still because that was— yeah, I don't— like I said, I don't know which drove first, but I think we've had somewhere we're like, well, we just have to have a show where we talk about this thing and we'll figure out who we're gonna have on later. Or I know we've— I've had— we get a lot of people want to be on the show, which is like the biggest compliment ever. But, but I'll kind of say like, well, what do you want to talk about? You know, because I'll have someone, I'm like, you're super smart and I'd love to have you on the show, but What do you want to come talk about? And we'll figure out if that's a topic that makes sense for our listeners, it's something we want to talk about, something that fits in that we haven't done before.

**Trevor:** [00:17:58] We also get feedback from listeners as well. A lot of feedback has been that we kind of, as Matt said earlier, our goal was to be the intro to DevOps podcast, and there's been a lot of feedback that we sometimes go a little bit too heavy on the culture and not enough in the tools. And our most recent, the Git episode, was kind of an attempt to respond to that. So some of the episode ideas actually come from you guys, or you people, everyone, the listeners.

**Matty:** You know, and that's a good question. Now I'm trying to think about what drove— because I knew that that was driven by us wanting to have a more technical episode. And I think what it came out of was someone specifically saying, like, hey, on episode 14, Nathan Harvey talked about blah, blah, blah with Git. I think one of our feedbacks was, we want to have an episode where you talk about how to do Git. And then I don't think I went out and, like, Googled who's smart about Git, but I started— got, like, the wheels were turning in my head that we wanted to do this. And then, like, as, you know, kind of Emma comes through my timeline, as she will, and I went, oh, damn, we should have Emma on. Yeah. And like Trevor said, really, I'm having a big identity crisis with the show sometimes about who our audience is because I'm very— there's a lot of people that I know listen to the show that I'm very surprised, and not because of being a starfucker or whatever, but just because I'm like, really? We're supposed to be the 101 show. But you can't control your audience, you know, you can't define what they are and say, well, this is who I wanted to reach. And I think though, at the same time, and this is stuff that people don't that unless you're me or Trevor, you know, and now Bridget, and you know how these things come up, but we get a lot of messages from people who are affecting change in their organization and saying like they're really, they really are getting out of this what we intended. People are saying, I didn't even know where to start. I listened to your show about this and now I'm actually trying to do that. Or I had someone send me a message that was basically like, I drink the Kool-Aid, I'm in. My organization is not. It's a fight. I am continually fighting for this and I feel very defeated about it, but I listened to the show and people are doing it. So it makes me feel like this is something that can be done. And you get stuff like that. And that's way more awesome than to hear that, like, you know, Mike Fiedler listened to the show. No offense, Mike. You know what I mean? I'm like, that's great, but Mike's doing the work, right? Whatever. You know, that's cool.

**Bridget:** [00:20:25] Mike Fiedler can listen to the show and enjoy the show. And possibly he isn't going to take as much of a takeaway from it as the people that you're aiming it at, but he can still enjoy it.

**Matty:** Yeah, and maybe there'll be some more.

**Bridget:** We should get Mike Fiedler on the show.

**Matty:** Mike Fiedler's been on the show.

**Bridget:** Oh, that's right, he was on the Sissiman episode.

**Matty:** He was, yeah.

**Bridget:** I did just listen to most of them. Not every single one all the way through.

**Trevor:** I play the drinking game where you have a shot every time Matt calls me young.

**Matty:** That's a 2014 joke. We need new jokes for 2015.

**Trevor:** Well, we gotta close out 2014 with a bang.

**Bridget:** Let's just say before we move on to 2015, 'cause I do wanna talk about what we want for the future of the show, let's have a few moments of reminiscing. Some of the favorite moments from this past year.

**Matty:** So, yeah, some of our favorite moments of the first year of Arrested DevOps for your listening pleasure.

**Trevor:** As a developer, I've been doing all kinds of DevOps.

**Matty:** I like to think it's more of a factor of how much everybody liked it than my low expectations. That sounds like a Decepticon to me. I have opinions and the internet needs to hear them. Why is the password on the front page of the website? Surely that's a bad idea. You're not going to hear me say, you know, when I was talking to John Allspaw at Velocity. It's 2014, and if you're not using config management, then you're probably doing something wrong.

**Trevor:** [00:21:40] I hate to do this, but I'd like to call bullshit. I don't think it's just culture, and I also don't think that it's 2014, so of course everyone does config management.

**Matty:** You don't have to feel dirty for using Microsoft. I don't think the communication is a result of, you know, the layout of the furniture in the office. Tools are easy. People are what's tough. Enterprises are risk-averse. Well, if they were really risk-averse, they would actually care about disaster recovery.

**Trevor:** Matt and I both dropped the ball this week and told Dave and Sasha about checkouts about an hour before the episode started.

**Bridget:** If you treat developers like children, they're always going to be children.

**Matty:** There's no special chip that we can stick in the back of somebody's neck that says that you're going to be a nice person. It's hard to believe, but it's true that a version control system means copying a file to .bak. Nobody wants to use RCS anymore. The information wants to be free, and nothing more so than your passwords. Probably the standout thing for me I've learned since I've been here is quite how much you can get done, the kind of the things you can do when the consequence for failure is learning more stuff.

**Bridget:** [00:22:49] We've now just experienced an audio cut of a whole bunch of wonderful moments. I have no idea what they all are. I'm sure they will probably be whatever Matt picks. We have some ideas, but we'll see. I hope that he includes the bit from episode 1 where he doesn't want to read the classic John Vincent quote because he doesn't want to say the word shit on the air. It's hilarious. It's like such adorable, so baby podcaster. I love it. And then by the time the Etsy app rolls around, everybody is swearing like chef employees.

**Matty:** So that's a good experience. I want to point out that when Bridget was like going back and listening to old episodes, she sent me a message. It was like, Please tell me you stopped doing that spring time every time somebody swears. I'm like, I got tired of that.

**Bridget:** Oh God, yeah, when you had Sasha Bates on and she kept spring, spring every time she said anything.

**Trevor:** So what happens is there's a— in iTunes—

**Bridget:** [00:23:51] yes, you're explicit, it's fine—

**Trevor:** you can mark the podcast as explicit, and Matt and I didn't want to just turn people away because they didn't want to listen to an explicit podcast. Eventually Matt realized that was a fruitless effort.

**Matty:** It might be a feature, not a bug. Now that we've got this massive following, then we can do whatever the fuck, you know.

**Bridget:** Yes, so I'm really happy that, that I can say fuck and nobody is going to turn me into a bleep or a sproing noise. Not good.

**Matty:** You do know I'm gonna go and put a spring over when you said fuck just now.

**Bridget:** And then another Another moment that I really like is in episode 2, because Trevor has this really awesome line about how one of his favorite things about being a developer is you can never stop learning, because if you stop learning, you're dead. I'm listening to this and I'm thinking, I want to do the MST version of this where I answer and say, Trevor, so you're like a shark? You never stop swimming. It's like, all right. Those are the 2 moments from the really early episodes that I thought were just adorable and so funny. So awesome, actually. And then other, probably the 2 episodes that I was on and then the one that I've hosted so far before this one were a lot of fun. Just being on with Patrick Dubois, DevOps Days Minneapolis, and then having that really fun episode with Jason Dixon and Pete Cheslock where we just talked about how awesome conferences are.

**Matty:** [00:25:21] That was a really great episode. That's one of my favorites.

**Bridget:** That was super fun. And then of course hosting the Enterprise one with Michael Ducy and Ross Clanton and Steve Pereira, where we talked about DevOps in the enterprise. And then they were— apparently this podcast is spawning new podcasts now.

**Matty:** Oh my God, that episode was so hard. I mean, so you guys who are listening, y'all who are listening to it, I think I covered it up pretty well in the edit. I did not have poor Mandy have to try to salvage that, so I did it myself, but The— there was— it was like a comedy of errors on that. It was me on like hotel Wi-Fi at 6:30 PM when the entire hotel is trying to watch Netflix at the same time. And, and then the other thing that's happening is Budapest.

**Bridget:** Remember, Deucey was in Budapest.

**Matty:** He was in Budapest, right?

**Bridget:** He sounded better than you.

**Matty:** Herrera, I think, had the worst connection of everybody, and he was like at home. So who knows?

**Bridget:** But he was in Canada.

**Matty:** He was on Canada.

**Trevor:** Well, that was also the same day that there was the huge Azure on its network spike.

**Matty:** [00:26:24] So we also had, at the meantime this is going on, so if you listen to that episode and you wonder why you don't hear Trevor and I talking very much, we're like massively trying to figure out why are the websites down and my IRC bouncer was down so I couldn't get onto IRC. Yeah, it was, it was all this crazy stuff and I think it ended up being a really good episode when it was done. And it was funny because I was listening to a week later, there's a podcast I like called Podcaster Roundtable that's just a bunch of people who do a lot of podcasting talking about how they do it, and the episode was like, what do you do when everything goes wrong?

**Trevor:** So I really, really enjoyed getting to talk about help in episode 17 because it's just such an important topic to me. It's helped me be the developer I am now. I like to think I'm a good developer, so I like to think that's part of what helped me be a good developer. I also, I really like this story. It was in episode 11. Uh, we were talking to Etsy. All Spa and Cowie were talking about telling somebody they were being a dick.

**Bridget:** [00:27:28] Specifically, wasn't Cowie telling All Spa he was being a dick?

**Matty:** I believe actually no was the team. Like All Spa's team went back that he was being a dick to Cowie, and the team goes back to him.

**Trevor:** And and yeah, the the more the more PC. Uh, that didn't quite come across the way you meant it to. Yeah, that was a lot of fun because that is the sort of thing that happens.

**Bridget:** Well, and especially if you're in an organization where every individual contributor feels like secure and safe being able to say to an SVP, hey, what the hell, dude?

**Trevor:** Yeah, I mean, that's huge. I think I said that then too. I also had a lot of fun with episode 23 when we were talking about cloud systems administration. We get on the line with Tom, and Tom's like, yeah, so have either of you read the book? Because it has nothing to do with what we're talking— what you guys have slated to talk about. And so we just had to fly the whole episode by the seat of our pants. And it was also one of the episodes where I really got to contribute a lot, so I had a lot of fun doing that. I don't think I let Matt talk at all. That—

**Matty:** [00:28:37] I don't know, not too much. That was Pretty much the Trevor and Tom show, which was great. Well, the other time when you didn't let me talk was the Help episode, which was mostly because I literally could not. We had the one episode when I'd lost my— blown out my voice at—

**Trevor:** Oh, that's right. Yeah, you were sick.

**Matty:** I was just sort of like, okay, you guys go talk.

**Trevor:** And we had technical difficulties on that one too.

**Matty:** Oh, we lost a guest.

**Trevor:** Yeah, Dave's wife Sandy was going to join us, but there were just technical difficulties and she couldn't get on the call. It was sad because she's awesome and would have contributed a lot to that conversation.

**Matty:** We'll have to have her on for something else.

**Trevor:** But overall, I'm just super grateful for all the people I've had the opportunity to speak with and meet over the past year. And I just wanted to say specifically, thank you, Matt, for kind of inviting me and giving me the opportunity to to join you on this quest, and thanks to everybody who's listening for helping make this successful, and all of our guests, of course, for also helping make this successful.

**Matty:** [00:29:43] This is the real little tear going on right here now. So I think there's— yeah, there's been— it's been an interesting time. I mean, one of my— I will say there's no— I'm not surprised that episode 14, which is the How to Fuck Up DevOps episode, is so popular. It's one of my favorites. For a couple reasons. It was a very— it was one of our first episodes where there was a whole separate backchannel episode happening in the Google Chat while the episode was going on, as will happen when you combine, you know, Nathan and Pete. But there was a great moment in that episode where Pete Czeslak starts pontificating about like, hey, it's 2014. If you're not doing configuration management, there's something wrong with you, or something to that effect. And Nathan's like, um, Pete, Like, 85% of companies are not doing configuration management. It is not everywhere yet. It's not because it was sort of like Pete was trying to say, like, hey, this is just a done deal, right? We're past this. That's table stakes. And it's like, it really isn't. And it was a lot of fun.

**Trevor:** [00:30:43] The—

**Matty:** I also just— one of the things I loved about that episode was, as a big fan of Nathan Harvey on Food Fight, when someone is a guest on a show versus the host, They're very different. And I don't mean like, oh, they can just let their hair down and, you know, and have opinions. I mean, that's part of it. But when you're the host, you're controlling the conversation, or at least you're steering it. You're thinking about a lot of different things and you're really trying to bring out your guests. And having Nathan just be able to be there and just like provide content was so much fun. And I've listened to that episode a lot of times and I've gotten a lot out of it. And it's a— I'm not surprised again. When I ran the numbers, I wasn't surprised it was as popular as it was. And it's one of my favorites, one of my favorites to have done. I'm really bummed my audio— I used like a super crappy headset on that episode and my audio quality is awful and it bothers me, but nothing you can do about it now. I'm not going to ADR the whole episode and re-record my lines.

**Bridget:** [00:31:49] If you were going to do that, I feel like the temptation to editorialize and say different things would be far too great.

**Matty:** I will say that one of the beautiful things—

**Trevor:** we should do an April Fool's Day episode where we MST3K an old episode.

**Matty:** Oh, that would be fun.

**Trevor:** Oh my god.

**Matty:** So I have to say that now we have— the majority of our episodes are edited by Mandy Moore, @therubyrep on Twitter, and she does a great job with that. And there's one thing I miss by doing— from doing it myself is when you're the editor, you have absolute control of how stupid you sound. Oh, there have been many episodes— I shouldn't say many, that sounds bad— but there's several where I just said something ridiculous, and when I was sitting editing, I'm like, yep, and that's gone. So there's some great power to that. Uh, you also notice, as I used to joke, if you listen to episodes that I've edited versus Mandy, uh, it seems like everybody starts saying um a lot more towards the end of the episode because I start to get bored. In editing. Like the beginning, I'll be really good about cutting pauses and ums and ahs and everything, and then like 45 minutes in, I'm like, okay, this is good enough. Just ship it. Ship it.

**Bridget:** [00:33:01] Yeah, fuck, ship it. This actually brings up kind of an interesting question of stuff that we sort of glossed over and didn't talk about, about the current state of the podcast. But I know this is the sort of thing that might feel intimidating to people who want to start a podcast of their own, or who just don't know anything about the logistics that go into podcasts, or who Google something about podcasts infrastructure and then quail at what appear to be an incomprehensible amount of costs and logistics. Can you just kind of give a quick rundown of the sort of stuff, and I don't care about specific numbers, but the sort of stuff that it takes to do something like this?

**Matty:** Well, right, and it's all a matter of, I mean, it can really vary. It can vary from costing you next to nothing to you could be investing thousands and thousands of dollars a month.

**Bridget:** I mean, we're using Hangouts. We're using Hangouts. That's free, right? So this is free, right?

**Matty:** That's a piece of it, sure.

**Trevor:** So we got that.

**Matty:** So in our case, I'll kind of tell you like where we kind of fall. So like I said, you, you, there are people that could do this totally without costing a dime. Um, you know, you got ahead, you got yourself a headset, you got a webcam, you got Google Hangouts and let it stream to YouTube and you're done. And then everybody can watch your show on YouTube and people can do that. Or even you could take it as small, but then there's things like, well, we have to turn that into an audio file and then that has to get hosted somewhere. So a little bit of the backend of this and, and hopefully I'll, I intend to update our site with a little more detail on how we do the show. If you read the About page now, it's out of date. But anyway, we record the show on Google Hangouts, which we're doing right now, and you're a part of it. Yay! That gets, that gets pushed directly to YouTube, and we can't edit it. That's just how that works. And then what I do is I pull down the audio, I pull down the MP4 file, I convert it to AIFF, and then either I ship that over to Mandy Moore and she edits it and throws it back to me on Dropbox, and then that's done, or I sit and I edit it, in which case it takes a week longer and it's not as good, but, you know, but then whatever. So then, so the MP3s of the podcast are actually stored on S3, on Amazon S3, so there's a cost to that. And then the website is an Azure-hosted website, and there's really nothing special about Azure in this case. It just happens to be where I had initially put it. So we're a little bit like cross-cloud, I guess. So there's some cost to hosting the website that's actually running the infrastructure of the— when you go to restofdevops.com and you see the episodes, and it hosts the RSS feed that drives the things. And that's sort of the high level. But then built into that, we also are— the way that we record, so the quality comes into play, right? You're only as good as your equipment. Now, you're not as good as your equipment necessarily, but you can't be any better than your equipment. So if you have a super shitty— like if you're using iPhone headset, right? It's not gonna sound as nice as if you have a really good mic. Now, if you have a really good mic and you don't know what to do with it, it's gonna sound super cruddy. Which happens every time I try to use my really nice mic. I know, this is a problem. We've like— we want to know— so Bridget, you want to know why do we have sponsors? It's so we can buy mics for Trevor that he doesn't use.

**Trevor:** [00:36:00] Well, it also just so happens that the last 4 episodes I've not been at home for.

**Matty:** And that's actually been the thing. Some of the cost that's come into this has been The fact that I have 2 different audio setups because I have my one that's at home that's not very portable, but then as I started working in a job where I'm on the road all the time and more often than not I'm recording this show from a hotel room, I got a mic that was intended to be a more travel mic. Now it weighs like 30 pounds and it wasn't a really good choice. It's a great mic, it's not super portable, but it's more portable than my crazy thing on a stand and everything like that that I have. In my office at home. But then the things that go into it, it's really— and there's different, you know, software that we bought and we do things with, you know, services and everything, and our sponsors allow us to do this. The other thing, there are things that let us do things more quickly, like our investment in having someone else do the post-production means that we can turn episodes around much, much faster. Usually we get it back from Andy within 48 hours of them being recorded. With the exception of last week's database episode, I've never done it that fast, you know. And so that just lets us then say, well, now we don't have to spend time on, on doing that. We can put effort into coming up with shows, you know, scheduling guests. It gives us even the ability to say, like we said, well, we're doing this twice a month. We've kind of toyed around and said, well, could we do it more frequently? And the only thing that keeps us from doing it more frequently is time.

**Trevor:** [00:37:29] Right?

**Matty:** You know, so if you look at ways like having a third co-host where you can move things around, because Bridget, before we had you, there was no way Trevor or either of us could ever skip an episode. Well, I mean, I guess we could, but it never entered our mind as a possibility.

**Bridget:** Well, Minneapolis, you had to get Julian Dunn to step in as a co-host.

**Matty:** That's true, that's true. We had to stunt Trevor in Minneapolis, but that was— it was actually kind of weird, and nothing with Julian, it was just like, oh, it's really weird to do the show and I'm the only one who knows how it goes. And a lot of this goes to what makes sense. So Trevor alluded to before about like, you know, kind of having these arguments about improving our audio quality and switching off of Hangouts On Air, but yet we're still on them. Part of this is convenience, right? Everybody seems to be able to do it. We keep threatening to try to start doing this with Skype. We will try an episode with Skype eventually. So yeah, so there's a lot, and we're really appreciative of our sponsors because they enable us to to make bigger leaps with what we can do and not have that have to be a thing. When we started the show, for the first few months, this was all funded out of pocket by me. This was just a thing I wanted to do and I paid the bills and that was okay. And then it's kind of nice to now be able to say, well, I could get my money back, you know, and we can spend our time working on other stuff.

**Bridget:** [00:38:47] We've kind of talked about the past of the podcast, but what about the future? So I know we have some exciting stuff going on with the church. We have some exciting stuff going on with the structure. Did the two of you discuss having Ducy join as a field correspondent, or was this just something that Matt dreamed up, like, you know, and like didn't even ask Trevor? I have to know.

**Matty:** I'm pretty sure I didn't ask Trevor at all.

**Trevor:** No, no, you did.

**Matty:** Oh, for Ducy?

**Trevor:** Yeah, well, because we were very nicely invited to go to DevOps Days in— was it Belgium?

**Matty:** It was Ghent, yeah.

**Trevor:** And unfortunately, Matt and I both had other commitments and we couldn't go. So Matt had said that Ducy was going to be there and said, you know, do you mind if we did have Ducy be our field correspondent since neither of us can make it there?

**Bridget:** Even though Ducy is going to do the whole goat farm thing, which should be cool, I think they're recording and hopefully some episodes will come out soon. We'll have something in the show notes about that, but it'll be Goat Can.

**Matty:** [00:39:51] But even if he's, you know, I think it's gocan.do.

**Bridget:** I think it's both. But anyway, so it's a floor wax and a dessert topping, much like systemd. But I think that you should probably, we should probably try, even if he's doing his own podcast, try to get him to still be a field correspondent because he goes to a lot more conferences in a lot more countries than most of us.

**Matty:** That's true. I think we should just have him every now and again pop into the Hangout for like 5 minutes from whatever city he's in, and we'll be like, so, how is the DevOps in Bucharest there? How is the DevOps in the Philippines, Ducy? He'll be like, well, there's a 75-mile-an-hour wind out of the northeast. Yeah. I think we should do that for sure.

**Bridget:** Yeah.

**Matty:** We're excited to have Bridget join us for sure. This was a little, you know, again, I'm 99% sure I did not ask Trevor at all about this one.

**Trevor:** No, you did. Oh, okay.

**Matty:** [00:40:53] I just assumed that I didn't.

**Trevor:** No, no, you actually asked me on multiple occasions how I felt about it, and every time I said, that's fine, that sounds great.

**Bridget:** Yeah. And then you forgot that you had the conversation and went and asked him again, and Trevor's like, did you fall, hit your head?

**Matty:** Also, I'm really excited that literally a year after I asked him to do it, Trevor finally wrote his bio for this episode. So that's been updated. I also finally updated mine since leaving— since joining Chef in June. I've now finally updated mine and no longer says I work at 10th Magnitude. So there's that.

**Trevor:** And you finally have another wonderful historical moment of when I joined 10th Magnitude and Matt peaced the fuck out.

**Matty:** This was amazing. Trevor liked He sends me like this. I am like, we staged it up in the episode, but this really is what happened. Trevor sends me like an IM and he's like, dude, I got awesome news, I'm coming to work at 10th Magnitude. I'm like, yeah, about that.

**Bridget:** Well, shit.

**Trevor:** [00:41:53] I was so excited to learn more from Matt and, you know, all this shit, and then he's like, oh, by the way, see you later.

**Matty:** Pretty much exactly when you're coming. Yeah, so that was, that was, that was a whole lot of fun.

**Bridget:** That was, and that was some episodes back, that was near the beginning.

**Trevor:** That was in May.

**Matty:** Yeah, that's about right. Like, I started at Chef in June, but I think we announced it in May-ish.

**Bridget:** Was that before or after you stopped doing the retrospective? Let's do a retrospective on how you used to have a retrospective at the beginning of the podcast.

**Trevor:** So when we had originally kind of started, we originally sat down and started talking about how we wanted to structure the order of the podcast. We kind of talked about doing it in like a kind of agile, a mock agile framework, which is why we have kind of checkouts at the end, and that's what we called it.

**Bridget:** And then you listened to Andrew Clay Shafer tell you that Scrum was a disease and you changed your mind?

**Matty:** Well, no, actually the problem that happened with retrospectives is we set them up at a summer time.

**Trevor:** [00:42:56] The same problem we had with retrospectives we have with our checkouts, and that is we never think about what they are until about 30 minutes before the episode.

**Matty:** So we kind of stopped doing retros because we didn't have anything to talk about. I mean, but we did, but we— it was just, it was awkward. And I mentioned, and I think Trevor said something similar when we were putting together the notes for this episode, that I had totally really forgotten about until you mentioned it, Bridget. And, and they kind of looked at it just like, I kind of miss it because it's cool. And I guess part of me is doing work now that's maybe a little more, like, there's more stuff going on that could be of interest. Like, I can't— obviously can't talk about, like, customers I'm going to go see that are thinking about buying Chef, you know, because that's usually what I— that's usually what I spend my time doing is going to talk to prospective customers. But likewise, I spend my time going to conferences now sometimes, or doing blah blah blah, or doing other things. So, like, there's stuff where when I was more doing straight consulting at the beginning, It would be like, in this episode, so what have I spent the last 2 weeks doing? The same thing I did the 2 weeks before, because I'm working on a 6-week-long project for one customer, you know, and I can't talk about it, like, in specific about the interesting thing I'm doing.

**Trevor:** [00:44:11] Right, and also, maybe something where we can restructure it where we don't all necessarily have to have a retrospective, but if somebody has an interesting retrospective, we can— they can go ahead and say it.

**Bridget:** Or if somebody has something that they want to take some time to write about, We always could put more time into the show notes or this mythological newsletter that theoretically occurs.

**Matty:** I sent one today.

**Bridget:** I think you only sent one because I asked you if it was something we should discontinue because it didn't exist.

**Trevor:** Exactly.

**Matty:** But we did send one.

**Trevor:** We also once talked about doing a blog.

**Matty:** Oh yeah, yeah, we need to blog more just for, you know, SEO and stuff.

**Bridget:** But, um, okay, don't look, don't look at me because I'm already doing blog stuff. I Yeah, when we actually talk, we talk about a lot of stuff.

**Matty:** I do though, but I'll tell you, I like the— the thing I like about having the retro come back is that I think that there's a lot of personal insight that's getting lost in the show potentially. I mean, it comes out as we talk, but when I think about shows that I really like, I feel like I listen to The Ship Show and I kind of know what Pete or Sasha or Seth or EJ, you know, or anybody is up to, right? Because they say, hey, what have you been up to? Or the same thing will happen on Food Fight. Nathan will be like, hey, Brian, I haven't talked to you in forever, so what cool things have you been doing? And, you know, John and Damon do the same thing. This comes up on Software Defined Talk. You know, everyone loves that sort of that little catch-up, personal touch. Yeah, I mean, people, you know, kind of might be interested in knowing what's going on with us. So I don't know, loyal listeners, let us know. Tweet at us. Tell us, should we— do you care about us in the retro, or are you like, just shut up and talk about Git?

**Bridget:** [00:45:56] So actually, this was actually a good segue to a thought I had, which is when you originally started this podcast, you had kind of an idea of where you thought it might fit into the wider DevOps podcast ecosystem in terms of the podcasts you already listened to and whatnot, which you obviously still listen to, even perhaps more. In general, like from both of you, and I'm gonna ask Trevor first. But Trevor, I'm interested in hearing like where do you see this podcast fitting in with any other podcasts that you know of or definitely don't listen to or, you know, like how do you see this podcast having evolved?

**Trevor:** So I'm the worst person to ask that question to because I almost never listen to other podcasts and I'm sorry to everybody else. I've met most of the other podcasters at this point and I think you're all awesome. I just I always forget to set up my podcast application because it's really hard. It is incredible.

**Matty:** Android.

**Bridget:** Yes, it's legit. I didn't start listening to podcasts until this year when I was on planes a lot. So no, it's really legit.

**Trevor:** [00:47:02] I started listening to this ship show and it was, it was awesome. I was doing a really good job at it. And then I got a book and I stopped listening to it on the train because I was reading the book. And then I kind of fell off the bandwagon and didn't go back. Um, sorry, but books were, were better at the time.

**Matty:** So basically your answer to where do we fit into the realm of the other podcasts is the same place we were before, which is I have no fucking idea because I don't listen to them.

**Bridget:** Or it was the, we are doing our own thing and I'm not informed by or concerned about other podcasts because we're doing our own thing, which is totally legit. How about you, Matt? And let's get a short version because I have a lot of questions. It's already close to the top of the hour.

**Trevor:** 365 different podcasts, one for every other day of the week.

**Matty:** I will tell you, it's actually— my breadth of podcasts I listen to has grown. I haven't listened to Serial yet, even though that's the only podcast anybody else in the world has ever heard of. But now I've been told to wait till it's over and then binge the whole thing, so I'm going to do that. I don't know where we fit in with Serial. That's different. Maybe we'll have more listeners because now people know what podcasts are, I guess. But I still think that we fall into the same place. And it's especially interesting with our pals over at The Ship Show because Paul has this uncanny ability to— I'm pretty sure he hacks into my Google Docs and knows what I'm planning. And then he does it first. And a lot of the ideas we've had for shows, I sit there and I'm like, goddammit, Paul. You guys did it. You did an awesome job. But they still go at it in a different way. And I still think we fit in the right realm. You know, we're at a different level, maybe not as much as I initially envisioned of like complexity or level of like knowledge, you know, not that, you know, that of our listeners, because like you said, you can't dictate your audience. We all kind of have our different voices. And I think even the same people when they come on our show versus going on Ship Show or anyone else, they're gonna have a different voice because they're being interviewed by different people who have different perspectives. So I'm not sure how to define what the voice is and the role that we fit, because I told you I'm having an identity crisis with the show. I mean, I know it's not what I envisioned. It is not what I thought at first at all. It's more, and that's cool.

**Trevor:** [00:49:24] I'll just say, so the people I've kind of met in person, because I'm nowhere near as good at social media as Matt, will And I will never, I never will be. And I've talked to, I've heard both sides. I've heard the people who, like we mentioned earlier, who come up to us and talked about how it's great that they have this intro point for DevOps that they can, they can learn and they can, you know, absorb the topics that they want to hear about and kind of get a sense for it. But one of my closest friends in high school, I hadn't talked to him for years and I happened to talk to him the other day. And he said, you know, he knows about the podcast. He's a SysAdmin. He knows about the podcast, but he prefers The Ship Show because it goes into the technical details and we kind of stay at the surface and it's just not enough for him, which I totally get. We've gotten that feedback from other places as well, as I think we also mentioned earlier. But for me, being new to DevOps also in some sense, or at least I was a year ago, as a kind of definition, it's nice to provide what I needed then.

**Bridget:** [00:50:35] Yeah, that's a good way to put it because again, if you're dropping a whole lot of technical information, your audience is going to appreciate it if that's what they need at that moment. And if what they need is something with a lot more high level and a lot more approachable, then they might find that this may also be pretty useful for their needs. So actually, that's— it's interesting, Trevor, that you brought up the system with that particular, you know, bent, the specific thing that he or she was looking for. And in the system episode, Matt mentioned something about having been a system and thinking that we're natural, and I am too, and I've been known to say that I'm a professional paranoid. And, you know, talking about being a always, always looking for shadows, always weighing and measuring the worst-case scenario. I'm kind of curious, a question for you, Matt, has working in this— I know that you don't work directly at CaringPager anymore, but has working in this DevOps space changed that attitude of yours at all? And working so much on this podcast with Trevor, a dev, and working so directly with him?

**Matty:** [00:51:42] I think that working in the space the way that I have, and even Even when I was working more like at the tail end of my actual ops career, when I— to be fair, I was more managing than most hands-on manager. I was still carrying a pager. I used to tell my team, I know you can think of 100 different reasons this won't work. Let's just pretend it will. And so I kind of was forced into— to counter my team, forced into being an optimist. And I feel that way a little bit professionally now because I'm selling new ways of thinking. And I kind of go to the— and we talk about cruel empathy. I try to not go into that direction, but to empathize, but then say, but look, I can make your life so much better because that's what I'm doing. I'm coming in and selling a better life. And it kind of feels like fake it till you make it. Like people say, you know, if you smile enough, eventually you'll be happy. And I feel like spinning my bullshit about positivity for enough years has made me maybe start to become a little more positive about how things can work. I'm still probably pretty cynical towards the world, but when I think about what organizations can do— now it's interesting, and, and well, I'll talk about this a little bit in the checkouts, but virtue of the new Facebook search, I've been able to go back and see some stuff I was posting on Facebook about DevOps back in 2011. Man, I was a cynical asshole then, you know, and was just like, there's no way this stuff will work. And I just, I look at it so much differently because I'm positive, because I've been exposed to people being successful with it. Yeah, and that changes it a lot.

**Bridget:** [00:53:14] So what do you think, Trevor? Is he any less of a cynical asshole than he was this time last year?

**Trevor:** I'd say substantially. I remember that when we were out standing outside while he was— while Matt was vaping and we were talking about problems with doing deployments in Windows or something, and Matt was just so angry about it. It was great. I mean, and Matt still has his days. Like, there'll be days when I go to talk to Matt and he'll just be like, not today, not just— just not today.

**Bridget:** Sure. No, and, and you— did you actually even have like a day or two of overlapping in the job scenario, or did you like—

**Matty:** nope, gone. No, I think it literally was like Trevor's first day was the day after my last day.

**Bridget:** Oh my God.

**Trevor:** No, no, I was there, I was there for about a week, but you were at a client site.

**Matty:** Oh, okay. I—

**Trevor:** because I was there for your going away party.

**Matty:** [00:54:15] Oh, that's right. Okay, so we had like a week overlap in theory.

**Trevor:** Yes.

**Bridget:** So you both actually changed jobs while you were running this podcast together at the same time, roughly.

**Trevor:** I was so looking forward to showing Matt how dedicated and committed I am in a work environment.

**Bridget:** But so, so since you both made that decision and then changed jobs while you're running this podcast, it's kind of interesting. Like, how did participating in the community in this way influence your job selection or your job hunting process? Or did it not influence it at all? It was completely orthogonal. I'm just kind of curious for both of you.

**Matty:** I'll go first. I'll tell you, I would not— I'm sure I would not have this job if I wasn't doing the show. And not because I don't think Chef sat and said, oh, well, he runs a podcast, so we should hire them, although that kind of seems to be how we work. But I was able to— let's put it this way. I shouldn't say I wouldn't have the job, but I was able to have some conversation. You know, it's the same thing. It's just general. My networking was better because of the show in terms of being able to have people who knew me. And so I was able to have quicker conversations that got to the meat of the hiring process, I guess, or whatever. I don't know. Maybe not. Maybe I'm totally wrong. I feel though that—

**Trevor:** [00:55:35] I vaguely remember having a brief conversation with you about this, actually, when you were describing to me starting to talk to people at ChefConf last year. And you were basically saying that, you know, and I've seen you in situations and it seems like you're really good at knowing, like, especially at that Azure conference, you're really good at being like, oh, here I'm supposed to be telling you guys everything, but it seemed like in some sort of one-on-one situations you kind of were looking for somebody else to approach. And it sounded like from talking to you about that, you had gone from doing that to actually making the approach yourself, because I think at least the way you were talking about it, it sounded like you were kind of also looking for guests.

**Matty:** Yeah, I will say that, yeah, a lot of that— my confidence and ability to want to approach people, especially at ChefConf, and as this kind of conversation went, was definitely driven by confidence that came from doing the show. I mean, one thing that's really interesting, and I know Trevor had a similar experience at FlowCon, but your reputation precedes you in ways you never expect. I would say it's at least once a month I jump on a call with a prospective customer and I get introduced like, oh, and you're joining us, Matt Stratton, our solution architect. And they'll go, oh, Matt, you do Arrested DevOps, right? I love your show, you know, right? Or your show's awesome and blah, blah, blah and all this stuff. And I'm like, oh, and then they kind of dig it, right? You know, and it helps the whole process because it gives some immediate validity, validation of like, oh, okay, well, I've heard your bullshit before and I guess I like it enough that I listen to it all the time.

**Bridget:** [00:57:17] So I already bought into your particular brand of bullshit.

**Matty:** Exactly right. It wasn't that hard. Yeah.

**Bridget:** How about you, Trevor?

**Trevor:** So, I mean, it was definitely a lot. So the meetup was a motivator. Matt was a motivator. Doing the podcast was a motivator. There were problems I was seeing where I was working before, and I kind of talked about some of them on the show. And I was talking to Matt about stuff and going to those meetups, and I said, well, this sounds like like a better place to be, for lack of a better term. And I was really, really sincerely hoping to kind of grok some knowledge from Matt.

**Matty:** Oh, for crying out loud. Enough already. You're killing me here, Smalls. Well, I have an observation.

**Trevor:** I mean that sincerely. I'm not trying to twist the knife. I'm not trying to, you know, in this case, I'm not being funny about it. I mean that sincerely. Part of the decision I made to make the switch specifically choose 10M was to have the opportunity to learn from you.

**Bridget:** [00:58:24] But hey, you get to podcast with him, which is almost as good as working with him.

**Matty:** I come hang out at that office sometimes and annoy you guys, so it's cool. I want to observe one thing I've kind of noticed in Trevor and with your job change, and I would like to know what you think about it, is moving into a role where you're at a firm that not only— and I don't mean to imply that your last company was not supportive of you doing the show or anything like that, but I feel like you probably are a little more comfortable talking about things like in the open, maybe because you're somewhere that, that actually you being on the show is probably perceived as an asset versus like just this thing that they let you do. I don't know, is that true or am I—

**Trevor:** am I right? That is absolutely true. I mean, you know, occasionally I get introduced on calls as being on the the show as, you know, like you said, as a form of validation, you know, and absolutely, I don't have that kind of internal pressure that I shouldn't be saying anything, you know, that, you know, I feel like I have the company behind me as opposed to I'm gonna say something, someone's gonna find out, and for whatever reason it's gonna be a problem.

**Bridget:** [00:59:35] And meanwhile, I was on our team Slack right before we started the Hangout on Air live talking to my boss who was like, oh, you're doing that now? What's the link? I sent it to him. So I'm going to go out on a limb and say that my company has no objections whatsoever to me podcasting. Which, by the way, I think I'm contractually obligated at that point to say is dramafever.com and we're hiring devs and ops.

**Trevor:** Who's not hiring?

**Matty:** I was going to say, chef.io/careers.

**Trevor:** contentmagnitude.com/careers.

**Matty:** You could work with any of us. And then that person will probably leave as soon as you start. That would happen if we—

**Bridget:** I won't.

**Matty:** Yeah, never mind. That just went—

**Bridget:** never mind.

**Matty:** We all love our jobs now, actually.

**Bridget:** This is the stuff where Matt's gonna say to himself, self, maybe I need to edit this episode.

**Matty:** This is a whole bunch of stuff that's gonna get cut out. It might flip further and further in my mouth.

**Bridget:** Don't cut out the part where my company is hiring.

**Trevor:** [01:00:36] Only leave in drama fever. Don't talk about Chef.

**Bridget:** Yes, supportive companies.

**Matty:** So the future, like, what are— so we talked about some stuff that we want to change, but I know we've got a bunch of ideas for shows that are coming, and we don't want to promise anything even though we've got some stuff scheduled, but we'll totally promise things.

**Bridget:** I'm fine, I'm fine with promising We'll promise things.

**Matty:** We just won't promise when.

**Bridget:** We might break them.

**Trevor:** We're going to be doing—

**Matty:** Oh, break our promise. That's true. It's promise theory, right? Like you're just doing your best.

**Bridget:** Right. We're going to do our best.

**Trevor:** We're going to do an interview with—

**Matty:** That's a show idea. We need to have Jeff Sustna on to talk about promise theory.

**Bridget:** That should be easy. We could actually, we could probably do a promise theory episode with Jeff Sustna where like I actually hang out with him at, you know, the Cocoa Coworking Space or something in Minneapolis. And like just tape it here since he lives here.

**Matty:** I'm sure we could do that. So that's— so you heard it here first that that's one idea that, that we're going to promise and see if we actually—

**Bridget:** [01:01:41] that we have not any— so Jeff, if you're listening, we haven't even asked you because we just thought of it this moment. We think it'd be fantastic.

**Matty:** I'm pretty sure Jeff doesn't listen.

**Bridget:** Probably not, but see, he'll listen now. Listen now, because at this time point he should listen.

**Trevor:** Yeah.

**Bridget:** Um, let's see, shows we are gonna do, or at least we've talked about We're gonna talk, we'll be talking in the new year about blamelessness and being okay with failure and how we handle failure in postmortems.

**Matty:** I'm really looking forward to that because I don't actually know how to write a blameless postmortem, like for realsies, so I'm gonna learn a lot.

**Bridget:** And so that's pretty exciting. We're not gonna tell you every single thing about every episode, but we'll just give you a quick rundown of topics. On some DevOps jobs stuff. This will be interesting to hear Stratton interview people when he's been known to say it's not a title, tool, or team.

**Matty:** I've also been known to actually, like, harangue recruiters when they call me and tell them how they're doing their job wrong. That was on an episode too. I think I brought that up. I don't remember which one it was, but anyway, yeah, so that'll be fun, and we've got different Lots, actually a bunch of topics around DevOps jobs and what it's like to have a DevOps job and how you should try to hire a DevOps and or whatever.

**Trevor:** [01:03:02] I'm really excited because we're going to have an episode around Microsoft stuff, which as longtime listeners will know, I'm a .NET guy, so talking about Microsoft stuff is going to be lots of fun for me. I don't know what you guys are talking about with your Git Bash and your Z shell.

**Matty:** Hey, we'll talk some PowerShell. With a very interesting guest around that, so you can just read into that as you will.

**Bridget:** Trevor, you're casting aspersions. I'm not a ZSH-using hipster, okay? I may be a Docker-using hipster, and we will be having a Docker episode in the new year to talk about Docker, Docker, Docker, Docker, Docker.

**Trevor:** Which is also going to be on Microsoft, so Docker some more.

**Matty:** Actually, that's going to be interesting.

**Bridget:** It would be valuable to talk about that, actually, since I think we have to care about that now suddenly at work, which will be interesting. I mean, I don't care at all.

**Trevor:** Why not? Why shouldn't you care about it, huh?

**Bridget:** I care in the abstract.

**Matty:** I may have to care in the concrete. I don't wish any specific harm upon Microsoft.

**Bridget:** [01:04:07] And I think that we'll also talk about, like, you know, how people weep and gnash their teeth over eventually consistent distributed whatsits and how you can make that work for you.

**Matty:** We're going to talk some squishy culture stuff, believe it or not.

**Bridget:** Building amazing teams and you know, seriously, who the hell is this Deming guy and why do I care? What about the checkouts?

**Matty:** Yeah, it's probably getting to be about that time. Yeah, I still have to pick a train. This is gonna be the longest episode we ever did.

**Bridget:** What was the record before?

**Matty:** Oh, oh, you know what, I just looked this up the other day. While we're doing the checkouts, I'll confirm it. It'll take me a second. It's way longer than—

**Trevor:** You want to lead us off with the checkout train?

**Bridget:** Sure. Okay, so I have 2 checkouts for us today. One is I was in New York City last weekend and while there was some fantastic and powerful social justice protesting going on and also a lot of drunken Santas, which is a very strange contrast walking around, you know, midtown.

**Trevor:** [01:05:11] Who are the drunken Santa? What do you do with the drunken Santa?

**Bridget:** Try to avoid them because they're clogging the streets was the message I got. But what I did go to Times Square to see and I know anyone who lives in or ever goes to New York is thinking right now, why did you go to Times Square? That was a tourist mistake. I went to Times Square to see the new giant Google Android billboard. My company Drama Fever is actually featured on it. I tweeted a picture of that. I'll put that in the show notes. But also I found a really cool Verge article that actually goes into detail about what all this stuff on this billboard is and does, and it's interactive. So you can, if you have an Android device, which I don't, so I don't have a dog in this race, but There's a— like, I have iOS because I don't want to spend that much time caring about my phone. But for people with Android devices, they can actually interact with this billboard and put stuff up on it, which is kind of cool. And it's enormous. It's like 8 stories tall and an entire city block. So, and yeah, and then also the other thing I wanted people to check out is Lara Hogan's Designing for Performance book came out today. For all of us who maybe are sysadmins and have frontend people or frontend developers or designers in our life who we would like to get them presents for the various holidays and have no idea what people like that might want, because, I mean, other than, of course, Docker containers to run their Angular apps in, but other than that, what they might want, they probably want Lara's book. So, we'll put a link to that.

**Matty:** [01:06:41] Absolutely. By the way, our longest— the record for longest REST DevOps episode was episode 2. Which is 1 hour and 7 minutes long. We're gonna crush that in this one, especially once I add the audio supercut to it. So yeah, oh boy, if you're still listening to this episode, thank you for making it all the way to the end.

**Bridget:** All right, Trevor, how about your checkouts?

**Trevor:** So probably the coolest thing I've seen recently is somebody— and I should have gotten the person's name because it was, it was on the article I read, but that's too late now, I guess— somebody rewrote the Apollo guidance system in JavaScript so you can play around with the Apollo computer.

**Matty:** Because why not?

**Bridget:** Right.

**Trevor:** I mean, I'm not gonna lie, I spent about half an hour playing around with the Apollo computer in my browser. I love space too, but that's neither here nor there. Also, a few podcasts ago, I mentioned the Human app for iPhone. Well, now it's available for Android. I haven't set it up yet, but I will. It sounds fun.

**Matty:** [01:07:48] I keep wanting to use it, and I keep putting it on my phone and taking it off and putting it on and taking it off. And so I'm interested to know what you think of it, for sure.

**Trevor:** Well, if you can't manage to get yourself to use it, I probably won't either. You are the, you are the king of the new and shiny, and if you can't do it, I doubt I will. Finally, I wanted to mention there's an English show now streaming on Netflix called Black Mirror, which is kind of a Twilight Zone meets Technophobia series. It's really powerful, kind of creepy. It's 6 episodes on Netflix. I couldn't stop watching until I was done. Highly recommended. Um, yeah, Matt, what do you got?

**Matty:** All right, I got a couple real quick. So, uh, Guardians of the Galaxy, you know, Blu-ray and iTunes and everything just came out, and I've already watched it like 3 times since I bought it on iTunes 2 weeks ago. So, but there's the Honest Trailer for it, um, which was really funny. I think my favorite part is a certain part they're like, okay, we're really reaching, this, this movie was amazing. But it's still, it's still super funny. A lot of like to that in the show notes. The other thing, and I alluded to this a little bit earlier, Facebook's graph search has been expanded recently. Now it actually works the way we always thought Facebook search would have worked, which was search for stuff, not pages and people. You can actually find old posts. This has turned out to be substantially delightful. My favorite was— I've talked about on this show many times before, I think, that I wish there was a way I could search old Facebook posts so I could find out these rants I had on Facebook back in 2011 when I thought DevOps was stupid. I found them, and they're not as— it's not as big of a thing as I had thought it would be. But there was one. The first one was that one of my coworkers— I had shared Stephen Nelson-Smith's guest post on Patrick DeBois' blog that was, What is this DevOps thing anyway? One of my coworkers, who interestingly enough actually attended DevOps Days Chicago and I think is starting to understand this a little more, But her comment was, this is great for tiny companies with no customers and no future.

**Bridget:** [01:09:58] Yes, tiny companies with no customers and no future, like Etsy and Facebook.

**Matty:** Yeah, so that's what I said. But part of it was I had a lot of thoughts and feels at the time. Amusingly enough, I basically tweeted this and said, it's great finding all these posts when I thought DevOps was stupid, and Pete Cheslock replied and said, you weren't wrong. But as always, the joke is more important than the truth.

**Bridget:** As bot.

**Matty:** Yes, actually that should be it. That's, that's my next checkout is the Pete Chess Bot. So if you go on Twitter to @PeteChessBot, B-O-T, that is the Pete Cheslock automated tweeter bot and automated thought leader bot. Automated thought leader bot. Yes, can be a lot of fun to play with, so I recommend that. And also speaking of human, so my mail and calendar app of choice, mostly mail but a little bit with scheduling on iOS, is something called Accompli. And I may have mentioned it before, but I have— this is the one I have stuck with. Also, I think they just got bought by Microsoft. I think on Software Defined Talk, Cody A., who I think is the only other person I know who uses this app, mentioned. The thing that I like about it the best is that it's got this really nice feature where I can reply to an email with you, and then I click on an availability thing, and I can— it shows me my calendar, my availability, and I drag to like a bunch of different slots that are open, and you get this really nice little formatted thing in the email saying, here's some times that are available for me. So it's, it's a lot easier than the back and forth and back and forth. So I like it. It's called Accompli. I don't think it's for anything but iOS, so sorry, Trevor.

**Trevor:** [01:11:32] It's funny you mentioned it got purchased by Microsoft and that you mentioned Facebook's new Graph Search, because didn't they just drop Bing for the new Graph Search?

**Matty:** Oh, did they? That's interesting. I did not know that. So they had been using Bing?

**Trevor:** Like, they had that like super partnership with Microsoft so that they could use the Skype API for video too or something, huh?

**Matty:** And they were using Bing for the search engine, and I saw that it's enough to be able to get the API, and then like now we've done enough queries against Bing, now we can use our own secret sauce. So, haha, I guess maybe. I don't know, we'll have to ask. We have to have a Facebook episode one of these days. Somehow we haven't had anybody from Facebook Anyway, hey, guess what? We have a newsletter, and I sent one out today. If you'd like to sign up for it, it's at arresteddevops.com/bananastand. It's how we'll let you know about upcoming podcast episodes, updated show notes, and any kind of cool links or things that we might find out with DevOps. But really, we're mostly using it to tell you about upcoming shows.

**Trevor:** We'd like to thank our sponsors, VictorOps and Red Gate, and our loyal listeners. If you enjoy listening to Arrested DevOps, We would appreciate it if you'd visit arresteddevops.com/itunes and leave us a review in the iTunes Store.

**Bridget:** [01:12:44] So be sure to check us out at arresteddevops.com or @ArrestedDevOps on Twitter. We're always happy to get your input, ideas, or feedback at shows@arresteddevops.com. I'm Bridget, @BridgetKremhout.

**Matty:** I'm Matt, @MattStratton.

**Trevor:** And I'm Trevor, @TrevorGHess.

**Bridget:** We're Arrested DevOps, and remember, there's always DevOps in the banana stand.
