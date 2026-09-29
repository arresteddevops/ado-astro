**Gene:** [00:00:00] It's almost as if our competitor was scissors.

**Joan:** Yes.

**Jessica:** Good morning, and welcome to Arrested DevOps. I'm Jessica Kerr, and we have a very exciting show for you today about a true DevOps transformation, which is still in progress because it's the only kind of transformation there is. But first, a word from our sponsors. Arrested DevOps is brought to you by PagerDuty. In an always-on world, teams trust PagerDuty to help them deliver a perfect digital experience to their customers every time. With PagerDuty, teams spend less time reacting to incidents and more time building for the future. From digital disruptors to Fortune 500 companies, over 12,000 businesses rely on PagerDuty to identify issues and opportunities in real time, and bring together the right people to fix problems faster and prevent them from happening again. PagerDuty. Solutions before problems. DevOps shows that delivery automation is important. Our work is changing software, and software is useful after it's delivered. So how do we develop our delivery? Is it scattered across dozens of repos, or could we use code? Is it a loose collection of YAML and Bash, Or can we unit test our delivery too? Do we even need all those pipelines? There is a better way. When you're tired of patching up pipelines, when you're serious about safe delivery of code, check out Atomist at atomist.com.

[00:01:40] The worst thing about the Arrested DevOps podcast is when it ends. You're left wondering what to do next. What are you going to listen to on your commute home? How do you occupy your time when walking the dog? What are you going to listen to during the quarterly all-hands meeting? But fear not, dear listener, there is a solution. You need to subscribe to Software Defined Talk right now. It's a weekly podcast that recaps all the news in cloud computing, DevOps, and enterprise software. The hosts, Cote, Matt Ray, and Brandon Wichard, will keep you up to date on all things cloud while offering tips on how to optimize your Costco haul, and how to PowerPoint. It's a fun, free-flowing conversation that will keep you entertained and informed. What are you waiting for? Subscribe to the podcast today by visiting softwaredefinedtalk.com or by searching for Software Defined Talk in your favorite podcast app. I am excited to be here today with Joan Fried and Gene Connolly from Meltwater. I got to visit with them.

**Gene:** [00:02:42] Hi, Jessica.

**Jessica:** Hi, Gene. Hi, Joan.

**Joan:** Hi.

**Jessica:** Yay! I got to visit with them a few weeks ago, and I was very excited to learn about how DevOps has affected the engineering work at Meltwater. I learned about this at a conference called DevOpsicon. Do you want to tell us the story of DevOpsicon?

**Joan:** Sure, I'll, I'll try to provide a little bit of context. So I've been with Meltwater about 6 years, and when I first started, we had an engineering department that was responsible for building things and an operations department that was responsible for putting the things that engineering built into our production environment for our customers to access. There was this huge wall because engineering knew how things were built, and operations knew the production systems and how those were— and the infrastructure around those and had all the contacts with the data centers and everything. But there wasn't any cross-pollination there. So it was always, you know, the engineering team throwing things over the wall to the operations team, or the operations team imposing some seemingly unrealistic requirements on the engineering teams in terms of, you know, understanding Puppet and all these things that the engineering teams had no knowledge of, or anything about. And this was really slowing us down. It created a lot of friction, and it just made it very difficult for us to be able to deliver our products to our customers. At that point in time, we maybe had a release every 6 months if we were lucky, and we wanted to get to a more continuous delivery model and achieving that nirvana of every, um, you know, agile organization.

**Jessica:** [00:05:00] Yeah, more than, more than every 6 months. That, that does sound achievable.

**Gene:** Oh, it wasn't 6 months when I started 4 years ago. I think it had at that point gotten to like once a month pretty reliably.

**Jessica:** For a quick piece of background, uh, what are the things that Meltwater builds?

**Joan:** Meltwater builds, um, products primarily for public relations, um, professionals for them to be able to monitor their brand or interact with their customers on social media, as well as kind of collecting information from the interwebs about anything. So we crawl all of this content and enrich it and make it available for our customers so they can see what press releases are getting picked up that they're authoring or what other people in the blogosphere are saying about them or what people are saying about them on social media so that they can target their marketing campaigns or help manage, you know, situations during a crisis and use those tools at their disposal more effectively.

**Jessica:** [00:06:13] So, so it's kind of measuring your internet presence and effectiveness.

**Joan:** A little bit, more or less, yes. Our original market was in sort of newsprint, and as the internet gained popularity and, you know, things like blog posts or, you know, online news articles became a thing, companies were still clipping newspaper articles and putting them in folders to hand to their stakeholders to say, see how much press coverage we got in the last month?

**Jessica:** Oh, wow.

**Gene:** Wow.

**Joan:** So that was Meltwater's original, uh, value proposition.

