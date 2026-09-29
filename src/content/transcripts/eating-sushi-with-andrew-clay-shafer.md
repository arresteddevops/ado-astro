**Matty:** [00:00:08] Welcome to Arrested DevOps, episode 39, Eating Sushi with Andrew Clay Shafer. I'm your co-host, Matt Stratton, @MattStratton on Twitter.

**Bridget:** And I'm your co-host, Bridget Kromhout, @BridgetKromhout on Twitter.

**Matty:** Arrested DevOps is brought to you by TenthMagnitude, a cloud services company that figures if you're listening to this podcast, you must be pretty cool. You can find out about joining their cloud services team at arresteddevops.com/10thmagnitude. This episode is also sponsored by PagerDuty. PagerDuty eliminates the noise, chaos, and manual processes across the entire incident lifecycle to decrease resolution time. PagerDuty is trusted by companies like Etsy, Nike, and GitHub. To sign up for your free 14-day trial, visit arresteddevops.com/pagerduty.

**Bridget:** So today we're recording and broadcasting live from DevOps Days Minneapolis 2015, and with a live studio audience, a slash heckling squad.

**Matty:** Speak, give us some applause, audience, so they know you're—

**Bridget:** [00:01:08] Yay!

**Andrew:** Recorded in front of a live studio audience.

**John:** I know.

**Bridget:** And our special guest today is today's closing keynote speaker, Andrew Clay Shafer. And I'm really excited to have him on the podcast. I think the main reason we're able to have him on the podcast is because we cornered him since he's actually at this conference. Because it's difficult to track him down.

**Andrew:** I told you I could do it over the—

**Matty:** Well, we wanted to make sure he was legit. We've been doing this podcast for a while. We're like, I guess you've been saying enough smart stuff, we can bring you on our show.

**Bridget:** Well, trust but verify. I wasn't even trusting that the airlines were going to get him here. Yesterday when I saw that there was—

**Andrew:** Where were flights shut down from?

**Matty:** Everywhere. United had like a global or like a nationwide ground—

**Bridget:** United stopped all their flights, and I was like, oh, he forwarded me his itinerary. He's on Delta.

**Matty:** Maybe he'll be fine.

**Bridget:** There was an automation problem with United yesterday, and they grounded all their flights.

**Matty:** There actually really was, or a lack of, a lack of automation.

**Andrew:** So I want to start with a little pet peeve I have, the quirky way that I process the world. I have a pet peeve against the numbers on podcasts. Why do you need an episode number on a podcast? Zero value.

**Matty:** [00:02:21] OK. So this is a thing, actually.

**Andrew:** Sort by date. Done.

**Matty:** I will tell you why.

**Andrew:** Free yourself from numerical oppression.

**Matty:** So this is a really good thing. And there's actually an entire episode of a podcast called The Audacity of Podcast, which is a podcast about podcasting that's awesome, about whether or not you should use episode numbers or not. And we're not going to go into it by grand detail. But part of the reason why we— do episode numbers is at a certain point as we— it makes life easier for me as a podcaster to be able to quickly reference an episode.

**Andrew:** Eating sushi. The one where they ate sushi.

**Matty:** Well, no, but things like I can say, hey, go listen to arresteddevops.com/32.

**Andrew:** You can still have indexes.

**John:** I just— Okay.

**Matty:** But I agree with you. What ends up happening, and some of it's very self-serving because then it can make you feel awesome, like, I know how awesome we felt when we're like, hey, we hit episode 10. And then, you know, eventually you hit episode 100.

**Andrew:** And it's not just podcasts. It's like UFC 175. You're like, really?

**John:** [00:03:24] At first it's about your ego and how many you get to. Then when you start to suffer over the years of not producing anything, then it's the depression of—

**Bridget:** Hey, we have our first heckler from the audience. And since that was actually hilarious, I'm just going to walk over here and let John Willis actually repeat that.

**Matty:** Please recreate the moment, John.

**John:** Yeah, no, I said at first it is about your ego of like, we got to 30, we got to 40. And then when you slow down for like 3 years in a row, then you got depressed about it. Like, we got to— this is episode 37.

**Matty:** I will say though, it's a thing that I've had. There's several identity crises or crises of confidence I have with the show. And one is around episode numbers. But then I have this thing where I'm like, But it would kind of be weird to stop having them because we had them. But maybe we'll break—

