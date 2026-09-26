const SESSION_COOKIE = "niti_session";
const SESSION_DAYS = 7;

const corsHeaders = (request, env) => {
  const origin = request.headers.get("Origin") || "";
  const allowed = (env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const allowOrigin =
    allowed.length === 0
      ? origin || "*"
      : allowed.includes(origin)
        ? origin
        : allowed[0];

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Credentials": "true",
    "Vary": "Origin"
  };
};

const json = (data, status, headers) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      ...headers,
      "Content-Type": "application/json; charset=utf-8"
    }
  });

function bytesToHex(bytes) {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function hexToBytes(hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return bytes;
}

function safeEqual(a, b) {
  if (a.length !== b.length) return false;

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return result === 0;
}

async function hashPassword(password, saltHex) {
  const salt = saltHex ? hexToBytes(saltHex) : crypto.getRandomValues(new Uint8Array(16));

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );

  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256"
    },
    key,
    256
  );

  return {
    salt: bytesToHex(salt),
    hash: bytesToHex(new Uint8Array(bits))
  };
}

async function verifyPassword(password, saltHex, expectedHash) {
  const result = await hashPassword(password, saltHex);
  return safeEqual(result.hash, expectedHash);
}

async function randomToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return bytesToHex(bytes);
}

async function sha256(value) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value)
  );

  return bytesToHex(new Uint8Array(digest));
}

function parseCookies(request) {
  const header = request.headers.get("Cookie") || "";
  const cookies = {};

  for (const part of header.split(";")) {
    const index = part.indexOf("=");

    if (index === -1) continue;

    const key = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();

    cookies[key] = decodeURIComponent(value);
  }

  return cookies;
}

function sessionCookie(token, maxAge = SESSION_DAYS * 86400) {
  return `${SESSION_COOKIE}=${encodeURIComponent(token)}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`;
}

async function getSession(request, env) {
  if (!env.DB) return null;

  const cookies = parseCookies(request);
  const token = cookies[SESSION_COOKIE];

  if (!token) return null;

  const tokenHash = await sha256(token);

  const result = await env.DB.prepare(`
    SELECT
      s.id AS session_id,
      s.expires_at,
      u.id,
      u.email,
      u.full_name,
      u.role,
      u.state_code,
      u.state_name,
      u.is_active
    FROM sessions s
    JOIN users u ON u.id = s.user_id
    WHERE s.session_token_hash = ?
      AND s.expires_at > CURRENT_TIMESTAMP
      AND u.is_active = 1
    LIMIT 1
  `)
    .bind(tokenHash)
    .first();

  if (!result) return null;

  await env.DB.prepare(`
    UPDATE sessions
    SET last_seen_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `)
    .bind(result.session_id)
    .run();

  return result;
}

async function writeActivity(env, userId, action, resourceType = null, metadata = null) {
  if (!env.DB) return;

  await env.DB.prepare(`
    INSERT INTO activity_log
      (user_id, action, resource_type, metadata_json)
    VALUES (?, ?, ?, ?)
  `)
    .bind(
      userId || null,
      action,
      resourceType,
      metadata ? JSON.stringify(metadata) : null
    )
    .run();
}

function publicUser(user) {
  if (!user) return null;

  return {
    id: user.id,
    email: user.email,
    full_name: user.full_name,
    role: user.role,
    state_code: user.state_code,
    state_name: user.state_name
  };
}

function requireSession(session) {
  return session
    ? null
    : json({ error: "Authentication required." }, 401, {});
}

function textFromInteraction(data) {
  if (
    typeof data?.output_text === "string" &&
    data.output_text.trim()
  ) {
    return data.output_text.trim();
  }

  const steps = Array.isArray(data?.steps) ? data.steps : [];
  const texts = [];

  for (const step of steps) {
    const content = Array.isArray(step?.content)
      ? step.content
      : [];

    for (const part of content) {
      if (
        part?.type === "text" &&
        typeof part.text === "string"
      ) {
        texts.push(part.text);
      }
    }
  }

  return texts.join("\n").trim();
}

