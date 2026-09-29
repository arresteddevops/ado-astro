**Ryn:** [00:00:00] Exposure doesn't pay my goddamn rent.

**Bridget:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm your host, Bridget Kromhout, @bridgetkromhout on Twitter. Arrested DevOps is brought to you by 10th Magnitude, a company that figures if you're listening to this podcast, you must be pretty cool. 10th Magnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at ararresteddevops.com/tenthmagnitude. This episode is also brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 70 common infrastructure tools such as Chef, Docker, and AWS, so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at ararresteddevops.com/datadog. Today I'm joined by a friend of the show and returning guest, Katherine Daniels. Katherine, you last joined us for starting a new DevOps job. I think that was ararresteddevops.com/32. It's been almost a— it's been over a year, right? That was March of 2015. Wow. Yeah, the time though. So tell us, catch us up with the last year. What have you been up to since then?

**Ryn:** [00:01:33] Well, most of my time over the past year has been spent working on the book that I am writing with Jennifer Davis of Chef. We are writing O'Reilly's Effective DevOps, affectionately known as the Yak Book because our animal is the unshaven yak.

**Bridget:** I particularly like how the yak is unshaven.

**Ryn:** Yeah, yeah, so that when we write the second edition, it can be the shaved yak book.

**Bridget:** A much happier DevOps Yak.

**Ryn:** Exactly. That is due to be coming out sometime in late May or early June of this year, so we are really excited to have that almost done.

**Bridget:** Wow, so it's not going to have that big red early release stamp on it anymore?

**Ryn:** So we've been told.

**Bridget:** Because that really, that gets in the way of seeing exactly how, you know, hairy that yak is.

**Ryn:** Exactly. Or if it's wearing any, like, hand-knit bows in its ridiculously hairy hair.

**Bridget:** You have no idea. So, well, that's awesome. I'm, you know, uh, you heard it here, readers. Effective DevOps from O'Reilly Media. Katherine Daniels, Jennifer Davis. All right, other than writing a book, which I'm sure takes almost no time at all, uh, other than writing a book, What else have you been up to?

**Ryn:** [00:02:49] I've been working on some fun infrastructure provisioning tooling at Etsy. I have been speaking at fewer conferences than last year. I just got back from the amazing Codemania conference in New Zealand, where I got to talk about how I am kind of bringing software development best practices to this operational tooling, because as it turns out, even if you're writing just a collection of scripts, you're actually writing software, and that software should maybe be like planned and tested. Shocking. I know, I know, mind blown. Who knew? So that's been a lot of fun.

**Bridget:** Nice. And speaking at conferences in Middle-earth, we got to talk about that. I mean, this episode of Arrested DevOps is about speaking at conferences, so I definitely want to hear how that happened. And yeah, like we— and before we jump into, you know, the nitty-gritty of speaking at conferences, is there anything else that you would like to tell our listeners perhaps about your exciting new metal band slash t-shirt project?

**Ryn:** [00:03:56] Yes, so the backstory of this is that Etsy has a talent show every year. I work with some amazingly talented people and One of the things that I did this year was a metal band that did a heavy metal cover of A-ha's Take on Me. Oh my god. Yeah. And our— we decided to name our band Necro Atsume. And so our logo is one of the little Neko Atsume cats all decked out in like corpse paint and spiked bracelets. And I posted this on Twitter thinking, oh yeah, that'll get a few laughs, and it kind of blew up. So I, with the help of my amazing bandmates, created a Teespring campaign.

**Bridget:** Well, you know, when I clicked on it from Twitter, it was already like, this is fully funded, you can order until this date. I'm like, that was fast.

**Ryn:** [00:04:57] I was kind of surprised by how many people aside from myself wanted One of my coworkers actually showed me somebody that was a friend of a friend on Facebook had turned the NecroAtsume cat into their avatar.

**Bridget:** Oh my God.

**Ryn:** Yep. So apparently the internet likes cats. Who knew? This is news to me.

**Bridget:** Yeah, I've been told that the internet's a fan of cats. Like, I'm pretty sure that there are some people who follow me on Twitter because they're hoping for something about DevOps, and I'm like, lolz, sorry, mostly cats. But cats. Nice. Well, cats and conferences. That's the other thing. It's kind of funny because sometimes people tell me that I just can't follow you because you tweet too much when you're at conferences. And I'm like, let me introduce you to Twitter clients that let you mute hashtags. But yeah, even when I'm, even when I'm not speaking at conferences, sometimes I'm in the audience live tweeting your talks. Um, but let's, let's, uh, let's back up. Let's tell people, if people are interested in speaking at conferences, How do you even get started? How did you get started?

**Ryn:** [00:05:57] So I got started back in 2013. Jason Dixon, who organizes the excellent Monitorama conference, was putting together Monitorama EU in Berlin, and he reached out to me. We'd been friends on Twitter, and he— I'd attended the first Monitorama in Boston, and he just reached out and asked me if I wanted to talk in Berlin. And my first reaction was, no, I don't have anything to say. Because—

**Bridget:** Ah, the classic, I don't have anything to say.

**Ryn:** Yes. But he said, I follow you on Twitter because you have things to say. And at that time, I had coincidentally just switched jobs. And I did have a whole lot of opinions about things that we had done with monitoring at my previous job that I'd wanted to change but hadn't really been empowered to. That I was able to then change and improve at my then new job. So I just talked about that and it turned out to be really well received.

**Bridget:** [00:07:00] Yeah, and Jason's Monitorama conferences are kind of epic, though I don't think he's done a Europe one for a while, right? They're mostly in Portland these days.

**Ryn:** Yeah, I think the last 2 and the one this year have all been in Portland, which I can't complain. Portland is lovely.

**Bridget:** I believe we'll be seeing you there, right?

**Ryn:** Yes, I will be there talking about something monitoring related.

**Bridget:** You're not sure yet?

**Ryn:** I've got so much that I'm doing that I have a lot of ideas to think about in the next couple months.

**Bridget:** I mean, Jason knows you, so by now he's fine with you. Get up there and talk about something.

**Ryn:** Yeah, what could go wrong? I'm actually doing a senior rotation with Etsy's performance team right now. Right now working on some Nagios-related stuff, also having to do with performance. So hopefully some fun things will come out of there related to monitoring and alerting-related tooling. So that might be it. It might be something else.

**Bridget:** [00:08:00] Yeah, awesome. Okay, so we've established that you started speaking at conferences in 2013 because somebody who knew you from Twitter thought you maybe had things to say. Why would you say yes to that? I mean, and why would anyone want to speak at a conference?

**Ryn:** I think for me it was I had ideas that I wanted to share with people, and like I had mentioned, I hadn't had a ton of empowerment at the job that I had way back when, in a former life it feels like. And so I wanted to be able to share ideas and have some sort of, I guess, receptive audience. So definitely sharing stories. These days, I want to try and share stories as a way of helping other people learn. Because I think we, you know, one of the benefits of having a community where we have conferences and where we talk and listen to each other is being able to share stories and learn from each other. I mean, there's also definitely, you know, it helps your career when you are a respected person in the community or an established conference speaker.

**Bridget:** [00:09:16] So what would you say, speaking at conferences, like what kind of, in terms of the trajectory of how your career has gone the last 3 years since you started speaking at conferences, like what relationship would you say speaking at conferences has had to any changes in your career?

**Ryn:** Well, I met several Etsy people at conferences. I met the amazing Micah Mbetsi when he was helping to organize the first DevOps Days New York back in 2012, and it was through him that I started working at Etsy. So, I mean, there's some definite correlation there. I met you at DevOps Days.

