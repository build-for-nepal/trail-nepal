"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "../nav-links.config";
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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="flex items-center justify-center p-1 text-white">
            <Menu size={28} />
          </button>
        </SheetTrigger>

        <SheetContent
          side="top"
          className="h-[55vh] w-full border-none bg-[#EEF1F5] p-0 rounded-b-[40px] shadow-2xl"
        >
          <div className="flex flex-col gap-10 px-8 pt-10 pb-12 h-full">
            {/* 1. LOGO */}
            <SheetHeader className="text-left">
              <SheetTitle asChild>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="inline-block w-fit"
                >
                  <Image
                    src="/icons/logo.svg"
                    alt="Trail Nepal"
                    width={80} //
                    height={50}
                    priority
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>

            {/* 2. SEARCH BAR */}
            <div className="w-full">
              <SearchBar variant="dark" />
            </div>

            {/* 3. NAV LINKS (Stacked) */}
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-6">
                {NAV_LINKS.map(({ label, href }) => {
                  const isActive =
                    pathname === href || pathname.startsWith(`${href}/`);
                  return (
                    <li key={href} className="group">
                      <Link
                        href={href}
                        onClick={() => setIsOpen(false)}
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
    </div>
  );
}
