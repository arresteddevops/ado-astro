**Bridget:** [00:00:00] We, we need to yell a little bit less because I guess it's causing a problem in the next room.

**Bryan:** It's in the title, it says yell!

**Bridget:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Bridget— I can't say my name. I'm Bridget Kromhout, and with me today—

**Matty:** So, I'm Matt Stratton. Today we're talking about things that suck in the cloud, or the history of DevOps, or just basically listening to Andrew and Brian talk. So, the show notes for this episode can be found at arrestedevops.com/yellingatcloud. But first, A word from our sponsors. Arrested DevOps is brought to you by Tenth Magnitude, a company that figures if you're listening to this podcast, you must be pretty cool. Tenth Magnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/tenthmagnitude.

**Bridget:** [00:01:19] This episode is brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 120 common infrastructure tools such as Chef, Docker, and AWS, so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog.

**Matty:** This episode is sponsored by VictorOps. Built for modern incident management, VictorOps provides a unified platform for real-time alerting, collaboration, and documentation. Driven by your IT and DevOps system data, VictorOps helps you to respond to incidents more effectively so you can minimize downtime and make being on call suck less. Visit arresteddevops.com/victorops to schedule a demo or start your trial. Mention you heard about VictorOps on Arrested DevOps, and you'll be eligible for some sweet discounts too. So joining us on this panel, first we've got Andrew Clay Shafer. So Andrew, you want to tell people about you?

**Andrew:** [00:02:25] Yeah, I'm Andrew Clay Shafer. I'm here in Chicago having a good time. I just watched Brian give an excellent talk. I've been doing cloud-related, computer-related stuff for about a decade. And before that, I was a grad student. I studied math and that kind of thing until people paid me to do computer stuff. So here we are.

**Bryan:** And I'm Bryan Cantrill. I've been shooting my mouth off for way too long.

**Bridget:** Okay. The fact that we did get you to come do this immediately after your keynote tells me that you probably are maybe a little bit more extroverted than most.

**Bryan:** Ooh, that's a good question.

**Andrew:** It's a mode.

**Bridget:** Because I think a lot of people after they give a talk—

**Bryan:** Yeah, that is exactly right.

**Bridget:** You're just, you're still in the mode?

**Bryan:** No, I think—

**Andrew:** He's basking in the afterglow.

**Bryan:** Well, but I do think that, no, I think that one of the things that I've definitely learned is that personality, there are very surface aspects of personality and much deeper aspects of personality. And your ability to actually like get up and talk in front of a bunch of people is a very kind of surface aspect of personality. And I'm actually— you're right in terms of like, I actually need— I am really, really looking forward to being in an aluminum tube and shoved across the country for 3.5 hours because I don't have my kids, I don't have my wife, I don't have— I love them dearly, but like getting some time, like that's like me time. Being jammed into an overhead compartment qualifies as me time.

**Andrew:** [00:03:54] We've all been there.

**Bryan:** Yeah, exactly.

**Bridget:** Hashtag life choices.

**Bryan:** Yeah.

**Bridget:** All right, so the reason that we're chatting with you 2 folks in particular is I feel like you both have a lot of perspective on this whole, you know, here we are, it's 2017. I don't know about you, but I keep being surprised at the date. Like, it's very surprising to me, a little shocking. It's still— it's not the '90s anymore, which I'm glad we don't have to write checks anymore because I would never get that date right.

**Bryan:** Yeah, if you had a kid jacking your deodorant, you'd be less surprised about that. Things begin to make more mathematical sense. Yeah.

**Bridget:** But so we are in an era of increasing change, and both of you have a lot of perspective on where we've been. So I guess I'd like to start there. How exactly did we get into the pickle that we're in today? And go.

**Bryan:** What is the pickle that we're in?

**Andrew:** I'm not sure we're in a pickle.

**Bryan:** Yeah, are we in a pickle?

**Andrew:** Are we in a pickle?

**Bryan:** I'm not sure we're in a pickle.

**Bridget:** I think we're in an era of increasing complexity and terrifying somewhat lack of debuggability that you just talked about.

**Andrew:** Everything is awesome.

**Bryan:** There we go. Yeah, I mean, I think there are certain things that are, there are certain perils for sure. I do feel, I mean, and Andrew, I'd be interested to know your take on this, but the '90s really sucked, I think. I mean, not from a, from the perspective of computing. It was a—

**Matty:** [00:05:12] From a music perspective, it was amazing.

**Bryan:** Yeah, from the music, yeah, exactly. I realized that I was just giving, and the problem is my kids actually now like watch my videos, and they're gonna be like, aha, I knew it, this is why I don't have to listen to A Tribe Called Quest. Like, go to your room!

**Andrew:** Because you get better music during recessions.

**Bryan:** That is actually true. That is definitely true. You get better everything during recessions.

**Matty:** Except, you know, IT apparently.

**Bryan:** Well, no, and I do think that the general ennui and apathy of Gen X is definitely a defining attribute of our generation. I do think, but the reason that we're apathetic is because the '90s fucking sucked and they sucked for a lot of reasons. But it was a very, very, very proprietary, closed era. People thought systems, computing systems, honestly thought that systems were done. And right, I mean, it's not just me, right?

**Andrew:** There's the dark ages of the relational database and the Java middleware stack that totally paused everything for a decade.

**Bryan:** It paused everything for a decade. It really did. So like if you were looking at the like things are super proprietary, I mean, even like you think like Java was not open source. Right. And Java came from a relatively good actor, was still proprietary. Obviously, like the world, it's a foregone conclusion that everything's going to run Windows, which is deeply proprietary and aggressively like there's proprietary, then there's asshole proprietary. And they were definitely in the— I mean, and everyone— and it's like you talk to millennials, they're like, oh man, Microsoft. Like, it's like, no, like, do not think— no, no, that's dismaying that you think so warmly about Microsoft. Like, I can't. Quite— although Satya is making all the right moves, I can't quite—

**Bridget:** [00:06:46] I mean, but there is forgiveness if they're really willing. And this, we can— I don't know if we would say this about every company that we have hilarious diagrams with their lawyers, but there is real willingness that I see coming out of Microsoft to actually open source.

