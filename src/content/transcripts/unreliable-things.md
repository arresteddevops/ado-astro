**Jessica:** [00:00:00] Making positive change in the world with DevOps. It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Jessica Kerr, and today I am here with Mark Hibbard, Head of Technology at Kinesis, a small company where they develop software products to help cities with climate change and useful things like that. But first, a word from our sponsors. Chef is a community of professionals practicing DevOps every day. We are making, proving, learning, and shaping the future. We are known for welcoming, encouraging, and liberating others to do the same. We do not talk about change, we do change. Join the community and learn about our solutions at chef.io. This episode is brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 120 common infrastructure tools such as Chef, Docker, and AWS so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog. The worst time to learn about incident response is during an incident. Don't wait for an outage to strike before getting started. The PagerDuty Incident Response Training Course is now open source and free for everyone at response pagerduty.com. Based on the same training that PagerDuty employees go through, this course will show you how to streamline your incident response process, turn chaos into calm, and demonstrate the role of an incident commander. So what are you waiting for? Go to response pagerduty.com today and check it out.

[00:01:59] The worst thing about the Arrested DevOps podcast is when it ends. You're left wondering what to do next. What are you going to listen to on your commute home? How do you occupy your time when walking the dog? What are you going to listen to during the quarterly all-hands meeting? But fear not, dear listener, there is a solution. You need to subscribe to Software Defined Talk right now. It's a weekly podcast that recaps all the news in cloud computing, DevOps, and enterprise software. The hosts, Cote, Matt Ray, and Brandon Wichard, will keep you up to date on all things cloud while offering tips on how to optimize your Costco haul and how to PowerPoint. It's a fun, free-flowing conversation that will keep you entertained and informed. What are you waiting for? Subscribe to the podcast today by visiting softwaredefinedtalk.com or by searching for Software Defined Talk in your favorite podcast app. Looking for an opportunity to accelerate the delivery of reliable, secure software applications? Agile+ DevOps West brings together practitioners seeking how to leverage Agile and DevOps concepts to bring cross-functional teams together to deliver software with greater speed and agility while meeting quality and security demands. Learn from industry experts at Agile+ DevOps West this June in Las Vegas and get started on the path to reduce lead time and successfully deliver stable new features. Arrested DevOps listeners use code AD400 to receive $400 off their conference registration fee. Learn more at arresteddevops.com/agiledevopswest.

[00:03:36] Mark, tell me a bit about yourself.

**Mark:** I'm, I guess, a software developer who's kind of dabbled in everything, distributed systems, security, cryptography, And more recently in data, I guess, machine learning systems. And I guess the common thread through all of those is trying to build complex systems that work. So that's a lot of things about reliability, how you change systems that have lots of users, how you change systems that can't break. So I guess applying a bunch of principles to all sorts of systems such that, you know, in the end, end users stay happy and don't notice that it's chaos behind the scenes.

**Jessica:** That's true. That's true. The trick is we're never gonna be able to actually make this simple. That's not a thing. Any successful system is necessarily complex, and the complexity is necessary for increased success. Specifically, I want to dig into, you emphasized that one of the common threads is figuring out how you change systems.

**Mark:** [00:05:01] Yeah, yeah. That's a big one for me. So, I guess there are a couple of different areas, but I guess it starts with what, how, why systems fail, right? And systems fail because, well, systems are always failing if they're complex enough, right? But those failures become big problems when they cascade to other parts of the system, or one little failure will lead to bigger failures. And so, a little bit of high school statistics tells us that if failures are independent, the probability of a failure goes down. So, we really wanna maintain the independence of 2 things. And one of the things that actually breaks independence in our systems is when we change them. Because if I have version 1 of a piece of software and then version 2 of a piece of software, they are coupled to each other normally via their data. So, when we're changing a system, any data or any external things that are persistent between those versions, introduce coupling. We're also coupling— our clients couple us via our interfaces. So any change in semantics or change in interfaces kind of breaks the independence of that component. So by me introducing a new version or changing my system in any way, I risk introducing a failure that's gonna cascade or interrupt other parts of, or other systems. If that kind of makes sense.

**Jessica:** [00:06:34] Oh, that totally makes sense.

**Mark:** Yeah. So, it's a little bit easier with a picture, but if you imagine that you have 2 versions of every client and 2 versions of every service and 1 version of the data, you can imagine that there are enough arrows that everything is coupled to everything.

**Jessica:** 1 version of the data. That's so true. I mean, Yeah, yeah. My first job was great. We had this giant monolith, and then one of our customers wanted us to use service-oriented architecture. So, we broke our monolith into services, all of which used the same database and the same tables in the same database.

**Mark:** Yeah, yeah. And it becomes very difficult to change systems.

**Jessica:** Yeah. Yeah. And even when they're not using the same database, they're passing data back and forth.

**Mark:** Yes, exactly. Yeah. And I guess that's where particularly the deployment process and the reliability is kind of dependent on how good your deployment process is. The best—

