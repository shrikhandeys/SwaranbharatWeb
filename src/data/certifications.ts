export type Certification = {
  code: string;
  name: string;
  description: string;
};

export const certifications: Certification[] = [
  { code: 'IEC', name: 'Import Export Code', description: 'DGFT-issued export licence' },
  { code: 'GST', name: 'GST Registered', description: 'Goods & Services Tax compliant' },
  { code: 'FSSAI', name: 'FSSAI Licensed', description: 'Food Safety & Standards Authority of India' },
  { code: 'MSME', name: 'MSME Registered', description: 'Udyam-recognised enterprise' },
  { code: 'NABL', name: 'NABL / Lab Tested', description: 'Accredited laboratory testing' },
  { code: 'APEDA', name: 'APEDA Member', description: 'Agricultural & Processed Food Products Export Development Authority' },
];
