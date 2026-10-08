# Meaningful Control with Jacquie Capur

**Matty:** [00:00:00] It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matty Stratton. say this every time, that I'm very excited about this show, 'cause I always am. I would not have people on this show that I don't wanna talk to, but maybe I'm a little extra excited, about this episode, so I hope everyone is geared up for a great conversation. So let's get this going. Let's introduce our guest. Jacquie, welcome to Arrested DevOps

**Jacquie:** Hi, thank you so much for having me. I am so excited to be here today

**Matty:** Jacquie, would you wanna take just a second and, you know, kinda tell our, our audience in case they, are unfamiliar with you a little bit, about, who you are and what you do?

**Jacquie:** Yeah, of course. So my name's Jacquie. you can find me on socials as DevOpsJacquie. And I've been doing the DevOps or talking about it for, I think, a little over 11 years now. And today I'm working at Nebius as a senior developer advocate, where I'm doing a lot of work with open models, and I get to build a [00:01:00] lot of cool demos, like how to turn your dog into a video game

**Matty:** Yeah, I, I, you just, when you said you've been doing this for 11 years, I now feel very old because we've known each other probably most of that time, and it

**Jacquie:** I know.

**Matty:** Yeah.

**Jacquie:** does the time go?

**Matty:** in, I'll be putting in the show notes, the first, KubeCon post, post-pandemic, don't remember what, one, one of the vendors, they had, like, a caricature station, so there was a, a caricature.

And the joke is it's supposed to be Jacquie and I fighting, 'cause that was when she was at, Hashi and I was at Pulumi, and now we're neither of those places, so I guess we can be better friends. It's a joke. but let's, let's, let's get into it. speaking of tools, like various things like HashiCorp, Pulumi, all these kinds of things.

So as practitioners, as technologists, oh my God, so many tools, and it just is getting worse. I, you know, if you, if you look at the episode we, we did recently with, Marino, talk about just how do you keep up with all of this. And we're not gonna dig into how do you keep up with it, because there's a next level of this.

Because we become [00:02:00] very dependent on these tools. They're, they're the way we do our craft. And tools can be a thing that happen to you but maybe a better way is if we have some way, like, how do we... We're gonna talk about how can developers and practitioners and technologists keep some sort of meaningful control over these tools that we depend on.

So, Jacquie, maybe just to start, like, and then I, I know you have some, some anecdotes and some things, but just, okay, what, what, what does that even mean to have meaningful control a tool?

**Jacquie:** Yeah. I think in this case when we're talking about meaningf- meaningful control, what we really mean is that you are understanding the dependencies that you have and you've created, like what they're tied to, what they need. You're able to verify that it actually meets your needs and that it's doing it consistently, and that you have a realistic way to change course if it's no longer serving those needs.

So y- you know, having that visibility into it and that control over like, [00:03:00] "Okay, how easily can we pivot if we need to, and how clear are we on what it does?"

**Matty:** Yeah, and I think this is, you know, I mean, what comes to mind with a lot of this, of course, is, you know, everybody's all, all the AI stuff. And I, I don't even think it's necessarily exclusive to that. That's probably highly symptomatic, but, but we've been dealing with this for, for a long time, you know? kind of where, what maybe what, what, what made you first realize that this was a thing that we should be thinking about?

**Jacquie:** I mean, I don't know if I wanna... It wasn't really a realization yet about control so much as, like, I think a magic moment. Like, right now, like, I think everyone had a similar feeling when they started playing with LLMs, and they started being able to help us generate some of that, like, toil, basically, getting rid of some of the toil that we don't wanna work with, which is pretty common in DevOps days conference talks.

but, like, that kind of magic moment where you just plug and play, and suddenly it solved a problem. I think the very first one I had was when I was still-- I think I was an intern, actually. We were solving this [00:04:00] problem where we had, like, I, I think it was, like, between two and four hundred VMs in Zen Center, vSphere.

And we had to, like, manually SSH in, run four to six commands, and, it was three of us doing it, and it took us a long time to get through all the hundreds of servers and run all these commands. And, you know, of course, there's some con- inconsistencies, so sometimes it's four commands, sometimes it's seven.

But, that first, like, holy shit, that's a really cool moment I had was with configuration management, actually. I remember discovering it and being like, "Whoa, I can just do this thing one place, and it happens everywhere." And that's kind of where it started being like, okay, like, the more we can lean into it and understand, the more magic we have, the more we can do, basically.

**Matty:** You know, it's funny, I never would've thought this would've been my little moment like that, but now that you mention that, I was like, "I think I know my origin story on automation." And this was long ago. This was in the, the early days of... It might've been SQL Slammer. I don't remember. It was, was some [00:05:00] Windows, vulnerability, and this was before patch management was a thing because we didn't really deal with it, so it wasn't really coming up.

And I was, I was working at an insurance company, and we spent multiple days working three shifts in the data centers because you had to, like, physically get on a KVM and log into every machine and, and, and run this patch. And it was, besides the fact that there were how many thousands of servers that you had to just sit and do that across, like, wanna say the number was, like, 250 Windows NT domains.

