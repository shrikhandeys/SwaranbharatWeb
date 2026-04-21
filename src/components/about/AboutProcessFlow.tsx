import {
  MessageSquare,
  ListChecks,
  Boxes,
  Beaker,
  FlaskConical,
  PackageCheck,
  FileCheck2,
  Ship,
  Truck,
} from 'lucide-react';
import SectionHeader from '@/components/home/SectionHeader';

const steps = [
  { icon: MessageSquare, title: 'Inquiry', text: 'Buyer shares requirement and destination.' },
  { icon: ListChecks, title: 'Requirement Understanding', text: 'Specs, MOQ, packaging & Incoterm aligned.' },
  { icon: Boxes, title: 'Product Selection', text: 'Best-fit grade, origin and variety chosen.' },
  { icon: Beaker, title: 'Sample Sharing', text: 'Paid sample dispatched for approval.' },
  { icon: FlaskConical, title: 'Quality Check', text: 'NABL lab testing and spec verification.' },
  { icon: PackageCheck, title: 'Packaging', text: 'Export-grade, barcoded, retail-ready packing.' },
  { icon: FileCheck2, title: 'Documentation', text: 'IEC, HS, CoO, phytosanitary, invoices.' },
  { icon: Ship, title: 'Shipment', text: 'FCL/LCL with tracked global logistics.' },
  { icon: Truck, title: 'Delivery Support', text: 'Port clearance and after-shipment assistance.' },
];

export default function AboutProcessFlow() {
  return (
    <section aria-labelledby="our-process" className="bg-brand-sand py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Our process"
          title="Nine steps — from first enquiry to delivery"
          subtitle="Predictable, transparent and documented. Every shipment, every time."
        />

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="relative flex items-start gap-4 rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-card"
            >
              <span
                className="absolute -top-3 -left-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy text-xs font-semibold text-white shadow-card"
                aria-hidden
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-green/10 text-brand-green-deep">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="font-serif text-lg font-semibold text-brand-navy">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-navy/70">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
