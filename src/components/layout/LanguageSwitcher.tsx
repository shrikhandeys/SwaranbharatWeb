'use client';

import { useState } from 'react';
import { Globe, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'mr', label: 'मराठी' },
  { code: 'ar', label: 'العربية' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('en');

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Change language"
        className="inline-flex items-center gap-1.5 rounded px-1.5 py-1 text-brand-ivory hover:text-brand-gold-soft"
      >
        <Globe className="h-3.5 w-3.5" aria-hidden />
        <span className="uppercase">{active}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-md border border-brand-navy/10 bg-white text-brand-navy shadow-card"
        >
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              role="menuitemradio"
              aria-checked={active === l.code}
              onClick={() => {
                setActive(l.code);
                setOpen(false);
              }}
              className={cn(
                'flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-brand-sand',
                active === l.code && 'font-medium',
              )}
            >
              <span>{l.label}</span>
              {active === l.code && <Check className="h-3.5 w-3.5 text-brand-gold" aria-hidden />}
            </button>
          ))}
          <div className="border-t border-brand-navy/10 bg-brand-sand/60 px-3 py-2 text-[11px] text-brand-navy/60">
            Connect Google Translate for full translation.
          </div>
        </div>
      )}
    </div>
  );
}
