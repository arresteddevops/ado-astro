**Kat:** [00:00:00] Sometimes Twitter is not good.

**Matty:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matt Stratton. We're going to talk about the phenomenon that is tech Twitter. Today. But before we get into a deep dive into the art of shitposting, a word from our sponsors. This episode is sponsored by CircleCI. Designed for modern software teams, CircleCI's continuous integration and delivery platform helps developers push code with confidence. Trusted by thousands of companies from 4-person startups to Fortune 500 businesses, CircleCI helps teams take their software from idea to delivery quickly, safely, and at scale. Visit arresteddevops.com/circleci to learn why high-performing DevOps teams use CircleCI to automate and accelerate their CI/CD pipelines. This episode is brought to you by Container Solutions, a consultancy that specializes in cloud-native transformation. To help you navigate the ever-changing cloud-native landscape, Container Solutions is running a series of free online events with well-known industry experts such as Matthew Skelton and Victoria Morgan-Smith. Smith, as part of a newly launched publication called WTF is Cloud Native? To find out more and sign up, visit arresteddevops.com/containersolutions.

[00:01:40] The worst thing about the Arrested DevOps podcast is when it ends. You're left wondering what to do next. What are you going to listen to on your commute home? How do you occupy your time when walking the dog? What are you going to listen to during the quarterly all-hands meeting? But fear not, dear listener. There is a solution. You need to subscribe to Software Defined Talk right now. It's a weekly podcast that recaps all the news in cloud computing, DevOps, and enterprise software. The hosts, Cote, Matt Ray, and Brandon Wichard, will keep you up to date on all things cloud while offering tips on how to optimize your Costco haul and how to PowerPoint. It's a fun, free-flowing conversation that will keep you entertained and informed. What are you waiting for? Subscribe to the podcast today by visiting softwaredefinedtalk.com or by searching for Software Defined Talk in your favorite podcast app. As I said before, we're going to talk a little bit about tech Twitter and the conversations that happen there and maybe how to do it better, or at least do it less bad. We've got a pretty decent-sized panel tonight. Or today or this morning. I don't know what time it is where you're listening to the show, but who do I have joining me today?

**Sasha:** [00:02:59] Hi, so I'm Sasha Rosenbaum, and last time I was on this podcast, I forgot to say my last name and my job, which works out okay because I have a new job now. So as of last week, I work at Red Hat on a team called Mob, which I really like. So doing that mob life at Red Hat.

**Aaron:** And I'm Aaron Aldrich. I have likewise been recruited into the mob at Red Hat. But I think last time I was here, we were talking about desert island DevOps, which feels like a lifetime ago. Welcome to 2021.

**Matty:** Did you say dessert island DevOps? Because—

**Aaron:** Oh, I wish it was dessert island DevOps.

**Matty:** A dessert island sounds way better than a desert island.

**Aaron:** Yeah, I think I said I don't know, either one. I'll take either one at this point.

**Jeremy:** I'm Jeremy Meese. I'm the head of DevRel at CircleCI. I don't work at Red Hat, nor am I a member of a mob, but glad to be here and talk about my favorite thing to observe from a distance, shipposting.

**Quintessence:** [00:04:04] And I'm Quintessence Anx. I'm a developer advocate for PagerDuty. I like puns and a lot of them. And I also have a mantis shrimp because I want you to Google what that means.

**Kat:** Ooh, cool. My name is Kat Cosgrove and I'm a developer advocate at JFrog. Presumably I'm here because I thought I was gonna rocket to fame by shitposting on tech Twitter, but instead I did it by actually being helpful, which is a move I still regret to this day.

**Matty:** How disappointing.

**Kat:** Very.

**Matty:** So for some background, sources differ on where this idea originally kind of came from, but Kurt Vonnegut famously had a, I believe, rejected thesis from the University of Chicago where he kind of went into this idea that there are basically 6 story types, and he kind of graphed them a little bit or talked about them a little bit mathematically. Christopher Booker has a book called The 7 Basic Plots, and the idea behind all of this is within all of the multitude of stories and books and movies and TV shows and fables and epics and everything, it really boils down to 6 stories. I wondered the other day, are there only 6 basic plots on tech Twitter? Because it feels like there's really only— we keep rehashing the same stuff. And so that was kind of the genesis of this conversation. And in the show notes, I'll link to my initial tweet around that. And Sasha, Jeremy, Quinn, and Aaron all kind of gave their list of what they thought the 6 plots were. I'm gonna say go take a look at them, but maybe let's talk through. And Kat just sort of replied snarkily to everybody's instead of doing her own, which is also an effective use of Twitter.

**Jeremy:** [00:05:57] Which illustrated the whole point as well.

**Matty:** But if we get into that, and I don't want to go and rehash those tweets because they're already on Twitter, but maybe let's start by thinking about what are these common tropes or posts or things that we feel like are retrod again and again and again in the tech community on Twitter?

**Kat:** I think a big one has to be white dude gatekeeping. It's usually a white dude from like a startup, or he's a startup CEO, or he's a VC or something, and he's always got some really terrible opinion about women in tech or bootcamp students or something like that. It's always a white dude, though. It's always a CEO of a startup or a VC, and it's always gatekeeping. Those 3 things keep happening in one tweet over and over and over again. And we get mad about it, and tech Twitter explodes, and everybody's quote tweet dunking on this guy for 48 hours, and then it disappears and we forget about it. And the same thing happens again like 4 months later.

**Jeremy:** [00:07:12] We never learn.

**Matty:** Well, that's sort of like they say, you know, you never— there's a main character of Twitter every day. Yeah, you do not want to be the main character of Twitter.

**Sasha:** I kind of enjoyed my last time being a main sort of character. I don't know if Kat enjoyed hers, but, um, I didn't. I, I— it's actually— so it's actually like I, I had to look up my own tweet because I completely forgot, uh, what I posted on the subject, of course. Um, but yes, the, the white dude versus diversity, I think, is, is definitely one of them. I, I realized that I just tweeted something on the subject like a, like an hour ago. So like, yay for me. But, um, so what do we want to do with the topics though? Do we want to kind of talk through the topics, or do we want to just like mention the plot lines, or—

**Matty:** Well, I think, I think maybe we could kind of talk about, and whether you want to source the work you've already done on Twitter for that, or we can kind of riff on it. But coming to mind, like, so, you know, Kat kind of said there's the you know, kind of privileged, you know, white CEO, white dude CEO that like speaks out of his mouth.

