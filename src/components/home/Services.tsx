import SectionHeader from './SectionHeader';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="bg-brand-navy py-20 text-brand-ivory">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="End-to-end merchant-export services"
          subtitle="Beyond sourcing — we help you pick the right product, the right market and ship it with confidence."
          className="text-brand-ivory [&_h2]:text-white [&_p]:text-brand-ivory/80"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, ...s }) => (
            <div
              key={s.slug}
              id={s.slug}
              className="group rounded-2xl border border-brand-ivory/15 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-brand-gold-soft/60 hover:bg-white/[0.06]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold-soft">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-white">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ivory/75">{s.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
