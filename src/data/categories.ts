export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
  subcategories?: string[];
};

export const categories: Category[] = [
  {
    slug: 'agri-products',
    name: 'Agri Products',
    description:
      'Farm-sourced agricultural commodities from trusted Indian growers — cleaned, graded and export-ready.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
    subcategories: ['Grains', 'Pulses', 'Oil Seeds', 'Spices'],
  },
  {
    slug: 'perishable-products',
    name: 'Perishable Products',
    description:
      'Fresh onions, ginger, garlic, chillies and seasonal produce with cold-chain and reefer-container logistics.',
    image:
      'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80',
    subcategories: ['Fresh Onion', 'Fresh Ginger', 'Fresh Garlic', 'Fresh Chilli'],
  },
  {
    slug: 'dehydrated-products',
    name: 'Dehydrated Products',
    description:
      'Hygienically dehydrated onion, garlic, ginger and vegetables — long shelf life, consistent specs.',
    image:
      'https://images.unsplash.com/photo-1599664470850-f8b13fe4b8f6?auto=format&fit=crop&w=1200&q=80',
    subcategories: ['Dehydrated Onion', 'Dehydrated Garlic', 'Dehydrated Ginger', 'Vegetable Flakes'],
  },
  {
    slug: 'powdered-products',
    name: 'Powdered Products',
    description:
      'Moringa, turmeric, chilli and blended spice powders processed in lab-tested, food-grade facilities.',
    image:
      'https://images.unsplash.com/photo-1615485500834-bc10199bc727?auto=format&fit=crop&w=1200&q=80',
    subcategories: ['Moringa Powder', 'Turmeric Powder', 'Chilli Powder', 'Blended Masalas'],
  },
  {
    slug: 'paper-products',
    name: 'Paper Products',
    description:
      'Eco-friendly paper bags, kraft packaging and custom printed paper products for global retailers.',
    image:
      'https://images.unsplash.com/photo-1586380951230-e6703d9f6833?auto=format&fit=crop&w=1200&q=80',
    subcategories: ['Paper Bags', 'Kraft Rolls', 'Printed Packaging'],
  },
];
