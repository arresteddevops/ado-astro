**Andrew:** [00:00:00] There's always DevOps in the banana pants.

**Matty:** There is. It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matt Stratton.

**Jessica:** And I'm Jessica Kerr.

**Matty:** We've got an interesting show for you today, and I hope that you enjoy it. But before you enjoy it, you're going to have to listen to some messages from our sponsors.

**Jessica:** Doo doo doo.

**Matty:** This episode is sponsored by CircleCI. Designed for modern software teams, CircleCI's continuous integration and delivery platform helps developers push code with confidence. Trusted by thousands of companies, from 4-person startups to Fortune 500 businesses, CircleCI helps teams take their software from idea to delivery quickly, safely, and at scale. Visit arresteddevops.com/circleci to learn why high-performing DevOps teams use CircleCI to automate and accelerate their CI/CD pipelines. If you are like most of your friends in DevOps, you probably prefer using open-source solutions for observability. But you also wish you didn't have to sacrifice scalability, performance, and simplicity. With Logz.io, you get the best of both worlds for your cloud environment. You can use the tools you love at the scale you need. Logz.io is a fully managed service that offers complete cloud observability for engineers on one unified platform. Log management and cloud SIEM based on ELK and infrastructure monitoring based on Grafana. To give it a try for yourself, sign up for a free 14-day trial today at logz.io/ado. And for your chance to win a free Logz.io t-shirt.

[00:01:59] The worst thing about the Arrested DevOps podcast is when it ends. You're left wondering what to do next. What are you going to listen to on your commute home? How do you occupy your time when walking the dog? What are you going to listen to during the quarterly all-hands meeting? But fear not, dear listener, there is a solution. You need to subscribe to Software Defined Talk right now. It's a weekly podcast that recaps all the news in cloud computing, DevOps, and enterprise software. The hosts, Cote, Matt Ray, and Brandon Wichard, will keep you up to date on all things cloud while offering tips on how to optimize your Costco haul and how to PowerPoint. It's a fun, free-flowing conversation that will keep you entertained and informed. What are you waiting for? Subscribe to the podcast today by visiting softwaredefinedtalk.com or by searching for Software Defined Talk in your favorite podcast app. Joining Jessica and I today is—

**Jessica:** Jessica and me.

**Matty:** Jessica and me. Joining Jessica and me today—

**Andrew:** [00:03:01] Language is usage.

**Matty:** Language is usage— is noted DevOps personality. That's what I'm going to call you right now, Andrew Clay Shafer. And we're going to be talking about transformation. Because there's a lot of stuff in flux happening right now. I don't know if you know that. I don't know if you poked your head out, but things are a-changin', and it seemed like a really good time to talk about what transformation is all about, how we can do it better, some things to think about, and we're just going to see where we go. So, Andrew, thanks for joining us today.

**Andrew:** Well, thanks for having me.

**Jessica:** Yeah, so Andrew, how do you really feel about Agile transformation?

**Andrew:** Well, you heard the off-air version.

**Matty:** Yeah, for those of you that— we had a 45-minute-long green room conversation before we started recording. So that's the super private show that unfortunately nobody got to hear. But we will try to reconstruct it. We will not reconstruct it because you can't manufacture a moment.

**Andrew:** [00:04:04] I think that there's a lot of things going on, right? So obviously, there's this There's this real life thing that's changing what we do, how we do things. And then there's, you know, transformation as a word is, is vague and ill-defined in most cases. But I think that the thing you can't— I think transformation, like other words, you know, agile, whatever, has this problem that it is, is common enough in usage that when people say it or hear it, they think they know what it means, but it doesn't.

**Jessica:** Oh gosh, and everyone thinks it means a different thing too.

**Andrew:** Precisely, and everyone has a different agenda and everyone has a different thing they're trying to make happen.

**Jessica:** Yeah, language is usage. Usage is broad with transformation. Indeed.

**Matty:** So for purposes of this, do we want to put some boundaries around what we're talking about when we think about the big bugbear word transformation?

**Andrew:** [00:05:10] So I think just to tie it back to the theme of this podcast, that there is a big word, big T transformation that is being forced on the system, you know, with the circumstances of corona and the rest of it, which is interesting in its own right. But for the sake of the conversation and what I mostly am focused on, it's kind of like, how do you get these, these social technical systems of humans and computers to do things in a way that helps? I'm selfish, I like humans. So it helps the humans have better experiences and better performances. Utilizing that together.

