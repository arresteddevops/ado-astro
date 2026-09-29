**Martin:** [00:00:00] Computers, you don't have to be nice to them, but actually being nice to them, you get better things out of them.

**Jessica:** Good morning. It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps goodness. I'm Jessica Kerr, and here is a message from our sponsors. DevOps shows that delivery automation is important. Our work is changing software, and software is useful after it's delivered. So how do we develop our delivery? Is it scattered across dozens of repos, or could we use code? Is it a loose collection of YAML and Bash, or can we unit test our delivery too? Do we even need all those pipelines? There is a better way. When you're tired of patching up pipelines, when you're serious about safe delivery of code, check out Atomist at atomist.com.

[00:01:03] The worst thing about the Arrested DevOps podcast is when it ends. You're left wondering what to do next. What are you going to listen to on your commute home? How do you occupy your time when walking the dog? What are you going to listen to during the quarterly all-hands meeting? But fear not, dear listener. There is a solution. You need to subscribe to Software Defined Talk right now. It's a weekly podcast that recaps all the news in cloud computing, DevOps, and enterprise software. The hosts, Cote, Matt Ray, and Brandon Wichard, will keep you up to date on all things cloud while offering tips on how to optimize your Costco haul and how to PowerPoint. It's a fun, free-flowing conversation that will keep you entertained, and informed. What are you waiting for? Subscribe to the podcast today by visiting softwaredefinedtalk.com or by searching for Software Defined Talk in your favorite podcast app. Today, we have a special guest. This is Martin Thompson. Martin is known for creating the Disruptor and for Mechanical Sympathy, getting extremely high performance by understanding the hardware and working in ways that fit with it. This kind of reminds me that DevOps is like understanding people and working in ways that fit with them. I heard Martin speak most recently about protocols in humans and in people. Martin, what else should our listeners know about you?

**Martin:** [00:02:28] Oh, what do I do? Spend most of my days doing distributed and concurrent systems and helping our clients try not to waste as many CPU cycles as possible. Though that often means helping people, because people make software, and getting people to behave well usually gets software to behave well.

**Jessica:** Oh, how do you get people to behave well?

**Martin:** Be nice to them.

**Jessica:** That sounds so easy, and yet—

**Martin:** It doesn't always work, but—

**Jessica:** So you'd be nice— if you're nice to them, then they work more like you want them to?

**Martin:** Well, trying to understand their motivations, try not to make their life too miserable, give them interesting things to do, sort of show them the value in what they're doing rather than just pushing bits of paper around and doing process for the sake of process. See, show the appropriate process doing appropriate things. This seems to get some results.

**Jessica:** Hmm, how do you show them value in what they're doing?

**Martin:** [00:03:30] Ah, one of the best ways is to get them to meet real users. And see the change that it can actually make on people. I think so much of the software we deliver goes over a wall, and we don't see it actually being put to real use. It's great whenever people see end customers and users getting value out of things, and then you see that what you do has actually got something useful to contribute to the world.

**Jessica:** That helps so much. I find that I can make much better decisions if I understand exactly why I'm working on something.

**Martin:** Don't we all?

**Jessica:** On your website, it says something about people hire you for blinding speed and then wind up wanting to keep you around because of the ways you work on delivery?

**Martin:** Yeah, quite often. So I get called in. We all get reputations for different things, and for good or bad, I got a reputation for being able to make software reasonably fast or reasonably efficient. So I get called in to sort of fix performance issues or go through the next generation of a product so they can compete better. And in part of doing that, you can't really get stuff to perform well until you can reliably deliver software. And a lot of that is having decent tests, decent CI, being able to do continuous delivery, actually knowing you're building the right things. And as you start putting all of that in place it kind of makes the delivery of software nicer. So people don't in the end just get their software performance issue fixed, a lot of the process gets fixed in it and people start realizing, ah, there's better ways of doing stuff.

**Jessica:** [00:05:14] Okay, that's really interesting. So you start with trying to make it faster, then you wind up having to make it smoother.

**Martin:** Well, how do you know you've made it faster unless you can actually run a test or a measurement to see that it is. And that usually means you're iterating and trying things. So if you can't build and release your software quickly, your cycles of doing that aren't that many. So you want, you want those cycles to be as short as possible. I see, if you look at from a performance perspective, one of the key things we have to focus on is things like queuing theory. And queuing theory and Little's Law and all that goodness is actually the fundamentals behind lean software delivery. And core to that is having a small cycle time. The smaller the cycle time, the better you can react. It's exactly the same in software as it is in the delivery of software.