**Gene:** And it's almost as if our competitor was scissors.

**Jessica:** Yeah. Okay, so you're an evolution of scissors for the internet, but that means you're a software company.

**Joan:** Yes.

**Jessica:** [00:07:13] So what you build is everything.

**Joan:** Yes. Yeah. So, and we're a software as a service company, so we always want to build products that are sticky and keep our customers around because, you know, they don't have to invest a whole lot of money in infrastructure and putting something on a server somewhere that they have to maintain. It's just they get a login. So, kind of going back to our 6-month release cycles and the birth of DevOpsicon, several years ago, we had— prior to Gene starting, we had undertaken an initiative at the leadership level to try to make our organization, the engineering organization, more agile. We brought in some outside consultants and had senior engineering leadership involved and knew that— and took some inspiration from other companies that had more of a DevOps culture than than we had. Zalando in Germany was one of our inspirational companies. We realized that DevOps was a thing that we needed to do, so how can we do that? One of the things was we needed to bridge the gap of knowledge between the folks on the operations team as well as the engineering teams. And because Meltwater is a global company, it makes it really hard to do that over Skype or, you know, some other technology. So we opted to get some folks together, as you know, from engineering and operations as part of our transformation to create these truly cross-functional teams that could be responsible for the products that they're delivering. As part of this transformation, we broke our product suite down, if you will, into different missions and formed teams around those missions so that they were responsible for developing products that satisfy the needs of that mission. In order to do that, they obviously needed to be able to deploy the things that they built into production. The first DevOpsCon was in our Gothenburg office, and it was primarily teams in Europe and almost like a skunkworks. Sort of a thing. And everybody else was sort of like, what's this DevOpsCon thing?

**Jessica:** [00:10:27] Oh, so the first one was sneaky?

**Joan:** The first one was a little bit sneaky, yes. And then the next one was in Manchester, and that one was a little less sneaky, but still, there was a lot of— not a whole lot of buy-in about it because a lot of the teams at the time, we were in the process of migrating from our legacy system to what is now our media intelligence product. A lot of the teams were super focused on just getting things to work and not so much on enablement. As part of our transformation, one of the key things that we recognized was that we need to invest in the enablement of our teams, right? That they're not just going to figure this stuff out on their own, and having them build everything that they need is not realistic either. So, as part of our transformation, some of the missions that we have are around enablement. So, we have a team called Foundation who is responsible for helping us develop tools and services that enable our teams to deploy their things easier to AWS and get the products and services that we had that were in our data center out and into AWS infrastructure. Similarly, we also developed a team or set of teams around what we call our application framework mission that were responsible for developing a UI component library of components that teams could use to build their front-end pieces, if you will, of their applications and products, as well as taking care of some of the cross-cutting concerns that a lot of teams don't want to necessarily have to deal with in terms of users and companies and authorization and authentication and those kinds of things, so that our feature teams could focus on the features that they were building rather than all of the underlying infrastructure and developing all of the various widgets that they needed.

**Jessica:** [00:12:53] Okay, there was a lot in there.

**Joan:** Sorry.

**Jessica:** It started with, You're a global company, so give our listeners an overview of how global.

**Joan:** We have engineering offices across the globe in Budapest, in Berlin, in Stockholm, in Gothenburg, in Bangalore, in San Francisco, Raleigh, Toronto. That is a lot.

**Jessica:** Lot of engineering offices.

**Joan:** I mean, globally, Meltwater has, I believe, 130 offices worldwide. The majority of those are sales offices, and most of our engineering offices do have a sales presence in them, but not all of them do, which is also helpful in terms of getting customer feedback.

**Jessica:** [00:13:55] That makes sense, because if your business is understanding the whole internet, You need a global perspective. One of the first steps, then, in getting Dev and Ops to mishmash and become DevOpsy was to get people physically together.

**Joan:** Yes.

**Gene:** Yeah. That is continuing to be one of the big challenges with the organization. No matter how you structure it, we've got people in different areas with different areas of domain and just relationships that need to be built, right? And, and we tried to explore and experiment with different ways of building those relationships. You know, certainly people working in the same region or the same office on the same team, that just sort of comes naturally as, you know, humans, right? Then, you know, sort of there are these events like DevOpsCon where we solve the problem by bringing a broad set of people together. The last event, the last few events, we've had 80 developers attend the events in one of our offices, trying to get as much representation of the different teams and the different roles that we have.

**Jessica:** [00:15:10] It's not only developers, right?

