# TRACE — Missing Cases

A responsive React + Vite + Tailwind missing-persons awareness and case-management prototype.

## Run locally

```bash
npm install
npm run dev
```

## Firebase setup

1. Create a Firebase project and enable **Email/Password** authentication, Firestore, and Storage.
2. Copy `.env.example` to `.env` and add your Firebase web configuration values.
3. Add Firestore rules appropriate for your organisation before deploying.

Without credentials, the interface runs in demo mode and stores a submitted report locally for preview.

## Deploy

Deploy to Vercel or Netlify using build command `npm run build` and output folder `dist`. Add the `VITE_FIREBASE_*` variables in the deployment provider's environment settings.

## Features

- Home, authentication, reporting, searchable/filterable cases, details and admin dashboard
- Leaflet / OpenStreetMap location views
- QR case links and PDF poster downloads
- Firebase-ready Auth, Firestore and Storage integration points
- Mobile-responsive Tailwind design