**Andrew:** Treat episodes like pets, not cattle. Yeah.

**Bridget:** That is apparently what we're doing. We do have some favorites, and I think this is probably going to be one of them because, come on. So first of all, I have to apologize for the title. I had a full intention of trying to order some sushi from Bite Squad, but I did not actually get around to ordering any sushi. So unless Joe wants to order us some sushi from Bite Squad, I don't care what Something with salmon or tuna. What's good?

**Matty:** [00:04:42] In the interest of avoiding hipster DevOpsism, I do think that while the title itself is total inside baseball, I think we should explain for our audience, both live and on the internet, why we called this— I mean, what's the backstory to the title Eating Sushi with Andrew Clay Shafer?

**Bridget:** Okay, I made that as a DevOps Against Humanity card because Which is a Cards Against Humanity variant that I put on GitHub because I like that concept, I just don't like any of the cards. So I made one that I actually thought was funny, and Twitter people actually populated most of the content. But I wrote that one because it seems like every conference I go to that Andrew's at, we end up eating sushi, which is actually hilarious because I like eat some edamame, edamame, and then I eat an energy bar later because I don't actually eat fish. But I always go to eat sushi with Andrew Clay Shafer. 'Cause that's where you get really interesting conversations.

**Matty:** At Agile last year, I was not privileged enough, 'cause we had also, like, met probably for the first time, like, about 10 minutes before. I did not get to go to have sushi with Andrew. And then at Interop this year, after Andrew and I sat on a panel together, we're like, oh, after this happy hour, let's go get dinner. And then I promptly went back to my room and passed out and woke up the next morning to many @messages and DMs from Andrew being like, Yo, where are you at? Let's go get some sushi. And I was like, shit! Like, here was my—

**Bridget:** [00:06:04] So you missed out on your sushi?

**Matty:** I missed out, so I suck now.

**Andrew:** It wasn't just me, but all the DevOps Days Silicon Valley, we ended up going to sushi afterwards. Chris from Belgium, those guys. And then for a while, I do have an affinity for sushi, and I was posting lots of Vine videos of meals. With many people, most of which are still part of the DevOps community. So there has been some sushi consumed as part of this DevOps story.

**Matty:** I also want to take one step back. Again, this is like the total most YOLO episode we've done. Because again, we're sitting here, Bridget and I, we're sitting here, we know who Andrew is, probably a lot of people here as well, most of the people at the event, if for no other reason than you just gave a talk and I presume you introduced yourself. But for our podcast listeners, maybe can you give us a little introduction, a little background as to who is the man, the myth, the mystery?

**Andrew:** Who is the silent talking founder?

**Matty:** Yeah, why the hell are you on our show?

**Andrew:** Google me.

**Matty:** [00:07:05] All right, done.

**Andrew:** I did some things with DevOps-related themes. I've been involved in software development or technology stuff for almost 20 years on some level. And then now I'm just trying to learn more about the systems that we all participate in and grow. I mean, my main motive, the reason that I ever got into computer stuff was just, you know, I graduated from a master's program, my first baby was born, and my wife started medical school in about 2 months. And then that was sort of the end of the rock and roll lifestyle. And my wife decided I should probably get a job. And I was like, what will people pay me to do? Then it's like, well, you can make computers do stuff, and we'll pay you to do that. I was like, done. Now, that just evolved. The first thing I ever worked out for, and this is just by chance, was a venture-funded startup that raised a bunch of money to do something crazy that was literally a solution in search of a problem. I watched a bunch of people do these things, and there was all this dysfunction where the CEO was hiring his family members to do critical things and whatever. Then that got over and I went across town where a bunch of other people had another startup. They had just raised their A round. I watched them burn through another good $25 million. Then I was thinking, hey, I can make bad decisions as well as these guys can. Maybe I should learn how to do that. Then I got really interested in the dynamics of venture funding and how to build organizations and how to do that sort of stuff. That led into, so Luke Knies, who's the CEO of Puppet Labs, was my roommate in college back in the day, and we started working on trying to make Puppet into a thing, and then that got me interested in this domain around operations, 'cause before that I was, I mean, I'd done some system administrative tasks, but I was more of a pure developer, kind of from a mindset and a job description. Now you learn all this stuff about the domain you're programming in. No matter what you're programming, the more you understand the domain, the better your outcomes are gonna be. So I started learning all this stuff and then got involved with the Velocity. I really feel like Velocity, even though DevOps wasn't a word yet, Velocity Conference was clearly explaining DevOps themes before that was a word. The very first DevOps, or the very first Velocity had lots of content that was about developers and operations. This was sort of before O'Reilly started taping all the things, so some of that stuff's lost. I had an excellent presentation at Velocity 2009 on Agile infrastructure that never got recorded, which is a tragedy.

