# The October Incident with Ali Diamond

[00:00:00]

**Matty:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matty Stratton. Today, I am joined by Ali Diamond. Ali, welcome to the show.

**endingwithali:** Hello

**Matty:** Wanna tell, tell everybody just maybe a little bit about yourself just so we kinda lay the groundwork and then we'll get right into all of the snarking

**endingwithali:** So hi everyone, I'm Ali Diamond. By day, I am a software engineer, a backend software engineer, and by night I am a content creator and cybersecurity news host slash... I guess I started kind of transitioning myself to calling myself a cybersecurity com- uh, uh, what's the word I'm looking for? Cybersecurity commentator.

Critic. A cybersecurity critic. A cybersecurity critic. I'll,[00:01:00]

**Matty:** M-

**endingwithali:** uh,

**Matty:** could we

**endingwithali:** explain why. I, I like the term critic.

**Matty:** Okay, Critic, yeah

**endingwithali:** I like the term critic because, the situation is that I think a lot about how, movie critics are very knowledgeable about movies and have a really keen eye for movies, but if you put them in front of like a camera and say, "Go film this thing," they're not gonna be able to create that exact same thing.

And kind of the same way about the same amount of knowledge I have about like cybersecurity, the industry, the operations, things like that. But if you put me in front of Burp Suite, I can't, I'm not... That's not my, my forte, you know? So I've kind of loved this like comparison of cybersecurity critic.

**Matty:** I love it. You're a cybersecurity critic. So on that topic, we are gonna talk about security today, and I think it's very important because, you know, this is prerecorded, so depending on when you're watching or listening to this, we are recording this episode on Novem- on November 4th of 2026. So keep that in mind because, some, some shit [00:02:00] happened in the

**endingwithali:** October 21st, 2026. Uh, the day the world became cyber aware. I- that's the way, I really do feel like this time was significantly different than, like, other times. Did y- this is gonna kill you. So, uh, did you know that a year ago AWS went completely down for the longest AWS outage ever, but nobody remembers

**Matty:** I do, I do not remember that at all. Oh,

**endingwithali:** Exactly

**Matty:** What was it? Do you remember?

**endingwithali:** Yes, I, I actually just covered it on my show. Um, and it is, it was an outage having to do with, uh, what's the word I'm looking for? Having to do with a misconfig, uh, that... Let me find it again, 'cause I know that I have it here. What brought AWS down?

**Matty:** I'm, I'm trying to remember because, like, I remember outages that were config related had happened,

**endingwithali:** Yes. So the network load balancer health checks went [00:03:00] down due to, uh, pushing a bad configuration for US East One, uh, due to high error rates, and that was fixed due to a DNS resolution error with DynamoDB, and then it started causing cascading issues. So AWS went down for like several hours

**Matty:** Yes.

**endingwithali:** But no one remembers that that was like

**Matty:** when passed,

**endingwithali:** a year ago

**Matty:** I, I think, and maybe like to, to sort of lay the groundwork about October 26th, or was it 24th?

**endingwithali:** July 1st

**Matty:** Okay. October 21st, I'll get that in. it was more than one thing. It kind of started, it was the PHP, right? Never... And how many people were like, "PHP is still a thing?"

By the way, PHP very much still a

**endingwithali:** Very much still a thing.

**Matty:** my friends, you know

**endingwithali:** Wikipedia, the entire Wikipedia is a PHP site

**Matty:** And I think, you know, we've had, [00:04:00] we had Heartbleed, we had SQL Slammer, we've, we've had all these... Like I said, I kinda joked and said, "Oh, for the fifth time we became cyber aware," but this was different, you know? Um, and I don't mean because it was PHP, but maybe because of the landscape, because of concerns about, uh, how easy it might be to exploit with all the, you know, our friends the robots that can write all this code for us and such.

 and then it seemed to be cascading, like more things were being kind of discovered and, and do you... What, what do you think was really maybe the catalyst for, for this one being different?

