**Alice:** [00:00:00] I want to encourage people to really look at what their business does to generate revenue and whether or not the thing you're currently building is part of that core value add. And I can't believe I just used those words.

**Matty:** It's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and optimize your team or organization for maximum DevOps awesomeness. I'm your co-host, Matt Stratton, and with me is Bridget Kromhout. We are coming to you live from DevOps Days Minneapolis 2019. We've got a great panel, we've got a great audience, and— but before we get into that, we need a word from our sponsors.

**Bridget:** DevOps shows that delivery automation is important. Our work is changing software, and software is useful after it's delivered. So how do we develop our delivery? Is it scattered across dozens of repos, or could we use code? Is it a loose collection of YAML and Bash, or can we unit test our delivery too? Do we even need all those pipelines? There is a better way. When you're tired of patching up pipelines, when you're serious about safe delivery of code, Check out Atomist at atomist.com.

[00:01:24] I am so excited. Wow. Usually we do live podcasts and there's like 5 people and it's like, wow, we have 15, 20 people who are interested in this. And for those who are listening and not watching, Maddie is absolutely using applause signs, which I was not aware that we had on this podcast. And apparently we do. All right. So, DevOps Days Minneapolis. Let's hear from our honored guest panelists. We'll start with our opening keynote speaker from this conference. Can you tell us about yourself? Give us your name. Tell us about yourself.

**Liz:** Hi, I'm Liz Fong-Jones. I'm a developer advocate at honeycomb.io, where we work on observability for everyone. And I have really enjoyed being here at DevOps Days Minneapolis for the first time. Yay!

**Bridget:** Awesome. Okay, cool. And then we also have our closing keynote speaker. Please tell us about yourself.

**Alice:** Yes. I'm Alice Goldfuss. I am an infra-type person at GitHub, and this is also my first time being at DevOps Days Minneapolis. And I'm just really excited to be here. It's always a fantastic show, and I always see it from afar with envy in my heart. And now I'm able to be here, and it's been great.

**Liz:** [00:02:36] Awesome.

**Bridget:** Love it. Okay. And then we are also fortunate enough, I think, in this community, we have, you know, Stratton, obviously, as an organizer from DevOps Days Chicago, as well as being on the core team with me, but we also are lucky enough that I think a lot of DevOps Days end up having someone visit from a different DevOps Days. So, I would love to hear from our visiting DevOps Days organizer, your name and what you're up to.

**RJ:** Hey, everyone. My name is RJ Williams. I am a co-organizer for DevOps Days Raleigh. I'm also a senior marketing specialist at ASBE, which is an IT training and coaching company. And, yeah, we came here— well, I came here to see exactly how different cities do DevOps, and I've been Very, very impressed. This is my first time at Minneapolis, and it won't be my last.

**Bridget:** Thank you. Awesome. I will put a plug in for— hey, Matty, if people are thinking to themselves when they're hearing this episode, I want to go to a DevOps Days, I live in the Upper Midwest, what should they do?

**Matty:** They should come to DevOps Days Chicago, which is August 27th and 28th in Chicago. And tickets are still available at devopsdays.org. You go find Chicago. It'll totally work out. And we'd love to see you there. But also, I was just going to ask RJ, when is DevOps Days Raleigh?

**RJ:** [00:03:54] You know what? I probably should have said that. Yeah. DevOps Days Raleigh 2019 is October 1st and 2nd. So, yeah. If you're in the Southeast area, please stop by.

**Liz:** Excitingly, DevOps Days New York, which I recently was roped into helping plan, is going to be in early 2020. So, that's also going to be exciting.

**Alice:** And DevOps Days Portland is coming up in September. I believe that is September 10th through 12th. The first day is a hackathon, and then the second 2 days, you have to deal with this all the time because I'm the MC. So, I'd love to see you there.

**Bridget:** Yes, more applause signs. Wait, one says clap. What does the other one say? Boo? Oh, I see how it is.

**Liz:** All right.

**Bridget:** So, I would just love to, for the people who weren't at DevOpsDays Minneapolis this year, I would love to have our opening and closing keynote speakers give us the, you know, let's see. It's not too long. It's more, I think that this podcast episode might come out before the video I'll get a chance to watch. So, tell me about what I'm going to find out when I hear from Liz.