So it was a different login for each, and it was... And then, and, and shortly after that is when some of the patch managing tools would come out, and, and remember the first times of doing that, and you're like, "Oh, I can just group these machines together and just say, 'Go do this,' and, and connect." And these types of things to some of the listeners who, you know, again, we, we try not to be the, "Ah, well, in the olden days, you young whippersnappers," and stuff.

But it, it, it, it's reminiscent of, when I, when I started at PagerDuty and I was in a new hire group, and they were telling the [00:06:00] story of PagerDuty about it managing, you know, existing to manage just who was on call. And there were people in my group who were newer to the industry, and they're like, "How is this a hard problem?"

And I was like, "Oh my God, I remember not that long ago where we'd have different dist-" Like, how, like, just every week changing who was getting paged. So anyway, we, we have our moment, right? You know, and it's like... so we have that, you know, like you said, that holy shit, that's cool moment, but that, that, that's just like you said, it's not an aha moment.

It's a thing that happens, but, but then those things become, we become dependent upon them, and then sometimes they become anchors. They become albatrosses around our neck where we're like, "Now we're dealing with this..." It, it's like the tool was great because it was better than nothing, right? Like, the, the competitor of it was Do Nothing Incorporated, but now it's like, well, wait a minute, now how much of our workflow and the way we do it is built around tool's opinion of something?

And maybe it doesn't meet our needs anymore. I don't know. Is that [00:07:00] kinda... how does that journey go, right?

**Jacquie:** Yeah. And like, I mean, today I think we're doing a lot of that honestly. when you, you know, there's all this discovery, there's all these new things coming out whether that's like MCP or all these other practices. I think everyone's kind of having this collective moment of like how do we go from discovery to like a safe dependency?

I don't wanna only say dependency 'cause I'm like, okay, we're, we're obviously already depending on all these new tools. But I don't think it's necessarily like a new problem only. Like I think we've been through this with configuration management. We've been through it with the way that we build pipelines.

There's all kinds of things in that space

**Matty:** It's just the speed, right? Things change so much faster. So, like, we had a little bit more time before, I think, I think about just at the beginning of the year just sort of working with my team about, you know, "Hey, we're gonna build these, this plugin for how we do things, and we're gonna build these skills."

And it just takes a while for people to catch up to that. And in the meantime... And people develop this at different rates too [00:08:00] within an organization. So, you know, we had folks within the team that were like, "Oh, well, we should be having everybody decide which model is the most optimal one for writing this brief or for doing this thing."

And I was like, "We have people that if we can just get them to open up ChatGPT is a start," right? You know, and y- you know, when, when people are developing, you know... 'Cause there's, there's folks who are like, "We're very interested in learning all the latest thing," but then we gotta think about how does that become part of operational work?

And by operational work I don't mean ops versus dev, but just, like, these things become just, like, how many tools do we have that you should not be... I guess that's sort of the thing. It's like, I don't wanna go off on this tangent, but, like, when the way we work becomes defined by the tool versus working the right way and having the tool adapt to it, and if

**Jacquie:** Mm-hmm

**Matty:** way of working is defined by the tool and the tool is changing, not even which tool you're using, but the way the tool itself works is changing two weeks, like, how do[00:09:00]

**Jacquie:** Yes

**Matty:** a rhythm where, where you're not spending all your time... It just all becomes yak shaves, right? Like, you know, it's all like, now I gotta spend all this time figuring out how to tweak my models differently, and the harness is different now, and now I'm using... You know, by the way, why is there no AI tool called Yak? That's probably what's next. I don't know. but, like- I guess it's like you don't... And I think the community part is harder than it used to be

**Jacquie:** I do too

**Matty:** you know, we're a little more disjointed. People are trying to do slightly different things. Everyone's got a strong opinion, and we don't have the time to let things marinate, right? Like, even in the...

Like, we felt like the stuff going on in DevOps in the early days was very fast compared to what else we did, but there was enough time that you could say, like, "Okay, people can put examples together and workflows and blah, blah, blah, and, and we can learn on it and do," and like how do you even, when you're like, okay, how, how do you prep a, not, not everything's about conference.

How do you prep a conference talk when you're like, "This is for a conference I'm talk- I'm giving in three months, and by the time I go give it, [00:10:00] it's all out of date,"

**Jacquie:** Exactly. And it's... I think I saw, I can't remember who it was, but, like, two days ago I saw somebody posting about how, it might have been Allie, how, now, like, being in DevRel right now is interesting because every time something comes out, we're basically expected to be an expert on it in the next 48 hours and already, like, leading the way with demos and things.

And I guess that kind of fits into that discovery space as well. Like, I think right now we're really just accelerating that pipeline between, okay, we discover something and it's really, really cool, and then we try it out and we break it, and we try it and we break it, and we go down all the passible pa- possible paths that we can think of for that pipeline or that workflow or that whatever, right?

Like agent loop, orchestration, whatever word we wanna use there. And as we keep going down those paths, we see, okay, is this... Does this work? Does it work three times in a row? Does it work once out of 10? Like, how do we build consistency there and then try to actually have guardrails or any kind of determinism with what we're doing?