**endingwithali:** I think it actually completely stems from what happened with OpenAI over the summer. It's not because people are being like, "Agents can do more," it's that- The general populace has become more aware of cybersecurity incidents as a [00:05:00] whole because the OpenAI's, like, hacks that then Anthropic started publishing their own things and OpenAI coming out and being like: "Oops, we-- our agents were running rogue, and we can't control them."

 that hit major news cycles. It hit major news cycles, and that caused, uh, a lot of people to start thinking more about cybersecurity in general, and especially in the tech industry because, you know, it, it was very trendy... It's very trendy to talk about AI agents, what OpenAI is doing, what Anthropic's doing, what all these companies are doing.

So if they're talking about agents going rogue and people are seeing that their agents are having so much permission and power, that was kind of always on the, like, back burner for a lot of people after that big document was released and, you know, OpenAI kind of used cybersecurity as a marketing tactic, um, which is good, and it's great to have people be more cyber aware, but a lot more people were becoming [00:06:00] more cyber aware.

And if you did not know, October is actually Cybersecurity Awareness Month, so you could really see-- say that we finally achieved a true Cybersecurity Awareness Month. But I don't wanna say that what happened is unprecedented. It's not unprecedented. At the scale at which it has happened, we can't say that it's not also unprecedented too, because we had things like, um, what is it?

WannaCry, that almost affected,

**Matty:** Mm-hmm

**endingwithali:** every, every piece of technology in the world. I, I don't remember the exact full scope of WannaCry, but that happened, you know, in the late 2010s. WannaCry happened, and that could have literally fundamentally changed the internet forever, and that hit mainstream media.

But people seem to forget that at the same time that WannaCry happened, cybersecurity defenders were still handling other incidents and other vulnerabilities and other issues. And now with what [00:07:00] happened with PHP... Yes, PHP is a huge scale, is a huge scale of, of the internet, and so many people on the internet use it.

You know, Census publishes really great, this really great dashboard that basically shares actively how many PHP websites, or, um, not even websites, how many PHP endpoints, IP addresses, and ports on the internet are actively vulnerable to PHP to shell. And, um, it was a very fundamentally a large scale, um, in-incident.

And then at the same time, because people were-- the general populace was more cyber aware more than usual- And then in combination with people realizing that agents make things go faster, that's kind of how it spiraled. If it was not the general ins- not general, if did not have the general, [00:08:00] like, population looking at what was happening, I don't think people would've been as overwhelmed or scared or freaked out about the fact that so many other things also happened, if that makes sense.

This kind of week is not unusual, and it's really horrible to say that, but this kind of week is not unusual for a cyber offender in the grand scale of things. And, and I just saw today someone on, on Twitter, X, whatever you wanna call it, um, posted because Node.js released another, vulnerability or like another list of vulnerabilities, and someone goes, "Oh no, not again."

And I, I, I it took, it took me in, uh, all, my whole heart to say, "Hey, so this is not new. These vulnerabilities are happening all the time. You are just becoming cyber aware. And once you start paying attention for three years, four years, once you start actually having to see these same things happening [00:09:00] all the time, you're gonna sit there and be like, 'Ugh, another critical in Node.js?

Okay, like let's get something interesting.'" That, the fix to those is just slam patch next, move on

**Matty:** Yeah, it's not some fundamental problem to solve, it's just stay pa- And, and it, it, a- again, like I, I agree with you that, that, that awareness, because I think when we think about the general populace thinking about security issues when they come up, they think about getting their iCloud photos hacked. You know? Like, all of that. Like, a, one of, uh, my favorite, you know, one of our, our favorite security personalities is SwiftOnSecurity, right? And I

**endingwithali:** Yeah

**Matty:** SwiftOnSecurity was quoted in like New York Times articles when, about, you know, Taylor Swift getting, you know, about all the, you know, when, when all the celebrity photos were leaking and all those.

