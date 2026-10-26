'use client';

import { type MouseEvent, useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store/authStore';
import { LoginToSaveModal } from './LoginToSaveModal';

type SaveButtonProps = {
  title: string;
  className?: string;
};

const SaveButton = ({ title, className }: SaveButtonProps) => {
  const user = useAuthStore((state) => state.user);
  const [loginPromptOpen, setLoginPromptOpen] = useState(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    // The button lives inside a card link — don't navigate when saving.
    event.preventDefault();
    event.stopPropagation();

    if (!user) setLoginPromptOpen(true);
  };

  return (
    <>
      <button
        type="button"
        aria-label={`Save ${title}`}
        title="Save trip"
        onClick={handleClick}
        className={cn(
          'flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#82B300] text-[#82B300] transition hover:bg-[#F3F8E8]',
          className,
        )}
      >
        <Heart size={24} />
      </button>
      {/* React events bubble out of portals — keep modal clicks from
          triggering the parent card link. */}
      <span
        className="contents"
        onClick={(event) => event.stopPropagation()}
      >
        <LoginToSaveModal
          open={loginPromptOpen}
          onOpenChange={setLoginPromptOpen}
        />
      </span>
    </>
  );
};

export default SaveButton;
