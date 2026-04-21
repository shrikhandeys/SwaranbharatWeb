import { Globe2 } from 'lucide-react';
import SectionHeader from '@/components/home/SectionHeader';

const markets = [
  { region: 'UAE & GCC', detail: 'Dubai, Abu Dhabi, Sharjah, Riyadh, Doha' },
  { region: 'USA & Canada', detail: 'New York, New Jersey, LA, Toronto' },
  { region: 'Europe', detail: 'UK, Germany, Netherlands, Italy, Spain' },
  { region: 'Southeast Asia', detail: 'Singapore, Malaysia, Vietnam, Thailand' },
  { region: 'Africa (expansion)', detail: 'Kenya, South Africa, Tanzania' },
  { region: 'Australia & NZ', detail: 'Sydney, Melbourne, Auckland' },
];

export default function GlobalReach() {
  return (
    <section
      aria-labelledby="global-reach"
      className="relative overflow-hidden bg-brand-navy py-20 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #E5B84A 0, transparent 40%), radial-gradient(circle at 80% 70%, #1F5F3A 0, transparent 40%)',
        }}
        aria-hidden
      />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-brand-soft-gold">
            Global reach
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight md:text-4xl">
            Serving international buyers with reliable export solutions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
            Active shipments and active enquiries from 25+ countries. Our logistics partners cover
            major ports in the Middle East, Americas, Europe, Asia-Pacific and Africa.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {markets.map((m) => (
            <li
              key={m.region}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-gold/20 text-brand-soft-gold">
                <Globe2 className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-base font-semibold">{m.region}</p>
                <p className="mt-1 text-sm text-white/70">{m.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
