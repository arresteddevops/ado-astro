**Dan:** [00:00:00] An instance is broken. It's infected. It's got memory problem. It's got something. You just nuke it.

**Jessica:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Jessica Kerr, and I am excited to have the authors of Secure by Design on the show today. But first, a word from our sponsors. This episode is sponsored by CircleCI. Designed for modern software teams, CircleCI's continuous integration and delivery platform helps developers push code with confidence. Trusted by thousands of companies, from 4-person startups to Fortune 500 businesses, CircleCI helps teams take their software from idea to delivery quickly, safely, and at scale. Visit arresteddevops.com/circleci to learn why high-performing DevOps teams use CircleCI to automate and accelerate their CI/CD pipelines. If you are like most of your friends in DevOps, you probably prefer using open-source solutions for observability, but you also wish you didn't have to sacrifice scalability, performance, and simplicity. With Logz.io, you get the best of both worlds for your cloud environment. You can use the tools you love at the scale you need. Logz.io is a fully managed service that offers complete cloud observability for engineers on one unified platform. Log management and cloud SIEM based on ELK and infrastructure monitoring based on Grafana. To give it a try for yourself, sign up for a free 14-day trial today at logz.io/ado. And for your chance to win a free Logz.io t-shirt.

[00:01:59] The worst thing about the Arrested DevOps podcast is when it ends. You're left wondering what to do next. What are you going to listen to on your commute home? How do you occupy your time when walking the dog? What are you going to listen to during the quarterly all-hands meeting? But fear not, dear listener, there is a solution. You need to subscribe to Software Defined Talk right now. It's a weekly podcast that recaps all the news in cloud computing, DevOps, and enterprise software. The hosts, Cote, Matt Ray, and Brandon Wichard, will keep you up to date on all things cloud while offering tips on how to optimize your Costco haul and how to PowerPoint. It's a fun, free-flowing conversation that will keep you entertained and informed. What are you waiting for? Subscribe to the podcast today by visiting softwaredefinedtalk.com or by searching for Software Defined Talk in your favorite podcast app. Welcome, Dan, Daniel, and Daniel. Will you each introduce yourself?

**Dan:** [00:03:00] Hi, I'm Dan Berg Johnson, programmer by heart, interested in security a long time, kind of like agile philosopher guy. That's me.

**Daniel Deogun:** And my name is Daniel Deogun. I'm a Coder at heart, craftsman, you know, a guy who loves writing good software and, of course, secure software.

**Daniel Sawano:** And I'm Daniel Sawano, also a developer by heart, but I also go by the name of security engineer sometimes and architect.

**Jessica:** Y'all are all in Sweden, right?

**Daniel Sawano:** Yes, in Stockholm.

**Jessica:** Yeah.

**Daniel Deogun:** Yeah.

**Jessica:** How— okay, great. The book Secure by Design. I invited you on the show because I started reading it and I immediately fell in love with it. I love it because it combines the purposes of security and good software design, period.

**Dan:** That's lovely. Thanks.

**Jessica:** As a developer, I'm like, uh, security, I don't know anything about security. I can't know everything. But yet, what— but yet when you start talking about design, I'm like, oh, as a developer, I must be good at designing. That is my job.

**Dan:** [00:04:16] Well, and that's kind of a little bit like the backstory for each of us, that we've always nurtured an interest in that security is important. But a lot of times security comes like a distraction or an afterthought. And when you sit coding and you learn that, oh, and you must also think security first, you get distracted because I've got this domain model to craft. I've got this code to get together. I've got this functionality to wrap my head around. And the nice thing that we've, like, independently worked with the designs and realized that there's a lot of good designs that kind of come natural to us as programmers, but which has the interesting a side effect that they also prevent security-related bugs, thus giving you an amount of security for free to some extent.

**Jessica:** Come naturally to you as a programmer? Do they come naturally to everyone?

**Daniel Deogun:** [00:05:22] Well, it kind of depends on what you claim is natural, of course, but I think that, or we all think that Most developers love crafting good software, and they love thinking about how to make your code beautiful in all kinds of ways. And sometimes security isn't thought of as the sort of the natural thing to think about, but if you choose the right patterns, somehow you get these security benefits sort of implicitly. And that's what we mean by getting it natural, so to say.

