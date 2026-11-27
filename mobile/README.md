# Trails Nepal mobile app

The Expo / React Native app for Trails Nepal: browse treks, day hikes and cultural tours,
read a trip's details, and follow its route on a map.

It is a separate app from the website in `frontend/`. Run every command below from
`mobile/`.

## Tech stack

- Expo SDK 57 with Expo Router
- React Native and React 19
- TypeScript
- NativeWind (Tailwind CSS v3) for styling
- MapLibre React Native (maps)

## Project structure

- `src/app/`: Expo Router routes (tabs, trek / hike / cultural tour pages, trivia)
- `src/features/`: one folder per feature
  - `explore/`: trip cards, search box, filters
  - `trip-detail/`: detail page, packing list, altitude & safety, weather forecast
  - `trail-map/`: map, route data, elevation chart
  - `trivia/`: trivia hub and game
- `src/components/`: shared UI (tab bar, accordion, bottom sheet)
- `assets/images/`: bundled photos and icons
- `tailwind.config.js`: colours and fonts

## Getting started

### Prerequisites

- Node.js 20.19 or newer and npm
- Android Studio (Android SDK and JDK), with a phone or an emulator

### Install

```bash
cd mobile
npm install
```

### Run on Android

```bash
npm run android
```

This builds the app, installs it on your phone or emulator, and starts the dev server.
The first build takes several minutes.

After that, if you only changed JavaScript or TypeScript, this is enough:

```bash
npm start
```

### Backend and environment

Trip content is bundled, so Explore and the detail screens work on their own. Signing
in, signing up and the Profile tab need the API in `backend/` running.

From `backend/`, copy `.env.example` to `.env` and fill in `DATABASE_URL` and a
`BETTER_AUTH_SECRET` of at least 32 characters, then:

```bash
npm install
npm run db:generate
npx prisma migrate dev
npm run db:seed
npm run dev
```

From `mobile/`, copy `.env.example` to `.env` and set `EXPO_PUBLIC_API_URL` to your
machine's address on the network, e.g. `http://192.168.0.104:4000`. `localhost` is the
phone itself, not your computer, so it will not work from a device; keep the phone on
the same Wi-Fi.

Two things that bite when switching branches:

- `backend/src/generated/prisma` is git-ignored build output. If the backend build fails
  with type errors about `Profile` columns, run `npm run db:generate`.
- If Prisma reports that the migration history has diverged, run
  `npx prisma migrate reset` and reseed. That drops local data.

### Google sign-in

Optional — email and password need none of this.

Set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in `backend/.env`. One OAuth client of
type **Web application** covers web and mobile: the app reaches Google through the
backend, so no Android or iOS client is needed.

Google only accepts `localhost` or public HTTPS as a redirect URI — it rejects
`192.168.x.x` and `10.0.2.2`. So to test on a device locally, expose the backend:

```bash
npx cloudflared tunnel --url http://localhost:4000
```

then set `BETTER_AUTH_URL` (backend) and `EXPO_PUBLIC_API_URL` (mobile) to the tunnel
URL, and register `<tunnel-url>/api/auth/callback/google` on the client. While the
consent screen is in Testing, only accounts listed under **Audience → Test users** can
sign in; anyone else sees "access blocked", which looks like a bug and is not.

## Scripts

- `npm start`: start the dev server
- `npm run android`: build and install the Android app
- `npm run web`: run in the browser
- `npm run typecheck`: check types
- `npm run lint`: run ESLint
- `npm run format`: format with Prettier

## Notes

- The app needs its own build (`npm run android`), not Expo Go. Maps do not work in Expo
  Go or in the browser and show a placeholder there.
- Run `npm run android` again after adding a package with native code or changing
  `app.json`.
- Trip content is copied from the website's static data in `frontend/`. Nothing syncs it,
  so copy changes across by hand. Each data file names its source in a comment at the top.
- `EXPO_PUBLIC_API_URL` is needed for anything behind an account; see "Backend and
  environment" above. Maps and the weather forecast need an internet connection.
- The Shortlist and My trip tabs are placeholders, and the search box and filters on
  Explore do not change the list yet. Profile holds sign in and sign out.
- Android only so far. iOS is not set up.
- There are no tests. Run `npm run typecheck` and `npm run lint` before you commit.
