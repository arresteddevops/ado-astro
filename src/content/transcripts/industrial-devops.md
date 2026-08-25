**Doug Pagnutti:** [00:00:00] the best ideas come out of IT tickets. 

**Matty:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. am Matty Stratton. we are going to be talking about some parallels that I've observed in other parts of tech and other parts of the industry that seem reminiscent of the journey we've been on for DevOps over the last years. but before we dig into that, let's have a word from our sponsors 

Today's episode is sponsored by Attribute. I met the team, saw a demo, and honestly, this approach is quite clever. They call it FinOps without tagging. It's the first FinOps runtime technology that analyzes cloud cost based on infrastructure traffic instead of relying on billing reports or tagging. For teams who need [00:01:00] visibility into per team, per product, or per customer cost, Attribute enables this visibility with one line of code.

Think of a list of your teams or products or customers broken down to RDS, BigQuery, Kubernetes, OpenAI, data transfer, and over 35 multi-cloud services based on actual usage, fully automatic, no spreadsheets, no tagging. They've been recognized in six Gartner hype cycles and are working with companies like Akamai and monday.com.

Arrested DevOps listeners, reach out by the end of 2025 and get their highest tier at the price of the base one for the first year. Check them out at arresteddevops.com/attribute

**Matty:** So I am joined today by, uh, Doug Pagnutti, who, uh, happened to dis- you know, disclaimer, disclosure, whatever, we work together at Tiger data. But we are not actually talking about time series databases or, Postgres or anything, except maybe we will. [00:02:00] Uh, but before we kind of jump into our main topic, Doug, can you tell our, our audience a little bit about yourself?

**Doug Pagnutti:** Yeah, you bet. So, uh, as Matty mentioned, I'm a, a developer advocate with Tiger Data, but I've only been that for, for a few months. Uh, before that I was an automation engineer, and I was an automation engineer for a long time working in oil and gas and then manufacturing. And so I've had my share of, uh, run-ins with, with IT and, and OT stuff.

**Matty:** Doug is, Doug said he's only been doing this a few months, but you're- he's actually coming up not too long from now will be your, uh, one-year anniversary being a developer advocate. So

**Doug Pagnutti:** Uh, people are gonna start expecting that I know what I'm doing then

**Matty:** are. You can't do... I'm, I'm imagining, you know, the Homer Simpson when he joins the Navy, and he's like, "It's my first day."

I, I don't think you can pull that

**Doug Pagnutti:** Oh no

**Matty:** Doug, Doug, uh, posted something in our Slack of his video setup the other day and said, "Oh my God, am I an influencer now?" So welcome to DevRel. [00:03:00] So this is... Uh, let me, let me lay a little groundwork about, uh, today's conversation. we had a, an offsite meeting for our, our, our team, uh, a few weeks ago, and Doug was helping us all get really smart about, industrial customers and how people work in manufacturing plants and plants and all of this stuff, which was super, super cool.

Uh, but as he was discussing, he started to talk about this, this challenge and this friction that comes up between, OT and IT, and we're gonna dig into that in a second. And as Doug was explaining this, listeners will not be surprised, my brain started going, "Well, this sounds like stuff that John Allspaw and Andrew Clay Shafer and all of us big DevOps nerds have been talking about for well-nigh 10, 12, 15..."

Geez, what is... How long ago was 2009? Man, almost... Are we coming up on 20 years of DevOps? Holy cow. So what I thought would be really interesting would [00:04:00] be for Doug to tell us a little bit, you know, give us a little background on what this OT and IT means, and yeah, in a second we'll tell you what those acronyms are.

You probably know one of them. And tell that story, and we might see some parallels and see, A, maybe are there things in the DevOps world that we can learn from the challenges that have existed there? And then also maybe if you live in that industrial world that has this and these, you know, sort of cross pressures, how do we apply... It might not feel like DevOps to you, but it is. I mean, it all becomes DevOps at the end. So Doug, can you kind of first maybe tell us what is OT, what is and give us a little...

**Doug Pagnutti:** No, no

**Matty:** weave a story of, of

**Doug Pagnutti:** First, I, I really like that you said discussed and not ranted 'cause when I, when I first brought it up and started telling all my, my horror stories of, of that conflict, uh, I thought you talked about this podcast as just a way to get me to stop talking. But no, [00:05:00] this...

**Matty:** on

**Doug Pagnutti:** It's true.

**Matty:** probably mean rant. So,

**Doug Pagnutti:** Okay.

**Matty:** feel, uh, you know, do not hold back on the ranting. That's what

**Doug Pagnutti:** Yeah, okay.

**Matty:** puts

**Doug Pagnutti:** So,

