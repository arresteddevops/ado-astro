**Matty:** [00:00:07] Welcome to Arrested DevOps, episode 35, DevOps and Marketing. I'm your co-host, Matt Stratton, @MattStratton on Twitter.

**Trevor:** I'm your co-host, Trevor Hess, @TrevorGHess on Twitter.

**Bridget:** And I'm your co-host, Bridget Kromhout, @bridgetkromhout on Twitter.

**Shannon:** Hey, I'm Shannon Smith from 10th Magnitude. Arrested DevOps is brought to you by 10th Magnitude. A cloud services company that figures if you're listening to this podcast, you must be pretty cool. We're hiring, and you can find out about joining our cloud services team at arresteddevops.com/10thmagnitude.

**Jason:** And hey, this is Jason at VictorOps. We all know that being on call sucks, but what if there was a tool out there that allowed you to route incidents to the right team, @mention specific people to ask for help, and hop into a chat with your team from an easy-to-decipher incident timeline? That gave you full context on exactly what was happening. That tool is VictorOps, and they're different. From setting up global on-call rotations to creating a postmortem report, VictorOps is there with you through every step of the incident lifecycle. Their real-time collaboration platform helps you and your team solve problems faster. You can sign up for a 14-day trial for free to see how making on-call can be much less sucky, uh, by visiting arresteddevops.com/victorops.

**Matty:** [00:01:27] Stack Exchange Incorporated, home of Stack Overflow and Server Fault, is hiring in New York City. Are you a DevOps-minded sysadmin that's also proud of your hardware skills? Do people compliment your wiring skills when you rack a new server? Stack Exchange is looking to hire an SRE with networking skills and an SRE with Windows plus Linux skills. Visit arresteddevops.com/stackexchange to learn more.

**Trevor:** Marketing departments are often told don't use the term DevOps incorrectly. But exactly how should our marketing peers use that term, and how can we effectively talk about DevOps in the marketing space? Shannon Smith from 10th Magnitude and Jason Hand from VictorOps will be joining us tonight to discuss this heated topic. Shannon, you want to tell us a little bit about yourself?

**Shannon:** Sure, thanks Trevor. Yeah, so I'm Shannon Smith, and I am the marketing manager for 10th Magnitude. And I sort of have a unique background. I don't have a traditional tech background at all, more like a sort of liberal arts nerd who was really into literature and history and sort of fell into the tech world through my job at 10th Magnitude. But I do have a big love for well-crafted sentences and song parodies and general cleverness, which is why I really enjoy marketing and the challenges that sort of come up with getting out a message into this big abyss. And so that's kind of what I do at 10th Magnitude, and I'm really excited to be here tonight with you guys.

**Bridget:** [00:02:55] Thanks, Shannon. And we also have Jason Hand with us tonight. Jason, can you tell us about your role and background?

**Jason:** Yeah, happy to. So mine is definitely a little bit more of a technical background. I've been sort of in the IT space for— feels like forever, I guess, ever since I got out of college around 2000. And it wasn't until coming on with VictorOps that I actually started to be, I guess, what I like to call a little bit more of a swingman. So even though I'm I'm on the product team, and I work very closely with our developers, both front end and back end. I also help out with our marketing team with a lot of content and, of course, traveling to a lot of different events. And, you know, there's no argument at all that much of what I do very much falls into the marketing space. So, I'm very excited to be here and hopefully, you know, talk about some really great and interesting topics regarding DevOps and marketing.

**Matty:** This topic may be surprising to some listeners, that why does this matter, right? So I want to kind of open with that question. Why is DevOps something that people in marketing or promotion or whatever type of division of a company, especially a product company, would even care about?

**Jason:** [00:04:07] Well, I can jump in with this one. You know, obviously, the VictorOps tool or VictorOps system is something that we feel very much falls in line with a lot of the DevOps types of topics, I guess, in terms of the things that we try to help engineers with, both backend engineers, the operational side, and also the development side. And so, you know, being able to speak intelligently to the different subjects that fall within DevOps is very important, especially when it comes to marketing, because, you know, as most of us know, we're very averse to traditional sales and marketing tactics. You know, we We can kind of sniff out some of those types of conversations before they even happen, and we'll pivot and walk away before we're even pulled into a conversation like that. That's why I think this is such an interesting podcast for me, especially. When Shannon brought this up at DevOps Days Chicago last summer, there was a huge group of people there to sort of understand what everybody's thinking and what's the best way to sort of approach this.

**Bridget:** [00:05:14] So, Shannon, when you brought that up as a topic in open space, right?

**Matty:** Yeah.

**Bridget:** Can you talk a little bit about what you proposed, and then did the discussion go as you expected or really differently?

**Shannon:** Yeah, sure. So, just to give a little background about that, it was something I had been thinking about since DevOps Days Minneapolis. So, that was in July of 2014. I was sitting there in all these talks, and of course I was there as a marketer, but I was also on the— Matt kind of pulled me in to help organize Chicago DevOps Days. I was there as both a marketer for my company and also as an organizer for this community event in Chicago. I was kind of interested by how there was all this focus on community, and I was really excited by the community there, but also all these sort of jokes about how terrible sales and marketing is, which, I mean, and again, like, we're very averse to the sort of traditional, maybe sort of jerky sales ideas too. So I could totally get that. But I kept thinking, you know, well, what is it that I can do to kind of combat this negative portrayal and these sort of stupid, right, like stupid things that, you know, people were complaining that they were seeing being done out in the field and in blogs and blasted off. So I was like a little bit too— I started thinking about it in Minneapolis, didn't propose an open space then, but in Chicago I was like, you know what, I'm just going to throw it out there. Probably no one's going to come, but we'll see. And yeah, I was really surprised that almost 25 people came to the open space. And I think the way I kind of positioned it was, hey, come tell us what you don't like, what you see marketing doing that you don't like. And I will bring that back to, you know, the powers that be at my organization, and we can kind of come up with some ideas that are going to be better ways that we can talk about something that's, you know, really important and that you see being portrayed sort of, you know, falsely.

**Bridget:** [00:07:23] So what are some of those dangers or ways people can misuse the term DevOps that you, Jason, or that you, Shannon, have heard?

**Jason:** Yeah, well, I mean, one obvious thing that I see all the time. I spend a ton of time on Twitter, as I feel like most of us do.

**Matty:** Except Trevor.

**Jason:** And one thing that I notice all the time is when people think that they can just throw the hashtag of DevOps onto something, and that it actually is relevant to what's going on in the conversations regarding DevOps. And I understand. I mean, that's to a certain degree, that's what hashtags are for. I mean, people spot something that's trending. And then you throw that hashtag in there just so that it can get some visibility on it. But I think that's one pitfall, is thinking that you can just— whether it's on social media or whatever the case is— that you can throw in the word DevOps or something that's related to that and somehow feel as though all of a sudden you're part of the party or part of the conversation in a correct way, I guess. So that's something that I'm super mindful of, and our entire marketing team is very very much paying attention to. And as I'm out at events, you know, I have a lot of conversations. People approach me. A lot of companies, I feel like lately, have been starting to go down the path of wanting an evangelist or some sort of an evangelist role. And so I find myself in conversations just sort of explaining my experiences and how I got started and how I feel about the role and where it's going and blah, blah, blah. And a lot of that has to do with just the way that you sort of engage in those conversations.

