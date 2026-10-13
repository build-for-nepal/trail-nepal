'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { SearchBar } from '@/components/search/SearchBar';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { ChevronDown, LogOut } from 'lucide-react';
import { cn } from 'src/lib/utils';
import { Button } from 'src/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'src/components/ui/dropdown-menu';
import { useAuthStore } from '@/store/authStore';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const clearUser = useAuthStore((state) => state.clearUser);

  const handleSignOut = () => {
    clearUser();
    void signOut({ callbackUrl: '/' });
  };

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
          {user ? (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  aria-label="Account menu"
                  className="group flex cursor-pointer items-center gap-1.5"
                >
                  <span
                    className={cn(
                      'relative size-10 shrink-0 overflow-hidden rounded-full ring-2 transition-colors',
                      isSolid ? 'ring-gray-200' : 'ring-white/60',
                    )}
                  >
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt={user.name ?? 'Profile'}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    ) : (
                      <span className="flex size-full items-center justify-center bg-[#8cc63f] font-poppins text-sm font-semibold text-white">
                        {user.name?.charAt(0).toUpperCase() ?? '?'}
                      </span>
                    )}
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      'size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180',
                      isSolid ? 'text-gray-800' : 'text-white',
                    )}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 font-poppins">
                {user.name && (
                  <DropdownMenuLabel className="truncate text-[12px] font-semibold uppercase tracking-[0.15em] text-[#62675D]">
                    {user.name}
                  </DropdownMenuLabel>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={handleSignOut}
                  className="text-[#EF4444] focus:bg-[#FEF2F2] focus:text-[#EF4444]"
                >
                  <LogOut className="size-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              onClick={() => router.push('/login/')}
              className={`font-poppins px-4 py-4.5 w-[160px] bg-[#8cc63f] hover:bg-[#7ab034] text-white font-semibold rounded-full shadow-lg cursor-pointer transition-transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0 `}
            >
              {' '}
              Log In
            </Button>
          )}
          <MobileMenu scrolled={isSolid} />
        </div>
      </div>
    </header>
  );
}
