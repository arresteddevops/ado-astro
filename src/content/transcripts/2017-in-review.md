**Bridget:** [00:00:00] For the people who have those questions, it's not the microphone, it's my stubbornness.

**Joe:** Yes, that's the answer to most questions. Why is it that way? Because Bridget's stubborn. Anyway, moving on.

**Matty:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness.

**Joe:** I'm Matt Stratton and co-hosting with me are Trevor Hess, Bridget Kromhout, and Joe LeHaye.

**Matty:** So it's here at the end of 2017, which means it's time to wrap up the year. So this is a special host-only episode with Bridget, Trevor, and myself. And joining and hosting is our pal Joe, who's the behind-the-scenes editor and also Attack Kitten wrangler. The show notes for this episode can be found at arresteddevops.com/2017inreview. And first, a word from our sponsors.

**Trevor:** [00:01:03] ChefConf will be held May 23rd through 26th in Chicago. Chef has been a longtime supporter of the DevOps movement and of this podcast. ChefConf will have talks on infrastructure automation with Chef, compliance automation with Inspect, application automation with Habitat, and a ton of other relevant content. Register with discount code ADO2018 to save 10%. Visit chefconf.com for all the details. And remember, code ADO2018 gets you 10% off the ticket price at chefconf.com.

**Bridget:** GoCD is the on-premise open-source continuous delivery server created by ThoughtWorks. With GoCD's comprehensive pipeline modeling, you can model complex workflows for multiple teams with ease. And GoCD's value stream map lets you track a change from commit to deploy at a glance. GoCD's real power is in the visibility it provides over your end-to-end workflow. So you get complete control of and visibility into your deployments across multiple teams. Say goodbye to deployment panic and hello to consistent, predictable deliveries. To learn more about GoCD, visit gocd.org/arrested to download. It's completely free to use. Commercial support and enterprise add-ons, including disaster recovery, are available.

**Matty:** [00:02:22] So as I mentioned before, this is our year-end wrap-up with no ghosts or guests, just your fearless hosts. So we're doing 2 different things this year. One is we're having Joe join us. Joe, can you tell the audience a bit about yourself and why you agreed to do anything with our silly show?

**Joe:** Well, I was, I was voluntold that I was going to be taking over editing these episodes from this person right here. Um, we share— we share a domicile and we share cats and things.

**Bridget:** Yeah, the other cat is howling upstairs. Yeah, no, no, no, her deal is take a break to check on the cat.

**Joe:** She's fine, she'll find her way down here. So yeah, I, I'm obviously, you know, with Bridget and I, I kind of travel around with her. So she was like, hey, you're not busy, edit these episodes.

**Bridget:** So And what Joe isn't telling you is he's actually an AV professional. So I strategically, um, started dating a cute tech theater boy in 1997. Turns out highly strategic for my job. Who knew?

**Matty:** [00:03:27] You're playing the long game there, right?

**Bridget:** Um, time travel, it's real. Uh, the other new thing we did is go to you, the listeners, to propose— or have you propose questions that you'd like us to answer. So we'll get to those in a little bit.

**Matty:** So the first thing we wanted to do, as we do in all of our year-end wrap-ups or year-in-review episodes, is kind of go back and think about our favorite episodes of the year. So Bridget, what were some of your favorite episodes?

**Bridget:** Well, I really enjoyed the live recordings we did at GOTO Chicago. They were super fun. And I also love the fact that besides the, you know, bigger multiple hosts at conference with audience type scenes, we also did a number of one-on- one fireside chats, and I always really like those too.

**Matty:** Trevor, what about you?

**Trevor:** I really enjoyed the Twitter banner around getting that live call show with Dr. Nicole Forsgren going, and I was really sad I had to miss it. Uh, there's also a ChefConf episode that's sitting on my Surface that I finally found the charger for after all the moving and shuffling that happened for me this year. And so I'm looking forward to getting that cut together and getting that out.

**Bridget:** [00:04:38] Nice.

**Trevor:** Matt, what about you?

**Matty:** Yeah, so I have to agree actually with both of you in different ways. So one is, yeah, the live call-in show with Dr. Nicole Forsgren was one of my favorites. It's always great when she's on the show and it was kind of a joint effort with Food Fight. And so it was really fun. And what happened is, it was a DevOps track chair for GOTO Chicago and for the For one of the days, the entire track was going to be recording Arrested DevOps episodes with people who had spoken in that track. And, you know, Bridget said, hey, it's in Chicago, you want to come host them with me? And I was like, well, that's easy enough, I can. And when we were kind of putting together the schedule of what we were going to do, I said, well, you know, should we kind of build in, like, maybe I'll do one of the episodes, maybe you'll take one episode as a break, because this is going to be a long day. But she's like, nah. Fuck that. We're just going through. And we did. And it was exhausting.

**Bridget:** Yeah, I'm never doing that again. When people are like, we'll do it live, never try to record 6 podcast episodes in a row.

**Matty:** [00:05:44] It got really silly towards the end. That's for sure. And then finally, recently in episode 97, which was the fireside chat with J. Paul Reed, I put that kind of on my list because Paul and I have been trying to do that episode for literally years. And we finally did it. But I think it was also a really good show. We talked about a lot that we haven't talked about necessarily, uh, in the show. So I check it out. Um, yeah. Joe, did you have anything you loved or hated or—

**Joe:** Oh, well, speaking as the person that has to edit these things, I always really like the, the live episodes because they're— because everybody's in the same room, everybody gets visual cues when they're done talking. There are less awkward pauses to edit out. They're usually the fastest episodes to get out the door. Are the ones where everybody's kind of in a room, everybody's looking at each other. Those are always fun. And plus they're usually in interesting places like Toronto and Madison. And, you know, so I get to go to these, I go to these places and hang out and see cool things like, you know, my favorite cities in Canada.

**Bridget:** [00:06:49] It's true, that's true. I guess we'll have to make it to Vancouver for one of these.

**Joe:** Yeah.

**Bridget:** So let's talk numbers for 2017.

**Matty:** Yeah, so it's always kind of fun to look at at some of our statistics, and it's fun, not necessarily telling, but as we always talk about in measurement in DevOps, it's not really about the number, it's about that the needle is moving in the direction you want it to be. So for example, we had about 22,000 visitors to our website in 2017, which is up from about 16,000 visitors in 2016. So that's, if I know anything about what number is bigger than the other, that's more this year than last year. Still about half of our traffic comes from search, which I think is pretty good. I think if you search for DevOps podcast, we rank pretty high and I don't really know what else. The funny thing is I still see people finding us by searching for Arrested DevOps. I'm like, it's the name of the site. Who is Googling Arrested? I don't know, whatever. What's cool is we do get inbound links from several places. Twitter is still the biggest one, about 6% of all of our traffic comes from tweets. And we still are getting, you know, in the range of 1% coming from stuff like make use of. There's a lot of websites. It's, you know, as everybody knows, listicles are a really easy way to do content. And being someone who looks at inbound links to a podcast, I can tell you that lists of popular DevOps-oriented podcasts is a really popular post to put on your website. And we're always on it and we're usually at the top because the alphabet. And I swear we didn't even do that on purpose, but it worked out pretty well. So sorry, you know, to the Zeta Max Podcast Deluxe. You guys are always at the bottom. So if we think about our episodes and one thing is, you know, I always like to say that there's 3 kinds of lies, lies, damn lies, and podcast listen statistics. Because what we really, the only thing we really can know is how many times an episode was downloaded. Which doesn't mean anybody listened to it.

**Bridget:** [00:08:58] Or maybe they listened to it like 10 times.

**Matty:** Correct. Now, one thing that's interesting is Apple just very, very recently, so much so that we don't really have a lot of data on it, but we'll probably have some stuff next year. So watch for the 2018 wrap-up. If you use the latest version of iOS or macOS and the Podcast app, it actually reports back to us. We can know, just like if you look in YouTube, how many minutes it was listened to. And what's kind of cool is I was looking and I'm seeing that the more recent episodes, people are listening to the whole thing, which is nice. Talking about the number of listens, uh, in 2017 we had about 263,000 listens, which was up by about 30,000 listens from 2016, which itself was up by about 30,000 listens from 2015. So every year there's about 30,000 more listens to our, to an episode. So I, that probably means a thing. There's probably some SEO guru that can tell you what it means, but I just know that it's cool. We're coming close to a million overall. I think we're at about 750,000 episode downloads right now. Our most listened to episode in 2017, and also our most watched YouTube video, was Old Geeks Yell at Cloud with Andrew Clay Shafer and Bryan Cantrill, which is at arresteddevops.com/yellingatcloud. I would like to point out that last year's— last year Bryan's episode was also our most watched video. So I think it means we need to have Bryan on the show once a month and hike up the sponsorship rates for any episode that Bryan is on.

**Joe:** [00:10:37] Guy gets the clicks. What can you say?

**Matty:** It does. I mean, it's clickbait. Bryan Cantrill clickbait. Um, we talk about updates to the website. So if you listen to last year's, uh, wrap-up show, Year in Review, I said, hey, we had Daniel J. Lewis from Audacity to Podcast do this whole review of how we could make our website and stuff better. And I made this huge list of it. Yeah, we didn't do any of those things, but we did disable comments. So if you wanna talk about the show to us— by request. Yes, it's fine. Nobody was really using 'em anyway, and it just keeps it from being toxic. And you know why risk it? Talk to us on Twitter. We like Twitter.

**Joe:** So yeah, why do, why do websites even have comment sections?

**Bridget:** They should not.

**Joe:** I mean, just stickiness. YouTube comments.

**Bridget:** It's actually—

**Joe:** you guys have YouTube comments enabled for this?

**Matty:** We do, but there's not a lot of— it hasn't been a thing yet. So yeah, I think they do it for stickiness, right? Like so that you leave a comment and then people come back to like see if people replied to them and stuff. But for us, we don't really care because it's not like we have ads on the page. Um, so it doesn't really do anything for us.

