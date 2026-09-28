**Matty:** [00:00:00] One thing I think about from an oper— what's the word I wanna say? Operationalization.

**Bridget:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Bridget Kromhout, and with me today, I'm Matt Stratton.

**Matty:** Today we're going to be talking about containers and how they're all the rage and amazing and stuff and how they'll solve all your culture problems. So the show notes for this episode can be found at arresteddevops.com/containers. But first, before we get started, a word from our sponsors. Arrested DevOps is brought to you by 10th Magnitude, a company that figures if you're listening to this podcast, you must be pretty cool. TenthMagnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/tenthmagnitude.

**Bridget:** [00:01:14] This episode is brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 120 common infrastructure tools, such as Chef, Docker, and AWS, so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog.

**Matty:** This episode is sponsored by VictorOps. Built for modern incident management, VictorOps provides a unified platform for real-time alerting, collaboration, and documentation. Driven by your IT and DevOps system data, VictorOps helps you to respond to incidents more effectively so you can minimize downtime and make being on call suck less. Visit arresteddevops.com/victorops to schedule a demo or start your trial. Mention you heard about VictorOps on Arrested DevOps, and you'll be eligible for some sweet discounts too.

**Bridget:** So, we are broadcasting it here from GOTO Chicago, and I'm really excited about this, you know, panel because I I have a coworker from my own team on this panel, Mark Heckler. Hi, Mark. Hello. And his co-presenter slash daughter, who's also at this conference, Jennifer Heckler. So, and then also we have Jerome Pettazzoni. So we have a lot of awesomeness on this panel to talk to us about, you know, Tupperware, right? Like that's what we're here to talk about.

**Mark:** [00:02:49] And—

**Matty:** Plus me who knows very little about containers. So, I'm like the container—

**Bridget:** Well, you can act in the role of the audience then.

**Matty:** Our audience knows more about containers than I do.

**Bridget:** I don't know about that. But what I think would be a really good way to start is if maybe Mark, if you want to start, just kind of introduce yourself and tell folks who are listening to the podcast a little bit about you and a little bit about your talk. Was it today? That was today, right?

**Mark:** This morning.

**Bridget:** Thank you.

**Mark:** Yeah, my name is Mark Heckler. I'm a developer advocate, as Bridget said, on her team.

**Bridget:** On Schaefer's team.

**Mark:** Well, yeah, I mean, we share a team. I should put it that way. Yes, we work for Schaefer. But I primarily am a Java developer and do a lot of work with Spring. Also do a lot of work with Cloud Foundry. And incidentally, as the intersection of the two, as well as just primarily doing Java development, delivery of software, deploying of software. So containers tends to hit that conversation at some point. Cloud platforms tend to hit that conversation at some point. And that's kind of where the idea for our talk came about, Jennifer's and my talk, because a lot of conversations somehow either start or end with, OK, how do we deploy this? How do we run this? How do we schedule this and orchestrate this? And so on and so forth. So we thought, you know, there should be a talk in there somewhere. And of course, you know, the whole thing, containers and where to deploy them and how to deploy them. So we brought it together into a clouds and containers talk with kind of the tagline— what is it? Hit the high points and give it to me straight. What's the difference and why do I care? And obviously that's a huge topic, so we tried to hit it more from the developer perspective. There is ample material to talk about for hours and hours from dev. From ops, from organizational, from intersections of all of the above. But we tried to kind of scope in a little bit and cover the high points as we see concerning developers on how to package and deploy real working software into a production environment.

**Bridget:** [00:05:00] Nice. Awesome.

**Matty:** OK.

**Bridget:** So Jennifer, tell us about yourself.

**Jennifer:** OK. I'm Jennifer Rife. And I know it's confusing— Jennifer Heckler, Jennifer Rife. I'm the same person. I just had a name change in there. So either way works for me. But I'm a programmer analyst at Edward Jones, and as a financial investments company, we're really kind of picking up some speed on looking at cloud options, container options. We have some teams that are experimenting with those technologies and trying to figure out what's the best way that we can deploy financial services needs using these technologies. That really kind of kicked off, not only is it something big in the industry now and popular and used and liked, but now it's starting to have applications where I'm working as well. And so I've been with Edward Jones just coming up on 4 years now. So still relatively new to all technology in general, but just picking up and learning as much as I can.

**Bridget:** [00:06:00] Nice, awesome, I love it. All right, Jerome, tell people about yourself.

**Jérôme:** So, I'm Jerome. I've been with Docker pretty much forever.

**Bridget:** Like, since before they were Docker. You were there before they were there.

**Jérôme:** Exactly. I was with Docker when it was still .cloud. And back then, I was managing a small team of SREs, which means that some of the talks that we had in Bridget's track previously kind of gave me some PTSD of, like, outage and stuff going wrong and then stuff going even wronger. But at some point I gave up on the pager and I went into explaining to people how to do stuff with Docker and containers. And I have the luck or the privilege to have like 6 years of Docker experience, even though Docker is only 4 years old.

**Mark:** So, that's great.

