**Matty:** [00:00:07] Welcome to Arrested DevOps, episode 34, What's New at Chef? I'm your co-host, Matt Stratton, @MattStratton on Twitter.

**Trevor:** I'm your co-host, Trevor Hess, @TrevorGHess on Twitter.

**Bridget:** And I'm your co-host, Bridget Kromhout, @bridgetkromhout on Twitter.

**Matty:** Arrested DevOps is brought to you by 10th Magnitude, a cloud services company that figures if you're listening to this show, You're pretty cool. You can find out about joining their cloud services team at arresteddevops.com/10thmagnitude. From initial alarm to final retrospective, our mission at VictorOps is to make on-call suck less. Easily integrate with your existing monitor systems and manage on-call schedules with rules for intelligent routing. In the live infrastructure timeline, get real-time context, see annotated alarms with resolution documentation, and when you're in the firefight, collaborative Troubleshoot, use your native chat or bidirectional integrations with your favorite chat clients. Try VictorOps now. Check us out at arresteddevops.com/victorops.

**Bridget:** This podcast is brought to you by Datadog, a monitoring service for scaling cloud infrastructures that bridges together data from servers, configuration management tools, databases, and apps. Datadog provides dev and ops teams with insights from their cloud environments that keep applications running smoothly. Datadog is available for a 14-day free trial at arresteddevops.com/datadog34. We're recording this today from ChefConf 2015, where there have been all kinds of awesome new products/features announced. We have a great panel joining us to talk about what's new with Chef. First, we have Seth Falcon. Seth, what do you do at Chef?

**Seth:** [00:01:44] Hi, Bridget. I'm the Engineering General Manager for the recently announced Chef delivery product.

**Bridget:** Ooh, that's exciting.

**Matty:** We also have longtime friend of the show and occasional co-host Julian Dunn. So Julian, real quick, what's your role at Chef?

**Julian:** Yeah, thanks, Matt. So I'm the product manager for the analytics product line at Chef.

**Trevor:** And we also have Adam Edwards joining us tonight. Adam, I learned a lot about you last night at dinner. What, can you tell everybody a little bit about Chef?

**Matty:** For the people that weren't at dinner with you and Trevor, apparently. Yeah.

**Adam:** Yeah, for those who weren't at the dinner, yeah, I'm also another general manager, engineering general manager at Chef, and I kind of, I own the Chef part of Chef. So the Chef server, the Chef DK, the Chef client, things like that. So we lead the teams that deliver those goodies to you and other, lots of other great things around Chef.

**Matty:** The Chef that's in your Chef that's in your Chef.

**Adam:** Yeah, it's getting that way.

**Trevor:** Gotcha.

**Matty:** So let's start with kind of the, I think the real big announcement or one of the big ones that everyone was real excited about. Which would be Chef Delivery. So Seth, you mentioned that, you know, you're kind of running that product group, running the stuff that's happening over there. So what is Chef Delivery and why is it interesting?

**Seth:** [00:02:55] Sure, Matt. Chef Delivery is a solution for continuously delivering infrastructure and applications, and it's built on top of Chef.

**Matty:** Awesome. And why do you think this is potentially a game changer both for Chef the company and the industry itself?

**Trevor:** Absolutely.

**Seth:** We're really excited about Chef Delivery. It encodes some patterns that successful software organizations use to deliver software at high velocity, collaboratively, and safely. And we've been able to distill some of those patterns into a workflow that we think will be easier for folks to adopt and, and learn.

**Bridget:** I was actually really impressed. Chris Webber handed me his phone and said, would you like to update the front page of chef.io? And I said, um, okay. And he had Delivery as an app on his phone, and it was a one-button, you know, push this out to production. This seems like an amazingly simple workflow. Can you go into more detail about how you decided to make it that sort of way? And what you expect that will change in terms of delivery of infrastructure and code.

**Seth:** [00:04:07] Super fun that you got to ship our website by pushing a button on Chris's phone.

**Bridget:** It was very exciting.

**Seth:** Chris did a lot of great work for us doing the automation work and kind of setting up the build jobs and putting that into delivery for us. And so I was able to then demo launching the landing page for delivery as part of ChefConf. Let's see. I should probably clarify, we actually don't yet have a mobile app. And what you saw was Delivery's web interface, which worked well enough on iOS to allow you to deliver it.

**Bridget:** It was quite responsive, seamless. I really couldn't tell the difference.

**Seth:** Nice. That's awesome to hear. The workflow, again, is one that we've seen work by working with customers to build these kinds of pipelines over and over again and find those successful patterns. The overall workflow begins on a developer's workstation where they make a change. They do some local testing and then submit it to the system where some automated verification tests run. And the job of those verification tests is to determine whether it's worth the time of a human to do some code review on that change. Someone can then do some code review and approve the change, and I'll just keep rolling with the rest of the workflow, if you don't mind, just to describe it. So from there—

