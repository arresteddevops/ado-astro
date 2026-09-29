**Andrew:** [00:00:00] It will be obvious when it's too late. So there's that little problem.

**Matty:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matt Stratton and co-hosting with me, Bridget Kromhout. The show notes for today's episode can be found at arresteddevops.com/firesidechatlittleidea. Before I introduce our guest, spoiler alert, that's his Twitter handle, little idea. A word from our sponsors. ChefConf will be held May 23rd through 26th in Chicago.

**Andrew:** Chef has been a longtime supporter of the DevOps movement and of this podcast.

**Matty:** ChefConf will have talks on infrastructure automation with Chef, compliance automation with Inspect, application automation with Habitat, and a ton of other relevant content. Register with discount code ADO2018 to save 10%. Visit chefconf.com for all the details. And remember, code ADO2018 gets you 10% off the ticket price at chefconf.com. Your application sits on layers of dynamic infrastructure and supporting services. Datadog brings you visibility into every part of your infrastructure, plus APM for monitoring your application's performance. Dashboarding, collaboration tools, and alerts let you develop your own workflow for observability and incident response. Datadog integrates seamlessly with all of your apps and systems, from Slack to Amazon Web Services, so you can get visibility in minutes. Go to arresteddevops.com/datadog to get started with Datadog and get a free t-shirt. With full observability, distributed tracing, and customizable visualizations, Datadog is loved and trusted by thousands of enterprises, including Salesforce, PagerDuty, and Zendesk. If you haven't tried Datadog at your company or on your side project, go to arresteddevops.com/datadog to get a free t-shirt and support Arrested DevOps. So today, uh, we have the pleasure of chatting on the show, uh, with our good friend Andrew Clay Shafer. So, uh, Andrew, what's your elevator pitch?

**Andrew:** [00:02:18] Ooh, you know how much I love self-promotion, but I think I'm here to help people achieve understanding, develop good practices, and prepare their team and organization for maximum DevOps awesomeness, which is, I don't know, something I've done before, maybe, allegedly.

**Bridget:** True facts.

**Andrew:** I, yeah, I think and I know things, And occasionally I have, or once upon a time, Bridget's a girl that I used to approve her expense reports.

**Matty:** I drink and I know things according to the glass in front of me right now.

**Bridget:** Nice.

**Andrew:** I did not know you were drinking from that glass.

**Matty:** I didn't either till you said that and it was sitting in front of me.

**Bridget:** Nice. Like glass. Okay, but yes. Andrew, aside from, you know, once upon a time approving my expense reports, which true facts, you've also been on the show a number of times before. We did an episode with you and Kelsey Hightower, and we did live recordings. I went and looked it up at the last 3 DevOps Days Minneapolis. And we also did kind of a burn burner of an episode with you and Brian Cantrell at GOTO Chicago. So, you've been on some of our higher profile, higher traffic episodes. But we now finally— I think this is the first time that it's just been you, me, and Matt sitting down without an audience, without other people that you're, you know, attempting to get them to completely, you know, freak the fuck out.

**Andrew:** [00:03:58] I didn't even try, so there's that.

**Matty:** But you've been on about 5% of our shows. Wow.

**Bridget:** Well, today will be a little bit less dramatic. Maybe we'll see.

**Matty:** Oh, we already had the attack kitten bringing in their drama, right?

**Andrew:** So, he's—

**Bridget:** I gotta tell you, he does that on purpose when I'm on calls. It's like, thanks, kitty, thanks.

**Andrew:** Well, where should we start?

**Bridget:** I mean, at the very beginning, it's a very good place to start, right? We have you here, I feel like we can't pass up the opportunity to have you tell us about the now legendary Agile 2008 open space that wasn't, and your conversation with Patrick. Everywhere that DevOps Days came out of. So you want to give us your version of that?

**Andrew:** Yeah, so people have written down a few versions that are probably somewhat true.

**Matty:** I would like to hear the real version because I tell this version, well, I tell my version a billion times when I do intro to DevOps talks in like 2 sentences. So I'm looking forward to finding out how off I am.

**Andrew:** [00:05:04] So this Agile 2008 was actually formative for me personally and influenced, you know, whatever DevOps conversations I participated in for the last decade, not just because of Patrick, but it's also the event where I met a man by the name of Israel Gott, who influenced me, and another person who is really influential that almost no one knows of. His name's Christophe Louvian, who's been a CTO at a number of places in LA, like going back 10 years. Also, at the time they were using Puppet and that kind of stuff, but he got me turned on to Lean. So to come full circle, the Mary Poppins and a bunch of these threads that were just sort of nascent in my head that I hadn't heard or had articulated as well, just kind of sprung to life from conversations at this conference. And then in parallel to that, I was there, you know, I was working on Puppet, and I had started talking about this kind of notion of agile infrastructure. It wasn't as well articulated at the time, but, you know, Puppet was a thing, and I ended up meeting Patrick. So there's this legend about this birds of a feather. So they had this space, it wasn't like a formal open space, but you could put these index cards on a board and you could put a topic you wanted to talk about at a certain time. And I put that I wanted to talk about, I basically, I wanted to talk about Puppet and the agile infrastructure and being able to configure servers and and test them and a bunch of the stuff that, you know, people kind of take for granted now. And I, I put it on the board and I was late to my session. Apparently, uh, you were late?

**Bridget:** [00:07:03] That would never happen.

**Andrew:** Well, well, the, the other thing, and part of the reason why I, I said some of the things I said a moment ago, is, is I was actually late because I had had bumped into, you know, through some other machinations, Christoph, and he is blowing my mind talking about basically this evolution away from sprints and Scrum and the rest of the stuff that is basically pathological in agile practices towards the flow and, you know, Kanban and Lean and Mary Poppins and the rest of these ideas. So I was really excited about that. And I don't know if you've ever met me before, but I can be engaged in conversation rather easily. And so then I ended up a little bit late to try to have this thing and Patrick had left or whatever, but we did meet in that conference. So the other side of that was I stumbled on something that Patrick shared with me and he had written about bringing the agile practices to infrastructure and sysadmins. And he wrote a paper that you can still find, there's probably a PDF laying around somewhere, about doing this kind of planning, and it didn't quite have the lean stuff yet, but it's like, hey, let's think about breaking things up into small chunks and having standups and having, I mean, a lot of the stuff that all the infrastructure teams do now, Patrick had kind of put down on paper, borrowing from the agile practices. And so I'd already been articulating a lot of those same ideas because I'd come from a development background. I'd been sort of soaked in agile after, you know, some sort of rebirth by fire, because I actually hated agile when I was first introduced to it, and probably still would if I hadn't been introduced to people like Alistair Cockburn, but having kind of come through that and seeing what was happening with Puppet, where you could now take, and this has just continued, and it's accelerating actually to now, you could take the tools and practices that had been not necessarily optimized, but honed with software development, and bring them to bear on infrastructure problems.

