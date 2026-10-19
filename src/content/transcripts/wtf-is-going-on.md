# WTF Is Going On with Marino Wijay

**Matty:** [00:00:00] It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matty Stratton. Really exciting show here today. We're gonna see where it goes. We, we don't necessarily know what we're gonna talk about, so come on the journey with us. Well, Marino, welcome to Arrested DevOps. As I like to say with some of my favorite guests, I'll sit and say I can't believe that we haven't had you on the show before, so I'm glad we're rectifying that. Thanks for joining today

**Marino Wijay:** Matty. No, it's, it's a pleasure. I am happy to be here. You know, there are so many people in this world, and I know that you're still, like, working through your list of people that you wanna have on the show, so I'm glad that I was on the list. Thank you very much. Happy to be here

**Matty:** That said, listeners, if there's other people that you think should be on my list, feel free to, you know, reach out to me. There's, there's ways to find me. But , , , we love to have great pals on here. [00:01:00] And Marino, before we jump in and figure out what the heck we're actually gonna talk about, you wanna introduce yourself to our listeners, just a, a little bit of you know, what, what is up?

**Marino Wijay:** Yeah. Yeah. So everyone you know, my name is my name. I don't need to go into that. But I am based in, I am based in Canada. I play heavily in the world of Kubernetes and cloud native, and I work as an SE for a company called Isovalent, now part of Cisco. Leave it at that. People can go, you know, dig in if they wanna find out more information about me.

I'm, I'm sure that, you know, Google or Claude's got plenty of info about me.

**Matty:** I'm sure we'll have all the, all your appropriate social and GitHub and all those fun links in the, the show notes, so, so check those out. But yeah, we were talking before we started recording about what we wanna talk about, and we kinda landed on just WTF is going on? Like, there's so much change, and, you know, you and I, we've been, we've been around. [00:02:00] This is not our first rodeo. We have been in this industry. We've seen big changes, you know, the, the DevOps movement, you know Kubernetes itself, you know, kind of thinking about all the new ways of doing things, and I can't... I don't know about you, but I cannot recall such massive change in such a short amount of time in our industry, and it, it feels like it just keeps getting faster and faster, you know, in, in those, those places, and just having to rethink. And, and I, I'm guessing a lot of our listeners too are like, "What?" You know, "I, I, I knew what I was. I knew what I, what I wanted to do, and I don't know, man. I'm having an existential crisis here."

**Marino Wijay:** You, you pretty much locked into how I feel. Like, you, you understand and you can empathize with the fact that, like, with the rapid pace of change of technology or some new AI buzzword or something and its deprecation too, [00:03:00] is, it's kind of an interesting phenomenon going on. You know, between, between...

Let's say, let's look at the 2010s, right? Between 2010 and 2020, things were improving. We'd s- we'd see innovation at a, at a very predictable pace. Like, we could see how things were changing very rapidly at the same time, but that was a 10-year window, and you start to see, like, the introduction of cloud native and Kubernetes.

Anyways, 2021 rolls around and now everyone's got money and everyone's got great ideas, or, or so they think they do. And now you've got all of these startups that are saying, "Hey, we're doing X, Y, and Z." And, you know, we've talked about this many, many times. Many people have talked about the whole zero interest rate period phenomenon that occurred, where with that cheap money you could do almost anything.

You, y- you were limitless at that point. [00:04:00] So you see that, you see that little opportunity window, you jump in, you create your own company, and then boom, inflation hits and rates start rising, and the ideas that seemed cool fizzle away. The people that were out there jumping around advocating and talking about some of this cool stuff are jobless now.

And now you're starting to see a shift in the industry because what was really hot and cool is suddenly boring and isn't making anyone money, and now everyone's gotta jump to something new. And so AI magically enters that conversation and, and here we are where something called Loops was a, a huge thing two weeks ago, and now no one talks about it.

And y- you sit there and you think, like, "One, is my job safe?" That's always gonna be top of mind for the next several years, I'd say. And then two, you, you hit, you hit it earlier on. You're like, "You know, [00:05:00] what, what do I even do? What do I... What am I even anymore? What is my role, given that, like, I can just talk to a little chatbot and boom, my entire day is done.

My entire workload is complete." And so you start to think, like, "What is next? Where do we go from here with this consistently increasing velocity of change of pace? What happens next?"

