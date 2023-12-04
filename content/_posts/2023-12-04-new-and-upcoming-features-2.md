---
title: New And Upcoming Features #2
author: el, glguy, moonmoon, She, spb
---

Hello Libera.Chat users,

As we look towards the end of the year, we thought we'd put together an
update on what we have been up to behind the scenes.

## New Features

### User mode `I`: Disable idle time display

This was an upcoming feature on
[our previous New And Upcoming Features blog post][prev-umode-i], and
it's finally here!

Your idle time is the number of seconds since the last time you sent a
message. It is shown by `/whois` and `/who %l` queries that are sent to the
server you are on. This can be useful for people to determine if you are
available, but can also be a privacy concern.

User mode `I` hides your idle time, displaying a time of 0 seconds wherever it
would otherwise be displayed. Additionally, responses to `/whois` queries
about you will explicitly indicate that you are hiding your idle time. To keep
things fair, however, setting user mode `I` will also prevent you from seeing
others' idle times, regardless of whether they have `I` set or not. Note that
staff will always be able to see users' idle times.

### New commands for Group Contacts

We have added a bunch of nice things to the `ProjectServ` service that we use
to manage and document project and community registrations. These new features
are aimed at enabling peace of mind by providing information that allows
groups to audit their registered namespaces without needing to wait for staff
assistance:

1. `ChanServ LISTGROUPCHANS` lets Group Contacts list all registered channels
    in their namespaces.

2. `NickServ LISTGROUPCLOAKS` lets Group Contacts list all users with cloaks
    belonging to their projects.

3. Group contacts now receive a notification whenever a new channel is
    registered in one of their channel namespaces. The notifications look
    like this:

    ```irc
    -ProjectServ- The user veryrealbob (account name fakebob) has registered the channel #bobsproject-hates-kittens which is within the namespace (#bobsproject) of a project that you are a group contact for (bobsproject)
    ```

4. When Group Contacts of a namespace do `ChanServ INFO` for a channel
    registered in their namespace, they will now see a full list of both
    public and unlisted/private Group Contacts assigned to their project.
    Others will still only see public contacts when they use `ChanServ INFO`

### Extban improvements

The existing `$x` extban has been improved. This extban allows the GECOS
string (also known as realname) to be matched in addition to the standard
nick, user, and host fields. The improvement is that the host component of
these masks will now also match against IP addresses if that address is
publicly visible. While matching both hosts and IP addresses was standard
behaviour for normal masks, it was previously not implemented for `$x` bans.
GECOS matches are generally most useful when matching bridged users where the
GECOS value is fixed by the bridge.

Help text: `$x:<mask>` - Bans all users with matching `nick!user@host#gecos`

Example: `$x:*!*@192.0.2.0/24#suspicious-gecos-here`

The new `$g` extban extends `$x` by only matching unidentified users. This
could be useful if unidentified bots or other undesirable connections were
coming from a specific service and a channel did not want to restrict chat
from all unidentified users. When a `#` character is present in the mask, this
ban works like `$x` to match GECOS as well.

Help text: `$g:<mask>` - Matches as a normal ban but excludes identified users

Example: `$g:*!*@undesirable.host.name`

For documentation on all the extbans, please visit our
[channel mode documentation][extban-docs].

## Upcoming features

### Easier account creation and verification

This was announced [late last year][curite-news],
and an initial iteration of this feature is finally complete.
We are currently working on an automated build and deployment pipeline
for it, which we should also be able to use for
our other projects written in Rust.

### Sable update

We've continued to work in the background on Sable, our experimental
next-generation server platform. It is currently possible to create
a network of Sable servers, connect to it, and use it for basic chat.
While [there's a long way to go yet][sable-todos],
Sable will allow us to offer a greatly improved user experience,
including persistent presence and history without the need for bouncers and
much better resilience to network interruptions. If you'd like to get involved
in this effort, or just observe how we're progressing, come and join us in
`#libera-dev`.

## Documentation updates

We were asked in the `#libera-communities` channel if we could
provide a quick reference to help operators know when and how to set various
types of access control measures for their channels. This has been asked and
attempted several times in the past, but this time we did manage to pull a
simple guide together! You can now find a [Quick Ops Guide](/guides/quickops)
in the [guides area of this site](/guides).

In the future we hope to supplement this guide another more comprehensive
reference text that summarises some of the more advanced features and
practices available. If there are any other guides you would like to see,
let us know.

We have also updated our [channel registration](/chanreg) guide which explains
channel namespaces, what is considered on-topic, and the formal group
registration process. The previous guide was quite confusing in many respects,
leading people to be unsure where their channels belong or whether or not they
were allowed to register channels with `ChanServ` without also going through a
formal group registration process for their projects. We hope that the new
guide clears up all of this confusion and becomes a more useful point of
reference.

## Libera merch

As a reminder, we have a lineup of
[Libera.Chat merch at FreeWear.org][freewear]
including shirts, mugs, and stickers. We get a small cut of every purchase
made on the platform, so it is a good way to show your support in addition
to repping the network in real life.

If that's not quite your thing but you'd like to show your support in other
ways, you can give us a [donation](/contributing/donate) or contribute to
the [many open source projects](/contributing/development) that Libera.Chat
relies on.

[prev-umode-i]: https://libera.chat/news/new-and-upcoming-features#user-mode-i
[extban-docs]: https://libera.chat/guides/channelmodes#available-extban-types
[curite-news]: https://libera.chat/news/new-and-upcoming-features#easier-account-creation-and-verification
[sable-todos]: https://github.com/orgs/Libera-Chat/projects/2/views/1?sortedBy%5Bdirection%5D=desc&sortedBy%5BcolumnId%5D=Status
[freewear]: https://www.freewear.org/Libera.Chat
