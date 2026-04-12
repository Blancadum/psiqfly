import React from 'react';
import Link from 'next/link';

export const CtaFinal = () => (
  <section className="px-8">
    <div className="psi-cta-box">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
        ¿Lista para <span className="psi-gradient-text">empezar</span>?
      </h2>
      <p className="text-slate-600 mb-10 text-lg">
        Crea tu cuenta institucional y empieza a entrenar tu razonamiento clínico hoy.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link href="/register" className="bg-[#634AE6] text-white px-10 py-4 rounded-[1.2rem] font-bold shadow-lg shadow-indigo-100 hover:scale-105 transition-transform">
          Crear cuenta ›
        </Link>
        <Link href="/login" className="bg-slate-50 text-slate-700 px-10 py-4 rounded-[1.2rem] font-bold border border-slate-200 hover:bg-slate-100">
          Ya tengo cuenta ›
        </Link>
      </div>
    </div>
  </section>
);