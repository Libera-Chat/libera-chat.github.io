---
title: IRCv3 Downgrades
author: Libera.Chat Staff
excerpt: Backporting IRCv3 `+typing` tags and more to older clients.
---

>Update: This was our April 1st 2026 prank.
>`CompatServ`/`pyrite` will be online for a few days following the publication
>date of this post, but we will not be forcing it on our users.
>If anyone would like to host it for their own channels,
>the source code can be found [here](https://github.com/Libera-Chat/pyrite).

Hello Libera.Chat users,

First off, we would like to thank the community for the warm reception our
[previous post](/news/new-and-upcoming-features-3) got.
We have seen some people express optimism for the future of IRC,
and it genuinely warms our hearts that we could contribute to that optimism.
We have big plans for Libera.Chat this year,
and we can't wait to be able to share them all with you in due time.

However, our recent feature rollout has been hampered by a major flaw in IRC:
client diversity. Clients are free to support or not support any set of IRCv3
features, which means that not everyone using Libera.Chat gets the same
experience. In particular, `+typing` tags are currently only supported by
eight IRC clients listed on [IRCv3.net](https://ircv3.net/software/clients):
[Goguma](https://codeberg.org/emersion/goguma),
[Halloy 2026.5+](https://halloy.chat/),
[IRCCloud](https://www.irccloud.com/),
[mIRC](https://www.mirc.com/),
[ObsidianIRC](https://github.com/ObsidianIRC/ObsidianIRC),
[PIRC.pl](https://github.com/pirc-pl/pirc-gateway),
[senpai](https://git.sr.ht/~delthas/senpai),
and [Weechat](https://weechat.org/).

We don't think that's fair.
We don't believe that users who are stuck using older software that isn't
necessarily chasing the latest trends should be excluded from the experience
of being surprised by shiny new features.
From its inception, Libera.Chat has been a next-generation IRC network,
but we pride ourselves on not leaving anyone behind.

To rectify this, we are currently testing a bot named `CompatServ`
(codenamed `pyrite` internally)
which downgrades IRCv3 `TAGMSG`s with attached `+typing` tags into
`NOTICE`s that have sensible behaviour on every IRC client written in the last
decade. If you would like to join us in testing it, we have a channel named
`#libera-pyrite` where you can send typing indicators and the bot should
downgrade them appropriately. We ask that you only test it using
`+typing` `TAGMSG`s sent from compliant implementations of
[the specification](https://ircv3.net/specs/client-tags/typing).
This will help us fine-tune any rate-limiting or batching that needs to be
configured in the production version.

We may use this bot for other IRCv3-related compatibility work. For example:

- Downgrading `INVITE` messages from `invite-notify` to `NOTICE`s.
- Sending its own typing messages to channels so that client authors can
  test their implementations.
- Sending `NOTICE`s whenever someone in a channel uses `/away`.
- Sending warnings when the `time` tag deviates from the bot's local time by
  more than one second.
- Echoing the original message referenced by a `+reply` tag,
  once those are supported by Libera.Chat.

In production, `CompatServ` will be joined to every channel.
It will bypass any channel modes that prevent it from sending `NOTICE`s,
so the only way to opt out will be to use `/ignore`.
We trust that this will not be an inconvenience. If you would like to
use `CompatServ` in your channels before the global rollout,
it can be `/invite`d like other Libera.Chat utility bots.

In the interest of staying organised, please direct all feedback and comments
about our plans for supporting legacy software to `#libera-pyrite`. Thank you.
