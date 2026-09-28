**Nicole:** [00:00:00] You sure, Nicole? Yes.

**Matty:** Yes. It's time for Arrested DevOps and the Food Fight Show, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matt Stratton, and joining me today is—

**Nell:** I'm Nell Shamrell-Harrington, and Food Fight Show is about chef, DevOps, and everything in between. We are delighted to be joining forces with Arrested DevOps today.

**Matty:** Before we get into our very first dial-in, so to speak, show, a word from our sponsors. Arrested DevOps is brought to you by TenthMagnitude, a company that figures if you're listening to this podcast, you must be pretty cool. TenthMagnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate. By leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/10thmagnitude.

[00:01:09] This episode is sponsored by VictorOps. Built for modern incident management, VictorOps provides a unified platform for real-time alerting, collaboration, and documentation driven by your IT and DevOps system data. VictorOps helps you to respond to incidents more effectively so you can minimize downtime and make being on call suck less. Visit arresteddevops.com/victorops to schedule a demo or start your trial. Mention you heard about VictorOps on Arrested DevOps, and you'll be eligible for some sweet discounts too. GoCD is the on-premise open-source continuous delivery server created by ThoughtWorks. With GoCD's comprehensive pipeline modeling, you can model complex workflows for multiple teams with ease, and GoCD's value stream map lets you track a change from commit to deploy at a glance. GoCD's real power is in the visibility it provides over your end-to-end workflow. So you get complete control of and visibility into your deployments across multiple teams. Say goodbye to deployment panic and hello to consistent, predictable deliveries. To learn more about GoCD, visit gocd.org/arrested to download. It's completely free to use. Commercial support and enterprise add-ons, including disaster recovery, are available.

[00:02:25] Great. So this is a first. It's not our first joint episode with Food Fight Show. I feel like we've done them before, but this is definitely the first time we've actually sat down and said, let's do an episode together rather than just sort of randomly doing one at a conference. And it's also our very first dial-in show. Now, I will try to— I should have done my homework better to tell the story of how this show came about, but I know the story. Okay. So I want to hear Nicole. We'll put the links to the tweets in the show notes if I can find them, but that's all good things. This did start on Twitter as a joke. See also Pete Chestnut. So Nicole, what's your recollection of the genesis of this episode?

**Nicole:** I'm pretty sure. So someone posted a link and it may have been Preet. I think it was J. Paul Reid who posted a link to some ridiculous, like another study another study of someone finding again, let me say again, did I say again, that open office spaces are awful, right? Or someone, right? And I'm like, okay, again, so many companies ask me if they should do an open office space and if I have data on it and if I'd be willing to do a research project on it for them. And if I'll take their money to do another research project on this for them. So no, open office spaces are not good for this. Would you do research? And so I like, I made some snarky tweet where it was like, office space, open office spaces are bad. You sure, Nicole?

**Matty:** [00:04:00] Yes. Yes.

**Nicole:** It was like, Google it. Wait, would you do research on it? And finally I'm like, no, just Google the thing. You sure, Nicole? Yes. And it started this like long crazy thing where we were like, Paul said there should be a podcast called Yeah Sure, Nicole.

**Matty:** And Nicole was like, I don't have time for a podcast. And I was like, well, this sure sounds like an episode of Food Fight or ADO. And there you go. And, and when we announced it repeatedly the other day, there was a very excited tweet from Paul Reed saying basically the, oh my God, it's happening. So, so then the unofficial title of this episode—

**Nicole:** someone even made a picture of like—

**Matty:** oh, a logo.

**Nicole:** Yeah, a logo of—

**Matty:** you're gonna find it for the COVID art for this episode. So the unofficial—

**Nicole:** I have it, I saved it.

**Matty:** Oh good, make sure I get it. The unofficial title of this episode is Yes Sure Nicole. So that being said, what we've done is we've posited or questioned or raised the ability for people to ask their questions of Nicole and And we're putting them out. We'll be accepting questions in 3 different Slacks because ye too many Slacks.

**Nicole:** [00:05:09] I've got the Twitter up. I'm checking the Twitter.

**Matty:** We have the Twitter, so you can tweet at Nicole, @NicoleFV, or @ArrestedDevOps, or @FoodFightShow. But yeah, if you jump on, if you're a member of the Chef Community Slack, post them in the Chef channel. If you go into Hangouts, I don't know, ask them there somewhere. Somehow, Nell will find them.

**Nell:** It's in the Chef channel.

**Matty:** In the Chef channel, and then in DevOps chat, there's an Arrested DevOps channel. So, post them somewhere in there. We'll ask your questions. We'll ask our questions because even though Nell and I have had the ability to be colleagues and pals with Nicole, we still always have lots of questions to ask.

**Nicole:** So, so can I start with the open— can I start with the open office spaces one? Someone asked me this. Someone asked me last week. So let's just go ahead and get this started. Okay. So, so many companies should introduce ourselves.

**Matty:** Oh, yeah.

**Nicole:** Okay. Yeah, sorry, I get so excited. That's okay, that's good.

**Nell:** Okay, uh, all right, so doing the introductions, I'm Nell Shamrell-Harrington, co-host of Food Fight. Delighted to be there. And Matt, who are you?

