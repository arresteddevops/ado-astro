**Matty:** [00:00:07] Welcome to Arrested DevOps, Episode 41, Podcast Me Maybe. I'm your co-host, Matt Stratton, @MattStratton on Twitter.

**Trevor:** I'm your co-host, Trevor Hess, @TrevorGHess on Twitter.

**Bridget:** And I'm your co-host, Bridget Kromhout, @bridgetkromhout on Twitter.

**Trevor:** Arrested DevOps is brought to you by 10th Magnitude, a cloud services company that figures if you're listening to this podcast, you must be pretty cool. You can find out about joining our cloud services team at arresteddevops.com/10thmagnitude.

**Matty:** This episode is also sponsored by PagerDuty. PagerDuty eliminates the noise, chaos, and manual processes across the entire incident lifecycle to decrease resolution time. PagerDuty is trusted by companies like Etsy, Nike, and GitHub. To sign up for a free 14-day trial, visit arrestedevops.com/pagerduty. So, as we've promised in the past, but nobody probably remembers. If you write a review on the iTunes store at arresteddevops.com/itunes, we will read it on the air. So I was looking today and I saw we had one from August 3rd. So this is from the user IT Fargo, who gave us 5 stars and says, excited about the ops. Sadly, I only just now found this podcast. As I'm looking to move from my more manager-y ops role to a DevOps-type role and get dirty with the systems again, This podcast is getting me excited for everything that's out there I don't get to play with yet, for a job anyway. Excellent guests, great hosts, the topics are spot on, and it's helping me lose weight by making me want to take walks just to listen to the episodes. Thanks, IT Fargo.

**Trevor:** [00:01:41] Today we're catching up with Kyle Kingsbury, whose research on failure in distributed systems is the stuff of legend, or perhaps nightmares. Depending on exactly what data stores you're supporting in production. Kyle, will you tell us a little bit about what brought you to this very moment?

**Kyle:** Sure. So I've been running distributed systems in production for a few years now. And a lot of them are subject to interesting failure modes you might not predict. So Jepsen is an effort to systematically verify how distributed systems fail and take footage of them doing this in slow motion, share the analyses with the public.

**Bridget:** That's actually great that you're starting with Jepsen, Kyle, because, you know, a longtime reader/fan, first-time podcast interviewer, can you give us a little bit of a background about the Jepsen tool that, of course, you developed, starting with why is it called Jepsen?

**Kyle:** Well, there's that great song, you know, Call Me Maybe by Carly Rae Jepsen, and it's all about miscommunication and not knowing if the cute boy across the street likes you or not, or if he got your note. Maybe he likes your your friend instead. So this is basically what computers are doing all the time, at least in my, my head. You send a message off to a database and maybe it got it, maybe it didn't, and there's all this confusion. I named it Jepson and did a bunch of silly pop song references inside the codebase and in the blog posts.

**Matty:** [00:03:03] I need to give a quick little double shout out. Apparently listener IT Fargo is listening to us live because he just tweeted at us, thank you. So there's your second shout out. So see, leave us reviews, we will make you internet famous. Alright, back to the topic at hand.

**Bridget:** So Kyle, when you first started working on Jepsen, what made you decide to make an actual tool as opposed to, you know, just writing ranty tweets or blog posts or tearing your hair out or, you know, just doing a lot of squats in the Smith cage or whatever?

**Kyle:** So I did all those things first and wanted to escalate to something that would be a little more systematic. People in the distributed systems literature have talked about the sort of theoretical bounds on computer system safety, but those haven't always been translated into practice. And it's not always clear, like, does a theoretical error correspond to a real failure that we should care about? Is it transient? Are we going to lose a few seconds, a few months worth of data? I wanted to quantify the errors as best I could and try to understand what are the pragmatic implications, and then talk about those theoretical limits in ways that people like me who aren't as theoretically inclined can understand.

**Matty:** [00:04:16] So is that kind of putting, almost assigning value to those things and weighting them? Is that, in my kind of layman's terms, am I reading that correct?

**Kyle:** I look at my role in Jepsen as being sort of an interpreter, trying to be the practice where I come from of running distributed systems for production, bridging that to the distributed systems theory and literature and trying to figure out how to make those ideas intelligible. And there's another side, which is giving feedback to the literature people, and hopefully we'll get better theory out of it as well.

**Bridget:** Now I know that— I mean, I've talked to people like at OSCON, I was in a Birds of a Feather session with the RethinkDB people, and they were talking about taking the Jebsen suite and running it against their database. Do you get a lot of people telling you that they're actually taking this tool and trying it out themselves against their actual database? That they're developing? Like, you're saying you're reaching out to the theory community, but how about these practitioners?

**Kyle:** Most of what I do is back and forth with the vendors and practitioners, and I think there are probably, I don't know, 6 to 10 sort of people or teams who are actively using JEPSON in some capacity. It's not always— oftentimes they run it internally. Maybe they get one result and abandon it. Maybe they use it continuously. I don't get a whole lot of feedback. I know there's a few students using it for research projects. There are companies like RethinkDB and DataStax that use it to test the safety of their distributed systems. And then I'm continuing to pump out new analyses each 3 months or so.

**Bridget:** [00:05:47] How— I mean, other than, you know, hey, MongoDB, Elasticsearch, these are things a lot of people are talking about, I'll put that one through the Jepsen wringer. Like, how do you decide which ones you're gonna go after next?

**Kyle:** I like interesting things. I do test at Stripe as well for our own systems. And oftentimes those are more particular.

**Trevor:** They're not—

**Kyle:** if there's no generalizable lesson, I don't really want to write about it. So I want to choose things that will be either they're widely deployed and so the impact is high, or they have a particularly interesting failure mode to talk about, or maybe they've got really egregious marketing and I think like they need to be, you know, sort of brought to task for that. There's a number of sort of avenues that you could take one of those posts down. I think pragmatically it's a mixture of trying to be educational for users, trying to help improve the quality of software by reporting bugs, and then helping people make better evaluation decisions about what databases should I use, which ones can provide the invariants that I need.

**Matty:** What things have surprised you in your evaluation?

**Kyle:** [00:06:50] There's endless ways for things to fail.

**Matty:** I love it.