**Aaron:** [00:08:22] It's not how we write things at Google.

**Matty:** Yeah, I mean, right.

**Jeremy:** Yeah, at Google, any of those FAANG companies.

**Matty:** I think one of the common tropes of Twitter is anecdotes equal data, or literally, right?

**Sasha:** You know, it's just common trope of life, right? Like, you know, and anecdotal is a thing. That I use, by the way.

**Kat:** I heard that.

**Aaron:** I love it.

**Sasha:** Oh yeah. Well, so, so the funny thing is like, that's what you do. Like when you're in sales or DevRel, what do you do? You tell stories about one particular person or one particular customer or whatever, right? You don't actually tell people like 80% are successful with— I'm trying not to name a product. You say Susan deployed this thing and then she was very successful because that's kind of how our brain works. Right?

**Matty:** Well, that's making it personal. I think like the anecdotal thing that happens in this case is like somebody makes a statement and it's, well, that didn't happen to me, and that's therefore considered a refutation of that, right? You know, like that must not exist because my personal journey did, right?

**Aaron:** [00:09:33] Yeah, my personal journey didn't have that particular challenge and therefore there are no challenges.

**Jeremy:** I mean, it becomes empirical evidence and then any— anything to the contrary becomes this big sub- section of tweets of people going back and forth and arguing against each other when they're all arguing against something that was somebody's own personal experience.

**Quintessence:** Yeah, true. And if it's just the trope of it didn't happen to me, that could go right back to the gatekeeping.

**Aaron:** You're arguing past each other.

**Quintessence:** It didn't happen to me.

**Aaron:** Yeah, I'm gonna say arguing past each other is a big Twitter trope.

**Jeremy:** Yeah, yeah. And then when you call them out on it, like, it becomes this borderline— well, I mean, it is. It becomes this, you know, complaining about what accountability is and complaining about, oh, I've been canceled now because I, you know, I'm some white— and it's always some white guy that, like you said, Kat, that's complaining about some injustice to themselves. That is, again, back to that empirical evidence, which is it gets redundant and then it rinses and repeats, you know, 10 days later.

**Matty:** [00:10:37] Well, and I don't think it always has to be connected to like this personal injustice or whatever, because I think that concept of anecdote or whatever can rear its head when you're talking about something like how you deployed Kubernetes, right? Oh, well, Kubernetes is shit because we did this in my organization and it all fell over, right? That's anecdote. I mean, Kubernetes may be, but it's not just based on the, you know, your particular, particular thing. I think there's also like some other ones that are, cause some of those a little bit like just general gatekeeping and awfulness is just kind of part of all of Twitter. But, or at least maybe it seems to be. I know it seems like every month or so we need to argue about Friday deploys.

**Kat:** Oh, yeah.

**Sasha:** Definitely.

**Kat:** Yeah, that's a thing that nobody ever shuts up about. I'm convinced that joke is just never going to die.

**Sasha:** It can't die, right? Speaking of Friday deploys, it's also, should developers be on call? Very related.

**Jeremy:** [00:11:39] That's, yep. That's Yep, that's a good one.

**Aaron:** I think when these 2 arguments die, I think our jobs will finally be completed in the DevOps transformation. Oh, everyone's done it. Everyone's doing it now. We can finally retire.

**Sasha:** That is when we define DevOps. When we define DevOps, this is when I stop.

**Aaron:** Only then will DevOps be dead, not now when we've come up with a new buzzword.

**Jeremy:** And then at that point, if it wasn't put on Twitter, will it even have been done?

**Aaron:** Oh, I don't know.

**Kat:** Ooh.

**Aaron:** Well, I think—

**Quintessence:** That's a very tree falling in the forest there.

**Matty:** I want to kind of dissect a little bit what Sasha said.

**Jeremy:** I wasn't going for that, but sure.

**Matty:** When we're comparing, like, the Friday deploys story versus our developers on call, one of the common stories, and it's a common topic, but we don't go back to— like, it just sort of gets thrown out there and it doesn't get debated as much. But I feel like the Friday deploys one is a really good example of something that about once a month, somebody feels the need to feel like they're saying something new, right? Like, like, also, that's, that's a big part, which is like, has it ever occurred to anybody that you shouldn't deploy on Fridays? I should tell Twitter about that because nobody's ever thought about why this is a bad idea or has an opinion about it. So, oh my God, I can't believe people care about that.

**Aaron:** [00:12:53] In fairness, I feel like that one comes by as the, like, periodic reminder tweet. Like when everyone's a little bit stressed, like periodic reminder, don't deploy on Fridays and stress out your team. And then inevitably Charity Majors gets tagged and we go back and forth about nines and whether or not you shouldn't deploy on Fridays or you should not have to worry about deploying on Fridays. Or maybe there's an intermediary step where you don't deploy on Fridays even though you're working towards not being—

**Quintessence:** it's the journey.

**Aaron:** It's just literally the same argument every single time with the same people tagged. At this point, I'm waiting for someone to quote tweet threads underneath the comments.

**Sasha:** I, I, so one more that's very, very, uh, tech Twitter is frontend versus backend. And the funny part about that is, is that it also ends up in gatekeeping topics, even though it technically shouldn't be, right? It should be like a technical sort of discussion, but it always ends up being like women do this and men do that and whatever.

**Aaron:** Gendered tech Twitter. That's, that's what we really need.

**Quintessence:** Twitter also functions as one large livestream of status page. Like services up, services down, hug ups.

**Aaron:** [00:14:00] We already had our Slack is down of the year so far. 4 days in, we already got that one out of the way.

**Kat:** Regrettably, we have not had a Cloudflare is down now when we really need it.

**Jeremy:** It's only, it is only a matter of time.

**Quintessence:** I mean, we do have Parler is down. That's a service, kind of.

**Kat:** They went together. They went down. Cloudflare went down 2 Julys in a row. For like very similar reasons. So I, I'm convinced it's like an annual event. We should have a holiday. We can plan our calendars around this. It is now. Just go ahead.

**Matty:** So my question with, with the repeating tropes though is actually a lot to do with repeating jokes because there is kind of this idea that you need to be clever on Twitter, right? Like you not just share information, but you, you know, a lot of people want to be funny and regrettably More people want to be funny than are actually funny. Now, that being said, the, uh, yeah, I, I feel, I, I feel like there's, there's, uh, if you think you've come up with a clever joke, you should do— I know, granted, Twitter search is pretty shitty, but you know, you can go to their advanced search, like, look for it. For example, your clever joke on New Year's Eve about your new resolution for the year is 1440 by 800 has been made, first of all, already 1,000 times that day and 1,000 times exactly a year before and 1,000 times the year before that. You're not clever. It's not new. And it doesn't mean that you have to be the first person to have ever come up with something. So just so we're clear, I'm not saying like every single thing, you know, you can have parallel evolution of content, but like Some stuff, it's like, you know, you know, that's, that's, that's, that's not new.

