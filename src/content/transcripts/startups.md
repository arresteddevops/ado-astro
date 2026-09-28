**Nicole:** [00:00:00] Y'all who are listening or watching, you've been warned. If you ask me, I will start.

**Bridget:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Bridget Kromhout, and today I'm talking about startups with Charity Majors and Nicole Forsgren. The show notes for this episode can be found at arresteddevops.com/startups. But first, a word from our sponsors. Arrested DevOps is brought to you by 10th Magnitude, a company that figures if you're listening to this podcast, you must be pretty cool. 10th Magnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/10thmagnitude.

**Nicole:** [00:01:00] This episode is sponsored by VictorOps. Built for modern incident management, VictorOps provides a unified platform for real-time alerting, collaboration, and documentation. Driven by your IT and DevOps system data, VictorOps helps you respond to incidents more effectively so you can minimize downtime and make being on call suck less. Visit arresteddevops.com/victorops to schedule a demo or start your trial. Mention that you heard about VictorOps here on Arrested DevOps, and you'll be eligible for some sweet discounts too.

**Bridget:** This episode is also brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 70 common infrastructure tools such as Chef, Docker, and AWS, so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog. Super excited to be chatting with today's guests, both of whom have been on the show before, separately and together. But today is a deeper dive on their startup experience, and some of our listeners may not have heard those previous shows, so let's have our guests introduce themselves, starting with Charity.

**Charity:** [00:02:13] Hi, I'm Charity. I think this is my 3rd or 4th Arrested DevOps.

**Bridget:** Wow.

**Charity:** I feel like I should be keeping track, like they do on SNL. I'm co-founder and currently CEO of honeycomb.io, where we're building a next-generation observability framework. Basically, when your monitoring runs into a wall or your APM runs into a wall and you can't ask any questions, we can help you. Previously, I worked at Parse for a few years, and we were acquired by Facebook. I have lots of opinions on everything, really, but, like, especially databases, and startups, and software, and everything.

**Bridget:** Nice. Awesome. Thank you, Charity, and welcome. Also joining us is Dr. Nicole Forsgren, PhD.

**Nicole:** Hi.

**Charity:** A little redundant. Esquire, the Honorable.

**Bridget:** [00:03:14] No, you ever like fill out those, um, like it's, I don't know, weird airline things or whatever where they want you to pick from a really bizarre list of titles.

**Nicole:** Always go with doctor. People are super polite. It's the best. It's the best. And like hotels, I was like, hello, Dr. Forrest.

**Charity:** And I'm like, hello, thank you.

**Nicole:** I know, at least it's good for something.

**Bridget:** But so tell us a little bit for our listeners who may not have heard you previous episodes. Tell us a little bit about yourself.

**Nicole:** Sure. So, this is, again, I'm sitting with Charity. I think this is my third, maybe my fourth episode of ADO. Second with Charity.

**Charity:** Woo-hoo!

**Nicole:** Illustrious company. So, I am a co-founder at DORA and also the CEO. Prior to DORA, I was a chef. Before that, I was in academia for a while. And before that, I did enterprise systems and storage and then consulting for a fair bit. I also have pretty strong opinions about how people do the DevOps, and particularly around the DevOps, and particularly around how people do measurement and monitoring and improvement of processes, people, and technology around technology transformations.

**Charity:** [00:04:34] Technology transformations. What does that mean?

**Nicole:** Well, so generally, people want to try to deliver value in the market using software. And that usually involves some type of— I'm gonna say it again, right? This is so circular, it's awful. Some type of technology transformation. This usually means upgrading or changing and reforming the way we make software, right? So, this might mean, making our software better by introducing continuous integration, continuous delivery, upgrading our monitoring systems, using a lot of the processes and the things that you talk about. This might mean introducing and upgrading our automated testing systems. This might mean fixing our culture. Oh, culture, right, people? This might mean using and implementing better processes, right? We talk about agile. This isn't just, like, doing— taking your meetings standing up instead of sitting down, right? It means implementing WIC limits, several of these things. And so, most of my work and my research over the last decade now has been understanding which of these things that we talk about when people say, whoa, what do you mean by DevOps? Okay, it means a lot of things. And this is what DORA is. I think I skipped that part of the question. By the way, this is DORA. It's understanding, and we've been doing the research. So, DORA is myself, and Gene Kim, and Jez Humble, people you may have heard of, taking the research we've done over the last several years into which of these levers that we can turn are most important and most impactful, and then understanding how to implement those and prioritizing those as we try to improve the way we develop and deliver software in organizations for maximum impact.

**Bridget:** [00:06:23] Totally awesome. So, yeah, so you two were together on ADO most recently at a live episode.

**Charity:** Yes.

**Bridget:** Was that last July, I think? DevOps Days Minneapolis. Nicole, you were the opening keynote and Charity was the closing keynote. I know you both made a huge impact on our 700-person crowd that was all looking to learn about how to dev some ops. So, so I guess—

**Nicole:** and ops some dev, really, right?

**Bridget:** And ops some dev. So for, I guess, like my first question for both of you is, since last July when our listeners last heard from you, what's been going on for both of you since then?

**Charity:** Go for it, Nicole.

**Nicole:** I love you, Charity. Oh, so that was so fascinating and fantastic for me. I was at, like, personally such a crossroads for myself because I had been at Chef for a year. I was working on a year and a half, and I had had, like, this fantastic journey. I had left academia. I had walked away from— I was about to get tenure, and it was really fantastic. But I was coming to a place where like Dora had been this little side project with me and Gina Jazz, and it was starting to get big enough. And I was like, I'm not sure what to do. Several other companies had been approaching me, and I just wasn't sure what to do. I was like having this— crisis isn't the right word, but I wasn't sure what my next step should be. Should I go to a larger company? Should I run my little startup? Should I keep having it be a side project and work way too much? Because of course that's what we do. And I find Charity. Bridget's like, you got to talk to Charity. And I'm like, I don't know her that well. I've been like, you know, nerd crushing on Charity forever. And Bridget's like, go talk to her. So I pull her aside and Charity gives me this fantastic advice. And that's like, you need to understand what it is you want to do. If you want to have a side project, that's fine, but you have to be 100% committed and you have to be 100% transparent with your— with the companies that you're talking to, that you're considering going to. And you have to tell them that you have this other project. And if you go to them, you will only be giving them 1 year of your time. And like, I'm always completely transparent and totally frank and honest. But until I had that conversation with you, Charity, I don't think I had completely verbalized and articulated even totally to myself that I was about a year out.

