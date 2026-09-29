**Jessica:** [00:00:00] It really is about getting your system to teach you what you need, not about dumping fucking metrics out your butt.

**Joe:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Joe Lahey. Co-hosting with me—

**Matty:** Matt Stratton.

**Trevor:** Trevor Hess.

**Bridget:** Bridget Kromhout.

**Jessica:** Jessica Kerr.

**Joe:** So we're all together in one room, so that means it must be our year-end wrap-up episode. We've got some stuff to talk about, question mark, maybe. Uh, but before we get to rambling on about whatever we're gonna ramble on about, how about a word from our sponsors?

**Matty:** Rootly helps engineers manage incidents directly from Slack without ever needing to leave the tool. They handle all the boring and tedious manual work during incidents, like creating channels, looping in the right people, and acting as your scribe to document that ever-important timeline. Companies from 20 to 2,000 manage hundreds of incidents daily on Rootly. It's super simple and easy to use. You can install it in 5 minutes or less. Visit rootly.io to learn more and mention Arrested DevOps for $1,000 off when you book a demo. The role of a developer or engineer has evolved into a security-first mindset. The ability to confidently build and deliver your software assets across the globe while also avoiding supply chain threats is a priority for organizations to remain successful. Cloudsmith is software supply chain management for modern DevOps practices. They provide a single source of truth for all software assets while integrating with the package formats your team is used to. With a focus on securing your software supply chain, Cloudsmith is truly at the heart of your DevOps ecosystem. To learn more and receive a firsthand look at their solution, please visit arrestadevops.com/cloudsmith.

**Bridget:** [00:02:04] BridgeCrew is the all-in-one cloud security platform for developers. They automate and embed security throughout the entire development lifecycle so you can streamline your DevSecOps toolchain into one solution. By integrating infrastructure as code security and compliance into your version control systems and CI/CD pipelines, BridgeCrew empowers you to find, fix, and prevent cloud misconfig faster. Get started with BridgeCrew for free at arresteddevops.com/bridgecrew.

**Joe:** We should probably do this, we should probably do this official and stuff because there is, I do have a line here in the agenda that says stuff and junk. So we should, we should properly, properly introduce people to the, to this, to this year-end wrap-up episode with stuff and junk.

**Bridget:** I will tell you the stuff and junk right now. We're using his laptop and I just found that, oh, he has the natural scrolling turned on. I never use his computers and I always forget. It's the worst.

**Joe:** [00:03:06] That's, that's sorry.

**Matty:** I don't remember which is which anymore.

**Joe:** If you move the, if you move the mouse and it goes in the opposite direction, then your scrolling setup wrong.

**Jessica:** Y'all, the correct way to scroll is with the touchscreen, and I have to use a Mac right now and it doesn't have a touchscreen, and I just keep trying to push the buttons and it doesn't do anything.

**Trevor:** So the thing that hurts me the most about using a Mac that hasn't been properly set up right is the stupid mouse acceleration.

**Jessica:** Oh yeah, there's a command line to turn that off.

**Trevor:** Yes, yes, there is.

**Matty:** Oh, drives me up the wall. Bridget, I'm, I'm very Sorry to report to you that I apparently have natural scrolling set up.

**Joe:** It's the only way. It's the only way.

**Matty:** You want to say you want to start an iPad, right? Or your phone?

**Joe:** It's terrible. It's as if you were using touchscreen on a phone or an iPad. You want to start a fight, we should start talking about dark mode.

**Bridget:** [00:04:06] I also don't care about dark mode. The only thing I use any dark anything for is reading in my Kindle app. My phone in bed. Yeah, other than that, I don't use any of that nonsense.

**Joe:** Yeah, dark mode is bullshit. I'm just gonna go—

**Matty:** I'm just gonna have to disagree.

**Trevor:** See, I like the power savings by using an OLED phone with, uh, with true black on.

**Bridget:** So people like to come to your open source project and say, how about dark mode? And like, pull requests accepted.

**Matty:** Also, also, like, are there— I feel like there's a fair number of open source projects where it's like Who gives a shit? Like, there's places it matters. So, and I will say, as someone with a really huge monitor, being able to run dark mode makes a big, big difference because otherwise I have a giant light box and it actually affects, especially in this Beyoncé's year 2021 of pandemic land when we just live and everything is, you know, we care about lighting and stuff, which right now, if you were watching, I don't have any of my good lighting on, so it's all terrible. But, but you can see the reason I'm so brightly lit from this side is because there's a big white Google Doc on this side of my monitor, and you can see that difference just from that.

**Bridget:** [00:05:19] I was gonna say, I use the— I put it in dark under for lighting.

**Trevor:** You can see it in my pictures behind me.

**Jessica:** Oh yeah, you're right.

**Joe:** That's, that's why you, that's why you get the softboxes out.

**Bridget:** You could be losing, you could be leaking data.

**Joe:** See, you got to get the soft boxes out, you get the green screen so you can do the proper virtual background. Come on, come on, people, it's 2020, 2021.

**Trevor:** My Mac— 2020 number 2, or is it 2020 number 1?

**Matty:** Why does not my dark mode thing work?

**Jessica:** Counting from zero.

**Trevor:** Yeah, and then you get, you get to keep the numbering consistent.

**Matty:** There, I just made that. Look at that, look at, look at the difference. I just made Oh, wow. Sorry for— sorry for all of the audio podcast people listening. Yeah.

**Bridget:** Yes.

**Joe:** But now the well-known visual—

**Jessica:** the visual medium of the audio-only podcast in which we can tell you that Maddie is now in shadow. Put the Google Doc back on.

**Trevor:** If you are listening to this podcast and you are seeing—

**Matty:** [00:06:20] there you go.

**Jessica:** Right.

**Matty:** Look at that. Look at the difference.

**Trevor:** You are experiencing this podcast incorrectly.

**Joe:** So, you know, you just go—

**Jessica:** you just go—

**Joe:** you go down to bring up the Zoom toolbar, you go into video. Settings and turn on auto adjust for low light. So then your camera will make—

**Trevor:** there you go.

**Joe:** Or you could—

**Matty:** the whole point of this is this is an audio-only podcast. Nobody gives a shit what I look like. So I didn't do anything with my light. But I want to bring something up. This actually was interesting to me. I got like an email that was like our YouTube stats for the year. And YouTube, yeah, because we still have that. Yeah, we do. And occasionally we put— and by we, I mean Bridget, I think, sometimes does them. So let me see if I can find— but it was a nutty, like, amount of, uh, views. I was like, wow, a lot of people. Here we go. Arrested DevOps, your 2021 year in review. Um, who would like to guess how many total views on YouTube we had this year?

**Jessica:** [00:07:27] $403.

**Matty:** Anybody else?

**Joe:** Uh, I'm gonna go Price is Right rules and say $1.

**Trevor:** I'm gonna go $2.

**Matty:** Okay, we had almost 6,000 YouTube views this year. Oh, now that is—

**Jessica:** are there like bots for that?

**Trevor:** I was gonna say, how many of those were computers?

**Matty:** I would assume that, uh, well, they're also 37,000 watch minutes, so that's a— that's a— that means people actually watched a certain amount.

**Trevor:** Now that being said, it wasn't just people mistyping Arrested Development and landing on us, or we were just so captivating that they were looking for Arrested Development and they just had to stick around for the DevOps, or somebody left their TV on overnight.

**Matty:** Oh my God, they keep waiting, they keep waiting.

**Joe:** Like, I thought David Cross was in this episode.

**Matty:** Would you like to know, would you like to know how many days it's been since our very first YouTube upload?

**Jessica:** Uh, 4,000 years, right?

**Bridget:** I'm gonna say 2014.

**Matty:** Close. 2,924 days ago we uploaded our first episode.

**Trevor:** [00:08:32] I was only off by 1,000.

**Matty:** Yeah, pretty close.

**Bridget:** Oh, I meant the year 2014.

**Matty:** Oh, but yeah, 2013. No, the very first Arrested DevOps was, was in December of 2013, so it was 8 years ago ish today. Today-ish. Um, now that said, so in the entire year— this again goes back to why we don't optimize for video, uh, because in the entire year we had as many views as— that is less than one episode of our podcast gets listened to.

**Jessica:** Nice.

**Matty:** So that's a, you know, again, we are, we are not counting this episode. Not counting this episode.

**Trevor:** I mean We never tried to bring this to Twitch or something, right? We— there's a whole other venue we could—

**Matty:** that's a different— that's a different, uh, medium.

**Jessica:** It is.

**Joe:** And we, we need a hot tub for that.

**Matty:** Oh, you'll get kicked out of here.

**Bridget:** Time machine.

**Matty:** You'll get banned.

**Bridget:** I want a hot tub time machine.

**Trevor:** The time machine for sure.

**Joe:** That's for sure.

**Matty:** No, actually, Twitch would be— for us to do this show on Twitch the way we do it here would be substantially less work than the podcast because there's no editing. So Joe would have nothing to do.

**Jessica:** [00:09:39] And, you know, if we only did it on Twitch.

**Matty:** If we only did it on Twitch.

**Bridget:** Can we not? Because then there's comment stream of people that you have to deal with, and I just can't.

**Trevor:** We used to have that comment stream. We didn't— the old Hangouts on Air used to have a way.

**Matty:** Yeah, we did, but it never was bad. It never was that bad. Um, however, there was the fun— here's another little fun bit of Arrested DevOps history. So when we used to use, you know, Hangouts on Air, so there would be a— there would be 2 links. There would be the link to watch the stream while it was happening, and then there would be the link you would send to people to join. And so when we had Jeffrey Snover, distinguished muckety-muck inventor of PowerShell, when he tweeted to tell people to tune in to watch, he tweeted the join link. Now the best part is only like 4 people joined it, and then they realized it— like, it did not go poorly. It was— we were very lucky. But it was very funny because again, we're like, of all people, that was probably the most watched live. Because we used to— I don't know, what do you get, Trevor? Like 3 people would watch it. Although I gotta be honest, we had—

