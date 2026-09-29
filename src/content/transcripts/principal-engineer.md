**Silvia:** [00:00:00] Table X, what does that do? I'll be like, let me tell you a story.

**Matty:** It's time for Arrested DevOps, the podcast where we help you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matty Stratton, and with me today is Jessica Kerr.

**Jessica:** We are talking with Silvia Botros of Twilio SendGrid about what it means to be a principal engineer. But first, a word from our sponsors.

**Matty:** This episode is brought to you by Datadog, a monitoring tool that helps bridge the gap between operations and dev teams. Datadog brings together system metrics, changes, alerts, and events from over 120 common infrastructure tools such as Chef, Docker, and AWS so that dev and ops teams share their key data and alerts in a single place and collaborate on issues in real time. Datadog is available for a free 14-day trial at arresteddevops.com/datadog. The worst time to learn about incident response is during an incident. Don't wait for an outage to strike before getting started. The PagerDuty Incident Response Training Course is now open source and free for everyone at response pagerduty.com. Based on the same training that PagerDuty employees go through, this course will show you how to streamline your incident response process, turn chaos into calm, and demonstrate the role of an incident commander. So what are you waiting for? Go to response pagerduty.com today and check it out.

[00:01:35] The worst thing about the Arrested DevOps podcast is when it ends. You're left wondering what to do next. What are you going to listen to on your commute home? How do you occupy your time when walking the dog? What are you going to listen to during the quarterly all-hands meeting? But fear not, dear listener, there is a solution. You need to subscribe to Software Defined Talk right now. It's a weekly podcast that recaps all the news in cloud computing, DevOps, and enterprise software. The hosts, Cote, Matt Ray, and Brandon Wichard, will keep you up to date on all things cloud while offering tips on how to optimize your Costco haul and how to PowerPoint. It's a fun, free-flowing conversation that will keep you entertained and informed. What are you waiting for? Subscribe to the podcast today by visiting softwaredefinedtalk.com or by searching for Software Defined Talk in your favorite podcast app. I am really happy that we finally got Sylvia to join us. I cornered her at SCaLE a couple of months ago and said, pull out your phone, get your calendar, I'll get my calendar, let's make this thing happen. Sylvia is an expert database engineer, and she also has a lot to share with us about what it means to be a principal engineer. So Sylvia, can you start out telling us a little bit about yourself and your experience, and then we'll dive right in?

**Silvia:** [00:02:56] Sure thing. So let's see, my name, like Jessica just said, is Silvia Botros. I work with Twilio SendGrid. I've been in the field for just over 10 years now. I've been with Twilio— with SendGrid, and now Twilio SendGrid, for a little over 7 years now. I started off like a lot of people who are DBAs as not a DBA. Python. It was a job over in New York City with a now-gone CDN. It involved Python scripts, some UI work using Django. And one day the database had issues. Turns out nobody was actually taking care of that. And the rest is history. That's how everybody just trips on a database and then they never come out. I don't actually know anybody who grew up saying, I'm going to manage databases. That is not a thing. They grow up saying, I want to be an engineer, maybe, but managing databases is not a thing people aspire to do. They just trip on them, and they're very easy to trip on.

**Matty:** Fast forward— I was going to say the same thing about sysadmin. None of us said we wanted to be a sysadmin. Then I had an intern who interviewed with me for a TechOps intern job, and I was like, what do you want to be when you grow up? He goes, I want to be a sysadmin. I'm like, you're the first person I've ever heard that, and you are hired.

**Silvia:** [00:04:10] That is a great combination of like, I don't care, plus I want to hurt myself, maybe. It's harsh. But yeah, fast forward, I lasted with that first job about 4 years. After that, I moved back to California and that's when I started with SendGrid. SendGrid was my first job where I was actually with the title of DBA. I thought when I started, I knew how to do databases. Man, I learned a lot. Turns out doing things at scale is a whole other story. Yeah, so 7 years of growing. I think when I started at the company, engineering was all about 30-ish people. The whole company was 60-ish people. We were sending maybe 100 million emails a day. We are now on the order of— our highest sending day was last Cyber Monday was $3 billion in the one day, and we are now a company of 500. And about 2 months, a little over 2 months ago, we got acquired by Twilio, and we are now part of an org of a few thousand. So it's been quite a ride.

**Matty:** [00:05:18] I ran into somebody from Twilio at the passport control in Heathrow a few weeks ago, and she saw that because I have the Twilio sticker on my suitcase, and she's like, oh, why do you have that? She's like, I work at Twilio. And I was like, what are the odds? You know, so This is why I put lots of stickers on my suitcase. It's a conversation starter. So you are now a principal engineer, yes? That's your fancy title?

**Silvia:** As of Monday, senior principal engineer.

**Matty:** Senior principal engineer.

**Silvia:** Congratulations. What that means is now I have a lot more meetings.

**Matty:** Okay, right.

**Silvia:** I know. My fellow senior engineers, senior principal engineers, and my now former boss who Maddy knows and used to work with, John Martin, will enjoy me admitting that at this point.