**Charity:** [00:08:48] Yeah, it was very clear to me that you were in love with this thing. You were so in love with this thing. And you were just like trying to make blocks move around. But you had no really like realized that this is where your heart was.

**Nicole:** Right. And I mean, I'm a master juggler. The juggle is real. Right. And I'm really good at it. But Dora was starting to get to the point where we were hitting critical mass and it was getting big enough that it was just going to take too much time. And so I went back and I basically had to tell a few other companies and it kind of boiled down to, this is just going to have to be the way it is. You've got about a year. And then I went back to Gene and Jazz, and we had an offsite.

**Charity:** And it was like, I have to imagine listening to yourself say that, you're like putting yourself in their shoes and going, is this the kind of person I would want to bring on who isn't really like in love with my thing? Isn't really like, you know, just there for the salary? Sorry, pager duty keeps going off for me. You know, like, I could see the wheels turning. You're just like, oh, is this the person that I want to be giving myself You know, to— yeah, it was, it was.

**Nicole:** [00:09:54] Yeah. Well, and it was funny also because— oh God, if Gina and Judd are listening, love you guys. Um, they had been trying to convince me for months to take over Dora. For months, right? And for some reason it hadn't quite clicked because I was like, no, no, no, it'll be fine. I can keep doing it on the side. Everything's going to be fine. But for some reason, like, Charity just like— that was the thing. That was it. And so we went back and I'm like, okay, I'll take it over and I commit to you at least 1 year. Because there was also— I'm so risk-averse. This is hilarious, right? People who know me, they're like, how did you plan that? They're either like, how did you plan this? How did you ever decide to go do this? And I'm like, I never did. Or they're like, what, Nicole?

**Charity:** You?

**Nicole:** I'm like, I know, right? Like, this was not in my plan. This is not me. I'm completely risk-averse.

**Charity:** I think this is a really classic and common startup pattern, though, for like, not most people are not startup people. I would say 90, 95, close to 100%. You round up to 100%. Nobody's a startup person. But once in a while in your life, something comes up and it just like smacks you. And it's not always the idea. Sometimes it's the team. Like, look at that team. Like, like, that's a stellar team. For me, it was not the idea. The idea came later. And I think a lot of people think that, like, when you start a company, it's this You know, you just know, and you have this great idea, and you knew from the beginning that it would work. And that's, like, almost never true. You know, it's that, you know, it's always a complex, you know, mix of reasons and emotions and maybes. And if you're lucky, as time goes on, it becomes really crisp and clear, and then you kind of retcon it. You're like, oh, yeah, I totally knew way back then. But, like, if we're honest, We didn't, you know. I can talk a little bit more about what that was like for me, but I want to hear the rest of your story first.

**Nicole:** [00:11:45] Well, so I do think some of it's the team, right? I mean, Gina, Jez, and I gel really well, particularly Jez and I, right? He joined Chef. He realized that they were particularly looking for someone to help drive engineering efficiency using metrics, and so he brought me on. He ended up leaving, and I almost followed him, right? We were like, we have to find a way to continue working together because there's just So, we always say, individuals don't make software, teams do. When you find a really great team that works well together, and I've heard several people in industry say this, sometimes when a person leaves an organization, you might wanna take the whole team with you. Sometimes that's just what works. I still write papers with a core team. So much of my research just does that. Sometimes you just take the team. And so—

**Bridget:** That's so true. So many people, like, I've worked with the same people at numerous places and like, not just like in one case, in several cases, because if you gel, if you gel really well with people, you want to keep working with them.

**Charity:** [00:12:51] Right. Well, and it's also like none of us are perfect. I mean, I know. Oh, I know. I know. But like when you find someone or a small team of people where your weaknesses and your strengths mesh with theirs, it's like magic. It's like so much of the friction in your life, like My partner Christine and I, you know, I'm really good at being pushy and loud. I make, you know, 90, 95%— I know, I make like 90% of the decisions, you know, automatically. But 5 to 10% of the time, she's like, she'll call out something and she's right 100% of the time, you know. And so I just, I know to CC her on everything. I need her looking at what's happening or else I'm not getting that really critical check and balance. She doesn't have a lot to say most of the time, but when she does, I just know, I know she's right. And it's so valuable.

**Bridget:** She's so—

**Charity:** exactly.

**Bridget:** She's amazing.

**Nicole:** We've got that same balance, right? Uh, Jez and I have that thing where like I juggle a bunch of stuff. I'm super Type A. I'm really driven. I do a whole bunch of stuff. Um, I can have a bunch of the hard conversations. Like sometimes I get upset or driven or something. Um, he can balance really well. Uh, we pulled Gene in.

**Charity:** [00:14:03] I love Gene, right?

**Nicole:** He's super Um, like open and creative and like, which is great. And I tend to be, um, really focused. I can be like that open creative person. And toward the end of the project, I pull us back in and sometimes Jean will open it back up again. I'm like, I'm going to strangle you. I can't deal right now.

**Charity:** Context switching between the opening and the ending. But it's really good, right?

**Nicole:** Jean will pull that like diversionary creative stuff back in when I'm like, I can't deal with this right now. But it's that really good balance and mix. And sometimes when I'm going crazy and Jean's like, yay, excitement, Jez will bring that balance back in that we really need.

**Bridget:** And I definitely—

**Nicole:** it's that balance and mix.

**Bridget:** Yeah, I definitely want to talk about hiring for startups because I know Charity also has a ton of opinions on that. But I want to make sure that for our listeners who don't know enough about your background and Charity's background, Uh, my original question— I know we've so many rabbit holes— my original question, Charity, do you want to give our listeners a quick recap for what's changed?