**Daniel Sawano:** That makes sense. Just to add to that, I think once you start to connect the dots and see how the practices that you as a developer and an architect already know, and then see how that relates to actually increasing the security of your system, once you start realizing that, that's, to me, I think will be an aha moment for most people.

**Dan:** [00:06:28] So basically, what we've been doing for a few years, so like the better part of a decade, is that as developers, while coding, we've been thinking about, hmm, let's see, if I use object orientation in this way, then I actually avoid, for example, cross-site scripting to a larger extent. No guarantee, but to a better extent. And then try to pick out the design patterns that are most powerful. So, for example, we've got one of our major things that chapter 5 is circling around, a concept we call domain primitives. We make a hardened value object that are really native to your domain. And guaranteed to be valid. So that's a way of crafting it. And at the end of the day, it's just a coding practice, but that also gives you a lot of side effects. So when we say that it comes natural, we mean that as a developer, when you sit and craft your day-to-day code, thinking about nice designs often feel like a natural thing to do. It's like, oh, should I split these objects? Oh yes, I should. Perhaps I should make it a domain primitive. And then it's just come natural. That's what we mean with that design is a more natural mode of thinking for developers in their day-to-day job than security. Security is not as natural in their day-to-day thinking.

**Jessica:** [00:08:13] Oh, yeah, totally. Because for security, I think I'm supposed to think about what wrong things people are gonna do with the system. And I really wanna think about the positive experiences that people have with the system.

**Dan:** Definitely.

**Jessica:** And the domain primitive that you talked about, it includes immutability, And sometimes, like, special mechanisms for secure data, like passwords, so that you only read it once, so you don't accidentally print it to the logs.

**Dan:** Yes. I think that the concepts you mentioned, that the constraints you put on the object, sort of very naturally stems from the object that you think of conceptually. And this is a very good example of where we have taken a lot of inspiration from domain-driven design, as phrased by Eric Evans, and become popular through a lot of people, and see how the domain focus can actually increase security. During a small period of time, we were talking about domain-driven security. Also, but we have realized that we want to cover a larger body of knowledge, a larger body of designs, not just coding patterns, but also architecture, pipelining, DevOps, a lot of stuff. But it's a good starting point to understand that using domain-driven design not only makes your code more expressive, solves more domain problems, Even though these designs were not crafted to address security to start with, they've also had that as a side effect. And this is kind of the gems we've found, the designs that also address security issues or mitigate them at least.

**Daniel Deogun:** [00:10:18] But one thing I really like about domain primitives is the fact that they make your code more explicit in, in almost every way. For instance, let's say you are, you're accepting a zip code as a parameter to your, to your method. And so the, the, I would say, common way to, to, um, uh, to represent this would be to use a string, but A string is too broad in general because it can fit any kind of character, right? But a zip code is actually well-defined depending on which country you're in, but it adheres to a certain set of rules. And by defining your zip code as a domain primitive, you can suddenly say, oh, my input window it's only going to be valid zip codes and nothing else. That means that an attacker can't inject anything except for a valid zip code. Of course, a valid zip code could still do harm, but at least you've now decreased your attack window, so to say, in your application in a very efficient, easy way, so to say.

**Jessica:** [00:11:39] I love that what, what you're recommending in this part is to think harder about what you do want in the system, express that in the code, and suddenly a bunch of the things that you don't want in the system just aren't.

**Daniel Sawano:** Yeah, exactly. And if you focus, like you said earlier, Jessica, like when developers start thinking about security, you think that you have to think about what's going to go wrong, what potential malicious stuff can happen. But if you focus on what's what it should do and make sure that your code does only that and nothing else, then you can get these positive side effects. So we're kind of twisting it around. We're looking at the same problem, solving the same problem, but we're twisting it around and presenting it in a way that hopefully is more approachable by developers.

