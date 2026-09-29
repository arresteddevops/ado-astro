**Brian:** [00:00:00] Writing a book is very similar to having a baby. When you have that first baby, you're like, oh, this is amazing. I will never do this again. This is amazing.

**Bridget:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Bridget Kromhout. And show notes for today's episode can be found at arresteddevops.com/gophers. Before I intro our guests, a word from our sponsors. ChefConf will be held May 23rd through 26th in Chicago. Chef has been a longtime supporter of the DevOps movement and of this podcast. ChefConf will have talks on infrastructure automation with Chef, compliance automation with Inspect, application automation with Habitat, and a ton of other relevant content. Register with discount code ADO2018 to save 10%. Visit chefconf.com for all the details. And remember, code ADO2018 gets you 10% off the ticket price at chefconf.com. GoCD is the on-premise open-source continuous delivery server created by ThoughtWorks. With GoCD's comprehensive pipeline modeling, you can model complex workflows for multiple teams with ease. And GoCD's value stream map lets you track a change from commit to deploy at a glance. GoCD's real power is in the visibility it provides over your end-to-end workflow. So you get complete control of and visibility into your deployments across multiple teams. Say goodbye to deployment panic and hello to consistent, predictable deliveries. To learn more about GoCD, visit gocd.org/arrested to download. It's completely free to use. Commercial support and enterprise add-ons, including disaster recovery, are available. Super excited to have a couple of my teammates on the show. First, Brian. Brian Ketelsen, let's start with you. Like, what's your elevator pitch?

**Brian:** [00:02:04] I don't know if I have an elevator pitch. I think the package sells itself. No, I'm just kidding. My, uh, my whole career has been all over the place in IT, starting with an internet service provider in Wyoming back in 1993. I was the, like, front desk clerk there, and that really got me kicked out into the whole internet and programming. I was doing billing for that ISP on 3x5 index cards, writing each payment on the back of the index card, and I said, there's got to be a better way. So I downloaded a copy of Microsoft Access or I bet I didn't download it, come to think of it. I probably installed it from a floppy disk, but Microsoft Access 1 or 2.0, and automated the whole billing process, and it just went crazy from there. So I've been a DBA, I've done data warehousing, I've been a CIO, programming forever, and it's just, it's my passion. I love it so much.

**Bridget:** [00:03:05] Yay, awesome! And probably, uh, full disclosure, These are my coworkers, I work with them, but give us the— and what do you do now?

**Brian:** So I'm a Cloud Developer Advocate at Microsoft, and just recently in the last week or two, we formed a new team that focuses almost entirely on open source. So we'll be creating new open source projects and contributing to others' open source projects. I'm really, really excited about that. There's nothing like combining the passion of open source with getting paid.

**Erik:** Love it.

**Bridget:** Okay, awesome. So, we have 2 guests today. So, we have Brian, and then we also have Erik St. Martin. So, Erik, you wanna give us the quick summary of what brought you to this very moment?

**Erik:** So, I was born on a gloomy morning in— I wanna spend a lot of time, you know, thinking about the '90s, but let's Uh, so I got into computers, uh, in my teenage years, and eventually, uh, people started offering me money to do consulting work, and I was like, you can get paid to do this?

**Bridget:** [00:04:14] Um, it's the best.

**Erik:** Yeah, so similar to Brian, I've kind of done just about everything. Um, I started out working for companies doing some, uh, web design and web development. Um, I was, you know, the IT and programmer person at some smaller companies, and That was kind of fun years too because you learn a lot about a lot of things, right? They're like, oh, we have a predictive dialer, it's having problems, do you know anything about telephony? And you're like, no, but I'll figure it out. So, my career kind of took from there. I started kind of front-end. I worked for Disney for a number of years on all their e-commerce platforms for Disney World. And then I sort of got into distributed systems and databases, kind of fell in love there. And I've slowly been working my way down the stack since then.

**Bridget:** Plus, you're also interested in security, so there's that.

**Erik:** Yes. So that is actually what made me want to be a programmer. I started out writing no-CD cracks for video games that my friends had and I couldn't afford to buy. So I would hack the games so that I could play them when they took the CD back. But yeah, so that's always been a love and passion of mine. I've never done it full-time, but I do a lot of CTFs and stuff. In my spare time for fun.

**Bridget:** [00:05:28] Nice. And then what you're doing for your day job right this moment?

**Erik:** Yes, so I'm also a Cloud Developer Advocate. I recently just joined Brian's new team for open source. Prior to that, it was kind of specializing in distributed systems.

**Brian:** Nice.

**Bridget:** Okay, so I wanted the two of you to come on ADO and talk about all things Gopher because I feel like every time you're in any kind of ops-ish context right now, people start talking about writing Go. And for our listeners who might not write a lot of Go, and they think, is it called Go, or is it called Golang? Or do they just say Golang when they're trying to Google? Because it's impossible to Google for something called Go. A little ironic coming out of Google, isn't it?

**Erik:** I mean, it's similar to Ruby, right? Ruby's website is RubyLang. Right. So, yeah, it's just a search term. It's kind of actually kind of odd that neither Brian nor I in our history of computing mentioned Go. And it's been a really big part of our lives for, what, 7 years now?

**Brian:** [00:06:33] 7 or 8 years. Yeah.

**Bridget:** So, let's get the superhero origin story. How did you get started writing this particular programming language? What drew you to it? What's in it for, you know, you or other people who are interested in writing this sort of thing?

**Erik:** So, chronologically, Brian started before me, so I'll let him Talk about how you got into it.