**Bridget:** [00:09:27] Yeah, absolutely.

**Andrew:** I think there's this interesting trend that people like to argue over the meanings of words.

**Bridget:** I'm remembering that tweet of yours, who wants to argue with me about the meaning of made-up words?

**Andrew:** And I might be as bad as anyone, but it's sort of funny to see, like, people redefine DevOps, people redefine infrastructure as code, to, like, have a new thing. It's like, now there's GitOps. It's like, well, like, okay, I mean, everything's been Git-centric from at least a Puppet perspective, at least what I ever told people, for 10 years, and having infrastructure driven by pull requests is not a novelty. Cool, like, okay, like, the API has changed, like, the abstractions are getting better, the abstractions are getting higher, Let's keep using Git. Cool. Like, I'm down.

**Matty:** Let's do that.

**Andrew:** But like, I don't need to argue with you that it's a new thing or not.

**Matty:** [00:10:29] Who cares?

**Bridget:** All right, mark this down. You know, today is February 7th, 2018. At this point, Andrew Clay Shafer does not want to argue. I feel like—

**Matty:** to be clear, no, actually, I did not mean to.

**Andrew:** Yeah, I don't mean to. I think there's another thing, and this is, this is probably partially a character flaw and probably, you know, nature versus nurture. There's definitely some nurture involved. I spent 3 years on a full scholarship, uh, doing debate in college, and a lot of times I think people see certain things as argumentative when they're not actually argumentative. They're, they're critical dialogue and finding ways to have, like, there's techniques that you can draw information out of people, not because you're arguing, but you're just offering counterpoint. And if you do debate for any amount of time, you have to disassociate your ego from your arguments. And you can't actually be emotionally attached to the arguments. You just have to make them because you're gonna be arbitrarily assigned the positions that you're defending. From round to round. And so you do this for a few years and then you're just not emotionally attached to arguments. You just make them because you want to hear what the other side will say.

**Bridget:** [00:11:49] Anyway, I mean, I'm listening to that, but I'm also like, we've met people inside large organizations that get very emotionally attached to whatever their point is. And I think that's, that's kind of what I'd like to ask is you talk to people inside a lot of enterprises, and I'm wondering what you're seeing the current conversation around Deveng's Mops might be?

**Andrew:** Well, let's actually bump that a meta level. So there's what people actually are in love with is themselves. So they're in love with their identity and they've attached in many cases their identity to their tasks and their perspective and their worldview and maybe even the definitions of words. So when they when they have something that is challenging that identity, then, then they'll get very defensive.

**Matty:** I, I was going to say, just to kind of not, not squirrel away, but something you were talking about arguing over the definition of words and then people holding on to it. There's, there's 2 things that have become very topical, uh, in the last couple days for me. So I, um, saw a post and I, uh, that had to do— was from a recruiting location And it was actually a really good post. It was intended to be provocative, but it was called, Why are DevOps engineers so hard to find? And I tweeted about it kind of jokingly, didn't even post a link to it because there was nothing wrong with the post, just to kind of come up with, like, what would be, you know, my usual, I use Twitter to make jokes, you know, what would be a silly thing to say to that? Had a couple of people get really incensed about how mean I was being because apparently it's okay on recruiters. And I'm like, no. But the other thing that happened out of it that was interesting was I did a thought experiment of, um, I don't know if you know this, but on LinkedIn there's this thing where if you write long posts that have no links anywhere, LinkedIn says, great, this is content that keeps people stuck here, so we're going to show it to a bajillion people. So I wrote a post about it and it's been seen by like 80,000 people in like 4 or 5 days. It's insane. And but where I'm coming to with this is there was someone who was very argumentative with me about it, and it's because he has built his entire consulting practice around the idea that DevOps engineers is a thing. And like you said, it's this thing you own. So, that's one thing that I've seen where, again, when it's your thing, you're gonna wanna own it.

**Andrew:** [00:14:15] It's even worse when it's connected to their livelihood, right?

**Matty:** Yeah. And that's the second side I've been talking to. I've been helping folks at PagerDuty on our who aren't as familiar maybe with traditional IT ops or even DevOps and stuff saying, hey, how can we enable, you know, our field to understand people we're talking to? And one of the things that comes up in conversations, and I saw this happen when I was at Chef, I, you know, see this all the time, is when you're kind of taking away, you're trying, or maybe you're coming in there with something influential that might change the way that they approach ITSM and ITIL specifically. Well, the thing about ITIL is it takes fucking years to implement even halfway. So the person that did that has spent years of their career making this thing happen, and maybe they got a nice little Christmas ham out of it or something. So you're going to go in and say the thing you're doing is wrong, and it's a very, very hard conversation to have, um, whether you're right or not and whether they do a good job or not, because it's something that they owned. I think you're right that people, when it's tied to your livelihood, either because you feel like you're going to be removed or the value you bring to the organization is being, um, minimized, or you're coming in and saying, hey, this thing that Andrew did and spent the last 7 years of an initiative that we thought was this amazing thing he did, suddenly the entire industry tells— is saying that's wrong. That he's— you're not going to want to listen to that person.

**Andrew:** [00:15:42] Well, it's also my artwork. My, my ego is attached to my artwork. I just, I just did this thing. It's a monument to myself.

**Matty:** Yeah, it's a thing you created.

**Andrew:** It's alive.

**Bridget:** Well, and you've also, Shafer, you've had a lot of, you know, input into this discussion around things like organizational learning. And I'm wondering if you have any specific perspective on how organizations that are, they're maybe iterating, maybe they did some kind of ITIL transformation and maybe they tried to become agile in some way and then they decided to DevOps. What does that process look like? What does change look like inside these organizations that are more than just a couple of people at their startup who can do what they want?

