**Trevor:** [00:00:00] Hey, you're the guy from the podcast. I want to work with you because sometimes you sound smart, although usually you don't really say anything.

**Matty:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness.

**Michael:** It's also time for The Goat Farm, the podcast on DevOps in the enterprise. This is a special joint podcast episode with Arrested DevOps and The Goat Farm.

**Matty:** I'm your ADO co-host, Matt Stratton, @MattStratton on Twitter.

**Trevor:** I'm your ADO co-host, Trevor Hess, @TrevorGHess on Twitter.

**Bridget:** And I'm your ADO co-host, Bridget Kromhout, @bridgetkromhout on Twitter.

**Michael:** And I'm your Goat Farm co-host, Michael Ducy, @MFDII on Twitter.

**Trevor:** Arrested DevOps is brought to you by TenthMagnitude, a company that figures if you're listening to this podcast, you must be pretty cool. TenthMagnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can learn more about their services at arresteddevops.com/tenthmagnitude.

**Matty:** [00:01:19] This episode is also brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 70 common infrastructure tools, such as Chef, Docker, and AWS, so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog.

**Bridget:** As we said, this is a special joint podcast with The Goat Farm. You can subscribe or listen to their podcast that's focused on DevOps in the enterprise at goatcan.do, or goatcan.com if I recall correctly, for people who get confused by .do.

**Michael:** That's right.

**Bridget:** We'll be talking about the changing world of software sales and how the game changes as the world has moved away from proprietary software to open source.

**Matty:** Yeah, a little earlier this year, Michael and I were in Seattle working on a training session with the Chef sales force and the sales engineers, and we started having a conversation around the importance about being a partner with our customers as opposed to someone just selling a bill of sale and why that's important and how we can provide leadership to our customers, things like that. And of course, this turned into the idea, hey, we should do a podcast about it. And here we are doing a podcast about it. I think let's go in and talk a little bit about those of us who are on the show. We've all had different experiences being on both sides of the vendor table, I think. So Michael, you want to tell us a little bit about your background from a sales perspective first?

**Michael:** [00:03:04] Yeah, sure. So actually, if I remember the conversation that we had in Seattle, It was more along the lines of when we were doing this training in Seattle and the training that we had kind of developed. So this was something that we had kind of jointly done, you and I, Matt, to— and other members of our team as well— to kind of come up with like, what are these topics that we need to cover with the sales engineers? What's really funny is what we ended up doing was we did some value stream mapping and kind of teaching about value stream mapping and doing some value stream mapping exercises. And then we also did some, some Kanban and kind of teaching about Kanban, how to use a Kanban board, and the interactions that we have with our customers. And the other idea behind the value stream mapping was how do we do value stream mapping and have those interactions with our customers? Hey Michael. Yes.

**Trevor:** Can you, can you just quickly go over what value stream mapping is?

**Michael:** Oh yes, thank you. So value stream mapping is essentially where you look at a process and you draw out what's called a current state map. And basically you just figure out, as, as a piece of work flows through a process, how do you start to look at it and see how much time is spent in different areas to add value to that piece of work that you're moving through the value stream as it is. And basically what you do is you build a current state map, and then as you start to refine that process and figure out where all the waste is, you basically end up going and building what's called a future state map that seeks to remove that waste. So it's this principle that comes from lean manufacturing, and it can be used in the world of IT as well, and there's this whole idea of lean IT. And if you remember The Phoenix Project, which has kind of become the, for lack of a better word, the Bible or the encyclopedia maybe is a better word, of DevOps, and basically it talks about flow all the time and improving flow, and Gene Kim is a big proponent of this idea of value stream mapping and increasing flow, and that's one of the ways that you can increase flow is through value stream mapping. So what we realized when we were doing this training is that we were kind of giving our sales engineers some fundamental principles of DevOps to use as tools to go out and have conversations about the Chef software platform with our customers. And so we kind of realized it was like, it elevates our conversations that we can have. So a little bit of background on myself, as Matt asked for. Sorry, Matt. I don't listen to you very well, do I?

**Bridget:** [00:05:52] Do any of us? I mean, are we supposed to?

**Michael:** No, no, usually that's the thing.

**Matty:** Ironically, I was muted because I was chewing when that whole thing was happening just now.

**Michael:** Yes, which is funny because there's video on and I see Matt eating a pickle. So I did— I've done enterprise software sales for 8 years, and one of the interesting things is I would think that most people that have interacted with me in the last 3 years, they would have had no idea that I work in sales. And I've been on the presale side of things for a long time, worked at BMC for a little while, worked at Instratius, which got acquired by Dell, and then have worked at Chef in a presales capacity. And now I basically manage the East presales team for the United States. And so that's kind of the background of my background, and then also the background of how we kind of got on this conversation of how do we talk to our customers a little bit differently, and how do we become less of the demo jockey or the sales tool or whatever you want to call it and bring more value to the conversation.

**Bridget:** [00:07:05] I'm sitting here laughing, thinking about Ducy being the sort of person who is going to show up and like, you know, wine and dine and play golf with a client, and my mind is just going to like, what? This isn't even going to happen. You definitely don't come off as that sort of sales tool, the stereotype.

**Michael:** Well, I like the wining and dining part of it, right? I mean, everybody likes good food, so. But the golf, yeah, not so much.

**Bridget:** But I feel like that stereotype maybe isn't completely realistic. And I'm speaking from the point of view of I've worked at a vendor for 5, 6 months now for the first time in my entire career. I spent like the previous 5 years or so being the customer who did not want to play golf. But I actually got to go to our sales kickoff and meet lots and lots and lots of our field, and not everybody actually matches that stereotype. I mean, certainly there's a lot of— there's a wide range of people, but there's plenty who are more like the folks on this podcast.

**Matty:** Well, I think to be fair, Bridget, you know, you at Pivotal, Michael and I at Chef, we don't represent companies that— I think we represent companies who expressively are looking at a different model. And we'll talk a little bit more about this ongoing, but there's a book called The Challenger Sale, and I'll provide a link that's The Challenger Sale in 10 Minutes in the show notes, and that'll probably get you everywhere you need to go. But what it kind of— one of the things it boils down to is in traditional sales, there's— basically what they point out in this book is that there's 5 different kinds of sales folks, or 5 different profiles. There's what they call the hard worker, the lone wolf, the relationship builder, the problem solver, and the challenger. So the challenger being what I think you will see more of, at least as an intent, from folks like Chef and Pivotal, and actually a lot of the folks in our space, right? Because that's the kind of approach that we're taking. I'm not trying to say that Chef or Pivotal have special sauce, but if you go to the majority of enterprise sales, you're going to see a lot more of the relationship builder, because just the way that things are happening, again, traditionally, I'm not surprised that your colleagues are not relationship builder types, that they're more challengers because they're the kind of people who want to go work at Pivotal. The same thing, the kind of people who want to work at Chef and to help be successful because we're also talking about disruptive technologies. Sure.

