// ==========================================
// عرّاب الشبكات - الأعطال التدريبية
// نسخة مرنة
// ==========================================

const scenarios = {

    // ==========================================
    // 1 - Shutdown Port
    // ==========================================

    "shutdown-port": {
        title: "🔴 منفذ Shutdown",
        description: "يوجد منفذ على السويتش متوقف. اكتشف المشكلة وأعد تشغيل المنفذ.",

        steps: {
            cisco: [
                {
                    question: "تحقق من حالة المنافذ لمعرفة المنفذ المتوقف.",
                    validate: command => [
                        "show ip interface brief",
                        "sh ip int br"
                    ].includes(command),
                    help: "استخدم أمر يعرض حالة الواجهات وعناوين IP بشكل مختصر."
                },

                {
                    question: "ادخل إلى المنفذ المتوقف.",
                    validate: isCiscoInterfaceCommand,
                    help: "استخدم interface ثم اكتب أي منفذ صحيح مثل Gi0/1 أو Gi0/5."
                },

                {
                    question: "فعّل المنفذ.",
                    validate: command => [
                        "no shutdown",
                        "no shut"
                    ].includes(command),
                    help: "المنفذ متوقف إداريًا، والأمر المطلوب يبدأ بكلمة no."
                },

                {
                    question: "تحقق من حالة المنفذ بعد الإصلاح.",
                    validate: command => [
                        "show ip interface brief",
                        "sh ip int br"
                    ].includes(command),
                    help: "استخدم أمر فحص الواجهات مرة أخرى."
                }
            ],

            huawei: [
                {
                    question: "تحقق من حالة المنافذ لمعرفة المنفذ المتوقف.",
                    validate: command => [
                        "display ip interface brief",
                        "disp ip int br"
                    ].includes(command),
                    help: "استخدم أمر Display يعرض حالة الواجهات بشكل مختصر."
                },

                {
                    question: "ادخل إلى المنفذ المتوقف.",
                    validate: isHuaweiInterfaceCommand,
                    help: "استخدم interface ثم اكتب أي منفذ صحيح مثل GE0/0/1."
                },

                {
                    question: "فعّل المنفذ.",
                    validate: command => [
                        "undo shutdown",
                        "undo shut"
                    ].includes(command),
                    help: "في Huawei نستخدم undo لإلغاء الإيقاف الإداري."
                },

                {
                    question: "تحقق من حالة المنفذ بعد الإصلاح.",
                    validate: command => [
                        "display ip interface brief",
                        "disp ip int br"
                    ].includes(command),
                    help: "استخدم أمر فحص الواجهات مرة أخرى."
                }
            ]
        }
    },


    // ==========================================
    // 2 - Wrong VLAN
    // ==========================================

    "wrong-vlan": {
        title: "🟠 VLAN خاطئة",
        description: "الجهاز متصل بمنفذ موجود في VLAN غير صحيحة. صحح إعداد المنفذ.",

        steps: {
            cisco: [
                {
                    question: "تحقق من الـ VLAN الموجودة على السويتش.",
                    validate: command => [
                        "show vlan brief",
                        "sh vlan br"
                    ].includes(command),
                    help: "استخدم أمر Show يعرض قائمة الـ VLAN والمنافذ المرتبطة بها."
                },

                {
                    question: "ادخل إلى المنفذ المطلوب تعديله.",
                    validate: isCiscoInterfaceCommand,
                    help: "استخدم interface للدخول إلى أي منفذ صحيح."
                },

                {
                    question: "اجعل المنفذ Access.",
                    validate: command =>
                        command === "switchport mode access",
                    help: "ستحتاج إلى أمر switchport لتحديد طريقة عمل المنفذ."
                },

                {
                    question: "ضع المنفذ في VLAN من اختيارك.",
                    validate: isCiscoAccessVlanCommand,
                    help: "بعد access vlan اكتب رقم VLAN صحيح من 1 إلى 4094."
                },

                {
                    question: "تحقق من الإعداد.",
                    validate: command => [
                        "show vlan brief",
                        "sh vlan br"
                    ].includes(command),
                    help: "تحقق مرة أخرى من قائمة VLAN والمنافذ."
                }
            ],

            huawei: [
                {
                    question: "تحقق من الـ VLAN الموجودة على السويتش.",
                    validate: command => [
                        "display vlan",
                        "disp vlan"
                    ].includes(command),
                    help: "استخدم أمر Display يعرض معلومات الـ VLAN."
                },

                {
                    question: "ادخل إلى المنفذ المطلوب تعديله.",
                    validate: isHuaweiInterfaceCommand,
                    help: "استخدم interface للدخول إلى أي منفذ صحيح."
                },

                {
                    question: "اجعل المنفذ Access.",
                    validate: command =>
                        command === "port link-type access",
                    help: "في Huawei إعداد نوع المنفذ يبدأ بكلمة port."
                },

                {
                    question: "ضع المنفذ في VLAN من اختيارك.",
                    validate: isHuaweiDefaultVlanCommand,
                    help: "بعد default vlan اكتب رقم VLAN صحيح من 1 إلى 4094."
                },

                {
                    question: "تحقق من الإعداد.",
                    validate: command => [
                        "display vlan",
                        "disp vlan"
                    ].includes(command),
                    help: "اعرض معلومات VLAN مرة أخرى للتأكد."
                }
            ]
        }
    },


    // ==========================================
    // 3 - Missing VLAN
    // ==========================================

    "missing-vlan": {
        title: "🟡 VLAN غير موجودة",
        description: "أنشئ VLAN جديدة واختر الرقم والاسم الذي تريده.",

        steps: {
            cisco: [
                {
                    question: "تحقق من قائمة الـ VLAN.",
                    validate: command => [
                        "show vlan brief",
                        "sh vlan br"
                    ].includes(command),
                    help: "ابدأ بفحص الـ VLAN الموجودة قبل إنشاء أي شيء."
                },

                {
                    question: "أنشئ VLAN بالرقم الذي تختاره.",
                    validate: isVlanCommand,
                    help: "استخدم vlan ثم اكتب أي رقم صحيح من 1 إلى 4094."
                },

                {
                    question: "أعطِ الـ VLAN أي اسم تريده.",
                    validate: isCiscoVlanNameCommand,
                    help: "استخدم name ثم اكتب الاسم الذي تختاره أنت. لا يوجد اسم محدد مطلوب."
                },

                {
                    question: "تحقق من إنشاء الـ VLAN.",
                    validate: command => [
                        "show vlan brief",
                        "sh vlan br"
                    ].includes(command),
                    help: "اعرض قائمة VLAN مرة أخرى للتأكد من ظهور VLAN."
                }
            ],

            huawei: [
                {
                    question: "تحقق من قائمة الـ VLAN.",
                    validate: command => [
                        "display vlan",
                        "disp vlan"
                    ].includes(command),
                    help: "ابدأ بعرض الـ VLAN الموجودة على السويتش."
                },

                {
                    question: "أنشئ VLAN بالرقم الذي تختاره.",
                    validate: isVlanCommand,
                    help: "استخدم vlan ثم اكتب أي رقم صحيح من 1 إلى 4094."
                },

                {
                    question: "أضف أي وصف تريده للـ VLAN.",
                    validate: isHuaweiVlanDescriptionCommand,
                    help: "في Huawei استخدم description ثم اكتب أي وصف تختاره."
                },

                {
                    question: "تحقق من إنشاء الـ VLAN.",
                    validate: command => [
                        "display vlan",
                        "disp vlan"
                    ].includes(command),
                    help: "اعرض معلومات VLAN للتأكد من ظهورها."
                }
            ]
        }
    },


    // ==========================================
    // 4 - Interface Down
    // ==========================================

    "interface-down": {
        title: "🔵 Interface غير مفعّل",
        description: "واجهة الشبكة موجودة ولكنها غير مفعّلة. أعد تشغيلها وتحقق من حالتها.",

        steps: {
            cisco: [
                {
                    question: "تحقق من حالة الواجهات.",
                    validate: command => [
                        "show ip interface brief",
                        "sh ip int br"
                    ].includes(command),
                    help: "استخدم الأمر المختصر الذي يعرض حالة جميع الواجهات."
                },

                {
                    question: "ادخل إلى الواجهة المطلوبة.",
                    validate: isCiscoInterfaceCommand,
                    help: "ادخل إلى أي واجهة صحيحة باستخدام interface."
                },

                {
                    question: "فعّل الواجهة.",
                    validate: command => [
                        "no shutdown",
                        "no shut"
                    ].includes(command),
                    help: "الواجهة تحتاج إلى إزالة حالة الإيقاف الإداري."
                },

                {
                    question: "تحقق من الحالة بعد التفعيل.",
                    validate: command => [
                        "show ip interface brief",
                        "sh ip int br"
                    ].includes(command),
                    help: "استخدم أمر فحص الواجهات مرة أخرى."
                }
            ],

            huawei: [
                {
                    question: "تحقق من حالة الواجهات.",
                    validate: command => [
                        "display ip interface brief",
                        "disp ip int br"
                    ].includes(command),
                    help: "اعرض حالة الواجهات باستخدام Display."
                },

                {
                    question: "ادخل إلى الواجهة المطلوبة.",
                    validate: isHuaweiInterfaceCommand,
                    help: "استخدم interface للدخول إلى أي واجهة صحيحة."
                },

                {
                    question: "فعّل الواجهة.",
                    validate: command => [
                        "undo shutdown",
                        "undo shut"
                    ].includes(command),
                    help: "في Huawei استخدم undo لإلغاء الإيقاف الإداري."
                },

                {
                    question: "تحقق من الحالة بعد التفعيل.",
                    validate: command => [
                        "display ip interface brief",
                        "disp ip int br"
                    ].includes(command),
                    help: "تحقق من حالة الواجهة بعد تعديلها."
                }
            ]
        }
    },


    // ==========================================
    // 5 - SVI Error
    // ==========================================

    "svi-error": {
        title: "🟣 VLAN Interface خاطئ",
        description: "أنشئ وتهيئ واجهة VLAN باستخدام القيم التي تختارها.",

        steps: {
            cisco: [
                {
                    question: "تحقق من واجهات الـ VLAN.",
                    validate: command => [
                        "show ip interface brief",
                        "sh ip int br"
                    ].includes(command),
                    help: "ابدأ بفحص حالة واجهات VLAN مع بقية الواجهات."
                },

                {
                    question: "ادخل إلى واجهة VLAN بالرقم الذي تختاره.",
                    validate: isCiscoVlanInterfaceCommand,
                    help: "استخدم interface vlan ثم اكتب رقم VLAN صحيح."
                },

                {
                    question: "ضع عنوان IP وقناع شبكة من اختيارك.",
                    validate: isIpAddressCommand,
                    help: "استخدم ip address ثم عنوان IP وقناع الشبكة."
                },

                {
                    question: "فعّل الواجهة.",
                    validate: command => [
                        "no shutdown",
                        "no shut"
                    ].includes(command),
                    help: "بعد ضبط العنوان، تأكد من أن الواجهة ليست متوقفة إداريًا."
                },

                {
                    question: "تحقق من حالة الواجهة.",
                    validate: command => [
                        "show ip interface brief",
                        "sh ip int br"
                    ].includes(command),
                    help: "افحص الواجهات مرة أخيرة للتأكد من حالة SVI."
                }
            ],

            huawei: [
                {
                    question: "تحقق من واجهات الـ VLAN.",
                    validate: command => [
                        "display ip interface brief",
                        "disp ip int br"
                    ].includes(command),
                    help: "ابدأ بفحص حالة واجهات VLAN."
                },

                {
                    question: "ادخل إلى Vlanif بالرقم الذي تختاره.",
                    validate: isHuaweiVlanifCommand,
                    help: "في Huawei استخدم interface Vlanif ثم اكتب رقم VLAN صحيح."
                },

                {
                    question: "ضع عنوان IP وقناع شبكة من اختيارك.",
                    validate: isIpAddressCommand,
                    help: "استخدم ip address ثم عنوان IP وقناع الشبكة."
                },

                {
                    question: "فعّل الواجهة.",
                    validate: command => [
                        "undo shutdown",
                        "undo shut"
                    ].includes(command),
                    help: "استخدم undo لإلغاء حالة الإيقاف الإداري."
                },

                {
                    question: "تحقق من حالة الواجهة.",
                    validate: command => [
                        "display ip interface brief",
                        "disp ip int br"
                    ].includes(command),
                    help: "اعرض حالة الواجهات للتأكد من نجاح الإصلاح."
                }
            ]
        }
    }
};


