# AI and Incidents with Sylvain Kalache

[00:00:00]

**Matty:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matty Stratton. We are gonna talk about a topic that is near and dear to my heart today, so get excited for that. So, we are gonna talk about AI and incidents and, and, you know, if you're a longtime listener of this show, you know that incident response, learning from incidents, blameless postmortem, all that fun stuff, something I care deeply about even though it might not be what I do professionally anymore.

And I'm really, really happy to have an awesome guest today so we can dig into this. so Sylvain, welcome to the show. can you tell our, our listeners just a little bit about yourself and, why

**Sylvain Kalache:** Yeah.

**Matty:** this?

**Sylvain Kalache:** Hey, Matty, excited to have this conversation. I'm a, I'm software engineer by training, started [00:01:00] my career as an SRE, SlideShare, LinkedIn, where I was envisioning actually back in 2012 an AI-assisted like self-healing system, maybe something we can speak about today. After that, I was an entrepreneur for more than half a decade, created a software engineering school, that was in person but with no formal teachers, no lectures.

student would learn by working on project and collaborating. and after that I joined Rootly where I lead an AI lab. Rootly is an incident management platform, and my role at, at Rootly is to understand what LLMs can bring to the world of reliability. So we do this with my team through open source work.

We build projects, prototype tools, and research that we share with the community. So yeah, I'm having a lot of fun in, in this role and learning a lot about the current state of incident [00:02:00] management and, and what's coming up.

**Matty:** So this is gonna be juicy because, you know, as much as everybody is talking about AI all the time and, you know, I am constantly getting pitched for guests who wanna come on and talk about AI and trying to... Listeners, we, we don't want this show to become, you know, Arrested AI. but it's, it's getting into everything that we do.

And, and if you listen to our, our previous episode when I had Marino on, we were, we were talking about all the tendrils and, and how much we have to learn. And one thing that I think is, is really interesting when we think about to incidents and incident response and where AI comes in, and having been in this space for so long, you know, both I, you know, and, you know, I spent years at, at PagerDuty, as, as an advocate working with people all around the world on how they did incident response, was involved in the re- you know, spoke at Redeploy, did all this stuff.

But even before that, when I was a cis admin and then which became SRE, there were, I, I remember [00:03:00] decades ago, you know, people trying to pitch products that would automatically respond to incidents and, and, you know, things with, you know, even when Rundeck was coming up and there was a lot of really powerful things but, it was always still really that helpful, right?

Like, it was, it was really good at something that could be predicted, right? You know, and, and one of my, one of my favorite little stories is when I was at apartments.com, I remember one time, you know, my, my CTO said to me, you know, you know, "Why, why," you know, we had an, an outage or something and, and she said, "Why don't we have a monitor to check for that?"

And I said, "Well, because Pat, because until last night we didn't know what could happen," right? so when we think about here in 2026, you know, soon to be 2027, and everything happening with, with gen AI and LLMs and, and agents and everything, that landscape has really changed. And, and I'd love to hear first from you, Sylvain, about how has this changed?

And pretty recently, like we're really [00:04:00] talking about, you know, having AI is so in- embedded into everything and capable i- really only in the last couple years.

**Sylvain Kalache:** Yeah. indeed like that. And, and, and it's still evolving, I think. you know, we're, we're coding AI, AI agent are very much into coding workflow now. I think the adoption is just, you know, now I, I don't think anyone is not using AI when they are, writing software. When it comes to incident response and, and incident management, this is still an emerging field.

the kind of key product names that has emerged and most practitioner don't like is called AI SRE. that's, you know, how this AI assisted incident response tool are generally called. And, a- and the idea behind this tool is to, come up with two type of memory. I would say long-term memory. When you set up the [00:05:00] tool, the tool will ingest, your code base, incident report, your, knowledge base, read all your Slack channel, and kind of create this, kind of this instinct that engineers have, especially when you've been around a company for a while.

