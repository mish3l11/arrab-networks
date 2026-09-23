// ===============================
// عرّاب الشبكات - إدارة المستخدمين
// ===============================

let users = [];
let selectedUser = null;


// ===============================
// التحقق من صلاحية المدير
// ===============================

async function checkAdminAccess() {

    const loading = document.getElementById("loading");
    const error = document.getElementById("error");
    const adminContent = document.getElementById("adminContent");

    try {

        const {
            data: { user },
            error: authError
        } = await supabaseClient.auth.getUser();

        if (authError || !user) {
            throw new Error("يجب تسجيل الدخول أولاً.");
        }

        const {
            data: adminUser,
            error: adminError
        } = await supabaseClient
            .from("users")
            .select("is_admin")
            .eq("auth_id", user.id)
            .single();

        if (
            adminError ||
            !adminUser ||
            adminUser.is_admin !== true
        ) {
            throw new Error(
                "ليس لديك صلاحية للوصول إلى إدارة المستخدمين."
            );
        }

        loading.style.display = "none";
        adminContent.style.display = "block";

        await loadUsers();

    } catch (err) {

        loading.style.display = "none";
        error.style.display = "block";
        error.textContent = err.message;
    }
}


// ===============================
// تحميل المستخدمين
// ===============================

async function loadUsers() {

    const {
        data,
        error
    } = await supabaseClient
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
        .order("id", { ascending: true });

    if (error) {

        console.error("Load users error:", error);

        document.getElementById("usersTableBody").innerHTML = `
            <tr>
                <td colspan="6">
                    حدث خطأ أثناء تحميل المستخدمين
                </td>
            </tr>
        `;

        return;
    }

    users = data || [];

    updateStatistics();

    renderUsers(users);
}


// ===============================
// الإحصائيات
// ===============================

function updateStatistics() {

    const totalUsers = users.length;

    let totalLessons = 0;
    let totalQuiz = 0;

    users.forEach(user => {

        if (Array.isArray(user.completed_lessons)) {
            totalLessons += user.completed_lessons.length;
        }

        totalQuiz += Number(user.quiz_best_score || 0);
    });

    const averageQuiz =
        totalUsers > 0
            ? Math.round(totalQuiz / totalUsers)
            : 0;

    document.getElementById("totalUsers").textContent =
        totalUsers;

    document.getElementById("totalLessons").textContent =
        totalLessons;

    document.getElementById("averageQuiz").textContent =
        averageQuiz + "%";
}


// ===============================
// عرض المستخدمين
// ===============================