**Jeremy:** [00:15:47] But you know, you've seen it 15 other times.

**Sasha:** You know what, that's really big into people's imposter syndrome there.

**Matty:** Yeah, um, pretty much everybody that made that joke, I'm not worried about their imposter syndrome.

**Aaron:** I think you're on to something though. It's the, it's the working hard or hardly working of Twitter, right? Like, it's the same office guy that's got the same— he's got a handful of jokes that every person in an office has already heard 100 times. And just walks around the water cooler repeating them.

**Sasha:** But, but I will say something, Matt, that you usually say to me, which is not everyone goes to Twitter like 15,000 times a day, right? And so like every joke is going to be new to someone. And every now and again, I repost something that's completely not mine, right? And it just blows up because that is the first time that 1,000 people has seen it or whatever, right? And I'm like, oh, okay, I didn't realize this was funny.

**Matty:** Well, let me put it this way. It probably will depend on who made the joke and whether or not I know they know better and it wasn't clever. That, you know what it makes me think of? And this is not to dig into comedy theory and everything, but one of the big things when I was studying improv in the quote rules of improv, and there's a whole other story, but like that Joe Forsberg used to talk about is one of them was don't try to be funny. And the thing is like, if you're doing an improv, It's incredibly clear when you're cracking a joke and what you get from the audience is a, ah, you get the groan, right? But when you're funny in the moment, that's the real laugh.

**Kat:** [00:17:19] So yeah, I super agree with that. My funny tweets are just like intrusive thoughts that I just like vomit out onto my keyboard. It works.

**Jeremy:** I will say on Twitter, which is also why I get new keyboards all the time.

**Sasha:** I, some, sometimes on Twitter, I actually intentionally try to be funny or at least that kind of funny. Like, I know people will relate to this kind of thing, but I will say 100%, I don't joke intentionally in my talks. Every now and again, I will do an intentional joke, and I'm always paranoid that it will completely flop, and then it's obvious that it flopped, and it's like, oh God. Usually it's more of these discovery moments of like you being authentic, and then people being like, oh my God, yes.

**Matty:** It's definitely easier to make that comedic risk on Twitter because if it bombs, it just moves along in the stream, right? Versus on stage. But I will tell you, I had a friend, not a tech Twitter friend, actually a friend from high school whose Twitter he built to do comedy, and he probably spent— I think he tweeted about once a week, and he workshopped his tweets all week long, and they were very funny, but it was like, that's a lot of work. And the reason that I don't endorse spending a lot of time like coming up with the exact perfect funny tweet is that the thing that you do all that work on will never land, and the dumbass little random thing you fired off as a thought was the— is where you're gonna like get all the engagement. So like there's nothing more frustrating— actually, many things are more frustrating than this, but when, when you sit there and you're like You know, I'll tweet a thing and you know my friends know because then I'll text them. I'll be like, "Come on, that was solid." You know what? Guilty.

**Aaron:** [00:19:05] Guilty. Come on.

**Kat:** Yeah, I've done that.

**Sasha:** Yeah, I've done that.

**Jeremy:** And then you go to your friends and are like, "Why didn't you like that?" What? Go to your friends and say, "Why didn't you like that?" Or did nobody see it?

**Aaron:** Or please click the like.

**Jeremy:** Then you have the overheard tweets and everything just.

**Sasha:** So 100 percent. You don't see that though.

**Quintessence:** Like so Twitter has this thing for sure where like if no one likes your tweet.

**Sasha:** In the first 30 seconds, it's not going to take off, even if it's great. It's just like it gets downgraded in the algorithm. The other thing that pisses me off is that YouTube, Spotify, Vimeo, anything that has video or music on it gets discounted 100%. And so I can never share music because it will get literally no views.

**Aaron:** Whenever I look at that, I'm like, They only expand like big thing, 20% of YouTube links too. It's terrible.

**Quintessence:** Doesn't it do it for TikTok? They have no—

**Sasha:** it does not. TikTok does not get downgraded, and native Twitter video actually gets more likes than, you know, anything else, which is why I post because they—

**Aaron:** [00:20:11] what you're saying, actually treated as a first-class citizen.

**Jeremy:** So what you're saying, Sasha, is that you need to have like a, a separate account that is hooked up to like IFTTT so that every time you tweet it immediately likes it so that you get that within 30 seconds.

**Matty:** I think I need more than that.

**Sasha:** It may not work, I don't know. Like maybe like they have something against bots, no idea.

**Jeremy:** We should workshop that.

**Quintessence:** I mean, I heard some people lost like 10,000 followers, so they might have stuff against bots, I don't know.

**Jeremy:** That's right.

**Aaron:** Now they do.

**Quintessence:** Now they do.

**Sasha:** So I will say, I am— There's room for more bots. I am on Twitter for about 11 years, if I trust my account.

**Matty:** I thought you were going to say 11 hours a day, which would not have surprised me.

**Sasha:** Which is about right. Yeah. No, so, but what I was going to say is like, I made the account back in the day because a customer wanted an app and I wanted to test the Twitter API. That's how it happened. And then I was never there except for when I went to DevOps Days and then I tweet about the DevOps Days I went to. And then like, whatever, 2 years ago I got a semi-dev rel job and then I— now I live on Twitter. It's an interesting pivot. So it, it, it's a very interesting— it's a community though. Like, you know, it— because I used to get like secondhand things from Matt about Twitter drama, like, you know, and now I get it firsthand and it's like, oh.

**Jeremy:** [00:21:42] Part of the in-crowd now.

**Matty:** So, and this is a place I'm going to kind of dig into a little bit because we've made some references to shitposting, and I'm pretty sure that the way that the term shitposting is specifically within tech Twitter has evolved is different than what shitposting originally meant on forums. Um, so like, what— so let's just kind of start with that. Like, if we're talking about Twitter shitposting, like, how would you define that? And, and what does that mean?

**Quintessence:** Hot takes.

**Sasha:** I still wish there was a better word for it. I don't like shitposting because, because like I learned about you, Matt, that you also don't like poop jokes. And like, just to me, I wish there was a better word for it.

