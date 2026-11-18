import { cn } from '@/lib/utils';
import { AUTH_INPUT_CLASS, AUTH_LABEL_CLASS } from './authStyles';

type TextFieldProps = {
  id: string;
  label: string;
  type?: 'text' | 'email';
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  placeholder?: string;
  autoComplete?: string;
  error?: string | null;
  className?: string;
};

/** Labelled input with the shared validation error styling. */
export function TextField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  autoComplete,
  error,
  className,
}: TextFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label htmlFor={id} className={AUTH_LABEL_CLASS}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          AUTH_INPUT_CLASS,
          'mt-1.5',
          error && 'border-[#EF4444] focus:border-[#EF4444]',
        )}
      />
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