**Bridget:** [00:11:44] To be honest, you're the only person who would probably reply to anything.

**Matty:** I am. I generally don't do these things. I saw more that people reply to the guests themselves. I mean, you know, but, but again, that's why we— why there's Twitter. So, uh, hey Bridget, what did you do this year in 2017?

**Bridget:** Well, um, I got a new job back in September. Doing dev advocacy at Microsoft. And I kept scaling DevOps Days up with the help of you and a bunch of other fine folks. We had 51 events on 6 continents, which is not a small conference series. And I also, unrelated to that, did way less conference speaking and was on more conference program committees. And I think that's mostly the 29 conference talks in 2016 was far too many. I haven't counted 2017 yet, but it was definitely less than half that. So, yeah, that's pretty much what's new with me this year.

**Joe:** [00:12:51] How about you?

**Matty:** So, I also got a new job, but it was— I was going to say it was a lot more recently, but not really. I mean, it was like a couple of weeks ago. But yeah, so as of the beginning of December, I am a DevOps Evangelist at PagerDuty. So, I guess this means that Trevor's gonna come to PagerDuty in a year or two. Sorry, Jeff, just kidding. But it's pretty, I'm very excited working with Eric Sigler, if you know him from the circuit. And what it kind of boiled down to is I realized a lot of things I was doing in my spare time are now my job, which is pretty rad. And PagerDuty has always had a special place in my heart. PagerDuty is one of the first sponsors of this show, worked with them a lot on DevOps Days, shouldn't say them, work with us. That sounds weird now. Uh, so it's, it's, it's pretty cool to be there. Um, plus it means I get to go to San Francisco a bunch. Uh, I, uh, and you fly United out of Chicago, right? Yeah.

**Bridget:** You probably have a better experience than I have at SFO with Delta. They have like 8 gates and it's just sadness and that Perry's place you get really sick of.

**Matty:** [00:13:59] Well, the thing is, and like my boss pointed this out, like no matter what your status is, Flying out of SFO, you're never getting upgraded because everybody in San Francisco is like double secret probation platinum. You know, it doesn't matter, you're not getting there. And, you know, so I'm just gonna have to deal with that, but it's okay. But it's not as big of a deal flying out of Chicago. Yeah, I only, as far as I know, this is bad that I can remember, I spoke at DevOps Days Denver, but I think that might've been the only talk I did this year. Oh, I talked at ChefConf. Oh, shit, yeah. Whoops, that was bad. Okay, I also gave a talk at ChefConf. Obviously, it was memorable to me.

**Bridget:** You gotta get that lost episode from DevOps Days Chicago and/or ChefConf up.

**Matty:** I know, right? Yeah, and I went to DevOps Days Hartford, which was cool. It was the first one that they've done. I've said before, I love going to first DevOps Days. The energy is so interesting, everyone is losing their mind. But it's always so exciting and you never recapture that again in your event, certain parts of that. Like other things get better, but that first feeling is never the same. Hartford did a great job. It's an interesting community up there. A lot of organizations you wouldn't expect to see interested in DevOps show up. Went to Minneapolis, well-oiled machine, blah, blah, blah, you know, whatever. It was fine. It was a fantastic event though. You know, it's always, always great. Setting the bar high for all of us. And then I went to DevOps Days Madison, which was super fun for me and Joe and Bridget, because none of us had anything to do there except go and show up.

**Bridget:** [00:15:45] That's pretty great.

**Joe:** Yes.

**Matty:** Yeah, because it's no duties. Yeah, it was cool. It was just like, let's just talk.

**Joe:** And oh wait, we weren't even sitting at the booth.

**Matty:** I know, you're like, oh, you mean you don't have to run off and do something?

**Bridget:** Oh, cool.

**Matty:** So yeah, and I pulled off an acceptable DevOpsDays Chicago, so that was pretty good. What about you, Trevor? What'd you do this year?

**Trevor:** Well, I wrapped up my first year at Chef. Currently no plans of going to Patriot Duty, Matt. But it was first year at Chef, 4 continents, 5 if you count that New Zealand is technically on its own continent of Zealandia now.

**Matty:** Wait, what?

**Bridget:** Wait, is this like a Pluto's not a planet anymore? Now we have new continents?

**Trevor:** Yeah.

**Bridget:** When did this happen?

**Trevor:** It was 2016, I think it was either 2015 or 2016. Zealandia is its own continent off of Australia.

**Bridget:** Wait, so there's 8 continents?

**Trevor:** I don't think we have time for geography lessons.

**Matty:** [00:16:48] But this is relevant to the conversation.

**Trevor:** This is relevant to the conversation.

**Matty:** All of the bragging of the DevOps days.

**Bridget:** Yes. I can't make jokes about like we just have everything.

**Joe:** I think this is something that stays in Wellington, so I guess we're okay. Yeah, I think this is something that the Kiwis just decided.

**Matty:** Yeah, no one else is excited. No, it's like the mouse that roared, right? No one else is—

**Bridget:** that's a branding thing. Like, people excited— like, people got sick of Lord of the Rings.

**Joe:** Yeah, they're no longer Middle-earth.

**Trevor:** Yeah, well, no, Amazon might bring Middle-earth back to New Zealand.

**Bridget:** Wait, they're gonna put H2 in New Zealand?

**Joe:** Now Amazon might be doing a Lord of the Rings TV show because that hasn't been run into the ground enough.

**Trevor:** Thanks, Joe.

**Matty:** I thought, I thought you were gonna say Amazon might be doing the new TV show, which could very well be. You could have a whole show that's just rumors of what Amazon might be doing.

**Trevor:** Okay, all right, that'd be a great— yes. We could go down this loophole or wormhole for hours, I'm sure.

**Bridget:** [00:17:51] But I'm already picturing the reality TV show that's just the H2, like, you know, competition between cities.

**Matty:** Well, the good thing is that in previous year-end reviews, Bridget gets really, really bored when I get into the intricacies of podcasting. And we don't have to do it because we did that in the episode with Paul Reed. Paul and I, if you've listened to it, It goes, we talk about podcasting for a few minutes and I say, I swear to God, we're done talking about podcasting. And then we do it for like 10 more minutes. I'll admit, okay, this is the last one.

**Bridget:** I tried to listen to it and I did bounce out when you started talking about podcasting.

**Matty:** Just 30 seconds skip, like go about 20 minutes in and then it actually, we start talking about, oh man, what's the phrase? I'm gonna get it. Kafeman framework complexity.

**Trevor:** I don't know.

**Matty:** There's actually a whole lot of interesting stuff after the podcasting part as well.

**Trevor:** You know, they, they have interesting things.

**Bridget:** I also don't really groove on the like swirly chart thing, so maybe I'll just, Calm blue ocean.

**Trevor:** [00:18:52] We kind of, we kind of avoided doing the podcast in the green room before the show this time too.

**Matty:** That's true, we did. We're just sort of doing it during because that's the whole show.

**Bridget:** So mostly because we had to fix your audio issues. Yeah, pro tip for Trevor, you have to turn the volume up.

**Trevor:** Well, yeah, that's the lovely thing about my microphone is there's no indication on which way it goes, and it's been so long since I've used this microphone I didn't remember.

**Bridget:** Oh yes, the green room thing that everyone missed is Joe has decided that this is a whiskey podcast.

**Matty:** Yep, whiskey ops.

**Bridget:** Sorry, you were—

**Matty:** anyway, I did this year.

**Trevor:** I also spoke at DevOps Days Dallas, and I moved back to Chicago.

**Bridget:** Weren't you living in California or something?

**Matty:** Well, his stuff was in California. He was living on airplanes.

**Bridget:** Right.

**Matty:** Yeah, hotels.

**Trevor:** [00:19:52] According to, uh, according to American Airlines, I spent something like 3 weeks on a plane this year.

**Bridget:** Okay, so wait, you're, you're an American loyalist but you live in Chicago? Is it Chicago American?

**Matty:** American is— it's, it's one or the other. It's, it's American Hub too. You pick one or the other in Chicago. Usually it's American or United. So I found—

**Bridget:** everyone always says United, so I didn't even know American was a big thing there. So I looked at both.

**Matty:** I tried both And what I sort of determined is that the seats on United are— and maybe it's in my head, but they're about half an inch wider, it seems like. And that makes a difference to me.

**Trevor:** Yeah. But the biggest difference for me is I get upgraded on like 3 quarters of my flights.

**Matty:** Well, that doesn't matter because you're American. That's because you flew all of that on American. If you flew that much on United, it would still be the same thing.

**Trevor:** I thought you had to pay for your upgrades on United either way. No.

**Bridget:** Oh, we could, we could go down the airline, the chasing airline status rabbit hole forever. Like, honestly, I only made Platinum for 2018. I did not make Diamond, and I'm totally okay with this because that means I spent less time on planes.

**Matty:** [00:21:04] I only made Gold for 2018, which is fine because I only made Silver for 2017, which again, to Bridget's point, means I spent a lot less time on planes. That being said, I'm pretty much expecting for 10K for 2019 from what I understand my job is going to look like this year.

**Trevor:** So I stand by what I said last year— airline status is the best worst thing.

**Matty:** You stole that from Irving.

**Bridget:** Yeah, I stand by what I said, which is gamification of poor life choices. Yeah, but anyways, you move back to Chicago, Trevor. So do you live in the same part of Chicago? I don't know anything about Chicago.

**Trevor:** So I'm out in the suburbs right now, but eventually I will find a more permanent source of residency.

**Matty:** A source of it, a location.

**Bridget:** Are you in the adjacent to where Stratton keeps his stuff when he's in Chicago or other?

**Trevor:** About a half hour, 45 minutes away, depending on traffic.

**Matty:** Trevor lives closer to me than he lives to you.

**Bridget:** [00:22:08] I— how long does it take us to drive to Chicago, honey?

**Joe:** It's about 7 hours.

**Bridget:** Yeah, you know, uh, what— how does it go? Like, it's 100-something miles to Chicago, it's dark, we're wearing sunglasses, we got a full tank of gas, half a pack of cigarettes.

