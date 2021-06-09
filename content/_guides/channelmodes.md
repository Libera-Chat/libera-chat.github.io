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
attributes on a channel. Modes are set using the IRC `/mode` command, and they
apply directly to the channel.

Channel modes control:

- Bans (`b`, `e`)
- Moderation (`m`, `n`, `q`, `u`, `v`, `z`)
- Forwarding (`f`, `F`)
- Channel visibility (`p`, `s`)
- Channel access controls (`g`, `i`, `I`, `j`, `k`, `l`, `n`, `o`, `Q`, `r`,
  `S`)

### Requirements

To set modes, you must be a channel operator (`+o`).

### Listing current channel modes

To list current channel modes:

`/mode <channel>`

### Setting and unsetting channel modes

To set a mode:

`/mode <channel> +<mode>`

To unset a mode:

`/mode <channel> -<mode>`

### Example

To set a user `bar` as an operator on `#foo` using the user's cloaked
hostmask:

`/mode #foo +o bar*!*@user/bar`

### Enforcing channel modes

`ChanServ` can help ensure desired modes are always set or unset for your
channel, using the `MLOCK` [control flag](#chanserv-control-flags). If someone
attempts to change the channel modes, `ChanServ` can change them back. 

For example, to ensure that setting the topic on `#foo` is always restricted
to operators:

`/msg ChanServ SET #foo MLOCK +t`

With this set, if someone were to attempt `/mode #foo -t`, `ChanServ` would
immediately revert it with `/mode #foo +t`.

To see the modes that are currently enforced by `ChanServ`:

`/msg ChanServ INFO <channel>`

### Preserving channel modes

By default, all channel modes are lost when a channel becomes empty. To
preserve modes, set the `ChanServ` `GUARD` [control
flag](#chanserv-control-flags): 

`/msg ChanServ SET <channel> GUARD ON`

`ChanServ` will join your channel and remain there, ensuring the channel is
never empty and preventing the modes from being lost.

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

`ChanServ` user flags grant privileges for `ChanServ` functions. They apply to
users identified by nick, `NickServ` group name, or hostmask. 

User flags are similar to modes, but they control what users can do via
`ChanServ` rather than what they can do directly with the channel. Because
`ChanServ` is always opped, it can perform actions on behalf of users who are
not opped, according to privileges specified by their user flags.

ChanServ user flags control the following:

- Who can use `ChanServ` to moderate users (`v`, `o`, `b`, `r`, `e`, `f`)
- Who is set `+v` or `+o` automatically by `ChanServ` (`V`, `O`)
- Who can use `ChanServ` commands to manage the channel (`s`, `i`, `R`, `t`,
  `A`, `S`, `F`)

### Requirements

To set `ChanServ` user flags for users other than yourself, you must be
flagged a founder (`+F`). 

`ChanServ` must be joined to your channel; see `/msg ChanServ HELP SET GUARD`.

### Listing user flags

To see the flags set for a user:

`/msg ChanServ FLAGS <channel> <user|nick|hostmask>`

### Setting or unsetting user flags

To set user flags:

`/msg ChanServ FLAGS <channel> <nick|group|hostmask> +<flags>`

To unset user flags:

`/msg ChanServ FLAGS <channel> <nick|group|hostmask> -<flags>`

### Granting limited user privileges

User flags are useful for allowing users to take actions through `ChanServ`
without granting them full privileges on the channel itself. For example, you
might restrict topic changes on `#foo` to ops, but then allow non-op user
`bar` to ask `ChanServ` to set the topic: 

```
/mode #foo +t
/msg ChanServ FLAGS #foo bar*!*@user/bar +t
```

With these set, the non-op user `bar` _is not_ allowed set the topic on your
channel using the IRC `/topic` command, but _is_ allowed to set the topic by
using the `ChanServ TOPIC` command:

`/msg ChanServ TOPIC #foo <channel topic>`

### More information

For a complete list of `ChanServ` user flags, see `/msg ChanServ HELP FLAGS`.

For more about managing a channel with `ChanServ` , see `/msg ChanServ HELP`.

## ChanServ control flags

`ChanServ` control flags set the actions `ChanServ` will take to help
administer your channel on your behalf. They apply to `ChanServ` itself. 

Control flags are useful for helping maintain control of your channel, even
when all other ops leave the channel. Functions include:

- Enforcing modes (`MLOCK`)
- Managing the topic (`TOPIC`, `TOPICLOCK`, `KEEPTOPIC`)
- Managing access control lists (`RESTRICTED`, etc.)
- Automatically posting messages to users when they join (`ENTRYMSG`)

### Requirements

To set `ChanServ` control flags, you must be flagged a founder (`+F`).

`ChanServ` must be joined to your channel; see `/msg ChanServ HELP SET GUARD`.

### Listing control flags

To list control flags currently set on a channel, see `Flags` in the channel's
`INFO`:

`/msg ChanServ INFO <channel>`

### Setting or unsetting control flags

To set a control flag:

`/msg ChanServ SET <channel> +<flag> [option]`

To unset a control flag:

`/msg ChanServ SET <channel> -<flag> [option]`

### Setting channel info

`ChanServ` can also set attributes that appear in `INFO`, including `URL` and
`EMAIL`, or hide them with `PRIVATE`.

### More information

For a complete list of control flags that can be set in `ChanServ`, see `/msg
ChanServ HELP SET`. 

For details on an individual control flag, use `/msg ChanServ HELP SET
<flag>`.