**Matty:** [00:06:15] Uh, so I'm Matt Stratton. I am the co-host of Arrested DevOps. Um, I'm also delighted to be here, and I work at Chef, and I'm based in Chicago.

**Nicole:** I'm Nicole, uh, Nicole Forsgren. I'm a guest on Food Fight and Arrested DevOps. Um, I'm CEO and Chief Scientist at DORA, DevOps Research and Assessment, and I do, I rub science on things. I do a bunch of research.

**Nell:** And I've got to do it because I hardly ever get to call you this, but we have Dr. Forsgren with us today.

**Nicole:** Thank you.

**Nell:** All right, let's go on into the questions. Okay.

**Nicole:** So, do you want me to start with the open office spaces? Yeah, jump in. Okay.

**Matty:** Nicole, open offices. Do you have feels? Open offices.

**Nicole:** I mean, I don't know if I have feels, but I've read a whole— but I don't have the data. I've read a whole bunch of people that have a whole bunch of studies that have a whole bunch of data on all the things. So, so here's the thing. Everybody wants to do open office spaces, or they, they think they want to do open office spaces for several reasons. One, like it's the hot, cool new thing, right? So many people are doing it in Silicon Valley. So many companies want to do it. They think it's like super exciting. Okay. Here's why. It might be interesting, and it might be really encouraging for open collaboration, open communication, free flow of ideas. Also saves you money, right? Because it saves on real estate space. You don't have to put up a whole bunch of walls. Many times it's also good for natural light. So we do know that natural light actually contributes to better productivity, better happiness. Lots of really, really good things in terms of work and so many things. The challenge though is that it tends to have negative effects in terms of productivity. It tends to decrease your ability to get work done, concentrate. It increases shifting or juggling tasks. And so, you have drastic, drastic decreases in how much you can get things done. So, you have to end up increasing how many pods you have, phone call-in booths, meeting rooms, distractions. So, you have to have more headphones, like noise-canceling headphones, but even people that walk past your desks. And then, in terms of that cost savings that you have, So many times companies are like, are super excited because they have cost savings, right? So they'll do things like open office spaces because they save costs, but they don't do all the other things that all the other super fun Bay Area companies do. Like, they don't do dry cleaning, they don't do childcare, they don't do food, they don't do everything else that helps offset everything else. So, By a large part, open office spaces are not super conducive to getting a whole lot of things done. If you have open office spaces, you have to have a lot of other things to offset the productivity costs. Now, it is good to have co-located workspaces, but, but you have to have a lot of other things to kind of offset the productivity hits.

**Nell:** [00:09:34] Awesome. And we just got a follow-on question in Hangouts from Michael T. Lombardi. The question is, do we find that open office spaces contribute more to leaky tribal knowledge transfers? That's in red. Versus tools like Slack, HipChat, wherever, where people will share knowledge verbally and lose the recording of that knowledge for people who weren't in on the conversation.

**Nicole:** So leaky tribal knowledge transfers. So what do you mean? So leaky tribal knowledge transfers. Let me find that. Can you, can you say the leaky tribal knowledge transfers one more time?

**Matty:** I'm guessing— sorry, didn't want to cut you off, Nell. My translation on the verses would seem like a leaky tribal knowledge. Like, I'm just talking to you with mouthwords very quickly to help you solve your problem. And that information transfer is not captured in any kind of a way. It's not shared. So just sort of leaked from me to you and boom.

**Nicole:** So not necessarily, because you can still have, uh, one-on-one Slacks and one-on-one chats where, um, like you don't necessarily— so like I could Slack or I could chat Nell, or I could Slack or I could chat Matt, and then it doesn't go to anybody else. We can still Zoom, we can still Google Hangout, we can still Google Chat. Um, it can contribute to— and it's, and it's not even necessarily open office spaces, it's co-located office spaces, right? So you can still have, uh, flybys, you can still have the water cooler conversations that can contribute to more and better collaboration. So, so many people got really upset with Marissa Mayer when she said everyone has to be on site. And some people, you know, really don't appreciate the Netflix model where you have to be on site. But quite honestly, there are, there are a lot of things that happen better when you're co-located. It's just true. It just happens. And it's just better. For certain types of collaboration and spontaneous communication and knowledge transfer. So like one piece of my research is in knowledge transfer and knowledge management and communication and collaboration. There are some things that just work better when you're co-located, that the spontaneous communication that happens is just better when you're, when you're there. Um, however, we do know that that does have incidental negative effects on diversity because it ends up— what's a good way to say this— it ends up disproportionately affecting those who tend to be, who tend to have non-traditional families or family structures or work environments or come from non-traditional backgrounds or disadvantaged backgrounds. So single-parent families, single moms, who work farther away from the workforce, right? So, um, like if you don't have a parent at home or a partner at home who can take care of the family, it's much more difficult for you to, to transit into work. So having a remote workforce makes it a lot easier to remote in, which means you can contribute to the diversity of thought and diversity of contribution to building software and community communities and everything else better.

**Nell:** [00:12:54] Awesome. We got one clarification from Michael in chat, which was, does the physical visual availability of humans nearby make you more likely to fall back on face-to-face methodology?

