export type FeaturedProduct = {
  slug: string;
  name: string;
  categorySlug: string;
  blurb: string;
  image: string;
  hsCode?: string;
  moq?: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    slug: 'moringa-powder',
    name: 'Moringa Powder',
    categorySlug: 'powdered-products',
    blurb:
      'Leaf-dried, shade-processed moringa oleifera powder. Rich chlorophyll content, lab-tested purity.',
    image: '/products/moringa-powder.jpg',
    hsCode: '1211.90',
    moq: '500 kg',
  },
  {
    slug: 'onion-powder',
    name: 'Onion Powder',
    categorySlug: 'powdered-products',
    blurb:
      'Fine-milled dehydrated onion powder with consistent mesh size. Ideal for seasonings & retort packs.',
    image: '/products/onion-powder.jpg',
    hsCode: '0712.20',
    moq: '1 MT',
  },
  {
    slug: 'turmeric-powder',
    name: 'Turmeric Powder',
    categorySlug: 'powdered-products',
    blurb:
      'High-curcumin Salem & Erode origin turmeric — sortex-clean, metal-detected, NABL-tested.',
    image: '/products/turmeric-powder.jpg',
    hsCode: '0910.30',
    moq: '1 MT',
  },
  {
    slug: 'fresh-ginger',
    name: 'Fresh Ginger',
    categorySlug: 'perishable-products',
    blurb:
      'Hand-picked Karnataka ginger, hot-wash treated. Reefer shipment with phytosanitary certification.',
    image:
      'https://images.unsplash.com/photo-1506824003526-a9b711d1ae39?auto=format&fit=crop&w=1000&q=80',
    hsCode: '0910.11',
    moq: '20 MT',
  },
  {
    slug: 'red-chilli',
    name: 'Red Chilli',
    categorySlug: 'agri-products',
    blurb:
      'Teja, Sannam & Guntur varieties — whole, stemless, or crushed. Low aflatoxin, FSSAI certified.',
    image: '/products/red-chilli.jpg',
    hsCode: '0904.22',
    moq: '5 MT',
  },
  {
    slug: 'paper-bags',
    name: 'Paper Bags',
    categorySlug: 'paper-products',
    blurb:
      'Custom-printed kraft and recycled paper bags for retail, grocery and D2C brands worldwide.',
    image: '/products/paper-bags.jpg',
    hsCode: '4819.30',
    moq: '10,000 pcs',
  },
];
