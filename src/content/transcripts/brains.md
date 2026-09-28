**Trevor:** [00:00:07] Welcome to Arrested DevOps, episode 43, Cognitive Neuroscience. I'm your co-host Trevor Hess, @TrevorGHess on Twitter.

**Bridget:** And I'm your co-host Bridget Kromhout, @bridgetkromhout on Twitter.

**Trevor:** Arrested DevOps is brought to you by TenthMagnitude, a cloud services company that figures if you're listening to this podcast, you must be pretty cool. You can find out about joining their cloud services team at arresteddevops.com/10thmagnitude.

**Bridget:** This episode is also sponsored by PagerDuty. PagerDuty eliminates the noise, chaos, and manual processes across the entire incident lifecycle to decrease resolution time. PagerDuty is trusted by companies like Etsy, Nike, and GitHub. To sign up for a free 14-day trial, visit arresteddevops.com/pagerduty.

**Trevor:** This episode is also brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 70 common infrastructure tools, such as Chef, Docker, and AWS, so that dev and ops teams share their key data and alerts in a single place where they can collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog.

**Courtney:** [00:01:22] DataDog.

**Trevor:** Lindsay, welcome. So you're joining us from the future, future, future. How's Wednesday going so far?

**Lindsay:** It's pretty good, but unfortunately still no jetpacks.

**Trevor:** That's very disappointing.

**Bridget:** Wait, wait, wait. Is it seriously Wednesday there? Is my clock completely wrong on my computer? I want to say it's Monday here now.

**Trevor:** Oh, wait. That's what I get for reading things verbatim.

**Bridget:** That's right. We rescheduled this from when we planned to have it. Hilarious.

**Courtney:** Perfect. See, time zones are hard.

**Bridget:** They are. They are the worst.

**Lindsay:** So we're on Tuesday, 18 hours ahead. We're not 42 hours ahead.

**Bridget:** So that would be pretty epic.

**Trevor:** We can dream.

**Bridget:** What planet is Australia on?

**Trevor:** So can you tell us a little bit about yourself?

**Lindsay:** Yeah, sure. So for the last couple of years, I have been doing a— I guess I've done a career change from going in from being in engineering to going into management. And so part of doing that is understanding that I don't have all the answers when it comes to figuring people out and shutting up and not talking and just spending a lot of time listening and reading. So pretty much everything that I've been doing in the last sort of 3 or so years has been about trying to understand everything that I possibly can about our current understanding of how the brain works, how people work, group dynamics, cognitive biases, those sort of things.

**Courtney:** [00:02:57] Right.

**Bridget:** And so you are actually in a new role, right? You're like running tech for Australia. How is that?

**Lindsay:** It's not too bad. I'm only— this is my third week now. It's a really fun and exciting place to be. I think the thing that I really like about it is that it's a group of people— I should wind back for a second. So not entirely running tech for Australia, but I guess I'm running tech for this organization within the Australian federal government. It's called the Digital Transformation Office, the DTO. And we actually have a really, really simple remit, which is that we're trying to build clean, fast, simple, and humane services for people. So basically, whenever you have to interact with the government, it's not always a particularly pleasant experience. So we're trying to make that nicer for everyone. And yeah, so the stuff that I'm doing within the DTO, I'm sort of infrastructure and platforms lead. So it's sort of my responsibility to help other teams within the DTO build services atop of the platform and the infrastructure that we're delivering. And so I guess there are 2 parts to that. One is, you know, you've got to build a platform so people can deliver. But secondly, once we've done that, that's actually the easy part. The hard part is working in the teams and helping those people in those teams learn the best practices and the best way to get the most out of the platform that we're delivering. And, you know, we have pretty lofty goals. Like, we're trying to bring the delivery of government services up to the same level that you would have that you would expect from, you know, using Facebook or using Google. So there's a long road ahead of us, but it's pretty fun and challenging. So if you're interested in that, you should totally come and work for us.

**Bridget:** [00:04:43] Well, that's actually awesome. Are non-Australians able to work for the Australian Government Services?

**Lindsay:** Turns out, yeah, it actually is possible. So we've got a bunch of people that have come across from the UK and from the US. So yeah, we can do visa sponsorship. So I guess part of what we're trying to do as well is it's a little bit of like a call for Australians that have left and gone to the States to come back home because, you know, we're building something new and beautiful and you should be part of it.

**Bridget:** That's awesome. All right, thank you, Lindsay. So that was Lindsay Holmwood. We have another guest today as well. We have Courtney Nash on the show, which I'm very excited about. So hello, Courtney.

**Courtney:** Hi everyone, thanks for having me here.

**Bridget:** All right, so Courtney, a lot of people might know you as a Velocity conference chair or an editor at O'Reilly Media. So can you tell us what's your interest in brains? Like, is this a zombie thing?

**Courtney:** Well, I like zombies, but before I got into— before I worked at O'Reilly and many companies before that, I was actually a cognitive neuroscientist in training. I was getting my PhD. And I have always been fascinated by how people learn. So my area of specialty was sort of in learning and memory, in particular in sort of skill acquisition. And I was one year away from my dissertation and I ran off to go work for this little company called Amazon. It was—

**Bridget:** [00:06:13] this little company called Amazon. I think so, maybe some of our listeners have heard of them.

**Courtney:** Possibly. It's entirely possible they have. And I wound my way through a variety of internet companies or more traditional tech companies and landed at O'Reilly working on the Head's first series of books there, which some people may have heard of, which have a very cognitive neuroscience kind of background to them. So that was my weird sort of intro into a publishing company out of the tech world, and I'd been doing some freelance writing. And along the way, I sort of stumbled onto the Velocity world. Yay, there you go.

**Bridget:** What is Lindsay showing us?

**Courtney:** He's showing Head First Java. Nice. And the thing that— it's sort of funny because when I was first sort of editorially tasked to go cover the kinds of things that were happening at Velocity, I tell people this honestly all the time, I looked at it and thought, eh, I don't know. Operations? That doesn't— seriously. Outside of my— We're not glamorous enough for you?

**Trevor:** [00:07:21] Yeah.

**Courtney:** It was really funny and I thought, well, all right, I'll go to the conference. I came away from the first conference just completely gobsmacked, especially because of the kinds of things that Lindsey was talking about, which is this group of people who had discovered when you have to start talking about systems of technology, you have to start talking about systems of people, and then you just go back down the cognitive neuroscience rabbit hole that I crawled out at some point like 20 years ago. So it all comes full circle.

**Bridget:** Nice. That's fantastic. Lindsay, can you give us some insight into when you first started going to Velocity and when you first met Courtney? What kind of conversations were you folks having then? When was this?