**Matty:** I think that's the thing, it's that, that velocity of change. It just continues to get faster and fa- And this has true been, always been true of technology. You know, kind of if you think about the example of how many thousands of years was it before, you know, we were a- before mankind could fly? And then between the time of the Wright brothers, in the span of one human lifetime, put a man on the moon, right?

You know, it's like it keeps going fa- And so the same thing where, like, you know, you're mentioning... We- we're gonna talk on this show, and I'm not sure exactly when this is gonna get released, not too far after we do it, and it's entirely possible that the stuff we're talking about right now, already people are gonna be like, [00:06:00] "Oh yeah, remember when that was cool a minute ago when everyone was talking about Jev and TypeSafe and all those things?"

Which I don't even know anything about. All I know is everyone's talking about it, and I can't even keep up. And I consider, you know, for what I do my job and where I work, to be pretty AI-forward in keeping up with the tools about how do I enable, how do I work? And I feel like I did a whole lot of work at the beginning of this calendar year, and I got really good at, like, using Claude Code and being able to do stuff like that.

Now I'm already... And even within our department, you know, we build these tools and everything. It's like, oh, well now Claude has gotten really bad at this, now we should be using Code, and now we should be using this. I'm like, how do you... How does someone build a workflow when

**Marino Wijay:** Yeah

**Matty:** the, the, the pieces keep changing?

You know, people talk about the metaphor of, you know, rebuilding the plane in flight. And friend of the show, J. Paul Reed, who's also in aviation, says he hates that because he's like, "Nobody ever does that. But what you do is you do work on an active runway." And we're even beyond that. It's like we're doing work on an active runway, but we're also [00:07:00] changing and deciding, well, now it's a helicopter instead of a passenger jet that's landing on this runway.

And by the way, how can you, how can you keep up? So listeners, if you're dealing with this, you are not alone, you know. Yet those expectations are there. And I think some things where I think depending on where you are in your career and your ex- experience There's probably kind of a sweet spot where this is a little bit not necessarily safe or n- unfortunately, the reality is nobody is safe right now, which sucks so bad. But you're very early or very late in your career is probably where it's very, very hard. Because if we ... And I'll first, first speak to I don't consider myself very late in my career, but getting older. I'm in my 50s. You know, I'm thinking about that, you know, and how do you keep up? And, and we had, you know, Jeffrey Snover on the show years ago, and he, he said the thing that he loves about tech, and I'd love to see what Jeffrey thinks about this now, was that it's always changing.

And he said, "Hey, if you want something where [00:08:00] nothing ever changes, go into lumber. Wood doesn't change. Tech changes." But up with that is rough. And then if you're earlier in your career, because I think to be super effective with a lot of this tech, there's first principles, there's, there's foundation.

Like, and we, we sit there and we say, like, okay, you can use to help build these things, and you can do that in a good way if you ... You know, the lack of a better way to say, if you already know what you're talking about. know what you're doing. If you're a senior engineer, these tools are phenomenal because you're like, I can go into the

I'll give, give an example. You know, we built a, we build a lot of internal tools here at Tiger Data. You know, we like to build with AI and stuff. And, and I would say my, kind of my running joke is that, like, the tool that I build for our marketing department is probably the most well operationalized one because it was built by someone who comes from infrastructure and SRE.

So my brain just goes to these places, right? Doesn't mean it's actually the best architected software-wise, probably not, 'cause that's not what I do. But you damn well better believe that it's got some great [00:09:00] security and it's certainly got awesome CI/CD all this stuff. if you're, if you're newer to this, like, 'cause some of the way that we have traditionally learned these things was by being a junior who was learning from the more experienced people.

And-

**Marino Wijay:** And very much fucking up.

**Matty:** Yeah, making mistakes, right? But having somebody, but having some safety to make those mistakes, and having someone to help you learn from the mistakes. And it's like, can the robot help you learn from the mistakes? I don't know. I mean, it probably can if you know how to have it help you learn from the mistakes.

And, but if you just wanna one-shot stuff, you're never gonna get there, so. Sorry, we're not providing a lot of solutions right now. We're just, 

