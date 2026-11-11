# All Things Observability and OpenTelemetry with Adriana Villela

[00:00:00]

**Matty:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matty Stratton. We have such a good show today with our guest Adriana. Adriana, welcome to Arrested DevOps

**Adriana Villela:** Hello, Matty, and thanks for having me. I'm very excited. Actually, Arrested DevOps I think was the first, like tech podcast I ever subscribed to, Which I think I heard about it from, attending DevOpsDays in Toronto back in, I don't know, like 2016 maybe. back in the day. So yeah.

**Matty:** Awesome, awesome. Well, today we are gonna be talking about all things observability and open telemetry. We got some proper DevOps nerdery happening here tonight. [00:01:00] So, I- first I wanna kind of... We're, we're gonna g- dig into a bunch of the tech and stuff like that, but Adrian, I'd love to know, how did you land in the kind of observability world after years of working in platforms and enterprise and all that kind of stuff?

**Adriana Villela:** it was a bit of an accident of sorts, 'cause it started 'cause, once upon a time, I was trying, I was working with a friend on a startup that never got off the ground, and we were sending each other, I don't know, just, Twitter posts and stuff. And I happened upon this Twitter post from Charity Majors, and I send it, I sent it to him, and then, I don't know, we both started following Charity, and so that's how I even became aware of observability.

And then fast-forward to, a year later, and I ended up, getting a job at Tucows. And if you're old enough, it's that Tucows.

**Matty:** I was gonna say, that is a deep

**Adriana Villela:** It... [00:02:00] yeah. I'm like, "You guys still exist?" And they were doing a domain wholesale. So I land a job there, and I'm managing two teams. One is a HashiCorp, platform team.

I know nothing about the Hashi stack at this point other than Terraform. And then the other is an observability practices team. And I'm like, "Okay, so I'm managing these two teams." I- they brought me in 'cause, I can learn shit fast, so no problem. I'm not feeling overwhelmed at all. But I'm like, I wanna make sure I do right by these orgs, by, by these two teams and make sure that I know what the hell I'm talking about and, so I can lead them properly."

And so I start learning in public. I had a blog on Medium, since 2020, so I'd been, like... Anything that I was, like, working on that I learned cool shit about, I'd just write about it. So I started blogging about my learnings about HashiCorp. We were using HashiCorp Nomad. And I came from Kubernetes world, so I'm like, I'm trying to come up with these analogies in my brain of, "Okay, how does this translate [00:03:00] from Kubernetes to Nomad?"

And then at the same time, observability, this observability team, And I'd had a bit of exposure 'cause my previous job, we were evaluating, different observability vendors, and I had gotten, folks from Honeycomb at the time to, talk to the folks at the company that I was wor- working at.

And then I land this observability role, and I'm like, "I know what's going on, but, I have stuff to learn." So I start, blogging about it. I start asking lots of questions. I land myself on the Honeycomb Pollinators Slack. I wasn't even a Honeycomb customer. it was just like I'm like, "I'm just gonna ask lots of questions here."

and the folks on that Slack were super nice and answered my questions. And then, and as my, my, my understanding of observability evolved, I just, I was asked more and more questions and, was working with, with my team. We... I had pivoted it from being a, an observability infrastructure team.

it was honestly just pretty much a platform team, [00:04:00] and I'm like, "No, I want this to be an observability practices team." 'Cause at the time we had a, we were using, we were paying for a SaaS vendor anyway for observability. I'm like, "Why are we running our own infrastructure and having a SaaS vendor?

Let's just, like, all optimize on the SaaS vendor. Let's focus on observability practices." And so I'm trying to develop these practices by educating myself and educating my team. And, then I get wind of OpenTelemetry, and this was back in 2021 where OpenTelemetry wasn't even GA, and I'm trying to convince this whole group of people at Tucows to, instrument with OpenTelemetry when it's not even GA.

And I, we were using this one vendor, but I'm like, "We should explore other vendors." So I, get in touch with the folks at Honeycomb and Lightstep as well, and I'm like, "Give me your pitch. Tell me about OTel." and at the same time trying to convince all these developers to use OpenTelemetry, and they're, like, super skeptical, of course.

