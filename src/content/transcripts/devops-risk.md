**Matty:** [00:00:00] 'Cause people lie. Computers don't lie. Time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practice, and operate your team and organization for maximum DevOps awesomeness. I'm Matt Stratton, and my co-host today is Bridget Kromhout.

**Bridget:** And today, we're talking about DevOps and risk. So, the show notes for, you know, managing risk, and the show notes for this episode can be found at arresteddevops.com/devops-risk.

**Matty:** But first, a word from our sponsors. Arrested DevOps is brought to you by 10th Magnitude, a company that figures if you're listening to this podcast, you must be pretty cool. 10th Magnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/10thmagnitude.

**Bridget:** [00:01:08] This episode is brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 120 common infrastructure tools such as Chef, Docker, and AWS. So that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog.

**Matty:** This episode is sponsored by VictorOps. Built for modern incident management, VictorOps provides a unified platform for real-time alerting, collaboration, and documentation. Driven by your IT and DevOps system data, VictorOps helps you to respond to incidents more effectively so you can minimize downtime and make being on call suck less. Visit arresteddevops.com/victorops to schedule a demo or start your trial. Mention you heard about VictorOps on Arrested DevOps, and you'll be eligible for some sweet discounts too.

**Bridget:** All right. So, I'm super excited to be here again. We're recording here at GOTO Chicago. And the theme of this track is, I took all of the awesome speakers from my DevOps track and then added more awesome people, in this case, from the local Chicago area, to come to the conference and interact, have the ongoing conversations about the talk in question. So, I want to first introduce the speaker in question, Nicole Johnson.

**Nicole:** [00:02:36] Hi, everyone. Thanks for having me, Bridget.

**Bridget:** And please tell us a little bit, Nicole, about what your talk was.

**Nicole:** Sure. So, my talk was about incorporating compliance and security testing into your release process. So, whether it's You're releasing applications, you're releasing changes to your infrastructure. It's really important to incorporate compliance testing throughout the process. So when you get to production, you don't realize, oh man, we didn't incorporate compliance, we didn't call somebody from compliance, and that whole bit of work that you just did to make everything fast gets stopped in its tracks. So it's really important to incorporate it throughout the process.

**Matty:** You and I need to talk. I mean, first of all, for those of you who don't know, Nicole and I work together.

**Nicole:** Yes.

**Matty:** But like, I've had talk I've been giving lately that's, you know, shifting left securely.

**Nicole:** That's that.

**Matty:** And I unfortunately missed Nicole's talk, but I'm pretty sure that we probably say almost all of the same things. But I need to figure out like how we can push our slides together.

**Bridget:** [00:03:41] I sense a co-presentation.

**Matty:** I know, at the minimum, at least stealing slides.

**Bridget:** Nice. I like it.

**Matt:** All right.

**Bridget:** And then, and let's hear from our other guests. You know, we'll start with right next to me.

**Anthony:** So, yeah, my name is Anthony Lee. I work for Ohio State. I have the pleasure of working with Matt. I consider myself patient zero for our digital transformation initiative, which is otherwise known as Compose. So, it's been 2 and a half years, and it's been quite a journey. It's definitely been fun, and I've been lucky to be watching it as it went along.

**Bridget:** Nice. Awesome. Thank you. And that is our— between Stratton and Anthony, we have 2/5 of Chicago natives here. But Matt Curry did arrive on a plane. Matt, tell us about yourself. You've been on the podcast before, but tell us about yourself in the context of this.

**Matt:** [00:04:42] Sure, my name is Matt Curry. I work at Allstate as a Director of Cloud Engineering, and so I lead an organization that's responsible for taking Allstate into the cloud, private and public. We're also responsible for platform as a service, which as it turns out, as Anthony mentioned, is very much coupled to how do we do continuous integration, how do we do continuous delivery, How do we enable an agile organization, which comes with a whole lot of cultural change and a lot of change in how people think about their identities and how they do their jobs and what their job title means. So it's been a very, very interesting and cool social experiment, I will say, to be a part of.

**Bridget:** Nice. And so the reason that I wanted to put you folks all together is because Nicole gave us some good insights into the how and why of automating things in your compliance. And I thought, who better to talk about the practical application of that than people at an insurance company? I get the feeling that your customers probably care a lot about whether or not you're on board with all that stuff.

**Matt:** [00:05:56] Yeah, I would say so. I think, you know, it's been an interesting journey for us from a compliance perspective. When we started the CI journey, a lot of it was about like, how do we get the feedback loops to be faster? And one thing that has generally been tough for us has been compliance and security. And we've come quite a ways in trying to work with those teams and get them to think about the outcomes and codifying the stuff we do. And really for us, that has been, I would say, I'd be interested in Anthony's perspective, but to me that has been one of our bigger challenges is like, explain your job in an algorithm, right? Like that is, it was like immediately kind of puts people on the defensive like, oh, you're going to replace me with a robot. Like, this is awesome. Or a shell script if we get—

**Bridget:** [00:06:57] I mean, realistically, they're going to replace all of us with robots eventually.