**Bridget:** [00:05:30] I would love to hear about it.

**Seth:** Cool. So imagine we've submitted a change. We've run some verification tests. If they passed, we did some code review. We clicked an approve button because we thought that change was worth carrying forward. At that point, delivery will build an asset for us that we could release. And sort of the workflow for building that asset is to do a merge onto the target branch, usually master, rerun those same verification tests, which usually consists of unit tests, lint testing, and syntax checks, build that asset and publish it into a repository where it can be fetched later. Then delivery will provision an acceptance environment, should you need one, and deploy that asset into that acceptance environment and run some tests to make sure that the deploy was successful. And if it was, it waits there for further instruction. And so what you got to do, Bridget, is Chris had gone through the step, it had passed acceptance, Chris had probably looked at it. I'm gonna think that he did.

**Bridget:** [00:06:32] I would guess.

**Seth:** Yeah, and saw that the site was good, and then the last step is clicking the Deliver button. And that sets the system in motion to get the code all the way out. And we do that in 3 stages. It first goes into a union stage, and that's where if you had a number of projects that had some interactions, you would be testing them together at their latest version and making sure they are good. The steps there within union are similar to acceptance. We do some provisioning if needed. We deploy the asset. We do verification testing to make sure the deploy is good, as well as any other testing that you want to do to make sure the system is healthy. Then we roll— if that succeeds, delivery rolls automatically for the rest of the stages. It rolls into a rehearsal environment and finally into a delivered environment, where for a project like the website, it's live.

**Bridget:** I actually find that fascinating because when you mention union, I immediately think, okay, what if several people are committing their small batch changes at the same time, but maybe not exactly at the same time? If a few things make it to union, but maybe you're still waiting on one, it sounds like you don't go past union then before— or can you? You can stop it there, right? If you're going to still wait for the next change before you actually want to push everything live?

**Seth:** [00:07:47] Right. So you have a couple of options. And the purpose of that, what we call it, is the shared delivery pipeline. And that's the part that consists of union, rehearsal, and delivered. And part of what that gives you is some coordination of changes across projects or across teams where the system is able to enforce that one change is flowing at a time. So only one change will will actually be actively deploying into Union at a time. But what you said is possible. Once a change has finished deploying, it either succeeded and is happy, or it failed and is unhappy. The system will then process the next change. And so if you submit multiple across different projects, the system will take care of that and order them for you.

**Matty:** Because like you're saying, it doesn't actually leave— union and rehearsal, it doesn't actually leave that till you push that deploy button at the end. So it's continually kind of queuing up those bits. So you're like, okay, it passed union, passed rehearsal, but it doesn't necessarily go to the next.

**Seth:** [00:08:47] Let me restate the gates just because it's a little bit hard to do.

**Matty:** Also, by the way, if you go to chef.io, there's pictures. Yeah, pictures totally help. And I have a really hard time doing any of this without a whiteboard.

**Seth:** So you're doing a great job of explaining So there's 2 gates in the system. The first gate is the approval gate, and that happens before the change is merged to the target branch.

**Julian:** Before the—

**Seth:** and right. And then once you hit approval, the code goes into an acceptance environment. And so that's a place where you can run integration tests, and it's also where you can do user acceptance testing if you want to. When you're clicking the deliver button, what you're doing is you're shipping a change from its acceptance environment potentially all the way out. So there's not another gate in the system. And that's partly to encourage the high-velocity change that we want to do, but to do it in a safe way. Well, just to talk about where changes can queue, because you were asking about that. So one place they can queue is in acceptance. So you could decide that you don't want to ship a change that made it into acceptance, and you could submit another change on that same pipeline. And you would then have 2 changes in the acceptance environment, and when you click deliver, they would both go out.

**Bridget:** [00:10:03] Even if one of them is a revert of the first one?

**Seth:** Well, they would both go out in the sense that a single asset is going to go out, and that asset is going to contain the logical Git history of the changes. So you're right, if the second change that you applied was a revert of the first, then That's what goes out.

**Bridget:** A no-op.

**Seth:** Right.

**Matty:** So, one of the things that I really like about thinking about this workflow, and especially when we think about it with shipping cookbooks, is there's this idea, this sometimes trepidation of the, oh my goodness, it got shipped. But again, like you said, that release to production, quote unquote, whatever the end of that is, that doesn't necessarily mean that, first of all, anybody's using it, right? It could mean that that just means it's deployed into an artifact repository. Repository or whatever is the end state. Or if you're talking about shipping a cookbook, it could be like I'm actually publishing that artifact to the Chef server with that version, but if I'm pinning my cookbooks appropriately, I'm being opinionated, if I'm not in YOLO mode on my Chef server, it doesn't matter that I shipped a new version of the cookbook because none of my systems are necessarily using it unless it is my desire. I think it's also getting into this idea, and it encourages— I think this workflow encourages the patterns around things like that or feature flags or things like that, which is when we think about continuous delivery, getting the bits out there is different than actually turning on the thing that you were doing.

**Seth:** [00:11:33] That's a great observation. I think absolutely as you do adopt continuous delivery practices on your team, one of the things that you'll find is that it'll start to affect your engineering practices. And feature flags is a great example of that, where, for the reason that you stated, to decouple the deployment of code from enabling a new feature, you can use feature flags. And when you want to move quickly and be continuously integrating, it's really important to have the option of that kind of feature flag functionality so that you're not gated in getting code out on these long-lived feature branches.

**Trevor:** This is super interesting to me. Actually, I think it was the second time Matt and I met. I was giving a talk on my existing company's continuous integration flow, and all these stages we kind of had to manually put together, and it was something that was just a bear to maintain. So I am super excited to start playing with this tool.

**Matty:** And I think that's the The other thing, I want to ask one more question about that, but then I know we're kind of running, like Seth and Adam have to run off to some other engagements. We want to give Adam a chance to at least say like 5 words. But the one thing I just want to think about, and I think we're going to probably keep talking about delivery after you guys leave, so hopefully we won't say anything that's terribly wrong. But it's one of those things where I guess if it's like if I already have a thing, I guess the advantage to me of something like delivery over, hey, well, I could build all this in Jenkins or Go or some other thing. It's the idea of being kind of we're presenting a solution, right? So, because you're— the differentiator of your business out there is to get your code out. It's not to be super awesome at building awesome continuous delivery workflows. That is the differentiator of our business, is to build super awesome workflows and give you a tool to do that, right? So, I really like that. I think it's It's just like a lot of the stuff, just like Chef itself, and then saying get out of the business of having to worry about doing that and focus on actually shipping your product, the thing that makes your company special.

**Seth:** [00:13:38] Yeah, I love that. I think a lot of what we're providing here is an accelerant to teams to give them that system that will allow them to move quickly and learn how to move quickly in that way more quickly. That was a lot of quicks.

**Matty:** Quick, quick, quick, quick, quick, quick, quick. Velocity.

**Seth:** Right.

**Trevor:** So for the listeners who weren't here and don't know, how do you start using Chef Delivery?

**Seth:** Right now, we have an early access program for Chef Delivery, and so the team at Chef, we're really committed to working closely with a set of early access customers such that we can both ensure that we're making them successful with the product and that we can be getting feedback on the product to work on it and iterate on it quickly. And so there's a landing page to sign up for learning more about that program. So folks should check out the Chef.io website for more information about that. And we're doing— we're working as hard as we can to onboard customers as quickly as we can. But it's also really important to us that we work closely with them so that we can learn and make the product as good as it can be, because it's still really early days for the product.

**Matty:** [00:14:48] Adam, what are some of the new things that are being cooked up around Chef to Chef to Chef.

**Adam:** Yeah. Well, what I'll say is there's a lot of— there's been a lot of new stuff just coming over the last few weeks. So the big things just kind of coming the last 2 weeks, let's say, one big thing is policy file. And so policy file is really a way to solve problems with workflow. A lot of times you define a set of cookbooks that go with your application and, you know, you try it out in one environment. Then you have to manage that set of cookbooks in another environment in a separate way and try to get maybe the same cookbooks that you had in the original environment. And then you go to the final environment and you have another set of cookbooks that you're trying to manage there. So really policy file gives you a way to specify in a specific file, here's the set of cookbooks that I want, whether they come from Git, from a Chef server, wherever.

**Matty:** Is it a bad analogy to make it analogous to like gemfile.lock?

**Adam:** It's similar, kind of the way that Bundler and Berkshelf work, but it's really more of an application-oriented way of doing it. Whereas a Berksfile is associated with a specific cookbook, this is a way of defining your application. You don't have to have— because there's a lot of confusion when you define an app. Like, well, should I have a cookbook in this repo and then have different repos for all my cookbooks, or should I have one repo for all the cookbooks, or then where does my application go? Can I mix my app? My Burks file with my application. So this really lets you have an application-focused way of defining the cookbooks that go with the application, and then you move them through the different environments. And, you know, a great example where you could use it is something like delivery, where you're moving from different stages of a pipeline. The policy file is something that, you know, delivery could use, for example, to make sure you have that same set of cookbooks being tested with your app.

**Trevor:** [00:16:38] Gotcha.

