**Trevor:** [00:00:00] Not gonna say awesome.

**Steve:** How about super awesome? How about super double awesome?

**Trevor:** It's very interesting, Steve.

**Steve:** There we go.

**Trevor:** Tell me more. It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Trevor Hess, and I have a great guest with me today. But first, a word from our sponsors. Chef is a community of professionals practicing DevOps every day. We are making, proving, learning, and shaping the future. We are known for welcoming, encouraging, and liberating others to do the same. We do not talk about change, we do change. Join the community and learn about our solutions at chef.io.

**Steve:** This episode is brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 120 common infrastructure tools such as Chef, Docker, and AWS so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog.

**Trevor:** [00:01:23] I'm joined today by Steve Murawski, who's been on the show a few times already. But Steve, why don't you introduce yourself again?

**Steve:** Sure. Thanks for having me, Trevor. I'm Steve Murawski. I am a Senior Cloud Ops Advocate at Microsoft, and I lead the team focused on DevOps and site reliability and cloud-native scenarios from an ops perspective. So a little bit before that, we worked together over at Chef. We sure did. Actually, I think every time I've been on the show, I've had a different job.

**Trevor:** I was gonna say that, but I wasn't 100% sure.

**Steve:** Yep. The first time I was on, I was over at Stack Overflow doing the site reliability thing.

**Trevor:** Yep. And then there's the lost episode that maybe one day we'll air. Oh, even though it's probably useless at this point.

**Steve:** Yeah, probably.

**Trevor:** I think it was on like image pipelining.

**Steve:** Oh yeah, probably. I've lost so many podcasts on that topic. It's really eerie. I lost one with Michael Green of the Minimally Viable that we do.

**Trevor:** Yeah, it's, uh, yeah, because it was like the last 5 minutes of it didn't record.

**Steve:** [00:02:28] Yep.

**Trevor:** And so it just like broke out into static. And so it was going to be a really good one too. So there are parts of it that still exist. And there's a couple other bits and pieces that lie around from other missing episodes. So I think maybe we cut one together at some point.

**Steve:** There could be. And there's so much embarrassing stuff that I've said out there over the years on podcasts and things that we could probably cobble together Like some show of like me, like threatening to take down the internet or something.

**Trevor:** Oh, I'm sure. Right. Yeah. Go, if I go back and listen to the first or the zero episode of Arrested DevOps, it's both, uh, it's both a terrible reflection of how dumb I was, but also a great reflection of how much I've grown and how much I've learned.

**Steve:** Oh, I can go back further. I can go back. And, uh, so I was doing the Mind the Root podcast when I first started in IT back in like 2006 timeframe. So, I was just learning the field, learning a little bit about PowerShell, and I was spewing my thoughts onto the internet, and it was bad.

**Trevor:** [00:03:30] It's fine. We all learn. I mean, I probably admitted this on the podcast before, but I think I Googled the word DevOps before I was on the— like an hour before we did our first episode.

**Steve:** Nice. All right. Well, let's actually talk about something that people probably want to listen to. Other than us reminiscing.

**Trevor:** Yeah, that's probably a fair point. So Steve, you've got a new team.

**Steve:** I do. Yeah, I'm super excited. I get to work and it is so— the super excited thing, it just like is emblazoned in my mind and I cannot like remove it with any amount of dash dash force or anything.

**Trevor:** I have the same problems. Super— and it's exactly that phrase, super excited.

**Steve:** Yeah, it's so overused and I am guilty of the overuse. But I get to work with Jason Hand, formerly of VictorOps.

**Trevor:** Jason was on our other episode we've done so far with Donovan. He actually walked by the booth and started knocking on the glass and we said, come on in.

**Steve:** [00:04:31] Oh, good deal. And then David Blank-Edelman, who's been very active like in the SRE community. And I've also got Jay Gordon on my team. He's actually heading off to ChaosConf today. I think he's heading off for that. Jay is formerly from Mongo, and we get to talk about a good bit of fun stuff across DevOps, site reliability engineering, cloud native. And I've got an exciting announcement. Emily Freeman is coming to join our team. She announced publicly a week or two ago, but she'll be coming to join us. So, @editingemily on Twitter, and she'll focus on DevOps and incident response and things like that with us.

**Trevor:** That's super cool. So, you talked all about who your team is. What is your team?

