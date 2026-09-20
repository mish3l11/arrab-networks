/*
عرّاب الشبكات
Copyright (c) 2026 Mishal AL-Mishal
All Rights Reserved.

يمنع نسخ أو إعادة استخدام أو إعادة توزيع هذا الملف
أو أي جزء جوهري منه دون إذن صاحب الحقوق.
*/


/* =========================================================
COMMAND PRACTICE
متوافق مع command-practice.html الحالي
========================================================= */


/* =========================================================
ELEMENTS
========================================================= */

const questionNumber = document.getElementById("questionNumber");
const correctCount = document.getElementById("correctCount");
const scorePercent = document.getElementById("scorePercent");

const questionCategory = document.getElementById("questionCategory");
const questionLevel = document.getElementById("questionLevel");

const questionTitle = document.getElementById("questionTitle");
const questionDescription = document.getElementById("questionDescription");

const answersContainer = document.getElementById("answersContainer");
const answerResult = document.getElementById("answerResult");

const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");

const nextQuestionButton = document.getElementById("nextQuestion");

const finalResult = document.getElementById("finalResult");
const finalScore = document.getElementById("finalScore");
const restartPractice = document.getElementById("restartPractice");

const practiceCard = document.getElementById("practiceCard");

const modeButtons = document.querySelectorAll(".practice-mode");
const deviceButtons = document.querySelectorAll(".device-button");


/* =========================================================
STATE
========================================================= */

let currentMode = "beginner";
let currentDevice = "cisco";

let currentQuestions = [];
let currentQuestionIndex = 0;

let correctAnswers = 0;
let answered = false;

const QUESTIONS_PER_SESSION = 20;


/* =========================================================
QUESTION BANK
20 QUESTIONS لكل مستوى
لكل من Cisco و Huawei
========================================================= */

