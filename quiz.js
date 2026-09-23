/*
 * عرّاب الشبكات
 * Copyright (c) 2026 Mishal AL-Mishal
 * All Rights Reserved.
 *
 * يمنع نسخ أو إعادة استخدام أو إعادة توزيع هذا الملف
 * أو أي جزء جوهري منه دون إذن صاحب الحقوق.
 */
/* ==================================================
   عرّاب الشبكات
   THEORETICAL QUIZ
================================================== */


/* ==================================================
   QUESTIONS
================================================== */

const questions = [

    {
        question: "ما الوظيفة الأساسية للـSwitch؟",

        answers: [
            "ربط الشبكات المختلفة",
            "ربط الأجهزة داخل الشبكة المحلية",
            "توفير الإنترنت فقط",
            "حماية الشبكة من الفيروسات"
        ],

        correct: 1,

        explanation:
            "الـSwitch يستخدم بشكل أساسي لربط الأجهزة داخل الشبكة المحلية وتمرير Frames بينها."
    },


    {
        question: "أي عنوان يستخدمه الـSwitch بشكل أساسي في Layer 2؟",

        answers: [
            "IP Address",
            "Port Number",
            "MAC Address",
            "Subnet Mask"
        ],

        correct: 2,

        explanation:
            "السويتش في Layer 2 يعتمد بشكل أساسي على MAC Address لاتخاذ قرار تمرير الـFrame."
    },


    {
        question: "ما الوظيفة الأساسية للـRouter؟",

        answers: [
            "ربط الأجهزة داخل نفس VLAN فقط",
            "ربط الشبكات المختلفة",
            "تغيير MAC Address",
            "تشغيل Wi-Fi فقط"
        ],

        correct: 1,

        explanation:
            "الراوتر يربط شبكات مختلفة ويستخدم Routing Table لتحديد المسار المناسب."
    },


    {
        question: "كم Bit يحتوي عليه عنوان IPv4؟",

        answers: [
            "16 Bit",
            "24 Bit",
            "32 Bit",
            "64 Bit"
        ],

        correct: 2,

        explanation:
            "IPv4 يتكون من 32 Bit، ويتم عرضه عادة على شكل أربعة Octets، كل Octet يحتوي على 8 Bits."
    },


    {
        question: "كم عدد الـOctets في عنوان IPv4؟",

        answers: [
            "2",
            "4",
            "6",
            "8"
        ],

        correct: 1,

        explanation:
            "IPv4 يتكون من أربعة Octets، مثل 192.168.1.10."
    },


    {
        question: "ماذا يعني /24 في عنوان IPv4؟",

        answers: [
            "24 جهازًا",
            "24 Router",
            "24 Bit للشبكة",
            "24 VLAN"
        ],

        correct: 2,

        explanation:
            "الـ/24 يعني أن أول 24 Bit مخصصة لجزء الشبكة، ويتبقى 8 Bits للـHost."
    },


    {
        question: "كم عدد العناوين الإجمالية في شبكة /24؟",

        answers: [
            "64",
            "128",
            "256",
            "512"
        ],

        correct: 2,

        explanation:
            "في /24 توجد 8 Host Bits، لذلك 2^8 = 256 عنوانًا إجماليًا."
    },


    {
        question: "ما الهدف الأساسي من Subnetting؟",

        answers: [
            "زيادة سرعة الإنترنت",
            "تقسيم شبكة إلى شبكات أصغر",
            "تغيير MAC Address",
            "إلغاء الحاجة إلى Router"
        ],

        correct: 1,

        explanation:
            "Subnetting يعني تقسيم شبكة أكبر إلى عدة شبكات أصغر لتحسين التنظيم واستخدام العناوين."
    },


    {
        question: "أي عنوان من التالي يعتبر Private IPv4؟",

        answers: [
            "8.8.8.8",
            "10.10.10.1",
            "1.1.1.1",
            "172.40.1.1"
        ],

        correct: 1,

        explanation:
            "النطاق 10.0.0.0/8 من نطاقات Private IPv4."
    },


    {
        question: "ما الفرق الأساسي بين Access Port وTrunk Port؟",

        answers: [
            "Access يحمل عدة VLANs دائمًا",
            "Trunk يستخدم غالبًا لتمرير عدة VLANs",
            "لا يوجد فرق",
            "Access يستخدم فقط مع Routers"
        ],

        correct: 1,

        explanation:
            "Access Port يستخدم عادة مع جهاز نهائي وVLAN واحدة، بينما Trunk يستطيع حمل عدة VLANs."
    },


    {
        question: "ما الهدف من VLAN؟",

        answers: [
            "تقسيم الشبكة منطقيًا",
            "زيادة حجم القرص الصلب",
            "تغيير عنوان MAC",
            "استبدال Router"
        ],

        correct: 0,

        explanation:
            "VLAN تسمح بتقسيم شبكة Layer 2 إلى شبكات منطقية منفصلة."
    },


    {
        question: "ما الأمر المستخدم في Huawei لعرض جدول MAC؟",

        answers: [
            "show mac address-table",
            "display mac-address",
            "display ip route",
            "show vlan"
        ],

        correct: 1,

        explanation:
            "في Huawei VRP يستخدم الأمر display mac-address لعرض معلومات MAC."
    },


    {
        question: "ما الأمر الشائع في Huawei لعرض Routing Table؟",

        answers: [
            "display ip routing-table",
            "display mac-address",
            "show ip route",
            "display vlan"
        ],

        correct: 0,

        explanation:
            "الأمر display ip routing-table يعرض جدول التوجيه في Huawei VRP."
    },


    {
        question: "ما المقصود بـStatic Routing؟",

        answers: [
            "مسار يتم تعلمه تلقائيًا",
            "مسار يتم إدخاله يدويًا",
            "عنوان MAC",
            "نوع من VLAN"
        ],

        correct: 1,

        explanation:
            "Static Route يتم تكوينه يدويًا بواسطة مسؤول الشبكة."
    },


    {
        question: "أي بروتوكول يعتبر Dynamic Routing Protocol؟",

        answers: [
            "OSPF",
            "ARP",
            "Ethernet",
            "SSH"
        ],

        correct: 0,

        explanation:
            "OSPF هو بروتوكول Dynamic Routing يستخدم لتبادل معلومات المسارات بين أجهزة الراوتر."
    },


    {
        question: "ما المقصود بـNext Hop في Static Route؟",

        answers: [
            "عنوان الجهاز النهائي فقط",
            "عنوان الراوتر التالي في المسار",
            "عنوان MAC للسويتش",
            "رقم VLAN"
        ],

        correct: 1,

        explanation:
            "Next Hop هو عنوان IP للجهاز التالي الذي سيتم إرسال البيانات إليه للوصول إلى الشبكة المطلوبة."
    },


    {
        question: "ما فائدة SSH في أجهزة الشبكة؟",

        answers: [
            "إدارة الجهاز عن بعد بشكل آمن",
            "زيادة مساحة التخزين",
            "إنشاء VLAN فقط",
            "تغيير نوع الكيبل"
        ],

        correct: 0,

        explanation:
            "SSH يستخدم للوصول إلى أجهزة الشبكة وإدارتها عن بعد عبر اتصال مشفر."
    },


    {
        question: "عند وجود مشكلة في الشبكة، ما الأفضل فحصه أولًا؟",

        answers: [
            "تغيير كل الإعدادات",
            "Physical والكيابل وحالة الواجهة",
            "حذف Routing Table",
            "إعادة تشغيل جميع الأجهزة"
        ],

        correct: 1,

        explanation:
            "ابدأ بالأساسيات: الكيبل، الطاقة، حالة الواجهة، ثم انتقل إلى IP وVLAN وRouting."
    },


    {
        question: "ما وظيفة الـDefault Gateway؟",

        answers: [
            "الوصول إلى الشبكات خارج الشبكة المحلية",
            "تغيير MAC Address",
            "تحديد اسم الجهاز",
            "إنشاء VLAN تلقائيًا"
        ],

        correct: 0,

        explanation:
            "عندما تكون الوجهة خارج الشبكة المحلية، يستخدم الجهاز الـDefault Gateway لإرسال البيانات إلى شبكة أخرى."
    },


    {
        question: "أي أمر يساعدك في فحص حالة الواجهات في Huawei؟",

        answers: [
            "display ip interface brief",
            "display mac-address",
            "display ospf peer",
            "display vlan"
        ],

        correct: 0,

        explanation:
            "display ip interface brief يعرض ملخصًا عن الواجهات وحالاتها وعناوين IP."
    }

];


