# Secure access architecture

The portal is designed to use an authenticated backend rather than browser-side credentials.

Recommended production path:
1. Put the application/API behind an access policy.
2. Require organizational identity before protected API requests reach the Worker.
3. Read the authenticated identity in the Worker and enforce application roles server-side.
4. Store users, roles, saved work and audit metadata in D1.
5. Keep model/API credentials only as Worker secrets.

The current GitHub Pages deployment remains a public static frontend. A real login boundary for the whole application should be introduced when the frontend is moved behind a protected Cloudflare hostname/Pages deployment. Do not treat a browser-only login screen as security.