**Trevor:** [00:10:46] I think we had most— our highest live viewership was like 12 or something.

**Matty:** That was the one— the one Jeffrey was on was like a whole bunch. But yeah, that was kind of like— because we're sitting there, all of a sudden we're like, bloop, bloop. You're like, wait, what?

**Jessica:** What?

**Matty:** What? Why are people turning?

**Trevor:** Why are there more heads?

**Matty:** And then we're like, oh no.

**Trevor:** Oh God. And that was the episode I did while I was in the hotel in Paris and had terrible internet.

**Jessica:** Good reason.

**Matty:** Hotels.

**Joe:** Hotels?

**Matty:** Did you see the—

**Trevor:** What is this hotel?

**Matty:** I'll put it in the show notes. There was an SNL sketch this week that was like the, the— it was, it was a commercial for like a business center hotel that's like, like, like a Fairfield Suites but not. And it was very, very funny. It was also a little too on the nose for those of us who remember business travel, you know.

**Trevor:** I love all the emails we start seeing from different companies about how like they're gonna let people stay working from home, uh, and yet the tone of the email is very, very much like We would really, really prefer it if you would come back to the office, but like, it seems clear that if we don't let people not come back to the office, we're going to lose all of our people. So everybody can continue to work from home.

**Bridget:** [00:12:05] As you were.

**Trevor:** But we'd really like you to come back someday, so think about coming back someday.

**Jessica:** Dude, dude, uh, look where I am. If you could see this on video, you would see that I am in an office.

**Matty:** I don't understand what that is.

**Bridget:** That looks like a really realistic virtual background.

**Joe:** That's a, that's a, that's a, that's a big spare bedroom you have there, Jessica.

**Trevor:** Jessica, are you, are you in that thing that they use for The Mandalorian with the like live—

**Joe:** the volume?

**Matty:** The volume, yeah.

**Jessica:** I actually flew to San Francisco to come into the Honeycomb office this week on airplanes. Now I'm not staying at a hotel, that would be a little much, um, but Yeah, there's a, there's a real office here. I mean, it's barely used, but it turns out that this year you can actually get office space in downtown San Francisco.

**Bridget:** At least there's some good things happening in this world.

**Jessica:** And there's still lots of coffee.

**Trevor:** Well, that's, that's perfect.

**Jessica:** There's the, the Philz is still open down at Battery and Market. Oh, it's so good.

**Joe:** [00:13:09] I haven't been there in years.

**Trevor:** How long before all these office spaces turn into housing?

**Jessica:** At San Francisco? Good luck.

**Trevor:** Well, maybe not.

**Joe:** That's WeWork's rescue plan. Turn all that— turn all that office space. There you go.

**Trevor:** We Live.

**Bridget:** Wait, isn't that a zombie movie?

**Joe:** That's They Live. They weren't zombies, they were aliens.

**Jessica:** But they could still call it WeWork. It's just— it's WeWork at home, and now it's also—

**Trevor:** I suppose That's also a very important follow-up from last year. Uh, speaking of aliens, um, I finally watched Babylon 5. Oh, and I must concede, I must concede to Joe, Babylon 5 is the superior series.

**Joe:** It's better than DS9?

**Trevor:** It's better than DS9.

**Jessica:** There you go.

**Trevor:** But DS9's still really fucking good.

**Joe:** I'll take my win. I have low expectations for this CW reboot because it's the CW.

**Bridget:** [00:14:17] Wait, are they still doing that?

**Joe:** I haven't heard that they're not doing it.

**Jessica:** What's the CW?

**Bridget:** It's the thing that WB became, I want to say.

**Joe:** It's the thing that Supernatural was on for 8 million years.

**Bridget:** It's like a shady pseudo network.

**Jessica:** Oh, okay.

**Joe:** It seems to be like entirely like DC Extended Universe stuff now. Yeah, nowadays.

**Bridget:** Oh, speaking of reboots, we have to talk about Cowboy Bebop because I'm really upset. Okay, because they came out with a new Cowboy Bebop which I haven't watched yet because it was like 5 minutes later they canceled it, right?

**Matty:** And I haven't quite—

**Bridget:** what is happening?

**Matty:** I've got 2 more episodes, so I will tell— so here's—

**Jessica:** okay, I haven't watched any.

**Joe:** Don't spoil it. You watched them? Oh yeah, we watched one episode.

**Jessica:** Okay, so let's, let's just recap Recap what just happened here.

**Matty:** We have to talk about Cowboy Bebop. Please don't talk about it. Same words came out of—

**Trevor:** no, no, no, we can talk about Cowboy Bebop. We just can't talk about it.

**Bridget:** This is how upsetting it is that it got canceled. People reboot something and then cancel it 5 seconds later before anyone has a chance to watch it.

**Joe:** [00:15:21] This is why it's frustrating to, to try to watch TV shows with Bridget, in that if it's something she cares about She can only watch one episode every couple of weeks.

**Jessica:** Like real life.

**Joe:** Like we watched For All Mankind. We're still, we still have one episode left in season 1 because she can only watch one episode like every couple of weeks. And it's the same with—

**Matty:** I don't know why I can't get past like the first episode and there's nothing wrong with it, but okay, I'll tell you why. Here's part of the problem. I, for the last, like everybody else, or many other people, for the last year or so, it's incredibly hard for me to watch something I have to pay attention to. Because in the pandemic, this is why I've watched Community all the way through literally 10 times. I've watched Park and Rec all the way through a dozen times. Rewatched these shows. And there are certain shows that I really want to watch. It's why I never made it all the way through Dune. And now I'm gonna have to pay for it, right? Wasn't that I didn't like it, but I have to watch Foundation. For All Mankind, the same thing, because I have to sit and watch and pay attention. It's also why it's apparently a requirement on the DevRel team at Pulumi to watch Neo Genesis Evangelion. And I can't because it's subtitled and you can't watch subtitled stuff and do something else at the same time. I did—

**Bridget:** [00:16:44] Is there a dub?

**Matty:** No, but the dub's no good. The dub is terrible. I tried that. And then I ran into that same thing with Squid Game, although I did sit and watch it. Subtitled, but because I watched it dubbed and then it was like the— I could tell that the dub was bad and blah blah blah. Um, so, but Bebop, so just for, for a frame of reference, and I keep making these gestures that nobody can see, um, but I have never seen the original anime and I like the show. And I will tell you, I'm pretty pleased that I never saw the original anime because apparently if I had, I would hate the show.

**Bridget:** Um, but I wanted to go back and watch the first one and I still think that the show was fine because you shouldn't expect it to be a shot-for-shot remake. We know it actually was pretty close.

**Trevor:** Really, the only thing I was worried— the only thing that bothered me was the choreography just felt a little bit out of pace with itself. That was my only complaint. I pretty much enjoyed the rest of it.

**Matty:** It is shot very flat, I will tell you that. Like, if you watch and you look at the cinematography, there's parts that are great, but there's definitely It should have been shot a lot more dramatically than it was.

**Trevor:** [00:17:50] I feel like it was matching, it was matching a lot of the, the, the camera work and angles from the anime. They were really going to try and hit the style.

**Joe:** We haven't watched it since we originally watched it back in like '99, 2000. So, so I'm, I'm not, I wasn't, you know, I didn't do a rewatch. I haven't like, I haven't like soaked in that. You know, since, since, you know, it's been 20 years. But I enjoyed the first episode. I think what would have been, what would have been cool— I was talking to a coworker about this when, when, because he was on, he was unaware of, of the existence of this show. And so I was like, oh, they're, they're, they're doing a live-action Cowboy Bebop. And he's like, who's playing, who's playing Spike? I'm like, it's John, it's, it's John Cho. And he's like, He's like, the guy from Star Trek? No, he can't, he can't, you know, he doesn't have the gravitas. And it occurred to me who they should have cast as Spike. Anybody watch Warrior on Cinemax? And now it's on HBO Max. I take it by the silence no one has watched Warrior. It was basically, the concept of the show was, or is, they're gonna do a 3rd season. Is it was— remember how Bruce Lee had all these ideas that he brought to the network and eventually became Kung Fu: The Series? The Warrior is what that show would have been. And they have, they have an, they have an awesome, an awesome main character who actually can do the— can do all the martial arts stuff. Should have been— it should have been him. He should have been cast as Spike.

**Matty:** [00:19:32] I don't know. I thought John Cho— again, I know Cowboy Bebop through nerd osmosis. So I'm not— but I feel like that was a great casting. And having seen most of the show, whether it was accurate or not, he frickin slaps in that role. Like, it's super good. We have a couple questions coming from Twitter, by the way, if— and you're gonna especially laugh at this one. So our first question from Twitter comes from Joshua Zimmerman. He says, hi, I'm back again with another question for Joe. This year, and this is why I'm laughing, said, should we be excited or cautious about the Babylon 5 reboot given the flops of other recent sci-fi reboots? So Joshua, rewind the podcast and hear the answer to your question.

**Joe:** I am cautiously optimistic. My caution is solely based on the network and its other products, but optimistic in that, you know, that Babylon 5 is Babylon 5.

**Bridget:** [00:20:36] Wait, if Supernatural is anything to go by, do we think this is gonna go for like 15 seasons and get worse and worse over time?

**Trevor:** J. Michael Straczynski always seems to have a start and a finish in mind for his series.

**Bridget:** This is— JMS is actually running it. It's not just something—

**Joe:** No, he is. Yeah, he's, he's, he's, he's in charge of it. He'll be, he'll be doing it. But, but CW, man. I, I, I don't, I don't know about that.

**Bridget:** Okay, so Jessica's been very quiet. I was gonna say, I want to ask Jessica's opinion about what media have you been consuming lately, if any?

