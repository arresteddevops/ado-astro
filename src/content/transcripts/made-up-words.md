**Nicole:** [00:00:00] Who do you think you support systems for? Who the F do you think you're keeping email servers up for? Who do you think pays your bills?

**Matty:** Hey, it's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matt Stratton, and also joining me is Bridget Kromhout.

**Bridget:** And today we're talking with folks in the DevOps space. We're gonna talk with Tim Gross and Nicole Forsgren, and that's gonna be exciting.

**Nicole:** Guess which one of us is which.

**Matty:** The show notes for this episode can be found at arresteddevops.com/madeupwords.

**Bridget:** Because DevOps.

**Tim:** Right.

**Matty:** But first, a word from our sponsors. Arrested DevOps is brought to you by 10th Magnitude, a company that figures if you're listening to this podcast, you must be pretty cool. TenthMagnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/tenthmagnitude.

**Bridget:** [00:01:18] This episode is brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 120 common infrastructure tools, such as Chef, Docker, and AWS, so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog.

**Matty:** This episode is sponsored by VictorOps. Built for modern incident management, VictorOps provides a unified platform for real-time alerting, collaboration, and documentation. Driven by your IT and DevOps system data, VictorOps helps you to respond to incidents more effectively so you can minimize downtime and make being on call suck less. Visit arresteddevops.com/victorops to schedule a demo or start your trial. Mention you heard about VictorOps on Arrested DevOps, and you'll be eligible for some sweet discounts too.

**Bridget:** The reason I'm excited to talk to these 2 folks about DevOps is we're here at GOTO Chicago, and Tim kicked off the DevOps track yesterday, and then Nicole gave an amazing talk. And I'm wondering if you can both start with Tim, then go to Nicole, introduce yourself and tell us what your talk was about.

**Matty:** [00:02:38] Sure.

**Tim:** I'm Tim Gross. I'm a software engineer, product engineer for Joyent. If you were in the room previously, Brian Cantrell, that's my CTO, which tells you pretty much everything you need to know about our company. My talk was on software-defined culture, which was the idea that we can choose technology to improve our culture both as organizations and kind of the broader culture.

**Nicole:** I'm Nicole Forsgren. I am CEO and Chief Scientist at DORA. And my talk was about how metrics can provide you signposts, goalposts on your journey to awesome.

**Bridget:** All right, so Matt, I think you were not in the room for both of those talks, right?

**Matty:** That's correct. So I'm playing the role of the podcast listeners who are not at the talks, which is good because also as we listen to this, these episodes are about these concepts and not necessarily just about the conference because who knows when we're actually going to release these. Because the beautiful thing about recording 6 episodes in one day is I have— we now have 3 months worth of content.

**Bridget:** [00:03:40] Nice.

**Matty:** So that's phenomenal. So one of the things that I know, Nicole, you and I have talked about a lot when you've been on the show before we kind of, again, talk about the science behind the squishy, right? Like, it's the— we know that DevOps is a technical and cultural revolution. I mean, not revolution, that's the wrong word, right? But thing. And some of the pieces around this are very easily, quote unquote, measurable, or at least they seem intuitively measurable, right? Like, you can see how much more quickly you deliver software. You can see your mean time to resolution and everything. But when you kind of think about the cultural thing, a lot of times people think like, well, I can't really put science behind that. I can't measure that. You can't put a Nagios monitor on a human. And that's something I think is always good to kind of reiterate. And like, what are some of the things that we can think about from a— to be objective about cultural transformation?

**Nicole:** Right. Or, you know, so many times people will also say, Like, I don't want to do that because people lie and people are awful. So let's just use measures from our systems about people. Let's pull all these measures out of our HR systems. I'm like, that's awesome. Great idea. But that isn't always going to give us the data and the information that we're really talking about, that we really want to measure. So as a good example, We talk about how culture matters, right? Like, who here has heard so many times, or like, if you're listening in, culture is important to DevOps. Okay. What do we mean when we say culture is important to DevOps? It's usually something about high trust, information flow, collaboration, reaching across silos, like doing the thing, hugging it out, ops and the hugs, right?

**Bridget:** [00:05:32] Rainbow ponies.

**Nicole:** Right. Unicorns, all the things. It's usually not something that we can pull out of an HR system. So what we might try to do is proxy that. So when I say proxy, I mean come up with something that will measure something that we can't measure directly. That's all that we— what I mean when I say proxy. Or stats nerds out there, research nerds out there, operationalization is another word. So another way to get to that or that you might try to get to that is turnover. That's another step removed. So you can look at turnover among teams or turnover outside of teams or transfer outside of teams or transfer outside the organization. But if that's the only measure you can use, that's tough because that might actually be affected by something else. It could be affected because you got an amazing opportunity. It could be affected because amazing opportunity outside of the organization, amazing opportunity somewhere else. It could be a cultural factor. Right? Like there was an amazing culture somewhere else that you went to. It could be like a shit culture that you left. It could be that you have a partner that got a job somewhere else that you had to leave for. It could be that you were working for a great company, but another company offered me $1 million. I love you. You could love me forever. This could be the best culture in the world, but all y'all can suck it. 'Cause if somebody else is offering me $1 million, I am out because I happen to be money motivated. Not everyone is money motivated. This girl right here, money motivated. Like, I love culture, but I will suck it up for a year or two if you're paying me like $10 million. That's just the way it is. So that will not tell you that I left or I stayed because of culture. So how else can I measure that? I can't get it from my systems. I can't get it from a whole lot of other things. Sometimes you can proxy through things like who's talking to each other on Slack. But that only works if that's the only way to talk to each other on Slack or on HipChat or on email, which is adorable, right?

