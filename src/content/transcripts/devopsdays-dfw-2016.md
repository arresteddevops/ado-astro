**Trevor:** [00:00:00] I wanted to say heroes, but I didn't want to introduce a hero complex to Nathan and Dakota beyond what they already have.

**Coté:** Yeah, and besides, if you're up on your myth, heroes always get brutally punished.

**Annie:** Arrested DevOps is brought to you by Tenth Magnitude, a company that figures if you're listening to this podcast, you must be pretty cool. 10th Magnitude empowers businesses to better collaborate across teams and achieve IT transformation using cloud. They enable customers to innovate, automate, and accelerate by leveraging the power of Microsoft Azure. You can find out more at arresteddevops.com/10thmagnitude.

**Trevor:** This episode is sponsored by VictorOps, the company that makes being on call suck less. Built by a team of avid DevOps practitioners, VictorOps is the most innovative platform available to support modern IT and DevOps incident management. They do it with an unmatched feature set that's designed to support teams through the entire incident lifecycle, from first alert to final retrospective. This means you can respond to incidents more effectively, which in turn helps you release faster, minimize downtime, and get your life back. Visit arresteddevops.com/victorops to schedule a demo or start your trial. Mention Arrested DevOps and you'll be eligible for some great discounts too.

[00:01:18] Hi, welcome to DevOps Days Dallas, the first DevOps Days Dallas actually, and we're about to start recording of our mega DevOps podcast. Yeah, the combination of Arrested DevOps, the Food Fight Show, and Software Defined Talk. We've got some excellent guests with us tonight, today, wherever we are. I always say tonight no matter when it is, so I feel bad.

**Nathen:** It's definitely nighttime somewhere.

**Trevor:** Yeah, yeah, you know, I know that for a fact. That's a true statement on the internet. Yes.

**Nathen:** Somewhere.

**Trevor:** So let's all introduce ourselves. So I'm Trevor Hess, co-host of Rested DevOps. I work at 10th Magnitude. I do something with emerging technologies now, and I'm working to make that mean something.

**Nathen:** And I'm Nathan Harvey. I'm the co-host of the Food Fight Show podcast. That's the podcast that's all about DevOps and Chef. In fact, it's where the DevOps chefs come to battle. Yeah, so I'm just super excited to be here, and this is, I don't know, my second Arrested DevOps, maybe the third time we've done a show together. I don't know. I've been on one as a guest at least.

**Trevor:** [00:02:32] We talk so many times over the internet that I don't remember either. Yeah, tricky.

**Coté:** Hi, this is Kote. I have a podcast called Software Defined Talk, and I work at Pivotal and do various other exciting things. Thanks for having me.

**Michael:** I don't—

**Coté:** have I been on this podcast before?

**Jean:** I think you did.

**Coté:** Bridget said you co-hosted a podcast with us before.

**Michael:** Oh yeah, well, it's good to be back.

**Annie:** I am Annie Hedgpeth and I'm one of the organizers here for DevOps Days DFW, and I am also the latest hire at TenthMagnitude as a cloud automation engineer.

**Trevor:** Welcome. Thank you.

**Dillon:** I'm Dillon Culpepper, a developer at Code Authority in Frisco. We do .NET and Azure software. I'm a big fan of the podcast, longtime listener. First DevOps Days and it was Great to be in here for the first one in Dallas.

**Michael:** And I'm Michael Hedgpeth, also an organizer for DevOps Days DFW along with Annie and some others. And I am a software architect at NCR and I work on managing our transformation with DevOps for our hospitality group.

**Reuben:** [00:03:43] Awesome.

**Trevor:** Thank you again. Thank you everybody for coming together to do this. Thank you awesome audience for joining us. You can woo if you so choose.

**Michael:** Woo-hoo!

**Trevor:** So those who aren't in the room, I asked everybody to be very, very quiet. So everybody was looking at me like they wanted to maybe make a noise, but weren't sure if I would scold them. So I wanted to make sure that it was clear that that was okay.

**Nathen:** And there's a skull on his shirt, so you don't want to be scolded by him.

**Trevor:** Scolded? Yeah, scolded. So I think today we're just going to kind of talk about this being the first DevOps Days Dallas, what we learned, what we felt about the event, how we thought things went, just various things we heard throughout the show. So to start, I think we've got 2 organizers present with us for the podcast. How do you both feel that the show went?

**Annie:** We think that it went great. The feedback that we've been getting has been great. We had some really big shoes to fill though, because in Texas, Austin has a huge DevOps Days. And so we knew that we weren't going to be Austin, so we knew that we wanted to make our own DevOps Days. So, we wanted to see how we could be Texan but still different than Austin and have our own thing. We didn't know if there was going to be 20 people or 200 people or what. So, to have it finally, and we had a little over 300 people, which was fantastic, and everything went off without a hitch. The speakers were great, the sponsors were great, and yeah, we're just really excited about the community that it's building in the area. There was a lot of new people too. New people to DevOps and they were learning and it was fantastic because it was this great environment for people to learn and then a lot of people that had been— or a lot of people here to sort of mentor them along the way and it was a great environment for people to learn and I was really grateful for that.

**Jean:** [00:05:40] Awesome.

**Michael:** Yeah, that was probably one of the more exciting moments for me because, you know, if anybody's organized a conference before, you know that you spend months and months and months beforehand of nobody really knowing what you're doing except for the people on the organizing team, and it finally comes to pass. I think on the first day, Nathan said, if this is your first DevOps Days, even if this is your first conference, stand up. The reality that all that work went into helping people change their lives was really rewarding for me personally.

