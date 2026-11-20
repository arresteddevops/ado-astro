# Warping Expectations with Robert Sweetman

[00:00:00]



**Matty:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matty Stratton. Today we're gonna talk about expectations, how things have changed, and just maybe just generally riff about DevOps, because why not?

That's what this podcast is for. That's what all podcasts are for, is just conversation. So joining me for that is Robert Sweetman. Robert, uh, welcome to the show.

**Robert Sweetman:** Thanks very much. Yeah, it's great to be here.

**Matty:** Uh, do you wanna tell our audiences a little bit about yourself?

**Robert Sweetman:** I'm, I'm gonna put myself under the heading of, of basic DevOps engineer in the, in the classic meme version of basic. Um, yeah, I, I s- I, I was happily minding my own business doing project management for ages, and then I got [00:01:00] into this stuff because I was tangentially involved with a piece of automation, which was the world's longest PowerShell script that would randomly fail.

So my, my introduction to DevOps was writing, write host into PowerShell and going, "Let's see last night whe-which particular point in the time did it collapse into a pile of its own making?"

**Matty:** Yes

**Robert Sweetman:** um, as, as, as I suddenly noticed at that particular time, it was becoming a thing, and there was, like, big salaries attached to it.

It's like the next sexy thing. I was like, "Oh, okay. Let's, let's go off in this direction. That looks, like, quite good." Um, because yeah. And automation and having the memory of a goldfish really helps. and I was sort of trapped/inspired by watching... Oh, gosh, who is it? The guy, now I should remember this, doing videos about...

[00:02:00] So Jez Humble, his talks, and also, um- Jacob, uh, the chef guy, uh, whose name has now forgot me. Uh, yeah, legend. Like, I, like I loved his presentations. I was like, "That looks so much fun." Um, so that was kind of the, the hook that hooked me, and then there was... I've not, not managed to escape from Terraform since, although something, something, something not about tooling, I, I believe that is the, the thing.

So now we're all DevOps engineering the heck out of stuff and, um, standing up and doing things like that, and now AI has come and, you know, rained furious anger upon us possibly. Yeah, so that's me

**Matty:** I think when you talk about PowerShell, I- one of my, one of my favorite, like, early stories is the first time that I ever met Jeffrey Snover, who is the author of PowerShell, and we've had him on the show, and there's all sorts of great [00:03:00] stories

**Robert Sweetman:** Oh, cool

**Matty:** is I told him that I, that I sometimes found PowerShell about as readable as Perl, and he kind of was like, "Oh, you killed me."

And it's Maybe he's like, "What kind of PowerShell are you writing?" Maybe a little bit. I'm like, "Yeah, maybe, maybe

**Robert Sweetman:** yeah, skill,

**Matty:** a

**Robert Sweetman:** skill issue.

**Matty:** But, uh, yeah, I think,

**Robert Sweetman:** Mm.

**Matty:** we sort of think through, like, origin stories and, like, the lore and everything, I remember a very early episode of DevOps Cafe, which was a, one of the first DevOps podcasts I ever listened to and was kind of inspiration for, for wanting to do stuff like this.

And they, um, John Willis and, um, and Damon Edwards, they had Jeffrey Snover on. And the, the narrative arc of that episode is really interesting 'cause Jeff, you know, Jeff Snover is, like, distinguished engineer at Microsoft. I mean, like, all this awesome back-end stuff is what he created. You talk about the Monad Manifesto, all this stuff. And John especially, Willis, was very, like, anti-Microsoft. In the beginning of the conversation, you know, was a lot of la-da-da-da, and just sort of [00:04:00] watching the shift of, like, understanding. 'Cause this was also I don't know, 2011, 2012, when no one was really thinking about, like ... Like, all of the cool DevOps stuff was all Linux forward.

And, and there's a really

**Robert Sweetman:** sure

**Matty:** fascinating thing, and it's not so much true now because we have things like desired state configuration and, like, the, the ability to configure Microsoft stuff is better. But the point that Snover made was, and this was true, you know, 15 years ago, he said, and Unix systems are much easier to automate configuration because they are file-based, whereas Windows is API-based." So you can, when you are talking about a system that wasn't built from the beginning for automation, you can create pretty easy automation around, you know, a POSIX-based system, but with Windows, the APIs had to exist, and that's why he was really ... And we kind of can see over the years of what he was able to accomplish with getting us all of the right APIs and DSC and all the [00:05:00] things that let us do those things in the, the Windows world.

