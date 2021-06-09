---
title: Channel Modes
category: chanop
credits: web7
---

Fully administering a channel involves the use of [channel
modes](#channel-modes), `ChanServ` [user flags](#chanserv-user-flags), and
`ChanServ` [control flags](#chanserv-control-flags). This document provides an
overview of these tools, their distinctions, and how they work together.

## Channel modes

Channel modes are a feature of the IRC protocol for setting permissions and
attributes on a channel. Modes are set using IRC commands, and they apply
directly to channels.

What channel modes control:

- Bans (`b`, `e`)
- Moderation (`m`, `n`, `q`, `u`, `v`, `z`)
- Forwarding (`f`, `F`)
- Channel visibility (`p`, `s`)
- Channel access controls (`g`, `i`, `I`, `j`, `k`, `l`, `n`, `o`, `Q`, `r`,
  `S`)

To set modes, you must be a channel operator.

### Listing current channel modes

To list current channel modes:

`/mode <channel>`

### Setting and un-setting channel modes

To set a mode:

`/mode <channel> +<mode>`

To un-set a mode:

`/mode <channel> -<mode>`

For example, to set a user `bar` as an operator on `#foo`:

`/mode #foo +o bar!@user/bar`

### Enforcing modes

`ChanServ` can help ensure that desired modes are always set or unset for your
channel, using the `MLOCK` [control flag](#chanserv-control-flags). If for any
reason they are changed, `ChanServ` can change them back. 

For example, to ensure that setting the topic on `#foo` is always restricted
to operators:

`/msg ChanServ SET #foo MLOCK +t`

To see the modes that are currently enforced by `ChanServ`:

`/msg ChanServ INFO <channel>`

### Preserving channel modes

By default, all channel modes are lost when a channel becomes empty. To
preserve modes, set the `GUARD` [control flag](#chanserv-control-flags): 

`/msg ChanServ SET <channel> GUARD ON`

`ChanServ` will join your channel and remain there, ensuring the channel is
never empty and the modes are never lost.

### Available channel modes

Channel operators can set the following modes.

{% assign channel_modes = site.data.channelmodes |
where_exp:"item","item.restricted != true" %}

{%- include modetable.md modes=channel_modes -%}

### Restricted channel modes

Only Libera.Chat staff can set the following modes.

{% assign restricted_modes = site.data.channelmodes | where: 'restricted',
true %}

{%- include modetable.md modes=restricted_modes -%}

## ChanServ user flags

`ChanServ` user flags grant privileges for `ChanServ` functions in your
channel. User flags are set by sending private message to `ChanServ`, and they
affect users identified by nick, `NickServ` group name, or hostmask.

User flags are similar to modes, but they control what users can do via
`ChanServ` rather than what they can do directly with the channel. Because
`ChanServ` is always opped, it can perform actions on behalf of users who are
not opped, according to privileges specified by their user flags.

ChanServ user flags control the following:

- Who can use `ChanServ` to moderate users (`v`, `o`, `b`, `r`, `e`, `f`)
- Who is set `+v` or `+o` automatically by `ChanServ` (`V`, `O`)
- Who can use `ChanServ` commands to manage the channel (`s`, `i`, `R`, `t`,
  `A`, `S`, `F`)

To set `ChanServ` user flags for users other than yourself, you must be
flagged a founder (`+F`). 

`ChanServ` must be joined to your channel; see `/msg ChanServ HELP SET GUARD`.

For a complete list of ChanServ user flags, see `/msg ChanServ HELP FLAGS`.

### Granting limited user privileges

User flags are useful for allowing users to take actions through `ChanServ`
without granting them full privileges on the channel itself. For example, you
might restrict topic changes on `#foo` to ops, but then allow non-op user
`bar` to ask `ChanServ` to set the topic: 

```
/mode #foo +t
/msg ChanServ FLAGS #foo bar!@user/bar +t
```

With this set, the user `bar` can set the topic on your channel by using the
`ChanServ TOPIC` command instead of the IRC `/topic` command:

`/msg ChanServ TOPIC #foo <channel topic>`

## ChanServ control flags

`ChanServ` control flags set the actions `ChanServ` will take to help
administer your channel. Control flags are set by sending a private message to
`ChanServ`, and they define `ChanServ`'s behavior in the channel.

Control flags are useful for helping maintain control of your channel on your
behalf, including when all other ops leave the channel. They include:

- Enforcing modes (`MLOCK`)
- Managing the topic (`TOPIC`, `TOPICLOCK`, `KEEPTOPIC`)
- Managing access control lists (`RESTRICTED`, etc.)
- Automatically posting messages to users when they join (`ENTRYMSG`)

`ChanServ` can also set attributes that appear in `INFO`, including `URL`,
`EMAIL`, and `PRIVATE`.

To set `ChanServ` control flags, you must be flagged a founder (`+F`).

`ChanServ` must be joined to your channel; see `/msg ChanServ HELP SET GUARD`.

For a complete list of control flags that can be set in `ChanServ`, see `/msg
ChanServ HELP SET`. For details on a control flag, use `/msg ChanServ HELP SET
<flag>`.
