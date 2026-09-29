**Nicole:** [00:00:00] But you know what? Teams deliver software, individuals don't. Teams perform, individuals don't. Because there's nothing worse than the individual rock star asshole.

**Bridget:** All right. So, without further ado, and I'm pretty sure Schaefer is live tweeting the podcast right now. At least I hope he's not catching Pokémon. I told him that it would be okay.

**Andrew:** I have 2 phones. One is the Pokémon phone.

**Charity:** This is going to be trouble.

**Bridget:** I can already tell. So let's introduce our panelists. We're gonna have people introduce themselves. We're gonna start on the other end so that Schaefer has time to catch that Pokémon. There's a lure here apparently somewhere, or a Poké Shop.

**Andrew:** I'm not catching Pokémon right now.

**Bridget:** So let's, let's have our panelists introduce themselves. I definitely want the Pokémon to be after the panel. Introduce yourself, please.

**James:** Hi, I'm James. I'm from Pivotal, where I'm responsible for our products.

**Gabe:** Excellent.

**Bridget:** Thanks, James.

**Charity:** [00:01:01] Succinct, to the point.

**Nicole:** Does my mic work?

**Charity:** Does my mic—

**Bridget:** oh, it does.

**Charity:** Charity Majors. I work at Honeycomb.

**Bridget:** And by work at, you mean founded.

**Kevin:** Yes.

**Charity:** Previously known as Hound until about 2 or 3 weeks ago. We just did a renaming.

**Bridget:** And returning guest on the podcast. Yes.

**Andrew:** We need more hexagons.

**Bridget:** Nice.

**Charity:** All right.

**Nicole:** I'm Nicole Forsgren. I'm at Chef and a co-founder at DevOps Research and Assessment.

**Gabe:** Nice.

**Nicole:** Oh boy.

**Andrew:** I'm Andrew, and I'm here trying to contribute something to the world before I die.

**Bridget:** That is a good way to look at it. Thank you, Andrew.

**Andrew:** Trying to cause more problems than I solve.

**James:** I thought it was solving more problems than you cause.

**Andrew:** Well, Look at the results.

**Bridget:** So, it said that at one point in his Twitter bio, trying to solve or solving more problems than he causes.

**Charity:** [00:02:05] How many of us knew we were going to be doing this before a half hour ago? Okay.

**Bridget:** So, I will admit that, you know how, like, communication is key and it's a really important part of DevOps? I will totally admit that I sort of forgot to mention to a bunch of people that I wanted to put them on a podcast. I mean, I told the AV crew, so, like, that's the most important part. So, it's been a little funny. Is this livestreamed? We're not live streaming this, I don't think.

**Nicole:** It'll be fine.

**Andrew:** Because I would add more people, more watchers.

**Bridget:** No, I don't think we're live streaming it, but I guess we could be surprised. I don't know.

**Andrew:** Last year, I was promised sushi.

**James:** That's all I know.

**Bridget:** Last year, we did a live taping for Arrested DevOps at DevOps Days Minneapolis, and we called it Eating Sushi with Andrew Clay Shafer, which was totally a lie. There was no sushi.

**Andrew:** The sushi is a lie.

**Bridget:** Let's find out about the live streaming. Can we get a thumbs up or a thumbs down?

**James:** You are in fact live streaming.

**Bridget:** Live streaming, that's fantastic.

**Andrew:** What's the URL?

**James:** [00:03:05] That's a really good overheard. You are in fact live streaming.

**Andrew:** Can I get a URL and I'll tweet that?

**Bridget:** Is it the same live stream URL that you tweeted out yesterday?

**Nicole:** Yes, it is the— How do I not have my earbuds by its ear?

**Andrew:** You can use this one.

**Bridget:** Do you need to get your phone? That's totally fine. This is like an informal podcast. Just go get your phone.

**Andrew:** Operators are standing by.

**Bridget:** So, here's the thing about Arrested DevOps. We usually do this in a Google Hangout. So, all of our technical difficulties revolve around Google Hangouts because, in case you haven't noticed, Google's like not a product company. Sorry, Google, but they're not. Like, the Hangouts UI/UX is terrifying at best. But I feel like we have all of these software is eating the world clichés, and we have all this discussion of Like how, if software is actually eating the world, is everyone a software company? And I feel like Waters got on a plane to come to Minnesota where it's like 100 degrees in the shade right now to talk to a lot of companies people wouldn't think of as software companies. Can you give us an idea, not necessarily of company names, but can you give us an idea of the kind of companies out there that are starting to realize software, it matters?

**James:** [00:04:19] You know, one of them is Merrill, which is, I think I feel comfortable talking about because they're a sponsor here today, in fact.

**Bridget:** I was so happy.

**James:** The conversation I had there was like, hey, our executives are all betting on this new software developing. It's going to be a global SaaS brand for us.

**Bridget:** Software, it's a hit.

**James:** I'll let them talk about the details of it, but basically it was a very empowered set of folks that were going to go build these new set of apps that were going to really transform their business, and they were betting on those to make a global impact. I think it's almost like the truism was almost too true, like it was happening in front of you, right? If that makes sense.

**Bridget:** Yeah, I mean, I think that Charity has been on the forefront of this for quite a while since she's been doing that, I don't know, mobile backend as a service thing or whatever. What kind of companies used stuff that, like, that you've developed?

**Charity:** Dot star, star dot star. It's crazy. I mean, uh, this is, uh, why I love working on platforms so much, is that you have no idea who's going to show up. It's like, oh, uh, oh, hi Disney! Didn't see that coming. They didn't talk to us, they just signed up and created an account, you know, because somebody wanted to like experiment. And, uh, you know, if they were going to like build a major component of their brand around it, I assume they would talk to us first. Uh, but Or just, you know, so you have this incredible spectrum of developers working out of their mom's garage when they're 13, literally, quite literally, 13-year-olds building software on the same platforms as corporate America.

**Bridget:** [00:06:05] Yeah. This is like the great equalizer, the great democratization of what's going on with software is that people don't have to have a giant budget and conduct an RFP and procure infrastructure anymore.

**Charity:** I think what's so exciting about what's happening in software over the last, really specifically the last 3 years, is the platformization, is that a word? Democratization, whatever, of making the powerful tools that the world's leading software vendors, your Microsofts, your Googles, who have had these massive R&D budgets and their competitive competitive edge has been having the special software sauce that nobody else has access to, and like suddenly everyone does, or like it's getting to that point.

**Andrew:** I think there's this reinforcing, we'll call it a spiral, that is, it started with this open source movement, right? Everything that you need to build Facebook, Google, Amazon, those things were available as primitives, right? From open source, you could get the Linux kernel, you could go get the C compilers, you could do all this stuff. And that's evolved from the '90s till now, where you can see what open source is coming out of places like Netflix. You can see what— I mean, TensorFlow from Google, like the things that are available just going up and up and up the stack to where you don't have to go and like figure out how to use a C compiler anymore. You can just start thinking about your domain and like instantly have the same kind of neural networks that are available in, you know, what would have been far heavily invested R&D budgets.

**James:** [00:07:49] I mean, I think a way of saying that is abstraction levels going up democratize technologies.

**Andrew:** The democracy is going up the stack.

**James:** It's like when you can suddenly touch your phone, a toddler can use it. And that's an abstraction going up from like the old, you know, F10 kind of interface that at that level of abstraction, you don't have toddlers using computers.

