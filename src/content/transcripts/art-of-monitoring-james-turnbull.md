**James:** [00:00:00] Don't ever use a pie chart. You'll kill baby Jesus or fairies or something.

**Matty:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matt Stratton, and co-hosting with me today is Trevor Hess.

**Bridget:** And Bridget Kromhout.

**Matty:** Today, we'll be talking about the book, The Art of Monitoring, and the idea of the art of monitoring with James Turnbull. The show notes for this episode can be found at arresteddevops.com/artofmonitoring. But first, a word from our sponsors.

**Trevor:** Arrested DevOps is brought to you by 10th Magnitude, a company that figures if you're listening to this podcast, you must be pretty cool. 10th Magnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/10thmagnitude.

**Bridget:** [00:01:09] This episode is sponsored by VictorOps, the company that makes being on call suck less. Built by a team of avid DevOps practitioners, VictorOps is the most innovative platform available to support modern IT and DevOps incident management. They do it with an unmatched feature set that's designed to support teams through the entire incident lifecycle, from first alert to final retrospective. This means you can respond to incidents more effectively, which in turn helps you release faster, minimize downtime, and get your life back. Visit arresteddevops.com/victorops to schedule a demo or start your trial. Mention Arrested DevOps and you'll be eligible for some great discounts too.

**Matty:** So, we had James on the show back in February of 2015, which seems like forever ago. To talk about Docker, and you can check that one out at arresteddevops.com/docker. But more recently, he's written a fantastic book titled The Art of Monitoring. So, James, what have you been up to since we last spoke, oh, a year and a half ago?

**James:** [00:02:11] I was probably— when I spoke, I was probably deep in the midst of writing. This book took 2 years to write. It's 700-odd pages long, and I greatly regret starting it. I think one of the— it's one of those things that you think is going to be a good idea at the time until it grows and grows and grows. Beyond that, I'm one of the tri-chairs at Velocity, the Velocity conference, and we just had that last week in New York. It was a super exciting week. It was a little bit challenging because I broke my ankle a month or so ago. If you were at Velocity, I was the one zooming past on the knee scooter. Or up on the stage on the knee scooter looking awkward. And I was also the one staring vaguely off into space when the Percocet kicked in. So, but other than that, I am— I've just started writing a new book of which the topic is as yet a secret, but that's pretty exciting. So hopefully maybe in a year and a half I might be talking to you again if I can persuade you to— of that.

**Bridget:** [00:03:11] Well, let's not wait a year and a half. And also, I was influenced—

**Matty:** Are you trying to tell James to write his book faster?

**Bridget:** No, I'm saying that—

**Matty:** That always works.

**Bridget:** We could talk to him when he's formulated what the first few chapters looks like and wants to talk about how it's going. We don't have to wait until there's a shippable, deliverable book. We can have continuous delivery of updates of progress from James.

**Matty:** There we go.

**James:** I am very happy to share my process with you. It largely involves sitting around in French Parisian coffee shops, looking galois and thinking about infrastructure. So, it's very exciting.

**Bridget:** That sounds glamorous. That sounds to me sort of like the coffee shop we sat in in Budapest, where we were working on the Velocity Amsterdam program.

**James:** True, true. Was it New York?

**Bridget:** Wait, was it New York or Amsterdam that we were struggling with then? It's all a blur. It might have been New York.

**Trevor:** New York.

**Matty:** I'm writing a book now, and I think my fiancée would appreciate your idea of the writing process involving going to Paris and just sitting around. I think she'd be a lot more on board with it if that was part of it. So maybe I'll—

**James:** [00:04:19] let me clarify for you. The question you should ask her is whether you're invited to go to Paris with her. I think you might find that you are not.

**Bridget:** So maybe this is a very important question related to the book, since I see that Ruth gets a mention in the acknowledgments. How does she feel about the new book?

**James:** I think she thinks that it keeps me out of trouble. We have a— we've been together a very long time. And after a while, you know, you run out of things to say. She stops editing books. And, uh, no, um, in all seriousness, I, you know, uh, I do, I do like to keep my brain occupied. And, um, uh, you know, I think this is a useful way of doing that. And, um, I'm in the phase now where I'm, I'm gonna write a couple of chapters, and if it gels, I'll keep writing. If it doesn't, I toss it away. I've got like 6 books, uh, I've got a sensu book I wrote like 3 chapters of and decided I didn't want to write about anymore. So stuff like that happened. So it may not be a real thing, but If it works out, it works out.

**Bridget:** Plus, like, I've gotten actual updates from you on other books that you've written. So I feel like you also are constantly producing updates for your existing books.

**James:** [00:05:27] Yeah, these bastards keep making more product. The team at Docker keep releasing new versions of things and changing stuff. It's extremely annoying.

**Matty:** So the answer is, write a book about something that never changes. All right, O'Reilly, I am on hand to write your book about Fortran. Okay, I'll do it.

**Bridget:** Wait, F77 or F90? 2 books.

**James:** Yes, and all 3 people who buy that book will be very happy.

**Bridget:** So, for this book, James, like, what made you— obviously, you've been very involved with giving great talks at Monitorama, you've been in this space for a long time. But what made you decide monitoring, that needs a book by me?

**James:** So, it's actually the second book I've written about monitoring. Many people don't know that I wrote a book called Pro Nagios 2.0, which was when Nagios 2.0 came out, which I have no idea when that was, but it's a long time ago. I had lots less gray hair, well, I had a lot more hair and a lot less gray hair.

**Bridget:** [00:06:28] Is this different from Amateur Nagios 2.0? I'm just curious.

**James:** Yeah, it was the name of the series. Apress called these books pro books. I don't know quite why they called them pro books.

**Bridget:** Reasons.

**James:** Yeah, reasons, marketing reasons. I'm not a marketing person. So I wrote that about 10 years ago, I think, maybe. And I'd been going to Monitorama, as you said, and I'd been talking to a bunch of folks about monitoring. And I kept having these conversations with what was effectively what I consider the bubble people. And the bubble people are people like Jason Dixon, who live in this place where monitoring is awesome. Like, we're monitoring, Monitoring definitely does not suck. Then if I talk to anyone outside of the magic unicorn Monitorama land, they tell me about their monitoring and it's like they've got PTSD or Stockholm syndrome and they're like, we've got Nagios and it's really awesome, right? Right? They want you to agree with them and I'm like, it's not really awesome, is it? How does this work for you and why did this happen and what did you learn from this postmortem?

**Bridget:** [00:07:32] I mean, it's probably more awesome than, like, I once worked at a startup that got acquired by some people, and they were like, monitoring, that sounds great. Right now, our biggest customer calls us when things are down. And I was like, oh, that's not a good alerting system.

**Trevor:** Yeah.

**James:** And I talk a bit about sort of monitoring maturity, and there's a lot of companies out there that are not very mature. And you're right, that is like customers telling you something is wrong, or monitoring is run by, like, somebody who is following a script, or they're like, When we restarted the machine last time, that fixed it, is sort of like a response to that sort of stuff. I thought, well, what can I do to contribute to be part of the solution and not part of the problem? I decided if I was to write a book about monitoring again, could I choose a bunch of best-of-breed tools and build a monitoring framework that may not actually be the world's most practical monitoring framework in every regard, but one that would represent, sort of demonstrate a new way of thinking about monitoring a new architecture.

