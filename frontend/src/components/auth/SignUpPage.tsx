'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { takeReturnTo } from '@/lib/authRedirect';
import { AuthShell } from './AuthShell';
import { SignUpForm } from './SignUpForm';

export function SignUpPage() {
  const router = useRouter();

  return (
    <AuthShell panelClassName="p-7 sm:p-8">
      <h2 className="mt-12 font-fraunces text-3xl font-bold text-[#2D2F27]">
        Create your account
      </h2>
      <p className="mt-1 font-poppins text-sm text-[#404337]">
        Join Trails Nepal to save trips, manage your travel plans, and access
        them across devices.
      </p>

      <div className="mt-8">
        <SignUpForm onSuccess={() => router.replace(takeReturnTo())} />
      </div>

      <p className="mt-6 text-center font-poppins text-sm text-[#62675D]">
        Already have an account?{' '}
        <Link
          href="/login/"
          className="font-semibold text-[#88B112] hover:underline"
        >
          Log in
        </Link>
      </p>

      <p className="mt-8 text-center font-poppins text-[10px] font-medium uppercase tracking-[0.2em] text-[#9AA1AC]">
        © 2026 Trails Nepal. All rights reserved.
      </p>
    </AuthShell>
  );
}
