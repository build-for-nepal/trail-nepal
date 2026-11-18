import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { APIError, createAuthMiddleware } from 'better-auth/api';
import { db } from '../../config/db.js';
import { env } from '../../config/env.js';
// Email delivery is off for now (verification + password reset). Restore with
// the blocks marked DISABLED below.
// import { sendMail } from './auth.mailer.js';
import { seedProfileFromProvider } from '../profile/profile.service.js';
import { passwordSchema, signUpBodySchema } from './auth.validator.js';

const DAY = 60 * 60 * 24;

// Better Auth's core user model has `name` / `image`, but this app keeps
// personal info in `Profile`; the `user` columns are compat-only and must stay
// null. Hook results are MERGED over the original data, so the hooks below
// overwrite them with null rather than omitting them. For social sign-ups the
// original values are parked here (keyed by email, within one request) so the
// post-create hook can seed the profile.
type PendingProfile = { name?: string | null; image?: string | null };
const pendingProfiles = new Map<string, PendingProfile>();

function stripPersonalFields<T extends Record<string, unknown>>(data: T) {
  const { name, image, ...rest } = data as T & PendingProfile;
  return {
    // Better Auth types name as string; the compat column is nullable.
    rest: { ...rest, name: null as unknown as string, image: null },
    personal: { name, image } as PendingProfile,
  };
}

const socialProviders = {
  ...(env.auth.google && { google: env.auth.google }),
  ...(env.auth.github && { github: env.auth.github }),
};

// Single Better Auth instance. Business modules must not import this directly;
// they use the middleware in middleware/auth.ts.
//
// Social login: set GOOGLE_CLIENT_ID/SECRET and/or GITHUB_CLIENT_ID/SECRET.
// Linking is enabled below and uses the `account` table, so one user can hold
// credential + google + github accounts. Authentication never depends on
// personal info; provider name/avatar only seed the optional Profile.
export const auth = betterAuth({
  appName: 'Trails Nepal',
  baseURL: env.auth.baseUrl,
  basePath: '/api/auth',
  secret: env.auth.secret,

  database: prismaAdapter(db, { provider: 'postgresql' }),

  // Origins allowed to call auth endpoints with cookies and to be used as
  // callbackURL / redirectTo targets (CSRF + open-redirect protection).
  trustedOrigins: env.frontendUrls,

  emailAndPassword: {
    enabled: true,
    // DISABLED (future): verified email required before sign-in.
    // requireEmailVerification: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    // DISABLED (future): forgot / reset password emails.
    // resetPasswordTokenExpiresIn: 60 * 60,
    // revokeSessionsOnPasswordReset: true,
    // sendResetPassword: async ({ user, url }) => {
    //   sendMail({
    //     to: user.email,
    //     subject: 'Reset your Trails Nepal password',
    //     text: `Hi,\n\nReset your password using this link (valid for 1 hour):\n${url}\n\nIf you did not request this, ignore this email.`,
    //   });
    // },
  },

  // DISABLED (future): verification emails on sign-up / sign-in.
  // emailVerification: {
  //   sendOnSignUp: true,
  //   sendOnSignIn: true,
  //   autoSignInAfterVerification: true,
  //   expiresIn: DAY,
  //   sendVerificationEmail: async ({ user, url }) => {
  //     sendMail({
  //       to: user.email,
  //       subject: 'Verify your Trails Nepal email',
  //       text: `Hi,\n\nConfirm your email address:\n${url}\n\nThis link expires in 24 hours.`,
  //     });
  //   },
  // },

  socialProviders,

  user: {
    additionalFields: {
      // Never settable from client input.
      role: { type: 'string', input: false },
      isActive: { type: 'boolean', input: false },
    },
  },

  account: {
    accountLinking: { enabled: true },
  },

  session: {
    expiresIn: 7 * DAY,
    updateAge: DAY,
    // No cookieCache: every request checks the DB so sign-out, password reset
    // and account deactivation revoke access immediately.
  },

  rateLimit: {
    enabled: true,
    window: 60,
    max: 100,
    customRules: {
      '/sign-in/email': { window: 60, max: 5 },
      '/sign-up/email': { window: 60, max: 5 },
      '/request-password-reset': { window: 60, max: 3 },
      '/send-verification-email': { window: 60, max: 3 },
    },
  },

  advanced: {
    // Match the existing uuid primary keys (user.id is @db.Uuid).
    database: { generateId: 'uuid' },
    cookiePrefix: 'trails',
    useSecureCookies: env.isProd,
    defaultCookieAttributes: {
      httpOnly: true,
      secure: env.isProd,
      sameSite: env.auth.crossSiteCookies ? 'none' : 'lax',
    },
    ...(env.auth.cookieDomain && {
      crossSubDomainCookies: { enabled: true, domain: env.auth.cookieDomain },
    }),
  },

  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      if (ctx.path === '/sign-up/email') {
        const parsed = signUpBodySchema.safeParse(ctx.body);
        if (!parsed.success) {
          throw new APIError('BAD_REQUEST', {
            message: parsed.error.issues[0]?.message ?? 'Invalid input',
          });
        }
        // Better Auth's endpoint schema requires `name`; registration here
        // needs only email + password. The value is discarded on write.
        return { context: { body: { ...parsed.data, name: '' } } };
      }
      if (ctx.path === '/reset-password' || ctx.path === '/change-password') {
        const parsed = passwordSchema.safeParse(
          (ctx.body as { newPassword?: unknown } | undefined)?.newPassword,
        );
        if (!parsed.success) {
          throw new APIError('BAD_REQUEST', {
            message: parsed.error.issues[0]?.message ?? 'Invalid password',
          });
        }
      }
    }),
  },

  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          const { rest, personal } = stripPersonalFields(user);
          if (personal.name || personal.image) {
            pendingProfiles.set(String(rest['email']).toLowerCase(), personal);
          }
          return { data: rest };
        },
        after: async (user) => {
          const key = user.email.toLowerCase();
          const personal = pendingProfiles.get(key);
          pendingProfiles.delete(key);
          if (personal) await seedProfileFromProvider(user.id, personal);
        },
      },
      update: {
        // Profile fields are changed via /api/me/profile, not update-user.
        before: async (user) => ({ data: stripPersonalFields(user).rest }),
      },
    },
    session: {
      create: {
        // Deactivated users cannot start a session.
        before: async (session) => {
          const user = await db.user.findUnique({
            where: { id: session.userId },
            select: { isActive: true },
          });
          if (user && !user.isActive) {
            throw new APIError('FORBIDDEN', { message: 'Account is disabled' });
          }
          return { data: session };
        },
        after: async (session) => {
          await db.user.update({
            where: { id: session.userId },
            data: { lastLoginAt: new Date() },
          });
        },
      },
    },
  },
});

export type Auth = typeof auth;
