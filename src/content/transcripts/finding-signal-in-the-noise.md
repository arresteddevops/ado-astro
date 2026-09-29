**Bridget:** [00:00:00] Serverless is nonsense because there are still servers. You just can't SSH into them.

**Aneel:** I hate to break it to people. There are always servers.

**Matty:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matt, @MattStratton on Twitter.

**Bridget:** And I'm your co-host, Bridget Kromhout, @bridgetkromhout on Twitter. Arrested DevOps is brought to you by 10th Magnitude, a company that figures if you're listening to this podcast, you must be pretty cool. 10th Magnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/10thmagnitude.

**Matty:** This episode is also brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 70 common infrastructure tools such as Chef, Docker, and AWS, so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog. Sign up today and get a free t-shirt.

**Bridget:** [00:01:21] I want a free t-shirt.

**Matty:** I know. Well, go sign up for a 14-day trial of Datadog.

**Bridget:** Pivotal's already a customer.

**Matty:** So yeah, so we're, we're here tonight, today, whatever it is. We're gonna be talking about how to find signal in the noise in the 2016s. Joining us today is returning guest Jason Dixon, although he doesn't remember that he was on the show before apparently, or that we had video And also, when we— apparently, if we— the recipe of you mix Jason Dixon with Pete Cheslock on a podcast episode and it results in debacle. So thankfully Pete's not here. Jason, you want to tell the guests a little bit about what's up with you lately?

**Aneel:** Sure.

**Jason:** In my defense, anytime you get me and Cheslock live on anything together, I'm probably drinking. So I have a decent excuse. So I continue to do work with Monitorama and open source projects like Graphite. I'm kind of winding up my time with Librato, which is a metrics platform. It's monitoring as a service. A lot of customers use them for host-based or application monitoring. I've been working there the last couple years building out the integrations team and the integrations on the product. I'm actually winding that down, and I'm about to transition over to another startup, or a startup, called RainTank. You may know them. They do Torkel of the Grafana project, actually works with them. He's one of the co-founders there, and they're doing some really cool stuff with open source monitoring. So I'm really excited to start that next chapter there.

**Bridget:** [00:02:54] Awesome. I'm so excited that you're on the podcast again, Jason. And for once, I'm like a host this time instead of being a guest on it with you. We also have Aneel Lakhani, and I'm excited because Aneel is somebody who I think I met you, Aneel, at Velocity a couple years ago, was it?

**Aneel:** Yeah, that would make sense.

**Bridget:** And like, your conference talks just have blown my mind, and then talking to you about monitoring makes me realize that there's tons of stuff I've barely started to explore. So why don't you tell our guests a little bit about yourself and the stuff you're doing in this space?

**Aneel:** Sure. So my name is Aneel Lakhani. I work at a company called SignalFX that's also a monitoring as a service provider, but it's very much focused on self-service monitoring and building alerting and metrics visualizations around the streaming analytics platform. So it's primarily focused on speed and providing a lot of flexibility to people. I've been in and out of this space for almost 20 years now. 20— it'll be 20 years full-time ops-oriented stuff next Tuesday.

**Bridget:** [00:04:06] That's oddly specific. Did something happen?

**Jason:** Like, yes.

**Aneel:** When I turned 15, which is old enough to legally work in certain kinds of jobs, I got a tech support job, which I was doing full-time after hours after high school. And I've been in tech full-time since then.

**Jason:** So admit it, the truth is that's the day you installed Nagios for the first time.

**Aneel:** Yeah, well, actually it's the day I installed Debian for the first time.

**Bridget:** Nice. Well, and okay, so Jason's actually—

**Matty:** So apparently I've been saying it wrong this whole time. So it's Nagios? Not Nagios?

**Aneel:** Oh my God, let's not talk about that.

**Bridget:** I feel like I've heard people who work at Nagios Inc., which is apparently headquartered here in St. Paul, Minnesota, call it both, so I don't think it matters.

**Matty:** Does anyone call it Nagios?

**Aneel:** Oh, that's my favorite, is Nagios.

**Matty:** Nagios? Nagios?

**Jason:** [00:05:07] It's pronounced no.

**Bridget:** Well, and so that is actually where I thought we were. Gosh, basically I feel like, okay, from when 15-year-old Aneel started doing this stuff, um, you know, 20 years ago, which like we— yes, we've all been doing this for that long and it's surprising to think about. But, um, when, when he started doing this stuff, monitoring was a very, relatively speaking, simple thing compared to how it is today, right? Because like it used to be You set something up to check on all your stuff. You knew what you were looking for, and you just kept looking to make sure everything was still okay.

**Matty:** What's up, gold?

**Bridget:** Right? And like, now it feels like, at least a lot of the hype cycle tells us, that monitoring today is you have this giant fire hose and you have to apply some like machine learning to your internet of unpatched things or whatever. And so it's like this hugely diametrically opposed you know, sphere of monitoring that maybe we're all headed towards or in. And I kind of feel like both of you two have a lot of insight into where monitoring was, where it's— where it is now, like, for the rest of us who don't work at monitoring startups, and like where it's going. So that's kind of what I wanted to talk about today.

**Jason:** [00:06:22] Yeah, I'll start it off. I'll kind of kick it off with like— and you mentioned this, I think, before we started the call today— but like Nagios, people are used to You're like, okay, here's this host or this service I need to monitor, and I'm going to do that. I'm basically monitoring for how it's doing right now. The problem that we found, and I'm going back to my days at Heroku, was that you lose this context. You lose this historical context of how the service has behaved versus how it's behaving now. I think that we developed this concept of the event stream. You actually start to break it down rather than just thinking of, okay, here's this software that we wrote in Nagios. That goes out there, runs the thing like we expect a response, checks the response, and that's it. Now we're actually collecting metrics, and we can not only store those metrics, but we do things like window threshold queries and firing off alerts or— I don't know. There are these different components, and over the last— I mean, I want to say going back 6, 7 years, you started to see all these different and, for the most part, open source projects focused on different components, different functional areas. I think that has kind of led us to where we are today. I think what has proven that out is that you actually have paid commercial services oriented around specific functional areas. People understand that there's value in outsourcing just this particular area of the overall architecture and not just like, okay, we need to run IBM's big enterprise monitoring software or whatever.

