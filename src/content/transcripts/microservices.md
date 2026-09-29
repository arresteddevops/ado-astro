**Bridget:** [00:00:00] Hey, I think I need some microservices. What kind of advice would you give them?

**Daphne:** Don't.

**Matty:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matt Stratton, and my co-host today is Bridget Kromhout.

**Bridget:** And I'm really excited about this podcast, possibly because it's our last live podcast of the day. As it turns out, when you decide to do 6 live podcasts in a row, you get a little slap-happy, a little punch-drunk by the end of that. This may be the zaniest episode. Well, well, nothing's going to out-zany Cantrell and Schaefer in the first episode. So you'll have to— if you weren't in the room for that one, listen to that one. And see that as zany as we get here, we will not be shaking the platform, I hope.

**Matty:** [00:01:01] So, also, the show notes for this episode can be found at arresteddevops.com/microservices. And before we get started, a word from the people that pay the bills. Arrested DevOps is brought to you by Tenth Magnitude, a company that figures if you're listening to this podcast, you must be pretty cool. Tenth Magnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/10thmagnitude.

**Bridget:** This episode is brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 120 common infrastructure tools such as Chef, Docker, and AWS. So that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog.

**Matty:** [00:02:04] This episode is sponsored by VictorOps. Built for modern incident management, VictorOps provides a unified platform for real-time alerting, collaboration, and documentation. Driven by your IT and DevOps system data, VictorOps helps you to respond to incidents more effectively so you can minimize downtime and make being on call suck less. Visit arresteddevops.com/victorops to schedule a demo or start your trial. Mention you heard about VictorOps on Arrested DevOps, and you'll be eligible for some sweet discounts too.

**Bridget:** So, panel on microservices. First up, Kenny Bastani. Kenny, tell us a little bit about yourself.

**Kenny:** I'm a Spring Developer Advocate at Pivotal. I'm on Bridget's team. We work for Andrew Clay Shafer.

**Bridget:** Is that the most defining characteristic about yourself?

**Kenny:** I feel like it's relevant.

**Matty:** It seems consistent with most people who do.

**Bridget:** Okay. We'll talk about you and your work in your talk in a little more detail here. But I also want to introduce our other panelist, Daphne Chong.

**Daphne:** [00:03:12] Hello.

**Bridget:** Daphne, tell us a little about yourself.

**Daphne:** I am a software engineer at Amazon. I'm a software engineer at Amazon. And I've actually sort of lived in the UK, US, and Australia. And I've just done a talk here about video transcoding at the ABC in Australia, which we'll cover as well.

**Bridget:** Excitement, adventure. And your talk about transcoding, you used microservices to do this, right?

**Daphne:** We did. We kind of split up, consciously split up a bunch of things into different small tasks that could be farmed out.

**Bridget:** Absolutely. So, okay, a bunch of small tasks that can be farmed out. Maybe that's a good place to start. Would you like to define, Daphne, for our listeners, what the heck is microservices anyway?

**Daphne:** See, I actually feel like I wanna throw this at Kenny.

**Bridget:** I know Kenny has opinions. I just want, like, your one-liner of microservices. Why?

**Daphne:** [00:04:15] OK, so for me, splitting things into a small tackleable chunk of work, it makes sense because you can rearrange those pieces if you want to. You can add extra pieces and not really affect other things if you want to. It's kind of neat. You can take things— if you need to deploy a new piece, you're not actually deploying a giant part of your system. So for us, for all those reasons, particularly the scalability for transcoding for our system, we scale one part of our system much more than everything else. And that's the primary reason why we picked microservices.

**Matty:** What's really the difference between microservices and just SOA anyway? Services. What's the difference between a microservice and a service?

**Bridget:** Okay, so then we're getting to the definition stuff. We've heard why, and let's hear some what from Kenny. What is a microservice?

**Kenny:** What is a microservice? So a microservice, well, recently I've been doing research into continuous delivery. And so I had the same definition that everybody else had for microservices for a while. Today, I'm kind of looking at it in terms of delivery pipeline, right? So if you have a delivery pipeline, just one of them, and you're sharing it with a bunch of other people, you're technically taking public transportation to production because you're gonna have to batch together a bunch of changes. In order to deploy. And so when you have a bunch of people who are working on one application together— let's say you have 500 engineers working on a monolithic application— it's not so efficient to batch all those changes together and send them to production. That causes a bunch of problems. So splitting that out into a bunch of different delivery pipelines allows people to move faster, commit changes individually and independently.

