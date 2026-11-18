'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { PasswordField } from '@/components/auth/PasswordField';
import { isPasswordValid } from '@/components/auth/validation';
import { setUpEmailLogin } from '@/lib/auth';
import { useToastStore } from '@/store/toastStore';
import { FormActions, FormError } from './formParts';

/**
 * Adds a password to the signed-in account. It does not create a second
 * account: Google and email login then open the same Trails Nepal account.
 */
export function SetUpEmailLoginForm({
  onDone,
  onCancel,
}: {
  onDone: () => void;
  onCancel: () => void;
}) {
  const showToast = useToastStore((state) => state.showToast);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [touched, setTouched] = useState({ password: false, confirm: false });
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const passwordError =
    touched.password && !isPasswordValid(password)
      ? 'Password does not meet the requirements below.'
      : null;
  const confirmError =
    touched.confirm && confirm !== password ? 'Passwords do not match.' : null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    setTouched({ password: true, confirm: true });
    if (!isPasswordValid(password) || confirm !== password) return;

    setSubmitting(true);
    try {
      await setUpEmailLogin(password);
      showToast({
        title: 'Email login set up',
        description: 'You can now log in with your email and password.',
      });
      onDone();
    } catch (error) {
      setFormError(
        error instanceof Error ? error.message : 'Something went wrong.',
      );
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mt-6 border-t border-[#E3EAF4] pt-6"
    >
      <p className="mb-4 font-poppins text-sm text-[#606359]">
        This adds a password to your existing account. No separate account is
        created.
      </p>
      <PasswordField
        id="setup-password"
        label="New Password"
        autoComplete="new-password"
        placeholder="Create a password"
        value={password}
        onChange={setPassword}
        onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
        error={passwordError}
        showRequirements
      />
      <PasswordField
        id="setup-confirm"
        label="Confirm Password"
        autoComplete="new-password"
        placeholder="Re-enter your password"
        value={confirm}
        onChange={setConfirm}
        onBlur={() => setTouched((prev) => ({ ...prev, confirm: true }))}
        error={confirmError}
        className="mt-3.5"
      />
      <FormError message={formError} />
      <FormActions
        submitting={submitting}
        submitLabel="Set up email login"
        submittingLabel="Setting up…"
        onCancel={onCancel}
      />
    </form>
  );
}
