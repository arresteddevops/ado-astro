**Jessica:** [00:00:00] I have opinions about DevOps.

**Matty:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matty Stratton, and I have a great guest with me today. But first, a word from our sponsors.

**Jessica:** Chef is a community of professionals practicing DevOps every day. We are making, proving, learning, and shaping the future. We are known for welcoming, encouraging, and liberating others to do the same. We do not talk about change, we do change. Join the community and learn about our solutions at chef.io.

**Matty:** This episode is brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 120 common infrastructure tools such as Chef, Docker, and AWS, so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog. The worst time to learn about incident response is during an incident. Don't wait for an outage to strike before getting started. The PagerDuty Incident Response Training Course is now open source and free for everyone at response pagerduty.com. Based on the same training that PagerDuty employees go through, this course will show you how to streamline your incident response process, turn chaos into calm, and demonstrate the role of an incident commander. So what are you waiting for? Go to response pagerduty.com today and check it out.

[00:01:46] The worst thing about the Arrested DevOps podcast is when it ends. You're left wondering what to do next. What are you going to listen to on your commute home? How do you occupy your time when walking the dog? What are you going to listen to during the quarterly all-hands meeting? But fear not, dear listener, there is a solution. You need to subscribe to Software Defined Talk right now. It's a weekly podcast that recaps all the news in cloud computing, DevOps, and enterprise software. The hosts, Cote, Matt Ray, and Brandon Wichard, will keep you up to date on all things cloud while offering tips on how to optimize your Costco haul and how to PowerPoint. It's a fun, free-flowing conversation that will keep you entertained and informed. What are you waiting for? Subscribe to the podcast today by visiting softwaredefinedtalk.com or by searching for Software Defined Talk in your favorite podcast app. So today, uh, with me is Jessica Kerr, software engineer extraordinaire and co-host of the amazing Greater Than Code podcast. Show notes for this episode can be found at arresteddevops.com/jessicakerr. So, Jessica, can you tell us a bit about yourself? Just introduce yourself to our listeners.

**Jessica:** [00:03:00] Sure. I'm a developer. I've been a developer for 19 years now, and I live in St. Louis, Missouri, so I work remotely. And right now, I have 2 cats sleeping in the room, and at any moment, the children will get home from school. And there will be much delight.

**Matty:** So let's talk a little bit. I want to, I guess, maybe start by talking about how you got into— you've been a developer for 19 years. Was this something you wanted to always be when you grew up? Did you say, I really want to be a software engineer when I grow up? Or how did you—

**Jessica:** I said, I want a steady paycheck when I grow up. I said, I want to make enough money that I don't have to worry about it, that I can run the heat as hot as I want to, and I keep it at 75 year-round, and where I can get a job in any city. And that, you know, it turns out software is a great field for that.

**Matty:** It kind of works out like that. And so did you, uh, what, what was a little bit of the journey like when you, you Did you start figuring that out as the steady paycheck job, or—

**Jessica:** [00:04:11] Well, I was lucky, as many of us are, and my aunt's friend got me an internship while I was in college studying physics. Um, my aunt's friend got me an internship at FedEx in Memphis, and I went down and stayed with my aunts, and I worked in operations research, and I got to do programming. I got to work in ArcInfo, which was a little GIS programming language, and I got to make maps. And I was like, hey, this programming thing, I can totally do it. And the best thing about it back then was that I could go home at 5:30 and have no homework, which was not normal in college. So then after 2 summers of that, it was like, well, I could go to grad school in physics and then I could go to more grad school and then maybe get a postdoc and then maybe somewhere in the world find a job that might someday lead to job security. Or I can make more money than that right now as a developer in most cities. So, very selfish reasons to begin with, but the whole 9-to-5 thing doesn't apply anymore because I'm kind of obsessed with software and automation, and it's now what I think about in my spare time as well.

**Matty:** [00:05:25] So, you are at Atomist right now. Yes. How long have you been at Atomist?

**Jessica:** Almost 2 years. Cool.

**Matty:** And what would you say you do there?

**Jessica:** Development automation. So, I love this because as a software developer, I get to really study my own work. I'm just now reading the Domain-Driven Design book because I've decided the Domain-Driven Design community is amazing. And I realized that my domain that I get to work in is the domain of software development itself. Because, I mean, companies everywhere are automating their own delivery process, right? That's an important piece of software development. It's not the whole thing, but it's a crucial one. And I think it's right that everyone needs their own automation for this, but not everybody gets to have whole teams devoted to their delivery automation, like a Netflix or a Stripe or a Facebook. So, we're making that easier.

