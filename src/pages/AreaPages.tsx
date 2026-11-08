import { ArrowRight, MapPin } from 'lucide-react';
import { BUSINESS, locationLabel } from '@/config/business';
import { PageHeader } from '@/components/PageHeader';
import { PhoneButton } from '@/components/PhoneButton';
import { FaqList } from '@/components/FaqList';
import { CallBand } from '@/components/CallBand';
import { Link } from '@/lib/router';
import { useSeo } from '@/lib/seo';
import { SERVICE_AREAS, type ServiceArea } from '@/data/areas';
import { SERVICES } from '@/data/services';

export function AreaDetailPage({ area }: { area: ServiceArea }) {
  useSeo({
    title: `HVAC Services in ${area.city}, ${BUSINESS.region} | ${BUSINESS.name}`,
    description: `Heating, cooling, and HVAC maintenance in ${area.city}, ${BUSINESS.regionName}. Call ${BUSINESS.name} to confirm service for your property.`,
    path: `/${area.slug}`,
  });

  return (
    <>
      <PageHeader
        eyebrow="Service Area"
        title={`HVAC Services in ${area.city}, ${BUSINESS.region}`}
        description={area.intro[0]}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Service Areas', to: '/service-areas' },
          { label: `${area.city}, ${BUSINESS.region}` },
        ]}
        actions={<PhoneButton label={`Call for HVAC Service in ${area.city}`} variant="primary" className="px-8 py-4 text-base" />}
      />

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-navy-900">Living and working in {area.city}</h2>
            {area.intro.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-navy-900">Local needs we often hear about</h2>
            <ul className="grid gap-4">
              {area.customerNeeds.map((need) => (
                <li key={need} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-relaxed text-slate-700">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                  {need}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-navy-900">HVAC services in {area.city}</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <li key={service.slug} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 font-bold text-navy-900">
                <service.icon className="h-5 w-5 text-sky-600" aria-hidden="true" />
                {service.name}
              </li>
            ))}
          </ul>
          <Link to="/hvac-services" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600">
            Read about each HVAC service
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Questions</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900">{area.city} FAQs</h2>
          </div>
          <div className="lg:col-span-2">
            <FaqList faqs={area.faqs} />
          </div>
        </div>
      </section>

      <CallBand headline={`Need HVAC service in ${area.city}? Call Budget Repair Solutions.`} />
    </>
  );
}

export function ServiceAreasPage() {
  useSeo({
    title: `HVAC Service Areas in Georgia | ${BUSINESS.name}`,
    description: `See the Georgia areas served by ${BUSINESS.name}, and call to confirm coverage for your property.`,
    path: '/service-areas',
  });

  return (
    <>
      <PageHeader
        eyebrow="Service Areas"
        title="Where Budget Repair Solutions works"
        description={`Our main location is ${locationLabel}. Call to confirm whether your property is within our current service area.`}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Service Areas' }]}
        actions={<PhoneButton label="Call Now" variant="primary" className="px-8 py-4 text-base" />}
      />
      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.slug}
              to={`/${area.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
            >
              <MapPin className="h-6 w-6 text-sky-600" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-navy-900">
                {area.city}, {BUSINESS.region}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">{area.intro[0]}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-navy-800">
                View {area.city} HVAC services
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CallBand />
    </>
  );
}
