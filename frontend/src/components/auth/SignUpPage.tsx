'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { fetchCurrentUser, signUp } from '@/lib/auth';
import { useAuthStore } from '@/store/authStore';
import { checkPassword, validateEmail } from '@/lib/authValidation';
import { useRedirectIfAuthenticated } from '@/hooks/useRedirectIfAuthenticated';
import { PasswordChecklist } from './PasswordChecklist';
import { AuthShell } from './AuthShell';
import {
  AUTH_INPUT_CLASS as INPUT_CLASS,
  AUTH_LABEL_CLASS as LABEL_CLASS,
  AUTH_PRIMARY_BUTTON_CLASS,
} from './authStyles';

export function SignUpPage() {
  const router = useRouter();
  useRedirectIfAuthenticated();
  const setUser = useAuthStore((state) => state.setUser);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const emailFormatError = validateEmail(trimmedEmail);
  const passwordCheck = checkPassword(password);
  const passwordValid = passwordCheck.valid;

  const nameError =
    touched.name && !trimmedName ? 'Full name is required.' : null;
  const emailError = touched.email ? emailFormatError : null;
  const passwordError =
    touched.password && !passwordValid
      ? 'Password does not meet the requirements below.'
      : null;

  const formValid =
    trimmedName.length > 0 && !emailFormatError && passwordValid;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    setTouched({ name: true, email: true, password: true });

    if (!formValid) return;

    setSubmitting(true);
    try {
      await signUp({
        name: trimmedName,
        email: trimmedEmail,
        password,
      });
      const user = await fetchCurrentUser();
      if (!user) throw new Error('Could not load your account.');
      setUser(user);
      router.replace('/');
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthShell panelClassName="p-7 sm:p-8">
      <h2 className="mt-12 font-fraunces text-3xl font-bold text-[#2D2F27]">
        Create an account
      </h2>
      <p className="mt-1 font-poppins text-sm text-[#404337]">
        Create a new account or log in to an existing one.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8">
        {/* Full name */}
        <div>
          <label htmlFor="name" className={LABEL_CLASS}>
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            aria-invalid={Boolean(nameError)}
            aria-describedby={nameError ? 'name-error' : undefined}
            className={cn(
              INPUT_CLASS,
              'mt-1.5',
              nameError && 'border-[#EF4444] focus:border-[#EF4444]',
            )}
          />
          {nameError && (
            <p
              id="name-error"
              role="alert"
              className="mt-1 font-poppins text-[11px] text-[#EF4444]"
            >
              {nameError}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mt-3.5">
          <label htmlFor="email" className={LABEL_CLASS}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="username@email.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setTouched((prev) => ({ ...prev, email: true }));
            }}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            aria-invalid={Boolean(emailError)}
            aria-describedby={emailError ? 'email-error' : undefined}
            className={cn(
              INPUT_CLASS,
              'mt-1.5',
              emailError && 'border-[#EF4444] focus:border-[#EF4444]',
            )}
          />
          {emailError && (
            <p
              id="email-error"
              role="alert"
              className="mt-1 font-poppins text-[11px] text-[#EF4444]"
            >
              {emailError}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="relative mt-3.5">
          <label htmlFor="password" className={LABEL_CLASS}>
            Password
          </label>

          <div className="relative mt-1.5">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setTouched((prev) => ({ ...prev, password: true }));
              }}
              aria-invalid={Boolean(passwordError)}
              aria-describedby={
                [
                  touched.password && 'password-requirements',
                  passwordError && 'password-error',
                ]
                  .filter(Boolean)
                  .join(' ') || undefined
              }
              className={cn(
                INPUT_CLASS,
                'pr-12',
                passwordError && 'border-[#EF4444] focus:border-[#EF4444]',
              )}
            />
            <button
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              aria-pressed={showPassword}
              className="absolute inset-y-0 right-0 flex items-center px-3.5 text-[#9AA1AC] transition-colors hover:text-[#62675D]"
            >
              {showPassword ? (
                <EyeOff className="size-5" aria-hidden="true" />
              ) : (
                <Eye className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>

          {touched.password && (
            <PasswordChecklist id="password-requirements" password={password} />
          )}
          {passwordError && (
            <p
              id="password-error"
              role="alert"
              className="mt-1 font-poppins text-[11px] text-[#EF4444]"
            >
              {passwordError}
            </p>
          )}
        </div>

        {formError && (
          <p
            role="alert"
            className="mt-3 rounded-lg bg-[#FEF2F2] px-3 py-2 font-poppins text-[12px] text-[#B91C1C]"
          >
            {formError}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className={cn(
            AUTH_PRIMARY_BUTTON_CLASS,
            'mt-4 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-60',
          )}
        >
          {submitting ? 'Creating account…' : 'Sign Up'}
        </button>
      </form>

      <p className="mt-6 text-center font-poppins text-sm text-[#62675D]">
        Already have an account?{' '}
        <Link
          href="/login/"
          className="font-semibold text-[#88B112] hover:underline"
        >
          Log in
        </Link>
      </p>

      <p className="mt-8 text-center font-poppins text-[10px] font-medium uppercase tracking-[0.2em] text-[#9AA1AC]">
        © 2026 Trails Nepal. All rights reserved.
      </p>
    </AuthShell>
  );
}