**Shannon:** [00:08:56] Yeah, I think another big thing that really kind of irks people that I've seen and that I think is a definite misuse is when sales and marketing teams are packaging DevOps as a very quick fix. That's, you know, we're— so 10th Magnitude, to back up a little bit, we are a consulting firm, so we are actually selling and marketing our services that will, you know, come in and help organizations with, you know, thinking about DevOps philosophies and implementing different automation techniques. And so I think a lot of the times to see maybe people talking about it as a very quick fix to a problem that might be deeply rooted in an organization is sort of like a slap in the face almost, because there's organizations that work for, you know, years and years to try to get some of these ways of thinking implemented and then have the technical capabilities to then make those cultural changes work. And so I think to just say, you know, we're going to come in and fix everything and we'll, you know, as I think Matt uses this term a lot, install the DevOps and just make things work. That's not— that's kind of an insult to the whole process and the real thought that takes place and what, you know, many organizations have worked for years to achieve. And so that's something that I really try to be aware of, that it's It's a process and it's a way of thinking, and it's not just something that we're packaging and selling that's going to be an end-all, be-all.

**Matty:** [00:10:33] I think it's really tough because, again, you know, you've got— people want that, right? They want to be able to come and either get a solution from a consulting company and say, oh, well, you're a DevOps consultant. Come and teach us the DevOps, or come in and change us into DevOps. They want to come to Chef and say, we want to buy DevOps, right? Buy the DevOps tool, do the thing, because it seems easy and it seems to be this problem. Then you run into this scenario where, as part of the sales organization or the marketing organization, you have, you know, you don't want to send the wrong message, right? I mean, you don't want to be, you know, I mean, again, you could be like, hey, great, sure, send me the PO, give me $1 million, I'll sell you DevOps.exe. And I don't care if it works or not. I don't think that's true of any of the people that we're talking to. And I think that's actually generally not true of most of where this stuff is happening, but it's walking that fine line. And it's, it's, uh, I always kind of say like, again, for a little bit of background, like I'm not marketing, but sales, right? To a point, you know, I'll admit it. I'm in sales. Technical.

**Bridget:** [00:11:40] It's okay, Matt.

**Matty:** It's okay.

**Trevor:** Right.

**Matty:** The, the, the relationship that you have with someone when you're on the presale side of something, Versus the post-sales. So like our professional services folks like to talk about being infrastructure therapists, and sometimes they have to say hard things to the customer, which is, yeah, no, this is not going to be easy, and you're going to have to make some tough decisions. And this— and it's— I hate to say it's easier to do it then, and my friends at Chef Consulting are going to tell me that I just said their job is easy, and it's not, but the PO is written, right? We've got them there. And we, the customer's already said, okay, I'm along the journey with you guys, right? We've made an agreement that this is what we're gonna do. Problem is when presales is in there, we're walking that fine line of, I don't wanna say what you wanna hear just to get the sale, but I also don't wanna talk you out of the sale because it sounds hard. I need to be able to walk that line of saying, like Shannon said, it's not super simple, But it's possible. And being able to— and that's a— look at how long it took me to say that. How do you do that in a tagline of a product, right? You know, well, hopefully somebody less verbose than me. That's why I don't work in marketing.

**Jason:** [00:12:55] Well, you know, Matt, I think one of the things that's kind of tied to what you're explaining is even for us who are heavily invested in this whole DevOps thing, who talk about it literally on a day-to-day basis, Sometimes we don't even really understand everything, all the ins and outs of what exactly is DevOps, because it's not— you're right, it's not just a thing. You know, it's a way of getting things done. It's much bigger than just one thing. And Bridget, I think it was you, I'm not sure which DevOps Days, but you had a presentation you'd given where you said DevOps isn't something you're going to find on a balance sheet or something along those lines. And I've paraphrased that many times because it's a good way of explaining that You can't go to somebody— me, not knowing what DevOps is other than I keep seeing it pop up in different tech articles or on Twitter or wherever— I can't go to my team and say, hey, I want DevOps. Go get it for me. We know that, you know, but— and I think the reason why, probably why we're even having this conversation today is that we are very patient and empathetic towards that thought process. Because we deal with it all of the time. And that's part of the challenge within marketing is figuring out how to turn that conversation that, you know, Matt just explained in a very more distinct or shorter way of explaining it. But it's still not that easy, even though we've got a lot of really talented heads, you know, coming together to try to solve for it. It's still not, still not something there's just a, you know, one-size-fits-all answer for.

**Bridget:** [00:14:26] Something that strikes me as entertaining me just at this moment is that I think I'm the only person on the podcast today who is neither a consultant, nor in marketing, nor an evangelist for a product company. I'm just a practitioner.

**Matty:** You're the only one who actually does DevOps around here.

**Bridget:** I don't feel like I do the DevOps.

**Matty:** Well, you're the only one who's doing actual work using these philosophies. The rest of us are selling.

**Jason:** Yeah, we're all trying to sell to you.

**Matty:** Yeah, what I've got, there's like, there's a couple offline conversations about which she gets annoyed and I'm like, sales gonna sales, yo.

**Jason:** That's how it works.

**Bridget:** Here's the funny thing though, right? I think when you're talking about, we were sort of thinking about, you know, target audience. When you're thinking about target audience, I may not be the target market or the target audience rather for every marketing effort or every sales effort.

**Shannon:** Yeah, I think, I think that's a great point, Bridget, and that's something that definitely came up in our, in our open space, and it's something that Sense Magnitude, we had known sort of, you know, intrinsically that we, right, I mean, it's Marketing 101 that you have these target audiences, but I don't think that we had, you know, explicitly solidified that, like, it's more like we kind of talk about it as like our grassroots approach. And so we do have all these things that are going to be the more traditional marketing that's going towards these so-called decision makers, who are the people who, you know, they're busy. They don't have a lot of time to— as Matt said, it takes a lot of time to talk about these sort of abstract concepts. And so sometimes at the top, people just, they need to know what the results are. And so a lot of our targeting towards these decision makers don't even bother with these sort of like strange abstract terms like DevOps. And if someone mentions that they want it, like, great, we'll talk about it. But we more tend to focus on what the results are and how that relates to the business and to, you know, the culture or the things that are going to be the pain points for the decision makers. But what really came out of solidifying that was that now we have all this— now that we have these 2 tracks, we really have all this time to hopefully be— and we're, you know, we're still working on it and still improving every day, but hopefully be delighting to use the chef word, but to be delighting the target audience that is people like Bridget, because we want to reach those people too. And just seeing that so clearly from the open space at DevOps Days just really helped us articulate our plan that, no, these are— we can't try to kill two birds with one stone here. Like, these are two very separate audiences, and so making those two different messages work is something that we've really just been committed to this past year.

**Trevor:** [00:17:20] So, being downstream, I see both sides of that. So, I see where we've kind of talked to somebody and presented the concepts, and then somebody on their team says, oh, that's DevOps. But then I've also seen where we've been asked, hey, bring in the DevOps, and what it actually winds up being, like Shannon was saying, kind of a grassroots movement where Part of us being on-site is kind of explaining the different pieces, how it can make things better, and getting buy-in from the team itself to help make things successful.