**Matty:** [00:09:52] Maybe in 2019, so the 10-year anniversary, you could try to reconstruct it from memory.

**Andrew:** I mean, the deck's on SlideShare.

**John:** This is a shout-out to Andrew. I was at that conference, and I'd forgotten about Andrew's presentation. Even though I knew him. But we always hear John Ospahr's seminal thing. Actually, Andrew's was basically the same day. And in Andrew's presentation, you can find it, he has the classic wall of confusion that almost everybody has used in a slide deck. And that was the same. And nothing— I love John Ospahr. We all do. He's awesome. And that was a seminal event. But his presentation was pretty seminal too, because he actually started describing stuff that is used just about everywhere on the internet about DevOps in that presentation. I definitely recommend going and finding it.

**Matty:** So what— so, Sarah-Ann, what would you—

**Bridget:** Actually, about that presentation, before we move away from that, I wanted to say that after going to ChefConf, my coworker Pete Shannon decided to write a post about what he had figured out for himself about the history of DevOps. He dug up that presentation. You have the slides somewhere, but he couldn't find video of it.

**Andrew:** [00:10:58] SlideShare. It was never recorded.

**Bridget:** Yeah, so that's why he couldn't find video, but he did up the slides for that, and he was like, check this out. And I was like, I know that guy.

**Matty:** So it's interesting. So, you know, John, when you mentioned, you know, again, kind of the, you know, genesis of talking about the wall of confusion and things like that. And so longtime listeners of the show, as longtime of a listener as you can be, that we've been doing this for a year and a half, know that actually part of the reason, or actually the main reason that this show exists, was because I started listening to John and Damon on DevOps Cafe and understood about 5% of what they ever were talking about. And I was— and by sheer force—

**Andrew:** You're like, I can make bad decisions as well as those guys.

**Matty:** Well, it was through sheer force of will of basically, I'm listening, especially John, like, kind of going and talking about Deming and talking about Allspaw. I didn't even know Allspaw's first name and all these things and stuff. And so these references are made. So there's these things that are kind of part of what we know being part of the community. And what we try to do with this show is be able, for the people that don't have the tenacity or stubbornness that, like I did, to just say, I'm just gonna keep listening to this, and eventually through osmosis and context, I'll get it. That being said, can I— kind of a twofold question. One is maybe just a little bit of a shorter one, which is kind of elaborate a little bit on this idea of wall of confusion, which we take as just table stakes of a thing. And then the second part of the question is, if you were to think back to that talk you gave now 6 years ago, what do you think is still true? Or what do you think are things that you're saying now with what you know and where things have changed, if you went back to past Andrew, that you'd say, like, oh, you know what? That was kind of an idea, but maybe it hasn't proven out. Or it has.

**Andrew:** [00:12:39] So what are the questions again?

**Matty:** The first one is, can you just explain the wall of confusion quickly for our audience?

**Andrew:** This is a semantic, jargony way to talk about the different incentives that exist between developers and operations. And the world that developed in some of the traditional ways that people did operations before, it was really— there's this transition that happened as software became service-oriented versus shipped on CDs, where the servers now become this critical part of the value chain. And if you've deemphasized the system administration and the operation of those servers, then you don't actually have software. And in the middle between this world where system administrators were for keeping the printers and the mail server up to where they're a critical part of the value chain, there's a bunch of broken IT practices that probably made sense in that world that don't make sense when you're trying to manage a service. And so recognizing that the best way to optimize a system is not to just throw random stuff onto production servers and then make it ops' problem, but to realize that the The infrastructure itself, and 'cause there's all these other things that are happening, like infrastructure as code. To me, there's this idea that you can represent infrastructure with code, but it also means that the infrastructure has become an application, and that you can manage these things as an application. So that'll dovetail into answering the second question. I don't think there's anything that didn't really prove out, if you go back to that thing. I think it's just evolved and clarified itself. And a lot of things that I said that we should be doing, now people do as the baseline. What I think was— people give me credit for things, and it's not that I don't— I like attention, don't get me wrong, but it was more about just being in the right place to articulate things than it's like a creative thing. I did not create DevOps. I did not create these ideas. I just happened to be in a place where These things that were so obvious to me, I just said them out loud. And they're like, wow.