**Kyle:** Like today I was working with Kronos and Mesos. And one of the interesting design choices that they make is that when a network service becomes unavailable, like they use ZooKeeper, so when ZooKeeper's connection to Kronos is lost, Kronos will simply give up on life and shoot itself in the head. It doesn't try to reconnect, it doesn't try to wait for a bit, instead it just says, well, this is the end of the world, everything is terrible, and that's game over. So I was like, well, this is unusual because most software I've worked with typically, like, it'll do a background reconnection and then operations will proceed. Because typically some parts of the software will keep working even though maybe writes will fail, you could still service reads, maybe you could still offer operational metrics or logging or something. And they were saying, well, we have to do this for safety reasons. We have to shut down or else it would be unsafe. I was like, oh, okay, so what do you do to restore? And like, oh, well, you automatically restart the process. Like, all right, so it's unsafe for it to run, but it's also unsafe for it to be stopped, so we should automatically restart it so that it will stop again. It was just this— really unusual bizarre things happen. That's, that's today's. But it just— the list goes on and on. Like, uh, NeoDB claimed to beat the CAP theorem, and the way they did it was by not doing any operations during a network failure. They would just buffer everything in RAM. Cassandra had a transactional system that would deadlock hard, and even when that patch was fixed or that that bug was fixed, they would lose transactions. Riak has this very strong, eventually consistent model for doing, you know, conflict resolution, which is not enabled by default. The default settings will lose phenomenal amounts of data during common use cases.

**Trevor:** [00:08:34] So what's next for Jepsen?

**Kyle:** I'm doing a talk in Berlin at Distributed Matters, and that's gonna be, I think, like September 19th-ish. And I'm going to present probably 3 new systems, one of which will be Kronos. And then I want to look at RethinkDB and maybe like a MySQL cluster or something like that. I'll have to get that research going here in the next few weeks. I've got the Kronos post underway now, and I've got about a week and a half each for the 2 other databases. So it's going to be a little tight.

**Bridget:** This seems to keep you really busy. Now I know you're working for Stripe. Can you kind of contextualize how this research relates to you working for Stripe, if at all?

**Kyle:** Yeah, so initially I did Jepsen as a free time project. And I would just go home every night and hack on this thing for 6 hours. And my boyfriend would look at me from the bed and go, why aren't you cuddling? And I'd be like, there's important things on the internet to fix.

**Bridget:** Some distributed data stores on the internet are wrong.

**Kyle:** Pretty much. It's like arguing with internet commenters, only it's like the things that store your data. So of course you automate that process. No, so I did this in my free time. I was giving all the talks in my free time and I really enjoyed it. It's like, it's something I feel passionate about. I love breaking things, I love understanding things, and I get to do something of a public service in the process. When Stripe approached me, Mark Hedlund reached out and said, hey, you know, we like the work you're doing. Stripe has Capture the Flag and a bunch of these other educational processes where we want to give back to the community. We think that the Jefferson research is really important for the community, and we'd also like you to internal systems and help give us better assurance. So my job at Stripe now is this combination of public outreach, it's sort of an associated halo effect in recruiting, and then also helping us make better technical decisions internally of what tools to use and what databases are safe, putting pressure on our vendors to fix their bugs.

**Bridget:** [00:10:24] I mean, that's— I think that's awesome because it kind of— it's speaking of this being great for your recruiting, I mean, We just had Andrew Clay Shafer on this podcast, and suddenly I'm going to work for him. These 2 things have nothing to do with each other. But I don't know, you may have to try to steal Trevor or something. It's like, hey Trevor, you want to go work for Stripe?

**Matty:** We actually did. Bridget is going to Pivotal mostly just to diversify the host lineup to not be so chef-specific.

**Bridget:** How do you know? I'm wearing a chef t-shirt right now.

**Trevor:** Oh, me too.

**Matty:** I'm not, and I'm the one that works there. I did tell Bridget that if she ever mentions Bosch, I'm gonna bleep it.

**Bridget:** And you know what, I gotta tell you, Matt, Bosch is apparently a pretty interesting tool. And I'm gonna say the word Bosch and just double-dog dare you to bleep me because I'm pretty sure that there's a rider in my non-existent contract that says there will be no bleeping, no fucking bleeping of me whatsoever.

**Matty:** [00:11:29] I'll remember that when I send you your non-existent paycheck. I was just gonna say, I'm kind of curious, like, again, where you're kind of overlaying it with the stuff that you're doing and how it overlaps with Stripe. I mean, so how is that actually— so since you've been doing that, what have you seen be the, I guess, the benefits to the, maybe to the project, or just even to you? What's changed?

**Kyle:** The big thing for me was that before, I was limited to doing these the next weekends. And I could only dedicate a few hours, and then in a burst of a month. It would take my whole life, you know, my finances would fall apart, my relationships, my house would be wrecks. I didn't see my friends. And so now I have an actual life, and I get to do all this research. That's really great. So in the first couple months, I turned out new results for Mongo, Elasticsearch, and Aerospike. I gave like 8 conference talks in 3 countries and 2 continents. It was a real, a real interesting spring. And now since I've gotten back, things have calmed down a little bit, and I'm doing more internal analyses, also some performance instrumentation.

**Bridget:** [00:12:39] That's fantastic. And I should also ask, because you actually did a really interesting write-up recently about not wanting to take a conference talk to a specific country for specific reasons, and it got me thinking about this intersection between culture and distributed systems. And I think you do a fantastic job of representing yourself as a full person who is not just, you know, Jeppsen guy cranking out distributed systems research. I was wondering if you wanted to talk a little bit about how looking at distributed systems and thinking about the intersection with the actual lives we all lead, you know, where that takes you in terms of your thought processes.

**Kyle:** I'm not sure if I look at it as a matter of intersectionality because it's not clear to me that— I mean, there's not that many, like, gay leather distributed systems analysts, although a lot of distributed systems people are inherently somewhat masochistic.

**Bridget:** [00:13:40] Don't we have to be?

**Kyle:** And I think my role as, you know, sort of systems analyst is like inherently DOM top, right? I'm just beating them until they cry and emit terrible results. But, you know, it's all consensual. We have to have a nice conversation in the prelude. We set up a safe environment to run in and journal all the results and report things correctly. Hopefully the way this is done is respectful to the users and to the vendors while not being so polite that nobody takes any notice or feels leverage to change things. I can certainly be overly snarky at times, and so I want to try to balance that as best I can without losing any sense of personality.

**Matty:** Richard Hintz commented on our Google page about this episode with a question that actually I think plays right into what you just said. Well, maybe not exactly, because that would be oddly specific, but he said that, I read someone claim that Oracle terms of service expressly disallow Jepsen-type investigation of their products. Is this accurate?

