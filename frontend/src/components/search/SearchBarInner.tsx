'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import type { SearchBarProps } from '@/types/homepage';

import { useDebounce } from '@/hooks/useDebounce';
import { useTrekSearch } from '@/hooks/useTrekSearch';

import { SearchSuggestions } from './SearchSuggestions';

export function SearchBarInner({
  variant = 'light',
  className,
}: SearchBarProps) {
  const isDark = variant === 'dark';

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * ----------------------------------------
   * State
   * ----------------------------------------
   */
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  /**
   * ----------------------------------------
   * Initial sync from URL
   * Only updates when actual URL query changes
   * ----------------------------------------
   */
  useEffect(() => {
    const q = searchParams.get('q') ?? '';

    setInputValue((prev) => {
      if (prev === q) return prev;
      return q;
    });
  }, [searchParams]);

  /**
   * ----------------------------------------
   * Debounced local search
   * NO router.replace here
   * ----------------------------------------
   */
  const debouncedQuery = useDebounce(inputValue, 250);

  const results = useTrekSearch(debouncedQuery);

  /**
   * ----------------------------------------
   * Dropdown visibility
   * ----------------------------------------
   */
  const showDropdown = useMemo(() => {
    return isOpen && debouncedQuery.trim().length > 0;
  }, [isOpen, debouncedQuery]);

  /**
   * ----------------------------------------
   * Outside click close
   * ----------------------------------------
   */
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  /**
   * ----------------------------------------
   * Input handlers
   * ----------------------------------------
   */
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsOpen(true);
  }, []);

  const handleFocus = useCallback(() => {
    if (inputValue.trim().length > 0) {
      setIsOpen(true);
    }
  }, [inputValue]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }

      if (e.key === 'Enter') {
        e.preventDefault();

        const query = inputValue.trim();

        if (!query) return;

        const params = new URLSearchParams(searchParams.toString());

        params.set('q', query);

        router.push(`${pathname}?${params.toString()}`);

        setIsOpen(false);
      }
    },
    [inputValue, pathname, router, searchParams],
  );

  /**
   * ----------------------------------------
   * Suggestion selection
   * ----------------------------------------
   */
  const handleSelect = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div
        className={cn(
          'relative flex items-center gap-2 overflow-hidden rounded-[16px] border px-2 py-2 backdrop-blur-sm transition-all duration-200',
          isDark
            ? 'border-gray-300 bg-white shadow-sm focus-within:border-gray-400 focus-within:bg-gray-50'
            : 'border-white/25 bg-white/20 focus-within:border-white/40 focus-within:bg-white/25',
          className,
        )}
      >
        <Image
          src="/icons/search-line.svg"
          alt=""
          width={20}
          height={20}
          aria-hidden="true"
          className={cn('shrink-0', isDark && 'invert opacity-70')}
        />

        <input
          type="search"
          placeholder="Search treks"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-label="Search treks"
          aria-autocomplete="list"
          aria-expanded={showDropdown}
          aria-haspopup="listbox"
          className={cn(
            'flex-1 border-none bg-transparent font-poppins text-sm font-normal leading-5 outline-none [&::-webkit-search-cancel-button]:hidden',
            isDark
              ? 'text-gray-900 placeholder:text-gray-500'
              : 'text-white placeholder:text-white/60',
          )}
        />

        {/* Decorative Art */}
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
          onSelect={handleSelect}
        />
      )}
    </div>
  );
}
