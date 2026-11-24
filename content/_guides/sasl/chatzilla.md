---
title: Configuring SASL for Chatzilla
category: sasl
credits: web7, tomman
---

ChatZilla does not officially support SASL authentication, furthermore its
upstream development was abandoned since 2017, but if you are using a
maintained fork like [Ambassador](https://github.com/Ascrod/ambassador/) or
the built-in version from [SeaMonkey](https://www.seamonkey-project.org/),
those do have native SASL authentication available. Make sure you are using
the latest available version for your IRC client (in the case of SeaMonkey,
you need version 2.53.10 or later)

To enable SASL on recent ChatZilla on SeaMonkey versions, follow these
instructions (the procedure should be very similar for Ambassador):

1. Make sure to have connected to Libera.Chat at least once, so ChatZilla
   initializes and stores the preferences for the network. This step is
   important so you can edit the SASL authentication parameters for
   Libera.Chat!
2. On the main ChatZilla window, click on the `Edit` menu, then select
   `ChatZilla Preferences...`
3. On the ChatZilla Preferences dialog, select `libera.chat` from the left
   panel. Scroll down to `Identification` on the right panel, and tick the
   `Use SASL Authentication` checkbox
4. Type in your main registered nickname on the `User name` field under
   the same `Identification` section - this will be used as your SASL
   username
5. Click `OK` on the ChatZilla Preferences dialog to save the settings

Now you can connect to Libera.Chat using SASL. On your next connection
after setting up SASL authentication, you will be asked for your SASL
password, which is your NickServ password (and during this step, you can
also optionally save the password on the SeaMonkey/Mozilla password
manager for future connections, just like any other password in your
browser)

_The instructions below are for legacy upstream ChatZilla versions:_

This script is by Gryllida, for the
[ChatZilla add-on](http://chatzilla.hacksrus.com/ ) to Firefox.

1. Install [the cz_sasl script](/static/files/cz_sasl-0.6.3.js) as you would
   any other script, following the
   [instructions here](http://chatzilla.hacksrus.com/faq/#install-script)
2. From a network tab connected to Libera.Chat (you don't need to be
   connected, but it has to be from a network tab pointing to the correct
   network where you need to setup SASL authentication for), enter
   `/sasl YOUR_USERNAME YOUR_PASSWORD` replacing `YOUR_USERNAME` with your
   registered nickname and `YOUR_PASSWORD` with your NickServ password
3. If you have SASL authentication failures, you can turn off SASL
   authentication with `/sasl-disable` from the correct network tab, and
   reenable it with `/sasl-enable`

If everything has been configured correctly, the next time you connect you
should see the message `SASL authentication successful`.