**Kyle:** [00:14:44] Yeah, I've heard it from several people. I haven't actually looked at the TOS myself, but there is, there's definitely a clause. I think this was in DB2 or something. Don't, don't quote me on it. Um, there was, there's some case where somebody did analysis of a database and it resulted in like, I think some sort of lawsuit or cease and desist or like license change that, you know, they basically changed license and said you cannot do this kind of performance analysis anymore because it's like poorly on them. So that, that does limit what I can do with Jepsen, and I would not at all be surprised if Oracle's terms are that way. Also, I don't have like— I specced out a rack system once and was like, oh, I don't have $5.8 million.

**Matty:** I was just gonna say, how are you gonna do that anyway?

**Kyle:** Yeah, oftentimes like a smaller commercial vendor like Atomic will offer me a license for free for evaluation. That's only happened with Atomic, and I wasn't able to get it running, um, in the time I had, so that never came to fruition. But I'm totally open to doing closed source stuff as well, especially where it's relevant. To a large user base. It tends to be harder to debug too and harder to automatically set up because you have to, like, deal with licensing keys and figure out how to store the secrets in the repo, all that stuff.

**Bridget:** [00:15:50] I saw you speak at Monitorama in Portland this spring, and you actually weren't talking about Jepsen. You were talking about Reaman. So I want to switch gears for a minute and ask you to maybe fill our listeners in a little on your Reaman project. And what sort of interesting stuff that's led you to learn and think about.

**Kyle:** So ReMon was a monitoring system that I built after being a monitoring person for a little while. I was very frustrated with the existing tools of RRDTool and Cacti and Nagios and all these awful PHP programs that I used to maintain. And I started to realize that ultimately monitoring tools had all these hacked-together scripts and weird components that were specific to your infrastructure. And I started to think more and more that what you needed was a normalized way to describe things that happen in the world, transform them, recombine them, write programs to deal with them, and have some sort of like well-packaged tested way to do this analysis. That was also— it had a simple enough mental model that you could understand it and actually work with it. So I wanted something that would be really configurable, highly compositional, with a well-defined interface to the outside world so that you could plug in different components to it and hopefully it would interoperate with stuff that solved the external problems like storage, visualization, analysis. I think Riemann, over the 5 or 6 iterations of Riemann that I wrote, this is the most recent one, has been pretty successful in meeting those goals. It has a very narrow scope, it does not do everything, it's not distributed, not fault tolerant, but it does give you a really configurable way to do complex monitoring and analysis on short time streams.

**Bridget:** [00:17:34] That's really interesting. Plus, it also gives you some really amazing hand-drawn slides. So we'll have a link in the show notes to Kyle's slides from Monitorama. But, you know, seeing the— what was it— the ghost of NGINX from API 8 or whatever, it was epic. I love that. And you wrote most of the— or at least the most current version of it, possibly, but maybe even all of it, I'm not positive, is in Clojure, right?

**Kyle:** Most of it's Clojure, yeah. There's some JavaScript for the front end, and there's some little demons that are in Ruby. But the core of the service is in Clojure.

**Bridget:** So for people who haven't written any Clojure, or maybe who are interested but haven't tried it yet, like, what led you to want to use Clojure? Can you talk a little bit about your decision-making process there, what you like?

**Kyle:** So as a preface, Riemann was not designed as you would ordinarily build a consumer product or even an open source product with an audience in mind. I built it explicitly for me, and I'm kind of a weirdo, so it makes a lot of design choices that might be considered by some to be unnatural. The use of S-expressions to represent the cascading stream logic, higher-order function composition, dynamic configuration. There's a lot of syntax tricks that make sense in Lisp but are weird if you don't know what's going on. So it leads to this kind of ongoing support burden where I'm forced to explain my own bizarre decisions to other people and apologize for them. It's a nice kind of purgatory in that way.

**Bridget:** [00:19:16] This comes back to the masochistic tendencies. Why do we do this to ourselves?

**Kyle:** It's a weird thing. Like, I mean, I'm both thrilled by how popular it became, and I love the idea that I've given something of value to the world. At the same time, you know, that thing of value that's helping people monitor infrastructure and get better, you know, visibility into their systems also comes with this ongoing support burden. So I've created pain in people's lives. And of course, I cannot satisfy all of the one-to-one educational requests that people would, you know, want me to provide. So I, you know, I put like anywhere from half an hour to 90 minutes every day into doing remon support on IRC and email and writing docs, and it just never, it never changes. The support load only goes up.

**Bridget:** As a, as the maintainer of an open source project, would you say that's someplace that people who want to contribute to open source and maybe don't know where to start could help? Like, is there anything that someone who isn't you could do In terms of your support.

**Kyle:** That thing, right? Like, if you, if you get in there and you understand the core, like, here's why Rayon works the way it does, and here's, you know, the common things about, like, how functional composition is misunderstood. People who step up and answer those questions in IRC are invaluable. And that's, you know, I try to promote as much of that to documentation as I can. But also there's this continual process of seeing where people's pain points are and, like, asking them, okay, how would you find this in the documentation? Where would you look for this information? And try to understand where they got locked up or they couldn't find something, and streamlining those paths as well as you can. That kind of gardening is a real skill. It takes a good writer, a good communicator, a good listener, and somebody who's empathetic, right? These are DevOps properties, right? The culture that we have to practice in our jobs. And I'm not very good at that. I am trying and getting better, but I think that's a sort of undervalued OSS skill, is not writing features or even analyzing pull requests, it's education.

**Matty:** [00:21:12] I have a question, and maybe I'm going to sound ignorant, but I usually do. That's part of my job sometimes. So in your bio, you say, you know, you're author of Jepsen, Riemann, and then you say Timelike and Tesser. So what are— I don't— I have no idea what those things are. And so don't take that as anything other than my own stupidity.

**Bridget:** I have no idea what they are either.

**Kyle:** No, these are just, you know, obscure things.

**Matty:** You need better marketing, Kyle. You can hire Brendan.

**Kyle:** So Tesser, actually, I wish Tesser was popular. I'll talk about that next. Um, Timelike was a weekend experiment. You remember back when there was that whole kerfuffle with Rap Genius and their queuing issues with dynos?

**Matty:** Oh yeah.

**Kyle:** And they wrote that like scathing review of how the change in the dynos made no sense. Like, you know, that's a completely valid thing, but let's also look at like, what would it take for Heroku to build this thing? What is Heroku's limitation on, on optimization?

**Matty:** How could you—

**Kyle:** so I wrote Timelike as a, as a tool to simulate load balancers and connection pooling and latencies. And it tried to do probabilistic, like Monte Carlo sampled simulations of latency outcomes in distributed systems where different components are calling out to each other. It was this like small little toy that turned out to be surprisingly nice for that kind of exploration. I think it got— it never got used very much. A few people played with it and thought it was neat and used it for modeling some designs. I think actually It got used internally at Heroku for a bit. Tessr is a product I worked on most of last year, and that's a library for doing composition of folds. Just where you've got like a big collection of things and you want to kind of fold them up into one compact representation. So maybe you want to take a bunch of numbers and sum them, or a bunch of people and find like the distribution of their locations. It's a way to compute those things efficiently in parallel on multiple cores and across multiple machines, and then to compose multiple folds into ones that you can do all these operations in a single pass over the data and save yourself processing time.

**Matty:** [00:23:13] What do you think are the things that, you know, you talked about being kind of the interpreter or the go-between between the theorists and the literature side and the practitioner side. What are the things that you think practitioners miss or could learn more about or be smarter about when it comes to to looking at this type of information?

**Kyle:** Reading papers is really hard. I come from an academic background and it still takes me a week or more to get through a paper, and I have to know it's high quality because, you know, maybe you read a random result that's not very useful and it takes you all this time to understand it and it's not even relevant. There's a lack of kind of bridging literature that takes practitioners through the seminal papers that are really important in the field, and even then we don't have to read the papers to get the gist of it. So the work of Jepsen has been trying to distill my folky understanding of these mathematical invariants and try to present them in a way that's a little more palatable and pragmatic, even though it's not completely correct.

**Bridget:** It's actually one thing that I really appreciate about your blog posts, which is that you make the material, which can be very dense and mathematical— and hey, I have a computer science degree and I didn't emphasize in theory, so like I do actually understand Probably not all, but a lot of what you write. But like, you— I think you contextualize the stuff that you're writing about, which can be very dense, with a lot of personality and a lot of pop culture flair that gives it all of those hooks for people to try to approach it with some degree of understanding. I think that's fantastic. Like, I think a lot of people are not able to make difficult material as accessible as you can. So that's one thing that I really appreciate in the way you present material. What brought you to framing your analyses that way?

**Kyle:** [00:25:04] I've done some, some more sort of dry writing. You know, you're much better educated than I am. Like, I have one CS course to my name. It was like a basic data structures thing, right? All of my math is like analysis from physics and has no bearing on this kind of discrete stuff. So for me, it's also— in order to understand it myself, I have to rephrase it and kind of distill it in the writing. I think that helps because I have a poor memory and it takes me a long time to understand stuff. So by writing for my own weird brain, I can kind of maybe make it intelligible for others too.

**Matty:** That resonates with me. That's something I talk about a lot, which is that idea of of teaching to learn, right? You know, and so I, you know, always tell people, I'll tell people on the show now for anybody who's listening, right? So that exact example that Kyle gave, when you're trying to understand something, making yourself construct it into a blog post or something like that, even if you don't think anybody's going to read it, is a super good way to— because it's kind of like teaching it activates different neurons, right, than hearing it and learning it. And it's just really powerful way to actually learn this stuff. I'm randomly going through this sort of vaguely a little bit right now with this talk I'm giving tomorrow. There's a demo portion of it that— this whole talk is about a theory that I have that I've not been able to completely prove that this functional thing would work. And trying to get it to work, I've learned more about some of Chef's technologies than I've learned in the years and years of using it because I've had to hack on it hard. But I never would have tried to do the things I'm trying to do if I sat down and said, well, I need to learn more about Chef Analytics or more about Chef Delivery. It was like trying to teach myself, or trying to— trying to— while I'm chewing it, and the purpose is of trying to then explain it. So I think that's really powerful to be able to do that, and I think more people should.

**Bridget:** [00:26:57] More people should practice conference-driven development.

**Kyle:** To return to what you're thinking about, Bridget, like, some of the writing is dry, and I think those articles get a lot less traction. Mostly it's like, oh, like, my sort of theory-oriented friends will enjoy it, but they don't seem to get the traction on Twitter or on the different news aggregators. And interestingly enough, the most snarky ones are often driven by a desire to piss off the same news aggregators. So Hacker News is terrible, right?

**Bridget:** Hacker— we all know Hacker News is weaponized privilege.

**Kyle:** So that's a good way to describe it.

**Bridget:** Yes, someone tweeted that last year, and it's just stuck with me.

**Kyle:** That's, that's a good one. So somebody on Hacker News is like, I just wrote this totally serious post, a couple of really quiet, dry comments in there, but it was almost no jokes. Somebody takes offense at the title being Call Me Maybe. They're like, this is too informal. How do you ever expect to be taken seriously? I'm like, okay, so this is my most boring writing and you're mad about the title? Fine. So the next one I write is full of nothing but Barbie GIFs taken from Popular Girls in School, which is this terrible, deeply problematic, like, sort of Mean Girls writ large web series. And they did not like that at all. People got so mad. And the great bit is like watching them struggle with like, I really want to present this to my boss, but it's too inappropriate. I can't show them these GIFs. So can you like make a different version of the article that has all the information but none of the Not the gist, because it's—

**Bridget:** [00:28:35] are these the people who you're usually saying, welcome to my new CTO followers?

**Kyle:** Oh yeah, I always kind of question, because the followers stack on when I do one of these posts, and then they slowly bleed off as they discover who I actually am, which is a crazy person. Let's be honest, that's an ableist bad word. I am a strange person.

**Bridget:** I actually, I find that I find the entire Kyle— I probably shouldn't say the entire Kyle package because that takes us to entirely different places.

**Kyle:** The package is not on the internet, please. Let's— I don't think.

**Bridget:** Right, right. The angles on your closure control light bulb selfies are very carefully chosen. And we need to talk about your light bulbs.

**Kyle:** We need to talk about them.

**Bridget:** Actually, before I even ask you any other questions, tell us about this desire to control your light bulbs with closure.

**Kyle:** Okay, so I had terrible lighting, and when I moved—

**Bridget:** [00:29:38] which has a really bad effect on one's jockstrap selfies, I'm told.

**Kyle:** Well, so this is important, right? Because in order to have great sex, one has to have a good scruff profile photo.

**Matty:** Sure, sure.

**Kyle:** Once you meet people in person, which is actually where Anyway, so, so there's this desire to have good lighting that you're meeting them in, I suppose. I think we're more successful. Scrubs has been very flaky for me. But anyway, so I was like, oh, you know, I want to, I want to have a good selfie game. So when I, when I moved in the house, I was like, all right, I'm gonna set up proper lights. And originally I was gonna put in like cheap, you know, $20 CFL fixtures or something from Craigslist. And I thought, well, you know, maybe I want like tunable You know, colors, maybe, maybe just like color temperature. And so then I went to a photography shop. I'm like, well, I'm doing this, I might as well get myself a lamp rig because I've wanted to do like indoor photography for a while and I've only done landscapes, so this would be a nice change. I'll get— and then I talk myself up to the $7,000 lighting rig, which is absurd.

**Matty:** As one does.

**Kyle:** I have no setting between like throwaway, don't care about it, and must be perfect. It's like when you, you're like, oh, I want a spatula. So you go on Amazon, you start reading spatula reviews, and after like 6 hours you're now the expert on spatula things.

**Matty:** [00:30:49] You came to that example way too quickly, Kyle.

**Bridget:** I did that with cutting boards. It's like, right, you get lost in, you get lost in like Google and then you find the Boardsmith, right, right? But so anyway, so what are these, what is this light bulb you ended up buying? Some sort of wireless light bulb?

**Kyle:** There's this kit called the Philips Hue, which I'm sure is a terrible security vulnerability. Like you can drive to my house and control my lights remotely.

**Matty:** And then, but you provide like some subliminal messaging to you or something like that, you know, with the—

**Kyle:** yeah, well, I want to, I want to hook it up. Well, so anyway, it's got like an HTTP API for this little— it's like a hardwired bridge that plugs into the router, and then it speaks Zigbee, which is this low-power mesh network, to the light bulbs. So you can set the color temperature and brightness of each bulb independently through this HTTP API. And of course they give you a phone app, but like ideally what I want to do is write like a genetic algorithm to like evolve lighting schemes in the room, and I'm like voting down and it would, you know, experiment. Or I want to do like programmatic analysis of music and then try to generate color schemes for like a given track listing. So, you know, oh, it's gonna be like a slow blues track, so it's like lower the lighting and do something more dramatic with reds.

**Trevor:** [00:32:06] That's really interesting. Have you seen any of the— there's— I forget what they're called, but there you can get those kind of lighting kits for your PC and to go around the edge of your monitor so that while you're playing a game, it'll match the ambiance of the game.

**Kyle:** Yeah, so, you know, as it turns out, like, I do photography, and so I've got a calibrated display, and I'm like, very— that has to be calibrated to a reference light in the room. So I almost always have this very neutral color scheme. I know that I've built all the fancy lights, they don't get as much use as I'd hoped.

**Matty:** I've been trying to justify the Wemo light switch that I bought recently And as both my roommate and my girlfriend pointed out, they're like, your light switch is like all of about 5 feet away from the bed. So why do you need this to turn the light? Or I said, well, for the ceiling fan. And it's like, I have a ceiling fan. It has a remote. It's the same thing. I'm like, you don't understand. Shut up.

**Kyle:** Yeah.

**Matty:** So it needs to be able to control the lights in my room with my voice. Oh, really?

**Kyle:** [00:33:07] So I wanted to be able to say like, computer, red alert. And it would, you know, do klaxons and light.

**Trevor:** I want that too.

**Matty:** Skipping ahead to my checkout, but one of my checkouts is that I got an Amazon Echo, and I was really— it's really disappointing in one way. It's disappointing in other ways in that it's ridiculous, but I also love it. But you can't assign the name of the agent that you're talking to, even though apparently in their commercials you can say computer lights and it would turn it on. But you'd have to say Alexa lights. I haven't hooked the light switch up yet, so I'll report back. And that's how that works. But you can ask for tea, Earl Grey, hot, and Alexa will reply and tell you that she's not a replicator.

**Bridget:** So yeah, that's, that's hilarious.

**Trevor:** That was my biggest frustration with Google Now.

**Matty:** You couldn't call it computer?

**Trevor:** Yeah. Which, given the, given the like seldom times that Google will accidentally think I'm trying to say Google Now, it's probably a good thing it doesn't respond to computer.

**Bridget:** What I was gonna say is, uh, Kyle, I do follow you on Twitter, and so I have noticed that you seem to be taking excellent photographs with your exciting new lights.

**Matty:** [00:34:13] So you've upped the selfie game, in other words.

**Kyle:** Oh yeah, so the selfie game has been upped. I wound up— there's like this random open-source project, of course, that hooks up your DSLR's USB port to like a little UDP server, and that can talk to the Wi-Fi bridge which can talk to an app on your phone so you can get like a remote shutter with a preview display and everything. So my selfies are actually now like DSLR run via this computer bridge and it's out of control. The A/B testing, however, indicates that it's doing its job.

**Bridget:** That is fantastic.

**Matty:** You got the data, right? You know, you can't argue with data.

**Bridget:** I do want to ask you about something a little bit squishier and maybe not as easy to A/B test, but I'm joking, by the way.

**Kyle:** Don't actually A/B test this.

**Bridget:** Okay, so you write a lot of really cool and interesting and good stuff about failure states in distributed systems. You also talk a bunch about BDSM. And it occurs to me that they have maybe, other than the there's masochism everywhere, they have something in common, which is this idea of consent between people. And then the idea that you need, say, to be write-safe or to have the idea of ACKing in your distributed system. And there's something that I've been noodling with. I'm doing a talk at the end of September at Operability.io in London about distributed systems and teams and where exactly does partition tolerance fall when it comes to people interacting. And so I'm just kind of basically interested in coming up with the Kyle Kingsbury approach to when people are interacting and systems are interacting, how are those things the same? How are those things different, especially when they need that kind of handshaking, like in something as important as consent?

**Kyle:** [00:36:04] You know, this is an interesting question, right? Because consent is not binary. Like oftentimes when you talk about an algorithm like Raft or Paxos, you have a very strict orderly progression and things are proven to be correct. I think when you're dealing with people, there are more subtle questions about gradations of trust, about different contexts. Yes, let's do an impact play scene. I consent to this. I trust you. Let's try it. They're physically okay, but as you, as you hit them and you're not going that hard, they're not showing any signs until suddenly they have some sort of psychological break. And it turns out that they did not remember to think about an abusive relationship in the past and that this was, this was a danger for them. And suddenly now you have this more complicated discussion Which can be cathartic but also difficult work. I have no idea how that actually relates to a more formal notion of hacking. In latency terms, I mean, there's always something about the closeness of a loop when you're dealing with a team, right? The closer you are to the people, the more quickly you could talk back and forth, the easier it is to build empathy. I think distributed systems too, once you get to longer and longer characteristic timescales, in order to achieve safety or certainty, you get these sort of characteristic phase shifts once the boundary is like how long a user is willing to wait. There might be some sort of phase transition there. But I think these are probably fuzzy analogies at best.

