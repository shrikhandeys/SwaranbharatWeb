import { Globe2, Plane, Ship, Handshake } from 'lucide-react';
import SectionHeader from './SectionHeader';

const markets = [
  {
    title: 'UAE',
    text: 'Fast-moving demand for premium agri and dehydrated products.',
    icon: Globe2,
  },
  {
    title: 'Europe',
    text: 'Quality-led sourcing opportunities for structured private-label supply.',
    icon: Plane,
  },
  {
    title: 'USA',
    text: 'Export-ready positioning for buyers needing reliable documentation.',
    icon: Ship,
  },
  {
    title: 'Southeast Asia',
    text: 'Relationship-driven supply chains with flexible commercial coordination.',
    icon: Handshake,
  },
];

export default function ProcessFlow() {
  return (
    <section aria-label="Global presence" className="bg-white py-20 md:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Global Presence"
          title="Connecting India to the World"
          subtitle="We are actively building supply relationships across UAE, Europe, USA and Southeast Asia — focused on long-term partnerships and reliable supply chains."
        />

        <div className="rounded-[32px] border border-brand-navy/10 bg-[#F8F9FB] p-8 md:p-10">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {markets.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-[24px] border border-brand-navy/8 bg-white p-6 shadow-card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold/12 text-brand-gold">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-brand-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-navy/68">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-brand-navy/10 pt-6">
            {['Long-term buyer partnerships', 'Reliable supply chains', 'Premium presentation', 'International standard communication'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-brand-gold/30 bg-brand-gold/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
