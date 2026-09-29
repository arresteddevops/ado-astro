**Jason:** [00:00:00] Let's all advance together because it's going to work out best that way.

**Trevor:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Trevor Hess, and I have a great guest with me today, but first, A word from our sponsors. Chef is a community of professionals practicing DevOps every day. We are making, proving, learning, and shaping the future. We are known for welcoming, encouraging, and liberating others to do the same. We do not talk about change, we do change. Join the community and learn about our solutions at chef.io. This episode is brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 120 common infrastructure tools such as Chef, Docker, and AWS so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog. We have a last-minute co-host addition. Walking by the booth while we were getting ready to start interviewing Donovan today, Jason Hand walked by. What have you been up to, Jason?

**Jason:** [00:01:28] Hey, well, mostly just kind of laying low. I've recently joined the Microsoft team and I've only been really on the job for about 2 weeks. So this is kind of my first event under the Microsoft label. And yeah, super excited to be here. Awesome to be able to work with Donovan and so many other people that are part of this new Microsoft advocacy thing. So yeah, I've been just kind of getting ramped up to what's going on here at Microsoft, especially in the Azure space.

**Trevor:** Awesome. Well, glad you're here. Glad we could have another co-host. Yeah, that's great. Today we're joined by Donovan Brown, DevOps Manager and member of Microsoft's esteemed League of Extraordinary Cloud DevOps Advocates. Donovan is someone I've been looking forward to connecting with for a while, and I'm excited to have join us today.

**Donovan:** Thanks for having me.

**Trevor:** Absolutely. Can you tell us a little bit about yourself?

**Donovan:** Sure. So I run the team that's been nicknamed the League. The name was originally created by Steve Murawski, but we've shortened it because it's a long tweet. Tweeter, you can't tweet that really easily. You run out of all your characters. Exactly right. So most people just call us the League, but I've been at Microsoft just under 5 years now. I joined originally as a seller of Team Foundation Server and at that time VSO, and then I started speaking, which is kind of— I'm really passionate. If you just saw the keynote, I get up there and I just can't help but share my excitement.

**Trevor:** [00:02:46] You're a really engaging speaker.

**Donovan:** Thank you very much. I appreciate that. And what happened is I think I did that enough to where the product team said, we need this energy in the product group. So instead of me selling it, they pulled me over to the product group where I stayed for about a year and a half actually working really closely with the VSTS team. And then we spun up this advocacy team. It was like, we need someone to go own like the vision and the advocacy for DevOps all up, and we want you to come lead that team. And then I got to go in and just handpick. You can't, you can't pass that opportunity up. It's like, there's no one there yet, Donovan. You get to go handpick. Everyone you want on your team. I was like, oh my goodness. I— it hurt my heart to leave VSTS, but you can't say no to an opportunity like that. So I went out and, and built the league with Steve Murawski, Damian Brady, Abel Wang, and Jessica Dean. Steve Murawski, ironically, he's still a part of the league, but he no longer reports to me. He is now actually Jason's manager, right?

**Trevor:** Oh really?

**Donovan:** Yeah, so it's a small world there. I actually helped interview Jason. That was a very interesting interview.

**Jason:** Oh man, that's fun.

**Donovan:** That was awesome. Yeah, because we completely collided on one topic, but it was such We both, I think, were enlightened afterwards, right? Because we were seeing it from completely different perspectives. I'm a 20-year dev, right? So I, I know I'm biased towards the dev side of DevOps, right? And then having someone come in that is so— I wouldn't necessarily say biased, but so knowledgeable about the ops side, it was so refreshing to actually have a different perspective than my own. Because we were brought into the same company by 2 different people and had a completely different experience in that company. So it was really interesting for that to happen.

**Trevor:** [00:04:14] That's super cool because I've kind of had a similar experience because my background is also as a developer.

**Donovan:** Okay.

**Trevor:** And so like when I met Matt and we kind of started this podcast, it was sort of that perspective as well. I was kind of— I came and presented at the meetup in Chicago.