When something breaks, you kind of know, right, where it might be breaking, right? You have like this kind of, I don't know, it's an instinct, right? a-

**Matty:** I used to joke and would say, you know, when you looked at senior or experienced sysadmins, when something would happen, they would get that little like, "Hmm,

**Sylvain Kalache:** Mm-hmm.

**Matty:** this before,"

**Sylvain Kalache:** Yep.

**Matty:** thing

**Sylvain Kalache:** Exactly. So you have like this-- It's kind of like a-- Actually, most of the time it's a, it's a, it's a graph, right? A knowledge graph that the tool is creating with all these tidbits and bits that, as you just say, Matty, like you will make you nerd and be like, "Hmm, I think I know where it is." And the second type of memory is kind of live, live signals, right?

Like something breaks, the tool [00:06:00] receive an, an, an alert, and it needs to investigate what just happened. so what are the latest, changes, the latest deploy? What does my telemetry says? Look at traces and all of this. And so from these two type of like, I would say long-term memory knowledge and like live signals, the tool can then come up with hypothesis and start to investigate.

And I think honestly, just this part of the tool, not even the root cause analysis, but just collecting the data, is a huge time saver, right? because this tool can investigate, let's say 10 hypothesis at once and bring the, all the data for you in one dashboard. And I, I think this, just this alone is, is super valuable.

**Matty:** That, that's interesting 'cause I remember when, was, it was, it was interestingly, it was right before Rundeck was acquired by PagerDuty, but I was talking to, Damon Edwards, who is the founder of Rundeck. We were just chatting, and it [00:07:00] turned out that it was right before then. But we're thinking about how you could integrate and how w- Rundeck could be useful with something like PagerDuty, and to me, what, what seemed to make sense was have it automatically do the things, but it's like what are all the things?

So you get paged in the middle of the night, something's going on. What are all the data collection, all the logs you're gonna look at, like all the things you're gonna do first? And it would be like, well cool, if the robot could be doing that while I'm getting out of bed and logging onto the system, that's super-duper helpful, like just all of that.

And that, that itself doesn't really require AI, but I could see how AI makes that better because you don't always know... It's not like every single time always do this, or the way you would have had to do that before AI is say like, "Okay, so an incident with this shape, I want these logs, I want this," and that's a huge time saver, but, you know, with, with the inference models and things like that, they can guess.

And also I would imagine, like you talk about the memory, if there's like kind of a history of [00:08:00] what are the things you do every time, it can start to remember that and say like, "Okay, every time I page Sylvain about this particular system, he's always asking for these Honeycomb logs. He's always asking for this, so I can already get that going."

So that's, that's super powerful. I think people, what people imagine, and I would go so far as to say the people in question are probably never responders, but the people several lines above them are like, "Well, why can't the robot just fix it then if it's always the case?" And I have some thoughts on why that's risky.

I would, I would love to know what you've experienced about reality versus capability.

**Sylvain Kalache:** Yeah, yeah, yeah. yeah, so to your point, the next step, once you have this-- all this data collected, the hard part, hard part comes in, which is like, hey, like, can I actually find the root cause? and here, you know, these tools are excellent at toil, easy to fix incident, right? They will get them right, [00:09:00] super, most of the time, you know, now on, on, on safe three or safe two, we see like close to a hundred percent accuracy.

Now, when the incidents are more complex, that's where it's jagged, right? Like sometime the tool will, get it right, and actually sometime even above and beyond. Recently, I was at, at a conference, about AI and reliability in Berlin, and Alex, Alex, Paltchouy, which is, with an, an, Anthropic, reliability engineer, was the only one on call for Claude in Europe for the longest time.

So if since -- if sensing was explaining how, Claude can fi-fix itself, and in a specific example, he shared an outage where, if you were to send a, a specific request with like a picture, I think it was an array with picture in it, and you send twenty-two pictures, the algor-- like it would crash. [00:10:00] But then-- So, you know, that was the, the bug.