**Matty:** Yeah, in the book, that was one of the things I really liked was kind of the modeling, or the maturity, I should say, right? Talking about being the— and for people who haven't read the book, and if you haven't read the book, go buy it and read it. We're not gonna read the whole book to you on the podcast for free.

**James:** [00:08:47] But you kind of talked about— For a small amount of money, Matt, I will actually totally read it aloud to anyone who wants.

**Matty:** Audiobook version.

**Bridget:** Audacity.

**Matty:** I mean, I would, yep, I consume almost everything audiobook-wise now. But, you know, but for, again, if you're going to read the book but haven't yet, some spoilers. You're kind of looking at the stages that James talks about. He talks about, you know, manual or user-initiated or no monitoring, and that would be like what Bridget talked about, right, which is the, our monitoring is our customers call and complain. The reactive, which is, I think, what a lot of people tend to think about when they say we've got ourselves some good monitoring going on, right? It's like, I got a thing that tells me shit's down and then I'm gonna react to it. And then the proactive, which is when monitoring is core to your business, core to managing that infrastructure. It's not an afterthought, it's not a piece like that. And then there's a nice line in here that I like where you said that checks will focus on measuring application application performance and business outcomes. And that's what I'm gonna say it again, and business outcomes rather than just things like stock and concerns like CPU and stuff, right? And that last part of that clause, right, and business outcomes is the thing that always resonates to me. Is, um, and you wanna talk a little bit more about that? I know you go into a lot of detail in the book about thinking that way, but some, some tidbits for our listeners.

**James:** [00:10:19] I was thinking about it because I started talking to people about what they monitor, and they said to me, traditionally there's still what I call a monitoring holy trinity, which is CPU, memory, and disk, right? Like, you, you continually come across, um, folks for whom that's the core, you know, that's the first thing they link to. So they— I call that sort of a very host-based, host-centric monitoring. Um, and you ask a lot of them, like, you know, what does this host do? And they go, it's like DNS. So, and I'm like, So, like, when something breaks, does someone tell you DNS is broken, or does someone tell you that they can't access the website, or they can't check out, or some other transaction doesn't perform? And they're like, well, usually they tell us first that some of the transactions don't perform. I'm like, well, why not stick your monitoring next to the thing that your customers will notice is broken so you know straight away that they've got a problem instead of putting it way downstream where You have 2 problems. One is that you've got to identify when something is broken, then you've got to correlate that broken thing with whatever else it might be related to, and then find out whether, okay, oh, wow, this has a huge impact on our payment system when we had no idea. I tell people that you should invert the pyramid, and you should start with monitoring basic business metrics, things like number of checkouts, payments made, transactions of some kind. And obviously, you know, from it you get 2 things out of that. One is you, you should be measuring that stuff from a latency and customer experience point of view, but 2 is you know straight away when something goes wrong. And from there you can build checks underneath that. You can take that business service and say, what is the applications that make up that business service? Oh, it's our payments app, it's our authentication app, and it's the data warehouse. All of those things need to be running in order for us to to make a payment. So I should monitor each of those availability. Which each of those applications, what makes up those applications? What are the services that contribute to them? Then drill down into that. So you will eventually get to CPU, memory, and disk, but a long time after you've actually started looking at the stuff that you more immediately care about.

**Bridget:** [00:12:27] I think immediately is a really important word there, because you probably do care if you can't write important customer data to disk anymore. You might not care at 2:00 AM, if you are going to have your disk fill up in a week.

**James:** Yeah, and I think that's important too, the contextual notifications and the concept that too much monitoring, particularly in the Nagos world, is binary. So it's like, this thing either works or it doesn't. So if you notify me, if let's say I have a cluster of 50 Apache web servers and 10 of them go away, I probably care about it from a performance point of view, like it probably impacts my customer's user experience, But it doesn't actually impact the availability of my application unless I've built a really shitty application. But generally speaking, that's not a problem. It's a—

**Bridget:** Or unless what's left can't handle the load anymore.

**James:** Yeah, true. But I mean, that tends to be a user degradation experience, not a— from a percentile point of view, maybe your number of unhappy customers at the 99th percentile goes up, but it doesn't— it generally means that things are broadly functional. Should I wake someone up in the middle of the night for that? Maybe, but there's definitely a borderline there. Whereas 10 individual Apache notifications hitting PagerDuty and banging me out of bed at 4:00 in the morning, that's not overly useful to me, and it's probably not very contextual to me either.

**Bridget:** [00:13:53] Well, I mean, it tells you everything's on fire, and if you get enough everything's on fire, you stop believing it.

**James:** Whereas if you get a message saying, Performance is latency on this key application is down 20%. By the way, here's a summary of other things that are happening, and in that summary includes, oh shit, 10% of the Apache cluster has disappeared. Oh, that's a problem.

**Trevor:** I should deal with that.

**James:** I think that's a really important thing is you notify about the thing that you should care about from a business point of view, and you provide enough sufficient roll-up or ability to drill down so you can see what is contributing to that problem.

**Matty:** Right.

**Bridget:** Latency is down, I guess would be a good alert, but I think what you're saying is performance is down.

**James:** Yeah, performance is down. Sorry, latency is up.

**Matty:** Context is everything. I've given this example before about the sysadmin who freaks out because their SQL Server is consuming 90% CPU and says there must clearly be something wrong and I need to react to this and everything. It's like, wait, that's as designed. It's using all of the stuff that it's supposed to do.

**James:** [00:14:58] Yeah. So that's—

**Matty:** if I don't know that, then I think there's something wrong, right?

**James:** Because I don't have context. That's very point in time too. So like, if I have my, like, the classic sort of warning alert, the warning critical threshold in Nagios is like, oh, we'll just set it to like 80% of CPU for warning and, and critical is 90%. Um, and you know, at a particular point in time, yeah, the CPU may hit 99%. Should I send an alert for that? Probably not. If the CPU is at 99% for 12 hours straight, maybe that's a bit more critical. But if that's normal operational load, you're quite right, why would I care? If the CPU is at 99% and latency is way up on that, database transaction latency is way up, well, that could indicate there's actually a problem. It's probably not the CPU, that's probably a side effect, but it should encourage you to be able to drill down to things. It's that context and that correlation that we lack so much of in what's considered to be traditional monitoring.

**Bridget:** I wonder if some of that too, and we have so many other topics we want to cover, I don't want to stay on this too much longer, but I want to point to Trevor and say, you wily devs. I wonder if some of that is because from an Ops point of view, we're just reacting, but we aren't necessarily thinking about things like if we ask the developers or even got their buy-in on this monitoring or had them design it, they might say, oh, I expect this while things garbage collect, or, oh, I expect this sort of behavior because I need an index here. But I think sometimes when we're trying to introspect something that we don't fully understand, we can kind of just react.

**James:** [00:16:34] I think it's really interesting, like, that leads to another interesting point is, like, that conversation with Trevor should actually happen when you're building the application, not when you're reacting to it at 4 in the morning. Like, the last person you want, you get woken up, Then you wake the developer up and the developer says, I don't know, maybe it's garbage collection, or I don't know, maybe it's this. Go and look at this stack trace. Whereas if you'd actually had that conversation at, say, 10 o'clock in the morning while you're fully caffeinated and wide awake and you go, let's build into the architecture a bunch of real-time metrics that tell us the state of our application, then you don't have to wake me up at 4 o'clock in the morning. When you do get woken up, you should be able to see what's actually happening and I give you insight. I think way too much of that needs to happen, way more of that needs to happen.