**Charity:** [00:15:06] What's changed since they last heard from you in July?

**Bridget:** Yeah, yeah, quick, because we unfortunately have, like every other time we do a podcast, we have a hard stop at the top of the hour.

**Charity:** So yeah, um, uh, when we last talked, um, I think that was the first conference, the first time I really emerged from a hole in about 6 months. We were heads down, we were cranking, and honestly, we did not know whether or not what we had was worth doing. You know, we'd been through a really rough co-founder breakup, you know, where one of the 3, like, it didn't work out. Like, it often implodes in other ways. And it's just like any other breakup. It's really hard. And Christine and I were heads down, just like trying everything. And around the time that I came out to Minneapolis, Minnesota, It was about the time I was like, we were like, yeah, okay, we have something. This is real. It's a baby. It's young. But it's time to start pushing that infant out of the nest. They're gonna fall and like break things. But like, you have to get it in front of people really, really, really early. Honestly, like the first 2 months that you were showing your product to people, you should be humiliated. You should be embarrassed. You should have to circle around to them 6 months later, or else you've waited too long. And that's very much the phase we were in.

**Nicole:** [00:16:24] And at this point now, we have our first paying customers.

**Charity:** And we're like starting to go through the backlog of like 800 or so signups that we got just from my Twitter feed over the course of 6 months and like convert what we can and then start to really zero in on, you know, what, how could we really change the world?

**Bridget:** Nice. I love it.

**Nicole:** And I love that story. That's, that's how you build product, right? You have to push it out and find someone who wants it. Humiliating.

**Charity:** And you have to find a customer who will pay. Showing your worst self to the world. You just have to push through it and you show it to enough people, you start to see what's resonating. And then you pick up on those things. And you combine that with your original sparks, the things that made you kind of fall in love or wonder if there was something there. Like, you can't lose those sparkly bits, but you have to combine them with— and you have to shut up and listen to people. This is what I find hard. Be quiet and listen to them tell you— Bridget, when you were giving the description, when you were pitching Honeycomb to other people, that was painful and hard for me. But it was one of the most valuable moments that I think I've had in the last few months, listening to you, having not spent I spent a lot of time listening, listening to other people pitch my product.

**Nicole:** [00:17:35] Yes. Is incredible. Building out my channel partner program, because that's the only way I can scale, cuz I'm 2 or 3 people, let's be real, has been fascinating and insightful and unbelievable. That's the thing. Find someone else, find someone else to pitch your product. I still can't remember what a channel is, but let's move on.

**Charity:** Bridget, what's next?

**Nicole:** Okay.

**Bridget:** So, oh, there's a lot of directions we can go from this, but I feel like before we even jump into all of these details, maybe just a sentence or two from each of you as to why. Because like you said, not every person is going to think that they're startup people or even know when it's right for them to do a startup. But for you, like both of you in this case at this moment, why this instead of taking one of the zillion jobs that knock down your inbox every day?

**Nicole:** It hunted me down. I, I don't know. I found something I really loved. And, like, I think it was something else that found me, right? So, we've been doing the State of DevOps report for years. I'm sitting on all this data. And so many times, people kept coming up to me and saying, you know, I wish there was some way I could compare myself to the rest of the industry. I wish there was some way I could measure myself against all this stuff, right? And there are some things that you can measure using system and log data. And I used to be that person, right? I used to do hardware performance, I used to do system performance, I used to do all of this stuff. There are some things that you can't, you just cannot measure that way, because the system can only tell you what the system can see. There are some things that only people can see and the system cannot. And so, these people would say, I wish there was a way I could, like, measure this and compare myself, and then understand how to prioritize where to start. And we're like, so, like, I've got the thing, I've got the data. If only, if only there were a way to build it. Oh wait, right, I know a guy.

**Charity:** [00:19:29] So the mother was asking for you basically, and you just had to tap into it and deliver what they were asking for, right?

**Nicole:** We just had to, we had to do it. That's pretty rare.

**Charity:** That's really rare and valuable.

**Nicole:** It's super rare. And it like, seriously, people are like, you know, like, don't ask Nicole this question because her face will light up and she'll get super like You've— y'all who are listening or watching, you've been warned. If you ask me, I will start.

**Charity:** So that's—

**Bridget:** I mean, so that right there, it says why you should— why you're doing this is because you can't not. It's too exciting for you. And like, this is a very exciting place for you to be working on stuff that you care about.

**Nicole:** And I'm incredibly fortunate, right? Like, it's—

**Charity:** yeah, yeah, it's a thing. So, Simon, how about you? I mean, Like, I was much more of a— I've always been very pragmatic. And I've always said at some point in my life, I was going to do a startup because it seems like a missed opportunity to be in Silicon Valley and not do it. And it always just pisses me off that all these dudes who I think are mostly incompetent are the only ones who start companies. I'm like, well, I'm like sort of incompetent too. I'm at least this good. Like, I should be able to do this. I love you. I'm just gonna say really quickly, you know, this is so funny.

**Nicole:** [00:20:42] I swore I swore up and down I would never do a startup as long as I lived.

**Charity:** Well, I didn't, but I never had any interest in it either. I'm an implementer. I am not an ideas person. I am an executor, executionist. But I do, I take great joy in building things, not in like, what if we, you know, in fact, I've always kind of despised those people in many ways. And I'm gonna say this, this is the first time I've ever really confessed this. I've been noodling with writing a post about it. Honestly, there are a lot of reasons. I can talk about all the great reasons, but the core truth of it is I was disappointed in the roles that I was being offered coming out of Facebook, coming off of like an incredibly successful startup something where I've been like, roles of like—

**Nicole:** I'm going to interrupt you. Go back and take out that quote unquote. Let's be real. Well, I'm just like, that was a legit successful startup. That was a mad acquisition at startup.

**Charity:** No, I mean, it could be better. It could be worse. We did a good job.

