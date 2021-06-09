---
title: Channel Modes
category: chanop
credits: web7
---

Channel modes and `ChanServ` flags are tools for configuring and managing
channels.

Channel modes are the most basic form of channel configuration. Modes can be
set using the IRC `/mode` command or, for some modes, via `ChanServ`.

The `ChanServ` channel service provides additional administration functions
for registered channels. It is complementary to modes. You can perform many of
the same functions manually, but using `ChanServ` to administer your channel
where applicable offers some benefits:

- It is always opped, so it can set and enforce IRC [channel
  modes](#channel-modes) on your behalf.
- It offers granular privileges through [user flags](#chanserv-user-flags),
  allowing you to delegate limited capabilities to other users. 
- It can maintain channel attributes and perform functions automatically
  through [control flags](#chanserv-control-flags).

## Channel modes

Channel modes control:

- Bans (`b`, `e`)
- Moderation (`m`, `n`, `q`, `u`, `v`, `z`)
- Forwarding (`f`, `F`)
- Channel visibility (`p`, `s`)
- Channel invitations (`g`, `i`, `I`)
- Channel access controls (`j`, `k`, `l`, `n`, `o`, `Q`, `r`, `S`)

### Requirements

- To use `/mode`, you must be a channel operator (`+o`).
- To use `ChanServ`, your channel must be registered and your privileges must
  allow you to take actions that set modes.

### Mode command summary

| Purpose                    |Command                    |
|----------------------------|---------------------------|
| List current channel modes | `/mode <channel>`         |
| Set a mode                 | `/mode <channel> +<mode>` |
| Unset a mode               | `/mode <channel> -<mode>` |

### Examples

To allow only operators to set the topic on `#foo`:

```irc
/mode #foo +t
```

To set a user `bar` as an operator on `#foo` using the user's cloaked
hostmask:

```irc
/mode #foo +o bar*!*@user/bar
```

### Preserving channel modes

By default, all channel modes are lost when a channel becomes empty. To
preserve modes, set the `ChanServ` `GUARD` [control
flag](#chanserv-control-flags): 

```irc
/msg ChanServ SET <channel> GUARD ON
```

`ChanServ` will join your channel and remain there, which ensures the channel
is never empty, which prevents the modes from being lost.

For more information, see `/msg ChanServ HELP SET GUARD`.

### Enforcing channel modes

`ChanServ` can help ensure modes are always set the way you want for your
channel ("come hell or high netsplit," to quote `jess`). If someone attempts
to change the channel modes, `ChanServ` will change them back. 

To set a mode `ChanServ` should enforce, set the `MLOCK` [control
flag](#chanserv-control-flags):

```irc
/msg ChanServ SET <channel> MLOCK <mode>
```

For example, to ensure setting the topic on `#foo` is always restricted to
operators:

```irc
/msg ChanServ SET #foo MLOCK +t
```

With this set, if someone were to attempt `/mode #foo -t`, `ChanServ` would
immediately revert the change with `/mode #foo +t`.

To list modes currently enforced by `ChanServ`:

```irc
/msg ChanServ INFO <channel>
```

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
users identified by nick or hostmask. 

User flags are similar to modes, but they control what users can do via
`ChanServ` rather than what they can do directly with the channel. Because
`ChanServ` is always opped, it can perform actions on behalf of users who are
not opped, according to privileges specified by their user flags.

ChanServ user flags control:

- Who can use `ChanServ` to moderate users (`v`, `o`, `b`, `r`, `e`, `f`)
- Who is voiced or opped automatically by `ChanServ` (`V`, `O`)
- Who can use `ChanServ` commands to manage the channel (`s`, `i`, `R`, `t`,
  `A`, `S`, `F`)

### Requirements

- Your channel must be registered.
- `ChanServ` must have joined your channel. See [preserving channel
  modes](#preserving-channel-modes).
- To set `ChanServ` user flags for users other than yourself, you must be
  flagged a founder (`+F`). 

### Command summary

| Purpose          | Command                                                  |
|------------------|----------------------------------------------------------|
| List user flags  | `/msg ChanServ FLAGS <channel> <nick\|hostmask>`         |
| Set user flags   | `/msg ChanServ FLAGS <channel> <nick\|hostmask> +<flags>`|
| Unset user flags | `/msg ChanServ FLAGS <channel> <nick\|hostmask> -<flags>`|

### Granting limited user privileges

User flags are useful for allowing users to take actions through `ChanServ`
without granting them full privileges on the channel itself. For example, you
might restrict topic changes on `#foo` to ops, but then allow non-op user
`bar` to ask `ChanServ` to set the topic: 

```irc
/mode #foo +t
/msg ChanServ FLAGS #foo bar*!*@user/bar +t
```

With these set, the non-op user `bar` _is not_ allowed set the topic on your
channel using the IRC `/topic` command but _is_ allowed to set the topic by
using the `ChanServ TOPIC` command:

```irc
/msg ChanServ TOPIC #foo <channel topic>
```

### More information

For a complete list of `ChanServ` user flags, see `/msg ChanServ HELP FLAGS`.

For more about managing a channel and user privileges with `ChanServ` , see
`/msg ChanServ HELP`.

## ChanServ control flags

`ChanServ` control flags set channel attributes and control the actions
`ChanServ` will take to help administer your channel on your behalf. They
apply to `ChanServ` itself. 

Control flags are useful for helping maintain control of your channel, even
when all other ops leave the channel. Functions include:

- Enforcing modes (`MLOCK`)
- Managing the topic (`TOPIC`, `TOPICLOCK`, `KEEPTOPIC`)
- Controlling access (`RESTRICTED`, `SECURE`)
- Automatically messaging users when they join (`ENTRYMSG`)

### Requirements

- Your channel must be registered.
- `ChanServ` must have joined your channel. See [preserving channel
  modes](#preserving-channel-modes).
- To set `ChanServ` control flags, you must be flagged a founder (`+F`).

### Command summary

| Purpose              | Command                                        |
|----------------------|------------------------------------------------|
| List control flags   | `/msg ChanServ INFO <channel>` (See "Flags")   |
| Set a control flag   | `/msg ChanServ SET <channel> +<flag> [option]` |
| Unset a control flag | `/msg ChanServ SET <channel> -<flag> [option]` |

### Setting channel info

`ChanServ` can set attributes that appear in `INFO`, including `URL`, `EMAIL`,
and metadata (`PROPERTY`). `ChanServ` can also hide info with `PRIVATE`.

### More information

For a complete list of control flags, see `/msg ChanServ HELP SET`. 

For details on an individual control flag, use `/msg ChanServ HELP SET
<flag>`.
