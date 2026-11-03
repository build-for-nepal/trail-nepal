'use client';

import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AdminToastProvider } from './AdminToast';

// Scoped to the admin panel so the rest of the site never loads react-query.
export function AdminProviders({ children }: { children: React.ReactNode }) {
  const [client] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { refetchOnWindowFocus: false, retry: 1 },
        },
      }),
  );
  return (
    <QueryClientProvider client={client}>
      <AdminToastProvider>{children}</AdminToastProvider>
    </QueryClientProvider>
  );
}
