**Matty:** [00:00:07] Welcome to Arrested DevOps, episode 32, Starting a New DevOps Job. I'm your co-host, Matt Stratton, @MattStratton on Twitter.

**Trevor:** I'm your co-host, Trevor Hess, @TrevorGHess on Twitter.

**Bridget:** I'm your co-host, Bridget Kromhout, @bridgetkromhout on Twitter.

**Julian:** And I'm your guest host, Julian Dunn, @Julian_Dunn on Twitter.

**Matty:** We have a surprise guest host.

**Bridget:** Yay!

**Matty:** So super secret. So, uh, Arrested DevOps is brought to you by 10th Magnitude, a cloud services company that figures if you're listening to this podcast, you're pretty cool. Also, if you're about half the people recording this podcast right now, you happen to be sitting in 10th Magnitude's offices. You can find out about joining their cloud services team, however, at arresteddevops.com/10thmagnitude.

**Trevor:** This episode is also sponsored by PagerDuty. PagerDuty eliminates the noise, chaos, and manual processes across the entire incident lifecycle to decrease resolution time. PagerDuty is trusted by companies like Etsy, Nike, and GitHub. To sign up for a free 14-day trial, visit arresteddevops.com/pagerduty.

**Matty:** [00:01:13] This podcast is brought to you by Datadog, a monitoring service for scaling cloud infrastructures that bridges together data from servers, databases, apps, and other tools. Datadog provides dev and ops teams with insights from their cloud environments that keep applications running smoothly. Datadog is available for a 14-day free trial at arresteddevops.com/datadog32, and they are hiring.

**Bridget:** So we have 2 great guests joining us today. First, we have Katherine Daniels of Etsy. Katherine, care to introduce yourself?

**Ryn:** Hi, I'm Katherine Daniels. I'm a web operations engineer at Etsy, and you might know me from the Twitters as BeerOps.

**Trevor:** We're also joined by Jake Champlin of Minted. Jake, you have an interesting journey into DevOps. How did you get here? And thank you for being younger than me.

**Bridget:** Yeah, yeah.

**Jake:** So, I'm Jake Champlin. I'm @greibernaut on Twitter, and I'm an operations engineer from Minted.

**Matty:** Awesome. So, I wanted to kind of start— we're looking at today's episode as being— this is like VH1 Storytellers, ADO style, and we want to hear the story. The stories that Jake and Kathryn have to tell us about their experiences joining a new organization that embraces a lot of these principles of which we call DevOps. I've thought, you know, anytime you start a new job, it's exciting, it's a little scary, it's potentially frustrating. We go through these emotions. Actually, I feel like it's almost always like super exciting because hopefully you want to be there. But I'd like to know, to you, how— like, I'd like to talk about how that might be different going into a role like this. And Catherine, if we could kind of— so you've been at Etsy for a little while now, right?

**Ryn:** [00:03:04] Yeah, 6 months.

**Matty:** Okay. And would you say— and I'm not trying to set this up for something— but you came from an organization that I think was Kind of DevOps-y, you know? Yes, no, maybe?

**Ryn:** Yeah, kind of.

**Trevor:** Okay.

**Matty:** So, but you kind of, in some ways, one could see going to a place like Etsy, it's the gold standard. So I'd like to know, like, how, first of all, what were your predictions or kind of your feels before, like what you thought it was going to be like, and then how that felt when you got there?

**Ryn:** Oh, let's see if I can remember back that far. It feels like I've been there a lot longer than 6 months. I was definitely really excited to start because I'd read Coda's Craft for years, you know, been following the Etsy people talking at conferences. So I was really, really excited to get to work with those people. I was also definitely feeling a bit impostery because I was surrounded by all these incredibly smart, talented people and I didn't feel like I really belonged there. But, you know, my very first day— everyone knows that DevOps is the internet and the internet is cats. I show up on my first day and my desk is covered in cat pictures. So that, I think, is a pretty interesting look at what it's like doing DevOps at Etsy.

**Matty:** [00:04:26] It's about cats.

**Trevor:** Gotcha.

**Matty:** Secret revealed. Someone on our Etsy episode, someone asked, you know, we asked the question, Al Spa is like, people ask, how can I, how can I make a DevOps transition? He says, I don't know, because I've always been the boss. And I guess the answer is just pictures of cats.

**Ryn:** Yeah, sounds about right.

**Matty:** Okay, well, podcast over. DevOps problem solved. Sorry, Jake. Jake, what about you? Can you tell us a little bit? I think I was trying to remember some of the details of what I consider kind of watching from afar, some of the journey you had last year, I think starting at DevOps Days Pittsburgh, maybe, right? And I remember you blogged about that, but if you could walk our listeners through kind of the journey starting there and how you got to where you are now.

**Jake:** So, I went to a tech conference and got a job.

**Julian:** That's—

**Jake:** no, actually— You guys were all fired.

**Matty:** Before the show, Bridget's like, we got to be careful that we don't ramble on too much or whatever. And Catherine and Jake are taking this to heart. They're like, yep. Went to a show, got a job, bye.

**Jake:** [00:05:36] Well, I saw a tweet by Pete Cheslock that he retweeted. He was like, hey, if you are short on funds and you want to go to a DevOpsDays, we can help out with that. So I wrote a little essay, and apparently Andrew Clay Shafer and Seth Vargo and all of them, they liked it, and so they sponsored me to go to DevOpsDays Pittsburgh. I met Bridget, and then I met my future boss. I had a real fun time there. It was awesome.

**Bridget:** To clarify, I am not his once, future, or otherwise boss. It's Alex Narber.

**Julian:** So, Jake, had you been to a tech conference before? Had you been to other conferences? What did you kind of learn? What was different about the DevOps Days Pittsburgh experience than other things that you've been to in the past?

**Jake:** Oh, man, I have not been to any tech conferences. My first tech conference was DevOps Days Pittsburgh, but it was awesome because I had all these expectations that just got shattered. When I went there and it was awesome.

