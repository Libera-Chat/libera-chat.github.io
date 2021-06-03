---
title: Channel Modes
category: chanop
credits: web7
---

Various modes can be set on channels. Use `/mode #channel` to list current
channel modes and `/msg chanserv info #channel` to list modes set with MLOCK.

All channel modes will be lost when a channel becomes empty. Enable GUARD to
preserve modes.

To set a mode, use `/mode #channel +(mode)` replacing `(mode)` with the letter
that corresponds to the mode. To unset a mode, use `/mode #channel -(mode)`

## Available channel modes

{% assign channel_modes = site.data.channelmodes | where_exp:"item","item.restricted != true" %}

{%- include modetable.md modes=channel_modes -%}

## Restricted channel modes

The following channel modes can only be added by Libera.Chat staff.

{% assign restricted_modes = site.data.channelmodes | where: 'restricted', true %}

{%- include modetable.md modes=restricted_modes -%}