**Bridget:** One of the only people out there with 6 years of Docker experience.

**Matty:** So, that's the thing where we always would joke about, like, Back in the day, it'd be like, needs to have 4 years experience with Windows 2008, and this was in 2009. You're like, if someone says needs to have at least 6 years experience with Docker, you're like, yo. That's me.

**Bridget:** [00:07:08] This job description was written for Jerome. So I'd like to dive in a little bit because obviously we have the vendor side and the vendor, but a different vendor side. And then we have Jennifer. Jennifer, you're the only person on stage who doesn't work at one of these vendors.

**Matty:** Yeah.

**Bridget:** So, I would love to hear from your perspective, presumably containers, ooh, shiny Tupperware, that's not the goal here. So, maybe give us a little bit of, in broad strokes, at your employer, what are you looking for when you're diving into that stuff?

**Jennifer:** And again, some areas are more versed in this than others. But we're kind of just starting to hit that cusp. There are some teams that are using some container technology. I've heard there's some even running in production, which I didn't even realize until a few weeks ago.

**Mark:** But—

**Jennifer:** yeah, very huge. You have no idea what all is going on. But I'm kind of starting— I finally feel like after 3 years, I'm starting to get my foothold on the team. Applications and kind of how everything works. And anybody even familiar with Jones, we have a lot of terminology within the company. And so they kind of Jonesify you. So I got my grasp on that finally. And so now I'm starting to look at, OK, I know how to deploy software within my realm. I know how to go through the processes and procedures. And I know how the culture works here. Now, how can we do this better? What are other teams using that maybe we're not yet using? And that's kind of where this clouds and containers— where do we go from here? How do we deploy financial software? And our main moneymaker at Edward Jones is our financial advisors. They're the ones that bring in the clients. They're the ones that handle clients' needs and their accounts. And so how do we make their experience better so that they can provide the best results to your end customer? So starting to look at cloud, how do we secure all this information? How do we provide the expediency, the consistency, reliability of all these systems? Because we're looking at across the country, our— we are in the US and Canada, so we're looking at 6 different time zones, okay? When we take outages, how long does that affect? When there's upgrades, Hawaii is 6 hours behind DC.

**Jérôme:** [00:09:37] Coast.

**Jennifer:** So we have to think about all these things when we start looking at deploying software, not just to cloud, but just anywhere in general. And then getting into the containers. How do we make sure that also ties into the reliability of systems? If you have something up and running, something doesn't go so hot or something gets sick, you spin up another container and it runs in its place. So that's really kind of where we're looking now is what's the next step in the financial industry to kind of push us and yet still provide that consistent reliability of a financial company.

**Matty:** I have a question. And this is, again, I'm going to say I'm being a proxy for the audience. But this is something I'd like to get some input on. So I think one of the things that a lot of folks do is think about a container as just a lightweight VM. Right? So, what's the best way to kind of change that mindset, right? Because, and, you know, again, I'm directly looking at Jerome, but I think everybody sitting here can probably help with that because that's what I see a lot with my customers is, you know, we kind of like, they'll come to me, they'll be like, well, what's Chef's container story? And I'm like, well, what's your container strategy? And it's our strategy is to have a strategy, right? You know, but then a lot of what I see is it's just simply, Well, we just basically want to spin up a container instead of a VM. So, like, in a nutshell, like, what's the paradigm shift?

**Bridget:** [00:11:05] Containers, Paul, and why?

**Jérôme:** The lightweight VM idea is great for a lot of people because it gives them an idea of what the hell is this container thing about. But at the same time, very quickly after that, we need to get rid of that metaphor and think about it better and realize, oh, it's just processes. Maybe for the people who are technically inclined, it's a bunch of cgroups and namespaces and whatnot. For some people, it means, okay, it's something that I can start and tear down really quickly. For some people, it will be pretty similar to VM except I can cut down the VMware license or something like that. Sometimes I want to kind of take a shortcut and tell people, yeah, containers are going to be very many different things to many different people. The same way that virtualization ended up being many different things to many different people. At first it was, you're doing hosting and infrastructure. So like, great, I can stack many, many virtual machines on the physical machine. That's awesome. And then little by little people started to use that in cloud environments, which means you can have an API to start machines, which was new. Then like, okay, I need to have disposable environments. So that's great for CI. To do immutable infrastructure, et cetera, et cetera. And everybody will at some point find some interesting use case from my Vagrant box locally because I want to have this nice self-contained thing to some workload that is deployed on some cloud and get elastic and sized up or down as demand varies. So with containers, we have the same kind of idea where depending on who we're talking to and what their exact needs are, we should take a different metaphor. Maybe it's a lightweight VM. Maybe it's a VM that can boot really, really fast. Maybe it's a VM that you can reset to its pristine state by snapping your fingers. Maybe it's yet something else.

**Matty:** [00:13:02] So the statement that thinking about a container as a lightweight VM is wrong is itself a wrong statement. Like as a global statement. Broad stroke? Because I've heard people say that. I've heard people say—

