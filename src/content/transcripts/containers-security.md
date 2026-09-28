**Ben:** [00:00:00] YAML is readable by humans if your humans are going through a stroke.

**Bridget:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm your host, Bridget Kromhout, @bridgetkromhout on Twitter. Arrested DevOps is brought to you by 10th Magnitude, a company that figures if you're listening to this podcast, you must be pretty cool. 10th Magnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/10thmagnitude. This episode is also brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 70 common infrastructure tools. Such as Chef, Docker, and AWS, so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog. So today I'm joined by a couple of great guests. First, we have friend of the show and returning guest Ben Hughes. So Ben, you last joined us for an episode called Something About Security. I think arresteddevops.com/20, which I looked it up and that was like September 2014. So wow, it's been a while. So what have you been up to since then?

**Ben:** [00:01:31] Probably coming up with similarly vague titles for everything.

**Bridget:** This is so funny. You guys literally sound like this to me. I'm going to try rebooting my computer and rejoining in just a minute. Until then, Ben, would you like to introduce Jesse to everyone? I'll be finding out about that when I get back.

**Ben:** I'd love to. Jesse is well known as the leading authority on running silly things in containers on a Linux desktop, doing entire conference talks from the command line without precanning anything, And generally being the only person who manages to get audio, networking, and everything else working in a bleeding-edge Linux kernel.

**Jesse:** That's totally going to jinx me.

**Ben:** It's the Kaiser Soze of containerized Linux. So what have you been up to, other than not having to reboot your computer to make Hangouts work?

**Jesse:** [00:02:38] I actually did previously to it being live. But yeah, so other than that— I am currently working at Bezosphere, working on security stuff. So that's pretty cool. And then I just got back from Budapest for a conference. So that was legit because there was lots of palinka. Yeah.

**Ben:** What's that?

**Jesse:** It's like Hungarian vodka that is fruity.

**Ben:** Wow. I'm amazed you remember any of the conference. You were at CraftConf. If I recall.

**Jesse:** Yeah.

**Ben:** How was that?

**Jesse:** Totally. It was cool. Bridget was there too, as well as a bunch of other people. And I got to meet people from Travis and the CEO of— the CTO of Etsy, John Allspaw.

**Ben:** John Allspaw was there. Rich Smith and Destiny Montague from Etsy's security team were there, I think, presenting. An amazing turnout of people.

**Jesse:** [00:03:39] Yeah, it was a lot of trains because it was at a—

**Ben:** was it a train station or something?

**Jesse:** Yeah, like a railroad museum. Yeah.

**Bridget:** Yay, you sound normal! You don't sound—

**Jesse:** nice.

**Bridget:** Weird.

**Ben:** It's the year of Mac on the desktop, clearly.

**Bridget:** Or the year of Mac somewhere under my standing desk with an attack kitten sitting on it. I should blame him. It's like he probably did something to it. So did I miss the revelation of what everyone's face is?

**Jesse:** No.

**Ben:** Please explain. I don't know. Well, I don't know. Like maybe nearly a year ago, we just started this thing, whereas if either of us says something on Twitter, one of us will reply with, you're something, something, something. And then the other one will reply with, your face is something, something, something, to prove we're 2 of the most mature people in the industry. The joke hasn't stopped being funny, and it just brings more joy every time it pops up.

**Bridget:** [00:04:40] Which is pretty much exactly what one wants.

**Ben:** Yeah, yeah, there's miles, miles left in this humor. Yeah, if you ask me.

**Bridget:** Nice. Yeah, so, okay, so now that our listeners are completely familiar with who Ben is, who Jesse is, and how my computer apparently worked fine for half an hour during pre— you know, in the green room, and then just decided to freak out because OS X is delightful. And I haven't even gone to El Cap on this machine. Like, I have El Cap on the other machine. It's a little bit sketchy. I'm like, I'll keep this one on Yosemite because at least it mostly works. Um, but yeah, so I thought it would be super awesome to have both of you on here to talk about security, um, because it is like one of those flashpoints that I feel that everybody has an opinion on, yet many, many people know very little about. They just kind of flail about and worry. And so, like, I don't know, like, I guess I'd start with, like, from your point of view, maybe Ben, like, what even is security?

**Ben:** [00:05:43] I mean, at a philosophical level, I guess it kind of stems from, at least in technology, you have the stuff, you don't want other people to get that stuff. It's like a fairly common risk model there. And it kind of stems out of the fact that computers aren't quite the deterministic things we think they are, or at least the humans writing them and constructing them aren't. And a thing I really like to reflect on is the fact that CPU and microcode has bugs in it, and the Rowhammer stuff recently showed you that memory can be corrupted by physics, which can be exploited. So from physics onwards, there's going to be insecurity. And so the whole role of your security people is managing that risk, because you cannot eliminate it unless you can control physics at the subatomic level, which certainly I'm not qualified for. I don't know if the CISSP exam covers subatomic physics. Powers.

**Bridget:** [00:06:54] That would be great!

**Ben:** If you could do that, security wouldn't probably be my first career path. I would probably just become a, like, messiah of the universe.

**Bridget:** Ah, see, I'm thinking evil genius, you know.

**Ben:** Yeah, I mean, I dream big.

**Bridget:** Would you have a lair?

