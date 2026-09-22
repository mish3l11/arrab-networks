/*
عرّاب الشبكات
Copyright (c) 2026 Mishal AL-Mishal
All Rights Reserved.
*/

/* =========================================
Terminal Elements
========================================= */

const terminalOutput = document.getElementById("terminalOutput");
const terminalInput = document.getElementById("terminalInput");
const terminalForm = document.getElementById("terminalForm");
const terminalPrompt = document.getElementById("terminalPrompt");
const terminalModel = document.getElementById("terminalModel");
const deviceName = document.getElementById("deviceName");
const resetTerminal = document.getElementById("resetTerminal");

const deviceButtons =
document.querySelectorAll(".terminal-device");

const commandChips =
document.getElementById("commandChips");

const faultScenarioButtons =
document.querySelectorAll(".fault-scenario-button");

const faultScenarioStatus =
document.getElementById("faultScenarioStatus");


/* =========================================
Terminal State
========================================= */

let currentDevice = "cisco";
let currentMode = "user";
let currentInterface = null;

let history = [];
let historyIndex = -1;

let configuration = null;

let activeScenario = null;


/* =========================================
Device Information
========================================= */

const devices = {

cisco: {
hostname: "SW1",
model: "Cisco IOS"
},

huawei: {
hostname: "SW1",
model: "Huawei VRP"
}

};


/* =========================================
Supported Commands
========================================= */

const supportedCommands = {

cisco: [
"enable",
"configure terminal",
"show version",
"show vlan brief",
"show interfaces",
"show ip interface brief",
"show running-config",
"show arp",
"show mac address-table",
"ping 192.168.10.1",
"?"
],

huawei: [
"system-view",
"display version",
"display vlan",
"display interface brief",
"display ip interface brief",
"display current-configuration",
"display arp",
"display mac-address",
"ping 192.168.10.1",
"?"
]

};


/* =========================================
Cisco Configuration
========================================= */

function createCiscoConfig() {

return {

hostname: "SW1",

vlans: {

"1": {
name: "default"
},

"10": {
name: "USERS"
},

"20": {
name: "SERVERS"
},

"30": {
name: "VOICE"
}

},

interfaces: {

"GigabitEthernet0/1": {
status: "up",
vlan: "10",
ip: "",
mask: "",
description: ""
},

"GigabitEthernet0/2": {
status: "up",
vlan: "20",
ip: "",
mask: "",
description: ""
},

"GigabitEthernet0/3": {
status: "administratively down",
vlan: "1",
ip: "",
mask: "",
description: ""
}

},

vlanInterfaces: {

"Vlan10": {
status: "up",
ip: "192.168.10.1",
mask: "255.255.255.0"
},

"Vlan20": {
status: "up",
ip: "192.168.20.1",
mask: "255.255.255.0"
}

}

};

}


/* =========================================
Huawei Configuration
========================================= */

function createHuaweiConfig() {

return {

hostname: "SW1",

vlans: {

"1": {
name: "default"
},

"10": {
name: "USERS"
},

"20": {
name: "SERVERS"
},

"30": {
name: "VOICE"
}

},

interfaces: {

"GigabitEthernet0/0/1": {
status: "up",
vlan: "10",
ip: "",
mask: "",
description: ""
},

"GigabitEthernet0/0/2": {
status: "up",
vlan: "20",
ip: "",
mask: "",
description: ""
},

"GigabitEthernet0/0/3": {
status: "administratively down",
vlan: "1",
ip: "",
mask: "",
description: ""
}

},

vlanInterfaces: {

"Vlanif10": {
status: "up",
ip: "192.168.10.1",
mask: "255.255.255.0"
},

"Vlanif20": {
status: "up",
ip: "192.168.20.1",
mask: "255.255.255.0"
}

}

};

}


/* =========================================
Start Terminal
========================================= */

function startTerminal() {

terminalOutput.innerHTML = "";

currentMode = "user";
currentInterface = null;

history = [];
historyIndex = -1;

updatePrompt();
updateCommandChips();

printLine(
"==========================================",
"terminal-info"
);

printLine(
" عرّاب الشبكات - Terminal",
"terminal-info"
);

printLine(
"==========================================",
"terminal-info"
);

printLine(
`Connected to ${devices[currentDevice].model}`,
"terminal-success"
);

printLine(
`Device: ${devices[currentDevice].hostname}`,
"terminal-info"
);

printLine(
"Type ? for available commands.",
"terminal-info"
);

printLine(
"",
"terminal-info"
);

if (faultScenarioStatus && !activeScenario) {

faultScenarioStatus.textContent =
"اختر أحد الأعطال للبدء.";

}

terminalInput.focus();

}


/* =========================================
Prompt
========================================= */

function updatePrompt() {

const hostname =
configuration?.hostname ||
devices[currentDevice].hostname;

if (currentDevice === "cisco") {

if (currentMode === "user") {

terminalPrompt.textContent =
`${hostname}>`;

} else if (currentMode === "privileged") {

terminalPrompt.textContent =
`${hostname}#`;

} else if (currentMode === "config") {

terminalPrompt.textContent =
`${hostname}(config)#`;

} else if (currentMode === "interface") {

terminalPrompt.textContent =
`${hostname}(config-if)#`;

} else if (currentMode === "vlan") {

terminalPrompt.textContent =
`${hostname}(config-vlan)#`;

}

} else {

if (currentMode === "user") {

terminalPrompt.textContent =
`<${hostname}>`;

} else if (
currentMode === "privileged" ||
currentMode === "config"
) {

terminalPrompt.textContent =
`[${hostname}]`;

} else if (currentMode === "interface") {

terminalPrompt.textContent =
`[${hostname}-GigabitEthernet]`;

} else if (currentMode === "vlan") {

terminalPrompt.textContent =
`[${hostname}-VLAN]`;

}

}

}


