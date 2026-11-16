# Marketing Ships to Production with Stephan Schmidt and Tanya Higgins

[00:00:00]

**Matty:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and optimize your team and organization for maximum DevOps awesomeness. I'm Matty Stratton. So today we're gonna talk about, you know, with AI now we have product managers, marketing, CEOs, they're all building software and they want it in production.

I mean, there's some CEOs that are pushing directly to Vercel directly, right? And so then ops and engineering are kind of stuck between either being chief no officer or reviewing code that they didn't write, and then we also run into this scenario where nobody knows what's running where and, and who's doing the security updates.

It, it kind of reminds me of a, a thought I had at the beginning of the... When I was first learning about DevOps, you know, 15 years ago, and the first thing as an S- or as a cis admin in my head was, "In [00:01:00] DevOps, who does security patching?" So now I guess we still are talking about it. Um, so I'm joined by two great guests today who are gonna help us understand how this can work and maybe where it can't.

So, uh, hey, Stephan and Tanya, welcome to the show. Uh, Stephan, you wanna start and introduce yourselves to our... Yourself to our listeners?

**Stephan:** Yeah, sure. Hey, great to be here. Um, I'm Stephan. currently I'm a CTO coach. Um, I have been starting coding in 1981, so did it for a very long time. worked for a long time as an engineering manager and CTO, and for some years now, I'm a CTO coach helping people along the way.

**Matty:** Tanya?

**Tanya:** Awesome. Uh, thanks for having me, Matty. Uh, I'm Tanya?

I'm the design lead at Tiger Data. I've been designing in software for about 15 years. Um, and I like to say that now I am also a junior developer, uh, when it comes to this AI era, so that's why I'm here.

**Matty:** Yeah, and [00:02:00] I think maybe one of the things we'll kind of start with, 'cause, uh, a little bit of the origin story of Tanya as a junior developer and then kind of talk through where this comes in is, um, when Tanya, uh, joined us... So to, uh, I- full disclosure, Tanya and I work together, so that's why when I make that, that comment.

But, uh, when she joined us, she had built, uh, a, a pretty cool system, in her, her time between roles. And then when, when she joined and we saw it, I was like, "Well, let's bring this into this, this larger marketing application thing that we have." And we're gonna talk a little bit about why we're able to do that.

Um, so Tanya, maybe give us a little bit of a background on the brand hub thing that you had initially built, you know, and then what that has evolved into, you know.

**Tanya:** Yeah. Um, so prior to being at Tiger Data, I was at a company called Appcues for eight years, and through that entire eight years, I was the sole marketing designer, brand designer. So in that time, that was [00:03:00] pre-AI, I had to get very good at building systems And, different workflows to be able to scale myself, and that consisted with a lot of Canva templates, uh, pretty robust brand guideline that I had in a Google Doc, um, a microsite where you could go...

 I, I was hosting that and building that within a CMS, and you could go in there, you could download logos and stuff. And with all the adoption of AI and how things change, I started thinking about how I could extend myself even more. So before going to Tiger Data, I built out this brand hub that started as a, um, an AI search where you could just type in and be like, "Can you give me an icon for a database?"

And it would go through all the branded approved icons that I'd populated. Uh, it could look through any asset. And I also built out a thumbnail builder that would have, like, all of our assets pre-populated in it, and I was like, "This is great. I'm gonna use this at my next company. I'm gonna use [00:04:00] this at Tiger Data." it really took off. So I started, and Matty and me immediately brought it into Tiger Den, our internal tool, and since then it's grown so much. It's become a... We have templates now for thumbnails. We're able to do ads in there. We've a, um, an email generator in there, a email signature generator in there.

Um, it's, it's just totally grown, and adoption has been great. Now there's Claude skills for it. Um, so just really the sky's the limit, and it's made my life so much easier as a designer on a very small team to not be, um, asked for assets every single day

**Matty:** And, and just to give a little background, and then I wanna jump into, into something, uh, Stephan's talked about called Bottleneck 2.0. But we're gonna talk a little bit about, like, what enabled you to do this. So again, back for context, Tanya has not really done much software engineering before and everything like that, and we have a little...

