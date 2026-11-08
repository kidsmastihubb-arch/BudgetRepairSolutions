import { useState, useEffect } from 'react';
import { Menu, Snowflake, X } from 'lucide-react';
import { BUSINESS } from '@/config/business';
import { NAV_LINKS } from '@/config/navigation';
import { Link, usePathname } from '@/lib/router';
import { PhoneButton } from '@/components/PhoneButton';

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Link to="/" className="flex items-center gap-3" aria-label={`${BUSINESS.name} home`}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-sky-300">
            <Snowflake className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold text-navy-900">{BUSINESS.name}</span>
            <span className="text-xs font-medium text-slate-500">HVAC Contractor, {BUSINESS.city}, {BUSINESS.region}</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((item) => {
              const active = item.to === pathname;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    aria-current={active ? 'page' : undefined}
                    className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                      active ? 'bg-navy-50 text-navy-900' : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <PhoneButton label="Call Now" variant="primary" className="hidden px-5 py-2.5 lg:inline-flex" />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-navy-900 transition hover:bg-slate-50 xl:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 xl:hidden ${
          menuOpen ? 'max-h-[40rem]' : 'max-h-0 border-t-0'
        }`}
      >
        <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-6 py-6">
          <ul className="grid gap-1">
            {NAV_LINKS.map((item) => {
              const active = item.to === pathname;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    aria-current={active ? 'page' : undefined}
                    className={`block rounded-xl px-4 py-3 text-base font-semibold ${
                      active ? 'bg-navy-50 text-navy-900' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <PhoneButton label="Call Now" className="mt-6 w-full" />
        </nav>
      </div>
    </header>
  );
}
