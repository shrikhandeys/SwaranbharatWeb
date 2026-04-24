import Link from 'next/link';
import SectionHeader from './SectionHeader';
import { siteConfig } from '@/data/site';
import { whatsappLink } from '@/lib/utils';

export default function Testimonials() {
  return (
    <section aria-label="Primary call to action" className="bg-brand-navy py-20 text-brand-ivory md:py-24">
      <div className="container">
        <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 md:p-12">
          <SectionHeader
            eyebrow="Start Your Import Journey"
            title="Start Your Import Journey with Us"
            subtitle="Request samples, get quotations, or discuss your requirements directly with our export team."
            align="left"
            className="mb-0 max-w-2xl [&_h2]:text-white [&_p]:text-white/75"
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy transition hover:brightness-110"
            >
              Request Sample
            </Link>
            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
            >
              Become a Buyer
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
      </div>
    </section>
  );
}
