'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { SearchBar } from '@/components/search/SearchBar';
import { usePathname } from 'next/navigation';
import { cn } from 'src/lib/utils';

export function Navbar() {
  const pathname = usePathname();

  // Disable fixed navbar on dynamic trek detail pages
  const isTrekDetailPage = pathname.startsWith('/treks/');

  const isFixed = !isTrekDetailPage;

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

  return (
    <header
      className={cn(
        `z-50 w-full absolute top-0 backdrop-blur-md transition-colors duration-300`,
        scrolled ? 'bg-white shadow-md' : 'bg-black/40',
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

        <NavLinks className="hidden lg:flex" scrolled={scrolled} />

        <div className="flex items-center gap-4">
          <SearchBar
            className="hidden lg:flex w-76"
            variant={scrolled ? 'dark' : 'light'}
          />
          <MobileMenu scrolled={scrolled} />
        </div>
      </div>
    </header>
  );
}