**Jessica:** Okay, okay. So here in San Francisco, I'm staying with Charity Majors, and, uh, the other—

**Matty:** I think staying with Charity is consuming media of some type, actually. Just being around Charity is— it's— yeah, that's its own thing. Yeah.

**Jessica:** It's amazing. Fun. Um, yeah, and you— and her house is like super rainbow too, as you might guess. Uh, yeah, so the other day we watched Schmegadoon.

**Matty:** [00:21:39] Oh, I really want to watch it, so I want to hear what you think about it.

**Jessica:** Oh, okay.

**Bridget:** What is it?

**Jessica:** Yeah, I, I mean, based on like, you know, if you're talking about sci-fi anime stuff, you should hate it because it's like a couple gets trapped in a super cheesy musical.

**Matty:** It's the Buffy musical episode, but the whole show is that.

**Bridget:** That sounds amazing, right?

**Jessica:** Yeah, it like, it like begs you to hate it because it's so cheesy and so like, like the, the little musical that they get trapped in is full of like misogyny. And I mean, it's just old, but not like it's— I mean, like ironically in the sense that the main— that the modern characters who get trapped there are like these people are awful, but the people are like, like the, the, the witches— what do they, what do they call themselves? The Mothers Against the Future. So, so the, the bad guys are the, the people who don't want modern values, and but meanwhile all the girls in the town are singing about chasing down wedding rings. And so yeah, very making fun of traditional values. Yeah, and that tracks.

**Joe:** [00:22:51] We We— that earlier this summer we watched Carousel for some reason that escapes me at the moment. Why we— why we went back and watched Carousel. And why not? I mean, that has—

**Trevor:** 2021, right?

**Jessica:** Right.

**Joe:** Yeah. And yeah, there's— there's a— there's a lot of very questionable material in Carousel, right?

**Jessica:** Right. Like, not the values I want my kids to grow up with, but they see it around them. And fortunately, they rebel against that. Um, yeah, yeah. But anyway, the musical, just the show Schmigadoon begs you to hate it. But I, I actually am enjoying it. I think we might watch more.

**Matty:** Glad you brought that because I've been— I forgot about that. I gotta say, I feel like Apple TV is kind of killing it with original programming lately.

**Jessica:** Like, yeah, I can only watch it at charities because if I try to watch it at home, I would have to log into Apple TV. And that is asking too much It's just so hard.

**Joe:** Yeah, I watched— I think I'm 3 episodes into Foundation.

**Bridget:** [00:23:55] Oh yeah, I told him he could watch that one without me because Asimov is just—

**Joe:** I read it as a teenager and have no memory of that story.

**Matty:** So I will tell you, Bridget, because there's quite a bit of Asimov that's not great. Like, I was concerned, but someone who would have the same reaction you just did, absolutely loved the series and said it was really, really well done and not the—

**Jessica:** those of you listening at home, Bridget made a face.

**Trevor:** Yes.

**Matty:** Now, now, but also it's funny when you said, you know, a show that begs you to hate it. Another, uh, Apple TV original that is 100 times better than it has any right to be from what you think it is is Mythic Quest.

**Bridget:** Yep.

**Matty:** Which is Like you would. I, I almost watched it on accident because I'm like, I do not want to see this. This is a show about a game studio. It looks terrible. Not only is it really, really funny, both seasons have an episode that gets you in the middle. It's middle of the season and it kicks you right in the heart and you go, oh wow, oh my God, that was so sweet. And so it's, it's, and it's very sharp and it's not like Silicon Valley where you're like, that's a little too on the nose and it's Episode 1, season 1.

**Trevor:** [00:25:11] I watched that about 2 weeks after my big breakup.

**Matty:** Oh yeah.

**Trevor:** And it destroyed me, especially because the, the woman in that episode was my ex's stand-in celebrity.

**Jessica:** Oh. Oh man. Wow.

**Matty:** So that's—

**Trevor:** it was like, it was square in the heart.

**Matty:** Let's move to another question.

**Bridget:** I want to, I want to interject that in this visual medium that is a podcast, I'm being entertained by Trevor's dog running back and forth and back and forth behind him, like from room to room. I don't know, there's a hallway behind Trevor and it's like a journey where his dog is weaving his way back and forth. It's very cute. Dog looks very happy and excited.

**Matty:** I, I did have earlier today, I had noise-canceling headphones on, but I wasn't listening to anything because I, I don't know how it's taken me however long as a parent to discover that that is a brilliant thing to do when the kids are fighting. Uh, but I'm, I'm dog sitting, so we have 2 dogs in the house right now. One, my dog, is a 7-month-old puppy, and the other one is a 5-month-old puppy. So they basically are wrestling nonstop, and it's actually very hilarious to watch 2 dogs wrestle silently. I was like, I couldn't figure it out. Um, so, but so, so Scott, Scott Hayne asks us, and we were probably going to get to this anyway, but, but we'll, we'll give the credit to Scott. Uh, he says, I would love to know what the high point of your year was, not necessarily any kind of tech achievement, but what warmed your heart personally in 2020. We can take as much time as you want because, because the long pause is staying in.

**Joe:** [00:26:58] It's just gonna be this like giant like long pause.

**Bridget:** I, I am gonna talk about a tech thing and then people can riff off that and go to non-tech But I'm gonna say that I was participating as a PM shepherding a particular feature in Kubernetes. And yes, mark your calendars, 2021 is the year of IPv6 on the Kubernetes cluster. We are finally here because it turns out you can't really just have IPv6. Because people have IPv4 everything. But you can have dual stack that lets people have clusters that can talk IPv4 and IPv6. And you would think, if you remember the '90s when people would tell you that IPv6 was coming and you were like, uh-huh, and then you would ignore it for another 20 years, we're actually past that now, finally. And I did a bunch of like behind-the-scenes work to help make that happen. And it was so gratifying to have the feature finally go to GA in Kubernetes at the beginning of December. Because it turns out, everything that you want to push through in a giant mega open source project goes a zillion times slower than you want it to. And it's really, really, really exciting to have something actually finish, especially because in all of our tech jobs, we just kind of keep iterating. We don't necessarily finish anything. And so like something actually got done, and I'm so happy about actually finishing something.

**Jessica:** [00:28:35] Bridget's highlight is something got done.

**Matty:** Good job. I too someday would like to finish something.

**Trevor:** Yeah, that would be nice.

**Bridget:** Exciting. It's really exciting.

**Matty:** I, I didn't think it ever was real.

**Trevor:** Sometimes it feels like just Groundhog's Day, having the same conversation a thousand times and it never actually gets any further. No, and we agree not to do it And then 6 months later, we're back to talking about doing it again.

**Bridget:** So yeah, so that's the high point of my year is something got finished.

**Trevor:** That's rad. I'm jealous.

**Jessica:** Uh, one of the high points of my year was giving up on never getting anything done and, and switching jobs, as you do. But now I work at Honeycomb and it's awesome. So cool.

**Trevor:** That's rad also.

**Jessica:** Yeah, yeah, but that wasn't the real height of my highlight of my year, although that was great and still is great. Um, my partner moved from Tennessee to St. Louis, so now we live like 3 miles apart, and it's fast.

**Matty:** That's wonderful.

**Bridget:** So much shorter distance to visit each other.

**Jessica:** [00:29:37] It is, it is.

**Matty:** If I know anything about one number being smaller than the other, that's great.

**Jessica:** Yeah, it's like we're hanging out And finishing each other's sentences. And it just reminds me of Bridget and Joe. I'm like, I've seen another couple who's like this.

**Matty:** I feel like I am gonna try to—

**Jessica:** Joe is shaking his head.

**Trevor:** Bridget, I'm gonna—

**Matty:** I'm gonna try to remember to grab the video of this and screenshot the looks on Bridget and Joe's faces and the dissonance between the two.

**Joe:** It's been a long pandemic, is all I can say.

**Trevor:** I would say for me, the highlight of my year is just realizing how much of a community I've found myself in and how much they care about me. That's really nice.

**Matty:** The thing I would say, again, it's always hard. I do not do well with being put on the spot with questions like this. Everyone's like, your favorite thing, what's your favorite thing? And there's recency effect for sure. But I, you know what, I'm thinking about it, like, the highlight is going to sound silly, but there was a week when I had breakfast with Bridget every day for like 3 days in a row. And it was at KubeCon. And it was funny. It was like the only time we really saw each other through KubeCon. And it was just, we didn't plan for it. It was just, we happened to be at the hotel, uh, breakfast place at the same time. And we just sat and had breakfast. And it was It wasn't just because it was really nice to see Bridget every day, but it was— and it wasn't like return to normalcy, but it was just like, this is what it's like to spend time with friends again. I mean, KubeCon in general was like, oh my God, but it was crazy. But just sort of that like— and then when it occurred to me on like the 3rd day, I'm like, oh, we're having breakfast today every— and on accident, it was pretty great. The other thing, by the way, uh, that was the highlight of KubeCon was remembering the pro tip I learned about conferencing from Mary Thengvall and Jeremy Price, which is always bring your swimsuit because most hotels have a hot tub. And starting your conference day at the hot tub is a really good way to conference. Let me tell you, it's not, you know, so, uh, which brings us back to our green rooming when we said if we did the show on Twitch, we would do it in a hot tub. Um, so, you know, I think that was holding up for the hot tub. Was that live?

**Trevor:** [00:32:04] I think we may have brought that into the live conversation. But you also made me think of one other thing that was really a highlight of my year, which was, uh, I rode a century on a bicycle. I rode 100 miles on a bicycle.

**Jessica:** Wow.

**Joe:** On purpose.

**Trevor:** All in a row. On purpose.

**Matty:** All in a row.

**Jessica:** And that was good?

**Trevor:** Yes, it was great. I'm not— and I'm not typically an athletic person, and I trained for it, and I didn't die, and it was awesome. You didn't die.