And, and people think about it in terms of like their, their own thing, but your, your average bear out there is not as cognizant of the [00:10:00] infrastructure. But I think we as a general populace over the last few years have, and especially have become more cognizant of it because people are building, they're, they're a little more aware of things, like compared to maybe five, six years ago.

You know, if you would say the cloud, people would think the cloud meant

**endingwithali:** And I, I wanna say I shake my head no. I shake my head no because, yes, people are becoming more cyber aware and I'll say there's like kind of two fields of cybersecurity. There's the cybersecurity practitioner field. This is the way I personally see it, the cybersecurity practitioner field and then the consumer field.

The consumer field is like, "Don't download weird things on the internet. Don't click weird links. Watch out for phishing emails." And then the practitioner side is like, "Okay, we have 10 internet... We have 10 AWS servers. They're all configured differently. Um, one of them accidentally ha- is an EC2 instance that, um, uh, is left open that doesn't have any protections on it.

[00:11:00] Now someone can go enumerate over an EC2 instance. Oh no, that, that other, um, that other, uh, cloud provider that we're using, that server is now hosting, um, an older version of PHP that is vulnerable to X, Y, and Z. And okay, we have all this incoming traffic that's actively trying to take our service offline.

How do we actively protect against that?" Plus also, in many of the cases, a lot of the cyber people are also doing, "Hey, okay, um, you know that one engineer, that one junior engineer just clicked on a sketchy phishing link.

**Matty:** Ja

**endingwithali:** gotta respond to that too." And, "Oh, someone's asking me for permission to be able to download this, this product onto their computer," like, I guess.

So i-i-i-it's... People are becoming aware. I'll say that people are not becoming cyber aware of the general consumer thing because they are letting their agents have too much free power. If you are just like, "Tee hee, hey agent, access my Gmail."

**Matty:** I'm gonna go one-shot this, yeah. [00:12:00] Or, or like you said, or sure, why not give, give Meta access to my bank account, to my, you know...

**endingwithali:** Have we learned nothing? Have we learned nothing?

**Matty:** Can't trust the computers. It's interesting, I, I have... I'm gonna read from this text thread from my, my son. This was from last night, and I was thinking about with, you know, 'cause a lot of this we will think about, you know, people trying to one-shot apps.

So like, one of... There's a lot of great powerful things that we can do with AI coding to enable people to be able to build the things that they do. But if you don't have the right mindset, you know, we'll, we'll, we'll go down a path. Like I, I, I've built a, you know, I have an internal tool that I built in my company and I was like, it is the most operationally sound whatever because I have decades of CIS admin scar tissue of like, this thing has got the most robust CICD tests and everything in the world. So anyway, so this is a, these are, these are te- this is a text thread I had from my, my, my 16-year-old, uh, he's a junior in high school. And he says, trying to make a [00:13:00] website with ChatGPT for a Christmas wish list, and it's being very finicky 'cause I want to be able to sign in with Google." I was like, "Interesting." So I said, "Yeah, that's gonna make more coding. You have to set up stuff." And again, my brain is going to like, how am I gonna, you know, he's not understanding you have to create a project in

**endingwithali:** Yes, I understand SSO

**Matty:** AP- Yeah, basically that's what he wants to. And I said, so I said, "Well, who's gonna be signing into this?

Like, people that you want it..." Like, did he wanna protect it so that it was, you know, who could read it or to edit? He goes, "Well, I want it to edit it. I want it so I can edit it on more than one device." And I said, And again, I wasn't with him. If I was with him, I would've helped him with this more. But I was, uh, he's texting me this while I'm like weightlifting too, right?

So I'm like kind of in between my rest sets, I'm like, whatever. I said, I said, "Tell ChatGPT to make a simple password setup. One password you give to the people who need to view it, one for you to edit." Again, best security in the world? Absolutely not. Good enough? Sure. And he goes, he goes, "Yeah, I'm, I'm too deep into it.

