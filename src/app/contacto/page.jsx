import { ContactForm } from '@/components/Layout/ContactForm';

export const metadata = {
  title: 'Contacto | PsiQFly',
  description: 'Escríbenos para colaboraciones, dudas o propuestas.',
};

export default function ContactoPage() {
  return (
    <div className="psi-contact-wrapper">
      <h1 className="psi-page-h1 mb-2">Contacto</h1>
      <p className="psi-page-desc mb-10">
        ¿Tienes una duda, propuesta o quieres colaborar? Escríbenos.
      </p>
      
      <ContactForm />
    </div>
  );
}