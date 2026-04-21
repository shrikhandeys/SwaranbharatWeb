import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function AboutCTA() {
  const wa = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    siteConfig.whatsappMessage,
  )}`;

  return (
    <section aria-labelledby="about-cta" className="py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy to-brand-navy-deep p-10 text-white shadow-card md:p-16">
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl"
            aria-hidden
          />
          <div className="relative max-w-3xl">
            <h2
              id="about-cta"
              className="font-serif text-3xl font-semibold leading-tight md:text-4xl"
            >
              Let&rsquo;s build a reliable global trade partnership
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
              Share your requirement, destination and MOQ — we&rsquo;ll reply with a written quote,
              spec sheet and sample plan within one business day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#inquiry"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy shadow-card hover:bg-brand-soft-gold"
              >
                Request Bulk Quote
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white hover:bg-white/10"
              >
                Contact Us
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