**Lindsay:** Well, truth be told, actually, the first Velocity that I've ever actually been to was in New York last year. I submitted a couple of talks over the years, but nothing that was really quite up to the standard. I guess by the time— No, it's true. And I'm not saying that in a disparaging way at all.

**Courtney:** [00:08:25] We met in Salt Lake City.

**Lindsay:** That's right, actually. Yeah, we met at Mountain West RubyConf in 2013.

**Courtney:** Yep.

**Lindsay:** Yeah, and I'd just given a talk on the escalating complexity.

**Courtney:** And I was like this, like giant eyes, like brains coming out of my ears. So happy at that talk. Yeah, it was good. It was really good.

**Lindsay:** I wouldn't say that that was a fun talk to prepare. I did maybe, I don't know, 60, 70 hours of research for it. And I actually find that particular talk really emotionally taxing as well because people actually die. There's a real-world consequence to a bunch of these different things. And we're quite privileged in the tech community in that there's not always a body count associated with a bit of downtime.

**Courtney:** That's true.

**Lindsay:** Absolutely, absolutely. So, you know, I guess I'd given that talk and I was completely spent, and then Courtney was like, oh, I want to talk to you about this stuff.

**Courtney:** [00:09:32] Yeah, so we met over that, but I think we bonded over these concepts about how you have to talk about the way human brains work when you talk about any kind of complex system. And people are barely, barely beginning to understand that or even realize what that means.

**Bridget:** So how exactly, since you have training in cognitive neuroscience, Courtney, how exactly on a high level does the brain work?

**Courtney:** Well, here's the first thing I'll tell you. If somebody tells you that they have a product that is like deep learning, super amazing, fantastic AI, as a card-carrying former neuroscientist, I can tell you that most of that is just not true. But the things that we do know, I think, that are really interesting from the perspective of what Lindsay talks about a lot are how certain really fundamental behavior or practice, you know, things that happen in your brain layer up to build these kinds of behaviors that you may not be aware of. And that has implications not just on how you interact with your colleagues, but that has implications on how you design things, how you build things, the way you design systems, all of these biases, which is the word we're really kind of steering towards here, have an impact at varying kinds of levels, and the brain has really weird ways of either not letting you know these biases exist or just sort of tricking you into thinking that you are making free will, rational, logical decisions at all point in time. And we really want to hold that belief dear, right, as people in technology, and it's just bullshit. Can I swear on this podcast?

**Lindsay:** [00:11:30] Oh yes, absolutely.

**Courtney:** Okay, good.

**Lindsay:** Courtney, we are pretty sure you can say whatever the fuck you want.

**Bridget:** Exactly. I mean, think of it this way, we've had James Turnbull on this podcast, you know, we've had other Australians, so we know how these things go. Also, I'm pretty sure the only bleeping that's happened recently on this podcast is Stratton bleeped me for saying the word, and he's not here. Oh wait, he's probably gonna—

**Trevor:** But you know he will.

**Courtney:** Yeah, but he won't now.

**Bridget:** Stratton, it was funny once.

**Courtney:** All right, so what was I saying? Oh yes, the notion that—

**Bridget:** You were talking about cognitive biases, and I'm fascinated by the fact that you're bringing this up because I feel like Lindsay has actually done talks about this. You're doing an Ignite at Velocity this year, but I don't think it's about this. So when are we gonna hear from you about this?

**Courtney:** From me? Oh God, that's brutal. I've been, I have this talk I've wanted to do for a while now, actually. The talk I do wanna give is really about, I wanna take it all the way sort of down to the wetware when we talk about bias. We talk a lot about these more, almost what I think of as conceptual biases, right? Hindsight bias, you know, all those kinds of things. The kinds of stuff that I studied when I was doing neuroscience research was much more closer to what you might consider to be almost like perceptual biases. So I don't know, has anybody heard of the Stroop effect? Lindsay probably knows this one. No?

**Trevor:** [00:12:54] I have not.

**Courtney:** Okay, so Stroop, S as in Sam, T-R-O-O-P, and we can drop something in maybe with some kind of magic for the video at some point hopefully on that, was a researcher who discovered this phenomenon, and I'm tempted to do this in a talk and like do maybe, I don't know if it would the world's biggest Stroop experiment or not, but it's this really crazy effect you get where you have people— this is old-school cognitive science research kind of stuff— you have people read words on a screen, and so you're reading colors in this case, blue, you know, the words' colors, so the B-L-U-E, G-R-E-E-N, right? You're reading those words, and then they start messing with you, and they show you those words in colors. So now you're going to see the word blue, but it's displayed in green. Or you're going to, you know, so you see this running list of words and you have to try to say the word. When the word blue shows up on the screen in green, it takes you longer to say the word blue than if the word blue shows up in blue on the screen. That was a really long, boring description of a basic psychology experiment.

**Bridget:** [00:14:00] I have actually seen that test. It's really hard.

**Courtney:** It's really hard, okay?

**Trevor:** I didn't know it had a specific name.

**Courtney:** It does, yeah, yeah, and it's named after the person who sort of came up with the initial experiment. And so it's a perceptual, you know, kind of conflict essentially. So you have the system in your brain that reads words and you have the system in your brain that reads colors and they're almost fighting with each other and it gives you this sort of conflict. And you can actually take that kind of a perceptual, you know, cognitive bias and you can stack it up. You can do really cool stuff like this researcher at Stanford has done And I'm gonna have to go back and remember her name, because this is terrible. I should have had this in my notes. But you can actually have the same effect where you can present words, and then you can prime people. Prime being like give them, you know, have them think about a category of things like men. So say, okay, now we're going to talk about professions, and then you give them professions, and have them, you know, sort of react to that word. And so you get this weird cognitive interaction between, say, saying that a woman is a physician versus a woman is a software developer versus a woman is a schoolteacher. Same kind of fundamental basis between the two, and you have— you don't know these things are happening, but the really cool thing is if you can have somebody take that test and they realize where those friction points are, that's what's interesting, is how do you become aware of those places in your brain where things are kind of going and fighting against each other that way.

**Bridget:** [00:15:33] Yeah, absolutely. Now, Lindsay, you actually have done a talk on cognitive bias at least twice, I think. Can you kind of address what Courtney is talking about here? Like, what stood out for you when you were researching and giving that talk?

