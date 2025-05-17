'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';

const NextToastProvider = dynamic(() => import('@heroui/react').then(e => e.ToastProvider), {
  ssr: false,
});

export function ToastProvider() {
  return <NextToastProvider />;
}