**Bridget:** Right, DevOps Days New York. That was the one in 2013?

**Ryn:** Uh, I think 2013.

**Bridget:** Okay.

**Ryn:** I think we were both giving lightning talks, and I thought to myself, she has cool hair, I should go say hi.

**Bridget:** I have heard someone say that, like, you know, multicolored hair is like service discovery for cool people, and I'm like, well, it's— it doesn't hurt.

**Ryn:** [00:10:18] Yeah, there's definitely not a conspiracy.

**Bridget:** Definitely no conspiracy. Um, so you're involved with DevOps Days New York yourself now, right? So you want to give us a little bit of insight from the organizer point of view in terms of how people get picked to be on that stage?

**Ryn:** Yeah, I think it definitely depends based on the conference. I mean, different organizers have very different ways of doing this. Uh, what we have done at DevOps Days New York, uh, since I've been involved at least, has been submissions are originally anonymized, so that we try and remove at least some level of unconscious bias. And then when we will go through and rate all the proposals, and then when we're going through and discussing them as a group, we'll try and— we're trying to lean towards reaching out to newer speakers, rather than like the same old crowd. Because as much as some of these repeat speakers have really great things to say, I don't want the DevOps community to become an echo chamber where we just hear from only the same people over and over again.

**Bridget:** [00:11:30] I totally hear and understand what you're saying, which is why I spoke at far fewer DevOps Days in 2015 than I did in 2014. It's like I'm trying to encourage more voices in the space, not fewer.

**Ryn:** Yeah, I know some conferences don't use a CFP. Some will do invite-only as a way of— and this can go either way, it can be good or bad depending on how you do it— but you can't necessarily control as an organizer who submits to your CFP. You can encourage people to submit, but you can't really force it. So I've seen some conferences who have gotten amazingly diverse speaker lineups by hand-selecting the speakers that they want. But the problem with this is that you can also hand-select a group of people who are your friends and who look exactly like you.

**Bridget:** And I think that's a really good point too. And so when people are looking to speak at conferences and are wondering what conferences are gonna be the right audience for them, I think conferences that they've been to or conferences that they know they're gonna feel comfortable at are a natural fit. And a lot of people don't necessarily toss something out into the CFP of some conference that they don't know anything about. And so you, as an organizer, you do kind of have to encourage participation from communities of people who maybe haven't even come to your conference before.

**Ryn:** [00:12:53] Definitely. And one thing that we're trying to do at DevOpsDays New York this year is to make it a little more inclusive of different parts of the organization. I think a lot of DevOps conferences and talks and blog posts or whatever tend to be very ops-focused, and that's really not all there is. I think DevOps is about working well together as an organization, as a business, and it's not about just dev and just ops, because if you focus on only those 2 groups at the exclusion, at the expense of the rest of the organization, it's not going to be that successful. So you have to reach out to these other groups of people that you haven't necessarily heard from before, who might not have even heard of DevOps.

**Bridget:** Yeah, that's, that's such a great point. And I'm excited this year for DevOps Days Minneapolis. We have, for example, someone from marketing from Atlassian is going to be speaking. And I think just getting people in from other parts of the org— totally not a completely self-interested move in that I technically report through marketing these days, but Um, so switching gears a little bit, do you want to talk a little bit for people who might be interested in speaking at a conference but aren't even sure what the experience will be like? Can you just talk from the 10,000-foot view, your perspective? What's it like speaking at conferences when you first started and then now?

**Ryn:** [00:14:25] Well, these days I am slightly less nervous every time I get on stage. Um, I think a little bit of nerves can be a good thing because it, you know, shows that you care and you want to make sure that you're on your game and doing a good job. It's— I think the experience that I've had really depends a lot on the conference. Some organizers are very, very hands-on and interact with their speakers a lot, and some don't. So that will make the experience vary a lot. I think the audience can differ at various conferences as well. I like how much conversation there is on Twitter at events like DevOpsDays because it is allowing people to engage a lot more, to really have conversations instead of to just be like one speaker just lecturing at people. And so that engagement and sharing and learning from each other is something that I really enjoy.

**Bridget:** [00:15:28] Yeah, that makes a lot of sense. Um, and in terms of speaking at different kinds of conferences, like, I know I just did a blog post about what I do as a conference organizer to reach out to and give information to attendees. And I think that that seems like something, just what kind of communication you get from the conference as a whole so that you know, you know, where your marks are, where the pieces of tape are on the floor, where you're supposed to be standing, anything like that.

**Ryn:** Yeah, like what ratio are your slides supposed to be in? What is the AV situation going to be like? I loved your blog post because it was such a fantastic example of how much communication is important. And not, not only that, but why it's important, because there's nothing more stressful to me as a speaker than having no idea what I'm walking into.

**Bridget:** Yeah, absolutely. That makes a huge amount of sense. So We, uh, one of your coworkers, Lara Hogan, just did a really great series of live tweets, and we can link to them in the show notes, about live tweeting her day of a conference and getting ready and getting out on stage and that sort of thing. But not even just day of, but in general, how do you prepare for giving a conference talk?

**Ryn:** [00:16:46] So once I have my idea of what I'm talking about, I'll usually start working on the outline for my talk, which I'll do in written form about 3 weeks before. If it's a subject that I'm less comfortable talking about, I might write out even longer form written, like almost essentially a blog post. The talk that I gave at Codemania just a couple of weeks ago, actually a lot of content did come from the Code as Craft post I wrote on the same subject. So writing that blog post was a really good way for me to organize my thoughts. Then a couple weeks before, I will start putting together slides based on this outline. So usually my slides will start with, you know, 5 or 6 slides that are the main, like, headers or main topics that I'm gonna go through. Like intro, here's the problem we ran into, and then Here's what we did to solve it, and here's the things that we learned, and what's next. Pro tip for any conference organizers out there: I'm not going to give you my slides 2 weeks in advance. I'm a professional. I will have them done, but I don't have them done 2 weeks in advance. I'm not gonna, like, start putting them together the night before, but I am iterating on my slides up until usually the night before.

**Bridget:** [00:18:18] I always find that so funny because even if it's a talk that I've given numerous times, I'm still going to keep changing it. And so if they really want an early version or they want, you know, I'm like, hey, I have all the slides from the last 3 times I gave it on my website. You go right ahead and look at those. Um, that's not what I'm going to be using.

**Ryn:** Yeah, I'm not going to just completely recycle a talk.

**Bridget:** So I think that that's one of the— I mean, I totally do. Like, I totally give the same talk again, but the problem is I always want to say something different and switch slides out. So that's why I can't guarantee it's going to look exactly the same.

**Ryn:** Yeah, I've definitely given talks that are like 90% similar, but there's definitely, you know, I like to update them, make sure that, you know, if I'm giving some background on Etsy that I have, you know, up-to-date numbers, that if I'm talking about, you know, next steps, I have the actual next steps and not last year's.

**Bridget:** So I actually like the, the smallest amount of time between 2 talks that was the same talk that I ever gave was literally at the same conference before lunch and after lunch. And this is not the give a talk at OSCON last year and then give it again the next day because they needed me to. This was actually this conference. It was a small local conference in Minneapolis. For some reason, actually scheduled their speakers to do that. Pro tip, not normal. Do not do this. But I said, okay, whatevs. I get their idea was that it would allow the attendees to go to more than one talk during the breakouts, and I was like, uh, or you could record them, just a thought. But anyway, so what they ended up doing was having me give it before lunch and after lunch. I used the same slide deck, I gave 2 different talks. Yeah, not even on purpose. I just like, you know, I had other things that occurred to me from one, from the discussions I had had at lunch that I wanted to say.