**Aneel:** [00:07:58] I'll take it a step further. So, it's not just— or the way we've done it in the past isn't just seeing how a thing is doing right now. It's, what are you doing? What's the response? And between the times when you're asking the question, you have no idea how that thing is doing. And you're only asking the question of the one thing. You're not asking the question of a cluster. You're not asking the question of the service. You're not asking the question from the point of view of the user's experience. All you're doing is, Are you up? Yes, I'm up. Are you giving me the right HTTP response? Yes, I am. Are you giving me the ping time I expect? Yes, I am. Okay, great. But unfortunately, that is insufficient. It's just— if you're measuring yourself on your actual live performance and on your historical performance and what changes are in performance and how you respond to real demand from real human beings using your product, that's simply insufficient.

**Bridget:** [00:09:02] Yeah, and that actually— you touched on something that Jason also brought up that I kind of want to dig deeper into, this idea of expected or this idea of thresholds. So if you're setting a system that's kind of got a static threshold, I feel like that's a way that it was very typical for people to do things that has serious limitations. Can you go into a little bit more detail since you mentioned thresholds, Jason? Yeah. Then hearing a little bit more from Aneel's point of view, too?

**Jason:** I'll say that, and maybe this is going back a couple of years, you started to see this backlash, people talking about thresholding. It was largely around the discussion of, how can we advance AI or machine learning around monitoring and get smarter responses? That all has value. I think you have to think of monitoring like people do with security. It's security in depth, and you have to approach it with different layers because there's no single answer that's going to tell you how your service is doing. It's the same reason why I'm a big— I shouldn't say big opponent, but I don't like machine learning as the solution. It's a great addition to your overall approach. There are times when you're going to know what to expect from your system, and I think thresholds are fine for that. I think any threshold is better than a static yes or no, how am I doing? But, I think all the machine learning you do, all the algorithms you see developed these days, they're all around, okay, how is this thing performing? What is the expected band of performance? Are we seeing any anomalies? I think that's great. I think it's really important. I think anything that helps operations people, engineering people sleep— not to say that one can't be both— but to help people sleep, to help them relax, and to keep their systems running is really important. And you touched on an important thing with the thresholding too, Neil did. Business transactions or business kind of looking at it from a business perspective, like, am I doing what I'm supposed to be doing? Am I doing the work involved or the expected work of me as a system? And not just, am I getting a 200 or am I passing, you know, how many am I handling, this many requests per second? Are you doing what you're supposed to be doing? And this goes back many years to a customer we had at OmniTI. And I don't remember the exact quote, but it was something to the effect of, I don't care if my servers are on fire as long as they're making me money. At the end of the day, that's what it's all about.

**Aneel:** [00:11:23] Yeah, I would agree with that 100%. I mean, a lot of people, and I get this feedback sometimes when I'm talking to people about modernizing how they do monitoring, a lot of people seem to think that moving away from or not only using checks and static thresholds is something you only need to do if you're using a lot of ephemeral infrastructure, if you're using auto-scaling on Amazon, if you're using schedulers like Mesos or Kubernetes, etc., where some system takes action without you knowing it that involves the scale of your processes or infrastructure components. But that's simply not the case, because you've— I mean, to Jason's point, what you've always really wanted to know was whether or not the thing you were supposed to be doing, you were doing within some envelope, you know, within the range of SLA you're supposed to be providing or within the expected performance envelope that you, that you think you need to be delivering in order to make money or to be a viable business or going concern. It was just that we weren't actually measuring that. And now we can measure that and we should.

**Matty:** [00:12:35] It's, it's like definitely a context story. And, you know, I know there's kind of differing bands of like how deep and crazy understanding of this some people have versus others. Some of this is gonna seem super simple, maybe. But I, you know, to your point about it doesn't matter whether you're ephemeral infrastructure or physical infrastructure or whatnot, if you don't have the context of what these things mean, you're gonna interpret them the wrong way, you know. And it again reminds me of like, I had a fellow sysadmin who, you know, back in the day and was freaked out because we had a database where he's like, this thing is running at 90% CPU, and we're like, That's what it's supposed to do because the thing that's taking up all the CPU is SQL Server doing its job. But what's happening is it's like Jason's point, we're still making money. It's performing all the transactions, but we're not looking at it in context. I think that's what makes it harder. You actually have to understand more than your thing. Then that leads me to a question that I have is that then what people want, I feel like I get asked for a lot, or they kinda wanna tie it into, because everyone's in love with dashboards. Dashboards are cool. I understand it. They, they're awesome. But this idea of, and the phrase that kinda gives me a little bit of the crawlies is single pane of glass. Right? And I kind of always wanna ask, how big is your pane of glass? Because you wanna put everything in one place, but is there, there's no one visualization of all these things.

**Jason:** [00:14:02] Like, but I think the single pane of glass is specific to your role. To the systems that you're trying to manage. It's not going to be the same thing for everybody across the company, but I think it's important for those tools to be dynamic. Going back, I had an open-source project called Descartes, which was a dashboard, whatever, it's a Graphite dashboard. Prior to that, everybody was declaring their things in configuration and making it very static, and this is what it's got to look like. You're trying to stuff as much stuff in there as possible. Actually, Descartes is a bad example. Dusk is a better example. I wanted something that was very dynamic that allows you to kind of just like on the fly interpret the stuff, look at— look for hotspots or anomalies in the thing. And so like Dusk was one of those. And like, I'm a big proponent of like— I love the single pane of glass, but on the other hand, I'm probably making your case now, Matt. But like something that on the fly, it's very meta. You can like look at it on the fly and say, okay, this is how my fleet is doing for this specific thing that I'm interested in. Rather than having to look at a single pane of glass for everything all the time. And I think if you look at like horizon charts, I think that's a great example of a very niche piece of visualization that is great for finding like those things. Like you're not gonna use it to do kind of deep diving, but for finding at the surface layer, like what vector is a problem here, I think those can be really handy.