**Bridget:** We're here at DevOps Days Minneapolis. I was just at DevOps Days Silicon Valley though. They held it in the Computer History Museum. I've been there before, but this time I finally went downstairs and took all the tours and used a punch card machine, which I never used in my career. I hadn't had to use one, and that was a lot of labor. Just thinking about how in our short lifetimes, this has changed so much. That makes me— I'm seeing all of these lights in Nicole's eyes, and that makes me think, In your research, what would you say are some of these factors that are changing the way that businesses large and small are trying to make these decisions because of all the changes that you've seen too?

**Nicole:** Oh wow, so the first lights went on because like my first job was as an AS/400 programmer, so which wasn't punch card, I know, right? I'm seeing this in the air. RPG, right? Yeah, it was RPG and CL, right? Which, which wasn't totally like punch cards, but you still had to line up the commands as if you were on a punch card. It's like, holla, right? But how it changes the way, like, organizations are making decisions and how they're enabling people now, honestly, you know, it kind of depends on the team and the organization and where you are. For companies that are really killing it and doing it the right way, you know, we're seeing that democratization, right? We're seeing We're seeing things go higher up the stack. We're seeing them reach out to customers earlier. We're seeing them speed things along because the faster you can get things to market, the faster you can get feedback from customers, the faster you can decrease complexity and get out an MVP and get feedback and build something out, the better you are. But if you insist on spending you know, a year for this RFP and then building something out in this like ridiculously complex—

**Andrew:** [00:10:03] It's so safe. It works so well.

**Nicole:** It's so— it'll be great. It'll be fine, right? Let's, let's wait until it's perfect and let's wait a year.

**Andrew:** Let's plan to plan. Exactly.

**Bridget:** Charity was saying in her keynote earlier today that if you're trying to make the perfect whatever it is, you're going to fail.

**Charity:** Yeah.

**Nicole:** Yeah.

**Charity:** This is like why every time somebody says hashtag no ops or whatever, I'm like, Okay, tales of this time. I just want to start singing the song, you know. It's like, okay, yes, it is not that operations is vanishing or going away or becoming less necessary. Like, also says good operations is a competitive advantage. What is shifting is definition.

**Andrew:** Yeah, what is shifting is what that work entails on a moment-to-moment basis and where it appears.

**Charity:** It used to be, you know, greasing the wheels and the, like, you know, whatever is, you know. And then it was like SSHing into hosts and typing bash commands. And now, but I feel like—

**Bridget:** How many times did you cut your hands on those rack screws? It's like square holes, rump.

**Charity:** [00:11:05] Seriously, I am so, on a personal note, so glad that I never have to go to a data center again in my life.

**Nicole:** Reprofit.

**Charity:** Getting paid, having to get a cab to go to the data center to push a power button.

**Bridget:** Never again. After you pay a cover charge at a store. Oh my God.

**Nicole:** But oh, you blinky light test though all day long. Yes. Yes. No, no more data centers.

**Bridget:** And they shouldn't matter, right? Because this is, this is not your competitive advantage is pushing the button faster.

**Charity:** Exactly. But I think that like the devaluation, I'm ranting a bit about this, but I think it, but I think it ties in.

**Bridget:** I asked Charity Majors to be on a podcast. I'm pretty sure ranting is part of the package.

**Gabe:** Thank you.

**Andrew:** Works as designed.

**Charity:** You get me. The devaluation of operations, like, if you're just categorically being like, we do no ops, we don't do it, we don't value it. Okay. You're kind of not going to attract people who do these things well. And the shadow self of DevOps, like we were talking about in Budapest, the shadow self of DevOps is this is not just for operations people. We've been yelling at ops people for, like, almost a decade. Write better code, write more tests, be better software engineers, which is great. I think that most people in our industry have heard that, which is good. But we haven't been telling developers what they need to get better at. The operation skills that make them more powerful engineers, that make them able to think about it at this higher abstraction level and actually, you know, own, they have the tools and the power now to build, ship, and maintain products, but they can't do that if they aren't thinking about it in a holistic way.

**Bridget:** [00:12:50] Operability.

**Kevin:** Yes.

**Andrew:** So one of the things that I, I mean, I have like all these internal dialogues all the time, but like I feel like there's a tension in my own conversations between the labeling of people. Like these are ops people and these are dev people. Like, I don't really like that.

**Bridget:** But at the same time, we had an Ignite last night from Dana saying, I'm a data scientist. I taught myself to do the deploys because I didn't want to be blocked on other people.

**Nicole:** Absolutely.

**Bridget:** Empowerment.

**Gabe:** Yeah.

**Andrew:** So there— but there's also this, like, basic understanding of responsibilities, and not all humans can do all things. And especially as you start to scale organizations, the idea that every single person should have all the full context and all the full skill set to do everything is an untenable problem. So being able to figure out ways to build the actual organization so that you're not necessarily thinking about these are ops people and these are dev people, but you're thinking about the capabilities holistically. These are things we want to have happen. Obviously, we want to develop new features. We also want this thing to be running, right? Because there's a transition that happens in the middle between the world that was shipping software on CDs to the world that is all based on services, where the software doesn't exist if the services are down. And that—

**Gabe:** [00:14:07] go ahead.

**Bridget:** Please finish, but I want to jump right in there.

**Gabe:** Yes.

**Andrew:** I'm just building this narrative in my own dialogue around how to build these systems, but the systems are actually a reflection of the organization. So you often can't apply— so what people are actually saying when they say NoOps is they're reacting to a world that was born when the sysadmins were responsible for the mail.

**Charity:** Client systems is literally everything.

**Andrew:** Yeah.

**Charity:** Like anybody who's giving you advice that without setting the context is like selling you bullshit.

**Bridget:** Which is exactly— I'm thinking exactly—

**Nicole:** And they're charging you too much.

**James:** I often run into, you know, just the last couple weeks of my life talking to a lot of large enterprises, and I sit down, they're like, hey, what's differentiated about your technology? And I'm like, hold on, what problem are you trying to solve?

**Nicole:** Right back to Charity's keynote, right?

**James:** Let me just tell you about the problems we try to solve. Let's see if we have problem affinity before we talk about product differentiation. And, you know, what I say is like, hey, how long do your deploys take today? You know, I went to one bank, they're like, 8 weeks and it costs us 10% of our staff.

**Andrew:** [00:15:10] It's true.

**James:** It's not a laugh track.

**Kevin:** That's true.

**James:** And by the way, it's not like a canned ad.

**Nicole:** That's pretty solid. That is solidly in like mid to C-tier performers.

**James:** That was a year after trying to build their own platform. Like they were a year into having tried to undertake a revolution. Of themselves and stitch something together.

**Nicole:** And that's not the worst we see in the industry, not by a long shot.

**Bridget:** And this is making me think of Schaefer did Pivotal's, you know, vendor spot yesterday, and he threw up a slide that said, good job configuring servers last year, said no CEO ever. Right.

**James:** Which is, which is actually why when you ask that question, it's much more abstracted to what someone in a management layer cares about, which is, hey, how fast could I actually do something? And less around fashion-driven choices of components. You know, we have so much marketing in kind of our environment. It's sort of like you get your sugar water and then you add celebrity or startup to it, and it's like a war of sugar water in a sense. It's like, hey, these are different ways of configuring Linux containers. Okay, well, this one's sponsored by Michael Jackson.

**Bridget:** [00:16:17] What does the NASCAR logo look like on that container?

