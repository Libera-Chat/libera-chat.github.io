---
title: Activity Report 2025 - Engineering
---

Libera Chat's engineering team is responsible for developing and maintaining
the software used to provide the IRC network and any auxiliary services as
Libera requires.

## Team Organisation

There were one change to the team membership during the fiscal year due to the
resignation of a staff member, reducing the team to 13 members.

## Activity

Engineering activity has been split into two main areas: maintenance of our
current server platform, and continued development of our experimental next-
generation software. In addition to efforts by the team, many enhancements
come from community contributions. We thank everyone who has taken the time
to submit suggestions or code changes to the various projects underpinning
the Libera Chat network.

In the last year we have delivered several improvements to the user
experience on the network, including:

- Notifying channel founders on channel registration that the secret mode (+s)
  is set, along with instructions on how to unset it if they wish for their
  channel to be public.
- A new ChanServ LISTMODES command available to everyone, which displays the
  current channel modes as well as the current mode lock for all channels the
  user has access to.
- Expanding the ChanServ LISTGROUPCHANS command available to Group Contacts to
  list whether or not a registered channel within their project has the secret
  mode (+s) set.
- Updated wording in ChanServ INFO responses for Group Contact lists to improve
  consistency between public and private contact listings.
- Notifying channel members when a Group Contact uses the ChanServ CLAIM
  command on a channel which has the VERBOSE flag enabled.
- Making successor access flag (+S) operate normally on channels in the primary
  channel namespace which do not belong to a registered project.
- TLS client certificates presented by users no longer need to have the
  ClientAuth extended key usage in order to be considered valid for SASL
  EXTERNAL.

Development of Sable, our experimental next-generation server, continues at a
variable pace, and we continue to welcome contributions from anyone interested.
Improvements made to Sable in the last year include:

- Documentation updates.
- Enhancements and spec compliance updates to the CHATHISTORY TARGETS command.
- Add missing ERR_NOPRIVILEGES reply on failed KILL.
- Fix RPL_YOUREOPER syntax.
