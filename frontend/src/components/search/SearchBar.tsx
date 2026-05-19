'use client';
import { Suspense } from 'react';
import type { SearchBarProps } from '@/types/homepage';
import { SearchBarInner } from './SearchBarInner';

export function SearchBar(props: SearchBarProps) {
  return (
    <Suspense fallback={null}>
      <SearchBarInner {...props} />
    </Suspense>
  );
}