const practiceQuestions = {

/* =====================================================
BEGINNER
===================================================== */

beginner: {

cisco: [

{
category: "Basic",
question: "تريد الدخول إلى وضع الصلاحيات في Cisco IOS. ما الأمر الصحيح؟",
description: "ابدأ من وضع المستخدم وانتقل إلى Privileged EXEC.",
answers: [
"configure terminal",
"enable",
"show running-config",
"interface vlan 1"
],
correct: 1,
explanation: "الأمر enable ينقلك من User EXEC إلى Privileged EXEC."
},

{
category: "Basic",
question: "تريد تغيير اسم السويتش إلى SW1. ما الأمر الصحيح؟",
description: "نفذ الأمر من وضع Global Configuration.",
answers: [
"hostname SW1",
"name SW1",
"switch-name SW1",
"sysname SW1"
],
correct: 0,
explanation: "في Cisco IOS يستخدم الأمر hostname لتغيير اسم الجهاز."
},

{
category: "Interface",
question: "تريد معرفة حالة جميع المنافذ وعناوين IP بشكل مختصر.",
description: "اختر أمر العرض المختصر للمنافذ.",
answers: [
"show vlan brief",
"show ip interface brief",
"show ip route",
"show mac address-table"
],
correct: 1,
explanation: "show ip interface brief يعرض حالة المنافذ وعناوين IP بشكل مختصر."
},

{
category: "Interface",
question: "تريد الدخول إلى المنفذ GigabitEthernet0/1.",
description: "اختر الأمر الصحيح للدخول إلى إعدادات المنفذ.",
answers: [
"interface GigabitEthernet0/1",
"port GigabitEthernet0/1",
"interface vlan 1",
"ip interface GigabitEthernet0/1"
],
correct: 0,
explanation: "الأمر interface GigabitEthernet0/1 ينقلك إلى إعدادات المنفذ."
},

{
category: "Interface",
question: "المنفذ مغلق إداريًا وتريد تشغيله.",
description: "اختر الأمر المستخدم لتفعيل المنفذ.",
answers: [
"shutdown",
"enable port",
"no shutdown",
"port enable"
],
correct: 2,
explanation: "no shutdown يقوم بإلغاء الإغلاق الإداري للمنفذ."
},

{
category: "VLAN",
question: "تريد إنشاء VLAN رقم 10.",
description: "اختر الأمر الصحيح.",
answers: [
"create vlan 10",
"vlan 10",
"interface vlan 10",
"switch vlan 10"
],
correct: 1,
explanation: "في Cisco يتم إنشاء VLAN باستخدام vlan 10."
},

{
category: "VLAN",
question: "تريد عرض قائمة الـVLANs الموجودة على السويتش.",
description: "اختر أمر العرض المناسب.",
answers: [
"show vlan brief",
"show vlan all",
"show interfaces vlan",
"show ip vlan"
],
correct: 0,
explanation: "show vlan brief يعرض الـVLANs والمنافذ المرتبطة بها."
},

{
category: "Access Port",
question: "تريد جعل المنفذ Access Port.",
description: "اختر الأمر المناسب.",
answers: [
"switchport mode trunk",
"switchport mode access",
"switchport access enable",
"port mode access"
],
correct: 1,
explanation: "switchport mode access يجعل المنفذ Access Port."
},

{
category: "Access Port",
question: "تريد وضع المنفذ في VLAN 10.",
description: "المنفذ مضبوط مسبقًا كـAccess.",
answers: [
"switchport vlan 10",
"switchport access vlan 10",
"vlan access 10",
"access vlan 10"
],
correct: 1,
explanation: "switchport access vlan 10 يربط المنفذ بـVLAN 10."
},

{
category: "Trunk",
question: "تريد جعل المنفذ Trunk.",
description: "اختر الأمر الصحيح.",
answers: [
"switchport mode access",
"switchport trunk enable",
"switchport mode trunk",
"trunk mode enable"
],
correct: 2,
explanation: "switchport mode trunk يجعل المنفذ Trunk."
},

{
category: "MAC",
question: "تريد معرفة عناوين MAC الموجودة على السويتش.",
description: "اختر أمر جدول MAC.",
answers: [
"show ip arp",
"show mac address-table",
"show vlan brief",
"show interfaces"
],
correct: 1,
explanation: "show mac address-table يعرض جدول عناوين MAC."
},

{
category: "ARP",
question: "تريد عرض جدول ARP.",
description: "اختر الأمر الصحيح.",
answers: [
"show arp",
"show mac",
"show ip route",
"show ip arp-table"
],
correct: 0,
explanation: "show arp يعرض معلومات ARP على Cisco."
},

{
category: "Routing",
question: "تريد عرض جدول التوجيه.",
description: "اختر الأمر المناسب.",
answers: [
"show interfaces",
"show vlan",
"show ip route",
"show routing"
],
correct: 2,
explanation: "show ip route يعرض جدول التوجيه."
},

{
category: "Ping",
question: "تريد اختبار الوصول إلى 192.168.1.1.",
description: "اختر الأمر المناسب.",
answers: [
"test 192.168.1.1",
"ping 192.168.1.1",
"check 192.168.1.1",
"connect 192.168.1.1"
],
correct: 1,
explanation: "ping يستخدم لاختبار الوصول إلى عنوان IP."
},

{
category: "Configuration",
question: "تريد الدخول إلى Global Configuration Mode.",
description: "أنت حاليًا في Privileged EXEC.",
answers: [
"config",
"configure terminal",
"terminal configure",
"global configuration"
],
correct: 1,
explanation: "configure terminal ينقلك إلى Global Configuration Mode."
},

{
category: "Configuration",
question: "تريد عرض الإعدادات الحالية الموجودة في RAM.",
description: "اختر الأمر المناسب.",
answers: [
"show startup-config",
"show running-config",
"show config",
"display current-config"
],
correct: 1,
explanation: "show running-config يعرض الإعدادات الحالية."
},

{
category: "Save",
question: "تريد حفظ الإعدادات الحالية بعد تعديلها.",
description: "حتى لا تضيع بعد إعادة تشغيل الجهاز.",
answers: [
"save config",
"write memory only",
"copy running-config startup-config",
"save running"
],
correct: 2,
explanation: "copy running-config startup-config يحفظ الإعدادات في Startup Configuration."
},

{
category: "Hostname",
question: "تريد معرفة إصدار نظام Cisco IOS.",
description: "اختر أمر العرض المناسب.",
answers: [
"show version",
"show system",
"show ios",
"show software"
],
correct: 0,
explanation: "show version يعرض إصدار IOS ومعلومات الجهاز."
},

{
category: "Interface",
question: "تريد معرفة تفاصيل منفذ معين مثل السرعة وحالة الرابط.",
description: "اختر أمر العرض المناسب.",
answers: [
"show interfaces",
"show vlan",
"show ip route",
"show users"
],
correct: 0,
explanation: "show interfaces يعرض تفاصيل حالة الواجهات."
},

{
category: "Troubleshooting",
question: "جهاز لا يستطيع الوصول إلى جهاز آخر. ما أول اختبار بسيط يمكنك استخدامه؟",
description: "اختبر الاتصال الأساسي بين العنوانين.",
answers: [
"show vlan",
"ping",
"show version",
"reload"
],
correct: 1,
explanation: "Ping من أبسط أدوات اختبار الاتصال الأساسي بين الأجهزة."
}

],


huawei: [

{
category: "Basic",
question: "تريد الدخول إلى وضع System View في Huawei.",
description: "أنت في User View.",
answers: [
"system-view",
"enable",
"system",
"view-system"
],
correct: 0,
explanation: "system-view ينقلك إلى وضع الإعداد في Huawei VRP."
},

{
category: "Basic",
question: "تريد تغيير اسم الجهاز إلى SW1.",
description: "استخدم الأمر المناسب في System View.",
answers: [
"hostname SW1",
"sysname SW1",
"device-name SW1",
"name SW1"
],
correct: 1,
explanation: "Huawei يستخدم sysname لتغيير اسم الجهاز."
},

{
category: "Interface",
question: "تريد عرض حالة المنافذ بشكل مختصر.",
description: "اختر أمر العرض المناسب.",
answers: [
"display ip interface brief",
"display vlan",
"display ip routing-table",
"display mac-address"
],
correct: 0,
explanation: "display ip interface brief يعرض حالة الواجهات وعناوين IP."
},

{
category: "Interface",
question: "تريد الدخول إلى GigabitEthernet 0/0/1.",
description: "اختر الأمر الصحيح.",
answers: [
"interface GigabitEthernet 0/0/1",
"port GigabitEthernet 0/0/1",
"interface vlan 1",
"system interface 0/0/1"
],
correct: 0,
explanation: "interface GigabitEthernet 0/0/1 ينقلك إلى إعدادات الواجهة."
},

{
category: "Interface",
question: "المنفذ مغلق إداريًا وتريد تشغيله.",
description: "اختر الأمر المناسب.",
answers: [
"shutdown",
"undo shutdown",
"enable port",
"port enable"
],
correct: 1,
explanation: "undo shutdown يلغي الإغلاق الإداري للمنفذ."
},

{
category: "VLAN",
question: "تريد إنشاء VLAN رقم 10.",
description: "اختر الأمر الصحيح.",
answers: [
"vlan 10",
"create vlan 10",
"interface vlan 10",
"new vlan 10"
],
correct: 0,
explanation: "vlan 10 ينشئ VLAN رقم 10 في Huawei."
},

{
category: "VLAN",
question: "تريد عرض معلومات الـVLANs.",
description: "اختر الأمر المناسب.",
answers: [
"display vlan",
"display vlan all",
"show vlan",
"display vlan-table"
],
correct: 0,
explanation: "display vlan يعرض معلومات الـVLANs."
},

{
category: "Access Port",
question: "تريد جعل المنفذ Access.",
description: "اختر الأمر الصحيح.",
answers: [
"port link-type trunk",
"port link-type access",
"port mode access",
"link access"
],
correct: 1,
explanation: "port link-type access يجعل الواجهة Access."
},

{
category: "Access Port",
question: "تريد وضع منفذ Access في VLAN 10.",
description: "المنفذ مضبوط مسبقًا كـAccess.",
answers: [
"port vlan 10",
"port default vlan 10",
"vlan access 10",
"port access vlan 10"
],
correct: 1,
explanation: "port default vlan 10 يربط منفذ Access بالـVLAN."
},

{
category: "Trunk",
question: "تريد جعل المنفذ Trunk.",
description: "اختر الأمر المناسب.",
answers: [
"port link-type access",
"port link-type trunk",
"port trunk enable",
"trunk mode"
],
correct: 1,
explanation: "port link-type trunk يجعل المنفذ Trunk."
},

{
category: "MAC",
question: "تريد عرض جدول MAC.",
description: "اختر الأمر المناسب.",
answers: [
"display arp",
"display mac-address",
"display vlan",
"display interface"
],
correct: 1,
explanation: "display mac-address يعرض جدول MAC."
},

{
category: "ARP",
question: "تريد عرض جدول ARP.",
description: "اختر الأمر الصحيح.",
answers: [
"display arp",
"display mac-address",
"display ip route",
"display arp-table"
],
correct: 0,
explanation: "display arp يعرض جدول ARP."
},

{
category: "Routing",
question: "تريد عرض جدول التوجيه في Huawei.",
description: "اختر الأمر المناسب.",
answers: [
"display routing",
"display ip routing-table",
"display route-table",
"show ip route"
],
correct: 1,
explanation: "display ip routing-table يعرض جدول التوجيه."
},

{
category: "Ping",
question: "تريد اختبار الاتصال مع 192.168.1.1.",
description: "اختر الأمر المناسب.",
answers: [
"test 192.168.1.1",
"ping 192.168.1.1",
"check 192.168.1.1",
"connect 192.168.1.1"
],
correct: 1,
explanation: "ping يستخدم لاختبار الوصول إلى عنوان IP."
},

{
category: "Configuration",
question: "تريد عرض الإعدادات الحالية.",
description: "اختر أمر العرض المناسب.",
answers: [
"display current-configuration",
"display configuration",
"show running-config",
"display startup"
],
correct: 0,
explanation: "display current-configuration يعرض الإعدادات الحالية."
},

{
category: "Save",
question: "تريد حفظ إعدادات Huawei.",
description: "اختر الأمر المناسب.",
answers: [
"save",
"write memory",
"save-config",
"copy running startup"
],
correct: 0,
explanation: "save يحفظ الإعدادات الحالية."
},

{
category: "Version",
question: "تريد معرفة إصدار VRP.",
description: "اختر الأمر الصحيح.",
answers: [
"display version",
"display vrp",
"show version",
"display software"
],
correct: 0,
explanation: "display version يعرض إصدار VRP ومعلومات الجهاز."
},

{
category: "Interface",
question: "تريد عرض تفاصيل الواجهات.",
description: "اختر الأمر المناسب.",
answers: [
"display interface",
"display vlan",
"display route",
"display users"
],
correct: 0,
explanation: "display interface يعرض تفاصيل الواجهات."
},

{
category: "Troubleshooting",
question: "تريد معرفة حالة واجهة GigabitEthernet 0/0/1 بالتفصيل.",
description: "اختر الأمر المناسب.",
answers: [
"display interface GigabitEthernet 0/0/1",
"display vlan 0/0/1",
"display port 0/0/1",
"display ip route 0/0/1"
],
correct: 0,
explanation: "display interface مع اسم الواجهة يعرض تفاصيلها."
},

{
category: "Troubleshooting",
question: "جهاز لا يصل إلى جهاز آخر. ما الاختبار الأساسي؟",
description: "ابدأ باختبار الاتصال.",
answers: [
"display version",
"ping",
"save",
"reboot"
],
correct: 1,
explanation: "Ping هو الاختبار الأساسي لمعرفة إمكانية الوصول بين الأجهزة."
}

]
},


/* =====================================================
INTERMEDIATE
===================================================== */

intermediate: {

cisco: [

{
category: "VLAN",
question: "تريد معرفة الـVLAN التي ينتمي إليها منفذ معين.",
description: "اختر أمرًا يعرض VLANs والمنافذ.",
answers: [
"show vlan brief",
"show ip route",
"show arp",
"show users"
],
correct: 0,
explanation: "show vlan brief يعرض VLANs والمنافذ المرتبطة بها."
},

{
category: "Trunk",
question: "تريد معرفة منافذ الـTrunk الموجودة على السويتش.",
description: "اختر أمر الفحص المناسب.",
answers: [
"show interfaces trunk",
"show interfaces access",
"show vlan trunk",
"show trunk ports"
],
correct: 0,
explanation: "show interfaces trunk يعرض معلومات منافذ Trunk."
},

{
category: "Trunk",
question: "تريد السماح بمرور VLANs 10 و20 و30 على Trunk.",
description: "اختر الأمر المناسب.",
answers: [
"switchport trunk allowed vlan 10,20,30",
"switchport access vlan 10,20,30",
"trunk vlan 10 20 30",
"switchport vlan allowed 10 20 30"
],
correct: 0,
explanation: "الأمر يحدد VLANs المسموح بمرورها على Trunk."
},

{
category: "MAC",
question: "تريد معرفة عنوان MAC الذي تعلمه السويتش على منفذ معين.",
description: "اختر الأمر المناسب.",
answers: [
"show mac address-table interface GigabitEthernet0/1",
"show arp interface GigabitEthernet0/1",
"show vlan interface GigabitEthernet0/1",
"show route interface GigabitEthernet0/1"
],
correct: 0,
explanation: "يمكن استخدام show mac address-table interface لمعرفة MACs على منفذ معين."
},

{
category: "STP",
question: "تريد عرض معلومات Spanning Tree.",
description: "اختر الأمر الصحيح.",
answers: [
"show spanning-tree",
"show stp table",
"show spanning",
"show tree"
],
correct: 0,
explanation: "show spanning-tree يعرض معلومات STP."
},

{
category: "STP",
question: "تريد جعل منفذ Access يعمل كـPortFast.",
description: "اختر الأمر المناسب.",
answers: [
"spanning-tree portfast",
"spanning-tree fast",
"portfast enable",
"stp portfast"
],
correct: 0,
explanation: "spanning-tree portfast يستخدم لتفعيل PortFast على Cisco."
},

{
category: "Routing",
question: "تريد إضافة Static Route لشبكة 192.168.20.0/24 عبر 10.0.0.2.",
description: "اختر الأمر الصحيح.",
answers: [
"ip route 192.168.20.0 255.255.255.0 10.0.0.2",
"route 192.168.20.0 10.0.0.2",
"ip static-route 192.168.20.0 10.0.0.2",
"static route 192.168.20.0 10.0.0.2"
],
correct: 0,
explanation: "هذا هو بناء Static Route الصحيح في Cisco IOS."
},

{
category: "OSPF",
question: "تريد تشغيل OSPF Process ID 1.",
description: "اختر الأمر الصحيح.",
answers: [
"router ospf 1",
"ospf process 1",
"router ospf process 1",
"enable ospf 1"
],
correct: 0,
explanation: "router ospf 1 ينشئ OSPF process رقم 1."
},

{
category: "OSPF",
question: "تريد معرفة جيران OSPF.",
description: "اختر أمر الفحص المناسب.",
answers: [
"show ip ospf neighbor",
"show ospf peers",
"show ip neighbors",
"show routing ospf"
],
correct: 0,
explanation: "show ip ospf neighbor يعرض جيران OSPF."
},

{
category: "DHCP",
question: "تريد معرفة DHCP bindings على Cisco.",
description: "اختر الأمر المناسب.",
answers: [
"show ip dhcp binding",
"show dhcp clients",
"show ip bindings",
"show dhcp table"
],
correct: 0,
explanation: "show ip dhcp binding يعرض ارتباطات DHCP."
},

{
category: "SSH",
question: "تريد معرفة جلسات المستخدمين الحالية.",
description: "اختر الأمر المناسب.",
answers: [
"show users",
"show sessions ip",
"show login",
"show ssh users"
],
correct: 0,
explanation: "show users يعرض المستخدمين والجلسات الحالية."
},

{
category: "SSH",
question: "تريد معرفة حالة SSH على الجهاز.",
description: "اختر أمر الفحص المناسب.",
answers: [
"show ssh",
"show ssh status",
"show ip ssh server",
"show secure-shell"
],
correct: 0,
explanation: "show ssh يعرض معلومات SSH."
},

{
category: "ACL",
question: "تريد عرض قوائم ACL الموجودة.",
description: "اختر الأمر المناسب.",
answers: [
"show access-lists",
"show acl",
"show security lists",
"show filters"
],
correct: 0,
explanation: "show access-lists يعرض قوائم التحكم بالوصول."
},

{
category: "Troubleshooting",
question: "تريد معرفة الأخطاء الموجودة على المنافذ.",
description: "اختر أمر فحص Counters المناسب.",
answers: [
"show interfaces counters errors",
"show errors all",
"show interface error-table",
"show port errors"
],
correct: 0,
explanation: "show interfaces counters errors يعرض عدادات أخطاء الواجهات."
},

{
category: "Troubleshooting",
question: "تريد معرفة سجل الأحداث على الجهاز.",
description: "اختر الأمر المناسب.",
answers: [
"show logging",
"show events only",
"show system log",
"show logs all"
],
correct: 0,
explanation: "show logging يعرض رسائل السجل."
},

{
category: "System",
question: "تريد معرفة استهلاك CPU.",
description: "اختر أمر الفحص المناسب.",
answers: [
"show processes cpu",
"show cpu",
"show system cpu",
"show processor"
],
correct: 0,
explanation: "show processes cpu يعرض معلومات استخدام المعالج."
},

{
category: "Layer 3",
question: "تريد إنشاء SVI لـVLAN 10 بعنوان 192.168.10.1/24.",
description: "اختر بداية الإعداد الصحيحة.",
answers: [
"interface Vlan10",
"interface vlan 10",
"vlan-interface 10",
"router vlan 10"
],
correct: 0,
explanation: "interface Vlan10 يدخل إلى واجهة VLAN 10 في Cisco."
},

{
category: "Layer 3",
question: "تريد تحويل منفذ Layer 2 إلى Routed Port.",
description: "اختر الأمر المناسب.",
answers: [
"no switchport",
"switchport routed",
"route port",
"no vlan"
],
correct: 0,
explanation: "no switchport يحول المنفذ إلى Layer 3 Routed Port على الأجهزة التي تدعم ذلك."
},

{
category: "Interface",
question: "تريد معرفة وصف المنافذ.",
description: "اختر الأمر المناسب.",
answers: [
"show interfaces description",
"show descriptions",
"show interface names",
"show ports description"
],
correct: 0,
explanation: "show interfaces description يعرض وصف الواجهات وحالتها."
},

{
category: "Troubleshooting",
question: "تريد معرفة معلومات LLDP/CDP عن الجيران.",
description: "اختر أمر Cisco المناسب.",
answers: [
"show cdp neighbors detail",
"show neighbors",
"show lldp all",
"show cdp all"
],
correct: 0,
explanation: "show cdp neighbors detail يعرض معلومات تفصيلية عن أجهزة CDP المجاورة."
}

],


huawei: [

{
category: "VLAN",
question: "تريد عرض VLANs الموجودة على Huawei.",
description: "اختر الأمر الصحيح.",
answers: [
"display vlan",
"display vlan brief",
"show vlan",
"display vlan-table"
],
correct: 0,
explanation: "display vlan يعرض معلومات VLANs."
},

{
category: "Trunk",
question: "تريد معرفة معلومات VLAN الخاصة بالمنافذ.",
description: "اختر الأمر المناسب.",
answers: [
"display port vlan",
"display trunk",
"display vlan ports",
"display interface vlan"
],
correct: 0,
explanation: "display port vlan يعرض معلومات VLAN المرتبطة بالمنافذ."
},

{
category: "Trunk",
question: "تريد السماح بمرور VLANs 10 و20 و30 على Trunk.",
description: "اختر الأمر المناسب.",
answers: [
"port trunk allow-pass vlan 10 20 30",
"port access vlan 10 20 30",
"trunk vlan 10 20 30",
"port vlan allow 10 20 30"
],
correct: 0,
explanation: "port trunk allow-pass vlan يحدد VLANs المسموح بمرورها."
},

{
category: "MAC",
question: "تريد عرض MAC addresses على واجهة معينة.",
description: "اختر الأمر المناسب.",
answers: [
"display mac-address interface GigabitEthernet 0/0/1",
"display arp interface GigabitEthernet 0/0/1",
"display vlan interface GigabitEthernet 0/0/1",
"display interface mac"
],
correct: 0,
explanation: "display mac-address interface يعرض MACs التي تعلمها المنفذ."
},

{
category: "STP",
question: "تريد عرض معلومات STP.",
description: "اختر الأمر المناسب.",
answers: [
"display stp",
"display spanning-tree",
"display stp-table",
"show stp"
],
correct: 0,
explanation: "display stp يعرض معلومات Spanning Tree في Huawei."
},

{
category: "STP",
question: "تريد جعل منفذ Edge Port.",
description: "اختر الأمر المناسب.",
answers: [
"stp edged-port enable",
"stp edge enable",
"portfast enable",
"stp portfast"
],
correct: 0,
explanation: "stp edged-port enable يستخدم لتفعيل Edge Port."
},

{
category: "Routing",
question: "تريد إضافة Static Route لشبكة 192.168.20.0/24 عبر 10.0.0.2.",
description: "اختر الأمر الصحيح.",
answers: [
"ip route-static 192.168.20.0 255.255.255.0 10.0.0.2",
"route-static 192.168.20.0 10.0.0.2",
"static route 192.168.20.0 10.0.0.2",
"ip static-route 192.168.20.0 10.0.0.2"
],
correct: 0,
explanation: "ip route-static هو أمر Static Route في Huawei VRP."
},

{
category: "OSPF",
question: "تريد تشغيل OSPF Process ID 1.",
description: "اختر الأمر الصحيح.",
answers: [
"ospf 1",
"router ospf 1",
"ospf process 1",
"enable ospf 1"
],
correct: 0,
explanation: "ospf 1 ينشئ OSPF process رقم 1."
},

{
category: "OSPF",
question: "تريد معرفة جيران OSPF.",
description: "اختر الأمر المناسب.",
answers: [
"display ospf peer",
"display ospf neighbor",
"show ospf peer",
"display ip ospf"
],
correct: 0,
explanation: "display ospf peer يعرض جيران OSPF."
},

{
category: "DHCP",
question: "تريد عرض معلومات IP Pool.",
description: "اختر الأمر المناسب.",
answers: [
"display ip pool",
"display dhcp binding",
"display dhcp clients",
"display ip dhcp"
],
correct: 0,
explanation: "display ip pool يعرض معلومات IP Pool."
},

{
category: "SSH",
question: "تريد معرفة حالة SSH Server.",
description: "اختر الأمر المناسب.",
answers: [
"display ssh server status",
"display ssh",
"display ssh status",
"show ssh server"
],
correct: 0,
explanation: "display ssh server status يعرض حالة SSH Server."
},

{
category: "Users",
question: "تريد معرفة المستخدمين والجلسات الحالية.",
description: "اختر الأمر المناسب.",
answers: [
"display users",
"display sessions",
"display login",
"display user-table"
],
correct: 0,
explanation: "display users يعرض المستخدمين والجلسات."
},

{
category: "ACL",
question: "تريد عرض ACL رقم 3000.",
description: "اختر الأمر المناسب.",
answers: [
"display acl 3000",
"display access-list 3000",
"show acl 3000",
"display filter 3000"
],
correct: 0,
explanation: "display acl 3000 يعرض تفاصيل ACL رقم 3000."
},

{
category: "Troubleshooting",
question: "تريد معرفة أخطاء الواجهات.",
description: "اختر أمر الفحص المناسب.",
answers: [
"display interface counters errors",
"display errors",
"display port errors",
"display interface errors"
],
correct: 0,
explanation: "display interface counters errors يعرض عدادات أخطاء الواجهات."
},

{
category: "Troubleshooting",
question: "تريد عرض سجل الأحداث.",
description: "اختر الأمر المناسب.",
answers: [
"display logbuffer",
"display logs",
"display system-log",
"display event"
],
correct: 0,
explanation: "display logbuffer يعرض رسائل السجل."
},

{
category: "System",
question: "تريد معرفة استخدام CPU.",
description: "اختر الأمر الصحيح.",
answers: [
"display cpu-usage",
"display cpu",
"display system cpu",
"display processor"
],
correct: 0,
explanation: "display cpu-usage يعرض استخدام المعالج."
},

{
category: "Layer 3",
question: "تريد إنشاء واجهة VLANIF 10.",
description: "اختر الأمر الصحيح.",
answers: [
"interface Vlanif 10",
"interface vlan 10",
"vlan-interface 10",
"interface vlanif10"
],
correct: 0,
explanation: "interface Vlanif 10 ينشئ ويدخل إلى واجهة VLANIF 10."
},

{
category: "Layer 3",
question: "تريد تحويل منفذ Layer 2 إلى Layer 3.",
description: "اختر الأمر المناسب على الأجهزة التي تدعمه.",
answers: [
"undo portswitch",
"no switchport",
"route port",
"undo vlan"
],
correct: 0,
explanation: "undo portswitch يحول المنفذ إلى Layer 3 على الأجهزة التي تدعم ذلك."
},

{
category: "Interface",
question: "تريد عرض وصف الواجهات.",
description: "اختر الأمر المناسب.",
answers: [
"display interface description",
"display descriptions",
"display interface names",
"display port description"
],
correct: 0,
explanation: "display interface description يعرض وصف الواجهات."
},

{
category: "Troubleshooting",
question: "تريد عرض معلومات LLDP عن الجيران.",
description: "اختر الأمر المناسب.",
answers: [
"display lldp neighbor verbose",
"display lldp neighbors",
"display neighbor detail",
"display lldp all"
],
correct: 0,
explanation: "display lldp neighbor verbose يعرض معلومات تفصيلية عن LLDP neighbors."
}

]
},


/* =====================================================
ADVANCED
===================================================== */

advanced: {

cisco: [

{
category: "OSPF",
question: "تريد معرفة واجهات OSPF وحالتها.",
description: "اختر الأمر المناسب.",
answers: [
"show ip ospf interface",
"show ospf interfaces",
"show ip interface ospf",
"show ospf"
],
correct: 0,
explanation: "show ip ospf interface يعرض معلومات OSPF على الواجهات."
},

{
category: "OSPF",
question: "تريد عرض المسارات التي تعلمها OSPF.",
description: "اختر الأمر المناسب.",
answers: [
"show ip route ospf",
"show ospf route",
"show routing ospf",
"show ip ospf route"
],
correct: 0,
explanation: "show ip route ospf يعرض المسارات المتعلمة من OSPF."
},

{
category: "STP",
question: "تريد معرفة Root Bridge ومعلومات STP بالتفصيل.",
description: "اختر الأمر المناسب.",
answers: [
"show spanning-tree detail",
"show spanning-tree",
"show root bridge",
"show stp root"
],
correct: 1,
explanation: "show spanning-tree يعرض معلومات Root Bridge وحالة STP."
},

{
category: "EtherChannel",
question: "تريد معرفة حالة EtherChannel.",
description: "اختر الأمر المناسب.",
answers: [
"show etherchannel summary",
"show channel summary",
"show port-channel",
"show lacp"
],
correct: 0,
explanation: "show etherchannel summary يعرض حالة EtherChannel."
},

{
category: "LACP",
question: "تريد معرفة تفاصيل LACP.",
description: "اختر الأمر المناسب.",
answers: [
"show lacp neighbor",
"show etherchannel lacp",
"show lacp",
"show channel lacp"
],
correct: 2,
explanation: "show lacp يعرض معلومات LACP على الأجهزة التي تدعم الأمر."
},

{
category: "Port Security",
question: "تريد تفعيل Port Security على منفذ.",
description: "اختر الأمر الصحيح.",
answers: [
"switchport port-security",
"port-security enable",
"security port enable",
"switchport security enable"
],
correct: 0,
explanation: "switchport port-security يستخدم لتفعيل Port Security."
},

{
category: "Port Security",
question: "تريد السماح بحد أقصى جهازين MAC على المنفذ.",
description: "اختر الأمر المناسب.",
answers: [
"switchport port-security maximum 2",
"switchport maximum mac 2",
"port-security max 2",
"switchport mac-limit 2"
],
correct: 0,
explanation: "الأمر يحدد الحد الأقصى لعدد MAC addresses."
},

{
category: "VLAN",
question: "تريد معرفة VLAN محددة مثل VLAN 10.",
description: "اختر الأمر المناسب.",
answers: [
"show vlan id 10",
"show vlan 10",
"show vlan interface 10",
"show vlan-number 10"
],
correct: 0,
explanation: "show vlan id 10 يعرض معلومات VLAN 10."
},

{
category: "Interface",
question: "تريد معرفة معلومات Transceiver على المنافذ.",
description: "اختر الأمر المناسب.",
answers: [
"show interfaces transceiver",
"show transceiver",
"show interfaces optic",
"show sfp"
],
correct: 0,
explanation: "show interfaces transceiver يعرض معلومات Transceiver."
},

{
category: "Hardware",
question: "تريد معرفة معلومات Hardware Inventory.",
description: "اختر الأمر المناسب.",
answers: [
"show inventory",
"show hardware",
"show chassis",
"show modules all"
],
correct: 0,
explanation: "show inventory يعرض معلومات المكونات والـHardware."
},

{
category: "System",
question: "تريد معرفة الوقت الحالي على الجهاز.",
description: "اختر الأمر المناسب.",
answers: [
"show clock",
"show time",
"show system clock",
"show datetime"
],
correct: 0,
explanation: "show clock يعرض وقت الجهاز."
},

{
category: "Routing",
question: "تريد عرض Static Routes فقط.",
description: "اختر الأمر المناسب.",
answers: [
"show ip route static",
"show static routes",
"show ip static",
"show routing static"
],
correct: 0,
explanation: "show ip route static يعرض المسارات الثابتة."
},

{
category: "ARP",
question: "تريد البحث عن IP محدد داخل ARP table.",
description: "مثلاً 192.168.1.10.",
answers: [
"show arp 192.168.1.10",
"show ip arp 192.168.1.10",
"show arp address 192.168.1.10",
"show ip address arp 192.168.1.10"
],
correct: 0,
explanation: "show arp مع العنوان يساعد في فحص سجل ARP لذلك العنوان."
},

{
category: "Configuration",
question: "تريد البحث عن إعدادات VLAN داخل running-config.",
description: "استخدم فلترة الإخراج.",
answers: [
"show running-config | include vlan",
"show running-config vlan",
"show vlan | running",
"show config include vlan"
],
correct: 0,
explanation: "يمكن استخدام pipe مع include لفلترة running-config."
},

{
category: "Configuration",
question: "تريد عرض إعدادات منفذ محدد فقط.",
description: "المنفذ GigabitEthernet0/1.",
answers: [
"show running-config interface GigabitEthernet0/1",
"show interface-config GigabitEthernet0/1",
"show config port GigabitEthernet0/1",
"show interface running GigabitEthernet0/1"
],
correct: 0,
explanation: "الأمر يعرض إعدادات الواجهة المحددة من running-config."
},

{
category: "ACL",
question: "تريد معرفة ACLs الموجودة على الجهاز.",
description: "اختر أمر العرض المناسب.",
answers: [
"show access-lists",
"show acl table",
"show security",
"show filters"
],
correct: 0,
explanation: "show access-lists يعرض ACLs."
},

{
category: "CPU",
question: "الجهاز بطيء وتريد فحص أكثر العمليات استهلاكًا للمعالج.",
description: "اختر الأمر المناسب.",
answers: [
"show processes cpu",
"show cpu processes",
"show process usage",
"show system load"
],
correct: 0,
explanation: "show processes cpu يساعد في تحديد استهلاك CPU."
},

{
category: "Logging",
question: "تريد مراجعة رسائل النظام لمعرفة سبب مشكلة حدثت.",
description: "اختر أمر السجل.",
answers: [
"show logging",
"show events",
"show system messages",
"show history"
],
correct: 0,
explanation: "show logging يعرض رسائل النظام المسجلة."
},

{
category: "Neighbor",
question: "تريد معلومات تفصيلية عن جهاز Cisco متصل مباشرة.",
description: "استخدم CDP.",
answers: [
"show cdp neighbors detail",
"show neighbors detail",
"show cdp detail",
"show connected-devices"
],
correct: 0,
explanation: "show cdp neighbors detail يعرض معلومات تفصيلية عن أجهزة CDP."
},

{
category: "Troubleshooting",
question: "تريد تتبع المسار الذي تسلكه الحزم إلى جهاز بعيد.",
description: "اختر الأداة المناسبة.",
answers: [
"ping",
"traceroute",
"show route",
"path"
],
correct: 1,
explanation: "traceroute يستخدم لمعرفة المسار عبر أجهزة الشبكة."
}

],


huawei: [

{
category: "OSPF",
question: "تريد معرفة واجهات OSPF.",
description: "اختر الأمر المناسب.",
answers: [
"display ospf interface",
"display ospf interfaces",
"display ip ospf interface",
"display ospf"
],
correct: 0,
explanation: "display ospf interface يعرض معلومات واجهات OSPF."
},

{
category: "OSPF",
question: "تريد عرض المسارات المتعلمة من OSPF.",
description: "اختر الأمر المناسب.",
answers: [
"display ip routing-table protocol ospf",
"display ospf route",
"display route ospf",
"display ospf routing"
],
correct: 0,
explanation: "display ip routing-table protocol ospf يعرض مسارات OSPF."
},

{
category: "STP",
question: "تريد عرض معلومات STP.",
description: "اختر الأمر المناسب.",
answers: [
"display stp",
"display spanning-tree",
"display stp root",
"display tree"
],
correct: 0,
explanation: "display stp يعرض معلومات STP."
},

{
category: "Eth-Trunk",
question: "تريد الدخول إلى Eth-Trunk 1.",
description: "اختر الأمر الصحيح.",
answers: [
"interface Eth-Trunk 1",
"eth-trunk 1",
"interface trunk 1",
"trunk interface 1"
],
correct: 0,
explanation: "interface Eth-Trunk 1 يدخل إلى واجهة Eth-Trunk 1."
},

{
category: "LACP",
question: "تريد استخدام LACP على Eth-Trunk.",
description: "اختر الأمر المناسب.",
answers: [
"mode lacp-static",
"lacp enable",
"mode lacp",
"eth-trunk lacp"
],
correct: 0,
explanation: "mode lacp-static يستخدم لتشغيل LACP mode في Huawei."
},

{
category: "Port Security",
question: "تريد تفعيل Port Security.",
description: "اختر الأمر المناسب.",
answers: [
"port-security enable",
"switchport port-security",
"security port enable",
"port security"
],
correct: 0,
explanation: "port-security enable يستخدم لتفعيل Port Security."
},

{
category: "Port Security",
question: "تريد تحديد الحد الأقصى إلى MAC address عدد 2.",
description: "اختر الأمر المناسب.",
answers: [
"port-security max-mac-num 2",
"port-security maximum 2",
"mac-limit 2",
"port max-mac 2"
],
correct: 0,
explanation: "port-security max-mac-num 2 يحدد الحد الأقصى لعدد MACs."
},

{
category: "VLAN",
question: "تريد عرض VLAN رقم 10.",
description: "اختر الأمر المناسب.",
answers: [
"display vlan 10",
"display vlan id 10",
"display vlan-number 10",
"display vlan interface 10"
],
correct: 0,
explanation: "display vlan 10 يعرض معلومات VLAN 10."
},

{
category: "Optical",
question: "تريد معرفة معلومات Transceiver.",
description: "اختر الأمر المناسب.",
answers: [
"display transceiver",
"display interfaces transceiver",
"display sfp",
"display optic"
],
correct: 0,
explanation: "display transceiver يعرض معلومات وحدات Transceiver."
},

{
category: "Hardware",
question: "تريد معرفة Electronic Label للمكونات.",
description: "اختر الأمر المناسب.",
answers: [
"display elabel",
"display inventory",
"display hardware",
"display chassis"
],
correct: 0,
explanation: "display elabel يعرض Electronic Label للمكونات."
},

{
category: "System",
question: "تريد معرفة وقت الجهاز.",
description: "اختر الأمر المناسب.",
answers: [
"display clock",
"display time",
"display system clock",
"display datetime"
],
correct: 0,
explanation: "display clock يعرض وقت الجهاز."
},

{
category: "Routing",
question: "تريد عرض Static Routes فقط.",
description: "اختر الأمر المناسب.",
answers: [
"display ip routing-table protocol static",
"display static route",
"display route static",
"display ip static"
],
correct: 0,
explanation: "الأمر يعرض المسارات التي بروتوكولها Static."
},

{
category: "ARP",
question: "تريد البحث عن عنوان IP داخل ARP.",
description: "مثلاً 192.168.1.10.",
answers: [
"display arp | include 192.168.1.10",
"display arp 192.168.1.10",
"display ip arp 192.168.1.10",
"display arp-address 192.168.1.10"
],
correct: 0,
explanation: "يمكن استخدام include لفلترة مخرجات ARP."
},

{
category: "Configuration",
question: "تريد البحث عن إعدادات VLAN داخل Configuration.",
description: "استخدم include.",
answers: [
"display current-configuration | include vlan",
"display current-configuration vlan",
"display vlan | configuration",
"display config include vlan"
],
correct: 0,
explanation: "include يسمح بفلترة مخرجات current-configuration."
},

{
category: "Configuration",
question: "تريد عرض إعدادات واجهة معينة فقط.",
description: "الواجهة GigabitEthernet 0/0/1.",
answers: [
"display current-configuration interface GigabitEthernet 0/0/1",
"display interface config GigabitEthernet 0/0/1",
"display config port GigabitEthernet 0/0/1",
"display interface running GigabitEthernet 0/0/1"
],
correct: 0,
explanation: "الأمر يعرض إعدادات الواجهة المحددة."
},

{
category: "ACL",
question: "تريد عرض ACL رقم 3000.",
description: "اختر الأمر المناسب.",
answers: [
"display acl 3000",
"display access-list 3000",
"display security 3000",
"display filter 3000"
],
correct: 0,
explanation: "display acl 3000 يعرض ACL رقم 3000."
},

{
category: "CPU",
question: "تريد معرفة استخدام CPU.",
description: "اختر الأمر المناسب.",
answers: [
"display cpu-usage",
"display cpu",
"display system cpu",
"display processor"
],
correct: 0,
explanation: "display cpu-usage يعرض استخدام CPU."
},

{
category: "Logging",
question: "تريد مراجعة سجل النظام.",
description: "اختر الأمر المناسب.",
answers: [
"display logbuffer",
"display logs",
"display system messages",
"display history"
],
correct: 0,
explanation: "display logbuffer يعرض رسائل سجل النظام."
},

{
category: "Neighbor",
question: "تريد معلومات تفصيلية عن أجهزة LLDP المجاورة.",
description: "اختر الأمر المناسب.",
answers: [
"display lldp neighbor verbose",
"display neighbor detail",
"display lldp detail",
"display connected-device"
],
correct: 0,
explanation: "display lldp neighbor verbose يعرض تفاصيل الجيران عبر LLDP."
},

{
category: "Troubleshooting",
question: "تريد تتبع المسار إلى جهاز بعيد.",
description: "اختر الأداة المناسبة في Huawei.",
answers: [
"ping",
"tracert",
"display route",
"path"
],
correct: 1,
explanation: "tracert يستخدم لتتبع المسار إلى الوجهة."
}

]
},


/* =====================================================
REAL SCENARIOS
===================================================== */

real: {

cisco: [

{
category: "Scenario",
question: "المستخدم يقول إن جهازه لا يحصل على اتصال. أول شيء تريد فحصه هو حالة المنفذ.",
description: "اختر الأمر الأنسب كبداية.",
answers: [
"show ip route",
"show interfaces status",
"show access-lists",
"show ip ospf neighbor"
],
correct: 1,
explanation: "ابدأ بفحص حالة المنفذ لمعرفة هل هو up أو down."
},

{
category: "Scenario",
question: "المنفذ Up لكن الجهاز لا يتواصل مع بقية الشبكة.",
description: "تريد معرفة الـVLAN المرتبطة بالمنفذ.",
answers: [
"show vlan brief",
"show clock",
"show version",
"show users"
],
correct: 0,
explanation: "فحص VLAN يساعد في التأكد من أن المنفذ موجود في الـVLAN الصحيحة."
},

{
category: "Scenario",
question: "المستخدم في VLAN 10 لا يستطيع الوصول إلى VLAN 20.",
description: "تريد فحص جدول التوجيه.",
answers: [
"show ip route",
"show vlan brief",
"show mac address-table",
"show users"
],
correct: 0,
explanation: "التواصل بين شبكات مختلفة يحتاج Routing، لذلك فحص جدول التوجيه خطوة مهمة."
},

{
category: "Scenario",
question: "تريد التأكد هل VLAN 20 تمر عبر Trunk.",
description: "اختر أمر الفحص.",
answers: [
"show interfaces trunk",
"show users",
"show clock",
"show version"
],
correct: 0,
explanation: "show interfaces trunk يعرض الـVLANs المسموح بمرورها على Trunk."
},

{
category: "Scenario",
question: "جهاز في الشبكة لا تستطيع معرفة MAC الخاص به على السويتش.",
description: "تريد البحث في MAC table.",
answers: [
"show mac address-table",
"show ip route",
"show logging",
"show version"
],
correct: 0,
explanation: "MAC address-table تساعدك في معرفة أين تعلم السويتش عنوان MAC."
},

{
category: "Scenario",
question: "تريد معرفة أي منفذ تعلم عنوان MAC معين.",
description: "اختر الأداة المناسبة.",
answers: [
"show mac address-table address 0011.2233.4455",
"show vlan address 0011.2233.4455",
"show arp address 0011.2233.4455",
"show route address 0011.2233.4455"
],
correct: 0,
explanation: "يمكن البحث عن MAC محدد داخل MAC address-table."
},

{
category: "Scenario",
question: "الـGateway لا يرد على Ping.",
description: "تريد اختبار الوصول إليه مباشرة.",
answers: [
"ping 192.168.1.1",
"show vlan",
"show version",
"show users"
],
correct: 0,
explanation: "Ping هو الاختبار المباشر لمعرفة إمكانية الوصول إلى الـGateway."
},

{
category: "Scenario",
question: "Ping إلى جهاز بعيد يفشل، وتريد معرفة أين يتوقف المسار.",
description: "استخدم أداة تتبع المسار.",
answers: [
"show logging",
"traceroute 192.168.20.1",
"show vlan brief",
"show clock"
],
correct: 1,
explanation: "traceroute يساعد في تحديد مكان المشكلة على المسار."
},

{
category: "Scenario",
question: "OSPF لا يبني Neighbor مع الراوتر الآخر.",
description: "ابدأ بفحص الجيران.",
answers: [
"show ip ospf neighbor",
"show vlan brief",
"show users",
"show inventory"
],
correct: 0,
explanation: "show ip ospf neighbor يوضح هل تم تكوين علاقة الجيرة."
},

{
category: "Scenario",
question: "تريد معرفة الواجهات التي يعمل عليها OSPF.",
description: "اختر الأمر المناسب.",
answers: [
"show ip ospf interface",
"show interfaces trunk",
"show vlan brief",
"show users"
],
correct: 0,
explanation: "هذا الأمر يعرض معلومات OSPF المرتبطة بالواجهات."
},

{
category: "Scenario",
question: "السويتش يسجل أخطاء كثيرة على منفذ معين.",
description: "تريد فحص عدادات الأخطاء.",
answers: [
"show interfaces counters errors",
"show version",
"show vlan",
"show users"
],
correct: 0,
explanation: "Counters errors تساعد في معرفة أخطاء الواجهة."
},

{
category: "Scenario",
question: "تريد معرفة سبب حدث حصل على الجهاز قبل دقائق.",
description: "ابدأ من Logs.",
answers: [
"show logging",
"show clock",
"show vlan",
"show mac address-table"
],
correct: 0,
explanation: "Logs قد تحتوي على رسائل تساعد في تحديد سبب المشكلة."
},

{
category: "Scenario",
question: "الجهاز يستخدم CPU بنسبة عالية وتريد معرفة العمليات.",
description: "اختر الأمر المناسب.",
answers: [
"show processes cpu",
"show ip route",
"show vlan",
"show interfaces trunk"
],
correct: 0,
explanation: "show processes cpu يساعد في تحديد العمليات التي تستهلك CPU."
},

{
category: "Scenario",
question: "تريد معرفة جهاز الشبكة المتصل مباشرة بمنفذ Cisco.",
description: "استخدم CDP.",
answers: [
"show cdp neighbors detail",
"show vlan brief",
"show ip route",
"show logging"
],
correct: 0,
explanation: "CDP يعرض الأجهزة Cisco المتصلة مباشرة."
},

{
category: "Scenario",
question: "تريد معرفة هل SSH يعمل على الجهاز.",
description: "اختر أمر الفحص.",
answers: [
"show ssh",
"show vlan",
"show ip route",
"show clock"
],
correct: 0,
explanation: "show ssh يعرض معلومات SSH."
},

{
category: "Scenario",
question: "تريد التأكد من الإعدادات الحالية لمنفذ محدد.",
description: "استخدم running-config مع interface.",
answers: [
"show running-config interface GigabitEthernet0/1",
"show interface config",
"show port config",
"show running port"
],
correct: 0,
explanation: "يسمح لك الأمر بمراجعة إعدادات الواجهة المحددة."
},

{
category: "Scenario",
question: "أضفت إعدادات جديدة وتريد التأكد من وجودها في الذاكرة الحالية.",
description: "اختر الأمر المناسب.",
answers: [
"show running-config",
"show startup-config only",
"show version",
"show clock"
],
correct: 0,
explanation: "running-config يعرض الإعدادات الحالية في الذاكرة."
},

{
category: "Scenario",
question: "بعد تعديل الإعدادات تريد حفظها حتى تبقى بعد إعادة التشغيل.",
description: "اختر الأمر المناسب.",
answers: [
"copy running-config startup-config",
"show startup-config",
"reload",
"clear config"
],
correct: 0,
explanation: "يتم نسخ الإعدادات الحالية إلى Startup Configuration."
},

{
category: "Scenario",
question: "تريد معرفة هل هناك Static Route إلى شبكة معينة.",
description: "اختر الأمر المناسب.",
answers: [
"show ip route static",
"show vlan",
"show users",
"show interfaces"
],
correct: 0,
explanation: "هذا الأمر يعرض المسارات الثابتة."
},

{
category: "Scenario",
question: "تريد تتبع مشكلة وصول إلى شبكة بعيدة بطريقة منظمة.",
description: "ما البداية الأفضل من الخيارات التالية؟",
answers: [
"تغيير إعدادات الراوتر مباشرة",
"إعادة تشغيل السويتش",
"اختبار Ping ثم فحص المسار",
"حذف VLANs وإعادة إنشائها"
],
correct: 2,
explanation: "ابدأ بالاختبارات الأقل تأثيرًا: Ping ثم تتبع المسار وفحص الإعدادات حسب النتيجة."
}

],


huawei: [

{
category: "Scenario",
question: "المستخدم يقول إن جهازه لا يحصل على اتصال. أول شيء تريد فحصه هو حالة المنفذ.",
description: "اختر الأمر الأنسب.",
answers: [
"display ip interface brief",
"display ip routing-table",
"display acl all",
"display ospf peer"
],
correct: 0,
explanation: "ابدأ بفحص حالة الواجهة وعنوان IP."
},

{
category: "Scenario",
question: "المنفذ يعمل لكن الجهاز في VLAN غير صحيحة.",
description: "تريد فحص معلومات VLAN للمنافذ.",
answers: [
"display port vlan",
"display clock",
"display version",
"display users"
],
correct: 0,
explanation: "display port vlan يساعد في معرفة VLAN المرتبطة بالمنافذ."
},

{
category: "Scenario",
question: "جهاز في شبكة لا يستطيع الوصول إلى شبكة أخرى.",
description: "تريد فحص جدول التوجيه.",
answers: [
"display ip routing-table",
"display vlan",
"display users",
"display clock"
],
correct: 0,
explanation: "فحص جدول التوجيه خطوة أساسية في مشاكل الوصول بين الشبكات."
},

{
category: "Scenario",
question: "تريد التأكد هل VLAN 20 مسموح بها على Trunk.",
description: "اختر أمر الفحص.",
answers: [
"display port vlan",
"display users",
"display clock",
"display version"
],
correct: 0,
explanation: "display port vlan يعرض معلومات VLAN للمنافذ."
},

{
category: "Scenario",
question: "تريد معرفة MAC addresses التي تعلمها السويتش.",
description: "اختر الأمر المناسب.",
answers: [
"display mac-address",
"display arp",
"display ip routing-table",
"display version"
],
correct: 0,
explanation: "display mac-address يعرض MAC address table."
},

{
category: "Scenario",
question: "تريد معرفة أي منفذ تعلم MAC معين.",
description: "استخدم MAC table مع العنوان.",
answers: [
"display mac-address 0011-2233-4455",
"display arp 0011-2233-4455",
"display vlan 0011-2233-4455",
"display route 0011-2233-4455"
],
correct: 0,
explanation: "يمكن البحث عن MAC محدد في MAC address table."
},

{
category: "Scenario",
question: "الـGateway لا يرد على Ping.",
description: "اختبر الوصول إليه.",
answers: [
"ping 192.168.1.1",
"display vlan",
"display version",
"display users"
],
correct: 0,
explanation: "Ping هو الاختبار الأساسي للوصول إلى Gateway."
},

{
category: "Scenario",
question: "تريد معرفة المسار إلى جهاز بعيد.",
description: "استخدم أداة تتبع المسار.",
answers: [
"display logbuffer",
"tracert 192.168.20.1",
"display vlan",
"display clock"
],
correct: 1,
explanation: "tracert يساعد في تتبع المسار إلى الوجهة."
},

{
category: "Scenario",
question: "OSPF لا يبني Neighbor.",
description: "ابدأ بفحص جيران OSPF.",
answers: [
"display ospf peer",
"display vlan",
"display users",
"display elabel"
],
correct: 0,
explanation: "display ospf peer يوضح حالة جيران OSPF."
},

{
category: "Scenario",
question: "تريد معرفة الواجهات التي يعمل عليها OSPF.",
description: "اختر الأمر المناسب.",
answers: [
"display ospf interface",
"display port vlan",
"display users",
"display clock"
],
correct: 0,
explanation: "display ospf interface يعرض معلومات OSPF على الواجهات."
},

{
category: "Scenario",
question: "تريد فحص أخطاء المنافذ.",
description: "اختر أمر Counters.",
answers: [
"display interface counters errors",
"display version",
"display vlan",
"display users"
],
correct: 0,
explanation: "الأمر يعرض عدادات أخطاء الواجهات."
},

{
category: "Scenario",
question: "تريد معرفة رسائل النظام الأخيرة.",
description: "اختر الأمر المناسب.",
answers: [
"display logbuffer",
"display clock",
"display vlan",
"display mac-address"
],
correct: 0,
explanation: "display logbuffer يعرض رسائل السجل."
},

{
category: "Scenario",
question: "الجهاز يستخدم CPU بنسبة عالية.",
description: "تريد فحص استخدام المعالج.",
answers: [
"display cpu-usage",
"display ip routing-table",
"display vlan",
"display port vlan"
],
correct: 0,
explanation: "display cpu-usage يعرض استخدام CPU."
},

{
category: "Scenario",
question: "تريد معرفة الجهاز المتصل مباشرة عبر LLDP.",
description: "اختر الأمر المناسب.",
answers: [
"display lldp neighbor verbose",
"display vlan",
"display ip route",
"display logbuffer"
],
correct: 0,
explanation: "LLDP يعرض معلومات الأجهزة المجاورة."
},

{
category: "Scenario",
question: "تريد معرفة حالة SSH Server.",
description: "اختر أمر الفحص.",
answers: [
"display ssh server status",
"display vlan",
"display ip route",
"display clock"
],
correct: 0,
explanation: "display ssh server status يعرض حالة SSH Server."
},

{
category: "Scenario",
question: "تريد مراجعة إعدادات واجهة محددة.",
description: "الواجهة GigabitEthernet 0/0/1.",
answers: [
"display current-configuration interface GigabitEthernet 0/0/1",
"display interface config",
"display port config",
"display running port"
],
correct: 0,
explanation: "يمكن عرض إعدادات واجهة محددة باستخدام current-configuration interface."
},

{
category: "Scenario",
question: "تريد عرض كامل الإعدادات الحالية.",
description: "اختر الأمر المناسب.",
answers: [
"display current-configuration",
"display startup",
"display version",
"display clock"
],
correct: 0,
explanation: "display current-configuration يعرض الإعدادات الحالية."
},

{
category: "Scenario",
question: "بعد تعديل الإعدادات تريد حفظها.",
description: "حتى تبقى بعد إعادة التشغيل.",
answers: [
"save",
"display current-configuration",
"reboot",
"reset saved"
],
correct: 0,
explanation: "save يحفظ الإعدادات الحالية."
},

{
category: "Scenario",
question: "تريد معرفة Static Routes الموجودة.",
description: "اختر الأمر المناسب.",
answers: [
"display ip routing-table protocol static",
"display vlan",
"display users",
"display interface"
],
correct: 0,
explanation: "الأمر يعرض المسارات التي بروتوكولها Static."
},

{
category: "Scenario",
question: "تريد التعامل مع مشكلة شبكة بطريقة منظمة.",
description: "ما البداية المناسبة؟",
answers: [
"تغيير كل الإعدادات",
"إعادة تشغيل الأجهزة مباشرة",
"اختبار الاتصال ثم فحص المسار والواجهات",
"حذف جميع VLANs"
],
correct: 2,
explanation: "الـTroubleshooting المنظم يبدأ بالاختبارات ثم تضييق نطاق المشكلة بدل تغيير الإعدادات عشوائيًا."
}

]
}

};