**Bridget:** [00:37:29] I like that though, because I think it's— and this is one of the things that I really appreciate about the fact that you put everything out there, is that you're reminding everyone that, hey, We are complicated people and we're dealing with complicated systems, and those 2 things are not that dissimilar. Like, there's a lot of layers, a lot of complexity there, and it's important to recognize that, you know, being distributed systems researcher, you know, gay in the leather scene, this is, this is not something that you can decouple and just say, I'm only going to pay attention to these parts of Kyle. Like, nope, you get Kyle. This is what you got.

**Kyle:** I mean, it's definitely that, but you know, I think afer.com at this point has become— like, it was a personal site and an artistic expression for me about photography. Now it's pretty much limited to distributed systems research, and I've actually moved the personal writing off-site onto Tumblr because a number of reasons. I wanted it to be an academic resource that's available for students. I think in those contexts it's more difficult for them to deal with the integration of a whole persona. On Twitter, you know, you're interacting with a person, not necessarily a topic, and so there's that notion of like projecting yourself into a certain subspace of your personality doesn't apply as much.

**Matty:** [00:38:52] Yeah, I think I would agree. I think that it's not disingenuous or anything like that to focus different areas that way. Not necessarily because you're not hiding anything, right? But it's about just the, hey, okay, you know, like Bridget said, the whole package, we're all a whole person. But that being said, you may only be interested in part of me, and that's okay, right? You know, and you don't need to know all the parts of me to be interested in that thing that you care about. But you can't decouple from the fact that that's who I am. But, you know, if I want to learn about distributed systems, that's maybe the only thing I care about, and I want a focused place to read about that, maybe. Or vice versa, right? Someone who's interested in photography probably doesn't care about this other type. I actually have the exact counter effect where when I was blogging much more personally and I would intersperse a lot more technical stuff, the people who were interested in the personal stuff would say, I don't care about this. I don't care about DevOps. I don't care about technology operations. So I think filtering— I don't even want to call it filtering. It's more like focusing. We're routing it, if we're going to keep this kind of system analogy.

**Kyle:** [00:40:01] And it's funny, there's a lot of my leather friends who follow me and are like, I have no idea what the computer stuff is. Could you dial it back, please, for a minute? So it's kind of a fun balance there. On the flip side, I think there's something that I am very conscious of in my technical writing, which is, you know, I certainly have interests that don't make it into technical stuff. So I don't talk about my video games or guitar or everything else, like, in in my writing for Jepson, but I'm really cognizant of sort of basic issues about inclusion, human rights, or to try to be. So in the talk slides, I want to make sure that I have people of various genders, different presentations, different skin tones, different abilities and dress and all that. Like, ideally I go beyond stick figure to giving a more specific and richly detailed picture of a field in an effort to make it easier to be what you see. In Jepson, like, if you, if you read, you'll notice there's cases where like I talk about a database visibility anomaly and it's because somebody changed their name from, you know, Charles to Josephine. And it's like, oh, you know what, you would be exposing this trans person's dead name to them and that database anomaly could have emotional consequences. It's a really quiet thing, but I also want to make sure that if you're reading along, you get that little snippet where you seem like, oh yeah, that's, that's like me. I don't know, it's something that I was always looking for as a person. You're always kind of like scanning for that subtext, and I want to try and give those hooks for everybody.

**Bridget:** [00:41:28] Yeah, no, I think that that's great. And like the stuff that you've done with like the pop culture framing as well, I've noticed that you definitely draw from a variety of sources with a variety of, you know, artists of different backgrounds and, you know, demographic ticky boxes and what have you. When you feel like you're representing your general, like, you know, your technical self, but also what you consider to be the self that you're presenting to the interwebs or whatever, are there specific things that you try to make sure that you put out there about yourself just so that people understand you as fully as you want them to?

**Kyle:** I mean, Twitter is pretty much me. Although there's a lot of jokes that are like, there's a lot of subtext and people take me way too seriously at times. There's always followers who are like, no, that's wrong. Like, okay, this is, this is a joke. It's an in thing. I'm talking to some friends.

**Bridget:** You're always married to various women, right?

**Kyle:** Yeah, my follower bio right now is like husband, father, Christian. I started talking to this researcher about socioeconomic stuff and kink research, and I was like, oh yeah, by the way, I should mention I'm actually not straight and married to this person. For purposes of this discussion, I'm actually a gay bottom man in San Francisco.

**Bridget:** [00:42:39] When you like see yourself, you know, continuing? You have, you know, projects you're going to continue to work on for Stripe, stuff you're going to continue working on for Jepsen. But I'm going to ask you kind of the interviewee question of where do you see yourself going with all of this stuff? When you're visualizing future Kyle, and future Kyle is some amount of time down the road, like, what do you want to be doing? What are all the exciting hopes and dreams of future Kyle?

**Kyle:** This is exactly where I want to be. You know, I'm— I was really hoping that I could either launch a nonprofit and get funding from DB companies to do this kind of analysis full-time, but then I would have to run all the logistical stuff myself, which is awful. I'm terrible with paperwork. So it's wonderful that a company has stepped up and said, hey, we consider this important. And to be able to do that at Stripe, it's just, it's really satisfying. I want to stay here as long as I can. Hopefully if that ever ends, I'll find somebody else to help me do this kind of research. Ultimately, I'm sure I'll get bored with doing this sort of thing, or it will become enough of a well-known problem that I can either specialize in a subfield or move on to some other thing. I might do more work on Riemann. I've got some theoretical designs, but since I'm not doing monitoring in my day-to-day job, my pressure to improve it is not as great. You know, most of what I'm focusing on now is correctness. I think it'd be fun to do language design. I've never written a compiler. That might be kind of fun to learn about.

**Bridget:** [00:43:58] I've never written a compiler. You and most of us, right?

**Kyle:** Yeah, like I never got those like core CS experiences, and I kind of want to go and learn something.

**Matty:** You should write a language called Kyle.

**Kyle:** Hmm, it's— I have a design for one called Subscript, which is going to be a BDSM contract language where you have a negotiation with type system and the type system strictly enforces your compliance during the scene. So like instead of let bindings, you have beg for variables. And there has to be the right capitalization types versus vars. It's a thing. But I haven't written the compiler for it.

**Bridget:** Okay, that's hilarious. We are getting to the point where we have to wrap up. This is very entertaining to me. So, we have all sorts of—

**Matty:** This may be the most indulgent episode of Arrested DevOps, at least for Bridget, so far.

**Bridget:** I was like, we should have Kyle on. Like, okay, like, I want to talk to Kyle on the podcast. It'll be awesome.

**Matty:** [00:45:02] All right, so the part when I remind you that there are people who are actually assigned by their manager to listen to this show and they talk about it in their team meetings. This is gonna be awesome.

