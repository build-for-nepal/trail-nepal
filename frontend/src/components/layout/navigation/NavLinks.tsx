'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '../../../static/nav-links.config';
import { NavLinksProps } from '@/types/homepage';
import { useEffect, useState } from 'react';

export function NavLinks({ className }: NavLinksProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // This only runs on the client after the first render
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav aria-label="Main navigation">
      <ul className={cn('flex items-center gap-8 md:gap-10', className)}>
        {NAV_LINKS.map(({ label, href }) => {
          // Only calculate isActive if we are on the client
          const isActive =
            mounted && (pathname === href || pathname.startsWith(`${href}/`));

          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'relative flex items-center font-poppins text-base font-medium',
                  'whitespace-nowrap leading-6 tracking-wide transition-colors duration-200',
                  'after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full',
                  'after:origin-left after:scale-x-0 after:rounded-full after:bg-brand',
                  'after:transition-transform after:duration-200',
                  'hover:text-white hover:after:scale-x-100',
                  isActive
                    ? 'text-[#8cc63f] after:scale-x-100'
                    : 'text-white/70',
                )}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
