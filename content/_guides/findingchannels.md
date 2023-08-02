---
title: Finding Channels
category: using
weight: 40
---

## Finding Channels on Libera.Chat

Libera.Chat has thousands of channels. There are several ways to
search for them depending on your needs and preferences.
The following methods do not show all channels,
only those that have opted to be listed by having channel mode `s` unset
(which is set by default for new channels).

### Using Webchat

If you have an internet connection that's faster than 30 kbps
(but ideally at least 3 Mbps) and are using our KiwiIRC-based webchat at
[`web.libera.chat`](https://web.libera.chat), you can use the `/list` command.
This command has the network return a full list of channels and their
topics that you can then search through entirely within the client.

Other clients also support `/list`, but please read on for
[caveats](#using-other-irc-clients).

### Using `alis`

`alis` is a network service to search for channels server-side.
`alis` is invoked using `/msg alis list <pattern> [options]`.

`<pattern>` is matched on channel names.
For example, `/msg alis list #linux*` will list single-"#" channels whose
names begin with "linux". If the pattern does not contain any wildcards
nor begin with a "#", `alis` will implicitly surround the pattern with `*`s.

`[options]` is a space-separated list of options to refine the search,
each of which can only be used once.
For example, you can also search by the channel's current topic or
require a minimum number of users (to weed out barely-used channels).
`/msg alis list * -min 100 -topic social` would find channels whose
topic contains the word "social" and that have at least 100 users.

The options you can use after the initial pattern are:

- `-min <n>`: Show only channels with at least `<n>` users.
- `-max <n>`: Show only channels with no more than `<n>` users.
- `-skip <n>`: Skip the first `<n>` matches.
- `-show [m][t]`: Include the modes and/or topic setter in the output.
- `-mode <op><modes>`: Filter by channel modes depending on `<op>`:
  - `+`: Show only channels whose modes include `<modes>`.
  - `-`: Show only channels whose modes exclude `<modes>`.
  - `=`: Show only channels whose modes exactly match `<modes>`.
  - Note that this cannot be used to search by restricted modes such as `P`.
- `-topic <pattern>`: Show only channels whose topics contain `<pattern>`.

`alis` output is limited to 64 channels. You can skip the first 64 channels by
adding `-skip 64` to the argument list, then the next 64 by instead using
`-skip 128`, the next 64 with `-skip 192`, and so on.

### Using netsplit.de

A method of searching that does not require connecting to Libera.Chat is to
use [netsplit.de](https://netsplit.de/channels/?net=libera.chat).
netsplit.de is a third-party index of IRC networks and their channels.
It also maintains a record of topic changes and user counts.
For example, [here is their page about #libera][0].

[0]: https://netsplit.de/channels/details.php?room=%23libera&net=Libera.Chat

### Using other IRC clients

`LIST` is a standard IRC command and most clients allow you to use it by
typing `/list`. How long it takes to fully receive the output from `/list`
depends on the speed of your internet connection.
As with webchat, 3Mbps or faster is recommended to load the list quickly.

**There are some caveats to note before using this command:**

- Many clients just dump the output of `LIST` as messages in some buffer.
If you have a scrollback limit that's less than several tens of thousands of
lines, this may make `/list` effectively useless.
- Some clients may become unresponsive while receiving `LIST` output.

A common myth is that you can instantly disconnect yourself using `/list`
due to your client not keeping up with the output;
this is true for some IRC server software but is not the case on Libera.
