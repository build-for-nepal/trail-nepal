'use client';

import Link from 'next/link';
import Footer from '@/components/layout/footer/Footer';
import { cn } from '@/lib/utils';
import {
  AUTH_INPUT_CLASS,
  AUTH_LABEL_CLASS,
  AUTH_PRIMARY_BUTTON_CLASS,
} from './authStyles';

export function ForgotPasswordPage() {
  return (
    <main className="flex flex-1 flex-col bg-[#EAEFF8]">
      <section className="w-full px-4 pt-24 pb-[50px] sm:px-6">
        <div className="mx-auto mt-[60px] flex min-h-[600px] w-full max-w-[600px] flex-col rounded-[32px] bg-white px-6 py-10 text-center shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:px-[60px] sm:pt-[48px] sm:pb-[40px]">
          <h1 className="font-fraunces text-3xl font-bold text-[#2D2F27]">
            Forgot your password?
          </h1>
          <p className="mt-2 font-poppins text-sm text-[#404337]">
            Enter your e-mail below, and we&apos;ll send you an OTP.
          </p>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="mt-8 text-left"
          >
            <label htmlFor="email" className={AUTH_LABEL_CLASS}>
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="username@email.com"
              className={cn(AUTH_INPUT_CLASS, 'mt-2')}
            />

            <button
              type="submit"
              className={cn(AUTH_PRIMARY_BUTTON_CLASS, 'mt-6')}
            >
              Send email
            </button>
          </form>

          <Link
            href="/login/"
            className="mt-6 block font-poppins text-md text-[#88B112] hover:underline"
          >
            Back to log in
          </Link>

          <p className="mt-8 font-poppins text-sm text-[#9AA1AC]">
            Note: The password reset email may take a few minutes.
          </p>

          <p className="mt-auto pt-10 font-poppins text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9AA1AC]">
            © 2026 Trails Nepal. All rights reserved.
          </p>
        </div>
      </section>

      <Footer isMainDisplay />
    </main>
  );
}