**Matty:** I think that along those lines too, it's important that— so like Shannon said, so you're going to talk to the team, you're going to talk to practitioners different than you're going to talk to decision makers, different than you're going to talk to champions. But what you can't do is only talk to one, because the problem is if I'm only selling and marketing towards the corner office, what happens is the people doing the real work go, well, here's a bullshit mandate. And if you want to learn more about why this doesn't work, listen to our episode on culture change at arresteddevops.com/33. We talk a lot about how change comes from both groundswell and it also comes from the top, but you can't mandate, right? If you sell it to the CTO and then they go and do that, you need to have buy-in from people doing the real work. But likewise, if you're only selling it to the people doing the real work, then you're actually expecting them to go and sell it to the person that can sign the PO. So it just reinforces Shannon's point that you're going to have to market this and get excitement about it to different audiences that have different drivers and care about different things. And I think one of the ways that helps with that I want to take some— I'm going to quote our friend of the podcast, Steve Pereira, who earlier today I was chatting with him and asked for some ideas for agenda. And instead of asking for ideas for it, instead of giving me agenda idea, he just gave me a thought, which I said I'm just going to quote you because I love it. But I think this is— and then maybe we can take it and run with it. But he says, I'm in favor of having marketers speak to what they're actually selling or results which is never actually DevOps. So talking about specific items like CI or CD, testing, time to market, metrics, and then he said, DevOps is bathwater in which all of these things are babies. Could we— and actually, maybe Jason, I'd like kind of your thoughts around that, right? Because, you know, VictorOps, right, you're not selling the DevOps, but VictorOps, like Chef, like a lot of these tools, can help facilitate these things.

**Jason:** [00:19:58] Yeah, and actually, it was Steve— actually, I think it was after DevOps Days Chicago, Steve and I hung out pretty much the entire next day at a coffee shop, some really rad coffee shop where they had old-school Nintendo games.

**Matty:** Oh, the Wormhole!

**Jason:** I couldn't tell you the name of it, but it was like big comfy couches, high-octane coffee. It was perfect. I just hammered out a new blog post and he helped me edit it. We spent a good part of that day, you know, just talking kind of, you know, back and forth about how DevOps Days events have been and and the whole DevOps stuff in general. He brought up a really good point or made a comment about, you know, when he encounters someone who just thinks that they— or they make a statement that they really want DevOps or they're trying to somehow get DevOps going within their organization, he usually stops them right away, or at least he claims to, and wants to know, what exactly are you trying to solve for? Is it the integration piece? Is it some sort of automation that you're trying to get established? It's more, you know, what— it's asking more questions and drilling in a little bit more rather than just taking or accepting this comment or this statement of, we want DevOps, and going from there. And so, you know, I think his comment that you had mentioned there, Matt, is just another way of phrasing that same thing.

**Bridget:** [00:21:20] When you're talking about the target markets and you're talking about all the things you should be speaking to. Jason, I think you've made the point that DevOps or Agile or any of these things isn't just for engineers. So, how do you build an understanding of DevOps amongst people who aren't engineers?

**Jason:** Yeah, so one thing that we do at VictorOps, we're a company that comes from— basically, we've been born out of all these other startups in the Boulder area. And many of them have been doing this thing we've heard about for a number of years called Agile. And because of that, you know, almost every single one of our teams treats their responsibility or their roles the same way that our backend engineers do. We've got 2-week sprints, we have a daily standup, we measure everything we can, we get that feedback loop going as quickly as we can, and we try to make adjustments as quickly as it makes sense for the business. And that, you know, I don't know if that's really— I don't come from a marketing background, so I don't know if that's something that's tradition within some marketing teams. Maybe Shannon can comment on that, but to me, that really speaks to the overall adoption of DevOps within a company, is that it's not just for the engineers. This is an argument I make for ChatOps all the time as well. Some people think this is only something for, you know, the nerds in the back, as we call them in our office, or as they call themselves, I guess. It's not just for them. You know, like, to really get adoption across the entire organization on what this whole DevOps thing means, in some people's minds, it's really just an extension of the Agile movement, and honestly, they're not wrong in many cases. I think that, you know, I'm not saying the way we do it is right, but I know that we've made some real progress at VictorOps in the time that I've been there. Not that I brought any of these concepts in, but we are seeing some real, like, really awesome things happen at VictorOps, and a lot of it really is because of adopting this mindset that's all linked to DevOps.

**Matty:** [00:23:39] I love that idea. I'm sitting here kind of going, This makes a lot of sense for a lot of reasons to me. One being just that it's, you know, helping adopt those practices. You're probably actually just doing better work because you're still building a product, whether it's coded or not. But I think it's helping it become less— if that were the case, right? Like you said, doing the ChatOps, doing those things, it's not this abstract thing, right? So if you're working, if your marketing department is working in the same way that your customers are working, they are understanding how they think.

**Bridget:** And I think Shannon was telling us that she, at 10th Magnitude, she was using some fast feedback loops to even take things out of an open space at a DevOps Days and taking them, take them to her organization to make them actionable. Can you talk a little bit more about how your iterations go, Shannon?

**Shannon:** Yeah, sure. I mean, our marketing department's really small. Until like last week, it was just me and one other person. Now it's 3 people. So we're getting there. But yeah, I think I was truly rattling ideas off at that event, sending them over to my colleague and my boss, and just going from there. But yeah, we also— I mean, I think one of the things that I also like to think about is to not have such a divide between marketing and the rest of the company. And we're a small company at 10th Magnitude still. I mean, we're growing pretty quickly. I think we're like at 25 people now, but it's still the kind of space where you can—

**Matty:** [00:25:13] It's still blowing my mind. I mean, I was there a year ago when there was half as many people.

**Shannon:** Yeah, it's crazy. But I think that we're still at a point where you can mostly know everyone. And to me, I mean, I just think one of the— I think it was ChefConf, I think it was Adam's talk where he asked you know, how many people here can say they know someone on their sales— in their sales department, and how many, you know, salespeople can say they know, you know, a developer? And that just really struck me because I think 10th Magnitude is very lucky in that we have, you know, we do know that. But the fact that, you know, to think that there are organizations where, you know, marketing and sales are just so isolated that I think it's really important I mean, I work closely with Trevor all the time, calling him from Paris— sorry, Matt— to just help me. But in all seriousness, I'm like, hey, does this make sense? This is an email I'm sending out to people we met at ChefConf, and what's a good idea for something I could close with? Because he's the one that knows. So I think the fact that we all have different skills that we bring to the table, to the table, but we can all work— we're all working together across departments or silos to deliver something awesome, and I think that that's really important.

**Trevor:** [00:26:44] To build on that a little bit, what— you've got a captive audience. What can we do to help promote you guys and— or you folks and do better things?

**Shannon:** Yeah, that's a really great question and a question I really appreciate. I think, you know, just being available. I know it's really— everyone gets super busy. And so I think, you know, carving out some time to just answer questions. And I think like we on the marketing side, I know, try to make it really easy for all of our technical people. Like, we are, you know, I'm super willing to always sit and write down, you know, what people say just off the top of their heads and then try to make that into something, you know, readable. So I think like, I think it's kind of like meeting each other halfway almost in a way. So, you know, I'm really willing to work with that. I think if people are willing to just kind of give me their ideas and talk about it, I guess carve out the time to talk about these ideas, I think that's honestly the best thing I can think of off the top of my head. I don't know if Jason has any other ideas.