**Bridget:** It is not technically a virtual machine in and of itself. But is that the worst metaphor in the world? Depends on your use case.

**Matty:** But can you use it in that way? I'm saying to use a container in that model is not necessarily, quote, wrong.

**Bridget:** Yeah, it just depends on your use case.

**Jérôme:** Yeah. Yeah, I think it would be— I'm going to stick to my guns. And with the virtual machine, I would say, well, a virtual machine is like a machine, Except it's virtual. Well, you can't use it to, like, hold the door open or something like that, obviously. And I kind of deliberately take a really silly example, but after people get a feel for containers and start using them in different contexts, they're like, yeah, I like the virtual, the lightweight VM metaphor because it helped me to immediately understand one use case. But there are other use cases for which it doesn't make sense. So, it's— we are adults. So, I like saying, yeah, that's a nice metaphor, but it's just the tip of the iceberg. So, make sure you don't smash against the bottom of the iceberg later.

**Mark:** [00:14:19] I think, if I may hop in here, I think there are obviously several different facets and several different ways to look at it. That's one side. And I think that's more of an operational focus, which is great. But I think from a developer focus, you have more of the packaging. Aspect of it. So you wouldn't typically create a VM to package an application. You could, but it's just like driving a nail with a sledgehammer. It's a lot of weight, extra weight and baggage that you're— and most of the time, although that's not a universal truth, most of the time it's more hand tuning. Whereas with creating a container, creating it— I should say backing up a step, creating an image with your application configured exactly the way you want it declaratively is repeatable. It's lightweight. It's easily deployed. It just makes sense as an extension of the application deployment process, whereas a virtual machine probably wouldn't. Although, again, there's a gentleman I know and respect out of Belgium who will argue very forcefully for this, and he makes a great point for it. It just seems like a lot more weight than you would need or want.

**Bridget:** [00:15:27] Well, and if you think of it as like, you know, people— there was a time when people would stamp out a golden image for their VM that they were going to boot. And maybe the problem with that is that you're not just stamping out an image that has your application and any important dependencies for it, you're also stamping out an image that has Heartbleed baked in.

**Mark:** Right. Yeah, there's a lot that goes along with that. And then, of course, Add that to the, again, kind of the overall weight of the process that would be recreating that anytime there's an update. If some location of a backing service changes and you have to rebuild, retest, redeploy, rebake that whole golden image, then that's a lot more that would be involved versus basically doing a new Docker build.

**Bridget:** And you can have, of course, you can have minimal container builds that, I mean, we, that's probably it. We probably shouldn't jump into that particular rabbit hole now, but It is possible to do your containers with your entire Ubuntu in there or not. Like, you have choices. So, I think maybe a good topic for us to look at a little bit is, I know that you were maybe ruffling some feathers and busting some myths with your talk this morning, which we were recording other podcasts and didn't get to go to. So, I would love to hear from from one or from both of you, like the most incendiary controversial statement that you made?

**Mark:** [00:16:52] We omitted all of those.

**Bridget:** I don't believe that.

**Mark:** I can't think of anything that was particularly flame-worthy. I guess the one comment, and I try to always be generous with it because, again, just a matter of perspectives, there are folks who just simply will not run on a Docker runtime. There are also folks who will only run on a Docker runtime. So it depends a lot on your perspective. It's no great surprise if you frequent Docker forums that when a new release comes out, there are all kinds of cries of anguish because somebody's stuff broke. And many times, of course, that finger— well, inevitably, it always starts with the vendor, even when it doesn't necessarily end up there. But there are some folks who are perhaps frustrated with the innovate, move fast, and break things approach that Docker takes. Now you can— I certainly can respect their position. And if I had thousands and thousands of containers running in production and everything started falling on the floor after an update, I would probably feel similarly. I need more coffee, I think. But I guess the flashpoint in all of that is that some folks feel very strongly about whatever chosen container runtime they have embraced. And they all have good reasons. And some have bad reasons.

**Bridget:** [00:18:09] And for those— for Stratton, acting in lieu of the audience, I'm going to ask the obvious question. Can you— and maybe Jerome can jump in with this if you like— explain exactly what it is you mean by runtime?

**Mark:** Well, OK. I'll start, and then anybody else can— I guess at a very simple level— and correct me if I really go astray on just the kind of 10,000-foot view— you have a way to initiate containers from images called runc. And then you have containerd, which is the Docker runtime. And that's a gross oversimplification, but by and large. You have other mechanisms that different vendors will offer that will allow you to still execute runc and fire up containers, but will use something different as the container runtime to manage those containers. So you have like Joyent Triton, which I, again, gross oversimplification, but it effectively is running Docker containers on Solaris zones. You have things like Cloud Foundry, which will take a Docker image and spin up and build a container per the Docker image format. A slight distinction there, but again, it's another different mechanism for runtime. It still uses runc to kick that off. Rocket, CoreOS Rocket. You have a lot of other things, other entries that right now kind of escape me. But you have other means of running containers that are all still fed by the Docker images and still use runc to kick them off. They just use a different execution engine.