**Aneel:** [00:15:26] Yeah, and I don't— and I honestly am skeptical of the single pane of glass notion as someone who worked at IBM for a long time and has seen many single panes of glass come and go. Um, yeah, uh, so, so I, I want to, uh, echo what Jason said in that for any given role you want a single pane of glass, but all of the things that generate data and display data should not be walled gardens because, you know, your BI people or your CEO's single pane of glass might be Tableau, whereas as an operations person, you know, it might be SignalFX or whatever, or as a marketing person, you might live inside of, you know, Marketo or Mixpanel. But what you do need is all the data coming into and out of all these systems must be able to come in and get out so that everybody has access to basically composing their own view out of the things that are relevant to them and that are in a relevant context to them. That could be one thing across an entire organization, but it almost never is.

**Bridget:** [00:16:44] I mean, there's some things the whole org's probably going to care about, like, you know, site shoppability. If you have like a retail site and suddenly transactions drop to zero out of the blue, like, people are— everyone's going to probably care about that and want to know why.

**Matty:** Everyone should, but that part of your problem is that's also putting into the context of getting people to care, right? Like, that's the value of doing this is that you're putting it in a way when you're seeing that actual metric, where the problem is your organizations are probably A lot of people don't care. They'll be like, well, that's a business problem, right? Well, hey, news for you, you're the business, right?

**Jason:** Maybe I'm being naive, but I think if you're siloing your data within your organization, like, I think you have bigger cultural issues.

**Aneel:** Yeah, I mean, we— I know plenty of examples where, for instance, there's a company that I work with that their fundamental metric for the business is the number of documents that their users are opening in any given time period. That's the thing that they can correlate both to revenue but also to infrastructure, to the, you know, to their performance and capacity needs. And it's, it's one metric that everybody from the CEO down to network engineering looks at and pays attention to because it is the one metric everyone is geared around optimizing for and making sure they can support. Now, I don't necessarily know that every business can come down to one metric. If you're one business with one application, you can probably do that, but if you have many applications that you're selling, maybe not. But I do think it's possible to have metrics that are relevant to everybody regardless of their role.

**Bridget:** [00:18:29] Yeah, this is one of the things we've been hearing a lot from— if you look at the stuff that James Turnbull has been talking about with the Art of Monitoring book that he's writing that's coming out very soon now, I hope. One of the things that he's said in conference talks over the last year is you, meaning you operations people in this room, are not the customer of your monitoring. Like, you're at least not the only customer. Like, the entire organization is going to want some of these results. Maybe they want them in a slightly different view or form than you want them, but they're going to need and want this stuff. And what I'm hearing from you is it should be— from you both— is that it should be self-service and composable.

**Jason:** Yeah, I'm glad you mentioned that. I was just about to say, I love the phrase— I shouldn't say the phrase, but I love self-service monitoring. It's something that we really, uh, again, to go back to my time at Heroku, is something that we're huge fans of. And like, if you're building out a monitoring service, it had to be designed in such a way that anybody can consume that. Like, again, you don't want to silo this stuff. You want people to collaborate. Um, you know, a good example was like, so back in the day, like, you're running Nagios. So anytime you add a service or something, you've got Commit this configuration and push off. Well, if the commit repository or for whatever, stuff is walled and you're not exposing that to the engineers because you're an operations shop and not a DevOps shop or whatever, that's a whole other conversation. How do you do that? We abstracted it out. One of our developers built this thing that would query Graphite and return an HTTP response code like 200, 300, 400, or 200, 400, 500. What was fantastic about that was then you could do something like, Pingdom, and you could actually put that query into this service, and Pingdom would just hit that. If it was a 200, then you know it's good. If it's a 400 or 500, you know it's bad. You didn't need to modify code to do that. It enabled, it gave access, it removed those silos, and any developer could go in there. If they can run a Graphite code, they can put up a check and alert in Pingdom within a couple of minutes.

**Matty:** [00:20:28] The other thing is, I was just going to say, not siloing that stuff off too, if you're going to take the approach, and I don't know if he's the originator of the comment, but when John Sheehan was on our show a couple of years ago, he said monitoring is just testing with a time dimension. That's just something I've— not to say that to diminish what monitoring is, but I like to take that approach when I think about testing is if it's important. What I usually tell my customers or people I'm talking to is, is it important enough for you to be monitoring this in production? Then you should be testing it, right? So if you've got, if you're, you know, again, siloing it off and saying like, okay, well, monitoring is a thing we do once it's baked and it's released, and that's the only place where those walls exist, then how can you filter that into—

**Jason:** So you need, first you need to go back and tell John that no, it's actually testing is monitoring without context.

**Aneel:** Yeah. So you have a very good point here. So our approach and what I've seen work and basically what all the engineers here do is because they're required to monitor their stuff with SignalFX since they're SignalFX engineers, the metrics are baked into code from day one, from when the code is written. Is this— do I want to time this? Do I want a gauge on this? Do I want to know the response? Response time? Like, is this— is the performance of this thing relevant? And if, you know, at least in our— for the way we do it, engineers do hold pagers in their own rotation. You know, if they're going to get paged for something they did or some other engineer did and they have no means of getting access to visibility about what that thing is doing, whether it's a block of code or a middleware kind of platform like a database system like Cassandra or Elasticsearch or something, or part of our frontend UI, and they have to troubleshoot it, how are they supposed to do that if they don't know what that thing is doing? So the idea of monitoring can't be, or shouldn't be, about is the thing up or down in prod. It's supposed to be about is the service performing enough, and is all of the service performing, and all of its various bits and pieces performing? And if you're going to do that, that should be baked in from the beginning, because then how do you even know if modifications you've made to the service have an intended effect if the same metrics don't follow you from code through test through QA through canary through deployment and into production?

