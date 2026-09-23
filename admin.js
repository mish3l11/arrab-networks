async function checkAdmin() {
    const loading = document.getElementById("loading");
    const error = document.getElementById("error");
    const adminContent = document.getElementById("adminContent");

    try {
        const { data: { user }, error: authError } =
            await supabaseClient.auth.getUser();

        if (authError || !user) {
            throw new Error("يجب تسجيل الدخول أولاً.");
        }

        const { data, error: userError } = await supabaseClient
            .from("users")
            .select("is_admin")
            .eq("auth_id", user.id)
            .single();

        if (userError || !data || data.is_admin !== true) {
            throw new Error("ليس لديك صلاحية للوصول إلى لوحة الإدارة.");
        }

        loading.style.display = "none";
        adminContent.style.display = "block";

    } catch (errorMessage) {
        loading.style.display = "none";
        error.style.display = "block";
        error.textContent = errorMessage.message;
    }
}

checkAdmin();