**Bridget:** [00:21:47] But I'm pretty sure, I'm pretty sure bought by Facebook is like, let's end for most startups, even whatever happens after that. That is a lot of startups.

**Charity:** But like, I came out of that and I was like, I am qualified to do XYZ things. I just am. And I was looking for people to give me a role that would challenge me, that would help me level up. Like, I wanted to be more badass than I previously had been. And I was disappointed by how many people were like, Oh yeah, you're awesome. We want you to join as an IC and prove yourself. We want you to like, oh, we never hire managers. We might be willing to hire you as a manager of like 3 people, you know, while you prove yourself. And I'm just like, what the fuck do you think I've just been doing? I've been proving myself, you know. I am not going to stand here and write out something on a whiteboard for you. Like, this just has nothing to do with what I'm bringing to your organization. You know, I had one of those interviews. I had like, grossly generalizing, like, just let me get through this a little bit. And there are some people that I talked to that had interesting things where the product didn't resonate, or there, you know, there are a couple of interesting IC jobs that people were willing to offer me. But, and I honestly, I'm not— I wasn't even thinking that I wanted to keep climbing the management track, you know. I think I wanted to switch back to IC, but I was so infuriated and insulted that people were not offering me the jobs I fucking deserved that I was like, I'm gonna go get myself a title. So here's the other thing. Titles matter, and I spent most of my career saying that they didn't. I, and I have had managers in my life say to me, you already have the power, the authority, the respect. Why do you need the title? And I would nod and agree. Then I went out and had this experience where I had this entire background, and people were like, well, but you don't have the title. If you had director title, we could see giving you this, but we just don't know how we justify this to our board. We just don't know how we blah blah blah. And I'm like, Got it. Titles matter.

**Bridget:** [00:23:45] So I decided to go get myself a title and to do really awesome stuff.

**Charity:** Oh God. Yeah. The idea is amazing. This is the future. It's going to exist in the world. My co-founder is the most amazing creature in the world. Like, there are so many things, but like, when I'm thinking back and being completely honest with myself and what it was that tipped me over into that, it was that. It was rage.

**Bridget:** Hey, I think rage is a very powerful motivating factor. And I think it also gives us It gives us fire.

**Charity:** Yeah.

**Nicole:** I mean, I feel like, and you're doing super interesting work that's making a difference. I mean, love that.

**Charity:** Yes, totally. We are going to change the world.

**Bridget:** And that's like, I feel like that maybe, this is the thing that maybe I have not, if we're having true confessions on Arrested DevOps Time, I don't think I've admitted or articulated before that I present a very sparkly, happy persona to the world, because I generally am a pretty sparkly, happy person. But very much like the Hulk, I'm also angry all the time. And I think that does fuel me. So because hashtag woman on internet, who here has— it's hard not to be angry all the time.

**Charity:** [00:24:58] You know, we spend our— like, you heard me coming out super humble. Oh, you could call it a successful whatever. You know, I actually— I like that in other people. So I try to model it myself. You know, I don't like people who go out strutting and they're all this all the time. You know, have a little bit of— here's the thing. I was not a dramatically better engineer or manager after Parsons and Facebook than I was before. I had a bit more experience, but I wasn't— but the way that the world saw me was night and day. And so I try and remind myself of this too. The whole pedigree thing is so, so big in Silicon Valley. And what you're actually saying when you have someone from MIT or Stanford or whatever, you're saying they have like a 53% chance of being amazing versus a 47% chance if they're not. It's really infuriating to me that you're seen as having proved yourself, you know, when—

**Bridget:** Yeah, and this actually, I know we have a few topics I want to hit, but this really jumps me right to one that I do want to talk about a little because I know you've given some good talks about this, Charity, and I know you have insight into this too, Nicole, which is this stuff around title and around past experience, especially around maybe past experience and what they've been exposed to, does affect hiring for startups. In terms of, and I know that both of you have very small teams right now, but since you're going to rule the world, I mean, you already are, like you're going to hire people at some point. How do you hire for a startup and how is that different than in an established organization?

**Charity:** [00:26:31] Do you want to go first?

**Nicole:** I'll let, I'll let you start this time.

**Charity:** Sure. Okay. So it's different because your risk factors are different. You know, at a big company, you're spreading your risk. Among many hires and you have a much larger budget. You know, when it's a startup, this may be the only 1 or 2 or 3 people that you get. You know, it's very high risk, very high reward. They're going to shape— I think I can honestly say that every single person, we're up to almost 7 or 8, maybe every single person we've hired has materially shaped what the product will end up being. You know, I'm not exaggerating at all. Like, it would be a different product if we had hired, you know, a different number 3, number 4, number 5, number 6. And that's, that's shaping, that's tapering off a bit, you know, but you're building a family really at this stage. You're building a family and you have to be, you have to trust in the other person's passion. This is why I think that incentives in Silicon Valley are so misaligned. You know, this whole thing where founders get, you know, 80% of the stock, you know, and then, oh, I'm gonna give you 2% because you're my best engineer. You know, I mean, come on. That is not reasonable. It's not reasonable to ask someone to— I mean, yes, the founders, Christine and I are up, you know, until crazy hours. No, we're not. I swear to God, we're not. We're getting to bed on time. And if my significant other asks, you can tell her that.

**Bridget:** [00:28:01] I don't believe you because I see you tweeting when I wake up in Minneapolis and it's 5 AM.

