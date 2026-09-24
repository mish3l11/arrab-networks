/* =========================================================
عرّاب الشبكات - CLI Terminal
Cisco IOS + Huawei VRP
Full / Abbreviated Commands
========================================================= */

const terminalOutput = document.getElementById("terminalOutput");
const terminalInput = document.getElementById("terminalInput");
const terminalForm = document.getElementById("terminalForm");
const terminalPrompt = document.getElementById("terminalPrompt");
const terminalModel = document.getElementById("terminalModel");
const deviceName = document.getElementById("deviceName");
const resetTerminal = document.getElementById("resetTerminal");
const deviceButtons = document.querySelectorAll("[data-device]");

/* =========================================================
تصغير شاشة الأوامر
========================================================= */

if (terminalOutput) {
terminalOutput.style.maxHeight = "440px";
terminalOutput.style.overflowY = "auto";
}

/* =========================================================
الحالة
========================================================= */

let currentDevice = "cisco";
let currentMode = "user";
let currentInterface = null;
let currentLine = null;
let currentVlan = null;

let commandHistory = [];
let historyIndex = -1;

let terminalMonitor = false;
let terminalLength = 24;
{

if (!commandChips) return;

const commands = availableCommands[currentDevice] || [];

commandChips.innerHTML = "";

commandChips.style.display = "grid";

commands.forEach(([full, short]) => {

const button = document.createElement("button");

button.type = "button";
button.className = "command-chip";

button.innerHTML = `
<span>${full}</span>
<small>${short}</small>
`;

button.title = `استخدام: ${short}`;

button.addEventListener("click", () => {

if (!terminalInput) return;

terminalInput.value = short;

terminalInput.focus();

terminalInput.setSelectionRange(
terminalInput.value.length,
terminalInput.value.length
);
});

commandChips.appendChild(button);
});
}

/* =========================================================
إعدادات الأجهزة
========================================================= */

const devices = {

cisco: {
model: "Cisco IOS",
hostname: "Switch",
version: "15.2(7)E",
prompt: "Switch",

vlans: {
1: {
name: "default",
status: "active"
},
10: {
name: "USERS",
status: "active"
},
20: {
name: "SERVERS",
status: "active"
},
30: {
name: "CAMERAS",
status: "active"
}
},

interfaces: {

"GigabitEthernet0/1": {
ip: "",
mask: "",
status: "up",
protocol: "up",
mode: "access",
vlan: 10,
description: "User Port",
shutdown: false
},

"GigabitEthernet0/2": {
ip: "",
mask: "",
status: "up",
protocol: "up",
mode: "access",
vlan: 20,
description: "Server Port",
shutdown: false
},

"GigabitEthernet0/3": {
ip: "",
mask: "",
status: "up",
protocol: "up",
mode: "trunk",
vlan: 1,
allowedVlans: "10,20,30",
description: "Uplink",
shutdown: false
},

"GigabitEthernet0/4": {
ip: "",
mask: "",
status: "up",
protocol: "up",
mode: "access",
vlan: 30,
description: "Camera Port",
shutdown: false
}
},

svi: {

Vlan10: {
ip: "192.168.10.1",
mask: "255.255.255.0",
status: "up",
protocol: "up"
},

Vlan20: {
ip: "192.168.20.1",
mask: "255.255.255.0",
status: "up",
protocol: "up"
}
},

users: {},

aaa: {
enabled: false
},

ssh: {
enabled: false,
version: 1,
domain: "",
rsa: false
},

vty: {
password: "",
loginLocal: false,
transport: "telnet",
execTimeout: "10 0"
},

passwordEncryption: false,
defaultGateway: "",
staticRoutes: [],

ospf: {
enabled: false,
process: "",
networks: []
},

dhcpPools: {},
acls: {},
etherChannels: {},
portSecurity: {},

stp: {
mode: "pvst",
portfast: [],
bpduguard: []
}
},

huawei: {

model: "Huawei VRP",
hostname: "Huawei",
version: "V200R021C00",
prompt: "Huawei",

vlans: {

1: {
name: "default",
status: "active"
},

10: {
name: "USERS",
status: "active"
},

20: {
name: "SERVERS",
status: "active"
},

30: {
name: "CAMERAS",
status: "active"
}
},

interfaces: {

"GigabitEthernet0/0/1": {
ip: "",
mask: "",
status: "up",
protocol: "up",
mode: "access",
vlan: 10,
description: "User Port",
shutdown: false
},

"GigabitEthernet0/0/2": {
ip: "",
mask: "",
status: "up",
protocol: "up",
mode: "access",
vlan: 20,
description: "Server Port",
shutdown: false
},

"GigabitEthernet0/0/3": {
ip: "",
mask: "",
status: "up",
protocol: "up",
mode: "trunk",
vlan: 1,
allowedVlans: "10 20 30",
description: "Uplink",
shutdown: false
},

"GigabitEthernet0/0/4": {
ip: "",
mask: "",
status: "up",
protocol: "up",
mode: "access",
vlan: 30,
description: "Camera Port",
shutdown: false
}
},

svi: {

Vlanif10: {
ip: "192.168.10.1",
mask: "255.255.255.0",
status: "up",
protocol: "up"
},

Vlanif20: {
ip: "192.168.20.1",
mask: "255.255.255.0",
status: "up",
protocol: "up"
}
},

users: {},

aaa: {
enabled: false
},

ssh: {
enabled: false,
stelnet: false,
domain: "",
rsa: false
},

vty: {
password: "",
authentication: "none",
protocol: "telnet"
},

staticRoutes: [],

ospf: {
enabled: false,
process: "",
networks: []
},

dhcpPools: {},
acls: {},
etherChannels: {},
portSecurity: {},

stp: {
enabled: true,
edgePorts: [],
bpduProtection: false
}
}
};

const device = () => devices[currentDevice];

/* =========================================================
أدوات عامة
========================================================= */

function print(text = "") {

if (!terminalOutput) return;

const line = document.createElement("div");

line.className = "terminal-line";

line.textContent = text;

terminalOutput.appendChild(line);

terminalOutput.scrollTop =
terminalOutput.scrollHeight;
}

function printLines(lines) {
lines.forEach(line => print(line));
}

function clearTerminal() {

if (terminalOutput) {
terminalOutput.innerHTML = "";
}
}

function normalize(value) {

return String(value || "")
.trim()
.replace(/\s+/g, " ");
}

function lower(value) {
return normalize(value).toLowerCase();
}

function tokens(command) {
return lower(command)
.split(" ")
.filter(Boolean);
}

function tokenStarts(token, text) {

return String(text)
.toLowerCase()
.startsWith(
String(token).toLowerCase()
);
}

function hasToken(parts, index, value) {

return parts[index] &&
tokenStarts(parts[index], value);
}

function isNumber(value) {
return /^\d+$/.test(String(value));
}

/* =========================================================
Prompt
========================================================= */

function updatePrompt() {

if (!terminalPrompt) return;

const d = device();

if (currentDevice === "cisco") {

if (currentMode === "user") {
terminalPrompt.textContent =
`${d.hostname}>`;
}

else if (currentMode === "privileged") {
terminalPrompt.textContent =
`${d.hostname}#`;
}

else if (currentMode === "config") {
terminalPrompt.textContent =
`${d.hostname}(config)#`;
}

else if (currentMode === "interface") {
terminalPrompt.textContent =
`${d.hostname}(config-if)#`;
}

else if (currentMode === "vlan") {
terminalPrompt.textContent =
`${d.hostname}(config-vlan)#`;
}

else if (currentMode === "line") {
terminalPrompt.textContent =
`${d.hostname}(config-line)#`;
}

else {
terminalPrompt.textContent =
`${d.hostname}>`;
}
}

else {

if (currentMode === "user") {
terminalPrompt.textContent =
`<${d.hostname}>`;
}

else if (currentMode === "config") {
terminalPrompt.textContent =
`[${d.hostname}]`;
}

else if (currentMode === "interface") {
terminalPrompt.textContent =
`[${d.hostname}-GigabitEthernet]`;
}

else if (currentMode === "vlan") {
terminalPrompt.textContent =
`[${d.hostname}-vlan]`;
}

else if (currentMode === "line") {
terminalPrompt.textContent =
`[${d.hostname}-line]`;
}

else {
terminalPrompt.textContent =
`<${d.hostname}>`;
}
}
}

/* =========================================================
تغيير الجهاز
========================================================= */