**Bridget:** [00:09:30] I want to disagree for just a moment, though. As the person who has not read this book, and so I don't really know what I'm talking about here. Relationship building sounds good, right? I mean, if the only thing you're doing is shaking the person's hand and playing golf, sure, that's a problem. But like, when I imagine a person going into a client or prospect and saying to them, do I have a solution for you, without building that relationship and understanding what the customer's pain and needs are, I kind of feel like you need the relationship before you can get to challenging them or whatever.

**Matty:** The relationship is that you and I have a personal relationship And you buy from me because you like me and we have a personal relationship.

**Michael:** Yeah, and there are so many of those interactions that take place where the CIO is just buying from the same salesperson that he or she has bought from for 20 years.

**Matty:** The relationship you're describing is much more along the lines of actually a challenger who has— the point of a challenger is someone who actually teaches the customer something about their business that they didn't know. And in order to do that, you have to have an understanding. And relationship building does work in certain industries and certain things. Like, again, all of these do work and they've been successful in one way or another. That's why people do them. But overall, challengers in the way that sales overall is happening today is a way of being successful because you're getting less and less of this procurement having power that they used to have that maybe they don't have as much, you know, because again, that relationship is not necessarily between me and the actual person who's implementing the solution. It's a relationship between the vice president of software procurement, right? Who— yeah. So we're backing— we're getting off into a tangent.

**Michael:** [00:11:21] Matt, can you summarize the other 4? So you kind of gave a summary of what a challenger is. What's like the lone wolf and hard worker?

**Matty:** And so the hard worker is, as their name sort of implies, is the person that just sits there and they put their head down and they make their outbound calls. And they follow up on their leads and they do their process the way they're supposed to do it. You know, but they do as— and they would be like, as we've talked about on the show before, you'd say they're compliant rather than committed, right? They're like, I do the stuff, I am a sales drone, right?

**Michael:** Yeah, and there's definitely a sales model where, you know, they try and look at it from an analytical perspective and you say, well, if you make 150 cold calls a day, you'll close 10 deals.

**Bridget:** Right.

**Michael:** Right, or something like that.

**Matty:** Yeah, the lone wolf.

**Michael:** That's kind of the hard worker.

**Matty:** Yeah, that's kind of the hard worker. The lone wolf is the, you know, you may have all, you know, anyone who's worked in the sales organization has probably seen a lone wolf before, which is the, again, they're the maverick, right? They're the person that goes off and they just sort of do things their way. They don't use Salesforce as they're supposed to. They don't do any of the right process, but they close deals because they have their own special way of doing it, and they probably brought a Rolodex with them from their last job and the last job and the last job. So they literally do their own thing, but they have results. We talked about relationship builder. Problem solver seems like that would be the challenger, right, but it's a pull versus a push. The problem solver is, tell me your pain, Bridget, and I will tell you how my software can solve your problem, whereas what a challenger is going to do is saying, Bridget, let me tell you about a pain that you don't even know you have, but it's actually— but let me guide you to understanding that pain rather than inventing one. It's not inventing one. Right? But it's helping you understand something about your business you may not have been aware of, or something about your industry. And then you go, oh my God, I didn't know that was even going on. And I may not even be solving for it with my software. It may be just a general thing. The challenger takes on the role of trusted advisor also, as opposed to the problem solver, which is tell me where it hurts and I will sell you the Band-Aid.

**Trevor:** [00:13:28] Right, right. And that's, that's kind of like where I'm getting pushed into now as I, as I've moved into this principal consultant position. 10th, I'm having to take on the role of the problem solver, at least as you've defined it, which is interesting because I wouldn't have thought of it that way.

**Bridget:** Trevor, you don't see yourself as being in sales at all currently, right? Because you're in a consultancy role.

**Trevor:** Well, I mean, I'm selling my company.

**Bridget:** Well, sure, sure. From your point of view, I mean, you've kind of worked side by side with Stratton and seen him in action for a while. Like, which of these— I'm going to put you on the spot and say, which of these would you put Stratton in when you first met him, and where is he now?

**Trevor:** Well, I mean, I think I would think of it kind of the same way, where I think Matt probably was a problem solver just because of the nature of consulting. You're usually being brought in to solve a problem that is known. You're not Maybe you are cold calling and letting people know, hey, there's this new thing you didn't know about that's hurting you. But I think generally it's, hey, consultancy, I have a problem, I need you to help solve it. And I think Matt now probably winds up doing half problem solver and half challenger. Challenger where it's, where it's the thing, and problem solver where he's being brought in. Yeah, I think Or go ahead, Juicy.

**Michael:** [00:14:56] Well, so what's interesting is, is that you have to wear different hats depending upon the customer that you're talking to. And so you have to realize really quickly if— does the customer already know what the problem is and wants to just try and find a solution, or is it a situation where the customer has read about this thing called DevOps and you've got DevOps on your website, so they called the DevOps company and to go buy DevOps. And we have to go in and challenge what that assumption of DevOps is and help the customer understand of, like, these ideas of continuous delivery and automation and all of those sorts of things to where they don't really understand where the problem is yet, and we have to kind of highlight where that problem is.

**Trevor:** Absolutely. I mean, and that makes me think too that a lot of times now, partly because of this podcast, I guess I also wind up in the role of the relationship builder Because there have been conversations where it's, hey, you're the guy from the podcast. I want to work with you because sometimes you sound smart, although usually you don't really say anything.

**Michael:** [00:16:03] Bridget, you were going to say something?

**Bridget:** I was going to say what you were saying, Michael, about people think that if they call you in, you have something to do with DevOps, and so you can definitely give them some DevOps. I think that that's one of the first misconceptions or one of the first things we might have to dispel. I mean, I'm not in a sales-facing role. I am in tech advocacy. I report up through marketing, but I do enablement of our field and I'll go to customer or client and prospect meetings. Some prospects, like, I think it would be— fortunately, I'm not in a horribly unethical organization because I imagine an unethical organization could clean up by being like, yes, what will it take to get you into 8 units of DevOps today? Right, but there are people who, that's what they want, but you can't give them that because it's not a thing you can— I mean, you could sell it to them, but they can't actually get it.

**Michael:** Right, so the question always is, is do you want to sell them 8 units of DevOps today, or do you want to sell them 4 units of DevOps over the next 15 years?

**Matty:** [00:17:06] Right, well, and I think to paraphrase Glengarry Glen Ross, exactly, or you can, you can, you can shear a sheep how many times, right, but you can only That's a little bit meaner.