**Jason:** [00:23:06] So I'm probably going to get myself into trouble here, but I'm going to ask anyways. So, Aneel, it sounds like you're kind of in a similar mindset as I am. I'm an advocate of monitoring all the things, starting off your instrumentation with your code from day zero. I'm curious because I know that, again, sorry if we're getting a little too personal here, but SignalFX and Librato are both meter-based pricing, they're usage-based pricing. That's really hard because you're trying to convey to users that this is an important thing. Even if you're not using it now, you may use it one day. But on the other hand, like, you know, like, I think personally I'm a big fan of metered pricing. Like, I think it's the fairest to the customers. But when you try to tell them that, like, okay, well, we have to— you know, you're gonna have to pay this to monitor all those things that you may or may not need. Like, how do you bridge that gap?

**Aneel:** So from a purely business perspective, the way I explain to people that seems to work is that you It's basically the amount of monitoring you're doing. So it's not the number of things, it's not the number of processes, it's the scale of monitoring you want to do. If all of these things are important to you, then you monitor them. And the nice thing about metering on usage in one way or another is that that gives people a significant amount of freedom to turn knobs. I can change the rate at which I'm sending data. I can change the amount of data I'm sending per object. If I find that a thing is not useful to measure, I can stop measuring it or measure it at lower frequency. If I find in the future that something is useful to measure, I can measure it at a higher frequency or begin measuring. And all that can happen without you changing the amount of money you're paying. Because it's kind of like having bandwidth, right? You get bandwidth for— especially if you're If you have any background with physical data centers like I do, you get bandwidth from bandwidth provider, you use it however you see fit, the bandwidth provider does not care, and you're free to manipulate how that bandwidth gets used amongst your devices or things or apps or whatever to your heart's content. So, so what I find is that for this to really make sense to people, it kind of comes along with a mindset of continuously iterating on what it is that you care about and trying to get closer and closer to the handful of metrics that actually matter for any given service or platform.

**Bridget:** [00:25:34] Because I heard a, I heard a really important word there, which is useful. And I feel like that's going to be something that an individual consumer, you know, client, organization, whatever, of the metrics is going to have to determine on their own. Like, usually a vendor is not going to be able to come in and say, oh, this is your only and most useful metric. Like, you're not going to necessarily be familiar enough with people's business case to know that.

**Jason:** That's probably the most common and yet hardest question to answer is When I was doing a lot of talks about monitoring, people would always ask me after the talk, what's the most important thing to monitor? How do I know? I'm not trying to cop out, but you're the only one that's really going to know that. I can give you some good examples. We talked about monitoring for the business, monitoring the workload. That's the easy answer, but specifics, you have to know your data, you have to know your systems. That's why it's so important. We talked about DevOps. That's why DevOps is important in one particular facet. You have to understand how your systems— you have to think like an engineer, you have to know what to expect out of your systems, the work you're putting into it.

**Aneel:** [00:26:36] Well, and your mindset itself, your approach has to be non-static. Like, you have to just be all right with the idea of just iterating, of finding new things out tomorrow that you did not know today that are going to change your behavior, change what you look at, change what you optimize for. And to some degree, you know, for a thing that has become standard or widely used, you can say, here are the things you should really be looking at. From an operational perspective, but that only tells you about the operation of that thing by itself, out of context, without regard for the rest of what you're doing, which is, I mean, like in Kafka. In Kafka, there is no metric for average message size in Kafka, but it's important to know whether your messages are generally small or large, or if there's a change in the size of your messages, because that has a big impact on throughput in Kafka. So, that's a relevant bit of information if all you care about is Kafka. But it might not be relevant if the things that are putting messages on the queue and taking messages off the queue don't care, or if they're designed to do something where message sizes are supposed to change over time and that has some meaning to the business.

**Bridget:** [00:27:43] Yeah, or we were talking about Elasticsearch a couple minutes ago, and I was kind of having the Elasticsearch cringeworthy remembrance of, oh yeah, I remember when I set up a cron job that would just check every minute to see if the cluster had gone yellow. Because if the cluster is going to go yellow later, everything will be terrible.

**Aneel:** You should not have to do that. I mean, so here's the other thing about if we go back to checks versus metrics.

**Bridget:** So many cron jobs that one should not need and yet one needs.

**Aneel:** Yeah, that's right. I mean, you're effectively just checking every machine to see, you know, every node to see if it's yellow or even if it's red. And instead, you should just get a single cluster health state status of some kind, which does not exist.

**Bridget:** Well, it was the cluster, you know, Does the cluster have any yellow?

**Aneel:** Yeah, right. But if you do checks and static threshold, you know, that's 40 alerts, right? Or however many you have in the cluster. But if you're using a metric system and you're fundamentally focused on doing analytics on the data you're getting, then you're just like, just give me one alert when the damn cluster changes status, and don't tell me again until it changes status again.

**Jason:** [00:28:49] Yeah, I don't— that's really important because I We touched on it before the call, but, you know, we start talking about, like, the whole cattle thing, right? Like, these ephemeral systems, and especially as we— I hate to say this, but as we go from a still-in-its-infancy kind of containerized world into the possible, like, serverless-as-f movement.

**Bridget:** We were just like, did we have an over-under on when that word was gonna come up? I just, I have to I have to have my little rant moment on serverless for a minute here. Serverless is nonsense because there are still servers, you just can't SSH into them.

**Matty:** They're just not yours.