**Marino Wijay:** it's fine. It's, it's good to air these concerns out. Like, I think people feel, feel like they're not, not validated at the moment where, yes, they're optimized in their day-to-day jobs and possibly [00:10:00] personal lives, but there's a mental toll that shows up behind the scenes that impacts your, your ability to progress career-wise or even your, your life.

And, you know, to your point, the folks that are very early career normally would, would attach themselves to the stuff that are very much low-hanging fruit. Like, I'm, I'm gonna go work on these tasks, learn a few things, realize I can optimize my workflow, and it's just an additive process where they incrementally become so much better over time.

But if that-- If there is a gap there and, and at the same time, there are all these people that want to address that gap, but at the same time, you've got AI already addressing that gap. You know, now we do not have a, a pipeline, if you will, of, of experts or experts to be, or SMEs that can grow into these senior or leadership style roles.

And so now you begin [00:11:00] to wonder like, what, what happens five years from now? Like, are the people that were supposed to retire still working because they can't retire anymore, and now there's never gonna be enough room for those newbies in tech? Maybe. Possibly.

**Matty:** I think it, it, it, it benefits us to sort of look at the history of our industry because we could have been having this, and you, you, you kinda got to this, right? We could have been having this conversation 15 years ago. This was exactly like when I, when I think about the very early days of cloud, right?

It was like this, this whole idea was like, oh my... You know, so all of us who grew up working in data centers and, and were building servers by hand and were used to doing all of that, and we're like, "Well, if it's all in cloud, what? A bunch of people are just be a few people working for Amazon and Microsoft and Google, and then what do the rest of us do?" And there was ple- there's still plenty to do. We've had plenty to do. I, I remember going to the Gartner Conference, you know, [00:12:00] 15 years ago. And, and by the way, if you ever go to a Gartner Conference, the sessions worth going to are the ones that they call rogue sessions, where it's someone speaking contrary to Gartner's position. And the, the, the point of this talk, I remember, was that, you know, 10 years from now, your entire job will be being a vendor manager. You know? And in some ways that's what cloud team, what most cloud teams are, but they're not just sitting there making requests to people. But, but that was the mentality that we thought of was like, "Oh, I'll put in a request to Am-" It was like, no.

But then we had things like Chef and Puppet and Terraform, and we're like, "No, we're actually gonna automate this," but yet... So when we brought in things like Terraform, that didn't take away... Like you're, again, the same thing. Anybody could write Terraform, but if you didn't understand the infrastructure you're trying to make it do, it wasn't a helpful thing.

And so I guess that's sort of my way of thinking. It's like it's not completely gloomy. We've done this before, and people [00:13:00] still managed. There were still people who... There... How many people, you know, like, the, my, my joke used to be when I'd interview someone for tech ops, I would ask someone to explain RAID levels.

And even towards the tail end of me doing that job, have pe- 'Cause to me, that was the softball question that I would ask a cis admin. And then I'd start to have people who couldn't do it, and I was like, "What?" I'm like, "Well, wait a minute. They've lived their whole life in VMware, in virtualization.

They don't do hardware disk." And that's okay, right? You know, so it's kinda like do we... So people were able to do that. Like, there's all sorts of people who are amazing cloud infrastructure engineers that never racked a ProLiant in their life, that have never used a SmartStart CD, and that doesn't mean they're not good at what they do.

We just, the abstract... And so I wonder, and I think that's the argument that a lot of people are making from a development standpoint, is that we're just pushing that abstraction layer above, right? Like, it's like going from assembly to an interpreted langua- you know, to a compiled language, to interpreted language.

We're just a little bit higher [00:14:00] But is it happening so fast that there's no time to, like, bring those skills up?

**Marino Wijay:** I-- You're ab-- It is happening very fast. It happens so quickly. Look, I will tell you that back in my days of working in data centers doing the rack and stack bit I used to, you know, work Under the storage storage networking, storage array data center team, and we would go out to all of these different data centers and do like SAN installations or rack expansions or something to that effect.

But the interesting thing was the layer of expertise that would occur. So you'd have multiple layers that would be, would be layered in for this project. You'd have a team, an, an external team, a contractor if you will, that would come in and do all the, the hardware racking and stacking and cabling.[00:15:00] 

That'd be the initial pass. And then we'd come in and do the more like finer cabling and making sure that, you know, the systems are up, are up and running, and you could effectively start creating LUNs and putting out targets and whatnot and seeing your initiators attach. And then there was another layer where you'd start to do like business outcomes.