**Julian:** What kind of expectations?

**Jake:** Well, like I thought that there was going to be like these senior guys who are going to be like, oh, you don't know anything, you're a junior, you know, get out of here. And I actually like got to talk with some pretty important people and they were just— everybody's really friendly and they all just like came up and kind of helped out and that was awesome. And we— even you kind of helped out at our little hackathon.

**Julian:** [00:06:51] That's right, that was that coworking space up above a cafe or whatever. And so how did you end up talking to the folks that you did end up working for at Mitted. How did that process go? What made you decide to join that company?

**Jake:** Actually, Bridget introduced me to Alex. I walked out on the back porch of the cafeteria and we were talking and he was like, hey, I'm hiring, and I said, hey, I'm kind of looking for a job.

**Julian:** What did you like about the company? What they were offering, what you were going to do, and that kind of stuff?

**Jake:** I loved that the culture of the company was awesome. They were female-owned and operated. They had a great culture around them. All the engineers seemed really, really smart and Alex was was very, very smart as well.

**Trevor:** So when you say they had a great culture, what does that mean to you? What kind of elements make up that culture that kind of sold you on their company?

**Jake:** Every time I talked to them, they were really concerned about their product and really motivated to make a really quality product. And they really wanted to reflect that in their infrastructure. And I thought that was really, really cool that they were really customer-driven, customer-focused to create the best product and the best brand for that they could deliver to their customers.

**Bridget:** [00:07:59] That's a really good point. The idea of what you're producing being reflected in how you actually want to do things internally, too. Is that kind of what the inverse of Conway's Law? The idea being that the structure of an organization will be mapped into its internal communications or something along those lines? I'm probably misquoting it. Somebody can jump in there anytime.

**Matty:** It depends. Your application's architecture mirrors your company's structure or your company's culture, right? So if you've got a bunch of people that don't trust each other, they're not going to write good services that have contracts because they don't trust people or things like that. So every time I've tried to say an inverse Conway's Law, it usually turns out to mean that it's actually proving it. It's just that we're used to saying it's negative. But it could totally be possible. It could be a positive as well, right, if you have a— high-value culture that's built on trust, it can heavily influence your product in a positive way.

**Bridget:** [00:09:00] It sounds like Jake's saying that their product is actually influencing the culture as well. The commitment that they have to the product is falling over into the culture.

**Trevor:** Right.

**Jake:** We have some products that we sell on the site that they have a community team that votes on which products get in or not. We vote and say, hey, we want only quality products to be in there, and that's how we kind of feel about our engineers and stuff is that we, hey, we only want quality code to be produced from the company. And that's, I really, really admired that. And that's what I really liked about it.

**Bridget:** So this is someplace that I feel like we have to hear from Catherine because, I mean, code is craft, right? Can you talk to us a little bit about how the way Etsy's product is set up informs or is informed by the engineering, Catherine?

**Ryn:** I think a lot of it has to do with just Etsy's certified B Corporation. So caring about more than just like the bottom line, you know, we want to be transparent, we want to give back to the community, care about the environment. That's reflected in a lot of the stuff that we do, you know, giving back in terms of speaking at conferences, doing the Code as Craft posts, finding different ways to involve like Etsy sellers in the community. And that's one of the things that, you know, really drew me to Etsy before before I worked here is seeing those kinds of values. It was really heartening to see that after I started my career working at a big, huge corporation that was kind of the opposite of that.

**Bridget:** [00:10:31] I think most people probably know what Etsy is. Maybe a few, some of our viewers/listeners don't necessarily know about Minted. Can we get the one-liner from each of you as to what your companies do? Katherine? Yeah, you're a monitoring, you're a monitoring company that also sells clothes, right?

**Ryn:** Aside from that, you know, aside from the monitoring and the conference talking and sending everyone to Velocity, we are the world's largest marketplace for handmade and vintage goods. So you can see this awesome purple yarn, bought it on Etsy.

**Bridget:** And Jake, do you want to give us the quick intro to what Minted is and/or does?

**Jake:** Sure, Minted is a marketplace of independent artists and it's built up by a community of independent artists and it's really cool that independent artists get to put their art on Minted and it offers them a marketplace to sell that, but then also we have contests where the community can vote on which art they think is the best.

**Bridget:** [00:11:31] Interesting, oh, there's more similarity there than I thought. The one thing that I've heard of Minted other than hearing of Minted through Alex and you, is I know a friend of mine got wedding invitations from there.

**Matty:** I also heard that your friend got wedding invitations from there, Bridget. That's all I knew. No, actually, I thought it had something to do with money. Come to Arrested DevOps, where we do extensive research on our guests' background. Actually, we're probably far more likely to do that with people we don't know. You know, it's like, in this case, it's more like, I don't have to go look up Jake and Katherine. We know who they are, you know, whatever. So, lazy podcasters.

**Bridget:** Katherine, I remember talking to you at Velocity last year before you joined Etsy. Can you go into any kind of detail about your decision-making process? You're looking at this potential DevOps gig. How do you decide that such a gig is right for you?

**Ryn:** First of all, Velocity, I spent so much time hanging out with people. I think 20-some Etsy folks there, and they knew Bridget from previous Velocities. I didn't know pretty much anyone aside from Bridget, who was kind enough to share a room with me. That was awesome. But even though they didn't know me, they would talk to me. Nobody talked down to me. Nobody was condescending or exclusive. It was a really great atmosphere there. Also, pink-haired thought leadership. That was fun. I think one thing that really sealed it for me was a couple months later at DevOps Days Minneapolis, Ian, who is one of our engineers, was talking about wanting to put together a kind of internal class on how to be an effective male ally to women in tech. That just spoke to me so much. It meant so much to see a guy taking the initiative and doing these things, actively soliciting feedback from the women that he worked with, the women at this conference. Having been the only woman in engineering at a lot of smaller places and feeling like it was entirely on my shoulders, the opportunity to work at a place where so many other people were also, you know, so driven to care about these sort of things was, was really important to me.

