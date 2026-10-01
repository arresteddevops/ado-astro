---
title: Machine Learning Ops with Chelsea Troy
description: Jessitron is joined by Chelsea Troy, Staff Data Engineer at Mozilla, and one of the all-around most interesting people in software today, to discuss staff engineering, machine learning operations, and maybe also surfing.
date: 2024-01-18T15:15:31.000Z
publishDate: 2024-01-18T15:15:31.000Z
episodeNumber: "201"
podcastFile: arrested-devops-podcast-episode201.mp3
podcastDuration: 48:15
podcastBytes: 65536
episodeImage: episode/img/ml-ops.png
episodeBanner: episode/img/ml-ops-banner.jpg
images:
  - img/social/fb/ml-ops.png
guests:
  - person: ctroy
    snapshot: ctroy
hosts:
  - jkerr
sponsors:
  - uffizzi
  - gitbook
aliases:
  - /201
  - /mlops
explicit: no
transcript: ml-ops
---

Jessica Kerr talks with Chelsea Troy, a staff data engineer on the machine learning operations team at Mozilla, about what staff engineering actually involves, how MLOps differs from DevOps, and when to use machine learning at all. The team exists to help Mozilla's other teams get models into production, and Mozilla has around 750 people. The promised topic of surfing doesn't come up in the recording. The cold open is Chelsea: "all jobs, if you do them long enough, become either management or marketing or some combination of management and marketing."

## Every Job Becomes Management or Marketing

Chelsea started out planning to stay on the senior engineering track forever and write code for a whole career, and has since concluded that the skills early-career developers dismiss as soft become nearly the entire job: coordinating within and across teams, making sure everyone knows a product exists and how to use it. The system turns out to include people, regulations and corporate bureaucracy as well as the repositories. It's a lesson people seem to have to reach themselves, like advice to a friend in a bad relationship, and Jessica's version is that you don't break up with your technical skills, you open the relationship. Chelsea adds that you don't get to build things unless people want them, at least not if you want to avoid shelfware.

## Knowledge Work Is Not an Assembly Line

Chelsea says measuring engineers on productivity metrics inherited from an assembly line, where nails accumulate linearly through the day, is a disservice. Software is knowledge work: "We don't create value by doing the same thing over and over." It creates value by gathering context into an understanding of how to solve a problem now while keeping as many likely directions open, which Chelsea credits to Kent Beck's term optionality. From outside, that looks like nothing, nothing, nothing and then a big release, after months of understanding the problem, talking to users and socializing changes, since changes that torch people's context take power away from them. Writing the code comes last and is the easiest step. "We are treating lines of code like nails." Jessica adds that "our job is not what we do. It's what we know," and Chelsea says much of the day job is finding knowledge for someone and routing it to them, and that early in a career, how much code you can write depends on how good the decision makers about the repository are.

## Buying MLOps Tools

Mozilla's values include data privacy and ethical use of machine learning, which are hard to prioritize when teams spend their energy on getting any model into production through individual heroic efforts. In the fall a team began evaluating products to give data scientists and machine learning engineers a turnkey path to production. Chelsea notes the product landscape is young, with upstarts of around 15 employees, so the larger asks sometimes can't be met and documentation doesn't always match behavior.

Chelsea's advice on evaluating them is to separate optimizing metrics, where more is always better, from satisficing metrics with a good-enough threshold. Engineers tend to treat everything as an optimizing metric and end up in decision deadlock, for instance over scale, when a small startup isn't going to see a billion users at once. Jessica: "Problems you want to have." The optimizing metric that often isn't on the grid is the availability and flexibility of support. Chelsea fought to include it, and found that "the products we chose that have really, really responsive support teams are the products that we have managed to get into production at this point." A support engineer on Slack, for example at Weights and Biases, will take a custom chart problem and reproduce it in their own project. Free and open source tools the team liked ideologically didn't make the cut, since there's nobody whose job is making sure it works for the people using it, which Jessica sums up: "Wow, it's almost like the code isn't the whole thing." Jessica adds that at Honeycomb, good support gets renewals.

## How MLOps Differs from DevOps

Chelsea came to MLOps from software engineering through data science, not through DevOps, and describes a data engineer as someone thrown into the model, the data science code or the app code as needed. Chelsea's view is that it isn't necessarily different in kind but that machine learning models add special considerations. Jessica compares deterministic program execution to the internal combustion engine, now one category among vehicle types. If the same input produces different output, that would worry a DevOps person and not necessarily an MLOps person, though there's a different decision tree, since some causes are fine and some are awful, and diagnosing a malfunctioning model is harder because the internals are automated.

Chelsea tells of someone distraught that ChatGPT claimed to have run code and reported wrong output, and of spending too long explaining the mechanism when the question was really "how could ChatGPT do this to me?" The person wanted to imagine a world where the tool had an interpreter, and Chelsea's answer was that one can imagine that world, but it's not the one we're in. A software engineering background alone isn't enough to debug these systems, and tools built to operationalize deterministic code lack needed features.

One such feature is checking that production data still matches the test data the model was evaluated on. Chelsea cites Andrew Ng's Machine Learning Yearning and a contrived example of a cat-photo model trained on high-quality images that then meets blurry phone photos. At Mozilla, Chelsea works on a system that sanitizes search data, discarding anything that might contain personal information. It drops anything with numerals unless it's on a human-made allow list, and uses spaCy's named entity recognizer to filter names. The team has to be sure the people using the feature are in the population the recognizer was trained and tested on, so it monitors an aggregate distribution of languages in search data, without storing the searches, to catch a shift before anything is stored long term.

Chelsea says MLOps and DevOps share a focus on catchability. There are three risk amplifiers: catastrophicness, likelihood, and insidiousness, "how likely is it that this thing goes uncaught if it happens." Security, DevOps and MLOps focus on insidiousness more than other roles do.

## When to Use Machine Learning

Chelsea's view is that the most effective systems are a series of steps with humans in the loop, not one generalized system doing everything. The example is who-to-follow recommendations on social media. A popularity-based model produces "the Beyoncé problem," which spirals up the already popular and doesn't connect niche audiences. A person can often tell when someone has gamed the engagement system, and human judgment is hard to automate and, Chelsea adds, hard to beat with a model, even though it's spotty at best. Better would be to break it into three simpler steps: find what topics people discuss, figure out who is knowledgeable on them, probably with a human in the loop, and recommend those people to people who want to learn. Chelsea notes that Follow Fridays and hashtags were user inventions, and that classical models on tabular data are often enough. Jessica's summary: for any problem where you'd reach for machine learning or generative AI, break it down into parts where a model helps, parts where a deterministic rule works, and low-volume, high-value parts where a real person should be asked.

Chelsea writes at chelseatroy.com, linked below.

[Read more of Chelsea Troy's writing here!](https://chelseatroy.com/)