**Jessica:** [00:07:46] Say that again.

**Mark:** Your reliability is particularly dependent on how good your deployment process is.

**Jessica:** Nice. I'm gonna quote you on that.

**Mark:** So, for me, with my teams, I've always talked about feedback loops. And I saw somebody say it a lot better than me recently. There's a talk by, I think it's Col McCarthy, AWS, Closing Loops and Opening Minds. I think it was at re:Invent last year, maybe, who talks about control systems and how, the difference between— I don't know if he talks specifically about deployment systems, but I think it applies to deployment systems, is there's things that only, like, you hit play and it goes and it runs a pipeline and it gets to production. That's only half the story. You have to have some sort of feedback loop. You have to have production telling you whether it's working. And then your deployment process is actually adapting to that. So it needs to be a full loop. Where you have a lot of feedback, and you're actually being able to make a lot of decisions based on what's happening, not what you want to do.

**Jessica:** [00:08:59] It's kind of like test-driven development. Like, we're used to, we write our tests first because then we get immediate feedback on whether our code is working. And yes, that's beautiful, and you do have some idea of whether it works on your machine right now. But But you can extend that and widen that. And I think what you're talking about, and really a lot of DevOps and a lot of working with complex systems, is the equivalent to TDD is ask first, how will I know it works? And it works is like, what impact is it having on the users? It's not just it didn't crash. How do I know the user is seeing this thing? How do I know whether they want to see this thing? Yeah, that kind of verification. And that's science, right?

**Mark:** Yeah, absolutely. Definitely. Measure and learn.

**Jessica:** Yeah. And I love that. I love DevOps because when you take responsibility for the entire software system, then you have that opportunity to learn from what it's really doing in production instead of just what you what you want to think it's doing?

**Mark:** [00:10:13] Yeah, yeah. It's not the ideal case. You start off saying it's going to do X, it's always going to vary along the way. And that's true when you're building software, but it's doubly true when it's deploying because you don't know what a user is going to be doing at the exact time that your software is deploying. You don't know how the system is going to be behaving. There's a lot of open questions.

**Jessica:** How do you detect that? What's a concrete example of how you find out whether some change is really working?

**Mark:** It's really working. So I think that there's probably 2 different sides to it. One is kind of working out whether it's behaving the same as the current system is definitely one really good example. So if I'm deploying a change to a service that maybe I use chess service, like a game service, as an example a lot. Somebody's playing a game of chess, and I have a service that's validating moves, for example. One concrete example may be actually getting results from 2 different services and comparing them. Actually running the old and certain new service in parallel, but only using the old results. And testing that the new results are consistent with the old results if I want to verify that things haven't changed. A different example might be performance metrics. So, or just, I'm expecting to give— I'm expecting that all of my moves go back out within a second or within half a second. And kind of as I service 1 request or 2 requests, testing how long things take to actually get an idea of, well, has the performance changed since the last version or since the current in-production version?

**Jessica:** [00:12:10] Okay. So you're checking performance. You mentioned spinning up 2 and sending to both and checking that the output is— that has a name, right? It's like dark something. Shadow deploy?

**Mark:** Shadow deployments, yeah.

**Jessica:** I heard a really good word the other day, progressive deployment, to describe that kind of gradual moving your features in production, because it's never just a straight cutoff anymore, right?

**Mark:** Yeah, absolutely. It's very dynamic.

**Jessica:** And so, there's always that interdependence that you were talking about.

**Mark:** Yeah. It's definitely a good word. Yeah, I hadn't actually heard it before, but as soon as you said it, I kind of knew what you meant.

**Jessica:** Yeah, yeah. That came from, I think it was somebody at Red Monk. I think it's brilliant because that is what we do. And when you recognize that complexity in the systems and it really can't break, and so you have to have that kind of— you have to have a transition period. I think for these kinds of systems, we need to be designing every deployment.

**Mark:** [00:13:12] Yeah, definitely, definitely. And being able to control how a particular change is deployed. So, we write commit messages to describe what this code does, but we very rarely say, this is how to ship this piece of code. We rely on some fairly standard piece of code where if I'm, I guess, at the moment, we do a lot of spatial visualization of cities, and I want to change the spatial service that's doing calculations. I might want to ship a very specific test in production or verification step in production for my deployment. It's like, I'm not deploying the whole system. There's a whole bunch of standard tests that can run against the system or checks that can run against the system. But this specific change, I'm worried about these things, and this is the area of system I might want to check that the first 100 queries that go to the spatial service all return sensible, sensible shapes or sensible geographies. And maybe that's something that is too slow to run all of the time, but during deployment, it's probably worth it.

**Jessica:** [00:14:27] Yeah. And we act like every deployment is like blinking your eye and you open it upon a new world. And we test the new world. But envisioning the new world and creating the code that we want to exist in the new world is way easier than getting there from here. This is why rewrites are a disaster because it's one thing to write the software that you wish you had, and it is such another thing to change your entire organization to be the one that uses that software.