**Anthony:** Yeah, I mean, to add to Matt's point, right, Allstate being in the insurance industry, so we've got plenty of regulation, right? So you've got every state has their own set of regulations. You've got your typical PCI, SOX, and every other possible thing that you could throw at an organization. And that was the big concern when we started talking about doing agile, about doing XP, right? My— the story that I love most about that, and I think Matt is very close to it, right? We— to get things started, we became proactive and we reached out to our internal audit organization and said, hey, partner with us and look at what we're doing so you can see what we're— what's going on, right? And give us some advice in terms of what you think will become a problem, what can we get ahead of. Right. And so we went through that process with a couple of weeks working with them, having them sit down with some of the devs, with some of the platform engineers, talking them through the process. And the greatest outcome there was that the lead auditor ended up eventually working for Matt as a product manager.

**Matty:** [00:08:13] I have to say, I cannot underline enough what Anthony just said. You need to have a big intent, you bring security and compliance along with you. And here's the truth. And like, I go see lots of customers and here's the thing, I just want to say one thing. So again, insurance company, lots of compliance. Guess what? Every single company in this country, capital C, lowercase c compliance. Compliance means meeting the standards that are important to your organization one way or another. Everybody has to solve for this. Everybody thinks they're special.

**Anthony:** You're not.

**Matty:** Okay, here's the thing.

**Bridget:** Some people might be more likely to get sued than others.

**Matty:** Right, but for why it is, but it still matters, right? You still have the scenario of there's a reason you have things to be compliant with. The thing is, when you bring your audit team, your compliance team, your security team as part of it, they partner with you as opposed to being a blocker, as opposed to needing to get permission. You're not going and saying, can we do? And I'll tell you a dirty little secret about one of the biggest ways that we at Chef get into companies right now is through audit and compliance. Because you know why? Because people lie. Computers don't lie, right? There's this idea of— and I'm going to— I know I'm a host, but I am very passionate about this. This is all I talk about right now.

**Anthony:** [00:09:33] That is exactly what they saw in our systems, right? The entire concept of CI and CD, right? Every deploy to production, you can trace it back to a GitHub commit. And for them, that was mind-blowing. That was like— and words, and I quote, was that, I've never walked out of an audit with a smile on my face. These guys are doing it right, and everybody should be doing it this way.

**Bridget:** And that's the— I actually want to hear what Nicole is seeing in customers because I know you go in and visit a lot of customers for Chef too. Like, what are you seeing, you know, the landscape of audit and compliance?

**Nicole:** Yeah, and when you don't bring in your compliance teams early on, they get scared because you start doing things really fast. And you're like, oh, man, how are we going to keep up when they can barely keep up as it is? And they hand you a spreadsheet or a PDF and they say, here, tell us how compliant we are. And you're like, how are we supposed to do this with all the other things that we have going on? And you have to take the time out to do it, slowing yourself down. But when they're part of the process, they get to see what you're doing and they get to see all the value that you're bringing. With the great practices that you're borrowing from, you know, developers with CI/CD and codifying compliance. And they say, whoa, that's awesome. That way we can verify this stuff, we can report on it, and we can collect that data in a programmatic way rather than relying on people.

**Matty:** [00:10:58] And you're not automating somebody out of a job there because you're like, no, I still need your big brain to know what's important. What I'm asking you to do is describe it in a way that we can be consistent rather than describing it in a PDF. But it still has to be described. You still know what's important. And there's no computer algorithm out there that's going to be smarter than the risk officer to know what's important. And that's where it starts to really resonate to that. There's this idea of audit theater. And I've worked for a lot of financial companies and stuff. Sorry for those of you who are listening, aren't going to see my little thing, but it's the sine wave of compliance, right? It's like we're doing our regular business, and so we're down at the bottom and we're not very compliant because we're doing shit. And then we're like, oh, quarterly audit's coming, let's go, like, oh, let's— and everybody's gonna bust their ass and get all the systems nice and compliant. And then the auditors show up and they look and they're like, everything looks amazing, and they leave. And then we go back to business as usual and it starts to drift down.

**Bridget:** [00:12:05] So it's not even a sine wave, it's more of like a cliff.

**Matty:** Well, that's what I mean. Well, it comes down and up, but I mean, it does start to curve because we know it's coming, right? Like, we're like, we have this—

**Bridget:** it curves up, but then you don't stay sort of compliant for a while.

**Matty:** You don't stay— yeah, you stay sort of compliant for— well, it depends on how long it takes the auditors to do their work. If you have slow auditors, you stay compliant for longer. So, but, but the difference is if it's part of your process, you're continuously compliant, right? You're like, it's, it's there. And then, like you said, people walk out of an audit with a smile on their face and they're like, and your auditor, you know, your compliance folks love it because they're like, at any time I know that an auditor could just randomly walk in here and I'd be like, boom, right, this is our state. I, I don't have to like go prep my, my IT, my tech folks to make sure everything's okay.