**Robert Sweetman:** Yeah. I mean, I, I did meet him and immediately, cut my own throat by making very disparaging comments about Linux at the time.

**Matty:** Yes.

**Robert Sweetman:** It's like, it's like, "Oh." And thinking about it, thinking back on it, I was like, "Well, maybe that was an idiot thing to say." So, uh, you know, we... I think we've left the, the, the... I don't know.

I, I, I think we've left that Linux versus Microsoft thing behind, and now we're AI versus not, or some

**Matty:** We just

**Robert Sweetman:** version of that in between. It's now the l- the next thing is this, or, you know, don't rewrite it all in Rust is the other,

**Matty:** Right.

**Robert Sweetman:** that's going on. Who knows what, what, you know? Yeah. It's, it's, there's always a campaign somewhere in the background.

Somebody's got a flag and they're running around.

**Matty:** Absolutely. We, we

**Robert Sweetman:** and that's fine, you know? Yeah.

**Matty:** when, when we think about this idea of expectations, and [00:06:00] so much around, you know, we love to talk about DevOps is the tools are the fun part. We, we love to talk about tools. We just sat here and riffed about it for

**Robert Sweetman:** Yeah,

**Matty:** and

**Robert Sweetman:** exactly

**Matty:** as I'm fond of saying, the tech is easy, the people is, are hard.

**Robert Sweetman:** Oh no, the people is the,

**Matty:** Yeah.

**Robert Sweetman:** it's all there is really.

**Matty:** talking about this, you know, how

**Robert Sweetman:** Yeah

**Matty:** know, later. But when we think about, you know, you, you had said when we were talking about what we wanted to mention, you know, had talked about on this show, you had said talking about warping expectations, and I kinda

**Robert Sweetman:** Oh

**Matty:** love that word. It's not about changing expectations, but sort of warp has a, a, a weight and, and an implication to it. And so can you tell me a little bit about what, when you say an expectation warps, like what are, what are you thinking about for that?

**Robert Sweetman:** Yeah. So I'll, I'll get to the, I'll get to the, I'll get to the answer. But if you think about, um, how projects have been delivered, we've gone from, you know, big [00:07:00] design up front. You have a document and then six months of work, and then maybe it comes out the other end. And then you've got-- we've gone to Agile, which is two weeks of work, and I'm pretty convinced that Agile now is a big set of work in two-week chunks and has got nothing to do with business value at all, as far as I've seen it often.

And now we have this sort of third party in the mix of, of large language models where you, you can almost ask any question and certainly some of them, there's so much confirmation bias handed to you in an answer, right? So formally, you would be asked by a project manager on a particular project, "Right, how long, how long do you think it's gonna take to deliver X?"

Right? Whatever it happens to be. And [00:08:00] if you're s-- if you're smart or if you've got a bit of experience, you can give some sort of, some sort of like a, like a, a target with some caveats and then decide, right. Well, if we hit these beats, we have to hit these beats approximately these times with these known obstacles to achieve this outcome here, right?

And then somebody can take that, walk around the business and say, "Right, it's gonna take this..." But you're the person being asked, right? As the engineer, as the technical person, and, you know, from an agile point of view, you've got a project manager or delivery manager or somebody whose main job is to keep everybody out of your way so you can get on and, and do the work, right?

I'm sure this has happened whereby Given the leverage [00:09:00] and the sort of validation of AI in this whole new business process, somebody has turned up on a project and they've been said, they've been told, "Right, you do-- you're gonna do these things. You've got this much time," and they haven't been involved at all in the conversation about how long it might take them or not, right?

And the person doing that, they're, they're absolutely fine, right? They've, they've put it in the sausage machine at one end, and then they've got their project plan out the other end, and that is... has a legitimacy now in their eyes. Same thing as at a s- at a much smaller scale. You know, I'm sure some-- it's happened, you know, with, "Right, we need to implement this.

Here's two pages. This is how you do it. You go into Azure, you press these buttons," and you look at it and you know, v- you [00:10:00] know, within about three minutes th- none of this is real. Like n- this does not exist in this UI. This doesn't exist here. you know, but, but that, that artifact is now in the eyes of the person who created it, absolutely valid and now you're, you're being difficult for turning around and going, "Well, it's not quite...