**Ben:** I mean, I never leave this room. So yeah, that's kind of— security is mitigating, dealing with coping with the inherent risks. And I think the thing, as I was— I've been ranting a lot on Twitter recently. I mean, more than usual, which is impressive even for me, that security often loses sight of the fact that they are a business function. That's why you're employed and paid money. And for most companies, the role of that business is not to be the most secure company in the world. It's to probably make a profit. And by being secure, that is a thing that will help, but security isn't the be-all and end-all of business.

**Bridget:** [00:07:58] Yeah, yeah, but, but now you're telling us that, you know, perfect security is impossible, but I hear from Jesse that, like, containers are magically delicious and just secure all the things, right?

**Jesse:** Not all of them.

**Bridget:** Tell us what the role of— because you are a, you know, container security expert, can you, Jessie, shed some light for us on what the role of containerization is in this whole, let's try to mitigate all of the badness in there, in the world?

**Jesse:** It's more like you're better off with containers than without them. As long as you run them correctly, you're better off. If you're running them incorrectly, then you're screwed either way. But yeah, so it's more like if someone then gets into your app that's inside a container, the world they see is a lot different than the world they would see if you were running it on your host. So it's more a contained environment if something bad happens, but it can't like save the world, which would be cool.

**Bridget:** But yeah, and since we are assuming from what Ben says that something bad is bound to happen pretty much all the time, then containerizing all the things is probably one of the steps people could take.

**Jesse:** [00:09:07] Yeah, totally.

**Bridget:** Um, okay, so like Ben, do you containerize all the things? Like, when you're trying to secure stuff, what do you focus on?

**Ben:** Just getting through the day. So I think containers are part of a broader subject of sandboxing. And like, Chrome changed the game somewhat with its browser by sandboxing a whole bunch of stuff. And like making Flash sandbox so that if you corrupt Chrome and exploit it out, then you're in a very— a much smaller environment with fewer targets and fewer ways out. And sure, sandbox escapes exist, but before you just had code execution and now you have a tiny sandbox. And I think containers bring that to the operating system level in a way that has existed before because I remember setting up bind in a chroot and statically compiling everything. I had a lot more free time then.

**Bridget:** [00:10:11] Hey, FreeBSD jails, man. I was totally there.

**Ben:** Yeah, yeah. FreeBSD jails have been totally rocking it for ages, and then Docker saw them and went, oh yeah, we should do one of those, and then whatever. I blame Google. But reducing attack surfaces is one of the main things one can do to secure things and containers do that very well, especially if they— if you drop as many permissions as you can.

**Bridget:** Yeah, and Jesse just wrote a really good blog post about that, and I saw an amazing talk from her at CraftConf in Budapest a couple weeks ago. Can you talk a little bit about what Ben's referring to there, like the whole unprivileged containers thing? Like, what if I want my container to have privileges? What good is an unprivileged container?

**Jesse:** So it's mostly like everybody knows that you can kind of run different users inside containers, but this is more the user that is actually going to start the container itself is going to be unprivileged. So it's, it's nice from the standpoint of like Docker on your host today runs as root, and sure, you add it to the Docker group, but that's also root, and some people don't understand that, which is insane. But like this way you can run containers as like your actual local user with no added capabilities. So at that point you almost have the ability to have different users running different containers and different, like, user LANs. And it's just a whole lot better than running containers as root.

**Bridget:** [00:11:44] Now, would that actually solve the problems I have with Chrome and Hangouts? And apparently, like, Hangouts, you know, eats all my RAM and completely makes my laptop need to reboot. Or, like, is that kind of orthogonal?

**Jesse:** Like, Yeah, so I run, you know, Chrome in a container, and I use cgroups to limit the RAM that it's using and also the CPU. But the problem is, like, if you limit it, it just wants more. So you can also set, like, oomkill disable, which will— if it runs out of memory, it won't start killing things, which is sometimes a good idea and sometimes a bad idea. But at the end of the day, At least recently with Chrome, I had to like not set any limits because I think there's like a really bad memory leak that they just introduced or something.

**Bridget:** It's terrible. Wait, so what you're saying is if Ben and I see you disappear, it's probably the out-of-memory killer that dropped you out of the Hangout?

**Jesse:** Yeah, it was happening like every 2 minutes on a call like on Monday, and I was like, this never happened before. I think that there's a bug.

**Bridget:** [00:12:46] Oh, Chrome people should be paying attention to this. Okay, so like, Ben, when you're talking about, you know, companies trying to assess like what they should be securing or where that right trade-off between secure all the things but no one can actually work versus like secure none of the things, everyone including the hackers can work, like where would you say that sweet spot is for people to make that trade-off?

**Ben:** Around 8. 8 happy kittens? Sure. I mean, whatever metric, whatever measurement you want. It's— yeah, humans are really bad at risk analysis. I was debating with someone about this recently. And it's my favorite analogy on this, because I love analogies, is when someone travels, which I think all 3 of us do far too much. No one ever says safe ride to the airport. They always say safe flight. I've been way more terrified by taxis than I have airline pilots. So it seems like, oh, it's a plane. It's bound to be more dangerous. It's like, mm, you've been on the 101. You've been in your apartment with an attack kitten. So I think it's actually having decent risk assessments.

**Bridget:** [00:14:12] Sorry, AttackKit and attacking everything.

