const finalExamQuestions = [
    {
        question: "إذا كانت وجهة البيانات خارج الشبكة المحلية، فعن أي جهاز يبحث الحاسوب عن عنوان MAC باستخدام ARP؟",
        answers: ["الجهاز البعيد نفسه", "البوابة الافتراضية", "خادم DNS", "السويتش"],
        correct: 1,
        explanation: "يبحث الحاسوب عن MAC واجهة البوابة الافتراضية المتصلة بشبكته. يرسل طلب ARP كبث عام، ثم يرسل البيانات إلى البوابة."
    },
    {
        question: "يمرر الراوتر حزمة إلى الشبكة التالية. ما الذي ينشئه من جديد لإرسالها عبر الوصلة التالية؟",
        answers: ["إطار الطبقة الثانية وعناوين MAC", "عنوان IP للوجهة في كل مرة", "بيانات التطبيق", "رقم منفذ TCP"],
        correct: 0,
        explanation: "يفك الراوتر إطار الوصلة الذي استلمه، ثم يضع حزمة IP داخل إطار جديد يناسب الوصلة التالية."
    },
    {
        question: "ما الهدف من بروتوكول STP عند وجود أكثر من مسار بين السويتشات؟",
        answers: ["منع حلقات الطبقة الثانية", "توزيع عناوين IP", "تشفير الاتصال", "اختيار خادم DNS"],
        correct: 0,
        explanation: "يوقف STP بعض المسارات الزائدة منطقيًا حتى لا تدور إطارات الشبكة في حلقة، مع إبقاء مسار احتياطي عند الحاجة."
    },
    {
        question: "تحتاج شبكة إلى 24 عنوانًا للأجهزة. أي بادئة توفر هذا العدد من العناوين القابلة للاستخدام؟",
        answers: ["/28", "/27", "/29", "/30"],
        correct: 1,
        explanation: "توفر /27 عدد 30 عنوانًا قابلًا للاستخدام؛ أما /28 فتوفّر 14 فقط."
    },
    {
        question: "تطابق عنوان الوجهة مع مسارين في جدول التوجيه: /20 و/24. أي مسار يختار الراوتر؟",
        answers: ["/20 لأنه يغطي شبكة أكبر", "/24 لأنه أكثر تحديدًا", "المسار الأقدم دائمًا", "المساران معًا"],
        correct: 1,
        explanation: "يختار الراوتر أطول بادئة مطابقة. لذلك يفضّل /24 على /20 لأنها تحدد شبكة أصغر بدقة أكبر."
    },
    {
        question: "حاسوب في VLAN 10 يريد التواصل مع حاسوب في VLAN 20. ما الوظيفة المطلوبة لتمرير البيانات بينهما؟",
        answers: ["التوجيه بين الـVLANs", "تفعيل Hub", "تغيير عناوين MAC يدويًا", "إضافة منفذ Access آخر"],
        correct: 0,
        explanation: "كل VLAN شبكة منطقية منفصلة. يحتاج الاتصال بينهما إلى توجيه من الطبقة الثالثة."
    },
    {
        question: "كيف يعرف السويتش عبر وصلة Trunk إلى أي VLAN ينتمي الإطار المستلم؟",
        answers: ["من وسم VLAN في الإطار", "من رقم منفذ TCP", "من اسم الجهاز", "من عنوان MAC للبوابة فقط"],
        correct: 0,
        explanation: "يحمل إطار Trunk وسمًا يحدد رقم الـVLAN، فيمرر السويتش الإطار ضمن الشبكة المنطقية الصحيحة."
    },
    {
        question: "أي بروتوكول نقل يناسب مكالمة صوتية مباشرة عندما تكون سرعة الوصول أهم من إعادة إرسال كل جزء مفقود؟",
        answers: ["UDP", "TCP", "ARP", "OSPF"],
        correct: 0,
        explanation: "UDP لا يعتمد على إعادة إرسال البيانات المفقودة، لذلك يناسب تطبيقات الزمن الحقيقي التي تحتاج تأخيرًا منخفضًا."
    },
    {
        question: "ما الترتيب الصحيح لرسائل بدء اتصال TCP؟",
        answers: ["SYN ثم SYN-ACK ثم ACK", "ACK ثم SYN ثم FIN", "SYN-ACK ثم ACK ثم SYN", "FIN ثم SYN ثم ACK"],
        correct: 0,
        explanation: "يرسل العميل SYN، ويرد الخادم بـSYN-ACK، ثم يؤكد العميل الاتصال برسالة ACK."
    },
    {
        question: "استلم السويتش إطارًا ولم يجد MAC الوجهة في جدوله. ماذا يفعل عادة؟",
        answers: ["يرسله إلى منافذ الـVLAN نفسها عدا منفذ الاستلام", "يرسله إلى جميع VLANs", "يرسله إلى خادم DNS فقط", "يحذفه دائمًا"],
        correct: 0,
        explanation: "عند عدم معرفة منفذ الوجهة، يرسل السويتش الإطار إلى منافذ الـVLAN نفسها، باستثناء المنفذ الذي استلمه منه."
    },
    {
        question: "ما الترتيب المعتاد لرسائل DHCP عندما يطلب جهاز جديد عنوان IP؟",
        answers: ["Discover، Offer، Request، Acknowledge", "Request، Discover، Acknowledge، Offer", "Offer، Acknowledge، Discover، Request", "Discover، Request، Offer، Acknowledge"],
        correct: 0,
        explanation: "يرسل الجهاز Discover، ثم يعرض الخادم عنوانًا بـOffer، ويطلبه الجهاز بـRequest، ويؤكد الخادم بـAcknowledge."
    },
    {
        question: "راوتران متصلان مباشرة ويستخدمان OSPF، لكن رقم الـArea مختلف بينهما. ما المتوقع؟",
        answers: ["لن يكتمل تكوين الجوار بينهما", "سيتحول الاتصال تلقائيًا إلى Static Route", "سيغير OSPF رقم الـArea تلقائيًا", "سيعمل الجوار دون تبادل معلومات"],
        correct: 0,
        explanation: "يجب أن يتطابق رقم الـArea على الوصلة بين الراوترين حتى ينجح تكوين OSPF Neighbor."
    },
    {
        question: "تريد المؤسسة إتاحة موقعها عبر HTTPS فقط من الإنترنت. أي قاعدة Firewall تحقق ذلك؟",
        answers: ["السماح بـHTTPS وحجب الاتصالات الأخرى غير المطلوبة", "السماح بكل المنافذ", "حجب HTTPS والسماح بالإدارة عن بُعد للجميع", "السماح بحركة الإنترنت دون قواعد"],
        correct: 0,
        explanation: "تسمح القاعدة بالخدمة المطلوبة فقط، وتمنع الاتصالات الأخرى غير المصرح بها وفق سياسة المؤسسة."
    },
    {
        question: "في أي طبقة من نموذج OSI توجد عناوين IP ووظيفة التوجيه؟",
        answers: ["طبقة الشبكة", "طبقة ربط البيانات", "الطبقة الفيزيائية", "طبقة التطبيق"],
        correct: 0,
        explanation: "تتعامل طبقة الشبكة، وهي الطبقة الثالثة، مع عناوين IP واختيار المسارات بين الشبكات."
    },
    {
        question: "عند تقسيم شبكة /24 إلى أربع شبكات فرعية متساوية، ما بادئة كل شبكة جديدة؟",
        answers: ["/25", "/26", "/27", "/28"],
        correct: 1,
        explanation: "نحتاج بتّين لإنشاء أربع شبكات (2² = 4)، لذلك تصبح البادئة /26 بدل /24."
    }
];

