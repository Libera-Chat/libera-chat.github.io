---
title: Configuring SASL for Chatzilla
category: sasl
credits: web7
---

This script is by Gryllida, for the
[ChatZilla add-on](http://chatzilla.hacksrus.com/ ) to Firefox.

1. Install [the cz_sasl script](/static/files/cz_sasl-0.6.3.js) as you would
   any other script, following the
   [instructions here](http://chatzilla.hacksrus.com/faq/#install-script)
2. Enter `/plugin-pref cz_sasl`
3. Enter `/plugin-pref cz_sasl sasl.username YOUR_USERNAME` replacing
   `YOUR_USERNAME` with your registered nickname
4. Enter `/plugin-pref cz_sasl sasl.password YOUR_PASSWORD` replacing
   `YOUR_PASSWORD` with your NickServ password
5. If you want to continue connecting when SASL authentication fails, enter
   `/plugin-pref cz_sasl sasl.proceed_on_fail true`

If everything has been configured correctly, the next time you connect you
should see the message `SASL authentication successful`.