/* =========================================
Print
========================================= */

function printLine(text, className = "") {

const line =
document.createElement("div");

line.className =
`terminal-line ${className}`;

line.textContent = text;

terminalOutput.appendChild(line);

terminalOutput.scrollTop =
terminalOutput.scrollHeight;

}


/* =========================================
Normalize Command
========================================= */

function normalizeCommand(command) {

return command
.trim()
.replace(/\s+/g, " ")
.toLowerCase();

}


/* =========================================
IPv4 Validation
========================================= */

function isValidIPv4(ip) {

const parts =
ip.split(".");

if (parts.length !== 4) {
return false;
}

return parts.every(function (part) {

if (!/^\d+$/.test(part)) {
return false;
}

const number =
Number(part);

return (
number >= 0 &&
number <= 255
);

});

}


/* =========================================
Subnet Mask Validation
========================================= */

function isValidSubnetMask(mask) {

if (!isValidIPv4(mask)) {
return false;
}

const parts =
mask
.split(".")
.map(Number);

const binary =
parts
.map(function (part) {

return part
.toString(2)
.padStart(8, "0");

})
.join("");

return /^1*0*$/.test(binary);

}


/* =========================================
Prefix To Subnet Mask
========================================= */

function prefixToSubnetMask(prefix) {

if (prefix === 0) {
return "0.0.0.0";
}

const binary =
"1".repeat(prefix) +
"0".repeat(32 - prefix);

const octets = [];

for (
let i = 0;
i < 32;
i += 8
) {

octets.push(
parseInt(
binary.substring(i, i + 8),
2
)
);

}

return octets.join(".");

}


/* =========================================
Parse IP Address Command
========================================= */

function parseIpAddressCommand(command) {

const value =
command
.substring("ip address ".length)
.trim();

if (!value) {

return {
valid: false,
message: "Invalid IP address."
};

}


/* -----------------------------------------
CIDR format

Example:
ip address 192.168.50.1/24
----------------------------------------- */

if (value.includes("/")) {

const parts =
value.split("/");

if (parts.length !== 2) {

return {
valid: false,
message: "Invalid IP address."
};

}

const ip =
parts[0].trim();

const prefix =
Number(
parts[1].trim()
);

if (!isValidIPv4(ip)) {

return {
valid: false,
message: "Invalid IP address."
};

}

if (
!Number.isInteger(prefix) ||
prefix < 0 ||
prefix > 32
) {

return {
valid: false,
message: "Invalid subnet prefix."
};

}

return {

valid: true,

ip: ip,

mask:
prefixToSubnetMask(prefix)

};

}


/* -----------------------------------------
Normal format

Example:
ip address
192.168.50.1
255.255.255.0
----------------------------------------- */

const parts =
value.split(/\s+/);

if (parts.length !== 2) {

return {
valid: false,
message:
"Use: ip address <IP> <MASK>"
};

}

const ip =
parts[0];

const mask =
parts[1];

if (!isValidIPv4(ip)) {

return {
valid: false,
message: "Invalid IP address."
};

}

if (!isValidSubnetMask(mask)) {

return {
valid: false,
message: "Invalid subnet mask."
};

}

return {

valid: true,

ip: ip,

mask: mask

};

}


/* =========================================
Execute Command
========================================= */

function executeCommand(command) {

const normalized =
normalizeCommand(command);

if (!normalized) {
return;
}

printLine(
`${terminalPrompt.textContent} ${command}`,
"terminal-command"
);

history.push(command);

historyIndex =
history.length;

if (currentDevice === "cisco") {

executeCiscoCommand(
normalized
);

} else {

executeHuaweiCommand(
normalized
);

}

checkFaultScenario();

}


/* =========================================
Cisco Commands
========================================= */