**Nicole:** Um, it helps, yes, or it can help, but not necessarily. I mean, there have been several times— so anecdotally, I know this isn't the same thing as data, but anecdotally, sometimes I just get lazy and I still text and I still type, and that can be nice because you end up having that recording. But there are, like, I have friends that do research in this area, and we see channel effects where some people prefer to communicate verbally, and they prefer, you know, other things to be in chat medium, and they prefer other things to be in email, and they prefer other things to be in video chat, even if you're co-located. But by being remote, you have forcibly removed a certain type of communication medium.

**Matty:** [00:13:55] Cool.

**Nell:** All right, we've got another question, and that is from Glenn Sarti in Hangouts, which is metrics— yep, metrics are great, but we see them weaponized a lot, either by gaming them as engineers or measuring the wrong things as managers. Do you have any advice on how to use metrics responsibly E.g., I heard you mention use competing metrics, MTTF versus MTTR. So, Nicole, how do we use metrics responsibly?

**Nicole:** So, there's this great quote by the gentleman that wrote The Goal. Why am I forgetting his name right now? But he wrote, and it's because I'm getting the wrong name coming to mind right now. It still starts with a G. Yeah, Goldblum. Uh, or not Goldblum. I'm getting Gladwell, and I know that's also wrong. The goal— this is why I have— I'm, I'm doing the Google, and I've even got it like Goldratt.

**Matty:** [00:14:57] I've been on mute.

**Nicole:** It's Goldratt. It's Goldratt. No. And he said, um, tell me how you measure me and I'll tell you how I behave, right? And so yes, there's this, there's this fantastic, um, idea of capturing metrics that are in tension with each other, right? And that will really, really help because that will help keep things, keep metrics from being gamed. So, the challenge here, you're right, is that we don't want metrics to kind of be a bludgeon. And hopefully, management will understand, and the entire organization and the culture will understand that The goal, the goal, pun not intended, but really the lowercase goal, the lowercase goal is that what we want is continuous improvement, right? We don't want KPIs, we don't want local optimizations. The goal is continuous improvement. And the end goal, the capital G goal, delivering value, customer satisfaction, making money and continued value delivery. And so, when we use metrics in that way for values alignment, that can be a really, really fantastic thing, right? And so, what we tend to focus in on for my research and what we've seen works very, very well for organizations, as an example, is both for software development delivery, is both speed and stability. Because those are attention. It speaks to both development and operations, their intention. And it helps us focus on— and it seems like it's kind of a short-term goal, but it's a short-term goal that serves to allow you to pivot when you need to pivot, deal with compliance and regulatory changes. We know that it is predictive of value creation in terms of profitability, productivity, and market share. Delighting your customers, those types of things.

**Matty:** [00:17:01] I mean, I think transparency around these goals is huge, right? Because—

**Nicole:** Absolutely.

**Matty:** Mandates never work, right? And people will work, again, obviously, you know, will work to the incentive you give them, even at the destruction of your company. There's 2 anecdotes that come to mind. One is, I've heard Jez tell the anecdotal story of, you know, a company where they said, we're gonna add a test in every sprint. And in every sprint, there was a test added that was assertive. Equals true. They're like, sure did add a test, did what you said, did the thing you said to do, and we will do the minimum thing you ask us to do because that's how we know we get our cookie, we get our pat on the head, we've done the thing that you told us is how we measure our value as a contributor. If I'm told the way that I measure my value as a contributor is by adding tests, not by shipping better software, and I know that's a super vague We wanna make it better, but those are 2 different things, right? And the other, that's just— I hesitate to use this example because, as a person, he's awful, but in a very, very old book by Scott Adams, he told the story of a company where they had a system of bug bounty where QA testers received a $50 bonus for every bug they found, and software engineers received a $50 bonus for every bug that they they fixed. And overnight, a black market came up in software engineers introducing defects, telling their friends in test where the defects were so they could find them. And then, of course, the engineer knows how to fix it, and they pay out thousands of dollars in these bug bounties in 48 hours. And the thing is, none of this is driven around what they're actually trying to do.

**Nicole:** [00:18:42] Right, right. So, what is the goal? The goal is to deliver quality software, to make our customers happy, and deliver value, right? Always go for the end goal and the outcome.

**Matty:** Outcomes are, like, the most important word. This is my new joke. So, in 2014, you couldn't give a talk, you were not allowed, I think, the rule was you couldn't give a talk at DevOpsDays without using the word empathy. I'm pretty sure this year you can't talk about DevOps without using the word outcome. That's our word of the year. Everybody needs to, and I don't mean that as, like, to make fun of doing it. I mean that, like, every now and again, we find this thing where, like, we have to spend a year pounding this into everybody's skull. So you get it. And I think that's this year is outcomes. Learn nothing else but outcomes this year, and then you can learn something new next year.

**Nell:** And new book, Empathetic Outcomes, coming out next year, probably.

**Matty:** Oh, good talk idea.

**Nicole:** SEO, SEO for the win, right?

**Matty:** Okay.

**Nicole:** It'll be all outcomes.

**Matty:** All right.

**Nell:** We've got a question from Rob Kidd in the Food Fight channel of Chef Community Slack. And it's, howdy, here's a question I'm still pondering. What are some specific DevOps practices an organization can adopt that also have a clear, measurable return on investment, and how do I do that measurement? So, what I'm thinking is, you as an engineer, you come to an exec, exec says, all right, we can do this, but let me know what the ROI is. How do we do that?

