**Kris:** [00:00:00] Because the usual suspects submit a lot and a lot and a lot of talks, and I'm looking at a couple.

**Matty:** Welcome to Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and optimize your team or organization for maximum DevOps awesomeness. I am, uh, Matty Stratton, and I'm joined today by Bridget Kromhout, and a bunch of other folks.

**Bridget:** We'll have everybody introduce themselves in a little bit. We are coming to you live from DevOps Days Amsterdam.

**Matty:** But before we get into our conversation, a quick word from our sponsors.

**Bridget:** Your application sits on layers of dynamic infrastructure and supporting services. Datadog brings you visibility into every part of your infrastructure, plus APM for monitoring your application's performance. Dashboarding, collaboration tools, and alerts let you develop your own workflow for observability and incident response. Datadog integrates seamlessly with all of your apps and systems, from Slack to Amazon Web Services, so you can get visibility in minutes. Go to arresteddevops.com/datadog to get started with Datadog and get a free t-shirt. With full observability, distributed tracing, and customizable visualizations, Datadog is loved and trusted by thousands of enterprises, including Salesforce, PagerDuty, and Zendesk. If you haven't tried Datadog at your company or on your side project, go to arresteddevops.com/datadog to get a free t-shirt and support Arrested DevOps.

[00:01:40] Fun fact, I did try to stack the deck just a little bit by asking one of the other participants in this conference who actually podcasts pretty regularly to join us as well. Would you like to introduce yourself, guest?

**Coté:** Sure. I thought I'd pull a Schaefer and come in the middle of a recording. So, I'm Coté, Michael Coté, and I work at Pivotal. I don't know. I was an analyst. I do some podcasts. Is that sufficient?

**Bridget:** That's totally sufficient.

**Coté:** All right.

**Bridget:** I think I've mentioned Software Defined Talk on this podcast before. Fun fact, the main podcasts I actually listen to are the ones that Coté records. For some reason, he's just hilarious.

**Matty:** For some reason, Coté is hilarious.

**Kris:** We don't know what it is.

**Jessica:** We don't know why.

**Coté:** That's right.

**Bridget:** It has something to do with being Texan, but you're moving out of Texas. Can you tell us where you're moving, Coté?

**Coté:** Yeah, we're moving here to a neighborhood I'm not going to try to pronounce.

**Thijs:** Amsterdam.

**Coté:** Yeah, yeah, yeah. Well, that neighborhood. I guess from a Texan perspective, it is a neighborhood of the Netherlands. But yeah, yeah, yeah, yeah. Actually, the reason I'm late is I was talking to the new landlords who are very charming people. So, yeah, it'll be fun.

**Bridget:** [00:02:49] That should be pretty great. So, we're here at DevOps Days Amsterdam, and I feel like when we do these podcasts at conferences, sometimes we come in with, like, a few guests we're gonna have on a stage, and we're gonna talk about a specific topic track. This time, we're doing it just as one of the open space, you know, discussions with some of the attendees, most of whom I don't know. So, I'm kind of excited to hear from them. As well.

**Matty:** Well, and what organically happened that was interesting, and I think we'll go right into that, is we're doing this during the 3rd open space slot of the conference, and the space we were coming into just concluded, or well, didn't really conclude because it's still happening, spoiler, an open space about public speaking and getting into speaking at conferences. And as we were starting to get set up, some of the participants were continuing, people here were having this conversation saying, oh, well, we should go continue this conversation somewhere else. Bridget and I said, no, let's do it right here. And well, now we have a show.

**Bridget:** We're going to Bill O'Reilly this out into production. We're going to do it live.

**Jessica:** [00:03:49] Yeah.

**Bridget:** So hello, guest. Would you like to introduce yourself?

**Jessica:** Well, my name is Jessica Brown. Some people might know me as Jessalyn on Twitter. But yeah, I work for Fastly. Yeah.

**Bridget:** And you were just in an open space where you were leading an interesting discussion. You want to summarize it for our listeners?

**Kris:** Yeah.

**Jessica:** That were interested in how to get involved with more public speaking and giving talks and having their CFPs accepted and how exactly to just get involved, right? And like the best way of starting out or— yeah. So yeah.

**Bridget:** So is the best way— now when you say involved, I think that this can go a couple of different directions. This can be, I'm volunteering to help run conferences, or it can be, I'm submitting my talks to be accepted at conferences, or maybe in your case, both. Can you tell us about what motivates these things?

