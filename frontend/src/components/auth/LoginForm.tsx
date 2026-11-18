'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { cn } from '@/lib/utils';
import { signIn, signInWithGoogle } from '@/lib/auth';
import { rememberReturnTo } from '@/lib/authRedirect';
import { AUTH_PRIMARY_BUTTON_CLASS } from './authStyles';
import { GoogleButton } from './GoogleButton';
import { PasswordField } from './PasswordField';
import { TextField } from './TextField';
import { getEmailError } from './validation';

type LoginFormProps = {
  /** Runs once the visitor is signed in. */
  onSuccess: () => void;
};

const GENERIC_ERROR = 'Something went wrong. Please try again.';

/** Email + password and Google log-in, shared by the page and the modal. */
export function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const emailError = touched.email ? getEmailError(email) : null;
  const passwordError =
    touched.password && !password ? 'Password is required.' : null;

  const run = async (action: () => Promise<void>) => {
    setFormError(null);
    setSubmitting(true);
    try {
      await action();
      onSuccess();
    } catch (error) {
      setFormError(error instanceof Error ? error.message : GENERIC_ERROR);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ email: true, password: true });
    if (getEmailError(email) || !password) return;

    void run(() => signIn({ email: email.trim(), password }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          id="login-email"
          label="Email Address"
          type="email"
          autoComplete="email"
          placeholder="username@email.com"
          value={email}
          onChange={setEmail}
          onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
          error={emailError}
        />

        <PasswordField
          id="login-password"
          label="Password"
          autoComplete="current-password"
          placeholder="Enter your password"
          value={password}
          onChange={setPassword}
          onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
          error={passwordError}
          className="mt-3.5"
          labelAction={
            <Link
              href="/forgot-password/"
              onClick={rememberReturnTo}
              className="font-poppins text-[12px] text-[#2D2F27] hover:underline"
            >
              Forgot password?
            </Link>
          }
        />

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
            'mt-6 disabled:cursor-not-allowed disabled:opacity-60',
          )}
        >
          {submitting ? 'Logging in…' : 'Log In'}
        </button>
      </form>

      <div className="my-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-[#E5E9EF]" />
        <span className="font-poppins text-[11px] font-medium text-[#9AA1AC]">
          OR
        </span>
        <span className="h-px flex-1 bg-[#E5E9EF]" />
      </div>

      <GoogleButton
        disabled={submitting}
        onClick={() => void run(signInWithGoogle)}
      />
    </>
  );
}