// ==========================================
// الحالة
// ==========================================

let currentScenario = null;
let currentDevice = "cisco";
let currentStep = 0;
let helpLevel = 0;


// ==========================================
// أدوات التحقق المرنة
// ==========================================

function isValidVlanNumber(number) {

    const value = Number(number);

    return Number.isInteger(value) &&
           value >= 1 &&
           value <= 4094;
}


// ==========================================
// Cisco Interface
// يقبل مثل:
// interface gigabitethernet0/1
// int g0/1
// interface gi0/5
// ==========================================

function isCiscoInterfaceCommand(command) {

    return /^interface (gigabitethernet|gi|g)\d+\/\d+$/.test(command) ||
           /^int (gigabitethernet|gi|g)\d+\/\d+$/.test(command);
}


// ==========================================
// Huawei Interface
// يقبل مثل:
// interface gigabitethernet0/0/1
// int g0/0/1
// int ge0/0/5
// ==========================================

function isHuaweiInterfaceCommand(command) {

    return /^interface (gigabitethernet|gi|ge)\d+\/\d+\/\d+$/.test(command) ||
           /^int (gigabitethernet|gi|ge)\d+\/\d+\/\d+$/.test(command);
}


// ==========================================
// VLAN Command
// vlan 1
// vlan 10
// vlan 100
// ==========================================