The outcomes were like, okay, now you've got all the infrastructure in place, and you're gonna build a bunch of applications, or you're gonna build something that's gonna solve a set of problems. So those three layers, interestingly enough, have collapsed into two layers now. You, you think about it from the hardware layer, where humans or even robots at this point can go in and do rack and stack, and now you've removed the need for physical labor.

We've already seen this automation happen in manufacturing, so it's happening in data centers. Let's not, you know, ignore that. And then that second [00:16:00] layer is the AI layer. The, the human with the AI layer, if you will, that goes in and says, "I need this to do X, Y, and Z to support this business or set of business outcomes."

And boom, now you have some sort of output. But the reality is that that whole collapse of three roles into now two, which is now effectively just one, if you really think about who's operating and who's making those decisions, you start to think of like a lot of the underlying specialties go away. So for example, networking.

No one really talks about networking as much anymore, despite the fact that every single one of these models is running on hardware that's running on high-performance computing networking. And no one knows this, no one understands this, but there's so much money in that space right now. And it's wild to sit there and think like the stuff that used to be really boring is the stuff is that's, that's going to pay you [00:17:00] boatloads of money.

Like literally bags of money show up because now you understand how data centers, infrastructure, compute, GPUs, all of that stuff works, and you have like the, the right mindset to build out that real estate. So someone can come in and say, "Hey, I've, I've got my my infrastructure to go deploy my AI workloads."

That's effectively what we're not seeing as much of anymore. So everyone has jumped to this mindset of, "I need to just build, build, build with AI, build this application," but then every application looks the damn same. Go to, like, some of these websites. It's like they all, like, went back to the same set of, you know when you go to a paint store and you see all those swatches? Very much I'm looking at the same set of swatches, but some model just referenced it and then went and built a website that looks...

**Matty:** and you're just looking at the different shades of

**Marino Wijay:** Exactly. That's, that's what's going on here. And so we've kind of done this to ourselves in a, in a way, but we've become [00:18:00] so reliant on taking the shortcut that taking the shortcut becomes much more preferable.

It's a preference for the business too, for people that a lot of these roles start to disappear and fade away very easily. And it's because everyone has this innate desire to be, to be quick, but at the same time to also have that instant gratification of being able to provide a result. "I provided a result.

Now I'm gonna get some sort of accolade or award or whatever it is." That is what's going on here. And so we don't care. W- we just forget about what's outside of our bubble

**Matty:** Again, it's like all the lessons of DevOps and all the things we learned are still the same. This is Nash-Pareto equilibrium stuff, which is when you give someone a metric, they work to that metric.

How many places talk about, like, "My company is making me use X amount of tokens," or whatever, so I just have my robot [00:19:00] go and do my expense reports for me so I'm doing something, right? You're like, awesome. You, you moved the needle, but was it, was it effective? And, you know, we're like, this is... I, I, again, I remember back in, when we first launched this show, so, you know, however many... I'm not gonna talk about how long ago it was. You know, Jez Humble was speaking at a, like a, the DevOps meet-up here in Chicago, and he said, "I'm gonna have a job about this forever." Now he's doing other stuff now, but you know. 'Cause he's like, "We're gonna keep telling people these same things. No one's gonna, everyone's not gonna learn these lessons overnight." what I'm wondering is to, again, to go back to these parallels, it's like when cloud was first coming up, it was like lift and shift, just get everything out of your data c- They put everything in the cloud. We're gonna put everything in the cloud. And then what we... again, a lot of us were saying this at the time, and it took people a while to see it, is that all you're doing there is moving from CapEx to OpEx.

You're, you do not save money by going to the cloud. In fact, sometimes your bill is higher, but it's more efficient, it's more effective that those extra [00:20:00] dollars you spend are not just on sitting there doing nothing some of the time. And, and then we even kind of went back, right? You start to look at some of these people, like, besides the cost part of it, some of this shit just doesn't belong in the cloud.

