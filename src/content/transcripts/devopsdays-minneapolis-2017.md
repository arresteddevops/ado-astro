**Bryan:** [00:00:00] Like, I don't like the black part in the middle of the banana, so I usually just eat around it until I get to the vein of the banana. It's like a vein of a shrimp. It's pretty gross. I just ruined bananas for everybody here.

**Bridget:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps I'm Bridget Kromhout, and with me today, I'm Matt Stratton.

**Matty:** Today, we're recording live at DevOps Days Minneapolis 2017. The show notes for this episode can be found at arresteddevops.com/devopsdaysminneapolis2017. Not yet, by the way, if you're in the audience. They're not there. But first, a word from our sponsors. Hi, I'm Ken from ThoughtWorks. We're proud to sponsor this from GhostCD, a continuous delivery server. You can find more information at gocd.org or on Twitter @Go4CD. Arrested DevOps is brought to you by TenthMagnitude, a company that figures if you're listening to this podcast, you must be pretty cool. TenthMagnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/10thmagnitude. This episode is sponsored by VictorOps. Built for modern incident management, VictorOps provides a unified platform for real-time alerting, collaboration, and documentation. Driven by your IT and DevOps system data, VictorOps helps you to respond to incidents more effectively so you can minimize downtime and make being on call suck less. Visit arresteddevops.com/victorops to schedule a demo or start your trial. Mention you heard about VictorOps on Arrested DevOps, and you'll be eligible for some sweet discounts too.

**Bridget:** [00:01:58] So, when we do these podcasts at conferences, we often want to sit down and have a further conversation with some of our speakers. And I don't know about you, but I always want that mashup, right? Like, great, someone gave a great talk. Perhaps an opening keynote, then someone gave a great closing keynote, but they need to talk to each other. So I guess consider this fan— this is like fanfic of the conference talks. We're now going to put together the people we wish were interacting.

**Matty:** It's a mashup remix.

**Bridget:** Exactly. So let's have our speakers introduce themselves.

**Jessie:** I'm Jess. I work at Google, mostly on Go and Kubernetes container things. Um, yeah.

**Bryan:** All right. I'm Bryan Liles. I work at Capital One in cloud engineering. I run a few projects there.

**Bridget:** Nice. Okay. So, I guess probably the best place to start is everyone here at DevOpsDays Minneapolis and our live studio audience probably saw your keynotes, but for our podcast listeners who have not seen them, can you give us the elevator pitch, the short summary of what you were hoping people would get from this, and probably that is related to the stuff you actually presented.

**Jessie:** [00:03:15] Yeah, so my talk was on security in a containerized world, and I basically went over the past, present, and future of usable security and how you can turn security on by default, allowing 99% of users to benefit. And kind of making it invisible to users and then pushing that into kind of the future of security integrations into tooling.

**Bryan:** Yeah, so I took a total non-tech approach to my keynote, and what I was talking about was, first of all, people, how people are more important than anything else. And then I highlighted my experiences of DevOps in the enterprise and how I think most of it is not good and how I think it could be better and how I think we can all participate in a better fashion.

**Bridget:** And I really enjoyed both. And what I think is great about mashing up these 2 talks is on the surface, they couldn't seem more different. I mean, one is all about that squishy human thing and the other one had a whole bunch of things about, you know, cgroups and namespaces and, you know, the kernel and whatnot. But I think that there is actually a really interesting thread going through both of these, which is there's the stuff people want to do, and then there's the stuff— and maybe this is stuff they say they're going to do— and then there's the stuff they actually do, whether it's just turning off, you know, SELinux, or whether it's everybody was on board except after the meeting nobody did the stuff that was discussed. And I think this does kind of have a lot to do with incentives inside your organization. I'm just kind of curious, maybe Brian first, just because you're in a leadership role dealing with trying to steer a very large organization in the right direction, whatever that is, how do you approach that whole incentive thing with people in tech?

**Bryan:** [00:05:17] Oh, yeah. So, totally loaded question. How do I incentivize people in tech? Well, really, the only incentive that I have is a smile. So, when people see me, I'm always gonna smile. And really, I believe in these spheres of influence and bubbles. And real quick is that we all have our own bubble, and where tensions occur is where these bubbles touch. And what I try to do is make my bubble a little more permeable, but also make it bigger while I'm doing that. So, I'm actually out here trying to inspire people to be better, and more likable. And then hopefully if everyone does that, then going to work is not so work-like.

**Bridget:** Yeah, no, I like that. And what's your opinion, Jessie? Like, how, I know, especially 'cause you run a conference called the Maintain-A-Rotty Conference, the Won't Fix Cabal. Can you talk a little bit about how you incentivize people?

**Jessie:** [00:06:18] Yeah, I mean, that's really hard when it comes to open source. Because usually you'd want to incentivize them by paying them, but in open source, that is not always an option. Yeah, I think it's a lot of just trying to use people's interests to your benefit almost. So, if someone's interested in a feature or a patch set or contributing something, try to use that to actually build the project up more and don't force them into doing something that they don't wanna do since it is free labor. But I do agree with a lot of what Brian said as far as communication. Because I think, like, if we improve communication, at least, like, between security and ops and devs, then, like, all of our tooling could be a lot better, which was, like, a hidden undertone of my talk.