**Dan:** And I'd like to point out that this is not only about how you craft your code. The kind of coding practice is just one small part of secure by design. I think it's the part which is most accessible for developers to start with, but I think it's important to point out that there's so many other, like, good designs or good working habits that also have the same side effect. For example, Daniel Dennett mentioned that we craft code that only does what you intended to. And of course, that could be expressed in the way you craft your test suite. So, that's another way of doing it that we will also dive into, that how can you think as a developer in ways of designing your test suite? Like, you're doing test-driven development, then you often focus on the positive tests that push your code to do stuff. And it becomes more broad and more potent. But you also want that restriction, that you also write the tests that limit your code, make it less potent, so that you can't sneak in those pesky attack strings, for example. So test design is also part of it. And then obviously, you get into the pipelining, etc., etc.

**Jessica:** [00:14:06] In the testing, I noticed you talked about 4 different levels of testing. You did not include property-based testing or generative testing. Was there a reason for that?

**Daniel Deogun:** Well, that is a good question. Of course, we discussed these various types of tests that we could include, and the And we sort of came down with these 4 different kinds that we talk about in the book of normal, boundary, and of course invalid and extreme input testing. And we figured that, well, we could write almost an entire book about various different types of tests and how you should go about it. And this was sort of the the top 4 we came down with.

**Dan:** But I think your question is interesting in another way. I mean, as we have been 3 of us writing a book, we've had a very tough regime on ourselves that we should only include things which is based on our collective experience. And almost evidence-based, because there's so many good designs and good ideas on security. And as Daniel mentioned, we could have written an entire library of books. So we also put the regime on us that we should be very intellectually honest. That we should only talk about stuff that we have among us, like, a heavy experience on that. Yes, we have done this. Yes, we have seen the benefits.

**Jessica:** [00:15:59] That makes sense.

**Dan:** So, property-based testing, I think, is an excellent idea. Please do it. But it's not our experience that we have done it extensively and can stand for saying that, yes, this is something that we have. So, Secure by Design covers a lot of stuff with other people's experiences that are not in the book.

**Jessica:** That makes sense. Yeah, when I saw some of the strings in the invalid input testing, like the Chinese characters and stuff like that, I was like, oh, yeah, I see that when I do property tests, because it makes strings of anything.

**Daniel Deogun:** Yeah, yeah.

**Dan:** Yes. Definitely.

**Daniel Sawano:** I can see material for a thread of blog posts coming up here.

**Dan:** Please, please, Jessica, write a blog post on it and on Vengeful that I think this should have been in the book. But those Swedes, they are just too Swedish to put it in there just because they had done it.

**Daniel Sawano:** Second edition.

**Dan:** [00:17:00] Yeah, exactly.

**Daniel Deogun:** You have to leave some material for the second edition, right? Isn't that— as an author, you have to do it. There you go.

**Jessica:** But you have a good point here because the part where most people are not yet using property tests makes it harder, that there's an extra barrier for them to start using that isn't necessary to just test invalid input, test extra character sets, test strings that are entirely too long, not just to see whether the invariants are upheld, but whether it completes at all.

**Dan:** Yes, you want to see that poor parser, like, crumble to dust and say, I'm not doing this any longer. I just give up, go home, and kill the process. Right, right. And you want that to happen on your build machine.

**Jessica:** Exactly.

**Dan:** Not in production.

**Daniel Deogun:** And I usually find it so interesting that when you work with, let's say, junior developers and they're really proud of their regular expression, of course, right, that they've crafted it so well. And then you write a test and say, whoops, I just killed it for you. And that's because they didn't do a length check before that. And, and they're like, well, that's not a, you know, that's not a name or whatever it is. And I say, well, I know, but as an attacker, you can of course do this.

**Jessica:** [00:18:23] Right. You didn't stop me from entering the entire text of Shakespeare.

**Dan:** And I think that's, that's an interesting part. I think this is one of, of, of Daniel's favorite phrasing that I proudly steal right now. Because we've written it together also, that we as programmers, we often, if you look at a method signature, it says string name as one of the parameters, then we as programmers focus on the name of the variable. Oh, this is a surname. So thus, we will test things that are name or name-ish, but an attacker, they focus on the type. They see what can fit into this box, and they will get the entire Shakespeare as one big string, and they send it in, and, well, the system comes crumbling down. And using design to kind of reduce this gap, to say that, no, we do not only look at what we tend to do, but we also try to close closed opening, but by making the window of what you can actually fit there smaller, it's very much to the spot.