**Kat:** Yeah, I agree with Q. It's, it's shitposting is, um, it's hot takes or like, uh, non-serious statements about tech or whatever that take something to, to an extreme, uh, like to such an extreme that it becomes a joke, uh, but it can't be serious. A shitpost cannot be serious. It cannot be a real thing. It has to be intended to either make somebody laugh or make them go, oh my God, that's like so stupid, why would you say that, or something. It cannot be a true factual statement that is intended to be taken seriously.

**Jeremy:** [00:23:08] It should be nearly void of valuable content.

**Sasha:** Everybody's jumping in.

**Aaron:** I think it should be— the key aspect is it should be nearly void of valuable content.

**Quintessence:** Yeah.

**Sasha:** Sometimes I try to say something serious and people take it as shitposting. I just want to—

**Quintessence:** Okay, but Sasha, you have a brand now because you spent all these years of DevRel building that Twitter brand.

**Aaron:** There you go.

**Jeremy:** That's right. Well, and I think there's an aspect too of shitposting that like is almost like a purposeful troll. And the— you purposely drop a statement and then you walk away and let the— you know, it's— you're starting something, you just walk away and let it explode. Like, I feel like there's some people out there that that's That's kind of their brand of shitposting. Nobody in this group, but dropping that and then just walking away and letting the fires burn and then coming back and, you know, maybe that comes back to the white guy accountability piece of like, oh, I didn't mean that. But I see that repeatedly.

**Kat:** [00:24:18] Sometimes Twitter is not good.

**Matty:** That's it. There you go.

**Jeremy:** That's your—

**Matty:** that's the takeaway for the day.

**Aaron:** Sometimes Twitter is not good.

**Sasha:** That was amazing.

**Matty:** Okay, and it was, it was perfect for Joe's editing because there was a good pause right before and right after, so he could just put that up, just clip it.

**Kat:** You're welcome.

**Jeremy:** I feel like that was a shit post for the—

**Sasha:** it was.

**Matty:** Yeah, so that's kind of—

**Sasha:** on a serious note though, like, sometimes Twitter is perfect. Like, sometimes it's absolutely great. You know, um, like, I— a lot of people complain about Twitter. I think, like I said, Twitter is a community, right? And I, I find support and help and hugs and cat videos and whatever. And yes, some days it's awful, but like most days it's good, and that's why I'm there.

**Aaron:** Full disclosure, I did just tweet, sometimes Twitter is not good, just now.

**Kat:** You're welcome. If you get clout off of that, uh, I, I'm gonna take a a cut of your new followers because I'm trying to beat my boss.

**Aaron:** [00:25:23] I need a handful of new followers that I don't drop below my recent landmark of 1,700, which is— I'm holding on to them for dear life, but I just lost like 5.

**Matty:** There's another trope on Twitter, which is the hot take that's not a hot take. Like, you'll see a lot of those people be like, cold take, like, hot take, blah, blah, blah, blah, blah. And the replies are all, that take is not as hot as you think it is. Like when you tweet a hot take that everybody agrees with, and hot takes are supposed to be contrary to conventional wisdom, right? So when you tweet, if your hot take is conventional wisdom, it is not a hot take.

**Aaron:** Well, that's the paradox of the unpopular opinion Reddit thread, right? Like it's all unpopular opinions, but only the most relatable ones get to the top.

**Kat:** Yeah, yeah, yeah.

**Quintessence:** What about the overused hot takes? Like when people, going back to what we already discussed about Deploy Fridays, when it's so overused that you people may have strong feels, but kind of because they've had this discussion before. Like, is it still a hot take even if, even if they're riffing off of it?

**Kat:** [00:26:27] I don't think it's a hot take anymore. I think it's lukewarm. It's a room temp take, you know? That's, that's where I'm at on that. Room temp.

**Quintessence:** Makes sense.

**Kat:** Because people are still going to argue about it, you know? Like, there's always going to be somebody— like, somebody who follows me who has seen me have the cast iron argument a thousand times is still gonna show up and tell me that, uh, I killed their grandma personally by saying that you should wash cast iron with soap, right? Every fucking time somebody is gonna do that.

**Sasha:** But by the way, I wash cast iron with soap. I just want you to know that.

**Kat:** Good, good, good.

**Matty:** You should have said it last night.

**Quintessence:** I avoided it by just not buying cast iron.

**Kat:** Oh well, you know, that's fine too. It's not actually like—

**Jeremy:** it's fine if you don't want to cook Yeah.

**Kat:** I mean, if you don't want like a really good hard sear on your steak, then like, you know, whatever. But, uh, people see me have that argument all the time. They know what I'm going to say. They still get into the argument with me. Uh, it's, it's not a hot take for me when I say you should wash cast iron with soap, because I've had that argument like 3 million times. It's lukewarm, but people are still going to fight with me every time, which is what means it's not cold. Because people still disagree.

**Sasha:** [00:27:43] It's hot button issue, right? I don't know if it's a— like, if it's a different thing than a hot take, but it's a hot button for it, and people feel strongly about it for whatever reason.

**Quintessence:** I don't know.

**Sasha:** But so I actually— since we're talking about shitposting and stuff, I actually want to hear y'all's, um, takes on do you argue with people? Because I figured out just when I came on Twitter, um, and like started getting some followers that if I try to argue with people, then I get very mad and very like obsessed with it and upset about it. And then I think about it for like a week and that's terrible. And why would I need that in my life? And then if someone says the same terrible thing, but I don't argue with them, then I can forget about it in a couple hours. And that works a lot better. So I don't know if that's what you all do or if that's different for you.

**Quintessence:** Hashtag, it depends, right? It depends on the visibility and what they're saying and if it's harmful, if it's not. I usually only engage in anything that resembles an argument. If someone said something like awful to someone, if it's just hot takes or whatever, or my bad opinion on stories or 10x engineers or whatever, I, I'm just like, that's cute, I guess.

**Kat:** [00:28:57] Yeah. If it's something that's like, yeah, if it's something that's like actively harmful, then I, I have a shitload of Twitter followers now, so I have like a responsibility or whatever and a platform. So, uh, you know, like Matt and Sasha can relate to that. Sasha has more than me. I think Matt does still.

**Sasha:** I'm still, I'm still gonna see if you're gonna beat me in the next, like, um, before CubeCon, because I think that's gonna happen.

**Matty:** It doesn't matter if you've got a lot of followers if they all mute you. Ask me how I know.

