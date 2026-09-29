**Steve:** [00:00:00] This might have been at, you know, in some point like where like in a movie they would take the person out in the back and you'd hear a bang and— right?

**Trevor:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Trevor Hess, and I'm joined today by Steven Murawski here at Build 2019. But first, a word from our sponsors. This episode is brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 120 common infrastructure tools such as Chef, Docker, and AWS so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog. The worst time to learn about incident response is during an incident. Don't wait for an outage to strike before getting started. The PagerDuty Incident Response Training Course is now open source and free for everyone at response pagerduty.com. Based on the same training that PagerDuty employees go through, this course will show you how to streamline your incident response process, turn chaos into calm, and demonstrate the role of an incident commander. So what are you waiting for? Go to response pagerduty.com today and check it out.

[00:01:35] The worst thing about the Arrested DevOps podcast is when it ends. You're left wondering what to do next. What are you going to listen to on your commute home? How do you occupy your time when walking the dog? What are you going to listen to during the quarterly all-hands meeting? But fear not, dear listener, there is a solution. You need to subscribe to Software Defined Talk right now. It's a weekly podcast that recaps all the news in cloud computing, DevOps, and enterprise software. The hosts, Cote, Matt Ray, and Brandon Wichard, will keep you up to date on all things cloud while offering tips on how to optimize your Costco haul and how to PowerPoint. It's a fun, free-flowing conversation that will keep you entertained and informed. What are you waiting for? Subscribe to the podcast today by visiting softwaredefinedtalk.com or by searching for Software Defined Talk in your favorite podcast app. Looking for an opportunity to accelerate the delivery of reliable, secure software applications? Agile+ DevOps West brings together practitioners seeking how to leverage Agile and DevOps concepts to bring cross-functional teams together to deliver software with greater speed and agility while meeting quality and security demands. Learn from industry experts at Agile DevOps West this June in Las Vegas and get started on the path to reduce lead time and successfully deliver stable new features. Arrested DevOps listeners use code AD400 to receive $400 off their conference registration fee. Learn more at arresteddevops.com/agiledevopswest.

[00:03:12] Hey Steve, welcome back to the show. Hey Trevor, can you introduce yourself for anybody who may not be familiar with you?

**Steve:** Sure, I am a Cloud Advocate here at Microsoft. I focus on kind of the modern operations story, so the operations side of DevOps, Site Reliability Engineering, and cloud-native operations. So, and we worked together in the past, so we have, that's how we know each other.

**Trevor:** Well, and we've podcasted several times together.

**Steve:** We have.

**Trevor:** I think that was, yes, we actually, we first met on a podcast on Arrested DevOps.

**Steve:** It was, yeah, back when I was talking about PowerShell Desired State Configuration And we had a handful of other folks talking about Puppet and Chef, and we got into the config management space then.

**Trevor:** Absolutely. That was back when you were at Stack Overflow, right?

**Steve:** Yep. Yep. And Chris Webber and Sean were also on the show, and at some point then, pretty much all of us went to work for Chef. Matt, you—

**Trevor:** [00:04:15] Yep. We all went to Chef.

**Steve:** And now we're all on to different things. Mostly.

**Trevor:** I'm still at Chef.

**Steve:** You're still at Chef. You're doing awesome stuff at Chef.

**Trevor:** Uh-huh. It's fun stuff. We got— well, probably by the time this podcast goes live, ChefConf will either be happening or will be just about to happen. But we'll have some cool stuff that we show off there, which will be exciting.

**Steve:** Yeah. You were giving me a little sneak peek of what you were going to be talking about. So I'm looking forward to seeing what comes out of that.

**Trevor:** Me too. I've got a workshop, a session, and a keynote demo, so it's going to be a busy week.

**Steve:** So what should we talk about that's not stuff that they can't hear yet?

**Trevor:** That's a great question. First, I mean, I'd love to know what's new with you, Steve. It's been since Ignite that we last spoke about things on the podcast. So what have you been up to? What's new?

