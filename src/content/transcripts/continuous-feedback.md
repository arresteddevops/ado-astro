**Roni:** [00:00:00] And you know what? I always look at my code and think, you know, the tales that this code could tell, if only it could tell what happened back when it was, you know, used or abused.

**Jessica:** Welcome. It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Jessica Kerr, Jessitron, and today I am excited to talk to Roni Dover, who has opinions on what's missing in every DevOps loop. But first, a word from our sponsors. Rootly helps engineers manage incidents directly from Slack without ever needing to leave the tool. They handle all the boring and tedious manual work during incidents, like creating channels, looping in the right people, and acting as your scribe to document that ever-important timeline. Companies from 20 to 2,000 manage hundreds of incidents daily on Rootly. It's super simple and easy to use. You can install it in 5 minutes or less. Visit rootly.io to learn more and mention Arrested DevOps for $1,000 off when you book a demo. Do you ever start a query going in your log aggregator, go get a cup of coffee while you wait, and by the time you get back, it's not the answer you needed and you've started to forget what you were looking for to begin with? You don't have time to waste like that when you've got issues that need fixing now. Whether you need to understand your entire overall system or drill down to the individual user level with traces, Get the right answers fast when you need them with Honeycomb. Go to honeycomb.io/arresteddevops to use it for free.

[00:01:54] Roni, tell us about yourself.

**Roni:** Great to be here. Yeah, so I'm a developer of many years. I'm a bit of a board game geek, which is kind of the one geeky practice I managed to keep in all of the busy, impossible-to-balance life-work. Balance of software industry. I'm also a skeptic, and we'll get to that a bit later in terms of how I view processes and development in general. And I think the one tragedy of my career is that I'm pretty much the man in the middle between the development and product management. I kind of always oscillate between the two. I never quite find a balance. When I'm doing something technical, I'm always kind of pulled toward kind of the reasoning and the use case and the product kind of level considerations and vice versa. I can never stay away from the code.

**Jessica:** That sounds like a useful pendulum.

**Roni:** [00:02:56] Yeah, definitely. But I've managed to find the right balance and a lot of made-up jobs that kind of allowed me to balance the two.

**Jessica:** In your swings between development and product, what have you noticed about DevOps? And the DevOps loop?

**Roni:** Yeah. So, when you look at things holistically, you start kind of noticing things about the system and how it works. And this also has to do with my own kind of fascination, let's call it, with how do you scale processes? How do you create development processes that work? I put a lot of thought and research into systems thinking and all sorts of things that smarter people than me wrote about the topic to try to understand more. And what I noticed was that as a whole, development processes seem to be optimized or try to optimize as much as possible for speed.

**Jessica:** Do we mean speed of the software?

**Roni:** No, no, speed of deployment, cadence, and kind of how fast do you deploy? How many releases do you do a day? How many, like, when I was kind of picking up on various practices, it was always kind of, what's your time to release? You know, there is the whole kind of agile cliché of, if you had to stop coding now, what would be kind of the lead time that you still need to kind of continue working until you have something stable that you can release and ship? Optimizing for shipping often is great. But yes, the only thing is, if you only optimize for speed, or for releasing often, what I found is that you're just creating a system where you're hurling features over the fence faster. So instead of kind of sending a feature over the fence and forgetting about it once a month, you do it 24 times a day, but it doesn't improve the quality of the learning processes and of the feedback that you get so that ultimately you end up with 2 processes. One process, which is engineering, which is completely bent on sending as many releases down the pipeline as possible, but then not kind of looking over the fence into, okay, what's going on with those features that they just sent there? What's happening with them?

**Jessica:** [00:05:27] Well, now wait a minute. I mean, the point of DevOps is that we don't forget about our code after it gets to production. We continue to make sure that it runs.

**Roni:** Yes, that's true. But the thing is that most of those processes or tools that make sure that it runs, they're looking for problems. So if there is a problem, we'll know about it. We might fix the problem. But that's kind of a very reactive way to look at the problem.

**Jessica:** Well, and even then, it's only if it's a problem with the software running. Like, exactly. Is it not responding at all? Or is it sometimes, is it getting really slow? But that's kind of like, that's so generic. That doesn't have anything to do with the particular features that we just threw over the fence.