**Anthony:** I think that's, that's the challenge, right? Because the typical response to, uh, audits and compliance is, oh, let's put a process to gate that and come up with PDFs and Word documents and fill those out, right? So the auditor comes in and looks at your PDFs and says, wait, this one is missing this particular document, and oh, that's an audit issue. So naturally how we react, because we're process-driven, you add another layer of process to say, oh, this process is going to make sure we fill up that. And then the next time the auditor comes in and says, oh wait, the process that was meant to check the process did not do its job. So that's an audit issue again.

**Matty:** [00:13:30] And now we're so far away from what we were even trying to do in the first place.

**Anthony:** Exactly. And that's what the system solves for you.

**Matt:** And I think that one of the key things, like hitting back to what Anthony said, engaging with audit early was it allowed for like bidirectional communication, which is not typically like the way the audit goes. Usually it's like, you shall give me these things and then I do whatever I can do to either lawyer my way out of having to give that, which happens all the time. Or, you know, I give you the minimum amount of effort that I can contribute to like produce that artifact. And I think that the key part of that engagement was it allowed for 2 things. It allowed us to educate them on like what we were capable of with new tools and new technology and new thought process, which is something they could have never imagined up on their own without like seeing it firsthand. So that was huge because that opened up the conversation. And then the second thing that I think was maybe even more crucial was it allowed us to engage in a dialogue with them in such a way that we could understand their outcomes and incentive systems, which as it turns out, isn't to check the box.

**Matty:** [00:14:42] Like, who knew?

**Matt:** Like, it very much feels like that is the case in many situations. But to really be able to sit with them and speak about risk and speak about the language, our language in their terms, enabled us to build a bridge rather than kind of pile another brick on the wall, so to speak.

**Matty:** And you're thinking about outcomes, right? Which is what testing is about. And security and compliance are just another aspect of quality. Right?

**Bridget:** Like, um, and putting your bricks into a bridge instead of a wall sounds suspiciously like DevOps.

**Matt:** Crazy, isn't it?

**Matty:** I think like one of the things like Nicole talked about is, and you're, you're touching on it too, which is again starting at the beginning. So like the traditional thing that we do when we think about security and compliance, so we have this like 4-sprint project or 8-sprint projects or whatever. And we chug away, and then our last sprint is called a hardening sprint. And that's when we security test. And guess what? It fails because we haven't even looked at this shit this whole time. So now we have a choice. We cannot ship and delay, which we can't do because the salespeople have already promised this product to everybody, right? We've got commitments, so that's not an option. Um, or then we go to security and we get an exception. And the thing is, the bad guys on the internet don't care that you have a note from your mom that says it's okay you didn't patch Heartbleed, right? Like, it's all theater. And it's the thing. And if you made the same conversation about functional testing, it sounds ridiculous, right? If I'm like, we're not going to do any QA till the last sprint, hopefully it sounds ridiculous to you, or you may have worked at some companies I've worked at in the past. But, like, if you're doing it all along, because Again, the closer to the introduction of a defect that we discover it, the cheaper and easier it is to fix it. So if I'm doing something insecure and I find out almost immediately that I did that, I super can undo it right away.

**Bridget:** [00:16:50] But if I find out like 6 weeks after you built 8 dependencies that rely on that hole.

**Matty:** Yeah. Then I have to, at the best case, I just have to unravel it. The worst case, I don't even remember how I did it in the first place. And like, So, the further to the left you can shift that security testing, you know, we can find it easily. And that's the challenge that I think a lot of things that we find is with traditional security tools, they're very heavy. And this is not a vendor pitch, right? There's lots of other tools that are out there that a lot of modern security type stuff that people are doing, you have to be able to democratize your compliance, right? Like, you have to move it because— I'm sorry.

**Bridget:** That brings us exactly to something Nicole said in her talk.

**Matty:** I'm not shocked at all.

**Bridget:** Which is something she said that I tweeted and it got a reasonable amount of people being excited about it on Twitter. And I'm probably going to misquote you, but it was something along the lines of that, raise your hand if security and compliance are your job. And like, not a lot of hands went up, I guess. And she was like, yeah, you're all wrong. Like, all hands should be up.

**Nicole:** [00:17:58] Right.

**Bridget:** Because like, this This is actually part of everyone's job. And so, to your point of if we can make the tooling make it possible for everyone to be invested in and engaged in and care about it.

**Matty:** Yeah. Because if you don't, if you have tests that are in your pipeline for deployment that only run at the end and I cannot test that myself, I'm a super jerk, right? Because I just made it where I'm like, okay, I'm developing something and I can't find out that it's not cool. Pool till it's all the way down to the right, and then it's like, that sucks. So if that's what's happening, you got to fix that, right? And that's what I mean when I say you have to democratize your compliance.

**Bridget:** And I know we all want to jump in on this, but I want Nicole to elaborate on that a little more because in some ways maybe it was a joke for the talk, but I feel like that was a central point.