**Aaron:** If you're not careful, you're gonna become part of the discourse.

**Kat:** The discourse.

**Quintessence:** Hating Twitter.

**Kat:** If it's something that's actually harmful, I will get involved in that argument. I will like, yeah, I will use my followers to, or, or well, I will use the fact that I have an audience of almost 13,000 people to broadcast that like X thing is not okay. It is, it is harmful. And it's, it's, an easy way to tell 13,000 people that I'm not going to tolerate whatever shit that is. But if it's like a crappy hot take about like 10x engineers, I'm not going to get involved with that. Like, that's been done so many times.

**Sasha:** [00:30:06] I just want to— one thing, I just wanted to clarify that I wasn't talking about like arguing with a hot take, like you shouldn't deploy on Fridays, because that to me is not a loaded— like, it's not a triggering thing. But arguing with someone who is like being an ass to you over something. Like, yeah, all these people who pretend like they're engaging in a conversation with you where really they're just trying to draw you out and like piss you off, which happens too much. Um, and yeah, so like, I— you all know that I will, um, rant about it offline, but I will not engage with these people because I don't want to get engaged with these people.

**Quintessence:** Well, that— and it gives them the opportunity.

**Jeremy:** And that's where I back Yeah, right, where you can just bury it by not replying. Like, I'll look at— if I, if I get a reply to something, I always tend to look at, um, like click on their profile, see who they are, look at a few things to see that they've maybe tweeted, and get a feel for— very quick, I'm not going to spend like hours delving into their profile, but just a quick take on are they for real? Are they, you know, real? Are they actually, you know, in good faith coming back with something? Uh, whether or not I'm going to say— right, and like whether or not I'm gonna come back. Because if somebody comes with a good, good faith argument back, I'll, I'll engage back with that. But too often you get somebody just drops that, their own, what they feel is a hot take or some snarky reply, and I just Just ignore it.

**Matty:** [00:31:43] The biggest difference is it's in public versus in private, right? So we have to think about— and I'll just take this step away, and Sasha, I know you were talking about when someone was making a non-good faith argument, but just sort of say in general, when you're saying, okay, do I reply to this? Do I engage? Sometimes you're engaging for the benefit of the person you're replying to, and sometimes you would be engaging for everybody else that's standing around you watching you have this argument. If— because that's the metaphor, right? It's as if we were at a conference or somewhere and Aaron and I started arguing, but y'all were standing around and listening, right? So to a little bit— so that metaphor is working for me so far. A little bit to Jeremy's point of like, how many people are listening, right? First of all, if I don't think a lot of people are listening, then all I'm going to actually do is raise my voice. And by being louder, now other people around are going to go, oh, wait a minute, Fight, fight, fight. I'm going to come pay attention. Or if a lot of people were listening, then it maybe becomes important. Or again, is this someone who is a— it is a good faith question or whatever. And that's rarely going to be anything connected to some of the topics we talked about, but I've definitely gotten into arguments or had replies that are about things like putting engineers on call or how to do retrospectives or things like that, where it might be like, you know what, if I correct this or have a discussion, not only will the people standing around get something out of it, but so might you. But if nobody's really— if there's, quote, nobody really listening, and all it's going to do is make me attract more attention to it and also probably make me more angry, then it's time to take that to, like, you know, your group text with your buddies and get it out of your system there, maybe, right?

**Aaron:** [00:33:31] Yeah, I'd say it's the 3 levels of argument, right? As a white dude in tech, there's some obligation to publicly call out other white dudes in tech with bad takes, right? There is a point to say, like, this is not acceptable in this space. And not only is it not acceptable because other people say it is, but, like, also, I agree and I look like you. The second is, like, good faith arguments. I will have those just for the sake of having interesting discussion and maybe have them loudly so that other people can gain something out of it if we go back and forth, right? Like, if there's a good faith argument to be had, and we're hearing each other, it's worth continuing. But the second it comes back with a bad take or someone's clearly not listening or just trying to press buttons, then forget it. It's not worth having. And I've been sucked in. I think we all have been sucked into the, like, someone is wrong on the internet combination. But yeah, for the most part, you have a better life if you can drop out of that.

**Sasha:** Oh, is that number 3?

**Aaron:** That was 3. Well, that was 3. So there's the call out, the good faith, and then there's bad faith where you can just walk away.

**Sasha:** I got you. I will say, so to the public responsibility and how many followers you have, Cher, I think her handle is cher.dev or something like that. She had at that point about 14,000 followers. And she posted at one point, like wrote a nice blog post about what does this mean. And she had this like stadium, you know, full of people. It's like, This is how many people— this is your megaphone. This is how many people are listening to you. You have a responsibility. And at that point, I never thought I would have almost 14,000 followers, but I do now. And I'm like, oh, I guess, yes, you're all very on point with whatever we say kind of has an impact. And it's not to the— we're not famous. We're not even tech famous. But at the same time, like some folks are listening, some folks are taking cues from what we do.

**Kat:** [00:35:29] Yeah. There was something I said when I had 4,000 Twitter followers that didn't mean anything. It didn't, it didn't have any weight. It was in a thread explaining like a change to an upcoming change to Kubernetes that had created a lot of drama. People were, people were panicking. People were scared. People didn't understand. Because people don't understand Kubernetes, end users, devs don't touch it, so they don't understand it. So I explained something, and at one point I said, Docker's not dead yet, in parentheses. And when I had 4,000 followers, when I tweeted that, that was just funny. It was just, it was a pithy tweet. It didn't mean anything. It carried no weight at all. But 36 hours later, I had almost 12,000 followers because of that thread. And that pithy tweet about Docker suddenly had weight. People assumed that I worked for Google. People assumed that I was a Kubernetes maintainer. People assumed that I worked for Docker. All kinds of assumptions were made based on the fact that I had 12,000 followers and I said something about Docker. And it was really, really weird to go from, like, I'm effectively nobody on Twitter to having a voice overnight. And having a tweet I made when I was nobody have a shitload of impact because on Twitter you don't have context. There's nothing that says this tweet was made when this person was irrelevant. Or like, this is what made this person relevant. There's no context at all. So you do have to be like super careful.

**Sasha:** [00:37:06] Don't scare me. I'm already paranoid about things taken out of context.

**Jeremy:** I'm sorry.

**Quintessence:** I'm just switching to happy I'm small fry right now.