**Liz:** [00:05:05] My talk is about the idea that you really need to focus on your people, processes, and culture to run more reliable systems, and that you can't really just buy an alphabet soup of tools. So, I kind of go into detail about what production excellence means to me and how to achieve it.

**Bridget:** Yeah, fantastic. And Alice, what was your talk about?

**Alice:** My talk was a lot of pain through the lens of 4.5 years of running containers in prod and why you may or may not want to do that yourself.

**Bridget:** Fantastic. I see you raising your mic, Matty. What do you think?

**Matty:** I always have to like make sure I'm signaling to Bridget that says I have a thing. So Alice, so given that, um, we don't want to give away your whole talk because we want people to come and watch it, um, but what are maybe a couple— can you give us one story, one thing that resonated from your talk that you, that you'd like to, to share?

**Bridget:** Oh, and I want to hear that from Liz too, but you guys tell us first.

**Matty:** We're going back and forth.

**Alice:** I would say, rather than, like, a specific anecdote, the real theme of my talk is that containers are just a tool, like any other kind of tool in your arsenal, and you shouldn't be deploying them just to deploy them because someone talked you into it in the conference hallway track. You should be really assessing if they are fixing the problem that you have, if they are really the solution that you need, and if they're not, then don't use them.

**Liz:** [00:06:24] And also, maybe, I think the one thing I took away from Ellis's talk as well is it takes serious investment in order to do it correctly. Exactly. So why do it yourself when you can pay the fine folks to run some of these things for you instead?

**Matty:** I'm a fan of throwing money at problems.

**Alice:** Yeah, I think that's a common thing that we find, especially in the startup land. Well, actually, these days startups, they tend to be purchasing a lot from the cloud, but I'm used to the days where it was like, oh, well, we'll just build it ourselves and that will somehow save money. And I want to encourage people to really look at what their business does to generate revenue and whether or not the thing you're currently building is part of that core value add. And I can't believe I just used those words. I'm personally sickened.

**Bridget:** One of us.

**Liz:** And in fact, right, like this was one of the things that Heidi said in her lightning talk last night was like, what's the goose that lays the eggs and what isn't the goose that lays the eggs? What winds up being goose meat?

**Matty:** I think that was— and we're talking about— so Heidi Waterhouse gave a great Ignite talk and talking about finding business value. And she said something in her talk that I put up in a lot of mine where I always will sit there and I'll say, do you know how your company makes money? If you don't, go find out. I'll wait.

**Liz:** [00:07:39] Right.

**Matty:** And that's a key thing. And Alice, you just reiterated that. And I think we're continually having this conversation now, which is understanding that business value or just understanding what our core differentiators— why do we exist as an organization and what are we doing that's driving towards that purpose, not just because it's fun or seems interesting or we think we could do it better, but if it's not what we do.

**Bridget:** Yeah, we, we got that, uh, in Alice's talk as well. The idea of, of course you can, but should you? And you have to decide. Like, there are decisions to make every day. We assume everyone here could definitely just start out by fabbing the chips and go up from there. However, You have to decide if that's a good use of your time. All right. So, I want to switch to hearing from RJ, because you were on a scouting mission. You were coming to DevOpsDays Minneapolis to find things out. What did you see? What did you learn? What did you find out?

**RJ:** I learned that legacy is an issue everywhere. It's complexity. Like, I've been hearing so much about complexity and, like, how you really need to navigate change in an agile, iterative way. And I think that was one of the biggest takeaways. And also, like, what Alex was talking about, everyone's DevOps is different. I think I heard that in the open space. And, like, just, you don't need to be using a certain tool, alphabet soup. You don't need to be using Jenkins or any other type of thing to know that you're doing DevOps. And I think that's one of the better takeaways I've gotten from here.

**Bridget:** [00:09:11] I love the alphabet soup callback to Liz's amazing talk. Which everyone should go watch when we have the video up. But one of the things I really liked is that you pointed out that we all, I think, do we all work at vendors? Do you work at a vendor? I know you work at a vendor. RJ, do you work at a vendor?

**RJ:** Not a vendor of training, but we do a lot of vendor training. Liz, training.

