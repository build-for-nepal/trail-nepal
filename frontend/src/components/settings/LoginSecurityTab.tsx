'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { ExternalLink, KeyRound } from 'lucide-react';
import { GoogleIcon } from '@/components/auth/GoogleButton';
import { cn } from '@/lib/utils';
import { connectGoogle } from '@/lib/auth';
import { useToastStore } from '@/store/toastStore';
import type { AuthUser } from '@/store/authStore';
import { ChangePasswordForm } from './ChangePasswordForm';
import { SetUpEmailLoginForm } from './SetUpEmailLoginForm';

const GOOGLE_SECURITY_URL = 'https://myaccount.google.com/security';

const ACTION_BUTTON_CLASS =
  'inline-flex h-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#82B300] px-5 font-poppins text-sm font-medium text-[#5F7C0D] transition hover:bg-[#F3F8E8] disabled:cursor-not-allowed disabled:opacity-60';

function StatusBadge({ connected }: { connected: boolean }) {
  return (
    <span
      className={cn(
        'rounded-full px-2.5 py-1 font-poppins text-[11px] font-semibold',
        connected
          ? 'bg-[#EAF4D0] text-[#4F6A0B]'
          : 'bg-[#EEF1F5] text-[#62675D]',
      )}
    >
      {connected ? 'Connected' : 'Not set up'}
    </span>
  );
}

function MethodCard({
  icon,
  title,
  connected,
  description,
  action,
  children,
}: {
  icon: ReactNode;
  title: string;
  connected: boolean;
  description: ReactNode;
  action?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#EBF0F8]">
            {icon}
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-poppins text-base font-semibold text-[#272922]">
                {title}
              </h2>
              <StatusBadge connected={connected} />
            </div>
            <div className="mt-1 font-poppins text-sm leading-relaxed text-[#606359]">
              {description}
            </div>
          </div>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export function LoginSecurityTab({ user }: { user: AuthUser }) {
  const showToast = useToastStore((state) => state.showToast);
  const hasGoogle = user.methods.includes('google');
  const hasPassword = user.methods.includes('password');

  const [form, setForm] = useState<'setup' | 'change' | null>(null);
  const [connecting, setConnecting] = useState(false);

  const handleConnectGoogle = async () => {
    setConnecting(true);
    try {
      await connectGoogle();
      showToast({ title: 'Google connected' });
    } catch (error) {
      showToast({
        tone: 'error',
        title: "We couldn't connect Google",
        description:
          error instanceof Error ? error.message : 'Please try again.',
      });
    } finally {
      setConnecting(false);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <MethodCard
        icon={<GoogleIcon />}
        title="Google"
        connected={hasGoogle}
        description={
          hasGoogle ? (
            <>
              Log in with your Google account. Your Google password is managed
              by Google.{' '}
              <a
                href={GOOGLE_SECURITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#5F7C0D] hover:underline"
              >
                Google Account security
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </>
          ) : (
            'Log in with one click using your Google account.'
          )
        }
        action={
          !hasGoogle && (
            <button
              type="button"
              onClick={() => void handleConnectGoogle()}
              disabled={connecting}
              className={ACTION_BUTTON_CLASS}
            >
              {connecting ? 'Connecting…' : 'Set up Google login'}
            </button>
          )
        }
      />

      <MethodCard
        icon={<KeyRound className="size-5 text-[#5F7C0D]" aria-hidden="true" />}
        title="Email & Password"
        connected={hasPassword}
        description={
          hasPassword
            ? 'Log in with your email address and a password.'
            : 'Create a password for your existing Trails Nepal account so you can also log in with your email address.'
        }
        action={
          form === null && (
            <button
              type="button"
              onClick={() => setForm(hasPassword ? 'change' : 'setup')}
              className={ACTION_BUTTON_CLASS}
            >
              {hasPassword ? 'Change Password' : 'Set up email login'}
            </button>
          )
        }
      >
        {form === 'setup' && !hasPassword && (
          <SetUpEmailLoginForm
            onDone={() => setForm(null)}
            onCancel={() => setForm(null)}
          />
        )}
        {form === 'change' && hasPassword && (
          <ChangePasswordForm
            onDone={() => setForm(null)}
            onCancel={() => setForm(null)}
          />
        )}
      </MethodCard>

      {hasGoogle && hasPassword && (
        <p className="rounded-xl bg-white/70 px-5 py-4 font-poppins text-sm leading-relaxed text-[#404337]">
          You can use either sign-in method to access the same Trails Nepal
          account.
        </p>
      )}
    </div>
  );
}