I'll put a link in the, the show notes to this blog post I wrote that talks about some of the [00:05:00] guardrails and things we put in place, and the blog post is titled How My Coworker Who Didn't Know What CD Meant Ships to Production. And with fear- full, I had Tanya's permission to do that because it,

**Tanya:** Yes

**Matty:** that comment came from, um, when I was helping her with something and, and, uh, she had to know what directory to be in.

She's like, "Wait, how do I get back to, to this thing?" And I was like, "You do CD." And the whole idea is, again, not a, not a software engineer, you know, understand so much more about software engineering, I think, than you did before by virtue of doing this, but being able to enable for that. So, so on one hand, this is very powerful, right?

You can do this. You have the need to do this. But as I kinda talked about in the beginning of the show, you know, you have to... Once it's in production, how do you deal with that? And, and I wanna hear, Stephan, your, your thoughts on this. The one thing that Tanya has as an advantage is that her colleague is a, a 20-plus-year CIS admin with scar tissue that, you know, makes our internal marketing app have 7,000, literally 7,000 tests in [00:06:00] it, and the, uh, an entirely super robust CI/CD because I've spent how many years not trusting anybody 'cause I'm a CIS admin.

But, um, Stephan, you talked about when you're... When we were talking before the show about this idea of, you call it Bottleneck 2.0. So can you tell us a little bit about that, and then how does this... You know, we just talked about the dream. You know, "Hey, designer, push the thing." So let's talk about the challenges and, and what this brings in.

**Stephan:** So I think that the term, um, you reflected, bottleneck two point O, that refers to bottleneck one point O, which is for the last twenty years has been kind of engineering. everyone who wanted to get something in the internet or something programmed or on the website, they usually needed to get, least since agile, needed to get into some kind of backlog and then waited for some time, and then sometime heard that can't be done. And that kind of is so with AI because everything is faster. But now that everyone wants to deploy to production, [00:07:00] it's now like, okay, becau-- before we can put that into production, it needs to be reviewed, and you get into a review queue. And to s-- and to some... So there are a lot of benefits. Obviously, the person can build it on their own until they like it, but then they still need to wait.

And that's kind of what I call bottleneck two point O.

**Matty:** So when we think about non-engineers, and I'm, I'm just, again, to be very clear for everybody listening, there is no shade in that term. I'm just sort of saying people who do not, you know, have a software engineering background when it comes to that. So non-engineers shipping with AI. So like you said, we have that, that bottleneck 2.0, which is now still the same thing.

It still needs to be reviewed. You're like, "Wait a minute. I, I coded this awesome thing, and what do you mean now it's not sitting here?" So, like, this idea of these folks doing this, where does that... Where does it work effectively and, and, and w- how does it go sideways maybe, um, when it doesn't?

**Stephan:** I start with the sideways.

**Matty:** Yeah. That's the more fun part, yeah.

**Stephan:** yeah, [00:08:00] depends on if, uh, depends on whether you're responsible for it or not, uh, for the sideways. But, um, I think the sideways thing shows up mostly in, uh, in shadow apps and maintaining security. So everyone deploys somewhere they can't deploy to the production system of the company.

They deploy to Vercel, they deploy to whatever the AI thinks is a good idea to deploy to. I think that is where it goes sideways, where people... Because there is some kind of bottleneck, it just, the AI always helps you. It says, "Oh, you can't deploy to the, to the company site? Well, we can deploy it to Vercel or we can deploy it anywhere." So that, that's I think, is where it goes sideways, where the bottleneck basically pushes everyone, um, to deploy just somewhere else. And I've seen CEOs who deploy to Vercel or to CEOs who deploy wherever they like. So, so that's where I think where a lot of thing happens where... And no one knows what's running where

**Matty:** R- r- [00:09:00] exactly. And, and it's so much easier, and even it's, like you said, I kind of love what you're saying. It's bottleneck 2.0. Like, these are not new problems, they're just happening at a greater scale because in the, the early era of cloud, we had the exact same shadow IT problem, which was the, "Oh, w- okay, well, I need a server to do this.

Okay, cool. We'll rack and stack it, and you can have it in 10 weeks." And you're like, "No, I can just go slap down my credit card and spin up something in EC2, and kaboom, now I have this." And again, and IT and security has no idea what you're putting on that box, if you're leaking data, if you're doing whatever.