function executeCiscoCommand(command) {

/* USER MODE */

if (currentMode === "user") {

if (command === "?") {

printLine(
"enable Enter privileged EXEC mode",
"terminal-info"
);

printLine(
"ping Test network connectivity",
"terminal-info"
);

printLine(
"? Show available commands",
"terminal-info"
);

return;
}

if (command === "enable") {

currentMode =
"privileged";

updatePrompt();

return;
}

if (command.startsWith("ping ")) {

printCiscoPing(
command.substring(5).trim()
);

return;
}

printLine(
"% Invalid input detected.",
"terminal-error"
);

return;
}


/* PRIVILEGED MODE */

if (currentMode === "privileged") {

if (command === "?") {

printLine(
"configure terminal",
"terminal-info"
);

printLine(
"show version",
"terminal-info"
);

printLine(
"show vlan brief",
"terminal-info"
);

printLine(
"show interfaces",
"terminal-info"
);

printLine(
"show ip interface brief",
"terminal-info"
);

printLine(
"show running-config",
"terminal-info"
);

printLine(
"show arp",
"terminal-info"
);

printLine(
"show mac address-table",
"terminal-info"
);

printLine(
"ping <ip>",
"terminal-info"
);

printLine(
"disable",
"terminal-info"
);

return;
}

if (
command === "configure terminal" ||
command === "conf t"
) {

currentMode =
"config";

updatePrompt();

return;
}

if (command === "disable") {

currentMode =
"user";

updatePrompt();

return;
}

if (command === "exit") {

currentMode =
"user";

updatePrompt();

return;
}

if (command === "show version") {

printCiscoVersion();

return;
}

if (command === "show vlan brief") {

printCiscoVlans();

return;
}

if (command === "show interfaces") {

printCiscoInterfaces();

return;
}

if (
command ===
"show ip interface brief"
) {

printCiscoIpInterfaces();

return;
}

if (
command ===
"show running-config"
) {

printCiscoRunningConfig();

return;
}

if (command === "show arp") {

printCiscoArp();

return;
}

if (
command ===
"show mac address-table"
) {

printCiscoMacTable();

return;
}

if (command.startsWith("ping ")) {

printCiscoPing(
command.substring(5).trim()
);

return;
}

printLine(
"% Invalid input detected.",
"terminal-error"
);

return;
}


/* CONFIG MODE */

if (currentMode === "config") {

if (command === "?") {

printLine(
"hostname <name>",
"terminal-info"
);

printLine(
"vlan <id>",
"terminal-info"
);

printLine(
"interface <name>",
"terminal-info"
);

printLine(
"exit",
"terminal-info"
);

printLine(
"end",
"terminal-info"
);

return;
}

if (command === "exit") {

currentMode =
"privileged";

updatePrompt();

return;
}

if (command === "end") {

currentMode =
"privileged";

currentInterface =
null;

updatePrompt();

return;
}

if (
command.startsWith(
"hostname "
)
) {

const name =
command
.substring(9)
.trim();

if (name) {

configuration.hostname =
name.toUpperCase();

updatePrompt();

printLine(
`Hostname changed to ${configuration.hostname}`,
"terminal-success"
);

}

return;
}

if (
command.startsWith(
"vlan "
)
) {

const vlanId =
command
.substring(5)
.trim();

if (!/^\d+$/.test(vlanId)) {

printLine(
"% Invalid VLAN ID.",
"terminal-error"
);

return;
}

if (
!configuration.vlans[vlanId]
) {

configuration.vlans[vlanId] = {

name:
"VLAN" + vlanId

};

printLine(
`VLAN ${vlanId} created.`,
"terminal-success"
);

}

currentMode =
"vlan";

currentInterface =
`VLAN:${vlanId}`;

updatePrompt();

return;
}

if (
command.startsWith(
"interface "
)
) {

const interfaceName =
normalizeCiscoInterfaceName(
command
.substring(10)
.trim()
);

const found =
findCiscoInterface(
interfaceName
);

if (!found) {

printLine(
"% Interface not found.",
"terminal-error"
);

return;
}

currentMode =
"interface";

currentInterface =
found;

updatePrompt();

return;
}

printLine(
"% Invalid input detected.",
"terminal-error"
);

return;
}


/* VLAN MODE */

if (currentMode === "vlan") {

if (command === "exit") {

currentMode =
"config";

currentInterface =
null;

updatePrompt();

return;
}

if (command === "end") {

currentMode =
"privileged";

currentInterface =
null;

updatePrompt();

return;
}

if (
command.startsWith("name ")
) {

const vlanId =
currentInterface.replace(
"VLAN:",
""
);

const name =
command
.substring(5)
.trim();

if (
configuration.vlans[vlanId]
) {

configuration
.vlans[vlanId]
.name =
name.toUpperCase();

printLine(
`VLAN ${vlanId} name changed.`,
"terminal-success"
);

}

return;
}

printLine(
"% Invalid input detected.",
"terminal-error"
);

return;
}


/* INTERFACE MODE */

if (currentMode === "interface") {

const interfaceData =
configuration.interfaces[
currentInterface
] ||
configuration.vlanInterfaces[
currentInterface
];

if (!interfaceData) {

printLine(
"% Interface not found.",
"terminal-error"
);

return;
}

if (command === "exit") {

currentMode =
"config";

currentInterface =
null;

updatePrompt();

return;
}

if (command === "end") {

currentMode =
"privileged";

currentInterface =
null;

updatePrompt();

return;
}

if (command === "shutdown") {

interfaceData.status =
"administratively down";

printLine(
`${currentInterface} administratively down`,
"terminal-success"
);

return;
}

if (command === "no shutdown") {

interfaceData.status =
"up";

printLine(
`${currentInterface} enabled`,
"terminal-success"
);

return;
}


/* =====================================
IP Address
===================================== */

if (
command.startsWith(
"ip address "
)
) {

const result =
parseIpAddressCommand(
command
);

if (!result.valid) {

printLine(
`% ${result.message}`,
"terminal-error"
);

return;
}

interfaceData.ip =
result.ip;

interfaceData.mask =
result.mask;

printLine(
`IP address ${result.ip} ${result.mask} configured.`,
"terminal-success"
);

return;
}


/* =====================================
Physical Interface
===================================== */

if (
configuration.interfaces[
currentInterface
]
) {

if (command === "switchport mode access") {
    interfaceData.mode = "access";

    printLine(
        "Switchport mode set to access.",
        "terminal-success"
    );

    return;
}

if (command === "switchport mode trunk") {
    interfaceData.mode = "trunk";

    printLine(
        "Switchport mode set to trunk.",
        "terminal-success"
    );

    return;
}

if (command.startsWith("switchport trunk allowed vlan ")) {

    const vlanList = command
        .substring("switchport trunk allowed vlan ".length)
        .trim()
        .split(",");

    for (let i = 0; i < vlanList.length; i++) {

        const vlanId = vlanList[i].trim();

        if (!configuration.vlans[vlanId]) {
            printLine(
                "Error: VLAN " + vlanId + " does not exist.",
                "terminal-error"
            );
            return;
        }
    }

    interfaceData.allowedVlans = vlanList;

    printLine(
        "Trunk VLANs allowed: " + vlanList.join(", ") + ".",
        "terminal-success"
    );

    return;
}

if (
command.startsWith(
"switchport access vlan "
)
) {

const vlanId =
command
.substring(
"switchport access vlan ".length
)
.trim();

if (
!configuration.vlans[
vlanId
]
) {

printLine(
`% Access VLAN ${vlanId} does not exist.`,
"terminal-error"
);

return;
}

interfaceData.vlan =
vlanId;

printLine(
`Access VLAN changed to ${vlanId}.`,
"terminal-success"
);

return;
}

if (
command.startsWith(
"description "
)
) {

interfaceData.description =
command
.substring(12)
.trim();

printLine(
"Description configured.",
"terminal-success"
);

return;
}

}

printLine(
"% Invalid input detected.",
"terminal-error"
);

}

}


