import { Linkedin, Mail } from 'lucide-react';
import SectionHeader from '@/components/home/SectionHeader';
import { siteConfig } from '@/data/site';

type Leader = {
  name: string;
  role: string;
  background: string;
  vision: string;
  linkedin?: string;
  email?: string;
};

const leaders: Leader[] = [
  {
    name: 'Founder & Managing Partner',
    role: 'SwaranBharat ExportSarathi LLP',
    background:
      'Two decades of cross-border trade and supply-chain experience across agri, dehydrated and value-added categories.',
    vision:
      '"Indian quality should travel the world with trust. We build export partnerships that last — not one-off shipments."',
    email: siteConfig.email,
  },
  {
    name: 'Co-Founder & Partner',
    role: 'Operations & Compliance',
    background:
      'Focused on sourcing networks, quality assurance, NABL testing workflows and end-to-end export documentation.',
    vision:
      '"Compliance is not paperwork — it is the promise we keep to every buyer, on every consignment."',
    email: siteConfig.email,
  },
];

export default function Leadership() {
  return (
    <section aria-labelledby="leadership" className="bg-brand-ivory py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Leadership"
          title="Experienced hands, long-term mindset"
          subtitle="The people building SwaranBharat ExportSarathi into a globally trusted export brand."
        />

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {leaders.map((l) => (
            <article
              key={l.role}
              className="rounded-3xl border border-brand-navy/10 bg-white p-8 shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-brand-navy font-serif text-xl font-semibold text-white">
                  {l.name
                    .split(' ')
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join('')}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-brand-navy">{l.name}</h3>
                  <p className="text-sm font-semibold text-brand-gold">{l.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-brand-navy/80">{l.background}</p>
              <blockquote className="mt-5 border-l-2 border-brand-gold/60 pl-4 text-sm italic leading-relaxed text-brand-navy/70">
                {l.vision}
              </blockquote>
              <div className="mt-5 flex flex-wrap gap-3">
                {l.linkedin && (
                  <a
                    href={l.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-navy/20 px-4 py-2 text-xs font-semibold text-brand-navy hover:border-brand-navy hover:bg-brand-sand"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden />
                    LinkedIn
                  </a>
                )}
                {l.email && (
                  <a
                    href={`mailto:${l.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-navy/20 px-4 py-2 text-xs font-semibold text-brand-navy hover:border-brand-navy hover:bg-brand-sand"
                  >
                    <Mail className="h-4 w-4" aria-hidden />
                    Email
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-brand-navy/60">
          Founder profiles and photos will be updated here once finalised.
        </p>
      </div>
    </section>
  );
}
