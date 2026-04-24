import HeroSlider from '@/components/home/HeroSlider';
import HeroIntro from '@/components/home/HeroIntro';
import TrustStrip from '@/components/home/TrustStrip';
import AboutPreview from '@/components/home/AboutPreview';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Services from '@/components/home/Services';
import InquiryForm from '@/components/home/InquiryForm';
import ProcessFlow from '@/components/home/ProcessFlow';
import Testimonials from '@/components/home/Testimonials';
import ContactStrip from '@/components/home/ContactStrip';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <HeroIntro />
      <TrustStrip />
      <FeaturedProducts />
      <Services />
      <AboutPreview />
      <ProcessFlow />
      <InquiryForm />
      <Testimonials />
      <ContactStrip />
    </>
  );
}