**Matty:** [00:07:29] Email.

**Bridget:** I remember email.

**Nicole:** I know. Email. But what happens if you're actually co-located? Then you've got like the drive-bys. By the way, this podcast also brought to you by Diet Coke. Someday Diet Coke will sponsor me. One of my favorite coworkers, I love Nell. Nell Shamrell-Harrington, what up? When I was super stressed or even just super focused, she would just do a drive-by by my desk one day and like drop off a Diet Coke. Some days I was so focused, I didn't even notice until I looked up and noticed a Diet Coke sitting on my desk. Poof, right? Like that is never gonna show up in any system anywhere ever.

**Bridget:** So, all right, so we know that that won't show up.

**Nicole:** So it won't show up.

**Bridget:** But how do you, and this is something I wanna hear Tim's opinion on too, how do you start getting to what the culture is? If DevOps is very culture related, how do you get to what it is?

**Nicole:** So how can you measure it? You can measure it through psychometric methods. So you can ask people. But if you want to measure it over time in a consistent, reliable way that you can compare over time, use survey questions. And use good— and now people are like, people lie. Surveys are shit, right? Because who has read any of the political surveys or seen the political surveys that have come out in the last 6 months? They're all awful, but there are good research-based ways to ask survey questions. So if anyone here wants, you can Google Westrum. There's podcast notes, right?

**Matty:** [00:09:01] So I'll—

**Nicole:** yeah, the show notes, I'll include the link. So this has shown up in peer review. It's based on really good research that has gone back to a researcher named Ron Westrum. This is one of the highest predictors that we found over the last 4 years to predict the ability to develop and deliver software with both speed and stability. It also predicts an organization's ability to perform well in terms of profitability, productivity, and market share, as well as other things coming out in June, State of DevOps Report 2017.

**Bridget:** We're what, 6 weeks away, 5 weeks away from the State of DevOps Report?

**Nicole:** June 15th.

**Matty:** Depending on when this episode gets released, it may already be out.

**Nicole:** It may already be out.

**Matty:** So maybe you've already read it.

**Nicole:** Stay tuned for show notes. It comes from Dr. Westrum's research showing that in high-risk, high-performance teams, a culture that values information flow, high trust, risk sharing, and boundary spanning— does this sound familiar?— is predictive of performance outcomes. By the way, it also helps explain what happens when shit goes wrong. Does this sound familiar? This is technology. This is totally us. And so we found a way. I helped rewrite his organizational typology to help us capture how to measure our organizational culture in a way that works for survey questions. So it's 6 questions. The extended version is 7 questions. You can use this in your teams to measure it every quarter.

**Bridget:** [00:10:40] And this is something we can put a link in the show notes to how people can look into this.

**Nicole:** We've totally open sourced it.

**Bridget:** And that, hey, open source, so it's the way. We just heard on the last podcast that we're doing a series of them today, and we just heard about open source is the way to do this stuff. I want to turn, because at this point our listeners may be thinking, well, that sounds great in Western models and survey questions, but I'm trying to dev some ops today, and how does this apply to my practical reality? So I am going to turn the spotlight on Tim for a minute. We don't actually have a spotlight in this podcast room. But I'm going to turn the spotlight on you and say, okay, if you're trying to dev some ops, keeping in mind what Nicole just said, how do you— here we go.

**Tim:** There you go. Thank you.

**Bridget:** How do you approach that?

**Tim:** Yeah, I guess that was kind of like, I love this idea of like direct measurement. I have mostly worked in like smaller and mid-sized organizations. And so, I kind of wonder how that can even be applied to these smaller and mid-sized organizations. And maybe it's just because of the scale that I've operated at. I worry about the whole— you don't have a sample size that's meaningful with that.

**Nicole:** [00:11:53] Oh, you can do it with small teams. It still works.

**Tim:** OK. Yeah.

**Matty:** I think I was— not to take it, but just thinking from my experience, because as a— back when Nicole and I were coworkers, I got to both participate and utilize these things she's talking about, both because we use this within Chef, still do, what I would consider a small organization, and then also do it with our customers and do it within a small team. So when I would go do evaluation and go do these kind of like journey assessment kind of thing, in fact, that was part of what we were doing is saying we need to scope down to size of a feature team. So I see what you're saying. Like the sample size, it probably does matter and depending on how you're looking at it, but it's to me what I saw was that what matters more is how that needle moves, right? Like I don't really care. Like when I would do this kind of stuff with my customers, I shouldn't say when I did, I still do, but when I do, I tell them I don't really care what number you land on. It's not like there's a magic score. What I wanna see is the thing, the parts of this that are important to you, we should see them moving. So you have to do this regularly too, right? It's not like I sort of throw it out there and I'm like, okay, pass/fail, done. You have now DevOpsed, right? So I think that's the trick of it. 'Cause I think if you try to do it too big, you almost have context problems, right?

**Tim:** [00:13:25] Sure.

**Bridget:** Well, and at the risk of going to BuzzFeed-style listicles, Tim did have 4 areas in his talk, and I would like to have you kind of go over those 4 areas for us, and then we can see where they map to some of these things that you're talking about measuring.

