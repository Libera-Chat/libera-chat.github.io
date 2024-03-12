---
title: Disabling Matrix Portalling 
author: Allie
---

{::options parse_block_html="true" /}
>Update: We no longer have an official Matrix bridge. Please see our
>[FAQ about Matrix][matrixfaq] for more information about using Matrix on
>Libera.Chat.

Hello again, Libera.Chat users!

[Last month][prev], I wrote about the actions we were considering taking in
the wake of the issues with the Libera.Chat<>Matrix bridge.

We have been closely following the developments with the Matrix bridge since,
and we have come to the following decision:

**Libera.Chat will request that EMS disable Portalled channels, and that EMS
do this by 31st July 2023 but not before 25th July 2023.
If disabling Portalled Channels is not possible, Libera.Chat will ask that
EMS to disable the full Matrix bridge in the same timeframe.**

Switching to only plumbed channels has the effect of making the Matrix bridge
an opt-in decision for channel operators, as well as reducing the number of
Libera.Chat<>Matrix connection - both of these should improve the
IRC-side Matrix experience.

We will **not** be disabling plumbed channels: If your community relies on
the bridge to link your IRC and Matrix presences, we would recommend
you look into plumbing **now** if you have not already.
See [the Matrix documentation](https://matrix-org.github.io/matrix-appservice-irc/latest/irc_operators.html#portals-and-plumbed)
for the difference between portal and plumbed channels.

## Looking into the future: A new Matrix Channel Mode

We understand the impact that disabling portalled channels will have a
significant impact on some communities: Ideally, we would like to be able to
facilitate portalled access to Libera.Chat again.

To do this, we're exploring options to introduce a new channel mode which
would permit the Matrix bridge into to a channel.
We'll provide more information about this in time.

## Questions? Comments?

We understand that this is a disruptive change: As always,
Libera.Chat staff will be available in `#libera` and `#libera-matrix` to
offer assistance and discussion.

Thank you so much for your understanding,

Allie @ Libera.Chat

[prev]: https://libera.chat/news/matrix-irc-bridge-updates
[matrixfaq]: https://libera.chat/guides/matrix
