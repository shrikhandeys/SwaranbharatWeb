import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutHero() {
  return (
    <section
      aria-label="About Swaranbharat — connecting Indian quality with global markets"
      className="relative isolate overflow-hidden bg-brand-navy text-white"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1800&q=80"
          alt="Global export containers at port"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent" />
      </div>

      <div className="container relative py-24 md:py-32">
        <span className="inline-block rounded-full border border-brand-gold/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft-gold">
          About SwaranBharat ExportSarathi
        </span>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.1] md:text-6xl">
          Connecting Indian Quality with Global Markets
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
          Your trusted export partner for agri, dehydrated and value-added products — delivered with
          compliance-first sourcing, lab-tested quality and reliable global logistics.
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
        </div>
      </div>
    </section>
  );
}