**Jessica:** How many engineers are in the organization of which you are a senior principal engineer?

**Silvia:** So, SendGrid Engineering is still operating on its own. We talk a lot with Twilio Engineering, but as far as day-to-day stuff, it's still pretty much a separate leadership org. SendGrid Engineering is, I think, about 130. It could be a little bit more than that by now.

**Matty:** [00:06:26] So let's get started with definitions, because definitions are always fun, and we never argue about them at all. What generally— but when we talk about being a principal engineer, and there's been— I've noticed a lot of conversations on the Twitterverse about this lately, kind of going back and forth about the responsibilities. So what, Sylvia, to you, what is generally meant by principal engineer?

**Silvia:** For me and my org so far, the principal engineer tends to be, and I wrote a blog post about this recently and it apparently sparked a lot of conversations, it is not like a senior, senior engineer. So, usually in a technical ladder in companies, especially as they're still growing, you'll see where first everybody's an engineer and then as the company has been around for maybe 2, 3 years, they'll start saying, okay, we're gonna have some people who are more experienced be called senior engineer. But then after that, people start wanting to have a more elaborate career ladder. And in my mind, that does not mean that just because someone has been senior engineer for 5, 6 years or something, or 4 years, that that means they get to be principal. And to me, it's a different playing field. It's far more strategic. It's far more business-oriented. It's involving a lot more influence. I think the biggest part of it is being an influencer without the management title and the supposed authority of having performance review authority over people. Principal engineers end up being essentially— that's where you start growing tech leadership in your org without them being part of calibration and the performance reviews of the engineers. So, it's influencing everybody around them to do better without— Without the authority of a title.

**Jessica:** [00:08:18] I think briefly you said the supposed authority of their performance reviews. I like that.

**Silvia:** I know. Well, because it's a weird one. Ideally, in the idealistic world, is that part of the performance review of specifically even senior engineers, that they collaborate well, that they get the team to work together better. Realistically, not all shops, it ends up being that way. Sometimes it ends up being a game of like, God, I even heard sometimes that it's like lines of code, although I hope that's not a thing anymore. But, yeah, there's the— ideally, you want the things that the principal engineers are doing in collaboration with their team and pushing their team for better practices and more scalable and more resilient infrastructure, that that feeds into the performance review and it becomes a collaborative thing with the manager. Another thing that I really consider super important in a principal engineer is they need to be a force multiplier. Even before I got this recent title change, when I was— I have been a principal engineer before this Monday for about a year and a half. And during that time, there was a clear transition away from me writing code and towards me teaching others how to write code. That's actually clean and doesn't cause us trouble too fast down the line. One of the big parts of principal engineering in my mind is you teach far more than you actually do yourself. This is definitely a spectrum depending on how big the engineering org is. If you're a smaller shop, maybe you end up actually hands-on more, but when the org is as big as ours is, I think it's totally valid to say, no, principal engineers are more writing design documentation, build— making the plans for how to build the thing and helping the team build the thing. They get hands-on still for a bit, but it's not the biggest part of the job. The biggest part of the job, especially if the team they're PE on has, you know, level 1s and level 2s, like right out of college, if they're not focused on teaching and mentoring, then there's something amiss here.

**Matty:** [00:10:32] So you kind of think about, you know, having a lot of expertise What are some of those areas that you would look for in that role? Where do they need to be an expert?

**Silvia:** My view on that one has been a little bit skewed. I started off as a DBA. At some point down the line in my journey at SendGrid, we switched it to DBE because it turns out I was actually implementing the role with writing a lot more code than just manually managing databases. But that's a semantic thing. But in my experience, it has been— I was a principal engineer with a focus on data stores. And I think it's fine in the PE level to have the part of the tech stack that you're most comfortable with. That's your happy ground. And then you still have to, as a principal engineer, expand the knowledge to be into things that are slightly outside of your comfort zone. People like to call it either bell-shaped engineers or they'll flip the graph and say it's T-shaped engineers. It doesn't really matter, but that's basically the idea. Since I've taken on principal engineering and now senior part, my focus has been a little bit as well into making sure I expand the horizons outside MySQL. I spent many, many years doing the MySQL thing and I got that down now, so now it's time to expand to other things.

**Matty:** [00:11:57] When we think about those skills that are the hallmark of a principal engineer, If someone's kind of looking to maybe make that transition, what skills do they need to have?

**Silvia:** I think one of the most controversial ones, that's one that people sort of push back on, and I stand by my opinion on that one, is if you're making the move from senior engineer and you want to be a PE in an org that has an accurate definition of PE, it's also a two-way street. If the leadership of the org doesn't understand what PE means, That might be a bigger problem. But presuming a good understanding of what PE is, it's going to have to involve learning how to talk to people, and not just to other engineers. PEs are expected to understand how to talk to product managers, how to talk to finance, how to talk to security. An org that is getting to the point where they want to start defining principal engineers in their org, I would presume, would be large enough that they're going to start wanting to do things like security certifications, and the expectation, at least in in my current job is PEs are the ones who get to talk to security requirements in the things they've built. If they're asked, how is it encrypted? How is it backed up? How do you cover for all the controls and the compliance things that we have to answer for? PEs have to be able to answer for that. So, it's far more than just writing code, which is why I was talking earlier about PEs don't get to just go in a cave and write code. It is not about, these are the best engineers and we're going to just let them go out in an ivory tower and build a thing and come back. It's the opposite of that. They're supposed to grow the rest of the org.

