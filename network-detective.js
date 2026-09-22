"use strict";

/* =========================================
   NETWORK DETECTIVE
   عرّاب الشبكات
========================================= */

var STORAGE_KEY = "networkDetectiveProgress";

var cases = [

    {
        id: 1,
        icon: "🚨",
        title: "السيرفر اختفى",
        description: "السيرفر لم يعد يستجيب، والمستخدمون لا يستطيعون الوصول إلى الخدمة.",
        story: "وصل بلاغ من قسم الدعم: السيرفر الرئيسي لم يعد متاحًا منذ دقائق. بعض الأجهزة تعمل بشكل طبيعي، بينما الخدمة الموجودة على السيرفر توقفت.",
        xp: 100,

        devices: [
            {
                id: "pc01",
                icon: "💻",
                name: "PC-01",
                type: "جهاز مستخدم",
                status: "متصل",
                ip: "192.168.10.21",
                info: "الجهاز متصل بالشبكة ويستطيع الوصول إلى البوابة."
            },
            {
                id: "pc02",
                icon: "💻",
                name: "PC-02",
                type: "جهاز مستخدم",
                status: "متصل",
                ip: "192.168.10.22",
                info: "الاتصال المحلي يعمل ولا توجد مشكلة واضحة في الجهاز."
            },
            {
                id: "switch01",
                icon: "🔵",
                name: "SW-01",
                type: "Switch",
                status: "متصل",
                ip: "192.168.10.2",
                info: "المنافذ الخاصة بأجهزة المستخدمين تظهر بحالة Up."
            },
            {
                id: "router01",
                icon: "🟠",
                name: "R-01",
                type: "Router",
                status: "متصل",
                ip: "192.168.10.1",
                info: "واجهة الشبكة المحلية Up والبوابة تستجيب."
            },
            {
                id: "server01",
                icon: "🖥️",
                name: "SERVER",
                type: "Server",
                status: "لا يستجيب",
                ip: "192.168.20.10",
                info: "الجهاز ظاهر في الشبكة ولكن الخدمة لا تستجيب."
            }
        ],

        evidence: [
            {
                id: "e1",
                title: "حالة السيرفر",
                text: "السيرفر موجود في الشبكة لكن الخدمة المطلوبة لا تستجيب.",
                requiredDevice: "server01"
            },
            {
                id: "e2",
                title: "اختبار البوابة",
                text: "الأجهزة تستطيع الوصول إلى البوابة الافتراضية.",
                requiredDevice: "router01"
            },
            {
                id: "e3",
                title: "حالة السويتش",
                text: "منافذ المستخدمين على SW-01 تعمل بصورة طبيعية.",
                requiredDevice: "switch01"
            },
            {
                id: "e4",
                title: "اختبار جهاز مستخدم",
                text: "PC-01 لديه اتصال شبكي طبيعي.",
                requiredDevice: "pc01"
            }
        ],

        events: [
            {
                time: "09:41",
                text: "تم تسجيل آخر اتصال ناجح بالخدمة."
            },
            {
                time: "09:43",
                text: "بدأت طلبات الخدمة بالفشل."
            },
            {
                time: "09:45",
                text: "أجهزة المستخدمين ما زالت متصلة بالشبكة."
            }
        ],

        hypotheses: [
            {
                id: "h1",
                title: "مشكلة في شبكة المستخدمين",
                description: "قد تكون المشكلة في شبكة الوصول."
            },
            {
                id: "h2",
                title: "مشكلة في البوابة",
                description: "قد تكون المشكلة في Router أو Gateway."
            },
            {
                id: "h3",
                title: "المشكلة مرتبطة بالسيرفر أو خدمته",
                description: "قد تكون المشكلة محصورة في السيرفر."
            }
        ],

        correctHypothesis: "h3",

        conclusion: "الأدلة تشير إلى أن الاتصال الأساسي بالشبكة يعمل، بينما المشكلة مرتبطة بالسيرفر أو الخدمة الموجودة عليه.",

        report: "تم تحديد نطاق المشكلة إلى السيرفر أو الخدمة التي يقدمها، بينما بقية مكونات الشبكة الأساسية تستجيب بشكل طبيعي."
    },

    {
        id: 2,
        icon: "👤",
        title: "جهاز غريب ظهر",
        description: "ظهر جهاز غير معروف داخل الشبكة ولا توجد معلومات واضحة عن صاحبه.",
        story: "لاحظ فريق الشبكات عنوان MAC جديدًا في أحد منافذ السويتش. الجهاز ليس ضمن الأجهزة المسجلة في الموقع.",
        xp: 120,

        devices: [
            {
                id: "switch02",
                icon: "🔵",
                name: "SW-02",
                type: "Access Switch",
                status: "متصل",
                ip: "192.168.30.2",
                info: "السويتش سجل عنوان MAC جديدًا على أحد منافذه."
            },
            {
                id: "pc03",
                icon: "💻",
                name: "PC-03",
                type: "جهاز معروف",
                status: "متصل",
                ip: "192.168.30.21",
                info: "الجهاز مسجل ضمن أصول الشركة."
            },
            {
                id: "unknown",
                icon: "❓",
                name: "UNKNOWN",
                type: "جهاز غير معروف",
                status: "موجود",
                ip: "192.168.30.55",
                info: "الجهاز غير موجود في قائمة الأصول."
            }
        ],

        evidence: [
            {
                id: "e1",
                title: "عنوان MAC جديد",
                text: "ظهر عنوان MAC لم يكن موجودًا في السجلات السابقة.",
                requiredDevice: "switch02"
            },
            {
                id: "e2",
                title: "IP غير مسجل",
                text: "العنوان 192.168.30.55 غير موجود في قائمة الأجهزة المعروفة.",
                requiredDevice: "unknown"
            },
            {
                id: "e3",
                title: "الجهاز معروف",
                text: "PC-03 موجود ضمن قائمة أصول الشركة.",
                requiredDevice: "pc03"
            }
        ],

        events: [
            {
                time: "11:10",
                text: "تم تسجيل جهاز جديد على SW-02."
            },
            {
                time: "11:13",
                text: "الجهاز حصل على عنوان IP."
            },
            {
                time: "11:15",
                text: "تم فتح بلاغ للتحقيق في الجهاز."
            }
        ],

        hypotheses: [
            {
                id: "h1",
                title: "جهاز جديد تابع للشركة",
                description: "قد يكون جهازًا تمت إضافته حديثًا."
            },
            {
                id: "h2",
                title: "جهاز غير معروف يحتاج إلى التحقق",
                description: "المعلومات الحالية لا تثبت هوية الجهاز."
            },
            {
                id: "h3",
                title: "عطل في السويتش",
                description: "قد تكون السجلات غير صحيحة."
            }
        ],

        correctHypothesis: "h2",

        conclusion: "وجود MAC وIP جديدين لا يكفي لإثبات وجود هجوم، لكنه يكفي لفتح تحقيق والتحقق من هوية الجهاز.",
        report: "تم تصنيف الحالة كجهاز غير معروف يحتاج إلى التحقق من المصدر والهوية."
    },

    {
        id: 3,
        icon: "🐢",
        title: "الشبكة أصبحت بطيئة",
        description: "المستخدمون يشتكون من بطء واضح في الوصول إلى الخدمات.",
        story: "خلال فترة قصيرة ارتفعت حركة البيانات في الشبكة، وبدأ المستخدمون يلاحظون بطئًا في التطبيقات.",
        xp: 140,

        devices: [
            {
                id: "core01",
                icon: "🔵",
                name: "CORE",
                type: "Core Switch",
                status: "مرتفع",
                ip: "10.0.0.2",
                info: "معدل المرور على أحد الروابط أعلى من المعتاد."
            },
            {
                id: "server02",
                icon: "🖥️",
                name: "SERVER",
                type: "Server",
                status: "متصل",
                ip: "10.0.20.10",
                info: "السيرفر يعمل لكنه يستقبل عددًا كبيرًا من الطلبات."
            },
            {
                id: "pc04",
                icon: "💻",
                name: "PC-04",
                type: "User",
                status: "بطيء",
                ip: "10.0.10.44",
                info: "المستخدم أبلغ عن بطء في التطبيقات."
            }
        ],

        evidence: [
            {
                id: "e1",
                title: "ارتفاع المرور",
                text: "أحد روابط الـCore يشهد معدل مرور أعلى من المعتاد.",
                requiredDevice: "core01"
            },
            {
                id: "e2",
                title: "طلبات كثيرة",
                text: "السيرفر يستقبل عددًا كبيرًا من الطلبات.",
                requiredDevice: "server02"
            },
            {
                id: "e3",
                title: "شكوى المستخدم",
                text: "PC-04 يعاني من بطء في التطبيقات.",
                requiredDevice: "pc04"
            }
        ],

        events: [
            {
                time: "13:20",
                text: "بدأ ارتفاع حركة البيانات."
            },
            {
                time: "13:25",
                text: "ظهرت شكاوى من البطء."
            },
            {
                time: "13:29",
                text: "ارتفع استخدام أحد الروابط."
            }
        ],

        hypotheses: [
            {
                id: "h1",
                title: "مشكلة في جهاز مستخدم واحد",
                description: "المشكلة محصورة في PC واحد."
            },
            {
                id: "h2",
                title: "ارتفاع غير طبيعي في حركة البيانات",
                description: "قد تكون هناك Traffic Spike."
            },
            {
                id: "h3",
                title: "انقطاع كامل في الشبكة",
                description: "الشبكة الرئيسية متوقفة بالكامل."
            }
        ],

        correctHypothesis: "h2",

        conclusion: "الأدلة تظهر ارتفاعًا في حركة البيانات تزامن مع بداية البطء.",
        report: "تم تحديد Traffic Spike كعامل مرتبط بتدهور أداء الشبكة."
    },

    {
        id: 4,
        icon: "🌐",
        title: "موقع داخلي لا يفتح",
        description: "المستخدمون يستطيعون الوصول للشبكة لكن الموقع الداخلي لا يفتح باسمه.",
        story: "أبلغ الموظفون أن الموقع الداخلي لا يفتح باستخدام الاسم، بينما بعض الاتصالات الأخرى تعمل.",
        xp: 160,

        devices: [
            {
                id: "dns01",
                icon: "🌐",
                name: "DNS",
                type: "DNS Server",
                status: "يحتاج فحص",
                ip: "10.20.0.53",
                info: "يتم استخدامه لتحويل أسماء المواقع إلى عناوين IP."
            },
            {
                id: "pc05",
                icon: "💻",
                name: "PC-05",
                type: "User",
                status: "متصل",
                ip: "10.20.10.25",
                info: "الاتصال بالشبكة يعمل."
            },
            {
                id: "web01",
                icon: "🖥️",
                name: "WEB-01",
                type: "Web Server",
                status: "يعمل",
                ip: "10.20.20.10",
                info: "الخدمة تعمل عند الوصول إليها مباشرة بعنوان IP."
            }
        ],

        evidence: [
            {
                id: "e1",
                title: "الوصول بالـIP",
                text: "الخدمة تعمل عند استخدام عنوان IP مباشرة.",
                requiredDevice: "web01"
            },
            {
                id: "e2",
                title: "مشكلة الاسم",
                text: "الوصول باستخدام اسم الموقع لا يعمل.",
                requiredDevice: "dns01"
            },
            {
                id: "e3",
                title: "اتصال المستخدم",
                text: "PC-05 متصل بالشبكة.",
                requiredDevice: "pc05"
            }
        ],

        events: [
            {
                time: "14:02",
                text: "تم تسجيل أول بلاغ عن الموقع."
            },
            {
                time: "14:04",
                text: "تم اختبار الوصول بالاسم وفشل."
            },
            {
                time: "14:06",
                text: "تم اختبار الوصول بالـIP ونجح."
            }
        ],

        hypotheses: [
            {
                id: "h1",
                title: "السيرفر متوقف",
                description: "قد تكون خدمة الويب متوقفة."
            },
            {
                id: "h2",
                title: "مشكلة في DNS",
                description: "قد تكون المشكلة في تحويل الاسم."
            },
            {
                id: "h3",
                title: "مشكلة في جهاز المستخدم",
                description: "قد يكون الخلل محليًا."
            }
        ],

        correctHypothesis: "h2",

        conclusion: "نجاح الوصول باستخدام IP مع فشل الاسم يشير إلى مشكلة مرتبطة بخدمة DNS.",
        report: "تم حصر المشكلة في عملية حل الاسم وليس في خدمة الويب نفسها."
    },

    {
        id: 5,
        icon: "📡",
        title: "بعض الأجهزة فقدت الاتصال",
        description: "عدة أجهزة فقدت عناوينها أو لم تعد تستطيع التواصل.",
        story: "لاحظ فريق الدعم أن بعض الأجهزة تعمل، بينما أجهزة أخرى فقدت الاتصال بعد إعادة تشغيلها.",
        xp: 180,

        devices: [
            {
                id: "dhcp01",
                icon: "🌐",
                name: "DHCP",
                type: "DHCP Server",
                status: "يحتاج فحص",
                ip: "10.30.0.5",
                info: "مسؤول عن توزيع عناوين IP للأجهزة."
            },
            {
                id: "pc06",
                icon: "💻",
                name: "PC-06",
                type: "User",
                status: "بدون IP",
                ip: "169.254.20.5",
                info: "الجهاز لم يحصل على عنوان من DHCP."
            },
            {
                id: "pc07",
                icon: "💻",
                name: "PC-07",
                type: "User",
                status: "متصل",
                ip: "10.30.10.27",
                info: "الجهاز لديه عنوان صحيح."
            }
        ],

        evidence: [
            {
                id: "e1",
                title: "عنوان APIPA",
                text: "PC-06 حصل على عنوان يبدأ بـ169.254، ما يعني أنه لم يحصل على عنوان DHCP.",
                requiredDevice: "pc06"
            },
            {
                id: "e2",
                title: "DHCP",
                text: "خدمة توزيع العناوين تحتاج إلى الفحص.",
                requiredDevice: "dhcp01"
            },
            {
                id: "e3",
                title: "جهاز آخر يعمل",
                text: "PC-07 لديه عنوان صحيح ويعمل.",
                requiredDevice: "pc07"
            }
        ],

        events: [
            {
                time: "15:11",
                text: "تمت إعادة تشغيل عدة أجهزة."
            },
            {
                time: "15:13",
                text: "بعض الأجهزة لم تحصل على IP."
            },
            {
                time: "15:16",
                text: "أجهزة أخرى بقيت متصلة."
            }
        ],

        hypotheses: [
            {
                id: "h1",
                title: "انقطاع كامل في الشبكة",
                description: "كل الأجهزة يجب أن تكون متوقفة."
            },
            {
                id: "h2",
                title: "مشكلة في DHCP أو نطاق التوزيع",
                description: "بعض الأجهزة لا تحصل على IP."
            },
            {
                id: "h3",
                title: "مشكلة في DNS",
                description: "DNS لا يفسر فقدان IP."
            }
        ],

        correctHypothesis: "h2",

        conclusion: "الأجهزة التي لا تحصل على IP تشير إلى مشكلة في DHCP أو نطاق توزيع العناوين.",
        report: "تم تحديد المشكلة في عملية الحصول على عنوان IP وليس في الشبكة بالكامل."
    },

    {
        id: 6,
        icon: "🔀",
        title: "قسم كامل فقد الاتصال",
        description: "قسم كامل من المبنى فقد الوصول إلى الشبكة بينما الأقسام الأخرى تعمل.",
        story: "بدأ البلاغ من قسم واحد فقط. الأجهزة في الأقسام الأخرى تعمل بشكل طبيعي.",
        xp: 200,

        devices: [
            {
                id: "access06",
                icon: "🔵",
                name: "SW-ACCESS",
                type: "Access Switch",
                status: "متصل",
                ip: "10.40.10.2",
                info: "السويتش يعمل لكن يجب فحص VLAN والـuplink."
            },
            {
                id: "core06",
                icon: "🔷",
                name: "CORE",
                type: "Core Switch",
                status: "متصل",
                ip: "10.40.0.2",
                info: "بقية الأقسام ما زالت متصلة."
            },
            {
                id: "pc08",
                icon: "💻",
                name: "PC-08",
                type: "User",
                status: "منقطع",
                ip: "10.40.10.28",
                info: "الجهاز ضمن القسم المتأثر."
            }
        ],

        evidence: [
            {
                id: "e1",
                title: "القسم المتأثر",
                text: "جميع الأجهزة في VLAN القسم فقدت الاتصال.",
                requiredDevice: "pc08"
            },
            {
                id: "e2",
                title: "بقية الأقسام",
                text: "الأقسام الأخرى تعمل بشكل طبيعي.",
                requiredDevice: "core06"
            },
            {
                id: "e3",
                title: "مسار الـUplink",
                text: "يجب التحقق من VLAN والـTrunk بين Access وCore.",
                requiredDevice: "access06"
            }
        ],

        events: [
            {
                time: "16:30",
                text: "بدأ البلاغ من قسم واحد."
            },
            {
                time: "16:33",
                text: "تم التأكد أن الأقسام الأخرى تعمل."
            },
            {
                time: "16:37",
                text: "بدأ فحص VLAN والـTrunk."
            }
        ],

        hypotheses: [
            {
                id: "h1",
                title: "مشكلة في جميع الشبكة",
                description: "لكن بقية الأقسام تعمل."
            },
            {
                id: "h2",
                title: "مشكلة VLAN أو Trunk",
                description: "القسم المتأثر معزول عن بقية الشبكة."
            },
            {
                id: "h3",
                title: "مشكلة في DNS",
                description: "DNS لا يفسر فقدان الاتصال الكامل للقسم."
            }
        ],

        correctHypothesis: "h2",

        conclusion: "تأثر قسم كامل مع استمرار الأقسام الأخرى يشير إلى VLAN أو Trunk أو المسار المرتبط بالقسم.",
        report: "تم حصر نطاق التحقيق في طبقة الوصول وVLAN والـTrunk."
    },

    {
        id: 7,
        icon: "🛣️",
        title: "المسار تغير",
        description: "الخدمة أصبحت تصل عبر مسار مختلف عن المسار المعتاد.",
        story: "لاحظ الفريق أن حركة المرور إلى شبكة بعيدة أصبحت تمر عبر Next-Hop مختلف.",
        xp: 220,

        devices: [
            {
                id: "router07",
                icon: "🟠",
                name: "R-EDGE",
                type: "Router",
                status: "متصل",
                ip: "10.50.0.1",
                info: "يوجد أكثر من مسار محتمل للشبكة البعيدة."
            },
            {
                id: "router08",
                icon: "🟠",
                name: "R-BACKUP",
                type: "Router",
                status: "متصل",
                ip: "10.50.0.2",
                info: "يمكن استخدامه كمسار احتياطي."
            },
            {
                id: "server07",
                icon: "🖥️",
                name: "REMOTE",
                type: "Remote Server",
                status: "متصل",
                ip: "10.60.0.10",
                info: "الخدمة متاحة لكن عبر مسار مختلف."
            }
        ],

        evidence: [
            {
                id: "e1",
                title: "Next-Hop مختلف",
                text: "المسار الحالي يستخدم Next-Hop مختلفًا عن المسار المعتاد.",
                requiredDevice: "router07"
            },
            {
                id: "e2",
                title: "المسار الاحتياطي",
                text: "R-BACKUP متاح ويمكن أن يكون المسار المستخدم.",
                requiredDevice: "router08"
            },
            {
                id: "e3",
                title: "الخدمة متاحة",
                text: "الخادم البعيد يعمل ويمكن الوصول إليه.",
                requiredDevice: "server07"
            }
        ],

        events: [
            {
                time: "17:12",
                text: "تم تسجيل تغير في المسار."
            },
            {
                time: "17:15",
                text: "أصبح Next-Hop مختلفًا."
            },
            {
                time: "17:18",
                text: "الخدمة بقيت متاحة."
            }
        ],

        hypotheses: [
            {
                id: "h1",
                title: "السيرفر متوقف",
                description: "لكن الخدمة ما زالت متاحة."
            },
            {
                id: "h2",
                title: "تم استخدام مسار مختلف",
                description: "قد يكون بسبب Routing أو مسار احتياطي."
            },
            {
                id: "h3",
                title: "مشكلة DNS",
                description: "الخدمة متاحة والمسار هو المختلف."
            }
        ],

        correctHypothesis: "h2",

        conclusion: "الأدلة تشير إلى تغير في مسار التوجيه وليس إلى توقف الخدمة.",
        report: "تم تحديد تغير في Routing أو استخدام مسار احتياطي."
    },

    {
        id: 8,
        icon: "🏢",
        title: "فرع كامل خارج الخدمة",
        description: "فرع كامل فقد الوصول إلى الشبكات الموجودة في المقر الرئيسي.",
        story: "أجهزة الفرع تعمل محليًا، لكن لا تستطيع الوصول إلى الموارد الموجودة في المقر.",
        xp: 240,

        devices: [
            {
                id: "branch-router",
                icon: "🟠",
                name: "BR-RTR",
                type: "Branch Router",
                status: "متصل",
                ip: "10.70.0.1",
                info: "الفرع يعمل محليًا لكن الوصول للشبكات البعيدة يحتاج فحص."
            },
            {
                id: "hq-router",
                icon: "🟠",
                name: "HQ-RTR",
                type: "HQ Router",
                status: "متصل",
                ip: "10.80.0.1",
                info: "راوتر المقر الرئيسي يعمل."
            },
            {
                id: "branch-pc",
                icon: "💻",
                name: "BR-PC",
                type: "Branch PC",
                status: "متصل",
                ip: "10.70.10.20",
                info: "يمكن الوصول إلى موارد الفرع المحلية."
            }
        ],

        evidence: [
            {
                id: "e1",
                title: "الشبكة المحلية تعمل",
                text: "أجهزة الفرع تستطيع الوصول إلى الموارد المحلية.",
                requiredDevice: "branch-pc"
            },
            {
                id: "e2",
                title: "الـGateway يستجيب",
                text: "راوتر الفرع متصل ويستجيب محليًا.",
                requiredDevice: "branch-router"
            },
            {
                id: "e3",
                title: "الشبكة البعيدة غير متاحة",
                text: "الوصول إلى شبكة المقر يفشل.",
                requiredDevice: "hq-router"
            }
        ],

        events: [
            {
                time: "08:20",
                text: "بدأت المشكلة في الفرع."
            },
            {
                time: "08:24",
                text: "الموارد المحلية بقيت متاحة."
            },
            {
                time: "08:27",
                text: "فشل الوصول إلى شبكة المقر."
            }
        ],

        hypotheses: [
            {
                id: "h1",
                title: "مشكلة في أجهزة الفرع",
                description: "لكن الموارد المحلية تعمل."
            },
            {
                id: "h2",
                title: "مشكلة في Static Route أو المسار بين المواقع",
                description: "الشبكة المحلية تعمل والبعيدة لا تعمل."
            },
            {
                id: "h3",
                title: "مشكلة في DNS فقط",
                description: "المشكلة تشمل الوصول للشبكة البعيدة."
            }
        ],

        correctHypothesis: "h2",

        conclusion: "عمل الشبكة المحلية وفشل الوصول إلى الشبكة البعيدة يشير إلى Routing بين الفرع والمقر.",
        report: "تم تحديد نطاق التحقيق في المسار بين المواقع والـStatic Routes."
    },

    {
        id: 9,
        icon: "🚨",
        title: "حركة غير طبيعية",
        description: "تم تسجيل نمط حركة غير معتاد داخل الشبكة ويحتاج إلى تحليل.",
        story: "لاحظ النظام ارتفاعًا مفاجئًا في عدد الاتصالات من جهاز واحد إلى عدة أجهزة.",
        xp: 280,

        devices: [
            {
                id: "security09",
                icon: "🛡️",
                name: "SECURITY",
                type: "Security Monitor",
                status: "تنبيه",
                ip: "10.90.0.5",
                info: "تم تسجيل نمط اتصالات غير معتاد."
            },
            {
                id: "pc09",
                icon: "💻",
                name: "PC-09",
                type: "User Device",
                status: "يحتاج فحص",
                ip: "10.90.10.90",
                info: "الجهاز مصدر عدد كبير من الاتصالات."
            },
            {
                id: "server09",
                icon: "🖥️",
                name: "SERVERS",
                type: "Server Segment",
                status: "متصل",
                ip: "10.90.20.0",
                info: "عدة خوادم استقبلت اتصالات من الجهاز."
            }
        ],

        evidence: [
            {
                id: "e1",
                title: "تنبيه أمني",
                text: "نظام المراقبة سجل نمط حركة غير معتاد.",
                requiredDevice: "security09"
            },
            {
                id: "e2",
                title: "مصدر واحد",
                text: "PC-09 ظهر كمصدر لعدد كبير من الاتصالات.",
                requiredDevice: "pc09"
            },
            {
                id: "e3",
                title: "عدة أهداف",
                text: "الاتصالات شملت أكثر من جهاز داخل قطاع الخوادم.",
                requiredDevice: "server09"
            }
        ],

        events: [
            {
                time: "10:41",
                text: "تم تسجيل ارتفاع في الاتصالات."
            },
            {
                time: "10:43",
                text: "ظهر PC-09 كمصدر للحركة."
            },
            {
                time: "10:45",
                text: "تم إنشاء تنبيه أمني."
            }
        ],

        hypotheses: [
            {
                id: "h1",
                title: "استخدام طبيعي للجهاز",
                description: "قد يكون نشاطًا مشروعًا."
            },
            {
                id: "h2",
                title: "سلوك غير معتاد يحتاج إلى تصعيد للتحقيق",
                description: "النمط يحتاج إلى تحليل أمني إضافي."
            },
            {
                id: "h3",
                title: "عطل في السويتش",
                description: "لا يفسر نمط الاتصالات من جهاز واحد."
            }
        ],

        correctHypothesis: "h2",

        conclusion: "النمط غير المعتاد يستدعي مزيدًا من التحليل والتصعيد لفريق الأمن، دون افتراض سبب نهائي من هذه الأدلة وحدها.",
        report: "تم تصنيف الحالة كسلوك غير معتاد يحتاج إلى تحليل أمني إضافي."
    },

    {
        id: 10,
        icon: "🧩",
        title: "القضية الكبرى",
        description: "عدة أحداث وقعت معًا، والمطلوب ربط الأدلة للوصول إلى الصورة الكاملة.",
        story: "بدأت المشكلة ببطء في الشبكة، ثم ظهرت أجهزة متأثرة، وبعدها تغير أحد المسارات. لديك عدة أدلة ويجب ربطها.",
        xp: 400,

        devices: [
            {
                id: "core10",
                icon: "🔷",
                name: "CORE",
                type: "Core Switch",
                status: "متصل",
                ip: "10.100.0.2",
                info: "تم تسجيل تغيير في أحد روابط Layer 2."
            },
            {
                id: "router10",
                icon: "🟠",
                name: "ROUTER",
                type: "Router",
                status: "متصل",
                ip: "10.100.0.1",
                info: "حدث تغيير في أحد مسارات Layer 3."
            },
            {
                id: "server10",
                icon: "🖥️",
                name: "SERVER",
                type: "Server",
                status: "متأثر",
                ip: "10.110.0.10",
                info: "الخدمة تأثرت خلال فترة التغييرات."
            },
            {
                id: "pc10",
                icon: "💻",
                name: "PC-10",
                type: "User",
                status: "بطيء",
                ip: "10.100.10.10",
                info: "المستخدم لاحظ بطئًا أثناء الحادثة."
            }
        ],

        evidence: [
            {
                id: "e1",
                title: "تغيير Layer 2",
                text: "تم تسجيل تغيير على مستوى السويتش.",
                requiredDevice: "core10"
            },
            {
                id: "e2",
                title: "تغيير Layer 3",
                text: "تم تسجيل تغير في مسار التوجيه.",
                requiredDevice: "router10"
            },
            {
                id: "e3",
                title: "تأثر الخدمة",
                text: "الخدمة تأثرت أثناء فترة التغييرات.",
                requiredDevice: "server10"
            },
            {
                id: "e4",
                title: "شكوى المستخدم",
                text: "ظهر بطء لدى المستخدمين أثناء الحادثة.",
                requiredDevice: "pc10"
            }
        ],

        events: [
            {
                time: "18:00",
                text: "بدأ تسجيل تغير في Layer 2."
            },
            {
                time: "18:03",
                text: "ظهر تغير في Layer 3."
            },
            {
                time: "18:06",
                text: "بدأت الخدمة بالتأثر."
            },
            {
                time: "18:08",
                text: "ظهرت شكاوى المستخدمين."
            }
        ],

        hypotheses: [
            {
                id: "h1",
                title: "مشكلة جهاز مستخدم واحد",
                description: "لا تفسر جميع الأحداث."
            },
            {
                id: "h2",
                title: "مشكلة DNS فقط",
                description: "لا تفسر تغيرات Layer 2 وLayer 3."
            },
            {
                id: "h3",
                title: "سلسلة تغييرات أثرت على Layer 2 وLayer 3",
                description: "تربط بين أحداث السويتش والراوتر وتأثر الخدمة."
            }
        ],

        correctHypothesis: "h3",

        conclusion: "ترابط توقيت تغييرات Layer 2 وLayer 3 مع تأثر الخدمة يشير إلى سلسلة تغييرات في الشبكة تحتاج إلى مراجعة كاملة.",
        report: "تم ربط الأدلة زمنيًا وتحديد سلسلة تغييرات في طبقات الشبكة أثرت على الخدمة."
    }

];


