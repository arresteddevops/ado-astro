**Cat:** [00:00:00] I mean, maybe they saw it, but maybe they were like, ew, gross.

**Jessica:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Jessica Kerr, and we have a great show for you today, but first, A word from our sponsors. This episode is sponsored by CircleCI. Designed for modern software teams, CircleCI's continuous integration and delivery platform helps developers push code with confidence. Trusted by thousands of companies, from 4-person startups to Fortune 500 businesses, CircleCI helps teams take their software from idea to delivery quickly, safely, and at scale. Visit arresteddevops.com/circleci to learn why high-performing DevOps teams use CircleCI to automate and accelerate their CI/CD pipelines.

[00:01:07] This episode is brought to you by cloud-native consultancy Container Solutions. We bring culture, strategy, and technology together to help you get your cloud-native transformation right. To find out more, visit arrestedevops.com/containersolutions. This episode is brought to you by MacStadium, leading provider of cloud solutions built on Apple Mac hardware. As more teams are working from home, having your Mac build infrastructure in the cloud can make it easy for your app devs to work more efficiently. No need to have someone in the office keeping an eye on the Macs. Let MacStadium do it for you. And if you need a fast, scalable, modern way to run Mac virtual machines, MacStadium's virtualization platform, Orca, is purpose-built for running iOS and macOS CI. Orca takes a standard macOS VM, puts it inside a Docker container, and then uses Kubernetes to orchestrate everything, all on Mac hardware. Orca is easy to integrate into your current workflow with plugins for all the popular CI tools, Like Jenkins, GitHub, GitLab, and Buildkite. If you're building apps for the Apple ecosystem, learn more about MacStadium at macstadium.com/arresteddevops. From that link, you can also get access to a free 2-hour sandbox to give Orca a try.

[00:02:31] Joining me today is Kat Swettell, known internationally for her penguin power stance and for standing on the edge of now. Kat, would you please introduce yourself and tell people what you mean by the edge of now?

**Cat:** Yes, I'm Kat Swettell. I'm floating through life without a purpose, uh, but I do have an interest, and it is I like working with things that are on the edge of now. That's how I've described it. So things that either shouldn't exist anymore or shouldn't exist yet. That's pretty much what I'm into.

**Jessica:** Nice. I remember you used to work at Ticketmaster on this mainframe system that shouldn't exist anymore.

**Cat:** Yeah. Yeah, it was a custom VAX operating system running in custom VAX emulation. You know, kind of hipster retro.

**Jessica:** [00:03:35] The software was so useful. Yet the hardware decayed, so you had to like rebuild the hardware underneath it.

**Cat:** Yeah, it's basically it.

**Jessica:** Amazing. Uh, so what's something you've done that shouldn't exist yet?

**Cat:** Uh, I'm super ashamed to say that in the early days of cryptocurrency, I kind of thought that people would use it really differently. Like, I like the idea of some transaction protocol that would transcend borders. So I did some projects with that, and then I realized, oh, this is terrible. People are just taking the highly extractive paradigms that exist in the physical world, and they're just programmatically enacting them in a digital world. I don't love that. Yeah, I still don't love that.

**Jessica:** So you saw a future in cryptocurrency that that other people didn't see in it and they just kept on doing the same thing but digitally?

**Cat:** [00:04:41] I mean, maybe they saw it, but maybe they were like, ew, gross. Uh, seems like they're, they're like really into just perpetuating existing power structures in a radically different paradigm.

**Jessica:** That does seem to happen.

**Cat:** Yeah, it's a happy note.

**Jessica:** It is, it is what happens by default. I mean, systems reproduce themselves. That's how they continue to exist, right? And that can be a good thing. Sometimes a lot of our work is reproducing existing systems, like in DevOps.

**Cat:** Excellent segue, Jess. Wow.

**Jessica:** Because in DevOps, like, it used to be the devs make the feature work once somewhere, and then ops keeps it working. It keeps that capability active. And now we put that whole circle in the same team.