**Steve:** So I've been up to Ignite. So Ignite itself is our main readiness conference that normally happens in the fall. But we've— this year we've been doing Ignite the Tour and—

**Trevor:** [00:05:22] That sounds like a terrible ride at Universal Studios.

**Steve:** It's been— it's definitely been a ride. I wouldn't say terrible. It's been actually— it's been a really awesome opportunity to get out and it's 17 cities over a roughly 6-month timeframe and it's a 2-day event. There's Microsoft 365 content and there's a bunch of Azure content. And our content, we had a lot of learning paths. So basically the things that you're trying to do with Azure, whether it's migrate applications, whether it's run services in the cloud, whether it's hybrid operations, we have learning paths covering all of those particular things. So you can go to a series of, you know, it's mix and match, but you can go to, you can stay on a track all day and go through the full lifecycle of migrating an app, for example, into Azure and going from on-prem, into hosted services or containers or a number of different options, right? What my team has been focused on has primarily been the modern operations story. So we have a track of content covering infrastructure as code, instrumenting your applications, troubleshooting in the cloud, because hey, guess what? You can't go crawl under the, under the cables, under the floors with the cables and trace things back and forth. Through the hot aisle anymore because it's all somewhere else. So we have a track on, hey, what are the tools that we have access to to actually get insight into what's happening in our environments? A session on scaling, right? Hey, guess what? Your site's got a lot of demand. Uh-oh. Guess what? Your site's got a lot of demand. How do we deal with this? Or how do we scale for, hey, we're in the cloud now, so how do we get a global presence? And how do we ensure resiliency if a region goes down or something? So, we have some sessions around that. And then one of my favorite sessions, and this is one that Jason Hand had a good amount of input into, was responding to and learning from failure. Things will go wrong. What do we do to deal with that? How do we respond? But then also, how do we learn and improve from that? And then what are some tools that we can use to kind of help make this process better and that we can use to iterate on our process?

**Trevor:** [00:07:37] Rather than pointing fingers and—

**Steve:** And trying to fire your way to reliable, right?

**Trevor:** That is— I haven't heard that expression, but that's—

**Steve:** I've now— So, one of my colleagues, David Blank-Edelman, first used that phrase, and that's the first time I had heard it. And then I heard it again this past week at PowerShell Summit. Somebody else had mentioned it as well. So, it's making its way around, but yeah, the idea is, yeah, you cannot fire your way to reliable. So, if we have people who are fearful for their jobs or that there's going to be negative impact on their job if they share accurately what they did to contribute to the circumstances of the scenario or that they did in trying to troubleshoot, we're never going to learn exactly what happened because they're going to be incentivized to minimize their impact and maximize others. All right, so, or you put them in this really hard place of, hey, all right, you know, characters, what happens when, when, uh, you know, you do the right thing even though it may, it may impact you poorly? Uh, we— you start— you can't count on that completely, right? Because guess what? Now we're hooking people's livelihoods up to this.

**Trevor:** [00:08:51] Yep. And people don't usually respond well to intense fear.

**Steve:** Right, right. And so, I really like that session because we talk about a culture of blamelessness and a human isn't the problem here unless, of course, bad actor type scenario. But it's the system around it that allowed that failure to happen. And how do we engineer to help remove that potential failure mode?

**Trevor:** Absolutely. So you mentioned the bad actor, right? And that's— I know when I used to go out and do consulting and stuff, that would always be one of the big challenges is, well, what if somebody intentionally breaks it? So what do you do with a bad actor? Or what do you do to prevent the— or how do you address the bad actor in your conversations?

**Steve:** Well, hopefully you minimize the opportunity for a bad actor by having a just culture and having people who feel valued and rewarded for working in their environment. But sometimes things go wrong and the wrong person is working in the wrong job. Or sometimes you actually have intentional malfeasance or things. And in those cases, now you have HR. You may have a crime. It really depends on the scenario. I don't think there's one specific way to deal with that.

**Trevor:** [00:10:16] It's better to not optimize for the bad actor.

