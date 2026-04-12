import { HomeLayout } from '@/components/Layout/Home/HomeLayout';
import { HeroHome } from '@/components/Layout/Home/HeroHome';
import { FeaturesGrid } from '@/components/Layout/FeaturesGrid';
import { NewsletterSection } from '@/components/Layout/NewsletterSection';

export default function HomePage() {
  return (
    <HomeLayout>
      <HeroHome />
      <FeaturesGrid />
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <NewsletterSection />
      </div>
    </HomeLayout>
  );
}