**Jessica:** So you wind up using some of the same principles in improving the performance of the code as in improving the, the whole team?

**Martin:** [00:06:15] Yeah, it's a system. System being code or system being people, it's still the same thing. Same mathematics apply.

**Jessica:** Same mathematics apply. I like that. And yet you also have to be nice to them.

**Martin:** Yeah. Computers, you don't have to be nice to them, but actually being nice to them, you get better things out of them. It's the same with anything. You abuse any system, it doesn't behave very well. It's not really fit for purpose. You abuse a team, they don't perform very well. You abuse a computer, it doesn't perform very well.

**Jessica:** And that's your mechanical sympathy work, right?

**Martin:** Exactly.

**Jessica:** Is learning how to be nice to the hardware?

**Martin:** Oh, kind of have an understanding for it and use it with some sympathy and empathy. I think it's one of those kind of classically wrongly attributed names. It should really be empathy, but sympathy sort of has stuck. Now, it's a term stolen from Jackie Stewart, the racing driver, so it's not mine. I just reappropriated it for use in computing.

**Jessica:** [00:07:22] That's every idea, right? It's never new, it's just reappropriated and suddenly more useful.

**Martin:** Yeah, different context, same idea.

**Jessica:** Okay, so then you wind up applying that to teams as well. What is it out of queuing theory that you find applies to software delivery?

**Martin:** A number of things, cycle time being one of the key things to focus on. So if you have any idea, how do you get that idea tested and get feedback from that. The shorter the cycle time, the sooner you get feedback, the quicker you can iterate, the quicker you can change direction. A lot of what we do is we, we guess. We have an idea, but this is just basic scientific method. We have an idea for how something works. We create an experiment that lets us verify our model of how we think it works. We need to analyze the results of that experiment, and if we're wrong, we need to go back and reevaluate And that's the basic cycle of learning. The faster you can perform that cycle, the quicker you learn.

**Jessica:** [00:08:24] You measure cycle time from idea to feedback. And feedback in the performance case would be performance tests?

**Martin:** Yeah, results of performance tests. So you think you've got an issue in the code, for example, you can have your theory for it, write the tests to prove it, run the tests, see what figures you get. Usually you're combining that with profiling, which is part of the analysis phase to see where your time spent, work at how you shorten that time, which is shortening the feedback cycle. We run it again, can you get things done quicker? And so like that's basic queuing theory standing there, simple, but other things that fit in it is things run at different paces. There's always multiple components in any given system, multiple threads, multiple nodes in a distributed system. The reason we have buffers in all systems is because things go out of step slightly at times, and how do we buffer the different temporal side of things? And that's the point of having them, and the buffering gives us a bit of slack. Do the same thing with the team. If the team is running at full capacity with no slack, they have no buffering, they have no means to react, no means of changing direction quickly. And if they're gone beyond sort of maximum capacity so that they're actually at their complete bandwidth, they start having things queue up and you end up with a huge backlog. Same thing.

**Jessica:** [00:09:53] Yeah, and then that backlog makes sure that they don't have any slack, which leads to— yeah, that's an interesting point because it's hard to sell that sometimes, that slack is essential.

**Martin:** We can see it manifest in different places. So consider a road system and cars, you can make a slight increase in the amount of traffic, and all of a sudden it just gridlocks and you make no progress. So small amounts of increase can have quite a significant input. So simple example from queueing theory is you want to look at what's the utilization on any given system, and then you look at average wait time given a certain level of utilization. So to give a more concrete example, imagine I have a system that takes 100 milliseconds to do a particular task, and things are arriving at 1 per second. I'll be spending 100 milliseconds per second doing that, doing work, and 900 milliseconds not doing anything. That's a utilization of 10%. If I have 5 arriving per second, I'm not going to be using 5 times 100 milliseconds of my seconds, so I'm 50% utilized. You look at the probability of waiting at that point. So if a new job comes up, the probability that the system's in use is 50%. So you're on average going to be waiting for the time to do your job plus half of another job that's happening because statistically it'll be 50% utilized. As you increase utilization, you go up an interesting curve, becomes a J curve. And beyond 70—

**Jessica:** [00:11:42] Spell that?

**Martin:** A J curve. So J as in the letter.

**Jessica:** Oh, J like the letter J. Okay. That's a short spelling. Got it.

**Martin:** Yeah. As in the beginning of your name.

**Jessica:** Yes.

