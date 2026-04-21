import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const highlights = [
  'India-based merchant exporter with multi-origin sourcing network',
  'Lab-tested, NABL-accredited quality at every lot',
  'Private-label, CMS-ready catalog that scales across categories',
  'End-to-end documentation and global logistics support',
];

export default function AboutPreview() {
  return (
    <section id="about" className="py-20">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
              alt="Export warehouse and bulk packaging operations"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-brand-gold/30 bg-white/95 p-4 shadow-card backdrop-blur md:block">
            <p className="font-serif text-2xl font-semibold text-brand-navy">25+</p>
            <p className="text-xs uppercase tracking-wider text-brand-navy/60">
              Countries served
            </p>
          </div>
        </div>

        <div>
          <SectionHeader
            align="left"
            eyebrow="About Swaranbharat"
            title="A premium, trust-first merchant exporter from India"
            subtitle="Swaranbharat ExportSarathi connects global B2B buyers with verified Indian supply — spanning agri commodities, dehydrated products, powdered spices and sustainable paper products. Our focus is consistent specs, clean documentation and on-time shipments."
          />
          <ul className="space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-brand-navy/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-green" aria-hidden />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-navy-deep"
            >
              Learn more about us
            </Link>
            <Link
              href="#inquiry"
              className="inline-flex items-center rounded-full border border-brand-navy/20 px-5 py-2.5 text-sm font-semibold text-brand-navy hover:border-brand-navy hover:bg-brand-sand"
            >
              Start an enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