/* =========================================
   STATE
========================================= */

var state = {
    solved: [],
    currentCase: null,
    inspectedDevices: {},
    collectedEvidence: {},
    selectedHypothesis: null,
    selectedEvidence: [],
    notes: ""
};


/* =========================================
   HELPERS
========================================= */

function getProgress() {
    try {
        var saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return {
                solved: [],
                xp: 0
            };
        }

        var parsed = JSON.parse(saved);

        if (!parsed || typeof parsed !== "object") {
            return {
                solved: [],
                xp: 0
            };
        }

        return {
            solved: Array.isArray(parsed.solved) ? parsed.solved : [],
            xp: Number(parsed.xp) || 0
        };

    } catch (error) {

        return {
            solved: [],
            xp: 0
        };
    }
}


function saveProgress() {

    var data = {
        solved: state.solved,
        xp: calculateXP()
    };

    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(data)
        );
    } catch (error) {
        console.log("Could not save progress.");
    }
}


function calculateXP() {

    var total = 0;

    for (var i = 0; i < cases.length; i++) {

        if (state.solved.indexOf(cases[i].id) !== -1) {
            total += cases[i].xp;
        }
    }

    return total;
}


function getLevel(xp) {

    if (xp >= 1400) {
        return 4;
    }

    if (xp >= 800) {
        return 3;
    }

    if (xp >= 400) {
        return 2;
    }

    return 1;
}


