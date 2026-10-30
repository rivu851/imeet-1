# IMEET 2026

Landing page for IMEET 2026, the departmental fest of the Department of Information Technology, RCCIIT, Kolkata.

Built with Next.js, Tailwind CSS, GSAP, Framer Motion and Lenis.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

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