let questionIndex = 0;
let finalExamScore = 0;
let hasAnswered = false;

const questionNumber = document.getElementById("questionNumber");
const scoreText = document.getElementById("scoreText");
const progressFill = document.getElementById("progressFill");
const questionText = document.getElementById("questionText");
const answerList = document.getElementById("answerList");
const explanation = document.getElementById("explanation");
const nextButton = document.getElementById("nextButton");
const examCard = document.getElementById("examCard");
const resultCard = document.getElementById("resultCard");

function showFinalExamQuestion() {
    hasAnswered = false;
    const item = finalExamQuestions[questionIndex];
    questionNumber.textContent = `السؤال ${questionIndex + 1} من ${finalExamQuestions.length}`;
    scoreText.textContent = `النقاط: ${finalExamScore}`;
    progressFill.style.width = `${(questionIndex / finalExamQuestions.length) * 100}%`;
    questionText.textContent = item.question;
    answerList.replaceChildren();
    explanation.classList.remove("show");
    explanation.textContent = "";
    nextButton.classList.remove("show");

    item.answers.forEach((answer, index) => {
        const option = document.createElement("button");
        option.className = "exam-answer";
        option.type = "button";
        option.textContent = answer;
        option.addEventListener("click", () => chooseFinalExamAnswer(index));
        answerList.appendChild(option);
    });
}

