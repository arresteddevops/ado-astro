**Charity:** [00:00:01] There's something so beautiful about leading with your curiosity.

**Matty:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm your host, Matt Stratton, and I'm your only host, which has been a while for that. But yeah, in this episode, we're going to have a little bit of fun. With some hot takes in the DevOps world. And the show notes for this episode can be found at arresteddevops.com/hottakes. Hot takes, not hot cakes. That's our pancakes episode. We'll be doing that one differently. But first, a word from our sponsors. Your application sits on layers of dynamic infrastructure and supporting services. Datadog brings you visibility into every part of your infrastructure, plus APM for monitoring your application's performance. Dashboarding, collaboration tools, and alerts let you develop your own workflow for observability and incident response. Datadog integrates seamlessly with all of your apps and systems, from Slack to Amazon Web Services, so you can get visibility in minutes. Go to arresteddevops.com/datadog to get started with Datadog and get a free t-shirt. With full observability, distributed tracing, and customizable visualizations, Datadog is loved and trusted by thousands of enterprises, including Salesforce, PagerDuty, and Zendesk. If you haven't tried Datadog at your company or on your side project, go to arresteddevops.com/datadog to get a free t-shirt and support Arrested DevOps. ChefConf will be held May 23rd through the 26th in Chicago. Chef has been a longtime supporter of the DevOps movement and of this podcast. ChefConf will have talks on infrastructure automation with Chef, compliance automation with Inspect, application automation with Habitat, and a ton of other relevant content. Register with the discount code ADO2018 to save 10%. Visit chefconf.com for all the details. And remember, code ADO2018 gets you 10% off the ticket price at chefconf.com. So the guests that I invited on to talk about hot takes and what everyone is doing wrong are some of my favorite people. And so we're going to take a minute to let them introduce themselves. So, when I say your name, just introduce yourself and tell us your favorite big lie about DevOps. Charity.

**Charity:** [00:02:36] Yeah, Charity. I am the co-founder and CEO of Honeycomb, longtime ops engineer, alcoholic. And my favorite big lie about DevOps is that there is one right way to do anything. Literally any advice. Anything that ever spouts off on the internet should be wrapped up in all of its context before logged over the wall, because there is nothing that is universally true.

**Matty:** So your favorite big lie is that everything's a lie?

**Charity:** Yeah, it's all a lie. It's lies all the way down.

**Jill:** Eric.

**Eric:** Howdy. My name's Eric Sigler, and I'm the head of DevOps at PagerDuty. I don't know what my job title means either, and I've been woken up at 3 AM more times than I ever, ever want to think about. The big lie for me for DevOps is, oh, we tried DevOps, it didn't work.

**Jill:** Excellent.

**Matty:** And our final panelist is Jill.

**Jill:** Hey y'all, I'm Jill. I'm the Senior Manager of Technical Recruiting at Fastly. And my favorite big lie about DevOps is that there is a finish line. You're done with DevOps.

**Matty:** [00:03:40] There's the lie of that we tried it and it didn't work, the lie of that we completely finished it, and the lie of that you can do it at all. So got it. This is going to be awesome. Also just thinking, I'm doing some quick mental math here. So we just did an episode with Andrew Clay Shafer and we realized he'd been on 5% of all of our shows. But Jill, I think you might be giving him a run for his money because I know you've been on at least 4, I think. And Charity, you've been on a couple too.

**Charity:** A couple times. Yeah.

**Jill:** I think this is 4 for me. Yeah.

**Matty:** We keep threatening to like just give the keys to Charity for a month and let her run with it.

**Charity:** Yep.

**Matty:** We've just been lucky that she's been too busy to do it.

**Jill:** That'd be awesome.

**Matty:** So before we get in, just for those of you who are listening and want to know, or listening and don't know, um, what is an actual hot take? So I, I looked up the definition because I was like, let's make sure, because who knows, it's not be the first time that I thought I knew what it meant and was totally wrong. This case I was fairly right, but the definition is it's a piece of commentary typically produced quickly in response to a recent event whose primary purpose is to attract attention, right? So it's sort of that quick little, wait, a thing happened. I gotta, I gotta say something, whether it's well thought out or not. And because I want some clicks or I want some attention, or I want people to think that I'm leading thoughts all over the place. I went to LinkedIn because I was getting bored of going to Twitter for ideas, but I asked for what they thought some of their favorite hot takes about DevOps were. And the first one I want to bring up, And I'm bringing this mostly because this is coming from my brother-in-law, who is not technical at all. That's not fair to say. He's a technical guy, but he knows how to make the jokes. But he wants to know if it really— if DevOps really is all about the cloud.

**Charity:** [00:05:29] No, I mean, you have to develop and ops in and out of the cloud. So no, but it's a very powerful tool. Because it allows so many things to be distracted and automated away.

**Matty:** I think it gives you the ability to focus on your core competency and leverage an economy of scale, right?

**Charity:** Yeah, that is what the cloud is, absolutely. But that doesn't mean— I mean, DevOps— God, I fucking hate arguments that start out with the definition of DevOps. But isn't it supposed to be about developers and operations going to heaven together, hand in hand? Isn't that what it is? So does it matter what platform you're on? I don't think so.

