---
title: Quick Ops Guide
category: chanop
weight: 25
---

This guide aims to cover the basics you need to know to
manage who is in your channel. For permissions like operator or voice,
we have a guide that covers [setting up permissions](creatingchannels#setting-up-permissions).

Before using force, please attempt to resolve conflicts
using de-escalation and/or warnings. Doing so generally leads to
healthier communities. See [our guide on catalysis](catalyst).
Additionally, if your channel is being spammed/flooded or is dealing with
a repeat ban evader, please contact staff by joining `#libera-hotline` and
sending us a message there.

All of the following assumes that you are currently opped-up in your channel
(i.e. that you have a `@` in front of your name in that channel).
If you aren't, you can op up using `/msg chanserv op #channelname`.

## Removing someone from your channel

To remove someone from a channel, use the command `/kick nickname`
where `nickname` is the nickname of the person to remove.
You can optionally supply a reason for the kick which will be shown to
the person being kicked and everyone else in the channel, like so:

```irc
/kick someone Come back when you've calmed down.
```

Under normal circumstances,
this will not prevent someone from rejoining the channel.
To stop someone from being able to join a channel,
you will need to set specific channel modes.

## Restricting access with channel modes

Setting channel modes is done with the `/mode` command,
which takes one or more arguments depending on the mode
you wish to set. For instance, setting the channel mode `C`
(which blocks channel-wide queries of client info) is done with:

```irc
/mode +C
```

Some common modes for restricting access include:

- `+i`: Require an invite to join this channel. Used for private channels.
- `+m`: Require users to be voiced or opped to talk in this channel.
- `+r`: Require an account to join this channel.
- `+R`: Require an account to talk in this channel.
- `+b mask`:
Prevent anyone matching `mask` from joining or talking in this channel
or changing their nickname while in that channel.
Voiced and opped users can still talk.
This is known as a "ban".
- `+b mask$#channelname`:
As `+b`, but additionally forward users affected by this ban to
the provided channel when they try to join.
This is known as a "ban forward".
To set this, you must additionally be opped in the provided channel,
or the provided channel must have channel mode `+F`.
- `+q mask`:
Prevent anyone matching `mask` from talking in this channel
or changing their nickname while in that channel.
Voiced and opped users can still talk.
This is known as a "quiet".

## About masks

The [`mask`](channelmodes#masks) parameter of `b` and `q`
controls who is affected by the ban/quiet.
Masks have the format `nick!user@host`, where
`nick` is a nickname, `user` is a username/ident,
and `host` is a hostmask. The hostmask can be:

- an IP address,
- an IP address range in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation),
- a domain name, or
- a [cloak](/guides/cloaks).

Masks take wildcards.
You can use the `*` wildcard to represent strings of zero or more characters,
or the `?` wildcard to represent exactly one character.
The `?` wildcard is rarely used in practice.

For example, the following would ban everyone with a nick ending with "bot":

```irc
/mode +b *bot!*@*
```

The following bans everyone from a channel (hint: don't do this):

```irc
/mode +b *!*@*
```

Note that masks are always matched case-insensitively.
Additionally, they cannot "see through" cloaks; an IP address ban will never
match a cloaked user.

## Choosing a mask

Masks offer a lot of flexibility in determining who to ban,
and unfortunately that flexibility can make it very easy to ban innocents
or be completely ineffective.
The following are patterns that are good enough for most cases.

### Nick masks

Nick ban masks are generally of the form `nick!*@*` or `nick*!*@*`.

Nick bans are trivially easy to circumvent,
but generally such circumvention will not happen accidentally
(as can happen with some other bans).
This is sometimes a good thing; a common use for this kind of ban is to
temporarily remove someone whose connection is "flappy"
(repeatedly auto-connecting and disconnecting).
For example, to ban someone whose nick is "flappyperson" and redirect them to
a channel where they will be told why they were banned:

```irc
/mode +b flappyperson*!*@*$##fix_your_connection
```

### Account extbans

You can also ban people by the account they are currently identified to.
This makes use of the "account name" extban, which has the syntax
`$a:accountname`.

For example, to ban someone with the account name "naughty1", use:

```irc
/mode +b $a:naughty1
```

These are a safe default for people with accounts.
While they can be bypassed by logging out, this happens rarely.

### Host masks

Host ban masks are generally of the form `*!*@host` or `*!ident@host`.

This is the most common means of keeping a troublemaker out of a channel.
Some clients have a `/kickban` command which usually creates a ban with one
of these automatically in addition to kicking the target from the channel.

For instance, to ban someone connecting from the IP address "1.2.3.4",
you would do the following:

```irc
/mode +b *!*@1.2.3.4
```

This type of ban may hit others connecting from the same IP address.
If the username of the person you wish to ban does NOT start with a `~`,
it is strongly recommended to include it in the mask, like so:

```irc
/mode +b *!username@1.2.3.4
```

## Invexes and exemptions

Channel modes `+r` and `+i` are very wide-reaching,
and sometimes it is necessary to carve out exemptions to them.

Invite exemptions (or "invexes") use the channel mode `I`.
They take a mask like bans and quiets, but allow people to join a channel
that they otherwise couldn't due to `+r` or `+i`.
For instance, if a channel is `+i` but you want to allow someone
with the account name "accountname" to join freely, you would use:

```irc
/mode +I $a:accountname
```

In rare cases, it may be necessary to set exemptions for people to
bypass bans or quiets that affect them.
Exemptions use channel mode `e` and are like invexes.
Use sparingly; exemptions can get confusing if you later need to
remove those people from the channel and have forgotten about the exemption!

## Querying and removing bans/quiets/invexes/exemptions

To view a list of bans, quiets, invexes, or exemptions (or "list modes"),
use `/mode =b`, `/mode =q`, `/mode =I`, or `/mode =e` respectively.
Bans and quiets for a channel may be viewed by anyone, even if they aren't in
that channel. Invexes and exemptions require the viewer to be opped up.

Unsetting any mode is done by using a `-` instead of a `+` in
the `/mode` command, and list modes are no different.
For example, `/mode +b bot*!*@*` would be removed by `/mode -b bot*!*@*`.