**Jérôme:** [00:19:42] Yeah, that's a fair description. And it can seem daunting at first because it's like, okay, I'm gonna run containers and I have this stack or I could maybe Maybe have this stack instead, or I could use this combination of products or this other one. What should I pick? I can only speak for Docker strategy here. The idea is to give as much options as possible for people to switch things around, to have something that is kind of end-to-end with what is Docker the product. But then if somebody doesn't like the way Docker Inc. decided to do isolation, they can switch out Runc for Rocket, for instance. Or if they don't like SwarmKit, which is the orchestration mechanism, they will soon be able to switch out for Kubernetes, for instance, etc., etc. So all those things add a kind of choice that I'm going to go back to this virtualization metaphor. When picking an hypervisor, should I go with Xen or KVM? KVM or ESX or some other virtualization technique. Each will have its own pros and cons. And we are fully aware that when somebody is just stepping foot in the container ecosystem and there are suddenly all those choices, questions, I don't even understand the question that I'm being asked. So how can I pick what I want? And this can be kind of a little difficult in the beginning, but we've been through this. We've been through this with virtualization, with config management. Should I go with Chef or Puppet? Obviously Chef, but those kind of questions. And it's okay. It's like we will have to do our research. We will have to understand what's going on. Sometimes we will want to work with a specific vendor because we already already have a relationship with them and we know that they are sticking to what they offered in the past. Maybe we like a specific approach in a specific product. So that's going to be what we're going to try. So yeah, all those runtimes will have small differences, options. But when you get started, it doesn't really matter which one you pick the same way that when you start your first cloud VM, you shouldn't like think 1 hour whether you're going to spin that up on EC2 or DigitalOcean or whatever. You should just like pick one and start it and just roll with it. And then after you start kind of hacking with your machete at this kind of cloud jungle, you can be like, okay, now I get a better idea of what is this instance store thing and elastic whatever and this and And with containers, it will be the same thing. After experimenting with any of the container engines platforms out there, you will get an idea of what's an image, what's a container, and what this networking abstraction overlay networks, etc., etc. And then you will be able to make a good decision for what you want to keep because you're understanding the core concept, right?

**Matty:** [00:22:51] Because you can't understand why— like, I could sit there and I could look at all these different engines and and be like, well, this one is better because of X, and this is better because of Y, this is better because of Z. And I'm like, I don't even know what any of those letters mean yet.

**Bridget:** I mean, does that one have cup holders?

**Matty:** Like, right, you know. And I think it's like you said, similar with the virtualization thing. I think that's a really great metaphor of how we did that and how that aha moment happened. Because what, what happened with virtualization was we had this thing where something that we never knew was possible became possible. Just at a high level. And then as we— then it became a thing that was possible, we looked at how we could explore it and enhance it. But you have to start with that. Like, we didn't— before there was virtual, before you experienced it, you didn't even know it was a thing. Exactly. Conceptually, it wasn't even there. And so I think that that may be a little bit of the challenge, right? And especially with all the different levels of experience and adoption and conversation that happens, is, you know, people go to DevOps Days or they go to talks or they listen to podcasts and it's like deep in the weeds about Kubernetes and schedulers and Rocket and all this stuff. And then someone's just like, what's a fucking container, right?

**Mark:** [00:24:05] You know what I mean?

**Matty:** And it's like, you know what, you don't need to worry about all that other stuff yet, right? Worry about understanding this. You'll know when you hit it right. It's like, you'll know you have a scale problem when you have a scale problem. Same thing, you'll know you need a scheduler when you need a scheduler. Don't say, what's my scheduler when I haven't even built a container yet?

**Mark:** Yeah.

**Bridget:** So, I would love to hear— now we've gone into some weeds of container details, but I would love to hear from the actual adoption point of view from Jennifer. Like, I'm guessing that you're not making your decisions based on whether or not it's, I don't know, like CoreOS or Kubernetes or whatever at this very moment, like, you're looking at what your gains are, what the functionality is that's going to be different, like, what makes the development experience different. I'm wondering if you can kind of talk about what the actual developer experience has been of every container decision that you've made so far.

**Jennifer:** Is this more from, like, a personal aspect? Sure.

**Bridget:** From, I would say, everything that you've done specifically, but also organizational-wide. Those decisions aren't always the same. I'd love to hear where they're the same and where they differ. Okay.