**Jessica:** [00:13:42] It sounds like you're really concerned with the consequences of code beyond the immediate feature.

**Silvia:** Yes, definitely. If the focus is on the code, sometimes, and I've seen engineers do this a lot, where it's more about how do I build the thing and what color the button is going to be versus what am I like, and they lose sight of what I'm solving for the customers. I would consider it a big red flag if someone is being titled or leveled as a principal engineer in an org and they don't have an understanding of what am I trying to solve for my customers. And that's why I was saying one of the biggest things is being able to talk to product and explain why I want to build a thing, what is that going to solve, being able to formulate what you're trying to do in the interest of the audience you're speaking to and not just because it's cool.

**Jessica:** Yeah. I imagine you also contribute to discussions with product by having knowledge of the limitations.

**Silvia:** [00:14:45] Yes. So that goes both ways. You also need a product org that will actually listen to the technical expertise when necessary and get on the same page as to what we're trying to— what we're asking for versus how much it's going to cost, how much time it's going to take. So yeah, we do— the way we go through this process at SendGrid is product first goes through what is called a canvas, which basically lays out what is the problem, which specific customer type we're trying to solve a thing for. Then there's solution validation where the product team works closely with engineers to figure out the solution so that their perspective as the voice of the customer is still involved. And a lot of times, that's where the PEs get involved because, okay, you want to build a thing that's going to be— let's say it involves a database. I always go back to my comfort zone. You want a database that's going to have the customer's data and it needs to be in multiple regional locations, but you want everything that you write to it to be consistent and available in all those regions at the same time.

**Jessica:** [00:15:54] Cool.

**Silvia:** It'll cost $1 billion. We are going to have to— we can only use GCP. It's going to have to be Spanner and it's going to cost this much because it's that much data. It's important to have PEs on teams that will be able to explain this in English where it's not just like— I really dislike the dismissive attitude of some of the tech community of like, it's just the product person. They don't understand. But no, they are also the voice of your customer. So if you don't explain to them why the thing they're asking for is going to cost this much, or what are the actual physical limitations, you will always have this disconnect and you'll always have this sort of sense of animosity or exchanged disappointment. And that's not a way to work. So it's very important for someone who wants to be a PE to be able to understand what their product team's motivations are, what they're trying to solve, and try to help them find find solutions to the problems we're trying to solve.

**Jessica:** [00:16:56] Is that something you learned to do or did it just come naturally?

**Silvia:** It did not come naturally. I will admit, back when I was still strictly DBA, this was before SendGrid had the full ladder, so my title at the time was just DBA. But I was one of those people who would get cranky at customers. Not directly at them, but I would be like, man, this particular customer, they keep making this call to this API and now the database is down. It took me a while.

**Jessica:** Oh yeah, that's the customer's fault, definitely.

**Silvia:** See, exactly. So I totally admit, like, years ago, that was totally me. And it took me a while to understand the other side of the argument. It's like, no, they're trying to do a thing. We built something that allowed them to do something, that allowed them to make a volume of calls, for example, that is too much for our infrastructure. We allow this to happen. So, being able to internalize it that way, I fully admit it took me a while to get there. It was— I think part of it is going from working in a local context of I'm just getting the database to run versus having a more global context of the business of like, yeah, this business has customers. They're paying money for a certain solution of a problem and I need to be able to help them do that. And that's another thing that's important. Important for principal engineers. They need to be able to move from solving the local context of a problem of the team, like, we need to use a resilient pub/sub and it needs to be Kafka, but we don't know yet how to do Kafka, and it's like all the technical nitty-gritty, but at the same time, being able to track that in a straight line from where they are in the technical stuff all the way to what am I actually solving for customers. And it sometimes will feel like a whiplash as a principal engineer going through meetings with product.

**Jessica:** [00:18:50] Yeah, totally.

**Silvia:** Yeah, going through meetings with product where we're talking big picture, solving things for customers, to sprint planning, where we're talking about the individual tickets that are involved in solving the particular thing in that project. But it's important to maintain that perspective from both sides.

**Jessica:** Yeah, that zooming in and out of the detail of how are we going to implement this technically to the why are we doing this again is painful. I also like your example of rate limits. Of recognizing the correct boundary there between, if we let them do it, then we better support it.

**Silvia:** Exactly.

**Jessica:** Yeah, yeah. Because you take that limitation of the database can only handle so much and you push it to where they can see it in the API return call.

