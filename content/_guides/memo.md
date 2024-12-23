---
title: Memos
category: using
weight: 61
---

Libera.Chat supports sending memos to users or channel operators using
MemoServ. You may send memos to offline users for them to read when they come
online.

Both the sender's nick and the target nick or channel name must be registered.
See [Nickname registration]({% link _guides/registration.md %}) for more
information.

## Sending a memo

To send a memo to a user, run the following command in your IRC client:

```irc
/msg MemoServ SEND <nick> <memo text>
```

If you're allowed to view the access list for a channel, you can send a
message to the channel operators by running the following command in your IRC
client:

```irc
/msg MemoServ SENDOPS <#channel> <memo text>
```

## Listing memos

You can display a list of memos in your inbox by running the following command
in your IRC client:

```irc
/msg MemoServ LIST
```

MemoServ returns a list of all memos in your inbox along with information
about who sent the memo and when it was sent. Each memo is identified by a
number.

## Reading memos

To read your new memos, run the following command in your IRC client:

```irc
/msg MemoServ READ NEW
```

MemoServ responds with a list of all unread memo contents.

To read a specific memo, [find the memo number](#listing-memos) and run the
following command in your IRC client:

```irc
/msg MemoServ READ <memo number>
```

MemoServ responds with the content of the selected memo.

## Forwarding memos

You can forward memos to other users. The recipient nick must be registered on
Libera.Chat.

To forward a memo, [find the memo number](#listing-memos) and run the
following command in your IRC client:

```irc
/msg MemoServ FORWARD <nick> <memo number>
```

## Deleting memos

To delete a memo from your list, [find the memo number](#listing-memos) and
run the following command in your IRC client:

```irc
/msg MemoServ DELETE <memo number>
```

When you delete a memo, all memo numbers change to account for the deleted
memo. Make sure to [list memos again](#listing-memos) before deleting another
memo.

To delete all memos in your memo list, run the following command
in your IRC client:

```irc
/msg MemoServ DELETE ALL
```

To delete all read (old) memos in your memo list, run the following command in
your IRC client:

```irc
/msg MemoServ DELETE OLD
```

## Ignoring memos

You can disable receiving memos from all accounts by running the following
command in your IRC client:

```irc
/msg NickServ SET NOMEMO ON
```

When `NOMEMO` is enabled, you won't receive memos from any account. To
re-enable memos, run the following command in your IRC client:

```irc
/msg NickServ SET NOMEMO OFF
```

If you want to stop receiving memos from a specific user, you can add the user
to your ignore list. You can add up to 40 users to your ignore list.

To add a user to your ignore list, run the following command in your IRC
client:

```irc
/msg MemoServ IGNORE ADD <nick>
```

To remove a user from your ignore list, run the following command
in your IRC client:

```irc
/msg MemoServ IGNORE DEL <nick>
```

To return the whole list of users on your ignore list, run the following
command in your IRC client:

```irc
/msg MemoServ IGNORE LIST
```

To remove all users from your ignore list, run the following command in your
IRC client:

```irc
/msg MemoServ IGNORE CLEAR
```