And I'm like, "Trust me, this is gonna be a big deal." And so I managed to convince Liz Fong-Jones of Honeycomb and Ted Young of Lightstep at the time, to [00:05:00] come in and, lower the, the boundaries of, the vendor boundaries and come in under the unified umbrella of OpenTelemetry. And they did this lovely Q&A, with the developers at Tucows.

And it was funny 'cause I was really terrified when they came in because I thought, "Oh my God, what if no one asks any questions?" So I told my team, I'm like, "We gotta have some seed questions. We can't leave. We can't have, any, like, empty space. no,

**Matty:** The

**Adriana Villela:** no awkward pauses, no dead air," right? But, we didn't have any dead air, right?

which much to my extreme happiness and delight, people had lots of great questions, and I think we ended up... They ended up leaving the session feeling a lot better. And then I wasn't at Tucows for even, 10 months when Austin Parker, who was at the time at Lightstep, saw one of my blog posts and, I had posted a link to it on Twitter.

and they go, "Hey, how'd you like to do this for a living?" I'm like, "That's a job? What, I can write blog posts as a job? Sign me up." Austin invited me to [00:06:00] interview at Lightstep, and then that's how I got, officially or more, more deeply into observability because then I was encouraged to, really contribute in the OpenTelemetry community and all that.

And, that, that was it. The... And I've been firmly entrenched in observability and OTel ever since.

**Matty:** That's fantastic. I wanna dig, we'll dig in more into, into OTel, a little bit later. But first let's think observability in general.

**Adriana Villela:** Yes.

**Matty:** like DevOps, like things, you know, there's, there's different opinions and stuff, so maybe we'll just sort of level set with when we say observability, what does that mean for, to you?

**Adriana Villela:** Okay, so my favorite definition of observability actually comes from Hazel Weakly, and she defines it as the ability to ask meaningful questions and get useful answers and apply, apply that to, a- act effectively basically on what you've learned. and I think it's a great definition, because it, all we wanna do is understand our systems better at the end of [00:07:00] the day.

and I think that's why I was drawn to observability. as y- I have a background as a Java developer. I did it for 16 years, and I'm like, "God, I could have really used something a little bit more robust than just, log lines," going through logs. Are you here? Are you here? Is this executing?

**Matty:** I, I like to think about it sometimes is it's, it's giving the ability to ask questions I didn't know that I wanted to ask.

**Matty:** you know, I always think about, you know, with monitoring and things like that, you have to know the question, and how often do we find ourselves, you know, we're in the middle of something, we're like, "The first thing I have to do is invent a time machine and go

**Adriana Villela:** Yeah.

**Matty:** and start doing that."

And so it's giving us that flexibility. so when, when we think about that, what- from what you've seen in the, the real world, like maybe some examples of, you know, how does a team go from we have some dashboards to actually being able to learn and answer questions that they might have, and what changes to en- enable them to do that?

**Adriana Villela:** I [00:08:00] think just, I think at the end of the day, the main thing that really separates observability from monitoring is the focus on the distributed trace. because I think i- in the past there was a huge emphasis on logs and metrics, and that stuff's important. But it's not until we bring the trace into the foreground as I would say the, the, the star of the show, that we have that understanding of what's going on because the trace tells the story, right?

it's the outline, it's the chapters. It flows, you see the things flow from one thing to another, and then you've got your supporting actors. You've got the logs that tell us the thing that happened at a point in time, and then the metrics which are your indicators of "Oh shit, is this gonna go off the rails?"

and I think that's the big, that's the big differentiator. But then, you have this [00:09:00] other thing that, gets a lot of organizations which is, "Oh, let's instrument everything. We need to get as much data as possible." And then all of a sudden you bring all the stuff into your observability backend and you're like, crap.

This is just a bunch of data and I don't know what's important." and I think a lot of people as they sit with observability more in their organizations are starting to realize that there is such a thing as over-instrumentation. And I see it as, similar to SLOs where you're always tweaking them.

It's never, it's a never-ending thing. You're gonna have to tweak the, what data you want to send over to observability backend, and sometimes it's going to have to vary. I'd even say, in some cases you'll wanna feature flag some stuff. we don't want to send all the debug logs all the time, but there might be some times where you'll want to send all the debug logs all the time.

So I think those are some of the things that, that we need to [00:10:00] consider.