**Tim:** Sure. So the idea was it was 4 principles of software-defined culture, and And they were kind of like 4 areas in which we can work to where our tools influence the culture that we were operating in. And it was reliability, operability, by which I was really talking mostly about registration, observability, and responsibility. From the standpoint of reliability, the core point of that is that, of course, unreliable software has these kind of ripple-on, knock-on effects on the rest of the organization. If your people are up all night because you have a really bad on-call situation, they're going to burn out. They're going to have a lot of conflict with each other. The things that lead to your software being unreliable, like resume-driven development and kind of always chasing the new thing—

**Bridget:** [00:14:42] Shiny.

**Tim:** Chasing the shiny has a knock-on effect on risky decision-making. So you actually normalize, hey, it's OK to choose something that's super new and untested, which is probably not really what you want unless that thing is going to have a lot of business value for you. But that is like—

**Nicole:** Yeah, strategic decisions are a thing.

**Tim:** Yeah, yeah. And I think that has— was it— I can't remember. Was it in the previous talk talking about the idea that every line of code that you write is a business decision? And a lot of that comes down to questions of reliability. But I think that that— and then that kind of feeds on to— from there, you can go into operability, like how often we can deliver stuff. Sorry.

**Bridget:** And I definitely want to dive down every single one of these rabbit holes. But I want to hear from Nicole before we move off of reliability. I want to hear, where does that idea of valuing reliability, doing the right thing, even if it— the right thing that you can determine with the best data available at the time, Even if it doesn't seem like the easy thing. Where does that map into what you're talking about here?

**Nicole:** [00:15:54] So which piece? I'm trying to think about. So when we talk about reliability and how that maps into culture, I think it's super important to make sure that our teams understand that taking risks is going to be a safe bet and risks will be shared across teams.

**Bridget:** And people won't be blamed. You're not going to shoot the messenger. You're not going to shoot the person who took the risk.

**Nicole:** Right.

**Matty:** As our good friend Charity Majors would say, if you haven't broken production, you're not trying. You know, which might be a little bit of a glib statement.

**Nicole:** But well, and you know what? I really loved when that S3 outage happened. Right. And we know that Y'all, we're all familiar with that S3 outage, right? And we know—

**Bridget:** we can put a link in the show notes.

**Matty:** We use the internet.

**Nicole:** We use the internet. Well, and we know that it was from like a fat finger incident. You read that postmortem, nowhere does it say human error. So that actually took down production. They did a full postmortem, they published it, and nowhere does it say human error. Because, okay, you're not trying hard enough, but also Nor did they have resiliency in their systems. That speaks really, really highly to your culture. And that speaks really, really highly to your systems and your backup. And also to so many other things upstream and downstream.

**Bridget:** [00:17:29] Yeah, so that's a really good point that I hadn't considered before. When you build for reliability, you also are implicitly saying, and we're not going to blame people when the reliability is not as we originally intended or hoped or imagined it would be.

**Matty:** Because you can't work around human error. I mean, you can work around— I'm sorry, but humans make mistakes, and that doesn't scale, right? So we can't say, my reliability is that people aren't going to fuck up. We just sort of have to assume that people are going to fuck up.

**Bridget:** That's a pretty bad bet.

**Matty:** So that, I think, is where that— but I could see how that cultural tie happens because if it's like, okay, if I know that if somebody fat fingers, they're not gonna get fired, then I now have to code defensively to prevent that because I can't sit there and say, well, you shoulda, coulda, woulda not done that, ops person or whatever. Like that maybe does that cultural piece of that speaks to understanding how to build a reliable system.

**Tim:** [00:18:30] And I think there's kind of a, Interesting point in that, in the notion of where you were talking about proxy measurements, because I think a lot of these things become in themselves proxy for some of your people measurements.

**Nicole:** Always, always. So, and that's such a great point, right? So many times people are like, oh, well my system measure just measures, you know, your survey measures are proxies. I'm sorry, your system measures, your system measures, anything that's a metric becomes a proxy. It will always end up representing something in someone else's head.

**Bridget:** Wait, you're saying that disk and CPU and and host uptime are not the most important things?

**Tim:** What?

**Nicole:** They're important. But we're always like, oh, that's just, that's a measure. That's a pure measure. You sure about that?

**Bridget:** They're important, but they also are only important insofar as they inform whether or not you're succeeding in whatever your goals are.

**Nicole:** Yes. Insofar as that they represent something of meaning to someone.

**Bridget:** Right?

**Nicole:** They represent something. So, I was a performance engineer for a long time. I did hardware performance. You want to know what was the most important thing to me forever? RT. Response time was my jam. Why? Because that means performance to me.

**Tim:** [00:19:40] I guess the point I was trying to make is that they are not just proxies for other systems components, right? Like CPU could, yes, be a— CPU load could, of course, be a proxy, probably a poor proxy for response time. But things like the system uptime is often a proxy for what your culture and what your people are doing.

**Bridget:** It's a proxy for whether or not you patch regularly.

**Tim:** Yeah. Yes.

**Bridget:** So long system uptime, kind of an anti-pattern.

**Matty:** Yeah.

**Tim:** Well, yeah, I mean more like not having outages. Oh, sure.

**Matty:** Like uptime of your service.

**Nicole:** Right.

**Tim:** Yeah. Right.