This did not have that." And I said, "So tell it, make the, so there's a password for me to edit it." [00:14:00] then he goes, and then he says, "I'm still low-key really annoyed to do that 'cause I would need two separate websites, one to host the website and one to store the passwords and data." If you're listening to this show and you're not watching, the look on Ali's face is precisely the look I gave my phone in my home gym.

I said, "That doesn't make any sense." Um, and then I told him what to do, and then he started talking about Vision Quest instead. But,

**endingwithali:** the pass words

**Matty:** that

**endingwithali:** go?

**Matty:** I think what he meant was the website to hold that, uh, he meant a database, he just called it a website. And it's like if you, with coding agents and things, if you know the things to feed to them, to, to give a good design, to give a good infrastructure, you can build things that are fairly robust and secure.

But if you just say, "I'm gonna do the..." It, it's, yeah

**endingwithali:** Oh my God

**Matty:** I am, I am looking forward to when he comes to my house tomorrow and, um, I'm gonna kinda have to be like, "All right, show, show me, show me [00:15:00] what you did here.

**endingwithali:** A website is

**Matty:** dad, uh, keys to your, uh, to your infrastructure here and we're gonna, we're gonna set you up

**endingwithali:** This is like my dad years ago asking about Kubernetes and me saying, "No, thank you."

**Matty:** Yeah.

**endingwithali:** Like, no, I'm not. We're not doing this discussion. But y- yeah, it's, it's exactly that. It's like, it's the same idea of kind of the, the, the conu- the, the conundrum. Made up a new, new word. The conundrum that I'm going through right now is you don't know what you don't know, but you do know what you do know.

But then how do you figure out what you don't know so you can learn what you, what you need to know? You know? I love making that confusing

**Matty:** I think so, yeah. I think there is a, a, a... 'Cause like, 'cause, and this is, this is a challenge because if I can go in and I can say, "I wanna build this thing," and I know I wanna use pre-signed keys for the download, you know, like, I know the architecture thing that I want and to build to that. But, but if you go in and you're [00:16:00] like, "Hey, I just want a thing where I can download," you're gonna end up in an unprotected S3 bucket with all that stuff in it that anybody on the internet can get, you know.

And, and you think it was secure because you put a password in front of it, but you don't know that the URL that's inside the source that it's pulling down that anybody can sniff is the direct URL to the S3 bucket,

**endingwithali:** Exactly

**Matty:** and, and this is, this is the other side of that, like, great enablement of saying, "Hey, I need to make a thing."

You know, I mean, I'm, for myself, building myself an, an iPhone app because that will have a, a market of one. It's gonna just live in test flight just for me because... But it's, it's all very customized and very specific to a thing I wanna do in my life. And, know, my, my, my kids like to give me a hard time 'cause I, you know, build a thing and they're like, "Oh, you mean Claude did it."

And I'm like, "Well, Claude helped me quite a bit." And could I have done this? Yes. Would it have taken me four to six weeks to do the thing, and is it necessary for the thing that I'm [00:17:00] doing? No, it's good enough. But, like, would I feel comfortable being totally AI-driven for something I was gonna have other people use that might hold their data and their security?

Be like, then you, then, robot, you get to be more of a helper of a thing, you know? So, but that's, you know, if you have the primitives and you have the experience and you have that scar tissue, you can guide it. But how do people... People aren't gonna be able to get that. So when you come to the security perspective of that, like you said, you don't know what you don't know.

**endingwithali:** Yeah.

**Matty:** You

**endingwithali:** And

**Matty:** know what to make sure is happening.

**endingwithali:** I think also you kind of brought up this good point is like, it's getting now to where I don't wanna say like code, code security is a solved problem. Obviously, it's not a solved problem. But with AI and AI pen testing tools making it easier to iterate through, a- and not even AI pen testing tools, but like static analysis, formal verification, things like that, being able to essentially [00:18:00] find and test different, um, pathways through apps and making sure that code is secure.