**Martin:** So think about how that letter goes. So, and it's actually pretty close to what reality is like as we apply a little bit of load to a system, a little bit of stress, It actually gets a bit faster because it warms up, it's functioning well. And then as you increase load more and more, response time starts to grow more and more because the system is in use. And so whenever new work turns up, the probability of it being in use is increasing and it compounds. And so beyond like sort of 70+%, you get queues forming to use the resource because it's highly utilized. And so you're waiting on the queue when you go to get any work done. And this is why roads get into gridlock, whilst we get behavior and systems taking a long time to respond. So you start focusing on things like the feedback cycle and cycle time. So say that service takes 100 milliseconds, and say things are running at 9 per second arriving, we'll be running at 90% utilization. The math on that typically turns out at you'll be waiting for around about 1 second to get the work done whenever the job is only 100 milliseconds because of the queuing effect. If you profile that job and discover that I can get that job done in 50 milliseconds rather than 100 milliseconds by improving it, you don't make the system twice as responsive, you make the system 20 times more responsive. And that sort of can be a bit counterintuitive to people, but how that happens is if you take the math being 50% or 50 milliseconds for the job, still arriving at 9 per second because that's the external influence on the system. It's only using 450 milliseconds per second, which makes it 45% utilized. And the average time for one job has also been halved as well. So you're now 20x more responsive.

**Jessica:** [00:13:49] Okay, so now that's assuming you kept the amount of resources the same, right?

**Martin:** Yes, so that's the resources the same and the arrival rate into the system being the same.

**Jessica:** So could— so you're saying that like part of the improvement in response time due to the improvement in how long the job takes is in fact because it adds slack to the system?

**Martin:** Yep, because it reduces utilization.

**Jessica:** So in that case, could you get that piece of the performance improvement by increasing resources?

**Martin:** You can if the work can be distributed without contention. And that's where you're into some of the other interesting parts of the mathematics— Universal Scalability Law. Most people have heard of Amdahl's Law, which is kind of interesting, but it's only a very narrow view on things. Universal Scalability Law is more comprehensive in that it covers what part of the job can be split up and shared between people, but it also covers the coherence costs, which is effectively the time to reach agreement between parties working together. The same math has appeared in other places. If you've read Mythical Man-Month, Fred Brooks's— Brooks's Law is actually Universal Scalability Law simultaneously discovered and given a different name. So if you add people to a project, the time to bring them up to speed is the time for them to become coherent with the project, which slows them down. And this I find fascinating is the mathematics for systems, the mathematics for people are all very similar because it's just a system.

**Jessica:** [00:15:30] Yeah. So if you happen to be able to like just double the size of the computer you were running on, that would be an easy gain because it would not require additional coordination.

**Martin:** Depends.

**Jessica:** Depends on whether it's the CPU.

**Martin:** It's not even so much the CPUs, is the workload decomposable. If the workload is not decomposable, it needs to decompose and be able to be done in parallel but not concurrently, where the fundamental difference between parallelism and concurrency— so parallelism is doing multiple things at the same time, concurrency is dealing with multiple things at the same time. If you've got coordination required, yeah, I like that, I like that. Yeah, so that's blatantly stolen from Rob Pike.

**Jessica:** Concurrency requires coordination?

**Martin:** Yes.

**Jessica:** What you're doing when you reduce the amount of time that the job takes to do is you're decreasing utilization with no additional coherence penalty.

**Martin:** [00:16:34] If you can, that's the great side of it. So that would be an example of having one resource that could do stuff. There's other interesting math where you get multiple resources and then they interact. But usually a team functions fairly well. So if the team is stable, the people have got good working practices, and you work out how to make them faster, but you don't add or remove people from the team, at least you have a steady state. Because that's one of the fundamentals of Little's Law, is you must be in steady state. If you're changing the state, then you've got different math coming in to start to apply.

**Jessica:** Yeah, steady state is hard to get to in a team. It is.

**Martin:** You need it. And this is why if you look at other disciplines, so software is starting to learn this, but teams in other disciplines, they stay together because they get good working practices and they've achieved steady state. If we are constantly breaking teams up and reforming them, that's different. We're dealing with a whole pile of different parameters then.

**Jessica:** Yeah, yeah. And that, that comes from the same problem as the lack of slack. It's this resource utilization maximization.

**Martin:** [00:17:43] Because we're spending time on achieving coherence.

**Jessica:** And yeah, you need that coherence before you can even get into the steady state, right?

**Martin:** Yeah. Well, if you look at universal scalability law, the alpha and the beta, the 2 fundamental factors in it, one is, can you subdivide the work, which is the contention penalty? And the other bit is, what is the penalty of the coherence within the time to reach agreement? If your team has become more efficient and they can reach agreement faster, they can get better throughput because they've got better parallelism with less concurrency. Because they're not having to deal with multiple things at the same time, they're just doing multiple things at the same time with very low overhead in the coherence.