async function handleBootstrap(request, env, headers) {
  if (!env.DB) {
    return json({ error: "Database is not configured." }, 500, headers);
  }

  if (!env.BOOTSTRAP_TOKEN) {
    return json(
      { error: "Bootstrap is disabled." },
      403,
      headers
    );
  }

  const body = await request.json();

  if (body.bootstrap_token !== env.BOOTSTRAP_TOKEN) {
    return json({ error: "Invalid bootstrap token." }, 403, headers);
  }

  const existing = await env.DB
    .prepare("SELECT COUNT(*) AS count FROM users")
    .first();

  if (Number(existing?.count || 0) > 0) {
    return json(
      { error: "An administrator already exists." },
      409,
      headers
    );
  }

  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");
  const fullName = String(body.full_name || "").trim();

  if (!email || !password || !fullName) {
    return json(
      { error: "Full name, email and password are required." },
      400,
      headers
    );
  }

  if (password.length < 12) {
    return json(
      { error: "Password must contain at least 12 characters." },
      400,
      headers
    );
  }

  const passwordData = await hashPassword(password);

  const result = await env.DB.prepare(`
    INSERT INTO users
      (email, password_hash, password_salt, full_name, role)
    VALUES (?, ?, ?, ?, 'super_admin')
  `)
    .bind(
      email,
      passwordData.hash,
      passwordData.salt,
      fullName
    )
    .run();

  return json(
    {
      success: true,
      user_id: result.meta.last_row_id,
      message: "Super Admin created successfully."
    },
    201,
    headers
  );
}

async function handleLogin(request, env, headers) {
  const body = await request.json();

  const email = String(body.email || "")
    .trim()
    .toLowerCase();

  const password = String(body.password || "");

  if (!email || !password) {
    return json(
      { error: "Email and password are required." },
      400,
      headers
    );
  }

  const user = await env.DB
    .prepare(`
      SELECT *
      FROM users
      WHERE email = ?
        AND is_active = 1
      LIMIT 1
    `)
    .bind(email)
    .first();

  if (!user) {
    return json(
      { error: "Invalid email or password." },
      401,
      headers
    );
  }

  const valid = await verifyPassword(
    password,
    user.password_salt,
    user.password_hash
  );

  if (!valid) {
    return json(
      { error: "Invalid email or password." },
      401,
      headers
    );
  }

  const token = await randomToken();
  const tokenHash = await sha256(token);

  await env.DB.prepare(`
    DELETE FROM sessions
    WHERE expires_at <= CURRENT_TIMESTAMP
  `).run();

  await env.DB.prepare(`
    INSERT INTO sessions
      (session_token_hash, user_id, expires_at)
    VALUES (
      ?,
      ?,
      datetime('now', '+7 days')
    )
  `)
    .bind(tokenHash, user.id)
    .run();

  await writeActivity(
    env,
    user.id,
    "login",
    "session"
  );

  const response = json(
    {
      success: true,
      user: publicUser(user)
    },
    200,
    headers
  );

  response.headers.append(
    "Set-Cookie",
    sessionCookie(token)
  );

  return response;
}

async function handleLogout(request, env, headers) {
  const cookies = parseCookies(request);
  const token = cookies[SESSION_COOKIE];

  if (token && env.DB) {
    const tokenHash = await sha256(token);

    const session = await env.DB
      .prepare(`
        SELECT user_id
        FROM sessions
        WHERE session_token_hash = ?
        LIMIT 1
      `)
      .bind(tokenHash)
      .first();

    if (session) {
      await writeActivity(
        env,
        session.user_id,
        "logout",
        "session"
      );
    }

    await env.DB.prepare(`
      DELETE FROM sessions
      WHERE session_token_hash = ?
    `)
      .bind(tokenHash)
      .run();
  }

  const response = json(
    { success: true },
    200,
    headers
  );

  response.headers.append(
    "Set-Cookie",
    sessionCookie("", 0)
  );

  return response;
}