**Brian:** So, I saw the Go announcement in 2009 when it came out, and I was interested, but it just— there wasn't much to it. So, I downloaded it, and I played with it a little bit. It wasn't until maybe 6 or 8 months later that I had a problem that required some concurrency, and I thought, well, maybe I'll try this Go. We had a big Ruby on Rails monolith, and it just was not working for meeting our SLAs, calling out multiple data sources, getting lots of things from lots of databases. So I tried it in Go and it blew the doors off of what I expected out of concurrency. I was just shocked. And that was kind of the end of the line for me. Once I saw how easy it was to— easy, maybe not a good term, but how relatively easy it was to do concurrency in Go, And that was just, that was it. I was a Go fan from the start.

**Bridget:** [00:07:53] So, some of us in this conversation have computer science degrees, maybe some of our listeners don't and haven't spent a lot of time thinking about programming theory, just hacking things together to actually get to their goals. So, can you give the quick high-level overview of why concurrency, which you mentioned a couple of times, is something that is relevant and observable that you would notice as a problem in your programming? Remember that our listeners are more, like, ops-ish crowds, so they may not be as familiar with the theoretical underpinnings.

**Brian:** Sure. And I'm not really that theoretical either, which is good. I'm more of a write programs and get it done kind of guy. I don't know as much as Erik does about the underpinnings. But Ruby and Python both historically can only execute on one core at a time. They can only operate one instruction at a time.

**Erik:** But yeah, there's some I/O stuff. If you're blocking on I/O, things can actually run in parallel, but there's something called the global interpreter lock. So really only one thread can actually interpret the code itself at a time.

**Bridget:** [00:09:01] Yeah, so when people want to write things that are going to be operating in a more, say, high-performance scenario, they're going to care a lot about what exactly is gonna be blocked or waiting.

**Brian:** Exactly. For time-sensitive things, even for things like web servers, if you're getting a lot of requests at one time, but you can only process them sequentially, you're slowing yourself down. And Go has a lot of really nice built-in concurrency primitives that make it relatively easy to do more than one thing at a time, up to the number of cores on your machine. So Go has this concept of goroutines, which are really, really lightweight, low-memory threads. And I use threads lightly, they're not really threads, but lots of goroutines run on a single OS thread, and you can just do a ton of things at once in Go, and it feels really light and fast. And that was the thing that really drew me in.

**Erik:** Yeah, I mean, so on top of just the performance and actually really running in parallel, The code, the concurrent code that you're writing is much easier to reason about, like looking at it, it's much easier to understand than traditionally because threading was added to a lot of languages after the fact and Go kind of designed its language thinking about concurrency from the beginning.

**Bridget:** [00:10:28] So thinking about concurrency as a first-class citizen. Design decision that makes a difference in terms of performance. Wow.

**Brian:** Can we record that and put it on the GopherCon website? It's pretty good.

**Bridget:** Okay. So, this is— you're talking 2009. How did Erik— did you start programming Go because Brian was programming it?

**Erik:** Yes. So, Brian and I have had, like, a history of working together. So, in 2009, same thing, when it came out, I remember I was at Disney at the time and a crowd of us like got around and we were playing with it and we're like, this is really cool. It didn't really have like a selling point to us, like, oh my God, we have to use this like now. But it was kind of one of those things that looked at and it was interesting. Fast forward 2 years, I was hunting for a job. I tweeted that I was looking. Somebody said, hey, I know somebody who needs some help. And I interviewed for the company that Brian was at. And apparently, the service he had written, he was too busy with CIO stuff and needed somebody to maintain it. Nobody wanted to maintain it. So he's like, well, how do you feel about learning Go? And at that point, you know, I had been using Ruby and Java and things like that for a number of years. I'm like, yeah, I'm down. Like, it's— I love learning new things. And That's the whole thing. Like, we've told people, it's really hard to have an elevator pitch, but as soon as you start writing stuff in Go is when you start falling for it. And that's sort of what happened there as I started working on that project that he kind of left. And those days were much more difficult. We had makefiles and the language was changing like once a week.

**Brian:** [00:12:14] In the early days of Go, before it reached 1.0, they measured their release milestones with an R number. So, R56, R57. Releases were, I don't remember if they were weekly or close to weekly, but they were, it was a pretty fast cadence of releases. And R56 was the first version that we put in production. And it wasn't until significantly later that Go hit 1.0. So we had some migrations along the way, but Go, the team made that so amazing. They shipped a tool called go fix, that would rewrite your old code to meet the new changes that they made in the language. So, if they changed the syntax of a particular function call in the standard library, you could just type go fix and it would go fix the older syntax into the newer syntax. And almost all of the time, it just worked perfectly. It was pretty awesome.

**Erik:** I was just gonna say, there's only one case I remember where we had to manually fix stuff, and that was when they introduced rune. Yeah.

**Brian:** [00:13:17] But if you're gonna ship breaking changes, ship it with a tool like go fix, 'cause that's awesome. It's made everything better for us.

**Erik:** That's part of where the love is, right? Like, you see in the creation of these things how much they care about the developer, you know, that they took the time to actually build something to fix the code for you so you don't have to.

**Bridget:** Right. Nice. So now, the two of you and another author co-authored a book called Go in Action that was published in November 2015. Did you have to run some sort of go fix to make sure that the book was up to date if Go was changing that quickly?

**Brian:** So, the nice thing about Go is that when 1.0 was released, they froze the API. So, they'll only add new features, they won't remove or change any old features. So, anything that compiles on Go 1.0 will compile on Go 1.10. And that's really awesome. So, our book, even though it's now 3 years old, it isn't out of date at all. And we didn't have to worry about the things that we wrote becoming stale or old.