**Nicole:** No, no, it's not a joke at all because when you talk to folks who are actually responsible for payment card systems, And you hear conversations about how they work with their technology departments. That's a real problem. Everyone, everyone who touches a system in any way is responsible for compliance. And forget the testing. Before you even get to the testing, the systems that you're testing on should be hardened in the first place. Because what happens when you get to QA and you say, oh, this looks good, the tests are passing, but the systems aren't hardened yet? So when you get to production, When you have that special shiny production gold standard image and you're like, oh man, this thing doesn't work because our images are hardened. Well, I guess we have to start over now, right? So, what's the thing that's keeping you from introducing that change into production successfully? It's something on the system that's hardened and you have to go unravel it like Matt said. But when you start thinking about how you test the things, starting from the beginning, taking things piecemeal. You can't make everything compliant right away. That's not going to work. You have to start, and I'm sure that you guys have gone through this, figuring out what's the lowest barrier to entry? How can we start introducing value and showing other folks that they need to get on board?

**Anthony:** [00:20:06] So the other side of the coin there is on the developer side. So real story on our side, are kind of an appeal also to anyone working in a security organization, right? So they had a preferred tool. I'm not going to name names, but it starts with an I and ends with an M. That's the company that makes it. And the devs—

**Matty:** I usually pick on Qualys, so it's nice that someone else is picking on them.

**Anthony:** It starts with an I and ends with an M. And we— I mean, I saw it with my own eyes. The devs tried hard. They wanted to get the test in there. It just wasn't working, right? The moment that security finally acknowledged this is not going to work for Agile, they went with another tool, right? Again, I'm not going to name names, but I think in about 2 weeks, we got like 60 or so dev teams immediately switched to that new product, right? It's now part of their pipeline. Every commit now goes through the scanning process. In 2 weeks, right? 60 individual teams doing it on their own was able to switch or was able to implement it because the devs do want it, right? The devs want to actually—

**Matty:** [00:21:17] they don't want to find out later that they screwed— yeah, and that just pissed you off, right?

**Anthony:** You're like, exactly, like somebody beat you, right? You don't, you don't want that. Nobody wants to get beat by anyone, particularly in production, right? So they wanted to do the right thing, but we have to give them the right tools to be able to do things the right way.

**Bridget:** Like Andrew Clay Shafer says, make the right thing the easy thing.

**Matty:** Easiest thing. There's a great— one of my favorite books is Switch. And there's the example of, you know, there's a plant where they had this machine where people kept cutting their hands on the blade. And they're like, well, they could have done all this training and told people, keep your hand out of the way and everything. And instead, they redesigned the machine. So to turn it on, you had to put your hands away from— both hands had to push a switch away from the blade so you literally couldn't cut your hand. And like, I believe in trust but verify, right? Like, so the same thing, like you said, okay, you've enabled the devs. They don't have to do that, right? Like, the devs could— now you might have it in the commit thing, but you're like, FYI, you're going to get tested with this tool later. And what I always tell people when we talk about things with compliance or whatever, I'm like, or just any kind of testing, you're like, you don't assume that anybody's going to test locally. But all it will take is a couple times of failing a test in the pipeline and people will learn that they're just wasting their time, right? So you make the right thing the easy thing and all, but you— that's again why it's so important to be able to be consistent because otherwise, you know, you want to give them the tool to be able to do it and it's up to them if they do it or not, right? I mean, the only person, to be quite frank, the only person they're hurting is themselves. They're just wasting their own time. And nobody wants to waste their own time.

**Bridget:** [00:22:58] And I think that there is something important. And one reason that I wanted both Anthony and Matt on here is because, hey, guess what, Matt? You get to be leadership. You're wearing costume, right? You left your jacket on for a reason.

**Matty:** Oh, he's so—

**Matt:** I'm acting as leadership. You're acting in the—

**Bridget:** you're speaking with the voice of leadership here. Obviously, it's great to incentivize devs to want to put the right kind of testing in their pipelines. But what happens if you need to make decisions at a higher level and kind of, for lack of a better term, impose them upon people? How do you handle that?

**Matt:** Yeah, so this is really interesting. Kenny from Vividol and I have had multiple conversations. We actually had dinner the other night. And I was telling him, I keep repeating myself. But my comment is always like, if you have a problem that every developer needs to solve, that should become a platform concern. And I think that compliance definitely falls into that category. And I don't know that we're totally there yet, but I imagine a world where you don't get a choice on your CI pipeline. There are certain parts of it that are just there and you don't really get to opt out.

**Bridget:** [00:24:20] They don't get the artisanal, handcrafted, bespoke, personalized CI pipeline with knitted tea cozies?

**Matty:** No.

**Matt:** I mean, artisanship is great. Certainly, use artisan— be an artist and make your pipeline run faster or make it make pretty-shaped boxes on the display or however you want to do that. But there are certain constraints. Um, you know, the size of the canvas is maybe not up, up, uh, for free rein. So it— but again, it's systematizing, like treating the organization as a system, building systems that enforce the thing instead of people that enforce the thing. Because that, uh, when you get to like short feedback cycles and all these things that As Matt said, like, to shift everything to the left, like, committees are not scalable. I mean, this is like physics. Like, and, you know, it's always interesting because you go to engage teams that haven't moved in that direction, and it's always like, well, I don't have time to meet with you because I'm too busy going to meetings. It's like, well, but I'm supposed to ship my software, and like, I can't wait. Until you have a free calendar appointment available like 6 months from now. And like all this time is just consumed in meeting scheduling. And then you get the meet— like how many times have you got the meeting secured and you're like, yes, got the meeting. It's like hitting the jackpot. And then the person doesn't show up and you're like, mother, like this sucks. And you're like, or like the team shows up and they're like, You know who we need to talk to.