/* =========================================
Huawei Commands
========================================= */

function executeHuaweiCommand(command) {

/* USER MODE */

if (currentMode === "user") {

if (command === "?") {

printLine(
"system-view",
"terminal-info"
);

printLine(
"display version",
"terminal-info"
);

printLine(
"display vlan",
"terminal-info"
);

printLine(
"display interface brief",
"terminal-info"
);

printLine(
"display ip interface brief",
"terminal-info"
);

printLine(
"display arp",
"terminal-info"
);

printLine(
"display mac-address",
"terminal-info"
);

printLine(
"ping <ip>",
"terminal-info"
);

return;
}

if (
command === "system-view" ||
command === "sys"
) {

currentMode =
"config";

updatePrompt();

return;
}

if (command.startsWith("ping ")) {

printHuaweiPing(
command.substring(5).trim()
);

return;
}

if (
command ===
"display version"
) {

printHuaweiVersion();

return;
}

if (
command ===
"display vlan"
) {

printHuaweiVlans();

return;
}

if (
command ===
"display interface brief"
) {

printHuaweiInterfaces();

return;
}

if (
command ===
"display ip interface brief"
) {

printHuaweiIpInterfaces();

return;
}

if (command === "display arp") {

printHuaweiArp();

return;
}

if (
command ===
"display mac-address"
) {

printHuaweiMacTable();

return;
}

printLine(
"Error: Unrecognized command.",
"terminal-error"
);

return;
}


/* CONFIG MODE */

if (currentMode === "config") {

if (command === "?") {

printLine(
"sysname <name>",
"terminal-info"
);

printLine(
"vlan <id>",
"terminal-info"
);

printLine(
"interface <name>",
"terminal-info"
);

printLine(
"quit",
"terminal-info"
);

printLine(
"return",
"terminal-info"
);

return;
}

if (command === "quit") {

currentMode =
"user";

currentInterface =
null;

updatePrompt();

return;
}

if (command === "return") {

currentMode =
"user";

currentInterface =
null;

updatePrompt();

return;
}

if (
command.startsWith(
"sysname "
)
) {

const name =
command
.substring(8)
.trim();

if (name) {

configuration.hostname =
name.toUpperCase();

updatePrompt();

printLine(
`sysname changed to ${configuration.hostname}`,
"terminal-success"
);

}

return;
}

if (
command.startsWith("vlan ")
) {

const vlanId =
command
.substring(5)
.trim();

if (!/^\d+$/.test(vlanId)) {

printLine(
"Error: Invalid VLAN ID.",
"terminal-error"
);

return;
}

if (
!configuration.vlans[
vlanId
]
) {

configuration.vlans[
vlanId
] = {

name:
"VLAN" + vlanId

};

printLine(
`VLAN ${vlanId} created.`,
"terminal-success"
);

}

currentMode =
"vlan";

currentInterface =
`VLAN:${vlanId}`;

updatePrompt();

return;
}

if (
command.startsWith(
"interface "
)
) {

const interfaceName =
normalizeHuaweiInterfaceName(
command
.substring(10)
.trim()
);

const found =
findHuaweiInterface(
interfaceName
);

if (!found) {

printLine(
"Error: Interface not found.",
"terminal-error"
);

return;
}

currentMode =
"interface";

currentInterface =
found;

updatePrompt();

return;
}

if (
command ===
"display vlan"
) {

printHuaweiVlans();

return;
}

if (
command ===
"display current-configuration"
) {

printHuaweiRunningConfig();

return;
}

if (
command ===
"display version"
) {

printHuaweiVersion();

return;
}

printLine(
"Error: Unrecognized command.",
"terminal-error"
);

return;
}


/* VLAN MODE */

if (currentMode === "vlan") {

if (command === "quit") {

currentMode =
"config";

currentInterface =
null;

updatePrompt();

return;
}

if (command === "return") {

currentMode =
"user";

currentInterface =
null;

updatePrompt();

return;
}

if (
command.startsWith(
"description "
)
) {

const vlanId =
currentInterface.replace(
"VLAN:",
""
);

const name =
command
.substring(12)
.trim();

if (
configuration.vlans[
vlanId
]
) {

configuration
.vlans[vlanId]
.name =
name.toUpperCase();

printLine(
`VLAN ${vlanId} description changed.`,
"terminal-success"
);

}

return;
}

printLine(
"Error: Unrecognized command.",
"terminal-error"
);

return;
}


/* INTERFACE MODE */

if (currentMode === "interface") {

const interfaceData =
configuration.interfaces[
currentInterface
] ||
configuration.vlanInterfaces[
currentInterface
];

if (!interfaceData) {

printLine(
"Error: Interface not found.",
"terminal-error"
);

return;
}

if (command === "quit") {

currentMode =
"config";

currentInterface =
null;

updatePrompt();

return;
}

if (command === "return") {

currentMode =
"user";

currentInterface =
null;

updatePrompt();

return;
}

if (command === "shutdown") {

interfaceData.status =
"administratively down";

printLine(
`${currentInterface} administratively down`,
"terminal-success"
);

return;
}

if (
command ===
"undo shutdown"
) {

interfaceData.status =
"up";

printLine(
`${currentInterface} enabled`,
"terminal-success"
);

return;
}


/* =====================================
IP Address
===================================== */

if (
command.startsWith(
"ip address "
)
) {

const result =
parseIpAddressCommand(
command
);

if (!result.valid) {

printLine(
`Error: ${result.message}`,
"terminal-error"
);

return;
}

interfaceData.ip =
result.ip;

interfaceData.mask =
result.mask;

printLine(
`IP address ${result.ip} ${result.mask} configured.`,
"terminal-success"
);

return;
}


/* =====================================
Physical Interface
===================================== */

if (
configuration.interfaces[
currentInterface
]
) {

    if (command === "port link-type trunk") {

    interfaceData.mode = "trunk";

    printLine(
        "Port link-type set to trunk.",
        "terminal-success"
    );

    return;
}

if (command.startsWith("port trunk allow-pass vlan ")) {

    const vlanList = command
        .substring("port trunk allow-pass vlan ".length)
        .trim()
        .split(/\s+/);

    for (let i = 0; i < vlanList.length; i++) {

        const vlanId = vlanList[i];

        if (!configuration.vlans[vlanId]) {
            printLine(
                "Error: VLAN " + vlanId + " does not exist.",
                "terminal-error"
            );
            return;
        }
    }

    interfaceData.allowedVlans = vlanList;

    printLine(
        "Trunk VLANs allowed: " + vlanList.join(", ") + ".",
        "terminal-success"
    );

    return;
}


if (
command.startsWith(
"port default vlan "
)
) {

const vlanId =
command
.substring(
"port default vlan ".length
)
.trim();

if (
!configuration.vlans[
vlanId
]
) {

printLine(
`Error: VLAN ${vlanId} does not exist.`,
"terminal-error"
);

return;
}

interfaceData.vlan =
vlanId;

printLine(
`Default VLAN changed to ${vlanId}.`,
"terminal-success"
);

return;
}

if (
command.startsWith(
"description "
)
) {

interfaceData.description =
command
.substring(12)
.trim();

printLine(
"Description configured.",
"terminal-success"
);

return;
}

}

printLine(
"Error: Unrecognized command.",
"terminal-error"
);

}

}