**Trevor:** While we've got folks in the room, let's do Nathan's exercise one more time, the 3 counts.

**Nathen:** Sure, sure, sure. Raise your hand if, uh, if you've ever been to a DevOps Days event before. Okay, that's, uh, let's see, it looks like 2 organizers. It looks like, yeah, 20 people out of 100. Why did you have to give them the accurate number? The live studio audience is ginormous. Yes, that was 20 people that raised their hand, Michael. Can't you count?

**Michael:** [00:06:42] Yeah, sorry, Nathan.

**Nathen:** Thank you. And then, uh, the second question was how many have participated in open spaces or Of course, now you all have, so had before the last 2 days. Okay, that's another— that's 30 people. And then how many of you, this was your first time at a technical conference at all? Yeah, there's 20 people here that— and by 20, I mean 2.

**Trevor:** All the previously mentioned numbers are divisible by 10 for accuracy.

**Nathen:** This was their first time at a conference, and I'd love to hear if you're willing to share from both of you, like, what your takeaway was, what your experience was like, and then I'd also like to just come back to you, Michael, and ask, and you as well, Annie, you said there's a lot of work that goes into this and you're doing it all behind the scenes. No one else knows what's going on. Why would you even do that? Like, what— go back a year or 6 months ago when you started planning this.

**Reuben:** What—

**Nathen:** why, why do that?

**Michael:** Well, my journey into being on the organizing group is, is a little bit strange. So for us, I'll just tell our story. Yeah, because I wasn't there at the beginning. There we have a group in DFTBA called DevOps Live, and there were some people that said, let's have a DevOps Days. And I wasn't there the day that they had the initial committee, and I was reading Doug Ireton, who was recently a guest, thanks to me, on the Rest of DevOps podcast. And Doug had an email that it's like 2 or 3 years old where he went to a conference and he said, And basically they had an open space with how to get women in tech. And one of the bullet points was DevOps Days needs more women organizers. And at the time Annie was looking to have a career transition and I, you know, that kind of was a lightbulb moment for me. So I went to Annie and was like, okay, you know, at the time this was 6 months ago or whatever, you know, you have very little technical ability but You can organize a conference. You can make that happen. It would be a good experience. Why don't you do it? And then you can take the story over from there, maybe.

**Annie:** [00:08:56] Well, I mean, that's basically the story. But I signed up. And so then I was apparently tasked to raise all the money. And I was like, oh, OK, sure, no problem. So I became the sponsor liaison. And that was actually really cool for me because I got to meet and be in contact with every single sponsor. And there were, I don't know, 25 or so. So that was really fun to get to make personal contact with everybody and just see how many people had skin in the game and really cared about the DevOps community growing in DFW. So it was really neat.

**Michael:** Yeah, and at the time I was wanting that to be Annie's thing, you know, so I was watching the kids while she went to the sponsor meetings on Wednesday nights. And then it took about 3 weeks But I got a text, hey, do you want to handle the speakers and maybe be an emcee? And so, you know, I got into that at that point. And then as time went on, I, you know, there's a lot of jobs and a lot of things that happen, like from handling the budget to emceeing to handling the speakers to what are we going to do about food, talking to the event. There's all sorts of stuff.

**Trevor:** [00:10:12] So that's amazing. First of all, congratulations on both of you for getting this all together, as well as all the other organizers. But it's actually kind of interesting, we've got even representation in the group, I realized while you were talking. We've got 2 organizers, 2 speakers, and 2 attendees.

**Nathen:** There we go.

**Trevor:** So before, I think, Nathan, before we get to asking kind of the general audience how they felt, let's kind of bubble down. The next people after the organizers that get involved are the speakers. So for the two of you, Kotei and Nathan, what was your experience getting spun up and involved?

**Coté:** Well, you know, I live in Texas, so it's awesome that we have one up here. And I think being less flippant, like, yeah, I mean, now that I work at a vendor, we come up here, as we say, to North Texas a lot. And there's a lot of people who use computers up here in a business context. And so it's good to like have them be aligned with doing things in a new and fun and interesting way. So I mean, there's like so much going on up here, and I think most of the rest of the world— I don't know, I experienced this, you know, they're like, oh, Texas, how are the horses, right? And whereas really like we, you know, in Minneapolis it's kind of like this as well. There's lots of towns where there's actually a tremendous amount of business and therefore computers going on. And I think having something like a DevOps Days up here is good because it gets exposure for the people who are in that community and also hopefully makes everyone— well, not everyone, but it gives more awareness to the fact that you can do all your nerd stuff around here too, in addition to whatever else is that goes on up here.

**Nathen:** [00:11:50] And for me, you know, I have a successful career because of the community, and I've been a part of the community for a very long time, and it's given a lot to me. And so I always look for opportunities to give back. And I think that the first time DevOps Days comes into a particular city, It's a very special time. I think it's, it's the time where that community has 2 days where they can really gel together. And I asked the audience yesterday also, how many of you live within, you know, 40 miles of where we are right now? And it was easily 90-95% of the audience that's right here. So this is truly a local community event organized by local community organizers. And I was really just privileged and honored to be able to come and speak at that event.

**Trevor:** That's awesome. And then Dylan, if you want to talk about how was your experience?

**Dillon:** Yeah, so I've been trying to absorb all the DevOps from different sources and I had kind of been planning on going down to Austin to see DevOps Days there because I knew it was pretty large. So I was very excited to see when in DFW they had started up the DevOps Days. And I, from my software work right now, is mostly involved in .NET and Azure and so one of the main differences between this tech conference and the ones I'd been to before was the single track. And I normally would focus on Microsoft-type subjects, but the exposure that I got here with all the different speakers that I probably normally wouldn't go to was surprising and delightful to see all those different other angles. And it's a The speakers were definitely all surprised me. There were people I had read their blogs before, and to see them in DFW was very engaging.