**Steve:** Yeah. So, we're Operations at Focused Advocates. So, at Microsoft, we've done the developer advocacy thing now for about a year and a half. It was a reboot of our developer outreach or our technical outreach at Microsoft.

**Trevor:** [00:05:35] And that was the role you joined Microsoft in as, right?

**Steve:** Yep. Yeah. So, I was a developer advocate on Donovan Brown's team focused on DevOps scenarios. Sounds familiar to what I'm doing now, right? And so, for about a year or so, I was doing the developer advocate thing and talking to the same people I've always talked to and telling similar stories to what I've always told because, you know, that's kind of what they hired me for. And earlier this year, we had now had a good track record of doing the developer advocate thing under our belt and we were— we'd been cognizant of the fact that we weren't doing a lot of operations outreach. There were like a handful of us on the developer advocate team with operations backgrounds. So there was an emphasis on we need to really ramp up our presence in the operations community. Now Microsoft has a term IT Pro, and so you may have heard this. It's basically a huge bucket for anybody that's not a developer in the Microsoft ecosystem. If you build Power BI reports or you manage help desk or you're on— you do desktop support or you manage servers or you're an Exchange admin, you fall into this bucket of IT pro. And so, when we thought of CloudOps Advocate, we really wanted to focus on kind of the IT operations, server admin kind of space because that's really the group that is being— is most involved really in the move of environments into the cloud, right? Yes, there's stuff around like office administration, like O365 and that kind of thing. And eventually, maybe we'll have some bandwidth to go and look at those routes. But I think our primary focus really needed to be around the folks who are running servers, you know, and whether it's more traditional environments, whether they're running Windows servers, Linux servers, you know, we have folks who are active in those communities and can go and talk the talk there. And share the right stories. And then in my team, we focus kind of on the ops crowd that's around the DevOps space. It's around site reliability engineering. That's talking around the cloud-native concepts, as well as working with the other ops advocates and helping kind of push towards better practices, the things that qualify as high-performing IT, right? Encouraging folks to get their stuff into source control, to put some automated practices around delivering the things from source control, from our single source of truth out into their production environments, right? So that we're reducing the number of manual intervention points, you know, and encouraging practices like that.

**Trevor:** [00:08:22] That's awesome. So how long has this team been around now?

**Steve:** So officially we've been around, we've been a thing since the end of May. Mostly what we spend most of the summer doing is hiring and onboarding. Our team is out in force here at Ignite. There's a bunch of folks on— Rick Klaus leads the Windows-focused admin team in our Ops Advocacy org. I say Ops Advocacy org, and actually all of our advocates, we all roll up to the same general manager, We are all one big broader team. Some folks have ops advocates, some folks say developer advocate. It's all the same thing. We're all technical advocates. Our job title does not reflect the tooling and capabilities that we talk about and expose. What it kind of highlights is the audience that we talk to.

**Trevor:** Okay.

**Steve:** Right. So, Right? For example, out here at Ignite, I was doing some demos in Visual Studio, right? And talking kind of developer-y for a little bit. And that's okay, right? You know, we're in a stage in kind of in our technology landscape that there aren't a lot of hard lines. The lines are blurring, especially as we start talking about cloud, especially as we talk talk about, you know, DevOps or site reliability engineering, right? The types of work that people do bleeds over from what would be traditionally an ops topic or traditionally a developer topic.

**Trevor:** [00:10:02] Absolutely.

**Steve:** And so, and this is one of the things I love about docs.microsoft.com, and one of which is one of the reasons I actually came to join Microsoft, because Microsoft historically has had like TechNet and MSDN, and TechNet is where you went if you were this you know, IT pro person, and if you were a developer person, you went to MSDN. Except it never really worked out that way. In every role I've had, I've either had to go from MSDN to TechNet or TechNet to MSDN to get all the information that I needed to go do something. Well, they, you know, when they kind of came up with the idea for docs.microsoft.com, they got this right and they just put all the technical documentation in one place, right? Because we acknowledge that roles tend to be kind of fuzzy. And it may be super defined in the environment that you work in, but how you define a role and how another company defines a role can be completely different.

**Trevor:** So almost certainly completely different.