**Matty:** It is going up to the cloud. I just watched that Black Mirror episode, so I kind of get that now. One that I thought was actually— now that kind of joking, and Eric, I just wanted to give you the shout out. So not Eric Sigler, but Eric Javer, my brother-in-law who asked that, you know, wanted to feel like he was representing. Nilesh Nimkari said— so his hot take was pets versus cattle. He considers that a hot take. He's like, you know, people give a lot of flak to pets, but they are unavoidable. So to me, the hot take is that pets are unavoidable in an environment.

**Charity:** [00:06:39] Let me reframe that slightly. They are often unavoidable for some period of time. So I think of this a lot in the context of data versus stateless, right? Stateful versus stateless services. Stateless services, fuck it, toss it in the auto-scale group, do something, do anything. There's no excuse for a stateless pet. State is where it gets hard. It doesn't mean that it's impossible. It means that it takes more investment into automation and orchestration and like pushing around all that precious data so that it doesn't get lost. You should always try to treat your data nodes as though they were stateless nodes as much as possible. And yet, conversely, you can never treat them exactly like they're stateless nodes, right? So I feel like it's like that impossible goal that we're always going towards. It's just a question of whether it's actually worth your time to invest.

**Matty:** I was going to say, is there, is there a point of diminishing return on just how stateless your data nodes get?

**Charity:** Yeah.

**Eric:** Well, and it also depends on like the number of people you have to work on it, right? Like if you have one DevOps engineer and they are running around doing everything, maybe having them automate all of the failover, there's again that one corner case they don't know about and they don't find it until it's too late. Whereas if you have like—

**Charity:** [00:07:54] absolutely, there's all those edges.

**Jill:** That kind of sounds like if there's a tree in the woods and no one's there, like, does anyone hear it? That's like what a singular DevOps is. Is it really a DevOps if there's just one?

**Matty:** Is there singulars?

**Charity:** Deep, dude.

**Matty:** We have to remember it is a couple hours later for Jill, so she could be ahead of us some. That is sort of one of the things is, I guess, another hot take would be that you can, as I like to say, you can consider all the motherfucking ifs, right? Like, you're not gonna find everything that might possibly happen.

**Charity:** And you shouldn't try. It's about business values, you just said.

**Matty:** I'll put it in the show notes. I was just reading Bridget's great article, Containers Won't Fix Your Broken Culture, or as I call it, the collection of every funny thing that Bridget has said or heard in the last 2 and a half years. That's also very insightful. You know, she made the reference about, you know, Andrew Clay Shafer saying that our systems are in a state of continuous partial failure, right? That's the thing. What we've been in for a long time, right, is the scenario of tech leadership in a lot of organizations expecting this sort of prescient precog ability, Minority Report style, that, you know, we should know, we have these precogs that tell us, Nagios is a precog that tells us when this thing's going to happen. And I made this joke before. It's not a joke because it really happened, but it's funny, which I guess makes it a joke, would be, you know, something goes down in our CRM system at this company I was at. CTO comes to me and says, and her aunt, the first thing she asked is, why weren't we monitoring for that? And my answer is, well, because until this happened, I didn't know what could happen.

**Charity:** [00:09:34] This right here, this anecdote, I've lived this so many times. And this is literally why I started this company. Right. Because as systems are getting exponentially more complex, like the combinatorial explosion of all the possible things to monitor for, it's impossible. It's impossible and you shouldn't try. You have diminishing returns trying to predict the spectrum of things or combinations of things that will break. We need an approach that is much more like we do in business intelligence, where you ask a question and you iterate on it and you go where the data fucking takes you. You instead of expecting a check to point directly to the answer every time. It's like in BI, they don't start with a list of dashboards and pattern match with their eyeballs to see which one the current situation matches. That would be crazy.

**Matty:** So Jill, what are people doing wrong on the people side, do you think?

**Jill:** On the people side, like, I mean, same as on the system side, like where to start. I think that, uh, everything.

**Matty:** [00:10:42] All right, done. Show's over. So thanks for listening to Arrested DevOps. There's always DevOps in the banana stand.

**Charity:** What are they doing right then? What makes it worth being there?

**Jill:** So I think what people are doing right is they're— one thing I love actually about this computer world that we live in is there's a lot of people here who, for better or worse, like really give a shit. And yes, like, they might express those feels in ways that I don't always agree with, and, you know, whatever, but like, they care about what they're doing, or they want to care about what they're doing. And so me being able to help connect people to do that and give them a safe space to do so is why I stay here. But it's like putting all those pieces together that makes it a really difficult part.

**Charity:** Well, What was the most recent thing that you, like, DevOps-ly debugged in your org?

**Jill:** Well, so I think for me it's— and I actually gave a talk about this at DevOps Day Chicago a few years ago about, like, DevOps recruitment. And it's really just about communication. There's this, like, a tremendous breakdown between recruiting organizations and whomever they're supporting. In my case, engineering and product organizations typically. And so both folks think they know everything about everything, which they do in their own little silo, but we have to work together. So you have to talk to each other and bring your each individual expertise to the table. So I think it's about like finding those connections and yes, so not like if we're going to use a DevOps kind of scenario here, not like tossing candidates over the wall and see what sticks. In an eng environment, like understanding that environment, like learning what their culture is.

**Charity:** [00:12:29] Yeah, I think there's an analogy to be made here, qualitative versus quantitative research and end-to-end monitoring checks, right? You're saying you want to follow the candidate from the first touch to the very end of their tenure and understand how that experience is.