**Matty:** [00:14:45] And people happened to be listening.

**Andrew:** Yeah, and people happened— I happened to be in a privileged position to have a microphone. And then people listened. So you look at what I saw as this transition coming onto the project and seeing what was happening with the public community and having gone through— I left out a little bit of my background. But I used to go to this Agile roundtable in Salt Lake City. Which is led by this guy who no longer lives in Salt Lake, but his name's Alistair Cockburn, and he calls himself a witch doctor, basically. He's kind of an eclectic personality, iconoclastic personality, and you can't help but be influenced by kind of his enthusiasm and some of these ideas. And he has, in his kind of Agile conception— he's sort of undervalued, I think, in the conversation around Agile. Mostly because marketing wins and Scrum is easy. And so then there's lots of people who, when you say Agile, what they really hear you say is like the most tepid version of Scrum possible. But there's this much richer body of knowledge and practice that people can draw on. So having that as a background and then seeing what was happening with the Puppet community and the tools there, I just connected dots to take advantage of tools and practices that were already used to manage software process and bring that into the infrastructure and the operations work.

**Bridget:** [00:16:11] And I think the whole community is better for it, so I'm glad that you started and continued some of those conversations.

**Andrew:** It's us, it's not me, it's about, it's all of us are doing it.

**Bridget:** Absolutely. It's a conversation that we're all continuing together today, as of this moment. You mentioned Agile and you mentioned Scrum. And I've heard you say that Scrum is a disease. So can you give us a little bit of your thoughts of what direction that sort of stuff is going?

**Andrew:** My personal opinion is Scrum's impact on software development is net negative. I think it's particularly bad when people try to adopt it in operations. It's really susceptible to problems when you have any interrupt-driven work whatsoever. And if you don't recognize the flow of work against— there's so many things even in the language that just drive me insane. A Scrum Master. Really? Really? 2 days? You sat in a room for 2 days and now you're a master? Really? And so there's this kind of anti-pattern where people get some certification. So I think that there's a— There's a psychological thing where people prefer certifications to actually learning.

**Matty:** [00:17:29] Well, and didn't something happen, and correct me if I'm wrong, because I've already learned my lesson at Interop to, like, say something definitive about Agile, and you then correct me and tell me I'm wrong, and you turn out to be right, so I'm smart now. So I'm asking it as a question instead of a statement. But this is what I observed. So my understanding when I was going through organizations that were making Agile transformation is that maybe by intent, or maybe it was just my desire that it should be this way, that Scrum Master is like Build Master. It's a hat. It's a role. It's something that someone does, but it's become someone's job, right? It's basically the new name of a project manager. And then you become certified and you do all these things, and I think that is part of it. Like you said, people inherently want certification. I think people also inherently want it to be like this role, like a hat you wear that maybe sometimes you take off and I give it to John or I give it to Andrew or I give it to Bridget. But we want to make them be like, that's my job and my job description. I don't know.

**Andrew:** Let's finish the thread on language because there's other language there that I find abhorrent. A sprint. Really? You're gonna sprint forever? Like, that's your plan? That's your strategy? Sprint after sprint after sprint after sprint? Do you know anything about physiology? Really?

**Bridget:** [00:18:43] Like, that doesn't necessarily scale.

**Matty:** But is it— but as a transitional thing, To make things— I mean, I guess I could see it like as a way to be disruptive in the language, but it's not at that scale, right?

**Andrew:** There's so many more words here. Commitment. This is the worst one for me where people are like, oh, you didn't make your commitment. Well, I was up till 4 in the morning keeping the servers from melting down. Sorry. Like, that's just bad for morale to like frame things in this way where you don't recognize the cues, especially where you have hidden queues of work. Interrupt-driven queues of work. It's a nightmare. It's basically what Scrum represents to me is taking the Gantt chart-driven project planning and saying, okay, Gantt charts are terrible. Let's make them smaller. And then just going with it.

