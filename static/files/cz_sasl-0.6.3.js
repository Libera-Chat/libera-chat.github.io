/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Authors:
 *  * Svetlana Tkachenko svetlana@members.fsf.org
    * David Volk moz@vovo.id.au

 */
/*
 * SASL plugin for ChatZilla.
 *
 * ChatZilla is a clean, easy to use and highly extensible Internet Relay Chat (IRC) client.
 * Get it here: https://addons.mozilla.org/addon/16
 * Standalone version here: http://chatzilla.rdmsoft.com/xulrunner/
 *
 * How do I install scripts?
 * http://chatzilla.hacksrus.com/faq/#install-script
 *
 * *****************************************************************************************
 *
 * Plugin usage:
 *
 * /sasl Username Password      Sets SASL username and password for the active server.
 * /sasl-enable, /sasl-disable  Toggles SASL status for the active server.
 * /sasl                        Shows SASL status for the active server.
 *
 * *****************************************************************************************
 *

Change log

0.6.3 (2016-03-31)

 * Added author information.

0.6.2

 * Code intent, formatting changes.

0.6.1
 
 * Added multi-network support. Incompatible with version 0.5.
 * Added MPL licence header.

0.5.

 * Stability bug fixes.

0.4.

 * Initial release

Raw SASL.

~$ telnet irc.freenode.net 6667
Trying 78.40.125.4...
Connected to chat.freenode.net.
Escape character is '^]'.
:barjavel.freenode.net NOTICE * :*** Looking up your hostname...
:barjavel.freenode.net NOTICE * :*** Checking Ident
:barjavel.freenode.net NOTICE * :*** Found your hostname
CAP LS
NICK test
USER test test irc.freenode.net :test
:barjavel.freenode.net NOTICE * :*** No Ident response
:barjavel.freenode.net CAP * LS :identify-msg multi-prefix sasl
CAP REQ :multi-prefix sasl
:barjavel.freenode.net CAP test ACK :multi-prefix sasl 
AUTHENTICATE PLAIN
AUTHENTICATE +
AUTHENTICATE R3...WYx <-- 'nick\0nick\0pass' encoded base64
:barjavel.freenode.net 900 test test!test@unaffiliated.test acnt :You are now logged in as Gryllida.
:barjavel.freenode.net 903 test :SASL authentication successful
CAP END

 */

plugin.id = "cz_sasl";

plugin.init =
function initPlugin(glob) {
	plugin.major = 0;
	plugin.minor = 6.2;
	plugin.version = plugin.major + "." + plugin.minor;
	plugin.description = "Adds SASL authentication support. To setup, connect to a network, run |/sasl|";

	plugin.prefary = plugin.prefary.concat([
		["saslEnabled", JSON.stringify({})],
		["saslUsername", JSON.stringify({})],
		["saslPassword", JSON.stringify({})],
		["saslProceedOnFail", JSON.stringify({})]
	]);

	plugin.cmdary =
		[   /* comand name   function                 flags                          usage*/
		["sasl",          plugin.cmdSasl,          CMD_NEED_NET | CMD_CONSOLE,    "[<username>] [<password>]"],
		["sasl-disable",  plugin.cmdSaslDisable,   CMD_NEED_NET | CMD_CONSOLE,    ""],
		["sasl-enable",   plugin.cmdSaslEnable,    CMD_NEED_NET | CMD_CONSOLE,    ""]
	];
	client.commandManager.defineCommands(plugin.cmdary);
	display("Run |/help sasl| to get started. Version 0.6 is " + replaceColorCodes ('%B') + "NOT" + replaceColorCodes ('%B') + " backwards compatible.");

	return "OK";
};

plugin.prefSet = function prefSet(pref,host,value){
	var obj = JSON.parse(plugin.prefs[pref]);
	obj[host]=value;
	plugin.prefs[pref] = JSON.stringify(obj);
}
plugin.prefGet = function prefGet(pref,host){
	var obj = JSON.parse(plugin.prefs[pref]);
	return obj[host];
}

// Sets sasl username and password, or shows SASL status.
plugin.cmdSasl = 
function cmdSasl(e) {
	var hostname = e.server.hostname;
	if(e.username && e.password) {
		plugin.prefSet('saslEnabled',hostname, true);
		plugin.prefSet('saslUsername',hostname, e.username);
		plugin.prefSet('saslPassword',hostname, e.password);
		plugin.prefSet('saslProceedOnFail',hostname, false);
		plugin.showSasl(e);
	} else {
		plugin.showSasl(e);
	}
};

