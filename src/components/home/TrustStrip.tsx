import { ShieldCheck, Workflow, BadgeCheck, Globe2 } from 'lucide-react';

const trustItems = [
  {
    icon: ShieldCheck,
    label: 'Quality Assured Supply',
  },
  {
    icon: Workflow,
    label: 'Export-Ready Process',
  },
  {
    icon: BadgeCheck,
    label: 'Growing Certification Standards',
  },
  {
    icon: Globe2,
    label: 'Global Market Focus',
    detail: 'UAE | Europe | USA | Asia',
  },
];

export default function TrustStrip() {
  return (
    <section aria-label="Trust indicators" className="border-b border-brand-navy/10 bg-white">
      <div className="container grid gap-4 py-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-6 xl:py-10">
        {trustItems.map(({ icon: Icon, label, detail }) => (
          <div
            key={label}
            className="flex items-start gap-4 rounded-2xl border border-brand-navy/8 bg-white px-5 py-4"
          >
            <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full border border-brand-gold/35 text-brand-gold">
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold text-brand-navy">{label}</p>
              {detail ? <p className="mt-1 text-xs text-brand-navy/60">{detail}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