/* =========================================================
LEVEL LABELS
========================================================= */

const modeLabels = {
beginner: "🟢 مبتدئ",
intermediate: "🟡 متوسط",
advanced: "🔴 متقدم",
real: "🧑‍💻 سيناريو واقعي"
};


/* =========================================================
START PRACTICE
========================================================= */

function startPractice() {

const source =
practiceQuestions[currentMode] &&
practiceQuestions[currentMode][currentDevice];

if (!source || source.length === 0) {
console.error("No questions found for:", currentMode, currentDevice);
return;
}

currentQuestions = shuffleArray([...source])
.slice(0, QUESTIONS_PER_SESSION);

currentQuestionIndex = 0;
correctAnswers = 0;
answered = false;

if (practiceCard) {
practiceCard.hidden = false;
}

if (finalResult) {
finalResult.hidden = true;
}

if (nextQuestionButton) {
nextQuestionButton.disabled = true;
}

loadQuestion();
}


/* =========================================================
LOAD QUESTION
========================================================= */

function loadQuestion() {

if (!currentQuestions.length) {
return;
}

const question = currentQuestions[currentQuestionIndex];

if (!question) {
showFinalResult();
return;
}

answered = false;

/* -------------------------
QUESTION TEXT
------------------------- */

if (questionTitle) {
questionTitle.textContent = question.question;
}

if (questionDescription) {
questionDescription.textContent = question.description;
}

if (questionCategory) {
questionCategory.textContent = question.category;
}

if (questionLevel) {
questionLevel.textContent = modeLabels[currentMode];
}


/* -------------------------
STATS
------------------------- */

updateStats();


/* -------------------------
RESULT
------------------------- */

if (resultTitle) {
resultTitle.textContent = "اختر إجابة";
}

if (resultDescription) {
resultDescription.textContent =
"بعد اختيار الإجابة سيظهر لك تفسيرها.";
}

if (answerResult) {
answerResult.classList.remove("correct", "wrong");
}


/* -------------------------
NEXT BUTTON
------------------------- */

if (nextQuestionButton) {
nextQuestionButton.disabled = true;

if (
currentQuestionIndex ===
currentQuestions.length - 1
) {
nextQuestionButton.textContent =
"عرض النتيجة 🏆";
} else {
nextQuestionButton.textContent =
"السؤال التالي →";
}
}


/* -------------------------
ANSWERS
------------------------- */

renderAnswers(question);
}