**Nicole:** [00:20:04] Good times. I'm going to go back to your favorite buzzword, Matt. Right? So, when we're talking about ROI, we want to be talking about outcomes. We always want to be talking about some kind of outcomes. I've got a great ROI white paper, by the way. It's posted on devops-research.com. It's free. Everyone can go check it out. So, if you want to talk about the practices that can drive value that you can help, like, tie back to some ROI, I can kind of deconstruct this in a couple of different ways. So, let me start with the practices. So, the things that we know drive good outcomes, We've been researching this for the last few years. So, I work with Jez Humble, I work with Jean Kim, we work with the group at Puppet, and we've been studying this for several years. Some good practices fall into a few key categories. And we know that they drive good outcomes. When I say drive, I'm talking more about more than just correlation. I'm talking about predicts. So, the categories are culture, technology and automation, process, like management processes, agile processes, and also measurement and monitoring. These are outlined in the last few State of DevOps reports, and also the 2017 State of DevOps report will be released the first week of June. So you could download all these reports, they're free. There's also a link to all of these on the DevOps— the DORA website as well, devopsresearch.com. So in terms of culture, we know that a good Organizational culture that fosters information flow is good. And some of these questions have been open-sourced as well. In terms of technology practices, we know things like using version control, like version control all the things, all of your production artifacts is good. Improving your test automation, improving your deployment automation, these are all good things. Developing off of trunk, having good trunk-based development practices is good. Doing continuous integration, doing continuous development is good. Having a good handle on test data management, shifting left on security, these are all good. In terms of agile practices, using WIP limits, using visualization, working in small batches, these are all good examples. In terms of measurement and monitoring, using monitoring tools, And using data to help drive business decisions, right? So, don't just use monitoring to wake you up in the middle of the night. That's not enough. Notification of failures from closer rather than far. So, having automated notification and not just from Twitter and your customers and the NOC. Using value stream maps. These types of things are all helpful and good practices that we've seen seen drive your ability to develop and deliver software with both speed and stability. The other nice thing about all of these is that it's nice because it delivers value, but it also decreases your deployment pain and it decreases burnout, which in terms of people who are doing the work is fantastic, right? Because we wanna make our work better. The thing that's nice in terms of an organizational standpoint is that it also has been shown to help employee hiring and retention. So we see that high-performing teams are 2.2 times more likely— or employees in high-performing teams are 2.2 times more likely to recommend their organization as a good place to work, which is huge because hiring is such a big thing right now, right? That it's such a big expense, it's such a big cost, turnover is so expensive. These findings have been replicated in places like Harvard, right? So HBR found that employee net promoter score was a huge predictor of revenue in organizations as well. So when we— like, if we shift over, if we take a slight shift over to actual ROI calculations, what we want to do is think about this in terms of both cost savings and value. And I really suggest that companies really think about this in terms of value and not just cost savings. Cost savings is good, but it's really— it has limited applicability. We're really used to thinking about this in terms of cost, but that has a short and small shelf life because once we've reduced our cost, we're done reducing our cost, right? We can cut our costs, but once we've cut that cost, we're done.

**Matty:** [00:24:23] And is cost cutting not an outcome, but it's a thing that gets you to the outcome anyway, right? Like, you're not in business to spend less money, right? I mean, maybe the government is. I don't know, maybe this does get a little different in the public sector, but most businesses are not in business to spend less. They're in business to make more.

**Nicole:** To make value and deliver value to customers. And I love that point. So, and government's nice. And by the way, stay tuned, 2017 State of DevOps Report.

**Nell:** Yay!

**Nicole:** We deliver value. DevOps helps us deliver value to all organizations, not just those that are profit-driven and commercially based. Saving money is good and it's important. And that's what helps us continue to deliver the value, right? Like we don't just want to be burning money all the time, but saving money, we can only save money so far. And once I've saved money, that has diminishing returns. Let's say I save money this year. Once I've saved $1 million this year, I can no longer save that same million dollars next year. I don't keep getting credit for it. Sorry, like, that's not the way business works.

**Nell:** [00:25:33] That makes sense.

**Nicole:** I saved a million dollars, I'm done. Also, like, that's a little scary for those of us who are in technology, because does that turn into cost cuts? The better way to think about it is saving resources, saving time through automation. Let technology do the boring, rote, mundane, repetitive work, recover those cycles, turn that into innovative, value-driven work. Let us solve problems. Let us do interesting, innovative things that computers weren't meant to do. And let us take that time and drive value and innovation for the company because, you know what? New free headcount, right? If you can save a third of my day, I'm a third of a new person. A third of Matt, a third of Nell, and a third of me, we just created one new person.

**Nell:** [00:26:35] It's a chimera.

**Nicole:** Yeah, for free. We just got a new person for free.