**Jessica:** [00:19:43] Yeah.

**Daniel Sawano:** Yeah.

**Jessica:** The careful definition of what do I mean when I say a name and then defining it with its own type instead of, what do you call it, an anemic domain model of a string.

**Dan:** Yeah. Because like Java is, You know, stringly typed.

**Jessica:** Mm-hmm.

**Dan:** Everything is a string.

**Daniel Deogun:** Yeah.

**Dan:** We've seen, we've seen those systems where, where, where you have a type system, but you only use the string class. And then you open up.

**Daniel Deogun:** Yeah. Yeah.

**Dan:** Okay. All data is a string.

**Daniel Sawano:** It is possible to write a system that is completely stringly typed and is safe. It's just that it tends to be so much easier and more robust if you start defining your own domain types instead.

**Daniel Deogun:** I think there, Daniel, you put the finger on something that's really important. It's possible to do something with, you know, just using strings, but it's so much easier to do it the other way and more precise, so to say. And when I think about that, I always go like, wow, this is This is really how I like to craft code.

**Dan:** [00:20:58] I think also we can take that property and lift it over to something else, which is not code. For example, architecture, DevOps, deploy artifacts. Of course, it's possible to build a system in which you make your builds mutable. Deploy them onto a lot of servers, and then, like, configure and mutate them until they are kind of safe-ish.

**Jessica:** Kind of safe-ish?

**Dan:** Yeah, you know, we're on a DevOps podcast. But of course, it's much easier if you actually make your builds immutable, because there's less risk for mistakes. So, Still, and this is, I think, very important, still no guarantee. But by making your builds immutable, which to us is a DevOps design, you avoid 95% of common mistakes, which is pretty good for us.

**Daniel Deogun:** [00:22:05] Isn't it kind of fun when you create an immutable build, you start realizing, well, we don't need to be able to use SSH to log into the artifact. And so why do we need an SSH daemon on there? Well, we don't.

**Daniel Sawano:** And you can remove it.

**Dan:** Rip it out.

**Daniel Deogun:** Yeah. And suddenly it becomes impossible to use that as an entry point, right? Or why do you need any, I don't know, man pages in your OS? You can reduce the size of your artifact that way. I mean, there's so many things you can start doing when you're

[00:25:00] And, and I would say, um, one thing that's very important is that you should never, you know, if you, if you log input directly into your logs, it becomes an attack surface for, let's say, second-order injection attacks, which allows an attacker to basically exploit the weakness in a second system that processes the logs, for instance, right? Um, it could be, for instance, that your, your application doesn't care about some JavaScript that gets sent as input, whereas the log tool that processes the log, it has a weakness, and that JavaScript exploits that, right?

**Jessica:** Oh, so like you go to view your log in your log viewer, and that's a web app, and that executes the JavaScript, and that would like send something out?

**Dan:** [00:26:04] And the log viewer is probably run by the sysadmin, and the privileges of the sysadmin is probably pretty high, and they're probably running it inside the DMZ. So it's a perfect launchpad for doing a really, really hard attack on inside your system.

**Daniel Sawano:** Yeah, and of course you could say that, well, the admin log viewer tool, they should be coding securely and treat the log input as malicious, potentially malicious, but it's all about— of course they should. Yeah, it's all about, you know, If you can avoid it, just try not to log it. And there's more than just malicious data nowadays. If you dump everything into your logs, then your logs might end up containing personal information, and then you have to think about data retention policies and all those very fun regulations that you have to think about.

**Jessica:** [00:27:04] Right, I really don't want to make my logs radioactive with personal information.

**Daniel Sawano:** No, that's a Pandora's box to open.

**Dan:** And that's also one of the things we point out, that if you're doing this kind of logging as a service, which is a design pattern to some extent, then it opens up a lot of security benefits. For example, then you can split your logs into several log sinks, one of them being audit logs, which contains information on who accessed what data, which in Europe is extremely heavily regulated with the GDPR, or you can have metric data going somewhere else, or you can have error data going to a third place. So using this design opens up a lot of good stuff for security.

