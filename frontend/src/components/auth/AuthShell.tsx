import Image from 'next/image';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AuthShellProps = {
  panelClassName?: string;
  children: ReactNode;
};

export function AuthShell({ panelClassName, children }: AuthShellProps) {
  return (
    <main className="relative h-dvh w-full overflow-hidden">
      <Image
        src="/images/Carousel/ebc.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto flex h-dvh w-full max-w-[1440px] flex-col lg:flex-row">
        {/* Left — branding over the mountain backdrop */}
        <section className="hidden flex-col justify-between lg:flex lg:flex-1 lg:py-15 lg:pl-25">
          <div />
          <div>
            <h1 className="font-fraunces text-5xl font-semibold leading-[1.08] text-white xl:text-6xl">
              Find Your Trail.
              <br />
              Discover Nepal.
            </h1>
            <span className="mt-7 block h-1 w-24 rounded-full bg-[#88B112]" />
          </div>
          <div>
            <p className="text-lg text-white/90">
              “The mountains are calling, and I must go.”
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Techgaun Nepal • Kathmandu
            </p>
          </div>
        </section>

        {/* Right — auth panel */}
        <section className="flex w-full items-start justify-center overflow-y-auto px-4 py-10 sm:px-8 lg:w-[600px] lg:shrink-0 lg:items-center lg:pl-0 lg:pr-25 xl:w-[700px]">
          <div
            className={cn(
              'my-auto w-full max-w-md rounded-[32px] bg-white p-8 shadow-2xl sm:p-10 lg:max-w-[500px] xl:max-w-[600px]',
              panelClassName,
            )}
          >
            <Image
              src="/icons/Logo-Horizontal.svg"
              alt="Trails Nepal"
              width={192}
              height={36}
              priority
            />
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
