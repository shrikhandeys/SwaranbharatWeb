import {
  MapPin,
  ShieldCheck,
  FlaskConical,
  Boxes,
  FileCheck2,
  MessagesSquare,
  Network,
  Handshake,
} from 'lucide-react';
import SectionHeader from '@/components/home/SectionHeader';

const reasons = [
  { icon: MapPin, title: 'India-based trusted exporter' },
  { icon: ShieldCheck, title: 'Quality-first sourcing approach' },
  { icon: FlaskConical, title: 'Lab-tested & compliance-ready' },
  { icon: Boxes, title: 'Bulk order capability' },
  { icon: FileCheck2, title: 'Export-ready documentation' },
  { icon: MessagesSquare, title: 'Transparent communication' },
  { icon: Network, title: 'Scalable supply chain' },
  { icon: Handshake, title: 'Long-term trade relationships' },
];

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-choose-us" className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Why choose us"
          title="Built for international buyers"
          subtitle="Eight concrete reasons importers, distributors and private-label brands choose SwaranBharat."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title }) => (
            <li
              key={title}
              className="flex items-start gap-3 rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-card"
            >
              <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <p className="text-sm font-semibold leading-snug text-brand-navy">{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
