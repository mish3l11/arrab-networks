const questions = [

    // =========================
    // 🟢 سهل
    // =========================

    {
        category: "⚙️ Basic Configuration",
        difficulty: "🟢 سهل",
        question: "ما هو الأمر المستخدم للدخول إلى وضع الإعدادات في Cisco؟",
        answer: "configure terminal",
        vendor: "🔵 Cisco IOS"
    },

    {
        category: "⚙️ Basic Configuration",
        difficulty: "🟢 سهل",
        question: "ما هو الأمر المستخدم لتغيير اسم الجهاز إلى SW1 في Cisco؟",
        answer: "hostname SW1",
        vendor: "🔵 Cisco IOS"
    },

    {
        category: "⚙️ Basic Configuration",
        difficulty: "🟢 سهل",
        question: "ما هو الأمر المستخدم للدخول إلى وضع الإعدادات في Huawei؟",
        answer: "system-view",
        vendor: "🟢 Huawei VRP"
    },

    {
        category: "🏷️ VLAN",
        difficulty: "🟢 سهل",
        question: "ما هو الأمر المستخدم لإنشاء VLAN رقم 10 في Cisco؟",
        answer: "vlan 10",
        vendor: "🔵 Cisco IOS"
    },

    {
        category: "🏷️ VLAN",
        difficulty: "🟢 سهل",
        question: "ما هو الأمر المستخدم لإنشاء VLAN رقم 20 في Huawei؟",
        answer: "vlan 20",
        vendor: "🟢 Huawei VRP"
    },

    {
        category: "🔌 Access & Trunk",
        difficulty: "🟢 سهل",
        question: "ما هو الأمر المستخدم لجعل المنفذ Access في Cisco؟",
        answer: "switchport mode access",
        vendor: "🔵 Cisco IOS"
    },

    {
        category: "🔌 Access & Trunk",
        difficulty: "🟢 سهل",
        question: "ما هو الأمر المستخدم لجعل المنفذ Access في Huawei؟",
        answer: "port link-type access",
        vendor: "🟢 Huawei VRP"
    },

    {
        category: "🧰 Interface",
        difficulty: "🟢 سهل",
        question: "ما هو الأمر المستخدم لعرض حالة المنافذ وعناوين IP في Cisco؟",
        answer: "show ip interface brief",
        vendor: "🔵 Cisco IOS"
    },

    {
        category: "🧰 Interface",
        difficulty: "🟢 سهل",
        question: "ما هو الأمر المستخدم لعرض حالة المنافذ وعناوين IP في Huawei؟",
        answer: "display ip interface brief",
        vendor: "🟢 Huawei VRP"
    },

    {
        category: "🧰 Troubleshooting",
        difficulty: "🟢 سهل",
        question: "ما هو الأمر المستخدم لاختبار الوصول إلى جهاز آخر؟",
        answer: "ping",
        vendor: "🔵 Cisco / 🟢 Huawei"
    },


    // =========================
    // 🟡 متوسط
    // =========================

    {
        category: "🏷️ VLAN",
        difficulty: "🟡 متوسط",
        question: "ما هو الأمر المستخدم لتسمية VLAN 10 باسم USERS في Cisco؟",
        answer: "name USERS",
        vendor: "🔵 Cisco IOS"
    },

    {
        category: "🏷️ VLAN",
        difficulty: "🟡 متوسط",
        question: "ما هو الأمر المستخدم لعرض الـ VLANs في Huawei؟",
        answer: "display vlan",
        vendor: "🟢 Huawei VRP"
    },

    {
        category: "🔌 Access & Trunk",
        difficulty: "🟡 متوسط",
        question: "ما هو الأمر المستخدم لربط منفذ Access بـ VLAN 10 في Cisco؟",
        answer: "switchport access vlan 10",
        vendor: "🔵 Cisco IOS"
    },

    {
        category: "🔌 Access & Trunk",
        difficulty: "🟡 متوسط",
        question: "ما هو الأمر المستخدم لجعل المنفذ Trunk في Cisco؟",
        answer: "switchport mode trunk",
        vendor: "🔵 Cisco IOS"
    },

    {
        category: "🔌 Access & Trunk",
        difficulty: "🟡 متوسط",
        question: "ما هو الأمر المستخدم لربط منفذ Access بـ VLAN 10 في Huawei؟",
        answer: "port default vlan 10",
        vendor: "🟢 Huawei VRP"
    },

    {
        category: "🔌 Access & Trunk",
        difficulty: "🟡 متوسط",
        question: "ما هو الأمر المستخدم لجعل المنفذ Trunk في Huawei؟",
        answer: "port link-type trunk",
        vendor: "🟢 Huawei VRP"
    },

    {
        category: "🚦 Static Routing",
        difficulty: "🟡 متوسط",
        question: "أضف Static Route في Cisco إلى الشبكة 192.168.2.0/24 عبر 10.0.0.2",
        answer: "ip route 192.168.2.0 255.255.255.0 10.0.0.2",
        vendor: "🔵 Cisco IOS"
    },

    {
        category: "🚦 Static Routing",
        difficulty: "🟡 متوسط",
        question: "أضف Static Route في Huawei إلى الشبكة 192.168.2.0/24 عبر 10.0.0.2",
        answer: "ip route-static 192.168.2.0 255.255.255.0 10.0.0.2",
        vendor: "🟢 Huawei VRP"
    },

    {
        category: "📡 OSPF",
        difficulty: "🟡 متوسط",
        question: "ما هو الأمر المستخدم لإنشاء OSPF Process رقم 1 في Cisco؟",
        answer: "router ospf 1",
        vendor: "🔵 Cisco IOS"
    },

    {
        category: "📡 OSPF",
        difficulty: "🟡 متوسط",
        question: "ما هو الأمر المستخدم لإنشاء OSPF Process رقم 1 في Huawei؟",
        answer: "ospf 1",
        vendor: "🟢 Huawei VRP"
    },


    // =========================
    // 🔴 متقدم
    // =========================

    {
        category: "📡 OSPF",
        difficulty: "🔴 متقدم",
        question: "أضف الشبكة 10.0.0.0/30 إلى OSPF Area 0 في Cisco",
        answer: "network 10.0.0.0 0.0.0.3 area 0",
        vendor: "🔵 Cisco IOS"
    },

    {
        category: "📡 OSPF",
        difficulty: "🔴 متقدم",
        question: "ما هو الأمر المستخدم لعرض جيران OSPF في Huawei؟",
        answer: "display ospf peer",
        vendor: "🟢 Huawei VRP"
    },

    {
        category: "📡 OSPF",
        difficulty: "🔴 متقدم",
        question: "ما هو الأمر المستخدم لعرض جدول التوجيه في Cisco؟",
        answer: "show ip route",
        vendor: "🔵 Cisco IOS"
    },

    {
        category: "📡 OSPF",
        difficulty: "🔴 متقدم",
        question: "ما هو الأمر المستخدم لعرض جدول التوجيه في Huawei؟",
        answer: "display ip routing-table",
        vendor: "🟢 Huawei VRP"
    },

    {
        category: "🔐 SSH",
        difficulty: "🔴 متقدم",
        question: "ما هو الأمر المستخدم لإنشاء مفاتيح RSA في Cisco؟",
        answer: "crypto key generate rsa",
        vendor: "🔵 Cisco IOS"
    },

    {
        category: "🔐 SSH",
        difficulty: "🔴 متقدم",
        question: "ما هو الأمر المستخدم لعرض جلسات SSH في Cisco؟",
        answer: "show ssh",
        vendor: "🔵 Cisco IOS"
    },

    {
        category: "🧰 Troubleshooting",
        difficulty: "🔴 متقدم",
        question: "ما هو الأمر المستخدم لعرض جدول MAC Address في Cisco؟",
        answer: "show mac address-table",
        vendor: "🔵 Cisco IOS"
    },

    {
        category: "🧰 Troubleshooting",
        difficulty: "🔴 متقدم",
        question: "ما هو الأمر المستخدم لعرض جدول MAC Address في Huawei؟",
        answer: "display mac-address",
        vendor: "🟢 Huawei VRP"
    },

    {
        category: "🧰 Troubleshooting",
        difficulty: "🔴 متقدم",
        question: "ما هو الأمر المستخدم لعرض إعدادات الجهاز الحالية في Cisco؟",
        answer: "show running-config",
        vendor: "🔵 Cisco IOS"
    },

    {
        category: "🧰 Troubleshooting",
        difficulty: "🔴 متقدم",
        question: "ما هو الأمر المستخدم لعرض الإعدادات الحالية في Huawei؟",
        answer: "display current-configuration",
        vendor: "🟢 Huawei VRP"
    }

];


