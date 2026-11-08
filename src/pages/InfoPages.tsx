import { ExternalLink, Phone, Star } from 'lucide-react';
import { BUSINESS, locationLabel, telHref } from '@/config/business';
import { PageHeader } from '@/components/PageHeader';
import { PhoneButton } from '@/components/PhoneButton';
import { CallBand } from '@/components/CallBand';
import { Link } from '@/lib/router';
import { useSeo } from '@/lib/seo';

export function AboutPage() {
  useSeo({
    title: `About Budget Repair Solutions | HVAC Contractor in ${BUSINESS.regionName}`,
    description: `Learn about ${BUSINESS.name}, an HVAC contractor serving ${BUSINESS.regionName} from ${locationLabel}. Call to talk with the team.`,
    path: '/about',
  });

  const principles = [
    {
      title: 'Start with the problem',
      body: 'Every visit begins with understanding what your system is doing, when it started, and what you have already tried. That shapes the recommendation.',
    },
    {
      title: 'Explain the options',
      body: 'Repair, maintenance, or replacement can all be the right answer depending on the equipment and your budget. We walk through the trade-offs in plain language.',
    },
    {
      title: 'Keep communication direct',
      body: 'Customers reach the business by phone. You speak with the team directly about your heating and cooling needs.',
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A heating and cooling contractor focused on clear answers"
        description={`${BUSINESS.name} provides heating and air conditioning service for homeowners and property owners across ${BUSINESS.regionName}, working from ${locationLabel}.`}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        actions={<PhoneButton label="Call Now" variant="primary" className="px-8 py-4 text-base" />}
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">How we work</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl">What you can expect when you call</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">Who we serve</p>
            <h2 className="text-3xl font-bold leading-tight text-navy-900">Homes and commercial properties</h2>
            <p className="text-base leading-relaxed text-slate-600">
              Homeowners call us about cooling that cannot keep up, heat that stops working, and systems that need attention before the next season. Property owners call about heating and cooling for their buildings.
            </p>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-xl font-bold text-navy-900">Find us</h2>
            <p className="flex items-center gap-3 text-sm text-slate-600">
              <Phone className="h-4 w-4 text-sky-600" aria-hidden="true" />
              <a href={telHref} className="font-semibold text-navy-900 hover:underline">
                {BUSINESS.phoneDisplay}
              </a>
            </p>
            <p className="text-sm text-slate-600">Main location: {locationLabel}</p>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600"
            >
              Open our Google Maps listing
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link to="/contact" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600">
              Contact information
            </Link>
          </div>
        </div>
      </section>

      <CallBand />
    </>
  );
}

export function ReviewsPage() {
  useSeo({
    title: `Customer Reviews | ${BUSINESS.name}`,
    description: `Read genuine customer reviews of ${BUSINESS.name} on Google, and call to talk with the team about your heating or cooling needs.`,
    path: '/reviews',
  });

  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="What customers say about Budget Repair Solutions"
        description="Our reviews are published on Google. Open our listing to read them in full and see the current rating and review count."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Reviews' }]}
        actions={
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-base font-bold text-white transition hover:border-white hover:bg-white/10"
          >
            <Star className="h-4 w-4 text-sky-300" aria-hidden="true" />
            Read reviews on Google
          </a>
        }
      />
      <section className="bg-white py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-3xl font-bold leading-tight text-navy-900">Read them on Google</h2>
          <p className="text-base leading-relaxed text-slate-600">
            We link directly to our Google Maps listing so you can read genuine reviews from customers, along with the current rating and total review count.
          </p>
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600"
          >
            Open the Google Maps listing
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
      <CallBand />
    </>
  );
}

export function ContactPage() {
  useSeo({
    title: `Contact Budget Repair Solutions | HVAC Contractor in ${locationLabel}`,
    description: `Call ${BUSINESS.name} at ${BUSINESS.phoneDisplay} for heating and air conditioning service in ${locationLabel}. Find our location on the map.`,
    path: '/contact',
  });

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Call Budget Repair Solutions"
        description="Phone is the way to reach us. Call to describe your heating or cooling needs and confirm availability."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 lg:col-span-1">
            <h2 className="text-xl font-bold text-navy-900">Phone</h2>
            <PhoneButton label={`Call ${BUSINESS.phoneDisplay}`} className="w-full" />
            <h2 className="text-xl font-bold text-navy-900">Location</h2>
            <p className="text-sm leading-relaxed text-slate-600">{locationLabel}</p>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600"
            >
              Open our Google Maps listing
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm lg:col-span-2">
            <iframe
              src={BUSINESS.mapEmbedSrc}
              title={`${BUSINESS.name} location on Google Maps`}
              className="aspect-[4/3] h-full min-h-[320px] w-full border-0 md:aspect-[16/10]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
      <CallBand />
    </>
  );
}