**Matty:** So, so thinking about how it's constantly adjusting and tweaking and situational, what is, you know, maybe good enough observability look like for a team that maybe is not at a huge scale? You know, what, what is... 'Cause again, we all have different things, and I always think about, you know, saying, "Hey, you ain't Netflix." You know,

**Adriana Villela:** Yeah

**Matty:** Netflix, what's good enough observability for maybe your average team?

**Adriana Villela:** I think good enough observa...

**Matty:** the word average, I don't know what that means.

**Adriana Villela:** I, I, and I think that's a really great question. I think a lot of people tend to get, A lot of organizations take, tend to get bogged down in "Oh, we have to instrument everything. and really, I think when it, when you boil everything down, there's always in our systems, one or two flows that are very problematic, right?

The ones that always seem to... That, that's where all the, all, all the incidents, all the production incidents seem to point to. So rather than, I think there's a tendency of "Oh, let's instrument all the microservices," let's [00:11:00] not do that. Let's not instrument a microservice or 10. Let's instrument the flow, which will cross multiple microservices, but we're not saying instrument all of those microservices it, it crosses.

We're saying let's just focus on those application flows that are most critical path. And I think when you start with that, and when you start with also instrumenting, your libraries and frameworks, that's the type of thing that a lot of your code will touch anyway. those are the... Those become the more manageable things, right?

the more common elements, the more, I'd say, the most finicky elements that cause us stress in the middle of the night.

**Matty:** So, sort of taking even a DevOps metaphor, you know, we, we, we love to talk about value stream mapping in the DevOps world, Steve Pereira especially when you think about

**Adriana Villela:** Yep, yep.

**Matty:** kind of what you're instrumenting really is your

**Adriana Villela:** Yeah

**Matty:** right? You're, you're not so much... And, and I think what maybe makes that hard is the same [00:12:00] reason that value stream mapping is hard, is we don't, we kinda know our part of that, and that's probably what would lead us most likely to sit and say, "I'm gonna instrument this microservice."

But, like, we don't really care about the microservice by itself. We care about the flow, you know? We don't care about how this one particular part of the process happens. It's how does it happen in the kind of gestalt of that? And that's sometimes hard, especially in a larger, larger situation where you're like, "I, I sit in my, my area.

I know what my part of the puzzle is," but that whole flow is, is tricky,

**Adriana Villela:** Yeah, exactly. Exactly. Spot on

**Matty:** So I was gonna ask about what do teams usually start with and where do they waste the most effort, and I suspect that the answer might be over-instrumentation, you know? But are- what's another

**Adriana Villela:** Ja

**Matty:** where people spin their wheels, they, they, they put in too much effort for too little return when they're trying to get on the O11y train?

**Adriana Villela:** I think the other one is, so OpenTelemetry, for example, [00:13:00] supports auto-instrumentation for a number of languages. So off the top of my head, it's Java,.NET, Python, PHP, Go, I believe. JavaScript as well. And so the lovely thing about auto-instrumentation, it's either zero code or very low code touch.

you might have to configure an agent, you might have to import some libraries, and then it does some magical things, which is awesome. But, the... There are two problems with that. One, it's not going to capture those critical business events for you, right? Because it doesn't know your business.

It's completely agnostic to your business. So you will still have to supplement with the manual instrumentation at the end of the day. But it's a great, way to lower the barrier to entry for instrumentation, especially ah, there...

**Matty:** It,

**Matty:** you

**Adriana Villela:** a lot of people are like...

**Matty:** with.

**Adriana Villela:** Yeah, exactly.

**Matty:** paper, yeah

**Adriana Villela:** Yeah, right?

'Cause it's daunting, right? Sometimes when you start with that blank sheet of paper and you're like, where [00:14:00] do I start," right? So that's good. But auto-instrumentation also, if you're not careful, it can over-instrument a bunch of stuff, and I know there are certain languages that allow you to, close, close the fire hose, if you will, where you limit what it is auto-instrumenting for you.

but if you're not careful, you can fall into that trap and again become overwhelmed, and now you're just searching for a needle in the haystack

**Matty:** So thinking about OTel, so let's, you know, I- we talk about OpenTelemetry a lot. It's a great project if you're all even tangential to thinking about observability, you've probably at least heard of it. So what is OTel for people who've heard the name but have never touched it? You know, what would you say it is and what it isn't?