It's been interesting. I think in the past that still felt, [00:11:00] I'm not gonna say hard necessarily, but, you know, it wasn't always as consistent as you thought it would be. Like, maybe somewhere down in the dependency tree something broke that you didn't expect, and now you're not getting the exact same result that you expected.

But I do think that that's much more interesting today in this, we'll say, generated world really.

**Matty:** And, and, and in terms of like, we get more abstracted away from the tools over and over again too, right? Like where, you know, I'm, I'm fond of saying, like remembering this like Gartner session I went to years ago in the early days of cloud, and it was a rogue session that said, you know, X number of years from now, your entire job as a, as a CIS admin is gonna, or whatever, is gonna be you're a vendor manager. You know? And because you're not putting your hands on those things, and then now if we're letting the robots and the agents do it. even, even in a little bit, like I don't think this is purely an AI thing because every level of abstraction removes your understanding of the system underneath that abstraction layer,

**Jacquie:** Yeah, like [00:12:00] you could totally make that argument.

**Matty:** you,

**Jacquie:** Yeah

**Matty:** know how Apache... You don't, you don't know the internals of Apache the way you used to 'cause you're like, "Okay, I can just run this module that is best practice Apache," and then you don't really know it. so, and then th- but that comes to learning the tools, right?

You're like, okay, I mean, I can, I can go and I can have Claude Code go and write me a whole website using this JavaScript framework, and I don't actually have to understand that framework at all. But then I'm gonna maybe make bad decisions because I, I didn't do that. And not to say that everyone should like have shitty development experiences 'cause that's the only way to learn. and maybe it's not a bad thing. I don't know. There's, there's a lot of quote discourse around this, right? Around like, you know, you know, people like to make the analogy of like, well, nobody writes assembly code anymore, so, so should you not have to write code at all? And I don't think the answer is you need to know how to like reverse a linked list. But I still go back to that the people who are able to [00:13:00] create reliable systems using AI, they come from a factor of understanding first principles already. And Marino and I talked about this in, in the last episode about, well, how do you, how do you gain that knowledge if you don't gain it the hard way?

But just like, don't know, you know, there are plenty of people when we started talking about digital photography editing that were like, "Well, if you don't learn the lessons in the dark room, you can't." And was it easier? Like, if you spent time in a dark room, you could understand Photoshop better because Photoshop's metaphors were all dark room based, like dodge and burn and all of that was all stuff based on that.

But there was a, a, a hu- a whole generation of, photography folks, you know, who didn't have to learn it that way. They could learn it another way. So maybe it's not terrible, but with it going... But it also didn't move as fast as this. That's the thing. It's like you don't have any time to,

**Jacquie:** Yeah

**Matty:** And, like, where do we, how do we help each other? You know, like, again, you know, we, we, [00:14:00] we love community in, in the DevOps space, and we learn from each other so much, and that's what made DevOps powerful, was, was learning from each other. do we have as much community today as much as we have, you know, influencers and content creators who are very adamant about sharing their opinion versus their experience and with, you know, warts and all, right?

You know, like, "Hey, I tried this thing," and, you know, I think, I think it's hard for people to say, "I tried this thing and it might not work for you." They wanna be able to be like, "I want everybody to think I'm an expert, so I have to say this is right." I don't know. Like, what, what's, what's community v4., 5.,

whatever version of community we're on, you know, if we were

**Jacquie:** Oh man, there's like five different threads I wanna take from that one. I'll try and cover a few of them. I mean, so before I go back into community and what I want to talk about there, I wanna talk a little bit about that, you know, showing it off with all the warts and stuff. something that I do, I've been doing for a few years now on and off, is I do a live stream [00:15:00] where we build something live together and we just see how it goes.

And I think some of the most valuable parts that come from that are when it goes a little off the rails or things don't work quite as you expect it to, because now you're sharing that, like learning that you couldn't do otherwise. Like it's... Especially in like we're so remote now, it- you don't get that like pair programming time with seniors.

And also, we don't have as many juniors. Like I miss them. They used to challenge me to think differently about stuff that was just the way we did it, right? on that note too, like I think right now, you know, when we look at social media and we look at all the latest things coming out about Jev or whatever the latest model release is, we're always seeing like everybody's highlight reels.

So you're comparing like your own lack of knowledge at this thing that just came out, and there's so many of them that you can't do all of them the day of, right? You just can't. So you're looking at all these stories, and it looks like everyone learned Jev last night. Everyone learned, you know, the new model last night.

Like I just built all these workflows with Astra that do my video editing, and suddenly Claude, 5.5 [00:16:00] Opus is better than Astra is what everyone's saying. And I just got that workflow done, right? So now everybody's like, "Okay, switch over to the new model," and I'm like, "Great." I mean, it's not that hard to switch over at least.

But it's always interesting 'cause you're kind of comparing your own friction points with everyone else's highlights.