**Jill:** Yes, like if it— if and when it broke down, like When did it? And yeah, how can we make this into something quantitative and do it better next time? Find the patterns.

**Charity:** Much like with systems, you cannot monitor every person from end to end. It's not possible. You have to sample or aggregate.

**Jill:** Exactly.

**Matty:** It's interesting. There's actually, now that I'm thinking about this, similarly, this can be spoken of in a sales perspective in a lot of organizations. Being in a subscription-based software business yet again, as almost all software is these days, you know, churn is a thing, right? Churn is what we care about. ARR, that's annual recurring revenue or annual run rate, depending on who you talk to, for those of you that are listening, right? So one of the things that can happen in a lot of organizations is, so we talk about incentivization and you're like, well, you shouldn't only incent people by money. Well, guess what? You know how you incent salespeople? By money. Because otherwise they're not good salespeople. That's, that's the thing. And that's totally fine. But what happens is your traditional sales folks are quota-based. You have to sell X amount this quarter, close this amount of business this quarter, and you'll get paid. And the problem is in a subscription-based business, that land business is so expensive and so not where you are, right? It's expand and it's churn reduction. So when we think about this idea, this is where I'm bringing it back to, to, you know, Jill, when you're saying you have to bring the candidate through its lifecycle, or we talk about how you have to build it for operability. Now, by no means, just like we've talked about before, or by we, I mean the internet in the last 48 hours, you know, building software engineers, building reliable systems does not inherently mean they have to carry the pager, but they have a responsibility to build this in a way that will be operable and maintainable in the same way that a sales rep has a responsibility to properly qualify a lead and not oversell, right? I can't tell you how many times I've been in a situation where renewal time comes around and— or I've seen this, you know, it's time to renew and the customer goes, oh, well, I'm not going to renew, and it's because they were oversold, you know, hey, I sold you X widgets, Well, we only have Y. We don't need that many. And it looked great at the time. You're like, hey, great, Eric sold so many widgets to Big Corp. And Big Corp the next year goes, yeah, but we didn't need that many. So how do you, you know, think about all of our business processes? You have this front-loaded responsibility to build for, to build, dare I say, kind of almost, I don't wanna say rugged, but an operable, responsive, supportable customer, candidate, employee, system?

**Charity:** [00:15:36] If you think of DevOps as being this increasing, trying to tear down silos and cross-functional blah, blah, blah, one of the things that at Honeycomb we are very, very selective about is only hiring people who care about the business side. Selecting for engineers who are interested and curious and want to help, and vice versa. But it's not as unusual for business people to be interested in tech. But we find it incredibly off-putting when engineers set themselves apart from the other parts of the organization. And it's this weird hierarchical pecking order in Silicon Valley that's kind of enabled it for so long, but it's incredibly destructive. The business outcomes.

**Matty:** I think we do this as an industry subconsciously and consciously. I remember we had an early episode of the show, but we had someone on who was at the time a customer of mine, which required me to hold my tongue a little bit. But this person made the comment that the reason that DevOps was important is because it made the most important people in the organization more productive, i.e., the developers. And it was, you know, why can't it just be important?

**Charity:** [00:16:52] Why does it have to be the most important? Yeah, I'm with you. It's really, it's gross. It's dehumanizing. And I'm super guilty of this. You know, I'm guilty of all the things that I'm railing against. There's nothing like a fresh convert, right? Yeah, I've done, I've done all these things, but they're wrong. They're super wrong and they don't lead to better outcomes.

**Matty:** Let's talk about some things that could lead to better outcomes. A lot of times people feel that unless they are the CIO or the senior VP of infra or senior VP of engineering, they can't make a change. So what are some of the ways that whether you're a leader of a small team in a large organization, let's say you're leading a small feature team or a small infra team, part of IBM or something crazy, something big, or you're an individual contributor inside of an organization. So you don't really have the budget maybe to pay people more to be on-call or whatever we think is the right thing. But what are some of the ways to kind of build towards a more healthy culture around on-call and around operationalizing our software?

**Charity:** [00:18:05] So first of all, I think it's important to visualize the organization as like an inverted pyramid, right? With your users on the top, and you exist to support everyone above you. And just the visual flipping, like management's not a promotion, it's a change of career. Now you support people, you know? I like that way of visualizing and talking about it, because ultimately we're all here because of the experience that our users are paying us for. And if you don't feel invested in the success of your product, you probably shouldn't work there. And when I hear the way people get up on their high horse about being on call, I kind of just want to go, all right, do you care about the product succeeding? Does it need to be available 24/7? If it does, someone has to care for it. Now, are you passing the buck, or Are you putting some skin in the game? Right? And I'm not actually that dogmatic about how this happens. I'm not saying every engineer must be on call 24/7 or you're failing. There are lots of different configurations and mashups that are intensely humane and specific to on-the-ground teams and circumstances, but you all have to agree that you begin from a position of, we exist for our users, We will deliver what is necessary, and we're all in this together.