**Matty:** [00:06:31] Making that easier. So, provide— so, Atomis, like, as a product, is helping provide frameworks for software deployment automation, or a framework, some libraries, and a service.

**Jessica:** The service does triggering and event correlation, so you get to write event-driven delivery choreography.

**Matty:** I love choreography. Yeah, is that great metaphor? It's I take a little prior art, not that, I mean, I think it's all common evolution, but on an old episode of the show, when I was talking to Eric Sorensen from Puppet, we were talking about orchestration. And I was like, isn't it more like choreography when we're talking about this? And that got picked up by some other folks. I'm sure most of the people who are using that metaphor today did not get it from listening to Arrested DevOps, but I will pretend that's what happened.

**Jessica:** And indirectly, yeah, when the world is ready for an idea, it doesn't come to just one person.

**Matty:** [00:07:32] Yes. Well, that's exciting stuff. And especially when you're working in the domain where your expertise and your interest and your passion lies, right?

**Jessica:** Totally.

**Matty:** Totally.

**Jessica:** So, it's super duper cool. I think software is just incredibly fascinating as an industry and as an activity.

**Matty:** So, that being said, how can... The software industry, and not necessarily the, like, uppercase industry, you know, because we could wax philosophical about this for a while, and we probably will. But just in general, the practices of software, the way that we do work, the way that we do things, how could those things be better?

**Jessica:** So many ways. I mean, we don't know what we're doing yet.

**Matty:** So, step 1, figure out what we don't know.

**Jessica:** Right, right. I do think that a lot of it is, There is no, like, one universal way. There are not universal laws, like in physics, that apply everywhere and will fix everything. The silver bullet that we used to want.

**Matty:** [00:08:35] Not everybody is Netflix.

**Jessica:** Yeah, yeah. Not everybody is Netflix, so not everybody should magically use Spinnaker, but everybody kind of needs their own Spinnaker, their own automation system. But more importantly than that, within our teams, when we're working with people and with a particular software that we operate, every team needs something different.

**Matty:** I mean, what are, what are some of the questions that, that like a team should ask when you're trying to figure out?

**Jessica:** That is an excellent question. Because it really is about the questions, isn't it?

**Matty:** That's how we learn.

**Jessica:** Yeah, by asking questions, not by answering them.

**Matty:** Right, right.

**Jessica:** Not by answering them definitively anyway, by answering them with better questions. Right. So what questions should we ask? One that sticks out for me, especially from redeploy.io, the conference where I met you. That was fun.

**Matty:** [00:09:42] That was super fun.

**Jessica:** Oh gosh, it was great. Yeah. So, like, safety too, the asking not what made this fail, but also what made this succeed? What made it not worse? What keeps this system together at all?

**Matty:** So, what makes it safe? Where did we— what are the things that help it be resilient? Or what would be indicators of its resiliency? Right? Like, what about, I think also asking the questions about the people involved, right?

**Jessica:** Yeah, yeah. Who keeps this up? Who keeps this running and safe?

**Matty:** And what matters to them? What are their drivers? And again, individuals, I understand, but like within maybe the teams and the parts of the organization. I think a big thing to ask it, I always start to, is what are the goals of the organization? And I'll always sort of sometimes distill down to the question that I always ask folks when they're trying to make design decisions around things like this, or they're trying to make a cultural change or an organizational change or do anything like this, is I say, do you know how your company makes money? If not, go find out and I'll wait. Because if you don't know that, you actually can't answer the other questions. And maybe you're not a pro— it doesn't mean you're a profit-driven organization, but like whatever the main goal of your company is, do you know what that is?

**Jessica:** [00:11:14] Yeah. And do you know how you stay profitable enough to stay in business in order to achieve that main goal? It takes both. I think of profit as a necessary condition of success. Profit as an aim is not interesting or useful.

**Matty:** Right. How do you be able to understand and define what is success for your larger organization and then for your particular domain that you're working within? Because otherwise, because again, the success or the things that are valid You know, driving towards an automation that allows you to deploy 13,000 times a minute doesn't do you any good if that's not actually valuable to— if you're not making business change at that rate.

**Jessica:** True, true.

**Matty:** You know what I mean?