The security now more than ever comes from the practical skills of the practitioner in the sense that it's like, how do you keep everything around the code secure? But now there's also more leaning on the engineer to Think more about security when I feel like engineers, if they just, if they just curate their agents right, can take care of security.

Now, this also kind of gets into... Maybe that's a little bit of a controversial thing, but I think this might also get into, like, my controversial take about AI coding and, um, agents. Uh, in the idea that, AI agents aren't always going to be the best engineers, and it's going to take a little [00:19:00] bit more time for agents to be good engineers and be-- and write good code and think of every possible, like, niche edge case scenario because of the fact that n- in the beginning, AI agents, uh, AI and LLMs were trained on bad code In the sense that every good production, every good production-worthy, production-ready, code base is behind closed doors.

**Matty:** Mm-hmm

**endingwithali:** AI can't train on that. Up until recently, now AI is starting to train on more, train on it more because people are giving access to AI to those code bases, and essentially like unless you are actively letting your... unless you're actively using like a organization AI agents and, um, LLMs that prevents, active training on models as you're using it.[00:20:00]

You need to operate under the assumption that a lot of AI, AI and LLMs were trained on bad code. There's probably only, like, what? 1% of GitHub and coding samples online that are actually well-formed, well-written, comprehensive, securely written, well-crafted code versus the 300 million GitHub repos that GitHub has out right now of just slop.

**Matty:** Well, yeah, you're, you're not putting... Your, your, your well-hardened enterprise app is not on GitHub,

**endingwithali:** Exactly. And even if you're asking AI to now automatically deploy those things, is it also following best practices, most secure practices, least privilege, least, [00:21:00] um, most obscure, most secure? Things like that, and I think about that a lot

**Matty:** Well, and, and it's, it's kind of fun to me as the, you know, sort of system DevOps, SRE, whatever person, you know. Like, many things that are... That what you can do to be able to be successful with a well-structured and created, AI-created kind of thing, is all the things we should've been doing all along, right?

They're all the guardrails that you would put in human developers as well, right? You know, and, and the, the, the... My favorite irony is now we're all writing great documentation because that makes the a- because the agents train on it, whereas, you know. So everything that you would do for... And, and maybe this is why the...

So maybe my controversial take is that the people who will be the best AI-assisted coders are security people, and SREs, and dev- and, and sys- and sysadmins, because we've spent our career guarding against dangerous [00:22:00] developers, so to speak, right? You know, so when I think about me as a... And this is, I'm being very

**endingwithali:** I'm gonna say DevRel is for documentation engineers

**Matty:** Right. Well, I mean, like, I, most, how many years as a sysadmin, you know, I actually, this is why DevOps is fun to me, where it's like, oh, I'm friendly with developers now, because I spent so much of my career as a sysadmin looking at software engineers as the enemy. software engineers I worked with, because I'm like, "What kind of slop and crap..."

Before we, it wasn't AI slop, it was just slop, you know. You're gonna wanna put this on, put that shit on my servers? we're gonna make sure it's done right, you know, and then you put those guardrails in place. And all those things apply to the coding agents. I have, I have this blog post I wrote, that's called How My Coworker Who Didn't Know What CD Meant Ships to Production, and she... It's totally fun. She said it's okay. She's our, uh, head, our design lead,

**endingwithali:** No, now I'm like, what CD like as in like,

**Matty:** Like change directory

**endingwithali:** is that what it stands for?

**Matty:** Okay, yeah [00:23:00] So it was, it was a little bit, it was... And, and, and if I, I'll link to the blog post. You'll see the reason that it's called that is I was, I was helping her set some stuff up, uh, with the thing. But the whole point is she can very safely ship this stuff because we've built guardrails

**endingwithali:** Burger girls, yeah