**Ryn:** [00:20:06] Definitely. I think other than that, in terms of preparation, I will run through my talk between 3 and 5 times. I find that any more than that and I will start to get bored by it. And then when I get— actually give the talk for real, I will rush through it because I'm like, wow, I've heard this all a billion times before. So that's just been something that I've discovered through trial and error for me. But like, this isn't some hard and fast rule. Like, I think if you're planning to start speaking, you have to, you know, kind of iterate and see what is the number that works best for you.

**Bridget:** Right. Well, and different kinds of talks are going to need different kinds of prep too, right? Like, for example, you've done— it wasn't exactly a talk, but you and Jen Davis did a full-day tutorial where you were like— or rather, full-day training at an O'Reilly conference or 2 where you were training people in a room all day. I mean, that's materials you have to have ready to go.

**Ryn:** [00:21:07] Yeah, that was very different because we did prep the materials, but we couldn't very easily prep— I mean, there was definitely some talking when we were explaining things, but so much of giving a training is interacting with the people who are like the students, essentially. And you can never predict, even if, you know, you have a survey that you send out and you ask people, how much experience do you have with X, Y, and Z? You're never going to account for all the variation of experiences that people will have or bugs that people will run into. Those trainings feel much more like you can try to be prepared, but you're never going to be as much because there's just so many variables. Nice.

**Bridget:** Now, you've also emceed Ignite a couple of times and you've given Ignites as well. Tell us about Ignite, first of all, what it is, and then how is it different prepping for an Ignite?

**Ryn:** So Ignite is a 5-minute talk where you have, I forget, is it 20 slides that auto-advance every 15 seconds? Yeah, and so the slides are auto-advancing, which means that they are going to keep going whether you're ready or not. So Ignites, I will actually, I will rehearse those much, much, much more than I will a full talk, because with a full talk, when you're in control of when your slides advance, you can take more time or less time as needed based on how the talk feels in the moment. But you can't really do that with Ignite. So I'll rehearse those a lot more in order to get the timing down a lot better.

**Bridget:** [00:22:47] Right, right. No, that makes, that makes perfect sense. And then the other kind of speaking that I know you have coming up at Velocity in Santa Clara this year is you're gonna be co-speaking. Can you talk a little bit about how that's different?

**Ryn:** Yeah, so co-speaking can take a bunch of different formats. I think you tweeted about this, asking people if they preferred, you know, people to switch off, or one person does half and then the other person does half. And I have only given— I've only co-presented once with one other person before, with Mike Rambetsy. We did a couple talks together, which was a lot of fun, and because I think It really depends on kind of the chemistry and the flow between the 2 speakers. I haven't seen a lot of co-presented talks where it's like 15 minutes of one person and 15 minutes of the other that really felt like having 2 people added anything. But if you have 2 people who feel like they're having a conversation, I think that goes a lot better. So I'm excited to see like where that goes at Velocity this summer. Laurie Daness and I are going to be talking about Nagios and how we have used it over the past 10 years at Etsy. So that's gonna be super fun.

**Bridget:** [00:24:09] Wow, so for that talk, like, do you and Laurie end up scheduling sessions to practice together or how does that work?

**Ryn:** We'll end up scheduling some. We have an advantage in that, you know, we work in the same office. So we don't have to deal with, you know, AV troubles, because those have never happened. But it's going to be kind of a similar process where we start by working on the slides, finding the content that we want to put together, and then go back and forth and figure out, you know, who wants to talk about which bits, and, you know, then run through it like it's a conversation and just see how it goes and what feels most natural.

**Bridget:** Yeah, absolutely. And I've done that myself as well. And because I'm not physically co-located with the people that I've done that with, there's been a lot of practicing over Hangouts. So, but you and Laurie are in the same office now since he, you know, made it to the US. Yeah. If people find this idea intriguing, if they want to speak at a tech conference, like what would you recommend as good first steps?

**Ryn:** [00:25:17] I would first start by thinking about what do you want to say? Like, what do you want to talk about? I think if you find something that you really care about saying to people, you're gonna give a better talk than if you are just talking to check something off a list. Not that there's necessarily anything wrong with that, but I think enthusiasm and passion, I guess, coming from a speaker generally makes for a more engaging talk than someone who is just reading their slides verbatim.

**Bridget:** Oh my gosh, never read your slides.

**Ryn:** If you have enough words on your slides that it takes people more than like 2 seconds to read them, you have too many words on your slides, I think.

**Bridget:** Well, and one of my coworkers, Michael Cote, just tweeted something that I thought— or no, he had a blog post that I thought was kind of profound where he was talking about for corporate presentations, when you're giving presentations inside a company, it really does you need a bunch of sentences and bullet points on the slide because people are gonna be passing that deck around without you talking over it. And they're really different, I think, than conference slides. And people who try to present a deck at a conference that's like a whole bunch of sentence-long paragraphs, it's just like, oh, please don't put that up on the screen. It's not readable and I'm just reading it and not listening to you.

**Ryn:** [00:26:36] Yeah, I think it probably depends on the conference. To, like, some conferences maybe are closer to that kind of, I guess, corporate feel or a more academic conference. You might be able to get away with that. But personally, it's not my preference. There is a sweet spot, though, of trying to make sure that your slides make sense without, like, a recording or a transcript of you, because there are definitely a few of my past slide decks where I put them up on SpeakerDeck after the fact. I'm like, this is just cat pictures with no context. It's like, this is not really going to be helpful to people down the line who didn't see the talk.

**Bridget:** Yeah, I have that problem too. I'm always searching for that balance.

**Ryn:** I think then the next steps are finding a conference that would be, I guess, a good fit for what you want to talk about. Because not every conference is going to be accepting every subject or every type of talk. Call back women.

**Bridget:** [00:27:38] That is so true.

**Ryn:** Yeah, yeah, like if you submit a tutorial to a conference that doesn't have a tutorial track, you're probably not gonna get accepted. And then you're gonna be sad, but, you know, if you— I think looking at past— if you know some conferences that you think might be good fits, looking at their past lineups and past schedules can be a good indicator of, like, what do they usually look for in the talks that they accept.

**Bridget:** Right, and I interrupted, but you were mentioning Callback Women.

**Ryn:** Yes, Callback Women on Twitter will tweet out CFPs, and that's been a great way for me to find out about conferences that are outside of my usual circuit. Like, it's not just any— like, it's not just ops or DevOps conferences. Like a wide range of tech conferences. So I think that's a really great resource. The Technically Speaking newsletter, I think, is also gonna be a good resource for people because they will send out updates about conferences that have CFPs open and also like if any travel or lodging is provided for speakers so that people can plan accordingly.

**Bridget:** [00:28:58] Yeah, we'll put links to those in the show notes. And yeah, let's talk about that for a minute in terms of like, if you're a new speaker, and let's just preface that with saying maybe you've spoken at something that isn't a conference. And I would always recommend, by the way, that people who are getting started just try your talk at a local meetup. Like, your local meetups are always looking for speakers, and especially if your meetups have lightning talks Like the Minneapolis DevOps meetup is, you know, tomorrow, so it'll have already happened probably by the time most people are listening to this. But like we have, you know, half a dozen or so people are just going to give lightning talks this, you know, this particular meetup. Some of those people may go on to do longer talks at some point, some may not, but it's a really good way to practice. But, um, for people who are just getting started and starting to think about what conferences might be good for them, like what would you say in terms of support from the conference that a speaker should expect?