**Matty:** Well, right. And it's like Can you imagine, like, years ago if it was like, "Okay, well now, now we're all writing in Go. Well now we're all writing..." Now it felt like that except it

**Jacquie:** I did

**Matty:** Like, it wasn't, like every other week that it was suddenly this is the hot thing. I mean, and,

**Jacquie:** I mean, when I think about that Python to Go to Rust, it felt fast, but it objectively wasn't comparatively, right?

**Matty:** you're like, "Oh man, I, I, I wish, wish it was like that still." But, but like having to become the expert in it, and then also how does it... And, and for what, right? Like, does it, does it really make that big of a difference, you know, other than you know, it's, it's, it's slightly better, but [00:17:00] like can you still get good stuff done?

And that's, that's sort of the, the thing that's interesting to it. Like, and oh, this is what I was thinking about too Longtime listeners know this is one of my favorite stories is I remember going to a, a, a DevOps meetup in Austin when I worked at Chef. This was years ago, and the, the c- the presenter was talking about how they had migrated all of their config management from Chef to Ansible and why it was so much better, and this all proves that Ansible is so much better. And I sat there when they were telling the story, and I was like, "No, you're just smarter now." Like,

**Jacquie:** Mm-hmm

**Matty:** you know... So, so sometimes we, we do that and we think that the optimization is because we used this better tool, and it's like, well, no, 'cause when you first used the first tool, kn- you know more now than you knew then.

So, like, you're gonna implement the new tool better because you're smarter, but it's not something inherent about that. And then I, you know, I think there's something to be said for that. It's, it's kind of the same thing about, like I wrote a blog post a while ago about, like, people are like, "Oh, well I need to make sure I have a different model, you know, doing my code review than the one that's doing it."

And they were [00:18:00] like, you? do you just need to prompt it differently?" And also, you know, so it's not like it's the same human, right? 'Cause I think that's what people do is they, they sit there and they're like, "Well, you wouldn't code review your own shit." And they're like, "Yeah, but Opus 5.5 is not a person," You know? It's, it's not the s- you know? So it's, it's rough. But, but okay. Sorry, that, that's a whole other,

**Jacquie:** That's okay.

**Matty:** go down.

**Jacquie:** But I think, on that community side too, like early in... I know you and I have talked about this a lot, 'cause we've talked about DevOps stuff a lot over the years. But early in, you know, the teams were a lot smaller, they were a lot leaner than our developer, peers. And I remember being like, "Oh man, it's just me and, like, maybe one other person, and if we don't solve this problem, like, no one's gonna do it, right?

So how are we gonna get that learning and kinda lean in?" And I think, I feel like the, the meetup community 10 years ago, I don't know if this is a hot take, I hope it's not, but I feel like the meetup and, like, conference [00:19:00] community 10 years ago was a lot more vibrant. Like, there were a lot more options of the types of meetups we could go to.

Like, I used to go to a DevOps one, went to a DevOps enterprise one, and I also went to, like, a Polyhack one, which was really cool. Probably my favorite one, that's no longer around. But there was this idea of like, okay, at work I'm trying to solve these problems, I'm trying to scratch beneath the surface, but now I can go and meet people who've actually done it and get, like, deeper than their highlight reels basically.

Like, you get those real stories and what actually came out of it. And I think to that point earlier where everyone's kind of posting, everyone's a content creator, everyone's trying to get their voice out there now, we're missing some of that depth we used to have. Like, I used to be able to use, like, the Netflix Chaos Engineering, engineering blog.

It was so good. I learned so much from that. But I feel like we don't have that kind of under-the-hood learning anymore

**Matty:** I think there's a couple things. The, the thing that's interesting when you think about meetups is, is really they've deviated, and, and for reasons that make sense, from what the [00:20:00] word actually means. Like, the whole idea of meetups were just people getting together with a common problem, and it- they've turned into mini conferences or mini webinar, right?

It's like we

**Jacquie:** Mm-hmm.

**Matty:** to have a presentation. Like, you know, the more that... And, and I think about... And it's interesting because I think that's what people think they want,

**Jacquie:** Yeah

**Matty:** be taught something. But, but the val- you know, 'cause it's, it's more one way, you know, versus collaborative versus like, "Hey, let's just..."

You know, I mean, I think about the first, you know, there was a Chef meetup here in Chicago when I was first starting with Chef, and, like, we just got together at a b- it was like seven or eight people at a bar. We just sat there and have a beer and just, like, talk crap about using Chef, and there was, nobody had slides, nobody had a mic, nobody did whatever.

And, you know, but again, like you said, is everybody wanting to be a content creator now. And then also the costs of running these things becomes challenging and, you know, I, I, I... There's, there's a lot of things that I guess we don't do as [00:21:00] much, and it's because we've moved a lot of it being vendor depend- You know, like,

**Jacquie:** Mhm

**Matty:** funding these?

Like, Chef Community Summit, the, the days that th- that existed, that was like a two to three-day event, and it was all open spaces. There were no presentations. It was just people getting together and talking, and it was so powerful. And you'd have a hard time doing that now because people are like, "Well, I can't fund it if I can't get out there and talk about my thing and,