// Shows SASL status on current server
plugin.showSasl =
function showSasl(e){
	var hostname = e.server.hostname;
	var status = plugin.prefGet('saslEnabled',hostname) ? "enabled" : "disabled";
	message = "SASL is " + replaceColorCodes ('%B') + status + replaceColorCodes ('%B') + " for " + e.server.hostname + ". ";
	if(plugin.prefGet('saslUsername',hostname)) {
		message += "SASL username is ``" + replaceColorCodes ('%B') + plugin.prefGet('saslUsername',hostname) + replaceColorCodes ('%B') + "''.";
	} else {
		message += "SASL username is not set.";
	}
	e.server.parent.display(message);
};

// Disables SASL on active server
plugin.cmdSaslDisable = 
function cmdSaslDisable(e){
	plugin.prefSet('saslEnabled',e.server.hostname,false);
	plugin.showSasl(e);
};

// Enables SASL on active server
plugin.cmdSaslEnable = 
function cmdSaslEnable(e){
	plugin.prefSet('saslEnabled',e.server.hostname,true);
	plugin.showSasl(e);
};


plugin.enable =
function enablePlugin(status) {
	client.eventPump.addHook([{ set: "server", type: "parseddata" }], plugin.onData, plugin.id + "-hook-data");
	client.eventPump.addHook([{ set: "server", type: "connect" }], plugin.onConnect, plugin.id + "-hook-connect");
	client.commandManager.commands.sasl.help = "Use |/sasl-enable| and |/sasl-disable| to toggle status, and |/sasl Username Password| to set your credentials " + replaceColorCodes ('%B') + "at the currently active server." + replaceColorCodes ('%B');

	return true;
};

plugin.disable =
function disablePlugin(status) {
	client.eventPump.removeHookByName(plugin.id + "-hook-data");
	client.eventPump.removeHookByName(plugin.id + "-hook-connect");

	return true;
};

// Requests CAP list onconnect
plugin.onConnect =
function onConnect(e) {
    if(plugin.prefGet('saslEnabled',e.server.hostname)){
        e.server.performSASLChecks = true;
        e.server.sendData("CAP LS\n");
    }
};

plugin.onData =
function onData(e) {
//    e.server.parent.display(e.data);                                                     // XXX DEBUG ONLY
    if (!e.server.performSASLChecks) {
        return;
    }

    if (e.data === "AUTHENTICATE +") {
        // Response to "AUTHENTICATE" command. Server has given us the OK to authenticate.
        var username = plugin.prefGet('saslUsername',e.server.hostname);
        var password = plugin.prefGet('saslPassword',e.server.hostname);
        e.server.parent.display("SASL: Authenticating as " + username);
        var auth = btoa(username + '\0' + username + '\0' + password);
        e.server.sendData("AUTHENTICATE " + auth + "\n");
        return;
    }

    switch (e.params[0]) {
        case "CAP":
            // Response to CAP command.
            if (e.params[2] === "LS") {
                // Response to CAP LS command: listing of extended capabilities.
                var capList = e.params[3];
                e.server.parent.display("This server supports extended capabilities: " + capList);

                capList = capList.split(" ");
                if (capList.indexOf("sasl") !== -1) {
                    e.server.sendData("CAP REQ :sasl\n");
                }

                // We don't want to show the user the raw message now.
                return true;
            }

            // Stupid check.
            if (e.params[2] === "ACK" && (e.params[3] === "sasl" || e.params[3] === "sasl ")  ) {
                // Response to "CAP REQ :sasl". Start authentication process.
                e.server.sendData("AUTHENTICATE PLAIN\n");
            }

            break;

        case "903":
            // Authentication succeeded, continue connecting.
            e.server.performSASLChecks = false;
            e.server.sendData("CAP END\n");
            break;

        case "904": case "905":
            // Authentication failed.
            e.server.performSASLChecks = false;
            e.server.sendData("CAP END\n");

            e.server.parent.display("SASL authentication failed - invalid username or password. " +
                    "Please use the account name (not a nick) as the username, and try again.", "WARNING");
            plugin.showSasl(e);

            if (!plugin.prefGet('saslProceedOnFail',e.server.hostname)) {
                // Disconnect if we're configured to stop if we fail.
                e.server.parent.dispatch("cancel");
            }

            break;
    }
};

