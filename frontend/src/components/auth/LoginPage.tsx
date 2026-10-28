'use client';

import { getPendingReturnTo } from '@/lib/pendingSave';
import Link from 'next/link';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { signIn } from 'next-auth/react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AuthShell } from './AuthShell';
import {
  AUTH_INPUT_CLASS,
  AUTH_LABEL_CLASS,
  AUTH_PRIMARY_BUTTON_CLASS,
} from './authStyles';

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-5" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <AuthShell>
      <h2 className="mt-12 font-fraunces text-3xl font-bold text-[#2D2F27]">
        Welcome !
      </h2>
      <p className="mt-1 font-poppins text-sm text-[#404337]">
        Log in to manage your listings or access your trek plans.
      </p>

      <form onSubmit={handleSubmit} className="mt-8">
        <label htmlFor="email" className={AUTH_LABEL_CLASS}>
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="username@email.com"
          className={cn(AUTH_INPUT_CLASS, 'mt-2')}
        />

        <div className="mt-4">
          <div className="flex items-center justify-between gap-2">
            <label htmlFor="password" className={AUTH_LABEL_CLASS}>
              Password
            </label>
            <Link
              href="/forgot-password/"
              className="font-poppins text-[12px] text-[#2D2F27] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative mt-2">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className={cn(AUTH_INPUT_CLASS, 'pr-12')}
            />
            <button
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              aria-pressed={showPassword}
              className="absolute inset-y-0 right-0 flex items-center px-3.5 text-[#9AA1AC] transition-colors hover:text-[#62675D]"
            >
              {showPassword ? (
                <EyeOff className="size-5" aria-hidden="true" />
              ) : (
                <Eye className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <button type="submit" className={cn(AUTH_PRIMARY_BUTTON_CLASS, 'mt-6')}>
          Log In
        </button>
      </form>

      <div className="my-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-[#E5E9EF]" />
        <span className="font-poppins text-[11px] font-medium text-[#9AA1AC]">
          OR
        </span>
        <span className="h-px flex-1 bg-[#E5E9EF]" />
      </div>

      <button
        type="button"
        onClick={() =>
          signIn('google', { callbackUrl: getPendingReturnTo() ?? '/' })
        }
        className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-[#E2E8F0] bg-white font-poppins text-sm font-medium text-[#292B25] transition-colors hover:bg-[#F7F9FC]"
      >
        <GoogleIcon />
        Continue with Google
      </button>

      <p className="mt-6 text-center font-poppins text-sm text-[#62675D]">
        Don&apos;t have an account?{' '}
        <Link
          href="/signup/"
          className="font-semibold text-[#88B112] hover:underline"
        >
          Create one
        </Link>
      </p>

      <p className="mt-8 text-center font-poppins text-[10px] font-medium uppercase tracking-[0.2em] text-[#9AA1AC]">
        © 2026 Trails Nepal. All rights reserved.
      </p>
    </AuthShell>
  );
}