**Lindsay:** Yeah, so I've given the DevOps Field Guide to Cognitive Biases 3 times now. So I've actually done a first edition and then a second edition. So the last time that I did that was actually at PapaConf last year. Which is happening in a couple of days now. And so, yeah, the first time it was more— I was actually giving it to more of like a DevOps audience, and then the second time was more, I guess, more of the ops. But, yeah, so to sort of go back to what Courtney was saying around like how the brain actually tricks us and we don't sort of— we think that we're being rational, but we're actually just rationalizing a whole bunch of decisions. The stuff that Kahneman and Tversky sort of started talking about back in the '70s is really the basis for like this entire It's not just one branch. It's multiple branches of psychology, neurology, neurolinguistics. They both have had an amazing effect on that space. And so the model that they basically put forward is that you've got 2 systems for processing information. You've got your fast system and your slow system. So System 1 and System 2. And funnily enough, Daniel Kahneman wrote a book a couple of years ago called Thinking, Fast and Slow. So if you're interested in that sort of stuff, you should absolutely go and read it. One cool fact about that, Amazon released some information from their Kindle store a couple of years ago, and they basically showed that that book, Thinking, Fast and Slow, has one of the lowest completion rates out of any book that they've got on the store. Not because it's badly written, it's just because it's dense. It is really, really dense. And if I'm going to own up to it as well, I haven't actually read past the first couple of chapters because it's like, okay, I need to take like a 2-month holiday just so that I can digest this.

**Bridget:** [00:17:35] You're a statistic, Lindsay.

**Lindsay:** That's right. That's right. I am the 99%. So yeah, look, the system that they propose is that with System 1 and System 2, you've got your fast system and your slow system. So your brain is basically optimizing for speed over accuracy when it comes to processing new information. And, you know, it's from all different sources— stuff that you hear, stuff that you see, not necessarily stuff that you taste. One cool fact, though, It doesn't apply to things that you smell. The nose is hooked up to a part of the brain that bypasses System 1 entirely. So there's this really interesting company in New Zealand, and they basically do— they're doing human systems safety stuff. And one of the things that they do to prime people, going back to what Courtney was saying a second ago, was that they get the people that are working out on mine sites or they're working in dangerous areas and they get them to get a handkerchief with their significant other's perfume or something like that on it or a photo, and they mount it on whatever equipment they're using so that whenever they enter the car or the crane or whatever it is, it's actually— the smell of it alone is subconsciously priming them that, hey, you actually, you've got loved ones ones, and you need to think really slowly about what you're actually doing here to make sure that you want to go home to these people.

**Courtney:** [00:19:11] Yeah, not to nerd out on you too much, it's the hypothalamus. So yeah, so all of the sensory systems that you have other than smell go through your hypothalamus before they go out to the parts of your brain that process it. And a lot of that goes in, and so your olfactory nerves go straight to your hippocampus, which is sort of that piece of your brain that's really involved in kind of forming those kinds of memories and that more slow system that pieces things together and helps you remember that kind of stuff. So yeah, so it's that short circuit and using smell is a really cool kind of brain hack in that regard.

**Lindsay:** I think we're a good team for this call because I'll just sketch out the ideas at the really high level, you provide all the detail, and I'll just sit back.

**Courtney:** Well, anytime I get to like bust out old like neuroanatomy, I feel like I actually, you know, I just paid off my grad school student loan last month, by the way.

**Bridget:** Oh.

**Courtney:** Yeah, I know. But I just, yeah, plus one on the Kahneman. I mean, he's amazing. And I mean, that is, reading that book is like reading my, you know, like my thesis research materials. That's a hard one. To get to, but if people even get anything out of it, I still think it's okay that they didn't finish it.

**Lindsay:** [00:20:30] The good thing is that there's lots of other material that's been released, even before Thinking Fast and Slow was released, that's sort of like a nice sort of gentle pop science introduction to a lot of this. In fact, that was how I really got interested in the cognitive biases stuff, because I read this book by— well, actually, I didn't read the book first. I read a blog by this guy named Dave McCraney, and it's this really gentle pop science introduction to a lot of these things called You Are Not So Smart. Basically, he'll sort of lay out this particular scenario and then just point out that actually, in this particular situation that you're finding yourself in, you think that you're acting rationally, but you're not. You're totally rationalizing or using this particular shortcut.

**Courtney:** So I wanted to bug you about the shortcut thing or kind of try to steer in a slightly different direction because you had a slide in one of your presentations a little while ago in one of these— I'm trying to remember which one it was, the DevOps Field Guide to Cognitive Biases. I was looking back through that in preparing for this, and you had this line that said, you can practice to make them more automatic. I can't remember exactly what that was in reference to, but this was the stuff I studied that I was really fascinated by. I think people think, oh, I've got this, you know, we have these cognitive biases, we're all doomed, we're horrible people. What's awesome about brains is that they aren't fixed and that they can change. Even when I was getting in grad school, we were really starting to understand how much more essentially like plastic the brain is. For a long time, it was thought it was sort of imprinted, and then it just, you know, churned out its instructions, and that's so clearly different now. And so I don't know if you've looked at this or talked to people about this, but I think it's really interesting to talk about overcoming those biases. Like, I have a wicked reaction time on the Stroop test, but only because I used to practice it. So that when I'd make people do it, I could embarrass them by being so much faster at it. I'm probably terrible now. This was a long time ago. This is when I was a total neuroscience nerd. But you can retrain the brain. You can change it almost at that perceptual sort of substrate. And so I'm curious what you think about that.

**Lindsay:** [00:22:43] Yeah, no, I mean, one of the things that I really sharpened up in later versions of the talk is that There are ways to combat pretty much all these biases because a lot of them sort of derive from similar sort of heuristics. Kahneman talks about it quite a bit in Thinking Fast and Slow as well, but basically there are these other processes that are happening. You think of the cognitive biases as being like a manifestation of a bunch of these different heuristics underneath. And so they'll, you know, the underlying heuristic can manifest itself in a bunch of different ways as a bunch of different cognitive biases. So a lot of the more sort of deeper research has been on the heuristic stuff, and I'll freely admit that I haven't gone that deep. I'm just more interested in the biases right now. But yeah, things like confirmation bias, for example, one of the things that you can do there within a group, you know, if you're You know, like, say you're doing like a blameless postmortem or something like that. You can appoint somebody in the room to play the devil's advocate. So to take that sort of old worldview of human error and, you know, just go, well, you know, actually it's this person's fault over here and, you know, they are totally to blame and we should be firing them and that sort of thing. And that's enough to get people to actually spend more time justifying why they think this particular outcome is the thing that actually happened. So yeah, look, that's one simple example. The other great one is the Dunning-Kruger effect. Have you done much stuff with that or done much research on that, Courtney?

**Courtney:** [00:24:33] I'm unmuting myself, sorry. Not a lot, not as much in that space. So I'll let you take the floor on that one and describe it a bit more.