**Bryan:** That's why there were 2 world wars.

**Andrew:** Well, in some sense, Microsoft's been forced to because they lost that monopoly.

**Bridget:** I mean, clearly the proprietary era is over.

**Andrew:** Oh, that's not true.

**Bryan:** That's not true. Thank you.

**Andrew:** Especially when we're talking about cloud.

**Bryan:** Yes.

**Andrew:** Because as soon as you're in the cloud, you actually invert a bunch of this stuff. It doesn't matter how open source is building all this stuff at Google, Amazon, whatever. It's not like you can change that code.

**Bryan:** We are in a new proprietary era. And by the way, it feels— it rhymes with the '90s right now. Because in the '90s, like everything's going to Microsoft and you should be like, don't do anything else. Like if you're doing anything else, you're stupid. Like get out of the way. Everything's going to Microsoft.

**Andrew:** Nothing's more proprietary than Lambda.

**Bridget:** Yeah.

**Bryan:** That's exactly it. And right now everything's going to AWS. I mean, I have the, it turns out radical idea that Jeff Bezos is not gonna own and operate every computer on the planet. And, but that is not, I mean, the dominance of, AWS is now— you can't even question it.

**Bridget:** [00:08:06] And we actually are going to have the old Geeks Gala Club.

**Andrew:** I feel like Jeff Bezos is the Genghis Khan of the internet.

**Bryan:** I got to go treat that. I'm sorry. That's an emergency OHA.

**Bridget:** Joe, can we get some emergency OHA? Imbraco, thank you.

**Bryan:** Can I just give you my phone so you can just—

**Andrew:** But it's not just about AWS. The number of Amazon boxes that come to my doorstep on an almost daily basis is changing everything about how I live. Thanks to my wife.

**Bridget:** What's really interesting about that is that that's a convergence of our physical reality of we need cat food and our digital realities of we need servers and we're getting them from the same place. Does anyone else deserve to start a company?

**Bryan:** And not an accident. Not an accident. So the great myth that Bezos created, and I mean, you just have to hand it to these guys, the ability to create myth effortlessly or seemingly effortlessly. And one of the myths that they created is that cloud is a terrible business and nobody should be in it. Please let I, Jeff Bezos, take one for the team. I will be in this terrible business only because I have excess capacity on the dot-com side during the summer months.

**Andrew:** [00:09:21] Someone said something about—

**Bryan:** That is the most ridiculous, preposterous idea And what is actually— what we have known is that the cloud computing has actually got very good margins. But if you get Amazon writ large, the Amazon margin writ large is very low, which means, hello, AWS is underwriting a war on big box retail. Like the carcasses, the Kmart carcass that you pass in an exurb is created by AWS.

**Bridget:** And this is actually an interesting conversation that we have with people in the retail space who say, things like, hell no, I'm not going on Amazon's cloud any more than I would go on a cloud run by Lowe's. Like we had a box retailer say—

**Bryan:** Oh God, it's called the $9 bra. Because we had, we got a customer of Joyance, like, yeah, you know, we love it and so on. But AWS was kind of like creeping in at the margins. This company, turns out they make lingerie, very famous lingerie retailer you may have heard of. And then AWS, AWS, excuse me, Amazon comes out with a $9 bra. You would think it was AWS. Because they then were like, no, forget it. We're actually— and I do think—

**Andrew:** [00:10:31] I think this happens on both the dot-com side and on the AWS side. They are running analytics on what's happening in those marketplaces from their sellers and their partners in those ecosystems. And they turn around and create those products both for the retail and the cloud.

**Bridget:** Amazon Basics. Where do you think that came from?

**Andrew:** Genghis Khan. They don't care. So I remember At one point, Rackspace was talking about cloud, and they'd thrown a Hail Mary to themselves with OpenStack.

**Bryan:** OK, me, go deep.

**Andrew:** OK. And they're saying, well, we're playing a different game than Amazon. And it turns out Jeff Bezos doesn't actually care what game you're playing.

**Bridget:** I think we're all playing Genghis Khan's game. He doesn't respond as if he cares what game you're playing.

**Bryan:** Yeah, Genghis Khan does not follow you on Twitter. He does not care.

**Andrew:** He doesn't care.

**Bryan:** And I think that the danger is— that right now in this new proprietary, like Lambda, Lambda is the most proprietary thing on the planet. The people, and Lambda, look at AWS re:Invent, man, they are Lambda, Lambda, Lambda. Lambda is going to be everywhere. And now my view is, and probably your view too, Andrew, is like, we have seen this in the past. Genghis Khan, we don't actually all report into Genghis Khan, right? Genghis Khan, did actually perish from the Earth, and so too this. But I'm worried that it was going to bring down—

**Andrew:** [00:11:54] Not to take this in another direction, but there's some that estimate that 3% of the people alive have genetic material from—

**Bridget:** So he was good at that. But question about— but on the lambda point, though, I do want to go down that path for just a moment. Destro?

**Bryan:** Destro, right? Destro was Genghis Khan, Napoleon's DNA, right? No, no, that was Serpentor. Serpentor was Genghis Khan, Napoleon, Hitler, and there's like one other. There's one other one. Alexander the Great. Alexander the Great. Yeah.

**Bridget:** All right. You mentioned Hitler, so I'm gonna invoke the rule that says we can go talk about Lambda now. But seriously though, I hear people be all like serverless. I'm like, okay, there's still servers. You just can't SSH into them. But serverless functions and Lambda, and like, that's exciting. But I also see a lot of people who still have Java middleware and sadness and are not about to replace it all in 3 seconds flat with Lambda. So both of you, since you both deal with customers out there in the enterprise, what do you see happening with everyone's current hype about how Lambda functions will save us?

**Andrew:** [00:12:59] So there's lots of stuff here to unpack. And in some ways, nothing ever goes away. So there's these sedimentary layers. People still running their mainframes. People have all this Java middleware. People have Now they started adopting maybe newer stacks, but that old stuff is still in the way.

