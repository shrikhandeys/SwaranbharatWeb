'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '@/data/hero-slides';
import { cn } from '@/lib/utils';

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number) => setIndex(((next % heroSlides.length) + heroSlides.length) % heroSlides.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  const current = heroSlides[index];

  return (
    <section
      className="relative isolate overflow-hidden bg-brand-navy text-white"
      aria-roledescription="carousel"
      aria-label="Swaranbharat export highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="orbit-ring left-[-8%] top-[-20%] h-[520px] w-[520px] opacity-30" aria-hidden />
      <div className="orbit-ring right-[-12%] bottom-[-30%] h-[620px] w-[620px] opacity-20" aria-hidden />

      {heroSlides.map((slide, i) => (
        <div
          key={slide.title}
          aria-hidden={i !== index}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/30" />
        </div>
      ))}

      <div className="container relative z-10 grid min-h-[560px] items-center py-16 md:min-h-[620px] lg:min-h-[680px]">
        <div className="max-w-2xl animate-fadeIn">
          <span className="inline-flex items-center rounded-full border border-brand-gold-soft/50 bg-brand-navy/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-soft">
            {current.eyebrow}
          </span>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl">
            {current.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-ivory/85 md:text-lg">
            {current.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition hover:bg-brand-gold-soft"
            >
              Request Bulk Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-gold-soft hover:text-brand-gold-soft"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-10">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2" role="tablist" aria-label="Select slide">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i)}
                className={cn(
                  'h-1.5 rounded-full transition-all',
                  i === index ? 'w-10 bg-brand-gold-soft' : 'w-5 bg-white/40 hover:bg-white/70',
                )}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-brand-navy/30 backdrop-blur hover:border-brand-gold-soft hover:text-brand-gold-soft"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-brand-navy/30 backdrop-blur hover:border-brand-gold-soft hover:text-brand-gold-soft"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