**Andrew:** So this is a topic that actually started making me sad a little bit in the sense that I started these conversations, or I thought I was going to start a bunch of conversations about organizational learning And for a few reasons, I think it's just, it's kind of too meta for most people to deal with. And most people need to have more concrete paint-by-the-numbers ABCs or more concrete tools or these other things that can reify the practice more than this abstract notion of, you know, the 7 dimensions of organizational learning or whatever, which is one of my favorite things in Everyone should know that. But the thing that I kind of came to realize is that most organizations don't actually want to change. They get sold transformation so frequently. Right now we're kind of in this digital transformation wave, but if you look through the history of business, there's always this wave of kind of transformational new management techniques, but most of them are actually not very different. They're all kind of rooted in slightly different versions of what metrics you should measure with your Taylorism, which is adorable and ineffective, but hey, let's keep selling books and giving talks. So what I've kind of come to observe is that I've seen 2 kind of archetypical transformation successes, and I've seen a whole host of failures. And kind of quoting a Russian novelist that all the happy families are the same, all the happy, the successful transformations are similar, but the unhappy ones, the unsuccessful ones are all different. So if you look at the success patterns I've seen, you need something that's an impetus that drives the change. It just doesn't spontaneously occur. And I've seen success where I would say there was someone that was prismatic, visionary, and had the necessary social capital to bring that about, usually at the highest level of the staff, or else it will be crushed as a rebellion, a rebellion. And then the other thing that has some hope of being a catalyst is an absolute existential crisis to the future of the business. And absent those 2 things, I just don't see true successful transformation. And that troubled me for a long time, but I'm on a new kick. I'm on my new stuff. So I started reading every once in a while. I read, I claimed I couldn't read, but I do read every once in a while. So there's some papers about this, And it's treated academically, but it's interesting, institutional theory, which talks about these normalization forces, these forces that create isomorphisms in institutions. And what I realized—

**Bridget:** [00:19:38] Pause for a second, because I feel like at this point, people are Googling isomorphisms and trying to figure out exactly what you mean by that. So—

**Matty:** It's a power-up in Pokémon.

**Bridget:** Well, again, like people have probably different ideas of what that means. So in this context, can you be a little more specific?

**Andrew:** So in— if you just look at the roots of the words, or you talk about mathematical transformation, isomorphism is something— iso means same and morph means shape. So it's the same shape. So isomorphisms are things that have the same shape. And in institutional theory, it basically means that organizations or people have the same practices, you know, the same hierarchy, same processes, whatever. And you see this force in IT, you see this force in lots of other fashion and tribalism trends, but what happens in the beginning in this adoption curve is you have an innovation and you have early adopters who are chasing that innovation for a competitive advantage. There's some new capability, there's some new insight that they want for their advantage, and that's their motivation. And then as the adoption gets towards the majority and into the majority, certainly into the mid-majority, there's probably some early majority that are still motivated for the competitive advantage, you actually see this transition where the motivation is legitimacy. So the organizations are no longer motivated to do DevOps or Agile or whatever the next buzzword is because they want a competitive advantage. It's that at some level, someone read the buzzword was the thing that will make us legitimate. And if we're not doing that thing, we're not legitimate. And so they're trying to, you know, I used to use the metaphor cargo cult a lot, but now I, kind of like leaning towards this idea that they actually don't believe in the religion, right? They don't believe in the rituals. They're just doing it because they think that's the legitimate thing that legitimate organizations do. And because they're not doing it for competitive advantage, they don't actually get one.

**Bridget:** [00:21:57] So, what you're saying is the 80,000 people who are reading Stratton's post about DevOps engineers on LinkedIn, might work at organizations where instead of the focus being on the competitive advantage for themselves, the focus is on what their competitors are doing. I'm trying to understand the difference between—

**Andrew:** It's not even about competitors. It's not even about competitors. It's like you read a trade magazine, Gartner started saying DevOps, you know, you have this buzzword that's flying around. And you're not, you're not worried if you're, if you're actually worried about what your competitors do from their practices, then that is one of the— I do not— we do not have time to go into the model for all these forces that create isomorphisms, but watching your competitors, watching the thing, that is something that influences people doing the same thing, but it is not the only thing, right? So, all these things that kind of signal that this is the legitimate thing are what are motivating those practices, the cargo culting of those practices, the empty, ceremony instead of, instead of looking for, hey, let's, let's actually do this in the best possible way because this is a, this is a system we're trying to optimize versus this is a system that we are and we're gonna, we're gonna do it like everyone else because that's what we are, that's what we are, we do it like everyone else.

**Matty:** [00:23:17] That's the thing what I've seen and I think it actually goes back to that post with the arguments about, well, we, this is just what we call things now or whatever. Is not focusing on outcomes, right? Like, you're doing this, and I'm just trying to kind of wrap this around and say, why are you doing this, right?

**Andrew:** You're not doing it because— The outcome they want, whether you're talking about ITIL or DevOps in these organizations, is that they can say they're doing DevOps, that they can say they're doing ITIL. That was the outcome that they're motivated for, not having better uptime, not having better scalability. They read about that stuff, And they sort of want it, but they're not actually motivated by their day-to-day actions that they take.

**Matty:** And I think that's usually indicative of folks who are in these positions, wherever they might be, whether it's a title position or just a place where you sit, where you are disconnected from understanding how the company you work for operates as a business. You know, I've said before that, like, anytime I'm talking to somebody and they're trying to do a transformation, I don't care where you are, I don't care if you're the CIO, or you're the junior sysadmin who changes backup tapes, who I guess that's a job people still have, the first question I'm gonna ask you is, how does your company make money? And if you don't know how to answer that question, then go home and figure that out and come back and we'll work once you know that because that's the outcome. Now, again, Bridget, you and I have gone back and forth on whether it's how do we make money or whatnot, but the point is, why does your organization exist and how do they fulfill their the thing they do. In most places, it's how do you make money, right? And if the thing you're doing is not doing that, and again, slapping SRE or DevOps engineer or whatever on a sysadmin's title does not help you make money, right? You know, it does not make those things go. But I think it's, it's, and I think that's again where this maybe becomes more of the challenge in the traditional enterprise because people are so distanced from understanding that it's still that whole traditional, like, us versus the business. The business is a different entity. So thinking about where you sit in the org structure, listeners, you're all part of the business. These are not Andrew's deep thoughts for your C-suite executives. These are things that you all need to think about, even if you may not feel that you can directly influence them, you super can indirectly influence them. And if you can't, then maybe you need to find another job.

**Andrew:** [00:25:41] Even when I was working, you know, quote unquote, as a technologist day to day, I was always baffled by my ostensibly intelligent colleagues and many also I would call friends who were so focused on the details of the technology that they willfully disregarded the rest of the machinery, the rest of that system. With respect to why it even existed.

**Bridget:** I think Andrew Clay Shafer once said, everyone is selling.

**Andrew:** I mean, I think in an organization, especially a tech organization, but even probably manufacturing, the rest of it, you basically have 2 functions: you build or you sell, right? And then to me, the highest level is your best evangelists are your software developers, your builders, are also your marketing, right?