**Matty:** You sell something.

**Bridget:** Yeah, you sell some things. But it's always that fine line that Liz was kind of telling me later, or maybe earlier, that we walk is like, Obviously, we are not going to get up and do a conference talk that's just a vendor pitch unless it's like the sponsor slot. So if we're, um, if we're telling people you need observability, I mean, you're hearing it from Liz, so there might be a subtext you could buy some from Honeycomb. But then there's also— you made a really good point of you can buy the alphabet soup of vendor tools, but that isn't going to magically assemble itself into happiness for you. I'm just wondering if you can kind of expound on that a little bit more.

**Liz:** Yeah, definitely. What I think is the case, I think, let me spoil one of the punchlines from my talk, is that automation can help you and tools can help you with doing things you already know how to do. What about the things that you don't know how to do? What about the things that are not necessarily represented in your culture? You have to do that hard work first before you even think about adopting that tool. So, that's kind of, I think, one of the messages I wanted to send to kind of counteract the idea of, oh, Honeycomb is going to just magically solve your problem. No, it isn't, right?

**Alice:** [00:10:36] I really love that point that you made, and I feel like it's one that really needs to be just driven home time and time again, because we have the rise of DevOps days. It's been around for over a decade now, and there's a lot of people that associate DevOps with Docker and container technologies, and they think that if they purchase Docker and shove it into their system, then they therefore have DevOps. And DevOps is a culture. It is not tools.

**Bridget:** You're saying there's not 20 units of DevOps in that shipping container?

**Alice:** Yeah, neither can you hire a DevOps.

**Matty:** Well, I always like to say, you can't buy DevOps, but I sure as hell can sell you some.

**Liz:** Yeah, and I think that when we go back and think about the DevOps principles about continuous improvement and measurement, that really emphasizes that until you know what you're optimizing for, you really don't have a hope of succeeding. And that's why I emphasized, to the degree that Bridget thought was appropriate, the idea of service level indicators and of measuring what's your customer's experience. Is what you're doing making that better or not, right? Like, you know, not, I'm going to target all the 9s because I think I should have all the 9s, but instead, like, let's start somewhere, let's measure how people are doing, let's see whether they're happy or sad, and then let's calibrate from there.

**Bridget:** [00:11:46] Like in Charity: Is Amazing's Honeycomb t-shirt, 9s don't matter if users aren't happy.

**Matty:** I just got the email that mine is being delivered tomorrow.

**Bridget:** So I'm interested because, RJ, you mentioned that you work in the training world. Do you have people coming to you saying, teach us to dev some ops? Like, is that something they want?

**RJ:** Yeah, all the time. It's like they get an executive saying, we're DevOps now. And, like, all right, what does that really mean? I'm like, well, we can help you. The core principles, we can help you learn the core principles, but it's really all about culture, and that's going to be unique in every single team. Every single organization, and we just try to help you navigate that change through, like, coaching while we're training. So, it's really getting that one-to-one experience. That's what we try to focus on. That's the thing that we're selling you, is just, like, kind of coaching you through. And I think—

**Liz:** And how often do people come to you and say, like, I'd like to teach my devs to DevOps, versus, I'd like to teach my ops to DevOps? Because I often see people saying, like, oh, you need to teach your ops to code, and that's going to solve it all, right?

**RJ:** [00:12:56] Right, yeah. It's actually funny, like, we— most of our, I would say, our DevOps audience is, like, a lot of devs, and we want more ops because you can't have one without the other. And it's commonly found that people are just like, our developers now are doing DevOps because they were doing Agile. I'm like, what about your ops scene? Do you have Agile infrastructure? If the answer is no, then, like, you're not doing DevOps. So, I think it's kind of dev-leaning, and I think that's what the C-suite probably says, like, oh, because they're already agile, let's do DevOps, but it's something that needs to be scaled across both dev and ops, so that's what we kind of see.

**Bridget:** Yeah, so, like, the alphabet soup that Liz mentioned, whatever words people want to put on it in your organization, the important thing is that you do have repeatable processes and documentation and the ability to have humans in the loop where humans make sense. I like that Liz had an emphasis on that too, that it's not like you're automating to not have any people.

