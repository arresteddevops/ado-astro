**Inés:** [00:00:00] It's a very seminal bird in America. We don't have turkeys in Argentina.

**Bridget:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Bridget Kromhout. Today we'll be talking about the Velocity conferences. The show notes for this episode can be found at arresteddevops.com/velocity. But first, a word from our sponsors.

**James:** Arrested DevOps is brought to you by Tenth Magnitude, a company that figures if you're listening to this podcast, you must be pretty cool. Tenth Magnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/tenthmagnitude.

**Bridget:** This episode is sponsored by VictorOps. Built for modern incident management, VictorOps provides a unified platform for real-time alerting, collaboration, and documentation driven by your IT and DevOps system data. VictorOps helps you to respond to incidents more effectively so you can minimize downtime and make being on call suck less. Visit arresteddevops.com/victorops to schedule a demo or start your trial. Mention you heard about VictorOps on Arrested DevOps, and you'll be eligible for some sweet discounts too. GoCD is the on-premise, open-source continuous delivery server created by ThoughtWorks. With GoCD's comprehensive pipeline modeling, you can model complex workflows for multiple teams with ease. And GoCD's value stream map lets you track a change from commit to deploy at a glance. GoCD's real power is in the visibility it provides over your end-to-end workflow. So you get complete control of and visibility into your deployments across multiple teams. Say goodbye to deployment panic and hello to consistent, predictable deliveries. To learn more about GoCD, visit gocd.org/arrested to download. It's completely free to use. Commercial support and enterprise add-ons, including disaster recovery, are available. Okay, so today I'm chatting with Ines Sombra and James Turnbull. Who are both chairs of the Velocity conferences. James has been on the show before. So, Ines, let's start with you. Can you tell our listeners a little about yourself?

**Inés:** [00:02:28] All right. Hello, listeners. My name is Ines Sombra. I'm a Director of Engineering at a company called Fastly. We are an edge cloud, which is a fancy term for a CDN and a lot of services that run on top. And this is my first time here. So, hello.

**Bridget:** Welcome. Great. And James, what kind of trouble have you been causing since the last time we had you on the podcast?

**James:** I can't remember the last time I was here, but I'm currently the CTO of an educational technology startup called Empatico. We are about to launch a product to help teachers connect classrooms across the world and help elementary school students develop collaboration and empathy skills.

**Bridget:** Ooh, that sounds positively respectable. I'm a little bit suspicious. We're going to have to find out more about that.

**Inés:** But great.

**Bridget:** So, for our listeners who maybe have not paid attention to the Velocity conference, which of you wants to give us the elevator pitch for what it is?

**Inés:** [00:03:33] I nominate James.

**James:** I didn't know that was going to happen. So, Velocity, this is the 10th year of Velocity. Velocity started off as really a recognition of the fact that a lot of conferences very much focus on a silo, and a lot of parts of the industry reflect those silos. When the first conference happened, it was really trying to address the issue of the engineers and operations people need to collaborate on solving problems together. It was kind of DevOps before DevOps. In the start, it was very much focused on frontend performance and web operations. We had some great folks from early web ops companies like Flickr and Etsy talking about their experiences. As time has progressed, a lot of the practices that came out of the Velocity conference, things like continuous delivery, things like thinking about collaboration, are things that we now accept as being sort of good practices across engineering, full stop. So in the last couple of years, we've tried to pivot the conference to sort of reflect the change in the fact that the industry is more focused on end-to-end views of the world. We're moving towards microservices and distributed systems, things like concepts like serverless. So we've tried to look at the conference and broaden the church of the conference to be look at end-to-end computing, starting with performance at the front end and finishing right at the guts of operating systems, data centers, and networking.

**Inés:** [00:05:20] For me, it's that it has been a marrying or it's just bridging different communities. You had engineering organizations and people that were in the sysadmin, DevOps scene coming together, and then we're trying to do something similar as well. Now that we're building these applications, in order to actually understand them and and make them more robust and reliable. Anything that has to do with distributed systems teaches you the theory and then also the engineering, like the engineering concepts that are necessary to make better applications.

**Bridget:** Yeah, no, absolutely. So I was gonna say Velocity increased in the last year, increased the number of tracks when the two of you came into the picture. And I definitely can sense the work of Ines in some of these new tracks, like the distsys and whatnot. Can you talk a little bit about direction and shaping of the conference that the two of you are doing as chairs?

**Inés:** What we're trying to make sure that it happens is that you have enough themes that when you come to the conference, you can just leave being either much more rounded or hear more information and insights on things that you already know about and you may want to delve in deeper, or it would expose you to things that you don't know necessarily that you need to be thinking about when you're constructing applications. And we put you in a situation where maybe you didn't know a little bit more about security or just even just, I don't know, for me it has been exposing you to ideas that maybe you didn't have in your radar and we bring to you.

**Bridget:** [00:06:57] This is obviously, it's a multi-track conference. How as conference chairs, and this is probably of interest to anybody who's going to larger multi-track multi-track conferences and wondering, how do you put the program together? Can you talk a little bit about how you shape and guide the overall direction of the conference? Like, are you hand-selecting every single thing? I know the answer to this a little bit, but I'm interested in both your perspectives.

**James:** I think the really interesting thing about Velocity is, and what we're trying to do as part of this change, is we're focusing on finding people to host tracks. And for those of you in the audience, Bridget is one of those hosts and has ably hosted the DevOps track for a couple of conferences now. We find people who are subject matter experts in the field, people who are deeply passionate about the topic, and as a result, know other deeply passionate people. We get them to try and curate a track, which is a combination of things they think that everybody should know or listen to people that everybody should hear. New speakers or interesting speakers pulled from the call for papers.