**Donovan:** Okay.

**Trevor:** Uh, for Azure.

**Donovan:** Cool.

**Trevor:** And was kind of coming at it from the .NET and the DevOps perspective and that angle, not even knowing it was called DevOps yet.

**Donovan:** Exactly.

**Trevor:** Um, and Matt actually, actually introduced me to that term and it kind of went through that same journey of like Oh yeah, I have been doing deployments, but I don't understand all the stuff that sits behind it at all.

**Donovan:** Correct.

**Trevor:** And so you have this whole interesting perspective. It is.

**Donovan:** And what I've noticed as well is whenever I'm brought into an organization because my reputation is as a developer, it's usually a developer reaching out to me saying, Donovan, the ops team is just like, they're in our way, right? Can you please come help us get out of our way? And then I speak to Jason, he's like, no way, dude. Like, no one brings me into a company. It's always the devs that are putting on the brakes. I'm like, no way. Like, we're having this like this huge, like, there's no way you're right. Like, what? What world do you live in that the ops people aren't the bottleneck? He's like, what are you talking about?

**Trevor:** [00:05:15] It was freaking awesome. And then you go to the customer and you say, did you talk to the ops team?

**Donovan:** Yeah, when you realize that we literally were brought in on 2 different floors of the same organization where every team and every org is slightly different.

**Trevor:** Absolutely.

**Donovan:** And you have some of them where the ops people are just like, nope, we're gonna not— if you don't change it, it won't break, right? My job is to keep the lights on, right? If I don't let you change it, then my— I'm gonna get the big bonus. But what's sad is that the way that they get their bonus is to impede the way the other team gets their bonus, right? Because I get my bonus as a developer by changing that environment and adding value and adding features. And because we don't have that aligned goal, we're constantly fighting against each other. So what I tell companies is give them a common goal to where your bonus as a team, both of you, is only achieved if you both get to this point here. And then all of a sudden we find really easy ways to work towards each other because my money is now affected by it, right?

**Jason:** And I think a lot of the sort of the clash that we had in that interview, which I'll probably tell forever, is that Donovan and I had like a disagreement in my— on like my interview to come to Microsoft. But a lot of it I think comes from the culture that you have been in recently or have been exposed to, you know, the whole time. And I, of course, I come from a startup, but I come from also the community of web operations people going to a lot of other conferences where it is more ops people and, you know, they're They've got different concerns, I guess, but they come from this culture of, we want to go— we want to sort of open up the possibilities for our dev people, but they're not really as open to those changes as we would like them to be. And a lot of it is because they have to start understanding infrastructure and understanding the really sort of underlying operations or what seemed like operations responsibility. But as soon as you sort of like talk about, let's have in common aligned goals and objectives, Um, suddenly, um, they, they're more open to that thing. So I think that's a, that's like a really great way to get people to start having common conversations is, well, what are you incentivized on?

**Donovan:** [00:07:10] Exactly.

**Jason:** And what are you incentivized on? So, um, but a lot of it has to do with the culture of the company that they came from or that they're in.

**Donovan:** Completely agree. No, no disagreement at all. Yeah.

**Trevor:** I mean, you see things like, um, we had the infrastructure teams over the past several years kind of coming into the dev world by understanding infrastructure as code and things like that. But But the conversation, we've always talked to the conversation about having common business goals as well. But I think this is where I've really, the first few times I've sort of heard companies actually incentivizing against that as well.

**Donovan:** Yeah, if you don't, you're, it's in our best interest to protect what puts money in our bank account, right? And if that is to do X, Y, and Z, and unfortunately yours is supposed to be A, B, and C, and they don't align. I'm doing what it takes to get money into my account, right? So what you need to do is say that you're responsible from A to Z, right, as an org. And we only bonus— we win or lose as a team, not as separate individual teams, right? And that's what you got to get people to understand. And when you do, I think again, things will just work the way— they're adults, they're smart individuals. That's why you hired them. But you literally told them to work against each other, and they're doing exactly what you told them to do. And now you're wondering why you're not being productive, because you told them to literally work against each other.