**Trevor:** [00:13:37] That's awesome. I think that's a compliment to you and your team, Annie and Michael.

**Michael:** Yeah, well, and it's also a compliment to Nathan because Nathan gave me some coaching about it. And it's kind of— I had been to the Austin DevOps Space, and that's the only one I'd been to, and they don't have a single track. But that's something you stressed to me early on.

**Nathen:** Yeah, I was very adamant about it. In fact, I said I'd love to come and give a keynote and talk about how to make your DevOps Day experience successful, but before I do that, I should be very clear about the things that I think are important to make DevOps Day successful, one of which is being the single track. And just like you said, I think that the beauty of that single track is when you have multiple choices, there's a natural inclination to go to the places where you feel comfortable or the things that you feel like you're going to learn the most from. And I had people yesterday come up to me and say, you know, I never would have gone to an automating networking talk. I never would have gone to that because like networking's not my jam. I'm not a network engineer.

**Coté:** I don't like—

**Nathen:** maybe interesting, but I don't really care. But because it was a single track, that was the option you had. And they got a lot out of that talk. Like you said, it gave new perspective, gave new insights and things like that. I think that's really key.

**Michael:** [00:14:47] Yeah, when we were selecting the speakers, I had that in mind where, okay, we're just going to have a single track. So there's not a culture track, there's not a technical track, but we did mix them strategically together and mix it up. But then the other theme that arose out of what speakers were there is we're going to have people from different backgrounds. So network. Person, and we had a security person, and then Shazad and I were from a development background. And so you had— I think that that's one of the things about DevOps that's so important is being able to take people from a lot of different places and empathize with them. And maybe you don't agree with all of their viewpoints, or maybe you can't see yourself in their shoes at all, but it's about bringing them together and being empathetic and understanding creating common ground to create faster delivery.

**Nathen:** Yeah, that empathy is so important. Imagine a DevOps conference where there was a dev track and an ops track.

**Trevor:** [00:15:50] Yeah, right.

**Reuben:** Yeah.

**Trevor:** That just— well, it makes me want to go back into my shell and cry.

**Nathen:** Right, exactly.

**Trevor:** So for me this time, this was sort of a unique experience because— and a couple things. I've been to DevOps Days Chicago, but I've never been able to attend the whole conference. And while I was at the first DevOps Days Chicago, again, I wasn't able to kind of be at the whole conference, as well as it was my hometown, at least in terms of my professional career. So it was very neat to be a part of a first DevOps as well as a DevOps Days in another community. And so it was interesting where it was like, I think some of the experience that I got in Chicago where it was just companies I'm aware of because I'm in the area and I kind of know what they're up to. It was interesting to have people, in some cases, come up to me to talk to me for various reasons, but to hear where they're trying to just get started in DevOps and kind of ask the questions about how do I get a company who's still working in 1995 to realize, wake up, it's 2015, 20 years have gone by, where have you been? And talk about how to get around those things. So that was something that was interesting and new for me, this DevOps Days, and it kind of brought a lot of interesting kind of personal realizations to myself, which was fun.

**Coté:** [00:17:24] What'd you realize?

**Trevor:** So, do you mind if I put you on the spot slightly?

**Dillon:** Sure.

**Trevor:** So Dylan came up to me at the beginning of the conference and said, whoa, I saw you walk by and I was like, you are Trevor Hess from Arrested DevOps and that is awesome. And for whatever reason, it clicked in my head as this immediate drag back to the first time. And I don't know if this was— you said you've been to other conferences, but it brought me back to the first time I went to a conference and I think it was when I met Paul Reed in person for the first time. And I just kind of had that same energy and excitement of being able to meet Paul Reed, you know, this person who I'd spoken to, you know, when we were trying to get the podcast started and all these things. And for the first time, it was just this realization of, you know, maybe I do get this now. Like, you know, as I was saying to Kote earlier, and we've talked about on the podcast before as well, When Matt and I got started, when we first spun up Arrested DevOps, I didn't really know what DevOps was. You know, Matt said, hey, I'm gonna do this thing with this clever title. Do you wanna play along? I said, yeah, that sounds like fun and like I might learn something. And I think this was the first conference where I kind of, to a degree, got myself past my imposter syndrome. And wasn't afraid to share my thoughts. Because even though, you know, at several other events that I've been to where I'm around tons of smart people who I've come to know and come to consider friends, I still feel like they're smarter than me. And like, I'm gonna say something that's gonna make this person who I consider a friend think less of me. Even though that's nothing about what this community is about, that was my fear. And this was the first show, and that moment was my realization that I'd kind of grown to a point where I was getting myself beyond that.

**Michael:** [00:19:36] So, thank you.

**Annie:** Yeah.

**Trevor:** And thank you for letting me put you on the spot.

**Dillon:** Yeah, thanks for inviting me to this. And yeah, teaching all the time, the knowledge share within the community of ADO and then the DevOps community at large, it just It fits so much with the culture of continuous improvement and then open transparency between the application of it between all the different aspects of the— like all those acronyms that you put together in DevOps during your—

**Nathen:** yeah, exactly.

**Dillon:** There's so many other fields other than devs and ops that the kind of culture in continuous improvement is applicable towards.

**Trevor:** Thank you for joining us as well.

**Dillon:** Thanks.

**Trevor:** So I think before we kind of continue with our general discussion, do you want to see if— does anybody want to come up and share your experience at the DevOps Days? Yeah, come on down.