**Liz:** [00:13:57] Right, exactly, that we're automating in order to empower our people to do more, right? That you're not going to get better decisions if you take humans out of the loop. Instead, that if you empower humans to do more, they can make more intelligent decisions.

**RJ:** Right, and that's actually been another thread that I've noticed. It's just like the— not the fear of automation, but the automation point that everyone's been talking about. Like, there's still the human side of the people who are automating the things. All the things need to be automated, but like, not all the things need to be automated, but everything needs to have that human touch. And I've been loving seeing that talks touch upon that.

**Matty:** I think that that really comes into play with when we think about incident response and things like that, because like AIOps is like, another hot buzzword that everybody wants to be like, we can have all this ML that's gonna— and there's a lot of room for ML and stuff to like be able to help us make better decisions. But just because, you know, you still have to have that— what we're trying to do is get to that point when we say the automation can get it so that when the human is involved, they have all the information they could possibly need. Because a human has to make that judgment decision about, did that spike mean a thing? Right? Like, I mean, you know, Skynet eventually will probably run PagerDuty for you, but, you know, we're not there yet. And hopefully never, frankly.

**Bridget:** [00:15:16] I— for those who were watching the video, if they were zoomed in on Matty, they might not have seen my face twitch when he said AI, because I feel like we are in the golden era of AI washing, where everyone will add AI at the beginning of everything. And that makes it possible.

**Matty:** The new name for this podcast is AI DevOps.

**Bridget:** Yeah.

**Alice:** It's only AI when you're collecting fundraising, right?

**Bridget:** Yeah. What was it? It was—

**Alice:** It's AI when you're fundraising. It's ML when you're hiring engineers. And it's an if-else statement when you're actually making it.

**Bridget:** We don't even need the laugh sign. Yeah.

**RJ:** Yeah, yeah.

**Liz:** Oh, the thing that I was going to say is that this kind of false idea of automation and AI is going to solve everything, If you are laboring under that illusion, you need to watch Jessica Kerr's talk from yesterday, 'cause that was an amazing talk that debunked the idea that smarter automation requires stupider humans. It doesn't.

**Bridget:** [00:16:18] And I also, when we get all the videos up, I also think people will really appreciate Nivea Henry's talk, where we've all seen, like, you know, hey, that soap dispenser is racist. Like, we've all seen that, but she went into more depth about the problems in our algorithms that take anything that the people who created the system believe consciously or unconsciously, and they put them into the algorithms. And turns out, what was the kind of probably apocryphal tale? Pray, Mr. Babbage, if we put the wrong figures in, do the right answers come out? It's like, super not. Spoiler alert, no.

**Liz:** The other interesting angle with regard to that is not just the decisions we make about people, But also the exposure of information, like particularly relevant to folks in this city, is a large retail company decided they were going to mail like, you know, hey, congratulations, we figured out you're pregnant, mailers to people's houses, and that didn't go so well, right? Like we have to be conscious not just of making decisions, but publicizing people's information in ways that they don't want.

**Matty:** [00:17:23] So I was gonna slightly pivot, but I wanted to make sure that that was okay. 'Cause we planned this well. We are professional podcasters. We've only been doing this for, like, 6 years.

**Bridget:** I don't know. I gotta take issue with that because, like, are we professional podcasters?

**Matty:** Are we, like, professional developers? We're maintaining our amateur status so we can compete in the podcasting Olympics. So, I wanted to talk a little bit because we've got, you know, organizers/participants from lots of different— been to lots of different DevOps Days. And so, I—

**Bridget:** this is—

**Matty:** the 4th Minneapolis event that I've been at. This is the 6th one. And so, one thing I was kind of joking with RJ before is the beautiful thing is DevOps Day Chicago is always right after Minneapolis, which is super convenient for me because I always take at least one thing from this event and I bring it back and steal it for Chicago. So, my first question, which was for RJ, is I want to know, what are you going to take? What idea? What way of doing things here when you're like, oh, Minneapolis, That's a good idea. We are going to replicate that and take all the credit.

