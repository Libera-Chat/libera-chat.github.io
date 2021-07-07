---
title: Network bots
category: chanop
---

We run various IRC bots, some of them have a public facing usage. Any requests
or questions about our utility bots can be asked in `#libera-bots`.

## ozone

ozone is anti spam bot which kills and klines spammers. ozone is an instance
of [Sigyn](https://github.com/Libera-Chat/Sigyn).

When your channel is being targeted by spam bots, you can `/invite ozone`
**If you run some bots, you should voice them** otherwise ozone could ban them
if they are too verbose.

If it bans a legit user, op yourself on your channel
`/msg chanserv op $channel` and ask ozone to unkline the user
`/msg ozone unkline $nick`

If you want ozone to stay permanently on your channel, contact us.
ozone may require a minimum numbers of users on the channel before joining,
this varies over time. ozone may also enter a channel on its own if it
believes that the channel is under attack. If you wish to get rid of the bot
again, you can kick it and it won't come back.

## litharge

Litharge is a channel bans and quiets management bot. It is an instance of
[ChanTracker](https://github.com/ncoevoet/ChanTracker). It keeps a record of
channel mode changes and allows management of them over time. It stores
affected users, allows deep searching of mode changes, reviewing active modes,
editing duration of mode changes, and marking and annotation of them.

When requesting litharge for your channel, simply `/invite litharge #yourchannel`.

### Usage

Once litharge has joined your channel, place a new ban/quiet: 
litharge will recognize you as a channel operator.

```irc
/msg litharge list chantracker
/msg litharge help <command>
```

After you quiet/ban (ie: a "mode change") the offending user, you need to
set the mode change expiration and document with litharge.

You will receive a PM from litharge asking you to document the mode change.
Follow the instructions.

```irc
<litharge> For [#1238 +b *!*@255.255.255.255 in #example - 1 user(s)] type <duration> <reason>, you have 5 minutes
```

You can search inside the ban database, for expired or active elements

```irc
/msg litharge query *!*@255.255.255.255
```

If you do not reply within 5 minutes, you can view all pending mode changes
(ie: view all mode changes that have not been marked or edited yet) and
document them by doing the following:

```irc
/msg litharge pending #example --oper <yournick>
```

Change the mode change expiration from the default (if one has been chosen):

```irc
/msg litharge edit 1238 6d
/msg litharge mark 1238 continuing to troll
```

Or, you can combine the edit and mark commands, or edit and mark multiples
elements in a row:

```irc
/msg litharge editandmark 1553 30d came back to troll from this hostmask in other chans
/msg litharge mark 1238, 1112, 938 same user
/msg litharge edit 1238, 1112, 938 1w
```

You can also get info about a ban/quiet:

```irc
/msg litharge info 1238
```

If you want to check the results of a mode change before it's placed, and
which bans would affect a given user (assuming the bot shares a channel
with the user):

```irc
/msg litharge check #example *!*@*.com
```

That will show all users with `.com` in their hostmask being affected by any
intended mode change.
