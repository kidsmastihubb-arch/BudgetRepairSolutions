import { Phone } from 'lucide-react';
import { BUSINESS, telHref } from '@/config/business';

type PhoneButtonVariant = 'primary' | 'secondary' | 'light' | 'outline';

const VARIANT_CLASSES: Record<PhoneButtonVariant, string> = {
  primary: 'bg-sky-400 text-navy-950 shadow-lg shadow-sky-500/25 hover:bg-sky-300',
  secondary: 'border border-navy-200 bg-white text-navy-900 hover:border-navy-400 hover:bg-navy-50',
  light: 'bg-white text-navy-900 shadow-lg shadow-black/10 hover:bg-navy-50',
  outline: 'border border-white/40 text-white hover:border-white hover:bg-white/10',
};

interface PhoneButtonProps {
  label?: string;
  variant?: PhoneButtonVariant;
  className?: string;
}

export function PhoneButton({ label = 'Call Now', variant = 'primary', className = '' }: PhoneButtonProps) {
  return (
    <a
      href={telHref}
      aria-label={`${label}: ${BUSINESS.phoneDisplay}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 ${VARIANT_CLASSES[variant]} ${className}`}
    >
      <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
