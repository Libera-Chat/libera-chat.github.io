---
title: Creating Channels
category: chanop
---

A person who joins an _empty_ and unregistered channel is granted
**temporary** Operator status. This does not guarantee their ownership of the
channel. They need to `REGISTER` the channel with `ChanServ` to gain ownership
of it.

This guide will help you prepare for and go through that process.

## Choosing the correct namespace

Before creating a new channel on Libera.Chat, please take a moment to read up
on [our namespaces policy](/chanreg) and ensure that your channel is named
appropriately from the beginning. This will avoid disruptions in the future.

## Be identified

To register and manage channels, you will need to be [identified to](registration#logging-in)
`NickServ`.

## Pick a name

Before you can register it, you'll obviously need to pick a channel name!
Think of one that is descriptive of the channel's purpose, and has no spaces
or commas. The name you choose will become what's called your namespace. You
can use some punctuation such as ".", "\_" or "+" instead of spaces, but it is
better to just drop the space.

It is typical to reserve `-` as a delimiter for additional channels within the
namespace, such as `-dev` or `-ops`. Using a `-` in the root name might result
in conflicting namespaces, and cause complications for you and others when
registering groups with Libera.Chat.

Once you've settled on the name, add the appropriate number of `#`'s to the
beginning, according to the rules in [our namespaces policy](/chanreg).

For example, if it is an official representation of your project and the
project is named "Awesome App", you can use one `#`. You'll probably go with
something like: `#AwesomeApp`

If it's not a "Project" or "Community" channel based on the definitions
described in [our namespaces policy](/chanreg) you'd go with two `#`. As an
example, it might be a channel for your friends to talk to you in, so you'd
probably pick something like `##YourNickname`

## Check that it is available

You can check that a channel is registered or not with `ChanServ`. To see if
for example `#libera` is registered, you would do:

```irc
/msg ChanServ INFO #libera
```

Since it is registered, ChanServ will tell you the registration details you're
allowed to see. Otherwise it would say:

```irc
ChanServ: #libera is not registered.
```

## Joining the channel

The next step of creating a channel is to `/join` it.

```irc
/join <#channelname>
```

If the channel you joined was empty and is unregistered, you will have the
temporary Operator status now. Depending on your client, you should appear in
the user list with an `@` or another symbol before your nick.

## Registering with `ChanServ`

Once you're sure you can register the channel, you can do so with:

```irc
/msg ChanServ REGISTER <#channelname>
```

Note: The registration will be case-sensitive, so take care if there are
branding rules you need to comply with.

Congratulations on your new Libera.Chat channel!

### Troubleshooting

If you do not get the Operator status on join, it could be because there are
people already in the channel. You will need to ask them to leave while you
set it up. If they do not cooperate, you will likely need to pick a new name.

If the channel is already registered but not in use, or there are no active
Operators, it may be subject to [expiry](/policies#channels), depending on the
type of namespace it belongs to. As part of the expiry process, staff will
take input from both you and any existing channel members.

If you are a representative of a project and you wish to use a channel that is
already registered, you can ask staff about a [group registration](chanreg).

If you are unsure of any of the above, talk with Libera.Chat staff. You can
find staff either in `#libera` or on `/stats p`.

Once you have resolved the conflict, you can resume
[the registration process](creatingchannels#registering-with-chanserv).

### Special Instructions for Group Contacts

Libera.Chat uses an Atheme feature called `ProjectServ` to track group
registrations. It shows some additional information in `NickServ` and allows
for convenient features such as `CLAIM` in `ChanServ`.

If you already have a group registration set up with us, and you are listed as
a Group Contact (GC) for the namespace you have chosen, it will be displayed
to you in your `NickServ` info. Look for a line like:

```irc
NickServ: Group contact for projectname (#projectname; projectname/*)
```

`CLAIM` will allow you to acquire a channel _within your namespace_ even if
that channel is already registered to someone else, without the need for staff
intervention. It can also be used for initial registration even if it is not
already taken.

```irc
09:23 -- ChanServ: ***** ChanServ Help *****
09:23 -- ChanServ:  
09:23 -- ChanServ: Help for CLAIM:
09:23 -- ChanServ:  
09:23 -- ChanServ: The CLAIM command allows you to take control of a channel
09:23 -- ChanServ: belonging to a project you are authorized to represent.
09:23 -- ChanServ:  
09:23 -- ChanServ: Syntax: CLAIM <#channel>                            
09:23 -- ChanServ:  
09:23 -- ChanServ: Examples:
09:23 -- ChanServ:     /msg ChanServ CLAIM #coolproject-dev            
09:23 -- ChanServ:  
09:23 -- ChanServ: ***** End of Help *****
```

Using `CLAIM` to grab a channel from someone else might be seen as hostile, or
it could confuse people, so it is a good idea to at least give some warning.
Try to ask for the cooperation of people who have already occupied or
registered a channel before taking it from them.

## Setting channel modes

Channels differ in what `cmodes` they need. Refer to
[the channel modes guide](channelmodes) for detailed information about them.

The default modes set on a new channel are `+Cnst`.

To set channel modes, you use `/mode <#channelname> [+|-]<mode>`.

For example, during a spambot attack you might choose to only allow users who
are [logged in](registration#logging_in) to join your channel. This is
effective as most bots do not log in to accounts. To set the requirement, you
would use the `r` mode.

To toggle `r` on, so only identified users can join:

```irc
/mode <#channelname> +r
```

To toggle `r` off, so everyone else can join again:

```irc
/mode <#channelname> -r
```

## Setting up permissions

Once you have your channel registered, and your users start dropping in, you
might also need to do some [channel management](catalyst) if some of them
outstay their welcome. If you enlist help for this, you will need to give your
new Operators permissions.

The permissions you can give are outlined in the output of
`/msg ChanServ HELP FLAGS`, along with instructions about the use of
`TEMPLATE` functionality.

**Be very careful who you grant the `F` flag to. They will have full
permissions on the channel and will be able to remove your own `F`.** The `f`
flag will allow them to assign permissions they already have and is thus a
safer option.

Unless the channel is assigned to a registered group you are listed as a Group
Contact (GC) of, you will not have
[GC permissions](creatingchannels#special-instructions-for-group-contacts) and
will not be able to get the channel back without their cooperation or by
[registering as a group](/chanreg)

## Other channel settings

There are various settings for `ChanServ` under `SET`. To see what's currently
available to you:

```irc
/msg ChanServ HELP SET
```

For example, if your channel is small and risks becoming empty due to daily
user fluctuations, or things like netsplits, you can enlist `ChanServ` to
`GUARD` it.

It is also a good idea to `MLOCK` channel modes to avoid losing them.