**Matty:** [00:06:04] So I'm still trying to understand how this is different than when we just talked about service-oriented architecture and just having actual services like 10 years ago. And we— I mean, from what I've heard so far, I have— I'm not hearing anything different than we were doing when I was working at a dot-com. And we had a mail service and we had a lead conversion service that the applications consumed through an API. So, and those things were released by a different feature team through a different— wasn't continuous delivery, but it was still released, versioned APIs, things like that. So like, what's Again, I'm just trying to see what makes them micro.

**Kenny:** We're really bad at naming things, I think.

**Bridget:** Okay.

**Matty:** But just, okay, what makes them different than just a service that's really— or were those things microservices and we just didn't call them that?

**Kenny:** Well, I think there's a whole process behind it. So you're organizing small teams around business capabilities. You get independent deployability of the service. There's a decomposition strategy there. There's a lot of patterns that come into play with microservices. And so it's not quite SOA. It's like a— someone said this today. It's like a better SOA. And it is, right? It adds on top of things. But there's this idea that you have a very small team of developers. And if that team gets too big, like if it takes longer than a day for a new engineer to ramp up on a service, then it probably should be 2 different services.

**Bridget:** [00:07:26] See, I would probably, from the operator point of view of having been on the blunt end of the pager for microservices, I would say that if you're— If your service does enough things that you can't have like a check that says, is this working? If the answer is, well, I mean, some of it's working, then you probably have more stuff crammed into that service than is reasonable if you wanna call it micro.

**Kenny:** Sure, yeah, absolutely.

**Bridget:** Your talk today, and you both gave talks today in the microservices track, right? So I guess starting with Kenny, I'd like to hear just the TL;DR for people who weren't in the room for your talk. And what your main takeaways were. And then spoiler alert, I'm going to ask you the same question.

**Kenny:** So what I thought was really interesting, somebody got access to a management endpoint in one of my demos. I had 10 microservices and they crashed my application over an iPhone.

**Bridget:** That is amazing.

**Kenny:** So now I have to start being an ops person for my own demo. That's scary.

**Bridget:** [00:08:31] Is it like they could see your IP address and you didn't have any security on it?

**Kenny:** They need the Cloud Foundry management endpoint for a Spring Boot app. Got to it.

**Matty:** So other than that, someone thought they were at DEF CON and not GOTO. Yeah, yeah, yeah.

**Bridget:** That actually sounds hilarious because you can tell stories around that.

**Kenny:** Yeah, yeah, it's kind of funny. It's a good lesson. But other than that, I talked about event-driven microservices. So some of the patterns you might want to use for building an event-driven microservice where you're solving the problem of having connected data across all of these different microservices and you want to make sure that you maintain integrity between these foreign key relationships that connect these things together. And so you use events to do that, pass events between different microservices, then you can maintain that data model.

**Bridget:** When people are making the decision that they, say, want to do that, what are some of the motivating factors? Because presumably people make choices like what you just described for a reason. What are some of the motivating factors?

**Kenny:** Well, so if you have a large monolithic application with a large shared database and you have a lot of complexity, in your schema and you want to tear that apart, the idea of using events is that you're going to be able to maintain across this large microservice architecture the integrity between these relationships. Really, it's just this idea of splitting up these foreign key relationships. How do I maintain that constraint in a distributed system?

**Bridget:** [00:09:54] Yeah, so we're starting to get into how you build distributed systems that are a little bit— let's not call them failure-proof, but a little bit more fault tolerant.

**Kenny:** We'd hope so. Maybe the word is resilient.

**Bridget:** Ooh, resilient. Build for resilience. I like it. All right, so Daphne, tell us, tell us about your talk and whether or not, you know, you would characterize what you're building in similar terms.

**Matty:** And if anybody crashed your demo.

**Daphne:** No, no, no demo.

**Matty:** Oh, well, that's one way to approach it, right? Just record your demo and just show it, and then it can't be crashed.

**Daphne:** Yeah. No demo. My talk was a case study on the ABC and how we built a new video transcoding system. And the microservices thing actually sort of tended by accident really. But we knew we wanted to scale a very particular part of this system. So that lent itself really nicely to being a separate thing that we could do and everything else kind of came out from that. So yeah, actually a super fun and really interesting system to work on. I learned a whole lot about video transcoding.