function setDevice(type) {

if (!devices[type]) return;

currentDevice = type;

currentMode = "user";
currentInterface = null;
currentLine = null;
currentVlan = null;

commandHistory = [];
historyIndex = -1;

if (terminalModel) {
terminalModel.textContent =
devices[type].model;
}

if (deviceName) {
deviceName.textContent =
devices[type].hostname;
}

clearTerminal();

updatePrompt();


print(`Welcome to ${devices[type].model}`);
print("");
print(`Device: ${devices[type].hostname}`);
print(`Version: ${devices[type].version}`);
print("");

if (type === "cisco") {
print("Press ENTER to get started.");
}

else {
print("Info: The current terminal is ready.");
}

print("");
}

/* =========================================================
Reset
========================================================= */

function resetDevice() {

currentMode = "user";
currentInterface = null;
currentLine = null;
currentVlan = null;

commandHistory = [];
historyIndex = -1;

clearTerminal();

updatePrompt();

print(`Resetting ${device().model}...`);
print("");
print("Terminal reset successfully.");
print("");
}

/* =========================================================
IPv4
========================================================= */

function isValidIPv4(ip) {

const parts = String(ip).split(".");

if (parts.length !== 4) return false;

return parts.every(part => {

if (!/^\d+$/.test(part)) return false;

const n = Number(part);

return n >= 0 && n <= 255;
});
}

function prefixToMask(prefix) {

const p = Number(prefix);

if (
!Number.isInteger(p) ||
p < 0 ||
p > 32
) {
return null;
}

const mask = [];

for (let i = 0; i < 4; i++) {

const remaining = p - i * 8;

if (remaining >= 8) {
mask.push(255);
}

else if (remaining <= 0) {
mask.push(0);
}

else {
mask.push(
256 -
Math.pow(2, 8 - remaining)
);
}
}

return mask.join(".");
}

/* =========================================================
Interface Helpers
========================================================= */

function normalizeInterfaceName(name) {

if (!name) return null;

let value = name.toLowerCase();

value = value
.replace(/^gi/, "gigabitethernet")
.replace(/^g/, "gigabitethernet")
.replace(/^eth/, "ethernet")
.replace(/^fa/, "fastethernet");

if (currentDevice === "cisco") {

if (
/^gigabitethernet\d+\/\d+$/.test(value)
) {
return capitalizeInterface(value);
}
}

if (currentDevice === "huawei") {

if (
/^gigabitethernet\d+\/\d+\/\d+$/.test(value)
) {
return capitalizeInterface(value);
}
}

return name;
}

function capitalizeInterface(value) {

if (!value) return value;

return value.charAt(0).toUpperCase() +
value.slice(1);
}

function findInterface(name) {

const normalized =
normalizeInterfaceName(name);

if (!normalized) return null;

const interfaces =
device().interfaces;

if (interfaces[normalized]) {
return normalized;
}

const wanted =
normalized.toLowerCase();

const match =
Object.keys(interfaces).find(key =>
key.toLowerCase() === wanted
);

if (match) return match;

const partial =
Object.keys(interfaces).find(key =>
key.toLowerCase().startsWith(wanted)
);

return partial || null;
}

function getCurrentInterface() {

if (!currentInterface) return null;

return device().interfaces[currentInterface] || null;
}

/* =========================================================
Cisco Abbreviation Resolver
========================================================= */

function resolveCisco(command) {

let cmd = normalize(command);

if (!cmd) return "";

let p = tokens(cmd);

if (
p.length === 1 &&
[
"e",
"en",
"ena",
"enab",
"enabl",
"enable"
].includes(p[0])
) {
return "enable";
}

if (
p.length === 1 &&
[
"d",
"di",
"dis",
"disable"
].includes(p[0])
) {
return "disable";
}

if (
p[0] === "conf" ||
p[0] === "con" ||
p[0] === "configure"
) {

if (
p[1] &&
[
"t",
"te",
"ter",
"term",
"termin",
"terminal"
].some(x =>
p[1] === x ||
p[1].startsWith(x)
)
) {
return "configure terminal";
}
}

/* SHOW */

if (
["s", "sh", "sho", "show"].includes(p[0])
) {

if (!p[1]) return "show";

if (p[1].startsWith("ver")) {
return "show version";
}

if (
p[1].startsWith("run") ||
p[1] === "r"
) {
return "show running-config";
}

if (p[1].startsWith("star")) {
return "show startup-config";
}

if (p[1].startsWith("vlan")) {

if (
p[2] &&
(
p[2].startsWith("br") ||
p[2].startsWith("brief")
)
) {
return "show vlan brief";
}

return "show vlan";
}

if (p[1].startsWith("int")) {

if (
p[2] &&
(
p[2].startsWith("st") ||
p[2].startsWith("stat")
)
) {
return "show interfaces status";
}

if (
p[2] &&
p[2].startsWith("desc")
) {
return "show interfaces description";
}

return "show interfaces";
}

if (
p[1] === "ip" &&
p[2]
) {

if (p[2].startsWith("int")) {
return "show ip interface brief";
}

if (p[2].startsWith("route")) {
return "show ip route";
}

if (p[2].startsWith("ssh")) {
return "show ip ssh";
}

if (p[2].startsWith("ospf")) {
return "show ip ospf";
}
}

if (p[1].startsWith("arp")) {
return "show arp";
}

if (p[1].startsWith("mac")) {
return "show mac address-table";
}

if (p[1].startsWith("cdp")) {
return "show cdp neighbors";
}

if (p[1].startsWith("lldp")) {
return "show lldp neighbors";
}

if (p[1].startsWith("spanning")) {
return "show spanning-tree";
}

if (p[1].startsWith("ether")) {
return "show etherchannel summary";
}

if (p[1].startsWith("access")) {
return "show access-lists";
}

if (p[1].startsWith("users")) {
return "show users";
}

if (p[1].startsWith("line")) {
return "show line";
}

if (p[1].startsWith("logging")) {
return "show logging";
}

if (p[1].startsWith("port")) {
return "show port-security";
}
}

/* TERMINAL */

if (
["t", "te", "ter", "term", "terminal"]
.includes(p[0])
) {

if (
p[1] &&
[
"m",
"mo",
"mon",
"moni",
"monit",
"monitor"
].some(x =>
p[1].startsWith(x)
)
) {
return "terminal monitor";
}

if (
p[1] &&
(
p[1].startsWith("len") ||
p[1].startsWith("l")
)
) {
return `terminal length ${p[2] || "24"}`;
}

if (
p[1] === "no" &&
p[2] &&
p[2].startsWith("mon")
) {
return "terminal no monitor";
}
}

/* WRITE */

if (
p[0] === "wr" ||
p[0] === "write"
) {

if (
p.length === 1 ||
p[1] === "mem" ||
p[1] === "memory"
) {
return "copy running-config startup-config";
}
}

/* INTERFACE */

if (
[
"i",
"in",
"int",
"inte",
"inter",
"interf",
"interface"
].includes(p[0])
) {

if (p[1]) {
return `interface ${p.slice(1).join(" ")}`;
}
}

/* VLAN */

if (
["v", "vl", "vlan"].includes(p[0]) &&
p[1]
) {
return `vlan ${p[1]}`;
}

/* HOSTNAME */

if (
[
"h",
"ho",
"hos",
"host",
"hostname"
].includes(p[0])
) {
return `hostname ${p.slice(1).join(" ")}`;
}

/* DESCRIPTION */

if (
[
"d",
"de",
"des",
"desc",
"descr",
"description"
].includes(p[0])
) {
return `description ${p.slice(1).join(" ")}`;
}

/* NO SHUTDOWN */

if (
p[0] === "no" &&
p[1] &&
p[1].startsWith("sh")
) {
return "no shutdown";
}

/* SHUTDOWN */

if (
[
"sh",
"shu",
"shut",
"shutd",
"shutdown"
].includes(p[0])
) {
return "shutdown";
}

/* EXIT */

if (
["x", "ex", "exi", "exit"].includes(p[0])
) {
return "exit";
}

/* END */

if (
["en", "end"].includes(p[0]) &&
currentMode !== "user"
) {
return "end";
}

/* PING */

if (
["p", "pi", "pin", "ping"].includes(p[0])
) {
return `ping ${p.slice(1).join(" ")}`;
}

/* SWITCHPORT */

if (
[
"sw",
"swi",
"swit",
"switch",
"switchport"
].includes(p[0])
) {

if (
p[1] &&
["m", "mo", "mod", "mode"].includes(p[1])
) {

if (
p[2] &&
p[2].startsWith("acc")
) {
return "switchport mode access";
}

if (
p[2] &&
p[2].startsWith("tr")
) {
return "switchport mode trunk";
}
}

if (
p[1] &&
(
p[1].startsWith("acc") ||
p[1].startsWith("a")
)
) {

if (
p[2] &&
p[2].startsWith("vlan")
) {
return `switchport access vlan ${p[3] || ""}`.trim();
}
}

if (
p[1] &&
p[1].startsWith("tr")
) {

if (
p[2] &&
p[2].startsWith("all")
) {
return `switchport trunk allowed vlan ${p.slice(3).join(" ")}`;
}

if (
p[2] &&
p[2].startsWith("native")
) {
return `switchport trunk native vlan ${p[3] || ""}`.trim();
}
}
}

/* CHANNEL GROUP */

if (
p[0] === "ch" ||
p[0] === "chan" ||
p[0] === "channel-group"
) {
return `channel-group ${p[1] || ""} mode ${p[2] || "active"}`.trim();
}

/* SPANNING TREE */

if (
p[0] === "sp" ||
p[0] === "span" ||
p[0] === "spanning-tree"
) {
return `spanning-tree ${p.slice(1).join(" ")}`;
}

/* PORT SECURITY */

if (
p[0] === "switchport" &&
p[1] === "port-security"
) {
return cmd;
}

/* USERNAME */

if (
p[0] === "u" ||
p[0] === "user" ||
p[0] === "username"
) {
return `username ${p.slice(1).join(" ")}`;
}

return cmd;
}

