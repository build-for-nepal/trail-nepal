import { z } from 'zod';

// Applied to POST /api/auth/sign-up/email and reset/change password on top of
// Better Auth's own checks (min/max length).
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .max(128, 'Password must be at most 128 characters')
  .regex(/[a-zA-Z]/, 'Password must contain a letter')
  .regex(/[0-9]/, 'Password must contain a number');

export const signUpBodySchema = z.looseObject({
  email: z.email('Invalid email address').max(254),
  password: passwordSchema,
});
