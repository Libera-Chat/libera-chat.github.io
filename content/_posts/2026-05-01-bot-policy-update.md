---
title: Bot/LLM policy update
author: staff
excerpt: Planned updates to our policies regarding bots and LLMs
---

>Update: The policy updates discussed below are now in effect. Please see the
>[bot section](/policies/#bots) and [LLM section](/policies/#llms) of our
>policies for the actual wording that was ultimately agreed-upon by staff.

Happy International Workers' Day.

We need to talk about bots, particularly bots with LLMs.
Over the past few months, there has been a spike in LLM usage on Libera.Chat
from AI assistants running unsupervised on the network. Most of this activity
hasn't affected major channels, but we have observed LLM-driven bots joining
existing channels without permission. This comes with privacy concerns,
not just for other users who don't want their messages scraped by LLM vendors,
but also for the people running these agents. In one case, an agent disclosed
what we believe to be PII about its operator without being asked for it.

Between this and growing concerns over how LLMs are used on Libera.Chat,
we believe our policy is overdue for an update. Previously, we released
[a set of guidelines](https://libera.chat/news/llm-etiquette) for LLM usage
on Libera.Chat. These guidelines are, as the name suggests, not binding,
save for a clarification that training LLMs on messages is considered logging.
Unfortunately, there have been enough incidents involving LLM operators not
taking responsibility for their bots that staff now believe that the
guidelines are insufficient.

As this will be a major update to our policy with major implications for how
some people use the network, we are providing advance notice with this post.
What follows is a high-level overview of what we're planning to add to
Libera.Chat's policy on 2026-05-30. We are still workshopping these additions,
so please keep in mind that **everything below is subject to change**.

## Bots

One of the key guidelines for running bots on Libera.Chat is to get permission
from channel operators before joining your bots. With the policy changes,
this guideline is going to become a rule. Naturally, you will implicitly grant
this permission to yourself for channels you operate, and bot-testing channels
can grant this permission by saying so in the channel topic or entry message.
We also plan to expand this rule to also require that bots cannot have
functionality that causes them to join channels that they are neither
invited to nor configured/permitted to join by their administrators.
This is going to have implications in the LLM policy.

Another guideline being promoted to a rule is that bots should be clearly
labelled as bots and have some indication of who runs them. Bot cloaks serve
this purpose, but a note in the gecos (also known as real name) field works.

We are also planning to explicitly codify that Libera.Chat may not be used as
infrastructure for communications between not-humans without staff permission.
Some development or testing is fine, but if Libera.Chat is being used in
production, we will likely require you to find another message broker
for your application.

Finally, we will also be adding a recommendation (not a rule) to our policy to
voice (i.e. give channel status mode `+v` to) your bots in order to make them
stand out better and to make Libera.Chat's anti-spam automation
(particularly `ozone`) hate them less.

### Bot Mode?

Those of you who have been following IRCv3 development or our recent posts
may have a question right about now. Why not implement
[bot mode](https://ircv3.net/specs/extensions/bot-mode) to provide a standard
mechanism for bots to communicate that they are bots?

We plan to! Bot mode has risen to near the top of our list of development
priorities, along with a couple of other IRCd features to improve bot mode's
usefulness. We're also considering updating `NickServ` to support a notion
of bot accounts that are explicitly linked to another account. Bots that log
into those accounts with SASL would have bot mode automatically set.

However, bot mode is, at this time, poorly-supported by
[clients](https://ircv3.net/software/clients#desktop-clients).
If you are an author of an IRC client and you have held off on implementing
bot mode support due to
[few networks having it](https://ircv3.net/support/networks#networks),
now is the time!

## LLMs

LLM usage is *not* being banned outright on Libera.Chat. However,
going forward, we are going to require greater transparency from
operators of bots with LLM features *and* from channels whose operators have
explicitly permitted LLMs to read or write messages in their channels.

First, LLM usage on Libera.Chat must be supervised. If you run a bot that
either uses LLMs to produce message content or uses LLMs to process messages,
you must ensure that either you or another human who has agreed
to supervise your bot is present in any channels the bot has joined.

Second, we're going to be considering the processing of messages by LLMs
to be public logging. This includes cases where messages are submitted to
a service that claims in its privacy policy that it will not train models
on submitted input, as well as cases where the bot operator asserts that
the models are being run locally. We have no way of validating either claim,
and LLM developers and advocates have an unfortunate track record
of acting in bad faith toward contributors to the common good.

This has implications for channel operators. Specifically, channel
operators must inform users that their messages may be processed by LLMs
if the operators consented to LLMs processing messages in their channels.
In addition, we will also require channel operators to inform users if they
might interact with LLMs, as well as ensure that users can tell which
nicks in a channel correspond to LLM-powered bots.
We recommend putting this information in the topic or a `ChanServ` entry
message.

Additionally, we're going to codify the assumption that an LLM is capable
of taking any action permitted by the bot/client whenever prompting
occurs, regardless of what the prompt says. This reflects a growing corpus
of real-world examples of AI assistants disobeying prompts and deleting
important information. One of the practical consequences of this is that
**AI assistants, agents, and other LLM-driven autonomous clients will be
effectively banned from Libera**, as the assumption means we must also assume
that they may spuriously join channels without permission.

Finally, if you make use of any client scripts, plugins, or features that use
LLMs, you will be expected to request permission from channels
or the other sides of PM conversations where you would like to use them.

## One More Thing About LLM Contributions

Libera Chat's projects (including Solanum, which we co-maintain) have received
a number of pull requests featuring obvious LLM-generated content. So far,
these have all demonstrated non-understanding of either Libera Chat's
requirements or the codebases being contributed-to. If you're planning to
submit LLM-generated code for inclusion into one of Libera Chat's projects,
please don't bother. We will reject patches and PRs that show signs of
insufficient human involvement in their creation.