**Matty:** And that's the thing, it's like thinking, it's the same idea of the error budget with Google SRE, right? Which is you get rid of something so so you can do something else. And what's interesting is, you know, if you're listening, raise your hand if you have managed a budget in IT where if you saved money, you were rewarded by having less money the next year, right? Like that's what happens. You sit there and they're like, you get approval for $10 million this year, and then you do an awesome job and you deliver the same or better service spending, you know, $2 million less. And they go, great, now you can do it for that next year. And your problem is, so what this teaches you, because the incentives drive the behavior, they influence behavior, is they influence you to spend money and to not think about it as saving money, right? You're about doing money better. It's about like, oh well, shit, it's the end of the quarter. So what can I go spend money on so that next year when I want to do a thing, I have the money for the thing I don't want to do.

**Nicole:** [00:27:39] And I love that because when you add value, that's additive every single year. You keep adding value every single year. You can't keep saving money every single year, right? You keep adding value. So there's a follow-up. So Choi just said, you mentioned CI, WIP limits. In your opinion, what's the biggest contributor to an org's success? So that's part of that's going to depend, but I love— so there's an interesting, interesting piece here that that makes me think of. Most measures in an organization are going to be lagging, which means it's going to tell me what already happened. And that's going to be good for me to know. There are very, very few measures that are going to be leading indicators, which is going to tell me what's about to come. WIP limits, work-in-process limits. WIP limits is one of the very, very few leading indicators of software performance.

**Nell:** I love that.

**Nicole:** Which is amazing. Domenica De Grandis will tell you about this in, like, I love it because you talk to her and her face lights up, she gets super excited. So WIP limits, like, I would tell so many organizations, if you're not measuring anything, start with WIP limits. And here's why. So WIP limits is like, here's your card of, like, all the things that you're about to do. Institute WIP limits because— so here's why it's a leading indicator of what's about to happen. As a software engineer and as a developer, like, here's the things I'm working on, here's the things that are about to come. You keep track in your mind of what you're going to have to do. And you, intentionally or not, subconsciously or not, you keep track of, you account for, you accommodate for the work in your backlog. And so, you start to build in complexity to be able to deal with the work that's coming. So, if you can limit that WIP, even if all you do is hide it, I don't want to mean to say, like, hide it, but basically, just don't let your developer see a 35-card backlog, because they will start unintentionally accommodating for the upcoming complexity that doesn't need to be there.

**Nell:** [00:29:55] I want to ask a follow-on to that, and that is, I used to work at a company where we kind of had WIP limits, But people would come to me privately and ask me to do things, and I would kind of hide what I was doing to stay within that WIP limit. But it didn't end well. Do you have any advice for trying to avoid that kind of situation?

**Nicole:** I do. It's going to sound flippant. Just say no. And it's easier said than done. It really is, right? I mean, it— I'm going to say a thing and people who know me are going to laugh. Because I'm currently dying of the WIPocalypse. Term stolen, borrowed from Jean Kim, right? So I— it took me a long time to get to the point where I could just say no, but because I'm not very good at it, because we don't want to say no, because we don't want to look like we aren't being cooperative or we aren't being a team player. And I'm currently dying of the WIPocalypse, like, really hard, right? It's not good. So, like, one really good strategy is saying These are the things I need to get done. Help me prioritize. This is all I can do right now. Help me prioritize. You can go to your manager or your team lead. Help me prioritize.

**Nell:** [00:31:05] Right. And that makes sense as being part of a manager's job, and a good manager will do this, is to shield their team from those kinds of hidden work requests coming in.

**Nicole:** And the challenge is that sometimes we don't make that transparent to our managers. And so we need to.

**Matty:** That's, that's the thing that gets, gets challenging, I think.

**Nicole:** Right.

**Matty:** And then this is, I, I have WIPocalypse problem and my wife has been very good about saying, you have to remember that you can say no. I'm like, no, you don't understand, but my job is to— but she goes, no.

**Nell:** Right.

**Matty:** And if it is, then there's a problem. And this is a very, very hard skill, which is like you just said, managing up, right?

**Nicole:** Yes.

**Matty:** And managing up doesn't mean, so the way that we kind of react is either, well, I'll just do it all. And then you're like, the sysadmin who used to work for me who'd work 80-hour weeks because he just would never say no. He'd say yes to everyone, didn't matter, whatever, right? And you can be a great manager and this stuff can happen and you don't even know what's happening, or you just let it go because you're still dealing with your own stuff. But what doesn't work is to just then say no to a request, right? You have to follow up. You have to say, what's wrong with the system? You have to run a blameless postmortem on this thing that made you You were thin provisioned. Thin provisioning doesn't work for humans. What would you do if this was a system? If you had a system that was overcapacity, what you wouldn't do is you wouldn't say, well, I let this— you would let the system say no to requests because you don't want it to kill all the— this analogy is going to go south on me in a minute, I think, but it might work. But let's say I have a system and it's capable of supporting 100 requests per second. Now it starts getting more than 100 requests per second. What do I want to have happen? Do I want to let it keep trying to take all those requests, and now all the requests suck and suffer, or do I throttle it and say—

**Nicole:** [00:32:51] Then eventually, they all fall on the ground.

**Matty:** They all fall on the ground, so nothing gets done. It can't serve any requests, or I throttle it and say, this system cannot handle more than 100 requests per second, so all requests after that get denied. This is going to now elevate this to a problem, which then, if it's my system, we have to say, well, we have to do this because it sucks to be request 101, But what we don't do is just go, well, web server, you know, miss your kid's Little League game, right? I mean, like, so that's the thing. People understand that if you give them Nicole's favorite word, data, right?