**Bridget:** [00:13:52] That is awesome. I love that. Okay, so I'm gonna have— I'm gonna sit here and have all the feels about that. Yay, Etsy! And also I'm interested in hearing from Jake's point of view in terms of, again, it seems like some of his encounters with and decisions around potential employers also were at conferences. So it would be interesting to hear if he had a similar or different experience.

**Jake:** Oh yeah, it was very much similar. You know, when I went to Pittsburgh, every person that I talked to was like, hey, How are you? What do you do? Not just like, hey, you look like a young kid, you know, why are you here? I think I was even outside of the conference center. I was on the phone with my then girlfriend, now fiancée. I had just hung up the phone and Bridget actually walked up next to me and said, hey, are you hungry? Let's eat dinner with Chef.

**Matty:** As in, let's have Chef buy dinner for us. I know how this goes.

**Ryn:** I think Julian was along for that adventure, weren't you, Julian?

**Julian:** I don't know. Was it sushi related?

**Jake:** No, we went to Fork, I think. Oh yeah. It was some restaurant that was named after a utensil.

**Matty:** [00:14:54] Yeah, of course.

**Julian:** I mean, that's actually— that's like the one tool that Chef doesn't have is a fork.

**Jake:** Yeah, this is true.

**Bridget:** But you have a spork.

**Matty:** Well, actually we don't.

**Jake:** Etsy does.

**Julian:** Etsy has one.

**Matty:** That's John Cowie.

**Bridget:** Okay, John Cowie has Knife Spork.

**Matty:** We have Spork. So Julian and I were talking a little bit before the show, because I thought that I knew where Julian had worked before Chef, and I was wrong. It was he had been consulting there. So then we kind of talked through about thinking about my first DevOps job. In some ways, like, my first DevOps job was for a vendor, and thinking about how that comes in. And what's interesting to me is a lot of the things like, you know, Kathryn was talking about imposter syndrome and things like that. For example, it gives me a lot of the feels because I think about someone who was involved in the chef community and then I go to work and you're just going to have to deal with this, man. I was like, and I'm going to work with Julian Dunn. I was sitting there and there were these people who you knew in the community and you knew mostly from great work they did. I mean, things like I'm reading these insightful things about Julian and we joked when he came by the office today that one of our co— well, My former coworker here at 10th Magnitude is here, who used to joke about the WWJD, the what would Julian Dunn do, you know, when he's trying to solve a certain type of Chef problem. I think it was more what would Julian Dunn say, because he's super snarky. One of the things when you think about how the culture can help with that, like when you've got a good culture, because you're going to walk in and you're going to feel intimidated, right? Either because it's Etsy or it's Chef or it's Microsoft or whatever. The way that people help with that, where if you've got a good culture, is you're going to have people who reach out to you. So I've had that. So there was a— hell, I'll call him out— it was Charles Johnson. Like, so he's someone who works at Chef who is someone that I like totally respect the code and things he does. And he sent me a private message on HipChat in my second month. He's like, I just want to let you know that you're totally crushing it. I'm so excited that you're here. That blew my mind. It went in my little Evernote— like, because of that, I started an Evernote file of like nice things that people say to me.

**Julian:** [00:17:05] And so, Matt, that's actually a great segue into something that I wanted to ask both Jake and Catherine to talk about, which is like, you know, you read about these companies out there like Etsy or Minted or whatever, these DevOps companies, and I think our listeners would probably want to know like what's it like to start at a company like Etsy or Minted? You know, what did your first 60 or 90 days look like? You know, any onboarding experience at a new company can often be a little bit difficult, but I'd just love to know about what that experience is like to onboard at these companies.

**Bridget:** So 60, 90, or even your first day. I mean, Catherine, you were mentioning something about cats. Like, do you want to, do you want to take it away? First day, the first couple of months.

**Ryn:** Yeah. So the backstory with the cats was my last day at my previous job, they decorated my wall with cats and Etsy didn't want to be outdone. So more cats. The first couple days were, you know, kind of orientation, HR, getting all the paperwork filled out, setting up payroll, which was really nice having worked at smaller startups where you're just like, okay, there's not really a lot of process, so could somebody give money to my bank account at some point? That would be nice. It really takes a lot of stress off of the first, you know, starting a new job to have the processes already in place for that. One of the really cool things that Etsy engineers do when they're starting is what we call bootcamping. So people will spend— they'll do between 1 and 3 usually rotations of 1 to 2 weeks, sometimes more, sometimes less, on other teams right at the very beginning. I started and a couple weeks after that I spent a week or 2 doing Hadoop. I'm not on the Hadoop team, but I got to be on the Hadoop team for a couple of weeks. We went to the data center, we racked some new nodes, and I think that's a really cool kind of DevOps-y thing that we do is we get people exposed to other parts of the company and the organization rather than just their direct team.

**Bridget:** [00:19:07] You get people exposed to Java stack traces that they wouldn't have otherwise gotten to experience.

**Matty:** Doesn't it also sometimes extend just even outside of engineering and tech? Tech, and maybe it's not the same thing. I remember hearing, John, I think it was, I think it was Aswath talking about something about in this process someone that was like a marketing person was working in release engineering for a week because of this and asked him like, asked him a question, well, should I release this software? He's like, why are you asking me? I don't know. You have the information, not me. And that's what the story was about. And then I was, I'm just interested, like it seems like there's even that capability that it's not just like, oh, well, instead of instead of working on the front end, you're going to work on the back end for a week.

**Ryn:** Yeah, I think— I don't know for certain what goes on outside of engineering, but I certainly can see that happening. The other cool thing that we do is we have what we call the First Push Program, where non-engineers will do their first push, usually to do something like add their picture to the team About page, which is, you know, a cool way to get them exposed to what our deployment process is So Jake, how about your kind of first day onboarding process?