**Inés:** [00:08:02] Yeah, and the call for papers is still very interesting because for us, it could be topics that we never thought that would be interesting to us. And then all of a sudden you read the abstract and it's just like an idea or a take that we weren't expecting. So we really like those. So we have a combination, or we tend to keep the balance between things that come from the CFP, things that come for us as a way to augment or supplement the theme of that particular track. So we look at it together, we look at it as a whole.

**Bridget:** Now, I think you've both been on conference program committees before. Can you address what's different about being a conference chair?

**Inés:** So I think that for when you're a track host, for example, you're responsible of only your track. When you're a conference chair, you're responsible for everything. The coffee, the schedule, the speaker logistics. If somebody bails from your track, you have to help make sure that they have plans and then plans and then just like backup plans of your backup plans. So that is kind of the experience to me.

**James:** [00:09:11] And I think too, as a KIT chair, you're much more heavily involved in setting things like keynotes, which really set the tone for the conference. You know, you own the sort of introduction to the program that people have.

**Inés:** And also the nice thing about it is that you can blame your other co-chair for anything that happens. James and I take turns, so I think James is weak. We should put this on pager duty. This should be a pager duty rotation, James, so we know who's going to take the blame that week. Oh, you're gonna, you're gonna take the fall for it, huh? Yeah, well, you should have like an email that is reminding you like, James is going on call.

**Bridget:** Okay, so if somebody— what kind of advice do you have to other people if somebody asks them to chair a conference?

**Inés:** I have opinions. So I think it depends on the conference because I have been chairs in a different conference. So I think that if somebody asks you, first, I think that you should figure out why you want to do it. If somebody's James and he asks you after you've been drinking with him or you've shared any sort of alcoholic beverages with him, just say no from the beginning. That's how I ended up here. And also he's very persuasive. So after you know if you want to do it or not, you should ask about the logistics and how much work is expected. What are your responsibilities? And those should be set up front because some things may surprise you and some other things may be slightly easier. There's some conferences that, for example, you'd be committed to being on a 1-hour call every week. And then there's some others that are a little bit like more every 2 or 3 weeks you have a meeting to sync up. So I think that's kind of like the biggest things that were unknown to me, or at least the things that still surprise me. Every conference gets run a little bit different, so you should ask. And then also like you should— yeah, so those were the ones that were the biggest surprises for me. For you, James?

**James:** [00:11:13] For me, I think the thing I always forgot— well, the thing I now think about conferences is that if I'm asked to be the co-chair, I generally want to focus on the program. I really, you know, if I'm running an event, I always pay someone to run the logistics because they're actual professionals. They're not likely to melt down the day before, as opposed to me, who is not an actual professional. Some of us are capable of maintaining 3 streams of things at once. I am not anymore. So just being able to focus on getting the speakers in the right place and have someone else worry about food and the logistics. Yeah, the coordination, the office and yada, yada, yada.

**Inés:** And then you may have some cool conference co-chairs like I do. He's part of the reason that I don't know, like he's like both things. I can't be mad at him because he got me to do this because I also enjoy his company.

**James:** So yeah, I do buy rosé. So I do both. On demand.

**Bridget:** Yeah, and we of course also do have wonderful people from O'Reilly who are involved on the O'Reilly side of the house, but since you're the two that they suckered to coming in out of the community, that's why I wanted to talk to you about, you know, what motivates a community member to jump in and start helping produce an event. So I want to shift a little bit topic-wise to— we obviously, or perhaps not obviously if people aren't familiar with it, the Velocity conference series runs in multiple cities multiple times a year. And the most recent one that you just put together was in San Jose this summer. So I would love to hear just a few highlights or memories or things that stood out for you now that the fog of war has passed. I have one more thing to say about the previous point.

**Inés:** [00:12:54] Another thing that I forgot to mention, but I actually think it's very important for both James and myself, is that by being a program chair or even a conference, or by being involved in any way with a program in a conference, you also get a chance to make sure that different voices are participating. So you also get an opportunity to make sure that as you see this thing, you scan for, like, are people— like, is every viewpoint represented in here? And that also, for me, for example, translates a lot into, like, do we have enough women? Do we have enough people of color as speakers? Because when I was attending conferences when I was getting started, I honestly never saw somebody that looked like me. So, and then others, there's some, yeah, but But I think that you get to make a difference in that way as well and give opportunities to speak for people that maybe are not necessarily as well connected, but you know them. That I think is one of the reasons why I'm still doing it as well. But San Jose now. San Jose was good. I know this happened, it seems like ages ago. I really enjoyed Camille's track with it. Now that I'm in management, I think Camille's track was very solid. The Ignites, I had never really been to any of the Velocity Ignites. And they were super powerful. I really, really love them.

**James:** [00:14:09] Yeah, I think Camille Fournier, who wrote an amazing book about engineering leadership, this year ran a track on technical leadership. And she's again running a track on technical leadership.

**Bridget:** Yeah, we'll put a link in the show notes to her book.

**Inés:** And also, Diane Marsh's— the keynotes were great. Diane Marsh's keynote was, like, very, very impactful to me as well.

**James:** Yeah, I thought that was an excellent keynote.

**Inés:** Yeah, so we really enjoyed the keynotes. The keynotes were great. Oh my God, Kelsey Hightower is like almost like marrying Tony Stark with like the everything could— like, it was so good. Like, you just needed to like— the next time you're just like, did he drop the mic? I think he should have dropped the mic after that one.