**Matty:** All right, Joe, you got to tell us the highlight of your year.

**Joe:** Oh, I got to highlight my year. OK, well, so, so the highlight, the highlight of the year was— and I'm going to have to go back and bum us out for a little bit. So in February of 2020, right before, right before the world ended, our older cat Iria passed away and we probably waited too long But in June of this year, we got— where is she— Ripley, who is down there sleeping as usual. And this, this was, this was good for the two of us, but it was even better for Nimoy. He was, he was a very, he was a very, he was a very lonely cat for, for, you know, a year plus. And, and they always say the best, the best cat toy you can get a cat is another cat, and It has done wonders for his, for his behavior and his attitude. He is a, he's a much happier cat nowadays now that he has, now that he has another cat to, to wrestle around with and wake up at 3 o'clock in the morning, even though she is now, she is now more than twice his size because he's a, he's a very tiny cat. But, but she has been, she's been an excellent addition to the team. And that is, and that is probably, and that is probably the, the high point of the year because, because it really, it really helped Nimue out.

**Trevor:** [00:33:59] I wish my cat didn't hate other cats. She gets angry when she sees it. If she sees another cat outside, she'll get all bushy and like you don't want to go near her because she'll attack you because she thinks you're the cat.

**Joe:** Oh, we were, we were prepared, we were prepared for the worst because The entire time, because when we got— we got Nimoy as a kitten and our other cat, Iria, was already like 15 years old. She's already really old. She wanted nothing to do with Nimoy. There was hissing and growling and the whole thing. So we were kind of prepared for the worst when introducing Ripley. And it was like, did you get Ripley as a kitten? Yeah. Yeah, she is. She is 8 months old as of As of a few days ago, and she is giant. I also I refer to her as Chunky Brewster. She is she is she's she's a she's a little bit of a chunk monster.

**Bridget:** But it was a podcast.

**Joe:** Yeah, we were we were prepared. We were prepared for their introduction to take to take days.

**Jessica:** [00:35:05] Soft and gray.

**Joe:** But but it took a matter with a white belly. Yeah, it took a matter of. Hours. And, and those two were, those two were fast friends.

**Jessica:** Wow.

**Joe:** It was, it was, it was literally like we got her, we brought her home in the afternoon, and by the, and by that night they were, they weren't, they weren't palling around, but there wasn't, there wasn't hissing and growling and, and all sorts of, and all sorts of carrying on. And now they are, and now they are, they're besties.

**Bridget:** And we think she must be by, by now maybe 12 pounds.

**Joe:** Oh, probably. She is, she is a, she is a She is a, she is a, she's a, she's a chunky girl.

**Bridget:** And Nimoy, our little cat, um, is 6 years old and 5 pounds.

**Joe:** Yes, he got to 5, he got to 5 pounds at like 6 months old and stopped. So that was the, that was the—

**Jessica:** Congratulations on your cat.

**Joe:** Highlight of our, the highlight of our year.

**Matty:** So I was just revisiting because I thought I remembered correctly the show notes from last year's year-end wrap-up. Which is when Trevor said that what he— what his, uh, thing that happened in 2020 was this dog that we keep talking about. So Friday is when Trevor got Friday. So in addition to that, I also got a dog this year. So Moxie, so, uh, came to— came to start living with us over the summer. So yeah, so new doggo, you know, uh, which was funny. So Friday— Friday actually got to investigate Friday was at my house like a couple of weeks before Moxie came home. So we actually were testing out the gates because it was, it worked out kind of well.

**Trevor:** [00:36:44] You had, you had a couple of dogs there. You had Friday was there and Nikki was there.

**Bridget:** That's right. You couldn't come to DevOps Days Minneapolis because you had tiny new puppy.

**Matty:** That's true. It was, yeah, it was, was not going to be prudent to leave a 10-week-old puppy by herself. Just to go to DevOps Days Minneapolis, but I really did.

**Bridget:** I'm sure the puppy would have been perfectly happy to take care of the house.

**Matty:** Yes.

**Jessica:** Last year, had you just moved in?

**Matty:** Yes, I actually— today is the 1-year anniversary of me getting the keys to my house.

**Jessica:** Oh, congrats.

**Matty:** So I'm trying to remember when we record if it was— I, I'm thinking in my head, I'm remembering sitting in my apartment when we recorded. So I feel like we recorded before I moved, but I was probably right about to, which the funny thing is, I could absolutely tell you because I'm sure it's on the calendar. I'm sure there's a calendar invite from last year because this matters.

**Joe:** That it's— this is, this is quality content right here.

**Trevor:** We do always review some forms of statistics.

**Matty:** [00:37:46] So yeah, this is about the best. When did you review it? Yep. December 8th. So it was a week earlier last year. So it was, it was right before and I probably didn't Probably was not willing to talk about it on the show because I was super nervous about telling anybody until I closed.

**Jessica:** So I probably told y'all it'd be like one of those reboots that was a failed update.

**Matty:** That's right. Yeah. So Trevor, Trevor's been to my house. That was a highlight.

**Trevor:** Very nice house.

**Matty:** I, you know, had like a cookout for the DevOps Days Chicago organizers because, uh, one of our founding members, uh, moved away this summer and So, uh, we had a little, little kind of going away, uh, which was just an excuse to have people come cook out at my house.

**Trevor:** It was nice. It was like, it was one of the first things we all got to do together post-vax.

**Matty:** If not one of, it was the— all right.

**Trevor:** I'm talking about maybe non-DevOps related things, but okay.

**Matty:** Well, even then though, I was like, yeah, it kind of felt like that. So we can talk about the show for a minute.

**Joe:** [00:38:48] Speaking of, we have, we have complete the—

**Jessica:** there's this, you know, the agenda has completely gone out the window. This is not a TV show.

**Trevor:** Yeah, no, this is the annual sci-fi and other media review.

**Joe:** Yeah, that's where we're, we're checking in. We're checking in on, on, uh, on the, the shit we've been watching.

**Matty:** I mean, remember, we had a very in-depth conversation. I mean, like, looking at the show notes, like, Joe went through in-depth Babylon 5 episodes.

**Joe:** So I did, I did, I did not, I did not come with any prepared content. For this, for this episode. I'm very sorry. But yeah, we should actually talk about, about the show that we're essentially here to talk about. So, so favorite episodes?

**Jessica:** Okay, I did some research today so that I would have something to say for favorite episode.

**Matty:** Oh, there you go.

**Jessica:** Some of them.

**Matty:** Yeah.

**Jessica:** And I like the one with Emily Freeman about Words Are Hard, although on that show Matt, you and Emily talked about some class you attended with some secret formula for presenting to power, and, and you referred to it several times, and then you didn't tell us what it was.

**Matty:** [00:40:00] What?

**Jessica:** What?

**Matty:** I don't even know which— oh my God, I gotta go back and listen to that now because I'm trying to even think about what that was.

**Bridget:** Is there a link in the show notes?

**Matty:** Well, no, if there was, I think that would— if there was—

**Jessica:** oh, I didn't look.

**Matty:** Um, I wonder if that's— hang on, I'm gonna look and see if I've got the transcription for it because that might make me remember. Oh no, I didn't put the one in. Oh shit, I didn't.

**Jessica:** Um, it was a lot of cursing in that episode. I enjoyed that.

**Matty:** Well, it was, it was Emily, and we had both just started our new jobs when we recorded.

**Jessica:** Yeah, too. Yeah, so you're at Pulumi now. That's cool.

**Matty:** Yes. Yeah, last year on the, on the— I got to announce my brand new job at Red Hat, and then almost a Exactly a year later, I started a brand new job at Pulumi. So Trevor, you didn't even get a chance. This is like 2 jobs you haven't followed me to yet. So you are slacking.

**Trevor:** You know, that always bothered me.

**Jessica:** That you were following Matt?

**Trevor:** Yeah.

**Bridget:** [00:41:00] He has to forge his own destiny.

**Jessica:** Yeah.

**Trevor:** Although the reality is if I'd followed Matt, I'd probably be in a better position.

**Jessica:** Well, it's not too late.

**Matty:** So, okay, so Jessica liked the Emily Freeman episode, which, you know, glad to hear that. I enjoyed doing it. I wish I published it sooner. I sat on that one a little long, as you can tell. But it aged, it aged well, like a lot of, you know, Bridget does the timely episodes, I do the timeless ones. That's how I look at it.

**Jessica:** There you go.

**Joe:** Well, she does the ones where it's, okay, I'm doing this, we have to get it out as soon as possible. Well, like, block your calendars because I need this episode.

**Bridget:** I'm not patient, but also I'm often talking about like this particular open source project, you know, is launching this version or whatever.

**Matty:** Um, so it's really mostly the former though.

**Jessica:** For my episode, it took weeks for me to make the art, and that was— that, that was the, uh—

**Matty:** [00:42:03] that's right, I remember that one.

**Jessica:** That one But it turned out really well.

**Matty:** That was, that was one of my favorites. I love that one. Well, the episode turned out really great. That was one of my favorites.

**Jessica:** Cool.

**Matty:** But speaking of art, my favorite episode was the Drawing DevOps episode with Ashton Roddenheiser. So if you, you may have seen Ashton around the conference circuit, but she does quite a bit of live sketches. Actually, I learned quite a bit about what, uh, a whole other aspect of the work that she does that isn't just drawing, uh, pictures of people's talks at DevOps Days, but kind of doing the, the sketch recording at meetings. Uh, and a lot of it was, it was, it was, it was pretty interesting. It was very fascinating to me to sort of see all the things that she's learned about DevOps over the years of drawing, which, which actually, the more I think about it, that would have been a great episode to do with Joe. Because, you know, that's—