**Bridget:** But I think that's the, that's the thing, like what you were saying, when they come to you and if you were just going to take that problem solver approach of like, oh, you want this? OK. Then that's not actually going to get them what they need. You kind of maybe sometimes have to do the Joss Whedon thing of like, you give them what they need, not what they want.

**Matty:** And sometimes you have to make some, some tough, tough decisions because the customer might not be ready for what they think they're ready for. If you talk about certain types of business, so this is a specific thing thinking about Chef, and I don't know Pivotal's model well enough to know if this would apply, but we're a subscription-oriented service. Michael or I could sell you, again, like you said, 4 units of DevOps right now, or not even so much that. You may come to us and say, this is exactly what we need, and we might say, you know what? I can sell this to you, but I know you're going to be unhappy. And then the problem is all that's going to do is I've created a churn customer and you're just going to be pissed off at me and you're going to cancel a year from now and we're never going to get you. So part of it is, again, be the hero that you need, not the hero that you deserve, or whichever direction that goes. But the thing is, like, I think when we think about how this ties into, like, some of the differences, and especially, Michael, you having sold proprietary enterprise software versus now in the open source world. It's, it's an interesting thing because we're selling at Chef, it's about solution. It's about— so partnership is super important because otherwise it's like, why don't I just go use FreeChef? So I'd like to kind of get a feel for how you've approached this in your history, Michael, from being a proprietary part of a sales force to—

**Michael:** [00:19:02] well, I guess you weren't proprietary, but you know, part of a sales force proprietary. You were proprietary and patented.

**Matty:** Do CTM.

**Michael:** So it's interesting, when you were at, or when I was at a proprietary vendor and you went in and started talking to a customer, they often knew very, very little about your software, and you basically were always starting from square one. And then as I got into more of the open source world, or where The software was a little bit more easily accessible, the documentation, and even in the proprietary world, the documentation wasn't even available publicly. You had to have a login to even get into the documentation. So the software was a complete black box to the customer, and that changes the sales dynamic in that, you know, you want to go do a $2 million deal, you really have to convince everybody in the organization, and especially that's when the relationship selling comes in where you're having that relationship with the executive buyer. But then when you— when I went into the open source world, when I would walk into a customer, the customer was often smarter than me about the software, and they're like, why should we pay you money for this software that I know how to use really, really well? And then the other thing, going back to kind of the challenger sale thing, is that the dynamic of how you sell changes dramatically in that, in that the Challenger Sale also talks about this idea of the sales relationship has changed to where you have to convince the people, the individual contributors, and then the individual contributor is the one that actually goes and sells for you into the executive buyer. And that's so, so true in kind of the open source world with, or the open core world, I guess you can call it that, which Bridget, you're kind of under the same situation of being more open core with having these enterprise add-ons and support and other things that you can buy to add in more features to the product. You have to convince those technical people at the bottom that this is the right solution going forward, and then they go sell on your behalf up to the economic buyer, as they're called in sales parlance. And it changes things dramatically. When the customer is already educated before you get in the door.

**Bridget:** [00:21:25] Yeah, I think that makes a huge difference, and I think that's one of the huge competitive advantages of being open source too, because if the, the, you know, individual contributor types who are that one in the organization who wants to do some resume-driven development and wants to be playing with whatever they deem to be shiny, if they can't go look at your stuff, they're gonna veto it. They're gonna find a way to get rid of that before the conversation even starts. So being open, like being able to say, here's some stuff on GitHub, go look at it, there's a huge advantage that I imagine is very different from when you were doing that closed black box stuff.

**Michael:** Oh yeah, for sure. And the other big thing is, oh, you need, you need a solution to your problem. There is this massive community. Chef has a massive community. I know Pivotal and Cloud Foundry also has the community aspect of things as well, and that helps so much to basically convince— you're selling them the community, and then they can go out to the community and they can find a solution. And also they can find other people like them that are solving the same problems or having the same problems, and people that they can interact with and share the pain and other things like that, versus In the proprietary world, you're just always angry at the vendor for not giving you what you need.

**Bridget:** [00:22:46] Well, and I would think also in the— when you have, for example, like take Chef, you can have Chef come in and help you with Chef, or you can have Trevor from 10th Magnitude come in and help you with Chef. And if somebody is using Cloud Foundry, they don't have to only talk to Pivotal because there's actually other vendors that sell their own commercial versions. So it's like people have a little bit more of an option, even not just going out to Stack Exchange and getting help, but they have a little bit more of a choice of who to go out and get, you know, commercial relationships with.

**Matty:** I guess that's still a thing that's true with the commercial stuff. Like when I think about part, you know, most major proprietary vendors have, there's consultants who specialize in things like, you know, Salesforce or, you know, BizTalk or whatever. I mean, but it's, you're more likely to be able to kind of find a little bit more hired gun, maybe. I mean, one of the things that I think is interesting, though, as a potential challenge, and I'm kind of now thinking about this from the perspective of the customer, and, you know, I kind of— one of the things that made me think about this episode was like kind of the, you know, if you go onto, you know, Reddit and you read r/sysadmin, there's, you know, people are always complaining about vendors bugging them, and I don't know how SolarWinds got this reputation, but apparently they're like the worst cold callers in the business. But everybody puts up with it because they like the product, I guess. But the last thing you ever want to do is, I guess, be compared to SolarWinds as a vendor. But the thing is, so you read all this, and usually what people say is, you know, hey, if I fucking want to know about your software, I'll call you. And the problem that I think about is when you're doing your own discovery. So if I'm an individual that says, I want to go solve this particular problem, you know, I went out there, let's say I want to— I know I want to automate config management. So I go out there and do what I think is my due diligence, and there's all sorts of stuff I just don't know to even look at, to even think about. I'm sure the same thing in general with anything, right? That's the advantage of your vendor as your trusted advisor, if they can be a trusted advisor, is to be able to say, hey, you think that this world is this big because this is what you knew, but the world is really this big. And so I want to kind of think about the advantage because I think again in the proprietary world you can't do that discovery by yourself because the only way to find out about, you know, BladeLogic or whatever is by talking to BladeLogic, whereas you think you can go figure stuff out from about Chef by yourself.

**Michael:** [00:25:17] Right, and that's probably the last thing you want to do is call the BMC sales rep. Sorry BMC, but—

**Matty:** So that being said, so why should they call us, Michael, right? If you're saying like they shouldn't call BMC to find out about BladeLogic or whomever, If you have that understanding from enterprise software, how can— like, what are the things that people can do to help figure out whether or not— like, okay, I'm going to be on the other side of the table. How can I develop the trusted advisor understanding with the vendor and make sure that they're not snake oil and make sure that they're not going to try to ship me 4 units of DevOps today, even if it's the wrong thing? How can I see them as being the right people?