**Bridget:** And that takes us very nicely back to point 2 about operability. So, if we go down that rabbit hole, what would you say? Sure.

**Tim:** Well, so that point was largely about, you know, making sure that— it was about 2 things. One, making sure that software can be delivered quickly, you know, with the velocity that we need according for our business, but also about making sure that the behavior of applications is understandable and self-contained with the team that actually owns it. There's a bit of a trend right now where a lot of people are saying, push this intelligence out of my application, make my application as dumb as possible, and make it into some kind of third party, either as a service or my platform maybe. And my point around that is that what that does is it creates a cultural imperative that says, you know what, this is OK if we don't understand these things. And I think that that has a lot of knock-on effects about not just the ability to deliver, but also it creates this greater division between, well, the platform team owns that and the development team owns the other thing.

**Matty:** [00:21:36] When you're creating these black boxes, you're just sort of saying, not it, right? Yeah, right. And then I don't have to understand that. So again, it provides me from a cultural perspective, it's a— like you said, it creates this division, which is That's somebody else's problem. But it also means that I now have a great excuse, which is, well, I don't understand how that thing works. So how could I have done it better?

**Bridget:** So I think I'm hearing that microservices are a game of point the finger and plausible deniability.

**Matty:** All of IT is a game of point the finger.

**Bridget:** Where does this fit in with the—

**Nicole:** Wait, you mean containers won't fix my culture? What?

**Bridget:** So where does this idea of you want the stuff to be operable and understandable by the people who are operating it, how does that fit in? To what you're talking about?

**Nicole:** It really fits into a few cases. And one that immediately comes to mind is I have this other talk that I love or this theme that comes up so many times about how metrics shape your culture and how metrics can really help you communicate across boundaries so many times. But it really becomes problematic when we have teams that are doing drastically, drastically different teams, particularly if they only keep their metrics to themselves and they never try to communicate across those boundaries. And metric. So it's also challenging if they don't measure anything or if they don't ever try to communicate anything externally. And so if they try to maintain or create metrics that can help or it can hinder, right? And so if they create any of those externally, it can be helpful until they sometimes try to communicate that across, right? Like you were just saying, like you do that thing and it's completely external until they're like, They try to throw that container over the wall or that app over the wall and they're like, oh, here's my metric. It should totally work for you. What are you talking about? And the other team's like, wait, what do you mean? This makes no sense to me. They're like, oh, well that's Steve. Like this is my metric Steve, or this is my metric Jane, or this is my metric something. It works for me. It should work for you. This means I'm doing well.

**Bridget:** [00:23:35] Well, and I'm gonna put Tim on the spot for a minute just because I have worked for Tim before actually. And so we've, We have obstinate anger. And what would you say—

**Tim:** Sometimes a lot of it.

**Bridget:** What would you say makes or breaks operability in terms of what Nicole is talking about there?

**Tim:** Yeah, I think— and I think when we were working together, maybe our organization didn't do this very well. I think that the notion that what is it that you're measuring about your systems? Is meaningful to the consumers of those systems and not just as a CYA, right? Because there's kind of an adding pattern where it's like, well, we're reporting some kind of vague notion of service uptime, but that's not really, really what you need, right? What I really need to know is that the system's going to be available for me when I talk to it. I need to know when I should expect that it's going to be— if I have a service that is consuming your service, I need to know if I'm being throttled I need to know that if my clients need to do, refresh their service discovery, if that's how you orchestrated everything. So, having these kind of feedback mechanisms in those metrics, I think, is really a thing that a lot of organizations don't do very well, I think.

**Nicole:** [00:24:54] Absolutely. Well, and even finding, taking a step back, or I guess another way to think about it is a step up, right? How do your metrics tie into the overall, if not organizational goal, Go up a step higher to the line of business goal. How does what I'm doing contribute to something higher so that we have a reason to understand why our metrics should relate?

**Bridget:** There's a really good talk that James Turnbull has done about his book, The Art of Monitoring, where he argues that you are not the consumer of your metrics. And I think that that's a trap I know I've fallen into. And I think a lot of people who are more ops-focused fall into is they build dashboards and alerts that point to the things that are going to wake them up in the night and the things that cause them pain, but don't necessarily talk about those line of business goals. Yep.

**Nicole:** Inputs and outcomes.

**Matty:** I think it's important. And one of the things too, I want to kind of bring back, and it's maybe taking a more simpler kind of statement of what we're saying, but I know just from my experiences with folks out there in the world that we're kind of sitting here in our echo chamber of like, this this is just, you know, we already, we've already heard this 100 times. But when we think again, so Nicole said it right, it's outcomes. Outcomes are like the only thing that matters. I don't give a shit about anything else. The outcome is what matters. And specifically what matters is the business outcome. Because why does your company exist? To make freaking money. That's your goal. Go read The Goal. Your company exists to make money.

**Bridget:** [00:26:30] And there can be— and people can have different goals if they work in a nonprofit or educational institution or whatever, government.

**Matty:** Whatever the business outcome.

**Nicole:** Read the 2017 State of DevOps Report.

**Matty:** Okay, so take it away from the making money thing.

**Bridget:** I mean, making money is obviously very important, but also helping your stakeholders. I would say more generically, helping your stakeholders, whoever they may be, get to the goals that they care about.

**Matty:** So let's take it—

**Bridget:** so if it's shareholders, then it's money. But if it's, say—