**Matty:** Yeah, yeah. No, it can't be that long because that only takes us like 8 or 9 hours to get to up north in Minnesota. Yeah, it's like 5 and a half, right?

**Bridget:** So like the last hour and a half is usually horrible traffic at the—

**Joe:** yeah, it's usually Chicago.

**Bridget:** It's because you're trying to get into the city.

**Joe:** So it's bumper to bumper, you know, going through tollbooths.

**Bridget:** And not to your northern suburb enclave of happiness. No, we're talking like Wacker Drive.

**Joe:** Yeah, this is, this is going to the, going to the Swiss Hotel, right? Go to Chicago was, which is like right, right across the street and down the block from the, from the Trump Hotel. Yeah, the Trump Building in Chicago.

**Trevor:** Oh, that's not fun.

**Joe:** No, that was quite a sight to walk out to when going to go get donuts or something.

**Matty:** [00:23:10] None of us are happy about it either.

**Trevor:** My now annual pilgrimage to Lake Mille Lacs up in Minnesota to go ice fishing, that's coming up soon.

**Joe:** Oh nice, and there will probably actually be ice.

**Trevor:** I mean, that's helpful typically.

**Matty:** Yeah, well, and we have our—

**Trevor:** still work, but it's colder.

**Matty:** Yeah, yeah, we've decided our, our family summer vacation from now on, you know, we did it once and we've decided it now will be the tradition until, you know, the end of time. But yeah, is, is going up to Brainerd. So we already, already are set.

**Bridget:** So the Lake Country is really nice.

**Matty:** It's, it's nice up there. And we decided we're gonna— because it's a really long drive to do both ways, so the way back we're gonna break up in Minneapolis at the Mall of America and just— but spend the night, you know, like drive there, let the kids go to the mall and all that. So we did that last year, but we only stopped for lunch.

**Bridget:** But so didn't they attach some new hotels to the mall?

**Joe:** Yeah, well, there's a There's a Blue and now there's the JW Marriott, which is on the other side of the mall from the Blue. And it's supposedly super, super nice. I haven't been inside.

**Matty:** [00:24:17] Hope so. I just booked a room in it yesterday for then. So we'll see. So hey, listeners, fascinating stuff, right?

**Trevor:** Hey, wait, wait, wait. Before we get to that part.

**Bridget:** Oh, geez.

**Matty:** Yeah.

**Trevor:** Joe, what did you do this year?

**Joe:** Well, unlike all y'all, I did not change jobs.

**Matty:** Well, Trevor didn't change jobs either.

**Joe:** He recently started a job. In fact, in October I hit 20 years at my current employer, um, which is both awesome and kind of sad.

**Bridget:** Um, I think, well, first of all, they've changed their name and ownership several times. It's, it's like you don't have to get a different job, it just keeps changing.

**Matty:** Everything's changed but Joe.

**Joe:** Changes around. That's right. Uh, we traveled way less, which was, which was nice, which meant I, I got to actually do my actual job for a good chunk of the year from time to time. Um, but we did go to— we went to Iceland, which was, which was fun. Can recommend.

**Bridget:** Oh yeah, we celebrated our 20th anniversary back in March.

**Matty:** And congratulations.

**Joe:** [00:25:17] Yeah, 1997 was a weird year.

**Bridget:** Yeah, we decided to go hiking on a glacier, and the glacier was very melty because it was, it was March.

**Joe:** It poured down rain that day. I was, I was wetter than I have ever been.

**Bridget:** Yeah, it was like in our boots. Half the glacier was in our boots.

**Joe:** Yeah, yep. And we did a cross-country road trip in the magic space boat. We took that out to Seaside, Oregon.

**Matty:** Did you say space boat?

**Joe:** Yeah, well, this is the— you have to go look up like a space boat like that flies. No, you have to go look up the, the, the Oatmeal cartoon that he did about the Tesla, and he referred to it as a magic space boat.

**Bridget:** Okay, we can put a link in the show notes.

**Joe:** Yeah, so we, we had a— Bridget's— one of Bridget's old co-workers was getting married in Washington, so we decided to road trip it rather than fly. And then we decided to go to the coast just because.

**Bridget:** So that was 11 days on the road.

**Joe:** Yeah.

**Bridget:** Plans on writing a blog post perhaps?

**Joe:** [00:26:19] I've been, I've been told I have to about cross-country. You see how, you see how a lot of these things—

**Matty:** I, I was just going to say, I'm sensing a theme.

**Trevor:** Yeah.

**Bridget:** Yep.

**Joe:** But yeah, that was, that was probably the, the Iceland trip and the, and the, the electric car road trip are probably the highlights. Oh, and Dev Upstays Minneapolis.

**Bridget:** Dev Upstays Minneapolis was pretty great.

**Matty:** So I, I remember asking—

**Bridget:** escape rooms too. I think we did like, I don't know, we should probably pop those up. That's another blog post. Rate all the escape rooms.

**Matty:** Yeah, well, you should do one. So one of my, uh, my pals from the old swing dancing days actually runs an escape room that's just down the street from where I live that I went and did for the first time. You know, we went and did for the first time, uh, a while ago, and it's, it's pretty good. Does a really good job. One of the rooms is all— Trevor, you would love it, um, especially— but it's, uh, it's all game. It's actually game themed. So it's not only games, it's like you're in a room full of games and the games give clues, but then there's video game clues to it and board game clues to it. It's, it's really cool. Can't really tell you much more about it. But you should, yeah, it's called Clued In Escape Rooms, and they probably have a website. So Google it. We'll maybe put a link in the show notes and give Brian a shout-out. So tell him Arrested DevOps sent you, and he'll have no idea what you're talking about. So should we get into this Ask Us Anything That We're Willing to Answer section of the show?

**Bridget:** [00:27:48] Yes.

**Matty:** So I want to give, before we get started, so I got this idea. Specifically from the Go Time podcast. So, they're on— I'll put the link in the show notes. I just forgot the name of their— the changelog, right? Anyway, Go Time, Go Time FM, great podcast about Go. And they did an episode a while ago, which—

**Bridget:** By the way, 2 of the hosts, 2 of the 3 hosts are working at Microsoft. They're my colleagues, like, on my actual team. Oh, yeah, they're both recent Yep, Eric and Brian both work on the same team as me at Microsoft.

**Matty:** Yeah, it's awesome. But yeah, they did like kind of an AMA episode which actually mostly turned out to be talking about barbecue. Uh, we'll put a link in the show notes probably if we remember to do that. Uh, but I thought, I was like, wow, that seems like a really fun idea to do for our 100th episode, which is the end of the year episode of 2017. By the way, so this is like the 4 4 years we've been doing this show. Me and Trevor did our first episode the beginning of December of 2013, and it's good for a laugh to go back and listen to. So, if you go to restdevops.com/1, you can listen to it, and you can listen to us talk about all the things we're never going to do on the show, which we totally do. So, anyway, so we put it out there, and people sent us their— What's that?

**Trevor:** [00:29:12] Did you pull down episode 00?

**Matty:** It's on YouTube if you know where to look for it. There's an episode called episode 00, that's me and Trevor on a Hangout for about 2.5 minutes figuring out how Hangouts work.

**Trevor:** No, it's like 20 minutes.

**Bridget:** Okay.

**Matty:** Anyway, for this part, we asked you, the listeners, to just ask questions that you might have about DevOps, about our jobs, about things we're interested in. And we would answer them if we want to, which was our way of saying we reserve the right to, you know, if someone wants to ask something too personal, which I was really pleased that nobody did, which was cool. Thanks, y'all, for, you know, exceeding our expectations.

**Joe:** Thanks for having boundaries.

**Matty:** Yeah, right?

**Bridget:** That said, of course, we can't get to absolutely everything, but we're gonna try.

**Matty:** So if we don't answer your question, it's not because we thought it was inappropriate. It was just we do— we just don't have enough time. So, and we decided we would have Joe ask the questions because Yes. As usual, we just apparently we're all taking a cue from Bridget, and when something needs to get done, we just tell Joe to do it.

**Joe:** [00:30:14] Tell Joe to do it. Yes.

**Matty:** We just say, Joe, just why don't you just do this?

**Joe:** Yep. Yep. I am.

**Trevor:** I am.

**Joe:** I'm Judy, your Time Life operator, and I'll be asking questions here. All right. So we got two questions from listener at Undead Ops. Oh my!

**Matty:** First, wait before you go any further. This reminds me so much of the Dr. Horrible sing-along blog when he's reading the questions, and one of the people. Writes into was called Dead Not Sleeping. And when I saw that, that's what it made me think of.

**Joe:** Well, I will not be bursting into song. Nobody wants to hear that. Um, so that—

**Matty:** I was gonna say next year's year-end wrap-up will be the musical episode.

**Joe:** Will be the musical episode.

**Bridget:** I mean, to be fair, Joe has actually performed in theatrical musicals as a lead singing. Like, unlike me, who should not sing, uh, he can sing.

**Matty:** I think Trevor— yeah, I was going to say Trevor will do all the singing.

**Joe:** So you would be Sarah Michelle Gellar in the, uh—

**Matty:** [00:31:14] oh no, no, I'm, I'm going to be Alyson Hannigan.

**Bridget:** There we go.

**Joe:** All right, all right. So Undead Ops, uh, asks, intrigued by a day in the life of a developer advocate, uh, what does that look like? How does it differ between companies for those that hold similar positions with other companies? And since we do have 2 developer advocates on the line right now, I figured we can ask them. So take it away, developer advocates.

**Bridget:** I think we should start with Stratton since he's newest to it, so he can have a good compare contrast.

**Matty:** Sure. So I can tell you what I think my job is. The thing that's interesting right now is because I'm very new to it and the role is kind of nebulous, We're still figuring it out, but I can tell you the kinds of things that I'm intending to do. The main— there's kind of a 3-pronged kind of approach. And in the case of when we look at evangelism within—