**Aneel:** I hate to break it to people, there are always servers.

**Matty:** I don't know if you saw the meme that I made last week or whatever, which was like, private serverless, and it's just an empty data center.

**Bridget:** But yes, you're right. We are moving into this, like, okay, just fire off a function. That actually leads to fascinating questions about, well, how do you monitor that? If you want to touch both, you want to touch a little bit on how that whole containers to just Lambda functions, how that changes the world of metrics and monitoring.

**Jason:** [00:30:05] I mean, I was going to say, Adrian Cockcroft did this really good talk. He's probably done it a few times, but over at re:Invent, I think last year, about how these systems, we're used to thinking of systems in terms of months or weeks or days, Then containers took them down to minutes or even seconds. How do you monitor that? You can't even fire up a script for Nagios. You can't cron that. Even systems like Graphite or Librato or even SignalFX, these things are ephemeral systems. Even though we're starting to think of our metrics in terms of multidimensionality, like Metrics 2.0, still, these sources, these hostnames, they don't matter. Because the system, like, by the time I finish a sentence, that system's already gone. So they're work units, right?

**Bridget:** So that kind of takes us— that takes us to the event stream then, right?

**Matty:** Right.

**Jason:** We have to start thinking of this in terms of work and sort of aggregate work. Am I performing that thing? And like I said, I don't mean to keep coming back to that, but that's really what it amounts to is like we have this amount of work that needs to happen. How many compute cycles can I throw at it to get that work done? Okay. Is it happening? And I don't know that there's a lot of great answers like practical pragmatic solutions around that yet, but I think it's definitely where we're headed, and I think people understand that. So that's like, we've got a head start on that. Like, I don't think that's an alien concept to us. It's just actually building the systems and the software that allow us to serve it effectively.

**Aneel:** [00:31:25] Yeah, I mean, if, you know, if, if you're really going to go to, I guess what people call serverless, if you're gonna go to a Lambda kind of system where all you're doing is running functions that do things, then you still know what you need to measure, right? You're still measuring the performance of those functions, the timing of those functions. Are they responding in a sufficient amount of time? Is the experience delivered to whatever is downstream of those functions what I need it to be or expect it to be? The nice thing is once you start taking a metrics-oriented view that is focused on service-level performance characteristics, or really what Google called service-level objectives, which is essentially what this is talking about, then changes in the underlying model of how you perform those functions don't change what you want to measure. They just change how you implement the act of measuring, which is easy, relatively speaking, once you know what it is that you want to get to. But I'd like to take a— like I said before, I don't think having ephemeral infrastructure is necessary or drives a need for using metrics versus checks or having analytics or having multidimensional models. I mean, we've got a customer that has 100 physical machines, each of which runs 20 to 30-ish Docker containers spread out over 5 locations around the world. And they are, they're so precise, they've so precisely measured and watched their own performance profile that they have, they don't need a cloud platform, they don't need auto scaling, they don't need ephemeral compute. They know exactly how much performance they want, and they deal with it directly in the fastest way possible on bare metal for the most part. But they, but they still want metrics. They still want to know what their error rates are and what their success rates are and whether or not they're within a performance envelope and when they approach the boundaries of the performance envelope that they want to be in. And they can't do that with checks. They can do that with Nagios.

**Bridget:** [00:33:43] So that kind of does bring us to the— like, we've talked about a lot of this from kind of a high level, but from like a tools perspective and like a more practical approaches perspective, other than of course give money to both of the companies you work at, which is a given. Of course, people should do that. But other than that, for both of you, if you're talking to people who are just now realizing, well, shit, I guess I need some of that metrics stuff. I can't just be doing static checks. Where should people start? What's the fastest way and maybe the most effective way, which may not be the same way, if people want to start?

**Matty:** What's the most important thing, Jason?

**Jason:** I mean, honestly, I think most people, when they're starting to learn a new technique, technology turned to open source, and I think that's the right approach. Like, until you reach that inflection point where you know that what you have doesn't solve your needs anymore, or if your time is better spent on your business value proposition, then like absolutely do it yourself. Learn it, play with it, find out where the weaknesses are, stress test it. Once you're like, okay, I've got better stuff to do with my time, if you can outsource it to somebody like a Librato, like a SignalFX, like a Rain Tank Graphic, whatever, by all means do it. But I think get to that point because then at least you understand the technology, you understand the nomenclature, and you're, you know, it's just easier to work with.

**Bridget:** [00:35:00] Start with open source, become a more informed shopper.

**Aneel:** Yeah, I would agree with that 100%. I'll be even more specific. You know, if you have no idea where to start, look at collectd as a collection agent just because of its such a large ecosystem of plugins and so many things that it works with and so many people work on it and it is all things considered, compared to every other agent I've ever played with ever in my 20 years in the space, stable.

**Bridget:** Um, I like how you have to kind of qualify that. It's stable. Yeah, compared to all the other things.

**Aneel:** Like, I—

**Jason:** and Neil, you're probably in the same boat. Like, we've been around this, this industry long enough that we've seen a lot of open source agents out there, and the biggest problem with a lot of these is, you know, CPU and memory. Um, are they leaking memory and are they consuming CPU? Um, are you It's— what's the law, like, where you're not affecting the systems you're trying to measure? Heisenberg.

**Bridget:** Heisenberg. I think it's the observer principle.

**Matty:** The uncertainty principle.

**Jason:** [00:36:00] Yes. I think collectd, from my experience, is the one that's gotten as close to that as possible, that's avoided influencing the system that it's trying to monitor. It's written in C, so you know it's high performance. But to the point about memory leaking, And this is not trying to be like, oh, you have to trust me on this, but like, I've been an OpenBSD developer and a lot of the people on the Collectd team are also OpenBSD developers. Like, I trust them with open source code more than pretty much any other kind of collection of people that I've ever encountered. Like, they understand don't introduce regressions, and they understand security, they understand network performance. So that's personally why I'm a fan.