**Matty:** in the seats

**Doug Pagnutti:** so let me kinda set the stage for what, what this whole IT/OT conflict is. Um, you know, back in the days, you had your, your plant floor and y- or, you know, your manufacturing, whatever it is. Um, and, you know, most of it was just machines, right? It was, like, keeping the machines running, and over time, you started connecting more of those machines.

So, you know, it was the automation engineers and the manufacturing engineers that started building up this own little, you know, IT infrastructure. Well, at the same time, whatever company is running the plant, they've been doing IT for, for years, and they have their own IT structure. And initially, you know, those, those two things kinda grew up separately, so you have your, your corporate IT that's issuing the laptops [00:06:00] and running your servers and your domains and all that kinda stuff.

And then you have the, the OT, which is essentially running the IT within the plant. They're connecting the robots, the, the PLCs, computers, stuff like that. And, and at some point, those two worlds that grew up separately kinda smashed into each other, and the IT teams were, were trying to say, "Hey, you know, we wanna, I don't know, send this data to the, you know, central corporate office or whatever."

And the, the OT team is like, "Well, we wanna access data from out here or, or send data there." And just because these two organizations have grown up so independently and, and with different objectives, um, like I'd say my, the majority of my career has been trying to get the two to, to work together and, and actually produce what, what everyone wants, which is, you know, the data going where it needs [00:07:00] to go and, and not going where it shouldn't go.

**Matty:** So I wanna pull, pull at a, a thread. There's something you said towards the end there about these, you know, these two things coming up with, with different objectives. And number one, again, if you know the history of DevOps, everyone's just going, "Uh-huh. Uh-huh." Uh, I've, I've talked before about one thing that I think is really interesting is I've said that to me, DevOps is sort of the, like, weird amalgamation of Agile and ITIL. And because when we did, when ITIL first came around, you know, on the IT service management front, it was very much geared towards operations, and it was like, "We're gonna put together all these principles about how we run operations and technology." And then you would ask the question, "Well, what about software development?

What about the application?" "Well, I don't know. They have a way they do that." And then when we look at how Agile started to come up in a lot of organizations, you know, and, and, and this point when I'm saying Agile, I mostly mean Scrum because, you know, Agile is five bullet points and that's it. But, you know, it was all these ceremonies and all this build about, like, how do we do that, and let's [00:08:00] make sure we have these cross-functional teams that have QA and product and software dev and everything.

And then, you know, the sysadmin in me goes, "Well, what about ops?" And they go, "Uh, that's so you guys have I- ITIL. You have your thing." And so you have these two things that are trying to do the same kinds of things but with different incentives, I'm gonna talk about that in a second, or different frameworks. And the fun thing that we learned through the whole DevOps movement is ultimately we're all just arguing about of words. Uh, Andrew Clay Shafer, who, you know, uh, folks listening to the show may remember is the one who coined the term DevOps, is, uh, one of my favorite tweets that Andrew ever said is, "Who wants to fight about the definition of made-up words with me?" And that is, is all of this. but the objectives are sort of the key thing and you know, one of my tropes is people will say, "What's the most important DevOps book that I can read, Matty?" And I would say, "Go read Freakonomics and learn about incentives. If you understand incentives, you will understand DevOps." You know, 'cause we kind of think about we have these [00:09:00] micro-incentives that are around our team or our particular function, and really our goal should be at the organizational level. So, I, I, I'm gonna illustrate this with a story that I've, I've told on this show before, but I want Doug to hear it.

So back in the day, I had a, a, a colleague, a peer who, um, was the, uh, infras- IT infrastructure owner for, um, for one of our sister companies where I was working, and her compensation, her annual bonus was a target times uptime of the website. Now, how incented do you think she would be to allow any changes to ever happen? at all. But really, or the, the goal of operations is not keep the website up. The goal of operations is allow the business to keep selling shoes, right? And the goal of, the real goal of dev and developer, application developers is not ship X number of features a month, it's enable the company to sell shoes.[00:10:00] 

And it's, interesting how that's always... Today, again, we're here in 2026. We're coming on 20 years of, of having this conversation, and I still, if I was giving a talk about DevOps to an audience of technologists, I would say, "How many of you know how to, how your company makes money? If you don't, go find out.

I'll wait." that's where it comes to. So in that color, it seems very similar, right? Like, you have the, uh, you, you have your IT department who are like, "We're the people who provision people's email boxes, and you need a server spun up, we'll spin it up for you, and we'll give you storage on the network, and you need an IP block," and we do the thing and, and how are they measured?

