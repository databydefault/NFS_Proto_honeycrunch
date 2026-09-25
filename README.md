# NITI Intelligence Portal — GitHub Pages + Cloudflare Worker + Gemini

## Architecture

GitHub Pages hosts the static portal frontend.

The browser sends AI requests to a Cloudflare Worker.

The Cloudflare Worker calls Google Gemini using the `GEMINI_API_KEY` secret.

The Gemini API key is never exposed in the frontend or committed to GitHub.

## 1. Deploy the frontend

Push this repository to GitHub and enable GitHub Pages for the repository.

After deployment, your frontend will be available at your GitHub Pages URL.

## 2. Deploy the Cloudflare Worker

From the `worker` directory:

```bash
npm install
npx wrangler login
npx wrangler secret put GEMINI_API_KEY
npm run deploy
```

Paste your Gemini API key when prompted.

The Worker will give you a URL similar to:

```text
https://niti-intelligence-api.<your-subdomain>.workers.dev
```

## 3. Configure the frontend

Open:

```text
js/config.js
```

Set:

```js
window.NITI_CONFIG = {
  WORKER_URL: "https://YOUR-WORKER-URL.workers.dev"
};
```

Commit and push the change.

## 4. Restrict CORS

For production, set the Cloudflare Worker variable:

```text
ALLOWED_ORIGINS=https://YOUR-USERNAME.github.io
```

If the repository is deployed as a project site, include the full project origin, for example:

```text
ALLOWED_ORIGINS=https://YOUR-USERNAME.github.io
```

Do not put the Gemini API key in `index.html`, JavaScript, GitHub Actions, or any public frontend file.

## Gemini model

The frontend defaults to:

```text
gemini-3.8-flash
```

You can change the model in `js/ai.js` or pass another supported model through the request.

## Important

The existing portal contains document upload, extraction, data insights, audio, presentation, and document Q&A UI. This repository provides the Gemini request path through the Cloudflare Worker. Existing non-AI browser functionality remains in the portal.

Audio playback can continue using browser text-to-speech. Gemini is used for text generation unless a separate speech service is added.

## Files

- `index.html` — portal frontend
- `css/styles.css` — extracted portal styles
- `js/app.js` — portal application
- `js/ai.js` — Gemini/Worker client
- `js/config.js` — Worker URL configuration
- `worker/src/index.js` — Cloudflare Worker + Gemini API proxy
- `worker/wrangler.toml` — Worker configuration
- `worker/package.json` — Worker dependencies/scripts


## Current Gemini integration
The Worker uses Google Gemini 3.8 Flash through the Interactions API. The API key remains a Cloudflare secret named `GEMINI_API_KEY`; never commit it to GitHub.