/* =========================================================
Huawei Abbreviation Resolver
========================================================= */

function resolveHuawei(command) {

let cmd = normalize(command);

if (!cmd) return "";

let p = tokens(cmd);

/* SYSTEM VIEW */

if (
[
"s",
"sy",
"sys",
"syst",
"system",
"system-view"
].includes(p[0])
) {
return "system-view";
}

/* DISPLAY */

if (
[
"d",
"di",
"dis",
"disp",
"displ",
"display"
].includes(p[0])
) {

if (!p[1]) return "display";

if (p[1].startsWith("ver")) {
return "display version";
}

if (p[1].startsWith("vlan")) {
return "display vlan";
}

if (p[1].startsWith("int")) {

if (
p[2] &&
(
p[2].startsWith("br") ||
p[2].startsWith("brief")
)
) {
return "display interface brief";
}

return "display interface";
}

if (
p[1] === "ip" &&
p[2]
) {

if (p[2].startsWith("int")) {
return "display ip interface brief";
}

if (p[2].startsWith("route")) {
return "display ip routing-table";
}
}

if (p[1].startsWith("cur")) {
return "display current-configuration";
}

if (p[1].startsWith("arp")) {
return "display arp";
}

if (p[1].startsWith("mac")) {
return "display mac-address";
}

if (p[1].startsWith("ospf")) {
return "display ospf peer";
}

if (p[1].startsWith("stp")) {
return "display stp";
}

if (p[1].startsWith("acl")) {
return "display acl";
}

if (p[1].startsWith("dhcp")) {
return "display dhcp";
}
}

/* QUIT */

if (
["q", "qu", "qui", "quit"].includes(p[0])
) {
return "quit";
}

/* RETURN */

if (
["r", "re", "ret", "retu", "return"].includes(p[0])
) {
return "return";
}

/* INTERFACE */

if (
[
"i",
"in",
"int",
"inte",
"inter",
"interface"
].includes(p[0])
) {
return `interface ${p.slice(1).join(" ")}`;
}

/* VLAN */

if (
["v", "vl", "vla", "vlan"].includes(p[0]) &&
p[1]
) {
return `vlan ${p[1]}`;
}

/* SYSNAME */

if (
[
"s",
"sy",
"sys",
"sysn",
"sysna",
"sysname"
].includes(p[0])
) {
return `sysname ${p.slice(1).join(" ")}`;
}

/* UNDO SHUTDOWN */

if (
p[0] === "undo" &&
p[1] &&
p[1].startsWith("sh")
) {
return "undo shutdown";
}

/* SHUTDOWN */

if (
["sh", "shu", "shut", "shutdown"].includes(p[0])
) {
return "shutdown";
}

/* DESCRIPTION */

if (
[
"d",
"de",
"des",
"desc",
"description"
].includes(p[0])
) {
return `description ${p.slice(1).join(" ")}`;
}

/* PING */

if (
["p", "pi", "pin", "ping"].includes(p[0])
) {
return `ping ${p.slice(1).join(" ")}`;
}

/* PORT */

if (
["po", "por", "port"].includes(p[0])
) {

if (
p[1] &&
p[1].startsWith("link") &&
p[2]
) {

if (p[2].startsWith("acc")) {
return "port link-type access";
}

if (p[2].startsWith("tr")) {
return "port link-type trunk";
}
}

if (
p[1] &&
p[1].startsWith("def")
) {
return `port default vlan ${p[3] || p[2] || ""}`.trim();
}

if (
p[1] &&
p[1].startsWith("tr")
) {
return `port trunk allow-pass vlan ${p.slice(4).join(" ")}`;
}
}

/* ETH-TRUNK */

if (
p[0] === "eth-trunk" ||
p[0] === "eth"
) {
return `eth-trunk ${p[1] || ""}`.trim();
}

/* STP */

if (p[0] === "stp") {
return `stp ${p.slice(1).join(" ")}`;
}

/* ACL */

if (p[0] === "acl") {
return cmd;
}

return cmd;
}

/* =========================================================
Command Resolver
========================================================= */

function resolveCommand(command) {

if (currentDevice === "cisco") {
return resolveCisco(command);
}

return resolveHuawei(command);
}

/* =========================================================
Cisco SHOW
========================================================= */

function showCiscoVersion() {

const d = device();

print("");
print(`Cisco IOS Software, ${d.version}`);
print("Copyright (c) Cisco Systems, Inc.");
print(`Hostname: ${d.hostname}`);
print("System uptime: 3 days, 4 hours");
print("");
}

function showCiscoVlans() {

const d = device();

print("");
print("VLAN Name Status Ports");
print("---- -------------------------------- --------- ----------------");

Object.entries(d.vlans).forEach(([id, vlan]) => {

const ports =
Object.entries(d.interfaces)
.filter(([, intf]) =>
intf.mode === "access" &&
String(intf.vlan) === String(id)
)
.map(([name]) =>
name.replace(
"GigabitEthernet",
"Gi"
)
);

print(
`${String(id).padEnd(4)} ` +
`${vlan.name.padEnd(32)} ` +
`${vlan.status.padEnd(9)} ` +
`${ports.join(", ")}`
);
});

print("");
}

function showCiscoInterfaces() {

const d = device();

print("");

Object.entries(d.interfaces).forEach(
([name, intf]) => {

print(
`${name} is ${
intf.shutdown
? "administratively down"
: intf.status
}, line protocol is ${
intf.shutdown
? "down"
: intf.protocol
}`
);

if (intf.description) {
print(
` Description: ${intf.description}`
);
}

if (intf.ip) {
print(
` Internet address is ${intf.ip}`
);
}

print(` Mode: ${intf.mode}`);
print(` VLAN: ${intf.vlan}`);
print("");
}
);
}

function showCiscoInterfaceStatus() {

print("");
print("Port Name Status Vlan");

Object.entries(device().interfaces)
.forEach(([name, intf]) => {

print(
`${name.replace("GigabitEthernet", "Gi").padEnd(9)} ` +
`${(intf.description || "").padEnd(20)} ` +
`${(intf.shutdown ? "disabled" : "connected").padEnd(12)} ` +
`${intf.mode === "trunk" ? "trunk" : intf.vlan}`
);
});

print("");
}

function showCiscoInterfaceDescription() {

print("");
print("Interface Status Protocol Description");

Object.entries(device().interfaces)
.forEach(([name, intf]) => {

print(
`${name.padEnd(22)} ` +
`${(intf.shutdown ? "admin down" : "up").padEnd(14)} ` +
`${(intf.shutdown ? "down" : "up").padEnd(9)} ` +
`${intf.description || ""}`
);
});

print("");
}

