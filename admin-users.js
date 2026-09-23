let users = [];
let selectedUser = null;


// ===============================
// التحقق من صلاحية المدير
// ===============================
async function checkAdminAccess() {

    const loading =
        document.getElementById("loading");

    const errorBox =
        document.getElementById("error");

    const adminContent =
        document.getElementById("adminContent");

    try {

        const {
            data: { user },
            error: authError
        } =
        await supabaseClient.auth.getUser();


        if (authError || !user) {
            throw new Error(
                "يجب تسجيل الدخول أولاً."
            );
        }


        const {
            data: adminUser,
            error: adminError
        } =
        await supabaseClient
            .from("users")
            .select("is_admin")
            .eq("auth_id", user.id)
            .single();


        if (adminError) {

            console.error(
                "Admin check error:",
                adminError
            );

            throw new Error(
                "تعذر التحقق من صلاحيات المدير."
            );
        }


        if (
            !adminUser ||
            adminUser.is_admin !== true
        ) {

            throw new Error(
                "ليس لديك صلاحية للوصول إلى هذه الصفحة."
            );
        }


        if (loading) {
            loading.style.display = "none";
        }


        if (adminContent) {
            adminContent.style.display = "block";
        }


        await loadUsers();

    } catch (error) {

        console.error(
            "Admin access error:",
            error
        );


        if (loading) {
            loading.style.display = "none";
        }


        if (errorBox) {

            errorBox.style.display = "block";

            errorBox.textContent =
                error.message ||
                "حدث خطأ غير متوقع.";
        }
    }
}


// ===============================
// تحميل المستخدمين
// ===============================
async function loadUsers() {

    const tableBody =
        document.getElementById(
            "usersTableBody"
        );


    if (tableBody) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="7"
                    style="text-align:center; padding:30px;">
                    جاري تحميل المستخدمين...
                </td>
            </tr>
        `;
    }


    const {
        data,
        error
    } =
    await supabaseClient
        .from("users")
        .select(`
            id,
            username,
            email,
            auth_id,
            completed_lessons,
            lab_progress,
            quiz_best_score,
            is_admin
        `)
        .order("id", {
            ascending: true
        });


    if (error) {

        console.error(
            "Load users error:",
            error
        );


        alert(
            "خطأ أثناء تحميل المستخدمين:\n\n" +
            error.message
        );


        if (tableBody) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="7"
                        style="
                            text-align:center;
                            padding:30px;
                            color:#b91c1c;
                        ">
                        تعذر تحميل المستخدمين
                    </td>
                </tr>
            `;
        }


        return;
    }


    users = data || [];


    console.log(
        "Users loaded:",
        users
    );


    updateStatistics();

    renderUsers();
}


// ===============================
// تحديث الإحصائيات
// ===============================
function updateStatistics() {

    const totalUsers =
        document.getElementById(
            "totalUsers"
        );

    const totalLessons =
        document.getElementById(
            "totalLessons"
        );

    const averageQuiz =
        document.getElementById(
            "averageQuiz"
        );


    let lessons = 0;

    let quizTotal = 0;


    users.forEach(user => {

        if (
            Array.isArray(
                user.completed_lessons
            )
        ) {

            lessons +=
                user.completed_lessons.length;
        }


        quizTotal +=
            Number(
                user.quiz_best_score || 0
            );
    });


    const average =
        users.length > 0
            ? Math.round(
                quizTotal /
                users.length
            )
            : 0;


    if (totalUsers) {

        totalUsers.textContent =
            users.length;
    }


    if (totalLessons) {

        totalLessons.textContent =
            lessons;
    }


    if (averageQuiz) {

        averageQuiz.textContent =
            average + "%";
    }
}