function isVlanCommand(command) {

    const match = command.match(/^vlan (\d+)$/);

    if (!match) return false;

    return isValidVlanNumber(match[1]);
}


// ==========================================
// Cisco Access VLAN
// switchport access vlan 10
// switchport access vlan 20
// ==========================================

function isCiscoAccessVlanCommand(command) {

    const match =
        command.match(/^switchport access vlan (\d+)$/);

    if (!match) return false;

    return isValidVlanNumber(match[1]);
}


// ==========================================
// Huawei Default VLAN
// port default vlan 10
// ==========================================

function isHuaweiDefaultVlanCommand(command) {

    const match =
        command.match(/^port default vlan (\d+)$/);

    if (!match) return false;

    return isValidVlanNumber(match[1]);
}


// ==========================================
// Cisco VLAN Name
// name USERS
// name CAMERAS
// name STAFF
// name MY_VLAN
// ==========================================

function isCiscoVlanNameCommand(command) {

    const match =
        command.match(/^name (.+)$/);

    if (!match) return false;

    const name = match[1].trim();

    return name.length >= 1 &&
           name.length <= 32;
}


// ==========================================
// Huawei VLAN Description
// description USERS
// description CAMERAS
// description MY VLAN
// ==========================================

function isHuaweiVlanDescriptionCommand(command) {

    const match =
        command.match(/^description (.+)$/);

    if (!match) return false;

    const description = match[1].trim();

    return description.length >= 1 &&
           description.length <= 80;
}