**Trevor:** Sorry, every software project I remember working on when I was doing software things, the monitoring conversation wouldn't happen until handoff.

**Matty:** My first question was gonna be, we keep making Trevor the proxy for devs, and it's probably been 2 years since Trevor has actually written any application code.

**Trevor:** [00:17:40] But that's about right, yeah.

**Bridget:** But that is just kind of fun. It's just fun to say, you devs.

**Matty:** But that's, I mean, I remember that in a pre-DevOps world, you know, and which is the reality for a lot of people still, but where we would, it would be like you said, handoff time, you know, we're ready to go live and it's, and on the checklist, you know, according to what we do is now TechOps, what are you doing for monitoring? And we go, I don't know this thing you have and go to the devs, what should we monitor? They go, well, you're in charge of monitoring, what do you do? You know, you tell me. And we're like, we don't know what your thing does. And the problem is this conversation is happening at the end when nobody's— ain't nobody got time for that, you know, and/or you're built into a position when it's almost impossible to instrument this application because you should have thought about it 3 months ago. So everybody's talking to each other.

**Trevor:** Or you've been doing it for not enough time, and when you're being told by leadership that, oh, the cloud will solve that problem, don't worry about that, Heroku scale, Oh, okay. I don't know any— I actually don't know any better.

**Bridget:** [00:18:41] So, this actually, James, this brings me to something that I saw in your book, which I've read a bunch of, though there's a lot of code samples that I kind of scanned. But, like, I'm not implementing these exact things. Riemann—

**Matty:** We all have bought your book.

**James:** That's very nice of you. I really appreciate that.

**Bridget:** But one of the things that I saw is, I'm like, ah, excellent, James has definitely read the Borg paper. So, can you talk a little bit about when you're architecting monitorable applications, where do you go with the push-based, just send your event stream somewhere? Where do you go with the self-aware endpoints that, like, health Z their way through life? And, like, when people are— I mean, probably the answer is yes, but can you talk about the difference between those approaches and, like, where to use one, where to use the other?

**James:** So, so every time I bring this up, a bunch of Google SREs roll over in their graves, or they beat me to death with copies of the SRE book or something. Um, so there's 2 types of monitoring, and I'm gonna— I'm not gonna go into black box and white box, and, and which will probably again offend a bunch of people, but I'm going to talk really at the really base level of like traditional, uh, sort of Nagios-like monitoring. Nagios is a central server, um, and it reaches out and it checks something. It reaches out and, uh, Maybe it connects to a host and runs a command to get some data back, or it connects to a website and retrieves an HTTP status code. That's essentially what we call pull-based monitoring. There's a central thing that reaches out, and that central thing needs to know about all the hosts. It needs to have a route to all the hosts, and it needs to be able to punch holes in whatever security on all this stuff that's out there. And it's great if your environment is fairly static. And this is again all arguable points, there's a lot of people who disagree with me. If your environment's fairly static and your hosts don't change a lot much. But enter a world where you might be running Docker containers or virtual machines or in the cloud, where Amazon instances disappear and reappear, Google Cloud— an Amazon instance becomes a Google Cloud instance, becomes a Heroku app, becomes a Docker container, becomes a Docker swarm. Becomes a Rocket container, etc., etc. Hostnames change, services change, they might migrate places, DNS and NTP changes, application tags and states and all that sort of thing changes, in which case it's really hard to keep that central repository up to date. Plus, if things keep moving around, it's hard to work out how to tell it, go look at this IP address, no, this IP address, go and find this route, you haven't got a security group that that works for. That's hard stuff to do. Um, whereas if you centralize your monitoring on the, the thing that is being monitored itself, then what happens is when that thing wakes up— let's say it's a Docker container— it wakes up and says, oh, I'm a Docker container, I'm going to run my application. Inside my application is, say, a StatsD service, um, and, or a bunch of StatsD metrics. And so the application wakes up and says, oh, I need to send the stuff. So it could say wake up and talk to some sort of service catalog or some sort of, uh, service discovery tool like Consul is a good example of this, or etcd or ZooKeeper wakes up and says, tell me about the monitoring, or it might have a default monitoring built in, and it starts pushing that monitoring to that thing. The monitoring service wakes up and says, oh, I've got a new thing, and it checks, checks to say, oh, I know what this thing is. Maybe it's got some metadata or a tag, maybe it's sending me a specific type of events. It says, oh, I know that this thing is an HTTP service. It keeps sending me 200s, that's a good thing. But I have a check that kicks off if it sends me a 500, and that'll trigger an alert. In that world, if that service goes away, I don't have to worry about centralized configuration for it. I don't have to worry about centralized management. I could also do things like, if that service goes away, I can actually check for its presence instead of, say, pinging out to a thing, and monitoring it, I can have the thing say, oh, you know about this Docker container, do something if the Docker container goes away for more than 30 seconds. Stuff like that. That's very simplistic, and there are a number of people rolling, spinning violently, and frothing at the mouth that I've made that very simplistic. But I find that push-based model is much more effective.

**Bridget:** [00:22:58] Yeah. I guess I would say yes. Obviously, yes, I totally agree with you on that because it makes so much more sense than worrying about static configurations or about using Chef Search constantly to try to update your stuff. I mean, we've all gone down this path, and it's led to madness.

**James:** You have to wait for your monitoring to converge in order to do monitoring.

**Bridget:** Right. But I guess the point I was trying to get at, just because this isn't just kind of a devil's advocate question, I'm not sure I actually really know when you have the HealthC-style endpoint that you actually configure, say, your health checks against, how much should be in that endpoint that you're gonna go out and pull as opposed to the stuff that you should be emitting all the time and sending into your centralized log store.

**James:** Oh, okay, I see. Sorry, I took you on a way tangent then.

**Bridget:** I think people are going to be very interested in all that stuff too, but I'm going for a very specific— you have to decide which stuff goes where.

**James:** Yeah, I tend to look at this first and foremost by storage is cheap. You can never have too much data, you can always have too little. Um, so I tend to specify a baseline everywhere. I tend to be like, I should collect a baseline set of metrics on every single machine. And maybe that— you might think about those like traditional host-based metrics, but probably with a bit more. Um, so, uh, if I think about, um, taking that up to the application level, uh, here's a good example. So recently, um, uh, built a bunch of services with some, some people, uh, based on Dropwizard, which is a Java framework. The great thing about Dropwizard, it comes with a bunch of things like logging and monitoring and metrics and stuff like that, like the scaffolding for all of that stuff. We're able to define, okay, this is a service running on the JVM, so we want to emit all of these JVM-related metrics. It's an HTTP service, so by default, we want to emit some basic HTTP status stuff. And it's a RESTful interface, so we want to emit these other things. It's very much sort of choosing a baseline of things that should be emitted for everything. Then on top of that, which is like the business logic usually or the business service, that you selectively determine what you're going to monitor there.

**Bridget:** [00:25:18] Then I think you probably, from what you're describing, especially when you're describing the microservices framework that you're or the microservices architecture that your sample application throughout the book is using, it seems likely that your actual health endpoint is going to be a very limited subset of things. It's not going to be absolutely every single thing that you would be sending into your centralized logging.

**James:** No, probably not. Something like a microservice is probably— I would focus on business metrics, some core application metrics, but why collect a huge amount of, like, for a Docker emits a bunch of metrics like CPU and memory from a container that, let's say, a job scheduling system or a container might live for, let's say, 30 seconds optimistically. Do I really want to know about its memory and CPU use? Probably not. That seems like a waste, but I definitely want to know what it did. I definitely want to know that it processed these transactions or it performed this task or it managed to connect to this other service and do this thing. Like, that's useful information.

