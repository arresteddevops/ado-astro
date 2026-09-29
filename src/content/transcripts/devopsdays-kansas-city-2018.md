**Monica:** [00:00:00] Just the amount of smart and knowledgeable people that are at this conference. It's like, it's nothing I've ever really seen, just this amount of talented people.

**Matty:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and optimize your team or organization for maximum DevOps awesomeness. My co-host today is—

**Jessica:** I'm Jessica DeVita from Microsoft. I'm super happy to be standing in as your co-host today, Matt. Thank you so much for the invite and glad to meet all you folks today.

**Matty:** Excellent. So, yeah, we are recording here from DevOps Days Kansas City 2018, and we've got a great panel. But before we get to them, we'll have a word from our sponsors. The worst time to learn about incident response is during an incident. Don't wait for an outage to strike before getting started. The PagerDuty Incident Response Training Course is now open source and free for everyone at response pagerduty.com. Based on the same training that PagerDuty employees go through, this course will show you how to streamline your incident response process, turn chaos into calm, and demonstrate the role of an incident commander. So what are you waiting for? Go to response pagerduty.com today and check it out.

[00:01:22] Your application sits on layers of dynamic infrastructure and supporting services. Datadog brings you visibility into every part of your infrastructure, plus APM for monitoring your application's performance. Dashboarding, collaboration tools, and alerts let you develop your own workflow for observability and incident response. Datadog integrates seamlessly with all of your apps and systems, from Slack to Amazon Web Services, so you can get visibility in minutes. Go to arresteddevops.com/datadog to get started with Datadog and get a free t-shirt. With full observability, distributed tracing, and customizable visualizations, Datadog is loved and trusted by thousands of enterprises, including Salesforce, PagerDuty, and Zendesk. If you haven't tried Datadog at your company or on your side project, go to arresteddevops.com/datadog to get a free t-shirt and support Arrested DevOps. Your application sits on layers of dynamic infrastructure and supporting services. Datadog brings you visibility into every part of your infrastructure, plus APM for monitoring your application's performance. Dashboarding, collaboration tools, and alerts let you develop your own workflow for observability and incident response. Datadog integrates seamlessly with all of your apps and systems, from Slack to Amazon Web Services, so you can get visibility in minutes. Go to arresteddevops.com/datadog to get started with Datadog and get a free t-shirt. With full observability, distributed tracing, and customizable visualizations, Datadog is loved and trusted by thousands of enterprises, including Salesforce, PagerDuty, and Zendesk. If you haven't tried Datadog at your company or on your side project, go to arresteddevops.com/datadog to get a free t-shirt and support Arrested DevOps.

[00:03:12] So, yeah. So, we're recording here, DevOps Days Kansas City 2018. This is my first DevOps Days Kansas City. I'm a big fan of the Kansas City DevOps community, really excited to be here. But we've got a great panel of mixing up attendees, organizers, and speakers. So, before we get started, we'll get quick introductions.

**Ana:** All right.

**Ben:** My name is Ben Clayton. I'm a director of DevOps for Company Kitchen, and I also run a local user group in town.

**Ana:** Hi there, my name is Ana Medina. I'm currently based out of San Francisco, and I work at a small startup called Gremlin doing chaos engineering.

**Dan:** I'm Dan Barker. I'm the chief architect at the National Association of Insurance Commissioners, or NAIC, and I'm also an organizer for DevOps KC and DevOps Days KC.

**Monica:** My name is Monica Hart. I'm a technology associate at VML Y&R. Shout out to my group. This is my first DevOps Days in Kansas City as well, and I would also— I'm a very novice, like, associate technologist as well.

**Matty:** [00:04:18] So, this is the 3rd DevOps Days Kansas City. For those of you who've been to all of them, which I think is just one. Just me. Just you. What's different this year than when you got started?

**Dan:** Yeah, so we got started in a much smaller theater, so we've kept the theater theme throughout, but it was a much smaller theater called Musical Theater Heritage, and it was pretty amazing, so we've kept that consistent, but we've improved the chairs since last year. That was a complaint. We've introduced workshops this year, which have gone pretty well so far, I think. We're hoping to get some better feedback on that. We've done the Ignite karaoke. It was kind of just a happenstance the first year that we had someone come down from a different city and do a Kansas City-based Ignite. And so that person went home and created one for Toronto and— or not home, I mean, he didn't go back to Toronto. He went to his hotel and created it. And then he came back the next day and another person from KC did the one on Toronto. So, we try to keep that theme year after year. But we've gotten bigger. We've doubled pretty much our attendees in the last 3 years, and it's been pretty incredible. It's gotten a little bit easier. We've gotten, obviously, an incredible video wall behind us. The production is just amazing. I mean, you'll see cameras roaming around, so it's pretty impressive.