**Matty:** I was just gonna say, I was gonna ask, it seemed like for every slide that Jesse had that was deep tech, there was a part that was like, and here's the person problem. Right, or here's where the people come into play. Not even problem, I don't wanna say problem, but the interaction to people, right? Well, you wanna do this, but remember, that's gonna make people sad, so we don't do that, right? Or this, and then a human interacts with this, so it changes that. And I think that's really necessary to keep that in mind, is at the end of the day, this is all interacting with imperfect humans, and they're gonna not use your thing, right? You're incenting behavior by making it, you know, one of the themes was, right, if you make security really challenging, then people just turn it off. Well, that's an incentive. Like, I think we also think about incenting a positive way, like how do I reward you for doing the right thing? But we also think about negative incenting, right? And I think maybe that's something in maintenance of stuff, we think that way where we can't really— I can't reward you, but I can steer you. And so I think that's hard. We maybe find ourselves falling into almost a— I don't want to say punishing thing, but like we don't really have much but a smile, right, to work with. But we have like a lot of making fun of.

**Bryan:** [00:08:20] So I will draw some more parallels between open source and big companies. So incentives are harder at big companies because you can really blend in. You can work for years and no one will really pay attention to you. Just do the bare minimum just to get to the next year. And I run into that problem all the time where, you know, they're good people. They just do, due to, you know, situations at work, bad management, whatever, they don't feel that they need to perform. So the same thing with open source is, you know, don't be a jerk, number one. 2, realize that the people who are doing this have influences that are external to what you realize. And sometimes when they make decisions, they're making decisions for the greater good, not for, you know, your pet project, or in our situation, your little tiny group. And then also something that Jess said, and I rarely take notes, but I put a note in my phone. I didn't tweet it because This is a note for me, but it was about the default case. We should always allow our users to fail well. 'Cause they're gonna fail. They're gonna do the worst thing possible. So when we know that's gonna happen, because it's gonna happen, we should put them in a place where, hey, you know what? You can't open up your box to this, that, and that. You can't add privileges to Docker. You get what you get and you can only take away.

**Bridget:** [00:09:44] That's a really good point, and I feel like the default case is something that we think about a lot from a technical perspective, but it also applies to the organizational stuff. Like, oh, okay, if no one takes any steps to solve this problem, what does it default to? Is the default result going to be what you actually want happening in your org?

**Jessie:** That was deep. That was just another level. I'm not there yet. Like, whoa.

**Matty:** It's kind of like whitelisting behavior in a team, right, in a way. And I don't know if this may be a metaphor or an analogy that runs away from me, but I don't know if that's kind of even what you're getting at, right? You're saying, okay, the default case, the default state of a team is doing nothing, right? They have to be moved in some direction, and that direction is for good or for evil, right? Or for productive or not. And if you're kind of only whitelisting through Again, this is gonna fall apart in a minute. Save me, Bridget.

**Bryan:** Well, I'm here there for you. I'm here for you. So I'll give you a less concrete example because I don't wanna talk about specifics of Capital One. Capital One is great. I'm just gonna talk in the general. But if you have a large group of people trying to accomplish myriad tasks and they're not comfortable with it, What they will do is what they always do, and what I'll do and what you will do is you'll do the easiest thing. And generally sometimes, you know, that easiest thing might be, you know, this SELinux thing is bothering me. All right, let's turn it off. Or, you know, it could be so we're in the cloud and it's sometimes easier to boot things in an insecure way, you know, not thinking about firewalls, security groups, um, you know, IAM stuff. And we'll just use— we'll just move without it. And that's what I'm trying to get away from. By default, you should just have all that stuff and you should have to peel it. It's like eating a banana. Like, I don't like the black part in the middle of the banana, so I usually just eat around it until I get to the vein of the banana. It's like a vein of a shrimp. It's pretty gross. I've just ruined— I just ruined bananas for everybody here.

**Matty:** [00:11:53] Well, do you devein the bananas before you make your banana soup? Or is it okay to have them in the banana soup?

**Bryan:** Don't get me started on soup.

**Bridget:** Yeah, Cheslock had a hilarious— when everyone sees the videos from this conference, they can watch Cheslock's talk.

