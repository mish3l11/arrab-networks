/* =====================================================
عرّاب الشبكات - Command Practice
30 سؤال لكل مستوى × جهاز
المجموع: 240 سؤال
===================================================== */

const practiceQuestions = {

/* =====================================================
BEGINNER - CISCO
===================================================== */

beginner: {

cisco: [

{
category: "Interface",
level: "مبتدئ",
title: "عرض حالة المنافذ",
description: "تريد معرفة حالة جميع المنافذ وعناوينها.",
question: "أي أمر تستخدم؟",
answers: [
"show ip interface brief",
"show vlan brief",
"show mac address-table",
"show ip route"
],
correct: 0,
explanation: "الأمر show ip interface brief يعرض حالة المنافذ وعناوين IP بشكل مختصر."
},

{
category: "VLAN",
level: "مبتدئ",
title: "عرض الـ VLAN",
description: "تريد معرفة الـ VLAN الموجودة على السويتش.",
question: "أي أمر تستخدم؟",
answers: [
"show vlan brief",
"show interfaces trunk",
"show ip route",
"show arp"
],
correct: 0,
explanation: "show vlan brief يعرض VLANs والمنافذ المرتبطة بها."
},

{
category: "VLAN",
level: "مبتدئ",
title: "إنشاء VLAN",
description: "تريد إنشاء VLAN رقم 10.",
question: "أي أمر تبدأ به؟",
answers: [
"vlan 10",
"interface vlan 10",
"switchport vlan 10",
"create vlan 10"
],
correct: 0,
explanation: "vlan 10 يدخل إلى إعداد VLAN رقم 10."
},

{
category: "Access Port",
level: "مبتدئ",
title: "تحويل المنفذ إلى Access",
description: "المنفذ سيُستخدم لجهاز كمبيوتر واحد.",
question: "أي أمر يجعل المنفذ Access؟",
answers: [
"switchport mode access",
"switchport mode trunk",
"switchport access",
"port mode access"
],
correct: 0,
explanation: "switchport mode access يجعل المنفذ Access Port."
},

{
category: "Access Port",
level: "مبتدئ",
title: "تحديد VLAN للمنفذ",
description: "تريد وضع المنفذ في VLAN 10.",
question: "أي أمر تستخدم؟",
answers: [
"switchport access vlan 10",
"switchport vlan 10",
"vlan access 10",
"access vlan 10"
],
correct: 0,
explanation: "switchport access vlan 10 يربط منفذ Access بـ VLAN 10."
},

{
category: "Interface",
level: "مبتدئ",
title: "تفعيل المنفذ",
description: "المنفذ مغلق إداريًا.",
question: "أي أمر تستخدم لتفعيله؟",
answers: [
"no shutdown",
"shutdown",
"enable interface",
"interface up"
],
correct: 0,
explanation: "no shutdown يزيل الإغلاق الإداري عن المنفذ."
},

{
category: "Interface",
level: "مبتدئ",
title: "الدخول إلى منفذ",
description: "تريد تعديل GigabitEthernet0/1.",
question: "أي أمر تستخدم؟",
answers: [
"interface GigabitEthernet0/1",
"port GigabitEthernet0/1",
"interface 0/1",
"configure GigabitEthernet0/1"
],
correct: 0,
explanation: "interface GigabitEthernet0/1 يدخل إلى إعدادات المنفذ."
},

{
category: "Hostname",
level: "مبتدئ",
title: "تغيير اسم السويتش",
description: "تريد تسمية السويتش SW1.",
question: "أي أمر تستخدم؟",
answers: [
"hostname SW1",
"name SW1",
"switchname SW1",
"sysname SW1"
],
correct: 0,
explanation: "hostname SW1 يغير اسم الجهاز في Cisco IOS."
},

{
category: "Configuration",
level: "مبتدئ",
title: "الدخول لوضع الإعداد",
description: "أنت في Privileged EXEC وتريد الدخول للإعدادات.",
question: "أي أمر تستخدم؟",
answers: [
"configure terminal",
"system-view",
"config",
"setup terminal"
],
correct: 0,
explanation: "configure terminal يدخل إلى Global Configuration Mode."
},

{
category: "Verification",
level: "مبتدئ",
title: "عرض إصدار النظام",
description: "تريد معرفة إصدار IOS.",
question: "أي أمر تستخدم؟",
answers: [
"show version",
"show ios",
"show system",
"version display"
],
correct: 0,
explanation: "show version يعرض إصدار IOS ومعلومات الجهاز."
},

{
category: "Ping",
level: "مبتدئ",
title: "اختبار الاتصال",
description: "تريد اختبار الاتصال مع 192.168.1.1.",
question: "أي أمر تستخدم؟",
answers: [
"ping 192.168.1.1",
"test 192.168.1.1",
"check 192.168.1.1",
"connect 192.168.1.1"
],
correct: 0,
explanation: "ping يختبر إمكانية الوصول إلى عنوان IP."
},

{
category: "MAC",
level: "مبتدئ",
title: "عرض جدول MAC",
description: "تريد معرفة الأجهزة التي تعلمها السويتش.",
question: "أي أمر تستخدم؟",
answers: [
"show mac address-table",
"show mac",
"show ethernet-table",
"show devices"
],
correct: 0,
explanation: "show mac address-table يعرض عناوين MAC التي تعلمها السويتش."
},

{
category: "Routing",
level: "مبتدئ",
title: "عرض جدول التوجيه",
description: "تريد معرفة الشبكات الموجودة في Routing Table.",
question: "أي أمر تستخدم؟",
answers: [
"show ip route",
"show route table",
"show routing",
"show ip routing"
],
correct: 0,
explanation: "show ip route يعرض جدول التوجيه."
},

{
category: "ARP",
level: "مبتدئ",
title: "عرض ARP",
description: "تريد معرفة ربط IP مع MAC.",
question: "أي أمر تستخدم؟",
answers: [
"show arp",
"show mac",
"show ip mac",
"show neighbors"
],
correct: 0,
explanation: "show arp يعرض جدول ARP."
},

{
category: "Trunk",
level: "مبتدئ",
title: "عرض منافذ Trunk",
description: "تريد معرفة منافذ الـ Trunk.",
question: "أي أمر تستخدم؟",
answers: [
"show interfaces trunk",
"show trunk",
"show vlan trunk",
"show interfaces vlan"
],
correct: 0,
explanation: "show interfaces trunk يعرض منافذ Trunk والـ VLANs المسموح بها."
},

{
category: "Save",
level: "مبتدئ",
title: "حفظ الإعدادات",
description: "أنهيت الإعدادات وتريد حفظها.",
question: "أي أمر تستخدم؟",
answers: [
"copy running-config startup-config",
"save config",
"write startup",
"save running"
],
correct: 0,
explanation: "الأمر يحفظ running-config داخل startup-config."
},

{
category: "Interface",
level: "مبتدئ",
title: "وصف المنفذ",
description: "تريد كتابة وصف للمنفذ.",
question: "أي أمر تستخدم داخل Interface Mode؟",
answers: [
"description Uplink",
"interface description Uplink",
"name Uplink",
"port-description Uplink"
],
correct: 0,
explanation: "description يضيف وصفًا للمنفذ."
},

{
category: "Configuration",
level: "مبتدئ",
title: "الخروج من وضع الإعداد",
description: "تريد الرجوع إلى الوضع السابق.",
question: "أي أمر تستخدم؟",
answers: [
"exit",
"quit",
"back",
"return"
],
correct: 0,
explanation: "exit يرجع مستوى واحدًا إلى الخلف."
},

{
category: "Privilege",
level: "مبتدئ",
title: "الدخول إلى Privileged Mode",
description: "أنت في User EXEC Mode.",
question: "أي أمر تستخدم؟",
answers: [
"enable",
"privilege",
"admin",
"enable mode"
],
correct: 0,
explanation: "enable ينقلك إلى Privileged EXEC Mode."
},

{
category: "IP",
level: "مبتدئ",
title: "إضافة IP للواجهة",
description: "تريد إضافة IP 192.168.1.1/24 للواجهة.",
question: "أي أمر تستخدم؟",
answers: [
"ip address 192.168.1.1 255.255.255.0",
"address 192.168.1.1/24",
"ip 192.168.1.1 24",
"set ip 192.168.1.1"
],
correct: 0,
explanation: "في Cisco يتم كتابة عنوان IP ثم Subnet Mask."
},

{
category: "SSH",
level: "مبتدئ",
title: "عرض جلسات المستخدمين",
description: "تريد معرفة المستخدمين المتصلين بالجهاز.",
question: "أي أمر تستخدم؟",
answers: [
"show users",
"show ssh users",
"show login",
"show sessions users"
],
correct: 0,
explanation: "show users يعرض جلسات المستخدمين الحالية."
},

{
category: "System",
level: "مبتدئ",
title: "عرض الوقت",
description: "تريد معرفة وقت الجهاز.",
question: "أي أمر تستخدم؟",
answers: [
"show clock",
"show time",
"show date",
"display clock"
],
correct: 0,
explanation: "show clock يعرض الوقت الحالي على الجهاز."
},

{
category: "Logging",
level: "مبتدئ",
title: "عرض Logs",
description: "تريد مشاهدة رسائل النظام.",
question: "أي أمر تستخدم؟",
answers: [
"show logging",
"show logs",
"show system log",
"display logging"
],
correct: 0,
explanation: "show logging يعرض رسائل الـ Syslog."
},

{
category: "CPU",
level: "مبتدئ",
title: "فحص استخدام CPU",
description: "تريد معرفة استهلاك المعالج.",
question: "أي أمر تستخدم؟",
answers: [
"show processes cpu",
"show cpu",
"show processor",
"show system cpu"
],
correct: 0,
explanation: "show processes cpu يعرض استخدام CPU والعمليات."
},

{
category: "Configuration",
level: "مبتدئ",
title: "عرض الإعدادات الحالية",
description: "تريد مشاهدة Running Configuration.",
question: "أي أمر تستخدم؟",
answers: [
"show running-config",
"show config",
"show current",
"display configuration"
],
correct: 0,
explanation: "show running-config يعرض الإعدادات الموجودة حاليًا في الذاكرة."
},

{
category: "Configuration",
level: "مبتدئ",
title: "عرض الإعدادات المحفوظة",
description: "تريد مشاهدة Startup Configuration.",
question: "أي أمر تستخدم؟",
answers: [
"show startup-config",
"show saved-config",
"show startup",
"display startup"
],
correct: 0,
explanation: "show startup-config يعرض الإعدادات التي سيتم تحميلها بعد إعادة التشغيل."
},

{
category: "Interface",
level: "مبتدئ",
title: "عرض وصف المنافذ",
description: "تريد معرفة أسماء ووصف المنافذ.",
question: "أي أمر تستخدم؟",
answers: [
"show interfaces description",
"show interface names",
"show port description",
"show descriptions"
],
correct: 0,
explanation: "show interfaces description يعرض حالة المنافذ ووصفها."
},

{
category: "VLAN",
level: "مبتدئ",
title: "عرض VLAN محددة",
description: "تريد معلومات VLAN رقم 10.",
question: "أي أمر تستخدم؟",
answers: [
"show vlan id 10",
"show vlan 10",
"show id vlan 10",
"show vlan-number 10"
],
correct: 0,
explanation: "show vlan id 10 يعرض معلومات VLAN رقم 10."
},

{
category: "Trunk",
level: "مبتدئ",
title: "السماح بـ VLAN إضافية",
description: "لديك Trunk وتريد إضافة VLAN 40.",
question: "أي أمر تستخدم؟",
answers: [
"switchport trunk allowed vlan add 40",
"switchport vlan add 40",
"trunk vlan 40",
"add trunk vlan 40"
],
correct: 0,
explanation: "الأمر يضيف VLAN 40 إلى قائمة الـ VLANs المسموح بها على الـ Trunk."
}

],

/* =====================================================
BEGINNER - HUAWEI
===================================================== */

huawei: [

{
category: "Interface",
level: "مبتدئ",
title: "عرض حالة المنافذ",
description: "تريد معرفة حالة المنافذ.",
question: "أي أمر تستخدم؟",
answers: [
"display interface brief",
"display vlan",
"display ip routing-table",
"display mac-address"
],
correct: 0,
explanation: "display interface brief يعرض حالة المنافذ بشكل مختصر."
},

{
category: "VLAN",
level: "مبتدئ",
title: "إنشاء VLAN",
description: "تريد إنشاء VLAN رقم 10.",
question: "أي أمر تستخدم؟",
answers: [
"vlan 10",
"interface vlan 10",
"create vlan 10",
"vlan create 10"
],
correct: 0,
explanation: "vlan 10 ينشئ VLAN رقم 10."
},

{
category: "VLAN",
level: "مبتدئ",
title: "عرض VLAN",
description: "تريد عرض VLANs الموجودة.",
question: "أي أمر تستخدم؟",
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
category: "Access Port",
level: "مبتدئ",
title: "تحويل المنفذ إلى Access",
description: "المنفذ سيستخدم لجهاز نهائي.",
question: "أي أمر تستخدم؟",
answers: [
"port link-type access",
"port mode access",
"switchport mode access",
"link access"
],
correct: 0,
explanation: "port link-type access يجعل المنفذ Access."
},

{
category: "Access Port",
level: "مبتدئ",
title: "ربط Access بـ VLAN",
description: "تريد وضع المنفذ في VLAN 10.",
question: "أي أمر تستخدم؟",
answers: [
"port default vlan 10",
"port vlan 10",
"access vlan 10",
"port access 10"
],
correct: 0,
explanation: "port default vlan 10 يحدد VLAN للمنفذ Access."
},

{
category: "Interface",
level: "مبتدئ",
title: "تفعيل المنفذ",
description: "المنفذ مغلق إداريًا.",
question: "أي أمر تستخدم؟",
answers: [
"undo shutdown",
"shutdown",
"port enable",
"undo disable"
],
correct: 0,
explanation: "undo shutdown يفعّل المنفذ."
},

{
category: "System",
level: "مبتدئ",
title: "الدخول إلى System View",
description: "أنت في User View.",
question: "أي أمر تستخدم؟",
answers: [
"system-view",
"configure terminal",
"system mode",
"config"
],
correct: 0,
explanation: "system-view يدخل إلى وضع الإعدادات في Huawei VRP."
},

{
category: "Hostname",
level: "مبتدئ",
title: "تغيير اسم الجهاز",
description: "تريد تسمية الجهاز SW1.",
question: "أي أمر تستخدم؟",
answers: [
"sysname SW1",
"hostname SW1",
"system-name SW1",
"name SW1"
],
correct: 0,
explanation: "sysname يغير اسم الجهاز في Huawei."
},

{
category: "Verification",
level: "مبتدئ",
title: "عرض إصدار النظام",
description: "تريد معرفة إصدار VRP.",
question: "أي أمر تستخدم؟",
answers: [
"display version",
"display vrp",
"show version",
"display system"
],
correct: 0,
explanation: "display version يعرض إصدار VRP ومعلومات الجهاز."
},

{
category: "Ping",
level: "مبتدئ",
title: "اختبار الاتصال",
description: "تريد اختبار الاتصال.",
question: "أي أمر تستخدم؟",
answers: [
"ping 192.168.1.1",
"test 192.168.1.1",
"check 192.168.1.1",
"connect 192.168.1.1"
],
correct: 0,
explanation: "ping يستخدم لاختبار الوصول إلى عنوان IP."
},

{
category: "MAC",
level: "مبتدئ",
title: "عرض جدول MAC",
description: "تريد معرفة عناوين MAC التي تعلمها السويتش.",
question: "أي أمر تستخدم؟",
answers: [
"display mac-address",
"display mac",
"show mac-address-table",
"display ethernet-table"
],
correct: 0,
explanation: "display mac-address يعرض جدول MAC."
},

{
category: "Routing",
level: "مبتدئ",
title: "عرض Routing Table",
description: "تريد معرفة الشبكات التي يعرفها الجهاز.",
question: "أي أمر تستخدم؟",
answers: [
"display ip routing-table",
"display route",
"display ip route",
"show routing"
],
correct: 0,
explanation: "display ip routing-table يعرض جدول التوجيه."
},

{
category: "ARP",
level: "مبتدئ",
title: "عرض ARP",
description: "تريد معرفة IP وMAC للأجهزة.",
question: "أي أمر تستخدم؟",
answers: [
"display arp",
"display mac",
"display ip mac",
"display arp-table"
],
correct: 0,
explanation: "display arp يعرض جدول ARP."
},

{
category: "Trunk",
level: "مبتدئ",
title: "تحويل المنفذ إلى Trunk",
description: "تريد استخدام المنفذ كرابط Trunk.",
question: "أي أمر تستخدم؟",
answers: [
"port link-type trunk",
"port mode trunk",
"switchport mode trunk",
"link trunk"
],
correct: 0,
explanation: "port link-type trunk يجعل المنفذ Trunk."
},

{
category: "Trunk",
level: "مبتدئ",
title: "السماح بـ VLANs",
description: "تريد السماح بـ VLAN 10 و20.",
question: "أي أمر تستخدم؟",
answers: [
"port trunk allow-pass vlan 10 20",
"port trunk vlan 10 20",
"trunk allow vlan 10 20",
"allow vlan 10 20"
],
correct: 0,
explanation: "port trunk allow-pass vlan يحدد VLANs المسموح بمرورها."
},

{
category: "Save",
level: "مبتدئ",
title: "حفظ الإعدادات",
description: "تريد حفظ إعدادات الجهاز.",
question: "أي أمر تستخدم؟",
answers: [
"save",
"write",
"copy running-config startup-config",
"save config"
],
correct: 0,
explanation: "save يحفظ الإعدادات الحالية في Huawei."
},

{
category: "System",
level: "مبتدئ",
title: "عرض الوقت",
description: "تريد معرفة الوقت الحالي.",
question: "أي أمر تستخدم؟",
answers: [
"display clock",
"display time",
"show clock",
"display date"
],
correct: 0,
explanation: "display clock يعرض وقت الجهاز."
},

{
category: "Users",
level: "مبتدئ",
title: "عرض المستخدمين",
description: "تريد معرفة جلسات المستخدمين.",
question: "أي أمر تستخدم؟",
answers: [
"display users",
"display login",
"show users",
"display sessions"
],
correct: 0,
explanation: "display users يعرض المستخدمين المتصلين."
},

{
category: "SSH",
level: "مبتدئ",
title: "عرض حالة SSH",
description: "تريد معرفة حالة SSH Server.",
question: "أي أمر تستخدم؟",
answers: [
"display ssh server status",
"display ssh",
"show ssh",
"display ssh status"
],
correct: 0,
explanation: "display ssh server status يعرض حالة خدمة SSH Server."
},

{
category: "Logs",
level: "مبتدئ",
title: "عرض Log Buffer",
description: "تريد مشاهدة رسائل النظام.",
question: "أي أمر تستخدم؟",
answers: [
"display logbuffer",
"display logs",
"show logging",
"display system log"
],
correct: 0,
explanation: "display logbuffer يعرض رسائل الـ Log Buffer."
},

{
category: "CPU",
level: "مبتدئ",
title: "فحص CPU",
description: "تريد معرفة استخدام المعالج.",
question: "أي أمر تستخدم؟",
answers: [
"display cpu-usage",
"display cpu",
"show cpu",
"display processor"
],
correct: 0,
explanation: "display cpu-usage يعرض استهلاك CPU."
},

{
category: "Configuration",
level: "مبتدئ",
title: "عرض الإعدادات الحالية",
description: "تريد مشاهدة الإعدادات الحالية.",
question: "أي أمر تستخدم؟",
answers: [
"display current-configuration",
"display configuration",
"show running-config",
"display current"
],
correct: 0,
explanation: "display current-configuration يعرض الإعدادات الحالية."
},

{
category: "Interface",
level: "مبتدئ",
title: "عرض وصف المنافذ",
description: "تريد معرفة حالة المنافذ ووصفها.",
question: "أي أمر تستخدم؟",
answers: [
"display interface description",
"display interface name",
"display port description",
"show interface description"
],
correct: 0,
explanation: "display interface description يعرض وصف المنافذ."
},

{
category: "Interface",
level: "مبتدئ",
title: "عرض تفاصيل Interface",
description: "تريد معرفة تفاصيل منفذ محدد.",
question: "أي أمر تستخدم؟",
answers: [
"display interface GigabitEthernet 0/0/1",
"display port 0/0/1",
"show interface 0/0/1",
"display ethernet 0/0/1"
],
correct: 0,
explanation: "display interface يعرض تفاصيل وحالة المنفذ."
},

{
category: "VLAN",
level: "مبتدئ",
title: "عرض VLAN محددة",
description: "تريد معلومات VLAN 10.",
question: "أي أمر تستخدم؟",
answers: [
"display vlan 10",
"display vlan id 10",
"display vlan-number 10",
"show vlan 10"
],
correct: 0,
explanation: "display vlan 10 يعرض معلومات VLAN المحددة."
},

{
category: "Layer 3",
level: "مبتدئ",
title: "إنشاء VLANIF",
description: "تريد إنشاء واجهة Layer 3 لـ VLAN 10.",
question: "أي أمر تستخدم؟",
answers: [
"interface Vlanif 10",
"interface vlan 10",
"vlanif 10",
"interface vlanif10"
],
correct: 0,
explanation: "interface Vlanif 10 ينشئ ويدخل إلى واجهة VLANIF."
},

{
category: "IP",
level: "مبتدئ",
title: "إضافة IP",
description: "تريد إضافة IP للواجهة.",
question: "أي أمر تستخدم؟",
answers: [
"ip address 192.168.1.1 255.255.255.0",
"ip 192.168.1.1/24",
"address 192.168.1.1",
"set ip 192.168.1.1"
],
correct: 0,
explanation: "ip address مع Subnet Mask يضيف عنوان IP للواجهة."
},

{
category: "Trunk",
level: "مبتدئ",
title: "تحديد PVID",
description: "تريد جعل VLAN 10 هي PVID للـ Trunk.",
question: "أي أمر تستخدم؟",
answers: [
"port trunk pvid vlan 10",
"port pvid 10",
"trunk native vlan 10",
"port vlan pvid 10"
],
correct: 0,
explanation: "port trunk pvid vlan 10 يحدد PVID للمنفذ."
},

{
category: "MAC",
level: "مبتدئ",
title: "عرض MAC على منفذ",
description: "تريد معرفة MACs على منفذ محدد.",
question: "أي أمر تستخدم؟",
answers: [
"display mac-address interface GigabitEthernet 0/0/1",
"display interface mac 0/0/1",
"display mac interface 0/0/1",
"show mac interface 0/0/1"
],
correct: 0,
explanation: "يمكن استخدام display mac-address interface لمعرفة MACs على منفذ محدد."
}

]
},

/* =====================================================
INTERMEDIATE
===================================================== */

intermediate: {

cisco: [

{
category: "Trunk",
level: "متوسط",
title: "VLANs المسموح بها",
description: "تريد معرفة VLANs المسموح مرورها على Trunk.",
question: "أي أمر تستخدم؟",
answers: [
"show interfaces trunk",
"show vlan brief",
"show interfaces status",
"show vlan trunk"
],
correct: 0,
explanation: "show interfaces trunk يعرض حالة Trunk والـ VLANs المسموح بها."
},

{
category: "Routing",
level: "متوسط",
title: "Static Route",
description: "تريد إضافة Route لشبكة 192.168.20.0/24 عبر 10.0.0.2.",
question: "أي أمر صحيح؟",
answers: [
"ip route 192.168.20.0 255.255.255.0 10.0.0.2",
"route 192.168.20.0/24 10.0.0.2",
"ip static-route 192.168.20.0 10.0.0.2",
"static route 192.168.20.0 10.0.0.2"
],
correct: 0,
explanation: "صيغة Static Route في Cisco هي ip route ثم الشبكة والـ mask والـ next-hop."
},

{
category: "OSPF",
level: "متوسط",
title: "بدء OSPF",
description: "تريد إنشاء OSPF Process رقم 1.",
question: "أي أمر تستخدم؟",
answers: [
"router ospf 1",
"ospf process 1",
"router ospf process 1",
"enable ospf 1"
],
correct: 0,
explanation: "router ospf 1 يدخل إلى إعدادات OSPF Process 1."
},

{
category: "OSPF",
level: "متوسط",
title: "عرض الجيران",
description: "تريد التأكد من قيام OSPF Neighbor.",
question: "أي أمر تستخدم؟",
answers: [
"show ip ospf neighbor",
"show ospf neighbors",
"show ip neighbor ospf",
"show routing ospf"
],
correct: 0,
explanation: "show ip ospf neighbor يعرض OSPF Neighbors."
},

{
category: "OSPF",
level: "متوسط",
title: "عرض Routes من OSPF",
description: "تريد معرفة الشبكات التي تعلمها OSPF.",
question: "أي أمر تستخدم؟",
answers: [
"show ip route ospf",
"show ospf route",
"show ip ospf route",
"show routing ospf"
],
correct: 0,
explanation: "show ip route ospf يعرض Routes التي مصدرها OSPF."
},

{
category: "STP",
level: "متوسط",
title: "عرض STP",
description: "تريد فحص Spanning Tree.",
question: "أي أمر تستخدم؟",
answers: [
"show spanning-tree",
"show stp",
"show spanning",
"show tree"
],
correct: 0,
explanation: "show spanning-tree يعرض معلومات STP."
},

{
category: "STP",
level: "متوسط",
title: "Edge Port",
description: "المنفذ متصل بجهاز نهائي.",
question: "أي أمر يستخدم لجعل المنفذ PortFast؟",
answers: [
"spanning-tree portfast",
"spanning-tree edge",
"stp portfast enable",
"portfast enable"
],
correct: 0,
explanation: "spanning-tree portfast يجعل منفذ Access ينتقل بسرعة إلى Forwarding."
},

{
category: "DHCP",
level: "متوسط",
title: "عرض DHCP Bindings",
description: "تريد معرفة الأجهزة التي حصلت على IP.",
question: "أي أمر تستخدم؟",
answers: [
"show ip dhcp binding",
"show dhcp clients",
"show ip dhcp pool",
"show dhcp bindings"
],
correct: 0,
explanation: "show ip dhcp binding يعرض ارتباطات DHCP."
},

{
category: "DHCP",
level: "متوسط",
title: "DHCP Snooping",
description: "تريد تفعيل DHCP Snooping.",
question: "أي أمر تستخدم؟",
answers: [
"ip dhcp snooping",
"dhcp snooping enable",
"ip dhcp-snooping enable",
"enable dhcp snooping"
],
correct: 0,
explanation: "ip dhcp snooping يفعّل DHCP Snooping على الجهاز."
},

{
category: "Port Security",
level: "متوسط",
title: "تفعيل Port Security",
description: "تريد حماية منفذ Access.",
question: "أي أمر تستخدم؟",
answers: [
"switchport port-security",
"port-security enable",
"switchport security",
"enable port security"
],
correct: 0,
explanation: "switchport port-security يفعّل Port Security على المنفذ."
},

{
category: "Port Security",
level: "متوسط",
title: "تحديد عدد MACs",
description: "تريد السماح بحد أقصى MAC address عدد 2.",
question: "أي أمر تستخدم؟",
answers: [
"switchport port-security maximum 2",
"switchport maximum-mac 2",
"port-security mac 2",
"switchport security maximum 2"
],
correct: 0,
explanation: "الأمر يحدد الحد الأقصى لعدد MAC addresses."
},

{
category: "ACL",
level: "متوسط",
title: "عرض ACL",
description: "تريد مشاهدة Access Lists.",
question: "أي أمر تستخدم؟",
answers: [
"show access-lists",
"show acl",
"show security",
"show ip acl"
],
correct: 0,
explanation: "show access-lists يعرض ACLs الموجودة."
},

{
category: "Interface",
level: "متوسط",
title: "أخطاء المنافذ",
description: "تريد معرفة أخطاء المنافذ.",
question: "أي أمر تستخدم؟",
answers: [
"show interfaces counters errors",
"show interface errors",
"show errors interfaces",
"show port errors"
],
correct: 0,
explanation: "الأمر يعرض Counters الخاصة بالأخطاء."
},

{
category: "MAC",
level: "متوسط",
title: "MAC على منفذ محدد",
description: "تريد معرفة MAC addresses على Gi0/1.",
question: "أي أمر تستخدم؟",
answers: [
"show mac address-table interface GigabitEthernet0/1",
"show mac interface Gi0/1",
"show interface mac Gi0/1",
"show mac-address Gi0/1"
],
correct: 0,
explanation: "يمكن تحديد Interface داخل show mac address-table."
},

{
category: "MAC",
level: "متوسط",
title: "MAC داخل VLAN",
description: "تريد معرفة MAC addresses داخل VLAN 10.",
question: "أي أمر تستخدم؟",
answers: [
"show mac address-table vlan 10",
"show vlan mac 10",
"show mac vlan-id 10",
"show vlan 10 mac"
],
correct: 0,
explanation: "show mac address-table vlan 10 يعرض MACs داخل VLAN 10."
},

{
category: "ARP",
level: "متوسط",
title: "ARP لجهاز محدد",
description: "تريد البحث عن IP داخل ARP.",
question: "أي أمر تستخدم؟",
answers: [
"show arp 192.168.1.10",
"show mac 192.168.1.10",
"show ip arp-table 192.168.1.10",
"arp lookup 192.168.1.10"
],
correct: 0,
explanation: "show arp مع IP يساعدك في التحقق من ARP entry."
},

{
category: "LLDP/CDP",
level: "متوسط",
title: "اكتشاف أجهزة Cisco المجاورة",
description: "تريد معرفة الجهاز المتصل مباشرة.",
question: "أي أمر تستخدم؟",
answers: [
"show cdp neighbors detail",
"show neighbors detail",
"show cdp detail",
"show lldp neighbors"
],
correct: 0,
explanation: "show cdp neighbors detail يعرض معلومات تفصيلية عن أجهزة Cisco المجاورة."
},

{
category: "Interface",
level: "متوسط",
title: "معلومات Transceiver",
description: "تريد فحص SFP/Transceiver.",
question: "أي أمر تستخدم؟",
answers: [
"show interfaces transceiver",
"show sfp",
"show transceiver detail",
"show interface sfp"
],
correct: 0,
explanation: "show interfaces transceiver يستخدم لفحص معلومات Transceiver."
},

{
category: "Routing",
level: "متوسط",
title: "Static Routes فقط",
description: "تريد عرض Static Routes.",
question: "أي أمر تستخدم؟",
answers: [
"show ip route static",
"show static route",
"show ip static",
"show route static"
],
correct: 0,
explanation: "show ip route static يعرض Static Routes."
},

{
category: "OSPF",
level: "متوسط",
title: "OSPF Interface",
description: "تريد معلومات OSPF على الواجهات.",
question: "أي أمر تستخدم؟",
answers: [
"show ip ospf interface brief",
"show ospf interfaces",
"show ip ospf ports",
"show ospf interface"
],
correct: 0,
explanation: "show ip ospf interface brief يعرض معلومات مختصرة عن OSPF Interfaces."
},

{
category: "EtherChannel",
level: "متوسط",
title: "LACP",
description: "تريد إنشاء EtherChannel باستخدام LACP.",
question: "أي أمر يستخدم؟",
answers: [
"channel-group 1 mode active",
"channel-group 1 mode lacp",
"etherchannel 1 active",
"port-channel 1 lacp"
],
correct: 0,
explanation: "mode active يستخدم LACP في Cisco."
},

{
category: "VLAN",
level: "متوسط",
title: "إضافة VLAN",
description: "تريد إنشاء VLAN 20.",
question: "أي أمر تستخدم؟",
answers: [
"vlan 20",
"interface vlan 20",
"switchport vlan 20",
"create vlan 20"
],
correct: 0,
explanation: "vlan 20 ينشئ VLAN رقم 20."
},

{
category: "Layer 3",
level: "متوسط",
title: "SVI",
description: "تريد إنشاء SVI لـ VLAN 10.",
question: "أي أمر تستخدم؟",
answers: [
"interface Vlan10",
"interface vlanif 10",
"vlan interface 10",
"svi 10"
],
correct: 0,
explanation: "interface Vlan10 يدخل إلى SVI الخاصة بـ VLAN 10."
},

{
category: "Layer 3",
level: "متوسط",
title: "إيقاف Layer 2 على Port",
description: "تريد تحويل منفذ Layer 2 إلى Routed Port.",
question: "أي أمر تستخدم؟",
answers: [
"no switchport",
"switchport routed",
"no layer2",
"route port"
],
correct: 0,
explanation: "no switchport يحول المنفذ إلى Routed Port في الأجهزة التي تدعم ذلك."
},

{
category: "Trunk",
level: "متوسط",
title: "Native VLAN",
description: "تريد تغيير Native VLAN إلى 10.",
question: "أي أمر تستخدم؟",
answers: [
"switchport trunk native vlan 10",
"switchport native vlan 10",
"trunk native 10",
"switchport vlan native 10"
],
correct: 0,
explanation: "الأمر يحدد Native VLAN للـ Trunk."
},

{
category: "SSH",
level: "متوسط",
title: "عرض SSH",
description: "تريد معرفة حالة SSH.",
question: "أي أمر تستخدم؟",
answers: [
"show ssh",
"show ip ssh",
"show ssh server",
"show secure-shell"
],
correct: 0,
explanation: "show ssh يعرض جلسات وحالة SSH."
},

{
category: "System",
level: "متوسط",
title: "إعادة تشغيل الجهاز",
description: "تريد إعادة تشغيل الجهاز.",
question: "أي أمر تستخدم؟",
answers: [
"reload",
"reboot",
"restart",
"reload system"
],
correct: 0,
explanation: "reload يستخدم لإعادة تشغيل جهاز Cisco."
},

{
category: "Hardware",
level: "متوسط",
title: "عرض معلومات Hardware",
description: "تريد معرفة معلومات Hardware Modules.",
question: "أي أمر تستخدم؟",
answers: [
"show inventory",
"show hardware",
"show modules",
"show devices"
],
correct: 0,
explanation: "show inventory يعرض معلومات Hardware Inventory."
},

{
category: "Troubleshooting",
level: "متوسط",
title: "اختبار المسار",
description: "Ping يعمل ولكن تريد معرفة أين يمر الترافيك.",
question: "أي أمر تستخدم؟",
answers: [
"traceroute 192.168.1.1",
"trace 192.168.1.1",
"show route path 192.168.1.1",
"path 192.168.1.1"
],
correct: 0,
explanation: "traceroute يعرض المسار عبر الأجهزة الوسيطة."
}

],

huawei: [

{
category: "Trunk",
level: "متوسط",
title: "عرض VLANs على المنافذ",
description: "تريد معرفة VLANs المرتبطة بالمنافذ.",
question: "أي أمر تستخدم؟",
answers: [
"display port vlan",
"display vlan port",
"display trunk",
"display interface vlan"
],
correct: 0,
explanation: "display port vlan يعرض معلومات VLAN للمنافذ."
},

{
category: "Routing",
level: "متوسط",
title: "Static Route",
description: "تريد إضافة Route لشبكة 192.168.20.0/24 عبر 10.0.0.2.",
question: "أي أمر صحيح؟",
answers: [
"ip route-static 192.168.20.0 255.255.255.0 10.0.0.2",
"ip route 192.168.20.0 255.255.255.0 10.0.0.2",
"route-static 192.168.20.0 10.0.0.2",
"static-route 192.168.20.0 10.0.0.2"
],
correct: 0,
explanation: "صيغة Static Route في Huawei هي ip route-static."
},

{
category: "OSPF",
level: "متوسط",
title: "بدء OSPF",
description: "تريد إنشاء OSPF Process 1.",
question: "أي أمر تستخدم؟",
answers: [
"ospf 1",
"router ospf 1",
"ospf process 1",
"enable ospf 1"
],
correct: 0,
explanation: "ospf 1 يدخل إلى إعدادات OSPF Process 1."
},

{
category: "OSPF",
level: "متوسط",
title: "عرض OSPF Neighbors",
description: "تريد التأكد من قيام الجيرة.",
question: "أي أمر تستخدم؟",
answers: [
"display ospf peer",
"display ospf neighbor",
"display ospf neighbors",
"display routing ospf"
],
correct: 0,
explanation: "display ospf peer يعرض OSPF Peers."
},

{
category: "OSPF",
level: "متوسط",
title: "عرض Routes من OSPF",
description: "تريد عرض الشبكات المتعلمة بواسطة OSPF.",
question: "أي أمر تستخدم؟",
answers: [
"display ip routing-table protocol ospf",
"display ospf route",
"display route ospf",
"display ospf routing-table"
],
correct: 0,
explanation: "الأمر يفلتر Routing Table لإظهار Routes من OSPF."
},

{
category: "STP",
level: "متوسط",
title: "عرض STP",
description: "تريد فحص Spanning Tree.",
question: "أي أمر تستخدم؟",
answers: [
"display stp",
"display spanning-tree",
"display stp brief",
"show stp"
],
correct: 0,
explanation: "display stp يعرض معلومات STP."
},

{
category: "STP",
level: "متوسط",
title: "Edge Port",
description: "المنفذ متصل بجهاز نهائي.",
question: "أي أمر تستخدم؟",
answers: [
"stp edged-port enable",
"stp edge enable",
"portfast enable",
"stp portfast"
],
correct: 0,
explanation: "stp edged-port enable يجعل المنفذ Edge Port."
},

{
category: "DHCP",
level: "متوسط",
title: "عرض DHCP Pool",
description: "تريد فحص IP Pool.",
question: "أي أمر تستخدم؟",
answers: [
"display ip pool",
"display dhcp binding",
"display ip dhcp pool",
"display dhcp clients"
],
correct: 0,
explanation: "display ip pool يعرض معلومات IP Pool."
},

{
category: "DHCP",
level: "متوسط",
title: "DHCP Snooping",
description: "تريد تفعيل DHCP Snooping.",
question: "أي أمر تستخدم؟",
answers: [
"dhcp snooping enable",
"ip dhcp snooping",
"dhcp enable snooping",
"enable dhcp-snooping"
],
correct: 0,
explanation: "dhcp snooping enable يستخدم لتفعيل DHCP Snooping."
},

{
category: "Port Security",
level: "متوسط",
title: "Port Security",
description: "تريد تفعيل حماية MAC على المنفذ.",
question: "أي أمر تستخدم؟",
answers: [
"port-security enable",
"switchport port-security",
"port security enable",
"security port enable"
],
correct: 0,
explanation: "port-security enable يستخدم لتفعيل Port Security في السياقات التي تدعم هذه الصيغة."
},

{
category: "Port Security",
level: "متوسط",
title: "تحديد عدد MAC",
description: "تريد السماح بحد أقصى MAC عدد 2.",
question: "أي أمر تستخدم؟",
answers: [
"port-security max-mac-num 2",
"port-security maximum 2",
"mac-security max 2",
"port max-mac 2"
],
correct: 0,
explanation: "port-security max-mac-num يحدد الحد الأقصى لعدد MAC addresses."
},

{
category: "ACL",
level: "متوسط",
title: "عرض ACL",
description: "تريد عرض ACL رقم 3000.",
question: "أي أمر تستخدم؟",
answers: [
"display acl 3000",
"display access-list 3000",
"show acl 3000",
"display security 3000"
],
correct: 0,
explanation: "display acl يعرض معلومات ACL المحددة."
},

{
category: "Interface",
level: "متوسط",
title: "أخطاء المنافذ",
description: "تريد فحص Counters الخاصة بالأخطاء.",
question: "أي أمر تستخدم؟",
answers: [
"display interface counters errors",
"display interface errors",
"display errors",
"display port errors"
],
correct: 0,
explanation: "display interface counters errors يعرض Counters الخاصة بالأخطاء."
},

{
category: "MAC",
level: "متوسط",
title: "MAC على منفذ",
description: "تريد معرفة MACs على GigabitEthernet 0/0/1.",
question: "أي أمر تستخدم؟",
answers: [
"display mac-address interface GigabitEthernet 0/0/1",
"display mac interface 0/0/1",
"display interface mac 0/0/1",
"show mac interface 0/0/1"
],
correct: 0,
explanation: "display mac-address interface يعرض MAC addresses على المنفذ."
},

{
category: "MAC",
level: "متوسط",
title: "MAC داخل VLAN",
description: "تريد MAC addresses داخل VLAN 10.",
question: "أي أمر تستخدم؟",
answers: [
"display mac-address vlan 10",
"display vlan mac 10",
"display mac vlan-id 10",
"display vlan 10 mac"
],
correct: 0,
explanation: "display mac-address vlan 10 يعرض MACs داخل VLAN."
},

{
category: "ARP",
level: "متوسط",
title: "ARP محدد",
description: "تريد البحث عن IP داخل ARP.",
question: "أي أمر تستخدم؟",
answers: [
"display arp 192.168.1.10",
"display mac 192.168.1.10",
"display ip arp 192.168.1.10",
"arp lookup 192.168.1.10"
],
correct: 0,
explanation: "display arp مع عنوان IP يساعد في فحص ARP Entry."
},

{
category: "LLDP",
level: "متوسط",
title: "الجيران بالتفصيل",
description: "تريد معرفة الجهاز المتصل مباشرة.",
question: "أي أمر تستخدم؟",
answers: [
"display lldp neighbor verbose",
"display lldp neighbors detail",
"display neighbor verbose",
"display lldp detail"
],
correct: 0,
explanation: "display lldp neighbor verbose يعرض معلومات LLDP بالتفصيل."
},

{
category: "Interface",
level: "متوسط",
title: "Transceiver",
description: "تريد فحص SFP.",
question: "أي أمر تستخدم؟",
answers: [
"display transceiver",
"display sfp",
"display interface transceiver",
"show transceiver"
],
correct: 0,
explanation: "display transceiver يعرض معلومات Transceiver."
},

{
category: "Routing",
level: "متوسط",
title: "Static Routes",
description: "تريد عرض Static Routes فقط.",
question: "أي أمر تستخدم؟",
answers: [
"display ip routing-table protocol static",
"display route static",
"display static route",
"display ip static"
],
correct: 0,
explanation: "الأمر يعرض Routes التي مصدرها Static."
},

{
category: "OSPF",
level: "متوسط",
title: "OSPF Interface",
description: "تريد عرض OSPF Interface.",
question: "أي أمر تستخدم؟",
answers: [
"display ospf interface",
"display ospf interfaces",
"display ospf port",
"display interface ospf"
],
correct: 0,
explanation: "display ospf interface يعرض معلومات OSPF على الواجهات."
},

{
category: "Eth-Trunk",
level: "متوسط",
title: "LACP Static",
description: "تريد إعداد Eth-Trunk باستخدام LACP Static.",
question: "أي إعداد مناسب؟",
answers: [
"interface Eth-Trunk 1 ثم mode lacp-static",
"channel-group 1 mode active",
"eth-trunk 1 active",
"lacp enable 1"
],
correct: 0,
explanation: "Huawei يستخدم Eth-Trunk وmode lacp-static في هذا السياق."
},

{
category: "Layer 3",
level: "متوسط",
title: "VLANIF",
description: "تريد إنشاء Layer 3 Interface لـ VLAN 10.",
question: "أي أمر تستخدم؟",
answers: [
"interface Vlanif 10",
"interface Vlan10",
"vlan interface 10",
"vlanif create 10"
],
correct: 0,
explanation: "interface Vlanif 10 يدخل إلى واجهة VLANIF."
},

{
category: "Layer 3",
level: "متوسط",
title: "تحويل Port إلى Layer 3",
description: "تريد تحويل منفذ Layer 2 إلى Layer 3.",
question: "أي أمر تستخدم؟",
answers: [
"undo portswitch",
"no switchport",
"port layer3",
"undo layer2"
],
correct: 0,
explanation: "undo portswitch يحول المنفذ إلى Layer 3 في الأجهزة التي تدعم ذلك."
},

{
category: "Trunk",
level: "متوسط",
title: "PVID",
description: "تريد جعل VLAN 10 هي PVID.",
question: "أي أمر تستخدم؟",
answers: [
"port trunk pvid vlan 10",
"port pvid 10",
"trunk native vlan 10",
"pvid vlan 10"
],
correct: 0,
explanation: "port trunk pvid vlan 10 يحدد PVID للمنفذ."
},

{
category: "SSH",
level: "متوسط",
title: "حالة SSH",
description: "تريد فحص SSH Server.",
question: "أي أمر تستخدم؟",
answers: [
"display ssh server status",
"display ssh",
"display ssh status",
"display secure-shell"
],
correct: 0,
explanation: "display ssh server status يعرض حالة SSH Server."
},

{
category: "System",
level: "متوسط",
title: "إعادة تشغيل Huawei",
description: "تريد إعادة تشغيل الجهاز.",
question: "أي أمر تستخدم؟",
answers: [
"reboot",
"reload",
"restart",
"reboot system"
],
correct: 0,
explanation: "reboot يستخدم لإعادة تشغيل جهاز Huawei."
},

{
category: "Hardware",
level: "متوسط",
title: "Hardware Label",
description: "تريد معرفة معلومات Electronic Label.",
question: "أي أمر تستخدم؟",
answers: [
"display elabel",
"display inventory",
"display hardware",
"display device"
],
correct: 0,
explanation: "display elabel يعرض معلومات Electronic Label."
},

{
category: "Troubleshooting",
level: "متوسط",
title: "اختبار المسار",
description: "Ping يعمل وتريد تتبع المسار.",
question: "أي أمر تستخدم؟",
answers: [
"tracert 192.168.1.1",
"traceroute 192.168.1.1",
"trace 192.168.1.1",
"path 192.168.1.1"
],
correct: 0,
explanation: "tracert هو الأمر المستخدم لتتبع المسار في Huawei."
},

{
category: "Configuration",
level: "متوسط",
title: "البحث داخل Configuration",
description: "تريد البحث عن إعدادات VLAN.",
question: "أي أمر تستخدم؟",
answers: [
"display current-configuration | include vlan",
"display config | vlan",
"show running-config | vlan",
"display vlan configuration"
],
correct: 0,
explanation: "include يسمح بتصفية مخرجات الإعدادات حسب النص."
},

{
category: "Configuration",
level: "متوسط",
title: "البحث عن Static Routes",
description: "تريد البحث عن ip route-static داخل الإعدادات.",
question: "أي أمر تستخدم؟",
answers: [
"display current-configuration | include ip route-static",
"display route-static config",
"display ip route static config",
"display current-route"
],
correct: 0,
explanation: "يمكن استخدام include للبحث داخل Current Configuration."
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
level: "متقدم",
title: "تحديد Network في OSPF",
description: "تريد إعلان شبكة 10.0.0.0/30 في OSPF Area 0.",
question: "أي أمر مناسب؟",
answers: [
"network 10.0.0.0 0.0.0.3 area 0",
"network 10.0.0.0 255.255.255.252 area 0",
"ospf network 10.0.0.0 area 0",
"network 10.0.0.0/30 area 0"
],
correct: 0,
explanation: "Cisco OSPF يستخدم Wildcard Mask."
},

{
category: "OSPF",
level: "متقدم",
title: "تغيير OSPF Cost",
description: "تريد تغيير تكلفة Interface في OSPF.",
question: "أي أمر يستخدم داخل Interface؟",
answers: [
"ip ospf cost 10",
"ospf cost 10",
"ip route cost 10",
"set ospf metric 10"
],
correct: 0,
explanation: "ip ospf cost يحدد تكلفة الواجهة في OSPF."
},

{
category: "OSPF",
level: "متقدم",
title: "تحديد Router ID",
description: "تريد تحديد Router ID لـ OSPF.",
question: "أي أمر تستخدم داخل OSPF؟",
answers: [
"router-id 1.1.1.1",
"ospf router-id 1.1.1.1",
"router id 1.1.1.1",
"set router-id 1.1.1.1"
],
correct: 0,
explanation: "router-id يحدد OSPF Router ID."
},

{
category: "OSPF",
level: "متقدم",
title: "Passive Interface",
description: "تريد منع إرسال OSPF Hello من Interface.",
question: "أي أمر تستخدم؟",
answers: [
"passive-interface GigabitEthernet0/1",
"ospf passive GigabitEthernet0/1",
"passive ospf interface",
"disable hello GigabitEthernet0/1"
],
correct: 0,
explanation: "passive-interface يمنع تكوين OSPF Neighbor على الواجهة."
},

{
category: "Routing",
level: "متقدم",
title: "Administrative Distance",
description: "تريد Static Route بقيمة AD تساوي 200.",
question: "أي أمر صحيح؟",
answers: [
"ip route 192.168.20.0 255.255.255.0 10.0.0.2 200",
"ip route 192.168.20.0 255.255.255.0 200",
"ip static 192.168.20.0 10.0.0.2 200",
"route distance 200"
],
correct: 0,
explanation: "يمكن إضافة Administrative Distance في نهاية Static Route."
},

{
category: "ACL",
level: "متقدم",
title: "Standard ACL",
description: "تريد إنشاء Standard ACL رقم 10.",
question: "أي أمر تبدأ به؟",
answers: [
"access-list 10",
"ip access-list standard 10",
"acl standard 10",
"access standard 10"
],
correct: 0,
explanation: "access-list 10 يستخدم لإنشاء Standard Numbered ACL."
},

{
category: "ACL",
level: "متقدم",
title: "Extended ACL",
description: "تريد إنشاء Extended Named ACL باسم BLOCK-WEB.",
question: "أي أمر تستخدم؟",
answers: [
"ip access-list extended BLOCK-WEB",
"access-list extended BLOCK-WEB",
"extended acl BLOCK-WEB",
"ip extended-access BLOCK-WEB"
],
correct: 0,
explanation: "ip access-list extended يدخل إلى إعداد Extended Named ACL."
},

{
category: "ACL",
level: "متقدم",
title: "تطبيق ACL",
description: "لديك ACL باسم BLOCK-WEB وتريد تطبيقه على Interface.",
question: "أي أمر مناسب؟",
answers: [
"ip access-group BLOCK-WEB in",
"access-group BLOCK-WEB",
"apply acl BLOCK-WEB in",
"ip acl BLOCK-WEB"
],
correct: 0,
explanation: "ip access-group يطبق ACL على الواجهة باتجاه In أو Out."
},

{
category: "NAT",
level: "متقدم",
title: "عرض NAT Translations",
description: "تريد مشاهدة ترجمات NAT الحالية.",
question: "أي أمر تستخدم؟",
answers: [
"show ip nat translations",
"show nat translations",
"show ip translations",
"show nat table"
],
correct: 0,
explanation: "show ip nat translations يعرض NAT Translation Table."
},

{
category: "NAT",
level: "متقدم",
title: "عرض NAT Statistics",
description: "تريد إحصائيات NAT.",
question: "أي أمر تستخدم؟",
answers: [
"show ip nat statistics",
"show nat statistics",
"show ip nat stats-table",
"show translations statistics"
],
correct: 0,
explanation: "show ip nat statistics يعرض إحصائيات NAT."
},

{
category: "EtherChannel",
level: "متقدم",
title: "عرض EtherChannel",
description: "تريد فحص Port-Channel.",
question: "أي أمر تستخدم؟",
answers: [
"show etherchannel summary",
"show port-channel",
"show ether summary",
"show channel summary"
],
correct: 0,
explanation: "show etherchannel summary يعرض حالة EtherChannel."
},

{
category: "STP",
level: "متقدم",
title: "Root Bridge",
description: "تريد جعل السويتش Root Primary.",
question: "أي أمر تستخدم؟",
answers: [
"spanning-tree vlan 10 root primary",
"spanning-tree root vlan 10",
"stp root primary 10",
"root bridge vlan 10"
],
correct: 0,
explanation: "الأمر يطلب من Cisco جعل السويتش Root Primary للـ VLAN."
},

{
category: "STP",
level: "متقدم",
title: "تغيير STP Priority",
description: "تريد جعل Priority للـ VLAN 10 تساوي 4096.",
question: "أي أمر تستخدم؟",
answers: [
"spanning-tree vlan 10 priority 4096",
"spanning-tree priority 4096 vlan 10",
"stp vlan 10 priority 4096",
"spanning vlan 10 4096"
],
correct: 0,
explanation: "spanning-tree vlan 10 priority يحدد STP Priority."
},

{
category: "Troubleshooting",
level: "متقدم",
title: "تفاصيل Interface",
description: "تريد معرفة سبب وجود Errors على Interface.",
question: "أي أمر تبدأ به؟",
answers: [
"show interfaces GigabitEthernet0/1",
"show interface status",
"show errors",
"show interface brief"
],
correct: 0,
explanation: "show interfaces يعطي تفاصيل مثل Errors وCRC وDuplex وSpeed."
},

{
category: "Troubleshooting",
level: "متقدم",
title: "CPU مرتفع",
description: "الجهاز بطيء وتريد معرفة العمليات التي تستهلك CPU.",
question: "أي أمر تستخدم؟",
answers: [
"show processes cpu sorted",
"show cpu processes",
"show processes sorted",
"show cpu high"
],
correct: 0,
explanation: "show processes cpu sorted يساعد في تحديد العمليات الأعلى استهلاكًا."
},

{
category: "Troubleshooting",
level: "متقدم",
title: "Log آخر الأحداث",
description: "تريد معرفة رسائل النظام الأخيرة.",
question: "أي أمر تستخدم؟",
answers: [
"show logging",
"show log last",
"show system events",
"show recent logs"
],
correct: 0,
explanation: "show logging يعرض رسائل Syslog الموجودة."
},

{
category: "DHCP",
level: "متقدم",
title: "DHCP Pool",
description: "تريد معرفة تفاصيل DHCP Pool.",
question: "أي أمر تستخدم؟",
answers: [
"show ip dhcp pool",
"show dhcp pool",
"show ip pool dhcp",
"show dhcp configuration"
],
correct: 0,
explanation: "show ip dhcp pool يعرض معلومات DHCP Pools."
},

{
category: "VRF",
level: "متقدم",
title: "عرض VRF",
description: "تريد معرفة VRFs الموجودة.",
question: "أي أمر تستخدم؟",
answers: [
"show vrf",
"show ip vrf",
"show routing vrf",
"show virtual-routing"
],
correct: 0,
explanation: "show vrf يعرض معلومات VRF."
},

{
category: "Routing",
level: "متقدم",
title: "CEF",
description: "تريد فحص Cisco Express Forwarding.",
question: "أي أمر تستخدم؟",
answers: [
"show ip cef",
"show cef table",
"show forwarding",
"show ip forwarding"
],
correct: 0,
explanation: "show ip cef يعرض CEF Forwarding Information."
},

{
category: "ARP",
level: "متقدم",
title: "ARP Inspection",
description: "تريد عرض Dynamic ARP Inspection status.",
question: "أي أمر تستخدم؟",
answers: [
"show ip arp inspection",
"show arp inspection",
"show dynamic arp",
"show ip dai"
],
correct: 0,
explanation: "الأمر يستخدم لفحص حالة Dynamic ARP Inspection حسب المنصة والإصدار."
},

{
category: "Port Security",
level: "متقدم",
title: "Port Security Status",
description: "تريد فحص حالة Port Security.",
question: "أي أمر تستخدم؟",
answers: [
"show port-security",
"show switchport security",
"show security ports",
"show port secure"
],
correct: 0,
explanation: "show port-security يعرض حالة Port Security."
},

{
category: "STP",
level: "متقدم",
title: "STP Interface",
description: "تريد معرفة حالة STP على Interface محدد.",
question: "أي أمر تستخدم؟",
answers: [
"show spanning-tree interface GigabitEthernet0/1 detail",
"show stp interface Gi0/1",
"show interface stp Gi0/1",
"show spanning interface Gi0/1"
],
correct: 0,
explanation: "يمكن استخدام show spanning-tree interface للحصول على تفاصيل STP للواجهة."
},

{
category: "Trunk",
level: "متقدم",
title: "Native VLAN Troubleshooting",
description: "تريد التأكد من Native VLAN على Trunk.",
question: "أي أمر تستخدم؟",
answers: [
"show interfaces trunk",
"show native vlan",
"show vlan native",
"show trunk native"
],
correct: 0,
explanation: "show interfaces trunk يعرض Native VLAN ومعلومات Trunk."
},

{
category: "CDP",
level: "متقدم",
title: "تفاصيل Neighbor",
description: "تريد معرفة IP وPort للجهاز المجاور.",
question: "أي أمر تستخدم؟",
answers: [
"show cdp neighbors detail",
"show cdp detail",
"show neighbors ip",
"show cdp interface"
],
correct: 0,
explanation: "show cdp neighbors detail يعرض تفاصيل الجيران."
},

{
category: "LLDP",
level: "متقدم",
title: "عرض LLDP Neighbors",
description: "تريد فحص الأجهزة المجاورة عبر LLDP.",
question: "أي أمر تستخدم؟",
answers: [
"show lldp neighbors detail",
"show lldp detail",
"show neighbors lldp",
"show lldp devices"
],
correct: 0,
explanation: "show lldp neighbors detail يعرض تفاصيل LLDP Neighbors."
},

{
category: "Interface",
level: "متقدم",
title: "CRC Errors",
description: "تريد فحص CRC Errors على Interface.",
question: "أين تجدها؟",
answers: [
"show interfaces",
"show vlan brief",
"show ip route",
"show mac address-table"
],
correct: 0,
explanation: "show interfaces يعرض Input Errors وCRC وغيرها من Counters."
},

{
category: "Routing",
level: "متقدم",
title: "Routing Lookup",
description: "تريد معرفة كيف سيصل الجهاز إلى 192.168.20.10.",
question: "أي أمر مفيد؟",
answers: [
"show ip route 192.168.20.10",
"show route lookup 192.168.20.10",
"show ip path 192.168.20.10",
"lookup route 192.168.20.10"
],
correct: 0,
explanation: "show ip route مع IP محدد يساعد في معرفة Route المطابق."
},

{
category: "OSPF",
level: "متقدم",
title: "OSPF Database",
description: "تريد مشاهدة LSDB الخاصة بـ OSPF.",
question: "أي أمر تستخدم؟",
answers: [
"show ip ospf database",
"show ospf database",
"show ip ospf lsdb",
"show routing database ospf"
],
correct: 0,
explanation: "show ip ospf database يعرض OSPF Link-State Database."
},

{
category: "OSPF",
level: "متقدم",
title: "OSPF Routes",
description: "تريد التحقق من Routes التي تعلمها OSPF.",
question: "أي أمر تستخدم؟",
answers: [
"show ip route ospf",
"show ospf routes",
"show ip ospf routes",
"show routing ospf"
],
correct: 0,
explanation: "show ip route ospf يعرض Routes التي مصدرها OSPF."
},

{
category: "Configuration",
level: "متقدم",
title: "البحث داخل Running Config",
description: "تريد البحث عن إعدادات OSPF.",
question: "أي أمر تستخدم؟",
answers: [
"show running-config | include ospf",
"show running ospf",
"show config ospf",
"show ospf configuration"
],
correct: 0,
explanation: "include يفلتر مخرجات Running Configuration."
}

],

huawei: [

{
category: "OSPF",
level: "متقدم",
title: "تحديد Router ID",
description: "تريد تحديد Router ID لـ OSPF.",
question: "أي أمر تستخدم؟",
answers: [
"router-id 1.1.1.1",
"ospf router-id 1.1.1.1",
"router id 1.1.1.1",
"set router-id 1.1.1.1"
],
correct: 0,
explanation: "router-id يحدد Router ID داخل OSPF."
},

{
category: "OSPF",
level: "متقدم",
title: "OSPF Area",
description: "تريد إعداد OSPF Area 0 على الواجهة.",
question: "أي أمر مناسب في سياق OSPF؟",
answers: [
"area 0",
"network area 0",
"ospf area 0",
"router-area 0"
],
correct: 0,
explanation: "area 0 يدخل إلى OSPF Area 0."
},

{
category: "OSPF",
level: "متقدم",
title: "عرض OSPF Database",
description: "تريد مشاهدة LSDB.",
question: "أي أمر تستخدم؟",
answers: [
"display ospf lsdb",
"display ospf database",
"display ospf routing-database",
"display ospf db"
],
correct: 0,
explanation: "display ospf lsdb يعرض OSPF Link-State Database."
},

{
category: "OSPF",
level: "متقدم",
title: "عرض OSPF Peer",
description: "تريد تفاصيل الجيران.",
question: "أي أمر تستخدم؟",
answers: [
"display ospf peer",
"display ospf neighbor",
"display ospf neighbors detail",
"display peer ospf"
],
correct: 0,
explanation: "display ospf peer يعرض معلومات الجيران."
},

{
category: "Routing",
level: "متقدم",
title: "Static Route",
description: "تريد Static Route مع Preference.",
question: "أي أمر صحيح؟",
answers: [
"ip route-static 192.168.20.0 255.255.255.0 10.0.0.2 preference 200",
"ip route 192.168.20.0 255.255.255.0 10.0.0.2 200",
"static route 192.168.20.0 preference 200",
"route-static preference 200"
],
correct: 0,
explanation: "Huawei يستخدم preference لتحديد أولوية Route."
},

{
category: "ACL",
level: "متقدم",
title: "إنشاء ACL",
description: "تريد إنشاء ACL رقم 3000.",
question: "أي أمر تستخدم؟",
answers: [
"acl number 3000",
"access-list 3000",
"acl 3000",
"ip access-list 3000"
],
correct: 0,
explanation: "acl number 3000 يدخل إلى إعداد ACL."
},

{
category: "ACL",
level: "متقدم",
title: "عرض ACL",
description: "تريد عرض ACL 3000.",
question: "أي أمر تستخدم؟",
answers: [
"display acl 3000",
"display access-list 3000",
"display ip acl 3000",
"show acl 3000"
],
correct: 0,
explanation: "display acl يعرض قواعد ACL."
},

{
category: "Interface",
level: "متقدم",
title: "Interface Statistics",
description: "تريد فحص Counters والأخطاء.",
question: "أي أمر تستخدم؟",
answers: [
"display interface GigabitEthernet 0/0/1",
"display errors GigabitEthernet 0/0/1",
"display interface errors",
"display port statistics"
],
correct: 0,
explanation: "display interface يعطي تفاصيل كثيرة عن حالة الواجهة وCounters."
},

{
category: "CPU",
level: "متقدم",
title: "CPU مرتفع",
description: "تريد معرفة استخدام CPU.",
question: "أي أمر تستخدم؟",
answers: [
"display cpu-usage",
"display cpu process",
"display processor",
"display system cpu"
],
correct: 0,
explanation: "display cpu-usage يعرض استهلاك المعالج."
},

{
category: "Logs",
level: "متقدم",
title: "Log Buffer",
description: "تريد فحص Logs.",
question: "أي أمر تستخدم؟",
answers: [
"display logbuffer",
"display logs",
"display system events",
"display log"
],
correct: 0,
explanation: "display logbuffer يعرض رسائل Log Buffer."
},

{
category: "STP",
level: "متقدم",
title: "STP Priority",
description: "تريد تحديد Priority للـ VLAN 10 إلى 4096.",
question: "أي أمر تستخدم؟",
answers: [
"stp vlan 10 priority 4096",
"stp priority 4096 vlan 10",
"stp root priority 4096",
"spanning-tree vlan 10 priority 4096"
],
correct: 0,
explanation: "الصيغة قد تختلف حسب موديل Huawei ونسخة VRP، وهذا هو النمط المستخدم في السياق المقصود."
},

{
category: "STP",
level: "متقدم",
title: "Root Primary",
description: "تريد جعل الجهاز Root Primary.",
question: "أي أمر تستخدم؟",
answers: [
"stp root primary",
"stp root enable",
"stp primary root",
"stp bridge root"
],
correct: 0,
explanation: "stp root primary يستخدم في السياقات التي تدعم هذه الصيغة."
},

{
category: "Eth-Trunk",
level: "متقدم",
title: "LACP",
description: "تريد إنشاء Eth-Trunk باستخدام LACP.",
question: "أي إعداد مناسب؟",
answers: [
"interface Eth-Trunk 1 ثم mode lacp-static",
"channel-group 1 mode active",
"eth-trunk 1 active",
"lacp channel 1"
],
correct: 0,
explanation: "Huawei يستخدم Eth-Trunk وmode lacp-static في هذا السياق."
},

{
category: "Eth-Trunk",
level: "متقدم",
title: "عرض Eth-Trunk",
description: "تريد معرفة حالة Eth-Trunk.",
question: "أي أمر تستخدم؟",
answers: [
"display eth-trunk",
"display etherchannel",
"display trunk-group",
"display lacp-group"
],
correct: 0,
explanation: "display eth-trunk يعرض معلومات Eth-Trunk."
},

{
category: "VRF",
level: "متقدم",
title: "عرض VPN Instances",
description: "تريد معرفة VRFs الموجودة.",
question: "أي أمر تستخدم؟",
answers: [
"display ip vpn-instance",
"display vrf",
"display vpn",
"display virtual-routing"
],
correct: 0,
explanation: "display ip vpn-instance يعرض VPN Instances."
},

{
category: "ARP",
level: "متقدم",
title: "ARP محدد",
description: "تريد البحث عن IP داخل ARP.",
question: "أي أمر تستخدم؟",
answers: [
"display arp | include 192.168.1.10",
"display arp 192.168.1.10",
"display ip arp 192.168.1.10",
"display mac 192.168.1.10"
],
correct: 0,
explanation: "يمكن استخدام include لتصفية مخرجات ARP حسب العنوان."
},

{
category: "MAC",
level: "متقدم",
title: "MAC محدد",
description: "تريد البحث عن MAC محدد.",
question: "أي أمر تستخدم؟",
answers: [
"display mac-address 0011-2233-4455",
"display mac 0011-2233-4455",
"display mac-address-table 0011-2233-4455",
"show mac 0011-2233-4455"
],
correct: 0,
explanation: "display mac-address يمكن استخدامه للبحث عن MAC محدد."
},

{
category: "Routing",
level: "متقدم",
title: "Route محدد",
description: "تريد البحث عن Route إلى شبكة محددة.",
question: "أي أمر تستخدم؟",
answers: [
"display ip routing-table 192.168.20.0",
"display route 192.168.20.0",
"display ip route 192.168.20.0",
"display routing 192.168.20.0"
],
correct: 0,
explanation: "يمكن تحديد عنوان الوجهة لفحص أفضل Route مطابقة."
},

{
category: "DHCP",
level: "متقدم",
title: "DHCP Pool",
description: "تريد فحص IP Pool.",
question: "أي أمر تستخدم؟",
answers: [
"display ip pool",
"display dhcp pool",
"display ip dhcp",
"display pool dhcp"
],
correct: 0,
explanation: "display ip pool يعرض معلومات IP Pools."
},

{
category: "SSH",
level: "متقدم",
title: "SSH Server",
description: "تريد التأكد من حالة SSH Server.",
question: "أي أمر تستخدم؟",
answers: [
"display ssh server status",
"display ssh",
"display ssh status",
"display secure-shell"
],
correct: 0,
explanation: "display ssh server status يعرض حالة SSH Server."
},

{
category: "Troubleshooting",
level: "متقدم",
title: "البحث عن VLAN في Config",
description: "تريد البحث عن VLAN داخل الإعدادات.",
question: "أي أمر تستخدم؟",
answers: [
"display current-configuration | include vlan",
"display vlan configuration",
"display config vlan",
"display vlan | include config"
],
correct: 0,
explanation: "include يتيح البحث داخل Current Configuration."
},

{
category: "Troubleshooting",
level: "متقدم",
title: "البحث عن SSH في Config",
description: "تريد معرفة إعدادات SSH الموجودة.",
question: "أي أمر تستخدم؟",
answers: [
"display current-configuration | include ssh",
"display ssh configuration",
"display config ssh",
"display ssh | include current"
],
correct: 0,
explanation: "يمكن استخدام include لتصفية الإعدادات والبحث عن SSH."
},

{
category: "Interface",
level: "متقدم",
title: "Interface Description",
description: "تريد معرفة وصف وحالة المنافذ.",
question: "أي أمر تستخدم؟",
answers: [
"display interface description",
"display interface brief",
"display port description",
"display description"
],
correct: 0,
explanation: "display interface description يعرض وصف الواجهات وحالتها."
},

{
category: "MAC",
level: "متقدم",
title: "MAC على VLAN",
description: "تريد معرفة MACs في VLAN 20.",
question: "أي أمر تستخدم؟",
answers: [
"display mac-address vlan 20",
"display vlan 20 mac",
"display mac vlan-id 20",
"display vlan mac 20"
],
correct: 0,
explanation: "display mac-address vlan 20 يعرض MAC addresses في VLAN."
},

{
category: "LLDP",
level: "متقدم",
title: "LLDP Neighbor",
description: "تريد معرفة الجهاز المتصل على المنفذ.",
question: "أي أمر تستخدم؟",
answers: [
"display lldp neighbor verbose",
"display lldp neighbors",
"display neighbor lldp",
"display lldp detail"
],
correct: 0,
explanation: "display lldp neighbor verbose يعرض معلومات LLDP بالتفصيل."
},

{
category: "Transceiver",
level: "متقدم",
title: "SFP Details",
description: "تريد فحص Transceiver.",
question: "أي أمر تستخدم؟",
answers: [
"display transceiver",
"display sfp detail",
"display interface transceiver",
"display optic"
],
correct: 0,
explanation: "display transceiver يعرض معلومات Transceiver حسب دعم الجهاز."
},

{
category: "System",
level: "متقدم",
title: "System Version",
description: "تريد معلومات إصدار VRP.",
question: "أي أمر تستخدم؟",
answers: [
"display version",
"display vrp version",
"display system version",
"show version"
],
correct: 0,
explanation: "display version يعرض إصدار النظام ومعلومات الجهاز."
},

{
category: "Routing",
level: "متقدم",
title: "Static Route Config",
description: "تريد البحث عن Static Routes داخل Config.",
question: "أي أمر تستخدم؟",
answers: [
"display current-configuration | include ip route-static",
"display static-route config",
"display route-static",
"display current-route"
],
correct: 0,
explanation: "include يسمح بالبحث عن ip route-static داخل الإعدادات."
},

{
category: "Interface",
level: "متقدم",
title: "Port Configuration",
description: "تريد عرض إعدادات Interface محددة.",
question: "أي أمر تستخدم؟",
answers: [
"display current-configuration interface GigabitEthernet 0/0/1",
"display interface config 0/0/1",
"display port configuration 0/0/1",
"display current interface 0/0/1"
],
correct: 0,
explanation: "يمكن عرض إعدادات Interface محددة باستخدام display current-configuration interface."
},

{
category: "Troubleshooting",
level: "متقدم",
title: "تتبع المسار",
description: "Ping يعمل ولكن تريد معرفة المسار.",
question: "أي أمر تستخدم؟",
answers: [
"tracert 192.168.20.1",
"traceroute 192.168.20.1",
"trace 192.168.20.1",
"path 192.168.20.1"
],
correct: 0,
explanation: "tracert يستخدم لتتبع المسار في Huawei."
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
level: "واقعي",
title: "الجهاز لا يأخذ IP",
description: "جهاز كمبيوتر متصل بالسويتش لكنه لا يحصل على IP.",
question: "ما أول شيء تفحصه؟",
answers: [
"حالة المنفذ وVLAN ثم DHCP",
"تغيير Gateway مباشرة",
"إعادة تشغيل السويتش",
"حذف جميع VLANs"
],
correct: 0,
explanation: "ابدأ بالطبقة الفيزيائية ثم Interface ثم VLAN ثم DHCP."
},

{
category: "Scenario",
level: "واقعي",
title: "Ping داخل نفس VLAN يفشل",
description: "جهازان في نفس VLAN ولا يستطيعان الاتصال.",
question: "ما الذي تفحصه أولًا؟",
answers: [
"حالة المنافذ وVLAN وMAC",
"OSPF",
"Static Route",
"NAT"
],
correct: 0,
explanation: "إذا كانا في نفس VLAN، ركز أولًا على Layer 1 وLayer 2."
},

{
category: "Scenario",
level: "واقعي",
title: "Ping Gateway يفشل",
description: "الجهاز لديه IP لكن لا يستطيع الوصول إلى Gateway.",
question: "ما الذي تفحصه؟",
answers: [
"IP/Subnet/VLAN/Port",
"OSPF فقط",
"NAT فقط",
"CPU فقط"
],
correct: 0,
explanation: "الوصول للـ Gateway يبدأ من إعداد IP الصحيح ثم VLAN والـ Port."
},

{
category: "Scenario",
level: "واقعي",
title: "VLAN لا تمر عبر Trunk",
description: "VLAN 20 موجودة في الطرفين لكن الأجهزة لا تتصل.",
question: "ما الأمر الذي يفيدك؟",
answers: [
"show interfaces trunk",
"show ip route",
"show processes cpu",
"show arp"
],
correct: 0,
explanation: "ابدأ بفحص حالة Trunk والـ Allowed VLANs."
},

{
category: "Scenario",
level: "واقعي",
title: "MAC موجود على منفذ خاطئ",
description: "الجهاز يظهر في MAC Table على منفذ غير متوقع.",
question: "ما الذي تبحث عنه؟",
answers: [
"show mac address-table",
"show ip route",
"show spanning-tree root",
"show logging فقط"
],
correct: 0,
explanation: "MAC Table تساعدك على تحديد مكان تعلم MAC."
},

{
category: "Scenario",
level: "واقعي",
title: "OSPF لا يبني Neighbor",
description: "واجهتان متصلتان لكن لا توجد OSPF adjacency.",
question: "ما الذي تفحصه؟",
answers: [
"IP/Area/Network/Interface",
"MAC فقط",
"NAT",
"DHCP فقط"
],
correct: 0,
explanation: "تحقق من IP connectivity ثم OSPF Area والإعدادات والـ Interface."
},

{
category: "Scenario",
level: "واقعي",
title: "Route غير موجود",
description: "الجهاز لا يعرف شبكة بعيدة.",
question: "ما الأمر الأول لفحص Routing Table؟",
answers: [
"show ip route",
"show vlan brief",
"show mac address-table",
"show interfaces trunk"
],
correct: 0,
explanation: "ابدأ بـ Routing Table لمعرفة هل Route موجود أم لا."
},

{
category: "Scenario",
level: "واقعي",
title: "Interface Down",
description: "منفذ يظهر Down.",
question: "ما أول شيء تفحصه؟",
answers: [
"الكابل والـ Interface Status",
"OSPF",
"ACL",
"NAT"
],
correct: 0,
explanation: "مشاكل Interface Down تبدأ عادةً بالطبقة الفيزيائية وحالة المنفذ."
},

{
category: "Scenario",
level: "واقعي",
title: "CRC Errors",
description: "Interface يحتوي على CRC Errors متزايدة.",
question: "ما الاحتمال الذي تفحصه أولًا؟",
answers: [
"الكابل/SFP/Physical Layer",
"OSPF Area",
"DHCP Pool",
"Default Route"
],
correct: 0,
explanation: "CRC Errors غالبًا تستدعي فحص Physical Layer والكابل والـ Transceiver."
},

{
category: "Scenario",
level: "واقعي",
title: "CPU مرتفع",
description: "CPU في السويتش مرتفع بشكل غير طبيعي.",
question: "ما الأمر المناسب؟",
answers: [
"show processes cpu sorted",
"show vlan brief",
"show arp",
"show interfaces trunk"
],
correct: 0,
explanation: "ابدأ بمعرفة العمليات الأعلى استهلاكًا للـ CPU."
},

{
category: "Scenario",
level: "واقعي",
title: "SSH لا يعمل",
description: "لا تستطيع الدخول إلى الجهاز عبر SSH.",
question: "ما الذي تفحصه؟",
answers: [
"IP وSSH وVTY والاتصال",
"VLAN فقط",
"STP فقط",
"MAC فقط"
],
correct: 0,
explanation: "SSH يعتمد على Connectivity ثم إعدادات SSH وVTY والمستخدم."
},

{
category: "Scenario",
level: "واقعي",
title: "Port Security منع الجهاز",
description: "الجهاز توقف بعد تغيير الكمبيوتر المتصل بالمنفذ.",
question: "ما الذي تفحصه؟",
answers: [
"Port Security وMAC Address",
"OSPF",
"NAT",
"DHCP Server فقط"
],
correct: 0,
explanation: "تغيير الجهاز قد يسبب مخالفة Port Security بسبب MAC مختلف."
},

{
category: "Scenario",
level: "واقعي",
title: "DHCP يعمل في VLAN ويوقف في أخرى",
description: "VLAN 10 تحصل على IP وVLAN 20 لا.",
question: "ما الذي تفحصه؟",
answers: [
"VLAN 20 وDHCP/Relay وGateway",
"CPU فقط",
"STP Root فقط",
"MAC Vendor"
],
correct: 0,
explanation: "قارن إعدادات VLAN 10 و20 وتحقق من DHCP وRelay وGateway."
},

{
category: "Scenario",
level: "واقعي",
title: "Default Gateway صحيح لكن الإنترنت لا يعمل",
description: "الجهاز يصل إلى Gateway لكنه لا يصل للخارج.",
question: "ما الخطوة التالية؟",
answers: [
"فحص Routing Table ثم NAT/Firewall",
"تغيير VLAN",
"تغيير MAC",
"إيقاف STP"
],
correct: 0,
explanation: "إذا كان Gateway reachable، انتقل لفحص Routing ثم NAT/Firewall حسب التصميم."
},

{
category: "Scenario",
level: "واقعي",
title: "Trunk Up لكن VLAN لا تعمل",
description: "الـ Trunk Up لكن VLAN 30 لا تمر.",
question: "ما الذي تتحقق منه؟",
answers: [
"Allowed VLAN وVLAN وجودها في الطرفين",
"CPU فقط",
"ARP فقط",
"OSPF فقط"
],
correct: 0,
explanation: "وجود Trunk لا يعني أن كل VLANs مسموح لها بالمرور."
},

{
category: "Scenario",
level: "واقعي",
title: "الجهاز يتصل ثم يفصل",
description: "Interface يتكرر فيه Up/Down.",
question: "ما الاحتمال الأول الذي تفحصه؟",
answers: [
"الكابل/Transceiver/Interface",
"OSPF",
"ACL",
"DHCP"
],
correct: 0,
explanation: "تكرار Up/Down يستدعي فحص Physical Layer أولًا."
},

{
category: "Scenario",
level: "واقعي",
title: "Ping يعمل والـ DNS لا يعمل",
description: "يمكن الوصول إلى IP لكن أسماء المواقع لا تعمل.",
question: "أين تركز؟",
answers: [
"DNS",
"STP",
"MAC Table",
"OSPF"
],
correct: 0,
explanation: "إذا كان الوصول إلى IP يعمل والمشكلة بالأسماء، افحص DNS."
},

{
category: "Scenario",
level: "واقعي",
title: "أجهزة VLAN مختلفة لا تتصل",
description: "VLAN 10 وVLAN 20 تعمل كل واحدة منفردة.",
question: "ما المطلوب للاتصال بينهما؟",
answers: [
"Inter-VLAN Routing",
"STP فقط",
"MAC Table فقط",
"DHCP Snooping"
],
correct: 0,
explanation: "التواصل بين VLANs يحتاج Layer 3 Routing مثل SVI."
},

{
category: "Scenario",
level: "واقعي",
title: "Route موجود لكن Ping يفشل",
description: "Routing Table تحتوي على Route صحيح.",
question: "ما الذي تفحصه بعد ذلك؟",
answers: [
"Return Path وACL وARP",
"اسم الجهاز",
"STP Priority فقط",
"Hostname"
],
correct: 0,
explanation: "وجود Route واحد لا يكفي؛ تحقق من المسار العكسي وACL وARP."
},

{
category: "Scenario",
level: "واقعي",
title: "تحديد منفذ جهاز من IP",
description: "لديك IP لجهاز وتريد معرفة أين هو.",
question: "ما التسلسل المنطقي؟",
answers: [
"ARP → MAC → MAC Table → Port",
"OSPF → VLAN → DHCP",
"CPU → ARP → OSPF",
"DNS → NAT → MAC"
],
correct: 0,
explanation: "حوّل IP إلى MAC من ARP، ثم ابحث عن MAC في MAC Table."
},

{
category: "Scenario",
level: "واقعي",
title: "مشكلة بين سويتشين",
description: "الأجهزة في السويتش الأول تعمل والثاني لا.",
question: "ما أول شيء تفحصه بين السويتشين؟",
answers: [
"حالة الرابط وTrunk/VLAN",
"DNS",
"CPU فقط",
"NAT"
],
correct: 0,
explanation: "ابدأ بالرابط نفسه ثم Trunk وAllowed VLANs وVLAN configuration."
},

{
category: "Scenario",
level: "واقعي",
title: "MAC لا يظهر",
description: "جهاز متصل ولكن MAC الخاص به غير موجود.",
question: "ما الذي تفحصه؟",
answers: [
"Interface State وVLAN وTraffic",
"OSPF Router ID",
"NAT",
"DNS"
],
correct: 0,
explanation: "MAC لا يُتعلم إذا كان الرابط أو VLAN أو حركة المرور فيها مشكلة."
},

{
category: "Scenario",
level: "واقعي",
title: "OSPF Neighbor يتذبذب",
description: "Neighbor يظهر ثم يختفي.",
question: "ما الذي تفحصه؟",
answers: [
"Interface Errors وTimers وConnectivity",
"VLAN Name فقط",
"DNS",
"NAT فقط"
],
correct: 0,
explanation: "تذبذب OSPF قد يرتبط بالـ Interface أو Physical Layer أو Timers أو Connectivity."
},

{
category: "Scenario",
level: "واقعي",
title: "تغيير إعداد تسبب بالمشكلة",
description: "المشكلة ظهرت مباشرة بعد تعديل إعداد.",
question: "ما أفضل خطوة؟",
answers: [
"مراجعة آخر Configuration Change",
"إعادة ضبط الجهاز مباشرة",
"حذف VLANs",
"إيقاف OSPF"
],
correct: 0,
explanation: "ابدأ بمراجعة التغيير الأخير بدل تغيير إعدادات عشوائية."
},

{
category: "Scenario",
level: "واقعي",
title: "تحديد سبب بطء الشبكة",
description: "المستخدمون يشتكون من بطء.",
question: "ما الذي تفحصه؟",
answers: [
"Interface Errors/Utilization وCPU",
"Hostname",
"VLAN Name",
"وقت الجهاز فقط"
],
correct: 0,
explanation: "ابدأ بالـ Interfaces والـ Errors والـ Utilization ثم CPU حسب الحالة."
},

{
category: "Scenario",
level: "واقعي",
title: "ACL تمنع الاتصال",
description: "الاتصال كان يعمل وبعد إضافة ACL توقف.",
question: "ما أول شيء تراجعه؟",
answers: [
"ACL Rules وDirection وInterface",
"STP Root",
"MAC Vendor",
"Hostname"
],
correct: 0,
explanation: "راجع قواعد ACL واتجاه تطبيقها والواجهة التي طبقت عليها."
},

{
category: "Scenario",
level: "واقعي",
title: "مشكلة VLAN على Access Port",
description: "جهاز في VLAN 10 لكنه لا يصل إلى بقية VLAN 10.",
question: "ما الذي تتحقق منه؟",
answers: [
"Access Mode وAccess VLAN",
"OSPF فقط",
"NAT",
"DNS"
],
correct: 0,
explanation: "تأكد أن المنفذ Access وأن VLAN 10 محددة عليه بشكل صحيح."
},

{
category: "Scenario",
level: "واقعي",
title: "مشكلة Gateway على SVI",
description: "الأجهزة في VLAN 10 لا تصل إلى Gateway.",
question: "ما الذي تفحصه؟",
answers: [
"SVI State وIP وVLAN",
"CDP فقط",
"NAT فقط",
"CPU فقط"
],
correct: 0,
explanation: "تحقق من SVI والـ IP والـ VLAN وحالة الواجهة."
},

{
category: "Scenario",
level: "واقعي",
title: "التحقق قبل تغيير الإعداد",
description: "وجدت مشكلة شبكة وتريد البدء بالتشخيص.",
question: "ما المنهج الأفضل؟",
answers: [
"Physical → Interface → VLAN → IP → Routing → Services",
"تغيير الإعدادات عشوائيًا",
"إعادة تشغيل جميع الأجهزة",
"حذف Configuration"
],
correct: 0,
explanation: "التشخيص المنظم يبدأ من الأساسيات ويتدرج إلى الخدمات والتطبيقات."
}

],

huawei: [

{
category: "Scenario",
level: "واقعي",
title: "الجهاز لا يأخذ IP",
description: "جهاز متصل بسويتش Huawei ولا يحصل على IP.",
question: "ما أول شيء تفحصه؟",
answers: [
"Interface ثم VLAN ثم DHCP",
"OSPF فقط",
"NAT فقط",
"إعادة تشغيل الجهاز"
],
correct: 0,
explanation: "ابدأ بالطبقة الفيزيائية ثم Interface ثم VLAN ثم DHCP."
},

{
category: "Scenario",
level: "واقعي",
title: "فحص Interface",
description: "تريد معرفة هل المنفذ Up أم Down.",
question: "أي أمر مفيد؟",
answers: [
"display interface brief",
"display ip route",
"display arp",
"display ospf peer"
],
correct: 0,
explanation: "display interface brief يعطيك نظرة سريعة على حالة المنافذ."
},

{
category: "Scenario",
level: "واقعي",
title: "VLAN لا تعمل",
description: "جهازان في نفس VLAN لا يتصلان.",
question: "ما الذي تفحصه؟",
answers: [
"VLAN وAccess Port وMAC",
"OSPF فقط",
"NAT",
"DNS فقط"
],
correct: 0,
explanation: "ركز أولًا على Layer 2 لأن الجهازين في نفس VLAN."
},

{
category: "Scenario",
level: "واقعي",
title: "VLAN لا تمر عبر Trunk",
description: "VLAN 20 موجودة ولكنها لا تصل للسويتش الآخر.",
question: "ما الذي تفحصه؟",
answers: [
"Trunk وAllowed VLAN وPVID حسب التصميم",
"CPU فقط",
"ARP فقط",
"DNS"
],
correct: 0,
explanation: "تحقق من نوع المنفذ والـ Allowed VLANs وPVID عند الحاجة."
},

{
category: "Scenario",
level: "واقعي",
title: "تحديد جهاز من IP",
description: "لديك IP وتريد معرفة المنفذ الذي يوجد عليه الجهاز.",
question: "ما التسلسل المنطقي؟",
answers: [
"ARP → MAC → MAC Table → Port",
"OSPF → DHCP → DNS",
"CPU → VLAN → OSPF",
"DNS → NAT → ARP"
],
correct: 0,
explanation: "ابدأ من ARP للحصول على MAC ثم ابحث عن MAC في جدول السويتش."
},

{
category: "Scenario",
level: "واقعي",
title: "عرض MAC",
description: "تريد معرفة MAC addresses المتعلمة.",
question: "أي أمر تستخدم؟",
answers: [
"display mac-address",
"display arp",
"display vlan",
"display ospf peer"
],
correct: 0,
explanation: "display mac-address يعرض جدول MAC."
},

{
category: "Scenario",
level: "واقعي",
title: "OSPF لا يعمل",
description: "Routerان متصلان لكن لا توجد OSPF Peer.",
question: "ما الذي تفحصه؟",
answers: [
"IP وArea وInterface وOSPF",
"MAC فقط",
"DHCP فقط",
"DNS"
],
correct: 0,
explanation: "تحقق من Connectivity وOSPF Area وإعدادات الواجهات."
},

{
category: "Scenario",
level: "واقعي",
title: "عرض OSPF Peer",
description: "تريد معرفة حالة OSPF Neighbor.",
question: "أي أمر تستخدم؟",
answers: [
"display ospf peer",
"display ospf neighbor",
"display ip ospf",
"display routing ospf"
],
correct: 0,
explanation: "display ospf peer يعرض حالة OSPF Peers."
},

{
category: "Scenario",
level: "واقعي",
title: "Route غير موجود",
description: "لا يستطيع الجهاز الوصول إلى شبكة بعيدة.",
question: "ما أول شيء تفحصه؟",
answers: [
"display ip routing-table",
"display vlan",
"display mac-address",
"display interface description"
],
correct: 0,
explanation: "ابدأ بـ Routing Table لمعرفة هل Route موجود."
},

{
category: "Scenario",
level: "واقعي",
title: "Ping Gateway يفشل",
description: "الجهاز لديه IP لكن Gateway لا يستجيب.",
question: "ما الذي تفحصه؟",
answers: [
"IP/Subnet/VLAN/Access Port",
"OSPF فقط",
"NAT فقط",
"CPU فقط"
],
correct: 0,
explanation: "الوصول إلى Gateway يعتمد على إعدادات Layer 2 وLayer 3 الأساسية."
},

{
category: "Scenario",
level: "واقعي",
title: "SSH لا يعمل",
description: "لا تستطيع الدخول عبر SSH.",
question: "ما الذي تفحصه؟",
answers: [
"IP وSSH وVTY/User",
"STP فقط",
"MAC فقط",
"VLAN Name فقط"
],
correct: 0,
explanation: "افحص Connectivity ثم SSH Server والـ User وVTY حسب التصميم."
},

{
category: "Scenario",
level: "واقعي",
title: "CPU مرتفع",
description: "الجهاز يعاني من ارتفاع CPU.",
question: "أي أمر تبدأ به؟",
answers: [
"display cpu-usage",
"display vlan",
"display mac-address",
"display arp"
],
correct: 0,
explanation: "display cpu-usage يعطيك نسبة استخدام CPU."
},

{
category: "Scenario",
level: "واقعي",
title: "Logs",
description: "تريد معرفة ما حدث قبل ظهور المشكلة.",
question: "أي أمر يفيد؟",
answers: [
"display logbuffer",
"display vlan",
"display mac-address",
"display clock"
],
correct: 0,
explanation: "Log Buffer قد يحتوي على رسائل تساعد في تحديد سبب المشكلة."
},

{
category: "Scenario",
level: "واقعي",
title: "CRC Errors",
description: "Interface يحتوي على أخطاء CRC.",
question: "ما الذي تفحصه أولًا؟",
answers: [
"الكابل/Transceiver/Physical Layer",
"OSPF Area",
"DHCP Pool",
"Static Route"
],
correct: 0,
explanation: "CRC Errors غالبًا تستدعي فحص Physical Layer."
},

{
category: "Scenario",
level: "واقعي",
title: "Interface Flapping",
description: "المنفذ يتغير بين Up وDown.",
question: "ما الذي تفحصه؟",
answers: [
"الكابل وSFP والمنفذ",
"DNS",
"OSPF فقط",
"ACL فقط"
],
correct: 0,
explanation: "تذبذب Interface يستدعي فحص الطبقة الفيزيائية أولًا."
},

{
category: "Scenario",
level: "واقعي",
title: "DHCP في VLAN واحدة فقط",
description: "VLAN 10 تحصل على IP وVLAN 20 لا.",
question: "ما الذي تفحصه؟",
answers: [
"VLAN 20 وDHCP وGateway/Relay",
"CPU فقط",
"STP Root فقط",
"Hostname"
],
correct: 0,
explanation: "قارن إعدادات VLANs وتحقق من DHCP والـ Gateway والـ Relay."
},

{
category: "Scenario",
level: "واقعي",
title: "Inter-VLAN لا يعمل",
description: "كل VLAN تعمل داخليًا لكن لا تتواصل مع VLAN أخرى.",
question: "ما المطلوب؟",
answers: [
"Vlanif/Inter-VLAN Routing",
"MAC Table فقط",
"STP فقط",
"DHCP Snooping"
],
correct: 0,
explanation: "الاتصال بين VLANs يحتاج Layer 3 Interface مثل Vlanif."
},

{
category: "Scenario",
level: "واقعي",
title: "Vlanif Down",
description: "Vlanif 10 لا تعمل كما هو متوقع.",
question: "ما الذي تفحصه؟",
answers: [
"VLAN وVlanif وPhysical Member Ports",
"DNS فقط",
"NAT",
"OSPF فقط"
],
correct: 0,
explanation: "حالة Vlanif تعتمد على وجود VLAN ومنافذ فعالة مرتبطة بها حسب التصميم."
},

{
category: "Scenario",
level: "واقعي",
title: "Route موجود لكن الاتصال يفشل",
description: "Routing Table تحتوي على Route صحيح.",
question: "ما الذي تفحصه؟",
answers: [
"Return Path وARP وACL",
"Hostname",
"VLAN Name",
"CPU فقط"
],
correct: 0,
explanation: "وجود Route لا يعني أن المسار كامل؛ افحص المسار العكسي وARP وACL."
},

{
category: "Scenario",
level: "واقعي",
title: "MAC غير موجود",
description: "الجهاز متصل لكن MAC لا يظهر.",
question: "ما الذي تفحصه؟",
answers: [
"Interface وVLAN وTraffic",
"OSPF Router ID",
"NAT",
"DNS"
],
correct: 0,
explanation: "إذا لم يتعلم السويتش MAC، افحص المنفذ وVLAN وحركة المرور."
},

{
category: "Scenario",
level: "واقعي",
title: "مشكلة بين سويتشين Huawei",
description: "السويتش الأول يعمل والثاني لا يتصل بالشبكة.",
question: "ما الذي تفحصه أولًا؟",
answers: [
"Interface ثم Trunk/VLAN",
"DNS",
"CPU فقط",
"NAT"
],
correct: 0,
explanation: "ابدأ بالرابط ثم نوع المنفذ وAllowed VLANs وVLAN configuration."
},

{
category: "Scenario",
level: "واقعي",
title: "LLDP",
description: "تريد معرفة الجهاز المتصل مباشرة بمنفذ.",
question: "أي أمر تستخدم؟",
answers: [
"display lldp neighbor verbose",
"display lldp",
"display neighbor",
"display interface neighbor"
],
correct: 0,
explanation: "display lldp neighbor verbose يعطي تفاصيل الجهاز المجاور."
},

{
category: "Scenario",
level: "واقعي",
title: "Transceiver",
description: "تريد فحص SFP بسبب مشكلة في Fiber.",
question: "أي أمر تستخدم؟",
answers: [
"display transceiver",
"display sfp",
"display optic status",
"display fiber"
],
correct: 0,
explanation: "display transceiver يفيد في فحص معلومات الـ Transceiver."
},

{
category: "Scenario",
level: "واقعي",
title: "ACL سببت المشكلة",
description: "المشكلة بدأت بعد إضافة ACL.",
question: "ما الذي تراجعه؟",
answers: [
"ACL Rules وDirection وInterface",
"STP Root",
"MAC Vendor",
"Hostname"
],
correct: 0,
explanation: "راجع قواعد ACL واتجاه التطبيق والواجهة."
},

{
category: "Scenario",
level: "واقعي",
title: "مشكلة Access Port",
description: "جهاز جديد على المنفذ لا يدخل VLAN الصحيحة.",
question: "ما الذي تفحصه؟",
answers: [
"port link-type وport default vlan",
"OSPF",
"NAT",
"DNS"
],
correct: 0,
explanation: "تحقق من نوع المنفذ وVLAN الافتراضية."
},

{
category: "Scenario",
level: "واقعي",
title: "تغيير PVID",
description: "توجد مشكلة في الترافيك غير الموسوم على Trunk.",
question: "ما الإعداد الذي تراجعه؟",
answers: [
"PVID",
"OSPF Router ID",
"DHCP Lease",
"CPU"
],
correct: 0,
explanation: "PVID تحدد VLAN التي ينتمي إليها الترافيك غير الموسوم على المنفذ حسب التصميم."
},

{
category: "Scenario",
level: "واقعي",
title: "مشكلة Routing",
description: "الجهاز يصل للشبكة المحلية ولا يصل للشبكة البعيدة.",
question: "ما التسلسل المناسب؟",
answers: [
"Ping Gateway → Routing Table → Next-Hop",
"DNS → VLAN → MAC",
"CPU → STP → DHCP",
"Hostname → ARP → DNS"
],
correct: 0,
explanation: "ابدأ بالـ Gateway ثم Routing Table ثم تحقق من Next-Hop والمسار."
},

{
category: "Scenario",
level: "واقعي",
title: "التحقق من التغيير الأخير",
description: "المشكلة ظهرت بعد تعديل Configuration.",
question: "ما الخطوة المنطقية؟",
answers: [
"مراجعة Current Configuration والتغيير الأخير",
"إعادة ضبط الجهاز",
"حذف VLANs",
"إيقاف OSPF"
],
correct: 0,
explanation: "مراجعة التغيير الأخير تساعد في تحديد سبب المشكلة بدون تغيير عشوائي."
},

{
category: "Scenario",
level: "واقعي",
title: "منهجية Troubleshooting",
description: "تريد تشخيص مشكلة شبكة بطريقة منظمة.",
question: "ما التسلسل المناسب؟",
answers: [
"Physical → Interface → VLAN → IP → Routing → Services",
"Routing → DNS → Physical",
"DHCP → CPU → VLAN",
"ACL → MAC → Cable"
],
correct: 0,
explanation: "التشخيص المنظم يبدأ من الطبقات الأساسية ثم ينتقل للأعلى."
}

]
}
};


