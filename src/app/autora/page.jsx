import { AuthorHero } from '@/components/Layout/Author/AuthorHero';
import { AuthorBio } from '@/components/Layout/Author/AutorBio';
import { Interests } from '@/components/Layout/Author/Interests';
import { CredentialsCarousel } from '@/components/ui/CredentialsCarousel';
import { ContactForm } from '@/components/Layout/ContactForm';
import { NewsletterSection } from '@/components/Layout/NewsletterSection';

export const metadata = {
  title: 'Autora · Blanca De Uña Martín | PsiQFly',
  description: 'Psicóloga, Fullstack Developer y creadora de PsiQFly®.',
};

export default function AutoraPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-20 pb-16 space-y-16">
      <AuthorHero />
      <AuthorBio />
      <Interests />
      <CredentialsCarousel />
      <section id="formulario" className="pt-4">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-6">Escríbeme</h2>
        <ContactForm />
      </section>
      <NewsletterSection />
    </div>
  );
}