**Ryn:** This is something that I have found varies incredibly widely based on the conferences. So some conferences don't pay anything, like they won't cover travel, they won't cover lodging. Some conferences don't even cover admission to the conference, which I think is kind of ridiculous.

**Bridget:** [00:30:15] I call complete bullshit on that. Yeah, that's—

**Ryn:** thank you, complete bullshit.

**Bridget:** If you're providing the content, you should not have to pay to get in to do the work.

**Ryn:** Yeah, like, it is, I mean, depending on the length of your talk, it's 30 to 40 hours of prep work maybe. So the conference, if they're not paying, is already getting 30 to 40 free hours of work from you. And on top of that, you have to pay admission? No, no.

**Bridget:** No, fuck that.

**Ryn:** So that's definitely—

**Bridget:** conferences, if you think we're subtweeting about you, we are.

**Ryn:** We are.

**Bridget:** Just knock that off.

**Ryn:** Yeah, so then there's travel and lodging. Again, this is something that I have pretty strong feelings about, because if your company doesn't have a budget to pay for you to go to a conference that you're speaking at, you're again going to be paying out of pocket to talk at these events. And a lot of conferences will try and tell you, oh, you're getting so much exposure. Exposure doesn't pay my goddamn rent.

**Bridget:** [00:31:22] I know, right? Like, I don't think that, you know, Starbucks is gonna take exposure in exchange for a soy latte.

**Ryn:** Probably not. Probably not. And I think that this— so there can be leeway that I'll give to conferences based on their size and their budget. Like, a new conference or a small conference obviously isn't going to have the resources available that some really big, well-established conference with dozens of sponsors is going to have, right? But I feel like if you're a conference that has been around for 5 years and you have, you know, so many sponsors that you can't fit them all on one page, if you're not providing travel and lodging for your speakers, you're taking advantage of them.

**Bridget:** Well, and I think that there's a lot of subtlety there too, because At some people's companies, especially if they're not working in a role where their job is specifically public-facing outreach, then speaking at a tech conference maybe is considered, you know, good PR, good for your hiring, and maybe it's coming out of a training budget. And so if you speak at a conference, you're taking away from the ability of maybe the rest of your department to go and have any training this year. And so like, even if your company technically maybe will cover it if you push, I like when a conference just says no questions asked. If you tell us that it's not, you know, um, basically I, the way I forget exactly how I put it, but if, if you tell us that you need this covered, we believe you.

**Ryn:** [00:32:56] Yeah, definitely.

**Bridget:** We're not going to sit there and say, well, did you use all your social capital at work to try to convince them to maybe pay for it?

**Ryn:** Could you send us a copy of your company's internal policy regarding travel? Yeah, I mean, if you can, if you can in any way work it into your conference budget as an organizer to help cover travel and lodging, you should be doing that.

**Bridget:** Yeah, I fully agree with that. I mean, especially because if you can, again, depending on your conference's budget, if you can get sponsors to cover this stuff, then yeah, maybe if one of your speakers works for one of your big sponsors, they probably don't need you to cover it. And I have in fact, in my organizer capacity, had speakers turn around and say, no, my company is happy to cover this. And I say, okay, I take them at face value if they say that. But if they say, no, my company is not going to cover this, I say, okay, no problem, we'll get this taken care of. I just think it's, it's the least you can do for the amount of effort somebody puts in to make your event successful.

**Ryn:** Yeah, definitely. And I feel like that's kind of the very least that you can do. I think trying to make sure that speakers feel welcome. Like, a little bit of interaction and outreach can go a long way. I'm a really big fan of having some sort of speaker event beforehand. It doesn't have to be like a big fancy dinner or anything, but just some sort of, you know, low-key thing where I can interact with other speakers and get to know them, especially if it's a conference that I've never been to before where I don't necessarily know anyone. Helps me feel so much more comfortable.

**Bridget:** [00:34:35] Yeah, absolutely. Like the, um, I spoke at SCaLE Conf in, um, Cape Town, South Africa. And while I had actually been to Cape Town before, years before, I had never been to this conference. I knew very, very few people. I think I knew a couple of other speakers, but I knew no organizers going in. I didn't know most of the locals, you know. So having just that little, hey, we're all just at this particular restaurant just come over, you know, snacks, appetizers, whatever, turned out to be a really good way to get comfortable with everyone before the conference kicked off. And that's— they did a great job of being welcoming, and I think that that's a good example of the sort of thing that is not even necessarily really expensive or difficult to set up.

**Ryn:** Definitely. I think also if you have speakers coming in from out of town, or especially out of the country, Like, let them know good places to stay in the area, good things to do in the area, because you might be very familiar with your own area, with your town that you live in, but not everyone is going to be. And, you know, it's— even if you travel a lot, it's still kind of uncomfortable to go to a new city, a new country. Maybe you don't speak the primary language, and if you're— if the organizers of the conference are just radio silence, leaving you in the dark, it, it can feel really kind of overwhelming and unpleasant.

**Bridget:** [00:35:59] Yeah, that's— I think that's a really good point. So then backing up a little bit, if somebody has decided that they maybe want to speak at some conferences and they're finding out that CFPs are this thing that they need to put a talk into, like, what do you— do you just write, you know, my talk will be about X? I mean, like, what has to be in this proposal typically?

**Ryn:** Yeah, that's, that's a good question. It can vary a bit depending on what the organizers are looking for. Having reviewed a fair number of proposals, what I'm looking for as an organizer, as a, you know, judge of proposals, is what is the audience going to get from this? And I guess, who is the audience, depending on the conference? Because some conferences will have multiple tracks or multiple, I guess, demographics of people attending. Like, there's gonna be engineers, but there's also gonna be, you know, sales and marketing people. So you really want to convey who is your talk intended for and what are they going to take away from it. Sometimes the abstract that you submit to the CFP will be the same little paragraph or 2 that ends up going on the conference schedule. So you want to, you want to tell, you know, the conference attendees as well, why should you go to this talk? What are you going to learn from it? What are you going to take away from it? Like, why should you choose this talk out of other talks that are, you know, potentially at the same time for multi-track conferences?

**Bridget:** [00:37:33] And you bring up a really good point. For our listeners who maybe don't attend as many conferences as we do, do you want to kind of go into more detail about what this whole conference track thing is?

**Ryn:** Yeah, so some conferences have one thing that you can be doing at any given time. So they might have 6 to 8 talks in a day, just one after the other. And at any given time, there is only one talk going on.

**Bridget:** And then there's the hallway track.

**Ryn:** Yes.

**Bridget:** I mean, because, you know, you're not my real dad, you can't make me go to that talk.

**Ryn:** Indeed. So the hallway track comes from if you're hanging out in the hallway of a conference instead of, you know, in the auditorium or wherever talks are being held, you might be talking with other attendees, you know, chatting about what you just listened to, what you took away from a given talk. And that sort of networking and interacting with people is the hallway track, which can also take place on Twitter these days.

**Bridget:** I like the hallway track lots and lots. Like, a lot of times you can watch live streams and you can watch conference talks on YouTube later. So the hallway track is one of the big— for me, one of the big differentiators for actually being at the conference.

**Ryn:** [00:38:41] Mm-hmm.

**Bridget:** But anyway, so for a single-track conference, you're saying that— and I think a good example would be Monitorama that you were mentioning. Yep. You don't necessarily have to write an abstract saying, you should definitely choose to come to this talk. If it's a single-track conference, like, people are gonna be coming to it for sure. But how do you write an abstract, or how do you position your talk for a single-track conference differently than for a multi-track conference?