**RJ:** [00:18:29] I have actually a list of those. I can give you one definitely. It's the closed captioning. Like, that was like, how come no one on our team thought about that before? Like, it's so— and it speaks to like everything about this event that I appreciate was just like the thoughtfulness and the inclusion. Like, it's something that's like not hard. No, it is hard. Excuse me. It is hard to try to think of everyone's different situation, and I think maybe the closed captioning was probably one of the key things that I really liked about that.

**Liz:** Yeah, it's one of those interesting things where personally one of the choices that I've made is that in the year 2019, I'm only speaking at events that have either live captioning or captioning afterwards, and for 2020, I'm only speaking at conferences that have, like, live captioning for participants in the room, and, right, like, that Kind of persuading people that this is a basic criterion of accessibility that your conference needs to have, right? Like, that's something that we need to consistently get across as conference organizers and speakers, that this is where the bar is now, right? Like, you wouldn't have a conference without a code of conduct. Why are you having conferences that are not accessible?

**Bridget:** [00:19:37] And what I really think that I've heard from participants last year and this year is even if they never thought about captioning being valuable for them, Then they say later, oh, that was great. I managed to catch that thing I didn't hear. My attention wandered. I got a pager duty alert. Who at an ops-related conference would ever get pinged by something that takes their attention for a minute? I mean, I don't know, but that happens, right? And so, the ability to kind of catch up with the scroll back of what happened, we're all very used to being in a chat-based world. Seeing the text that just passed, I know it improves my live tweeting.

**Alice:** As someone who has a history of hearing problems, whoo-hoo surgeries, I just say that I love that there are live captions, and it really benefits people who, you know, you had the visible need, but then you also have people like me who are less visible but still very much need it and appreciate it.

**Bridget:** [00:20:39] And fun fact, When people are signing up for your conference, they may not put in some notes field that you have that they would really appreciate something. They may not even realize that it is something that is available, but they may appreciate it a lot when they get there and find out they can have it. But it's even better if you can decide ahead of time and publicize it so that people know that they are thought of and welcome. Like one of the other things we do for this event is we make sure to clarify that we will have space for nursing mothers. And we implement that. The hotel does have a space, but we mostly implement that with organizers who are not going to be in their hotel room between about 7 AM and 10 PM every day, clean up their room, have the hotel people come through and clean it, and we leave our key card at our info desk. A nursing mother was up using my room today. And I'm very happy that— and it doesn't take extra budget. I already have a room. So I'm very happy to make sure that we're trying to make a space that will allow more people to participate, maybe especially people who don't fall into the standard tech demographic that you're going to see at every event because the event was already set up to welcome them.

**Matty:** [00:22:00] Liz or Alice, based on other events, other DevOps Days, because again, one of the things that I love about DevOps Days is there's some things that are common. There's, I think we now have 5 rules to be a DevOps Days, you know, but there's very little, but there's commonality, but then there's always kind of the different flavor of the different events. So being, for both of you, this being your first time at Minneapolis, but you've been to other ones, I'm kind of curious what was something that felt specifically different about maybe the flavor of this, whether it's based on the community or the way the event goes, just kind of a compare contrast?

**Bridget:** Especially stuff that you might want to try to do, because we, we don't necessarily just need to say, Bridget, you did great. Well, that's cool, but like, what stuff can you find useful and what other people might find useful in their events?

**Alice:** Uh, so RJ has already mentioned the captioning, and Portland DevOps Days does captioning, so I'm all for that. Um, I, I would say one of the things that has always set DevOpsDays Minneapolis apart for me is the AV, the lighting, the stage setup, the production value. I mean, it's incredible. I feel like I'm toeing a line here because I really like that DevOpsDays are regional conferences and have kind of a regional flair, but I also really appreciate that you look at stills from this conference and you're like, damn, that's like a real conference.

**Matty:** [00:23:22] It's really not fair though. Because they have Joe.

**Alice:** Like, our first year of doing DevOps Days Portland, we couldn't afford a screen, and we had to borrow one from the local BSides group. And then, like, we've come a long way since then, but that's the kind of, like, scrappy regional flair that I'm used to. And then I come here, and it's just the production quality is incredible. And I know you have a fantastic, fantastic team setting it up. And that, to me, has always been a standout thing.