// ==========================================
// Cisco SVI
// interface vlan 10
// interface vlan 20
// int vlan 30
// ==========================================

function isCiscoVlanInterfaceCommand(command) {

    const match =
        command.match(
            /^(interface|int) vlan (\d+)$/
        );

    if (!match) return false;

    return isValidVlanNumber(match[2]);
}


// ==========================================
// Huawei Vlanif
// interface vlanif 10
// int vlanif 20
// ==========================================

function isHuaweiVlanifCommand(command) {

    const match =
        command.match(
            /^(interface|int) vlanif (\d+)$/
        );

    if (!match) return false;

    return isValidVlanNumber(match[2]);
}


// ==========================================
// IP Address
//
// يقبل:
// ip address 192.168.1.1 255.255.255.0
// ip add 10.0.0.1 255.255.255.0
//
// ويقبل أي IP وقناع صحيح
// ==========================================

function isIpAddressCommand(command) {

    const match =
        command.match(
            /^(ip address|ip add) (\d+\.\d+\.\d+\.\d+) (\d+\.\d+\.\d+\.\d+)$/
        );

    if (!match) return false;

    return isValidIPv4(match[2]) &&
           isValidIPv4(match[3]);
}


// ==========================================
// IPv4 Validation
// ==========================================

function isValidIPv4(ip) {

    const parts = ip.split(".");

    if (parts.length !== 4) return false;

    return parts.every(part => {

        if (!/^\d+$/.test(part)) {
            return false;
        }

        const value = Number(part);

        return value >= 0 && value <= 255;
    });
}


// ==========================================
// أزرار الأعطال
// ==========================================

document
    .querySelectorAll(".troubleshooting-scenario-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            openScenario(button.dataset.scenario);

        });

    });


// ==========================================
// فتح العطل
// ==========================================

