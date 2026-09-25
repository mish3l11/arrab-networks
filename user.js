/*
 * عرّاب الشبكات
 * Copyright (c) 2026 Mishal AL-Mishal
 * All Rights Reserved.
 */

(async function () {

    // =====================================================
    // التأكد من Supabase
    // =====================================================

    if (
        typeof supabaseClient === "undefined" ||
        !supabaseClient
    ) {
        console.error("Supabase غير متوفر.");
        return;
    }

    try {

        // =====================================================
        // الحصول على الجلسة الحالية
        // =====================================================

        const {
            data,
            error
        } = await supabaseClient.auth.getSession();

        if (error) {

            console.error(
                "خطأ أثناء قراءة جلسة الدخول:",
                error
            );

            return;
        }

        const session = data?.session;

        // =====================================================
        // لا يوجد تسجيل دخول
        // =====================================================

        if (!session || !session.user) {

            console.log(
                "لا توجد جلسة تسجيل دخول."
            );

            return;
        }

        const user = session.user;

        console.log(
            "المستخدم المسجل:",
            user.email
        );

        // =====================================================
        // جلب بيانات المستخدم
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

            console.error(
                "لم يتم العثور على المستخدم في جدول users."
            );

            return;
        }

        // =====================================================
        // بيانات الحساب
        // =====================================================

        const username =
            profile.username || "المستخدم";

        const isAdmin =
            profile.is_admin === true;

        // =====================================================
        // حفظ الاسم
        // =====================================================

        localStorage.setItem(
            "networkUserName",
            username
        );

        // =====================================================
        // تحديث روابط الحساب
        // =====================================================

        document
            .querySelectorAll(".profile-link")
            .forEach(function (link) {

                link.textContent =
                    "👤 " + username;

            });

        // =====================================================
        // data-user-name
        // =====================================================

        document
            .querySelectorAll("[data-user-name]")
            .forEach(function (element) {

                element.textContent =
                    username;

            });

        // =====================================================
        // user-name
        // =====================================================

        document
            .querySelectorAll(".user-name")
            .forEach(function (element) {

                element.textContent =
                    username;

            });

        // =====================================================
        // الترحيب
        // =====================================================

        const welcomeTitle =
            document.getElementById("welcomeTitle");

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
            document.getElementById("adminNavLink");

        if (adminLink) {

            if (isAdmin) {

                adminLink.style.display =
                    "inline-flex";

                adminLink.href =
                    "admin.html";

                adminLink.textContent =
                    "🛠️ لوحة الإدارة";

            } else {

                adminLink.style.display =
                    "none";

            }

        }

        console.log(
            "تم تحميل حساب المستخدم:",
            username
        );

    } catch (error) {

        console.error(
            "خطأ أثناء تحميل حساب المستخدم:",
            error
        );

    }

})();