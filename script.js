/*
 * عرّاب الشبكات
 * Copyright (c) 2026 Mishal AL-Mishal
 * All Rights Reserved.
 *
 * يمنع نسخ أو إعادة استخدام أو إعادة توزيع هذا الملف
 * أو أي جزء جوهري منه دون إذن صاحب الحقوق.
 */
/* =========================
   الدروس
========================= */

let currentLesson = 0;

const lessons = [
    {
        title: "ما هي الشبكة؟",
        text: `
الشبكة هي مجموعة من الأجهزة المتصلة مع بعضها بهدف تبادل البيانات والمعلومات.

مثال بسيط:
عندما يكون عندك جهاز كمبيوتر وطابعة وسويتش متصلين مع بعض، هذه تعتبر شبكة محلية.

أشهر أنواع الشبكات:
* LAN: شبكة داخل مكان صغير مثل المنزل أو المكتب.
* WAN: شبكة تربط بين مناطق أو مدن مختلفة.
* WLAN: شبكة محلية لاسلكية مثل Wi-Fi.
`
    },

    {
        title: "ما هو IP؟",
        text: `
عنوان IP هو عنوان يُستخدم لتمييز الجهاز داخل الشبكة.

مثال:
192.168.1.10

كل جهاز يحتاج عنوانًا يمكن من خلاله التعرف عليه والتواصل مع الأجهزة الأخرى.

يوجد نوعان شائعان:
* IPv4
* IPv6
`
    },

    {
        title: "ما هو Router؟",
        text: `
الراوتر Router هو جهاز يربط بين شبكات مختلفة ويساعد على توجيه البيانات من شبكة إلى أخرى.

مثال:
الراوتر الموجود في المنزل يربط الشبكة المنزلية بالإنترنت.

الراوتر يهتم بشكل أساسي بعملية Routing، أي اختيار الطريق المناسب للبيانات.
`
    },

    {
        title: "ما هو Switch؟",
        text: `
السويتش Switch هو جهاز يستخدم لربط الأجهزة داخل الشبكة المحلية LAN.

يمكن توصيل:
* أجهزة الكمبيوتر
* الطابعات
* السيرفرات
* نقاط الوصول

السويتش يستخدم عناوين MAC للمساعدة في توصيل البيانات إلى الجهاز الصحيح داخل الشبكة.
`
    },

    {
        title: "ما هي VLAN؟",
        text: `
VLAN هي طريقة لتقسيم شبكة واحدة إلى عدة شبكات منطقية منفصلة.

مثال:

VLAN 10 → قسم الشبكات
VLAN 20 → قسم الإدارة
VLAN 30 → قسم الموظفين

الفائدة من VLAN هي تنظيم الشبكة وتقليل نطاق Broadcast وتحسين عملية الإدارة.
`
    }
];


/* =========================
   عرض الدرس
========================= */

function showLesson() {

    const title = document.getElementById("lessonTitle");
    const text = document.getElementById("lessonText");
    const number = document.getElementById("lessonNumber");
    const percent = document.getElementById("progressPercent");
    const fill = document.getElementById("progressFill");

    if (!title || !text || !number || !percent || !fill) {
        return;
    }

    title.textContent =
        lessons[currentLesson].title;

    text.textContent =
        lessons[currentLesson].text;

    number.textContent =
        "الدرس " +
        (currentLesson + 1) +
        " من " +
        lessons.length;

    const progress =
        ((currentLesson + 1) / lessons.length) * 100;

    percent.textContent =
        progress + "%";

    fill.style.width =
        progress + "%";
}


/* =========================
   الدرس التالي
========================= */

function nextLesson() {

    if (currentLesson < lessons.length - 1) {

        currentLesson++;

        showLesson();
    }
}


/* =========================
   الدرس السابق
========================= */

function previousLesson() {

    if (currentLesson > 0) {

        currentLesson--;

        showLesson();
    }
}


/* =========================
   تحديد الدرس من الرابط
========================= */

const params =
    new URLSearchParams(window.location.search);

const lessonNumber =
    params.get("lesson");

if (lessonNumber !== null) {

    const selectedLesson =
        Number(lessonNumber);

    if (
        Number.isInteger(selectedLesson) &&
        selectedLesson >= 0 &&
        selectedLesson < lessons.length
    ) {

        currentLesson =
            selectedLesson;
    }
}


/* =========================
   تشغيل الدرس
========================= */

showLesson();


/* ==================================================
   مختبر الشبكة
================================================== */


/* =========================
   معلومات الأجهزة
========================= */