function showCiscoIpInterfaceBrief() {

print("");
print("Interface IP-Address OK? Method Status Protocol");

Object.entries(device().interfaces)
.forEach(([name, intf]) => {

print(
`${name.padEnd(22)} ` +
`${(intf.ip || "unassigned").padEnd(15)} ` +
`YES DHCP ${
intf.shutdown
? "administratively down"
: intf.status.padEnd(8)
} ${
intf.shutdown
? "down"
: intf.protocol
}`
);
});

Object.entries(device().svi)
.forEach(([name, svi]) => {

print(
`${name.padEnd(22)} ` +
`${svi.ip.padEnd(15)} ` +
`YES manual ${svi.status.padEnd(8)} ${svi.protocol}`
);
});

print("");
}

function showCiscoRunningConfig() {

const d = device();

print("");
print("Building configuration...");
print("");

print("!");
print(`hostname ${d.hostname}`);

if (d.passwordEncryption) {
print("service password-encryption");
}

if (d.aaa.enabled) {
print("aaa new-model");
}

if (d.ssh.domain) {
print(`ip domain-name ${d.ssh.domain}`);
}

if (d.ssh.rsa) {
print("crypto key generate rsa");
}

if (d.ssh.enabled) {
print("ip ssh version 2");
}

Object.entries(d.users).forEach(
([username, data]) => {

print(
`username ${username} privilege ${data.privilege || 1} secret ${data.secret || "********"}`
);
}
);

if (d.defaultGateway) {
print(
`ip default-gateway ${d.defaultGateway}`
);
}

d.staticRoutes.forEach(route => {

print(
`ip route ${route.network} ${route.mask} ${route.nextHop}`
);
});

Object.entries(d.vlans)
.forEach(([id, vlan]) => {

if (id === "1") return;

print(`vlan ${id}`);
print(` name ${vlan.name}`);
print("!");
});

Object.entries(d.interfaces)
.forEach(([name, intf]) => {

print(`interface ${name}`);

if (intf.description) {
print(
` description ${intf.description}`
);
}

if (intf.mode === "access") {
print(" switchport mode access");
print(
` switchport access vlan ${intf.vlan}`
);
}

if (intf.mode === "trunk") {

print(" switchport mode trunk");

if (intf.allowedVlans) {
print(
` switchport trunk allowed vlan ${intf.allowedVlans}`
);
}
}

if (intf.ip) {
print(
` ip address ${intf.ip} ${intf.mask}`
);
}

if (intf.shutdown) {
print(" shutdown");
}

print("!");
});

print("end");
print("");
}

function showCiscoArp() {

print("");
print("Protocol Address Age (min) Hardware Addr Type Interface");
print("Internet 192.168.10.10 2 0011.2233.4455 ARPA Vlan10");
print("Internet 192.168.20.10 1 00aa.bbcc.ddee ARPA Vlan20");
print("");
}

function showCiscoMac() {

print("");
print(" Mac Address Table");
print("-------------------------------------------");
print("Vlan Mac Address Type Ports");
print("---- ----------- -------- -----");
print(" 10 0011.2233.4455 DYNAMIC Gi0/1");
print(" 20 00aa.bbcc.ddee DYNAMIC Gi0/2");
print(" 30 00ff.1122.3344 DYNAMIC Gi0/4");
print("");
}

function showCiscoRoute() {

print("");
print("Codes: C - connected, S - static, O - OSPF");

print(
"C 192.168.10.0/24 is directly connected, Vlan10"
);

print(
"C 192.168.20.0/24 is directly connected, Vlan20"
);

print("");
}

function showCiscoSSH() {

const d = device();

print("");

if (!d.ssh.enabled) {
print("SSH Disabled");
}

else {
print("SSH Enabled - version 2");
print(
`Domain name: ${d.ssh.domain || "not configured"}`
);
print(
`RSA keys: ${d.ssh.rsa ? "present" : "not generated"}`
);
}

print("");
}

function showCiscoSpanningTree() {

const d = device();

print("");
print(
`Spanning tree enabled protocol ${d.stp.mode}`
);
print("");
print("VLAN0010");
print(" Root ID Priority 24586");
print(" Address 0011.2233.4455");
print("");
print("Interface Role Sts Cost");
print("Gi0/1 Desg FWD 4");
print("Gi0/2 Desg FWD 4");
print("Gi0/3 Root FWD 4");
print("");
}

function showCiscoEtherChannel() {

print("");
print("Group Port-channel Protocol Ports");
print("------+-------------+-----------+----------------");

Object.entries(device().etherChannels)
.forEach(([id, data]) => {

print(
`${id.padEnd(6)} Po${id} ${data.mode || "LACP"} ${data.ports?.join(", ") || "Gi0/1 Gi0/2"}`
);
});

if (
!Object.keys(device().etherChannels).length
) {
print("No EtherChannel configured.");
}

print("");
}

function showCiscoUsers() {

print("");
print("Line User Host(s)");
print("vty 0 local idle");
print("");
}

function showCiscoLine() {

print("");
print("Line Status");
print("0 con 0 READY");
print("vty 0 4 READY");
print("");
}

function showCiscoLogging() {

print("");
print("Syslog logging: enabled");
print("Console logging: level informational");
print(
"Monitor logging: " +
(terminalMonitor ? "enabled" : "disabled")
);
print("");
}

function showCiscoAccessLists() {

print("");

if (!Object.keys(device().acls).length) {
print("No access lists configured.");
}

Object.entries(device().acls)
.forEach(([id, acl]) => {

print(
`Standard IP access list ${id}`
);

acl.rules.forEach(rule => {
print(` ${rule}`);
});
});

print("");
}

function showCiscoPortSecurity() {

print("");
print("Secure Port MaxSecureAddr CurrentAddr");
print("Gi0/1 2 1");
print("Gi0/2 2 1");
print("");
}

/* =========================================================
Huawei SHOW
========================================================= */

function showHuaweiVersion() {

const d = device();

print("");
print("Huawei Versatile Routing Platform Software");
print(
`VRP (R) software, Version ${d.version}`
);
print(`Device name: ${d.hostname}`);
print("System uptime: 3 days, 4 hours");
print("");
}

function showHuaweiVlan() {

print("");
print("The total number of VLANs is:");

Object.entries(device().vlans)
.forEach(([id, vlan]) => {

print(
`VID: ${id} VLAN name: ${vlan.name} Status: ${vlan.status}`
);
});

print("");
}

function showHuaweiInterfaces() {

print("");

Object.entries(device().interfaces)
.forEach(([name, intf]) => {

print(
`${name} current state : ${
intf.shutdown
? "Administratively DOWN"
: "UP"
}`
);

print(
`Line protocol current state : ${
intf.shutdown
? "DOWN"
: "UP"
}`
);

if (intf.description) {
print(
`Description: ${intf.description}`
);
}

if (intf.ip) {
print(
`Internet Address is ${intf.ip}/${maskToPrefix(intf.mask)}`
);
}

print("");
});
}

function showHuaweiInterfaceBrief() {

print("");
print("PHY: Physical");
print("**down: administratively down");
print("");
print("Interface PHY Protocol");

Object.entries(device().interfaces)
.forEach(([name, intf]) => {

print(
`${name.padEnd(33)} ${(intf.shutdown ? "down" : "up").padEnd(5)} ${intf.shutdown ? "down" : "up"}`
);
});

print("");
}

function showHuaweiIpInterfaceBrief() {

print("");
print("Interface IP Address/Mask");

Object.entries(device().interfaces)
.forEach(([name, intf]) => {

print(
`${name.padEnd(33)} ${intf.ip ? `${intf.ip}/${maskToPrefix(intf.mask)}` : "unassigned"}`
);
});

Object.entries(device().svi)
.forEach(([name, svi]) => {

print(
`${name.padEnd(33)} ${svi.ip}/${maskToPrefix(svi.mask || "255.255.255.0")}`
);
});

print("");
}

function showHuaweiCurrentConfig() {

const d = device();

print("");
print("Current configuration:");

print(`sysname ${d.hostname}`);

if (d.ssh.domain) {
print(
`domain-name ${d.ssh.domain}`
);
}

if (d.ssh.stelnet) {
print("stelnet server enable");
}

Object.entries(d.vlans)
.forEach(([id, vlan]) => {

if (id === "1") return;

print(`vlan ${id}`);

if (vlan.name !== `VLAN${id}`) {
print(` name ${vlan.name}`);
}
});

Object.entries(d.interfaces)
.forEach(([name, intf]) => {

print(`interface ${name}`);

if (intf.description) {
print(
` description ${intf.description}`
);
}

if (intf.mode === "trunk") {

print(
" port link-type trunk"
);

if (intf.allowedVlans) {
print(
` port trunk allow-pass vlan ${intf.allowedVlans}`
);
}
}

else {

print(
" port link-type access"
);

print(
` port default vlan ${intf.vlan}`
);
}

if (intf.ip) {
print(
` ip address ${intf.ip} ${maskToPrefix(intf.mask)}`
);
}

if (intf.shutdown) {
print(" shutdown");
}
});

print("");
}