**Matty:** [00:19:30] One thing that I've been seeing, and I agree, and I want to actually talk about many different configurations. One thing that I became aware of when Rachel Byrne gave a talk at DevOps Days Chicago last year about incident command was how it gets done at PagerDuty, and it's that everybody has a chance to take a round at being on call in one way or another. I mean, it's not like, hey, Matt, who just got here, go be on call for our, you know, data replication system you've never heard of. That's just dumb. But here's the thing you can do to be— to take some of the weight off. But one of the things I've been seeing, I've been reading a lot of the Medium posts and the tweet storms and all this stuff. And Jill, maybe you have a little solidarity with me, and Eric, I know you're a Midwestern boy too, and you know, a little bit, actually, we probably all kind of comfort, but someone who currently lives in flyover country in tech, some of this pisses me off because a lot of people who work in flyover tech are not wanting to not be on call because they're too good for it or whatever. It's because they're not people, and they're not people who are working in tech because they want to be startup billionaires. They're, this is a way I can make a good living. And at the end of the day at 5 o'clock, I get on the commuter rail and I go home to my spouse and my kids, and I don't think about this shit again until I get on that commuter train again in the morning. And I show up and I have my coffee and I talk about the Bears, and then I start programming. And I think for people like that, it's not that they think they're better. That's a, that's a specific choice they made, right? It's like, I did not want this. I want a 9-to-5 job.

**Charity:** [00:21:09] I think that that's fine as long as everyone's honest with each other and clear up front about their availability. Now, there are lots of jobs in engineering that are not for 24/7 available services. Cool, you can work for them. There are lots of places, like, we have people with kids. I'm not so cruel that I would expect anyone to have a newborn and be on call, like, ever. Come on. There are lots of places who factor this sort of thing in. I am a fan of having multiple rotations, partly because I don't think that you can have a rotation that is larger than 6 or 7 weeks without people forgetting how to do the job every time. So some solutions that I've seen and implemented are you have a rotation that's for frontend bugs, that is intensely customer-facing, that that's very reactive and keeping your hands deep, but it's in a different part. There's no need to do that 24/7. And a backend one that's responsible for infra. It depends on the— it's context all the way down. But this is not necessarily saying that all outcomes have to be identical, but I do want to hear from the outset, yes, I'm in the same boat. I agree. I want this product to succeed, and I will do what it takes. Team requires of me. I've also seen people who cling so hard to the, I didn't sign up for this, I'm not— that they really cause their teammates to suffer. The team size temporarily dips down below 3, and you've got people who are on call 2 weeks out of every 3, and their teammates still won't pitch in. That's not okay.

**Eric:** [00:22:54] This is almost one of the, I would say, dirty secrets of DevOps and culture and whatnot. When you're changing a company's culture, if your team has not ever been on-call before or anything like that, or just doing something different, it doesn't even have to be on-call. It can be like how you're developing software. Some folks aren't going to like that. And some folks are going to say, that's not what I signed up for.

**Charity:** You have to let them go.

**Matty:** Yeah, exactly. Because that's, I think that's one of the hot takes or myths or whatever we want to call it, which is that Eventually, every software team, every feature team, every tech team is going to do this. That is likely not going to happen.

**Charity:** What is this?

**Matty:** Well, whatever. All this fanciness that we do. The DevOps.

**Eric:** I'm not entirely sure they're going to DevOps flight-critical hardware.

**Matty:** Well, what I'm getting at is that it's like Cool Hand Luke.

**Charity:** It's like, some men you just can't Some can't, that's true, and they can be the new COBOL programmers. There are places for them. But you have a responsibility to your organization and everyone else there to make sure everyone that you do have is on board, because there's nothing more destructive than a voice that's allowed to linger and spread rot from the inside.

**Matty:** [00:24:12] And it'll probably drive away your good folks that are trying to affect that change.

**Charity:** Drive away the good people. Fire fast. I'm all about— my hiring philosophy is so much increasingly biased towards opening the gates wider, being more willing to take a risk on people, and the flip side of that is being willing to manage people out sooner if it's not working, and aim for this to be communicated up front. This is how we work. We're going to try like hell to make you succeed. This doesn't work for everyone. We are a specific place for specific people at specific times in their lives. And like, no judgment. You could be amazing and still not interested in working on the problems that we need done, or needing more mentorship than we can really give you, or there are all these non-judgment-laden ways in which we cannot— it's like any other relationship, right? You can be dating the most amazing boy in the world who is not at the right point in his life.

**Matty:** [00:25:15] So I think if I'm going to bring it back to the question and look at the takeaways, where the question looking at how if you feel you are not in the position to affect this large change, which usually is not the case as much.

**Charity:** Oh, right, the question. If you feel like you're not in a position to make the change, either hold your breath jump, like take a risk, do it anyway, or leave. Because you should only want to work in organizations where every person is seen as having an ownership stake. And sometimes the only way to make this happen is to be willing to be the asshole and do it.

**Matty:** Well, what I was going to say is also, isn't it, these changes don't have to be revolutionary, turn the organization completely on its head.

**Charity:** You teach by doing.

**Matty:** I wanted to bring back to what Charity, what you're talking about is you were giving those examples, which were there's different patterns, right? The pattern you may think the pattern is I have to put everybody on call because we have to have all these things on there. But maybe you turn on its ear and go, do you really need to support this thing overnight?

**Charity:** [00:26:19] Yes.

**Matty:** Oh, well, we just always have, you know, and it's like, you know, it's again, the, the we've always done it that way is scar tissue from previous things, you know, and to be able to say, well, what really is the availability requirement for this? Or can you start to bring people in and say, hey, software engineer people, maybe you do this during the day.