**Lindsay:** Yeah, yeah. So, uh, with the Dunning-Kruger effect, um, I mean, there are, there are so many levels to this. And whenever, whenever I've talked about it, um, in the past, after the talk, there's always like a line of people coming up. It's like, well, you didn't talk about this particular thing in Dunning-Kruger. It's like, I know, like, I have, I have a 30-minute talking slot. Like, I could, I could, I could literally talk for hours about it, but, um, The simplest thing with— the simplest way to talk about Dunning-Kruger is that the less you know about something, the better you think you are at it. And funnily enough, it's something that's mostly sort of— it's a cognitive bias that only really seems to affect people in the West. You have the opposite effect in the East. There's not that much research on— well, the research that's been done on the Dunning-Kruger effect whenever they've tried to replicate the findings pretty much anywhere in Southeast Asia, it's like, well, actually, this is not a thing here. So it's basically if you're in Europe or the Americas or Australia, this is our own personal cognitive bias. But one of the really simple things that you can do with Dunning-Kruger to offset that, the effect of that, is that minimal training in a particular topic area actually improves your ability to self-rate your competency at a particular task. So that'll happen regardless of whether you actually have an improvement in the skill itself. So yeah, like the core part of Dunning-Kruger is that you self-rate your competency of a skill better the less that you actually know about it. But the other follow-up part is that you also have a lower ability to recognize genuine skill in other people. So that's why, you know, it's like it's the cognitive bias that basically drives DevOps, right? You know, you've got your ops people going, those developers, they can't code, and they've got no idea, and they don't know how any of this stuff is meant to run in production. And you've got your developers like, these people can't keep these applications up, and they're constantly whining at me about my code, and I'm sure that if I just got in there, I could just build the systems to— and it'll never go down. It'll be amazing. And of course, just by being exposed to those different ideas— and not just the ideas, but also the practice of doing the work— by being embedded in another team, that's enough to actually improve your own ability to be able to self-assess your own skill in that.

**Trevor:** [00:27:30] That's really interesting. So it seems like once you've identified your cognitive bias, then there seems to be a prescribed way to counteract that. How do you go about actually recognizing it in the first place?

**Lindsay:** I guess doing the research in the first place. But that's a really, really tricky question because, you know, there are— if you go to the Wikipedia list of cognitive biases, I feel like every month that I look at it, it gets even longer because there's just so much research that's coming out about it. All the different ones that are available, all the cognitive biases available to you in your tool belt today.

**Bridget:** Wait, so Courtney, are you saying that researchers, ever since you were doing this, have been coming out with new cognitive biases? Or are we just getting cleaner, closer definition of the cognitive biases? Are we recognizing new ones? Exactly how are we inventing new things in the human brain at this point?

**Courtney:** [00:28:32] Well, I don't know if we're inventing new things in the human brain, but we're certainly finding out a lot more than we used to think we know. I mean, it was like I was just saying before, I think you ask any neuroscientist how much we know about the brain and they're going to tell you that we know nothing compared to what's normally reported or written about what we think we know about the brain. Bradley Voytek is a really great neuroscientist out in the— I think he's moved on from Berkeley, I think maybe he's at UC Davis. But, you know, he's great for writing about and talking about that, I think. So, and I actually lost the thread a little bit there because speaking of not being able to maintain applications, but I got booted from the Hangout, but now I'm back, I think. So—

**Bridget:** There were 2 of you for a little while. I was sure— I wasn't sure if we moved on from zombies to clones.

**Courtney:** This is my favorite— I'm sorry, this is kind of off topic of the whole Hangout right now, but this is my favorite weird Google behavior. It has been happening to me on almost every Hangout recently, and so I've been saying forever, but when the singularity arrives, it will not be via Google Hangout.

**Bridget:** [00:29:40] That's for damn sure.

**Courtney:** Everybody keeps getting cloned. You get booted and 2 of you come back, and it doesn't seem to improve my productivity whatsoever.

**Trevor:** We just get to be Hangout replicants.

**Courtney:** Yes, exactly.

**Bridget:** Can we send the Hangout replicants to our other meetings?

**Trevor:** Oh, I wish.

**Courtney:** That would be amazing. Or at least maybe they could answer my email, possibly.

**Bridget:** Nice. So speaking of exciting hacks, we're all waiting here to find out is how do we use all of the things that are being learned about the human brain for evil or good? How can we work better with each other in a DevOps way? Is empathy something that we can talk about from a scientific point of view?

**Courtney:** I have not studied empathy. I have not followed a huge amount of the research. I think it has reached buzzword status, but I think that's a really good thing. If there was a word to buzz, I would like it to be empathy. And people are trying to study it scientifically, like many other things. I mean, I'm a bald-faced reductionist. If people do it, it has to do with your brain. And so therefore, it has— there can be science applied to it. So I don't know too much about the research on that front. We had someone speak in Santa Clara at Velocity named Indi Young, I-N-D-I, last name Young. And she's fantastic on this subject. I really suggest if anybody is interested in brushing up on not just research behind empathy, but sort of practical ways of using empathy, and I might add, of course, developing it as a skill, it is something that, like all these other kinds of skills that we've been talking about, that you can develop. I really recommend Indi's work on that front.

**Bridget:** [00:31:33] Okay, we can link to that from the show notes.

**Lindsay:** I guess the 3 cognitive biases that I see having the biggest effect on empathy are the fundamental attribution error, the better-than-average effect, and the halo effect. So the fundamental attribution error is basically saying that you judge people's actions by what you consider to be their internal characteristics about who they are, not what they're actually thinking and the situation that they found themselves in. So, you know, when you're driving along on the freeway, Do you call them freeways over there? I don't know. You drive along the highway. There we go.

**Bridget:** We call them freeways in the Midwest, but we also don't put the, you know, definite article in front of the highway number. We just say drive on 35. We don't say on the 101.

**Courtney:** Oh no. Oh no. That is a regional debate. We could have a whole podcast smackdown about that.

**Bridget:** The Californians say that. What do you say in Australia? Do you put a definite article in front of your freeway number?

**Lindsay:** [00:32:34] We don't talk about numbers at all. We actually, we've got names for all the roads. Numbers is actually only a pretty recent thing that we started doing. They did it down in Tasmania about 5 or 10 years ago, but now we're sort of adopting it on the rest of the mainland.

**Bridget:** But do you put, would you say the Pacific Coast Highway or would you say Fort Road?

**Lindsay:** No, I'd say the Pacific Highway.

**Courtney:** Where were we again? Fundamental attribution error?