/* =========================================
Interface Name Helpers
========================================= */

function normalizeCiscoInterfaceName(name) {

const value =
name.toLowerCase();

if (
value === "g0/1" ||
value === "gigabitethernet0/1"
) {
return "GigabitEthernet0/1";
}

if (
value === "g0/2" ||
value === "gigabitethernet0/2"
) {
return "GigabitEthernet0/2";
}

if (
value === "g0/3" ||
value === "gigabitethernet0/3"
) {
return "GigabitEthernet0/3";
}

if (
value === "vlan10"
) {
return "Vlan10";
}

if (
value === "vlan20"
) {
return "Vlan20";
}

return name;

}


function normalizeHuaweiInterfaceName(name) {

const value =
name.toLowerCase();

if (
value === "g0/0/1" ||
value === "gigabitethernet0/0/1"
) {
return "GigabitEthernet0/0/1";
}

if (
value === "g0/0/2" ||
value === "gigabitethernet0/0/2"
) {
return "GigabitEthernet0/0/2";
}

if (
value === "g0/0/3" ||
value === "gigabitethernet0/0/3"
) {
return "GigabitEthernet0/0/3";
}

if (
value === "vlanif10"
) {
return "Vlanif10";
}

if (
value === "vlanif20"
) {
return "Vlanif20";
}

return name;

}


/* =========================================
Find Interfaces
========================================= */

function findCiscoInterface(name) {

if (
configuration.interfaces[name]
) {
return name;
}

if (
configuration.vlanInterfaces[name]
) {
return name;
}

return null;

}


function findHuaweiInterface(name) {

if (
configuration.interfaces[name]
) {
return name;
}

if (
configuration.vlanInterfaces[name]
) {
return name;
}

return null;

}


/* =========================================
Cisco Output
========================================= */

function printCiscoVersion() {

printLine(
"Cisco IOS Software, Network Simulator",
"terminal-info"
);

printLine(
"Version 15.2",
"terminal-info"
);

printLine(
`Hostname: ${configuration.hostname}`,
"terminal-info"
);

printLine(
"Uptime: 12 days, 4 hours",
"terminal-info"
);

}


function printCiscoVlans() {

printLine(
"VLAN Name Status Ports",
"terminal-info"
);

printLine(
"---- -------------------------------- --------- ----------------",
"terminal-info"
);

Object.keys(configuration.vlans)
.sort(
(a, b) =>
Number(a) - Number(b)
)
.forEach(function (id) {

const vlan =
configuration.vlans[id];

const ports =
Object.keys(
configuration.interfaces
)
.filter(function (name) {

return (
configuration
.interfaces[name]
.vlan === id
);

})
.join(",");

printLine(
`${id.padEnd(4)} ${vlan.name.padEnd(32)} active ${ports}`,
"terminal-info"
);

});

}