**Jessica:** And that would be like parallelism?

**Martin:** Mm-hmm.

**Jessica:** Okay, so you move toward concurrency to parallelism when you—

**Martin:** Yeah, so that's one way to get much more throughput in any system is you want to look at how do you minimize the concurrency and maximize the parallelism.

**Jessica:** [00:18:44] Hmm, yeah. And when you get like mutual predictability within a team, then it takes a lot less explicit coordination.

**Martin:** Mm-hmm.

**Jessica:** And that, yeah, that's also true in our software.

**Martin:** It is. As Conway's Law has pointed out, that we end up building software that's a representation of the communication structure of the team that built it.

**Jessica:** Yeah. And I think any I think that's necessary too, because if the team doesn't have a communication structure that matches the software, then you're going to have problems.

**Martin:** Yeah. If you've got a team that communicates dysfunctionally, software is probably going to communicate dysfunctionally.

**Jessica:** Oh, yeah.

**Martin:** Team that communicates well, software will tend to communicate well, especially whenever you've got good separation of concerns, good separation of responsibilities. With nice efficient communication between those that's nicely decoupled, cohesive where it needs to be. All this kind of stuff is good. It just reflects in the software. The part of what I was saying to begin with, like treating people well and behaving well, and protocols being one of my passions, is then to think, how do these things interact? Because it manifests in the people and it also manifests in the software. If you don't practice interacting well with people, How do you ever expect your software to interact well with other components? It's just the same skills. In fact, it's kind of more pleasant to do it with people. Let's refine those skills and get better at it rather than being unpleasant.

**Jessica:** [00:20:19] Yeah, it is more fun. So how do you define protocol?

**Martin:** Protocol. There's many sort of ways you could more technically describe it. But for me, probably the simplest way to think about it is it's just the rules for engaging or interaction between components in a system.

**Jessica:** Or—

**Martin:** and when I say components in a system, that can be people, can be software, can be whatever. And for that, you're looking at what is the treatment and etiquette for how they behave, and what is the precedence applied to that treatment and etiquette. So that's the kind of fundamentals of it. So how do you behave, but also how do you behave in order? Because the ordering is really important and often overlooked, particularly in concurrent systems where people expect an order of things to happen, but that's not often the case. So how do we make sure you behave correctly when things happen out of order, just like it does in real life?

**Jessica:** How do we deal with that in real life?

**Martin:** [00:21:21] We deal with exceptions. We don't expect perfection. If you're expecting perfection, we would get disappointed very quickly. So we have natural compensating strategies for it. So if we interact with the software component, the closer it behaves to the right rules, the better. It's going to be more efficient. But we also got to be prepared for the things don't always happen exactly in the right orders. And that's usually where things get more brittle or fragile, is where the expectations are too strong with no flexibility or taking account of the fact that things can happen out of order or happen wrong.

**Jessica:** Yeah, expectations are too strong.

**Martin:** Yeah, anybody who's sort of spent enough time in distributed or concurrent systems, you get to the point of saying you just know that systems are going to behave in odd ways, either deliberately or accidentally. And so it's kind of just something you prepare for and you guard against rather than just expecting it all to work great.

**Jessica:** [00:22:26] Yeah, yeah, as humans, when we never have perfect common ground, we never have perfect coherence with our team, but what we do is when we notice a discrepancy, we talk to the person.

**Martin:** Yeah, and we will talk in ways, and it's kind of an interesting thing about language. Being a native English speaker, even though I speak with a weird accent, And talking to other people who aren't is one of the things I've started to learn over the years is English is a kind of weird language in that it's got very little redundancy and it's very directive. And I learned this by talking to people who come from particularly further out in the Eastern Bloc where many languages all interact with each other. And I think it's part of like a British Empire and a colonial point of view. It's very dictatorial, tells people what to do and puts the whole onus on the receiver of information to work out any ambiguities and deal with it. Where some interesting languages that are coming out of the Middle East and Asia, they approach things from multiple angles with lots of redundancy and lots of overlap to smooth out potential misunderstandings. And I find that really fascinating hearing those sort of perspectives from other people, and it's something I'd probably like to learn a lot more about. We kind of are in a very different position that we just don't experience that because of our background.

**Jessica:** [00:23:57] Oh, that's really fascinating. It sounds, I mean, I mean, I immediately want to say, but, but isn't that inefficient?

**Martin:** Possibly inefficient, but it's also safer.