**Matty:** Well, I think that goes a little bit to like, and I know it's complicated and there's more to it, but as your audience grows, it does, and I hesitate to say that it should, but I think for your own mental health, it should reflect upon how you use the medium and knowing who that audience is. And that's one of those things. That's why people have private Twitter accounts. When they have huge followings and they need to be able to have a place where they can feel like they aren't speaking to Wrigley Field when they're talking about something all the time and be able to have that be in a place to do that. I think it's hard and I can empathize a little bit because I know people who have 8, 10, 100 times as many followers as any of us do and will say, oh, but I should be able to just say whatever I want. Yes, you should, but also for your own personal mental safety, like have another— the same thing, like you can have, you know, like, uh, they'll make it like, you know, Chris Cuomo on CNN speaks to millions and millions of people. When he's talking about just what he wants to talk about as a person individually, he talks to his family, right? He doesn't, he doesn't say that on CNN because there's that many people listening. This is— that's probably a really bad metaphor, but I think it goes to that, which is to say when you Again, it's like Sasha alluded to with Cher's post, it's like you are speaking to a stadium of people and they don't have the context, they don't have all of that. So I know as my audience, which yes, it's a lot, no, it's really not, has grown, it's certainly dialed back how some of the more kind of personal things that I'll do. And I don't think that's self-censorship, I think that's just I wouldn't say that to 10,000 people like I might say it to a smaller group. Um, so it's, it's, it's, it's tricky.

**Sasha:** [00:39:15] I, I will say something that irritates me slightly is when people have in their Twitter bios, opinions are my own, and I'm like, no, they're not. Like, if you have more than zero followers and you're tweeting publicly and people can take screenshots of that and you work for a company, someone can take it out of context. And we all know stories when it happened, right? And like, no matter what you think, whatever you say can be used against you tomorrow, or against other people, right? Which is worse. And Kat, you reminded me of like, I got in trouble once for something that I said on a podcast that went on Reddit and then blew up. And like, I was like, oh, okay.

**Jeremy:** Oops.

**Kat:** Oopsie. Yeah, I don't have, uh, opinions are my own in my Twitter bio anymore because I don't, I don't think it fucking matters. Like, it's not actually a legal disclaimer and nobody gives a shit if you put that in your bio and then say something awful on Twitter. So, well, yeah, it's just, there's other stuff.

**Matty:** [00:40:21] Anybody who is going to not just like— the default position is your opinions are your own unless it is your company's Twitter account. Yeah, you are not speaking for the company. Uh, that being said, that doesn't mean that it's sort of— let me put this way, okay? I'm gonna make another really bad metaphor. It's kind of like on, on a site like Tinder or something where like people will put like, I'm not here for a one-night stand, not here for a hookup. You can swipe left on that or whatever. And I'm like, trust me, the dudes that are looking to harass you like that way on Tinder, they ain't reading what you wrote anyway.

**Kat:** Yeah, they don't, they don't really.

**Aaron:** They just, they just want your profile.

**Jeremy:** Over.

**Aaron:** Not you put your pronouns there and then they move.

**Matty:** Nobody, nobody that wants to go after Quinn for something she tweets and say she's representing her company is gonna then look at her profile and go, oh, she says her comments don't represent PagerDuty, so okay, oh shoot, I was gonna be an asshole, but I guess I won't. Never mind, right? Never mind.

**Jeremy:** Yeah, at some point assholes are gonna asshole.

**Aaron:** [00:41:21] At some point I had opinions are deterministic, but then I ran out of characters in my profile and had to delete it.

**Kat:** Ah, yeah. Somebody did recently ask me if I've gotten in trouble for anything I've tweeted, like if anybody at work has approached me about the content of my Twitter account. Uh, this was after I had gone on like a 48-hour angry tirade about fascists or something. And I didn't— this was a coworker asking me this. And I was like, you know, no, man. Like, first, it's my personal Twitter account. It's not owned by our respect to our employer. Like, they don't, they don't get to have an opinion on what I tweet about politics. That's not, it's not how that works.

**Matty:** I can't say anything hateful. Yeah, so far the, the only good disclaimer of any kind like that a friend of mine had in his, in his work email, no less, at a bank, uh, years ago, that said— and it was written in like very much the feel of like that boilerplate, like long disclaimer that you have And it basically said something to the effect of, by opening or replying to this email, you agree that all of my opinions are correct.

**Kat:** [00:42:29] Oh, I'm putting that in my work email signature.

**Quintessence:** That's awesome.

**Kat:** I'm taking that.

**Quintessence:** Yep. Yep.

**Kat:** Whoever that was.

**Aaron:** I love that because it is the perfect concise way to take all of those, like, this is legally binding because I've typed it on the internet. All of those tropes and copypastas are taken to task in one line.

**Jeremy:** And it's perfect because most people are not even going to read that to the end.

**Matty:** Anyways, your eyes are just going to glaze over it because it looks exactly like the, you know, hold harmless or whatever kind of thing. But then if you look at it, you go, ah, yeah, so good there.

**Kat:** Oh yeah, I'm definitely doing that. I have, uh, my working hours may not be your working hours, please don't feel obligated to reply to this email immediately in my signature. And people, people like that, but it's also not funny. So I found it.

**Quintessence:** Yeah.

**Aaron:** A useless phrase that I tried to use the last time I worked at a global org, and I was like, please do not reply to this. I recognize it's 2 AM your time. Please ignore this email until your working hours. And 5 minutes later, I got a response.

**Matty:** [00:43:30] Yeah, I solved this by never sending anybody email ever.

**Aaron:** It's— well, I mean, Slack messages, email, it's all kind of the same.

**Matty:** They're all bad. Just don't talk.

**Jeremy:** Every—

**Matty:** talking is bad.

**Sasha:** My favorite thing, and you can steal it if you want, but, uh, my out-of-office replies are, uh, valid JSON. And, uh, people love it. Like, that, that was— yeah, always.

**Matty:** I will, I will plus one that Sasha has the best out-of-office replies, uh, and even after years of vacationing, they're still, they're still clever. Uh, let's— maybe let's take a minute or two to be like a little practical. So we kind of have been kind of all over the place, but if we kind of think about, you know, we're obviously all people who enjoy using the Twitter have maybe had some positive career things connected to it. It's been helpful to our careers, whether not necessarily advancing our career maybe, but like for doing our job and stuff. But I also find that people who aren't like professional Twitterers don't necessarily know like all the life hacks of using Twitter, um, to be able to handle things. So like you might be— so if you're a listener that's kind of a more casual Twitter user that I think there are definitely things you can do to make it a little more useful, a little less obnoxious. So maybe we can kind of go around, see if anybody— like, what are your top twit— top twits? Your top tips for using Twitter in tech?