**Bridget:** If you use a credit card, there's a mainframe in there. Sorry.

**Andrew:** And in some places, it's actually like opening a time capsule. And you can kind of tell what year they stopped learning. It's like, oh, you didn't learn anything since 2004 with the classic dark age stack of the relational database and your Java middleware.

**Bryan:** Yeah, I think that that will— I think Andrew's right in that that will— that changes over time when those folks that don't adapt are ultimately disrupted. I mean, in some cases it's the right tool for the job and why change it? You wouldn't change it. The other side, I mean, people absolutely still run mainframes. It's also not a growth area. There's not— you're not going to have a conference with several hundred people talking about z/OS. And it's for good reason because it doesn't make economic sense. So the, you know, we're always going to be towards that newer margin. So that stuff will definitely continue to exist, will exist for a long time. I think especially those that will be in— as you see that kind of time horizon begin to slip past the dawn of the true dawn of the open source era, which is— I mean, I don't know where you exactly want to pin it. I would— where would you pin it?

**Andrew:** [00:14:28] That's an interesting question.

**Bryan:** I'm going to pin it in— so I'll tell you where I'll pin it, and you tell me where you pin it.

**Andrew:** I'm not even— where are we now? We're not at the dusk, right? So like—

**Bryan:** no, definitely not.

**Andrew:** So like there's the dawn.

**Bryan:** We're going supernova.

**Andrew:** Well, this is a slightly different topic. And we can come back to land in a second. But open source is a thing that is somewhat ill-defined. And when people say open source, they don't always mean the same thing right now.

**Matty:** That is true. Was it source open, open source, whether or not you're just like, here's the code, here's—

**Andrew:** So I think you have to go back and look at some of the stuff Stallman did and Stallman talked about. Although I'm not always the biggest fan of everything he says or does. And then—

**Bryan:** You believe in property rights in the abstract?

**Andrew:** This is another deeper topic.

**Bridget:** Wow.

**Bryan:** All right, let's get interesting.

**Andrew:** Because on some level, I think humans evolved this notion of private property way too early in our moral understanding. But that's like a totally different podcast.

**Bryan:** Was I supposed to pregame?

**Bridget:** Totally different rabbit hole. What?

**Andrew:** [00:15:29] No one—

**Bryan:** I would have had I known. Did I not get the memo on that one?

**Andrew:** There's so many rabbit holes around here.

**Bridget:** This is a panel for meandering and rabbit holes and arguments.

**Matty:** All right.

**Bryan:** But if you're like jonesing for a burrito right now, that's going to be a tell.

**Andrew:** So you also have the free software people. Then you have the spawn of this open source movement, which is also somewhat business-centric, that starts us into this spiral of open source washing and lots of strange ideas about how you should monetize open source. Which are essentially mostly wrong.

**Bryan:** Mostly wrong.

**Andrew:** And now going full circle back to, we'll tie back into this Lambda conversation, the vast majority of capital that's been created and captured on open source has been in these proprietary settings. And Oracle probably made more money off Linux than almost anyone else.

**Bryan:** Certainly not Red Hat.

**Andrew:** Absolutely.

**Bryan:** No. I don't know.

**Bridget:** Doesn't Red Hat make a certain amount?

**Andrew:** Running Oracle databases on Linux So yeah.

**Bryan:** [00:16:30] No, this is— well, look, look. I mean, obviously, I've got as much of an ax to grind with Oracle as anybody. But I think—

**Bridget:** It took us, what, 16 minutes to get to Oracle?

**Bryan:** You know, I didn't even take us there. I don't actually take us there. And I only— look at the record. We went to Hitler because of Serpentor, not Larry Ellison. But I guarantee you, if you sent Larry Ellison a memo on Serpentor, he's like, this is interesting.

**Matty:** Actually, Larry Ellison—

**Bryan:** Napoleon DNA. It's like, I did not— Hmm, interesting. Yeah. This is actually one of— OK, may I? Of course. We're already here.

**Andrew:** Let's go.

**Bryan:** So everyone get out of the car. So you know that Larry Ellison spends— all of his philanthropic work is to a medical institute that is researching longevity, namely his. Like, apparently you can do that. Like, the tax code will let you do this. This guy wants to live forever. One of the— this is so plausible, it's terrifying. If you have children, you know that one of the scams they pull on first-time parents is around freezing of cord blood. Cord blood is the blood in the umbilicus. It's medical waste. And someone had this genius scam to convince first-time parents that you should freeze this cord blood in case your child later develops leukemia, hoping you don't follow up on any of this and actually like check this. It makes zero sense. It's a service model. It's like a razor blade model because you have to keep it frozen. Once you kept it frozen for 5 years, like, well, you're not gonna like stop paying for it now. I mean, it is absolute genius. If you're one of the rubes who's paying for frozen cord blood, just stop paying the bill and let it thaw out. But there is all this medical waste. It's loaded with stem cells. What if the Larry Ellison Medical Institute discovers that drinking cord blood promotes longevity? Larry Ellison, I shit you not, Larry Ellison will be in the nursery licking his chops. He's like, you're not gonna use that. Are you done with that? You're not gonna— yeah, that— don't throw that out! Don't throw that out! That's drinkable. And, uh, where, where's the placenta? Where's the placenta?

**Bridget:** [00:18:31] So I didn't think we were going to vampires and zombies this early in the day.

**Bryan:** And it was— well, again, like we said, it's gonna even out through the day, right?

**Matty:** You know, we start off here and it just goes downhill.

**Bryan:** I'm not saying I am, but I'm not saying he's a baby eater. OK?

**Matty:** He was a baby blood drinker.

**Bryan:** He's a placenta eater and a cord blood drinker, but not a baby eater. There's a difference.

**Andrew:** So what about people making money on open source? Is that a thing?

**Bryan:** Yes. OK. Are you— we're getting back in the car, I guess.

**Matty:** OK. All right.

**Bridget:** Back in the car.

**Bryan:** Yeah, I know. I think— and this is it. And we are seeing it now. We're seeing it this morning. Right? We're seeing it this morning. Docker CEO has just been replaced.

