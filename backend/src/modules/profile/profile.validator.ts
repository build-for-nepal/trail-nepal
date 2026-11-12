import { z } from 'zod';

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .transform((v) => (v === '' ? null : v))
    .nullable();

export const updateProfileSchema = z
  .object({
    firstName: optionalText(50),
    middleName: optionalText(50),
    lastName: optionalText(50),
    avatarUrl: z.url().max(2048).nullable(),
    phone: z
      .string()
      .trim()
      .regex(/^\+?[0-9 ()-]{7,20}$/, 'Invalid phone number')
      .nullable(),
    country: optionalText(60),
    bio: optionalText(500),
    dateOfBirth: z.iso
      .date()
      .refine(
        (d) => new Date(d) <= new Date(),
        'Date of birth cannot be in the future',
      )
      .transform((d) => new Date(d))
      .nullable(),
  })
  .partial()
  .strict();

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