So it's not a new problem, but like so many things I think we see with, with AI, they're not new problems, but they're at a much larger scale because it can be done so much faster and so many more people can do it, right? It's e- exacerbating the problem. Um, so, so Tanya, sort of thinking about that, and, and, and, you know, I, we, we probably aren't gonna talk about some, you know, too many specifics that are about our, our organization, but, um, because this is not, this is not unique to us or unique to anybody.

[00:10:00] But when we, when we think about that, you know, 'cause we see stuff, like even in your case, that brand hub that you built and then we wanted to bring it in, you spun that up in your own personal GitHub. It wasn't in... I mean, first of all, it couldn't have been. You didn't work here yet. But, but you could have just as easily decided to do this, go create a repo in your own personal GitHub, put it on your own personal Vercel project and whatnot.

 and more often than not, none of this is because someone's try- you know, to your point about the bottleneck 2.0, sometimes it's not even intentionally trying to sidestep, it's just you don't know, right? You're like, "I don't know." And, and half the time you just, you know, someone's building a thing, and the agent's like, "Sure, go throw it in then Vercel."

And maybe Vercel is not what we want to use in the org, and how do you enable to that? So maybe we can talk about some things that work well that you've, you've seen, especially when we think about what we've built together. What are some of the guardrails and, and things that, that you've done? And I, I can talk about what I built, but I wanna hear what you say and your, your thought.

You're not gonna hurt my feelings either. You know, about what, what enables you to be able to do this and [00:11:00] feel confident

**Tanya:** Yeah

**Matty:** doing it according to standards?

**Tanya:** Um, I think a lot of it I had to... It was an adjustment for me to get comfortable with being uncomfortable, because I'm not going to understand absolutely everything that's happening. Like, I don't have a background in code. I'm still spending... I'd say some, some days I'm fully in terminal in Ghostty, um, doing my stuff, but most the time I'm still a designer.

So I'm still designing. I'm not gonna fully understand everything, so I had to go through the process where I'm using all of the, all the skills that we have set up, but I'm not fully understanding what it's saying back to me in terminal at all. Like, I am not sure of the process. I'm like, it, it took me time to get comfortable with that, and your guardrails and you just repeatedly supporting me and telling me, "It's okay, you are not gonna break it," is exactly what I [00:12:00] needed. and I really, I just, I can't say enough of how that helped me feel good about pushing to production. Um, 'cause that was a very scary thing for me my whole career until here

**Matty:** I think that there's a responsibility on engineering or sysadmin, whoever, the, the people who care about... You can't just say, "Do it the right way." You have to enable for that. And so often, and this is, I mean, recording episode of this show, I continually keep going back to this same old well of, like, these are all the same things that we as SREs and sysadmins and infrastructure people and ops, we've been doing this forever.

It's just, it becomes more important and maybe it's a broader scope, right? Like, everything that is built to help enable Tanya is all good CI/CD practice. All the ways that I would build a system defensively a- against humans being humans, right? But, but then it's at, at, at a higher level. Go [00:13:00] ahead, Tanya.

**Tanya:** Um, you also have to have... So you have to have the process in place, but you have to have, like, backup just in case. Like, I can't even tell you how many times I've came to Matty and said something, and he's been like, "Did you use implement issue?" And I'm like, "Oh, I forgot." So, like, there's certain things I'll forget.

So, but he has it all set up that even if I forget it, everything is okay. So there's always just, like, a backdoor of everything going to be okay, 'cause that's already been thought through. Like, all the worst-case scenarios have been thought through, so this thing is really bulletproof with me being able to push and do things

**Matty:** I wanna hear what you think about this, uh, Stephan, is I think one of the things that happens inside organizations is, is engineering and security as well, they're used to kind of not, not having to think about enablement of this stuff outside of the engineering department, right? It could be like, "Well, of course we have this.

We have the standard GitHub actions that we do," or, "This is where you put secrets. This is where you do whatever." And [00:14:00] we in engineering have not really thought about, like, how you market that and share that and communicate that outside of your department. So what are, what are the ways to, to solve for that, or what have you kinda seen about doing that?

