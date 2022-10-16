---
title: Using Our Webchat
category: connecting
weight: 20
---

## What is a webchat?

Webchats are irc clients that are inside your web browser. They are useful
in situations where you cannot install apps on the computer you are using.

We host 2 webchat options for our users to connect to Libera.Chat with.

- [Our main webchat](https://web.libera.chat) is a Kiwiirc instance that we
host. Kiwiirc has lots of features.
- [Our lightweight webchat](https://web.libera.chat/gamja) is a Gamja
instance that we host. It is a more lightweight option.

Simply click through to the webchat, provide a nickname and you can connect
to the network.

If the name you choose is currently in use, the webchat will add some
numbers to the end of it.

You can leave the password field blank if you have not
[registered with network services](/guides/registration) yet.

You do not need to sign up for anything to connect to Libera.Chat using
the webchat. However, once connected, some things may require you to be
registered and logged in to the network services. These things include:

- Reserving a permanent nickname.
- Getting a `user/nickname` cloak to replace your ip address or hostname
in some situations.
- Joining or talking in certain channels.
- Some people block unregistered users from sending them private messages.

## Linking or Embedding

Embedding or linking to a webchat on your project or group's website can
encourage people to engage with your community and help it grow.

However, if you just link directly to our webchat, people may not know how to
find your channel and become lost on the network. Often people show up in the
main `#libera` channel asking specific questions about a project. It can be
discouraging to them when nobody there knows what they are talking about!

Crafting a URL that pre-fills the webchat form with your channel can prevent
your users getting lost on the way.

Use the instructions below, but replace `#libera` with your channel instead.
If you wish for your new visitors to have a different pre-filled nick then
you can replace `Guest` in the URLs with the prefix of your choice.

Keep in mind that webchat visitors frequently don’t have accounts.
Often it's their first time on IRC.
If your channel has set the `+r` mode, then they will not be able to join.
If the `+R` mode or `+q $~a` is used, then they will not be able to speak.
You may need to reconsider the use of these modes.
While it is a good idea to [advise users to register](/guides/registration),
if this is required it will discourage some users.
If you need to require registration to participate in the channel,
then channel mode `+R` is the least-discouraging way to do so.

### Kiwiirc

To make a link for your users to click on that pre-fills your channel, you
can simply add the channel name on the end of the Kiwiirc url.

The following pre-fills the `#libera` channel:

```html
https://web.libera.chat/#libera
```

The following pre-fills the channel and also the nick field with the provided
prefix followed by a random number.

```html
https://web.libera.chat/?nick=Guest?#libera
```

If you omit the `?` immediately after the prefix, it will not show a random
number in the pre-fill, but numbers will be added if the provided nick is
already connected.

You can also embed our Kiwiirc client with these fields pre-filled.

To only pre-fill only the channel name:

```html
<iframe src="https://web.libera.chat/#libera" style="border:0; width:100%; height:450px;"></iframe>
```

To pre-fill both the channel name and the nick prefix:

```html
<iframe src="https://web.libera.chat/?nick=Guest?#libera" style="border:0; width:100%; height:450px;"></iframe>
```

### Gamja

To make a link for your users to click on that pre-fills your channel, you
can simply add the channel name on the end of the Gamja url.

The following pre-fills the `#libera` channel:

```html
https://web.libera.chat/gamja/#libera
```

The following pre-fills the channel and the nickname. It does not append a
random number to the nickname at this point, but if they connect with a
nickname that is already in use, numbers will be appended.

```html
https://web.libera.chat/gamja/?nick=Guest#libera
```

You can also embed our Gamja client with these fields pre-filled.

To only pre-fill only the channel name:

```html
<iframe src="https://web.libera.chat/gamja/#libera" style="border:0; width:100%; height:450px;"></iframe>
```

To pre-fill both the channel name and the nickname:

```html
<iframe src="https://web.libera.chat/gamja/?nick=Guest#libera" style="border:0; width:100%; height:450px;"></iframe>
```

If a user connects with the pre-filled nick and someone else is already using
that nick, then numbers will be added at that point.