**Mark:** Yeah, yeah, yeah. And, yeah, it's definitely— and that's, I guess, I've described it before as temporal coupling. It's this idea that, like, we have We have this time couples the old to the new. And I guess if you— rewrite's a good example because you create a cliff, right? It's the old version and the new, and they don't coexist. So, if you break something, everything breaks all at once. So, that's kind of removing independence of failure. You want to gradually, just like progressive deployment in a rewrite, you don't If you turn off all the old features and turn on all the new ones, the chance of them all working is pretty slow. Same with turning off all the old version and turning on all the new version again. It's the same type of cliff that happens. So, progressive deployment is definitely a good mental model.

**Jessica:** [00:15:57] I will add to the show notes the link to the blog post where that term is introduced. It's quite recent. You said there were 3 things about resilience that you talk about. And one was that systems are always failing.

**Mark:** Always failing. Yeah, yeah. I guess—

**Jessica:** But you said 3. So, now I have, like, these open loops in my head. We have to get the other 2.

**Mark:** So, I guess my 3 are really, I guess, building systems, operating systems, and changing systems. So, I guess it's how we construct systems, so, kind of, from an architecture design perspective. So, that's a place where we always introduce coupling accidentally between services. So, yes, that's where you're writing some code and you have 2 services that share a database, like your example before. Just making good decisions about how we write code.

**Jessica:** But that's, like, the easy one. That's the one we already have, like, reams and reams of books about how to avoid and be conscious about your coupling.

**Mark:** [00:17:01] Yeah, it's true that we do, but we also have reams and reams of examples of bad, all really bad examples.

**Jessica:** But did they start out that bad, or did they get that way through operation and changing?

**Mark:** I think that naive examples are almost always bad. So, Michael Nygaard coined a term called the entity service anti-pattern, which I quite like, which actually describes pretty much every microservices tutorial. Like, every microservice—

**Jessica:** The what anti-pattern?

**Mark:** Entity service anti-pattern.

**Jessica:** Entity service anti-pattern. Oh, okay. Yeah, yeah, yeah, yeah.

**Mark:** Yeah. And it almost describes perfectly how to get started with every microservices framework there is.

**Jessica:** You said noun orientation, right?

**Mark:** Yeah, noun orientation, where you're basically demanding that your services are gonna be very chatty. Because every time I wanna talk about an order, I'm gonna go to the order service.

**Jessica:** Right. And to be clear, this means you have a user service, you have an order service, just like in In naive object-oriented programming, you find the nouns in the system, and you build a service around them. I worked in an enterprise the other day, several years ago, where there was this really nice architect, and he was so nice and well-intentioned, but he really just wanted to build a canonical customer that the entire organization would use. Yeah, I've since learned that that's a very bad idea.

**Mark:** [00:18:35] Yeah, yeah, yeah. And you're right that there is so much information about how to do this well, but I think that there are also lots of examples that are more technology-oriented. How, how do you use this framework, or how do we do this, that actually use examples that are really bad?

**Jessica:** Oh, that's interesting.

**Mark:** And people just, people follow them thinking, oh, this is how I use this technology and how I design software.

**Jessica:** Okay. So, when you're trying to demonstrate Kubernetes or you're trying to demonstrate React, and we use these tiny little to-do lists or whatever examples, we're not demonstrating complex systems, we're demonstrating a really simple system that wouldn't grow well.

**Mark:** Yeah, that's right. And there's nothing wrong with that. It's just that, I think people often fall into the trap of thinking it's both things.

**Jessica:** Well, it's not even, and not even consciously, right? This is the code that you see. We don't spend a lot of time reading large systems because we don't have 20 years. And yeah, so you have to read a small system. And when you read a small system, that doesn't necessarily teach you how to build large systems. I have an open loop on the reason that this kind of noun orientation and these entity microservices produce more coupling. You mentioned that they're very chatty.

**Mark:** [00:20:06] Yes, that's one reason is that, I guess, if you compare it to a lifecycle orientation, in that, so, an order an order goes through many stages. And I guess there's kind of constructing the order. I guess there's the shipping process, and then there's maybe the payment process and invoicing. And then there's probably archival historical versions of that order as well. If you're— if you have an order service, all of these different parts of your system, so everything has to talk back to the order service, but it's quite reasonable instead of having one service actually handing off the value between each of these services. So there is an order inside of your shopping cart, but after it's out of the shopping cart and it's into the shipping process, it's no longer in some canonical order system. It's in the shipping system, and we get passed along, and maybe eventually we end up in an archival storage for orders. But Each part of the system is only talking about one thing. Sorry.

**Jessica:** [00:21:20] No. Yeah. Each part of the system is talking about one thing, like, and that thing is in a particular situation. Yes.

**Mark:** It's contextual.

