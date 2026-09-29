**Jessie:** [00:00:00] But also, you know that once you get to that level, you're just one amongst the dipshits.

**Bridget:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. Is that a thing? I don't even know. I'm Bridget Kromhout, and before I intro our guests, we'll pause for a word from our sponsors. Chef is a community of professionals practicing DevOps every day. We are making, proving, learning, and shaping the future. We are known for welcoming, encouraging, and liberating others to do the same. We do not talk about change, we do change. Join the community and learn about our solutions at chef.io. This episode is brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 120 common infrastructure tools such as Chef, Docker, and AWS so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog. The worst time to learn about incident response is during an incident. Don't wait for an outage to strike before getting started. The PagerDuty Incident Response Training Course is now open source and free for everyone at response pagerduty.com. Based on the same training that PagerDuty employees go through, this course will show you how to streamline your incident response process, turn chaos into calm, and demonstrate the role of an incident commander. So what are you waiting for? Go to response pagerduty.com today and check it out.

[00:01:52] The worst thing about the Arrested DevOps podcast is when it ends. You're left wondering what to do next. What are you going to listen to on your commute home? How do you occupy your time when walking the dog? What are you going to listen to during the quarterly all-hands meeting? But fear not, dear listener, there is a solution. You need to subscribe to Software Defined Talk right now. It's a weekly podcast that recaps all the news in cloud computing, DevOps, and enterprise software. The hosts, Cote, Matt Ray, and Brandon Wichard, will keep you up to date on all things cloud while offering tips on how to optimize your Costco haul and how to PowerPoint. It's a fun, free-flowing conversation that will keep you entertained and informed. What are you waiting for? Subscribe to the podcast today by visiting softwaredefinedtalk.com or by searching for Software Defined Talk in your favorite podcast app. Looking for an opportunity to accelerate the delivery of reliable, secure software applications? Agile+ DevOps West brings together practitioners seeking how to leverage Agile and DevOps concepts to bring cross-functional teams together to deliver software with greater speed and agility while meeting quality and security demands. Learn from industry experts at Agile+ DevOps West this June in Las Vegas. And get started on the path to reduce lead time and successfully deliver stable new features. Arrested DevOps listeners use code AD400 to receive $400 off their conference registration fee. Learn more at arresteddevops.com/agiledevopswest. All right, I am super excited for both of today's guests. We've had them both on the show before, but there are exciting and new things going on. First up, Jess Fraze. All right, you are doing a choose-your-own-adventure week, right? Like, do you now work in law, medicine, government?

**Jessie:** [00:03:50] Yeah, I mean, I'm unemployed and I was bored, so I went to DC and then ended up getting a tour of the Pentagon. This all just kind of fell together, so I'm just figuring out how other jobs work, I guess, for curiosity's sake.

**Bridget:** I feel like that's going to work really well with our, you know, shiny objects idea of this podcast. OK, so more on that later. Another, of course, one of our favorite repeat guests, Andrew Clay Shafer. Shafer, what's new? What should people know about you right now?

**Andrew:** Oh, what should they know about me? I get a lot of credit for taking all the shiny things that interest me and stealing them from other people and then saying them out loud, and then people are like, you invented DevOps. It's like, no, I stole it.

**Bridget:** So here we are. We're here because on Twitter, which is the new IRC, I guess, is where we— I think Jess was saying something, and Schaefer was like, we need a podcast where Jess talks about adventures.

**Andrew:** [00:04:57] I was watching Jess have adventures, and I thought that it would be great to have a weekly podcast where Jess could explain computers and I could explain feelings.

**Bridget:** You know, is this your feelings or other people's feelings? And are the feelings about computers or about the life stuff?

**Andrew:** Well, we'll take it as it comes.

**Bridget:** Okay, so we could kind of consider this like one of those backdoor pilots. This is the soft launch of the Jess and Andrew Show. And I think probably the probably a great place to start would just be, Jess, in this odyssey of, you know, the mind, which by the way, we should also talk about Odyssey of the Mind because I did like a whole summer math camp thing, but it was not that. And maybe it was an off-brand Odyssey of the Mind. I don't even know. But because you're tweeting about that too, you're tweeting fascinating things lately. But in this, this week's adventures, can you set the stage for, for our listeners who maybe haven't read your blog post, which we'll have a link to in the show notes? How did you go about starting these adventures?

**Jessie:** [00:06:02] Well, mostly boredom. I don't know what to do with my days. So I have been going to museums in New York and then I was like, I ran out of museums in New York. So I was like, oh, I'll go to Washington.

**Bridget:** Is that possible?

**Jessie:** It is. When you've been to them all, I mean, there's only a few. So I went to Washington, D.C. and I have a friend that works as part of the US Digital Service. And so I had texted him because he always like offered if he was in town to like show me around. So I was like, oh, like I'm on my way to DC, which is very out of the blue. And then he happened to be there. So he was like, just come by the Pentagon. And like, so I got this like wild tour of the Pentagon that was like, it was like half the day. It was so cool. That place is huge. I learned like a lot of like history and about just how kind of the military and government has worked and like the crazy like systems and like protocol. There's an office called Protocol that reminded me of like Parks and Recreation, like seems comical. Yeah.

**Bridget:** [00:07:05] All right, Schaffer, you are smiling. I think you maybe know something about Protocol.

**Andrew:** Well, I'm just enjoying the story, but there's also another day. So she went to the Pentagon and then Then she had another day, right?

**Jessie:** Oh yeah, so then yesterday I went to, um, one of my friends is a surgical resident, so then I was like, oh, I'll see what your job's like because like you can totally shadow them. Like I had done this in high school for my friend's dad who was an anesthesiologist, which was way boring. You like put people to sleep. Um, this was cooler. So, um, yeah, I just got to see what their life was like and like how like it works with like the attendings and it's nothing like Grey's Anatomy or anything like that. And I was like, oh, this kind of blows. But like it was cool, got to watch surgery, but it was pretty boring.

**Andrew:** So yeah, what was the procedure?