**Bridget:** [00:11:08] And see, I've done a little bit of stuff with my previous employer in the video realm. And what you just said is spot on about how you have one specific piece that you really need to scale up a lot, maybe not all the time, but some of the time you need that particular part of the pipeline to be massively oversized and then maybe shrink. Can you talk a little bit about how microservices played into your ability to scale it up and/or down as necessary? Yeah, sure.

**Daphne:** I guess it let us make sure— made sure that we could build this thing, the transcoding section of it, in a very constant— so we didn't have any nuts, bolts, anything extra that we needed to worry about that was going to take down that service. Literally, the only thing that this did was to get a JSON packet that had a bunch of information in it, file I need to transcode, where should I save the output.

**Bridget:** And that's kind of what it did. I should probably ask for the members of the audience and the members of our podcast audience who don't know what transcoding is, what exactly is transcoding?

**Daphne:** [00:12:17] Basically converting a video or an audio file from one format to another. And we needed to do this in a very large way over all of our catalog at the ABC. So we built this system to help us handle that because we have some particular requirements that weren't easily met by commercial transcoders or even even things like Elastic Transcoder that are available through AWS. We actually had a couple of things that we really wanted to do ourselves. And so we have this system that takes a bunch of different video input files and transcodes them, and we get this standard set of files as output. And as Bridget mentioned, the part that's scaling is like, we don't know how many video files are gonna get put in. So we need to be able to scale that whenever somebody dumps a large number of files in. We want to transcode them quickly, and that's the bit in our system that scales. So for us, you know, it was really good to be able to just separate that out, put it all in its own system. We could put that particular part of the, that particular service on a larger instance type in AWS that was much better suited to transcoding. And all the costs that we're paying for that instance is, we know that's 100% going towards transcoding. It's not just there to help run connections to the database or whatever, right? It's literally CPU power just for transcoding.

**Matty:** [00:13:56] That's a really interesting way of thinking about the advantage of microservice too, right? Is showback or, chargeback or anything like that, what does this piece actually cost? Because you're saying, okay, this compute is literally for this one task, right? So that's pretty intriguing.

**Bridget:** But then you're also, what you're describing there, you're talking about something that does introduce a certain amount of complexity. Because if you built a monolith and ran it on one large node, there's a lot of complexity that you wouldn't have that you've now introduced by spreading it out over a bunch of different nodes and a bunch of different services. Can you talk about what that experience is like?

**Daphne:** Yeah, so I think you just move the complexity. Because there's always complexity everywhere.

**Bridget:** I'm laughing because I've quoted Tim Gross, who is in the audience, on what he calls it conservation of complexity.

**Daphne:** [00:14:58] You've got the logic either in this monolith that you've got here, or you can distribute it across different services. Those services, when they're independently deployed, they're kind of pretty stable. They don't tend to change much once you've built them. And it's easy for you to add new pieces in where you've got And you, for example, we want to add captioning extraction as part of our video transcoding. That's a very clear new service that's going to sit there and not affect any of the other ones. The complexity that we have now is just coordinating which services get called at which points.

**Bridget:** That makes a lot of sense. But Kenny, when you're talking about some of the architectural implications of starting to build things like this, from a practical standpoint, when somebody says, hey, I think I need some microservices, what kind of advice would you give them?

**Matty:** Don't rub some microservices on it.

**Kenny:** [00:16:00] My friend and colleague Matt Stein likes to say that microservices aren't the solution, right? It's you already have a problem and you want to either get faster or you want to gain scale some way. I really liked Daphne's use case. It was a really fascinating talk because there was a lot of research into how AWS scales, especially from the cost perspective. That cost analysis was really interesting because you had more of a data processing, like a batch processing use case, something that you might use the term data microservice for. And I thought that was really fascinating. But yeah, don't just rub microservices on it.

**Bridget:** So I have actually been in an open space at an Agile conference, of all places, where someone said, Our VP says we should get microservices this quarter. Help. And I was like, what are you trying to accomplish?

**Matty:** Well, you can do, our VP said we need to get fill in the blank this quarter, right? Needs to get cloud, needs containers, needs DevOps, right? But that's the point, right? Which is the, and we've sort of always made the joke, and I'm trying to remember which episode earlier someone made a comment where it's, you know, people do cloud because someone read an article in a magazine. And we say our podcast is for people who work for people who probably read about DevOps in an in-flight magazine.

**Bridget:** [00:17:22] Yeah, I was going to say in-flight magazine or maybe a magazine in the airline lounge.