**Jessica:** Yeah. Yeah. The situation of an order in a shopping cart and the situation of an order in shipping and the situation of an order that has already been paid and shipped and hopefully won't be refunded. Those are all, like, they're separate situations. And the order isn't like a human, right? It doesn't have to stay in the same skin through those 3 lifecycle phases.

**Mark:** Yes.

**Jessica:** So, that's where you draw boundaries, is at those handoffs?

**Mark:** Yeah, at those handoffs. And, like, one of the smells, I guess, of that entity service anti-pattern is when your— you have a bunch of attributes on your noun that only describe how your clients use you. So, like, having an order and it has a state field on it, which basically says which part of the system is currently using me.

**Jessica:** [00:22:22] Okay.

**Mark:** That's a big one.

**Jessica:** So, it's like, yeah, like in The Sims, when your Sim goes through baby and toddler and and grown-up phases. Yeah, so you don't actually want to store the order in one place for its entire lifetime.

**Mark:** Yeah, and that has operational impacts as well. Back to my chess game service example, if you're playing an online game, you need it to be really fast. You might want to use a database that's optimized for speed. When you're playing the game. But those databases might be very expensive and not very good at historical searching. So if I've got an online chess service, I might only have 5,000 games currently being played, but I might have 5 million historical games. If I put all of those chess games in the one place, I have to have a database that can store all of them and be good at storing and searching them, plus being good at being very fast. Whereas if they— if there is a service that's responsible for in-flight games and a service that's responsible for archival storage, I can have 2 different data stores as well. I can have maybe a slow data store, a slower data store that's good at searching for the historical stuff, and maybe a different type of data store that is much better at the interactive real-time, um, aspects of an in-flight game. But instead of having to scale a fast database to the 5 million historical games. I only have to scale it to the 5,000 in-flight games. So it can have a profound impact on the complexity of the technology. I've worked in or been a part of projects where people have gone, oh, we have this problem and we need to use Cassandra because it's fast and it's cool. And it's fast because there's like 1,000 requests that need to be fast. And instead, they put, like, terabytes of data in Cassandra and have, like, hundreds of nodes.

**Jessica:** [00:24:29] Oh, this is sad because kind of the whole thing of NoSQL originally was one database does not rule them all.

**Mark:** Yeah, yeah. And then they struggled to keep it up. But in fact, they could have kept 99% of their data in what they had and had just a small service responsible just for that fast part that only needed 3 servers to keep it up and keep it fast enough. And it would have been way cheaper and way less operationally complex. Yeah, yeah, definitely.

**Jessica:** That dividing the lifecycle into stages, that reminds me of something I read in the Domain-Driven Design book, Eric Evans' book, because he also talks about how often the same word doesn't mean the same thing in different areas of the business. An order to shipping is very different from an order to, um, the, the shopping stage.

**Mark:** That's right. Yeah.

**Jessica:** Yeah. And, and so he remarks that those are those like handoffs, especially when you never go back. You never go back into the shopping cart once you place an order. If you do, it's a different order. Then those are great places to draw bounded context lines. You mentioned build coupling. Okay. Did we talk about operational? I'm gonna keep coming back to this 3 until I—

**Mark:** [00:25:50] Yeah, that's all right. Yeah. Yeah, no. So, I guess that's— yeah, we've talked a lot about building, which was the simple one.

**Jessica:** Right, right. But I really like your point that we have lots of material that talk about how to do it well, and a whole lot of material that shows not to do it well. Or how to do it in the small, just small.

**Mark:** So, on the operating system side, it's more of the forgetting about how people have written the code. How do we run and deploy it and kind of manage it and keep it up, keep it alive? So, Just simple things like health checks and how, I guess, health checks are more commonplace now than they were, say, 10 years ago, but I've still seen them being used very poorly. So, I guess, back to independence, I guess, keep coming back to independence being really important for reliable systems. I have more than once walked into a team who've gone to me, oh, no, we know about reliable systems. We have health checks on all of our services, and then what inevitably happens is they accidentally coupled the health checks of all of their services. So if one of the services go down, everything shuts itself down.

**Jessica:** [00:27:13] Dun dun dun.

**Mark:** So they have a they have a have have something that like a web app at the front, and it has a health check that depends on every single one of its services being up, which depends on every one of its services being up. And so like it goes off.

**Jessica:** So it's like a perfect health check.

**Mark:** Yeah, yeah, yeah.

**Jessica:** Without any indication. So it's like a baby. All it does is cry.

**Mark:** That's right.

**Jessica:** Are you hungry? Are you tired? Or are you just doomed?

**Mark:** Yeah. And at least twice I've walked into a room where everyone's pulling out their hair going, production's down, production down. I don't know what's wrong. And it's because— and it turns out that the actual cluster had shut it down because it had declared itself unhealthy.

**Jessica:** Oh, that's true. That's true. As soon as you start taking action based on health check, you better be careful with those health checks.

**Mark:** Yeah. Accidental coupling of health checks is a huge one.