**Jessie:** Um, it was something with like a liver. I like really don't know what was happening, honestly. This is how my family describes computers, and then I like try to describe like something else, and I'm like, uh, I have so many questions about HIPAA.

**Bridget:** [00:08:07] And like, did you have to sign a release? Did the patient sign a release? Did they know there were spectators? Maybe they have in the million things you sign when you go in to get something done, you always sign something saying, just so you know, interested computer people might be watching.

**Jessie:** Yeah, I mean, I like signed something, but I had also previously like worked in a pharmacy and like HIPAA is just all about like not saying the names of people. It's like, I don't even know their names. Like I wasn't even paying attention to that. So yeah.

**Bridget:** So as long as their liver didn't have like an identifying tattoo, we're all good.

**Jessie:** Yeah. I mean, and I wasn't at the wheel.

**Andrew:** Like, I mean, God, that would So did you learn you didn't want to join the military and become a doctor, or what was the— what's the big takeaways?

**Jessie:** The big takeaways, I guess, were like the military is like intense, intense, like type of, you know, authoritarian rule. And like what's cool is like the U.S. Digital Service is kind of trying to shake that up, and they kind of got like some power from the Secretary of State to do so. Um, but then also like from the doctor stuff, like when I was a kid, I always wanted to be a doctor, but like I'm way more interested in computers. Like, clearly I don't even know the terminology and I don't remember it. And that's like something like, I can remember things about computers like way back and I can't remember what I did yesterday.

**Andrew:** [00:09:25] Like, interesting.

**Bridget:** Good thing you weren't doing the surgery.

**Andrew:** So I don't know if we want to kind of dive into either of these experiences, but the— sure, the comment about the authoritarian, while I have experienced that firsthand, there's, there's actually some interesting transitions that are happening in the military itself, not just at the Digital Service, because of what's sort of been forced on them by modern warfare. So there's a book called Team of Teams, which is written by this General McChrystal that was in charge of the Joint Task Force. And it kind of had— it kind of had some kind of, you know, DevOps themes where you're basically talking about how you have to empower the edge to make decisions, because if you have a centralized command and control structure for everything, then it takes too long to react to the reality of the engagement. Then, also, related to this notion of silos, if you've got all the information in these strong silos, then people can't make optimal decisions because they don't have the context. It's a great book. I think it's one of the— if you're kind of looking for DevOps-related books, it has nothing to do with tech. It has nothing to do with anything other than teams working together, team of teams.

**Jessie:** [00:10:35] Go read it. That's cool.

**Bridget:** That's really interesting because Jess was just tweeting something that I thought was fascinating about— I mean, I think everything she tweets is pretty fascinating, but she was tweeting something about how the systems that make up people's interactions are also really interesting, not just like the technical systems we construct.

**Jessie:** Yeah, I mean, like, after working at Microsoft, which is like a huge people system, and then seeing kind of the military, I was like, whoa, like systems of like people like big companies and stuff like that, like large orgs. Like, it's crazy how people interact.

**Andrew:** So this is a little thing I've had riffs on before, and I've talked about this with you and other people before, where basically like the architecture of your organization has a huge impact on lots of things, right? So, you know, like the classic argument people have about CAP theorem and distributed systems stuff, all that same The same theory actually applies to the humans, because if you look at how the papers are actually written, it doesn't say anything about computers. It's really about nodes in a system passing messages back and forth. That has nothing to do with computers. That's how humans try to do things, except for humans, they'll recognize or they'll acknowledge rights that didn't actually happen. Right? And they'll like, you know, so if you talk, if you start to talk about like designing these big orgs, then in the same sense, you have to kind of decide if you're going to value consistency or availability to do work. And then, and then you're constantly injecting partitions actually in the way that a lot of these organizations get created. Sometimes because of acquisitions, sometimes because of the, you know, whatever personalities, there's always There are always little barriers to that communication, which makes it even harder to be consistent or available.

**Jessie:** [00:12:31] Yeah.

**Bridget:** I kind of wonder if there's even something to be said about speculative execution. Obviously, that went down a whole rabbit hole in the last year of, wow, everything in computing is terrible and terrifying. But I think there's also, in large orgs, there are a lot of little initiatives that have similarities to each other that are happening all over the org. Some of them might turn into something, and some of them might not. Maybe that's the way it should be. As opposed to having a single path of, this is the part of the org that this is happening in, and you know what? You could innovate differently over there.

**Jessie:** Yeah, I mean, actually, one of the cool things from the US Digital Service is that they have bureaucracy hacking, and it's someone who learns all the terms and then knows how to say things to officials so that they totally, completely understand it. I almost consider that, in a company, it's the same thing as me randomly cold emailing another team and like jumping that organizational boundary to be like, hey, your thing, it's broken. Um, but they probably do it way better than I do.

**Andrew:** It's like direct memory access to the, or whatever, you know?

**Jessie:** [00:13:34] Yeah.

**Bridget:** Okay. So that was the, um, the Pentagon visit and the, the USDS stuff. Um, what you saw in the hospital visit, can you tell us I know you wrote a blog post, which again, I will link to in the show notes, but what are some of your takeaways, Jess, about how the stuff you saw in a medical context relates to tech? Because I feel like we always talk about tech and plane crashes or whatever, but this stuff relates too. So what did you see there?

**Jessie:** I mean, I saw some terrible computer programs, but I wasn't really focused on that. The nice thing about the day was that I really didn't say much. I was just standing and watching, which is perfect for an introvert because I just get to observe. And that's my job, is literally observing, and no one was going to even bother. Me because, I mean, you don't want me talking. So that was really cool. And I mostly just like observed the interactions between people and like who the people were. So it was like just a bunch of nurses, like these residents that all seemed like pretty cool and chill, and then like the attendings. And like just the way that they interacted, it was like, it seemed really respectful. And I was kind of not expecting that, mostly because like on TV you see like, I don't know, they're all like dating and they like, you know, hook up in the closet or something. It is not like that at all. So yeah, it was just really cool to see like the way that like knowledge is transferred between people and like there's not like a like you're trying to get ahead. It's like you do your time and then you get like promoted kind of thing, which seems way better. I don't know. I was like thinking about this and my day before at the military like at the same time as observing all these things. So like It got a little— the channels got mixed.

