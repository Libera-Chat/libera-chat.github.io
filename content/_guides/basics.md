---
title: Basics of IRC
category: about-irc
weight: 10
---

You are likely here because you want to know more about this "IRC" stuff
you've heard about. Someone might have sent you here to get you clued in, or
perhaps it popped up in search results and got your attention.

Welcome, friend. We are glad you found us, whatever the reason.

Hopefully this guide will help you understand what IRC is, and how to start
using it. We think you might like how it differs from other chat platforms.

While this will _not_ be a comprehensive guide on all the software available,
it will hopefully point you in the right direction.

## What is IRC?

IRC stands for Internet Relay Chat. It is a chat protocol.

It was invented in 1988 by Jarkko Oikarinen, of the University of Oulu in
Finland. It replaced a program called MUT (MultiUser Talk).

## How does IRC work?

There are 2 components to IRC.

**Clients** are apps that let you use IRC. They can be installed on many
different Operating Systems, or even run inside your web browser.

**Servers** are what the clients connect to. Libera Chat has a **network** of
servers. Don't worry though, you only need to know one address for the
network. That address is `irc.libera.chat`.

Networks like us use a Round Robin system to distribute users evenly between
servers. Having lots of servers provides redundancy, so one server being out
of order doesn't make the whole network stop.

IRC is usually cost-free to use, but sometimes you might need to buy a client
or pay a subscription fee for a client hosted by someone else.

## Choosing a client

To use IRC, first you need to choose a client. Clients vary a lot, but most
will have the same basic features, so don't worry about picking the wrong one.

You can read our guide [about clients](/guides/clients) to help you make your
decision, or you can use one of [our webchats](/guides/webchat) to avoid
installing anything just yet.

Our webchats are run by us. They are free to use, but we restrict them so they
only connect to `irc.libera.chat`. Because of this, they are a good place to
get started. You can graduate to a proper client once you've figured things
out, with help from people on the network.

## Connecting for the first time

Most clients will have some kind of intro or wizard to get you going. Look for
a preconfigured network called Libera or Libera Chat.

If there is no wizard, or the process is confusing, you will either need to
check out the client's website for some documentation about how to set it up,
or connect through the webchats first and find someone to help. There is
usually someone in `#libera` who can point you in the right direction.

## Talking

Just like in instant messengers, there will be a field in the app where you
will be able to type things. This is where you chat.

This chat field is also where you can do commands to the server or the client.
Commands start with a `/`.

Our website has several [guides](/guides) that will make use of this notation
when giving you instructions.

## Conversation windows

Conversations windows are also known as tabs or buffers. They behave similar
to how you might expect from other chat apps.

In most desktop clients, a list of conversations will be down the left-hand
side in a column. In phone apps, there might be a drawer widget you need to
pull out.

Selecting different items in this list will change what is shown in the main
section of the client, above the field you type chat and commands into.

The top one is probably the name of the network, for Libera Chat it is usually
`Libera`. When you are doing commands you don't want others to see, such as
registering an account, this is a safe place to type them.

Tabs starting with `#` are group chats, which are called `Channels`. On
desktop clients, a user membership list will probably show down the right-hand
side of the screen when you have these conversations selected. On phones the
membership list might be in another drawer widget.

Tabs underneath the channels are private conversations you have with people,
or bots, on the network. These are often referred to as "PMs" (Private
Messages) or "queries".

## Private conversations

You can often start private conversations with someone by double-clicking on
their name, also called a nickname or nick, in the membership list. If that
doesn't work you can achieve the same thing using the `/query` command. For
example, if you wanted to say "hi!" to the person with the nickname "John" you
would do:

```irc
/query john hi!
```

Some people don't like unsolicited private conversations, so only do this with
people you know from talking in channels after asking their permission.

## Services

Services are specialized bots that help the network run smoothly. They manage
users and channels, among other things.

Using services is how you [register a nickname](/guides/registration), and
[identify (log in)](/guides/registration#logging-in) when you return for
another IRC session in the future.

They're also how you [register channels](/guides/creatingchannels) if you ever
need to do that.

## Topics

In most IRC clients, a channel's topic description can be found at the top of
the screen. If you can't see all of it, you can have it displayed to you using
the `/topic` command.

You can find new channels [using a service](/guides/findingchannels) to search
by channel name or by topic description.

There are lots of different topics on any IRC network. On Libera Chat, most of
our channels are about freely-licensed software and collaborative projects.
Our [network policies](/policies) define what we want the network to be like.

## Channel roles

When you're in channels, you might notice that some people in the membership
list have symbols next to their nicknames. Most people will not have a role in
the channels.

The people with symbols have either the "operator" or "voiced" modes.
Operators are the people that run that specific channel. They do things like
change channel modes, curate the topic, manage channel access. They're also
responsible for moderating the chat, so sometimes they might silence people
individually or set the channel to moderated mode. When the channel is in
moderated mode, voiced users comments can still be seen. Often channels will
give voiced or operator modes to their helper bots.

## IRC commands cheat sheet

This is a very small sample of commands that you may find useful as you get
started learning IRC. In many clients, there might be buttons for these.

Command parts shown in `[]` are optional.

- `/join #libera`
  - Enter the channel `#libera`.
- `/part [#libera] [message]`
  - Exit the channel `#libera`.
  - If no channel is given, you will part the channel you type this into.
  - The optional message will be shown to only this channel on your departure.
- `/nick nickname`
  - Changes your nickname to the one you specify.
- `/msg nickname message`
  - Sends a private message to user "nickname" _without_ opening a new
    conversation window.
- `/query nickname [message]`
  - Open a conversation window with user "nickname", and optionally include a
    message.
  - The other user will _not_ know you did this until you send messages.
  - This is useful for ensuring your conversation goes to the correct place,
    such as when you're [registering](/guides/registration) with `NickServ`.
- `/me action`
  - Use this for emotes. It will appear something like `* Nickname action`.
- `/quit [message]`
  - Disconnects you from the network.
  - The optional message will be shown to every channel you are in.

Some commands will differ in implementation depending on your client. If the
following do not work as expected, see your client's website for documentation
or ask in their IRC channel. Many have [channels](/guides/findingchannels) on
Libera Chat.

- `/ignore nickname`
  - May stop you seeing the user talk. Useful if they are being a pest.
- `/unignore nickname`
  - May allow you to see the user again if you change your mind.
- `/ignores`
  - May list the current ignores you have set.

## Who runs Libera Chat?

The Libera Chat network is run by volunteers. You can usually
[find the volunteer staff](/guides/faq#how-to-find-libera-chat-staff) in
`#libera`, where their channel mode will highlight them in the channel
membership list.

You are invited to message any staff member _without_ asking permission first.

## More resources

If you get lost, you can always join `#libera` and ask questions. That is what
that channel is there for.

If you are unable to [connect to the network](/guides/connect) at all, you can
contact staff by email: <support@libera.chat>

There are many more resources available in the [guides section](/guides) of
our website. This includes a [FAQ](/guides/faq) that might help you with
troubleshooting problems you encounter.

If you want a more technical overview of IRC, some history of the protocol, or
info on future plans, we recommend [ircdocs.horse](https://ircdocs.horse) and
the [IRCv3 working group](https://ircv3.net/) websites.
