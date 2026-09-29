**Matty:** [00:00:00] What's your biggest weakness, Ben? I work too hard.

**Ben:** I work so hard I can't turn my computer off at night.

**Matty:** Yeah, it's time for Arrested DevOps, the podcast that helps you achieve understanding, develop good practices, and operate your team and organization for maximum DevOps awesomeness. I'm Matt Stratton. We are not actually going to be talking about the paradigm or metaphor of junior high Halloween dances to DevOps today. We're going to, I don't know, maybe we will, but we'll see where we're going to go. But if you'd like to find out where we go, you're going to have to tune in after this word from our sponsors. So Uffizzi is a platform for platform teams. You can stand up your developer platform in minutes, not months. What I like about Uffizzi is that it gives platform teams control and dev teams autonomy. It's Kubernetes native and extensible, so you can customize it with tooling that meets your team's evolving requirements. And these clusters, they spin up fast, like super fast. Out of the box, Uffizzi combines a great dev experience, secure multi-tenancy, and cost efficiency. But try it out for yourself at uffizzi.com. Download their CLI and you can spin up your first sandbox cluster in under a minute. On their free starter tier. That's uffizzi.com, U-F-F-I-Z-Z-I dot com. Thanks to our sponsor Gliffy, the leading diagramming solution for teams using Atlassian products like Jira and Confluence. Drag and drop shapes to quickly build a diagram capturing anything from code structure to a simple concept. You can start your free evaluation by visiting gliffy.com/arrestedevops and signing up via the Atlassian Marketplace. That's gliffy.com/arresteddevops. Get started today. Let's face it, no one likes writing or maintaining documentation. But when you start a technical project or pick up a new task, missing information can cost you valuable time. GitBook is a technical knowledge platform that fills that information gap, making it easy for your team to capture, maintain, and find information from a single source of truth. For example, with Git Sync, you can set up a 2-way sync between your repository and GitBook so you can turn Markdown files into awesome user-friendly docs. And if you make a change in your codebase, the edits sync between the 2 automatically. Or what about when you need to find something in that knowledge base? Forget about searching. Just ask GitBook AI. You'll get a neat summarized answer that is sourced directly from your docs. These are a few examples of what GitBook can do, so why not give it a try? Head to arresteddevops.com/gitbook to find out more. All right, joining me today is, uh, my good friend Ben Greenberg. Uh, we are gonna talk a little bit about, I think, team dynamics and career change and things like that. But before we kind of dig into things, Ben, uh, you want to introduce yourself to our, our audience in case there's folks who who don't know you or don't know what you've been up to, and then maybe—

**Ben:** [00:03:20] There may be a few of those. Hey everyone. I might, my name is Ben and really great to be on the podcast for Take Two. We could talk about that as well and the values of creating timeless content. Matty and I have known each other for a while, and it's always nice to sit together and to chat about all the good things. I currently am the head of DevRel at a company called Fuel Labs. I just entered that role actually all of 2 or 3 weeks ago. This might be the end of my 3rd week in the role. So it's very new. And I also have my own small DevRel consultancy where I'm the principal DevRel consultant called Yalla DevRel, where we help companies with DevRel sort of as a service objectives and currently based out of Miami. Hey, Matty.

**Matty:** Hey. Yeah, as Ben alluded to, we actually recorded an episode of ADO. We recorded it back in May and then A few months later, I was getting around to editing it, and we had talked substantially about social networking. And not that those networks did not exist anymore or anything like that, but it just did not seem as timely as one would like.

**Ben:** [00:04:32] As fresh, as relevant as one would want it to be.

**Matty:** So when you're listening to this episode in February of 2024, recording this in October. This is not— it is currently October 27th, uh, 2023. I, I don't expect that it'll be next year when you're hearing this, but if you are, we are going to do our best to keep this—

**Ben:** we are. And I'm sure it'll be a beautiful crisp day in February where you are, just as it is in October where I am. But yes, but you know what is more timely and timeless to talk about, Matty, are things like team dynamics.

**Matty:** Yes.

**Ben:** And, and running teams. Those are very timeless topics.

**Matty:** Ben, you know, just said, just started this new role. And when we were looking at what we were going to talk about here and put in the suggestions, Ben had typed in and said, so you've just become the head of a team. Mazel tov. What are you actually supposed to do? And I think this is really a great conversation in general. It happens to a lot of folks. Every manager was a first-time manager at some point. And I have been in my current role leading the developer relations team at Ivan for a little bit over a year now. Ben has been doing this for— it kind of just came into here, into this, in this new role, and sort of looking at thinking about evolution, transformation. How do you start? And I've all— I'm always fascinated by that sort of inflection point of coming into a new role in any way that is senior or leadership. It doesn't necessarily have to be a people management one for part of the, the context of what I'm, what I'm thinking about. And to give a little bit of, of history of kind of how I've thought about this for myself, so Again, today, current role, I'm in a director role and I've been doing this, you know, for a little bit over a year. This is not my first time as a manager, but it's my first time in about a decade. So I spent—

**Ben:** [00:06:26] it's been a little bit.

**Matty:** Yeah, I, I, I spent many years managing and as a manager and a director of technology operations teams. And then circa 2013 or so, 2012, 2013, I said, you know what, I, I need to step away from people leadership. I wanted to chop wood, carry water. We didn't use that term at the time, but I wish we did.