**Jennifer:** [00:25:14] So just starting out personally, when we first kind of started discussing clouds and containers, I'm like, okay, great. I know what a cloud is. That's really easy. You have Office 365 runs in cloud. But it's really kind of this— it's kind of like standing on the beach and looking out at the ocean. Ocean and you have no idea where the other side is and how far it is. And you have no idea how to go about what's the best place to actually enter the water, where are there sharks, where are there not. And so it's trying to figure out how do I approach this thing. And so starting to dive into these topics and part of me kind of, you know, started, you know, walking along the beach and figuring out, okay, Okay, this looks safe. This is rocky. This is not so good. Okay, this doesn't make any sense to me. Let's try something else. But at some point, you kind of just have to go, oh, heck with it, dive in. And so that's kind of where I started. And I leaned a lot for some guidance on my dad and some other people that I knew, kind of figuring out what's the best entry point for this. And just started playing with the code. Figured out, okay, I downloaded VirtualBox to run some of this stuff on my machine. I downloaded Docker. I downloaded Kubernetes. I downloaded PCF Dev and started actually getting in and playing with this stuff. And then I went out to Docker Docs. They have some good documentation out there. And just started walking through their very entry. This is how to run a program. Or this is how to run a container, excuse me. Or do an ls. Or do a ps, and what does this give you, what does it not give you, and playing with the commands and actually seeing the physical output. Most people are probably visual learners. I know I definitely am. And so that's really when you actually get hands-on and start doing some of these things, that's when you start picking up and understanding this stuff. I work very well on metaphors as well. So if you can relate it to another example, kind of like the beach example I gave, then that's something that's more relatable to the average person or to someone who may not have had the same experiences you have. So from a personal aspect, there has to be some research, some kind of guidelines, some posts to kind of get you started. But at some point, you kind of just have to dive in and go, no matter what, I'll figure this out. You're not gonna horribly break something. You're not gonna crash your computer. You may probably break a few small things, but usually you can get out of it and fix it. So it's a little bit of bravery and a little bit of courage on that front.

**Matty:** [00:27:53] If you run Docker on Mac, you may crash your system. At least use a lot of CPU.

**Mark:** I would just say if you're going to use Docker on Mac, please do use the stable builds. That's all I'll say.

**Jennifer:** Now I will say my MacBook Air I got last year, that's a whole other story. Um, I was at JavaOne last year. Yeah, I was at JavaOne last year. My laptop crashed before my session. Um, but I, I got a MacBook Air and it's a smaller hard drive space. It's all SSD, but it's smaller. Um, so I'm, I'm actually— I'm running Docker and VBox and everything else from an external hard drive. Um, so, uh, plugging that in and making sure I have that, and then kind of the performance aspects of running from a second secondary drive has kind of been a little interesting, but I got it to work. So, and then go ahead.

**Matty:** I was just going to say the thing is what I find, and again, because my utilization of Docker is very bastardized, right? Because I don't write applications, I write infra code. So Docker is actually super duper helpful for like testing cookbooks. Because, I mean, spinning up a Docker container is super way faster than spinning up a VM in VBox or something like that. But it's the one thing that I find, like, you kind of, you know, Jeremy, you're like, oh, well, you know, Docker is a small VM, is useful in CI and blah, blah, blah. The thing is, like, I just sort of want to point this out, people have to think about is that at some point you have to test on something that looks like production. Right? So, you can't be like your whole way along, you're testing in a Docker container unless production is a container. You know, now it's fine for your fast feedback. Like, again, if you're gonna treat it like a little mini VM, that's okay for here because you're like, ah, it's close enough, right? But you have to hit a point. That's sort of what I've seen is because I've seen people do that where they're like, oh, well, I don't want— it's too expensive to run full VMs. So, I'm gonna Docker all the things until I get to production. Then you're like, oh, and then you're surprised when things don't behave that way.

**Mark:** [00:30:01] The less deviation between your dev, test, and prod or every other account, the better. Because even with almost zero variance, you're going to have things break when you change. And it's just a truism. It's also incredibly frustrating when you've tested the heck out of something and then you get there and it's like, there's no reason this should break, and yet here we are. So, yeah, the more you can mirror Production.

**Matty:** And it's, I think it's okay, like when you're looking for that fast feedback place to say that's a quick one, but you have to get out of that as soon as you can. That's reasonable unless that's what it looks like, right? You know what I mean?

**Mark:** That's— well, that's the goal, right?

**Jérôme:** Yeah, eventually.

**Mark:** I'm just giving you a hard time, but yeah, I mean, ultimately it kind of is in many ways.

**Matty:** My Postgres server is not gonna run in a container. You know what I mean?

**Bridget:** Like, people do.

**Mark:** You wanna tackle that?

**Jérôme:** Well, the whole question of should I put my database in a container is always like, well, should you be running your database in the first place? Is that really what you should be doing? And shouldn't you find somebody whose job is to run Postgres or MySQL or Mongo or whatever and take care of replication, of scaling, of giving you some operability of the whole thing? If you just have this one Postgres server and one replica and you do the failover with this kind of manual switch in the middle of the night when things go wrong, you probably shouldn't put that in a container because between us, if you're doing things like that, you don't exactly know what you're doing. And I've done that for a decade. However, if you have thousands of Postgres databases and you continuously, spin up servers and destroy them and say, oh, we're going to run the CI suite or whatever. And you decide that each CI test should have its own Postgres server or something like that. Then yeah, you probably can get a lot of ROI from running database in containers. But otherwise, it's really— I think the only deviation that I encourage between prod and dev is on the database side. If your production database is whatever SQL and runs with maybe a third party, then in dev you probably should have it in a container because that would be super easy to spin up. You won't have to create a special account with that third party or this custom local whatever SQL on your local machine. So, that's one scenario where I say, yep, in that case, put it in a container because it's dev anyway.

