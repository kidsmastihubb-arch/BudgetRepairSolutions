import { ArrowRight, Thermometer } from 'lucide-react';
import { BUSINESS, locationLabel } from '@/config/business';
import { PageHeader } from '@/components/PageHeader';
import { PhoneButton } from '@/components/PhoneButton';
import { ServiceCard } from '@/components/ServiceCard';
import { CallBand } from '@/components/CallBand';
import { Link } from '@/lib/router';
import { SERVICE_AREAS } from '@/data/areas';
import { findServiceBySlug, serviceUrl, type Service } from '@/data/services';
import { useSeo } from '@/lib/seo';

const HERO_IMAGE = 'https://images.pexels.com/photos/20046693/pexels-photo-20046693.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const COOLING_IMAGE = 'https://images.pexels.com/photos/16848596/pexels-photo-16848596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const HEATING_IMAGE = 'https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const FEATURED_SLUGS = ['ac-repair', 'air-conditioning-installation', 'heating-repair', 'furnace-repair', 'heat-pump-repair', 'hvac-maintenance'];
const COOLING_SLUGS = ['ac-repair', 'air-conditioning-installation', 'thermostat-installation'];
const HEATING_SLUGS = ['heating-repair', 'furnace-repair', 'furnace-installation'];

function pickServices(slugs: string[]): Service[] {
  return slugs.map(findServiceBySlug).filter((service): service is Service => service !== undefined);
}

function ServiceSpotlight({
  id,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  slugs,
  reversed = false,
  muted = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  slugs: string[];
  reversed?: boolean;
  muted?: boolean;
}) {
  const services = pickServices(slugs);
  const primary = services[0];

  return (
    <section id={id} className={`py-24 ${muted ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className={`overflow-hidden rounded-3xl shadow-xl shadow-navy-900/10 ${reversed ? 'lg:order-2' : ''}`}>
          <img src={image} alt={imageAlt} loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">{eyebrow}</p>
          <h2 className="text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">{title}</h2>
          <p className="text-lg leading-relaxed text-slate-600">{description}</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to={serviceUrl(service)}
                  className="flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-navy-900 transition hover:border-sky-300 hover:shadow-md"
                >
                  <service.icon className="h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            {primary && <PhoneButton label={`Call for ${primary.name}`} variant="primary" />}
            <Link to="/hvac-services" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600">
              View all HVAC services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  useSeo({
    title: `HVAC Repair and Installation in ${locationLabel} | ${BUSINESS.name}`,
    description: `Heating and air conditioning repair, installation, and maintenance from ${BUSINESS.name} in ${locationLabel}. Call directly to discuss your HVAC needs.`,
    path: '/',
  });

  const featured = pickServices(FEATURED_SLUGS);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <img src={HERO_IMAGE} alt="Modern outdoor air conditioning unit beside a residential building surrounded by landscaping" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-24 pt-20 md:pt-28 lg:pb-32">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-sky-200">
            <Thermometer className="h-4 w-4" aria-hidden="true" />
            HVAC Contractor, {locationLabel}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            Reliable Heating and Air Conditioning Services in Georgia
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-white/85">
            Looking for HVAC repair, heating service, or air conditioning solutions? Contact Budget Repair Solutions to
            discuss your HVAC needs and confirm service availability.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <PhoneButton label="Call Budget Repair Solutions" variant="primary" className="px-8 py-4 text-base" />
            <Link
              to="/hvac-services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-base font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Explore HVAC Services
            </Link>
          </div>
        </div>
      </section>

      <section aria-label="Verified business details" className="border-b border-slate-200 bg-white">
        <dl className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">Business</dt>
            <dd className="mt-1 text-base font-bold text-navy-900">{BUSINESS.name}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">Category</dt>
            <dd className="mt-1 text-base font-bold text-navy-900">{BUSINESS.category}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">Main location</dt>
            <dd className="mt-1 text-base font-bold text-navy-900">{locationLabel}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">Phone</dt>
            <dd className="mt-1">
              <a href={`tel:${BUSINESS.phoneTel}`} className="text-base font-bold text-navy-900 underline-offset-4 hover:underline">
                {BUSINESS.phoneDisplay}
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">HVAC Services</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">Heating, cooling, and ventilation services</h2>
            </div>
            <Link to="/hvac-services" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600">
              View all HVAC services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ServiceSpotlight
        id="air-conditioning"
        eyebrow="Air Conditioning"
        title="Cooling problems, handled with a clear diagnosis"
        description="When your air conditioner stops cooling, makes new noises, or runs without reaching the temperature you set, the first step is finding out why. Call to describe what your system is doing and get the right service for it."
        image={COOLING_IMAGE}
        imageAlt="Outdoor air conditioning condenser unit mounted on a brick wall"
        slugs={COOLING_SLUGS}
        muted
      />

      <ServiceSpotlight
        id="heating"
        eyebrow="Heating"
        title="Warm, dependable heat for every season"
        description="Furnaces, heat pumps, and heating controls all affect how comfortable your home stays in cold weather. Call to talk through heating problems, maintenance, or replacement options."
        image={HEATING_IMAGE}
        imageAlt="Technician adjusting a heating system with precise instruments"
        slugs={HEATING_SLUGS}
        reversed
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Why Budget Repair Solutions</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">Straight answers about your heating and cooling</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Understanding the problem',
                body: 'HVAC issues often look similar from the thermostat. We focus on what is actually happening in your system before recommending work.',
              },
              {
                title: 'Practical repair options',
                body: 'Some problems are a simple fix and others point toward replacement. You get an honest discussion of the options that fit your situation.',
              },
              {
                title: 'Direct phone access',
                body: 'Call the business directly to describe your heating or cooling needs and confirm availability. No forms, no waiting for a callback.',
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Reviews</p>
          <h2 className="text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">See what customers say on Google</h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Read genuine customer reviews on our Google Maps listing, where you can also find our current rating and review count.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 bg-white px-6 py-3 text-sm font-bold text-navy-900 transition hover:border-navy-400 hover:bg-navy-50"
            >
              Read reviews on Google
            </a>
            <Link to="/reviews" className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-navy-800 hover:text-sky-600">
              Customer reviews page
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Service Areas</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">Where we work</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                to={`/${area.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
              >
                <span className="text-lg font-bold text-navy-900">HVAC in {area.city}, {BUSINESS.region}</span>
                <ArrowRight className="h-5 w-5 shrink-0 text-navy-700 transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallBand />
    </>
  );
}