**Ben:** But yes, more player, less coach.

**Matty:** More player, less coaches. Wanted to like get shit done and be an individual contributor. In other words, even as someone who was not necessarily a people manager, but when you are in a senior, in a leadership type role in your career, when you come into a new organization, the same thing can apply. So first of all, Ben, How many times when someone's going to hire you, they're like, Ben, we want you to come over here to work at Fleur Badash. And, you know, we are in a state, dude. We are effed up. We need your big bro. Because again, this is how anytime you're being interviewed, right?

**Ben:** We got a situation going on.

**Matty:** We have a situation. We need you. We need you to come save us. You know, you're so smart. Come help us. Come help us. You know, you're invited in to be a change agent. So first of all, I, I have news for you, everybody. If you haven't run into this before, no matter how many times people tell you that they want you to come in and change everything, here's the secret: they do not.

**Ben:** [00:07:47] Well, this is the thing too. I think there's a well-known phenomenon of the hero complex of hiring where we're trying to find the, you know, lowercase m messiah who's going to come in and save the organization, save the team, Fix the dynamics. You know what I did in this interview process? First of all, Fuell is not in that place at all. We're actually, it's a very healthy, it's a startup, but in a well-functioning startup with really thoughtful, smart people, actual organizational plans, some deliberateness and intentionality. But you know what I did in the interview cycles on this, Maddie? And it was the first time I ever did this. And I'm actually being, I'll be vulnerable and share what I did because I think it's important to share these things. I decided in this round of interviews, and the first time I ever did this, I shared not, you You know when they ask you like, so tell us a moment when you, when you had a failing and when you learn from that failing, please, please elucidate for us, you know, a moment where you really struggled and messed up and you find a way to talk about how really it's like a positive.

**Matty:** [00:08:49] And what's your biggest weakness, Ben? I work too hard.

**Ben:** I work so hard. I can't turn my computer off at night. This time I actually shared a real big fuck-up. And a moment in which I really messed up and it was still raw and it was something I was still processing. I'm like, let me use this interview to process it with them and share how I'm thinking through it. Because if they can hire me knowing deliberately, intentionally that I am far from perfect, that I make mistakes, that I will continue to make mistakes, but let me share with you the way in which I process those mistakes and think through those mistakes. And if you still want me after that, maybe this thing might be for the long term. Maybe this thing might have some legs to it, and maybe it's a place I want to be at. And if you don't want me after that, then maybe it's not a place I want to be at anyways. And so I took that risk, and so far, 3 weeks in— yeah, we'll listen to this recording in a few months from now, but 3 weeks in, it's pretty good.

**Matty:** And, and I want to be clear, actually, I was, I was being, I, I think, a little dramatic license when I was saying they're saying we want you to come and change the world. But the— what— but that's the feel that we get, because again, if we're hiring somebody to come in it's because you're coming in to help us do something where maybe not as great as we could be, or we just want to improve, right? So, we're going to say, hey, oh, this is the value you're going to add. And a lot of times, that can bring us coming into an organization thinking that, yeah, it is that hero complex. Oh, you need me to come and save you. And first of all, things don't work that way generally. So, I was being a little facetious, like when I said nobody— and even if you're told Even if they— even if someone explicitly says, I want you to come be a change agent, the organization—

**Ben:** [00:10:29] people don't really love change.

**Matty:** The organization is not ready for that, right? And I, I learned this in actually my first official manager role. So it's fun too, like enough time has passed in certain things where I, you know, I can sit there and say, oh, so, so when I went to go work for Apartments.com, and that was my first job as a manager, it was, it was fun. It was one of those hybrid roles where it was like 50% manager, 50% sysadmin, which meant 75% manager, 75% sysadmin. It was do the job of 1.5 people.

**Ben:** And it was a dot-com. You had dot-com at the end of it.

**Matty:** Yeah. I mean, although at the time we said they would always talk about us being a startup and we said, if you're older than Google, you can't be called a startup. But, but I, anyway, that goes back to a whole other, you know, as the great Ron Swanson says, never half-ass 2 jobs, whole-ass one job.

**Ben:** But exactly. I would say that's the distinct challenge of team lead as a role, which I've been doing for years prior to this role.

**Matty:** And let's put a pin in that because team lead is not a people management role.

**Ben:** No, but it has people mentorship.

**Matty:** Yes, right. Very different. Very important. Not even less important, but—

**Ben:** [00:11:35] Right.