**Bridget:** [00:32:16] point of order, by the way, you're not knocking on people's doors and asking them if they've heard the good news about—

**Matty:** Correct. Oh my God. My stepmom thinks this is the most hilarious title.

**Bridget:** You have to get that title fixed. Seriously. It's so embarrassing.

**Matty:** Well, it's, you know, it's what people are expecting. So, hey, you know, it goes back to Guy Kawasaki, and that's a pretty good lineage. I'll accept the, the idea is, is at one point, it's kind of being able to help grow the community, help support the community, the user base of that, in terms of understanding how can the product be made better. And I look at that from a bidirectional approach. So it's the ability to communicate things to the community and to the existing customer base that they might not be aware of, of how they can grow with the product, but then also being able to, because of spending time with the people that actually have their boots on the ground or that are actually using the products, be able to bring that back into our product teams and have conversations around it. And one of the reasons that this is actually specifically really kind of challenging with PagerDuty in the first part is it's really hard to do feature discovery in a product that you use during a firefight. Right? So, if you're in pager duty, you're in there because shit's on fire, yo. You don't want, like, a little popup going, hey, did you know about this new feature? You wanna be like, dude, get the fuck outta my way. I have to solve this incident. So, you know, kind of working through this advocacy as a way to help be able to communicate and looking at different ways to express new features, new ideas as they happen. We also look at how becoming subject matter experts, or again, as much as I make hay of making— of laughing at the term, but, you know, being a thought leader in the areas that we're experts in. PagerDuty is around incident response, around postmortem, and being able to say, okay, how do we develop practices that are good for that, work them internally ourselves, and then when we've got the rough edges sanded off, be able to share them with the community and then actually build practice around it. None of which is necessarily inherently part of our product, right? It doesn't mean like, oh, you have to use PagerDuty to be able, you know, an example of this, if you've looked at the incident command structure that PagerDuty espouses, you don't have to use PagerDuty to do that, right? It's easy, right? You know, and we'd like you to, but you don't have to.

**Bridget:** [00:34:41] And then— And you've given some good conference talks and workshops on that.

**Matty:** Yeah, absolutely. And most of them you'll see are actually about how we do things at PagerDuty ourselves. They're not how to use PagerDuty to be an incident commander. It's here's how we do incident command. And that dovetails nicely into the other piece of this advocacy, which is going and speaking at trade shows and conferences to kind of, and even that isn't even just giving a formal talk. I see it as participating in things like open spaces and discussions to get the conversation going and get some understanding, both spreading the, again, all joking aside, spreading the good news, right? But also hearing what people have to say and figuring out how to have those conversations. So those are some of the things. Right now, my job is a lot of, I have 2 ears and 1 mouth, and I'm just talking to everybody within the company that I can to understand what they do so that I can help with that message. And I think Bridget's a little further in her role, so she might have have a little more maturity around what she actually does day-to-day than I do.

**Bridget:** [00:35:50] I mean, that you're pretty much describing it. Like, if you're an advocate, you're not rolling up, like, as part of sales or marketing so much as you are the voice of the customer inside the company. You're the voice of the end user. So you need to understand the communities of practice that are using the, you know, software that you're advocating for. And then you need to go back and talk inside the company to people who might be in product or docs or whatever, to make sure that the way people are trying to use it and the way people hopefully are trying to understand it, or maybe even contribute to it, is getting listened to. So I see advocacy very much as advocating for the customer inside the organization so that the customer or the end user of the open source software gets what they, you know, hopefully are aiming for.

**Matty:** And, and I think it's, uh, you made an interesting point there where you said, you know, advocacy doesn't roll up to sales or marketing. That's not always true. I mean, but I—

**Bridget:** [00:36:59] but it doesn't, it doesn't seem to work. That's not really, that's not really what the goal often is, because the goal is making sure that the end user's voice is heard.

**Matty:** Something I just want to throw a plug in there. I don't know if there's a link for the pre-release of it, but Mary Thengvall is writing a book about developer advocacy that's going to be on Apress. So I'll try to remember to find the link for that if you want to learn more about that. The Library of Congress recommends reading her book when she's done writing it.

**Joe:** All right, so now we're going to move into, uh, kind of a— 2 people asked a similar question, and this one is specifically at Bridget. Uh, Undead Ops asks, uh, grew up really disliking everything Microsoft did, word, and now I've been liking the new direction, but it's a challenge. How did you come to terms with, quote, I'm working for Microsoft? And, uh, a similar question from Michael Hedgepath, uh, Bridget, being at Microsoft now, what aspects of Microsoft's culture and Azure offerings would you like to see grow to be more amenable to DevOps practices you've seen in the broader industry? Take it away, Microsoft girl.

**Bridget:** [00:38:14] It's pretty funny that I work for Microsoft now because I've literally never owned a Windows machine. One of the questions I asked them when I interviewed was if I needed to Windows now because I was like, I don't Windows. They said, no, it's not about that. Microsoft issued me a Mac. I literally have the Mac that we're running this podcast off of, so I can't pull it out and show it to you, but I have a Mac with a Microsoft asset tag on it. And my job is Linux and containers advocacy on Azure. So, it's basically, it's a very different Microsoft than the one that we were all kind of cranky with in the '90s. And I think it's important to realize that organizations that have been around for a while, like I worked at Pivotal before and we had a lot of customers that worked at 100-year-old banks and whatnot. And it's like organizations that have been around for a while are going to change a lot over time. And if you can join them at the right time and help shape some of that change, it's pretty exciting. And that's really where Microsoft is right now. In terms of like the culture and the offerings in Azure, I'm pretty excited about the fact that Microsoft is not just following but is also leading in this space in terms of like the work they're doing with, you know, Kubernetes and Azure Container Instances and a bunch of stuff in like the function space. The sort of thing that people get excited about is things that we have active development and active hacking happening on. Like we had a bunch of people from the team that I'm on, some of the, like, Eric St. Martin from the Go Time FM podcast, and Jessie Frazell, who's been on this podcast before, and she's, of course, well-known in other circles as well, and our boss, Brian Liston, all descended upon Austin before KubeCon just to do a bunch of hacking on, you know, our offerings in that space. Um, so the Virtual Kubelet is like, you know, an open source project that we have people from the advocacy team and other teams inside Microsoft actively working in open sourcing. So I don't know if that kind of communicates that it's definitely a different Microsoft than the one that we all thought Microsoft was, but it's— I think it's nice and it's exciting to see that this is a company that has a lot of open source contributions and a lot of exciting momentum in this space. I don't know if that answers the questions or not, but what do you think, moderator?

**Joe:** [00:40:55] You said a lot of words. No, you're fine. All right, moving on from listener JJ Ashgar, friend of the show, I believe, right, Tron?

**Matty:** Yeah, he's been on the show. We did an episode with him a while ago. He works at Chef, so he's worked with me, works with Trevor.

**Joe:** That's why the name sounded familiar.

**Matty:** Cool cat.

**Joe:** All right, so what's the best audiobook to listen to on a plane? Since we have— we've got a collection of road warriors here, what are you guys listening to on the plane?

**Bridget:** Best plane listening, Dulcet Tones of Michael Cote. Multiple podcasts to choose from. And listen to the Pivotal Conversations podcast, or Software Defined Talk, or the Software Defined Talk members-only white paper exegesis podcast. It's a very long name. You have a lot of choices.

**Matty:** That's called the We Are Contributed To You on Patreon podcast, right?

**Bridget:** Absolutely.

**Matty:** I think, yeah.

**Bridget:** [00:41:56] It's very entertaining. Yeah. So, I say Kotei's podcasts are great for a plane because It's soothing voice. And if you fall asleep and then wanna listen to it again later, you'll still enjoy it.

**Matty:** Similar. Yeah, I always find that for me, I don't listen to podcasts as much on planes. And I think it's for that reason that I need to listen to something that I don't mind if I fall asleep. 'Cause again, the best case scenario for me on the plane is that I sit down, put my headphones on, close my eyes, and next thing I know, I'm on the other runway at the other city. Right. Um, actually what usually happens is I wake up just as soon as the drink cart has passed me, but that's another story. So I, so what I do with audiobooks is I tend, and I really love audiobooks, um, and I fall asleep listening to them at home too, or in a hotel, like just when I'm going to bed. So I, I have a whole thing around falling asleep to books. Uh, but when I do that is I pick books that I either already know, maybe it's a book I've read, but I wanna hear the audio version. Or that I don't mind missing. So just some casual fiction. One thing I've learned to do though, first of all, is, you know, set the sleep timer so that if you do fall asleep, it doesn't go on for hours and you miss it. And I always set a little bookmark in the Audible app when I start it. So if I fall asleep right away, I know where to go back. Um, I've been relistening to, um, the, uh, The, uh, Ender's Shadow, the Shadow series by Orson Scott Card, which I'm conflicted cuz he's such a prick, the author, but I really, really like the books. Um, and they're, they're really well done. And again, since I've read them, they're easy to listen to. Um, I cannot recommend enough the audiobook version of The Goal. It's done like a radio play, which is really fun, uh, with lots of different actors doing your different, you know, different, uh, narrators doing all the different characters. And, uh, I'm, I'm working my way through The Stand. I think it's about 17 months long to listen to, but that's what I can't listen to when I'm gonna fall asleep because I want to listen to it. So that also, it means I listen, you know, so that's not a good choice for that. Um, but I would, I would agree. I think Soft Red Fine Talk is probably a fine, fine podcast to listen to on, on the plane. Uh, Trevor?

**Trevor:** [00:44:17] So I, I also tend not to listen to audiobooks or podcasts on a plane because I like to be doing— like, if I'm capable of doing something, I like to be doing something. And so lately audiobook has taken the form of Nintendo Switch, and so I'm playing through Zelda or Mario or one of the many independent titles that are now on the Switch. Um, I usually listen to audiobooks in the car Actually, because then I know I'm not going to fall asleep. And I also can't do anything else with my hands. Like, I literally can't do anything else with my hands but drive. So when I am listening to an audiobook, I also recommend The Goal because the Fullcast version is fantastic. That was— I actually went out of my way driving to keep listening to that one. And the Odyssey One series by Evan Curry is also something I've really enjoyed. It's this— it's humanity has built its first faster-than-light spaceship and they go out on their first mission and they find a distress signal and it goes from there.

