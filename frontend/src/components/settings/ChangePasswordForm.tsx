'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { PasswordField } from '@/components/auth/PasswordField';
import { isPasswordValid } from '@/components/auth/validation';
import { changePassword } from '@/lib/auth';
import { useToastStore } from '@/store/toastStore';
import { FormActions, FormError } from './formParts';

export function ChangePasswordForm({
  onDone,
  onCancel,
}: {
  onDone: () => void;
  onCancel: () => void;
}) {
  const showToast = useToastStore((state) => state.showToast);
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');
  const [touched, setTouched] = useState({
    current: false,
    next: false,
    confirm: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const currentError =
    touched.current && !current ? 'Current password is required.' : null;
  const nextError =
    touched.next && !isPasswordValid(next)
      ? 'Password does not meet the requirements below.'
      : touched.next && next === current
        ? 'Choose a password different from your current one.'
        : null;
  const confirmError =
    touched.confirm && confirm !== next ? 'Passwords do not match.' : null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    setTouched({ current: true, next: true, confirm: true });
    if (!current || !isPasswordValid(next) || next === current) return;
    if (confirm !== next) return;

    setSubmitting(true);
    try {
      await changePassword({ currentPassword: current, newPassword: next });
      showToast({ title: 'Password changed' });
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
      <PasswordField
        id="current-password"
        label="Current Password"
        autoComplete="current-password"
        placeholder="Enter your current password"
        value={current}
        onChange={setCurrent}
        onBlur={() => setTouched((prev) => ({ ...prev, current: true }))}
        error={currentError}
      />
      <PasswordField
        id="new-password"
        label="New Password"
        autoComplete="new-password"
        placeholder="Create a new password"
        value={next}
        onChange={setNext}
        onBlur={() => setTouched((prev) => ({ ...prev, next: true }))}
        error={nextError}
        showRequirements
        className="mt-3.5"
      />
      <PasswordField
        id="confirm-password"
        label="Confirm New Password"
        autoComplete="new-password"
        placeholder="Re-enter your new password"
        value={confirm}
        onChange={setConfirm}
        onBlur={() => setTouched((prev) => ({ ...prev, confirm: true }))}
        error={confirmError}
        className="mt-3.5"
      />
      <FormError message={formError} />
      <FormActions
        submitting={submitting}
        submitLabel="Change Password"
        submittingLabel="Changing…"
        onCancel={onCancel}
      />
    </form>
  );
}