**Jessica:** Yeah, or if you're shipping a part that your software is really only going to be updated every few years.

**Matty:** Right.

**Jessica:** [00:12:16] Yeah, and every business's purpose needs to be different. Like, ours is to change the way people deliver software and the way we think about development as a process by finally creating a domain and an API around software itself.

**Matty:** What are the things that we're doing well in this industry, do you think?

**Jessica:** Oh, oh, oh, oh. So one thing we're doing well—

**Matty:** Jessica, I'm calling on you.

**Jessica:** We are thinking about systems, and we are thinking about teams. And I get excited whenever I see teams and businesses and people outside of software learning from, say, Agile, because we are demonstrating that when you think locally, when you let a team become a learning system, and optimize for its own purposes within the organization, and that requires letting it influence the organization as a whole. When we do that, we create knowledge work where before there was paperwork. I think business as a whole is learning from agile software development because we're learning that we can pay attention to each other and to ourselves and to the way we work, and we can consciously deliver deliberately improve, and not just from on high. It has— that improvement has to take place at many different levels. So that's something we're getting better at. I think, like, software is the first time we've been able to create and modify and therefore study really, really complex systems in a timeframe of days and weeks instead of like human lifetimes. And that gets us all better at systems thinking, at deliberately curating and guiding and molding and evolving the complex systems that we are a part of, because it's so much more, more observable than biology, for instance.

**Matty:** [00:14:37] Right. And then because we get good at it with the systems that we are working with in the technical sphere and the software sphere, it makes us start thinking about those other systems, right? Because that's where our brain starts to go.

**Jessica:** Yeah. And we are wired to think in terms of relationships. I read that humans have, like, we have 2 naturally built-in ways of thinking about the world. And one is, like, physical objects, like stuff we can touch and see and experience. With our senses. But the other one is relationships, because we are wired to track the relationships between people. And we're learning to do that with software, and we're learning to do it better in the combination of humans and software.

**Matty:** That's really exciting stuff. And I'm very intrigued to see how, how we accelerate at getting better faster. Because that's sort of the growth of this thought, right? It's like it's not at a constant scale, right? We get smarter about this at a faster rate as we get smarter about it.

**Jessica:** [00:15:52] That's true. It spirals.

**Matty:** I can never— I always mess up the difference between the geometric and the logarithmic about which one it is. I think it's a logarithmic curve, but I'm sure when I get it wrong, someone on Twitter will correct me.

**Jessica:** Geometric is faster.

**Matty:** Then it's geometric.

**Jessica:** Logarithmic is pretty gentle.

**Matty:** Yeah, so it's geometric. That's what— see, so I didn't even have to wait for Twitter to get corrected. So that worked out well. My maths are behind. So, um, fast.

**Jessica:** Although, although you want to watch out, you don't want to ask how do we go faster. That's a destructive question, right? You got to ask how do we go smoother.

**Matty:** So, uh, one of the things that we did together, so we talked about that you and I met at Redeploy, which was about resilience engineering, and it was incredible.

**Jessica:** Yes.

**Matty:** There's so, so much good content there. Those videos are all available. You should all check them out. I want to just comment on it. You talk about in your bio about how you talk a lot about symmathesy. Did I get it right?

**Jessica:** [00:17:04] Yes, symmathesy.

**Matty:** Oh, wow. I pronounced it correctly. I'm amazed. What is that? For our listeners.

**Jessica:** Okay, okay, okay. So, symmathesy is a more specific word than system because when we think of systems, we often think of mechanical systems, machines that we can, even if they're super complicated or complex, we could hypothetically predict them. Whereas a symmathesy is a learning system made of learning parts. So, the interrelationships between the parts are never the same because the parts are never the same. Due to their interactions with each other because we're always learning from each other and from the system as a whole. So every biological system is a symmathesy. You can look at an ecosystem as a symmathesy. Each species in the ecosystem is evolving and learning, learning what works better in this system and with the other species in the system. And forming little self-reinforcing loops of, um, what do you call it when the hippo and the bird work together?

**Matty:** [00:18:16] Uh, symbiotic.

**Jessica:** Yes, yes, little self-reinforcing symbiotic loops. And, and the, the ecosystem as a whole is learning because each of its parts is learning. And we do that in our teams. Every one of us is learning, of course, because we're humans and we do that. And then the team as a whole learns as we work better together and work better within the organization or for the organization or within whatever incentive structure it has set up for us. And the point of symmathesy, as opposed to just system, is to emphasize that mutual learning and that system always has an effect on the wider system too. So, I mean, our team is a symmathesy, our organization is a symmathesy, and you can't have a learning team that doesn't influence the rest of the organization and vice versa.