**Jacquie:** Exactly

**Matty:** of... And we could sit here and we can pour one out and, and bemoan it. I don't think there's any going back. But, but what are the... And, and, and I also wanna talk about one thing that I think, and again, it's, like, kind of maybe from this content creator approach, like the learning in public, people are afraid of being wrong.

Like, I do this. I'm, I'm, know, fairly senior person, and also sometimes maybe that gets harder when you've been doing this a lot. You, you get nervous about just doing and saying, "Hey, okay, I'm gonna live stream myself learning this, and I'm gonna make stupid [00:22:00] mistakes that are dumb, and it's okay." And honestly, I'm having this realization that people like me should do that more because it's, it actually is safe for me to do that, you know, and I should, and that shows that it's safe.

But, like, I mean, I, I remember I was doing learning in public when I started at Pulumi and I did a live stream and I, like, just did something really stupid with Docker and someone pointed it out to me, and they weren't mean about it or anything, and I just, I had a rough day and I was like, "Oh man, but I should've known that."

And you're like, cares? Nobody, nobody cares." And again,

**Jacquie:** No one cares as much as you think they will.

**Matty:** me and has my privilege and everything to be wrong. But,

**Jacquie:** I have that battle every time too. Like, I think I've done, I don't know, like upwards of, like, 40 livestreams of learning something in public, and God knows how many hours and everything. But every time you kind of run into that balance of, like, "Okay, well I've been doing this for 11 years. People expect me to know the answers.

They expect me to, you know, have deep insights." And sometimes I don't. Sometimes it's something I've never [00:23:00] seen before, and we're learning in public, and that can feel kind of scary. But it's the same point. Like, if I can't do it, how do I expect anyone else to, right?

**Matty:** I, I think there's something to be said for the impact of the economy on this as

**Jacquie:** Oh yeah

**Matty:** know, at a time when you're, you know, people who are incredibly talented and incredibly expert, nobody's job is secure. Jobs are incredibly hard to get. You know, like you, you can't... And then to have on the record you not being perfect and brilliant and everything like that, it's, it's, it's, it's scary.

so problems than solutions when it comes to that. But let's,

**Jacquie:** Yeah.

**Matty:** can people have control over their tools, right?

**Jacquie:** Yes, yes. Coming back to that.

**Matty:** Yeah, so, so we've sort of, we've spent a whole lot of time talking about the problem. I'm sure people are like, "All

**Jacquie:** So

**Matty:** just...

When are you getting to the fireworks factory? Tell me, tell me what can I do?"

**Jacquie:** So yeah, earlier you asked me a question about like, oh, like was that the moment when this clicked as a thing for you? I talked about the, you know, the [00:24:00] multiple VMs and everything, but the moment that, you know, this whole meaningful control thing clicked for me was when I worked in healthcare in Canada actually.

We had a ton of da- data residency problems with using services, so like we couldn't... We used AWS, but we couldn't use S3 because it's a global service. It could replicate to any other region, and then we lose, you know, data control, stuff like that. So taking meaningful control of it meant answering like a lot of questions like, "Where does the data go?

Who can access it? How is it retained or used? How do we, you know, know what we're using is what we think we're using?" And that led me down like a whole bunch of rabbit holes that eventually led to a ton of Kubernetes, and learning things like CAP theorem because we had to build our own, like, managed database services in Kubernetes basically.

And that's kind of where it became like, okay, well, we can't always use industry standard tools, so how do we build something that is reliable enough and that, say, that those tools become something that we can then use, which some of them did. Later they've got c- like data residency. How do we [00:25:00] make it easy to pivot out of that?

Was like some of the questions that kind of got us down that control path But I think if we wanted to keep going down that path, there's other things we can ask, like who are the people that support the tools that we're using? like I think everyone knows about what happened with the NGINX Ingress, and we're seeing a lot more of that today.

Like open source, I think... I don't wanna say it's not as popular. I think it's probably related to the economy, as you were saying. It's just got less funding. Everyone has less time to give away to other things, and we're seeing that tools that have been stable for a long time are no longer stable.

Communities are a lot harder to get involved in because there's just these floodgates open with so many PRs, and it's so much harder to... Like how do you trust the people that are building into open source now? There's tons of different kinds of dialogues around this. Like you can look at, you know, Linus Torvalds is talking about where he gate keeps the different kinds of AI commits that are allowed into Linux.

It's just a pretty common, I think, discussion that everyone's having in open source now. [00:26:00] But yeah, like, you know, looking at like who supports that, it's like the maintain- like it's our maintainers, it's our documentation writers, it's that community knowledge base, it's sponsors, it's, you know, organizations and investors.

And how does that kind of stability change? I don't have any answers here so much as it's just things that we look at to be like, "Okay, is this something that we can depend on? I've discovered this cool tool. It's awesome. Can I depend on it?"

