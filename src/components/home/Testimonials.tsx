import { Quote } from 'lucide-react';
import SectionHeader from './SectionHeader';

const testimonials = [
  {
    quote:
      'Clean documentation, consistent specs and on-time FCL delivery to Jebel Ali. Swaranbharat has become a reliable origin partner for our moringa and turmeric programmes.',
    name: 'Procurement Lead',
    company: 'Wellness importer, UAE',
  },
  {
    quote:
      'Their private-label support shaved weeks off our launch timeline. Artwork, barcoding and retail-ready cartons were all handled in-house.',
    name: 'Founder',
    company: 'D2C spice brand, United Kingdom',
  },
  {
    quote:
      'HS-code guidance and phytosanitary paperwork were flawless. Customs cleared our first reefer of fresh ginger without a single query.',
    name: 'Head of Sourcing',
    company: 'Wholesale distributor, Singapore',
  },
];

export default function Testimonials() {
  return (
    <section aria-label="Buyer testimonials" className="bg-brand-navy py-20 text-brand-ivory">
      <div className="container">
        <SectionHeader
          eyebrow="Buyer Trust"
          title="What global buyers say"
          subtitle="Real feedback from repeat buyers across the Gulf, Europe and South-East Asia."
          className="[&_h2]:text-white [&_p]:text-brand-ivory/80"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name + t.company}
              className="relative flex h-full flex-col rounded-2xl border border-brand-ivory/15 bg-white/[0.04] p-6"
            >
              <Quote className="h-6 w-6 text-brand-gold-soft" aria-hidden />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-brand-ivory/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-brand-ivory/15 pt-3 text-xs">
                <span className="font-semibold text-white">{t.name}</span>
                <span className="block text-brand-ivory/70">{t.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