**Matty:** she can do the thing. She's a brilliant designer. She thinks about what she wants the application to do. She can come up with these great ideas, but she doesn't know the right security reviews. She doesn't know the right te- you know? And but it says, "Hey, you can't do this." You know? It's, and, and it's all back to that thing where I said I have this, this fundamentally internal marketing app that is, I wouldn't say it's bulletproof, but would look at it and you're like, "Really?

For a thing that's basically internal Airtable, you have all..." I'm like, "You damn well better believe we do because I have all that." But that's also why it can be safe. But you, you treat, if you treat the coding agents like you would treat not a hostile [00:24:00] developer, but like again, people like, what we think all the way back to safety science, right?

When, when something goes wrong, you know, the, the, the whole idea of safety too is that what happened in the sys- blameless postmortems. It's not what did Ali do? It's like, what was wrong in the system that let you do that?

**endingwithali:** I'll say right now, we, we can't be having blameless postmortems. We gotta start pointing fingers at engineers who are using agency responsibly

**Matty:** Yes. Well, that's fine. May- maybe this is, maybe this is the, the, the, the, the where we're at now, which is that yes, we can, we can, we can start to have blameful postmortems. Um, maybe we should have John Allspaw in again to talk, and we'll, we'll say, "Okay, now in the age of AI, how do you think about, uh,

**endingwithali:** Yeah, that'd be crazy

**Matty:** But, but that's the th- but the core idea, right, is that the fault is not the pers- it's not bad intent or whatever. It's like, well then, if somebody was able, if you were able to drop the whole production table and, you know, then the problem isn't that you did that, the problem is that you were able to.

**endingwithali:** [00:25:00] Yeah, and the fact that you didn't regulate what your

**Matty:** Like, don't, then how do you make this so that the right way is the only way? You know? And, know, from a security perspective, you used to say when we would, you know, was, was at Chef and we were doing stuff with InSpec, and I was like, "If you care enough about something, you care enough to write the test," right?

So you as a pract- security prac- person say, "This is, these are the rules for getting it out, but I'm gonna give it to you in a codified way, in a way that can be consumed, in a way we can put into a pipeline, in a way that you can build into your, your hooks, so you cannot get your crap onto my server it'll get stopped. But it's stopped by what I define in a way that you can consume." 'Cause that's the other part, 'cause sometimes we sit there and say like, "Oh, well they just did a bunch of crap." It's like, I wrote a whole document about this. No, you can't do that. And even more so with, you know, it's... Yeah. So, so maybe it's the renaissance of things.

But

**endingwithali:** I mean, it, it is, it is definitely a very interesting time [00:26:00] for a lot of that, and we're going to see it become... It was kind of like years ago, it was the idea of shift left, how can you put these responsibilities more on developers? But at the same time, it's like the developers aren't always the ones setting this stuff up, if that makes sense.

**Matty:** Well, well, and is my problem with shift left, and I, uh, it's the same problem because it's, like everything else, it needs to have nuance, but it was very easy to glam onto it. And I would, I say with shift left, shift left doesn't mean you move the work to the people on the left. It means you move the considerations into the left in the process, You know what I mean? And but that we, we lost, we missed that, right? We all just like, "Oh, well, then we make it the developer's problem." And you're like, like you said, 'cause they're not the ones setting it up, but it's how do you enable... Like, if you want that, you want security to be everybody's job, you want people who are building the code to be thinking [00:27:00] about security, then you need to enable that. You need to give them the tools to do that and the guidance to do that and the systems to do that, not just expect that it's just one more thing they have to worry about. Good luck, have fun

**endingwithali:** I know. It just, it reminds me a lot of like a few years ago, uh, before everything that happened a year ago, I was like, "Software supply chain attacks are going to be a huge problem, and we need to start educating developers about software supply chain," and you know, with agents, letting agents download whatever they want, letting agents download whatever packages they want, let-letting agents download whatever, uh, information they want, uh, and, and programs they want, especially for developers who are storing very secure and, uh, very sensitive information on their laptops, where now software supply chain attacks are becoming more and more sophisticated to the point where you just need to like [00:28:00] hit NPM install, and it will start running, uh, bad actors.

