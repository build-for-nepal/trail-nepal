'use client';

import { useRef, useState } from 'react';
import type { ChangeEvent, DragEvent } from 'react';
import { ImagePlus, XIcon } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from 'src/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useToastStore } from '@/store/toastStore';
import {
  SETTINGS_CANCEL_BUTTON_CLASS,
  SETTINGS_SAVE_BUTTON_CLASS,
} from './settingsStyles';

const MAX_IMAGE_BYTES = 2 * 1024 * 1024;
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

type Selected = { name: string; dataUrl: string };

type ProfilePhotoModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Receives the chosen photo as a data URL once the visitor uploads it. */
  onUpload: (dataUrl: string) => void;
};

/** Why a file can't be used, or null when it is fine. */
function validate(file: File): string | null {
  if (!ACCEPTED_TYPES.includes(file.type)) {
    return 'That file type isn’t supported. Please choose a JPG, PNG or WebP image.';
  }
  if (file.size > MAX_IMAGE_BYTES) {
    return 'That image is larger than 2 MB. Please choose a smaller one.';
  }
  return null;
}

/**
 * Popup for choosing a profile photo: a drop area, then Upload and Cancel.
 * Upload stays disabled until a valid image has been chosen.
 */
export function ProfilePhotoModal({
  open,
  onOpenChange,
  onUpload,
}: ProfilePhotoModalProps) {
  const showToast = useToastStore((state) => state.showToast);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selected, setSelected] = useState<Selected | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  const reset = () => {
    setSelected(null);
    setError(null);
    setDragging(false);
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) reset();
    onOpenChange(next);
  };

  const handleFile = (file: File | undefined) => {
    if (!file) return;

    const problem = validate(file);
    if (problem) {
      setSelected(null);
      setError(problem);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setSelected({ name: file.name, dataUrl: String(reader.result) });
      setError(null);
    };
    reader.onerror = () => {
      setSelected(null);
      setError('We couldn’t read that image. Please try another one.');
    };
    reader.readAsDataURL(file);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    handleFile(event.target.files?.[0]);
    event.target.value = '';
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDragging(false);
    handleFile(event.dataTransfer.files?.[0]);
  };

  const handleUpload = () => {
    if (!selected) return;
    onUpload(selected.dataUrl);
    showToast({
      title: 'Profile photo added',
      description: 'Press Save to apply your new photo.',
    });
    handleOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="flex max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] flex-col items-start gap-0 overflow-y-auto rounded-3xl bg-white px-6 pb-8 pt-10 text-left ring-0 sm:max-w-[520px] sm:rounded-[32px] sm:px-12 sm:pb-10 sm:pt-9"
      >
        <DialogClose
          aria-label="Close"
          className="absolute right-4 top-4 cursor-pointer text-[#2D2F27] transition-opacity hover:opacity-70 sm:right-5 sm:top-6"
        >
          <XIcon className="size-6" aria-hidden="true" />
        </DialogClose>

        <DialogTitle className="font-fraunces text-xl font-semibold leading-tight text-[#2D2F27] sm:text-2xl">
          Upload your profile photo
        </DialogTitle>

        <DialogDescription className="mt-2 max-w-[400px] font-poppins text-[13px] leading-[1.5] text-[#404337] sm:text-sm">
          Drag and drop your files here or click to browse.
        </DialogDescription>

        <label
          htmlFor="profile-photo-input"
          onDragOver={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={cn(
            'mt-6 flex h-[200px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed px-4 font-poppins transition-colors',
            dragging
              ? 'border-[#88B112] bg-[#F3F7E7]'
              : 'border-[#D9DCD3] hover:border-[#88B112]',
            error && 'border-[#EF4444]',
          )}
        >
          {selected ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selected.dataUrl}
                alt="Selected profile photo preview"
                className="size-24 rounded-full object-cover"
              />
              <span className="max-w-full truncate text-xs text-[#404337]">
                {selected.name}
              </span>
              <span className="text-[11px] text-[#62675D]">
                Click or drop to choose a different photo
              </span>
            </>
          ) : (
            <>
              <ImagePlus className="size-8 text-[#88B112]" aria-hidden="true" />
              <span className="text-sm font-medium text-[#2D2F27]">
                Drop your photo here
              </span>
              <span className="text-[11px] text-[#62675D]">
                JPG, PNG or WebP, up to 2 MB
              </span>
            </>
          )}
          <input
            ref={inputRef}
            id="profile-photo-input"
            type="file"
            accept={ACCEPTED_TYPES.join(',')}
            onChange={handleInput}
            className="sr-only"
          />
        </label>

        <p
          role={error ? 'alert' : 'status'}
          className={cn(
            'mt-3 min-h-4 font-poppins text-xs',
            error ? 'text-[#EF4444]' : 'text-[#5F7C0D]',
          )}
        >
          {error ?? (selected ? 'Photo ready to upload.' : '')}
        </p>

        <div className="mt-2 flex w-full items-center justify-end gap-6">
          <button
            type="button"
            onClick={handleUpload}
            disabled={!selected}
            className={cn(SETTINGS_SAVE_BUTTON_CLASS, 'min-w-[160px]')}
          >
            Upload
          </button>
          <button
            type="button"
            onClick={() => handleOpenChange(false)}
            className={SETTINGS_CANCEL_BUTTON_CLASS}
          >
            Cancel
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
