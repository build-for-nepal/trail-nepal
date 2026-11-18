import type { Metadata } from 'next';
import { SettingsPage } from '@/components/settings/SettingsPage';

export const metadata: Metadata = {
  title: 'Settings | Trails Nepal',
  robots: { index: false },
};

export default function SettingsRoute() {
  return <SettingsPage />;
}