function getLevelName(level) {

    if (level === 4) {
        return "كبير محققي الشبكات";
    }

    if (level === 3) {
        return "محقق شبكات متقدم";
    }

    if (level === 2) {
        return "محقق شبكات";
    }

    return "مبتدئ";
}


function getCaseById(id) {

    for (var i = 0; i < cases.length; i++) {

        if (cases[i].id === id) {
            return cases[i];
        }
    }

    return null;
}


function escapeHTML(value) {

    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================
   UI REFERENCES
========================================= */

var casesGrid = document.getElementById("casesGrid");
var investigationSection = document.getElementById("investigationSection");

var currentCaseNumber = document.getElementById("currentCaseNumber");
var currentCaseIcon = document.getElementById("currentCaseIcon");
var currentCaseTitle = document.getElementById("currentCaseTitle");
var currentCaseStory = document.getElementById("currentCaseStory");

var networkMap = document.getElementById("networkMap");
var deviceDetails = document.getElementById("deviceDetails");

var evidenceGrid = document.getElementById("evidenceGrid");
var evidenceCount = document.getElementById("evidenceCount");

var eventsTimeline = document.getElementById("eventsTimeline");

var hypotheses = document.getElementById("hypotheses");
var selectedEvidence = document.getElementById("selectedEvidence");

var detectiveNotes = document.getElementById("detectiveNotes");

var submitConclusion = document.getElementById("submitConclusion");

var resultPanel = document.getElementById("resultPanel");
var resultIcon = document.getElementById("resultIcon");
var resultTitle = document.getElementById("resultTitle");
var resultText = document.getElementById("resultText");
var resultXP = document.getElementById("resultXP");

var retryCase = document.getElementById("retryCase");
var nextCase = document.getElementById("nextCase");

var backToCases = document.getElementById("backToCases");

var detectiveLevel = document.getElementById("detectiveLevel");
var detectiveXP = document.getElementById("detectiveXP");
var solvedCases = document.getElementById("solvedCases");

var progressText = document.getElementById("progressText");
var progressFill = document.getElementById("progressFill");


/* =========================================
   DASHBOARD
========================================= */

function updateDashboard() {

    var xp = calculateXP();
    var level = getLevel(xp);

    if (detectiveLevel) {
        detectiveLevel.textContent = level;
    }

    if (detectiveXP) {
        detectiveXP.textContent = xp;
    }

    if (solvedCases) {
        solvedCases.textContent = state.solved.length;
    }

    if (progressText) {
        progressText.textContent =
            state.solved.length + " / " + cases.length;
    }

    if (progressFill) {

        var percentage =
            (state.solved.length / cases.length) * 100;

        progressFill.style.width =
            percentage + "%";
    }
}


/* =========================================
   CASE LIST
========================================= */

function renderCases() {

    if (!casesGrid) {
        return;
    }

    casesGrid.innerHTML = "";

    for (var i = 0; i < cases.length; i++) {

        var caseItem = cases[i];

        var solved =
            state.solved.indexOf(caseItem.id) !== -1;

        var unlocked =
            caseItem.id === 1 ||
            state.solved.indexOf(caseItem.id - 1) !== -1;

        var card = document.createElement("article");

        card.className = "case-card";

        if (!unlocked) {
            card.classList.add("locked");
        }

        if (solved) {
            card.classList.add("solved");
        }

        var statusText = "";

        if (solved) {
            statusText = "✓ تم التحقيق";
        } else if (unlocked) {
            statusText = "متاح للتحقيق";
        } else {
            statusText = "🔒 مقفلة";
        }

        card.innerHTML =
            '<div class="case-number">' +
                String(caseItem.id).padStart(2, "0") +
            '</div>' +

            '<div class="case-icon">' +
                escapeHTML(caseItem.icon) +
            '</div>' +

            '<h3 class="case-title">' +
                escapeHTML(caseItem.title) +
            '</h3>' +

            '<p class="case-description">' +
                escapeHTML(caseItem.description) +
            '</p>' +

            '<div class="case-status">' +

                '<span>' +
                    statusText +
                '</span>' +

                '<button class="case-button" type="button">' +
                    (
                        solved
                        ? "عرض القضية"
                        : unlocked
                        ? "ابدأ التحقيق"
                        : "مقفلة"
                    ) +
                '</button>' +

            '</div>';

        var button =
            card.querySelector(".case-button");

        if (unlocked) {

            button.addEventListener(
                "click",
                function (selectedCase) {

                    return function () {
                        openCase(selectedCase.id);
                    };

                }(caseItem)
            );

        } else {

            button.disabled = true;
        }

        casesGrid.appendChild(card);
    }
}


/* =========================================
   OPEN CASE
========================================= */

function openCase(caseId) {

    var caseItem = getCaseById(caseId);

    if (!caseItem) {
        return;
    }

    var unlocked =
        caseItem.id === 1 ||
        state.solved.indexOf(caseItem.id - 1) !== -1;

    if (!unlocked) {
        return;
    }

    state.currentCase = caseItem;
    state.inspectedDevices = {};
    state.collectedEvidence = {};
    state.selectedHypothesis = null;
    state.selectedEvidence = [];

    loadNotes(caseItem.id);

    investigationSection.classList.remove("hidden");

    resultPanel.classList.add("hidden");

    currentCaseNumber.textContent =
        "القضية " +
        String(caseItem.id).padStart(2, "0");

    currentCaseIcon.textContent =
        caseItem.icon;

    currentCaseTitle.textContent =
        caseItem.title;

    currentCaseStory.textContent =
        caseItem.story;

    renderNetwork();
    renderEvidence();
    renderEvents();
    renderHypotheses();
    renderSelectedEvidence();
    updateSubmitButton();

    investigationSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================
   NETWORK
========================================= */

function renderNetwork() {

    if (!networkMap || !state.currentCase) {
        return;
    }

    networkMap.innerHTML = "";

    var devices =
        state.currentCase.devices;

    for (var i = 0; i < devices.length; i++) {

        var device = devices[i];

        var node =
            document.createElement("button");

        node.type = "button";

        node.className =
            "network-node";

        node.innerHTML =
            '<span class="network-node-icon">' +
                escapeHTML(device.icon) +
            '</span>' +

            '<span class="network-node-name">' +
                escapeHTML(device.name) +
            '</span>';

        node.addEventListener(
            "click",
            function (selectedDevice) {

                return function () {
                    inspectDevice(selectedDevice.id);
                };

            }(device)
        );

        networkMap.appendChild(node);

        if (i < devices.length - 1) {

            var line =
                document.createElement("div");

            line.className =
                "network-line";

            networkMap.appendChild(line);
        }
    }
}


/* =========================================
   DEVICE INSPECTION
========================================= */

function inspectDevice(deviceId) {

    if (!state.currentCase) {
        return;
    }

    var device = null;

    for (
        var i = 0;
        i < state.currentCase.devices.length;
        i++
    ) {

        if (
            state.currentCase.devices[i].id ===
            deviceId
        ) {

            device =
                state.currentCase.devices[i];

            break;
        }
    }

    if (!device) {
        return;
    }

    state.inspectedDevices[deviceId] = true;

    deviceDetails.classList.remove("hidden");

    deviceDetails.innerHTML =
        '<h4>' +
            escapeHTML(device.icon) +
            " " +
            escapeHTML(device.name) +
        '</h4>' +

        '<p><strong>النوع:</strong> ' +
            escapeHTML(device.type) +
        '</p>' +

        '<p><strong>الحالة:</strong> ' +
            escapeHTML(device.status) +
        '</p>' +

        '<p><strong>IP:</strong> ' +
            escapeHTML(device.ip) +
        '</p>' +

        '<p>' +
            escapeHTML(device.info) +
        '</p>';

    unlockEvidenceForDevice(deviceId);

    renderEvidence();

    deviceDetails.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}


/* =========================================
   EVIDENCE
========================================= */

function unlockEvidenceForDevice(deviceId) {

    if (!state.currentCase) {
        return;
    }

    for (
        var i = 0;
        i < state.currentCase.evidence.length;
        i++
    ) {

        var evidence =
            state.currentCase.evidence[i];

        if (
            evidence.requiredDevice ===
            deviceId
        ) {

            state.collectedEvidence[evidence.id] =
                true;
        }
    }
}


function renderEvidence() {

    if (!evidenceGrid || !state.currentCase) {
        return;
    }

    evidenceGrid.innerHTML = "";

    var collected = 0;

    for (
        var i = 0;
        i < state.currentCase.evidence.length;
        i++
    ) {

        var evidence =
            state.currentCase.evidence[i];

        var isCollected =
            state.collectedEvidence[evidence.id] === true;

        if (isCollected) {
            collected++;
        }

        var card =
            document.createElement("article");

        card.className =
            "evidence-card";

        if (!isCollected) {
            card.classList.add("locked");
        } else {
            card.classList.add("collected");
        }

        card.innerHTML =
            '<div class="evidence-title">' +
                (
                    isCollected
                    ? "🔎 " + escapeHTML(evidence.title)
                    : "🔒 دليل مخفي"
                ) +
            '</div>' +

            '<p class="evidence-text">' +
                (
                    isCollected
                    ? escapeHTML(evidence.text)
                    : "استكشف الجهاز المرتبط بهذا الدليل للكشف عنه."
                ) +
            '</p>' +

            '<div class="evidence-status">' +
                (
                    isCollected
                    ? "✓ تم جمع الدليل"
                    : "غير مكتشف"
                ) +
            '</div>';

        evidenceGrid.appendChild(card);
    }

    evidenceCount.textContent =
        collected +
        " / " +
        state.currentCase.evidence.length;

    renderSelectedEvidence();
}


/* =========================================
   EVENTS
========================================= */

function renderEvents() {

    if (!eventsTimeline || !state.currentCase) {
        return;
    }

    eventsTimeline.innerHTML = "";

    for (
        var i = 0;
        i < state.currentCase.events.length;
        i++
    ) {

        var eventItem =
            state.currentCase.events[i];

        var item =
            document.createElement("div");

        item.className =
            "timeline-item";

        item.innerHTML =
            '<div class="timeline-time">' +
                escapeHTML(eventItem.time) +
            '</div>' +

            '<div class="timeline-text">' +
                escapeHTML(eventItem.text) +
            '</div>';

        eventsTimeline.appendChild(item);
    }
}


/* =========================================
   HYPOTHESES
========================================= */

function renderHypotheses() {

    if (!hypotheses || !state.currentCase) {
        return;
    }

    hypotheses.innerHTML = "";

    for (
        var i = 0;
        i < state.currentCase.hypotheses.length;
        i++
    ) {

        var hypothesis =
            state.currentCase.hypotheses[i];

        var wrapper =
            document.createElement("label");

        wrapper.className =
            "hypothesis-option";

        wrapper.innerHTML =
            '<input type="radio" name="hypothesis" value="' +
                escapeHTML(hypothesis.id) +
            '">' +

            '<div>' +

                '<div class="hypothesis-title">' +
                    escapeHTML(hypothesis.title) +
                '</div>' +

                '<div class="hypothesis-description">' +
                    escapeHTML(hypothesis.description) +
                '</div>' +

            '</div>';

        var input =
            wrapper.querySelector("input");

        input.addEventListener(
            "change",
            function (selectedHypothesis) {

                return function () {

                    state.selectedHypothesis =
                        selectedHypothesis.id;

                    var all =
                        hypotheses.querySelectorAll(
                            ".hypothesis-option"
                        );

                    for (
                        var j = 0;
                        j < all.length;
                        j++
                    ) {

                        all[j].classList.remove(
                            "selected"
                        );
                    }

                    wrapper.classList.add(
                        "selected"
                    );

                    renderSelectedEvidence();

                    updateSubmitButton();
                };

            }(hypothesis)
        );

        hypotheses.appendChild(wrapper);
    }
}


/* =========================================
   SELECT SUPPORTING EVIDENCE
========================================= */

function renderSelectedEvidence() {

    if (
        !selectedEvidence ||
        !state.currentCase
    ) {
        return;
    }

    selectedEvidence.innerHTML = "";

    if (!state.selectedHypothesis) {

        selectedEvidence.innerHTML =
            '<div class="selected-evidence-title">' +
                "اختر الاستنتاج أولًا" +
            '</div>';

        return;
    }

    var collectedIds = [];

    for (
        var i = 0;
        i < state.currentCase.evidence.length;
        i++
    ) {

        var evidence =
            state.currentCase.evidence[i];

        if (
            state.collectedEvidence[evidence.id]
        ) {

            collectedIds.push(evidence.id);
        }
    }

    if (collectedIds.length === 0) {

        selectedEvidence.innerHTML =
            '<div class="selected-evidence-title">' +
                "اجمع الأدلة أولًا من خريطة الشبكة." +
            '</div>';

        return;
    }

    selectedEvidence.innerHTML =
        '<div class="selected-evidence-title">' +
            "اختر الأدلة التي تدعم استنتاجك:" +
        '</div>' +

        '<div class="evidence-select-list"></div>';

    var list =
        selectedEvidence.querySelector(
            ".evidence-select-list"
        );

    for (
        var j = 0;
        j < collectedIds.length;
        j++
    ) {

        var evidenceId =
            collectedIds[j];

        var evidenceItem = null;

        for (
            var k = 0;
            k < state.currentCase.evidence.length;
            k++
        ) {

            if (
                state.currentCase.evidence[k].id ===
                evidenceId
            ) {

                evidenceItem =
                    state.currentCase.evidence[k];

                break;
            }
        }

        if (!evidenceItem) {
            continue;
        }

        var button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "evidence-select";

        if (
            state.selectedEvidence.indexOf(
                evidenceId
            ) !== -1
        ) {

            button.classList.add("selected");
        }

        button.textContent =
            "🔎 " +
            evidenceItem.title;

        button.addEventListener(
            "click",
            function (id, btn) {

                return function () {

                    var index =
                        state.selectedEvidence.indexOf(
                            id
                        );

                    if (index === -1) {

                        state.selectedEvidence.push(
                            id
                        );

                        btn.classList.add(
                            "selected"
                        );

                    } else {

                        state.selectedEvidence.splice(
                            index,
                            1
                        );

                        btn.classList.remove(
                            "selected"
                        );
                    }

                    updateSubmitButton();
                };

            }(evidenceId, button)
        );

        list.appendChild(button);
    }
}


/* =========================================
   SUBMIT BUTTON
========================================= */

function updateSubmitButton() {

    if (!submitConclusion) {
        return;
    }

    var canSubmit =
        state.selectedHypothesis !== null &&
        state.selectedEvidence.length >= 2;

    submitConclusion.disabled =
        !canSubmit;
}


/* =========================================
   SAVE NOTES
========================================= */

function getNotesKey(caseId) {

    return "networkDetectiveNotes_" +
        String(caseId);
}


function loadNotes(caseId) {

    if (!detectiveNotes) {
        return;
    }

    try {

        detectiveNotes.value =
            localStorage.getItem(
                getNotesKey(caseId)
            ) || "";

    } catch (error) {

        detectiveNotes.value = "";
    }
}


if (detectiveNotes) {

    detectiveNotes.addEventListener(
        "input",
        function () {

            if (!state.currentCase) {
                return;
            }

            try {

                localStorage.setItem(
                    getNotesKey(
                        state.currentCase.id
                    ),
                    detectiveNotes.value
                );

            } catch (error) {
                console.log(
                    "Could not save notes."
                );
            }
        }
    );
}


/* =========================================
   FINAL CONCLUSION
========================================= */

if (submitConclusion) {

    submitConclusion.addEventListener(
        "click",
        function () {

            if (!state.currentCase) {
                return;
            }

            if (
                !state.selectedHypothesis ||
                state.selectedEvidence.length < 2
            ) {
                return;
            }

            var correct =
                state.selectedHypothesis ===
                state.currentCase.correctHypothesis;

            showResult(correct);
        }
    );
}


/* =========================================
   RESULT
========================================= */

function showResult(correct) {

    resultPanel.classList.remove("hidden");

    resultPanel.classList.remove(
        "result-success",
        "result-failure"
    );

    if (correct) {

        resultPanel.classList.add(
            "result-success"
        );

        resultIcon.textContent = "✅";

        resultTitle.textContent =
            "تم حل القضية";

        resultText.textContent =
            state.currentCase.conclusion;

        resultXP.textContent =
            "+" +
            state.currentCase.xp +
            " XP";

        if (
            state.solved.indexOf(
                state.currentCase.id
            ) === -1
        ) {

            state.solved.push(
                state.currentCase.id
            );

            saveProgress();
        }

        updateDashboard();
        renderCases();

        var next =
            getCaseById(
                state.currentCase.id + 1
            );

        if (next) {

            nextCase.classList.remove(
                "hidden"
            );

            nextCase.textContent =
                "القضية التالية →";

        } else {

            nextCase.classList.add(
                "hidden"
            );
        }

    } else {

        resultPanel.classList.add(
            "result-failure"
        );

        resultIcon.textContent = "🔍";

        resultTitle.textContent =
            "الاستنتاج يحتاج مراجعة";

        resultText.textContent =
            "الأدلة التي جمعتها لا تتطابق مع الاستنتاج المختار. راجع الأجهزة والأحداث ثم حاول مرة أخرى.";

        resultXP.textContent =
            "لم يتم احتساب XP";

        nextCase.classList.add(
            "hidden"
        );
    }

    resultPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================
   RETRY
========================================= */

if (retryCase) {

    retryCase.addEventListener(
        "click",
        function () {

            if (!state.currentCase) {
                return;
            }

            openCase(
                state.currentCase.id
            );
        }
    );
}


/* =========================================
   NEXT CASE
========================================= */

if (nextCase) {

    nextCase.addEventListener(
        "click",
        function () {

            if (!state.currentCase) {
                return;
            }

            var next =
                getCaseById(
                    state.currentCase.id + 1
                );

            if (!next) {
                return;
            }

            openCase(next.id);
        }
    );
}


/* =========================================
   BACK TO CASES
========================================= */

if (backToCases) {

    backToCases.addEventListener(
        "click",
        function () {

            investigationSection.classList.add(
                "hidden"
            );

            resultPanel.classList.add(
                "hidden"
            );

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}


/* =========================================
   INITIALIZE
========================================= */

function initializeDetective() {

    var saved =
        getProgress();

    state.solved =
        saved.solved;

    updateDashboard();
    renderCases();

    if (investigationSection) {
        investigationSection.classList.add(
            "hidden"
        );
    }

    if (resultPanel) {
        resultPanel.classList.add(
            "hidden"
        );
    }
}


initializeDetective();
