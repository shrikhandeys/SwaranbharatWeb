import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { insights } from '@/data/insights';

const categoryAccent: Record<string, string> = {
  'Product Research': 'bg-brand-green/10 text-brand-green-deep',
  'Market Research': 'bg-brand-navy/10 text-brand-navy',
  'Export Updates': 'bg-brand-gold/20 text-brand-gold',
  'HS Code Knowledge': 'bg-brand-beige text-brand-green-deep',
};

export default function ResearchPreview() {
  return (
    <section id="insights" className="bg-brand-sand py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Research & Insights"
          title="Decision-grade research for global traders"
          subtitle="Product research, market intelligence, export advisories and HS code knowledge — curated for merchant exporters and buyers."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {insights.map((p) => (
            <article
              key={p.slug}
              className="flex h-full flex-col rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span
                className={`inline-block w-fit rounded-full px-3 py-1 text-[11px] font-semibold ${
                  categoryAccent[p.category] ?? 'bg-brand-sand text-brand-navy'
                }`}
              >
                {p.category}
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-brand-navy">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-brand-navy/70">{p.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-brand-navy/60">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" aria-hidden />
                  {new Date(p.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {p.readMinutes} min read
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 rounded-full border border-brand-navy/20 bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy hover:bg-brand-beige"
          >
            All research & insights
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