**Matty:** And actually, I want to have a whole conversation about— hopefully, we'll get to that. You guys, when you're listening to this, will know whether or not we do— about what it means to actually be a manager and why it might be terrible and you might not like it at all, or you might like it a lot. Anyway, so when I was being interviewed for this role, and, you know, I was to be the manager of technology operations, and the, you know, CTO that was my hiring manager was talking about, you know, we need all this better process, all these things. And so I was all revved up for like, okay, I'm gonna come in here and I'm gonna make things great. And I came in all fired up, and after about 4 weeks, realized I need to stop and shut up and listen for a bit. And from that experience— and I was successful in that job, like, I was there for many years and grew, and a lot of great things happened— and I've learned, you know, I sort of try to think about it when I'm coming into a new place. Like, I don't want to be in a scenario where I'm like, well, it takes me 3 months to figure out what the code to the bathroom is. I just got here. It's my, you know, Homer Simpson. It's my first day. But you have 2 ears and 1 mouth, and there's— it's, it's, it's always helpful to get context. Why are things the way that they are? Every process, every way of doing things in a company is organizational scar tissue, and there's a reason and there's context. And Ben, you come into this new organization and things are not being done in a certain way. It's what— it's sort of like Occam's razor, right? It's like, what's more likely? That this company has never ever heard of Salesforce before and you're gonna bring them the light, or they've looked at it and there's a reason. Now, the reason may have changed.

**Ben:** [00:13:23] Exactly. And if you understand organizations as cultures and cultures of people, so then it's like, okay, what is the story behind why we're at this moment? Are you gonna be the invading colonizer that comes in and uproots and disrupts? Or are you gonna be the person that sits with the people listens to their stories, understands the history, and maybe from, from amidst the people and with the people helps to craft sometimes new directions, contour existing directions, as opposed to being, you know, the, the colonizer in all the bad ways, the person that just comes in and uproots society and, and, and, you know, causes massive disruption. I would argue you should probably be more of the person who sits with the people, listens to the stories, but that's hard pivot to do. It's a hard transition to make sometimes when you come in because especially when you think, I'm going to be the one to make change. And I'm going to be— I'm hired to do things. And listening, does listening sound like a thing, right?

**Matty:** [00:14:24] I see this throughout lots of time over career. Even as— even if you yourself haven't changed jobs a lot where I have. So, I've been on both sides. But also, you work with new people all the time and look at the different people coming into your organization and thinking about the ones who come in and ask questions. And it's a very interesting thing because you think about ramp-up, right? Like, ramp-up is always a thing. So back to the, hey, you just are in this place, what do you do? So on one hand, you definitely feel like, holy shit, I need to be effective like ASAP. Because whether it's a new role in a new company or it got a new promotion or something, it is a new thing. And, you know, depending upon your level of how good you feel about things or whatever, you might have a whole thing about like Well, I sure hope they don't figure out they made a mistake. I better do everything I can to prevent that.

**Ben:** That lovely voice, that lovely imposter syndrome.

**Matty:** Yeah, you just, just want to show effectiveness, and it's kind of like, um, you know, just doing things for the sake of doing them sometimes. And that can be very dangerous, and especially as you become more leadership-focused. But there are, there are lots of things that are, to Ben's point, that don't seem like you're doing something, but you're doing a lot. And I I think a little bit about when I started in my role here at Ivan. When I— so I got hired in August, and it was interesting, like literally like when I started, they're like, by the way, there's a new person who's going to be your boss, and they're not starting for like 3 months, and I can't tell you who they are, and all this stuff. And I was like, well, I'm gonna have a new boss in 3 months who's not the person that hired me, and I don't even know if this person knows me. So I was like, well, what am I gonna do during this time?

**Ben:** [00:16:03] So what did you do during that time, Matty?

**Matty:** That's about what I'm gonna tell you, right?

**Ben:** Well, I wanna know.

**Matty:** I know. So what I didn't wanna do was come in like a bull in a china shop and try to upend the entire way that we did everything. But I was like, well, the clock is ticking a little bit. Like I couldn't sit around for too long. And I actually talked to a coach of mine about this. And his perspective was, look, if you have this new person coming in in a few months, what are you normally gonna do during this first time? You're gonna do a lot of discovery. You're going to say, let me get the lay of the land. And he said, you're going to have this time. He said, what you want to have is that when your new boss, player to be named later, lands, you can sit down and say, hi, new boss. My name is Matty. Nice to meet you. Here's what's going on and here's what we should do. I've already figured it out. Like, as in during this time, I have done my analysis. I've done my research. I've talked to people and I have a plan put together. I haven't done anything yet necessarily. So, I haven't. So, it was sort of a matter of saying like, because what you don't want to do is come in and say, well, I was waiting for you to find out what you want the world to look like.

**Ben:** [00:17:05] And it's that negotiating the balance of providing a plan with leaving space for that new person to help you contour and shape that plan.

**Matty:** But it was also like adding some value of saying, I've done a bunch of research. I've gone out. This is how I understand how our team fits into the culture here. These are the challenges we have. I will tell you, like, again, back for sort of the new starter, and especially when you think about someone who is in a leadership role, and you generally— because in a leadership role you probably have a lot of, uh, cross-team things, you're, you're, you're talking to lots of other departments. So when you start, this is something I kind of did by accident when I started at Ivan, but I liked it so much I now tell every new joiner when they do this with me. So I had, you know, sit down and you'll have your boss or your, your onboarding buddy or someone in your department is going to set up like a ton of meetings for you. They're like, here, Ben, here's all the people you should meet. You need to go meet Sally in demand gen and Joe in product and whatever. And the thing is, you have all these meetings like within the first week or so that you started.

**Ben:** [00:18:09] Your calendar is packed.

**Matty:** Your calendar is packed and you're talking to these people and you don't know shit. Let's be honest, you have no context for anything. So that you don't end up having super great conversation— I mean, actually, you have great conversations They're not very—