function showDeviceInfo(device) {

    
    const info =
        document.getElementById("device-info");

    if (!info) {
        return;
    }


    /* =========================
       PC
    ========================= */

    if (device === "pc") {

        info.innerHTML = `

            <h3>
                💻 PC — جهاز المستخدم
            </h3>

            <p>
                الجهاز الذي يبدأ منه الاتصال وإرسال البيانات داخل الشبكة.
            </p>

            <div class="device-details">

                <div>
                    🌐 <strong>IP Address:</strong>
                    192.168.1.10
                </div>

                <div>
                    🔗 <strong>MAC Address:</strong>
                    AA:BB:CC:11:22:33
                </div>

                <div>
                    🚪 <strong>Default Gateway:</strong>
                    192.168.1.1
                </div>

                <div>
                    📡 <strong>Network:</strong>
                    LAN
                </div>

            </div>

        `;
    }


    /* =========================
       Switch
    ========================= */

    else if (device === "switch") {

        info.innerHTML = `

            <h3>
                🔵 Switch — السويتش
            </h3>

            <p>
                يربط الأجهزة داخل الشبكة المحلية
                ويساعد على إرسال البيانات إلى الجهاز الصحيح.
            </p>

            <div class="device-details">

                <div>
                    🔗 <strong>يعتمد على:</strong>
                    MAC Address
                </div>

                <div>
                    🔌 <strong>وظيفته:</strong>
                    ربط الأجهزة
                </div>

                <div>
                    📋 <strong>يستخدم:</strong>
                    MAC Address Table
                </div>

                <div>
                    🌐 <strong>يعمل بشكل أساسي في:</strong>
                    Layer 2
                </div>

            </div>

        `;
    }


    /* =========================
       Router
    ========================= */

    else if (device === "router") {

        info.innerHTML = `

            <h3>
                🟠 Router — الراوتر
            </h3>

            <p>
                يربط بين الشبكات المختلفة ويحدد المسار
                المناسب لحركة البيانات.
            </p>

            <div class="device-details">

                <div>
                    🌐 <strong>يعتمد على:</strong>
                    IP Address
                </div>

                <div>
                    🛣️ <strong>وظيفته:</strong>
                    Routing
                </div>

                <div>
                    📋 <strong>يستخدم:</strong>
                    Routing Table
                </div>

                <div>
                    🔀 <strong>يربط:</strong>
                    شبكات مختلفة
                </div>

            </div>

        `;
    }


    /* =========================
       Firewall
    ========================= */

    else if (device === "firewall") {

        info.innerHTML = `

            <h3>
                🛡️ Firewall — جدار الحماية
            </h3>

            <p>
                جهاز أمني يراقب حركة البيانات
                ويسمح أو يمنع الاتصالات حسب قواعد الحماية.
            </p>

            <div class="device-details">

                <div>
                    🔐 <strong>وظيفته:</strong>
                    حماية الشبكة
                </div>

                <div>
                    🚦 <strong>القرار:</strong>
                    Allow / Deny
                </div>

                <div>
                    📋 <strong>يعتمد على:</strong>
                    Security Rules
                </div>

                <div>
                    👁️ <strong>يراقب:</strong>
                    Network Traffic
                </div>

            </div>

        `;
    }


    /* =========================
       Server
    ========================= */

    else if (device === "server") {

        info.innerHTML = `

            <h3>
                🖥️ Server — السيرفر
            </h3>

            <p>
                جهاز يقدم خدمات أو بيانات للأجهزة الأخرى
                داخل الشبكة.
            </p>

            <div class="device-details">

                <div>
                    🌐 <strong>IP Address:</strong>
                    192.168.2.10
                </div>

                <div>
                    🖥️ <strong>وظيفته:</strong>
                    تقديم الخدمات
                </div>

                <div>
                    📁 <strong>أمثلة:</strong>
                    Files / Web / DNS
                </div>

                <div>
                    📡 <strong>يستقبل:</strong>
                    Network Requests
                </div>

            </div>

        `;
    }
}



/* =========================
   تحديث حالة الجهاز
========================= */

function updatePacketStatus(step) {

    const status =
        document.getElementById("packet-status");

    if (!status) {
        return;
    }


    if (step === 0) {

        status.textContent =
            "💻 PC → 🔵 Switch | يبدأ الجهاز بإرسال البيانات";
    }


    else if (step === 1) {

        status.textContent =
            "🔵 Switch → 🟠 Router | السويتش يستخدم MAC Address";
    }


    else if (step === 2) {

        status.textContent =
            "🟠 Router → 🛡️ Firewall | الراوتر يوجه البيانات باستخدام IP";
    }


    else if (step === 3) {

        status.textContent =
            "🛡️ Firewall → 🖥️ Server | يتم فحص الاتصال حسب قواعد الحماية";
    }


    else if (step === 4) {

        status.textContent =
            "✅ وصلت البيانات إلى السيرفر بنجاح!";
    }
}


