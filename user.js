/*
 * عرّاب الشبكات
 * Copyright (c) 2026 Mishal AL-Mishal
 * All Rights Reserved.
 *
 * يمنع نسخ أو إعادة استخدام أو إعادة توزيع هذا الملف
 * أو أي جزء جوهري منه دون إذن صاحب الحقوق.
 */

document.addEventListener("DOMContentLoaded", async function () {

    // التأكد من وجود Supabase
    if (typeof supabaseClient === "undefined") {
        console.error("Supabase غير متوفر.");
        return;
    }

    try {

        // الحصول على المستخدم الحالي من Supabase Auth
        const {
            data: { user },
            error: userError
        } = await supabaseClient.auth.getUser();

        if (userError || !user) {
            return;
        }

        // جلب بيانات المستخدم من جدول users
        const {
            data: profile,
            error: profileError
        } = await supabaseClient
            .from("users")
            .select("username")
            .eq("auth_id", user.id)
            .maybeSingle();

        if (profileError) {
            console.error("خطأ في جلب اسم المستخدم:", profileError);
            return;
        }

        if (!profile || !profile.username) {
            return;
        }

        const username = profile.username;

        // حفظ الاسم الحالي محلياً أيضاً
        localStorage.setItem("networkUserName", username);

        // تحديث روابط الحساب
        const profileLinks = document.querySelectorAll(".profile-link");

        profileLinks.forEach(function (link) {
            link.textContent = "👤 " + username;
        });

        // تحديث أي عنصر يحمل data-user-name
        const userNameElements = document.querySelectorAll("[data-user-name]");

        userNameElements.forEach(function (element) {
            element.textContent = username;
        });

        // تحديث العناصر التي تحمل class="user-name"
        const userNameClasses = document.querySelectorAll(".user-name");

        userNameClasses.forEach(function (element) {
            element.textContent = username;
        });

        // تحديث عنوان الترحيب إذا كان موجوداً
        const welcomeTitle = document.getElementById("welcomeTitle");

        if (welcomeTitle) {
            welcomeTitle.textContent = "مرحباً " + username + " 👋";
        }

    } catch (error) {

        console.error("حدث خطأ أثناء تحميل اسم المستخدم:", error);

    }

});