**Lindsay:** I can't remember. So when I'm on the highway, say somebody is trying to overtake you and they swerve in front of you all of a sudden or they put on their brakes and you're like, wow, that person is a fucking idiot. And how did they get their license? Did they get it out of a cereal box or something like that? But of course, you're attributing the fact that that you're a better driver than them, which is the better-than-average effect, which I'll get to in a second. But it sort of completely ignores the fact that, well, maybe there was like a— I guess if you're in the United States, you'll have like a squirrel, but for us, it'd be like a possum or a koala or a wombat that would run out on the road, so they're swerving to miss it. One might argue that, well, if it's a kangaroo, what you're actually meant to do in Australia is speed up and kill it. You're not actually meant to slow down. But yeah, winding back for a second, let's not talk about killing animals. Let's talk about cognitive biases. You're basically saying that, well, because all other drivers on the roads are idiots, then if they do something on the road that you consider to be idiotic, it's because they're idiots, not because they're reacting to the situation that they find themselves in. So that's the fundamental attribution error. Now, the better-than-average effect is quite interesting because humans self-rate themselves to be better than the rest of the cohort that they find themselves in. So if you ask— there have been tons of studies done on this, but there's one done in Australia just a couple years ago about how people self-rate their abilities at driving on the road. Again, the driving example. But 70% of people consider themselves to have driving skills above average.

**Bridget:** [00:34:43] But apparently not math skills.

**Lindsay:** Yeah, apparently.

**Bridget:** Apparently.

**Lindsay:** Thing is, they don't know that, right? So, you know, we sort of have this— it's a lot of us tied to ego as well, right? You know, nobody wants to think that they're below average or spot-on average. That's a pretty big hit to your ego, a difficult thing to internalize. So, you know, there's that. And then the last one is the halo effect, which is that if your overall impression of like a brand or a product or a person is really great, that's going to influence all of your interpretation of what they think and what they do. So regardless of whether what they're actually doing is, you know, is good or not. So, you know, that's sort of where you get like the whole cult of personality thing coming from. You know, you'll have, you'll have a leader of a company and they'll, you know, they'll have this whole cult of personality and persona around themselves and it's like, yeah, wow, this is great. But then it turns out that they're also doing a whole bunch of other things that aren't particularly nice to people, and you sort of end up rationalizing that away because, well, the person's great, but the stuff that they do obviously can't be bad.

**Bridget:** [00:35:51] And later they make biopics about them and it's a whole thing.

**Trevor:** Yeah.

**Bridget:** That is actually— that's fascinating. And I'm kind of wondering if you can segue from that to— you've also given a really interesting talk, Lindsay, about the psychology of alert design. So if we're trying to weaponize all of this stuff we're learning about the brain, like, how can we hack around what people are going to think in order to get us the results we want in terms of our monitoring and alerting?

**Lindsay:** That was a fun talk to give, and I gave it a couple years ago. But probably the big takeaway that I like about that talk is the normalcy bias, which is another cognitive bias. But basically, there are 2 parts to it. Before something terrible happens, like a terrible event happens, we discount the possibility that it's going to happen because something bad has never happened before, it's not going to happen. So why would you spend the time preparing for it? And then during an event and after an event has happened in the aftermath of it, we're slow to actually react to the— and recognize that the thing is actually happening to us. And so it takes somewhere between There's a good example of people in the Midwest and whatnot who are sort of exposed to tornadoes and whatnot. When you hear the tornado siren going off, you— actually, I'm not quite sure when exactly, but there was a lot of research done, I think, in the '70s and '80s about this, where you've got to get affirmation from 5 to 7 times from different people before you actually act on that information. And that's enough to kill people.

**Bridget:** [00:37:36] You know, I can definitely see that because living someplace where the tornado sirens go off, like usually the tornadoes aren't coming to your house, usually. Trevor, do you like go to the basement every time religiously when the sirens go off? Because I don't.

**Trevor:** No, I don't. I will say when I moved to Chicago and I first heard the 10 o'clock first Tuesday air raid siren, I was a little concerned about why I was hearing an air raid siren.

**Bridget:** But here it's Wednesday, first Wednesday of the month at 1 PM. It's Wednesday alert.

**Courtney:** I remember the first tornado sirens I heard when I lived in the Midwest, and I didn't live there long enough to stop obeying those things. They scared the shit out of me. But I was— I wanted to come back to this. I almost lost, kind of lost the thread of that in there because, I mean, kind of what you're talking about there is essentially alert fatigue, right? To a certain degree. And this is one of the ways the brain bites us too that we haven't talked about. But which is, it's really good at filtering information and developing patterns. And so if you have not bad things happen a lot, your brain basically starts to think in those certain situations. So there's the perceptual level of that, and that bubbles up into this higher-level kind of cognitive bias that you're talking about. But that's a little bit different than what you were asking, isn't it, Bridget? I mean, you were asking something a little bit different, I think.

**Bridget:** [00:39:04] A little bit. I mean, I'm mostly just interested in this general area and alert fatigue and just what you start filtering out is actually really important. Because I would imagine that a lot of people who are on call know that sometimes that'll page, but it's not really a problem. We just haven't quite got the alerts set right. Then you start thinking that things like that aren't really a problem. That can lead to all sorts of friction. I mean, I've had that lead down the path of like, well, we'll just adjust that alert because it's always alarming at this rate and It's like, well, maybe we shouldn't just adjust that alert. But I mean, the brain kind of doesn't want to be paged all the time, so it's tempting to say, well, maybe circumstances have changed and we should just up the threshold for that or whatever.

**Courtney:** What's your take, Lindsay, sort of on the current status of anomaly detection efforts in this world? Are you on the bandwagon?

**Lindsay:** Yeah, I guess I am. I was doing a startup up until, I guess, a month or so ago about advanced anomaly detection.

**Courtney:** Okay, that might have been a giant softball. But I'm just trying to get you to talk about it.

**Lindsay:** [00:40:08] Sure. Yeah, it's sort of funny relating that question back to what you were saying earlier about the people saying that, oh, we have an AI that does, you know, that works just like a human brain, because that's pretty much exactly what we had. We still have. But in all fairness, the thing that The thing that we had running was a— do have running. We're actually going to open source it pretty soon as well, which is going to be pretty fantastic. It's basically trying to replicate a lot of the stuff, the new discoveries in cognitive neuroscience in the last sort of 5 to 10 years in code for the pattern recognition side of the brain. So it's basically, you know, what we did was we built a bunch of different— we chained a bunch of different open source tools together and sort of added some dampening on the input and the output as well. And, you know, it's like having a basement full of college students that are just looking at a single graph all the time. And, you know, over a long enough period of time, they'll work out whether something that they're seeing on this particular graph is normal or abnormal. But we can do this with computers now, which is amazing. Like, the technology is actually available to us. And we just pieced together a bunch of open source stuff and added a nice wrapper around it. So, you know, there's really interesting work that's happening there. I think that, I think that it's become pretty clear out of different conferences like Monitorama and MONA over the last year or two that the statistical techniques that we use to do anomaly detection just simply don't work in the, in, you know, in a modern web operations world. Most of the statistical techniques that we have available to us, you know, focused around like data with a normal distribution and most of the, most of the data that you get out of things that happen in tech does not come from a normal or Gaussian distribution. So they've got limited efficacy. But there are still a bunch of different techniques that you can use that are sort of like nice low-hanging fruit there. Yeah, there is lots of interesting work that's happening on the AI side of things for pattern recognition.