**Daniel Deogun:** [00:28:07] And also, just to get back to your original question there, how should you know what happened and so on, right? I mean, you could, at least in theory, you could have one log that's radioactive in itself, saying that this is all input and this should not be opened, you know, unless it's in a safe environment, right?

**Jessica:** Yeah, yeah, that would make sense.

**Daniel Deogun:** But I think the common mistake that many developers do is that they more or less dump input blindly and also sort of uses implicit serialization of objects. Let's say you're fetching something from a database and then you You just want to see what data did I get, right? Then you dump that. And if you use, say, I don't know, your favorite logging framework, and it has debug, info, warning, and so on, and you put the log level to debug, but then you wanted to see this in production as well, right? And well, debug is turned off in production, so you have to raise the level. And then you start getting into some deep problems because now you suddenly dump everything into your logs and you have no idea what's in there. Oh, yeah.

**Jessica:** [00:29:38] That can be a mess. And you didn't expect debug logging to be on in production, so you didn't really— you weren't as careful with that. Right. So, you probably—

**Daniel Deogun:** because you first put it as debug and then you realize that, wait a minute, in production we don't have debug. So, you raise it to info or some other level that's higher, and then you forget it, and it's there.

**Jessica:** And, you know, yeah, we have this illusion that logging is simple, and it isn't.

**Dan:** Yeah, definitely. And I think to put that in perspective, I think it's important to see that the facet that Daniel was just talking about, that often when we think about that, we design a system, we design it at a point of time. We have all the wisdom and knowledge of the system at that point of time. But that is never the case. A system is evolved during long periods of times where the knowledge of the developers who were in the system a few years ago and those that are now might not necessarily overlap. The insights might even be disjointed. So, that poor log.info that I had up there, it has been forgotten because developers have been cycled out and no one remembers it. And no one has even a chance to remember it. Same thing with the domain models that slowly evolve, or architecture that slowly evolves. And suddenly, you have done something that is a little bit incompatible with something that was done a few years ago. And then in the glitch between those 2 decisions, we end up with security weaknesses. And I think that perspective that things are evolving over time, that— I know that you're big on semantics here, that we learn of the system and the system learns from us, but also that knowledge is also fragile. So that we also forgot about each other. The system forgot about its developers and developers forgot, forget about parts of the system.

**Jessica:** [00:31:54] Yeah. If we're learning, we're necessarily constantly forgetting too.

**Dan:** And taken over time, that will end up with something that is not necessarily consistent. And that's the kind of consistent— and the inconsistency will manifest as security weaknesses, potentially at least. And that's the kind of things we try to avoid by applying good designs.

**Jessica:** You define security as 4 different areas. One of them is integrity, and that's what the inconsistencies violate.

**Dan:** Most often, yes. I think you're referring to the classical information security CIA triad. Yes, but it's a triad with 4, right?

**Jessica:** Yeah.

**Dan:** The confidentiality, which is what we most often think about security, things that are secret should be kept secret. Integrity, that things should not change unless they should change in a specific way. Availability, that things should be available when needed. Like 9/11. And also the fourth that haven't got a really good name, but which is something around, well, you should kind of keep track of who watched or changed what, like some kind of traceability or non-repudiation or auditability. Yeah. And that's the kind of mindset or framework that we've had in our mind when we If we say that something actually addresses a security issue, then we should be able to link back to these classical security concerns and say that this is something that actually increases availability, thus it addresses a security concern, thus we can claim it's secure by design.

**Jessica:** [00:33:56] Like dumping the works of Shakespeare into the text field, and that's going through someone's regular expression and everything dies. Uh, that's, that's not exposing confidential information, but it is violating availability.

**Dan:** Yes, that would open up a DDoS attack or just a DoS attack and would be able to take a system offline at some kind of critical, uh, timing. That is the trick that attackers do. They find a spot of the system of systems. And then when they're trying to attack system A, they know that system A is dependent on system B, and then they nuke system B, making it unavailable, and then they attack system A. And well, if A and B are not designed with this let it crash, self-recover, self-healing, antifragile mindset, then they will probably expose some kind of inconsistency, and that could be exploited.

