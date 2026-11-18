'use client';

import { useId, useMemo, useState } from 'react';
import type { FocusEvent, ReactNode } from 'react';
import { Check, Eye, EyeOff, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AUTH_INPUT_CLASS, AUTH_LABEL_CLASS } from './authStyles';
import { PASSWORD_RULES } from './validation';

type PasswordFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  autoComplete: 'current-password' | 'new-password';
  error?: string | null;
  /** Shows the live password requirements while the field is focused. */
  showRequirements?: boolean;
  /** Sits opposite the label, e.g. "Forgot password?". */
  labelAction?: ReactNode;
  className?: string;
};

/**
 * Password input with a show/hide toggle, the shared error styling, and
 * optionally the requirement checklist used when creating a password.
 */
export function PasswordField({
  id,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  error,
  showRequirements = false,
  labelAction,
  className,
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);
  const rulesId = useId();
  const errorId = `${id}-error`;

  const ruleResults = useMemo(
    () => PASSWORD_RULES.map((rule) => ({ ...rule, met: rule.test(value) })),
    [value],
  );

  // Close the requirements dropdown when focus leaves the field.
  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setRulesOpen(false);
      onBlur?.();
    }
  };

  const describedBy =
    [rulesOpen && rulesId, error && errorId].filter(Boolean).join(' ') ||
    undefined;

  return (
    <div className={cn('relative', className)} onBlur={handleBlur}>
      {labelAction ? (
        <div className="flex items-center justify-between gap-2">
          <label htmlFor={id} className={AUTH_LABEL_CLASS}>
            {label}
          </label>
          {labelAction}
        </div>
      ) : (
        <label htmlFor={id} className={AUTH_LABEL_CLASS}>
          {label}
        </label>
      )}

      <div className="relative mt-1.5">
        <input
          id={id}
          name={id}
          type={visible ? 'text' : 'password'}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
            if (showRequirements) setRulesOpen(true);
          }}
          onFocus={() => showRequirements && setRulesOpen(true)}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={cn(
            AUTH_INPUT_CLASS,
            'pr-12',
            error && 'border-[#EF4444] focus:border-[#EF4444]',
          )}
        />
        <button
          type="button"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => setVisible((current) => !current)}
          aria-label={visible ? 'Hide password' : 'Show password'}
          aria-pressed={visible}
          className="absolute inset-y-0 right-0 flex items-center px-3.5 text-[#9AA1AC] transition-colors hover:text-[#62675D]"
        >
          {visible ? (
            <EyeOff className="size-5" aria-hidden="true" />
          ) : (
            <Eye className="size-5" aria-hidden="true" />
          )}
        </button>

        {showRequirements && rulesOpen && (
          <div
            id={rulesId}
            onMouseDown={(event) => event.preventDefault()}
            className="absolute inset-x-0 top-full z-20 mt-2 rounded-xl border border-[#E5E9EF] bg-white p-3 shadow-xl"
          >
            <ul className="grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
              {ruleResults.map((rule) => (
                <li
                  key={rule.key}
                  className={cn(
                    'flex items-center gap-1.5 font-poppins text-[11px] leading-tight transition-colors',
                    rule.met ? 'text-[#88B112]' : 'text-[#9AA1AC]',
                  )}
                >
                  {rule.met ? (
                    <Check className="size-3.5 shrink-0" aria-hidden="true" />
                  ) : (
                    <X className="size-3.5 shrink-0" aria-hidden="true" />
                  )}
                  <span>{rule.label}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1 font-poppins text-[11px] text-[#EF4444]"
        >
          {error}
        </p>
      )}
    </div>
  );
}