**Nicole:** And this is where I love the Google SLO model. Like, then there's a period where it's like, I've been humming along at 80 hours a week for a little while. It's fine. It's fine. It'll be fine. So if you're— for people who are not familiar with this, um, service level objective. I've only promised 3 nines. I've been running at 4 nines. I've been running at 4 nines for a while. Guess what? I only promised you 3 nines. I'm shutting down. You're only getting 3 nines.

**Matty:** [00:33:57] Why?

**Nicole:** Because I only promised you 3 nines. We negotiated 3 nines. You need to be able to deal with 3 nines. So like, you know what? If we have negotiated 40 hours a week, 50 hours a week, and I'm running at 80, shutting down because you need to be able to deal and function when I am at 50 hours a week because like, that's what happens. You need to not be— like, S3 went down, right? And people, like, panicked. S3 had been running at way higher than availability. Like, that's what happens when you start relying on something way higher than you should. This is what happens when people burn out. Suddenly, they burn out, and people are like, I didn't know Chris, or Pat, or Jesse was burning out. Well, we've been relying on them for way too long, and then suddenly, they burn out.

**Matty:** [00:34:58] And relying on, again, let's run this SRE book analogy into the ground, but like they have their little side note about their global Chubby outage, right? So like they have a service called Chubby that has a relatively low SLO, but it's a pretty robust service. It's up almost all the time. And what they were discovering was people were like taking it for granted, for lack of a better term. So they said, we need to just say, we just quarterly shut it down. Just to make sure that we—

**Nicole:** And that's the SLO.

**Matty:** Yeah. They, they, they, if the SLO doesn't happen in the— that's the other thing too. We're always about making sure we achieve it, but it's like with your SLO, you have to sort of also say, if I over, if I go over it, I can bring it down. And if you're a human, so the thing is we also, I know a lot, 'cause I get a lot of feedback from guests, or I'm sorry, listeners to the show who are like, this all sounds rad, but my company's in the dark ages. So a lot of this stuff is really good to say, like, you have to be able to do that, but there's also, what can I do right now when I in a slow-moving organization that I can't go renegotiate my contract with my boss right now and say, I'm going to set this. You can still do things like, you still can say no. We, in a case like that, you don't say no necessarily because you're afraid of not being a team player. You don't say no because you're afraid to get fired, but you can say, I'm going to say no, boss. Here's why. And how are you going to help me?

**Nicole:** [00:36:23] Ask for prioritization. Help me prioritize. These are the things that I have. Help me prioritize. That's, I swear, I wish I remember who taught me that phrase. It's the best thing I've ever learned. Help me prioritize.

**Matty:** It sounds like a Tom Limoncelli thing from his Time Management for System Administrators.

**Nicole:** Except I know I got it before and I got it in academia.

**Matty:** Well, it's probably not an uncommon evolution.

**Nicole:** Me prioritize.

**Nell:** And I want to add to that, because I have been in the situation. If you're at an organization, you have a boss who says, well, I can't prioritize, we just need to do all of these at the same time yesterday, the best thing to do, and we have this luxury as IT professionals, is to leave. And it's hard because I think a lot of us feel a sense of loyalty to where we're currently working, and we don't want to leave them in the lurch effectively. But what I tell people is, If you were not returning business value to the business, the business would probably not hesitate to let you go.

**Nicole:** This is an economic transaction, people.

**Nell:** [00:37:23] Right. And it's the same thing. If the business is not giving business value to you or it's taking substantially away from your life value, it's time to go. Yeah.

**Nicole:** As you said, it's an economic— We're trading money for work. Let's be real. I mean, I love everybody. This is lovely. I'm like, I'm running a little startup. I work with Jez and I still all the time have conversations with him. I'm like, I need to make sure that I am like, that you are happy and you are fulfilled doing the work that you're doing. And I am and you are motivated and I'm helping to motivate you and giving you work that's fulfilling and wonderful and lovely because like, this is an economic transaction and I still need to make sure that the thing is right because—

**Nell:** All right, changing the subject just a little bit, we have another question from Glenn in Hangouts, which is culture question. I'm a software engineer, not a stats person. Do you have any recommendations on what to read/learn to help me talk to data science type people better? E.g., my job— last job was at a bank, and banks love statistics. How can I leverage their data expertise? Okay, we're talking about stats ops here, I think.

**Nicole:** [00:38:37] Yes, that's ops. So let me think. So it sort of depends on who you're talking to and at what level. Matt, going back to— go back to your thing. Ask about outcomes. Ask about what is important to them and what they're measuring. And then ask about, um, oh, I so want it— this, this is where my metrics workshop comes in super hard. I love this part here because this is where we can start talking about translations between the business and what's important to the business, and then the metrics and what we're using here. So ask about what they're measuring and why they're measuring it and why it's important. So, and start with words and then go to measures. So what outcomes are they measuring? And what do they think is driving those outcomes or correlated with those outcomes. And when I say correlated, so not everyone knows correlation, although many people do. So when I talk about correlation, I just mean how do things move together or move opposite? So when correlation, I mean like when one thing goes up, another thing goes up. If it's exactly correlated, it's correlation of 1. If it's not correlated at all, it means if they don't move at all, it's 0. If it's opposite correlation, it's a -1. So correlation always kind of ranges between 1 and -1. So If it's opposite correlation, one goes up, the other one goes down. This is opposite correlation. This is positive correlation. Um, prediction means that, um, as one— as one goes up, like historical prediction, then I expect I can predict the movement of something else. Causation means that as one goes up, I know it will cause or it will, um, like make something else move. Um, in business, we don't see much causation except when we do things like A/B tests, randomized trials. We tend to see that, uh, quite a bit in medical, medical contexts, although as we're doing much more A/B testing online in marketing context, we're seeing more of that. So you can ask them and say, like, what's the—