**James:** Yeah, I know. So we try to get out of that fray into the, like, well, what do you want to get done? And then we'll decide if there's a conversation.

**Charity:** That's a really good way of putting it. And it's also, like, there are some problems that you can fix and make visible, and there are other problems that aren't problems, they're just inherent traits. And infrastructure, an inherent characteristic of infrastructure done well is you don't notice it.

**Nicole:** Absolutely.

**Charity:** And you start taking it for granted. And then you're like, oh, well, of course it works.

**Andrew:** Like roads.

**Charity:** And like the highway system. Like, oh, well, it just works, right?

**Bridget:** It does just work unless you're Minneapolis in, was it 2007? I had a friend text me.

**Andrew:** There is a construction project at your airport, I noticed.

**Bridget:** Well, no, I was telling you about how I had a friend text me and say like, hey, are you home from work yet? And I was like, yeah. And she's like, you should turn on the news. It turns out the freeway over the river had fallen on the bike path that I had just ridden my bike under half an hour before. And I was like, that's not awesome.

**Nicole:** [00:17:25] Why did the freeway fall on the bike path and in the river?

**Bridget:** Because we didn't maintain it.

**James:** No office.

**Charity:** It's a thing that everybody bears responsibility for, right?

**Nicole:** And it contributes to the devaluing of the work.

**Charity:** Absolutely.

**Nicole:** Because when the work is done correctly, the work disappears.

**Charity:** And when you notice it, it's because something went wrong. We were like, oh, they broke something, you know? So, it's like at every tier, there's responsibility on individual engineers to, like, you know, make sure that they broadcast what they're doing, on managers to, like, be a translation layer, on, you know, executives to not forget, you know, to ask questions and to make sure that, you know, the nose is pointing in the right direction.

**Nicole:** And I'm just gonna, like, throw this out there.

**Charity:** Throw it.

**Nicole:** There is systemic differences in salaries also among development and ops.

**Charity:** Oh, let's talk about that.

**Nicole:** You say the word devaluation, literal devaluation.

**Charity:** I have seen—

**Nicole:** ask for raises, ask for a raise.

**Charity:** Well, you know, Google had this problem where they couldn't get any SREs for a long time.

**Nicole:** [00:18:27] I wonder why.

**Charity:** And they're like, huh, why can't we? You know, we have all these amazing engineers with, you know, their skill sets are so suit— and they're like, oh, someone had the brilliant idea. Let's pay SREs more than we pay software engineers. Suddenly they had no more problem retaining SREs.

**Gabe:** Yep.

**Andrew:** I think this is actually bringing up an interesting point because when you see some of the more leading-edge, whatever, like DevOps, cloud-native companies, they don't have this disparity as much.

**Charity:** Exactly.

**Andrew:** So, when you see, like, the Silicon Valley way, it's a competitive advantage. It's a differentiator.

**Nicole:** Absolutely. And they treat them as such. They don't treat them as Someone whose work has no value.

**Charity:** I give talks all the time about like how to hire great ops teams and like one of the top 3 things is, so how do you pay them? Do you value it?

**James:** I'd like to throw something out in here though. The problem is if you are doing a lot of very manual things, it forces the business to try to compress the unit cost of people. Whereas if you're doing things that are more platform and automated like—

**Nicole:** [00:19:31] Can I help Can I help rephrase that?

**Kevin:** Yeah.

**Nicole:** Are you adding value to the work or are you not adding value to the work? If you're doing everything in a very, very manual way and not contributing value, if you're doing things in an automated way, it is then consistent, it is repeatable, it is auditable. You are adding value to the process. If you're doing something in a very manual way, it is not repeatable, it is not inspectable, it is not auditable.

**Andrew:** But there's a decision that gets made in organizations that frames IT as a cost center, and that forces a bunch of these other bad behaviors where you're actually under-resourced no matter what to get all the bucket of work done to keep up with all the fire.

**James:** Yeah, and developers too, though. Let's be honest, like the offshoring phenomenon was an attempt to lower unit cost of developer in the same way that paying less for ops.

**Andrew:** That worked out well. Yep.

**Bridget:** But let me—

**James:** a quick anecdote. Is that, you know, with the platform approach, sometimes we have a few, you know, I call them like the PCF 2K or 4K, which are like an operator or 2 that are running 2,000, 4,000 containers that often have hundreds of apps on them. And then I go out of my way to tell their bosses how valuable they are. You know, I was at drinks with one and his boss, the CTO, at dinner. I was like, wow, he's running, you know, 3,000 apps with 2 people a quarter of his time. I would, you know, I bet, you know, some other company would hire him pretty fast with that ratio. And his boss's defense, he's like, oh, we're making sure we're taking care of David. So I do think there is some level of increasing the abstraction can help the operator become really highly valued because they have leverage.

**Bridget:** [00:21:10] And I know that we don't have your time for this entire hour, Waters, because as it turns out, you do need to go talk to more of these C-suite types. You want to give us your best advice to people who would like their management to do what you deem to be the right stuff. What's your best advice to our IT professionals who are listening to this?

**Nicole:** No pressure.

**Bridget:** No pressure, but what's your best advice to them?

**James:** Can you fix all the problems in the 10 seconds you have? You know, my only advice that Schaefer and I have been riffing on for years is that, you know, application architecture and operations architecture are not dissimilar things. And I think that's one of the things that Google SREs were very empowered to do, which is like, oh, This is your monitoring architecture for your app. And they really—

**Andrew:** lots of people think they have operations problems, have architecture problems.

**James:** Yeah. So, like, I— and that gets back to the operational leverage. Like, until you really think about application architecture, getting operational leverage can be manual only or a series of bespoke imperative tasks. So, just think about application architecture and choose things like databases that you adopt carefully and think about their operational architecture. Because a lot of people develop, operate, you know, like, oh, I love this database's API, go. Think about how it's operated too.

**Andrew:** [00:22:26] Day 2 matters.

**Bridget:** You're speaking Charity's language.

**James:** This is just things I believe. So with that, it was fun.

**Bridget:** Thanks. Take care.

**Andrew:** All right, now we can start.

**Bridget:** Take your chair. You can— it's right here. We're iterating.

**Charity:** Yeah, no, I completely agree. Like, operations— like, so context is everything. And, you know, people who are coming from a context where all that they've seen is people who run scripts by hand, who are not empowered, like, I get the arguments that they're making. I'm just saying we can live in a better world.

**Andrew:** I think this is one thing to be careful of because— and I'm sure you guys have had similar conversations where You can say the words about continuous delivery, about microservices, about different things that have different benefits in different contexts, but someone who's so far away from that in their own context, like, it just sounds like magic. It just sounds like fairy tale.

**Nicole:** So, you clearly are coming—

**Charity:** like, I respect the work that all of you do talking to such a— I hear a but coming. No, no, no. I'm like, I couldn't do that. No, I'm not trying to cast shade on anyone. People are where they are, no judgment. You got to meet them where they're at. I've been very privileged to work with the teams that I've worked with. I have a hard time empathizing, and I would probably be rude. You're right.

**Nicole:** [00:23:55] You have to meet people where they are to help them be better. And part of it is helping them envision what is possible and what it can look like and what it can feel like. And what it can feel like. Right? Like, I realize that doing this all manual right now, and I swear, like, I got caught in this for a little bit at IBM, right? It's like, it was comfortable. I knew it wasn't gonna break. Like, I knew I could do it. I knew what was happening. It was gonna be fine.