How many people are, got rid of data centers and they're maybe bringing them back a little bit? And I think we're already starting to see this, where, like, the, you know, the token maxing, it's like, wait a minute. You know, it was like, and that's a whole reason, way a lot of these work is like, you know. I mean, it, it's the, the late-stage capitalism play, which is I'm gonna make it cheap and easy for you, and you're gonna get into it, and then all of a sudden you're like, wait a minute. As a provider, I don't have the runway for this, and now, you know, companies are starting to maybe see these cost numbers don't add up anymore. So this whole theory of, oh, I can just throw tokens at this, and it's kinda like you're just spending the money somewhere else, right? You're like, you're either paying the person or you're paying Anthropic. But you're not saving any [00:21:00] money. Like, how many... You know, we'll, we'll see these stories about some of the budgets that some of these companies have for tokens for their developers, and it's like, a... But, but the, but we also see these costs keep going up. So I think there's, you know, again, we talk about hype cycles, you know, . But I also think there's a really interesting confirmation bias that comes into here. There's two things that, that came to mind with this. So we look at this and we live in a world where we talk to people who are working in tech. We talk to people who are working for startups or, or tech comp- companies that are...

And yes, I know every company is a tech company, et cetera, et cetera. But like, that sometimes g- and, and, and where this was really interesting, I spent last week, I was at a trade show here in Chicago called IMTS, it's like the internet, it's like a manufacturing and tooling sh- you know. And so many people, I- and I'm there for Tiger Data.

Like, we're talking about where do you store all your [00:22:00] automated sensor data and all of this, and did we talk to people that that made sense for? 100%. You know how many people would come up to the booth and they were a CNC operator in a small machine shop. You have like six people that they just make tools.

They don't record data, you know, and, and, and that also exists in, for technologists. There are plenty of shops that are the equip- people who are developers and infra people and everything who are, and no, no shade, they are machinists, CNC operator. They are not in this like, "We've got a fleet of 3,000 robot arms that do all of this stuff."

They're like, "We still are building shit," right? "And we do it the way we do." And we have to be so careful about that confirmation bias. I'll give you the last little story, then I wanna know what you think about what's real and what's, what's inflated. When I was at PagerDuty, I remember I got into an argument once with, with my boss, who was the co-founder and was talking about the idea of, There were companies, you know, who would have in development, would have a [00:23:00] production support team, and these were developers who their whole job was to fix bugs. That's all they did. They didn't work on new features, they just did this. And, and he said to me, he says, "No, no, no, I talk to people all the time.

Nobody's doing that anymore." And I said, "Alex, you talk to people who know what PagerDuty is in the first place and decided they wanna talk to you. All the people doing shit the old way are never in our conversation. We don't even, we don't even know they exist 'cause we don't talk to them." And the same thing, so we sit there and we're like, "Oh, you know, so and so on Blue Sky is talking about running Jev and TypeSafe and, and OpenRouter and blah, blah, blah, blah, blah, blah."

And you know, and you go and you're like, "Okay, well, let me go talk to, you know, my buddy who's, like, just building a billing system at, you know, I don't know, JPMorgan Chase or something or whatever." You know, not to say that those large enterprises aren't using AI, but I don't know. What are, what are you seeing?

And especially, like, you're, you... We both work for plumbing companies in a way, right? Like, we're such like

**Marino Wijay:** Quiche[00:24:00] 

**Matty:** underlying thing, so you're also not, you know. But I'm, I'm curious, like, how much of this, I don't wanna call it a bu- it's not a bubble like a bubble that bursts, but a bubble like a self-contained ecosystem that there's so much more to.

Maybe. I don't know

**Marino Wijay:** So When you look at the industry, you, you need a-- you first need a problem, right? You need a problem and then a way to solve that problem, and sometimes you're gonna have, like, five different ways to solve that problem. Those five different ways end up being five different companies. We see this time and time again.

This is no, no s- no different story. But I, I also-- Like, I remember one time, and I, I say this all because there was some context about meeting with, like, a VC a long time ago and what their strategy was around why we see the things that we see in five companies doing service mesh or something. So this VC went on to say, like, "Look, when you go to gamble, you don't put everything in [00:25:00] one basket," because, yes, it could be very risky, but at the same time, highly rewarding.

But at the same time, sometimes you like to... you hedge your bets a little bit, right? This is very much the strategy of a lot of VCs. They hedge their bets, and then they'll take their money and invest in two competing companies because one of them is gonna, you know, win the other out somehow or another.