**Bridget:** Uh, yeah, Joe always, uh, my spouse Joe, who does, um, audiovisual technology, says you should never drop the mic because it's bad for the element. Like the element.

**James:** Yeah, but you got to prove the point. You got to make the point.

**Bridget:** Oh yeah, nice.

**Inés:** [00:15:09] Yeah, I really like— I think the keynotes stand out a lot to me too because like, I mean, Adam Jacob did a really good job with it. I really enjoyed— I thought he was—

**Bridget:** and Archer, Archer Confessed.

**James:** Yeah, um, I must admit it was— I was flashing— Archer did some very early keynotes at at Velocity that were marked by his very strong opinions about many things that were expressed in many ways, mostly using expletives. But it was really interesting to see where Velocity came from, where it evolved from, and where it evolved to, and the sort of things that have happened since then, and the sort of companies that have spun out of other products and tools that 10 years ago we were sort of like, oh my God, you have to be a magic unicorn to use these. And that is now sort of status quo for a lot of companies. That was really cool.

**Inés:** The nice thing about Arthur's talk too is that as somebody that swears myself, he completely normalizes my behavior. So I love it. Yes.

**James:** [00:16:10] Yeah, I'm Australian and he makes me sound positively banal when it comes to language.

**Bridget:** Oh my gosh. Okay. So I'm thinking like you kind of have a weighty responsibility here with the 10-year anniversary year. Like, what are you the most excited about or looking forward to or, you know, dreading or fearing or, you know, anticipating for the Velocity coming up just in a couple of weeks now in New York? Wait, is that next week?

**Inés:** Yeah, it is next week.

**James:** Next week in New York, and then 3 weeks, 4 weeks later in London.

**Inés:** No, 2 weeks later.

**James:** 2 weeks later. Oh, no, I'm deluding myself with that I have time off in the middle.

**Inés:** Nope, you don't. You have a week in the middle. Enjoy it.

**Bridget:** Yeah, I just bought it. I just bought a plane ticket. I just switched jobs, which was of course the fun thing where you wait. We can talk about that later, but the thing where you don't have your corp annex yet or concur or anything, so you're like, I know I'm buying a plane ticket, but I'm just waiting. And yesterday I just up and bought the plane ticket. I'm like, I'll just apologize and get reimbursement for the personal expense because I'm like, I should not wait any longer or I'm going to be flying at a really annoying time of day. Yeah, so that's how I realized that, oh shit, we're like a week out from me having to get on a plane and come to New York.

**Inés:** [00:17:27] Yeah, and it comes to like our anxieties for New York. I guess we're always like hoping that the people are gonna like the program that you put together. So hopefully they're gonna like it. Uh, for me, it's almost like I, I still want to have room for us to be playful and for us to like put things that were unexpected. So those could go 2 ways. Either people really hate it, or they may be able to be like, oh, there's something else that, that is interesting. Personally, I don't like the talks that tell me already things that I know. If I don't feel a little like, a little like maybe I should try harder with my day-to-day, then I don't think that it's a talk that challenges me. So, and also like I have very little time. I want a talk that either reframes where I'm coming from or also makes me feel a little bit like, a little bit bad. I'm like, ooh, this could be done so much better because those are the things that you end up bringing back to your organizations. So, if it's something that tells you that you're doing everything right, then what's the point of going there? Like, I can just get self-validation by just looking at it like, oh, I'm doing great. But the truth of the matter is that we don't necessarily do great. And I think as an industry, like, sometimes we have a tendency to over-romanticize what we're doing and not talking about the mistakes and not talking about the iterations of the things that— of how we got to the ideal solution. And also, the ideal solution is very company-specific and it's very domain-specific. So hearing about what other people are doing may actually help you do what you're trying to do better. So hopefully people will like it. Those are kind of my anxieties for London and New York. And also hopefully the speakers are gonna be fine. Nobody's gonna get sick. Planes are not gonna be problematic. It's not gonna rain.

**James:** [00:19:09] No hurricanes, no—

**Inés:** Earthquakes, nothing.

**James:** But I'm looking next week, I'm— there's a few things that are— I finally persuaded, um, uh, my friend Kellan, uh, who was the CTO at Etsy and is now the CTO of Blink Health, to give a talk about technical architecture. He's most famous for probably, um, coining the Choose Boring Technology blog post, inspiring that blog post, which has influenced a lot of people about you know, choosing innovation tokens. And he's really going to be talking about how you do technical architecture in a, in a high-performance environment, um, which I think is the topic that, that really fascinates me. Um, and amongst the keynotes, I'm, uh, it's rather timely, but we, um, we're lucky to have, um, Neha Narulak from the Digital Currency Initiative talking, um, about digital currency and the blockchain. And given the sort of current sort of, uh, both sort of massive expansion of the blockchain as a tool and the sort of recent sort of turbulence amongst the digital currency world. I think we're— it's a really timely talk.

**Inés:** [00:20:18] Also, I feel very torn because we have very many like good talks in the programs. We have like very many speakers that we've actually went and sourced and asked, and then James goes and asks again, and we just pursue and everything. So it feels a little like a little I don't know, like at a glance, it's just like I could pretty much mention every talk on the program too, or at least, yeah. And the tracks, I think that I would watch at least like several talks that are competing with each other and hopefully like, yeah.

