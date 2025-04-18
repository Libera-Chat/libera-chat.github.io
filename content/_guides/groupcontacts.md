---
title: Managing Groups
category: chanop 
weight: 45
---

Groups are projects and communities that have done the
[group registration process](/chanreg).

Libera.Chat uses an Atheme feature called `ProjectServ` to track group
registrations. It shows some additional information and provides convenient
features in `NickServ` and `ChanServ`.

Please note that this process is completely separate from
[channel registration](/guides/creatingchannels). You do _not_ need a group
registration to create channels. The features in this guide are only available
for channels that are managed by a registered group.

## Check if a channel is managed by a group

You can tell if a channel is part of a namespace by looking at the `INFO`
output from `ChanServ`.

For example, `/msg ChanServ INFO #libera` shows:

```irc
ChanServ: The #libera namespace is registered to the libera.chat project
```

## Check if you are a Group Contact

If you already have a group registration set up with us, and you are listed as
a Group Contact (GC) for the namespace you have chosen, it will be displayed
to you if you do `/msg NickServ INFO`. Look for a line like:

```irc
NickServ: Group contact for projectname (#projectname; projectname/*)
```

## Check what channels the group manages

GCs can audit the channels registered within their namespace with `ChanServ`.
The `LISTGROUPCHANS` command will output a list of every channel registered in
their namespace.

```irc
-- ChanServ: ***** ChanServ Help *****
-- ChanServ:
-- ChanServ: Help for LISTGROUPCHANS:
-- ChanServ:
-- ChanServ: The LISTGROUPCHANS command shows registered channels which belong
-- ChanServ: to a namespace that you are a group contact for. If a filter is given,
-- ChanServ: only shows the channels which match the filter. Otherwise, all channels
-- ChanServ: in your namespaces are reported.
-- ChanServ:
-- ChanServ: Syntax: LISTGROUPCHANS [filter]
-- ChanServ:
-- ChanServ: Examples:
-- ChanServ:     /msg ChanServ LISTGROUPCHANS
-- ChanServ:     /msg ChanServ LISTGROUPCHANS #coolproject-*
-- ChanServ:
-- ChanServ: ***** End of Help *****
```

Channels which are displayed with `(SECRET)` have the `s`
[channel mode](/guides/creatingchannels#setting-channel-modes) set to on.

`CLAIM` can be used for any channels that should not be there.

## Managing group cloaks

`NickServ` can be queried by GCs for a list of every cloak that has been
assigned for their project or community through the `LISTGROUPCLOAKS` command.

```irc
-- NickServ: ***** NickServ Help *****
-- NickServ:
-- NickServ: Help for LISTGROUPCLOAKS:
-- NickServ:
-- NickServ: The LISTGROUPCLOAKS command shows accounts who are assigned a cloak belonging
-- NickServ: to one of the cloak namespaces you are a group contact for.
-- NickServ: If a filter is given, only shows accounts which match the filter.
-- NickServ: Otherwise, all accounts with cloaks in your namespaces are reported.
-- NickServ:
-- NickServ: Syntax: LISTGROUPCLOAKS [filter]
-- NickServ:
-- NickServ: Examples:
-- NickServ:     /msg NickServ LISTGROUPCLOAKS
-- NickServ:     /msg NickServ LISTGROUPCLOAKS coolproject/*
-- NickServ:
-- NickServ: ***** End of Help *****
```

GCs have a standing invitation to the `#libera-communities` channel where they
may request cloak changes for projects that they are a registered GC for.

## Claiming channels for a group

`CLAIM` allows you to acquire a channel _within your namespace_ even if
that channel is already registered to someone else, without the need for staff
intervention. It can also be used for initial registration even if it is not
already taken.

```irc
-- ChanServ: ***** ChanServ Help *****
-- ChanServ:  
-- ChanServ: Help for CLAIM:
-- ChanServ:  
-- ChanServ: The CLAIM command allows you to take control of a channel
-- ChanServ: belonging to a project you are authorized to represent.
-- ChanServ:  
-- ChanServ: Syntax: CLAIM <#channel>                            
-- ChanServ:  
-- ChanServ: Examples:
-- ChanServ:     /msg ChanServ CLAIM #coolproject-dev            
-- ChanServ:  
-- ChanServ: ***** End of Help *****
```

Using `CLAIM` to grab a channel from someone else might be seen as hostile, or
it could confuse people, so it is a good idea to at least give some warning.
Try to ask for the cooperation of people who have already occupied or
registered a channel before taking it from them.

## Other changes

Libera.Chat requires that GC and namespace changes be requested through email
tickets so that there is a paper trail of the change requests. Primary GCs can
request changes through a ticket sent to <projects@libera.chat>

If a namespace has been abandoned and there is no GC available to make this
request, transfer of the namespace may be requested through the
[group registration process](/chanreg).

If you have other questions about changes or processes for your groups, all
GCs have access to `#libera-communities` to get support from fellow GCs and
network staff.