**Matty:** I think you've nailed it though. And this, I run into this with conversations. This goes all the way back to when I was working for a living and managing a team and doing real stuff. And I remember, and I know I've told this story on the show before, so longtime listeners, sorry, just hum along for the next 30 seconds. I had a sysadmin who worked for me. And is featured in many of my stories. And we were trying to improve our release process, and it was going to require a change in how the developers worked. And he said to me, he said, how are we going to make them do this? In his mind, what we needed to do was have somebody in as a release manager who reported to the CTO, who had hiring and firing power over developers. Because if they were afraid of this person, then they would do it. And I was like, no, what you need to do is make the right way the easy way. And there's that great book, Switch, about change management, not ITIL change management, but actually changing behavior. And there's a big part of that goes into you make the right way the easy way. Quick anecdote to help with this, but the story they tell in the book is there's a manufacturing plant and they had this machine that had a blade on it and people kept getting cut on the blade, kept cutting their hands. They said, well, one thing you could do, and what normally we would think is like, we're going to do a bunch of training. We're going to put up a bunch of warning signs. Everyone's going to get trained how to be careful around this machine and blah, blah, blah. And what they did instead is they changed how the machine operated. So, it had 2 power switches that had to both go on that were outside the blade. So, it was physically impossible to have the machine run with your hand in the way. And then nobody got hurt anymore. So, the right way was the easy way. It was not possible to fail, you know, and be able to accomplish what you had to do. So, I think when we think back to those defaults that Brian's talking about, the default should be the happy path.

**Bridget:** [00:13:47] Yeah.

**Matty:** And it's just a glide path, right? Gravity takes you down that way, and you have to really work against it. You have to fight the current to do it, quote unquote, wrong.

**Bridget:** Yeah, but this actually brings us back to a point from Jessie's talk, where she showed us, in her slides, she showed us a screenshot of a conversation on GitHub, and there were people who wanted their specific use case that was going to harm the general use case. And as a responsible maintainer, Jessie, of course, was saying, well, we can't do this, because the changes you want are gonna harm the general use case. Case, but when you say right, that suddenly becomes a question for argument. Like, when people in an open source project are trying to decide what's right, can you talk a little bit about how you make that decision?

**Jessie:** Yeah, it's kind of difficult to be that person and be the person who all the heat is gonna come back on when you say no, because no matter what, there's gonna be people on the other side that it affects, and, like, I totally understand the viewpoint of, like, I've been trying to get this thing to work all day, and if you, the maintainer, just did this one thing, I would not have had to deal with all this shit, and I'd have hours back of my life, or blah, blah, blah. Like, I totally get that. I've been that person, but it's all about kind of making the mass users of the project, like, unaffected by it, and then maybe just those few kind of have to suffer, and it really sucks, but yeah, someone's always going to be pissed off at the end of the day. And it's very hard to have those conversations because it gets like personal and people take it very personally. So yeah, it's about finding the right compromise, honestly. And sometimes there is one and sometimes there isn't, and you just kind of have to move on.

**Bryan:** [00:15:34] So I want to say something about that particular thread because I remember it when it came out. I do read, I do read these things. Um, I'm— I like to, I like to pretend that I'm this huge open source developer in all these projects, but time— but I do have time to read. So there was one key moment in that thread where it would have been like, and then everything changed. And it was when— and this is for all of you all who participate in open source projects and you have, and you're working with a busy maintainer— don't come down 100 post thread or issue and then say, well, I didn't read anything up until now, but here is a truckload of opinions.

**Jessie:** Yeah, I actually remember exactly what I said to that. I was like, maybe if you find the time to read the rest of the issue, you will know what is happening right now. Which, like, my sass comes out in those, um, because I just, like, can't even control myself. But you have to know, like, when that— those threads happen, there are, like, my friends on the sidelines in Slack. They're taking all the heat that I am not giving back on GitHub. So, that goes somewhere, just not to the general public usually.

**Matty:** [00:16:41] It's like the troll flame radiator kind of dissipation.

**Bridget:** I actually kind of wonder, too, this deciding between trade-offs. I mean, Brian, you're at a large organization. You're in leadership. Spoiler alert, you have to make decisions. Not every single person is going to be happy with every result of every decision ever. How would you recommend when people are trying to make the point, make the argument for their pet project, or if only we added tool X, everything would be better. We have 30 other tools, but if we added tool X, like how do you deal with people trying to basically fight for their local optimizations?

**Bryan:** Okay. So personally, and this is an unpopular opinion, is that, you know, we, if you're not independently wealthy and you have to work, You have to go to a place called a job. And then when you go to that place called a job, they expect you to do work. So work and job, neither one of those is happy fun place. Neither one of those is you get your way all the time. Neither one of those places is like your house where you just play. And what I say to people is, yeah, I try to be fair, but at the end of the day, you know, it's my butt on the line. It's my boss's butt on the line. You know, it's his boss's butt on the line. And at the end of the day, it's org first. Unfortunately, you know, I work for a publicly traded bank. It's, it's, that's how it's going to be. So, but what I like to do is temper those expectations earlier and say, you know what, there's always ways to sway. And if you come with, I need to do this, but I'm going to give you this instead, I'll listen to you. But I will tell you one thing, the teams that I'm working on now and the teams that I worked on in the past, We got that out of the way very early, because really what it— I don't like this whole family thing, that it's a family at work, but we do have a circle of respect. I respect you, you respect me, we respect the team. Please don't do anything to break that respect.