**Nathen:** Come on up.

**Trevor:** Or up, yeah, whatever.

**Nathen:** Make sure you introduce yourself.

**Trevor:** Yeah.

**Reuben:** Hi, I'm Reuben Garrett. I'm a Unix sysadmin at IBM SoftLayer. This is my first professional conference of any kind. The greedy side of me was kind of hoping for more pithy technical talks, but in the end what I realistically needed was things like JJ's talks on— or his Ignite on introverts at conference. I'm feeling it right now. You're good, man. Yeah, that was— he gave some good strategies. I'm going to go get a pocket game and try to do some of those things. And I want to give a shout out again to Marissa's talk. I think it's really important to— speaking of empowering people, empower women too in tech. And it's really cool to see you all here because, like, speaking of imposter syndrome, it's like I recognize so many of you and listen to a lot of your podcasts. So thanks.

**Dillon:** [00:21:18] Thank you.

**Trevor:** Would anybody else like to come up and share? Come on down, up, whichever direction we're choosing.

**Coté:** Go with the Price is Right thing.

**Reuben:** Oh, it's down.

**Jean:** Hi, my name is Jean Bennett, and I've been to lots of professional conferences over the years. This is my first DevOps Days, and it was just beyond my wildest expectations. I'd never participated in the open space before, and you said be prepared to be surprised, be open, and I'm not incredibly technical as many of these developers are, and I thought maybe I shouldn't be here. Maybe that's the imposter thing you talked about, but I found I was able to learn a lot. Also share a lot. And I must say it's the only conference I've ever been to with a single track, and that really was effective for me. It did— it broadened the experience tremendously. So thank you.

**Clay:** That's awesome.

**Nathen:** And Jean, we just finished an open space about postmortems that you participated in. Yes. And you didn't sit there quietly taking notes. You were an active participant in that discussion. So thank you for that.

**Jean:** [00:22:28] I'm a talkative introvert.

**Trevor:** Anybody else?

**Clay:** Hi, my name is Clay Schroeder from CBRE. I just wanted to say I'm glad wherever the bug got bit is good because, as Kote said, there's a lot of computers here. Yeah, we may not all be software companies, but there's tons of IT in DFW, so having a conference where I was able to bring 9 people from my company is really good because even Austin, it's hard to get travel and hotels and that type of stuff. So it was awesome, just as good as some of the other conferences I've been to, maybe better. And no, just glad that it was successful so we can come back next year. So thanks, guys.

**Michael:** Yeah, that's an interesting point. There's— there is in any organization, like, the group of people who the company will say, we're going to put them on a plane, we're going to buy them the $1,000 ticket to the conference, and we're going to let them go do that. And I mean, at least at NCR, that's a very small group of people. And so it's really great that we could say no hotel, inexpensive ticket, relatively speaking, no plane, just go for 2 days. And the people that show up here that maybe weren't at ChefConf or at other conferences that I've been to, it's just great to meet those people and get them engaged in what we're doing.

**Nathen:** [00:24:08] Yeah, and hopefully, you know, as part of this, you'll see even more interest in DevOps Live and other local meetups and local gatherings that you have for this community because there are so many people right here that have great ideas to share, great experiences to share. You could go to lunch at CBRE and learn something, right? They could come to lunch at NCR and learn something right now.

**Michael:** Yeah, well, here's the funny thing. Annie's brother-in-law, my brother, works at CBRE.

**Dillon:** Yeah.

**Michael:** Yeah, so we're gonna have to hook up. Yeah, I have a connection to CBRE, but I didn't know these guys. All right.

**Dillon:** They brought 9 people.

**Michael:** Yeah, right.

**Trevor:** That's awesome.

**Nathen:** None related to you. They're everywhere.

**Coté:** Yeah, right.

**Annie:** The other cool thing about that is we have a little bit left over of sponsor money afterward, and so the sponsors can feel really confident that their money is going to good use because we can put some of that money back into DevOps Live. And because it was such a— the members of DevOps Live were so good about contributing to the conference. Anyway, we can put some of that money back into the group so that the community can continue throughout the year and hopefully next year contribute to an even larger DevOps Days.

**Trevor:** [00:25:18] And it's cool, it seemed like there was a good mix in the speaker program of both folks from the local area as well as inspirational DevOps names. I wanted to say heroes, but I didn't want to introduce a hero complex to Nathan and Dakota beyond what they already have.

**Coté:** Besides, if you're up on your myth, heroes always get brutally punished.

**Nathen:** You don't want to be in that camp.

**Michael:** I think ultimately if people— we could have gone the DevOps hero route where everyone was a DevOps hero and maybe had a smoother— I say that in quotes. That we would have a smoother conference, but it wouldn't have been as engaging. Like, you know, if you have somebody where people feel like, you know, we had a gentleman yesterday, Franklin Mosley, who talked on security, gave a great talk, and it was his first time to ever speak at a conference. And the authenticity that he brought to the table engaged the audience in a way that Kote wouldn't have been able to. But Kote brought it and Nathan brought it, but having that diversity of approach really, I think, helped the overall message too. So I'm glad you thought that too.