**James:** Yeah, that's my problem this event. The last one was I was hosting a track one day. I kept having to go, I wonder if I can just leave my track and go and listen to this other talk. No, that would be rude. Um, yeah, now I'm hosting a track at this one, so I get to go to all the talks I wanted to see.

**Bridget:** Well, see, the trick is when you're hosting a track, if, um, one of the talks you program from your track is one you've seen before, then my trick is I kick it off and I tell them ahead of time I'm gonna duck out, and then I tweet from, you know, my speaker's talk. Then I run to another room and like tweet from that talk too, and then maybe a third one, and then I run back in time to like end things.

**Inés:** [00:21:28] Oh, I didn't know that you could work on cardio and then attend a— I have no idea. This is like some next-level thing.

**Bridget:** I have had people be like, how are you tweeting from 3 simultaneous talks at the same time? With difficulty. But I actually, I wanna drill down a little bit on something that James mentioned, this idea of performance. I know Velocity, obviously, in the past had this web performance component, and now there's all this backend distributed systems, etc., etc., especially given that, Ines, you work someplace that's all about bringing speed to people. Where do you see the role of web performance, whatever that is, however you define it, in a distsys world? What does perf mean in that context?

**Inés:** To me, it means that there's just not a single strategy. You think about performance on every element or every area of your stack. I mean, everything that has to do with web performance in terms of like length optimization or even like how responsive your applications are still holds true. The thing is, it's like, say that you can have an application or a system that is very performant in terms of the UI, but if anything else from the UI down is not performant enough, your application is still unusable. So you care about all of those other things and then if, like, and you will have to deal with them one way or another. It's just that to think that performance is just about like, you know, what your browser sees, it's, To me, it's an incomplete view because I don't deal with what the browser sees as a service owner. I deal with how fast we can deliver this bit to the browser. So, in my part, I still have to live and die about how fast my service is and how much are we honoring our SLAs or whether we're going to have some regressions on some functionality we brought in. So, I'm still doing performance. But it's not within the traditional context of what performance used to mean or what it meant whenever I went to Velocity. So, if you tell me that performance is just like, you know, HTTP and how do you construct your web pages and what do you do in your interfaces, it just doesn't really tell me anything that I can use to make my systems better.

**Bridget:** [00:23:47] James, it sounds like you had a thought on that.

**Inés:** Yeah.

**James:** I was going to agree. I look at performance as like it is really a spectrum, and it starts with the user experience the customer has at the front end. That's a combination of both the speed of the interaction and the design and usability, whether it's accessible, and it moves all the way through to the experience of retrieving data, running services and middleware and applications, And all the way down to the sort of robustness and resilience of that platform, you know, with things like redundancy and caring about sort of failover and disasters. But the sort of on the spectrum too and sort of overarching it is the fact that you can have the best technology in the world, if you don't have a team that functions well, that has good process, good leadership, and has a, you know, the ability to be flexible and resilient, Yeah.

**Inés:** [00:24:49] So you're— oh, he froze. But I think that what he means to say is that performance also applies to how you construct your teams and your organization.

**James:** And I think conferences that talk about engineering practices but don't cover leadership really miss out on sort of a key aspect of high-performance delivery of services and quality of service.

**Inés:** So I was trying to see if I could predict how you were going to wrap up that sentence whenever you were frozen. So, I mentioned that you are just like also locally defining the fact that performance also applies to the organizational level. This is a moving target as well, because you may have something that you fixed that was a performance problem and then the performance issue moves. So, you can't really stop looking at it. So, maybe you have something that has scaled, but also you get like triple or quadruple the amount of users and then you will have a new performance problem then. So, you're never done. It's just like performance is not a thing that you can just check and then just be done with performance.

**Bridget:** Well, you can also probably apply that in the case of like when people start talking about how they now have some containers or microservices or their platform solution or whatever it is that they're talking about. Wherever you've made things simpler, Tim Gross likes to call it conservation of complexity. You just move the complexity somewhere else. It's like you're still going to have complexity, you just decide exactly where you want to expose that complexity. Because, and that's, I think, one of the things that's really cool about the, the tracks at Velocity now, as James was alluding to, we have everything from the, you know, the hardware level to, you know, security and microservices and that technical leadership aspect that, you know, that, that wetware, meatware that goes into all of the delivering high-speed services.

**Inés:** [00:26:42] Yeah, I also think complexity gets a bad rep. There's moments or there are situations in which things are just complex and then they're difficult to do. And then I think that anytime that you just put something or just make something complex in order to make it operationally simpler or easier to interact with, then that is good complexity.

**Bridget:** For people who are going to attend, and perhaps, and we're gonna, we're gonna have a discount code, spoiler alert, it's ADO2017. But, um, at the end, when we're talking about discount codes, we have a discount code for people who have just finally persuaded management to send them to Velocity New York specifically. Um, so for people who are thinking about attending next week, uh, what, or maybe they already have their ticket and they're thinking about this now, what should people who are going to attend Velocity for the first time know? What should they do and how should they plan? And when they look at the vast panoply of choices, like how should they arrange their time?

**Inés:** Okay, it's at least when I attended the first time, to me it was overwhelming, the amount of choices and everything. Don't try to just force yourself to just do everything. Do talk to people, especially between sessions and especially around, because those tend to be like one of the— I think that is as valuable as well. Like the people that are brought together are people that you just want to interact with. So don't head your introvert threshold too fast. So try to manage your own energy and be able to interact with others. Program-wise, I normally just go with whatever on a whim. Do you have different mechanisms for planning your program, James?