**Michael:** So I worked with— when I went from BMC to going and working at Instratius, which was a startup that was focused on cloud management software and kind of a cloud broker overlay product that went on top of Amazon and other things. And it was interesting because technically it was proprietary software. Anybody could always go to our site and get a free trial, and they could also get easy access to our documentation as well. So while it wasn't open source, what was super interesting about it was people could go and get their hands on it. And it always, it always begged the question in my head of, of course you want that, right? You want the customer, you want to try and be open, you want to try and put it out there for the customer so they can go and find out as much information as possible. And if you're not, The thing that was always in the back of my mind, and probably one of the reasons why I ended up leaving BMC, was, well, what are you trying to hide, right? If your documentation has to be behind a paywall, if it's super hard to download the software for a trial, if, you know, the attitude of the company— and this was the attitude at the time, I'm not saying that it's still the attitude— but, you know, I had an executive say to me, it's enterprise software, the customer shouldn't be able to download it and install it themselves because it's enterprise software and it's complicated. And it was kind of not the healthy view of what the customer was capable of doing. And I think that's shifted a bit, right? I mean, you can go to Oracle, you can download some of their software, you can definitely— like, you know, Bridget pointed out IBM Bluemix, there's ways to get free trials of that, there's ways to get free trials of Cloud Foundry and other software like that. So it's starting to change. But that's always the question that I have, is that the vendor doesn't have a robust public community where you can get information from it easily to figure out, to make an intelligent decision whether to engage that vendor, then I would always question, like, what are they trying to hide behind that?

**Bridget:** [00:28:09] Yeah, I would say in the cases where, like, I can only— I can't speak about any other, you know, commercial Cloud Foundry distros that of course do exist, but in the case of the Pivotal stuff, The parts that aren't as public-facing are probably because nobody has taken the time to make sure that they are. That's kind of one of the things that, you know, I'm on Andrew Kluschafer's team, and one of the things that we're doing is this, you know, generally public-facing tech advocacy for Cloud Foundry so that, you know, we're actually out there talking about it. We have Spring advocates on the team who, I think one of them was saying, you know, like, We don't do a standup because we're all in different time zones, but on Slack, we often say what we're doing for the day. And I think earlier today or yesterday, his day was going on Stack Exchange and answering a bunch of questions about Spring and Spring Cloud, Spring Boot stuff. So, we definitely are trying to push information out to the public where they're looking as opposed to having it on that paywall vendor site or whatever. But that does take effort. That takes effort from the vendor to put people on that. So, if it doesn't exist, I wouldn't always assume malice. I would sometimes just assume nobody has yet put the effort in, 'cause I know that's something we're actively doing right now.

**Trevor:** [00:29:23] It's so awesome as an end user to be able to reach out like that. So, like, certain vendors I work with, I can look at their GitHub for whatever piece I need to work with, find out who wrote it, and either reach out to them as an issue on GitHub and get feedback reasonably quickly, Whereas, like, some other vendors I work with, there's, like, a super secret portal you need to be invited to to be able to ask those people questions, and it's much harder to get that information if you're not part of the club, so to speak, which is— it's interesting.

**Bridget:** Yeah, the closed club is no good. Like, we actually— I want to say it was maybe last month, I heard from somebody at ThoughtWorks who's, you know, in some cases competes with Pivotal, who wanted to point out something that was wrong in some Pivotal documentation. And I said, thank you. Here's the GitHub repo where that documentation is controlled from if you want to submit a PR. Otherwise, I can take care of it. But if you want the GitHub, you know, like cred for putting that in, go for it. And he went, he signed, you know, there's always like a contributor license agreement thing, but he went through and did that. And it's like, that's what I like to see is that kind of open collaboration.

**Matty:** [00:30:35] I want to think a little bit too about when we think about like kind of as customers, and we've alluded to this a little bit, but what have been kind of your best vendor relationships when you've been a customer? Because I think, Michael, even, you know, you've been a customer as well at some point in your career, right? We all have, I think. What are some examples? You don't again have to necessarily name names, but giving the scenario of when this has worked really well for you. As a customer?

**Bridget:** I'm totally gonna go first. And I'm not saying this—

**Matty:** I'm not shocked at all.

**Bridget:** I'm not saying this because I'm on a podcast with 2 chef people. But when I was a chef customer most recently, I've been a chef customer a couple of times. And when I was a chef customer at Drama Fever, I had some, you know, discontent and some questions about the way some things were working. And I happened to run into Julian Dunn, who happened to be doing product management for the exact same thing that I had questions about. And he was able to answer my questions and tell me where on the roadmap the things I wanted were coming. And I felt like that was— and I'm sure if I had reached out on Twitter or some other medium, I would have gotten the same kind of information. But I really appreciated the fact that there was no secret handshake I had to go through in order to find out what this— answer was. It was more like, oh yeah, we're doing this with our analytics, and things that you're unhappy about with Hosted Chef here are going to be different over here. And I was like, I really appreciate that kind of forthrightness.

**Matty:** [00:32:08] I think— oh, I appreciate that. So we'd like that, to hear that. We'd like that people like the Chef. For me, like, when it really hit home was— and again, I said we aren't going to name names, but I'll throw this one out there because they get some props. So when I was working with Serena Software, and this was years ago, so I Again, maybe they're terrible now, maybe they're even more awesome. I think they're equally as good. The particular sales rep that I worked with, because we started doing a very small thing with them, it was an incredibly small purchase. It's one of those where you're like, I'm really shocked you're actually coming in to even have an in-person meeting with me for what we're doing, because I know that this deal is probably going to result in zero. It's like a $50K deal, maybe something tiny for what they would do. What I realized as I started to learn about the Challenger Sale later on in my career, I'm like, I don't know if this guy was a subscriber to that particular philosophy, but that's what he was. It was a matter of, sure, we would go and we go to ballgames here or there because that's sort of how things were done at the time. We had a lot of conversations about what's the roadmap of the company. What are you guys trying to do? OK, you know what? We have this thing. I don't think you're ready for it, actually. And then we would have those conversations and say, you're not actually ready for this yet. So let's get you there. And then a year from now, I think you're going to be ready for it when you are ready. And I loved it. And I kind of look at that as a model that I try to be that. I look at it as a trusted advisor. And it paid out for him. You know, we partnered with them in a huge way and made a large investment with them. It helped us be successful. I was a keynote speaker at one of their conferences, you know, and it was, it helped us be pretty awesome. But I don't think it was, but I also know that had he pushed hard at the beginning and just said, if he had tried to solve the problem I told him I had, we would have bought barely anything and we would never have grown where we grew. So that's, I think, a great example of partnering. So.

**Michael:** [00:34:13] So Matt, let's talk a little bit about—

