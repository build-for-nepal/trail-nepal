'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { SubmitEvent } from 'react';
import { Pencil } from 'lucide-react';
import {
  AUTH_INPUT_CLASS,
  AUTH_LABEL_CLASS,
} from '@/components/auth/authStyles';
import { cn } from '@/lib/utils';
import { type AuthUser, useAuthStore } from '@/store/authStore';
import { useToastStore } from '@/store/toastStore';
import { ProfilePhotoModal } from './ProfilePhotoModal';
import {
  SETTINGS_CANCEL_BUTTON_CLASS,
  SETTINGS_SAVE_BUTTON_CLASS,
} from './settingsStyles';

export default function ProfileForm({ user }: { user: AuthUser }) {
  const setUser = useAuthStore((state) => state.setUser);
  const showToast = useToastStore((state) => state.showToast);

  const [name, setName] = useState(user.name ?? '');
  const [image, setImage] = useState(user.image);
  const [photoOpen, setPhotoOpen] = useState(false);

  const trimmedName = name.trim();
  const dirty = trimmedName !== (user.name ?? '') || image !== user.image;
  const canSave = dirty && trimmedName.length > 0;

  const handleCancel = () => {
    setName(user.name ?? '');
    setImage(user.image);
  };

  // There is no account backend yet, so this only updates the profile held in
  // this browser session. The toast says so rather than implying a sync.
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSave) return;

    setUser({ ...user, name: trimmedName, image });
    showToast({
      title: 'Profile updated',
      description:
        'Saved on this device for now. It will sync to your account once account storage is available.',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[440px]">
      <div className="group relative size-20">
        <span className="relative block size-20 overflow-hidden rounded-full border-">
          {image ? (
            <Image
              src={image}
              alt={name || 'Profile picture'}
              fill
              sizes="80px"
              referrerPolicy="no-referrer"
              className="object-cover"
            />
          ) : (
            <span className="flex size-full items-center justify-center bg-[#8cc63f] font-poppins text-2xl font-semibold text-white">
              {(name || user.email || '?').charAt(0).toUpperCase()}
            </span>
          )}
        </span>

        <button
          type="button"
          onClick={() => setPhotoOpen(true)}
          aria-label="Change profile picture"
          className="absolute -bottom-1 -right-1 flex size-8 cursor-pointer items-center justify-center rounded-full bg-white text-[#606359] opacity-0 shadow-md transition-opacity focus-visible:opacity-100 group-hover:opacity-100 max-md:opacity-100"
        >
          <Pencil className="size-3.5" aria-hidden="true" />
        </button>
        <ProfilePhotoModal
          open={photoOpen}
          onOpenChange={setPhotoOpen}
          onUpload={setImage}
        />
      </div>

      <label htmlFor="settings-name" className={cn(AUTH_LABEL_CLASS, 'mt-6')}>
        Full Name
      </label>
      <input
        id="settings-name"
        name="name"
        type="text"
        autoComplete="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className={cn(AUTH_INPUT_CLASS, 'mt-2')}
      />

      <label htmlFor="settings-email" className={cn(AUTH_LABEL_CLASS, 'mt-4')}>
        Email Address
      </label>
      <input
        id="settings-email"
        name="email"
        type="email"
        value={user.email ?? ''}
        readOnly
        aria-describedby="settings-email-note"
        className={cn(AUTH_INPUT_CLASS, 'mt-2 cursor-not-allowed opacity-70')}
      />
      <p
        id="settings-email-note"
        className="mt-1 font-poppins text-[11px] text-[#62675D]"
      >
        Your email comes from your sign-in and can&rsquo;t be changed here.
      </p>

      <div className="mt-8 flex items-center gap-[30px]">
        <button
          type="submit"
          disabled={!canSave}
          className={SETTINGS_SAVE_BUTTON_CLASS}
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleCancel}
          disabled={!dirty}
          className={SETTINGS_CANCEL_BUTTON_CLASS}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
