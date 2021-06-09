---
title: Configuring SASL for Revolution
category: sasl
credits: web7
---

If you have already added Libera.Chat as a server, long press on it and select
Edit, and skip to step 5.

1. On the `Manage servers` screen, the main screen, press `+` button on the
    bottom-right of the screen
2. Enter a name (perhaps liberachat)
3. Enter `irc.libera.chat` as `Server address`, making sure `Port` is set to
    `6697` and `Use SSL/TLS` is ticked
4. Make sure `Server password` is blank
5. Select `Username with password (SASL)` from the `Authentication mode`
    dropdown list
6. Enter your Libera.Chat account name as `Username`
7. Enter your Libera.Chat account password as `Password`
8. Enter your desired nickname(s) as `Nicknames`
9. Press the tick symbol on the top-right of the screen and you will be
    returned to the Server list
10. Tap on the Libera.Chat server to connect it, tap on it again to view the
    server output

If everything was configured correctly, you should see a
`SASL authentication successful` message when you connect.
You will already be identified, so you don't need to do this again.