Uh, 'cause I, I imagine that's a, a key part of unblocking that bottleneck.

**Stephan:** Yeah. Um, one thing, one mental model that helped me a lot and helps clients a lot in discussing this is we already-- the company already solved this with your phone. So you, on your phone, you run apps from people you don't know, and they are next to your banking data, and no one is worried. So why are you allowing people to run stuff on your phone but not let people run stuff on your production system? Um, and if you look into this, there are some attributes to the phone that [00:15:00] can carry over to normal development, which is, for example, app permission. if you-- usually, if someone writes some code, it can do everything. It can delete the orders, it can delete customers, it can read all the customers, it can do everything. if you model it, um, with permissions, then Tanya could write something, and it could be deployed, but her app or her module or her package does not have the rights to read all customers. And then there's no need to review the code if it does this. You just need to review the permissions. Yeah, it's just like the phone pops up, uh, "Can I read the camera?"

And I say, "Yes or no." So, uh, Tanya deploys, and someone says, "No, you can't read the order data," or something like this. So this is one thing. this, I think the sandbox of the phone is another thing. If you, if you reduce the blast radius of things and let run things into a sandbox, then also it can't do a lot of harm. So the, I think the problem [00:16:00] has been solved, um, with phones. It needs to be... The concepts need to be transferred, um, to a production environment in companies. And we see this with, like, cloud work, uh, Cloudflare Workers. We see this with, uh, Fastly Compute. They already let people deploy stuff on their systems. I think every company, um, needs to have that in mind and try to set up a-- DevOps n-might need to set up a platform like that where people can run, uh, code without harming, uh, the system.

**Matty:** Yeah, I think it keeps going back to that these are solved problems, but, but the scope of where they have to be extended to, you know, 'cause we think about things like safety too, and the idea is if we look in a blameless and a safety too concept is when something bad happens, it's not, what did Tanya do wrong?

It's wait a minute, what's wrong with the system that allowed that to happen in the first place, right? How do we build our system so you can't drop the production table,

**Stephan:** [00:17:00] Exactly

**Matty:** Because you're never gonna... Even with humans, your mistakes are gonna happen, and they're just g- the thing is with agents and stuff, they're just gonna happen faster and maybe with a larger blast radius.

But going in with a least privilege, going in... Again, we, I, I think the thing is it's not that engineering doesn't know how to do this, they're just not used to having to do it for people outside of their department,

**Stephan:** Yes

**Matty:** Like, and we're like, you know, you kinda wanna be like, "Okay, well, you were here once before as well," and also nobody on their first day in the org knows the standards, like automatically, so how do you communicate that and how do you enable it, and how do you enable it in a way that is, that is safe?

Um, so I think like Tanya, you know, we talked about, you know, you talked about how not necessarily knowing what was happening, but I also... I'm curious to th- to su- th- see through your journey of, you know, um, of understanding, you know. Like, what

are, what are some of the things you, you, you feel like you [00:18:00] understand better?

And also I'm curious about how this affects your understanding of your customers and, you know, you're in marketing and you're marketing to engineers. Has that had any influence in any way about, like, kind of thinking about these systems differently now? That was like four questions all in one, so

**Tanya:** Okay. Um, we are gonna start with question one, which is... Let's go back actually. Can you repeat to me,

**Matty:** Yeah, the first one was just like, "Hey, what are some things you understand more now about engineering and building systems and stuff that, that just..."

**Tanya:** Yeah.

**Matty:** sit down and read a book, You

**Tanya:** No, I didn't

**Matty:** yeah

**Tanya:** and read a book, but I feel like I've always been the kind of person who learns from doing it, so I feel like even if I did try to sit down and read a book, I never would've, like, fully understood it.

Like, I really needed this experience where I just do it on my own. but there's so much I've learned, and I love to also, like, challenge myself. Um, today I [00:19:00] was able to figure out how to change my theme in Ghostty without asking you Matty, and I was so happy that I figured it out, so, like, I like how it looks even more now.

We had already done it together. so there's things like that where I'm like, I'll just get, like, a random idea and be like, "Can I do this?" And I'll figure out how to do it, and then I'm so proud. Um, like when you showed me Ponysay