**Jessica:** So, it seemed like everybody was interested kind of from the perspective of submitting CFPs and also how organizers kind of respond to those CFPs. As a conference organizer as well, and somebody who also submits CFPs, I apparently have some relevant knowledge to share. Um, so yeah, I mean, there was a few questions that you also had.

**Bridget:** [00:05:16] Um, well, um, and introduce yourself please.

**Kris:** Yeah.

**Thijs:** Well, I'm Thijs de Meester. I'm based here in the Netherlands for an ISP here and I walked up to her and yeah, well, I said, the thing is she made a really interesting remark that it took her quite a time before she actually submitted her first CFP. Yeah, and I'm— I know I like to share my knowledge. I do it in company. I give workshops. I give talks in company, but I haven't made the step yet of making my first CFP and just finding a topic or giving a first proposal for a talk.

**Jessica:** And I was wondering what got you into talking. So my experience was a little bit different because I have I'm very, very critical of myself. So I was struggling for a while even though I really, really wanted to give a talk, but I didn't know what people wanted to hear me talk about. And you can go and ask friends, you know, but they're just going to be really supportive and just be like, yes, whatever you say, it will be fine, right? But the way that I got a chance to actually narrow that down was going to smaller meetups that would have like, you know, 15 minutes to talk about like something and presenting like this really cool thing that I was working on, or this project that I was working on, and people were really excited, and they were talking to me afterwards and asking me all these questions. They were just like, oh my God, that's so amazing. And having that feedback and kind of going, okay, this small sample group really, really liked that, but that's good, right? So maybe other people would— if I can expand that talk and expand on that and make it into a 30-minute talk maybe other people would also like it. And that's how I got, like, my first CFP accepted was, like, actually expanding that talk into a 30-minute thing and explaining to people, like, how did I get to this point, right?

**Bridget:** [00:07:12] So, that's a really good point is that everything you're working on, once you've worked on something and you have some ideas about what went well, and spoiler alert, people love hearing about what didn't go well, because that way they don't have to fall down those same rabbit holes. So, a project you've worked on is a great thing to submit. But I think some of us, and I'm going to point to Kote here and say, some of us work in roles where we might not have a software project deliverable that we can show.

**Coté:** We don't work on anything.

**Bridget:** That's not necessarily true, right? So, how do you get ideas about what to talk about?

**Coté:** I guess if I was starting from zero, so, I mean, as you remember, at Pivotal, and I can talk about other contexts, but we have a lot of our customers who give presentations. So basically, if I was doing nothing, I would go watch those and aggregate smart stuff they said in there and then just have a very small footnote at the end of my slide. And then I would just kind of steal their stuff. Now, that's the snarky, funny way of putting it, I guess. But in reality, I don't know, it's sort of akin to like if you ever like did liberal arts stuff where you've got to like go to the library or the internet and write a paper by synthesizing all this stuff together. So that's like primarily in not doing work where I would get things. Now that said, once you get in this loop, there's sort of— it's sort of like sourdough, I guess. Like it's this loop of always building on something and you end up talking with a lot of different people and you get their ideas and you figure out their questions and then it just starts feeding in on itself after a while.

**Matty:** [00:08:46] During a break, my colleague Rachel was— I was talking and she actually asked the same question. She said, how do you get ideas? And I said, it's funny because I read a blog post that actually I think is a couple years old now, and we'll link to it in the show notes provided I can find it again, which gave contrary advice to how I work. So I go title first. So I think of a title and that's what ends up driving the talk. And it's And she's like, how do you come up with ideas? I'm like, I take a shower, I cut the grass. It's sort of those random things, but it also can come from conversations that you have. And I've found if you find yourself having a similar conversation multiple times with people or you're explaining something, that's usually good fodder for a talk or a blog post or anything like that. A lot of times I think we end up writing blogs because we're like, I'm tired of explaining this to people over and over again. So if I write a blog, I can now point you to it. And it's like, well, if I do a talk, I can now point you to it. But to go back to just your point about personal stories are very, very key. I think as someone who putting on the conference organizer hat and putting on the talk selection hat, I always want to see something coming from someone's personal story. I think what gets in the way of this sometimes for us when we're trying to do it is we're like, well, people have already talked about Kubernetes a lot. What do I have to do? Well, your particular story is different. Your experience is different. To be honest, people are probably far more interested in hearing your story about how you did Kubernetes for real in your real world than, no offense, Bridget, than Bridget talking about it, which is very hand-wavy and like, here's theory. Because again, we all don't work for a living anymore.

