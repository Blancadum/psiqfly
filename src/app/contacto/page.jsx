import { ContactForm } from '@/components/Layout/ContactForm';

export const metadata = {
  title: 'Contacto | PsiQFly',
  description: 'Escríbenos para colaboraciones, dudas o propuestas.',
};

export default function ContactoPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 pt-24 pb-16">
      <h1 className="text-3xl font-extrabold text-slate-800 mb-2">Contacto</h1>
      <p className="text-slate-500 mb-10">¿Tienes una duda, propuesta o quieres colaborar? Escríbenos.</p>
      <ContactForm />
    </div>
  );
}