function printCiscoInterfaces() {

printLine(
"Interface Status VLAN IP Address",
"terminal-info"
);

printLine(
"--------------------------------------------------------------",
"terminal-info"
);

Object.keys(
configuration.interfaces
)
.forEach(function (name) {

const data =
configuration
.interfaces[name];

printLine(
`${name.padEnd(22)} ${data.status.padEnd(22)} ${data.vlan.padEnd(5)} ${data.ip || "unassigned"}`,
"terminal-info"
);

});

}


function printCiscoIpInterfaces() {

printLine(
"Interface IP-Address Status",
"terminal-info"
);

printLine(
"------------------------------------------------------------",
"terminal-info"
);

Object.keys(
configuration.interfaces
)
.forEach(function (name) {

const data =
configuration
.interfaces[name];

printLine(
`${name.padEnd(22)} ${(data.ip || "unassigned").padEnd(16)} ${data.status}`,
"terminal-info"
);

});

Object.keys(
configuration.vlanInterfaces
)
.forEach(function (name) {

const data =
configuration
.vlanInterfaces[name];

printLine(
`${name.padEnd(22)} ${(data.ip || "unassigned").padEnd(16)} ${data.status}`,
"terminal-info"
);

});

}


function printCiscoRunningConfig() {

printLine(
"Building configuration...",
"terminal-info"
);

printLine(
"",
"terminal-info"
);

printLine(
`hostname ${configuration.hostname}`,
"terminal-info"
);

Object.keys(
configuration.vlans
)
.forEach(function (id) {

const vlan =
configuration.vlans[id];

printLine(
`vlan ${id}`,
"terminal-info"
);

printLine(
` name ${vlan.name}`,
"terminal-info"
);

});

Object.keys(
configuration.interfaces
)
.forEach(function (name) {

const data =
configuration.interfaces[name];

printLine(
`interface ${name}`,
"terminal-info"
);

if (data.description) {

printLine(
` description ${data.description}`,
"terminal-info"
);

}

if (
data.ip &&
data.mask
) {

printLine(
` ip address ${data.ip} ${data.mask}`,
"terminal-info"
);

}

printLine(
` switchport access vlan ${data.vlan}`,
"terminal-info"
);

if (
data.status ===
"administratively down"
) {

printLine(
" shutdown",
"terminal-info"
);

}

});

Object.keys(
configuration.vlanInterfaces
)
.forEach(function (name) {

const data =
configuration.vlanInterfaces[name];

printLine(
`interface ${name}`,
"terminal-info"
);

if (
data.ip &&
data.mask
) {

printLine(
` ip address ${data.ip} ${data.mask}`,
"terminal-info"
);

}

if (
data.status ===
"administratively down"
) {

printLine(
" shutdown",
"terminal-info"
);

}

});

}


/* =========================================
Cisco ARP
========================================= */

function printCiscoArp() {

printLine(
"Protocol Address Age (min) Hardware Addr",
"terminal-info"
);

printLine(
"Internet 192.168.10.1 - Local",
"terminal-info"
);

printLine(
"Internet 192.168.20.1 - Local",
"terminal-info"
);

}


/* =========================================
Cisco MAC Table
========================================= */

function printCiscoMacTable() {

printLine(
"Vlan Mac Address Type Ports",
"terminal-info"
);

printLine(
"---- ----------- -------- ----------------",
"terminal-info"
);

Object.keys(
configuration.interfaces
)
.forEach(function (name, index) {

const data =
configuration.interfaces[name];

printLine(
`${data.vlan.padEnd(7)} 0000.0000.000${index + 1} DYNAMIC ${name}`,
"terminal-info"
);

});

}


/* =========================================
Cisco Ping
========================================= */

function printCiscoPing(ip) {

printLine(
"Type escape sequence to abort.",
"terminal-info"
);

printLine(
`Sending 5, 100-byte ICMP Echos to ${ip}...`,
"terminal-info"
);

printLine(
"!!!!!",
"terminal-success"
);

printLine(
"Success rate is 100 percent (5/5)",
"terminal-success"
);

}


/* =========================================
Huawei Output
========================================= */

function printHuaweiVersion() {

printLine(
"Huawei Versatile Routing Platform Software",
"terminal-info"
);

printLine(
"Version: VRP Simulator V8",
"terminal-info"
);

printLine(
`sysname: ${configuration.hostname}`,
"terminal-info"
);

}


function printHuaweiVlans() {

printLine(
"The total number of VLANs is : " +
Object.keys(
configuration.vlans
).length,
"terminal-info"
);

printLine(
"VID VLAN Name",
"terminal-info"
);

printLine(
"--------------------------------",
"terminal-info"
);

Object.keys(
configuration.vlans
)
.sort(
(a, b) =>
Number(a) - Number(b)
)
.forEach(function (id) {

const vlan =
configuration.vlans[id];

printLine(
`${id.padEnd(5)} ${vlan.name}`,
"terminal-info"
);

});

}


function printHuaweiInterfaces() {

printLine(
"Interface PHY VLAN IP Address",
"terminal-info"
);

printLine(
"------------------------------------------------------------",
"terminal-info"
);

Object.keys(
configuration.interfaces
)
.forEach(function (name) {

const data =
configuration.interfaces[name];

const phy =
data.status === "up"
? "up"
: "down";

printLine(
`${name.padEnd(28)} ${phy.padEnd(5)} ${data.vlan.padEnd(5)} ${data.ip || "unassigned"}`,
"terminal-info"
);

});

}