And if, um, if an LLM is poisoned to install a bad package, and you just accept that it's installing a bad package, like what are you gonna do? And this is something I predicted three years ago and-- or two years ago, and now everyone's caring about it. A year later, everyone's like, "Oh my God, software supply chain attacks."

I was like, "This is predictable." And a lot of the things that we're seeing happening with AI agents now in regards to agents going rogue, agents swarms, agents, enumerating at fast speeds. We'll say that agents enumerating o- across, uh, domains is not necessarily new. There has always been enumeration tools for, practitioners and for threat actors.

But now... I forget what I was going with this point, [00:29:00] and that's okay

**Matty:** Maybe it's a new kind of attack. It's the, like, lose your train of thought attack

**endingwithali:** Honestly, I've had like three brain cells. I need

**Matty:** Yeah

**endingwithali:** to, start reading books more instead of doom scrolling 'cause I've just been so stressed. So it's bad

**Matty:** read again. So like I, problem was I needed reading glasses

**endingwithali:** Oh. Yeah

**Matty:** the longest time. I wear contacts. Um, well I'm not wearing them now, but there's a... And then so I finally got readers, and it helped, but then, but the problem is most of the time when I wanna read is at night when I'm wearing my glasses, and then I couldn't read properly with my regular glasses, and then I finally got progressives.

And then the, when I first got them and I looked, I was like, "Oh, that's right." That, 'cause I had thought I just didn't like to read anymore

**endingwithali:** Ja

**Matty:** the last how many years. And it was like, oh no, you just cannot read anymore, and that makes reading books unpleasant. And now I was like, "Oh, that's right. I love reading."

So

**endingwithali:** I've been, uh, I recently got my little, [00:30:00] um, my little to-go Kindle that, like, can live on the back of my phone, so I'm just, like, trying to use that more

**Matty:** That seems like it'd be so tiny to read. I

**endingwithali:** It is small, but you can make the text really big. It's more about the portability

**Matty:** Yeah, my favorite thing was when I bumped up the text size on my phone so I could read it better, and then a few days later I was like, "Oh, the stupid thing went back to small text."

**endingwithali:** Oh.

**Matty:** did not. It did not.

**endingwithali:** Oh no

**Matty:** text looked small to me. Uh, so

**endingwithali:** You gotta get the iPhone Fold. I still haven't seen one yet. I would like to, I would like to see one

**Matty:** I'm, I'm waiting to, to, to see one. I'm like, I, I was very close to getting one and I was like, "You know what? We're gonna wait for the next one. It's gonna be

**endingwithali:** Definitely do not.

**Matty:** You

**endingwithali:** Never buy first gen.

**Matty:** yeah. Yeah, it

**endingwithali:** I wish I could remember the point I was starting with. I can't. I feel like I'm kind of brain fried

**Matty:** everything's insecure. Software supply chain attacks are even easier to do because of agents. Well, sort of like [00:31:00] agents, it's like the, it's like the next evolution of just running NPM install, when you'd run it and not know what it did, and now you're like, you're even one level higher than that, where it's, it's picking what to...

At least at this point, you know, I mean, people would just sit there and copy-paste off of Stack Overflow, run NPM install left-pad or whatever, you

**endingwithali:** Before you could say that was good social engineering. Now, if you let your agent run rogue and it, it is pulling from, uh, a poisoned LLM, uh, because, you know, threat actors were able to, infiltrate enough and take over enough mind share of the LLM to, you know, choose a bad package, you're giving... You're-- There's, there's no smart way to double-check how secure a package an agent wants to install is

So I think about that a lot

Yeah. Software supply chain attacks are [00:32:00] going to continue happening. They've, they've been happening. They finally had their, like, moment, but now we can basically, like- There's so many more moving parts and things are moving even faster. And I hate this term, things are accelerating They're accelerating.