**Matty:** the point is, what is the business outcome of your company? If you're a nonprofit, you still do have a business outcome of some kind.

**Tim:** A mission.

**Matty:** A mission, right? So, the thing is we go back to that, and then I think again about, so, the outcomes are what matter. So, I know it's a gross simplification, but we sit there and said, like, okay, for example, who really gives a shit about if I've got 100% CPU? Because you know what, if my service is performing appropriately, awesome. That just means I'm using all of my stuff, right? Like, this is just like a dumb example, but I actually had this in my life where I had A sysadmin who was freaking out that SQL Server was using all the memory on the server. We're like, that's what it's supposed to do. That's why we have memory.

**Bridget:** [00:27:37] See also Hadoop.

**Matty:** Right, right. So, I mean, we got to think about that. And then it's another just to think always about outcomes. One of the things I talk about when I'm helping people with Chef, and this could be true whatever thing you're doing, right? This is a testing scenario. So let's say I'm writing some Chef code that's to configure my web server. What I don't want to do is write a test that says, did this install NGINX? Because my point was not to install NGINX on the server. Who gives a shit? What matters is it's a web server that does the thing it wants to do. So while I know for some people this is going to sound like, duh, I talk to enough people to know that this is a really, really, really— and if there's—

**Bridget:** your test should be looking at ports 80 and 443 because whether or not the shit got installed is not important.

**Matty:** And you may change. Yeah, that's again, who cares if the package is there if it doesn't return? So it's like, and mapping it again back to the outcome for the business. Like I said, every line of code is a business decision. What is driving that? Sasha Bates told a story on the Ship Show years ago about she was working for a large retailer. It was right before Christmas. And they wanted to, the feature team or product team or whatever was like, we need to push this release. And Sasha's like, oh my God, this is like, We can't make a change right now because of stability, stability, stability. And our boss said, Sasha, your job is not to keep the website up. Your job is to deliver the features that the company needs.

**Bridget:** [00:29:04] And that's like, I mean, I think the company might need a feature of being up.

**Matty:** I'm just, well, well, no, but it would, but, but it was when you get into these micro and like Tom Limoncelli talks about too, right?

**Nicole:** Like as we sit there and I, so I've got this great story of, so I chaired the Lisa conference. If anyone's heard of LISA, it's a USENIX conference. It's a large installation system administrator. It was 2014. And I love my LISA crowd, right? Like a bunch of old— yes. See, we've got a LISA, an old SAGE shirt in the crowd. That's the old sysadmin user group. Courtney Kistler gave my closing keynote. And she had just been leading— the Nordstrom transformation. And she's giving this closing keynote and like my massive ballroom is full of, what's a good way to say this? I love my old school sysadmins.

**Bridget:** [00:30:11] Old timers.

**Nicole:** Old timer, old fashioned, love them hard sysadmin types. And Courtney starts telling this story of business transformation and we're on IRC, right? This is like too early for Slack days really. So we're only on IRC. I mean, yeah, it's 'cause this was 2014, right? And so they're like, ugh, why is she up there? This talk, ugh. Also, I love Courtney 'cause this was a last minute stand-in because my closing keynote had a medical emergency and they're like, Super polite though, 'cause love 'em hard, right? And they're like, this is boring, this is awful. So Tom Limoncelli, me and Tom are like, listen, pay attention. Who do you think you support systems for? Who the F do you think you're keeping email servers up for? Who do you think pays your bills? Who do you think this is for? Listen to her story. And by the way, Courtney Kistler has a hardcore badass ops background. She's up there in a dress and heels because love her for her fashion. We're like, listen to her story. Put yourself in her shoes. She's a legit ops girl. Listen to the story. And they're like, OK, OK, we're trying. I don't know this word. And so we're doing like the first 10 minutes, we're doing just a little bit of business translation. And all of a sudden, everyone's super into this story because like, We're like, give me 10 minutes. Just give me 10 minutes of like, we'll do business translation for you. And suddenly they were super into it, but they didn't realize, we're like, like you said, it's about outcomes because who do you think pays your damn bills? Who do you think pays your salary?

**Bridget:** [00:31:54] And I think that's—

**Nicole:** and then they got it.

**Bridget:** And that's, I think that's a really good point. We need to link to that talk in the show notes for sure.

**Tim:** But I think—

**Nicole:** oh, it was so good.

**Bridget:** I think that's a good point because, and I wanna, I wanna bring this back to, I don't wanna, we're gonna run outta time if we stick on operability for too long, even though—

**Nicole:** sorry, we can talk 2 more.

**Matty:** Hashtag ops life.

**Bridget:** Because I love this stuff. But that fact that we operate these systems for a purpose is so key. It's so important. But I could stay on operability all day, but we do have 4 we want to hit.

**Nicole:** So, I will say Courtney won them over hard.

**Bridget:** I love it.

**Nicole:** It's so great.

**Bridget:** No, I love it. All right. So, point 3.

**Tim:** So, it was observability, which we kind of started to talk about a little bit, but I'm going to jump ahead a little bit to the 4th one, which is responsibility, because it dovetails a little bit off what you're Because your 4 things are a map, they're not, you know. Yeah, they're not arrays.

**Matty:** Yes, it's a map. So it's unsorted every time. Every time we do this podcast, we'll talk about it in a different order.

**Nicole:** It's fine.