**James:** [00:28:24] Mine is a bit whimmish, but also it's— I think the hallway track that you sort of like the talking to people part, I've learned some very immensely valuable things and made some really good contacts and friendships just by being able to go, okay, I'm going to muster up my extrovertness and wander over and say, I thought that talk was really awesome. I have a similar situation, or here's a problem I'm having. Can I buy you a cup of coffee and pick your brains about how to solve it? Or did you use a tool here? So I think I tend to focus on the things that I'm working on and trying to sort of meet and build a network of folks.

**Inés:** I always do try to pick something that I know nothing about too. So, like, at least one or two sessions of things that you have no idea what they are. That's also like, I just use conferences as an opportunity to get exposed to something completely different as well.

**Bridget:** [00:29:25] Sometimes the keynotes will give you that.

**Inés:** Yeah. Come to the keynotes. We've spent a lot of time making sure that the keynotes are very curated and then they tell a cool story. Don't sleep in and then come to the keynotes. It would be my recommendation.

**Bridget:** I am super excited, by the way, because Jesse Frazell is keynoting.

**James:** Yeah.

**Inés:** Jesse is keynoting. Also, we have a bunch of other people. We have Claire Legoud, I don't know how to pronounce her name, and I'm butchering right now, but she's a professor at CMU, and she's talking about, like, her research is about self-correcting systems. So, that will be, like, that will be very interesting.

**Bridget:** Do you hook those up to PagerDuty so that you don't have to fix anything in the middle of the night anymore?

**Inés:** I think it will be kind of like one of those things that you connect it to CI, and then before you even put your thing, your program can detect that there's some issues, and then just try to fix it. Itself. That would be awesome.

**James:** I think it'll be sort of artificial intelligence driven. So I personally welcome our new bug fixing AI overlords.

**Bridget:** Yeah, I've been skeptical of our AI overlords, but if they fix our bugs for us before they alert, that sounds great.

**Inés:** [00:30:33] Yeah, we also have Nick Rockwell, the CTO of the New York Times, talking about technology. It's like the keynotes are going to be really, really good. So don't skip them.

**Bridget:** Yeah, I mean, I— and as you mentioned before, I'm running a DevOps track, and I feel like when curating for San Jose versus New York, for New York, I always want to make sure to have some stuff that's a little bit less exciting web darling and a little bit more East Coast pragmatic. We actually— I have in my track, I have John Moore from Comcast. He's, he's fantastic. And he's a, you know, like, I forget what his title is, technical architect or something. But, um, he's been at Comcast, Comcast for like a decade, uh, you know, helping guide and oversee their transformation. And if you, if you are probably the most hated company in America, often because your tech is terrible, then that's a pretty good journey to talk about. It's how you become less hated and less terrible.

**Inés:** [00:31:34] We should get John Moore to do a leadership talk too.

**Bridget:** Yeah, I mean, they've— he has a lot of, a lot of really cool stuff to talk about, but I like this idea of meeting people where they're at. If your East Coast, uh, audience is a lot of people from finance, a lot of people from these large enterprises, you need to have some talks that talk to that.

**Inés:** Yeah, I saw one of John's— he did a talk on clocks, like, I think a few years ago. That was insane. That was really good.

**Bridget:** Yeah, like computer clocks or like grandfather clocks or—

**Inés:** yeah, like clocks. I think how you keep time in your systems.

**James:** Yeah, there's some interesting— I mean, your track also has Brian Liles opening your track, and Brian is hilariously funny and a brilliant speaker. So I think that'll be a fun way to kick off the day.

**Bridget:** I'm very excited about Brian Liles because— and that's another example of, you know, Brian is currently at Capital One. Because again, like, having absolutely every talk be from, you know, your exciting, adorable startups or your web CDNs is like, well, there are some like banks and stuff too.

**Inés:** [00:32:41] Yeah. And also if you want your banks to run properly, like, I mean, I have a credit card. I would like for my bank not to leak my data. Thanks so much. Or just, yeah. Or run efficiently.

**Bridget:** That's one of those funny things too. It's like, hmm, our streaming video works really well, but paying our utilities is kind of a shit show. What are we doing wrong as a country, as a world? Anyway, so that's, that's pretty exciting.

**Inés:** Yeah, but it's like every talk, like, has— every track has people that are, that are really, really great to watch. So, so yeah, I feel now like I'm just like, I'm anxious because we haven't mentioned everybody, but also like, this is like a big program. But, uh, but yes, everybody—

**Bridget:** there's— and the CFP is very competitive. Um, if someone is speaking, it's because we want them to and they are wonderful. So everyone who is on the program is wonderful.

**Inés:** But definitely we want people to submit to the CFP. Uh, we're trying to make sure that the form is not as long. We're trying to do our best to make sure the form gets reduced. But yeah, we're looking for different ideas, different opinions. Uh, we don't really want things that are like pitches of like of things, which is we're mostly like into the, the process and, and what you find out alongside creating a system, or what you learn, or maybe teach us something But we do take the CFP seriously too, and we're going to open the CFP for San Jose, I think in December, over the— James?

**James:** [00:34:06] November or December.

**Inés:** Yeah, so please just submit to the CFP. We'll do our best to make sure that the form is shortened, and we'll pass this video to the wonderful O'Reilly folk.

**Bridget:** I feel like there's one question on there that's always so confusing for me. It's like, I don't know how to answer it. Something like, Is your idea more, I don't know, conceptual or innovative? Or I don't know, something like that. It's like there's 2 adjectives and you're supposed to pick one.

**James:** I think your feedback there is let's remove the question.

