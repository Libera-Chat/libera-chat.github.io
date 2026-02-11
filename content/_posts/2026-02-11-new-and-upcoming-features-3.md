---
title: New And Upcoming IRCv3 Features
author: She
excerpt: Adding `message-tags`, `batch`, `msgid`, and `invite-notify`.
---

It's been a while since we've had new features to announce,
but this set of features is particularly special, as it brings Libera.Chat
closer to the forefront of IRC development.
To check whether your IRC client supports these features,
refer either to your client's documentation or to
[this IRCv3 client support table](https://ircv3.net/software/clients).

## `message-tags`

Solanum, the IRC server software Libera.Chat uses, has supported tagged
messages going to/from clients for years, but only recently gained the
ability to send messages containing tags between servers.
This is one of the core features of IRCv3, and we're excited to be able to
support it properly. In particular, not having this feature was a blocker
for the following features we now also support:

### `msgid`

If your client requests the `message-tags` capability,
each message you receive will be tagged with a [unique identifier][msgid].
This makes it possible for clients to unambiguously reference messages.
Note that Libera.Chat's message IDs are not cryptographic signatures of the
messages they are attached to. As a result, they cannot be used on their own
to validate messages.

[msgid]: https://ircv3.net/specs/extensions/message-ids

### `server-time`

Libera.Chat supported [`server-time`][server-time] before today, but it was
of limited use because the timestamp would reflect when the message was sent
to you by the server you're connected to. Now, the timestamp will reflect
when the message was processed by the server its sender is connected to.
Aside from greatly improving message order consistency between clients,
this has the potential to revolutionise the popular IRC game of duck hunt
by reducing the advantage provided by the long-standing
"connect to the same server as the duck hunt bot" meta.

[server-time]: https://ircv3.net/specs/extensions/server-time

### Client Tags

Client tags are a way for clients to attach additional information to
messages or even send all-new kinds of messages without the server having
to understand them. They can be thought of as an IRCv3 successor to CTCP.

Libera.Chat allows client tags on a case-by-case basis and
validates their values to prevent deviation from their specifications.
Currently, Libera.Chat supports just the [`+typing`][typing] tag
which allows clients to send optional typing notifications. We are also
considering allowing the following tags when client support for them improves:

- [`+draft/channel-context`][channel-context]
- [`+draft/react`][react]
- [`+draft/reply`][reply]
- [`+draft/unreact`][unreact]

Please let us know if there are any other client tags that you would like
Libera.Chat to support.

[channel-context]: https://ircv3.net/specs/client-tags/channel-context
[react]: https://ircv3.net/specs/client-tags/react
[reply]: https://ircv3.net/specs/client-tags/reply
[typing]: https://ircv3.net/specs/client-tags/typing
[unreact]: https://github.com/ircv3/ircv3-specifications/pull/568

## `batch`

`batch` allows servers to create logical groups of messages. Right now,
the main use for this feature is nicer handling of netsplits and netjoins.
If your client requests this capability, `QUIT`s and `JOIN`s that
happen as a result of changes in server-to-server connections will be grouped
into a batch. This makes it possible to differentiate between
mass `JOIN`s due to a server reconnecting and other forms of mass `JOIN`s,
which in turn makes it possible for your client to handle a netjoin the same
way it handles a netsplit.

## `invite-notify`

It's [finally][2022-11-mgm] here. If your client requests the `invite-notify`
capability, you will be informed whenever someone is `/invite`d to a channel
you're in. If you're a channel operator, this means you can keep channel mode
`+g` on and not worry that invites are being abused behind your back.

[2022-11-mgm]: https://libera.chat/minutes/2022-11-25-public#should-we-enable-invite-notify

## `echo-message` for services

This is more of a bugfix than a feature.
If your client requests `echo-message`, it will now correctly receive
echo messages when sending messages to services (e.g. NickServ, alis).

## What's Next?

While we don't want to promise anything that isn't nearly ready for
deployment, here are a few notable IRCv3 extensions that staff have
at least some interest in implementing, in descending order of likelihood to
be supported by Libera.Chat in the near future:

The [`draft/multiline`][multiline] batch type makes it possible for clients
to logically group messages together into a single long (possibly multi-line)
message. The module that implements it requires further testing, but support
for this could potentially be deployed soon.

[`labeled-response`][labeled-response] makes it much easier for clients to
always associate particular automatic replies from the server with
particular requests. Eventual support for this extension was a big part of the
motivation for adding `batch` support now. However, there's still more
development work that needs to be done before we can support this feature.

[**Bot mode**][bot-mode] would be nice to have in principle, but there remain
some challenges to resolve around integration with services and getting bots
to use it. Further internal staff discussion is needed.

[`setname`][setname] would also be nice to have, but we would need to develop
a way to prevent one-to-one bridges from using the command. Otherwise, users
would be able to override realnames set by bridge, which should include
information about the remote user's account [per our guidelines][bridge-faq].
Additionally, the fallback behaviour has the potential of being quite noisy,
and several notable clients (e.g. ZNC as a client) do not support it.
Once client support improves, staff may consider adding support for it once
we figure out how best to implement the restrictions on bridges.

[bridge-faq]: https://libera.chat/guides/faq#are-bridges-allowed
[bot-mode]: https://ircv3.net/specs/extensions/bot-mode
[labeled-response]: https://ircv3.net/specs/extensions/labeled-response
[multiline]: https://ircv3.net/specs/extensions/multiline
[setname]: https://ircv3.net/specs/extensions/setname