**Tim:** Yes, the outcomes, right? And the business outcomes and the mission. But I think that where the 4th one starts to come in is to start thinking about externalities as well. And one of those externalities, and I try to emphasize this when I say to people, like, what is it, you know, like when I talk to people, when I'm talking to folks about containers, 'cause that's what our company's all about, right? And I say, you know, you're not, you don't want containers, right? Like you don't care about containers. You have a mission for your organization and you have the people who you're working for or who are working for you, right? And they're, and making sure that they have fulfilling lives, right? So there's an externality to that. And so I always like to put the asterisk on, yes, the mission, the mission, the mission is like, yes, and your people. Because I think that— and because the people are not just there to fulfill your mission. I mean, yes, they are. I guess if you're the CEO of a public company and you're having that terrible thing that people say, which is that they're the only thing—

**Nicole:** [00:33:55] Fiduciary duty?

**Tim:** Yeah, fiduciary duty, which is bullshit, by the way. That's not actually a law. People say, well, they're legally required. That's not a law. Anyway, yes, they have that, but it's not at the expense of externalities. So just that is my thing I always like to add as an asterisk to that question is the question of responsibility and what are we doing to the people who we're working with? And when they leave— and you can translate that into long-term business goals, but I think it's a proxy.

**Matty:** You can—

**Nicole:** Well, now I'll point to all my research. So data, the last 4 years, fixing your technology, fixing your culture, fixing all of your process, we show, we found that high-performing teams, all of their employees are 2.2 times more likely to recommend their organization as a great place to work. And all of the other research that also comes out of Harvard has found that employees that recommend their workplace as a place to work show and predict higher revenue growth. So even if you want to be a selfish asshole, make your workplace as a better place to work and it increases hiring, retention, and revenue. So go ahead and please be selfish and keep your employees because—

**Bridget:** [00:35:11] Yeah, because hiring people is hard and expensive. And I would love a quick show of hands. Who here works someplace that's hiring right now? I don't see any hands not up. So Yeah. And yeah, that's, that is, I think that is a really good point. And I want to dive into that more at the end of the podcast, but I am going to—

**Nicole:** And I travel internationally and everyone is having difficulty hiring and it's way more expensive to hire than it is to retain. And it's super difficult to find good people who know your code base, who know your tech, who fit with the team, who fit with the culture. It drives continued retention. It drives revenue. Don't be a jerk.

**Bridget:** It's totally huge. But I do want to dial it back to the observability side.

**Tim:** I'm glad to see that there's data that backs that up though.

**Nicole:** I've got data.

**Tim:** My guts want to tell me that, but there's data.

**Nicole:** I've got data and it's been replicated at several other places.

**Bridget:** And it's not just the truthiness in your gut. But I do want to talk about the observability piece because I think that actually ties in really strongly to how happy you can be working someplace. Because if you have no idea what's going on with your code that you shipped or with the code that you're supporting in production, if you have no way to tell what's happening whatsoever, I guarantee you, you will have some very unhappy on-calls. So, like, can you give us a little bit of a picture of what you mean by observability?

**Tim:** [00:36:41] Right. So, In the talk, I was talking about, to some respect, about monitoring and kind of going from the traditional view of monitoring to a view that is more about how do we build tools that allow us to kind of explore in a more iterative way, particularly in a collaborative way. So not like, well, there's some lone sysadmin staring at a screen that's a dashboard, right? I think the stronger point, though, was about debuggability, which Bryan talked a lot about today. Keynote, which is this idea that having tooling that allows you to have full and complete understanding over what's going on in your software is really key to building a culture where your people feel empowered to actually do that. If your people can't figure— if at some point you have to say, well, and then magic happened, because it went into the black box that we don't understand.

**Bridget:** Some miracle occurred.

**Tim:** Right, right. And that black box is, maybe it's the operating system. Oftentimes, unfortunately, it's even at a stack, a level up from the stack in there. It's in your platform. Maybe it's in your web server where it's like, well, and then NGINX does that thing with its event loop, and we don't really know how that happens. Something's going wrong. Shrug. I don't know what. And having to reach that point and not being able to push past that means that Yes, you have less reliable software because you can't solve the problems, and that makes everybody unhappy. But it also, I think, as technical professionals, it's very dissatisfying to reach that point where you're like, well, we just have to move on from this now. Because you know in your heart it's a knowable thing. This is all software. It's not magic. It's not really like— it's not the natural world where, well, then we get into physics. And we don't really know what's happening. We know that we can do that. And that's kind of why we get into this stuff.

**Bridget:** [00:38:41] What does the data show here? I'm actually really interested in this.

**Nicole:** Oh, so I have thoughts. I have feels. Y'all get comfortable. So I would take it one more step, though, because— so research has found— it's like the worst thing. So that's a drinking game with me. Research shows— drink. So that's one key piece. But the second key piece to really drive performance and money or organizational goals and drive mission goals is having the data and then making business decisions on the data.

**Tim:** The learning, being the learning organization based on that, right?

**Nicole:** Right. Well, and not so part being the learning organization, but really acting on it too. Because there's the thing where you know the stuff, and that's awesome. And then like, sorry, suck it.

**Bridget:** Like, dot, dot, dot, profit.