**Bridget:** It's just, I don't know how to answer the question. I feel like if I can't answer that question, this might be a problem. Yeah. Yes.

**Inés:** There was one time that I was trying to submit something and James is like, why don't you put this on a PDF? And I was like, this is the most efficient way to get me to stop complaining. But yes, uh, rechanneled my rage.

**Bridget:** Yeah.

**James:** And also, I think that the really key thing about the CFP is don't pitch us things, don't do marketing talks. Yeah, you're a vendor and your product is awesome, then you hopefully have customers who know your product is awesome. Get a customer to submit to us, get them to tell their story. Um, and you know, as long as, you know, we're interested in that case study, we're interested in hearing how someone did it. And if that makes your— if your product shines along with that, then that's far better than a marketing talk and far better than pitching a, you know, here's our product 101 or—

**Inés:** [00:35:33] Yeah.

**James:** Yeah.

**Inés:** If you really have a product that you want to do 101 thing, we have tutorials for that. But we don't feel like— we just want to be able to share lessons about what it takes to engineer a thing that is awesome, not necessarily hear how awesome your thing is and how many bells and whistles you can do. If you want to teach our audience about that, there's a venue in the tutorials.

**Bridget:** Yeah, and there's— I think it's also important to realize that, I mean, I work for a vendor now. Oh, I work for a different vendor now, second vendor job in a row. Um, and I'm pretty sure that if I submitted a talk about, uh, how can I get you into an Azure today, late market Azure, you know, denied, like, you'd be like, well, what— I always think like, what are the actionable takeaways going to be for the attendees?

**Inés:** Yeah.

**Bridget:** So, like, if I gave one about, I don't know, Azure Container Instances, but it was specifically when people are trying to— when they start from a premise of, I would like to have some containers, maybe that's the wrong place to start, and maybe they should be thinking about their application and how exactly they're decomposing it. And exactly how many of the 12 factors they really want to cargo cult, perhaps 7 or 8 will do. And, like, there are things you could talk about that will lead people to thinking, gosh, Azure sounds like it exists, and it is a thing that exists in the world. I wasn't aware that there were things that weren't AWS. Like, people could come to that conclusion if you're showing them some stuff, but your takeaways should still be valuable lessons for them, even if they're not using your thing.

**Inés:** [00:37:05] Yeah. Educational talks, like Trump, anything else that had to— the best way to do marketing is actually by teaching you to do something useful.

**Bridget:** Or just like teaching you something useful that you can take value from even if you aren't using this particular widget.

**Inés:** Yeah, in London we have a talk that there is somebody that is using a particular type of cue, and then we actually, with speakers that we know, we would ask them to generalize to lessons that are not just like use this to do that, but it's like if you have this type of problem, this generic type of thing in this context with these pros and cons are the ones that could help you in this type of situation.

**Bridget:** The other thing I suppose is if it's open source, like, so for example, we often have, say, Seth Vargo talking about awesome stuff from HashiCorp. Yeah, and they are a company and they do sell things, but the stuff that he's talking about is always their open source stuff, so you could be using it without paying them any cash money.

**Inés:** As of like, I mean, to be honest, it's not really a problem to have something that is not open source too. Like, I mean, there's some solutions that where you have a level of support or a level of company investment that that, like, we pay for the things that we want too. It's just that it should be— we want things that are more accessible in a way. Like, you shouldn't need to spend, like, hundreds of thousands of dollars for a contract or a license in order for you to be able to learn something.

**Bridget:** [00:38:25] Well, yeah, and importantly, when somebody is learning things at Velocity, they should hopefully be able to learn things whether or not they are a customer of one specific widget, one specific thing. Yeah, and at least from my point of view, that's pretty important.

**James:** Yeah, yeah, I agree.

**Inés:** And we try really hard to make sure that that theme or that message is conveyed to our speakers and our sponsors as well. Sometimes they listen, sometimes they listen a little bit less. We want them to listen more.

**Bridget:** And I think maybe it's also important to remember that there is sponsored content in the keynotes, and that's labeled as sponsored, and sometimes it's a little pitchy, but usually Sometimes it can be really good. And then there's a sponsored track, and I was excited to see Kelsey Hightower speaking in the sponsored track. Like, heck, I want to sneak out of other stuff and go to that because it's going to be awesome.

**Inés:** Yeah.

**Bridget:** And I guess I technically work at a competitor to him now, but I would still go to it and I would still tweet from it because it's going to be awesome.

**James:** No, I'm just going to say, reiterate that, that we always tell sponsors, if you're going to give a talk or a sponsored keynote, tell us something awesome. Don't just pitch us the product. The people in the audience buy software, and they buy software if they think it solves their problems. Because we all know, none of us wants to do, you know, we all want to buy the tools or acquire the tools that make our lives easier. If you make it look like this will make your life easier, then people will buy your product.

**Bridget:** [00:39:48] And that's a really good way to put it too, because if you think about the motivations of people coming to Velocity, obviously there are the chairs who are coming because they want us to throw rotten fruit at them on the stage. I mean, obviously. And then there are, you know, the people who are showing up because they work at vendors and are sponsoring, or they are giving a talk. But the vast majority of the attendees pay a non-zero amount of money and take time away from work and perhaps travel away from their households because they're trying to learn things that will be actionable for them. I know that you folks, and I think that most of the people you have working on the program committee, think about it from the point of view of, well, what are the takeaways for the attendees going to be? Because we want them to get value from this.

**Inés:** Yeah. And at the particular journey, like, if you're starting on something, then at least, but you may not necessarily be starting in another theme or in another vertical or track. We want to make sure that everybody, there's a little bit for everybody at all of the stages.

