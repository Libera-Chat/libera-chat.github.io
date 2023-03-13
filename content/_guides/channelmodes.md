---
title: Channel Modes
category: chanop
credits: web7
weight: 20
---

Various modes can be set on channels. Use `/mode #channel` to list current
channel modes and `/msg chanserv info #channel` to list modes set with MLOCK.

All channel modes will be lost when a channel becomes empty. Enable GUARD to
preserve modes.

To set a mode, use `/mode #channel +(mode)` replacing `(mode)` with the letter
that corresponds to the mode. To unset a mode, use `/mode #channel -(mode)`

## Available channel modes

<!-- markdownlint-disable MD013 -->
{% assign channel_modes = site.data.channelmodes | where_exp:"item","item.restricted != true" %}
<!-- markdownlint-enable MD013 -->

{%- include modetable.md modes=channel_modes -%}

## Restricted channel modes

The following channel modes can only be added by Libera.Chat staff.

<!-- markdownlint-disable MD013 -->
{% assign restricted_modes = site.data.channelmodes | where: 'restricted', true %}
<!-- markdownlint-enable MD013 -->

{%- include modetable.md modes=restricted_modes -%}

## Masks

`+b`, `+e`, `+I`, and `+q` all take a mask to determine which users to match.

The common form of a mask is `nick!user@host`. The wildcards `*` and `?` are
allowed, matching zero-or-more and exactly-one characters, respectively. Bans
set on IP addresses will apply even if the affected user joins with a resolved
hostname, but will not apply if the user has a cloak.
[CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)
is supported in bans.

The second form, called extbans, can be used for bans based on user data.
These entries have the general format `$X` or `$X:data`. Optionally, they can
be negated with a tilde (`~`) before the character: for example, `$~a` matches
every user that is *not* identified to services.

## Available extban types

{%- include modetable.md modes=site.data.extbans -%}
