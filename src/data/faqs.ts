export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: 'What is your minimum order quantity?',
    answer:
      'MOQs vary by product. Powders typically start at 500 kg – 1 MT; fresh produce from 20 MT (one reefer). Exact MOQ is confirmed on your quote.',
  },
  {
    question: 'Do you provide lab test reports?',
    answer:
      'Yes. Every export lot is tested in NABL-accredited labs for moisture, microbial load, pesticide residue, aflatoxin and heavy metals. Reports are shared pre-shipment.',
  },
  {
    question: 'Can you support private-label packaging?',
    answer:
      'Yes. We offer full private-label support — artwork, barcoding, retail-ready cartons and pallet stacking to your destination market standards.',
  },
  {
    question: 'Which countries do you currently export to?',
    answer:
      'We are actively shipping to buyers across the Gulf, South-East Asia, EU, UK, US and parts of Africa. Documentation is tailored per destination.',
  },
  {
    question: 'How are samples handled?',
    answer:
      'Paid samples are dispatched via DHL/FedEx within 3–5 working days after spec confirmation. Sample cost is adjustable against your first commercial order.',
  },
];
