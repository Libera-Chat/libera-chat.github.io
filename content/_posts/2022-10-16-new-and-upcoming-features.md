---
title: New And Upcoming Features
author: She
---

Hello Libera Chat users,

It's been a while since we've made a blog post.
We've been quiet, but that doesn't mean we haven't been busy!

## New Features

Over the past few months, we've made a number of improvements
and we're excited to highlight a few of them today.
A couple of these features have been available for a while,
but haven't been properly announced yet.

### Channel mode `R`

A channel with mode `R` prevents unidentified users from
sending messages to it but does not prevent them from joining.
It is a softer version of the existing channel mode `r`
and provides a more intuitive error message than `q $~a`.
If your channel quiets unidentified users or redirects them to another channel
for the sole purpose of telling them to identify,
we recommend using this mode instead.

### Invite exemptions override channel mode `r`

Invite exemptions (channel mode `I`) now allow
unidentified users to join channels that
normally block them with channel mode `r`.

Some channels currently do not block unidentified users
because doing so would also block users they want to make exceptions for.
These exceptions can be users of a particular shared bouncer, Matrix users,
or even old regulars that do not want to have `NickServ` accounts.

With this change, exceptions can be made for those users. However,
invite exemptions deliberately do not apply to the new channel mode `R`.

### `ChanServ` topic commands

`TOPICPREPEND` adds a section to the topic the same way `TOPICAPPEND`
does, except that it adds to the start of the topic instead of the end.
This can be useful when one wants to keep most of the topic,
but draw attention to an important matter.

`TOPICSWAP` finds and replaces text in a topic. For example,
let's say there's a channel topic that contains
`All-day voice chat on 29 Oct 2022`
and that the community voice chat needs to be delayed a week.
Someone with the `t` flag in that channel's `ChanServ FLAGS` list
can use the command `/msg ChanServ TOPICSWAP <channel> 29 Oct 2022:5 Nov 2022`
to change it. Afterwards, that part of the topic can be deleted using
`/msg ChanServ TOPICSWAP <channel> All-day voice chat on 5 Nov 2022:`.

### Tidier `ChanServ` access control lists

`ChanServ` no longer displays users with the `b` flag  in the `FLAGS` list.
The `b` flag indicates that the target should be
automatically kicked and banned from the channel,
and is often set using the `ChanServ AKICK` command.
As a result, channels that make heavy use of `AKICK`
now have easier-to-navigate access lists.

You can still view the `AKICK` entries
with `/msg ChanServ AKICK <channel> LIST`.

## Upcoming features

We wanted to get this post out quickly,
so there are a few new features that aren't quite ready yet.
They are actively being worked on,
and we will try to have them available soon.

### Toggleable login failure messages

`SaslServ` sends users alerts
when there is a failure to log in to their accounts.
We have found that these alerts indicate that someone has
a misconfigured client more often than they indicate
actual malicious attempts to log in,
and if they do indicate a malicious attempt to log in,
there's usually nothing a normal user can do other than change their password.
For users with common nicknames -- who commonly have to deal with
misconfigured clients attempting to log into their accounts --
these alerts do nothing more than spam and worry them.
Actual brute-force login attempts are fairly rare on the network,
and we have (recently-upgraded) automated countermeasures against them.

We are going to be allowing these messages to be toggled.
Sometime near the start of next month (Nov 2022),
you will be able to change whether or not you receive an alert on
every failed login attempt.
To do so, you would use the command
`/msg NickServ SET BADPASSWDMSG <ON|OFF>`.

We are currently having a discussion about whether or not
the new `BADPASSWDMSG` account setting should be `ON` or `OFF` by default.
There will be a staff vote at the end of the month,
and in the meantime we will be listening for arguments in support
of one or the other. Regardless of the decision,
you will be able to change this setting for your own account.

### Easier account creation and verification

Our account verification emails will soon include links that
new users can go to in order to verify their accounts,
instead of having to use the `NickServ VERIFY` command.
The current method of account verification will still work.
We are also working on a web form to allow new users to
create new accounts without ever having to `/msg NickServ`.

### User mode `I`

If other users knowing how long you've been idle for is a privacy concern,
user mode `I` will allow you to hide that information from `/whois` queries.
There are still a few more specifics to discuss before we enable this,
but the hope is to offer this feature before the end of the year.

### Token-based authentication

This one is farther off, but we are looking into implementing
token-based authentication for user accounts. The intent is to
provide a method of authentication that is more convenient
than CertFP or a cryptographic challenge, but is still secure-by-default.
We plan to allow token-based authentication to be done over `SASL PLAIN`
so that existing clients can use it.
We will also allow this form of authentication for Tor users,
while keeping password-based authentication restricted.

There are still a lot of questions we need to answer
before we can even start to implement this. Ideally, we would also like to
have a SASL mechanism for doing token-based authentication only,
which we would work with client authors to implement.

## And more?

We have some very exciting projects that are still early in development.
We hope to be able to share more details about them next year.
Sneak peeks of some of what we're working on can be found on
our [Github](https://github.com/Libera-Chat).
Watch this space,
our [mastodon](https://fosstodon.org/@liberachat),
and [twitter](https://twitter.com/liberachat) for future updates.
Please feel free to drop by in `#libera`
if you have any questions or comments, and as always,
thank you for supporting us.
