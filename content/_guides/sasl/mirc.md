---
title: Configuring SASL for mIRC
category: sasl
credits: web7
---

mIRC added built-in SASL support in version 7.48, released April 2017.
The below instructions were written for version 7.51, released September 2017.
Earlier versions of mIRC have unofficial third-party support for SASL, which
is not documented here. Libera.Chat strongly recommends using the latest
available version of your IRC client so that you are up-to-date with
security fixes.

1. In the File menu, click Select Server...
2. In the Connect -> Servers section of the mIRC Options window, select the
   correct server inside the Libera.Chat folder, then click Edit
3. In the `Login Method` dropdown, select `SASL (/CAP)`
4. In the second `Password` box at the bottom of the window, enter your
   NickServ username, then a colon, then your NickServ password.
   For example, `VeryFakeNick:hunter2`
5. Click the OK button