They're measured by how many tickets they get done, right? They're measured by, know, availability of this core infrastructure, and it's probably highly divorced from the business, right? And then your OT folks, I think, if I can push an analogy, if we wanna talk about sort of the classic [00:11:00] DevOps wall of confusion, you had sort of your app dev on one side of the wall of confusion, you had your ops on the other side of it, and then the devs just throw shit over the wall of confusion-

and it's crazy. So, like, OT is a little bit like on the side of the wall where app dev would've been, right? So they're like, this th-" So it's... And it probably goes both ways. Now, Doug, you firmly sat on the OT side of this so, you know, the villain of your

**Doug Pagnutti:** I...

**Matty:** is probably

**Doug Pagnutti:** No, no, no, no, no. Hold on. Hold on. So, so I have, I worked, I worked at Dell for a while. I, I, I know a lot of IT people, and they're good people. Is that, just like, can I put that in a

**Matty:** Yes, yes. That's

**Doug Pagnutti:** disclaimer?

**Matty:** m- yep,

**Doug Pagnutti:** I,

**Matty:** know, I'm an old

**Doug Pagnutti:** I like IT.

**Matty:** person. I love Dev people. but again, you're, you're, you're,

**Doug Pagnutti:** Yeah, yeah. All right. Here's, h- here's, here's, here's my perfect example, right? So, so we're, we're manufacturing, we're actually manufacturing explosives. Whole nother story. Um, but, uh, so, like, the robot stops working, and it stops [00:12:00] working because it can't communicate to whatever, you know, machine is telling it what to do.

I, I, you know, do my initial troubleshooting, and I realize that it's a network issue. And the, the classic, like, the server, the... Sorry, the routers at our plant are run by IT, and, you know, I need to get this fixed. Like, production's held up. You know, we're, we're... We made, you know, millions of charges a year, and, and it was zero at that moment.

and, and so what am I supposed to do? I'm s- supposed to put in a ticket. This ticket gets routed to someone in, in our situation, it was Bogotá. So someone in Bogotá who has no idea about our, our manufacturing process or anything, they get the ticket, and they're, "Oh, I, you know, thank you for sending your ticket.

I'm gonna route this to our server or our router team, who will, you know, investigate." Long story short, way too long, I figured out how to connect to the, [00:13:00] uh, s- the router directly in the console and fix the problem myself. I don't think that's part of our, like, IT structure, but it was the only way I could get production back up.

And, and everyone's like, "Ooh, yeah, you're a hero." Like, no, I'm not a hero. I broke the rules just to get it going. But the, the organization was such that that was the only choice I had, other than waiting days. And, and really waiting days, you know, the, the CEO would be calling us, which wouldn't have been, wouldn't have been pretty.

**Matty:** Yeah, it's, it's in- 'cause that's the kind of thing, the story you illustrate is, like, where, you know, shadow IT comes from, you know? And the, the very classic cloud story of very early days was there was, uh... My historians are gonna correct me if I get it slightly wrong, but, you know, I think it was at the Washington Post, there was this, this, this cat who was like, "Hey," had a project to digitize tons of back issues, and was like, "Well, I'm gonna need a server to do this," and went to IT and said, "I need, [00:14:00] uh, you know, a ProLiant with X number of whatever," and they said, "Sweet, you can have it in 10 weeks." And he was like, "But I have to do this now." So what did he do? He went over to AWS, slapped down his credit card, spent $300, did the entire thing in 12 hours, and it was done. That's... And that's, like, the first, like, real, like, practical cl- which in the end of the day is shadow IT, right? And that's why IT departments have moved more towards a consumerification, because people are expecting better things to that.

But, but that's still just delivering a resource. It's not thinking about it holistically. And maybe what would be interesting in your experience, and especially, like you said, you've, you know, kind of sat on both sides of the wall, you know, um, without coloring this with what I would think about with a DevOps hat on, like, what were some of the things that maybe helped break down those...

'Cause silos are important. You know, Michael Ducey will tell you, you know, there, we, we, grain silos exist because you have to contain things and keep them [00:15:00] safe. So it's not like we have no si- it's not about get rid of silos, but it's about building the bridge and understanding. what, what helped?

**Doug Pagnutti:** So, so for like my personal story, what helped was knowing some people in IT. Uh, you know, I was always friendly with the, the local center IT group because they could help me in those, those situations where the, the standard system didn't apply. So, you know, it's always gonna be personal relationships. I, I have tried to tell, people higher, people paid more than me that, you know, you can't, you can't just separate IT and OT anymore because they've converged, right?

The, the like requirements on one-- on both sides are now the same requirements, right? They both need to be secure, but they also both need to, you know, be able to access data from here and there. So, you know, I, I said like the IT team, they should have at least one person who's had [00:16:00] OT experience, you know?