**Bridget:** [00:26:25] So you mentioned disk being cheap. So like, how would you say that relates to the downsampling stuff that's possible with Whisper? Like, do you think disk is so cheap that people should not try to reduce the amount of stuff they're storing? Or like, does search space still matter? Like, does the measure anything, measure everything advice still hold? Like, what's your opinion there?

**James:** I think this is nuanced. And unfortunately, like all things that involve platitudes or soundbites, like, you know, monitor everything, measure everything, keep everything, it's like very cheap to say. I tend to look at it in terms of you should be— definitely should be monitoring things at a much higher resolution than you do now. If you're monitoring stuff at say if you're monitoring stuff at 30-second intervals or 60-second intervals, or hell, God help you, 5-minute intervals, you actually have no fucking idea how your infrastructure is performing.

**Bridget:** [00:27:26] One thing, the free level of CloudWatch is not enough.

**James:** Yeah, one data point every 5 minutes tells you zilch about how your application is performing. So you need to definitely create, create a better resolution there. I recommend a second I recommend a data point every second. But then you ask yourself, oh my God, this is a huge amount of data. I said to myself, well, how long do you need that resolution for? I look at that and I go, maybe you need that resolution for 24 hours. Keeping 24 hours worth of 1-second data is very different than keeping a lifetime of 1-second data. I do think it's possible to, as you say, downsample that as Whisper does very cleverly out of the box. There are some challenges with downsampling. You can't actually go back the other way, uh, and it may not actually be reflective, reflective of, of, uh, of reality. Theo Slossnager would tell you that any downsampled metric is not a real metric anymore, and he's kind of right, like, um, but I look at it in terms of, uh, that downsampled metric, um, maybe I'm caring about trends, maybe I'm caring about trends at a much lower resolution. Maybe I'm caring about a pattern of percentage growth over 3 months at that level, but I'm not actually caring about on a minute-to-minute basis if I'm really caring about my user latency, is that 1-second data. 1-second data useful for that immediate user latency, user experience. 3-month downsampled data, much better for capacity planning, thinking about the future. Oh wow, we've gone up, this service is now Oh, it's 30%, um, quarter-on-quarter growth, we're definitely going to run it over, you know, Oompa Loompas pedaling, or whatever happens to be your cloud platform.

**Bridget:** [00:29:11] Well, and maybe not every single thing is in the cloud either. Like, I think when people are trying to do some sort of, God help them, hybrid or whatever it is they're doing, I kind of wonder, like, you know, the whole possibly ridiculous data gravity thing. Like, if you have terabytes of log data and it's somewhere, what happens when you need to analyze it somewhere else? Yeah, and the LDR, you know, good luck, have fun.

**James:** Yeah, I think good luck, have fun is probably the answer you get from most folks. Um, and I think too, it's, it's somewhat of a heretical thing to say these days, but there are a lot of people that run data centers, like physical infrastructure where they pay actual money for actual iron that someone racks in a machine, uh, and is not just an, an Amazon instance. Um, And that requires a lot of those people regularly. Yeah, in fact, Pivotal would be a prime example of people that have those people as customers. And that requires you to think about depreciation, to think about budgeting. And if you can't do capacity planning at a reasonably high resolution or a reasonably high understanding, you're going to struggle. Like, the CFO doesn't want to get told one morning, oops, we got our capacity planning wrong and need a million bucks worth of hardware. It's a fast way to get fired.

**Bridget:** [00:30:21] So that kind of brings us to questions around pricing for this stuff. You, you go into a great deal of copious detail, um, about a lot of the really cool DIY tools in the book. I've used a bunch of them. I know that my, my podcast co-hosts have used some of them, and obviously you've used them all extensively. You also mentioned some SaaS services. Um, I think, you know, and none of these mentions are an endorsement, but for example, Splunk. We all know and love Splunk. Pricing model. Like, how do people make those decisions, or how would you recommend they make those decisions in terms of, like, the pricing model for their SaaS metric? Say they've done enough capacity planning to know that they have this many widgets per hour, they have this much disk they're going to use, they have this many, God help us, hosts or whatever. Like, how do they choose, not just based on features, but also based on, like, how do they do capacity planning of, can I afford this?

**James:** Yeah, I think that's— I think, look, SaaS services are interesting. I tend to look at service consumption as being based on core business and core competencies. So I'm not interested in being PagerDuty or VictorOps. Like, me running a paging service, no value to me at all. Them providing me with a highly available paging service, I'd pay a fair bit of money for that. Maybe not as much as they charge sometimes, but I'd pay money for that. Because I don't need to run that infrastructure. In previous roles, I've been heavily living in the AWS world, where for us, as economies of scale, buying services from Amazon was significantly cheaper than having a DevOps team or having an ops team or having a group of engineers who are responsible for just managing and running up infrastructure. I think that's cost-benefit stuff you have to do. I think you need to go, what information do I need to gain this insight? Let's do some rough back-of-the-napkin numbers. That works out to this.

**Matty:** [00:32:19] What is that?

**James:** Here's 4 or 5 different options. One is host it ourselves. Another might be buy an off-the-shelf appliance. Another might be buy a SaaS service. Splunk, obviously, things like Splunk come in both forms. Another might be it's not worth us actually collecting this. The cost to us, the incremental cost to us of collecting this versus the impact of us getting it wrong is not high enough. You can do those pros and cons and that math relatively easily.

**Bridget:** I think the one that's difficult, and I've done this math at a couple of different jobs myself, and I'm sure you've done it too, but I think the one that's a little difficult is until you stand something up, you don't have an idea of what your widgets per second are going to look like to the point where you could even do back-of-the-envelope calculations.

**James:** I think this is prototyping. You need to do a lot of prototyping. Um, I think that, that, uh, um, a lot of this stuff is very much, um, uh, you definitely need to, you definitely need to be thinking about proof of concept, uh, thinking about prototypes, and thinking about minimum viable product. Go and talk to your application development team if you're an ops person and ask them what they mean by minimum viable product, and then start treating your ops experiments as that. So you build the bare minimum you need in order to learn something new or try something out, experiment with that, iterate on it, and if you're happy with it, then you double down and you build on it. Otherwise, you throw it away. You don't do the traditional ops thing, which is map out some big plan with a project plan, and, and you don't think about, I'm going to spend 3 months building ELK. What you do is you build yourself a tiny ELK server, or you go to Amazon and, and use one of their ELK service, or or Google and use their— I think Google has one too, who knows?

**Bridget:** [00:34:04] You go— there's Docker images you can grab.

**James:** Yeah, Docker images, all that stuff. You say, what does this look like? Let me choose a single host and send its logs there. I get this much logs every day, and out of these logs, this percentage is the application, this percentage is the operating system. I have 100 machines, I should be able to do back-of-the-envelope math based on that.

**Matty:** That's the trick I think that's hard for an ops background is, back-of-the-envelope math, right? I have worked with dozens or hundreds, however many people in proof of concepts, and ops people in a proof of concept want to hit every corner case imaginable, right? I need to make sure that this product is going to work for everything that we do. Okay, we're going to do this thing. Now let's think about this. Now let's think about this. Let's think about this. And so your back-of-the-napkin math there where you said, okay, I can estimate Are you going to be exactly right?

**Trevor:** That's why you need a developer in the room to tell you to just do it.

