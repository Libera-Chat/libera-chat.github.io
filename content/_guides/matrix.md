---
title: Matrix FAQ
seo:
  type: FAQPage
---

- TOC
{:toc}

## Where's the official Matrix bridge?

As of 2023-08-05, the official Libera.Chat bridge operated by [Element Matrix
Services (EMS)](https://ems.element.io/) was taken down.

For more information, you can read [the post by EMS](https://matrix.org/blog/2023/08/libera-bridge-disabled/)
and [our retrospective](/news/matrix-bridge-disabled-retrospective).

## Is the official bridge coming back?

While we hoped that the shutdown would be temporary, EMS and The Matrix.org
Foundation have officially [decided to sunset the bridge](https://matrix.org/blog/2023/11/28/shutting-down-bridge-to-libera-chat).

## Can I still connect with Matrix?

Third-party operated Matrix bridges are still allowed on Libera.Chat. You will
only be able to connect to an IRC channel with Matrix if the channel has been
made accessible through a Matrix bridge.

Matrix instances and bridges come and go. We cannot commit to maintaining a
directory of Matrix bridges or instances.

Messages sent between IRC and Matrix may be received out of order, and the
order may vary by homeserver. This issue is due to the Matrix protocol's
message handling. This may affect time-critical responses or alter the meaning
of relayed information.

Libera.Chat prohibits double-bridging IRC to IRC through Matrix. We may also
request intervention if any bridged channels cause problems.

## Can I run my own Matrix bridge?

You can! Running a bridge can be a lot of work. Bear in mind that you become
responsible for moderation, so you will need to be responsive to reports about
people who misuse the bridge.

We **strongly** recommend preventing users from roaming around the IRC
network, also known as "portalling". Several of the problems with the official
Matrix bridge were due to -- or worsened by -- portalling. It is also much
more difficult to keep track of issues that need addressing with users so
spread out.

Different bridging software may use different terminology or have different
functionality. Regardless of the software, we recommend the following:

- Do choose a single IRC puppet instead of 1:1 bridging if possible,
especially if the channel is a matrix-first community
- Do allow bridging between **consenting** matrix rooms and IRC channels
- Do not allow your bridge to join users to IRC channels without consent from
channel owners
- Do not allow your bridge to direct message arbitrary IRC users

Also refer to our general [advice about bridges](https://libera.chat/guides/faq#are-bridges-allowed)
and the list of bridge software below.

## What bridge software is available for IRC?

If you would like to run your own bridge, you can use one of the following
options:

- [Heisenbridge](https://github.com/hifi/heisenbridge)
- [Matrix-appservice-irc](https://github.com/matrix-org/matrix-appservice-irc)
- [Matterbridge](https://github.com/42wim/matterbridge)
- [NexIRC](https://github.com/guideX/nexirc4)

You can also set up a personal bridge to join Matrix from your IRC client:

- [Matrix2051](https://github.com/progval/matrix2051)

This is not an exhaustive list.

## Why remove old IRC ghosts from a Matrix room?

Ghosts from the `libera.chat` homeserver are now orphaned. They have not been
functional since the bridge was shut off. They will not work in the future.

Due to how the Matrix protocol works these ghosts do not get cleaned up
organically due to being idle. They also give an illusion of presence.
Messages to them will not reach their intended recipient, resulting in
miscommunication.

Ghosts inflate and clutter up room user lists, and will be represented in
rooms or channels on other protocols if bridged to them, even though they are
no longer functional. This can also cause additional server load or connection
limit usage.

Because of this, we arranged to have all the IRC ghosts removed from the
`libera.chat` homeserver. They will no longer have membership in rooms that used
to bridge to Libera.Chat. More information about this process can be found
[on the Matrix.org blog](https://matrix.org/blog/2023/12/libera-chat-alias-cleanup/).

## How can I get support for Matrix?

If your question or problem is still unaddressed, you will need to seek
support from the Matrix community, or from EMS and The Matrix.org Foundation
directly.

To contact EMS, please refer to [their help page](https://element.io/help).

To contact The Matrix.org Foundation, please refer to [their contact page](https://matrix.org/contact/).

Key Matrix community support rooms are:

- `#matrix:matrix.org` is Matrix HQ, the main support room for Matrix.
- `#irc:matrix.org` is the support room for Matrix-appservice-irc

These rooms are the best place to ask about getting help for Matrix or IRC
bridging for Matrix.

There are also some community channels on Libera.Chat:

- `#matrix` is a support channel on Libera.Chat for the Matrix protocol.
- `#matrix-irc` is a support channel on Libera.Chat for Matrix-appservice-irc.

These IRC channels are run by EMS and sometimes have EMS or The Matrix.org
Foundation staff active. You will have better luck on Matrix itself in the
Matrix rooms specified above.