They should ha- the, the OT plant itself, at the very least, there m- there should be an, a rep in IT who knows the situation, you know? It, IT, you said commodified, like I, I feel bad for IT 'cause most of my colleagues, you know, it's become such like a kinda brutal, you know, how long did it take you to close this particular ticket?

And, um, the resources are, you know, they're getting offshore. When... You need to have someone who knows what the process is. Uh, sorry, uh, knows how the money is made so that they know that if a, you know, if, if I call and because a robot's down, like whatever resources are available, like throw it at 'cause, you know, you can, you know, you're losing thousands of dollars every, every minute, every hour kinda thing, so.

That, that's my... You know, i- ideally you'd have no distinction between IT and OT but if you can just like at least mix them together a little bit

**Matty:** And it becomes [00:17:00] an interesting challenge because, again, to go back to my sort of agile th- I had, the first place I was at when we implemented agile and I ran, you know, system engineering, and the answer that seemed to make sense on paper was, okay, put a sys admin on every product team, and they were the rep.

Now, was I staffed have a dedicated

**Doug Pagnutti:** Yeah.

**Matty:** team? I was like, no, I had myself and two sys admins across six to seven product teams. So we said, "Okay, well in that case, all right Barry, you're on these three, and Matty you do these two, and, you know, Josh you do this one." And that, that makes sense on paper until it got to the point that nobody on my team could get any work done because our entire week was spent in agile ceremony meetings, because that meant you were on three to four different product teams you supported, that was three to four daily standups. That was every sprint. That was a sprint review, a sprint planning, a whatever, and then you s- My t- I remember I had folks on my team would sit down and say, like, they're like, "Dude, I have [00:18:00] two and a half hours a week to actually do any work." So it's, it, it gets into this, it's a scaling thing because usually IT in this ca- and is more resource constrained because you're trying to, like, support a much broader, right, piece. And the other thing, and I wanna ask you how you think about this. feel like in a way the OT/IT thing feels like almost a microcosm under the ops of the DevOps. Like, I mean, OT is probably writing the app co- but they're not crea- It's not like you're not creating features and shipping and stuff like that.

You're probably still, which in some ways should make the empathy to make happen, because at the same da- We're, we're like, we're all system people here now, right? You know. And don't know. I'm, I'm interested to know about, like, what the, what, what are the things that people in OT, maybe that would help.

Like, we all understand what people in IT do, but like, what are some of the things that are being built and having to do besides your example of, hey, something's on [00:19:00] fire. But like,

**Doug Pagnutti:** Yeah.

**Matty:** what do these systems even look like that you're building as an OT person?

**Doug Pagnutti:** For sure. So, um, w- there's, there's a bunch of, bunch of good examples. Um, one I would say, uh, a big thing maybe 10 years ago, but also still to this day is, like, predictive maintenance and, and machine learning. And, you know, we aren't, we aren't data experts u- usually in the, in the manufacturing plant. So for example, what we did in one case was, uh, we outsourced the, the machine learning part to a third company.

So, you know, imagine I'm, I'm in the mach- the, the plant and I've got all this data, and now I have to send the data to some third company who's gonna do machine learning and reply with some, you know, suggested modifications or, or whatever it is. So now I've kinda broke this... You know, I, [00:20:00] they let me do kinda whatever I wanted within my, within my area.

Um, but, but now I'm going out. You know, I'm, I'm, I'm-- I need a network connection that's passing real data and, you know, some of that data might need to be anonymized or, you know, we were ma- making explosives. It's th- there's some, some issues with data. Um, so, so now I'm, like, breaking the, the wall that we had set up between IT and OT, and that, that's common all the time now.

So, so many manufacturers are, are no longer able to just, you know, keep their data within their, their own manufacturing plant and, and run with it. Now they're, they're sending data out, they're using, you know, LLMs, they're, they're using all these outside services and, and that was kinda like a peace treaty we had with IT for a while, and, and it's completely broken down.

It's... And, you know, there, there's no, there's no coming back, right? Once, once you've started passing data to this person, you know, they're, they're gonna want a [00:21:00] dashboard over here and, and, and it does just expand exponentially.

**Matty:** And your users inside the business, they don't give a crap about OT, IT, whose thing it is,

**Doug Pagnutti:** Oh my goodness. Yeah.

**Matty:** it's a black

**Doug Pagnutti:** I,

**Matty:** Where does...

**Doug Pagnutti:** get yelled at for, you know, 'cause they can't, whatever, they can't see their dashboard from their car, you know, on their phone, and I'm the one that gets in trouble for that. It's like, come on.