**Steve:** Yeah. And so that's one of the things that actually drew me is like, all right, we're just acknowledging that we've got a bunch of technical people and the types of work that they do is going to vary and we need to talk to all of them. We need to give them all the information that they need and we need to be effective for them. And so that's a similar philosophy that we have in the advocacy team. And so titling just really comes down to narrowing down the community of focus where you spend most of your time.

**Trevor:** [00:11:32] You mentioned your team's all here at Ignite. What are some other places that people might run into or find or get help from your team?

**Steve:** Sure. So, my specific team, you're going to find at DevOps Days events. You're going to find them at SRECon. There'll be some folks at Use Nix Lisa. You're going to find— I'll be at PSConf Asia later this year. Well, in a couple of weeks.

**Trevor:** That's another missing episode, by the way.

**Steve:** Yep. WinOps. I will be at WinOps in London. I'll be at Chocolatey Fest in San Francisco. Francisco.

**Trevor:** Um, and then, so basically, if it's an IT, like a, a DevOps or kind of infrastructure-related tangential event, there's a good chance you might find somebody from your team there.

**Steve:** Yep. But the best way to find us is on the internet. We, we live, we live online, right? And so Twitter, LinkedIn, Facebook, all the various avenues, right? Slack channels. We're out there and we're watching and we're there to help. So, you know, don't wait to find us in person to ask something. Reach out. We can, you know, we can definitely do our best to help. But if you do find us in person, definitely come say hi and hang out and let— because I want to hear what's working well for you and what's not working, especially what's not working well. You know, What are the things that we can do to help improve documentation, help bring feedback to the product teams to make the scenarios that you need to accomplish work for you, right? That's one of the key aspects of our role. This is one of the— it's a foundational concept for the advocate team is that we exist to help be a conduit between our communities and the product engineering teams. The, you know, to me, the core value of that, right, is our product engineering teams are incentivized when people use their services. People aren't going to use their services if they don't fit into their workflows, if they don't work well with other services or things that they do, right? If you're using Terraform to spin up infrastructure and it's hard to do that in Azure, or if you're using Splunk for your monitoring and it's hard to get your data into that, Or if you are using Jenkins as your CI pipeline and it's hard to deploy stuff into Azure, all of these things can be challenges to your work. Not saying any of those things are blockers or impossible, they're just words I was able to string together. But if you are seeing problems in any of those things, that's an opportunity for us to either help improve the documentation or go back to the product teams with feature requests or help support some of the bugs that might be filed against something and try to help get things prioritized and Absolutely.

**Trevor:** [00:14:22] I mean, that's like a lot of times at Chef, one of the— like, you'll hear some feedback from a customer and you'll just, oh, you talk to the product team and it's a couple lines of code change and it can be released in the next version.

**Steve:** Oh, yeah. This is very, very similar to the work I did when I was at Chef on the community engineering team, right? The job was to be out with the community and be the voice of the community into engineering. And it's super, I mean, it's very, very similar to the type of work I'm doing now. And I love it, right? I love being able to help be the conduit to helping folks get successful, right? If I can be a small part of the process for someone working in IT operations to be able to get paged less, or to spend less time in an off-hours deployment, or to have more confidence when they transition from server versions or move into the cloud, right? Then my work here is done, right? I'm a latecomer to the IT field. I probably have said this on the show, maybe it's in the last episode, right? But this is my third career, and I owe so much to People who have shared freely with the community, people who contributed to podcasts and who ran the podcasts, people who blog about a bunch of different technical content, people who put up code samples on Twitter or on their blogs, and people who spend time in IRC helping answer questions, right? I would not have the opportunities I have today if it wasn't for a bunch of other people freely giving their time to help make me better at my career. And so I'm blessed to have the opportunity to get paid to go and give that back to the community.

**Trevor:** [00:16:16] You can't ask for more.

**Steve:** No, no. I, you know, I wake up every day and I am happy about the job and opportunities I have, right? I was very happy at Chef. I had a great role. I worked with great folks. Right? And the job here just offered me a chance to do the same things with a lot of the same community. I still get to talk to the Chef community. I got to hang out at ChefConf this year, do a lot of Chef demos and stuff like that. But to do it at Microsoft scale.

**Trevor:** Yeah. That's super awesome. That's my phrase, super awesome, not super excited.

**Steve:** Yeah, there you go. You got to differentiate a little bit, right? Yeah.

