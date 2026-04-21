import { MessageSquare, ClipboardCheck, FlaskConical, PackageCheck, Ship } from 'lucide-react';
import SectionHeader from './SectionHeader';

const steps = [
  { icon: MessageSquare, title: 'Enquiry', text: 'Share requirement, destination, MOQ & packaging.' },
  { icon: ClipboardCheck, title: 'Quote & Spec', text: 'Written quote with HS code, Incoterm & lead time.' },
  { icon: FlaskConical, title: 'Sample & QC', text: 'Paid sample + NABL lab report for approval.' },
  { icon: PackageCheck, title: 'Production & Packing', text: 'Lot manufactured, barcoded, retail-ready.' },
  { icon: Ship, title: 'Shipment & Docs', text: 'FCL/LCL, CoO, phytosanitary, BL handled end-to-end.' },
];

export default function ProcessFlow() {
  return (
    <section aria-label="How we work" className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="How we work"
          title="A clean, five-step export process"
          subtitle="Predictable, transparent and documented — from your first enquiry to the shipping bill."
        />
        <ol className="relative grid gap-6 md:grid-cols-5">
          <div
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent md:block"
            aria-hidden
          />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold/40 bg-white text-brand-green-deep shadow-card">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                Step {i + 1}
              </span>
              <h3 className="mt-1 font-serif text-lg font-semibold text-brand-navy">{title}</h3>
              <p className="mt-1 text-sm text-brand-navy/70">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
