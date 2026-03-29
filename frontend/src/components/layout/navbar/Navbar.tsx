import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavLinks } from "./NavLinks";
import { SearchBar } from "./SearchBar";

export function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "rgba(0, 0, 0, 0.20)" }}
    >
      <div className="flex justify-between items-center px-20 py-6 w-[1440px] mx-auto">
        {/* Logo */}
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