**Andrew:** But you have to start where they're at.

**Nicole:** You have to start where they are.

**Andrew:** You know, there's an analogy that I like to use about something that people are familiar with, which is, you know, you could be trained to do lots of things, right? And if you want to run a marathon, you should probably train to run a marathon. If you're not ready to run a marathon and you go and try to run a marathon, you'll probably hurt yourself. And the same thing could be said for a lot of different activities, athletic activities.

**Charity:** So if people try surfing and they aren't ready and it fails and they have a day of downtime, now they're all hurt.

**Andrew:** Now they're laying there crippled and they're like, oh, I probably shouldn't have tried continuous delivery.

**Charity:** Well, there's also companies who— I have friends who are doing early startups that I've been trying to help, which is something I can relate to a lot more. But, like, so my company's product is really something that helps, you know, if you have a long fat tail of, even if you're the best engineers in the world, you can never automate and get rid of all these problems. Because, like, you know, if your product behaves at all like a platform, right?

**Nicole:** [00:25:27] You're all—

**Charity:** humans introduce chaos, and the more flexibility you give to people using your product, the more chaos they can cause, and the more your engineers need to have powerful tools for, you know, actually debugging these things in real time, you know. And so some of my friends have been like, oh, I want to use this, and we go and look, and it's like, okay, So you are a patient in the emergency room. You've got a broken leg, a broken arm. There's blood spurting out of your head.

**Kevin:** Cool.

**Charity:** There's also like, you know, a bunch of— there's some like disturbing nodules. You know, there's some skin— might be skin cancer or something.

**Andrew:** Are you ready to run a marathon?

**Charity:** We're not ready to like— we shouldn't care about those things until we fix the limbs and the blood spurting, right?

**Andrew:** You got to stabilize the patient. Stabilize the patient.

**Charity:** Before you start like jumping ahead to like, you know, first things first. I mean, I think that the number one quality that makes people good at startupping is ruthless prioritization.

**Bridget:** [00:26:35] But isn't that true in most businesses too though?

**Charity:** I think it's true, but you have—

**Bridget:** It's so visible in a startup.

**Charity:** It's so visible and immediate in a startup.

**Nicole:** I would say no.

**Bridget:** But if you don't have priorities in your large businesses, don't you go ahead and—

**Nicole:** But not ruthless prioritization.

**Charity:** You can hide it for longer. You have more scope.

**Nicole:** You have, and you have so much budget.

**Andrew:** It depends on context too.

**Bridget:** Again, you can fail for a long time in a large business with no one.

**Charity:** This is actually one of the safety nets. You have other people who could fill in.

**Andrew:** This is one of the things that causes the overfunded startups to fail because they, they're protecting themselves from their own context with the infusion of cash.

**Charity:** Totally.

**Andrew:** So they don't have to prioritize because everything's great because look at our—

**Charity:** Well, I'm coming from my position of 4 people.

**Bridget:** Oh, of course.

**Nicole:** And like, fail.

**Bridget:** I'm kind of wondering, as Nicole goes and looks at the data coming out of companies of various sizes, I know you have data on, like, market cap and whatnot. How do large organizations, because I know from show of hands earlier that the vast majority of people at this DevOps Days work at larger companies, how do large organizations get the nimbleness and agility and fun and awesomeness of the startup? Like, how do they get that? If they want any of those things, how do they get it?

**Nicole:** [00:27:44] So how do they get that?

**Andrew:** How does a sumo wrestler do gymnastics?

**Kevin:** What is it called?

**Bridget:** I mean, like, how can people inside large organizations have the things that look like magic?

**Nicole:** So quite often we see it happen in, like, smaller teams the same way, like, we see people do the DevOps, right? So you have a smaller team, try something out, be nimble, and then see it scale from there. Right? I mean, it's— you can't do it the way that traditional enterprises have tried to do things in the past, which is like, we're going to be nimble and we're going to do it everywhere. And this is the exact process you're going to follow to be nimble.

**Andrew:** We're going to be so nimble.

**Charity:** We put it—

**Andrew:** we put like 5 words on a poster.

**Nicole:** Follow this 50-page document nimbly. Here are the mouse pads and the posters that say nimble.

**Bridget:** So I'm curious to hear from our audience just because we have— I can't even say for sure how many people, at least 30 to 50 people probably in the room, and I feel like at least some of them probably have questions for our panelists. So at this point, if you want to have a quick show of hands so that we can—

**Charity:** [00:28:49] Can I say something quick about the nimble thing and big company?

**Bridget:** Yes, we can talk about that while we line up some questions.

**Charity:** So working at Facebook was a revelation to me because I have aggressively avoided big companies my entire career.

**Bridget:** And then your company got acquired by Facebook.

**Charity:** Whoops, happens to the best of us. No, Facebook is a very nice place with very nice people, but oh my god, it moves slow compared to everything I've ever done before. And they are, from what I gather, like on the very, very best end of the big company spectrum. But it's so slow. You know, their horizon is just like, you know, 18 months from now. And it's just like, okay, 8 weeks from now, I think I'm still going to— you know, I'm more comfortable with that. But, you know, they try to—

**Bridget:** That's hilarious.

**Nicole:** So I was at IBM, and one of my old departments just decided to roll out this newfangled thing. Everyone's sitting, right? It's called Agile. I just about fell out of my seat.

**Bridget:** [00:29:54] When did you help make that agile stuff happen, Schaefer?

**Andrew:** I don't know, 2005 called.

**Charity:** But the way that you can actually—

**Andrew:** Agile is not evenly distributed, let's put it that way.

**Charity:** At a large company is through trust, is being outcomes-oriented and trusting your teams and not— I mean, even if you think that—

**Nicole:** Both of those, outcomes-oriented and trust.

**Charity:** Outcomes-oriented and trust. Like you define an outcome, You have done everything that you can to develop trust in this team, and then you really have to go hands-off.

**Nicole:** And empower your people. Empower them and empower them to make mistakes.

**Charity:** Yes. You know, as long as they're not, like, going to destroy the company, empower them to make mistakes because that's how they learn and become more trustworthy. And if you don't do that, you don't have agility.

**Bridget:** How do you tell which mistakes will destroy the company except in retrospect?

**Nicole:** Well, like, hopefully you've hired smart people who have good things in mind, who have good intentions.

**Andrew:** Like, I very strongly believe that smart people solve problems. That's right.

**Bridget:** [00:30:57] I mean, intentions don't prevent you from dropping the production data.

**Andrew:** Smart people also cause problems.

**Charity:** Every single place that I've ever worked has had some sort of outage related to, oops, I almost distributed, shelled, and dropped all of the data everywhere. Every single place I've ever worked. So, just saying, like—

**Nicole:** But also, both of these were moves, right? I mean, how many times— who here and online, right, and live, hi, who has shown up to work and said, I'm taking the company down? Like, it doesn't really happen.

**Andrew:** That's like werewolf style.

**Charity:** Do we have any questions?

**Bridget:** Sorry.

**Charity:** Do we have any questions?

**Bridget:** Yeah, let's get some participation from the audience. You all chose to come to a live taping, which means you've probably either listened to the podcast before or you're like, I can sit in here and no one will bother me. So I'm just gonna pick on Gabe since he's in the front row. Gwendolyn, do you want to give Gabe the mic? And then put your hands up, other people.

