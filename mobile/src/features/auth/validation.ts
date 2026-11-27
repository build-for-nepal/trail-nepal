// Client-side mirror of the backend credential policy: Better Auth's
// minPasswordLength / maxPasswordLength in backend/src/modules/auth/auth.ts
// plus passwordSchema in auth.validator.ts. frontend/src/lib/authValidation.ts
// is the same rules for the web — all three have to move together.

export const PASSWORD_MIN = 8;
export const PASSWORD_MAX = 128;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns an error message, or null when the email format is valid. */
export function validateEmail(value: string): string | null {
  const email = value.trim();
  if (!email) return 'Email address is required.';
  if (email.length > 254) return 'Email address is too long.';
  if (!EMAIL_PATTERN.test(email)) return 'Enter a valid email address.';
  return null;
}

/**
 * Returns an error message, or null when the password meets the policy.
 *
 * Used on sign-up only. The login screen deliberately does not apply it: the
 * web's login form blocks submission unless the typed password passes these
 * rules, which locks out any account whose password predates the policy. Login
 * checks only that something was typed and lets the server decide.
 */
export function validatePassword(value: string): string | null {
  if (!value) return 'Password is required.';
  if (value.length < PASSWORD_MIN) {
    return `Password must be at least ${PASSWORD_MIN} characters.`;
  }
  if (value.length > PASSWORD_MAX) {
    return `Password must be at most ${PASSWORD_MAX} characters.`;
  }
  if (!/[a-zA-Z]/.test(value)) return 'Password must contain a letter.';
  if (!/[0-9]/.test(value)) return 'Password must contain a number.';
  return null;
}