**Ben:** have like social capital building conversations.

**Matty:** So what I did is I would say, okay, I, I had a couple almost interview sounding questions I would ask that were just generally about sort of perception of the department. What do you see the big challenges are? But really it was just more of, hey, I'm Maddie, this is my background. Who are you? Where do you live? Do you like dogs?

**Ben:** You like vanilla ice cream? I like vanilla ice cream. It's so nice. Let's talk about vanilla ice cream.

**Matty:** But at the end of every single one of those, I said, let's put something on the calendar 4 weeks from today. Yeah, and I forgot that I did that. And then it was like 4 or 5 weeks into my tenure, so all of a sudden all these meetings are popping up and I was like, oh, this is great, I have something to talk to them about now. Like, I'm so excited that now— yeah, now you're like, okay. But it was good to have— you have that first one which is just like, now we know each other as people, this exists. But proactively, let's have a follow-up in 4 to 6 weeks when I've got my feet under me I now I could have a much more like intelligent conversation, substantive conversation. Yeah, right. You know, and that one is— that's, that, that, that's worked out super well.

**Ben:** [00:19:31] That's really nice. One thing I like to do is also in those first meetings is ask, uh, the person who else you think I should meet in the company or in the organization. Because, you know, the person who sets you up with all those meetings, that's a great entry point. But then when you start meeting the team leads and department heads, well, they know their departments perhaps a little better than the person who does it, who's not in their department. And so suddenly you start getting to meet a lot of interesting people. And if you work as part of an ecosystem with companies building around your, let's say, your infrastructure, and the companies are building on you, you may want, if you're in the right, you know, user-facing part of the company, like DevRel, you may want to meet some of those ecosystem partners and start meeting some of those major developers that are building utilities on your infrastructure. And that becomes really useful. And suddenly your horizons start broadening really, really quickly. I'm at, I'm at that stage right now in week 3, where I'm starting to meet the ecosystem partners and starting to meet the developers who are building with and on us and understanding what their friction points are. Like, what, what are your challenges and who have you worked with internally in the company? What has worked well for you? What hasn't worked well for you? What are your communication channels? You know, these sort of like informal interview-esque kind of questions along with building the social capital so you can carry it forward.

**Matty:** [00:20:49] There's a really helpful book called The First 90 Days, which the first thing you need to do, Ben, is invent a time machine and go back in time and read this book 5 weeks ago.

**Ben:** I'm actually so glad I do have a time machine.

**Matty:** You skip the first step. You don't have to invent it, right?

**Ben:** Yeah, that we've had in Florida for a long time.

**Matty:** Yeah, I mean, usually I say most business books can be summarized as a blog post. This is more of those where I think one reviewer said this This feels like a bunch of Harvard Business Review articles sort of stapled together. So, its name is misleading. It sounds like it will tell you a good plan of your first 90 days, but really, it's a way— it helped me a lot with framing what does my first 90 days in an organization look like. There's some really helpful stuff about figuring out what type of an organization you're in, in terms of why are you there. Like, again, are you here because there's a radical change? Are you there to expand? Are you there to— and like being able to identify those, those bits and bobs helps to think about how you frame it. But what, what's interesting too is I think that like having those conversations that are the research-oriented ones, not only do they help you in order to make your decisions better, they do so much from a— I don't mean necessarily want to say like building allies, but just a general like you, you, you need for lack— I guess it is allies. I mean, I'm not finding the right word I want, but like, for your, your colleagues, you want to get off on the right foot in a collaborative way, right? That's sort of the thing you're saying. Hey, you tell me what I know. And I also think about it this way too, when I'm like thinking about people that I hire and when I'm working as a manager and, and any type of coaching and managing. Uh, this goes into a whole other conversation about this executive coach I got management training from decades ago that I still live by. But it's— you're looking at people from 2 axes, which is engagement and skill. And someone that is high engagement but low skill is a new starter. And it's funny, I'll say that and someone would be like, I'll be like, you could hire a principal engineer and on their first day, their first week in your company, they are high engagement, low skill. Low skill doesn't mean they don't know how to use Kubernetes. It means, but they sure as hell don't know how things happen at your company. They don't have the skill to do their job effectively immediately. But they have high engagement. They're excited. They just started. Then you have your high skill, low engagement. Those are your burnout folks that you got to do something about. And your high engagement—

**Ben:** [00:23:20] Those are your career hump folks.

**Matty:** Yeah, those are. Yeah. And it's— but you want to have that. You yourself, you know, kind of that realization that when you're in there in the beginning, I don't care. You could be the new CEO. You are low skill.

**Ben:** You're low skill at this point. Yeah.

**Matty:** You need to use the people to help you get smarter about the situation, right? You know, and so when you're kind of getting those teammates together versus kind of coming in and saying, like, you know, a lot of times people want to make an impact and they say, well, we should do this, we should do this, let's— and it starts to speak with a lot of actions and a lot of activity, and you look really busy and you look like you're doing a lot of things, but it certainly doesn't win you— which win you a lot of collaboration because you come across with this Well, you're just too dumb to understand that this thing ever existed. So let me inform you and, you know.