But then what Claude did it, that it looked at the pattern of the request, and Claude found that this was not just an outage, it was an attack. You had four thousand accounts that were sending this request. So someone, some actor was trying to bring them, them down, right? And it's, "Hey, you should, contact the safety team because this is most likely abuse," right?

So not only Claude found the technical-- the bug, but then it went further and found that a malicious actor was behind this outage. Something that, you know, human like you would have just tried to patch the bug and look-- not look, beyond this. So that's further, you know, kind of, where it goes well. And then he shared example where the, the LLMs go into red herring traps, right?

Like, hey, like there is this outage or look at the cache, the graph on the [00:11:00] cache rate, you know, like, explain a very, very good, story. That's probably the issue. Turns out it's not this at all something humans would, would, would do.

**Matty:** Which is also not unique to LLMs. As human responders, we absolutely can do that. And it, it got me thinking a little bit when we were talking about this, when we think about, like, incident command system, like, I, it, I'm, I'm kind of curious, and maybe we'll, we'll dig into this or, or put a pin in it, but about how LLMs can help with some of that stuff. because one of the things that, like, I, I, I wonder and, and my, my, my skin kind of shivered a little bit when I'm, when I'm thinking about what I'm about to say is about could Claude, for example... Well, we'll use Claude as a stand-in. Could Claude be an incident commander? And I think in a way, or the inverse could be that you can use LLMs as incident responders if you have really good incident command all of the things we talk about that you have to [00:12:00] watch out for are the things that an incident commander is trying to do with the incident responders, right?

'Cause it could absolutely... The, the, the red herring thing 100% can happen with humans, right? We're going there, we start digging in, we see something, shiny object, we get freaked out about it, and a good incident commander is gonna sit there and say, "Wait, Sylvain, is that what we need to do right now to get service restored?"

Right? Which is, which is that. So, so that's an interesting metaphor is, like, an LLM is either side of it. I don't know that I would say... 'Cause I could see ways where it could be a good incident commander maybe, or it could work well as a responder with great incident command. I think the super dangerous thing would to be to say, "Oh," and I know, I'm, again, I'm not su- anti-LLM and stuff, but there's definitely folks who will be like, "It can do every damn thing," and be like, "Well, if you just create the right kind of agent description to describe how it's an incident command or whatever."

I'm like, "I don't know." Like, I feel like... And, and, and that goes to [00:13:00] the, the, the key point is, thinking all the way back to conversations we had about machine learning at PagerDuty before pre-AI, and one of the things was, "Oh, well, why can't you just, like, train on all your incident data so that it knows what to do?"

And there, there's two problems that we ran into, and Lily Broadnick talked about this a lot. But one was- Generally speaking, organizations don't have enough data, You know what I mean? And, and, and it could be like, yes, could Pedro or Rootly or someone like train on all of them, but even so, even number one, forget about the like privacy nightmare of that, of like training on someone else's... organizations' incidents have different shapes. But secondly, and this was what I, I love the example she gave is she said if you think about the difference of like, say Netflix recommending a movie to you versus OpenTable recommending a restaurant. if Netflix gets it wrong and they recommend a show to you and it's wrong, [00:14:00] like cares?

Like you get, maybe you watch the whole episode, you waste a little of your time, you go, "Okay, screw it." But if we recommend a restaurant to you that's terrible for you, now you've gone, you've spent hundreds of dol- you know, so the risk... And then you think about something like incident response or even, even in this case it was just about, flagging severity. Like what if it gets it wrong, right? And it's like it just, you know, the LLM or the learning is like, "Oh, well this probably wasn't a sev one," or whatever, and it was, so it's, it's, it's risky. I think we have greater capabilities than we did with where machine learning was eight years ago or whatnot. But, yeah, so like I guess that's sort of the thing, like while we have the, the capability, do we temper our expectations maybe?