**Bridget:** [00:18:41] I like that. And Jesse, I would really like to hear how that circle of respect, as it were, works in an open source project where people might not report to the same employer, but I suspect there's a similar dynamic.

**Jessie:** Yeah, there is like a lot of mutual respect in open source projects. I think it really stems from first the respect between the maintainers and then the contributors who are kind of longstanding active people in the project, but then there are those people who come in and sideline your entire conversation and they're like, I didn't read the thing, but I have opinions. So yeah, I mean, a lot of like things on issues where that comes up, there will be multiple maintainers that will kind of take the wheel when it seems like someone's getting frustrated. And I think that's really, really useful. And it's nice to have like teams to rely on for stuff like that.

**Matty:** It's, there's kind of a third, when I'm thinking about this, I'm like, okay, so there's when it's within a large organization, you're making decisions. Usually these are about prioritization, right? You're saying what's the right, even the right thing is, I agree with you, it's a loaded thing, but what's the appropriate thing? What is right?

**Bryan:** [00:19:47] What's the appropriate thing to do?

**Bridget:** It's not what's hard to do, but what's right.

**Matty:** You know, what's appropriate? So if I'm making a decision within my organization that's sort of firewalled inside of there, what's appropriate to the stakeholders of Cap One? What's appropriate to the SLAs that my boss has to these other groups? Things like that. You're making decisions based on that. What's appropriate to the users of this tool? And then things get interesting, and not that they've been non-interesting, but then I think about people like Bridget and myself who work for vendors. And people like Bridget and myself who are evangelists, who We're your pal. You're not just my customer. We're friends. I'm your advocate inside the company.

**Bridget:** Okay. I'll go with advocate. You can't call me an evangelist. Seriously, I'm not going to knock on your door and ask you if you've heard the good news about cloud computing.

**Matty:** Don't do that. I course-corrected because actually for purposes of this point, the right word is advocate. And the challenge of that though is, and this is the thing that I would stress to people who have these relationships on the other side of it, because this is a thing for us to work on, But when you work with someone like that who is doing everything they can to help you, your vendor does not have infinite resource. So Brian can come to me and say, hey, you know what? I really need you to add this feature. Well, the first thing is he's actually going to literally say, Matt, I need you to add this feature. And the answer is going to be, well, I sure as hell ain't doing it. You don't want me to do it. But I can bring this back in there. But then what has to happen is we as a company look and we say, that's cool. And Brian, you may be In fact, you may be our largest customer.

**Bryan:** [00:21:11] Maybe.

**Matty:** Maybe. But that doesn't necessarily mean it's the appropriate thing for us to do or as quickly as you want it to be done. Because— and everybody who's worked— again, I mean, you think about what Pete talked about this morning. It's like, what happens when these things happen when there's money on the line? Think about any internal project you know, and now when it's money or a contract on the line, People, that's when you get the 90-hour week, the all-nighters through the weekend. We got to do this thing to save our deal with Brian, and we probably compromised 10 to 15 to 20 other customers to do it. But damn it, he's a good logo. He's going to make a ton of money for us, so we're going to redo everything. And what's interesting, and I was thinking about the talks from yesterday about what happens when these happen, nobody asked 5 Whys. All what happened was customers spoke, Customers said jump and we said how high. And there might have been a way to solve this without re-engineering everything.

**Bryan:** So that personally would never happen for me because, you know, you all know that—

**Matty:** [00:22:13] Because you're— I'm not your customer.

**Bryan:** No, you know the golden rule, right? It's don't be a jerk.

**Matty:** That's it.

**Bryan:** Every decision I make is pretty much, am I being a jerk? Well, okay, so being a jerk is not black and white. There's a scale of jerkiness. And can I slide towards the left, which is lower jerkiness at any particular case? So I'd never go to a vendor and say, I need this now. But what I would do is go to a vendor and say, well, you know what, you hinted real hard that you had this in 3 months, and that was 4 months ago. What's up?

**Matty:** Well, that goes back to the conversation yesterday about that roadmaps are not promises of dates. That's a whole thing this whole industry needs to fix, like right now.

**Bridget:** Right. And I actually am laughing because I see a big smile on Jesse's face because I imagine that, isn't it the case that when people aren't paying you for the project, they are even more demanding about features?

**Jessie:** Yeah. Everybody wants their thing, their Turing-complete thing that will make their life so easy.

**Matty:** [00:23:16] But they— How often do they thank you when it finally happens?

**Jessie:** Actually, usually they will thank me, but it will be like almost a situation where like they're very, very mad and then I'll do it out of spite. Like, I will just add their thing so that they'll stop talking, then they'll be like, thanks, and I'm like, hmm. So it's not like, great, thanks. I think I just don't accept it at that point. But yeah, it's a lot different, I think, than like an internal, like, we need to add this feature for a company. Although I will notice if someone works at a specific company and I know that they're like using a tool that I work on and then they file an issue, I'll Uh, be like, okay, wait, this might need to be of some importance. But then those people I've mostly found are willing to contribute the fix and help out along the way, whereas other people are just like, do my thing, I don't want to help, see you later.