function chooseFinalExamAnswer(selectedIndex) {
    if (hasAnswered) return;
    hasAnswered = true;
    const item = finalExamQuestions[questionIndex];
    const options = [...answerList.querySelectorAll(".exam-answer")];
    options.forEach((option, index) => {
        option.disabled = true;
        if (index === item.correct) option.classList.add("correct");
        if (index === selectedIndex && index !== item.correct) option.classList.add("wrong");
    });
    const isCorrect = selectedIndex === item.correct;
    if (isCorrect) finalExamScore++;
    scoreText.textContent = `النقاط: ${finalExamScore}`;
    explanation.classList.toggle("is-correct", isCorrect);
    explanation.classList.toggle("is-wrong", !isCorrect);
    explanation.innerHTML = `
        <strong class="exam-feedback-title">${isCorrect ? "✓ إجابة صحيحة" : "✕ إجابة خاطئة"}</strong>
        <p>${item.explanation}</p>
        ${isCorrect ? "" : `<p><strong>الإجابة الصحيحة:</strong> ${item.answers[item.correct]}</p>`}
    `;
    explanation.classList.add("show");
    nextButton.textContent = questionIndex === finalExamQuestions.length - 1 ? "اعرض النتيجة 🏆" : "السؤال التالي ←";
    nextButton.classList.add("show");
}

function finishFinalExam() {
    const percentage = Math.round((finalExamScore / finalExamQuestions.length) * 100);
    const bestScore = Math.max(Number(localStorage.getItem("networkFinalExamBestScore")) || 0, percentage);
    localStorage.setItem("networkFinalExamBestScore", String(bestScore));
    if (percentage >= 80) localStorage.setItem("networkFinalExamPassed", "true");
    document.getElementById("resultScore").textContent = `${percentage}%`;
    document.getElementById("resultMessage").textContent = percentage >= 80
        ? "أحسنت! اجتزت الاختبار النهائي وأثبتّ قدرتك على تطبيق مفاهيم الدروس."
        : "راجِع الدروس التي تحتاجها ثم أعد الاختبار. ستبقى أفضل نتيجة محفوظة لك.";
    progressFill.style.width = "100%";
    examCard.style.display = "none";
    resultCard.classList.add("show");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

nextButton.addEventListener("click", () => {
    if (!hasAnswered) return;
    if (questionIndex < finalExamQuestions.length - 1) {
        questionIndex++;
        showFinalExamQuestion();
    } else {
        finishFinalExam();
    }
});

document.getElementById("restartButton").addEventListener("click", () => {
    questionIndex = 0;
    finalExamScore = 0;
    resultCard.classList.remove("show");
    examCard.style.display = "";
    showFinalExamQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

showFinalExamQuestion();
