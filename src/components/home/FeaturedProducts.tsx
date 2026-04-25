import Image from 'next/image';
import Link from 'next/link';
import { Package, Scale } from 'lucide-react';
import SectionHeader from './SectionHeader';

const homepageProducts = [
  {
    name: 'Moringa Powder',
    image: '/products/moringa-powder.jpg',
    description: '100% Natural | Nutrient Rich | Export Grade',
  },
  {
    name: 'Dehydrated Onion',
    image: '/products/onion-powder.jpg',
    description: 'Hygienic Processing | Long Shelf Life',
  },
  {
    name: 'Turmeric & Spices',
    image: '/products/turmeric-powder.jpg',
    description: 'Authentic Origin | High Curcumin Quality',
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-white py-20 md:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Our Premium Products"
          title="Natural products presented with a premium export-first feel"
          subtitle="Clean visuals, real product photography and concise export-grade messaging for global buyers."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homepageProducts.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[28px] border border-brand-navy/10 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F9FB]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-brand-navy">{product.name}</h3>
                <p className="mt-2 text-sm leading-7 text-brand-navy/68">{product.description}</p>

                <dl className="mt-4 divide-y divide-brand-navy/8 rounded-2xl border border-brand-navy/10 bg-[#F8F9FB] text-xs">
                  <div className="flex items-center gap-3 px-4 py-2.5">
                    <Scale className="h-4 w-4 flex-none text-brand-gold" strokeWidth={1.6} aria-hidden />
                    <dt className="font-semibold uppercase tracking-[0.12em] text-brand-navy/60">
                      MOQ
                    </dt>
                    <dd className="ml-auto font-medium text-brand-navy">Available on Request</dd>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2.5">
                    <Package className="h-4 w-4 flex-none text-brand-gold" strokeWidth={1.6} aria-hidden />
                    <dt className="font-semibold uppercase tracking-[0.12em] text-brand-navy/60">
                      Packaging
                    </dt>
                    <dd className="ml-auto font-medium text-brand-navy">Bulk Export Packaging</dd>
                  </div>
                </dl>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="#inquiry"
                    className="inline-flex items-center rounded-full bg-brand-gold px-4 py-2 text-xs font-semibold text-brand-navy transition hover:brightness-110"
                  >
                    Request Sample
                  </Link>
                  <Link
                    href="#inquiry"
                    className="inline-flex items-center rounded-full border border-brand-navy/15 px-4 py-2 text-xs font-semibold text-brand-navy transition hover:bg-[#F8F9FB]"
                  >
                    Get Quotation
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