doesn't quite work like that," right? So to your point about people and there's a project management quote, which is basically, "All the problems have hair on," or not in my case, but, you know. Um, that's the issue. So we can be very excited about the s- the sort of flattening of the, of the technical requirements.

You know, we've all got access to these amazing tools now. So y- y- you know, you can say that [00:11:00] possibly brings up people's abilities and then, you know, in some cases can really have yourself shoot yourself in the ankles. But i- in the mo- in the main, you now have, you now have backup, you have something that you can, you know, bounce ideas off of.

And if you're, if you, if you're, you know, paying any attention, you actually want references to what you're being told. Like, "Give me the lo- the link for, read the documentation of," so you're not just taking it on faith. Like, "Oh, the black box has spoken. Okay." Um, but So that's great, but now it becomes a bigger challenge with all of the people involved because management, for want of a better word, has the understanding that everything should be quicker.

You have this amazing tool at your disposal, but the job now becomes [00:12:00] trying to keep-- catch the people up to the velocity of what you can do with the code. And I don't see a lot of evidence of, of the appreciation of that because if you look at, if you look at a particular... You know, here, here is a... I mean, I'm pulling a complete example out of my head, but like, you know, move, moving something from on-prem to on the cloud somewhere, right?

On the face of it, it's just a technical challenge. And in actual fact, it's got nothing to do with that because what's the machine? What's the access? Who's put the password? You know, all of these other things there. What are we gonna do with the networking, naming conventions, all of these things. They are still the same.

They still take no... They are not getting done any faster. You maybe just, you can deploy Terraform faster or whatever round and round. You can go around the [00:13:00] loop quicker, um, and get yourself in the right pickle as well, but that's another topic. Um, so you can, you can go through the, the, the loop a lot quicker, but all of the pieces which I would say now you as an engineer are responsible for, are starting to be all the things you might have been trying to avoid doing as an engineer because, you know...

I'm stealing this line from Jez Humble, but no-nobody becomes a programmer because they want to talk to everybody,

**Matty:** Right. Yeah.

**Robert Sweetman:** So that whole human and sort of organizational navigation piece is not a technical problem, it's a social one. So that becomes more obvious or it, it, it highlights issues really quickly with organizational maturity, the actual organizational [00:14:00] culture.

Do you know who to go to ask for anything, you know, at all within the business that is the owner of that role's responsibilities? And is there a way of finding that out? Because you can't ask, you know, you can't ask Claude. So

**Matty:** And,

**Robert Sweetman:** you, you--

**Matty:** even if you do have your, your Claude or whatever sort of wired into your Slack or things like that, it's not always the most trustworthy. I, I asking, you know, our, uh, an AI agent internally a, a while ago about... I was trying to figure out who was basically the product owner of something, and it, it, for all pract- it, it came up with someone in marketing. And I was like,

**Robert Sweetman:** Okay

**Matty:** person." It was a coworker of mine, and I'm like, "I guarantee she is not the head engineer." And not again- not that she couldn't be an engineer, but I'm like, "She doesn't have anything to do with that." And but who knows how it inferred

**Robert Sweetman:** Sure.

**Matty:** that came. So you, you, you

**Robert Sweetman:** Mm-hmm.

**Matty:** something, and, and I recorded an episode yesterday with Katie Kodes, and we, we were [00:15:00] talking, it's, the episode is called Griping-as-a-Service.

I think it'll be published before this one, so y'all can go back and check it out. But one of the things we, we talked about, uh, and that I've found, you, you, you, you alluded to this, is sort of the citation needed thing when you're working with an agent. And I, I do that in a lot of things where I, I, you know, my system prompts are built around saying, "You need to back it up," right?

Explain to me why, whether it's coming from docs or a project plan

**Robert Sweetman:** Sure

**Matty:** an architectural diag- Like, don't just tell me something on faith. Show me your work. I want citations. And that, that helps, I mean, I think The agents and stuff have gotten, models have gotten better about hallucinating, but it can still happen.

I mean, we as

**Robert Sweetman:** Yep

**Matty:** like, we, I mean,

**Robert Sweetman:** Oh man, mine's shocking.

**Matty:** we just called it, you know, like, I don't know, my memory is

**Robert Sweetman:** Yeah

**Matty:** thing. I might... Someone says, "Who is the, you know, the, the sys- the s- you know, the SRE for this particular thing?" And I'll be like, "Oh, it's, it's, it's Sally."