**Jessica:** Oh yeah, because now suddenly when we're all working from home during a pandemic, as opposed to voluntarily working remotely, we're a lot more dependent for the social interactions on the technical aspects of the system.

**Andrew:** [00:06:16] There's a lot of organizations that, you know, by circumstance are being forced to experience a digital reality in their normal day-to-day workflow than they probably wanted to, right? And I don't know how that will actually manifest itself as things go back to whatever the new normal is, but it's definitely forcing the question. And lots of these— I mean, I think it's worth stating you know, some other things really quick. That is, when you look at what's happening in the market and what people have been attempting to do or will attempt to do, digital transformation as like a tagline is not novel. It's been around for a while. People have been trying to do this. And then if you go look, you know, it doesn't take that much naive Google searching to find 2 facts. One, there's a lot of investment. So there's one that I dug up. It was an IDC person that they were projecting— this is before the pandemic— they were projecting over $7 trillion from 2020 to 2023 would be invested in digital transformation initiatives. That's a lot of investment. And then the second thing that will become obvious if you do this kind of naive Google search is that most people will consider the vast majority of their digital transformation initiatives failures.

**Jessica:** [00:07:56] Like officially, they officially consider them failures or under the table consider, like over beer consider them failures?

**Andrew:** That's an interesting point. I think that the If you get into the depths of the politics involved in a lot of these enterprises, what happens in many cases is there's not a clear success criteria in the first place. And because of the politics of, or the cultural propensity to not allow failure, there's lots of things that by all measures would be failures, that will be considered success. And I don't think that will go away. But if you're, if you're trying to impact, create value, the rest of the things that I think I would consider success and these analysts who wrote these reports would consider success, the numbers I've seen for failure rates were between 70%, you know, 66% is thrown around and then the high end was 90%. Right.

**Jessica:** [00:09:01] So that's like even worse than the official rate of software project failures. It's almost like changing a sociotechnical system is even harder.

**Andrew:** I think this is definitely in line with my kind of DevOps experiences, and I just started articulating it this way recently. But when you think about these sociotechnical systems and getting everyone to collaborate, or whatever the word you want to use is, one of the things that makes DevOps hard before you start thinking about all these other things, if you're just thinking about this interface between developers and operations and optimizing that, then just there you have 2 groups. This is my original framing, which I think people got more confused than I'd hoped, and I thought we'd have more interesting conversations with this framing, but I started talking about Pareto inefficient Nash equilibrium. Which is basically a way to—

**Jessica:** [00:10:04] which everyone wants to just jump up and have a conversation about.

**Andrew:** Well, I mean, I do, but—

**Matty:** Yeah, I was gonna say, I mean, I think the 3 of us do, but we probably are outliers.

**Jessica:** But okay, but you can help yourself by explaining those words to our listeners so that then there will be thousands of people in the world ready to have a conversation with you about this.

**Andrew:** So for the home audience, it's like a academic mathy way to say that you have something where if you change certain things, no one would be any worse and at least one party would benefit. So there's no loss, it's all benefit, but no one will change. So the Nash equilibrium by definition means no, no player of the game— it's all, it's a game theory construct— no player of the game would change their strategy unilaterally. And so that framing is, you know, I use that in talks going back 7 years ago or so.

**Jessica:** Okay, so I think you just said there's lots of win-win changes we could make to this system, or at least win-neutral.

**Andrew:** [00:11:11] It would be win-neutral. The strict definition would be at least win-neutral. It could potentially be win-win, but it's not zero-sum win-loss.

**Jessica:** And yet no one does anything.

**Andrew:** And no one will change unilaterally because it's not like— well, the way that I started to simplify and try to explain it is the thing that makes DevOps hard is that it's not something any one group can do unilaterally. In order to get these types of changes to happen, you need all the players to simultaneously change their behavior. And that is— I mean, there's a variety of reasons in sociology and psychology and a bunch of things that we see every day trying to do this kind of work that prevent those changes in organizations.

**Jessica:** OK, so you've got like a unit of action, which usually we like to treat individual humans as a unit of action. But practically, teams are units of action because they can decide things collectively and make changes. But yet, for anything larger than that, we don't have kind of this unit of collective action.

