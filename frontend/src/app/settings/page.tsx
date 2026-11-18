import type { Metadata } from 'next';
import AccountSettings from '@/components/settings/AccountSettings';
import Footer from '@/components/layout/footer/Footer';

export const metadata: Metadata = {
  title: 'Account Settings | Trails Nepal',
  robots: { index: false },
};

export default function SettingsPage() {
  return (
    <main className="flex w-full flex-col overflow-x-clip bg-[#EBF0F8]">
      <div className="w-full px-4 pb-16 pt-[112px] md:px-8 lg:px-[60px]">
        <AccountSettings />
      </div>
      <Footer />
    </main>
  );
}