**Silvia:** Exactly. It's like, if they don't see this, if it's implied, it's not fair to say later, well, who would want to call this API 50,000 times in a cell?

**Jessica:** If you build it, they might call it.

**Silvia:** [00:19:51] Exactly. And it starts with rate limits and it goes all the way to even more abstract promises in a product. You can upload contacts for millions and you expect the count to be accurate all the time. Well, how are we actually going to physically do that? What kind of data store is going to be that strongly consistent at the same time? Accurate up to X number of nines. Things like that. That's the biggest part of a principal engineer's job, is to make sure that what we're promising is what we're building.

**Jessica:** Setting expectations.

**Silvia:** Setting expectations. A big part of this structure also, I should not let this slide, is that this is part of why we use a blueprint process. So, once the product team has settled on, okay, this is the thing we're solving, we're solving it for that particular kind of customer, and this is the solution we think we will build, it doesn't end there. The delivery team that's building the thing has to also write down in a Google Doc, essentially, what's the current problem and what they're solving. There will be links for all the other artifacts, but it's important to also write down what it is you're building. That way, it's a good onboarding mechanism for when you're constantly hiring engineers. It's a good way of getting everybody to read the thing and see if the thing they read means what they think it's supposed to mean. And it's a good way to get back to these things later as you're building the thing. You can get back to the requirements and see what we're supposed to do so that if there are surprises along the way and you have to make changes, they're more explicit and not just happenstance, like it just happened.

**Jessica:** [00:21:40] So you have some information flowing both ways. Here's your high-level blueprint document. Now you give us one coming back up so that we know you understood.

**Silvia:** Yes, we typically— that's part of the reason the blueprints at SendGrid are in Google Docs, because we also make sure that as we go through it, that the product team can see it, so that as we call out limitations, in the technical details of it, of like, we're going to use this AWS service and its SLA is X, but what product wants is like a couple of nines ahead of that, that's a good place to start highlighting, adding people, and be like, hey, product person, this is what we can do with that particular thing. If you want those number of nines, we will have to figure out something more elaborate and complex, and that will affect delivery time. So, conversations can happen in that venue. We also have a group of— an architecture team that will look at these things and basically see if any of the design decisions in there can cause what we call one-way doors, where you can't change this thing down the line, or you can't add any certain features down the line. It may seem a bit waterfall-ish and elaborate, but it's— I think we try very hard to keep it flowing fast, but the important thing is to not to let things happen by happenstance. When you have a large customer base that are building businesses on top of what you provide, it is very important to be aware that we can't just build things and throw them over the wall. The journey from proof of concept to in-production needs to be more intentional and not just by accident this thing worked and now there's customers using it.

**Jessica:** [00:23:30] I have a question. When something does go into production, as a principal engineer, are you involved in making sure that it's accomplishing what it was supposed to?

**Silvia:** That's a good one. I have slightly less of a view into that by virtue of the fact that I'm a principal engineer, but I'm not on a delivery team. What we call delivery teams are the teams that are directly involved with building the things that the customers use. My team is database ops, so we manage the databases and the data stores that help support these things. So, we are slightly removed from that view. I can imagine, having been around the teams in the office, that's where— that's the feedback loop from the product person. So, the product managers don't just ask for the new thing and then they're on to the new thing. At least, I would hope not. But I would imagine within the delivery team context, that would be— the feedback loop. And I have seen many blueprints. I've been with the architecture team for like 6 months now, so all the blueprints pass by us, and it's totally valid that there will be a blueprint for the thing, and then a quarter later or so, you'll see a second blueprint that is the V2 of that thing with all the improvements that now have come based on customer feedback. And a lot of times when we look at blueprints, we will review them with the awareness that this is a brand, brand new thing. There's a lot of unknowns versus blueprints that are, like, say, rewrites of old services, and we know exactly what we want to build. Those are 2 different stances when you're looking at a design document.

**Jessica:** [00:25:02] We're discovering what we want to build versus we already know. Yeah, I think one reason rewrites are appealing is because it's the only time we have anywhere near complete requirements.

**Silvia:** Exactly. But then, on the other hand, you're supposed to have a higher bar of why you're rewriting the thing that is not just because Go is cool, maybe.

**Jessica:** You mentioned that one of your roles and the roles of the blueprints and the information going back and forth is to notice the impact of the SLAs of the underlying services that we're using on the SLA of the feature as a whole, which is really hard. You can't test that stuff. You have to like math.

**Silvia:** Yeah, a lot of times it literally starts with math. You'll see things, for example, within the AWS context, It'll be like, well, this particular service is going to promise you 4 nines in a single region. You realize that if your customers are actually multi-regional, that the SLA that you can provide them based on just that one thing alone, which is only a part of the stack, not the whole thing, is going to be slightly less nines. Because if it's a service that is not— say it's Redshift and it doesn't have multi-region built into it. How do I handle that? Do I start building a second cluster? Do I start building some custom thing in between to ship data back and forth? It is good to have these conversations early on. This is exactly how people can find themselves in a place where they have built a contraption of multiple things. And the more things you add, the lower your overall possible potential SLA is going to be. The more parts you put in, the more fragile this thing is going to be. That's just how it goes.