**Sylvain Kalache:** Yeah. I mean, definitely human in the loop. I think we, we are not hearing this as, as much as we used to, but I think it's absolutely critical. seeing from the usage we see of our AI SRE for Rootly customers, [00:15:00] the human is always involved. Like, we don't see customer running this in a blind way for all the, the reason that you just mentioned.

and I think there is another component to making sure outside of, of making su-- like knowing that these tool are not perfect, that so far, the human judgment is still far better and, you know, like we, we still have, you know, more capabilities when it comes to incident management and these tools. It, it-- also the necessity of keeping, human, in touch with the systems they are building and troubleshooting.

Let me explain what I mean by that. Let's say you let your-- this AI, AI tool handle all your easy incident, right? They will do it all, fix them. The, the issue with doing this is that these small incidents are generally what you use an- as an incident responder or as an engineer to practice, right? You get to practice the skill, you [00:16:00] get to understand how your system is working, so that when a huge incident happen, you are warmed up, right?

You know what to do, right? You've developed this instinct that we spoke about at the beginning of the episode. If you don't do this, i-if you let your AI handle all of the small incident, and then there is a huge complex incident that your AI tool cannot solve, well, you'll be kind of out of luck, right?

You'll be not in shape to handle the incident, and you need to, to learn, from scratch. and Another industry faced this similar pattern decades ago, the aviation industry, when autopilots for plane came about, pilot were relying too much on them. In the '90s, Amer-American airline pilots, coined the term children of magenta after, you know, this magenta line on, on the screens that, that pi-pilots were looking at.

And you have, I mean, still unfortunately today, like a number of crash because [00:17:00] pilots, they are not flying the plane anymore. And when, when the autopilot is engaged, it's usually because it's a situation it cannot handle, and it's generally a very urgent, complicated situation, and the pilot has to react immediately.

So what the aviation industry did is that they came up with the necessity of s- keeping pilot trained, and they do this through simulation. So every year you have to go in a simulator, or whatnot. It, it doesn't have to be simulator, but to practice this emergency, you know, procedure that you might or might not need to do in your career, but you need to know them, right away.

And so I think there might... That-- I think there is something to, to take inspiration from as, as, you know, for the engineering industry, for the software engineering industry. and LLMs, I think can help a lot for, for simulation. So that's, that's something I think, that, you know, we should look into

**Matty:** That, that really, jumped out when you're, when you were saying that and, you know, [00:18:00] y'all are listening to an audio podcast so you're not seeing me violently nodding to, to Sylvain. But I had a, I had, one of those popular conference talks I ever gave was, I talk about fight, flight, or freeze, about organizational trauma, and a big part of that is talking about just what Sylvain said.

So I just wanna double down on the when an incident is happening, it's an emergency, and you're freaked out, and you're, you're not used to doing things, and you want all of the things you do to be in your muscle memory because you're used to doing it. But the other part of that is if you practice doing it in a calm time... the thing is, I always like to say our brains are very smart and they're also very dumb, right? And we can trick our brain into being calm if we're like, "Wait a minute, I associate this mechanism," you know? and it's, it's like, Rain- Rein Heinrichs used to say, you know, "If you're bad at having incidents, have you tried having more of them?" Right? You know. And, and so the thing is, we can build all this automation, but you, what you don't wanna, you know, I always used to say, too, you don't wanna have it be... The thing is, is if, if we built more stable systems, we have fewer of these, [00:19:00] so we actually get worse at it. And then, and also as you do things like not have one person be on call for all of Claude ever, but, you know, we build these larger rotations and stuff.

You're like, you could go months and months getting paged, and you don't wanna be getting woken up at 3:00 in the morning going, "Well, how do I log into Rootly again? I don't even remember. I've never done it for the last six months." So, but I love that idea of being able to leverage LLMs to help run game days, right?