**Jessica:** Yeah. Yeah. Which goes back to the, if you don't have any slack, if you're worrying about efficiency, about utilization, You wind up making everything slower. You increase your cycle time because you don't have as much— well, in the language case, if you speak with redundancy, then that takes care of noise in the signal, right?

**Martin:** Yeah. Eliciting feedback, like right back to original information theory and Claude Shannon's work. He made it very clear the importance of feedback. Any communication is not considered complete until you close the cycle with getting feedback to confirm that the message has been transmitted and received appropriately, which is fundamental to most protocols. To send information and not confirm reception is very naive as an approach, and that's been understood for a long time, yet we see software built very much like that. Just expect things to be delivered safely. And I think it's unfortunate. It comes from a lot of corporations trying to sell silver bullets, and people will believe the story because they want to believe it, but reality is so disconnected from it. Two-phase commit being a really good example of this, whereby you don't need to worry about all the problems, all the distributed systems stuff will be taken care of in the two-phase commit. And that's kind of pushed to people. But if you study the protocol in any detail, you realize it's fundamentally broken. It's got the whole heuristic section where it gets complicated. But most people just kind of gloss over all of that. But corporations don't want to say that. It's a bit like how politicians sort of— they like to sell you the easy option and people get suckered into it and realize they do have responsibility in this and they're not abdicated from it.

**Jessica:** [00:26:05] Right. People love certainty. They will pay for certainty, even if it's false certainty, the feeling of certainty. Yeah. I like what you said about how real-life distributed systems people, the developers, do expect weird things to happen. Because when you, like, or when I at least read papers on distributed systems, they tend to start with the assumption that nothing Nothing— when computers fail, they fail like unambiguously.

**Martin:** Yeah, no, they don't. Yeah, things that industries— like, I've worked a lot on consensus and other protocols, and it's interesting, nodes just dying is not a problem. Zombies are the real problem. So there's one of the things I'll do in distributed systems quite a lot is that if something is in an indeterminate state and not behaving correctly, so it's gonna effectively behave like a zombie. The safest thing to do is just shoot it in the head and move on. Don't let it sort of limp on in a bad state. The damage they can cause is just terrible.

**Jessica:** [00:27:23] Yeah, yeah, they can eat your face.

**Martin:** Yeah.

**Jessica:** And the systems that talk to them.

**Martin:** Partial failure is much, much worse.

**Jessica:** It is. So how do you deal with that in protocols? How do you make— you mentioned waiting for feedback. Mm-hmm.

**Martin:** So a lot that can help in this piece is versioning, and versioning at all sorts of levels. So if people give out an old version of the software, the version has to be in the protocol, and that can be for the messages and the protocol itself. It's important, but it's really important to version the state. And so, for example, if you see a message and then you see a message again later, so say a message gets lost for a while, and this is possible, it could be that a machine sent something, it went to a switch, it got lost, it got retransmitted again later, or took some tortuous route around a network as the network got reshaped after a failure. Those are sort of things that can happen, but particularly really common problems are something takes a long GC pause. And it wakes up from the GC pause thinking that no time has passed, but a significant amount of time could have passed and the world's moved on. And then it starts communicating believing it's, it's sort of right up to date with everything. And then other things are receiving messages from it. And if it's got no versioning information in it, you can be getting old messages completely out of time and affecting behavior in bad ways. Whereas if everything's got a version on it, it becomes so much easier. And take that right up to the app level. So a lot of people will think, oh well, I'll just trust the underlying system, underlying transport, and if it gives me a guaranteed order, I'm okay. But they often don't go across sessions. So they may be ordered within a session, but you can have multiple sessions, and then you get a message from an old session turn up in a new session and you start acting on it. You get replay attacks, you can get all sorts of nasty things. And a good example of this was whenever we brought out TLS 1.3, there was an optimization that allowed connections to restart really quickly, but that exposed systems to replay attacks where you could get an action happen more than once. It wouldn't be idempotent, and that's really dangerous. But from an application perspective, This is very easy to deal with. People just acknowledge the responsibility and say, okay, I'm going to make my communications idempotent. If every message I send has a unique sequence number or correlation ID from the application perspective, then whenever you receive it, if the correlation ID is purely monotonic and you've reached a certain position, you get a replay of a message from a previous position, you just ignore it. And then it just works. If you were just replay the message to the system again, now you're into a world of hurt.

**Jessica:** [00:30:29] Nice. So this gets into the application understanding something about the layers below it, of the transport layers and the limitations of reality there. Because you've mentioned that this is easy to deal with at the app level, but at the abstract transport level, it's impossible to get perfect.

**Martin:** Yes.

**Jessica:** Yeah, kind of like with people.

