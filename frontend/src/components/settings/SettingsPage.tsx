'use client';

import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/components/layout/footer/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { rememberReturnTo } from '@/lib/authRedirect';
import { useAuthStore } from '@/store/authStore';
import { LoginSecurityTab } from './LoginSecurityTab';
import { ProfileTab } from './ProfileTab';

type SettingsTab = 'profile' | 'login-security';

const TAB_TRIGGER_CLASS =
  'rounded-full px-5 py-2.5 font-poppins text-sm font-medium text-[#62675D] hover:text-[#2D2F27] data-[state=active]:bg-white data-[state=active]:font-semibold data-[state=active]:text-[#2D2F27] data-[state=active]:shadow-sm';

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-1 flex-col bg-[#EBF0F8]">
      <div className="mx-auto w-full max-w-[760px] flex-1 px-4 pb-16 pt-[112px] md:px-8">
        {children}
      </div>
      <Footer />
    </main>
  );
}

export function SettingsPage() {
  const user = useAuthStore((state) => state.user);
  const restored = useAuthStore((state) => state.restored);
  const [tab, setTab] = useState<SettingsTab>('profile');

  // Wait for a saved session before deciding the visitor is signed out.
  if (!restored) return <Shell>{null}</Shell>;

  if (!user) {
    return (
      <Shell>
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
          <h1 className="font-fraunces text-2xl font-semibold text-[#272922]">
            Log in to manage your account
          </h1>
          <p className="mx-auto mt-2 max-w-md font-poppins text-sm text-[#606359]">
            Your profile and login settings are available once you are signed
            in.
          </p>
          <Link
            href="/login/"
            onClick={rememberReturnTo}
            className="mt-6 inline-flex h-11 items-center rounded-full bg-[#88B112] px-8 font-poppins text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#7fa800]"
          >
            Log In
          </Link>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <h1 className="font-fraunces text-[32px] font-semibold leading-[1.15] text-[#272922] md:text-[40px]">
        Settings
      </h1>
      <p className="mt-2 font-poppins text-base text-[#606359]">
        Manage your profile and how you sign in.
      </p>

      <Tabs
        value={tab}
        onValueChange={(value) => setTab(value as SettingsTab)}
        className="mt-8"
      >
        <TabsList className="w-fit max-w-full overflow-x-auto rounded-full bg-[#DCE4F1] p-1">
          <TabsTrigger value="profile" className={TAB_TRIGGER_CLASS}>
            Profile
          </TabsTrigger>
          <TabsTrigger value="login-security" className={TAB_TRIGGER_CLASS}>
            Login &amp; Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <ProfileTab
            user={user}
            onManageLogin={() => setTab('login-security')}
          />
        </TabsContent>
        <TabsContent value="login-security">
          <LoginSecurityTab user={user} />
        </TabsContent>
      </Tabs>
    </Shell>
  );
}