**Matty:** Well, and, and I think, like you said, just going further down those questions, you know, you've, you've, you've mentioned, you know, when you think about the things that allow the magic to happen are fundamentally boring, right? They're plumbing, they're boring, they're not exciting and dopamine hit, or they're, or indirect dopamine hit maybe sometimes. And when we think about how to... 'Cause I, I think this is, this is the, the, the, the, the thing that with the speed of the [00:27:00] change that makes this hard is we don't end up having the time to bake in these, like, practices

**Jacquie:** Mm-hmm

**Matty:** of, of how to work with that because the, the sand is shifting so much, and we're, we're, we're able to, you know, and if we wanna, like, kind of use a blunt instrument metaphor or, or example, it's like, you know, AI-generated code is quick to make, but then who maintains it?

And, you know, and yeah, you can make... There's, there's, you know, that's just we've been sa- you know, treading at this saw for decades. And, and it's funny because I, I've, I've used this example before when I, when I think about, you know, there's a, there's a tool, an internal tool that I built. building a lot of tools with, with AI, like internal stuff in, in the company where I'm at. And I was like, "My marketing tool is the most heavily operationalized, know, AI-built tool in this company because I've been in the ops world for so long, so it's got ridiculous tests and infrastructure and CI pipeline, you know, CD [00:28:00] pipelines and stuff." But like, know, people who are building that who don't live in that world would never even occur to do that, and the agent may or may not even know to think of that.

And, so how do we... But, but besides saying how do you make sure that your robots are following the practices we already built, but how do you know? Like, what does, what does the long-term maintainability of these AI tools, of, maintainability of you using them,

**Jacquie:** Mm-hmm

**Matty:** who's maintaining the tool, but, like, we all build practices around how to manage our Terraform, how to manage our IAC, how to manage our databases and all these things, and we can abstract away from it a little bit.

But like, yeah,

**Jacquie:** I do think Terraform's actually like a really apt comparison here. Because in Terraform, I didn't necessarily know, like, I- until it's planning sometimes. I use it a lot. Sometimes we have these mega Terraform files. You don't necessarily know every single layer that's changing, even if you read through the plan.

Like, sometimes you're looking [00:29:00] at, like, 70,000 lines of changes, and it's, you know, it's not quite the same scale as these LLMs and other kinds of generative code, but you do have to have that process around, okay, we look, we look for the diffs, and you look around, like... Like, we would flag for deletes. anything that was a delete deserved close human eyes.

And I think we need to figure out what the deletes are in the agent world. I mean, obviously it's still gonna be deletes, but what other kind of things fall into that category, right? That absolutely need a human decision or a human, I guess, like, experience or taste kind of point on it.

**Matty:** I always have a hard time because I've, I have this sort of like, it's stereotyping, but like in a fun way. You know, where I always say, you know, cis admin ops people, we are inherently or pessimistic. And I don't know the correlation causation. I don't know if people who are pessimistic tend to be attracted to this role or more that...

But, but then as I always thought about it was I was like, "Well, most of my job as an infrastructure person or a, a, a [00:30:00] cis admin or tech ops or SRE was thinking about everything that could get fucked up."

**Jacquie:** Mm-hmm.

**Matty:** could this go wrong,

**Jacquie:** Well, what's gonna wake me up at night, right?

**Matty:** exactly. You're, you're, you're always thinking about what can go wrong, and then that makes you build defense around it, right?

I mean, security people, similar way, right? You know, and but then if you're... And so again, if you look at, if you were to look at any of the, you know, agentic code, you look at my, you know, skills in Agent MD and stuff like that, it is all built around how do I make sure things don't go wrong, first and foremost.

But that's, that's not normal. Or maybe

**Jacquie:** Yeah, that's true

**Matty:** average, the average person. This isn't the average developer, much less the non-developer who's building with these tools. And that's great, by the way. I'm, I'm, I am not gatekeeping it. I think it's awesome that this enables people to,

**Jacquie:** is too

**Matty:** know, like realize the vision, but, but you don't know what you don't know, right?

You know, getting more of the guardrails into the, the [00:31:00] boring stuff, and, and being able to let those things be swappable, right? So you're not dependent on... 'Cause that's the problem is sometimes you have to build all the... You know, I wr- I wrote a blog post a while ago. it's, I'll put a link into it.

It's called "How My Coworker Who Didn't Know What CD Meant Can Ship to Production," and it's this, this very talented designer, and I have her absolute permission to make the joke about that she didn't know what CD meant. That was, you know. And but it's like we build these guardrails, and they're all super, like, Claude specific. You know? Like, it's like, okay, but then if we decide we don't wanna use Claude Code anymore, then do the guardrails go away, you know? And

**Jacquie:** I think, huh

**Matty:** the way back to one of my favorite DevOps books, which is the book Switch by Chip Heath, and it's about change, about change. And it's not a DevOps book.

It's, it's a book that DevOps people should read. And it's, fundamentally a lot of it is you make the right way the easy way, right? Like, you need to... And, and the, the, the classic story in there that I always go back to, and been talking about this in a DevOps context for [00:32:00] decades now, oh my God, we're old, which was said there was a, you know, a plant, and they had this problem.

