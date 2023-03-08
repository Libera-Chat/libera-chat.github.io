---
title: Configuring SASL for Pidgin
category: sasl
credits: web7
---

If you have already added Libera.Chat as an account, skip to step 5.

1. Open `Manage Accounts` (open by default when no accounts are configured,
   or press CTRL+A)
2. Click `Add...` button
3. Select `IRC` in protocol dropdown, enter `irc.libera.chat` as `Server`
4. Enter your Libera.Chat account name as `Username`
5. Enter your Libera.Chat account password as `Password` and tick
   `Remember password`
6. Click on to the `Advanced` tab
7. Change `Port` to `6697`, tick `Use SSL` and `Authenticate with SASL`
8. Enter your Libera.Chat account name as `SASL login name`. This ensures that
   the correct username is used to login in cases where you have set `Real name`
   to something other than your Libera.Chat account name
9. If this is a newly created Pidgin account, click `Add` and pidgin will
   begin to connect
10. If this is an existing account, click `Save`, then restart Pidgin for the
   SASL settings to take effect