**Nicole:** You know, or like, like the stereotypically dudes in the suits are like, cool story. But like, I know that I'll be fine. I know what I'm going to do. I don't need your data. No, you know what? The hippo, highest paid person in the organization, sucks at this. Use your data. And we know that that's what drives performance. And then we also know that there are a few categories of— I talked about this yesterday. There are a few different categories of measures that you can take, right? So, not everyone is really instrumented to the hilt. Not very many organizations have that. And so, if you don't have all of these insights into your data, if you don't have data about systems from systems, at least start doing something, right? You can instrument or you can find insight into your systems from, like, surveys, right? You can ask people, right? You can ask them. This is a good one.

**Bridget:** [00:40:34] What dependencies does this have?

**Nicole:** What dependencies does this have? Can you roll anything out in your systems without having to ask other teams to do it?

**Bridget:** Yeah, what stands in the way of you being able to deploy that microservice? Because if you can't actually deploy that microservice without deploying these other 3 ones too, it's possible that you've built a distributed monolith.

**Nicole:** If you have nothing at all, you can just go ask all of the team leads, are you testing? Do you have automated tests? Do you have function tests? Do you have— just go ask everybody and then start rolling it up. Even if you don't have really, really solid, I mean my favorite would be a whole bunch of really good psychometric survey methods. That'd be awesome. Call me, I'm Adora. But if you don't, at least start asking what types of things would be good. Do we do, have we shifted left on security? Ask people if you're including security early in the process or if you're only doing pen testing or if you're doing any security at all. Start thinking about the things that are important. Look at the State of DevOps reports, right? There's a giant list of things that are good to do. Start asking around and just do a big yes or no checklist.

**Matty:** [00:41:45] And do it iteratively, right? Like, this is the same thing if we think about with testing our software. We don't wait until— we don't sit and say, I don't do any tests in my software until I've written every test there might possibly be. Well, some people actually want to do that. Some people are like, I'm not going to do a pipeline until I have a whole bunch of tests. That's bad, so don't do that. And then don't do that with this. It's fine. Like, one question is better than none, right? So you can always kind of build into that and you can say, like, even if it seems like this is the simplest thing in the world, I'm just going to ask this one thing, that is information you didn't have yesterday, right?

**Nicole:** And then you can start with surveys or asking people, right? Start with surveys, start instrumenting your systems, and then as you instrument more of your systems, you can start sunsetting out the surveys. And there are some things that you can get with surveys that you will never be able to get with systems. A good example of this is version control. And people are thinking, I can get version control out of my systems. Sort of. Also sort of not.

**Tim:** Why?

**Nicole:** [00:42:45] Because your systems can tell you what is in version control. Your systems cannot tell you what is not in version control. Only your people can tell you what is not in version control.

**Bridget:** Or if the stuff that's in version control is subtly wrong and not the one you actually use when you need something.

**Nicole:** Yes, only your people can tell you what is bypassing your systems.

**Tim:** I actually—

**Nicole:** and that's a useful check. That's a super useful check.

**Bridget:** I would, I would love to ask Tim really quickly. I know we're running a little low on time because that always happens with these podcasts, but I would like to, um, point because I think it's a good illustration of this, the trying to be methodical about setting checks and, you know, like capturing those things you don't— you didn't know that you didn't know. I know that you built a bunch of automation to capture the state of our AWS account before we moved from classic AWS to the new style. I forget, the VPC accounts. And can you address really quickly in this context, like how you try to even capture all of the things when you're not even sure what questions to start with?

**Tim:** [00:43:50] Sure. Well, you don't, right? I mean, you can't. So, what you—

**Nicole:** Do it iteratively, right?

**Tim:** You do it iteratively, and you start with, you know, much in the same way that when we were talking about what is it that we're measuring, you start with the things that are the top level, right? Like, what are the business goals, right? So, measure, you know, it's more important to measure the, you know, is the service up than it is to measure the CPU, right? In the same way, when you start going down this path of like, well, how do we recognize what what even our systems are. It's more important to say, what are the fundamental things that we can't even start with? Well, we need the network first because nothing else runs without the network. So for us, that was the first step to do the documentation.

**Bridget:** We need the network. Then we need the pieces where stuff talks to each other.

**Tim:** Right. Yeah. And so it becomes a series of—

**Nicole:** And that's not necessarily the super easy things, right? And I'm guilty. I say this, don't do this. I'm guilty of that too. Sometimes So I used to do a bunch of log systems and I'd be like, occasionally I would start with the, that's the overall stuff. Sometimes I'd hit the day where I'm like, my brain hurts and I need a quick win. So I would totally instrument the thing that was just super easy just so I could check something off my list. Resist too much of that because then I would have a whole bunch of stuff just to show I had done it. The problem with that is that, right, we're talking about culture a little bit. The problem is that once you've instrumented it and measured it, people start paying attention to it. It's like, oh, that's kind of a problem because that shapes people's behavior.

**Bridget:** [00:45:22] And once you've something—

**Matty:** And it makes them think it's important too, right? Like, you've instrumented this because you're like, I just want to do that. So you put that there and now you've created this culture that we care about CPU.

**Tim:** How does that— well, and how does that apply? So I guess this is always my question with the psychrometric. Like, how does that worry about like measuring the thing changes the thing apply to this kind of psychrometric method where we're saying, We're going to ask people what they think about these different aspects of the organization. How do you avoid changing the behavior because now you've given people a hint that you might care about these things?