**Jessica:** [00:26:53] Totally. How many people look at a blueprint before people are satisfied with it?

**Silvia:** Some blueprints are actually pretty simple and they end up being literally a couple of engineers. We have our architecture team, most of them are assigned by program areas. Each group of engineering teams will have an architect that they that they work with. So there will be that dynamic. And then—

**Jessica:** There's architects and there's principal engineers.

**Silvia:** Yes. So typically principal engineers are within the delivery team. They are essentially almost like a team lead. We don't commonly have more than one PE in a single team, although when we start needing 2, it's a sign that maybe this team has grown and their scope has grown and we need to find some line to split into 2 teams. These kind of things, of course, like Depends on the context, what are the services, the people involved, where are they in their career. So, a lot of things go into that decision. But typically, principal engineers are not part of the architecture team. The architecture team has been pretty much the senior principal engineers. I sort of joined it before I got the title, and then 6 months later, got the title. That's basically how that went down. But as far as how many people look at a blueprint, it starts with the— with the team itself that's going to build the thing. Their architect working with them on the details and pointing out any parts where he or she will feel that there's something missing. And then the blueprint will maybe at that stage start getting a lot of reviews from the product person if they start seeing that there's something they asked for that's not explicitly covered. And then the whole architecture team will review the blueprint And at that point, you can proof of concept, you can sort of research and build things not in production up to that phase. So, it's not an expectation that you have to fill the entire thing, know all the things, and get approval, and then you can start writing code. That's definitely not the case. But it's a gate to production because that's where you're impacting customers.

**Matty:** [00:29:04] What are some examples when we— because everybody loves to to talk about titles and everything. Where are some examples where this term principal engineer, the title, where is it misused?

**Silvia:** All over Silicon Valley. All over Silicon Valley. It's, you know, title lottery over there. I— so that might— so my opinion is that if the company is still, you know, first couple of years, the entire engineering team is like a dozen or two. That's where your engineers are at, like, you're still finding your product market fit, you probably don't actually need this title just yet. Although I have seen as I help with interview teams that we get people who have heard their last job was like literally like 20 people, the entire company, not just engineering, but the entire company. And they're coming with a title called architect and they're requiring to have that. I look at that a little bit with a side eye, like, yeah, no. I, in my mind—

**Jessica:** [00:30:08] It's all about salary bands.

**Silvia:** Exactly. I know. But I question that. Although I have seen it in the past. I've heard stories where people will be offered the salary band for whatever, somehow, and still are like, no, but I want the title. Yeah, I question that too. But it's a certain— if you're going to come with the title and you want to have that, you need to actually show what it is you built and what scale it was. Staff engineer at Google does not equal principal engineer or architect at a company that's 18 months old and just now hit a certain monthly recurring revenue.

**Matty:** Along those lines, what are the big challenges that you face as a principal engineer?

**Silvia:** Definitely the calendar. I'm still working on that one. I'm still at the early phase of this, right? I look at the calendar and I'm like, man, I need to sit down and write, not even code anymore. So I've let go of that, but I want to sit down and there's this wiki page I promised someone I was going to write about the thing we're going to do. And I'm looking at the calendar and I'm like, well, next week maybe.

**Matty:** [00:31:23] I know.

**Silvia:** So there's that. Other than that, I think the biggest thing is It's finding the middle ground for everybody. I still like to build things the right way, quote unquote, the right way. But as you get higher up in this decision stack, especially as a senior principal engineer, you become far more aware of all sorts of other limitations that can hamper a certain decision. This feature is needed by a customer with a certain MRR and we need to get it by X date. This particular thing, this is now— this is a security risk. Everybody needs to get that fixed now. We have to put everything aside and do it. These are all stories that I'm sure everybody else has hit in some way or another. This is how you start learning how to find those middle grounds and hope that you were able to actually pick the right one. We can't always just wait forever and build the perfect thing. That's just not going to happen.

**Jessica:** [00:32:29] I like that point that becoming more senior at some point means building things less right.

**Silvia:** Yeah. We like to call that in our team strong opinions, loosely held. So, there are certain things we know we shouldn't do, like, hey, don't build a database and have it be single region and put it as part of the product that we promise everybody is multi-region, for example. Things like that. But at the same time, don't be like a no person. And I used to be that when I was early in my DBA days at SendGrid. I used to be like, no, you're not doing X. I rightfully earned a good amount of flak for that one. But you learn as you get more senior because if you're going to— as you get more senior in engineering, you're going to have to work with outside engineering because that code is worth nothing if customers are not paying for it. And the way customers pay for it is by the product people to actually tell you what they need and the salespeople selling that thing you built. So unless you learn how to talk with those groups and actually fulfill their needs, then what are we even doing?

**Jessica:** [00:33:35] It's that thing where your job isn't to say no, it's to say, how do we get to yes?

