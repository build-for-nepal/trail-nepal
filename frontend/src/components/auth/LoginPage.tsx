'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { takeReturnTo } from '@/lib/authRedirect';
import { AuthShell } from './AuthShell';
import { LoginForm } from './LoginForm';

export function LoginPage() {
  const router = useRouter();

  return (
    <AuthShell>
      <h2 className="mt-12 font-fraunces text-3xl font-bold text-[#2D2F27]">
        Welcome back!
      </h2>
      <p className="mt-1 font-poppins text-sm text-[#404337]">
        Log in to save trips, plan your adventures, and access them across
        devices.
      </p>

      <div className="mt-8">
        <LoginForm onSuccess={() => router.replace(takeReturnTo())} />
      </div>

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