**Jessica:** [00:28:13] Oh yeah, that makes sense because you think of a health check as just diagnostic. But as soon as you add automation around those diagnostics, That's production code.

**Mark:** Yeah, exactly. I guess, yeah, things like timeouts and scaling. All of the, I guess, probably summarized as, if you're operating a system, you're trying to serve as many requests as you possibly can. Serving some requests is better than serving no requests. Doing whatever you can to get as many answers out as possible. So, that might be being pretty aggressive with timeouts. So, if a request is taking too long, then shut it off.

**Jessica:** So, then you can serve— Yeah, then you have to ask yourself what happens if it does complete on the backend.

**Mark:** Yeah. And there's a whole bunch of complexity around that. One of the more complex systems I worked with was a licensing system for a very large antivirus product. So that it's like the largest botnet in the world. And, um, it basically— it's a licensing check that just goes, um, um, are you allowed to use me? Or, and should I have an update? And get me my update. And there's like 2 or 3 calls in this system, so how, how hard could it be? But, uh, that there's like 40 million clients all sitting on like Windows machines that don't get updated, so things are very hard to change on the client side. It would send lots of requests, and so there's lots of very fast requests. But then, um, the same server and the same service was also handling the thing of handing out an update.

**Jessica:** [00:29:58] Oh, but that's a huge slow thing, right?

**Mark:** Yeah, so you'd have people on dial-up internet, um, downloading a 45-megabyte file and taking, like, minutes and blocking requests for other things. So, how you kind of deploy things and, like, deploying those so that they're all going through one server, for example, is a really bad idea, having slow requests blocking fast requests. So, there's a whole bunch of knowledge of actually how systems get used that come into the reliability of how you operate that system.

**Jessica:** Yeah, because those need to operate on different timescales. I also like to separate services that are really dangerous from services that, services that are really dangerous if they fail from services that are likely to fail with a deployment. Some things, you know, your ads or whatever, your little pictures you can change frequently and with impunity, but other things not.

**Mark:** [00:31:00] Yeah. So, there's, well, one of the, I guess, I like to have a positive spin on things. So, I guess, when we talk about reliability and stuff, we often talk defensively, like we're trying to stop something bad from happening. But I think that there is a positive spin on it, which is that I actually wanna embrace being able to ship unreliable things.

**Jessica:** Because life is unreliable. I mean, everything's—

**Mark:** Yeah. But also because Unreliable things are often the most valuable things. So, I guess, especially in the early stages of a product or a company, when you're kind of experimenting and exploring, unreliable software can turn out to be the most valuable software.

**Jessica:** In the sense of what you learn from it?

**Mark:** In what you learn from it, or just that you don't know if it's gonna work, so there's not a lot of value in investing in it. An example for me is that I work a lot with data scientists, and they are not professional coders. They're statisticians who know how to code. And one model that I've seen people try to do and not work very well is that the data scientists will go and just work out how to do something, and they hand it off to the programmers, and then 6 months later, the programmers eventually finish it. And by then, like, it's not relevant. We haven't learned anything. It's not relevant anymore. Um, so I've worked a lot with data scientists trying to get them to ship their code directly into production, and it's not— it's the sort of code that's going to run out of memory and it's going to crash.

**Jessica:** [00:32:34] Yeah, so you just make it independent, right?

**Mark:** Yeah, you make it independent. And so I really like this idea of being able to embrace unreliable code. Um, it means, it means that, um, like a whole different Whole different avenues open up to you in terms of what you can ship to production if you are confident that this piece of code can't break the rest of your system. Yeah, yeah.

**Jessica:** And if it does break, well, it didn't work. But before that, we didn't have it, so it didn't work then either.

**Mark:** Exactly, exactly. And it means that you can just ship crazy things.

**Jessica:** Can we just make it not worse? Yeah. Because if it's not worse, ah, try it, might be better.

**Mark:** Yeah, and I guess on a more programmer side of things, this happens with, like, feature spikes. So, somebody has an idea on a whiteboard and goes, oh, wouldn't it be cool if we did this? If you're—

**Jessica:** and maybe it would, but maybe it wouldn't too, so try quickly.

**Mark:** Who knows? But if you're being defensive, maybe that goes into a project plan and takes 6 weeks and a whole bunch of time. If you know that you could ship it without risk, well, maybe he hacks it out in the afternoon and ships it and goes, well, is this working or is this not?

**Jessica:** [00:33:41] Now, if you ship it to all your customers and suddenly all your customers expect that feature to stay there and you just made this product, then— That's a different situation. Yeah.

**Mark:** That's a different situation. So, you do have to take into account what sort of thing it is. But maybe it's a performance fix, or maybe it's an optimization to some process by removing a step, or maybe it's for a new customer that hasn't fully got on the platform yet, and you're trying to help.

**Jessica:** Right. So, you trusted, it's not a full deployment, might be a progressive deployment. S20s, they were.