**Matty:** Right. So I think that's a good point, right? Which is— and the way we would answer that, right, where if someone says— and I joked in an earlier episode and said, people say, what's your story? And I say, what's your container strategy? And they say, our strategy is to have a strategy. Right? So, like, just having microservices for the sake of it, having the cloud for the sake because I've heard of it, right? Like, so not only is it not a solution, it's not even like a thing to have, right? It's like a tool in your belt. Is that maybe a fair statement?

**Kenny:** Yeah, sure. You want to take that one?

**Daphne:** Uh, no, I'm still going to defend. I'm eating my cookie.

**Matty:** Okay, fair enough.

**Kenny:** Yeah, so I think you really have to look at— you have to have some data first. And not just data database. You need to understand what's the pattern of behavior for how you're delivering software. And if things are— I like to put it this way. How much unchanged code are you deploying per deployment? Look at that. That's a good starting point. And start to understand how the growing unchanged code that you're deploying every week or every quarter, or if you're doing continuous delivery with a monolith, every 11.6 seconds. But look at that, use that as data to understand how can I go faster, how can I reduce friction, and then start to maybe think about how do I design microservices around this.

**Matty:** [00:18:51] And you said how can I go faster, and the question I would also ask is do you need to go faster? Or maybe you're already going fast enough. Great question, right? You know, because that's the thing, going It's not always— sometimes you may be going as fast as you need to go. Exactly. Right?

**Daphne:** I like the point about unchanged code, though, because it's risk. When you're deploying new— everything you deploy, there's a chance it might go wrong. If you're only changing a very small thing, yeah, you're bounding your risk is a much smaller—

**Matty:** Yeah, you're minimizing your blast radius. You're minimizing your risk surface. I think that's a factor. Like, again, we would tend to think about like, oh, well, this, you know, like the first place people go is, well, this will help us make us go faster. And first you say, do you need to go faster? But then there's the other piece, like Daphne reiterated, which is like, okay, this isn't necessarily going to help us go faster, but it's going to mitigate risk, right? That's valuable, right?

**Bridget:** I also maybe want to pick apart the Is it that you're doing a giant deployment of your monolith and you didn't need to deploy all of that because most of it didn't change? I mean, that's one definition of deploying without many changes to the code. And at that point, you would say, like, maybe you just need to be deploying a small microservice instead of that whole monolith that didn't change anyway. But there's also the, if you, are trying to make changes, there are often, I think, follow-on effects and side effects that you didn't anticipate that come from that change in the code base that didn't touch any other part of the code base, but other— there were hidden dependencies. And I think maybe that's one of the possible strengths of microservices. And I'd like to hear from— and I know what I've seen, but I'd like to hear from your experiences and your point of view. When people are trying to define the interactions and maybe they're— these pieces of the code only talk to each other via an API, maybe something is dipping into the same session store or the same database and it probably shouldn't be. Like, talk a little bit about your experience with that.

**Kenny:** [00:21:03] Shared resources? Yeah. Yeah, shared resources, I think overall is a good reason to start thinking about either moving to microservices or moving to maybe serverless. But I like to look at it like this. Now, as your monolith grows, right, you have more people working on it, your unchanged code per deploy grows. Now, when you look at a healthy microservice architecture, that number goes down dramatically. And so it correlates. So a healthy microservice architecture is going to minimize that unchanged code per deploy. At least that's my assumption. I want to do the research, actually. I'm trying to mine GitHub right now, but it's tough because no enterprise in their right mind is going to put their stuff on GitHub. But I'm interested in running the math on that. Is this the next book, Kenny? Maybe a blog post. No, I don't think I'll write another book.

**Bridget:** Tell us, by the way, about your book.

**Kenny:** So Josh Long and I, also on our team at Pivotal, spent 2 years writing a book called Cloud Native Java. Which is all about building cloud-native applications and microservices using Spring Boot, Spring Cloud, and Cloud Foundry. And it's been a labor of love and hate, a little bit of hate. But it's a good book. And Josh and I worked very hard on it. And we're excited for it. It already went to press. So it's going to be printed. And we're super excited.

**Bridget:** [00:22:26] That is exciting. So when do you get an actual copy of the book to hold in your hands?

**Kenny:** A timeline. I should get one at the beginning of June.

**Bridget:** That is awesome. Yeah, I love it.

**Matty:** Okay, so the book will probably be available by when we release this podcast. We'll put a link in the show notes to where people can buy it.