**Trevor:** [00:26:38] Yeah, I mean, that's actually a really good point too. DevOps Days, to anybody listening, you know, this goes beyond DevOps Days Dallas, you know, DevOps Days are a great place to give your first talk. It's usually a small, really open, friendly community where you can talk about that thing that you're really passionate about. And it's a great thing. There's DevOps Days in all areas now. We talk about at the end of our shows, there's always a list of upcoming DevOps Days events. Really, when you see information about the call for talks or call for proposals, you know, give it a shot. Put something in there and, you know, it could be your first talk. You know, I, I, my first talk was super intimidating because my first talk was at ChefConf when I'd been really doing chef work for maybe 3 weeks and had like super intense imposter syndrome. And even though that, you know, I'd been doing professionally chef stuff for only 3 weeks, I had exposure and things that were valuable to say. The entire time I was freaking out that like I'm talking at this huge conference and that like I'm going to be screwing everything up. It would have been much more relaxing if I had done that at a smaller venue first. Although I did get to come back and talk again this year, which was fun. Although I felt much more comfortable that time. And I did get to speak at a DevOps Days in between too, which I think actually did help. And aside from giving those talks at DevOps Days, don't forget about your local meetups. Meetups are always looking for people to talk. And if you've listened to our episode about, Arrested DevOps, I should say, episode about setting up conferences, Nathan, I believe you talked about trying to involve local people to better engage our own communities and build our local communities.

**Nathen:** [00:28:43] Absolutely.

**Dillon:** I think that—

**Nathen:** I think the phrase I probably used, and I stole it from someone else, although I don't know who, so I'll attribute it to myself, is that you should build local celebrities within that meetup, right? You don't have to fly in people from around the world that people maybe have already have name recognition. Build those within your local community because frankly, there are people right here that are doing amazing, awesome stuff. And they have great stories to tell.

**Trevor:** Yeah, I mean, Michael, you named one person, but I remember one other person saying that it was their first talk here. So there may have been some others who I didn't catch say it, but that was 2 people who got to share their own message and their opinions and their passion for the stuff going on in our shared space. And that's awesome.

**Coté:** There's one point I keep thinking about, which is the, the my boss sent me here phenomena, which I think is— it gets back to, like, the— to reference myself, the point about, like, opening up a sort of region to the idea that there's interesting computer stuff happening. And I think it was maybe in the Charlotte one that I went to or somewhere else where someone else like that that isn't, you know, a well-known computer place. That like, yeah, that's an encouraging thing to see at an event when there's a bunch of people whose boss sent them. I know it was in Amsterdam. I met with some people who— she walked up to me and said she was like a project manager or some PMM or PPO or whatever it is and PMBOK people or something. And yeah, it was encouraging because it's like a lot of the people here said, it was both It was both exposure of— it's fun to see people learning new things, but it's also fun to learn new things from new people, to be all kumbaya-y. And I think you really get that chance, at least I do, because I mostly hang out around, you know, unicorny computer people. And so it's nice to actually talk to, as the title of my talk says, like normal people doing normal things. Because it's like, to use your thing, like of course heroes are heroic. And that gets boring after a while. And so it's good to go back into the real world and, and, uh, I guess relearn your imposter syndrome. It's a good cycle to go through. Yeah, because then, then you get less bored, learn more new things. So, uh, from what I can tell, there's, there's a lot of that going on here, which I guess if you thought about it too much sounds really insulting, but it's actually like, uh, nice that there's, there's people who want to learn new things. And, uh, and, and then, and then it's also like, like I really value if there's some stuff that I think is obvious and would be kind of stupid not to do it, right? Like pretty much all the stuff that we talk about. I really value coming across people who for some reason don't think that way or can't do it and trying to figure out what the deal is and if I'm wrong and how to merge that together. Like it's fun to sort that out. It's fun to have confusion and stew in that. On both sides of the conversation. So there's a topic.

**Trevor:** [00:31:50] Yeah, I mean, that's, that's a really important topic because that's, that's kind of, at least for me, that's what I deal with every day is trying to— and that's what I love doing, right, is getting into that confusion and trying to untangle it and both learn the reasons for why those things happen the way they do and see you know, how we can figure out what the path forward is.

**Coté:** Right.

**Trevor:** Like, I loved during your talk, you had said the line about, you know, when we— an okay step forward is good, or a good step forward is okay because where you are right now is horrible.

**Michael:** Right, right.

**Coté:** Yeah, yeah, yeah. I mean, I think that's the idea. I mean, this is back when I was at— it's been a long time— when I was at BMC, we were introducing This is like in 2003 or 2004, and we were introducing Scrum. I think Schwaber's book had just come out sometime around then, and we were introducing Scrum there, and we had all these conversations about how, why is this going to be better, and like, why is this an improvement? And, you know, being a snarky young developer, right, like my thinking was always like, well, that's because we do nothing, right? Like, you should never— you shouldn't be debating about replacing something because that assumes something exists. Right, to be replaced. And I think as I go out and talk with a lot of people we're trying to sell to or help with and do our sort of therapy, a lot of them are in that situation. They just, they don't really have much of anything going on. They've just kind of been lumbering along in their current state. And, and so it's, it's nice to like, one, talk with them to discover how things actually are out in the real world, and then two, like hopefully help them out. Like, it's nice to see them smile a little bit and have, have an option. And then, you know, it's cool if they want to give us money too.

**Trevor:** [00:33:42] Yeah, that's— I mean, money's always very nice.

**Coté:** Sure, just like we were talking about earlier.

**Nathen:** Yeah.

**Trevor:** So some other folks along those same lines, how do we feel about the kind of the line of learning and confusion and kind of getting movement forward again instead of kind of accepting catharsis and status quo?

**Nathen:** Well, I think one of the— some of the feedback that I think the organizers heard after yesterday was we got to the end of the day and there were some people that were like, okay, but what exactly is DevOps? Like, I'm still not sure I understand that.

**Trevor:** And I do it.

