---
title: Choosing an IRC client
category: about-irc
weight: 30
---

One interacts with IRC through an IRC client.
There are many well-established IRC clients and countless more that exist
as hobbyist projects. This page exists as an opinionated list of clients
recommended by Libera.Chat staff for newcomers to IRC.
These are free, open-source, and have maintainers who can respond to
potential security issues.

Once you have chosen a client to use and have an
[account](/guides/registration), we recommend [setting up SASL](/guides/sasl)
to log in to your account, which is supported by every client recommended
below. If you're interested in ensuring the security of your
connection, please refer to our [connection guide](/guides/connect).

## Connecting without installing anything

If you cannot or do not wish to install a client on your computer, you can use
a web client.
We provide two web clients that are pre-configured to connect to Libera.Chat:

- [KiwiIRC](https://web.libera.chat), a featureful user-friendly web client.
- [gamja](https://web.libera.chat/gamja), a lightweight compact web client.

Using a web client tends to be less reliable than using native client on a
desktop or server. Many browsers like to stop web apps from running in the
background indefinitely, which means you may spuriously disconnect if you tab
away from the client.

You can also use IRCCloud's web client which partially mitigates this,
but be aware of [caveats](#irccloud).

## Bouncers

On most IRC networks — including Libera.Chat — your session is tied to
your connection to the server. Once you disconnect, your session ends,
and you miss out on any messages that were sent while you weren't connected.
Bouncers connect to IRC servers on your behalf and
keep your connection alive even when your client disconnects.
They incorporate some form of message playback to allow reconnecting clients
to catch up on missed messages. They are hosted on devices that have
stable internet connections, like VPSes or (sometimes) home computers.
While a bouncer isn't always necessary for a good user experience, it can be
helpful if you prefer to chat from a [mobile device](#mobile-clients).

Any well-made IRC client can work with any well-made bouncer,
but some clients integrate with specific bouncer software, most commonly with
[Soju](https://codeberg.org/emersion/soju).
Other clients have a bouncer-like component that is specifically designed
for them. The recommendations below will note when a client either benefits
from a particular bouncer or has an optional bouncer-like component.

## Desktop Clients

These are clients that are best-used on desktop operating systems
(Windows, macOS, etc). They have graphical user interfaces that are designed
to be navigated with your mouse cursor or touch.

- [Halloy](https://github.com/squidowl/halloy)
  - IRC client with first-class support for multiple views.
  - Runs on Windows, macOS, Linux.
  - Channel: `#halloy` on Libera.Chat
- [Konversation](https://konversation.kde.org)
  - User-friendly KDE IRC client.
  - Runs on Linux.
  - Channel: `#konversation` on Libera.Chat
- [KVIrc](https://www.kvirc.net)
  - Themeable IRC client with a custom scripting language.
  - Runs on Windows and macOS.
  - Channel: `#kvirc` on Libera.Chat
- [Quassel](https://quassel-irc.org)
  - IRC client designed around having a bouncer-like "core".
  - Runs on Windows, macOS, and Linux.
  - The core needs to be set up separately from the client.
    If you would prefer to avoid this, consider using a standalone
    "Mono" build of Quassel.
  - Other clients that can connect to a Quassel core exist,
    such as [Quasseldroid](https://quasseldroid.info/).
  - Channel: `#quassel` on Libera.Chat

## Mobile Clients

Using IRC on a mobile device tends to be less reliable than using it on a
desktop. Mobile operating systems like to stop applications from
running in the background indefinitely, which means you may spuriously
disconnect after switching applications.

At this time, there seems to be only one mobile client which meets the
prerequisites for recommendation.

- [goguma](https://codeberg.org/emersion/goguma#readme)
  - Simple user-friendly IRC client.
  - Available on:
    - [F-Droid][goguma-fdroid]
    - [Google Play Store (Unofficial)][goguma-google]
    - [Apple App Store (Unofficial, Paid)][goguma-apple]
  - Integrates with Soju.
  - Channel: `#goguma` on Libera.Chat.

[goguma-fdroid]: https://f-droid.org/packages/fr.emersion.goguma/
[goguma-google]: https://play.google.com/store/apps/details?id=fr.emersion.goguma.play
[goguma-apple]: https://apps.apple.com/us/app/goguma-irc/id6470394620

## Terminal Clients

Terminal clients, as the name suggests, run in a terminal emulator. They are
typically navigated using the keyboard exclusively, though some have mouse
support. Terminal clients can be run on servers and used remotely thanks to
[terminal multiplexers](https://en.wikipedia.org/wiki/Terminal_multiplexer),
thus reducing the need for a bouncer. However, they tend to have significant
learning curves and can be cumbersome to use on mobile devices.

Note that unless otherwise noted, the following options only support
xterm-like terminals. If in doubt, your terminal emulator probably is
xterm-like unless it's Windows Console. If you are on Windows, consider using
[Windows Terminal](https://github.com/microsoft/terminal)
or running these clients under
[WSL](https://learn.microsoft.com/en-us/windows/wsl/install).

- [glirc](https://hackage.haskell.org/package/glirc#readme)
  - An IRC client designed for efficient display of information.
  - Runs on macOS and Linux.
  - No persistent state.
    All settings changes require editing its runtime-reloadable config file.
  - Channel: `#glirc` on Libera.Chat
- [Irssi](https://irssi.org)
  - Robust chat client with an extensive Perl scripting API.
  - Runs on Windows, macOS, Linux, and FreeBSD.
  - Channel: `#irssi` on Libera.Chat
- [senpai](https://git.sr.ht/~delthas/senpai)
  - Simple, user-friendly IRC client.
  - Runs on Windows, macOS, Linux, and FreeBSD.
  - Integrates with Soju.
  - Channel: `#senpai` on Libera.Chat
- [WeeChat](https://weechat.org)
  - Highly modular chat client (not to be confused with WeChat).
  - Runs on Windows, macOS, Linux, and FreeBSD.
  - Can be run in a bouncer-like [relay mode][weechat-relay].
    Other clients for this relay mode exist, such as the
    [Glowing Bear][weechat-gb] web client and
    [weechat-android][weechat-android].
  - Can integrate with Soju via [a script][weechat-soju].
  - Channel: `#weechat` on Libera.Chat

[weechat-relay]: https://weechat.org/files/doc/stable/weechat_user.en.html#relay
[weechat-gb]: https://glowing-bear.org
[weechat-android]: https://github.com/ubergeek42/weechat-android#weechat-android-relay-client
[weechat-soju]: https://weechat.org/scripts/source/soju.py.html/

## IRCCloud

[IRCCloud](https://irccloud.com) essentially provides bouncers as a service,
though their server software is closed-source at the time of writing.
It is fairly popular as it serves as a convenient and possibly cheaper
alternative to setting up a bouncer yourself on a VPS.
In addition to its webchat, it also has apps for
[Android](https://play.google.com/store/apps/details?id=com.irccloud.android&hl=en_US)
and [iOS](https://apps.apple.com/us/app/irccloud/id672699103).

IRCCloud has a limited free plan. While on the free plan, you may be required
to have a [Libera.Chat account](/guides/registration) to connect or
join some channels. IRCCloud will also disconnect you if you are inactive for
more than a couple of hours on the free plan. Finally,
[using a traditional IRC client with IRCCloud][irccloud-bnc] is limited
to paying users. Free users will typically use one of the apps or the webchat.
IRCCloud has [a WebSocket API][irccloud-api] for the technically adventurous,
but [it is not currently stable][irccloud-warn].

[irccloud-bnc]: https://blog.irccloud.com/bouncer/
[irccloud-api]: https://github.com/irccloud/irccloud-tools/wiki#official-api-docs
[irccloud-warn]: https://github.com/irccloud/irccloud-tools/wiki/API-Overview#important-note

## Other Clients

In order to be recommended on this page, clients must:

- Be free/open-source software.
- Either have binaries available or a simple documented build process.
- Support TLS 1.2 or later.
- Support SASL PLAIN.
- Support the `server-time` IRCv3 capability.
- Support conventional `/`-style commands
- Not _require_ users to set up a server component.
- Have maintainers who can respond to security issues in a timely manner.

There are many clients that don't meet these criteria,
or do meet these criteria but cannot be recommended for other reasons.
For a more complete list of IRCv3 clients, please see
[the IRCv3 client support table](https://ircv3.net/software/clients).
Information on the SASL mechanisms supported by each client
can be found [here](https://ircv3.net/docs/sasl-mechs).