**Bridget:** We will put a link in the show notes regardless because, you know, early release, right? Um, that's not scary though.

**Matty:** Well, you're done, so it's fine. Yeah, the early, the early release one, it's not when you're in progress.

**Bridget:** Yeah, yeah, yeah, yeah. So, Daphne, from what Kenny is describing there, like the breaking apart of the monolith, I'm wondering what was the journey at ABC to go to microservices? And is that something that you can address at all?

**Daphne:** I think that sounds like a very formal process, the journey to microservices, than it actually kind of was because it actually It was a very small team. And it was like an average of about 3 people over the course of the thing. And it kind of makes a lot of sense in that to, one person knows a lot about X and writes something about X and one person knows a lot about Y. Kind of the team lent itself to building little pieces of it individually and that's, kind of how we ended up with a bunch of our small services. So, I don't think it was a— the thing that probably drove us the most was actually that whole scale question and optimizing for that. So, the rest of it fell out organically from that, I'd say. It wasn't a thing we analyzed and planned and thought about. It was just that if we wanna use AWS and we wanna scale, but we didn't really, you know, don't need the rest of these pieces to be on the same thing.

**Bridget:** [00:24:23] Let's build them separately. That makes a lot of sense, and that's a very positive, happy journey to microservices story. I feel like I've seen the pathological version play out at companies that shall remain nameless. Draw a veil of anonymity, the anonymous veil across possible customers and/or former employers, but I think, I feel like it's possible for there to be kind of a Conway's Law sort of problem there where people want the independent deployable thing just so that they can do their own thing and not listen to or interact with or be burdened by or governed by the processes or choices of another team. And I've seen this play out on enough fields of battle now where I'm like, this seems to happen a lot. Like, what can either of you say about that?

**Kenny:** I think you just made a point in the question.

**Bridget:** I did, but I think I'm wondering— it's a great point— what you've seen about people, I don't know, weaponizing microservices for evil.

**Kenny:** [00:25:25] Oh, they're already weapons. I think there needs to be responsibility in the way that microservice teams deliver. You have to have empathy for the services that you're consuming, and you're also producing a service. So there is empathy there because each team is going to build an API. Well, if you're building a web application-based microservice, each team is going to produce an API and they're going to consume other APIs. And there's a testing strategy called consumer-driven contract testing, which allows you to publish a contract of your service, and then other services can implement unit tests or integration tests against a mocked version of that stuff. So that's, I think, a really interesting thing because then you can't really progress. You can't really go to production unless you pass all of those consumer tests. And that causes the other teams to come— for you to go to the other teams instead of the teams to come to you, which is, I think, a good way to prevent evil.

**Matty:** [00:26:25] I think you also see Conway's Law come in the inverse, and I've had this at organizations where I've been where the use of services or things like this were impeded because there was such a lack of trust that it was a matter of even if you had consumer, you know, uh, the consumer-driven contract, you had these contracts, it was still like we make a change to the front end to go from hunter green to forest green and we have to test the whole website all the way to the data warehouse. Yeah, because nobody trusted the contracts, right? So it's like then what's the point of, of having the services at that point? Because you have this paranoia that trust isn't there. So it can kind of pendulum swing either way. I think that's really interesting that you can have either— basically, no matter what, people are terrible.

**Bridget:** Yeah. But you're saying there's humans all the way down?

**Kenny:** Yeah. Make the less terrible thing easy, I guess. Yeah.

**Bridget:** So I guess I'm still really interested. I know your talk wasn't about Amazon. And I am sure that you probably don't have many Amazon specific things that you're gonna tell us, but I'm curious, out there in public cloud, there does appear to be, there's this big drive towards break all your stuff up into a whole bunch of teeny whatevers, do all the Lambdas, do all the serverless. And I'm wondering, like, where does, in either of your points of view, where does the drive towards breaking things down into their tiny composite, functions fit in with the microservices world? Are microservices still relevant if we're serverless and function as a service?

**Daphne:** [00:28:07] Well, you still need to deploy your serverless stuff, right? You're not gonna wanna put something giant onto that debuggability of all that kind of thing. I mean, I haven't done an enormous amount in terms of serverless. I've definitely played around with Lambda a bit, but I would not want to be trying to work out what was broken about my service if I was deploying the entire thing onto that. The smaller that piece is, the easier it's gonna be. And so serverless is awesome. I really love the way that that's kind of going. But like anything, it's a tool that you should wield in particular circumstances, and otherwise you're just gonna be shooting yourself in the foot.

