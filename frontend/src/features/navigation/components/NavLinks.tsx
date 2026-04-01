"use client";

import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "Explore", href: "/explore" },
  { label: "Compare Treks", href: "/compare" },
  { label: "Planning Tools", href: "/planning" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-8 md:gap-10">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "relative flex items-center font-poppins text-base font-medium leading-6 tracking-wide transition-colors duration-200",
                  "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full",
                  "after:origin-left after:scale-x-0 after:rounded-full after:bg-brand",
                  "after:transition-transform after:duration-200",
                  "hover:text-white hover:after:scale-x-100",
                  isActive ? "text-white after:scale-x-100" : "text-white/70",
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