**Matty:** Something I think people have— and a lot of times I see, you know, it's kind of like people kind of try to invent something. So like, you know, maybe The ideas of like people have tried to do this with application code, you know, but again, but there's like you said, there's all these dependency management you're trying to do and it's easy for something else to override something else. And this is just making, again, back to our point, right? It's taking something which you could build this however you want, but we're providing a solution and maybe the solution doesn't fit for you. Awesome. Go build the way that works right for you.

**Adam:** And we try to actually build it kind of the way that Seth was talking about where You have feature flags. We turned it on originally in kind of a sort of limited implementation before, and you could opt in. And what we've been doing over the last few weeks is we added explicit support in the Chef server for the policy file. So we had kind of a backwards compatibility mode for it that really didn't give you everything. And now we have an explicit API in the Chef server. So if you have Chef server 12.0.7, you can try that out. The latest Chef client will then use that API. So that's one big thing. We talked about it a little bit at the keynote. I'd say another big thing has been Test Kitchen on Windows. And so that's not— Test Kitchen, it's not in Chef, but it really is part of the Chef DK. And so we sort of consider it— if you're using Chef, you're going to be using Test Kitchen. And so before now, there wasn't really a good way to try to use Test Kitchen to test your cookbooks on Windows or your application. And so, you know, you could do it fine on Linux. This was happening to me about a few weeks ago. I have a cookbook that does, just sets up my workstations. And so I have Linux workstations and Windows workstations. And so, you know, I could test the Linux part fine, right? I was using Test Kitchen, but, you know, for Windows, I actually had to go really converge a node, that cycle time was pretty bad. So the community has actually been working on this and we've been working with the community. And finally we shipped that last week. And so if you're, especially if you're a Windows user and you want to go, you can finally have a real version of Test Kitchen where you can converge your cookbooks.

**Matty:** [00:18:49] And that actually just the update to ChefDK that I think came out today shipped that update.

**Adam:** Yeah. So if you have, it was, it might've even been in last week's update, but there's a release of ChefDK ChefDK 0.5 to RC3, and that has the very latest Test Kitchen bits with the Windows guest support.

**Matty:** So Adam, I know you guys need to run.

**Adam:** I do need to run, but I will say 2 more things, a couple more things I did want to add in there. I can't resist. So another thing that's sort of related to Windows is PowerShell DSC. So we've been talking about DSC for a while. DSC is Microsoft's configuration management solution, exposes a lot of stuff in Windows. That you'd like to manage, and it does it in a way that's very Chef-like. So we're actually using it from Chef. We shipped some initial integration with it last year, and so as of last week, we shipped sort of direct integration where you can use the resources that PowerShell DSC exposes directly within Chef, in the Chef DSL. So that actually gives you essentially 100 or more resources. Microsoft adds more and more every day. So if you've been saying, hey, I want more resources on Windows with Chef, well, you get them just by the fact that now we integrate with DSC. And Julian actually was involved in some of the early prototypes of that, so we appreciate your help, Julian, on that. You even presented, right?

**Julian:** [00:20:12] I did, actually, 2 years in a row. We had a really, really rough prototype the first year, and I pushed the wrong button on stage at Microsoft TechEd. Then I got it right the second year with a much more— much cleaner prototype. And I didn't push any buttons wrong.

**Adam:** Yeah, we'll leave the button pushing to you because you're good at that.

**Matty:** Bridget is our button pusher.

**Julian:** Bridget is very good at the button pushing.

**Adam:** Yeah, and then another thing, we talked about Chef provisioning. So we're releasing a newer version of Chef provisioning that does more with containers and with Azure. So for those of you who've been using what used to be called Chef Metal, Chef provisioning, there's more goodness in there. And finally, another thing I want to say, sort of back to you, you said something about small batch size and things like that. Right? What we started to do, we've actually enabled the ability to release Chef Server nightlies on APT and yum repos. So the idea is that, you know, what we're thinking we'll have is a nightly channel that has like basically daily builds of Chef and then a stable channel that will have kind of what your traditional releases are that have been sort of baked for a longer time. Nightlies will be available publicly and you can try out new features. Whenever you're kind of interested in what the new stuff is. And if there's something that you need to kind of unblock you, you can get it before it's in the stable release. And the other thing that that does is it kind of forces us into that mode that Seth was talking about where you have to use feature flags and things, get the code shipped even if the feature is not there. And you can sort of get all the benefits of that lean, small batch size execution. So we'll have more announcements about that, but look for those for being able to do an apt-get install of Chef Server. And yeah, so.

**Bridget:** [00:21:58] Thanks, Adam and Seth. That was fantastic.

**Matty:** So that was great. I'm very excited about delivery, and those of us within Chef that have known it's coming, it was kind of a really nice relief to be like, oh, now everybody else can know about this thing that we've been so excited about and had to keep our lips shut about. Lips pursed about. But Julian, let's talk a little bit about Chef Analytics and some new stuff going on with that, and maybe for people who aren't familiar with it, why it's awesome.