**Charity:** So it's got to be 3 AM It is your baby, you know, but you're building a family of people who have to be passionate about what you're passionate about. And so, like, technical skills, they can be taught, they can be learned, they can be trained. But, like, caring about what you care about is hard to tease out, and it is more important than anything. You know, I mean, I think that this is why I don't think we've ever hired anyone, just, like, interviewed and hired. Like, that feels very alien and strange to me in a way that if you have a pipeline going into your large company, you can't do it any other way. You can't actually let yourself care about humans on the same level, you know, because you have to have the filter and you just have to resign yourself to the fact that the filter only makes sense sometimes and sometimes it doesn't. And you can just try to tune it as time goes on. And if you try to get too obsessed with being right, you're gonna drive yourself nuts, right? So you have a filter and you should try not to One of the things that always bugged me at Facebook, right now here we are in true confessions time, is they would be like, you know, lowering the bar, lowering— we can't lower the bar. Meanwhile, they have 5 women in production engineering out of 350. And they would openly confess that they could find no correlation between the questions that they asked, the scores, the results that people got, and how successful they were. So the bar doesn't make any sense, but we're using it to beat people up. Like, cool, good story, bro. Cool user story, bro. User story, bro. Right. But like, I think that you have to be somewhat realistic about the fact that you do need a filter. It should make sense as much as it can, but it's not going to make sense. Like, ultimately, versus it is like building a family. You're, you're bringing a significant other into your group of sister wives. You're gonna be spending more time with this person in a small space than you are with your actual significant other. You should like them. Like when it— when we were hiring our first salesperson, I told him this, this is no secret. We can't— we have many, we had a lot of— we were so lucky, we had some great candidates. And in the end, like it kind of comes down to who do I want to sit next to 8 to 10 hours a day? You know, it's like my gut tells me that at a base level, we're gonna get along.

**Bridget:** [00:30:28] And I think that's a really good point. And I want to— I definitely want to hear from Nicole on this too, but I can't resist just Just chiming in on that and saying, being able to feel like you can communicate with and get along with a person, super important. And I think having a diverse team of people doing the interviewing helps you avoid having unconscious bias prevent you from hiring great people because the, like, 6 dude bros who interviewed them didn't think that they would have a beer with them.

**Charity:** Great teams can fight well. Seriously, just like great couples. It's not about how well you love and make things happy. It is how well you can get along and resolve your conflicts. So try to put yourselves in a situation where you can fight.

**Nicole:** That times a million, right?

**Bridget:** Hiring at the paintball facility. Gotcha.

**Nicole:** No, it's— that's— it's how well you can resolve conflict. I mean, there— what was it? There was a time earlier this week, there was something that, like, I had a pretty strong disagreement with what was going on, and I was like, hey, Jess, like, we need Can we have a conversation? It's like, we need to talk about a thing. Like, and there was something else with another one of our co-founders, like, we need to be doing a thing. And of course, like, it's at CEO level, like, and Charity, I'm guessing you're gonna, like, at least smile and nod a little bit, if not fully agree. The final decision, or like many of the hard conversations and the hard truths come down to us, right? We need to be facilitating or moderating many of these conversations and having many of these difficult conversations. And so we have to manage that. And you have to be able to do that.

**Charity:** [00:32:07] So I really am a fan of bringing as many, like, the whole, like, at a place where you're like sub-10 employees, I find the division between execs and employees to be mostly artificial and harmful. Like, at the end of the day, it's not a democracy. But the more that you can operate as though everyone has a voice, the more you're justifying the sacrifice of their lives that they're kind of, that they're giving up. The transparency. At this stage, like, I'm completely transparent with everyone here. They can see the cap tables. You know, the only things that I filter is the things that I feel will distract them or make them feel unmoored. You know, it's on me to a certain extent to just like abstract them away from— Like, if you want to see it, you can see it. But I'm swinging back and forth like this every day. Like, fundamental things are being rethought every single day, you know, and that's just dizzying and kind of disorienting if you aren't careful.

**Nicole:** Exactly. Like, I tell them that, like, if you want to see it, I will, I will show you. But for the most part, I try to, like, just shield you and hide you from the chaos.

**Charity:** [00:33:09] Yeah, right.

**Nicole:** I manage the majority of it.

**Charity:** When you're looking for co-founders, especially though, like, I want to call out a thing that has been really powerful for me in all of my significant relationships, both personal and professional, which is that Christine and I never freak out at the same time. It's like a law of nature. Like, if one of us starts freaking out and the other one can't control it, we just, like, snap into being, like, perfect calm. We got it, you know? And like for the first 6 months, it was mostly me that was freaking out because I did not expect to be CEO. I did not want to be CEO. This was really, it was really miserable and unhappy for me. And Christine just like totally like carried us. And then she got to a point where she's just getting like, fuck, she couldn't carry us anymore. And I just immediately stepped up. I'm like, cool, I got it, you know? And we became aware that we're like, this works for us, you know? And sometimes we'll joke, but it's serious. It's like, whose turn is it? Like whose turn is it to freak out? And who's going to be the very calm, very patient person in this upcoming conversation. Nice.

**Bridget:** And that kind of brings us to maybe a topic that we don't want to spend too much time on, but I do want to mention, which is not all startups are created equal. And so when you're talking about cap tables or you're talking about exactly what the funding looks like, like obviously startups versus established orgs, we know that there's a major difference there. But I know also the two of you are in fairly different models of startups. Charity, what is, what is the, you know, so don't need to have your, don't need to have your balance sheet.

**Charity:** [00:34:37] Yeah, totally. Don't need to have your— Another reason, like there are always many reasons why a person chooses to do a thing. One of the reasons that I decided to do the startup when I did was, you know, because Christine was moving back from the East Coast, but also because at a very pragmatic level, I was like, I am never going to be more fundable than I am right now coming out of Facebook and successful startup.

**Bridget:** And yes, the pedigree thing you were mentioning.

**Charity:** Exactly. I'm like, well, now I have it. I may as well milk it. It. You know, I was a little bit like resentful of it, a little bit begrudging of it, but like, yeah, I'm gonna take it. You know, that's stupid. And there were people literally just chasing us being like, oh, we hear you're doing something new. Would you like some money? You know, so we took $2 million because you take $2 million if somebody offers it to you, you know. But I would say that we are extremely fiscally conservative. We got this money on extremely good terms. And We are racing to profitability. You know, I— when people celebrate raising money, or people like, oh look, they raised $100 million, like, I think that they're seeing a good thing and I'm seeing failure. I'm seeing this team failed to execute on their vision with what they have now. And maybe that's an investment in your future, the same way that like you take out a $50,000 loan when you want to go to college because it's an investment in your future. But it is not a thing to inherently celebrate, for Christ's sake. Like, you know, I feel like— and I feel like this leads to this very bubblicious way of looking at the world, when honestly, most great products are not built in a bubble. Like, I have this friend who's building a company, and his biggest fear is like the company right next to him is doing exactly the same thing, who's doing one thing faster than him. You know, he's like, well, I have to raise $50 million to get it. And I'm like, you know what? This does not smell like a sustainable model. To me.