**Cat:** [00:05:47] Yeah. I have this whole thing that I've been saying for years, which is not catching on. I just don't know why. Maybe I need marketing help, but I keep saying that. More penguins. Yeah. DevOps is a matriarchy, which I don't totally believe, obviously, but I do believe that it is inherently feminist because it puts the emphasis on that kind of maintenance and reproductive work rather than, like, the producing working software, right? We had, like, the agile movement, those yes, deliver working software, and then no mention at all of the fact that you have to, like, continue to care for these systems over time, and they grow and change, and you grow and change, and there needs to be someone caring for that, and it should probably be the effort of a community rather than, like, some sad person in a basement.

**Jessica:** [00:06:49] Eric Evans uses the metaphor of software as gardening. You have to care for it through seasons. And in the beginning, it looks so orderly when you've just put the little plants all in rows. And then over the summer, they grow and grow, and it gets super messy, and you can't quite tell what's what. But that's exactly when it's useful, because that's when it's getting to harvest.

**Cat:** Yep, that's exactly it. It takes someone— how did we end up with these systems that are really valuable? Well, it was kind of this co-creation over time, and it's not mess— it's not orderly. It is messy, and it requires attention, you know, and being at peace with things growing and changing, which I think that is like a reproductive labor rather than a purely productive, right?

**Jessica:** Right, right. So reproductive, taking the present system and continuing it into the future, um, in that, like, and making it more healthy over time instead of less. Yeah, just what you're trying— if you just cram in the features. Uh, so what kind of, what kind of things do you see on healthy teams that are, that are doing this, this reproductive, this healthy, continuing to keep the system working labor?

**Cat:** [00:08:17] Oh, that's a good question. I mean, obviously having awareness of what the systems are doing in production is extremely important, right? Rather than making assumptions about how things should be, and we really can't know until things are in production. Production regardless of how great your non-production environments are. Being consistently mindful of that, right? There is the pattern of the development team, the DevOps team, and the ops team or something like that, right? Yeah. Oh, yeah.

**Jessica:** Sometimes when we say DevOps now, we mean deployment automation.

**Cat:** Yes.

**Jessica:** And that's, that's a piece of it. Yeah.

**Cat:** Or, uh, yeah, I mean, I've seen those DevOps teams do all sorts of things, even not just deployment automation, but yeah, typically going off of some sort of automation, whether for the dev or for the ops, but then we don't, um, you know, maintain an awareness of what's happening across that value stream, right? It's still just— now instead of throwing it over the wall, you're like throwing it to some person standing on top of the wall and they like catch it and then throw it to the DevOps team.

**Jessica:** [00:09:50] Yeah, I mean, that's an improvement over hurling it over the wall. At least the person throwing it down can see where it's going.

**Cat:** Yeah, you can lovingly help it descend. I don't know. Give it a parachute.

**Jessica:** Um, and so you talked about that awareness of what's going on in production. Um, because it's not enough really for you to get that feature in production and know that it works in production, because who freaking cares whether it's work— whether it works if no one's using it?

**Cat:** If no one's using it, if it, you know, does it continue working in the way that you expect, right? Because we know that that is just a fact about our systems, that they have this element of drift, right? Our technology landscapes are so complex now that the interactions both between systems inside of that ecosystem and also with the people outside, right, the external market or customers or whatever the case may be, that whole set of interactions causes— and the way that, that we tend for those things causes drift over time. And it's really difficult to be aware of that, create any sort of awareness around that.

**Jessica:** [00:11:24] So to make a concrete example of all this, maybe you're working on a feed that displays recommendations to people visiting your website, and maybe it totally worked when you pushed it out. It does display the recommendations you expected, and even then, does that have the effect that you wanted? Does it increase sales? And maybe it did then, but does it still? Or, or have I purchased one dining room table and I'm not going to purchase another? Um, does it still meet people's expectations? Is it, is it working with, um, maybe, maybe our site has added tablecloths, um, but the, the recommendations haven't been updated to maybe display those instead of more dining room tables to me?

**Cat:** Um, yeah. Yeah, so yeah, I mean, who was making it—

**Jessica:** making sure it still has the effect that we wanted it to have?

**Cat:** Yeah, the effect in the market or even between systems, right?

**Jessica:** [00:12:26] Like, uh, yeah, because maybe now there's so many items that the recommendation has slowed down the page considerably, right? And is having that negative effect.