**Joe:** I was, I was gonna bring that up because that's something, that's something I enjoyed about that episode. I enjoyed, I enjoyed yet another outsider's perspective on, on DevOps Days because I was— when, when I started going to, to DevOps Days, you know, being, being voluntold that I'm, that I'm going to provide the, the, uh, the audiovisual for one I had, I had no idea. I mean, I had, you know, sat in my fair share of, of, of tech events just from work stuff. But, but getting, getting somebody who's, who's not— but seeing somebody else who's not steeped in it, who really doesn't have a clue as to what these people are talking about, it's, it's interesting. And, and her, her impressions and her experience and my experience kind of kind of overlapped a little bit.

**Bridget:** [00:43:50] Meanwhile, I think the episodes that stood out for me, I mean, I didn't do that many this year, and I'm not super good at listening to the ones I'm not on. Sorry, not sorry. But I will say that it's really exciting to talk to open source project maintainers about details that may not be, you know, on the repo, or things that they've run into, or problems that they're trying to solve, or the future directions they want to take the project. So yeah, I talked to Open Service Mesh maintainers about their future plans for multi-cluster and talked to Kent from Brigade about Brigade v2 before Brigade v2 was even released. It is released now. But I like that, to kind of get people talking about something they're excited about and see what direction that goes.

**Trevor:** I'm like Bridget. I don't listen to ones that I'm not on. And I wasn't on any this year.

**Bridget:** Trevor, instead, can you give us an example example of something, whether it be a TV show or a podcast of other sorts, that you did listen to this year or watch this year that stood out for you?

**Trevor:** [00:44:56] Yeah, I discovered this series. Actually, you know, maybe I talked about this last year because I've been listening to this guy for a while now. It's called Project Farm.

**Jessica:** Oh, I thought he was gonna say Babylon 5.

**Bridget:** Project Farm.

**Trevor:** It's this YouTube channel where this, uh, this person basically buys a bunch of a particular type of tool and then puts them through mostly scientific tests to determine which, which of them are the highest quality. And it's super fascinating and super interesting.

**Matty:** I think you brought this up last year. It sounds very familiar.

**Bridget:** Yeah, this sounds like the— your parents subscribe to all of these totally bizarre YouTube shows that are like, young couple lives in Alaska, comma, builds everything from scratch, comma, there's a lot of snow, comma, they seem miserable. And that's a YouTube show.

**Joe:** There is apparently like an entire YouTube subculture of, of people like building their own cabins and like log homes in like the middle of nowhere Alaska or Canada or—

**Jessica:** [00:46:02] so it's like wilderness with webcams.

**Bridget:** Yes.

**Jessica:** Yeah.

**Bridget:** And they basically document They're like, they're usually like, it's kind of talking head docudrama as like they're drilling or whatever.

**Joe:** Today I'm going to put up this drywall, and, and they show themselves like putting up the drywall, and they're like, watch this avidly.

**Trevor:** And they are like, my mom actually just told me about a series like this. I don't know if I think it was exactly the same, but it was very similar.

**Joe:** And the, the one, the one we watched when we were there on Thanksgiving was this couple living in like, you know, the middle of nowhere, Canada or whatever, and they had chickens. So they have all these eggs and they were, and they were, they were preserving whole chicken eggs in— it's a thing called water.

**Jessica:** It's making a major no, no, no.

**Joe:** It looked— it did, it did not look good. I, I don't like— I, I don't like eggs under the best of circumstances, and this was, this was basically—

**Matty:** this was called circumstances.

**Joe:** Yeah, they're called water glass eggs. It's basically sort of like pickling but without anything that would make them pickle. It's basically you're, you're soaking your, you're storing your eggs in a, in a pail of basically, uh, water with lye.

**Bridget:** [00:47:18] So it's, it's lye and prayers for egg preservation.

**Joe:** It's like water mixed with calcium hydroxide and you keep the eggs in it.

**Bridget:** And then they showed some that didn't go well. They were like, these grayish ones didn't— nope.

**Joe:** Yeah, I, and after I, I looked this up online after I watched the episode, and apparently it is a thing that you can do. You can, you can, you can keep eggs in a solution of water and calcium hydroxide and then use them as like normal eggs.

**Bridget:** So many—

**Jessica:** this is physically possible.

**Joe:** It is, it is physically possible.

**Trevor:** But not with technology.

**Bridget:** They have the technology, sort of, though it seemed to fail.

**Joe:** We have the technology. They're called grocery stores or refrigerators.

**Bridget:** So let's see.

**Joe:** I will also say that another, another, another favorite episode of mine, just the pure— well, the pure, the pure editing challenge was the, was the Tech Twitter episode because there was like, there were like 15 guests on that episode and it was a, and it was It was a challenge to edit that one.

**Matty:** [00:48:25] So I will say this is without going into like, you know, Joe, Joe, you, you do your format, your way you do stuff. Um, but the tool for everyone who's listening, who does podcasty things, uh, Descript is really good. And it's a whole different way to think about how you do it because the transcription is built into the editing. So what ends up happening is you bring it in, It uses machine captions, but you edit with the text.

**Jessica:** Yeah, it's almost like you want to edit according to the words instead of the wiggly sound waves.

**Matty:** You can go into the wiggly sound waves if you want. Like, there's definitely places, and, um, there are places where I've, where I've done that, but you can do a really good sweep and get a bunch of good stuff done. It's also, uh, pretty— you have to be careful, like, you can get overzealous Because it will get rid of filler words and gaps, but don't over— be overzealous. Like, uh, there are definitely filler— for things that identifies that I say that it thinks are filler words that are just my verbal tics. Uh, it's very interesting, and it's especially fun if you are, uh, using a multi-ender, which I do sometimes. Like, I record a podcast, a multi-ended recording, like a Zencastr or Squadcast. Where instead of—

**Jessica:** [00:49:45] oh, like where you have both people on separate tracks?

**Matty:** Separate tracks, because then the transcription's much better because it also can definitely identify those who's who versus what it does noticing when voices change. Yeah, they are, although it's gotten a little better at like you being able to tell. But the reason I bring this up with the Deserted Island DevOps one was really hard because there's, there's like 10 people on that episode. And so when you bring it in and I recorded it on Zoom It's gonna— it plays a little snippet. It's like, who is this? And I'm like, I don't know the people, which is fine for like 4 people, but I'm like, there's enough people on that episode that I don't know. They're not like my besties ever. And even if it was recognizing from like one sentence, you're like, I think that's this area, but I'm not sure.

**Jessica:** Um, the script is the future of editing. It is not the present for video at all.

**Matty:** I can't— I haven't even tried, but I don't imagine yet.

**Jessica:** I mean, it's— it'll, it'll get there.

**Joe:** [00:50:45] I'm thinking of moving, moving my, my workflow from Audacity and GarageBand to just Logic Pro X and see, and see how, and see how that goes. But I'm— I need, I need my, I need my waveform. I need, I need to be able to see. I need to be able to see the audio.

**Jessica:** It does show the waveform.

**Matty:** Yeah, very much how I do it. You kind of have both together.

**Jessica:** Yeah, and you can, you can tell it where you want it to stop and start and it gets— yeah, don't count on it.

**Matty:** The, the, the other place where it— yeah, it's also because it's transcription first. Again, they're machine captions, but they're fairly good and they're easy to correct and they're very easy to correct as you go. But I like it with my flow with, with ADO because then I have the captions right away. And we do— you may or may not know this, listeners or hosts, but we do support transcriptions on our website now when I put them in, which I don't always do because if I, if I did the episode and edited the script, I have it. If it's one of y'all's, I have to put it through Castor or through, through a service that costs money, which is fine. And by the way, I did look at that.

**Jessica:** [00:52:00] The script costs money, but—

**Matty:** Well, the script costs money, but it's— That's a fix. I already have it, right?

**Jessica:** Yeah.

**Matty:** I did look into, like, so the reason— and I am apologizing, making no excuses. We are missing accessibility and we need to do better. Going back through our whole back catalog, I calculated it would cost us over $45,000 to transcribe all of back catalog ADO so that we are trying to go forward with it and make that be something we have. But that said, if you are—

**Jessica:** if you want to sponsor that, we'll take it.

**Matty:** Well, we actually do have sponsors that give us money that go towards that, but not enough to pay for— that said, if somebody wants to do a $45,000, you know, directly, you know, pay our—

**Jessica:** we could put their ad in front of all those transcriptions.

**Matty:** So last couple little podcasty things, uh, when we look back at the year. So we did, uh, we had 11 episodes this year. I actually It was funny because I was thinking, I was like, I feel like we didn't have a lot of episodes, but that's almost one a month. That's not atypical for us. And I do have— yeah, we got 4 in the— 4 ready to go. So, so there should be a whole bunch more content coming. Um, so we actually had a pretty, pretty good year for that. But that being said, as of today, December 15th, uh, the most listened to episode in 2021 was drum roll please, all things Docker. So goes to Bridget, uh, as the host, uh, you know, I guess you get the gold star for that.

**Bridget:** [00:53:30] Or to, to Donnie and Justin.

**Matty:** Yes. Wow, they're not here, so accept in their stead.

**Joe:** Um, Docker, Docker still, Docker still moves the needle like it's, like it's 2012.

**Bridget:** Oh my God, I have a theory about that. I actually think that because we recorded the episode, quote unquote, live, and it was like on Zoom and it was pretty early in 2021 where people like still want in. And we recorded it like US lunchtime. There were a lot of reasons that a lot of people were able to join it. And so I think that kind of gets a cascading effect of people talking about it and linking to it and such.

**Matty:** The second most listened to episode was Foundational Practices. With Johan Abildskov. And the best part about that one is we had a really hard time getting me to understand how to pronounce his name because the letter V in Johan's accent is pronounced differently than I thought. And we kept arguing. I kept thinking he was saying B. It was, it was, and then that actually became part of a conversation we had about communication breakdown from context. And the number 3 episode was actually our first episode of the year, which was Doing Releases Right with Scott Hayne. Uh, which I didn't even remember that was this year. Like, when I was looking back, I mean, I remember doing the episode, but I was like, oh yeah, we did that earlier.