/* =========================================================
RENDER ANSWERS
========================================================= */

function renderAnswers(question) {

if (!answersContainer) {
return;
}

answersContainer.innerHTML = "";

const letters = ["A", "B", "C", "D"];

question.answers.forEach(function (answer, index) {

const button = document.createElement("button");

button.type = "button";
button.className = "answer-button";
button.dataset.answer = index;

const letter = document.createElement("span");

letter.className = "answer-letter";
letter.textContent = letters[index];


const code = document.createElement("code");

code.textContent = answer;


button.appendChild(letter);
button.appendChild(code);

button.addEventListener("click", function () {
checkAnswer(index, button);
});

answersContainer.appendChild(button);
});
}


/* =========================================================
CHECK ANSWER
========================================================= */

function checkAnswer(selectedIndex, selectedButton) {

if (answered) {
return;
}

const question =
currentQuestions[currentQuestionIndex];

if (!question) {
return;
}

answered = true;

const answerButtons =
answersContainer.querySelectorAll(".answer-button");

answerButtons.forEach(function (button) {
button.disabled = true;
});


const isCorrect =
Number(selectedIndex) ===
Number(question.correct);


/* -------------------------
CORRECT
------------------------- */

if (isCorrect) {

correctAnswers++;

if (selectedButton) {
selectedButton.classList.add("correct");
}

if (resultTitle) {
resultTitle.textContent = "✅ إجابة صحيحة";
}

if (resultDescription) {
resultDescription.textContent =
question.explanation;
}

if (answerResult) {
answerResult.classList.remove("wrong");
answerResult.classList.add("correct");
}

}


/* -------------------------
WRONG
------------------------- */

else {

if (selectedButton) {
selectedButton.classList.add("wrong");
}

const correctButton =
answersContainer.querySelector(
'[data-answer="' + question.correct + '"]'
);

if (correctButton) {
correctButton.classList.add("correct");
}

if (resultTitle) {
resultTitle.textContent = "❌ إجابة غير صحيحة";
}

if (resultDescription) {
resultDescription.textContent =
"الإجابة الصحيحة: " +
question.answers[question.correct] +
" — " +
question.explanation;
}

if (answerResult) {
answerResult.classList.remove("correct");
answerResult.classList.add("wrong");
}
}


/* -------------------------
ENABLE NEXT
------------------------- */

if (nextQuestionButton) {
nextQuestionButton.disabled = false;
}

updateStats();
}