**Roni:** Exactly. And like you mentioned, the oscillations between product and and development, as a product manager, the tools of my trade were tools like Google Analytics and other commercial products that provide those kinds of insights. I can't imagine only getting notification when users stopped using this feature, then I would know to change my product backlog or whatnot. I need continuously to look continuously at the data and make these decisions. It's not kind of a one-and-done thing. So where is the Google Analytics equivalent for developers?

**Jessica:** [00:06:58] Right, right. I would call that observability.

**Roni:** Exactly.

**Jessica:** Right, right. But it's— you need more than just, is it running? So it has to be more than monitoring. As a product manager, what kind of things are you learning from looking at Google Analytics continuously?

**Roni:** Yeah, so all sorts of things. And this is also something that is kind of becoming, I think, more prevalent and maybe a bit more codified in the types of insights people are looking for than it used to. But for product managers, they have conversion rates, they have things that they're testing. It's all, it's a lot of experiments. And by the way, this is where my skeptic side really fits in because you're You're continually conducting experiments, but you're continually monitoring what you're seeing from these experiences.

**Jessica:** Can you give me a concrete example?

**Roni:** Sure. So I made a change to the webpage, and now I want to see whether it causes more people to— sorry for taking a very trivial example— to add items to the cart than before, right? Because I did a navigation change, I decided to show a popup earlier. It can be basically any product decision, and now I want to manage what is the impact of that decision.

**Jessica:** [00:08:16] Impact. Yes, yes. Whereas with traditional monitoring, we're only looking at, did I break it? We're not looking at, did it change how people interact with the system?

**Roni:** Exactly, exactly. So, what I noticed was that product managers, and as a product manager, I had a lot of tools available to me that provided me those types of feedbacks. And I would I did not feel like I was running blind. I had a lot of information and probes that provided me with the data that I need. Whereas with development, because the whole focus was on shipping faster, the tools that I used were intended just for that, CI tools, CD tools, testing tools to make sure that I'm not breaking anything. But I had less tools.

**Jessica:** And theoretically changing code that generically continues to run.

**Roni:** Exactly. And I had less tools that told me, you know what, this is the impact of what you did, or this is how performance is changing, or what you did works, or it's not enough. I need to know, does it work well? Does it work within the requirements that I can't replicate in my local environment because it is production? So in other words, whereas there is a lot of flow of information back on the product level, there is not enough flow of information back on the technical level.

**Jessica:** [00:09:43] And this is the continuous feedback you're talking about?

**Roni:** So continuous feedback is kind of like the inverse of continuous deployment or continuous integration, continuous deployment. So if you envision, envision kind of the DevOps loop with its different stages, and it's a completely bad analogy, by the way, and I'll talk more about that. It's because it seldom is a linear process. But we'll get to that. But let's, for a second, forget about that and imagine the DevOps loop as a very linear thing, one stage leading into another.

**Jessica:** And what are the stages?

**Roni:** Then you have, you know, all of these stages taking code from source to prod. If it's continuous integration, then continuous deployment, and then eventually, whatever you choose to fill those stages with, if it's performance tests, integration tests, backwards compatibility tests, whatever, user acceptance, Whatever testing you're doing and processes that you're running, you eventually get your code into production. And that pipeline is all about that. Now, continuous feedback is kind of the inverse pipeline. It begins with information received from production. It goes through various stages to try to understand things that are relevant to me. And then the end is back into where I'm developing, if it's the source, if it is the source control management tools that I'm using, wherever I'm still developing code and need that information.

**Jessica:** [00:11:11] Okay. So, we currently call our DevOps pipeline the trip from IDE to production. And you're talking about a continuous feedback pipeline?

**Roni:** Exactly.

**Jessica:** That takes information from production and puts it into our IDE?

**Roni:** Exactly, exactly. And not just the IDE, basically whatever tools I'm using to work. Now, I talked about why this is really important for the— on the macro level for the organization, but it's also really important for the individual developer. Because for me as a developer, there is such a thing as ownership over what I'm doing, right?

**Jessica:** We're told to have that.

**Roni:** Exactly. But we've seen also ownership, or the bounds of code ownership, gradually increase. So, when I got started developing many, many years ago, and I kind of feel old just saying that, but yeah, it was too many years ago when I had my first job as a developer. And the boundaries of my ownership were that I was done developing the feature, and I sent it off to QA because they were the next phase in the pipeline, and that's that. And I forgot about that feature until I got some bugs back.

**Jessica:** [00:12:27] But as code owners, we got to yell at other people who changed the code we wrote.

**Roni:** Yes.