**Ben:** Well, isn't that emblematic of one of the curses of developer relations that we can end up being inundated with things we're doing, but never actually understanding why we're doing them or what impact they're having? We can fill our calendars with activities and initiatives and have no idea how that moved the needle in any way, shape, or form. But we're really busy, Maddie. We're constantly busy. And I think that that is just, what's the word for it? Just a never-ending, never-ending problem that plagues this discipline. You just have to pause a little more and think about the impact and think about like, what is it we're trying to do? And maybe it means doing less, but doing what we're doing more intentionally and more impactfully and taking a step back.

**Matty:** [00:25:01] Well, and I think like thinking, you know, our audience is not all in DevRel, but I think this applies to— there's a lot of similarity between people working in operational roles and infrastructure roles and things like that. It's a lot of invisible work and usually what feels pretty disconnected to the business value, right?

**Ben:** Right.

**Matty:** And being able to— and that again goes back to when you're, especially if you're newly like, I mean, I say this to practitioners all the time, like at every level I said, do you know how your company makes money? If you don't, go find out. I'll wait because We need to do. And so the more that you understand how your business works, the better you can demonstrate that value. Again, this is, it's, it's interesting because I, I'm interviewing again, it's funny timeliness when you're gonna listen to this podcast might not be true as much, but you know, I have an open role on my team right now. So I've been interviewing a lot of folks and it's just sort of making me laugh because this is a pretty, pretty senior DevRel hire. And my round of the interview, the first one is, it's kind of funny. It's, it's philosophy. Is kind of what me and the recruiter decided it was. And I had an interview with someone last week.

**Ben:** [00:26:06] A discourse in Immanuel Kant. Yeah, yeah.

**Matty:** Well, it's about the philosophy of DevRel because it's sort of one of those things saying like, are we— DevRel contains multitudes, we could mean different things. There's a bunch of incredibly skilled people that would not be happy working on the kind of team that I run, nor would, you know, that doesn't mean it's right or wrong, it's just different, right? And one of the questions I asked in the interview is that, how do you measure how do you think is a, you know, some good ways to measure effectiveness of developer relations? And by the way, for if you're listening, could also be DevOps would also fit into that, except Dr. Forsgren wrote a book about it already. I still say we need the Dr. Nicole Forsgren of DevRel to happen one day. One day. Anyway, but I had, in this interview, and I said, first of all, I'm like, I need you to answer the question briefly because we don't have an hour-long podcast to have this. And but I had an interview with some of the candidates recently, and after it was over, he said, this interview felt like a podcast. And that was a good thing. It was like, I feel like we just sat and talked on a podcast about DevRel, and that was the interview.

**Ben:** [00:27:08] That is actually a really good thing. And sometimes that is part of the interview loops for DevRel hires as well. Like, can you do a mock podcast?

**Matty:** Yeah.

**Ben:** Can you? Yeah, why not?

**Matty:** But, but I was, but I was saying, but talking about the showing value is where I was getting at, is that I, because I'm interviewing a lot of people, and I may have to explain what is our philosophy of DevRel for my team, for how we think about it. And because the way I think about philosophy is it's just a bunch of tropes that I repeat over and over again. And one of them is if you don't have a way of demonstrating value, a way of demonstrating value will be assigned to you and you won't like it. Yeah. So, but, but the other way I look at this is there is a lot of stuff that's hard to like measure. And I get that, right? But we can't lead with that because if we take care of the things that are connected to the business outcomes, if we're doing the things that are the KPIs that are well understood, nobody's gonna give us a hard time about the other stuff. 'Cause we already took care of this.

**Ben:** The other stuff becomes praiseworthy at that point.

**Matty:** Well, right, it's just, it's fine. They're like, cool, do whatever you want. You took care of it. You ate your vegetables. Now you can, you know, it's like, you know, you can have all the ice cream you want 'cause you ate all your veggies.

**Ben:** [00:28:12] I do feel, by the way, this conversation applies to every area of the business, of all aspects of engineering as well. I'm thinking particularly for like on the DevEx side, when you have, like, SDK engineers, and they're working on the SDK development, and you think to yourself, well, what do I prioritize? Full feature, you know, conformity across all the specs of the company, so we have 100% coverage at once, simultaneously? Or do I want to make sure I roll out what I can roll out really well, so that what does work for the SDK at that point works excellently, and the developer ergonomics of it is spot on? Or do I want to make that I cover every area of the APIs of the company, regardless of how it feels to developers using it. And I feel like a lot of times you have PMs, product managers, on either end of that trying to either force the DevEx engineers to build the SDK 100% simultaneously or feature by feature incrementally to make sure you get like a 10-star developer experience for that feature set. And then you move to the next one and you do it in that iterative sense. And, you know, you probably can tell by the way I'm describing it, which one I prefer more than the other one. But I've seen both in companies and I think like, it's not just true on the DevRel side. It's equally true on the DevOps side, on the DevEx side. It's true for technical writers as much, equally true for them as well. It's true across the board. Like, how do you really measure impact? By doing a lot or by doing less, but doing that less to more completeness and more to a higher standard of excellence.

**Matty:** [00:29:52] So you're 3 weeks in here, right?

**Ben:** 3 weeks.

**Matty:** Okay. And I'm going to ask some just like specificity questions. So we've got some context, not that there's a right or wrong. Okay. So, so you're running the team.

