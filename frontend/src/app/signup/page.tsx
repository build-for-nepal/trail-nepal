import type { Metadata } from 'next';
import { SignUpPage } from '@/components/auth/SignUpPage';

export const metadata: Metadata = {
  title: 'Sign Up | Trails Nepal',
  description: 'Create a new account or log in to an existing one.',
};

export default function SignUpRoute() {
  return <SignUpPage />;
}