**Matty:** [00:26:04] Yeah. You know who's not in the room.

**Matt:** Somebody who's not in the room.

**Bridget:** And I think that this relates really well to what Nicole was demoing for us too. Like this idea of what if you just build this compliance into code? Instead of having the change control review board has to look at your PDF to decide whether or not things are okay.

**Anthony:** Yeah.

**Matty:** If you think about the principles of continuous delivery and if we go back and, you know, we read the Jez and Dave Farley book that we've all read, right? And if you haven't, go see the ThoughtWorks booth and they'll happily try to give you copies of it, maybe. But you— first of all, the list of things that require human intervention is substantially shorter than we think it is, right? And human intervention really only needs to come in when it actually requires something like a judgment call. And so much of what we're talking about is not judgment call. Now, the judgment call is what matters, right? Writing the standard, creating the standard, that requires a human being and their big smart brain. Identifying whether or not a system matches the standard so does not require a human being, right? In fact, human beings are shitty at it because human beings lie, Right? Human beings make mistakes.

**Bridget:** [00:27:25] Human beings get bored and pattern matching is hard.

**Matty:** Well, and again, to quote from the CD book, the problem is having a human evaluate a system for compliance requires— is a very boring and monotonous task that requires a high level of skill. Asking a highly skilled individual to do a boring and monotonous task introduces more errors than inebriation or sleep deprivation. So that's a great job for a robot, right? And in the meantime, and then this also gives you, when you're treating your compliance as code, it means you've got a common language. And I know this is like the, you know, Inspect pitch, but whatever, whatever way you do it.

**Bridget:** And that's because her talk was about that.

**Matty:** That's why I'm like, yes. Right. But the idea is we're saying what we're doing, right, is—

**Nicole:** Well, that's true. Yeah. Sorry.

**Matty:** Yeah.

**Nicole:** So also, it requires the right human being, right? So if I had a dollar for every time I asked the wrong person, OK, cool, you want to test for compliance. What do you need to test for?

**Matt:** [00:28:27] Uh, uh, uh, uh.

**Nicole:** Right? So it requires the right human being. So those committees that define those standards for the organization and say, OK, here's the things that we need to test for, those human beings that are interacting with the systems They're the ones who have the context that say, well, I think that one isn't as important, or I know for a fact that we can't do that because of the way that we do this other thing. So those human beings that interact with the systems, they can add the context to what the committee's deciding and then come to an agreement. So that's that collaboration, and that's that incorporating compliance early on in the process. So that you can define the standards effectively and in a way that makes the most sense, right? Because there's always gonna be exceptions. You're never going to pull out a CIS benchmark document and just be 100%. And just slap it on there. Right, yeah.

**Matty:** And it's to Matt's point where he's like, I need to collaborate with you and I can't because you're too busy and it's probably because you're going doing all this manual shit, right? So if we could take you away from doing that, then we could sit and have a conversation about what we should actually be doing.

[00:29:37] Yes. You know, and again, it's that like—

**Matt:** and we can do like more of it, right? Massive scale. Like Anthony was talking about, like so many teams in such a short time. Nobody could have ever imagined that, right?

**Matty:** And you operationalized it, you productized it, right? Because that's the thing too. When you think about saying— this was something that resonated to me that I think so many organizations need to understand. And it's hard, and I understand why it's hard. When you said, hey, you know what, there is just a way that we do CI and CD at Allstate, and I'm sorry, you don't just go and create your own way your own way. And the reason— there's 2 in my mind, and I'd like to know if I've hit any that were similar to what you thought of. One is it's just like a huge waste of time to have 60 different teams doing different things. And it's like— and also, how do you— you can't apply consistency, you can't apply scale. The other thing is Allstate is not a CI/CD tool company, right? Like, or your feature teams aren't. Maybe you're big enough that you're like, okay, we have one team that actually that's what they'll do. Maybe we'll have a dev team, but whatever your feature team is, their core competency, the way they add value to your company is not building a kick-ass pipeline, right? And so it's like, don't, but it's the reason why that's hard is doing shit like that is super fun, right? Like—

**Bridget:** [00:30:57] That's what I like to call resume-driven development.

**Matty:** Right. Or it's not even if it's resume-driven development, it's also just interesting. And if you're a highly distractible individual like I am, you do stuff like this because it's way more fun than doing your real job. Right. But that doesn't drive the business forward. So, I mean, what are your kind of—

**Matt:** So, yeah, I mean, I think you totally hit on 2 great points and definitely would agree. I think the other thing that I was thinking of as we were having this dialogue is like consistency when it comes to compliance, as it turns out, matters. Like it makes it auditable in a very consistent and predictable way, which like there are certain things like deploying to production and audit and compliance that should be very predictable and boring and pretty much done the same way like everywhere. I don't really want a team coming up with their own way to do compliance. I don't really want a team coming up with their own way to deploy to production. Like, as it turns out, like, there are smart people in the org that have figured these things out and like, they should share that knowledge.

