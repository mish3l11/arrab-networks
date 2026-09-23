async function checkAdmin() {
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

        const { data: adminUser, error: adminError } = await supabaseClient
            .from("users")
            .select("is_admin")
            .eq("auth_id", user.id)
            .single();

        if (
            adminError ||
            !adminUser ||
            adminUser.is_admin !== true
        ) {
            throw new Error("ليس لديك صلاحية للوصول إلى لوحة الإدارة.");
        }

        loading.style.display = "none";
        adminContent.style.display = "block";

        await loadStatistics();

    } catch (errorMessage) {
        loading.style.display = "none";
        error.style.display = "block";
        error.textContent = errorMessage.message;
    }
}


async function loadStatistics() {

    const { data, error } = await supabaseClient
        .from("users")
        .select("completed_lessons, lab_progress, quiz_best_score");

    if (error) {
        console.error("Statistics error:", error);
        return;
    }

    const usersCount = data.length;

    let lessonsCount = 0;
    let labTotal = 0;
    let quizTotal = 0;

    data.forEach(user => {

        if (Array.isArray(user.completed_lessons)) {
            lessonsCount += user.completed_lessons.length;
        }

        labTotal += Number(user.lab_progress || 0);

        quizTotal += Number(user.quiz_best_score || 0);
    });

    const averageLab = usersCount > 0
        ? Math.round(labTotal / usersCount)
        : 0;

    const averageQuiz = usersCount > 0
        ? Math.round(quizTotal / usersCount)
        : 0;


    document.getElementById("usersCount").textContent =
        usersCount;

    document.getElementById("lessonsCount").textContent =
        lessonsCount;

    document.getElementById("labCount").textContent =
        averageLab + "%";

    document.getElementById("quizCount").textContent =
        averageQuiz + "%";
}


checkAdmin();