**Ben:** Yeah, no, like, I think Jesse and I had this debate the other day of like, run GL security on things. And I think GL security is one of the coolest projects out there. It's actually hardening the Linux kernel to actually make the— make whole swathes of kernel exploits disappear and just not work. And I would love to roll that out to everything in the world. But a more useful thing to do would be to get people to have longer, better passwords and use a password manager. That would actually make the world more secure. Like, make everyone use Chrome instead of— and disable Flash would actually make the world far more secure than rolling out TLS security to everything. Because the majority of compromises don't involve some amazing new Linux kernel 0-day. They involve like, oh yeah, we found these creds or yeah, they were running a very old version of this and we got in with this.

**Bridget:** [00:15:19] So what you're describing there, Ben, is like basically people like to think about the dramatic, but they need to be thinking about the mundane.

**Ben:** Yeah, like the dramatic kind of sells headlines and has big logos.

**Jesse:** That most recent one was terrible. That did not need a logo, right? The ImageMagick one?

**Ben:** I mean, Ryan's a dear friend of mine. I think that logo was made as a joke, and there's a good discussion on that in the Risky Business podcast this week if you want to hear the justification. Logos and names.

**Bridget:** There's a justification for image tragic.

**Ben:** They put out a blog post going everyone should upgrade their stuff and like 50 people looked at it and then they went, cool, we'll buy a domain and we already have this logo because someone made it as a joke. Let's put it up there and like, oh, suddenly it's at the top of Hacker News. Now people are aware of this and that's sadly actually the important thing, especially considering the barrier to exploitation of that vulnerability. I don't think the word barrier kind of is applicable because it's not really existent. If you can write a sentence, you can probably exploit it. Or even cut and paste.

**Bridget:** [00:16:38] Copying and pasting of exploits from Stack Overflow.

**Ben:** I mean, that's how they got there in the first place. And then so it's kind of a self-perpetuating exploit chain. Now I've lost where I am. So yeah, exploiting like the sky is falling exploits, especially as we're coming up to Black Hat and DEF CON season, those get headlines, those get people going to your talk, they get people buying your product at RSA versus, oh yeah, you should actually do something secure, like roll out a password manager to your entire company suddenly everything's a lot better versus buying this $100,000 appliance that sounds really cool and stops all zero-day ever.

**Bridget:** Magically.

**Ben:** Magically, yeah. With the cybers. But that's, I mean, that's not true. That's not just true of security, that's true of most industries. Like the entire news world is built on that, and like, I blame them. Journalists' fault. That's why the world is so bad.

**Bridget:** [00:17:45] Well, they, yeah, they caused our current hilarity in the US presidential election, right?

**Ben:** Oh, I thought that was a quiz. I didn't realize that was an election.

**Bridget:** It started as a BuzzFeed quiz and it went viral and now it's an election.

**Ben:** That's how voting is gonna end up in like 20 years. It's gonna be BuzzFeed quizzes rather than going to the polls.

**Bridget:** So what do we think of online voting? Like plausible, hilarious? Is Ben doing a spit take?

**Jesse:** The infrastructure behind it would have to be enormous.

**Ben:** There are lots of people pushing to do it in secure ways. Sadly, the people who are getting the government contracts are companies like Diebold, or Diebold, I don't know how to pronounce it, who make all the ATMs that are still relying on technology from the 1800s. And there's been many cases of like fraud by getting it in, of like companies that, you know, will help you in various places. So sadly, the paper system is reasonably trusted, and until that trust model extends to something digital, then, I mean, Let's skip that. Like, when is the US going to get rid of checks as a thing that trusts compared to electronic banking? Start with that and then maybe look to voting later on.

**Bridget:** [00:19:13] Yeah, I was kind of horrified when they sent me a credit card with a chip in it and I said, excellent, can I set the PIN now? And they said, oh no, we're doing chip and signature. And I'm like, so you're doing half of it. Okay.

**Ben:** I've heard a number of reasons for that. One of them is that the banking Kabul didn't want to change 2 things at once because they would much rather consumers keep spending money because that's how their entire revenue stream works. And if they had to change it to the chip and a sign and a PIN, then that would be like, oh, this is new, I don't want this. Where it's like, I just put it in a bit differently and still sign. No additional security features, but you know, it'll come. So that's frustrating when you visit Europe.

**Bridget:** When you were just in Europe too, like all of us were just in Europe, and I don't know about you folks, but like I kept getting, oh, you don't have your PIN? I'm like, no, I signature American, sorry. And they're like, oh, all right then, giving me a piece of paper.

**Ben:** [00:20:14] I enjoy the— I bought things with my US chip and sign card. They hand me the terminal and I just hand it back to them and they look confused. And then they go, oh, I see what's happening here. You sign like, yeah, I've played this game before.

**Bridget:** And see, you have an elegant-sounding accent, so people don't realize that you have silly American cards until you tip your hand, and they're like, oh, that.

**Ben:** Yeah. My bank accounts from all over the world come back to haunt me.

**Bridget:** So Jess, you were just tweeting about how horrifying it is to have Linux embedded in people's cars. And like, you're well known for being— what was it that article recently called you? Linux obsessed. So like, can you give us your perspective on, you know, the securing of the whole internet of unpatched, unpatchable things?

**Jesse:** Yeah, so I actually now kind of agree with what Ben was saying about how it's more levels up that people are hacking, but still just the idea of Linux running in a vehicle of my own is horrifying to me from the sense that, like, I don't know if, like, literally everything needs Linux. I think that that's where I draw the line in needing Linux or something.

**Bridget:** [00:21:31] It's like in your car is possibly not entirely necessary?