**Jessica:** That was code ownership when I started. It was a possessiveness of, don't change my code. It means something different now.

**Roni:** Exactly, exactly. And there are many funny stories about that. But Yes, when I got started, that was what it meant. And over the years, in a very healthy manner, it came to be more than just about that. So now you didn't own just coding, you owned testing and creating integration tests or automated tests for your code. You owned deploying the code more and more. This is what's sometimes referred to as shifting right. Developers are basically owning more of the pipeline. They're basically more accountable But it's a part of the ownership.

**Jessica:** Yeah, and it's become more like— first, it went through more like owning a car, where you have to do, like, maintenance, and get it repaired, and change the oil, or else the engine will seize up. But now, code ownership is more like parenting, where you try to help it do well in all situations.

**Roni:** [00:13:43] Exactly. Parent, you kind of want to know how your kids did in kindergarten when you sent them over there, right? So you want to have that observability back to understand how the kid is doing in whatever kind of other place you send them to. And this is exactly where that is relevant. Okay.

**Jessica:** Okay. So if continuous feedback is like getting a report card home, except way more frequent, It's more like that weekly email from the kindergarten teacher, which was at least weekly. What's in it? What do we hear about from our code?

**Roni:** There is something that I described here that isn't accurate. So, it's true that it sounds, and I mentioned that before, it sounds very kind of linear. You code, You send the code over, kind of push it over the cliff. It then gets interacted with by users and other processes and other microservices. And you know what? I always look at my code and think, you know, the tales that this code could tell, if only it could tell what happened back when it was, you know, used or abused in production by other processes and so on. But it's not a linear process, meaning there is feedback all the time. Even before I start coding, there is already a lot of important information about how that code behaves. Okay.

**Jessica:** [00:15:17] Give me examples.

**Roni:** Give me examples. Yeah. So if I want to use this code, the first and most trivial question is, what should I optimize for? Is this code that I'm looking at right now, is it used at a high concurrency environment, is this kind of a bottleneck? And every millisecond that I add here will propagate back through other services that are using it? Or is this kind of something trivial?

**Jessica:** Extreme? Does this code even run in production?

**Roni:** Yes, yes. And I've seen a lot of surprised faces when we kind of looked into that. And people were investing a whole lot in the feature. And then And, you know, discovered that the if statement never reached that location that they invested so much in in the past 3 years. So maybe it's time to, to get that information back to the product manager as well, but also to kind of know what I need to optimize for. And, you know, we have very limited time and resources as developers and we have— we need to know what to look at and which things should we kind of put an emphasis on and spend hours honing and making sure they run in an ideal way, and which are not so. And a continual kind of— when I talked to developers and platform engineers, a lot of the things that they mentioned was, it's very hard for us to know what to optimize for. And oftentimes we get We're code reviewing or we're looking at code and we see that they completely missed it. They either micro-optimized for one thing, which wasn't necessary, or completely forgot another. Another thing to look at is how does this code scale? So sure, if it doesn't scale well, eventually it will cause a problem, but why wait until then? If you can detect that this code performance has an increase based on concurrency or based on the size of the database or in correlation to the payload. These are things that provide you with information on the scale factor. So that's kind of another example of something that could tell you right now about this code that you're looking at and whether it's something that, you know, just as the code is continually updating, usage is continually updating. And some feature that was popular once may not be now and vice versa. You might find that you need to continually make adjustments based on that feedback.

**Jessica:** [00:17:56] Okay. So, our continuous feedback pipeline, which starts running before we ever drop a change into production, is just running based on what's already happening in production. It can tell us how important is this code. And another thing is it can say this code has problems scaling under X condition.

**Roni:** Yeah, it can point out the things that are important for me as an engineer to know about it. It can tell me about errors so that I can plan for runtime errors that do occur.

**Jessica:** Oh, yeah, yeah, yeah. I want this about that comment in my code that says, can't get here. That throw exception, this should never happen. Does it? Does it?

**Roni:** Exactly, exactly. And I think it's kind of related to how we're sometimes misusing logging to accomplish just that. Because, you know, that— Ooh.

**Jessica:** [00:18:57] I see. Do we ever grep the log for this should never happen?

**Roni:** Exactly. And I've seen so many codebases where it was kind of like, logger warn here, or, this is a, like you said, it should never be reached, or whatnot. And I may monitor that log for a few days, but I will ultimately forget about it.