**Ben:** Theoretically.

**Matty:** Theoretically. Is there a team?

**Ben:** There is a team.

**Matty:** No, I ask, you know, there's people will be like, yes, we're going to hire you to run this team and you may be able to hire them at some point, but okay.

**Ben:** I'm not the head of myself.

**Matty:** Not the head of yourself. You're not an army of one. Okay. So, but I'm going to assume since you just started 3 weeks ago, you did not hire this team.

**Ben:** I did not hire this team. I inherited this team.

**Matty:** Or they, they, they got stuck with you. Yeah, I was gonna say it's more— let's, let's be fair, right? They were there first. They, they had you forced upon them. I'm sure that's not the case.

**Ben:** Yeah.

**Matty:** How many people are on your team? Just out of curiosity.

**Ben:** I have 3 actually quite wonderful humans on the team.

**Matty:** Are you all very dispersed?

**Ben:** So it's, it's a really good question. At this point, we are not. We are all in the Americas. Furthest south is in Colombia and the furthest north is in Toronto. And then another person in the middle of the United States and me here in Florida. So we're actually very much contained from a time zone perspective, which I don't— I'm a— I've been on geographically distributed teams actually the majority of my working life. I don't think you need to be as constrained as this. It's not necessary at all, but there's something kind of nice.

**Matty:** [00:31:15] I was going to say, it's not necessary, but it's darn convenient, I bet.

**Ben:** When you're just starting out and you're building that rapport and those relationships and getting processes going and doing a lot of listening, you can all listen in the same time zones and you— and no one has to be up late at night or early in the morning. It's not the worst thing in the world at this point. I haven't had it before, so that's a— that's another new experience for me.

**Matty:** We'll put you on the spot a little bit here. What's your— what's your plan? You know, you have your, you know, hey, it's my first day I got here, I, you know, figure out how to log into the, you know, into the single sign-on. I feel like you got to have that behind you at this point.

**Ben:** Like, what do we do at this place?

**Matty:** Right. So as a—

**Ben:** how do I use this YubiKey?

**Matty:** Yeah. So as a— and what's the tenure of your team like? Are they relatively new or have they been around for a minute?

**Ben:** The whole team has been there for about a year.

**Matty:** Okay. So they've been there forever as far as you're concerned.

**Ben:** A year in tech terms is already, you know—

**Matty:** nope. They know way more than you do about the institutionalized—

**Ben:** they know way more than I do on many things, which is what you want for a team, right? You want a team that knows more than you.

**Matty:** [00:32:20] Yes.

**Ben:** Yeah.

**Matty:** So, uh, walk me through what you're— what you've been doing so far. You know, you kind of— and you're getting these couple weeks underneath you, and then kind of what's on your short-term horizon as someone coming into a new team that's going to be trying to lead folks who ostensibly and probably should know more than, than you do, you know?

**Ben:** So what's interesting is— so I think I had mentioned earlier in our conversation, I had been a team lead for quite a while. And so I had not yet been a head or a slash director of a DevRel team, but I'd been a team lead on different functions within the team. So whether it was the DevRel engineers or Dev Advocate side, however the company liked to structure the DevRel team. But prior to entering tech, Matti, I was like the head of companies, like nonprofits, and were director level at nonprofits. That was my last time in a kind of director or head context was in my first career before I became a second career kind of tech person. So now what I'm doing is kind of leaning back into those skills and leaning into all the mistakes I made when I was in the first round of doing this a decade ago and more, and all the awful things that I cringe about of how awful I was as a manager back in those days, as a director, and all the things I told myself I would do better this time around. I'm now getting a chance to do it better. Better and to be more, to learn basically and be more thoughtful about the type of director I want to be. You know, when I did this the first time around, I was a young guy, like just out of grad school. And I was a young guy in all the ways a young guy can be a young guy. So highly opinionated. I spoke much more than I listened. I totally bought into the change agent kind of paradigm and it cost me, right? And it was not always a fantastic experience. So what I've been doing now, time around, is realizing, wait, Ben, you got two— like you just said, you have two ears. Let's, let's, let's listen more. So I've been listening a lot, which is not my natural inclination. I'm more of a talker. I'm a schmoozer. I'm not much of a listener. So I've been listening more, taking a lot of notes, and starting to put together now at the end of week 3, starting to put together some very preliminary plans of what we're going to do. And I'm going at from a methodology of like quarter by quarter. So from quarter by quarter. So now we're at the, you know, near the end-ish of Q4 as we talk about this in the end of October. So by the end of Q4, what do we want as a team to be at? What are the things we want to have seen done? And instead of saying— and this is, I think, really important— instead of saying to the team, this is what we're going to do, you, my new director that just came in 3 weeks ago, I drafted a plan, shared it with my people I report to, and then shared it with them. And like, let's talk about this. Let's— I want you to, like, tear this apart if it doesn't make sense. I want you to critique this if it doesn't make sense. Now, the conversation can't go on forever. We have to, at some point, like, feel good about it and move on and commit to something. But we're going to do that. And while we're doing that, we're simultaneously going to start together collaboratively putting together, based on what the company's objectives and key results look like for Q1? How can we as a team contribute to that into Q1 for our objectives and key results? And I'm bringing the team together next month for an offsite where we're just going to spend time to actually drill into those things, hash it together collaboratively. I'm not coming in with answers. I'm coming in maybe at the most being a guide and a facilitator and a conduit and You know, at some point we'll end the conversation and say, it sounds like we have consensus and let's move forward in that way. But this is my method now on October 27th, 2023. My method now is to try and be that collaborative consensus builder and facilitator role and less of the top-down decision maker. Let's do another podcast in a year from now and see if that's still the exact same method that I, that we're still using. But that, that one seems to be the one that is where it's working so far. And in the sense that I'm building hopefully building, and, you know, as my colleagues and teammates listen to this, they can tell me where I'm totally off or not, but building collaborativeness, building trust, building relationships, rapport, which is super important because you can't just come in and dictate if you want to create a culture of longevity on the team and people feeling like ownership over their team and ownership over their identities and ownership over their roles. Because ownership is how you create a sense of culture of staying. And a culture of people wanting to be there for the long haul. And long haul in tech could be 2 to 5 years, right? But like long, less than, more than 6 months, you know, being on the team is, I think, super, super important and crucial. So that's what we're kind of doing. We're trying to build collaboratively objectives and key results for the first quarter of next year and structuring the team in a way that makes, that makes sense, that fills the need. So, having come in, one thing that was desperately needed was, because there hadn't been a person in this role for a while, was creating a culture of recognition and a culture of being basically the praiser of people's work and the person who helps carve out career progression paths. For people and elevates people on the team. So, a key deliverable for me that will make me feel successful in this role is if I can carve out career trajectory paths for the folks on the team that both do 2 things at once, Maddie. Recognize what they've done in the past year and get them to the place in their career where they should be after a year of the work they've done. And then carve out a systematic approach to continuing to do that So that no one feels like they're stagnant and no one feels like they're underappreciated inadvertently. Of course, it just— there wasn't anyone there to do that, to— and they shouldn't feel stagnant in their, in their progression and know what they're building towards personally and professionally.