**Bridget:** Yeah, I was just going to point out that, um, at, you know, at Pivotal, we are big contributors to the open source Cloud Foundry project, and we have a commercial distribution of it, of course. And I bring that up specifically— I don't always talk about you know, that, but I bring that up specifically because we have commercial customers, I'm thinking of Allstate in particular, who they wanted things around the authentication and authorization module and they contributed it because they were like, we want this, we want this now, and it's open source, we'll contribute it. And we were like, this is awesome.

**Matty:** [00:24:39] I think that's something that, and I don't want to derail this because I actually want to talk a little bit more about the maintainer thing and how that's similar and different in tying to company, but part of the shepherding enterprises through this, and that's something that companies like and Jeff and probably 3 billion others. But those people don't have hosts on the podcast, so sorry, we're not going to talk about you. Can help do, right? Again, it goes back to variations on the 5 Qs or 5 Ys or whatever you call them, which is the, wait a minute, is there— hey, could you do this? And I'm not going to— it's called 5 Qs or 5 Ys. It's not called say PR is welcome 5 times, right? It's like maybe that's where we get to is you can help. Maybe that's where we end up. But to start to guide down that road, that's probably something that could really help people become a little more self-sufficient in bringing stuff in.

**Bridget:** Well, and I suspect even inside an organization, when technical decisions are being made inside larger organizations, these aren't things where somebody is like, pull request accepted, and you're like, okay, fully formed feature. I mean, pull requests are not accepted for a fully formed feature that came out of nowhere that no one discussed. A giant technical change inside an organization, I imagine, is— I don't know if you can address, like, how, uh, how much of a fait accompli can people get away with inside large companies? I guess that's what I'm wondering.

**Bryan:** [00:25:56] So, yeah, um, I'm gonna weave through this one. And so there is this concept of intersourcing that a lot of bigger companies have, which is basically like open source to us and no one else. And the reason this exists— and there's actually really good reasons this exists, especially if you're in a specialized vertical like a bank. There are certain things that banks do in certain ways at certain companies, and you really don't need to share this. I'm sure Google has the same thing. There's projects that span the whole org, but they don't need to share it outside the org because it really either doesn't make good lawyer sense or just doesn't make sense because it's not very well-formed if you don't have all the information. We get them actually in the projects that I work on. We use GitHub internally and I get pull requests all the time. I don't take all of them because sometimes I say, you know, you didn't look at our roadmap, or, or this is just not good.

**Jessie:** But I love it.

**Bridget:** That's like, close. This is just not good. Close.

**Bryan:** [00:27:01] Jesse's like, you know what, I wouldn't write that. I wouldn't write that, um, because, uh, using—

**Bridget:** you would think it—

**Bryan:** no, because using just like that is horrible English, I would just say this is not good and then close it.

**Matty:** I like how Brian like runs his like PR comments through Grammarly before, you know, it's like—

**Bryan:** but no, it's a hard thing. And really, when someone— it goes back to this whole thing that we're all archaeologists, you know, we're all Indiana Joneses, you know, however you want to look at that.

**Bridget:** Archaeological surveys that we're trying to carry out.

**Bryan:** Yeah, I can't even say that word.

**Bridget:** It's an impossible word.

**Bryan:** And really, when people are giving you feedback or pushing on you really hard internally, it's because they have someone else prodding them with a fork as well. So that was actually part of what my talk was about, is that we need to realize that things that happen happen for a reason. And even though we might not be able to see the reason, we still have to say, hey, you know, I feel for you, and we're going to try to do the best thing. So in many— most cases, My particular group, we don't, we do get those, but not a lot. And the reason we do is because we are central to the whole entire organization, all of our lines of business, and everyone touches our software. But generally, they just tell us and we hop on it. But it's not like open source because at the end of the day, if somebody's a jerk, I'll just go talk to their VP. And that will just, you know, we'll go tell on them.

**Matty:** [00:28:29] Interesting. Like I call it, you called it intersourcing and that might be the right term. Like I've been calling that closed door open source, which is a little more of like running your internal project.

**Bryan:** That's way more syllables.

**Matty:** It is. It is. But, and it's also not just like, but it's like I've been working with customers on like running their internal projects like an open source project because like so many things like we do in this industry where we decide that we have to go create a thing and we're like, guess what? Somebody already figured this out like a long time ago. It's the same thing. We want to figure out how to do collaborative coding. Guess what? Open source already solved every single problem you have, so stop trying to invent it, vendors. The thing too is like when you're saying going back to the why, and that's really, that's ultimately the empathy, right? And you're gonna find that from asking the questions, which is to go back to what's the driver back there? This is like 3 people above you that are yelling at you, and by the time it came all the way down, the actual crux of the message might have gotten lost. You know, and all you know is my boss is mad at me. And we get this a lot when we're helping people is they're like, well, all I know is my manager said this was a requirement that had to be done and that's what I'm going to do. And then like you said, well, then what you can do there is you can say, okay, well, I'm going to go around and go talk to your manager because maybe there's a lost in translation thing that happened or not like a go above you and get you in trouble, but it's like, cool. Okay. You're doing what you're empowered to do.