**Jason:** [00:08:26] And that's so important because so much of it is actually, you hear language of, well, you got to put the customer first and what is the value you're delivering. But in a large company, that gets abstracted away from everybody. So they have no idea what it is that the customer is even trying to do or what is the value. I was just told to write this code to this spec and then I do that and I move on to the next thing.

**Trevor:** That's all you have time to do.

**Jason:** Yeah. And so when that's the scenario, it's just, It's not that people are deliberately trying to do something against each other. They have no idea that our incentives aren't aligned. Correct. I'm just doing this because it's what I've been told to do, you know, and I'll do it and I'll move on to the next thing. So it's not always really that malicious people on the ground who are doing something wrong. They have no idea. They just, they need like another people a couple clicks above saying, hey, why is it that this is happening and this is happening? And they're not really jiving with each other.

**Donovan:** Exactly.

**Trevor:** That's why, like, that's one of the first questions I try to ask folks that I engage with now, even at the inside of Chef, right, is, okay, so what, like, what is, what are you incentivized on? Like, what does this mean to you personally? And what does this mean to Chef? Right? Let's, let's make sure that both of those things align and that we can go together in the right path. That also helps me.

**Donovan:** [00:09:39] Right, right. It's one of those scenarios where you want 1 and 1 to equal 3. Yep. We want everyone to feel like they're getting more out than they're putting in, right? That's, that to me is the perfect level of like, man, I'm giving awesome. Wow, look what I'm getting back. It's so much more than I expected. But that needs to be true for everyone involved. In that initiative, whatever that is, is that, man, I feel rewarded, I'm passionate about it, and it's driving towards something that I believe in. Because if you don't, even subconsciously, right, you're sabotaging, right? Because you just don't agree with it. That's stupid. I don't, I don't buy into that. You're not doing— you're not paying attention to me, right? You got to be passionate and believe in, in the leadership that's in front of you. If not, I think even if it's subconsciously, right, you start to sabotage what you're doing.

**Jason:** That's where the transparency comes in. Like, you got to let other people throughout the entire organization or throughout the entire engineering groups know what you're working on and how that's actually coming together and if it's actually, you know, benefiting people. So I think that speaks to like the observability conversation, which then leads into the SRE, in that this isn't about reliability of infrastructure, it's reliability of the business. What is the business trying to attempt to do and how are all the different players kind of coming together to make that happen? And if you can put that up on dashboards or somehow communicate it to a broader team, suddenly all of their activities and their actions start to align without really putting any effort into it because they are trying to do the right thing.

**Donovan:** [00:10:56] Absolutely.

**Jason:** And they want to get paid well and they want to make people happy. They just don't know that what they're doing is in the wrong direction. And that goes across the entire company, I'm sure.

**Donovan:** Agreed.

**Trevor:** I mean, I think we're still seeing the kind of the devolution of some of the old thinking around business still too. Too, right? There was a time where you would pit organizations against each other intentionally because that was going to be the thing that drove results.

**Donovan:** That motivated them. Competition, right? Yeah, exactly.

**Trevor:** And unfortunately, we're like, we have to get rid of those remnants so that we can drive forward in this new mode where we realize, like you're saying, when we actually work together towards a common goal, we actually drive more business value for our organization. You know, it's not, it can't just be about like cost management. It can't just be about, you how many features are we shipping if those 2 things are at odds? Right.

**Jason:** Or lines of code or any kind of just weird metric, arbitrary metric.

**Donovan:** Yeah.

**Trevor:** So we're here at Ignite this year. You were just on stage giving a keynote. What did you talk about in your keynote?

**Donovan:** [00:11:58] We just released a rebranded VSTS, which used to be Visual Studio Team Services, which was this almost monolithic service.

**Trevor:** I thought you were going to go all the way back for a second.