**Trevor:** That's whenever I can't express excitement in a, in like a clear and articulate way. The only word that comes outta my mouth is awesome. Awesome.

**Steve:** Exclamation point.

**Trevor:** Yeah.

**Steve:** Exclamation point.

**Trevor:** And I just like, I, I, I, I scold myself every time for it. It's like, come on, you had nothing more interesting to say. Bad Trevor than awesome. Anyway, we're here at Ignite, and so you mentioned you got to do some demos and some talks. What were some of the things you got to talk about this week here?

**Steve:** [00:17:32] Yeah, so I've had a bunch of side conversations with folks around CI/CD pipelines and ops and, you know, why you want to have your infrastructure represented as code. But the session I was involved in was around continuous monitoring, and it's, you know, we talk a lot about adding CI/CD pipelines to our infrastructure. We talk about getting CI/CD going for our applications. But what we— and that's like the step one. That's the systems thinking. That's the, you know, when you talk about in the Phoenix Project, we've got the 3 ways, right? We have the right-to-left flow. It's a great start. But the next step is feedback, right? And creating those feedback loops. And that's getting into the second way and third way is taking advantage of those feedback loops. And how do we get that feedback? Through monitoring and instrumentation. And so I got to talk a little bit about some of the capabilities in Azure Monitor, how it ties like App Insights as well as like Network Watcher and container monitoring and VM monitoring and how you kind of get this nice holistic view. You can set your thresholds and all sorts of fun stuff. And you can tie that back into your CI/CD pipelines with quality gates. So that now we can, instead of having a bunch of manual inspection, we have monitoring happening against our environments, and we can set quality thresholds to say, stop deployments if, right, you know, if these particular rules evaluate unfavorably. So, if things are going well and all my tests are passing, then stuff can just keep moving in environments, right? And we don't— we can remove some manual inspection points and we can, you know, give it thresholds over periods of time, like watch this environment for a day or for 30 minutes, you know, whatever's appropriate for your environment. And then take advantage of the instrumentation that we have throughout the application, throughout the platform the application's running on.

**Trevor:** [00:19:37] Not going to say awesome.

**Steve:** How about super awesome? How about super double awesome?

**Trevor:** It's very interesting, Steve.

**Steve:** There we go.

**Trevor:** Tell me more.

**Steve:** So this actually dovetails really nicely into a session that David on my team is doing this morning, actually, or probably just finished up. And he was doing a deep dive into setting service level objectives and service level indicators in Azure. And so one of the things that falls out now, we have this instrumentation. We can plug it into our CI/CD pipeline, but we can also use the metrics that we're gathering, the data that we're gathering about how our applications are running to define what running well looks like. And then, in contrast to that, what degraded-type states are like, or how can we catch things before they become real problems? And so, we start being able to have the conversation around that because now we have some data.

**Trevor:** Yeah, once you've got all this monitoring information and feedback, you can pipe it back.

**Steve:** [00:20:39] Right. And so we can start having the discussion to set what our service level objectives are, right? And we can then pick the different metrics and groups of metrics to make our service level indicators. And so David went through and did a good example of, first of all, explaining what all that stuff is and then how we'd implement some of that in Azure. Because guess what? In Azure, the tooling that you have available to you for monitoring metrics, all that type of capability is the same stuff we use to run Azure and to run services that we build on Azure. So, the same metrics capabilities and Log Analytics and query-type capabilities that we use to run, say, Azure DevOps, is available to anybody running on Azure.

**Trevor:** I'm proud of you for using the right name.

**Steve:** I'm, you know, so I am working so hard on— I've got a little regex replace running in my head that that's why there's always, whenever I say it, there's always a little pause because there's a little processor time being used as the regex replace is happening. It doesn't always, you know, sometimes it throws an error, but, and the wrong string comes out, but Well, yeah, I mean, at this point for me, it's like I've got the variable loaded and it's—

**Trevor:** [00:21:55] the variable name is now correct and it says Azure DevOps in my head, but it's still set to the string VSTS.

**Steve:** So, you know, I don't love the name Azure DevOps, but whatever, right? The cool thing about the rebrand effort is actually the componentization of the service.

**Trevor:** Yes.