There was this machine, it had a blade, and people kept cutting their hand on the blade. And so the traditional thing would've been like, "Well, let's do a lot of safety training. Let's put up signs." They redesigned the machine so you had to use both hands to turn it on, so it was impossible to get your hand in front of the blade, 'cause you couldn't turn it on without using both hands.

You know,

**Jacquie:** Yeah

**Matty:** that is the only way you make things safe, right? Is you make it so you don't have to... If you have to think about it, you have to, you have to a- actively opt into the safety, it doesn't happen. Even if you're a smart safety person, we don't think about it. You gotta make it, you gotta block it.

So,

**Jacquie:** Yeah. I mean, I think a lot of these discussions, like it feels new because we've got that new holy shit discovery moment, right, with all of this AI stuff that's coming out. It's very fast. It's everywhere all at once. But I do think a lot of the questions are still familiar. Like when we were talking 10 years ago about we need to be multi-cloud, we need to have like really good disaster recovery, we can't rely on only AWS because, you [00:33:00] know, what if something crazy happens and we have to have like GCP as well or whatever.

We talked a lot about how do we avoid vendor lock-in. We talked a lot about like Kubernetes pods and deployments and other services that would easily allow us to take a backup and pivot. I think we also talked a lot about, you know, where do our tools run and how are they like used or adapted, and I think that still fits today.

Like I think... I don't know. I, I feel like open source has been having, I don't wanna necessarily say like a lack of popularity, but maybe a lack of support. But with the frustration I'm seeing a lot in the community around, you know, these proprietary models that you're locked into, like you said, they can change any two weeks.

They can change the pricing. They can push you out. They can change how everything works, and suddenly you have to relearn it constantly. I do think we're gonna be seeing more of a switch to like open models and maybe not necessarily the... I don't know if we'll ever get to see all the training data that was used.

Probably not. But I think being able to actually see like, you know, the open weights and adjusting it yourself, and I think we're gonna have a lot more of these kind of like [00:34:00] small, like specifically trained models that will help us with one thing at a time. But waiting to see how that turns out.

**Matty:** I wonder, there's a, there's a fair amount of friction around open models and open weight and, like, running your own model and all of that stuff. And it's like, you know, people don't use the central things because they want to. They use them because they're easier, right?

**Jacquie:** Mm-hmm.

**Matty:** to that friction.

It goes back to making the right way the easy way. I wonder if there... And, and again, at the risk of someone correcting me and telling me I'm wrong, but, like, there a place for, like, appliances? Like, like, how do you make... And I know people are like, "Oh, well, you could just get a Mac Mini and put open clubadoo on it and do blah, blah, blah."

And

**Jacquie:** Yeah.

**Matty:** lost me, right? Like, I always go back to decades ago when it was like, people were like, "Well, why'd you buy a TiVo, man? You know, you could build your own thing with..." I'm like, "'Cause I just wanna record the Cubs game.

**Jacquie:** Yeah

**Matty:** wanna, like, F [00:35:00] around with hardware at home. I just want it to do a thing." Would I rather not send my... You know, again, and, and actually in a way, TiVo's like a great example because then they had all your da- This was before we worried about data, I guess, too much. But, you know, it was like that was TiVo, TiVo's big thing. I mean, they had, you know, your watching data. That was a huge amount of data.

That was a revolutionary thing. But again, d- was I, am I capable of going and building a home PC, home theater PC with a home brew DVR and everything? Sure. Do I want to? No.

**Jacquie:** Yeah. There's all kinds of things I could do, but yeah

**Matty:** the same thing. Like, am I intrigued by the... Do, do I have the technical competency to build my own system and do all...?

Probably. But you know what? You know what I don't wanna do when I'm not working, is mess around with this crap, right? So but, like, if there was a, an appliance that I could just buy this thing at a reasonable price and like, and it just sits on my home network and I can do all the things, sign me up. So if this thing exists and I'm an idiot and I don't know about it, [00:36:00] like, tell me about it, and I'll probably find out that it's incredibly expensive because hardware is ridiculous now, but, you

**Jacquie:** I will say, ah, I wasn't planning on talking about this here, but, you know, I started at Nebius, and one of our major products is called Token Factory, where it is a bunch of different open models that we've done our own accuracy and training and im- like, improvements on. And it's been fun to get back into that open sport source area.

Like, I'm using our endp- endpoints, but I'm deploying it through, like, Hermes and OpenCode, and it's fun to get to change with all the different models and see, like, what we're doing.

**Matty:** up with this, but I, I just, I, I, I almost thought about it a

**Jacquie:** It's literally not even in my notes.

**Matty:** Yeah.

**Jacquie:** I know, so it's been fun 'cause it's been... You know, I don't know if I would've had as much time to play with it over the weekends as I want to, but since I get to do it at work, it's exciting.

**Matty:** to know. I'm like, that like a part of what you guys do? Like, so is that a thing

**Jacquie:** Yeah, [00:37:00] yeah.

**Matty:** play with?