/* =====================================================
STATE
===================================================== */

let currentMode = "beginner";
let currentDevice = "cisco";
let currentQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let answered = false;


/* =====================================================
ELEMENTS
===================================================== */

const questionNumber = document.getElementById("questionNumber");
const correctCount = document.getElementById("correctCount");
const scorePercent = document.getElementById("scorePercent");

const questionCategory = document.getElementById("questionCategory");
const questionLevel = document.getElementById("questionLevel");
const questionTitle = document.getElementById("questionTitle");
const questionDescription = document.getElementById("questionDescription");

const answersContainer = document.getElementById("answersContainer");
const answerResult = document.getElementById("answerResult");
const nextQuestionButton = document.getElementById("nextQuestion");

const finalResult = document.getElementById("finalResult");
const finalScore = document.getElementById("finalScore");
const finalCorrect = document.getElementById("finalCorrect");
const finalTotal = document.getElementById("finalTotal");
const restartPractice = document.getElementById("restartPractice");


/* =====================================================
SHUFFLE
===================================================== */

function shuffleArray(array) {
const shuffled = [...array];

for (let i = shuffled.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));

[shuffled[i], shuffled[j]] = [
shuffled[j],
shuffled[i]
];
}

return shuffled;
}


/* =====================================================
START PRACTICE
===================================================== */