**Bridget:** The developer just says, yellow.

**Trevor:** [00:35:05] Right.

**Matty:** But I mean, but then to say, okay, it's fuzzy, but it's going to even itself out, right? Because there's going to be some times that it's going to be less per host, but that's okay.

**James:** So really good developers, and not all developers do this, but really good developers are constantly making what I call risk decisions. They're like, I'm aware that this is not the most awesome algorithm, or I'm aware that this is not the most performant method, but I'm going to work out whether refactoring it right now and optimizing it is worth my time versus me punching out this whole feature or spiking out this whole feature. They keep doing those trade-offs, they keep doing those evaluations. That is one of the hardest things to teach an ops person. I— it took me years to work it out. And in fact, the first time I actually managed to work it out had nothing to do with IT. I was sitting down with our CFO at the time, and she was talking about how she decided, like, how costs— how she did cost planning and cost estimates. And like, there's a whole, like, science in financial forecasting. And I was looking at it, I'm going, huh, like, this is— this model— this modeling stuff is based on taking small bits of data and modeling out outcomes. Huh, you could extend this to— and of course, I later discovered there's a whole science called operations modeling, which is obviously operations in the logistics sense, not the operations in the IT sense, where there's a whole bunch of science behind this that you can actually do and use and consume. Again, we are not invented here. I don't know.

**Matty:** [00:36:37] It goes back to learning skills that are not necessarily directly related to IT operations when we do stuff like this. Like, we have to learn how to write a business case. You know, you have to learn how to, how to do this kind of modeling because that's what you're doing, right? It's much easier to just sort of say, well, I told you so, or whatnot.

**James:** Um, yeah, and that is, that is the— I will— that's the one thing I will never forgive an engineer doing is saying I told you so. Um, like, I, I, I'm, I'm a very— I'm a really nice boss. Like, I, I, I'm not— I'm— I don't think I've ever shouted at anyone. Um, yeah, I don't think I've ever shouted at anyone. Um, but the one thing I won't abide is, is people going, I told you so, I told you so. And I'm like, you clearly— A, you clearly didn't because you didn't articulate the risk in such a way that we know we were making a good decision. And B, the best answer here is, is not like being blameful about this, but rather going, okay, we fucked this up. What do we learn from that? And how do we not fuck it up next time?

**Bridget:** That's, that's perfect because it's like none of us Even if James told us the right thing and we should have listened to him, none of us deliberately thought, James is right, he's definitely right, let's ignore what he said and have a terrible outage. No one's going to work making that decision. That would be ridiculous.

**James:** [00:37:52] I certainly hope so. Obviously, that ties closely into the sort of blameless postmortem concept, but I'm not infallible, engineers are not infallible, you will make mistakes, you will underestimate things, you will fuck things up. It's all a learning curve, right? You just wanna make sure you're better at it next time. And I think, you know, yeah, absolutely.

**Bridget:** And this kind of also, when you made me remember that, hey, we didn't invent all of this sciency stuff right here in IT operations. And like, we also, IT operations has changed a lot. Like, you talk at the beginning of your book about how there was a way that IT was considered a cost center, try to minimize that cost. I feel like there's orgs that, like, if IT still reports up through the CFO, you probably have that problem going on still. But, like, you talk a little bit about how that's changing, but then, you know, people always say, like, the future's here, but it's not evenly distributed.

**James:** [00:38:56] Can you kind of talk about, like, how you actually see this playing out in terms of these changes, you know, in terms of people taking the data from other, you know, other sciences, whatever, I think this is actually very closely related to financial stuff, is that when a lot of the companies that treat IT now as a revenue center, not a cost center, in other words, something that is required for them to do business, or high-powering it or giving it more juice or fuel actually makes more money for the company, the companies that have done that have actually done the financial modeling to go, how are our core lines of business delivered to our customers? Oh crap, they all require this technology stuff. Like, we no longer have a fax machine that takes orders and a pool of people that, that take those orders off the fax machine and do data entry and then send them to the warehouse and then, you know, somebody picks them. That all happens on a computer. So if I want my business to continue, then that needs to work. Okay, that needs to work. That's important. Okay, well, maybe that's not just a cost center anymore. I have to spend— like, I literally have to spend money on this in order to stay in business. The second thing is they start to realize our customers come back because it takes them less time to check out on our site, or our logistics are faster than someone else's, or if I'm UPS, I deliver one day on time 99% of the time versus my competition who delivers same day only 80% of the time. That's a tangible difference in user experience and customer experience that will generate customer loyalty. Will generate additional leads and generate people and say to people, I should use this service. Um, this is— Amazon's a classic example of this, right? Amazon's site is probably not the prettiest thing in the world. Um, it's kind of a bit dated and stuff like that. But the one experience that's really, really good on the Amazon site is checking out. Like, it is incredibly simple to check out because Amazon Prime—

**Bridget:** [00:40:50] Prime is like super solid.

**James:** Yeah, Amazon knows that that's where their business is. Is people being able to go, I found the thing, I clicked the button, I got the thing. Like one-click ordering. I have no idea how much money that makes, but I guarantee you one-click ordering is heavily instrumented, heavily A/B tested, heavily experimented on. And if you broke, you know, if you, if you, if you did something to one-click ordering that impacted them, they would know pretty quickly that something was wrong and they would move heaven and earth to fix that.

**Matty:** What was I just reading that was giving an example and they were illustrating from a, you know, an Amazon Keynote, and that's what they were talking about was one click, but it was like the product was quiet at the time, but basically saying this is a new thing, a way we're doing it in a new way in terms of development and release. And it was one click. Let me see if I can find that reference and put it in the show notes.

**James:** It might've been Werner Vogels at some point. I do remember someone talking about that, like, you know, like if you're gonna spend money, you spend money on the thing that drives revenue and like, All of a sudden, IT is now that thing.

**Bridget:** [00:41:58] I think as much as we can talk about, like, business metrics, and you're not the only customer of your metrics, and the high-level stuff, I know that since we have you here, and you can answer, like, super detailed technical questions too, we have some. So, like, okay, so I'll just kind of pick one at seemingly random. When you talk about putting those deployment lines on the graph, like, we've all seen that, oh, look, everything went hockey-shaped. Pear-shaped hockey stick, whatever sadness right after the deploy, or maybe became so much better after the deploy. How does that differ, if at all, in a world of continuous delivery, continuous deployment, whatever you want to call it? If people are YOLOing changes out into prod with all sorts of feature flags on them, like 800 times a second or whatever it is that the unicorns are doing these days, tell us about how having the deployment lines on the graph can even be correlated with anything? Or, like, what would you recommend at that point?

**James:** [00:42:59] I think that it's interesting with the definition of continuous delivery, right? Let's say your continuous delivery is every time someone commits to master, we generate a new artifact or we push out the application. I guarantee you that doesn't happen in real time. It doesn't happen immediately. It's not a snap, snap, snap exercise. You've probably got, like, 30 seconds or a minute or sometimes even longer while that deployment happens. Realistically, there are very few places that are continuous delivering where it's deployed. You might deploy 800 times a day, 800 divided in 24 hours, there's still enough window to see when a change happens. But let's hypothetically say that you can deploy a change in 15 seconds. That deployment line becomes less about the line on the graph and more about the metadata attached to that line. Instead of my deployment thing being something I render on the graph, it's actually an event that gets triggered that has like, it's this Git SHA, these feature flags are enabled, this new feature flag is enabled, it's a new version of the API so that the event is tagged with the new version of the API. I can actually go back, I can look at this and say, huh, this started behaving badly at the same time I saw this event. What's the difference between this version and the old version? This SHA, this SHA, compare that, or, oh, we turned this feature flag on, huh, that explains that behavior, or we suddenly can't connect to this other thing, the API version of that has changed. It becomes about that metadata and less about the line on the graph. It becomes about being able to say, where in my stream of events did this thing change?

