import Link from 'next/link';

export const CTALoginRegister = () => {
  return (
    <section className="psi-cta-login">
      <div className="psi-cta-login-card">
        
        <div className="psi-cta-login-content">
          <h2 className="psi-cta-login-title">
            ¿Listo para practicar?
          </h2>
          <p className="psi-excerpt text-base">
            Accede con tu{' '}
            <span className="psi-cta-login-highlight">correo institucional</span>{' '}
            o pide a tu centro que se suscriba.
          </p>
        </div>

        <div className="psi-cta-login-actions">
          <Link href="/login" className="psi-btn-primary psi-btn-primary--large">
            Iniciar sesión ›
          </Link>
          <Link href="/contacto" className="psi-cta-login-contact">
            Contactar <span className="text-lg">✉️</span>
          </Link>
        </div>
        
      </div>
    </section>
  );
};