Like, because, 'cause part of the problem with those are always they're risky. You wanna make them look real. A human has to sit there and figure out how to inject the failure. You know, we used to do it with chaos engineering stuff and all of that. so I think that's, that's really great. But, like, I wanna keep going on your, your thought about, you know, as we start to lose that knowledge because, like you, you said, number one, you said, you know, an incident is when we get to practice our skills of, like, troubleshooting and fixing. But also, this is how we learn. [00:20:00] And when we think about, it's a bit of a shame that in the modern day, I think a lot of that learning from incidents community is kind of, not as much in the forefront. but, you know, how much was even pre-LLM was a problem of, you know, postmortems being write-only, right?

You know, how do you, how do we say, "So sure, that's great that, you know, Codex went and fixed the incident and did whatever," but then how do we communicate that, and how do we, as the people who weren't involved, and not being involved in incidents, the same reason there's, there's multiple reasons I think that, product owners are great incident commanders.

One is they tend to have a great skill for it 'cause they're very organized. But two, man, you put a product owner on call as incident command, they become very invested in reliability because they understand it. They see that. They have a visceral experience. And- The more that we detach ourselves from having to deal with that 'cause our, our happy little robots do it, I don't think that means we can't have the robots help, but I think we have to have [00:21:00] an intentionality around not just going, "Oh, okay, well, there was an issue last night and Claude fixed it." So what, what do you see as the things that we can do to help, mitigate that erosion of knowledge and experience and visceral

**Sylvain Kalache:** Yeah, I think, I think there will be a fine line to walk for engineering teams. I think we'll need to explore. my intuition tells me that first we'll push this too far and let the AI handle the incident for us, and then we'll get bitten and be like, "Oh, shoot, maybe we shouldn't do that." and so yeah, my intuition is that we are gonna see less incidents or, like, the time it's gonna take to solve incident is gonna shrink, but we are gonna see, like, bigger major incidents that takes like, you know, hours or days because engineer lost track with that.

I think ultimately [00:22:00] Like seeing someone or something doing something or, or solving the incident and just watching it is not the same as, as doing it. I was in education for, you know, half a decade. I've built a school based on that, where my-- our bet was, hey, you learn software engineering by writing, doing it, not by listening to a teacher or watching slides.

And we were right. Our students got hired by Facebook, LinkedIn, Meta, Google, Nvidia, you name it. and so I think we can apply the same thing to incident management. Like, you could argue that you can watch and read the report from, from the AI, but our brain doesn't work this way. Like, we don't engage the same way by, by just reading and consuming than doing it.

So, you know, I, I do think that we... I think, there is, there is two ways it could go. Either this, this tech is gonna become so good, that most incident will [00:23:00] be, will be handled. The fact that we are detaching ourself from, from the re-reality of our system is not gonna be an issue because anyway, the LLMs are gonna be so good that they are gonna handle most of it, or we are in for a, you know, reckoning and we are gonna...

Right? Like I, I don't know. Honestly, it's, it's a good question. I don't have an answer to this. But I will say that at Rootly we've seen this coming. We always look at the human component, and so we've already partnered with Uptime Labs. I don't know if you know, these guys are really cool. We built what we call the Rootly Academy, where we put you in the seat of an incident commander, and you have to command a bunch of LLMs, which are personas, you know, to like, tell them what to do during an incident.

So we've already like, you know, like prepared to make sure our customers are, are still staying warm, but ultimately it's, it's not gonna be in us.

**Matty:** I think the, the other thing that I [00:24:00] would see as an advantage if you have some way to, to wire this really well is to help your coding agents about the... In the same way that you would expect your, your human devs, you put them on call, you know, it helps them see what happens, they understand the issues, SREs even if whoever the responders are, communicate.