**Jessica:** [00:05:50] This is my first Kansas City DevOps Days. I've been to quite a few of the DevOps Days And it's just awesome to see this particular community continue. You know, this is the 3rd conference, and it's really awesome to see. And I've met a lot of new people and folks who have been involved in the community. And so far, super impressed. And just congratulations, and thank you to the organizers for putting this together. You know, the organizing work is so important, and it is— its difficulties. So, congratulations for making this happen, and thanks everyone for being here.

**Matty:** Monica, so this is your first, not only your first DevOps Days Kansas City, but the first DevOps Days event that you've been at, yes? So, what are some of your impressions from attending this event so far?

**Monica:** Just the amount of smart and knowledgeable people that are at this conference. It's like, it's nothing I've ever really seen, just this amount of talented people. All together talking about topics and offering certain advice on what we can approve— I mean, improve, excuse me. And it's neat to see all the different opinions and how people use DevOps at their employed spaces versus, like, how I use it maybe at work. So, maybe thinking, coming up with ideas, thinking, like, oh, you know, I've never tried that. Like, after this conference, I'm gonna go home and tinker around with Kubernetes and like all this stuff because really it's, um, the amount of, uh, tech and, uh, the knowledgeable people who work around them is amazing and just kind of inspiring from someone who's coming from a very basic background, uh, coming— well, I don't, I don't come from a tech background, period, at all. It's a really cool experience. It's eye-opening. And sometimes I get— I nerd out like a lot. Like, I would go up to people and I'm like, You're who?

**Jessica:** [00:07:45] Oh my God.

**Monica:** Like, you're like a celebrity. And then it's like, okay, calm down, calm down. Like, getting a little too excited there, Turbo.

**Ben:** Don't worry.

**Dan:** I totally did that when I found out Mike Julian had submitted.

**Matty:** So yeah, shout out to Mike.

**Monica:** Yeah.

**Jessica:** Yeah.

**Matty:** Nobody says that about Corey Quinn though. Where is he? Hopefully Corey better be in the audience if I'm trolling him.

**Dan:** Yeah.

**Matty:** Ana, do you want to tell us, especially for the listeners who were not privileged to be able to see your awesome talk this morning, tell us a little bit about what your talk was about and what that experience was like?

**Ben:** Yeah.

**Ana:** So, I'll actually piggyback on the last answer. This is actually my first time in Kansas City. This is my first time being at any DevOpsDays event. It's also my first keynote, which was actually really cool. So, my talk today, this morning, was getting started on chaos engineering. And it was an introduction to the practice of chaos engineering in a more fun manner. And I talked about some of, like, the reasons why chaos engineering should be practiced. And a lot of that comes down to the fact that our companies, our infrastructure just continues scaling. And as our systems are getting more complex, the cost of downtime is really, really expensive. There's a report that says that it's around $300,000 for every hour that a company is down. And of course, this all depends on the type of company that you are and your user base, your customer base. So, with implementing something like chaos engineering into your company, you're actually able to start thinking about resiliency firsthand. And a lot of that can be how do you actually make sure that you have put fixes in place that don't allow for outages to continue happening in your company? Chaos engineering can also be used to, like, help with onboarding for on-call, And in general, just gives a lot more time for engineers to be focused on development as it reduces on-call and incidents that they have to deal with.

**Jessica:** [00:09:56] Just a follow-up question to that. So, I wasn't able to see your talk, but I'm really looking forward to the recording. My question is that, you know, chaos engineering is, you know, we're hearing more and more about it, but it's really only been, I think, this year that I've started to see more talks on this practice at various DevOps Days events. And I'm wondering, does that— feel right to you?

**Matty:** Does it—

**Jessica:** am I the only one thinking that these are now starting to become part of this larger conversation on robust systems and resilient humans?

**Ana:** You know, I definitely think that people are, like, starting to talk about, like, antifragility and how to get to a point that your systems are antifragile. And, uh, with that conversation comes a lot about, like, the conversation about resiliency. And a good way to approach resiliency is chaos engineering. I myself have been doing this for 3 years, but the practice of chaos engineering has been around for about 10 years. Netflix was the company that actually coined the term of chaos engineering by starting an open source project by the name of Chaos Monkey, and that was just randomly shutting down AWS instances to practice that mindset of chaos engineering. I would say that there's been companies who were doing it, before that, who currently do it now and don't talk about it. So, it's cool to see this open space where people are more comfortable sharing about their failures and talking about how they're doing to make their DevOps infrastructure SRE practices to be a lot better.

