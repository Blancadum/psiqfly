import { AuthorHero } from '@/components/Layout/Author/AuthorHero';
import { AuthorBio } from '@/components/Layout/Author/AutorBio';
import { Interests } from '@/components/Layout/Author/Interests';
import { EducationItem } from '@/components/Layout/Author/Education';
import { TechStack } from '@/components/Layout/Author/TechStack';
import { LearningNotepad } from '@/components/Layout/Author/LearningNotepad';
import { CredentialsCarousel } from '@/components/ui/CredentialsCarousel';
import { ContactForm } from '@/components/Layout/ContactForm';
import { NewsletterSection } from '@/components/Layout/NewsletterSection';
import { EDUCATION_DATA } from '@/Data/Cv/Education';
import { IT_EDUCATION_DATA } from '@/Data/Cv/ItEducation';

export const metadata = {
  title: 'Autora · Blanca De Uña Martín | PsiQFly',
  description: 'Psicóloga, Fullstack Developer y creadora de PsiQFly®.',
};

export default function AutoraPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-12 sm:pb-16 space-y-8 sm:space-y-12 md:space-y-16">
      <AuthorHero />
      <AuthorBio />
      <Interests />
      <section>
        <h2 className="psi-section-title mb-6">Mi <span className="psi-gradient-text">stack tech</span></h2>
        <TechStack />
      </section>
      <LearningNotepad />
      <section>
        <h2 className="psi-section-title mb-6">Formación <span className="psi-gradient-text">IT</span></h2>
        <div className="space-y-3">
          {IT_EDUCATION_DATA.map((item, i) => <EducationItem key={i} item={item} />)}
        </div>
      </section>
      <section>
        <h2 className="psi-section-title mb-6">Otra <span className="psi-gradient-text">formación</span></h2>
        <div className="space-y-3">
          {EDUCATION_DATA.filter(item => item.category !== 'it').map((item, i) => <EducationItem key={i} item={item} />)}
        </div>
      </section>
      <CredentialsCarousel />
      <section id="formulario" className="pt-4">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-6">Escríbeme</h2>
        <ContactForm />
      </section>
      <NewsletterSection />
    </div>
  );
}