function showHuaweiArp() {

print("");
print("IP ADDRESS MAC ADDRESS EXPIRE(M) TYPE INTERFACE");
print("192.168.10.10 0011-2233-4455 20 D-0 GE0/0/1");
print("192.168.20.10 00aa-bbcc-ddee 15 D-0 GE0/0/2");
print("");
}

function showHuaweiMac() {

print("");
print("MAC Address VLAN/VSI Learned-From Type");
print("0011-2233-4455 10 GE0/0/1 dynamic");
print("00aa-bbcc-ddee 20 GE0/0/2 dynamic");
print("");
}

function showHuaweiRoute() {

print("");
print("Routing Tables: Public");
print("Destination/Mask Proto Pre Cost Flags NextHop");
print("192.168.10.0/24 Direct 0 0 D 192.168.10.1");
print("192.168.20.0/24 Direct 0 0 D 192.168.20.1");

device().staticRoutes.forEach(route => {

print(
`${route.network}/${route.prefix} Static 60 0 RD ${route.nextHop}`
);
});

print("");
}

function showHuaweiOspf() {

print("");
print("OSPF Process:");

if (!device().ospf.enabled) {
print("OSPF is not configured.");
}

else {
print(
`Process ID: ${device().ospf.process}`
);
print("Area 0.0.0.0");
print("Neighbor State: Full");
}

print("");
}

function showHuaweiStp() {

print("");
print("MSTP mode: RSTP");
print("STP Status: Enabled");
print("");
}

function showHuaweiAcl() {

print("");

if (!Object.keys(device().acls).length) {
print("No ACL configured.");
}

Object.entries(device().acls)
.forEach(([id, acl]) => {

print(`Basic ACL ${id}`);

acl.rules.forEach(rule => {
print(` rule ${rule}`);
});
});

print("");
}

/* =========================================================
Mask
========================================================= */

function maskToPrefix(mask) {

if (!mask) return "24";

return String(mask)
.split(".")
.reduce(
(total, octet) => {

return total +
Number(octet)
.toString(2)
.split("")
.filter(x => x === "1")
.length;

},
0
);
}

/* =========================================================
Ping
========================================================= */

function executePing(target) {

if (!target) {

print("% Incomplete command.");

return;
}

print("");

if (!isValidIPv4(target)) {

print(
`% Invalid address: ${target}`
);

print("");

return;
}

print(
`Sending 5, 100-byte ICMP Echos to ${target}, timeout is 2 seconds:`
);

for (let i = 0; i < 5; i++) {
print("!");
}

print("");
print(
"Success rate is 100 percent (5/5), round-trip min/avg/max = 1/2/4 ms"
);
print("");
}

/* =========================================================
Cisco Config
========================================================= */

function handleCiscoConfig(command) {

const p = tokens(command);
const d = device();

if (p[0] === "hostname") {

if (!p[1]) {
print("% Incomplete command.");
return;
}

d.hostname = p[1];

if (deviceName) {
deviceName.textContent =
d.hostname;
}

updatePrompt();

print(
`Hostname changed to ${d.hostname}`
);

return;
}

if (p[0] === "vlan") {

if (!p[1] || !isNumber(p[1])) {

print("% VLAN ID required.");

return;
}

currentVlan = p[1];

if (!d.vlans[p[1]]) {

d.vlans[p[1]] = {
name: `VLAN${p[1]}`,
status: "active"
};
}

currentMode = "vlan";

updatePrompt();

print(
`Enter configuration commands for VLAN ${p[1]}.`
);

return;
}

if (p[0] === "interface") {

const name =
findInterface(
p.slice(1).join(" ")
);

if (!name) {

print("% Invalid interface.");

return;
}

currentInterface = name;
currentMode = "interface";

updatePrompt();

return;
}

if (
p[0] === "line" &&
p[1] === "vty"
) {

currentLine =
p.slice(1).join(" ");

currentMode = "line";

updatePrompt();

return;
}

if (
p[0] === "aaa" &&
p[1] === "new-model"
) {

d.aaa.enabled = true;

print(
"AAA authentication framework enabled."
);

return;
}

if (p[0] === "username") {

const username = p[1];

if (!username) {

print("% Username required.");

return;
}

let privilege = 1;
let secret = "";

const privilegeIndex =
p.indexOf("privilege");

if (privilegeIndex >= 0) {
privilege =
p[privilegeIndex + 1] || 1;
}

const secretIndex =
p.indexOf("secret");

if (secretIndex >= 0) {
secret =
p.slice(secretIndex + 1).join(" ");
}

d.users[username] = {
privilege,
secret
};

print(
`User ${username} configured.`
);

return;
}

if (
p[0] === "ip" &&
p[1] === "domain-name"
) {

d.ssh.domain = p[2] || "";

print(
`Domain name set to ${d.ssh.domain}`
);

return;
}

if (
p[0] === "crypto" &&
p[1] === "key" &&
p[2] === "generate" &&
p[3] === "rsa"
) {

d.ssh.rsa = true;

print("The name for the keys will be:");
print(
`${d.ssh.domain || d.hostname}`
);
print(
"Generating 1024 bit RSA keys..."
);
print("[OK]");

return;
}

if (
p[0] === "ip" &&
p[1] === "ssh" &&
p[2] === "version"
) {

d.ssh.enabled = true;
d.ssh.version =
Number(p[3]) || 2;

print(
`SSH version ${d.ssh.version} configured.`
);

return;
}

if (
p[0] === "ip" &&
p[1] === "default-gateway"
) {

d.defaultGateway =
p[2] || "";

print(
`Default gateway ${d.defaultGateway} configured.`
);

return;
}

if (
p[0] === "ip" &&
p[1] === "route"
) {

if (p.length < 5) {

print("% Incomplete command.");

return;
}

d.staticRoutes.push({
network: p[2],
mask: p[3],
nextHop: p[4]
});

print(
"Static route configured."
);

return;
}

if (
p[0] === "router" &&
p[1] === "ospf"
) {

d.ospf.enabled = true;
d.ospf.process =
p[2] || "1";

print(
`OSPF process ${d.ospf.process} created.`
);

return;
}

if (
p[0] === "ip" &&
p[1] === "dhcp" &&
p[2] === "pool"
) {

const name = p[3];

if (!name) {

print("% Pool name required.");

return;
}

d.dhcpPools[name] = {
network: "",
mask: "",
gateway: "",
dns: ""
};

print(
`DHCP pool ${name} created.`
);

return;
}

if (
p[0] === "ip" &&
p[1] === "access-list"
) {

const type = p[2];
const id = p[3];

if (!d.acls[id]) {

d.acls[id] = {
type,
rules: []
};
}

print(
`Access list ${id} created.`
);

return;
}

if (
p[0] === "service" &&
p[1] === "password-encryption"
) {

d.passwordEncryption = true;

print(
"Password encryption enabled."
);

return;
}

if (p[0] === "spanning-tree") {

if (p[1] === "mode") {

d.stp.mode =
p[2] || "rapid-pvst";

print(
`Spanning-tree mode ${d.stp.mode} configured.`
);

return;
}

print(
"Spanning-tree command accepted."
);

return;
}

print(
"% Invalid configuration command."
);
}

/* =========================================================
Cisco VLAN
========================================================= */

function handleCiscoVlan(command) {

const p = tokens(command);
const d = device();

if (!currentVlan) return;

if (p[0] === "name") {

if (!p[1]) {

print("% VLAN name required.");

return;
}

d.vlans[currentVlan].name =
p.slice(1)
.join("_")
.toUpperCase();

print(
`VLAN ${currentVlan} name changed.`
);

return;
}

if (p[0] === "exit") {

currentMode = "config";
currentVlan = null;

updatePrompt();

return;
}

if (p[0] === "end") {

currentMode = "privileged";
currentVlan = null;

updatePrompt();

return;
}

print(
"% Invalid VLAN configuration command."
);
}

/* =========================================================
Cisco Interface
========================================================= */

