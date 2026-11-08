import { PhoneButton } from '@/components/PhoneButton';

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-8px_24px_rgba(10,27,49,0.08)] backdrop-blur md:hidden">
      <PhoneButton label="Call Now" className="w-full" />
    </div>
  );
}