**Liz:** I think the flip side of that, though, is that part of how all of this magic happens is the sponsors who pay for it. And I think that the effort that DevOps Minneapolis has gone to to support sponsors, to have so many sponsors who are both hiring, who are tools vendors, right, who are all over the spectrum. I think that that's something that's not necessarily present even in events that are in large cities like mine, New York, right? And I think that that's something that, you know, the more you help out sponsors who see value out of it, the better your event will wind up being for attendees as well.

**Bridget:** Yeah. Sorry, I'm just gonna interrupt and say, we have Joe here because we were talking about the AV quality. And if you are going to run a DevOps Days, here's what I recommend you do in order to get amazing AV. First, time travel to the '90s and then start dating the really cute audiovisual tech. And then years later, turns out the cute theater major is an audiovisual professional and you happen to have someone who is on your committee and also works for the nation, if not world's largest Uh, AV provider, PS AV.

**Matty:** [00:24:55] So remember the part when I said it's not fair, right?

**Bridget:** This is—

**Liz:** I mean, you can hire his company's services.

**Bridget:** Everyone has the same opportunity to build a time machine. I interrupted you, Alice. Please continue.

**Alice:** Oh no, it's fine. I, I don't mind being upstaged by Joe at all. He's wonderful. Um, I was going to like— speaking of the sponsors and how this event caters to them really well, like, as an attendee, I look down, I So for those of you who aren't here in person, the sponsors have their own hall, and it's kind of a thin rectangle. And you have a door at one end that attendees come through, and you have dozens of sponsor tables. And then at the other end is the food. And so as an attendee, you must go through the sponsor gauntlet in order to get food. And as an attendee, I'm like, all right. But as a sponsor, I absolutely love it. And I love that that care was given to cater to the sponsors to get people talking and get people out there. And I think that's something that a lot of conferences good takeaway.

**RJ:** Totally. Uh, can I be 100% honest? Uh, I was trying to figure out which DevOps Days I wanted to go to, and I saw how many sponsors Minneapolis had, and I was just like, the organizing team cares about their sponsors, and that's why there's so many here. So I'm like— and that I was totally right. I'm like, it just spoke to the whole entire quality of the event just by seeing how many sponsors you had. So totally agree, sponsorship.

**Bridget:** [00:26:16] I think that I want to kind of say, and this is just probably maybe a lead-up to exactly what you're going to say, which is this is highly venue and logistics dependent because there are definitely events that would love to have more sponsors. But unless they have those sponsors sitting right there on the side, not able to talk during the talks, it might not work space-wise, just depending on the venue logistics. Go ahead, Matty.

**Matty:** I wasn't going to make excuses. I was going to say a nice thing. But you're right. I mean, but it is tricky. But one of the things that I think is great about the sponsors, and I think it's a reflection on the DevOps community and the tech community that's in Minneapolis is, again, how many local sponsors y'all have, which is really, really great. And one thing for those of you who are not local and maybe listening and stuff, so I go to a lot of DevOps meetups around the country. I run a few, and those of us who run meetups know that, you know, usually like 60, 70% attrition of the people who say they're going to show up at the meetup show up or whatever. So, I know when I've come to the Minneapolis DevOps meetup, I will go onto meetup.com and it will be 250 people attending. And then I walk in the door and I'm like, and here's 245. So, first of all, it's a huge meetup. It's just compared to any, you know, even in San Francisco, you know, when I've gone to meetups there and it's just like everybody shows up. You have a huge turnout for stuff. We have a huge turnout for this event. And you've got a great community. And I think you're local companies that are part of that community are invested in the community. And that's really something that I've noticed that I don't see as much everywhere else as much as I see it here.

**Bridget:** [00:27:53] Well, I think we can get that everywhere. And what the actionable item I would say there is, keep in mind, your local companies might be very pragmatic and they might say, we could send 4 people to the expensive conference on the coast, or we could send 20 people to the conference where they get to go to their own beds and sleep at night. And, you know, we don't have to feed them dinner or whatever. So, like, and we don't have to buy them a plane ticket. So, I think that there is something to be said for the regional events that aren't necessarily, like, one of the things I love about DevOpsDays is it is so decentralized. Like, you don't have to be at the one. No, all of them are the one for their local area. And so, like, I guess we have a little bit of time left, and I would love to hear what all the organizers, starting with you, Matty, feel is the one thing that you really want to make happen at your upcoming DevOpsDays event for your attendees, for your community.

