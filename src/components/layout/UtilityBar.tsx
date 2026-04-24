import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { whatsappLink } from '@/lib/utils';
import AccessibilityMenu from './AccessibilityMenu';
import LanguageSwitcher from './LanguageSwitcher';

export default function UtilityBar() {
  return (
    <div className="hidden border-b border-brand-navy/10 bg-brand-navy text-brand-ivory md:block">
      <div className="container flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-1.5 hover:text-brand-gold-soft"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden />
            <span>{siteConfig.email}</span>
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-1.5 hover:text-brand-gold-soft"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            <span>{siteConfig.phone}</span>
          </a>
          <a
            href={whatsappLink(siteConfig.whatsapp, siteConfig.whatsappMessage)}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-brand-gold-soft"
          >
            WhatsApp
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Link href={siteConfig.socials.facebook} aria-label="Facebook" className="hover:text-brand-gold-soft">
              <Facebook className="h-3.5 w-3.5" />
            </Link>
            <Link href={siteConfig.socials.instagram} aria-label="Instagram" className="hover:text-brand-gold-soft">
              <Instagram className="h-3.5 w-3.5" />
            </Link>
            <Link href={siteConfig.socials.twitter} aria-label="X (Twitter)" className="hover:text-brand-gold-soft">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2H21l-6.56 7.5L22 22h-6.56l-4.52-5.82L5.6 22H2.84l7.04-8.06L2 2h6.72l4.08 5.4L18.244 2Zm-1.15 18h1.72L7 4H5.28l11.814 16Z" />
              </svg>
            </Link>
            <Link href={siteConfig.socials.linkedin} aria-label="LinkedIn" className="hover:text-brand-gold-soft">
              <Linkedin className="h-3.5 w-3.5" />
            </Link>
            <Link href={siteConfig.socials.youtube} aria-label="YouTube" className="hover:text-brand-gold-soft">
              <Youtube className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="h-4 w-px bg-brand-ivory/30" aria-hidden />
          <LanguageSwitcher />
          <AccessibilityMenu />
        </div>
      </div>
    </div>
  );
}
