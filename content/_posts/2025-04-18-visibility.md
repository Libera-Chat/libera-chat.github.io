---
title: Are your channels visible enough?
author: el
excerpt: How to ensure that channels which should be findable _are_ findable.
---

Hello!

When setting up Libera Chat, we made several decisions about defaults in the
interest of respecting privacy. One of these changes was setting
[channel mode][cmodes] `s` on [by default][defaultcmodes] for all new
channels. Having channel mode `s` set by default means that a channel is in
"secret mode" when it is first created, allowing founders to choose when and
if their channels are ready to be publicly promoted to other people. We
recognise that not all channels should be public, even in otherwise open and
transparent projects.

Naturally, there are consequences to a channel staying a secret. For example,
people will not find your project if they use standard
[channel search utilities][findingchannels] to look for topics. That means
that if your main channel is secret, your project could be missing out on
getting the attention of new users or contributors, and that is a shame.

We have noticed that a number of projects' main channels have not removed this
mode, or perhaps "temporarily" set it back on to avoid being discovered by
spam bots that we struggled with in the early months of the network. As we all
know, nothing is more permanent than a temporary fix. This brings us to the
purpose of this outreach: to encourage you to check that your channels are all
set up with the correct level of visibility. To make this process easy, we
have just rolled out some helpful features:

- Everyone has access to the new `LISTMODES` command. Using
  `/msg ChanServ LISTMODES` will provide an overview of the current modes and
  MLOCK for all channels that you have ChanServ privileges in.
- [Group Contacts][gcguide] will see a reminder of the secret status for all
  channels in their namespaces when using the existing
  `/msg ChanServ LISTGROUPCHANS` command. `(SECRET)` is now shown for
  channels with mode `s` set.
- Channel founders will now receive a notification at channel registration
  time that their new channel is currently in secret mode, and how they can
  change that.

Everyone can help with this, even without privileges in any channels. Most
clients let you check what modes a channel has set with `/mode`, for example
`/mode #libera`. Depending on your client and whether you are currently in the
channel, the modes will either be displayed in the channel itself, or in the
server window for the network, where the MOTD goes. *Politely* encouraging
the operators of your favorite project channels to check this post will help a
lot.

Once any misconfigured channels have been identified, disabling secret mode is
easy; simply `/mode #yourchannel -s`. If the mode change gets reverted, you
may also need to update the mode lock, which is configured using
`/msg ChanServ SET #channel MLOCK [new mode string]`.

We do understand that you may still have concerns about allowing your channels
to be visible again, which is why we have worked hard behind the scenes on a
variety of network-level abuse mitigation tools. Our ability to respond to
incidents has improved a lot since those exciting early months, and we believe
that the rewards of visibility now outweigh the risks.

[cmodes]: https://libera.chat/guides/channelmodes
[defaultcmodes]: https://libera.chat/guides/creatingchannels#setting-channel-modes
[findingchannels]: https://libera.chat/guides/findingchannels
[gcguide]: https://libera.chat/guides/groupcontacts
