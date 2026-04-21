import {
  Handshake,
  FlaskConical,
  PackageCheck,
  FileCheck2,
  Tag,
  LineChart,
} from 'lucide-react';
import SectionHeader from '@/components/home/SectionHeader';

const capabilities = [
  {
    icon: Handshake,
    title: 'Product Sourcing',
    text: 'Multi-origin sourcing from verified Indian suppliers, farms and processors.',
  },
  {
    icon: FlaskConical,
    title: 'Quality Inspection & Lab Testing',
    text: 'NABL-accredited testing, spec sheets and COA for every consignment.',
  },
  {
    icon: PackageCheck,
    title: 'Bulk Supply & Export Packaging',
    text: 'FCL/LCL bulk loads with retail-ready, barcoded, export-grade packaging.',
  },
  {
    icon: FileCheck2,
    title: 'Export Documentation Support',
    text: 'IEC, HS code, CoO, phytosanitary, BL — handled end-to-end.',
  },
  {
    icon: Tag,
    title: 'Private Label / White Label',
    text: 'Custom branding, artwork and packaging for importers and retail buyers.',
  },
  {
    icon: LineChart,
    title: 'Market Research & Consultation',
    text: 'Product research, demand analysis and HS-code guidance for new markets.',
  },
];

export default function CoreCapabilities() {
  return (
    <section aria-labelledby="capabilities" className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="What we do"
          title="Core capabilities, end-to-end"
          subtitle="One partner for sourcing, quality, packaging, documentation and global logistics."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green-deep">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-brand-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
