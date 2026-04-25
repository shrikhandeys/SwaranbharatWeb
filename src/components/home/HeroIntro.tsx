import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Quality-Focused Sourcing',
  'Export-Oriented Processing',
  'Flexible MOQ for Buyers',
  'Reliable Global Supply Network',
];

const markets = ['UAE', 'Europe', 'USA', 'Southeast Asia'];

export default function HeroIntro() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
            Who We Are
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-brand-navy md:text-4xl">
            Premium agri-export partner for international buyers.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-700 md:text-lg">
            We specialize in sourcing and exporting premium quality dehydrated agricultural
            products and commodities from India to global markets — with a focus on quality,
            compliance and reliable supply.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-brand-ivory px-4 py-3"
              >
                <CheckCircle2 className="h-5 w-5 flex-none text-brand-gold" aria-hidden />
                <span className="text-sm font-semibold text-brand-navy">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-[28px] border border-slate-200 bg-brand-ivory p-7 shadow-[0_30px_60px_-45px_rgba(11,31,58,0.45)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
            Global Buyer Focus
          </p>
          <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-brand-navy md:text-3xl">
            Luxury export positioning with clear B2B conversion paths.
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Built for importers, distributors and private-label buyers across UAE, Europe, USA
            and Southeast Asia.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {markets.map((market) => (
              <div
                key={market}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-brand-navy"
              >
                {market}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-brand-gold/40 bg-brand-gold/10 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
              Conversion Focus
            </p>
            <p className="mt-2 text-sm leading-6 text-brand-navy/90">
              Sample requests, buyer enquiries and quotation flows are surfaced from the first
              screen.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