**Jason:** [00:27:56] Well, you know, a lot of this speaks to the culture within your organization. Anybody who's been to any DevOpsDays events knows that there's always, usually I guess, there's one talk that talks very heavily about empathy. And there's a good reason, and that's because that really is, in many cases, at the core of a good team that really just sort of gets it. And they understand and empathize with each other regardless of what team they're on. So that's, you know, that's those silos that are coming down. In most cases, they're also very, very transparent across all teams and all business units, and they know, you know, they know what's taking place, you know, in different aspects. Like the, you know, the people on the backend team, they know what's going on in marketing and sales and, you know, across all levels. Everybody is totally plugged in with what's happening within the company. And some of that's just, you know, we spend time with each other in the office, we spend time with each other outside the office, we have conversations in a variety of channels within our own chat clients, whether that's HipChat, Slack, whatever you use. But we're all just sort of constantly pairing with each other and understanding each other's problems and offering advice and help on how to solve for those problems. And I think that, I mean, that's not something that exists in every company.

**Shannon:** [00:29:16] Yeah, and just to quickly add off on that a little bit, I think knowing what's going on is really important too. Just to think of an example, sometimes it's really important for us to drive traffic to our website and to do things that are SEO-friendly. And I think sometimes maybe I would go back and forth with Trevor on the title of a blog post. And it's like, oh, this doesn't sound natural for me to use this word. And no, but in all seriousness, And I'm like, you know, okay, you're right, it doesn't sound natural, but we need to get this word in here because it's super important. Because if you Google this word, it's going to come up to a link to our blog post. And so I think, I think that, um, you know, just kind of making that, you know, just like understanding what's going on. So Trevor's like, okay, cool, like, yeah, like, I understand, like, that's awesome. If we Google this thing and then it finds us, that's awesome. And I'm like, yeah, you know, maybe this doesn't sound super natural, so let's find a way that we can achieve this, you know, searchability without sacrificing the naturalness of, you know, the genuineness of what we're talking about. Titles can be iterated also.

**Matty:** [00:30:30] They are often on Cracked.com. As a reader of Cracked.com, their articles will change their name throughout the day. It's really funny.

**Shannon:** Really?

**Matty:** They get more clickbaity as the day goes. I can tell they're doing something awesome. And it's like, really? I don't understand. You know, like I'll read it in the morning. I'm like, oh cool. And then like later I'm like, this title is so bizarre and it made sense before. But it was, so it was cool there. I mean, that was just an example. Like Shannon, what you're saying, that's empathy, right? That's like having someone else saying, I'm going to have empathy for what is important, you know, on the marketing side. And one thing I was kind of thinking about is, so if you're, you know, just like Shannon referred to it, you know, Adam's keynoted ChefCon, he said, okay, how many of you out there have a job that you love? Okay, and how many of you know a salesperson in your organization? Everybody's hands went down. And he said, next year, everybody better raise your hand because you won't— you wouldn't have a job if there wasn't someone out there selling your product. But likewise, you could have done a— you could have said right into there and said marketing, right? Because people don't know about it. So A, you need to, you know, they're just as important, right? But one of the things that I think can be challenging is so I could be part of an organization and I don't like the way that we're being marketed. This is probably not uncommon. I'm an engineer working for Company X, right? And I really love the product we make. And then I'm super duper annoyed because it's all the marketing material is like, it's DevOps in a box, right? You know, and do this thing and blah, blah, blah. So what I'm going to do is I'm just going to complain about it, right? I'm not going to— it's hard to affect that change because it can be intimidating for a couple reasons. One, you don't— right, maybe you don't know the people in marketing, and that's just back to the who do I know, who do I know. Again, in a smaller company it might be easier, but you could be in a very large organization where that department you don't even know, or you don't feel like you've got a close enough relationship.

**Trevor:** [00:32:25] Or marketing is an outsourced company.

**Matty:** Well, that's a whole other problem. I have no solution for that, for where I'm going with this. But one of my things is I could see it being really intimidating because Massive generalization about to occur. Marketing folks probably tend to be a little more extroverted. They're very confident in what they're doing, and so are practitioners. We're all confident in the thing that we're doing. So if I am a developer or sysadmin or whatnot, I'm going outside of the thing I really understand to go to this marketing person and basically in so many ways kind of give them hopefully constructive criticism, but I'm kind of telling them they're doing their job wrong. And it may be coming across that way. If I— and so then maybe I'm worried, oh, I'm going to be telling the wrong thing and everything. And I think it gets into this idea of if you have— and hopefully you've got a culture where you can express these opinions, but it's also very easy to get steamrolled if you, if you yourself don't have a strong personality because you're out of a comfort zone, right? You're, you're going, well, maybe you have research I don't have and And maybe I don't have something to back it up, right? I could come to Shannon and say, don't say that, and she could say, why not? And I could go, uh, because it's wrong. You know, like, especially in a large enough company, they might be like, where's the metrics, right? Where's the thing showing what Magic Quadrant and Gartner shows that the companies that use the word DevOps have a 29% higher ROI on their widget factor or whatever? And you go, I don't know, but I saw Pete Cheslock say that I shouldn't call it that one time.

**Trevor:** [00:34:04] I was gonna say, sometimes I just, I'll read something and it just makes me feel bad or it makes me feel annoyed. And those are the things I'll tell Shannon. I'm like, I can't tell you exactly why, but this makes me want to go in the opposite direction.

**Matty:** Something that you see someone else do or something that's feedback to your organization?

**Trevor:** Either. Sometimes, sometimes it'll be an example of something else I see. Sometimes it'll be something while we're having a discussion. I'll just say, hey, this makes me uncomfortable. Like, this doesn't feel right. This makes me want to go the opposite direction.

**Matty:** Like, I don't know art, but I know what I like.

**Bridget:** And that's actually valuable feedback, right? Because Trevor is a developer. If Trevor as a developer feels unhappy and uncomfortable when he sees something, then you know that that's at least not the message you're going to be sending to the developers who may be paying attention?

**Shannon:** I think— oh, well, I know Jason had something to say earlier, so I don't want to—

**Jason:** Go ahead. I'll comment after that.

**Bridget:** OK.

**Shannon:** I don't want you to forget it. But yeah, I think it's really hard to— and I almost feel like this is a conversation, Matt, we were having offline even at one point. But I feel like it's really hard to separate yourself from your job sometimes. You can get very much wrapped into what it is that you do, and you don't want to be— you don't want to If someone gives you feedback, it's really easy to be defensive. And I think that's something that everyone has to learn. I mean, no matter what department you're in, I know it's something I had to learn. But I think that, again, the culture of your organization is going to play into it too. But what Bridget said is completely right. If Trevor is feeling uncomfortable with what he sees, like, I want to know that right away. I want to, I want to be able to change it and help fix it. And I'm completely willing to do that. So I think that, um, I don't know if that's true with every organization, but it's certainly, you know, if you present it in the right way, I think you have a good chance that the person on the other end wants to fix it.

