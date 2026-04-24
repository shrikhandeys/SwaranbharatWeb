export type Insight = {
  slug: string;
  title: string;
  category: 'Product Research' | 'Market Research' | 'Export Updates' | 'HS Code Knowledge';
  excerpt: string;
  readMinutes: number;
  date: string;
};

export const insights: Insight[] = [
  {
    slug: 'moringa-global-demand-2026',
    title: 'Global Moringa Demand Outlook 2026',
    category: 'Market Research',
    excerpt:
      'How nutraceutical and wellness channels across the US, EU and Gulf are driving a double-digit CAGR for Indian moringa powder exports.',
    readMinutes: 6,
    date: '2026-03-18',
  },
  {
    slug: 'hs-code-0712-dehydrated-vegetables',
    title: 'Understanding HS Code 0712 for Dehydrated Vegetables',
    category: 'HS Code Knowledge',
    excerpt:
      'A practical guide to 0712.20, 0712.90 classifications, FTA benefits and country-wise duty implications.',
    readMinutes: 4,
    date: '2026-02-27',
  },
  {
    slug: 'red-sea-routing-q2',
    title: 'Red Sea Routing & Freight Impact — Q2 Advisory',
    category: 'Export Updates',
    excerpt:
      'Current Cape-of-Good-Hope reroutes, transit-time implications and how merchant exporters are hedging freight.',
    readMinutes: 5,
    date: '2026-04-04',
  },
  {
    slug: 'turmeric-curcumin-grading',
    title: 'Turmeric Curcumin Grading & Buyer Expectations',
    category: 'Product Research',
    excerpt:
      'Curcumin %, moisture, colour values and metal-detection SOPs that global buyers actually audit on arrival.',
    readMinutes: 7,
    date: '2026-01-22',
  },
];
