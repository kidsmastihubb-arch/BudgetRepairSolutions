import { Home } from 'lucide-react';
import { BUSINESS } from '@/config/business';
import { PageHeader } from '@/components/PageHeader';
import { PhoneButton } from '@/components/PhoneButton';
import { Link } from '@/lib/router';

export function NotFoundPage() {
  return (
    <>
      <PageHeader
        eyebrow="Error 404"
        title="This page could not be found"
        description="The link may be outdated or mistyped. Return to the homepage or call us directly for help with your heating and cooling needs."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Page not found' }]}
      />
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-6 py-3 text-sm font-bold text-navy-900 transition hover:border-navy-400 hover:bg-navy-50"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to homepage
          </Link>
          <PhoneButton label={`Call ${BUSINESS.phoneDisplay}`} variant="secondary" />
        </div>
      </section>
    </>
  );
}