function handleCiscoInterface(command) {

const p = tokens(command);
const d = device();
const intf = getCurrentInterface();

if (!intf) return;

if (p[0] === "description") {

intf.description =
p.slice(1).join(" ");

print(
"Interface description configured."
);

return;
}

if (p[0] === "shutdown") {

intf.shutdown = true;
intf.status =
"administratively down";
intf.protocol = "down";

print(
"Interface administratively shut down."
);

return;
}

if (
p[0] === "no" &&
p[1] === "shutdown"
) {

intf.shutdown = false;
intf.status = "up";
intf.protocol = "up";

print(
"Interface enabled."
);

return;
}

if (
p[0] === "ip" &&
p[1] === "address"
) {

const ip = p[2];

let mask = p[3];

if (!isValidIPv4(ip)) {

print("% Invalid IP address.");

return;
}

if (
mask &&
mask.startsWith("/")
) {
mask =
prefixToMask(
mask.slice(1)
);
}

if (!isValidIPv4(mask)) {

print(
"% Invalid subnet mask."
);

return;
}

intf.ip = ip;
intf.mask = mask;

print(
`IP address ${ip} ${mask} configured.`
);

return;
}

if (
p[0] === "switchport" &&
p[1] === "mode"
) {

if (p[2] === "access") {

intf.mode = "access";

print(
"Switchport mode set to access."
);

return;
}

if (p[2] === "trunk") {

intf.mode = "trunk";

print(
"Switchport mode set to trunk."
);

return;
}
}

if (
p[0] === "switchport" &&
p[1] === "access" &&
p[2] === "vlan"
) {

intf.vlan =
Number(p[3]) || 1;

print(
`Access VLAN ${intf.vlan} configured.`
);

return;
}

if (
p[0] === "switchport" &&
p[1] === "trunk" &&
p[2] === "allowed" &&
p[3] === "vlan"
) {

intf.allowedVlans =
p.slice(4).join(" ");

print(
`Allowed VLANs configured: ${intf.allowedVlans}`
);

return;
}

if (
p[0] === "switchport" &&
p[1] === "trunk" &&
p[2] === "native" &&
p[3] === "vlan"
) {

intf.nativeVlan =
Number(p[4]) || 1;

print(
`Native VLAN ${intf.nativeVlan} configured.`
);

return;
}

if (
p[0] === "switchport" &&
p[1] === "port-security"
) {

const key = currentInterface;

if (!d.portSecurity[key]) {

d.portSecurity[key] = {
enabled: false,
maximum: 1,
sticky: false,
violation: "shutdown"
};
}

if (p.length === 2) {

d.portSecurity[key].enabled = true;

print(
"Port security enabled."
);

return;
}

if (p[2] === "maximum") {

d.portSecurity[key].maximum =
Number(p[3]) || 1;

print(
`Maximum secure addresses: ${d.portSecurity[key].maximum}`
);

return;
}

if (
p[2] === "mac-address" &&
p[3] === "sticky"
) {

d.portSecurity[key].sticky = true;

print(
"Sticky MAC enabled."
);

return;
}

if (p[2] === "violation") {

d.portSecurity[key].violation =
p[3] || "shutdown";

print(
`Violation mode: ${d.portSecurity[key].violation}`
);

return;
}
}

if (p[0] === "channel-group") {

const id = p[1] || "1";

if (!d.etherChannels[id]) {

d.etherChannels[id] = {
mode: p[3] || "active",
ports: []
};
}

if (
!d.etherChannels[id].ports
.includes(currentInterface)
) {

d.etherChannels[id].ports
.push(currentInterface);
}

print(
`Interface added to Port-channel ${id}.`
);

return;
}

if (
p[0] === "spanning-tree" &&
p[1] === "portfast"
) {

if (
!d.stp.portfast
.includes(currentInterface)
) {

d.stp.portfast
.push(currentInterface);
}

print(
"PortFast enabled."
);

return;
}

if (
p[0] === "spanning-tree" &&
p[1] === "bpduguard" &&
p[2] === "enable"
) {

if (
!d.stp.bpduguard
.includes(currentInterface)
) {

d.stp.bpduguard
.push(currentInterface);
}

print(
"BPDU Guard enabled."
);

return;
}

if (p[0] === "exit") {

currentMode = "config";
currentInterface = null;

updatePrompt();

return;
}

if (p[0] === "end") {

currentMode = "privileged";
currentInterface = null;

updatePrompt();

return;
}

print(
"% Invalid interface configuration command."
);
}

/* =========================================================
Cisco Line VTY
========================================================= */

function handleCiscoLine(command) {

const p = tokens(command);
const d = device();

if (p[0] === "password") {

d.vty.password =
p.slice(1).join(" ");

print(
"Line password configured."
);

return;
}

if (
p[0] === "login" &&
p[1] === "local"
) {

d.vty.loginLocal = true;

print(
"Login local configured."
);

return;
}

if (
p[0] === "transport" &&
p[1] === "input"
) {

d.vty.transport =
p.slice(2).join(" ");

print(
`Transport input: ${d.vty.transport}`
);

return;
}

if (p[0] === "exec-timeout") {

d.vty.execTimeout =
p.slice(1).join(" ");

print(
`Exec timeout: ${d.vty.execTimeout}`
);

return;
}

if (p[0] === "exit") {

currentMode = "config";
currentLine = null;

updatePrompt();

return;
}

if (p[0] === "end") {

currentMode = "privileged";
currentLine = null;

updatePrompt();

return;
}

print(
"% Invalid line configuration command."
);
}

/* =========================================================
Huawei Config
========================================================= */

function handleHuaweiConfig(command) {

const p = tokens(command);
const d = device();

if (p[0] === "sysname") {

d.hostname =
p[1] || d.hostname;

if (deviceName) {
deviceName.textContent =
d.hostname;
}

updatePrompt();

print(
`Sysname changed to ${d.hostname}`
);

return;
}

if (p[0] === "vlan") {

if (!p[1]) {

print(
"Error: VLAN ID required."
);

return;
}

currentVlan = p[1];

if (!d.vlans[p[1]]) {

d.vlans[p[1]] = {
name: `VLAN${p[1]}`,
status: "active"
};
}

currentMode = "vlan";

updatePrompt();

return;
}

if (p[0] === "interface") {

const name =
findInterface(
p.slice(1).join(" ")
);

if (!name) {

print(
"Error: Wrong parameter found."
);

return;
}

currentInterface = name;
currentMode = "interface";

updatePrompt();

return;
}

if (
p[0] === "stelnet" &&
p[1] === "server" &&
p[2] === "enable"
) {

d.ssh.stelnet = true;
d.ssh.enabled = true;

print(
"Info: Succeeded in starting the STelnet server."
);

return;
}

if (p[0] === "domain-name") {

d.ssh.domain =
p[1] || "";

print(
`Domain name configured: ${d.ssh.domain}`
);

return;
}

if (
p[0] === "rsa" &&
p[1] === "local-key-pair"
) {

d.ssh.rsa = true;

print(
"The key name will be: Huawei_Host"
);

print(
"Generating keys..."
);

print("[OK]");

return;
}

if (
p[0] === "ip" &&
p[1] === "route-static"
) {

if (p.length < 5) {

print(
"Error: Incomplete command."
);

return;
}

let prefix = p[3];

if (
prefix &&
prefix.startsWith("/")
) {
prefix =
prefix.slice(1);
}

d.staticRoutes.push({
network: p[2],
prefix: prefix || "24",
nextHop: p[4]
});

print(
"Static route configured successfully."
);

return;
}

if (p[0] === "ospf") {

d.ospf.enabled = true;
d.ospf.process =
p[1] || "1";

print(
`OSPF process ${d.ospf.process} created.`
);

return;
}

if (
p[0] === "dhcp" &&
p[1] === "enable"
) {

d.dhcpEnabled = true;

print(
"DHCP enabled."
);

return;
}

if (p[0] === "acl") {

const id = p[1];

if (!id) {

print(
"Error: ACL number required."
);

return;
}

if (!d.acls[id]) {

d.acls[id] = {
rules: []
};
}

print(
`ACL ${id} created.`
);

return;
}

if (p[0] === "stp") {

d.stp.enabled = true;

if (p[1] === "enable") {
print("STP enabled.");
}

else {
print(
"STP command accepted."
);
}

return;
}

print(
"Error: Unrecognized command."
);
}

/* =========================================================
Huawei VLAN
========================================================= */