**Andrew:** [00:15:18] So I've never— I mean, I've been inside of a lot of hospitals. My wife's a medical doctor and my mother's a nurse and 2 of my siblings are pharmacists. And I would also like, just to start, like thinking about what they went through to be those things, I feel like tech is so much more reward for so much less effort relative to what these people go through. And I don't know exactly what your friend's experience is, but most of the residents are working 80-hour weeks. And they actually made a law that the limit was 80 hours because it used to be 100, 120-hour weeks. And yeah, it's— yeah, I don't know how much we want to say on the air, but Basically, I feel like that system is medieval. And while there is this aspect of doing your time, it's basically an extended hazing ritual and it's not optimized for them to learn or for patient care. So yeah, you go through the hoops and then you kind of get bestowed the rights, conferred or whatever onto that station, but you don't, it doesn't seem optimal from a kind of like modern understanding of how people could learn and perform from me as an observer of this for the last 10 years.

**Jessie:** [00:16:45] That makes a lot of sense. I mean, I feel like comparing it to a startup where you're working that many hours is also even like, um, not at the same level of crazy. Um, because also it's like with tech, like at no point what you're doing is someone like someone's life on the line. Like, the stakes are so much higher.

**Andrew:** Oh, absolutely. Yeah, life and death is a real thing. Like, there's nothing more real, actually.

**Bridget:** And that kind of makes me wonder, like, if we're trying to look at the high-pressure parts of some other industries and take away what we can for how we can make our communities of practice, our working conditions, our interactions with other people in tech or with the world that is increasingly using tech, like, what can we take away from the good parts? You know, other industries colon the good parts. What can we take away from that?

**Jessie:** So that's what I was trying to highlight was the good parts, because I did see like a lot of shit, like literal shit. So yeah, I mean, I like tried to take away the part of like respect between people from the hospital stuff, but like, that is not something that I would ever want to do, like be a resident. It's just, there's a lot on the line. Also, my sister is a nurse as well, and what she's had to go through with different aspects of her job. She did this stint doing stem cell kind of procedures. I'm so bad at describing these things. But the patients were like, this was their last kind of stop before it's like, you can't cure the cancer that you have. And so it was really wearing on her as like a— She gets to know these people because they're staying in the hospital where she works and then one gave her a bike and then the next day they would just be gone. So that's really hard to do and now she does more homeopathic things. She's probably going to watch this and be like, you totally fucked this up.

**Andrew:** [00:18:50] Wait till she does a podcast on computers and you can—

**Jessie:** Yeah.

**Bridget:** Oh my God, I actually want to do a podcast now with like— dig up all of our least technical relations. And mine will be my dad, who is a doctor and had a flip phone until like last year and really does not want a computer at all.

**Andrew:** I wanna go back to this phrasing that you used a minute ago about high pressure. And when you're a resident and you're kinda coming into these circumstances and you've never done a procedure before, there's a lot of pressure, a lot of psychological pressure and There's a person's sometimes life on the line. But when you see the doctors who've done this for a long time, there's not that much pressure in a way. Because while it might be a high-pressure circumstance, that individual is not really feeling it. They've done this procedure 100 times or maybe more, whatever, and they go into that with the understanding of, for the most part, what's gonna happen. And sometimes, you know, there's corner cases or whatever that start to change the dynamic. But even then, you know, listening to the stories I've heard kind of over dinner tables, like, that's just this other thing. Like, it's just, they just execute this other branch of the plan most of the time, 'cause this is this other thing that could happen sometimes, right? And it's not like they don't panic because, or they don't have the, I'm not phrasing this the right way, but when you think about the high-pressure situations that you have in kind of a technical setting, you're often not practiced at that. It's often these anomalies, and that makes it even more high pressure. If you're really thinking about what it takes to run some of these systems at scale, at reliable— the level of reliability that we've come to expect, that's high pressure. There's maybe not life on the line, but it's certainly a lot of money. And so that's one thing, but when something goes wrong, we don't have good algorithms for most of the things that people do to actually go troubleshoot it. It's not like a thing that you can just go through the motions like you've done it 100 times.

**Bridget:** [00:21:02] Well, and you wouldn't necessarily want to, right? Because if it's an easy-to-solve thing that you already know exactly how to solve, you've hopefully automated that. And so the ones that you have to intervene in, are all mysterious corner cases.

**Andrew:** Exactly.

**Jessie:** Yeah, I almost feel like there's like a point where they become numb as well, because one of my friends was telling me that like, um, they were out to dinner and someone was choking at the table nearby, and so they went to go like help them, you know, um, and then, uh, they came back and like their food had been served and it was cold, and like everyone was like, maybe you should get it reheated, and they were just like, nah, that's just the job and then they just like continued eating, like after saving someone's life, which is like absolutely insane.

**Bridget:** Okay. What else should we talk about?

**Andrew:** What's interesting? What's going on in the industry that's interesting?

**Jessie:** I've been looking into like firmware stuff lately, like on the side. And that's really cool. I don't know. I also heard about like weird organizational structures that prevent the firmware in like Intel or like Dell laptops from being good because like the teams apparently don't talk to each other. I keep getting back into the weird organizational structures.

**Andrew:** [00:22:13] It's almost like Conway's Law is true. What about the 5G stuff that's going on in Huawei or anything? Is anyone following that story?

**Jessie:** Those foldable phones look so cool. I kind of want the Huawei one.

**Bridget:** They look so huge.

**Andrew:** But there's some political stuff about who's going to be allowed to build what, where, and all these questions about what the internet might look like in a, in a world divided or what have you. Anyway.

**Bridget:** Oh yeah, geopolitics. So many geopolitics. I did see the headlines about like, maybe we don't trust some of the people who might supply chips. And I'm like, do they realize where all the manufacturing is? Okay, whatever. They don't actually manufacture that stuff here. So good luck.