**Cat:** Yeah, or some other service is like, oh, I can grab this recommendation from here and use this for some other thing, and then—

**Jessica:** oh, right.

**Cat:** We've all seen that, right? And then you make some change to the recommendation. You have 6 other angry teams on your door. Hey, I was grabbing that recommendation and using it for my own sneaky stuff.

**Jessica:** Yeah, once you publish an API, you don't know who's using it. Suddenly you lose the ability to change it.

**Cat:** You probably don't.

**Jessica:** You can try. Yeah, yeah, but you don't know what you're going to break because you don't know what connections have grown in the system since you first made it. Oh, oh, and what does, what does Jay Bloom call it, uh, when you create a feature like these recommendations maybe for one purpose and someone starts using them for something else? Like, I just needed to list all the dining room tables. Your recommendations used to do that perfectly. What are these tablecloths for? Um, uh, there's a, there's a name for when something evolves for one reason, but then it stays because it starts serving a different purpose.

**Cat:** [00:13:48] I don't know. Gabe's bald. Gabe's beard is just full of secrets. I haven't obtained all of them yet.

**Jessica:** He, he speaks them, but they're still secrets. Acceptation. That is it. Um, it's like adaptation, except recognizing that part of the change is not internal. It's, it's, it's in the rest of the system. And I found that like when somebody has like really bad software, like say it's internal software that you don't have a choice to use, that is usually bad. Um, but the rest of the system adapts and suddenly all over the internal SharePoint people have like Word documents on how to get around the internal system and how to make it work as intended and what to select in each cryptic dropdown. Um, and then as soon as you improve that internal system and make it look nicer, nobody knows how to use it and suddenly everything is broken.

**Cat:** [00:14:49] Yeah, certainly. Like with the legacy systems that I have interacted with and lovingly cared for, there's tons of stuff like that, right? Like, well, we did this one thing for this one customer one time. We lost them 20 years ago, but now that thing is used by all of this other stuff, right? Okay, I guess we have to keep it.

**Jessica:** It's ugly, but it's working and has value. Okay, so to us anyway, to the matriarchal DevOpsers, this is part of DevOps because part of ops is that the rest of the value stream. Is remembering why we're doing this and, and continuing to fulfill those purposes that we didn't even anticipate having.

**Cat:** Yeah, being open to that, being, you know, appreciative, like, wow, that's people out there finding a way to do what needs to be done. That's cool. Should we support them in this way or this other way? That's super useful. You know, that's a great thing. That's also what helped— that is adaptive capacity, right? Because we have people that are are open to different things being true or using what we have in different ways, and that's awesome. So don't want to be like, hey, you're doing it wrong, you're using this wrong, right? But we could see that usage pattern and be like, hey, there's probably some other way to do this, but that insight is really valuable. Or we just say no, let's keep trucking with this 30-year-old Pascal little doodad.

**Jessica:** [00:16:33] If it works, work really hard to keep it working. You mentioned we might notice that usage pattern. Then that's that awareness of what's happening in production, right? That's— yeah, I call that pattern noticing the meta-messages from Gregory Bateson, noticing what the— not just the content of the messages, which is a request for recommendations given a dining room table, it's the meta message of what does it mean that that message was sent at all? Who sent it? When did they send it? How frequently do they send it? Um, can we tell what they're doing with it? Is this play? Is this a fight? Is this— yeah, in real life it's always, do you like me? Are we good? There's always that undercurrent in everything we say to each other.

**Cat:** Yeah, I think there are, you know, again, especially in the legacy systems that I have known and loved, there is this thing where people will report a bug, right? But it's really more like a stress fracture from something changing elsewhere in the ecosystem. You know, like people are now using this or that differently, or our customers are now interacting with our system differently and it's causing strain on whatever that core was.

**Jessica:** [00:18:04] Oh, right. And then we're like, my system is operating as specified. Why am I in this conference call?

**Cat:** Yeah, the answer is everyone. But in that situation, Everyone is operating as specified and still not working, right? And so that's when it becomes necessary to not have so much of that transactional interaction between teams or between players in that ecosystem. It has to be something more generative.