**Bridget:** I think that that's a really good point, and it bears repeating that serverless is just another tool. I feel like every time people get excited about a tool, they want that tool to be the whole everything.

**Matty:** It's like, okay. Everything's a nail, right? You know, it's—

**Bridget:** [00:29:11] Everything's a nail if all you have is a PHP hammer. Yeah. What do you think about the, whatever the intersection between serverless and microservices might be, Kenny?

**Kenny:** Yeah, so I'm working on some research, which is looking at Lambda and looking at how it binds you to these event sources, which are really driving up service consumption and locking you into AWS. Not that that's a bad thing for AWS, but I think that there's a strategy here where you can use a Spring Boot microservice and you can use that as an event source. So you can use things like event sourcing, CQRS, And you can connect in Lambda functions that are basically event handlers. And so you can begin to build business logic on the edge of that microservice, and you can have events that are fired off to these serverless functions and communicate back with the microservice instead of using the other services available from AWS Lambda. That's, I don't know of anybody using that in production, but it sounds like it might be a good way to go.

**Matty:** [00:30:13] Sounds like something Bridget would do.

**Bridget:** Yeah, I resemble that remark. I'm full of questions about this, probably because I haven't done a lot of serverless stuff myself. But I feel like between the ill-named serverless and the let's break things down, but break them down exactly in the right way, there is a very interesting story there. There's kind of an architectural revolution going on there. That, congratulations, you two are on the forefront of. And I wonder, because you're in there talking to so many enterprises, Matt, you're talking to so many enterprise customers, I'm curious if you can tell us from the enterprise trenches, how many of them are starting to have these discussions?

**Matty:** About serverless versus microservices, or—

**Bridget:** Or the relationship between the two, or—

**Matty:** I mean, Enterprise moves slow, right? And that's totally fine. Little pieces of that move faster, which is great. Um, I barely am seeing the surface scratching around serverless, right? Because a lot of these companies are already in the, I'm not even sure that I want compute in Amazon. And then to abstract, you know what I mean? Like I have, the majority of my enterprise customers who are using AWS or Azure or something like that are purely using compute, right? They're not used— I mean, obviously something like S3 or whatever, but they're not using RDS, you know what I mean? They still— there's still this desire to hold on to the configuration of things. And when you start to look at stuff like serverless or any of those things, you really are what is perceived as the value is also perceived as a danger to some people, right? Which is the, now it's this black box and I don't know, and it's just some database out there in the cloud, but I'm a DBA and I wanna be able to look at it like I look at a database, like my normal Postgres database server.

**Bridget:** [00:32:22] I wanna look at my slow query log.

**Matty:** I'm comfortable with that. Right, and it's understandable. I think that's just a matter of, of— and, and that comes— I think a lot of that comes from culture of accountability, right? And what people are responsible for. I think we see more, um, it's just a matter of understanding. I think, I think there's probably a lot of let's see what happens with that. Um, I have my, my private serverless GIF that I've posted in a You guys have seen that. It's an empty data center and it says private serverless. So I— but again, we're talking about organizations that are just starting to think about what they might want to eventually do with containers. So the long tail. Yeah. And also, I wonder at the value at certain places, right? Like some of the value of things like serverless and stuff like that is like quick prototyping, right? Like being able to do something fast and new.

**Bridget:** [00:33:26] And it also makes the assumption that you are doing things that are fast and new and not just SAP, right?

**Matty:** Yeah. Or it's not heritage, right? It's not something that you're having to go in. And that's why I think we're seeing a lot of appeal for organizations who want to be able to— they don't want to have to go rewrite everything, you know. And, and that's why There's things, again, like when I think about the appeal of Habitat to some customers that are like, okay, I can get some of this value of orchestrated application stuff without having to go rewrite my app into a 12-factor app. And the same thing is true with something like serverless. I can't just go take my legacy .NET application that was running on Windows 2008 and make it serverless. You know, and that's, and that's a, that's an interesting question, the replatform versus rewrite.

**Bridget:** Like, I know you've been in some of these discussions, Kenny, like where do people draw that line?

**Kenny:** [00:34:28] Uh, well, I, I think for replatforming, there's definitely, you're in a market where competition is rough and people are moving faster because they're using the new technologies or you're being disrupted by a startup. And I think that's where the replatforming discussion comes in. And, you know, someone like the IRS, I think they want to move faster, but the replatforming is a bit more risky and it's a bit more difficult and there's not a lot of competition.