**Andrew:** No, I mean, if some of those dynamics change, then you would essentially legislate that that has to happen again, which—

**Bridget:** [00:23:14] I read some article that was talking about this that said that someone was trying to make some sort of computer what's-it in, I want to say, Texas or someplace and couldn't even get all of the, I don't know, screws for something to go on the motherboard. They like literally could not get the part. They couldn't source enough parts. I want to say this was a computer story, not a car story, but it's really the same supply chain.

**Andrew:** He advocated the ability to do certain types of manufacturing locally from a US-centric perspective. It would probably take you like 5 to 10 years to bring it online if you really wanted to starting today.

**Bridget:** Well, I mean, in those supply chains, there is also a great deal of exploitation of underpaid labor. That they're going to have difficulties replicating in countries with reasonable labor laws.

**Andrew:** So, well, that might be worth exploring because I just went to Mexico and I've, you know, whatever. I'm very, very blessed to have opportunity to go all over the world. And we have enjoyed externalizing essentially suffering. All of the, all of the computers that we take for granted, most of the clothes that we take for granted, they're, they're only happening at the price we pay for them because there's this chain of human suffering. And, and in some of these factories, the types of chemist— chemicals and the types of working conditions that other human beings are exposed to, that we sort of externalize the cost, you know, all the cost is on other people and all the benefit is on You know, me and my friends. So that doesn't make me feel great if I reflect on it. But at the same time, it's not in your face, so you don't see it. So, like, should you not use computers? Like, what's the ethical choice there? And I'm not sure I have an answer.

**Bridget:** [00:25:12] I mean, I'm not sure I have an answer except that every decision we make is going to have some kind of impact. Right, so like everyone's gonna have to make individual decisions about their consumption levels and how they use resources. And I mean, I can look at my carbon footprint and say, well, I don't have kids, so that's great. Oh, I ride on planes a lot, that's terrible. I mean, there's always something that you can do differently. And maybe some of it is just down to, making decisions about what you buy or what you consume such that it has good impact on your local as much as possible, as well as less bad impact on other people's local. But I don't know, what do you think, Jess?

**Jessie:** Yeah, I mean, it's interesting about the airplane thing because I had someone recently like do the math on if it's more effective for the number of people on an airplane versus the number of people in a Prius, like gas-wise, it's actually more effective to fly in a plane. So that's interesting because I didn't think that that would actually be true. But yeah, it really just depends. I mean, it's like people are gonna make choices based off what they value.

**Andrew:** [00:26:28] So what's the metric, right? You're talking about the efficiency of moving a person a certain number of miles for the amount of carbon or something.

**Bridget:** Yeah.

**Andrew:** Like, I totally believe that calculation. At the same time, you know, like lots of other engineering problems, The best way to solve some problems is to not have them at all. And then do we need to go that many miles? So it's like, I don't know, there's like a deep, deep well of ethical questions that you kind of open up Pandora's box on if you start thinking about it too hard. But let's just stop thinking. That's what I think.

**Bridget:** Well, bringing that back to computers, actually, I appreciate the work that Ann Curry and Gareth Rushgrove and some other people did. With the Coed Ethics Conference in London last year where they talked about things like the carbon footprint of our data centers. A lot of the big cloud providers have either carbon neutral or moving towards carbon neutral data centers. That's almost an ethical decision for people who are, oh, I'm using this MSP or whatever, and it's like, well, maybe I should look at some of the bigger providers that can run stuff at a scale and then also at a carbon cost such that whatever I'm running is going to have less impact. I work for a vendor, but that doesn't mean that you should use the one that I work for. They all have good stuff there, but it's worth looking at what is the carbon footprint of the computing work that we're doing.

**Andrew:** [00:28:01] Don't look at Bitcoin. That's all I got to say.

**Bridget:** Bitcoin is garbage. I don't understand why people want to waste that much electricity. I know people who have bought cars and probably if they had waited, could have bought houses, but it's still garbage.

**Andrew:** There's some fun stuff going on from an R&D perspective. I've seen people talking about doing things where you build these submergible, self-cooling data center stuff to go in the ocean and everything solar, whatever. It's all science fictiony stuff, but—

**Bridget:** I think some of it's real.

**Andrew:** It's real in the sense that we have all the pieces to put them together. I don't think it's real in the sense that the preponderance of computing will be done that way anytime soon, but it's certainly interesting to think about it.

**Bridget:** There's a— I don't know if you folks know Astrid Atkinson. She just left Google after spending like 15 years there to do a clean energy startup. I will put the link in the show notes.

**Andrew:** [00:29:05] I did see that mentioned on Twitter.

**Jessie:** Yeah, I saw it on Twitter and I was like, wow, that sounds cool.

**Bridget:** But I think that's a— not all of us are going to go do a clean energy startup. Other than supporting that and maybe putting her on stage if I'm programming a conference at some point, But I think that maybe where we should, maybe where we should focus is what stuff can we do that makes the world better or at least makes us happier and where do those intersect? And that's of relevance, of course, because I think everyone on the planet wants Jess Frazee to do things for them and it's like, well, if Jess Frazee is doing what she thinks matters, like what matters slash what's interesting, where's the intersection between what matters and what's interesting?

**Andrew:** I want to, I want to go to that topic and I want to drag some of the themes that we talked about before. So Jess mentioned it's interesting to reflect on these big organizations and kind of how these dynamics and protocols play out. So if you are designing your organization, like, what would you do right now? Because I know you're sort of thinking about what you want to do next and what that could look like. So Now you're, now you're the CEO. What does that look like?

**Jessie:** [00:30:21] Yeah, so that was something that I like tried to kind of like touch on in the blog post, but it's something that I'm still figuring out. So like whatever I say could like evolve into something else with what else.

**Andrew:** Almost like you could get more information and then make better decisions.

