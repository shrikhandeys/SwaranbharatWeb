import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { whatsappLink } from '@/lib/utils';

export default function HeroSlider() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <div className="relative w-full">
        <Image
          src="/home/banner-purpose.png"
          alt="Swaranbharat ExportSarathi — premium global export partner from India"
          width={2400}
          height={1200}
          priority
          sizes="100vw"
          className="block h-auto w-full"
        />
      </div>

      <div className="bg-brand-navy">
        <div className="container flex flex-col items-center gap-4 py-6 text-center md:flex-row md:justify-between md:py-5 md:text-left">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-gold">
              Global Export Partner From India
            </p>
            <p className="mt-1 text-sm text-white/85 md:text-base">
              Request a sample, get a quotation, or start a conversation on WhatsApp.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-navy transition hover:brightness-110"
            >
              Request Sample
            </Link>
            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
            >
              Get Quotation
            </Link>
            <a
              href={whatsappLink(siteConfig.whatsapp, siteConfig.whatsappMessage)}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