**Steve:** Right. So we have Azure Pipelines and Azure Repos and Boards and Artifacts, right? And now it's use what you need or use what complements the things you already have.

**Trevor:** As opposed to here's a pile of everything, use it.

**Steve:** Well, and you could always just use the bits that you wanted, but you got the whole thing.

**Trevor:** Right.

**Steve:** Right. And so it felt like, ooh, I'm either paying for or I'm managing a bunch of stuff that is just kind of rotting there. And so, you know, I love, I love that now I can just go turn on or turn off capabilities. Depending on the project I'm using. For my GitHub projects, I'm probably tracking the issues there, so I'm not going to use Azure Boards. And I may or may not be using Azure Artifacts. It really depends on the project and where— like, if I'm pushing stuff out to RubyGems, I probably don't need Azure Artifacts. And so, it gives me the flexibility. So, I love that part of the evolution of what had formerly been Visual Studio Team Services.

**Trevor:** [00:23:20] The tool formerly known as Visual Studio.

**Steve:** Yeah. And actually a tip for folks who had been using Visual Studio Team Services and have not kind of onboarded to the new experience. If you do not see that, you can go up into your user— where your little user icon is, and in there, there's some settings and you can change the preview features. And so you can flip over to using the new URL structure, you can flip over to using the new UI, and change your traditional Visual Studio Team Services look. If you haven't already been moved over, you can kind of move over at your own pace.

**Trevor:** That's awesome. That makes it super convenient.

**Steve:** Yeah, I actually just went through—

**Trevor:** I want to go do that to mine.

**Steve:** Yeah, I just finished going through a bunch of mine and doing that.

**Trevor:** Oh, that's great. So Steve, I know like me, you've been super busy during Ignite, haven't had a lot of time to go look at talks, but What are some of your favorite announcements that have happened this week?

**Steve:** Well, I have to go back to, you know, to my chef friends, and, and I'm super, I'm super excited.

**Trevor:** [00:24:23] Oh God, I, I, I, I'm, I'm glad I'm not the only one with a— with not— it's not even a catchphrase, it's just a stuck word. Yeah, yeah, it, um, so you've got a case, you've got a switch statement, and you're just hitting the default.

**Steve:** Exactly. So I was really encouraged to see Chef Workstation making an appearance in Cloud Shell, right? If you didn't pay attention to what was happening at ChefConf when they announced Chef Workstation, now Chef Workstation is available in Cloud Shell. Before, just Inspect was. But Cloud Shell is rapidly becoming just my place to go work because it's got all my tooling. And it's got my Git there, it's got my Azure PowerShell, it's got my AZ CLI, right? And it plugs right into Visual Studio Code. I can, you know, in Visual Studio Code, I can make that my default shell, or I can make that shell that comes up and work in it. So I'm just, I'm really excited about improvements and enhancements around what's available in the Cloud Shell, and the fact that Chef Workstation's there is pretty sweet.

**Trevor:** [00:25:32] It's funny, I hadn't even thought about wiring up Cloud Shell into VS Code. I've just been using the code editor in Cloud Shell.

**Steve:** Yeah.

**Trevor:** Which is effectively VS Code but smaller.

**Steve:** Yeah. So the cool thing about doing the reverse, right, you add the Azure account plugin and Cloud Shell becomes an option. Oh yeah. Yeah. So, so hot tip there. So other stuff that I've, that I've liked about the show or been excited to— excited was the rebrand around Azure Monitor. We brought all— because App Insights, there was App Insights and Log Analytics, and before some of this stuff was OMS and some of this, they were all disparate efforts around monitoring. We brought them all together. They're now Azure Monitor. A really interesting implementation detail is that Azure Monitor is run out of the Azure SRE org.

**Trevor:** Oh, that's interesting.

**Steve:** Yeah. Yeah. I mean, who better to think and care about that software than the people who are using that software to kind of define their service level objectives and indicators and maintain the infrastructure that's running, right?

**Trevor:** [00:26:44] So, I mean, because that can be one of the hardest things to do as a product owner is to kind of think about, to have the environment to think about against. Yeah, right. You know, one of the— when you've got to come up with a comp— you can't— it's very hard to invent a complex system, and it's always contrived if you do it— if you try to do it as an example to build something around. And so it's when you can work with a real-life thing and actual, like, have people who are involved in that process who are actually using it see customers, um, yeah, it's much easier to build something more effective.