**Bridget:** [00:10:36] I think there's a good point to be made there about the distinction between talking about what you could do, which is a talk I could give and I don't really, because instead I go do hands-on interactive workshops so that people can play with a test cluster, which is again, not the same as production experience. That's not really a conference talk. That's just, here's a test cluster, here's some things you can learn by learning from that. But I want to go back to the point you were making about putting the conference organizer hat on because we have another guest here. This is a vast podcast. We contain multitudes. We have another guest. Guest, I would love to have you introduce yourself and tell us a little bit about how In the context of the conferences you run, you do talk selection.

**Kris:** So, hi, my name is Kris Buytaert. I've started, like, 3 conferences so far. This one, DevOpsDays, Confi Management Camp, and then a little small one, LoadDays. Talk selection is something really hard because, in a way, you want to get the best speakers out there in your conference because it attracts But on the other side, you also want to get new people involved. And it's really hard to select those new people because you don't know if they're any good. So we try to look at, did they speak at previous meetups?

**Bridget:** [00:11:53] Yeah, to Jessica's point, speaking at a meetup and getting good video of it, that's golden. You can turn that in with your conference talk submissions.

**Kris:** I used to be involved in running the DevOps track at DrupalCon. And one of the requirements at DrupalCon was basically you should have spoken at a previous local meetup before you can actually get accepted into a larger conference. Which is on one way actually raising the bar for people to get into the conference, but on the other side, it also teaches people that, well, it's not going to be your first time, so you're not going to make that mistake because you're a first-time speaker. And we're also supporting you into learning how to become a bigger, better speaker. But we need to try to find that balance between getting new people in or just getting The usual suspects will speak because the usual suspects submit a lot and a lot and a lot of talks. And I'm looking at a couple. Yes, you do, Cody.

**Bridget:** Well, you know, they're the usual suspects because spoiler alert, if our job consists of speaking at conferences, we're going to just barrage you with submissions and you'll be like, kind of need some new voices too.

**Kris:** [00:12:57] And the ones whose job does not imply that, like mine, We get asked, and I'm at a point where I'm trying to speak at less conferences. I mean, I still do the ones that are interesting. I'm still accepting invitations, but there's still a huge difference between going there because you're representing a company and eventually there's business involved, or, well, because you're evangelizing something, because you're actually talking about your own experience and talking about ideas you want to share. But getting new people involved often means telling them, and I had that discussion actually this morning with one of the DevOps Days organizers, like sometimes a really small topic which you really think is life-changing and which is really not that difficult, but explaining that story like, this is what I did the last 3 weeks and this is how I went from A to B, that sometimes is a really good conference talk because it's something—

**Bridget:** and this was S and this was Q. You definitely don't want Thank you.

**Kris:** [00:13:59] And it's an experience you went through. You learned something. And for you now, that is absolutely trivial, and you don't think you can fill 15 minutes with it. But if you go into, this is why we made those discussions, this is why we made those decisions, for somebody else, that's going to be really valuable. And that's kind of the topics we're looking at when we do talk selections.

**Jessica:** This was something that came up in the open space as well. Somebody was asking how Do you do tech talks? And I find that those are the hardest to do because delivery, most people just wanna go and demo this cool thing that they did, right? But that's not gonna be that interesting for the majority of attendees, right?

**Kris:** Pro tip, don't do demos.

**Matty:** Yeah, yeah.

**Jessica:** I was gonna say that as well, right? Demos can always go very, very badly, right? But yeah, it's like, how do you give a good tech talk? Because those are the ones, I want to see more of those in our CFPs that we're But they're also the hardest ones to actually do because you want to make it like, this is how we went from A, B, you know, to the end, and these were the issues that we had, and actually make it relevant for your audience that these are the things that you might encounter along this way, right?

**Thijs:** [00:15:17] So, if I hear you correctly, what you're actually saying, if you're doing a tech talk, it's an addition to the normal talk that you would do, and the demo is just an extra, but you still need to do all the effort that you would need to do for a normal talk.

**Jessica:** Yeah.

**Kris:** The thing with tech talks is a lot of people say that I wasn't the author of the tool. I'm not deeply into the internals, how they work. And one of the things that I, it was like 15 years ago, I was talking to one of the core developers of the Linux kernel. And what I realized then was like, okay, so I didn't write these things, but I'm one of the early adopters of this tool. And I'm actually one of the best people to give you feedback on how I broke it. And for a couple of years, 2004, 2005, I was talking at Linux Congress about, hey, this new fancy feature you guys just released 6 months ago, this is how I broke it. And they were— that was awesome feedback for them. Yeah, yeah, yeah.

