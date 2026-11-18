// Client-side mirror of the backend credential policy (Better Auth
// `minPasswordLength` / `maxPasswordLength` in backend/src/modules/auth/auth.ts
// plus `passwordSchema` in auth.validator.ts). Keep the two in step.

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

export const PASSWORD_RULES = [
  {
    key: 'length',
    label: `At least ${PASSWORD_MIN} characters`,
    test: (value: string) => value.length >= PASSWORD_MIN,
  },
  {
    key: 'max',
    label: `At most ${PASSWORD_MAX} characters`,
    test: (value: string) => value.length <= PASSWORD_MAX,
  },
  {
    key: 'letter',
    label: 'At least one letter',
    test: (value: string) => /[a-zA-Z]/.test(value),
  },
  {
    key: 'number',
    label: 'At least one number',
    test: (value: string) => /[0-9]/.test(value),
  },
] as const;

export function checkPassword(value: string) {
  const results = PASSWORD_RULES.map((rule) => ({
    key: rule.key,
    label: rule.label,
    met: rule.test(value),
  }));
  return { results, valid: results.every((rule) => rule.met) };
}
