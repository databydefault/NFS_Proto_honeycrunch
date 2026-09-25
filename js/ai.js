/* NITI Intelligence Portal - Gemini 3.8 Flash client helper.
   The Gemini API key must NEVER be placed in this file.
   Requests go to the Cloudflare Worker configured in config.js. */
window.NITI_AI = {
  async ask(prompt, context = "", options = {}) {
    const base = (window.NITI_CONFIG?.WORKER_URL || "").replace(/\/$/, "");
    if (!base) throw new Error("Cloudflare Worker URL is not configured.");

    const response = await fetch(base + "/ask", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        prompt,
        context,
        model: options.model || "gemini-3.8-flash",
        thinking_level: options.thinking_level || "low"
      })
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const err = new Error(data.error || `AI request failed (${response.status})`);
      err.status = response.status;
      throw err;
    }
    return data.answer ?? data;
  }
};