**Kyle:** Queering the discourse, by the way.

**Bridget:** No one told me that people listening to us was their, like, homework.

**Matty:** Have I not told you that?

**Trevor:** No.

**Matty:** Oh yeah, yeah, I totally do. Oh yeah, it's kind of awesome. It kind of freaks me out. I think I didn't tell you that.

**Bridget:** You didn't tell me that on purpose because you knew that I was like, uh, about being the responsible adult in the room.

**Kyle:** Okay, yeah, this is fucking cool. I'm certainly not responsible, Bridget. Somebody has to be.

**Bridget:** Okay, so on that note, we have all sorts of upcoming conferences. There's OpenCFPs, um, there's a number of OpenCFPs right now, calls for participation, on devopsdays.org. If you, if you would like to speak at a DevOps Days in the US, in Europe, in Asia, in the Middle East, there's a variety of choices. So take a look.

**Matty:** [00:46:04] Yeah, theoretically we are a media sponsor of Ohio, but we haven't figured it out. So by the time we have the next recording, we'll probably have a discount code for you for DevOps Days Ohio, which is towards the end of November. So there's that. We do have a discount code for Chicago, but by the time you hear this, it's probably too late. But if you do, it's ADO10 for 10% off. For the rest of the DevOps listeners to DevOps Days Chicago. So the Chef Community Summit is October 14th and 15th in Seattle. If you go to chef.io/summit, I realized today that I forgot to ask Nathan for a discount code for listeners, but I'll try to figure out if we can wrangle one and we'll try to put that up for next episode. I'm gonna be there. I just see in the Google Doc that Trevor just said he's gonna be there.

**Trevor:** I did.

**Matty:** One way or another, I'm gonna be there.

**Bridget:** I'm going to the Boss Community Summit, so she won't be there. Will definitely not be there because I'm pretty sure that's the same week as Velocity New York. So where I'm going to be—

**Trevor:** [00:47:05] because I—

**Matty:** Mike Fiedler is going to kill us.

**Bridget:** Yeah, probably. Probably. So where I'm going to be since I've joined Pivotal, I'm pretty sure I'm going to be at VMworld, which should be interesting. And that's the first week in September in San Francisco. So maybe, maybe I'll try to run into Kyle. Who I did get to meet in person briefly at Monitorama. I think we walked to the food trucks or something, didn't we, Kyle?

**Kyle:** Oh, we talked for quite a while in the lobby.

**Bridget:** Well, yeah, and we were chatting in the lobby, which was delightful. That was fun. Yes, I remember now. We talked about fanfic. Good times. Yeah, I will not be speaking at VMworld. I will be speaking at various and sundry conferences in September and October.

**Matty:** Yeah, I've got a bunch coming up. I'm gonna be at Cloud Develop in Columbus, which is, I think, October 14th, but don't hold me to that. But wait, you can find it out.

**Bridget:** Community Summit?

**Matty:** No, that, that can't be right. So it's before that. It's the Friday before. So it's like maybe it's the 8th or 9th.

**Bridget:** [00:48:07] Are you having conference brain, Matt? Aren't you at a conference?

**Matty:** Like, I just go where Trippett tells me to go.

**Bridget:** But are you like literally at a conference?

**Matty:** I am. I'm at that conference, which is in the Wisconsin Dells, and I gotta tell you, I Y'all should come to this thing. It's really—

**Bridget:** it's—

**Matty:** they call it summer camp for geeks. It's like at a water park. It's bizarrely cool. And the— I don't know how many people are here. It's got to be 600 or 700, I would say. I could be wrong, but seems like an awful lot. And I'm bummed because I'm gonna have to leave tomorrow. I'm not gonna be here all week because I'm gonna go see a customer and do my real job. But I— this was super cool. Yeah, I'm speaking tomorrow, but I would definitely come back and would recommend people check it out. It's a very different conference, very much. There's fam— there's like kid tracks. So people are here with their families and they have, you know, they did gave talks. They had sessions today for kids about like programming helicopters and all sorts of crazy stuff. It was pretty cool. Um, and yeah, also I'll be at DevOps Day Chicago, which is August 25th and 26th. Uh, I could never say that right. 26th. I'm not speaking, I'm organizing, so I'll be running around like crazy, but—

**Trevor:** [00:49:17] I'll be there speaking.

**Kyle:** Yeah, there you go.

**Trevor:** Contributing to open source as a lightning talk.

**Bridget:** Nice.

**Trevor:** It's gonna be fun.

**Bridget:** So, Kyle, if people want to see you in action speaking, or, I don't know, stalk you while you're lifting or whatever, like, where can people run into you in the next month or two?

**Kyle:** Well, if you want to come and lift at SF Fitness Soma, you're welcome to join me for squats. The next conference I'm speaking at is going to be Berlin, and that's, I think, like September 19th at Distributed Matters. That should be a lot of fun. I've been to Berlin. And then I'm speaking at High Performance Transactional Systems at NASA Lamarr, and that's right after. I think that's all I've got for the rest of the year. I was so burned out after conference season in the spring that I'm trying to keep it a little bit easy. Pick up next year.

**Bridget:** Is this your first visit to Berlin?

**Kyle:** First time in Germany, yeah.

**Bridget:** My sister's husband has a brother who lives in Berlin with his husband who I should totally introduce you to. Maybe they can tell you things about Berlin.

**Kyle:** [00:50:26] Nice.

**Bridget:** I have no idea if they would, you know, be doing any of the same exciting things in Berlin that you are into, but they could at least possibly say This is good, this is not.

**Kyle:** I hear there's actually an abandoned airfield which they've converted to a giant art installation of some kind. I don't know if you'll see that.

**Matty:** So what do you have, Kyle? Do you have a checkout for our listeners?

**Kyle:** I do. I want to recommend that folks who like oceans and video games go take a look at Subnautica, which is developed by a local game shop here in San Francisco called Unknown Worlds. And it's your spaceship crash lands on this ocean world and you're the only survivor in your little life pod and you swim around this beautiful ocean with all these different reefs and creatures and find raw materials and build little bases and submarines and go exploring. It's a wonderful kind of nonviolent, non-directed exploration game.

