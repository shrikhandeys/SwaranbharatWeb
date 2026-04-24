import { Globe, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/data/site';

const items = [
  {
    icon: Phone,
    label: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Globe,
    label: `www.${siteConfig.domain}`,
    href: siteConfig.url,
  },
];

export default function ContactStrip() {
  return (
    <section id="contact-strip" className="border-y border-brand-navy/10 bg-white">
      <div className="container grid gap-4 py-6 md:grid-cols-3">
        {items.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-4 rounded-2xl border border-brand-navy/8 bg-[#F8F9FB] px-5 py-4 transition hover:border-brand-gold/40 hover:bg-white"
          >
            <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-gold/12 text-brand-gold">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-sm font-semibold text-brand-navy">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