**Jessica:** Yes, DevOps is about widening your job and don't stop there. Care about the whole system. Speaking of care, you gave a talk not long ago, Kat, that my Twitters were just on fire about, and you said something about the ethics of care versus fair.

**Cat:** Yeah. That's like a fun way to say it. And I think that is a huge problem that we have in DevOps land, but I'll get to that in just a second. It originally started where I pointed out the difference, which is common in feminist circles, pointing out the difference between an ethic of choice, which especially us in the Western world, we love choice, right? Like everyone should be free to make whatever choices they want, right? And then there's— and that's what our system of morality is built around, right? That we have to make each individual person make good choices. If something bad happens to you, it's because you made bad choices, right? And I feel like that's really aligned with like, we gotta find the root cause because we gotta know who made the bad choice here, right? Um, yeah. And then, but as an alternative, there is an ethic of care which just says like, uh, the, the highest place that you can be in an ethic of care when you're like fully morally developed in this, uh, paradigm that means that you can kind of see how you are part of a system and how doing good for the system is doing good for you, and doing good for you is aligned with doing good for the system. And I find that to be really relevant in the work that we do, right? We have to make those trade-offs all the time, but If we can just zoom out a little bit and we see that we as developers or DevOpsers or operators or architects or whatever the case may be, we are part of this system, right? And the system includes, like, the code and the infrastructure, and it includes the users, and it includes other people in our business. And so for me right now, like, for me to be productive or for me to make my bonus or for me to do this or that, I might be like, I should—

**Jessica:** [00:21:12] for me to make the right choice, the professional choice.

**Cat:** Yeah. Yeah. And we— that's when you get like, well, there should be rules. And that's how we know if we're making the right choice or not. And things like that, you know, kind of this codification of all those things. Uh, but then if we turn it—

**Jessica:** codify it, it would be software already. Yeah, we are in the system for a reason, and it's because, yeah, that context is always changing. Making a choice into like this atomic transactional thing is— it's not real. We try to create that illusion, but no. Okay, in the CPU, that, like, if condition is going to jump or not jump, that is a binary choice. But in the actions that we take, for instance, even if it's making a change to the software and deploying it, you don't stop there. You look at what happens, you come back, and you say, then, Okay, is that still the right choice? Is that still what we want to continue? You deal with the consequences that you didn't expect. Oh no, it slowed the website down. Let's work on that. And you, you, you deal with a lack of consequences that you did. Oh, maybe, maybe we should, uh, maybe our recommendations aren't good enough. Let's try harder or try— no, not harder. Let's try something different. Uh, it's a loop.

**Cat:** [00:22:47] Yeah, I mean, we, we can frame everything as choice, but you're also going to end up dealing with the consequences of those choices, right? And you can never— choice assumes that there's this opportunity to be perfectly informed and make the right choice, which we know is impossible in these systems, right? I think clever code is a great example of this, right? So if you're like some fancy person and you implement something in a really clever way. Like, that was probably great for you to get it off of your plate.

**Jessica:** Really good. Yeah.

**Cat:** Yes, you probably feel awesome about yourself, but now, like, do you want to continue to live in this code with your colleagues, right? You're making things inhospitable.

**Jessica:** Is future you going to find it clever? Yeah, much less other people.

**Cat:** Yeah. And then the care versus fair thing. I feel like we have this obsession with fair as technologists, right? Like, well, we, we want everything to be fair. We want it to be a meritocracy. We want everyone to be putting in equal effort, right? Like instead of saying, hey, we, we should be focused on our power to achieve certain things or what power we have with each other, we're like obsessed with this idea of everything being fair. Well, it wouldn't be fair if this person got to take time off for this or that and I didn't, or it wouldn't be fair if we just have people sitting around waiting for something to happen, also known as slack in our system, which is really important.

**Jessica:** [00:24:37] If we were just looking at everything that happened in production, instead of the one specific metric that we're supposed to hit. Yeah, but if you care about the whole system, if it's not about you, if it really is about the team and the company and the industry and everyone who interacts with your software, then yeah, you can't boil it down to one number. Your individual productivity is often in conflict with the interests of the wider system.