/* =========================================================
NEXT QUESTION
========================================================= */

function goToNextQuestion() {

if (!answered) {
return;
}

if (
currentQuestionIndex >=
currentQuestions.length - 1
) {
showFinalResult();
return;
}

currentQuestionIndex++;

loadQuestion();


/* -------------------------
MOBILE SUPPORT
------------------------- */

setTimeout(function () {

if (!practiceCard) {
return;
}

const isMobile =
window.matchMedia(
"(max-width: 700px)"
).matches;

if (isMobile) {

practiceCard.scrollIntoView({
behavior: "smooth",
block: "start"
});

}

}, 80);
}


/* =========================================================
UPDATE STATS
========================================================= */

function updateStats() {

const total =
currentQuestions.length ||
QUESTIONS_PER_SESSION;

const current =
Math.min(
currentQuestionIndex + 1,
total
);

const percentage =
total > 0
? Math.round(
(correctAnswers / total) * 100
)
: 0;


if (questionNumber) {
questionNumber.textContent =
current + " / " + total;
}

if (correctCount) {
correctCount.textContent =
correctAnswers;
}

if (scorePercent) {
scorePercent.textContent =
percentage + "%";
}
}


/* =========================================================
FINAL RESULT
========================================================= */

function showFinalResult() {

answered = false;

const total =
currentQuestions.length;

const percentage =
total > 0
? Math.round(
(correctAnswers / total) * 100
)
: 0;


if (practiceCard) {
practiceCard.hidden = true;
}

if (finalResult) {
finalResult.hidden = false;
}

if (finalScore) {
finalScore.textContent =
correctAnswers +
" / " +
total;
}


saveBestScore(percentage);


setTimeout(function () {

if (finalResult) {

finalResult.scrollIntoView({
behavior: "smooth",
block: "start"
});

}

}, 100);
}