**Jesse:** Yeah, and I saw someone tweet, like, something, like, even before I read that article where they were running, like, Docker on their BMW's like interface thing, and I was just like, no, don't do that. Just seemed really scary.

**Bridget:** Maybe this is like a— if you're familiar enough with something, you know where all of the pitfalls are. Like people who just think computers are this black box, black box that mostly works, and when it doesn't work, they turn it off and turn it back on like I just did with my Mac. Um, like they kind of accept all this stuff's probably fine. It's probably fine. And you know enough about where all the corner cases are that you're like, oh.

**Jesse:** It's just like, that carries humans that want to live. It just is a little bit scary. But then I guess at the end of the day, it is nice that it is an open source project. And now all these companies aren't going to write their own firmware and crap that probably would be really even worse.

**Bridget:** [00:22:37] It's a really good point, and I'm trying not to think about like when you're on a plane and like they're rebooting the airplane, and it's like I don't want to think about exactly what embedded XP they're probably running.

**Ben:** The flying Solaris boxes in the sky.

**Bridget:** Are they running Solaris?

**Ben:** Many of them do, yeah.

**Jesse:** Oh good God.

**Bridget:** I know some of them are running like super old CentOS on the flight entertainment systems.

**Ben:** There is only old CentOS.

**Jesse:** There's no news in DOS.

**Bridget:** But you know what I'm talking about, right? Like sometimes the in-flight entertainment system is rebooting and you see all of the, like, you know—

**Ben:** But that's fine that it doesn't— I mean, that has some interface with some of the other parts of the plane, but it's somewhat segregated. Although recently there was the person who spent some time, I think, with the FBI due to messing around on a plane trying to make it fly sideways. Which the InfoSec community had opinions on his chosen style of disclosure.

**Bridget:** [00:23:41] Yeah, that seemed a little ludicrous.

**Jesse:** It sounded really scary.

**Ben:** I mean, maybe they had years of working in these systems and full approval from the airline, or maybe they were just trying to be a jerk on a plane. Who can say? It's not for me to comment.

**Bridget:** Uh-huh. Um, I kind of wonder, like, if we're, if we're back to the, like, we have to kind of look at this from the point of view of, yeah, maybe this is stuff we know enough about to have strong opinions. Maybe this is stuff that not— nobody really knows enough about, say, the intention or the framing of someone else's intentions. Like, Ben, you did a really interesting blog post recently about, like, imposter syndrome and hubris in the security community. What's your TL;DR on that?

**Ben:** Yeah, it was on a long flight, of all things, heading back from Berlin, and someone— I sadly forget who— I think Jessica Barber, Barker— was having a poll on imposter syndrome in security, and it's It's an area of tech that doesn't talk about imposter syndrome or weaknesses very much, because there's a lot of posturing in it and the whole attack-defense paradigm that drives me mad. So I thought it would be nice to start that, throw that post out there. I didn't expect it to have the response it did.

**Bridget:** [00:25:11] We'll link to it in the show notes, yeah. But like, for people who haven't read it yet, what's your general point?

**Ben:** I mean, we should try and be nicer to each other. We should accept that there are people with different skills, do different things, and they're all pretty valid. And it's one of the areas of tech that has the largest skill shortage in fields. I know, like, everyone is like, we need to hire more people, but security is like, there aren't any people to hire, so we can't hire them. But by making it such a— what's the word— like, not nice industry to get into in the first place, and seeing it as like, if you're not popping shells on day one, then you're useless, then you're just going to get no one else coming into that, because it's not a very welcoming scene in that way. And it kind of leads to a very specific type of personality, or a number of specific types of personalities. Making it through and then not everyone coming along for the ride.

**Bridget:** [00:26:13] Now, Jessie, what's your perspective on that? Because obviously you work in container security, so that's a field where you just aren't going to find a ton of, hey, there's 10 container security experts over there that we can hire for this project. You went to Mesosphere and you're doing cool security stuff there, but how did you choose that particular realm?

**Jesse:** Yeah, it was actually a really tough decision to decide if I wanted to do this or not, but mostly Honestly, the main factor for me was I really like the problem of multi-tenancy, real multi-tenancy with containers, kind of solving the impossible problem there that nobody thinks is actually possible. It's intriguing. But yeah, I think that you're not going— I mean, it's like saying I would like a Go developer with experience for the last 10 years. Like nobody has like Docker experience for the past 10 years. Um, it's more like just getting people who, you know, are, are good at what they do and can easily jump into something else.

**Bridget:** [00:27:21] Yeah, and that's from what Ben was describing. If any corner of tech, like if we have an attitude of people have to come in with all the expertise already and we definitely don't have time to onboard anyone, I mean, that kind of sounds like we paint ourselves into a corner of not being able to hire people then.

**Ben:** Yeah, there's also a huge tendency of security people really only wanting people who can break things, which there is a huge demand for, and those people are crazy smart and I can't do what they do. But the trouble with only having breakers is you don't build secure software that way. You just find bugs in all the software you have. And depending on which company you're at, those bugs are used for, we found this bug, or, we now sell this bug to some regime. Yeah, yeah.

**Bridget:** I always think of that as individual actors, but realistically there probably are companies that that's the way they act.

