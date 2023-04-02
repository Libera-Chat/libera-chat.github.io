---
title: Changing Default For Login Failure Notices
author: She
---

Hello Libera.Chat users,

In January, we added the `BADPASSWDMSG` setting to `NickServ`.
This setting allows registered users to stop receiving login failure notices.
For users who have common nicknames grouped to their accounts,
login failure notices can be incessant and a needless source of worry.

Currently these notices are still being sent to users by default.
We are going to be changing the default on 2023-04-16.
Accounts that have not set `BADPASSWDMSG` to `ON` or `OFF`
will default to *not* being sent these notices.
Our reasoning for doing so remains unchanged since
[the news post announcing this feature][0].

If you wish to continue receiving these notices,
please `/msg NickServ SET BADPASSWDMSG ON` if you have not already.
Your setting will be preserved when we change the default.

Have a good day!

[0]: https://libera.chat/news/login-failure-notice