**Matty:** [00:32:37] And that's not what you're testing, right? Exactly. It's almost a mock, right? Exactly. Now, if you are developing your infra of the database, then it's kind of not great, right? Yeah. So, again, I think it depends a lot on where those things go. And one thing I think about from an What's the word I want to show? Operationalization perspective of containers. I think there's a feeling from a lot of ops folks where— so, the appeal of containers to dev is, sweet, I could just package this shit up and, whoa, here's my container. And ops is like, what the hell is this? I have no visibility into it. I don't understand what of it is. So, like, what are some—

**Bridget:** Does it have a full unpatched operating system in there that I have to worry about?

**Matty:** Or whatever, right? Like, does it? Does it not? Does it? What's all that? So, like, what are some of the things that you see to help either— is that an unfounded fear or is that something that you can work around with a better policy?

**Bridget:** [00:33:45] How do people mitigate that, you know, both from a Docker and non-Docker point of view?

**Matty:** Yeah, just in Yeah.

**Jérôme:** So I think it's from the technology's point of view, I would say, oh, it's an unfounded fear. I'm going to show you how you can have that visibility and how it's going to be even better than before. And for each problem, we can come up with a really nice solution where people are like, oh yeah, that's very clever. On the other hand, when you don't know how to do that, that's a big problem. If you have your techniques that work really well with VMs and you try to map that to containers, that's not going to work. And I'm going to take just like one tiny example, which is the how the hell do I get an SSH connection in my container? And so a while ago I wrote something like, oh yeah, you should not run an SSH server in your container. There might be some good use cases for that. Like let's say if you're running a Git server or whatever. But generally speaking, if you just need a shell in the container, you can get a shell in the container. Like you can spawn a shell that is attached to the container, dynamically attached to the container, and you don't need SSH to be running. You don't need to set up keys. You don't need all that extra stuff. And if you don't know that, you end up cramming an SSH server in the container and then being like, this container thing is not that convenient after all. But if you know that trick, then you're like, okay, I can do that super easily. And now I simplified a bunch of things in our infrastructure because I don't have those extra moving pieces. And this specific example can be replicated hundreds of times for many other observables. For whether it's metrics or access backups, all those things. So it can be hard when we don't know the tricks. And so that's why there are like the communities, the vendors, all the people blogging about this and proposing creative ideas around this. Because, and I think this is for all vendors, for everything, When you come up with a product, it's never completely complete in the sense that there will always be somebody having another idea in a new way to use it, and you haven't thought about that. Or maybe they want to have one specific kind of viewpoint or viewport in the product, and you never thought that anybody would need that. So you have to update sometimes just the documentation, and then you're fine.

**Bridget:** [00:36:21] I see Mark is full of questions. We're full of ideas here.

**Mark:** Okay. Full of something, right? I do want to throw out something that may be a bit controversial in itself. About time. I know. I never do that. But anyway, it comes down to one thing that we talked about. Is anybody a cloud foundry user? Whether it's Pivotal or IBM Bluemix or SAP HANA or Predix or anything? Excellent. Well, or Heroku. Has anyone used Heroku? It's a different level of granularity. They're not— it's containerization, but you're not focused on the container per se. You're focused on the application you're deploying. And originally Cloud Foundry was built around that same concept as well. They have buildpacks which create, or are used to create, I guess more accurately, the container using containerization around your application. So you don't necessarily care as much about that container. Now, we love Docker. We love containers. We love taking those Docker images and using those as a template as well. But it's a little bit different mechanism. And we always, in our presentation, we kind of point out the differences. Because one of the frequent conversations that comes up, obviously, in our sphere is, well, what's the difference? Buildpack, container, what the heck? Both will give you containerization. Both approach it a little bit differently, because with a, for instance, the buildpack, you deploy your application, and that, again, the container is built around it. What actually happens is you still have that layered file system. But for instance, if Heartbleed or another Heartbleed, Heartbleed 2 or 3 or 5 hits again—

**Bridget:** [00:37:59] Shellshock or whatever the next exciting name they'll come up with is.

**Mark:** You have folks who are very, very, very skilled at maintaining cloud platforms. Those ops folks have a lot of capabilities in their hands that most of the time, or many times, developers say, yeah, but I want that too. I want to be able to control this. And that's fine, I guess, in some contexts, but there's always a cost, right? And if you're using buildpacks and Heartbleed or whatever comes up again, when the underlying cloud platform is patched, the operational installation can actually reach into those lower levels of that container. So as a developer, you don't have to engage to get an updated container and a patched container. Effectively, the ops folks can handle that and kick the containers, and you don't necessarily need to be any the wiser. That's good and bad, right?

**Matty:** That's Habitat also, right? That's a similar thing. Just, I mean, not in the exact same thing, but the idea being saying I can abstract that away and say, like, again, I can go through and take care of this one particular layer and not have to worry about that, right? So, it's, yeah, I know a little bit about it.