**Bridget:** So what do you see as a better way to have workflow?

**Andrew:** I really like the stuff that's emerged from the Kanban community. I really think that making work explicit, making the process explicit, It's not that you can't do— all these things are evolution. I really like the way that ChatOps is changing the dynamics where not only is the work visible, but it's actually facilitated in a way that's auditable and shared. In a task-oriented flow system where you're marking tokens as they go across, that's cool, but then you don't actually know what happened. You know that it got through some phases and transitions. Anything that creates Ambient information, information radiators that helps people understand this larger— because I talked in my talk about local rationality and being able to make better decisions as you have more information. If people have the context in their company about how they add value to this global thing, then I think they make better decisions. And so anything that helps you do that. And also I think that there's a— when you don't make work explicit and there's a lot of hidden work, and a lot of unaccounted for hidden queues of work, then the management tends to really question, are the developers all lazy? Why didn't we get this thing? I mean, we set this date 6 months ago to deliver on this date. There's no real context for why that date made any sense, and you didn't really have information about how much work it was or if the team was even capable of doing that stuff. But you kind of made these decisions, and then the thing didn't line up at the end, and everyone's like, well, we missed our date, and we're over budget. It's like, well, your date was bad because you didn't make good decisions from the beginning. And then you just compounded that by creating this pressure cooker and trying to get your people to do things that weren't actually possible.

**Matty:** [00:21:27] And I think when you hide that stuff, when you hide that debt, I think about examples— and this was even pre-agile in the particular organization I was in— where we had a very antiquated It was basically probably one of the most important systems in our organization. It was fundamentally our CRM. It was the way that we managed our customers, and it was an ancient Visual Basic 6 app that barely anybody even knew how to code the thing, but everything had to talk to it. And it really needed— it was massive, massive debt that we carried around, you know, this giant anchor. But the problem was, from the GM's perspective, you know, from senior management's perspective, it was, well, what about the feature? Again, feature, feature, feature. And the problem was, at any time, if you would go to it was being discussed and brought up, they'd say, well, but it seems to be working, right? We don't have outages on it. We're like, well, we don't have outages because of heroic measures. And there would be times I actually told— and I don't necessarily say this is how you should work, but I was running the infrastructure team, and I would say, you guys have to stop being so good at fixing this app because you hate it, and let it break maybe, and then maybe we'll see some pain, And maybe it will become important. And I don't think that's a very healthy way to deal with it, but—

**Andrew:** [00:22:39] See, this is the— I mean, I think it goes back to a bunch of themes throughout this DevOps narrative, but when you have pain as an abstract concept that you don't feel, then you don't change your behavior. So it's one thing for managers to hear, oh, you know, It's hard for our sysadmins, and they're like, I don't care. If you make them wake up— so here's a little anecdote from Andrew's career. At one point, I was at this startup, and I was a developer, and I'd kind of won a bunch of social capital rescuing some projects with heroics. Then there was this— there was 2 things going on. I had a really close friend who had gotten hired to do QA. And he was kind of coming up. And the way that we work in this industry, we have basically a caste system where it's like the QA people, they're not like us. They're untouchable or whatever. And then he was being managed by someone who was basically treating him that way. And he was projecting to the managers or the executives this project that was sort of like the whole bet of the company, to deliver this project to a certain client. It was multiple, lots of zeros for this contract. And I knew that it was a disaster, right? 'Cause I could see the code. I'm looking at the commits, and there's a bunch of stuff going on. And I'm just like, there is no way that this gets delivered in a way that this customer is not gonna just like, throw it back in our face. So I went to the CEO one day and I was like, hey, I didn't really focus on what I thought was abusive behavior, but I was saying, hey, I think that this thing that we're having company meetings about the future of our company and big bets for the company is probably not on track. And the thin veneer of spreadsheets that you get on a weekly basis are not a great representation of the ground truth of this project. I came back to work the next day and the CEO and the CTO called me into their office, the CEO's office, and they said, Andrew, we think you're right. Now it's your problem. Then I went from being one of the developers on the team that had won some social capital through heroics to managing all of customer support and QA. For this project.

**Matty:** [00:25:13] That you already knew was not gonna succeed.

**Bridget:** Well, yeah.

