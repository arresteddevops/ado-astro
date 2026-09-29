**Corey:** [00:00:00] Do you pay money for me to be a cloud economist? They said, yes, we do. I said, yeah, I am a cloud economist.

**Matty:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matt Stratton.

**Jessica:** I'm Jessica Kerr.

**Matty:** Jessica's usually a lot more excited when she says her name. This is very subdued. I think pandemic is getting to you.

**Jessica:** I'm being subtle and, and it just lets me have more room to build later.

**Matty:** Got it. So subtlety is not going to be the theme of this show, as you'll find out when we introduce our guests. But before we bring our guests in, let's have a word from our sponsors. This episode is sponsored by CircleCI. Designed for modern software teams, CircleCI's continuous integration and delivery platform helps developers push code with confidence. Trusted by thousands of companies, from 4-person startups to Fortune 500 businesses, CircleCI helps teams take their software from idea to delivery quickly, safely, and at scale. Visit arrestadevops.com/circleci to learn why high-performing DevOps teams use CircleCI to automate and accelerate their CI/CD pipelines. If you are like most of your friends in DevOps, you probably prefer using open-source solutions for observability, but you also wish you didn't have to sacrifice scalability, performance, and simplicity. With Logz.io, you get the best of both worlds for your cloud environment. You can use the tools you love at the scale you need. Logz.io is a fully managed service that offers complete cloud observability for engineers on one unified platform: log management and cloud SIEM based on ELK, and infrastructure monitoring based on Grafana. To give it a try for yourself, sign up for a free 14-day trial today at at logz.io/ado and for your chance to win a free Logz.io t-shirt.

[00:02:22] The worst thing about the Arrested DevOps podcast is when it ends. You're left wondering what to do next. What are you going to listen to on your commute home? How do you occupy your time when walking the dog? What are you going to listen to during the quarterly all-hands meeting? But fear not, dear listener, there is a solution. You need to subscribe to Software Defined Talk right now. It's a weekly podcast that recaps all the news in cloud computing, DevOps, and enterprise software. The hosts, Cote, Matt Ray, and Brandon Wichard, will keep you up to date on all things cloud while offering tips on how to optimize your Costco haul and how to PowerPoint. It's a fun, free-flowing conversation that will keep you entertained and informed. What are you waiting for? Subscribe to the podcast today by visiting softwaredefinedtalk.com or by searching for Software Defined Talk in your favorite podcast app.

**Pete:** This episode is sponsored by Chex Mix.

**Matty:** So as I said, this is not going to be the episode about subtlety, but hopefully it's the episode that'll be somewhat informative and maybe hilarious. Joining us, we've got 2 great guests. First of all, Pete Cheslock. Pete, say hi to the people.

**Corey:** [00:03:31] Hello.

**Matty:** And also Corey Quinn.

**Pete:** Hello, how are you?

**Matty:** I'm pretty sure longtime listeners or even short-time listeners of the show are maybe familiar with both of you. You've both been on the show before. You're prolific and prevalent on the Twitter versus and everything. But just for some quick background, you want to take a minute or so, kind of just what would you say you do here?

**Corey:** I mean, I guess I'll start this one just because I, for the past 6 months, did very little. It was kind of nice. I used to work for a company called Chaos Search, which—

**Pete:** In all caps, so you're required legally to scream it.

**Corey:** Gotta scream it. Yeah, it was in my employment contract and my separation agreement, had to scream it out loud everywhere you went. And so, I moved on there from being a product person into the wide world of consulting. And when you're consulting, you're just staying one step ahead of the game. And I was just one step ahead of that whole world. And, uh, now, now I, uh, I'm a cloud economist and I work for the Duckbill Group. That was— wow, that was, uh, you know, a big, big change in my life going back to the full-time, uh, full-time job.

**Pete:** [00:04:46] Yeah, he went from doing nothing for 6 months to now doing nothing on someone else's dime, which is really the best way to do nothing.

**Corey:** If you're gonna do nothing right now, if you're gonna do nothing, you wanna do nothing with like a corporate expense account That's a great time to do nothing.

**Pete:** The problem is you don't want to wind up doing this during a pandemic because then, great, you have a corporate expense account, but what the heck are you going to embezzle it for? You can't basically abuse the meal policy, uh, sneaking upgrades you're not supposed to qualify for isn't really a thing, and getting huge numbers of boxes delivered to your home is entirely too trackable.

**Matty:** So what the hell is a cloud economist? Because we have 2 of them on the show, right? Right now, you know. I mean, we have the.

**Pete:** You have two clouds economist. Yes.

**Matty:** What is the plural? What is the plural noun of cloud economist?

**Corey:** The plural noun, like the collective noun.

**Jessica:** It's kind of like duckbill, right? Duckbill.

**Matty:** A duckbill of cloud economist.

**Pete:** A CDS receipt of cloud of clouds economist.

**Corey:** [00:05:49] A twelve-foot-long receipt of cloud economist.

**Jessica:** It can almost reach the ground.

**Matty:** So what exactly is a cloud economist, whether there's more than one of you or not?

**Corey:** Well, my definition is the title that they gave to me when I joined Duckbill Group.

**Matty:** They said you were going to be a cloud economist, and I said, wait, wait, so your definition of cloud economist is it's the title that Corey gave me when I joined his company?

**Corey:** Exactly. And because my response was, do you Do you pay money for me to be a cloud economist? They said, yes, we do. And I said, yeah, I am a cloud economist.

**Jessica:** So it's like meritocracy. If you have a meritocracy, then you must have merit. So everybody who's already there wins.

**Corey:** I think everyone in their heart is a cloud economist when you really think about it.