**Matty:** [00:38:45] But you mentioned about having had the, you know, people management manager experience in a different lifetime, but like those skills are transferable, right? Like, that's why I wanted to kind of go back when, when we were talking about the, you know, being a team lead and then versus being a people manager. And Lindsay Holmwood has a wonderful blog post that he wrote a very long time ago and it's still relevant called It's Not a Promotion, It's a Career Change. And I'll put that, a link to that in the show notes. Also have a link to the book The First 90 Days. And there's a couple things I think about when I think about that difference about people management. So one is how I got out of people management. So I had that role, I'd been the manager of technology operations and eventually became the director, and I was running our— all of our database operations, tech ops, our help desk, all those, you know, sorry, production support folks, all these things. And then we got a new CTO, and after I was working for him for a little bit, he sat down with me and said, you know, He said, I don't feel like managing people is what gets you out of bed in the morning. He said, I feel like you like the technology more. You know, this is what I'm thinking about from understanding you, blah, blah, blah, blah, blah. And he's like, I think, I think you would do better to be, you know, our infrastructure architect. And I said, well, first of all, I didn't know that was a thing that we had here. Like, it was a thing he was thinking of. And, and we kind of talked about it and I said, okay. But I think what I'm about to share is indicative of like kind of part of the problem. And I said, I'm up for that because that sounds like a fun job. And, and yes, I'm kind of burnt out on, man, you know, all the managing of the people. And I would love to just go and play with Chef and, you know, vCenter and all these other things we were doing and, and design all that stuff. I said, so I had 2 caveats. I said, one is I didn't— do not take a pay cut for doing this. Like, you're, you know, I, I need to keep making the same money. And I said, I need you to write a letter to my wife and my father-in-law that this is not a demotion. And, but that was the sort of thing because it's like, you're not management anymore. It's a demotion. And we've, this has been talked about a lot about like, hey, I mean, I look at this too. I'm a big believer that there can and should be individual contributors on my team who make more money than me.

**Ben:** [00:40:57] 100%. You know, there's a great talk about this on by Aaron Bassett on the You Got This series of events run by Kevin Lewis. So I'll find the link and I'll share it with you to add to the show notes. Later, but he gives a talk about this because Aaron, who I worked with him for quite a while in other contexts, in other roles, he's a big advocate of the idea you do not need to become a manager to become promoted, and that there must be paths of excellence for ICs to follow up the ladder. And if you have to be promoted to a manager role to get the raise that you deserve, then there's something fundamentally wrong in the organization.

**Matty:** That being said, team lead and people manager are 2 very different jobs. Okay, because— and, and the reason I think about this is I, I was doing some career coaching for, for someone recently who was talking about how they wanted to get into management. They're like, I think I want to be a manager. And we're doing a lot of talking. They're a very senior IC, and we're kind of talking about it. And the— a lot of it kept coming back to, oh, but I, you know, I run these open source projects, so I know about managing people. And I'm like, that's managing people working together, but let's talk about the things that people managers do. Like performance management, like career coaching, like engagement coaching, like, you know, that some of it's very, very rewarding and some of it's very much not, but it's rewarding because it's necessary and helpful. But you don't do that running an open source project. You don't deal with people's time off requests. And I am being incredibly like—