**Jeremy:** [00:44:58] Tips for twits?

**Quintessence:** Twips? Tweets?

**Matty:** What are your tweets? Oh my God, tweets bothers me beyond belief. It was really popular as a way to refer to Twitter users like about 10 years ago.

**Kat:** Oh yeah, tweople.

**Matty:** Yeah, tweeps.

**Sasha:** Yeah, I like Twitterers though.

**Matty:** Twitterers?

**Sasha:** Yeah, Twitterverse. Sorry.

**Matty:** Oh, Twitterverse.

**Kat:** Yeah, yeah.

**Matty:** Anyways, yeah, give our listeners like your top tech Twitter usage tip.

**Aaron:** What are your twa— twerk Twitter twips?

**Quintessence:** Your twops.

**Kat:** Twops. If you, if you are, uh, if you are not a man and you get a filtered DM, as in like a DM from somebody, uh, who you do not follow, and the first message is just, hey, don't respond to that. Do not, do not respond to that ever. Don't respond to it. It's not worth it. Cause like a not insignificant— it's going to be a big set of the time. It's going to be, yeah, it's going to, it's going to be. An inappropriate photograph. So just don't, just don't, don't do that.

**Matty:** [00:46:05] So if you are sending a DM to someone that you aren't— doesn't follow you, that is of the non-male persuasion, maybe don't have your first— even if it's innocuous, don't have your first DM be, hey.

**Kat:** Yeah, no, include the question.

**Aaron:** Follow-up: if you're sending a DM to anyone ever, don't have it just be, hey. Don't have it.

**Sasha:** Also, don't start with, I'm not a creep. That—

**Kat:** oh yeah, I'm not a creep means I am a creep 100% of the time. I'm weird.

**Sasha:** Or they find my email, which is easy to find. Um, and like, I just like, I don't need that in my life, I will say. So this is my recommendation. If you're not a man on Twitter, then maybe don't even have your DMs open.

**Aaron:** [00:47:16] However, if you are a man, you can leave them wide open and no one's going to DM you, just for the record.

**Sasha:** I have seen—

**Kat:** no, I'll DM you, Aaron.

**Sasha:** Spam from 4 men.

**Aaron:** It's just, hey, I'm deleting it immediately.

**Sasha:** Bots offering sex, by the way.

**Matty:** So I have a follow-up question, right? I have a follow-up question to Sasha's, like, if you want to get a hold of me publicly, tag me, that I'm going to ask in a minute. But I do want to, to kind of get through some more, some more tips. I would say one thing that I highly recommend as much as possible, and you have to keep pounding Twitter over the head to do it this way, but keeps resetting your preferences to show tweets in chronological order, I think. I mean, um, and one of the tricks if you want to enforce that, uh, is to use a list. So lists never— our lists are always chronological. So if you have a button— that's another kind of top Twitter tip is you can follow lots of people, but I, I like having a list of like, these are this is my timeline, you know, and you can make it a secret, a private list so people don't know that you have a curated timeline. But that way I can follow thousands of people, but maybe there's about 100 accounts that I want in my face all the time. And I'll still look at my whole timeline, but the other advantage is that list is always going to be chronological. It won't hit the algorithm. So, but the other, the downside is then you have to like remember to manage that list.

**Quintessence:** [00:48:49] So the other thing you kind of have to hack into a little bit with Twitter is if you find that your feed is very monochrome, you might be following a bunch of white dudes. It's not your fault. There's a lot, but if you want to follow not white dudes initially, you have to find their accounts, find the tech leaders that are not, that are, you know, not white or not dudes or both amazingly. And if you, if you kind of do that exclusively, even just for a couple of weeks and you're start top-loading how many people you're following, Twitter's recommendation algorithm will start to find them for you. And it might actually be helpful.

**Sasha:** I also want to follow up on that with, I believe in not just following the big names because it kind of pisses me off that we're all like following the same, you know, 20 people or whatever, right? Or 100 or 1,000. And I used to follow everyone back until it got like really, really crazy and I had to drop it, unfortunately. But I do believe, like, when I have positive engagements with people, like, it doesn't matter if they have 5 followers or 50,000 followers to me. You know, we're not— it's ironic that on one hand, like, there's this thing where, like, the Twitter famous is a thing. And then at the same time, like, it really doesn't matter.

**Quintessence:** [00:50:13] I don't know.

**Sasha:** I had a better phrasing for this, but anyway, I want to say like, if we, if we're asking for Twitter tips, it differs drastically if you have under 1,000 followers versus if you have like more than that. And so Matt, I kind of want to be like, which one are you asking for?

**Matty:** I'm actually not talking about like tips for being more effective on getting your message out on Twitter or whatever, but if I want to consume Twitter, and I want to have a good experience of consuming Twitter and then engaging with people versus like, yeah, that's a whole other— there are thousands of podcasts dedicated to nothing else. I don't mean episodes of podcasts. I mean actual podcasts about like how to post better on social media and stuff. I'm thinking about like, if you want to have a good experience as part of the Twitter community, or get information by using Twitter? Like, what are some good hacks or, you know, tips or things?

**Quintessence:** [00:51:14] I'd say, I'd say Sasha's point still kind of stands though, because as someone who has 1,000 or less or whatever it is, like, I don't have to do any level of grooming or concern for the most part. Please don't want this podcast being my death knell, but like, with regards to unsolicited DMs that are basically minimal and usually sales related, do you want to buy our Kubernetes project? Can you get us into PagerDuty? Whatever. Right? That's usually— and it's pretty benign in my unsolicited DMs, right? I don't have the concerns that like the Sashas and Cats or Ians have on Twitter, is an experience.

**Matty:** Yeah, to be clear, I wasn't saying that that wasn't a valid qualifying question. It led me into the second qualifier, which was like, what are we talking about? Yeah, but then it would be— I would, I would put it, I would put it then also to your average sub-5,000 follower Twitter user, you know, if that helps you decide on the tip you want to share with us.

**Sasha:** [00:52:17] I think Jeremy and Aaron are feeling called out right now.

**Jeremy:** What, what was that? What's that supposed to mean?

**Sasha:** Like, average under 5,000 followers, this is fine. Wow.