**Jason:** [00:35:59] I don't know whose responsibility that role is, or even if there's one person within any organization who should be that kind of gatekeeper on making sure that the messaging is right across the standardized DevOps conversations. But I do find myself in, you know, kind of in that role occasionally, well, more than occasionally, and it's mostly because I'm the one who's out and I'm the one who's spending time with, you know, folks like, well, all of us here, and, you know, at all these different conferences and events around the country learning from the best on how to accomplish efficiencies and all these different things that are related to what we're trying to do. A good example would be with VictorOps in terms of a feature that we have is a blameless postmortem, our postmortem report. It's something that we very much advocate for. At one point, we made the decision that it's not just a postmortem, it's not just a retrospective, this is a blameless postmortem, and we need to make sure that that message is clear, and that we're not really saying it's a blameless postmortem and then we follow that up with something like, did you find your root cause? Because those conflict. Those aren't the same. What we learned from the great mighty Allspaw is that there is no root cause. There's a lot of different events that could attribute to a problem, I guess you could say. That type of thing, I kind of play the gatekeeper keeper or the goal keeper or whatever, and if I see some messaging on our marketing side that just doesn't really jive with the DevOps best practices and what all of the practitioners are out there teaching us, I make sure that that gets shared. So then, you know, I've shared some important information onto our marketing team, and now they're going to share that on with everybody else, and we move forward and be able to speak intelligently to postmortems.

**Bridget:** [00:37:55] Yeah, that's fantastic. I mean, I think that's great. You mentioned the idea earlier too of chat ops and just chat throughout the team. And then Shannon mentioned getting on the phone, you know, with Trevor when he's overseas or whatever. And it sounds like both of you are coming from organizations where that kind of communication inside the organization between members of disparate teams is really key. And I think that's a, that's a really important takeaway here is if you're going to have people externally facing in your organization, you know, going out and evangelizing, going out and marketing to the public, they need to also be talking to the people inside the organization who are developing the product or who are providing the professional services.

**Jason:** And I would say, I would add to that, that it's even more important in distributed teams. You know, VictorOps, we all work under the same roof. Of course, I'm gone a lot of the times, but, you know, nowadays it's very common for teams to be spread out. You know, as Chef, you guys know, You guys are spread out all over the place, and it's a little bit more difficult to be on the same page with what's, you know, what's being discussed and what's taking place if you're not all physically together. We're getting better at that with new tools and the idea of ChatOps and the whole DevOps actually movement of just having this sense of sharing and transparency and all these different ideas of, you know, let everybody know what you're doing, help them be empathetic towards your efforts. That is helping with that, but it for sure is a little bit more difficult for distributed teams.

**Matty:** [00:39:31] It makes me think about, and I was having a Twitter conversation this morning with a friend of mine, Lynette Creamer, who was on one of our early shows, I think episode 2, going all the way back. I'm not gonna say it's slash 2 because I'm pretty sure—

**Trevor:** Phantom Devs, I told you so.

**Matty:** Yes, it's our testing one. Oh, we're talking about Distributed teams. Distributed teams, and the idea of what I was about to say is I'm kind of hating on the term DevOps right now, and here's why. Because it's— and again, this is not an original thought by any means, but it's this whole, like, it's everybody, right? And so marketing is part of the thing that we do. So just as much as— so we have this whole thing where we say it's, you know, it's the dev and the ops, they're working together, there's no silo, there's no thing. Well, why is marketing not part of this conversation? And Jason, that's what you're exactly talking about, right? You're saying, yeah, I'm involved, you know. Again, it doesn't mean that everybody sits in a big room together because then nothing gets done, right?

**Jason:** I mean, we've heard people say things like DevSecOps, you know, they're trying to find different ways to integrate all of the different teams. Unfortunately, we just can't do that. People are going to get super annoyed.

**Matty:** [00:40:40] I was, I was being very facetious to a point when I said I'm hating on it, but it's just, it makes it so easy No, but you're right.

**Jason:** I mean, and that's one thing I learned early on is that DevOps is not just developers and operations. We need to stop talking about it as though it is. It's difficult because just in the name itself, it immediately creates this message before anybody even has a chance to understand what it is.

**Shannon:** Yeah.

**Matty:** And I think people in the community, I think we get that. But then when you're coming into it, it makes it so easy to think that because you hear the word, so that's all you hear. So again, going back to the more that when you're kind of— and this starts to go into more of thinking about an overall company's transformation. Just like an agile transformation. You can't just say, I'm going to make my software team agile, when an organization goes through an entire agile transformation. I guess what I was— long story getting to— was that I think, Jason, what you're talking about is illustrating how you're bringing marketing or evangelism or your role, bringing that into the tent, and you're influencing the product decisions. You're influencing maybe the product managers or however, but hopefully being able to influence and back and forth, right? These conversations should be happening. And similarly, you know, your operations folks should be influencing the product folks, right? You know, and the marketing folks to be like, hey, don't say it can do this thing that it can't do. You know, don't go and like the things that Trevor's doing and trying to help Shannon with, right?

**Bridget:** [00:42:08] You know, even the way, even the messaging around your product. I mean, again, But my company Drama Fever is a streaming video website, so we don't actually sell, you know, DevOps tools or whatever.

**Matty:** But you have a product.

**Bridget:** Oh yeah, we absolutely do. And I was dogfooding our product this weekend, and I was like, wow, this movie I was really excited to watch is really violent, and I'm watching it through my fingers. There's a warning about the mature audiences stuff on the browser, and there isn't in the iOS app. And so I went on Slack, and I was like, who should I talk to about this? Product got in there with us, marketing got in there with us, and solved it.

**Shannon:** Wow, that's a great example.

**Trevor:** You can make opportunities to make the— to help facilitate these things all the time. Like, some of them are, I think, our best conversations, Shannon, in relation to coming up with new ideas have been over lunch or after a meetup where we're just kind of talking, cleaning up the beer.

**Shannon:** Yeah, yeah, totally. Yeah. I agree. I think, yeah, I don't know. I just, I like what you said too, Bridget, about like putting that in Slack and someone responded. I think that's awesome. And I think that's something that I think, you know, we're trying to get more integrated. I think, you know, I've been slowly kind of joining in the conversations with everyone in HipChat, like, hey, is anyone going to this conference this weekend? I feel like it's a good feeling to feel like in your organization, like anyone can jump in the all room at, you know, in HipChat or Slack and ask a question and have it answered and say like, hey, is— you know, actually that's another good thing is like I went in HipChat and was like, hey, you know, we're thinking of starting a new webinar series. Does anyone have any ideas? And someone immediately was like, boom! And it was an amazing idea and I'm still working on getting it up and running, but hopefully soon we'll be able to announce it and it's going to be a freaking awesome webinar series. I think that kind of like collaboration and accessibility is just That's really what drives all that.

**Bridget:** [00:44:06] Especially because if you're talking about distributed teams, like Jason mentioned, I mean, I'm the only one from my company in Minnesota. So if I had to be cleaning up beer with someone in order to be able to ask that question, it would have taken a while.

**Matty:** So one thing I want to— I'm going to ask a question just to get a pulse from the people on the show, but then I'm actually going to ask a question for our listeners. So we're kind of talking about a lot of these things, and I'm willing to bet that a lot of our listeners are sitting and saying, that sounds awesome, Shannon, you work in a company of 25 people and you drink beer with Trevor. So I know how big 10th Magnitude is because you've told us. So Jason, about size-wise, just from thinking about number of employees or—

