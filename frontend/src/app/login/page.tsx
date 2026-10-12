import type { Metadata } from 'next';
import { LoginPage } from '@/components/auth/LoginPage';

export const metadata: Metadata = {
  title: 'Log In | Trails Nepal',
  description: 'Log in to manage your listings or access your trek plans.',
};

export default function LoginRoute() {
  return <LoginPage />;
}
