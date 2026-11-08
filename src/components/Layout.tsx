import type { ReactNode } from 'react';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { MobileCallBar } from '@/components/MobileCallBar';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-slate-700 antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy-900"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1 pb-24 md:pb-0">
        {children}
      </main>
      <SiteFooter />
      <MobileCallBar />
    </div>
  );
}