let current = 0;
let score = 0;


const questionElement =
    document.getElementById("labQuestion");

const vendorElement =
    document.getElementById("labVendor");

const numberElement =
    document.getElementById("labNumber");

const progressElement =
    document.getElementById("labProgress");

const scoreElement =
    document.getElementById("labScore");

const answerInput =
    document.getElementById("labAnswer");

const resultElement =
    document.getElementById("labResult");

const checkButton =
    document.getElementById("checkLabButton");

const nextButton =
    document.getElementById("nextLabButton");


function normalize(text) {

    return text
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");

}


function updateProgress() {

    const percent =
        ((current + 1) / questions.length) * 100;

    progressElement.textContent =
        (current + 1) +
        " / " +
        questions.length;

}


function showQuestion() {

    const question =
        questions[current];


    questionElement.textContent =
        question.question;


    vendorElement.textContent =
        question.vendor;


    numberElement.textContent =
        "السؤال " +
        (current + 1);


    progressElement.textContent =
        (current + 1) +
        " / " +
        questions.length;


    scoreElement.textContent =
        score;


    answerInput.value = "";

    resultElement.textContent = "";


    checkButton.style.display =
        "block";


    nextButton.style.display =
        "none";


    answerInput.style.display =
        "block";


    answerInput.disabled =
        false;


    answerInput.focus();

}


