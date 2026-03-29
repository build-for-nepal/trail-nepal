import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavLinks } from "./NavLinks";
import { SearchBar } from "./SearchBar";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50  w-full bg-navbar-bg">
      <div className="relative flex h-full w-full item-center px-8">
        <Link
          href="/"
          className="shrink-0 transition-opacity duration-200  hover:opacity-80"
          aria-label="Trail Nepal home"
        >
          <Image
            src="/icons/logo.svg"
            alt="Trial Nepal"
            width={49}
            height={35}
            priority
          />
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2">
          <NavLinks />
        </div>
        <div className="ml-auto flex item-center">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
