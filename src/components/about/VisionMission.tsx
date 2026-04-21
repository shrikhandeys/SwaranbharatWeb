import { Telescope, Target } from 'lucide-react';
import SectionHeader from '@/components/home/SectionHeader';

const missionPoints = [
  'Ensure quality sourcing and strict compliance at every stage',
  'Support global buyers with reliable, scalable supply chains',
  'Enable smooth export processes and clean documentation',
  'Build long-term, transparent trade relationships',
];

export default function VisionMission() {
  return (
    <section aria-labelledby="vision-mission" className="bg-brand-sand py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Vision & Mission"
          title="A globally trusted Indian export brand — by design"
          subtitle="What we're building, and the commitments we make to every buyer."
        />

        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <article className="relative overflow-hidden rounded-3xl border border-brand-gold/30 bg-white p-8 shadow-card">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
                <Telescope className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="font-serif text-2xl font-semibold text-brand-navy">Our Vision</h3>
            </div>
            <p className="mt-4 text-base leading-relaxed text-brand-navy/80">
              To become a globally trusted export brand delivering high-quality Indian products
              across international markets — known for consistency, compliance and care.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-brand-green/30 bg-white p-8 shadow-card">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/15 text-brand-green-deep">
                <Target className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="font-serif text-2xl font-semibold text-brand-navy">Our Mission</h3>
            </div>
            <ul className="mt-4 space-y-3 text-brand-navy/80">
              {missionPoints.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-green-deep"
                    aria-hidden
                  />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