**Andrew:** Well, part of it was, it was actually problematic because you had this pool. They structured things, and this is where, this is the thing I want people to take away from my talk, if they can, is that if you believe Conway's Law is true, which I do, that your org structures, and this is not just for software, but everything through your org structure and who communicates with who and who reports to who, basically determine the outcome. That's the system that you're building. They had interrupt-driven work that was the support tickets and QA. It was the same pool of people who were supposed to do both. They had no way to actually do QA in a meaningful fashion because they had no shortage of interrupts. If you just go to the queue of interrupts, you're never going to get to this other work. The first thing I did was change the structure so people had dedicated QA time. And then other people are gonna be doing support. That's the setup to the climax here. So the way that I fixed a bunch of things in the company, and really, it ended up not being a great thing, and then the next thing I went to was Puppet, but this delivery went out and it actually worked and the contract was fulfilled. So what I did is I, one, I became the, they called me the witch's hammer. That's what my QA people started calling me, 'cause I started beating developers up with their own commits. Like, I basically became like the gating code reviewer for every code, every bit of code, and just holding people accountable. It's like, and I knew how the code worked, and I knew I was probably a better programmer than most of them, and I'd be like, hey, that's not gonna work. I can, like, you didn't test this. It's not gonna work. And then I got everyone involved in the QA. So I said, this is how we're gonna do this deploy, 'cause usually deploys are done Late at night. This is how most deploys went. I would get on the computer. It was 11 o'clock. We'd start the deploy. I have the biggest can of Rockstar that you can buy. I would sit there. If we got to about 2 and it didn't look like we were close to this— I was buckled in. There were many nights where we just stayed up all night patching things back together. In our deployment process. So I said, instead of us being like a small team of 3 people, 3 to however many developers volunteered to do these deployments, we're gonna have the whole company. We keep telling ourselves this is the most important thing, so the whole company's gonna come to this. And we're gonna do deployment in the office with the whole company. And I got everyone attached.

**Bridget:** [00:27:49] Still at 11 PM, or?

**Andrew:** Oh yeah. Yeah, we're gonna stay, the CEO, everyone. You believe this is the, important thing. I want every executive here. I want every— and the CEO's like, okay, we'll do it.

**Matty:** Once.

**Andrew:** Yeah, once. I mean, it's symbolic, right? So, and it was truly symbolic because I gave the sales guys a bunch of things I knew wouldn't break. I was like, you guys do this list of things. Go do it. It's like all stuff I knew wouldn't break. And then the people that were the developers and the QA that had a bunch of context, I It's like we had this log stream that had a bunch of exceptions all the time. And people would be— it's like reading The Matrix, and you're like, that one's not bad. That one's not bad.

**Matty:** Uh-oh.

**Andrew:** Right? And you're like— so you know, okay, we'll swallow that one. That one's fine. Oh, that one's bad.

**John:** Right?

**Andrew:** And so you have the people reading The Matrix, and you have the QA guys doing this. And then I had a special task for the executives. They all had the same task. Which was basically to do the simplest thing that the marketing of this product would say is the value proposition. Like, you just have to do this one little thing. It should be easy. We tell our customers it's easy all the time, right? And only one of the executives could actually do that task in the 3 hours that it took to do the deployment. 2 of them couldn't finish it, and the others were able to finish it with help from developers and other people. It was amazing the next day how many things that had been prioritized from a customer support perspective as important all of a sudden became important that weren't important the day before because our executives were faced with the actual reality of that product. And so then to kind of come back to this narrative, you get empathy from suffering. They never suffered. They never actually suffered what the product was like, so they had no way to connect that to any decision or any action that they were gonna put into the process.

**Bridget:** [00:29:55] That's a great argument for dogfooding. I watch Drama Fever, and I know Etsy folks, most of them have an Etsy shop. It's like you have to actually, as well as they— How much time do Etsy folks actually spend buying crafts on Etsy? They don't want to talk about it.

**Matty:** That's the one metric that's not measured.

**Andrew:** Quick shout out to Paul Maritz, who's the CEO of Pivotal where I work, who's credited with, at least on Wikipedia, the term dogfooding back in his Microsoft days.

**John:** Fantastic.

**Andrew:** We're hiring.

**Bridget:** Hey, so are we.

**Andrew:** We software.

**Matty:** So is 10th Magnitude, one of our sponsors. And so is probably PagerDuty. So is everybody.