**Matty:** [00:40:43] what are—

**Nicole:** what types of data are you collecting, and, and why do you think you're collecting it? And just ask them Now, if you're asking about the data they're collecting, ask them what it stands for. You can use the word proxy. If they use the word proxy, that's what it means, what it stands for. So within systems engineering or within systems or software, we can look at lots of different types of things. So a good example would be NPS, right, for customer satisfaction. So NPS and customer satisfaction, right? The metric is NPS, customer satisfaction is what it stands for.

**Matty:** NPS is Net Promoter Score, for those of us who don't know.

**Nicole:** Yes, Net Promoter Score. Or if we were looking at response time, someone might say, oh, well, for me, that means performance, right? So, you can ask them those types of things. If they just start talking about data, you could ask, well, why are we collecting that data? What does that mean to you? Why are we using those? And you can kind of start sketching it out and mapping it out, either in your head or actually on paper. And then understanding why, why they're collecting the metrics that they're collecting, and then what it means to them. And then if you have a disagreement, try to pull it back to the data and try to understand, um, is the— is your disagreement— like, if you, if you don't totally understand or agree with what it is they're collecting, do you disagree with the metrics that they're collecting? Or is it that when they're collecting something if they're collecting NPS, right? Net Promoter Score. Is it because you don't think Net Promoter Score is a very good measure, or is it because you don't think customer satisfaction matters? Hopefully it's not because you don't think customer satisfaction matters.

**Matty:** [00:42:24] That's, that's a lot of data. And I think we'll try to maybe, Nicole, offline, if you've got some recommendations for some, some light reading about statistics, we'll try to remember to put those in the show notes. We got a question from the tweeters, from our friend Suchoy, who asked if we could get a recap from you on DevOps Days Austin, which just took place. One of the things that happened there, I know, was that Nicole was determined to be the Chuck Norris of DevOps, as I have called Bill Kubinski the Taylor Swift of DevOps. We do like our analogies. So, it seemed to be amazing. If you could give us your kind of your highlights, your lessons learned, or just whatever you wanna talk about, about being able to be lucky enough to be there. It's been a long-running event.

**Nicole:** It was amazing. It was incredible. I don't know how they pulled the speaker lineup that they did, but there were 10 keynotes. Um, I'll see if I can remember them off the top of my head. It was Patrick Dubois, um, John Willis, Jez Humble, um, Andrew Clay Schaefer, Damon Edwards, Jean Kim, myself, Kelsey Hightower, Leo Schlossnagel, How many did I get up to?

**Matty:** [00:44:02] I think they cheated and just went to the Wikipedia of DevOps and just, like, were like, these are names.

**Nicole:** I think they did.

**Matty:** Or they went and looked at DevOps Against Humanity's most popular cards and figured that was— Do you guys remember DevOps? Sorry, did y'all remember DevOps: The Game? I can't remember what company did it. It was, like, a card game about DevOps, and they actually had, like, power cards for different people, like Jez and Gene, and they were all these cool stylized cartoons. And I don't know if it ever happened, but I think they did.

**Nicole:** Oh, and Adrian Cockcroft. No, I don't know how I forgot him. He was right after me. It was like, the community was amazing. The talks were amazing and inspirational. Everyone needs to go watch Kelsey Hightower's talk. It was amazing. It was really, really, really fantastic and great. All the video is up. He gave his talk without slides. He spoke about what it was like working in tech and how he got into tech and his personal journey. I don't know that there was a dry eye in the room. And then I had to speak after him. It was incredible. I'm a better person for knowing Kelsey. It was amazing. The other, I mean, all of the All of the speakers were incredible. I cannot believe I was fortunate enough to participate in the event. And everyone there was lovely. It was such an incredible event. Everyone was great. It was amazing. It was great. Everyone had great talks. Most of them were brand new talks. So, they were all really, really fabulous. And the community is great. I mean, I love DevOps Days.

**Nell:** [00:45:59] Awesome.

**Matty:** Well, I think— So, I found, by the way, the game was called Release. It's called Release the Game. And so, I'll put a link in the show notes. I found the Kickstarter. Yeah, it's really funny, like, to look at some of the pictures. And I don't know how I— And if I recall, there was probably some drama about it somehow. Someone didn't like it, you know, because they weren't in it or something, probably. But, um, we should push them on Kickstarter to do a new version with everything we've learned. So I think we're getting close to wrapping it up. Uh, Nell, did we have any other questions that you're seeing in our various channels?

**Nell:** Nope, I think, I think we've answered all of them, and I think it might be good to move on to picks now.

