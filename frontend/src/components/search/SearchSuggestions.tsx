'use client';

import { useRouter } from 'next/navigation';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { ChevronRight } from 'lucide-react';
import type { Trek } from '@/types/trek';

interface SearchSuggestionsProps {
  results: Trek[];
  query: string;
  onSelect: () => void;
}

export function SearchSuggestions({
  results,
  query,
  onSelect,
}: SearchSuggestionsProps) {
  const router = useRouter();

  function handleSelect(trekId: string) {
    router.push(`/treks/${trekId}`);
    onSelect();
  }

  return (
    <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50">
      <Command
        shouldFilter={false}
        className="rounded-2xl border border-gray-100 shadow-lg"
      >
        <CommandList>
          <CommandEmpty className="py-4 text-center text-sm text-gray-400">
            No treks found for &quot;{query}&quot;
          </CommandEmpty>
          <CommandGroup>
            {results.map((trek) => (
              <CommandItem
                key={trek.id}
                value={trek.id}
                onSelect={() => handleSelect(trek.id)}
                className="flex cursor-pointer items-center justify-between border-b border-gray-100 px-4 py-3 last:border-0"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">
                    {trek.title}
                  </span>
                  <span className="text-xs text-gray-400">{trek.region}</span>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