**Daniel Sawano:** [00:35:02] Yeah. And I think the availability part can usually be somewhat hard to grasp for developers if they don't have a security background. Because usually, if you're a developer, you think about availability, you think about, you need to be scalable when you go viral and earn tons of money, right? But it actually is a security concern as well.

**Jessica:** Since this is a DevOps podcast, I should ask you more DevOpsy things. Ooh, ooh, one of the phrases that you used, and I think it was a chapter title, was talking about the benefits of cloud thinking.

**Dan:** Excellent. Thanks for hearing it. That's the buzzword. How does cloud thinking help? Yes. No, I. It's basically the same thing where we go around and collect design ideas from other areas and find that they also have a secure benefit. Like domain-driven design, we ended up with the domain primitives. And for DevOps, well, you have got all this stuff, the immutable builds that we mentioned earlier, to be able to do rolling deploys. To be able to scale up and down, to design your things so that they are stateless, so that you can easily rotate the cluster. And that opens up a surprising amount of security-related stuff. And I think with Daniel, Daniel has personally implemented systems that do wonderful things around that area.

**Daniel Deogun:** [00:36:43] But one thing I find so interesting about that particular chapter is that a lot of the design concepts that we bring up that are necessary for a cloud environment turn out to be fully applicable in a non-cloud environment. People tend not to use them simply because of, I don't know, laziness, or like, why should we? We only have, you know, one database and the IP is always the same, or, you know, we never change our password. It's set once and, well, it works, and so on.

**Dan:** I'd like to jump on that one. Just think about that scenario for a small amount of time. You've got a production database. It has got a username and a password. When was that password changed last time? How long ago was that password changed? A month? Well, probably not. Months? Years? I mean, we know a system that has had the same passwords for decades.

**Jessica:** [00:37:59] Oh, my first apartment complex, the gate code was 1984, because that's when the apartment complex was built? Excellent.

**Dan:** Of course. And we've got production databases with the same. So, every single operation personnel that has left the job since 1984 knows the database, production database password. Might that be a security risk? Perhaps. So, Can we in some way design a system so that it would be able to change the database password, perhaps during runtime, perhaps once a quarter, or once a month, or once an hour, or perhaps once every second minute? Or randomly. Randomly, or you want to hand out one-time passwords. And the interesting thing is, like Daniel said, that If you're using these, like immutable builds, externalized configurations, making things rolling deploy possible, then you can do that.

**Jessica:** [00:39:08] There's things that the cloud makes strictly necessary that don't seem so necessary in apps that are not in the cloud, but they're still a good idea. And now that we have all these cloud apps, we have ways of doing those things.

**Dan:** Yes. If you're not doing it in a cloud environment, then you're basically like toast. Then you actually have to pay extra to have those IP addresses locked down.

**Daniel Sawano:** Oh, right.

**Dan:** So it becomes more natural in a cloud environment. But as Daniel pointed out, all these things can be done on-prem as well. Yeah.

**Jessica:** And they're still a good idea.

**Daniel Sawano:** Yeah, and the cloud environment, regardless if you're running a private cloud or you're up in the public cloud, the environment will give you the tools, right? But then in order to be effective and tie everything together, you need to start automating stuff, and that's really where the operations part of it comes in, right? You need to— every business is unique in some ways, so you need really the DevOps concept need to step up and start thinking about these security aspects as well. So if you want to go— if you're, let's say, you're operating on a massive scale and you want to start rotating secrets to the left and to the right, you can't do that manually even if you have the tools in the platform. You really need to start working with automation and blur the lines between developers and operations.

**Jessica:** [00:40:43] Or developers. Yeah. And blur the lines between what people do and what code does and move anything you want done consistently into code. Yeah.

**Dan:** So in a way, we are instructing the system to become more intelligent. And when we see that, we take the problems that we see, perhaps the security problems that we see, and we put that Back to us as developers. As Daniel pointed out, you'd probably start with trying to do a lot of this stuff, well, perhaps not completely manual, but semi-automatically. But you get pushed into doing everything more and more automatically as the days go by. So, the system is not just the code that executes the business logic. The system is also all the tooling you've got, all the instructing you've got around your runtime environments, your auditing, your alarms, your— they're all part of the design of a system that's alive in some way.