**Charity:** Yeah, I think it's important to care more about less, about fewer things. Like, care more, but be very selective of what you care about. You can't care about everything. Your KPIs, the things that make you money, you know, these are the things that need your SLA. Think about how bad would it really be if this thing was in a degraded state for a couple hours during the night? It's not that bad. God, save your humans.

**Jill:** I think one thing that I notice a lot, I mean, not just in Eng world but in any, that drives me more and more crazy as I get older, is people who like to complain a lot and say, I can't make— like, we can't make changes, whatever, and don't even try to make the changes. So I— it bothers me that it's thought of as leadership is like that leadership is expected to be like the save-all, like that they are going to tell you exactly how to do everything and blah blah blah. And that's just not the case, nor is it in their job description. To do that. They hire you because you're smart and talented humans as well. So if you put in the effort to make those incremental changes— and I mean, if you are actually putting in effort and they're getting shot down, then maybe that job isn't your job.

**Charity:** [00:27:59] Yeah, so I, I've been pretty successful in my career despite being a fairly mediocre engineer, and I ascribe it almost completely to my overdeveloped sense of responsibility. And ownership for everything. You know, I think, and I see this way more clearly now that I am the CEO, goddamn it, anytime anyone feels responsibility for something and like a personal sense of identity and ownership, like they feel good about themselves when it works well and they feel like shit when it doesn't, you know, I, I'm just like, oh my god, thank you for taking that off my plate. I don't have to worry about it. And I see so much more clearly how much my natural style has just been a relief for my managers many times.

**Matty:** It's very easy to point out the flaw. It's very easy to point out the hole. I've always told people, you want to go to your— if you want something from your boss, go with something that's a nice, easy— well, have a solution. You want to ask a yes or no question, not a what should we do question.

**Charity:** It's exhausting to be brought all of these things are broken.

**Matty:** [00:29:00] Right. Yeah. And then what should we do about it? Well, figure— I had a CTO who, you know, we had software architects, you know, and engineers who would come to her and say, oh, we need to rebuild this thing, rebuild this thing. And she's like, great, give me the case, write me a case. And then they wouldn't. And she's like, well, how much could you care about it?

**Charity:** Yeah.

**Matty:** You know, like, basically she's saying, I bet we'll do this thing you want. I'm just asking you to show it to me instead of just saying we should do it. And then you give up. And I think that's, we get into, we get into it. And that can come from a couple of different places. It can come from our own scar tissue because sometimes we are in organizations where people argue with math, or we could be giving them the wrong math because we don't understand where they're coming from. It's one of the hardest things about making any kind of change in an organization is, you know what you need to be is you need to be a salesperson. And unless you're getting paid to do it, nobody likes to sell. And people, you know, but that's what you need to— but to be a salesperson in the good part of it, I was sorry, salespeople listening, that sounded bad to you, but figure it out, right? Like, what matters? I, I've given that silly love languages talk a bunch of times, and that's what it's about. What is the people that you're trying to convince? The value that you see in this change is not necessarily the exact same value that they're going to see. And like, the outcome is probably going to be similar, But they might not hear it in the same dialect. You have to learn how to talk to people, right? You have to learn how to, dare I say, empathize with them. I think we've gone along enough not saying empathy that we can say it again.

**Charity:** [00:30:36] Communication, though, is fucking hard. We've been reading this book, Crucial Conversations, and one of my marketing people gave a little in-house kind of talk about it, just like, how do you have hard conversations. You know, I did not learn this growing up or throughout my career, but it's been so— honestly, dating women is the main thing that's made me level up, because whatever. It's hard, and it is a skill. I think that we kind of assume that we show up as human beings with technical skill sets, and that's what we're hired for, and that is so not true. Like, we have to work on ourselves as human beings who are capable of being vulnerable and clear. All of these things. Really hard. What was the question? Sorry.

**Matty:** Why can't we just containerize everything?

**Charity:** Oh, I wanted to say something about that. So I love Bridget's talk. I've seen it and it's great. But the title, Containers Won't Fix Your Broken Culture, etc. I've sometimes seen people extrapolate that to mean tools can't help. Tools are bullshit. Your culture is blah blah blah blah blah. Very judgy, very broad. And like, tools and culture are incredibly symbiotic. And sometimes the right tool can in fact fix your broken fucking culture.

**Matty:** [00:32:09] We always look for simplification and generalization. And I mean that in terms of your, your, what you're saying, where someone looks at that, and I guarantee that someone who wants to make a hot take did not read that long article that Bridget wrote. They read the title and then they went and they wrote an article somewhere else that was like—

**Charity:** time and like focus to write a whole article.