But Because things are moving so fast, it's like, "What do we do?" People want developers to move faster. No one wants to help level up engineers. They just want you to know how to do these things. People aren't giving security teams the funding they need to make-- to get things done. People aren't giving...

People are so focused on the next big thing more than ever that it's just not... There's not, there's not time to breathe and think and fix. [00:33:00] But what is a good thing is that a good security practitioner has been thinking about these problems for a while. The things that are occurring are things, like the things that happened in October, October 21st.

There were, uh, CVSS 10, 10.0 CVSS. There was, leaks of, uh, upcoming major CVEs before they were published. There were data breaches happening at the same time. These are not unprecedented times and unprecedented events in a, in a practitioner's life. This overlap is not unprecedented. It is simply a matter of picking and choosing what battles you are going to focus on.

And the only thing that a real, a smart person should do at this time, if they're a secur-security practitioner, is be like, "Hey, management, can we get more money?" 'Cause management will finally care [00:34:00] because security is only a place to lose money until it's too late So

**Matty:** So that, that is, I guess that's probably a good w- good way to, good, good thing to end on, which is, you know, make hay while the sun is shining, right? You know, if you have the... When, when you have an incident, when you have a thing like this happen, this is, like I said, this is the time to be able to get the funding, be able to get the programs, to be able to get the process, right?

You know, 'cause how... And, and I can't remember the, the, the, the cognitive distortion that this is actually called, but it's the whole, like, you do a whole bunch of work, and then someone's like, "Well, you didn't need to do it after all, 'cause look, nothing happened." And you're like, nothing happened because of everything we did."

Y2K, I lived that, right? You know, and everyone's like, "Oh, everybody got all worried about Y2K for nothing." I'm like, "Well, you wanna know why it was nothing?" know, or it's in the, in the Stella report, um, when they talk, they went through a bunch of, you know, postmortems and incident reports, and how [00:35:00] oftentimes management would be like, "Well, why did you take production, why did you disable that when it turns out it was nothing?"

And it was like, it was nothing 'cause we fixed it. so, like you said, you can't get people to care about that stuff when, when it, when shit's not on fire. So if it's gonna have to be, if, if shit's gonna have to be on fire, get, get something out of it. I guess that's the, uh, the

**endingwithali:** are not... Just pay your security teams more, pay your security engineers more. They're probably doing more work than your, than your, uh, than your regular engineers. And also

Give your security teams the budget and vacations. Force them all to go on vacation Buy the massages.

**Matty:** let your security teams burn out

**endingwithali:** Yes, and a lot of people in security do burn out a lot. They burn out a lot, so you really need to make sure that you give your security team time to breathe

**Matty:** And on that note, think we're gonna wrap [00:36:00] it up. That, that's, that's a good thing to go out, go out on. had to be something, something besides just how awful everything is. There's gonna be something good. We're gonna take advantage of it. If you go to arresteddevops.com/theoctoberincident, that'll have all of this episode's show notes, and you can find all the places to subscribe to this podcast at arresteddevops.com/subscribe.

So this was, this was a fabulous, uh, c- I'm, I'm glad to have had you on the show. We're gonna, we're gonna have to do this again. Is there anything you wanna plug? Anything you wanna tell people about? Uh

**endingwithali:** I should say you should follow me online. I'm @EndingWithAllie on everything, including Minecraft. If you wanna find my weekly cybersecurity news show coverage, you can find me over on, uh, youtube.com/@pack5, youtube.com/arc5. It is the boldest tech channel on YouTube, period. And, um, yeah, follow me on Instagram.

I'm trying to hit [00:37:00] 100K

**Matty:** All right, there we go. I'm ready to do that. We'll, we'll drop some links in the show notes to your, to your shows and, uh, this has been Arrested DevOps. And remember, there is always DevOps

**endingwithali:** The banana stand