checkButton.addEventListener(
    "click",
    function () {

        const userAnswer =
            normalize(answerInput.value);


        const correctAnswer =
            normalize(questions[current].answer);


        if (userAnswer === correctAnswer) {

            score += 10;


            scoreElement.textContent =
                score;


            resultElement.textContent =
                "✅ إجابة صحيحة! +10 نقاط";


            answerInput.disabled =
                true;


            checkButton.style.display =
                "none";


            nextButton.style.display =
                "block";

        } else {

            resultElement.textContent =
                "❌ إجابة خاطئة، حاول مرة أخرى.";

        }

    }
);


nextButton.addEventListener(
    "click",
    function () {

        if (current < questions.length - 1) {

            current++;

            showQuestion();

        } else {

            showResult();

        }

    }
);


function showResult() {

    const percentage =
        Math.round(
            (score / (questions.length * 10)) * 100
        );


    questionElement.textContent =
        "🎉 انتهى Network Lab!";


    vendorElement.textContent =
        "🏆 النتيجة النهائية";


    numberElement.textContent =
        "انتهيت";


    progressElement.textContent =
        questions.length +
        " / " +
        questions.length;


    resultElement.textContent =
        "حصلت على " +
        score +
        " من " +
        (questions.length * 10) +
        " نقطة — " +
        percentage +
        "%";


    answerInput.style.display =
        "none";


    checkButton.style.display =
        "none";


    nextButton.textContent =
        "🔄 إعادة الاختبار";


    nextButton.style.display =
        "block";

}


nextButton.addEventListener(
    "click",
    function () {

        if (current === questions.length - 1) {

            current = 0;

            score = 0;

            showQuestion();

        }

    }
);


showQuestion();