**Bryan:** [00:29:49] Right. And I reserve that for extreme cases. Generally, I would just go talk to the person, call them on the phone, and say, hey, we are both people. We're both trying to get things done here. Let's work something out. There's no reason to escalate it to the point where people's feelings are getting hurt.

**Matty:** I think that's an important thing. By no means was I trying to say like an escalating, like calling to get in trouble, but more of the, they're getting some kind of pressure from above, and you might be able to be in a place to help alleviate that. To say, like, I totally understand that this is what your manager has told you is what's required. It's not. So anyway, when you think about— so, Jesse, like the same thing, you've talked about these disability to incent. So what are some of the things that you could think about that might be a little more positive incentives that someone, maybe not that's running a giant like the level that you're talking about. But a lot of us are, I sort of say us, but a lot of people are kind of dealing with much smaller open source projects that they maintain and they probably just encounter similar challenges, just not at that scale. But then that gives them a lot less impetus to be able to do stuff, right? Like kind of getting a +1 on a pull request to Docker is like almost to some people might be the virtue is its own reward, right? You know, but just helping somebody else out there, like, I have to get something out of it. So, like, what would be your advice to smaller maintainers?

**Jessie:** [00:31:19] I think, like, giving people responsibility actually goes a long way. So, like, I know it's not, like, a monetary value. Like, there are a bunch of, like, small programs that people are kind of running to give people money for pull requests, but that's kind of for very large changes. But, you know, kind of incentivizing, like, you contribute to this project, will give you more access to, you know, commit rights, or you now get to code review other things, like giving people some level of power and control over the thing that they want to be involved in goes a really long way, and then it almost, like, is a gamification of trying to get up the stack to be a maintainer yourself, but, like, that will only go for people that, like, have those values kind of, because some people at the end of the day, they just like, they just really want to hear like thanks or, you know, some level of recognition for what they did, I guess.

**Bridget:** I love that. And I think this is actually the perfect moment for— we have just gotten Andrew Clay Shafer walking onto stage, joining the podcast in medias res. And hello, does his mic work?

**Matty:** [00:32:37] I was kidding about cutting Andrew's mic.

**Bridget:** If you want to just give him a mic, we'll get it sorted out. Thank you. So Jesse was just telling us that— Jesse was just sharing with us, I think, a really important insight. People need to feel like they have some amount of control over their environment. They need to feel like they're going to have input into things that affect their lives. And if they don't have input into things that affect their lives, if they feel like they're constantly at the mercy of other people's whims, they don't have the incentive to play along with whatever it is you want them to do. So that brings Andrew up to what we were just discussing.

**Andrew:** Well, hello.

**Bryan:** It works now.

**Bridget:** And Andrew, please introduce yourself and then tell us what you think of that.

**Andrew:** I'm Andrew Clay Shafer. A villager, not a werewolf.

**Bridget:** Andrew has just joined us because he's playing werewolf in another room, but we figured he would just come crash the podcast because why not?

**Matty:** [00:33:42] I'm here.

**Andrew:** I'm just here so I don't get fined.

**Bryan:** Excellent.

**Bridget:** So tell us, what do you think about arranging incentives inside an organization and/or an open source project?

**Andrew:** Well, I was listening to Jesse Stoffel response as I was walking up towards the stage. And I was reflecting, and there's been other discussions about this, but open source is not always like shiny, happy people. In fact, it can be quite the opposite. And it can be really—

**Bridget:** Sometimes it's us.

**Andrew:** Yeah, it's often us. But you find this dynamic in a lot of open source projects where you've created so much value And you might have captured little or no value for yourself other than maybe some notoriety. And people are very demanding and people essentially assume that they should get enterprise-level support for your weekend efforts because they have some problem with this thing that they chose to put in production. And it gets really This is like the dark side of open source maybe, but I think that it can be really demoralizing to watch some of these dynamics or to be the one absorbing these dynamics for things that you created.

**Bridget:** [00:35:06] And I'm curious, Brian, because you work at an enterprise that has done some open sourcing of its own stuff as well as obviously uses open source, like what would you say the right way for an enterprise to consume and/or contribute to open source is? Because presumably it's not what Andrew's just describing.

**Bryan:** Oh boy, this is a good one. So how should organizations— well, so first of all, I'm going to say this is super complicated because depending on, you know, depending on who owns the project, depending on the license of the project, depending on the status of the person working on it, depending on the engagement of the manager working on it, depending on the time of the open source office of the company you have working on it, that there's a lot of variables there.

**Andrew:** And 20 more, at least.

