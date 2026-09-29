---
title: agile and devops
description: Len Lagestee, an Agile coach, and Patrick O'Brien, a longtime waterfall project manager turned Agile convert, join Matty and Trevor to talk about what a Scrum Master is for and whether ops belongs on the delivery team.
date: 2014-01-03T14:52:25.000Z
publishDate: 2014-01-03T14:52:25.000Z
episodeNumber: "4"
podcastFile: arrested-devops-podcast-episode004.mp3
podcastDuration: 1:07:50
episodeImage: episode/img/agile-and-devops.png
episodeBanner: /episode/img/agile-and-devops-banner.png
images:
  - /img/social/fb/agile-and-devops.png
guests:
  - person: pobrien
    snapshot: pobrien
  - person: llagestee
    snapshot: llagestee
hosts:
  - mstratton
  - thess
sponsors: []
aliases:
  - /4
  - /agileanddevops
youtube: dYzbqgACh4g
transcript: agile-and-devops
explicit: yes
---

## Who Gets to See the Sausage

Len Lagestee, an Agile coach who has been teaching or practicing Agile since 2004, and Patrick O'Brien, a lifelong consultant and project manager who spent years fighting Agile "tooth and nail" before converting, join Matty and Trevor. Trevor opens with a question Matty has long held an opinion on: should anyone outside the delivery team care how the sausage gets made, or is the team a black box that takes in a feature request and outputs a feature?

Patrick objects to the word should in that question. It depends on the culture and maturity of the organization, he says, because an unready organization is "either blinded by the transparency or intimidated by it" and starts grabbing at details. Len coaches transparency from the start, with an open invitation for any stakeholder to stop by a review, stand-up or planning session. The retrospective is the exception. He keeps it "a place for the family to talk about family business," since teams shut down and hold back bad news when managers with direct reports sit in. The review, where the product owner or a tester reads out each story and its acceptance criteria while the team demos it, is a separate ceremony, after which everyone else is excused. Trevor's team folds the review into iteration planning and rolls straight into the retro, where "anybody who's not a core member of the team is out of there."

## Tasks, Owners, and the Fox in the Henhouse

Should work be split into dev tasks, QA tasks and UX tasks, or should the team just collaborate? Patrick's answer is that it works best with specific tasks going to specific groups, because that at least gives the illusion of ownership, and throwing everything out there is "like a steak to a pack of dogs." He is firmest about testing: don't let testers be the developers, especially at UAT, because "you're literally letting the fox into the henhouse," however tempting it is to reuse dev people for capacity.

Trevor's counterexample comes from that week. He'd set up the automation server to run click tests, and since he as a developer didn't know the tool, it made more sense to pair with the QA person.

## Technical Stories and One Roadmap

Len says DevOps-flavored work is not a user story, since no end user benefits directly, so his teams write architecture or technical debt stories and size them in sprint planning alongside features. Sometimes a team will decide to spend "a quarter of our time" on technical stories and 75% on feature work. Patrick asks whether these get wrapped in an epic. Only if they're big, Len says, and what he'd really like is for them to line up with an architectural roadmap that gets merged into the product owner's roadmap. Business folks historically give a deer in the headlights stare and say "I just want you guys to build features," and a single roadmap is his fix. He adds that writing a story as "as a developer I need this" is a first sign of a bad user story, but the work still has to live somewhere, and once product owners see what it takes to deliver, some start asking the architects what the team needs.

Trevor's team files that work as chores, and Trevor points out that "it's hard to size a chore." Len adds that it's hard to test one too.

## What a Scrum Master Is For

The recording dropped out here, and Matty came back from a staff meeting to a reminder that "this is Arrested DevOps, not Abandoned DevOps." The question he'd missed was what a Scrum Master does. Len's answer is to take a neutral stance on process and watch for team dysfunction, and above all to remove impediments, by shepherding the removal, not doing it personally. The role also ends up being "a bit of a psychologist," and Len's own exit strategy from a client is getting the Scrum Masters to make the same observations he does.

Patrick describes it from the trenches: enforcing whatever process the team agreed to, running the daily round of questions, and letting team members move the cards on the board themselves because moving something from dev done to QA ready is cathartic. He wants a coach, not a manager. Matty had first thought of the Scrum Master as the Agile cop before deciding that was a non-Agile thing to say, and notes that people often want the Scrum Master to be a project manager who writes reports. Patrick will come after you if you're late, "but I'll be nice about it." Len prefers a stealthier version: if a two-hour task has sat in progress for three days, whisper to a teammate to ask about it, because "the best Scrum Masters are the ones that have to say the fewest words."

## Public Humiliation, or a Brother in a Foxhole

