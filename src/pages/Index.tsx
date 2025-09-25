import { HeroSection } from '@/components/HeroSection';
import { ProductCarousel } from '@/components/ProductCarousel';
import { BonusSection } from '@/components/BonusSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <section id="products">
        <ProductCarousel />
      </section>
      <BonusSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <Footer />
    </div>
  );
};

export default Index;