**Nathen:** Yeah, and how do I do it? And I think it was good to see, you know, people came back on the second day and we're still having those discussions discussions. And I think hopefully what— and this was definitely said on the stage and I heard it in some other places— like, that DevOps is a journey. It's not, you know, all right, we've been doing DevOps for 18 months now and we've arrived. That's it. DevOps is done. That's the thing, right? And I think that just to see in the open spaces, to see in the Ignite talks, like, information sharing and everyone kind of learning more as we go, I think is really important.

**Dillon:** [00:34:57] The area I found some of the most clarity in the learning was beyond the talks was probably the open spaces. Instead of hearing kind of the ideal solution to the problems, there were a lot of people that shared similar issues with a lot of— coming from a lot of different areas, and people had different solutions. So I would hear at the same time 3 or 4 different possible answers to their problems that we could all— they were all proposed and had validity and had some idea. And that kind of multi-perspective knowledge sharing gave me a lot of clarity beyond just the talks that had one great idea.

**Annie:** I liked how you got a bird's-eye view of a lot of different things. And so, like Franklin's talk on security, like, you know, I've done a lot of studying with Inspect and stuff, and I'm kind of interested in that. And to hear him talk, like, he's a security guy and he doesn't— he didn't even know what Inspect was. And And so it was fun. Like, I took him and I had him go talk to Nathan because I wanted to, like, hear them talk together about Inspect and then what Franklin did. And so, but like you said, hearing different solutions to problems was really interesting. And the open spaces were great for that too. And me, I'm in total learning mode right now. I mean, I'm, like, really a long way away from being complacent because I have so much to learn. But, um, but that was really cool. It was like I was making a checklist of all of these things that I need to study more on. And so it was just fun to see the different perspectives. I really enjoyed that.

**Michael:** [00:36:35] Yeah. And this— what Annie and I have been doing over the last 5 or 6 months opened me up to what I didn't know because I haven't really talked about this even with you, Annie, but what that was. So Annie and I, you know, she said, I want to do a career transition. I said, why not technology? She said, sure, let's do it. And so all of a sudden we're staying up till midnight after the kids go to bed working on Inspect and doing push requests for Inspect profile to try to figure it out and as a mini project. And what I realized, I think one of the things that motivated that was that when you know something and you become the expert, you start to forget what it's like to learn it, and you lose empathy for people. And that's a little bit what you were saying, like, well, come on, it's obvious, just automate this stuff and let's get on with it. And you kind of turn into a jerk sometimes when you lose that empathy. And like, I remember this one time real early on where We were working on something and Annie was really struggling with it. It was obvious to me and I was—

**Annie:** [00:37:46] because I probably threw something.

**Michael:** Yeah, right. It was obvious to me and I'm like, oh yeah, this is not obvious stuff. And that empathy is what, as a change agent within my organization, that was kind of, I guess, the professional motivation for me to go through that journey. That empathy is what's needed for me to go to somebody who has no context for this, didn't even come to this event, and they're sitting down like, okay, what, Chef? Like, yeah, let's install ChefDK. I'll sit here while the bar goes up. I know, I'm right here, I'm not gonna go off. All right, now first thing let's do, let's open up an editor like Sublime or Visual Studio Code or something. And the empathy that I learned from that experience and from other experiences since then kind of fuels that ability to engage people on that level where I'm not the expert anymore, but I can kind of feel what they were feeling.

**Trevor:** I mean, that was definitely— when I first started helping other people learn Chef, I was still pretty green. I was asking Matt questions all the time, like, hey Matt, I'm trying— At ChefConf this year, Fletcher got the test kitchen running on Windows, but like, I don't understand any of this stuff. And like, I tried building a kitchen YAML, but like, everything seems to be broken and on fire. Help. And, you know, asking those questions helped. And then like needing to immediately start teaching that as well. A, it helped me learn, and B, you're right, it gave me a level of empathy to others needing to get behind that process as well. And now you made me wonder if I've forgotten some of that.

**Michael:** [00:39:36] So that gets me to engage the normal people who don't have it all down and just expose yourself to differences from your own experience. It makes for a well-rounded person. That's why one of the reasons I love traveling.

**Trevor:** Yes, absolutely. That's, you know, it As much as sometimes I get frustrated with all the different countries I find myself in, that's my favorite thing about actually being there. I think the part I hate is actually the plane.

**Michael:** Yeah, or the fact that the Earth is round and the sun is like moving, or, you know, whatever you're gonna say. But yeah, the jet lag part of it is hard.

**Trevor:** Yeah, or the 16-hour flight. Yeah, yeah. But once you get to be a part of another culture like that and participate and learn the different ways that people think. That's a lot of fun. And you're right, it does, it does introduce a component of empathy that I don't think I recognize as empathy, but totally is.

**Jean:** Mm-hmm.

**Michael:** It's almost— that's something that I learned yesterday, is you kind of don't learn empathy until you come across somebody who's disagreeing with you or got it— is on a path that you wouldn't have been on yourself. And that's where empathy comes from. And if you're exposing yourself to only people who agree with you, or you're kind of— you run away from disagreement— oh, that person has a different outlook than I do, and I might even secretly think they're stupid— but then if you run from that, then you lose the empathy, and then you lose the ability to engage people.

**Coté:** [00:41:01] We probably need to wrap up soon, but do you guys have any questions? Or a question?

**Nathen:** What questions can we answer for you?

**Michael:** Yeah, so we talked about the people who their boss sent them here. How do we convince our boss to come here next year or to come with us to a DevOps Live?

