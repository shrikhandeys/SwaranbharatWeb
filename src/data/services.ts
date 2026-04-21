import type { LucideIcon } from 'lucide-react';
import {
  Microscope,
  LineChart,
  FileSearch,
  FileCheck2,
  Tags,
  Handshake,
} from 'lucide-react';

export type Service = {
  slug: string;
  name: string;
  blurb: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: 'product-research',
    name: 'Product Research',
    blurb:
      'Data-driven product screening across agri, dehydrated, powdered and paper categories — specs, grades, origins.',
    icon: Microscope,
  },
  {
    slug: 'market-research',
    name: 'Market Research',
    blurb:
      'Country-wise demand, pricing and compliance intelligence to help you choose the right export corridor.',
    icon: LineChart,
  },
  {
    slug: 'hs-code-assistance',
    name: 'HS Code Assistance',
    blurb:
      'Accurate HS classification, duty structure and trade-agreement benefits for your shipment.',
    icon: FileSearch,
  },
  {
    slug: 'export-documentation',
    name: 'Export Documentation',
    blurb:
      'Invoice, packing list, CoO, phytosanitary, APEDA, FSSAI and BL — end-to-end document support.',
    icon: FileCheck2,
  },
  {
    slug: 'private-label',
    name: 'Private Label Support',
    blurb:
      'Your brand, our supply chain — custom packaging, artwork, barcoding and retail-ready SKUs.',
    icon: Tags,
  },
  {
    slug: 'sourcing-assistance',
    name: 'Sourcing Assistance',
    blurb:
      'Verified sourcing across Indian origins with sample-approval workflow and QC at every stage.',
    icon: Handshake,
  },
];