**Matty:** I also was curious, so you know, we've, you know, security is obviously a key thing of all of this, 'cause you're talking about proprietary data, all sorts of stuff. And like how does... I, I think I have my gut, I think I know the answer, but like where in this sort of balkanization of whatnot in, in an industrial place, where are the security folks?

**Doug Pagnutti:** uh, 'cause we joked about, you know, the, the IT being the villains in, in my story, but, but honestly, it's the OT folks who, you know, they, they just don't have a good concept of, of the [00:22:00] security requirements with, with, you know, getting outside the network and the, the kind of attacks, when you have an attack surface and stuff like that.

Um, I've learned so much from, from just talking to security experts in IT. And, you know, once, once you do that, you, you kinda get a sense of, oh, that's why they only allow this particular thing, or that's why we have to, you know, put these, isolate these systems and whatnot. And I would say OT's the worst for that, 'cause they came up in a, "Just get it working," you know?

"Whatever it takes, just get it working." And, you know, I've, I've been to plants where, you know, seriously the, the outside connection is you just, like, unplug this network cable and, and plug in the, like, non-standard PC that someone's kept there from who knows when, and you plug that one into this other port, and now it's all, it's available outside the, the plant.

Like, horrible, horrible practices

**Matty:** What's, uh, what's funny is I, I [00:23:00] think about one of the, you know, volumes of work that, that people, you know, suggest to, uh, to read. You know, there's the, the book The Phoenix Project, which I don't know if you're familiar with it or not, Doug, but it was, you know, Gene Kim et al wrote this book, and it's a, it's a, a riff on a, a book called The Goal, which was, uh, written in the, the, uh, you know, decades before, and it was about, uh, manufacturing processes.

And I think it's very

**Doug Pagnutti:** Oh, I-- yeah.

**Matty:** like... And, and,

**Doug Pagnutti:** I know

**Matty:** a weird way, we in software, we love analogies and parallels to manufacturing and industrial, and yet none of us know how it works, right? Like, we all love to talk about Andon cords and Toyota, how do we apply the Toyota production system to shipping software and do all of that?

And so in a fun way, there's probably some irony to tease out of this, where if there's a part of tech that should understand those lessons, it would be in industrial because they're doing it in the [00:24:00] actual manufacturing part, but not the technology part maybe as well.

**Doug Pagnutti:** Oh, I, I, I love it when I hear people start talking, you know, lean practices and stuff in, in software development because that, you know, we live and breathe that in manufacturing. And it's, you know, it always gets twisted just a little bit when it, when it crosses these different, uh, different boundaries.

**Matty:** Yeah, it's sort of like you have to find what the first principles are of that and then how do they apply versus, you know, getting into the...

**Doug Pagnutti:** And, and be a little bit reasonable. That's my other advice, yeah

**Matty:** ' Oh, we're going back to lean, right? You know, and it's interesting, so, like, DevOps lore and, and, and Doug, you're, you're not as, as versed in, like, our DevOps nerdery, but DevOps

**Doug Pagnutti:** learning. I'm trying

**Matty:** going back to, like, 2010 was this idea called CAMS, and this was John, John Willis and Damon Edwards, they basically sort of wrote it on a napkin and talked about it at the first DevOpsDays in Mountain View, California then.

And [00:25:00] CAMS stands for culture, automation, measurement, and sharing, and those are fundamentally the four main principles of DevOps, right? And they are all equally important. Um, the part that we all do the most is the A, the automation, 'cause that's fun and interesting and engineers understand it. Um, but then not too long after that it was adapted to CALMS, and the L, um, fun is we can't even agree about what the L stands for.

It either, depending on who you talk to, either stands for learning, which I don't like as much 'cause that's what sharing is, but really most people think it stands for lean, 'cause Jez Humble kind of introduced the DevOps world to, like, so he has a book called Lean Enterprise. And to me, when I think about the...

And again, lean has a ton of stuff, and there's only some of it that I think applies. So to me, the part that matters and where this comes in and I think is really interesting is value stream mapping, where we're gonna sit there and say, because just like in a manufacturing plant, everybody [00:26:00] knows their little part, And but if, but if you don't look at, if you don't value stream map the whole thing, you don't identify your bottlenecks appropriately and everything, and the same thing will happen with shipping software. You'll sit there and you ask someone, they'll be like, "I know how to do my part," but no one's looking at the whole thing and saying, "Everything's queuing up."

Like, 'cause in, in The Goal, you know, the classic example, the, the, this theory of constraints is illustrated in The Goal is in this manufacturing plant there was this oven, and the oven was the bottleneck. And it was like, and the theory of constraints is any optimization you make on either end of a bottleneck just makes things worse, right?