**Jessica:** Okay. So, logging is the feedback we're used to. We're used to being able to leave clues for ourselves in logs, see them immediately during development, and then, you know, hypothetically have the possibility of looking at them in production, but never really doing it.

**Roni:** Exactly. Exactly.

**Jessica:** Or very rarely.

**Roni:** Exactly. So this is basically what continuous feedback is. And it's really helpful for the organization because it creates a learning process rather than a process that's optimized to ship out code. And it also helps developers do their work because if they're accountable for the code, that means that ultimately, It's their problem if issues do occur. So, instead of waiting for them to occur, let's kind of stretch the definition of done, of what it means to complete a feature. Let's not concentrate on deploying to production, but look over the cliff and kind of continually get feedback about how that code is doing. And now, what happens if you don't do that? You're basically accumulating technical debt. And eventually, when things do come to kind of boil and issues do surface, then you'll start handling them and move from developing to troubleshooting, which is much harder. And there's more at stake. Everybody's more uptight about it because there is an issue. Production is already suffering from some malfunctions that are causing misery to developers, to the users. And eventually, that's not how you want to kind of operate the whole process, because that just creates a lot of inefficiencies. It creates context switching, because you're no longer handling things at your own time. You're now running around, putting out fires. You're a member of the engineering fire brigade. And that's never healthy. Now, the other thing that it helps you with is, and this is kind of where my skepticism fits into the picture. When you look at the development process, there are so many biases and kind of cognitive biases that are affecting us. And people wrote a lot about how it affects estimations. And, you know, you know, the listeners may— yeah, the no estimates movement and how do we estimate? And, but, you know, once you start seeing these things, it's kind of like, it's very hard to unsee them again because you see biases everywhere. You can see them in—

**Jessica:** [00:22:09] Do you have some examples?

**Roni:** Yeah, sure. So, estimations are the classical ones because, you know, somebody says a figure, let's say 3 weeks, now everybody adheres to that figure. It's kind of a framing or a bias.

**Jessica:** A bias that suddenly you're incompetent and you can't do it in 3 weeks.

**Roni:** Exactly. And developers, including myself, by the way, suffer from optimism bias. We're very optimistic about our ability to do things.

**Jessica:** We can't predict which thing will go wrong, so we predict that nothing will go wrong.

**Roni:** Exactly. And when we give the estimate, we know better. Exactly. And then, For testing, there is confirmation bias. So tests are great, but tests often just codify our expectations. So we're saying we expect this to happen, so we create a test, but we don't see anything around what we've created that we did not think about or that we did not expect to happen.

**Jessica:** [00:23:11] And it goes, it goes beyond edge cases. It's combinations of features, combinations of data coming in. Ordering of clicks.

**Roni:** There's also— Yeah, it goes much beyond edge cases, because, you know, reality is a collection of things, and not all of them is on the happy path that you coded a feature for. Most of them aren't.

**Jessica:** Not all of them even make sense, but they still happen, and they matter.

**Roni:** Exactly. And what I've seen is that Well, one way to offset that is that observability does provide— it has its own— it's not a magical solution. It has its own biases and what you measure and so on. But eventually, it does inject into the process a lot of relatively objective data. So, I can interpret it in many ways and so on, but eventually, observability does look at the raw data that we get from production. And it tells me the bottom line. And that's sometimes helped deal with these biases because, believe it or not, studies show that if you know about a bias, it seldom helps you actually overcome it. So you're still— you still have it.

**Jessica:** [00:24:30] Yeah, yeah. If you know about it, you can choose to compensate for it, for instance, by looking at your observability data, which should show you more broadly what's actually happening in the system, without you having to grep the logs for anything in particular.

**Roni:** Yeah. So let me give you some examples. Let's say I refactored my DAL, my data access layer, and made some changes, and I expect things to be so much smoother now. And my testing showed it's working brilliantly, and I pushed it over production. But does it? And will I actually look at the data?

**Jessica:** Do you have access to that index in production?

**Roni:** Exactly. What do I measure? How do I actually check this? I changed the threading strategy and went from thread-driven to process-driven with something, and everybody is hyped about this being the right solution.

**Jessica:** Okay. Now predict the consequences of that.

**Roni:** Exactly. So, this is where it really helps to have some objective data. And the way I look at it is it allows you to write code in a more informed way. So, it's basically being much more informed when you code, and when you look at the impact of your code changes. And this completely changes the way people can develop.