**Mark:** Yeah. But, anyway, it's my slightly more positive spin on reliable software, which is that all of these techniques we use to be defensive actually can be used for positive change, which is, I don't know, embracing embracing experiments, embracing different types of code.

**Jessica:** [00:34:45] Yeah, that's beautiful. And that differs from handing it off to the programmers who take 6 months, not because they're bad programmers or anything, but because they're following their guidelines, which is, like, readable, maintainable code that's tested this way and has the types.

**Mark:** Yeah.

**Jessica:** And all the standards that are designed for systems that can't fail.

**Mark:** That's right. And yeah, it's different measures or metrics for quality. I guess a data scientist metric for quality is about the results. How, based on the data, am I getting a very fractional improvement on a model result?

**Jessica:** And that doesn't have to be accessible to everyone in the world. It doesn't have to run on everyone's computer. It just has to run right here on this data right now.

**Mark:** Yeah, that's right. And if we can do it, it could make a big difference. And if you can't, well, that's okay.

**Jessica:** So that's disposable code in that sense.

**Mark:** Yeah, it's disposable. And maybe eventually, if this feature turns out to be super successful, and all of a sudden you've got a lot of clients using it and relying on it, and it then is—

**Jessica:** [00:35:56] Then you get the programmers involved.

**Mark:** Yeah, you get people involved, and they get hard on it. Slowly migrate it, add it into the set of code that should never break. But you would never have known that if you couldn't have got it out in a day and experimented and played with it.

**Jessica:** Right, because there were 30 other things that you experimented and played with that you just deleted.

**Mark:** That's right. Yeah, that's right. So, yeah, it's being able to embrace that failure.

**Jessica:** And I like your positive spin that we started with this robust infrastructure.

**Mark:** Yes.

**Jessica:** For things that can't break and we just want it to restart our code that we don't expect to go down. But now we can use it to run code that we do have a reasonable expectation it's probably going to break or it's going to break often enough. And that's okay now. So, we can do things we couldn't do before.

**Mark:** [00:36:58] Yeah, absolutely. Absolutely.

**Jessica:** Okay, I'm gonna come back for number 3. Number 3 was change.

**Mark:** Yeah, change, which I think we talked about. I mean, we talked about, we kind of opened with that, but it's, yeah, even if you have a monolith and you only have one codebase, you still have things to be coupled. You're still coupled with the different versions of your one thing.

**Jessica:** The data in the database.

**Mark:** Yeah, there's a whole bunch of things. And I guess coming back to feedback loops, so this is where the deployment process, and I guess all of the practices that people talk about with continuous deployment matter for reliability just as much as shipping features. Yeah.

**Jessica:** And yet we say the deployment process, but we talked earlier about how it's not the same every time.

**Mark:** That's right. Yeah, you may want to run different checks. There's a whole bunch of context with each deployment that might matter. I think in a true DevOps situation where developers are really aware of the operational environment, they would be writing checks with their code. I'm committing this feature, I'm writing a test to verify it locally and on CI, but I'm also writing a check that's going to run in production before it can get turned on.

**Jessica:** [00:38:21] Right, like a validation thingy of how do we know it works? You should be able to say for sure it's not working first. So if the first thing I put in my code was like some, some maybe things that emit events in, in the case of the feature worked or the feature didn't, I should be able to say I'm getting all it didn't work because I haven't implemented it yet.

**Mark:** Yeah, yeah. Um, I think there's, uh, like a Fairly general, I think it's called Scientist. I think GitHub released a small Ruby library called Scientist, which does something similar. It instruments a piece of code such that it calculates the results and sends some stats off, which is interesting. I also saw another great example of it, I thought, was the Facebook, the Hack language. So when they were transitioning to typed PHP, And one of their practices that they did was that a programmer can add an indicative type, go, I think that this is a string, and then just ship it to production. And what happens is that it monitors that. It doesn't check it. It just monitors that. And so, it'll send stats back to say, this was a string, this was a string. Oh, it was an int here. This is a string. But after That's cool. After a number of weeks, say it was all strings, and so that type annotation was correct, it actually goes and raises a change request to actually make it a permanent type so that it actually type checks and will fail if it's not a string. That kind of— it's like, I want to make this change in 6 weeks' time if this continues to be true.

**Jessica:** [00:40:07] Right. So, first, you make a prediction, and then you inject an observation into the system so that you can be surprised if your prediction was false. And then you may be able to change the world such that your prediction is more true.

**Mark:** Yes.

**Jessica:** And then escalate the consequences of surprise.

**Mark:** Yes. Yeah. So, it's a totally different way to write code, which is that You're kind of trying to— it is very much the scientific process. I make a hypothesis about the type of change I want to make. I'm going to test my hypothesis, and then if that turns out to be true, then I'm actually going to make that change. Yeah.

**Jessica:** And this is testing in production, but it's a totally different kind of testing.

**Mark:** Yeah.

**Jessica:** It's not a, did it fall over?

**Mark:** Yeah, no, it's not a, did it fall over? And it's a totally different way to approach writing new code. And it's not for all code, but I think if you've got—

