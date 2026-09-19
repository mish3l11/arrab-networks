/* =====================================================
   عرّاب الشبكات - CONFIG.JS
   Filters + Copy Commands
   ===================================================== */


/* ================= FILTER COMMANDS ================= */

function filterCommands(type, button) {

    const rows = document.querySelectorAll(".command-row");
    const buttons = document.querySelectorAll(".filter-button");

    // إزالة Active من جميع الأزرار
    buttons.forEach(function (btn) {
        btn.classList.remove("active");
    });

    // تفعيل الزر المختار
    if (button) {
        button.classList.add("active");
    }

    // إظهار Cisco / Huawei / الكل
    rows.forEach(function (row) {

        const cells = row.querySelectorAll(".command-cell");

        cells.forEach(function (cell, index) {

            if (type === "all") {

                cell.style.display = "";

            } else if (type === "cisco") {

                cell.style.display = index === 0 ? "" : "none";

            } else if (type === "huawei") {

                cell.style.display = index === 1 ? "" : "none";

            }

        });

    });
}


/* ================= COPY COMMAND ================= */

function copyCommand(button) {

    // البحث عن الخلية التي تحتوي على الزر
    const cell = button.closest(".command-cell");

    if (!cell) {
        alert("تعذر العثور على الأمر");
        return;
    }

    // البحث عن الأمر داخل code
    const code = cell.querySelector("code");

    if (!code) {
        alert("تعذر العثور على الأمر");
        return;
    }

    // أخذ النص بدون المسافات الزائدة
    const command = code.textContent.trim();

    if (!command) {
        alert("الأمر فارغ");
        return;
    }


    /* ==========================================
       الطريقة الأولى: Clipboard API
       ========================================== */

    if (navigator.clipboard && window.isSecureContext) {

        navigator.clipboard.writeText(command)
            .then(function () {

                showCopied(button);

            })
            .catch(function () {

                fallbackCopy(command, button);

            });

    } else {

        fallbackCopy(command, button);

    }
}


/* ================= FALLBACK COPY ================= */

function fallbackCopy(command, button) {

    const textarea = document.createElement("textarea");

    textarea.value = command;

    textarea.setAttribute("readonly", "");

    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "-9999px";

    document.body.appendChild(textarea);

    textarea.focus();
    textarea.select();

    let copied = false;

    try {

        copied = document.execCommand("copy");

    } catch (error) {

        copied = false;

    }

    document.body.removeChild(textarea);


    if (copied) {

        showCopied(button);

    } else {

        alert("تعذر نسخ الأمر");

    }
}


/* ================= COPY SUCCESS ================= */

function showCopied(button) {

    const oldText = button.textContent;

    button.textContent = "✅ تم النسخ";

    button.disabled = true;

    setTimeout(function () {

        button.textContent = oldText;

        button.disabled = false;

    }, 1500);
}


/* ================= SEARCH COMMANDS ================= */

const searchInput = document.getElementById("commandSearch");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = this.value.trim().toLowerCase();

        const sections = document.querySelectorAll(".command-section");

        sections.forEach(function (section) {

            const rows = section.querySelectorAll(".command-row");

            let sectionHasResult = false;

            rows.forEach(function (row) {

                const text = row.textContent.toLowerCase();

                if (text.includes(searchText)) {

                    row.style.display = "";

                    sectionHasResult = true;

                } else {

                    row.style.display = "none";

                }

            });


            // إذا البحث فاضي، رجع كل الصفوف
            if (searchText === "") {

                rows.forEach(function (row) {
                    row.style.display = "";
                });

                section.style.display = "";

            } else {

                section.style.display =
                    sectionHasResult ? "" : "none";

            }

        });

    });

}