function renderUsers(list) {

    const tableBody =
        document.getElementById("usersTableBody");

    if (!list.length) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="6">
                    لا يوجد مستخدمون
                </td>
            </tr>
        `;

        return;
    }

    tableBody.innerHTML = list.map(user => {

        const lessons =
            Array.isArray(user.completed_lessons)
                ? user.completed_lessons.length
                : 0;

        const lab =
            Number(user.lab_progress || 0);

        const quiz =
            Number(user.quiz_best_score || 0);

        const adminBadge =
            user.is_admin === true
                ? `<span class="admin-badge">ADMIN</span>`
                : "";

        return `
            <tr>

                <td>
                    <strong>
                        ${escapeHtml(user.username || "بدون اسم")}
                    </strong>
                    ${adminBadge}
                </td>

                <td>
                    ${escapeHtml(user.email || "-")}
                </td>

                <td>
                    ${lessons}
                </td>

                <td>
                    ${lab}%
                </td>

                <td>
                    ${quiz}%
                </td>

                <td>

                    <div class="action-buttons">

                        <button
                            class="edit-btn"
                            data-id="${user.id}">
                            ✏️ تعديل
                        </button>

                        <button
                            class="delete-btn"
                            data-id="${user.id}">
                            🗑️ حذف
                        </button>

                    </div>

                </td>

            </tr>
        `;

    }).join("");

    addActionEvents();
}


// ===============================
// أحداث الأزرار
// ===============================

function addActionEvents() {

    document
        .querySelectorAll(".edit-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(button.dataset.id);

                    openEditModal(id);
                }
            );
        });


    document
        .querySelectorAll(".delete-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(button.dataset.id);

                    deleteUser(id);
                }
            );
        });
}


// ===============================
// فتح نافذة التعديل
// ===============================

function openEditModal(id) {

    selectedUser =
        users.find(user => user.id === id);

    if (!selectedUser) {
        return;
    }

    document.getElementById("editUsername").value =
        selectedUser.username || "";

    document.getElementById("editLabProgress").value =
        Number(selectedUser.lab_progress || 0);

    document.getElementById("editQuizScore").value =
        Number(selectedUser.quiz_best_score || 0);

    document.getElementById("editModal").style.display =
        "flex";
}


// ===============================
// إغلاق نافذة التعديل
// ===============================

function closeEditModal() {

    selectedUser = null;

    document.getElementById("editModal").style.display =
        "none";
}


// ===============================
// حفظ التعديل
// ===============================

async function saveUserChanges() {

    if (!selectedUser) {
        return;
    }

    const username =
        document
            .getElementById("editUsername")
            .value
            .trim();

    const labProgress =
        Number(
            document
                .getElementById("editLabProgress")
                .value
        );

    const quizScore =
        Number(
            document
                .getElementById("editQuizScore")
                .value
        );


    if (!username) {

        alert("اكتب اسم المستخدم.");

        return;
    }


    if (
        Number.isNaN(labProgress) ||
        labProgress < 0 ||
        labProgress > 100
    ) {

        alert(
            "نسبة المختبر يجب أن تكون بين 0 و100."
        );

        return;
    }


    if (
        Number.isNaN(quizScore) ||
        quizScore < 0 ||
        quizScore > 100
    ) {

        alert(
            "درجة الاختبار يجب أن تكون بين 0 و100."
        );

        return;
    }


    const saveButton =
        document.getElementById("saveEditBtn");

    if (saveButton) {
        saveButton.disabled = true;
        saveButton.textContent = "جاري الحفظ...";
    }


    const {
        error
    } = await supabaseClient
        .from("users")
        .update({
            username: username,
            lab_progress: labProgress,
            quiz_best_score: quizScore
        })
        .eq("id", selectedUser.id);


    if (saveButton) {
        saveButton.disabled = false;
        saveButton.textContent = "حفظ التعديلات";
    }


    if (error) {

        console.error("Update user error:", error);

        alert(
            "تعذر تعديل المستخدم:\n" +
            error.message
        );

        return;
    }


    closeEditModal();

    await loadUsers();

    alert("تم حفظ التعديلات بنجاح.");
}


// ===============================
// حذف المستخدم
// ===============================

async function deleteUser(id) {

    const user =
        users.find(item => item.id === id);

    if (!user) {
        return;
    }


    // منع حذف المدير من هذه الصفحة
    if (user.is_admin === true) {

        alert(
            "لا يمكن حذف حساب Admin من لوحة المستخدمين."
        );

        return;
    }


    const username =
        user.username || "هذا المستخدم";


    const confirmed =
        confirm(
            `هل أنت متأكد من حذف المستخدم "${username}"؟\n\n` +
            "سيتم حذف حسابه من Authentication وبياناته من جدول المستخدمين.\n\n" +
            "هذا الإجراء لا يمكن التراجع عنه."
        );


    if (!confirmed) {
        return;
    }


    const deleteButton =
        document.querySelector(
            `.delete-btn[data-id="${id}"]`
        );


    if (deleteButton) {

        deleteButton.disabled = true;
        deleteButton.textContent = "جاري الحذف...";
    }


    try {

        if (!user.auth_id) {

            throw new Error(
                "هذا المستخدم لا يملك Auth ID."
            );
        }


        const {
            data,
            error
        } = await supabaseClient.functions.invoke(
            "delete-user",
            {
                body: {
                    userId: user.auth_id
                }
            }
        );


        if (error) {

            console.error(
                "Delete function error:",
                error
            );

            throw new Error(
                error.message ||
                "حدث خطأ أثناء حذف المستخدم."
            );
        }


        if (data && data.error) {

            throw new Error(
                data.error
            );
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
            "تعذر حذف المستخدم:\n" +
            err.message
        );


        if (deleteButton) {

            deleteButton.disabled = false;
            deleteButton.textContent = "🗑️ حذف";
        }
    }
}


// ===============================
// البحث
// ===============================

const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const search =
                this.value
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
                        ).toLowerCase();

                    const email =
                        String(
                            user.email || ""
                        ).toLowerCase();


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
    document.getElementById("saveEditBtn");

if (saveEditBtn) {

    saveEditBtn.addEventListener(
        "click",
        saveUserChanges
    );
}


const cancelEditBtn =
    document.getElementById("cancelEditBtn");

if (cancelEditBtn) {

    cancelEditBtn.addEventListener(
        "click",
        closeEditModal
    );
}


// ===============================
// إغلاق النافذة عند الضغط خارجها
// ===============================

const editModal =
    document.getElementById("editModal");

if (editModal) {

    editModal.addEventListener(
        "click",
        function (event) {

            if (event.target === editModal) {
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
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ===============================
// تشغيل لوحة الإدارة
// ===============================

checkAdminAccess();