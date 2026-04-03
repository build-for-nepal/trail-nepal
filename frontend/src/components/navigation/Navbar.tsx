import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { SearchBar } from "./SearchBar";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-6 lg:px-20 mx-auto w-full">
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

        <div className="hidden lg:block">
          <NavLinks />
        </div>

        <div className="flex items-center">
          {/* Desktop Search */}
          <div className="hidden lg:block">
            <SearchBar />
          </div>

          {/* Mobile Trigger */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
