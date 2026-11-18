import Image from 'next/image';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AuthShellProps = {
  panelClassName?: string;
  children: ReactNode;
};

/**
 * Auth page layout: the site navigation sits above (fixed, from the root
 * layout) over a full-height mountain backdrop. There is no footer.
 */
export function AuthShell({ panelClassName, children }: AuthShellProps) {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative min-h-dvh w-full overflow-hidden">
        <Image
          src="/images/Carousel/ebc.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1440px] flex-col lg:flex-row">
          {/* Left — branding over the mountain backdrop */}
          <div className="hidden flex-col justify-between lg:flex lg:flex-1 lg:pb-15 lg:pl-25 lg:pt-32">
            <div />
            <div>
              <h1 className="font-fraunces text-5xl font-semibold leading-[1.08] text-white xl:text-6xl">
                Find Your Trail.
                <br />
                Discover Nepal.
              </h1>
              <span className="mt-7 block h-1 w-24 rounded-full bg-[#88B112]" />
            </div>
            <figure>
              <blockquote className="text-lg text-white/90">
                “The mountains are calling, and I must go.”
              </blockquote>
              <figcaption className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-white">
                — John Muir
              </figcaption>
            </figure>
          </div>

          {/* Right — auth panel */}
          <div className="flex w-full flex-1 items-center justify-center px-4 pb-10 pt-28 sm:px-8 lg:w-[600px] lg:flex-none lg:shrink-0 lg:pb-15 lg:pl-0 lg:pr-25 xl:w-[700px]">
            <div
              className={cn(
                'w-full max-w-md rounded-[32px] bg-white p-8 shadow-2xl sm:p-10 lg:max-w-[500px] xl:max-w-[600px]',
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
          </div>
        </div>
      </section>
    </main>
  );
}