**Silvia:** Exactly. And it's a unique position to be because you still get super high contact with the technical stuff. In this particular kind of dynamic, the expectation from the team, from the engineering managers, is to be the ones helping the team move forward in their career. They're responsible for making sure that they are the glue of the communication across the org. But because of all that, it happens. Engineering managers will not be as in tune with how the actual technical implementation works. That's what the PE is supposed to do. That's where you partner up with those engineering managers and help bridge that gap.

**Matty:** What's the best part of your job?

**Silvia:** I'll say a bit of a paradox there. Actually, the best part of it is also the calendar because I do get to talk to so many people at work.

**Jessica:** Wow.

**Silvia:** I know, I know. You've caught me at a time where I'm like, things are in flux. So here's how I'm thinking about it. So like sometimes I do feel like I'm doing so many meetings and I can't sit down and do certain other tasks. But at the same time, it's really cool being able to Basically, in some parts of my day, take off the engineer hat and sit down with the product person and watch how they're thinking through the thing. Or some days, I actually enjoy those even more, take off my DBA hat and pretend I'm a security engineer and talk with one of our InfoSec compliance people and be like, here's all the ways this can go sideways, but here's how possible that is. So, conversations like that are always fun. So there's definitely enough context switching in those calls that I always feel like I'm solving new things. So that's definitely really cool. I mean, also, a big part of this is just being in an org where we're growing super fast. Customer growth is huge. We're part of a larger org. There's a lot of conversation about things we can do together. So there's also that as well. But just in the abstract, if you're a PE, you're going to have to talk with product, you're going to have to talk with InfoSec, you're going to have to talk with even customer support a lot. You're going to have to talk with the account success reps who talk with the high-volume customers. These are all people with completely different perspectives on how to use the thing that your team built. This is how you get to actually translate a lot of stuff.

**Jessica:** [00:35:58] You have all this context on not just engineering and databases, but specifically, the technical system in your organization and your customers, and now you're learning security and all this other stuff. Do you ever hire in principal engineers?

**Silvia:** We do.

**Jessica:** That seems really hard, like, to just come in and gather that kind of context.

**Silvia:** That's— I mean, I don't know. I'm not the best person to talk about how hard it is. There's definitely difficulty to it, but we have done it. A few of the people on my architecture team did not come up through the ranks the way I have. This is where onboarding is a team exercise, I suppose. Especially since like, SendGrid did not write everything down the way we do now, like 6 years ago. That's for dang sure.

**Jessica:** Well, and even if you had, who's going to go read 6 years of blueprints?

**Silvia:** Oh, God. Yes. Even like, we have a lot of blueprints now, and this process is only like 2 or 3 years old, I think. No, more like 3 years. But anyway, But you're right, it's a lot of reading. This is where onboarding can be a very important team exercise. We do things like, at SendGrid we do things, there's what we call Support Bootcamp, which our support team actually throws together, but they invite everybody to it. It's a 4-day course where you get to sit in a room as the student of the support team and they get to show you how to use the product, all parts of the product. And we encourage everybody to do it whenever they can. I did it 2 years after I started and it was still very educational. I would like to do it again at this point because that was like 5 years ago and I'm sure a lot of things have changed. It is super, super educational. You get to sit there and watch how the support team uses these things. They get to sort of throw in tidbits of complaints they hear about certain parts of the product and it gets really, really interesting. So that's a great way. A great way to onboard. And then there's, of course, you go to the archaeologists of the org, which I'm definitely one of them. Table X, what does that do? And I'll be like, let me tell you a story. Things like that. That's part of my role at this point as well. It happens a lot where I'll get a PM from someone who's like, I don't know, one of the engineers in one of the many teams and they're working on Blueprint and it involves some, not even necessarily tables, but sometimes it'll be like a service or a piece of code, but because I've been around for so long, I'll have stories. That's definitely a big part of my role at this point, but that's maybe more me than principal engineering specifically. That's just, you know, she's been around long enough, she's seen things.

**Jessica:** [00:38:50] That is a really important role, that sort of repository of history. Whenever I join someplace, I try to find those people and make friends with them.

**Matty:** I like that. Sort of that organizational archaeologist. You know, yeah, that's, that's pretty, pretty apt. What do you, what are you interested in learning these days?

**Silvia:** Definitely, like more, I'm trying to learn about a number of data stores that are outside MySQL. Data stores are the worst. Like, there's, I firmly believe none of them, none of them will work all the time. It's just a matter of like, How long has it been around? Has anybody else found the sharp edges or is it going to be you? So that's one of the things I'm trying to focus on these days. It's like, okay, you want to use this new cool thing. You tried some benchmarks so far has been going well. I'm a bit of a— I don't want to call it a Debbie Downer because that's not great, but a little bit, but a bit of a pragmatist, I guess. But I'm like physics, like which part of this is going to fall apart? Something is going to. So maintaining that mindset, creating that tension between me and the engineering teams, trying to poke at the thing and try to understand where's the limitations. As long as we end up building a thing that we feel is at least going to support us for X years or something.