**Bridget:** A talk that I've given that people really appreciated at the time, this is obviously some years ago now, but it was OSCON 2015, and I gave a talk, Docker in Production: Reality, Not Hype. And it was because I had actually been running it in production myself for a year and had a lot to talk about in terms of all of the terrible bugs that I ran into and our really janky workarounds. People eat that stuff up. Even if you think, I do not want to show anyone the #todo comments, actually people would love to see that.

**Matty:** [00:16:43] And Kris, to your point about saying, oh, I'm not the author of the tool, I'm not this deep internals person, the audience are not the deep internals people. I mean, so that's the same thing too. Sometimes someone who, again, to Bridget's point, I've used it and I've done it and I'm speaking the same language as the audience at the certain level. Because to me, it's like, that might be interesting, but I really just sort of want to know how to use it, right? As a normal layperson, not the person that spends their entire time focused blinders on with this one, you know, in this place. Another thing that I found to do a talk, it's really great to hear what you've done, But a talk proposal can be a great way to learn a thing that you want to learn, is you can sort of sit there and say, hey, I really want to learn this thing, so I'm going to go on that journey and I'm going to make a talk out of it. Because I've seen some great talks that are, here's how I learned this thing, right? And it's because what that helps people— people like to see that because you're going to show your journey of here's some little weird edge cases I came across that normal people don't find because I'm strange. And then also it's like, oh, well, you learned it, I super can learn it too, right? I can see what's involved. Because otherwise you're talking about, here's— I already know this and now I did this thing. You're like, let me walk you through my journey that helped. All these, all these are things that help make these changes, these techniques, these processes, these tools more feel more accessible.

**Coté:** [00:18:11] Well, that's a very responsible use of that method. What I like to do—

**Bridget:** I was about to ask—

**Coté:** is I like to think, what's a talk I would like to have? And then I assign myself a deadline by having a conference accept it. Yeah. And then, uh, figure it out. But I mean, I think, I think that's, uh, yeah, I mean, that's—

**Matty:** I—

**Coté:** it's a similar sort of thing, but it's more of like, uh, I should have a talk on this, so I'm gonna force myself to do it.

**Kris:** And then I think, uh, this guy here did the same, and then he submitted 4 abstracts and he got 3 of them selected.

**Coté:** Yeah.

**Matty:** Well, the, the, the, the pro tip is never write a talk till it gets accepted. I mean, don't, don't, don't do it. Yeah.

**Bridget:** And then, and then also don't submit 3 if you're only willing to give one.

**Coté:** That's right. And then, and then you're saying something else that was making me think, I mean, the two of you is like, and I mean, I guess a lot of like, how do I do talking stuff is all about calibrating how perfect you think things need to be and calibrating various things. And one of them you raised is like, it took me a long time a while ago to realize that like, a lot of people don't know a lot of things. And so if you have firsthand experience with it, like even though you think it might be obvious and it's really boring, it's probably interesting to a lot of different people. And so, it's easy to say, here's a topic I could speak on, but surely everyone knows this, and chances are they don't.

**Bridget:** [00:19:28] And so, you've got to kind of—

**Coté:** you've got to remember when you were ignorant about the topic.

**Matty:** That's a pro tip, by the way.

**Jessica:** All of these things.

**Matty:** All joking aside, that's sort of become a little bit of how I'm starting to write talks is, what's the title of a self-help book? Put the word DevOps in it. Now, that's it, right? That is a thing of when I talked about coming up with the title. It's like come up with a metaphor and then turn that into a thing.

**Bridget:** Back to the conference organizer hat, because even if you're not, by the way, organizing an entire conference, which some people in this room have done, but even if you're not doing that, I know, Coté, you have worked on the conference committee before selecting talks for a specific track. I feel like the multi-track conference is going to be very different from the single-track conference in terms of what they're going to accept. Can you talk a little bit about how you select when you're focusing?