**Ryn:** So I guess the way I think about it is, at a single-track conference, people have no choice I mean, I guess they could all go out in the hallway and refuse to listen to my talk, but mostly people are going to be there no matter what. So you really want to— I think for single-track conferences, you really want to be mindful of who the intended audience is of that conference. So if it is, you know, an operations-focused conference, you want to keep in mind that your audience is going to be operations engineers. And this is where looking at past agendas for the conference can really be helpful. Like, does the conference tend to select more, like, how-tos and tutorials? Do they accept more talks that are based— that are aimed at, you know, entry-level versus more advanced? Because if you— like, I personally love 101-level talks. Even if it's a topic that I know a lot about, because there's always more that you can learn. And I love the stories of, you know, how people approach something, because, like, people are going to approach things in different ways, and you can always learn from that. But if it's a very technical conference aimed at, like, really advanced developers or whatever, a 101-level talk maybe isn't going to be as appealing to them, and so it's probably less likely to get selected. So I'm thinking a lot about, you know, what are you going to be giving to the audience? Because really, talking isn't about you as a speaker. It's about the audience and what are they taking away? What are they learning?

**Bridget:** [00:40:50] And that's— I think that's a really good point. And you've done talk selection for larger, larger multi-track conferences too, right? Like OSCON. So can you talk a little bit about like tagging and tracks and how to submit a conference talk to a large multi-track conference and make sure it's, you know, in a place where somebody can identify which track it might go in, and like, you know, as opposed to, this is a talk that's a wild card. Can you kind of talk about that?

**Ryn:** Yeah, I think different conferences will use different, you know, submission processes or software, I guess. And one thing that has made it easier for something like OSCON is that they have— you can, when you're submitting your talk, I think it's probably actually required for you to select, is this a tutorial? Is it a 40-minute talk? Or is it a lightning talk? Because not every talk is necessarily well suited to every format. So, right. Sometimes, actually, I can't actually remember offhand if there were some proposals that didn't have that, and you're left kind of guessing. But that's never super great. I think what you want to keep in mind is, you want to, as somebody who's submitting, you want to make the life of the organizers as easy as possible. So if there are form fields to fill out for what type of talk it is or who the intended audience is, use those. Like, they're there for a reason.

**Bridget:** [00:42:30] Um, and I think also, like, don't leave things a mystery. Like, I think one of— I do, um, I help review talks for Velocity sometimes, for example. And one of the big— I mean, for a talk that otherwise sounds good and it's not an obvious vendor pitch or something, one of the things that can make people score lower is if everything is so vague. It's like, I will give you tips and tricks. It's like, okay, but I have no idea if your tips and tricks are going to be any good at all. Like, don't leave this a mystery. All right.

**Ryn:** Yeah, I think bullet points are definitely your friend. Um, one of the things I like about the Velocity and OSCON submission process is there was, um, like a long form and a short form, or I think they call it description and abstract. So one of those is for the organizers And one of those is what will go on the schedule. And generally, for the one that goes to the organizers, the submission essentially, you want to put a lot more detail in there. So if you can have a pretty brief outline of the main points that you're gonna cover, and then you can leave a little bit of mystery on the schedule. Obviously, you don't want to put the entire content of your talk in the description.

**Bridget:** [00:43:40] Also, I think that there's actually a third box. Like, I think that we're thinking of the same form, but I think that there's a really short one that kind of shows up if you hover over the talk. Then there's the description that you've written that isn't necessarily like a full outline. And then there is like the notes to the committee where you can write a ton more stuff.

**Ryn:** Yeah. And I think, I think there's definitely a sweet spot in how much to write. Like one paragraph is probably not enough. Any more than 3 paragraphs and the selection committee is just gonna be like, oh God, I have so many submissions to read and you want me to read this entire essay that you wrote? No. 2 to 3 paragraphs and maybe a couple bullet points or a little bit of an outline is, I think, the sweet spot. Because again, you wanna provide enough detail so that the audience and the organizers know what they're getting.

**Bridget:** You know, another thing that O'Reilly conferences ask for, and some other conferences do, but not all of them do, is they sometimes ask for a URL to a video. Of you talking. It doesn't even have to be the same talk. Can you talk a little bit about the, basically, the artifacts that you keep after a conference and like what you do with them in order to kind of curate your professional portfolio of this stuff?

**Ryn:** [00:44:55] Yeah, I definitely will download any video recordings if the conference makes them available. And conferences, please do this. It's good for speakers and it's good for attendees and hypothetical future attendees who want to know if they want to go to your conference. So I'll keep videos of those. I'll usually upload them somewhere if they're not like hosted on YouTube or Vimeo. And I have on my website a page where I have a list of the past speaking events that I've done, where I will put a link to the conference, a link to the slides. I put all my slides on SpeakerDeck usually right after I give the talk so I can then tweet it out before I forget. And then an embedded video if it's available, which then if a conference asks for, you know, any past speaking, I can just give them a link to this page.

**Bridget:** I think, and I do something similar, and I think that that's a lot of people when they see it are a little surprised, and I think that maybe not enough people realize that having something like this online that you can give people saves you and you know, the other conferences, a lot of effort because it shows them, it shows them you're serious.

**Ryn:** [00:46:11] Sorry, I stole the idea for my page from you actually.

**Bridget:** Well, I think it's other stuff that you can put on there that I definitely did put on there because it saves so much time eventually is the high-res, you know, headshot. And it doesn't have to be professionally taken. I think mine is one that my friend Julia took at dinner. I liked my smile in the picture. It's like a 2-year-old hairstyle, so I should probably update it eventually. But, um, but you know, any picture that you like how you look in it, um, just so that they— a lot of conferences would like to put a picture of you on their website. And also you need to have a bio written, and it doesn't have to be like everything back to kindergarten, but it's just, you know, a few sentences that say basically who is this person, what is their background.

**Ryn:** Like, I guess, you know, you don't have to like prove your credentials, but, you know, let the audience know what they can expect a little bit.

**Bridget:** Right, like, you know, is this person on the ops side of the dev versus ops divide? Or in my case, are they an evil marketing person?

**Ryn:** [00:47:15] On the marketing side?

**Bridget:** An evil marketing person with opinions on Bash. Okay, so when you've finished giving a talk at a conference, Like, what do you usually do? What's the rest of the conference experience like when you're a speaker at the conference versus when you're an attendee?

**Ryn:** Well, before I give my talk, I will get increasingly nervous up to the talk itself. This is even if I'm feeling confident about the talk, like getting up, you know, people have fears of public speaking and that's perfectly normal and I don't want Like, people shouldn't feel bad about being nervous. Like, it's a natural human response. So I actually prefer to speak earlier in the conference if possible, just because then I can, you know, relax and unwind afterwards and give more attention to the other talks that I'm listening to.

**Bridget:** Yeah, I do enjoy, like, if I'm done speaking, I think it improves the quality of my live tweeting of the rest of the conference because I'm not thinking about my talk. Yeah, but at the same time, when Lara Hogan, your coworker, was tweeting about her speaking later in the day gave her the ability to draw references back to other people's talks, and that also was actually kind of fun to do.

**Ryn:** [00:48:37] For sure, yeah, you're, you know, bringing all the different pieces together, and that can definitely make for a richer conference experience.

**Bridget:** I think one thing that maybe some speakers or some new speakers don't realize, or maybe some existing speakers don't do, is going to the other talks, I think, is a strategic value just because it's kind of nice to know what's been said in the conversation before you're going to stand up and put your voice in the conversation. Even if you just get to add a new joke about how this slide that you have up, Jess Humble totally used earlier, but here's what he said about it.

