---
title: Register an account
category: using
credits: web7
weight: 10
---

Your nick is how people on Libera.Chat know you. If you register it,
you'll be able to use the same nick over and over. If you don't register,
someone else may end up registering the nick you want. If you register and
use the same nick, people will begin to know you by reputation.

Certain channels require you to register before you may speak in them.
The [Unable to Speak](#unable-to-speak) section below explains this further.

Some terms you should know:

- an "account" is your persistent identity
- a "nickname" is your current display name and can be owned by an account
- to "identify" means to log into your account
- "NickServ" is a Libera.Chat service that behaves like a user
  (which you can send private messages to)

## Registering

The following steps are the recommended method to register and set up a new
Libera.Chat account. If you have questions or doubts about the process,
a member of staff will be happy to discuss it and answer any questions you
may have.

1. **Select** a main, "primary", nickname. If the nickname you want is
   registered but has [expired](/policies#nickname-expiration), just ask
   a staffer and in most cases, we will be happy to drop it for you. Please
   avoid using the name of a community project or trademarked entity, to avoid
   conflicts.

2. **Switch** to your desired nickname. This will also be your account name.

   ```irc
   /nick YourNick
   ```

   Lines starting with the `/` symbol are commands, which you can type into
   the chat field in the IRC client.

3. **Register** your IRC nick:

   ```irc
   /msg NickServ REGISTER YourPassword youremail@example.com
   ```

   Replace "YourPassword" with a secure, unguessable, and unique password
   that you keep secret. Reusing passwords between services can result in
   account compromises.

    The email address that you select will not be given out by staff, and is
    mainly used to allow us to help you recover the account in the event that
    you forget your password. For this reason, you are required to use a
    real, non-disposable, email address.

    Upon registering, you will receive an email with a verification command
    that you will need to run to complete the registration process.
    **Failure to verify** the account will cause it to be automatically
    **dropped** after about 24 hours.

    We do not recommend sharing your NickServ password with anyone else as
    this could compromise account security and make it harder for you to
    recover your account in the future.

4. It's useful, but not required, to have an alternate nick grouped to your
   account. For example, if your primary nick is "YourNick":

   ```irc
   /nick YourNick2
   ```

   then identify to your primary account:

   ```irc
   /msg NickServ IDENTIFY YourNick YourPassword
   ```

   and finally, group the new nick to your account

   ```irc
   /msg NickServ GROUP
   ```

   We prefer you to use just one account, and group nicks to it as described
   above, rather than registering for multiple accounts. Grouping nicks in
   this way gives you the benefit of having all your nicks covered by the
   same cloak, should you choose to wear a cloak. The exception to this is
   where you might want to run a bot. You should register a separate account
   for your bot.

## Logging In

You'll need to log in to your account each time you connect to Libera.Chat.
**It is highly recommended to use [SASL](/guides/sasl) for this,
which is supported by every notable modern IRC client.**
Instructions for your client can likely be found
[here](/guides/sasl#client-configuration).

If you are already connected to the network and do not wish to reconnect to
log in, you can manually identify:

```irc
/msg NickServ IDENTIFY YourNick YourPassword
```

If your client does not support SASL, you can log in by supplying
your account name and password as a
[connection password](https://dd.ircdocs.horse/refs/commands/pass)
of the form `<account>:<password>`, for example `my_cool_nick:password123`.
The method of setting a connection password varies significantly
between clients. Please refer to your client's documentation.

## Controlling Usage of Your Nicknames

If you are concerned about the fact that people can use your grouped
nicknames without logging into your account, you can enable the account
`ENFORCE` setting:

```irc
/msg NickServ HELP SET ENFORCE
/msg NickServ HELP SET ENFORCETIME
```

This is not recommended unless you are concerned about your nickname being
impersonated while you are not connected to IRC (or while you are, but you
are using a different nickname for some reason).

Note that enabling this setting is NOT required to secure your account!
Someone that is using your nickname(s) does not get any access to your
account or any privileges associated with that (such as persistent access
to channels).

This is not a default account setting because most people will not reasonably
benefit from being forced to login to their account just to use their
nicknames, but would be inconvenienced by having to, especially with the
combination of a low enforce time and no configured SASL.

This also creates an undue support burden upon network staff, because when
someone uses the nickname of an account that has enforcement enabled, and
fails to login to the account in time, the nickname will be taken off of
them and then locked. This will subsequently prevent you from using it too,
requiring you to release or regain it first:

```irc
/msg NickServ HELP RELEASE
/msg NickServ HELP REGAIN
```

## Unable to Speak

If a channel is set to mode `+r`, you won't be able to join it unless you
are registered and identified to NickServ. If you try to join, you might be
forwarded to a different channel. If a channel is set to mode `+R`
or set to quiet unregistered users (mode `+q $~a`), you won't be able to speak
while on that channel unless you are registered and identified.

These modes are used by some channels to reduce channel harassment
and abuse.

Once you have registered and are logged in, this issue should disappear.

## Nickname Expiry

Registered nicknames and accounts will expire if they're not used for a long
time, after which they'll be available for another user to take over. See our
[policies](/policies#nickname-expiration) for details of when this occurs.

While nicknames and accounts do not automatically get deleted when they
expire—only when another user requests to take over the registration-we do
occasionally perform clean-up runs on the services database, in which we will
automatically drop all registrations which have been idle for a long time.
When we do this, we set the threshold for deletion considerably higher than
the documented expiry time, to ensure that users close to the limit do not
lose out.
