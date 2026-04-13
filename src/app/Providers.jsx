'use client';

import { SessionProvider } from 'next-auth/react';
import { AuthProvider } from '@/hooks/Auth/useAuth.jsx';

export function Providers({ children }) {
  return (
    <SessionProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </SessionProvider>
  );
}