**Adriana Villela:** Okay. So OpenTelemetry is, it's a project that encompasses, a f- not only a format for transporting your tele- it, so it's your telemetry data. it's a unified way to, express [00:15:00] your telemetry data. it's a format for transporting the telemetry data. It includes also, a, a component called the collector, which is a vendor neutral binary that is used to ingest data from multiple sources, and that can be application or infrastructure.

it can transform the data. so you can do, it can do data mapping, it can do, obfuscation, it can add and remove attributes. Anything you can think of, it'll either do or you can get it to do that. And then you can export the data to one or multiple backends. So you can think of it as, it is this wonderful framework, but it also has, it, it also has this, this vendor neutral, binary, the collector, that enables us to send the data some- capture and send the data somewhere.

And, OpenTelemetry started in 2019. It was, it came about as a merger from OpenCensus and OpenTracing.

**Matty:** the Monitorama I was at when Liz Fong-Jones was talking about it, and I was like, I think it had... Well, couldn't have been later than 2019, 'cause then there was [00:16:00] COVID, and then I haven't been to Monitorama since. But I, I remember, you know, that coming up, so I'm, I'm pleased that I was like, yeah, 2019.

Okay.

**Adriana Villela:** yeah.

**Matty:** Yeah

**Adriana Villela:** Yeah, it started in 2019, and I think it's amazing that, these two projects that were basically competing with each other, similar but different, they decided, "Okay, let's merge into one," and it became OTel. And it is the second-highest velocity project of the CNCF behind Kubernetes, and it recently achieved graduation status, in the CNCF, which basically, it serves as a signal to any organization that was hesitant to use OpenTelemetry, I don't know if it's, fully baked, la, la."

this is your bat signal saying, "Hey, this thing is production ready." And in fact, even before it achieved graduated status, a lot of organizations were using it in production. yeah.

**Matty:** so that was, I was gonna sort of say, you know, what's, what's, you know, what's the stat? You know, we, we know it's percent, but what, what's maybe some of the things that are some of the rough edges still [00:17:00] for

**Adriana Villela:** Ooh,

**Matty:** maybe?

**Adriana Villela:** excellent question. I'd say, OpenTelemetry since, certainly since I joined or started getting involved in the project in some form, has expanded a lot, since those early days. And so there's, a bunch of sub-projects, which is great, but, I think one of the biggest challenges, with open source projects or really any tech anything is documenting things effectively, so that your beginners can understand what's going on.

So I'd say that's one of the rough edges, and, huge kudos to the folks who run OpenTelemetry.io, because, they work really hard on making sure that the, docs are kept up to date and- And really making sure that it's, it is the source of truth for all things OTel. but yeah, I would say that can be challenging.

The read mes on some of the repositories can be tricky, because there's so many different products that are, not products, projects that have [00:18:00] spawned r- from within OpenTelemetry. sometimes it's hard to keep track of all of these different things. one, one of the things that we've done internally...

So this year, I became one of the OTel community managers alongside Reece Lee, and we took over from Austin Parker. And one of the things that we started is What's New in OTel, and we basically bring light to, different SIGs every month to, special interest groups every month, so that folks can be aware of, what's going on, what's, what type of work are they doing, and help just people...

**Matty:** a

**Adriana Villela:** It's, oh, it's a, it's actually a stream that we do every month, on the OTel YouTube channel. I'll make sure I, pop that into, in, pop that link over to you so you can, include in the show notes.

**Matty:** show notes for sure

**Adriana Villela:** But it's, i- in some ways it's a little selfish endeavor for us so that we can stay up to date, but also, eh, the rest of the, the feedback that we get from a lot of the community is like, I can't keep up with all the OTel news."

So this forces us to help [00:19:00] you, community, keep up with, with the OTel news. and then I'd say the other challenge with, with OTel is, because it's such a large project, it's not necessarily ergonomic. there are parts of it that are really awkward to use. And I, and that's not knocking on OTel.

I think that's what happens when you have big projects like that. But I will also say, the light at the end of the tunnel is, there are a lot of initiatives out there to help make OTel more ergonomic with some projects, like some of the sub-projects, for example, OTel Weaver.

it's a really cool project that, allows you... It helps you standardize on your semantic conventions. So semantic conventions in OTel, you can think of them as, the standard labels to describe your telemetry. So there are standard labels within OTel for, the, the canned telemetry that we all use.