**Matty:** [00:45:32] There's a— oh man, I got to look and see what it's— so I always start reading series because somebody makes some random reference in like a discussion thread because someone's like, you know, wouldn't it be weird if in the future, blah, blah, blah. And someone's like, that was the premise of this book. And I'm like, that sounds cool. I should listen to it or I should read it. And so the one I'm— so the book is called, um, the first book in the series. And I don't remember what the series is called. The first book in the series is called, um, The Shadow of the Torturer. Um, it's the, uh, it's a 4-volume thing, but it's like about something in the future and basically I guess the spoiler, which isn't much of a spoiler, is it's future Earth, but you don't know it's future Earth. It's like, you bastard, it was Earth all along, but you destroyed it. You maniacs. Yeah. But hopefully a little more interesting than that.

**Trevor:** The other one I listened to is Game of Thrones, but unfortunately the person who's been narrating most of the audiobooks recently passed away.

**Joe:** [00:46:37] Yeah, Roy Dotrice.

**Trevor:** Yeah, so unfortunately he won't be narrating the, the closing books should they ever—

**Joe:** if they ever come out. Yeah, I was reading something on Wikipedia yesterday about how he says Winds of Winter might come in 2018 or 2019. I swear, 20 never, or 20 never, right? Yeah, Brandon Sanderson better bone up on his Game of Thrones because he might be finishing that series.

**Bridget:** We go see him speak in like 2008.

**Joe:** Yes, we saw him at, at ValleyCon in scenic Fargo, North Dakota.

**Bridget:** I want to say it was 2008.

**Joe:** Tiny little, tiny little sci-fi convention. He was also at, uh, OddCon in Madison like the year before, but tiny little Fargo, North Dakota got George R.R. Martin to show up. And, and Peter Juracek and Londo Mollari from Babylon 5. And, uh, and they attend this time. I don't know. I don't know how— I don't know how they, how they ended up at that, uh, what bet they lost to end up in Fargo. We don't have any listeners in North Dakota, do we?

**Matty:** [00:47:46] Probably. I'm pretty sure if you listen, if you live in Fargo, North Dakota, you know you're a punchline.

**Joe:** Yeah.

**Bridget:** Okay, so realistically, a lot of times when we make choices to go do conferences Sometimes it's someplace where there's work-relevant interests and a customer there, and so that's why we said yes to that, blah blah blah. And sometimes it's a smaller venue or a smaller event in a, like, off-the-beaten-path place where we just want to go. Maybe we have family there, maybe we have friends who live driving distance. Like, people can have all sorts of motivations for wanting to do a smaller event in an off-the-beaten-path location.

**Matty:** Well, Bridget, there is such a thing as too much empathy.

**Joe:** I will say being at those, at those 2 smaller conferences, because it was, it was OddCon in Madison like the year before and then ValleyCon, ValleyCon in North Dakota, I mean, it was nice. You got a lot of, you got a lot of in-person time with, with the guests of honor. I mean, because you show up early to his panel or whatever and, and, and bullshit about the football season, you know, talk about, talk about the Giants and the Jets because George R.R. Martin is a is a New York football fan. And, you know, I think the— I think the Packers had just lost. This is 2000— this is 2008, early 2008, and the Packers had just gotten bounced out of the playoffs by the Giants. And he was in— he was in Wisconsin and was giving a lot of grief to the— to the locals about the— about the Giants beating them in the— in the NFC Championship Game.

**Trevor:** [00:49:17] Small conferences are amazing. That was— I met Ethan Phillips, who played Neelix in Star Trek Voyager, at a convention that Jen and I stumbled upon in— where was it? It's where Doctor Who gets filmed.

**Joe:** Cardiff.

**Matty:** Cardiff. Cardiff.

**Trevor:** In Cardiff, Wales. We had actually just gone to the Doctor Who Experience, and we'd stumbled upon a comic convention that was happening at the same time. And we had like an hour conversation with Ethan Phillips, and it was amazing.

**Joe:** We were talking about quantum physics Did you try to break into the Torchwood offices by whatever that, whatever that landmark is in Cardiff that hides the Torchwood offices?

**Trevor:** Didn't want to work for me. I just kept slamming into a waterfall.

**Joe:** I think, I think we've sewn up our nerd cred by knowing way too much about, about—

**Matty:** I'm pretty sure that when we pull these up in the iTunes analytics, we're gonna see a steep drop-off right about here.

**Joe:** Right about—

**Matty:** [00:50:18] I was gonna say about 7 minutes in.

**Joe:** Oh wait, you should come back because we talk about Doctor Who very briefly.

**Bridget:** Yeah.

**Matty:** Oh, oh, so, uh, yeah, next question.

**Joe:** All right, I'm gonna put in a brief plug for Delta Studio, um, because some of us just want to watch, you know, dumb action movies while we fly. And I spent—

**Matty:** I spent—

**Bridget:** let's work the whole time.

**Joe:** I spent a lot of last year catching up on movies I missed going to see in the theater. On planes to Europe last year and, and Australia. Although you hit, you hit the bottom of the barrel, like a 9-hour flight back from Europe, you run out of stuff to watch.

**Matty:** And really quick, so is that like their app that you can watch the movies for free as long as you use their app kind of thing?

**Joe:** Yeah, you can do that. And now they've started making any movie, any, any, uh, uh, any plane with the, with the little seat back screens, it's now free. Oh yeah, they make it, they make it free now. And you can also, you can also join the— you can use your— you can use the app on your phone or whatever.

**Matty:** [00:51:20] Yeah, on the occasional bigger screen, the occasional body on United still has DirecTV they try to sell you on the back. But they all have— you can just sit, if you have the United app, you can watch, you know, recent releases and stuff, which, yeah, I should do that more. I just download a bunch of Netflix. So basically, JJ, uh, sorry not sorry for not answering your question really at all.

**Joe:** Um, well, he has another question. Uh, another one about—

**Matty:** just as many non-answers to this one.

**Joe:** Another one about flying. Uh, what's the best thing to drink when 30,000 feet in the air, or 35,000 feet in the air?

**Bridget:** All right, and so like, and if this question is about like booze on planes, I gotta say dehydration mid-flight is rookie move. Someone made that mistake. I mean, was that—

**Joe:** that was, that was Flying to London, uh, I decided to have— I decided to have a couple of glasses of wine, uh, you know, with, with the dinner they serve you at like 11:30 at night.

**Bridget:** I told you not to.

**Joe:** [00:52:20] And I woke— I, I felt like a dried out— you know that scene in, in The Last Crusade where the guy picks the wrong Ark, the wrong, the wrong Grail, and just like dehydrates, uh, right before the woman's eyes? That's how I felt when I woke up from from 2 glasses of wine on a plane, you just dry out. So, so sparkling water with lime.

**Matty:** Yeah, it depends upon the length of the flight.

**Trevor:** Yeah, if you need to, if you needed to take the, like, if you're like, if you have anxiety about flying, maybe have one to like loosen yourself up a little bit, but then hydrate, hydrate, hydrate. I also said Coke and lime.

**Matty:** The best thing to drink on a plane is ginger ale. There's only 2 times you ever drink ginger ale. They're when you have a stomach bug or when you're on a plane. When else do you drink ginger ale? On airplanes. Also, don't be, you know, don't be afraid to just say, I want the whole can. Just do it. Like, it's weird. I've seen no rhyme or reason because every now and again they will sometimes offer it and sometimes don't. So I just say I want it.

**Trevor:** [00:53:23] Do they not give you the whole can by default on United? No.

**Matty:** Depends, depends on the flight.

**Joe:** They definitely don't on Delta, but they will if you ask for it.

**Matty:** Yeah, and sometimes they'll say— the flight attendant will say, do you want the whole can?

**Trevor:** The only time I see is like they don't give the full can on American lately, at least, is when the flight's less than an hour or like an hour and 30 minutes because they, they don't want you to have to go to the bathroom.

**Matty:** I mean, like, I don't understand what that has to do with this.

**Bridget:** So Trevor, you said Diet Coke and lime. Do they like squeeze the lime for you, or is it like the Coke is in a glass, or do they give you the whole can and then you like shove a lime in the can? How does this Diet Coke and lime work with this can consideration?

**Trevor:** Well, so they give you the can and your cup.

**Matty:** Okay, but they already probably give you a lime, right?

**Trevor:** Yeah, they give you usually like a coffee stirrer skewered with, or skewering a lime.

**Matty:** That's for the cocktails, but you can, yeah, they, you know.

**Bridget:** All right, so.

**Trevor:** Oh, moving on.

**Joe:** All right, this question comes from the Pete Chess Bot. Pete ChessBot wants to know, what is my purpose?

**Matty:** [00:54:30] The original purpose of Pete ChessBot was to troll Pete Cheslock. It worked. I also think its purpose is to explode, of course, which is, again, if you listen to the episode with Paul Reed, you'd get that joke. But just a little quick background on that. A few years ago, I was at the Agile Conference in Orlando, And was sitting again, this is, I'm not name dropping, I just wanna tell you the people that were there. I was sitting at dinner with Fletcher Nichol and with Pete Cheslock, and we were talking about various like spoofy, 'cause this is when there were all these different spoof accounts like DevOps Director and blah, blah, blah. And Pete was talking about how there were a bunch of like fake Pete Cheslock accounts that they were just the names. And we're like, how come there isn't an account named Pete Chesbot? That seems natural. And so like I was sitting next to Fletcher and Pete was across from me. And so I'm just like under the table with my phone registering the account. And then I tweet from it, but I tag, you know, @PeteCzeslak and Fletcher's laughing. And Pete says, you know what, it concerns me to hear the two of you giggling while my phone is vibrating. And then, you know, I kind of, you know, modified, forked an existing Markov bot and turned that into PeteCzesBot. And that's been running for some time. And its purpose is to cause me mirth. And amusement and also to confuse people. There's oftentimes in the type ahead in Twitter, you will get Pete Chessbot before Pete Cheslock. And I know Dominica De Grandis at an event was trying to actually get a hold of Pete on Twitter to find him and was talking to the Chessbot the entire time. And that, that was, you know, so that was a little unfortunate. So yeah.

