'use client';

import { useState } from 'react';
import { Check, Copy, Info, Share2, TriangleAlert, XIcon } from 'lucide-react';
import { Button } from 'src/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from 'src/components/ui/dialog';

type ShareTripModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  url: string;
};

/**
 * Popup with a copyable link to the current trip. Mirrors LoginToSaveModal.
 */
export function ShareTripModal({
  open,
  onOpenChange,
  url,
}: ShareTripModalProps) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setCopied(false);
      setFailed(false);
    }
    onOpenChange(next);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setFailed(false);
      setCopied(true);
    } catch (error) {
      console.error('Unable to copy trip link:', error);
      setCopied(false);
      setFailed(true);
    }
  };

  // Mobile browsers expose the native share sheet; desktop falls back to copy.
  const canNativeShare =
    typeof navigator !== 'undefined' && typeof navigator.share === 'function';

  const handleNativeShare = async () => {
    try {
      await navigator.share({ title: 'My Trails Nepal trip', url });
      setFailed(false);
    } catch (error) {
      // Dismissing the share sheet is not a failure.
      if (error instanceof Error && error.name === 'AbortError') return;
      console.error('Unable to share trip:', error);
      setFailed(true);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="flex max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] flex-col items-center gap-0 overflow-y-auto rounded-3xl bg-white px-8 pb-8 pt-10 text-center ring-0 sm:max-w-[520px] sm:rounded-[32px] sm:pb-10 sm:pt-9"
      >
        <DialogClose
          aria-label="Close"
          className="absolute right-4 top-4 cursor-pointer text-[#2D2F27] transition-opacity hover:opacity-70 sm:right-5 sm:top-6"
        >
          <XIcon className="size-6" aria-hidden="true" />
        </DialogClose>

        <span
          aria-hidden="true"
          className="flex size-12 items-center justify-center rounded-full bg-[#8cc63f] text-white"
        >
          <Check className="size-6" strokeWidth={3} />
        </span>

        <DialogTitle className="mt-4 font-fraunces text-xl font-semibold leading-tight text-[#2D2F27] sm:text-2xl">
          Share this trip
        </DialogTitle>

        <DialogDescription className="mt-2 font-poppins text-[13px] leading-[1.5] text-[#404337] sm:text-sm">
          Share this link with friends, travel buddies or save it for later.
        </DialogDescription>

        <div className="mt-6 flex w-full min-w-0 items-stretch overflow-hidden rounded-full pl-4 ring-1 ring-[#D9DCD3]">
          <input
            readOnly
            value={url}
            aria-label="Shareable trip link"
            onFocus={(event) => event.currentTarget.select()}
            className="min-w-0 flex-1 truncate bg-transparent font-poppins text-[13px] text-[#404337] outline-none sm:text-sm"
          />
          <Button
            type="button"
            onClick={handleCopy}
            className="h-auto cursor-pointer gap-1.5 rounded-none border-0 bg-[#8cc63f] bg-clip-border px-5 py-3 font-poppins font-semibold text-white transition-colors hover:bg-[#7ab034]"
          >
            {copied ? (
              <Check className="size-4" aria-hidden="true" />
            ) : (
              <Copy className="size-4" aria-hidden="true" />
            )}
            {copied ? 'Copied' : 'Copy'}
          </Button>
        </div>

        {/* {canNativeShare && (
          <Button
            type="button"
            variant="outline"
            onClick={handleNativeShare}
            className="mt-3 h-auto w-full cursor-pointer gap-2 rounded-full border-[#8cc63f] px-5 py-3 font-poppins font-semibold text-[#5a8a00] hover:bg-[#F3F8E8]"
          >
            <Share2 className="size-4" aria-hidden="true" />
            Share via&hellip;
          </Button>
        )} */}

        {failed && (
          <p
            role="alert"
            className="mt-3 flex items-start gap-2 text-left font-poppins text-xs leading-[1.5] text-[#EF4444]"
          >
            <TriangleAlert
              className="mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />
            We couldn&apos;t share the link. Select it above and copy it
            manually.
          </p>
        )}

        <p className="mt-4 flex items-start gap-2 text-left font-poppins text-xs leading-[1.5] text-[#62675D]">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          Anyone with this link can view the trip plan. They don&apos;t need an
          account and can&apos;t edit it.
        </p>
        <span role="status" className="sr-only">
          {copied ? 'Link copied to clipboard' : ''}
        </span>
      </DialogContent>
    </Dialog>
  );
}