function printHuaweiIpInterfaces() {

printLine(
"Interface IP Address Status",
"terminal-info"
);

printLine(
"------------------------------------------------------------",
"terminal-info"
);

Object.keys(
configuration.interfaces
)
.forEach(function (name) {

const data =
configuration.interfaces[name];

printLine(
`${name.padEnd(22)} ${(data.ip || "unassigned").padEnd(16)} ${data.status}`,
"terminal-info"
);

});

Object.keys(
configuration.vlanInterfaces
)
.forEach(function (name) {

const data =
configuration.vlanInterfaces[name];

printLine(
`${name.padEnd(22)} ${(data.ip || "unassigned").padEnd(16)} ${data.status}`,
"terminal-info"
);

});

}


function printHuaweiRunningConfig() {

printLine(
"Current configuration:",
"terminal-info"
);

printLine(
"",
"terminal-info"
);

printLine(
`sysname ${configuration.hostname}`,
"terminal-info"
);

Object.keys(
configuration.vlans
)
.forEach(function (id) {

const vlan =
configuration.vlans[id];

printLine(
`vlan ${id}`,
"terminal-info"
);

printLine(
` description ${vlan.name}`,
"terminal-info"
);

});

Object.keys(
configuration.interfaces
)
.forEach(function (name) {

const data =
configuration.interfaces[name];

printLine(
`interface ${name}`,
"terminal-info"
);

if (
data.ip &&
data.mask
) {

printLine(
` ip address ${data.ip} ${data.mask}`,
"terminal-info"
);

}

printLine(
` port default vlan ${data.vlan}`,
"terminal-info"
);

if (data.description) {

printLine(
` description ${data.description}`,
"terminal-info"
);

}

if (
data.status ===
"administratively down"
) {

printLine(
" shutdown",
"terminal-info"
);

}

});

Object.keys(
configuration.vlanInterfaces
)
.forEach(function (name) {

const data =
configuration.vlanInterfaces[name];

printLine(
`interface ${name}`,
"terminal-info"
);

if (
data.ip &&
data.mask
) {

printLine(
` ip address ${data.ip} ${data.mask}`,
"terminal-info"
);

}

if (
data.status ===
"administratively down"
) {

printLine(
" shutdown",
"terminal-info"
);

}

});

}


/* =========================================
Huawei ARP
========================================= */

function printHuaweiArp() {

printLine(
"IP ADDRESS MAC ADDRESS INTERFACE",
"terminal-info"
);

printLine(
"192.168.10.1 Local Vlanif10",
"terminal-info"
);

printLine(
"192.168.20.1 Local Vlanif20",
"terminal-info"
);

}


/* =========================================
Huawei MAC Table
========================================= */

function printHuaweiMacTable() {

printLine(
"MAC Address VLAN Interface",
"terminal-info"
);

Object.keys(
configuration.interfaces
)
.forEach(function (name, index) {

const data =
configuration.interfaces[name];

printLine(
`0000-0000-000${index + 1} ${data.vlan.padEnd(5)} ${name}`,
"terminal-info"
);

});

}


/* =========================================
Huawei Ping
========================================= */

function printHuaweiPing(ip) {

printLine(
`PING ${ip}: 56 data bytes`,
"terminal-info"
);

printLine(
`Reply from ${ip}: bytes=56 Sequence=1 ttl=128 time<1 ms`,
"terminal-success"
);

printLine(
`Reply from ${ip}: bytes=56 Sequence=2 ttl=128 time<1 ms`,
"terminal-success"
);

printLine(
`Reply from ${ip}: bytes=56 Sequence=3 ttl=128 time<1 ms`,
"terminal-success"
);

printLine(
"Success rate is 100 percent (3/3)",
"terminal-success"
);

}


/* =========================================
Command Chips
========================================= */

function updateCommandChips() {

if (!commandChips) {
return;
}

commandChips.innerHTML = "";

supportedCommands[currentDevice]
.forEach(function (command) {

const button =
document.createElement("button");

button.type =
"button";

button.dataset.command =
command;

button.textContent =
command;

button.addEventListener(
"click",
function () {

terminalInput.value =
command;

terminalInput.focus();

}
);

commandChips.appendChild(
button
);

});

}


/* =========================================
Fault Scenarios
========================================= */

function startFaultScenario(scenario) {

activeScenario =
scenario;

configuration =
currentDevice === "cisco"
? createCiscoConfig()
: createHuaweiConfig();

const interfaceName =
currentDevice === "cisco"
? "GigabitEthernet0/3"
: "GigabitEthernet0/0/3";

const accessInterface =
currentDevice === "cisco"
? "GigabitEthernet0/1"
: "GigabitEthernet0/0/1";

const vlanInterface =
currentDevice === "cisco"
? "Vlan10"
: "Vlanif10";


/* Fault 1 */

if (
scenario ===
"shutdown-port"
) {

configuration
.interfaces[
interfaceName
]
.status =
"administratively down";

showScenarioMessage(
"🔴 تم تشغيل العطل: منفذ Shutdown. ابحث عن المنفذ المتوقف وأعد تفعيله."
);

}


/* Fault 2 */

if (
scenario ===
"wrong-vlan"
) {

configuration
.interfaces[
accessInterface
]
.vlan =
"20";

showScenarioMessage(
"🟠 تم تشغيل العطل: VLAN خاطئة. اكتشف الـ VLAN الصحيحة وعدّلها."
);

}


/* Fault 3 */

if (
scenario ===
"missing-vlan"
) {

configuration
.interfaces[
accessInterface
]
.vlan =
"40";

delete configuration.vlans["40"];

showScenarioMessage(
"🟡 تم تشغيل العطل: VLAN 40 غير موجودة. أنشئها ثم اضبط المنفذ عليها."
);

}


/* Fault 4 */

if (
scenario ===
"interface-down"
) {

configuration
.vlanInterfaces[
vlanInterface
]
.status =
"administratively down";

showScenarioMessage(
"🔵 تم تشغيل العطل: VLAN Interface غير مفعّل. افحص الحالة وأعد تفعيله."
);

}


/* Fault 5 */

if (
scenario ===
"svi-error"
) {

configuration
.vlanInterfaces[
vlanInterface
]
.ip =
"192.168.99.1";

showScenarioMessage(
"🟣 تم تشغيل العطل: عنوان IP الخاص بـ VLAN Interface غير صحيح."
);

}


startTerminal();

terminalInput.focus();

}


