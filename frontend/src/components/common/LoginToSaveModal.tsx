'use client';

import Image from 'next/image';
import Link from 'next/link';
import { XIcon } from 'lucide-react';
import { Button } from 'src/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from 'src/components/ui/dialog';

type LoginToSaveModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/**
 * Shown when a signed-out visitor tries to save a trip.
 * Closes via the X button, Escape, or an outside click.
 */
export function LoginToSaveModal({
  open,
  onOpenChange,
}: LoginToSaveModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="flex max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] flex-col items-center gap-0 overflow-y-auto rounded-3xl bg-white px-6 pb-8 pt-10 text-center ring-0 sm:h-[364px] sm:max-w-[520px] sm:rounded-[32px] sm:px-12 sm:pb-10 sm:pt-9"
      >
        <DialogClose
          aria-label="Close"
          className="absolute right-4 top-4 cursor-pointer text-[#2D2F27] transition-opacity hover:opacity-70 sm:right-5 sm:top-6"
        >
          <XIcon className="size-6" aria-hidden="true" />
        </DialogClose>

        <Image
          src="/images/mascot/peaku save.png"
          alt=""
          width={100}
          height={100}
          className="h-[84px] w-auto sm:h-[100px]"
        />

        <DialogTitle className="mt-4 font-fraunces text-xl font-semibold leading-tight text-[#2D2F27] sm:text-2xl">
          Log in to save your trip
        </DialogTitle>

        <DialogDescription className="mt-2 max-w-[400px] font-poppins text-[13px] leading-[1.5] text-[#404337] sm:text-sm">
          To add this trip to your saved plans and access it again later,
          you&rsquo;ll need to be signed in.
        </DialogDescription>

        <Button
          asChild
          className="mt-6 h-auto w-full max-w-[160px] cursor-pointer rounded-full bg-[#8cc63f] px-4 py-4.5 font-poppins font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-[#7ab034] [a]:hover:bg-[#7ab034] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <Link href="/login/" onClick={() => onOpenChange(false)}>
            Log In
          </Link>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
