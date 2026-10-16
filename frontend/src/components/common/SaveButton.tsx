'use client';

import { type MouseEvent } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

type SaveButtonProps = {
  title: string;
  className?: string;
};

const SaveButton = ({ title, className }: SaveButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    // The button lives inside a card link — don't navigate when saving.
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <button
      type="button"
      aria-label={`Save ${title}`}
      title="Save trip"
      onClick={handleClick}
      className={cn(
        'flex size-12 shrink-0 items-center justify-center rounded-full border border-[#82B300] text-[#82B300] transition hover:bg-[#F3F8E8]',
        className,
      )}
    >
      <Heart size={24} />
    </button>
  );
};

export default SaveButton;