**Bridget:** Nice. Okay, so I have a couple of checkouts. One is this Netflix show called— or a show that's on Netflix anyway, I'm not sure if Netflix made it or what, but it's called Sense8 and Kyle is one of the people who I saw tweeting about this, like Kyle and Camille and my friend, former boss Tim Gross and a couple of other people all just kept saying you have to watch this and so I started watching it and I like it quite a bit. It's got a very strange MacGuffiny premise of, you know, people all like sharing each other's sensations kind of bleeding over, and they just experience something that's not happening where they are. It's where the other people who are psychically linked to them are. But what I like about it is that it has a wide array of humanity, and it's unremarked upon that these are not necessarily, you know, like all white male cishet, like, people you always see on TV, which is just really refreshing, and I like it quite a bit. And, uh, then the other thing is, like, I wasn't going to have a second checkout, but since Stratton really wants everyone to learn about Bosch, I'm gonna put a link to, um, a Bosch tutorial because, well, I have to go through this Bosch tutorial. I was gonna say, I know, during my fun employment Like my homework is to go through this Bosch tutorial so I have some idea what I'm looking at when I'm, you know, training with the ops team at Pivotal. So, because I'm not going to be doing ops, but I'm like, I'm actually, I'm literally reporting to Andrew Clay Shafer in the marketing department, which is way different. But I'm still going to spend— yes, exactly, heads explode. But I'm still gonna be like, you know, got my— get my hands in the tech and really understand it. So I'm gonna do a rotation or to with the ops team for the hosted Cloud Foundry stuff.

**Matty:** [00:53:17] All right, Mr. Haas.

**Trevor:** All right, so I just wanted to talk about the Alphabet announcement. That was— for those who haven't found it by the time that they're listening to this, Google has now subsidiaried themselves to a parent company called Alphabet. And what was kind of interesting and creepy, in my opinion, was Google pointed as an Easter egg in their, in their announcement pointed themselves towards the Hooli XYZ site from Silicon Valley. Hooli being the evil Google in the Silicon Valley universe.

**Matty:** I like this. As Julian Dunn said today, he said, you know, in other news, Facebook will rename themselves to Fixnum.

**Trevor:** So for my next checkout, while Jen and I were in Niagara Falls, because we missed it The week before, in Chicago, we watched the premiere of Dragon Ball Z: Resurrection F, which was the return of Frieza, for anybody who is into Dragon Ball Z. And it was actually, it was a really fantastic movie; it was a lot of fun. And then finally, on the way from Niagara to my grandmother's house, we stopped in Herkimer, New York. Which has these, has a unique quartz formation that they call Herkimer diamonds. They're dual-terminated quartz crystals, which means they have points on both ends instead of only one end, and they form in these little pockets inside the rocks, and you actually can go bust them out of the rocks, and you're not supposed to bust them out of the rocks. So the goal is actually to get them to, you're supposed to break them enough such that you can see into a pocket and actually see the crystal floating around inside. That's like the desired state for these crystals, but you can actually pop them out too, and they're these really cool crystal clear dual terminated quartz crystals. Unfortunately, they're in the car, so I have a picture of them in the show notes, but it was fun.

**Bridget:** [00:55:21] Matt? Awesome.

**Matty:** So I got 2 things. So as I alluded to, I mentioned earlier in the show, so I recently got an Amazon Echo. It's ridiculous. It's super indulgent. I mostly use it to find out what time it is in the middle of the night so I can call it out. As my coworker Sean said, he said, what, you don't just look at the Apple Watch? And I'm like, I said, well, I have to put my glasses on to read my watch.

**Trevor:** Wait, it's not charging?

**Matty:** It is charging. I can still look at it. And I also got the— and finished, just finished the build of the Avengers Helicarrier LEGO set. It is also ridiculous. But was super fun. It probably was about, I'd say, about a 15-hour build.

**Trevor:** How heavy is it?

**Matty:** It's not that heavy. It's like maybe, I don't know, maybe 5 pounds. It feels like maybe the most. No, but I thought it was cool. There's an awful lot of detail on it that you don't even see, like that you experience just by the build and then it's all covered up. So it was super fun. And as, as one of my friends said, she said, you have to let your children play with that Lord business. And I said, the box says 16 and up. And I, you know, rules are rules. So, you know, I bought some other Avengers younger sets for my kids to play with, and they can admire the Helicarrier from a distance.

**Trevor:** [00:56:37] Until they're 16.

**Matty:** Until they're 16. So we have a newsletter. It's at arrestedevops.com/bananastand. It is the best way to know about upcoming podcast episodes and cool news with DevOps. We also have an iPhone app if you're into that kind of thing, which you can download for free at arresteddevops.com/iphone.

**Trevor:** Thanks again to our sponsors. Be sure to visit them at arresteddevops.com/10thmagnitude and arresteddevops.com/pagerduty. Thanks again, Kyle, for joining us. And to our loyal listeners, if you enjoy Arrested DevOps, we would appreciate it if you would visit arresteddevops.com/itunes and leave us a review in the iTunes store. We'll read them on the air as demonstrated today, and you'll be internet famous, which is second only to real famous. We would love to know what you thought of this episode. Please leave us comments at arresteddevops.com/41.

**Matty:** That thing about internet famous comes from that silly trailer for the new Jem movie, which as ridiculous as it is, I swear to God, the thing makes me almost cry every time I see it. And since I have kids and go see Silly little kids movies. Actually awesome. I saw Shaun the Sheep this weekend. There's— I swear I get so angry because the trailer is so silly and I like get all teared up and it's annoying.

**Bridget:** [00:57:52] So I think that's wonderful. Wait, is this new Jem movie like Jem is truly outrageous? Jem?

**Matty:** Yes, it's like Jem and the Holograms, but like it's apparently not accurate.

**Bridget:** Is it live action?

**Matty:** It's live action. It's live action. Yeah. And it's— but the reason it like makes me get teared up is it's like her dad like passes away And like she's getting messages that he recorded before, and it's like all these things that happen when, you know, you have like a little girl or any little girl or any little kid.

**Bridget:** So there's— well, and there's, there's obviously tropes in there that fit really well with Jepsen too. So Kyle, there we go. Check out some new material there. All right, so be sure to check us out at arresteddevops.com or @ArrestedDevOps on Twitter. We're always happy to get your input, ideas, or feedback at shows@arresteddevops.com. Please let us know any ideas you have for future episodes, especially if they require Kyle to come back, because why not?

**Matty:** And we promise we do get the email. We actually had someone email us about an episode a few days ago, and Trudy was like, um, fellas and non-fellas and people and stuff, like, what about this? We're like, yeah, we'll get back to you. Sorry. So we're super embarrassed about that.

**Trevor:** [00:59:07] Yeah.

**Bridget:** Um, but anyway, so I'm Bridget @bridgetkremhout.

**Matty:** I'm Matt @mattstratton.

**Trevor:** And I'm Trevor @trevorghess.

**Bridget:** We're Arrested DevOps, and remember, there's always DevOps in the banana stand.