/* =========================
   تنظيف الأجهزة النشطة
========================= */

function clearActiveDevices() {

    const devices =
        document.querySelectorAll(
            ".network-device"
        );

    devices.forEach(function (device) {

        device.classList.remove("active");

    });
}


/* ==================================================
   إرسال Packet
================================================== */


function sendPacket() {

    const packet =
        document.getElementById("packet");

    const status =
        document.getElementById("packet-status");

    const topology =
        document.querySelector(".network-topology");


    if (!packet || !status || !topology) {
        return;
    }


    /* =========================
       إيقاف حركة سابقة
    ========================= */

    clearInterval(window.packetMove);

    clearActiveDevices();


    /* =========================
       الأجهزة بالترتيب
    ========================= */

    const devices = [

        document.querySelector(
            '.network-device[onclick*="pc"]'
        ),

        document.querySelector(
            '.network-device[onclick*="switch"]'
        ),

        document.querySelector(
            '.network-device[onclick*="router"]'
        ),

        document.querySelector(
            '.network-device[onclick*="firewall"]'
        ),

        document.querySelector(
            '.network-device[onclick*="server"]'
        )

    ];


    /* =========================
       التأكد من الأجهزة
    ========================= */

    if (
        devices.some(function (device) {
            return !device;
        })
    ) {
        return;
    }


    /* =========================
       موقع المختبر
    ========================= */

    const topologyRect =
        topology.getBoundingClientRect();


    /* =========================
       حساب مواقع الأجهزة
    ========================= */

    const positions =
        devices.map(function (device) {

            const rect =
                device.getBoundingClientRect();

            return {

                x:
                    rect.left -
                    topologyRect.left +
                    rect.width / 2,

                y:
                    rect.top -
                    topologyRect.top +
                    rect.height / 2
            };
        });


    /* =========================
       بداية Packet
    ========================= */

    packet.style.display =
        "block";

    packet.style.opacity =
        "1";

    packet.style.left =
        positions[0].x + "px";

    packet.style.top =
        positions[0].y + "px";

    packet.style.transform =
        "translate(-50%, -50%)";


    /* PC يصبح نشط */
    devices[0].classList.add("active");

    updatePacketStatus(0);


    /* =========================
       متغيرات الحركة
    ========================= */

    let currentStep = 0;

    let progress = 0;


    /* =========================
       حركة Packet
    ========================= */

    window.packetMove =
        setInterval(function () {

            const start =
                positions[currentStep];

            const end =
                positions[currentStep + 1];


            if (!start || !end) {

                clearInterval(
                    window.packetMove
                );

                return;
            }


            /* سرعة الحركة */

            progress += 0.010;


            if (progress > 1) {
                progress = 1;
            }


            /* =========================
               حساب موقع Packet
            ========================= */

            const x =
                start.x +
                (end.x - start.x) *
                progress;


            const y =
                start.y +
                (end.y - start.y) *
                progress;


            packet.style.left =
                x + "px";

            packet.style.top =
                y + "px";


            /* =========================
               وصول الجهاز التالي
            ========================= */

            if (progress >= 1) {

                currentStep++;

                progress = 0;


                /* الجهاز الحالي */

                const activeDevice =
                    devices[currentStep];


                if (activeDevice) {

                    activeDevice
                        .classList
                        .add("active");


                    setTimeout(function () {

                        activeDevice
                            .classList
                            .remove("active");

                    }, 500);
                }


                /* =========================
                   السيرفر
                ========================= */

                if (
                    currentStep >=
                    positions.length - 1
                ) {

                    clearInterval(
                        window.packetMove
                    );


                    const finalPosition =
                        positions[
                            positions.length - 1
                        ];


                    packet.style.left =
                        finalPosition.x + "px";


                    packet.style.top =
                        finalPosition.y + "px";


                    updatePacketStatus(4);


                    setTimeout(function () {

                        packet.style.opacity =
                            "0";

                    }, 800);


                    return;
                }


                /* =========================
                   تحديث حالة الرحلة
                ========================= */

                updatePacketStatus(
                    currentStep
                );
            }

        }, 30);
}