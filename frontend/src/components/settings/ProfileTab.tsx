import Image from 'next/image';
import { KeyRound } from 'lucide-react';
import { GoogleIcon } from '@/components/auth/GoogleButton';
import type { AuthUser } from '@/store/authStore';

const METHOD_LABEL = {
  google: 'Google',
  password: 'Email & Password',
} as const;

export function ProfileTab({
  user,
  onManageLogin,
}: {
  user: AuthUser;
  onManageLogin: () => void;
}) {
  const method = METHOD_LABEL[user.signedInWith];

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-4">
        <span className="relative size-16 shrink-0 overflow-hidden rounded-full">
          {user.image ? (
            <Image
              src={user.image}
              alt=""
              fill
              sizes="64px"
              referrerPolicy="no-referrer"
              className="object-cover"
            />
          ) : (
            <span className="flex size-full items-center justify-center bg-[#8cc63f] font-poppins text-2xl font-semibold text-white">
              {user.name?.charAt(0).toUpperCase() ?? '?'}
            </span>
          )}
        </span>
        <div className="min-w-0">
          <p className="truncate font-fraunces text-xl font-semibold text-[#272922]">
            {user.name ?? 'Traveller'}
          </p>
          <p className="mt-0.5 flex items-center gap-2 font-poppins text-sm text-[#606359]">
            {user.signedInWith === 'google' ? (
              <GoogleIcon />
            ) : (
              <KeyRound className="size-5 text-[#5F7C0D]" aria-hidden="true" />
            )}
            Logged in with {method}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onManageLogin}
        className="mt-6 cursor-pointer font-poppins text-sm font-semibold text-[#5F7C0D] underline-offset-4 hover:underline"
      >
        Manage login method
      </button>
    </section>
  );
}