**Bridget:** [00:44:35] That makes sense, but then you also talked in the book about and showed some examples of how to use, say, Docker labels. Which have been kind of evolving, but they exist for containers and images both now, and have for a while now. So, can you kind of talk about when you have these ephemeral containers that come and go, like, how— I saw some of the examples in the book, but I'm wondering if you can kind of highlight for people who want to read it and haven't yet, like, how would you recommend using labels with your containers to achieve exactly what you were just saying about metadata?

**James:** So, labels are still very immature. Like, there's a lot of challenges around them. It's getting there a lot better, but essentially, um, so here's, here's a good example of a way to use metadata like that. So let's say I tag all of the containers of a particular class of, um, let's say the containers are all, um, uh, a web service of some kind. Uh, it's very easy to, to take all of the events tagged in a particular way and apply them to a heatmap. So I can say, uh, I can say I want to look at all of the events that are tagged with version 1 and all of the events that are tagged with version 1.1, and I want to have them show up in a heatmap or show up in it. I can see that, oh, I've just rolled out, I've canary rolled out 10% of my things with version 1.1, and oh my God, my HTTP 500 errors had just gone a big red blossom all across my heatmap. That 10% is just lit up with things. We need to, we need, you know, we need to back that out, or we need to, we need to fix whatever it is and redeploy, or, or, you know, roll forward until you've got the right thing. Um, it's also a really good way of being able to correlate. Um, so labels is a good example. I would like particular alerting behavior or particular check behavior to apply to, uh, let's say, this is a simple example. I would like to be alerted if all the things tagged with production, labeled with production have a problem, but all of the other Docker containers labeled with anything, you know, insert regex for dev, test, staging, or whatever, I would just like to Bitbucket those and never hear about them if they break. So stuff like that allows you to say, you know, Bitbucket— did I say that? Yeah. Allows you to sort of be selective about what you act on and what you do, and allows you to be quite creative about graphing. I think people think about visualizations very much in terms of things like line graphs. Um, uh, and oh God help you, pie charts. Don't ever use a pie chart. You'll make— you'll kill baby Jesus or fairies or something. Certainly data science people hate you when you use pie graphs. But, um, like, you need to think about using this data in a way— hell, use it as a word cloud, use it as a tag cloud. Like, there are ways to, uh, because example, like, make the largest thing in the tag cloud be the tag that has the most failed somethings.

**Bridget:** [00:47:27] I'm imagining being paged and the artifact that PagerDuty delivers to you is a word cloud and it's just like, you've been paged because fail.

**James:** Yeah.

**Matty:** Epic fail.

**James:** You've got to have epic fail. But stuff like that, like that metadata, it becomes decoration on your events, but it becomes a really powerful way of routing manipulating, and visualizing your events.

**Bridget:** I think that's a really useful way of thinking about it. I know there are some projects you refer to in the book, like Nagios Herald. It's like, no matter how old or new the tools you're using are, whether you're using Docker labels or Nagios Herald or something in between, adding all the context you possibly can is gonna arm people better for, you know, that 3 AM struggle.

**James:** Yeah, because like if I wake up in the, in that 3 AM and yes, alert for something that I don't really care about has snuck through, but I see that the 3, the 3 tags on this particular alert are staging backup server for, um, you know, uh, disk, disk 68%, like I can, I can make a reasonable assessment about whether I care about that. And that assessment might be very different if it says production, the only server I run my application on, disk 100%. That sort of context or that additional metadata will make the difference between me going back to sleep and having a somewhat more restful night and me bouncing out of bed and going, must fix. I'm much better off.

**Bridget:** [00:49:03] You would very much like to have— what you're saying is you'd very much like to have the more restful night, and probably everyone who reads your book will be able to have the more restful night.

**James:** I hope so.

**Matty:** With that, I mean, I think we got, uh, we could probably hit, hit one more, one more question and then, then we'll, we'll start thinking about, uh, wrapping it up. Uh, one of the things that, that I want to— let me put it this way, I'm going to ask one more question and then I guess, you know, Bridget and Trevor can ask more questions if they want. But, uh, you, you— I'm interested to know what the response in general has been to your book? What have you seen? What have people besides Google SREs coming and beating the heck out of you with the Google SRE book?

**James:** I've seen sort of 3 broad categories of responses. I've seen people go, this is really cool. You've documented a bunch of technologies I've always wanted to try. I tried to make it so that you could use bits and pieces of things. I tried to do it so if you just want to use ELK or Graphite or turn on Docker monitoring, you don't have to use Remon and the whole central event monitoring things. You could easily plug other things in there. So I've had a bunch of people go, this is really cool. It's given me an insight into, into the way to do monitoring. I've had a second group of people who have gone, I like the idea of your thing, but you chose a tool I don't like, or you've chosen a tool I don't think you should have chosen. And I'm cool about that too. I'm very— I'm totally agnostic about tools. You should totally choose the tool that works best for you. Honestly, if that's a pigeon, a carrier pigeon doing, doing, uh, flying over to your data center and pecking on the front of your, uh, your— and that works for you, totally use it.

**Bridget:** [00:50:42] I remember that RFC.

**James:** Yeah, it's definitely not scalable, but it's something. And then I've had a third category of people. Um, I've had some, I've had some hilarious reviews of the book, and I've had some hilarious emails from people basically calling me a total idiot, um, and that, uh, that their Nagios installation is perfect. Anyone who— I'm guessing there might be some neckbeardy stuff in there. I have had a few people label the JVM as evil. That's usually old-school ops people. I hear that a fair bit. But I've had a lot of people who are like, Nagios is genius. If you fail to see Nagios as genius, why has it existed for 15 years? I haven't responded to a lot of those other than to say, thank you very much for your kind feedback. But it tells me out there that hopefully if I get through to some people in that first and second group, and maybe I make somebody in that third group think about things, and at some point in time, if they do wake up in the middle of the night and go, oh, fuck, my nagios has told me about a stupid thing and I haven't slept properly for a month, maybe that James guy wasn't a total freak. And they can take or leave the tools as long as they think about the concepts.

**Bridget:** [00:51:51] Yeah, I mean, that's a good way to put it. And I actually do have a question about one of the specific tools. So I noticed that in your acknowledgments, you thank Kyle Kingsbury, and you go into a lot of detail about Riemann, and that's cool. But then you also have, like, this entire appendix about functional programming, which I honestly did not read yet. And I'm kind of wondering, is there, like, some kind of cult of functional programming here? Like, what is the deal there? I'm just gonna shake my fist at Trevor and say, you devs, what is all this stuff? What's going on there?

**James:** So, let me give you the reason why I think— so, I think functional programming is pretty cool. I don't think it's the be-all and end-all, but I think it's pretty cool. And the reason I think it's pretty cool should appeal to every single ops person, and that is the idea that you distill your code down to the simplest possible function, um, and that function has no side effects. So the data that comes in always comes out the same way. It doesn't— it, it's, it's very easy to model, it's very easy to understand, and it's very easy to compose things out of these functions that, that are very easy to introspect and understand. Um, that's the holy grail for a lot of ops people, right? And a significant number of our outages occur because weird side effects happen. So I think functional programming says there's a lot there that appeals to me. There's a lot of— I think there's also a community out there that are a bit dogmatic. So I do struggle sometimes with certain communities, and they're sort of like, there is only one way, and it is the functional way. I think everything has its place, and I think you need to introduce tools, the best tool for the job, to solve a particular problem. I think ultimately, if you're building like a— if I was building a highly resilient service, like, say, a financial transaction service, I would strongly recommend that you think about functional programming principles as a way to build that, because I think it'll make, in the long term, your ability to build a resilient, testable, introspectable, understandable platform will be a lot easier. And that comes with the— there's a bunch of side issues over there with choice of languages, like type safety. And there's a bunch of stuff in there that is also sort of co-joined or co— at least maybe not the same building, but living in the yurt next door, like principles that sort of map in there as well. So I think from that point of view, that's why functional programming interests me. But definitely, it can be a— if your experience is Bash, Perl, Python, Ruby, it can be a bit of a weird thing. But honestly, branch out, try something new, have a go. Why not?

**Bridget:** [00:54:32] I mean, I wrote some Prolog in college, and then I was like, whoa, okay.

**James:** The SICP book, Structure and Interpretation of Computer Programs, which is a classic textbook.

**Bridget:** I was gonna say, like, that textbook is literally sitting over behind me somewhere.

**James:** All of the examples are in Lisp, and I learned more from that, the first 3 or 4 chapters of that book, than I probably did in 5 years of working in IT. Yeah.

**Bridget:** Plus lots of parentheses.

**James:** Yes, and I must admit that is somewhat interesting experience, if you want to. But, hell, you should have syntax highlighting, you should have linting. If you can't get parentheses right, you shouldn't be writing configuration.

**Bridget:** Some of us wrote a lot of Scheme back before there was any such thing built into VI.

**Matty:** Yes.

**Bridget:** But, yes, with that—

**Matty:** If you can't get parentheses right, you shouldn't be writing configuration at all. That's what I'm gonna take.

**James:** [00:55:37] Sorry, there's the soundbite.

**Bridget:** So, so what's your— so what's your TL;DR? What's your takeaway for people who decide that after they read your 700-page tome, they probably want to try to write a book? What's your advice to them?

**Matty:** Oh, I'm listening with eager ears right now.

**James:** Um, So I think that the 3 things I always tell people when writing a book is that, um, unless you're John Grisham, it won't make you a lot of money. You should really be writing it because you're interested in exposure. Um, like, you probably— you might make a little bit of money depending on the topic, but, um, it's not going to replace your day job, probably. You should be thinking about it as a way to exercise your brain, get some exposure, uh, improve your career, enhance your career possibilities, get a new job. Um, the second thing is that It always takes more time than you think. Um, uh, you know, it is— your initial estimate of how long the book is going to take to write will be wildly unrealistic. This is like, if you think about from a programming point of view, this is like, uh, like building an estimate for a feature blindfolded, spinning in a hurricane, uh, on, on during an eclipse. Uh, you so pretty much double, triple, quadruple add continuity. And the third thing is that, um, uh, you need to write every single day. It's not something you can do in spit bits and starts. If you have a family and kids, you need to be able to go, this is going to be a commitment that is going to take me away from them for like 3 or 4 hours every single night, or, or 2 hours every single night. You cannot stop and start. You will never finish anything. You have to sit down every day and hammer out a page or a few words or something for at least an hour or a couple of hours every single day. Otherwise you will not be successful.

**Bridget:** [00:57:24] Um, you're making this sound like exercise or, you know, paying attention to your life.

**Matty:** I can definitely vouch for the do some of it every day versus like, so what I'm doing now, I have deadlines and the 2 chapters I've written so far have come about when I sat there and said, Holy shit, I have this entire chapter due tomorrow. It's very reminiscent of how I wrote papers in school, and it gets done, but it definitely does not reflect my best work. What are you writing, man? So, I'm writing a book called Implementing Chef. So, it's a basics of Chef book, and we'll be talking about it more on the show as it gets closer to being a thing. Trevor is actually apparently the technical reviewer of it, which is— Oh, sweet.

**James:** I never realized I was the only one. Yeah, there's, um, there's definitely some folks who are better editors than others in that regard. Um, uh, the— there's at least some folks at O'Reilly who shall remain nameless for whom we're able to strike fear deep in the hearts of authors with just occasional emails going, how are you progressing? When is chapter 3 due? When will you have chapter 3 for me? So yeah, hopefully you don't have one of those.

**Matty:** [00:58:41] Excellent. So what do you have? Do you have any, uh, anything for our listeners to check out, James, uh, that you'd like to recommend? Any anything like that?

**James:** Uh, I've been playing with a couple of tools. Um, uh, I noticed that, that Bridget has already done a shout out to Charity's Honeycomb. I, I recommend folks have a look at that. It's an interesting service. Uh, Coda Hale and Mark Hedlund, who are 2 folks who have been around in the engineering and distributed systems world for a long time— Mark was the CTO at Stripe and then the VP of Engineering/Product at, um, Etsy, uh, they've released a new service called Skyliner, um, skyliner.io. Uh, it's a, it's a provisioning system, Amazon-focused provisioning system. Uh, I think it's kind of cool. I've been playing with a little bit. Um, uh, it's designed for people who don't— who want to do things like continuous deployment, who want to do things like manage complex infrastructures, uh, without really understanding, like, you know, oh my God, I need a security group or a or an ASG, and, and then going, what, James, what's an ASG? Uh, it's really designed for that sort of like, I'm a startup and I want to build my infrastructure fast but in a reliable, consistent way. It's worth having a look. Um, we've talked a bit about monitoring. I thoroughly recommend Jason Dixon's in-progress Graphite book. Uh, if you work with Graphite, um, uh, please don't, don't, and I— please don't, you know, it has a bad rep every now and again. Whisper has a bad rep, but Jason is now working full-time on making Graphite more awesome, and his book is an excellent complement to that. I really enjoyed reading the chapters he's got available, and hopefully his editor is someone at O'Reilly who'll be pushing him to finish that. The last thing is you should all go and vote, and not for Donald Trump. This is my adopted home, and I'm not allowed to vote here. If I could actually vote, I would be firmly firmly trying to nominate someone who is not a psychopathic racist. So apologies if I— cut that out if that's not an appropriate statement for Arrested DevOps.

**Bridget:** [01:00:46] If anybody's okay with psychopathic racism, I would really prefer if they don't listen to this podcast or ever talk to me.

**James:** Feel free to edit that out if that's not on topic.

**Bridget:** Bridget, what do you got? Well, apparently, I did steal one of the ones that James wanted to talk about. Have you actually been able to go through a demo with Charity yet of of honeycomb.io, James?

**James:** No, I've had it earnestly described to me on several occasions now. Generally, depending on how lubricated with alcohol Charity was, with varying levels of wild enthusiasm. I am very keen to see a demo, but I hear awesome things from folks who have. She's an incredibly smart woman who has built some incredible bits of infrastructure. That alone is worth checking this out.

**Bridget:** Yeah, I'm very excited about it. I'm going to hopefully do a Hangout with her later this week because, of course, even though we were at Velocity New York together. As you may recall, being at a conference doesn't mean you have a lot of spare time at a conference. How does that even happen? Oh no. What? You didn't come? It was a crowded room and I didn't look all the way to the back, but what you're saying is you didn't have time to come hear us rant about ops in the time of serverless containerized web scale?