**Andrew:** [00:12:31] Well, going back to the framing, DevOps framing, and this is sort of a rehash of the last decade of these conversations, you have—

**Jessica:** We love to do that.

**Andrew:** Of course, yeah. Timeless. It's slightly worse than that in the sense that on, on face, these, these teams that have different responsibilities to the organization are often set up to have incentives that are pitting them against each other.

**Matty:** Yeah.

**Jessica:** So they're like, well, with individuals, you get stack ranking and that's a problem.

**Andrew:** The Dev and Ops wall of confusion metaphor, you have one group on one side who's incentivized to change things, or in other words, create instabilities in the system, introduce instability. On the other side, you have a group that's incentivized to maintain stability.

**Jessica:** [00:13:35] These are inherently intertwined concerns, and as soon as you separate them, into units of responsibility, you get conflict.

**Andrew:** Well, they're already against each other. Like, it's set up to be against each other. And in some cases, you've even tied compensation to those incentives in a way that puts them against each other.

**Jessica:** Yeah, and this is a thing that we do with people. We want something like stability, so we say, you're in charge of stability. We also want something like feature delivery, and we say, you're in charge of feature delivery. We think that by giving someone responsibility, because it needs to be a single human who is accountable for the thing we want, that this will somehow put all of those things into the system, but it just makes them fight.

**Andrew:** Well, I think the word that— and this is a word that's overloaded as well. Is system. And, and most, most of these people we're talking about, they don't think in systems, right? So the thing that, you know, systems thinking— you can go to the literature, Sengi, whatever— is it's like you, you, you have this tendency in organizations and human kind of models of thinking to focus on a particular metric, right? So this is like dominant management thinking, like we want to have, we want to have these metrics, we want to have these KPIs, OKRs, whatever. And so we, we focus on the things that we think will, will push that metric in the direction we want it to go. And, and what systems thinking— and it kind of like connects back to a bunch of stuff, but definitely influenced the way I think about DevOps is that the argument is that you get more return for the effort in many cases if you don't focus on pushing these metrics in the direction that you want them to go, but you focus on removing the resistance to those things happening and getting people in a mode where they can— they can enable these, you know, remove the barriers, the friction, whatever, tends to—

**Jessica:** [00:15:57] And sometimes those barriers are deliberately set up by the division of responsibilities.

**Andrew:** Oh, absolutely. In fact, they're institutionalized over time. This is one of the things I see as a big or frequent resistance to change. So, there's a resistance to the metric, and then there's a resistance to changing the system. And those aren't necessarily the same, but they're related. And in the human concept of self, particularly in a lot of the Western world where our last names are literally connected to our vocation, humans tend to attach their identity to their task. And when you tell them they're going to do something different than the way they have done it for however long they've been there, then what they often hear is, you are erasing my identity. And they will resist the— you know, that creates an immune response to that where they will do everything they can to preserve the order of the existing thing that they do. Rather than accept this kind of—

**Jessica:** [00:17:12] Because it's not just what I do, it's who I am.

**Andrew:** It is who I am.

**Jessica:** I am a Java programmer.

**Andrew:** I think you've seen this movie before.

**Jessica:** So systems thinking is incredibly important. It's being able to look at the wider system and care about how our actions affect the wider system. And not just our immediate personal risk. This is a good time to learn about that.

**Andrew:** But it's actually hard.

**Jessica:** It is hard.

**Andrew:** And things that seem like obvious changes in a system don't always— they often have unintended consequences, right? So when— I think this is a simpler version of some of the Sanghee stuff, but there's like the double loop learning models. Are you familiar with that?

**Jessica:** I am. Yeah.

**Andrew:** Explain it.

**Jessica:** Okay. Okay. Let's see. Single loop. Maybe not. Single loop learning is when you do something and you see how it works out and then you do it better. Double loop learning involves thinking— nope, nope, I lost it. You explain it.