**Matty:** [00:40:13] Well, and you're a good tester for this stuff because our listeners might not know, but you actually are very good at just disrupting electronics by being near them. Right.

**Silvia:** Yeah, it's rough times, dude. What was the last thing that happened? There's been many, many stories of me breaking things every day. One I remember recently is I was booking a trip to Denver. We use Concur for our bookings. I managed to make the booking for the hotel fail twice. And then on the third one, it was like, you already have this place booked. Dun dun dun. I'm like, I'm a living Jepsen. Hi, Kyle Kingsbury. I'm a live— like, did I just Jepsen this thing? Like, it literally— like, one side of it thinks I don't have anything booked, the other side has it, and they're arguing in front of me on the web.

**Jessica:** It's almost like data stores are hard, right?

**Silvia:** It's the worst. I'm kind of failing to remember right now, which is sad, but too many stories. Yeah, I remember a few months before that. So one of our primary data centers is in Chicago. I landed in Denver and immediately, like, we had a major network flap in there and the entire team yelled at me. They're like, where are you? And I'm like, I just landed in Denver. And they're like, you're not allowed to get this close to the data center. It's bad. Yeah, I just break things all the time. In fact, sometimes I'll break things just for me. I managed to load up one of our pages on the Twilio website and it was completely broken in the CSS. Nobody else could replicate it. Our entire— all of Twilio marketing engineering were like, we're trying all of the versions of our browser testing software that we have, including what you say you're It's working. And, I was like, well, I guess.

**Jessica:** [00:42:10] Oh, I found one the other day that if my resolution was exactly just so, then the website fonts were way off.

**Matty:** See?

**Jessica:** Yeah, yeah. The font size had to be this, and the window size had to be this, and—

**Silvia:** I know. My team keeps calling me like, you're a living, breathing EMP. And, I'm like, no, it's just that all computers are bad. Maybe both.

**Jessica:** They're lucky that you still use them.

**Silvia:** I don't know why they still let me use them. I'm not sure.

**Matty:** So as we're kind of getting close to wrapping up, what— I know this is always an area fraught with peril, but, you know, what advice would you give someone who's kind of coming up through the ranks that wants to to get into more of a technical leadership role like this, not necessarily a managing one, but, you know, kind of leading from example, leading from design, what are some advice that you could give to folks?

**Silvia:** [00:43:11] I would definitely say strong opinions loosely held is an important one. Learn to basically try to figure out the middle ground because if the answer is always no, you can't build that, nobody's going to want to talk to you and they're just going to go around you. Be an enabler. Prepare that you're going to have a good chunk of your time spent mentoring. That is normal, and if it's a problem, then maybe principal engineering is not for you. That's the second one. I would say learn why the things work a certain way. Definitely, it's important to have a healthy level of skepticism. A new service comes out, the PR is listing all the functionality.

**Jessica:** It's great.

**Silvia:** Learn to read through the lines and figure out which parts actually apply to the problem you're solving versus not, because it's important to be able to tell the difference between I'm solving problem X or I just want to use Shiny tool Y. You need to be on the first, not the second. As a principal engineer, the value is you are enabling the rest of the org to build things faster, not just rewrite things for the sake of it or just because we want to use this new shiny thing. I'm very much of the Dan McKinley school of like, use boring tools to build cool things.

**Jessica:** [00:44:32] Yeah, it's all about the combinations. Be glue.

**Silvia:** Yes. Speaking of that, like one of the, one of my really favorite talks, and I don't know if it's out in video yet, but the slide deck has been floating around a lot by Tanya Reilly, formerly of Google, now Squarespace, of The glue work, it's important. If people are— if you are finding yourself in a vantage point where you can tell the product manager is saying one thing and the engineering manager is hearing something else entirely, that's important to be able to identify these things and get people on the same page. That's more important than how the code is going to be built.

**Jessica:** Yeah, most of our code is glue and a lot of our job is glue.

**Matty:** Is pouring glue. Holding things together when they break.

**Silvia:** I mean, the internet is duct taped together with Bash, Matty.

**Matty:** Like, yeah, not even good Bash.

**Silvia:** No, not—

**Matty:** what's, what's, uh, Bridget came up with a term the other day, which was, I think it was just good enough Bash. And yes, she said that's, that's her whole life.

**Silvia:** [00:45:36] I feel this very much right now.

**Matty:** So, um, yeah, I think, uh, we're, we're getting to that time, so some community and event stuff if you're the kind of person that wants to get up on stage and talk to people about the DevOps-y kinds of things. And, you know, Sylvie, do you give a lot of talks? I've noticed I've been trying to recruit you for stuff and you always tell me no.

**Silvia:** I know, I'm sorry. I have 3 children and 2 of them are still toddler age, so it's rough times. Also, my husband is a physician, so his schedule is also a little tight. So being able to fly out for a couple of days is not an easy thing to do. I know, I know. You tried to get me to come to DevOpsDays. I still haven't managed to do it. I had to do the same thing to Bridget recently, too. It's been tough. But, yeah, I have given a couple of talks. I think the last one I gave was at Velocity London last fall. That one is on YouTube. I'll give you a link to my blog, which has a link to all of the talks that are out there.