**Aneel:** I would say though that you should be careful with collectd plugins, or at least you should watch plugins when you use them, which is true for any system that involves some core thing into which you have plugins, like browsers.

**Jason:** Are you implying that user-contributed Python plugins in collectd are a bad thing?

**Matty:** I don't know what you're talking about.

**Aneel:** No, just sometimes if you install a plugin, things can become funny, which is true in many other worlds. Yeah, but yeah, but collectd is a great starting point, and honestly, so is Graphite. Because they're easy, a lot of people understand them, they're relatively self-explanatory, they're well documented, and there's a large support network around both.

**Bridget:** [00:37:24] I've had good experiences with statsd and putting statsd stuff into Graphite too. I don't— I'm seeing a strange expression on Mr. Graphite's face, so maybe you can give us some context around why we should or should not do such things.

**Jason:** I heard that somebody is writing a book about Graphite.

**Bridget:** Tell us, how is the book going?

**Matty:** It's going very well.

**Jason:** So it's— there's one more chapter that I want to finish up. Everything else is out there in a release format by O'Reilly. So I'm personally very excited. You know, I clearly didn't do it for the money. That's what everyone says.

**Bridget:** Everyone who writes a book is like, just so you know, don't do it for Don't do it for the money.

**Jason:** No, it's just, you know, it's, uh, it's an arduous but entertaining and fulfilling process. And specifically the graphite book, it's like probably the only thing that I have enough knowledge in my brain about that would justify trying to get this out in book format. So it's pretty cool.

**Bridget:** Nice. And since we were, since we were talking about tools and you were mentioning like OpenBSD because you're totally that kind of hipster, I'm in the FreeBSD hipster camp. We can be hipsters But there are, there are a lot of people, we have a lot of listeners who are like, BSD, that sounds delightful, I'm using Windows. Windows 10 is awesome and exciting and new. So like, are there any tools you would recommend for people who are in that particular situation other than you can run Bash on Windows now?

**Aneel:** [00:38:46] In the Windows world, so there's actually a collectd port for Windows that I believe was made by a team over at Bloomberg. Actually, I think there's more than one of them. The most recent one that I saw was by a team at Bloomberg. There's a a Windows PerfCounter reporter that some of the engineers at SignalFX wrote for Windows users. And you can pipe data from those things into Graphite, into SignalFX, into all kinds of tools.

**Matty:** I was just going to say, you know, listeners, if you're doing some cool monitoring stuff with Windows that we haven't really talked about, feel free to kind of tweet it at us. We'll be— we'll share that back out around as well. It's my Windows monitoring background is a little antiquated. It's been a while since I've worked for a living. In a Microsoft shop. So I know it's gotten a lot better, but I don't want to speak as if I could give a super awesome recommendation.

**Jason:** To add to Neil's comment, the other project that I'm thinking of by Bloomberg is called CollectDWin.

**Aneel:** Right. Oh, there's also Metrics.NET, which is basically like Dropwizard Metrics except for .NET.

**Bridget:** [00:39:52] Now I'm starting to feel like if only I were running Windows, I could monitor all the things.

**Aneel:** Can I circle back around to something Jason talked about earlier, which was machine learning?

**Bridget:** Oh yeah, yes, yes. Tell us about the Internet of Unpatched Things and everything we can learn from it.

**Aneel:** So I've been around for a while too, and I've been— I have some experience with the large bucket of things people call machine learning, and at least in an operational perspective, for people who run and maintain things on a daily basis, I have never seen anything do any better than generate 50% false positive rates, which is basically crap, in all honesty. And the best I've seen at it is around 50%. Now, what you can do, and especially what Jason suggested, is use it as an additional tool, you know, in your tool chest, something that gives you more leverage. For instance, Uber has a— in their monitoring system, they have— it's basically a metrics-oriented platform. They have a front end to it that basically classifies incoming metrics as either being in-line or out-line. So a thing that conceivably might be out-line, they shunt off to a different process, which then learns from these outliers over time and classifies them and classifies them differently, and then people can decide whether or not to do anything about them. Which I think is the absolutely correct way to utilize ML. The incorrect way to utilize machine learning is to turn on some kind of algorithm and let it generate alerts. That is the single worst thing you could do.

**Matty:** [00:41:34] Magic is fine.

**Jason:** Come on, don't look behind the curtain.

**Bridget:** Well, and that actually— and I know we're running up against our time here, but that brings us to the ever— the perennially popular difference between monitoring and alerting. Since we've been talking about metrics and monitoring all along here, and then Aneel just brought up, okay, when should you alert humans? I'm sure, Aneel, you have your opinions, and then I'd love to hear from Jason as to when you think we should be alerting people about things.

**Aneel:** Yeah, I'm going to make a confused face because there's no purpose to monitoring other than to generate alerts. You can use a monitoring platform. To do exploratory understanding of your system and iterative development and all that. But when it comes down to operations, the reason you monitor things is to figure out what to alert on, to figure out what's worth alerting on, and then to alert on whatever that is, and to do that continuously over time. So, so there's— there, as far as I'm concerned, there's no monitoring without alerting. Uh, now what you should be alerting on is all over the map, right? It depends on your scope of responsibility and what you care about and what your paging structure is and what your culture is and how your organization is set up and all kinds of things. But in general, my view is that you should only actually page on something that takes you out of the performance envelope of your service, whatever that is, whether that's an entire application or a microservice that you run or whatever. Otherwise, you know, you have to decide what's a sufficient warning level where you might want to be notified, and everything else should just be an event that doesn't notify anybody but that you can go back and interrogate.