**Gene:** Yeah, it's really, you know, the reality is it has outgrown its name. We love the name DevOpsCon because that's where it started. That was the That was the experiment that we started with years ago that has grown and developed and is ours, that put on by the engineering team. We don't get any help. It's just a bunch of non-event planners putting on an event, using the feedback that we've received from the event to make it better. But in the time that we have built it, The feedback overwhelmingly is, we want more people involved. So, you know, it started with DevOps and people who are interested in DevOps, and then it's extended out to all of the engineering practice, to product, to UX. You know, we have had sales join us when possible, at least to give us insight into different parts of the organization. Building those relationships is an important part of that event and a challenge that we're always trying to work on.

**Jessica:** [00:16:24] Yeah, I kind of feel like that is very DevOps in the sense that DevOps says you need to take these concerns that cannot be separated, like building software and running software, and you can't put those responsibilities on different teams and make them fight. You have to put them on the same team so that they come together to find solutions that work for both. It's not just DevOps. That's a start. There's UX. There's product. There's sales.

**Joan:** There's support.

**Jessica:** Support. Oh, yeah. Support is huge. That's a huge part of the feedback loop. Yes. Yeah. I think that maybe instead of DevOpsicon changing its name, We should recognize that DevOpsCon embodies DevOps by including more than DevOps.

**Gene:** I totally agree. If you get the spirit of DevOps, it applies very broadly, right? The mentality that you have to go into it is great. Another aspect I don't think that we've mentioned about DevOpsCon, which I think really speaks to the nature of adaptation, is that it is an unconference-style event. Which means that every day that we go in there without an agenda, together we generate ideas, we set the schedule for the morning, and then we reset the schedule in the afternoon, and then repeat that process for the 4 days of the event. And that format has been so much fun and created so much value. People can adapt. It almost has an improvisational aspect to it. There's this like yes, and element to seeing a presentation in the morning and then saying, let's build on that in the afternoon and, you know, get something done or dive in a little bit deeper on a specific topic. And you'll find that the way the event starts, it welcomes people to participate in whatever they're comfortable with. And then by the event, you know, everyone is involved more than they imagined, right? There'll be a few people with a few planned ideas that came into the event ready to present, and the ideas are up on the board day 1. Day 2, there's just a flood of ideas and new topics and more topics than we could ever cover in the event. So prioritization of, well, what do we— what event do we see? What can I make it to? Where does it fit into our schedule becomes a fun, interactive, active, collaborative event that everybody can participate in. And if all you want to do is sort of, you know, be a fly on the wall, you know, you're welcome to do that. I know I like to avoid day 1 presentations because the expectations are so high. You know, people are actually expecting something that had thought put into it, you know, but on day 3 you can sort of Take a half-baked idea, get into a room, get a couple of important ideas out, and then build off the audience who's already in sort of that collaborative mood of the event, and have some fun exploring different ideas and half-baked ideas. So the event really becomes the conference that you didn't know you needed when it started.

**Jessica:** [00:19:56] That's beautiful.

**Gene:** It adapts to, you know, collectively what the organization needs at that moment.

**Jessica:** Perfect. Yeah, which is very DevOps-y as well, because you don't have this idea that leadership needs to tell you how to do things. You have the skills you need in the room.

**Gene:** Because so many of the teams are sort of on these individual paths, right? Part of this organization made these, you know, self-empowered teams. Every team is trying different experiments using different technologies and seeing success and failures in different ways. And so it becomes really important to find ways to share the results of those experiments. And the wealth and breadth of technological expertise is all over the place. We're not, you know, we're not an organization of expert Java developers, you know, from one end of the organization to another. We have— we're using all programming languages, all technology stacks, and are sharing the experiences with people that we work with on an everyday basis and being able to celebrate, you know, what we've become experts in and learn from each other and adapt what we're doing on our own teams to what we're seeing everywhere else.

**Jessica:** [00:21:22] That's interesting about the different teams using different technologies, because Joan, you brought up the very important point that when you've got teams aligned on missions, they— that team can't do everything.

**Joan:** Correct.

**Jessica:** And so how— and you mentioned the foundations and the framework teams that are there to support the mission teams. How do you do that when the teams aren't all using the same tech?

**Joan:** So, a lot of— so, we started out with this monolithic application, and as part of this transformation, are moving more toward a microservices architecture. So, as long as you can make an HTTP request to something, and get some response back, then that's really all you need to be able to do. The internals of that endpoint that you're calling, you shouldn't really care about, and whether it's in Python or in Node or Java or C#, it doesn't matter. It's up to the team that is responsible for that service to obviously know and understand the limitations of the technology or the programming language that they're using and use it most effectively, but the consumers of those services should not have to concern themselves with the internals of that service. By keeping things loosely coupled, if you will, it enables teams to be a lot more— it gives them a lot more freedom to make the technology choices that are best for them.

