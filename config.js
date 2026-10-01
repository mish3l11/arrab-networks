/*
 * عرّاب الشبكات
 * Copyright (c) 2026 Mishal AL-Mishal
 * All Rights Reserved.
 *
 * يمنع نسخ أو إعادة استخدام أو إعادة توزيع هذا الملف
 * أو أي جزء جوهري منه دون إذن صاحب الحقوق.
 */

/* =====================================================
   عرّاب الشبكات - CONFIG.JS
   Filters + Copy Commands + Arabic / English
   ===================================================== */

(function () {

    "use strict";


    /* =====================================================
       LANGUAGE
       ===================================================== */

    function getConfigLanguage() {

        return window.ArrabnetLanguage?.get?.() === "en"
            ? "en"
            : "ar";

    }


    /* =====================================================
       PAGE TRANSLATIONS
       ===================================================== */

    const translations = {

        /* ================= NAVBAR ================= */

        "عرّاب الشبكات": "Arrab Networks",
        " الرئيسية": " Home",
        " الدروس": " Lessons",
        " المختبر": " Network Lab",
        " اختبر معلوماتك": " Test Your Knowledge",
        "القـاموس": "Dictionary",
        " أدوات العرّاب": "Network Tools",
        "CLI": "CLI",
        "👤 حسابي": "👤 My Account",


        /* ================= HERO ================= */

        "مرجع الأوامر":
            "Command Reference",

        "مرجع عملي لأوامر Cisco IOS و Huawei VRP، مرتبة حسب المهمة لتسهيل التعلم والعمل على الشبكات.":
            "A practical reference for Cisco IOS and Huawei VRP commands, organized by task for easier networking learning and daily work.",


        /* ================= TOOLBAR ================= */

        "الكل":
            "All",

        "🔵 Cisco":
            "🔵 Cisco",

        "🟢 Huawei":
            "🟢 Huawei",


        /* ================= SIDEBAR ================= */

        "أقسام الأوامر":
            "Command Sections",

        "01 — الإعداد الأساسي":
            "01 — Basic Configuration",

        "02 — VLAN":
            "02 — VLAN",

        "03 — Access Port":
            "03 — Access Port",

        "04 — Trunk":
            "04 — Trunk",

        "05 — Interface & Status":
            "05 — Interface & Status",

        "06 — Static Routing":
            "06 — Static Routing",

        "07 — OSPF":
            "07 — OSPF",

        "08 — STP":
            "08 — STP",

        "09 — Eth-Trunk":
            "09 — Eth-Trunk",

        "10 — DHCP":
            "10 — DHCP",

        "11 — SSH":
            "11 — SSH",

        "12 — ACL":
            "12 — ACL",

        "13 — Troubleshooting":
            "13 — Troubleshooting",

        "14 — Save":
            "14 — Save",

        "15 — System":
            "15 — System",

        "16 — Hardware":
            "16 — Hardware",

        "17 — Layer 3":
            "17 — Layer 3",

        "18 — Port Security":
            "18 — Port Security",

        "19 — STP Configuration":
            "19 — STP Configuration",

        "20 — VLAN Troubleshooting":
            "20 — VLAN Troubleshooting",


        /* ================= BASIC ================= */

        "الإعداد الأساسي":
            "Basic Configuration",

        "الدخول لوضع الإدارة":
            "Enter Privileged Mode",

        "الدخول لوضع النظام":
            "Enter System View",

        "تغيير اسم الجهاز":
            "Change Device Name",

        "عرض إصدار الجهاز":
            "Display Device Version",


        /* ================= VLAN ================= */

        "إنشاء VLAN":
            "Create VLAN",

        "عرض VLAN":
            "Display VLANs",

        "عرض VLAN محددة":
            "Display Specific VLAN",


        /* ================= ACCESS ================= */

        "وضع Access":
            "Access Mode",

        "تحويل المنفذ إلى Access لربطه عادةً بجهاز نهائي مثل كمبيوتر أو طابعة أو كاميرا.":
            "Configure the port as Access for connecting an end device such as a computer, printer, or camera.",

        "تحويل المنفذ إلى Access لربطه عادةً بجهاز نهائي.":
            "Configure the port as Access for connecting an end device.",

        "تحديد VLAN للمنفذ":
            "Assign VLAN to Port",

        "تشغيل المنفذ":
            "Enable Port",

        "إيقاف المنفذ":
            "Disable Port",

        "وصف المنفذ":
            "Port Description",

        "Voice VLAN":
            "Voice VLAN",

        "عرض حالة Access":
            "Display Access Status",

        "عرض VLAN والمنافذ":
            "Display VLAN and Ports",

        "Access Port يُستخدم عادةً للأجهزة النهائية. المنفذ يكون مرتبطًا عادةً بـ VLAN واحدة للبيانات، بينما يمكن استخدام Voice VLAN في بيئات الهواتف الشبكية.":
            "An Access Port is normally used for end devices. It is usually assigned to one data VLAN, while a Voice VLAN can be used in IP phone environments.",


        /* ================= TRUNK ================= */

        "وضع Trunk":
            "Trunk Mode",

        "تحويل المنفذ إلى Trunk لنقل أكثر من VLAN بين أجهزة الشبكة.":
            "Configure the port as a Trunk to carry multiple VLANs between network devices.",

        "تحويل المنفذ إلى Trunk لنقل عدة VLANs.":
            "Configure the port as a Trunk to carry multiple VLANs.",

        "السماح بـ VLANs":
            "Allow VLANs",

        "إضافة VLAN إلى Trunk":
            "Add VLAN to Trunk",

        "إزالة VLAN من Trunk":
            "Remove VLAN from Trunk",

        "السماح بكل VLANs":
            "Allow All VLANs",

        "Native VLAN":
            "Native VLAN",

        "PVID للـ Trunk":
            "Trunk PVID",

        "عرض Trunk":
            "Display Trunk",

        "Trunk يُستخدم عادةً بين السويتشات أو بين السويتش وأجهزة الشبكة التي تحتاج إلى تمرير عدة VLANs. يجب التأكد من أن الـ VLANs المطلوبة مسموح بمرورها على الطرفين.":
            "A Trunk is normally used between switches or between a switch and network devices that need to carry multiple VLANs. Make sure the required VLANs are allowed on both sides.",


        /* ================= INTERFACE ================= */

        "حالة Interface":
            "Interface Status",

        "وصف المنافذ":
            "Interface Descriptions",

        "أخطاء المنافذ":
            "Interface Errors",

        "Transceiver":
            "Transceiver",


        /* ================= ROUTING ================= */

        "Static Route":
            "Static Route",

        "عرض Static Routes":
            "Display Static Routes",


        /* ================= OSPF ================= */

        "تشغيل OSPF":
            "Enable OSPF",

        "عرض الجيران":
            "Display Neighbors",

        "OSPF Interface":
            "OSPF Interface",

        "عرض OSPF Routes":
            "Display OSPF Routes",


        /* ================= STP ================= */

        "عرض STP":
            "Display STP",

        "PortFast":
            "PortFast",

        "Edge Port":
            "Edge Port",


        /* ================= ETH-TRUNK ================= */

        "LACP":
            "LACP",


        /* ================= DHCP ================= */

        "عرض DHCP Bindings":
            "Display DHCP Bindings",

        "عرض معلومات DHCP":
            "Display DHCP Information",

        "DHCP Snooping":
            "DHCP Snooping",


        /* ================= SSH ================= */

        "حالة SSH":
            "SSH Status",

        "المستخدمون المتصلون":
            "Connected Users",


        /* ================= ACL ================= */

        "عرض ACL":
            "Display ACL",

        "ملاحظة: أوامر ACL تختلف في الصياغة وطريقة التطبيق بين Cisco وHuawei، لذلك المقارنة هنا وظيفية وليست تطابقًا حرفيًا.":
            "Note: ACL commands differ in syntax and application between Cisco and Huawei, so this comparison is functional rather than a literal command match.",


        /* ================= TROUBLESHOOTING ================= */

        "Ping":
            "Ping",

        "Traceroute":
            "Traceroute",

        "Tracert":
            "Tracert",

        "CPU":
            "CPU",

        "Logs":
            "Logs",


        /* ================= SAVE ================= */

        "حفظ الإعدادات":
            "Save Configuration",

        "إعادة التشغيل":
            "Reboot Device",


        /* ================= SYSTEM ================= */

        "الوقت":
            "System Clock",

        "المستخدمون":
            "Users",


        /* ================= HARDWARE ================= */

        "Inventory":
            "Inventory",

        "Electronic Label":
            "Electronic Label",

        "Fan":
            "Fan",


        /* ================= LAYER 3 ================= */

        "SVI":
            "SVI",

        "Vlanif":
            "Vlanif",

        "تحويل Port إلى Layer 3":
            "Convert Port to Layer 3",


        /* ================= PORT SECURITY ================= */

        "تفعيل Port Security":
            "Enable Port Security",

        "تحديد عدد MAC":
            "Set Maximum MAC Addresses",

        "عرض Port Security":
            "Display Port Security",


        /* ================= STP CONFIG ================= */

        "تحديد Root Priority":
            "Set Root Priority",

        "Root Primary":
            "Root Primary",

        "بعض أوامر STP قد تختلف حسب موديل الجهاز وإصدار IOS أو VRP.":
            "Some STP commands may vary depending on the device model and IOS or VRP version.",


        /* ================= VLAN TROUBLESHOOTING ================= */

        "عرض VLAN على المنافذ":
            "Display VLANs on Ports",

        "MAC على منفذ":
            "MAC Address on Port",

        "MAC حسب VLAN":
            "MAC Addresses by VLAN",

        "البحث عن MAC":
            "Find MAC Address",

        "البحث عن IP في ARP":
            "Find IP in ARP",

        "الجيران":
            "Neighbors",

        "البحث داخل الإعدادات":
            "Search Configuration",

        "البحث عن Route":
            "Find Route",

        "إعدادات Interface":
            "Interface Configuration",

        "البحث عن SSH":
            "Find SSH Configuration",

        "ملاحظة: أوامر Huawei قد تختلف قليلًا حسب موديل الجهاز وإصدار VRP، خصوصًا في أوامر STP وPort Security وDHCP.":
            "Note: Huawei commands may vary slightly depending on the device model and VRP version, especially for STP, Port Security, and DHCP commands.",


        /* ================= FOOTER ================= */

        "©️ 2026 عرّاب الشبكات — جميع الحقوق محفوظة":
            "©️ 2026 Arrab Networks — All Rights Reserved",

        "الموقع والمحتوى التعليمي والتصميم والأكواد الخاصة بالمشروع مملوكة لصاحب الموقع.":
            "The website, educational content, design, and project source code are owned by the site owner."

    };


    /* =====================================================
       SAVE ORIGINAL ARABIC TEXT
       ===================================================== */

    function saveOriginalText(element) {

        if (!element) {
            return;
        }

        if (!element.dataset.configOriginal) {
            element.dataset.configOriginal =
                element.textContent.trim();
        }

    }


    /* =====================================================
       TRANSLATE ELEMENT
       ===================================================== */

    function translateElement(element, language) {

        if (!element) {
            return;
        }

        saveOriginalText(element);

        const arabicText =
            element.dataset.configOriginal;

        if (!arabicText) {
            return;
        }

        if (language === "en") {

            if (
                Object.prototype.hasOwnProperty.call(
                    translations,
                    arabicText
                )
            ) {

                element.textContent =
                    translations[arabicText];

            }

        } else {

            element.textContent =
                arabicText;

        }

    }


    /* =====================================================
       TRANSLATE STATIC PAGE
       ===================================================== */

    function translateConfigPage() {

        const language = getConfigLanguage();

        const isEnglish =
            language === "en";


        /* ================= DOCUMENT ================= */

        document.documentElement.lang =
            isEnglish ? "en" : "ar";

        document.documentElement.dir =
            isEnglish ? "ltr" : "rtl";

        document.title =
            isEnglish
                ? "Command Reference | Arrab Networks"
                : "💻 مرجع الأوامر | عرّاب الشبكات";


        /* ================= NAVBAR ================= */

        const brand =
            document.querySelector(".brand span");

        translateElement(
            brand,
            language
        );


        const navLinks =
            document.querySelectorAll(
                ".nav-links a"
            );

        navLinks.forEach(function (link) {

            translateElement(
                link,
                language
            );

        });


        /* ================= HERO ================= */

        const heroTitle =
            document.querySelector(".config-hero h1");

        translateElement(
            heroTitle,
            language
        );


        const heroDescription =
            document.querySelector(".config-hero p");

        translateElement(
            heroDescription,
            language
        );


        /* ================= SIDEBAR ================= */

        const sidebarTitle =
            document.querySelector(".sidebar-title");

        translateElement(
            sidebarTitle,
            language
        );


        const sidebarLinks =
            document.querySelectorAll(
                ".commands-sidebar-new a"
            );

        sidebarLinks.forEach(function (link) {

            translateElement(
                link,
                language
            );

        });


        /* ================= FILTER BUTTONS ================= */

        const filterButtons =
            document.querySelectorAll(
                ".filter-button"
            );

        filterButtons.forEach(function (button) {

            translateElement(
                button,
                language
            );

        });


        /* ================= SEARCH ================= */

        const search =
            document.getElementById(
                "commandSearch"
            );

        if (search) {

            search.placeholder =
                isEnglish
                    ? "Search for a command, VLAN, OSPF, SSH..."
                    : "ابحث عن أمر، VLAN، OSPF، SSH...";

            search.setAttribute(
                "aria-label",
                isEnglish
                    ? "Search commands"
                    : "البحث عن الأوامر"
            );

        }


        /* ================= SECTION HEADERS ================= */

        const sectionTitles =
            document.querySelectorAll(
                ".command-section-header h2"
            );

        sectionTitles.forEach(function (element) {

            translateElement(
                element,
                language
            );

        });


        /* ================= COMMAND HEADERS ================= */

        const commandHeaders =
            document.querySelectorAll(
                ".command-head div"
            );

        commandHeaders.forEach(function (element) {

            // These are already bilingual enough.
            // Keep Cisco IOS / Huawei VRP unchanged.

            element.textContent =
                element.textContent.trim();

        });


        /* ================= COMMAND TITLES ================= */

        const commandTitles =
            document.querySelectorAll(
                ".command-cell-new h3"
            );

        commandTitles.forEach(function (element) {

            translateElement(
                element,
                language
            );

        });


        /* ================= COMMAND DESCRIPTIONS ================= */

        const descriptions =
            document.querySelectorAll(
                ".command-cell-new p"
            );

        descriptions.forEach(function (element) {

            translateElement(
                element,
                language
            );

        });


        /* ================= NOTES ================= */

        const notes =
            document.querySelectorAll(
                ".command-note"
            );

        notes.forEach(function (element) {

            translateElement(
                element,
                language
            );

        });


        /* ================= COPY BUTTONS ================= */

        const copyButtons =
            document.querySelectorAll(
                ".copy-button-new"
            );

        copyButtons.forEach(function (button) {

            /*
             * إذا كان الزر في حالة تم النسخ،
             * لا نغيره هنا حتى ينتهي المؤقت.
             */

            if (
                !button.disabled &&
                !button.dataset.copying
            ) {

                button.textContent =
                    isEnglish
                        ? "📋 Copy"
                        : "📋 نسخ";

            }

        });


        /* ================= FOOTER ================= */

        const footerParagraphs =
            document.querySelectorAll(
                ".footer p"
            );

        footerParagraphs.forEach(function (element) {

            translateElement(
                element,
                language
            );

        });

    }


    /* =====================================================
       FILTER COMMANDS
       ===================================================== */

    window.filterCommands =
        function (type, button) {

            const rows =
                document.querySelectorAll(
                    ".command-row-new"
                );

            const buttons =
                document.querySelectorAll(
                    ".filter-button"
                );


            /* إزالة Active */

            buttons.forEach(function (btn) {

                btn.classList.remove(
                    "active"
                );

            });


            /* تفعيل الزر المختار */

            if (button) {

                button.classList.add(
                    "active"
                );

            }


            /* إظهار Cisco / Huawei / الكل */

            rows.forEach(function (row) {

                const cells =
                    row.querySelectorAll(
                        ".command-cell-new"
                    );


                cells.forEach(
                    function (cell, index) {

                        if (type === "all") {

                            cell.style.display =
                                "";

                        }

                        else if (
                            type === "cisco"
                        ) {

                            cell.style.display =
                                index === 0
                                    ? ""
                                    : "none";

                        }

                        else if (
                            type === "huawei"
                        ) {

                            cell.style.display =
                                index === 1
                                    ? ""
                                    : "none";

                        }

                    }
                );

            });

        };


    /* =====================================================
       COPY COMMAND
       ===================================================== */

    window.copyCommand =
        function (button) {

            const cell =
                button.closest(
                    ".command-cell-new"
                );


            if (!cell) {

                showCopyError();

                return;

            }


            const code =
                cell.querySelector(
                    "code"
                );


            if (!code) {

                showCopyError();

                return;

            }


            const command =
                code.textContent.trim();


            if (!command) {

                showCopyError();

                return;

            }


            /* Clipboard API */

            if (
                navigator.clipboard &&
                window.isSecureContext
            ) {

                navigator.clipboard
                    .writeText(command)
                    .then(function () {

                        showCopied(button);

                    })
                    .catch(function () {

                        fallbackCopy(
                            command,
                            button
                        );

                    });

            }

            else {

                fallbackCopy(
                    command,
                    button
                );

            }

        };


    /* =====================================================
       FALLBACK COPY
       ===================================================== */

    function fallbackCopy(
        command,
        button
    ) {

        const textarea =
            document.createElement(
                "textarea"
            );


        textarea.value =
            command;

        textarea.setAttribute(
            "readonly",
            ""
        );

        textarea.style.position =
            "fixed";

        textarea.style.top =
            "0";

        textarea.style.left =
            "-9999px";

        textarea.style.opacity =
            "0";


        document.body.appendChild(
            textarea
        );


        textarea.focus();

        textarea.select();

        textarea.setSelectionRange(
            0,
            textarea.value.length
        );


        let copied = false;


        try {

            copied =
                document.execCommand(
                    "copy"
                );

        }

        catch (error) {

            copied = false;

        }


        document.body.removeChild(
            textarea
        );


        if (copied) {

            showCopied(button);

        }

        else {

            showCopyError();

        }

    }


    /* =====================================================
       COPY SUCCESS
       ===================================================== */

    function showCopied(button) {

        const language =
            getConfigLanguage();

        const oldText =
            button.textContent;


        button.dataset.copying =
            "true";


        button.textContent =
            language === "en"
                ? "✅ Copied"
                : "✅ تم النسخ";


        button.disabled =
            true;


        setTimeout(function () {

            button.textContent =
                language === "en"
                    ? "📋 Copy"
                    : "📋 نسخ";


            button.disabled =
                false;


            delete button.dataset.copying;

        }, 1500);

    }


    /* =====================================================
       COPY ERROR
       ===================================================== */

    function showCopyError() {

        const language =
            getConfigLanguage();


        alert(
            language === "en"
                ? "Unable to copy the command."
                : "تعذر نسخ الأمر"
        );

    }


    /* =====================================================
       SEARCH COMMANDS
       ===================================================== */

    function setupSearch() {

        const searchInput =
            document.getElementById(
                "commandSearch"
            );


        if (!searchInput) {
            return;
        }


        searchInput.addEventListener(
            "input",
            function () {

                const searchText =
                    this.value
                        .trim()
                        .toLowerCase();


                const sections =
                    document.querySelectorAll(
                        ".command-section"
                    );


                sections.forEach(
                    function (section) {

                        const rows =
                            section.querySelectorAll(
                                ".command-row-new"
                            );


                        let sectionHasResult =
                            false;


                        rows.forEach(
                            function (row) {

                                const text =
                                    row.textContent
                                        .toLowerCase();


                                if (
                                    text.includes(
                                        searchText
                                    )
                                ) {

                                    row.style.display =
                                        "";

                                    sectionHasResult =
                                        true;

                                }

                                else {

                                    row.style.display =
                                        "none";

                                }

                            }
                        );


                        /* البحث فاضي */

                        if (
                            searchText === ""
                        ) {

                            rows.forEach(
                                function (row) {

                                    row.style.display =
                                        "";

                                }
                            );


                            section.style.display =
                                "";

                        }

                        else {

                            section.style.display =
                                sectionHasResult
                                    ? ""
                                    : "none";

                        }

                    }
                );

            }
        );

    }


    /* =====================================================
       LANGUAGE CHANGE
       ===================================================== */

    window.addEventListener(
        "arrabnet:languagechange",
        function () {

            translateConfigPage();

        }
    );


    /* =====================================================
       INITIALIZE
       ===================================================== */

    function initializeConfigPage() {

        translateConfigPage();

        setupSearch();

        /*
         * التأكد من أن زر "الكل"
         * هو الزر النشط عند فتح الصفحة.
         */

        const allButton =
            document.querySelector(
                ".filter-button"
            );


        if (allButton) {

            allButton.classList.add(
                "active"
            );

        }

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeConfigPage
        );

    }

    else {

        initializeConfigPage();

    }


})();