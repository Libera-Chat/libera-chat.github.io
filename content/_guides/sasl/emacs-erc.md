---
title: Configuring SASL for Emacs ERC
category: sasl
---

These instructions were originally contributed by androclus. Thanks!

[ERC](https://www.emacswiki.org/emacs/ERC) is an IRC client which comes as a
package for Emacs. A script is used to provide SASL support; you should first
download [erc-sasl.el from GitHub](https://github.com/syl20bnr/spacemacs/blob/master/layers/%2Bchat/erc/local/erc-sasl/erc-sasl.el)
and save it into one of the directories listed in your emacs `load-path`.


Once the script is downloaded, add the following to your `.emacs` or `init.el`
file in your ERC section:

```elisp
;; Require ERC-SASL package
(require 'erc-sasl)

;; Add SASL server to list of SASL servers (start a new list, if it did not exist)
(add-to-list 'erc-sasl-server-regexp-list "irc\\.libera\\.chat")

;; Redefine/Override the erc-login() function from the erc package, so that
;; it now uses SASL
(defun erc-login ()
  "Perform user authentication at the IRC server. (PATCHED)"
  (erc-log (format "login: nick: %s, user: %s %s %s :%s"
           (erc-current-nick)
           (user-login-name)
           (or erc-system-name (system-name))
           erc-session-server
           erc-session-user-full-name))
  (if erc-session-password
      (erc-server-send (format "PASS %s" erc-session-password))
    (message "Logging in without password"))
  (when (and (featurep 'erc-sasl) (erc-sasl-use-sasl-p))
    (erc-server-send "CAP REQ :sasl"))
  (erc-server-send (format "NICK %s" (erc-current-nick)))
  (erc-server-send
   (format "USER %s %s %s :%s"
       ;; hacked - S.B.
       (if erc-anonymous-login erc-email-userid (user-login-name))
       "0" "*"
       erc-session-user-full-name))
  (erc-update-mode-line))
```

Finally, update your connection function to include your NickServ password,
for example when using [erc-tls](https://www.emacswiki.org/emacs/ErcSSL):

```elisp
(erc-tls :server "irc.libera.chat" :port 6697 :nick "YourNick"
    :full-name "Text to display as your realname/gecos"
    :password "NickServPassword"))
```

This guide makes use of content adapted from John2x's
[answer on StackExchange](https://emacs.stackexchange.com/questions/47572/how-to-open-an-irc-session-using-sasl),
licensed under [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

Additional helpful ERC configuration advice may be found on
[John2x's home page](https://www.john2x.com/emacs.html).