**Andrew:** [00:18:28] So I think going back to, you know, the stream of consciousness that I just put out there, when you think about the notion of a metric or OKRs or KPIs or whatever the de facto word for that is this year, then you set up a model and you often set it up long-term and you say, hey, here's our model and here's this metric we want to push, and then we have some kind of plan-do-check or whatever cycle where we, we do a thing and then we check the metric and then we, we give people bonuses or whatever. So that's like a, that's a single loop of that cycle. And that allows us to do certain things. And if our first order approximation of the universe and the model that we made matches to those metrics, then, then we are going to do okay. In, in the double loop model, or what the double loop adds to that, is you have a way to, to think about, okay, like, here's my model of the world, and I believe these things are true. And if I push this system this way, then it will have this impact on these metrics. And so I do that, and that happens. And then you say, okay, like, does the, does the data, does— do these metrics match to my model? Like, what's, what's my ability and willingness to update the model and change what those are? So the single loop learning is basically like, these are our KPIs and we're going to do whatever we can to make them. The double loop is, why are these our KPIs? Should these be our KPIs? And like, we're going to change the way we try to do this.

**Jessica:** [00:20:10] Okay. Okay. Excellent. So when you have a model of how the world works or how your software works and you want to make it faster for instance, you can work within that model of how it works to make it faster. Whereas the double loop is, okay, what if I changed my— the model itself? What if I learned more about, um, how this hardware can help it be faster? Um, or what if I learned more about what the software does and whether it needs to do this slow thing at all?

**Andrew:** All big breakthroughs in science come from the boundaries, the anomalies, right? So it's like, if these things were true, then we would get these results. And then when you, when you notice like you're not getting the results or you're noticing all these other kind of second-order effects in what, you know, you're driving towards, then you give yourself as an individual or an organization the right and ability to change the targets so that you can do the right thing. Hopefully.

**Jessica:** [00:21:13] So that you can look at everything else in the system besides this one number that you've been assigned.

**Andrew:** Or maybe you want that number too, but let's put some other buffers and balance those and weight those against that singular focus.

**Jessica:** I've been thinking a lot about modifying the model lately in the sense of you might have a hypothesis of, if I change this piece of code, it will get faster. And maybe it will get faster, but maybe it'll also, I don't know, overheat your laptop and the fan will be on all night and it'll keep you up. The hypothesis is most useful when it invalidates or else supports a model, and it's the model that's valuable.

**Matty:** So here's the challenge, right? So we've been talking about like why this is hard. Because it's having to think about things in a different way. And is there really any— I hate to say incentive, but any driver, anything within leadership and organizations to think this way versus going at the targets that have been defined because that's how the worth of the organization is being measured, right? Like, what do we do within an organization Because it's one thing to tell a practitioner they have— that's really hard to say, an individual practitioner thinking about this and then pushing back on these things. What are the— what can we do to get, as leaders, to invest the time and the energy in doing that versus if we're just kind of around for long enough to push the boundary, not even push the boundary, but to address the thing that we were quote unquote hired to do? Like, how do we, how do we affect this change?

**Andrew:** [00:23:05] There's a lot of interesting conversations and theories that have kind of been swirling around literally for decades. But if you, if you, you know, because you can go back to Deming and that kind of line of thinking, but, but if you think about what leadership means in most organizations, And then there's some kind of namespace collision and confusion, the difference between leadership and management, but we'll kind of treat that as like a big ball of one thing in some ways, at least for the moment. There's dominant management theory for the way most things in most organizations are managed has— is essentially an an artifact of the Industrial Revolution. It hasn't moved meaningfully forward. The— I feel like the Agile movement, the DevOps movement, some of these conversations, you know, Cynefin, like there's a bunch of little pockets of interesting communities who are trying to make things meaningfully move forward. Wardley Mapping is another interesting community.

**Jessica:** [00:24:15] Resilience Engineering.

**Andrew:** Resilience engineering is interesting in other ways. I'm not sure it always comes back to—

**Jessica:** The community, in particular.

**Andrew:** Yeah, definitely an interesting community. I mean, there's a ton of interesting communities that are doing aspects of what, at the end of the day, start to look like you need to change your culture, right? So, it's like the resilience engineering— some of these I kind of think of like they're little subgenres of DevOps communities, right? So, you have observability, chaos engineering, resilience engineering. In some cases, a lot of the people in those organizations or in those communities were sort of central to a lot of the early DevOps conversations, too, and they kind of moved on to have more focus or more impact with the— more focused impact. But the framing of leadership I feel like there's, you know, it's kind of threadbare at this point, like this leadership focus on, you know, whatever kind of Taylorism-driven metrics, Industrial Revolution, you know, factory-style management. When you apply that to knowledge work and software in particular, you don't get very good results.