**Jessica:** [00:25:49] All right. So, we've talked about observability, which gives you the option to go look at graphs and traces and see whether the consequences of your code are roughly what you expected. But, but you have to, like, go and look at it. I mean, it's, it's not quite grabbing logs. It's prettier than that, but it's still an activity that takes you away. And then you have that context switch, and that's annoying.

**Roni:** Yes, you're absolutely right. And the one thing that I can say is that this is exactly why, as much as I'm just now extolling the benefits of continuous feedback, It doesn't happen. And I have seldom, very seldom talked to an engineering organization where they're practicing continuous feedback. They're actually employing these principles. And the reason is just what you said, is engineers are very busy people. They don't have the capacity to start looking for trouble in logs or in dashboards all the time.

**Jessica:** [00:26:55] Yeah, we got product people for that.

**Roni:** Exactly. Thank you. The other aspect is that engineers, not all of them have the expertise. Like, even myself, you know, I managed to forget 90% of what I knew about statistics. So, if you tell me to analyze the performance—

**Jessica:** I see, to make room for other stuff.

**Roni:** Yeah, that's what I tell myself. But no, but basically, when I look at the code, today, I— it's hard for me to analyze percentiles and performance metrics and measure things in a correct way because what I have available to me is a lot of data, not insights, not this is the bottom line about this function, but data.

**Jessica:** And actually not how important is this code.

**Roni:** Exactly. Like an insight would be this is a bottleneck in your code and this is the reason why. And then I can double-click to learn more. But if I need to do—

**Jessica:** this error actually happens all the time, thanks.

**Roni:** [00:27:56] Exactly. Or escalating or whatnot. But if I actually need to do those aggregations and percentiles myself, then it might take me too much time and I probably won't do it, or I will do it one time as a science exercise and then I'll forget about it, right?

**Jessica:** Yeah, that's a research project.

**Roni:** Exactly. Exactly. And the last thing is like, is what you said, is that it's context switching and I'm working right now. I'm not going to You know, there are enough tools that I'm using as is that are causing me to context switch. I can't context switch to another. And this is actually exactly the reason why, you know, I've been working on some projects that try to make that more accessible for developers.

**Jessica:** What's your vision?

**Roni:** So about— and all of these things that I'm telling you about are— I'm very kind of passionate about them because I've been kind of processing all of that information and kind of doing a lot of research into that. And this led me to start Digma, which is an open-source project that tries to deal with these 3 reasons for why we're not using observability in our day-to-day. So what it does, it is the expert. So it contains a lot of the kind of things that are today tribal knowledge about how do I measure latency, how do I look at the time series and see if it's escalating or not? How do I measure all these insights? Exactly. So to be able to bring me as a developer something I can work with instead of look at these percentiles and look at these raw metrics and, and do something with them, which is very hard for me as a developer, nor do I have the time to do that. Second, to bring it into the IDE so that I don't need to actually context switch. I can, as I work, see these things about my code, react to them, and make the code better when needed, and also understand how it works better in production. And the last thing is it allows me to do it in a very proactive way. So I don't need to wait for an issue. I'm I'm going to own my code when I push it over the cliff into production. I will get life signs from it. It will tell me people started using me, and then it will tell me I'm scaling well, or I'm scaling poorly, or I've actually affected the system in this way. And it's not just about the negative, by the way. My other kind of problem with how organizations use observability is it's It's sometimes all about, it is all about the blame game. Like, something went wrong, who do I blame? But there is enough, there are enough victories to celebrate as well. And things, and things are being improved all the time. Let's, let's kind of put that in the center as well. So that it creates a positive culture that allows us to recognize people that, you know, saw an issue with the code, made it better, made the world a better place. And now we can all kind of see it as And that's the reason kind of for, or that's the motivation that got me really so obsessed about continuous feedback. And so, to the extent that I decided to initiate this project, and we've been working very hard on it, and it's just reaching the beta stages right now, which is really awesome. And by the way, I'm inviting all of our viewers to log in to digma.ai and sign in for the beta. I will be happy to kind of, if you mention that you're from the podcast, we'll give you a little bump in the priority list for the beta. And we'll be very happy to kind of hear your thoughts because as people who write a tool for continuous feedback, we're really, feedback is really important for us. So getting user feedback is really critical.

**Jessica:** [00:32:05] All right. So, you talked about installing a plugin in your IDE, but I have a feeling it can't be that simple. How does Digma, or any continuous feedback pipeline, get information about the code that's running in production? How does it correlate some metric or event to a line of code?