**Matty:** let's circle back around to this whole training that we were doing using DevOps to sell DevOps.

**Michael:** Well, yeah, so yeah, and kind of an interesting thing that we've, we've discovered as we talk to customers and engage with customers, and this whole me being back in sales is actually a new thing. So it's just been since October that I've been back in our sales organization. Before that, I was in our business development organization here at Chef, and then before that I was in the sales organization at Chef, so I'm kind of returning to that. And what I found was really interesting was, um, we went down this path a few years ago of trying to recreate what we thought a POC looked like for a customer. So in the traditional software world, the way POCs always worked was this idea that The— and they definitely worked like this when I worked at BMC— was the experts would come in and they would set up the tool, they would write the customer's use case and solve the problem for the customer, and then they would demo to the customer that they solved the customer's problem to show that yes, the software solves the customer problem. And what we realized at Chef was that model was broken a little bit, right? Because when you start to think about this idea of, you know, do you want to sell them 4 units of DevOps over the next 15 years, every, you know, 5 years sell them 4 units of DevOps, or do you just want to sell them 8 units of DevOps once? And so as we started to think about that a little bit, what we realized is that the traditional POC model was a little bit broken. And it's not about can the software solve the customer's use cases. It's more about can the customer solve their use cases with the software. And that's been a really interesting experience, at least for me. And Matt, maybe you want to touch on that a little bit as well because you've been living it a little bit longer than I have. But it, it changes the game tremendously, and it kind of provides this, I guess, a little bit of a mic drop moment in the POC when the customer is like, wow, I did this.

**Matty:** [00:36:31] Yeah, I think that's absolutely true, because I have been through a lot of proof of concepts as a customer, and that's exactly what they would be. So it would be the same thing at Apartments.com. We wanted to implement Fast as our search engine. So what was the POC? It was 6 weeks long, and the expert engineer from Fast came in and built all the Fast stuff and then integrated with our stuff so we could see that yes indeed, Fast did what it as Charles Johnson would say, did what it says on the tin, right? It proved the concept that it did searches and indexes and was capable of interfacing with their stuff. So the problem with doing that with something like Chef, you know, or any kind of platform, to be honest, or that's really a way of expressing a solution is— and this is how I always explain it to prospects— is I say, sure, you could come to me and say, I want, Matt, I want you to come in and spend a couple days, and we'll tell you how we build our WebLogic servers, and I want you to write some Chef code to show that Chef can automate how WebLogic installs. And what does that prove to you? It proves that Matt can write Chef code, which does you no good because I don't work for you. Right.

**Bridget:** [00:37:39] And also, they're still using WebLogic, which is sadness.

**Michael:** This is—

**Matty:** yeah, I will plead the Fifth right now, or I'll just keep that to the side for the moment.

**Bridget:** I'm allowed to have anti-WebLogic opinions.

**Michael:** Oracle is a great partner and we love working with them.

**Matty:** I like to think about it as it's really a proof of experience, right? Because what I want to understand is when I'm done with this, like I want— it's almost like I want to think about the experience as having a bit of a time machine so I can flash forward to when I have this solution implemented, what's it going to be like? Right? Because it's hard to get there on your own, to envision it, because you don't know, and you have lots of concerns, right? Like, you have lots of fear. You're like, is this going to be super hard? We get this a lot, right? Are my people going to be able— is everyone going to be able to learn how to use this technology? And so we try to address those things and say, don't worry about— Chef does what it says it'll do, right? We know that. But what's important is, can you use it, and will you find it delightful to use it? When it's actually happening. Then you'll say, oh, cool. I enjoyed this, or I can see the value. It's worth it for me to take the next step and do the work to get to the point that we have that. Sort of having that like— it's a free sample of the world, of the new world that you'll have. It's a really amazing thing when it occurs. It's one of my favorite things about my job. A super hard thing to do. They're very physically and emotionally exhausting to do, but it's the most rewarding thing that happens because you'll be working with people and they have an epiphany moment that says, my work life can be better. I can see where this is going to be. And, you know, we've talked about a couple of little things, you know, again, like Michael said, it's the thing where The people who are participating now become advocates for this solution, and not 'cause you've hoodwinked them or tricked them, but you've helped them leap into knowing what they want, and they'll believe it 'cause they got to try it. We like to make the joke that says when the stickers go on the laptop, you know the deal's on its way. And that happened 'cause people won't put a sticker on their laptop unless they believe in it, right? And that'll happen, it'll be a couple days into this experience, I'll start to see that happen and I'll say, okay. And it always corresponds to the people who get excited.

**Michael:** [00:40:19] I'm sure all of us have that stack of stickers of just like—

**Bridget:** Oh, the stickers that someone gives you. Yeah. And it's like someone gives it to you and you don't want to not take it, but then you're like, I don't use this.

**Michael:** I don't use it. I've never touched it. It's not open source, so I don't want to put it on the laptop. And then like all these other things, right?

**Bridget:** Totally. And I just want to say, like, Stratton, you're totally right that that moment when people feel empowered themselves and start seeing some actual results and success themselves is something that you can't sell them that moment. Like you can give them, you can enable them to get there, but they have to put the effort in to actually understand and choose to improve.

**Michael:** Yeah, and I think that goes back to the, the challenger aspect of things. So going back to that book, and it's really about challenging their expectations of what are they capable of doing, or, or how can they work in a certain way. Because a lot of times we go into these large enterprise organizations that have lots of processes that are holding things down and bogging things down, and everybody wants to be the cool startup, and they're like, well, we could never do it here. And it's like, well, let me show you a little bit of a different way to work, and let's have you do it so that you can have confidence of, yeah, maybe we can actually do this here. It's not that complicated, it's not that hard, and kind of challenging their expectations from that perspective.

**Bridget:** [00:41:47] I wonder if another way that you have to challenge people, at least something that I've seen in conversations I've had with customers and prospects, which this whole episode is sounding like I spend all my time in sales, and it's like I don't, but Just the last couple of weeks, I've actually had a number of meetings where I have gone and talked to people. And one thing I've noticed is if you have one part of the organization wanting to talk to you, like, you know, whether it be, you know, application development or enterprise architecture or IT operations or whatever, but the other parts of the organization that they're always at war with, like East Asia and Eurasia, aren't in the room, like, you're going to have problems. You sell them those units of DevOps and they don't use them, and then you, you have churn. And I mean, Pivotal's on a subscription-based model too, and so, like, we have that same problem. Like, we want them to renew, which means we want them to be successful, which means they do need to get all the people who have to be involved in the room, you know, talking to each other, having some of that, you know, singing some of that kumbaya, drinking some of that DevOps Kool-Aid together. And I think that's sometimes the hardest part is getting people to realize that they can't just buy a tool They have to actually choose to make the cultural practices, you know, put cultural practices in place that will let them use the tool well.