**Andrew:** Yes.

**Bryan:** The open source business model is the second worst business model on the planet. The worst business model is being a proprietary software infrastructure company. The infrastructure software has to be open source. It is open source. That is the— and we went through this very painfully at Joyent where we had bits that were open source, but the whole stack wasn't. And it was very painful just because Mark is here. I remember Mark at one of his gigs is like, ah, I love you guys. You're the right answer, but you've got to be open source. I'm like, I know. I know. I'm sorry. I know. And he's right. He was right. And fortunately, we did get to all open source. But if you're going to open— if you're going to have open source, you have to—

**Andrew:** [00:19:58] Actually, let's talk about this because I think this is relevant to your story here as well, that there's dynamics that happen, especially around this particular segment, where what happened with OpenStack, which didn't solve the problem, in some sense didn't even try to, but sucked all the oxygen out of a bunch of other promising projects.

**Bryan:** Well, not— well, yeah. So OpenStack, first of all, the problem that OpenStack was solving was a middle management problem in soon-to-be-dead infrastructure companies. And it did solve that problem. It convinced them we got cloud covered. We got this OpenStack thing. Don't worry, we still have all of our proprietary glop that we're going to stick onto this.

**Andrew:** I think that's what happened. I don't think that's what the initial goal or the problem statement was.

**Bryan:** I'm afraid it was.

**Andrew:** No, no, it wasn't.

**Bryan:** I just like—

**Bridget:** he wasn't there.

**Bryan:** But I think that it wasn't the goal of all the participants.

**Andrew:** [00:21:00] There is a tipping point that there's a bunch of people that are checking the box on their cloud strategy.

**Bryan:** Yes.

**Andrew:** The has-beens, or maybe never was, infrastructure companies and telcos and whoever else wanted to get in the party. And switch providers, right? And whoever's afraid of Amazon, basically, kind of came together and had a party. It ended up turning into this weird political marketing exercise with very little engineering going into the core of the project. But this is the point I want.

**Bryan:** Remember CDE?

**Andrew:** No, no, but wait. The dynamic of OpenStack pulled attention from your project that it would have rightfully had. And that's true about other projects as well.

**Bryan:** It depends on what you're saying. We were not open source at the time. So we've really got to blame ourselves. I think that CloudStack is the one that I would definitely— I would put CloudStack in that category. Cloud stack is definitely caught under the wheels of OpenStack.

**Andrew:** OK, this is an interesting topic. So you first have Eucalyptus.

**Bryan:** [00:22:02] First, in the beginning, there's Eucalyptus.

**Bridget:** Remember Eucalyptus.

**Bryan:** Nobody can install it.

**Andrew:** And Eucalyptus, in some sense, has the right by its birth to kind of be this open source cloud stack.

**Bryan:** It definitely viewed it that way. Did you ever install Eucalyptus? Yes. Was it— so what was that like? Because that seems like it was—

**Matty:** Sir.

**Bryan:** Sir. Goddamn it. That must have been— Terrible.

**Andrew:** Well, it turns out that grad students putting a veneer of an API on top of something that they didn't actually understand, computers, is not a cloud solution.

**Bryan:** Interesting.

**Matty:** Yeah.

**Bryan:** And in general, when you have people in a labor camp, which is what grad students are—

**Andrew:** But it started to gather interest. And if they would have captured that interest, then they had the— the right to become that kind of open source cloud solution. In a sense, they didn't understand the dynamics of open source and they crippled themselves. And those missteps are why OpenStack ever existed. OpenStack would never have existed if Eucalyptus didn't mismanage its community in the beginning.

**Bryan:** [00:23:10] That is very interesting. I think that Eucalyptus— and I don't disagree with that. I think that Eucalyptus was— I think both Eucalyptus and OpenStack made a mistake. That what we are going to do is an open source AWS. And that's never gonna work because AWS, that underestimates Genghis Khan. It's like, we're gonna be an open source Genghis Khan. It's like, yeah, nah, not really. Genghis Khan is like, Genghis Khan has got an appetite for the steps that you simply do not have.

**Andrew:** I think this dovetails back into what I talked about yesterday and what you talked about this morning, which is that Amazon's, advantage wasn't necessarily software, although they maybe had some advantages there. It's that social technical system that had been operating a massive distributed system for a decade before they started offering a cloud. And no one in that ecosystem had that kind of operational experience or excellence. And that's why I think you see a lot of these organizations that basically couldn't manage a multi-node Rails app trying to manage a cloud.

**Bryan:** [00:24:17] Right. Yeah, I mean, there's a degree to which they— and whether that's from the dot-com side. I mean, it's basically S3 that Amazon arguably got. I mean, here's an interesting question is because S3 was an arguably lucky innovation for Amazon. It was kind of an innovator-led thing at Amazon. And I don't know that such a thing— that was a long time ago. And their structure and priorities, I mean, it'll be interesting to know if that kind of thing would be possible still. But it was, I mean, ultimately it was S3 that—

**Andrew:** What do you mean by possible?

**Bryan:** Well, because it is, it's such a kind of a crazy invention. I guess they do, they still do crazy things. But yeah, and maybe that's still why they do crazy things. And they're gonna have, you know, drones deliver stuff and whatever other—

**Andrew:** Of course they are. I actually think this dovetails back to the Lambda story too, because I think people over-rotate on this notion of being able to run a function.

**Bryan:** Yes.

**Andrew:** And what Lambda actually represents is this fabric of event sources. S3 is one, but you can't really talk about building things that are useful with Lambda unless you have that, that those stateful event sources that are all over the place in that ecosystem.

**Bryan:** [00:25:31] Yeah, and to be clear, like, Lambda is a needle exchange for AWS services in that you, you are going to end up strung out on AWS in a—

**Bridget:** Every AWS service attempts to make that happen. Like, see also DynamoDB. You're going to move away from that?

**Andrew:** The propensity of data to draw things to itself is another issue. And S3 is certainly part of this. But you can't build useful things with functions, stateless functions, until you have these things.