**Jessica:** [00:25:31] And we don't need just the leaders to be doing double learning. All the way down at the knowledge workers, at the developers. You need that double-loop learning at every level of the system.

**Matty:** I think, doesn't it go back to we're talking about making this change and then we're taking leadership style that, like Andrew said, is coming from this older way of thinking? Then even when these new ideas come in, they get retrofitted so that you can do them still based around Taylorism.

**Jessica:** So you can, you can call them success based on metrics taken from an older system while we're still being driven by those, those things.

**Matty:** And I think maybe that's— and, and I know there's a lot of belief in a lot of these communities that you have to succeed in spite of management, right? You know, and I feel like maybe that's where some of this gap is happening, because then it comes in and there starts to be some success And this is what gets you safe, right?

**Andrew:** [00:26:32] This is actually the framing that I was leading to, where yes, you want double-loop learning from the edge. And, you know, another thing that I spent a lot of time thinking about and is related to this is this notion of organizational learning. And organizational learning is only possible if the kind of central nervous system all the way back to leaders has a good sensor network connected to the lowest-level line workers, and that, you know, information and decision-making has to be a core competence at kind of every level of the organization. But the reason I started this thread and framed it this way is, yes, you want double-loop capabilities and adaptive capabilities at every part of the social-technical system, but what What happens in real life on many of these little transformation journeys is that if you don't have leaders who are in that kind of mindset where they want to reimagine that model, then they can actively prevent the rest of the organization from having that capability.

**Jessica:** [00:27:46] One thing Matt said earlier, it's a new way of thinking. You have to change your way of thinking, but it's more than that. You have to want to continually change your way of thinking.

**Andrew:** I think this is an interesting kind of subtopic where if you look at the— if you look at like Senge's model or the 5th Discipline or whatever, that like you have what he describes as there's a domain of action and doing, and then there's the domain of kind of enduring change and ideation. And, and if you spend too much time in either one of those domains, then, then it's potentially pathological, right? And so this is why you get this, this tension where on, on one side, if you're only doing things and you're only in that single loop, then you can never get better. And, and there's a, you know, like a silly quote that I kind of throw in a lot of talks that's basically, you know, I'm too busy getting things done. To learn anything. I can't learn anything, I'm too busy getting things done. And I usually attribute that to the least productive person in the world. And then the other side of that is the danger of only being in the domain of learning and, and, you know, becoming too disconnected from the doing. And that's a pathology, or that, that doesn't lead to the optimal outcomes either. So the, the key is in my kind of mental model here is finding a balance between taking actions and doing things and then revisiting the domain of learning and bringing that back in some kind of cycle. And, you know, certain times you probably want more doing than others, and sometimes it warrants that kind of reflective only learning investment. To kind of get to a new place. But if you only do learning or you only do action, then you're not going to get good outcomes either.

**Jessica:** [00:29:50] Because that first loop, that the single loop of doing and improving within a model, that's using the model. And if all you do is form new models and you never use them, well, one, you won't get anything done because you're not using your models. And 2, your models lose connection from reality.

**Andrew:** But you might get a PhD. That's good.

**Jessica:** Oh, you might. You might. And that, I mean, that's essentially what we do as humans all the time. We form some mental model of the world around us because we need it in order to take action. And as we take action, if we're paying attention, we might improve the accuracy of our mental model. So I need to know whether I'm hungry and what kind of thing is food in order to choose to eat that potato chip that's over there just out of reach. And, and yet, if I'm paying attention, I might notice that it's stale and choose not to eat its friends.

**Andrew:** [00:30:54] But I don't have anything else to eat, so I'm probably gonna eat this still. Yeah, it was right there.

**Jessica:** But yeah, I mean, choosing to act in a world full of uncertainty is what humans do.

