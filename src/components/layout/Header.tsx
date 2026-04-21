'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { primaryNav } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';
import UtilityBar from './UtilityBar';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <UtilityBar />

      <div
        className={cn(
          'border-b border-brand-navy/10 transition-shadow',
          scrolled && 'shadow-sm',
        )}
      >
        <div className="container flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center gap-3" aria-label={siteConfig.name}>
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} logo`}
              width={56}
              height={56}
              priority
              className="h-10 w-10 object-contain lg:h-14 lg:w-14"
            />
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="font-serif text-xl font-semibold text-brand-navy lg:text-2xl">
                SwaranBharat
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold lg:text-[11px]">
                ExportSarathi
              </span>
            </div>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded px-3 py-2 text-sm font-medium text-brand-navy transition hover:bg-brand-sand hover:text-brand-green-deep"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="#inquiry"
              className="hidden items-center gap-1 rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-green-deep md:inline-flex"
            >
              Request Quote
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-navy hover:bg-brand-sand lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-brand-navy/40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <aside className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-brand-navy/10 px-4 py-3">
              <span className="font-serif text-lg font-semibold text-brand-navy">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-brand-sand"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-col px-2 py-3">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded px-3 py-3 text-base font-medium text-brand-navy hover:bg-brand-sand"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#inquiry"
                onClick={() => setOpen(false)}
                className="mx-3 mt-3 inline-flex items-center justify-center rounded-full bg-brand-green px-4 py-2.5 text-sm font-semibold text-white"
              >
                Request Quote
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
