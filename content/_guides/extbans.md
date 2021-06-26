---
title: Extbans
category: chanop
credits: web7
---

Bans, quiets and invite and ban exemptions conventionally accept the format
`nick!user@host`. On Libera.Chat another syntax, known as "extban", is
accepted. These entries have the general format `$X` or `$X:data`. Optionally,
they can be negated with a tilde (`~`) before the character: for example,
`$~a` matches every user that is *not* identified to services.

## Available extban types

{%- include modetable.md modes=site.data.extbans -%}