**Bridget:** [00:14:20] Well, until, like, there's a Go 2.0 that I know there's ongoing discussions about, right?

**Brian:** Exactly.

**Bridget:** So, are you gonna write a sequel? Do you have additional authorial intent?

**Brian:** I have time booked this afternoon, actually, to finish a proposal for O'Reilly. And I can't talk about the project yet because it hasn't been accepted, but it is with a co-author, and I won't even speculate on the title. But yes, there's another Go book in my future, probably, if I can get around to writing the proposal for it.

**Bridget:** Okay, we can't speculate on the title, but can we at least speculate on the animal? I know authors don't get to pick their O'Reilly animals, but if you could pick it, what O'Reilly animal would you want?

**Erik:** Oh, wow. Has anybody taken a gopher yet?

**Brian:** I don't know. I would love an otter. I think otters are adorable. I follow all of the otter picture things on Twitter because they're just so cute.

**Bridget:** Oh my God, I love it.

**Erik:** It's funny how writing works. It was way more work than any of us thought it would be. And after you're done, you're like, I'm never going to do this again. And then a few years pass and you start thinking, it'd be kind of nice to write another book. And it's, it's almost like you forgot how painful it was.

**Brian:** [00:15:39] Yeah, writing a book is very similar to having a baby. When you have that first baby, you're like, oh, this is amazing, I will never do this again, this is amazing. And then like not even 10, 11, 12 months later, you're like, oh, we need another baby.

**Bridget:** It took me about 15 years to forget how annoying kittens were. And I gotta say, when we got one couple years ago, I was like, uh, I don't remember the cat never wanting to sleep and wanting to attack me at 4:30 in the morning. Is this normal? And the vet's like, oh, the vet's like, oh, don't worry, they'll calm down. I'm like, when? Oh, somewhere between ages 4 and 6.

**Erik:** I'm like, oh, that is a long time from now.

**Bridget:** I don't think that's really far in the future.

**Erik:** I'll tell you what, you watch the cat and you bring it back in 4 years.

**Bridget:** Oh, but Fortunately, he was attacking the blinds right before we started, and he's now sleeping in a tiny cat pool right there. So sleeping in a patch of weak, tepid summer or winter sunlight. So, okay, so, um, I wanted to talk a little bit about your podcast because the two of you are in fact podcasters. You podcast with Go Time FM, and I'm curious about a few things like what motivated starting a podcast? And then how do you go about, like, you know, selecting your guests, structuring your episodes? And then, of course, you have your wonderful co-host, Carlesia. So, like, I don't think she lives in Florida or worked with either of you. So, like, how did that start? I'd love to hear just about your podcast origin story.

**Erik:** [00:17:12] Yeah, she lives in California. It's actually interesting trying to think about how that started. We got involved with Changelog, who produces the podcast, Um, for GopherCon, um, they invited us on the show, um, to talk about it. And that was before our second year, I think. And then, um, we also, we had like a really good relationship with them and, uh, they started coming to record, um, B-roll footage and take pictures and produce kind of like our, um, promo videos from the prior year. Um, those are on YouTube. Um, And at this time, Changelog was kind of rolling out of like being a part-time thing and they were turning it into Changelog Media and they wanted to produce other podcasts. And I forget how the topic came up. I want to say Bill and Carlesia were initially talking to them and we didn't know. And we came to Changelog suggesting we should have a Go podcast. And he's like, well, we're, we're actually already in talks about that. And then we sort of— I forget how the decision was made, but we sort of decided between us that it would be cool to have like Brian and I and Carlesia kind of merged our two groups wanting to have a podcast into one.

**Brian:** [00:18:32] And it worked out really well. It's a good cast. The three of us cover lots of different angles and it's fun. I like the shows quite a bit.

**Bridget:** I really love the fact that you record on a pretty frequent cadence and you almost always have all of your co-hosts co-hosts. And I, as you will note, that scheduling is always tricky when we have multiple co-hosts who are in different time zones or traveling or whatever. And, uh, so sometimes we have more of our hosts than others. So just kind of like, how do you, how do you, uh, get your episodes on such a cadence? This is not necessarily aspirational. I'm not necessarily committing to do this, Stratton, when you listen to this.

**Brian:** But it's hard. But we decided early on that We wanted to have 3 co-hosts always. So when we're— when one of us is out, we'll invite a guest to sit in for them. We don't do that as often as we used to. These days, more often than not, we'll just not have a show if one of us is traveling because we're always traveling really far. It's not like we're traveling to Orlando.

**Erik:** [00:19:40] I mean, if there's one of us missing, we'll tend to do it. But if more than one are missing, we'll probably just skip the episode. But yeah, we've had a few guest hosts. Johnny Borsico, we've had Bill Kennedy, Ashley McNamara.

**Brian:** We had Kelsey Hightower guest once.

**Erik:** Scott Mansfield. So it makes it kind of fun. And I think because of the format of the show, it works because we tend to basically have the guests be essentially a co-host too, right? Everybody's equal. Anybody can change topic. It goes wherever it goes. So it works really well for just having regular people, having other people jump on because we format the show kind of like we're all sitting around just having a conversation at the dinner table and people get to be a fly on the wall. So with a format like that, it doesn't require so much of having a specific host who can lead the direction.

**Brian:** [00:20:41] Yeah, we don't make a topic generally. We don't do anything other than really loose notes on the things that we might want to cover, but always the conversation leads itself and we don't ever steer it. We just let it do that. Which makes it fun.

