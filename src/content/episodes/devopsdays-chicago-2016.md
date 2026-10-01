---
title: Devopsdays Chicago 2016 with Nell Shamrell-Harrington, Jill Jubinski, and Michael Stahnke
description: "Recorded live at DevOpsDays Chicago 2016, Matt was joined by Nell Shamrell-Harrington (Chef), Jill Jubinski (IBM), and Michael Stahnke (Puppet). We talked about empathy for recruiters, how the DevOpsDays Chicago event has changed over the years, and how Michael gets all of his DevOps philosophies from 90's slow jams. "
date: 2016-09-12T21:46:26.000Z
publishDate: 2016-09-12T21:46:26.000Z
episodeNumber: "71"
podcastFile: arrested-devops-podcast-episode071.mp3
episodeImage: episode/img/devopsdays-chicago-2016.png
episodeBanner: /episode/img/devopsdays-chicago-2016-banner.png
images:
  - /img/social/fb/devopsdays-chicago-2016.png
guests:
  - person: nharrington
    snapshot: nharrington
  - person: jjubinski
    snapshot: jjubinski2
  - person: mstahnke
    snapshot: mstahnke
hosts:
  - mstratton
sponsors:
  - 10thmagnitude
  - hired
  - datadog
aliases:
  - /71
  - /devopsdayschicago2016
explicit: yes
transcript: devopsdays-chicago-2016
---

Matty hosts solo, recorded live in front of an audience on the second day of DevOpsDays Chicago, the third year the show has taped there. Matty's panel is Nell Shamrell-Harrington, a software engineer at Chef from Seattle, Jill Jubinski, a community evangelist and recruiter at IBM by way of its Blue Box acquisition, and Mike Stahnke, a director of engineering at Puppet. Matty, an organizer, says this was the smoothest of the three events, and then worries about having jinxed it. The episode's cold open is Mike saying most of the DevOps advice Mike takes comes from 90s music, and Nell adds the TLC song about not chasing waterfalls as advice for anyone getting started.

## Themes of the Conference

Nell saw a strong emphasis on humanity and technology and how they aren't so different. Mike saw open space after open space come down to testing: "testing all the way down." Jill says a constant theme is that "technology is hard, people are harder." Matty recalls Adam Jacob's keynote on humane systems, context and thriving together, and Jill's morning talk on DevOpsing recruitment, which included a game of guessing whether a recruiter or an engineer said each line, where the answer was always both. Matty also liked a line from Nell's talk on refactoring that what software does matters more than what it was intended to do, and Nell adds that "the only source of truth is when you execute the code itself."

## Testing and the Long Road to CD

Matty says test-driven infrastructure has only really been possible for about three years, and can't remember how cookbooks got written before Test Kitchen. Nell says Nathan Harvey, Nell's boss, suggested that to teach TDD to sysadmins, you point out they already test: when they configure by hand, the first thing they do is log in and check it worked. Testing is the same thing, faster and more reliable than a human. Nell sat in an open space on applying the testing pyramid to infrastructure code, where people from Chef, Puppet, Ansible, sysadmin and app dev backgrounds showed the principles are the same whatever the tool.

Matty says people at infra-code vendors are in a bubble where table stakes aren't table stakes for everyone. Mike describes conversations where people know the outline of a transformation plan, but every bullet is a journey that can take nine months or a year, and people who read about 50 deploys a day don't have 50 tests yet: "just because you know the roadmap doesn't mean you can actually drive." Nell recommends what Martin Fowler calls the strangler method, adding tests around one small part of a legacy mess until the new well-tested application strangles the old one.

Matty tells of a bridge in Louisville that was built on top of an old bridge, which let the old one fall away once the new one was strong enough, as a metaphor for keeping the old thing until the new is ready. The host connects it to shims and temporary bridges, which product owners hate, and to Jeff Smith's Ignite about Dungeons & Dragons DevOps: you fight level one monsters first, and learn to write a Git commit message before the 50-deploys-a-day dragon. Customers want to manage their Hitachi storage before they've written a recipe to install a package. Mike finds writing the tests "way, way harder than writing the software," and has mad respect for test automation engineers. Matty says writing the tests makes the code easier, since you've done half of it.

Matty ties this to time to first delight, Matty's own term, which Andrew Clay Shafer calls mean time to dopamine: people have to experience results, since you can't talk them into it, and if you're selling against something that gave them a dopamine hit, as Adam Jacob would say, they will argue with math.

## Empathy for Recruiters

Mike says it was the first recruiter talk Mike had seen at a DevOpsDays, and it was great. Jill's goal for 2016 was to speak at an engineering conference, and this was the third talk toward it, after Monitorama, where the topic was Taylor Swift and open source, and Boston. Jill wants to spread empathy for recruiters, and says the good ones are not rare. Mike says Puppet grew from 35 people when Mike arrived to 470 and couldn't have without recruiting and hiring pipelines. Nell praises Chef's in-house recruiter, who also trains interviewers, since some questions engineers are used to asking are actually illegal. Jill says to rely on recruiters for that, and for diversity, since they understand the market, while engineers assess the technical side.

Matty says engineers can be arrogant about everyone else's job, assuming sales or marketing or recruiting is easy. Mike calls it Dunning-Kruger, "The more you know, the more you know you don't know." Why do recruiters get a bad rap? Jill says there are internal recruiters who are ingrained in the culture, and external ones who work on commission and fill seats without knowing the companies. Jill's advice to companies big enough is to "get an internal recruiter and I promise you it will change your life." Jill has gotten emails pitching a DevOps engineer role, and Nell one pitching an administrative assistant job. Matty says the reason we hear about it is that we live in a bubble, and IT people get complained about on Facebook. Making fun of recruiters is lazy, and Mike loves fake internet points.

Jill says recruiters often lack effort as well, and should know their audience, since spamming LinkedIn is wrong for engineers but works for marketers. Matty sometimes replies to recruiters offering to tell them what is wrong with their job description, and about half the time gets a response saying let's talk. Jill runs messages by engineer friends for honest feedback.

## The Event Itself

Nell, who is hard of hearing, enjoyed the party at the bowling alley with card games, since it wasn't a loud bar. Jill liked the close venue compared with Boston, where a larger stage felt disconnected from the audience. Mike was thrilled with the deep dish lunch on day two, and Matty recalls that in the first year a speaker got mobbed with questions and missed the pizza.

Three first-timers in the audience share feedback. Mark liked the networking and hearing how companies integrated DevOps, and wished open spaces were organized more tightly. Yasser, a developer, preferred the non-technical talks and suggested speaker ratings. Mike says DevOpsDays went through an arc where culture talks pushed out tools talks and now a few technical talks are coming back, and non-technical talks travel better since they're relevant even if you're not on that technology. Matty recalls two people at the first Chicago, one from a smaller company saying it seemed like it was for big companies and one at a big insurance firm saying it was for small ones, after the same event. Dongmin Liu, also a first-timer, says the non-technical part is the harder one, because it's not about technology but how you package it to convince other teams.