**Michael:** [00:43:05] Yeah. Well, as Adam always says, Adam Jacob, one of the founders of Chef, you know, the tool drives the culture and the culture— or I'm sorry, the tool reinforces the culture and the culture reinforces the tool.

**Bridget:** Absolutely. Smart man, Adam.

**Michael:** Yeah.

**Matty:** That actually gives us a good going to kind of, you know, kind of to wrap us up there. Just some thoughts. Any concluding statements? Any things, maybe things that you've learned in the conversation? Bridget, I just wanted to make one comment before you go in. You said, it sounds like you're, you know, you said, oh, I've been talking, it sounds like I spend all my time in sales. And again, to, you know, quote a chef person, because that's apparently the only people that I talk to, Nathan Harvey has said before, he said, everyone's in sales in your organization. And it's, it's true, right? Because one way or another, whether you're not necessarily selling directly or being commissioned, you're all part of it. And you even mentioned it before too, right? Like the way, if you're customer-facing in any kind of a way, that helps reinforce how that product is being sold. And like you said, you know, having the right people in the right room. So we all do spend all of our time somehow connected to sales.

**Bridget:** [00:44:18] I'm laughing because I'm thinking, I'm laughing because I'm thinking of, I was pulling together some, you know, screencaps of tweets, as I do, for a presentation to our sales organization, actually, our quarterly business review. And I found something I tweeted in summer of 2014 where I said, DevOps is culture, princess. Anyone who tells you differently is trying to sell something. Andrew Clay Shafer had actually answered that. And his answer was, everyone is selling.

**Michael:** Yeah, and that's an old quote that goes back a long way. What's the— I forget the actual one. I actually just had it pulled up, but there's actually a book by Daniel Pink who did— Daniel Pink was the author of Drive. He did Drive, yeah, which is a popular book, which we can put a link in the show notes.

**Matty:** It's been a checkout on this show about 7 times, I think.

**Michael:** He has another one called To Sell Is Human. It's all about, you know, moving others and talks about how like 1 in 9 Americans actually work professionally in sales, but the other 8 are selling something as well. The one interesting aspect is that, you know, kind of my closing thoughts on this is if we talk about how salespeople should start to look at how they can differentiate themselves and so forth, You know, what I have found really interesting is that as I've kind of been a student of DevOps for, you know, the last 3, 3 and a half years, as I've learned those things, incorporating those ideas and practices and principles of DevOps into the conversations that I have with customers, the way I lead the conversations, going through and doing value stream maps with them, teaching them how to use Kanban, All of those others— pair programming is something else that we do during the POC process with the customer, and all of those sorts of things. And we do all of those kind of almost in a way subconsciously for us as the pre-sales people at Chef. And at the end, we basically go and we say, oh, by the way, that thing you just did, that's essentially some of the foundational principles of DevOps. What do you think? And they're kind of blown away. By the fact that we just did the DevOps on them and they had no idea that we were doing the DevOps on them.

**Bridget:** [00:46:36] And they did the DevOps for themselves.

**Michael:** And they did the DevOps themselves, right? And so just by adding in a little bit of those practices and principles, it's amazing of how much it changes the— as Andrew likes to say, it changes the game, right?

**Bridget:** Absolutely.

**Trevor:** So So we mentioned The Phoenix Project at the beginning of the podcast and the lean and all that. And so in the kind of the spirit of everyone is selling, I mentioned The Goal from Goldratt and what is the goal to make money?

**Matty:** Oh, spoilers.

**Trevor:** Can I leave it at that?

**Bridget:** Are we worried about spoilers for business books now?

**Matty:** The spoiler of The Goal is what is the goal? Um, the audiobook for it is super good, by the way. It's like done like a radio play. If you— have you listened to the audiobook, Trevor?

**Trevor:** Yeah, it was fantastic.

**Matty:** Yeah, they have like different people doing the voices. It's awesome.

**Trevor:** Um, so for me, I, I think just, just this is another podcast I'm on where I, I kind of clarifying and crystallizing and makes a lot of the things I've been thinking about make sense. Kind of like, as I've mentioned before, when Matt put the word DevOps to a lot of the things I was trying to do. So this was super interesting, and my takeaway is I want to read The Challenger Sale, or at least The Challenger Sale in 10 Minutes.

**Matty:** [00:48:02] Alright, do we want to go ahead and move ourselves into the short-term?

**Bridget:** Do you have closing thoughts, Matt?

**Matty:** Yeah.

**Bridget:** I mean, I do, but I imagine you have some.

**Matty:** Okay, well, I'll give you mine, kind of my thoughts there. Really what it comes down to is just looking at the perspective of someone who never really thought that sales was something that they were good at or wanted to do. Because I, you know, my experience with sales had been years and years ago, like in high school and college, you know, selling blinds and wallpaper at Habitat or at Sherman Williams or something like that. You know, seeing it as someone who Again, don't get me wrong, I love closing deals and getting POs and making money, but I think when you really can be— I don't think that wanting to change the world or make things better for people and being a good salesperson are mutually exclusive. That's something that I've absolutely learned in my experience so far, and it's a really rewarding thing to do. I think when you can have a vendor and someone who's in a presales type of a role like a solution architect or anything like that who really, you know, the chances are they really do want to make things good for you and they can really help you and they can be that trusted advisor. And look to that and don't just assume everyone's out to sell you some snake oil. Assume positive intent.

**Bridget:** [00:49:30] For sure. Yeah, definitely my takeaway would be something like that because with the cynical sysadmin background that I had where people would come in and they'd want to sell me some storage and they'd lie to me about how many IOPS had had, and we would get a model in and try it and it would be horrible and everything would be a slow-burning tire fire. And I would say, don't put any more lying salespeople in my life. The contrast in my mind from that to when we go in and talk to clients and prospects and they're putting a lot of trust in us. I guess I was surprised to see how much trust that they want to put in us because they think that we're not going to schnooker them and we're going to help them. And it's humbling, and it's also really, it makes me want to make sure that we do a really good job of partnering with them and helping them find the right answer for them. Even if the right answer for them ends up being, you just have to stop hating each other and talk to each other, and you probably don't even need to buy anything. I'm not on commission, so I can say that. But it's very interesting going into situations where, in some ways, it's like DevOps therapy.

**Matty:** [00:50:37] So, yeah, let's go ahead and go to community and event stuff. Oh, yeah, great. Let's do community and event stuff. Hey, so first of all, if you have an upcoming conference that you'd like to see us promote on Arrested DevOps, go onto your interwebs browser at arresteddevops.com/conf, C-O-N-F like conference, and fill out that handy form, and we will promote the heck out of you. Conferences coming up, there's a bunch, but we're specifically going to give a shout-out to DevOps Days Rockies, which is going to be April 21st and 22nd, but they are the first DevOps Days of 2016 to offer a special discount to our Rested DevOps listeners. You can save 10% off your regular price with the discount code ADO2016.

