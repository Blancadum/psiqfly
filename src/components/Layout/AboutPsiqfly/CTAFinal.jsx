import React from 'react';
import Link from 'next/link';

export const CtaFinal = () => (
  <section className="psi-cta-final">
    <div className="psi-cta-box">
      <h2 className="psi-cta-final-title">
        ¿Quieres estar a la <span className="psi-gradient-text">última</span>?
      </h2>
      <p className="psi-cta-final-desc">
        Artículos sobre razonamiento clínico, sesgos diagnósticos y psicopatología con base en evidencia.
      </p>
      <Link href="/blog" className="psi-btn-primary">
        Visita el blog ›
      </Link>
    </div>
  </section>
);