**Pete:** I feel like there's an old joke where a student is taking an exam and praying and Shakespeare suddenly materializes. Great. What did you mean when you wrote this stanza? And the answer was something completely completely banal. Like, oh, I was trying to impress a girl and it sort of worked. Great. Sort of the same story here. I originally went with Cloud Economist because they're 2 words that no one can define. Cloud, meaning a bunch of other people's computers, and economist, meaning someone who claims to know everything about money but still dresses like a flood victim. So combine the 2 of them and who the hell was ever gonna question me on it? So I looked around and realized, oh, there are other people calling themselves Cloud Economists, including Owen Rogers over at 451 Research. Who apparently has a PhD in cloud economics, and he was super excited to meet me, and I had a choice to make. Do I wind up fessing up to the fact that I basically turned his life's work into a travesty, or do I team up with him and get a book deal? And since I'm telling this story out loud prior to publication, we know how that one worked out.

**Jessica:** [00:07:44] Or both.

**Pete:** But fundamentally what we do is we look at companies' AWS bills, because those tend to be the big ones, and help them become smaller and less terrifying, which sounds incredibly simple, incredibly simple, but there are hidden depths of nuance to it that basically make us cynical and angry all the time.

**Jessica:** Hidden depths of nuance to AWS bills. Yeah, those clouds are not white and floofy.

**Pete:** No, they're stained with the blood of junior DevOps who have clicked on the wrong instance types when provisioning things.

**Corey:** Yeah, just gonna deploy a couple of, you know, EMR Clusters, sure. 3 months later, they're still running.

**Pete:** You try to instantiate the cluster and it fails, but it doesn't turn off the old one and there's no idempotence check, so it spawns up a new one every time you run it, like the accounts creation system at Wells Fargo, apparently. Yeah, so you wind up with 50 clusters per engineer and turns out that you're not building the cloud for what you use, rather for what you forget to turn off.

**Matty:** [00:08:46] So we were talking about this, you alluded to it, you know, that Pete, you just joined Duckbill recently. So besides having an easily exploitable expense policy, Um, what, what really, uh, made you interested in, in making this move?

**Corey:** Well, other than the fact that Corey is the person who approves my expense reports, and by approval it's after I've spent the money already, he goes, oh, that's cool, I should get one of those too.

**Matty:** Um, by the way, if you're thinking about, uh, contracting with the Duckbill Group, we are now talking about a company that is supposed to help you be better with their money and clearly is terrible with it themselves. Back to Corey.

**Jessica:** I'm supposed to help you buy real things with your money. Real things.

**Pete:** You've met— you joke, but I have always made it a point since I started on this path at re:Invent to explicitly not ever be caught at a slot machine. Because wait, isn't that the person who's supposed to know all about the money suddenly pouring money into— wow, he has a lot of drinks around him. How long has he been there? The whole point is that we want to have a veneer of making sound financial decisions, and then we go ahead and completely biff it by, you know, hiring Pete.

**Corey:** [00:09:52] Exactly. It'll be, uh, it'll be interesting when they're, you know, the next re:Invent rolls around and there's Pete the Cloud Economist at the craps table with a whole group of Amazon Cloud, you know, uh, engineers around him.

**Jessica:** Because the AWS re:Invent expense reports are especially full of dark nuance.

**Pete:** Yes, I'm looking at this invoice here. Did you buy out the restaurant or did you buy the restaurant? I could really make a strong argument either way. Now, in seriousness, from our side, When I was starting this out a few years ago, I was talking to a few folks that I knew and trusted about the expensive problems in the space, and I talked to Pete, which in hindsight was a terrible mistake because I almost wound up going in a completely different direction. It turns out that Pete was very in-depth with this to the point where, holy crap, I've got to be really freaking good if I want to help companies with their AWS bills. It turns out that Pete was and is a bit of an outlier. In that context. So I was studied up and loaded for bear, and I walked into some of my early clients and, oh, you haven't bought an RI in 18 months and nothing has ever been turned off, cool. It turns out that a lot of that high-level nuance, while incredibly valuable, is not necessarily step one as you walk through the maturity model of getting a company to a point of reasonable cloud spend governance.

**Corey:** [00:11:16] But yeah, that's, that's a, that's a really good starting point, which is kind of back to your question, Matt, of how did this whole thing happen. Um, you know, a couple years ago when Corey started doing this, you know, we met up and we had a, you know, great chat. And of course I'm just like, oh, you got to think about this, you got to think about this. And, you know, from being in the cloud for almost 10 years now, um, I was just like, oh yeah, all these other things and all these edge cases and everything else, you know, kind of forgetting the fact of consulting, which is You just need to know a little bit more than your first customer, because then you go to your second customer, and now you've got multiple companies of experience, and it just kind of snowballs from there. But Corey and I chatted last summer, or maybe a year ago, or something like that, and we always check in. We see each other at DevOps Days or at re:Invent, and whenever we're talking, it always kind of ends up with, at some point, it'd be really great to do something together. But it's the great challenge of growing companies is the timing and luck and circumstance all have to line up perfectly. And then I had been doing consulting and I've been working on a couple of pretty interesting projects over the last few months. And then a couple of them actually finished up early. So I was kind of out there looking for my next thing and I was chatting with a few folks and I saw Mike Julien, who is the CEO of Duckbill, had tweeted out like, hey, we're looking for some folks. So I just kind of like slid into his DMs and I just said, are you looking for part-time, maybe consulting? Like, I'm flexible.

**Matty:** [00:12:46] I thought you were gonna say you slid in there and were like, are you looking for me?

**Corey:** Be like, howdy.

**Pete:** It turns out that we almost lost out entirely because due to a fun bug in Tweetbot, it doesn't actually show group DMs. So it sort of sat around for a while until Mike one day logged into actual Twitter and, oh hey, Chesslock's on the market, how about that? And we sort of snowballed from there because I am freaking terrible at following up on DMs and what whatnot, because I mostly view Twitter as a transmit-only mechanism.

**Corey:** It actually was very hilarious in that I sent the DM thinking like, oh yeah, I'll hear back in like, I don't know, 30 seconds because they're always online, they're always on Twitter. And it was like weeks had gone by and I was like, huh, I wonder if they ever got that. Do I send it again? And then, but luckily there's a pandemic going on and I was stuck at home and trying to take care of my kids and everyone. I wasn't really doing a whole lot in general, so it worked out kind of well.

**Pete:** So why'd you come not do a whole lot here? And it seemed like a great plan.

