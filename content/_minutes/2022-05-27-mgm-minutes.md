---
title: Monthly General Meeting, May 2022
author: ben
excerpt: >
  Approval of a new auditor, discuss Libera-branded merch, and load
  additional Solanum modules.
---

## Proposition and motions

- tomaw appointed as new auditor.
- New staff candidates presented and discussed.

## Other questions

### Merchandise

The meeting discussed several options of offering merchandise with Libera
Chat logos.

[freewear.org](https://www.freewear.org) was suggested as an option. Several
FOSS organisations like KDE, Gnome, Debian, Arch, Django and Python use it
already to good effect.

We will follow up on some additional design work and contact the freewear.org
team to discuss options.

### Out-of-band staff messenger

The meeting discussed options for an emergency out-of-band messenger in case
IRC is unreachable for staff. A comparison table with several options was
presented.

### Loading `invex_regonly`

This is a convenient way for chanops to allow unregistered users to bypass
chanmode `+r` (regonly) by adding an INVEX (invite-exception).

The meeting voted to load this module pending review and testing.

### Loading `chm_regmsg`

This is a more convenient way to block messages from unregistered users.
It is already possible to block said messages with an EXTBAN format of
`+q $~a` but using `+R` will show a friendlier error to the unregistered
user and is easier to apply.

The meeting voted to load this module pending review and testing.