**Bryan:** Are you saying that there's state in the world?

**Andrew:** There is, in fact, state in the world.

**Bryan:** Are you yucking my stateless yum right now? Because I'm over here in stateless land where everything can be restarted all the time. And it's just like, you know, there actually is state.

**Andrew:** Literally all the hard problems.

**Bridget:** Yeah, you know where it lives in state is—

**Bryan:** Huh, state still exists. Dan Aykroyd was a thing. And there was something called Three's Company.

**Andrew:** There's also—

**Bryan:** All right, pay attention, millennials.

**Andrew:** There's also time.

**Bridget:** And what exists in state— there is also time and the speed of light, unfortunately. But what exists in state is all that customer data and money and things that people actually do business because of.

**Bryan:** [00:26:43] Oh, state. Filthy, filthy, filthy state.

**Bridget:** We're not going to get rid of filthy, filthy lucre. But back to your point, we're dancing around this. Hey, we can use functions to build things. And there's lots of other building blocks that we may or may not get from some open source company. But I feel like the reality, the stuff you were talking about this morning of trying to introspect and debug, And the stuff that you were talking about yesterday, the reality is a lot of things already exist in the world and they're going to continue to be the sedimentary layers that Andrew's talking about. So we've talked a little bit about where we came from and maybe some of what got us to where we are here, but where are we going? Because we can't get rid of the past. We maybe don't even want to.

**Andrew:** I don't know if we're all going together. That's another thing, right? Like the future is not evenly distributed and we're not all going the same pace or in the same direction. I think— Do I get to come? You're in the car, Brian.

**Bryan:** All right. We're back in the car.

**Andrew:** So this is a thing I've been thinking about a lot. And it kind of touches architecture and telemetry and observability and the rest of this stuff, which is that these new architectures, these new applications should be much more aware of their state. And there's a lot of people interested in, in container schedulers, and they rightfully should be. Has anyone ever read the Borg paper? The Borg paper has pages and pages of information about schedulers and the evolution of how they solved this problem and thought about it at Google, going back to the beginning through Omega and now talking about some of the stuff with Kubernetes. And then there's this one paragraph that I think is the most critical paragraph that everyone doesn't really reference, but I think it's fascinating and probably more impactful than the best scheduling algorithm in the universe is that in Borg, every application that runs in Borg has an HTTP endpoint that broadcasts metrics about its health. And if you just did that in your applications, then you'd get 85%, 90% of the benefit of the way Google runs their applications.

**Bryan:** [00:28:51] Yes?

**Andrew:** No, you can hit an endpoint.

**Bridget:** Let's repeat the question. We asked broadcast over HTTP and it's like, no, we're talking about an endpoint.

**Bryan:** You're hanging out the shingle, hanging out a socket to be consumed. And I like Prometheus. What's your take on Prometheus? I think it's interesting.

**Andrew:** I haven't run it in anger. I think that seeing those ideas, I mean, basically my career for the last decade—

**Bryan:** Prometheus is what you're saying basically. Prometheus is the Google idea taken to the open source world.

**Andrew:** Absolutely. But those ideas need to be also kind of baked into the framework for the app developer. You need to make doing the right thing for the app developer the easy thing.

**Bryan:** Yeah, absolutely.

**Andrew:** So those components in the frameworks that the developers— and this will start to be— I mean, people are starting to struggle with how do you monitor and make sense of your Lambda infrastructure. You need to be able to query. This is the stuff you were talking about. You need to be able to ask questions to your application and get back answers.

**Bryan:** [00:29:51] And I think it'll be interesting to see how much Lambda is actually used in anger and in the loop versus as a way of prototyping and experimenting and kind of looking at new ideas versus actually being— because I think the other thing about Lambda is that the utility model— the people that love the utility model are utilities. Like, if you love utility billing and you're not a utility, it's because you're at such a small scale that you don't care. When you get— because you can't actually predict your costs in a utility model. And it'll be very interesting to see how much Lambda is actually—

**Andrew:** I also—

**Bridget:** actually, I should point out, though, that we had a talk at the DevOps Minneapolis meetup recently that was a follow-up from a talk from about a year ago from folks at SPS Commerce, a bunch of whom are DNA from a startup I used to work at. And they're there now, their CTO and a bunch of their engineering. And they, a year ago, were using Lambda and now have built their own Lambda-alike in-house because the Lambda billing didn't work for their needs.

**Bryan:** [00:30:54] I think that— I think an open source—

**Andrew:** It's actually quite expensive for the cycles. I think that when people start talking about the cost savings they got from Lambda, it's because they were running compute instances that were mostly idle.

**Bryan:** Right. Right. Yeah. And I think that we are— I mean, I actually do believe that— because the thing about open source is that, Serpentor's efforts aside, you can't actually reproprietary software. That open source software exists in perpetuity. And so the— and we know this. I know this because the system that I work on is, namely Unix, is probably one of the oldest extant software systems that is still under active work. So we've got aspects of the system that are 40 and 50 years old.

**Bridget:** And you are not meant to understand this.

**Bryan:** Exactly. Which is kind of the very famous line, no longer in the source base, but very famous line. But once the software sediments and is open source, it does exist in perpetuity. And so I think that it only takes one And open source business models aside, that when you have a company that creates open source software in an attempt to find a business model, the company then can't find a business model and disappears. The open source— it's not a carcass. The open source actually exists in manifestation.

**Andrew:** [00:32:16] The reverse also happens. This is one of those confusing things about open source, at least to me, is that something that failed to have a business model as a proprietary software gets added to the elephant graveyard. And Apache Commons, whatever donation. Yeah, that's like, oh well, maybe if we open source it, the open source fairies will come and work on it.

**Bryan:** And maybe, maybe not. But there's a— I mean, it all depends on kind of what problem that is. But it's like, I mean, we're all old enough to remember when Postgres was left for dead, right? In Postgres, there was a long period where Postgres was dead on the operating table and there was no point in actually doing anything with anything other than MySQL. And as it turns out, things can change pretty quickly. And when they did change, Postgres was able to be revived because open source software can't die. At worst, it becomes cryogenically frozen and it can be thawed out and drank by Larry Ellison.