**Corey:** Yeah, exactly, exactly. So, uh, but yeah, actually we originally were just gonna do, you know, so like a part-time thing or a consulting thing. And what happened is like the more we talked about it, just about, you know, what the company is doing today and, and how important it is for a lot of companies to reduce their spend because it's, it's in many cases a difference between Do we lay off some engineers that took us years to find and train up, or do we turn off all these servers that this team totally forgot about? As the economy started to really get questionable, I was like, this is actually a lot more important of a thing. Having been in the Amazon ecosystem for 10 years now, I think that was another big draw, which is I got to continue on in that world. Keep using some of that experience because it's a lot of fun, you know, to kind of chat with folks and all of these different stages of their growth.

**Jessica:** [00:14:41] So is this a good time to be in consulting if your consulting is saving people money on their AWS bill?

**Corey:** I mean, I would believe so, but my first full day was Monday, so I don't have a lot of data points on this one. Um, but I think saving money really never goes out of style. I think people are always interested in saving money, but I think when when the April bill comes in, when the, you know, the March bill came in, the April bill comes in, people start looking at that going like, hold on a second, like, what's— what is this?

**Jessica:** Now if only you could store oil in the cloud, right?

**Pete:** Maybe if you evaporate it badly.

**Jessica:** That sounds like it might have environmental consequences, but it would definitely have some dark nuance.

**Pete:** Yeah, a slightly more nuanced answer is that Something that I've noticed for a while is that what customers tell me and what customers' actual pain points are aren't historically aligned super well. What happens is, is you wind up with someone in finance getting an Amazon bill, and they see that it looks like a phone number that isn't theirs, so they start to worry and they wonder how many books engineering is buying. You then have that move through about 5 different levels of corporate telephone to the person who spun up a cluster but is magically never allowed to see the bill, and it turns out the pain is not that it's too expensive, but rather that it's far too difficult to figure out what the cost drivers are and allocate that. So it comes down to understanding, optimizing, and predicting it. Now that we're suddenly seeing a recession-style pandemic event, customers are a lot more accurate when they say, so what are you here to do? We're here to save money. Now suddenly that's true rather than just understanding it. So it's simplifying aspects of the consulting, but it also means that now there's a little bit less nuance when we have those conversations. It used to— we used to say, look, this is gonna sound like a dumb question, but why do you care about the AWS US bill? Well, now it actually is a dumb question because most of our inbound folks that we're talking to, there's a very clear reason why suddenly all of their projections have magically shifted.

**Jessica:** [00:16:43] You mentioned that the engineers turning on the instances do not get the feedback of how much that's costing. It's like we did DevOps in order to give people the feedback loops of the consequences of their decisions. And yet with cloud, we just took that away.

**Pete:** To some extent, yes. Although you've always had this problem with traditional data centers too, but just was buried in year-long, multi-year cycles. So that's part of it.

**Jessica:** Yeah, kind of the beauty of cloud for me anyway is that there is any hope of ever measuring how much it actually costs as opposed to the data center people burying it in the cost of new projects because they're only allowed to get budget for new projects. So they roll all that maintenance into it and you wonder why your data center projects are so ridiculously more expensive than they really are.

**Pete:** Oh, don't worry. You can still get away with financial hijinks in the cloud too. It just tends to look slightly different.

**Corey:** Exactly. I mean, that's, that's the interesting part too, with a lot of these projects. Like you might have people that are doing the DevOps and they, you know, you build it, you run it world. And, and it's a great way to move fast. You give each team the authority to do what they need to do. Um, but in many cases, like, It's super nuanced. I mean, there are bugs that Corey and crew have found with Amazon network data transfer. I think my favorite being is that it's cheaper to transfer data between us-east-1 and us-east-2 than it is between availability zones, something of which I don't think anyone at Amazon realized or knew. It was shocking, right? But that's just one of many examples. For people who have legitimate spend on Amazon, or probably any cloud provider, Amazon being obviously the biggest, the number of line items in their bill could be tens of thousands or millions. I mean, the number of pages in their bill could be measured in hundreds of pages, depending on how they're spending their money and what they're doing with it.

**Jessica:** [00:18:47] Don't print it out.

**Pete:** Oh, yeah. Again, you might wonder what a non-legitimate cloud spend is. Well, that's my retconned origin story, where 10 years ago, I spun something up as a test, and I've been paying 22 cents a month ever since. Until 3 years ago, I snapped, swore revenge, and here we are.

**Corey:** I feel like that was the other, the other reason that I knew that this is something that I enjoyed was a similar story. A few years ago, I was cleaning up my Amazon account, and I, I went through and looked, and I had this 2-cent Glacier charge— Glacier— in my Amazon account that I just did not understand. It was 2 pennies. I could have just ignored it Like I had been ignoring it for many years, but I was like, no, I'm going to solve this. I went through the most convoluted series of documents on the Amazon site in order to find some legacy vault that had probably been sitting around since Glacier was first announced many years ago, to then run a series of commands, and then I finally was able to delete it through a bunch of looping and a bunch of really terrible code through the Amazon command line. It probably took me 5 hours. To do that.

**Matty:** [00:19:54] And how many things did they charge you for deleting it?

**Corey:** Oh, well, yeah, there was, there was, uh, I think there was, there was— I definitely got hit on the API calls because I had to do so many calls in order to find like every file in the vault or whatever the scenario was. But the end result was, yeah, I spent like 5 hours to save 2 cents a month, but it's not on my bill anymore. And you really can't put a price on that.

**Matty:** That's what matters. Well, it's very much— I've always felt like, because I have that 22-cent charge too, And it's like the Friends episode with Ross and Chandler, like, I want to quit the gym, right? Like, it's easier to quit a gym than it is to get rid of that last little bit of your bill. But if you have more than a 22-cent bill, so what are kind of the misconceptions? I don't want to say mistakes, but where are people missing when they're thinking about managing cloud spend? And this can be a misconception that's happening at a practitioner level or at a strategic level. What are people missing?

**Pete:** Pete, do you want to take this one or should I?

