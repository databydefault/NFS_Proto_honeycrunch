# NITI Intelligence Portal

Development Monitoring & State Intelligence workspace.

This repository contains the browser application and the backend scaffold used for document processing, analysis, data insights, presentations, audio and document Q&A.

## Product principles

- Institutional, system-oriented interface.
- No personal/developer attribution in the product.
- No provider or model branding in the user-facing interface.
- Credentials remain server-side.
- AI/model providers are implementation details and can be replaced without changing the portal UI.
- Document-grounded analysis should not invent facts.
- Large documents should be processed locally where practical and sent to the analysis service selectively.

## Security

See `security/README.md` and `security/schema.sql` for the recommended authenticated-backend architecture and D1 data model.

The current static GitHub Pages deployment is not itself a secure authentication boundary. For production access control, place the application/API behind an authenticated Cloudflare hostname/Pages deployment and enforce roles in the backend.
