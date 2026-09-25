const corsHeaders = (request, env) => {
  const origin = request.headers.get("Origin") || "";
  const allowed = (env.ALLOWED_ORIGINS || "")
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

  const allowOrigin = allowed.length === 0
    ? "*"
    : (allowed.includes(origin) ? origin : allowed[0]);

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
};

function textFromInteraction(data) {
  if (typeof data?.output_text === "string" && data.output_text.trim()) return data.output_text.trim();
  const steps = Array.isArray(data?.steps) ? data.steps : [];
  const texts = [];
  for (const step of steps) {
    const content = Array.isArray(step?.content) ? step.content : [];
    for (const part of content) {
      if (part?.type === "text" && typeof part.text === "string") texts.push(part.text);
    }
  }
  return texts.join("\n").trim();
}

export default {
  async fetch(request, env) {
    const headers = corsHeaders(request, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    const url = new URL(request.url);

    if (request.method !== "POST" || url.pathname !== "/ask") {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { ...headers, "Content-Type": "application/json" }
      });
    }

    if (!env.GEMINI_API_KEY) {
      return new Response(JSON.stringify({
        error: "GEMINI_API_KEY is not configured on the Cloudflare Worker."
      }), {
        status: 500,
        headers: { ...headers, "Content-Type": "application/json" }
      });
    }

    try {
      const body = await request.json();
      const prompt = String(body.prompt || "").trim();
      const context = String(body.context || "").trim();
      const model = String(body.model || "gemini-3.8-flash");
      const thinkingLevel = ["low", "medium", "high"].includes(body.thinking_level)
        ? body.thinking_level
        : "low";

      if (!prompt) {
        return new Response(JSON.stringify({ error: "Prompt is required." }), {
          status: 400,
          headers: { ...headers, "Content-Type": "application/json" }
        });
      }

      const systemInstruction =
        "You are the document intelligence assistant for the NITI Intelligence Portal. " +
        "Answer using the supplied document context when available. Be factual, concise, " +
        "structured, and clearly distinguish information found in the document from inference. " +
        "Never invent figures, dates, names, sources, decisions, or actions.";

      const input = context
        ? `DOCUMENT CONTEXT:\n${context}\n\nUSER REQUEST:\n${prompt}`
        : prompt;

      const endpoint = "https://generativelanguage.googleapis.com/v1beta/interactions";
      const geminiResponse = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": env.GEMINI_API_KEY
        },
        body: JSON.stringify({
          model,
          input,
          system_instruction: systemInstruction,
          generation_config: {
            thinking_level: thinkingLevel
          }
        })
      });

      const data = await geminiResponse.json().catch(() => ({}));

      if (!geminiResponse.ok) {
        return new Response(JSON.stringify({
          error: data?.error?.message || "Gemini API request failed."
        }), {
          status: geminiResponse.status,
          headers: { ...headers, "Content-Type": "application/json" }
        });
      }

      const answer = textFromInteraction(data);
      if (!answer) {
        return new Response(JSON.stringify({
          error: "Gemini returned no text response."
        }), {
          status: 502,
          headers: { ...headers, "Content-Type": "application/json" }
        });
      }

      return new Response(JSON.stringify({
        answer,
        model: data?.model || model,
        usage: data?.usage || null,
        interaction_id: data?.id || null
      }), {
        status: 200,
        headers: { ...headers, "Content-Type": "application/json" }
      });

    } catch (error) {
      return new Response(JSON.stringify({
        error: error?.message || "Unexpected server error."
      }), {
        status: 500,
        headers: { ...headers, "Content-Type": "application/json" }
      });
    }
  }
};
