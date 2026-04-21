'use client';

import { useState } from 'react';
import {
  MessageCircle,
  X,
  Search,
  HelpCircle,
  FileQuestion,
  PackageSearch,
  Phone,
} from 'lucide-react';
import { faqs } from '@/data/faqs';
import { siteConfig } from '@/data/site';
import { whatsappLink } from '@/lib/utils';

type Card = {
  key: 'track' | 'faq' | 'ask' | 'sample' | 'whatsapp';
  icon: React.ReactNode;
  label: string;
};

const cards: Card[] = [
  { key: 'track', icon: <Search className="h-4 w-4" />, label: 'Track Enquiry' },
  { key: 'faq', icon: <HelpCircle className="h-4 w-4" />, label: 'FAQs' },
  { key: 'ask', icon: <FileQuestion className="h-4 w-4" />, label: 'Ask a Question' },
  { key: 'sample', icon: <PackageSearch className="h-4 w-4" />, label: 'Request Sample' },
  { key: 'whatsapp', icon: <Phone className="h-4 w-4" />, label: 'Connect on WhatsApp' },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Card['key'] | null>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg ring-4 ring-white transition hover:bg-brand-navy-deep"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Swaranbharat assistant"
          className="fixed bottom-24 right-5 z-40 w-[92vw] max-w-sm overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-card-hover"
        >
          <div className="bg-brand-navy p-4 text-white">
            <p className="font-serif text-lg font-semibold">Export Assistant</p>
            <p className="text-xs text-brand-ivory/80">
              Ask about products, quotes, HS codes or documentation.
            </p>
          </div>

          {active === null && (
            <div className="grid grid-cols-2 gap-2 p-3">
              {cards.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => {
                    if (c.key === 'whatsapp') {
                      window.open(
                        whatsappLink(siteConfig.whatsapp, siteConfig.whatsappMessage),
                        '_blank',
                      );
                      return;
                    }
                    setActive(c.key);
                  }}
                  className="flex flex-col items-start gap-1 rounded-xl border border-brand-navy/10 bg-brand-sand px-3 py-3 text-left text-sm font-medium text-brand-navy hover:border-brand-gold hover:bg-brand-beige"
                >
                  <span className="text-brand-green-deep">{c.icon}</span>
                  {c.label}
                </button>
              ))}
            </div>
          )}

          {active === 'faq' && (
            <div className="max-h-80 overflow-y-auto p-3">
              <button
                type="button"
                onClick={() => setActive(null)}
                className="mb-2 text-xs font-semibold text-brand-green hover:underline"
              >
                ← Back
              </button>
              <ul className="space-y-3">
                {faqs.map((f) => (
                  <li key={f.question}>
                    <details className="group rounded-lg border border-brand-navy/10 p-3 open:bg-brand-sand">
                      <summary className="cursor-pointer list-none text-sm font-semibold text-brand-navy">
                        {f.question}
                      </summary>
                      <p className="mt-2 text-xs leading-relaxed text-brand-navy/70">{f.answer}</p>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {active === 'track' && (
            <SimpleForm
              onBack={() => setActive(null)}
              title="Track your enquiry"
              subtitle="Enter the enquiry ID shared in our email confirmation."
              fields={[{ name: 'id', label: 'Enquiry ID', placeholder: 'SB-12345' }]}
              cta="Track status"
            />
          )}

          {active === 'ask' && (
            <SimpleForm
              onBack={() => setActive(null)}
              title="Ask a question"
              subtitle="Our team replies within 1 business day."
              fields={[
                { name: 'email', label: 'Email', placeholder: 'you@company.com', type: 'email' },
                { name: 'question', label: 'Your question', placeholder: 'Type here...', textarea: true },
              ]}
              cta="Send question"
            />
          )}

          {active === 'sample' && (
            <SimpleForm
              onBack={() => setActive(null)}
              title="Request a sample"
              subtitle="Paid samples are dispatched via DHL/FedEx (adjustable against first order)."
              fields={[
                { name: 'product', label: 'Product', placeholder: 'e.g. Moringa powder' },
                { name: 'country', label: 'Destination country', placeholder: 'e.g. UAE' },
                { name: 'email', label: 'Email', placeholder: 'you@company.com', type: 'email' },
              ]}
              cta="Request sample"
            />
          )}
        </div>
      )}
    </>
  );
}

function SimpleForm({
  onBack,
  title,
  subtitle,
  fields,
  cta,
}: {
  onBack: () => void;
  title: string;
  subtitle: string;
  fields: Array<{
    name: string;
    label: string;
    placeholder?: string;
    type?: string;
    textarea?: boolean;
  }>;
  cta: string;
}) {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="p-3"
    >
      <button
        type="button"
        onClick={onBack}
        className="mb-2 text-xs font-semibold text-brand-green hover:underline"
      >
        ← Back
      </button>
      <p className="text-sm font-semibold text-brand-navy">{title}</p>
      <p className="mb-3 text-xs text-brand-navy/70">{subtitle}</p>
      {sent ? (
        <p className="rounded-md bg-brand-green/10 px-3 py-2 text-xs text-brand-green-deep">
          Thanks — we will be in touch shortly.
        </p>
      ) : (
        <div className="space-y-3">
          {fields.map((f) =>
            f.textarea ? (
              <textarea
                key={f.name}
                name={f.name}
                placeholder={f.placeholder}
                required
                rows={3}
                className="w-full rounded-md border border-brand-navy/15 px-3 py-2 text-sm focus:border-brand-green focus:outline-none"
              />
            ) : (
              <input
                key={f.name}
                name={f.name}
                type={f.type ?? 'text'}
                placeholder={f.placeholder}
                required
                className="w-full rounded-md border border-brand-navy/15 px-3 py-2 text-sm focus:border-brand-green focus:outline-none"
              />
            ),
          )}
          <button
            type="submit"
            className="w-full rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white hover:bg-brand-green-deep"
          >
            {cta}
          </button>
        </div>
      )}
    </form>
  );
}