**Cat:** Yeah, anyone, any one piece's productivity could and probably is at conflict at different times with the outcomes that we're striving for in the entire system. And it's just hilarious to me. Yeah, it's hilarious to me being a woman. I'm like, the only people that are obsessed with things being fair are the people for whom things have always been fair, you know, the existing power structure. And like, what if instead we just said, hey, like, this person is tired and they need a break and they can't be on the on-call rotation next? You know, those kinds of things.

**Jessica:** [00:25:57] Instead of making things fair, we could make things better.

**Cat:** Yeah, yeah. We could just care about each other. We could care about the system. We could care about our power to achieve certain outcomes rather than, rather than the freedom to make bad choices.

**Jessica:** I make any choice.

**Cat:** Yeah, just if everyone is trying 100%, right, and we're all like, yeah, we're working around the clock and we eat nothing but pizza and whatever, right? You still don't, you don't achieve the outcome. Like, does it? But if you know, so-and-so's putting in 5% and it's the magic 5% and it's great and together we achieve this awesome thing, then does it really matter if this or that is fair?

**Jessica:** Often the person who's holding the team together, who is keeping an eye on production, who's noticing things before they turn into problems and therefore not getting credit for fixing them, that person is not Completing the most tickets.

**Cat:** [00:27:04] So, but if we, if we valued knowledge that everyone needs. Yeah. If we valued caring for the systems and caring for each other rather than everything being fair and we have some magic way that we measure productivity and blah, blah, blah, blah, blah. Right. But we can just say, hey, are we, what's Check. Are we caring for each other? Are we caring for these systems? Are we being mindful? Rad. Then let's keep going. You know? Yeah. Like, I always think of this thing. I can't remember where I read it, but rational man first had to be a rational baby. But like, I feel like it's the same thing, right? Like, there's all of this nurturing that we have to do before the value of something is like realized, but we just kind of erase We saw that and we're like, yes. And when we have this fully formed, perfect thing that interacts with its surroundings in a perfect way—

**Jessica:** [00:28:06] If we just hired more senior developers.

**Cat:** That's the one that kills me. I'm like, yeah, you hire more senior developers and they, they will never fully articulate what's in their head. Right. Because they're like, well, that person's a senior. I'm a senior. Surely we have the same experience of this one weird thing or whatever, but you plop a junior onto that team. Right. I really like career switchers too. Like someone who— career switchers coming from a different discipline.

**Jessica:** Got it.

**Cat:** Yeah. Um, you know, someone who was an operator and now they're, they're sitting on a dev team or like properly DevOps team or something like that, or in a completely different discipline, someone in marketing.

**Jessica:** Oh, my favorite, my favorite developers used to be librarians.

**Cat:** Oh God. They're so good. Aren't they?

**Jessica:** Yeah. Yeah. Because they care about the history and they like track where things are and where they came from.

**Cat:** [00:29:07] But you put someone, right, that is, that no senior developer would assume that that person shares the same context. Right. And they automatically have to explain, well, this is what's going on in my head. Right. Or if you have a team—

**Jessica:** articulation, that in itself is valuable.

**Cat:** Yeah, it forces us to externalize our assumptions about the system, you know, and I see so frequently a bunch of senior developers, one less senior person, and they start to ask questions. And suddenly, you become aware of this assumption that's completely false. Or someone says, hey, you know what, the infrastructure doesn't look like that, or we can't do that, or you know, that's not data that's available or whatever.

**Jessica:** Things get out in the open. I like, um, mob programming, which is now called ensemble working. Thank you, Emily Bosch, uh, for that, because you have to voice all the decisions because the person typing is not the person deciding what to type and what to do. So everything comes out in words. And that's, I mean, that's hard. There's effort in putting words around it.

**Cat:** [00:30:23] So much effort. Yeah. I mean, it takes way more brainpower, right? Because you, you've now made all of these things conspicuous, these things that you were just taking for granted before.

**Jessica:** Right. But then you notice things about them and put— putting stuff in code also forces us to make stuff very concrete. But putting it in words that we can communicate to other people. That's why naming things is hard in programming. Because we have to find the significance of something, we have to think harder about it. But when you put that knowledge out there, suddenly the whole team has the knowledge, and this is knowledge work after all. Suddenly we can all work better.

