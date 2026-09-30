---
title: Test Driven Infrastructure with Arthur Maltson and Michael Goetz
description: Testing your infrastructure code is critical. But exactly HOW do you go about doing this? Matt talks with Arthur Maltson and Michael Goetz about using tools such as Test Kitchen, Chef Audit Mode, InSpec, and Chef Compliance to help you build confidence in your infracode.
date: 2015-11-19T07:27:31.000Z
publishDate: 2015-11-19T07:27:31.000Z
episodeNumber: "48"
podcastFile: arrested-devops-podcast-episode048.mp3
episodeImage: episode/img/tdi.png
episodeBanner: /episode/img/tdi-banner.png
images:
  - /img/social/fb/tdi.png
guests:
  - person: amaltson
    snapshot: amaltson
  - person: mgoetz
    snapshot: mgoetz
hosts:
  - mstratton
sponsors:
  - datadog
  - 10thmagnitude
aliases:
  - /48
explicit: yes
transcript: tdi
---

Matty sits down without a co-host to talk test-driven infrastructure with Arthur Maltson, a software developer who moved into DevOps full time, and Michael Goetz, who manages the Solutions Engineering Group at Chef and identifies as an old-school release engineer with "a lot of personal angst" about unvalidated changes reaching production. Matty warns that the conversation leans Chef-specific because that's what they all know best, but the ideas apply to whatever configuration management tool you use.

## Why Test, and What to Test

Arthur's answer to why bother is confidence: that when you make a change it will work the way you expect. Michael adds that you need to be clear about what you are testing. In Michael's framing there is the signal in (what you told the thing to do), the signal processing (your configuration management tool) and the signal out (what came out the end). You shouldn't test the tool, since it presumably has its own test suite. You should test the things that you and your coworkers are changing on a system. Matty adds predictability: knowing what a configuration change will do in production, instead of doing exploratory testing there.

## Test-Driven Without the Dogma

Matty describes red-green-refactor and says it has been hard to write all the tests first for infrastructure code because of dependencies between pieces. Arthur gently corrects the definition: you don't write all the tests first, you write one or two and then the implementation. For infrastructure that might mean writing a test that a user and group exist, watching it fail, and writing the code to make it pass. "I'm not very religious," Arthur says. "As long as the tests come shortly after or shortly before the implementation code, then you're golden."

Michael splits it into two cases. For greenfield work, Arthur's approach is right, because "you can't test what you don't know." For existing infrastructure that isn't automated yet, some teams write tests against production, using a working system as the blueprint while they develop the automation, which Michael says has been successful for organizations with legacy systems to migrate.

## Using Audit Mode Against Production

Matty digs into that second case using Chef's audit mode. Audit controls are checks that say if this is true, the system is compliant, and the Chef client can run with audit disabled (the default), audit enabled alongside convergence, or audit only. Running audit-only across a production fleet tells you which machines aren't compliant and what the impact of fixing them would be. In Matty's hypothetical, rolling out convergence code to 10,000 nodes could break 9,000 of them because of snowflakes nobody knew about. It sounds silly, Matty says, but "you're treating your production as your test environment," except that you aren't testing the change there. The results are driving your code change.

Michael says the same pattern works with ServerSpec and other open source tools, as long as you have a known good system to validate against. Arthur ties it to refactoring: "Touching a legacy system that has no test is terrifying," so you write outside-in integration tests first, and in a sense audit mode is essentially rewriting a manual system as configuration management, which Arthur calls a powerful tool.

## A Cookbook Workflow

Arthur walks through the team's setup. A custom `chef generate` template gives every new cookbook test stubs and Test Kitchen configuration from the start. They use Test Kitchen with ServerSpec and expect to move to audit mode eventually. Speed matters to Arthur as a developer, with feedback in under a minute or two, and the default Vagrant approach was too slow at destroying and recreating machines, so "Kitchen Docker has saved our bacon a bunch." After that comes branch-based development, code review, automated builds, and usually automatic deploy to production once merged.

Michael says the workflow is close to that, with one provocative habit: Test Kitchen instances aren't destroyed until a clean run feels necessary, which will annoy TDI purists. Michael rebuilds from scratch at judgment points to make sure a rebuild works and that a second run changes nothing. The order is a test, then the code, then the next test. Kitchen also gets used with Docker, EC2, DigitalOcean and other drivers. Michael's advice on CI is that people find it scarier than it is: "If you can do it locally, you automate it with robots and your CI pipeline," and you shouldn't add anything in the pipeline that you didn't do locally.

Matty prefers to call it individual development instead of local development, since the workflow could run on shared VM workstations or a cloud driver rather than a laptop. Matty brings up a ChefConf talk by Sascha Bates, whose approach is to run against the existing machine, run it again, and run it again before destroying the VM, because you want to test idempotency against a machine that already has configuration on it. The pipeline should also repeat individual tests, Matty argues, for two reasons: trust but verify, and because your code may by then be merged with someone else's.

## Performance and Fast Feedback

