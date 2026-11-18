# Authentication (Better Auth)

Cookie-session auth with email + password, built on [Better Auth](https://better-auth.com).
Backend only; the Next.js client is not implemented yet.

## Layout

| Path | Purpose |
| --- | --- |
| `src/modules/auth/auth.ts` | The single Better Auth instance (config, hooks, rate limits) |
| `src/modules/auth/auth.mailer.ts` | Email sending (SMTP, or console in dev) |
| `src/modules/auth/auth.validator.ts` | Sign-up / password rules (zod) |
| `src/modules/auth/auth.routes.ts` | `GET /api/me` |
| `src/middleware/auth.ts` | `requireAuth`, `optionalAuth` |
| `prisma/models/user.prisma` | `User`, `Profile`, `Session`, `Account`, `Verification` |

Auth endpoints are mounted at `/api/auth/*` in `src/app.ts` **before** `express.json()` (required by Better Auth).

## Environment variables

| Var | Required | Description |
| --- | --- | --- |
| `BETTER_AUTH_SECRET` | yes | ≥ 32 chars. `openssl rand -base64 32` |
| `BACKEND_URL` | yes | Public base URL of this API (not used by auth) |
| `BETTER_AUTH_URL` | yes | Public base URL Better Auth uses for OAuth callbacks and emailed links |
| `FRONTEND_URLS` | yes | Comma-separated frontend origins. Used for CORS **and** Better Auth `trustedOrigins` (CSRF, allowed `callbackURL`/`redirectTo`) |
| `AUTH_COOKIE_DOMAIN` | no | e.g. `.example.com` to share cookies across subdomains |
| `AUTH_CROSS_SITE_COOKIES` | no | `true` only if frontend and API are on different *sites* (sets `SameSite=None; Secure`) |
| `MAIL_FROM`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | prod | `SMTP_HOST` is mandatory when `NODE_ENV=production`. Unset in dev → emails are printed to the server console |

## Endpoints

All JSON, all under `/api/auth`. Requests from a browser must come from an origin in `FRONTEND_URLS` and use `credentials: 'include'`.

| Action | Method & path | Body |
| --- | --- | --- |
| Register | `POST /sign-up/email` | `{ email, password, callbackURL? }` (no name or other personal info required) |
| Login | `POST /sign-in/email` | `{ email, password, rememberMe? }` |
| Logout | `POST /sign-out` | `{}` |
| Session | `GET /get-session` | – |
| Resend verification | `POST /send-verification-email` | `{ email, callbackURL? }` |
| Verify email | `GET /verify-email?token=…&callbackURL=…` | – (link from email) |
| Request reset | `POST /request-password-reset` | `{ email, redirectTo }` |
| Reset password | `POST /reset-password` | `{ token, newPassword }` |
| Change password | `POST /change-password` | `{ currentPassword, newPassword, revokeOtherSessions? }` |

App endpoints (401 if not signed in):

- `GET /api/me` → `{ user, profile, completion }` (`profile` is `null` until first saved).
- `GET /api/me/profile` → `{ profile, completion }`.
- `PATCH /api/me/profile` → partial update, creates the profile on first write. Fields: `firstName, middleName, lastName, avatarUrl, phone, country, bio, dateOfBirth (YYYY-MM-DD)`; `null`/`""` clears a field.

## Users vs. profiles

`User` is account identity only (email, verification, role, active flag); credentials and linked providers (credential / google / github) live in `Account`. Personal info lives in the optional `Profile`.

Better Auth's Prisma adapter refuses to start without `user.name` / `user.image` columns, so they exist as nullable **compat columns that are always null**: `auth.ts` overwrites them on every write (and ignores `name` at sign-up). Never read or write them; use `Profile`.

`completion` = share of `COMPLETION_FIELDS` (`profile.completion.ts`) that are filled, computed on read, never stored.

## Social login

Set `GOOGLE_CLIENT_ID/SECRET` and/or `GITHUB_CLIENT_ID/SECRET` (a provider is enabled only when both are set); register `$BETTER_AUTH_URL/api/auth/callback/<provider>` as the redirect URI. Sign in from the client with `POST /api/auth/sign-in/social { provider, callbackURL }`. On first social sign-up the provider's name (split into first/last) and avatar seed the profile; existing profile values are never overwritten. A provider whose verified email matches an existing user is linked to that user.

### Behaviour

- **Register** → `200 { token: null, user }`; no session is created. A verification email is sent. Login is blocked (`403`) until the email is verified; each blocked login re-sends the email.
- **Verify email** → redirects (302) to `callbackURL` and signs the user in. `callbackURL` must be on a trusted origin, e.g. `http://localhost:3000/verified`.
- **Login** → `200 { redirect: false, token, user }` and sets the `trails.session_token` cookie (HttpOnly, `SameSite=Lax`, `Secure` in prod, 7-day sliding expiry).
- **Request reset** → always `200` (same message whether or not the email exists). The emailed link hits the API, which redirects to `redirectTo?token=<token>` on the frontend; the frontend then calls `POST /reset-password`. Link valid 1 hour; all sessions are revoked on reset.
- **Passwords**: 8–128 chars, at least one letter and one number (also enforced on reset/change).
- **Rate limits** (per IP): sign-in 5/min, sign-up 5/min, reset request 3/min, resend verification 3/min, others 100/min. Exceeding → `429`.
- Auth errors come from Better Auth as `{ "message": "…", "code": "…" }` with 4xx status (not the `{ success, message }` envelope used by the rest of the API). `/api/me` and `requireAuth` failures use the envelope.
- Sessions are checked against the DB on every request (no cookie cache), so sign-out, password reset and `isActive = false` take effect immediately.

### Example

```ts
await fetch(`${API}/api/auth/sign-in/email`, {
  method: 'POST',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password }),
});
```

## Protecting routes

```ts
import { requireAuth, optionalAuth } from '../../middleware/auth.js';

router.post('/', requireAuth, createThing);   // 401 if anonymous, 403 if deactivated
router.get('/', optionalAuth, listThings);    // req.auth set only when signed in

// in a handler
const userId = req.auth!.user.id;
```

`requireAuth` only answers *who is calling*. Roles, ownership and future org permissions belong in separate authorization checks in the business modules; `user.role` (`USER | ADMIN`) is available on `req.auth.user`.

> The existing `/api/experiences` write routes (POST/PATCH/DELETE) are **not** protected yet, because the admin panel doesn't send credentials. When the frontend is wired up, add `requireAuth` (plus an admin check) to them.

## Data model

- `User` keeps its uuid ids, so `Profile` and `SavedRecommendation` relations are untouched. New columns: `name`, `image`.
- Credentials and providers live in `Account` (`providerId = 'credential' | 'google' | 'github' | …`). The old `user.password_hash` and `oauth_account` were migrated into it and dropped (migration `20261105092353_better_auth`).
- **Existing password hashes** are copied as-is, but Better Auth only verifies its own scrypt format; users with hashes from another scheme must use "forgot password" once. (No real users existed when this was written.)
- `Session` and `Verification` hold sessions and one-time tokens.

## Adding social login later

1. Add a `socialProviders: { google: { clientId, clientSecret } }` block in `auth.ts` + env vars. No schema change.
2. Account linking is already enabled (`account.accountLinking`), so a Google sign-in with a verified matching email attaches to the existing user; users can also link while signed in.
3. Callback URL to register with the provider: `${BETTER_AUTH_URL}/api/auth/callback/<provider>`.

## Organizations later

Add `Organization` / `Membership` (userId, orgId, role) tables referencing `User.id`, or Better Auth's `organization` plugin. Nothing in the current schema needs to change; keep global `User.role` coarse.

## Running migrations

```bash
npm run db:migrate    # prisma migrate dev
npm run db:generate
```
