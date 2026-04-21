import HeroSlider from '@/components/home/HeroSlider';
import TrustStrip from '@/components/home/TrustStrip';
import AboutPreview from '@/components/home/AboutPreview';
import ProductCategories from '@/components/home/ProductCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Services from '@/components/home/Services';
import Certifications from '@/components/home/Certifications';
import ResearchPreview from '@/components/home/ResearchPreview';
import InquiryForm from '@/components/home/InquiryForm';
import ProcessFlow from '@/components/home/ProcessFlow';
import Testimonials from '@/components/home/Testimonials';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <TrustStrip />
      <AboutPreview />
      <ProductCategories />
      <FeaturedProducts />
      <Services />
      <Certifications />
      <ResearchPreview />
      <ProcessFlow />
      <Testimonials />
      <InquiryForm />
    </>
  );
}