function startPractice() {

currentQuestions =
practiceQuestions[currentMode][currentDevice];

currentQuestions =
shuffleArray(currentQuestions);

currentQuestionIndex = 0;
correctAnswers = 0;
answered = false;

if (finalResult) {
finalResult.style.display = "none";
}

const practiceCard =
document.querySelector(".practice-card");

if (practiceCard) {
practiceCard.style.display = "block";
}

updateStats();
loadQuestion();
}


/* =====================================================
LOAD QUESTION
===================================================== */

function loadQuestion() {

if (!currentQuestions.length) {
return;
}

answered = false;

const question =
currentQuestions[currentQuestionIndex];

if (questionNumber) {
questionNumber.textContent =
`${currentQuestionIndex + 1} / ${currentQuestions.length}`;
}

if (questionCategory) {
questionCategory.textContent =
question.category;
}

if (questionLevel) {
questionLevel.textContent =
question.level;
}

if (questionTitle) {
questionTitle.textContent =
question.title;
}

if (questionDescription) {
questionDescription.textContent =
`${question.description} ${question.question}`;
}

if (answerResult) {
answerResult.innerHTML = "";
answerResult.className = "answer-result";
}

if (nextQuestionButton) {
nextQuestionButton.style.display = "none";
}

if (answersContainer) {

answersContainer.innerHTML = "";

const answers =
shuffleArray(
question.answers.map(
(answer, index) => ({
text: answer,
originalIndex: index
})
)
);

answers.forEach(function (answer, index) {

const button =
document.createElement("button");

button.type = "button";
button.className = "answer-button";

const letter =
document.createElement("span");

letter.className = "answer-letter";

letter.textContent =
String.fromCharCode(65 + index);

const text =
document.createElement("span");

text.className = "answer-text";

if (
answer.text.includes(" ") ||
answer.text.includes("/") ||
answer.text.includes("|")
) {

const code =
document.createElement("code");

code.textContent =
answer.text;

text.appendChild(code);

} else {

text.textContent =
answer.text;
}

button.appendChild(letter);
button.appendChild(text);

button.addEventListener(
"click",
function () {

checkAnswer(
answer.originalIndex,
button
);

}
);

answersContainer.appendChild(button);
});
}
}