**Matty:** I was just gonna say that I forgot about this project. Tell,

tell this story, yeah

**Tanya:** too. Um, so he showed me Ponysay. Um, if you guys are not familiar with Ponysay, I think I'm gonna say it well, but I don't know.

Matty can recap if not. But you pretty much, it's just a command that you say in terminal, and it comes up with, like, a cute pony that says different things. So, um, I ended up taking that idea and deciding I was gonna do it with a tiger, because we work at Tiger Data. So I was able to build the entire thing on my own, and it's actually something that you can do.

We will put the link in here if you guys wanna download it. [00:20:00] Um, but there's just things like that. Like, I feel like all these fun little things about it have just, um... They've given me so much knowledge, so much understanding, and so much, like, belief in myself. I feel like demystifying engineering has been a big part of it for me.

It's just I've been exposed to it and it's been demystified for me, which has been huge. Um, and I think that also helps with one of your other questions. It's also demystified my audience, too. Like, I am marketing to engineers, and I relate to them more. I relate to the systems that they're in more. Um, I was doing this, I wasn't familiar with all, like, the terminal language.

I'd never looked in terminal. I didn't even really know what terminal looked like. So now I am working every day in the same type of programs that my customers I'm marketing to are using, which is really cool, too. So it's demystified pretty much all of this

**Matty:** I, I think [00:21:00] that that's, that's a really powerful thing that engineering can do for the rest of the org because there's... And we need to remember, you know, as engineers about how fun it is to build, right? Like, and that sort of thing. I'm sure a lot of times we'll sit there and be like, "Oh my God, now I gotta deal with this thing, but someone else did this thing," and you were like,

**Tanya:** fun

**Matty:** remember how fun that is, and

like isn't it cool to be able to enable that for other people and to get that dopamine hit of I made a thing and it's doing a thing?

And, and we all love that. So like

**Tanya:** Yeah

**Matty:** we think about, yes, to find that, that, that... But it comes with responsibility and more work, and nobody wants that. But what does engineering look like if you're thinking about hardening and tending to things that others build outside of engineering?

**Stephan:** Um, just to catch on what you said, I came into all of this 1981,

**Matty:** Yeah.

**Stephan:** uh, because I, I wanted to... And that's something I realized last year, last- after 45 years. I came into it because I was a creator. I wanted to create things. I wanted to build things. I wanted to build [00:22:00] games. I wanted to build the games in my head.

That's how I came into this. And programming and engineering was just a, a tool to do this. So I was not like, "Oh, I want to become a programmer," uh, back then. No, I wanted to create something, build something, you know? And, um, and that's how I got into this. And I think, so, so from that perspective, I think the fences around things kept creators off, like Tanya, who had ideas, who have great ideas, who want to bring them, uh, who want to create them, but were kind of kept off by the complexity of engineering and, and, and programming, all the stuff, and all the things you need- needed to do. And I think this is coming down with AI now.

**Tanya:** Yeah

**Stephan:** I think that's a great thing. And for, for your question... Oh, Tanya, sorry.

**Tanya:** Did I

**Stephan:** have a little bit of a lag. Sorry. You want to say something?

**Tanya:** that's okay. I think I just said absolutely. I was just agreeing with you. Like, absolutely, I have lots of good ideas. [00:23:00] Thank you guys for allowing me to build them now.

**Stephan:** Um

so I think, uh, a-and to your question, um, I think engineering will become more of a platform engineering environment where engineering and operations and DevOps kind of, become more of a thing, of one thing, whatever it internally structures in the future. But I think it will be much more of an e-enabling thing to create, to enable other people to create. Might be also that I have this discussion a lot with, with senior engineers and I did a roundtable lately, there was this discussion. Um, I think seniors, senior developers or engineers see themselves as creators will keep creating, and those who will s- who see themselves as engineer craftsmen might go more into this guard railing, uh, platform direction.

So it's not like everyone, every engineer g- needs to go [00:24:00] into this platform future. I think it, it kind of splits into those who want to be cr- more of creator side and those who want to more on an engineering craftsmanship side.

**Matty:** I, I think that's really interesting too when you think about, like you said, you know, everybody becomes more like, or not everybody becoming more of a platform engineer and it's, I think what this does is it takes platform engineering and it, it makes it more necessary in organizations where it might not have been as important before.