And so we all just end up going after, going after business, competing for business, trying to sell it, sell something, say that we solve this problem better than that person, and okay, great, we, we won the deal, and we go back to the drawing board, and we do this all over again time and time again. And w-what's really interesting is you start to get into this repetition, right?

So everyone's doing this. Every-- There's-- For all the problems that we have in this, this universe, tech or non-tech, there is a company out there to solve for this. [00:26:00] But you get to a point where we start inventing problems that don't exist. We're very much there. We, we've seen this. This is a very common theme throughout the decades.

So we're here again inventing a problem that doesn't exist. So we're optimizing our models. We're growing them so that they have much more parameters, resulting in us needing more hardware, more memory, more capacity for storage, better networking, better CPUs, better data centers. We need new data centers.

Okay, great. W-where do we place these data centers? Okay. Let's let's put it right here because we're gonna be able to access the mot-most amount of fresh water and our cooling is going to be not so expensive. HVAC's gonna be great. Electricity's gonna be fantastic. We're getting a good deal with the power company.

We're gonna be on the grid. But at the, at the detriment of several of those communities [00:27:00] that surround it. Okay, great. So we've invented a whole bunch of non-existent problems to get to a point of building data, data centers, and we're doing this thing all over again. Now we're inventing jobs, creating Creating jobs for the economy.

We're doing this thing for everyone, right? We're, we're tech companies. We're here to solve problems. But the reality is, what have we done? We've effectively just wasted a significant amount of resources. So I say that all to say all of these companies are inventing these things for problems that don't exist yet, but we're now at the stage of trying to find buyers.

There are buyers out there for problems that don't exist. People will buy this sh- buy this shit and never use it. And it took me so long, probably about five years ago was when I realized this, that somehow at some point in time when you get to the end of the year, you have to make sure accounting is happy.

So at the [00:28:00] end of the day, all of what we're doing is just a large accounting hack. Tech has been the largest accounting hack ever. I know I'm tangenting off into something that is a little bit nefarious here, but the reality is when you look at the US tax treaties for the way companies can run in the US, the same with Canada, rest of the world has similar tax laws and treaties and whatnot The, the favoritism goes to the companies that hire tax-- sorry, tech people, people that work in tech that have a specialty, that build products and software and whatnot.

And when you start to think about all of how this all works, tech was never created to solve problems for the human world. It was created because someone realized that, "Hey, if I move this expense over here, I get to keep more money in my pocket." And that's all it comes down to. So AI is no different. We see the circle jerk of OpenAI getting money from NVIDIA, [00:29:00] which then they can go around and spend elsewhere or back with NVIDIA, and then you see somehow Oracle enters the conversation.

We're all in this endless cycle of tax evasion, tax accounting, tax hacks so that, you know, obviously the richer get rich, more rich while the rest of us, you know, we're, we're left with scraps. But I say that all to say where if you can, if you can just set that aside for one second and think about the opportunities that are in front of you, there are a lot of ways to get involved, to find a, a niche, if you will, to just make some really good money.

And you just have to sit there and look closely as to understand what are the problems that sit there that no one wants to address because it's not flashy, it's not cool, it's boring, no one cares about it. The unsexiness of it will drive people away to not have... That's actually not true at all. I've seen like so many people are-- they're like [00:30:00] silent millionaires because they did the boring thing, the ultra, ultra boring thing.

And so that's where you have to start thinking. Like you have to start looking in between the noise and find those areas where you can just jump in and say, "Okay, well, I'm not gonna be able to get my entry into tech, but I could be tech adjacent or I could do something that solves for tech-related problems

**Matty:** I think that's, that's really key. And just to kind of bring us to, as, as we kind of start to think about wrapping up, one last thing I thought I'd love to get your take on 'cause we, one of the things we've talked about is there's so much to keep up with. So how do you like to, what, what maybe if there- I don't know if you have any tips or just sort of your own way of approaching up with stuff when you're trying to learn new things, you know, kind of what, what's your, what's your way of dealing with this fragmented fire hose of what's, what's out there?[00:31:00] 

**Marino Wijay:** So, you know, social media's always been fantastic. Twitter's been great for people to come in and say, "I'm so excited about X, Y, and Z." And then you will have the other e- end of that spectrum that says, "This thing is complete horseshit." Fair, complete fair, and I love that because you get the polarity that comes into what tech actually is.