**Trevor:** [00:20:19] What was— what were some of the— is there anything kind of neat or unique about what you guys were doing at Minted?

**Jake:** So I'm working remote and it's my very first job working remote. I actually started a day early. I signed into chat a day early because I was just— I couldn't wait. But the onboarding process, it was like being just thrown right into the deep end of the pool. Here I am with this new environment, new everything else, and I just get everything thrown at me. And that was awesome. I really liked it because they were just like, hey, here's the state of everything as it is. And it wasn't just like I kept being led on throughout the whole process. It was, you know, imposter syndrome really, really swelled up a lot there, but it was cool.

**Bridget:** I definitely, I think I understand the whole, you're in the deep end of the pool and everything feels new. And like my last couple of jobs I've started were, you know, a pretty significant departure. And then, you know, even still more incremental change from what I had had in the past. And there is, it is a really scary feeling when you realize that you've gone from, you know, being in a place where maybe you weren't doing everything exactly that you wanted, but you at least knew all of the stuff. And then suddenly you're in a completely different, pretty intimidating environment. Like, how do you deal with that, Jake?

**Jake:** [00:21:37] Oh man, I, I've actually come to love it. Like every day I sign into work, I'm not the smartest guy in there by any means. I'm actually one of the, one of the dumbest. And that's awesome because I get to ask cool questions and I get to say, hey, how does this work? Or how does that work? And I get to learn new things every day. Yeah, it's awesome because I work with really smart people and I get to learn really, really cool things. And that's, that's the main thing that I wanted when I was looking for this new job was I wanted to learn as best as I could and I wanted to learn all the quality stuff that, you know, I had— I was missing out on my previous job.

**Trevor:** What are— and this is, this is to both Catherine and to Jake— what are some kind of cultural cues that you guys had when you guys started at your new companies to kind of help facilitate your joining the team and sort of what made your lives easier than perhaps you had at previous places or in general?

**Ryn:** So we have a pretty chat-heavy culture. We use IRC instead of anything fancy like Slack or HipChat or whatever it is that the cool kids are doing these days. And because we have a lot of remote employees, people communicate as remote kind of by default. So instead of going over to each other's desks, even if they're in the same office, people will, you know, talk in the appropriate room in IRC or send an email to the group. So it— you really get exposed to what people are talking about and how they communicate and, you know, what their favorite cat GIFs are, right from the very beginning.

**Trevor:** [00:23:06] Yeah, I mean, that can be very important. I'm going through some processes right now with one of my clients where they have a very heavy culture. They're a global company, but they're very much about talking to each other at their desks and not capturing that conversation. And we introduced HipChat a week ago, and almost immediately we're starting to see that change where everybody's communicating through the chat tool, and it's just been incredible.

**Bridget:** So what do you use for communication at Minted, Jake?

**Jake:** Oh, we just use good old HipsterChat, and I really like it. And, you know, everybody already has that remote kind of culture baked into it. The DevOps team is the only team that's remote aside from QA, but the whole organization as a whole uses HipChat globally as their main source of communication.

**Matty:** I found— so it's interesting, so you say the whole company uses that, because that's one of the things. We're a pretty remotely diverse, geographically diverse company, so very remote culture-friendly, and it kind of is aggravating. I'll be honest, it's aggravating to me when people aren't on HipChat. People don't use HipChat within the organization. And I can understand when I think about who some of the people are because they're the kind of people that would probably get bugged nonstop. But I wonder within the organization, so you're saying, like, do you see that like outside, you know, is it your finance folks, your HR folks, your facility? I don't know, I'm just trying to think about like as far removed from the engineering and technology side, is it Every— because I can see this as being a great leveler as well, right?

**Jake:** [00:24:51] Right. Like, I talk to HR on HipChat all the time because, you know, since I'm remote, I need a way to be able to communicate with them as if I could walk up to their desk. You know, like, I can talk to them about payroll or vacation days or stuff.

**Matty:** Do you feel like it's— like, I will put it this way. I feel like I could just totally hit up the CEO on HipChat and just send him a message and not even care. And again, this is not to say like that our CEO is an intimidating person, because actually the honesty is at this point I probably feel like I could walk up to him and just say whatever, but maybe not. But that's what I'm saying. It's sort of this idea I'm starting to think about. I want to know, especially being new in an organization, does this idea of ChatOps or having chat or having this instant communication that's global to the organization, does that help level those, like, levels of intimidation? Is it because it's easier?

**Trevor:** I don't know.

**Matty:** What do you think? And Kathryn, what do you think too? Because, I mean, you get to work with some pretty cool— but you probably just go talk to anybody anyway, so.

**Ryn:** [00:25:55] Yeah, I mean, I do get to sit, like, 10 feet away from John Allspaw, so that's pretty cool. I've got that going for me.

**Matty:** If you're playing the Arrested DevOps drinking game, that's a drink.

**Julian:** I do want to jump in and ask, you know, what are maybe some of the downsides of a chat-heavy culture? You know, we've sort of talked about that maybe as a sidebar, but, you know, and I do appreciate that it's a very useful tool, and I have some views, but I'd love to know if, you know, if anybody has been in situations where sort of chat has been abused or used in not an optimal way.

**Bridget:** Ooh, I have an example. So it is definitely possible that we've— where I work at DramaFever, we've actually had people find chat to be distracting to them. Or they've been trying to decide if it's distracting for them or for members of their team. And I'm, being remote myself, a huge fan of chat, because otherwise I'm so lonely. But I do appreciate that if you're trying to be heads down and focusing on something, having people buzzing in your ear wanting something all the time is like, sometimes you just have to mute that channel in Slack so that you can concentrate.

**Ryn:** [00:27:08] What I was going to say is that it can be really distracting. And, you know, sometimes you need that, but sometimes you do want to get heads down and work. So, you know, I think it's good to let it be known that if you need to, like, disconnect, turn off notifications, or just sign out entirely for a little while to get stuff done, that that's okay and people aren't gonna hold it against you.