So, you know, back in, back in the day, the thing about from a marketing perspective, other places I was at, when I think about, like marketing, if your, if your solution is to market to platform engineers, you know, you're like, there's, there's not a whole lot of them out there, but they all work for places with money because you don't have the problem that requires platform engineering unless you're a large, you know, unless you've got a 10,000 person eng- And that's not 100% true.

I've had, we've had old episodes here. We had a, a, a fella on from The Farmer's Dog that does plat eng, and that makes sense. But, but now it becomes more necessary at, at, in a smaller org. But, but it, it's not... I want, [00:25:00] this is the thing that I want the engineers listening to hear is, we're not suggesting this only so you can enable folks in marketing and product and finance and whatever to build apps.

It's good for you too, because this will actually then create and say, okay, and maybe, maybe it's even the thing, like maybe you wanted to think about platfor- building a platform and doing plat eng inside your org, but it, it couldn't be justified because you're like, "Well, whatever, we've got 40 engineers here, that's it."

But you're like, you don't have 40 engineers in your company anymore. You now have three times that so you can justify doing the thing that will actually pay off for you, right? Because it will make your work easier and better. And, you know, you can unders- And the thing is, we talk about building guardrails and things like that, and they're not just there for the people who don't understand what's happening under the hood and they're trying to one-shot stuff in an agent, right?

Like, again, going back to this System Tiger Den that, that we have, like I understand that architecture intrinsically. I built it. I love the fricking guardrails [00:26:00] because the same reason that I always loved good CI/CD pre-AI because I'm like, "It makes me feel comfortable." And this is the thing to remember, the, the point of having the guardrails makes you feel confident to push to production, and you're not worried that you're gonna jack something up.

And so we have probably been saying that to each other in engineering and SRE for years, and it's like why is it any different for everybody else? Remember that trust so you're not... When we're suggesting these things, it shouldn't be taken as like the, "Ugh, well, so it makes sure that our, you know, accountant, you know, accounting team doesn't go jack up production.

I guess I gotta build guardrails." I'm like, "Well, you should do it anyway," you know? But you're gonna benefit, even yourself, even the person who built the system. I have applications, not for work, but like that I've built where I'm the sole contributor, and you better believe, even pre-AI, even more useful in AI, I have guardrails built because I'm not gonna remember every single way that I did that.

There's a reason we still, [00:27:00] we write tests for a reason. Tests are one of the best ways. This goes back to thinking about policy as code, right? Like if I used to say pre-AI, there was, as an S- as you're, if you're this SRE, you know, if you wanna... If, if, if the way something looks in production matters to you, then it should matter enough that you write a test, and then you can say, "Cool.

Developers, your stuff has to pass this test." And then they can know, "Cool, I'm not gonna get the SRE to come yell at me 'cause I did it wrong 'cause I can't." It all goes back to make the right way the easy way, and that's what we've tried to do with, with the systems that, that Tanya and I are talking about is my goal is make the right way the easy way.

I wanna make it, I always wanna make it hard to do it wrong. Like you have to try hard to do it wrong. If you're doing that, then, then you're doing something right. Um, and then I guess, uh, just thinking about,

**Stephan:** of my

**Matty:** you Stephan, is there anything... 'Cause you've talked to a lot of, or there's some different models you've, I, I know you've talked about, about thinking about it.

I love the idea of thinking about it as like an app store, [00:28:00] you know. Um, what is that kind of... When you think about if you have this idea and then where, where, you know, of course, as always on this show, there's so much to talk about and we're starting to run out of time. But I wanna think about this, this idea, like who plays app store inside a company?

We talked about if you have a plat eng team, but like where, where would somebody get started to think about this idea if they're, in their organization with something maybe they already have or are already thinking about?

**Stephan:** I think the first thing to start, which is very easy, is probably to add, uh, module permissions. of the challenges in every code base I've seen is that every code trusts all the other code. Like, you know, you can-- someone can just do a mistake. So that, that would be my first start because it already benefits your existing code.

