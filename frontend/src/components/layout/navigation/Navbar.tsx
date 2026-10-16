'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { SearchBar } from '@/components/search/SearchBar';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from 'src/lib/utils';
import { Button } from 'src/components/ui/button';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Disable fixed navbar on dynamic trek/hike/cultural detail pages (they have
  // a full-screen hero the navbar sits transparently over).
  const isDetailPage =
    pathname.startsWith('/treks/') ||
    pathname.startsWith('/hikes/') ||
    pathname.startsWith('/cultural-tours/');

  const isFixed = !isDetailPage;

  // Transparent over the hero at the top; solid white once scrolled past it.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // The hero is full-viewport height; switch as its bottom reaches the navbar.
      const threshold = window.innerHeight - 88;
      setScrolled(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The auth pages are full-screen, self-contained layouts.
  const isAuthPage =
    pathname === '/login/' ||
    pathname === '/login' ||
    pathname === '/signup/' ||
    pathname === '/signup';
  if (isAuthPage) return null;

  // Light pages have no full-height hero to sit over, so they always use the
  // solid white navbar rather than the transparent-over-hero variant.
  const isLightPage =
    pathname === '/forgot-password/' ||
    pathname === '/forgot-password' ||
    pathname === '/plan-my-trip/' ||
    pathname === '/plan-my-trip' ||
    pathname === '/planmytrip/' ||
    pathname === '/planmytrip';
  const isSolid = scrolled || isLightPage;

  return (
    <header
      className={cn(
        `z-50 w-full absolute top-0 backdrop-blur-md transition-colors duration-300`,
        isSolid ? 'bg-white shadow-md' : 'bg-black/40',
        isFixed && 'fixed',
      )}
    >
      <div className="page-wrapper flex items-center justify-between py-4">
        <Link
          href="/"
          className="shrink-0 transition-opacity duration-200 hover:opacity-80"
          aria-label="Trails Nepal home"
        >
          <Image
            src="/icons/logo.svg"
            alt="Trails Nepal"
            width={49}
            height={35}
            priority
          />
        </Link>

        <NavLinks
          className="hidden pr-14 lg:flex lg:gap-6 xl:gap-10"
          scrolled={isSolid}
        />

        <div className="flex items-center gap-4">
          <SearchBar
            className="hidden w-64 lg:flex xl:w-76"
            variant={isSolid ? 'dark' : 'light'}
          />
          {/* Divider */}
          <div className=" h-[38px] w-px bg-white/40" />
          <Button
            onClick={() => router.push('/login/')}
            className={`font-poppins px-4 py-4.5 w-[160px] bg-[#8cc63f] hover:bg-[#7ab034] text-white font-semibold rounded-full shadow-lg cursor-pointer transition-transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 `}
          >
            {' '}
            Log In
          </Button>
          <MobileMenu scrolled={isSolid} />
        </div>
      </div>
    </header>
  );
}
