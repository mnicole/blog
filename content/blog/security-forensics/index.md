---
title: Thoughts on Forensics (Defense of the Dark Arts)
tags: ['school', 'security']
path: 'security-forensics'
date: "2019-01-18"
---

This week focuses on how to investigating security incidents. Once you've been infected, there is a way you can deal with it while still preserving evidence that you can use to investigate the incident. Do you understand what happened? Can you replicate it?

__Side note - the lecturer talks about the book, The Cuckoo's Nest. I read this in the past year and loved it!__

* Timeline
* Replications of events

### Types of cases you may investigate
* Fraud
* Intellectual Property
* Hacker Intrusions/Data Breaches
* Inappropriate use of Internet
* Child Exploitation
* eDiscovery supporting Civil or Criminal Litigation

### Stages
1. Evidence acquisition
2. Investigation and Analysis
3. Reporting results

#### 1. Evidence acquisition
* Identify, preserve, and analyze evidence and present results.
* Could find evidence in network, operating system, databases and applications, peripherals, removable media, human testimony
* To keep in mind: It's not up to you to judge guilt. It's up to you to show what happened. If you think someone is guilty, you look for information to prove your opinion, so it can make you biased while investigating.
* Need to describe results in a way that a judge will understand. Something the lecturer does is ask questions like an attorney to see if there's anything a judge might ask that they can clarify now.
* Always check times and keep records of times.
* Any time you do anything, it affects the memory and could erase something.
* Locard's Exchange Principle - when two things interact, there is always transference of material. Thoroughly document anything you do on a live system.
* Triage - There may be different ways to do something. You should check multiple ways to make sure you can come to the same conclusion.
* You can't log into accounts even if you come across the username and password. You need permission from a judge. It has to be relevant to the case.
* Harddrives are giant and there may be a time limit. You also might get additional harddrives, portable harddrives, cell phones, etc. It takes time to process the data.
* Whitelisting is good to match checksums and verify files are ok and you don't have to waste time investigating them. The person processing the harddrive will do a checksum of the entire harddrive. The first thing you should do is check that to make sure the evidence wasn't tampered with.

### Incident Response Process
0. Incident Response Team Preparation
1. Incident Detection
2. Initial Response
3. Formulate Response Strategy
4. Investigate the Incident
4a. Data Collection
4b. Forensic Analysis
4c. Perform Non-Forensic Investigation
5. Document Findings
5a. Administrative Action

Initial Response
- Pull network cable or block port (attacker may be on network still, even watching you!)

Order of Volatility - RFC 3227
- Gather evidence in specific order, capturing the most volatile things first
* System memory
* Temporary file systems
* Process Table and Network Connections
* Network Routing Information and ARP cache
* Forensices Acquisition of Disks
* Remote Logging and monitoring data
* Physical config and network topology
* Backups
* Non volatile data (Time/Data stamps, event logs, web/application logs, registry)
* Relevant logical files (Unknown executables, attacker tools, any other files related to incident)


FTK Imager - easy free tool, but leaves an imprint in memory so it's better to do with commands.
Never install forensics tools on a suspect's computer, because you're influencing!

