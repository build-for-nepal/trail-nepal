'use client';

import { useState } from 'react';
import { XIcon } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';

type AuthModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Runs after a successful log-in or sign-up, to finish the original action. */
  onAuthenticated: () => void;
};

type View = 'login' | 'signup';

const COPY: Record<View, { title: string; description: string }> = {
  login: {
    title: 'Log in to save your trip',
    description:
      'Log in to save trips, plan your adventures, and access them across devices.',
  },
  signup: {
    title: 'Create your account',
    description:
      'Join Trails Nepal to save trips, manage your travel plans, and access them across devices.',
  },
};

/**
 * Log-in / sign-up over the current page, for actions that need an account
 * (e.g. Save Trip). The visitor stays where they are: closing it or choosing
 * "Not now" changes nothing, and signing in finishes the original action.
 */
export function AuthModal({
  open,
  onOpenChange,
  onAuthenticated,
}: AuthModalProps) {
  const [view, setView] = useState<View>('login');
  const { title, description } = COPY[view];

  const handleOpenChange = (next: boolean) => {
    onOpenChange(next);
    // Start from log-in the next time it opens.
    if (!next) setView('login');
  };

  const handleSuccess = () => {
    handleOpenChange(false);
    onAuthenticated();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="flex max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] flex-col gap-0 overflow-y-auto rounded-3xl bg-white p-6 pt-12 ring-0 sm:max-w-[480px] sm:rounded-[32px] sm:p-10 sm:pt-12"
      >
        <DialogClose
          aria-label="Close"
          className="absolute right-4 top-4 cursor-pointer text-[#2D2F27] transition-opacity hover:opacity-70 sm:right-5 sm:top-5"
        >
          <XIcon className="size-6" aria-hidden="true" />
        </DialogClose>

        <DialogTitle className="font-fraunces text-2xl font-bold leading-tight text-[#2D2F27] sm:text-3xl">
          {title}
        </DialogTitle>
        <DialogDescription className="mt-1 font-poppins text-sm text-[#404337]">
          {description}
        </DialogDescription>

        <div className="mt-6">
          {view === 'login' ? (
            <LoginForm onSuccess={handleSuccess} />
          ) : (
            <SignUpForm onSuccess={handleSuccess} />
          )}
        </div>

        <p className="mt-5 text-center font-poppins text-sm text-[#62675D]">
          {view === 'login' ? (
            <>
              Don&apos;t have an account?{' '}
              <button
                type="button"
                onClick={() => setView('signup')}
                className="cursor-pointer font-semibold text-[#88B112] hover:underline"
              >
                Create one
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setView('login')}
                className="cursor-pointer font-semibold text-[#88B112] hover:underline"
              >
                Log in
              </button>
            </>
          )}
        </p>

        <DialogClose className="mx-auto mt-4 cursor-pointer font-poppins text-sm font-medium text-[#62675D] underline-offset-4 hover:underline">
          Not now
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