**Bridget:** Okay. So, we're running out of time. This always happens. I don't know why, but let's just kind of say, where can our listeners find you? Online and in person?

**Inés:** [00:40:56] Oh, okay. So online, I'm at Twitter. On the Twitters, @randommood. You're likely going to see a lot of photos of pugs because I have one and I'm slightly like obsessed in that way. I also make fun of James on Twitter and then just commit him to do things online. Yes.

**James:** She talks about cheese a lot too. I love cheese and wine.

**Inés:** Wine. I really like wine.

**James:** Yeah.

**Bridget:** All right, how about you, James?

**James:** I'm on the Twitters at Kartar, K-A-R-T-A-R, and kartar.net. I largely rant about politics since I recently became an American and at a rather depressing time for certain.

**Bridget:** No, it's the perfect time.

**James:** We need you.

**Inés:** I became an American a year ago. When was yours? When did you become an American?

**James:** When did I become an American?

**Inés:** Yeah, was it this year?

**James:** Yeah, 3 weeks ago.

**Inés:** Oh, congratulations!

**Bridget:** Congratulations! Thank you for joining us to help us.

**James:** Yes, yes, I must— I am very disappointed with the quality of the product that's been handed over to me. Make it better than I found it.

**Inés:** [00:42:02] You fix it up. I threw a party when I became an American. It was an all things American party, and I was a costume party, so I had like several Lady Liberties, a lot of Uncle Sams. It was great. And I was like the number one bird of America, which was the turkey, because it's incredibly difficult to find an eagle costume.

**Bridget:** What?

**Inés:** Yeah.

**Bridget:** I'm kind of disturbed that there are turkey costumes, but okay.

**Inés:** It's a very seminal bird in America. We don't have turkeys in Argentina.

**James:** Yeah, they're not hugely popular in Australia either. So it's like, you know.

**Inés:** Are you celebrating your Americanness in New York? I think you should.

**James:** Uh, well, we will try to— I will probably come out wrapped in American flag.

**Inés:** Oh, I know, I will, I will take care of this. I will take care of this, don't worry.

**James:** I think I have an American flag pin somewhere. I could probably put that on.

**Inés:** Yeah, because that just— I'm thinking larger.

**Bridget:** This is going to be the surprise content that Ines is talking about.

**Inés:** [00:43:04] Oh boy.

**Bridget:** So when the teleprompter for, um, your host segment just says like pause for applause, James, you're gonna, you're gonna find out.

**James:** Yeah, we'll see. I'm not adverse, as many people in leadership currently, to use patriotism for my own ends. So, you know, if it gets me somewhere, then sure.

**Bridget:** It was a momentous thing.

**Inés:** The whole ceremony was cool. And then they take away your green card and you're like, oh my God, what would happen? It's like you're just like so accustomed to be like, you just conditioned to like defend your green card so much, and then they take it away and they put in a plastic bag.

**James:** Yeah, I must admit, I, I applied for my passport on— because I need to travel for Velocity London, obviously. I applied for my passport on the same day, and you hand over the only piece of evidence you have you're an American citizen, your citizenship naturalization, and they send it to the State Department to prove you're a citizen. So for the 2 weeks until I got my passport back, there was literally no evidence.

**Bridget:** [00:44:04] That sounds like a dangerous race condition waiting to happen.

**James:** Yes, yes, yeah, literally and figuratively.

**Bridget:** Uh, so that's scary stuff. But, uh, in any event, so you can find these Safely American people at Velocity New York and London coming up. Uh, you can use the discount code ADO2017 for 20% off. If you are going to, for sure, Velocity New York, perhaps I can get them to extend that to London as well.

**James:** Yeah, you have any problems, we can, we can make that happen.

**Inés:** Yeah, let's also think group discounts. So if your entire company wants to go, then we'll give you a photo shoot with James.

**James:** Wait, wait, wait, we'll also give you, if you actually want something of value, uh, then we'll also give you a really substantive team discount. So if you do want to come as a team, uh, we do make it very cost effective.

**Bridget:** Nice. Okay, so, and then watch velocityconf.com and Twitter for the CFPs when those open in November or December.

**Inés:** [00:45:06] Towards the end of the year, we're going to open the one for San Jose, so we really, really want cool topics and talks, so please submit.

**Bridget:** I'm excited about that. There are a few CFPs open right now on devopsdays.org for some DevOps Days conferences. Right now, we're at the time of year where there are not a lot of DevOps Days um, for 2018 listed yet. And we get people whose marketing departments want to set their 2018 budgets reaching out saying, are you not going to have conferences this year? Like, these are all independently organized, and people usually make it through the holidays before they start, you know, wrangling hotels. So give it time. By like, you know, January, just allocate some money based on this past year.

**James:** It'll be very much— Minneapolis will definitely be going ahead. Uh, because I know the organizer is very efficient.

**Bridget:** So it'll be our 5th year. Um, it will almost certainly be in July again, and I am working with our hotel to lock the dates down. Apparently this whole Super Bowl thing, um, moved a lot of other— because we have a Super Bowl, not this coming one, but like the following year in Minneapolis. That does football, apparently American Rules football does some very aggravating things like have an event in your town that pushes all of the other conference bookings, um, to the surrounding months away from it, which puts pressure all the way— it's like classic back pressure all the way back into the summer. So it's already kind of tricky to get our dates locked down, but I'm working on it. I'll hopefully have our dates locked down in the next, you know, couple of weeks.