**Bridget:** [00:32:05] You don't want the non-repeatable, exciting, carefully crafted deployment process.

**Matty:** Well, like, the things inside of it will differ from project and team, but the shape is the same. Right? Like you said, you know, the way that you deploy at a high level is the same everywhere. Now, your different apps are going to obviously deploy differently, but they're going to follow the same thing. So, you don't have to do deep forensics and go like, oh, now I have to go do this. You can be like, I know that I just go look in this one Jenkins log, no matter what the project is, and I will at least see everything that was deployed. And yes, sometimes it'll be Maven, sometimes it'll be blah, blah, blah or whatever, but the shape doesn't change.

**Bridget:** What I want to hear from Anthony, because I know that you have people on your team who are the ones who might be tempted by the excitement-driven development or resume-driven development.

**Matty:** I like excitement-driven development. That's the new term.

**Anthony:** You heard it here first.

**Matty:** We've invented it.

**Bridget:** But how do you motivate people to have them do the more consistent, more repeatable, perhaps more above the value line that James Waters likes talk about how do you motivate people to do the stuff that they should do that's good for the company and not the stuff they read on the front page of Hacker News?

**Anthony:** [00:33:20] I, I think at least on, on, on my team, that's, that's, that's like a never-ending fight between good and evil, and it's always like battling in your head, right? Um, but at the end of the day, um, user focus has been a, a key there. Change everything, transformation, everything that DevOps is about, it's hard. But what makes it worth it is that when you have that customer, your customer, which is for my team, it's the dev teams, when they're able to ship a product, I think we had the story there where they were able to ship something. They didn't even talk to the platform team, not once. From start to production. And we're like, yeah, that's what makes it worth it. And that kind of keeps us, kind of keeps the team grounded and focused on, okay, this is really what the devs need. If you constrain it within that business outcome, that outcome you want to accomplish for the devs, then we get razor-focused in terms of the outcome we want, but we get a little bit of flexibility in terms of how we get there. You get to choose, obviously, tooling or the approach to solve the problem. You can use as much creativity there, but the outcome is still consistent. That's what we want for our users, and that kind of helps.

**Nicole:** [00:34:47] I have a question for you guys. How easy was it or how hard was it to change the culture to work in a different way and think about compliance in a different way? Way?

**Matt:** So I would say a couple things. One, I don't know that we can totally take credit for all of it. We definitely had some help and like some open-minded partnership in our security and compliance organizations.

**Matty:** You can totally take credit for it. It's fine because they're not on the show. So you're saying—

**Anthony:** They might not be watching.

**Matty:** Yeah.

**Matt:** And then I think, and I was thinking about this earlier as we were talking, like one thing that's really interesting is in many cases, and we hit on this, like the process is based on what tools we already bought. And so in many cases, like it becomes like just a financial conversation of, hey, I just like re-upped on this tool and now you're introducing a process that renders my tool like completely useless or like it doesn't scale to meet the need or doesn't have APIs or whatever, like my sales rep promised me that it would solve world hunger. And as it turns out, like it's really good at just not working, right? Like at all.

**Bridget:** [00:36:02] Wait, you're not talking about anything Pivotal sold you, right?

**Matt:** No, of course not. And so, you know, yeah, failed promises of enterprise software, that's like a whole nother talk. But, you know, bringing, like having open-mindedness and in many cases just like bringing funding or like showing the partnership or just being like, well, what if we could pick another tool? Would you help us do that within these constraints? Like not letting people end the conversation. Like a lot of people are really good at ending conversations. Like I know exactly what I need to say to you to make you go away because that's my job so I can go to other meetings.

**Matty:** There's a lot of, when it comes to like that kind of thing, there's a lot of tendency in organizations to throw throw good money after bad. Yeah, because a decision was made and it's either a concern that like, well, we've invested in this and if we do something different, we've lost that investment, so we need to figure it out. So, but that's the rationalization. The reality is to do that is that person is admitting they feel like it will make them look like they made a bad choice, right?

[00:37:11] Right. Which is the difference is you're like, well, when you made that choice, we knew this And now we know this. It's like, not to get all political, but like when everyone's like, John Kerry is a flip-flopper, and you're like, why is that a bad thing? Like, you have new information, you change your mind. That's being an adult, right?

**Bridget:** You know, and that actually brings up an interesting point just because we, I guess vendors outnumber customers on this particular panel. We're like piranhas.

**Matt:** Yeah, we're close. I mean, we can invite up some random people.

**Bridget:** If you don't work at Offender, rush the stage now. But seriously though, you presumably, when you're making choices about, you know, whom to work with in order to, you know, further your organization's goals, how well they're going to partner with you through those changes, through what you need to do that's different than what you needed to do before. Can you talk a little bit about the decision-making process there?