**Bridget:** Drama Fever's hiring. Look at our website. So that's the obligatory pitch everyone has to say at all times. So Andrew, when you mentioned in your talk this idea about local optimizations, global optimizations, do you want to expand a little bit more on that? When you're talking about DevOps, we've talked a little bit about the road that brought us to the DevOps that we have right now. But in terms of what you think we're optimizing for, what you think we should be optimizing for, what are your thoughts around that?

**Andrew:** [00:31:07] I think it's hard to answer that question without first framing the context. And this is one of the things I think plagues DevOps and Agile and all these other things where people are trying to transform, is that you can't really do something prescriptive until you have enough context to understand where you're starting from. And, you know, there's a bunch of analogies you can make, but if you think about health or exercise or any of the other things, like the program that you'd give to someone who is relatively healthy and capable from an exercise perspective is very different than what you'd give to someone who has maybe different set of circumstances. So I don't really want to make a blanket statement about what you can do to optimize, but going back to the idea of local versus global, and this is where things like Pareto efficient Nash equilibriums get really interesting, is if you model the world as everything is an agent that's trying to maximize some function, then the ability for them to do that is a level— it's how much do you understand the rules of the game, which is sort of a proxy for do you understand cause and effect? Do you understand that if you change a thing, that will have another effect on whatever function you're trying to maximize from a quantitative perspective? So looking at the way that people behave and the way that this plays out inside of organizations, and from organization you might have very different patterns of interaction, very different patterns of health. So what you're gonna tell people to do individually is very different from context to context. I think that the notion of limited visibility is like there's no way everyone knows everything. I don't know everything. Do you know everything?

**Bridget:** [00:32:54] Heck no.

**Andrew:** Do you even know everything about what's going on in your company?

**Bridget:** Certainly not. I think that that would be very difficult for any one person to do.

**Matty:** That's the problem. That's why you have domain experts now. The days of understanding all the parts of your system were 15 years ago, right?

**Andrew:** Longer. Way longer. The thing that I— this already came up in this episode, in this conversation. I think anything that radiates more ambient information that gets people— there's 2 things you can do, and this is all simple but not always easy, is radiate information to help people make better choices and then understand how the incentives are structured. If you give someone a bonus on a certain— and this is going back to Deming as well— if you give someone a bonus on a certain metric, You can be pretty damn sure that they're gonna hit that metric. And in the Deming quote originally, he says, even if it means they destroy the company. Because they're optimizing for their locally rational payout. So make sure to think about how— I mean, we're not all in this hierarchy of decision-making. We're not all empowered. We don't necessarily set our salaries. We don't necessarily set our bonuses. As a manager of people, you set the game, the rules of the game that's gonna be played below you to some extent, but you still don't have full power usually. Even as a CEO, you still have regulations, you still have government, you still have a bunch of things that are taken.

**Bridget:** [00:34:27] You have a board, you have VCs, whatever.

**Andrew:** Exactly. The most that you can actually do in the context that you live in is try to understand the incentives that people are motivated by. Try to set things up where the incentives are aligned with the behaviors, and then give people as much information as you possibly can to make good decisions. That's sort of a general way that I would approach that.

**Matty:** Wow, this episode went by really fast.

**Bridget:** Before we move on too far, I feel like you've touched on the Pareto inefficient Nash equilibrium that we associate so much with you because you've discussed it at length in numerous talks, but for our listeners and live studio audience who may not have actually seen those talks, do you want to give us the really quick, why is that very applicable to DevOps?

**Andrew:** Nash equilibrium is a game theoretic fixed point when no one will change their strategy based on the way the game's been played up till now. No one will change their strategy unilaterally. Sometimes there's ways that if they share information or collaborate or whatever. And then a Pareto inefficient system is one where you can improve some player, some payout for one of the people. Usually Paretos apply to economics and not game theory, but I'm dragging it over so that you can improve the position of a payout for a party without hurting anyone else. If it's Pareto efficient, there's no way to change the payouts without someone also losing because it's a zero-sum at that game. The, the point there is that you have a place where someone could be improved, maybe everyone could be improved, but no one will change their strategy because you're fixed. There's a fixed point in the strategies where no one's going to change. So when I say Pareto inefficient Nash equilibrium, it means there's some obvious way if you globally optimize the system that everything could be improved, but no one will change their strategy so that— so it won't ever happen.