**Coté:** Yeah. So, I've done that for Pivotal and kind of stupidly when I was an analyst, I would voluntarily do it for people. It's a lot of work. But yeah, I mean, I think the first thing I do is I figure out what the point of that track is. Like the one that I often do for Pivotal is like the— it has 4 purposes, only 3 of which are stated. It's the DevOps, Agile, CI/CD, and also talks we couldn't fit anywhere else track. In that one, it's pretty explicit that what we want to hear about are these topics. So, if you go through and it's sort of like, here's a talk on how to migrate your relational database to Kafka, it's like, well, that doesn't fit in this track. So, the first cycle of anything that you go through is like, we shoot these ones in the head because they went to the wrong room. You just eliminate the things that don't apply. And then basically, in selecting that, I mean, I sort of use 2 criteria. One is like, Well, maybe 3. One is like kind of what we were talking about is like, is this going to be a good talk? And the way I rate that, I don't know if it's kind of arrogant, but my editorial method is like, am I interested in that? Like, maybe it would be good for the rest of the conference, but I don't really care, right? Like, is that a talk that I want to see and I'm interested in? And that's kind of the first rung that I go through. And then there's sort of like, you know, speaker experience and things like that. And then I spend a little bit of time in a track trying to balance it out. So, like in that track, let's say there's 8 slots. Like, I don't want to have 8 talks about continuous integration, right? I want to have like 2 on some DevOpsy thing and then maybe 3 on build pipelines and then leave 2 for the miscellaneous and then have a floating one. So, it's nice to balance it out. But I guess that also goes back to like what I would want to see. And, you know, I don't want to see like 8 talks on empathy, maybe like half of one would be fine.

**Matty:** [00:22:13] Well, so, and that's a key thing to keep in mind as you start to submit talks. Not being accepted does not inherently mean that your talk proposal was not good, right? It could be that you were one of 7 CI continuous integration talks that got submitted, and for whatever balancing reason, yours didn't get picked. Now, it could mean that your proposal was not good. So don't mean that just that, that every rejection means that you were amazing, because it might mean that you have work to do, but it's something to think about, right? And you can also— I often find that when I— what I, what I try to do is when I submit somewhere and I don't get accepted is I go and I look at what did. And not to be— not so that I can argue, which by the way, also pro tip from an organizer standpoint, that doesn't help you at all to come back and say, well, why didn't you pick my talk? Because it's clearly much better than the ones that you did pick.

**Bridget:** And don't you know who I am? Yeah, I am very important.

**Matty:** Yeah, those don't help.

**Bridget:** Look where I work.

**Matty:** Yeah.

**Bridget:** Please don't give those. That will actually lead to conference organizers being less interested in both you and your topic and your company. Like, if you start to be that annoying.

**Jessica:** [00:23:16] We've had that as well. And we've just like, have said no more, as in future conferences. It's just like, that person was really like, I don't know. I don't want to deal with that company like at all. Right.

**Matty:** Because of that sort of attitude, you're just like, So, that being said, it's still, I think, valuable to look at what did get accepted because it can help you understand maybe why. And I will say this, if through the mercy of their hearts, the organizers offer feedback, like this is something— so I organize DevOps Days Chicago, and one of my colleagues every year is willing to, for rejected talks, to give feedback. And I say, keep me out of it. But if for some reason somebody is crazy enough to do that, be kind to them and don't litigate. Don't argue the point because we had a speaker who wrote back and said, I would like to know why my talk wasn't accepted. And Jerry was like, and it's because of X, Y, and Z. And the person went back and said, well, this is why X, Y, and Z are wrong.

**Bridget:** [00:24:17] And maybe that's like a really important point. And we are for time-related reasons going to have to wrap up pretty quickly. But I wanted to agree with you that honestly, the people who are putting on the conference know best what they want, not what is best, but they know best what they want to program at their event. That does not mean that the thing you would love to talk about at their event is a bad thing. You are probably not going to get them to put the time in to help you edit it to be perfect for any event. Your colleagues, your friends, your professional acquaintances, your classmates all probably have insight and would be great people to Drop it in a doc, ask them to mark it up. Um, but just because, as you stated, just because your talk is not suited to a specific single-track or multi-track event with specific goals, it doesn't mean that it's a bad idea. It does mean that reaching out to your own personal network of people to help you improve it is the way to fix that. Is, is that what you've seen in your experience, folks?

**Jessica:** Yeah, I mean, I, I sometimes, like, if, if somebody does reach out to me directly Um, and they're wanting to submit to like a conference that I, uh, help with, I will sometimes give them feedback if I have time, right? But you can't necessarily guarantee or anything like that. Yeah, but I'm— I know quite a lot of people who like, you know, that would be fine for me to reach out to. And I'm sure that like, I'm sure every— I hope everybody has friends.

**Coté:** [00:25:43] Yeah, right. And if you really—