**Martin:** Yeah, let's just think like a basic banking system, like perform a withdrawal or perform a debit. Each of them has a unique transaction ID and it's purely monotonic. It's really easy to deal with things out of order or things that are missing or things that are replayed in duplicates because you can see it. If you don't do that, and I think that's— it's part of the hygiene factor That if we get more grown up in writing software, there's some basic things. For me, it's very similar to like a surgeon will not consider performing an operation without washing their hands.

**Jessica:** [00:31:31] It's anymore.

**Martin:** It's just that's how it is. But for people not being aware of having monotonic sequences or having tests in place or having good CI and all of these things, I just consider them hygiene. To not do that is just unprofessional.

**Jessica:** Yeah, yeah. Well, at least it doesn't meet the standards that our profession will have once it gets there. Because the surgical hygiene is a good example, because 150 years ago, they did not wash their hands. And when— I forget their names— but when people figured out that no, washing your hands makes a big difference, I mean, the medical profession's just like, rejected that. They were like, because it meant, it meant accepting responsibility for having been doing it wrong and killing people in the past.

**Martin:** So the credit for that belongs to Florence Nightingale. She was a nurse, but she was also a statistician. That's what she did, is something she did before getting into being a nurse. And she popularized the use of the pie chart by showing the percentage of people, because they Describing percentages to people, they sort of project back 150-plus years ago, and trying to say percentages to people, it didn't make sense to the average person. But you showed them a pie, and this chunk of the pie went this way or this way. So it wasn't her invention, but she popularized it. And she showed that this is how the pie gets cut in different ways for infections after operations by doing those things. So it's kind of a wonderful way to demonstrate the point. And advance that whole thing.

**Jessica:** [00:33:10] It's nice for people who didn't understand percentages.

**Martin:** Yeah. Yeah. Kind of nice. And it doesn't mean that you would never do that. So I'm sure if a surgeon was at a roadside traffic accident, they're not gonna wash their hands. They're gonna rush in. They're gonna help people, whatever. But that's appropriate for that point in time.

**Jessica:** They probably weren't just doing an autopsy either.

**Martin:** No, no. But if you're in a place where you're prepared, you're doing it. Because you think about, to deal with an infarction, after the fact is going to take resources, gonna take time. There's probably gonna have to be follow-on surgical procedures and other things if you don't do that. So it's actually time-saving. It's not that it's a waste, it's actually time-saving in the end. And I think it's very similar for us. For me, having good CI and good tests is a time-saving thing for the future because I'm not going back and dealing with that.

**Jessica:** It's It's a question of scale. A little bit of time now. And hygiene is a good word for that, or prudence, because not doing it has consequences that you can't predict exactly what's going to go wrong. Yeah. People struggle with that. Well, what'll happen if you don't do this? I don't know, but it'll be bad at some point. Managers don't respond to that as well. But it's true.

[00:34:36] It is. And the other part is we don't— we need to, like, not feel bad for not having known this in the past, but we can learn, like, how to version our messages and deal with that at the app level, because that is a piece that people can't give you certainty about. It's not a thing. And when you accept that you don't have certainty, then you can do something, like you pointed out, looking for these problems, shooting the zombies in the head, dropping the messages that are out of date. And on top of those layers, you get relative certainty, right? You get idempotency.

**Martin:** Since protocols was part of what I wanted to talk about, this is just another protocol. It's a protocol of how we should do development. This is the etiquette, this is the behavior, and this is the precedence. Take precedence as an example, because you convert this to talking about testing for a second. If someone reports a bug and you fix the bug and you write the test after the fact, you get the precedence that way around. Now let's say your test passes, but the test is just bogus. It doesn't say anything about the test. You may have actually fixed the bug, that could be fine, and you've retrofitted a test. That may not be good.

**Jessica:** [00:35:57] Never trust a test you haven't seen fail.

**Martin:** So flip this around. Somebody reports a bug, you write the test, you see the test fail. Now you've got falsifiability. It's fundamental of science. I've seen the test fail. I have falsified that the current system meets its requirements because it doesn't. I have an experiment with this test now that shows that the system is falsifiably not correct at the moment. Then I fix the bug and the test passes. That's a protocol for the correct precedence for how we should be doing these things. That's just scientific maturity. To do it the other way around, it's just, it's not showing the same level of maturity. And I like your point about, yeah, we shouldn't feel bad about this because Think, software's only been around for a few decades in the relative history of humans, and the amount of it that we need and the expansion of it and the fact that we've rushed people into it— we haven't learned it like a trade. We haven't built generations of people passing on how to get better and better at this. We're trying to work it out in a hurry. So let's draw from other disciplines where we can, but we still will keep making loads of mistakes. I think part of this is admitting that we make these mistakes and get it wrong. That's also a good protocol for how we should interact. And then we can learn faster. Like, how do we shorten those feedback cycles? What are all the different tools we've got to help us through this learning process as quickly as possible? And start interacting as people who admit that, because that'll put better protocols in place for how we actually behave rather than pretend it's something else.