**Bryan:** No, that's what I'm saying, is that open source in large companies is hard. And just for those of you all who are thinking, why? It's because there are certain licenses, there are certain patent attachments where if I use your open source and there's no patent indemnity, uh, you could— and you consider me using it wrong— you could actually sue me and take, you know, my IP. And yeah, you know, giving back to open source is super important, but it's a— but there's scales, you know. Um, who said it? Drake? Did Drake say there's levels to this? He did, didn't he? Uh, but there are levels to it. So, you know, I, I feel in both ways, and really I am dancing around this because I don't know if I'm authorized to talk about this, so I'm giving you the corporate response, where it's hard.

**Bridget:** [00:36:50] I actually think it's complicated is a super good answer, and I really wanted to hear what Jesse thinks of this because, hey, Jesse works at Google, which is giant and has open sourced some major stuff and also has tons and tons and tons of secret, you know, Google secret sauce in there. So like, How, you know, how do you deal with that?

**Jessie:** I personally try to stay as far away as possible from all the secret sauce just to, like, protect myself.

**Matty:** Plausible deniability.

**Andrew:** Is there secret sauce on that?

**Bridget:** I'm not eating that.

**Jessie:** I, like, have made one commit internally to the Mono repo or whatever at Google, and it was through this, like, UI-based Changemaker, and then I'm not actually sure even how it got merged or if it did. It was like a docs change to something that like was just annoying me, so I was like, I'll try this. But yeah, I really haven't done much internally. I try to like stay in my little garden of evil and niceness and then like not know the secret things so that I never mess it up.

**Matty:** [00:37:58] I think there's a whole There's a whole episode around enterprise and open source, and we did one, but by no means is it exhaustive. And what I'm getting at is we should do it again. But if you want to go find the one we've already done, it's called Operationalizing Open Source with Michael Hedgepeth and Doug Ireton. And there was a time when I could have told you the episode number, but that time was 3 years ago when I knew that much about our show.

**Bridget:** Or when we had way fewer episode numbers.

**Matty:** We did. We did. I don't want to stop this, but I want to talk a little bit about You say your thing.

**Bridget:** Please proceed, Governor.

**Andrew:** I'm not sure what I was going to say, or if I— I was going to add to some of the stuff Brian said a minute ago, which is like a lot of times there's people that want to give money to projects and there's actually no good way to do it. There's a lot of times, and that even prevents some people from adopting it because they need to have certain structure as governance, monetary indemnification, whatever, in place to adopt projects that they otherwise would. Or sometimes they also have adopted, and I don't know exactly what Brian would say from their position, but sort of a YOLO attitude towards, well, you know, we'll make this decision as devs, but it's not under the governance of the lawyers and the managers. And then that goes on to be—

**Bridget:** [00:39:24] And then someone YOLOs it out to production.

**Andrew:** Of course they do. I would be shocked if most enterprises realize what code's actually in production. For the large value of the enterprise, and I work with many of them, they have governance, they have rituals, some of them are very, very strict, and maybe they're in some sense, quote unquote, better, but most people don't really know or couldn't give you the list of all the things they have in production.

**Matty:** I have a customer whose CTO has a rule that any open source project or product or anything has to be code reviewed by him before it can be used. I guarantee that there is open source out there in their live production that he has not looked at. Well, because how is that even possible?

**Andrew:** Well, because the way you do this is if you make small changes, then you'll get like a 50-page thing about all the things you could and shouldn't do. But if you submit, you know, 10,000 lines of code and you're like, review that, and then it's going straight to prod.

**Bryan:** [00:40:31] So I will say something about this is I've only been at Capital One since last October, and I know we're getting down to our end time, but before that I did open source 100%. You know, I contributed to Terraform and I wrote a bunch of stuff in Go for DigitalOcean that Docker uses and whoever else uses. And that was interesting. But now at the big bank, we do try to know everything that goes into production. And I would say that we do a fairly good job at it. But also realizing that you're working at a company that profits a number that is so huge that any mess-up is worth what you'll make in your career. And then probably worth more than your group will make. And that's like, you know, that's like a short-term thing. So I'd rather not mess that up. So I just keep my mouth closed about these kinds of things now.

**Bridget:** And that does make sense. Like the, and this maybe is one of the differences between really small orgs and larger orgs. Like at one point I worked at a startup that was getting acquired. And one of the things I needed to do when we were getting acquired was go figure out exactly what had been yellowed out into production and what all the licenses on all of it were. And, oh, guess what? I did find a library that, unacceptable. The acquiring company was not going to acquire us if we had something that had, you know, the tendrils of all of your IP belongs to us. And we had to rip that out. Fortunately, it wasn't very big or important, but we did have to change out a library before this deal went through. And it's like, I feel like that's the kind of stuff that, you're hopefully not gonna have happen at a really large org, and maybe it does, but hopefully at a really large org, someone somewhere, some group of lawyers has looked at this stuff. But I know we're really short on time, so I wanna hear, and I think you probably wanna hear too, Stratton, so I wanna hear your take on this, but I wanna hear from all of our guests, if we're having, if we're setting up incentives, if we're, we started out talking about Getting people inside an organization to do the stuff that you want them to do, maybe not the stuff that they wanna do. How do you deal with the tech stuff and the people stuff at the same time? And we'll maybe just start with Brian and go from here.