**Bridget:** and I guess the— if you feel like you don't have someone who can help you edit your abstracts to be your, you know, talk descriptions to be ideal for a given conference. Um, I would say Twitter is a good place to ask the general public if there's somebody who wants to talk to you about this. There probably is.

**Matty:** There's a website.

**Bridget:** It doesn't mean they're right, but they probably have opinions.

**Coté:** I was going to say that's a very loving place to go.

**Matty:** I will put a link in the show notes because I don't remember, and it's bad that I don't remember because I'm theoretically part of this, but there's a website that I think is it's speaker mentors.

**Coté:** Yeah.

**Matty:** And I don't remember the website. It's called that, whatever it's called, speaker mentors or something. We'll put a link in the show notes, but it's people who are volunteering their time to say like, yes, I would be willing to help you with such a thing. Your mileage may vary. I don't really know all the folks involved, but there are resources like that. Like Bridget said, I think we need to start wrapping, but I'd like to, if we could just take a quick minute, If we could just get maybe Kris, Jess, Coté, maybe if you had to give one sentence of advice to someone who wanted to give talks, what would it be? Kris, right here. Don't. It sounds like a Nathan Harvey response.

**Jessica:** [00:27:02] Am I next?

**Bridget:** Yes.

**Jessica:** Okay. I would just say, don't— it's the same with applying for jobs, right? Let us say no. Don't say no for us. Yeah.

**Bridget:** Don't self-select out.

**Jessica:** Yeah.

**Matty:** I, and I'm just saying one of my biggest pieces of advice is, and it was implied a lot or alluded to a lot or mentioned, but try your material out on the road. Small meetups. And even what might even be better is try a meetup that's not in your hometown because it might be a little less nerve-wracking because you don't know the people or it might be more nerve-wracking for you. I don't know. But whichever one is more comfortable for you.

**Coté:** Yeah, that's, that's a good piece of advice. Like if you study how standups do their work, it's the same thing. And, and then I've spent like 20 years studying how em dashes and semicolons work. So one sentence is perfect. I think, I think, I mean, to be kind of pragmatic about CFP stuff, like, and I think this first point is something that like Bridget finally convinced me of is you should look and see what the conference is about and the topics and make sure, make sure that your talk like lines up with that. As like a first thing. And if you've got like, if you're one of these people, like maybe me, who has only like one talk they give, like you go to that talk and move it around a little bit. And then the next thing I would say is like, work on a talk that the title says what the talk is somehow. Like it has, it has a keyword in it that's like, this is about Kubernetes or this is about DevOps. And then the third one would be like, somewhere in your abstract, you should say what people are going to learn in the talk. Like what, at the end of it, they will know this and what those things are. And then I think that makes it a lot more clear and useful and attractive.

**Bridget:** [00:28:42] And spoiler alert, it makes it so much easier for the organizers to decide pretty quickly, is this a good fit for us or is it not? Again, this is not a, is it a good talk or a good speaker? It's just, does this fit what we need or not? Because that's what they're trying to decide. They're not actually passing judgment on you as a person. They might be, but they're probably not. If they're us, they're not. They're trying to serve their audience.

**Kris:** So I jokingly said don't, but I think the actual advice is don't submit too many because you might actually end up speaking too much.

**Bridget:** This is in fact true. And we're out of time and we have wonderful folks here who have not actually spoken up, which means they're going to have to come on the podcast later. That's how it works.

**Matty:** So working from memory, actually, we'll see how good Bridget can do this without the script.

**Bridget:** Absolutely not. Okay.

**Matty:** You remember parts of it.

**Coté:** Absolutely not.

**Matty:** Anyway, you can find the show notes to this episode at arresteddevops.com/devopsdaysamsterdam.

**Bridget:** Probably something like that.

**Matty:** We haven't done one yet, so this is just DevOps Days Amsterdam.

**Bridget:** [00:29:43] Probably DevOps Days AMS 2018. I like to namespace things properly.

**Matty:** Go to arresteddevops.com and look for it, and you'll find the show notes. It will be there, as well as being able to sign up for our newsletter, which which we'll send out eventually at some point.

**Coté:** So, uh, theoretical newsletter.

**Matty:** Theoretic newsletter. Yeah.

**Kris:** You're in Europe now. So is that GDPR compliant?

**Matty:** It's Mailchimp. So yeah, somehow, I don't know. Anyway, so I'm Matt, um, @MattStratton on Twitter.

**Bridget:** I'm Bridget @bridgetkromhout.

**Matty:** We are Arrested DevOps. And remember, there's always DevOps in the banana stand.