**Joe:** [00:56:17] All right. And now we have the, the question that will comprise the bulk of the remaining of remainder of the episode. Um, because, because I know Matt's got some feels about this and I have all the opinions. Um, this is from an unidentified— an unidentified asker asks, can you buy better quality microphones to make the podcast easier to listen to?

**Matty:** Well, the first thing is we actually do have good quality microphones. The hosts do.

**Bridget:** Can we try to show that microphone?

**Joe:** Yes, this— we have a— we have a very nice Blue Yeti microphone that Stratton sent us.

**Bridget:** Yes, not to be confused with the whiskey that Stratton did not send us.

**Matty:** No, no, I could send you something. And I, I have a, I have a Yeti as well. I have some other— I have a Sennheiser. I have a couple different condensers that I use sometimes. But we have, we have good— as hosts, we have good stuff. The problem is like we have no control over our guests, right?

**Bridget:** [00:57:17] And like even if we switched away from Hangouts, I'm just gonna preempt that discussion, even if we did a whole bunch of—

**Matty:** who said you could Preempt what I want to talk about.

**Bridget:** I know, I'm just saying, but regardless, we couldn't solve guest issues without shipping them microphones and maybe insisting on them having hardline internet. Like, there's things about this over the years—

**Trevor:** we've talked about all of this over the years, and we've just— none of it has been feasible.

**Matty:** Well, there's always a chance.

**Bridget:** There is a lot of stuff we could do But this is where I'm difficult. I think at some point we will have a rift in the podcast, and it will be people who actually care how things sound and people like me who are all about the opportunistic ad hoc expedients. And I think it's a, it's a giant philosophical rift that's going to lead to somebody nailing things to a church door someday.

**Matty:** But I still disagree with the statement that this is about everything I'm talking about has nothing to do with opportunistic. It has to do with the fact that you want video.

**Bridget:** [00:58:22] That's true. I am difficult that way.

**Joe:** So Bridget is difficult. Film at 11. I agree.

**Matty:** Yeah. So there are— and this just for as listeners to know that none of these are easily solved problems. And like everything, it's a compromise. And as I've been teaching my sons, compromise is when you discuss things until you reach a point when nobody is happy. Um, so life—

**Joe:** as Tracy Jordan said, compromises are for lesser souls. Die, werewolf zombie.

**Matty:** So for example, uh, if you go back and listen to, um, the episode that I did with, with Paul Reed— I keep referring to it, but it's a good example— and also because the Chaos Slinger episode isn't up, but I'm going to talk about Paul's episode first. So that was episode 97. So in that one, the audio quality is quite high. And Paul and I were in different sides of the country. Now, to be fair, Paul also has a Blue Yeti mic, so he has a good mic.

**Bridget:** He is doing his own podcast, so he has good equipment, which makes it a bit—

**Matty:** but that's not even his mic from that. But I just wanna follow with me for a second because I'm gonna, um, prove a point. But we recorded that using a technology called double ending, which means what happens is everybody's audio is recorded locally and streamed up as it goes. So if there's blips in the internet, it doesn't affect the audio quality of the recording. So it's as good as record. So you don't need hardline internet or something like that because it's recording locally and then kind of shipping it up as it goes. Downside, can't do video. Okay. Now, or livestream. Or livestream, right? Which I think we don't really care as much about livestreaming anyway. We're livestreaming this episode. Bridget, is anybody even watching this?

**Joe:** [01:00:04] We have one viewer.

**Bridget:** Okay.

**Joe:** So I think it, I think it maxed out at 4.

**Matty:** Okay. So, I mean, it's cool if you guys did, if y'all did, but, you know, we don't really care about you now. But to contrast, as you'll also hear when you listen to the episode with Aaron Reinhardt that I'm in the process of editing. So Aaron was literally on the other side of the planet. He was like in China and he's on AirPods. He was not using a good mic. And it is probably one of the better sounding episodes we've ever done. If you compare it to, even if you compare it to how this one will sound of us with our really good mics, on Hangouts, you will hear that it sounds better. So, but there's, and I'm gonna defer and say like Bridget makes good points. Like the thing that's nice about video is we do have people who only watch us on YouTube. I don't know why, but they exist, right? They represent a very small portion of the audience, but they do exist.

**Bridget:** But they're disproportionately correlated with the ones who come up to us at conferences.

**Matty:** [01:01:05] I have— they come up to you, maybe they do.

**Bridget:** They come up to me and they're like, I love watching your podcast. And I'm like, watching my what? Oh right, there's video.

**Matty:** We have close to 1,000 subscribers on YouTube now, which, you know, kind of was in there. But we still, just to begin putting perspective, every episode gets about 7,000 listens and gets maybe 200 views. So point being, there's, there's possibly ways we could— we can start to make this work. We're trying to figure out the way that helps achieve the most, but there's always trade-offs. There's always things we can do to make it better.

**Joe:** All right, I will step in here and say that I did some math. Not my strong suit, but I did some math. We released, not counting this episode or the other episodes in the can, we released 18 episodes of the podcast this year. 10 of those were recorded somewhere other than our living room and office. So, you know, you kind of have to deal with what you have in the site where you're going to be recording. And some of those, some of those were, you know, very nice, very nice setups with microphones and nice recording equipment, like DevOps Days Minneapolis. A lot of the DevOps Days stuff, we just use the existing, the existing setup. But some of them, like the one year we did the— after DevOps Days Toronto, We just did it in there. Like, we found a room with, you know, we dragged all the organizers into a room, stuck them in front of the laptop, and recorded an episode. So sometimes you have to just record what you can with what you have handy. It's like the old— it's like the old saying, you know, what's the best camera? It's the one you have with you.

**Trevor:** [01:02:48] Yep.

**Joe:** I've recorded these episodes. I think you're the The most popular episode from last year was recorded on Bridget's iPhone.

**Bridget:** Yeah, the, the one with Bryan Cantrill.

**Joe:** The fireside chat with Bryan Cantrill was recorded on your iPhone.

**Bridget:** Yeah, I mean, that's—

**Joe:** it's—

**Matty:** so let's put it this way, everybody thinks they know the solution. The solution has nothing to do with the microphones. There's lots of other things that would make it sound better.

**Joe:** There, there are, there are other issues at play.

**Bridget:** Also, I guest on a lot of other people's Oh, I— go ahead, Trevor.

**Trevor:** I was gonna say, and it is, as you can tell, a point of contention.

**Matty:** I don't think it's contention. We're just trying to find the— otherwise, no, no. The other thing that sucks is every time that, like, I have nothing but good success with these double enders, and then every time I try to do it with Bridget, it goes terribly wrong. So I understand why she thinks it's a terrible idea, because she's had a 50% success rate too.

**Bridget:** So it's not just our podcast though, because remember I guest on other people's podcasts from time to time and I keep having these like, let's use Zencastr, and then we go to use it and then they're like, it just doesn't work. Okay, like it works for me and like their audio doesn't work and they're like, okay, Skype it is. And I'm like, great, Skype. So I don't know, it's not just our podcast like this. It seems like Hangouts is the least— it's the lowest common denominator of terribleness that almost always works just about adequately for everyone. How's that?

**Matty:** [01:04:23] I, I would, I would— the only challenge I would make, and then we'll get off this topic, is Bridget, how often do you listen to our show?

**Bridget:** Um, I did try to listen to the episode that had a lot of content in it that confused me. Um, and, uh, it sounded great.

**Matty:** Well, I'm talking about when, like, as listening on the— because I do listen, especially the ones I'm not on.

**Bridget:** So, um, Like, maybe I should bounce this question to Mr. Editing Them.

**Joe:** Yeah, I do listen to the— I listen to each episode probably 2 or 3 times.

**Matty:** Well, but the point, the reason I'm bringing that up is that when Bridget's saying everything is probably fine, I think we need to listen to, to put it from the perspective of the listener.

**Bridget:** Yeah. Well, from the perspective of the listener, Joe complains sometimes.

**Joe:** Oh, there are, there are Well, there are— there usually are some issues with Google Hangouts. It, it's not the best, but it's kind of the thing that everybody has that you can make work if you have to have video.

**Matty:** [01:05:28] You get rid of video, you solve so many problems.

**Joe:** Even if you're just— even if you're just doing a, you know, a quick recording that—

**Trevor:** no contention—

**Joe:** that somebody, you know, you just want to do— you're not gonna release the— you're not gonna release the video, but you just, you know, somebody's got 45 minutes to record an episode. What are you gonna use to do that?

**Matty:** You're just gonna jump on a Hangout, or you can jump on TriCaster, say, here's your link. There's no software for these other solutions. Zencastr, I don't know why it's so shitty, but it is, you know, like, brought to you by, by Casta, you know. I mean, I seriously don't know because I know Hanselman uses it. It's amazing for him. He must be in the fast lane. Net neutrality, yay. Um, I don't know.

**Bridget:** We're gonna just keep trying to make it better.

**Matty:** It's a— well, remember when we tried it that time and it was like for some reason I was high-pitched and nobody knows why?

**Bridget:** I've been on other people's podcasts where it just did not work, so I don't know.

**Trevor:** Yeah.

**Matty:** Anyhow, anyway, it ain't easy is what we're trying to say.

**Joe:** [01:06:31] So for the, for the people who, uh, ain't easy out there for a podcaster.

**Bridget:** Yeah, for the people who have those questions, it's not the microphone, it's my stubbornness.