**Gene:** [00:23:18] And, you know, when you have internal teams building an internal platform, building a paved road for solutions for our business, teams have the choice to use whatever technology they want, but they really need to make the best decision for the product and for the business need. And when you have an internal team building a solution that you can pick up and use immediately, where they have done their research and have gotten ahead on what the problems you're going to encounter in your business space are, it makes it really compelling to use it, to, you know, build on that technology that's there waiting for you, provided by an internal team, where you get that immediate support for them, where you know that you can work with them and support the feedback loop of giving them feedback on the internal product, right, that they're the platform that you're building upon, makes it really easy to sort of buy into, you know, a certain technology stack. It's really exceptional cases where you might need to diverge to use a different language or a different tech stack. Does that make sense?

**Jessica:** [00:24:34] Yeah, yeah. So you're saying that the foundations team is building platforms and infrastructure that the other teams can use, but don't have to use?

**Joan:** Correct.

**Gene:** Yeah.

**Jessica:** Where's the abstraction layer there? Is it at the container? Does it go all the way up to the programming language and framework?

**Gene:** There are a lot of— there are, by nature, a lot of different programming languages. We talk about this like— different tech stacks don't naturally happen, right? As a part of, you know, companies are involved in acquisitions and then all of a sudden, well, they have a new technology stack that they sort of have to deal with.

**Jessica:** That's true.

**Gene:** So, you know, things just sort of naturally, I find, diverge. And, you know, looking to find where that right level is, as you speak, is a difficult problem. And I know that our enablement teams spend a lot of time finding the right abstraction layer and talk about it quite a bit. So I really can't give you a good answer because we're still seeking the right answer as far as that is concerned.

**Jessica:** [00:25:42] You know, I kind of feel like that is the right answer. If you ever think you've found the right answer, oh, it's out of date already. So you have both teams exploring and, well, Many, for historical reasons, have different tech stacks, and you have teams that are bringing them together and giving the other teams incentives, positive incentives, to move toward the common foundation.

**Gene:** Yeah, that's the hope.

**Joan:** Yes. Yeah. As part of those enablement missions, right, their customers are our internal developers. So there's a huge wealth and easy access to their customer base.

**Jessica:** Oh, yeah. Yeah. One of the hardest things about making good software is closing that feedback loop and finding out whether it's good.

**Joan:** [00:26:44] There is a lot of outreach. Collaboration that gets done with the teams to make sure that they're building the right things, and that the products and services that they're offering are making the feature teams' lives easier, you know, giving them that compelling reason to say, we have this here already. If you want to go off and build your own, you're welcome to, but this is right here. You might want to give it a good, hard look.

**Jessica:** You also mentioned helping teams with the move from the data center to the cloud. How has that gone?

**Joan:** It's been a long road. A lot of that has to do with the fact that we can't just go dark for a year and move all of our services from the data center to the cloud and not deliver any product. Any new product to our customers. That would not go over well. We've had to balance paying off that technical debt, if you will, with the value of features that we need to build for our customers.

**Jessica:** [00:27:59] So, this has not been a rewrite?

**Joan:** Not entirely.

**Gene:** I mean, I don't think I've ever observed a situation where a rewrite, in any broad sense, has occurred that doesn't solve a specific problem. What does rewrite mean? We're rewriting modules where they're needed and migrating existing software opportunistically.

**Joan:** Yes.

**Jessica:** Yeah, and yeah, so it's not— yeah, you can't just come up with the new infrastructure and the new architecture. You're designing the change to get there.

**Joan:** Yes.

**Gene:** Yeah. You know, one thing that I thought immediately of the moving from the data center to the cloud challenge has been sort of a lot of the infrastructure that we have set up in the data center was sort of based on this monolithic architecture. And as a result, there are some elements of it, backing services and so forth, that are still very monolithic and hard to move, right? And then in the meantime, our organization has become, you know, very, you know, has been more moved to this team-based mission, and all of a sudden you get these ownership challenges where you'll have this database or exchange that would have been managed by some operational team, and now teams need to collaborate to manage this old monolithic relic in the data center, and it makes those migrations very challenging. To move not just out of the data center, but to this new team and mission-based organizational structure. The fact that we've taken on both initiatives at once has sort of made it a doubly interesting experience.

**Jessica:** [00:30:16] Yeah, they're not unrelated, though. I mean, if you're stuck in the data center, it's hard to give teams flexibility.

**Gene:** Yeah.

**Jessica:** But, yeah, that ownership challenge, it is one of the core problems because once you start changing— and this is a problem everyone has to different degrees— when the organization changes, suddenly you're violating Conway's Law because the software was designed by a different version of the organization, and you have to resolve that.

**Joan:** I can say that as part of this transformation, that I've been involved in, it is Conway's Law, right? Like, we changed the organization to adapt to the way that we wanted software to be developed. Perfect.