**Donovan:** I wasn't going to go to VSO. Even before that, it was called something before that, but I think it was Team Services. I forget what it was called back then. It was a long— I've been there the whole time, but it's, it's a long road. It was funny because it was VSTS and then it was VSO and then it came VSTS again and now it's Azure DevOps, right? So, but what we did is more than just rebranded it. Azure DevOps can now be used individually, all the components. Before they were really tightly coupled together, it kind of was better only if you used it all or not. And we realized that this is not where our customers are. A lot of our customers are now on GitHub because we're embracing open source like we never have before. They don't need a lot of those components, and it confused the navigation when there's all the stuff I'm not using that I have to navigate through to get to the part that I want. So the demo I did on stage is where I wired up a GitHub repository using an extension in the GitHub Marketplace to give you pipelines. But when you go inside of our DevOps experience now, it's just pipelines. You don't see the boards, you don't see the, the artifacts, the test plans, the GitHub repo— I mean, our Git repositories. You don't need that stuff because you're using issues inside of GitHub, you're using GitHub as your repository. All I need are the pipelines. So it's nice to see that we've made that integration easier, but we've also streamlined the experience to make you more productive at what it is that you're using Azure DevOps for, be it pipelines, work item tracking, test plans, artifacts, or repos, because there's a lot of value there. And what I wanted to show is how easily you could wire it up. And I also wanted to drive home the fact that it's more of a platform than a collection of services, because almost every part of it can be extended by yourself. There we have a series of tasks that we've written. They're all in GitHub. You can go and see every line of code that we've written for our agent and the tasks that the agent runs. And the way that I learned to write my own task was I went and cloned the repo, looked at something that was similar, modified it, and created my own. So it's a great way to learn how to extend our platform to do any language and any platform. And I say that all the time and people always challenge me. I remember once I got challenged like, any language, any platform? Like, yeah, it's like, well, I still support VB6. So if you go to DonovanBrown.com, there's a blog post on how to use our tools on VB6. I'm like, any language, any platform. The tools are that flexible. So stop thinking that it's Microsoft that only does .NET on Windows. I did a Node app in GitHub built on Linux deployed to Kubernetes on stage, right? That's the Microsoft that I'm talking about.

**Trevor:** [00:14:17] Absolutely. That's, I mean, that's new Microsoft. Exactly right. I mean, I think unfortunately all 3 of us on the show today are a little Microsoft biased.

**Jason:** True. But I will say, like, I never imagined myself being, being here and having these conversations from within Microsoft. Um, so the fact that it is a new Microsoft, I think, speaks so many different things across or around the world, really, because there's just so many people who are like, really? Like Microsoft? Like, I've had so many people reach out to me since I've started and just like, like, dude, what, what is going on? Like, is—

**Trevor:** I mean, I'll be honest, like 4 or 5 years ago, like as I was coming out of college, I was thinking like, I learned how to do C#. That might have been a poor choice.

**Donovan:** Interesting.

**Trevor:** Like, I don't know, like, because like all the companies I was going to talk to were all excited about Ruby and Rails and doing all this stuff. And, you know, everybody's like, well, nobody wants to touch Microsoft anymore. We're all using Macs. Like, Microsoft's bad, right? I'm like, oh, did I like box myself into a corner here?

**Donovan:** [00:15:18] And now .NET runs everywhere. Yep, including your Mac. Exactly.

**Trevor:** And, you know, and I thankfully, I decided to steer into as opposed to away from it.

**Donovan:** Awesome.

**Jason:** Um, But I think that's where we are right now. Like, people— you could be an expert, very proficient in anything, totally, and then switch gears and learn something new very quickly because it's just the tools and the tools out there. So much of it is open source now. Information is becoming more available. We've got Microsoft Learn now, which is all kinds of like free tools that people are just making available because the idea is that we should all be doing this together, getting better together. I think I really— I was thinking about this earlier. I think the idea of competition is starting to dissolve a little bit, whereas like we put information behind gates and we would put all these tools that you had to pay for. And now it's like, no, let's just— let's all advance together because it's going to work out best that way. Yeah.

