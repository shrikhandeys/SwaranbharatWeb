'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { whatsappLink } from '@/lib/utils';

const SLIDE_COUNT = 2;
const AUTOPLAY_MS = 7000;

const trustUnderCtas = ['Sample Available', 'Flexible MOQ', 'Export Support'];

const slide2Products = [
  { name: 'Moringa Powder', image: '/products/moringa-powder.jpg', note: '100% Natural' },
  { name: 'Dehydrated Onion', image: '/products/onion-powder.jpg', note: 'Long Shelf Life' },
  { name: 'Turmeric & Spices', image: '/products/turmeric-powder.jpg', note: 'Authentic Origin' },
];

function CtaRow({ tone }: { tone: 'dark' | 'light' }) {
  const outlineCls =
    tone === 'dark'
      ? 'border-white/60 text-white hover:border-brand-gold hover:text-brand-gold'
      : 'border-brand-navy/25 text-brand-navy hover:border-brand-navy hover:bg-white';
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Link
        href="#inquiry"
        className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy transition hover:brightness-110"
      >
        Request Sample
      </Link>
      <Link
        href="#inquiry"
        className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition ${outlineCls}`}
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
  );
}

function TrustLine({ tone }: { tone: 'dark' | 'light' }) {
  const color = tone === 'dark' ? 'text-white/80' : 'text-brand-navy/70';
  const dot = tone === 'dark' ? 'text-brand-gold' : 'text-brand-gold';
  return (
    <ul className={`mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium ${color}`}>
      {trustUnderCtas.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span className={`text-sm ${dot}`} aria-hidden>
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Slide1() {
  return (
    <div className="relative overflow-hidden bg-brand-navy text-white">
      <div className="relative mx-auto w-full max-w-6xl px-4 pt-10 md:pt-12 lg:pt-14">
        <Image
          src="/home/brand-banner.png"
          alt="Swaranbharat ExportSarathi — Global Connections. Local Trust. Your Trusted Global Trade Partner."
          width={1894}
          height={830}
          priority
          sizes="(min-width:1280px) 1024px, 100vw"
          className="h-auto w-full"
        />
      </div>
      <div className="container pb-16 pt-8 text-center md:pb-20 md:pt-10 lg:pb-24">
        <div className="mx-auto max-w-[720px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-gold">
            Global Export Partner From India
          </p>
          <h1 className="mt-4 font-serif text-3xl font-bold leading-[1.15] md:text-4xl lg:text-[2.75rem]">
            Premium Exporter of Dehydrated Agricultural Products from India
          </h1>
          <p className="mt-4 font-serif text-lg font-medium text-brand-gold md:text-xl">
            Moringa Powder &nbsp;|&nbsp; Dehydrated Onion &nbsp;|&nbsp; Turmeric &amp; Spices
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/75 md:text-base">
            Built for international buyers seeking reliable sourcing, consistent quality, and
            long-term supply partnerships.
          </p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy transition hover:brightness-110"
            >
              Request Sample
            </Link>
            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
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
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-white/80">
            {trustUnderCtas.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-sm text-brand-gold" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="relative overflow-hidden bg-[#F8F9FB] text-brand-navy">
      <div className="container grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-gold">
            Premium Agri-Exports
          </p>
          <h2 className="mt-5 font-serif text-4xl font-bold leading-[1.1] text-brand-navy md:text-5xl">
            Export-ready products, presented with a premium feel
          </h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-brand-navy/70 md:text-lg">
            Hand-picked dehydrated agricultural products, processed for global markets with
            hygienic handling, bulk export packaging and flexible MOQs.
          </p>
          <CtaRow tone="light" />
          <TrustLine tone="light" />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {slide2Products.map((p) => (
            <figure
              key={p.name}
              className="overflow-hidden rounded-[24px] border border-brand-navy/10 bg-white shadow-[0_20px_40px_-30px_rgba(11,31,58,0.35)]"
            >
              <div className="relative aspect-square">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width:1024px) 15vw, 30vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3">
                <p className="font-serif text-sm font-semibold text-brand-navy">{p.name}</p>
                <p className="text-xs text-brand-navy/60">{p.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  const go = useCallback(
    (i: number) => setActive(((i % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT),
    [],
  );
  const next = useCallback(() => go(active + 1), [active, go]);
  const prev = useCallback(() => go(active - 1), [active, go]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % SLIDE_COUNT);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  function onTouchStart(e: React.TouchEvent) {
    touchStart.current = e.touches[0]?.clientX ?? null;
    setPaused(true);
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStart.current != null) {
      const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStart.current;
      if (Math.abs(dx) > 50) {
        if (dx < 0) next();
        else prev();
      }
    }
    touchStart.current = null;
    // Resume shortly after the touch release.
    window.setTimeout(() => setPaused(false), 400);
  }

  return (
    <section
      aria-label="Featured export highlights"
      aria-roledescription="carousel"
      className="relative isolate"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative grid grid-cols-1 grid-rows-1 [&>*]:col-start-1 [&>*]:row-start-1">
        <div
          className={`transition-opacity duration-700 ${
            active === 0 ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden={active !== 0}
        >
          <Slide1 />
        </div>
        <div
          className={`transition-opacity duration-700 ${
            active === 1 ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden={active !== 1}
        >
          <Slide2 />
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-brand-navy/40 p-2 text-white backdrop-blur-sm transition hover:bg-brand-navy/70 md:inline-flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-brand-navy/40 p-2 text-white backdrop-blur-sm transition hover:bg-brand-navy/70 md:inline-flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2">
        {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={active === i}
            className={`h-2.5 rounded-full transition-all ${
              active === i ? 'w-8 bg-brand-gold' : 'w-2.5 bg-brand-navy/30 hover:bg-brand-navy/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