**Jessica:** Yeah, I think Michael Feathers calls that the reverse Conway maneuver.

**Joan:** Good.

**Gene:** You know what? I'm glad to hear that because that's always— every time I hear Conway's Law, I feel like it only looks very one-sided. Right? And the reality is it's never one-sided. It's a feedback— it's a feedback loop, right? And it should be a feedback loop. The organization should be changing based on the software and vice versa, you know.

**Jessica:** [00:31:27] Exactly.

**Gene:** Um, and to look at it just one side, uh, you know, is doing a disservice to the other. Um, and I see, I see situations where we're changing in both directions all the time. Um, but I do think that And Joan and I were talking about this recently. One of the big challenges is now instead of having it difficult for teams to sort of be agile around the solutions that they have, if the business needs to make a big shift, right, or pivot, and it makes sense for one team to take on the responsibility for a module owned by another team, We're still working on figuring out how to deal with that, because teams are so independent that, okay, well, we have our infrastructure stored with our repository in a Terraform module, and another team just spins up EC2 instances using the AWS console, and they have this responsibility not— well, sure. Every variation.

**Jessica:** [00:32:40] I can resolve that one for you. Team 1 wins. Okay.

**Gene:** And so taking on those, you know, teams that have had to take on that challenge of saying, okay, now we own this new module that this other team built. There is just an overhead cost associated with making it your own, you know?

**Joan:** Yes. Yeah, there's a very— there's very much a you know, not built here mentality that can come into place, right? Of like, well, in order for us to be able to own this, we need to modify it so and make it, to your point, make it our own, right? And modify it in some ways or—

**Jessica:** Right, right, because there's that balance of now you have the people and their skills out of sync with the software and what it needs. They're going to have to automate the spinning up of the EC2 instances. That's just going to have to happen. I know that was a made-up example, but this is fine. Where's the balance of, does the team work in 2 completely different environments, which is really painful to go back and forth, or do you make the software conform to the people? By converting it to something they're more comfortable with.

**Joan:** [00:34:05] Yes, and we're still figuring that out, right? To be fair, we don't do these things very often, but there is a business need to do them and, you know, there is overhead associated with that, so we have to be conscious of that in in some of this, which could hamper our ability to pivot in some way.

**Jessica:** There's another important point buried in what you just said, Jean, about the teams, which is you did not say we need to move these people to this other mission. There's a, there's a team boundary there that you're holding steady. In the implementation, and it's the software— the responsibility for the software that moves?

**Joan:** Generally, yes, right? Because our teams are largely co-located, so the cost of moving those people and upping their lives to work in some other place in the organization globally or some other country is not always feasible.

**Jessica:** [00:35:20] This—

**Gene:** I think this speaks exactly to what we were talking about with Conway's Law. You know, they're both— moving software and moving people are both things that can happen, and they make sense sometimes, right? There's benefits certainly to people moving teams, uh, as far as knowledge sharing, as far as whatever, all the reasons people need to change. And there are business reasons for moving software, uh, For the same varying reasons. You know, software can benefit from being owned by different people. It makes it more robust.

**Jessica:** That's true. That's true. Like having multiple parents.

**Gene:** Yeah.

**Joan:** Yeah.

**Gene:** It just is expensive and taxing on, you know, everybody involved in a transition like that, whether it's people or software. But, you know, more people.

**Jessica:** Yeah. But so many times we don't— we ignore the cost to the people. Now, in your case, you've got like geography as a barrier there, and so there are explicit relocation costs to think about. But most companies who share an office discount the cost to a team of swapping people in and out because there's overhead in building those relationships too.

**Joan:** [00:36:34] Yes, and while we provide opportunities to change team— change teams or strongly suggest some changes here and there, it's not something that we, we do all the time, and which is very different from when I first started where it was this group of humans is finishing up working on some something and oh, this other group of humans over here is working on this other thing and they need some help, so let's have some of those folks go work with this other group of humans, um, and it was, it was much more, uh, volat— the teams were much more volatile. We recognized that that was sort of a problem, right, because you're constantly rebuilding these relationships and people don't get a chance to really understand how to work together effectively. Um, they're just sort of, um, you know, in it to get things done, but not necessarily feeling that sense of ownership of what they're building.

**Gene:** [00:37:38] Right, or stability in knowing what you're going to face when you walk into work.

**Jessica:** Yeah, that's true, because we talked about the challenges of people understanding the software and having the skills that they need to work on the software, but that's only one part of what you need, because what a developer is doing is connecting those skills of working on the software to the mission of the business, and they have to understand that mission. So there's another piece of overhead when you just switch people to another project. Yeah, they have to build understanding of both the software and the project and the other people on the team.

