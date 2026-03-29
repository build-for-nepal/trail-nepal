// features/navigation/components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { SearchBar } from "./SearchBar";

export function Navbar() {
  return (
    // Glassmorphism header — bg handled via Tailwind, not inline style
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
      {/* Max 1440px container — fluid below that breakpoint */}
      <div className="flex justify-between items-center px-6 md:px-20 py-6 max-w-[1440px] mx-auto w-full">
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

        <NavLinks />
        <SearchBar />
      </div>
    </header>
  );
}