**Trevor:** Yep. I mean, that's, that's actually interesting. A side conversation we should have after. I've been thinking a little bit about like this idea of is copyright holding us back as a society? With these 90-year copyrights out there on ideas and like thinking when like all of our, all of everybody in the tech industry is trying to go fast, fast, fast. Like let's make the next thing. Let's iterate together. When so much of the world is still bound by these like, nope, I'm going to hold this for the next 90 years. Forget the rest of you. Correct.

**Donovan:** [00:16:38] Yeah.

**Trevor:** I wonder if that's holding us back.

**Donovan:** That's not, that's an interesting concept. Yeah, definitely for another show. Yes.

**Trevor:** That totally derailed the train of thought. I'm sorry.

**Donovan:** Yeah, it's actually funny because like we've, we've gone on to all these little tangents, but they're interesting. So yeah, I mean, that's how this show always works.

**Trevor:** Works.

**Donovan:** Gotcha.

**Trevor:** That's basically a conversation.

**Donovan:** Yeah, sure.

**Trevor:** Um, so yeah, with the— like, totally, there's so many better resources now. Like, when— like you were saying earlier, being able to go into GitHub and see the code that somebody else wrote so that you can look at it, take it, repurpose it to do the thing you want, it's so much easier. I mean, I remember when I was in college, I was going through MSDN. Yep. And looking at how a class was structured and then having to figure out, okay, well then how do I connect it to this other thing? If you were lucky, there was a Stack Overflow entry where somebody had tried to do something similar. But if you can just look at that source code like you can now, it's so much easier to just, oh, well, I see this is like a puzzle. I take this piece out, I put the thing I wanted in, it still builds and it does what I want.

**Donovan:** [00:17:39] Exactly. Very cool.

**Trevor:** What are you most excited about from Ignite this year?

**Donovan:** I think it is the announcement with us planning to acquire GitHub. I think that opens up a whole new audience for us and a whole new world. And the fact that our tools are actually prepared to support that initiative, I think, is what I'm most excited about. I want to help get the message out that this again is a Microsoft that can help you with any language in any platform. I say that over and over and over again until people believe me. And I've gotten on stage— the funny thing is that I demo all over the world. I can't remember the last time I did a .NET demo, not because I don't love .NET, because I'm out there constantly trying to prove to the Node community, to the Java community, that I have value for you as well. Of course, I can just as easily do a demo in your language as I can in .NET, and it's the same pipeline, same first-class experience, same code coverage, same test case management. It's like, we don't care what the language is, right? Just bring us your, your ideas and let us help you turn them into working pieces of software. So that's what I'm excited about, is getting this announcement out there. Scott, Guthrie and I are flying to the Netherlands on Monday, right, so that we can go off and do this exact same thing again there as well, because we want everyone to know what we're trying to do here at Microsoft.

**Trevor:** [00:18:49] That's fantastic. So what is that— what does the relationship look like as GitHub and Microsoft come together?

**Donovan:** Hopefully it— we've been working on integrations between GitHub and Microsoft before we acquired them, right?

**Trevor:** Right. Microsoft was the— has been the largest contributor to open source for a while. Yeah.

**Donovan:** And one of the most popular open source projects is VS Code. Right. So I mean, we've definitely been doubling down on the open source world. And what I hope is that GitHub stays GitHub. I don't want it to become part of like this, get sucked in and then disappear inside of Microsoft. I want it to stay what it is. It's really, really good at what it does. Yeah. And what we have hopefully at Microsoft is just the ability to help them do that even better than they have in the past. That's all I want to do. But I want GitHub to stay GitHub and I want us to figure out ways that our tools can integrate even better than they do today. To give everyone, no matter if you're an open source developer or an enterprise-grade developer who's not using open source or vice versa or the combination thereof, has the best tools in the world to do your job. And I think that's what we're building here at Microsoft.

**Trevor:** That's awesome. I mean, that seems to be so much of what Microsoft's messaging has been lately too, is we're here to help you, help make you better.

**Donovan:** [00:19:56] Absolutely.