**Trevor:** [00:54:48] What's our total, uh, listen count?

**Matty:** Oh, okay, well, let's, let's find out. Hang on, hang on, let's— oh, of 2021?

**Trevor:** Um, well, I mean, cumulative from the beginning, obviously.

**Matty:** Yeah, let's discuss total downloads. 1.6 million.

**Jessica:** Wow.

**Matty:** Cumulative since the existence of ADO. Uh, 1.6 million.

**Bridget:** Uh, I remember how many, how many people are just running this in their build systems?

**Matty:** So, you know, yes, yes. If you are, if you are, let's see.

**Jessica:** And he was listening.

**Matty:** Oh, we pulled— did I, did I give us our— did I share with y'all our Spotify stats? We actually are starting to get, uh, a lot more people listening on Spotify, um, than, than we have in the past. Oh, 6 new countries. Uh, listening to us. The, the countries that like, uh, that listen to, uh, ADO the most on Spotify are Slovenia, Kenya, Serbia, Lesotho, and Nigeria. Wow. Um, let's see. Uh, oh, our follower— our Spotify follower count grew by 62%. Our listeners grew by 16%.

**Joe:** [00:56:00] And, um, to 62 and 16 respectively.

**Matty:** No. Uh, oh, though, listen to this. This one I thought was interesting. There are 137 people on who listen to ADO on Spotify more than any other podcast on Spotify. So we have 137 Spotify superfans. Um, 12 of our fans listen to us on their birthday. 7—

**Joe:** that's, that's a weird metric.

**Matty:** 7, 7 people listen to us on New Year's Day. 14 people listen to us on International Podcast Day. Okay, um, that's a number. 48— there are 48 people who listen to most of the episodes we have on Spotify. So, okay, 48 people. Oh, okay, 34% of our fans listen between 11 and 5— 11 AM and 5 PM.

**Jessica:** Okay, their time zone.

**Matty:** Um, I, I think it's local. Yeah.

**Jessica:** Good.

**Matty:** Um, let's see, I just— why don't I have a number? Okay, that didn't give us that number.

**Jessica:** [00:57:03] You have a lot of numbers.

**Matty:** We had a lot of numbers, but none of which were terribly interesting. Anyway, if we go back and look at— so that's not inclusive of Spotify, the number that 1.6 million Spotify comes in in a whole different way. Million plus 130 plus, plus a couple more. I know it was like, it's, it's quite a few thousand.

**Bridget:** Welcome to our podcast on podcasting.

**Matty:** This is, this is, this is Bridget's favorite time of the year.

**Joe:** Yeah, um, podcast about podcasting.

**Matty:** Okay, here, if you want to actually know the, um, where— no, that's catalog, the rest of DevOps. Okay, um, let's see if we look for—

**Bridget:** if we could only do this on Twitch, we could do this every time.

**Joe:** Well, it'd be more interesting because we'd be sitting in a hot tub while we're doing this.

**Bridget:** Why do people think there are hot tubs?

**Matty:** We'd have— no, because I saw, I saw, I saw a thing online about— because it's banned. If you're in a hot tub on Twitch, you will get your stream banned. It's like not allowed.

**Joe:** [00:58:07] Yeah, there was— I, I read a, I read a Gizmodo article or something about, about one of these like top, top Twitch streamers who like played video games in a hot tub and got banned.

**Bridget:** Is the concern about electrocution?

**Matty:** No, no, no, no. It's about nudity. Yes. Same reason you can't show your feet. Okay, back to stats. We actually have, we have like 2,700 followers on Spotify and over 4,300 people have listened to us. 24,000 times someone has at least started Uh, one of our episodes. So, so we— Spotify is, yeah, it's non-trivial, uh, for where people listen to us. So that's kind of cool. Um, and, uh, we also— I don't have any way to know this, but you can listen to us on Audible and iHeartRadio, uh, apparently. Uh, I guess those are places people listen to podcasts. Um, so those are some numbers.

**Bridget:** [00:59:09] Um, What's that thing my hairstylist uses?

**Jessica:** Pandora?

**Bridget:** Is that—

**Matty:** I don't think Pandora— I don't think Pandora has podcasts.

**Trevor:** Google has a thing and Apple has a thing.

**Matty:** Yeah, but we get those. Those will come from— those will come in our other stats. Yeah, Blueberry will have those because those just pull from our feed. Spotify like slurps it in and then does it different.

**Joe:** So we kind of— we kind of spent most of the podcast talking about what happened in 2021, so Looking forward into— we sort of did. We sort of— we spent some time talking about TV.

**Matty:** We talked about TV that we watched in 2020.

**Joe:** What else did anybody do in 2020? What else did anyone do in 2021?

**Bridget:** Talked about our favorite things.

**Matty:** Talked about everything. I ate breakfast with Bridget and watched TV. That was my 2021.

**Joe:** Yeah, I ate breakfast with Bridget every day.

**Matty:** I was gonna say, Joe was like, usually I have to make the breakfast.

**Joe:** See, that's, that's, that's the thing about you, like, getting to have breakfast with Bridget. It's It's a different experience if you have to make the breakfast for her.

**Bridget:** [01:00:10] It's a wonderful experience.

**Joe:** Yes, it's a wonderful experience. I made breakfast tacos this morning.

**Bridget:** They were so good. Yum. He used tortillas from Nixta. We should put a link in the show notes, even though I don't think you can get them if you don't live in the Twin Cities. But they're really good.

**Joe:** Yes. For the, for the 6 people that listen to this podcast in Minneapolis, Go to Nixta.

**Bridget:** Nixta tortillas are so good.

**Matty:** I, I think we probably have more, more listeners in Minneapolis than 6.

**Jessica:** Well, for this episode though.

**Matty:** Uh, all right, wait, wait, wait, I can tell you, I can tell you. Oh, over time, over time, uh, our show has been listened to over 14,000 times in Minneapolis-St. Paul.

**Bridget:** How many of them are us catching up on?

**Joe:** I was about to say, I'm, I'm fairly certain this podcast.

**Matty:** I was gonna say, I was pretty sure that Bridget told me she doesn't listen to the podcast, so I don't think— yeah, yeah.

**Trevor:** [01:01:11] And Joe, you listening to it while editing doesn't count.

**Jessica:** And again, that's before it's published.

**Bridget:** Yeah.

**Matty:** All right, San Francisco is our highest number.

**Bridget:** All right, before we move on to 2022, um, let's just get any other recaps that people want to talk about things that were highlights of 2021 you want to mention for the podcast? Hashtag Kubernetes.

**Jessica:** Oh, uh, well, at Honeycomb, we, um, we actually moved over to Kubernetes. We're not quite— not everything's running on Kubernetes, but we've kind of been like, yeah, Kubernetes, we don't use it for years, and now we do.

**Bridget:** I feel like you must have the most observable Kubernetes that has ever been observed.

**Jessica:** I hope so. I mean, we do put a lot of effort into that. Whenever a problem happens and we can't see it in our tracing data and we couldn't find it, then we work on adding it.

**Joe:** Does it change the nature of the Kubernetes to be observed? Oh, this is a very good summary. Is there an observer's—

**Trevor:** [01:02:15] Heisenberg's Kubernetes principle?

**Jessica:** There is definitely a point where if you get too much information on your system, your system crashes. I mean, just in general, there is such a thing as sending too much data over the network.

**Bridget:** You got it straight from Honeycomb.

**Jessica:** It's pretty far though. It's pretty—

**Bridget:** modulate your observing.

**Joe:** Observe it, but not too much.

**Jessica:** I mean, observability is about, like, consciously selecting what information you need. Um, yeah, absolutely. And, and, like, consciously sampling if, if you need sampling. And, uh, it really is about, like, getting your system to teach you what you need, not about dumping fucking metrics out your butt.

**Joe:** There's your cold open.

**Matty:** Oh my God, you know what, always, always go with the swear, Joe. I feel like I know the answer to this and it would be hard because I remember in our first year-end wrap-up show I just tried to go even pull clips from previous episodes and it was hard. But I would love—

**Joe:** [01:03:18] maybe, maybe we can find a milestone The first year after I started editing the show, the year-end wrap-up, I did a supercut of all, like the cold open for this episode was a supercut of all the cold opens.

**Matty:** No, so, but with the analysis, so it reminds me, so like I've been here and there listening to Office Ladies, to the like, you know, Office Rewatch podcast. And they have like one of their listeners— it's like this huge, giantly popular podcast apparently. Um, it's fun if you like The Office.

**Jessica:** But watching The Office—

**Matty:** oh, you might, you might enjoy this show. So it's, it's, uh, Jenna and Angela, like they're rewatching it and talking about it, and it's like one of the biggest podcasts of the last 2 years. Anyway, yeah, but one of their— now it kicked off a whole concept. There's like tons of shows doing There was like a Scrubs one. There's one called Parks and Recollection.

**Trevor:** [01:04:19] There's one for Voyager too.

**Bridget:** Yeah. There was a great one for West Wing a few years ago.

**Matty:** But I think Office Ladies is what sort of started it.

**Joe:** Is there the podcast about nothing, which is the rewatch of Seinfeld? I have to Google that.

**Matty:** I want to know who's going to do the podcast that is a re-listen of Arrested DevOps. So if anyone out there wants to—

**Jessica:** probably none of us because we never listened.

**Matty:** We don't listen to it, but thousands of you do. So, so I think there should be a meta— there should be a meta ADO podcast. Um, but anyway, one of the listeners to Office Ladies is— he's like a data scientist, and he's written in recently, and he's been doing calculations because they all have their little verbal tics and, and stuff about like how often they say the word lady and all this stuff, and Like he's committed to like getting all the way through. And he's like kind of a, you know, the fans of the podcast love this guy now too. So, so anyway, so if any of you data scientists that listen to the show would like to perform statistical analysis on how often we talk about the fact that Bridget's never seen the show Arrested Development, I think the answer is 7. But yeah, it's a non— it's not a large number, but it's an existent number.

