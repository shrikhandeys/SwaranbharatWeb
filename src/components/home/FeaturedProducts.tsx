import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './SectionHeader';
import { featuredProducts } from '@/data/products';

export default function FeaturedProducts() {
  return (
    <section id="featured" className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Featured Products"
          title="Bulk, lab-tested, export-ready SKUs"
          subtitle="A starting point for global buyers. Request a quote for MOQ, HS code, lead time and destination-specific documentation."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((p) => (
            <article
              key={p.slug}
              className="group overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-brand-sand">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-1 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider">
                  <span className="text-brand-gold">{p.hsCode ? `HS ${p.hsCode}` : 'Export SKU'}</span>
                  {p.moq && <span className="text-brand-navy/60">MOQ {p.moq}</span>}
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand-navy">{p.name}</h3>
                <p className="mt-2 text-sm text-brand-navy/70">{p.blurb}</p>
                <div className="mt-4 flex gap-2">
                  <Link
                    href="#inquiry"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-brand-green px-4 py-2 text-xs font-semibold text-white hover:bg-brand-green-deep"
                  >
                    Request Quote
                  </Link>
                  <Link
                    href={`/products/${p.categorySlug}/${p.slug}`}
                    className="inline-flex items-center justify-center rounded-full border border-brand-navy/15 px-4 py-2 text-xs font-semibold text-brand-navy hover:bg-brand-sand"
                  >
                    Details
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
