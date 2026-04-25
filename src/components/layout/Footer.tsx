import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Globe,
} from 'lucide-react';
import { siteConfig } from '@/data/site';
import { primaryNav } from '@/data/navigation';
import { categories } from '@/data/categories';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-navy/10 bg-brand-navy text-brand-ivory">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:gap-16 lg:py-20">
        <div>
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo-footer.png"
              alt={`${siteConfig.name} logo`}
              width={72}
              height={72}
              className="h-16 w-16 rounded-full object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-2xl font-semibold text-white">Swaranbharat</span>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold-soft">
                ExportSarathi
              </span>
            </div>
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-7 text-brand-ivory/75">
            India-based exporter of premium dehydrated agricultural products — built for reliable
            global supply.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <Link
              href={siteConfig.socials.facebook}
              aria-label="Facebook"
              className="rounded-full border border-brand-ivory/25 p-2 transition hover:border-brand-gold-soft hover:text-brand-gold-soft"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href={siteConfig.socials.instagram}
              aria-label="Instagram"
              className="rounded-full border border-brand-ivory/25 p-2 transition hover:border-brand-gold-soft hover:text-brand-gold-soft"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href={siteConfig.socials.linkedin}
              aria-label="LinkedIn"
              className="rounded-full border border-brand-ivory/25 p-2 transition hover:border-brand-gold-soft hover:text-brand-gold-soft"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href={siteConfig.socials.youtube}
              aria-label="YouTube"
              className="rounded-full border border-brand-ivory/25 p-2 transition hover:border-brand-gold-soft hover:text-brand-gold-soft"
            >
              <Youtube className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold-soft">
            Explore
          </h3>
          <ul className="space-y-3 text-sm text-brand-ivory/90">
            {primaryNav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition hover:text-brand-gold-soft">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mb-4 mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold-soft">
            Products
          </h3>
          <ul className="space-y-3 text-sm text-brand-ivory/90">
            {categories.slice(0, 4).map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/products/${c.slug}`}
                  className="transition hover:text-brand-gold-soft"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold-soft">
            Contact
          </h3>
          <ul className="space-y-5 text-sm text-brand-ivory/95">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 flex-none text-brand-gold-soft" aria-hidden />
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="font-semibold text-white transition hover:text-brand-gold-soft"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 flex-none text-brand-gold-soft" aria-hidden />
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-all transition hover:text-brand-gold-soft"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="mt-0.5 h-4 w-4 flex-none text-brand-gold-soft" aria-hidden />
              <a href={siteConfig.url} className="transition hover:text-brand-gold-soft">
                www.{siteConfig.domain}
              </a>
            </li>
            <li className="flex items-start gap-3 leading-7 text-brand-ivory/80">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-gold-soft" aria-hidden />
              <span>
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode},{' '}
                {siteConfig.address.country}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-ivory/15">
        <div className="container py-5 text-xs text-brand-ivory/65">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p>
              © {year} {siteConfig.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center gap-5">
              <li>
                <Link href="/privacy" className="transition hover:text-brand-gold-soft">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-brand-gold-soft">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="transition hover:text-brand-gold-soft">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