**Trevor:** As opposed to, you know, like, like we said, the kind of the classic Microsoft of, huh, you're a VSTS, you're a Visual Studio or a TFS competitor, we're going to buy you, right? And then we're going to put you in the closet and never hear from you again.

**Donovan:** And I mean, it's in our mission statement, right? I said it today when I started. It's to empower every person and organization on the planet to achieve more. You don't do that by holding patents over them.

**Trevor:** Yeah, right.

**Donovan:** You do that by open sourcing .NET. You do it by open sourcing VS Code, our build engine, our task library. We let people say, look, these are the tools that you're going to be able to go off and use to do things we never dreamed of doing and could never do on our own. So let's just empower you to go make the world a better place. And that's why I'm so proud to work for Microsoft. Yeah, when I joined in December of 2013, Satya took over February 2014. So this is the only Microsoft I've ever worked for, is a Satya-led Microsoft. So I have that open culture, that empower everyone culture, which is— it's just been fantastic.

**Trevor:** Yeah, I mean, you could be really seeing, especially, you know, coming back to the open source conversation and the VSC or the Azure DevOps conversation. Sorry, I'm still getting used to it.

**Donovan:** [00:21:00] Don't worry about it. I was surprised I did not mess up today. I was thinking about it a lot too.

**Trevor:** Um, VS Code is now everywhere.

**Donovan:** It's awesome. It is my number one editor. I go to it.

**Trevor:** I think it's almost everyone's favorite editor.

**Donovan:** Like, I freaking love it.

**Trevor:** People who I know would swear off anything with the M word on it, it's amazing, or the Visual Studio branding on it at all, they're all using it.

**Donovan:** Yes, it's the same experience. I had to demo once where I had to do I literally took on stage with me a PC, a Mac, and a PC running Linux.

**Trevor:** I think I remember this demo.

**Donovan:** Yeah, right? And I literally let the audience choose. Tell me what language you want me to program in. Tell me what platform you want me to do it on and tell me where in Azure you want to deploy. And they started voting as I'm talking. And then at the end of it, I'm like, let's see what you voted for. And I went to whatever machine they told me to, but I was on code on all of them. So I was immediately comfortable no matter what platform they chose, because I was going to be using code, VS Code on a Mac, VS Code on Linux. All my keyboard shortcuts were the same. It was just like, pick whatever you want because to me, they're the same. Of course. That's the beauty of it. It does not matter. Whatever you choose, watch me deploy it into Azure for you and you're going to be like, holy crap. Yeah, I don't even know what demo I'm going to do. It's exciting for me to do that because I have no idea what demo I'm going to do until we get to that slide.

**Trevor:** [00:22:08] Did you have demos prepared for every language?

**Donovan:** Yeah. The 4 languages I let you choose was .NET, .NET Core, Node, and Java. Those are the only languages I know, right? The language— it would get larger if I knew more languages, but I'm like, I don't have time to learn any more languages, right? So if I knew more languages, I would just throw those on the list as well. But the language really is not the important part.

**Trevor:** No, it's, it's can you run on these things? Can I— do I have tools to let me do my job wherever I am?

**Donovan:** And the answer is yes now. And that's what I've been flying the world trying to prove to people, is that the answer is yes, and the company that's bringing it to you is Microsoft. And that's what blows their mind.

**Trevor:** Yeah, now I'm even seeing I'm 90% sure it's Visual Studio Code pieces in Cloud Shell.

**Donovan:** You're seeing it all over the place. There's a couple of other places that it's already embedded. I think the editor, if you do quick code edits inside of Azure DevOps, that's Monaco, which is the engine that drives VS Code. So it's the same experience everywhere you go. So it's cool.

**Trevor:** Yeah. Even in those consoles, I start just reflexively doing my Visual Studio Code commands.

**Donovan:** [00:23:11] They work. That's exactly what I do too.

**Trevor:** Oh, so you have a catchphrase.