/* =====================================================
CHECK ANSWER
===================================================== */

function checkAnswer(
selectedIndex,
selectedButton
) {

if (answered) {
return;
}

answered = true;

const question =
currentQuestions[currentQuestionIndex];

const allButtons =
answersContainer.querySelectorAll(
".answer-button"
);

allButtons.forEach(function (button) {
button.disabled = true;
});

if (selectedIndex === question.correct) {

correctAnswers++;

selectedButton.classList.add(
"correct"
);

if (answerResult) {

answerResult.className =
"answer-result correct-result";

answerResult.innerHTML = `
<strong>✅ إجابة صحيحة</strong>
<p>${question.explanation}</p>
`;
}

} else {

selectedButton.classList.add(
"wrong"
);

allButtons.forEach(function (button) {

const code =
button.querySelector("code");

const buttonText =
code
? code.textContent.trim()
: button.textContent
.replace(
button.querySelector(".answer-letter")?.textContent || "",
""
)
.trim();

if (
buttonText ===
question.answers[question.correct]
) {
button.classList.add("correct");
}
});

if (answerResult) {

answerResult.className =
"answer-result wrong-result";

answerResult.innerHTML = `
<strong>❌ إجابة غير صحيحة</strong>
<p>الإجابة الصحيحة: <code>${question.answers[question.correct]}</code></p>
<p>${question.explanation}</p>
`;
}
}

updateStats();

if (nextQuestionButton) {
nextQuestionButton.style.display =
"inline-flex";
}
}