function handleHuaweiVlan(command) {

const p = tokens(command);
const d = device();

if (!currentVlan) return;

if (p[0] === "name") {

d.vlans[currentVlan].name =
p.slice(1)
.join("_")
.toUpperCase();

print(
`VLAN ${currentVlan} name changed.`
);

return;
}

if (p[0] === "quit") {

currentMode = "config";
currentVlan = null;

updatePrompt();

return;
}

if (p[0] === "return") {

currentMode = "user";
currentVlan = null;

updatePrompt();

return;
}

print(
"Error: Unrecognized command."
);
}

/* =========================================================
Huawei Interface
========================================================= */

function handleHuaweiInterface(command) {

const p = tokens(command);
const d = device();
const intf = getCurrentInterface();

if (!intf) return;

if (p[0] === "description") {

intf.description =
p.slice(1).join(" ");

print(
"Description configured."
);

return;
}

if (p[0] === "shutdown") {

intf.shutdown = true;
intf.status = "down";
intf.protocol = "down";

print(
"Interface shut down."
);

return;
}

if (
p[0] === "undo" &&
p[1] === "shutdown"
) {

intf.shutdown = false;
intf.status = "up";
intf.protocol = "up";

print(
"Interface enabled."
);

return;
}

if (
p[0] === "ip" &&
p[1] === "address"
) {

const ip = p[2];

let prefix = p[3];

if (!isValidIPv4(ip)) {

print(
"Error: Wrong IP address."
);

return;
}

if (
prefix &&
prefix.startsWith("/")
) {
prefix =
prefix.slice(1);
}

const mask =
prefixToMask(
prefix || "24"
);

if (!mask) {

print(
"Error: Wrong mask."
);

return;
}

intf.ip = ip;
intf.mask = mask;

print(
`IP address ${ip}/${prefix || "24"} configured.`
);

return;
}

if (
p[0] === "port" &&
p[1] === "link-type"
) {

if (p[2] === "access") {

intf.mode = "access";

print(
"Port link-type set to access."
);

return;
}

if (p[2] === "trunk") {

intf.mode = "trunk";

print(
"Port link-type set to trunk."
);

return;
}
}

if (
p[0] === "port" &&
p[1] === "default" &&
p[2] === "vlan"
) {

intf.vlan =
Number(p[3]) || 1;

print(
`Default VLAN ${intf.vlan} configured.`
);

return;
}

if (
p[0] === "port" &&
p[1] === "trunk" &&
p[2] === "allow-pass" &&
p[3] === "vlan"
) {

intf.allowedVlans =
p.slice(4).join(" ");

print(
`Allowed VLANs: ${intf.allowedVlans}`
);

return;
}

if (
p[0] === "port" &&
p[1] === "trunk" &&
p[2] === "pvid" &&
p[3] === "vlan"
) {

intf.pvid =
Number(p[4]) || 1;

print(
`PVID VLAN ${intf.pvid} configured.`
);

return;
}

if (p[0] === "port-security") {

const key = currentInterface;

if (!d.portSecurity[key]) {

d.portSecurity[key] = {
enabled: false,
maximum: 1,
action: "shutdown"
};
}

if (p.length === 1) {

d.portSecurity[key].enabled = true;

print(
"Port security enabled."
);

return;
}

if (p[1] === "max-mac-num") {

d.portSecurity[key].maximum =
Number(p[2]) || 1;

print(
`Maximum MAC addresses: ${d.portSecurity[key].maximum}`
);

return;
}

if (p[1] === "protect-action") {

d.portSecurity[key].action =
p[2] || "shutdown";

print(
`Protect action: ${d.portSecurity[key].action}`
);

return;
}
}

if (
p[0] === "stp" &&
p[1] === "edged-port" &&
p[2] === "enable"
) {

if (
!d.stp.edgePorts
.includes(currentInterface)
) {
d.stp.edgePorts
.push(currentInterface);
}

print(
"Edge port enabled."
);

return;
}

if (
p[0] === "stp" &&
p[1] === "bpdu-protection"
) {

d.stp.bpduProtection = true;

print(
"BPDU protection enabled."
);

return;
}

if (p[0] === "eth-trunk") {

const id = p[1] || "1";

if (!d.etherChannels[id]) {

d.etherChannels[id] = {
mode: "LACP",
ports: []
};
}

if (
!d.etherChannels[id].ports
.includes(currentInterface)
) {

d.etherChannels[id].ports
.push(currentInterface);
}

print(
`Interface added to Eth-Trunk ${id}.`
);

return;
}

if (p[0] === "quit") {

currentMode = "config";
currentInterface = null;

updatePrompt();

return;
}

if (p[0] === "return") {

currentMode = "user";
currentInterface = null;

updatePrompt();

return;
}

print(
"Error: Unrecognized interface command."
);
}

/* =========================================================
Huawei Line
========================================================= */

function handleHuaweiLine(command) {

const p = tokens(command);
const d = device();

if (p[0] === "authentication-mode") {

d.vty.authentication =
p[1] || "none";

print(
`Authentication mode: ${d.vty.authentication}`
);

return;
}

if (p[0] === "protocol") {

if (p[1] === "inbound") {

d.vty.protocol =
p[2] || "telnet";

print(
`Inbound protocol: ${d.vty.protocol}`
);

return;
}
}

if (p[0] === "quit") {

currentMode = "config";
currentLine = null;

updatePrompt();

return;
}

if (p[0] === "return") {

currentMode = "user";
currentLine = null;

updatePrompt();

return;
}

print(
"Error: Unrecognized line command."
);
}

/* =========================================================
Show Dispatcher
========================================================= */

function handleShow(command) {

const cmd = lower(command);

if (currentDevice === "cisco") {

if (cmd === "show version") {
showCiscoVersion();
return;
}

if (
cmd === "show vlan" ||
cmd === "show vlan brief"
) {
showCiscoVlans();
return;
}

if (cmd === "show interfaces") {
showCiscoInterfaces();
return;
}

if (
cmd === "show interfaces status"
) {
showCiscoInterfaceStatus();
return;
}

if (
cmd === "show interfaces description"
) {
showCiscoInterfaceDescription();
return;
}

if (
cmd === "show ip interface brief"
) {
showCiscoIpInterfaceBrief();
return;
}

if (
cmd === "show running-config"
) {
showCiscoRunningConfig();
return;
}

if (
cmd === "show startup-config"
) {
showCiscoRunningConfig();
return;
}

if (cmd === "show arp") {
showCiscoArp();
return;
}

if (
cmd === "show mac address-table"
) {
showCiscoMac();
return;
}

if (cmd === "show ip route") {
showCiscoRoute();
return;
}

if (cmd === "show ip ssh") {
showCiscoSSH();
return;
}

if (
cmd === "show spanning-tree"
) {
showCiscoSpanningTree();
return;
}

if (
cmd === "show etherchannel summary"
) {
showCiscoEtherChannel();
return;
}

if (cmd === "show users") {
showCiscoUsers();
return;
}

if (cmd === "show line") {
showCiscoLine();
return;
}

if (cmd === "show logging") {
showCiscoLogging();
return;
}

if (
cmd === "show access-lists"
) {
showCiscoAccessLists();
return;
}

if (
cmd === "show port-security"
) {
showCiscoPortSecurity();
return;
}

if (
cmd === "show cdp neighbors"
) {

print("");
print(
"Device ID Local Intrfce Holdtme Capability"
);
print(
"Router Gi0/3 145 R"
);
print(
"Switch-Access Gi0/2 132 S"
);
print("");

return;
}

if (
cmd === "show lldp neighbors"
) {

print("");
print(
"Device ID Local Intf Port ID"
);
print(
"Router Gi0/3 Gi0/0"
);
print("");

return;
}

if (cmd === "show ip ospf") {

print("");

print(
device().ospf.enabled
? `OSPF process ${device().ospf.process} is running.`
: "OSPF is not configured."
);

print("");

return;
}

print(
`% Unknown command: ${command}`
);

return;
}

/* Huawei */

if (cmd === "display version") {
showHuaweiVersion();
return;
}

if (cmd === "display vlan") {
showHuaweiVlan();
return;
}

if (cmd === "display interface") {
showHuaweiInterfaces();
return;
}

if (
cmd === "display interface brief"
) {
showHuaweiInterfaceBrief();
return;
}

if (
cmd === "display ip interface brief"
) {
showHuaweiIpInterfaceBrief();
return;
}

if (
cmd === "display current-configuration"
) {
showHuaweiCurrentConfig();
return;
}

if (cmd === "display arp") {
showHuaweiArp();
return;
}

if (cmd === "display mac-address") {
showHuaweiMac();
return;
}

if (
cmd === "display ip routing-table"
) {
showHuaweiRoute();
return;
}

if (
cmd === "display ospf peer"
) {
showHuaweiOspf();
return;
}

if (cmd === "display stp") {
showHuaweiStp();
return;
}

if (cmd === "display acl") {
showHuaweiAcl();
return;
}

if (cmd === "display dhcp") {

print("");

print(
device().dhcpEnabled
? "DHCP is enabled."
: "DHCP is not enabled."
);

print("");

return;
}

print(
`Error: Unrecognized command: ${command}`
);
}