**Matty:** [00:28:56] So, I think it's similar to the one thing that we always try to make happen. So, one thing that we do at our DevOpsDays, the badges do not say attendee. They say participant. And one of the things— and so we always talk about this and we say you're here as a participant. And one of the things we're doing this year, we just had a whole conversation about this internally. None of the badges are going to say speaker or sponsor or anything. They are all going to say participant. Some might have a different color for organizers to make it easier to identify staff or something. But, you know, that's— but even ours will say participant. So we really try to drive it to be a very participant-oriented event. And also, I know you said the one thing, but this is sort of the next bit, is a lot of us who are on the organizing committee, we go to a lot of these events and we see these talks, we see these things, and continually remember that the majority of the people that are attending that event, this might be the one event they go to all year, right? So we want to be able to provide a great experience when they can learn from each other and from the folks that we're bringing in. So really it's creating it as a learning participatory experience.

**Liz:** [00:30:17] I think in line with that, everyone has something to share and it's a matter of empowering them to do that. And I think that a couple of ways that I can certainly help with the New York call for papers process is making it more explicit. What are the criteria? Here's where to ask for help. And then in terms of open spaces, for getting more people to facilitate open spaces, I think that producing a more concrete guide of what does effective facilitation look like might help people who are new to facilitating put up their hand and say, yes, I'd like to propose an open space.

**RJ:** I would love to second that, because that's, as I said before, I took many notes on what I want to take away, but I think I keep on harping back to this, is the inclusion, just like I love the childcare room, just like really thinking about everyone, like everyone, and not just, you know, because like you said, there's a core demographic that we usually, you know, we see here, but like that's not everyone. So I think when I'm going back, I'm taking so many notes to my organizing group. I'm like, we just need— the bar has been raised. Someone said that before, and it's definitely been raised as far as inclusion goes. So I think that's one of my biggest takeaways.

**Alice:** [00:31:28] As the MC, and not so much an organizer that's involved throughout the year, my main goal is to, as kind of like the master of ceremonies, ensure everything is running smoothly, but also as like a community builder, make sure that for those 2 days we are together, people feel like a community. And I do that, you know, through humor, through being a good source of information, and also I try to normalize inclusive behaviors. So something that I fight for every single year, 'cause we're in a shared conference center space, is I make sure that we have a gender-neutral bathroom, and it is something that I locate and I announce every day, and it's just a normal thing. And I remind people, you know, don't question people when they go into the bathroom of their choice, and I just normalize those kind of behaviors. And I'm the person with power, I am on stage. If I am talking about it and normalizing it, that's because it is normal in this space, and you are going to treat it as normal too.

**RJ:** Love that.

**Bridget:** Yeah, I love that too. We have, we have signs and We went through a lot of talking and decision-making about how we would present our restroom signs, and I ended up going with signs that have iconography and pictures and words, and one says stalls and urinals, and one says stalls only. So it's like, you should choose the restroom that has the facilities you want instead of going with people-related labels, because it's like, mm, there's a wide range of people-related labels. So instead, labeling what's actually in there is— it gives people information to make their right choices. And I kind of feel like in terms of everything we do in technology, this is not unrelated. Because imagine we are documenting something for someone else. If we're making untoward assumptions about the end user, that documentation may not serve their needs. So it's like, I actually think about that. It's relevant. And honestly, I'll answer my own question and say the thing about Minneapolis that I appreciate so much is that the participant base who shows up here often works in a large enterprise. They often work in a very complex system. It is as brownfield as it comes, and it has a lot— the typical system people are talking about here has a lot of legacy. And so, guess what? Some of those people work at startups, but the startup has been there for 3 years, and it's changed tech stacks twice. It's not realistic to think we all get to build an adorable hello world app that has no legacy. If your system you're working on matters at all, you're probably gonna be integrating with something that came before. And so I really appreciate that our participant base here in the Twin Cities is very focused on that. It's like very focused on building from the good that we already have, as opposed to saying, we're just gonna wipe everything away and start fresh, 'Cause we're a little bit more pragmatic than that in the Midwest, I like to think.