**Courtney:** [00:42:29] Yeah, and that's— when you say AI things for pattern recognition, that's how I feel about it. A lot of what I see is people tell me they have these deep sophisticated AI systems And I'm like, that's some really good pattern recognition you got there, which is nothing to laugh at, right? Like, that's a very, very foundational thing of human cognition for sure. I mean, there's cells in your brain that are tuned to look at, to recognize like vertical lines versus like horizontal lines. I mean, it's a real thing. I'm gonna go back to the open source thing. Y'all should, you know, like announce that at Velocity or talk about it at Velocity maybe, don't you think?

**Lindsay:** Yeah, that's a good idea, actually. Well, I'm already talking at Velocity in Amsterdam, but I'm not talking about—

**Courtney:** I know. Not about that.

**Lindsay:** Maybe I can slot it. I know I'm going to do a DTO pitch at the end of it as well. So now I'm going to be pitching the DTO as well as the stuff that we're open sourcing. I'm not going to actually have any time to talk about the thing that I'm meant to be talking about.

**Courtney:** That's all right. We'll forgive you for that. But I want to go back to something that Bridget said early on, which was— or you said something like, oh, I hadn't really cracked the egg on getting a talk into Velocity. Which I want to poo-poo that a little bit because it's not like you have to be some kind of conference ninja to do that. But I thought it'd be interesting maybe for you to talk a bit about that experience. Like, you've presented a lot of conferences, you've talked a lot of places. What does it take to do a really good CFP for those kinds of conferences that this audience is interested in?

**Lindsay:** [00:43:52] Yeah, and I wasn't— it wasn't a criticism at all of Velocity before. I just think that what I was submitting back in the day was not up to scratch for the level that you would expect at a conference like Velocity. So I think my rejection was definitely well deserved. Well, what's underneath that?

**Courtney:** Why do you feel that way? I want this from you, not me as the organizer saying it.

**Trevor:** Yeah, yeah, yeah.

**Lindsay:** I think that part of the problem with— I think part of the problem with the talks that I was putting together before was that they were very procedural and very focused on the technical aspects of it. I found that I found that my talks started getting better received when I actually moved beyond just talking about tech and actually relating it to bigger picture things, like beyond tech. I don't spend any time really reading anything in the tech sphere. I don't read Hacker News. I spend not all that much time on Twitter. All the stuff that I spend time reading on is books or listening to audiobooks and whatnot about things like management, leadership, psychology. So I think I sort of found that by exposing myself to those ideas, I could actually relate the stuff that we're doing on a day-to-day basis back to those bigger concepts. And so, like, the DevOps Field Guide to Cognitive Biases is a blatant ripoff of Sidney Dekker's Field Guide to Understanding Human Error, right? But, you know, it worked. It's a really, really well-received talk.

**Courtney:** [00:45:24] There's nothing wrong with that.

**Lindsay:** No, and people recognize it. I mean, that's one of the ways that you have new innovative breakthroughs. You take a bunch of, you know, a good body of existing knowledge about a particular topic and then you add a small amount of variation to it and then it presents it in a completely different light and that gets people thinking about things in a different way. And by talking about the cognitive biases stuff, there's been a whole bunch of different other talks from other people doing really great and interesting research on that. So, like, you know, I don't know where I'm going with this. This is a long trailing sentence, but save me.

**Trevor:** So I've had the opportunity to give a couple talks now, but I still haven't quite figured out the CFP piece. Do I write the talk first and then write a CFP as a description, or do I get my— do I write my CFPs and then whichever one I like the most that gets chosen, I write the I write the talk for that.

**Courtney:** I think the answer is it depends. I think it really does depend. I don't know, what do you think, Lindsay?

**Bridget:** [00:46:32] I would like to meet these people who have time to write talks before they're on the plane. I mean, I'm totally— I totally opened Keynote already for the talk in London.

**Courtney:** Well done. Yeah, I mean, I mean, the way I look at it is, I always go back almost to— oh, now I'm forgetting his name— Scott Berkun's talk on how to give an Ignite talk. But he's basically said— this is in the context of Ignite, but I feel this way about anything else, to be perfectly honest, but in the more technical realm. You either give a talk about something you love, something you hate, or something you're very good at. And if you don't have one of those things chewing away at your brain, then don't submit a CFP yet, right? Like, wait until you have the thing you really want to talk about. The CFP for me is the proving ground of the concept. It's the way that you get some early feedback on the idea and your ability to convey that idea to other people in a very short period of time. So I'm more with Bridget on that. Like, I wouldn't advocate people go writing whole talks and then farming them around. Now, if you get lucky, you have a really good talk and then you have end up being able to give that talk in multiple places, that's a pretty sweet spot to get to. And there's, you know, that's not a bad thing, but that comes with a little more time usually.

**Bridget:** [00:47:52] Unless you change jobs in the middle of giving a certain talk, and then you have to change it. Not that that's happened to anyone ever.

**Courtney:** Nobody changes jobs anymore.

**Bridget:** The seasonal migration of sysadmins is still a thing.

**Lindsay:** The approach that I've been taking in the last, I guess, 6 months is I'll identify a topic that I think that I could turn into a talk that I'd give at a DevOps Days or a Velocity or something like that. Then I'll extract out one idea of it, and I'll make a 5 or 10-minute talk, and I'll shop it around at a bunch of the different meetups. We're actually really lucky in Sydney. I mean, I live about 120 kilometers— What, how's that, like 75 miles, I guess, from Sydney. So it's not entirely easy for me to get there. But the great thing about Sydney is that there are enough meetups pretty much every night of the week that if you're like a startup founder, you could absolutely afford to never buy yourself your own meal. So there's plenty of meetups that you can go to that are willing to— that want new and interesting talks. Like, so I don't do PHP at all. Like, I've hosted and been the ops lead on a bunch of really different big PHP sites, but I don't, you know, don't do stuff there. But the PHP community in Sydney with SydPHP, they're really happy to just have people from weird and wonderful backgrounds just talking about all sorts of crazy stuff. So I'll shop the idea around to lots of different meetups, and then that gives me a great sort of trial run for the different different segments. I take a lot of notes as well. I'll tell people ahead of time when I'm giving the talk at the meetup, I'm just going to stop at a couple of different points and I'm going to write stuff down because I— sort of like what a lot of comedians do, actually. You look at what Louis C.K. and Chris Rock and whatnot, they'll just come up with a bunch of different jokes and they'll just go sit in some sort of comedy club for an hour or two and they'll just read them off and they'll write notes. I'm trying to take that approach and I found that that that worked really well. Like, I gave a talk a couple of months ago now about continuous deployment of infrastructure, and it just sort of, to the majority of people, just sort of seemed to come out of nowhere, but I'd actually been practicing the content over about sort of a 3 or 4 month period. So start small, shop the idea around.