**Mark:** [00:39:07] Yeah.

**Matty:** There you go.

**Mark:** Yeah, exactly.

**Matty:** I'm not as dumb as I'm pretending to be.

**Bridget:** And this is like— and I think this is probably back to if Jennifer is going to act in the role of, I'm just a developer. I want to just— I build reality out of my mind, but I don't want to care about your buildpacks or your containers. Like, what would you say, like, Matt, from your point of view, what would you say to somebody who's trying to make good technical decisions, but they mostly wanna create their thing?

**Matty:** So, I think that's the piece of that is, you know, you've kind of heard my lib statement, which is, first of all, let's get off this full-stack nonsense. Like, there's 12 full-stack developers that'll work at Netflix, right? We're done. Where's Mark? You have to— domain experts need to be domain experts, and you need to figure out how you layer things. And I usually tell the story in perspective of Chef, of configuration management, but the same thing is true when we're thinking about— again, I wouldn't necessarily know how to talk about it in the context of like a Dockerfile, but I think about like a Habitat plan or something like that. It's I'm contributing the thing that I know best. And then this is also why in our previous episode, which may not be the previous episode if you're listening because who the hell knows the order we're going to release them, but the episode where we just talked about embedding compliance into your pipeline. So what's happening is you're creating an artifact, right? When you're putting software, whether it's a Docker image or can whatever thing that it's making— it's making a thing, it's making a Converge node, it's making a binary— you're creating an artifact. We want to test that artifact for compliance, whether it's capital C or lowercase c compliance. And so, what happens if we're treating it this way, it's again, so Jennifer's like, I don't want to have to care about that other stuff. So, what happens is, so she can kind of build the things she wants, but she doesn't just get to throw it in, right? It has to make its way through deployability. It gets tested, right?

**Bridget:** [00:41:10] Well, maybe I'm assuming she doesn't care. I actually want to hear from you, Jennifer.

**Matty:** I was answering to your thing of saying I don't care. Want to, and then—

**Bridget:** Well, it's a typical statement we hear, but I would actually like to hear, like, what is your thought on this?

**Jennifer:** There's 2 sides to the fence. So part of me is, and I'm sure part of everybody is, I want to know all the things. I want to control it all. I want to customize it all. What does this do? What does this button do? So part of it is that, and part of it is you don't have all the time in the world. And so things like— I've never really dug into C, C#, C++, but I know there's a lot of like configuration stuff there that you have to code in that language. Is that problematic? No, that means you could customize a lot of really cool things and optimize your code, but that also means you're spending time doing that and not on something else. So it's really just kind of what interests you and kind of what you're more geared for.

**Bridget:** [00:42:15] And maybe what interests your employer.

**Matty:** Well, and also the things that you may not know the larger ramifications for. And that's the thing when we talk about that where I kind of have in my security talk where I say the thing that scares sysadmins about what I call distributed configuration management, which is layered things, is, you know, Developer reads on Stack Overflow that disabling SELinux will make their Node app work better. Developer updates their part of the cookbook to disable SELinux. This admin gets fired because of evil hackers, right? So the thing is, like, unless depending upon your domain expertise, so like you say, I want to be able to turn these dials and that's awesome, but you want to be able to have the safety guardrails of that if I do turn them and I turn them too far, that made sense to me, there's something in an automated way that's going to prevent me from actually making something that's not good. And I'll get fast feedback that I did that. I won't find out about it after I release it and security comes to my cube and starts wagging their fingers at me.

**Jennifer:** [00:43:16] And you have to know what's valuable to your company. So from a financial investments perspective, we are very, very concerned with government regulation and privacy laws and all of that. We have a ton of compliance that we have to go through. We have a ton of user experience. I'm working on possibly building an application. We want new functionality for our branch users to be able to enter their expenses. That seems so simple, but we have all of these teams, our user experience teams, that we have to go through and say, will the— I mean, it's technically a secondary customer because we're treating the FAs and then the FAs service the customer on the other end, but is this something that a financial advisor could use? Is this easy enough to use? We had one product we brought up a couple years ago and they were like, absolutely not, you cannot release that to financial advisors, it's not user-friendly. So now we're starting to look at working with these teams, trying to figure out what can we do, what can't we do. And so it's kind of knowing what's valuable to your company and what certain security measures maybe you wanna be able to control that, maybe you don't care so much, maybe you can let somebody else handle that.

**Mark:** [00:44:30] And I will say that we're all human, so of course we want it all, right? But you can't have it all, so it becomes a matter of prioritization, your organization's priorities and yours, because you can't do everything. Develop your expertise and you rely on others with expertise in areas that you couldn't possibly match. And that's, again, that's why we all talk about containers are great, but they don't, as Bridget has said many times, don't fix your broken culture. They also don't fix your ability to deploy quality software at pace.

**Matty:** So it's just one piece in the puzzle.

**Bridget:** And this is something that we could obviously talk about forever, but we're pretty much out of time. And I can see Matt wants to make a final closing thought?