**Matty:** [00:34:16] One thing I know we're not, you know, Bridget said we don't wanna have the, hey, good job, Bridget. Now, this is not good job, Bridget. This is good job, all the organizers. So just so we're clear. But someone said to me yesterday, one of my friends who's here, and he said, you know what, if I left tech, I would still come back to this event. I would not, I never miss this event, and I would not miss it even if I wasn't working in tech. Anymore. And then he also said, also probably Chicago. And I'm like, thank you for that, but I think you really just meant this one.

**Bridget:** Oh my goodness. Well, we are almost out of time. We're almost out of space. We're gonna lose this space. But I would love to hear from our panelists, just closing thoughts on what are you going to take yourself— what are you going to take away from anything that you encountered here or anything you've thought about while you were here and that is going to make you do the stuff you want to do in a different way or a better way, or hopefully not a worse way, but at least like, how have your encounters over the last couple of days or your projections, whatever you've done, how has that changed you? Alice?

**Alice:** [00:35:26] That's not fair. You've been going the other way this whole time.

**Liz:** Welcome to being in the hot seat, Alice.

**Alice:** It's too hot. I'm a cold child. So something that has really resonated with me, Bridget, is actually how kind and thoughtful you and the rest of your organizers have been to me as a speaker with so many needs.

**Liz:** I—

**Alice:** so for example, audience members, my flight was delayed by 3 hours, and Bridget went to the front desk and she got an extension on my room so I wouldn't just be hanging out for 7 hours in in common spaces with my suitcase. You can't see it right now, but one of these televisions down here, one of us is waiting on a flight, and so they just have piped in the current flight status, so whoever's waiting on their flight knows what their flight status is. And there's just all of those small tweaks and appreciations that just really makes a speaker feel welcome and like you're not taking up too much space. And that has really resonated with me as just a fantastic experience as a speaker. So thank you.

**Bridget:** [00:36:31] Awesome. I love it. And that means that that's something that you'll be able to carry forward in everything you're doing too.

**Alice:** Yep.

**Bridget:** Love it.

**RJ:** Uh, uh, I think my biggest takeaway, at least from participating, is just the level of, uh, openness that everyone's been talking about their transformations, like the legacy, the complexity, and everyone's just really open and all the attendees are here to tell their stories and just like give back. I've been seeing a lot of people like giving out their information. So I think a lot of what I do is our training company really works with companies during those transformations. So I hear a lot from our clients talking about it, but that's when they're trying to looking for someone to help them train or consult or anything like that. But it's nice to hear when people are just talking to their peers. So it was a lot of insights that I got. So I'm going to take that, the notes that I've taken from people and just like, all right, this is what's really happening on the ground level.

**Bridget:** Yeah.

**Liz:** What I'm struck by is, on Tuesday, no, on Monday night, I was at the speaker dinner with Serena, who is one of the speakers, who was talking about logging pipelines for security. And it turns out that she and I are struggling through similar problems with Apache Kafka. And that was kind of exciting to learn that someone who is in a very much, like, you know, not Web 3.0 startup was having the exact same technological issues that I was. And that, you know, there is so much of a bubble around kind of the Web 3.0 startups that we don't necessarily reach outside of there to talk to folks who are in very different business environments but are potentially having things that we can all learn from each other. So I think that's the thing that I'm taking away, is that I got so much out of her talk, I got so much out of talking to her, and like, I'm definitely going to talk to her afterwards.

**Matty:** [00:38:17] Fantastic. Well, thank you. I want to give a Big thank you to our guests, to Liz, RJ, and Alice. I shouldn't have to hold up the sign, but, you know, you, uh, I don't remember what the link to the show notes is gonna be, so go to restdevops.com. You'll be able to find show notes. It's the internet. It's Web 3.0 apparently. So, you know, you can, you can find stuff.

**Liz:** And, uh, and thanks to our captionist too.

**Matty:** I am, as always, I am Matt, @MattStratton on Twitter.

**Bridget:** And I'm Bridget Kromhout, @BridgetKramhout on Twitter.

**Matty:** We're Arrested DevOps, and remember, there's always DevOps in the banana stand.

**Bridget:** Thank you.