**Courtney:** [00:50:15] That's really smart.

**Bridget:** That's a really good point too, Lindsay, because as somebody who organizes meetups, we're always looking for speakers, So, like, people think, oh, I want to speak at Velocity, and that's great, but speaking at your local meetups and then speaking at smaller regional conferences is a really good way to practice your stuff before you're— and also get some video made of you so that when you do submit to Velocity, they have actual video to look at. Because, hey, if it's a speaker that the program committee does not know, has not seen any talks from, they're going to look at the video. And if you're like, Computer. I do computer. I will now read my notes. Then they'll be like, okay, we can't irresponsibly put this person in front of humans because they're not ready.

**Courtney:** Yeah, and it's, I mean, I think the other good point is like, as much as speaking on a big stage, a big conference is something that a lot of people think they want to do, it's not how you want to start. And I don't even mean that in the sense of it's not like a good thing to do. It's just, it's It's terrifying. I mean, it's so much better to find those ways to work up to it that it's— that you will enjoy the experience as you— if you move your way towards larger conferences much more if you have been hanging out in the local comedy joints first. I really think that is a very good point.

**Bridget:** [00:51:34] All right.

**Lindsay:** Last year, I did a talk at DevOps Days in Ghent, and I got asked to do it like 3 weeks before the conference. And I was so pressed for time. I just come back from the, from the States, from Velocity and from PapaConf, and I didn't actually end up writing the talk until 2 days before. And it was a retrospective of the last 5 years of monitoring, and that is possibly one of the most stressful experiences in my life. I sort of actually, in the level of stress that I was feeling in the preparation for that, was sort of equivalent to my youngest daughter when she was about almost 2, she had a really terrible fever and got like— she had febrile convulsions. And so she was completely knocked out and it took the ambulances like 30, 40 minutes to get here. And the level of stress that I was feeling in that preparation for that talk was equivalent. So it's not the sort of thing that I would ever recommend to anyone.

**Bridget:** That's terrifying. I'm really sorry to hear that. I hope your daughter feels much, much better now.

**Courtney:** [00:52:38] Yeah, we're all presuming that story turned out pretty okay, so.

**Lindsay:** Oh yeah, she's fine, she's fine, no problems at all, and the talk turned out okay as well, thanks for asking.

**Bridget:** I was at the conference, so I know the talk turned out okay. That was a good talk. Okay, so speaking of conferences, I feel like we could go on on this topic and on all these topics forever, But we are getting close to our hour here, so we should probably talk about upcoming conferences, events. We've got Operability.io coming up in London. By the time people hear this podcast, it might have already happened. We have a number of DevOps Days going on. Velocity New York is very, very soon. Courtney, you want to give us a little bit of info about that?

**Courtney:** Yeah, so that will be in New York City October 12th to the 14th. 14th, and I'm really excited about it this year. We've been expanding the program of the conference, or sort of shifting with the tides, as it were. So we're doing a lot more with security going on at that event, and we have sort of an all-day, one-track thing focused on finance industry, which should be very interesting. Yeah, and I'm, you know, there's still registration. Yeah, that would be great if people want to come. I think we can figure out some kind of a discount code that we can add along for that for you all to pass along.

**Bridget:** [00:54:05] Awesome. We could put that in the show notes. Thanks, Amy. Then, of course, Velocity EU is also happening. Lindsay, you said you're going to be in Amsterdam?

**Lindsay:** I am. I'm going to fly in for a couple of days and then fly right back out again.

**Bridget:** Nice. I will be there. I will actually be speaking at Velocity New York and Velocity EU this year. I'll get to hang out with both of you quite a bit. It'll be exciting. And let's see, we also have the very first DevOps Days Detroit coming up. Trevor, you want to tell us about the stuff that Stratton's been working on? I know he's helping those folks.

**Trevor:** Yeah, he's been helping them. It'll be November 11th and 12th, and our listeners can get a 10% discount with the code 80010.

**Bridget:** Where is Stratton? Stratton had other tasks and obligations. The hard thing here and why we had this screwed up thing right at the beginning is because it is, as it turns out, really hard to schedule a podcast with people in Central Time and Pacific Time and Australia.

**Trevor:** [00:55:10] Who knew?

**Bridget:** It was kind of a fun scheduling thing. Anyway, I think we have a couple other conferences we should talk about. Do you want to play the role of Stratton and just tell us about the other discount codes and whatnot?

**Trevor:** Sure. So, there's also DevOps Days Ohio in Columbus, November 18th and 19th, and you can get 10% off that conference with discount code arrested. There's also the Chef Community Summit, and you can use the code arresteddevops for 20% off your registration. The Seattle version is going to be October 14th and 15th, and it'll be in London November 3rd and 4th, and I will actually be there, and so will Matt.

**Bridget:** Awesome. And Lindsay, you were going to tell us that there are some other conferences coming up very soon that you were interested in.

**Lindsay:** Yeah, so, so soon that probably by the time you're listening to this, it'll actually have finished. But there's, there's the Automicon, which is done by the Heavy Water Ops folk. That's happening in Portland on September 15th to the 17th. So if you're in Portland, you should totally go to that. And there's about 15 tickets left last time I checked.

**Bridget:** [00:56:19] And I think HashiConf from HashiCorp is coming up too. So there's a lot of really good stuff coming up really soon. And then Trevor, you want to— let's see, tell us about— what else do we got?

**Trevor:** I think we got checkouts next, unless you've got anything else. All right, Lindsay, you want to go ahead and tell us your checkout The stuff that I've been reading is building on—

**Lindsay:** more recently, I've been building on the stuff that we're talking about here. But basically, if you can get your hands on Anything and Everything by Patrick Lencioni, who wrote The 5 Dysfunctions of a Team, I've just been binging on him the last couple of weeks. Everything is great. The 2 other ones are You Are Not So Smart and You Are Now Less Dumb by Dave McCraney. And as I mentioned before, anything by— or Thinking Fast and Slow by Daniel Kahneman. And what's the other one that I've been reading as well? There's another one. I'll add it to the list later. There's also QF32 by Richard de Crespigny, who was the Qantas pilot who managed to— well, within a team of people that he assembled, he managed to successfully land an Airbus A380 after the engine exploded. So that's a pretty interesting read, and he talks a lot about the team dynamics as well. So you should absolutely have a read of that.