**Gene:** Yeah, you know, one, one interesting thing about this move where teams have this full mission responsibility and these extra roles of maintaining the software, monitoring the DevOps, deploying, is that ends up being a lot more work, right? There's just a lot more that you're responsible for, action that you need to take during the day. And that's sort of been an interesting experience as well, right? You have to have— you have an understanding of the user, you're involved in design, you're on call, you know, you are deploying, and it really sort of shifts the economy of how you work, and you need to find efficiencies more effectively than you've ever had to find efficiencies before. And, you know, the proposition of automation, for example, just becomes something where, well, you can't survive unless you have it, right? The way that you spend more time focusing on gaining that domain knowledge about the product and the business and how to affect effectively monitor and deploy the product is by automating all the stuff that you weren't automating before, and the whole value proposition changes.

**Jessica:** [00:39:34] Yeah, and then you get that automation, and then you are more efficient, and wow, how did you ever live without this?

**Gene:** Yeah.

**Jessica:** And then, as you mentioned, Joan, not every team can do all of that automation. Oh yeah, this gets back to the part where there's that trade-off between the focus on doing the work and versus enablement, making it possible to do the work.

**Joan:** And that exists, you know, on, on every team, right? And to Jean's point, you know, what, what level of things do we automate and what's the investment that we need to make to make our lives easier there within our team, but then organizationally, you know, our enablement missions are looking at that in terms of where do we need to prioritize our backlogs to make sure that we're delivering the most value for the organization in terms of enabling teams to do some of these things that they need to do in a more efficient manner.

**Jessica:** [00:40:36] So you have investment in enablement both, both within the team and in specific teams?

**Joan:** Correct.

**Jessica:** So how has this worked out?

**Gene:** I've been very satisfied as an individual working this. I enjoy working this way better, right? As far as the— you would have to ask someone for the business numbers, you know?

**Jessica:** Yeah, yeah, yeah.

**Joan:** That's important too.

**Gene:** My satisfaction with the job is great, and everything that I understand about the, you know, the— you know, we were talking about once every 6 months as far as deployments and changes to production earlier. Well, now it is a— it's a stream. It's a constant stream. You know, we've got a Slack channel of all the production changes, and it is— there's constant activity in it all week long of changes going out. And my understanding is that the software platform is more reliable than it has ever been. Despite all these changes, production is even more robust. As far as those 2 metrics, it's been successful.

**Joan:** [00:41:39] Yes. And, you know, if we look back to— if I look back to, you know, when I first started, we could maybe get a handful of features out every 6 months or so. And we're now getting hundreds of features out in 6 months to our customers, right? So it's, it's a huge value for us as an organization in terms of being able to meet the needs of our customers more efficiently and effectively.

**Jessica:** Yay! Yeah, hundreds of features, and you don't have to wait 6 months for any one of them.

**Joan:** Correct. So, the Changes and Releases Slack channel that includes all of our deployments to production. Seeing the activity there is phenomenal. As we were going through this transformation and empowering teams to do these deployments, You know, there was a little bit of belt and suspenders mentality, if you will. And we had had this, this team of individuals that were largely from our support and operations team as kind of a safety net, if you will, in terms of if there was a problem and a team got pinged for on-call and they didn't respond, that there was somebody there who kind of knew enough of the lay of the land that could at least restart some service in a pinch.

**Jessica:** [00:43:33] Oh, belt and suspenders, like multiple different support systems?

**Joan:** Multiple different support systems, yes.

**Gene:** Sorry.

**Joan:** And the reality was we never needed that team. They sat— not that they sat around twiddling their thumbs, but They, you know, there was never a need for us to have this team, like, seriously go into action and play backup as our teams were getting enabled and doing their deployments in production. The teams took full responsibility for those things, and from my perspective, it was awesome to see that level of ownership and responsibility, right? And that we didn't need to have this team in place because the system was much more stable than it had been. Our uptime numbers increased at least by 10 or 15%.

**Gene:** Yeah, you know, I'll tell you what, just talking about this, I know that we have a long way to go to be better and we'll never change that spirit of, you know, trying to be better. And I know we're in a better place, but I'm almost feeling nostalgia for the early days of the transformation. It's just, for any— for anyone with an engineering mindset, was an amazing experience to be a part of because there was just so much, so much work and stepping out of your comfort zone regularly. And there was just that sort of in every You know, right when it started, I remember just deploying to the staging environment that we had. There were times when it took 2 days for us, some of the engineers who were just learning some of these DevOps things, to figure it out and get it there and to stabilize it, and then to go to production, and then to do it again the next month and get it down to 1 day. And then the next month, well, do the production deploy live. You know, like during quiet hours, you know, out of work, and then just grind on making it better month over month until it was week over week until we were deploying, you know, during, you know, our heaviest time of production. That was an amazing experience, albeit, you know, maybe filled with anxiety at times. Uh, any— many engineers will enjoy just being a part of a transformation like that, uh, because there are so many exciting parts to it.