**Trevor:** [01:05:38] Um, number of times we, we call Trevor the youngest over time.

**Matty:** I feel like, I feel like that's, that's played though. Like, you know, I, I think it's been that, that probably peaked about 5 years ago.

**Bridget:** Um, Moxie the youngest.

**Matty:** Moxie, Moxie probably is the youngest. Yeah.

**Bridget:** Or maybe Ripley.

**Matty:** How old is Ripley?

**Joe:** When was, when was he born?

**Matty:** April, April 20-something.

**Joe:** Has Ripley beat by like 10 days.

**Matty:** Okay. Yeah.

**Joe:** Ripley was born April 11th.

**Matty:** Oh, okay. Okay. Yeah. So they're basically the same. The fun thing is the original plan with if I had gotten the dog when I was expecting and my ex had gotten her dog when was expecting, the dogs that we were expecting to get would have been about a week apart in age. And so, yeah, my son was head— when we were first talking about this, so he was already planning like the joint birthday parties of his dogs, but To be honest, them being about 2 months of this has been— because it would have been a lot for the kids to have 2 brand new puppies at both houses at the same time.

**Jessica:** [01:06:43] So, you know, um, but yeah, um, puppy stage is the best and the worst.

**Matty:** It is. I'm trying to remind myself to at least wait another year or so before another dog, because it's been fun having the other one and them playing together. And I was having a really good time out in the yard playing with both dogs. I was like, oh, and I'm like, no, I said I was gonna wait till Moxie was 2. Before I got another dog, but maybe, maybe a year and a half.

**Bridget:** And you're reminding me of one of the, you know, well-worn tweets that has been making the rounds again. The, you know, this, this software is not free as in beer, it's free as in puppy.

**Jessica:** Oh yeah, yeah. And there's another one. One of the keynoters at Strange Sleep mentioned open source software is free as in mattress. You bring it home and now your whole house is full of bugs and that's your problem.

**Matty:** I, uh, I actually found— we've met the, um, the family that owns, uh, Moxie's brother, you know, lives not far from us, and we've had, had a playdate. And I remember I was talking to the, to the mom, and so their dog Duck, Moxie's littermate, is their second dog, you know, they already have a dog. And she was talking, we were both talking about wanting to get another dog, and she said, you know, she was telling her husband she wanted to get another one, and he said Well, wait, but then we would have 3 dogs. And she's like, yes, yes, your math is correct. We would, we would have 3 dogs. That's—

**Bridget:** [01:08:08] you're right.

**Jessica:** Yeah.

**Joe:** So that, that equation of that I usually apply to bikes and guitars also applies to dogs. The correct number of— how to calculate the correct number of dogs is n plus 1.

**Matty:** Yeah.

**Joe:** Where n is the current number of dogs you own.

**Bridget:** Do you own the dog though, or does the dog own you?

**Matty:** Uh, well, that's cats. Like dogs— well, there's, there's like, there's that great— it was funny, this is one of my favorite little comics I've seen, and my son told me about it today, like he had discovered it as well. But it's like in the first pane, it's like it's a dog, and the dog's sitting there going, these people, they, they bring me food and they take care of me and they give me somewhere to live. They must be a god. And then the cat's sitting there saying, you know, these people, they bring me food and they take care of me. I must be a god.

**Bridget:** [01:09:08] Well, I mean, Trevor, you have dog and cat.

**Matty:** What do you think?

**Bridget:** Is that accurate?

**Trevor:** Oh, 100%. 100%.

**Jessica:** There's also a great tweet going around recently about everyone who has 2 cats has one beautiful idiot and one demon plotting to take over the world. That's totally true. Is Ripley the beautiful idiot?

**Joe:** Ripley is a beautiful idiot and Nimoy is plotting to take over the world.

**Jessica:** Yes, because earlier Bridget picked up Ripley, for those of you who didn't get to see this, and Ripley just kind of like sat there halfway upright with her arms flopped and stared at the camera.

**Bridget:** She was, she was asleep until that very second, and she had her eyes open.

**Trevor:** That's why.

**Jessica:** But she up and she like didn't care.

**Joe:** But she is, she's very— when you, when you pick her up, she's very like no bones.

**Jessica:** Yeah, she's just one of them.

**Joe:** [01:10:08] She just, she just kind of, she just kind of, she just kind of goes limp.

**Matty:** So we are definitely gonna put a picture of Maxi and a picture of Ripley in the show notes. So good, good for you. Get me one of those pictures there, uh, Lehays and Kramhauts. Um, all right, what is, what is the, what is the, the combined plural noun of you two?

**Jessica:** What's your couple name?

**Matty:** Yeah, what's your couple name? We don't— what's your name?

**Jessica:** Joe makes a very unhappy face about that.

**Matty:** I know, that's— I knew, I knew exactly how Bridget was going to respond to it, which is exactly why I said it. Um, like the— wait, why would we?

**Joe:** Well, see, here's the, here's, here's the explanation.

**Matty:** So They don't go together very well.

**Joe:** No, they don't really.

**Matty:** Yeah, but it's not— you're not a poor man too.

**Joe:** We are not. Back in the olden, olden, olden, olden, olden days, um, when we, we had a, we had a wiki that we ran, that we operated with, with a bunch of our, with a bunch of our friends about, and about this, you know, just, just like it was, it was events.

**Bridget:** [01:11:09] It was like 2002.

**Joe:** Yeah, this was, this was old time.

**Jessica:** Facebook doesn't exist yet, so we have our—

**Bridget:** yeah, Facebook doesn't exist yet.

**Joe:** We built our own. So, so we would— we established— we, we came up with this way of like establishing where events were going to take place. Like, who's, you know, party's going to be at, you know, such and such's house or whatever. So everybody—

**Bridget:** Ryan started this.

**Joe:** Ryan did start— our friend, our friend Ryan did start this. We basically all picked Simpsons place names, as one does, as the nickname for our house.

**Jessica:** Oh, okay.

**Bridget:** So Ryan had Springfield Retirement.

**Joe:** Yeah, it was, it was kind of based on the general, the general vibe of the people that live there.

**Bridget:** Like, like Sammy had Android's Dungeon because video games.

**Joe:** Yeah, because we would always kind of play video games over at our friend Sammy's house. So they became Android's Dungeon. The place where we would, we kind of had all of our, all of our big, like, you know, drinking parties became Duff Gardens. You know, it was, it was a very— everybody kind of picked their own, picked their own thing. So ours, and this is ours, is the only one that we still refer to by its place name. Ours was Gazebo 7.

**Bridget:** [01:12:18] And it's literally because there was an episode where these, the nerds were like arguing with the drunks about who got, who had reserved the gazebo. And we, we are definitely the role-playing nerds in costume who would argue with the drunks about who reserved the gazebo.

**Joe:** For those of you who actually, it's the episode where Lisa joins Mensa. And they're having their Renaissance fair and they reserved— they reserved the gazebo. But, but, but, but Lenny and Carl and like one of the other rando characters is like hanging out, hanging out drinking beers in the gazebo that they, that they reserved. And Lisa goes up to Chief Wiggum and is like, we reserved gazebo 7 like weeks ago. And so we have always referred to our house as gazebo 7, as one does. So we don't really have a— we don't really have like a name portmanteau. We just refer to to our household as Gazebo 7. When we play, we play online trivia over the last year, our team name is Gazebo 7.

**Jessica:** [01:13:18] Okay, that's your team name. That works.

**Matty:** We got that. All right, G7, make sure you give me a very, very simple—

**Joe:** in that it required like a 15-minute explanation.

**Matty:** Well, if there was a podcast episode where that belonged, it would be this one.

**Joe:** Yeah, moving right along into 2022 and what everybody's looking forward to in the coming year?

**Jessica:** Ooh, I'll start.

**Bridget:** I am super, super excited to be in charge of even less stuff in the coming year than I was in the past.

**Matty:** I saw that.

**Bridget:** Listeners may recall that last year, I was mentioning one of the exciting highlights was Stratton and Evo taking over the Global DevOps Days org. Well, this year, one of the highlights is Andy Fehner is taking over the Minneapolis DevOps Days, you know, instance. And I will still be on staff in an advisory/helping/handover capacity. But I'm so excited because it turns out when you're not in charge of something anymore, not only is it less work for you, but also it gives other people an opportunity to shine and grow and get recognition and accolades. It's so great.

**Matty:** [01:14:31] In related news, one of the lowlights of 2021 for me was taking over DevOps Days from Bridget and having to do all that goddamn work. I'm kidding, I'm kidding, I'm kidding. That was, that was just me trying to—

**Joe:** You did great.

**Matty:** Um, but that is very exciting. Also, you probably enjoy it more when you don't have to be in charge, besides all the building that has to go up. But it's— well, I guess you'll find out.

**Bridget:** Yeah, we'll find out. But I have— we'll find out exactly how in charge Andy is for this, uh, for this conference when it actually gets All right, Stratton, in your estimation, how much have you and Evo been in charge of global this year? Have I been some sort of Machiavellian behind-the-scenes monkey's paw sort of person?

**Matty:** Like, no, no, no, I, I, I, again, you can't see it. I've been trying.

**Joe:** I'm just making faces.

**Matty:** The long pause accomplishes that. No, actually, I will, I will say Bridget's been fantastic, and, and I have felt like, um, I didn't want to, uh, for lack of a better word, bug you with stuff, but you've been very, you know, very good to be like, okay, like, you know, let's rubber duck this out, let's sort of, sort of think through this and, and be able to go to that. So, um, but, but that not to say that I don't— did not have kind of the exact same thought when I saw your tweet that Joe did, because Core is one thing, DevOps Days Minneapolis is another. But we'll see. I think you're gonna do great. I think Andy is gonna do great. It's still, as I have said before, I started and still run DevOps Days Chicago, and I will still say that DevOps Days Minneapolis is the best DevOps Days.