**Bridget:** [00:36:27] Yeah. So you decided to raise a little bit of money, and then as you go, you're gonna just decide what the right amount for you is.

**Charity:** We're raising a little bit more because we, we're raising the amount that we think will take us comfortably to break-even profitability. And like, we'll probably raise another round then, but we're in a way stronger position for getting whatever terms we need because we can walk away, you know?

**Bridget:** And that's, that's a good point. It's like, I think sometimes when people hear about such and such startup raised all this money The part that maybe doesn't get all the press is the dot dot dot, and they gave away some amount of control of their company.

**Charity:** Yeah, and now they own three percent. You know, they used to own ninety percent. Yes. Now they own three percent.

**Bridget:** Or such and such a company raised all this money.

**Charity:** Dot dot dot.

**Bridget:** Perhaps they raised even more. Perhaps they raised even more. Perhaps they're sitting on a huge war chest. I may be thinking of some Valley companies in particular. They may be sitting on a huge war chest, and there's a lot of inflated expectations out there, and there's a lot of VCs who would like. Like some return on their investment.

**Charity:** [00:37:28] A lot of them are like, I'm gonna—

**Nicole:** I've—

**Charity:** I'm getting all this money because it's a thing to do. Now I'm gonna figure out what to do with it. Now I'm gonna figure out the next thing. And I'm just like, that is so ass backwards.

**Bridget:** Or like, maybe you suddenly get into a position where you suddenly have to start retrenching.

**Charity:** And yeah, that's not fun.

**Bridget:** They took too much money and now they're in kind of a bad position.

**Charity:** So I think—

**Nicole:** and now, yeah, and now it's super hard to have an exit event, or now it's super hard to get acquired, or now you're at the whim of board that's telling you to do stuff.

**Charity:** So at least 9 out of 10 of our listeners are not founders. There are people who are either thinking about doing this, or they're employed, or they're thinking about being employed. So I think that maybe the best thing we can do with the rest of our time is maybe talk about what should people be asking? What questions should you be asking when you're thinking about taking a job? And what are good or bad answers? Like, how do you tease out this? It, it It amazes me every time I realize that most, most kids, when they're asking about comp, they don't even know to ask about like how many shares are outstanding.

**Bridget:** [00:38:32] And before, before we move to that though, I do want to make sure we got a comparison of a few small targeted rounds while you're building your products so that you don't just like take a huge amount of money and then shrug. And then I want to compare and contrast that with what Nicole sees as the approach that's working for them right now.

**Nicole:** Right. So at Dora, we're actually— we're currently totally revenue funded. We have no venture money. We have no investors. Now, we may decide to change that approach in the future. Right. But for now, we're taking— we just happen to have a different approach.

**Charity:** That is the best way to do it if you can.

**Nicole:** If we can. Right. But that also means that we have pretty limited growth. Right? We have pretty limited, um, options. We, uh, it can limit our growth, right? That means that right now it's like me and Jess.

**Charity:** Well, it means you can't do—

**Nicole:** I don't have, I don't have sales staff. We have— so you asked about hiring. I have a lot of external, uh, contractors, right? So I have someone that does my accounting, I have someone that does my design, I have someone that does my copy edit.

**Charity:** [00:39:37] I have like—

**Nicole:** that's how I have managed things. Yep. Right now I'm having some scaling challenges because that too. Yeah, right. Like, I'm trying to figure out how to manage. I'm working a ton right now because I'm trying to figure out how to manage dealing with the business and scaling and sales and partnerships. Totally. And do all of like the science and the book and the—

**Charity:** totally. That's how I have to do this and my work. And yeah, yeah.

**Bridget:** While we're talking about partnerships, I should point out we were fortunate enough to have Nicole come speak at the Pivotal conference at SpringOne Platform last year. And like the DORA stuff, you know, to our customers is obviously very interesting. So that's an area where having, again, those contacts in the industry with people working at companies that it's in your company's mutual interest to work with each other on stuff, that's huge. We're excited that Honeycomb has decided to be an ISV, you know, partner with Pivotal. Yeah, so excited. And like, so the idea that somebody can, um, so yeah, our ISV and partnerships program is the sort of thing— I'm not saying every startup out there has to work with Pivotal, I'm just saying that that's the sort of thing where if you want to not necessarily have to hire people to do certain things that aren't right for your startup, you can work with other full-time engineers way too quickly, I think, when you need so much flexibility.

**Charity:** [00:41:05] You know, as a startup, like, think about how many times you've just completely changed your mind, like, a week or two after you thought something was the best idea in the world. You know, you need to have a small group of people who are generalists, who are okay with that, who are okay with spanning, like, multiple disciplines. I've been doing sales and marketing and infrastructure and network engineering and databases for the past year. How about you? You know, it's like, you have to be super comfortable with that.

**Nicole:** Yep, I'm sales and marketing and BD.

**Charity:** You pay someone hourly. And you do not hire someone into a new role until you've done it enough yourself to internalize what makes someone successful in that role. And you know, you have something for at least 6 months that justifies, you know, hiring someone, or else you should not hire a person. Hiring a person, I'm going to put another thing out there for like, your success level and your worth is not defined by how many people are working for you, or quote unquote under you. Or doing your role. Like, your, your success should be defined how much you can deliver divided by the number of people it takes to make it happen. Like, having a really high number of, like, productivity by a few people is something that we do not know. We don't have the vocabulary to know how to brag about this enough, right?

**Nicole:** [00:42:19] Well, that's the other thing. Oftentimes, the earlier the person is you hire, they're probably not doing one role.

**Charity:** Of course not.