**Matty:** No, I want to ask a question is what I've been trying to say. I know you're surprised. So, actually, I was— so, it's a question I have for Jennifer. I would ask it for everybody, but I'm gonna ask you because I'd actually be really amused what Jerome's answer would be. But I was gonna say, so, what with your experience, what was the most surprising thing about starting to work with containers? Like, what was your maybe aha moment or your oh shit moment?

**Jennifer:** [00:45:37] That is a really hard question.

**Bridget:** That's actually such a good closing question that I think we should probably ask all the panelists.

**Matty:** Okay. Well, that's right.

**Bridget:** Let's let Jerome go.

**Matty:** Let's go in order of when they started. I just didn't know if we had time, but I wanted to ask everybody.

**Jennifer:** Well, we got to get—

**Bridget:** we got to ask a closing question anyway. So, in order of when you started with containers, Jerome.

**Jérôme:** Well, I don't really think I don't think there was a specific aha moment. It was a continuous series of crazy experiments for me. It's the same way that when I started to use Linux and one day I was like, oh, I can run that on desktop. Every year. And I think one of the really, haha, this is fucked up moments was to, on my Linux machine, run a container. In that container there was a VM. That VM was showing like a screen. On that screen, there was, like, Moby, our distro, like Docker, remember the distro that was running a container that was running a container that was running a container. And at some point, it was like, okay.

**Bridget:** You had your inception moment?

**Jérôme:** [00:46:39] Yeah.

**Matty:** It's Sean O'Meara's configuration management parlor tricks where he has, like, CFEngine installing and configuring Puppet that's configuring Chef. Terrifying.

**Jennifer:** All right.

**Bridget:** Same question. Aha moment? What moment?

**Mark:** Well, I guess it is tough, isn't it? I think for me, it was a matter of— I think we all kind of approach it again from different angles. And for me, it was, why do we need this? We have VMs. And VMs were quite— I don't know if anybody remembers the horrible old days of app deployments like 6 years ago before virtualization was everywhere. And you had to deploy to physical machines. And when you had to build, spin up a dev box or a test box, it was a physical machine. And it just was crazy. And then virtualization came in and that simplified things so nicely. When I first started playing with it, and the old Dilbert-esque thing where, how does technology get injected into an organization? Well, somebody in marketing reads a magazine, of course. But there is some truth to that. And it's not entirely invalid because sometimes as well, how do technologies come in? Dev folks, ops folks read something and they say, I wonder if that would have any use for us at all. And just spinning up some containers and running Redis or running Mongo or something like that, God forbid. But anyway, you can do that and it becomes very easy and very comfortable to do that to where you start and your scope broadens. So I think that was my aha moment, just kind of a gradual realization that Hey, this actually has some potential.

**Bridget:** [00:48:15] All right. What do you think, Jennifer?

**Mark:** Did I just take your answer?

**Bridget:** No.

**Jennifer:** Although something similar is actually getting in and playing with this stuff. So, I mean, I'd read a lot about it. I could read— I mean, you can read Docker docs all day long and pull a ton of great information. But until you sit down and actually walk through the steps, it doesn't really paint a good picture. We put together a simple application and actually deployed that and seeing the commands actually curl endpoints and pull responses back and see how that changes the way you deploy applications. You're no longer deploying applications to this massive piece of machinery that's handling a ton of applications. You're deploying one application in one container and just the implications of that. Just kind of neat to think about. And then it sparks all these other questions of what do I do? Where do I go from here? What can I do with this thing?

**Bridget:** Nice. I love it. Okay. I know we're out of time, but I still want 1 to 2 sentences from Jerome since you mentioned Moby. And I know there was a lot of question mark, question mark, question mark in the world. And we don't have time to schedule another whole episode where you explain that. So, can you give us like the 2-sentence explanation of what's going on there?

**Matty:** [00:49:30] Sure.

**Jérôme:** So, Docker Inc. is a company that makes Docker, a product that uses Moby, an open source project.

**Matty:** That was one sentence. Awesome.

**Bridget:** That was awesome. Thank you for overdelivering.

**Jérôme:** I have to thank Laura Frank for coming up with that explanation.

**Bridget:** I love it.

**Jennifer:** All right.

**Matty:** So, yeah, head over to arresteddevops.com/containers for this episode's show notes. Our site also has a link to sign up for our newsletter, support us on Patreon, check out a bunch of other DevOps resources like books and other podcasts and stuff. Hunt us down in the iTunes Store, leave us a review, or the Google Play Music Store. That's a thing, I guess. Podcasts are in Google Play. Who knew, right?

**Bridget:** So, I had no idea. Thank you so much, Mark. Jennifer and Jerome for joining us.

**Mark:** Thanks for having us on.

**Bridget:** Thanks.

**Jennifer:** All right.

**Bridget:** I'm Bridget at Bridget Krumhout.

**Matty:** I'm Matt at Matt Stratton.

**Bridget:** [00:50:32] We're Arrested DevOps, and remember, there's always DevOps in the banana stand.