**Erik:** What do we have, 65 episodes now?

**Brian:** We just did our 65th, yeah.

**Bridget:** Cool. So the reason I asked about that is because while People sometimes laugh when it's like, oh, your podcast just talks about podcasting. But I also think a lot of people want to try, whether it's writing a book or running a podcast, or the next thing I want to talk about, which is GopherCon, running a conference. Like, I think a lot of times people look at someone else's endeavors in that, you know, sort of realm, and they wonder, how do I get from here where maybe I have an idea to there, which is actually having it happen. So, you run obviously a pretty well-known conference, GopherCon, and it's about to have its 5th year. And I want to hear details about that. But before you tell us what's going on for this year, how did that start?

**Brian:** [00:21:48] It was a dare.

**Erik:** Yeah. I think to your point, people look at the endeavors and it's like, oh, this person does all these things. A lot of it is a door opens and you either choose to walk through it and follow it through and see what happens, or you stay reserved. And a lot of the things that we've done were kind of things that seemed like opportunities and we kind of ran with it. Even the book. The book started out because I wanted to tech review. So I tech reviewed some books and there was a Go book coming out by Manning and I wanted to tech review it. And I think they said it was stalled or something. And they asked like, would I or anybody I know like to write the book? And Brian and I had discussions and stuff and we're like, screw it. Let's do it. How hard could it be?

**Bridget:** Right.

**Brian:** How hard can it be?

**Bridget:** Famous last words.

**Brian:** Yeah. Same with the conference. How hard can it be?

**Erik:** So yeah. And the same thing, you know, that, that was triggered through almost like a dare on, on Twitter and some conversations, same thing. Well, how hard could it be?

**Bridget:** [00:22:57] Narrator, it was in fact hard.

**Brian:** You know the old maxim, though, that the journey of 1,000 miles begins with one step? That's true for books and conferences and podcasts and all of that. You know, when somebody said, I dare you to run a Go conference, I registered a domain name. That was a step. And then the next thing you do is you start thinking, well, where are we gonna do this? That's a step. And you just go from there. Each one of those steps isn't nearly as complicated or hard as the the project as a whole, but they're all just single steps. When you want to write a book, the first thing you do is start thinking about what's the premise of the book, what am I trying to teach, and then you maybe write an outline, and then maybe an elevator pitch for the book, and then you ask your friends if they have any contacts at publishers, and it's just, it's one step at a time.

**Bridget:** Yeah, yeah, absolutely. Okay, so this one step at a time has brought you to a conference. Wow us with some how small it started and how big it got. Give us your GopherCon pitch.

**Brian:** [00:23:57] Erik's good with the numbers. I'll let you do the first-year numbers. Those are fun.

**Erik:** The first year, Brian kind of stated, like, it was almost a dare. It was kind of conversation back and forth. Like, there should be a Gopher conference. And Brian was like, I know, you know, Erik and I have been saying that for, like, 2 years. And somebody's like, well, you should do it. And we did. But I think we were hoping, because at that time, This was mid-2013. The Go community wasn't nearly as large as it is now. And I think we were kind of hoping for even 200 or 300 people in one place. You know, for us, that would have been amazing. And we ended up selling out the venue and having to rearrange the way it was set up to accommodate 750 people our first year, which, yeah, we're like, wow. And even, we call it Community Day now, but The first year we had this idea that everybody leaves the following day at random times. So let's just reserve this space and we'll call it Hack Day. And then that's your time to just hang out with community members in person. And I remember Brian and I are like outside and through the glass you could see the escalator. And we thought, I don't even know, I thought we thought like 20 or 30% of people would stay.

**Brian:** [00:25:16] We were expecting 100 people on that. You know, just the people who were waiting to go to the airport.

**Erik:** Yeah, bring your suitcase down, hang out with some friends before you go to the airport. And we just keep watching more and more people pour down and we're like, we're gonna have to feed these people.

**Brian:** Yeah.

**Erik:** So it was kind of funny, like reminiscing on like that first year, there was a lot of pain. Um, as Brian said, you kind of make one step at a time. Um, I think we underestimated how much work it was and how much help we would need and how much, just how expensive it is to run a conference. So there was a lot of close calls and wedding, like, Brian, we're gonna lose our houses, man. Yeah, the first year was tough, especially with hotel attrition. These are things you don't realize going into it. Like, hey, if people don't book the hotels that you blocked, you're paying for them. You're like, wait, what?

**Bridget:** Yeah, 80% commit is a real bear.

**Erik:** It's scary.

**Brian:** It really is. The hotel attrition for the last 2 years has been much better because we hired Convention Designs in Colorado to help us manage all that, and they really know what they're doing. So I don't sweat about the hotel attraction anymore. But the first 2 years, it was, it was touch and go, you know, the, the second year we did the conference, I think we ended up losing a little bit of money.

**Erik:** [00:26:39] Yeah.

**Brian:** And $10,000 or something like that.

**Erik:** But we negotiated it down because signing a contract the next year, and these are all games you learn to play. And it's just, it's a learning experience. But reminiscing on those early times is fun because so many community members like It never occurred to us how long it would take to stuff 750 swag bags. We're like, oh yeah, we'll, we'll get there the day before, we'll, we'll, we'll stock them during the day, and then we'll go off to the pre-event that the Denver Gophers meetup group was having. And now—

**Bridget:** and it never, it never occurs to you until you live through it exactly how long it will take for 750 people to take a bathroom break.