**Julian:** Yeah, definitely. So for those who aren't familiar with Chef Analytics, basically the idea is it gives you a way to visualize, query, and report on the event stream that's coming from all of your Chef data. Well, Chef operations generally, right? So that's not only when your nodes are converging and then making changes, but also when folks and maybe CI systems and CD systems like Delivery, when they're making changes to your Chef cookbooks and roles and things like that, you basically have this giant event stream of things that are happening in your infrastructure. So analytics basically lets you not only visualize that data, but also be able to trap events in that event stream and then handle them in various different ways.

**Bridget:** [00:23:04] And doesn't analytics also provide a little bit more visibility and surfacing of information for people with auditing requirements?

**Julian:** That's right. So combined with— and that's one of the other things that we didn't exactly launch it at ChefConf, but it's a few weeks old. In a version of Chef Client that's not an RC, not a beta, is this notion of Chef Client audit mode, which is tangentially related to analytics in the sense that traditionally in a Chef Client run, you have these test and repair type of operations that's actually making changes to the system. But how do you know that the system is actually behaving according to what you actually consider to be correct, right? Because the Chef run could have successfully succeeded, but it doesn't mean that your application is actually working. It doesn't mean that you didn't accidentally take down Apache or something like that, right? So the audit mode basically allows you to write a set of controls, and those controls are actually just server spec. So you can kind of think of it, you know, if you're at the nuts and bolts level, it's basically ingesting server spec as a first-class DSL element within Chef. But conceptually, it's more about can you write acceptance conditions about individual machines and run those at the end of a Chef client run.

**Matty:** [00:24:10] And I think another thing where that, like Julian, like you said, so it's very useful to see did that work. And it's, uh, like Charles Johnson gave a good turn of phrase about— we're more talking about like spec testing or about, you know, kind of that signal-out testing, which is what this is doing. Which is, as he said, it's the— just because I said what I said and you understood what I said and you did what I said didn't mean that what I meant— what I said was what I meant to say, so to speak, right? So just because you— like, I gave Chef well-formed code and Chef did exactly what I said it to do did not actually mean that that's what I wanted. So you have that, but then when we think about people that are subject to compliance or things like that to be able to understand. And one thing that I think is kind of cool is there's a pattern I've used in the past where letting security make sure, because what we don't want to do is we don't want to find out that our systems fail compliance 6 months after we deploy a change, right? Because we should know that the earlier to the introduction of the de facto whatever, the easier it is to fix it. If I'm writing Chef code and I'm bashing away and before I even send something up to delivery, it's going to let me know it's violating audit rule 62/D. I'm going to catch it there and know don't keep doing stuff versus later down the road either it's in production and there's an audit later or even if I'm not doing it as a test, which is what I'm going to get to that I think is cool.

**Bridget:** [00:25:33] I'm actually kind of concerned if you're writing your chef code and you're bashing away, exactly how much bash is in your chef code?

**Matty:** I'm pounding away. There was a visual of the typey typey. So what I think is neat is, so in the past, a pattern that I've helped people do is have the audit folks or the security folks or anybody who cares about those things write a test suite and you say we make sure this test suite gets applied. But what's cool with being able to is you can take those same audit rules that you write in analytics, you know, in analytics language that you say these are the rules we're running against running nodes to know if they're compliant, but I can apply them through my pipeline to test them there so I can check them. But what's nice is it's only one thing to write. I don't go to my folks and say, okay, so you want to check for this, I need you to write 2 things. So I think that's a really powerful thing. Because again, like when we're developing something, there's 2 ways we can do security or we can do these policies. A, we can take this giant tome of all of the SOX or PCI compliance rules that you shall never write a cookbook to violate, and none of us are going to look at it, and then we're going to find out later we violated it versus catching it in some type of test suite or an audit run that happens pre-release of it, and then we know why it failed, and then we can complain about why it's a thing and whatever, but at least we know why. And it can stop it too.

**Julian:** [00:26:53] Definitely. You know, you can kind of think of security as just another aspect of quality. And we kind of understand that you can't get quality really if you try to bolt it on to the back of a system, right? I mean, how many, how many of you have worked with applications that, you know, didn't have tests originally and the software is just poor quality? And then somebody says, oh, we'll just add tests down the road, right? And that'll make all the quality problems go away.

**Trevor:** We'll do a test cycle.

**Julian:** Yeah, exactly right.

**Matty:** During that tech sprint that we never do. Right.

**Julian:** We'll do a test sprint. But yet we sort of treat security and compliance in a sort of backwards way where we think, well, if we don't build it into the system, then down the road when we do an audit, like somehow we're going to magically get compliance or get security by doing things like penetration testing or things like that. I mean, if it's not a characteristic that's already there as you're developing it, it is very, very difficult to actually achieve those objectives, right?