**Trevor:** Yeah, it can be. So, as I said, I just introduced HipChat with this global team, and part of this team is in Paris, and I've, so far I've gotten, it's happened twice where I've gotten, I've forgotten to mute my phone or something at night, and I've gotten @mentioned at 3 in the morning, and it's like, ugh, 'cause I've got that personality where I'm just gonna, I'm going to look, Because I heard it.

**Matty:** We actually won't be able to fall asleep until you find out that it wasn't important.

**Bridget:** Yeah, we actually, we actually kind of make an ops guy out of you.

**Matty:** Yeah, Trevor, sorry, I, I caught myself.

**Bridget:** So I— we actually, at Drama Fever, we, if we want to mention someone but we know they're probably sleeping, we will put spaces in the middle of their name so that it won't actually notify them.

**Ryn:** [00:28:19] Also What I do is I just don't have chat on my phone. I get so much sleep, it's novel.

**Jake:** Yeah, and Alex, my boss, he makes us as a team, or he really wants us as a team to not have phone notifications and not have anything on your phone that if you're not on call, don't come into work if an offshore QA team wants you in at 3 in the morning.

**Bridget:** Jake, weren't you even saying something about Not logging into chat on your day off, things like that.

**Jake:** Oh yeah, so talking about previous jobs versus current jobs, at my previous job I was on call 24/7 and that kind of sucked a whole lot. Right now we have on-call rotations where you're on call a week at a time and if you're— after you're on call, you get the next Friday off, which is a really cool benefit. If you sign into chat on your day off, you get yelled at and told to go home. So they actually kick you out of chat for working.

**Bridget:** [00:29:20] Now, Catherine, I know Etsy has a really good culture around work-life balance too. And didn't you in fact write a blog post right before the end of the year about exactly that?

**Ryn:** Yeah, about disconnecting, because I mean, I have also been at previous gigs the only on-call person 24/7, and it's hard to get out of that mindset. I remember It was probably my first month at Etsy. I got sick. You know, I made it into the office and then I realized, oh, this sneezing is getting worse instead of better. I'm gonna go home so I don't, you know, spread it around. Brought my laptop home, signed back online, and my coworkers are all, what are you doing? You know, stop, stop working, go rest, go snuggle your cats, go play video games, and jokingly threatened to take away my VPN access if I didn't, you know, stop working and take care of myself, which, you know, was so heartwarming.

**Trevor:** That is beautiful. I mean, that's something I really appreciate at 10M is if there happens to be a week where something keeps me more than a reasonable amount of time for that week, I can immediately turn around and talk to my bosses about arranging a day off or a couple days off depending on how much time it actually was. To kind of make up for that and make sure that I'm not being burned out, which is really awesome.

**Jake:** [00:30:45] Alex has even gotten my fiancée to start yelling at me when I'm working too late.

**Julian:** So I feel like we're turning into the ChatOps episode that Trevor maybe always wanted to have. It's a really fascinating, interesting topic. You know, there's like the upsides and the downsides. You could probably spend the whole hour talking about this, but I want to drive— turn it back a little bit to the jobs, the DevOps jobs. One thing that I added to today's show coming in at the 11th hour, because I was stranded here in Chicago, but, you know, there's been a lot of talk about and people complaining, especially on Twitter and things like this, about tech recruiters or DevOps recruiters. I mean, there's even a Twitter account, Shit Recruiters Say. You can see emails that recruiters send to people and stuff like this. I just wanted to know, how do you find good folks to work in a DevOps organization, and what role do you think a recruiter could play or not in this world?

**Ryn:** Well, we found recently there was a Sysdrink here in New York, and one of my coworkers was on call and was troubleshooting during that Sysdrink, and a bunch of people came over to watch and then contacted us later and said, you know, that was really cool. Can we come work for you? I think it kind of goes, you know, that was some nice happenstance, but a lot of it is, you know, giving back, talking at conferences, doing the Code as Craft stuff, you know, showing other people what your company is doing instead of just saying, hey, we're so great, you know, come work for us, we've got recruiters, or whatever it is that recruiters are doing these days.

**Julian:** [00:32:24] Yeah, does Etsy have a recruiting team, or is it enough to have that kind of word of mouth and you have a reputation that folks are approaching you. Do you happen to know, Katherine?

**Ryn:** There is a recruiting team. I'm working with some of them, you know, trying to talk about how we make sure that we have a good pool of applicants because obviously having diversity is very important to us.

**Bridget:** So you've both been at your now not entirely new jobs for about 6 months or so? Does that sound about right? A little bit longer for you, Jake?

**Jake:** Yeah, I started in the end of July.

**Bridget:** You've been there, I guess, long enough to say, like, you've obviously decided this is a place that you want to be. What makes you decide that a job is a place to stay? I mean, obviously some people are just going to be like inertia, whatever, but you both seem to be really happy and excited about where you are. So what makes a job a place that you, you know, is right?

**Jake:** Oh, definitely the culture for me. If it wasn't for the fact that I get to work with really interesting people and really smart people and keep that continual learning, I think it would get old and I would get burned out really quick. But the fact that I get to work on interesting things and kind of build the DevOps culture up with them and be around those smart people that know what they're doing and know how to help me and don't get annoyed by my questions, that's awesome.

**Ryn:** [00:33:46] Yeah, it's a combination of the culture and the people. Make the culture, we're creating it, and getting to work on interesting stuff. One of the things that I really liked about, you know, my first week at Etsy was that I got to start working on, you know, real work right away. I wasn't stuck, you know, just reading documentation for a couple weeks. I got to start contributing and feel like I was, you know, actually helping out, contributing to the team right away. And it's been like that pretty much since day one.

