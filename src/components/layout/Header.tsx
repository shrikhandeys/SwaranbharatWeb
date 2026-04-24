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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/88">
      <UtilityBar />

      <div className={cn('border-b border-brand-navy/10 transition-shadow', scrolled && 'shadow-sm')}>
        <div className="container flex h-18 items-center justify-between py-3 lg:h-24 lg:py-0">
          <Link href="/" className="flex items-center gap-3" aria-label={siteConfig.name}>
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} logo`}
              width={68}
              height={68}
              priority
              className="h-12 w-12 rounded-full object-contain lg:h-16 lg:w-16"
            />
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="font-serif text-xl font-bold text-brand-navy lg:text-[1.8rem]">
                Swaranbharat
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-gold lg:text-xs">
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
                    className="rounded px-3 py-2 text-sm font-medium text-brand-navy transition hover:bg-[#F8F9FB] hover:text-brand-gold"
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
              className="hidden items-center gap-1 rounded-full bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm transition hover:brightness-110 md:inline-flex"
            >
              Get Quotation
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-navy hover:bg-[#F8F9FB] lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-brand-navy/40" onClick={() => setOpen(false)} aria-hidden />
          <aside className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-brand-navy/10 px-4 py-3">
              <span className="font-serif text-lg font-semibold text-brand-navy">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-[#F8F9FB]"
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
                  className="rounded px-3 py-3 text-base font-medium text-brand-navy hover:bg-[#F8F9FB]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#inquiry"
                onClick={() => setOpen(false)}
                className="mx-3 mt-3 inline-flex items-center justify-center rounded-full bg-brand-gold px-4 py-2.5 text-sm font-semibold text-brand-navy"
              >
                Get Quotation
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