So if you're like, cool, so in the example of The Goal you have this heating oven that takes however long, well, if you get more optimized leading up to it, all you're doing is queuing up stuff waiting for the oven, and if you get better at the other side of it, now it's a bunch of people sitting and things sitting there waiting for work to be done. So there's no point... And so and but how do you identify bottlenecks? You have to do the value stream map, and that requires someone, and, [00:27:00] and usually it's you get a bunch of people in a room with a whiteboard and you're like, "Everybody draw your part." And me this sounds like similar thing with the OTIT thing, which is like, "Well, I know my part.

Okay, the, puts in a ticket, they need a subnet allocated, and then it takes this thing," and you're like, "Okay, but where's the..." And you can get much better at that, but it's not gonna help the gestalt, right?

**Doug Pagnutti:** Yeah. And, and this is again where, you know, OT probably should, um, you know, learn a bit more about the IT world because, you know, when you're, when you're in OT, you have such a clear, like, link to the value, right? If, if you produce 100 widgets, and then you do something that makes it produce 110 widgets a day or whatever it is, you know, you can write that right out.

Whereas, you know, for the, the person running the server, or sorry, person running, you know, the, the IT infrastructure, right? Well, you know, if, if there isn't a failure, they can, you know, kind of [00:28:00] argue that it would've been bad if there was this. But it's, it's, it's s- a s- few steps removed, and if the OT person, like, kind of can see that it's still essential even though it- it's, you know, not right on the path of the actual widget being made, um, I think there'd be a little more, um, uh, peace between the between the camps.

**Matty:** I, I always used to say that being a sysadmin, in this case being the IT, you know, where that comes in is, I said sort of like being a corporate lawyer where nobody knows what you do until you don't do it, right? You know, so the same thing, the corporate lawyer, nobody knows all the times that they saved the company from being sued.

You only know they're around when it doesn't work. And the same thing, your infrastructure people are constantly doing this. It was... The point you made about, you know, well, I could argue that if we didn't do this, then we might have had this outage, and it's a really messed up cognitive dissonance that happens all the [00:29:00] time, and the classic example is Y2K, right?

**Doug Pagnutti:** Right.

**Matty:** I mean, Doug, you and I are

**Doug Pagnutti:** You mean that nothing burger?

**Matty:** lived through this, but there's many people who are like, oh, that whose story of Y- like, the way they would frame Y2K was we invested hundreds of millions of dollars and all these things to, to work on a problem that didn't exist. And you're like, "Didn't it?" Because

**Doug Pagnutti:** Right

**Matty:** that nothing happened was because we did all that work, and it's not, there's no maybe about it. I mean, I don't think it was gonna be like that Simpsons Hall- Treehouse of Horror where the traffic lights are gonna start shoot- were gonna start shooting lasers. But, and the, there's a...

I'll put a link in the show notes to something called the Stella Report, which was this, uh, this activity years ago that a bunch of, uh, resilience engineering and post- postmortem got together and reviewed a bunch of public postmortems. But one of the things that, that gets talked about in the Stella Report is how often in a post-incident review or a postmortem and, and you'll, you'll make the desysion, we [00:30:00] need to shut down, right?

Like, we need to stop taking orders or whatever. And, and then they'll say, "Yeah, but it wasn't a problem.

**Doug Pagnutti:** Yeah

**Matty:** was fine, so you shouldn't have done that." And you're like, "But was it?" You know? And, uh, it's,

**Doug Pagnutti:** and pretty much every yes

**Matty:** at system thinking. We want very clear cause and effect and, you know

**Doug Pagnutti:** I, I mean, in some ways that it's funny because, you know, automation engineers, th- they have their own world on, you know, on the manufacturing floor that kind of s- has a similarity to IT, where, you know, if everything's working great, y- they'd be-- everyone's like, "Oh, well we didn't even really need the automation engineer.

It's all automated." But somehow, you know, taking that experience and being like, "Oh, there's the, the IT people that are doing all this work in the background and, you know, keeping things running," it's harder to... Or I think we, we could do a better job of [00:31:00] empathizing with, with what they're going through, and understanding that they see things that, that we don't on the IT floor, and there's problems that they're addressing that we don't see.

We just see the, like, tickets that are taking forever or the you know, bypasses that we have to do just to get functionality

**Matty:** like specialization is not a, bad thing, you know? And that, that's another lesson of, of the DevOps movement is for a while, and I'm sure these things still exist, there were people who interpreted DevOps as devs need to be able to do everything. it wasn't dev minus ops, it wasn't... But that's where all the shift left stuff comes in, right?