**Erik:** And it was funny though, because, you know, at that time, Brian and I weren't really well-known in the community. Like, we were on mailing lists and stuff, but we were nobodies. So, it was really interesting, like, how many people were like, all right, we're gonna give these people money. If they say they're gonna throw a conference, we believe them. And it was really interesting, the trust that people had. And then even just, you know, the who's who of the Go community helping us stuff bags. Yeah.

**Brian:** [00:27:50] All of the, you know, the committers to the Go project, the pillars of the community are downstairs in the Marriott in Denver stuffing bags with us in a great big production line. It was, it was such a great community feeling. And I, to me, the community has never changed from that. Yeah, it's been such an inclusive and welcoming community. And we both, Erik and I, do everything in our power to keep it that way.

**Bridget:** Awesome. So, and of course, you're managing growth while that's happening. So where are your stats like now? What was last year and what do you anticipate this year to be?

**Erik:** Yes, in 2015, we were roughly 1,200. 2016, we were 1,400. And then we sold out last year at just over 1,500, including staff. So, this year, we're kind of predicting that we'll hit around 1,800 people.

**Bridget:** So, what you're saying is if people want to go to GopherCon, they should probably go to the GopherCon website. The link will be in the show notes. Pretty much now and get their tickets?

**Brian:** [00:28:54] Like, yeah, so probably time, but buying early definitely doesn't hurt.

**Erik:** Yeah, I, yeah, I'd, I'd love to say like, yes, everybody buy their tickets now. Um, we, we actually get a really big swarm of ticket sales when we do the, um, pre-release of the tickets, when we kind of announce and set up the website and everything and open our CFP. You know, we get a couple hundred people who register then. Um, most of the sales come in after we announce speakers, so When you see that happen, it's time.

**Bridget:** And your, your CFP and sponsorship and registrations are all available right now, is that correct?

**Brian:** Yes, that's correct. And you can see, if you go to go4con.com, you can see all of the information and a link to the CFP, a link to buy tickets, and there's a little Contact Us button where you can get information about sponsorship if you want to. The CFP is hosted on papercall.io. Which is run by Mark Bates and a friend. I don't remember Mark's friend's name, but we've really enjoyed using PaperCall for our CFP. Finally filled the hole in CFP management for us, which is awesome.

**Bridget:** [00:30:02] Always good. Um, okay, so everyone can see you at GopherCon, and that is when?

**Erik:** That will be late August.

**Bridget:** We'll have the dates. It's like the 3rd week or so in August, 3rd or 4th week in August, but we'll have the dates in It's, um, the 27th is the workshop day, 28th, 29th are talks, and then the 30th is our community day.

**Erik:** And if you go, I highly recommend staying for community day because it's amazing. We have, um, we have, uh, the GoBot team there, uh, the hybrid group. They set up a room and they bring all kinds of electronic stuff and you can program electronics with Go. They'd have drones and all kinds of fun stuff. Ron is amazing. And then a lot of people will do workshop rooms that are free to attend. And then we just kind of have like free-for-all space for you to get together and have birds of a feather or hack with people from your favorite open source projects. Last year we had a Go contributor room where if you wanted to contribute to Go, all of the Go team was in there. They were helping people get set up and get their first patches into Go and they kind of gamified it. It was a lot of fun. We haven't discussed with them again, This year it was a big success, so I'm guessing we will do that or something like it. But there's always stuff like that on Community Day. So it's really great to come for the extra day because on top of like being stuck in talks where you don't really get the face time with your favorite community members, like you get a whole day that way.

**Brian:** [00:31:40] Anybody see— I want to say it was Marco Ament who wrote recently that conferences are dead. It was really— it, yeah, it made the rounds on the internet.

**Bridget:** Um, but I missed that one. I probably would have disagreed with it.

**Brian:** Well, I do too, but the premise of his post was that sitting around at talks is dead, and I disagree less with that. I still disagree with it, but the thing that he suggested was that, you know, maybe we need to just get a lot of like-minded people together to do interesting things that allow them to network, and that's really what our Community Day is. So I did agree wholeheartedly with the idea that having a loosely structured time for people to get together and network and communicate, make friends, work on projects together, that's just as important as watching somebody stand up on stage and drone on about the next feature of XYZ product or whatever. So there's definitely, there's definitely both of those at GopherCon, and that's something we're really proud of.

**Bridget:** [00:32:40] Oh, that's great. And I mean, just like I'm involved with DevOps Days, and almost every DevOps Days, unless they have severe venue constraints, runs open space as well as, you know, talks, so that people can interactively discuss the ideas that the talk sparked. I think that's pretty important. So, I have a possibly controversial question, which is, You both work for Microsoft. I mean, I do too, but you both work for Microsoft. Didn't Go come out of Google? And is— does, you know, Microsoft people running GopherCon and maybe Google people in the contributors, does this mean that this is just a giant corporate effort? Because you did say community a few times in there. So, like, can you talk a little bit about how you draw that distinction or how you walk that line between you and other contributors work at, and other people involved with the conference work at giant corporations. So, how is this about community?

**Erik:** [00:33:43] So, even from the very beginning, and this is actually where the name GopherCon came from, from the very beginning, Brian and I were set on this as a community-first conference. We don't care whether it affects the sponsorship or not, we won't sell a speaking slot. And we've, we've lived by that, um, this entire time. And we have lost sponsors because we wouldn't give them a speaking slot and things like that. So we've always been that way. And even through our interviews, um, with Microsoft, like they're, they're happy to see it running. It's actually ran by Gopher Academy. So while Brian and I are employees of Microsoft, technically, legally speaking, we are also employees of Gopher Academy, which is who runs that. So, you know, Microsoft's only involvement is, you know, letting us do what we do best and allowing us to do it during company time, which, you know, minimizes the amount of stress on our part nights and weekends doing this stuff. So outside of that, they don't, they don't have their hands in it at all. Yeah.