**Jason:** [00:43:23] So I'd add to that, and I would say yes, I agree with that. I think nomenclature is really important, the terminology that we use, because like, in my opinion, it's not monitoring versus alerting. Alerting is a subset of of monitoring, right? So you have all these different functional areas. Data collection is one, the most important one, because that feeds not only monitoring and alerting, but it also feeds like capacity planning. Like that's the other kind of side of it is you have monitoring and alerting, you have capacity planning, you also have analytics. Like the great thing about analytics and monitoring is like you can perform it on the same set of the same dataset, right? It's how you slice it and dice it that makes it operationally different. Or more useful for one scenario.

**Aneel:** Oh, you know what's a word we haven't used? Availability. This whole time, which is kind of amazing.

**Matty:** We had a whole episode about that.

**Jason:** Have we thrown out scaling yet?

**Bridget:** I think we had—

**Matty:** hey, we have 10 minutes left, Jason, before you have to leave. Let's open that can of worms.

**Aneel:** So let me say that things have to be available, but if something is available and non-performant, it might as well not be available. So it's just— I mean, this is part of the reason checks are insufficient, because availability is not a sufficient metric to figure out whether or not you're delivering a service you want to deliver.

**Bridget:** [00:44:39] Right, and there's a time window there too. Like, hey, it answers eventually after 800 milliseconds, and you're like, the customers have already left.

**Aneel:** Yeah, and these 3 things, I mean, these 3 keywords that have come up— capacity, availability, and performance— are all closely related, right? To have sufficient performance, your things need to be available and you need to have enough capacity of resources to deliver that performance. And if any one of these 3 things goes off sufficiently, the other 2 do as well.

**Bridget:** Yeah, absolutely. And so, as Stratton was mentioning, we should probably wrap things up or move towards the definite middle here. So I would love to hear just kind of, you know, first Jason, since Aneel talked most recently, first Jason, then Aneel, like your final thoughts/advice/ Words of wisdom to people who are interested in this whole concept of finding signal in the noise?

**Jason:** Wow. You know, try not to chase the shiny stuff, I guess, would be the biggest thing. Go with what you know, and if you don't know, talk to people who do. Avoid chasing the newest serverless or the newest machine learning. Start with the basics. Understand what the functional areas are, how to get your metrics in, how to instrument your code. If you're not doing code, which collection agents are you comfortable with? I guess above all, and I'm surprised that we haven't touched on this at all, configuration management.

**Matty:** [00:46:04] Why haven't we talked about that?

**Jason:** In a pre-serverless world, configuration management is obviously key. Damn it. We don't want to dive into this. It's a rabbit hole. But I want to pause.

**Matty:** Another follow-up. Now we have something to talk about next time you're on the show.

**Jason:** I want to pause at this in the community. Why don't the configuration management providers do more to integrate instrumentation of these applications and services into— as emitters to your storage engines?

**Aneel:** That is— that, what Jason just said.

**Matty:** Emoji that.

**Aneel:** That's right, and the only thing I'll add is that on the opposite end of it, You can figure out what metrics you care about regardless of your toolchain. And you shouldn't get distracted from doing that by tools. Just, it is a— no one's going to do that for you. No one's going to figure out what metrics matter for you. That is a thing you have to do, and that is a thing that will stand Regardless of what tools you choose or the change in staffing or what your architectural model is or what your culture is or what your organizational model is. If you don't take responsibility for figuring out what metrics matter to you, no amount of money and technology is going to do that for you.

**Matty:** [00:47:36] The hardest part about monitoring is figuring out what you give a shit about, right?

**Jason:** I'm going to piggyback one thought onto Aneel's. Statement there, 'cause I totally agree. With regards to tools, like, if it's painful to use, try something else. Like, you couldn't say that 5 years ago, but there's so much choice out there in the ecosystem right now. Like, if your graphing tool or your dashboarding or your collection agent just doesn't feel right, try something else. There's so much choice out there. I actually am one of those few rare oddities, like, I enjoy building graphs, really complex, unusual graphs, If I had to use some of these other systems, like, it would drive me nuts. And that's why I enjoy Graphite. I enjoy the API. Like, other people may not even click for them. Like, try different things, find something you like and that you're effective with.

**Matty:** Awesome. Well, so we're gonna try to squeeze in our last little bits here so we can let Jason go appropriately to go do his stuff. I don't know if anybody else has any checkouts. I had one I wanted to share. That my coworker and DevOps-erati and automation-erati, John Kaiser, shared with me the other day, which is, it's Zsh auto suggestions. We'll put a link in the show notes, but it gives you the fish-like auto suggestions, but for Zsh, and it's super cool. And I'm sure that Ben Hughes is probably listening to this and is gonna be like, dude, I like did that 2 years ago. You're so behind. I'm never as hip as anybody else, but—

**Bridget:** [00:49:02] Wait, are we pronouncing it Zsh? I don't actually use it, but I'm just kind of batching. ZSH is what I thought.

**Matty:** I always say zeesh. And I think, I'm pretty sure that when, that yeah, in the episode with Ben a year ago, I think we had a conversation about like the hipper way to say it.

**Jason:** I've never heard that.

**Matty:** You've never heard it as zeesh?

**Aneel:** No.

**Jason:** And now just to be different, I'm gonna go around calling it B-A-S-H.

**Bridget:** So checkouts, by the way, like I don't necessarily have something new, and I think I probably talked about this before, but I've been super happy with Hugo lately. Steve Francia, is that how I pronounce your name? Thank you, because we've really been enjoying it both for Arrested DevOps and for devopsdays.org now.

