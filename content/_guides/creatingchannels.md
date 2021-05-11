---
title: Creating Channels
category: chanop
credits: web7
---

## Choosing the correct namespace

Before creating a new channel on Libera.Chat, please take a moment to read up
on [our namespaces policy](/chanreg) and ensure that your channel is named
appropriately from the beginning. This will avoid disruptions in the future.

## How to create a new channel

### Be identified

You must be registered and logged in to services to make channels. You can log
in by doing `/msg NickServ IDENTIFY YourNickname YourPassword`

### Joining the channel

The next step of creating a channel is to `/join` it.

Pick a channel name without spaces and add the appropriate number of `#`'s to
the beginning, according to [our namespaces policy](/chanreg).
Eg, `/join #awesomeprojectname` if it is for an official project channel
or a community channel about a project, or `/join ##yournickname-chats` for an
informal channel.

### Check that it is available

You can check that a channel is registered or not with
`/msg ChanServ info #wanted-channel-name`

If it is not registered ChanServ will tell you, otherwise it will show you
the public information for the existing channel.

The first person to join an unregistered channel is granted temporary operator
status. If the channel is empty and unregistered, you should have operator
status now. If not, you will need to talk to the people already in the
channel, or if there is nobody there with Libera.Chat staff either in
`#libera` or on `/stats p`.

If the channel is already registered and you are unable to claim it, you will
need to choose a different channel name.

### Registering the new channel

Once you're sure you can register the channel, you need to
`/msg ChanServ register #wanted-channel-name`

Congratulations on your new Libera.Chat channel.