**Brian:** [00:34:44] And honestly, during the interview process, you know, one of the things that really jumped out to me was the fact that, you know, they wanted to hire me not in spite of the fact that I ran GopherCon, but because of it, you know, they, They want to help sponsor— sponsor isn't the right word— they want to help promote community activities. And the Microsoft of old with Steve Ballmer walking around sweating is just gone. You know, the new Microsoft, it's amazing. I can't tell you how much I enjoy working there and the brilliant people that I work with and the culture of inclusion and diversity and smart people and community and open source. Nothing like it was a long time ago. It's amazing, or I wouldn't be there.

**Bridget:** Yeah, yeah, definitely. I feel the same way. And you talked about a little bit at the beginning about the exciting changes around your team, and I'm wondering if you can kind of just clarify a little bit, like, what's this open source stuff that your focus is on now?

**Brian:** [00:35:46] So, our first project was the Virtual Kubelet, which is a an interface that anybody can meet in order to create a thing that looks like it's a node on a Kubernetes cluster. So when you think about Kubernetes as a whole, it's got lots of nodes, and those nodes all run a tool called the kubelet, which is the thing that schedules stuff to run on that node. So we created an abstraction of that that lets you pretend anything is a kubelet. It could be a Docker container that is your kubelet, or it could be a virtual machine It could be a bash prompt, you know, as long as you implement this Virtual Kubelet interface, anything could be that. And we've, we've seen lots of people adopting that Virtual Kubelet spec and doing really cool stuff, like the Hyper.sh team has built an interface so that you can run virtual machines instead of running Docker images, and it's still controlled by Kubernetes. And that's just, it's amazing, it's really cool. There's an Amazon What's the— is it Fargate? Far whatever. Yeah, there's an Amazon group that's also working on meeting that virtual kubelet spec too. So it's not just something that's useful to Microsoft, but useful across lots of different cloud technologies. And that's kind of the goal of what we want to do. We want to be able to build interesting tools that are applicable within the Azure ecosystem, but likely will be useful elsewhere too. And we want to contribute to other tools. If there's a project out there that would work better on Azure or Microsoft technologies, if we spent a day patching it, we're going to do that.

**Erik:** [00:37:41] And come tell us if you have a project and you want to see it run better in the cloud. You know, come, come tell us, we're happy to contribute.

**Bridget:** So, it sounds like, as I understand it, and for our listeners to understand it, that you work at Microsoft, where they have you work on open-source stuff, and, like, running, you know, Go conferences and podcasts and all that sort of thing is something that Microsoft is basically subsidizing, because you can do all that during, you know, work, whatever during work actually means these days. Is that, is that an accurate description from your point of view?

**Erik:** Pinch me.

**Brian:** Who could ask for better?

**Erik:** And that's basically the, the, the job is, um, they want us to continue, continue to be true members of our community as we have. They just want to give us more time to be able to do that.

**Brian:** Nice.

**Bridget:** Yeah.

**Brian:** And I really love the fact that there's, there's no forced shilling. You know, there's nobody said, You know, you can keep doing what you're doing, but you better say the word Microsoft every 30 seconds.

**Bridget:** [00:38:49] Honestly, like we, we say it from like Microsoft did not tell me to put Microsoft colors in my hair. Like I did that because I love it.

**Brian:** Yeah, I agree. I'm proud that I work there and it's, it's, it's not a job I would've predicted 2 years ago and I couldn't be happier about it.

**Erik:** I'm rocking a Microsoft shirt now.

**Bridget:** You're like sitting by yourself at home alone wearing a Microsoft shirt. Why not?

**Erik:** I'm proud.

**Bridget:** Yeah, well, that's awesome. It kind of makes me think like we should look at, um, actually you mentioned, uh, Ashley McNamara earlier and she has her Gopherize Me, which we'll put a link in the show notes. It's super fun, but I feel like we have to look and see if it has, you know, Microsoft module or Microsoft colors or something. If it doesn't, we should definitely get that added.

**Erik:** Yeah, we need a Microsoft shirt on our gophers. So the funny story about Gopherize Me is it started with, I think Brian was the first person she made a gopher for. And I was talking to her and she said she was gonna make a gopher for me. And then I think there was like a third person and then Twitter started seeing it and they're like, I want one. And then it turned into like, maybe there should just be a tool to make your own gopher. And then her and Matt Ryer got together and, and built it. It was a short period of time.

**Brian:** [00:40:00] Built it in a day. Not just built it, but built it in a day.

**Bridget:** And it's written in Go, I would assume.

**Erik:** Yeah. Yeah.

**Brian:** I think it runs on Google App Engine and it's written in Go and it's It's pretty impressive how quickly they whipped that up.

**Bridget:** Oh my gosh, that's amazing. Okay, so we're almost out of time, which always happens. These episodes feel like they're longer than a typical podcast, yet they never are long enough. So, quick overview of community event stuff, like where we're gonna be coming up here. I have a whole month at home, which is amazing. I get to spend a lot of time with Attack Kitten. And then I'm going to be probably mid-February in SF doing a Kubernetes workshop. I'll put a link in the show notes eventually if, you know, details for that come to fruition. How about you, Brian?

