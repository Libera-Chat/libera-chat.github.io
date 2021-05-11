---
title: Configuring SASL for LimeChat on macOS
category: sasl
credits: web7
---

If you have already added Libera.Chat as a network, right-click on the network,
select Server Properties or press <kbd>⌘U</kbd>.

1. Click on the `General` tab.
2. Set `Port` to 6697.
3. Check `SSL Connection`.
4. Enter your registered nickname under `Nickname`.
5. Enter your registered nickname under `Login name` (these should match).
6. Enter your NickServ password under `Nickserv Password`.
7. Check `Use SASL`.
8. Click OK.

Due to a bug in LimeChat it is important that Nickname and Login name match!

If everything was configured correctly, you should see a
`SASL authentication successful` message when you connect.
You will already be identified, so you don't need to do this again.