**Coté:** Sure, how do you convince your boss to get involved? Well, you can tell them that you got a free Yeti. That's pretty good. It's like a $30, $40 value right there. Most people respond to that. I think, yeah, I think what I find in when we figure that out, because, you know, we have big sales, so we have to climb up the ladder to find the person with the checkbook. It's you basically just figure out what their— this is like a Dale Carnegie answer— you figure out what their motivations are and their goals, and then you help them solve that problem, right? So I mean, there's 2 tracks. Either like they're generally interested in it and they just need to be— you have to free up their barriers to come to it, right? So they might be like, oh, I really like that, but I'm too busy because I'm a big boss person. And you could just say like, no, you're not too busy, you should go. And you can just kind of give them permission to not care about it. You know, that kind of hustle works with people. Or otherwise, you have to figure out like how— like, you know, this is part of the pitch I try to give people is like, unless your management's involved, it's not going to work out at scale. And so to that end, you could be a little more like tough-lovey persuasive and say like, well, I went to this thing and they told me that like there's new ways you need to think about managing stuff and you're the only one who can make us be successful. I mean, the only is a bad way of putting it, but like you need to get involved and the result will be that we suck less, right? And I think if that doesn't work, then, you know, you could probably just give up on them. And move on to someone else.

**Michael:** [00:42:59] Yeah. At ChefConf, there was some events— there were some events that were for the director.

**Nathen:** Targeted towards the leadership.

**Trevor:** Yeah.

**Michael:** Yeah. So I wonder, have you— has anybody seen meetups appropriately target those people or maybe even tell the community, hey, this is the one you bring your boss to. Because you don't want to bring your boss to an event and she showed up to, for example, my presentation, which was very technical this morning, and she'll not be happy about it. But, you know, there is the Enterprise Summit. I don't know what they're called.

**Nathen:** The DevOps Enterprise Summit?

**Michael:** Yeah, right. That's something you could send your boss to, but that's another, you know, conference that they're going to have to schedule for. So, right, that's an interesting thought.

**Reuben:** Yeah.

**Michael:** What could you do as an event locally to engage people?

**Trevor:** Like a quarterly, like, bring your boss to DevOps Day?

**Michael:** [00:44:01] Yeah, bring him to DevOps— bring him or her to DevOps Live, and we have a topic that would reach their needs.

**Nathen:** Well, and that's the thing, right? None of us wants to go to I'm not a .NET developer. I have zero desire to go to a .NET conference. I will probably never find myself there unless it's talking about Chef and then I'll totally go. But like we have to— if you want to bring the management to an event, like there has to be some motivation for them to want to be there, right? There has to be content that's going to be good for them. Maybe what you do is invite them along to speak. Maybe there's a DevOps Live where we're gonna have some lightning talks, probably not Ignite, but let's call them lightning so that we don't have the auto-advancing, but you get 5 to 10 minutes. Why don't you come as a manager and, and help us as the DevOps practitioners, help us understand what's keeping you up at night, what are the things that you're looking for out of this team? And so if you could convince your boss to come and share that sort of information, maybe they'll, you they'll listen to the other talks that are there happening that night, which aren't going to be on that same topic, but might start to get better understanding of the things that we're talking about and the things that we're doing. So I would partner with them.

**Annie:** [00:45:18] Well, and outside of the conferences and stuff, I was thinking about Kote's talk, and you were talking about just how to get started in DevOps and pick 3 or 4 projects and start dabbling. And maybe you could find 3 or 4 pain points that your boss has and try to solve one of them in a DevOps way, you know, and just say, hey, if we can do that, if we can do that with DevOps, or if we can do that with automation or whatever, then start with a tiny project and try to get him or her to see the big picture. I don't know. Would that work?

**Michael:** Yeah. What we did at NCR. And so Annie was right there every day. I would come home and, you know, the security people, you know, they're not listening. I love you guys right now. I didn't 18 months ago. And it was like that, very strategic. Like, what are the things that we are going to focus on and how does that relate back to the boss question? How does that relate to—

**Annie:** [00:46:25] just do a little bit at a time so it doesn't freak them out.

**Michael:** Yeah, be patient with results. It's not going to be overnight, but, you know, soon enough you'll find yourself at a place that's completely different than you were. And it goes faster than— when you do it, you're surprised at how fast it went, but at the time it feels very slow.

**Coté:** Yeah, there's a— not to go on about it, but there's like 3 more things that all this is making me think of. One, as to put it in my own snarky way, something Nathan was saying, like, people love being famous, right? So you could get them on a panel or whatever, and that's a good way, like, hey, you're awesome, why don't you come over here? Like, that usually works out really well, like a hot dog on a string. And then the next thing is, like, one of the great things about DevOps Days for everyone, like the participants and the speakers and the sponsors, is pretty much all of them are recorded. And posted. So with this one and all the other ones, and the talks are only ever like, I guess, people like me, they turn out being 40 minutes, but they're usually like 30 minutes. And so you can find ones that your manager or your boss or whoever you want to convince to come and send that to them, right? Because that kind of gets over the, you know, ostensibly if you looked at a DevOps stage thing, you'd be like, this is no management thing, but it always turns out being a lot of people stuff. So you could find one of those talks and send them to be like, hey, this is interesting, what do you think of that? And sometimes that works. I mean, again, there's always the bucket of give up because it's a hopeless case. But like you can go for like people you can change, right? And then the third thing, I think I've forgotten what the third thing is. But I mean, I think again, like getting managers to come, I think it's just exactly what we've all been saying is figure out why they would come and what's in it for them and then bring them along for that. And also it's super cheap. Right? And so it's good, like, development stuff. And, you know, no one ever likes to pay for training, especially managers. So it's a good way to keep the budget down low to come to something like this.

