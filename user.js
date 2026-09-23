/*
 * عرّاب الشبكات
 * Copyright (c) 2026 Mishal AL-Mishal
 * All Rights Reserved.
 *
 * يمنع نسخ أو إعادة استخدام أو إعادة توزيع هذا الملف
 * أو أي جزء جوهري منه دون إذن صاحب الحقوق.
 */

document.addEventListener("DOMContentLoaded", async function () {

    // =====================================================
    // التأكد من Supabase
    // =====================================================

    if (typeof supabaseClient === "undefined") {

        console.error("Supabase غير متوفر.");

        return;
    }

    try {

        // =====================================================
        // الحصول على الجلسة الحالية
        // =====================================================

        const {
            data: { session },
            error: sessionError
        } = await supabaseClient.auth.getSession();

        if (sessionError) {

            console.error(
                "خطأ أثناء قراءة تسجيل الدخول:",
                sessionError
            );

            return;
        }

        if (!session || !session.user) {

            console.log(
                "لا توجد جلسة تسجيل دخول على هذا الموقع."
            );

            return;
        }

        const user = session.user;

        console.log(
            "المستخدم المسجل:",
            user.email
        );

        // =====================================================
        // جلب بيانات المستخدم من جدول users
        // =====================================================

        const {
            data: profile,
            error: profileError
        } = await supabaseClient
            .from("users")
            .select("username, is_admin")
            .eq("auth_id", user.id)
            .maybeSingle();

        if (profileError) {

            console.error(
                "خطأ أثناء قراءة بيانات المستخدم:",
                profileError
            );

            return;
        }

        if (!profile) {

            console.log(
                "لم يتم العثور على بيانات المستخدم في جدول users."
            );

            return;
        }

        // =====================================================
        // بيانات المستخدم
        // =====================================================

        const username =
            profile.username || "المستخدم";

        const isAdmin =
            profile.is_admin === true;

        console.log(
            "اسم المستخدم:",
            username
        );

        console.log(
            "قيمة is_admin:",
            profile.is_admin
        );

        console.log(
            "هل المستخدم Admin؟",
            isAdmin
        );

        // =====================================================
        // حفظ اسم المستخدم
        // =====================================================

        localStorage.setItem(
            "networkUserName",
            username
        );

        // =====================================================
        // تحديث رابط الحساب
        // =====================================================

        const profileLinks =
            document.querySelectorAll(
                ".profile-link"
            );

        profileLinks.forEach(function (link) {

            link.textContent =
                "👤 " + username;

        });

        // =====================================================
        // تحديث عناصر اسم المستخدم
        // =====================================================

        const userNameElements =
            document.querySelectorAll(
                "[data-user-name]"
            );

        userNameElements.forEach(function (element) {

            element.textContent =
                username;

        });

        // =====================================================
        // تحديث user-name
        // =====================================================

        const userNameClasses =
            document.querySelectorAll(
                ".user-name"
            );

        userNameClasses.forEach(function (element) {

            element.textContent =
                username;

        });

        // =====================================================
        // تحديث الترحيب
        // =====================================================

        const welcomeTitle =
            document.getElementById(
                "welcomeTitle"
            );

        if (welcomeTitle) {

            welcomeTitle.textContent =
                "مرحباً " +
                username +
                " 👋";

        }

        // =====================================================
        // لوحة الإدارة
        // =====================================================

        const adminLink =
            document.getElementById(
                "adminNavLink"
            );

        if (!adminLink) {

            console.log(
                "رابط لوحة الإدارة غير موجود في الصفحة."
            );

        } else {

            if (isAdmin) {

                // إظهار لوحة الإدارة للأدمن
                adminLink.style.display = "inline-flex";

                adminLink.href =
                    "admin.html";

                adminLink.textContent =
                    "🛠️ لوحة الإدارة";

                console.log(
                    "تم إظهار لوحة الإدارة."
                );

            } else {

                // إخفاء لوحة الإدارة عن المستخدم العادي
                adminLink.style.display = "none";

                console.log(
                    "المستخدم ليس Admin."
                );
            }
        }

    } catch (error) {

        console.error(
            "حدث خطأ أثناء تحميل بيانات المستخدم:",
            error
        );

    }

});