**Matty:** [00:11:31] I was going to say, it definitely has been a year of thinking about resiliency a lot more. Ana and I were just talking about— so, there was a conference in San Francisco a few months ago called Redeploy, which was based upon, you know, concepts of building resilient systems, building resilient teams, building resilient humans. And so, the plug I'm going to give right now is the videos from all the talks just got released yesterday. So, you can experience them. So, that's at redeploy.io/videos. So, there are great talks from, like, Nora Jones at Netflix and John Allspaw from Adaptive Capacity Labs. And some other jackass, you know, from PagerDuty gave a talk, but, you know, the other ones are better. But I think we're seeing more of this theme of resiliency, right? And I would, Jessica, I would absolutely agree. And I think it's an important one because our systems are always in a state of some type of degradation, right? And that's just a statement of fact. And we have to figure out how we can be resilient and adaptive to those things. So, Ben, I'm curious. So, you run the VMUG here. From your experiences with that user group and then the DevOps user group and DevOps Days here, where are you seeing overlaps? Where are you seeing interest overlap? And human overlaps?

**Ben:** [00:12:42] Yeah, I mean, I think there's a lot of overlap. The virtualization community's realized that they have to embrace some of the DevOps culture. A lot of engineers have come to VMUGs traditionally to get career advice or knowledge, and I've told them that they're going to need to learn how to code at very basics, at least learn scripting, some of the basics. You know, just DevOps principles to take forward in the next career. So, you know, I think there's a lot of overlap. As far as the meetings, I mean, I think there's a lot of similarity to the all-day meeting that I put on to this one. I will say that I outsource a lot of my behind-the-scenes things. So having this completely volunteer-led I think that the amount of work that goes into it and the volunteers just giving of themselves to, you know, make sure that they can give back to the community is amazing. And I'd just like to thank everybody that helped put this on.

**Dan:** [00:13:44] Yeah. And I want to focus particularly on the volunteers this year. So that's something that's also different. We didn't have many, if any, volunteers the last 2 years, and that has been incredibly helpful. So that's the thing we should have done before, but they have been just so helpful to be able to take on some of the tasks around registration. So go thank the people at registration. Most of those are usually volunteers. There are people who have been holding up signs. I don't see him in here. He hasn't held up a sign yet. So yeah, we still got a little bit of time. But, you know, last minute, we've had several volunteers come in that have, that have really pulled a lot of weight.

**Matty:** I'm going to ask a question to everybody in the panel, and then I'm going to put it out there for the audience. So we'll have you— we'll repeat the question if you do, because I don't think we have mics. But what's been your favorite thing about this event so far? And we'll just kind of start since you're to my left. And so, Monica, you got plenty of time to think.

**Dan:** Okay.

**Ben:** For me, it's been the networking. Yeah, this event is great for meeting people. I think it's the most important thing you can take away is just building your network. And this is a great way to do it.

**Ana:** [00:14:52] I think I've actually really loved interacting with like the organizers. It's been like a very inclusive community. They've made sure that everyone feels very welcome. And I actually landed from San Francisco right as the speaker dinner was ending. And I was like, oh man, that sucks. But like, I'm still going to drop by with another speaker. And even though a lot of them were like leaving, they actually like stuck around and like still like, like, let us order like some barbecue and a beer to like really get a welcome to Kansas City. And I really, really appreciated that. And I think that definitely comes with putting on a good conference, like being able to make sure that your speakers also feel like they're part of the community even though they're coming from different cities?

**Dan:** So, one of the goals for DevOps Kansas City is to help improve the culture of all the companies within Kansas City. And so, I've been really happy to see so many different companies attending and several companies sending quite a few people and really embracing the DevOps movement. We've definitely seen an increase since last year in how many people are being sent from different companies, but also in how many different companies are represented.

**Monica:** [00:16:00] I agree. I kind of want to piggyback on the networking. That has been awesome, meeting new people and maybe seeing a couple familiar faces, but I never really have gotten to talk to them before. So that's really cool. I think one of my favorite things has been the open spaces. Yesterday was really cool. We did— I was in an open space over workforce transformation. Yesterday, and it was just so cool to see, to hear other people's opinions and just kind of like go over maybe some common issues that all of us battle, but we don't really talk about a whole lot. And so then just kind of going off from that, and then kind of one of the other big focuses is like, okay, like, well, we have these issues, what are we going to do to solve them? And that was really cool. We wrote out some ideas, you know, and just kind of some topics. Well, how have you guys handled this before? How, you know, maybe can people handle it in the future? So, that was really cool, getting to talk with other like-minded people and their experiences.