**Trevor:** It's in that directory with devops.exe. It's security.exe.

**Matty:** Just apply the security.

**Bridget:** Nice. So I wanted to ask Julian also about the visualization aspect, because we've kind of looked at a lot of the auditing and compliance aspects that we can get from analytics, but you mentioned the visualization. I'm interested if you could draw, you know, paint a picture in the minds of people who maybe have used the reporting console in Hosted Chef and they think, well, sometimes there's that line. What does the visualization and analytics actually get people?

**Julian:** [00:28:14] So the visualization and analytics is now more of a— I mean, it is also an event timeline of everything that's happening in your system, including the events, by the way, that you're setting through the rule system, which I can talk a little bit about if you're interested in that. But so not only is it a visual timeline of what's going on in your system, but it gives you the ability to filter that timeline as well by event type, by event source, you know, by the most commonly used axes of the data that people would be interested in doing. And those are kind of the the product direction that we're going to be taking as well. So you can imagine that down the road, you'd be able to answer questions using this kind of interface like, all right, how many of my Windows 2008 R2 machines do not have hotfix number KB617 blah, blah, blah, blah, blah applied to them? Or if I'm rolling out, let's say, Red Hat 6 to a Red Hat 7 upgrade, how is that actually going for me? On a weekly basis or a monthly basis. So you could, you know, there's lots of different directions in which we could take this product, right? So it's not only for operational troubleshooting and insights from that perspective, but you could also think of it as reporting up metrics and characteristics about your infrastructure to business owners. You know, like one of the things we often hear from customers is, how do I measure how successful I am with Chef, right? How do I measure how successful I am at accelerating my business now that I've implemented this tool? Well, if you're able to use a system like analytics to be able to report on that, then that would kind of illustrate to the business the ROI in investing in this kind of technology.

**Matty:** [00:29:42] That's really important, and I think it goes back to, you know, I think like you said, you know, customers say, how can I know when I'm successful? I think that's just a generally important question to ask. I wish more asked that, but actually the problem is a lot of times we tend to ask that question question later also. We say, have we been successful? And the problem is you have to ask it at the beginning because you need to know what to capture. The good thing is, at least with analytics, I like to say, you know, nothing really escapes the baleful eye of analytics. No matter what you do, it's being captured. So not to say this would enforce the practice of being able to not decide at the beginning, but you have that ability. Also, maybe you didn't know how to measure it right away. You may say, these are the indicators I are going to be the way I determine success, and as you go, you say, oh, well, now I understand that really I want to know because of that. The good news is you have all that data, you've captured it, and can then maybe manipulate it and figure out how to see that success result.

**Julian:** Right, and so that's kind of one of the reasons why, and that's one of the things that we did announce in the analytics product suite at ChefConf, which was about the integration with Splunk, right? And so what's the value add of Splunk? Well, first of all, there's a lot of customers, especially enterprise customers, that are out there using Splunk already. The other aspect is that Splunk makes it very, very easy for you to draw visualizations, right? To be able to— and we're interested in seeing, we, you know, we don't know how customers are going to use this data yet. Like, what kinds of graphs are people going to want to draw? Not only that, but what kinds of data are you going to want to mix the Chef data with to be able to draw inferences about, well, even operational things like, oops, it looks like the, you know, the main website started responding, you know, twice as slowly. Could I write some rules or whatever? Could I draw some graphs or write some, draw some tables or whatever it is to correlate those 2 events together, right? And Splunk is a great platform for folks to be able to do that.

**Matty:** [00:31:32] So what I'd like to do, I'd like to talk about a little bit before, we've talked about some product stuff. So we are here from ChefCon. We didn't want to do kind of a ChefCon wrap-up kind of thing, but I want to talk a little bit before we finish up just about the conference itself and our particular experiences, because we've been here in different manners. So I know for myself, this is my second ChefConf. This is my first ChefConf as a Chef employee. When I was here last year, I was here just as a community member and as someone working with Chef. And I will say, in some ways it's a lot more fun to be here as a community member because there's less work. You know, when I was here, I had the thing with, you know, I had customers I wanted to and things like that. And I feel like last year as someone that was just attending, but I still had— I think this event was really great. I mean, I'm going to be spending a lot of time on YouTube because unfortunately I missed a lot of talks because—

**Julian:** same—

**Matty:** meeting with customers and things like that and sitting there and, you know, oh, which one do I do? And I still have to give one more little dig at Nathan for scheduling Bridget and Trevor at the exact same time. So it's like I had to pick.

**Trevor:** [00:32:44] Adam made a lot of effort to try and change that.

**Matty:** He did try to change that, but—

**Bridget:** We were just difficult about wanting to actually go to other talks and also come to this podcast, you know, schedule issues.