**Anthony:** So, on my side, I think the anecdote there, it's actually the other extreme. When we were starting this journey, we picked between Cloud Foundry and OpenShift. Our approach there was to minimize the vendor interaction. Let's keep the vendors out of this conversation. Let's see and assess this in terms of our ability to figure this out on our own. And the ability to keep it up and running, right? Because that tells you that the software is at its maturity level and the community is rich and open enough that you can actually get the right information, right? So I think that's probably one way of looking at it. May not apply to all situations, right? Because some vendors wouldn't even let you access to their download site until you sign a big check.

**Matty:** [00:38:59] Well, there's that and there's also, and again, trying to not put my vendor hat on. And then also we did an episode with Michael Ducey called Vendors, Friends or Frenemies, and talks about, about sort of a more modern software vendor where it really truly is a partnership. And that is one of the things with Chef where it's a matter of, to be quite honest, I understand where you're coming from, where you're like, I should— the software should stand on its own. But the thing is, software is not just a bunch of bits that you, you don't know chef as well as I know chef. And you can waste a lot of time making a lot of mud pies. So what we try to do— and so just for perspective, Nicole is on the presale side and I'm on the after that, after she's promised a bunch of crap, I have to go help the customer make it work. Just kidding. We actually do the same thing, just in different journeys. But a big part of that is to be able to help you say, like, what are you trying to do? And the thing is, it's not just a one thing. So a good vendor who is your partner is not like, Well, you have to do it my way or whatever. But it's like, I want to understand what your jam is and let me help you, not direct you in doing it. And like, if you need to go and do things by yourself, but my goal is to like say, here be some dragons and I don't want you— let me just direct you around them so you don't just waste your time. That's partnering versus the, you have to work with me. I won't give you access to play with it. Because I need to make sure you're going to sign a PO. It's about do they want to work with you because they want to make sure you'll be successful versus they'll— that you'll—

**Anthony:** [00:40:31] And don't get me wrong, I don't advocate cutting the vendor off, right? So when we did this process, right, one of the great things that came out of the entire journey was a great partnership with Fevitan, right? They turned out to be a great company to work with. Exactly, right?

**Bridget:** So those listening to the podcast, Point of order. I'm sticking my tongue out at Matt.

**Matty:** So say Bosch so we can bleep it out.

**Matt:** But do you swear word on this show?

**Matty:** It was at first.

**Bridget:** It was a it was a joke on Matt's part because I I told him like I don't like I don't fucking like being bleeped out.

**Matty:** Yeah, she doesn't like to bleep it. So anyway, but but you're actually making a very good point.

**Anthony:** No, and and and that was it, right?

**Matty:** So.

**Anthony:** I completely agree with you. That's what I love about the industry we're in right now, right? Because there's an opportunity for you to learn from the community. There's an opportunity for you to partner with great vendors, great companies, right? And build on top of what each other is doing.

**Matty:** [00:41:32] And cross-vendor. There's actually— I want to tell a really fun story that is— I know we kind of now have gone a little bit into talking about partnering and vendoring, but the story is, and it involves the 3 vendors sitting on the stage, one of whom may not know she's involved in this story.

**Bridget:** Wait, we have 3 vendors?

**Matty:** Chef, Chef, and the dog? No, the humans. Oh, okay. The 3 people. Bridget, Nicole, and Matt.

**Bridget:** I'm not a vendor.

**Matty:** So, a couple of weeks ago, Bridget reached out to me. She texted me and said, hey, I was talking to someone at blah, blah, blah company. And he had listened to our episode that we did about ITIL and DevOps and was like, hey, You know, that show was like the first time I've actually heard anybody really understand how these 2 things really work. Do you think Matt would be willing to come talk to my group just about that? And so Bridget's like, do you mind if I send him your info? I'm like, sure, no problem. But then what was also funny is he espoused to her like, we're having issues with compliance, we're concerned about that. And Bridget said, hey, you should talk to Nicole Johnson about this thing called Inspect. And it's like Bridget was telling me that she's like his mind was kind of blown that A, she knew about and B, would speak highly of a quote unquote competitor's product.

**Bridget:** [00:42:47] But yeah, but I mean, this is, this is a customer I've gone and visited and spoken at their internal events and I want them to have the best possible thing. And the best possible thing for them is, the best possible thing for them is often Cloud Foundry and they should do that. Cloud Foundry is not Inspect.

**Matt:** It does not hurt us whatsoever for them to use Inspect.

**Nicole:** Yes. And as you started telling that, I knew where that was going because I was like, I think I saw that email. Yeah. And it probably didn't work. So, but what it comes down to is, is your vendor also willing to ask you the hard questions? Like, why do you want to do it like that? What's the benefit? And just because you can do it doesn't mean that you should. If I had a dollar for every time I said that, And the customer proceeds to do that anyway and there's pain. But trying to understand not just what they're trying to do and what the end goal is, but why are they doing that way? If they say, well, we can't do this thing because this other team is responsible. Okay, let's go talk to that team. How can we help you break down some of these barriers and even serve as sort of a go-between for the folks in your organization, right? So partnering is not just selling you the thing and dropping it off and saying, have fun. It's about helping you work through some of these things and asking the hard questions, even if they're on your behalf.