And they're like, "No, no, Sally moved off that project two [00:16:00] months ago." And I'm like, "Well, I didn't know that." So my memory becomes stale and, and such. So being able to, to cite to that. I, I was trying to find if you had saw it on an earlier, when, uh, if you're watching on video, where I was looking down. I was looking on my phone because I saw, I think it was a tweet.

If I can find it, I will reference it in the show notes. And I wanna say it was Gergely from Pragmatic Engineer. I d- never know how to say his name. Um, but it was something to the effect of, like, we moved off of Waterfall because the problem was the planning process took so long that by the time we were done doing it, everything shifted.

My, my favorite reference to that was when I was at apartments.com, we were doing a site redesign and it, it was in Waterfall. At the beginning of the project, Google Chrome did not exist. By the time we launched the, the, the redesign, it was 85% of our traffic,

**Robert Sweetman:** Right. Okay

**Matty:** with the accelerated development, is that no longer the case?

But to your point, on, on, on the surface, one would think so, but these things still take the time [00:17:00] that they take, and what you don't see when you're doing a big Waterfall plan, what that doesn't have built into it is all of the, wait a minute, at the beginning of this, we thought that, you know, migrating this database would be, uh, you know, practically a no-op, and then you're like,

**Robert Sweetman:** Mm.

**Matty:** Postgres 17,"

**Robert Sweetman:** s-sure. Yeah, yeah.

**Matty:** You know.

**Robert Sweetman:** Yeah

**Matty:** and so those bigger project plans, they, they look in a certain way, but they don't take into account the paper cuts, the, the, the stumbles, the things that can happen, um, if you're, and then if you're, you're tied to all of that.

**Robert Sweetman:** Yeah. We- we've, we've developed the, the ability at a technical level to move really quickly now, right? So you can go, if you're... Let's say you're doing the application on top of the infrastructure, so you're doing the thing that is being deployed on, you know, app registrations or something or whatever. [00:18:00] You, you can do that bit really fast, right?

And even as a, as the developer, you know, you, you don't have the need necessarily if you have direct access to the... Like, if it's an internal thing, like, if you have direct access to the primary consumer of it or something, you can just go to them and say, "Right, here's the latest," you know, "What do you think?

Okay, you wanna change that, you wanna move this." You know, just put it in and then come back two hours later, you've redeployed it, and you talk through it again, right? So you've, you've cut out, in some ways, the ability or the, the necessity for product ownership or, you know, this, this life cycle of let's hand it back to the, the target audience and have them digest it, and so on and so forth.

It was really f- you know, it's phenomenal. but again, you're sort of contributing to the extreme time crunch around delivery. And [00:19:00] now the problem with expectations is it's out of the bag, right? Now that's the-- Now that is what is supposed to happen for this app, the next app. Now, it might be, and it might be great for something which is fairly, fairly straightforward technically, but you appreciate that that is the difference.

And then this, say, this other ar- you know, massively large and integrated piece of work comes in and it's like, "Right. Well, um, you... That one, we did that one so fast." It's an app, right? That's the assumption. You know, we've forgotten all of the other things in there about da- you know, the... It's, it's more sensitive data.

It's got more sharp edges. ev-anytime you talk to anybody who's doing, databases or data science, they've hidden the fact that the, the thing's been cleaned seven hundred times before the data is of any use whatsoever. You know, it's like, "Oh, no, it's, it's in a, it's [00:20:00] in SQL, it's fine." It's like the, the struggle to get there is an epic journey of pain and disaster, you know?

So, so again, the difficulty with all of this is once you've set an expectation, right? So- The target of a particular deliverable on date and so on has been set. And given we all have this massive lever to pull on now, it is kind of now assumed that, okay, the technical stuff is s-fine. We need to steward it through.

But what we've not still-- we're still not doing, I think, well is, the flexibility around discovering things in the process of the delivery, which will absolutely kibosh the expectation. And the, again, uh, and I'm, [00:21:00] I'm gonna generalize, but at an executive level, right? You've told the-- somebody that they can get a lollipop in, you know, six weeks, and if you wait until the day before to tell them they haven't-- they aren't getting their lollipop, they'll lose their minds, right?

So we come back again to the whole thing about culture and collaboration, where I think we're gonna have to all, and it's a difficult one 'cause it requires a sort of collective, improvement, get better at acknowledging reality, get better at being disappointed, get better at managing the, the emotions and disappointments and so on of others.