**Matty:** Oh, they write it on those, uh, those DevOps blogs that have like 30 billion banner ads, even if you have ad block turned on, but, you know, when went like, oh, these DevOps consultants are just preaching culture all the time. Because that's the thing that there's that, that, that side that says, oh, it's not all about culture, are responding to talks and articles. I've realized that. And I think Charity, you nailed it, is there, it's this, what is that? USA, is it USA Today? What's the, what's the soundbite culture that started all that stupid bullshit. Is it USA Today? You know, the whole little like, I have to summarize this in like 2 sentences or less, right? Oh, okay. I read this thing that— and that was even— I've seen that response with Cindy's blog when I put it up there. It's like, well, I couldn't read the whole thing, but I extrapolated that the rest of it would be this. Oh, really? Well, I'm glad she wrote the whole thing then, because clearly, could she go to someone summed it up in the first paragraph and covered everything? I fell in this trap myself recently. With that fucking DevOps engineer recruiter blog post. So somebody shared this in a Slack and I looked at it and I kind of joshed about it. And it was a post from someone who has a recruiting firm in New York and it was called, Why are DevOps engineers so hard to find? And I read the first 3/4 of it, decided this was something I should kind of joke about a little bit, talked about it, proceeded to, after she replied to me on LinkedIn and said, I think we're more aligned than you think, and I was intending to be provocative. Read the last part of the post and went, oh, and to sort of quote Jack Nicholson in A Few Good Men, don't I feel like the fucking asshole? It's it's hard to not do that.

**Eric:** [00:34:17] But so so I'm trying to understand. In the hot takes episode, you're saying we shouldn't do hot takes.

**Matty:** Well, we should do them in this episode.

**Jill:** Okay.

**Matty:** Yeah.

**Charity:** Where we talk about how no one should ever do them. Absolutely. I'm on board.

**Matty:** That's one too. So, like, so we started the episode with, okay, God, I can't believe we're gonna define DevOps. And like, is this time for me to just give up on this DevOps engineer thing already and just deal? I wrote this thing on LinkedIn, which has been seen a bajillion times because LinkedIn's algorithm is nutty. If you don't include any outbound links, they assume that it must be worth reading. And it was in response to this thing. And my point was that the challenge of when you call the position DevOps engineer, again, I said, I don't really care what you call anybody. You can call the person the King of Spain for all I give a shit what they do. That's your internal job title problem. But I think it's a little bit of an org smell that you're thinking DevOps is an automation solution. Because most of the times when people say they are hiring a DevOps engineer, they are either talking about an automation engineer who is writing a whole bunch of Chef or Puppet, or they're talking about a rebranded sysadmin, which is just nothing different.

**Charity:** [00:35:30] Ops who writes code.

**Matty:** Right. And even if it's that, it's not even that. But I'm saying, when I say rebranded sysadmin, I just mean literally the same sysadmin you had yesterday. You just gave them a different name.

**Charity:** And should give them a raise.

**Matty:** Right. Well, you're not asking them to do anything different. You just gave them a new name. They're still changing tapes. And what happened is all the, of the hundreds of replies I got, it was all about why I was wrong for saying that you shouldn't call it a DevOps engineer. Why are we fighting about the word? This is blah, blah, blah. And I was like, well, my point was, I don't care about the word. My point was your use of the word implies something about how you think about the problem. So words matter. It goes back to your point, Charity. Communication is hard.

**Charity:** And I feel like the closer it gets to people in their lives, the more we have to be comfortable with personalization, with special cases. As an engineering manager, the hardest part to internalize was the vast swath of things that would never be fixed for good, right? Because they require constant vigilance and tweaking and updating, and people change. The questions that you ask people about who they were and what they wanted to do with their lives when they joined are no longer relevant either later. And the robots are coming for our jobs. Like, all this computer stuff, within a decade or two, it's all gonna be artificial intelligence. The human shit, I don't think— because we're all just gonna be managing other people. None of us are gonna ever touch machines.

**Matty:** [00:37:02] This is like 3 or 4 years ago, Doocy wrote that like short blog short story that was like the survivor of the automation wars. And it's like this dystopian futuristic thing about, you know, that all he does is, is do the wills of the automated machine, automated computer systems, because he's the last one.

**Jill:** It's—

**Matty:** that'll go in the show notes. But you're right, because people take that, that stuff really personally. And I think we're— we become like Charity, in your case, this is your product. This is your thing you made. Right? And if your title is DevOps engineer and then some asshole evangelist like me comes along and says, that's a stupid title. Yeah. You're probably going to be mad. Or if you built a practice of DevOps engineers, you're probably not going to read everything I wrote and see what I said. You're just going to, you're going to, you're a wounded animal now, right? You kick back. I don't really know the answer to that because other, from a, because 'Cause you can couch things as much as you want and people will argue with math, so to speak, but to realize that's a thing that happened. What is everybody doing wrong in podcasting these days?

**Charity:** [00:38:14] I love that question. Please answer it because I'm starting a podcast.

**Matty:** Oh, okay. First thing, don't start a podcast. Doing it, the first thing is not realizing how much freaking work it is, which, I mean, it's as much work as you want it to be. I had this conversation with another friend in a different, slightly different part of the tech industry who has, you know, really good success as a blogger and has a really popular newsletter. Keeping the person anonymous right now because I don't know if this person's going to actually do this thing. They reached out to me, said, hey, could you jump on a Hangout, kind of talk me through what you guys do with the show? And, you know, because I'm thinking about doing X, Y, and Z. So the best thing you can do is outsource as much of it as you can. Paul Reed will tell you that the number when you do it all by yourself, it's about 10 minutes for every minute of the show of effort. Really understand that you don't have as much control over the story that you think you do, because we have people that listen to the show that I never thought were our initial listeners. As we've talked about before, this was always supposed to be the intro to DevOps. You know, the joke is your boss read about DevOps in the in-flight magazine and asked you to DevOps some shit. So you listen to our show and then, you know, and then walked away going, I have no idea what to do. The thing that I would also say is when you think about it, it's not necessary for a podcast to be a panel or an interview show. In fact, Charity, I would love that if you were to do a show that was not one, that was just the Charity Cast.