**James:** [01:01:57] I came very briefly and I parked my little knee scooter at the back, and then I ducked into another session. It took me a good 10 minutes to get between sessions because you're wheeling the stupid scooter. I saw less of some things than I would have liked. Being the chair, I tried to get to as many sessions as possible to make my face shown.

**Bridget:** Varying levels of success. I hear you. Anyway, I'm hopefully going to get more detail from Charity soon, but I'm very excited about that just because honeycomb.io, people can check that out. It's like explorable ops metrics. Of the sort that you always wish you had built. And then on the topic of stuff you'd wish you had built, because when you need it, you really do, Liz Rice and Anne Curry from Microscaling in the UK are working on MicroBadger for Docker image inspection. So if you've got your image and then you're like, I would really like to find out more about the things that are in here, because as we all know perfectly well, looking at a Dockerfile doesn't, depending on how the Dockerfile is written, doesn't necessarily correlate directly to the stuff that's in it. It's like, add all the contents of CWD. What were those? I don't know. So finding out what's actually in your images is pretty cool, and they have a microbadger.com tool to look at that. Then finally, follow Cloud Foundry Summit EU. There's #CloudFoundry, you can go take a look at what's going on with that. Trevor.

**Trevor:** [01:03:27] So as of today, Windows Server 2016 is generally available. Um, so that's mine, and Southern California is awesome now that I live here. Excellent.

**Bridget:** That's right, you were moving to California. I did. Where exactly?

**Trevor:** So I'm about an hour north of LAX in Santa Clarita. Awesome, hanging out in the land of Schaefer, as it's commonly known.

**James:** After the apocalypse, it may be well known as that.

**Bridget:** Hopefully we do not get a Trumpocalypse.

**James:** Lord, Lord, hide humongous Schaefer. Yes. You got it.

**Matty:** Speaking of things going GA and shipping for my checkouts, one is Inspect has shipped 1.0. So that's at inspect.io. It's compliance as code. So human-readable language for testing and compliance auditing infrastructure. Also super useful for testing your infra code. So they started, it was released a year ago. Now it's released officially at 1.0. And self-promotion, can talk about things not ready to be released. I took it upon myself to decide to write a shareable theme using the Hugo static site generator for people hosting podcasts. There may be all of 3 podcasts that even want to use Hugo and we're one of them and we won't use this theme because we already have our own, but If you want to do a pod— if you have a podcast and you want to check out this idea, if you go to github.com/MattStratton/Castanet, you can check it out and tell me why it's good or sucky. So, um, things coming up in the upcoming fortnight or so. So I'm getting married this weekend at, uh, the Jim Beam Distillery in Kentucky on Saturday. So that's where I'll be. So everybody leave me alone for a while. Congratulations.

**Trevor:** [01:05:21] Very awesome. I'll completely ignore you at your wedding.

**Matty:** That sounds excellent. I actually said, I was like, well, Trevor will be there, we should record an episode. I was like, no, that's like— no.

**James:** Yeah, I'd say I might have a few words about that.

**Bridget:** Yeah. You'll be lucky if you make it to every table to say hi to people. Yeah. You should pre-eat. Yeah, definitely pre-eat.

**James:** We will be posting.

**Matty:** I'll put it this way, I'll try to post on the Arrest DevOps Instagram, that nobody follows.

**Bridget:** So you really want me to use yet another service on the internet? That sounds stressful.

**Trevor:** You have many pictures of cats. I'm barely getting a hold of Twitter.

**Bridget:** Um, okay, so I will miss the bourbon wedding, which is gonna be awesome apparently. I'm gonna be heading to Joe's family reunion followed by GoTo Copenhagen, so I will be in Europe for a little bit after, uh, after I'm in the north woods of Wisconsin.

**Matty:** You'll be trading places with my aunt and cousin who live in Copenhagen that are coming to Kentucky.

**Bridget:** [01:06:23] Conservation of something, airline something.

**Matty:** That's legit. Cool. So we got some conferences coming up. The Chef Community Summit is October 26th and 27th in Seattle. It's a cool open space only event. And if you use the code ArrestedDevOps, that'll give you 10% off your ticket, which you can get at summit.chef.io. We got a whole bunch of DevOps Days coming up. Raleigh, Boise, Singapore, Detroit, Havana, Kansas City, Philadelphia, Ghent, and Ohio are all in the next month, which is October. So go to devopsdays.org to check them out.

**Bridget:** And I'll be at Detroit and Philly for sure.

**Matty:** I will be at none of them, which is not a reflection on any of those events being awesome.

**Bridget:** And ADO 2016, yeah, ADO 2016 will probably get you 20% off of most of those.

**Matty:** It probably will. Um, and there's a couple open CFPs for DevOps Days, which you can check out at devopsdays.org/speaking. Uh, so Brasilia's is closing the end of September. Sorry, I shouldn't have included that because that's in a couple days, but whatever. Warsaw is also closing the end of September, and they sent me a nice email about promoting it, so I'm doing that. Sydney's is open till October 23rd, and Baltimore's is open until December 9th. If you would like us to sort of promote your conference on ADO, fill out the form at arrestedevops.com/conf. And what about you, James? Where can people find you on the internets or in real life, if you want them to find you in real life?

**James:** [01:08:00] Probably not in real life, but I'm available on Twitter. It's @kartar. I have a website. The Art of Monitoring book has a website called artofmonitoring.com, very originally named. I'm also looking for a new gig, so if you would like me to be your CTO or VP of Engineering or want me to help build cool stuff, I'm on the market currently. So I like building teams and infrastructure and scaling things, and I know lots about stuff, you know, mostly, mostly stuff, but Some junk and some things. And awesomeness.

**Bridget:** And awesomeness. I think that we're finding out here, yay, they should definitely work with James.

**Matty:** Cool. Awesome. So yeah, the show notes for this episode are available or will be available at arresteddevops.com/artofmonitoring. That website will have— it's got all the information about our newsletter, our merchandise, our Patreon, all the Arrested DevOps stuff you could ever or never want. Um, I actually just added a bunch of new content to the website, so let me know what you think. There's lists of podcasts and books and blogs, and that's it. Uh, you can leave us a review in the iTunes store if you want to help other people find the podcast, which we think would be awesome. Thank you so much, James, for joining us today.

**James:** [01:09:23] Thank you so much for having me.

**Matty:** It's awesome to have you.

**Bridget:** Thank you so much for coming back. I love when we get repeat guests. And we've tried—

**Matty:** we'll try not to wait a year and a half.

**James:** Uh, well, I live to see Bridget bounce up and down in her chair, so let's not go too far between that. This is—

**Bridget:** this is a standing desk, buddy. There's no chair action here. Yeah. Oh, totally.

**Matty:** And to be fair, it does seem like you're sitting. I don't know why, maybe just where the bookshelves are behind you. Nope, I'm standing. I think you just have really all bookshelves with lots of books.

**Bridget:** I have a chair, like literally there's a chair right here. There's a chair. Joe mostly uses it when— Joe mostly uses it when he's like using the Thunderbolt monitor to look at the waveforms while he edits the podcast. I don't use the chair very much. With that said, I'm Bridget at Bridget Kromhout, and I'm Matt at Matt Stratton, and I'm Trevor at Trevor G Hess.

**Trevor:** We're Arrested DevOps, and remember, there's always DevOps and a banana stand.