**Jessie:** Yeah, you know, like learning, you know, growing with time. Um, so yeah, uh, like currently where I'm at is, um, I really hate titles, and I hate, like, this whole methodology of climbing a career ladder, like, in the military, where it's like you constantly have authoritarian rule. I don't like that. So trying to solve that problem, and I had seen a talk from Brian Cantrell where he went over his methodology and how everyone had the same title, and I'm not exactly sure how that plays out at scale for really large orgs. But I do fully believe in doing that as a startup or even just like the fact that you can motivate people based off having a purpose and, you know, having a mission is so much more powerful than like, you're gonna go up a ring in the ladder when you complete these steps. It's like everyone's aligned on doing the same thing and like completing the same like overall purpose and mission. I think that's just way more powerful than anything else.

**Andrew:** [00:31:39] So you set up all these basically like game theory dynamics, game dynamics when you start to have KPIs, OKRs, whatever that people are going to be, because everyone just had their perf season or a certain swath of people that we probably follow on Twitter did. And it's sort of interesting to see all the public fetching about it and sort of like I don't know if anyone wants to make any comment on that, but I want to make one other interesting thing. Let's also go back to the CAP theorem thing, and it's basically like what you can get away with at different scales changes. It's like you need to scale the architecture as your apps get more and more scale. You kind of need to rescale or rethink the architecture of organizations at a certain scale.

**Bridget:** Actually, related to that and what you just said, I think that Humans are pretty efficient and pretty effective and pretty good at gaming whatever OKRs or metrics you put in front of them. So, anytime you're trying to formalize that sort of thing, I think you have to be really careful, because people might not do what you want. They might do what gives the appearance of what you want.

**Jessie:** [00:32:50] Yeah, that's like why I hate incentive structures like that, because people will just do the bare minimum, and then they'll almost manage up in a way that's Like, I'm amazing and fantastic at my job. I deserve the promotion. And then that continues over time until—

**Andrew:** A bastardized Deming version of this is there's a quote, something to the effect of, if you give a manager a target for a bonus, he'll burn the company to the ground to get his bonus. Like, whatever he has to do to make that number the thing that gets him paid, he'll do it. Or her. But we'll blame it on him.

**Bridget:** All right, so you were going in a Conway's Law and game theory direction, and I know this is like Schaefer catnip. In terms of building a good organization, when Jess talks about maybe the incentives and the structures are different at a small scale versus a large, is this like a Dunbar's number thing? What is the tipping over to, oh my God, we actually need OKRs or whatever?

**Andrew:** [00:33:51] On some level, I don't know if you ever need OKRs. I think that there's, again, some of these experiments you have to do in vivo, right? Like we can just sit and have hypotheticals as 3 people on a podcast and it's sort of meaningless. But one of the things that I feel I strongly need to do before I die is kind of test some of the things that I think about.

**Bridget:** Oh, I've had to use OKRs. They were garbage.

**Andrew:** Yeah, I have actual experience on that, but for the most part, what we have in the industry as kind of the state of the art is rooted in Industrial Revolution factory management and Taylorism, where you're trying to kind of standardize and optimize away variation in a process. And what you really need in especially kind of software and R&D type of situations is to unlock the human intellectual potential, the creative intellectual potential. And I think that in most cases, OKRs tend to be detrimental to that because you lock people into a specific metric that you're now— you kind of like specified what the solution space can be in a way that ends up being detrimental to that creativity. And then there's all these other aspects of the politics and gaming or whatever that we've kind of already touched on, but that comes out where it's one thing. So there's other, whatever, kind of pithy anecdotes where there's a saying that's like, there's no limit to what we can accomplish if we don't care who gets the credit, right? Or some variations on that theme. But In reality, when you start talking about how people get paid and how they get promoted and all these other things, then it starts to change those dynamics pretty drastically, pretty fast. And when there's so much money and there's so much, you know, whatever, notoriety involved, then it's somewhat predictable. So kind of going back to the question, I don't know if I have a perfect answer. And then the other thing that I've given a lot of thought to, about organizations and the structure is the, the, the sport that you're playing matters, right? So when you start talking about roles and, and kind of allocations of resources and who's going to do what sort of work to accomplish a mission, then you have, you have different sets of, of scenarios or different kind of vertical slices or however you want to think about it, about what you're trying to do. So if you are trying to build hardware, like that's a different equation than if you're not, if you're trying to do, things that are involving— I already kind of talked about this spectrum of scale. So, like, on one end, you have small-scale, you know, 2, 3 people. Like, we don't need much process. We're all in the same room all the time, or we're all in the same Slack channel. As you get to bigger and bigger organizations, the, you know, CAP theorem comes into play. The chance that everyone knows what everyone else knows is zero. And then there's these other spectrums we kind of talked about. On one end of it, you have, let's put cat pictures on the internet, and then In the middle, you have financial transactions and that kind of thing. And then on the farther end of the scale, which we already sort of talked about too, you have this software will change if people die, right? So when you start to think about those scenarios, then that might change the type of process that becomes applicable or pertinent, relevant to that mission.

**Bridget:** [00:37:35] Right, right, because how you're dealing with your queues or your retries or whatever are going to matter a lot if it's going to ship you 2 copies of the book versus if you're going to send 2 bombers.

**Andrew:** Yeah, you can get away with a lot more. I mean, this is a— I don't know. I'm going to monologue for just a second. One of my favorite things, I used this in some talks before, is this notion of the cube-square law. Does anyone know what the cube-square law is? So it has to do with a lot of things, but in particular, in a discussion about biology, this cube-square law, it comes into play because of the structural strength of a lot of things has to do with the cross-sectional area, which is—

**Bridget:** Oh, right.

**Andrew:** And then the mass of it or the weight of it is n cubed, right? So the ratio between—

**Bridget:** This is like where the weak points and the strong points are.

