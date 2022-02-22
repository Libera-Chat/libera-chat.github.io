---
title: Configuring SASL for catgirl
category: sasl
---

To connect to Libera.Chat using SASL PLAIN on catgirl, choose one of the
following options:

- Add SASL PLAIN as a config file option with username and password:
  `sasl-plain = username:password`
- Add SASL PLAIN as a config file option with just username (catgirl 2.1+
  only, will prompt for password on connect): `sasl-plain = username:`
- Add SASL PLAIN as a command-line argument: `catgirl -a username:password`

To connect to Libera.Chat using SASL EXTERNAL on catgirl,
[see the manpage](https://git.causal.agency/catgirl/about/catgirl.1#Configuring_CertFP).
