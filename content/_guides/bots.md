---
title: Network bots
category: chanop
---

We runs various irc bots, some of them have a public facing usage.
Any request or questions about our utility bots can be asked in #libera-bots

## ozone

When your channel is being targeted by spam bots, you can `/invite ozone`
**If you run some bots, you should voice them** otherwise ozone could ban them if they are too verbose.

If it bans a legit user, op yourself on your channel `/msg chanserv op $channel` and ask ozone to unkline the  user `/msg ozone unkline $nick`

If you want ozone to stay permanently on your channel, contact us.
ozone may requires a minimum numbers of users on the channel before joining, this varies over time.
ozone may also enter a channel on it's own if it believes that the channel is under attack.
If you wish to get rid of the bot again, you can kick it and it won't come back.

## litharge

A channel bans/quiets management bot (an instance of [ChanTracker](https://github.com/ncoevoet/ChanTracker))
It keeps records of channel mode changes and permits management of them over time. 
It stores affected users, enabling deep searching through them, reviewing actives, editing duration, marking/annotating them.

When requesting litharge for your channel, **contact us** in `#libera-bots` with the following informations:
- do you have an -ops channel or a channel where the bot should announce bans/quiets changes
- do you want the bans/quiets to be removed after a given period if no duration given by the operator?
- ensure `/msg ChanServ flags #example litharge +o` is in place

To create an account on litharge `/msg litharge hello`
This only works if you are identified to services `/msg NickServ help register` or `/msg NickServ help identify`

### usage

At any time, once registered on the bot you can seek for online help

    /msg litharge list chantracker
    /msg litharge help <command>

After you quiet/kick/ban (ie: a "mode change") the offending user, you need to set the mode change expiration and document with litharge.

You will receive a PM from litharge asking you to document the mode change. Follow the instructions.

    <litharge> For [#1238 +b *!*@255.255.255.255 in #example - 1 user(s)] type <duration> <reason>, you have 5 minutes

You can search inside the ban database, for expired or active elements

    /msg litharge query *!*@255.255.255.255 

If you do not reply within 5 minutes, you can view all pending mode changes (ie: view all mode changes that have not been marked or edited yet) and document them by doing the following: 

    /msg litharge pending #example --oper <yournick>

Change the mode change expiration from the default (if one has been chosen):
 
    /msg litharge edit 1238 6d
    /msg litharge mark 1238 continuing to troll

Or, you can combine the edit and mark commands, or edit and mark multiples elements in a row: 

    /msg litharge editandmark 1553 30d came back to troll from this hostmask in other chans
    /msg litharge mark 1238, 1112, 938 same user
    /msg litharge edit 1238, 1112, 938 1w
    
You can also get info about a ban/quiet

    /msg litharge info 1238

you want to check the results of a mode change before it's placed, and which bans would affect a given user (assuming the bot shares a channel with the user): 

    /msg litharge check #example *!*@*.com

That will show all users with `.com` in their hostmask being affected by any intended mode change 