**Corey:** I'll start with one that is, I think, is where people miss out on. And it's not necessarily like, you should do this and you'll save money. It's, you should do this because a couple of years from now, you're going to look back and thank yourself. And that is having a clear, concise way of tagging your usage of things in the cloud. But when you think about tagging, you want to think about basically how your company makes money by using the cloud. And maybe I'm more biased because I've worked for a lot of SaaS companies, but the SaaS companies are the ones who are selling some sort of service, and they're trying to figure out essentially how much does it cost per user? What is our cost of goods sold? And the reason why, you know, 2-year-old you is smart for adding those tags is because Current you is going to have the CFO roll over to you one day and say, what is our cost of goods sold? And you have to have a way of being able to slice and dice that data. I think the more challenging part of that is, and there's ways to do it in Amazon, is to not only have a structured policy, assume your users are not going to listen to you or follow it at all, and find a way to enforce that policy so that if they don't create the proper tagging, you just start deleting resources. Right underneath them. Because if you just start having stuff spin up, and then you start running reports, and it's like, oh, all this data is not tagged, or all these servers are not tagged, you're going to just spend way too much time walking around and saying, is this yours? Is this yours? And everyone's going to say, it's not mine. And you say, okay, cool. I'm going to shut it down.

**Pete:** [00:22:27] The slightly kinder approach is to block it off with security rules or tightening up permissions, but no one understands IAM. So yeah, just turn it off. It's easy.

**Corey:** Just turn it off. I take the scorched earth approach.

**Pete:** Worst case, it's not that hard to find another job.

**Matty:** Come on.

**Pete:** But another, another more common approach I've seen too across the board is— it was all the same month— I had 2 or 3 customers ask me about Alexa for Business, which is— why the— why are you asking me? It's a $3 charge. Why are you— oh, that's right, the bills are alphabetical. And this is a microcosm of what we see across the board. Which is that we have all of these customers who are focusing on their internal narratives and the first thing that they see. I had a very early customer that was focused on cutting their developer environment where they wanted to have something technical that would spin things up, spin things down, have a Slack bot weighing in or a Chime bot— just kidding, Chime has no customers— and they went, okay, great, let's go ahead and build that for you, but first let's do an analysis. And oh, development spend is 3% of your bill. Now, originally, when you were first building this out, it was your entire bill, but then your product caught fire, built traction, wound up spending up something significant, and now the development bill— yeah, you could save some money, but there is a lot of other things you can do first that don't require disrupting developer workflows and have a dramatically outsized impact relative to the entirety of the development environment spend. So it's focused on the right part of the story, and sometimes I find one of the most valuable things we can provide is that unbiased third-party perspective where we haven't been exposed to the internal narratives around what the bill contains.

**Corey:** [00:24:08] Yeah, I think that— I think, Matt, you kind of mentioned it before, or maybe Jessica, you were talking about the— we gave everyone the feedback loops around when you deploy a thing. And there are some plugins I've seen for things like Terraform and other stuff that you can know what the cost of what you're about to do is going to cost you. Honestly, I really fear for the future in the Kubernetes space, because if we already have this abstraction that people don't understand what it costs, when you suddenly start shoving containers into a thing where you don't even know what's underneath, like the underlying servers are just—

**Jessica:** How do you tag that?

**Corey:** Yeah, how do you tag that? That's an interesting challenge.

**Matty:** I also wonder, even if you expose the cost that, hey, if you press this button, developer, it's gonna cost X dollars, who the hell knows the context of what that amount means, right? So like, to me, so that could go both ways, right? It could be, I could sit there and it could be the scary button that says, if you do this, it's gonna cost $500 a month. And I'm sitting there going, well, I sure as shit don't wanna pay $500 a month. That's a lot of money for me. But for number one, hopefully my organization has slightly deeper pockets than, you know, my debit card. But, but there's the context of what's expensive to me versus a corporation, then also the value, right? Again, the context and the nuance of this amount in a vacuum, just a dollar amount doesn't mean anything.

**Pete:** [00:25:37] And even when you tie it to individual teams or users, it doesn't work out well. Then you have accounting coming down and asking, who the hell is Jenkins? They're costing all the money. And you explain, no, no. That's our continuous integration and build system. It's fine.

**Matty:** It's our butler.

**Pete:** Oh, okay, and they leave, and then Jordan Enkins crawls out from under the desk. Whew, thanks. You really saved my bacon on that one. But without nuance or context, it's impossible to look at a bill attributed to users and say, oh, that's super expensive versus that's normal. Why is that person costing a king's ransom every month in AWS charges? Oh, because they work in data science and that's what they do. You can search through vast quantities of data to unlock the hidden promise of ML and AI, which is that they can find anything they want except the business model. So as long as you're not expecting a return on it, oh, can data science do some amazing stuff, but bring money, you're gonna need it.

**Matty:** So I feel like, Pete, you might have already answered this, but I'm gonna ask, 'cause I was gonna ask the question and say—

**Corey:** [00:26:41] But I didn't like your answer.

**Matty:** I didn't like your answer. Well, I wanna see if you'd answer it the same way. So I was going to ask and say, okay, I can only do one. First of all, this is ridiculous because who could— how could this ever be a situation? But let's hype it. Let's make this hypothetical where somehow this constraint exists where I can only do one thing to get better about my cloud spend.

**Pete:** And that you're effectively a walking microservice, right?

**Matty:** Exactly. Yes. And, and that one thing is not to hire the duck.

**Jessica:** Matt has only one fuck to give.

**Matty:** I do.

**Jessica:** Where should he allocate it?

**Matty:** Where do I allocate it?

**Pete:** And it's clearly not written in Rust because then the only thing you could do would be to talk about how great Rust is.

**Matty:** It's like CrossFit. But what is it like that one thing? And I feel like Pete, you might've said this when you said it's about tagging, but maybe let me put it on this thing instead of— if I'm trying to get an understanding, 'cause I can't invent a time— you can't be like, okay, the first thing you do is invent a time machine, go back and tag all your shit. Right?