**Jessica:** [00:46:09] Yeah, that's beautiful to go from a gravel road to finer and finer gravel and finally it feels paved.

**Gene:** Yeah, you know, it's the classic, you know, it's the road, not the destination, uh, as far as maybe a job satisfaction is concerned. You know, it's great to be solving problems right now, For me, maybe I'm just this kind of developer, but going through that sort of reinvention and making things better was enormously satisfying.

**Jessica:** You mentioned stepping out of your comfort zone and getting used to that, because, yeah, I mean, this kind of growth, moving into a DevOps mindset, it's not about you step out of your comfort zone and then you get comfortable again. It's about stepping out of your comfort zone is normal. That's every day. We're supporting what now?

**Joan:** For the most part, our, you know, the folks that we have today that were part of that early transformative process are still around, right? So there's a lot of folks that have gotten some satisfaction out of that and grown and evolved throughout that process. And from where I sit, that's not, that's not for everyone, right? There are a lot of folks who, you know, they step outside of their comfort zone and they want to go right back in, not be constantly outside of it every day and are willing to put themselves out there constantly and get used to that as a normal thing.

**Gene:** [00:47:44] Yeah.

**Jessica:** I guess that relates to if you want to have people who are good with being uncomfortable and continually learning and getting better, well, you might have to let them try out the technology and make their own decisions on that. Speaking of continually learning, how is the transformation continuing now? Do your cloud apps look like they did when you first moved them to AWS? Do your people look the same?

**Gene:** I had a conversation recently that I thought was fascinating, and it was about configuration in code. It had me reflecting upon the beginning of the transformation, where we had this monolithic app, where tons of people were making contributions all day long to the monolithic app, and it sort of became difficult to have a reasoned conversation about how to manage configuration and different kinds of configuration, how to separate from the code, or if and when. It sort of maybe was a mess, right? And there was a time then where— and then as we sort of went through this transformation, I feel like there were a lot of teams, as they could pull out microservices, felt like, okay, now we can really get a handle on a good, clean separation of, you know, this configuration for the environment, or this configuration file for the application, from our code. Because we've seen the challenges when you don't separate the configuration from the code. Well, then you need to rebuild and redeploy your software when you could have just changed the configuration value, and there's value in that separation. Over time now, I almost feel like there's a strange thing occurring where the pendulum has swung again, and the economies of doing a deploy have become so cheap and easy, and it's so easy to deploy, and teams have found ways and shared different ways of making it easy and feel empowered to just make a change in production that, well, the value proposition now of putting a lot of effort into keeping that code and configuration separate in the same way they were before has changed a little bit. And now it's like, well, you know what? This code is a little bit clearer if I just sort of embed that value right here. And man, it's just so easy to deploy that I'm not— I don't have to worry about this at all. I'm just going to do it because it's better. And that is a conversation that almost has done a whole revolution. I mean, it's come with discipline and reinvention, and we're certainly in a different place, but if you just were tracking how configuration has changed and how we're managing it within some of our codebases, it looks like it's done a 360. And, you know, who's to say what it will look like 6 months from now as far as how we're managing it? It's the journey of reinvention that has sort of unpredictable results. You know, I know that one thing that we're looking to do is continue to find ways to share, build relationships between the teams. That doesn't go away, right? I also think that we're getting to a place where we've seen the successful parts of this and want to find more people in the community to share their experiences. What was the name of the company you were mentioning that we took into the What's from Agile 42?

**Joan:** [00:51:21] Zalando.

**Gene:** Zalando, right. Recently, we have— some of our members of the enablement teams have been collaborating with them to share experiences, and we've had external people attend DevOpsCon. So, you know, I think broadening, sharing our successes is something that I've heard a lot of people talk about. With our local community, with our technical community.

**Joan:** To your initial point, right, the transformation is never done. If you think it's done, you're wrong.

**Jessica:** Right. The point is to get into it. It's like stepping into the river in a boat.

**Joan:** We're always looking at ways we can improve, and, you know, we do want to share our experiences and learn from others. Right, give back to some of the folks that we've been able to take some knowledge from. One of the things that we're, you know, we're sort of also seeing the pendulum swing in terms of teams, right? So some of the teams that have been together for a really long time, like years, without any changes to them, you know, kind of stagnate, right? And some of those folks may be looking for other opportunities, right? So, providing ways that like-minded individuals can get together, either through a guild or through—

**Jessica:** [00:52:56] DevOpsCon!