**Joe:** Yes, that's the answer to most questions. Why is it that way? Because Bridget's stubborn. Anyway, moving on. A listener going by @R4V5, which I'm pretty sure is just supposed to be Rave, asks, any advice for new graduates or folks in their first DevOps roles? What do you recommend for continuing education?

**Trevor:** I guess as the youngest person on the podcast, As is frequently pointed out, I'll start the answer here. So, I would say it's probably a little cliché, but go to meetups, go talk to people, go do things. You don't know if that person you meet at the meetup is going to ask you to join a podcast and that you'll be continuing to do that 4 years later after several jobs and getting deeper and deeper into the DevOps world. A little bit more serious and less self-serving answer: don't blindly accept the status quo of places you are or work or will be. A lot of positive change is ignored or forgotten because people are used to the things being the way they are and nobody questions them. I've seen places where there was a mandatory 2-week waiting period from some random thing that happened 6 years ago that nobody was actually there anymore, whoever even went through whatever it was that happened. There was just a 2-week change period that was there for a reason, and nobody asked why.

**Bridget:** [01:08:14] And the reason probably didn't even exist anymore.

**Trevor:** Exactly. And so suddenly there's this, this 2-week dead period that they could just get rid of, and suddenly things went 2 weeks faster. So just don't, don't accept the status quo for the status quo. So be willing to challenge.

**Bridget:** I think that's a really good point too, because especially if people are new graduates or folks new in a role, they might think that they can't question or that they can't necessarily contribute when there's people who are more senior who have the answers already. But coming with fresh eyes or new ideas, you can challenge a lot of things that maybe people got set in their ways for no good reason.

**Matty:** I'm gonna, I'm gonna turn that on its ear and say that actually my experience has been the exact opposite, which is not that new people right outta school are afraid of telling you how things could be better, but actually they need to shut the hell up sometimes and learn and remember that they have, I mean, this is true of any time you go into a new role, to a new job. And I made this comment, I've learned this the hard way many times, is when, when you start a new job, this is the problem. You go through the interview cycle when your ego is stroked beyond belief because everyone is so excited for you to come join the organization and, wow, Joe, we can't wait for you to come on board. And we were hiring you because we've got all these problems and you're going to come and kick ass and crush it. Right? And then what happens is you're going to get there and they're going to be like, no, we don't want you to do anything yet. Right? You're going to come in with your guns a-blazing and everything's gonna go terrible because you're the new asshole that's coming in and trying to do all this stuff. And so, and then what you learn is you come in guns a-blazing and piss everybody off, and then you learn you should shut up and open your ears for a little while and learn how things work and then offer that. So my suggestion is to sort of temper what, what, what you're just saying, which is don't be afraid to challenge, but learn context. Don't— your first move isn't challenge. Challenge with context and with with flavor of where you're coming into, because there usually is a good reason that things are there, or at least there was a reason. You should understand it and learn what you can. And then, but, but don't be afraid to act. And what I would put it this way is challenging to me is more about asking questions.

**Trevor:** [01:10:36] Yeah.

**Matty:** The best way to challenge is not to say, don't do that, do this differently, is just say, why do we do it this way? I mean, that's, this already has happened to me. You know, I'm just by just asking, hey, it's my first day type questions. I've had a couple times people go, ah, shit. That's a good question. I don't really know. I guess we should fix that. You know, because you do have a set of eyes, but that fresh set of eyes is one that should be questioning, not correcting.

**Trevor:** Don't come in and assume you know everything. That wasn't what I meant by challenge the status quo.

**Matty:** Oh yeah. But that's, I was just trying to get some color. I think another thing if you're, if you're new in these roles, again, it's always about learning, is, is the sooner that you can kind of, uh, find someone who's willing to be your mentor, that helps a lot. And, and the best mentors are someone who are a couple, who are you 10 years from now. I just made up that number, by the way, but don't, don't get someone who is just the next rung up the ladder from you to be your mentor. That's— they, they've only gone through the one transition. But you want someone who has been where you are and who is where you want to be several times down the road. And you may change that.

**Trevor:** [01:11:53] And try to find a couple mentors. Yeah, you know, you may find different reasons, right? Exactly. For different things that you want to skill up on, things you want to understand, things you want to be better at. You know, because you will find that some mentors will, will come into your life and other mentors will leave your life. Or leave the same job you were at 2 weeks later. Or even later.

**Matty:** I would also make the recommendation if you would like to, to have somebody, but you don't, you don't go to somebody and say, hey Bridget, you wanna be my mentor? You know, because that's like a big thing unless you have like a mentoring program in your company and that's a thing. But usually when I think of the mentors I've had, they always start by just something like, hey, you know, if there's someone that you you think would be, you know, is in that position of, hey, this is me 5 years from now, and I want to be able to learn from them. You can approach them and say, hey, would you be willing to sit down with me and have a cup of coffee? Or can we, you know, brown bag together at lunch? I want to ask you a little bit about your career history or this challenge or whatever, you know, because putting on somebody, hey, be my mentor, that's— never do anything that looks like you're asking somebody to do more work. They probably are asking them to do more work. They probably won't want to do it, but ask somebody to talk about how smart they are. Everybody wants to do that.

**Joe:** [01:13:12] You know?

**Trevor:** Well, another way to build yourself up too is after, after different events or circumstances or projects, don't be afraid to ask for feedback from your colleagues. You know, how did, how did I do in that meeting? How did, like, How did that approach I took make sense? Get feedback about what it is you just did and get it while that's still current and something that recently happened to kind of get your own feedback loop so that you can continuously improve yourself.

**Joe:** Okay, next question. Alex Garcia Tomas— Tomas? That looks like Tomas to me— asks about the difference between SRE and DevOps and how to get into both of them.

**Bridget:** Okay, so I'm gonna point out that SRE is a job title and DevOps is a cultural practice. And I know people love to put DevOps on all the job titles, but DevOps is about collaboration across your organization. So, like, I guess I would say the difference is one is a job that you do, and another thing, another one is something that you do at that job.

**Matty:** [01:14:27] Yeah, that's how you do your job. I like that.

**Bridget:** Um, so in terms of how to get into them, like, I've written a blog post about this, but I guess the TL;DR is you probably are going to have to do some learning on your own because there aren't necessarily academic programs that funnel you into this sort of thing. Stratton, it sounded like you wanted to contribute.

**Matty:** Yeah, I mean, I think the The tricky thing is, again, it's kind of, you know, learning how to operate systems at scale by yourself is kind of hard, right? So one of the ways to think about it is look at organizations that you can help from a volunteer perspective, which again, aren't gonna be, you know, high scale, but even getting the chance to kind of get your arms around some stuff, it's the same way, you know, people don't turn away free work. You know, or, you know, free help. So, any way you can kind of get into that, because even if you don't, and then you just sort of have to get in small, and I've got news for you, your first job is not going to be being an SRE at Google. Sorry, not sorry, right? Pay your dues.

**Bridget:** [01:15:39] Like, there's a lot of places that you can try out some of these practices that aren't necessarily the biggest places on the planet, and it's probably a good idea to try some of the, uh, you know, places that aren't the biggest place on the planet first.

**Joe:** All right, moving on. We got 2 questions left. Um, this one is from @GarthK. Party on, Garth. Um, what hot tools or techniques should you not attempt to use if your ops headcount is genuinely zero?

**Bridget:** Okay, so hot annoys me. So that I will refer you to Alice Goldfuss's hilarious tweet where she talked about when people call computers sexy, I imagine someone humping a monitor. So, like, I'll read that as trendy, like trendy tools, techniques, etc. And I think the answer there is obviously you should use tools because you need them. Like Charity Majors has gone on some great rants about how the best tool is one you don't even need. And, like, the next best is SaaS. Like, picking tech because it's trendy is great for resume-driven development and terrible for your employer. So, like, you should not be selecting technology to use in production because it made the front page of Hacker News. That's a great way to get yourself paged in the middle of the night.

**Matty:** [01:17:02] And I know, I mean, from Garrett's question, and he had said, like, in his comment, he said, you know, he's been tilting at this windmill himself. So the question, you know, what shouldn't you attempt to use if your headcount is generally zero is anything that requires someone who knows ops, then don't do it. It's, and I know this isn't helping you, man, because, but it is sometimes as simple as that. If to be able to leverage it requires a knowledge, an operational knowledge, and again, to go back to Charity, like ops is a skill, right? So if you don't have ops headcount, then yes, to Bridget's point, SaaS that shit up. If you don't have ops headcount, you don't get to have systems. Well, you get to be servers, right?

**Bridget:** There's actually a lot of really great stuff that you can do by gluing together components at your IaaS, by using platform-as-a-service offerings, by using every single thing that you can decompose into a, this is SaaS someone else does. Heidi Waterhouse, for example, is a developer advocate for LaunchDarkly. They are literally feature flags as a service. So, even if you're thinking, oh gosh, it's going to be really difficult to support doing canary releases because we just don't have the operational overhead, we can't handle the overhead to do something like that, there's a SaaS for that. There's a SaaS for many things you might not even think there's a SaaS for.

**Matty:** [01:18:29] There's someone willing to take your money.

**Bridget:** There's someone willing to take your money, and a lot of them are actually good, right? Right. Definitely worth looking at. So I feel like the question was kind of phrased negatively in terms of what should you not attempt to use. And I, answering it, you know, just straight up, I'd say when you start borrowing trouble in the form of, um, creating a ton of complexity by making, for example, a whole bunch of tiered microservices and a lot of tricky interdependencies between different parts of your stack. Watch out for something like that. Facebook scaled pretty darn big with a PHP monolith. So, you don't necessarily have to try to use every single thing that you hear about or read about, or that made the front page of somewhere, or that was the top conference talk at somewhere. All those things aren't necessarily going to help your organization reach its goals. So, figure out what those goals are, and then use the minimum viable complexity to get you there.