**Donovan:** I do. It's, uh, rub a little DevOps on it. Yeah, I— it was funny, I got a tweet today, so, and the guy's like, I finally got to hear it live, right? He's like, it's always like they're expecting me to say it. And I remember, this is a funny story, so there's people who hate it, like they just freaking hate that, that, uh, that phrase that I have. And I remember one, one guy's just going off on Twitter, is anyone else just sick of Donovan saying that? And what was cool is he completely got attacked. I didn't even enter the conversation, but people were just like, oh, You're out of your mind. It's freaking awesome, blah blah blah. So we fast forward and I'm in England and I meet the guy face to face, right? So he's like, oh yeah, I'm the guy who, uh, who hates your hashtag. I'm like, no problem, man. Like, I was completely nice to him. And then I had a meetup that night and he came to it and I forgot to say it and he's all disappointed. Like, but you hate it. He said, but you didn't even say it. I was like, yeah, I forget. I don't always say it. But he's like, so even the people who hate it are waiting for me to say it, which is hilarious.

**Trevor:** But That's amazing.

**Donovan:** A lot of people want to know, like, what does it actually mean? Like, what do you mean when you say rub a little DevOps on it? And the origin of that goes back to— I was on the VSTS team back then, and we were working with a really big customer of ours who was trying to use Java inside of VSTS for a really big Gradle build, and they were struggling back then. So what they did is they flew me and 2 other PMs down to their headquarters and said, we need you to help us make this work. I'm a developer by trade. We had another developer, we had a PM there, and what we would do is we would sit down and every problem that they had, we would go in and figure out how to fix it for them, even if that meant writing a tool. And at one point, that's like pain point after pain point after pain point was coming up and we were just knocking them down. And out of nowhere, I just blurted, yeah, another pain point, we're just going to rub a little DevOps on that, we're going to make it better. And everyone in the room just started laughing. I was like, really, is that funny? I just blurted that out. So then I made like a little picture of it, of a tube with DevOps on the side of it, and I tweeted it out and people just started getting momentum. So It's really about like something hurts, right? And I just want to rub a little calamine lotion or Bengay or Icy Hot, whatever it's going to do to make that pain go away. And it's just been working. The first time I ever said it live was at Build 2016. We had an app and I was like, you remember that app we just saw? I'm just going to rub a little DevOps on it and make it better. And this one guy in the crowd laughed so loud that when I hear it, I still laugh every time because he, he, it just tickled him to death, right? This guy's like, that's hilarious. And it just took off from there. I mean, Scott Guthrie says it to me.

**Trevor:** [00:25:37] He's like, all right, Donovan, you're going to rub a little DevOps.

**Donovan:** I was like, You know I am. So I always forget, like, where in my talk track can I put that in there without it feeling like I'm forcing it, right?

**Trevor:** Right, of course. It has to feel organic.

**Donovan:** Exactly. And it was like, perfect. Do you realize what you can do now? You can take your open source project and rub a little DevOps on it and make it better. And everyone just started laughing. It was like, yep, it trends every time I say it, right? The hashtag trends. It's hilarious. So that's the origin of it. Uh, it's just—

**Jason:** it might end up on your tombstone, you know.

**Donovan:** It might. It might actually. It actually might. What's the craziest thing? So I have a picture of a person who tweeted me their birthday cake and it has #RubDevOps on it. I'm like, come on, man, this is huge. Like, this is taking off to where people are putting it on their freaking cake. So yeah, I mean, love it or hate it, I'm sorry for anyone who doesn't like it, but it's, it's innocent. I just don't understand how you don't like that, right?

**Trevor:** I mean, I, I can see where people like want to take it, take the word a little too seriously, and that's exactly what they're doing in my opinion, right?