**Andrew:** Well, in this case, we're not even talking about the structural shape of things yet. We're just talking about the nature of the ratio between n squared and n cubed. And so, at higher scales, the difference in the ratio between n squared and n cubed separates pretty fast, right? So, the metaphor that I used in discussing this before, and also kind of in a DevOps context, is that if you think about an organism like an ant and compare it to an elephant, So an ant has a certain biology, has certain structure. Ants have exoskeletons and ants pass oxygen through the pores in the membrane of their exoskeleton to metabolize. And then they have not, they don't really have the same kind of structure for heart and lungs and the rest of it that mammals do, but they, they get by and they, and they happen to be able to lift 50 times their body weight. Right. And then on the other end of the spectrum, you have the elephant and the elephant has the highest ratio of bone to mass of any, any animal on the planet that's alive right now, which, which can be explained by the cube-square law because the strength of the bone is a function of that cross-sectional area, but the volume that it has to support or the mass that has support is a function of N cubed.

**Bridget:** [00:39:52] Right.

**Andrew:** So you need more bone-to-mass ratio to support those big, big bodies.

**Bridget:** And you need more structure in your communications at a large org.

**Andrew:** Well, let's get to the fun part. Right. So elephants, elephants need to eat all this food and they can't lift 50 times their body weight. Not even close.

**Bridget:** Right.

**Andrew:** There's also a theory that every animal can basically jump the same height. Right. So, so an ant, the ants aren't really jumpers, but like you see fleas or whatever, and they can, they can jump so high or whatever. So if you, if you took an ant and tried to make it the size of an elephant, what would happen? This, this is where it gets, this is where it gets fun. So you just, you could just will an ant to be the size of an elephant. So all of a sudden you have this ant that weighs tons, right? So ants are this big, they have certain biology, you make them this big. What would happen? Well, to start with, you would need sustained winds over 70 miles an hour to have a chance to metabolize enough oxygen to keep the thing alive. Because the ratio of the, of the body and what it can do, it doesn't, it doesn't have lungs, right? So how are you going to get enough oxygen? Well, you just need this, this wind, no problem, right? Uh, now if you look at just the cavity of the ant, the abdomen and the rest of it, and you just could will those organs into existence, at the mass of an ant, if you just made those organs exist at that size, then the first time it tried to move, or maybe even like immediately—

**Bridget:** [00:41:25] You mean at the mass of an elephant?

**Andrew:** At the mass of an elephant. At the mass of an elephant, its internal organs would just crush each other and it would be dead immediately. Like it literally—

**Bridget:** Oh yeah, I have read something about that. And then I'm like, okay, that's fascinating. But does the cube-square law apply to all of our interactions?

**Andrew:** Well, let's bring it back to this ratio or this kind of object lesson. I think the majority of the DevOps presentations have, especially leading with people who put cat pictures on the internet, are the equivalent of ants explaining how they can lift 50 times their body weight. That doesn't necessarily translate if you try to take those lessons into elephant world, probably not healthy all the time to try. So yeah, I mean, this, this has evolved to the point where we do have elephants to kind of talk about their— or hippos and rhinos or whatever, um, they talk about their, their progress and, and doing things better. But my long-winded, like, meandering way, like, I feel like the— what the point I really want to make is that you can't just take what someone did and then say, oh, like, that's what I'm going to do too, without the context of why that existed and mapped into the context that you actually have.

**Bridget:** [00:42:48] So maybe that is a clue for the— what is Jess's next big adventure? Is picking org size is actually something that you have to think about even before picking, say, realm of effort. Is that what you're saying, Schaefer?

**Andrew:** Well, if you're going to join an org, then maybe you could have some insight, but for the— if you're going to start a thing, then, then it's actually not that way. What you start with is a single cell and then that cell doubles. And then, you know, it's basically like you have to grow the organism from an amoeba and then does it evolve to be an ant or does it evolve to be an elephant? And, and what you look like when you're the size of an ant is not what you need to look like when you're the size of an elephant. Right? So, It's just being mindful and understanding about what that— I like this framing that Jess already provided, and I talk like this in a lot of other contexts too, is the big mission is what matters, right? If everyone in the body believes in that thing— so, another biological metaphor is sometimes people in DevOps land are like, oh, everyone should just do everything. It's like, well, I never thought that's true. And I've never seen anyone who's good at every single thing. And also there's some benefit to having separation of responsibilities and expertise in a way. So to me, when I think about what a healthy organism looks like, like a human body has all these organ systems, right? And if you have an undifferentiated mass in a human body, then that's a tumor, right? Like you want, you want to have these strong separations and like these cycles and feedback between them, but not just undifferentiated mass. That's not healthy. But if you're the size of an amoeba, like if you're a single-celled organism, that looks suspiciously like an undifferentiated mass. And that's okay because that's, that's what it needs to sustain life and it's possible at that scale. So to me it's more, it's not about, oh, I'm going to choose this org size. It's like, let's evolve the org that's optimized for the habitat that it finds itself in.

**Bridget:** [00:44:54] All right, what do you think, Jess?

**Jessie:** Yeah, I mean, I think that it makes a lot of sense. Like, what doesn't— what works for like something small won't work for something huge just because like there's so many people involved. So I just like can't seem to find like good answers for the problems that like I deal with in big org structures. That are sustainable over time and stuff? And that was something I was trying to touch on in the blog post with linking back to Brian's talk was the n+1 shithead problem where the person in a career level above you is a shithead and then you look at them and you're like, this is dumb. Why do I even want to be that level? Because they're like that. So it's like, how do you avoid that in the scenario where it's a huge org and you can't make change and you have, you have to like climb the ladder, but also you know that once you get to that level, you're just one amongst the dipshits.

**Andrew:** [00:46:00] Like, so I, I think there's slightly two framing. There's, there's the framing of the, I'm an individual in an org and, and like, what's the optimal game that I should play to, you know, one, keep my sanity and, and two, do things that I think are meaningful. And then three, You know, you don't want to not be promoted. You don't want to not be that one. Uh, so there's that. And then there's, uh, the other thing that I think we were talking about a little bit more so far is as the person who could kind of, you know, by design create those structures, by design create that culture, like what would that optimal culture look like? And those are both, both kind of interesting. One, one from the top and one from the bottom. And, and to be honest, I don't think there's optimal solution, right? I don't think that this is something where you just say, you know, here's the, here's the, the formula. You just do the formula and you're going to get great results. I don't believe that's truer than, you know, you kind of already have a solve. Uh, I think just reflecting on watching my friends grow companies and watching, you know, the, the public kind of insight you get into some of the growth that we've seen in some of our Silicon Valley friends' companies, like, you see these phase shifts on display, right? Where the scale of an org starts to break the culture that exists. And sometimes it becomes a little bit public in an embarrassing way. But I don't think there's a formula. I don't believe there's like a magic solution.

