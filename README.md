# IMEET 2026

Landing page for IMEET 2026, the departmental fest of the Department of Information Technology, RCCIIT, Kolkata.

Built with Next.js, Tailwind CSS, GSAP, Framer Motion and Lenis.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Backend and deployment

The frontend proxies `/api/*` and `/auth/*` to the Express service using a server-side rewrite. For local development, copy `.env.example` to `.env.local`; the default points to `http://localhost:3412`. Production defaults to `https://imeet-be-n19i.onrender.com`; set the server-only `BACKEND_URL` in the deployment environment to override it.

For non-Vercel production deployments, set the server-only `BACKEND_URL` to the publicly reachable HTTPS origin of the Express service. Do not use `localhost`, a private IP, or a `NEXT_PUBLIC_` variable.

The Express deployment must set `AUTH0_BASE_URL` and `PUBLIC_FRONTEND_URL` to the deployed frontend origin. Add that frontend origin's `/auth/callback` URL and origin to the Auth0 application's allowed callback and web origin settings.

## Structure

- `src/app` - App Router pages for home, about, HOD desk, events, holidays, signup and contact; includes loading, error, not-found and favicon assets
- `src/components/common` - site navbar, footer and footer wordmark
- `src/components/home` - landing-page sections and their supporting components
- `src/components/events` - event highlights section
- `src/components/hod-desk` - HOD desk section
- `src/components/signup` - registration section
- `src/components/ui` - reusable animated UI components
- `src/data` and `src/types` - event details and shared event type
- `public/images/imeet` - IMEET artwork
- `public/images/banners` - hero banner artwork
- `public/images/events` - event photography
- `public/images/backgrounds` - section backgrounds
- `public/media` - video assets
- `public/fonts` - headline font (personal-use licence, see `Readme.txt`)