Everyone's like, "Oh, well you just, just make them be able to do everything." And you're like, ops is a skill, You know, and the same thing, you know, like your, your IT folks, that is a specialized skill in which they have expertise. The expectation shouldn't be, "Oh, well we just, like, make that go away and enable the OT people, give them root on everything, and they can build their own shit and whatever."

And it's like, yeah, [00:32:00] but no. But how do you, you know... And, and that's, um, if you've heard, like, the idea of shift left, which I, I hate. It like, the, and because, well, the idea is correct but like everything else when you bring it down to a couple words, there's too much nuance. So oftentimes interpretation of shift left, and, and if you think about, if you think about, like, your commit to cash kind of flow, it's like start with the developer, write some code, commits it, goes through its stuff.

So that starts on the left, and the right is production. So it's

**Doug Pagnutti:** Yep.

**Matty:** take all this stuff over here and push it to the left so it's earlier? And what that gets interpreted as is developers have to do all the testing, and developers have to do all the security analysis and everything. And it's like, no, it's not move the work to the people on the left.

It's just move the work and bring the people along earlier, right? You know, um, and, and like we talk about the security stuff, I can imagine that you and OT, you're gonna build a bunch of stuff, and there's probably a gate that security has to review it. And it's probably at [00:33:00] the end. then that sucks, right?

'Cause what do you... This is true, it's how it, like, so you sit there, you do a bunch of work, you build the thing, you're ready for it to go live. Security does a review, and they come back with 15 s- highly severe findings. Now, what, one of two things is gonna happen there. One is you're gonna pause shipping it while you go fix everything, or the real thing that happens is you get some higher up muckety-muck to get a security exception that says it's okay because you have to ship the thing because you've promised 25 more explosives a day to your customer. And as I'm fond of saying, the bad guys on the internet don't care if you have a note from boss that says, "Oh, it's okay." You know, signed, you know, my mother. And it's like getting those things, and I think the same thing, like, when you talked about, like, getting the IT people to have that understanding but, like- Having them treated more like teammates than a [00:34:00] commodity that you make a request out of.

That, that they're, they're, they're, they should be more like people you work with, not AWS. You know what

**Doug Pagnutti:** Yeah.

**Matty:** you- AWS engineers don't know anything about how your business makes money or how it works or whatever, and you just put in through, whether it's humans or whatever, requests.

**Doug Pagnutti:** Yeah

**Matty:** like as the, and, and, uh, that's hard because different incentives,

**Doug Pagnutti:** Oh, and you're getting...

**Matty:** that, uh,

**Doug Pagnutti:** Yeah.

**Matty:** world differently

**Doug Pagnutti:** And getting back to your scaling thing, you know, now you're taking someone's time in the IT for, you know, an extended period of time. They have to, you know, allocate their, their, uh, you know, little pie slice of their, their time to you, and the, the resources are so constrained, especially IT.

It's, you know, again, it's... There's a, I guess, culture, right? Wasn't that the, the first thing in your CAMS? Yeah. There's gotta be a, a culture of that or else it's, it's nice to [00:35:00] say, but

**Matty:** Well, they, there, there's a, a, a, I can't attribute the quote properly, and it was a very old one, but I've been... I mean, I think it goes

**Doug Pagnutti:** Einstein, probably.

**Matty:** sure that I

**Doug Pagnutti:** It was Einstein.

**Matty:** episode five of this podcast. It was, like, a very early one, so it's still true. But you cannot... So when we look at culture, can...

And, and, and leaders make this mistake all the time, and they say, "I'm gonna define our culture." You cannot define culture. You cannot enforce culture. What you can do, though, is you can behaviors, and the behaviors drive that culture. And how do you reinforce behaviors is with incentives. And what people, people will think about incentives, and they will think about the, um, the, like, more actionable incent- The intended incentive, which is the thing of like, "Oh, okay.

Well, now I'm gonna measure you this way." But they don't think about the unintended incentives that come out of other things. How are you incentivized? Uh, Jez, Jez Humble tells a story years ago, [00:36:00] um, and I, I love the fact that he told this story probably in 2010, and it's probably still true in many places, where he said he was working with a company and they said, "Okay, we wanna get better test coverage." So every developer was, uh, given a mandate that every sprint they had to add 10 tests. you know what that meant?

**Doug Pagnutti:** I, yeah, I know where it's going.

**Matty:** assert equals true. I

**Doug Pagnutti:** Yeah

**Matty:** the tests and, you know, I don't, I don't like the Dilbert guy anymore and stuff, but there's a, there's a funny story in one of his books about, where they decided, they said, okay, well, they're gonna try to incentivize their testers and their developers.

