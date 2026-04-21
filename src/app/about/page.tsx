import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import VisionMission from '@/components/about/VisionMission';
import CoreCapabilities from '@/components/about/CoreCapabilities';
import ProductFocus from '@/components/about/ProductFocus';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import AboutProcessFlow from '@/components/about/AboutProcessFlow';
import AboutCertifications from '@/components/about/AboutCertifications';
import GlobalReach from '@/components/about/GlobalReach';
import Leadership from '@/components/about/Leadership';
import AboutCTA from '@/components/about/AboutCTA';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'SwaranBharat ExportSarathi LLP — an India-based merchant exporter of agri, dehydrated and value-added products. Learn about our vision, mission, capabilities, process and global reach.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: `About ${siteConfig.name}`,
    description:
      'Connecting Indian quality with global markets. Learn about our vision, mission, capabilities, process and global reach.',
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const aboutLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${siteConfig.name}`,
    url: `${siteConfig.url}/about`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      slogan: siteConfig.tagline,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.line1,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.pincode,
        addressCountry: siteConfig.address.country,
      },
    },
  };

  return (
    <>
      <AboutHero />
      <AboutIntro />
      <VisionMission />
      <CoreCapabilities />
      <ProductFocus />
      <WhyChooseUs />
      <AboutProcessFlow />
      <AboutCertifications />
      <GlobalReach />
      <Leadership />
      <AboutCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }}
      />
    </>
  );
}
