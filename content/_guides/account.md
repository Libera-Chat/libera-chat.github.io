---
title: Manage Your Account
category: using
weight: 25
---

Once you have an account, there are various things you can do to manage it.
This guide covers some of the common options.

- TOC
{:toc}

## Changing your password

This requires you to be logged in. See [how to log in](/guides/registration#logging-in)
if you are not currently logged in, or [resetting your password](/guides/sendpass)
if you are unable to log in to the account but remember its nickname.

You can change your current password to a new one with a command like
the following in your IRC client:

```irc
/msg NickServ SET PASSWORD newpasswordhere
```

Simply change `newpasswordhere` to something that is hard to guess. Once
the password is changed with `NickServ` update it in your [client's SASL details](/guides/sasl)
and for bonus points also store it in a password manager!

If you are concerned about an account compromise please [contact Libera.Chat
staff](/guides/faq#how-to-find-libera-chat-staff) as soon as possible.

## Updating your email address

Your email address can be updated so that you will successfully receive future
password resets. This is done by running something like the following in your
IRC client, swapping `your@new-email.address` for one that belongs to you:

```irc
/msg NickServ SET EMAIL your@new-email.address
```

Remember to use an email address that you are sure you will be able to receive
emails at in the future. It does not need to be your main email address, other
addresses that forward are ok. **Do not** use disposable addresses. They
expire or can often be accessed by other people if they guess the right URL.

## Grouping and un-grouping nicknames

It is a good idea to group an alternative nickname for your client to use if
your current one is in use (usually by another copy of your client during
connection time outs.)

Most clients use the default stored nickname with a `_` or a number at the
end, so take a look at your client's settings and see what it has stored.

To add a new nickname to your account, while logged in, change your nickname
to it and run the following
command in your IRC client:

```irc
/msg NickServ GROUP
```

If the nickname is *not already registered to an account*, it will be added to
yours. If the nickname is already taken, you will need to choose another. If
the [nickname is expired](/policies/#nickname-expiration), you might be able
to [ask staff for it to be released](/guides/faq#how-to-find-libera-chat-staff).

If your account has a nickname attached that you no longer want, you can also
easily ungroup it as follows, where `theoldnick` is replaced with the nick you
are discarding:

```irc
/msg NickServ UNGROUP theoldnick
```

If you do not specify a nickname, it will try to ungroup the one you are
currently using. If that happens, you will remain logged in and can simply
re-group it.

You are unable to ungroup nicknames that are set as your `ACCOUNTNAME`. If you
wish to drop your accountname without deleting your account, you will need to
change that setting first.

## Changing your account name

The account name is your primary nickname associated with your account. It can
be swapped out for any other nickname you have grouped.

```irc
/msg NickServ SET ACCOUNTNAME yourgroupednick
```

There are various reasons why people change their account names. While most of
them are innocent, please do be aware that changing account names to avoid
bans, quiets, and ignores, or for silly things like impersonation, will be
considered abuse of network services. Doing these things may result in you
losing the account -- and any further accounts -- without any additional
warning. You may also lose the privilege of connecting to the network.

## Set up nick protection

If your client is set up correctly to log you in automatically, we recommend
that you activate `ENFORCE` on your account.

```irc
/msg NickServ SET ENFORCE ON
```

This prevents other people from using your [active nicknames](/policies/#nickname-expiration)
when you're not around. The default grace period (the time before a connection
using one of your non-expired grouped nicks will be renamed) is 30 seconds.
You can change this to be between 1 and 180 seconds. For example, for a grace
period of 1 second:

```irc
/msg NickServ SET ENFORCETIME 1
```

## Other settings

`NickServ` has quite a few more account settings that you can update. Many
of them are not typically useful and some can be annoying. However, advanced
users might like to investigate them. You can do so with the command:

```irc
/msg NickServ HELP
```

## Deleting your account

While we will be sad to see you go, your account is yours to delete. Deleting
a nickname will remove its registration, any protections such as `ENFORCE`,
and will allow others to register it immediately. It will revoke channel
access tied to the account and your ability to access memos that were sent to
it.

If you are dropping with the intention to re-register the same nickname
immediately but with a different email, we strongly encourage you to use the
instructions above for updating your account details.

Once you have deleted your account, you are welcome to return to Libera.Chat
in the future; with or without an account. We look forward to seeing you
again.

Please see [our privacy policy](/privacy) to better understand what deleting
your Libera.Chat account does and does not involve.

If you're certain that you wish to delete, submit the following with your IRC
client:

```irc
/msg NickServ DROP
```

`NickServ` will give you a confirmation command to finalize the action. Your
account will continue to exist unless this command is given by you.

If you are dropping an account with the intention of evading bans, quiets,
ignores, or similar, this will be considered abuse of network services. This
may result in you losing further accounts -- and the privilege of connecting
to the network -- without any additional warning.
