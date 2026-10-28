'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store/authStore';
import ChangePasswordForm from './ChangePasswordForm';
import ProfileForm from './ProfileForm';

const TABS = [
  { key: 'profile', label: 'Profile' },
  { key: 'password', label: 'Change Password' },
] as const;

type TabKey = (typeof TABS)[number]['key'];

export default function AccountSettings() {
  const { status } = useSession();
  const user = useAuthStore((state) => state.user);
  const [tab, setTab] = useState<TabKey>('profile');

  return (
    <section className="mx-auto w-full max-w-[1320px] min-w-0 rounded-[32px] bg-white px-6 py-10 md:min-h-[600px] md:px-[60px] md:py-12">
      <header>
        <h1 className="font-fraunces text-2xl font-semibold text-[#2D2F27]">
          Account Settings
        </h1>
        <p className="mt-2 font-poppins text-sm text-[#404337]">
          Customize your account preferences and security settings to match your
          needs
        </p>
      </header>

      {!user ? (
        <p className="mt-12 font-poppins text-sm text-[#404337]">
          {status === 'loading' ? (
            'Loading your account…'
          ) : (
            <>
              Please{' '}
              <Link
                href="/login/"
                className="font-semibold text-[#88B112] hover:underline"
              >
                log in
              </Link>{' '}
              to manage your account settings.
            </>
          )}
        </p>
      ) : (
        <div className="mt-8 flex flex-col md:mt-12 lg:flex-row">
          <div
            role="tablist"
            aria-label="Account settings sections"
            className="flex shrink-0 gap-2 border-b border-[#ECECEB] pb-4 max-lg:overflow-x-auto lg:w-[360px] lg:flex-col lg:border-b-0 lg:pb-0 lg:pr-4"
          >
            {TABS.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                role="tab"
                id={`settings-tab-${key}`}
                aria-selected={tab === key}
                aria-controls={`settings-panel-${key}`}
                onClick={() => setTab(key)}
                className={cn(
                  'h-12 shrink-0 cursor-pointer rounded-xl px-4 text-left font-poppins text-base font-medium whitespace-nowrap transition-colors lg:w-full',
                  tab === key
                    ? 'bg-[#F3F7E7] text-[#88B112]'
                    : 'text-[#606359] hover:bg-[#F7F8F5]',
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            id={`settings-panel-${tab}`}
            aria-labelledby={`settings-tab-${tab}`}
            className="min-w-0 flex-1 pt-8 lg:ml-[60px] lg:border-l lg:border-[#ECECEB] lg:pl-[60px] lg:pt-0"
          >
            {tab === 'profile' ? (
              <ProfileForm
                key={`${user.email ?? ''}|${user.name ?? ''}|${user.image ?? ''}`}
                user={user}
              />
            ) : (
              <ChangePasswordForm />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