/* =========================================
Scenario Status
========================================= */

function showScenarioMessage(message) {

if (!faultScenarioStatus) {
return;
}

faultScenarioStatus.textContent =
message;

}


/* =========================================
Fault Completion Checker
========================================= */

function checkFaultScenario() {

if (!activeScenario) {
return;
}

const accessInterface =
currentDevice === "cisco"
? "GigabitEthernet0/1"
: "GigabitEthernet0/0/1";

const shutdownInterface =
currentDevice === "cisco"
? "GigabitEthernet0/3"
: "GigabitEthernet0/0/3";

const vlanInterface =
currentDevice === "cisco"
? "Vlan10"
: "Vlanif10";

let completed =
false;


/* Fault 1 */

if (
activeScenario ===
"shutdown-port" &&
configuration.interfaces[
shutdownInterface
].status === "up"
) {

completed =
true;

}


/* Fault 2 */

if (
activeScenario ===
"wrong-vlan" &&
configuration.interfaces[
accessInterface
].vlan === "10"
) {

completed =
true;

}


/* Fault 3 */

if (
activeScenario ===
"missing-vlan" &&
configuration.vlans["40"] &&
configuration.interfaces[
accessInterface
].vlan === "40"
) {

completed =
true;

}


/* Fault 4 */

if (
activeScenario ===
"interface-down" &&
configuration.vlanInterfaces[
vlanInterface
].status === "up"
) {

completed =
true;

}


/* Fault 5 */

if (
activeScenario ===
"svi-error" &&
configuration.vlanInterfaces[
vlanInterface
].ip ===
"192.168.10.1" &&
configuration.vlanInterfaces[
vlanInterface
].mask ===
"255.255.255.0"
) {

completed =
true;

}


if (completed) {

showScenarioMessage(
"✅ ممتاز! تم اكتشاف العطل وإصلاحه بنجاح."
);

printLine(
"==========================================",
"terminal-success"
);

printLine(
"✅ FAULT RESOLVED",
"terminal-success"
);

printLine(
"تم إصلاح العطل التدريبي بنجاح.",
"terminal-success"
);

printLine(
"==========================================",
"terminal-success"
);

activeScenario =
null;

}

}


/* =========================================
Device Switching
========================================= */

deviceButtons.forEach(
function (button) {

button.addEventListener(
"click",
function () {

deviceButtons.forEach(
function (btn) {

btn.classList.remove(
"active"
);

}
);

button.classList.add(
"active"
);

currentDevice =
button.dataset.device;

configuration =
currentDevice === "cisco"
? createCiscoConfig()
: createHuaweiConfig();

activeScenario =
null;

if (
currentDevice ===
"cisco"
) {

terminalModel.textContent =
"Cisco IOS";

deviceName.textContent =
"Switch";

} else {

terminalModel.textContent =
"Huawei VRP";

deviceName.textContent =
"Switch";

}

startTerminal();

}
);

}
);


/* =========================================
Reset Terminal
========================================= */

if (resetTerminal) {

resetTerminal.addEventListener(
"click",
function () {

activeScenario =
null;

configuration =
currentDevice === "cisco"
? createCiscoConfig()
: createHuaweiConfig();

startTerminal();

}
);

}


/* =========================================
Terminal Form
========================================= */

if (terminalForm) {

terminalForm.addEventListener(
"submit",
function (event) {

event.preventDefault();

const command =
terminalInput.value.trim();

if (!command) {
return;
}

executeCommand(
command
);

terminalInput.value =
"";

}
);

}


/* =========================================
Command History
========================================= */

if (terminalInput) {

terminalInput.addEventListener(
"keydown",
function (event) {

if (
event.key ===
"ArrowUp"
) {

event.preventDefault();

if (
history.length === 0
) {
return;
}

historyIndex =
Math.max(
0,
historyIndex - 1
);

terminalInput.value =
history[
historyIndex
];

}


if (
event.key ===
"ArrowDown"
) {

event.preventDefault();

if (
history.length === 0
) {
return;
}

historyIndex =
Math.min(
history.length,
historyIndex + 1
);

if (
historyIndex >=
history.length
) {

terminalInput.value =
"";

} else {

terminalInput.value =
history[
historyIndex
];

}

}

}
);

}


/* =========================================
Fault Buttons
========================================= */

faultScenarioButtons.forEach(
function (button) {

button.addEventListener(
"click",
function () {

const scenario =
button.dataset.scenario;

startFaultScenario(
scenario
);

}
);

}
);


/* =========================================
Initial Configuration
========================================= */

configuration =
createCiscoConfig();


/* =========================================
Start
========================================= */

startTerminal();