**Jessie:** [00:47:32] Okay, that makes a lot of sense. I've been trying to find this magic solution and it's just not there. Like, it's really hard.

**Andrew:** There's a lot of unsolved math problems too, Jess.

**Jessie:** Oh man.

**Bridget:** But probably working in tech is going to pay better than solving the unsolved math problems. I mean, probably.

**Andrew:** Yeah, that's the other thing is you look at the— I think that there's— I'll steal another metaphor from someone. So Brian Foote, he wrote this thing called The Ball of Mud. It's like a pretty fun essay he wrote a long time ago. And I watched him talk one time about building software, and it was about the ball of mud, and it was at an Agile conference or whatever. And he started with this kind of dramatic setup about how people write these really terrible architectures that kind of accumulate technical debt in these completely, you know, whatever. We've all been there. We've all seen that codebase, right?

**Bridget:** We've all built the, what did you build?

**Andrew:** Yeah, yeah, or been part of it. And he builds up this thing and then he asked the audience, and what, what do we call people who build things like this? And there's like this pregnant pause and he's kind of looking around the room trying to get everyone to make eye contact. And then he says millionaires, right? So I think the same thing kind of applies to building the org, right? It's not that you're gonna get perfect and you're probably gonna make mistakes and some of it's gonna be messy. But if you deliver enough value, if you create enough value, then there's an opportunity to capture some value too.

**Jessie:** [00:49:13] Yeah, that makes a lot of sense.

**Andrew:** That's my story and I'm sticking to it.

**Bridget:** I think this might be a place where I put Andrew on the spot and say, so Andrew, are you gonna write a book?

**Andrew:** I am so gonna write a book one day. I'm like writing a book, but I Writing a book is hard for Andrew.

**Bridget:** I'm trying to picture Andrew writing a book when getting Andrew to write a slide deck before, like an hour before the presentation is impossible. I don't know if publishers work that way.

**Andrew:** That is not true. I have submitted slides to you days before they were—

**Bridget:** Like a day for Ignite because the deck needed to be assembled.

**Andrew:** See? The truth is out there. I have a process.

**Bridget:** We love the process.

**Andrew:** I trust the process.

**Bridget:** All right, I'll tell you how the process goes if you haven't heard this one from Andrew, Jess. He has a process. He has a conversation with himself. It goes on over time. He thinks through all the things that are going to be in the slides, and then he just puts the slides together because he's already done all of the thinking, which is the long part.

**Andrew:** [00:50:18] You just choose what, what parts of the words you say to yourself, the voices in your head, to say out loud. To the people.

**Jessie:** Nice.

**Andrew:** It seems to be working. People keep asking me to go do more talking.

**Bridget:** Where are you going to be talking upcoming? I know I saw you on the schedule for Atlanta.

**Andrew:** That's the next big thing that's on the schedule. That's in April. That's the DevOps Days/Map Camp/Serverless Days. That should be fun. And I have a— I think it will be a pretty fun talk that I'm going to give.

**Bridget:** So what are you going to be talking about?

**Andrew:** I'm going to start by showing people chess puzzles and asking them what's the best move. So the point I want to try to make is that you— it's not enough to just see the landscape, right? Because Simon Wardley, who I love to death, and Wardley Maps I like as a tool. One of the metaphors they use is like, you got to see the chessboard to make good decisions. But it's not enough to see the chessboard because chess is actually a game with no hidden information. And if you don't understand the dynamics of the chessboard, it doesn't matter that you see it because you still can't make a decision. So, and then I'll probably talk about John Boyd and some other stuff too, but it'll be, it should be fun.

**Bridget:** [00:51:40] Cool. So that's, and that's coming up and we'll have a link.

**Andrew:** And I'm having those conversations with myself and at some point, very close to the conference, I'll make some slides about it.

**Bridget:** Nice. Um, and then, uh, Jess, I know you're gonna be at .go in Paris, I want to say, and then QCon in London. Are you just picking these based on cities you want to go to?

**Jessie:** Um, I mean, that's how I always choose conferences. That's why I go to a conference in, like, you know, Brazil on the beach. Uh, I also do that conversations in your head thing, except I feel like I do it in the shower, and then I come up with the jokes I'm going to land at the conference. And then when they don't land, I'm like, oh no, bad shower thought.

**Andrew:** Yeah.

**Bridget:** So what are your upcoming talks about?

**Jessie:** So at QCon next week, it's going to be on SGX and kind of like a deep dive into it. And I got a lot of interesting details from people in this space that changed my mind about how I feel about it. DocGo is going to be on eBPF in Linux and kind of how to use it with Go.

**Bridget:** [00:52:44] Nice. I read that blog post of yours.

**Andrew:** I'm going to escape iptables one day.

**Jessie:** Yes.

**Bridget:** I read that blog post about SGX, and I will be happy to admit I didn't really understand it. It's not that your blog post wasn't clear. I think I just don't understand the problem space very well. But I really appreciated that you articulated that you got new information and it led you to evolve your thinking in the problem space, which maybe you can give us or Andrew can give us or whatever, the 10-second explanation of the problem space. I'll put a link to the blog post, but again, I don't really understand it, so I don't think I can summarize it.

**Jessie:** Yeah, so at first, when they built SGX, it was for DRM for Netflix to make sure that no one is stealing the videos and then reusing them. But then people ended up using it for code execution so that If you're running in a provider, like a cloud, and you don't trust that provider, and you're like, I just want to put my code here, but I don't want the provider to know about it or maybe do sketch things, then you can run it in an enclave, and then the promise is that only you trust the hardware provider and you don't trust this, maybe like the cloud provider type of deal.