**Corey:** [00:27:43] So if you do figure that one out, please let me know. Right.

**Matty:** If you do, there are better things to do with that invention, by the way.

**Corey:** Yeah, exactly.

**Matty:** But if I'm going to try to get some understanding and get my arms around where these happen, what's the first thing I should do? What's the most important thing?

**Corey:** I mean, the first thing that I would probably do is Amazon has a bunch of reporting that you can enable for different things. So let's assume you just roll in hot to a company, brand new, first day, uh, you own the Amazon bill, which I hope is the case. I mean, every company should have at least someone who owns it. There should be some— I mean, it's a, it's a line item, it's a budget. Someone should have a number on their head in some way. Someone should care about it, really. But, uh, there's so many different great reporting, uh, usage statistics you can turn on. They're not on by default. And you can go through and turn those on in the billing sections. That will start to generate data. You can do it at like an hourly or a daily basis. But the beauty is it all goes into S3, which is basically free, uh, as long as you're not storing, you know, hundreds of petabytes of data. It's the scale we're talking about.

**Jessica:** [00:28:53] Unlike Glacier, that can cost you hours and hours.

**Corey:** Yeah, that 2 cents. I'm never getting that 2 cents back. Um, but, you know, enable those reporting options because if you enable them now, like the first day that you're in there. Some of them take weeks to actually generate stuff, to generate useful insights. So that's kind of the first step, because if you can start getting there, then maybe—

**Jessica:** Generate useful insights, does that involve data science?

**Corey:** I don't know what goes on in these systems.

**Matty:** That is the oil that's in the cloud. It's snake oil.

**Corey:** It's the thing where it's like you just turn some stuff on and you're just like, 2 weeks later, you're like, nothing's in my bucket. Where's the data, and then just magically someone at Amazon was like, oh, that flashing light has been flashing. We should probably hit the button now. Then all your data ends up in your bucket. I think that's how it works scientifically.

**Pete:** Yeah. When we sell more upscale snake oil, we try to refer to it as serpent grease. Just be aware of that.

**Matty:** Now, I think we think about— there's a lot of fallacies around cloud when it comes to cost and why. That we've gotten past the conversations we had 10 years ago, which is that you go to the cloud to save money, right? You go to the cloud to shift CapEx to OpEx. That's the end of the story. But we had all this, the promise was that our, I was being a little sarcastic with that, but that's, at least that's the way we used to talk about it 10 years ago when I wanted to get some—

**Pete:** [00:30:17] Oh, we go to cloud because your CIO read the in-flight magazine.

**Matty:** Yes. But the promise is the pay-per-drink and like your consumption is more closely tied to value and all this beautiful stuff. How much do you see that actually being true, or are we just over-specing everything and overbuilding shit just like we did in the data center 10 years ago? Yeah.

**Corey:** I mean, I can't tell you how many times I worked with engineers who were like, can we spin up one of those like X2413, you know, triple X large boxes? I want to— I just want to see what 2 terabytes of RAM is like. It's like, no, you can't have that. It's $13 an hour. It's more than you make. Like, we're not spinning that up.

**Jessica:** You can have it for an hour, right?

**Pete:** See, that's a common misconception. Oh, you can spin it up and have it for an hour. First, it's— until you forget, and it's multiple terabytes of RAM. It takes forever to boot. Secondly, when you're done waiting for the boot, you've already lost interest in this ridiculous thing. So it's just sitting there churning in the background all the time. And oh my stars. And then it turns into a Reddit post because obviously if you suddenly have a bill surprise that costs 3 times your annual salary, the immediate thing to do is whine like a small child on Reddit rather rather than, I don't know, opening a support ticket like a responsible adult might.

**Matty:** [00:31:33] No, the first thing you do is you delete all the emails for a while.

**Pete:** Ah, yes.

**Matty:** Then you, then you post on Reddit.

**Pete:** Well, aren't you fancy, Mr. I got my email account to work fine. You truly are the ultimate DevOps.

**Corey:** I think you're right though, Matt. I think you're right in that most people are probably still over-specing. They're just picking an instance. I mean, there is a challenge because you're like, all right, I'm running this, JVM app, so I need some memory, and maybe I need a couple CPUs, and then you run it, and you get the great line, which is, it's slow. So you double it, and you make it bigger, and then, you know, maybe there's no metrics on it, so you don't even know if it's slow because of that, or if it's slow due to something else. You know, I would walk around one of my old companies, and just, you know, bug the developers, and just say, you know, are you sure you need that R4 2xlarge? Because the CPU hasn't moved in like 4 days. I'm just going to move it to a T2 for you. And so it was hilarious because I used to say, I'm going to move your stuff to a T2, and magically everything got really slow that they hadn't used in forever. And then I just stopped telling them because I was like, you know what? If I don't tell them, you know, it's like we've secretly replaced your workload. Let's see if they notice. They never did.

**Jessica:** [00:32:48] It's a test. It's a test. So is Lambda going to solve this for us?

**Corey:** Hmm. I feel like Corey's got a good answer.

**Pete:** I feel like you were very far away from the microphone while asking that. We could call that the silence of the Lambdas. But yeah, will Lambda solve all of these things for you? No, Lambda solves a very different problem, which is, sure, we could fix AWS services natively so it does what customers want, but screw you, go fix it yourself, ideally with a Lambda function.

**Corey:** That is true how many of their blog posts end up being just— I don't know if it's just a long-form article.

**Pete:** And in conclusion, fix it your damn self. Yeah, that is more or less what a lot of those blog posts turn into.

**Jessica:** So is Lambda like the fan fiction of AWS APIs? Because that's like Harry Potter fan fiction. It's all about trying to fix the plot lines.

**Pete:** Uh, generally not, because very few fan fiction, uh, pieces tend to be quite that scatological.

**Jessica:** It does take a lot of fucks to get a Lambda deployed.

**Matty:** Oh my God, there's a whole queue of them.

**Pete:** [00:33:50] Oh yeah, that's why I think on some level there is going to be a job posting someday for serverless fucksmith.