**Bridget:** We actually just had someone start this week at DramaFever, and he seemed kind of upset and self-conscious because he did something that wasn't exactly what we had wanted. He pushed to master, like, you know, his second day or whatever. Instead of— I think he was a little surprised that instead of being upset, we were like, excellent! You have the superpower of being able to read this documentation and tell us where it was unclear for you. Please rewrite it. It's like new people could— new people have something that no one who's been at the organization for a while can ever get back, which is that power of not knowing how things are supposed to be. Like, what kind of stuff was your new perspective that you brought, Katherine, good for?

**Ryn:** [00:34:56] Let's see, I'm kind of good at breaking things. I remember my first week, I accidentally broke Nagios Herald, which is this lovely thing that wraps your Nagios alerts and adds context to them. When we don't have that running, Nagios isn't alerting things. And whoever was on call that week said, hmm, you know, things got really quiet all of a sudden. That's nice. Oh wait, that's not so nice. And I was, you know, I felt so bad because it was my first week, but that was a really good introduction to the blamelessness of Etsy's culture. And also getting to take a look at this totally new deploy stack and figure out, oh, here's some things that, yeah, maybe I should update the documentation, like you were saying.

**Bridget:** Now, Jake, I think you're in kind of more of a greenfield situation, right? Like Katherine came into a very established engineering organization with like dozens upon dozens of senior people or whatever, but you're in kind of a different situation, right? Can you go into some detail about that?

**Jake:** Yeah, I'm in a, like you said, more green situation, but I'm by far the greenest.

**Bridget:** [00:36:01] Oh, sorry, sorry. I meant greenfield like you're, instead of a giant established stuff, you're actually like starting from the ground up and building the stuff.

**Jake:** Oh, yes, yes, yes. So when I started, we had Puppet, and we had a little bit of legacy Chef stuff, but the main thing is we were strife and starved for help when I started. So when I started, I was able to just dig right into the documentation and make commits my first day, and really start giving back.

**Bridget:** I feel like both of you are— Jake, this is This is your first kind of DevOps adjacent job, right?

**Jake:** Yeah.

**Bridget:** And, and Katherine, you've been in a number of these kinds of organizations. So from either new to your career or a mid-career, like, sort of perspective, what kind of advice would you give to people who are maybe interested in such a job but don't exactly have one right now and aren't even sure how to get into one of these organizations? Like, what kind of advice would you give people?

**Matty:** So I guess what it sounds like what you do is get get Cheslock to pay for you to go to a conference and introduce you to Bridget, and then you get the job.

**Jake:** [00:37:05] You just have to follow the right people on Twitter.

**Ryn:** And you know Bridget, and then Bridget convinces you that you are good enough to work for Etsy, and then you get a job. So clearly Bridget is onto something here.

**Trevor:** Matt was the one that kind of gave me the whole understanding that DevOps kind of wrapped subjects that I cared about together. And convinced me to look into how that worked.

**Bridget:** So it sounds like talking to people in the community is a really good place for you to start.

**Ryn:** Yeah, if I hadn't been on Twitter complaining about not knowing what I was doing all of those years ago, I would have missed out on so many connections. I wouldn't have met any of the amazing people that I, you know, get to talk to and work with today. So having people be able to reach out and participate in the community is really important, I think.

**Matty:** I think a big thing— it sounds like a negative statement to say that it's not what you know, it's who you know, but that's true. But I mean that not in the ways of like, oh, because if you know— because of nepotism, or because of if you know the right person, they'll get you in even if you're awful. But if we think about why we hire and we kind of talked about this a little bit on our hiring episode, which is arresteddevops.com/29.

**Jake:** [00:38:25] Yes, 29.

**Matty:** Either that or I'm sending you to the blameless episode, which is on topic too.

**Trevor:** 29, 29, 29.

**Matty:** The louch. Anyway, back to my point. We hire people we want to work with, and I don't mean this from like— there's that whole like, uh, because I want to be able to know that we're going to go be able to party together or whatever, but you spend a fair amount of your awake time with your coworkers. So you'd like them to be people that you don't hate. And so it's nice when you know you don't hate them, not necessarily because they're your best buddies, but because you kind of know who they are. They come recommended. And that's why when I think personally, I think back, my best jobs, my great jobs were never ones that I applied for or even necessarily were directly recruited for. Early in my career, yeah, and not that I'm far in my career, I sure hope not, but I think you get to that, right, where you get some both on being brought in and then when you're looking for somebody. So that's why that networking is in a nutshell, the network, yeah, it's not know the right people, it's just know people.

**Trevor:** [00:39:34] Right, I mean, if you have a good conversation with someone, that's going to stick with you and you're going to remember that person. And when that name either— if that name happens to come across as a resume or you get an email or you know you need somebody and you remember they were talking about maybe being a little uncomfortable where they were, there's somebody you can reach out to and talk to about joining your team.

**Jake:** That was one of the best resources and assets that I had for getting this job was the community. You know, and not only just me being like following the right people on Twitter, but like the community's response to everything that I had to say. Um, so I like, I went to Pittsburgh and like I got to shake Mark Greenbirak's hand and like talk to him. I was like, what the fuck? Like this guy is like huge in the whole community, but he was like talking to me like a friend, you know? And I got to talk to Ben Rockwood and he was again, just, you know, another huge person in the community, but just talked to me as if I was, you know, right there with him on his call. Like he didn't talk to me like I was no less than.

**Matty:** [00:40:37] I think, and Jake, correct me if I'm wrong, and maybe my brain is a little melty, so I might not be remembering right, but I think the community helped you a little bit. If it wasn't you, this is true of somebody else, but I remember someone having this challenge when thinking about making a change like this and getting advice from a certain direction from someone close to them or involved to them or whatever, and basically having the community kind of come back and say, No, you can do— just like Catherine said, she had Bridget say, no, you are good enough and smart enough and awesome enough to go work at Etsy. You had tons of people, a bunch of people saying, no, no, you are good enough. You are— take the risk. First of all, am I remembering that right?

**Jake:** Yes.

**Matty:** Your face tells me I am. Okay.

