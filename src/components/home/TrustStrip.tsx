import {
  ShieldCheck,
  FlaskConical,
  Package,
  Tag,
  Truck,
  BadgeCheck,
} from 'lucide-react';

const trustItems = [
  { icon: ShieldCheck, label: 'Export Ready' },
  { icon: FlaskConical, label: 'Lab Tested' },
  { icon: Package, label: 'Bulk Supply' },
  { icon: Tag, label: 'Private Label' },
  { icon: Truck, label: 'Global Logistics' },
  { icon: BadgeCheck, label: 'Verified Sourcing' },
];

export default function TrustStrip() {
  return (
    <section aria-label="Trust indicators" className="border-b border-brand-navy/10 bg-brand-sand">
      <div className="container grid grid-cols-2 gap-y-6 py-8 sm:grid-cols-3 lg:grid-cols-6">
        {trustItems.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-3 text-center">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green-deep">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-sm font-semibold text-brand-navy">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