**Jessica:** No, really, I care. I care.

**Pete:** All right, I think they tried to call it API Gateway originally, but here we are.

**Matty:** So for those who don't, uh, pay attention to Corey on Twitter, and as you should, I was just gonna say you should, but you know, the— but that being said, one of, one of, one of, uh, Corey's favorite favorite things to go after is poorly named offerings from AWS. So which is fundamentally the worst, the worst named thing in AWS, period?

**Pete:** The worst named thing in AWS. Pete, you start with that one.

**Corey:** I— wow. There's 2 that come to mind. One, for complete lack of Googling at first. One, I don't even know what they were thinking, but anyway, when Amazon Snowball came out, the Snowball service, which admittedly is pretty awesome, You can mail hard drives. The bandwidth was a joke. The bandwidth of a, of a station wagon full of hard drives is, you know, faster than internet connections are. Um, but it's great. You can mail one of them, you can mail 30 of them. Like, they're pretty impressive and just how they're built. Just terrible name. Terrible name.

**Jessica:** [00:35:09] And don't name it Glitter Bomb.

**Corey:** They're just— I don't know. Anyway, just, it was bad when that first came out because of course what does everyone do is they go Google it and then You know, you see what it's— what the Urban Dictionary says. So that's the lesson to every product manager out there. Urban Dictionary, your product first. The other one that I think is hilarious—

**Matty:** and ask a 14-year-old.

**Corey:** Yeah, that too. Uh, ask— yeah, ask your nephew, ask your kids if you got kids.

**Jessica:** Some expert in scatology.

**Corey:** Exactly. And then the other one too that I think, because they keep on building on it, is all of the AWS Systems Manager, Manager Systems. And it's just become a great meme at this point with how many of the different services, of which I know Corey probably could name them all, have some sort of—

**Pete:** I can then keep going and then challenge people which ones I made up. Even Amazon employees won't get that one right.

**Matty:** I would have thought that was part of the interview cycle at Duckbill, was to be able to rattle off the most ridiculously recursive—

**Pete:** oh, while under stressful conditions, we're big believers in waterboard interviews.

**Jessica:** [00:36:12] Ouch. So it's like enterprise Java now, except in services.

**Pete:** Yeah. I mean, at some level, asking what the worst named AWS service is, is like asking someone who their least favorite child is while they're on trial for drowning them all in the tub. It's a difficult question to ask because you are so rife with opportunity and choice. Personally, if I can take a slightly more serious bent on it, I think that any of the services starting with the word simple because the unspoken message there is that, oh, this is easy and straightforward. The fuck it is. Try using one of these things for anything non-trivial, then come back and tell me that, genius. It's one of those, it feels like elements of Google culture seeped into the naming early on. And credit where due, they renamed a couple of those things. Simple Systems Manager, I'm not kidding, used to be its original, one of its early names. Fortunately, they tend to rename things exactly once and then stop. Unlike Google, which turns this into a seasonal habit with their messaging product.

**Corey:** [00:37:18] Although I had a good one earlier today, Matt. You had mentioned before, like, it must be part of the interview process to come up with a longstanding one. Well, something that we just noticed came out today was AWS Cost Categories, which admittedly looks kind of cool, but of course we need to find a way to make fun of it. So I just said, what about AWS Cost Categories Systems Manager Cost Manager as a good alternative title? So I don't know.

**Matty:** And then I thought that was going to then turn out to actually be a service.

**Corey:** I know, then I went and searched it and they're like, in preview. In preview, Systems Manager Cost Manager. Manage your Systems Manager cost management in the cloud. In preview. Contact your TAM.

**Matty:** I remember that the naming thing reminds me of like when I was going through kind of the beginnings of my DevOps renaissance or whatever, and I was working primarily in Microsoft shops, and I was sort of saying, I was like, it's very interesting because at the time, at least, and now Amazon is proving this differently, all of the Microsoft products from an ops perspective had very dry, very descriptive names. Operations Manager, SQL Server, whatever. Then I go into the open source cool world, and they're called Snowbird Gremlin Doodle or whatever. I was like, how do you have a serious conversation? Right? And then we all know how that actually worked out for anybody. Um, but now it seems like Amazon's maybe, you know, putting, putting the lid on that and saying like, no, we're gonna— like Microsoft Hold My Beer, right? You thought you had ridiculous names for things.

**Pete:** [00:38:52] No, but far and away the worst cloud product name that I have seen, full stop, and I'm not even slightly kidding on this, is Azure DevOps. And the reason is, is I was talking to a hiring manager 2 years ago.

**Jessica:** They should have called it Arrested DevOps.

**Pete:** Well, what they said was, look, this— look at this awful resume. Someone lists Azure DevOps as if it's a skill set. Let me junk pile that. It's no, no, no, no, no. That is an actual terribly named service. When your service name is so shitty that it negatively impacts the careers of all those who dare to mention it, that's how you know that it is the worst name ever. Now, never want to take a challenge lying down. I'm sure Oracle's currently working on a service that features a racial slur. But until that gets launched, we're still going to go with Azure DevOps being the worst.

**Matty:** So a little-known fact is Microsoft bought GitHub so that—

**Pete:** I believe you'll find it pronounced Jith-ub, but please continue.

**Matty:** Microsoft bought GitHub just so they would be able to get rid of Azure DevOps, right?

**Jessica:** You know, or, or at least be able to like make up for it, right?

**Matty:** [00:39:57] Or just, just have an excuse to retire it and say— and the thing is like If you look at the— not the etymology, but sort of the, the journey of all the things that led to the name Azure DevOps, it actually makes you say Azure DevOps isn't that bad. Because, oh, you think, you think Amazon— you think the system manager manager of the system manager stuff is ridiculous? Go look at all the product names of the various Visual Studio products, because it would be like Visual Studio Online Server for Source of the Visual Studio You know, whatever. And so it sounds amazing to be like, well, Azure DevOps, it's like actually not bad. But when you seem to actively be going out of your way to like bait people on Twitter with your product name does not seem to be like a—

