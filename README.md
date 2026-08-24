# Trails Nepal

Trails Nepal is a web frontend for discovering and planning treks in Nepal.

This repository currently contains a single Next.js application under `frontend/`.

## Tech stack

- Next.js (see `frontend/package.json`)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Leaflet + react-leaflet (maps)

## Project structure

- `frontend/`: Next.js app
  - `src/app/`: App Router routes (home, explore, compare, trek details)
  - `src/components/`: UI + feature components
  - `src/static/`: static trek/review/homepage data

## Getting started

### Prerequisites

- Node.js (recommend Node 20+)
- npm (the repo includes `package-lock.json`)

### Install

```bash
cd frontend
npm install
```

### Run the dev server

```bash
cd frontend
npm run dev
```

Then open `http://localhost:3000`.

## Scripts

Run these from `frontend/`:

- `npm run dev`: start development server
- `npm run build`: production build
- `npm run start`: start production server
- `npm run lint`: run ESLint

## Notes

- The app metadata (title/description/icons) is defined in `frontend/src/app/layout.tsx`.
- If you make framework-level changes, check `frontend/AGENTS.md` for project-specific guidance.
