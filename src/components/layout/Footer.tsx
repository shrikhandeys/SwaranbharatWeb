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
import { services } from '@/data/services';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-navy/10 bg-brand-navy text-brand-ivory">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
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

          <p className="mt-5 max-w-sm text-sm leading-7 text-brand-ivory/80">
            {siteConfig.tagline}. Premium export presentation for international buyers looking for
            structured sourcing, clean communication and dependable supply from India.
          </p>

          <div className="mt-5 space-y-2 text-sm text-brand-ivory/88">
            <p className="font-medium uppercase tracking-[0.22em] text-brand-gold-soft">
              Connecting India to the World
            </p>
            <p className="text-brand-ivory/70">Delivering Quality. Building Trust.</p>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-brand-ivory/90">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-gold-soft" aria-hidden />
              <span>
                {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.state}{' '}
                {siteConfig.address.pincode}, {siteConfig.address.country}
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
            <li className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-brand-gold-soft" aria-hidden />
              <a href={siteConfig.url} className="hover:text-brand-gold-soft">
                www.{siteConfig.domain}
              </a>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-3">
            <Link
              href={siteConfig.socials.facebook}
              aria-label="Facebook"
              className="rounded-full border border-brand-ivory/25 p-2 hover:border-brand-gold-soft hover:text-brand-gold-soft"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href={siteConfig.socials.instagram}
              aria-label="Instagram"
              className="rounded-full border border-brand-ivory/25 p-2 hover:border-brand-gold-soft hover:text-brand-gold-soft"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href={siteConfig.socials.twitter}
              aria-label="X"
              className="rounded-full border border-brand-ivory/25 p-2 hover:border-brand-gold-soft hover:text-brand-gold-soft"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2H21l-6.56 7.5L22 22h-6.56l-4.52-5.82L5.6 22H2.84l7.04-8.06L2 2h6.72l4.08 5.4L18.244 2Zm-1.15 18h1.72L7 4H5.28l11.814 16Z" />
              </svg>
            </Link>
            <Link
              href={siteConfig.socials.linkedin}
              aria-label="LinkedIn"
              className="rounded-full border border-brand-ivory/25 p-2 hover:border-brand-gold-soft hover:text-brand-gold-soft"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href={siteConfig.socials.youtube}
              aria-label="YouTube"
              className="rounded-full border border-brand-ivory/25 p-2 hover:border-brand-gold-soft hover:text-brand-gold-soft"
            >
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
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services#${service.slug}`} className="hover:text-brand-gold-soft">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-ivory/15">
        <div className="container py-5 text-xs text-brand-ivory/70">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <p>© {year} {siteConfig.name}. All rights reserved.</p>
            <ul className="flex flex-wrap items-center gap-4">
              <li>
                <Link href="/privacy" className="hover:text-brand-gold-soft">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-gold-soft">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-brand-gold-soft">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-brand-gold-soft">
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
