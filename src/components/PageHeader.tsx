import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from '@/lib/router';

export interface Crumb {
  label: string;
  to?: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  actions?: ReactNode;
  image?: { src: string; alt: string };
}

export function PageHeader({ eyebrow, title, description, crumbs, actions, image }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-12 md:pt-16 lg:grid-cols-2 lg:pb-24">
        <div className="flex flex-col gap-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              {crumbs.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {index > 0 && <ChevronRight className="h-4 w-4" aria-hidden="true" />}
                  {crumb.to ? (
                    <Link to={crumb.to} className="hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">{eyebrow}</p>}
          <h1 className="text-4xl font-bold leading-[1.15] sm:text-5xl">{title}</h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/80">{description}</p>
          {actions && <div className="flex flex-wrap gap-4 pt-2">{actions}</div>}
        </div>

        {image && (
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
            <img src={image.src} alt={image.alt} className="aspect-[4/3] h-full w-full object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
