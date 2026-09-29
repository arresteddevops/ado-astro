---
title: Continuous Integration – CI Told You So!
description: Mathias Meyer of Travis CI and Joe Hirn of DevMynd join Matty and Trevor to argue that CI is as much about trust and team responsibility as it is about the build server. They cover feature branches, where to start, preflight checks, and keeping the build visible.
date: 2014-01-29T14:54:57.000Z
publishDate: 2014-01-29T14:54:57.000Z
episodeNumber: "5"
podcastFile: arrested-devops-podcast-episode005.mp3
podcastDuration: 57:30
episodeImage: episode/img/continuous-integration.png
episodeBanner: /episode/img/continuous-integration-banner.png
images:
  - /img/social/fb/continuous-integration.png
guests:
  - person: mmeyer
    snapshot: mmeyer
  - person: jhirn
    snapshot: jhirn
hosts:
  - thess
  - mstratton
sponsors: []
aliases:
  - /5
  - /continuousintegration
youtube: v7iS906NPOw
transcript: continuous-integration
explicit: yes
---

## A Build Server, and a Dial on Responsibility

Matty says up front that he's on the ops side of DevOps and doesn't know a lot about CI, so he asks the panel to explain it like he's five. Joe Hirn's answer is that CI is "essentially just a build server at its core," and that the problem it solves is the works-on-my-machine dilemma. He thinks of it as "a dial on the responsibility of a team": curing works-on-my-machine is one setting, and continuous delivery is turning the dial up on how much you trust the team to cover everything.

Mathias Meyer, who handles infrastructure at Travis CI, finds CI more interesting as culture than as tooling. It's about integrating changes into master often and iterating quickly, with the CI server as "the unbiased judge" of whether something works beyond one developer's machine. Joe agrees, and adds that having to stare at each other and ask why the build is broken, who broke it and who's going to fix it "sets the tone for a different culture on a team."

## Why Can't You Do This on Master?

Matty's clients say they'll do CI, but they want their feature branches too. Mathias's response is a question: why can't you develop this feature on master, and what would it take to let you? GitHub, he notes, uses plenty of feature branches, but they ship them to a small share of production servers, so they still see whether the change works. If people insist, the answer might be a feature flip or better isolation, and he credits Jez Humble for pushing him to think about it.

Joe is blunter: "commits don't happen if they're not on master." He'll accept a private branch for saving your work overnight, and he points people to Paul Hammant's writing on trunk-based development. A feature branch, he says, is "almost like a little mini coup," and the longer it stays out of master, the longer before teammates can give feedback or use the helper functions you wrote. He has "taken down many Git flow posters off people's walls." Both allow that open source is different: when you don't know the contributor, the pull request model fits.

Trevor describes the branch-per-story workflow his team runs, where you keep merging development into your branch through the day so nothing that reaches UAT or QA gets broken. Matty's reaction: "Boy, that sounds like a lot of work." Trevor's: "It is. It really is."

## Where to Start, and the Shame of the Missing Build Script

Asked where an unconvinced team begins, Joe says "By doing." Point Travis at the repo, or download Jenkins and run it locally, and show teammates the build that's been broken for a week. Mathias says the real prerequisite is an automated build, which used to be a barrier for big Java and C++ projects (his first automated builds were Ant and Make) and mostly isn't anymore, since Django and Rails come with build tooling.

Matty's summary is to forget unit tests and coverage and just ask whether the build worked. Joe says that's the right first step, and that the CI server does the nudging from there: once it's set up, "you should feel this internal shame that there's not a single command that you can run to compile your project." Then the empty test phase suggests a passing test or two, and the deployment checkbox suggests the next step.

## When the CI Tool Becomes the Whole Workflow

Matty asks whether using a CI tool for CI differs from using it to orchestrate workflow automation. Mathias says at its core it runs commands, so orchestrating a pipeline of unit tests, integration tests, QA sign-off and deploy is a natural evolution, and removing friction from shipping is good. Trevor's team runs everything through it: moving databases and code, and running unit and UI tests from development through QA and UAT to production. Matty runs Chef cookbooks through CI and spins up Vagrant VMs to check they compile, which a few years ago would have drawn a "you're doing what with the what now?"

He also tells a story about presenting configuration management to a client. An ops executive who had said nothing through the whole session asked, "You're telling me that I can have the developers do the work, but I still get to push the button that says it's okay because I know it's okay?" Matty said yes. The executive said okay, sold, and walked out of the room. Mathias adds that the word he keeps coming back to is confidence, and that automation only works if everyone keeps caring that the build is green and fast.