**Matty:** You know what was the coolest thing? I have to be honest, probably one of the reasons I decided Hugo was super rad was when I realized it was Steve who really has the SPF 13. Vim configuration that I adore. And I was like, that's you, of course I'm going to use your thing. But yeah, it's, it's, it's a static site generator written in Go. It's, it's pretty cool. It's what drives the rest of DevOps anyway. So yeah, check it out, gohugo.io, I think, something. Jekyll's over, people. It's Hugo now, is hip for your .af blogs. Jason, I expect serverless.af to be running on Hugo. Yeah, and so community and stuff, speaking of DevOps Days, if you have an upcoming conference you'd like to see us promote here on the show, fill out this form at arresteddevops.com/conf. That's C-O-N-F. Upcoming conferences, there's a lot of DevOps Days. Go to devopsdays.org. The website usually works if Bridget and I aren't breaking it. You can try the code ADO2016 to register for any of them. It's probably gonna get you 20% off.

**Bridget:** [00:50:58] Oh, and speaking of upcoming conferences, Jason has a very important announcement. Re:Monitorama.

**Matty:** Re:Monitorama? Is that like Monitorama Redux? You mean like in relationship to?

**Bridget:** On the topic of.

**Matty:** Oh, I like, I like the idea that there was a— I thought there was a new conference called Re:Monitorama.

**Aneel:** It's what it used to be.

**Jason:** I think his announcement is that you can't go because there are no more tickets Yeah, you know, it's, it's awkward because I'd love to promote it, but we always sell out like months before, so I don't want to tease anybody. But I think it's a great event. I enjoy it. We get a lot of people that come back every year. So it's kind of like, it's the conference for if you're like me and you don't like— I won't say multi-track, I'll say significantly large multi-track where you end up and you can't decide what you want to do. You're having like regret for the ones you want to, and you end up going to hallway tracks. Like, it's a single track, it's specifically curated for like-minded individuals, and I don't know, I put a lot into it, I get a lot out of it, I think it's fun, I love Portland. So next year, hopefully, if you're not going this year, try again next year.

**Matty:** [00:52:04] I'll get there one of these times. I have the biggest FOMO when it comes to Mondorama.

**Bridget:** So Mondorama, the conference that gives you lots of FOMO if you can't go, but no FOMO at all if you're there.

**Aneel:** And people should make efforts to go to more smaller focus, higher quality events like Monitorama and SRECon, where it's a small number of people who are all kind of trying to solve the same problems and do the same things that can actually share what's going on.

**Bridget:** And as much as I might tease around the silly word, like, I heard the Serverless Conference was actually really good. Like, people are talking in smaller groups about the really focused things they're excited about makes for a good conference.

**Jason:** Charity Majors did a couple of really exciting—

**Matty:** sorry, Matt.

**Jason:** She did a couple of amazing recaps, like, I guess, one of her talk and then 2 of the concept of serverless in general. Fantastic articles, so we should post something about that.

**Bridget:** Everybody should read Charity. That's Jason's checkout, charity.wtf.

**Matty:** [00:53:05] By the way, DevOps Days Silicon Valley is June 24th through the 25th. Minneapolis is 20th through the 21st of July. Of July. Yeah, sorry.

**Bridget:** Oh yeah, we have like 521 people registered right now. The hotel says we can't fit more than 700. Stratton is not one of them. I'm very sad.

**Matty:** I'm really mad.

**Bridget:** But the— I know Signal FX is sponsoring, but Aneel is not one of the people coming.

**Matty:** Okay, Bridget, you're not coming to Chicago, so it's cool.

**Bridget:** I'm gonna be in a canoe in the Boundary Waters with no internet, with my phone locked in the safe at the outfitter's. It's going to be fantastic.

**Matty:** So, hey, if you want to go speak at some conferences, DevOps Days Dallas and Raleigh CFPs are open till June 19th. Philly's is open till June 30th. New York is until July 15th. Singapore till August 15th. Detroit, August 31st. Porto Alegre is a new city for DevOps Days in Brazil.

**Bridget:** Oh, that one's going to be exciting because the DevOps Days is going to be entirely in Portuguese.

**Matty:** [00:54:05] And the website's important.

**Bridget:** The pull request is kind of like, YOLO.

**Matty:** I guess that's okay. Baltimore is new this year too. And yeah, don't forget we have a newsletter. If you go to arresteddevops.com/bananastand, it's the best way to know about upcoming podcast episodes, cool news with DevOps. By the way, if you've come up with some cool news with DevOps you would like us to share, hit us on the Twitters and tell us about it. That's always helpful. So I'm not just asking Bridget and Trevor for ideas.

**Bridget:** All right, thanks to our sponsors. Be sure to visit them at arresteddevops.com/10thmagnitude and arresteddevops.com/datadog. And we'd appreciate it if you'd visit arresteddevops.com/itunes. You could leave us a review in the iTunes Store. Maybe we'll read them again on the air someday when we remember. Um, professional podcasters, we're having fun. Yeah, uh, you can Check us out @ArrestedDevOps on Twitter. Give us ideas, input, feedback. Send mail to shows@arresteddevops.com. Stratton will definitely read it. We have a Slack bot that'll put it in Slack, and I won't click on it to expand it, so it's probably fine. That's awesome.

**Matty:** [00:55:15] And any comments or thoughts you have on this, this episode, eventually you'll be able to go to arrestedevops.com/signalinthenoise and comment and let us know what you're doing for monitoring. Um, so yeah, so it's been awesome to be on the podcast again.

**Jason:** Thank you.

**Bridget:** It's been awesome to have guests, to have Aneel and Jason. Thank you both so much for coming on.

**Jason:** No, I appreciate you having me back. Uh, I don't know why you chose to have me back, but I'm grateful.

**Matty:** Well, Cheslock's been on a couple times too, so there's a floor to this thing.

**Aneel:** We just haven't found it yet. Wait, am I the alternative Cheslock now?

**Bridget:** Uh, Aneel, we are really, really grateful and excited that you came on the show. It's pretty awesome.

**Aneel:** Thanks for having me. It was great.

**Matty:** Awesome. I'm Matt, @MattStratton.

**Bridget:** And I'm Bridget, @bridgetkromhout. We're Arrested DevOps, and remember, there's always DevOps in the banana stain.