**Jason:** Yeah, I think the last headcount we're around 35, 36.

**Matty:** Okay, so about the same. Chef's about a little over 200.

**Bridget:** We're about 150.

**Matty:** Okay, well, so we're all still talking about relatively small organizations, and so that's why I just want to make sure. I was pretty sure there weren't, you know, 2,000 people working at VictorOps, but I wanted to make sure before I made that assumption, Jason. Not that I'm aware of. Or Drama Fever, you know. So my question I'm posing to the audience, to our listeners, and this is, you know, please tweet at us @ArrestedDevOps or leave comments on the the show, the episode page, which is arrestodevelops.com/35. So if you work in a larger organization, either A, if you have advice and thoughts where maybe you've solved this or are working to solve it, we'd love to hear about it. Or what have you been hearing us talk about now that has actually not resonated where you've said, that sounds great, I work for IBM. You know, which is totally legit, right? I mean, I'm not making fun of IBMers or something, but I know I've done this listening to podcasts. I sit there and say, that wouldn't work for me. And I'd like to get that. This is a great example of where I'd really like to get a conversation going outside of this episode because there's a broad spectrum that we're just not able to represent, or else we would have 20 people on this show right now and nobody would get a chance to talk even if I was muted.

**Bridget:** [00:46:16] Oh, and we can't mute you without muting me.

**Matty:** I know. See, this is— I love this. I'm going to fly to Minnesota for all of our episodes now.

**Bridget:** We are actually getting semi-low on time.

**Matty:** Are there any last, any kind of final bits of advice or thoughts?

**Bridget:** I would like to hear actually just one more summary from each of our guests about From the point of view of the marketing, the evangelism, what do you think is the main thing, the main takeaway that you would like our listeners to take, that they could take away and act on, that you think would actually work, even, you know, companies of whatever size? What do you think is generalizable? Shannon first.

**Shannon:** No, I don't know. I needed a few seconds to think about it. I was really hoping I would have a last second. Shannon's fast.

**Matty:** She's like, pass. Jason?

**Shannon:** No, no, no, I'm going to think of something. I just, I need a few, I need a few seconds to articulate my, my thoughts so it's fully formed here.

**Matty:** [00:47:17] All right, well, in that case, Jason, do you have kind of a summary that you'd like to leave with before we go into our community stuff? And then sure, it's kind of like saying I'll be ready to order by the time everybody else does.

**Shannon:** Yeah, and that's what I always do too.

**Bridget:** And I just did the thing that Tom Duffield told us not to do.

**Matty:** Oh, that's right.

**Bridget:** Put people on the spot.

**Matty:** Shannon, I don't think Shannon is an introvert.

**Bridget:** He did say in his talk last night, don't call on people. Don't call on people.

**Matty:** So, speaking of which, Jason.

**Jason:** Yeah, final thoughts, I guess, to me in terms of tips for marketing to the DevOps crowd is, you know, spend some time. There's plenty of good information, great information actually, all over the place regarding DevOps. Get to the DevOps Days events that are happening in your area. That, to be honest, is where I've learned the most. It's where I've gotten the biggest bang for my dollar as well. And I've made some great friends, I've made some great contacts, and it's all led down this, you know, I can call it nothing other than my own little DevOps journey. That has helped me actually have this sense of empathy towards not only the challenges that marketing and sales has, but also the conversations that are taking place among all the business units, no matter what size company. And so I can now take that, what I've learned both online from blog posts and following different practitioners on Twitter and showing up at events and being engaged in conversations, but I have some really good ideas and really good thoughts, I think anyway, that I can now take back to my team and share with them. They seem to be— this also goes to the culture of your team— but they seem to be all ears. They very much know that they can't be where I am at all times, so they depend on me and count on me to learn from all of the experts out there in hopes of one day people will look at me as an expert as well. But at least for the time being, internally, I'm the one who's teaching DevOps best practices internally to my own team and learning from that, and then being able to go out to the world and go to different conferences and speaking opportunities and tell others what I've learned, what we have learned at VictorOps. And so I think it's really a matter of absorption. You can't sit behind your desk and understand DevOps. You really have to get involved with others and be willing to maybe even do a little bit of travel, I guess. Hit up Velocity or get to some of the bigger conferences because even though not everybody has the same budget, it's still worth it. Very much worth it.

**Shannon:** [00:50:07] I think I'm ready to order now.

**Jason:** Still have water.

**Shannon:** No, so I was actually just kind of looking through my notes to see if there was anything I really wanted to talk about that I didn't hit on. Actually, Jason kind of started to bring it up for me, but I think it ties into an earlier point, which is to go back to when we were talking about targeting our audiences. I think truly the biggest thing that I've taken away since, just in the past 9 months, is really trying to build up our grassroots messaging and just the way that we're reaching out to people on that level. I think the best way to do that is to really go to these community events and just be involved and listen. As Jason said, listen and share and have natural conversations and be genuine. And again, kind of do the hallway track and hang out with people and see what's going on. And you'll really learn a lot from that and your message will really get out a lot in that sort of simple way. But I think it's just being— having a presence in the community, I think, says says a lot more than any little tagline.

**Matty:** [00:51:23] Great, I love that.

**Bridget:** Thank you. That's a, that's a perfect segue into our community and event section, which, Jason, by the time this podcast airs, what exciting DevOps Days event will you be finished with?

**Jason:** Yeah, so this is an exciting week here in Denver. We're having our very first DevOps Days. We're calling it DevOps Days Rockies so we can be inclusive to the entire Front Range. Boulder and Denver are 2 big tech hotspots, but we've also got a number of little communities and smaller cities around the Front Range area. So yeah, I'm, you know, I'm not— I'm a little short on sleep, but I'm high on excitement for what's going to be taking place here on Thursday and Friday of this week. We just sold out. We've got a great lineup of speakers and including Including our very own Matt Stratton.

**Matty:** Yes, it's, uh, I'm excited about it. I'm, I'm nervous about following J. Paul Reed, but that's okay. Well, I'm more nervous about how he's going to troll intro the intro into me, but we'll see.

**Bridget:** [00:52:25] Well, for our listeners who may not know J. Paul Reed, he is the founder and host— at least I think he's the founder.

**Matty:** Yeah, he's definitely in charge of The Ship Show podcast, which you should listen to because it's actually Yeah, I'm really super looking forward to that, to both speaking. I'm really pleased to speak. This will be the first DevOps Days that I'm giving a non-Ignite talk at. I gave an Ignite at Minneapolis, but not that that didn't count, Bridget, but I'm—

**Bridget:** It counted, but not as much.

**Matty:** It counted, but not as much. I'm really excited, and I'm really excited to see what it's all about. I haven't spent a whole lot of time lately, or well, really ever with the Denver community, tech community. I have a lot of friends in Denver, but I'm really looking forward to meeting a lot of people. I also want to point out just real quick, so we're going to talk about a couple upcoming events. We are in the process, we've had some listeners ask us for this, to have something on our site where we keep posts around these things in the short term as well, which may not be just necessarily completely DevOps related. Bridget manages somewhere some kind of a calendar, and I don't exactly know But we'll put a link to it in the show notes.

**Bridget:** [00:53:33] If you go to devopsdays.org and click on events, there's a community calendar link.

**Trevor:** Okay.