**Jeremy:** Yeah, yeah, okay, cool. Um, so I would say like, so Matt's point around like lists I think is, is really good for kind of having a good experience. One piece that I found was, was really helpful, um, is on the mobile app you can actually pin those, those lists so it's easy to, to scroll. It's a little— you can't do it on, on the, uh, on the web version, but you can, you can do it to where you can see, uh, and just, you know, flick side to side to get a little bit better into your timeline. So that's one piece. Second one, um, I think is, for me at least, it's, it's been good to, um, build my own lists themselves, uh, of the people that I really, you know, like Matt said, like that, that has been helpful. And then the other one is definitely DM Aaron with just, hey, like, that's just gonna— that gives me a good experience no matter what.

**Aaron:** [00:53:33] I was gonna say, there's this— lists are actually an interesting point. So I think there's 2 directions with that, that lists become really beneficial if you're actually building a Twitter following and trying to work with that, because like follows become this weird pseudo endorsement if you have enough clout of like, oh, this person says interesting things, and so you should follow them, and that's why they have lots of followers. And so if you're engaging in the Twitter thing and you're becoming part of the Twitter thing, your follows become less of a useful list of people and become more this weird tool to endorse things that you like. And so I think that's when lists become really useful, because on the other hand, I tend to manage it by just only following accounts that I find interesting and eventually removing ones that don't provide me valuable content. I also recognize that probably is why I don't grow followers incredibly fast, right? Because I don't do the whole follow-back thing and continue to boost the algorithm. So like, those are the two sides of that. If you want to like engage and do that, like definitely engage lists and like follow everybody. But if you don't really care, like just curate your follows.

**Matty:** [00:54:41] Well, and I think the list can also help just from the perspective of like, sure, having, having a subset that is like, this is just like friends and personal, you know, because like maybe, yeah, maybe on the weekend I don't want to read tech Twitter. I just want to like see tweets from— and I will get some tech Twitter because I have friends in tech or whatever, but like this is just like my— and there's, there's fun things you can do with like creating a list that's like just full of accounts that are like the really positive, like cute puppy picture accounts. And those are really good lists to have when you're just like, okay, things have been so toxic, I just need to be able to sit and like, right now I just want to look at a— I just want to hear a whole stream of like cute animals, right? You know, so there's some value.

**Sasha:** So I will second that. You stole my thunder, but that's my biggest tip. Like, because every now and again Twitter gets kind of toxic or you're just not in the mood to read it. And then I have explicitly a list for cute animals and then I have a list for animals and funny stuff, right? Because every now and again I don't even want to read the funny stuff.

**Matty:** [00:55:44] Are those lists public lists? Twitter? No, Twitter—

**Sasha:** none of my lists are public.

**Matty:** I was gonna say though, if you make a list of like cute animal accounts, that's an argument for a list to be made public because you can subscribe to other people's lists. But the problem is when you subscribe to someone else's list, they come into your feed. They're not like a list you can pick 2, I guess.

**Sasha:** I feel really weird when people look at what's on my lists. And so like, this kind of feels like privacy invasion to me. So I just keep all of them private. I didn't really have any lists when I was following like, you know, 500 people, but when it got to like much more than that Q2L point, right? Like it just the only way to organize.

**Matty:** Lists. Once, once Twitter started sending you a notification, when you get added to a list, it made lists a really fun passive-aggressive thing to be able to do sometimes.

**Kat:** Oh, I'm on some very weird ones.

**Matty:** Yeah, well, really weird. My list of— my actual list of like people, like friends I want to follow, is called Not a Total Douchebag, and it's phenomenal because I follow—

**Kat:** [00:56:48] I'm not on that list.

**Matty:** Oh, you probably are.

**Quintessence:** I—

**Kat:** oh, I can see which list I'm on, dude.

**Matty:** That's shit. Um, okay, well, it's time to start. It really actually is.

**Aaron:** All of mine are the worst.

**Quintessence:** She's not using the Chariot keys, you would hear—

**Jeremy:** I would— if I could, if I could say one final little piece with that, like, utilize your walkaway power. Utilize the ability to just shut the damn Twitter app off and walk away. Uh, and I— and it's— and I, I don't, I don't say that with any bit of humor to it, is that like, there's— there are things that are bigger than this. And Twitter itself becomes those moments where, like, you can get pissed off and it really affects you negatively. So shut the app off, walk away, take a breath, uh, you know, do something to just bring that heart rate down a little bit. You'll benefit for that. I—

**Sasha:** [00:57:55] so, okay, I will also follow up. I keep following people up, but, um, have at least one friend who understands what Twitter is that you can rant to.

**Kat:** Yeah, because this is something I didn't expect. A shocking number of my, like, real-life friends, like people I hang out with, people I have known my entire life that I don't know through the tech industry, they don't fucking know what Twitter is. They don't know how to use it. They do not have accounts. They have zero concept of like Twitter culture. They only consume Twitter via screenshots of tweets that get reposted to Facebook. That's how they consume Twitter. And so yes, it is super important to have an actual friend in real life who understands what Twitter is that you can like unload on. Because most of my friends don't, they have no idea. And that's why the good Lord invented group chats.

**Jeremy:** Yes.

**Quintessence:** And just as like one more thing for this, when you're in the small fry category, Yo, it can also help with the yo-yo effect that can happen whenever there's a major news cycle and you're seeing major news, dumpster fire, dumpster fire, dumpster fire. Also, can we sell you this product, or would you like this free trial, or did you know that I have this hot take about deploying on Fridays? Back and forth, back and forth, back and forth down your list. That can be really stressful, actually.

**Matty:** [00:59:14] So you can find all of, all of us on On Twitter, if you go to the show notes, which you can find other fun links to the show notes, which are at arrestedevops.com/techtwitter. So if you'd like to engage in the discourse of the Twitterness with any of our guests, that would be great. Tell us how you're managing tech Twitter, what you're finding interesting. That would be awesome. If you go to arrestedevops.com/itunes, you leave us a review in the iTunes Store. We are legally obligated to request a review in the iTunes Store as being a podcast apparently. Also, I don't think it's called the iTunes Store anymore, but I'm not changing the link, arrestdevops.com/itunes. There's probably ways you can leave us reviews other places. You can subscribe to us on Spotify or iHeartRadio or any places that fine and not so fine podcasts can be found. Thanks Sasha, Aaron, Jeremy, Quintessence, and Kat for, joining me today for this fun little chat about all things Twitter, or not all things Twitter, some things Twitter. This has been Arrested DevOps, and remember, there is always DevOps in the banana stand.