**Joan:** Well, DevOpsCon, certainly, but those are events that are not so frequent. We have one or two of those a year versus, you know, we may have a need to get some folks together from different teams to be able to figure out how to ingest new content from a new source or deal with some specific regulatory requirements that we haven't had to deal with before that kind of cut across teams. So, you know, trying to figure out ways of getting those things done without getting all of the teams involved all together and having a DevOpsCon, if you will, specifically around that. Trying to get teams comfortable with the fact that something may not be developed by them directly, but may be contributed back to them from one of these initiatives or one of these projects. And not feeling like, oh, well, we didn't write that, so we have to rewrite it if we're going to take ownership of it. So I think that's something that we're still evolving and experimenting with different ways of dealing with some of these things, right, of how can we stay agile and nimble when we also want to value some stability with the teams and minimize the overhead associated with changing some of these ownership areas from one team to another.

**Jessica:** [00:54:39] Right. Yeah, because there you have the problem of downhill synthesis, uphill analysis. It's really hard to get your head around something you didn't write. That's wonderful. It's wonderful that you still, like, see that it's full of challenges and you continue to address those. I hear a pattern of everyone's constantly getting better, everyone's experimenting and learning and sharing those learnings within the team, within the company, and among other companies.

**Joan:** Yes, and that's not an easy thing to do. We do a lot of ENPS surveys to, you know, make sure that we're providing an environment that people want to work in.

**Jessica:** The Net Promoter Score?

**Joan:** Yes, an employee Net Promoter Score. Basically, would you recommend Meltwater to a friend or colleague? Yes, you know, on a scale of 0 to 10. A lot of the themes that come back from some of those surveys are around communication, so it's a constant challenge, right, of providing enough communication. And, you know, is there a risk of overcommunication?

**Jessica:** [00:55:53] Yes, yes, there is. All the information is no information.

**Joan:** Prioritization is a challenge, right? Kind of going back to the mission statement and making sure that there's buy-in, right? Those missions are relatively stable, but the strategy around achieving the goals of that mission are evolving as well. And, you know, making sure that that gets communicated effectively so that the teams feel like they're bought into that and kind of what— where we want to go and what we want to do.

**Jessica:** Okay, it is time to wrap up. So last question. How can people find out more about Meltwater and your story? Can they follow you on Twitter?

**Gene:** Yeah, we've got— we're working on it. This is something that we did during the unconferences, try to create a little bit of a social identity for our engineering organization. It's very in the early days, but we do have an excellent, excellent engineering blog. Underthehood@mellwater.com. I'm sure I can get it in some sort of blog notes.

**Jessica:** [00:57:07] Oh, yeah, yeah. We'll put everything in the show notes.

**Gene:** There is a lot of great content about what we're doing. We're doing lots of different things, and so there's a really diverse set of articles on the blog. I think it's really great.

**Jessica:** Including about DevOpsicon.

**Gene:** Including about how to organize an unconference. And I think it would be a great thing to do. We've gotten to the point where we, we have a group that works year-round meeting, trying to organize the next event. But you can really start small, and as we did, right, we started with a small group of people. And although we have different offices, you can certainly do this in one office. You know, my only recommendation is It's important to have a couple different sessions. You need to do it over a couple of days at least so that you can have that sort of improvisational nature, so you can build upon sessions where you plan and then replan and allow people to put new ideas that build on ideas from the previous session and previous day.

**Jessica:** [00:58:15] So, so enough time for iteration.

**Gene:** Yes, enough time. That's a critical, important part of the unconference-style event, my favorite part of the event. And yeah, you just need people, maybe, maybe a few pizzas, and then you iterate from there. And that's what we did. We went from a couple of days with a handful of people to an event that everyone in our engineering organization looks forward to, that, you know, 80 people attend and lasts over 4 days. That was all based on feedback-driven, event-over-event, from the people attending each conference.

**Joan:** And it is really something that has come to embody our culture. Until you experience DevOpsCon, you don't necessarily get Meltwater culture, in my opinion, right? It puts Meltwater culture front and center in your face.

**Gene:** [00:59:25] Yeah, and that's— this is what I've heard. Like, this is not us on the, you know, podcast talking. This is what I've heard from new employees, employees from other companies, employees from acquisitions. Saying to me in the middle of the event is just, wow, this is amazing. Why aren't other companies doing conferences like this? I really get it now. That type of feedback.

**Joan:** Yeah, you can't necessarily get it until you've experienced it, I think.

**Jessica:** So, there it is. If you want a DevOps culture, consider holding your own DevOpsicon. Jean, Joan, thank you for joining me.

**Joan:** Thank you.

**Jessica:** This has been a fascinating episode. Listeners, thank you for tuning into Arrested DevOps. And remember, there's always DevOps in the banana stand.