**Steve:** Yeah. So I'll have to make a confession, uh, the announcements that I paid the most attention to were the ones that impacted me and the tech types of things that I want to go do the most. So that's why Cloud Shell came up. And then the other one, this is going to seem like an ad for Chef, right? Because the other one was the Chef Managed Services. So now you can get a Chef Automate managed service. Well, it's a preview, right?

**Trevor:** Yes. Public preview.

**Steve:** There's a public preview of a managed Chef Automate instance that you can just spin up and have and use. And for me, that That's pretty cool because I like being able to demo and show off the cool stuff in Chef Automate because that makes visible— because demoing config management and demoing, you know, a lot of the automation stuff is hard because here, watch my scrolling text. Ooh, there's a different color of scrolling text. All right, now it's back to black text. And, you know, not super exciting, right? And Chef Automate gives me a lot of the visibility and some nice graphs and UI and all sorts of cool stuff I can go dig into and show off. So for me, those were— the Cloud Shell and the managed service offering were both very exciting for me to hear. And then the Azure Monitor rebrand was also right up there. There were so many others. They gave us a book. They gave us a literal ebook, like 50-some pages of announcements. The announcements were like a 2-sentence paragraph, a little 2-sentence description and a title of the announcement, as well as a link to where the details were for 50 pages of— right? So that's insane. Yeah. So, you know, go through, look at the session catalog, watch some of the keynotes. You'll see a bunch of the announcements troll the blogs, you'll— you will find all sorts of cool stuff happening. But for me, those are the ones that stick out at the top of my head on this 4th day of the event, or 4th or 5th depending on when you got here.

**Trevor:** [00:29:27] Yeah, right, exactly.

**Steve:** Yeah, this somethingth day of the event.

**Trevor:** There's a— there's a time frame. Yeah. So if anybody wanted to learn more about that, is that something that your team would help with?

**Steve:** Of course. So if you are digging into Cloud Shell or if you want to play with Chef Workstation and Cloud Shell and are trying to sort something out there, that's definitely something I personally am going to be experimenting with and others on my team are definitely going to have some interest in as well. So please reach out. We'd love to experiment with you.

**Trevor:** Excellent. Picked a different word that time.

**Steve:** You did. Congratulations.

**Trevor:** Awesome. Damn it.

**Steve:** There we go. Got you back around.

**Trevor:** So, you know, there's the case statement, right?

**Steve:** It's because when you go back to start thinking about what you're going to say next, right, then, and you're like, I need to say something here, and that's when you follow that default.

**Trevor:** Yep. Awesome. Any closing thoughts, Steve?

**Steve:** Uh, you know what, there's—

**Trevor:** [00:30:28] and I said awesome again.

**Steve:** I have some awesome closing thoughts, right? One of the things that keeps coming up is—

**Trevor:** I'm super excited.

**Steve:** No, I'm actually— this is actually some angst and consternation on my part, right? And it ties back to a conversation that I've had with you, with other folks, and things like that. When we want to start talking about moving faster in our environments or making changes in our environments, one of the first things we always go to is what are the automation tools that will help me do the thing. We need to slow down and figure out what the things we're going to go do are, and then what the testing and validation of those things is going to look like. Because I think it was Harold Dodge who first said, you know, you can't inspect quality into a product, right? And Deming often gets attributed for that quote, but he was quoting Harold Dodge. And So we need to focus up front on what does quality and done look like. And so look at testing tools. You know, if you're going to take anything away from all the cool stuff that's happening that you want to go do here, the first thing you need to do is be confident in what's in your environment and how it behaves so that when you try to move into that environment, you can move with confidence.

**Trevor:** [00:31:54] Steve, thank you so much for, for joining me today. Head over to arresteddevops.com/morawski-ignite18 for this episode's show notes. And our site also has a newsletter, merchandise, Patreon, all the Arrested DevOps stuff you could ever want. Visit arresteddevops.com/itunes and leave us a review in the iTunes Store. If you want to help other people find the podcast. Steve, thank you again so much for joining today.

**Steve:** Oh, my pleasure. Thanks for having me.

**Trevor:** I'm Trevor, @TrevorGHess. This is Arrested DevOps. And remember, there's always DevOps in the banana stand.