**Bryan:** [00:42:58] So, how do I make them do the tech stuff and the people stuff? First thing is, I'm a couple things. I'm a boss. I'm a leader technically, and then I'm also an engineering manager. Those are my 3 hats. And what I try to do is I try to be the example that I want everyone else to be. So I incentivize by just being a great person and showing empathy. I know I keep on saying that, but that's how I do it. And there's no— there is no secret sauce. I'm also a 6'2, almost 200-pound Black guy. Maybe I'm a little scary to some people sometimes, and sometimes I lean on that, but rarely.

**Bridget:** I feel like that's advice that's not gonna work for me, but—

**Bryan:** or most of Minnesota.

**Matty:** Get enough sushi and tacos, you too could achieve 200 pounds.

**Bridget:** I could try, but I feel like I would never be 6 foot 2. There's many characteristics of awesomeness that Brian has achieved that I probably will not But in any case, that is a really good insight. Thank you, Brian. What do you think, Jesse? How do you get people to do the tech stuff and people stuff?

**Jessie:** [00:44:08] Yeah, touching back on something Brian said earlier about smiling, if you know me, you know I'm always smiling. And I think just being kind to people kind of makes them be kind back. Just like if you're mean to someone, they're probably gonna be mean back. So, kind of match the attitude that you want them to have with the one that you're having, and that will probably go a long way.

**Matty:** Yeah, it was interesting when I was thinking about Brian talking about being able to lead by example, and someone who is not a direct leader, like I'm not a people leader, like I'm not a line manager, thank God for anybody who has a job that I don't do that anymore. But when I think about my customers, it's more of being a coach. And so, I was thinking as it started, my first statement, one thing about Brian was going to say, well, it's hard for me to lead by example to my customers because I can't really set an example. And then think about what Jesse was saying, I'm like, I super can. And in my case, thinking about being genuine is a lot of the thing where— because it's not uncommon. I'm sure we've all had the consultant, the agile coach, whomever that comes in and is very— I don't want to say formal because formal may be what it is. They're not real, right? They're coming in, they're running a play, they're doing the thing, and you don't feel like they actually care about your transformation or that they actually care to not use words like transformation.

**Bridget:** [00:45:27] They don't have to stick around for it. They do the class and then they're gone. They don't have to stick around for the learning.

**Matty:** Right. And that's the thing. So I kind of sit there and I try to say, like, that's the thing. I try to care and be genuine and be myself and say, you know what? That might mean that I use words like rad and I don't talk about incentivization, about the paradigms or whatever all words are on Andrew's name tag. But that's because that's me, right? If I were to talk like Andrew, I wouldn't be genuine. And if Andrew were to talk like me, he wouldn't be genuine either. And he wouldn't keynote as many things either. So, I think it's like, just be real and then people will believe in you and they'll follow along. But be fake and people will smell it out like they were a 6-year-old who knows you're totally fake.

**Andrew:** So, I want to reinforce the words that Brian and Jesse said and say that you You just need to be the awesome that you want to see in the world and be that thing that you want other people to be. But I'd also want to reframe this just a little bit and say that you can't really solve these separately. That there's not really a tech and a people thing. That it's one system. And the more that you can think in terms of systems and how these inputs and outputs are connected to each other, then the better off you're going to be.

**Bridget:** [00:46:36] And I think that's fantastic. And that's actually when I kept saying tech and people, let's talk about those. That's where I was hoping we would go. So thank you so much to our guests. This has been, I think, a great discussion. And I really love doing these at conferences because we get a room full of people who they wanted to see our guests interact with each other. So yay.

**Matty:** We hope that's why you were here, 'cause if you weren't, then you're terribly, terribly disappointed right now.

**Bryan:** Awesome. All right.

**Matty:** Yeah. So, yeah, you can head on over to arresteddevops.com/devopsdaysminneapolis2017. For this episode's show notes, we'll make sure that there's links to Brian and Jesse's talks in there and probably some other stuff maybe if we write it. You can subscribe to our newsletter there. We used to have merchandise, but we don't really anymore. If you really want a sticker, tweet me and we'll figure it out. And, but if you also go to the iTunes Store and search for Arrested DevOps, leave us a review. That really helps other people find us. We're not just trying to get lots of stars. And yeah, so then people can listen to the show and hopefully think it's cool.

**Bridget:** [00:47:45] Awesome. So, thanks so much to Brian and Jesse and Andrew for joining us. Yeah.

**Bryan:** Thanks. Thank you.

**Andrew:** Thank you.

**Jessie:** Thanks.

**Matty:** Thanks, Bridget.

**Bridget:** All right, uh, and for the podcast purposes, we'll finish with, I'm Bridget at Bridget Cromwell.

**Matty:** I'm Matt at Matt Stratton.

**Bridget:** We're Arrested DevOps, and remember, there's always DevOps in the banana stand.