**Gabe:** This is just off— is this on? Okay, just off the top of my head, you guys talked about the pay disparity. You know, I think that's maybe less— pay disparity is the outcome of maybe a lack of career development. And so one of the things that has been talked about at this conference is, you know, DevOps is Dev plus Ops, but now people are starting to integrate marketing. What about parachuting in HR/career development people into DevOps teams to make sure that both the developers and the Ops people, or the DevOps or the TechOps, or I mean, if there's no differentiation, But how do you develop these people over potentially years to make sure that they're valuable for the really long term? Maybe it is more important in a giant multinational conglomerate.

**Charity:** [00:32:47] So you're talking about how to develop individuals so that they are, you know, so that pay should roughly— this is a statement— should roughly reflect value to the organization. Which is a statement that I think we all agree with, even though it's, like, impossible to completely, you know, but if you're systematically, like, saying, well, all software engineers have these brackets, you know, and all, you know, operations-identified engineers have these brackets, you're pretty clearly sending a statement that, you know, this is how you value them. I think that I don't understand how HR fits into any of this. I understand defining things that you care about. And the thing is that what you care about as an org isn't the same across all orgs, right? And some orgs, like Heroku, they are, like, 5 nines, you know? So, like, for their internal review process, it's, you know, is your shit reliable? It's going to be very heavily factored into do you get a promotion? Do you get a raise? Do you get that different title? Whereas at social gaming companies, no, no, that's probably not one of the top 5 things that they think about.

**Nicole:** [00:34:05] At least not for Pokémon Go.

**Charity:** Keep it up.

**Nicole:** That shit is down constantly.

**Bridget:** 2 nines is fine.

**Charity:** So it's all contextual.

**Bridget:** Can the nines be on any part of the— any side of the decimal point? Because I feel like 9.9999 is still 5 nines.

**Andrew:** So the way he phrased this made me think of some different things than what Cherry is saying. And to me, I'm not sure you need HR to, like, get better at your work, right? And I know this isn't always true, and it certainly hasn't been true everywhere I've been, but when I've been in a position to make this true, I try to make it true. And that is that you can do work in such a way, and this kind of goes back to this metaphor of running marathons, you can do work in such a way that at the end of doing the work, you're better at doing the work. Than when you started. If you're not getting better, if you're not changing your behaviors, if you're not learning as you go through the work, then I would challenge you to reevaluate, like, what that work is. Like, are we reevaluating how we do work so that we can do it better? Because that's just as important as, like, running the shell script.

**Charity:** [00:35:09] What about making other people better too?

**Andrew:** It's the system, right? Like, in a healthy organization, The system helps everyone be better at their job. That's what I believe.

**Bridget:** And maybe that's the tie-in for the HR department at a large organization is if you're trying to assess or evaluate your employees over time, one of the things that should really matter is how much are they learning?

**Andrew:** And some of it comes from, like, there's this tribal transfer of knowledge in organizations, and if you don't have a sense of mentorship or ownership of the people that are new to the organization, then how can you expect them to like do better for you?

**Nicole:** Maybe it's, you know, offering training and development, and as, you know, former university professor, I'm gonna go ahead and like drop a bomb on like some of university. You're not going to get all of the training that you need in university regardless of what it is you do. You'll get a little, you'll get slightly better training for development maybe, but that's with a giant asterisk because like you're gonna learn how to code, code, but you're not going to learn how to code highly distributed software and learn how to do continuous development delivery. You aren't, because it's not there. There isn't CI. Like, a lot of programs right now don't even teach, like, Git. I know, it's sad panda. For operations, we don't have very many solid programs in that right now, although, like, There are a handful, and you can get some basics in some MIS courses, and we're starting to work on that right now. But thinking you can go to university and come out and be a rockstar DevOps person, it's not going to happen, but it's not going to happen pretty much equally. You're equally fucked, really.

**Charity:** [00:36:52] Oh, you're not going to come out as a great software engineer either.

**Nicole:** Like I said, you're equally screwed.

**Bridget:** I mean, what will probably help, honestly, I think that going to the University of Minnesota gave me great preparation in being in ops, but it's because I got the student job working in the jobs department where they gave us— wrote out our faculty.

**Charity:** So there's really 2 halves to your question, though, which is how do you empower— how do you help people get these different skills and how do you reward them once they do? And I think that the I have always seen it work best when people want to get the skills, and part of making them want to get the skills is showing that you value them. If you're not demonstrating that you value engineers knowing how to debug their own shit and instrument their own shit and create observable, maintainable systems by other people—

**Nicole:** And create and maintain scalable code.

**Charity:** [00:37:53] Then they're not incentivized to do that. It's, you know, people are tribal creatures. They want to do what you want them to do. So you should be specific about what you're signaling that you want. And on the other side, I feel like as managers, I just spent 3 years as a manager at a big company, so I've thought a fair amount about this. Like, there are questions that you ask, right, when you're giving performance reviews. And often they are questions that don't give the full story or don't give you the right answers. Like, one of my favorite questions to ask people, whether they're on my team or not, is like, who on your team would you most like to be paired with as on-call? Or if you were just like lost, if you could not figure this service out and it's 3:00 AM, who would you call? Or who would you least like to be paired with? Because we would do this thing when we paired production engineering with software engineering, you'd have a buddy. Who do you least want to be paired with and why? I mean, this tends to tease out a very different set of responses from, you know, who's the best engineer on your team? Who writes the best code? You know, you're—

**Andrew:** [00:39:11] So, something that the chair just said made me think of the flip side of this, which is, okay, so we can make people better, but there's also, especially in some of these large organizations, which you don't see as much in startups, a reluctance to fire the incompetent people, right?

**Charity:** Or even confront them.

**Andrew:** Or confront them, and I don't think anything destroys organizations faster than having the frustration of like your good work being compared next to this other person, and often you're like on the same pay ladder, or whatever, and you're just like, it's just demotivating, demoralizing to know that the organization is carrying all this extra baggage that isn't adding value.

**Bridget:** But this is back to the— and I think Nicole has a really valuable point.

**Nicole:** Go ahead.

**Bridget:** But this is back to the how do these organizations figure out what is going to be the most useful thing for them to do?

**Nicole:** Yeah, I'm going to rant for a minute though. Super hard rant. Do not— individual performance reviews are just massive bullshit. They are. Individuals do not deliver software, teams do.

**Bridget:** [00:40:22] Preach.

**Nicole:** All damn day long. So, yes, sometimes there are people that are deadweight and identifying them and, like, Helping to— helping them find something more appropriate for them and their skills is super important. But you know what? Teams deliver software, individuals don't. Teams perform, individuals don't. Because there's nothing worse than the individual rock star asshole also. And there's also always someone on the team who does what in academia we call individual work or sorry, invisible work, which is absolutely important, absolutely critical. Just as essential to the team's high functioning. It absolutely does not mean it's less valuable. It might be the person that you always want to pair with. It might be the person that always knows what's happening, always getting something done. That doesn't mean it's the person who's gossipy, but it's the person who, like, glues the team together, has everything in their head. They might be doing the least number of commits. I'm also the metrics girl. Sorry, I go to, like, numbers. But, like, if you try to instrument like the measurement of the performance of the person or the team and you're measuring commits, that's like this person is going to get the lower review because he or she does the least number of commits.

**Andrew:** [00:41:34] As soon as you make a measure a target, you made the measure useless.

