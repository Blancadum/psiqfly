import { HomeLayout } from '@/components/Layout/Home/HomeLayout';
import { HeroHome } from '@/components/Layout/Home/HeroHome';
import { FeaturesGrid } from '@/components/Layout/FeaturesGrid';
import { AboutOrigen } from '@/components/Layout/AboutPsiqfly/AboutOrigen';
import { HowTo } from '@/components/Layout/AboutPsiqfly/HowTo';
import { CtaFinal } from '@/components/Layout/AboutPsiqfly/CTAFinal';
import { FaqHome } from '@/components/Layout/FaqHome';
import { NewsletterSection } from '@/components/Layout/NewsletterSection';

export default function HomePage() {
  return (
    <HomeLayout>
      <HeroHome />
      <FeaturesGrid />
      <AboutOrigen />
      <HowTo />
      <CtaFinal />
      <FaqHome />
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <NewsletterSection />
      </div>
    </HomeLayout>
  );
}
