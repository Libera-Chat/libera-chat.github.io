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