**Matt:** [00:44:10] Yeah, I think the other thing that's interesting that's really revealing as you do vendor selection is sometimes you go to your vendor of maybe an existing purchase that you've made or a tool you're thinking about purchasing and you say, hey, I'm trying to do something like this. Can you help me? And you get one of two responses. One is, yes, totally. I've done this before. I know exactly how to do what you're trying to do. The other is like, huh, like let me go talk to this guy that's like one person in a 10,000-person company that may have like kludged this into working at some point.

**Bridget:** That sounds like a great idea to YOLO out into production.

**Nicole:** Yes.

**Matt:** It's like, this feels like it may not end well for me.

**Matty:** Well, or the problem too is there's a— the problem is then if you subdivide that first bit of yes, totally, is sometimes you get yes, totally, but that wasn't actually true. Right. And there's— but we can do that. And this is something I think as consumers of enterprise software, we have gotten better as an you know, as humans. I'm not a consumer of it myself. Where, um, you know, it used to be that you had your relationship with your one vendor and you needed a thing and you went to them and said, do you have a thing that does this? And they're like, well, sort of. And you're like, great, give that to me, right? You know, it's like IBM is the answer, what's the question? You know, and we— I'm sure we've all worked in places where again you're like, well, I want the Microsoft version of that. Microsoft's like, we kind of don't really have that. And you're like, Give me the closest thing you have. Sure. You know, so we're— and this is why 2017, why as much as, you know, we talked about this morning that this still sucks, there are ways that it doesn't suck, right? Because you do have— and there's still shitty vendors out there, but I do think there's, you know, companies that understand fit for purpose. We understand whether we believe it or not. I think even Microsoft will tell you the same thing. They'll come to you and say, Maybe you don't use this piece.

**Bridget:** [00:46:14] Another whole episode. We are definitely out of time at this point. So, I want to give our panelists a chance to say one last thing. And I don't have a clock running anymore. So, try to keep yourself to 60 seconds or less. And starting with Anthony, people are interested in managing risk and security and compliance and all that good stuff. What's your best piece of advice to them?

**Anthony:** So, I think Nicole had asked earlier, And I kind of lost track of the thought, but how do you convince security to adopt more agile methodology and things like that? I think in DevOps, you talk about embracing change in systems by doing it more often and in smaller increments. The same thing applies to organizations and people. Don't try to change everything at once in one day. Small things, small incremental things. Goes a long way and it helps you kind of adopt an organization. Cool.

**Matt:** Yeah, yours was so good, I might not have one. What I would say, you know, is partnership and like trust and credibility is the fundamental foundation by which all of this can be executed. So a lot of it is you may not have that today and you may need to do a lot of upfront effort, a lot of upfront investment in establishing Like, hey, as it turns out, I'm not trying to put all of our PII on the internet. I know that you believe that about me, but this is not actually true.

**Nicole:** [00:47:45] So first off, thank you, Bridget, for being an awesome partner, even though we're competitors a little bit. So the thing— We're all friends.

**Bridget:** Yes. Friends.

**Matty:** Like Bridget says, we're all going to change jerseys 15 times.

**Nicole:** Yes. So I think what it's important to keep in mind is that everyone's working towards the same goal. Even though it may seem like you have opposing interests, your operations team, development teams, there is going to be conflict and there's going to be some compromises that need to be made. But just remember that everyone's working towards the same goal. So when you say, What's your path to get to compliant? What's your path to be secure? You know, they may have a different path because they have different facts and they have a different way of doing things. But if you collaborate and come together on a solution, it becomes a whole lot clearer that everyone's working towards the same goal. So, you know, keep that in mind even, you know, when you're working with folks outside of the technology area. And understand what's important to people, what are they looking at, what perspective they're coming from, and keep that in mind as you're all working towards that goal.

**Matty:** [00:49:00] I mean, just like you said, if I can go see Eric Sorensen from Puppet at a DevOps conference and give him a big hug, and you've got tons of people that are technically competitors all sitting around here, and we can all be friends and give each other hug ops, you can do that within your own teams and your own organization just as well. In fact, it should theoretically be easier because theoretically you're all trying to make money for at least the same company. So this has been a great episode. You can head on over to arresteddevops.com/devopsrisk for the episode show notes once this episode is published. Don't anybody in the room go do that now. That website's not there.

**Bridget:** But I really hope the website is.

**Matty:** The website itself, however, arresteddevops.com/devopsrisk, devops.com is there, and that's where you can sign up for our newsletter, The Banana Stand. We really don't spam you, I promise, mostly because I forget to send it out a lot. Um, you can support us on Patreon, all that good stuff, and, uh, check us out on the iTunes Music Store. Give us a review. It helps people find the show so more people can learn about DevOps awesomeness.

**Bridget:** [00:50:04] Thank you so much, Nicole and Matt and Anthony, for joining us today.

**Nicole:** Thanks for having us.

**Anthony:** Thank you.

**Bridget:** This is great. So, I'm Bridget at Bridget Kromhout.

**Matty:** I'm Matt at Matt Stratton.

**Bridget:** We're Arrested DevOps, and remember, there's always DevOps in the banana stand.
