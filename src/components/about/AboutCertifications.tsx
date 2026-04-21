import SectionHeader from '@/components/home/SectionHeader';
import { certifications } from '@/data/certifications';

export default function AboutCertifications() {
  return (
    <section id="about-certifications" className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Certifications & Compliance"
          title="Registered, licensed and audit-ready"
          subtitle="Certifications will be updated dynamically based on product category and regulatory requirements."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <li
              key={c.code}
              className="flex items-start gap-4 rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-card"
            >
              <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-brand-green/10 font-serif text-sm font-semibold text-brand-green-deep">
                {c.code}
              </div>
              <div>
                <p className="text-base font-semibold text-brand-navy">{c.name}</p>
                <p className="mt-1 text-sm text-brand-navy/70">{c.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-brand-navy/60">
          More certifications (product-specific) will be added as the export portfolio scales into
          pharma, engineering and specialised agri categories.
        </p>
      </div>
    </section>
  );
}
