'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { XIcon } from 'lucide-react';
import { MAX_TRIP_NAME_LENGTH } from '@/lib/tripName';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';

type TripNameDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** `save` names a trip as it is saved; `rename` edits a saved trip's name. */
  mode: 'save' | 'rename';
  /** The suggested or current name the field starts with. */
  initialName: string;
  onConfirm: (name: string) => void;
};

const COPY = {
  save: {
    title: 'Name your trip',
    description:
      'We suggested a name from your recommended experiences. Change it if you like — you can also rename it later.',
    confirm: 'Save trip',
  },
  rename: {
    title: 'Rename your trip',
    description: 'Choose a name that helps you find this trip later.',
    confirm: 'Save name',
  },
} as const;

/** Asks for a trip name, pre-filled and editable. */
export function TripNameDialog({
  open,
  onOpenChange,
  mode,
  initialName,
  onConfirm,
}: TripNameDialogProps) {
  const { title, description, confirm } = COPY[mode];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="flex w-full max-w-[calc(100%-2rem)] flex-col gap-0 rounded-3xl bg-white p-6 ring-0 sm:max-w-[460px] sm:rounded-[32px] sm:p-8"
      >
        <DialogClose
          aria-label="Close"
          className="absolute right-4 top-4 cursor-pointer text-[#2D2F27] transition-opacity hover:opacity-70"
        >
          <XIcon className="size-6" aria-hidden="true" />
        </DialogClose>

        <DialogTitle className="pr-8 font-fraunces text-2xl font-semibold leading-tight text-[#2D2F27]">
          {title}
        </DialogTitle>
        <DialogDescription className="mt-2 font-poppins text-sm leading-[1.5] text-[#404337]">
          {description}
        </DialogDescription>

        {/* Remounts per open so the field always starts from `initialName`. */}
        {open && (
          <NameForm
            initialName={initialName}
            confirmLabel={confirm}
            onCancel={() => onOpenChange(false)}
            onConfirm={(name) => {
              onConfirm(name);
              onOpenChange(false);
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

function NameForm({
  initialName,
  confirmLabel,
  onCancel,
  onConfirm,
}: {
  initialName: string;
  confirmLabel: string;
  onCancel: () => void;
  onConfirm: (name: string) => void;
}) {
  const [name, setName] = useState(initialName);
  const [touched, setTouched] = useState(false);
  const trimmed = name.trim();
  const error = touched && !trimmed ? 'Trip name is required.' : null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched(true);
    if (trimmed) onConfirm(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-5">
      <label
        htmlFor="trip-name"
        className="block font-poppins text-[12px] font-semibold uppercase tracking-[0.15em] text-[#62675D]"
      >
        Trip name
      </label>
      <input
        id="trip-name"
        type="text"
        value={name}
        maxLength={MAX_TRIP_NAME_LENGTH}
        autoFocus
        onFocus={(event) => event.currentTarget.select()}
        onChange={(event) => setName(event.target.value)}
        onBlur={() => setTouched(true)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? 'trip-name-error' : undefined}
        className={cn(
          'mt-1.5 h-12 w-full rounded-xl border border-transparent bg-[#EAF0F8] px-4 font-poppins text-sm text-[#292B25] outline-none transition-colors placeholder:text-[#9AA1AC] focus:border-[#88B112]',
          error && 'border-[#EF4444] focus:border-[#EF4444]',
        )}
      />
      {error && (
        <p
          id="trip-name-error"
          role="alert"
          className="mt-1 font-poppins text-[11px] text-[#EF4444]"
        >
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="h-11 cursor-pointer rounded-full px-5 font-poppins text-sm font-medium text-[#62675D] transition-colors hover:text-[#2D2F27]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="h-11 cursor-pointer rounded-full bg-[#88B112] px-6 font-poppins text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#7fa800] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#88B112]"
        >
          {confirmLabel}
        </button>
      </div>
    </form>
  );
}