**Matty:** [00:36:25] So do you feel pressure to be a thought leader?

**Andrew:** I'm a very privileged person, and I don't necessarily feel a pressure to produce anything that I don't want to at this point. I think, and I'm gonna probably keep thinking, and I'm probably gonna keep talking about what I'm thinking about, but I don't, I don't feel pressure.

**John:** Do you?

**Matty:** I mean, I guess, does that— does it change how you think about sharing ideas knowing that maybe they're received in different ways because of your experiences and your reputation that may be then different than they were 6 years ago?

**John:** Not really.

**Andrew:** I mean, if you kind of go back to some of the stuff John was saying, there's a lot of things where through DevOps, I don't, I don't need credit. I don't need attention. And there's lots of things that I said first or said a certain way that then lots of people said Or in some places they even maybe got more attention for saying it than I did. And I don't care. I mean, I have— what I'm optimizing for is my wife and 3 kids and my bank account. And I'm doing pretty well. So at the point— I don't believe in hiding. If I wanted to— if I felt like my career was dependent on me constantly producing thoughts, then that'd be one thing. But there's so much more to what's going on and how things are structured where I'm doing pretty well. I'm pretty happy with things. So there's no pressure to be a thought leader. There's just a constant desire to learn and a constant desire to share. And I genuinely want other people to do better. So I'm just gonna— my default mode is to just share. As much as I can to try to help people have more context to make better decisions.

**Bridget:** [00:38:16] And that's a great place to leave it. Thank you so much, Andrew. That's amazing. We're gonna, we're gonna go into our, uh, some applause. We're gonna go into just a quick few announcements. We have community and event stuff to talk about. We have upcoming conferences, DevUpstate Chicago Matt, anything else?

**Matty:** DevOps Days Chicago will be August 25th and 26th. ADO listeners can get 10% off with the registration code ADO10. If you go to devopsdayshi.org, you can register. There's other things upcoming. Um, I was lazy and didn't really get—

**Andrew:** DevOps Days Pittsburgh.

**Matty:** Oh yeah, when is that?

**Andrew:** It's August 13th and 14th.

**Matty:** Oh yeah, so that's good.

**Andrew:** Let me look at the calendar.

**Bridget:** And there's another— a number of other DevOps Days coming up. So go to the—

**Matty:** The usual place.

**Bridget:** Go to devopsdays.org and check out the other DevOps Days coming up.

**Matty:** Okay. So, we have a newsletter. If you go to arresteddevops.com/bananastand, it's the best way to know about upcoming podcast episodes and cool news with DevOps. I haven't sent it out in quite some time, but we'll get right on top of that again. We also have an iPhone app. If you like having an iPhone app to listen to our show on, you can download it for free at arresteddevops.com/iphone.

**Bridget:** [00:39:30] Thanks to our sponsors. Be sure to visit them at arresteddevops.com/10thmagnitude and arresteddevops.com/pagerduty. Thanks to Andrew for joining us.

**Andrew:** And thanks to Bridget for inviting me.

**Bridget:** And loyal listeners, if you enjoy Arrested DevOps—

**Matty:** DevOps? That's the first time you've stumbled over the name of the show, which is impressive that you've been on the show for this long and it's taken you that long, because I Like, you listen to the first 5 episodes, I said it wrong every time, and it's my show. Sorry. I mean, I came up with the name of the show.

**Bridget:** It is your show, Matt, and I've actually never watched Arrested Development.

**Matty:** Yeah, this is another problem.

**Bridget:** And loyal listeners, if you enjoy Arrested DevOps, we would appreciate it if you would visit arresteddevops.com/itunes and leave us a review in the iTunes Store. We'd love to know what you thought of this episode. Please leave us comments at arresteddevops.com/39.

**Matty:** Sorry about that, Andrew.

**Andrew:** Sorry about that.

**Bridget:** There is an episode number.

**Matty:** You can check us out at arresteddevops.com. We're @arresteddevops on Twitter. We'd love to know ideas, feedback, good, bad, or indifferent. Show ideas at shows@arresteddevops.com. So I'm Matt, @MattStratton.

**Bridget:** [00:40:41] And I'm Bridget, @bridgetkromhout. We're Arrested DevOps.

**Matty:** And remember, there's always DevOps in the banana stand, in your heart.