**Matty:** And of course, if you want to learn more about symmathesy, you can watch Jessica's talk from Redeploy, which we will put a link to in the show notes. That's where I first learned the term.

**Jessica:** [00:19:27] Cool. Or I have a short blog post with the TL;DR on that that I can post.

**Matty:** Okay, we'll put that in the show notes too, which means we now really have to remember to do that because it was promised. And this is— making a promise on a podcast is a legally binding document. So don't throw that away. If we fail, someone will know. Someone will know and they will find it. Talking about conferences, recently, just last week, was QCon San Francisco, of which Jessica was the track chair for the DevOps track. For reasons unknown, she invited me to join a panel, which was a lot of fun. But it was— now, a couple of questions. First of all, to your knowledge, was this the first year that there was a DevOps track at QCon? Had there been one before or?

**Jessica:** Oh, I think there have been for a while.

**Matty:** But this was the first year that you were the track chair for the DevOps. Right.

**Jessica:** [00:20:31] Yes. Right. This was my second experience as a track host for AQCon. Okay. The first time, somehow I landed with the frontend track, which makes no sense because I'm a backend developer. But I do think the frontend is really important. So, I agreed to do it, but then it was awful. I mean, I felt like a terrible track host because I really didn't know what I was doing, and I totally struggled with it. But then, then they asked me to do the DevOps track, and I was like, oh, I got this. You're like, no problem. That was fun. I have opinions about DevOps.

**Matty:** You do. You do. Okay. Well, hey, let's hear some of them real quick. This is a DevOps podcast.

**Jessica:** It is. It is. Yeah. So, one of them is software delivery is It's not a nuisance. It's not something that's in the way of your job. It is your job. I like that. We don't write code. We operate useful software. The code is a necessary artifact. And it's funny how much, once I decide something is my job instead of in the way of my job, how much more patient I can get with it.

**Matty:** [00:21:38] Right. That's super true. Now, have you been a track chair at other conferences besides QCon?

**Jessica:** I don't remember. Yes, yes, Code Mesh in London.

**Matty:** Okay, I was curious to kind of compare contrast those experiences. I mean, you kind of compare contrasted the frontend track that you did, but—

**Jessica:** Oh, right, right. QCon is organized. They have a system, they have a process, they have... Requirements and checklists, and it's very structured. CodeMash in London is one of my very favorite conferences in the world. It's fantastic. It's pretty informal, and it's very much about what kind of talks does the program committee want to hear. So, it's run by Francesco Cesarini of Erlang Solutions, and that one is very much curated in terms of Who do we think is interesting and what do we want to hear about where the industry is going? So it's much more character-y. Now, wait, what? I don't know. It's much more opinionated. There you go. Whereas QCon is very much what's some really practical stuff that the attendees want to hear about.

**Matty:** [00:23:02] So yeah, it was definitely— this was my first QCon. And I have to say that I felt like it was very— it's definitely very practitioner-oriented, which is cool, very practical. I will say, and I'll go on record, it's fine. I appreciate being a part of it. So QCon people, if you're listening, I'm not throwing shade, but I think some of the language around the theme of the event is exclusionary. Oh, really? Well, there's these things about, Engineers over evangelists. Oh, you know, something over consultants. And I understand that you're saying you're hearing from people that do real stuff over process or something or something. Yeah. So those are, those are good, but it can feel like, yeah, it's kind of a, I just, I don't like exclusionary language. Yeah. Yeah.

**Jessica:** It's the whole tech rules the world thing. Don't we have big enough heads already? I know I do.

**Matty:** [00:24:07] Now, that being said, I also contribute to that myself when I make jokes about saying I don't work for a living anymore, I just talk about it. But the truth is, I still do these things. Because even though I'm a developer advocate or DevOps advocate or whatever I'm calling myself this week, I still do engineering work. I still am, and most DevRel people are. Yeah.

**Jessica:** In addition to doing engineering work, we study engineering work.