**Donovan:** What's funny is that I never took it there, right? I mean, I'm thinking, wow, is that where your mind is? Like, literally, I'm talking about technology in a keynote and that's what you're thinking about during a keynote? Like, come on, man. This is about solving problems with technology, and that's exactly what we're doing. And it's— and the more you think about it, the more it makes sense, because that's exactly what we're doing. You find what hurts most in your pipeline and you focus on making that go away, and then eventually something else will hurt most, right? That will be the new bottleneck. Let's go focus on that. What's interesting is I've seen it to where once I do the second one, the first one's now the slowest thing again. Let's go back and rub a little more DevOps on that. Let's keep Continuously improvement. Exactly right. And that's all that catchphrase is for, right? Let's just rub a little DevOps on it and make it better.

**Trevor:** [00:27:10] That's awesome.

**Donovan:** Cool. Well, yeah, we covered a lot already.

**Trevor:** We sure did. I think we're just about out of time. Okay, so, um, for those listening, uh, well, let me first— Jason Donovan, any closing thoughts?

**Jason:** Um, no, I thank you so much for, for letting me, uh, sort of hijack your show here for a few minutes.

**Donovan:** Not at all, man.

**Jason:** Part of this. So I'm just excited Excited to see you. I was hoping I'd run into you eventually. Yeah, Donovan. And, uh, yeah, I'm excited to be here and be part of this event, be part of Microsoft in general. And I think a lot of the DevOps things that we're doing and, uh, Microsoft Learn— there's just, there's like every day I'm, you know, and I'm fairly well plugged into what's going on at Microsoft, and I'm like shocked at the stuff that's coming out every, every single day. We've got such good like momentum right now, and we're adding more people to our advocacy team, both on the dev, uh, sort of the developer side of things, but also now like I'm part of the, uh, like the operations side of things. And so I'll be bringing in concepts like SRE and incident response. In fact, that's what I'm gonna be talking on on Wednesday. Um, so I'm ex— I'm excited to be able to just like kind of take the things that I've been talking about for the past 4 years, um, and bring them into the sort of the Microsoft family and the community here that's going on. 'Cause this is some really exciting stuff.

**Donovan:** [00:28:19] Yeah, we're really excited to have you too. Like, even though, like you said, even though we disagreed on, and during our interview, I hung up the phone and said, we have to hire that guy, right? That was my— I emailed Steve and I think I got him on a chat. I'm like, that Jason guy is freaking awesome. Like, we have to hire that guy. So we're really happy to have you.

**Jason:** I'm very excited to be here. This has been a really cool experience and I'm only about less than 3 weeks in.

**Donovan:** It gets better and better.

**Jason:** Yeah, yeah.

**Donovan:** Cool deal.

**Trevor:** Awesome. Donovan, or— no, I'm, I know, I'm just, uh, I mean, I think you closed it pretty well with the, the story of rub a little DevOps on it.

**Donovan:** Yeah, I think that pretty much sums it up. That's what I try to do all over the world and Uh, yeah, hopefully if you hear this and you're interested, come and see us. My entire team, we have a website where you can see exactly where we are all over the world. We're all road warriors. Please just come by and say hello to us, guys. So you can just go to the loecda.com, which is also the hashtag. So if you need any of us, right, and I know Steve watches it, I hope the rest of the, the team over there watches it, there's a hashtag that you can use that will literally get the attention of the entire DevOps advocacy team. It's #loecda. If you put that in a hashtag, everyone will read it and actually come and try to help you. So do not tweet about like Windows 98 updates or does this really work, because yes, it does really work. Just tweet us your questions and we will actually get Microsoft engaged to help you. So that's the only thing I would leave everyone with.

**Trevor:** [00:29:32] Awesome, thank you so much.

**Donovan:** My pleasure.

**Trevor:** All right, so if you head over to arresteddevops.com/donovan-ignite18 for this episode show notes, And the site also has our newsletter, merchandise, Patreon, all the Arrested DevOps stuff you could ever want. Visit arresteddevops.com/itunes and leave us a review in the iTunes Store if you want to help other people find the podcast. Thank you both so much for joining us today.

**Jason:** Thanks for having me.

**Donovan:** Thank you.

**Trevor:** And I'm Trevor Hess. This is Arrested DevOps. And remember, there's always DevOps in the banana stand.