**Nicole:** So there's a little bit of back and forth. So by asking them, you send a signal that it matters. So you have to be careful about how you send that signal. So there's the signal that's like, we're going to ask about it. It's cool. We're asking about it because we're in it for the continuous improvement transformation journey. We're just asking about it. That's super fine. Although just by collecting metrics at all, you're sending the exact same signal. So by the way, everyone who's like, oh no, I don't do that because I just collect metrics, you're sending the same signal. Like, let's be real. Don't kid yourselves. That's happening just by appearing in a report. It's a thing. The problem happens if you're like, you will answer 10 on this 1 to 10 or heads will roll. Like that's—

**Matty:** [00:46:39] How many people have this—

**Tim:** this just—

**Matty:** I just want to say this is funny because this just happened.

**Nicole:** Did you just buy a car?

**Matty:** Yes, that's exactly what happened. So we went, we— my wife and I bought a car on Saturday, and the sales guy was like, okay, they're going to ask you a survey, and it's super important because basically if they don't get 10 out of 10 on everything, it's considered failure. And the funny thing is this also happened to me with my Microsoft TAM years ago because he was like, you have to understand, with the way they did the survey, because if it wasn't perfect, it was fail. It was, it was a scale of 1 to 10, but it was really, but it was really pass/fail. And then what happens is it's totally jacked because you're like, I have a, like, with the car salesman maybe not, but like my Microsoft TAM, I like this guy, right? I'm like, I don't want to screw up your compensation, so I'm actually not going to tell the truth because I might want to say I'm going to give you 8 out of 10, which is awesome, like great, but But by being honest, you know, yeah, but it's, yeah, that was funny.

**Bridget:** [00:47:39] And we're almost out of time and I know we could go down an entire rabbit hole with that too. So, I just want to give our panelists like a final thought. Okay, this DevOps thing, it's not all squishy, like, you know, love and hugs. We do have a lot of actual actionable metric stuff here. What is like, you know, Nicole, then Tim, your one piece of advice for people who really want to try to measurably improve this stuff?

**Matty:** What do you do next when you walk out of the door?

**Bridget:** What's their step when they go home?

**Nicole:** My one piece of advice, if you really want to improve your DevOps journey, I would say, or your transformation, I would say start measuring. Do it in an— it's gonna be a long one piece of advice. Start measuring, do it in an honest way, and keep measuring periodically, whatever periodically means for you, and do it honestly, right? Even a bad baseline is super powerful.

**Bridget:** And then go from there.

**Nicole:** Go team.

**Bridget:** Yeah, I love it. Tim, what do you think people should do if they're trying to dev some ops?

**Tim:** Yeah, I mean, that's exactly what I would have said. So I'll add to that, make sure that you're measuring the right things, the things that are, you know, that you will chase what you measure. So make sure that you're measuring the right things. And I think that's the only cautionary Yes, what he said.

**Bridget:** [00:48:58] Yes, awesome.

**Nicole:** Nice. I'm so glad we agree.

**Tim:** Yeah, there was no screaming on this stage at all.

**Nicole:** We didn't even plan this. Yeah.

**Bridget:** We did not, in fact, pregame because we decided to YOLO this right out into production.

**Nicole:** I didn't even know what that question was. This was amazing.

**Matty:** You guys did that well. Yeah. So this has been a great episode. Both of y'all have been on the show before, so we're not surprised. We love to have you on. Again and again and again. Those of you who listen to the show that get tired of having the same guests, too bad, because we love our guests. But if you would like to be a guest on the show, you can always reach out to us at shows@arresteddevops.com. The only thing I say is, come to me with an idea. Don't just say, I just wanna be on the show, because you've just given me more work to do, which doesn't resolve well. But head over to arresteddevops.com/madeupwords for the episode show notes, which will include links to the DevOps whatever thing Nicole talked about.

**Nicole:** That would be great.

**Tim:** State of DevOps Report.

**Matty:** State of DevOps Report in Guatemala and the Westroom stuff and all sorts of good stuff. I promise we'll have real show notes on this episode. Also at restofdevops.com, you'll see links to sign up to our newsletter. We totally don't spam you, except that I did just send out a spam about an upcoming episode with Nicole again that we're doing with Food Fight Show.

**Bridget:** [00:50:19] Be amazing.

**Matty:** If you're listening to this later, it probably will already have happened, but those of you here—

**Nicole:** it'll still be great.

**Matty:** It's live. May 8th, we're doing the DevOps Call-In Show, which is basically Car Talk for DevOps, hosted by Nicole. Come at her.

**Nicole:** All the questions.

**Matty:** All the questions, right? And also, if you're into that Instagram thing, by the way, we're at instagram.com/arresteddevops.

**Bridget:** We post pictures I'm way too old to care about Instagram. Yeah, well, whatever.

**Matty:** And go find us in the iTunes Store. If you do that, give us a review, not for our egotistical reasons, but it helps other people who want to find DevOps podcasts.

**Nicole:** Also tell them they're amazing.

**Matty:** Well, yeah, you do that too. I guarantee if you write a great review of us, we will read it on the air.

**Bridget:** I guarantee if you're Michael Ducey and you troll us in a review, he will also read it on the air. So thank you so much, Tim and Nicole, for joining us. This is super fun. Thank you for taking the time here at the conference. So I'm Bridget at Bridget Krumhaupt.

**Matty:** And I'm Matt at Matt Stratton.

**Bridget:** [00:51:20] We're Arrested DevOps, and remember, there's always DevOps in the banana peel.