## Testing, from Rails to Hosted CI

Joe says the Rails community's testing culture is such that a gem without a how-to-test note in its README isn't going to be widely used. His team tests first, to drive the design "as God intended, not in its diluted form," and the hardest part is choosing the isolation level for each test, such as whether to use Capybara or hit the database. Working in Clojure, where the ecosystem is less baked, has meant leaving "the padded, cozy, warm fireplace, bear-rug testing environment of Rails," and building things like the test database setup by hand.

For hosting, they use Travis CI for open source, and he likes seeing the Travis flag on a gem before he uses it. On client projects they've used CodeShip, and he praises its support, including help with firing up a Capybara server and its dependencies like PhantomJS.

## Preflight Checks as a Smell

Matty describes preflighting as committing to a staging branch or repo that the CI tool builds, with only passing changes promoted to trunk. Joe runs most of his tests in a local pre-commit hook and defers the slow ones, like multi-browser Selenium runs, to CI, and he calls a preflight gate "sort of a smell." His reasoning is that "there's probably a deeper problem if you can't trust your developers to commit code to master." Mathias agrees: "It's a barrier, and the question is, why do you put it up?" Trevor sums it up as "trust versus control."

Mathias points out that at Google, tens of thousands of developers commit to a single branch every day, and asks why your company can't. Joe's version is that a team with a Git flow poster on the wall lets everybody stand around it and figure out how they're supposed to develop software. Joe grants that forks and pull requests are a good model for open source, but for a team in the same room, he says, "it's really just an inconvenience." Mathias adds that "you're all on the same team," and that private forks show little trust in the people building the product.

## Make the Build Look at You

For common mistakes, Joe starts with not having a visible status indicator in the room. His line is "you don't want to look at the status of the build. You want the status of the build looking at you." Otherwise people filter the CI emails, and someone eventually notices the build has been broken for a week. Mathias says visibility is also the argument against preflight checks: if you're worried about people breaking master, worry about fixing it fast.

Joe has seen teams gamify it, including a Hudson plugin that tracked who broke the most builds, and the traditional build gnome for the last person to break it. He cautions that it turns into punishment for people who are sensitive about it. What he prefers is a build master of the day who owns getting it running regardless of whose commit broke it, and the principle behind it: who broke the build doesn't really matter, and "is the build fixed matters."

## Retro

### Matt

Matt hates Subversion.

#### Trevor

Trever attended a Chef training class and is super excited about it. Even though he only learned how to make it configure Linux machines.

## User Stories

This is a new section of the podcast where we introduce a new topic in just a couple sentences. This episode's "requirement" is Configuration Management.

Want to learn more about Configuration Management? Check out [The Food Fight Show](http://foodfightshow.org) podcast!

## Outline

- Overview of CI
- What about feature branches?
- What is the difference between using a CI tool for CI, and using a CI tool to orchestrate workflow automation
- Where do you begin when wanting to start CI? What bite of the elephant goes first?
- Where does testing come into play? How do we talk about unit vs functional testing and what is used in the CI portion/build?
- Preflight checkin vs checking into trunk
- [Paul Hammant's blog](http://paulhammant.com/) (trunk-based design)
- [Codeship](http://www.codeship.io/)
- [TravisCI](http://travis-ci.org)
- [DevMynd](http://www.devmynd.com/)

## Check-Outs

### Matt

- [Windows Azure Friday](http://www.windowsazure.com/en-us/documentation/videos/windows-azure-friday/) podcast
- [Mynd](http://itunes.apple.com/us/app/mynd-smart-calendar-meeting/id568604969?mt=8&uo=4&at=11lsCi) iPhone calendar app

#### Trevor

- [How I lost my $50,000 Twitter username](http://thenextweb.com/socialmedia/2014/01/29/lost-50000-twitter-username/#!tV5eY)
- [*Drink More Whiskey!: Everything You Need to Know About Your New Favorite Drink*](http://www.amazon.com/gp/product/1452109745/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1452109745&linkCode=as2&tag=arrdev-20)

#### Mathias

- [*Drive: The Surprising Truth About What Motivates Us*](http://www.amazon.com/gp/product/1594484805/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1594484805&linkCode=as2&tag=arrdev-20)
- [Ethiopian Yirgacheffe](http://www.greenmountaincoffee.com/Coffee/FTOEthiopianY) coffee roasted by [Caravan](http://www.caravanonexmouth.co.uk/) in London

#### Joe

- [Agile Product Design](http://www.devmynd.com/event/agile-product-design)
