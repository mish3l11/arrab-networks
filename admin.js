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
                "ليس لديك صلاحية للوصول إلى لوحة الإدارة."
            );

        }


        if (loading) {
            loading.style.display = "none";
        }


        if (adminContent) {
            adminContent.style.display = "block";
        }


        await loadStatistics();


    } catch (errorMessage) {

        if (loading) {
            loading.style.display = "none";
        }


        if (error) {

            error.style.display = "block";

            error.textContent =
                errorMessage.message;

        } else {

            console.error(
                errorMessage
            );

        }

    }

}


async function loadStatistics() {

    const {
        data,
        error
    } = await supabaseClient
        .from("users")
        .select(
            "completed_lessons, lab_progress, quiz_best_score"
        );


    if (error) {

        console.error(
            "Statistics error:",
            error
        );

        return;
    }


    const usersCount =
        data ? data.length : 0;


    let lessonsCount = 0;
    let labTotal = 0;
    let quizTotal = 0;


    data.forEach(user => {

        if (
            Array.isArray(
                user.completed_lessons
            )
        ) {

            lessonsCount +=
                user.completed_lessons.length;

        }


        labTotal +=
            Number(
                user.lab_progress || 0
            );


        quizTotal +=
            Number(
                user.quiz_best_score || 0
            );

    });


    const averageLab =
        usersCount > 0
            ? Math.round(
                labTotal / usersCount
            )
            : 0;


    const averageQuiz =
        usersCount > 0
            ? Math.round(
                quizTotal / usersCount
            )
            : 0;


    const usersCountElement =
        document.getElementById(
            "usersCount"
        );


    const lessonsCountElement =
        document.getElementById(
            "lessonsCount"
        );


    const labCountElement =
        document.getElementById(
            "labCount"
        );


    const quizCountElement =
        document.getElementById(
            "quizCount"
        );


    if (usersCountElement) {

        usersCountElement.textContent =
            usersCount;

    }


    if (lessonsCountElement) {

        lessonsCountElement.textContent =
            lessonsCount;

    }


    if (labCountElement) {

        labCountElement.textContent =
            averageLab + "%";

    }


    if (quizCountElement) {

        quizCountElement.textContent =
            averageQuiz + "%";

    }

}


checkAdmin();