**Jessica:** [00:41:12] because it did take 6 weeks minimum.

**Mark:** Any system that's complex or has lots of customers or the change is high risk, whether that's because of externalities or because you're worried about the code. I know that right now there's a piece of code that was written in at my current workplace, which is a very, very large SQL statement, hundreds and hundreds of lines of SQL, which is scary. But every time anybody changes it, there's like a fear. And being able to say that, instead of being able to directly change it, going, this is how I want to change it, and putting that into production and getting some feedback on it. Yeah. But getting some feedback on that is hugely valuable. It's like programming with— it's pair programming with the user almost. It's more akin to, I guess, people talk about interactive programming environments, so things like Smalltalk and stuff like that, where you're interacting with a live system. They're quite often talking still about an isolated development environment. It's like, yeah, you have a running system and you're interacting with it, and, like, REPLs are a small example of that. But imagine doing that on a scale where you're actually shipping, doing that over a timeframe of days or weeks, but in production with users. And you're going, well, how about this change? How about this change? Which is, it's not for everything, but it's definitely a very powerful technique.

**Jessica:** [00:42:45] Right. Because if you're being evaluated on what features did you ship, you know, how many cards did you complete, this is not what you're going to do.

**Mark:** No, no, no.

**Jessica:** But if you're getting evaluated, well, if you're personally not getting evaluated at all, but your team or your company is getting evaluated on how successful users are, for instance, this is the kind of thing you would do. Have you seen Dark? No. That is a brand-new environment where you can deploy a web app and interact with it directly.

**Mark:** Okay.

**Jessica:** Kind of like that small talk style, but with users. So, that is awesome. And that is, it really is an example of new ways of working with complex systems, systems that are so complex, we can't just use reasoning to figure out what they're gonna do. And yet, our goal, our goal is not to have any chaos inside, right? We can have things failing, we can have experiments going on, Yep. But yet there's, there's a boundary outside of which it looks peaceful.

**Mark:** [00:43:56] That's right. Yeah, exactly.

**Jessica:** Our bodies are like that, right? There's all kinds of crazy things going on inside, and it's different every day, and we really have very little idea, but outside it just looks like a coherent system.

**Mark:** Yeah, yeah, that's— yeah, that's— I mean, that's what— that's basically coming back to what you said right at the start, which is that I'm I'm just trying to get it to the point where the users don't know about the chaos behind the scenes.

**Jessica:** Exactly. And the fun part is, dude, dude, I worked in biology at one point, and people are like, what happens if this gene is in the seed? But then you have to inject all kinds of gene markers, and then you just hurl the gene at the seed tens of thousands of times, and you hope, you hope in some of them it, it like takes and it gets into the DNA, but not too many times because those are weird too. And it's so hard to figure out what is going on. And this whole process takes like a year. Um, and we just like add a log statement, you know, we just put an event in, we deploy that. It's so easy to inject these experiments directly into the heart of the system. So, we have opportunities for this kind of science. I think it's really cool. Is there anything else that you particularly want the listeners of Arrested DevOps to know?

**Mark:** [00:45:19] Yeah, I guess I think the takeaways for building systems in general is to, I guess, I like that positive spin, as I said, think about ways in which you are enabling things to happen. Rather than defending against bad things.

**Jessica:** Yeah, safety too, right?

**Mark:** Yeah, yeah, yeah. It's— there's a whole bunch of positive to be taken away from these techniques. I don't think we should sell these for the negative. We shouldn't sell them saying we have to invest in this because it might fall over. It's like we want to invest in this because it's going to help us do this.

**Jessica:** And do new things that we couldn't before.

**Mark:** Yeah, that's far more exciting and interesting to me than, I'm gonna prevent a coding error. And it's not that preventing a coding error isn't valuable. I wanna do that. But I think that kind of the positive statement is far more powerful and far more important to the bigger picture.

**Jessica:** [00:46:26] Yeah, yeah. And it's about what we can do.

**Mark:** Yeah, definitely.

**Jessica:** Which, for the record, I referenced Safety II a minute ago. And the difference between Safety I, which is the old idea of safety, and Safety II is that Safety I asks, how can we prevent failure? How can we prevent errors? What causes failures? And Safety II is like, how can we have more success? What causes success? Because hint, the answer is usually people. But also all these automations that we layer, right? We have layers and layers of fixes and checks and things that we notice. And all of these are active safety.

**Mark:** Yep.

**Jessica:** We're adding success. And then when you do that, you get to add all these other successes like your experiments and things. Whole new successes that we did not expect. Sweet. I want to ask you, at Kinesis, what do you all do to help cities and help with climate change?

**Mark:** Yeah, so we, I guess, we have an analytics platform basically where we collect data, urban datasets. So things about the weather, temperature, all sorts of datasets that don't get aggregated together very often. Like lots of people have the data in individual silos, but we kind of bring it together in a way that is more accessible.