**Jessica:** [00:37:44] Because a crucial part of every protocol is how does it change?

**Martin:** And as we learn, we evolve protocols.

**Jessica:** We do, and, and that's why the protocols need versioning.

**Martin:** Yeah, and there's lots of examples of protocols elsewhere that work well, like our legal systems are codified protocols.

**Jessica:** Oh, totally, and they can change too.

**Martin:** Yeah, and they do as we learn.

**Jessica:** Yeah, I like, I like the part about Pie charts, because Florence Nightingale made pie charts for backwards compatibility with people who don't know about percentages.

**Martin:** Well, it's just something they can relate to. We often learn by metaphor and analogy. It's some of our best techniques. We use that, we use storytelling, we use whatever. People need something they can relate to. Unfortunately, software is really difficult because it's so unusual and so different to what's gone before. Reach for metaphor and analogy that's quite weak and doesn't really work for us. I think Dijkstra pointed that out quite well with some of the papers he wrote and how it is so fundamentally different. You read his stuff where he talked about how there's a couple of things within software that are just so unique. One is the impact. So it's so different and so It's so novel. Its level of being novel is so different. The metaphor and analogy just totally breaks down. There's only been a few cases in human history where that has existed elsewhere. Things like quantum mechanics being a good example compared to existing physics. It just is so novel, so different. But then we look at, well, how people behave, even behave in war. The invention of atomic weapons, totally changed the protocol by which we can ever engage in war again. So most of what we had gone before just had to be changed. It's just so different. It's on a scale. So that was kind of one side to sulfur, which I think was really nicely pointed out. And the other side was the amplification effect of a single change. Very seldom ever been in human history where you can make one such small change can have such a catastrophic effect. Think about how a piece of software that's got millions of lines of code and just one bit being incorrect can make the thing fundamentally fail.

**Jessica:** [00:40:17] Oh, and not just that thing, but all the things that are depending on it, because it probably doesn't just fail. It probably goes into some degraded mode that they don't even know about.

**Martin:** Yeah. And there's nothing in human history that's been like that. So, like, we're evolved with brains to cope with certain things, and we build things over time. And things like protocols are one of the best examples of how we scale as a human race and as cultures and societies. And even those have not taken account of software because it is just so fundamentally different.

**Jessica:** The beauty of that is as we're learning to understand software, we're finding it's not just new things to think, but new ways how to think. And then you take things like your queuing theory that work for responsiveness, that work for software delivery, and we apply them back to people. And so we're finding new ways to live in our human worlds.

**Martin:** [00:41:19] Yeah. And ideally, where lots of people bounce those ideas off, and you've done a great job of pointing that out, and how small groups of people get together and just can really fire off each other and change thinking. Ideally bringing multiple different skills to something and realizing that these things interact.

**Jessica:** Right, they interact and they interact at different speeds. As you mentioned earlier, you said things run at different paces and that very much happens in humans too.

**Martin:** Yes.

**Jessica:** Like when you're talking about changing the way teams do delivery, That starts at the team level, right? And you can't expect the whole organization to change at the same pace. Sometimes that gets frustrating. Yeah.

**Martin:** Well, just think of the amount of energy you'd have to put— look at any system as a system and look at the energy that needs to be put in to disturb it from one state to another. You can put enough energy in to change a small state and maybe get a ripple effect. But to do a large-scale change requires a vast amount of energy. And once you put a vast amount of energy into anything, shockwaves and other things can happen as consequences.

**Jessica:** [00:42:34] And the scary thing about the software amplification effect is that it can be close to instantaneous.

**Martin:** Yeah.

**Jessica:** Whereas anything big in a human system is going to take time to propagate.

**Martin:** Well, and mostly the buffering can also allow it to be contained before it goes too far. Without buffering, things do go and spread much, much faster. Think of like how shockwave goes through air versus a shockwave through a liquid. It goes much faster through a liquid because there is no space between the molecules compared to what there is in a gas. So the rate of propagation is much higher.

**Jessica:** Right. Which gets us back to colonization and dictatorial, which is intended to propagate unhealthily fast in some cases.

**Martin:** But yeah.

**Jessica:** The bureaucracy can save us.