So testers were given a cash bonus for every bug they discovered, and then developers were given a cash bonus for every bug that they fixed. And what happened almost immediately is a black market in bugs came up, where the developers would introduce a bug, tell the testers about it so the testers could find it, the devs could fix it real easy 'cause they put it there. And, you know, after they paid out, like, thousands of dollars in the first three days of this, they're like, "Maybe this didn't make [00:37:00] sense." But, know, we talk about the Nash-Pareto equilibrium, which is, like, people will work to the incentives you give them, even at the detriment of your organization. So it's,

**Doug Pagnutti:** No, I, I've had a, a lot of people I've worked with that where that's where the tickets thing drives me nuts of, you know, they'll be like, "Well, okay, let's, it's not really working, but let's close this ticket and start a new one." Just working towards that, uh, closure rate.

**Matty:** When, when I used to teach incident command, um, one of the, the rules that we would say, you know, to do to, to manage an incident well was to not litigate severity. Don't spend time on the incident call arguing about is this a P1 or a P0 or a P2? And I would give these workshops and talk to folks, and people come after me- up to me afterwards, and they would always say like, "Okay, the thing we have the most, the hardest issue with is litigating severity.

We spend so much time arguing about what severity it is." And I said, "Let me ask you a question. How does your leadership manager manage, um, your effectiveness and your stability?" [00:38:00] "Well, the number of P1 incidents we have a month." So I'm like, "So you are, your goal is to..." Um, I used to say that the real metric you have is mean time to innocence, which is you're, you're, you are

**Doug Pagnutti:** I love it.

**Matty:** on that incident call to resolve the incident.

You're incented to its severity down because if you have a P1, that's a failure, and that's gonna make you less inclined. You know, it's a, we used to, uh, um, a fellow used to say, um, um, you're not very good at, at, at managing incidents. Have you tried having more of them?" I mean, which is silly, but it's true, right?

So anyway, different, different, different rants, different quarters put in. Um, we have really had a lot to talk about, and I think we've just barely scratched the surface. Um, is there anything that you would say from some of the things we've talked about today, if someone's living in that OT or the IT world in an OT/IT split, on either of those, [00:39:00] like, what would be maybe your advice to just say how to those bridges or just what's, what's one actionable thing they might even try to think about?

**Doug Pagnutti:** Fi- find out the name of your IT person. That's, you know... I, no, honestly the... And, and I'm sure most automation engineers have already realized this, but, like, having that personal connection helps you deal with the structural issues that are, that are already in place. And then, and then beyond that, you know, and maybe actually from that, right?

Now that you recognize that, that they're people and that they're, you know, they're, they, they still want success, right? Everyone, everyone's trying to help the company. Um, then you can, you know, maybe get a little more empathetic and, and be like, "Oh, well, hey, you know, I, I'm doing this security review because it could cause, you know, serious problems and I, you know, maybe I don't recognize the, the, um, possibilities that could come from [00:40:00] it."

So I don't know. I guess it, uh, it's pretty funny to, to come back to, like, it's about people, but it's about people.

**Matty:** I, I always say tech is easy, people are hard,

**Doug Pagnutti:** Yeah.

**Matty:** So, uh, and then also if you are coming from that world and new to DevOps, I, you know, check out the back catalog of Arrested DevOps episodes 'cause I'm pretty sure quite a bit of what we talk about here seems like it, seems like it could, could apply. Um, that said, uh, head over to arresteddevops.com/industrialdevops for this episode's show notes. If you go to arresteddevops.com/itunes and leave us a review in the Apple Podcast store, that helps people find the podcast. And yes, I am intrinsically against renaming that redirect even though it hasn't been called iTunes in years and years and years. Um, you can also find us on Spotify, Audible, anywhere that, uh, fine and less fine podcasts can be [00:41:00] found. Uh, so Doug, thank you for, for joining me today. This conversation was exactly what I was, was, was, was, was hoping for and, uh, I'm sure we'll have you back on the show to talk about, talk about some other, other learnings

**Doug Pagnutti:** So what you're saying is I gotta be careful anytime I start, uh, ranting about something. Might end up,

being a topic for a podcast

**Matty:** you, you, you, you have a random conversation and, and it becomes a conference talk or a podcast episode or a blog. I mean, I... We're not gonna go into this, but I, I had a little conversation over coffee with a friend of mine that turned into a talk that I've given, like, 18 times around the world, you know?

And the best, the best ideas come out of, you know, annoyances and random conversations.

**Doug Pagnutti:** Out of IT tickets. the best ideas come out of IT tickets.

**Matty:** This is

**Doug Pagnutti:** All right

**Matty:** DevOps, and remember, there is always DevOps

**Doug Pagnutti:** In the banana stand
