'use client';
import Image from 'next/image';
import Link from 'next/link';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { SearchBarInner } from '@/components/search/SearchBarInner';
import { SearchBar } from '@/components/search/SearchBar';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
      <div className="page-wrapper flex items-center justify-between py-6">
        <Link
          href="/"
          className="shrink-0 transition-opacity duration-200 hover:opacity-80"
          aria-label="Trail Nepal home"
        >
          <Image
            src="/icons/logo.svg"
            alt="Trail Nepal"
            width={49}
            height={35}
            priority
          />
        </Link>

        <NavLinks className="hidden lg:flex" />

        <div className="flex items-center gap-4">
          {/* <SearchBar className="hidden lg:flex w-76" /> */}
          <SearchBar className="hidden lg:flex w-76" />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
