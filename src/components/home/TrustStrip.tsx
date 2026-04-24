import { ShieldCheck, ScrollText, PackageCheck, Globe2 } from 'lucide-react';

const trustItems = [
  {
    icon: ShieldCheck,
    label: 'Quality Assured Supply',
  },
  {
    icon: ScrollText,
    label: 'Certification Process In Progress',
  },
  {
    icon: PackageCheck,
    label: 'Export-Ready Packaging',
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
      <div className="container grid gap-4 py-6 md:grid-cols-2 xl:grid-cols-4">
        {trustItems.map(({ icon: Icon, label, detail }) => (
          <div
            key={label}
            className="flex items-start gap-4 rounded-2xl border border-brand-navy/8 bg-[#F8F9FB] px-5 py-4"
          >
            <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
              <Icon className="h-5 w-5" aria-hidden />
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