**Matty:** Great. Um, so, uh, Nicole, um, we on our show We call them checkouts because while we also stole them from the Ruby Rogues, we pretended we didn't by changing the name of them. But either way, I don't know if you have any things you'd like to share with our audience, books, a beer, we'd love to share a beer, anything like that. I know you've got some upcoming conferences you're speaking at or contributing to.

**Nicole:** [00:47:14] Yes. Speaking at Velocity, speaking at DevOps Enterprise Summit London. We have a metrics workshop coming up June 7th, the day after DevOps London, and we're repeating the metrics workshop July 24th, right before DevOps Days Minneapolis. Also, State of DevOps report is coming out June 5th, and we have a book coming out that's summarizing everything that we have found the last 4 years. Rough cut will be handed out in London.

**Matty:** Awesome. So, if you're listening to this in the future, go find it online.

**Nicole:** Yeah, come find all the things.

**Matty:** Google is a thing.

**Nicole:** Yeah.

**Matty:** So, Mel, what are your picks?

**Nell:** Sure. My first is DevOps Days Seattle, which just happened a couple of weeks ago. I was a speaker at it, and the quality of the presentations consistently was great.

**Nicole:** It was amazing.

**Nell:** Yeah, it was very, very well done, very well organized. I know the tickets sold out in 3 days, which makes me think of like a boy band concert in the '90s. But lots of good conversations, lots of good people. I highly recommend going if you can next year. And I think I remember the organizers saying they're looking for a bigger— or to allow more people to attend it next year. The other one is The Expanse, which is a sci-fi drama on Syfy or whatever that channel is called these days. And what I like about that is it has the drama and political intrigue that I loved in Battlestar Galactica. It just happens to take place in a sci-fi world. And there's some bits of horror, but it's not too much. It's similar to Stranger Things if anyone sees that. And yeah, I don't recommend watching some episodes right before bed, but it's, it's not a gorefest. Uh, so it's, it's tremendously enjoyable.

**Matty:** [00:49:00] The hashtag for that show confuses me because I don't watch it, but it's like Expanse sci-fi, but it's SIFI, and it looks like Expensify, which is our expense system. And it's not, but I'm like, why are people tweeting about expense systems? I can understand if it was a thing for her and they want to complain about it, but Expensify is supposed to be good.

**Nicole:** That is hilarious.

**Matty:** So yeah, over to you, Matt. So yeah, I've got a couple I just sort of threw together. So one is a silly little game called Robot Unicorn Attack 3. So it's the 3rd iteration. This is done by Adult Swim Games. So Adult Swim, like Cartoon Network. It's just an endless runner where you're a robot unicorn and you jump or you crash and die. And it's ridiculous. But the best thing is it's a loop of an Erasure song over and over and over again, which makes me just want to play it constantly. So there's in-app purchases, but you don't need to buy them because the game is dumb, right? Who cares? Just run and whatever. Another app is, uh, Nomorobo. So it's an anti-robocaller app that's been getting a lot of press. Uh, I've been using it lately because despite being on no-call lists, you still get a lot of crap. And I've tried a lot of different alternatives for this. It works pretty well. It has a subscription tied to it, so it's not free, but my annoyance level does have a price. So you might want to check that out. Then finally, this is something I'm predicting to say that I'm telling you should check out. There's this thing called School of Rock, and I don't mean the movie with Jack Black, but it's a music school that I think is at least all over the US, if not potentially international. It's for kids to go and learn how to play rock, and they learn how to play in a band. My 7-year-old decided a month ago that he wants to learn to play rock music, and he went and he had his first lesson last week and was obsessed with it. It seems like, I mean, all the local kids that are in it, they just go, their parents drop them off, they hang out and jam, and it seems like a really great experience. So, we'll be reporting back on that more because we know that metal is an integral part of at least doing Chef, if not most of DevOps. And when the instructor asked my 7-year-old son who his favorite band was, he replied with Metallica. So, I think we're off to a good start. But yeah, so if you go to arresteddevops.com/call-in-show is where all the episodes' show notes will be, at least when we release them. So, livestream listeners, don't bother yet, you'll get a 404. That site also is where you can sign up for our newsletter, our Patreon, all that good stuff, all the Arrested DevOps stuff you could ever want. And also, foodfightshow.com is where you can find all the internet stuff you'd ever want about the Food Fight Show, especially go listen to older Listen to all the old episodes if you haven't, because Food Fight Show was one of the first DevOps podcasts I ever listened to, and I wouldn't be doing this if it wasn't for Brian Berry and Nathan Harvey, who started, you know, and Matt Ray, who started the Food Fight Show. So, yay. And I'm so glad that Nell is making it, like, continue to be awesome. I cannot stress that enough.

**Nell:** [00:52:09] Thank you.

**Matty:** I've missed the Food Fight Show.

**Nell:** Awesome. Well, this was a fantastic episode. I'm so glad it worked. I was really worried that we weren't going to get any questions. So, thank you so much to everyone who submitted a question, everyone who listened, and thanks so much to Nicole for joining us.

**Nicole:** Yes, thanks for having me.

**Nell:** And with that, I'm Nell on Twitter @nellshamrell.

**Matty:** I'm Matt @mattstratton.

**Nell:** We're Food Fight Show and Arrested DevOps, and remember, there's always DevOps in the banana stand, so keep it hot.