**Steve:** Exactly, right? And this might have been at some point where in a movie, they would take the person out in the back and you'd hear a bang. That's not really— that would not be a recommended strategy to optimize for, right? It's not the mob. It's not— we're not organized crime here. Like, if you're doing IT for organized crime, then maybe you got to check.

**Trevor:** You unplugged your last server.

**Steve:** Yeah. Oh, that's the last time you run a packet sniffer on that network.

**Trevor:** Yeah.

**Steve:** So I think we've detoured sufficiently down that path.

**Trevor:** So how would you summarize that talk? What are the kind of— you kind of said like, blamelessness? What are some of the other key things you hit on as ways to address not optimizing for firing, but optimizing for reliability?

**Steve:** [00:11:19] Yeah. So one of the key things there is making sure that this is a learning opportunity, right? And surfacing the things that we can do to improve our process and looking at it as, There will always be failure in the system, but the more we learn, the better, more reliable we build. And at some point, it may make sense, it may be financially feasible, it may be operationally feasible to say, hey, guess what? We cannot financially, or we can't dedicate the right resources to make this thing more reliable than what it is. It is okay if we have these particular types of failures. Right? There's a— it's the argument of, you know, does everything need to be 100% reliable all the time? And this is one of the core things when you start talking about Site Reliability Engineering is determining the appropriate level of reliability. And that's not a one-time conversation unless we're talking about the software that keeps the planes in the air while I'm in them, because I want those to be reliable all the time. You know, they can break down on the ground after I'm off the plane. That's fine. But as long as it's fixed by the time we're up in the air and it's 100% reliable while I'm in the air, great. Or if it's the pacemaker that's driving my heart or something— not that there isn't a pacemaker driving my heart, but if there will be one someday, I want it to be reliable.

**Trevor:** [00:12:43] The insulin pump that delivers insulin.

**Steve:** Exactly. You want that to be functioning. You want that to have, you know, better than 5 nines of reliability, right? But not everything needs that. And, you know, you might say, okay, hey, we need to have, you know, the 5 nines of reliability for this service. But over time, and as you have incidents happen there that drop you below that, and we look and we see, oh, hey, the impact that we're seeing from our users, whether it's customers, whether it's internal users, doesn't rise to the level that we thought it would. Maybe we can adjust that tolerance down. And so, because maybe we don't need 5 nines, maybe we need 4 nines. Maybe we need all the 8s in the world, right? There's a lot of— the learning isn't just the technical solutions. It's also about our conceptions around what availability we need, what services we need to offer, right? It's all of the things that maybe this isn't a service that we expose directly to customers, right?

**Trevor:** [00:13:56] I mean, even if you take it to an extreme example, right? Maybe this is a— is a site for people who work in a coffee shop, and that coffee shop hours is only 9 to 5 in Central Time. Right. Right? Doesn't matter if the site's down at midnight.

**Steve:** Exactly. And, or maybe we need to make sure that our other applications can fail gracefully when this backend service isn't available. And maybe when it fails gracefully, it doesn't actually detract all that much from the, from the standard behavior. And so, hey, we don't need the same level of reliability. On the flip side, if we learn, hey, this thing is absolutely critical to our process and we're losing sales or we're not able to service our customers the way we should, then hey, then we need to find the right engineering solutions to these problems. Maybe we need to invest even more in how we deliver that service.

**Trevor:** Absolutely. I mean, you said learning from failure. And that's one of those soundbites that always sticks in my head. I can't remember if it was Adam Jacob or Adam Savage, but I always have the soundbite in my head of failure is an opportunity to learn.

**Steve:** [00:15:07] I think it could be either one of them, but I think both of them have said something similar.

**Trevor:** Yeah.

**Steve:** So yeah, so the Ignite Tour sessions like that, have really been a large part of my life for the last few months. And now we're out here at Build and talking. I've got a session on infrastructure as code, primarily infrastructure as code in a pipeline. And so I'm going to focus on the testing side of things with that, right?

**Trevor:** You've always been very passionate about testing.

**Steve:** I am because I like my things to work, right? I like them to work when I have my build and it goes to deploy things. I like my infrastructure as code to get my infrastructure to where my code says it should be.

