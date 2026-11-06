'use client';

import * as React from 'react';

export function useDisclosure(initialOpen = false) {
  const [isOpen, setOpen] = React.useState(initialOpen);

  const open = React.useCallback(() => setOpen(true), []);
  const close = React.useCallback(() => setOpen(false), []);
  const toggle = React.useCallback(() => setOpen((value) => !value), []);

  return { isOpen, open, close, toggle, setOpen };
}
