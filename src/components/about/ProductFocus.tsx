import { Leaf, Sun, Package, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/home/SectionHeader';

const focus = [
  {
    icon: Leaf,
    title: 'Agri Products',
    text: 'Chilli, ginger, turmeric, fresh vegetables and farm commodities from verified Indian growers.',
    accent: 'bg-brand-green/10 text-brand-green-deep',
  },
  {
    icon: Sun,
    title: 'Dehydrated & Powdered',
    text: 'Moringa powder, onion powder, turmeric powder and dehydrated vegetables at consistent specs.',
    accent: 'bg-brand-gold/15 text-brand-gold',
  },
  {
    icon: Package,
    title: 'Paper Products',
    text: 'Kraft paper bags, recycled packaging and custom-printed paper products for retail and D2C.',
    accent: 'bg-brand-navy/10 text-brand-navy',
  },
  {
    icon: Sparkles,
    title: 'Future Expansion',
    text: 'Pharma support, engineering goods and software services — scaling on the same trust backbone.',
    accent: 'bg-brand-soft-gold/20 text-brand-gold',
  },
];

export default function ProductFocus() {
  return (
    <section aria-labelledby="product-focus" className="bg-brand-ivory py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Product focus"
          title="What we export today — and what's next"
          subtitle="A scalable catalog architecture built to add new categories without redesign."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {focus.map(({ icon: Icon, title, text, accent }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-card"
            >
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${accent}`}
              >
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-brand-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