**Jessica:** But it's great in the in-flight magazine. I mean, it can't top cloud, which like you read it in the in-flight magazine and then you look out the window.

**Pete:** Among the clouds.

**Jessica:** Yeah, that's pretty good. Exactly.

**Matty:** But so we used to joke about that.

**Jessica:** [00:40:57] You want to buy DevOps, man? Microsoft will sell you the Azure DevOps. Well, like I say, that's like blue, like the sky when you're looking at the plane window again.

**Matty:** Yeah, yeah, you can't buy DevOps, but I sure as hell can sell it to you. Yeah, I'm also curious about these in-flight magazines, and that's a little bit of show history. So in the very beginning, we always said that the point of the show was for when your boss says, I read about DevOps in the in-flight magazine. And then for a long time, we talked about like, where are these in-flight magazines that are like— Hemispheres does not talk about DevOps or whatever. And then somebody found one. Someone did. One listener did say, I found in the in-flight magazine something about DevOps. So, but we never asked them to share.

**Jessica:** Are they in first class? Because maybe they have different magazines.

**Pete:** The longer that this pandemic drags on, I think you'll find that the better the overall level of corporate decision-making improves just due to lack of executive exposure to airport enterprise software ads.

**Matty:** What do you think is the product that is not advertised in airports but should be?

**Corey:** [00:42:02] I know that, I know Corey, you had forever wanted to do a ridiculous advertisement at re:Invent just because you can.

**Pete:** Yeah, last week in AWS, my ridiculous sarcastic newsletter, because save money by choosing Oracle shouldn't be the funniest thing you read this week. I feel like that would be an interesting direction to take things in, but I don't know, during a pandemic, I'm trying to remember what being at an airport was like. Now it seems that it's been so long that, yeah, I have to deal with my family. I have a recurring schedule that's relatively constant. I don't know what to do with myself.

**Jessica:** I have no excuse to not go to these meetings.

**Matty:** Yeah, somebody asked me how I was dealing with it, and I said what I need to start doing is getting little plastic cups and United napkins to pour my Diet Coke into, and then it would feel a little more comfortable, right? If I could be— you know, everyone's like, oh, you got to have the window that looks like the airplane. I'm like, no, I just need to have my pop in with a little, the little United.

**Pete:** And roll a die every time it comes up with some number or whatnot. You like punch yourself in the face or spill it all over yourself. I'd call it turbulence Yep, fair.

**Matty:** [00:43:10] So how has the world— besides the fact that a lot of your customers actually want to save money now and not just talk about it, have you seen anything interesting or just has anything changed in how you're doing your work besides the fact that we aren't all hanging out in airport lounges all the time like everybody seems to think we do?

**Pete:** Sure, a big trend that I'm seeing as well is that people did a lot of projections and made commitments to various cloud providers on a multi-year basis that assumed the numbers would always be up and to the right forever. Now it's a question of, huh, looks like things aren't quite working out like we anticipated, can you help us? And that's been an interesting area of exploration for us. We've always had a pretty decent hand in the cloud contract negotiation space, although we don't generally talk about it. But now we're seeing it come from a different angle. Rather than the finer points of a deal, it's more about, okay, we've made a commitment that now we might not live up to in the way that we anticipated. What do we do? So having strategy planning sessions around that has been very interesting and wasn't something that I originally anticipated. Something else that's surprising me as we sit here in the midst of the plague more or less, is looking at what customers' traffic has been doing. And in some cases, it's skyrocketing, and in others, it's falling through the basement. On the latter case, what's interesting is that even though we are seeing the reduction in customer traffic and usage, we're not seeing the bills— the spend on the infrastructure decline with the same degree, in some cases at all. So, oh, people sort of misunderstood auto-scaling to mean it only ever scales up. And they can be forgiven for that. Originally, when you have customers piling on, if you fail to scale up, you're dropping money on the floor and customers are getting angry and leaving. If you fail to scale down, well, you're just burning extra money in your account for that hour. It's not the— the risk profile was very different. So no one spent a lot of time focusing on the downward side of that curve. Well, now we're being forced to evaluate that, and here we are.

**Matty:** [00:45:18] So it's kind of saying you're kind of proving out what we talked about a little bit earlier, which was The beauty and the promise of cloud was this elasticity of that I would only be paying for what I'm using, and what you're finding is that I am paying for what I'm using and what I used yesterday too, even though I don't need it today.

**Pete:** Well, here's a fun part about the billing system too that ties back to the idea of, oh, when you spin something up, you should know what it costs. If you wind up pushing a deploy and your CI/CD system didn't tell you for a minimum of 8 hours that whether it was going to work or not, you would slow down, you'd lose productivity. If that were even slightly acceptable, you would see actual customer adoption of AWS CodeBuild. The fact that you aren't tells me that it's not, but the billing system for all of these cloud providers operates on at least an 8-hour consistency model. So hey, that thing you did yesterday, boy, did that screw the pooch metaphorically and possibly figuratively. Great, there needs to be something that closes that loop cycle. Now it's very much an after-action reporter. Oh, here's the mistakes you've already made. You should have tried harder.

**Jessica:** [00:46:26] It's not like when you get the bill for that month.

**Pete:** Yeah, exactly. Or if— yeah, that's the more common case, if you don't think to check the bill the next day. But if you look at the billing system right after you spin up, right after you do something that is phenomenally expensive, it will not show up for 8 hours or more.

**Jessica:** Eventual consistency.

**Pete:** Yes, putting the eventual in eventual consistency.

**Matty:** Your money is eventually consistent in that it is consistently—

**Pete:** That is a database that is so slow blockchain is jealous.

**Jessica:** Eventually consistently ours.

**Matty:** Well, this has been a lot of fun, and I hope we've, we've learned that things, while they may seem super terrible, they in fact are super terrible.

**Jessica:** Thanks, Matt.

**Matty:** But this is also— this is the thing.

**Jessica:** This isn't the terrible we expected.

**Matty:** No, it's a different terrible. It's surprise. Prepare to be surprised.