/* =========================================================
SHUFFLE
========================================================= */

function shuffleArray(array) {

for (
let i = array.length - 1;
i > 0;
i--
) {

const j =
Math.floor(
Math.random() * (i + 1)
);

const temp = array[i];

array[i] = array[j];
array[j] = temp;
}

return array;
}


/* =========================================================
MODE BUTTONS
========================================================= */

modeButtons.forEach(function (button) {

button.addEventListener("click", function () {

const mode =
button.dataset.mode;

if (!mode) {
return;
}

currentMode = mode;


modeButtons.forEach(function (item) {
item.classList.remove("active");
});

button.classList.add("active");


startPractice();
});

});


/* =========================================================
DEVICE BUTTONS
========================================================= */

deviceButtons.forEach(function (button) {

button.addEventListener("click", function () {

const device =
button.dataset.device;

if (!device) {
return;
}

currentDevice = device;


deviceButtons.forEach(function (item) {
item.classList.remove("active");
});

button.classList.add("active");


startPractice();
});

});


/* =========================================================
NEXT BUTTON
========================================================= */

if (nextQuestionButton) {

nextQuestionButton.addEventListener(
"click",
function () {

goToNextQuestion();

}
);

}


/* =========================================================
RESTART BUTTON
========================================================= */

if (restartPractice) {

restartPractice.addEventListener(
"click",
function () {

startPractice();

}
);

}


