import SectionHeader from './SectionHeader';
import { certifications } from '@/data/certifications';

export default function Certifications() {
  // Duplicate for seamless marquee
  const loop = [...certifications, ...certifications];

  return (
    <section id="certifications" className="bg-brand-ivory py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Certifications"
          title="Compliance you can verify"
          subtitle="Built on trust — registered, licensed and audited by the Indian bodies that matter for international trade."
        />
      </div>

      <div
        className="group relative mt-4 overflow-hidden"
        aria-label="Certification badges marquee"
      >
        <div
          className="flex min-w-max items-center gap-6 px-4 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ animationDuration: '45s' }}
        >
          {loop.map((c, i) => (
            <div
              key={`${c.code}-${i}`}
              className="flex min-w-[220px] items-center gap-4 rounded-2xl border border-brand-navy/10 bg-white px-5 py-4 shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 font-serif text-sm font-semibold text-brand-green-deep">
                {c.code}
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-navy">{c.name}</p>
                <p className="text-xs text-brand-navy/60">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