**Martin:** Well, it's deliberate. There's lots of examples in history. If you looked into culture of Native Americans before us white folk turned up, they deliberately organized themselves such that in time of war, everything was done by committee, which deliberately slowed down change. And that's a good thing. And in time of war, the committee was disbanded, a warlord was appointed so that decisions can be made much more efficiently. But as soon as war over, that has to end straight away because there's consequences to both systems. But being upfront and admitting, yeah, it's slow and inefficient having a committee, but it's safer. And also means that radical change can be buffered before Whereas when you've got a warlord and very direct action coming out, that's good in a war, but you don't want that to continue afterwards. Because obviously the types of people who that would be applied to, you often don't want them behaving that way in peacetime.

**Jessica:** [00:44:31] Right, right. And then you get a dictator can efficiently make change, but the change always has consequences that you can't expect. Because, yeah, you can push that configuration change to production globally behind a feature flag. I think it was Cloudflare that took down recently.

**Martin:** Plenty of those.

**Jessica:** There was a pathological regular expression in the configuration. That totally violated the precedents. Of the continuous delivery protocol.

**Martin:** Yeah, but if you want fast feedback on a cycle, then you want to look at, well, how do I have good isolation? So you look at how do you have suitable buffering, and so not necessarily the same approach at all times.

**Jessica:** Ah, suitable buffering. There's that— you mentioned appropriateness of process earlier.

**Martin:** [00:45:33] Yeah, so a canary would be a good example of that, where you're going to put it out, it's reasonably isolated, it doesn't spread everywhere, but you get the feedback.

**Jessica:** Right, yeah, like, like you try a process change in one team and see what happens, and then propagate that. It applies at many levels. What's your favorite thing that you've learned this year? A favorite thing. There isn't the favorite, there's just a thing.

**Martin:** I've read an interesting article about human behavior and that generally people never act from any sort of malicious intent was kind of part of it. But the real surprising nugget I find in it was that people are always trying to do the right thing. And including when people procrastinate and don't do anything, they're actually doing the right thing. In their own mind, and that's usually because they don't have sufficient information, or there's something worrying them in the road ahead. And how you can use that as a really good canary for something to watch out for. So not to be afraid of it, or not— so you actually use it as an information point rather than something that should worry you ever when running a team. So people procrastinating usually is a big flag.

**Jessica:** [00:46:54] Oh wow, that's really interesting. So procrastination is like our internal committee slowing us down.

**Martin:** Yeah, it's caution coming in, and we in sort of modern society have changed to treat that to be a bad thing when it's actually a very useful data point.

**Jessica:** Yeah, because there's, there's wisdom inside us that, that we don't know how to put into English words yet.

**Martin:** Yeah. And we started just observing when it happens, and it's usually, it is a warning of something to come, and people often can't even vocalize it.

**Jessica:** Well, that is really useful because now when I'm procrastinating, I can think, what am I worried about?

**Martin:** Mm-hmm.

**Jessica:** Where's the insufficient information I need? Wow, that is like the most useful insight about procrastination I've heard in a while. And in our protocols that we have for people, There is wisdom in them. Yeah, we can't always understand.

**Martin:** Almost like, don't treat anything as bad behavior. It's just interesting information.

**Jessica:** [00:47:55] Okay, before we end, is there anything else that you'd like to say to the listeners of Arrested DevOps?

**Martin:** I think sort of slow down and think more. Maybe it's because I'm getting old. Maybe I'm just slowing down myself, but I'm finding huge value in that. And if anything, I think it's actually making me faster over any sort of reasonable amount of time rather than in the short term. So we often rush to things instead of just starting to trust your own instincts and how you learn. So often just slowing down and pausing is actually one of the best ways to speed up.

**Jessica:** Beautiful. Excellent. Thank you. Thank you so much for joining us today. To our listeners, you can find this episode at arresteddevops.com/protocols, and we'll put some show notes there for some of the things that we've referenced. That site also has our newsletter and various other Arrested DevOps things. You can leave us a review at arresteddevops.com/itunes and help other people find this amazing podcast. Martin, how can people get a hold of you? How can they find more of your material?

**Martin:** [00:49:07] Twitter, probably an easy thing. So @MJPT777 on Twitter, or follow me on GitHub where I'm generally spending most of my time committing to open source.

**Jessica:** @MJPT777 there too?

**Martin:** Yes.

**Jessica:** I'm Jessica Kerr, @Jessitron on Twitter. Martin, thank you very much.

**Martin:** And thanks for having me in the banana stand.

**Jessica:** You got the banana stand bit, and that is where there is always DevOps.
