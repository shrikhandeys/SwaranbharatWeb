import Image from 'next/image';
import SectionHeader from '@/components/home/SectionHeader';

export default function AboutIntro() {
  return (
    <section aria-labelledby="about-intro" className="py-20">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Who we are"
            title="A premium India-based export company — built for global buyers"
          />
          <div className="space-y-4 text-base leading-relaxed text-brand-navy/80 md:text-lg">
            <p>
              SwaranBharat ExportSarathi LLP is an India-based merchant exporter connecting global
              B2B buyers with high-quality agri, dehydrated and value-added Indian products. We
              source, inspect, pack and ship — so importers, distributors and private-label brands
              get a single, accountable export partner.
            </p>
            <p>
              Our focus is simple: <strong>quality, compliance and long-term trade relationships</strong>.
              Every shipment is backed by verified sourcing, lab-tested specs, clean documentation
              and on-time logistics. From moringa powder to dehydrated onion, from turmeric to paper
              bags — we deliver consistent specs at bulk scale.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
              alt="Bulk export packaging and warehouse operations"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-brand-gold/30 bg-white/95 p-4 shadow-card backdrop-blur md:block">
            <p className="font-serif text-2xl font-semibold text-brand-navy">Pune, India</p>
            <p className="text-xs uppercase tracking-wider text-brand-navy/60">
              Global export operations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
