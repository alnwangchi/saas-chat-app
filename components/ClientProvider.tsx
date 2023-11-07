'use client';
// 注意這邊要是 client side

import { SessionProvider } from 'next-auth/react';
import React from 'react';

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
