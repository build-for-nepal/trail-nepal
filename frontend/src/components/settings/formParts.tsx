import { cn } from '@/lib/utils';
import { AUTH_PRIMARY_BUTTON_CLASS } from '@/components/auth/authStyles';

export function FormError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p
      role="alert"
      className="mt-3 rounded-lg bg-[#FEF2F2] px-3 py-2 font-poppins text-[12px] text-[#B91C1C]"
    >
      {message}
    </p>
  );
}

export function FormActions({
  submitting,
  submitLabel,
  submittingLabel,
  onCancel,
}: {
  submitting: boolean;
  submitLabel: string;
  submittingLabel: string;
  onCancel: () => void;
}) {
  return (
    <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
      <button
        type="button"
        onClick={onCancel}
        disabled={submitting}
        className="h-12 cursor-pointer rounded-full px-6 font-poppins text-sm font-medium text-[#62675D] transition-colors hover:text-[#2D2F27]"
      >
        Cancel
      </button>
      <button
        type="submit"
        disabled={submitting}
        className={cn(
          AUTH_PRIMARY_BUTTON_CLASS,
          'disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-8',
        )}
      >
        {submitting ? submittingLabel : submitLabel}
      </button>
    </div>
  );
}
