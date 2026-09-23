/*
 * عرّاب الشبكات
 * Supabase Configuration
 */

/* =========================
   SUPABASE PROJECT
========================= */

const SUPABASE_URL = "https://ngwewyieyfnswjoguzhd.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_T-__6lQVB5wuIFvBPznYvQ_WHfFGXfD";


/* =========================
   SUPABASE CLIENT
========================= */

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );

