/*
 * عرّاب الشبكات
 * Copyright (c) 2026 Mishal AL-Mishal
 * All Rights Reserved.
 *
 * يمنع نسخ أو إعادة استخدام أو إعادة توزيع هذا الملف
 * أو أي جزء جوهري منه دون إذن صاحب الحقوق.
 */
document.addEventListener("DOMContentLoaded", function () {

    const savedName = localStorage.getItem("networkUserName");

    if (!savedName) {
        return;
    }

    const profileLinks = document.querySelectorAll(".profile-link");

    profileLinks.forEach(function (link) {
        link.textContent = "👤 " + savedName;
    });

});