and I liken it to the food labels on our products that we buy at the supermarket. No matter what product, no matter what vendor, those nutrition labels all look the same, right? They're always [00:20:00] gonna have the calorie count and the sugars and the fats and carbs. and so that's what the semantic conventions are to OTel.

Now, at the same time, within your organization, there is also telemetry that you care to capture and you want to standardize on what that looks like. So OTel Weaver allows you to define what those semantic conventions are for within your organization, and then it allows you to enforce also those semantic conventions so that as part of your CI/CD process, so that when, you're, making your, as your code is making its way to prod, if it goes through, through the Weaver tool and it's comparing like your code against the semantic conventions that you've defined and there's a mismatch, it'll fail the CI process and it'll force you to go back to the drawing board and make sure that stuff matches up.

which is really nice because who, I think a lot of organizations fall victim to the, everyone's an island, everyone has their own conventions, everyone uses their own tools. So let's try to streamline this with [00:21:00] something like Weaver, at least from the semantic convention standpoint.

Because if you have a common set of labels within your organization, what's an observability backend other than a really fancy database with really fancy charts? so you want to be able to query that and if you don't have standardized labels, how the hell are you going to be able to query all this data?

**Matty:** So, so thinking about that and the, the, the islands thing makes me think about, you know, the, the people side of this and the organizational side of this. And like in an, in an organization, in a company, in a team, does... I hate to say but, but at some point you gotta, some- someone, where, where do we think about that ownership?

Is that really more on like software engineering side, on the developer side? Is it more operational like kind of thing? Because, 'cause people touch a lot of it, right? It's kind of the platform team, you know. It's, it's such a multi-discipline, cross-disciplinary thing,

**Adriana Villela:** [00:22:00] Yep

**Matty:** some type of, for lack of a better word, ownership, you, you, you, it gets very disjointed.

So what are, what are some of the, are, what are the good, the bad, the meh practices around that would you say

**Adriana Villela:** Yeah

**Matty:** What do you prefer?

**Adriana Villela:** I think, I think you hit a, hit on it spot on. so first of all, to echo what you said, this, observability is a team sport. Everyone should care about it. And I think one of the mistakes that a lot of orgs make, and certainly I saw it at Tucows even, they would turn to my observability practices team and say, "Hey, can you instrument our application code?

Can you create our dashboards?" I'm like, "Dude, it's like asking me to look in your underwear drawer. that, that's not my stuff. This is your stuff. You know what you need to instrument. You know what the dashboards are that you need to create, not me." so there's first of all this, even though, observability is part of reliability, and I think that's another thing too, like treating observability as a separate [00:23:00] thing.

no, it's part of reliability, so do not treat it as a separate team. But understanding that, yes, the, your, probably your platform engineers are gonna be your first line of defense looking through, through stuff in your observability backend to try to understand what's causing this thing. they're not gonna be able to do that unless your code has been instrumented, right?

Who's gonna instrument the code? The developers. Why the developer? Because they're the ones who get, who understand the code. Now, the thing that becomes tricky is that as developers, we're used to, writing logs. No problem. That's natural. But now we're being asked to oh, we gotta capture metrics, we gotta capture traces.

What the hell? so getting that conversation going with h- helping developers understand why it's important to capture that, but not only that, it's since you're going through the effort of instrumenting your code, wouldn't it be lovely if you could also use that to troubleshoot your code? and I think...

[00:24:00] So that's part one. Now, part two, what if you, by instrumenting your code, by the time you hand it over to QA for exploratory testing, for example, they can then look as they're, testing stuff, they encounter a bug. Oh, this stuff's been instrumented. I can use this observability tool to help me determine why this bug happened and go back to the developer and say, "Hey, it happened because of blah."

Or if they don't understand why it's happening, they can go back to the developer and say, "You're missing instrumentation. This is a gap." So then instrumentation becomes a quality gate. And then, nothing's gonna be perfect, but at least, I think you, your application stands a better chance of being more observable by having that quality gate by the time you hand it over to your SREs, for when shit hits the fan in production.

Now, that's part one. Part two is, who, where is the oversight? And I think this is the key thing, you know- So I think this brings us back to, I dare [00:25:00] say, not a huge fan of the term, but centers of excellence. but basically having s- some central body for accountability, like having some...