**Ben:** [00:42:28] you're never putting an open source contributor on a PIP at any point.

**Matty:** The opposite of trying to figure out how to take an open source contributor and making sure that they are getting the career progression that they need in your organization, that you're developing them, that you're helping them have what they need and go where that needs to be. When I was in my management and director life before, when I was at Apartments.com, which is part of a larger company, uh, one of the things that organization did that I am always thankful for is they invested very heavily on manager and director training because they realized they had such a culture of promoting from within that they kind of sat back and looked and said— I don't remember what the number was, I'm going to— this is according to a statistic that I just made up— that 75% of their managers were first-time managers. But it was something like that. And they said, well, this is not great. I mean, it's great, but it's not great for the organization to like just—

**Ben:** opportunity to provide skills, right?

**Matty:** It's like, okay, we have to do something about that. And so they had a program put together by this executive coach basically based here in Chicago named Bill Joy. And I will talk about Bill Joy all the time. He's Longtime listeners of this podcast will remember Bill Joy from when I've talked about culture change because I learned from him.

**Ben:** [00:43:36] So Bill has been very impactful in your—

**Matty:** Bill has been hugely impactful. All the stuff I talked about, engagement, all that, that's all Bill. But one of the things he talked about, and he didn't invent this, but you know, you think about the— as you go through, you know, kind of management career, there's multiple transitions. There's IC to manager, manager to director, director to senior director, senior director to VP. Blah, blah, blah. And each of those transitions is a change. So it's like, are you going from managing a team to managing a function or whatever? The hardest one is that first one going from— and part of the reason is because you need to stop doing the things you're used to doing. Everything else from that point on is just a matter of scale and like nuance. But yeah, and, uh, it's interesting in that in my role here at Ivan I've sort of accidentally made it easier for myself, even though, yes, I've made that transition before. But I am now, from a DevRel perspective, going from being a, you know, chop wood, carry water DevRel for 8 years or whatever, now say, now I'm going to go actually lead the team. I am, I believe, again, my team that's listening may or may not argue about how successful I am, but I believe I am more successful than I would be, say, if I was leading a DevRel team that was in the Kubernetes space or the infra code space or someplace where I'm like, I know this shit. I am helped by the fact that I joke and say I couldn't get a job on my own team. Now, some people might hear that and say the worst thing in the world is a manager who doesn't know what we do.

**Ben:** [00:45:05] But you're a manager that's willing to learn.

**Matty:** Well, and I know how to DevRel. I know how to do that job, but I would never go out there and try to go give a talk on a conference stage about Kafka.

**Ben:** You know, and, and, or maybe Franz Kafka, maybe the—

**Matty:** I mean, I actually probably should try to.

**Ben:** I love that you mentioned that because there's something really profound about not only taking a new role and, and a new role of responsibility and scope, but switching verticals as well, Matty. Like switching into an area that you have lost your expertise in. And what does that do to you as the new joiner? And what kind of humility does that force upon you? That's actually a really, really good conversation.

**Matty:** I guess my last— I mean, we're— we've surprising no one, or at least maybe not surprising you and me. I don't know about the listeners. I don't know what surprises y'all anymore. It's been over 10 years of Arrested DevOps.

**Ben:** Are you at 10 years?

**Matty:** The first episode of Arrested DevOps was in December of 2013.

**Ben:** Mazel tov.

**Matty:** Anyway, I don't remember what I was trying to say. I think what I was trying to say is that this episode is over.

**Ben:** [00:46:06] We've talked a lot. We've talked a lot, Matty.

**Matty:** That said, this has been a whirlwind. This has been super fun. If you head over to arresteddevops.com/inchargenow for this episode's show notes, you'll find links to several of the things we talked about on this episode, and you can click on them if you would like to. If you go to arresteddevops.com/itunes, you can leave us a review in the Apple Podcasts directory, previously known as the iTunes Store, which somehow helps other people find the podcast and such. And you can find us on Spotify and iHeartRadio. And Audible and all those other systems. And maybe it's getting to that time of year, you should be listening to us on Spotify. Maybe we'll make it into your Spotify Unwrapped or Wrapped. Is it Wrapped or Unwrapped? I don't know, I don't use Spotify.

**Ben:** I don't use Spotify either. I, I know they have a thing.

**Matty:** They do, they do like a Spotify Wrapped as a podcast. Like, we can do one at the end of the year.

**Ben:** But at the end of your thing, is it a wrapping or an unwrapping? And that's kind of a conceptual conversation. I mean, we can find the answer by by searching for it, but it's Spotify Wrapped.

**Matty:** [00:47:09] It's your Spotify Wrapped.

**Ben:** You went right to the answer. We didn't— we could have like—

**Matty:** it makes more sense though because it's a wrap, but you're unwrapping. Well, that would—

**Ben:** you're unwrapping it, but they wrap it to you. Yeah, right.

**Matty:** Okay.

**Ben:** Um, I can see it being either way. I can understand the—

**Matty:** yeah. Well, thanks for joining me today, Ben.

**Ben:** Thanks for having me, man.

**Matty:** It's been a good—

**Ben:** it's been a pleasure.

**Matty:** A great time. Yeah, this is Arrested DevOps, and remember, there's always DevOps in the banana stand.