/* ==================================================
   VARIABLES
================================================== */

let currentQuestion = 0;

let score = 0;

let answered = false;


/* ==================================================
   ELEMENTS
================================================== */

const quizCard =
    document.getElementById("quizCard");

const resultCard =
    document.getElementById("resultCard");

const questionNumber =
    document.getElementById("questionNumber");

const questionTitle =
    document.getElementById("questionTitle");

const answersContainer =
    document.getElementById("answers");

const explanation =
    document.getElementById("explanation");

const nextArea =
    document.getElementById("nextArea");

const nextQuestionButton =
    document.getElementById("nextQuestion");

const progressFill =
    document.getElementById("progressFill");

const scoreSmall =
    document.getElementById("scoreSmall");

const resultScore =
    document.getElementById("resultScore");

const resultMessage =
    document.getElementById("resultMessage");

const restartQuizButton =
    document.getElementById("restartQuiz");


/* ==================================================
   LOAD QUESTION
================================================== */

function loadQuestion() {

    answered = false;

    const question =
        questions[currentQuestion];


    questionNumber.textContent =
        "السؤال " +
        (currentQuestion + 1) +
        " من " +
        questions.length;


    questionTitle.textContent =
        question.question;


    scoreSmall.textContent =
        "النقاط: " + score;


    const progress =
        ((currentQuestion) / questions.length) * 100;


    progressFill.style.width =
        progress + "%";


    answersContainer.innerHTML = "";

    explanation.classList.remove("show");

    explanation.innerHTML = "";

    nextArea.classList.remove("show");


    question.answers.forEach(
        function(answer, index) {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "answer-button";

            button.textContent =
                answer;


            button.addEventListener(
                "click",
                function() {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );

}


/* ==================================================
   SELECT ANSWER
================================================== */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (answered) {
        return;
    }


    answered = true;


    const question =
        questions[currentQuestion];


    const buttons =
        answersContainer.querySelectorAll(
            ".answer-button"
        );


    buttons.forEach(
        function(button, index) {

            button.classList.add(
                "disabled"
            );


            button.disabled = true;


            if (
                index === question.correct
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    if (
        selectedIndex === question.correct
    ) {

        score++;

        selectedButton.classList.add(
            "correct"
        );

        explanation.innerHTML = `
            <strong>✅ إجابة صحيحة</strong>
            ${question.explanation}
        `;

    } else {

        selectedButton.classList.add(
            "wrong"
        );

        explanation.innerHTML = `
            <strong>❌ إجابة غير صحيحة</strong>
            ${question.explanation}
        `;

    }


    explanation.classList.add(
        "show"
    );


    scoreSmall.textContent =
        "النقاط: " + score;


    nextArea.classList.add(
        "show"
    );


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextQuestionButton.textContent =
            "عرض النتيجة 🏆";

    } else {

        nextQuestionButton.textContent =
            "السؤال التالي →";

    }

}


/* ==================================================
   NEXT QUESTION
================================================== */

nextQuestionButton.addEventListener(
    "click",
    function() {

        if (!answered) {
            return;
        }


        if (
            currentQuestion <
            questions.length - 1
        ) {

            currentQuestion++;

            loadQuestion();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        } else {

            showResult();

        }

    }
);


/* ==================================================
   SHOW RESULT
================================================== */

function showResult() {

    quizCard.style.display =
        "none";


    resultCard.classList.add(
        "show"
    );


    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    resultScore.textContent =
        percentage + "%";


    if (percentage >= 90) {

        resultMessage.textContent =
            "🔥 ممتاز! عندك فهم قوي لمفاهيم الشبكات.";

    } else if (percentage >= 75) {

        resultMessage.textContent =
            "👏 ممتاز! مستواك جيد جدًا، واصل التعلم والتطبيق.";

    } else if (percentage >= 60) {

        resultMessage.textContent =
            "👍 جيد، راجع بعض الدروس ثم جرّب الاختبار مرة أخرى.";

    } else {

        resultMessage.textContent =
            "📚 تحتاج مراجعة بعض المفاهيم الأساسية قبل إعادة الاختبار.";

    }


    // حفظ أفضل نتيجة
    saveBestScore(
        percentage
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==================================================
   SAVE BEST SCORE
   SUPABASE + LOCAL STORAGE
================================================== */

async function saveBestScore(
    percentage
) {

    /*
     * أولًا نحفظ محليًا كنسخة احتياطية.
     */

    const localSaved =
        Number(
            localStorage.getItem(
                "networkQuizBestScore"
            )
        ) || 0;


    if (
        percentage > localSaved
    ) {

        localStorage.setItem(
            "networkQuizBestScore",
            String(percentage)
        );

    }


    /*
     * التأكد من وجود Supabase.
     */

    if (
        typeof supabaseClient === "undefined"
    ) {

        console.warn(
            "Supabase غير متوفر في صفحة الاختبار."
        );

        return;

    }


    try {

        /*
         * معرفة المستخدم الحالي.
         */

        const {
            data: {
                user
            },
            error: userError
        } = await supabaseClient.auth.getUser();


        if (
            userError ||
            !user
        ) {

            console.warn(
                "لا يوجد مستخدم مسجل الدخول."
            );

            return;

        }


        /*
         * جلب أفضل نتيجة الحالية من Supabase.
         */

        const {
            data: profile,
            error: profileError
        } = await supabaseClient
            .from("users")
            .select("quiz_best_score")
            .eq("auth_id", user.id)
            .single();


        if (profileError) {

            console.error(
                "تعذر قراءة أفضل نتيجة:",
                profileError
            );

            return;

        }


        const databaseBestScore =
            Number(
                profile.quiz_best_score
            ) || 0;


        /*
         * لا نحدث قاعدة البيانات
         * إلا إذا كانت النتيجة الجديدة أعلى.
         */

        if (
            percentage <= databaseBestScore
        ) {

            return;

        }


        /*
         * تحديث أفضل نتيجة.
         */

        const {
            error: updateError
        } = await supabaseClient
            .from("users")
            .update({
                quiz_best_score: percentage
            })
            .eq("auth_id", user.id);


        if (updateError) {

            console.error(
                "تعذر حفظ أفضل نتيجة:",
                updateError
            );

            return;

        }


        console.log(
            "تم حفظ أفضل نتيجة في Supabase:",
            percentage
        );


    } catch (error) {

        console.error(
            "حدث خطأ أثناء حفظ نتيجة الاختبار:",
            error
        );

    }

}


/* ==================================================
   RESTART
================================================== */

restartQuizButton.addEventListener(
    "click",
    function() {

        currentQuestion = 0;

        score = 0;

        answered = false;


        resultCard.classList.remove(
            "show"
        );


        quizCard.style.display =
            "";


        loadQuestion();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* ==================================================
   START
================================================== */

loadQuestion();