**Ben:** Well, there was a hacking team who were recently in the news for being very, very owned. Turns out that they had some dealings with certain countries that are on UN you can't sell this stuff to those country lists. So, you know, shady people can do shady things. And what's billed as defense is only defense depending on direction. So there's all that. But it's— but just having breaker— people who can break stuff means you don't build secure applications. You just build applications and you find out they're insecure. You need people who can actually do this stuff. And that's why so much security software is so insecure. Like, I'm looking on the OSS Cyclist today, and it's like, oh, more vulnerabilities in Wireshark. I'm like, yeah, of course. It's parsing loads of image— loads of on-the-wire formats. Wireshark is just a CVE-generating machine. And like, if you were to sandbox the bit that does the decoding, then it would not be as insecure, but that is not how this giant C application was written. Cool story.

**Bridget:** [00:29:35] This sounds like exactly the sort of realm that Jesse comes in and containerizes it and makes it—

**Jesse:** I have a container for Wireshark. I do. It would need like a custom seccomp profile though, and then maybe like to containerize pieces of it too.

**Ben:** But yeah. Yeah, never use Wireshark to catch stuff on the wire. Just use tcpdump to catch stuff on the wire and then load it to Wireshark in a VM or a container.

**Jesse:** Nice.

**Ben:** Yeah, spicy. There's nothing good there. No, no. At least now it warns you when you run it as root. That skill set and having— like, I was thinking today, Etsy doesn't really have a huge requirement for someone who's amazingly good at reverse engineering or exploit writing, even though we have those people, but whatever. They do other stuff. What we actually would find— do find far more useful is having people who can talk to developers and go, like, so your code's rad, but like it opens up this thing Or like, you haven't heard of this attack, but this is how this works, and helping them do kind of stuff like that. That's actually a far more useful skill, and it won't get a talk at an amazing— as an amazing conference where you're popping shells on the screen and calcs everywhere, but it's actually more useful to a business, or at least our business, and I think a lot of businesses.

**Jesse:** [00:31:01] Like enabling people to do the right thing versus telling them that they were wrong in the first place. Yeah.

**Ben:** That's pretty much the TL;DR of my post.

**Jesse:** Yeah, that was my favorite part. Yeah.

**Bridget:** Well, and I think like what you see too, Jesse, is like when an organization is trying to build stuff, like focusing on building the stuff, like the stuff you're working on building now, super important, but making sure that the people on the team can build the stuff and like The support structures in place, the, for example, the corp security people like Ben are not going to stop you from doing your job. They're just going to enable you to do your job better. Like, that's actually a pretty big and profound difference from the way I think a lot of, you know, SecOps or whatever usually interacts with the rest of the business.

**Jesse:** Yeah, totally. It's like you, you wrote this as broken. You know, because I can hack it. Sucks.

**Bridget:** [00:32:01] Yeah, or like, you know, your Sophos found this, you can't X, and you're like, I'm just trying to Y. Yeah, totally. So I know that, Ben, you were saying that you were at a conference in Berlin, I think, and was this security related?

**Ben:** I was doing a talk on the beautifully named topic of DevOpsSec. We're doing it in that order now? I don't know, what is it? I have no idea. It's nothing to do with me, I just— it's not my topic. I blame Gareth. Oh, Gareth made you do this talk? No, no, no, but I blame him for that word, as he was the first time I heard it. He did a talk on that, because he's done a talk on everything. So Gareth, Rushgrove is who I will blame at Puppet for probably coming up with that term. If not, whoever came up with it, I'm sorry for not giving you credit. Gareth stole it in a talk. Yeah, I was talking to a group of actually executives predominantly, because that's what the conference was focused on, about— there was lots of the word DevOps being thrown around, but how to actually do that with a hint of security. Um, as, as is traditional, it included Pete Cheslook's wonderful image of the unicorn, the DevOps unicorn, um, emanating rainbows and then security having to, uh, uh, shovel, shovel them out.

**Bridget:** [00:33:38] Yes. Yeah. Yeah. Those stalls full of rainbows after the unicorns are done.

**Ben:** Exactly. Um, Herculean almost. Um, Which is, I mean, DevOps is not a term we readily use at Etsy because all Spool just gets sad when we say it. So we just all try and talk to each other anyway. But trying to get security involved in more things and introducing them early and putting your security people in other teams and other people from teams coming into security so that you're not these sectioned off things. This may sound familiar to some other paradigms involving words such as operations and development. Um, and that just kind of— just the benefits of that. And to stop shouting at people for writing code with bugs in it.

**Bridget:** Nice. So it's kind of— so a lot of the stuff you talked about at DevOpsDays Minneapolis in 2014, but just kind of brought further forward, saying, hey, this is really relevant to you.

**Ben:** [00:34:40] Yeah, and made with Deckset, so it looked way better. Keynote's dead to me. I see. I should be switching to Deckset.

**Bridget:** Deckset, it's where it's at.

**Ben:** It's what all the Berlin hipsters are using now.

**Jesse:** Oh really? Now I have to use it.

**Ben:** You can, but you can only get it from the App Store. So what the App Store is, it's this place where you can just download applications and they just run without having to worry about it. I don't know if you have that on Linux.

**Jesse:** Oh, yeah. I don't think that we have that.

**Bridget:** The worrying is built in. Well, no, they have curlbash. Oh, yeah. That's our app store.

**Ben:** There's a wonderful article on detecting the use of curlbash through timing attacks of the difference in piping it And then the shell will buffer it differently to if you're just curling it, where it will just come out. So you can actually custom write a web server, or web app for you younger people, to detect this and then give different output back depending on if it's being piped into a shell or not, or piped into something or not, which is pretty cool.