**Trevor:** [00:57:41] That sounds really interesting. Thank you. Courtney, you want to tell us your checkouts?

**Courtney:** Yeah, so Lindsay checked my Kahneman checkout, which was awesome, so I'll just +1 that again. And then I'm a massive science fiction nerd, always have been, and I recently just finished and then got to meet, which was sort of like a total bucket list thing, I got to meet Ramez Naam. At O'Reilly's sort of Foo gathering, Friends of O'Reilly. So if you like brains and science fiction that's sort of frighteningly too near-term in a weird way, I highly recommend his Nexus series. It's a trilogy. That series of books is fantastic. And then through Mez, I got tuned into an old book by Neal Stephenson, which I don't know how I missed because I'm also a total Neal Stephenson junkie, called Interface. Interface. That one is really creepy when you want to think about sort of the weird intersection of neuroscience, brains, technology, and politics, which Lindsay can talk about. Sorry about that.

**Bridget:** [00:58:50] I've read that one. Interface is the one with like the presidential candidate or something?

**Courtney:** Yeah, but it was written in like the early '90s.

**Trevor:** Hmm.

**Courtney:** So I highly recommend going back and reading it again now and then freaking out and not being able to Honestly, because— and I didn't put links in here, but I'll give you a couple that you guys can include in the show notes. There's some crazy brain technology stuff going on now where people are laying layers of networked silk fabric onto people's brains and are actually being able to read signals without having to have invasive needles and stuff. I mean, it's just— there's stuff called neural dust that there's little sensors that they're scattering onto people's brains and then sewing their scalps back up. Fucking terrifying. So I don't know why I'm recommending that because now you all aren't gonna sleep, but then maybe we could all like chat in the middle of the night. And then what was the other thing? Oh, oh, totally completely random. I completely binge-watched all of Mr. Robot in like a week, and I feel really conflicted about that because it's kind of an awesome show and it's kind of also an awful show, and I haven't really decided which one it is yet. And then last but not least, I actually, thanks to the magic of computers and I am, got a discount code for Velocity New York and Velocity Amsterdam while Lindsay was talking, and it's arrested20.

**Trevor:** [01:00:14] So there you have it.

**Lindsay:** Awesome.

**Trevor:** Thank you very much. Bridget, you want to take your turn?

**Bridget:** Sure, absolutely. So lots of stuff to watch. I just actually realized that a movie I just watched this weekend is something that goes along with what Courtney was talking about. It's this indie film called Advantageous that is streaming on Netflix, and it's super creepy and weird because it's all about a future where you can have your brain transplanted into a younger body, and there's this woman who's struggling with providing for her daughter and trying to decide whether— and she works for the company that does this— and trying to decide whether or not she should do it. And then just dealing with all of the fallout from that. Super creepy, super interesting, lots of women with agency and characters of color, like, and no explosions. So it's sci-fi, it's creepy, it's interesting, and I actually liked it, unlike a lot of movies.

**Courtney:** Wow, that sounds amazing.

**Bridget:** Yeah, it's called Advantageous. We'll have a link in the show notes. So if you have Netflix, you should totally watch that. It's only 90 minutes long, and I was sad that it wasn't longer. So, and then also, if you want to watch some other awesome women while you're waiting for Velocity New York and Velocity EU, you can watch a couple of the keynotes from Velocity Santa Clara that I was actually just recommending today to my coworkers, my new coworkers on work Slack at Pivotal, because as it turns out, when you have expense reports to do, if you travel a lot for work, you want podcasts to entertain you during that time. Expense report time. And so the 2 keynotes that I was telling my coworkers about today are Laura Bell did the Securing Organizations Through Bad Behavior, and Astrid Atkinson, Engineering for the Long Game. Laura's in New Zealand actually, and she's a security startup person, and Astrid works for Google as a director of search. So it's like totally different perspectives, but very interesting. And this is the kind of awesome curated content that you will get if you go to Velocity. There's my pitch.

**Courtney:** [01:02:20] I'll pay you later.

**Bridget:** All right, Trevor, you want to tell us what you want people to check out?

**Trevor:** Sure. So I've been reluctantly using a Mac lately, and I wanted to just remind everyone—

**Bridget:** Is this because you got, like, there were a bunch of likes on Facebook and now you have to learn Go or something? What's going on with that?

**Trevor:** That was Golang, because we've got so many dedicated fans. They're in the closet with the Golang books.

**Bridget:** So, you're using a Mac? Awesome.

**Trevor:** So, I just wanted to remind everybody how awesome zsh is, and I'll put a link to it again in the show notes. I think it's probably the 3rd or 4th time it's been mentioned now. But I've had the opportunity to play with it and have decided it's fun. Also, the Azure SDK gems for Ruby have been updated to include the new Azure Resource Manager, so that's fun and useful for talking to Azure.

**Bridget:** [01:03:27] All right, sweet. That's about that. Okay, so we have a newsletter, arresteddevops.com/bananastand. It's the best way to know about upcoming podcast episodes and cool news with DevOps. We also have an iPhone app if you dig that kind of thing. So you can download it for free at arresteddevops.com/iphone.

**Trevor:** Thanks to our sponsors. Be sure to visit them at arresteddevops.com/10thmagnitude, arresteddevops.com/pagerduty, and arresteddevops.com/datadog. Thanks again, Lindsay and Courtney, for joining us tonight. And to our loyal listeners, if you enjoy Arrested DevOps, we would appreciate it if you would visit arresteddevops.com/itunes and leave us a review in the iTunes Store. We'd love to know what you thought of this episode. So, when the site— well, I guess this will already be live by the time this happens. So, go ahead and leave us a comment at arresteddevops.com/43.

**Bridget:** Be sure to check us out at arresteddevops.com or @ArrestedDevOps on Twitter. We're always happy to get your input, ideas, or feedback at shows@arresteddevops.com. Please let us know any ideas you have for future episodes. I think a great future episode would be getting Lindsay and Courtney back on here since clearly an hour is not long enough to talk to them. Thank you. Thank you both so much.

**Courtney:** [01:04:49] Thank you. This was a real treat.

**Lindsay:** No worries. It was a lot of fun.

**Bridget:** Nice. So I'm Bridget at Bridget Kromhout.

**Trevor:** And I'm Trevor at Trevor G. Hess.

**Bridget:** We're Arrested DevOps.

**Trevor:** And remember, There's always DevOps in the banana stand.