**Nicole:** They're a rover. That person is wearing many hats.

**Charity:** This is why it irritates me too when people will, like, people who have wanted to acquire us or people in the VC community will be like, how many people do you have? Oh, well, we could give you the money if you had like twice as many bodies. And I'm like, you are looking at the wrong fucking thing. Like, I could be, I am in that very enviable position of having been turning away world-class engineers since we, since like the day we signed our papers, like, you know, turning away best engineers in the world, but I'm just like, I cannot I can't justify this yet. I look at people who have companies that are less than a year old who have like 25 people. I'm like, really? Well, okay, sometimes yes, sometimes yes, but not by default, and certainly not for most people.

**Nicole:** Absolutely.

**Charity:** Be smart about it.

**Nicole:** Be as lean as possible.

**Charity:** Yeah.

**Bridget:** And I should mention too, like, I am not a startup founder, but I have taken jobs at a few startups. And as somebody who is evaluating a role and deciding whether or not I want to join a startup, Like, you know, a few years ago, joining Eighth Bridge as, like, the first ops team member, I knew that there would be a lot of AWS. I didn't know going in that I would also figure out how to use the Windows box to program the door lock. I did it, but, like, there's a lot of flexibility that you end up needing to have.

**Charity:** [00:43:43] Like, this is why, like, I feel like people who can operate equally well in startup environments, and I've given entire talks about this, this, so I won't go too much into it. Startup people are not the same people as big company people. Some people love this and they thrive on it. They love having every day being a new set of mysteries and like programming the door lock. Yeah, who knew? You know, and some people get really flustered and really aggravated and annoyed at not being able to get their job done by all of the interruptions. And it's, and it's really, it is risky to hire investors also like, oh, they come from Google, they're going to be amazing. And it's like, is this their their first startup job, you don't know that. That's a different skill set. It's a different skill set entirely, and that's a risk. They may be awesome, but you don't know that yet, and vice versa.

**Bridget:** That's such a good point. So we do obviously, and we always feel like we need more. Yeah, we're always running out of time on these things.

**Charity:** Constraints are good.

**Bridget:** But, um, but I wanted— I want to make sure— there's so many more topics we could talk about, but I want to make sure that we get from before we kind of start talking about where people can find you on the internet and all that sort of stuff.

**Charity:** [00:44:47] And you know what, love to hear from both of you. We could do a reprise of this. We could do this with, uh, with so many things. We need a part 2 though. I would love to ask you questions, you know. I would love to too. So, well, we will talk about your questions.

**Bridget:** We will do more with this. But I would love to have just both of you, uh, give to those people who are either thinking about maybe taking a job at a startup, thinking about maybe founding one, but often it's not founding it themselves, it's just The startup is at some sort of stage where it's not Facebook, it's not Google, and it's, you know, there is some sort of startupiness going on here. Helping people with your best advice to people who are thinking about either doing or joining.

**Charity:** So I think that my best advice is, is this: the earlier the startup, the younger it is, the more ownership comes with it. And when you think through the ramifications of this, it is both good and bad. And you want to look for— if you're not founding yet, you need to look for founders who are very much aligned with where you want to be. I am someone who I require a great deal of ownership. And so, when I'm working with founders who are opaque, who have like a them and us, you know, the founders and the employees, I don't like that. It's a constant friction. I need to be— I don't need to be in charge of everything that I do. But, you know, I need to know that the amount I'm putting in is going to be reciprocated. This is why I'm not a great big company person, because I need to feel happy and fulfilled. I think I need a certain amount of ownership, which is why I could be, you know, upper management maybe, but like, this is my niche, right? And now I feel like I'm so much better equipped. I'm not gonna be a repeat startup founder, most likely. This is probably my one and only, but I will probably do startups again. And now I know what questions to ask for co-ops, I know how to see how they're valuing me. I know how to figure out if we are aligned in terms of how they see me. Like, how you see your management and how they see you should be super in sync, or it's just going to be a constant source of friction that you may not even be able to identify. So, and I would say that if you do not have a deep bench of experience, you have friends probably who do, who you can take out for drinks and just like ask them what questions you should ask. But like people should be asking way more questions than they are. It's not just about the salary and the options. There's like, this is a relationship that you're getting into and it's going to be very intimate and maybe a trial period, if at all possible for both your sakes, you know, look for ways to enrich that relationship before you sign on the dotted line.

**Bridget:** [00:47:30] Absolutely. I love that. That's so great. All right, Nicole, what kind of advice do you have?

**Nicole:** For me, I think it's know who you are, right? Like have a pretty good understanding, like sort of, I guess sort of what Charity said, know who you are, know what it is, what you bring and know it's important to you.

**Bridget:** You.

**Nicole:** So, for me, I'm actually kind of a big, big company girl. So, I was at IBM for a while. I didn't think I'd be at IBM, but I dig big companies. The startup land is interesting to me. Titles are important to me. Signifiers of what I bring to the table are important to me. Other things that are important to me are the ability to contribute in meaningful ways and have transparency. So, there's a joke that— so, one of my nicknames is Crusher of Dreams. Yes. I need to be able to point out, not that I need to, it just happens. I'm pretty good at pointing out things that aren't going to work, things that are going to be failures. I also notice patterns. So, like, I need to be able to be high enough up in an organization so that I can point out, like, when your system's gonna break, when shit is a really bad idea. And I don't do it in, like, malicious ways, but, like, like, so that's a shit idea. I'm sorry you sunk $10 million into it. Let me help you point out— I'm really good at strategy to help you point out like the stuff that's going to be really, really good and meaningful. If that's not— and, and like, I can't stop it. I'm sorry, that filter is going to drop from the right, right in front of my mouth, and the words are going to flow. If that's not going to work in that organization, I know myself well enough to know that this is, this is not going to be a good match. This is not going to be a good fit.

**Charity:** [00:49:07] I think that that's regardless of the If you're mature and you've been through enough of these jobs to have the spectrum of experience, I would just want to put a little asterisk. If you're in your first 10 years even of experience, push yourself and your boundaries. Try different things intentionally. I think that most people go to their comfortable place and that is like, you should push yourself to your uncomfortable place. And that means trying the big company, the small company, the in-between, and see until you have, you know, gotten that spectrum.