**Jesse:** [00:35:51] That's legit.

**Bridget:** I feel like that would be dramatically affected by, like, shitty internet though, right? I mean, Couldn't people have way too many delays because of that?

**Ben:** So tell me where you're installing these enterprise-grade things from curl into sh, which is the majority of places they are. Gigabit Ethernet. Shitty internet connection.

**Bridget:** I don't— I mean, I spend a lot of time in hotels, man. The internet is always so sketchy. Fortunately, I don't curl bash as a general rule, so this is probably fine, but Yeah, threat models and all that. And so, like, for the stuff you were saying, that's kind of the audience is like the executives who need to make these decisions. And Jesse, your talk, tell us a little bit about your topic at CraftConf and like who the audience is for that.

**Jesse:** Yeah, so that was a lot like the blog post I wrote about unprivileged containers, and I think the audience should be like everyone who's running containers, but Actually, it's surprising the number of people who actually really want this that are from the academia physics community, because they have a bunch of servers, and they aren't allowed to run things as root. They've been using either some weird fork of Docker or other tools, like I think Singularity is one of them, which is a lot like apparently what I built, which I had no idea about. So it's really nice from that perspective, but it should be useful to everyone in the future if it's kind of like a sane default. But the only way to get real sandboxing is to have some, like, someone actually writing custom seccomp profiles and AppArmor profiles, and that's probably gonna fall on the hands of your security team. So have fun with that one.

**Bridget:** [00:37:46] She's making your life easier, Ben.

**Ben:** Is that what she's doing?

**Bridget:** So, if people need to have, like, you know, I hear custom AppArmor and I just kind of think, turn off SELinux. I feel like there's a lot of stuff that people hear it and they just want to turn it off to make it go away because it makes their lives harder. Like, is that— Is that something that this can help with at all, or does it make it worse?

**Jesse:** I think that tooling around these things could make it better. Like, not using the actual interfaces that they're built with because they're all terrible would be a great way to improve the experience. Like, I made, like, as a proof of concept, one for AppArmor that, like, uses this, like, hipster TOML format, which I actually think should really be JSON, because do we really need another config format?

**Bridget:** No. But maybe it has really exciting—

**Ben:** [00:38:47] Sorry, go ahead, Ben. JSON isn't a config format. It's a marshalling language for JavaScript. OK, OK.

**Jesse:** Well, then what's a config format?

**Ben:** How do you put comments in it? Yeah, you can't. Shit, that's so bad.

**Bridget:** So it's not a config format. Oh, we're getting Ben on his JSON feels. How do you feel about YAML, Ben?

**Ben:** Oh my god, I hate YAML. YAML is readable by humans if your humans are going through a stroke and/or have the thing in Vim turned on where it shows you when there are spaces. The idea that any human could ever write YAML is laughable.

**Bridget:** Yeah, the significant whitespace thing is always like, why is there significant whitespace?

**Jesse:** It's acceptable in Python.

**Ben:** It's not acceptable in a config format.

**Bridget:** Nice. But anyway, I digress.

**Jesse:** Just better interfaces in general. We can bike shed about the Hugging Face format type later. Maybe it should just support them all. Would be great. Yeah. Nice.

**Bridget:** [00:39:55] So what do we think is actually going to happen? So all right, we've got ideas about what people should do in terms of interoperating better in the industry. What people should do in terms of having software that actually works and is secure. Now, let's be a little bit pessimistic and maybe a little bit realistic. Put on your magic 8-ball says, what's going to happen in the next 12 to 18 months in security? Jessie first, then Ben. Jeez, OK.

**Jesse:** So yeah, I would say, by default, your containers will continually get more secure, as they have in the past. But also, with the help of, like, enablers, like we were saying, like, people who can enable people to write better, more secure code in a way that's not, like, degrading to them as an individual, maybe we can make more fun tools surrounding everything and make it a better situation for everyone to deal with, because nobody likes writing some sort of SELinux policy. I mean, I turn that shit off. So, yeah. Hopefully a bright future.

**Bridget:** [00:41:09] Nice. What do you think, Ben?

**Ben:** I'm going to go real wildcard. I'm going to dream big. I predict in the next 12 to 18 months, there will be another OpenSSL vulnerability.

**Bridget:** Oh, the classic tweet by this point. OpenSSL, the gift that keeps on giving.

**Ben:** Yeah, it's— I've noticed. The sell du jour. I think, well, in the next few months, there's almost certainly going to be more ImageMagick bugs as people have gone, oh yeah, that code's awful. Like, image parsing is just a minefield. In fact, all config parsing is because everyone does it in C and they blindly trust the file formats, which is why libtiff, libjpeg, lib— Yeah, libgif have all been just a minefield of fun and will continue to be. And ImageMagick is like not super great on top of that. libgd had one recently. GraphicsMagick had a DDoS in it recently. Just, it's just a nightmare. And as the web now uses images, which I don't fully support, I think we should go back to 1990s internet where images were optional and it just said under construction. Those will keep happening. So let's get good at patching those. Sadly, I think the container security story is great in the kernel but is terrible on the actual things in the container because, like, everyone— I deployed all my containers. I'm now done. I never have to go and visit them again. And, like, cool, now you have all these hundreds of things running out of date code as opposed to just one beautiful monolith running out of date code. So, and I know Docker Hub and the recently renamed project is doing stuff on that, but that is still somewhat in no man's land in terms of updates.