I mean, one of the things from, what should exist in, in ag-agile and sort of DevOps culture in general is like, it should be a s-a safe space for def-- you know, [00:22:00] failures and stumbles, right? But we, we've, we've now... Again, we always focus on the tooling 'cause it's fantastic, but it doesn't have the sharp edges that having to go to somebody and say, "You know, we've discovered this in the process of getting here.

And so the thing that you are expecting in this particular amount of time isn't going to be achievable." And the-- And what we want from everybody involved in that conversation is for them to not, you know, start swearing and throwing-- threatening to, you know, throw you off a building. which of course, in some organizations is fanta-- is, is, is great and everybody gets it.

But, um, we come back to, you know, sadness is basically you had an expectation and it wasn't met, right? Are we very good at dealing with that at, at the moment generally? 'Cause everything's in like, you know

**Matty:** [00:23:00] the, that expectation being unmet or changing or warping, um, affects our work, right? You know, so, like, thinking about your example, like, the classic in the head is always like, "Well, the salesperson promised this feature on this date," so...

**Robert Sweetman:** Yeah

**Matty:** but there's more than just that because we think about marketing, right?

You know, and this is for myself, you know, sitting in DevRel and marketing and stuff like that, if we have a launch coming, we are doing a lot of that work. We have a lot of work that we do while the feature's still being developed and saying, "Okay," and we're, we're t- we're all, you know, everybody is, is busting their butt to, like, hit that deadline 'cause the, it's all aligned to that.

And then if you sit there and it, it can be frustrating, and it's not limited to that. There's people in engineering and, and other places where this happens where you're like, "Oh my God, so I, like, killed myself over the last three weeks to get this demo re- to do all of this stuff because it was going on this date, and now you're telling me it's gonna be six weeks later. So why did I..."

**Robert Sweetman:** Yeah

**Matty:** And, and what that, all of these things come [00:24:00] down to, though, is again, the good old DevOps principle of empathy and communication, right? It's, it's... And the, the thing is, we don't like to communicate. Like, we, we, we wanna wait till the l- very last minute to say we're not gonna hit a, hit a deadline.

We're gonna try to

**Robert Sweetman:** Yeah

**Matty:** it, and then you get to that 11th hour and you don't do it. But being able to communicate early and, and being in an organization where that has that safety to be, the psychological safety to be able to say, "Hey, we're not there." But I know for me, if engineering and product comes to me, let's say the launch was supposed to be four weeks from now, and then they're like, "You know what?

I, I don't think we're gonna... Uh, maybe we'll make it; maybe we won't. I don't know." I'd rather have that and

**Robert Sweetman:** Oh, sure.

**Matty:** up versus the, "As far as I knew, it was tomorrow, and now you're telling

**Robert Sweetman:** Nah, it's not tomorrow.

**Matty:** it's

**Robert Sweetman:** There you go, you see.

**Matty:** I w-

**Robert Sweetman:** Yeah, exactly

**Matty:** was up all night last night, you know, writing this last bit or this change.

So the m- You know, I've, I've, [00:25:00] uh, anytime I'm, like, teaching a team how to work with me when I have a new team or something, I always say one of my jokes is that everything is a DevOps problem to me, right? It all comes down to so much of the principles of DevOps are just organizational and human collaboration and culture, and it's about how do we communicate better with you?

How do we

**Robert Sweetman:** Yes

**Matty:** And interesting how in some ways maybe with sort of the agentic age or whatever, we're actually getting worse at that because

**Robert Sweetman:** Oh

**Matty:** more enabled to be armies of one, and I can just go do and whatever and just throw it up there. I mean, one, we, we've been quoting Jez all over the place, so I'll throw another one out.

One of my favorite Jez Humble-isms is, control is a communication tool for developers." And now is it? Right? Or is it a

**Robert Sweetman:** No

**Matty:** for your robots, right? You know, 'cause it

**Robert Sweetman:** Yeah

**Matty:** things like PR, that's, that's how we could know what was going on and what we were doing. And, and now [00:26:00] if it's all just sort of, yes, it's happening, but they're just checkpoints, we're not necessarily communicating.

And sometimes maybe the problem is that these, agents and stuff are too verbose. I don't know. This is my problem is, like, I'll sometimes

**Robert Sweetman:** I mean, that is a thing for sure

**Matty:** and I'm just like, "Did you have to write the Great American Novel to tell me that you, like, the version on a library?" You know, I

**Robert Sweetman:** Ja

**Matty:** but also TLDR, man, right? You know, like

