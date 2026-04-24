import type { LucideIcon } from 'lucide-react';
import { FileSearch, Files, ShieldCheck, LineChart, PackageCheck } from 'lucide-react';

export type Service = {
  slug: string;
  name: string;
  blurb: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: 'hs-code-identification',
    name: 'HS Code Identification',
    blurb: 'Clear classification support for export planning, paperwork and buyer alignment.',
    icon: FileSearch,
  },
  {
    slug: 'product-documentation-support',
    name: 'Product Documentation Support',
    blurb: 'Structured documentation guidance for specifications, samples and commercial paperwork.',
    icon: Files,
  },
  {
    slug: 'export-compliance-guidance',
    name: 'Export Compliance Guidance',
    blurb: 'Practical coordination for process discipline and certification readiness as the business scales.',
    icon: ShieldCheck,
  },
  {
    slug: 'market-research-buyer-support',
    name: 'Market Research & Buyer Support',
    blurb: 'Buyer-focused guidance around target markets, positioning and commercial conversations.',
    icon: LineChart,
  },
  {
    slug: 'packaging-logistics-coordination',
    name: 'Packaging & Logistics Coordination',
    blurb: 'Support for export presentation, dispatch planning and international movement of goods.',
    icon: PackageCheck,
  },
];