**Jessica:** [00:47:48] Uh, and then traffic data.

**Mark:** Yeah, a lot of mobility data, mobility, population, land use, um, a lot of consumption data. So how people use electricity, uh, things like that. And then I guess we let people do analytics on that, but then we also help them make better decisions. So we do some predictive analytics on, say you're building a new precinct or a new land development Um, and help them say, well, if we build to this standard or have this level of insulation, how will that impact on cost and on, uh, greenhouse gas emissions? Um, and this is a complex system. So there's a big building here in Sydney which, uh, is a huge complex system that I find very interesting, which is that, uh, it was designed to be energy efficient. So they put a whole bunch of solar panels on it, but that generates a lot of excess electricity, which then has to go back into the grid, which isn't very good or very efficient. So then they install— oh no. So like, uh, um, having too much, uh, peak electricity is, is bad. So then, um, they, they use that to then power a recycled water plant. Um, so a recycled water plant may be seen as an energy sink, but in fact, in this case, it's good because it's shedding the excess load at peak times.

**Jessica:** [00:49:07] Oh wow. So, so there's a recycled water plant that in general is inefficient, but you have so much energy that energy is no longer a limited resource. And if energy is not a limited resource, then a recycled water plant is a plus.

**Mark:** Yes. And then that— then the recycled water plant has the same problem, which is that when there's water to use, it's great. Excess, excess water. When there's excess water, it's a drain on— it's a problem because the efficiency of the sewage system comes in into a problem. So, then they planted plants all the way up the side of this high-rise.

**Jessica:** So, now the plants—

**Mark:** So, you use the water? Just the water. And then the plants also provide additional shade, which then reduces the need for air conditioning because it actually lowers the ambient temperature building.

**Jessica:** Oh, no, but now we have more power.

**Mark:** Yes. And so, but like there's a huge balancing act. So, helping people make those sort of decisions and balancing those sort of complex systems.

**Jessica:** [00:50:10] Wow, that's amazing. Yeah, because it keeps being too much of a good thing, and then you, you make more good things, and then those make more good things. So you've gotten some sort of— what's this building called?

**Mark:** Uh, Sydney Central, uh, Sydney Central Park Towers, I think it is.

**Jessica:** Yeah, awesome. Yeah, that's my new favorite building.

**Mark:** Yeah, it's, it's, it's interesting. And then, um, so other things, uh, is like, um, demonstrated there's temperature problems in Sydney. So I guess there's Um, on a very hot day, it can be like 7 degrees Celsius difference between part— different parts of Sydney, which is fairly extreme. And some of that's being away from the parts of the city being away from the coast, but it's actually— I guess we brought in enough data sets to demonstrate that, uh, it was actually due to canopy cover. So the amount of trees, um, creating— well, lack of trees creating heat islands from too much cement, effectively. And so helped, like, get a government to change its policy about trees and where they should be planted. So we actually think we can make a 1 or 2 degree difference just by planting— the government wants to plant trees, but if you plant them here, um, that will reduce the temperature in the parking lot. And then also, yeah, around parking lots and around certain areas which don't have much greenery, where there isn't much natural forest land. And then also correlating that with datasets for at-risk populations, so elderly poor, where they don't, uh, economic status where there isn't much air conditioning and things like that. So high-risk areas. So you correlate these 2 and it gives you hot zones for, um, this is where if you're going to plant 5 million trees, you plant them in this area, it's going to have the most impact. Nice. Um, so trying to, trying to—

**Jessica:** [00:51:51] and again, it's not about how many trees did you plant this year, it's about outcomes.

**Mark:** Yeah, yeah. And it's about policy decisions. So trying to have an impact at a fairly high scale So that's the type of thing. So bringing datasets together and doing predictions or measurements or optimizations around that data so you can make kind of just better decisions around cities. And it's nice because it's our customers who are normally competitors, I guess, in some ways. And like, you have 2 property development companies that build buildings, they think they're a competitor. But when it's talking about improving a city, it means that, I don't know, they get more value, both of them. So Um, our customers start to help each other in interesting ways, even though they're normally highly competitive. It's like, well, actually, we're sharing our data about— so we have, I think, uh, building partnerships where they share data with each other about how to make, uh, buildings in the city more efficient. Um, so, um, we have this partnership that shows that over the last 5 or 10 years, that by working together, they've actually— the buildings in this partnership have reduced their carbon footprint significantly more than the other buildings just by working together on policies and decisions.

**Jessica:** [00:53:02] Wow. That's beautiful. Making positive change in the world with DevOps.

**Mark:** Definitely better than selling ads.

**Jessica:** Oh, sorry. Are you hiring?

**Mark:** Sometimes.

**Jessica:** Sometimes. In Sydney, I imagine. Awesome. Mark, Thank you so much for coming on the show. This has been a fantastic conversation. And to all our listeners, remember, there's always DevOps.

**Mark:** In the banana stand.

**Jessica:** Yes, the banana stand.