**Matty:** And that's pretty much probably what we're going to do is just feed from that onto our site. But for people who don't know, but anyway, just so you know, it's on our long to-do list. So you don't just have to listen to us to know about things, but also upcoming DevOps, a lot of DevOps Days going on. I'm going to be honest, mostly this is because I was filling this out and just looking at devopsdays.org. There's probably things I'm going to forget. But DevOps Days New York will be April 30th through May 1st, so that's coming up. Actually, if I recall the publishing schedule for this episode, it will be over by the time— I think this is going live on April 30th.

**Bridget:** Well, no, that's perfect timing because I'm speaking on Friday, May 1st.

**Matty:** Oh, well, there you go. Okay, so you can tell people to go back and listen to this. If you're listening to this on your podcast app in New York, then head to Midtown. DevOps Days Austin is May 4th through 5th. Toronto will be the 14th through the 15th of May. A non-DevOps Days conference in the list, is it Velocity Santa Clara?

**Bridget:** [00:54:41] Velocity Santa Clara is May 27th through 29th, right after Memorial Day.

**Matty:** I actually was not going as far. There's also ALM Summit is— this is really bad, I should know it. Oh, I do, because I say where I'm going to be later. The ALM Summit in— oh no, I don't have it on my list. I'll put a link in the show notes. It's in Seattle. I'm speaking there. And DevOps Days Minneapolis is July 8th through 9th. That's kind of far out, but we're putting it on here because—

**Bridget:** because I am an organizer for it, and we are working on our program right now. We did just announce today that Katherine Daniels of Etsy is going to be doing our opening keynote.

**Matty:** Cool. And when are you also— early bird tickets are about to stop?

**Bridget:** Early bird tickets are on sale at your best available price until May 31st.

**Matty:** So that's a good thing. And then also, I'm just announcing, even though it's way out there, this is— so DevOps Days Chicago is August 25th and 26th. The main reason I'm sharing it now is that registration is now open for it at devopsdaychi.org. So devopsdaychi.org or devopsdays.org or whatever. There are probably way more CFPs open than the one I'm going to say, but by May 1st, Chicago's DevOps Days CFPs will be open. So the time you're listening to this, you should be able to submit them. Apologize, lazy podcaster didn't do as much research, meaning I did it and not Bridget. So she's usually a little more—

**Bridget:** [00:56:05] What you're saying is that I was traveling this week.

**Matty:** Yeah. So, you know, there's a couple. And then also just sort of coming up. So if you're going to be at DevOps Days Denver, You can see me and Jason. Obviously, Jason will be there. Also, knowing what it's like to be a DevOpsDays organizer, he will probably meet you and not remember it at all because he will be exhausted. It's kind of like, you know, the first 3 months of when you have twins, you don't remember any of it. I, on the other hand, will be happy to, you know, drink beers and everything with everybody. I'm also going to be at Interop Las Vegas at the beginning of— so April 26th and 28th, if you're going to be there then. I'll be hanging out in Chicago for Microsoft Ignite, May 4th through the 8th.

**Trevor:** Shannon and I will probably be hanging around the parties for Ignite.

**Matty:** Yeah. We'll probably tweet from Arrested DevOps about any cool parties. I know 10th Magnitude— we're going to be doing fun stuff. If you're going to be at Ignite, follow myself and Arrested DevOps on Twitter, and we'll tell you the hops, the haps. The hips. Are you doing anything fun or do you get to stay home for a while?

**Bridget:** [00:57:13] I think Fly Delta, which rules everything in space and time around me, tells me that next check-in is like 7 days away. So I'm gonna be home for a while. It's fantastic.

**Shannon:** There you go.

**Bridget:** Everyone else is home for a while, right?

**Matty:** Awesome. Trevor, are you gonna be anywhere cool or are you just gonna be working?

**Trevor:** I'll be back in Chicago for 4 days.

**Matty:** Oh, cool. There you go.

**Shannon:** For Ignite.

**Trevor:** Yeah, well, I'll be in Chicago, back in Boston, then I'll be in town for Ignite.

**Matty:** We'd like to see you, Trevor. Just because you're somewhere doesn't matter. Yeah, if you're at a show or a conference or anything—

**Trevor:** no conferences or anything specific like that right now.

**Matty:** All right, we are—

**Bridget:** I will, I will actually also be at Velocity Santa Clara. Oh, I am not speaking, but I am on the program committee, so I guess it's Trying to show up is a thing that one does.

**Matty:** So, well, we'll have to figure out the next time that we get to play ADO host bingo and we're all at a show together like we did at ChefConf, but we'll figure out when those happen. So we are running over time as per the usual, so let's go into our checkouts. Shannon, what do you got for us?

**Shannon:** [00:58:19] So guys, I'm just using context clues here. Is this where you just like share random fun things?

**Matty:** Oh yeah, we did. Yes, we did such a bad job. So we don't have to explain the show to Jason and Shannon and how we do things, because they know. And it's like, well, they know our show, but they don't know all our things. So these are things for our listeners, things that you think are cool. Actually, for new listeners, this is the time when our guests and our hosts will share with you something that we think is cool or awesome or helpful for you to check out. It could be a book, it could be a beer, it could be a tool. We totally stole it from the Food Fight Show, who totally stole it from the Ruby Rogues. There is not an original idea here whatsoever. So in that mind—

**Shannon:** nothing new under the sun.

**Matty:** That's right. So Shannon, does that change your answers?

**Shannon:** No, it doesn't. I think I used my context clues correctly. Okay, so I have— oh, okay, so snack services. I really like getting snacks, and I discovered 2 new mail-order snack services called— one's called Graze and one is called NatureBox. They deliver them. One of them is like— NatureBox is monthly and Graze is weekly. They give you 4 little tiny snack packs. They're really great for— I know I get really intense sugar cravings around 3 PM every day, but I don't like to spend a ton of money to go to Starbucks every day at 3 PM. I just do a little walk around the block and have my snack pack. If you're weirdly into snacks like me, I'm recommending that. My next thing is canva.com, which is specifically for marketers. I discovered Canva probably in December. It's basically a graphic design online tool where you can really quickly put together really sharp-looking social media posts. Or if you need to just, you know, maybe like a Facebook cover page, just really— they have all the dimensions already laid out for you. It's really quick and easy. Most of their graphics are free. And if your boss tells you 10 minutes before a staff meeting that he wants a picture of Trevor with a beret and baguette because Trevor has been in Paris and he wants to talk about the project—

**Trevor:** [01:00:39] There's a picture of me in a beret and a baguette that I didn't know about.

**Shannon:** PowerPoint presentation.

**Matty:** Show notes if you send it to us.

**Shannon:** Okay, I will. So I like created that in 10 minutes on Canva. It's, it's a super great tool, so I wanted to recommend that. And since we're over time, I think that's, that's the only ones I'll recommend.

**Matty:** No, you were gonna talk about The Unbreakable Kimmy Schmidt. Yes, it's awesome. So you can just say that.

**Shannon:** Okay, awesome. Yeah, it's awesome. It's really witty and funny, so And I don't watch Game of Thrones or Doctor Who.

**Trevor:** They're live, damn it.

**Shannon:** So I want someone to watch a show that I watch, and so that's really funny.

**Matty:** Yes, it's on Netflix only. So Jason?