**Bridget:** [00:53:58] But weren't you just saying that we can't trust hardware either?

**Andrew:** All security starts with physical security.

**Jessie:** That's where I'm at with it. Do we also trust the hardware people? It's the same question at the end of the day.

**Andrew:** The slight difference is the hardware people are far removed from the runtime, so it's like they have to be even more sophisticated to ever exploit it, but whatever.

**Bridget:** Yeah. Okay. So then that's that talk. The eBPF one. Words are hard. Tell us about that one.

**Jessie:** So that one I haven't like started putting much more thought into yet because I got to do the, you know, conversations in my head thing.

**Andrew:** But Berkeley packet filters are in the new kernels and they're awesome.

**Bridget:** Yeah. I mean, I've seen Brandon Gregg talk about it. I'm just kind of curious, what's your angle? What are you interested in about it? Like, what do you want to say about it?

**Andrew:** Where's the AppShell team?

**Jessie:** Yeah, so, like, I'd love if we could get rid of some of the shitty tech that we have now and replace it with eBPF because it's faster and better. But the problem is, like, there's not a lot of debugging tools and stuff like that. So, I'm mostly going to explore how you would do this today, but I don't think many people are running it in production because it's not easily debuggable at all or anything like that. But there are debugging tools built with eBPF, so it's like very meta. Like maybe you can debug eBPF with eBPF. It gets really intense.

**Andrew:** [00:55:32] But you could imagine a world in the future where you don't have iptables, possibly.

**Jessie:** Yeah, which would be great.

**Bridget:** And I feel like for people who don't spend a lot of time being angry about iptables, why would it be great?

**Jessie:** IP tables are just archaic. So, like, a lot of times the problems that you run into with IP tables is that, like, the rules, like, they all execute in a certain order, and then that defines, like, how things are filtered. So then when you want to, like, move things around and change the behavior, like, you got to rewrite all the rules so that it behaves in this one way. And then a lot of people just end up wanting to, like, reimplement this algorithm for IP tables to fix IP tables, and it's just absolutely insane when, like, You could have a real, kind of, better language for creating filters for things that isn't like, it goes through this chain of commands, and then you have to undo the chain and change the story that you wrote with all these rules. It's crazy.

**Bridget:** This also sounds like we're going back to what Schaefer was saying about human systems. There's an awful lot of rules spoken and unspoken that put organizations together. If you're unpicking those, if you're trying to build your ideal org, Schaefer, and I'm I'm saying this as someone who worked for you for 2 years, so I might have my own opinions, but what's perfect? What's the right way for you?

**Andrew:** [00:56:51] To debug my organization?

**Bridget:** Yeah, to build an organization that has— it doesn't have all those layers that are at cross purposes and what have you.

**Andrew:** Well, I'm going to slightly change the question, but first I'm going to ask you a question. Would you ever recommend someone work for me? Or work with me.

**Bridget:** Absolutely. I would work with you or for you again.

**Andrew:** So there's that. And then kind of going back to like, we already sort of laid the groundwork for this, but you just want to get people to understand the higher purpose of the organization. So I think that there's this guiding principle around the values that are real and not just what someone from HR put on a poster. And when you see historically certain, certain outcomes, there's moments in time, and maybe they're not sustainable or stable, where you feel these things were created. And if you've ever been part of a team that kind of had that sense of purpose, then you always long for it for the rest of your life. So, so there's that. And then my own personal mission is not even so much to prove that I can do this, which, which I do have as one of my missions. But to me, the success is not so much like, can you build this thing? That builds the thing that is whatever valuable for that, for that project to make money. It's that, can you build the thing that makes the people that are part of it able to build those things again and make more people and make more people? Because I believe leaders should make more leaders, not leaders should have followers.

**Jessie:** [00:58:25] Yeah. Oh, I feel that. That's really good. I really like that. Also the part about like, once you've been on a team that had like a really good purpose, like you are constantly searching for that again.

**Andrew:** It's a hole in your heart till you—

**Bridget:** That's interesting too because I have known people who have worked together and then worked together again. I actually hired my friend Ryan when I worked at the university and he worked for me for a year and then like a decade or so later, he talked me into joining an org where I ended up reporting up through someone else to him. Probably that it didn't— it almost felt like our interactions didn't really change. Like, I worked for him or he worked for me, whatever, because having the dynamic of, you know, mutual admiration, trust, whatever, just if you can build that, you want to keep building that, maybe with the same people, maybe with different people.

**Andrew:** And build it in a way that, like, the people can build it again without those people.

**Bridget:** [00:59:28] That might be the tricky part too.

**Andrew:** No one said it was easy.

**Bridget:** Oh, well, we're coming up on time, so I want to just kind of quickly ask folks, like, we talked a little bit about the upcoming events you're going to be at. If people want to interact with you on the internets, where would they do that?

**Andrew:** Little Idea on Twitter. Probably the easiest.

**Jessie:** Yeah, @jesperaz on Twitter. Sorry for the tweets.

**Andrew:** Yeah, I apologize in advance.

**Bridget:** Apologize in advance for the mysterious subtweets.

**Andrew:** Got to stay on brand. Engage with my brand, my sardonic subtweeting brand.

**Bridget:** I adore your sardonic subtweeting brand, Shaffer. You know that. Head on over to arresteddevops.com/shiny-objects for this episode's show notes. The site also has our newsletter, all the Arrested DevOps stuff that you could want. You could visit arresteddevops.com/itunes and leave us a review in the iTunes Store. I'm told that helps people find the podcast. I have no idea how anything works. Thanks so much to Jess and Andrew for joining us today.

[01:00:39] Mahalo. This was super fun. We should do this again.

**Andrew:** We should.

**Bridget:** Close this out by saying I'm Bridget, @bridgetkrumhout. This is Arrested DevOps, and remember, there's always DevOps in the banana stand.
