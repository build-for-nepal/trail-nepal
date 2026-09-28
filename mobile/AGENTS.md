# Trails Nepal mobile — agent guide

Scope: **`mobile/` only.** This is the Expo / React Native app. The Next.js web
app lives in `frontend/` and is a different stack with different rules.

> **The rules in `frontend/AGENTS.md` do NOT apply here.** That file mandates
> Tailwind utility classes, forbids CSS files, and assumes the DOM. This app has
> no Tailwind and no DOM: styling is `StyleSheet.create`, and there is no
> `className`. Do not install NativeWind or put `className` on React Native
> primitives unless that decision has been made explicitly.

---

## 1. Orientation

```
mobile/
├─ src/app/          Expo Router routes  ← the router root
│  ├─ _layout.tsx    root layout: Stack + GestureHandler + SafeAreaProvider
│  └─ index.tsx      home screen
├─ src/components/   shared presentational components
├─ src/hooks/        reusable hooks
├─ src/lib/          pure helpers, no React
├─ src/types/        shared type contracts
├─ app.json          Expo config
└─ eslint.config.js  flat config, extends eslint-config-expo
```

**The router root is `src/app/`, not a top-level `app/`.** SDK 57's default
template moved it under `src/`. Adding a top-level `app/` will confuse routing.

`src/components`, `src/hooks`, `src/lib`, `src/types` are currently empty and
hold only a `.gitkeep`. They mirror `frontend/src/` deliberately — put new code
in the matching folder so the two apps stay navigable by the same mental model.

---

## 2. Commands

Run everything from **`mobile/`**, not the repo root.

| Command                           | Purpose                                               |
| --------------------------------- | ----------------------------------------------------- |
| `npm start`                       | Expo dev server                                       |
| `npm run android` / `ios` / `web` | start on a platform                                   |
| `npm run typecheck`               | `tsc --noEmit`                                        |
| `npm run lint`                    | `expo lint` (eslint flat config)                      |
| `npm run format`                  | `prettier --write .`                                  |
| `npx expo export --platform web`  | full Metro bundle — the closest thing to a build gate |

**There is no test framework**, matching the rest of this repo. Do not claim a
change is "tested". The honest gate is:

```
npm run typecheck  &&  npm run lint  &&  npx expo export --platform web
```

`npx --yes expo-doctor` is also worth running after dependency changes.

**Nothing in CI covers this folder.** `.github/workflows/deploy-github-pages.yml`
only builds `frontend/` on push to `main`. Mobile typecheck, lint and bundle are
entirely the author's responsibility.

---

## 3. Windows / tooling traps

These cost real debugging time already.

- **`npx` prompts hang background shells.** `create-expo-app` asks "Select an
  Expo SDK version" and `expo-doctor` asks "Ok to proceed?". **`--yes` does not
  suppress the SDK prompt.** Set `$env:CI=1` to force non-interactive.
- **Do not rely on `create-expo-app`'s bundled `npm install`.** It stalled for
  > 25 minutes with CPU crawling and no `node_modules`. Killing it and running
  > `npm install` directly in `mobile/` finished in ~1 minute / 594 packages.
- **Metro's web export is heavy** — roughly 70 s cold, ~2 GB RSS. A warm rebuild
  is ~5 s. Not a hang; let it finish.
- A leading `cd` is sometimes stripped from a piped PowerShell command. Confirm
  with `Get-Location` before trusting output.
- The `frontend/` dev server is often already running. Filter on
  `Get-CimInstance Win32_Process` CommandLine before killing any `node` process
  so you don't take it down.

---

## 4. State of the scaffold

This is a **deliberately minimal** scaffold, not a production setup. Known gaps,
so you don't mistake them for accidents:

- **No app icon, splash, or favicon.** `assets/` was deleted on purpose because
  it held only Expo-branded placeholders. Restoring branding needs the image
  files **and** four `app.json` keys put back: `icon`,
  `android.adaptiveIcon`, `web.favicon`, and the `expo-splash-screen` plugin
  entry. Dropping PNGs in alone will not wire them up.
- **No `eas.json`, no `ios.bundleIdentifier`, no `android.package`.** Required
  before any EAS build or store submission.
- **No env handling.** Expo exposes `EXPO_PUBLIC_*` only, inlined at build time —
  treat them as public. There is no `.env.example` yet.
- **No error boundary and no explicit `+not-found.tsx`.** Expo Router generates a
  fallback; production apps should define both.
- `/ios` and `/android` are git-ignored (continuous native generation). Generate
  them with `npx expo prebuild` when a native module needs it; do not commit
  them without deciding to go bare.

### Not yet installed, but planned

MapLibre (`@maplibre/maplibre-react-native`), TanStack Query, `victory-native`,
`lucide-react-native`, and a shared `packages/content` workspace holding
`frontend/src/static` + `src/types` + `lib/weather`. Adding MapLibre requires a
config plugin and a prebuild — it is not a plain `npm install`.

---

## 5. Conventions

- **TypeScript is strict.** Do not use `any`, and do not weaken existing types.
- Import via the `@/*` alias (→ `./src/*`), not long relative chains.
- `react-native-reanimated` 4 requires `react-native-worklets`; both are already
  installed. Do not remove either.
- Keep `_layout.tsx` as the single place that mounts providers. Add new providers
  there rather than wrapping individual screens.
- Prettier config matches `frontend/.prettierrc` exactly (single quotes, semi,
  width 2, trailing commas). Keep them in step so the two apps do not diverge.
- Mobile is on TypeScript `~6.0.3` while `frontend/` is on `^5`. Reconcile before
  the two apps share a workspace package.

---

## 6. Do not touch

| Path                               | Why                                         |
| ---------------------------------- | ------------------------------------------- |
| `node_modules/`, `.expo/`, `dist/` | generated                                   |
| `/ios`, `/android`                 | regenerated by `expo prebuild`, git-ignored |
| `package-lock.json`                | edit via `npm install`, never by hand       |
