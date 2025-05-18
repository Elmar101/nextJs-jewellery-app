'use client';
import { AppStore, store } from '@/redux-store/store';
import { useRef } from 'react';
import { Provider } from 'react-redux';

export default function UserReduxProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