an entity responsible for overall observability practices within the organization is important. I think it, and that includes defining what those semantic conventions look like. What are some good practices for instrumenting the application code? What tooling should we use? Because please, let's standardize on tooling.

I once worked at a bank where we had, I think five different, version control systems, and God knows how many different instances of each of these. And so they were going through an audit process trying to un-fuck that. And that's a common story across many organizations. Everyone's got their favorite tools.

So having an observability practices, org to, help define what those standards look like, but also not working in an i- in an island because otherwise you get into the same problem that we [00:26:00] tend to run into with some of our InfoSec friends where they, you know, declare some org-wide things and you're like, "What the fuck?

Now I can't code.

**Matty:** Ja

**Adriana Villela:** What do you mean I can't access this tool? Why is it blocked?" So we don't wanna unilaterally have our observability practices folks make these declarations and not have the input from the people who actually use this stuff. So I... and so we need to continue having this, this collaborative environment.

Now, easier said than done, right? Because humans

**Matty:** Right. Humans, humans gonna human. We always say, you know, tech is easy, the people, people are hard. so a, a couple things as, as we kinda come, come to the end here. What's one thing that, you know, someone, someone checking out this podcast could do this week to either improve what they're doing in observability or just get started and get smarter about it? Besides

**Adriana Villela:** I...

**Matty:** live stream, maybe that's the thing they should absolutely do, right? But

**Adriana Villela:** Yeah, absolutely. [00:27:00] Absolutely. okay, I'm gonna do a little shameless plug here. I have an O'Reilly, video course on observability with OpenTelemetry, so if anyone wants to get started with that, and if you're a visual learner, absolutely that's, that's a great way to get started. I always direct folks to opentelemetry.io, the official OpenTelemetry website.

I think it's really important. l- a, a lot of us write blogs about how to do stuff with OTel, and I think that's super important. But I think, you have to be a good open source citizen and make sure that you also contribute those learnings back to the source of truth, the OTel docs.

and so I always, I always direct people there. And, and I will say also if you're just getting started, and you see a gap, this is your opportunity to contribute to open source. because coming from a beginner's, from a, a beginner's mindset pr- point of view is... it's a gift really to, open source project maintainers because especially if you've been doing it for a while, you're, like, so into your own head, [00:28:00] it's "Of course that's how it works," and then you forget the novice brain which has never seen this thing before, and you're like, "What the fuck are you talking about?

where did this config come from," right? that's a great start. OpenTelemetry YouTube channel as well, so it's otel-official, and that's where you'll also see, all of the livestreams, that we've done. so that includes What's New in OTel. There's a, a video called OTel for Beginners.

and then we have a whole stream, series called, OTel Me, where, folks who are using OpenTelemetry out in the wild share how they've been using it, which is always very helpful because, it's so comforting to know, "Hey, we have s- the same struggles," or, "Oh, they solved it. They solved the problem this way."

And then we also have OTel in Practice where people share cool things that they've learned with OpenTelemetry. And, that's, these are not limited just to practitioners, because a lot of us who are contributing to OpenTelemetry, yes, we work for observability companies, and guess what? We get to dogfood it too.

even hearing those stories of how we use it internally within our own [00:29:00] orgs is really cool. So all of that in otel-official on YouTube.

**Matty:** Fantastic. Well, we were gonna put links to all of these things in the show notes, which you can find if you go to arresteddevops.com/all-things-observability. And, along those lines, if you go to arresteddevops.com/itunes, you can leave us a review in the Apple Podcast store, that supposedly helps other people find the show.

I keep saying this every time, I don't even know if it's true anymore, but reviews are fun. Review us everywhere you can find us. you can find us on Spotify, iHeartRadio, Audible, all the places that, fine and less fine podcasts can be found. So Adriana, thank you so much for joining me today. This was great.

I feel like we're gonna to dig deeper into some of this stuff at a future episode for sure, so maybe, maybe we'll get a fun little, observability roundtable going. We haven't, we haven't done

**Adriana Villela:** Ooh.

**Matty:** in a while

**Adriana Villela:** Right on. Count me in. thanks for having me, Matty. Appreciate it

**Matty:** Yeah. This is Arrested DevOps, and remember, there is always DevOps [00:30:00]

**Adriana Villela:** In the banana stand