**Trevor:** The only way to do that is to test it.

**Steve:** Right. I may be a little nitpicky about that, but hey, you know, that's me. When I have code that stands up and configures my infrastructure, I like when it does what I tell it to do. I'm a little bit of a control freak that way.

**Trevor:** [00:16:11] Hey, you know, systems administrators have always been control freaks, right?

**Steve:** That's what drew me to the field. So yeah, and then other, you know, there's a lot of other great stuff going on at Build, but I've primarily been spending a lot of time around our open source integrations.

**Trevor:** Oh, like what?

**Steve:** Like Ansible, Terraform, Jenkins, Spinnaker, and some of the work that we've been doing around there to make it easy to get into Azure. From those tools, right? Because there's a lot of confusion and it happens at our booth too. When people at a show surrounded by booths that say Azure all over the place and then they see DevOps, their brains put Azure and DevOps together and they think the service. And there's also the impression that, hey, guess what? Oh, there's this Azure DevOps thing. That must be the only way that we can deploy things into Azure. And that's not the case, right? So we work with a number of different open source projects and a number of different communities and a number of different tools. You know, we've got other groups that are focusing on commercial partners and we've got a number of great ways to deploy and manage into Azure. And the idea being if there's a toolchain you're being successful with, if you are building your stuff in Habitat or you're configuring with Chef, We want you to be successful in Azure. If you're using Ansible to manage your environments, we want you to be successful in Azure, right? If you're— if you have Jenkins build pipelines, we want you to be able to deploy right from there to Azure. If you feel loosey-goosey and you like deploying from your build pipeline, or you can have your build artifact, which should be the output of your build, actually, actually get deployed via pipelines releases. Or some other mechanism, Octopus Deploy, whatever your deployment mechanism of choice is, it could get picked up by Ansible. But there's a number of different tools that people use and we don't want you to have to change your toolchain just to be successful in Azure.

**Trevor:** [00:18:20] Absolutely. I mean, that's— you can't help but make that guess. Yeah.

**Steve:** It's part of being a services company. Right. If we can't make it easy and effective for you to consume our services, we're going to have a bad day.

**Trevor:** Absolutely. If it's not— if you can't consume the service, then you're never going to use it.

**Steve:** Right.

**Trevor:** Right. And if you feel like you have to change your world to consume it, you're also never going to use it because who has time to change their world?

**Steve:** Yep. Now, and it comes down to like, so we get a lot of questions like, hey, I'm just starting out and want to do this. All right. So what are you using for build and deploy? Well, we're not doing anything yet. Um, you know, we're still building on our desktop and shipping stuff out. All right, great. Let's talk about Azure DevOps because there is a great experience there. But if you're already building stuff in Jenkins or you've dipped your toe into and you love that opinionated flow in Spinnaker, right, there's no reason to change. Those are, those are good tools and they're being effective for you.

**Trevor:** [00:19:22] So absolutely.

**Steve:** I mean, let's keep using them.

**Trevor:** I see the same observations when I go out into the field as well, where there's plenty of folks who they want to know, well, what repository should I use? What CI/CD tool should I use? As a Microsofty person as well, I'll just say, oh, well, I'm usually deployed when there's already Azure involved in some way. But the question always becomes like, oh, well, if you don't have something, you're already paying for Azure, so you've got Azure DevOps, let's just start there.

**Steve:** Right. And if you try Azure DevOps, you like it, great. Hey, awesome. That makes our services more valuable. That makes me happy. Right?

**Trevor:** You know, whatever the company demands, Steve.

**Steve:** Hey, I like to be paid so that I can put food in front of my family.

**Trevor:** Just in front of them though, they can't eat it.

**Steve:** [00:20:22] That requires another level of compensation.

**Trevor:** Right?

**Steve:** No, they can eat some of it. Some of it's for me too. But no, I like to be able to pay the bills. And I'm fortunate at Azure that we have nice roles available in our engineering organization all around. But we have these roles because we're providing services that are easy to consume, that people like to use. Unless we continue doing that, right, we won't keep those customers. We have to keep doing that to keep those customers. And that's what I love about the service model is we're really forced to make sure that we're doing the right things for our customers.