**Bridget:** [00:43:03] Well, isn't some of that too that a lot of people build containers, but they don't necessarily build a container building factory? You need to, if you're going to build— and I know I'm conflating the term container and image here. Bear with me. If you're going to create images, you need to be able to create them repeatably, and you need to be able to roll all of your images at a moment's notice. If you can't do either of those things, you probably have no business using containers in production.

**Ben:** But I think the lowering the bar to certain things, which is what everyone was sold on with containers, of like, your dev can just do this in their lunchtime on their machine and then ship it to production, it is fine. That whole speed and agility there is lost as soon as you start trying to make this into a repeatable, testable build system that can be upgraded. You're like, oh, so this actually has to go through some kind of lifecycle. Oh, suddenly I'm not, like, crushing code and just pushing it to production in 20 minutes.

**Bridget:** I mean, people can still YOLO some shit out. They just need to actually run it through CI where it gets its tests and gets, like— Pushes it. Yeah, yeah. You know, gets the image built and pushed with the tags that you intend so that you can roll back and forward. Rolling forward is great, but having the ability to roll back is kind of nice.

**Ben:** [00:44:19] Great. Now I have, if I could turn back time, in my head.

**Bridget:** If you could find a way, Ben.

**Ben:** Yeah. So I don't know. I hope that story gets better for everyone using the containers. Cool. What else is going to happen in the next year? Hopefully AV will die.

**Bridget:** That would be nice. AV like antivirus and not audiovisual? Yeah. Because I kind of like audiovisual at conferences. It makes them interesting. You can see the stuff.

**Ben:** Well, that's the joy of having a Mac laptop. You can just plug stuff in and it works.

**Jesse:** Oh, I miss those days sometimes. You know, not having to spend like half my morning figuring out what broke from the night before. It's so sad.

**Bridget:** Are you running like the kernel of the day club, or—

**Jesse:** I like upgrade everything on cron jobs like all the time. And I actually— so even when I worked at Docker, I used to run like Docker Master, and then like I was still running it for a long time. And then one day like my Chrome just broke, and I was like, oh my god, I'm gonna have to switch to stable. And then like Another day after that, I spent time debugging it so that I could switch back to master. But I feel like one of these days I'm actually going to have to, and it's going to be really sad.

**Ben:** [00:45:40] But also, you can't look up the bugs because you have no web browser.

**Jesse:** Yeah, no, it's like the worst thing. If I can't start Chrome, then like my entire day has just gone to shit because what am I supposed to do?

**Bridget:** W3M. Have you considered having a backup computer that you only use to look up things to fix your real computer?

**Jesse:** Yeah, so I actually do that. With Linux, you actually kind of have to have a backup computer, because the second your kernel panics and you have no idea what the fuck caused it, all those commands for debugging it, they're nowhere. You need to either look it up on your phone or on another computer. It's terrible. Oh my god.

**Ben:** OS X isn't free from this. There was a period where, due to some some internal things, like after an upgrade to 10.10, machines would just black screen kernel panic on boot. And then, so having to boot OS X into single user mode and then try and discover why it's kernel panicking is quite an endeavor and took me back to my Linux days.

**Bridget:** [00:46:50] Now, is that the sort of thing at like you know, a corp IT sort of installation that you actually try to debug, or are you like, everything's in Dropbox, wipe, reinstall? Me, or— I'm asking you, because—

**Ben:** Oh, yeah, no, no, I spent some time debugging this, because, I mean, like, backup drives, they're a thing. I have like 3 SSDs on my desk. Yeah, it needed to be debugged so that we could get past that. Yeah. Yeah.

**Bridget:** So, okay, so we're just about out of time because these things always run out of time.

**Jesse:** I don't know how that happens.

**Bridget:** But I guess I'd just kind of like to— we've seen your vision for the future. What do you actually want? Like, what are your wishes for security? If this container security world would listen to you, Ben first, then Jess. Like, what should they be doing?

**Ben:** [00:47:55] I don't know. I don't know much about container security. The security world in general, then. Okay. It would be nicer if we stopped blaming everyone for everything. An example I enjoy, because I can only express things through examples, is you tell people to not click on links in emails. Like, cool. Put your entire recruiting team out of a job whose sole role it is is to click on PDFs that come over the internet. That is literally what you employ them for, and you're telling them you shouldn't click on links on the internet. Like, which is it? So the tools have failed. So make better tools. Stop blaming users. Work with people. Hug it out. Get more kittens. Rainbows everywhere. It's just beautiful.

**Bridget:** That's what I want. I like this vision, though I gotta say, my hands have been awfully lacerated from an attack kitten. So kittens are adorable, but also sort of dangerous on their own.

**Jesse:** [00:48:55] All right, so Jesse, what do you wish? I definitely agree with the whole being nice to each other thing. But also, I want a desktop OS with all containers, kind of like Subgraph. And I think that that would be really dope with a minimal base. And for people to stop making gigantic images because they take so long to download and it just sucks. And I hate looking at the Dockerfiles because they make me sad. And I try to fix them by sending PRs, but it doesn't scale well.

**Bridget:** You're saying you don't scale.

**Ben:** It's not just scale.

**Bridget:** And it's— yes, if it doesn't operate at just scale, I mean, come on.

**Ben:** It's like a stack of failing Linux laptops with Chrome eating all their memory.