**Ryn:** Yeah, you know, and if the organizers have you know, put together a good lineup, the odds are that somebody is going to like steal everything that you were going to say are very, very low. But points can reinforce each other, or if somebody said something that you disagree with, you can say something like, oh, you know, Alice this morning said X and then Bob said Y, but you know, here's what I think. You know, they had some good points, and then you can, you know, because people might hear conflicting information in a conference as an audience member, you as a speaker can help, you know, synthesize and add your own, you know, 2 cents, which I think can be valuable.

**Bridget:** [00:49:52] Well, I think what's really great about that too is that just because you're speaking into a microphone in front of a, you know, on a stage in front of a projected image of some cat pictures, it does not mean that you are the only voice of authority who's ever going to be right ever again. And so there can be a lot of different opinions being shown, and I think like being able to kind of refer to the other ones and either reinforce them or give a, you know, a dissenting voice is pretty important. So like, TL;DR, go to the other talks, kids.

**Ryn:** It's going to improve your talk. Definitely. The other thing to keep in mind as a speaker the rest of the conference after you talk, people will be coming up to you and asking you about your talk or making comments on it. And depending on how introverted you are or how much of a people person you are, this can be exciting or draining or sometimes just annoying when somebody comes up to you afterwards and says, well, actually, have you considered this incredibly basic thing that anyone who has thought about this problem for 5 seconds would have considered? So typically, don't be condescending to the speakers. They've considered these things already. Oh my god, don't be an asshole.

**Bridget:** [00:51:05] I once had somebody come up to me after a talk and ask me if I knew what the stuff on my slides meant. They were specifically asking me if I knew what the sci-fi character that I made what I thought was a clever reference to, you know, who that sci-fi character was. And I was like, um, yes, that's Zathras from Babylon 5. Shrug, question mark. Like, are you fake geek girling me about my own conference talk? Like, what?

**Ryn:** I've had that happen, unfortunately. And excuse me, I'm going to go flip all the tables.

**Bridget:** Well, and that brings us to the exciting question of— this is more of a comment, less of a question—

**Ryn:** like, what do you do with Q&A? That is always a fun topic. I, depending on the conference and the audience, will sometimes strategically time my talk so there's no time for questions. I'm like, come find me afterwards, because I've actually found that there are sometimes fewer of the, this isn't really a question, but when people don't have a captive audience of an entire room full of people to listen to them. Because, you know, people like that, they're not asking a question. They clearly want everyone to hear how smart they think they are. And if they only have one person listening to them instead of an entire room, sometimes do that slightly less.

**Bridget:** [00:52:31] Yeah, I will admit, like, sometimes I'll look around and see if there's any questions, and if the speaker is eagerly awaiting questions and there aren't any, I will ask a question that is actually about the talk and that lets them elaborate a little more on something that they touched on. So like the strategic softball, because I mean, not necessarily, you know, too easy to answer to be not worth hearing. But like, the whole point of Q&A is to let the speaker talk more.

**Ryn:** Yeah, definitely. I don't know, it— like lightning talks, no time for questions. Well, generally people don't have questions, right? I think it depends on your personal preference. And some people will say at the beginning of a talk, please save all of your questions until the end, versus if you have a question during the talk, just raise your hand. And I'll get to you. So it depends on what you're comfortable with. And I think— I don't think it's required that you do Q&A on a stage if you, you know, make yourself a little bit available afterwards for people to come chat with you in person or on Twitter. Yeah, and that's—

**Bridget:** [00:53:37] I would also say, as a conference organizer, I love when the traditional mob that mobs the speaker, if the speaker can get them like slightly outside of the room, That is way better than staying up on the stage where maybe even leaving their laptop plugged in when the next speaker needs to get plugged in. So like depending on how much, you know, time there is between speakers, depending on how your conference is scheduled, I do— I'm very cognizant of the fact that something else needs to happen on this stage perhaps very shortly after me, and perhaps I need to get the hell out of the way.

**Ryn:** Yes, that's where it can also be helpful to have conference volunteers who will help move those groups of people and the speaker, or move people away from the speaker if the speaker is obviously trying to run away and decompress. But to just say, all right, everyone, let's take this out into the hallway because we've got to get set up here, which, if you don't have enough people staffing your conference as an organizer, that can just add one more level of chaos.

**Bridget:** [00:54:39] You know, something else I try to do as a speaker is have a designated person who like has my stuff while I'm on stage. 'Cause of course you, you're not gonna take your cell phone up there with you usually, and you're not gonna have your conference badge on, and maybe you're not gonna even have your backpack, your hoodie, your water bottle, whatever. Like a bunch of that stuff, you might wanna leave it somewhere and not have it piled up next to the lectern on the stage. And having a designated buddy, whether it's a coworker or a conference friend, I actually, uh, I bring my partner Joe, um, to my spouse to a lot of conferences and have him, because he's an AV professional, have him plug in my laptop and also deal with it afterwards. So like I can deal with the people who want to talk and feel safe knowing that my laptop is being packed up for me. And I have also packed it up for other, you know, co-workers and whatnot. And it's like, so if you, if you have kind of a buddy system of somebody who can deal with some of those details so that you can talk to the people who want to talk to you immediately after your talk, It's kind of nice.

**Ryn:** Yeah, having a conference buddy is also great if you can have them in the front row. So if you get nervous, you can just look down and they will smile up at you, and then you'll be like, okay, I got this, I got this.

**Bridget:** [00:55:48] I love sitting in the front row at your talks. Likewise. Well, and that's another thing too, is you mentioned Twitter, and I mentioned it a couple of times, and I feel like some people who don't go to a lot of conferences are completely unaware of this giant conference backchannel that's going on. So like, if you don't Twitter, you should probably Twitter. And you don't have to Twitter all the time if you don't want to, but you should probably be looking at the conference hashtag just so that you have some idea of what people at the conference are talking about.

**Ryn:** Yes, and if you're a speaker, you should have a Twitter and put it on your slides so we can live tweet. We love live tweeting, right?

**Bridget:** And I actually, I, some time back, I started putting my Twitter handle on every slide. Because when I would live tweet other people's talks, if they had like a difficult to spell— mine is 15 characters long, don't judge me, it took me a long time to get around to getting on Twitter— but to my eternal shame, my Twitter handle is 15 characters long. And if you're not familiar with how to spell my name, that's a lot to be trying to figure out if you only saw it on the first slide and then 10 slides in you want to tweet something.

**Ryn:** Definitely. And if you're trying to, you know, live tweet, you don't want to be sitting there like desperately searching through the conference program on your phone being like, did the organizers put the Twitter handles on there? Oh no, now I've completely not been paying attention because I was— just, just put your Twitter handle on your slides, it's easier for everyone.

**Bridget:** [00:57:07] It is so much easier. And then also, like, so people are gonna possibly tweet something complimentary during your talk. Um, I actually take all those tweets and embed them in the individual page I make for each time I, you know, give a conference talk. But even if you don't go to that length, I've actually had coworkers end up sending, you know, a link to one of those tweets, like, up our management chain of like, hey, look at this reaction to this conference talk. And then I get people saying, hey, this is wonderful. So it's kind of nice to have that external corroboration that you can take back and show at work.

**Ryn:** Like, hey, look, these are the good reactions. It can be a way of boosting, you know, your voice, both internal to your company and externally as well, because you know, if you're just getting started speaking and if other conference organizers see that your talk was really well received, that increases the likelihood that other organizers will, you know, maybe invite you to speak at their event. Right, and that's—