**Matty:** [00:46:37] Oh, great. We'll put that in the speaking notes.

**Silvia:** In the show notes. So, yeah, I've given a few. I'm sort of trying to take a break this year, just because there's a lot going on internally at my day job, but I suspect by next year, maybe I'll get the itch again.

**Matty:** Okay. If you, the dear listener, would like to, you can find out— there's tons of DevOps Days that have open calls for proposals right now. You can check that out at devopsdays.org/speaking. The CFP for Chicago, which I run, is up until May 3rd, so not sure when we're going to publish this episode. If it is before May 3rd, then submit. If it isn't, then go submit to somebody else. I think we're going to move into now the section of the show— we don't always do this, but it's checkout. We're going to go around and say if we've got something cool we want to tell the audience about, our listeners, to check out. So Sylvia, we'll start with you.

**Silvia:** [00:47:38] The Beyoncé movie came out today on Netflix and you should all watch it. Yeah, it's awesome. I highly support doing it with a standing desk too because it's gonna be a dancing desk.

**Matty:** And that's called Homecoming, right? Yeah. Okay, I have not yet watched it, but I've got this afternoon. And Jess, do you have anything cool for our audience to check out?

**Jessica:** You know, just go outside. It's so gorgeous right now. I love spring. I'm so happy. Isn't it?

**Matty:** Didn't it just snow in the Midwest? I know it just snowed a ton in Chicago.

**Jessica:** The only thing that's snowing here is the little flower petals in the tree across the street. It's beautiful.

**Matty:** Oh, excellent.

**Silvia:** We're still in like the 2-week phase between rainy and cold in California to like stifling hot. I'm in the Inland Empire, so we're gonna be hitting 90s very, very soon.

**Matty:** And then I've got just a couple to check out. So one that came up on Twitter the other day, if you're looking for images to use in your presentations or things like that, there certainly are great free sites like Pixabay. But if you want to support artists, there's a great website called Stocksy, stocksy.com. And so it's affordable stock imagery, but they've got a really great setup with ownership for the artists so you can make sure that, you know, you're actually supporting people. Who are making your art, because exposure doesn't pay the rent. And also, I have a shout-out for a website called Superteam Deluxe. So that's at superteamdelluxe.com. I have all these really great fun pins, like little enamel pins. And so shout-out to Chloe Condon, who's the one who first clued me into that. I've gotten a couple really fun pins from there. And one of the best things you can get from them are these— so you know when you get like those pins and they have a little back on them and then the back falls off and you lose the pin and you're sad. So you can get these cool little backs and they're like $5 for like 20 of them. And they're there, they tie on with this tiny— they tighten with this like tiny little Allen wrench and they get on really tight and you never lose the pin. And so it's totally worth it just for those pin backs. Super cool.

**Silvia:** [00:49:44] Do they let you upload pictures and get custom pins?

**Matty:** I don't know if they have custom pins. I was amused just enough by what they had.

**Silvia:** That's really cool.

**Matty:** But I definitely am a big fan of that. Like, that's the next wave of swag in my mind. Like, so if you're a vendor, like, have cool swag, have cool pins, because that's like the new hotness. Forget about socks. Socks are over now. It's time for pins.

**Silvia:** I want towels.

**Jessica:** I think we should get hand towels or like washcloths.

**Matty:** Yeah, I mean, towels like that, like golf towels. I mean, not golf, but yeah, yeah, like the light microfiber ones.

**Jessica:** Oh yeah, yeah, that'd be great.

**Matty:** Yeah, we're in swag discussion for DevOps Days Chicago now, so I have to remember that one. There you go. Towels it is. It's like, it's like Hitchhiker's Guide to the Galaxy kind of vibe to it too, you know?

**Jessica:** Yeah, you can use it for everything.

**Matty:** You gotta have your towel.

**Jessica:** What is it for? What isn't it for?

**Matty:** Got it. That's the thing I always said about Jess, you know, she knows where her towel's at.

**Silvia:** For cleaning the grimy iPad.

**Jessica:** [00:50:44] Yeah.

**Matty:** Alright, so if you go over to arresteddevops.com/principalengineer, we will have the episode show notes, so we'll have that link to Sylvia's blog and links to stuff from our checkouts and anything else we randomly think of. If you go to arresteddevops.com/itunes, you can leave us a review in the iTunes Store, and I'm not just begging because I really like, you know, getting 4-star reviews. But actually, leaving reviews helps other people find the show, which just spreads the love. So it's fantastic.

**Jessica:** Thank you so much, Sylvia, for joining us today.

**Silvia:** Thank you. Thank you for having me.

**Matty:** I'm Matty, @MattStratton.

**Jessica:** I'm Jessica, @Jessitron. This is Arrested DevOps. So remember, there's always DevOps in the banana stand.