**Matty:** But I want to say, like, kind of my thoughts just in general is that I'm blown away by how many people were here. It was absolutely— the keynotes were amazing. Adam's keynote was, I mean, no shock. I mean, he drops the mic every time, and I was— but it just sort of, the way it gets you thinking. And just a couple things I thought were funny is some things where people were tweeting, they said, I think I see more tweets about ChefConf than I do during an Apple launch event.

**Bridget:** Wasn't #ChefConf trending on Twitter at one point?

**Matty:** Yeah, ChefConf was trending at one point somehow. And I think there have been really great sessions and really great hallway track for me. Much more so than last year. Nothing about the conference, but for me, I feel like I've just had some just really fascinating conversations. But I want to talk to— so both Bridget and Trevor, this is your first— for both of you, it's your first ChefCon. You both were speakers, as we've discussed ad nauseam. But just kind of— Bridget, I just want to check, because I've done the research, and the actual number is you have actually been to a Bajility done. Of conferences. So how does— what, what do you feel about ChefConf versus maybe some other shows you've been to? How's it different? What's, what's special?

**Bridget:** [00:34:09] Sure, absolutely, Matt. Um, I have been to a number of conferences, and I would say one thing that stood out for me at ChefConf is there's a very unified community feeling. At a lot of conferences that are wonderful conferences, there are kind of very specific tracks, or there are very specific groups of people who end up mixing more with one another than with others. And at ChefConf, it definitely seemed like there was a very broad community who were all interacting with one another. I mean, I work for a small streaming video company, Drama Fever. We were talking to Disney and Netflix about their video streaming, both in the context of all of our talks and also casually. And that is the sort of company that it's sometimes hard to keep if you're not necessarily playing in those leagues yet. But it was really great to have such an accessible community of people all sharing ideas. That was fantastic.

**Matty:** Absolutely.

**Julian:** And what was—

**Matty:** [00:35:09] what are your impressions, Trevor?

**Trevor:** My impressions? Um, which character are you looking for?

**Matty:** Yeah, set you up for that one right there.

**Trevor:** I mean, cuz, well, see, I thought you were going to ask me about my new rap career.

**Matty:** Yeah, okay, so I have to say Trevor is super proud of the fact that he was more recognized here as the Chef Prince of Azure than as, you know, a host of Arrested DevOps. So you have a new reputation. A new claim to fame, alter ego.

**Bridget:** Not to mention your incredibly great skills at chef karaoke.

**Trevor:** Yeah, thank you.

**Matty:** I do like to rock the mic. As we know from the DevOps Jobs episode, you know, Trevor would have been on Broadway if he wasn't diabetic. So, but yeah, so what— how did it feel to you?

**Trevor:** It's been a lot of fun. Um, like you, Matt, I've, uh, I've kind of been rocking the hallway track, um, just because of all the different things I've had to run back and forth to. Um, meeting up with clients like you again, um, talking with people about everything going on at the show and outside of the show and meeting everybody for the first time in person, um, because there's so many faces that I know from Twitter or from being on our show or all these various places that finally I got to put the face to the voice or the, or the, the, the, the, the 3-dimensional person in front of you. Yes. And, and everybody's just been fantastic. There are, there are— I've spoken with so many people here who I, I thought would never want to kind of give me the time of day necessarily, maybe outside of our show where we kind of have them pinned in a corner and they can't escape because—

**Matty:** [00:36:45] actually, right now they literally are pinned in a corner. We're sitting in a glass booth in the middle of the exhibitor hall, so this is the most trapped you've ever been on the show.

**Trevor:** Yes, absolutely.

**Bridget:** And people, people are staring and taking pictures. It's hilarious.

**Trevor:** I think my apartment when we first started the show was smaller than this, so this may not be the smallest space That I've recorded in.

**Matty:** Yeah, I do want to say that we have met quite a few listeners of the show, and that's been really special to me, you know. Um, just a lot, you know, just to hear when people enjoy what we do and have learned from it. And to me, I'm like, that's why we do this. So I'm— and I really appreciate everybody, anybody who's come up to us and talked to us and given us feedback and ideas about the show. That's awesome. So thanks, everyone who did that.

**Trevor:** Yeah, absolutely. And, um, before, before we, before we pushed away from what I was saying, um, the open spaces were fantastic. They, uh, they were very— a bunch of them were very technical, but, uh, Brandon Burton actually brought up a very sensitive topic. We were talking about men. We, we had an open space about mental health, burnout, suicide. And it was such a, such a kind of breathtaking and emotional experience to hear everybody share their personal experiences around that and how they really were kind of— how every— the majority of people in that circle felt that they may have had some mental issue at some point. And people being willing to be open like that were—

**Matty:** [00:38:16] it was incredible.