**Daniel Deogun:** [00:41:55] I also think it's so interesting that once you have tried going full infrastructure as code, where everything is scripted, it's so hard to go back and create snowflakes. That you can't tear down the system and just with a push of a button, things are rebuilt. And yeah, it's definitely, yeah, it's strange.

**Jessica:** Yeah. Yeah. I can't even install anything on my laptop anymore. I'm like, nope, that's going in a Docker container.

**Daniel Deogun:** Right. Right.

**Dan:** Yeah. So sometimes you realize that a lot of, a lot of it, like production environments especially, They are a result of some kind of almost liturgic tradition of one system administrator handing over the system to the other. And each of them has put their hands on it in some quasi-magical ways. And if you say that, can't we just nuke it and start over? People go, oh no, we don't know what could be forgotten.

**Jessica:** [00:43:02] But that sounds so much more sanitary than passing it back and forth. Yeah, that's right, especially during these days. Exactly. Um, and, and that's— so we just talked about how when you get used to infrastructure as code and disposable, um, runtimes, that starts to come naturally. And back at the beginning, we talked about the, the coding style coming naturally, which it's not going to for everyone, but that's because we haven't all read the No, but I think there's—

**Dan:** Daniel told me about, he's been working with a lot of junior developers, and some of them are now coming, like, they have a few years of experience, and they sit in discussion and talk to them, and they talk about how they do their infrastructure as code. And sometimes, me, the dinosaur, say that, well, not all systems are designed like that. And they look at me and say, like, why not?

**Jessica:** [00:44:12] It's obvious now. Yeah, it's obvious now.

**Dan:** So I think it's got a really good point about not only is it that it's hard for us to go back, but also for the new generation, it is the new natural.

**Daniel Sawano:** Yeah, I think it's also important to remember if someone picks up the book and reads about all these good ideas. But if your current environment is nowhere near that, then you have to understand that it will be a gradual process to do this. You're probably not going to be able to just jump from A to Z, for example. You have to take it step by step, and it will probably take you a very long time. So just to set the expectations right.

**Jessica:** Now, can you do that in the course of your normal work?

**Daniel Deogun:** Well, it sort of depends, I think. I usually try to think of this as, you know, almost like refactoring, so to say, right? You use refactoring to clean up your code and make it nicer and nicer. And some of these design patterns could be that, well, you introduce something small, Right? So, maybe you start scripting one tiny bit of your pipeline or something, and you add tiny, tiny bits here and there, and you sort of get buy-in from your team or your organization or whatever it is. And eventually, you will be able to sort of turn your system into something that's better.

**Dan:** [00:45:53] Hopefully. It also depends on what you mean with normal operation. I mean, if your normal operation is that you have got some kind of product owners that only shuffle new functionality to the team, and you've got middle managers that watch over every keystroke the programmers do, and you have no mandate to take any any time off to do quality stuff without having it properly processed and prioritized in that big almighty backlog that business has to have their eyes on? Well, if that is normal operation, I would say, no, you cannot. You might be able to do a little bit of skank work here and there, But you will never get very far. So, I think it's important that the organization understands that this is a larger thing that we will need to do over time. So, you get acceptance from the product owners, see that security work is actually something that provides a security concern benefit on my system. But it's valuable that the system is available, has got integrity, has got this confidentiality, and follows the traceability regulations that are regulated on it. Because if they do not, you will have very limited success. So I think many organizations also have that to actually make the organization understand that security concerns are actually business benefits. And in that mode of operation, yes, if that is your normal operation, then it's possible.

**Jessica:** [00:47:51] I like the part where the things like the domain primitives, if, for instance, as you're working on a problem, you choose to introduce a domain primitive. Oh, I just can't handle passing the username as a string one more time. I must make a class for it. And then the book talks about how you can build those up slowly, and as you're working, just trend toward the use of domain primitives. And the most beautiful part of that for me, was how, as you do that, you're not just asking, um, you're not asking, how can I represent a username in code? You're asking, do I understand the essence of what is a username? Yeah, that really is the key.