**Joe:** [01:19:39] Alrighty then. Summing up, what tools should you not use? The answer, tools. All of them. Yes. DevOps Kosh says, what tools should I use? The answer, yes. Another Babylon 5 reference. All right, the final question of the evening. A listener asks, ops people at my job aren't interested in automation. In fact, at times they are afraid of it. How can I get them engaged? Am I missing certain knowledge to get accepted? How does one fight against the fear of automation in this age? And go. Let's hear it.

**Matty:** So here's what it boils down to. If you are afraid that automation is going to replace your job, then you probably don't provide value to your organization. You better find a new goddamn job because it's happening right now. The thing is, generally speaking, automation is not a headcount reduction practice. And if that's the way your company's approaching it, they are going to be in for a bad, bad day. What it's doing is it's an efficiency thing, right? It's saying there's lots way better, better use of your time. Than doing these manual tasks. So what I look at is, so, uh, so listener, when you're saying I can't get people really interested in my automation, say, isn't there anything you'd rather be doing? Is this the extent of the value? Now you're gonna have to think about how to wordsmith this better because you know your cranky sysadmins better than me, but the gist is, is, is doing these tasks manually, is this the absolute extent of the value you can provide here? Isn't there something cooler you'd rather do in this organization? What would you be doing if you didn't have to do these things? So you start bringing that up and start getting them to think that way. And then they're like, well, yeah, I'd rather do blah, blah, blah. Or I also ask them like, what would you be, you know, if we had, if we had more people in your team, what could you be getting done? Because that's the way that they think about it. They're like, well, we have other shit we would like to do, but we don't have enough people on the team.

**Bridget:** [01:21:30] Well, and I, as I spent enough time as a cranky sysadmin that I could also add, when you say to the cranky sysadmin, well, what does your backlog of tasks look like? Like, how long would it take you to actually finish all of the burning and maybe just kind of aspirational desires that you have of things you want to accomplish with your systems and your infrastructure? And if they have a giant backlog, and don't tell me they don't, they have a giant backlog of stuff they want to do, it's like, hey, what if we removed some of the tedious repetitive work so that you didn't have to do that anymore, and now you could tackle the giant projects you've been wanting to do.

**Matty:** There's also the part about this about being afraid of automation, and that's where you give the opportunity to be empathetic and ask and do active listening to understand what are they actually afraid of. Are they afraid that the automation is going to run rampant and make a mistake? So think about how can this automation be built in a way that it's test-driven, that, you know, you're treating your infrastructure as code, if that's the appropriate mechanism, that you're testing changes before they're made, and understand that actually automation provides less risk than manual change. Oftentimes, that's what'll happen. Oh, well, if we let, you know, Chef do this or Puppet do that, then it's just gonna go fuck everything up and blah, blah, blah. And it's like, well, you're a fallible human too, and you can go fuck up a bunch of shit too, right? The difference is we can't test to see because Puppet will do it the same way every time. Your practice run, you might do real good, and then you might screw it up in production. Chef's not gonna do that, right? So kind of helping that understanding, right, is that, hey, you know what, robots will only do what we tell them to do. Humans will do it differently every time because we're fallible meatbags.

**Trevor:** [01:23:19] And you may have to pepper some of this in too with small projects that show the value of automation, not only to those grumpy sysadmins, but also to leadership, so that the leadership sees the value in the automation and helps drive the change from that angle as well. Yep. And then as an absolute last resort, and I've been told recently this came from somebody else, but I first heard it from Steve Murawski, change your job or change your job.

**Matty:** That was Nathan Harvey, I think.

**Bridget:** Yeah, I think Nathan Harvey was—

**Matty:** he said that comes from Nathan's talk, the, uh, the you should quit your job talk. That makes sense. But either way, that's okay. Steve Murawski stole the in-flight magazine comment from us too, so he's just a big plagiarizer. No, no, totally. I'm just kidding. It's Steven, if you listen. But you still stand on the shoulders of giants.

**Bridget:** Yeah, I, I think probably the most valuable thing to take away from that is that we're all listening to and learning from each other, hopefully. So steal something from this podcast, say it at work, sounds smart.

**Matty:** [01:24:27] Hey, you know, Steve Jobs said, good artists copy, great artists steal, right there. Maybe, maybe that was him stealing that from Picasso, I think, actually. Um, so yeah, thus proving the point. Quid pro ergo. Oh, Joe, I do not envy you having to edit this episode.

**Trevor:** Once again, it's gone 3 times as long as planned.

**Bridget:** Do we have a goal for how short it's going to be when done?

**Joe:** It'll be like 5 minutes. Really? They should be— take out all the, all the digs at like other cities and states and like other random, random listeners. It'll be about 5 minutes.

**Matty:** Do you know how hard it is for me And God bless, I love the Des Moines group. They are really awesome. I have to say this because I've met them at events and stuff. But, and as someone who lived in Des Moines for a hot second, I felt like I could do it, but I used to make, I used to use Des Moines as my common, like, you know, like there's not a DevOps Days Des Moines, and now there is. Except now there is. So DevOps Days Fargo is next, is my new one. Okay, so if you'd like to hear us being self-indulgent about our show in past iterations, you can listen to our 20, We have our 2016 Year in Review, which is at arresteddevops.com/2016inreview. Also, you could go to arresteddevops.com/2015inreview. If you want to hear the 2014 show, it's at arresteddevops.com/ayearofado. Community and event stuff. Some upcoming conferences and open CFPs. Velocity San Jose is in June. Their CFP closes January 17th. Link in the show notes or, you know, Google. There's this thing for finding stuff. ScaleConf in Colombia. Wow, that's cool. scaleconfco.com. The CFP is open now, closing mid-January. ChefConf 2018 will be in Chicago where I live, and so does Trevor apparently. Go to chefconf.chef.io. CFP is open. It's closing the middle of January. And if you go to devopsdays.org/speaking, there's a whole bunch of open CFPs. I know because I just submitted talks to, like, 15 different conferences last week, so there's a bunch of open stuff. ADO2018 probably will get you 20% off a lot of DevOps Days once we tell everybody what the new code is, but it will get you for sure 10% off at ChefConf. If you go to restdevops.com/2017inreview, You'll check out the show notes for this episode. Hopefully, we'll remember at least half of the things we promised to put in there. You can sign up for our newsletter, support us on Patreon. If you go to restdevops.com/itunes, leave us a review in the iTunes Store. I throw that in as a shout-out to Kotei because he totally made fun of us for asking for iTunes reviews once before. But he does that too. I know, it's irony.

**Bridget:** [01:27:27] Did he get it from us?

**Matty:** I mean, get it from being a podcast. Um, and hey, if you want Arrested DevOps stickers, you can get them yourselves at arresteddevops.com/stickers. Uh, you have to pay for them, but they're cheap and we don't make any money off of it.

**Bridget:** So, ah, I will have to go look into that and then complain because they're too big. That's what I usually do about stickers. Our stickers are really good size. I don't actually notice. I have no stickers on my current, um, 12-inch laptop.

**Matty:** Oh, I went, I went super simple. I mean, I did. I went away from the, like, my skateboard in the '90s look, and I just have, like, the Breakathon sticker, which is a PagerDuty thing that we do. And then I did, like, the simple black cutout shadow cutout of the TARDIS on the bottom, and that is all. There'll be no other, no other branding on my laptop.

**Trevor:** I just have my ship idea sticker.

**Joe:** By way of comparison, That's the— that's what I got. That's what I got going on. I just added one for Escape Games Wisconsin because we did an awesome escape room when I was home for Christmas. So there.

**Matty:** [01:28:37] Well, I just got really upset because I had stickers that weren't just from events but actually were personally meaningful, and then I had to turn that laptop back into shop when I left, and I was like, well then why would I do this? This isn't a thing that I own, you know. I should put if they're meaningful, I should put it. So now I put them on my suitcase.

**Bridget:** Well, that's cool. Now this is a personal laptop. I just got it last summer and have not gotten around to putting stickers on it. I think it's like I collect stickers and then I kind of lay them out in a grid and know what I want the entire thing to look like, and then I put almost all the stickers on at once.

**Matty:** That was my last one that got stolen.

**Bridget:** Yeah, a few later. Yeah, but yeah, anyway, so yeah, so stickers, I will look into ours and then I will complain about them being too big.

**Joe:** And we're gonna have to get some because every time, you know, we run into people at a conference You never have stickers to give out.

**Matty:** Oh my God. Well, I will tell you this. So there's only 2 stickers you can buy on the store. You can get the classic, which is the square black one with the logo. And you can get one that very few people have seen, which is a spoof of the Arrested Development logo. It's a very— Bridget, you would like it. It's very small. It's a small oval. What you can't buy—

**Bridget:** [01:29:45] It would confuse me. Excellent.

**Matty:** What you can't buy is this one. One is the clear shaped one because they don't do those in that small of a run to do individuals. But those are the ones that if you ever do see Bridget or Trevor, myself, and I have done a reload to any of us, those are usually the stickers that we might have with ourselves. So, um, this was the Green Room podcast that actually just happened. I'm pretty sure that entire conversation about managing our sticker inventory with each other can probably get cut. So, don't tell me you're not my real dad. On the other hand, I think people might enjoy this.

**Bridget:** So, I mean, there's one way to find out. My favorite part of Software Defined Talk is when they're discussing Costco, okay? And I don't even go to Costco, it's just entertaining.

**Matty:** So, I'm gonna put this in here. If you found the discussion of our sticker inventory interesting, please tweet us @ArrestedDevOps and tell us so.

**Bridget:** Okay.

**Matty:** With that, you want to take us out?

**Joe:** Yeah, you bug her at a conference and she'll maybe— and I'll maybe ask you to go find— to go find— go into my bag and find, find a sticker, which has happened. Anyway, wrapping up, I'm Joe @JoeLeHay. I'm Bridget @BridgetCromhout.

**Trevor:** [01:31:03] I'm Trevor @TrevorGHess.

**Matty:** And I'm Matt @MattStratton.

**Trevor:** We're Arrested DevOps, and remember, there's always DevOps in the banana stand.
