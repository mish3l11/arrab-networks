const allowedOrigins = new Set([
  "https://arrabnet.com",
  "https://www.arrabnet.com",
  "http://127.0.0.1:5500",
  "http://localhost:5500",
]);

function corsHeaders(origin: string | null) {
  const allowedOrigin = origin && allowedOrigins.has(origin)
    ? origin
    : "https://arrabnet.com";
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]!);
}

Deno.serve(async request => {
  const headers = corsHeaders(request.headers.get("origin"));
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers });
  }
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405, headers });
  }

  const origin = request.headers.get("origin");
  if (origin && !allowedOrigins.has(origin)) {
    return Response.json({ error: "Origin not allowed" }, { status: 403, headers });
  }

  let payload: { name?: unknown; email?: unknown; message?: unknown };
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400, headers });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  if (name.length < 2 || name.length > 100 || message.length < 5 || message.length > 5000) {
    return Response.json({ error: "Please check the form fields" }, { status: 400, headers });
  }
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid email address" }, { status: 400, headers });
  }

  const apiKey = Deno.env.get("RESEND_API_KEY");
  const recipient = Deno.env.get("CONTACT_RECIPIENT");
  const sender = Deno.env.get("CONTACT_SENDER");
  if (!apiKey || !recipient || !sender) {
    console.error("Feedback email service is not configured");
    return Response.json({ error: "Email service is not configured" }, { status: 503, headers });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: email,
      subject: `استفسار أو اقتراح من ${name}`,
      html: `<p><strong>الاسم:</strong> ${safeName}</p><p><strong>البريد:</strong> ${safeEmail}</p><p><strong>الرسالة:</strong></p><p>${safeMessage}</p>`,
    }),
  });

  if (!response.ok) {
    console.error("Email provider rejected a feedback message", response.status);
    return Response.json({ error: "Could not send message" }, { status: 502, headers });
  }
  return Response.json({ sent: true }, { headers });
});