**Bridget:** Yeah. And this is, and that kind of takes us to this exciting, maybe highly bubblicious space right now of like cloud containers and platforms and yada, yada, yada. And like, you're, you have an interesting perspective in that you were very early in that space at Puppet and you've stayed in the space, you know, as it's changed, like, what do you think is new that people should pay attention to? Maybe what stuff can we stop paying attention to at this point?

**Andrew:** [00:27:08] I think it kind of goes back to figuring out who you are and what you want to be, because on some level, the old layers aren't going away. So, it's not like you should stop knowing that they exist, but at the same time, not every single person in an organization needs to know how how to twiddle cgroups or whatever. So figuring out what the right thing is from an organizational kind of system design, and this is one of the things that I would be really interested in getting more people to dialogue about, and there started to be some stuff, and I dropped some breadcrumbs around the way, but when you're designing an organization, it's not that different than designing a web service, right? Or designing like a service that has some inputs and some outputs, and there's throughput, and there's, whatever kind of thoughtfulness about scalability and redundancy and the rest of that. And if you think about all the distributed systems papers, for the most part, when you're talking about, you know, at least like CAP theorem and that kind of stuff, there's no presupposition that those are computers, right? You're talking about nodes passing messages, nodes taking actions, and you can apply some of those same types of things to the way that we think about each other and humans. And, you know, the fact that you— the problem with humans, though, is they acknowledge rights that never happened. But we'll come back to that later.

**Matty:** [00:28:39] I think there was something you just said that reminded me of an article I read the other day when you said about, you know, not everybody has to need to know how to tweak cgroups. And so, but But someone should. Someone should, right? So I paused because I never remember how to pronounce Cindy's last name, but Cindy Sridharan, I think. So Copy Construct on Twitter. And I'll put the link to her post in the show notes, but it's a blog she wrote. It's actually from last July, but I just read it yesterday. But it's called Everyone Is Not Ops. And it was a really interesting thing where we think about this from a software engineering perspective. And she says, you know, we sit here and we're like, we're super happy to break up software engineering to all these groups, right? We have folks who do frontend, backend, UX, and blah, blah, blah, and database and everything. And then there's ops. And if you're an ops person, you're supposed to ops all the things, right? And it's like, why, sort of getting to that thought of that ops in your organization actually can mean, all ops are not created equal. And I think that's maybe one of the things we run into And there's a side project I'm working on that has to do with modern system administration. And I fear a little bit that someone's gonna look at this and think like, oh my God, if I wanna be a modern sysadmin or someone who administers, I have to know all the things. And you super don't, right?

**Andrew:** [00:30:01] You have to know a little bit.

**Matty:** And you super can't.

**Bridget:** Yeah.

**Andrew:** Wait, you're saying you're not gonna—

**Bridget:** you're not gonna—

**Matty:** even you can't super know everything about Kubernetes. There's that awesome post the other day that was like how keeping up with the latest Kubernetes stuff is a full-time job by itself.

**Andrew:** So, first, I just wanna say that I love Cindy's writing, and I think she's one of the most insightful people putting that kind of content out right now. I don't always agree with every word she says, but I do think that it's interesting to see that perspective. And kind of dragging that back to the topic about, what should you pay attention to? I think what's happening, and this also bleeds into the SRE book, and at least aspirationally how to think about responsibilities on both technology and the humans involved, that what we're seeing in this kind of cloud-native path forward is in the last wave, when you have the birth of tools like Puppet, you're basically coming into trying to wrangle a bunch of complexity. And this also starts to bleed into architecture, actually. So you have a data center filled with random boxes that have been bought for different projects over the last decade or, you know, 5 years or whatever your amortization schedule is, and you're gonna try to bring them into some kind of sensible compliance with configuration management. And that was a good time to be alive, right? It changed a little bit about the way that we could do things and thought about things. But as you move forward into this sort of cloud-native SRE platform world, what you're seeing as the trend is, let's eliminate some of our complexity by not having it. We're gonna collapse all of the variation at the bottom of the stack as we can. Have, if you have the privilege or pleasure to get inside some of these massive data centers that some of the kind of big cloud companies have now, you see racks and racks and racks of identical gear. And you're not trying to figure out what weird quirks this, you know, the lights-out management on this chassis has versus like whatever, 'cause it's all standard. And if it's not working, you just rip it out and replace it. So you collapse all that complexity at the hardware layer, you come up to operating systems, let's collapse that as much as possible. Then come up another layer to whatever you're gonna do with the runtime. Maybe you have a little bit of choice in your organization. Maybe you make different decisions about what's available in your organization. Although one of my— this is something people should try to watch 'cause— so Jeff Hodges, who used to be at Twitter, had this amazing recon talk a long time ago that I think he's gonna try to reprise about how polyglot is bullshit. And how you're basically creating operational burden for yourself by trying to support all these different runtimes in your ops team with the spelunking and mapping context in and out of all these different things, because each one of those runtimes has its own, it's basically its own alternative world with respect to some of these different things. So he was a strong advocate, and at the time I think Twitter had kind of settled on I mean, also, you got to understand everyone's perspective is coming from their scar tissue a lot of times. So, Twitter had come from having Ruby and moved towards JVM languages and had a bunch of stuff where you could, like, put things on the JVM and make sense of them or whatever. So, then, going forward, you have, on top of your runtimes, you have the service mesh stuff, and you're starting to see people collaborating around all the rest of the operational capabilities with observability, Everyone that didn't have the ability to patch their servers in minutes and like have centralized syslog for the last 10 years, like you're way behind, right? So people are talking about how exciting it is in some of these enterprises to see tools like Cloud Foundry and Kubernetes give them the ability to patch operating systems and collect logs. But I remember people moving data centers with Puppet and Chef 7, 8 years ago in like 20 minutes, right? Like, you just, we just moved all of our data centers across the country, and like, we could patch our servers with like one pull request to change the Chef recipe. Like, this is not something that people have not solved before, It's just everyone sort of had to solve it themselves, where now as you're moving up the stack and having this consolidated open-source community build a standard, everyone gets the same capabilities with the same benefits at roughly the same time.

**Bridget:** [00:34:55] So wait, you're saying that the future is going to be more evenly distributed?

**Andrew:** No, I'm not. What I'm saying is that the, the consolidation below the value line is going to continue ever upward. And then above that is where it's not distributed, where you create value or lose the game, right? So the baseline capabilities that an organization can start with, with, you know, a few cloned repos on GitHub right now is amazing, right? And it's not slowing down. Right? If you see the proliferation of projects, that's also part of the— goes back to this, you can't keep up with everything.

**Bridget:** Well, I was just looking at the CNCF projects alone and thought, oh, there's a lot of things there. I don't actually know what they all are. I should probably know what some of them are. But like when you see these tech communities taking off, can you talk a little bit about, you know, does having a blue box from the CNCF make you a winner, or is it something to do with the community energy?

**Andrew:** [00:36:03] This might be a little bit of a controversial topic, but I'm not always the biggest fan of the foundations. And I think that there's a dynamic, and you certainly saw this with OpenStack, and to some extent you'll probably see it with CNCF, where going back to this notion of legitimacy, the foundations can act as a bit of kingmakers, and then there's this motivation to get inside of that circle, right? So like projects are definitely trying to get that, to win that favor and like be the one that has that solution inside. But at least so far, although we'll see how it plays out, there's a number of competing projects. And that also contributes to how hard it is to keep up because so many of them, or at least certain projects, I don't wanna muddy the water right now, but it's like they kind of overlap quite a bit. So it's like, well, which one should I choose or which one should I do? Because like these seem to be kind of the same except slightly different, right? So I don't know if there's great advice other than, you know, pick something that seems to work. You always have this wave of a Cambrian explosion and then a contraction. So in the times when there's a Cambrian explosion, some of those evolutions are not gonna be viable. Some of those evolutions are gonna die off. And so maybe sometimes the best strategy, especially if you're more motivated by legitimacy than you are for competitive advantage, would be to maybe do some experiments, fix the obvious stuff, but don't go all in until that sort of settles down a little bit.

**Bridget:** [00:37:41] But I think we see inside— I know when I've spent time talking to large enterprises, it seems like large enterprises have little pockets of this, and little pockets of that and little pockets of the other. It's not necessarily that they're hedging their bets. It might be more they just have different divisions that made a decision independently. But a lot of enterprises that have any amount of scale at all also have a little bit of everything somewhere.

**Andrew:** Often true, often true. And going back to this notion of tribalism and identity, I swear I feel like sometimes They chose one just because the other group didn't choose that one.

**Bridget:** Now, Stratton, you've spent a bunch of time at vendors. In your estimation, I was just going to say, when they're deciding, like, how does that look?

**Matty:** Well, well, there's, there's that thing about they chose it because somebody else chose the other one. I, in a company that will remain nameless, there was a scenario where the one group had wanted to buy a suite and had gotten shot down by this other group with that because it was a ridiculous thing. And then this other group, Group B, when they went to want to get The other group was— it was like retribution. It was like, no, fuck you, we won't sign off on that. And it's like the people politics. It's again, I'm gonna— when people choose, I'm gonna make an interesting thing. So our, you know, big worldwide muckety-muck of sales at our company kickoff was he asked the question, he said, why do we have salespeople? Why is— why are there sales reps in a company? Everyone's like, oh, because the Challenger Sale and blah blah blah blah blah. And he goes, no, Because humans are irrational. If humans were 100% rational, you would not need a sales rep. It could all be, you know, it would all be done. But so, so much is done, decisions are made on irrational things. It's either because, to Andrew's point about previous scar tissue, you know, which could be like, oh, you know, there's maybe the person who is making this recommendation doesn't have the best track record. Because maybe they were an experimenter and it's a company who has a culture of safety, right, who doesn't like to take risks. And you took a risk before, and why should we trust you now? You're going to see that almost all of these are going to have nothing to do with the actual solution, and they're going to all be irrational reasons. And Michael Hedgepeth, friend of the show, he wrote an interesting blog article a couple of years ago that had to do with why NCR chose Chef. And he said, you know why? It was because of the presales experience that we had with Nikki and Matt. And that wasn't supposed to, like, be because I'm awesome, but he's like, and it wasn't because we took him out for steak dinners or something like that. It was, it's so when people choose it, when they feel like it's a vendor who will be a partner for them, you know, a lot of times, at least that's the people who are going to be the utilizers of the solution are going to pick from that. Then when you talk in a large enough enterprise where you have procurement, that becomes a different thing. Then they don't really care because they're driven by an incentive that has to do with, like, squeezing the best deal out of the contract possible and all of that. But a lot of it comes down to irrational reasons. Hey, I went to those and a whole bunch of companies talked about Chef. So I guess if we wanna DevOps, we'd better buy some Chef. Very large company made the decision because of that.

**Andrew:** [00:40:58] So it's not about the best solution usually because legitimacy, that it was legitimized for them.

**Matty:** Yeah. And I mean, that's, that doesn't mean that it was a crappy solution. You know, I mean, the thing is, it's, there's, it doesn't mean you're making a bad choice, but if you are going to try to rest your solutions purely on its, for lack of a better word, numeric, its empirical merit, then you're probably not gonna sell a lot because the people buying it are humans. And this goes a little bit into the community side of it too, right? Like understanding your reputation within a larger community as opposed to the community of the product itself. I know Bridget likes to make fun of my title at PagerDuty and it's fine. But I had to—

**Bridget:** Not your title specifically, I just—

**Matty:** The idea of evangelism. Yes, have you heard the good news of PagerDuty?

**Andrew:** But I was trying to explain to people, buy the story that they can see themselves being part of, right? Yeah. Just like they'll defend their identity, if they can see themselves attaching their identity to a new thing, then that's what they're gonna do.

**Bridget:** [00:42:09] And so that's kind of the, when we see these communities taking off, I mean, I was at KubeCon in December and there was a lot of excitement, you know, in the sessions, on the show floor, and a lot of it was not because of a specific company we're getting the solution from so much as this is something we feel like we can participate in. I mean, there's a lot to be said for feeling like you're participating in something.

**Andrew:** It's exciting.

**Matty:** Well, it's dangerous to go alone, right? That's you. And I've also always believed that if you know something is possible, it's a lot easier to do it. And I think that's why once we started to see the stories coming from the enterprises and not, um, just Netflix and Etsy is why enterprises started being willing to do it because they're like, oh, somebody else did it. I don't have to be the first one. And, um, you know, again, to, to your point about, you know, the successful stories all look the same, right? Everybody thinks they're a snowflake. And Sasha Bates has infamously said, every snowflake has 6 sides. And you all have both probably seen the same thing. How many customers do you go to that say, oh, you've never seen anybody as fucked up as us, or you couldn't possibly handle us. We've got this really one-off situation. And you're like, dude, I just talked to 7 people last week just like you. But that's a really, that's a good thing, right? Because you're like, yes, you're not special. That's awesome. Because it means you can do this, right? It's, you know, because they're thinking that they can't. See themselves, as Andrew said, in this place because they're like, oh, we actually want to have this lowercase agility, the speed to market, this, you know, better experience of doing work, but I can never do this here. And I think you see that a lot with practitioners where you see that frustration. They're like, oh, sure, I would. I mean, we see this, I see this at DevOps Days, you know, people are like, this all seemed really cool, but this would never work where I'm at. We'd never be able to do this. And you're like, nope, you probably can. But they don't—