**Robert Sweetman:** Yeah. There's a fine line between, you know, 200-- a 200-file PR and going for a long walk to think about your life choices, right? I mean, that is kind of what's happening across the board because somebody will produce something. We've all got issues with scrolling and looking at phones and, uh, you know, we can-- we-- Our, our, our, our attention span is literally like, eh, that's it, right?

So somebody sends you that, [00:27:00] and are you going to wade through it or are you going to give your own agent, "Summarize this, please, for the love of God," you know?

**Matty:** some of that is, and I'm guilty of it, is the blessing and the curse of, like, having my Claude connected to Slack. Because there'll be times I'm working on something and I'm like, "Okay, I just need to ask somebody a question," and I will occasionally let Slack send the message, and I almost immediately am following that up with my own typing.

Because sometimes I'm just like, "Okay, this was... For all practical purposes, this

**Robert Sweetman:** This is a terrible idea

**Matty:** the things I need to know." But I think it's

**Robert Sweetman:** Yeah

**Matty:** borderline disrespectful to, like, be like, you know, the same thing. It's like, well, you couldn't be bothered to write this. Why should I read it? Where, so

**Robert Sweetman:** A little bit, yeah

**Matty:** yeah, I'll sort of say like, "Hey, here, I have a question. Fair warning, I'm about to let my agent dump on you because it's just all there." But more often than not, you know, but a lot of times I still would rather just sort of retype it anyway and say like, "Okay, what's the parts?" Unless sometimes it'll be, like, a long thing with, [00:28:00] like, some very

**Robert Sweetman:** Sure.

**Matty:** technical question, and I

**Robert Sweetman:** Yeah,

**Matty:** to be able to be

**Robert Sweetman:** that's fine

**Matty:** "Hey, watch for a reply, then you can move on."

But I, I feel like it's important for us to, like, still communicate with each other as humans, you

**Robert Sweetman:** I think it's, it's gonna become, it's gonna become the thing, one of the things that will start separating people out. The other one will be fundamentals, right? So I mean, it's... As I said, it's great to have an amazing lever, okay? But you can know the difference between somebody who really understands networking, right?

You can't, you can't-- I still think at the moment you really do have to know your subject because you need to know what good looks like, right? 'Cause you give two people the same, you know, task to [00:29:00] deploy something onto whatever, and you can immediately tell still, thankfully, who, who knows more about what it is they're trying to achieve, right?

So you're gonna, you're gonna be relying on the fundamentals still, and your ability to communicate will set you apart in, in this whole thing, whether it's written or not. But I think also so many issues can be solved by having a actual conversation. Asynchronous comms is great, but there are a non-zero number of issues with deploying stuff into an environment where you need to know the answer, and having a conversation with somebody gets you a better answer,

**Matty:** Yeah. And some

**Robert Sweetman:** So that's, that's another, yeah

**Matty:** that rubber ducking a little bit, and sometimes not just rubber ducking, it's just collaboratively, right? Like, our two brains together are more than two brains. They're, [00:30:00] you know... And, and I think when you talk about the fundamentals, this, this continually comes up because you can be very effective with these tools if you understand first principles of a lot of things, for lack of a better way, or like you said, the foundations.

You know, I can sit there, I... You know, listeners are tired of me giving this example, I'm sure. But like, you know, I built a, an internal app that we use in marketing, and like you would look at it and it's probably the most battle-scarred, bulletproof op- It is a heavily operationalized, you know, it... There's, there's, you know, two decade, two plus, how many decades of CIS admin bleeding all

**Robert Sweetman:** Okay.

**Matty:** about how it

**Robert Sweetman:** Right, right

**Matty:** I'm me.

But, but the part of it is, like, because I, I was able to build that, like some of it could I have code- Maybe I could have, maybe I couldn't have, some of the, the coding. But because I knew the things that I wanted to exist. You know? Or c- like if I already know something

**Robert Sweetman:** Mhm.

**Matty:** okay, I need a pre-signed URL for something here, right?

Like, I know enough to say that's a, that's a thing [00:31:00] that I want to get at. And, and again, I was sort of talking about this on the episode I recorded yesterday where I wonder if some of this even comes through subconsciously. Like, some of the, the, the way that these, the, the way that I build things with an agent, my personality comes through because of the things I push back on, the things that I'm not even consciously thinking about because of my...

And so we go all the way back to it and it's like, so that's fine, but how do... The way that people got those principles and foundations