**Andrew:** Well, I think in some sense what the models try to bring is a sense of certainty. And there is a real, on the individual level and the organizational level, there's just an exhaustion that comes from only learning. Right? And I feel this in my own kind of like— so quick aside, like I am trying to get better at chess and I'm trying to get better at playing guitar. And I'm also studying Arabic, which is super hard. But I feel like there's modes of practicing chess or guitar that are what helped me make progress by adding new things to my system, my model, but it's also hard and exhausting compared to just like blowing off steam, playing a few games or like, you know, playing a few bars, right? And so it's like a very real kind of concrete example, not necessarily related to anything to do with computers or social technical systems, and there's no third party involved, but it's like I know what it takes for me to make certain progress and learning new skills for those activities. And that activity, that kind of like meta activity of learning, has its own kind of exhaustion. And like, I can only maintain it at a certain level before I kind of like want to go back to like, you know, just play a few games and not really focus on that intensity of learning the model or moving the model.

**Jessica:** [00:32:49] Yeah, I read a thing once in a book about motorcycle riding where it's like, okay, when, when you're trying to get better, you need to, while you're— whenever you're riding, devote 5% of your brain to observing, like, what's going on? What did I do there? And was it successful? And then you can reflect on that later. Whereas during the motorcycle race, you don't try to do that. You put 100% of your brain on going as fast as you can. So yeah, that's— there's a balance in there.

**Matty:** And I think just to kind of wind this up and bring it back to be kind of news topical, there's times when you're trying to improve and you're trying to flex your learning and you're trying to flex your understanding. And then there's times when you just have to do the work. Because you don't have the capacity to, like Andrew said, expand to that. And that's a little bit about what's happening in the world right now, right? Where we talked about, you know, Jess, you made a reference very early on about working from home during a pandemic versus remote work, you know. So these are the things we're trying to do.

**Jessica:** [00:34:01] Yeah, this is hard.

**Matty:** You know, just kind of functioning. We don't have the bandwidth to necessarily try to improve everything right now. Some folks have to just be able to work and move forward. So we need to—

**Jessica:** And not at the same pace either.

**Andrew:** Yeah. Some people are born to transformation and some people have transformation thrust upon them. And right now—

**Jessica:** Right now we are all the latter.

**Andrew:** There's a lot of transformation thrust upon us.

**Jessica:** Yeah, so the point being, that transformation, that learning, in another sense, we have to learn right now. And so we're not gonna get as much work done, but that's essential.

**Andrew:** The model itself is basically changing out from under a lot of the assumptions that people have had about how the world works.

**Jessica:** Yeah, yeah, and we need to update that.

**Matty:** So keep that in mind, everybody, as you're going through what you're going through right now. As Andrew said, models are changing. The way we work is changing. Everything's moving. Give yourself and give your colleagues and give your family and give your coworkers— and I suppose you can give your boss a little bit of flexibility and understanding and care about that. We know things are changing.

**Jessica:** [00:35:26] Eat more chocolate.

**Matty:** And eat more chocolate and wash your damn hands.

**Andrew:** Stay safe.

**Matty:** Stay safe. Uh, I— that's bringing us kind of to the end of our show. This was a little bit of a shorter one, but it's very condensed. It was very special. Um, we'll have some links in the show notes to things about Pareto and efficient Nash equilibrium. Amusingly, if you Google Andrew Schaefer and Pareto Nash equilibrium, One of the top hits is one of the times Andrew was on the show. So there's kind of—

**Jessica:** apparently it's a recurring theme.

**Matty:** There's some recursion happening with that. But you can find those show notes at arrestedevops.com/Transformation. And arrestedevops.com/iTunes is if you feel like pushing the envelope of the system and leaving us a review, you can do that. It does things. You can listen to the show on Spotify or iHeartRadio. Andrew, this has been fascinating as always. And is there any last little thing that— I cut you off a little bit, and I know that's dangerous, but it's also dangerous to say, Andrew, do you have anything else to say? But do you have anything else you want to share?

**Andrew:** [00:36:42] Honestly, I just want everyone to stay safe and believe in, in whatever that new model is, that we as humans have the resilience and adaptive capacity to build something better when this is over.

**Jessica:** It's not the same, but it's gonna be interesting.

**Matty:** It's not the same, but it's gonna be interesting.

**Andrew:** And it's us. It's all on us. Let's make it happen.

**Matty:** I'm Matt, @MattStratton.

**Jessica:** And I'm Jessica.

**Andrew:** @Jessitron. I'm, I'm @LittleIdea, I suppose.

**Matty:** Oh yeah.

**Jessica:** Yes, yes. This has been Arrested DevOps.

**Matty:** So remember, there's always DevOps.

**Andrew:** Where's the banana stand again?
