import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'mb-10 max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-brand-navy md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-brand-navy/70 md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