**Roni:** So, that's a great question. And I think, there has been a kind of a, in my mind, a very pivotal technology was introduced in this regard, which is OpenTelemetry. Now, OpenTelemetry is, other people can talk about it technically much better than myself, but the impact of OpenTelemetry is that it's something that everybody suddenly agrees on. And that's the thing that's most important to me. And what that means is that you can see all of the commercial vendors kind of aligning around OpenTelemetry and pushing it for new projects. And as a result of that, we start getting an ecosystem that can kind of take into account that there is a structured way of doing things. There is a spec that describes how metrics work, how tracing works, and so on. And this paves the way for new open-source tools to start providing ways to make that data more useful. Kind of, I think that as much as I think that I don't like the term for being a bit markety, but it's really democratizing the observability data. It's making it much easier for any tool to use that data. It's no longer a proprietary format or agent or whatnot by that company or that company. It's something that's very easy to write processes that make more understandable and easier for developers to grok and to use in their day-to-day. And my prediction is that we're going to see a lot more tools that are able to do that. So the way that we've implemented that is simply use OpenTelemetry. We receive the information just like any other kind of observability tool or APM tool that you're using. We're ingesting the data in a very similar way, only we're a pipeline. We're not an APM. So Digma's ability is to create that inverse pipeline, get that data, start processing it through various stages, and then provide the feedback back. But that's just one example. I'm anticipating we're going to have to see a lot of tools because OpenTelemetry kind of opened the way for this to happen.

**Jessica:** [00:34:59] So OpenTelemetry, it gives you a standard format of telemetry data, of events that the code sends out. Yes. And then it gives a bunch of libraries that add standard implementations.

**Roni:** Oh, the libraries are awesome because they're kind of automatically instrumenting a lot of your code, even if you don't have a codebase that was written in a way that's very, let's say, trace-aware, and it might be using logs or some other forms of observability, but not traces and metrics or other things. So, The automatic instrumentation that OpenTelemetry provides actually makes it very easy to adopt it and makes it more kind of like a just flip on the light switch kind of an experience. Because all you need to do is to include these libraries, add a piece of code that activates them, and that's it. You're live. You're broadcasting that information. And that's awesome because that means that the time from a product that has no telemetry whatsoever to having something that is providing a lot of useful data is very short. And the reason for that, again, is because all of these different programming languages and platforms didn't need to conform to 20 different standards. They all just needed to provide an integration with OTel. And you can see that, by the way, with some programming languages actually kind of make it a part of the standard library in a sense. Just because it's become so prevalent and so much of a consensus. And I think we'll really start seeing a lot of benefits from that.

**Jessica:** [00:36:50] Does Digma depend on the automatic instrumentation, like the particulars of their implementations to associate events, telemetry events with a location in the code?

**Roni:** So, Digma employs a couple of ways to do that, both by scanning the code and understanding kind of those correlations and using OpenTelemetry information that's included in the tracing data itself. But the way we try to build it is kind of like babushka, or matryoshka, as it's sometimes called, which is, you know, those dolls that are worn inside of— Yeah, exactly, like a Russian doll. So basically, even if you don't do anything, we provide really useful information. And the more information you bring, the more we can provide more data. For example, you can add, and it's very easy to add via an environment variable in your CI, the commit ID. So if you add the commit ID, to the measurements that were added by observability, then we can triangulate that and start offering insights that also take into account maybe which code change kind of precipitated this event. If you add additional information about, let's say, the correlation between a specific point in the code and a specific span, then we can use that as well. So the idea is to make it very to make sure that it provides value just if you turn it on. But then kind of, and this is something we're really hoping developers will start doing in general, unrelated to Digma. When you start working with code today, it's such a long loop between, let's say, adding a trace into your code, then deploying that code, then sometimes it will get called maybe in production, Maybe you'll forget that you added that trace by then and then seeing the result. But if you have a shorter loop, if you add that trace and then you immediately start getting feedback from testing, you immediately start getting feedback from the CI, then staging maybe, then production in the feature branch or whatnot, you'll create a shorter iteration loop that will make it much easier and will provide more motivation for developers to run these experiments and add these traces to be able to measure things accurately and write code in a more informed way.

**Jessica:** [00:39:25] So, if you practice observability during development, then you get feedback in multiple ways. I mean, if— so, if Digma, the pipeline, is one telemetry backend for OpenTelemetry, and you can send it to another one, then you can get both your observability tool to show you what's happening in your local environment, in test, et cetera, et cetera. And you can feed into the, is it slower insights?