**Bridget:** And that's really profound, Trevor, because I think that's speaks to the community that we're working with here. The community of practice around Chef and just the people in this community. I actually had a co-presenter in my talk, my coworker Peter Shannon, and it was his first time speaking at a tech conference. And he said afterwards that he could not believe the reaction of how positive and welcoming and appreciative everyone he talked to was. He just was blown away by the community. Around Chef.

**Matty:** How many— so what number of ChefConf is this for you, Julian?

**Julian:** This is my 3rd ChefConf. The first year I was— I had put in a talk even before I joined Chef, and that was accepted, so I had to change my slides at the last minute with all our logos and things like this. But last year I didn't speak, and this year I didn't put in a proposal at all. I knew it was going to be completely slammed. But yeah, it's, it's really great that, you know, even as we've grown as a company, as a community, that we retain certain attributes about that community, and I think one of them is just there's a little bit of quirkiness and a little bit of uniqueness and just, just fun, right? Um, and I actually changed my background on my laptop when I was presenting to customers to the, the Unikitten logo that, that Andy Paroff, who's our graphic designer, made, and everybody wanted, wanted that. And I said, oh, and by the way, listeners, you can go to unikitten.com if you want to download your own background for this. And I hope that, you know, that's one of those attributes where, you know, IT, and especially backend IT and automation things like this has not necessarily been the most exciting or fun arena to work in, right? And I think that this is kind of like a breath of fresh air to that, to that sector. And I hope that we're able to retain those attributes, you know, even if eventually our community is— I mean, today it's 1,200 people at ChefConf and a much larger community, you know. Eventually in a few years, if we're a 12,000 attendee conference, that we're still able to have that character and that perkiness.

**Matty:** [00:40:05] Yeah, I think the— we've made a couple jokes about— I think I tweeted something the other day. Just one final kind of thought about the community aspect of it was this idea of this, the hashtag #ChefFriends, which Fletcher introduced at the Community Summit. And I think he got the idea from— I think the Ruby community does that. And the idea behind the hashtag #ChefFriends is you kind of take a little selfie with someone you know, someone you like, whatever, and you tweet it with that. And I joked and I said, you know, I mean, forget Test Kitchen, the best thing Fletcher's done for the chef community was introducing us to Chef Friends, which is not really true, but still pretty good. But it was just fun to see. And one thing I have to kind of call out, Trevor's current coworker, his co-speaker, and, you know, who's been on the show, so John Smith, who's been on our show before. So last year when I came back from ChefCon, he was teasing me me an awful lot about how excited I was about Chef. We were doing Chef work together and stuff, but he was like— because I was coming back and just like so full of like, oh my God, we could do this and this and oh my God, all this stuff. And he's like, oh no, all the ops and the blah, blah, blah. And this is also John who refers to the self-titled Ron Swanson of DevOps. So I think it was yesterday or the day before, but at some point I said to him, I said— yeah, it was yesterday. I said, I said, so how's it going? He goes, my mind is just blown. He's like, this is just remarkable. You know, and he said, I sat in open spaces about design patterns and my brain exploded. And I said, you know, and I think he's really— because some of this is an experience that's really hard to explain. It's kind of like I say, like you can't explain what the Las Vegas Strip looks like at night till you actually see it, even if you see it in movies, till you're there. And I'm not saying that this is like going to Vegas, but it's No one can describe the matrix to you, right? You have to experience ChefCon for yourself.

**Bridget:** [00:41:54] Please don't move the conference to Vegas.

**Julian:** Yeah.

**Trevor:** Yes.

**Matty:** So, but then with that, we need to wrap it up. So just a reminder, so we have a newsletter you can subscribe by going to arresteddevops.com/bananastand. It's the best way to know about our upcoming podcast episodes and some cool news with DevOps.

**Bridget:** Thanks to our sponsors. Be sure to visit them at arresteddevops.com/victorops and arresteddevops.com/datadog34. Thanks to Adam, Julian, and Seth for joining us. And loyal listeners, if you enjoy Arrested DevOps, we'd appreciate it if you'd visit us at arresteddevops.com/itunes and leave us a review in the iTunes store. No matter what you have to say, we'd love to get your feedback.

**Matty:** You can check us out on our website at arresteddevops.com. We're on Twitter @ArrestedDevOps. But we really would love to get your input, ideas, or feedback. You can send that to email to shows@arresteddevops.com. If you have ideas for future episodes, you'd like to be on an episode, you got something to say, please—

**Trevor:** and please start sending things to shows@arresteddevops.com because I'm getting really tired of the spam emails.

**Matty:** [00:42:59] And on that note, I'm Matt @MattStratton.

**Trevor:** I'm Trevor @TrevorGHess.

**Bridget:** And I'm Bridget @bridgetkromhout. We're Arrested DevOps.

**Matty:** Remember, there's always DevOps in the banana stand.