**Bridget:** [00:44:07] there's probably someone inside your organization who already is.

**Matty:** And includes people like them, lets them see that.

**Andrew:** So dovetailing off this decision that someone made to buy a tool, there's a bit of a banter on Twitter this morning about tools and if they're necessary or not. And I think it's actually people talking past each other because one side's essentially trying to say that tools are not enough, and the other side saying that the other— that the people are saying tools aren't enough are saying that tools don't matter, which is not what they're saying. But I think there's this balancing factor when people start talking about tools, culture, and the rest of it. Like, they're tied together, and yeah, you're not going to win against the Gatling gun with the best culture and your swords, but, you know, you probably have some ability to make decisions and move information and take actions that could be put to use, and hopefully you have a better one than command and control, right? At least in the knowledge work that most of these companies aspire to be able to do.

**Bridget:** [00:45:25] Well, especially because the people who are in command probably don't have time or ability to control every single detail.

**Andrew:** So, here's the thing I want to drop, and we can put it in the checkouts, and it's a book I tweeted a few weeks ago that I read in my African adventure. It's a book called Team of Teams, and it's about— it's literally the most DevOps book that I've read in some sense, but it's actually about the Joint Task Force that was in Iraq. And so the idea here is that they're trying to deal with an enemy who's doing things in a different way, taking advantage of the new mechanisms to communicate, taking advantage of the new world, the new landscapes, both technologically and also in the urban setting. And so all these command and control siloed responses are failing to address the issue. And so they talk about this evolution in their understanding, and General McChrystal has a— they have a consulting company that focuses on trying to help organizations transform to do this now, but it's not an IT sort of DevOps narrative driving what's essentially the same idea, which is in the old world, Command and control got us so far. Taylorism got us so far. We have this process, let's optimize it, let's measure it. In the new world— so what— so he talks about, which is an interesting metaphor, is that each of these teams at the, at the macro— microscopic level had all of these qualities that you want with respect to improvisation and agility. So like the SEAL teams were great, right? The, the Special Forces are great. Each of those teams at the level of the people that they work with, that they share bunks with, had all these qualities. But then what they had was what he called a command of teams. So between the teams, that horizontal connection, that horizontal collaboration didn't happen, right? And I think this is a very similar parallel to what you see in the DevOps conversations about silos. It's not that you want to tear down the silos. It's not that you want to destroy functional special specialties, what you want to be able to do is leverage the information and context that each of those groups have to help the rest of the groups accomplish the mission. And that starts with going full circle back to something Matt said earlier, which is, why are we here? Like, let's all get on the same mission, right? The mission is not to configure servers. The mission is not to develop software. There's some larger mission that we're all driving towards, or we're gonna suffer for all these problems that we can point out over and over.

**Bridget:** [00:48:14] Yeah, I mean, that makes perfect sense, but like, I think drawing that line that might be kind of fragmented and dotted between we manufacture or sell this widget all the way to I need to have some servers that are configured correctly, it's maybe it's a, sometimes different— it's difficult for people to see how what they're doing affects the mission, or they maybe they feel disconnected from it.

**Andrew:** Sure.

**Bridget:** I mean, what's your, what's your recommendation for individual practitioners who see some exciting, possibly frothy, possibly terrifying change happening around them, but they, they want to connect to the the wider mission of the organization? What should they do?

**Andrew:** It requires true leadership. And going back to my 7 dimensions of organizational learning, one of the dimensions is how much people can participate in the dialogue regardless of their rank. So when you have a culture that enables those frontline workers to participate in the flow of information, both putting information into the system and getting information out, it's much easier for them as individuals to see the context and the contribution that they're making because that information is available to them.

**Bridget:** [00:49:37] Yeah, that means—

**Andrew:** there's a bunch of tricks with, like, information radiators, but I think at some level it just comes down to actual human leadership and being able to go— we already sort of mentioned this notion of identity and narratives, How much is the organization creating a narrative for those people on the floor to attach themselves to, to understand how? Because on some level, there's probably some immeasurable qualitative things about how someone does their work that's not going to roll up into something that gets measured and optimized by Taylorism. But you can get people to believe in the cathedral. You can get people to believe that they're on that higher mission. And that, in my opinion, that's the most transformative thing. And that whole book, going back to the mention I just made about Tina Teams, like he basically says, the thing that we need to change to move into the next phase of this is not how workers do their work. It's how we manage people.

**Bridget:** [00:50:46] I like it. So bringing it down to a slightly more concrete, looking at stuff happening in our industry right now, other than, you know, people arguing about tools on Twitter, there's been some interesting news lately. Um, we saw Red Hat buy CoreOS, uh, CloudBees just acquired CodeShip. Like, it kind of looks like, oh, maybe we're in a period of more consolidation. What do you think is going on with that?

**Andrew:** Yeah, I mean, I think that you're gonna see more and more consolidation. I think that it doesn't make sense for— you're not— I'll say this, and, you know, this is just true. You're not gonna have 2 dozen Kubernetes startups that, like, survive. Like, not happening. So that's the consolidation, sure. But I, yeah, I think CoreOS was an interesting place with the team they had, you know, etcd, which is sort of foundational to at least how Kubernetes works today. And that aligned with the things that Red Hat was trying to do. And there's probably also, I mean, I think it was a good, probably good strategic decision for both sides. And it's definitely something that everyone else in that landscape is, uh, is gonna notice.

**Bridget:** [00:52:03] I find this interesting, um, especially because, I mean, Stratton has spent a bunch of time in the infrastructure space and is now kind of maybe at pager duty, more focused in like the operational human layer. Um, like, where are the— and I'm curious what both of you think about this— like, where are the trends going Now that, okay, there's some consolidation around, say, your cloud-native, your Kubernetes platform tools, but it's also still a really active space. What's going on there? What does our prognostications look like?

**Andrew:** I'm not sure I understand the question.

**Matty:** I was just going to say, what are you actually asking?

**Bridget:** What I'm asking is, it seems like if you look at the CNCF project chart, which just gets like more— it gets to be more and more of an eye chart every time I look at it.

**Andrew:** It's gonna get worse before it gets better.

**Bridget:** Yeah, like, when is all of this going to be a little more obvious for enterprises as to what they should focus on? You know, which service mesh do you want?

**Andrew:** [00:53:09] I have a simplification, and it will be obvious when it's too late. So, there's that little problem. But I think you're just gonna see patterns emerge, and then, you know, the dominant dominant successful patterns will be the ones that get legitimized, right? And then that's what you'll see people adopt.