**Daniel Sawano:** I mean, if you don't truly understand what your system is supposed to do, how could you possibly build it? Right? So that's where it all starts. Uh, too many systems, I think, have been built by people making assumptions about what the system should do, and that tend to be the source of a lot of bugs. And a lot of bugs tend to be security bugs as well. So it all starts with understanding what you're trying to solve and what it actually is you're trying to achieve.

**Dan:** [00:49:16] I also think that we as developers are often a little bit too shy. But when you say, oh, I don't really understand what a password really is, it's okay to ask. And you go over to domain experts, perhaps not by password, but whatever it is, some concept in domain, you ask, what is this? What are the limitations? How big it can be? How small it can be? And all these stupid questions, And we feel stupid because obviously there are simple answers to these questions. I think that is not often the case. Often, our questions actually push the domain experts into deepening their own understanding about what they are actually handling. If we do not push those questions, they do not get that kind of intellectual force feed that makes them think another way and say, oh, perhaps that's not how we should phrase it. Perhaps, no, we should phrase it this way. So, I think the cooperation between— the intellectual cooperation between domain experts and developers are crucial. And if it becomes a one-way street, it kind of loses all its charm.

**Daniel Deogun:** [00:50:39] And sometimes it's also that, you know, first as a developer, you think of this as a, you know, from a technical perspective. And you're so certain that it's supposed to be in a certain way. But then when you start talking to the domain experts, you start to realize, like, wait a minute. So, this is why we need to do it differently because, you know, this is sort of the business side of it. And then you have to come up with a different technical solution to support that business need. And for me, at least, that was a very beautiful moment in your career when you start realizing that, wait a minute, I'm not just doing this for for fun or for being technical and beautiful. It also has to solve a concrete business problem.

**Daniel Sawano:** [00:51:42] Yeah, and like Dan mentioned, this collaboration between developers and the business side is really, to me, where a lot of the magic happens. Because when you start asking these questions, a lot of times the business side isn't really sure what they mean when they say, for example, use user. They may use the term user everywhere when they're describing their system, but when you go to the finance department and ask them what a user is for them, they're going to give you an explanation. And then you go to the marketing department and ask them what a user is, and they're going to come up with a totally different explanation. And you're not going to figure that out without this collaboration. And usually, it's valuable for the entire organization, not just for the technical side.

**Jessica:** Yeah, because the code, when you have to put it in the code, that imposes a rigor.

**Daniel Sawano:** Exactly. And even if you don't do that, you're going to have a user that is a little bit of everything, which opens up for bugs.

**Dan:** [00:52:42] Probably a lot of strings. Yeah. Sometimes we describe it as the difference between being able to ride a bicycle which all of us can do, because we can get on a bicycle on a case-by-case basis and just ride it. And there's a turn, and there's— so we just ride it. And there's a huge difference between that one and to program a bicycle-riding robot, because that's what we do as developers. The business side, they can manage the business, they can answer every single question on a case-by-case basis by just doing some judgment call, call of judgment. But what we need to do is to build something that anticipates every single possible situation and handles it in a sensible way. So the kind of understanding you need for bicycling, if you're going to build a robot, is much deeper. And that kind of deep understanding is not possible if you do not combine both the technical aspects and the business aspects and make these 2 sides learn from each other, learn jointly to develop an understanding of what is the user, sales, finance doing, actually doing, because we're going to write a system that does it.

**Jessica:** [00:54:14] I think we've just invented DevSecBizOps.

**Daniel Sawano:** I like that term. I like it.

**Dan:** Yes, I second that. Okay.

**Daniel Sawano:** We need a manifesto. Oh no, oh no.

**Daniel Deogun:** Oh no, oh no. Let's just stick with your book.

**Jessica:** Your book is great. Okay, so it's time to wrap up now. Thank you, Dan, Daniel, and Daniel for joining us.

**Daniel Sawano:** Thank you for having us.

**Dan:** Thank you. Thanks for having me. Really fun.

**Jessica:** For our listeners, go to arresteddevops.com/securebydesign. I think I'll put some dashes in between those words. And you'll be able to find the show notes, including where to find the book and more from the authors. And finally, I'm Jessica Kerr, @jessitron on Twitter.

**Dan:** And remember, there's always DevOps.

**Jessica:** [00:55:21] Say, in the banana stand. In a banana stand.