**Trevor:** Absolutely. The cloud is super easy to consume and super easy to shut off.

**Steve:** Yeah. That was one of the things too that I liked when I first started at Chef. It was during the transition to being primarily a service. And that thing that we had to keep earning their business every day, that kind of mantra, I like that because it means that, hey, we didn't just take a pile of money from you upfront and then go off and do what we wanted to for the next 3 years. And that used to be the enterprise software model.

**Trevor:** [00:21:46] Right. Give us all your money. We're going to go sit over there and innovate. And we'll be back in 3 years for another pile of money. Right.

**Steve:** Whether or not that what we innovated on solves your actual problems, maybe. We'll see how things line up then.

**Trevor:** We're not worried about that. We'll address that in 3 years. Yeah.

**Steve:** Just have your dump trucks of money waiting for me. Yeah.

**Trevor:** Everybody wants those dump trucks. Exactly. It's much easier to get little race cars of money like every other week.

**Steve:** I like that analogy. Little race cars of money. There's a reason that I am not in sales.

**Trevor:** Same. So what else has been exciting at Build?

**Steve:** There's a lot. There's a lot of great announcements and cool stuff happening. For me, it's really been around— I don't know if you heard the PowerShell 7 direction that was announced a little bit before Build, but PowerShell 7 is the next big thing coming out in the PowerShell CLI world. So that's the next— so that's the next— that's going to be the next drop of open source PowerShell. It's going from PowerShell Core to just being PowerShell. And the idea is that we bring it back into the box inside of Windows. That's going to be the migration forward from PowerShell 5, which is in box in Windows Server. And it's going to— it's based on .NET Core 3. So timing-wise, we're kind of dependent on on .NET Core 3, and then being able to build that, you know, to finish, uh, the development of, uh, and migration onto that platform. But, uh, with, with PowerShell coming up, uh, PowerShell 7 coming up, the level of compatibility is supposed to be, you know, uh, 70, 80, 90%, uh, to what Windows PowerShell does now. And that's before more dedicated work happens. That's just thanks to some of the .NET Core 3 stuff that's happening. And so it becomes a much more viable replacement. Yeah. Path forward off of Windows PowerShell 5.1 and gives us an opportunity to come back into Windows. But also, you know, PowerShell Core has had tremendous success on Linux platforms. Even to the point that AWS bakes it into all their Linux images.

**Trevor:** [00:24:11] Oh, I didn't know that. That's awesome.

**Steve:** So you spin up a Linux node on AWS, you get PowerShell.

**Trevor:** I think I know who did that.

**Steve:** But yeah, so last week I was at PowerShell Summit, and so there was a lot of great stuff happening in the PowerShell community. PowerShell Summit's a kind of a deep dive conference. For the PowerShell language. They've also this year started adding an on-ramp track, which is for people who are new to PowerShell. They also had scholarships for new people to the community, underrepresented groups in tech. That's fantastic. And so they had, I think it was 4 days, it was 4 days of training in PowerShell alongside of the conference that was going on. So that was pretty cool. And yeah, there's a— I can't wait to go back to the expo and just kind of go see more of what's happening. Oh, the other thing I'm most excited about, this is the thing that like I saw coming off the plane and it was like, oh, where has this been all my life? Windows Terminal.

**Trevor:** [00:25:22] Ah, that's what I was about. That was literally what I was going to ask you is where does Terminal fit in with PowerShell? I accept it. The answer is you don't know.

**Steve:** Well, you can host all your different shell environments there. So your WSL stuff, you can host command.exe if you really want to. You can—

**Trevor:** Don't do that.

**Steve:** And you can host all your PowerShells, right? Because PowerShell Core, you can do side by side. So you could wire up all your PowerShells.

**Trevor:** Yeah, you could have PowerShell 5, 6, and 7.