**Bridget:** I think that people like sometimes think of retweeting as something that just leads to the same, you know, cat pictures or the same political memes or whatever showing up on their Twitter list all the time. But I think strategic retweeting of things that people said about you at a conference, as well as things that people said about your friends' talks at conferences, is a good way to get more visibility out there. And it shows up again on the conference hashtag. So if you do it a little later, and then it gives people who maybe didn't see those talks an opportunity to have some idea of what the reaction from the crowd was like.

**Ryn:** [00:58:38] Mm-hmm. That's— I've actually not done that too much myself. I won't say never, But I still— part of me is like, oh no, I'm too polite and Midwestern to be that self-promotional. Oh God. Why not just do it?

**Bridget:** Everyone does. And honestly, Twitter allows people to turn off retweets for an individual. So somebody might have turned off all retweets for me. I would never know, and I don't care. And also, no one has to follow me on Twitter. Yep. So if they choose to—

**Ryn:** there is an unfollow button. Go ahead.

**Bridget:** The unfollow button is right there if they don't like what I'm tweeting. So I don't spend a lot of time worrying about whether or not people are gonna like it. Like, if they choose to read, cool. If they don't, that's on them.

**Ryn:** Yeah, for sure.

**Bridget:** I think that, like, the idea of self-promotion, when you're gonna speak at a conference, the conference is usually pretty excited and happy if you say something about it in a public forum ahead of time. Like, if you mention it in a blog post or if you tweet about it or whatever, Like from the conference organizer point of view, that's super, 'cause that's something that they can pick up and run with and show, hey, look, our speakers are excited about our conference.

**Ryn:** [00:59:47] Yeah, and it definitely says good things to hypothetical future attendees if the speakers are excited about the conference. So you're definitely doing conference organizers a favor by, you know, getting the word out there, getting other people excited.

**Bridget:** And then what you mentioned about tweeting with your slides later, I think different conferences have different things that they want. Sometimes they want you to like log in and upload them a specific place or whatever. One time I had a conference come to me, like they came up to me, um, it was either right before, I think it was even right before I gave my talk. And they were like, we would like the slides now. And I'm like, uh, I mean, fortunately I had already exported them to PDF and had them on my desktop, but I was like, kind of don't really want to plug your rando USB stick into my laptop right this second, but I guess that's what you're insisting on right before I get on stage. And it was just like, you know, so I think that sometimes they want them a certain way, but as long as you're putting them out there, you know, on SpeakerDeck or Slido or whatever it is that you end up using, there's a number of those sites. But as long as you put them out there, um, anyone who wants them can go get them. And that's specifically, it's usually it's a PDF export without speaker notes is what you usually get.

**Ryn:** [01:00:59] Yep. That's what I will almost always do, I think.

**Bridget:** I sometimes do an export with every stage of build if I'm using the builds for dramatic effect.

**Ryn:** I am way too lazy to figure out builds, so I don't do that actually.

**Bridget:** I can't believe how this time has flown. We're getting so close to our end time that I should probably start wrapping up, but I feel like there's so much to say here. I guess if you were talking to 2013 or even 2012 era Katherine, what advice would you give her? About the choices that she should make and shouldn't make around her conference speaking?

**Ryn:** That's a good question, because it's hard to A/B test your own life, and it's hard to tell if I had turned down that one conference that only gave me the exposure, you know, would I have gotten future conference invites? I feel like I actually did pretty well. I would definitely tell myself to maybe spread out my talks a little bit more. If you find yourself doing—

**Bridget:** [01:02:07] In terms of time or topics or what?

**Ryn:** In terms of time. Because there have certainly been months where I'm like, oh, I'm giving 5 talks in 2 months, and there's certainly people who do way more than that. I don't know how they do it, but I don't want to be away from my cats for that long. I also just— it's exhausting, especially if you're doing different talks at each one. And I wish that I hadn't been so nervous about giving more technical talks for as long as I was. I mean, part of the reason that I gave mostly, I guess, quote-unquote cultural talks is that I really enjoy talking about cultural stuff. But, you know, there's definitely that imposter syndrome part of me that's like, you don't actually know anything about computers. Just don't say anything. Everyone's gonna laugh at you. But, um, like, I do.

**Bridget:** And it turns out you do.

**Ryn:** Yeah, as it turns out, I've been in the industry for a decade. I do occasionally know what I'm talking about. Um, more than occasionally. Probably most of the time. Probably.

**Bridget:** [01:03:11] And also, for when people are trying to make decisions about topics, I would say you don't have to pigeonhole yourself as like only talking about culture or only talking about tech. But there will sometimes be trends. Like, I think 2015, I probably only talked about Docker like the entire year. And then I took a different job and I was kind of like, I don't really want to give the same talk about Docker, and I kind of want to talk about, you know, organizations and how they learn and how people in the organizations interact. And so that's what I want to talk about right now. Yeah. And I think having the self-confidence to say, this is what I want to talk about maybe it's not the right fit for your conference, and that's okay. Like, it won't always be the right fit for every conference, and like, that's fine. You know, having that, I think, is pretty valuable.

**Ryn:** It can also mean that you get a chance to then go to a wider variety of conferences. Um, so I spent like most of last year talking about DevOps at DevOps conferences. I mean, which, which I love, obviously. I'm writing a book on it. But like, Codemania in New Zealand was a development conference, which was way out of my comfort zone. Um, a lot of the development work that I've been doing has been taking me out of my comfort zone, but it was such a great experience to do something that was a challenge like that.

**Bridget:** [01:04:31] And basically getting to go talk about, you know, development in Middle-earth is— it's got to be some sort of mind-blowing, you know, cognitive dissonance right there, right?

**Ryn:** Yeah, I made sure to throw a ring into, into the volcano while I was there, just in case. Just in case.

**Bridget:** Gotta make sure. I love it. Um, yeah, so I think that speaking at conferences is something that it can seem like this thing that other people do that seems inaccessible. Like, people don't know, how can I get from I have ideas and maybe every once in a while every once in a while I want to rant about them to my coworkers or whatever, but I don't know how I can get from here to there. I think this, you've outlined a lot of really practical steps.

**Ryn:** Yeah, like internal events to your company, like lunch and learns or something like that. We have a running series of events that we call Ops School, where people will just talk on ops topics for like an hour a week. And that's a great place to introduce, like, technical talks that you might not feel as comfortable giving, local meetups like you said. And just remember, like, conference speakers are people too. Like, I used to be super intimidated by all the cool Etsy people who were up on stage talking at Velocity, and now I'm one of them. You can do it too. Totally. It's, it's—

**Bridget:** [01:05:58] we're all— we all started in the exact same place of, you know, sucking our thumb and being a little kid and not knowing anything about Computron. And whatever route we take to get to the part where we're standing on a conference stage, like, everyone else can do that too.

**Ryn:** Yeah, definitely. Great.

**Bridget:** So we should, uh, we should talk about— since we've mentioned some community event stuff, upcoming conferences— where are you going to be if people want to see you speak at a conference in the coming weeks, months, year? What do you have coming up?

**Ryn:** I am actually— I committed on my blog, so it's for real. I'm only doing 4 conference talks this year. I've stuck to it so far. It is only April. I will be keynoting Continuous Lifecycle London in May. Jess Humble is the other keynote there. That's going to be a lot of fun. Also, when I'm in the UK, I get to go to this festival called Muses of Metal and see one of my favorite bands. So that's super awesome. Awesome, which band? Draconian. If you like some really melodic depressing doom metal, A+.

**Bridget:** [01:07:08] So is it kind of like Opeth maybe?

**Ryn:** It's not the most dissimilar from that. I like that, not the most dissimilar.

**Bridget:** Nice, let's check that out.