**Jessica:** [00:17:04] I would ask too, like, what surprised you? You know, as you come to a conference like this, you maybe have a sense of what a DevOpsDays event is like because maybe you've been to one before. But sometimes we have those, you know, ideas of what something will be like, but it's fun to ask what surprised you the most about the conference so far. What surprised you, Matt? I'm curious.

**Matty:** I think really I'm always— this is going to sound kind of weird, but I'm always surprised by how much more I learn. And that's not supposed to be because I know every single thing, but it's because of different areas that it doesn't occur to me that it's something to think about. And I come away from all of these events a much more well-rounded person. And I think that really hammered home at this event because there was just such a diversity of opinion— not diversity of opinion, but diversity of topic. And it wasn't— there, you know, I mean, the keynote yesterday was about flintknapping, about like making stone tools and how that applies to the tooling that we do today. And it was just— and then I did some follow-up and learned a little bit more about flintknapping and like maybe that'll be a thing I want to do as a hobby. I don't know. So I guess that's the thing that surprised me the most was to learn that like I might want to make Paleolithic tools as a hobby.

**Jessica:** [00:18:22] Well, and just a comment too on the open spaces. You know, I wasn't able to participate in them, but whenever you can, I highly encourage you to do that because it is so rewarding. It's not PowerPoint and presentation. It's conversation. You know, we're all humans trying to solve these interesting, very complex problems in our systems. So not only do I encourage you to participate in open spaces, but I would encourage you to take them back to your company and try them. Try it with a small group and run an open space. It can be called like a lean coffee or unconference-style meeting. And the most magic happens in those. And you can have that too.

**Matty:** One of the things that I learned, I wasn't completely aware of, but it's sort of nice when a thought you have is validated. So I've always believed that the reason we have talks at DevOpsDays in the morning is to drive to the open spaces so we have something to talk about. That's why I like that DevOpsDays are single-track in the morning. At DevOpsDays Chicago a couple of months ago, when Andrew Clay Shafer, who as we learned was one of the creators of DevOpsDays and DevOps as a movement, he said when he and Patrick did the first DevOpsDays, ideally, really all they cared about were the open spaces, and the only reason they had talks was they said that's the only way they knew that companies would pay for people to go. But if it was up to, you know, sort of that was up to them, they'd be like, it would just be open spaces all the time. So, and I've also always found that, you know, people ask a question to the folks here. How many people, this was your first experience with open spaces? Okay, keep your hands up if it was your first experience. How many people thought it sounded really super— but put your hands, keep your hands up if you thought it sounded super bizarre when you first heard about it. How many people— okay, okay. You can put it out. How many people thought it was super awesome after experiencing it for the first time, right? So it's sort of one of those things where like when you haven't done it before, you're like, really? I'm not sure. Then you do it and you're like, I want to do every conference.

**Jessica:** [00:20:26] Well, I just— last comment too is I think what's so fascinating about open spaces and then that kind of meeting is it really calls upon you to carry the responsibility for creating the meeting that matters to you because you're bringing the topic or or collaborating in discussion. And it's like those outcomes are sort of like part and parcel for everyone in the room versus this, you know, someone else's agenda necessarily. So I think that responsibility to participate is so fabulous.

**Dan:** And I find that everyone in this community is very open and transparent and wants to share and wants to grow. And that's been really valuable. And when I get to— I don't get to participate in as many open spaces as I'd like here. But when I do, it's, you know, I learn a lot and I learn a lot about what other people are doing in the community. And we want to be able to facilitate more interactions between companies and have people cross-speak at different companies from one to another so we can increase this learning throughout the entire year. Also, who all here is this your first time attending, which I probably should know, but how many people is first time? Oh, so for those of you who are— That is the most surprising thing to me.

**Matty:** [00:21:37] Okay. So, for the people listening to the podcast, that was probably a good, I don't know, I'm going to eyeball and say 3/4. Yeah. Yeah. 75, 80% of the room.

**Dan:** So, that's phenomenal.

**Matty:** So, that's really good. So, those of you who are taking a chance on coming to your first DevOpsDays, let's, as Aaron would say, applause.

**Jessica:** And can I get a show of hands of who's coming back next year? Oh yeah.

**Matty:** That's a good—

**Jessica:** We should have asked.