**Matty:** Yeah, and sometimes have the luxury of being able to spend more time on it, on doing, you know, it is, and that it is, is a luxury. I completely appreciate that, that I get to do that, to spend time, to sort of paraphrase from The Wizard of Oz, thinking big thoughts, you know, and what do I have that you don't have? A DevRel title. You know, I mean, it's Uh, so, but I, I will say, I think you put together a hell of a track. You know, you had awesome speakers, the really interesting story, and a really good mix of, um, from, you know, and these ideas will be available to the public on InfoQ in a few months. Oh, that's very exciting. That's very cool because the other thing is there's like 35 gajillion tracks at QCon. Right? So it's like you can't go see all the things, um, and it's, it's challenging. And then stuff is up against the same time, like poor, you know, Bridget was at the same time as Brian Cantrell, and that's just hard. I mean, I'm sure that she— Bridget was to a standing room only room as well, I'm, I'm certain. Um, but, you know, I think it's, uh— and there was a great— the, the opening keynote was, you know, Dr. Nicole Forsgren and Jez Humble which I always love seeing both or either of them speak. I think you said that you were taking credit for them as part of your track.

**Jessica:** [00:26:06] Oh, right. I was like, yeah, yeah. They're part of the DevOps track. Yeah, totally.

**Matty:** Totally. Why not?

**Jessica:** Why not? Not really. I mean, yeah, I didn't recruit them, but I tried, but they were already keynoting. They were already keynoting.

**Matty:** See, it was just the order of operations thing is all that happened there. Let's talk now. Just, uh, so I was really, really excited. So when we were at Redeploy, for those who are listening, like after the last day, a bunch of us went out for like a happy hour and Jessica and I were chatting and it came up about— so I love the podcast Greater Than Code, um, which I alluded to that Jessica is a co-host of. We're going to talk about in a second. And we kind of had this, uh, this— I was like, I told Jessica, I'm like, you need to come on my show sometime. And she's like, sure, that'd be great. I'm like, okay, that's awesome.

**Jessica:** And of course you need to come Come on our show.

**Matty:** Right. So then he says that, and I'm like, oh, my head explodes because that's like being invited to be on one of your favorite shows. So I want to talk a little bit about why. I mean, maybe tell people a little bit about Greater Than Code.

**Jessica:** [00:27:09] Greater Than Code, we talk to technologists about things more important than technology.

**Matty:** Yes. What was kind of the origin of the show?

**Jessica:** Like, how did it come about? Uh, you really want to know?

**Matty:** Yeah, absolutely. Okay, if it's terrible, we can always, we can always cut it later.

**Jessica:** Um, a bunch of us were on Ruby Rogues, and then Chuck, who runs Ruby Rogues, fired Mandy the editor and hired some company to do it cheaper. And we were like, what the heck? The best thing about this show is Mandy. And so we started our own podcast with Mandy, and we called it Greater Code. And we aimed for a more diverse set of panelists because we care about that. These are good reasons.

**Matty:** Mandy actually has a connection back to this show. Mandy was our first editor. And we didn't fire Mandy and hire somebody else, just so that we're clear about the story of that. What happened is we— I got cheap and started editing the show by myself and then decided I was terrible at that right around the time that Bridget joined the show and we decided to keep it in the family. I will not go on record making any comment about comparing Mandy or Joe to each other because they are special in their own special ways. They are both good. But Mandy is super, super rad. So that's like one of the best reasons I could think of to start, start a podcast.

**Jessica:** [00:28:37] Yeah. So Mandy— yeah, go ahead. Oh, Mandy Moore, the Ruby rep on Twitter, I think she is not only the editor, but she's also the manager of Greater Than Code, and she does a lot of the invitations. And right now, a bunch of my panelists and Mandy are at RubyConf, and they've recorded some episodes there. And yeah, Mandy's very busy and out in the community and finding people.

**Matty:** There's another show that I don't Because I'm remiss about keeping up with it, so I don't know if it podfaded or is still going, but it was Parent-Driven Development.

**Jessica:** Oh, yeah, Mandy does that one. That one's relatively new.

**Matty:** Yeah. I remember listening to the first few episodes of that, and it was super good. I will say, I mean, Greater Than Code is very polished. You have a very consistent—

**Jessica:** All the episodes are transcribed and on the website and the 16 different podcasts. Yeah, she knows what she's doing. Yeah. Yeah. Oh, and it's awesome being a panelist because we just show up for an hour and a half every week, not even every week because there's a collection of us, and talk to someone interesting.