**Jake:** Number one was my family. Those are the people that you're supposed to be like close with and you're supposed to be like, okay, mom, yeah, I'll do whatever you say. You know, they were, they were saying like, hey, it's a startup. It doesn't, you know, you don't know if it's a viable income. You don't know if they're like going to be stable in the next couple of years. And then I'm like looking on Crunchbase and I'm like, they have millions of dollars. So it was just weird, like coming from a family perspective of my family's the kind of people that like, they get a job and then they work at that same job for 50 years. You know, get a gold star and they retire with a pension plan. And, you know, I think it was Bridget that tweeted back at me and said, that's not how this community is. This is a— you work where you work and you're always going to have a job.

**Bridget:** [00:42:07] Yeah. And speaking of that, I think, Catherine, tell me, do you want to give us a little bit of reaction to the super exciting Etsy news from yesterday?

**Ryn:** Oh, so here's what I can tell you about that. No comment.

**Bridget:** So yes, the internet's told us that Etsy was going to do an IPO. So if that is in fact a thing that is going to happen, and Catherine's no comment makes it sound very exciting, then yay.

**Ryn:** I can say thank you, and I can say that I have no comment.

**Matty:** I have no comment on your thank you. So I think it's time for us to start wrapping this up because that always takes us longer than we expect it to be. So, we're going to start off with some community and event stuff. We have good old ChefConf coming up, March 31st through April 2nd in Santa Clara, California. If you go to chef.io/chefconf, the code ADO, like for Arrested DevOps, will give you a 10% discount.

**Trevor:** Pretty much everybody on this podcast who's a host at least will be at ChefConf, and actually we're all presenting, aren't we?

**Matty:** [00:43:14] Julian, are you giving a talk?

**Jake:** I hope so.

**Julian:** I am not officially giving a talk, but I will probably, as in my new role as product manager of our analytics product line, I will probably be speaking and talking about that.

**Matty:** I will probably be talking to lots of people.

**Jake:** I will be talking to lots of people.

**Matty:** It just will not be official.

**Bridget:** Well, and Trevor and I are actually talking in the same place at the same time, or no, different places at the same time. You have to decide which one of us you love more, Matt. It's okay.

**Matty:** I'm gonna go to neither of yours. Also, Microsoft Ignite is coming up. Well, this is out of order, but it's May 4th through the 8th in Chicago. I'm talking about it because I'm gonna just be there. So like Bridget's talked about before, it'd be like, hey, if you want to know where you can come see your favorite rest of DevOps stars, here's where we'll be.

**Trevor:** And there's like a 75% chance that I'll be there also.

**Matty:** Why don't you tell us about some DevOps Days, Bridget?

**Bridget:** Um, there are a lot of DevOps Days coming up. There's almost too many to name at this point. You should go to devopsdays.org and take a look if you're interested. There's a bunch of European ones, US ones, and there's some other non-European, non-US ones on the horizon coming soon. Watch for those.

**Matty:** [00:44:27] We've got a lot of CFPs open for those DevOps Days too, so when you're looking to see which devopsdays.org DevOps Days are coming up, take a look for their CFPs.

**Julian:** The DevOps Days in Ljubljana.

**Trevor:** Yeah, I'll be at DevOps Days Paris.

**Julian:** Ljubljana. I don't know where that is, but I think I pronounced that correctly.

**Bridget:** It's in Slovenia, I believe.

**Julian:** Very cool.

**Matty:** I will be at the Application Lifecycle Management Forum in Seattle towards the end of May, May 18th through the 22nd. I will be giving a talk entitled The 5 Love Languages of DevOps. Bringing us around to our checkouts. Katherine, what do you have for our listeners to check out?

**Ryn:** I discovered a fun thing today. It is ibrokegit.com. You can go there, and if you've broken your Git, you can put in how you broke Git, and it will tell you how to fix it and what's going on. If you've ever gotten yourself into some terrible detached head state, the internet has answers for you. I also found something called teammate.io, which is terminal sharing, which I think is really interesting for the possibility of, you know, onboarding new people when they're remote. Instead of going over to their desk, you can just share your terminal on the internet. The internet's a magical place, apparently.

**Matty:** [00:45:47] Yeah, I saw that listed in there. I'm really intrigued because it looks like it forks off of tmux, and I've never been able to have— and I think that's a thing that is people do, but you have to be smarter than me. So, I'm real intrigued to check that out, because stuff like that's also really good for pair programming. Jake?

**Jake:** Catherine actually stole my pick. I was going to pick Teammate. But, yeah, Teammate is awesome, and it works really great with tmux. My first pick, though, is a blog by Jessie— I think it's Frazelle. She just gave a talk about Go in Europe. But, her blog post is Running Linux on a Mac. And so I've done this with my MacBook Pro, and then I've just recently done it with my Air yesterday over my lunch break, and it took me half an hour, and I'm fully up and running. And Linux has gotten a lot better, guys. It's time. And then my second pick is a really nice article by Helena Nelson-Smith on mental overload. This is spawned out of the blog post that was passed around on burnout that's been going around in DevOps Weekly and everything else. She responded to this in an email thread between me and Gene Kim and a couple other people. I read through it, and it was very interesting.

**Matty:** [00:47:08] All right, Julian.

**Julian:** Great. Looks like I'm up. My first pick is a blog post, and this might be actually controversial. At least the headline is. I think if you read the post, it's not that controversial. The headline of the post is, your job as a developer is not to write code. And, you know, it's like, what? What do you mean my job as a developer is not to write code? And really, the TL;DR of this article— and I highly recommend that you, you read this to kind of understand the argument— but really, your job as a developer is to improve product for our end users, make their lives easier, and relieve their pain, right? And that's something that's near and dear to my heart now as a product manager. And then my second pick is just a funny webpage. I'm not sure if it's totally automated or whatever. This developer named Isaac Chansky has made called Days Since the Last New JavaScript Framework, because it seems like the number of JavaScript frameworks and container management technologies that are coming out every week are kind of head-to-head. So I thought that was kind of hysterical. So Google for that as well. It'll be in the show notes.