async function handleMe(request, env, headers) {
  const session = await getSession(request, env);

  if (!session) {
    return json(
      { authenticated: false },
      200,
      headers
    );
  }

  return json(
    {
      authenticated: true,
      user: publicUser(session)
    },
    200,
    headers
  );
}

async function handleAsk(request, env, headers) {
  const session = await getSession(request, env);

  if (!session) {
    return json(
      { error: "Authentication required." },
      401,
      headers
    );
  }

  if (!env.GEMINI_API_KEY) {
    return json(
      {
        error:
          "AI service is not configured on the Worker."
      },
      500,
      headers
    );
  }

  const body = await request.json();

  const prompt = String(body.prompt || "").trim();
  const context = String(body.context || "").trim();

  const model = String(
    body.model || "gemini-3.8-flash"
  );

  const thinkingLevel = [
    "low",
    "medium",
    "high"
  ].includes(body.thinking_level)
    ? body.thinking_level
    : "low";

  if (!prompt) {
    return json(
      { error: "Prompt is required." },
      400,
      headers
    );
  }

  const systemInstruction =
    "You are the document intelligence assistant for the NITI Intelligence Portal. " +
    "Answer using the supplied document context when available. " +
    "Be factual, concise, structured, and clearly distinguish information " +
    "found in the document from inference. Never invent figures, dates, " +
    "names, sources, decisions, or actions.";

  const input = context
    ? `DOCUMENT CONTEXT:\n${context}\n\nUSER REQUEST:\n${prompt}`
    : prompt;

  const endpoint =
    "https://generativelanguage.googleapis.com/v1beta/interactions";

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
    return json(
      {
        error:
          data?.error?.message ||
          "AI request failed."
      },
      geminiResponse.status,
      headers
    );
  }

  const answer = textFromInteraction(data);

  if (!answer) {
    return json(
      {
        error:
          "The intelligence service returned no text response."
      },
      502,
      headers
    );
  }

  await writeActivity(
    env,
    session.id,
    "analysis_request",
    "ai",
    {
      model,
      prompt_length: prompt.length
    }
  );

  return json(
    {
      answer,
      model: data?.model || model,
      usage: data?.usage || null,
      interaction_id: data?.id || null
    },
    200,
    headers
  );
}

export default {
  async fetch(request, env) {
    const headers = corsHeaders(request, env);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers
      });
    }

    const url = new URL(request.url);

    try {
      if (
        request.method === "POST" &&
        url.pathname === "/auth/bootstrap"
      ) {
        return await handleBootstrap(
          request,
          env,
          headers
        );
      }

      if (
        request.method === "POST" &&
        url.pathname === "/auth/login"
      ) {
        return await handleLogin(
          request,
          env,
          headers
        );
      }

      if (
        request.method === "POST" &&
        url.pathname === "/auth/logout"
      ) {
        return await handleLogout(
          request,
          env,
          headers
        );
      }

      if (
        request.method === "GET" &&
        url.pathname === "/auth/me"
      ) {
        return await handleMe(
          request,
          env,
          headers
        );
      }

      if (
        request.method === "POST" &&
        url.pathname === "/ask"
      ) {
        return await handleAsk(
          request,
          env,
          headers
        );
      }

      if (url.pathname === "/") {
        return json(
          {
            service: "NITI Intelligence Portal",
            status: "ok"
          },
          200,
          headers
        );
      }

      return json(
        { error: "Not found." },
        404,
        headers
      );
    } catch (error) {
      console.error(error);

      return json(
        {
          error:
            error?.message ||
            "Unexpected server error."
        },
        500,
        headers
      );
    }
  }
};