**Andrew:** Exactly right. So there's an interesting parallel to the— I feel like, and I was always a fan of Postgres. And I thought this—

**Bryan:** [00:33:27] oh, I always loved you. I was defending you in every conversation.

**Andrew:** It's like, OK. Oh, geez. It's a true story. The engineering and the thought that went into that was different. And as a result— but I think there's actually parallel. The reason I bring it up between the Linux kernel and the Solaris kernel.

**Bryan:** Solaris is not a thing, first of all. Solaris is a proprietary system from Serpentor.

**Andrew:** No, no, back then.

**Bryan:** Actually, seriously, all right, so—

**Andrew:** Pour one out for Sun.

**Bryan:** No, no, no, forgive me for a moment.

**Bridget:** So we have been independent.

**Bryan:** So Illumos has been independent of its Solaris roots for 7 years.

**Andrew:** But there's core engineering that happened under that banner. I didn't mean to touch a sore spot.

**Bryan:** Yeah, right, well, you did.

**Bridget:** It's all sore spots.

**Andrew:** Out of the car, everyone out of the car.

**Matty:** No, it's just like—

**Bryan:** Everyone out of the car, everyone out of the car. No, no, it's an important point of distinction Because the thing is, outsiders are like, oh, it's Solaris. No, no, I don't think of it as Solaris anymore than I think of it as SVR4, as SVR3, as AT&T UNIX. It's like, we have got a much longer view of the system. Solaris is just a very brief proprietary era in a much longer system.

**Andrew:** [00:34:37] So the label aside—

**Bryan:** Bent over. Yeah, exactly.

**Andrew:** There's a quality of engineering, and especially with respect to observability. Yeah. And this is stuff I've heard you talk about before. Relative to this other open source operating system, right? And so that difference, because people flock to Linux maybe for the same reason they flock to GNU/Linux.

**Bryan:** Yeah, GNU/Linux, exactly. Shut up, bot.

**Andrew:** Shut up, bot. So they flock to Linux maybe for some of the same reasons that they flock to MySQL. But this other technology actually had better engineering all along.

**Bryan:** And the thing is, I also think that people are like, oh, why are you working on something that's like, Everyone's working on this. Why are you working on that? And I think that there's a real— people underestimate the power of small communities. I actually like small communities. And I don't—

**Andrew:** People underestimate the value of real engineering.

**Bryan:** Well, real engineering. But I think also that there's this idea that like, oh, well, that's like, you know, it's only you and 4 of the people that are working on it. So, I mean, not— but for, you know, whatever project or like, this is dead. No one's actually working on it. Well, no, actually, if there are— And as long as anyone is working on it, there is a need for it or not. It still exists. And the thing is, if I were an actor, I would not want to just make blockbusters, right? There is actual value to the quality of the craft. And I actually don't care how— I don't do what I do for GitHub stars. I know this is like— and I have actually been in very large communities. We've been in very large communities. Very large communities are a very, very mixed blessing because I like communities that share values, where you've got values that everyone in the community shares. As a community gets larger, it becomes more and more difficult to share values. And it's like, I mean, just the elephant in the room.

**Andrew:** [00:36:32] And so you're compromising values.

**Bryan:** So the elephant in the room is Node.js for Joyent. So Node.js was a conjecture that under the— in the failed state of JavaScript, that we could have all of these demographics in software engineering could peacefully coexist. As it turns out, that can't happen, actually. As it turns out, some of us just need to go somewhere else. And fine, I guess it's gonna be us because the values aren't shared, weren't shared. And the challenge that we had in Node— so, Joyent was the company behind Node.js. And we were— and had a very explosive community. And the community came, and we had very concrete ideas around observability, debuggability, rigor, engineering, values that were actually very closely shared with the V8 team that actually developed the core of Node, but were not broadly shared with the community. And ultimately, it's like the community, they're like, oh, well, you know, we want promises. It's like, okay, well, so let me, let's explain again why that's a terrible idea. And they're like, no, no, we want promises. Okay, like the totally underdeveloped frontal lobe. And of course now they're like, well, my promises program doesn't work. It's like, yeah, it doesn't.

**Andrew:** [00:37:55] Because it's a bad model. The thing that—

**Bryan:** it's a bad model, not in the de novo creation of software, It is a bad model in the operability of software years down the line.

**Andrew:** Absolutely.

**Bridget:** Did you just say—

**Bryan:** that's called the frontal lobe and you people don't have it.

**Bridget:** Did you just say that day one is—

**Bryan:** Goddamn it, I keep knocking it over.

**Bridget:** I think what we just heard Brian say before knocking over water again is that day one is very short and day 2 is forever.

**Bryan:** And I think it's not a coincidence.

**Bridget:** And it's not a coincidence he's wearing—

**Andrew:** that's why MySQL was chosen. And that's why Linux is chosen. And all this stuff is garbage all the way down.

**Bridget:** But I think it's not a coincidence.

**Bryan:** Velocity, velocity, velocity.

**Bridget:** Right.

**Bryan:** And it's not—

**Bridget:** I mean, well, it's not a— and that's right. And yes, we have a conference called Velocity.

**Bryan:** There's a conference called Integrity. I mean, you know, right?

**Bridget:** Maybe this is a new conference series that you need to start.

**Matty:** Do it. Done. It was created here.

**Bryan:** Well, no, because I think— because here's the— it's not even— I get it. Like, everyone's all fast, fast, fast, fast, fast. I'm horny. I'm horny. I'm horny. Okay. Put it over here.

**Andrew:** [00:38:57] Whoa.

**Bryan:** Out of the car. Pull over again.

**Bridget:** I'm starting to wonder about this car. Are we on a freeway where people are going to be upset that we keep pulling over?

**Bryan:** It is a bit of a road trip. And I mean, I get the enthusiasm. But the thing is that we actually make ourselves faster than the limit by doing it properly initially. This is what you and I do.

**Matty:** I agree.

**Bryan:** Right, I know.

