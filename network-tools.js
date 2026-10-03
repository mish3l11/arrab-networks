

    /* =====================================================
       IP FUNCTIONS
    ===================================================== */

    function ipToNumber(ip) {

      const parts = ip.split(".");

      if (parts.length !== 4) {
        return null;
      }

      let result = 0;

      for (const part of parts) {

        const n = Number(part);

        if (!Number.isInteger(n) || n < 0 || n > 255) {
          return null;
        }

        result = result * 256 + n;
      }

      return result;
    }


    function numberToIp(num) {

      return [
        (num >>> 24) & 255,
        (num >>> 16) & 255,
        (num >>> 8) & 255,
        num & 255
      ].join(".");
    }


    function prefixToMask(prefix) {

      const mask = prefix === 0
        ? 0
        : (0xffffffff << (32 - prefix)) >>> 0;

      return numberToIp(mask);
    }


    /* =====================================================
       SUBNET CALCULATOR
    ===================================================== */

    function calculateSubnet() {

      const ip =
        document.getElementById("subnetIP").value.trim();

      const prefix =
        Number(
          document.getElementById("subnetPrefix").value
        );

      const ipNum =
        ipToNumber(ip);

      if (ipNum === null) {

        document.getElementById("subnetResult").innerHTML =
          '<span class="error">❌ عنوان IP غير صحيح.</span>';

        return;
      }

      const mask =
        prefix === 0
          ? 0
          : (0xffffffff << (32 - prefix)) >>> 0;

      const network =
        (ipNum & mask) >>> 0;

      const broadcast =
        (network | (~mask >>> 0)) >>> 0;

      const total =
        Math.pow(2, 32 - prefix);

      const usable =
        prefix >= 31
          ? total
          : total - 2;

      const firstHost =
        prefix >= 31
          ? network
          : network + 1;

      const lastHost =
        prefix >= 31
          ? broadcast
          : broadcast - 1;

      document.getElementById("subnetResult").innerHTML = `
        <div><strong>Network:</strong> ${numberToIp(network)}</div>
        <div><strong>Broadcast:</strong> ${numberToIp(broadcast)}</div>
        <div><strong>First Host:</strong> ${numberToIp(firstHost)}</div>
        <div><strong>Last Host:</strong> ${numberToIp(lastHost)}</div>
        <div><strong>Subnet Mask:</strong> ${prefixToMask(prefix)}</div>
        <div><strong>Total Addresses:</strong> ${total}</div>
        <div><strong>Usable Hosts:</strong> ${usable}</div>
      `;
    }


    /* =====================================================
       BINARY
    ===================================================== */

    function convertBinary() {

      const input =
        document.getElementById("binaryInput").value.trim();

      const mode =
        document.getElementById("binaryMode").value;

      const result =
        document.getElementById("binaryResult");

      if (!input) {

        result.innerHTML =
          '<span class="error">❌ أدخل قيمة أولاً.</span>';

        return;
      }


      if (mode === "decimal") {

        const number = Number(input);

        if (
          !Number.isInteger(number) ||
          number < 0 ||
          number > 255
        ) {

          result.innerHTML =
            '<span class="error">❌ أدخل رقم عشري من 0 إلى 255.</span>';

          return;
        }

        result.innerHTML = `
          <strong>Binary:</strong>
          ${number.toString(2).padStart(8, "0")}
        `;

      } else {

        if (!/^[01]+$/.test(input)) {

          result.innerHTML =
            '<span class="error">❌ الرقم الثنائي يجب أن يحتوي على 0 و 1 فقط.</span>';

          return;
        }

        const number =
          parseInt(input, 2);

        if (number > 255) {

          result.innerHTML =
            '<span class="error">❌ القيمة يجب ألا تتجاوز 255.</span>';

          return;
        }

        result.innerHTML = `
          <strong>Decimal:</strong>
          ${number}
        `;
      }
    }


    /* =====================================================
       IP CALCULATOR
    ===================================================== */

    function calculateIP() {

      const ip =
        document.getElementById("ipAddress").value.trim();

      const mask =
        document.getElementById("subnetMask").value.trim();

      const ipNum =
        ipToNumber(ip);

      const maskNum =
        ipToNumber(mask);

      const result =
        document.getElementById("ipResult");

      if (
        ipNum === null ||
        maskNum === null
      ) {

        result.innerHTML =
          '<span class="error">❌ تأكد من صحة الـ IP والـ Subnet Mask.</span>';

        return;
      }

      const network =
        (ipNum & maskNum) >>> 0;

      const broadcast =
        (network | (~maskNum >>> 0)) >>> 0;

      const total =
        broadcast - network + 1;

      const usable =
        total > 2
          ? total - 2
          : total;

      const first =
        total > 2
          ? network + 1
          : network;

      const last =
        total > 2
          ? broadcast - 1
          : broadcast;

      result.innerHTML = `
        <div><strong>Network:</strong> ${numberToIp(network)}</div>
        <div><strong>Broadcast:</strong> ${numberToIp(broadcast)}</div>
        <div><strong>First Host:</strong> ${numberToIp(first)}</div>
        <div><strong>Last Host:</strong> ${numberToIp(last)}</div>
        <div><strong>Total:</strong> ${total}</div>
        <div><strong>Usable:</strong> ${usable}</div>
      `;
    }


    /* =====================================================
       CIDR
    ===================================================== */

    function calculateCIDR() {

      const prefix =
        Number(
          document.getElementById("cidrPrefix").value
        );

      const total =
        Math.pow(2, 32 - prefix);

      const usable =
        total - 2;

      const mask =
        prefixToMask(prefix);

      document.getElementById("cidrResult").innerHTML = `
        <div><strong>Prefix:</strong> /${prefix}</div>
        <div><strong>Subnet Mask:</strong> ${mask}</div>
        <div><strong>Total Addresses:</strong> ${total}</div>
        <div><strong>Usable Hosts:</strong> ${usable}</div>
      `;
    }


    /* =====================================================
       PORT REFERENCE
    ===================================================== */

    const ports = [

      {
        port: 20,
        protocol: "FTP",
        usage: "FTP Data"
      },

      {
        port: 21,
        protocol: "FTP",
        usage: "FTP Control"
      },

      {
        port: 22,
        protocol: "SSH",
        usage: "Secure Shell"
      },

      {
        port: 23,
        protocol: "Telnet",
        usage: "Remote Access"
      },

      {
        port: 25,
        protocol: "SMTP",
        usage: "إرسال البريد"
      },

      {
        port: 53,
        protocol: "DNS",
        usage: "تحويل أسماء النطاقات"
      },

      {
        port: 67,
        protocol: "DHCP",
        usage: "DHCP Server"
      },

      {
        port: 68,
        protocol: "DHCP",
        usage: "DHCP Client"
      },

      {
        port: 80,
        protocol: "HTTP",
        usage: "Web"
      },

      {
        port: 110,
        protocol: "POP3",
        usage: "استقبال البريد"
      },

      {
        port: 123,
        protocol: "NTP",
        usage: "مزامنة الوقت"
      },

      {
        port: 143,
        protocol: "IMAP",
        usage: "البريد الإلكتروني"
      },

      {
        port: 161,
        protocol: "SNMP",
        usage: "Network Management"
      },

      {
        port: 443,
        protocol: "HTTPS",
        usage: "Secure Web"
      },

      {
        port: 514,
        protocol: "Syslog",
        usage: "Network Logging"
      },

      {
        port: 3389,
        protocol: "RDP",
        usage: "Remote Desktop"
      }

    ];


    function renderPorts(data) {

      const body =
        document.getElementById("portTableBody");

      body.innerHTML =
        data.map(item => `

          <tr>

            <td class="port-number">
              ${item.port}
            </td>

            <td>
              ${item.protocol}
            </td>

            <td>
              ${item.usage}
            </td>

          </tr>

        `).join("");

    }


    function searchPorts() {

      const search =
        document
          .getElementById("portSearch")
          .value
          .toLowerCase()
          .trim();

      const filtered =
        ports.filter(item =>
          String(item.port).includes(search) ||
          item.protocol.toLowerCase().includes(search) ||
          item.usage.toLowerCase().includes(search)
        );

      renderPorts(filtered);
    }


    /* =====================================================
       COMMAND BUILDER
    ===================================================== */

    const commandData = {

      switch: [

        {
          id: "vlan",
          name: "إنشاء VLAN",
          explanation: "إنشاء VLAN جديدة على السويتش.",
          usage: "تقسيم الشبكة إلى شبكات منطقية.",
          notes: "غيّر رقم VLAN حسب التصميم."
        },

        {
          id: "access",
          name: "Access Port",
          explanation: "جعل البورت يعمل كـ Access.",
          usage: "ربط أجهزة المستخدمين بالسويتش.",
          notes: "يُستخدم عادة مع VLAN واحدة."
        },

        {
          id: "trunk",
          name: "Trunk Port",
          explanation: "تحويل البورت إلى Trunk.",
          usage: "نقل أكثر من VLAN بين الأجهزة.",
          notes: "تأكد من السماح بالـ VLANs المطلوبة."
        },

        {
          id: "portchannel",
          name: "Port-Channel",
          explanation: "تجميع أكثر من رابط في رابط منطقي واحد.",
          usage: "زيادة الاعتمادية وعرض النطاق.",
          notes: "يجب أن تكون إعدادات المنافذ متوافقة."
        },

        {
          id: "shutdown",
          name: "إغلاق / فتح Port",
          explanation: "إغلاق أو إعادة تفعيل واجهة الشبكة.",
          usage: "عزل منفذ أو إعادته للعمل.",
          notes: "انتبه عند تطبيقه على منفذ مستخدم."
        },

        {
          id: "description",
          name: "وصف Port",
          explanation: "إضافة وصف للواجهة.",
          usage: "توضيح الجهاز أو الخدمة المتصلة بالمنفذ.",
          notes: "مفيد جداً في التوثيق."
        },

        {
          id: "hostname",
          name: "تغيير اسم الجهاز",
          explanation: "تغيير اسم السويتش أو الراوتر.",
          usage: "تمييز الأجهزة داخل الشبكة.",
          notes: "استخدم أسماء واضحة مثل SW-CORE-01."
        }

      ],

      routing: [

        {
          id: "interface-ip",
          name: "إضافة IP للواجهة",
          explanation: "إضافة عنوان IP إلى واجهة Layer 3.",
          usage: "تشغيل الاتصال على واجهة راوتر أو سويتش Layer 3.",
          notes: "تأكد من صحة الـ Subnet Mask."
        },

        {
          id: "default-route",
          name: "Default Route",
          explanation: "إنشاء مسار افتراضي.",
          usage: "إرسال الترافيك غير المعروف إلى Gateway.",
          notes: "استخدم Next-Hop صحيح."
        },

        {
          id: "static-route",
          name: "Static Route",
          explanation: "إضافة مسار ثابت إلى شبكة معينة.",
          usage: "توجيه الترافيك إلى شبكة بعيدة.",
          notes: "تأكد من الوصول إلى Next-Hop."
        },

        {
          id: "ospf",
          name: "OSPF",
          explanation: "تفعيل وإعداد OSPF.",
          usage: "تبادل المسارات ديناميكياً بين أجهزة الشبكة.",
          notes: "تأكد من تطابق Area والإعدادات بين الجيران."
        },

        {
          id: "dhcp",
          name: "DHCP",
          explanation: "إعداد DHCP لتوزيع عناوين IP.",
          usage: "توزيع IP و Gateway و DNS تلقائياً.",
          notes: "تأكد من عدم تعارض الـ DHCP مع سيرفر آخر."
        }

      ],

      security: [

        {
          id: "user",
          name: "إنشاء User",
          explanation: "إنشاء مستخدم إداري على الجهاز.",
          usage: "إدارة الدخول للجهاز.",
          notes: "استخدم كلمة مرور قوية."
        },

        {
          id: "ssh",
          name: "تفعيل SSH",
          explanation: "إعداد الوصول الآمن عن طريق SSH.",
          usage: "إدارة الجهاز عن بعد بشكل آمن.",
          notes: "تأكد من إعداد المستخدم والمفاتيح حسب النظام."
        },

        {
          id: "enable",
          name: "Enable / Privilege",
          explanation: "إعداد مستوى الصلاحيات.",
          usage: "التحكم في صلاحيات المستخدم.",
          notes: "الصيغة تختلف بين إصدارات الأجهزة."
        },

        {
          id: "telnet-disable",
          name: "تعطيل Telnet",
          explanation: "منع الوصول باستخدام Telnet.",
          usage: "رفع مستوى أمان الإدارة عن بعد.",
          notes: "يفضل استخدام SSH بدلاً منه."
        },

        {
          id: "console-password",
          name: "Console Password",
          explanation: "تأمين منفذ Console.",
          usage: "منع الدخول غير المصرح به محلياً.",
          notes: "احفظ كلمة المرور في مكان آمن."
        }

      ],

      show: [

        {
          id: "show-vlan",
          name: "عرض VLANs",
          explanation: "عرض VLANs الموجودة على الجهاز.",
          usage: "فحص إعدادات VLAN.",
          notes: "مفيد عند استكشاف مشاكل Switching."
        },

        {
          id: "show-interface",
          name: "حالة Interfaces",
          explanation: "عرض حالة منافذ وواجهات الجهاز.",
          usage: "معرفة المنافذ Up أو Down.",
          notes: "ابدأ به عند وجود مشكلة اتصال."
        },

        {
          id: "show-mac",
          name: "MAC Address Table",
          explanation: "عرض عناوين MAC التي تعلمها السويتش.",
          usage: "معرفة الجهاز الموجود خلف منفذ معين.",
          notes: "مفيد جداً في تتبع الأجهزة."
        },

        {
          id: "show-arp",
          name: "ARP Table",
          explanation: "عرض الربط بين IP و MAC.",
          usage: "استكشاف مشاكل الاتصال داخل الشبكة.",
          notes: "مفيد لمعرفة MAC المرتبط بعنوان IP."
        },

        {
          id: "show-route",
          name: "Routing Table",
          explanation: "عرض جدول التوجيه.",
          usage: "فحص المسارات الموجودة.",
          notes: "تأكد من وجود Route مناسب للشبكة المطلوبة."
        },

        {
          id: "ping",
          name: "Ping",
          explanation: "اختبار الوصول إلى عنوان IP.",
          usage: "اختبار الاتصال بين جهازين.",
          notes: "نجاح Ping لا يعني أن جميع الخدمات تعمل."
        },

        {
          id: "traceroute",
          name: "Traceroute",
          explanation: "تتبع المسار الذي تسلكه الحزم.",
          usage: "معرفة مكان توقف أو تأخر الاتصال.",
          notes: "اسم الأمر يختلف حسب النظام."
        },

        {
          id: "current-config",
          name: "Current Configuration",
          explanation: "عرض الإعدادات الحالية للجهاز.",
          usage: "مراجعة Configuration.",
          notes: "احذر عند مشاركة الإعدادات لأنها قد تحتوي بيانات حساسة."
        }

      ]

    };


    let currentCategory = "switch";


    function setCategory(category, button) {

      currentCategory = category;

      document
        .querySelectorAll(".category-btn")
        .forEach(btn => {
          btn.classList.remove("active");
        });

      button.classList.add("active");

      populateCommands();

    }


    function populateCommands() {

      const select =
        document.getElementById("commandType");

      select.innerHTML = "";

      commandData[currentCategory].forEach(command => {

        const option =
          document.createElement("option");

        option.value = command.id;
        option.textContent = command.name;

        select.appendChild(option);

      });

      buildCommand();
    }


    function findCommand() {

      const id =
        document.getElementById("commandType").value;

      return commandData[currentCategory]
        .find(command => command.id === id);
    }


    function buildCommand() {

      const command =
        findCommand();

      if (!command) {
        return;
      }

      const vendor =
        document.getElementById("vendor").value;

      let output = "";


      /* =========================
         HUAWEI
      ========================= */

      if (vendor === "huawei") {

        const huawei = {

          vlan:
`system-view
vlan 10
quit`,

          access:
`system-view
interface GigabitEthernet 0/0/1
port link-type access
port default vlan 10
quit`,

          trunk:
`system-view
interface GigabitEthernet 0/0/1
port link-type trunk
port trunk allow-pass vlan 10 20
quit`,

          portchannel:
`system-view
interface Eth-Trunk 1
mode lacp-static
quit
interface GigabitEthernet 0/0/1
eth-trunk 1
quit
interface GigabitEthernet 0/0/2
eth-trunk 1
quit`,

          shutdown:
`system-view
interface GigabitEthernet 0/0/1
shutdown
undo shutdown
quit`,

          description:
`system-view
interface GigabitEthernet 0/0/1
description Uplink-to-Core
quit`,

          hostname:
`system-view
sysname SW1
quit`,

          "interface-ip":
`system-view
interface Vlanif 10
ip address 192.168.10.1 255.255.255.0
quit`,

          "default-route":
`system-view
ip route-static 0.0.0.0 0.0.0.0 192.168.1.1`,

          "static-route":
`system-view
ip route-static 192.168.20.0 255.255.255.0 192.168.1.2`,

          ospf:
`system-view
ospf 1
area 0
network 192.168.1.0 0.0.0.255
quit
quit`,

          dhcp:
`system-view
dhcp enable
ip pool LAN
network 192.168.10.0 mask 255.255.255.0
gateway-list 192.168.10.1
dns-list 8.8.8.8
quit`,

          user:
`system-view
aaa
local-user admin password irreversible-cipher YourPassword
local-user admin service-type ssh
local-user admin privilege level 15
quit`,

          ssh:
`system-view
stelnet server enable
rsa local-key-pair create
user-interface vty 0 4
authentication-mode aaa
protocol inbound ssh
quit`,

          enable:
`system-view
aaa
local-user admin privilege level 15
quit`,

          "telnet-disable":
`system-view
user-interface vty 0 4
undo protocol inbound telnet
protocol inbound ssh
quit`,

          "console-password":
`system-view
user-interface console 0
authentication-mode password
set authentication password cipher YourPassword
quit`,

          "show-vlan":
`display vlan`,

          "show-interface":
`display interface brief`,

          "show-mac":
`display mac-address`,

          "show-arp":
`display arp`,

          "show-route":
`display ip routing-table`,

          ping:
`ping 192.168.1.1`,

          traceroute:
`tracert 192.168.1.1`,

          "current-config":
`display current-configuration`

        };

        output = huawei[command.id];

      }


      /* =========================
         CISCO
      ========================= */

      else {

        const cisco = {

          vlan:
`enable
configure terminal
vlan 10
exit`,

          access:
`enable
configure terminal
interface GigabitEthernet0/1
switchport mode access
switchport access vlan 10
exit`,

          trunk:
`enable
configure terminal
interface GigabitEthernet0/1
switchport mode trunk
switchport trunk allowed vlan 10,20
exit`,

          portchannel:
`enable
configure terminal
interface range GigabitEthernet0/1-2
channel-group 1 mode active
exit
interface Port-channel1
switchport mode trunk
exit`,

          shutdown:
`enable
configure terminal
interface GigabitEthernet0/1
shutdown
no shutdown
exit`,

          description:
`enable
configure terminal
interface GigabitEthernet0/1
description Uplink-to-Core
exit`,

          hostname:
`enable
configure terminal
hostname SW1
exit`,

          "interface-ip":
`enable
configure terminal
interface Vlan10
ip address 192.168.10.1 255.255.255.0
no shutdown
exit`,

          "default-route":
`enable
configure terminal
ip route 0.0.0.0 0.0.0.0 192.168.1.1`,

          "static-route":
`enable
configure terminal
ip route 192.168.20.0 255.255.255.0 192.168.1.2`,

          ospf:
`enable
configure terminal
router ospf 1
network 192.168.1.0 0.0.0.255 area 0
exit`,

          dhcp:
`enable
configure terminal
ip dhcp pool LAN
network 192.168.10.0 255.255.255.0
default-router 192.168.10.1
dns-server 8.8.8.8
exit`,

          user:
`enable
configure terminal
username admin privilege 15 secret YourPassword
exit`,

          ssh:
`enable
configure terminal
ip domain-name example.local
crypto key generate rsa
username admin privilege 15 secret YourPassword
line vty 0 4
login local
transport input ssh
exit`,

          enable:
`enable
configure terminal
enable secret YourPassword`,

          "telnet-disable":
`enable
configure terminal
line vty 0 4
transport input ssh
exit`,

          "console-password":
`enable
configure terminal
line console 0
password YourPassword
login
exit`,

          "show-vlan":
`show vlan brief`,

          "show-interface":
`show ip interface brief`,

          "show-mac":
`show mac address-table`,

          "show-arp":
`show arp`,

          "show-route":
`show ip route`,

          ping:
`ping 192.168.1.1`,

          traceroute:
`traceroute 192.168.1.1`,

          "current-config":
`show running-config`

        };

        output = cisco[command.id];

      }


      document.getElementById("commandOutput").textContent =
        output || "لا يوجد أمر متاح.";

      document.getElementById("commandExplanation").textContent =
        command.explanation;

      document.getElementById("commandUsage").textContent =
        command.usage;

      document.getElementById("commandNotes").textContent =
        command.notes;
    }


    /* =====================================================
       COPY COMMAND
    ===================================================== */

    function copyCommand() {

      const text =
        document.getElementById("commandOutput").textContent;

      if (
        !text ||
        text === "اختر الأمر..."
      ) {
        return;
      }

      navigator.clipboard.writeText(text)
        .then(() => {

          const button =
            document.querySelector(
              ".builder-actions .secondary-btn"
            );

          const oldText =
            button.textContent;

          button.textContent =
            "✅ تم النسخ";

          setTimeout(() => {
            button.textContent = oldText;
          }, 1500);

        })
        .catch(() => {

          alert(
            "تعذر النسخ تلقائياً، انسخ الأمر يدوياً."
          );

        });

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    renderPorts(ports);

    populateCommands();