**Bridget:** Have I seriously not done this for DevOps Days Minneapolis yet?

**Matty:** Hey, don't talk to me, man. You know, I'm not one of your organizers, so Rockies got in there first.

**Michael:** For whatever it's worth.

**Bridget:** Go Jinx!

**Matty:** Anyway, I'm sure that the discount code will probably be the same for Minneapolis if I have my way to say about it. We've got a whole bunch of upcoming calls for proposals or papers or whatever the P stands for.

**Bridget:** [00:51:49] Participation.

**Matty:** Seriously?

**Bridget:** That is a possibility that it has to stand for.

**Trevor:** Oh, it could be.

**Matty:** Okay, sorry, I thought you were telling me that's what it really was. I was like, really?

**Bridget:** No, absolutely.

**Matty:** I like it. That's very DevOps. Of you. It is CFP season, so if you've got an idea— and remember, all you need is an abstract. You don't have to have written your whole talk. There's a whole bunch that are coming. DevOps Days Rockies and Seattle, their CFP is open until the end of February, on February 28th. ChefConf, our CFP is open until February 29th.

**Bridget:** Because you're fancy that way.

**Matty:** I guess so. That's at chefconf.chef.io. For all these DevOps Days, just go to devopsdays.org and click and find them, and you'll find the proposal. DevOps Days Atlanta, they're open until March 1st. DockerCon CFP is open until March 18th. You go to 2016.dockercon.com for that one. Platform SpringOne CFP is open until March 24th. That's at platformspringone.io.

**Bridget:** [00:52:49] I'm really excited about that one because Platform is like the pivotal conference that is about all of those things that we talk about. I'm really, really, really excited that we finally announced it today.

**Matty:** Sweet. DevOps Days Vancouver and Minneapolis and Abstractions are all open until March 31st. I don't know where Abstractions—

**Bridget:** It's in Pittsburgh. They're not doing DevOps Days Pittsburgh this year. Oh, it's abstractions.io.

**Matty:** abstractions.io. Then, of course, Minneapolis and Vancouver, go to devopsdays.org. DevOps Days Washington, D.C. is open till April 15th, Salt Lake City till April 19th, and Amsterdam until May 30th. Just a couple things to talk about. We're going to be in the next week or so, which by the time you're listening to this podcast will have been in the past, so sorry. But next week, I'm going to be speaking at the 20th anniversary PINK conference in Vegas. PINK, if you don't know, is a Very prominent and well-regarded IT service management conference. This is the 20th version of it, or 16th, I'm sorry, Pink 16, not 20th. I don't know what I'm talking about. I'll be speaking there with J. Paul Reid and Damon Edwards, among others. The first year they're doing a DevOps track, and the headliner is Martin Short, so I'm sharing a bill with Martin Short. So what up? Trevor, what about you?

**Trevor:** [00:54:12] I am going to be at the PowerShell and DevOps Summit, April 4th in Bellevue, Washington. Learning about all the, the good new PowerShell stuff and probably some older PowerShell stuff too.

**Michael:** Cool.

**Bridget:** Sweet.

**Matty:** Michael, and you guys have any fun adventures?

**Bridget:** I'm going to San Francisco February 17th, and I'll be there through March 3rd. I'm going to be doing some pairing on our cloud ops team, and I'm going to be speaking at a Cloud Foundry meetup in San Francisco February 25th. And March, I'm actually going to speak at ScaleConf in Cape Town and then at Agile India in Bangalore. So March is going to be pretty busy for me, and I don't know how many episodes of this podcast I'm actually going to be on from places with internet like that.

**Matty:** What are you up to, Michael? Anything fun?

**Michael:** I'll be in Chicago next week.

**Matty:** Oh, for reals?

**Trevor:** Awesome.

**Matty:** Are you going to be in Chicago when I'm here?

**Michael:** [00:55:13] I have no idea. Yeah, it's weird. My travel schedule is not well baked, so it's a little bit more on demand. Yes. And I haven't even booked flights for next week, so I'm not even sure how long I'm in Chicago.

**Matty:** Well, you know what? On our next episode, we'll have known what happened. So if you want to know what Michael did while coming to Chicago, tune into the next episode of Arrested DevOps. Let's go into some—

**Michael:** a special episode on my travel schedule.

**Matty:** That's right. Hey, you know, we want to have them more frequently.

**Bridget:** Can we have a special episode on my travel schedule where I'm basically trying to become Deucey when I grow up, apparently?

**Trevor:** It might be a good idea to have an episode about traveling.

**Bridget:** Oh God, it'd be so boring.

**Matty:** Oh, see, why do you gotta go be like real now?

**Bridget:** But it'd be so boring.

**Trevor:** I have to say at least one thing that's poignant and useful in an episode. I can't be all snark.

**Bridget:** You really don't.

**Matty:** You gotta check out for us there, Deuce.

**Michael:** Yeah, so kind of interesting. I discovered that tweeting something inflammatory about Docker will give you a really popular tweet, usually pretty quickly as well.

**Bridget:** [00:56:20] Oh, does this mean that the hype cycle has gone to the, like, trough of disillusionment?

**Matty:** I want to see Gartner add a specific, like, event in the hype cycle that's Deucey tweets something inflammatory about you.

**Bridget:** Okay. All right. I have a completely non-tech checkout. Well, I mean, it's a website because, hello, it's VR. But I just got a kitten, and so for everyone who was following me on Twitter because they cared about things like Cloud Foundry and Docker, I'm sorry, but I only tweet about kittens now.

**Matty:** Speaking of this kitten, by the way, I do want to apologize if the Platforms episode, if you downloaded it and it's on— and actually, if you're listening, If you did end up with all the technical gibberish— not technical gibberish, but like if it sounds like it's all got technical problems with it, delete it from your podcast podcatcher and download it again. And it is completely the fault of Bridget's new kitten, and we're not even kidding.

**Bridget:** He was trying to land on the keyboard and did some sort of bizarre keyboard macro that we didn't know existed in Audacity that like decoupled the tracks. I don't know, it was horrible.

**Matty:** [00:57:27] Anyway, does he have a name?

**Trevor:** Does he have a name yet?

**Bridget:** Yes, he does have a name. His name is Nimoy.

**Matty:** Oh, nice.

