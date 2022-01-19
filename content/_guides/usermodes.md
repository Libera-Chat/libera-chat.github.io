---
title: User Modes
category: using
credits: web7
weight: 60
---

Various modes can be set on users. Some of them can be set by the users,
others are set by the network. You can list your current user modes with the
`/mode yourname` command.

For those that can be set by users, `/mode yourname +<mode>` will work. For
example to set the mode that subscribes you to announcements (also called
wallops):

```irc
/mode yourname +w
```

Keep in mind that all user modes are per session, so you have to set them
again every time you connect—most clients can automate this for you.

## Available user modes

{%- include modetable.md modes=site.data.usermodes -%}

By default, user mode +Z (connected securely using TLS) is set only if you are
using a secure connection, and it cannot be unset during the session. User
mode `+i` (invisible) and `+w` (see wallops) are also set by default,
and can be unset. Other user modes can be set, but are disabled by default.