**Matty:** [00:29:56] That's sort of what Trevor does when he shows up, so I can throw shade because I don't even know if he's listening to the show anymore. But yeah, we're a little more like, let's Let's go put on a podcast in the barn around here. When I reached out to Jessica, when we were talking about doing this, she's like, so what day and time do you normally record at? And I was like, or what is your recording schedule? And I said, it's adorable that you think we have a schedule. So part of that is just because of, you know, actually I'm going to make an excuse which is super true of your show.

**Jessica:** It's continuous delivery. I mean, you make a podcast when you have a podcast. Well, we do that. That's fine.

**Matty:** But the problem we run into, I guess, is just everybody. I mean, the hosts, we all have weird schedules, but I'm sure you all have the same problem. So there's just like 8 of us. You also have a lot more panelists. Yeah. So that probably helps. But I wish we could. Yeah, we need to get to a little bit. This is— yeah, I have theories. And if you're interested in hearing me wax poetic or wax— not wax poetic. Soapbox about our publishing schedule. It's a thing I do on our year-end wrap-up episode every year, and we'll be recording that next month. So be ready for another— that's our self-indulgent podcast about the podcast that we do. If you are listening, we will be doing again this year— well, we're going to do it whether you're listening or not. We're going to do an ask me anything or ask us anything. So go ahead and tweet your questions to the panel. @arresteddevops, and we may or may not answer your questions on the show depending on if we want to or not. Because we have the microphone and you don't.

**Jessica:** [00:31:47] Ask me anything and we'll answer if we please.

**Matty:** Yes, that's pretty much what we do at our year-end wrap-up show. That's our time we talk about metrics and downloads, and we are, you know, because all those things are vanity metrics anyway. There's lies, damn lies, and podcaster listener statistics. Which is super true. So what we talked about, I guess I just sort of want to kind of tie things together. So we've talked about running kind of the track chair, you know, kind of with that. And how can— when we think about, you know, you've done a fair amount of speaking and presenting and blogging, how does doing stuff like that help people As software engineers, as in doing that themselves, not you?

**Jessica:** That's a really good question. So my career really took off 7 years ago when I got into speaking. And it all starts with, I love being on stage. I'm very comfortable in front of people, but I didn't feel like I was an expert in anything. So I didn't think I was qualified to speak at a conference. But it turns out, you don't have to be an expert in anything. You just have to learn enough to talk about it for an hour. And when someone told me that, I was like, oh, oh, I'm good at learning stuff. And the thing is, it spirals. So, I want to speak at conferences. Okay. Someone told me that they're picking Android talks. They're low on Android talks, 7 years ago. So, I'm like, oh, I'm a Java developer. I can learn Android. Yeah, why not? Yeah, yeah, actually the secret is pick several things that you wish you knew enough about to give a conference talk, submit abstracts about them, and then only actually make the ones that get picked. But that gives you a deadline. Yeah, and, and an incentive to learn the thing.

**Matty:** [00:33:43] And, and you don't waste time writing something that doesn't get picked, right?

**Jessica:** Although there's always user groups, uh, meetups, And those are even better because then you get into like really good discussions with people that you know and you can talk to the same people over and over. Right. So then, but then you learn stuff, right? And then you go to the conference and then especially as a speaker, the conferences are particularly useful because you get to go to the speaker dinner or whatever. You get to talk to people. People come up and talk to you.

**Matty:** It's particularly useful because you get fed.

**Jessica:** Well, because you get to go and talk to the other speakers about their talks. And people who are attending the conference, they like come up to you and, and they have something to say. They can ask, what are you speaking about? So there's like this, it's so much easier to have a conversation. And so I learn a ton at conferences and I go to a couple and, and go to people's talks and then I have ideas about what I wanna talk about the next year. And, and so I can like synthesize the talks that I saw into something else that I know about. And, and then I've got like a more interesting talk for the next year. And then this, this continues spiraling. In the meantime, um, I would blog. So blogging is great. You do not have to speak at conferences if that is not your thing. Blogging is actually like even more valuable because it stays around and, uh, you can get into conversations that way too. I love Twitter. And, and the point is that learning begets community, which begets learning and new ideas, and it, it just spirals. And that's why I am no longer a 9-to-5 developer, my kids are like, Mom, all you ever want to do is work. But my work is so interesting. Yeah. And so, yeah, learning for its own— learning and sharing. It's not enough to just learn. You need to share it with other people. And that could be locally, it can be in your company, it can be online, it can be on Twitter. Or YouTube, but the sharing makes it grow. It makes it geometric instead of logarithmic.

