import React from 'react';
import Link from 'next/link';

export const CtaFinal = () => (
  <section className="px-8">
    <div className="psi-cta-box">
      <h2 className="text-xl font-bold text-slate-900 mb-2">
        ¿Quieres estar a la <span className="psi-gradient-text">última</span>?
      </h2>
      <p className="text-slate-500 mb-6 text-sm">
        Artículos sobre razonamiento clínico, sesgos diagnósticos y psicopatología con base en evidencia.
      </p>
      <Link href="/blog" className="inline-block bg-[#634AE6] text-white px-7 py-2.5 rounded-lg text-sm font-bold shadow hover:scale-105 transition-transform">
        Visita el blog ›
      </Link>
    </div>
  </section>
);