**Nicole:** Or you're going to game it, right? That doesn't, you know, there's going to be a way to game it. But maybe there's someone who has everything in their head or they're the perfect person to pair with or they're the person that you rubber duck with, right? So that's someone where like if you always have to say something out loud to make sure it works. So you maybe have like a rubber duck on the top of your screen and you say it out loud to the rubber duck and then suddenly it makes sense to you. Maybe that person is your rubber duck and the whole entire team's rubber duck. Your team is what performs. Your team is delivering.

**Andrew:** So I'm going to take a slightly contrarian position on what you just said. Not like I want to reinforce some of it, but I very strongly believe that humans are nonfungible and that, yeah, you can, you can, you deliver as a team, but you definitely don't have the same, like you're not going to replace these cogs in this machine and like have that system operate the same way. And then when you start—

**Nicole:** And Google found that, right? So if anyone's here for my talk, I referenced this. Google thought, so in studying, they have 37,000 people, they had studied the 1,000 managers for years. They thought we're going to study the 36,000 engineers and we're going to find the perfect makeup of a team and it's going to be like a data scientist and a database person and a couple programmers and it's going to be your perfect team, like pseudo-fungible-ish. No, it comes down to team dynamics where psychological safety is number one, trust and vulnerability. Also like meaningfulness of the work, identification, all the other things. But it comes down to that great, awesome mix of a team and the people.

**Charity:** [00:43:08] And yet ironically, they still hire as though they're hiring for Lego bricks.

**Andrew:** It takes a while. 4 out of 5 artificial intelligences approved that hire.

**Nicole:** 78% of stats are made up.

**Andrew:** The thing that I would say, and I think we've all seen this movie where this kind of goes back to the baggage like we allow to occur inside of our organizations, that there's going to be some developer and that person is elevated and celebrated for all the stuff they contributed, When in reality what they've actually contributed, if you were able to look at things holistically, is a lot of technical debt. And there's like certain— yes, there's certain personas that I think— so I like to think of this as kind of like a role-playing game.

**Nicole:** And I feel, by the way, really quickly, I feel bad I pointed at Charity. I pointed at Charity because she made that point. She made the point in her talk that software is debt. Like anytime you introduce new stuff in software, I wasn't like, Charity does this.

**Andrew:** Charity's not a person. There's a persona that I'm going to call the 80 percenter, and the 80 percenter, you can give them an idea that no one's ever seen before, and they will go home and you'll see it again at 8 in the morning or whatever because they stayed up all night making it, and that will be awesome as a proof of concept. That same person, given from now till the heat death of the universe, will never build anything that should be in production, right?

**Charity:** [00:44:34] Oh my God, I know so many startup CTOs. Who, yes, that's them.

**Andrew:** And it's nice to have that person in the party. It's nice to have that person around.

**Nicole:** And even on the team, but they need the rest of the team to get something in front of customers or yours.

**Charity:** They need to know that they are not the heat and light of the universe just because they can pattern predict.

**Bridget:** This makes me think so much of Alice Goldfuss's wonderful talk at Velocity Santa Clara.

**Nicole:** Oh my gosh, it was so great.

**Bridget:** So great. She's talking about—

**Nicole:** I couldn't tweet fast enough. I'm serious, find this talk. My thumbs hurt.

**Bridget:** She's talking about rock stars, builders, janitors, these different roles on a team. And there is definitely something to be said for the fact that some people— this is— and you can kind of think of it as the pioneers, settlers, town planners too. But like, this is— you can think of it as some people will pretty much always want to or be able to do the one thing. But then that, you know, the invisible work, the cleanup work, or just in the middle, you, okay, that's great, you made something that's awesome, an awesome idea. How do we actually productionize this? Let's make this so that we should responsibly roll it out to the customers.

**Nicole:** [00:45:47] Or should we? Was it something that was just a learning opportunity? We needed to learn something from it, we need to move on.

**Charity:** Yeah, respect those sunk costs. I'll take turns.

**Kevin:** Yes.

**Charity:** Before, I wanted to make one more point about the, the composition of a team because I thought what you were saying was really interesting. And I think this is one of the competitive advantages that startups have is that when you're hiring, when you're building a team and you're looking at the team as an organism, you know, and you're not looking for an engineer, you know, who's like the best engineer so much as you're looking at, okay, what does my team need to be more effective. Maybe they need to be able to churn out lots of code because that's something we're slow at. Maybe they don't need to be an amazing software engineer because what we need is someone, you know, who, you know—

**Andrew:** It's sort of like inverting Conway's Law. So you're basically building the system that will build the system, right? And so like a lot of people don't give that the full attention or realize that that's the act they're doing.

**Charity:** [00:46:50] What you need is very dependent on what you have. Your resources are constrained.

**Andrew:** It's like I have a basketball team, I don't need more point guards, I need one center or whatever.

**Charity:** Yes, yes, and I think that having constrained resources is actually one of the greatest drivers of creativity for managers and people who are trying to build companies. It's not good to have like bajillions of dollars and too many engineers before you actually know what you're doing with them.

**Bridget:** So good news, large enterprises, look at how much budget.

**Andrew:** It's a fun hobby though.

**Nicole:** But do it responsibly, right? I mean, suddenly just cutting budget and telling people, oh, be scrappy.

**Charity:** That I say about startups?

**Nicole:** Didn't say it.

**Andrew:** Austerity is also a form of waste though.

**Charity:** You can apply it to teams and like new projects within established companies, right?

**Nicole:** And that's one of the best things I've seen where it's like carved out this small budget for you, take a team, go see what you can make.

**Charity:** High risk, high reward, just like a startup. So like I say things that are relevant to startups, but I feel like you could just like said search and replace startup for, you know, no projects within.

**Nicole:** Oh, and so by the way, I wanted to get back to something. You said I had data on like some of this for enterprises. One thing I did want to mention, a bunch of people like look at this data and like look at my little talk and my cute little like show and they're like, this super doesn't work for enterprises though, right? This doesn't work for my company. This is nice. Thanks, but no thanks. No, there are no statistical differences among the different enterprise sizes. So like ran the numbers, enterprises, 10,000 employees and higher, they look the same, right? So can they be nimble? They can totally be nimble. I see high performers in enterprises. I see high performers in smaller companies. I also see super low performers in enterprises, but I also see super low performers in startups.

**Andrew:** [00:48:33] So just to refresh, people don't have the full context of what you're talking about. Like, what are the features that you're pulling out of each of those and to compare them? So when you say high performer, what were you measuring? What were the actual metrics?

**Nicole:** Okay. So specifically when I'm looking at high, medium, and low performers, I'm looking at the IT performance of— well, this is complicated. Stop me when you're done.

**Andrew:** Let's have a 3-minute version.

**Nicole:** For high, medium, and low performers, I'm looking at throughput and stability. So where the throughput measures are deploy frequency and lead time, code commit to code deploy. Or delivery, and stability, so MTTR, mean time to restore, and then change fail rate. But then once I have the teams classified according to high, medium, and low performers, where high performers are very similar to each other and dissimilar from others, medium performers are similar to each other and dissimilar from the others, low performers are similar to each other and dissimilar from everyone else, then I take a look and I can slice and dice the rest of the data. So all the high performers, by the way, they tend to be not tend to be, they are, statistically they're significantly different along the Westrum Culture Score. High performers are significantly higher in terms of Westrum Culture.

**Bridget:** [00:49:45] So give us the quick, give us the 1-minute version of that.

