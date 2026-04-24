import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { whatsappLink } from '@/lib/utils';

const highlights = [
  'Quality-Focused Sourcing',
  'Export-Oriented Processing',
  'Flexible MOQ for Buyers',
  'Reliable Global Supply Network',
];

export default function HeroSlider() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <Image
        src="/home/banner-purpose.png"
        alt="Swaranbharat export banner with globe, ships, aircraft and premium product highlights"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[rgba(11,31,58,0.78)]" />

      <div className="container relative z-10 grid min-h-[620px] items-center gap-12 py-16 lg:min-h-[700px] lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-brand-gold/35 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
            Global Export Partner From India
          </span>

          <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.06] md:text-5xl lg:text-7xl">
            {siteConfig.name}
          </h1>

          <p className="mt-4 text-xl font-medium text-white/90 md:text-2xl">{siteConfig.tagline}</p>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/78 md:text-lg">
            We specialize in sourcing and exporting premium quality dehydrated agricultural
            products and commodities from India to global markets.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 flex-none text-brand-gold" aria-hidden />
                <span className="text-sm font-medium text-white/92">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy transition hover:brightness-110"
            >
              Request Sample
            </Link>
            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-full border border-white/55 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
            >
              Get Quotation
            </Link>
            <a
              href={whatsappLink(siteConfig.whatsapp, siteConfig.whatsappMessage)}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              WhatsApp Now
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="ml-auto max-w-md rounded-[28px] border border-white/14 bg-white/8 p-7 shadow-2xl backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
              Global Buyer Focus
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white">
              Luxury export positioning with clear B2B conversion paths
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/72">
              Built for importers, distributors and private-label buyers across UAE, Europe, USA
              and Southeast Asia.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {['UAE', 'Europe', 'USA', 'Southeast Asia'].map((market) => (
                <div
                  key={market}
                  className="rounded-2xl border border-white/12 bg-brand-navy/40 px-4 py-3 text-center font-medium text-white/90"
                >
                  {market}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-brand-gold/30 bg-brand-gold/10 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-brand-gold">Conversion Focus</p>
              <p className="mt-2 text-sm leading-6 text-white/82">
                Sample requests, buyer enquiries and quotation flows are surfaced from the first
                screen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