**Robert Sweetman:** Yes.

**Matty:** working on bullshit work and, and, and, and little things, and working with senior people and everything. And, I think one of the things, and this is true whether you're, you're new to the industry, if you're a new pr- or just it's a new thing, I always really like to tell my LLMs, I- I'm all about explain like I'm five.

Like, when I'm bringing something, it'll come in and I'll be like,

**Robert Sweetman:** Oh sure

**Matty:** there's an idea I don't really understand." I'm like, yes, it would be more expedient just to say, "Just go and run and do it." And, and yes, there [00:32:00] will be times I will do that 'cause I don't have time. But oftentimes I like to say, "Okay, how can I learn a little bit more about Astro?" You know, rather than just say, "Go, go rewrite my whole website in Astro." I could do that. I could try to one-shot that. But I'm like,

**Robert Sweetman:** Yeah

**Matty:** the decisions. Like, where are you coming up with that? Let me push back. Let me why. And that goes back to that site where it comes from. So there's opportunities for us to learn by building this way. But it doesn't come for free, and it doesn't come by default, and we have to have intentionality around it. is

**Robert Sweetman:** Yeah

**Matty:** it also slows you down. 'Cause sometimes you're just like, "Well, shit, I gotta get this out the door," you know?

**Robert Sweetman:** Yeah. I mean, that's-- There's this phrase my grandmother used to use was hur-hurry up and wait, right? So, so it's-- I think, I think there is, there is a, a, a, a place in there for [00:33:00] sort of trust but verify. And if that involves having to take a beat... 'Cause remember, right, you can say some, some tasks now, you know, it's a two-week task, it now takes two hours, right?

**Matty:** Yep

**Robert Sweetman:** You have time to-- And you should take that time to just like, right, have a think about what it is that is being done here because you will get your sand to you if it comes and bites you later

**Matty:** I think we have to f- I was just thinking, I, I kind of did this a little bit by accident over the last couple days now that we're thinking about this. We have to be opportunistic about it. And it's a little bit of

**Robert Sweetman:** Mm.

**Matty:** about the, the compiling, you know, whatever. So

**Robert Sweetman:** Oh yes

**Matty:** example, so there are times when maybe you're working with the agent and it's off doing so- something is happening that's gonna take several minutes.

That is a great time to [00:34:00] say, "Well, as long as we're waiting, explain this to me some more." You know?

**Robert Sweetman:** Sure

**Matty:** running the test suite on my marketing app takes seven to eight minutes because this, back to my point, this is our internal marketing app and I think there's 7,000 tests in this app, right? Like it's,

**Robert Sweetman:** Okay

**Matty:** is, it is...

I, but, but part of that is built so that we can, and I've, I've written about this, is that there are people in my marketing group that work on this with me that are not engineers by trade, and they can very safely work with Claude

**Robert Sweetman:** I mean, that's great.

**Matty:** stuff 'cause we've built

**Robert Sweetman:** Mm-hmm.

**Matty:** of the things that we've been talking about with DevOps for the last 15 years.

Like all the guardrails, all those things

**Robert Sweetman:** Yeah

**Matty:** to safety science, they all apply to agentic development to allow it to be able to say, "Hey, not the hardcore engineer, but I can push a PR up to fix this part of the interface that bugs me. But I can..." It goes all the way back to like when we think about as code, right?

Like, if I care enough, I'm gonna write a test and then you can't get past my test, and then I can feel safe. So,

**Robert Sweetman:** Yeah[00:35:00] 

**Matty:** but anyway, if you're building those things in, there's plenty of times, and maybe the answer isn't while I'm waiting for this agent to go and it's running the test suite and that's gonna take seven minutes, don't spin up another agent to go do something else.

Like, hey, maybe, maybe take a minute. You got a second. Learn something, you

**Robert Sweetman:** Yes. I think, I think that is a key thing. You've got, you've got space and, you know, time now, and you know, it's a bit of a meta point, but all of this stuff was, was kind of in, from a science fiction point of view, allegedly here to usher in this sort of, um... Especially science fiction from the '70s.

Automation is, uh, here to usher, usher in this sort of utopia of leisure and, and all it's-- what it seems to be doing is allowing us to run an even faster pace,

**Matty:** Right.

**Robert Sweetman:** right? So, so how, h-how and why is that? Is that the expectation now? We're gonna, you know, capitalism max this to death and

