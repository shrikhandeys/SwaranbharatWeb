import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { categories } from '@/data/categories';

export default function ProductCategories() {
  return (
    <section id="categories" className="bg-brand-sand py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Product Categories"
          title="Built to scale across commodities and destinations"
          subtitle="Our catalog is organised into clean, extensible categories so every new product and sub-category slots in without a redesign."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/25 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-semibold text-white">{c.name}</h3>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-brand-navy transition group-hover:rotate-12">
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-white/85">{c.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
