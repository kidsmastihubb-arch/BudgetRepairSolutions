import { BUSINESS } from '@/config/business';
import { PageHeader, type Crumb } from '@/components/PageHeader';
import { PhoneButton } from '@/components/PhoneButton';
import { ServiceCard } from '@/components/ServiceCard';
import { CallBand } from '@/components/CallBand';
import { useSeo } from '@/lib/seo';
import type { Service } from '@/data/services';

interface ServiceListPageProps {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  crumbs: Crumb[];
  services: Service[];
}

export function ServiceListPage({ path, title, description, eyebrow, heading, intro, crumbs, services }: ServiceListPageProps) {
  useSeo({ title, description, path });

  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={heading}
        description={intro}
        crumbs={crumbs}
        actions={<PhoneButton label="Call Now" variant="primary" className="px-8 py-4 text-base" />}
      />
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-slate-500">
            Not sure which service you need? Call {BUSINESS.name} at{' '}
            <a href={`tel:${BUSINESS.phoneTel}`} className="font-semibold text-navy-900 underline-offset-4 hover:underline">
              {BUSINESS.phoneDisplay}
            </a>{' '}
            and describe what your system is doing.
          </p>
        </div>
      </section>
      <CallBand />
    </>
  );
}