**Nicole:** Oh, oh yeah. Try all the stuff. Try all the things, right?

**Charity:** Running towards being uncomfortable is, I think, generally good life advice.

**Nicole:** Yes. And I think some of the best advice I heard early on in my career is try for that.

**Charity:** You maybe sometimes run to the place where you're like, okay, you know more than I do.

**Nicole:** Yes. And, and always give it 6 months, right? Go ahead and push for that place where you're uncomfortable and give it about—

**Charity:** give it at least a year. Don't give it up.

**Nicole:** No, but give it about 6 months, right? And then if you're still really, really uncomfortable, go ahead and feel free to back out. But if someone gives you that opportunity and you're like, there's no way I could do that, give it 6 months.

**Charity:** [00:50:14] I think a big part of growing up is learning to identify the good uncomfortable from the bad uncomfortable. You know, I mean, I did that 2 startups in a row where I stayed for a year and a day. I shouldn't have, but now I know. Now I know what that feeling looks like, you know, and I would cut that short in a week. But I didn't.

**Nicole:** I thought that I owed it to them to stick it out for a year.

**Bridget:** Exactly. And I know we are almost out of time, so I just want to make sure that we let our listeners hear where they can catch up with you at conferences and on the internet and that sort of thing.

**Charity:** Yeah, I'm charity@honeycomb.io. And lately, I have been giving advice, women especially, but limited time offer. People write in with, you know, their career aspirations and hopes and dreams, and if they're trying to get a raise or whatever, I'll read it. I'll give you some advice. For the first 10, let's say. But I'm at honeycomb.io. We have a blog that's awesome, where we're trying to help people learn how to do observability, how to instrument their code, how to make awesome systems where you can, you know, ask any question whatsoever and know what's wrong or what's good immediately. I'm also @mipsytipsy on Twitter.

**Bridget:** [00:51:24] Awesome.

**Charity:** Okay.

**Bridget:** And where would people find you if they want to, Nicole?

**Nicole:** So, Dora is at devops.com. I'm also at nicolefb.com, and I'm speaking at several conferences. I'm around, you can always catch me @nicolefb. And then Dora has an ROI paper that is coming out in the next week or two. Also, the State of DevOps report releases June 7th, and I'm writing a book with Jess and Gene about all of the amazing things, surprises, and things that didn't hit the reports. That's coming out summer, fall.

**Bridget:** Nice. And so, that's for the— in terms of the checkout stuff. What kind of checkout stuff should we have you do, Charity?

**Charity:** I forgot to mention the book, Database Reliability Engineering, is coming out in the next few months. Finally. It's really fun. It's Lane who's been doing, like, the hero's work on this. So, interesting stuff around the internet. This week, I got to see a demo by GoTurbine, by @mccv on Twitter, Mark McBride. Which is a piece of software that I've written at least 3 times, a splitter, you know, that returns good results to the customer and logs the differences. So, if you're doing a tricky upgrade or something, I was pretty impressed by that. Yeah. And I recently started listening to this Go podcast that I was just on called—

**Bridget:** [00:52:43] oh, man.

**Charity:** You do your thing.

**Bridget:** Is that Boilient?

**Charity:** Boyanche is also amazing. They're another awesome option for this. I'm gonna look up the name of the Go podcast while you say your thing, Nicole.

**Bridget:** Well, she told us most of her stuff already, so I'll just add the one that I wanted to tell people about, which is the Systems We Love conference is coming to Minneapolis. This is Systems We Love on Twitter, and there's a website and whatnot. But the first one was in SF in December, and the fine folks from Joyent are bringing it to Minneapolis. On March 16th. So I'm really excited about that one. Um, nice.

**Charity:** The podcast called Go Time. Yeah, it's great.

**Bridget:** But yeah, so I'm excited about Systems We Love in Minneapolis, and we're going to be announcing our program shortly.

**Charity:** Hey, so exciting.

**Bridget:** And, uh, thank you both so much. And let me just, let me just add that, uh, upcoming conferences, um, both Charity and Nicole are going to be at Velocity Santa Clara And there's a discount code, ADO2017, for 20% off for our listeners. And Charity will not be there, but Nicole will be at GOTO Chicago, where we're going to do an Arrested DevOps Live. So, the GOTO Chicago discount code is just ArrestedDevOps. So, that's May 1st and 2nd. Charity, I wish you could be there, but Nicole is going to be doing a talk and then also is going to be on a live episode of the podcast. Yes, it's going to be really—

**Nicole:** [00:54:12] come say hi, come eat all the pizza.

**Bridget:** That's going to be fun too. And if you have an upcoming conference you'd like to see promoted on ADO, you can fill out the handy form at arresteddevops.com/conf. So, um, I know we have a hard stop here for Nicole, so I want to say goodbye to Charity and Nicole.

**Charity:** Thank you so much for having me. This is super fun, and I would love to do a version where I, I'm so interested in answering people's questions because I feel this is a really opaque area of our industry. And now that I know a little bit, I'm gonna help the world. Nice.

**Bridget:** All right. And yeah, thank you again so much, Nicole, for being on the podcast again.

**Nicole:** Oh, thank you for having me. And thanks again, Charity, for all your advice.

**Charity:** Oh, please, anytime.

**Bridget:** Yeah, so head over to arresteddevops.com/startups for this episode's show notes.

**Charity:** Notes.

**Bridget:** And the site also has a newsletter, merchandise, Patreon. I don't know how to pronounce that, but whatever. All the Arrested DevOps stuff you could ever want. You can visit arresteddevops.com/itunes and leave us a review in the iTunes store if you want to help other people find the podcast. And, uh, yeah, uh, I'm Bridget at Bridget Kromhout. We're Arrested DevOps. And remember, there's always DevOps in the banana stand.

**Charity:** [00:55:27] Banana stand.

**Nicole:** Banana Steve.