**Jesse:** Oh yeah, this is like the end of 1984.

**Ben:** People should stop using curl in Dockerfiles. Oh my god. And should stop using HTTP in Dockerfiles.

**Bridget:** [00:49:59] And maybe stop apt-getting random versions of things they haven't actually pinned the version of. And yeah.

**Ben:** You know, things like that. Totally. Find an ops person. Work it out. It's all good.

**Bridget:** Yeah, exactly. Operability, totally a thing. Okay, so let's, uh, let's just tell people quick about a little bit of community and event stuff. The short version of this is, um, because we are almost out of time, the short version of this is there's a lot of DevOps Days coming up. The CFP is still open for a bunch of them. Go to devopsdays.org. If you would like to speak at one. Um, there are usually session talks and 5-minute Ignite talks, which are pretty fun. So we have, um, I think, uh, open CFPs for DevOps Days Amsterdam and Chicago, for example, until May 30th. So like, and also, uh, O'Reilly has a security conference starting up relevant to this topic, and it's gonna be running in New York this fall. So that CFP is open till May 16th. This podcast may be edited and published before then. Um, check out the t-shirts and mugs at store.arresteddevops.com if you like. Uh, t-shirts that are fitted that I would actually wear, I have not gotten the sample yet, but sometime soon that will be delivered. I will check it out and then we will have fitted shirts. But until then, just regular. Um, and by regular I mean the ones that, you know, go straight up and down. Um, and, uh, checkouts. I think our guests have some you know, interesting or whatever stuff that they've checked out lately that they want to tell us about.

**Ben:** [00:51:30] Ben? I'm, as always, reliving the '90s and giving a shout out to Phrack 69, which is the classic hackazine. Bjorn has a cool article on Ruby on Rails and this stuff on Adobe and OS X rootkits, all that good stuff. And the— if you've heard of the DBIR from Verizon, the I have not. The report is also out, which is— so the DBIR is Verizon's data breach something or other report, which has been very good over its life. It's been— this year's is a little contentious, but there's still some good stuff in there. And there's this other report that's pretty great too.

**Bridget:** Okay, cool. Zines, they have those on the internet now? Because I could have sworn they used to be photocopied.

**Ben:** I mean, they did, and I'm sure you can still get them. I mean, I used to live in Portland. Photocopied zines are still a thing. There's a whole store there for them.

**Bridget:** [00:52:34] Are they like hand-lettered? The whole thing?

**Ben:** Probably. Oh my gosh, nice.

**Bridget:** Okay, Jesse, do you have anything that you would like people to make sure they check out? We'll get links later and put them in the show notes, but Anything you've like checked out lately that you liked?

**Jesse:** I would say the 102-page War and Peace novel on Linux containers and Subgraph, the container OS.

**Bridget:** That's super cool. Nice. All right, we'll get links to those and put them in the show notes. The main thing I want to link people to is I've been having a lot of fun with Terraform lately. I gotta say, like you type Terraform destroy and it's like, are you sure? We will only accept a typed out yes. We're going to destroy all of your infrastructure and I'm like, This is amazing. It's like I've been having a lot of fun with that lately. Um, and, uh, Charity Majors wrote some really good posts about, um, Terraform and all of her learnings of like, you know, oh, look at that, if you have everything in the same state file, your prod stuff might have suffered the effects of anything you do to staging, stuff like that. So there was really good posts, I'll link to them in the show notes, of like everything she learned dealing with Terraform at some quantity of scale. So yeah, um, yeah, so just to wrap up, uh, we have a newsletter, arresteddevops.com/bananastand. Stratton wrote some text that says it's the best way to know about upcoming podcast episodes, possibly true, and cool news with DevOps, also possibly true. But I should probably put some stuff in there then, so I apologize to newsletter readers because I probably have not been doing my share there. Uh, thanks to our sponsors, be sure to visit them at arresteddevops.com/10thmagnitude, arresteddevops.com/datadog. And thank you, Ben and Jesse, for joining us. This was so fun. And by us, I mean me. I'm speaking in the, like, royal we here because we pulled this together last minute and, you know, Matt and Trevor were not able to make it, but I'm glad you were. Thank you.

**Ben:** [00:54:25] This has been really rad. Yeah, this was also— you're 2 of my favorite people. This is amazing. It's super fun.

**Bridget:** It's a great thing about podcasting, right? It's like you hang out with your friends, then you videotape it, and then other people are like I learned something. Did you know, by the way, that we are apparently some people's work homework? Stratton told me this during the episode with Kyle Kingsbury where we were talking about BDSM, and then he was like, this will be very entertaining for the people who have to listen to this for work. And I was like, so what now? So, um, but anyway, yeah, so we, the podcast we, probably Jesse and Ben too, would appreciate it if you'd visit arresteddevops.com/itunes and leave us a review in the iTunes store. And we'd love to know what you thought about this episode. And when we put it up on the website, you can click on it because I can't say for sure what the URL is actually going to be. And be sure to check us out at arresteddevops.com. Why do we say that again? I feel like we say arresteddevops.com many, many times. Um, or @ArrestedDevOps on Twitter. And we're always happy to get your ideas, input, you know, feedback, things that you want on the show. Um, give us ideas for future episodes. So shows@arresteddevops.com for that. So I'm Bridget at Bridget Krumhaupt. We're Arrested DevOps, and remember, there's always DevOps in the banana stand.
