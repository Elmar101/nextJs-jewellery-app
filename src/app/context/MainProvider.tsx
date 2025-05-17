'use client';

import dynamic from 'next/dynamic';
import { PropsWithChildren } from 'react';
import { ToastProvider } from './ToastProvider';
const HeroUIProvider = dynamic(() => import('@heroui/react').then(e => e.HeroUIProvider), {
  ssr: false,
});

export function MainProvider({ children }: PropsWithChildren) {
  return (
    <HeroUIProvider>
      <ToastProvider />
      {children}
    </HeroUIProvider>
  );
}