You know, the same reason that we say why you share the postmortems back to that. So, like, if you're not within, you know, if you're, if you're, you're pretty all in or, or using coding agents very heavily, if your, your context of your coding agents does not have context of the incidents that happened, you know, then you're potentially running back into, so tho- those same feedback loops apply. But I really wanna talk about human in the, the... And the, when I say the human in the loop, it's the human that's involved. And this is another one of those things that I feel like as an industry, we, we were close to caring about this, and then we sort [00:25:00] of decided we don't care that much anymore. But, you know, when I think back to some of the early, like, so a lot of stuff that was very early in the DevOps, you know, when you think about circa 2014, 2015, 2016, you know, we were talking so much about burnout and, and, and managing our responders. I can't remember the tool Etsy, back when, when they were a monitoring company that also sold tea cozies and had all this awesome tooling, they had a great tool that they used for ensuring, basically managing how often their responders were, were being woken up, what was their health like and everything, and we cared.

This was, this was for a time at least, you know, big at PagerDuty. We were building stuff. I have a talk, I'll put a link in the show notes. It was about, called it How Do You Infect Your Organization With Humane Ops? But it was thinking about the impact of that. And I could see very much where it could be perceived as like, well, if we have all this automation, it's so much easier.

But [00:26:00] even if you're, even if all you're doing when you're getting woken up in the morning, in the middle of the night is wrangling robots, still that cognitive thing and, like, how do we think about maintaining health of our responders and, and, and their on-call and where that goes in this, in this modern way and not just sort of let it continue to, to fall by the wayside?

**Sylvain Kalache:** Yeah. lo-love that you are bringing up this topic. so a-actually let me frame my-- frame the situation. as of today, I looked at the average number of incident per customer on Rootly from two thousand twenty-three up to today, and the average number of incident, increased by three. So three times more incident today in twenty twenty-six than in twenty twenty-three.

So, so far it's not becoming easier, it's becoming harder, right? Like there is, more stuff that is coming inside, to, to incident responders. That might [00:27:00] change with AI eventually. We'll see. Maybe not. I think we are still in learning phase where, the developer are still learning how to handle these tools and maybe some AI slope is coming into production.

the other challenge is I see for incident responders, they are getting less help. back in the days, you know, let's say you have a hard outage, you can do a little give blame, go, you know, tap on the, the, the developer shoulder and say, "Hey, can you he-help me troubleshoot it? You, you wrote this." Now the answer you may get is: "Hey, like, sorry, I didn't write it.

I just prompted my agent." so yeah, you are on your own. So in summary, incident responder as, as of today, they may have to handle more incident with less help. and so The, the, the way that, this trend is gonna evolve, obviously, hopefully it's gonna go in the right direction, as you said, with, with AI, but it could also go, the, the other way.

There is more code, there is more things being built. There is-- And as we know, [00:28:00] maintaining software is much harder than, than writing it, right? what, what we've done at, at Rootly, Maly, actually, I, I'll be interested. I know-- I didn't know about this Etsy initiative, but what we've done at the Rootly AI lab is we've developed a methodology that will, look at two type of, of, d-data to make sure that you are not overworking your incident responders.

So it's-- The, the first type of, of metric is, I would say, observe metric. So it's stuff like, "Hey, how many, incident did you handle? Did you work at night or outside of working hours? what was the severity of the incident?" another data that we just added is how many tokens are you using. Some people are token maxing and, and actually getting addicted.

something we might want to speak about. And the second type of data is collected. So we simply ask the, the, the people on call, "How do you feel?" and then we ask them, "What's having the [00:29:00] biggest impact on you?" And that's, we take, we take inspir-inspiration from this methodology that you use in, in, in the medical field.

Actually, if you have an Apple Watch, you might have been prompted this question, "How do you feel?" And based on this data, you can basically kind of have a, a score that tells you how's, how the, the engineer is feeling, and how it's evolving over time. that's not a, a medic-medical tool or diagnostic, but it can give you a signal, about how the trend is going.

