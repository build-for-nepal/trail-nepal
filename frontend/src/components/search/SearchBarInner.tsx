"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

import type { SearchBarProps } from "@/types/homepage";
import { useDebounce } from "@/hooks/useDebounce";
import { useTrekSearch } from "@/hooks/useTrekSearch";
import { SearchSuggestions } from "./SearchSuggestions";

export function SearchBarInner({
  variant = "light",
  className,
}: SearchBarProps) {
  const isDark = variant === "dark";
  const router = useRouter();
  const searchParams = useSearchParams();

  const [inputValue, setInputValue] = useState<string>(
    () => searchParams.get("q") ?? "",
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const debouncedQuery = useDebounce(inputValue, 300);
  const results = useTrekSearch(debouncedQuery);

  // Sync debounced query to URL — keeps both SearchBar instances in sync
  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedQuery) params.set("q", debouncedQuery);
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [debouncedQuery, router]); // ✅ stable deps, no loop

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsOpen(true);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") setIsOpen(false);
    },
    [],
  );

  // Show dropdown only when input has value — empty input shows nothing
  const showDropdown = isOpen && debouncedQuery.trim().length > 0;

  return (
    <div ref={containerRef} className="relative">
      {/* overflow-hidden stays on inner div for pill shape — dropdown is a sibling outside it */}
      <div
        className={cn(
          "relative flex items-center gap-2 overflow-hidden rounded-[16px] border px-2 py-2 backdrop-blur-sm transition-all duration-200",
          isDark ?
            "border-gray-300 bg-white shadow-sm focus-within:border-gray-400 focus-within:bg-gray-50"
          : "border-white/25 bg-white/20 focus-within:border-white/40 focus-within:bg-white/25",
          className,
        )}
      >
        <Image
          src="/icons/search-line.svg"
          alt=""
          width={20}
          height={20}
          className={cn("shrink-0", isDark && "invert opacity-70")}
          aria-hidden="true"
        />
        <input
          type="search"
          placeholder="Search treks"
          value={inputValue}
          onChange={handleChange}
          onFocus={() => debouncedQuery.trim().length > 0 && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={showDropdown}
          aria-haspopup="listbox"
          aria-label="Search treks"
          className={cn(
            "flex-1 border-none bg-transparent font-poppins text-sm font-normal leading-5 outline-none [&::-webkit-search-cancel-button]:hidden",
            isDark ?
              "text-gray-900 placeholder:text-gray-500"
            : "text-white placeholder:text-white/60",
          )}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-8 w-16"
          aria-hidden="true"
        >
          <Image
            src="/icons/mountain.svg"
            alt=""
            width={66}
            height={32}
            className="absolute bottom-0 right-0 h-full w-full"
          />
          <div className="pointer-events-none absolute left-4.25 top-0.5 h-7.5 w-8.25">
            <Image
              src="/icons/hiker.svg"
              alt=""
              width={33}
              height={30}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>

      {showDropdown && (
        <SearchSuggestions
          results={results}
          query={debouncedQuery}
          onSelect={() => {
            setIsOpen(false);
            setInputValue("");
          }}
        />
      )}
    </div>
  );
}
