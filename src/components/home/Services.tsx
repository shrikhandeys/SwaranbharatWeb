import SectionHeader from './SectionHeader';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="bg-[#F8F9FB] py-20 md:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Export Capabilities"
          title="End-to-End Export Support for International Buyers"
          subtitle="From sourcing to shipment, we support every stage of your import journey."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {services.map(({ icon: Icon, ...service }) => (
            <div
              key={service.slug}
              id={service.slug}
              className="rounded-[24px] border border-brand-navy/8 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/12 text-brand-gold">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold leading-snug text-brand-navy">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-brand-navy/68">{service.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
