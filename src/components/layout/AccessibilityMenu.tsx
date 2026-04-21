'use client';

import { useEffect, useState } from 'react';
import {
  Accessibility,
  Contrast,
  Palette,
  Eye,
  EyeOff,
  Link as LinkIcon,
  RotateCcw,
  Minus,
  Plus,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type A11yState = {
  darkContrast: boolean;
  invert: boolean;
  lowSaturation: boolean;
  hideImages: boolean;
  highlightLinks: boolean;
  textSize: 0 | 1 | 2 | 3; // 0 = smaller, 1 = default, 2 = larger, 3 = largest
};

const DEFAULT_STATE: A11yState = {
  darkContrast: false,
  invert: false,
  lowSaturation: false,
  hideImages: false,
  highlightLinks: false,
  textSize: 1,
};

const STORAGE_KEY = 'sb-a11y-state';

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(DEFAULT_STATE);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...DEFAULT_STATE, ...JSON.parse(raw) });
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    body.classList.toggle('a11y-dark-contrast', state.darkContrast);
    body.classList.toggle('a11y-invert', state.invert);
    body.classList.toggle('a11y-low-saturation', state.lowSaturation);
    body.classList.toggle('a11y-hide-images', state.hideImages);
    body.classList.toggle('a11y-highlight-links', state.highlightLinks);
    html.setAttribute('data-a11y-text', String(state.textSize));
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const toggle = <K extends keyof A11yState>(key: K) =>
    setState((s) => ({ ...s, [key]: !s[key] } as A11yState));

  const bumpText = (delta: number) =>
    setState((s) => {
      const next = Math.min(3, Math.max(0, s.textSize + delta)) as A11yState['textSize'];
      return { ...s, textSize: next };
    });

  const reset = () => setState(DEFAULT_STATE);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Accessibility options"
        className="inline-flex items-center gap-1.5 rounded px-1.5 py-1 text-brand-ivory hover:text-brand-gold-soft"
      >
        <Accessibility className="h-3.5 w-3.5" aria-hidden />
        <span>Accessibility</span>
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Accessibility controls"
          className="absolute right-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-md border border-brand-navy/10 bg-white text-brand-navy shadow-card"
        >
          <div className="border-b border-brand-navy/10 bg-brand-sand/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-navy/70">
            Accessibility
          </div>

          <ToggleRow
            icon={<Contrast className="h-4 w-4" />}
            label="Dark contrast"
            active={state.darkContrast}
            onClick={() => toggle('darkContrast')}
          />
          <ToggleRow
            icon={<Palette className="h-4 w-4" />}
            label="Invert colors"
            active={state.invert}
            onClick={() => toggle('invert')}
          />
          <ToggleRow
            icon={<Eye className="h-4 w-4" />}
            label="Low saturation"
            active={state.lowSaturation}
            onClick={() => toggle('lowSaturation')}
          />
          <ToggleRow
            icon={<LinkIcon className="h-4 w-4" />}
            label="Highlight links"
            active={state.highlightLinks}
            onClick={() => toggle('highlightLinks')}
          />
          <ToggleRow
            icon={<EyeOff className="h-4 w-4" />}
            label="Hide images"
            active={state.hideImages}
            onClick={() => toggle('hideImages')}
          />

          <div className="flex items-center justify-between border-t border-brand-navy/10 px-4 py-2 text-sm">
            <span>Text size</span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => bumpText(-1)}
                aria-label="Decrease text size"
                className="rounded border border-brand-navy/20 p-1 hover:bg-brand-sand"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-7 text-center text-xs tabular-nums">
                {['S', 'M', 'L', 'XL'][state.textSize]}
              </span>
              <button
                type="button"
                onClick={() => bumpText(1)}
                aria-label="Increase text size"
                className="rounded border border-brand-navy/20 p-1 hover:bg-brand-sand"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={reset}
            className="flex w-full items-center justify-center gap-2 border-t border-brand-navy/10 bg-brand-sand/70 px-4 py-2 text-xs font-medium text-brand-navy hover:bg-brand-sand"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset to default
          </button>
        </div>
      )}
    </div>
  );
}

function ToggleRow({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="menuitemcheckbox"
      aria-checked={active}
      onClick={onClick}
      className={cn(
        'flex w-full items-center justify-between px-4 py-2 text-left text-sm hover:bg-brand-sand',
        active && 'bg-brand-sand/80',
      )}
    >
      <span className="inline-flex items-center gap-2">
        <span className="text-brand-navy/70">{icon}</span>
        {label}
      </span>
      <span
        aria-hidden
        className={cn(
          'h-4 w-8 rounded-full border transition-colors',
          active ? 'border-brand-green bg-brand-green' : 'border-brand-navy/20 bg-white',
        )}
      >
        <span
          className={cn(
            'block h-3.5 w-3.5 translate-y-[-1px] rounded-full bg-white shadow transition-transform',
            active ? 'translate-x-[14px]' : 'translate-x-0',
          )}
        />
      </span>
    </button>
  );
}