**Matty:** [00:48:09] All right, Mr.

**Trevor:** Hess. Well, so I'm going to start with this lovely Scotch. This is the Laphroaig PX Cask, so it is triple matured. It is initially matured in ex-bourbon barrels, then it's transferred to quarter casks, and it's finished in Pedro Ximénez sherry casks. And it is just a delicious, delicious Scotch. Matt can confirm or deny that because I shared some with him about an hour ago.

**Matty:** That's pretty much why I agreed to stick around here and do the show from this office was Trevor's like, we got Scotch.

**Bridget:** I'm like, I know. And Trevor, since I'm coming to Chicago and Daphne's gonna be out of town and Matt's gonna be out of town and everyone's abandoning me, are you gonna be out of town too?

**Trevor:** I'm gonna be stuck in Seattle.

**Bridget:** Damn it, so I can't come drink your Scotch.

**Trevor:** [00:49:09] If you can stop by the 10M office, I'll leave it at my desk. Yeah, you know, you know Shannon.

**Matty:** Shannon will let you in, and nobody would— nobody will look, look at you strangely if you just go take a drink out of Trevor's stash.

**Trevor:** So the sad thing about that scotch is it is only available in the duty-free stores at the airports.

**Matty:** Good thing you're going there every other week, so yeah, right, you can bring that.

**Trevor:** Anyway, what else you got? So I, I, yeah, last night, um, me and I went with my best friend and my girlfriend to go see the, uh, The Book of Mormon, uh, which was absolutely hysterical. I've, I, I love musicals. If, if I hadn't been diabetic, I probably would have decided to go to Broadway and, and try that hand in life, but my fear of living prevented that.

**Matty:** I'm sorry, I just, I just had to—

**Trevor:** that phrase just, it just You're no longer speaking, but it's okay. I think you hit the mute button, Matt. And finally, there was an article from Stack— I don't know if it was today or yesterday, but it's kind of a little write-up of how they upgraded their live data center. And the link to that will be in the show notes. It's a pretty interesting article. I recommend it.

**Bridget:** [00:50:32] Bridget, what do you have? Um, okay, so I have 3 checkouts. They're all bicycling related. So just gonna put that out there, pretty into bicycling. The first one is the Fat Bike Berkey. I don't actually have a winter bike, but my partner Joe does, and he's racing this weekend on the American Berk Biner course in northern Wisconsin, which is like a world-famous cross-country ski course. That right after their big event every year, they let the people on the giant tired bicycles come and tear up the snowy course, which is hilly and it's an hour or so of him riding around and then me trying to take good video when he comes back because I'm like, I'm not going to ride my bike on the snow. But that's going to be fun. But then I am going to go out to Napa in mid-March with a bunch of people from our Powderhorn 24 bike team. That's a 24-hour bike race thing in August. We're going to ride between vineyards and bicycle between vineyards, drink, and then camp in this yurt, which should be pretty exciting.

**Jake:** [00:51:38] If nothing else, you get to say yurt.

**Matty:** Exactly. Which to me just makes me feel like I'm living in— that just seems like a Dr. Seuss book. I know, right? You know, you'd be like, do you have a yurt? I don't know, or something funny. Anyway, hey, you know what's not like Dr. Seuss? Listening to a podcast about enterprise DevOps. Like The Goat Farm. So that's my pick. Yes, my check— my checkout, my first checkout is one of our fellow podcasts that just started recently. It's called The Goat Farm. It's— they focus on DevOps in the enterprise, and the main— the hosts over there are our pals Michael Ducy and Ross Clanton. So Ducy's from Chef and Ross is from Tarjay, and you can check them out at gocan.do. They've got 3 episodes so far. I am really, really enjoying it. They've Had some great conversations. And then also our other good buddy, Steve Pereira— all the 3 people in my checkouts were on the same podcast episode of ours, I just realized. There's a theme. Anyway, his group, his company, something he has to do with, they put together this thing called the DevOps Checklist. And it's not actually a joke. Like, we would usually make a meme out of this, but it's available at devopschecklist.com. And it's really pretty insightful. It's kind of basically they've gone and collected from various sources and they kind of talk about where they got the ideas from besides, you know, people like Steve's own big brains about how you can kind of evaluate your organization's, not level of DevOpsing, but kind of aptitude towards a lot of those principles. And I kind of went there to kind of like maybe, again, knowing Steve, I guess part of me thought maybe it was going to be kind of a joke. I was like, no, this is really good. This is a really good thing for people to look at. So check it out, devopschecklist.com. Also, we have a newsletter, arresteddevops.com/bananastand. It's the best way to know about upcoming podcast episodes and cool news with DevOps. We also have an iPhone app if you dig that kind of thing, which you can download for free at arresteddevops.com/iphone or just search for DevOps in the App Store and you'll find us.

**Trevor:** [00:53:51] Thanks to our sponsors. Be sure to visit them at arresteddevops.com/pagerduty and arresteddevops.com/datadog32. Thanks to Jake and Catherine and Julian for joining us. And loyal listeners, if you enjoyed Arrested DevOps, we would appreciate it if you would visit arresteddevops.com/itunes and leave us a review in the iTunes store. No matter what you have to say, we'd love to hear your feedback.

**Matty:** Be sure to check us out at arresteddevops.com or @ArrestedDevOps on Twitter. We're always happy to get your ideas, input, show ideas, etc., at shows@arresteddevops.com.

**Bridget:** Yeah, so please let us know any ideas you have for future episodes, and we'd love to know what you thought of this episode, so please leave us comments at arresteddevops.com/32. I'm Matt, @MattStratton.

**Trevor:** And I'm Trevor at Trevor G Hess. And I'm Bridget at Bridget Kromhout.

**Bridget:** We're Arrested DevOps.

**Matty:** And remember, there's always DevOps in the banana stand.