**Bridget:** And he is adorable. But the useful takeaway for our listeners is that where we found him was petfinder.com. And it's a really useful website that you can search for things like, I would like a cat of such and such age, like baby, that's small, that's within 100 miles of where I live. That is trained to use audacity, that likes to attack everything. Yeah, you can't necessarily search on attack desires, but other than that, yeah, there's a lot of parameters. So for people who would like a specific pet, but they don't want to support pet breeding and they want to get an adoptable pet who needs a home, they can look with a lot of very specific parameters even down to breed. So I'd say Petfinder.com is a really good way to find those adoptable pets.

**Matty:** Great. Trevor?

**Trevor:** So I'm super excited because they announced that Bryan Fuller, who did Pushing Daisies, Hannibal, apparently some earlier episodes of Star Trek: DS9 and Voyager, is going to be co-producing the new Star Trek series. So there's a good chance that it'll actually be awesome and something that we want and not Generic Action Space Film 7. So I'm ecstatic about that.

**Michael:** [00:58:59] Sweet.

**Trevor:** And then something that's actually technical and probably everybody's heard of it before, you know, because I ignore a lot of things, is POSIX.

**Michael:** Linux!

**Trevor:** Oh, I have Ubuntu installed on my laptop now.

**Matty:** Go ahead, nobody heard what I said— what you said because I was being rude.

**Trevor:** I started using posh-git at the, at the maybe scolding of Steve Murawski. And it's just, it's awesome. It makes the Git experience in PowerShell way more awesome. I finally ditched the Git GUI.

**Matty:** I actually have gone back to the Git GUI, but that's only using Tower on the Mac.

**Trevor:** Oh, Tower is awesome.

**Matty:** That's not a checkout, but it could be one. You could check it out. It's pretty cool. But speaking of Git, my first checkout is something called Git Blame Someone Else, which lets you go kind of adjust commits so that it looks like it's someone else— someone else— it was the one who actually committed your bad code. Yeah, it's for amusement purposes only, but it's okay.

**Bridget:** [01:00:08] Not for blameful organizations.

**Michael:** No, no, no, no, no.

**Matty:** In fact, the, the— if you go look at the repo, it says Linus Torvalds says it's amazing, and it's been— there's an example of making it look like Linus did an actual commit of a comment doing that. I thought it was pretty funny. I like blaming someone else. Also, you know, growing up at a certain time, big fan of a little show called Voltron. And so a while ago was announced that DreamWorks and Netflix were putting together a new Voltron series, and they just announced the title of it, and it's called Voltron Legendary Defender. That's about all we know about it, but I'm really hoping that it's Lions Voltron and not Vehicle Voltron. More to come. And another one that's kind of fun, I came across it in a really random way as we were starting to work on trying to build some Arrested DevOps t-shirts. So watch this space, you may be able to order one of those eventually. But in the meantime, you can order yourself a Snarky Agile t-shirt. If you go to snarkyagiletees.spreadshirt.com, they're kind of funny. I'm trying to remember the one that was something about DevOps as a social construct. I don't know. It was funny. Go check it out. Snarky Agile Tees.

**Trevor:** [01:01:24] Is there a user story to do it for me?

**Matty:** There very well could be. There is definitely a newsletter, though, called The Banana Stand. You can sign up for it at arresteddevops.com/newsletter. It is the best way to know about upcoming podcast episodes and, you know, things that we think are cool with DevOps.

**Trevor:** Thanks again to our sponsors. Be sure to visit them at arresteddevops.com/10thmagnitude and arresteddevops.com/datadog. Thanks to Michael for joining us on our special joint podcast episode and for, you know, doing a whole joint podcast episode to begin with. That's awesome. And, of course, thank you, loyal listeners. Loyal listeners, if you enjoy Arrested DevOps, we'd appreciate it if you'd visit arresteddevops.com/itunes and leave us a review in the iTunes Store. We'd also love to know what you thought of this episode. Please leave us comments at arresteddevops.com/vendors.

**Bridget:** So, maybe just because Michael's here, I'm noticing that we say the words Arrested DevOps like 8,000 times in this episode.

**Matty:** [01:02:29] We really do a lot. You can check out our website.

**Bridget:** I don't even need to say the name.

**Matty:** I bet you know. I've been meaning to take it out of the template because I think it's pretty obvious to anybody listening how to find us on the web. And if you care, we have a feedback form on there.

**Bridget:** We could give you an email address. It shows at the website that you know about. Whatever.

**Matty:** Also, you should, if you were going to go and leave us a review in the iTunes Store, while you're in there, do a search for Goat Farm and leave a review for the Goat Farm because that would be nice thing for you to do. So leave a review because I did it.

**Bridget:** And also, if you wanted to, you could listen to the episode of Arrested DevOps back in November last year when Ducy and Ross Clanton, like, had their idea for the goat farm, and that episode kind of, you know, spawned the goat farm.

**Matty:** ArrestedDevOps.com/enterprise-devops.

**Bridget:** There you go. So that's actually, like, Going back to listening to that one and then listening to all of the Goat Farm episodes up until this point kind of lets you complete that circle.

**Michael:** [01:03:31] The other thing, while you're on iTunes, go and look at Arrested DevOps and look at the reviews. Look at a review from Bob Farley, which is actually a fake review that I actually wrote.

**Matty:** What? Oh, you didn't know that was him?

**Michael:** I didn't.

**Bridget:** I don't read our reviews.

**Trevor:** Oh, I thought you read them on the air.

**Bridget:** I don't know. I live by the rule, don't read the comments, so I don't read the reviews.

**Matty:** No, our reviews are all good except for the fake— the only bad one was the one from Ducy.

**Michael:** But you read that on the air, didn't you? We did and didn't know it was you because it was hilarious. Hilarious.

**Bridget:** So yeah, but anyway, so yes, loyal listeners, talk to us on Twitter or send us email. If you send us email, Stratton will probably read it, and I think there's some bot that he has echoing it into our Slack channel because from From every once in a while, emails show up in Slack. I think that's Stratton's way of making sure I actually see them.

**Trevor:** Yep, I read them too.

**Bridget:** So you could do that. So let us know any ideas you have for future episodes. I'm Bridget at Bridget Kromhout.

**Matty:** [01:04:38] I'm Matt at Matt Stratton.

**Trevor:** And I'm Trevor at Trevor G Hess.

**Michael:** And I'm Michael Ducy at MFDII.

**Bridget:** We're Arrested DevOps.

**Matty:** And remember, there's always DevOps and goats in the banana stand.

**Bridget:** We're Arrested DevOps and the goat farm. And remember—

**Matty:** Okay, let's do this all again.

**Bridget:** Stop.

**Trevor:** We're Arrested DevOps.

**Bridget:** Except that I say that.

**Michael:** No, I am Arrested DevOps.

**Matty:** Okay, everybody shout Arrested DevOps.

**Bridget:** Everyone has to pause a little bit.

**Michael:** What I love is how pissed Matt's getting.