**Steve:** You could have 5 and multiple 6s, and then, right, because 6.26 or, yeah, 6.20, somewhere, we're somewhere there.

**Trevor:** You could, what you're saying is you could have every release of PowerShell 6 and 7, you could run in isolation.

**Steve:** You could run your daily builds.

**Trevor:** So wow, you can start testing for every version of PowerShell without a different box for every release.

**Steve:** That's right. Yeah, and build pipelines for PowerShell scripts, if you wanted to cover multiple versions of PowerShell, were complicated because of that.

**Trevor:** [00:26:31] Yep, they were.

**Steve:** When it was one version of PowerShell per management framework per box.

**Trevor:** So yeah, I think 4 years ago now, I think we spent a good 2-hour call together trying to work out how we were going to do that. For one of our mutual customers.

**Steve:** Yeah, but, um, yeah, so side-by-side PowerShell stuff, awesome. PowerShell 7, awesome. Windows Terminal looks sweet. I can't wait to get my hands on it. So, uh, I'm really excited too. Yeah, I think they're saying like June, so June is not that far away.

**Trevor:** And by the time this podcast comes out, it's even closer.

**Steve:** It's too far. I want it now.

**Trevor:** You know what? There will be a point in time where this podcast is out and it's out.

**Steve:** That is true, but I exist at this point in time and I want it now.

**Trevor:** But you're going to time travel through this podcast.

**Steve:** I am, but I'm also still here. Yeah, so yeah.

**Trevor:** [00:27:32] There's a lot of time travel going around these days.

**Steve:** Stop with the science jokes. I'm hurting my brain trying to figure out Was that a joke or was that just really profound?

**Trevor:** Nothing I say has ever been profound.

**Steve:** Yeah, that's what I tend to default to, but yeah. So yeah, so watch the stuff coming out of Build. There's a lot of good stuff, but Terminal for me is blanking everything else out.

**Trevor:** Yeah, that was probably the coolest announcement I saw as well.

**Steve:** Now that also tells you how sad my life is. That the most exciting thing that is happening in my life right now is the fact that there's a new terminal app coming out.

**Trevor:** I won't tell your family. They're too busy looking at their food.

**Steve:** They're too busy with things that actually matter in life.

**Trevor:** Hey, it does matter in your life given what you do, right?

**Steve:** It definitely does, but when you stop and think, like, What could be important in Steve's life?

**Trevor:** [00:28:40] I would absolutely assume that that was pertinent to your life.

**Steve:** Oh boy, then I am much more shallow than I expected.

**Trevor:** I mean, I didn't say it was going to permanently be the most exciting thing in your life, but there's a point in time there.

**Steve:** There is a non-zero chance that that's true though.

**Trevor:** Yeah, all right. I was giving you more credit, Steve.

**Steve:** I try to spend more time with my family than I do with my Command line, but it's close.

**Trevor:** Oh, I need to spend more time with my command line. You do.

**Steve:** It misses you. Now, now wait until we wire up some of this like AI and ML stuff into, into our, into our terminals and like, hey, it's been a while since you've typed on me, right? Like Alexa and Siri getting jealous, you know, right?

**Trevor:** That was one of the other cool things I saw personally was they did a Cortana natural language processing demo and it was much— it seemed like it was even faster than like Google Assistant.

**Steve:** [00:29:48] Well, you know, the Cortana stuff, it's all a framework that you can use to build your own assistants off of and there are automakers that build their assistants off of the foundational stuff that we provide. There's no mention of Cortana in it anywhere, but it's all being driven by those services, right? So while it may, you know, it may not be the, you know, number 1 or number 2 voice assistant, it's got some awesome capabilities.

**Trevor:** Absolutely. It's cool how there was the demo at Ignite where they showed Cortana running through, I think, Alexa.

**Steve:** Yeah.

**Trevor:** Which is interesting.

**Steve:** Until they start talking without you, and then it's a challenge, right? Like, you should really put a shopping trip on his calendar. You know, his wife's birthday's coming up.

**Trevor:** Well, I'm waiting.

**Steve:** Get her something nice.