**Bridget:** And maybe for our listeners who haven't experienced this particular joy, give a quick definition of what you see replatforming as. What is it that they're doing when they're doing that?

**Kenny:** So replatforming is this idea that, I mean, no matter what, you have some kind of platform, whether you've built it yourself or whether you've bought one. It's this idea that the process of how I'm delivering software, there's some toolchain there, right? And replatforming is just modifying your applications. For instance, if you want to move to a cloud-native platform, you need a cloud-native application architecture, or you need some parts of the 12-factor methodology because that platform runs applications differently. And so that's the idea of replatforming.

**Bridget:** [00:35:32] And versus when people are trying to decide, do I just make the tweaks I need to make in order to get my application to run on this cloud platform, or do I rewrite?

**Kenny:** How do people make that determination? I guess there's a lot involved with that decision. I think it's very dependent on the situation. Just generalizing it, it's kind of tough to say, because I think it's very use case dependent.

**Bridget:** I guess what I'm curious about is, do people make that decision from a— do we want microservices or we want serverless, therefore we need to do something that will let us do that? Because I hear people talk like that and I think that cannot be what they're actually doing.

**Matty:** That means they're doing a product 100% wrong, right? So the thing is, you think about like what Marty Cagan says from a product perspective about when you look at your products, and I don't care if you sell software or not, you have products, right? And you have It's like kill, maintain, innovate. So anything that's on the kill list is this is something that we are going to retire. You are absolutely not going to rewrite or replatform that. That thing can sit on Windows NT till you're ready to unplug it from the wall. It's still that NetWare server that everybody still has sitting around somewhere. Horrible. Maintain is like this thing where you're like, it does what it's supposed to do. And again, that's also probably a candidate you're not innovating on anymore. You're saying, this is basically feature complete. This is doing everything it needs to do, and we're just going to just keep maintaining it. It's, it's, uh, GA, right?

**Bridget:** [00:37:08] We are not turning that mainframe off anytime soon, right? It doesn't even have to be a mainframe.

**Matty:** It can still be— it could be a product that you finished 3 years ago, you know, but you're just like, it does everything it was supposed to do and there's nothing new. That again is probably— if you're gonna— what's the value of replatforming or even doing rewrites on things like that? Because you're, you're just incurring new tech debt and new effort to accomplish little or nothing, because this is something you don't need to deliver faster, you don't need to scale because it's already doing what it needs to do. Then innovate are your products that are either new or there's something where you want to be able to do rapid delivery. And this is the thing that I think is challenging, is that— and this is what is— people think like, well, it's all or nothing. It's like, we're going to have high velocity, so we have high velocity everywhere. Now I am not saying bimodal IT is good. Bimodal IT is bad. Come at me, right?

**Bridget:** Bimodal IT is horseshit, right?

**Matty:** Now, now the thing is that I found interesting is if it— in a way, bimodal IT is like ITIL, which is if you break down what Gartner meant, it's actually not wrong. Everybody completely misunderstood it, right? Which was to mean that heritage does things the old-fashioned way and they suck, and cool new agile teams get to be cool and new. The reality is different teams move at different speeds, but they should be— think about it as a transmission, right? We have one transmission for all of our teams, they're just in different gears. So the thing again is, if you are— there's no— for your stuff that's herited, your stuff that's maintained, there's no need to move faster. So why are you going to do anything to try to make it be faster or even minimize risk of release? Because you're like, if we release this shit, like once every 3 months just to patch it, it's no big deal. So I'm gonna— why am I gonna incur all this stuff? So, but I think what we do is we sit there and we say, oh well, now we're microservices, so we have to go microservice all the shit, or we have to do all that. And it's like, it means that you haven't thought about your stuff like products because you're trying to make a sweeping statement about the technology in your organization rather than thinking about them like products and what their life cycle is like.

**Bridget:** [00:39:14] Yeah, that, the product lifecycle, I think is really interesting. And I want to bring it back to ABC with Daphne. And I'm assuming that not every single piece of software written at the ABC moved at exactly the same speed or, you know, innovated in exactly the same way, just because that sounds impossible. So, like, for your team, since you were obviously doing really innovative stuff, how did you come to the determination that that was the right the right speed, the right approach? Like, how did that get sold to the people who make decisions inside the organization?

**Daphne:** Oh, that's interesting. So just, I'm going to be clear as well that this is not the American ABC. This is the Australian ABC. I don't know if we've covered that part.

