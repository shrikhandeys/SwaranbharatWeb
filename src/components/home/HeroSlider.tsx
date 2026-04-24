import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { whatsappLink } from '@/lib/utils';

export default function HeroSlider() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <Image
        src="/home/banner-purpose.png"
        alt="Swaranbharat global export banner with gold globe, cargo ships and cargo aircraft"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(11,31,58,0.78) 0%, rgba(11,31,58,0.55) 38%, rgba(11,31,58,0.15) 65%, rgba(11,31,58,0.05) 100%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,31,58,0) 0%, rgba(11,31,58,0.55) 100%)',
        }}
      />

      <div className="container relative z-10 flex min-h-[560px] flex-col justify-end py-14 md:min-h-[640px] md:py-20 lg:min-h-[680px]">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-brand-gold/40 bg-brand-navy/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-gold backdrop-blur-sm">
            Global Export Partner From India
          </span>

          <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.05] drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] md:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>

          <p className="mt-3 text-lg font-medium text-white/92 drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)] md:text-xl">
            {siteConfig.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:brightness-110"
            >
              Request Sample
            </Link>
            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-brand-gold hover:text-brand-gold"
            >
              Get Quotation
            </Link>
            <a
              href={whatsappLink(siteConfig.whatsapp, siteConfig.whatsappMessage)}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.3)] transition hover:brightness-110"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