**Inés:** [00:46:35] Have you been to Bay Park? Sorry, have you been to Bayley Park?

**Bridget:** Um, I have not. Uh, I mean, I'm aware that it exists, but it's way out in the suburbs, and until Prince's unfortunate passing, it wasn't like it was a tourist attraction. It was just his house. You weren't going to just drive by his house and slow down and hope you were invited in. That was not generally how it worked.

**Inés:** Is it open now? Because that would be a cool tagline. Come to DevOps Day.

**Bridget:** I mean, I don't know. I don't think that they've built any museum out, but maybe they will by then.

**James:** I think you've identified the button that some attendees might be worth pressing.

**Inés:** Yes. Do you love prints? Come to DevOps Day Minneapolis. Get a tour. We'll see.

**Bridget:** We'll see. Okay, so we're just about out of time. So let's, let's find out which cool things our guests want us to check out.

**Inés:** All right. You go first, James.

**James:** Oh, I'm launching the— I mentioned earlier Empatico. We're on the web at empatico.org, E-M-P-A-T-I-C-O dot org. We're launching our— soft launching our product today. So please have a look. If you know any teachers, particularly elementary school teachers, please point them at the site. We're really excited to get a really broad cross-section of teachers. I'm also offering a package of the Terraform book and the Packer book, which you can find on the Terraform book site, terraformbook.com. And I'm firmly recommending people buy Idomi Migoring's ramen because I've been living off that for the last 5 days whilst I finished launching this product. It's my contribution to slightly sillier things.

**Bridget:** [00:48:22] Nice. I love it. Okay, Ines, what should our listeners check out?

**Inés:** Okay, so check out. Well, if you have any images on the web, one of my teams is the image optimization team at Fastly, and we're growing the service and we're adding new features and it's going very nice, very well. I'm very excited about it. I also have the video and the load balancing team. So if you need any of those things, check out what we have. The other things, maybe check out like almond lattes. I've gotten recently into my quest of becoming a Californian. Now I love one form of alternative milk, and this is almond milk, and almond lattes are really cool. So a few years ago were avocados. I found out that avocados were legit, and then now it's almond lattes. So I would recommend almond lattes. And yeah, and check out my finger ball. It's going to be removed towards the end of the year. I have a ball in my finger.

**Bridget:** So I can't even tell, but what is— do you have different finger functionality when you make this change? Like, does it behave differently or?

**Inés:** [00:49:25] Well, it's kind of like I have one that has a bump, so it's like whenever I do a +1.5 and then the other one is just a regular +1.

**Bridget:** Ah, so you're going to have to use both thumbs up. Or multiple thumbs up in the future to get the same effect.

**Inés:** Yeah, it's 2.5 thumbs up.

**Bridget:** Yes.

**Inés:** So yeah, that's mine. Nice.

**Bridget:** Okay. So yeah, this was super exciting. I have a couple of things to check out. I was tweeting yesterday that I saw an image of someone who was doing a rocket launch and she looked amazing, but I also really wanted the leggings she was wearing. So I Googled until I found them and they have circuit boards on them and they're from a company called Baumscheller. So I ordered the circuit board ones right before I fell asleep last night. And then I looked at their site some more this morning and I saw they also have Settlers of Catan leggings. So like, I'm going to have to purchase a lot of leggings. Like, it's coming towards winter and in winter conference season, like it's necessary to wear leggings so that you do not— and even in the summer, so you don't freeze in conference centers.

**James:** [00:50:33] You don't need excuses or justifications. I think it's a good purchase.

**Bridget:** I'm just saying it's important to have a variety of conference leggings for my conference uniform needs. But I'm also going to just drop a link in the show notes to my new team at Microsoft because I'm on the Cloud Developer Advocates team.

**Inés:** You guys have been growing like crazy, right?

**James:** Congratulations.

**Bridget:** Thank you. This is like, I've literally worked at Microsoft for one week now, um, so I still don't really know how to log into or use everything. There's a lot of things, um, that are confusing. Like they have this thing Teams and it's sort of like a cross between Slack and forums. I mean, there's just, there's many things that are sort of confusing that I'm learning, but, um, but we have a whole team of people who are really awesome. So, uh, the, um, Brian Kettleson and Eric St. Martin, who run GopherCon, are on the team. And Eric's first week was actually last week. So he and I got to like, you know, do new employee orientation and onboarding and stuff together. And I guess that's like my, my third recommendation is if you are hiring people, just hire 2 people at the same time, because having a new, especially if somebody has to go somewhere remotely for their first week of work, because if you think about it, all the people who work there want to go home to their families at night. They don't want to spend all week hanging out with a new employee who's in town. But if there's 2 of you, then you have like a buddy. So it's kind of the buddy system for hiring new employees, like, worked really well. So that was super fun. So yeah, I think, let's see, you can head over to arresteddevops.com/velocity for this episode's show notes, and the site has our newsletter and Patreon and all the Arrested DevOps stuff you could ever want. And you can visit arresteddevops.com/itunes and leave us a review in the iTunes store if you're into that sort of thing. Apparently, that helps people find the podcast through some mechanism that I don't understand because I don't understand iTunes. But yeah, so thank you so much, Ines and James, for joining today to talk about velocity.

**Inés:** [00:52:39] Bye, thanks for having us.

**James:** Thank you, thank you for having us, it's awesome.

**Inés:** Nice.

**Bridget:** I'm Brigid at Brigid Crumhill. This is Arrested DevOps, and remember, there's always DevOps in the banana stand.
