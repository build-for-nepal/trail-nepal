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
- No environment variables or backend are needed. Maps and the weather forecast need an
  internet connection.
- The Shortlist, My trip and Profile tabs are placeholders, and the search box and filters
  on Explore do not change the list yet.
- Android only so far. iOS is not set up.
- There are no tests. Run `npm run typecheck` and `npm run lint` before you commit.
