---
title: New And Upcoming Features #4
author: She
excerpt: >
    Adding bot mode, a "restrict bots" channel mode,
    the `+channel-context` tag, `no-implict-names`, and `labeled-response`.
---

The holiday season is rapidly approaching,
and we here at Libera.Chat have decided to give gifts early.
Namely, the latest batch of new features is now live.

## Bot user mode `+B`

[Bot mode](https://ircv3.net/specs/extensions/bot-mode)
allows clients to mark themselves as bots.
This is reported to other clients in the following ways:

- The `B` flag is shown in `WHO` replies including the bot.
- An informative line is added to `WHOIS` replies about the bot.
- A `bot` tag attached to all messages from the bot, including `JOIN`.

We highly recommend that all bots on Libera.Chat set this mode
before joining channels. Please refer to
[this table](https://ircv3.net/software/clients#bots)
for a list of bot frameworks that are known to support bot mode.
Setting bot mode clearly indicates that a client is a bot,
but does not indicate who is responsible for the bot
for the purposes of [Libera.Chat's bot policy](https://libera.chat/policies/#bots).

Libera.Chat's implementation of this mode
forbids changing it while joined to channels.
This is in part because the specification defines no way of
communicating changes in bot mode to others in shared channels,
but also because it makes the following channel mode useful.

## Restrict bots channel mode `+B`

Channel mode `+B` prevents bots from joining unless they
match an invite exemption. It also prevents bots from sending messages
to the channel unless they are voiced or opped, matching Libera.Chat
recommendations for authorised bots. This mode does not affect
`ChanServ` or `ozone`.

This means that if a channel has this mode set and a bot in the channel
also has bot mode set, both you and Libera.Chat staff can be reasonably sure
that the bot is explicitly permitted to be in that channel.
As with bot mode, we highly recommend that channel operators set this mode
on their channels once they're sure it won't adversely impact
any authorised bots in those channels.

## `+channel-context`

The [`+channel-context` tag](https://ircv3.net/specs/client-tags/channel-context)
may be attached to private messages as a hint to other clients to
display them in the specified channel's buffer.
Some clients route private `NOTICE`s to the currently focused buffer
to make automated replies more visible and convenient,
but without information about which channel is most-relevant to the notices,
it becomes messy quite quickly. This tag is meant to obsolete such behaviour.

As with `+typing`, Libera.Chat validates the value of this tag.
The tag will be stripped if the value does not correspond to a channel
that the sender can send messages to.

## New capabilities

The following two capabilities have been available for a while
and are meant for client/bot authors to use. If you don't write IRC software,
this section may be of less interest to you.

The [`no-implicit-names` capability](https://ircv3.net/specs/extensions/no-implicit-names)
allows clients to opt-out of being sent the list of nicks in a channel
when they join. For some clients, this list is superfluous,
either because they don't need this information,
or because they'll be querying `WHO` later.

The [`labeled-response` capability](https://ircv3.net/specs/extensions/labeled-response)
allows clients to attach a label to commands and have that label be attached
to any automatic responses, or a new `ACK` message if there were none.
This is an important feature for robustness,
as now clients can be certain of when their commands have been processed
and exactly which automatic responses correspond to which commands.

## What's Next?

The [`draft/ICON` ISUPPORT token](https://ircv3.net/specs/extensions/network-icon)
is likely to be deployed in the very near future. It just tells
clients where they can fetch a copy of our icon. The code for it is
very simple, and as soon as it gets merged into our server software,
we will load it!

[Multiline message](https://ircv3.net/specs/extensions/multiline)
support is still planned, pending some further testing of the existing code.
We're hoping that having it will encourage more clients to implement support.
Clients that don't support this feature will not be negatively impacted by
clients that do.

A member of staff is also working on [`draft/metadata-3`](https://github.com/ircv3/ircv3-specifications/pull/613)!
Another massive IRCv3 feature, `METADATA` allows IRC clients to attach
additional information to their sessions beyond the typical
nick/user/host/real names, and allow other clients to query that information
and subscribe to updates in a structured manner. This would enable
UTF-8 display names, user-specified nick colours, pronouns, and more.
Metadata can also be attached to channels for similar benefits.

Another member of staff is working on a draft specification for
per-channel client tag allowlists. If you don't like Libera.Chat's
default-deny policy for client tags, this specification will allow
channels to opt-in to client tags such as `+reply` or `+draft/react`
which may not be fully backward-compatible or wanted in some channels.
This one is likely to take a lot of bikeshedding,
so you may have to wait a while for it.