**Andrew:** But day 1 is now.

**Bryan:** I know.

**Andrew:** And day 2 is not now.

**Bryan:** I know.

**Bridget:** That's the problem.

**Andrew:** I opened the lock to my—

**Bridget:** And I want to argue about that a tiny bit.

**Bryan:** Ultimately, you need executive leadership against it. I mean, in terms of like when you're developing software in a company, you need executive leadership that can actually understand that. And that is a huge challenge because that—

**Bridget:** so I want to just— I want to touch on something that you just said, the idea of doing things right the first time. Yeah, that is a seductive notion. And I think it's impossible because you cannot have perfect future knowledge. So you will not know what will be the thing that would have been a good idea.

**Bryan:** [00:39:57] So, right. OK.

**Andrew:** So there's nothing more expensive than building the wrong thing. And sometimes it's easier to test the hypothesis with the hack that tends to live forever than it is to do everything right. Right.

**Bryan:** And when I say— I'm not trying to excuse analysis paralysis. And I think maybe it's better to think of it as it's the corners that you know you're cutting. That's what's frustrating. It's not the like, I mean, let's develop software quickly. Let's get— let's test hypotheses quickly. Let's develop prototypes quickly. Let's get things in. I mean, that I don't object to. It's the, it's the, God, when I'm in your code and it's like, goddammit, it would have taken you an extra 20 minutes to not cut this corner. Why am I in code that has never been executed before?

**Andrew:** The reality is that every developer on every keyboard is making the the choice between doing things right and doing things right now.

**Bryan:** Yes.

**Andrew:** Every second of every day.

**Bryan:** And as a senior engineer from years ago told me, every line of code is a business decision. And that's why it's part of a culture. That's why you have to organizationally, you have to value not cutting the corner. Don't cut the corner. Be a craftsperson.

**Andrew:** [00:41:12] And not just say it. So values is about who gets rewarded for their behavior.

**Bryan:** See, no, no, no. So this is the fun of it. This is— now we're getting to—

**Bridget:** We're going to argue about the Amazon principles.

**Bryan:** Oh, you know we are on a collision course with the Amazon principles and the much worse principles.

**Bridget:** All right, before we go down that rabbit hole, I know that Matt wanted to add something to the conversation. You're just in.

**Bryan:** So don't jam it with me, the rabbit hole.

**Matty:** My question was very similar to where Andrew took it, which was to say that we run into, again, doing the right thing. Now, and then what I find a lot with customers that I work with, again, is analysis paralysis, right? We want to think of every single frickin' corner, every single edge we might possibly find. So I was just saying, that was my question, but we kind of got there. But I was just trying to make this point in your talk.

**Andrew:** So in the resume you're reading where the person went 18 months, 18 months, 18 months, in many cases they were rewarded for that behavior and got a big raise. Every transition they got a big raise.

**Bryan:** What is a reward? I know this is so cash money, Brian. What's going on? What is going on?

**Bridget:** [00:42:16] We live in a capitalist society.

**Bryan:** I'm losing my goddamn mind. I am losing my fucking mind. What is going on? All the— okay, we're here. So everyone, are we— wheels are off. Wheels are off. Yeah, everyone has to get out of there.

**Matty:** There is no more—

**Bryan:** wheels are off. Smoke coming out of the hood. This is why. This is why all of these fucking leadership principles from all these organizations, where is integrity? Goddamn it, where's integrity? Amazon has— no, Amazon has 14 leadership principles and integrity is not on it. Inexcusable.

**Bridget:** That's bullshit.

**Bryan:** You've got one principle in your organization, it's integrity, right? Jesus Christ, please, please, I need, I need some like nods on this one because I'm actually going down the tubes. No, we are living in a world that has like lost its fucking mind. It's like, what are you— like, the lust for mammon, I don't understand it.

**Andrew:** Genghis Khan is winning.

**Bryan:** Jesus Christ.

**Andrew:** Genghis Khan is winning.

**Bryan:** Like, why the appetite for territory? Do you not know where your next meal is coming from? Do you not have a roof over your goddamn head? I mean, I'm sorry, I just don't get it. It's like, you know, we have got an incredible luxury. We are—

**Bridget:** [00:43:27] we have—

**Bryan:** there's never been a labor market like this one. We have— and where have we so screwed up with, with a generation, if not a society, where we've got people who are so extrinsically motivated? What the fuck is wrong with us? What the fuck is wrong with us? I mean, it's like, how is integrity not the only thing you have?

**Andrew:** So are we doing the full critique of capitalism today?

**Bridget:** No, it's not.

**Bryan:** That's the next episode. It is not capitalism. It is not capitalism. The, the finest capitalist I have ever known is Scott McNeil. I— there is not a capitalist so pure, so pure, that when he was being devoured by Oracle, he believed it was his duty to capitalism to die. And I admire that. There is no purer a capitalist than Scott McNeil. And read McNeely's final email to Sun employees. And McNeely, it's almost prescient. McNeely says, you know what, in 30 years I never had to hide the newspaper from my children. And it's an achievement that Uber violated on like month 2. It's like, how are— where are Travis's parents? Are you not humiliated? How did you raise him to be so divorced from what really actually truly matters? I mean, I honestly— what the living fuck is wrong with us? Maybe it's me. If it's me, no way. So it's like, honestly, let's be fair.

**Andrew:** [00:45:03] Yeah, let's be fair.

**Bryan:** So, okay, I, I, I— you shift very quickly, Brian. It's impressive. Yeah, you're like, okay, this is what it's been— tell us how you really feel.

**Bridget:** No, I love it.

**Bryan:** Pissing me off.

**Bridget:** I love it. I love it, and I'm with you.

**Matty:** Yeah.

**Andrew:** So if you look at Uber's valuation, do you think that Uber's been rewarded or punished for this behavior? And the flip side of that.

**Bryan:** No, no, no, no. Uber's valuation is pretend.

**Andrew:** I get it.

**Bryan:** That's pretend. That doesn't exist. I get it. That doesn't exist.