**Bridget:** [01:16:22] So, um, it is a great DevOps Days. I'm really excited though about Andy being the new head chief decision maker in charge, because I think that when you get someone different making some decisions, they might not make all the same decisions, which means I get a chance to be surprised and other people get a chance to have their voices heard who maybe I was always kind of saying, oh, let's do it my way. And hey, now there's a chance to do something a little differently. It's exciting. Yeah, so that's the big thing I'm looking forward to in 2022. That and on the work front, just like even more upstream Kubernetes and SIG Network stuff. Just like that's been a big focus for me.

**Joe:** We got to get that mention of Kubernetes every couple of minutes.

**Bridget:** There are people who are not watching the video version and can't see that I'm wearing a vintage KubeCon t-shirt.

**Jessica:** We know who you are, Bridget. We know you're wearing a Kubernetes t-shirt. Yeah, that's fair.

**Bridget:** [01:17:23] Oh, how about you, Jessica? What are you looking forward to this year?

**Jessica:** Uh, next summer we're going to the beach. The beach?

**Bridget:** Wait, the beach? There's not a beach in St. Louis.

**Jessica:** No, we're going to Tybee Island, Georgia.

**Bridget:** No.

**Jessica:** Oh, okay. Which has been a family tradition for a while, but then COVID. But this year, this coming year, I've already reserved the house. And we will go to the stupid beach, damn it! I miss it so much.

**Bridget:** Aw, that's great.

**Jessica:** No hot tubs though, just a beach. It's fine.

**Joe:** Well, when you have the beach— we have the ocean, you don't need a hot tub.

**Jessica:** It's the Atlantic Ocean, and it's not the cold ocean. It's really nice there. Trevor, what are you looking forward to?

**Trevor:** In continuing with my becoming an athletic person somehow, Um, we're looking at doing another century next year, doing a ride from Seattle to Portland, and doing a triathlon I'm going to go for in Chicago next year.

**Jessica:** [01:18:26] Oh my God.

**Matty:** Wow. Yeah. Well, I rode my Peloton for 9 days in a row, so, hey, you know, that's a start.

**Bridget:** That is, that's really impressive.

**Matty:** It's impressive considering that I've barely ridden it. Like in the last year or so. Like, I, I did it like every day for 2 months when I first got it back in May of 2020. And then there's actually a corollary connection to ADO, uh, when it comes to a streak. Okay, so you longtime listeners may or may not know this, but for at least the first year or 2 of ADO, at least me, and I think Trevor— this was true, but Trevor might have been— but I did not miss a single— I was on every single episode And I remember there was an episode, and if I think hard about— I think it was the disasters episode.

**Jessica:** Yeah, we used to have like multiple—

**Matty:** was the— was the— but this was the first one. And I remember it was, it was like it was scheduled and I couldn't do it, and I was really nervous about like what was gonna happen. But it was like, but because I missed doing one, it became okay to not host everyone, which is in this particular case is a good thing. Right? But the same thing happened with the Peloton because there would be workout— like, because I didn't want to break my streak. So you would see there were nights I was riding that bike at 11:30 at night because I'm like, I don't want to break my streak. But as soon as I missed one, it became okay to not do it every day. And then it very quickly got too easy to be like, oh, I don't feel like doing it or whatever. It is like Jerry Seinfeld talks about this, like it's that normalization of deviance. It is 100% normalization of deviance, but it's also like why you do the— like, the Seinfeld method is like when you're trying to, whether it's quit smoking or trying to do a certain thing every day, you literally draw the X's on the calendar because you'll build that streak and it will make it psychologically hard to— because the longer you go, you don't want to break it up. So I'm trying really hard to like get back into that. Um, just at least—

**Bridget:** [01:20:33] what did you see? What did you say your current streak is at this moment?

**Matty:** I think it's 9. I think today was the 9th day. Uh, last Monday was my—

**Trevor:** so I'm assuming that means you're—

**Matty:** I did it. I, I wrote today already. Yes.

**Bridget:** Okay, so we don't have to like stop in time for you to—

**Joe:** yeah. Well, Stratton, what are you looking forward to in, uh, in the coming, in the coming year?

**Matty:** Apparently I'm looking forward to getting another dog. Seems like it. Uh, I'd say that's, uh, you know, even money on that. Um, I don't want to jinx things, but I am looking forward to spending some more time with other humans, you know. Um, I very much don't want to jinx it. I'm looking forward to going to Valencia in May for KUKAN. Uh, program committee, you can help make that happen even more. Actually, the bigger problem is The bigger problem is everybody who's fucking up COVID can make that fixed rather than the don't want to put that on the KubeCon program committee. I am also really—

**Bridget:** [01:21:34] what you're saying, Stratton, is you need people to get on the ball with their vaccinations and boosters so that you can go give a conference talk in Spain. This sounds excellent to me.

**Matty:** It's more like so I could go sit on the beach in Spain, but, uh, and get that work.

**Joe:** But, you know, get them shots, people.

**Jessica:** As compensation, shots, shots, shots.

**Matty:** I am, I am also really looking forward to, again, hopefully DevOps Days Chicago coming back in person in May. Our CFP is, is open still till the end of January, so we're getting some pretty good submissions and we're pretty excited about it. Trevor, I think, might probably have some fun extra. He's kind of a you know, doing some fun stuff with us with that event. So again, COVID notwithstanding— I would say that COVID permitting, right? Or COVID, uh, you know, I don't know, I'm just, I'm just kind of—

**Joe:** COVID will end and the creek don't rise.

**Matty:** Yeah, I'm not, I'm not saying I'm looking forward to things—

**Trevor:** [01:22:36] the degrees of fun activities there change whether we're in person or if it has to be online again or if it's hybrid, right? Or if it's in person, it's much more focused on organizing what food is going to be there. If it's going to be digital again, it's going to be back to organizing all the fun live streaming stuff. So it's very, it's very different fun paths, but both fun.

**Matty:** I will, I will tell you that if we are in person, our food plans are pretty banging, you know, I'm pretty sure. So I will say this, I mean, those of you who like— we, we do, we do some pretty good, you know, we're looking at some pretty traditional Chicago stuff and not By the way, I need to go on record. I am also looking forward to next year no longer having to explain to people on Twitter that nobody in Chicago actually enjoys deep dish pizza. We like tavern-style pizza. We eat deep dish when y'all come to visit, and that's about it.

**Trevor:** Um, but tavern style's still wrong.

**Matty:** Get out.

**Jessica:** [01:23:38] Is this a— is this a—

**Joe:** is this a square versus triangle thing?

**Bridget:** Is this—

**Matty:** yes, yes.

**Jessica:** Yes.

**Bridget:** I like square cut pizza.

**Matty:** Yeah, it's terrible.

**Trevor:** I like picking up a whole slice and folding it in half.

**Matty:** Well, you're not from here anyway, right? Aren't you from the East Coast anyway?

**Trevor:** I am from the East Coast.

**Joe:** That's crazy.

**Matty:** Yeah, so yeah, yeah, that's why you're wrong. That's why you're wrong. That's why you're wrong. This is the third rail. So anyway, but yeah, I don't know.

**Joe:** You touched Chicago style pizza.

**Bridget:** Wait, what's the St. Louis correct pizza? What's the canonical pizza?

**Matty:** Oh, what's that place?

**Jessica:** St. Louis-style emos. Um, is, is super thin. It has Provel cheese, which is its own thing. Um, and it's cut in little squares, like, so you can like pile them up or fold them in half, and you can eat like a— you can get like a 16 or 18-inch one, and like 2 people can eat it because it's so thin.

**Matty:** I bought some toasted ravioli, frozen toasted ravioli, at the Jewel today. Speaking of St.

**Joe:** Louis cuisine, I will also say I am also tentatively looking forward to, to possibly returning to Europe. We'll see, COVID permitting, because I've also been told, I've also been told to. So Valencia is tentatively on our calendar as well. So we might do a, we might do a little bit of, a little bit of Europe stuff in the week leading up to to Valencia. So we will, we will very, we will very much see. But the thing I'm, I'm most looking forward to, only because I was just talking to my brother and my dad about this when we're at home, is next summer is our, is our, our rescheduled Canadian fishing trip. And, and that is, and that is, that is a lot of, that is a lot of fun. I'm not, I'm not a— I'm only a fisherman every other year when we, when we go up to Canada. To, uh, to fish. Head on over to arresteddevops.com/2021inreview for this episode's show notes.

**Jessica:** [01:25:38] Cat pictures.

**Joe:** Produced show notes and, and cat pictures.

**Matty:** Yes.

**Joe:** And visit Arrested DevOps and, and, and, well, animal pet, pet photos, pet photos, pet photos. Visit arresteddevops.com/itunes and leave us a review in the iTunes Store. Do they still call it the iTunes Store.

**Matty:** No, but I refuse to— I refuse to change that redirect because it's Apple Music or it's something or other, but I still want it. I still call it iTunes.

**Joe:** So go there if you want to help other people find the podcast, whatever Apple is calling it. Go there and look us up. You'll find us. We're also apparently on Spotify and iHeartRadio. If you were listening— if you were listening earlier episode when we talked about statistics and didn't tune out when we started talking about Whatever TV shows we weren't watching, you'll, you'll find it there if you're into those, into those systems too. So that being said, I'm Joe @JoeLehe.

**Bridget:** I'm Bridget @BridgetKrumhout.

**Trevor:** [01:26:38] I'm Trevor @TrevorGS.

**Jessica:** I'm Jessica @Jessitron.

**Matty:** And I'm Matt @MattStratton.

**Joe:** We're Arrested DevOps.

**Trevor:** And remember, there's DevOps always in the banana pants, in the banana stands.
