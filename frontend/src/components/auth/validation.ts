export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function getEmailError(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return 'Email address is required.';
  if (!EMAIL_PATTERN.test(trimmed)) return 'Enter a valid email address.';
  return null;
}

export const PASSWORD_RULES = [
  {
    key: 'length',
    label: 'At least 8 characters',
    test: (value: string) => value.length >= 8,
  },
  {
    key: 'uppercase',
    label: 'One uppercase letter',
    test: (value: string) => /[A-Z]/.test(value),
  },
  {
    key: 'lowercase',
    label: 'One lowercase letter',
    test: (value: string) => /[a-z]/.test(value),
  },
  {
    key: 'number',
    label: 'One number',
    test: (value: string) => /\d/.test(value),
  },
  {
    key: 'special',
    label: 'One special character (! @ # $ % & *)',
    test: (value: string) => /[!@#$%&*]/.test(value),
  },
] as const;

export function isPasswordValid(value: string): boolean {
  return PASSWORD_RULES.every((rule) => rule.test(value));
}