Patrick says Agile begins as public humiliation for teams coming from waterfall or project management by heroics, and that he doesn't deny it to them. Matty asks that the humiliation stay inside the delivery team, not at the demo where a missed feature gets pinned on Joe, and Patrick agrees: "public humiliation within a microcosm." Len finds the phrase too strong and would sooner have the teammate ask "do you need any help with that?" because the developer is probably new, stuck, or afraid to raise an impediment.

Matty connects it to blameless culture. The internal accountability cuts two ways, he says: pick your teammate up, and also don't make the rest of the team fail the review. Len's version has the last word: "what can I do to help you get out of this foxhole?"

## Agile, DevOps, and "What Do You Mean by That?"

Matty asks whether a Scrum Master is a natural fit to coach DevOps-style collaboration. Len says yes for getting the right people talking, with an architect for the technical side. Leadership can't just tell teams to be more DevOpsy, he says. He'd ask about their pain points instead, and bring those to communities of practice across teams, since "if it's a mandate from leadership, I very rarely see that actually work." He also mentions clients who say they're going Agile and then mention "it takes us 4 weeks to get something out into production," through CAB boards and approvals, and he tells them they won't be very agile until that's addressed. Len ventures, with a caveat that he's throwing the number out, that maybe 10 to 15% of organizations do Agile well.

Patrick's reaction to "we're going Agile" is "what do you mean by that?" Matty says the same happens with DevOps, with people asking to "download the DevOps, hire me some DevOps." Patrick thinks people treat it as a tool they can install, and if you're going to do Scrum, do all of it: "That's not a Scrum, that's a status meeting" if it isn't daily. He also describes a middle ground between waterfall and Agile that he's implemented, and Trevor supplies the name: "We called it fragile."

## Ops on the Delivery Team

Matty asks why an operations person isn't part of delivery all the time. The delivery triangle has a developer and a tester, "and I don't remember who the third one is. I know it sure as hell wasn't ops." His previous organization invented a system engineer role inside the team, without doing an awesome job of it. Len would like anyone with a vested interest in shipping to be on the team, but with 30 teams that's expensive, so a lead engineer or architect who understands DevOps stands in, if you can even find one. Matty, a 20-year sysadmin, argues you should have far more developers than sysadmins, which is why the answer has to be practices, not headcount. He returns to the challenge from the top of the episode, to pull a sticky off the board that isn't yours, which drew no reports back ("either nobody did it because you're a bunch of chickens, or nobody told us how it went"). He can't take the task that says build a server in production, but "why can't it sometimes be test the software that Trevor wrote?"

Len's remedy for teams that throw work over the wall is to have them support the application for a while, interrupting or even aborting the sprint when something breaks, so they feel the pain of release. Matty calls it the classic Amazon example of developers carrying a pager. Patrick describes trying to get his team to own a story all the way to deployment, and Trevor notes that after he picked up more ops tasks, more than one person asked to pair with him. Len's summary is that any place you'd have had a handoff is now a co-creation point, which Matty repeats back at the end of the hour to a "well played, sir" from Len.

## Check-Outs

### Matt

- [Scott Hanselman's 2014 Ultimate Developer and Power Users Tool List for Windows](http://www.hanselman.com/blog/ScottHanselmans2014UltimateDeveloperAndPowerUsersToolListForWindows.aspx)
- [A Game of Thrones: The Graphic Novel: Volume One](http://www.amazon.com/Game-Thrones-Graphic-Novel-One-ebook/dp/B007LB5MF4/ref=sr_1_1?s=books&ie=UTF8&qid=1389808579&sr=1-1&keywords=game+of+thrones+graphic+novel)

### Trevor

- [*Helix*](http://en.wikipedia.org/wiki/Helix_(TV_series)) - TV show produced by Ronald D. Moore

### Len

- [Si Alhir's blog](http://salhir.wordpress.com/)
- [Conscious Agility](http://www.ConsciousAgility.com)

### Patrick

- [Agile Board Hacks](http://www.agileboardhacks.com)
- [*Disciplined Agile*](http://www.amazon.com/Disciplined-Agile-Delivery-Practitioners-Enterprise-ebook/dp/B0087HTKA4/ref=sr_1_1?ie=UTF8&qid=1389809770&sr=8-1&keywords=disciplined+agile+delivery)
- [*Writing Effective Use Cases*](http://www.amazon.com/Writing-Effective-Cases-Alistair-Cockburn/dp/0201702258/ref=sr_1_1?ie=UTF8&qid=1389809800&sr=8-1&keywords=writing+effective+use+cases)
- [*Castle*](http://castletv.net/)
- [*Chicago Fire*](http://www.nbc.com/chicago-fire/)
- [*Chicago PD*](http://en.wikipedia.org/wiki/Chicago_PD_(TV_series))
- [*Investigation Discovery*](http://investigation.discovery.com/)