/* =========================================================
KEYBOARD SUPPORT
الكمبيوتر فقط
========================================================= */

document.addEventListener(
"keydown",
function (event) {

if (
event.key === "Enter" &&
answered &&
nextQuestionButton &&
!nextQuestionButton.disabled
) {

const activeElement =
document.activeElement;

if (
activeElement &&
(
activeElement.tagName === "BUTTON" ||
activeElement.tagName === "INPUT" ||
activeElement.tagName === "TEXTAREA"
)
) {
return;
}

goToNextQuestion();
}

}
);


/* =========================================================
LOCAL STORAGE
========================================================= */

function getBestScoreKey() {

return (
"commandPracticeBest_" +
currentMode +
"_" +
currentDevice
);
}


function saveBestScore(score) {

try {

const key =
getBestScoreKey();

const oldScore =
Number(
localStorage.getItem(key) || 0
);

if (score > oldScore) {

localStorage.setItem(
key,
String(score)
);

}

} catch (error) {

console.warn(
"تعذر حفظ أفضل نتيجة:",
error
);

}
}


function getBestScore() {

try {

return Number(
localStorage.getItem(
getBestScoreKey()
) || 0
);

} catch (error) {

return 0;
}
}


/* =========================================================
START
========================================================= */

function initializePractice() {

if (!answersContainer) {
console.error(
"answersContainer غير موجود."
);
return;
}

if (!questionTitle) {
console.error(
"questionTitle غير موجود."
);
return;
}

if (!nextQuestionButton) {
console.error(
"nextQuestion غير موجود."
);
return;
}


/* تأكيد أن زر التالي يبدأ معطلاً */
nextQuestionButton.disabled = true;


/* بدء التدريب */
startPractice();
}


/*
الملف يتم تحميله في نهاية body،
لذلك الـDOM موجود بالفعل.
*/

if (
document.readyState === "loading"
) {

document.addEventListener(
"DOMContentLoaded",
initializePractice
);

} else {

initializePractice();

}