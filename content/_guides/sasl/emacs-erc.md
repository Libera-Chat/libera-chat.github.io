---
title: Configuring SASL for Emacs ERC
category: sasl
---

[ERC](https://www.emacswiki.org/emacs/ERC) is an IRC client which comes as a package for Emacs.

## Set up ERC IRC client

If you have ERC already installed and running on your emacs system, then skip to [Register](#user-content-register).
Otherwise, set up your ERC with basic functionality, as follows:

1. Download and Install the erc package from melpa, etc. (`M-x package-list-packages`)
2. Set up your ERC for plain (unregistered) sign-in.
  - There are some basic setup instructions [here](https://www.emacswiki.org/emacs/ERC)
  - Below is my own setup (before adding the SASL stuff below), though by no means do you need all this to set up a basic ERC for yourself.
```
;; ======== ERC START ==============================

;; Most of these are just for convenience options. I believe the only
;; absolutely necessary one here is the my-erc-connect() function I
;; define for connecting.

;; for auto-joining networks and channels when starting up ERC
(require 'erc-join)
(erc-autojoin-enable)

;; Logging of conversations (mostly for when I forget to save peoples’
;; answers when I ask a programming question).

;; turn on logging
(setq erc-log-mode t)
;; write to log file when new text is added to a logged ERC buffer.
(setq erc-log-write-after-insert t)
;; write to log file after every message I send.
(setq erc-log-write-after-send t)
;; Include network name in the buffers
(setq erc-rename-buffers t)

;; from local erc-log.el and tweeked
;; see also https://www.emacswiki.org/emacs/ErcLogging
(require 'erc-log)
(files--ensure-directory "~/.config")
(files--ensure-directory "~/.config/erc")
(files--ensure-directory "~/.config/erc/logs")
(setq erc-log-channels-directory "~/.config/erc/logs/")
(erc-log-enable)

;; don't ask me for my nickserv password
(setq erc-prompt-for-nickserv-password nil)

;; A list of channels to auto-join
(setq erc-autojoin-channels-alist
	'(("irc.libera.chat" "#libera" "#emacs" "#erc")))
;; OR, if NONE..
;; (setq erc-autojoin-channels-alist nil)

;; from http://www.john2x.com/emacs.html
;; Set the prompt to use the channel name.
(setq erc-prompt  (lambda () (concat (buffer-name) "> ")))

;; beautify the text on screen
(setq erc-fill-function 'erc-fill-static)
(setq erc-fill-static-center 10)

;; my main function for connecting to libera.chat
;; (see also https://libera.chat/guides/connect for regional hostnames)
(defun my-erc-connect ()
  (interactive)
  (erc-tls :server "irc.libera.chat" :port 6697 :nick "MYNICK" :full-name "MY NAME"))
(global-set-key (kbd "C-c e") 'my-erc-connect)

;; Channel-tracking: Convenience functions for easily flipping between channels you are logged into
;; from https://www.emacswiki.org/emacs/ErcChannelTracking#toc8
;; (I don't use so much anymore, actually..)
(defvar erc-channels-to-visit nil
    "Channels that have not yet been visited by erc-next-channel-buffer")
(defun erc-next-channel-buffer ()
  "Switch to the next unvisited channel. See erc-channels-to-visit"
  (interactive)
  (when (null erc-channels-to-visit)
    (setq erc-channels-to-visit 
          (remove (current-buffer) (erc-channel-list nil))))
  (let ((target (pop erc-channels-to-visit)))
    (if target 
        (switch-to-buffer target))))
(global-set-key (kbd "C-c n") 'erc-next-channel-buffer)
;; ======== ERC END ================================
```
3. In the `my-erc-connect` command you've defined, replace MYNICK with your nickname you plan to use (assuming no one else uses and has registered this nick).
4. Either shut down your emacs and restart, or evaluate all the above lines.

## Register

If you have registered a nickname with libera already, and you remember the password, then skip to [Install ERC-SASL Functionality](#user-content-install-erc-sasl-functionality).
Otherwise, register a nick with libera.chat, as follows:

1. NOTE: In order to connect to irc.libera.chat without SASL (as you'll need to do here in order to register in the first place, right?) you can't be using a VPN. See [our notes on IP Range restrictions](guides/sasl#sasl-access-only-ip-ranges). Later, once you connect via SASL, below, you'll be able to use your VPN to connect.
2. Connect to irc.libera.chat (unregistered), using the nick you plan to register. (You should be able to use the global key C-c n using the global-set-key you defined above to connect).
3. Make sure the nick you plan to use is allowed. (libera's NickServ will give you an error if you are trying to use a nick that is already registered.)
4. Register: Follow our instructions here to [register a nickname and password](/guides/registration) while signed in.
5. Once your registration appears successful, then save your username/password to your password safe of preference (Unix *pass*, or *keepassxc*, etc.).

## Install ERC-SASL functionality

1. Download a copy of erc-sasl.el from [Sylvain Benner's GitHub Repo](https://github.com/syl20bnr/spacemacs/blob/master/layers/%2Bchat/erc/local/erc-sasl/erc-sasl.el). (Note-1)
2. Save it into one of the directorys listed in your emacs’ *load-path* variable. (Note-2)
3. Add the following to your .emacs or init.el file in your ERC section (Note-3).
```
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
4. Change the already-existing connection function you had above, so that it now includes the password you registered
```
(defun my-erc-connect ()
  (interactive)
  (erc-tls :server "irc.libera.chat" :port 6697 :nick "NICKNAME" :full-name "MY FULL NAME" :password "PASSWORD"))
(global-set-key (kbd "C-c e") 'my-erc-connect)
```

## Test

1. Either close down your emacs completely and restart, or evaluate the lines you added, above, including re-evaluating the `my-erc-connect` function, and try logging in via SASL, again via your `my-erc-connect` shortcut.

## Notes

- Note-1: If Sylvain’s repo happens to be deleted by the time you read this, then a back-up location is [psachin's gitlab repo](https://gitlab.com/psachin/erc-sasl). The erc-sasl.el there is exactly the same, with one exception: You'll need to change line 54's "loop" to read "cl-loop" (or macro/alias the former to the latter, as some folks do, because cl-loop is a Common Lisp function):
```
   (cl-loop for re in erc-sasl-server-regexp-list
```
- Note-2: In my case, I saved it to ~/jeff/.emacs.d/elisp/erc-sasl.el because ~/jeff/.emacs.d/elisp/ directory is on my emacs’ `load-path`.
- Note-3: Thanks to John2x ([his home page](https://www.john2x.com/emacs.html), [his answer on StackExchange](https://emacs.stackexchange.com/questions/47572/how-to-open-an-irc-session-using-sasl)).