**Matty:** I think, I think that's, that's bang on because there's— it's just too much, too much to absorb and too much, uh, of a chance to do not invented here, right? Because even if you didn't write the code, right, that's a, that's a full-time job to figure out how you're going to implement that. And again, what's the point of doing your own custom bespoke implementation of of doing this distributed system when there are patterns, when there are successful patterns that get you 90% of the way, and then you turn your piece on that you don't have to— it stops being about being nerdy, right?

**Andrew:** I think if you're watching that evolution, um, specifically around the CNCF, where you have this core nucleus that was sort of centered on Kubernetes to start with, Kubernetes came into the world with a lot of gaps and a lot of things. And so what you've had in the majority of these projects, although not all of them, is someone filled those gaps and then that became a new project. And that's gonna stop when all the gaps are filled, right? So that's just how it is.

**Bridget:** [00:54:32] Maybe the reason I have this on my mind is because last week I read a lot of the proposals. I was voting on proposals for KubeCon EU. And it seemed like proposal after proposal was statement of problem space, okay, sounds reasonable, exciting open-source project to solve it, dot, dot, dot, maybe profit. And I would go look at the exciting open-source project to solve it, and it would have 2 contributors. And I'd be like, okay, so this isn't— but oh, it only just got open-sourced last month. And then that pattern just kept repeating. And I'm like, wow, I'm not sure if a lot of people are contributing to each other's projects on some of these. I'll pick on service meshes for a minute, but monitoring, whatever, it does seem like a lot of people are going the, and I'll just throw my own out there.

**Andrew:** So, 2 of the more fascinating, one of them is more relevant here than the other, but I'll drag them both in anyway, is gold rushes and witch hunts, right? So, we're definitely seeing an aspect of a gold rush where everyone thinks that there's gold in the hills, And they're gonna, they're gonna rush towards the, the gold that may or may not be there.

**Bridget:** [00:55:44] And, you know, it didn't—

**Andrew:** it doesn't— what's the price of Bitcoin today?

**Bridget:** Yeah, what's the— but I think, isn't the conventional wisdom you make money by cycles?

**Andrew:** That is the conventional wisdom and often, often the case, but sometimes there's actually gold too.

**Bridget:** All right, and then the other thing about witch hunts.

**Andrew:** Well, I, I think that there's a— there's, there's nothing that unifies tribes more than being against something, right?

**Matty:** And I had, uh, what was the term I always liked, which was ostracize one, galvanize the rest, you know?

**Andrew:** Yeah, so, so you're seeing an aspect where people are like, oh, this is the, this is the new way, and like everyone, everything else is bad. And then, I mean, you see this in all these sort of adoption curve movements too.

**Bridget:** So, the people who are excited about the new and shiny also want to point to something and call it old and busted just so that they can differentiate themselves?

**Andrew:** [00:56:44] Well, I mean, to be— yeah, to make it even a little more blunt, and especially given the title of the show, like, you're starting to see some conversations where people are like, oh, like, you know, DevOps is over, or whatever, because, like, now we have containers and and serverless. It's like, okay, well, good luck. If you thought DevOps meant configuring computers with Chef, like, okay, maybe that's a somewhat defensible position. Not really, because you still have a bunch of stuff in your data center. But if you actually think about it as a systems thinking optimization problem, then DevOps will never die. There's that little thing.

**Bridget:** I like it.

**Matty:** But it's a lot easier to think about it as a configuration management automation problem, which is, you know, people that—

**Andrew:** yeah, I mentioned this earlier in the conversation, people like something concrete that will reify what they're talking about. But yeah, if you hang out with me, you don't get that.

**Bridget:** [00:57:46] So if you hang out with Shafer, you find out nothing is actually simple.

**Andrew:** Well, it is getting expense reports approved. It's just not easy. It's simple. It's not easy.

**Bridget:** Oh my gosh. Okay, so we're— I'm looking at the clock and realizing we're running kind of long. So I think we should, we should probably move towards wrapping up. Let's just say community and event stuff. Where are we going to be? I have almost 2 more weeks at home and then I'm going to be in SF for IndexConf where I'm doing a Kubernetes workshop.

**Matty:** Cool. I am— by the time you listen to this, it won't matter, but I'm gonna be in San Francisco for a hot second next week. But, um, we're gonna be actually recording an episode of the show in the PagerDuty office because I'm going to be there. So yeah, it's— and, and, and one of the guests is Eric Sigler from PagerDuty. I was like, why don't we just record there instead of me being on hotel Wi-Fi? But we're doing an episode next week It's called You're Doing It Wrong, a.k.a. the Hot Takes episode with Eric Sigler from PagerDuty and Charity Majors and Jill Jablinski. So we'll see how it goes. Sometimes I just have these ideas and we see. Then I am going to be at DevOps and speaking at DevOps Days Charlotte. The week after that, I am going to be at a meetup in Denver the end of February. And then I'm going to sometime next month. So, yeah, if you're in the Minneapolis area, March 20th at the Minneapolis DevOps meetup, I will be there talking about incident command until we find a better term that doesn't sound so militaristic. And as I don't remember who the quote was from, Bridget, you were telling me, but which was, if any, any people who talk about, you know, DevOps from a, from a military perspective would shit their pants if they actually saw combat, you know, so. We're working on that.

**Bridget:** [00:59:44] Nice. How about you, Shaffer? Where can people find you out and about?

**Andrew:** Well, this is maybe not relevant to the listeners, but the next conference I'm most excited about, I get to go as an other. I'm going to the American Glaucoma Society, 1st of March in New York City. So if someone's in New York City and wants to hang out, I might be there for 4 days with free time in the day as my wife goes and learns about how to do things to people's eyeballs. And I'm gonna bounce around. I mean, there's the stuff that Pivotal's doing. There's this Spring One Tour thing that I'm helping put together. It's a little bit up the stack from some of the stuff we talked about today, but, you know, cloud-native Java stuff. And then there's a few things people have requested me to come talk to you, but I have this nanny babysitter problem to solve that I'm working on, so I'm not sure exactly Exactly what my schedule will be.

**Matty:** There's got to be an IoT solution for that somehow.

**Andrew:** But if you'd like me to come to your— if you'd like to come to, you know, I could show up to weddings or bar mitzvahs. My DMs are open on Twitter if you have an opening.

**Bridget:** [01:00:51] Oh my gosh, this sounds like an excellent plan.

**Matty:** I was just thinking when you were talking about going to the Glaucoma Society event, I occasionally get to go to fun ones with my wife, not for Glaucoma Society, but she works in marketing in different industries, and we're going to Phoenix for an event that's during spring training. And so basically, yeah, during the day I get to, you know, hang out and go to the pool and the spa while she's working, and then we go to the Cubs spring training game. And, you know, it's—