**Charity:** [00:39:46] Oh geez, that's a lot of pressure.

**Matty:** I will tell you something, it's actually substantially easier than doing what we do. Because interviewing is a skill.

**Charity:** Yeah, but everybody's gonna hear everything that I have to say within like 1 or 2 episodes.

**Matty:** Uh, well, you'd be surprised. Also, every episode does not have to be an hour long. You know, you could— that's another thing that is just a bit of a thing for us, is part of me sits there and goes, I really would kind of make like to make these shorter, but it's hard because we have a lot to say and We kind of have a thing now. This is like the standard. I would tell you what I think people are doing wrong in tech podcasting. They are not being good interviewers necessarily. Not everybody. I'm mostly speaking about myself. I know that was not supposed to be self-deprecating. I'm just like, I talk more than I listen when I have people on the show.

**Charity:** Oh yeah, who doesn't?

**Matty:** Good podcasters. Scott Hanselman. When he interviews people. Paul Reed back in the Ship Show days. Paul is an excellent, excellent interviewer, but you don't have to, you know, hold yourself up to those. But I think part of the reason why I also would really like to see in our space a show that was not panel-based— and it doesn't have to be the Charity Cast where it's charity every time, but maybe it's a single host every time of a running thing It's just a very different feel. And there are shows I listen to that are outside of tech that are like that. And I learn a lot from them because they're more focused and they're a lot easier to produce because you can write your show notes in advance and you know which are the beats you're going to hit and you kind of get through it. The other thing that people aren't doing well, that people are doing wrong, is not publishing consistently because that sucks as a listener. I think we've been better and worse about it. But, well, that was kind of serious for an asshole.

**Jill:** [00:41:43] Everyone should end this episode in tears.

**Matty:** Yeah, that's right. You've had too much laughing on this show for the last 3-some years. The second 100 episodes of this show are going to be about crying.

**Charity:** This is why I say that all engineers should spend some time in management. Well, not all, but lots of senior engineers should spend a tour of duty because They don't understand how joyful their job is. You know, that constant dopamine drip of just like, oh, I fixed it. Oh, I learned it. Oh, I did this. It's just, it's really hard to disconnect from. And the more you get over to the people side of things, the more it's sad. Well, the more you don't get that feedback loop. The more people are never grateful, never notice you. They don't— we're 2 years in and I just got thanks. We do this thing in our all-hands where we give thanks to each other. For the first time ever last week, somebody gave me thanks for something. Nobody notices when it's done well. They notice it when it isn't. So you get a steady stream of the anti-dopamine, basically. And you have to believe in whatever the fuck it is you're doing, that it is worth that, because engineering is the best job in the world.

**Matty:** [00:42:59] Well, that's, that's like being a corporate lawyer. You don't get incentive. You don't get recognized for every time you write a great contract. You get penalized every time the company gets sued.

**Charity:** That's the story of ops, like good ops people, good security people, good lawyers. They're all the same.

**Matty:** Yeah. And customer success, nobody cares if nobody knows about all the great things you've done to enable a customer. They just know when that customer churned and you didn't save the churn, right? Or they, again, ops, nobody knows what you do until the site is down and you aren't fixing it fast enough. But, and software engineers, they have a deliverable. They have an artifact that happens all the time. They make a thing and it's beautiful, or at least acceptable. It's good enough. Celebrate your mediocrity, your acceptableness. Back in college, I had friends in a band. And we're there sitting around in my buddy's kitchen trying to figure out, because they were like writing their little press kit and, you know, and they're like, you know, trying to figure out how you would describe their sound. And my buddy turns to his dad, he goes, Dad, how would you describe our music? And he goes, adequate.

**Charity:** [00:44:07] I love that answer. That's great.

**Matty:** Adequate. That's how I describe my solutions.

**Charity:** Adequate. That's high praise.

**Eric:** Doing, doing the tour of duty though, you know, like Taking time to go and actually listen to customer calls if you're a software engineer or being, you know, if not a full engineering manager, at least being a team lead. So, you know, double the responsibility and none of the authority. All of those are basically stepping away from what you're supposed to be, you know, what a lot of people would say they're supposed to be doing and doing something different. And that goes all the way back to giving a shit about your job.

**Jill:** Right.

**Charity:** Life's too short. Don't work someplace you don't care about or that doesn't care about you.

**Matty:** Doing those rounds, though, are really powerful, even if it's unofficial. I had one time when I was at apartments, just through virtue of an office move, my senior sysadmin and I sat next to a sales guy for like a week. And I was like, after that week of just listening to him on the phone, I was like, I understand our business so much better now. You know, and it wasn't even actively, it wasn't like a, it's a pairing activity. It was just like, I sat next to a salesperson all day for a week.