**Bridget:** Australian Broadcasting Corporation. Yes. Yes. Oh, sorry.

**Matty:** That was a mic drop. Yeah. Boom.

**Daphne:** I guess, you know, Development and teams are so tied together. It's really hard to say speed of development on something without knowing the people who are gonna be executing. And there are definitely different teams. I think this particular team, like all good projects, kind of secretly started a bit off-piste, under the radar, as a bit of a proof of concept. Can we actually do this? And to the point where it was like, yeah, actually this looks like it's feasible and it's gonna save us a bunch of money. Give us some time and let us do this. And that's actually how this thing kicked off. And I would say the kind of tying it back to the microservice thing is like having them as little pieces that could be deployed independently really helped us in terms of speed or execution and seeing progress and that kind of thing. That was really good. So, it is highly dependent on your people and how your organization works.

**Bridget:** [00:41:17] Yeah, and getting a whole bunch of little dopamine hits really fast is a pretty— it's a hell of a drug. Okay, we're almost out of time, so I wanna make sure that we get a chance.

**Matty:** Yes. So, my question would be, what's the one thing with regard to microservices that would be the most ridiculously stupid thing that anyone could do? Oh, man.

**Kenny:** Oh, okay. Well, if you're building a microservice architecture, a web-based market— not just a data microservices architecture, and you decide to create microservices for things that aren't driven by the business, the things that aren't changing often, that sometimes can be a problem. Or if you're creating special snowflake microservices just to support something like image filtering for one service, probably not a good idea. But I'd like to hear from Daphne on this because real-world experience on this stuff does matter.

**Daphne:** So from my perspective, probably this is one of the systems that I've worked on where things have been quite small. And I'd say a really interesting thing to come out of it was that we actually ended up using different languages for the different services. And I think a really challenging thing If your team is owning all of them or you have control over multiple of them, select some stuff that's going to be easy for the whole team to be on board with. Don't write them all in 10 different things.

**Matty:** [00:42:46] Don't write one in Ada because that seems fine.

**Daphne:** Shake, probably fine. So it's a bit of both. You can use it as an excuse like, hey, this is going to affect a tiny piece. Why wouldn't I just experiment with this and try it in a new thing? And I think that's fine as long as you don't end up with a whole collection of like 20 different things.

**Matty:** 9 and then 1.

**Daphne:** Not like, yeah, not 10 different things.

**Bridget:** Problem, there are 14 competing standards. Solution, we'll make a 15th standard.

**Kenny:** I guess one other thing that you might want to be careful of is sharing libraries. So if you have 500 microservices and you have to do dependency management for all 500, if you upgrade a library, then you're in trouble.

**Bridget:** Yeah, and even though I'm not a panelist, since I have operated microservices in anger, I'm going to definitely add to the watch out for the hidden distributed monolith because it's very easy to say we have microservices now except everything still talks to the database. We have microservices now but everything still uses the shared library. It's like you only sort of have microservices, not for the parts that are doing that. You just have a monolith that you deploy in 2 separate pieces or in separate pieces.

**Kenny:** [00:43:56] Yeah, if you have to deploy for one change, you have to deploy like Say you have 10 microservices, you have one change on one, you have to deploy 10 microservices, you've got a distributed monolith. Absolutely.

**Matty:** And with that, I think that was a good way to end. All right. So yeah, head on over to arresteddevops.com/microservices for this episode's show notes. Our website there also has links to sign up for our newsletter where you can find out about when new episodes come out. Don't subscribe to us, which you should. Also, we have cool news with DevOps that come from the newsletter.

**Bridget:** If you subscribe, you will at some point in the near to distant future get 6 episodes in very short order.

**Matty:** It depends on what you mean by very short order. Also, if you do that iTunes thing, go hunt us down in the iTunes Podcast Store, give us a review. That'll help people find the show. We're in Google Play Music. Reviews there would help people find the show. And yeah, so also we're on Twitter and we tweet. Yeah.

**Bridget:** [00:45:00] So thank you so much, Kenny and Daphne, for joining us. Thank you for having us.

**Daphne:** Thank you.

**Bridget:** Really appreciate it. This is fun. Great way to end the day. So yeah, I'm Bridget at Bridget Kromha.

**Matty:** I'm Matt at Matt Stratton.

**Bridget:** We're Arrested DevOps.

**Matty:** And remember, there's always DevOps in the banana stand. And we out.
