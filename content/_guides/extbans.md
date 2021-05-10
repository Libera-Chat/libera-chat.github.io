---
title: Extbans
category: chanop
---

Bans, quiets and invite and ban exemptions conventionally accept the format
`nick!user@host`. On Libera.Chat another syntax, known as "extban", is
accepted. These entries have the general format `$X` or `$X:data`. Optionally,
they can be negated with a tilde (`~`) before the character: for example,
`$~a` matches every user that is *not* identified to services.


## Available extban types

{::nomarkdown}<div class="table">{:/}

| Type (name) | Description |
| ----------- | ----------- |
| $a<br>(account name) | Match users identified to the account specified in the parameter. Accepts wildcards; an empty $a matches any logged-in user. |
| $j<br>(cannot join other channel) | Takes an exact channel name (no wildcards or globbing) as its parameter and matches any user who is banned from that channel. Due to caching by the server, a change to the target channel's ban list may not immediately affect a user's ability to send to the channel using $j. |
| $r<br>(ircname) | Matches on a client's ircname, or gecos. The parameter accepts wildcards. For example: `/mode #channel +b $r:Foo*` will ban any user whose gecos begins with "Foo". |
| $x<br>(full match) | Takes a parameter that is matched against a client's full nick!username@host#gecos. The parameter accepts wildcards. For example, `/mode #channel +b $x:*#Foo*` will ban any user whose gecos begins with Foo, or whose gecos contains "#Foo". |
| $z<br>(connected securely) | Accepts no parameters. Matches users who are connected via SSL/TLS. |

{::nomarkdown}</div>{:/}