**Jason:** Yeah, so the, the ones that I put out here as far as checkouts go, I tried to think of some different tools or different things that I use that are marketing related, I guess. So I talked earlier about how we try to follow some DevOps or Agile best practices, even in, even in the marketing team. And we do our 2-week sprints and, you know, exactly what we're working on, whether it's, you know, doing, done, or backlog or whatever. We've been doing all that in Trello, and it's been really easy. We also do all of our DevOps Days planning, and I probably have about 17 Trello boards of different projects I should be doing, including just a honey-do list at home here. And then, so trello.com, it's pretty cool and it's free. The other one I have is this tool, I guess you'd call it, called Buffer, which is really great for scheduling tweets. I talked earlier about how I spend a lot of time on Twitter. It's not possible for me to just constantly be tweeting, nor would I really want to, but occasionally I can carve out 10 minutes or so to actually schedule some useful tweets to kind of push our content and different blog posts and things that I write out there at scheduled times. So Buffer is what I use for that. And then another app that I use that's pretty cool to sort of know who's talking about different subjects or different, you know, even things like VictorOps, like it's this service called Mentions. And so I use that to sort of keep an eye on who's talking about VictorOps, who's talking about ChatOps, a number of different things, just to sort of have a pulse on what other people out there are engaging them. Then last, I always have to recommend that people check out DevOps Days. Obviously, I'm putting on the one here in Denver, along with some other people here who've been a great help, but I'm planning on being at all the DevOps Days here in the US, including the one in Toronto. Which is actually—

**Bridget:** [01:03:16] what is it? It's sort of the US.

**Trevor:** You got Toronto?

**Jason:** Yeah, yeah, yeah.

**Shannon:** It's the continent. The continent.

**Bridget:** Hat, right? Yeah.

**Matty:** Oh, the angry tweets we're going to get from Canadians. If only they got angry about things.

**Shannon:** We'll see what Steve says.

**Jason:** So, yeah, devopsdays.com. You definitely have to check out one of those events nearby. They're totally worth it and have been huge for me.

**Bridget:** All right. Our guests had so many good checkouts. I'm just going to send you to one place, and it's something I linked before, but I think I think it was on the weekend. So Weekend Twitter Being Quiet, I should probably link to it again. My coworker Peter Shannon actually wrote a blog post, DevOps: A Brief History. And you're thinking, oh, I've read all this stuff. Actually, he dug up a talk of Andrew Clay Shafer's I had not watched. So, which was impressive. It was like from Agile Roots 2009.

**Matty:** That's when everybody, like, you finish your drink when someone finds something.

**Bridget:** Yeah, for your DevOps drinking game needs, I highly recommend reading Peter's blog post, and we'll have it in the show notes.

**Matty:** [01:04:22] All right.

**Jason:** Monsieur Hess.

**Trevor:** So I—

**Matty:** You need to say him in a French accent.

**Trevor:** I don't want to be offensive.

**Matty:** Okay.

**Trevor:** So I recently—

**Matty:** I mean, just say them, not just—

**Trevor:** Yes, I know. I, I saw the David Bowie exhibition. It was really cool and really interesting. Lots of, um, artifacts that I would have never seen otherwise. I, I missed it in Chicago, but I was lucky enough to catch it in Paris. Um, if you're not watching the video, Matt is now having a drink because he's, he's so sick of me mentioning being in Paris. That he now drinks whenever I say Paris. And, and secondly, I'm going to second the recommendation for The Unbreakable Kimmy Schmidt. It was hilarious. I watched it at Matt's suggestion. It was, it was very fun. I also watched Marvel's Agent Carter, which was also really fun and super interesting. Watch those.

**Matty:** [01:05:27] Great. So I'll wrap us up. So we got 3, 3 tools that 2 of them are kind of new to me. One is one that I've been using for a while. So one is a product or an app called Mac ID. So use it for unlocking your Mac using the Touch ID on your iOS device. And I use it a lot when I remember that I have it. So I haven't gotten to it being a habit yet. Actually, with the fact that as of tonight, Bluetooth is apparently freaking broken on my laptop since I walked into Bridget's house. I actually can't use it, I just realized, so now I'm even more upset about this. By the way, listeners, if you know what to do in Yosemite when your Bluetooth control panel just totally disappears and your computer decided it doesn't have Bluetooth anymore, please tweet at us @restodevops or tweet at me @mattstratton. Thank you.

**Trevor:** Leave it to me to tell Matt he can just get a PC.

**Matty:** I'll just get a new Mac. My second one— this is a tool that is one of those things where sometimes you're like, I don't even know how I used a thing when I didn't have this other thing. So this is a Chrome plugin called Octotree, and I don't know how it's possible to use GitHub's web interface without this thing. And what it basically lets you do is it gives you a little tree interface on the left side of a GitHub repo so you can browse through the tree structure. And especially if you're looking at, you know, like for me, like Chef cookbooks, when I'm trying to go look at some code like Sean O'Meara wrote and there's like 17 different levels down of providers or whatevers, And I just want to look at different files and they're all called default.rb. Because Chef, right? I mean, so again, it's one of those things I sit there and I'm like, it's super awesome. How does— how do people even GitHub without it? So it's called Octotree. I'll have— we'll have links to all this stuff in the show notes. And then finally there's something called Ponyhoof. And that's at ponyhoof.little.my. So what it does is it restyles Facebook with a My Little Pony theme. And I enabled this as a joke. And I've been using it for like 3 weeks now, and I'm pretty sure I'm never gonna turn it off because it actually makes Facebook way more fun and amusing and weird. And it does random things like, you know, instead of liking something, you brohoof it, you know? And instead of a post, it's a friendship letter. And oh my god, it's the best thing. It really blows my mind. Bridget, I'll show it to you after we get offline.

**Bridget:** [01:07:50] You can show it to me because I will certainly not be enabling it.

**Matty:** Oh, it is— you don't actually face Well, then it doesn't matter. All right, on that note, what we do have is a newsletter at arresteddevops.com/bananastand. It's pretty much the best way to know about our upcoming podcast episodes and cool news with DevOps. We do have an iPhone app if you'd like to listen to our show on an iPhone app instead of a podcatcher. You can download it for free at arresteddevops.com/iphone.

**Trevor:** Thanks to our sponsors. Be sure to visit them at arresteddevops.com/10thmagnitude. Arresteddevops.com/victorops and arresteddevops.com/stackexchange. Thanks, Shannon and Jason, for joining us. And loyal listeners, if you enjoy Arrested DevOps, we would appreciate it if you'd visit arresteddevops.com/itunes and leave us a review in the iTunes Store. We'd love to know what you thought of this episode. Please leave us comments at arresteddevops.com/35.

**Bridget:** [01:08:51] Be sure to check us out at arresteddevops.com or @ArrestedDevOps on Twitter. We're always happy to get your input, ideas, or feedback at shows@arresteddevops.com. So please let us know any ideas you have for future episodes. I'm Bridget @BridgetCrumhout.

**Matty:** I'm just realizing I really wonder how many times we say Arrested DevOps in the last minute and a half of this show. Is that a drinking game? Oh no, we'd be Um, anyway, I'm Matt at Matt Stratton, and I'm Trevor at Trevor G Hess. We're Arrested DevOps, and remember, there's always DevOps in the banana stand.