**Roni:** For example, yeah.

**Jessica:** Ooh, ooh, ooh.

**Roni:** Yeah.

**Jessica:** A friend asked me yesterday about, they have a Rails app, and she said she wants, she sees the traces, can show you where you have an N+1 query, but she doesn't wanna stare at traces. She just wants something to tell her, hey, You have an N+1 query right here.

**Roni:** She just described Digma, right? Because this is exactly the point, right? We don't have the time to go through the traces and identify N+1 queries. And N+1 query is something that's a classical case because it's very easy to spot or to at least get a suspicion that this is happening.

**Jessica:** [00:40:42] Yeah, yeah. And it happens in Hibernate and it happens in ActiveRecord and it happens—

**Roni:** Exactly, exactly.

**Jessica:** Yeah, yeah, that's very useful because the classic observability use case is there's a production incident, but that's only the negatives. It's only when things are bad. And honestly, it's not every day, you know, as a developer who's only on call occasionally, and that's not my life. That's not motivating to add more attributes to my spans.

**Roni:** Yeah. And also, I don't like to be surprised all the time. Like, as a developer, I like to be in control. And I like to have that sense that, you know, I finished my workday, I checked in code, I don't want to be kind of stressed about, wait, I pushed this code, it will be in production. What if something goes wrong? And then 3 days later, somebody calls me up at 2 AM to tell me something happened. That's not a good way to kind of handle the process. If, on the other hand, I can keep in touch with this code that I've just rolled in, I won't be surprised if I see something beginning— something bad is starting to happen. I'll be the one to know about that. I don't need any APM tool to tell me when things are already horrible. I'll start detecting that this code is behaving a bit differently than I expected. And this is where I'll want to maybe make modifications, but do it on my own time and not when things are already on fire.

**Jessica:** [00:42:21] Nice. So instead of chucking it over the fence, you've released it into the field, but you continue to check on it and care for it.

**Roni:** Exactly. And more than that, and I actually wrote a blog post about it a while back called Breaking the Fourth Wall, was the code, it actually needs to talk back. It needs to tell me. I don't need to check on it. It needs to tell me, hey, look, I know I'm this code and I'm doing this thing where I'm servicing people, but I also wanted to let you know how I'm doing. And these are the things that I'm seeing. Exactly. So obviously, this is oversimplifying it, and we do need to manage And this is kind of the number one, let's say, risk in continuous feedback is making sure that it's the right feedback and it's not overwhelming me with feedback that's less relevant, that if, that it's very kind of, it's built in a double-click into more information rather than kind of overwhelming with a lot of raw data and results and that it's very accurate in making sure that when it does say something is important, it doesn't lead me on a wild goose chase. Chase that will take me like a day of exploring around to find out that it's not really important.

**Jessica:** [00:43:42] So, so it's not spammy.

**Roni:** Exactly. All of that, I think, is, is the main, you know, there, everything has its, its kind of checks and balances. And continuous feedback has that. If you do use continuous feedback, you need to make sure that the tool doesn't spam you with all of these different notifications. It has to be something that's pertinent, that's real, and that is actually indicative of something that's happening in real life. The good thing is that we're becoming much better at measuring these things. And I think it's also kind of a great way for organizations that don't necessarily have that expertise straight away. For example, for the last several months, I've been talking to so many different organizations and they're all struggling with observability. Let's put it like that. And I don't think it's big kind of news to anybody that observability can be hard to implement. And what— and it's part of it is because it's still a young field, like OpenTelemetry is young. You know, we've been doing profiling for a while, but it hasn't become kind of a tribal knowledge that everybody shares. It hasn't become kind of something that—

**Jessica:** [00:44:59] Lots of people don't know what a trace is and haven't worked with a trace. In fact, probably most developers at this point have not worked with tracing.

**Roni:** Exactly. And that's just a basic level. But to analyze those traces and what to look for, what to measure, how to measure, these are things that are very hard for people to figure out. And they've been asking me a lot of these questions. So if you get the best people in the industry to already kind of start, and this is where, by the way, the open source aspect fits in, because we want anybody to be able to contribute additional things. But if you get the smartest people, the experts, to kind of codify these things into the platform and make sure that—

**Jessica:** And then if you get the rest of us to write the text to make it make sense.