**Nicole:** High trust, good information flow, novelties implemented, messengers aren't shot. Low performers suck at that scale. Medium performers kind of in the middle. Enterprises, Like, so if I tried to like run that same analysis to see if I see significant differences by company size, no significant difference. So I see teams from all company sizes equally spread across that, or at least not significantly, no significant differences spread across there. If I do an analysis by industry vertical, some people are like, oh no, I'm in a highly regulated field. I see it spread everywhere. Okay, so I see like some companies show up in high, medium, low. I see, so I was testing for things like where version control shows up, some of those key technical practices.

**Charity:** Whoa, wait. There are places that don't use version control?

**Andrew:** Yes. Unfortunately. Yes. It's true.

**Bridget:** I've seen it. I talked to a large enterprise about a month ago.

**Andrew:** [00:50:47] I've seen the White Walkers.

**Nicole:** And specifically, and I want to point out specifically, version control of infrastructure, application, and configuration of all of these things. So it's— because some people are like, oh, I do version control for my application, but only for their application, not for the configuration, not for the scripts, not for anything else.

**Bridget:** Not for those schema changes. You don't want to know where your schema is.

**Andrew:** That one person has a home directory with all the do-it-live.sh.

**Nicole:** All right.

**Bridget:** So I wanted to break Charity's heart by telling her I talked to a large company recently that was excited about the fact that they were, they were gonna get them some Git this year. I was like, that's terrifying. I mean, good, but terrifying. But I'm glad it's 2016, and I'm glad you're getting some Git. I'm super, super sad for your employees that they were using whatever the hell they were using before.

**Charity:** Oh God, I just want to be like a hedge fund. Figure out what—

**Bridget:** but that's the thing, right?

**Nicole:** We see significant differences in stock price among high and low performers, 50% outperformed high versus low performers over the previous 3 years.

**Bridget:** [00:51:55] Should we just start some sort of fund that's basically for companies that use version control?

**Charity:** Yeah. Put your investments there. Or anti for those who don't. Sorry, go on. Derailed you.

**Nicole:** Among key technical practices, key lean management practices, key, like, cultural indicators, we do see good significant differences among the practices, but not among the characteristics of the firms. If I would say demographics of the firms, like how big is your company, what industry vertical are you in, I don't see big differences there. So it's not like this works for everyone except really big, highly regulated companies. No.

**Charity:** Yeah, in other words, what Nicole is saying is you have no excuse. So, we have like, what, 7-ish minutes? Does anyone else want to ask a question maybe?

**Bridget:** We'll take a question or two. And while we've got one right over there, and while we're taking questions, I'm going to have our panelists think about, because I'm going to ask them to give us their biggest takeaway in terms of what they either learned or shared at DevOps Days Minneapolis after this question.

**Kevin:** [00:53:07] Hi, my name is Kevin. This is for Nicole. So in your talk yesterday, kind of the big eye-opener for me was about quality and throughput and how you said it was—

**Nicole:** it was what?

**Kevin:** Sorry, about quality and throughput.

**Bridget:** Quality and throughput.

**Nicole:** Okay.

**Kevin:** And how you said they were high performers, did them both equally well.

**Nicole:** Throughput and stability.

**Andrew:** Stability.

**James:** Yes.

**Kevin:** Sorry. And I went quality, but stability, different thing. Anyway, so for someone who cares about stability, I guess, does your data show, did they just automatically out of the gate, they did them both well, or did one come first, or how does that— how does the strategy work?

**Nicole:** So I don't have data on that. All I have data is on where they are at a point in time. But I do have data on if I see trade-offs, and I don't tend to see trade-offs.

**Bridget:** It sounds like this might be exciting new questions for next year's DevOps report. Yes.

**Nicole:** I do have data that I still have to analyze, and as soon as I get it, going to post it online. And that question is, when you started your DevOps journey, what did you start with? And that's in terms of technical practices, management practices, and cultural areas. But in terms of if they started with stability or speed first, I haven't asked that. But across over the years, I know that, like, speed, we tend to see more gains in speed just because in terms of, like, stability. Like right now, like slow is the new down, right? Like you can't— like there's just no such thing as like down websites. So now you just can't really be slow and you can't like— there's nines, right? So you just can't get that much better because there's just not that much better to get. So we're seeing big gains in speed, but it's just because like that's the next place to go.

**Andrew:** [00:54:56] Each nine costs 10 times more than the last one.

**Bridget:** Yeah, too true.

**Nicole:** That also.

**Andrew:** That's just math.

**Gabe:** Thanks.

**Kevin:** I just wanted— this is like completely out of left field, but for Andrew, this is the first time I've ever heard you speak. And so it occurred to me that you seem really, really good at synthesizing information and then spitting it out in your own language. And I was just curious in your career if you like examples of where that's really helped you and benefited you or areas where that's maybe gotten you into trouble.

**Andrew:** So I just want to start with saying I was born this way. I have long believed, based on the arc of my career, that the best thing that developers, any technical person, operators, what have you, can do to improve their career is to learn how to speak and learn how to write.

**Nicole:** 10 times that.

**Andrew:** Totally. And I was also fortunate. I mean, At one point in my life, I was on a debate scholarship in university for a number of years, and I got a lot of practice listening to things and kind of forming arguments and responding in a fairly rapid fashion. So, and that served me well in my technical career as well.

**Charity:** [00:56:13] Nice.

**Bridget:** Yeah, get in an argument with Andrew Clay Shafer about, say, platforms or anything else. It's war. Not a hashtag, not a war.

**Andrew:** War as a metaphor. But I've given a number of talks over the last, I don't know, 5, 6 years. Some of them are pretty good.

**Bridget:** You can go watch some of Schaeffer's ideas on the internet.

**Andrew:** My favorite idea or my favorite talk I gave is pinned to the top of my Twitter.

**Bridget:** It was a good talk. I was at that one live. So So, to sum up, I'm gonna ask each of our panelists something that you learned and/or shared at DevOps Days Minneapolis, and where people who would like to stalk you on the internets and/or show up at a conference and/or whatever that you're gonna be up to coming up real soon now, TM, where they can find more of your awesome content, starting with Charity.

**Charity:** Well, I am on the Twitters, @mipsytipsy. That was my EverQuest enchanter's name.

**Bridget:** [00:57:17] Excellent.

**Nicole:** True story.

**Charity:** I've said no to 26 conferences over the next 6 months. Hashtag startup life. But I will be at— you dragged me into Velocity New York.

**Bridget:** I got to put a pitch in for our Velocity New York panel, Ops in the Time of Serverless Containerized Web Scale.

**Charity:** Yeah, yeah. If you want to—

**Nicole:** Buzzword bingo.

**Charity:** My A+ rants right now generally get sparked by anything #serverless. Yeah, no, but seriously, like, you know, in the early days of a startup when there's 4 of you, if you take off, oh, 25% of your engineering team is gone, and that actually puts a dent in your ability to deliver. So, I'm a really trying to keep it down. So, again, startup life. I did not get to see hardly any of the conference, which I really am sad about. I'm hoping to do some of the open, you know, speaky thingies this afternoon. I really want to see more acknowledgement in DevOps Days that this is for software engineers too, that they have as much change. I feel like it's really, the message is just starting to be like, all right, we leveled up. Ops has like come a long way. Where's the other half of the equation? I didn't speak about this this time because Bridget told me to be nice.

**Bridget:** [00:58:54] I told you that the stuff that you just gave at Velocity was like amazing and exactly what I wanted.