/* =====================================================
NEXT QUESTION
===================================================== */

if (nextQuestionButton) {

nextQuestionButton.addEventListener(
"click",
function () {

if (!answered) {
return;
}

currentQuestionIndex++;

if (
currentQuestionIndex >=
currentQuestions.length
) {

showFinalResult();

} else {

loadQuestion();
}
}
);
}


/* =====================================================
UPDATE STATS
===================================================== */

function updateStats() {

if (correctCount) {
correctCount.textContent =
correctAnswers;
}

if (scorePercent) {

const totalAnswered =
answered
? currentQuestionIndex + 1
: currentQuestionIndex;

const percentage =
totalAnswered > 0
? Math.round(
(correctAnswers /
totalAnswered) * 100
)
: 0;

scorePercent.textContent =
`${percentage}%`;
}
}


/* =====================================================
FINAL RESULT
===================================================== */

function showFinalResult() {

const total =
currentQuestions.length;

const percentage =
total > 0
? Math.round(
(correctAnswers / total) * 100
)
: 0;

const practiceCard =
document.querySelector(".practice-card");

if (practiceCard) {
practiceCard.style.display = "none";
}

if (finalResult) {
finalResult.style.display = "block";
}

if (finalScore) {
finalScore.textContent =
`${percentage}%`;
}

if (finalCorrect) {
finalCorrect.textContent =
correctAnswers;
}

if (finalTotal) {
finalTotal.textContent =
total;
}

saveBestScore(percentage);
}


