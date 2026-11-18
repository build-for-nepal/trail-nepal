'use client';

import { useState } from 'react';
import type { SubmitEvent } from 'react';
import {
  AUTH_INPUT_CLASS,
  AUTH_LABEL_CLASS,
} from '@/components/auth/authStyles';
import { changePassword } from '@/lib/auth';
import { cn } from '@/lib/utils';
import { useToastStore } from '@/store/toastStore';
import {
  SETTINGS_CANCEL_BUTTON_CLASS,
  SETTINGS_SAVE_BUTTON_CLASS,
} from './settingsStyles';

const MIN_PASSWORD_LENGTH = 8;

type Field = 'current' | 'next' | 'confirm';

const FIELDS: { key: Field; label: string; autoComplete: string }[] = [
  {
    key: 'current',
    label: 'Current Password',
    autoComplete: 'current-password',
  },
  { key: 'next', label: 'New Password', autoComplete: 'new-password' },
  { key: 'confirm', label: 'Confirm Password', autoComplete: 'new-password' },
];

const EMPTY = { current: '', next: '', confirm: '' };

export default function ChangePasswordForm() {
  const showToast = useToastStore((state) => state.showToast);
  const [values, setValues] = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dirty = Object.values(values).some(Boolean);
  const canSave = Object.values(values).every(Boolean) && !submitting;

  const validate = (): string | null => {
    if (values.next.length < MIN_PASSWORD_LENGTH) {
      return `Your new password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
    }
    if (values.next === values.current) {
      return 'Your new password must be different from your current one.';
    }
    if (values.next !== values.confirm) {
      return 'The new passwords do not match.';
    }
    return null;
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSave) return;

    const problem = validate();
    if (problem) {
      setError(problem);
      return;
    }

    setError(null);
    setSubmitting(true);
    try {
      await changePassword({
        currentPassword: values.current,
        newPassword: values.next,
      });
      setValues(EMPTY);
      showToast({ title: 'Password updated' });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'We could not change your password. Please try again.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    setValues(EMPTY);
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[440px]" noValidate>
      {FIELDS.map(({ key, label, autoComplete }, index) => (
        <div key={key} className={index > 0 ? 'mt-4' : undefined}>
          <label htmlFor={`settings-${key}`} className={AUTH_LABEL_CLASS}>
            {label}
          </label>
          <input
            id={`settings-${key}`}
            name={key}
            type="password"
            autoComplete={autoComplete}
            value={values[key]}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, [key]: event.target.value }))
            }
            className={cn(AUTH_INPUT_CLASS, 'mt-2')}
          />
        </div>
      ))}

      {error && (
        <p role="alert" className="mt-3 font-poppins text-xs text-[#EF4444]">
          {error}
        </p>
      )}

      <div className="mt-8 flex items-center gap-[30px]">
        <button
          type="submit"
          disabled={!canSave}
          className={SETTINGS_SAVE_BUTTON_CLASS}
        >
          {submitting ? 'Saving…' : 'Save'}
        </button>
        <button
          type="button"
          onClick={handleCancel}
          disabled={!dirty || submitting}
          className={SETTINGS_CANCEL_BUTTON_CLASS}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
