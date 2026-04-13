"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "../../static/nav-links.config";
import { SearchBar } from "./SearchBar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close on navigation — onOpenChange handles tap-outside and close button
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="lg:hidden flex items-center justify-center p-1 text-white"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </SheetTrigger>

      <SheetContent
        side="top"
        className="h-[55vh] w-full border-none bg-[#EEF1F5] p-0 rounded-b-[40px] shadow-2xl"
      >
        <div className="page-wrapper flex flex-col gap-10 pt-10 pb-12 h-full">
          <SheetHeader className="text-left">
            <SheetTitle asChild>
              <Link href="/" className="inline-block w-fit">
                <Image
                  src="/icons/logo.svg"
                  alt="Trail Nepal"
                  width={80}
                  height={50}
                  priority
                />
              </Link>
            </SheetTitle>
          </SheetHeader>

          <SearchBar variant="dark" />

          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-6">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive =
                  pathname === href || pathname.startsWith(`${href}/`);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        "block font-poppins text-[16px] font-normal tracking-tight transition-all",
                        isActive ? "text-[#8cc63f]" : (
                          "text-[#1e293b] hover:pl-2"
                        ),
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