It, and it, it builds guardrails for engineers too. It reduces, um, f-- when they use AI. So that's where I would start, to reduce the blast radius, um, get immediate [00:29:00] benefits for everyone, um, and be more confident. Um, the second thing is, I would think as engineering and as platform engineers, what would m-make me, enable me to take responsibility for running things that other people produce?

What would it take? You know, and then you say, "Okay, I would-- this would need to happen, this would need to happen." Instead of saying, "No, this can't be done," think about what would need to change or what need-- would need to be in place for you to enable it. And this kind of discussion, um, with some kind of changing mindset, I think that's the second, the cultural thing I would en-en, uh, encourage companies and, and engineers to do.

**Matty:** So taking that in account, maybe one, one last thing, uh, Tanya. As, as someone, if you're, if you have a microphone as you do right now to speak to people who might be building systems like Stephan just said, the people who are building those guardrails, what are the things that you would say to, as a consumer of them, as the [00:30:00] person that these might be be built, being built for, that people should think about that they might not think about inside maybe their engineering bubble?

**Tanya:** I would say biggest thing is more of like a personal thing. Like be kind and be understanding to the people that you're building it to, 'cause they're very nervous. So there's just been so many times that I've had a question or I've forgotten to do something and Matty has been so kind and reassured me, "You're totally fine.

You're doing great. You're doing awesome." I cannot say enough how much that has empowered me. So I would say, yeah, it's definitely a personal thing. Just, um, be kind to the people who are gonna be using your systems. Um, they're very nervous. They don't wanna break anything. They have had a whole career of being told that they couldn't do it. so be nice and support them

**Matty:** Apply some of that DevOps empathy that [00:31:00] we're so fond of. You know, we've spent the last, you know, 15 years or whatever talking about how devs have to have empathy for ops, ops have to have empathy for devs. It's the same thing, so keep that in mind.

**Tanya:** Have empathy for the designers who are just trying to build things too now

**Matty:** I, I will tell you one thing is when you have a designer able to ship your stuff with production, your stuff looks a lot prettier and cooler,

**Tanya:** yeah. We're having

**Matty:** I am... I can build an app, I cannot build a UX, as Tanya can attest. And, and, uh, our, our app looks so much, so much nicer now.

**Tanya:** Oh Yeah.

**Matty:** and Stephan, just any last, uh, uh, last bits of advice you would have for folks who are thinking about this?

**Stephan:** Do it

**Matty:** Just go do it. Just go make something happen. Yep. Yep, you can't... Yep. So that is great. this has been awesome. I, I love having this topic. Um, if you go to arresteddevops.com/marketingshipstoproduction, that will have this episode show notes. We'll, we'll put in some, some links. We'll put in a link to the Tigersay repo, so if you wanna give Tigersay a, a, [00:32:00] a play around, it's a...

 the, uh, genealogy or whatever of that is actually starts... there's a command, uh, a tool called CowSay. So it started with you pipe text to it, and it draws an ASCII cow speaking that text, and then Ponysay does, like, a My Little Pony, and then Tanya turned it into Tigersay.

**Tanya:** I took the pretty one and made that one into tiger

**Matty:** yes, As it evolved, we evolved through, and I think, uh, Stephan, I think there's some, some great resources that you've created, which we'll also put links to in, in the show notes as people want to go through this. And, um, as always, you can subscribe to Arrested DevOps, and listen to us, and watch us in pretty much every place that fine and less fine podcasts can be found, and we've got links to all that stuff at arresteddevops.com/subscribe.

So as, as the kids like to say, you know, like and subscribe, you know. We've, we've got a lot going on. So thank you, uh, Stephan and Tanya for joining me today. This has been awesome.

**Tanya:** Oh,

**Matty:** Oh, special bonus for people watching this on video. The most adorable [00:33:00] puppy ever. Oh my God, what is the dog's name?

**Stephan:** Uh, h- her name is, uh, Dorothy, named after the Golden Girls character.

**Matty:** Oh

**Stephan:** you know that one, but so

**Tanya:** Dorothy.

**Matty:** That is perfect. I can't think of a better way to go out on the show. Though this has been Arrested DevOps, and remember, there is always DevOps

**Tanya:** In the banana stand.

**Stephan:** In the banana stand

**Matty:** Amazing