// ===============================
// عرض المستخدمين
// ===============================
function renderUsers(
    filteredUsers = users
) {

    const tableBody =
        document.getElementById(
            "usersTableBody"
        );


    if (!tableBody) {

        console.error(
            "usersTableBody غير موجود"
        );

        alert(
            "المشكلة: usersTableBody غير موجود في admin-users.html"
        );

        return;
    }


    if (!filteredUsers.length) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="7"
                    style="
                        text-align:center;
                        padding:30px;
                    ">
                    لا يوجد مستخدمون
                </td>
            </tr>
        `;

        return;
    }


    tableBody.innerHTML =
        filteredUsers
            .map(user => {

                const completedLessons =
                    Array.isArray(
                        user.completed_lessons
                    )
                        ? user.completed_lessons.length
                        : 0;


                const labProgress =
                    Number(
                        user.lab_progress || 0
                    );


                const quizScore =
                    Number(
                        user.quiz_best_score || 0
                    );


                const adminBadge =
                    user.is_admin
                        ? `
                            <span style="
                                display:inline-block;
                                padding:4px 10px;
                                border-radius:20px;
                                background:#cbb77a;
                                color:#111;
                                font-size:12px;
                                font-weight:bold;
                                margin-right:6px;
                            ">
                                ADMIN
                            </span>
                        `
                        : "";


                return `
                    <tr>

                        <td>
                            <strong>
                                ${escapeHtml(
                                    user.username ||
                                    "بدون اسم"
                                )}
                            </strong>

                            ${adminBadge}
                        </td>


                        <td>
                            ${escapeHtml(
                                user.email || "-"
                            )}
                        </td>


                        <td>
                            ${completedLessons}
                        </td>


                        <td>
                            ${labProgress}%
                        </td>


                        <td>
                            ${quizScore}%
                        </td>


                        <td>

                            <button
                                type="button"
                                class="edit-user-btn"
                                data-id="${user.id}">
                                تعديل
                            </button>


                            ${
                                user.is_admin
                                    ? `
                                        <span style="
                                            color:#777;
                                            font-size:13px;
                                            margin-right:8px;
                                        ">
                                            مدير
                                        </span>
                                      `
                                    : `
                                        <button
                                            type="button"
                                            class="delete-user-btn"
                                            data-id="${user.id}">
                                            حذف
                                        </button>
                                      `
                            }

                        </td>

                    </tr>
                `;

            })
            .join("");


    addActionEvents();
}


// ===============================
// أزرار التعديل والحذف
// ===============================
function addActionEvents() {

    document
        .querySelectorAll(
            ".edit-user-btn"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(
                            button.dataset.id
                        );

                    openEditModal(id);
                }
            );
        });


    document
        .querySelectorAll(
            ".delete-user-btn"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(
                            button.dataset.id
                        );

                    deleteUser(id);
                }
            );
        });
}


// ===============================
// فتح التعديل
// ===============================
function openEditModal(id) {

    const user =
        users.find(
            u =>
                Number(u.id) === id
        );


    if (!user) {
        return;
    }


    selectedUser = user;


    const usernameInput =
        document.getElementById(
            "editUsername"
        );


    const labInput =
        document.getElementById(
            "editLabProgress"
        );


    const quizInput =
        document.getElementById(
            "editQuizScore"
        );


    const modal =
        document.getElementById(
            "editModal"
        );


    if (usernameInput) {

        usernameInput.value =
            user.username || "";
    }


    if (labInput) {

        labInput.value =
            Number(
                user.lab_progress || 0
            );
    }


    if (quizInput) {

        quizInput.value =
            Number(
                user.quiz_best_score || 0
            );
    }


    if (modal) {

        modal.style.display =
            "flex";
    }
}


// ===============================
// إغلاق التعديل
// ===============================
function closeEditModal() {

    const modal =
        document.getElementById(
            "editModal"
        );


    if (modal) {

        modal.style.display =
            "none";
    }


    selectedUser = null;
}


// ===============================
// حفظ التعديل
// ===============================
async function saveUserChanges() {

    if (!selectedUser) {
        return;
    }


    const usernameInput =
        document.getElementById(
            "editUsername"
        );


    const labInput =
        document.getElementById(
            "editLabProgress"
        );


    const quizInput =
        document.getElementById(
            "editQuizScore"
        );


    const username =
        usernameInput
            ? usernameInput.value.trim()
            : "";


    const labProgress =
        labInput
            ? Number(labInput.value)
            : 0;


    const quizScore =
        quizInput
            ? Number(quizInput.value)
            : 0;


    if (!username) {

        alert(
            "اكتب اسم المستخدم."
        );

        return;
    }


    if (
        labProgress < 0 ||
        labProgress > 100
    ) {

        alert(
            "نسبة المختبر يجب أن تكون بين 0 و100."
        );

        return;
    }


    if (
        quizScore < 0 ||
        quizScore > 100
    ) {

        alert(
            "درجة الاختبار يجب أن تكون بين 0 و100."
        );

        return;
    }


    const {
        error
    } =
    await supabaseClient
        .from("users")
        .update({
            username:
                username,

            lab_progress:
                labProgress,

            quiz_best_score:
                quizScore
        })
        .eq(
            "id",
            selectedUser.id
        );


    if (error) {

        console.error(
            "Update user error:",
            error
        );


        alert(
            "تعذر تعديل المستخدم:\n\n" +
            error.message
        );

        return;
    }


    alert(
        "تم تعديل المستخدم بنجاح."
    );


    closeEditModal();

    await loadUsers();
}


// ===============================
// حذف المستخدم
// ===============================
async function deleteUser(id) {

    const user =
        users.find(
            u =>
                Number(u.id) === id
        );


    if (!user) {
        return;
    }


    if (user.is_admin === true) {

        alert(
            "لا يمكن حذف حساب مدير."
        );

        return;
    }


    const confirmed =
        confirm(
            `هل أنت متأكد من حذف المستخدم "${user.username || "بدون اسم"}"؟`
        );


    if (!confirmed) {
        return;
    }


    if (!user.auth_id) {

        alert(
            "هذا المستخدم لا يملك Auth ID."
        );

        return;
    }


    try {

        /*
        =========================================
        مهم:
        الـ Function slug الفعلي عندك هو clever-handler
        =========================================
        */

        const {
            data,
            error
        } =
        await supabaseClient
            .functions
            .invoke(
                "clever-handler",
                {
                    body: {
                        userId:
                            user.auth_id
                    }
                }
            );


        console.log(
            "Delete function data:",
            data
        );


        console.log(
            "Delete function error:",
            error
        );


        if (error) {

            let details =
                error.message ||
                "خطأ غير معروف";


            /*
            محاولة استخراج تفاصيل
            إضافية من الخطأ
            */

            if (error.context) {

                try {

                    const responseText =
                        await error.context.text();

                    if (responseText) {

                        details +=
                            "\n\nتفاصيل السيرفر:\n" +
                            responseText;
                    }

                } catch (readError) {

                    console.error(
                        "Could not read error response:",
                        readError
                    );
                }
            }


            alert(
                "تعذر حذف المستخدم:\n\n" +
                details
            );

            return;
        }


        if (
            data &&
            data.error
        ) {

            alert(
                "تعذر حذف المستخدم:\n\n" +
                data.error
            );

            return;
        }


        alert(
            "تم حذف المستخدم بنجاح."
        );


        await loadUsers();

    } catch (err) {

        console.error(
            "Delete user error:",
            err
        );


        alert(
            "حدث خطأ أثناء حذف المستخدم:\n\n" +
            (
                err.message ||
                "خطأ غير معروف"
            )
        );
    }
}


// ===============================
// البحث
// ===============================
const searchInput =
    document.getElementById(
        "searchInput"
    );


if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            const search =
                searchInput.value
                    .trim()
                    .toLowerCase();


            if (!search) {

                renderUsers(users);

                return;
            }


            const filtered =
                users.filter(user => {

                    const username =
                        String(
                            user.username || ""
                        )
                        .toLowerCase();


                    const email =
                        String(
                            user.email || ""
                        )
                        .toLowerCase();


                    return (
                        username.includes(search) ||
                        email.includes(search)
                    );
                });


            renderUsers(filtered);
        }
    );
}


// ===============================
// أزرار نافذة التعديل
// ===============================
const saveEditBtn =
    document.getElementById(
        "saveEditBtn"
    );


if (saveEditBtn) {

    saveEditBtn.addEventListener(
        "click",
        saveUserChanges
    );
}


const cancelEditBtn =
    document.getElementById(
        "cancelEditBtn"
    );


if (cancelEditBtn) {

    cancelEditBtn.addEventListener(
        "click",
        closeEditModal
    );
}


// ===============================
// إغلاق النافذة
// ===============================
const editModal =
    document.getElementById(
        "editModal"
    );


if (editModal) {

    editModal.addEventListener(
        "click",
        event => {

            if (
                event.target === editModal
            ) {

                closeEditModal();
            }
        }
    );
}


// ===============================
// حماية النصوص
// ===============================
function escapeHtml(value) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );
}


// ===============================
// تشغيل الصفحة
// ===============================
checkAdminAccess();