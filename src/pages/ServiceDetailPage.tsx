import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { BUSINESS, locationLabel } from '@/config/business';
import { PageHeader } from '@/components/PageHeader';
import { PhoneButton } from '@/components/PhoneButton';
import { FaqList } from '@/components/FaqList';
import { CallBand } from '@/components/CallBand';
import { Link } from '@/lib/router';
import { useSeo } from '@/lib/seo';
import { SERVICE_AREAS } from '@/data/areas';
import { serviceUrl, servicesWithTag, type Service } from '@/data/services';

const RELATED_LIMIT = 4;

export function ServiceDetailPage({ service }: { service: Service }) {
  const seoTitle = `${service.name} in ${locationLabel} | ${BUSINESS.name}`;
  const seoDescription = `${service.summary} Call ${BUSINESS.name} in ${locationLabel} to discuss your needs.`;

  useSeo({ title: seoTitle, description: seoDescription, path: serviceUrl(service) });

  const relatedPool = service.tags.flatMap((tag) => servicesWithTag(tag));
  const related = [...new Set(relatedPool)]
    .filter((item) => item.slug !== service.slug)
    .slice(0, RELATED_LIMIT);
  const area = SERVICE_AREAS[0];
  const Icon = service.icon;

  return (
    <>
      <PageHeader
        eyebrow={`HVAC Service in ${locationLabel}`}
        title={`${service.name} in ${locationLabel}`}
        description={service.summary}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'HVAC Services', to: '/hvac-services' },
          { label: service.name },
        ]}
        actions={
          <>
            <PhoneButton label={`Call for ${service.name}`} variant="primary" className="px-8 py-4 text-base" />
            <Link
              to="/hvac-services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-4 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              All HVAC services
            </Link>
          </>
        }
        image={{ src: service.image, alt: service.imageAlt }}
      />

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="text-3xl font-bold text-navy-900">About {service.name}</h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-600">{service.intro}</p>
          </div>

          <aside className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-lg font-bold text-navy-900">Call about {service.name}</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Call {BUSINESS.name} directly to describe your system and find out whether this service fits your situation.
            </p>
            <PhoneButton label={`Call for ${service.name}`} className="w-full" />
            <p className="text-center text-sm font-semibold text-navy-900">{BUSINESS.phoneDisplay}</p>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="flex items-center gap-3 text-xl font-bold text-navy-900">
              <AlertTriangle className="h-5 w-5 text-sky-600" aria-hidden="true" />
              Common problems and symptoms
            </h2>
            <ul className="mt-6 grid gap-4">
              {service.problems.map((problem) => (
                <li key={problem} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden="true" />
                  {problem}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="flex items-center gap-3 text-xl font-bold text-navy-900">
              <CheckCircle2 className="h-5 w-5 text-sky-600" aria-hidden="true" />
              Work included
            </h2>
            <ul className="mt-6 grid gap-4">
              {service.workIncluded.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Questions</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900">{service.name} FAQs</h2>
          </div>
          <div className="lg:col-span-2">
            <FaqList faqs={service.faqs} />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-navy-900">Related HVAC services</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to={serviceUrl(item)}
                  className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
                >
                  <item.icon className="h-5 w-5 text-sky-600" aria-hidden="true" />
                  <span className="font-bold text-navy-900">{item.name}</span>
                  <span className="text-sm text-slate-600">in {locationLabel}</span>
                </Link>
              </li>
            ))}
          </ul>
          {area && (
            <p className="mt-10 text-sm text-slate-600">
              Serving {area.city}, {BUSINESS.region}:{' '}
              <Link to={`/${area.slug}`} className="font-semibold text-navy-800 underline-offset-4 hover:underline">
                view our HVAC service area page
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      <CallBand headline={`Need ${service.name}? Call Budget Repair Solutions.`} label={`Call for ${service.name}`} />
    </>
  );
}