**Matty:** For those of you who it's your first time, who would like to come back again next year?

**Ben:** Okay, good.

**Matty:** That's awesome. Sorry, that's a survey question. So, to take that same question that Jessica asked earlier, I'd extend it to the panel of, again, what surprised you?

**Ben:** I think one of the things that surprised me is just the— you can kind of feel the change in the community as far as embracing the DevOps movement, as far as, you know, some of the companies that traditionally would have been hesitant to make such big changes. I know there's some in particular that I see lots of people from the company that I wouldn't have expected them sending so many. So it's amazing that, you know, there's so much enthusiasm for the movement.

**Ana:** [00:22:44] I think for me it's actually just been like the people, like overall, like whether it's an organizer or a speaker, attendees like that I've gotten a chance to talk to. Overall, like just impressed with the work that's been going on. I kind of, like, sadly live in the Silicon Valley bubble, so everyone just thinks that that's the place that all the coolest stuff is happening. So, it's really cool to be able to come out to the Midwest and, like, hear what Kansas City is, like, up to in the DevOps space. And overall, like, it's been really good conversations. People that want to talk about monitoring, want to talk about Kubernetes, want to talk about chaos engineering. And it's like, I've been doing a few conferences, like, over the last few months. And, like, it's the exact same type of conversations I have with folks all around, like, in all those other spaces. So, it's, like, just in general, been, like, a good feel for that.

**Dan:** Yeah, and I already said mine, kind of, that it's the, you know, so many first-time attendees. That's kind of surprising to me. I probably should have looked at the data beforehand. But I didn't realize that there were going to be that many first-time attendees. And there's so many people from companies that are historically not necessarily involved in the DevOps community. And I think that's a really positive move.

**Monica:** [00:23:53] I think kind of what surprises me and keeps surprising me really is that, like, the DevOps community in general, like, is a really judgment-free zone, I feel like. Like, because coming from just, like, different background where, I mean, people still have their opinions and stuff, and I might say something, like, about a certain program or tool or anything, and then someone might be like, hmm. Well, that's different. Why do you think that way? You know, and it's just kind of more of an analytical— since we're all very much, I feel like, analytically minded people. Yeah, I've yet to say— I have yet to have someone be like, well, that's just stupid. Why would you do that?

**Matty:** That was not a challenge, by the way.

**Monica:** Yeah. Yes.

**Ben:** Be nice.

**Monica:** I'm very green still.

**Dan:** That's not acceptable.

**Jessica:** Yes.

**Matty:** Code of conduct is a thing.

**Monica:** So That's just very— that surprises me. And I don't really know why, but maybe it's just coming from different backgrounds and just kind of used to, you know, people not really backing up why they feel like that way versus it's just kind of like, well, this is how I feel and too bad for you kind of thing.

**Matty:** [00:25:04] So one quick wrap-up. I'm going to throw out a challenge to the panel. To describe DevOps Days Kansas City in 3 words?

**Ben:** Culture, fun, and networking.

**Matty:** I'm not asking you to do a haiku. That would be hard.

**Ana:** It literally just might be, that was rad.

**Matty:** Nice.

**Dan:** I don't know. Growth, community, and challenge.

**Monica:** Mind-blowingly awesome.

**Matty:** There we go.

**Jessica:** Nice.

**Matty:** The show notes for this episode will be available at devopsdayskc.com. No, it won't. It will be available at arresteddevops.com/devopsdayskc2018. Don't go there yet. They're not going to be there. That's for the people who are listening. So, if you're listening to the show, you can check out the show notes at arresteddevops.com/devopsdayskc2018. I absolutely want to thank the awesome panel for joining us today. So, thank you very much for being a part of this. Thank you. Thank you to the DevOps Days Kansas City organizers for letting us record here. And also, if you are someone who would love to kind of maybe try out speaking at a DevOps Days, if you go to devopsdays.org/speaking, there's a list of the events that have open CFPs. I know There's a bunch of international ones right now. Seattle is open right now. Charlotte is open right now. Whenever you're listening to this, there may be some more. So I, even if you've never given a talk before, DevOps Days is a great place to get started with that. And you can, if you go to arresteddevops.com/itunes, leave us a review in the iTunes store. It helps other people find the show. You can follow us on Twitter @arrestedevops. But so again, so my name is Matty. I'm @mattstratton on Twitter.

**Jessica:** [00:26:59] And I'm Jessica DeVita. I'm @UberGeekGirl on Twitter.

**Matty:** So, we are Arrested DevOps, and remember, there's always DevOps in the banana stand.