**Charity:** [00:45:17] That's something really awesome as they grew, where they did exchange programs internally, where they had a technical rotation that was accessible for non-technical folks to do a little bit, to come join and fix docs and stuff. And conversely, which is just as important, for engineers to go join the sales calls. I think that there's no replacement for interacting with another human who has a problem with the thing that your company supports, even when it's a different angle than you usually look at it. You really— and this is where religious orders have it right. It's not about what you believe, it's about what you practice. I can say all day that I believe in these things, but unless I commit to creating structures where people practice it, we're not going to reap that benefit.

**Jill:** I was going to say that it's kind of like when I first got into recruiting, I was working at Rackspace, and I like, I mean, I knew nothing about anything, and now I know a little bit about something. And I mean, like, I didn't even know like what coding was. I grew up like cheerleader who like loved dogs. I mean, that's similar, like I don't know, I was just like your typical Midwest girl. I like sports. I wasn't really into computers. I wasn't into video games, any of that like quote unquote typical nerd stuff, whatever. But so I went and I was recruiting for Linux admins and that's why sysadmins are always going to be like my favorite, like very near and dear to my heart because that was my first crew. And they sat at a different side of the mall because working at Rackspace, we worked in an old mall. They sat way far away from us, so I would just go and like sit with their team and make friends with them and just like be up in their business, though probably annoying at times, and be like, what are you doing? Because like I just had— I knew nothing. And so just like learning like what this job was and how like ticketing systems work and everything, they were very gracious towards me. But yeah, like it really fundamentally opens your eyes, and I would never be able to recruit half as effectively for their jobs or any, any others if I hadn't just gone down there, walked, walked to their desk and sat down and talked to them.

**Charity:** [00:47:33] There's something so beautiful about leading with your curiosity, you know, like being unafraid and unashamed to just say, hi, I don't know what you do, but I'm interested.

**Matty:** Yeah, there's a huge difference between I don't know what you do, I'd like to know about it, versus the What the implicit thing usually is, I don't know what you do, therefore it must be easy.

**Charity:** Yes. Oh God, exactly. Yeah. It must not be worth my attention or my time. Right.

**Matty:** One of my favorite things was, you know, I had a friend who was a graphic designer. She said, yeah, I can't tell you how many times people would come to me and be like, Tammy, can you teach me Photoshop this afternoon?

**Charity:** Can you just?

**Matty:** Yeah, sure. Let me just, teach you everything that I do in an afternoon because that's how much knowledge I have in my head. To be me will take you just, you know, an afternoon.

**Charity:** It's fucking insulting. Just stop.

**Matty:** So yeah, so on that pleasant note.

**Charity:** Anyway, this has been delightful.

**Matty:** [00:48:35] This has been great. Yeah. So welcome to the goth version of Arrested DevOps.

**Charity:** Sunday, bloody Sunday.

**Matty:** So some community and event stuff. Jared, are you just busy working or are you gallivanting about?

**Charity:** I don't know. I don't even like try to keep up with my calendar anymore.

**Matty:** No, I'm going to England again in a couple weeks to go trespass on some, some royal property.

**Charity:** That was funny.

**Matty:** Jill, where are you up to?

**Jill:** I will be in SF just visiting Fastly office end of month, and then my next speaking thing isn't till end of March, and I'll be at ScatterConf, which is in Austin. It's the remote people conference, which I'm really excited about, and I'm going to talk about how you should hire remote teams.

**Matty:** Yeah, if you would like to speak at a conference, I can tell you how to speak at a DevOpsDays. You go to devopsdays.org/speaking, and there'll be a list of all the open CFPs. GopherCon's CFP is still open until March 15th. You can submit to there, but if you get accepted, it means you can't come to DevOps Days Chicago, but I'll still be your friend because speaking at GopherCon is probably cooler than coming to my gig. The GopherCon itself is August 27th through the 30th. DevOps Days Chicago is the 28th through the 29th, so that kind of sucks, but what are you going to do? Discount codes, ADO2018 will give you 20% off most DevOps Days. If you find out it doesn't, send us a tweet and we'll go rain holy hell on them until it does, which usually just means we have to remind them how to use Eventbrite. It'll give you 10% off ChefConf and 5% off of GopherConf. And yeah, if you go to arresteddevops.com/hottakes, you'll find the show notes from this episode. You can sign up for our newsletter that I haven't sent for a while, but I've been seeing a lot of people signing up for lately, so I feel guilty. So we'll probably send, send one out after this episode goes live. And if you go to restofdevops.com/itunes and leave us a review in the iTunes store, that helps other people find the podcast through that channel. It's not really just us begging for validation. It's a little bit of that. It's like maybe 10, 20, 60% max validation. But I'm really glad that we had this, that we had Charity and Eric and Jill join. So thanks. Thanks, y'all.

**Jill:** [00:50:55] Thanks for having me. Yeah, thanks.

**Matty:** Thank you. Always a good time.

**Charity:** Phil, we have not yet met in person.

**Jill:** What?

**Charity:** I think we remedied it this year.

**Jill:** I feel like we might have met in passing years back.

**Charity:** What? Well, I didn't remember it.

**Jill:** That's okay. I was thinking about this the other day. We've definitely never had a conversation.

**Charity:** No, we did have a conversation, but it was on the phone.

**Jill:** I don't know.

**Matty:** You two should have a podcast.

**Jill:** We should talk.

**Matty:** Anyway, on that note, I am Matt at Matt Stratton. This is Arrested DevOps. And remember, there is always DevOps in the banana stand.