function openScenario(id) {

    if (!scenarios[id]) return;

    currentScenario = id;
    currentDevice = "cisco";
    currentStep = 0;
    helpLevel = 0;

    renderTraining();

    document
        .getElementById("troubleshootingTraining")
        ?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
}


// ==========================================
// عرض التدريب
// ==========================================

function renderTraining() {

    const container =
        document.getElementById(
            "troubleshootingTraining"
        );

    if (!container || !currentScenario) return;

    const scenario =
        scenarios[currentScenario];

    const steps =
        scenario.steps[currentDevice];

    const step =
        steps[currentStep];

    const progress =
        Math.round(
            (currentStep / steps.length) * 100
        );


    container.innerHTML = `

        <div class="training-header">

            <div>
                <span class="training-label">
                    تدريب عملي
                </span>

                <h2>
                    ${scenario.title}
                </h2>

                <p>
                    ${scenario.description}
                </p>
            </div>

            <button
                type="button"
                class="training-close"
                id="closeTraining"
            >
                ✕
            </button>

        </div>


        <div class="device-selector">

            <button
                type="button"
                class="device-btn ${
                    currentDevice === "cisco"
                        ? "active"
                        : ""
                }"
                data-device="cisco"
            >
                Cisco
            </button>

            <button
                type="button"
                class="device-btn ${
                    currentDevice === "huawei"
                        ? "active"
                        : ""
                }"
                data-device="huawei"
            >
                Huawei
            </button>

        </div>


        <div class="training-progress">

            <div class="progress-info">

                <span>
                    الخطوة ${currentStep + 1}
                    من ${steps.length}
                </span>

                <span>
                    ${progress}%
                </span>

            </div>

            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="width:${progress}%"
                ></div>

            </div>

        </div>


        <div class="training-question">

            <span class="question-label">
                المطلوب منك
            </span>

            <h3>
                ${step.question}
            </h3>

        </div>


        <div class="command-box">

            <label for="trainingCommand">
                اكتب الأمر الصحيح
            </label>

            <div class="command-input-row">

                <span class="prompt">
                    ${
                        currentDevice === "cisco"
                            ? "#"
                            : "[Huawei]"
                    }
                </span>

                <input
                    id="trainingCommand"
                    type="text"
                    autocomplete="off"
                    spellcheck="false"
                    placeholder="اكتب الأمر هنا..."
                >

                <button
                    type="button"
                    id="checkTrainingCommand"
                >
                    تحقق
                </button>

            </div>

            <div
                id="trainingMessage"
                class="training-message"
            ></div>

        </div>


        <div class="help-area">

            <button
                type="button"
                id="helpButton"
                class="help-button"
            >
                💡 مساعدة
            </button>

            <div
                id="helpContent"
                class="help-content"
                hidden
            ></div>

        </div>


        <div class="training-actions">

            <button
                type="button"
                class="secondary-training-btn"
                id="restartTraining"
            >
                إعادة التدريب
            </button>

        </div>
    `;


    attachEvents();
}


// ==========================================
// الأحداث
// ==========================================

function attachEvents() {

    document
        .querySelectorAll(".device-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                currentDevice =
                    button.dataset.device;

                currentStep = 0;
                helpLevel = 0;

                renderTraining();

            });

        });


    document
        .getElementById("closeTraining")
        ?.addEventListener(
            "click",
            closeTraining
        );


    document
        .getElementById("restartTraining")
        ?.addEventListener("click", () => {

            currentStep = 0;
            helpLevel = 0;

            renderTraining();

        });


    document
        .getElementById("checkTrainingCommand")
        ?.addEventListener(
            "click",
            checkCommand
        );


    document
        .getElementById("trainingCommand")
        ?.addEventListener("keydown", event => {

            if (event.key === "Enter") {
                checkCommand();
            }

        });


    document
        .getElementById("helpButton")
        ?.addEventListener(
            "click",
            showHelp
        );


    document
        .getElementById("trainingCommand")
        ?.focus();
}


// ==========================================
// نظام المساعدة
// ==========================================