**Brian:** So, I have, I think, all of February at home. Don't quote me on that, but I think I do. I better check. Early March, I'm in DC. And then, I've got GopherCon Russia in mid-March and then Amsterdam at the end of March.

**Erik:** [00:41:09] Nice.

**Bridget:** Yeah, if we're going out into March, I definitely have some stuff probably in Europe and then California again. But again, this is that weird time of the year where nothing has published what I'm doing. So I'm like, I'm going to probably be in Norway. I really need them to actually publish something before I can tell you. How about you, Erik?

**Erik:** So actually, I leave in about a week, a little over a week. I will be attending FOSDEM. I won't be speaking there. You can probably find me in the Go room. I don't know if they have like— I'm pretty sure they probably have a containers and Kubernetes room. If they do, you can find me in one of those. Following that, there is a conference in a neighboring city called Ghent called Config Management Camp. I will be speaking there. This is all early February. And then in March, I'll be at a couple of Microsoft Tech Summits, one in DC and one in Amsterdam. And then in late April, I think it's the 25th, I'll be speaking at GOTO Chicago. And I will be talking about kind of like the future of distributed systems with Kubernetes and how and why you should customize it and build abstractions over the top of it.

**Bridget:** [00:42:22] That's right. You and Lena Hall are both speaking on my track at GOTO Chicago. I really need to finish that track. I have a number of—

**Erik:** I really need to finish that talk.

**Bridget:** Oh my gosh. So, we have open CFPs, lots of DevOps Days. We'll have a link in the show notes. GopherCon CFP is open right now, closes March 15th. So, if you want to be, you know, in Colorado with all of your Go buddies, August 27th through 30th, better submit to that CFP.

**Erik:** There's actually a bunch of Go things. I think Gotham Go, GopherCon Russia, Um, GopherCon EU, which is going to be in Iceland. I think they're all— and Singapore might be opening theirs and maybe India. There's— so there's a bunch of Go CFPs.

**Brian:** Yeah, it's probably worth mentioning really quickly before we close that the, the GopherCon name is something that we've agreed to lend out across the globe. So as long as you're not running a GopherCon in the US, we let other people use the name GopherCon. For their regional events.

**Erik:** [00:43:26] As long as it's a community-related thing, like no selling speaking slots and stuff.

**Brian:** Yeah, we require them to have a code of conduct that's roughly compatible with ours and a few other things like no selling speaking slots. But in general, if it's outside the US, somebody else is running it, we're just letting them borrow the name.

**Bridget:** At some point, we hope to do another podcast and delve into the differences between how we franchise DevOpsDays and how you franchise GopherCon, because I think there's a lot of interesting stuff there.

**Brian:** But I'd love to hear about it.

**Bridget:** Yeah, in the interest of time, I'll just say we have discount codes. ADO2018 will get you 20% off lots of DevOps Days and 10% off ChefConf. Perhaps go plug ADO2018 into the GopherCon registration. Maybe they'll give you some sort of small percentage off. Who knows?

**Brian:** You put us on the spot, right?

**Bridget:** I mean, I'm not saying I have— it can be 1% off. You know, zero is a percent, like they said on The Simpsons.

**Erik:** We'll set something up so that code works on GopherCon.

**Bridget:** [00:44:28] Nice. If you have an upcoming conference you'd like to see promoted on ADO, you can fill out our handy form at arresteddevops.com/conf. All right, just to see us out, we have a few checkouts. Brian, what do you think our listeners should look at?

**Brian:** So, I got a DM on Twitter from Michael Hausenblaust this morning, and he said, oh, you gotta go check out this thing. And I haven't actually played with it yet, but I looked at the video and it blew my doors off. I don't know how he pronounces it. I think he pronounces it kubedash, but it's at kubed.sh, and it's a shell prompt that runs on a Kubernetes cluster. What? Yeah, if you think about SSHing into a single machine, this is SSHing into a cluster and you can upload or run binaries and code as if you were just running at your own terminal prompt. It looks wicked cool. I can't wait to try it out. It really does look amazing. It's, you know, all of the power of Kubernetes but without having to make a Docker container. So it's crazy. And yeah, that's definitely on my list of things to play with.

**Bridget:** [00:45:40] Oh my gosh, I love it. And I know also, Brian, you have a hard stop. So before Erik and I give our little things to check out, You'll have to check those out later. You'll have to read the show notes or listen to the podcast because I know you have to head out. So thank you so much for joining today, Brian.

**Brian:** I appreciate you having me, Bridget.

**Erik:** All right.

**Brian:** Thanks.

**Erik:** Later.

**Brian:** Bye.

**Bridget:** Later, Brian. All right, Erik, fill us in. What kinds of things should our listeners be checking out?

**Erik:** So I did a blog post about Virtual Kubelet. I worked a lot on that. So I did a post kind of explaining how Kubelet works and virtual kubelet and why the hell you would actually want to do that. So, on my blog, there's a post, ericstmartin.com/virtual-kubelet.

**Bridget:** You don't have to give the URLs. The links will all be in the show notes.