Michael says your test environment should look as much like production as you can afford, so 15 production systems means a 15-system test cluster, though Michael lives "in the land of reality" and tells people to validate small chunks so the local footprint stays manageable. Arthur separates fast unit tests from slower integration and end-to-end tests, and says that in infrastructure you have little to play with beyond a beefier machine or test environment. The team's ELK cookbook is tested locally across multiple Docker containers and takes 20 to 30 minutes to get feedback.

Michael's answer to slow runs is that you don't have to build from scratch every time: bake an image that has the earlier steps done and run the cookbooks against that. Arthur gives an example. Arthur's team is rolling out Sensu, and developers built a Docker image with Sensu already in it, so someone writing checks can spin it up and get on with it.

## Isn't This Slower?

Matty says testing feels like it slows you down, but in practice you move faster because you're not rolling out a cookbook, breaking something, and scrambling to write remediation. "Making things safer overall makes it faster." Matty adds that writing tests forces you to work out the logic, and brings up README-driven development. With customers on a proof of concept, the routine is to have them write down the desired state first, which is effectively the README, then work out the resources, and the tests come out of that. Matty admits to never having written outlines for papers as a student, but says you can't just fire up `default.rb` and start hacking on infra code.

Michael says complaints about how long tests take grate on Michael: "how much time do you spend on an incident bridge when the thing is broken?" It's almost certainly longer than writing a proper test would have taken. Arthur asks how much time people spend SSHing into systems after a converge to check it worked, and then doing it for the other 100 systems. "You're paying it forward ahead of time by writing those tests."

## Where the Gaps Are

Michael sees a people gap and a technology gap. The people gap is being too purist and applying decades of software TDD experience, which Michael notes is itself debated, to people new to testing infrastructure, when they'd be better off learning the lessons themselves. The technology gap is fleet-wide validation: there are tools to validate one system, or the output of a web page, but nothing that lets you spin up an app, a web tier and a database and validate all three at once.

Arthur's biggest gap is multi-node cookbook testing. Arthur's team runs the components talking to each other on localhost inside one Docker container, which doesn't represent the real system, and Arthur hasn't seen much written about spinning up a cluster of machines, testing it thoroughly, and tearing it down. Performance and feedback speed come second.

## Added After the Interview: Chef Compliance and InSpec

Matty explains that the interview was recorded about 12 hours before Chef Software released a batch of new products, so Matty and Michael added a segment afterward. It is a product overview from two people who work at Chef, and it is not a neutral survey.

Michael says people usually come to compliance because an audit hurt them, and that compliance work means taking a document and translating it into something like "root user must not be 0" and a check to validate it. Matty describes compliance, security and ops teams each working in their own tools, with the compliance folks' "stack is PDF and Excel." Matty's pitch for Chef Compliance is a common language and continuous audit, and it doesn't require the Chef client to be running on the nodes being tested.

The open source pieces are InSpec, a testing framework influenced by ServerSpec, Kitchen-InSpec, which runs InSpec tests in Test Kitchen and doesn't depend on Busser, and Train, an abstraction for talking to local or remote instances over SSH, WinRM, Docker or Mock. Both like that InSpec tests carry metadata such as severity that you can define yourself, and that you can write custom resources so a compliance officer can say what an SSH config should contain without writing a regular expression. Michael has already translated a CIS benchmark for Red Hat, and says a compliance check is really just a test. Matty walks through how it fits together: scan for compliance, remediate with ChefDK, verify with Kitchen-InSpec, run it through Chef Delivery, deploy with Chef Server, and watch with Chef Analytics. "It's not about the tool, it's about how you're doing work," Matty says.

Matty closes by saying InSpec and Kitchen are not Chef-only and work independently of Chef, and that all of it enhances rather than replaces what they discussed earlier. Michael asks listeners to keep an open mind about what they're testing, when, and why.

- Arthur's DevOpsDays Toronto [talk on TDI](https://youtu.be/IEQUfo0eUiI?t=248)
- [Chef Compliance](https://www.chef.io/solutions/audit-compliance/)
- [InSpec](https://chef.io/inspec)
- [kitchen-inspec](https://github.com/chef/kitchen-inspec)
- [train](https://github.com/chef/train)
- [The Road to InSpec](https://www.chef.io/blog/2015/11/04/the-road-to-inspec/)
- [How to F-ck Up Your Configuration Management Adoption... - Sascha Bates](https://www.youtube.com/watch?v=pHmU0aNkENc)

## Check Outs

### Arthur
- [*tmux-Productive Mouse Free Development*](https://pragprog.com/book/bhtmux/tmux)
- [Private Supermarket](https://github.com/chef/omnibus-supermarket)
- [Headspace Meditation App](https://www.headspace.com/)
- [Paulaner Munich Wheat beer](http://www.paulaner.com/en)

### Matt
- [Teamocil](https://github.com/remiprev/teamocil)
- [Game of Thrones - A Telltale Games Series](https://www.telltalegames.com/gameofthrones/) game for iPad