function showHelp() {

    const helpContent =
        document.getElementById(
            "helpContent"
        );

    const helpButton =
        document.getElementById(
            "helpButton"
        );

    if (!helpContent || !helpButton) return;

    const scenario =
        scenarios[currentScenario];

    const step =
        scenario.steps[currentDevice][currentStep];


    helpLevel++;


    if (helpLevel === 1) {

        helpContent.hidden = false;

        helpContent.innerHTML = `
            <strong>💡 تلميح بسيط</strong>
            <p>
                ${step.help}
            </p>
        `;

        helpButton.textContent =
            "💡 مساعدة إضافية";

        return;
    }


    if (helpLevel === 2) {

        helpContent.hidden = false;

        helpContent.innerHTML = `
            <strong>🔎 تلميح أقوى</strong>
            <p>
                ابحث عن الأمر الذي يرتبط مباشرة
                بالمطلوب في هذه الخطوة، ولا تنتقل
                للخطوة التالية حتى تتأكد من النتيجة.
            </p>
        `;

        helpButton.textContent =
            "📖 شرح الخطوة";

        return;
    }


    helpContent.hidden = false;

    helpContent.innerHTML = `
        <strong>📖 شرح الخطوة</strong>
        <p>
            هذه الخطوة جزء من عملية استكشاف العطل.
            أولًا افهم المطلوب، ثم حدد هل تحتاج
            إلى أمر عرض ومراقبة أم أمر إعداد وتعديل.
        </p>
    `;

    helpButton.textContent =
        "💡 المساعدة";
}


// ==========================================
// إغلاق التدريب
// ==========================================

function closeTraining() {

    const container =
        document.getElementById(
            "troubleshootingTraining"
        );

    if (container) {
        container.innerHTML = "";
    }

    currentScenario = null;
    currentStep = 0;
    helpLevel = 0;
}


// ==========================================
// تنظيف الأمر
// ==========================================

function normalizeCommand(command) {

    return command
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");
}


// ==========================================
// التحقق من الأمر
// ==========================================

function checkCommand() {

    const input =
        document.getElementById(
            "trainingCommand"
        );

    const message =
        document.getElementById(
            "trainingMessage"
        );

    if (!input || !message) return;


    const entered =
        normalizeCommand(input.value);


    if (!entered) {

        message.className =
            "training-message error";

        message.textContent =
            "اكتب الأمر أولًا ثم اضغط تحقق.";

        return;
    }


    const scenario =
        scenarios[currentScenario];

    const step =
        scenario.steps[currentDevice][currentStep];


    const correct =
        step.validate(entered);


    if (!correct) {

        message.className =
            "training-message error";

        message.textContent =
            "❌ الأمر غير صحيح لهذه الخطوة، حاول مرة أخرى.";

        input.select();

        return;
    }


    currentStep++;
    helpLevel = 0;


    if (
        currentStep >=
        scenario.steps[currentDevice].length
    ) {

        showSuccess();

        return;
    }


    message.className =
        "training-message success";

    message.textContent =
        "✅ ممتاز! الأمر صحيح، ننتقل للخطوة التالية.";


    setTimeout(() => {

        renderTraining();

    }, 600);
}


// ==========================================
// نجاح
// ==========================================

function showSuccess() {

    const container =
        document.getElementById(
            "troubleshootingTraining"
        );

    if (!container) return;


    const scenario =
        scenarios[currentScenario];


    container.innerHTML = `

        <div class="training-success">

            <div class="success-icon">
                ✓
            </div>

            <h2>
                تم حل العطل بنجاح!
            </h2>

            <p>
                أحسنت! تمكنت من تشخيص المشكلة
                وتنفيذ الأوامر الصحيحة.
            </p>

            <div class="success-details">

                <span>
                    ${scenario.title}
                </span>

                <span>
                    ${
                        currentDevice === "cisco"
                            ? "Cisco"
                            : "Huawei"
                    }
                </span>

            </div>

            <div class="success-actions">

                <button
                    type="button"
                    id="retryScenario"
                >
                    إعادة التدريب
                </button>

                <button
                    type="button"
                    id="chooseAnotherScenario"
                >
                    اختيار عطل آخر
                </button>

            </div>

        </div>
    `;


    document
        .getElementById("retryScenario")
        ?.addEventListener("click", () => {

            currentStep = 0;
            helpLevel = 0;

            renderTraining();

        });


    document
        .getElementById("chooseAnotherScenario")
        ?.addEventListener("click", () => {

            closeTraining();

            document
                .querySelector(
                    ".troubleshooting-scenarios"
                )
                ?.scrollIntoView({
                    behavior: "smooth"
                });

        });
}