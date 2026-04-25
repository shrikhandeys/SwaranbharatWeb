import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const qualityPoints = [
  'Direct sourcing from trusted farms',
  'Hygienic dehydration process',
  'Quality inspection before dispatch',
  'Export-grade packaging standards',
];

export default function AboutPreview() {
  return (
    <section id="quality" className="bg-white py-20 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Our Quality Approach"
            title="Quality-focused sourcing backed by export-ready processes"
            subtitle="We combine disciplined sourcing, hygiene-first handling and clean packaging standards so buyers get dependable supply, presentation and documentation from India."
          />

          <ul className="space-y-3">
            {qualityPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 rounded-2xl border border-brand-navy/8 bg-[#F8F9FB] px-4 py-3 text-brand-navy/88">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-gold" aria-hidden />
                <span className="text-sm leading-7">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-[24px] border border-brand-gold/30 bg-brand-gold/8 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
              Process note
            </p>
            <p className="mt-2 text-sm leading-7 text-brand-navy/76">
              We are currently working towards obtaining international certifications such as ISO
              and HACCP.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#inquiry"
              className="inline-flex items-center rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy-deep"
            >
              Get Quotation
            </Link>
            <Link
              href="#contact-strip"
              className="inline-flex items-center rounded-full border border-brand-navy/15 px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-[#F8F9FB]"
            >
              Contact Details
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-brand-navy/10 shadow-card">
            <Image
              src="/products/turmeric-powder-alt.jpg"
              alt="Natural turmeric roots and powder — representative of our agri sourcing and processing"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/35 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-5 left-5 max-w-xs rounded-[24px] border border-white/15 bg-brand-navy/88 p-5 text-white shadow-xl backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
              Sourcing to shipment
            </p>
            <p className="mt-2 text-sm leading-7 text-white/82">
              Farm-level sourcing, clean processing and export-grade packaging for international
              B2B buyers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