**Ryn:** Okay, so you're gonna be at Continuous Lifecycle? Yes, like we mentioned earlier, Lori, Danessa, and I will be talking at Velocity about Nagios, and I'll be talking at Monitorama, and that's all that I have planned so far. And then, like, that's the end of June. I might have actually 6 months to relax and maybe have a social life and free time. I've heard of these things.

**Bridget:** I don't know about those things. I mean, well, you are running DevOps Days New York, so you're gonna have something to do.

**Ryn:** Yeah, yeah, that is right after Velocity New York. I forget the exact dates, but it is the Friday and Saturday after Velocity New York in, I want to say, September.

**Bridget:** Yeah, yeah, that's later in this fall. Okay, so yeah, we are hoping to have our CFP open for that sometime this month. Nice. Okay, so for DevOps Days New York, we will probably be a community partner sponsor for that, like Arrested DevOps will be. I would hope. And, um, if, uh, if we are, any ones that we are a sponsor for, the code is ADO2016. That gives people 20% off of a full-price ticket. So, um, ones that are coming up soon: DevOps Days Rockies, April 21st and 22nd. DevOps Days Atlanta, April 26th and 27th. Seattle, May 12th and 13th. Silicon Valley, June 24th and 25th. Minneapolis, July 20th and 21st. All of those ones, that ADO 2016 code will work. There's also a lot of open CFPs right now, so while you're thinking about what you want to speak about at DevOps Days New York, you could be speaking— or you, sorry, you could be submitting talk ideas to DevOps Days Washington, DC until April 15th, Salt Lake City until April 19th. The CFP for PuppetConf is open until May 2nd. Texas Linux Fest until May 5th. DevOps Days Amsterdam CFP, again the call for participation. I always read those as call for papers and I was like, I'm not going to write a paper, but it's like now call for participation, call for proposals, you know. Um, that one's open till, uh, May 30th. DevOps Days Chicago CFP is also open till May 30th. Um, and, uh, other community stuff, I guess, uh, rest of DevOps related, you can We have t-shirts and mugs, and they're at store.ararresteddevops.com, so you can check those out. Um, other stuff we can check out—

**Ryn:** [01:09:46] tell us more about Draconian. Yeah, so Draconian released a new album in October of 2015 that I've been listening to maybe on repeat since then. I can neither confirm nor deny this, called Sovran, S-O-V-R-A-N. So if you're into really beautiful melodic doom metal, check that out. I also found if you're more in the mood to, like, scream a lot and have a circle pit, a band called Walls of Jericho just released last month No One Can Save You from Yourself. That's more like hardcore, metalcore, something like that, which is a bit outside of my normal stuff that I listen to, but a lot of fun if you've been arguing with computers and want to get some rage out. I should clearly just have a podcast where I talk about metal all day.

**Bridget:** I think that that would be a pretty great, a pretty great podcast. All right, and, uh, let's see. I don't know if you had anything else that you want to tell us about or not.

**Ryn:** [01:10:47] Hmm, well, I gotta stay on brand, so metal and cats. If you like cats and you're like, I wish there was a site on the internet that was nothing but heartwarming stories about cats, complete with pictures and videos, lovemeow.com is just that. It is like nothing but heartwarming cat stories. Like, this cat adopted a human and look how cute it is. This cat was abandoned as a kitten and then some human rescued him and now he's all grown up and fluffy.

**Bridget:** Oh, okay, right after this podcast I guess I'm going to be spending some time there.

**Ryn:** We know where everyone's afternoon is gonna go.

**Bridget:** I know, right? And By the way, are you the one who tweeted that adorable cat? I think it's in Japan somewhere that rides the train.

**Ryn:** Yes, I wish there was a cat like that in New York.

**Bridget:** I think it's like the cat like commutes and rides the train on its own and goes where it wants, and like people just—

**Ryn:** is super polite and will move over to take up only like the smallest amount of seat possible.

**Bridget:** [01:11:47] It's not doing any kind of cat spreading whatsoever. None of that. Unlike, you know, cats in real life that seem to cat spread all over the entire couch, right?

**Ryn:** Yeah, it's fine. I wasn't gonna sit there.

**Bridget:** It's not like we humans wanted to use the couch.

**Ryn:** No. And then on one last cat-related note, if you do want to buy the ridiculous t-shirt from my ridiculous metal band Necro Atsume, that is teespring.com/necro-atsume. That's N-E-K-R-O dash A-T-S-U-M-E. Because cats. Because cats.

**Bridget:** We'll definitely have a link to that in the show notes. I'm afraid that I can't possibly give you a list of awesome things like all of those, so I'll just say the last couple months I've been doing a lot of traveling, speaking at conferences, and my very short reviews of countries and places. South Africa, you should definitely go to Cape Town. It is kind of like Amsterdam except for no canals and instead, uh, you know, giant weird mountain just kind of hanging out over the town with a flat top. Um, go to the top of Table Mountain. The view is gorgeous. Uh, the people are super nice. Really enjoyed Cape Town. India is less relaxing but very educational. And if you're gonna go to all the effort to go to India anyway, you should definitely go to the Taj Mahal. And if you do that, it's worth the extra effort to get a hotel in Agra and stay overnight the night before and go and actually see the Taj Mahal at dawn. I thought it sounded kind of gimmicky and, you know, like a hoax, like why do we care what time of day it is? The quality of the light changes the way the glowing marble looks. So it's like pinks and yellows and not just a flat white that you can imagine from seeing pictures. It's like, it's truly amazing looking first thing in the morning. And I am not super big on getting up super early, but that is— that was definitely worth it. Uh, we also, um, my spouse and I spent a day and a half in Paris as well, which Paris is always lovely and generally more relaxing than you would give it credit for necessarily. Like, the— I've— last time I spent any significant amount of time in Paris was in like the '90s, and I remember a lot of really cranky people who would pretend they don't speak English, and that does not seem to be as much a problem anymore. So, um, so yeah, the, uh, in general, I would say if you're, if you're going to travel for your conference speaking, build a couple of days in on one side or the other so that you can actually do a little bit of touristing, because that's, that's usually worth it.

**Ryn:** [01:14:29] I mean, wouldn't you say? Definitely. I have— I'm lucky enough now that I can choose to speak at conferences in countries or cities that I want to go to, and then I will build in a couple days, usually afterwards, again, so I'm not stressing about my talk and I can relax, to do some sightseeing.

**Bridget:** Definitely worth it. Okay, so back to ADO stuff. We have a newsletter, arresteddevops.com/bananastand. It's the best way to know about upcoming podcast episodes, and cool news with DevOps. Thanks to our sponsors. Be sure to visit them at ararresteddevops.com/10thmagnitude and ararresteddevops.com/datadog. And thanks to Katherine for joining us.

**Ryn:** Thanks for having me. It is always lovely to chat with you.

**Bridget:** This is, this is always a good time. And, uh, it's kind of fun that it was just us. Uh, Matt and Trevor couldn't make it this time, but I kind of like just the Bridget and Katherine show. We might have to do this again.

**Ryn:** Yeah. I, I would subscribe to that newsletter.

**Bridget:** All right, uh, we'd appreciate it if you'd visit ararresteddevops.com/itunes and leave us a review in the iTunes Store. We'd love to know what you thought of this episode, so please leave us comments at ararresteddevops.com/speaking. Be sure to check us out at ararresteddevops.com— why do we say that again?— or @ArrestedDevOps on Twitter. We're always happy to get your input, ideas, or feedback. Please let us know any ideas you have for future episodes. I'm Bridget at Bridget Kromhout. We're Arrested DevOps, and remember, there's always DevOps in the banana stand.
