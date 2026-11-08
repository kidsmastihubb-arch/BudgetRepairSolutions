import { ExternalLink, MapPin, Phone, Snowflake } from 'lucide-react';
import { BUSINESS, locationLabel, telHref } from '@/config/business';
import { NAV_LINKS } from '@/config/navigation';
import { SERVICES, serviceUrl } from '@/data/services';
import { SERVICE_AREAS } from '@/data/areas';
import { Link } from '@/lib/router';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3 text-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sky-300">
              <Snowflake className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-base font-bold">{BUSINESS.name}</span>
          </Link>
          <p className="text-sm leading-relaxed">HVAC contractor serving {BUSINESS.regionName}. Call to discuss your heating and cooling needs.</p>
          <a href={telHref} className="inline-flex items-center gap-3 text-lg font-bold text-white hover:text-sky-300">
            <Phone className="h-5 w-5 text-sky-300" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
          <p className="flex items-start gap-3 text-sm">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" aria-hidden="true" />
            <span>{locationLabel}</span>
          </p>
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200"
          >
            View our Google Maps listing
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Company</h2>
          <ul className="grid gap-3 text-sm">
            {NAV_LINKS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">HVAC Services</h2>
          <ul className="grid gap-3 text-sm">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link to={serviceUrl(service)} className="transition hover:text-white">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Service Areas</h2>
          <ul className="grid gap-3 text-sm">
            {SERVICE_AREAS.map((area) => (
              <li key={area.slug}>
                <Link to={`/${area.slug}`} className="transition hover:text-white">
                  HVAC Service in {area.city}, {BUSINESS.region}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {BUSINESS.name}. All rights reserved.</p>
          <p>{BUSINESS.category}, {locationLabel}</p>
        </div>
      </div>
    </footer>
  );
}