**Cat:** I think, I don't know, I just feel like that is super important. That's investing in the system, that's nurturing the system of knowledge within your team. You know, and not productive, very general. By making all those things conspicuous, it creates a place where new things can emerge, new valuable things.

**Jessica:** [00:31:30] And when we, when, when we talk about this reproductive work, we don't mean— I mean, we do mean keeping the system working as is, but our team is never exactly the same. We're talking about reproducing our team in a way that tomorrow we come back to work feeling more psychologically safe, feel knowing more and able to do more because the next version of our team is always different. Let's have it not be worse.

**Cat:** Yeah, growing and maturing and changing and all of those things.

**Jessica:** And adapting to the, the system around us, to the latest company reorg, but also how people are using our software today.

**Cat:** Yeah, or the latest pandemic, whatever.

**Jessica:** Kat, what else do you have to say about DevOps?

**Cat:** Like I said, I'm for it.

**Jessica:** But is it for you?

**Cat:** I don't know, it's been working out pretty well for me so far.

**Jessica:** [00:32:31] Is there one thing you'd particularly like listeners to take away from this conversation?

**Cat:** I guess my one thing that I've been saying too much, but I don't think I can stop saying it. If you are looking, right, we're always looking, how could we improve this? Or this thing is broken, what should replace it? Right. So we're, we're looking for that all the time. I think that what I really wish is that we were going to people that are not served currently by that system, right? And asking them, what should this be? Or what do you need? Rather than asking the people who are currently very well served by the system or the ones that were invested in the creation of the system, like, hey, how do you think this should be different? Or is this valid anymore? So I just really wish people were going out there and instead of trying to like expand the current system to work for everyone, ask like—

**Jessica:** [00:33:48] So instead of doing more, doing faster, doing the same thing but bigger, Yeah, we went out and looked at what's not being done at all, the connections that are missed.

**Cat:** Yeah, or what kind of stories are really absent, right? Where are we not making space for something? Uh, like my favorite thing right now is all of the people saying, oh, whatever, Facebook's AI is broken, they're gonna fix it with more AI. Is that how that works? Interesting. And I feel like we, we do that so much, right? We're like, oh, this automation is broken. We're going to fix it with more automation.

**Jessica:** Like better automation.

**Cat:** That's it. That is an approach. Yep. Sometimes it's okay to just like burn it all in a fire. And figure out what can exist now and should exist now.

**Jessica:** [00:34:58] Yeah, Alan Kay would say figure out what is actually needed, which is not an incremental improvement over what we already have.

**Cat:** Yeah, and if you ask people that are served by the current system, they're going to suggest to you an incremental improvement. They're not going to suggest something transformative.

**Jessica:** Okay, so it's the very people who are not already your customers, your best customers, who will have insight into the completely new things.

**Cat:** Yeah, or your least productive developer, or your most resistant operator, or your whatever the case may be. The person who doesn't fit in the current system is the one who has new ideas for the next system that would They have the insight about how the current system is not right, how it doesn't fit with the world that they're experiencing, right? And so what if instead of saying like, well, how do we make you fit in this? What if we said that person's experience of the world is totally valid and we need to do a better job of listening to that to understand what in our current system doesn't work with the way that they experience the world? Yeah.

**Jessica:** [00:36:17] Beyond awareness of what's happening in production is awareness of what's not happening. And it's the people, yeah, it's the least productive developer, the frustrated user who has that for you.

**Cat:** Yeah, but we don't do it really, we don't invest a lot in validating that experience and developing the tools to, like, tell those kinds of stories.

**Jessica:** It's hard. It's a lot easier to be like, I'm good at finance, let's do finance even more, this time with blockchain.

**Cat:** Yeah, yeah, just capitalism harder, something different.

**Jessica:** Okay, so, um, happy birthday, listeners. You got to take DevOps way farther than it usually goes today. Cat, thank you so much for joining us. People who want the show notes, and we'll put in some references to some of the things that we talked about, can go to arresteddevops.com/cat. That's an easy one, C-A-T. And remember, when you start to lose hope, there's always DevOps in the banana stand.