/* =========================================================
Do Command
========================================================= */

function executeDoCommand(command) {

const actual =
command.replace(/^do\s+/i, "");

if (
currentDevice === "cisco" &&
lower(actual).startsWith("show ")
) {

handleShow(
resolveCisco(actual)
);

return true;
}

if (
currentDevice === "huawei" &&
lower(actual).startsWith("display ")
) {

handleShow(
resolveHuawei(actual)
);

return true;
}

return false;
}

/* =========================================================
Terminal Commands
========================================================= */

function handleTerminalCommand(command) {

const p = tokens(command);

if (
p[0] === "terminal" &&
p[1] === "monitor"
) {

terminalMonitor = true;

print(
"Terminal monitoring enabled."
);

return true;
}

if (
p[0] === "terminal" &&
p[1] === "no" &&
p[2] === "monitor"
) {

terminalMonitor = false;

print(
"Terminal monitoring disabled."
);

return true;
}

if (
p[0] === "terminal" &&
p[1] === "length"
) {

terminalLength =
Number(p[2]) || 24;

print(
`Terminal length set to ${terminalLength}.`
);

return true;
}

return false;
}

/* =========================================================
Execute Cisco
========================================================= */

function executeCisco(command) {

const cmd = resolveCisco(command);
const p = tokens(cmd);

if (!cmd) return;

if (p[0] === "show") {

handleShow(cmd);

return;
}

if (p[0] === "ping") {

executePing(p[1]);

return;
}

if (handleTerminalCommand(cmd)) {
return;
}

if (
lower(command).startsWith("do ")
) {

if (executeDoCommand(command)) {
return;
}
}

/* USER */

if (currentMode === "user") {

if (cmd === "enable") {

currentMode = "privileged";

updatePrompt();

return;
}

if (cmd === "disable") {
return;
}

print(
"% Invalid input detected at '^' marker."
);

return;
}

/* PRIVILEGED */

if (currentMode === "privileged") {

if (
cmd === "configure terminal"
) {

currentMode = "config";

updatePrompt();

print(
"Enter configuration commands, one per line. End with CNTL/Z."
);

return;
}

if (
cmd ===
"copy running-config startup-config"
) {

print("");
print(
"Destination filename [startup-config]?"
);
print(
"Building configuration..."
);
print("[OK]");

return;
}

if (cmd === "write memory") {

print(
"Building configuration..."
);
print("[OK]");

return;
}

if (cmd === "reload") {

print("");
print(
"Reload command accepted."
);
print(
"Simulation mode: device will not actually reboot."
);
print("");

return;
}

if (
cmd ===
"erase startup-config"
) {

print("");
print(
"Startup configuration erase simulated."
);
print("");

return;
}

if (cmd === "end") {
return;
}

print(
"% Invalid input detected at '^' marker."
);

return;
}

/* CONFIG */

if (currentMode === "config") {

if (cmd === "end") {

currentMode = "privileged";

updatePrompt();

return;
}

if (cmd === "exit") {

currentMode = "privileged";

updatePrompt();

return;
}

handleCiscoConfig(cmd);

return;
}

/* VLAN */

if (currentMode === "vlan") {

handleCiscoVlan(cmd);

return;
}

/* INTERFACE */

if (currentMode === "interface") {

handleCiscoInterface(cmd);

return;
}

/* LINE */

if (currentMode === "line") {

handleCiscoLine(cmd);

return;
}
}

/* =========================================================
Execute Huawei
========================================================= */

function executeHuawei(command) {

const cmd = resolveHuawei(command);
const p = tokens(cmd);

if (!cmd) return;

if (p[0] === "display") {

handleShow(cmd);

return;
}

if (p[0] === "ping") {

executePing(p[1]);

return;
}

/* USER */

if (currentMode === "user") {

if (cmd === "system-view") {

currentMode = "config";

updatePrompt();

print(
"Enter system view, return user view with Ctrl+Z."
);

return;
}

if (cmd === "quit") {

print("Bye.");

return;
}

print(
"Error: Unrecognized command found at '^' position."
);

return;
}

/* CONFIG */

if (currentMode === "config") {

if (cmd === "quit") {

currentMode = "user";

updatePrompt();

return;
}

if (cmd === "return") {

currentMode = "user";

updatePrompt();

return;
}

handleHuaweiConfig(cmd);

return;
}

/* VLAN */

if (currentMode === "vlan") {

handleHuaweiVlan(cmd);

return;
}

/* INTERFACE */

if (currentMode === "interface") {

handleHuaweiInterface(cmd);

return;
}

/* LINE */

if (currentMode === "line") {

handleHuaweiLine(cmd);

return;
}
}

/* =========================================================
Main Execute
========================================================= */

function executeCommand(rawCommand) {

const command =
normalize(rawCommand);

if (!command) return;

print(
`${terminalPrompt?.textContent || ""} ${command}`
);

if (
commandHistory[
commandHistory.length - 1
] !== command
) {
commandHistory.push(command);
}

historyIndex =
commandHistory.length;

if (
lower(command) === "clear" ||
lower(command) === "clear screen"
) {

clearTerminal();

return;
}

if (
lower(command) === "?" ||
lower(command) === "help"
) {

print("");

print(
currentDevice === "cisco"
? "CLI supports Cisco IOS commands and common abbreviations."
: "CLI supports Huawei VRP commands and common abbreviations."
);

print("Examples:");

print(
currentDevice === "cisco"
? " en / conf t / sh run / sh ip int br / int g0/1 / no sh"
: " sys / disp cur / disp int br / int g0/0/1 / undo sh"
);

print("");

return;
}

if (currentDevice === "cisco") {
executeCisco(command);
}

else {
executeHuawei(command);
}

updatePrompt();
}

/* =========================================================
History
========================================================= */

function handleHistoryKey(event) {

if (!commandHistory.length) return;

if (event.key === "ArrowUp") {

event.preventDefault();

if (historyIndex > 0) {
historyIndex--;
}

terminalInput.value =
commandHistory[historyIndex] || "";

return;
}

if (event.key === "ArrowDown") {

event.preventDefault();

if (
historyIndex <
commandHistory.length - 1
) {

historyIndex++;

terminalInput.value =
commandHistory[historyIndex];

}

else {

historyIndex =
commandHistory.length;

terminalInput.value = "";
}
}
}

/* =========================================================
Device Buttons
========================================================= */

deviceButtons.forEach(button => {

button.addEventListener(
"click",
() => {

const type =
button.dataset.device;

setDevice(type);

deviceButtons.forEach(btn =>
btn.classList.remove("active")
);

button.classList.add("active");

if (terminalInput) {
terminalInput.focus();
}
}
);
});

/* =========================================================
Reset Button
========================================================= */

if (resetTerminal) {

resetTerminal.addEventListener(
"click",
() => {

resetDevice();

if (terminalInput) {
terminalInput.focus();
}
}
);
}

/* =========================================================
Form
========================================================= */

if (terminalForm) {

terminalForm.addEventListener(
"submit",
event => {

event.preventDefault();

const command =
terminalInput.value;

terminalInput.value = "";

executeCommand(command);

terminalInput.focus();
}
);
}

/* =========================================================
Keyboard History
========================================================= */

if (terminalInput) {

terminalInput.addEventListener(
"keydown",
handleHistoryKey
);
}

/* =========================================================
Click Terminal -> Focus
========================================================= */

if (terminalOutput) {

terminalOutput.addEventListener(
"click",
() => {

if (terminalInput) {
terminalInput.focus();
}
}
);
}

/* =========================================================
Start
========================================================= */

setDevice("cisco");

deviceButtons.forEach(button => {

if (
button.dataset.device === "cisco"
) {
button.classList.add("active");
}
});

if (terminalInput) {
terminalInput.focus();
}
