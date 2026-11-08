import { ArrowRight } from 'lucide-react';
import { locationLabel } from '@/config/business';
import { PhoneButton } from '@/components/PhoneButton';
import { serviceUrl, type Service } from '@/data/services';
import { Link } from '@/lib/router';

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10">
      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="text-lg font-bold leading-snug text-navy-900">{service.name}</h3>
        </div>
        <p className="text-sm leading-relaxed text-slate-600">{service.summary}</p>
        <div className="mt-auto flex flex-col gap-4 pt-2">
          <Link
            to={serviceUrl(service)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition after:absolute after:inset-0 after:content-[''] hover:text-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Explore {service.name} in {locationLabel}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <PhoneButton label={`Call for ${service.name}`} variant="secondary" className="relative z-10 w-full" />
        </div>
      </div>
    </article>
  );
}
