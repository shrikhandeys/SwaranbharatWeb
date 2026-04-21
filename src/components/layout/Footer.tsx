import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { primaryNav } from '@/data/navigation';
import { categories } from '@/data/categories';
import { services } from '@/data/services';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-brand-navy/10 bg-brand-navy text-brand-ivory">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} logo`}
              width={56}
              height={56}
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-xl font-semibold">SwaranBharat</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-gold-soft">
                ExportSarathi
              </span>
            </div>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-ivory/80">
            India-based merchant exporter of agri, dehydrated, powdered and paper products.
            Trusted by global B2B buyers for lab-tested quality, private-label support and
            reliable logistics.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-brand-ivory/90">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-gold-soft" aria-hidden />
              <span>
                {siteConfig.address.line1}, {siteConfig.address.city},{' '}
                {siteConfig.address.state} {siteConfig.address.pincode}, {siteConfig.address.country}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-gold-soft" aria-hidden />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-gold-soft">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-gold-soft" aria-hidden />
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-brand-gold-soft">
                {siteConfig.phone}
              </a>
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-3">
            <Link href={siteConfig.socials.facebook} aria-label="Facebook" className="rounded-full border border-brand-ivory/25 p-2 hover:border-brand-gold-soft hover:text-brand-gold-soft">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href={siteConfig.socials.instagram} aria-label="Instagram" className="rounded-full border border-brand-ivory/25 p-2 hover:border-brand-gold-soft hover:text-brand-gold-soft">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href={siteConfig.socials.twitter} aria-label="X" className="rounded-full border border-brand-ivory/25 p-2 hover:border-brand-gold-soft hover:text-brand-gold-soft">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2H21l-6.56 7.5L22 22h-6.56l-4.52-5.82L5.6 22H2.84l7.04-8.06L2 2h6.72l4.08 5.4L18.244 2Zm-1.15 18h1.72L7 4H5.28l11.814 16Z" />
              </svg>
            </Link>
            <Link href={siteConfig.socials.linkedin} aria-label="LinkedIn" className="rounded-full border border-brand-ivory/25 p-2 hover:border-brand-gold-soft hover:text-brand-gold-soft">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href={siteConfig.socials.youtube} aria-label="YouTube" className="rounded-full border border-brand-ivory/25 p-2 hover:border-brand-gold-soft hover:text-brand-gold-soft">
              <Youtube className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold-soft">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-brand-ivory/90">
            {primaryNav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-brand-gold-soft">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold-soft">
            Products
          </h3>
          <ul className="space-y-2 text-sm text-brand-ivory/90">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/products/${c.slug}`} className="hover:text-brand-gold-soft">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold-soft">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-brand-ivory/90">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-brand-gold-soft">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-ivory/15">
        <div className="container py-5 text-xs text-brand-ivory/70">
          <form className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label htmlFor="newsletter-email" className="text-brand-ivory/90">
              Subscribe for export updates & HS-code knowledge
            </label>
            <div className="flex w-full max-w-sm gap-2">
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-md border border-brand-ivory/25 bg-transparent px-3 py-2 text-sm text-brand-ivory placeholder:text-brand-ivory/50 focus:border-brand-gold-soft focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-md bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-gold-soft"
              >
                Subscribe
              </button>
            </div>
          </form>
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <p>
              © {year} {siteConfig.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center gap-4">
              <li><Link href="/privacy" className="hover:text-brand-gold-soft">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand-gold-soft">Terms of Use</Link></li>
              <li><Link href="/shipping" className="hover:text-brand-gold-soft">Shipping & Returns</Link></li>
              <li><Link href="/disclaimer" className="hover:text-brand-gold-soft">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