**Roni:** Uh-huh. Exactly. And the thing is, you can create a platform that actually provides information that's very bottom line for me as a developer. No, I don't want to know about, you know, linear regressions or whichever way you came by that data. But I do want to know the bottom line. I want to know that there is an issue here and see some examples of that. And that's it. This is what I need to know as a developer. And what that does is it removes this bottleneck for the middleman expert in every organization. You know, he's the go-to guy for performance. We don't need to bother them for all of those things all the time. He can actually maybe add his own insights that he wants to keep track of. And instead, we all benefit from that information and we can start being more informed about all of these things. And I see it like, I think my experience has been once I started getting more feedback about my code is that without that overlay, I'm kind of blind. I'm coding blind. I'm guessing a lot of things. A lot of it is biases. I think this is great code. I wrote it. This is the new thing that we wrote. It must be awesome. It's based on the best design patterns.

**Jessica:** [00:46:56] You're coding to the test instead of coding to the customer.

**Roni:** Exactly. I'm coding to the test instead of testing the code in, in, again, in a real-life manner.

**Jessica:** Gotta test in prod. It's, it's, it's the only real test. I mean, also test before prod, but don't forget to test in real life.

**Roni:** Exactly. Yeah. So, so we're very, very excited about it. Uh, we're, um, getting a lot of information back from developers. And by the way, I'd be very happy to hear the listener thoughts about what are the things that would make sense to them? What are the things that without which they wouldn't be able to be certain about their code changes or the things that they want to see about their code behaviors? Because every person I talk to is just a lot of different use cases and perspectives that are really gold at this point.

**Jessica:** Great. Great. So, where can people get a hold of you?

**Roni:** So, I'm at Twitter @DoppleWare. We can get the link, I think, in the show notes, probably.

**Jessica:** [00:48:01] Can you spell it for us?

**Roni:** D-O-P-P-L-E-W-A-R-E. DoppleWare.

**Jessica:** Great.

**Roni:** You can also go to digma.ai, which is our website, where you can kind of sign on if you want to try it out. Um, and, you know, I'm, I'm, I'm very— and, and I also have a blog where I write kind of profusely about these topics, which is, uh, on Medium. And I, I'll send a link to that, uh, as well.

**Jessica:** We'll get that in the show notes.

**Roni:** Exactly.

**Jessica:** One final question before we wrap up. At the moment, what's your favorite board game to play?

**Roni:** Oh man, I'll get into trouble no matter what I say. Uh, but no, I, I, I actually, I have to confess that the way that I play board games is kind of peculiar. For once, I never play, or I seldom play the same game twice. So I just have this—

**Jessica:** It's a learning game then.

**Roni:** [00:49:01] No, and I'll tell you why. It's just kind of when you play a game too much, it becomes more of rule hacking and kind of you already know the mechanics and you're just playing the rules and kind of gaming it so that you can win or lose. And I like that kind of exploration phase where nobody really knows what they're doing, but everybody's kind of trying to create a good story in the game, which is kind of my favorite thing. But having said that, I love New Angeles. If anybody's familiar with it, it's a great combination of a social game with kind of a— you're basically running this futuristic town with a lot of trying to balance between getting some money into your own pockets and making sure things don't completely, uh, the, the system, the, the town doesn't completely lose it. So it's, it's a really great game.

**Jessica:** Thanks. So your favorite board game is anything you've never played before?

**Roni:** Um, yes, yes. What did I say the, the name of the game was?

**Jessica:** [00:50:03] New Angeles.

**Roni:** New Angeles. Yes. Sorry, I thought I misspelled that.

**Jessica:** Great. Also look for that in the show notes.

**Roni:** I'll be happy to look.

**Jessica:** Roni, it's been great to talk to you.

**Roni:** Oh, thank you so much for allowing me to talk on my favorite topic.

**Jessica:** Clearly.

**Roni:** It's so much fun. And I'll be— thanks so much, Fran, for inviting me. It's been a blast.

**Jessica:** Great. For our listeners, head over to arresteddevops.com/continuous-feedback for this episode's show notes. Also, visit arresteddevops.com/itunes and leave us a review if you want to help other people find this podcast. And we're probably on Spotify and iHeartRadio if you're into those. Horny, thank you for joining us today. And I'm Jessica Kerr, @Jessitron. This has been Arrested DevOps. Remember, there's always DevOps.

**Roni:** In the banana stand?

**Jessica:** Yes, in the banana stand! See ya.