**Bridget:** We might want to. We we need to yell a little bit less because I guess it's causing a problem in the next room.

**Bryan:** In the title, it says yell.

**Bridget:** We don't want to disrupt the next session. Apparently air walls are imperfect.

**Andrew:** I want to flip that around to the other side of the equation, which is there are many, many developers working in situations where they do have mortgages to pay, they do have families to take care of, they're managed like factory workers from the Industrial Revolution.

**Bryan:** [00:46:08] No, they're not.

**Andrew:** Maybe not a giant, but certainly—

**Bryan:** No, they're not. No, they're not.

**Andrew:** Yes, they absolutely are.

**Bryan:** No, they're not. Learn about the Industrial Revolution. They're not.

**Bridget:** They are not. It's not as bad.

**Bryan:** Our children don't die. I'm sorry. When you have a child, you can have confidence that that child is going to survive childhood. That was not the case in the Industrial Revolution. Get some perspective.

**Andrew:** I think you're missing the point I'm making here. Like, certainly things are better and child mortality is more—

**Bryan:** Okay, you'll grant me infant mortality. That's your release.

**Andrew:** Sorry, I know you're nervous. There are cube farms all over this country where developers toil. They're not living in the same bubble that maybe you and I have enjoyed. And certainly when you make comments about the labor market and integrity, all that's fine. But when someone's trying to pay their mortgage, the choices that they make to get through the day under the structures of management that have been imposed upon them, like, I don't begrudge that person the choices they're making.

**Bryan:** But that person is not actually— I mean, so like, look, if you are in a cube farm using your brain for a living, you're in the haves, not the have-nots. You are not in the demographic that voted Trump into office. You are honestly— no, because you are ultimately— you can at least see a future for yourself. You're not having to work 3 jobs to just— forget your mortgage. You're paying a mortgage. People that are trying to pay their rent. We have bifurcated as a society because we have so lost our grip on what actually matters. And we're reflecting ourselves in— I mean, Trump has no idea that this is a reflection of what's wrong more than the actual problem itself. There is something very fundamental. If you look at the corporate values from a generation ago— and yeah, I mean, I get it. Corporate values are kind of like, claptrap and so on. But it's like integrity is the top one in all of these companies. And it's— and they at least have the aspiration for integrity.

**Bridget:** [00:48:07] And you're saying that we're not hearing that as an aspiration anymore?

**Bryan:** We know we have stopped aspiring.

**Bridget:** And we're, we're almost out of time. So I want to hear a closing statement from either— from both of you. And I want to start with Andrew as to what those of us in this room who have the privilege of being software developers and operators and architects architects and what have you. What, in 60 seconds or less, should we do, Andrew?

**Andrew:** This might not be the podcast you wanted, but it's the podcast you needed.

**Bryan:** It's a podcast.

**Andrew:** I feel like there's many scales to this. I think as individuals, we have the ability to participate in this economy that is— there's not going to be integrity in anything we do unless it starts at a level of an individual.

**Bryan:** Yes.

**Andrew:** And if you want to be in a position to create these structures that have integrity, then you have to think more globally. You have to think about the politics. You have to think about the implications of all those decisions. And you have to elevate yourself either inside of your organization or by creating new ones to bring that to market.

**Bryan:** [00:49:17] Yeah.

**Bridget:** All right, I love it. I'm putting you on a timer.

**Bryan:** And I would basically echo all that, that we actually do, we live in a great time. We live in a great time. We get to, we are creating these castles from thought. It's beautiful and amazing, and it's a luxury, and it's a luxury that not all of us societally have. It is going to cause More friction, not less. We are not the have-nots. We are the haves. And that doesn't mean— this is literacy. We are literate in a society that is broadly not literate. It is incumbent upon all of us to increase all literacy. And by the way, we will do it. I mean, I think the other thing is like people get very down on humanity. I would never bet against humanity on anything, on whether it's climate change, societal dysfunction, and so on. Anyone who bets against humanity is simply ignorant of history. We are a very crafty little monkey, and we will— if it takes drinking cord blood, we'll do it. But so we will do it, but we need to have— but we do need to understand what actually is important. You need to find your own motivation of what is important, and we live in a time where you've got the luxury of of being able to pick being true to yourself.

**Bridget:** [00:50:39] I love that. I think that's a great place to end with the— you have choices. Not everyone has choices. You have choices.

**Andrew:** I'm not sure we yelled at the cloud, but we definitely yelled.

**Bridget:** Make the right ones.

**Matty:** Definitely yelled. There was definitely a yell.

**Bridget:** We definitely yelled. The next room asked us to yell less. Yeah, sorry. So I—

**Bryan:** sorry.

**Matty:** So yeah, you can—

**Bryan:** are we hitchhiking back to town now?

**Matty:** Are we like—

**Bryan:** we're trying.

**Matty:** We're getting back in the car. We're going back to town, and we're parking the car in the garage. So first of all, if you're in the room here, this link I'm going to tell you doesn't work yet, so forget about it. But this is for the people listening later. But if you go to arresteddevops.com/yellingatcloud, you can see the show notes for this episode. Our website, arresteddevops.com, has ways to subscribe to our newsletter, support us on Patreon. All the rest of DevOps stuff you could ever want. If you do that iTunes thing, we super would appreciate a review in the iTunes Store because that mostly helps people find our show and also makes me feel good about myself. And we may even read your review on the air, especially if you're like Michael Ducey and you troll us and say a bunch of mean things. So, as long as you give us 5 stars when you say mean things.

**Bridget:** [00:51:55] Thank you so much, Andrew and Brian, for joining us. This was more spectacularly fun than I imagined was possible.

**Andrew:** Put your seatbelt on.

**Matty:** So just the thing to remember. So now for all future subtweeting, Genghis Khan equals Jeff Bezos, Serpentor equals Larry Ellison. So that's the code you learned today, right?

**Bridget:** All right. Okay. I'm Bridget at Bridget Krumhout.

**Matty:** I'm Matt at Matt Stratton.

**Bridget:** We're Arrested DevOps, and remember, there's always DevOps in the banana stand.