**Corey:** What I feel most bad for, honestly, out there are— you know, there's people out there who have just re-upped their RIs savings plan a couple of months ago, the reserved instances a couple of months ago. Maybe they just negotiated a private pricing or enterprise discount program. But then I think about all the companies that haven't, that haven't done that yet. And right now, and over the next couple of months, it's probably a really good time to do that because if you're still paying retail pricing, if you're spending money on Amazon, money that you look at and go, wow, that's a lot, doesn't have to, and that's a different number for everyone, my guess is that you could probably pay less because no one out there really pays retail pricing. You can always get it cheaper if you really try. And I think even if you negotiated something and you had some good leverage, you'd go back and be like, yeah, about that. I mean, I will say I've been an operator of Amazon for a while. I've made purchases of RIs that I was like, whoa, those are not the right nodes I need. Can I swap them out? And they'll help you out. I mean, they're always up for a conversation. But, um, you know, as Corey said, I think what's most interesting is that traffic is going down for a lot of these companies, but their bill isn't. It's like they almost never plan for this, this, this contraction.

**Jessica:** [00:48:42] The definition of elastic is not that it stretches, it's that it snaps back after it stretches, sometimes with lawsuits.

**Matty:** I would say, speaking of lawsuits, this is the time when we'd say, where can we see you in upcoming conferences? But the answer is not. But there have been a lot of fun virtual ones. I'm trying to think if there's anything interesting coming up. Are any of you doing anything besides the random, the live tweeting of earnings reports or, you know?

**Pete:** Well, those are certainly entertaining. I don't have anything on my dance card at the moment. For some reason, people keep forgetting to invite me to submit for conferences.

**Jessica:** Invite you to submit.

**Pete:** Oh yeah, hey, we'd love to have your talk at this thing, maybe propose something. You know, otherwise I don't notice these things are there because it's difficult for me to figure out which are the real conferences and which are just fake Twitter hashtags that someone put up there to thwart me.

**Jessica:** [00:49:42] Yeah, Corey, I want to know where people can find you on video because this is the first time I've met you in— I guess it counts as meet these days— on video, and You remind me of someone, and it's someone who's on MST3K. Might be one of the robots.

**Matty:** I was gonna say Tom Servo. I could see, you know.

**Jessica:** Yeah, it's entirely possible.

**Pete:** I do have a face for radio.

**Matty:** Also, your hair is the longest I've ever seen, Corey.

**Pete:** I'm debating if I shave it all off, cut it, or just let it grow free.

**Jessica:** It's a thing. We may discover that which of us are in fact robots by how much our hair grows out.

**Corey:** Oh, I'm a little worried that it's— my hair is going to end up looking like it did in high school. And, you know, the '90s were a weird time, and I don't like to talk about it.

**Pete:** And I heard phrases that I didn't know that you were necessarily going gray in high school, Pete.

**Corey:** That's the other downside of long hair is you just keep seeing more gray coming out. Like, what is going on?

**Jessica:** Credibility, man. Credibility.

**Matty:** [00:50:44] So speaking of credibility, If you'd like to see the show notes of this episode, of which they will be minimal, um, go to arrestedevops.com/cloudcosts. And if you go to arrestedevops.com/itunes, yeah, leave us a review in the iTunes store. That's a thing you could do. Uh, we might read it on an episode or we might not. I think we only did that once and it was Michael Ducey who wrote it under a pseudonym. Um, and if you're into Spotify and iHeartRadio, you can find us there. We're all over the place. So, you know, but you, you already found us somehow because you're listening to this. So I don't know why I'm telling you where to listen to us when you already are listening.

**Corey:** Maybe I'm listening on iTunes, but now I'm gonna go to Spotify.

**Matty:** Now you go to Spotify.

**Pete:** Maybe you're listening to this once the episode comes out and I'm blasting it from the rooftops at 3 in the morning.

**Matty:** This is a thing you should do. It always just amuses me, by the way, like I meet people who are not in the industry, who are not like tech people that like work for a living and do real jobs, and it comes up about doing a podcast, they're like, oh, what's your podcast? I want to listen to it. I'm like, no, you don't. I mean, I appreciate it, but like, and the funny thing is the episodes that I point people to who are not industry people are the ones that our regular listeners cannot stand, which are our year-end wrap-ups. Yeah, that's just us fucking around for an hour. Like, to like real people, those are good, but like if you actually want to learn something, yeah, don't. But yeah, Pete and Corey, thank you for taking the time. I know you have a lot of places you should be right now, like in the other room of your house.

**Corey:** [00:52:22] I have to take a long trek downstairs, but no, I thank you so much for inviting us and having us come out. I feel like you You three people are the first three people I've talked to that are not my family in quite a few days. Quite a few days.

**Matty:** We also didn't ask you about the soup you made last night, Pete. Like the reason we couldn't record last night is Pete was making soup.

**Corey:** Yeah, I was like, hey, do you want to record this podcast? Well, I can't do it tonight because I just—I'm making some soup, so I'm really slammed. Okay.

**Pete:** I think he was souping up his kitchen or something. I don't know.

**Matty:** Also, everybody out there, so this is soup is the new sourdough. So everyone who's like playing around with that, it's like, no, no, like if you're legit, you're making soup at this point.

**Corey:** So let's say you started off, you made the sourdough. Okay, great. And then a couple of days went by and you're like, sourdough is not actually that great. So let's make some French toast out of it. Cool. That works too. I got some French toast ready with some old sourdough I got as well. But now you're at the stage of this quarantine where you got a bunch of stuff in your fridge and you're like, what do I do with it? You put it into a pot and just cook it forever. That's what you do. Or you make a frittata. That's the other quarantine move.

**Jessica:** [00:53:27] If you're wondering, plenty of time to—

**Corey:** yeah, we could just start doing some recipes right now.

**Jessica:** Forget about technology. So much cooking, so much cooking going on.

**Matty:** So with that, I'm Matt @MattStratton.

**Jessica:** I'm Jessica @Jessitron. This is Arrested DevOps, and remember, there's always DevOps in the great banana stand in the cloud. Which is the in-flight magazine.