we-- So this methodology is, is available. We built an open source tool that you can run. It's called OnCall Health, and we've seen large organization use it and have a lot of success with that.

**Matty:** I w- I was just, I was just poking around. I just found the OnCall

**Sylvain Kalache:** Oh, you found it?

**Matty:** I was looking, I found that... So the Etsy tool, we'll put links to all these in the

**Sylvain Kalache:** Yeah

**Matty:** called Ops Weekly. The GitHub repo was archived three years ago, but the last commit was, like, nine or 10 years ago.

But it's, it's very much [00:30:00] in the same DNA of what, what you guys do with, with OnCall health. 'Cause, like, one of the things, and it was very, like, revolutionary, is, is that the, the OnC- Ops Weekly had a sleep tracker So it was like, you, it said if your engineers use something like a Fitbit or a Jawbone, they could integrate that, and it, it gave an integ- a, a metric called MTTS, which was mean time to sleep, and sleep time lost because of the notifications and stuff. And so I, I, I am... I cannot tell you how good this makes my heart feel to see. I did not know you guys had this on-call health thing. This is great, and it makes me so happy that this kind of legacy is continuing because I f- I just feel so cynical that, like, we, we seem to have stopped worrying about our people as much, you know?

and I can tell you, like, when I was at, at PD, you know, I would, would talk to how many... You know, I talked to a CTO or CIO who was... When we would talk about this problem, and they'd be like, "Well, that's why I pay him so much money." And I'm like, [00:31:00] "You can't...

**Sylvain Kalache:** It's dumb.

**Matty:** know, we can't treat people that way." And it's...

And also just from a pure forget about being a decent human being, just effectiveness, right? Like, you're just not gonna be, you're, you're not gonna be as, as, as effective if you're not thinking about all this stuff. So this is... I love this. I am super excited, so definitely everybody, this is all, all gonna be in, in the show notes.

as no great surprise, like, we are cutting to the end of this, and, and there's so much more to dig into, and I would, I would love, Sylvain, I'd love to have you come on again and, and do a whole episode just talking about the on-call health and

**Sylvain Kalache:** Yeah

**Matty:** we, we treat our, our human... Because we need to be talking about it some more.

I feel like, like some of us who've been around for a long time feel like we don't need to talk about it anymore 'cause we feel like we did, and we're like, "Oh, there's all this stuff." But there's so many people are newer, you know, that, that aren't going back as much as I would love to think that everybody involved in infra and DevOps and everything are going back and listening to all of the back catalog of People [00:32:00] don't. Maybe the AI agents do. That's the thing. Like, maybe if our AI agents do, and they'll start to learn from these podcasts and start to tell people the right thing. But, but again, we, we've got lots of stuff in the, in the show notes. If you go to arresteddevops.com/ai-and-incidents, we'll have the show notes.

We got I've also put in some links to some previous episodes we did. A couple that come to mind, did a great episode years ago about retrospectives with Amy Tobey, Alex Hidalgo, and Raine Heinrich. very early episode of ADO was about incidents and accidents with Dave Zwieback and Mike Rimbetzi, speaking of Etsy. awesome episode called Cognitive Neuroscience with Courtney Nash and Lindsay Holmwood. We'll put the links in there. And then, an awesome, episode about safety and resilience engineering, with J. Paul Reed and Mary Thengvall. So, if you go to arresteddevops.com/ai-and-incidents, just repeating that 'cause I think the show notes for this one are real important. You can find Arrested DevOps on, Apple Podcasts, YouTube Music, Spotify, iHeartRadio, [00:33:00] all those places. Go to arresteddevops.com/subscribe. They're all there. Sylvain, this has been great. I have, have absolutely enjoyed the hell out of this and, and I know we're gonna have you on again, very soon

**Sylvain Kalache:** I'm down. Let's do it again.

**Matty:** This has been Arrested DevOps, and remember, there is always DevOps

**Sylvain Kalache:** And the banana stand.