**Matty:** now, now

**Robert Sweetman:** do like-

**Matty:** take it back. No, you [00:36:00] know what you need to do while the damn thing is running for

**Robert Sweetman:** Mm-hmm

**Matty:** minutes? for a walk. Or, or unless learning the thing is helping you. That's, I guess that's

**Robert Sweetman:** Sure.

**Matty:** down to, is when

**Robert Sweetman:** Yeah, yeah

**Matty:** some additional time, the idea is, like you said, is not to capitalism max it, but say like, "How can I get... So while this robot's doing that thing, it helps scale my labor so that it doesn't replace it. How, what, maybe learning is a helpful thing I can do in my time. Maybe going and walking my dog." I mean, I, continually am told, like, uh, I had to kind of chuckle because I like connecting to my computer, like I'll SSH to my computer from my phone so I can check in on agents when something's running, and

**Robert Sweetman:** Mm.

**Matty:** we've done, I can't do that anymore easily 'cause my machine

**Robert Sweetman:** Ja

**Matty:** locked down.

And I was k- additionally complaining about that, and most of my teammates were like, "Uh, no, no, no. This is good. You need to stop doing that." Like, if you're gonna take... 'Cause I would

**Robert Sweetman:** The, yeah

**Matty:** I'm taking my dogs for a walk, I can be working on this." And everyone's [00:37:00] like,

**Robert Sweetman:** I, yeah, I, I get it and it's, it's ridiculously tempting but, you know, we, we, we are... It will, it will wait. We, we are, we are still, you know, seeing massive payoffs from having the facility to do that. but at the same time we have to be the ones, learning how to manage the people above us, you know, the people below us around what is, what is, you know- Gonna be sustainable long term, not lead to burnout, you know, all of these things allow somebody to come in and, and be like, "Yeah, I've got these three challenges today, and none of them are gonna kill me," rather than 10 of them, and I've gotta get them all done and, you know, all of that.

So, so there's a huge job associated with [00:38:00] kind of, again, keeping, keeping all of the balls that we now have... We've got 10X number of balls in the air, right? And ultimately, the job has always been about y- you know, doing, doing something that gets the business something back, and you can be hella busy and achieve none of those things.

And that's another sort of progression in this thing, which is if you have the ability to go to somebody and solve their problem directly, obviously within the, the framework and the policies of the organization and everything else, then fantastic. You know, why not do that? You have the ability to do it now.

conversely, there's an awful lot of stuff being created which doesn't do much, right? It's fantastic, but it doesn't actually do [00:39:00] much, because now we can just create it immediately. Like we haven't thought about does it need to exist first even? Um, do we need code for this? Maybe we just get these people to talk to each other,

**Matty:** Yeah

**Robert Sweetman:** you know, on a, on a more regular basis or something crazy and, and, you know, 19th century like that.

So, um, yes, with great power comes great responsibility is, is the... But it is all yours, right? Or you can sit there like a potato and

**Matty:** try to... You

**Robert Sweetman:** yeah

**Matty:** need to unwarp your expectations for yourself as well, maybe

**Robert Sweetman:** Effectively, yes.

**Matty:** on. Yeah.

**Robert Sweetman:** You know, the thing that, that makes your... In, in general, if you, if you're ha- if you want your life to be happier, then the job is to teach everybody how to treat you, right? And in, in work, that's very true, right? Do you wanna be

**Matty:** yourself how to treat you. We were...

**Robert Sweetman:** that's always a good start too. But yeah. [00:40:00] Then, then you can extend it, but in the first place, you have to be nice to yourself, and that's where we come back to.

**Matty:** Pilot with

**Robert Sweetman:** Mm.

**Matty:** So on that, um, by the way, I did find the tweet I was thinking about, about Waterfall in the age of AI. I'll put that in the... The link to that'll be in the show notes, which you can find at arresteddevops.com/warpingexpectations. And, uh, you can find all the places to listen to our show at arresteddevops.com/subscribe. Robert, thank you so much for joining me today. This was, so much to think about, and, uh, as always, spurs off new conversations, and listeners would love to know what, what you think of the, this episode, any questions you might have or, or things you think about. Find us all on the socials. So thanks so much for joining today, Robert

**Robert Sweetman:** Thanks, A. It has been, it's been great. Really interesting

**Matty:** Yeah. This is Arrested DevOps, and remember, there is always DevOps

**Robert Sweetman:** In the banana stand

