import type { Metadata } from 'next';
import { ForgotPasswordPage } from '@/components/auth/ForgotPasswordPage';

export const metadata: Metadata = {
  title: 'Forgot Password | Trails Nepal',
  description:
    "Enter your e-mail and we'll send you an OTP to reset your password.",
};

export default function ForgotPasswordRoute() {
  return <ForgotPasswordPage />;
}
