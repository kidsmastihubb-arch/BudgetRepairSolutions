import { ChevronDown } from 'lucide-react';
import type { ServiceFaq } from '@/data/services';

export function FaqList({ faqs }: { faqs: ServiceFaq[] }) {
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {faqs.map((faq) => (
        <details key={faq.question} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-bold text-navy-900 marker:hidden [&::-webkit-details-marker]:hidden">
            {faq.question}
            <ChevronDown className="h-5 w-5 shrink-0 text-navy-600 transition duration-200 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="pt-4 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