**Matty:** [00:35:56] Well, on that thought, I think we're going to wrap up. Again, remember that the show notes are at arresteddevops.com/jessicacurr. We'll go and I'll give a couple checkouts as we sometimes do, just 2 things that were on my mind. So one thing is PagerDuty, we just open-sourced our incident response training. We had our incident response documentation open-sourced in the past, but we actually took the training that we give. It's a training that everybody at PagerDuty goes through internally, and we also provide it to customers sometimes. But you can actually download it. But not only can you download it, it's open-sourced at response pagerduty.com. I think it's really cool. This is the same workshop that I've given and some of my colleagues have given at a bunch of DevOps Days. It can really help you learn how to deal with incidents. And another thing to check out is Buffalo. If you like these things, it's something called Buffalo. So it's a rapid web development framework for Go, kind of like Rails is for Ruby. I've been building some tools using Buffalo and I'm pretty excited about it. So that's at gobuffalo.io. So there's a couple that I have. Jessica, do you have anything cool that's come across your— floated across your transom? Lately. Oh yeah.

**Jessica:** [00:37:17] Well, I have to say that you can check out atomist.com. Yes. And see what we're doing. And, and I'll also pick Glitch because today I am like trying to use Glitch because I am a backend developer, but I really want to make a webpage. And oh my gosh, I do not know how to web. It's so hard, but I'm trying to piece together my first web app. How do you even webpack? I don't, I don't webpack. No, that's one reason I'm trying to do this on Glitch.

**Matty:** That's, that's, that's me. When again I talk about this Buffalo, I'm like, this is great, I can do all the backend stuff in Buffalo, but then I'm like, but now I have to do the front, and it's like, right?

**Jessica:** So I'm just trying to like, how do I include JavaScript? I know there's— and but then I, and then I want to require something, but no, apparently for that you need Browserify. And I'm like, I'm good with Node, I'm fine. I do that, except I do it in TypeScript in real life. And doing anything without like the types and the autocomplete and what am I supposed to send here? And all I can do is cut, paste, and modify. And it's so hard. But at least on Glitch, there's like other things that I can find and copy. And it just, it puts the thing right there where I can try it immediately. And I did not have to set up Webpack. And I did not have to set up a development environment. It's just right there. And it's also a sharing environment and it's also a learning environment. And it's sufficiently awesome that, dang it, I am going to get this web app working today. I must. But yeah, for that—

**Matty:** [00:38:59] So glitch it up.

**Jessica:** I still am having trouble. Like, how do you send a request to yourself?

**Matty:** How do you send a request back to the server?

**Jessica:** I can't figure it out. No, that's not true. I totally can figure it out. I haven't figured it out yet in the 5 minutes before this call.

**Matty:** Okay. Right. So, yeah. And then just some community stuff as usual. If you want to try out some speaking stuff at a DevOps Days, if you go to devopsdays.org/speaking, you'll see a list of open CFPs. There's a bunch of them there. Was trying to make a list. There's right now, there's not a whole lot of stuff that's open. This is the weird time of year. So I didn't, in my little personal list of open CFPs, didn't have a whole lot, but we know that will start to change.

**Jessica:** For the record, I wanted to close the loop. If you want to speak at QCon, you have to be invited. That's how that happens. But you never know, you might want to try tweeting because that's how I got Baron Schwartz in my track this year and his talk was fabulous. So good. About DevOps for the database. Yeah, yeah. And he just tweeted something about wanting to speak at KubeCon, and I was like, get in my track!

**Matty:** [00:40:08] I feel like, aha, I got you. Yeah. You threw a little Poké Ball and Baron has been captured. So yeah, so yeah, go to arresteddevops.com/jessicacurr for this episode's show notes. Website has all sorts of other Arrested DevOps stuff. If you go to arresteddevops.com/itunes, and if you leave us a review in the iTunes store, that actually helps other people find the podcast. I'm not really shilling for reviews. Well, I am, I guess, but—

**Jessica:** Because you love your podcast statistic lies. We do.

**Matty:** We super do. We just love people to listen to the show. And if they find it, then that's how they will listen to it. So, but yeah, Jessica, thank you for joining me today. I had a great time. This was awesome. Thank you. So I am Matty, @MattStratton on Twitter. This is Arrested DevOps, and remember, there's always DevOps and banana pants. Close enough.