/* =====================================================
MODE BUTTONS
===================================================== */

const modeButtons =
document.querySelectorAll(
".practice-mode"
);

modeButtons.forEach(function (button) {

button.addEventListener(
"click",
function () {

modeButtons.forEach(function (btn) {
btn.classList.remove("active");
});

button.classList.add("active");

currentMode =
button.dataset.mode;

startPractice();
}
);
});


/* =====================================================
DEVICE BUTTONS
===================================================== */

const deviceButtons =
document.querySelectorAll(
".device-button"
);

deviceButtons.forEach(function (button) {

button.addEventListener(
"click",
function () {

deviceButtons.forEach(function (btn) {
btn.classList.remove("active");
});

button.classList.add("active");

currentDevice =
button.dataset.device;

startPractice();
}
);
});


/* =====================================================
RESTART
===================================================== */

if (restartPractice) {

restartPractice.addEventListener(
"click",
function () {
startPractice();
}
);
}


/* =====================================================
BEST SCORE
===================================================== */

function getBestScoreKey() {

return (
`commandPracticeBest_${currentMode}_${currentDevice}`
);
}


function saveBestScore(score) {

const key =
getBestScoreKey();

const oldScore =
Number(
localStorage.getItem(key) || 0
);

if (score > oldScore) {

localStorage.setItem(
key,
score
);
}
}


/* =====================================================
INITIAL START
===================================================== */

startPractice();