**Erik:** Okay, awesome. Another project is OpenFaaS, which is Functions as a Service, and they offer a way to actually run that on top of Kubernetes. And there's a theme here. Like, I'm really into, like, let's talk about how to build layers of abstraction on top of Kubernetes and that Kubernetes isn't, like, the top layer of the cake. Another one is Kubeflow, which is actually a machine learning setup on Kubernetes, which is really interesting. I have not had a chance to play with that, but I've seen a bunch of people talking about it and I kind of love it. And then completely unrelated, we talked about how another interest of mine is security. And you can probably see behind me I have a bunch of, um, hardware stuff, oscilloscopes and whatnot. Um, so another thing I love is reversing hardware. So next on my reading list, I'm going to try and get it here to read on the plane on my way to Belgium, is a book called PCBRE Techniques, which is how to reverse engineer circuit boards. Which is really interesting. Yeah, it's really interesting to learn that there's only a couple of serial protocols, and if you can identify chips and you get like a logic analyzer and stuff, you can actually see the data transmitting between, you know, the RAM chip that things are being stored on and the actual microcontroller.

**Bridget:** [00:47:57] What that— I mean, it's just so funny to think, I guess because we pick whatever layer of abstraction we're going to pay attention to, and we don't really spend a lot of time thinking about the other layers until we do. It's like, oh, right. Yeah.

**Erik:** And there's a couple of things, uh, there's one called JTAG, which is the Joint Test Action Group, and it's a couple pinouts. So they used to test circuit boards by having these other circuit boards with pins and stuff, and they would drop the board on top and they would apply voltage and things on certain pins and then test other pins to make sure that the board, you know, the soldering and everything worked correctly. But they actually that was really expensive and you had to design these things for each one. So, all the kind of chip manufacturers got to design, got together and designed this spec that allows one set of pins to be able to do that testing of boards. But you can also use that to your advantage too. You want to reverse engineer the board or you want to try and extract the firmware from the chip and things like that. So, it's super, super interesting to be able to do stuff like that.

**Bridget:** [00:48:59] And that book is not going to put you to sleep on the plane, that's for sure.

**Erik:** Yeah. And there's actually even people— there's people who are even crazier at this stuff than just getting in and messing with the serial protocols. Um, there's a technique called glitching. So you can actually flip a, a flag or a bit on the chip that says, hey, like, this is locked down, you can't extract the firmware anymore, so that people can't do that and find embedded stuff like keys and things in the firmware. Um, but glitching basically intentionally mucks with the power of the board and it's able to do it in a way where it flips the bit on the chip and convinces it that it's not locked so they can still extract the firmware.

**Bridget:** Wow.

**Erik:** Yeah.

**Bridget:** And there's fascinating—

**Erik:** what's it called? Chip Whisperer is one board that does that. But yeah, it's a really, really interesting field and I like playing there.

**Bridget:** Wow. It sounds like you will not be bored on the plane.

**Erik:** Yeah, I kind of want to bring all my software-defined radio stuff on the plane, but I'd probably get in trouble for that.

**Bridget:** [00:50:01] Oh, just remember, you probably want to try to sleep on the way to Europe. You never sleep on the way back from Europe, but you want to try to sleep on the way there at least a little, or you're going to be sad.

**Erik:** Which is why I'm attending FOSDEM. I'm getting there a couple days early before I talk and try to adjust to the time zone change.

**Bridget:** There you go. Awesome. Okay. So, I have a couple of checkouts. I feel like there's been a lot of really great posts lately on the Honeycomb Engineering Blog. So, we've had Charity Majors on the pod before, but if you haven't been keeping up with what Honeycomb has been doing lately, honeycomb.io/blog, we'll have a link in the show notes, I mean, obviously. But they've been doing a lot of interesting stuff. I'm putting a link to the Bombshell leggings again, because every single time I wear these, like, circuit board leggings or Settlers of Catan leggings out in public, people are asking me for them. So we'll put the link in the show notes to that again.

**Erik:** I wish it was stylish for a guy to wear because some of those are cool.

**Bridget:** Oh, actually they are heavy duty enough and they go in sizes up to 5XL, and they're exactly the sort of material that guys use for weightlifting leggings. So that's true. If you're the kind of guy who wears weightlifting leggings at the gym, like, you could totally wear these, like, compression leggings or something. Basically, yeah.

**Erik:** [00:51:18] I wouldn't wear them in public.

**Bridget:** Well, I mean, at the gym is in public, sort of, but you know what I Like, if you're in— if you're the sort of person, and you know, if you are the sort of person who goes to the gym and like wears exercise clothes, then people of all genders can definitely get away with wearing these. So, yep, so that's the Bombsheller leggings. And then, um, I also— it seems like a wacky thing to point out, except that I almost should have a subscription to this water bottle because I've bought it like 5 times because I've left it on planes or had it confiscated at TSA because I didn't want to go to the end of the line And because I couldn't, you know, just pour the water out or drink it, I would have to go back to the beginning of the line. So I'm like, nope, bottle's yours now. You can throw it away. But this leak-proof Nalgene water bottle is amazing. So it's the Nalgene On-The-Fly water bottle. And I'll have a link in the show notes because it's like, it can be full of water and upside down in your bag and not leak at all. So if you're doing a lot of travel, that's a very useful, very useful water bottle to have. I feel like at some point, and I've read people's travel tip blog posts, and it's kind of an even mix between doesn't apply to me and why do you pack so much stuff? But this water bottle is definitely worth bringing. I've brought it all around the world. All right. So, that's pretty much it. That's what we got today. Thank you again, Erik, so much for joining.

**Erik:** [00:52:38] Thanks for having us.

**Bridget:** This was super fun. So, head over to arresteddevops.com/gophers for this episode's show notes. And the site also has our newsletter, Patreon, all the Arrested DevOps stuff you could ever want. Visit arresteddevops.com/itunes and leave us a review in the iTunes store if you want to help other people find the podcast. I'm Bridget, @bridgetcrumhope. We're Arrested DevOps, and remember, there's always DevOps in the banana stand.
