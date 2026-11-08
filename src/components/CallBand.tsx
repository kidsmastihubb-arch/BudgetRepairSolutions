import { BUSINESS } from '@/config/business';
import { PhoneButton } from '@/components/PhoneButton';

interface CallBandProps {
  headline?: string;
  supporting?: string;
  label?: string;
}

export function CallBand({
  headline = 'Need HVAC Repair or Installation? Call Budget Repair Solutions.',
  supporting = 'Speak directly with Budget Repair Solutions about your heating and cooling needs.',
  label = 'Call Now',
}: CallBandProps) {
  return (
    <section className="bg-navy-900 py-20 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 text-center">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{headline}</h2>
        <p className="max-w-2xl text-lg leading-relaxed text-white/80">{supporting}</p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <PhoneButton label={label} variant="primary" className="px-8 py-4 text-base" />
          <span className="text-base font-semibold text-white/90">{BUSINESS.phoneDisplay}</span>
        </div>
      </div>
    </section>
  );
}