**Charity:** That's kind of what you said. All right.

**Nicole:** Okay. So I am @NicoleFV. So F as in Frank, V as in Victor. And my website is nicolefv.com.

**Bridget:** And all of this will be in the show notes as well.

**Nicole:** Oh, perfect. And I am next at Spring One Platform in Vegas.

**Bridget:** Pivotal Conf.

**Charity:** Represent Pivotal Conf.

**Andrew:** We organize a conference and it's a A little bit more focus on up the stack for something. So the Spring framework is widely—

**Bridget:** We'll talk about that in a minute. Nicola will—

**Andrew:** Sorry.

**Nicole:** Oh, and I— So there's been a whole bunch of stuff. I really seriously dug your 2 shoutouts that you had. One was that all code, and not just for developers but also for ops people, all code is technical debt. And that, like, the corollary is that all people should be rewarded for deprecating and removing code whenever possible.

**Andrew:** [01:00:01] Can I add one thing? Tests are code.

**Nicole:** Tests are code. Everything's code. And also, like, my super favorite one is that software is never the endgame. Software is always in service of what it is that you're doing. And always remember that. And I do that, you know, even like that's my other bang. Drum that I bang is, like, if you're doing metrics, like, don't do continuous delivery for the sake of continuous delivery. Don't do the DevOps because DevOps. Do things because business, because money, because customer. What is it that you're doing?

**Bridget:** Or because stakeholders, because goals. If you look at, like, public sector stuff, like, whatever the goals are, because you're delivering healthcare, what is it that you do, and then back into that.

**Nicole:** So, okay, now it's your turn.

**Andrew:** So I went, I kind of curtailed my conference speaking, so I haven't really been proposing. And I feel like also I go through phases where I don't really want to say anything. Like if people tell me to come and I'll say stuff like, okay, fine. But I feel like I need to like build up. Like, so like there's a few things I gave talks before where I felt like, okay, like I have this seminal thing like I really want to share. And I feel like I'm in a position right now where I'm sort of learning a lot of new lessons. You know, I work with the people on my team and like in the organization and I get to see a bunch of stuff. And so I don't feel like I have anything like I've really got to say yet. Like, obviously, if someone drags me out, I'll talk. But the main thing that I'm trying to do right now is just, you know, focus on my own learning, my own development, and, you know, making sure my team gets out there and gets their chance to learn and develop as well. And I'm learning a lot of lessons about being a manager. I'm learning a lot of lessons about building organizations. And maybe I'll have something more to say in a while about all that. But for now, I'm mostly just trying to support the narratives that I think are obvious around— I feel like there's this new dominant paradigm that has emerged that is, you know, I call it cloud native, and I think that it's a mistake to talk about any of this stuff in isolation, that, you know, DevOps, microservices, continuous delivery are a single phenomenon that is totally intertwined, and you can't have like a DevOps initiative and then a continuous delivery initiative and a microservice initiative and be successful, that you have to think about these things as holistic systems.

**Bridget:** [01:02:28] But what if those are in different silos, Andrew?

**Andrew:** Well, then tear down the walls or fail. Like, this is the other thing is that this new paradigm, if it is truly a competitive advantage, then the Darwinian effect of not adopting the practice will put you out of business. And so you don't have to change. You know, change is not mandatory. Survival is not— survival is not mandatory either. And that's— I'm stealing from Deming. But the things I'm seeing right now is like I just have this front row seat I've been very privileged in my career to watch a lot of this develop, you know, with the automation tools and being able to see inside behind the veil a lot of things that go on at Velocity, DevOpsDays, whatever. And so just now the chance to bring all these things that we learned building the big web, building the, you know, the kind of cloud-native way to do things into the enterprise, giving them an opportunity. They don't have to change if they don't want to. But if you don't change, you're gonna be at a disadvantage, in my opinion.

**Bridget:** [01:03:28] It's— I couldn't agree more. And where can people find you on the internet?

**Andrew:** Oh, I'm @lilidea on Twitter, and that's probably the easiest way to get my attention. Even if you're on my team, you know I don't answer email, so—

**Bridget:** That's okay.

**Nicole:** We don't actually send you email. I peeked over his shoulder and his inbox is 22,000+ unread.

**Bridget:** Yeah, so I report to him, and direct messaging him on Twitter is the best way to actually actually talk to him.

**Andrew:** Or text.

**Bridget:** Or text. I can iMessage you or direct message you on Twitter or Slack.

**Gabe:** It's true.

**Bridget:** But email is not a thing. Sorry, email. So yeah, basically.

**Charity:** How about you?

**Nicole:** And who are you?

**Bridget:** I co-host this podcast. So my fellow co-hosts are not at this DevOps Days, sadly. But yeah.

**Nicole:** Where can we find you? And where are you going to be next?

**Charity:** You can find me on the internet.

**Bridget:** So, I will be at Agile next, the Agile conference in Atlanta next week.

**Charity:** I have a question for you. Yes. Roughly how many conferences do you do in a year?

**Bridget:** [01:04:29] I think that Joe and I sat down and calculated that I am at about 85% travel right now, so I'm gonna go with all of them. Hashtag, it's probably fine.

**Andrew:** I kind of made it her job.

**Bridget:** I kind of went to work for Schaefer knowing that it to be pretty much going to conferences and talking to people, which fortunately I'm super extroverted, so this works out pretty well.

**Charity:** It's like I have a nightmare about waking up with your job.

**Bridget:** I mean, I'm pretty sure that at some point in my life, that itch to have production access with all the joys and pains that it brings is going to be too compelling to pass up. But right at this very moment, I'm enjoying doing the antiqua Schaefer Express.

**Andrew:** You asked where I left off. That I was, I don't know, like I had this joy in my heart listening to Jeff do the talk.

**Bridget:** Oh my gosh.

**Andrew:** Like that was one of my favorites.

**Bridget:** It was so funny. What was it called? Like DevOps, the fine print.

**Andrew:** It was great.

**Bridget:** Yeah, he was talking, Jeff Smith runs engineering at Grubhub and was talking yesterday.

**Andrew:** [01:05:30] Everyone should watch it when the video goes up.

**Bridget:** Everyone should watch it when the video goes up. And he was talking about they decided to do the DevOps, spoiler alert, Not everything is unicorns and rainbows.

**Charity:** Oh no.

**Bridget:** Anyone who's listened to your talk—

**Andrew:** Shocking plot twist.

**Bridget:** Shocking plot twist. This is actually work. Sorry. It would be called unicorns and rainbows and kittens if it weren't actually work. But shocking plot twist. Yes, Jeff's talk was fantastic. Really, I mean, Nicole's opening keynote and Charity's closing keynote were everything that I wanted when I begged both of them to please come to Minneapolis in July. It's the one month of the year we've never had snow is how I pitched it. Minnesota has logged snow somewhere in the state every other month of the year.

**Nicole:** She neglected to let us know it was gonna be 100 and humid. We have air conditioning.

**Bridget:** But yes, so in conclusion, yes, I am Bridget Kromhout at Bridget— oh, can't talk. Speaking words, it's hard. I am Bridget Kromhout. @bridgetkromhout on Twitter. This has been Arrested DevOps. Thank you all for participating in our live studio audience. And thank you so much to our panel. All right.

**Nicole:** [01:06:40] And thanks to our audience.

**James:** Yeah.

**Bridget:** Thank you.
