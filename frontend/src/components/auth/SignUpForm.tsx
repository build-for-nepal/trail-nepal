'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { cn } from '@/lib/utils';
import { signUp } from '@/lib/auth';
import { AUTH_PRIMARY_BUTTON_CLASS } from './authStyles';
import { PasswordField } from './PasswordField';
import { TextField } from './TextField';
import { getEmailError, isPasswordValid } from './validation';

type SignUpFormProps = {
  /** Runs once the account exists and the visitor is signed in. */
  onSuccess: () => void;
};

export function SignUpForm({ onSuccess }: SignUpFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const trimmedName = name.trim();

  const nameError =
    touched.name && !trimmedName ? 'Full name is required.' : null;
  const emailError = touched.email ? getEmailError(email) : null;
  const passwordError =
    touched.password && !isPasswordValid(password)
      ? 'Password does not meet the requirements below.'
      : null;

  const formValid =
    trimmedName.length > 0 &&
    !getEmailError(email) &&
    isPasswordValid(password);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    setTouched({ name: true, email: true, password: true });

    if (!formValid) return;

    setSubmitting(true);
    try {
      await signUp({ name: trimmedName, email: email.trim(), password });
      onSuccess();
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
    <form onSubmit={handleSubmit} noValidate>
      <TextField
        id="signup-name"
        label="Full Name"
        autoComplete="name"
        placeholder="Enter your full name"
        value={name}
        onChange={setName}
        onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
        error={nameError}
      />

      <TextField
        id="signup-email"
        label="Email Address"
        type="email"
        autoComplete="email"
        placeholder="username@email.com"
        value={email}
        onChange={setEmail}
        onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
        error={emailError}
        className="mt-3.5"
      />

      <PasswordField
        id="signup-password"
        label="Password"
        autoComplete="new-password"
        placeholder="Create a password"
        value={password}
        onChange={setPassword}
        onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
        error={passwordError}
        showRequirements
        className="mt-3.5"
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
          'mt-4 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-60',
        )}
      >
        {submitting ? 'Creating account…' : 'Sign Up'}
      </button>
    </form>
  );
}