You're never gonna have everyone come in and say, "We love this stuff. Kubernetes is magical, and it's the best thing in the whole world." You have skeptics. You have people that realize that this is not the right tool for the job. So that's great. It's a great place, but then you also start to miss out on some of the reality, and sometimes some people won't be real.

They won't tell you the truth online because, you know, maybe they worry about being found out by their, you know, their, the company they work for and getting fired, et cetera, so they'll go anonymous. And Reddit's been a great place. I know it's still full of trash and spam and bots and whatnot, but there's still some great information for [00:32:00] staying updated.

But at the same time, like, you know, if you, if you lock into a few people, like a few people that are credible, they don't trade their credibility and their fame for, for sponsorships or money or anything of that nature. They maintain that credibility all the way throughout, and that's, like, a consistent thing.

Those are the people you probably wanna stay attached to and follow because they're likely going to give you the most realistic view. There's like... So do you know-- You know Keith Townsend, right? Yeah. Very pragmatic, very down-to-earth individual that just tries things out. He will get his hands dirty to tell you how it really is and why you should or shouldn't do it.

And when you start to follow people like that, your, your view of the industry starts to become a lot more clear. I wouldn't say it's not gonna be... it's not gonna be cloudy at all, but it's clear. You have more visibility into what's actually happening in the space and you don't [00:33:00] have to go jump into everything yourself.

Let other people do it

**Matty:** I think that's great, and I think when you were, were talking about how, you know, you sort of see these extremes of like, "Oh, this is all amazing," or, "This is all trash," or whatever, and I think most people fall somewhere pragmat- like individually, and I think that's the, the thing, and there's a, there's a good space for that too.

I, I, I won't take all the credit. I remember when I was looking for something new when I, when I got laid off from my last job, and now this is, like, about two years ago, and I was trying to figure out what's next for me, and I remember having a conversation with with Emily Freeman about trying to figure out what I wanted to do, and this was, again, it was two years ago, so this is, like, in some ways eons ago in terms of the AI.

But, but she was kinda like, "There's probably a space for just being very pragmatic about this," because you, you run into... You know, we, we know folks, and no, no shade, I know people who are like, "I will not touch a single thing that uses AI. I am completely against it in every way, shape, and form." And of course, there's, you know.

Or it's like, [00:34:00] "Robot all the things," and, you know, everybody, "The only way you should communicate is through the agent," and whatever. And it's like, okay, what's real? What's real is probably somewhere in between, and that's the thing. If you can find those voices, like Marina was talking about, which are her speaking in that way, which is like, "This is what's practical. the Here's the, heaven forbid, nuance to this," you know, thing. And then just sorta get your, you know, where you can, get your, your hands on it. I'm gonna put some links in the show notes as well. We've, we've done episodes in the past your mileage may vary on how, how much you'll get from them years later, but that are about how to learn and learning.

We've had people like Shelby Spees and Ali Spittel and Sacha Rosenbaum was on a very... One of our very early episodes was called Managing Your Mental Stack, and I'm gonna make myself a... Actually, I'm gonna go back and listen to that episode tonight 'cause I'm really curious to see, but the same thing, everything old is, is new again.

So, 

**Marino Wijay:** very true

**Matty:** you know, if you go to [00:35:00] arresteddevops.com/wtfisgoingon, that will be this episode's show notes, including those links and, and, and, and everything. If you go to arresteddevops.com/itunes, you can leave us a review in the Apple Podcast store, which can help other people find the show. Maybe it helps the coding agents find the show.

I don't know. We're on all sorts of other places where podcasts can be found. If you go to arresteddevops.com/subscribe, there's a full list of that on... I just threw that in there 'cause I just built that page. Well, I actually found that page had existed. I forgot I made it, and it was so old. It was this old WordPress of everything was wrong, so I fixed that the other day, so I'm very proud of that, so go check it out. Marina, this has been awesome, and as, as always, we have simply scratched the surface, so you will definitely be back on the show again, and we'll, we'll vent and rant and all that great stuff.

**Marino Wijay:** Matty, I appreciate you having me on. It's, it's been a pleasure. And to the audience, folks listening in, thank you so much for your time, and hope you all [00:36:00] have a, a wonderful day

**Matty:** This has been Arrested DevOps, and remember, there is always DevOps

**Marino Wijay:** In the banana stand