**Jacquie:** I mean, so we run like the GPU stack, your classic kind of cloud side, and then we also have Token Factory, which is like you can... You know, if you wanna play with Kimi K3 or GLM or Minimax or any of these other open models that are out there, these vision models, text models, stuff like that, coding models, you can literally just change the endpoint and switch between them.

I can show you after. But yeah, it's, it's been fun. I'm using them for everything, like video editing, you know, making video games for fun,

**Matty:** Oh

**Jacquie:** of stuff.

**Matty:** I,

**Jacquie:** But,

**Matty:** I'm just getting so old.

**Jacquie:** I know. I still feel like I'm really young in the industry, and then I say I'm what, 11 years, and I'm like, "Oh my God, I'm not."

**Matty:** Well, I've, I've said this before and, you know, I always think that I came la- you know, I'm like, "Oh, I was around, you know, kinda late to the DevOps movement." And you're like, well, and with every year the percentage of ti- that, that gets less and less because it's like, okay, you know, like, like when the movement was three years old and you were there for one year, for the, just the last year, that wasn't much of it.

But when the movement is 20 years old and you were there [00:38:00] except for the first two years, that's like almost all of it, you know?

**Jacquie:** Yeah. I remember it, it's totally different, but it felt that way with World of Warcraft for me. I came in, I was a competitive WoW player a long time ago, paid my rent doing this, and I came in in, Wrath of the Lich King. And when I joined, everyone was like, "All these Wrath babies, they're so annoying.

They don't know real Warcraft." And then like, you know, by the time you get to Cla- Cataclysm or, like, any of the new ones, people were like, "Oh, Wrath? Wow, you've been playing for a long time." And it's, it's crazy, right?

**Matty:** I, I feel like I was never like super-duper, but I played it a lot and it was like whatever... Well, not from the very beginning, but yeah, yeah, Wrath was like probably the last major expansion that I played, like when I was doing it a lot and, and it was... So okay, not to go off, just real quick. So

**Jacquie:** Yeah.

**Matty:** is this Forever thing? Do you know? This

**Jacquie:** Forever.

**Matty:** Warcraft, World of Warcraft Forever. They've

**Jacquie:** Oh, no, I didn't see it.

**Matty:** Oh,

**Jacquie:** been following, unfortunately.

**Matty:** I, I'm,

**Jacquie:** I, I last played the dragon flying one.[00:39:00]

**Matty:** I'm just like, "No, you do other things now. You, you

**Jacquie:** I, I can play tons of other games and read tons of books, or I can play World of Warcraft. That's it. That's the waiting.

**Matty:** Yeah.

**Jacquie:** Like...

**Matty:** Yeah.

**Jacquie:** But

**Matty:** So

**Jacquie:** I guess, like, wrapping up.

**Matty:** over your MMORPG or whatever, you know. go play Baldur's Gate and it'll be fine.

**Jacquie:** Oh, no. Like, it's the same, same category. I can play Baldur's Gate or I can do anything else.

**Matty:** Oh, well, I think that brings us to, to the end here. maybe, maybe we'll have a follow-up episode where we just dig into, World of Warcraft, nerdery.

**Jacquie:** What playing video games competitively taught me about working in tech.

**Matty:** Oh,

**Jacquie:** I'm just kidding

**Matty:** Oh, man. We do a, do a joint jam on this with you and, Kat Cosgrove. You

**Jacquie:** That would be fun. Yeah

**Matty:** played competitively, but she sure plays a lot of damn video games, that's for sure. complimentary. but yeah, so, so that's, that's, that's what we got, for the show. If you head over to arresteddevops.com/meaningfulcontrol, that'll have this episode's show notes. we'll [00:40:00] have links to a bunch of the stuff that we talked about. you can go to arresteddevops.com/itunes, leave us a review in the Apple Podcast store.

somehow this helps people find the show, I guess. I'm also just really excited to be doing this show regularly again. I am super revitalized, so, if there's folks that you would love to see on the show, don't know, find me on social media somewhere. Send an e- you can send an email to shows@arresteddevops.com.

It's not like I'm hard to find. but if you'd like to know all the other ways you can listen to the show, if you go to arresteddevops.com/subscribe, we got all those fun links. So Jacquie, this was awesome.

**Jacquie:** Yeah. Thank you so much for having me. I've really enjoyed, and I've got my final little call-out, is if you are interested in trying all these different models or some of, like, the different AI partners that are out there, like, you know, Toloka, Tavily, or any of these open models, we did just launch a new builder program where you can get hundreds of dollars in credits, and we're also doing an online hackathon that you can still...

I think it's up, you have until the end of the month. There's up to $50,000 worth of prizes up there.

**Matty:** The

**Jacquie:** yeah,

**Matty:** is October 2026, by the way,

**Jacquie:** [00:41:00] yes.

**Matty:** to this, so. Okay, well, I will make sure that we, ship this episode before the end of the month now, just so...

**Jacquie:** Oops.

**Matty:** people will be like, "Ah, you jerk."

**Jacquie:** No pressure.

**Matty:** We'll get it, we'll get it done. We'll get it done. this has been Arrested DevOps, and remember, there is always DevOps

**Jacquie:** In the banana stand

