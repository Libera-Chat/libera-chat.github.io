---
title: Configuring SASL for HexChat
category: sasl
credits: web7
---

These instructions were originally contributed by BlueShark. Thanks!

HexChat is a fork of XChat with in-built [SASL](/guides/sasl) support.
It doesn't require any additional scripts for that purpose. The setup
procedure is simple.

Please note that at the time of writing, HexChat supports a maximum password
length of __85 characters__.

1. Open the Network List (Ctrl + S)
2. If the Libera.Chat network exists in the list, then click on Edit and skip
   ahead to step 5
3. If it does not yet exist in the list, click Add and type Libera.Chat,
   then hit enter and click on Edit
4. Replace the string `newserver/6667` with `irc.libera.chat/+6697`
5. In the `User name` field, enter your primary nick
6. Select `SASL PLAIN (username + password)` for the `Login method` field
7. In the `Password` field, enter your NickServ password

If you are unable to edit the `User name` field, the change can be made in the
`User Information` section on the Network List window.

If everything was configured correctly, you should see a
`SASL authentication successful` message when you connect. You will already be
identified to NickServ, so you don't need to do this again.