**Andrew:** I'm not sure the listeners care about this either, but it's also the first time, uh, we've left our children. Oh, so, so that should be, uh, that sounds very relaxing.

**Bridget:** That sounds like lie in bed until 10 in the morning on the days she doesn't have to go to conference Nice.

**Matty:** We got, yeah, a lot of open CFPs. So, if you want to speak at DevOps Days, go to devopsdays.org/speaking. You can check that out. GopherCon's CFP is open until March 15th. That's papercall.io/gophercon2018, or you could probably just Google GopherCon CFP. The GopherCon itself is August 27th through 30th. I regret to inform you that we just announced the dates of DevOps Days Chicago, which is August 28th through 29th. So I was all excited that I was gonna go to GopherCon this year. I am not. It would be pretty shitty of me to not show up at my own conference, but rest assured we did everything we could. And I have exchanged many tearful, on both sides, DMs with Brian and Eric and all the GopherCon folks, we, we wish it didn't happen.

**Bridget:** [01:02:33] Um, but think of it this way, not every single person in Chicago is going to have their company fly them to Denver. So there will be awesome stuff to learn and do in Chicago instead of being in Denver.

**Matty:** No, no offense to the people who can't do that, but I'm more upset that A, I can't go to GopherCon and B, a bunch of people are going to go to GopherCon that I want to see instead of coming to Chicago. So, um, yeah. So what's, what were we talking about? How we stick to our own identity. Uh, discount codes, you probably can get something like 20% off at DevOpsDays with ADO2018. That same code will get you 10% off ChefConf, and those cheap people at GopherCon will only give you 5% off with that code. But I'm pretty sure GopherCon is $500.

**Bridget:** Those cheap people who are not a company, who are just a couple of my coworkers.

**Matty:** I know, I'm just teasing. Also, I think the GopherCon cost is higher, probably. So, 5% off GopherCon is probably more dollars than 20% off at DevOps Days. If you like math. We theoretically have a form you can fill out if you want us to talk about your conference, arresteddevops.com/conf. But generally speaking, you know, our DMs are open on Arrested DevOps. Not individual people, sorry, the show's DMs are open. And by that, I mean me, because I'm the only one who logs into the account. So, yeah.

**Bridget:** [01:03:50] I don't have credentials for it. Yeah, this is actually fine by me.

**Matty:** Plausible deniability, my favorite strategy for every game.

**Bridget:** Yeah, I, I've made the, uh, life choice of being a woman and using the internet at the same time, so my DMs are definitely not open. And I also don't read most of my email, so good luck bothering me.

**Matty:** Talk to Bridget. You need to do it in the open, as you should.

**Andrew:** Oh.

**Bridget:** All right, so Shafer, this has been super exciting. Like, it's so fun to get you to come on and, and talk about your theory stuff that I definitely understand at least 70 or 80% of. And I have— I feel like I'm going to Google up some things and give people links in the show notes to read so that they can understand more of—

**Matty:** I got to miss my— good.

**Andrew:** There's more where that came from.

**Matty:** Yeah, I, uh, what was I gonna say? Oh yeah, I got to miss my stand-up.

**Andrew:** I'm gonna write a book.

**Bridget:** You're gonna write a book?

**Andrew:** Yeah, I decided to write a book.

**Matty:** Is it just— is it like a— it should be like your memoir of DevOps tropes.

**Andrew:** [01:04:51] Um, that would be a fun book, but that's, that's not the book. I'm gonna write a book about this, um, 5-element model of DevOps that I like, and it's just the CALMS thing, but, but like, I want to make it more— I want to try to reify some of the meta stuff that I apparently like people don't understand or whatever, um, and try to make it a little more actionable. So I've joined a reverse book club with some other writers where we have a meeting every 2 weeks and we talk about our writing and progress.

**Bridget:** You talk about your writer's block every 2 weeks?

**Andrew:** Well, no, we try to make commitments and then we try to tell each other like what we did. And then we also share the stuff we did and get feedback on it.

**Bridget:** Nice. That's awesome.

**Matty:** Sounds like my stand-ups, which are mostly like, nope, didn't get anything done. Here's a long list of blockers. Mostly first blocker, I'm a big procrastinator.

**Andrew:** Altered Carbon.

**Matty:** Yes. Oh my God, I need to start watching. It's right on my list. And unfortunately, my Andrea had to watch This Is Us last night, so I didn't get my Netflix time. But I have to say, this is gonna sound terrible because traveling for work is awful, but I'm really excited that I'm traveling for work again because I can start watching my shows again.

**Andrew:** [01:06:07] If you've never watched Westworld, you should watch Westworld before season 2 comes out.

**Matty:** I need to get caught up. We started it, and then it got— and then it just sort of dwindled for us. But, yeah. Anyhow, so, if you go over to arresteddevops.com/firesidechatlittleidea, with little dashy-dos between the words, for these episode show notes, you'll find the episode show notes. You can also sign up for our newsletter, our Patreon. You cannot sign up to get your own stickers because Sticker Mule pulled the rug out from underneath on us, so we're actively seeking a new sticker vendor who will do a marketplace for us. Sticker vendors, if you're listening, one of you already tweeted us, by the way. Go to arresteddevops.com/itunes, leave us a review in the iTunes Store, talking to you, Kote. That helps other people find the podcast.

**Bridget:** Just get Kote to come on the show.

**Matty:** That would be the review. We're working on it. I was talking to Brendan. Yeah, we're trying to do a crossover show with Software Defined Talk.

**Bridget:** So, what do you think, Shafer, before we wrap up? What's your final word to us?

**Andrew:** [01:07:13] I think that'd be a fun episode. I volunteer to come on as 5% of both of those podcasts, I think.

**Matty:** One of my favorite episodes of Software Defined Talk was Andrew, and it was like a couple of years ago, but it was like, 7 different versions of OS X and they still haven't fixed the calendar yet or still haven't fixed Wi-Fi or whatever. But it was like, I can't remember, it was like Snow Leopard had just dropped and was like, here's everything that's still terrible.

**Andrew:** Computers.

**Matty:** Yep. Oh, how do they even work?

**Bridget:** Love it.

**Andrew:** Take them off the list.

**Matty:** So I'm Matt, or as I'm trying to be, Matty. We'll see if that sticks, but I am @MattStratton.

**Bridget:** And I'm Bridget at Bridget Kromhout. We're Arrested DevOps.

**Matty:** And remember, there is always DevOps in the banana stand.