**Nathen:** [00:48:25] And there are other places that you can basically curate content for your managers, right? You could hand them a copy of The Phoenix Project, which they won't read. So you can tell them that it's available as an audiobook so they can just listen to it, right? You can do something like that. You can give them Mark Schwartz's The Art of business value. So he's the CIO at the USCIS. Like, your manager probably will relate to a CIO and could read through that book. Also, that book is, I think, 98 pages long, so your manager can probably read it in a weekend, right? So you can do things like that. In addition to making the DevOps Days content available online through video, there's also the DevOps Enterprise Summit So that has— that's been going on for 3 years now, that has good content. And then we also take some of the content from DevOps Days, we'll take the recorded presentations and release them as a DevOps Days podcast. So you can actually subscribe to that and go and listen, just listen to the presentations that we've presented at the various DevOps Days.

**Coté:** [00:49:30] And I remember the third thing now.

**Michael:** You're welcome.

**Coté:** Sometimes it takes some mental, like, Like axe picking. Like, like the other thing, I mean, especially whether or not you've literally been asked by your, your, your boss to go check this thing out, uh, it's probably a good idea to like write up your thoughts on what we should do around here. Like, I'm sure there's some people, maybe they're in that bucket I keep mentioning, who come in, they're like— and this is the people who comment on my Register column, they're in this bucket— they're like, this is a bunch of, uh, swill. They don't— they probably use more colorful words than that. But like this, I went there for 2 days and like it was, it was fine and whatever, but there's nothing here, nothing to see here. So it'd be better even if you're kind of frowny to figure out how to turn your frown upside down and think about, so like I went to this thing, I'm gonna go back, I should write up not only what happened, like the stage directions and the notes, but how does this apply to us and how could we start doing it, right? And again, hopefully, you know, you might get homework assigned to you to actually go do something about it. So make sure you're cool with that. But like, it's good to be, as they used to say, proactive. And your manager hopefully will enjoy that and say like, oh, it was worth going to this, and here's some new things that we can think about. And then you kick off that process, and then maybe next year they'll actually want to go. So that's a long con to get them involved. But, you know, definitely making sure your conference notes are stuff we should do, not just things that happened, are an effective way to I don't know, do more than write a sad email.

**Trevor:** [00:50:57] So I think, does anybody have a question? One last question? I have one.

**Coté:** So I don't think that when you're implementing DevOps process, culture, or whatever at an organization, you don't one day walk out front and plant a flag and say, I have done DevOps here.

**Michael:** But when you started to feel like you had reached a level of success with it, especially for you, what was that timeline like? Like, how long did it take you to get buy-in from the entire organization and, you know, start to implement at least an A to Z type process, right? That could be a whole podcast episode.

**Trevor:** Yeah, absolutely. Yeah, so the question was kind of what does the timeline look like for, you know, agreeing that we, you know, there's not an endpoint to a DevOps motion, But where did you get to the point where you kind of recognize it as DevOps? And I think Nathan's— I think you and Adam have still my favorite answer to that question.

**Nathen:** [00:52:03] Yes, we do.

**Michael:** Which is?

**Coté:** The—

**Trevor:** your definition of DevOps, basically.

**Nathen:** Oh, the definition of DevOps.

**Trevor:** That I can do for sure. But I think to a point it addresses this question of we kind of are all doing DevOps because we're all practitioners and we're all trying to come together.

**Nathen:** Right, sure. So the definition that we use is that DevOps is a cultural and professional movement focused on how we build and operate high-velocity organizations built from the experiences of its practitioners. And so I think like, how do you— like, what's the timeline to get to A to Z and get the entire organization brought in? I don't want to speak out of school, Michael, but I'm not sure that the entirety of NCR is bought in yet, but you're doing DevOps, right?

**Michael:** Thank you. Yeah. Like right now.

**Clay:** Yes.

**Trevor:** This is the flag.

**Jean:** I made it.

**Nathen:** You made that flag.

**Annie:** You've done it.

**Michael:** Yeah. I would say I've been reading a fantastic book called Toyota Kata, and it talks about how Yes, the end state, the goal state as they would say, is massively important. And we've spent this conference talking about that goal state of this is what, this is what it looks like. But really the most important thing for you to do is on Monday to create a target for 2 weeks from now that is in the direction of the goal state that will make meaningful change. I would recommend that target being have lunch with somebody and ask them what their pain points are and try to start mapping pain points to things that you may be able to accomplish with automation and technology in terms of delivering software. And really, that will make it so that you sort of start with it, yeah, I'm doing DevOps right now, and you kind of move the flag forward, you know, where one time after that you create win after win after win. I mean, in the grand scheme of things, after the book is written for DevOps at NCR, honestly, 18 months into it, this could be the very beginning for us. But I have, within hospitality, within a great team, we have accomplished a lot of great things since then, but we're always looking at the next target and we're focused on getting to that next level over and over again.

**Trevor:** [00:54:33] Place I can get better.

**Michael:** Exactly.

**Nathen:** And I think as you reach those milestones where you've, you've completed a project or you've built a project in the new way, it's important to stop and take the time to market that and amplify that success and share that success across your organization. And when you do that, you're going to feel like, I keep saying the same thing over and over again, I'm telling the same story over and over again, and that's okay because you're telling it to new people, you're telling it to fresh ears that have to understand what this is about and get them excited about it as well.

**Trevor:** And I think that that's actually an awesome point to end on. So thank you, Nathan. All right. And thank you everybody for participating. Nathan, Annie, Kote, Dylan, Michael, thank you all for helping this all come together to get this podcast together. Thank you everybody for joining and participating. In the audience and asking questions and telling us how you felt while you were here. It'll be online soon. You can cheer if you want.
