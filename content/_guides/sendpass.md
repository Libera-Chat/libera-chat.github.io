---
title: Resetting your Password
category: using
credits: web7
weight: 20
---

If you have forgotten the password for your NickServ account and are unable to
log in to it, you can send a password reset mail to the email address on your
account with:

```irc
/msg NickServ SENDPASS youraccountnamehere
```

You should receive an email containing a command with a password reset key,
which you can use on IRC to reset your password.

If you do not receive the email, please check your spam folders etc.

If you already have an outstanding password reset mail, you cannot send another,
but you can contact Libera.Chat staff in #libera (or find them on /stats p) for
assistance.

Password resets do not work if someone is currently logged in to the account.
If you are logged in to your account already and need to change its password,
you should instead use the following command:

```irc
/msg NickServ SET PASSWORD newpasswordhere
```

If your account is compromised and you are unable to change or reset the
password, please contact Libera.Chat staff in #libera or /stats p as soon as
possible for assistance. You can also reach us at <support@libera.chat> if you
would prefer to discuss over email.