**Trevor:** Jen recently changed her Google Assistant to the Australian voice. Ah. So I'm waiting for my default voice and her Australian voice to start conversing. That'll, that'll be a problem. Anything else you'd like to talk about? Anything? Any kind of cool trends you've been seeing as you've been touring the world with Ignite?

**Steve:** [00:31:11] Yeah, a lot of interest in site reliability engineering. You know, people love the DevOps.

**Trevor:** That's site reliability interest in site reliability. I heard insight, insight reliability.

**Steve:** Oh, yes. What is insight reliability?

**Trevor:** Application insight.

**Steve:** Sites is highly reliable.

**Trevor:** No.

**Steve:** So in Site Reliability Engineering, in the conversations that we've been having, we've been highlighting some of the— so the team I focus on, you know, I mentioned covers the DevOps, Site Reliability Engineering, cloud native. Well, at the end of the day, there's a handful of core behaviors and practices that sort of back end all of these things. And so our session content primarily focuses around those patterns and practices. So whether you call what you're doing DevOps or you call it Site Reliability Engineering or you call it cloud native, right, we want to make sure that the workflows that you want to do and be successful with work well on Azure. Well, in those conversations, people are really kind of identifying with, especially from the operations side of things, with the definitions around Site Reliability Engineering because it is more prescriptive. Than DevOps, which some people think or tend to feel is, well, I'm doing DevOps if I have a CI/CD pipeline, or it's just so fuzzy in concept that there's not necessarily a hard pattern in practice to go pick up and do. And so, a lot of operations folks are like, when they're looking at what's next, tend to gravitate towards that. And so, we're having a lot of conversations around, so, if we do Site Reliability Engineering, does it have to look like what's in the book?

**Trevor:** [00:32:57] Right?

**Steve:** So there's the Site Reliability Engineering book from a number of the folks at Google. And guess what? There are a number of different ways people are implementing these practices. We at Microsoft are figuring out what our Site Reliability Engineering story and practice look like. And we're building up our expertise and our teams and figuring out how that all plays together. It doesn't have to be exact. But there's a lot of great ideas, there's a lot of great concepts in there that we can pull into our operational practice. The concepts around service level indicators and service level objectives and error budgets and things give great terminology and great definition to a number of the different challenges that we face when we're negotiating what reliability should look like for a service. Right? And when we talk about monitoring, right, we talk about monitoring, we have traditionally done a lot of black box monitoring. I get an application to run in my environment, and then I watch the behavior of the machine around it. I watch CPU utilization and page file queues and memory pressure and all that stuff, and I use that to infer how the application is behaving. Well, That's fine if I'm running in a known environment. I start going to cloud, all that starts changing. I don't know the hardware underneath. I don't know if I've got a noisy neighbor. What happens when we take it out of the VM and we stick it in a PaaS service or we break it up and go into serverless? Now I need to understand what are the performance metrics for the application? And what are the business drivers for those performance metrics? How do those things play in? And then where am I taking those measures from so that I can understand the assumptions being made and the things that we're not considering in that metric? And so, that whole discussion has been really interesting as well.

**Trevor:** [00:35:01] That's really awesome. Yeah, I think a lot of folks, even like when we first started talking about DevOps, that was kind of the same question was, well, does DevOps always have this uniform shape? Yep. The answer, of course, as with anything, is no, but there's a core set of structures that define what the shape looks like, and you got to figure out which one's best aligned to you. Right.

**Steve:** Exactly.

**Trevor:** Awesome. Well, thank you so much for joining today, Steve. Head over to arresteddevops.com/build2019murawski for this episode's show notes. And the site also has our newsletter, all the Arrested DevOps stuff you could ever want. Visit arresteddevops.com/itunes and leave us a review in the iTunes Store if you want to help other people find the podcast. Steve, thanks again for joining today. It's been great to talk again.

**Steve:** Oh, my pleasure.

**Trevor:** I'm Trevor, @TrevorGHess. This is Arrested DevOps, and remember, there's always DevOps in the banana stand.
