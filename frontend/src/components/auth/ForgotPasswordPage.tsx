'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { FormEvent } from 'react';
import Footer from '@/components/layout/footer/Footer';
import { cn } from '@/lib/utils';
import { AUTH_PRIMARY_BUTTON_CLASS } from './authStyles';
import { TextField } from './TextField';
import { getEmailError } from './validation';

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);

  const emailError = touched ? getEmailError(email) : null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched(true);
  };

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

          <form onSubmit={handleSubmit} noValidate className="mt-8 text-left">
            <TextField
              id="forgot-email"
              label="Email Address"
              type="email"
              autoComplete="email"
              placeholder="username@email.com"
              value={email}
              onChange={setEmail}
              onBlur={() => setTouched(true)}
              error={emailError}
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
