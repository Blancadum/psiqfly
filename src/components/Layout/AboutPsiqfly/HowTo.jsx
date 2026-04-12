import React from 'react';

const steps = [
  { n: '01', t: 'Accede con tu centro', d: 'Tu institución activa el acceso. Perfiles diferenciados.' },
  { n: '02', t: 'Elige un caso clínico', d: 'Casos organizados por dificultad y área clínica.' },
  { n: '03', t: 'Razona paso a paso', d: 'Explora la historia, aplica criterios DSM-5-TR.' },
  { n: '04', t: 'Recibe feedback real', d: 'Cada decisión genera feedback fundamentado.' }
];

export const HowTo = () => (
  <section className="max-w-4xl mx-auto px-8 py-16">
    <h2 className="psi-about-title-section">Cómo <span className="psi-gradient-text">funciona</span></h2>
    <div className="space-y-5">
      {steps.map(p => (
        <div key={p.n} className="psi-step-card">
          <span className="psi-step-number">{p.n}</span>
          <div>
            <p className="font-bold text-slate-900 text-lg mb-1">{p.t}</p>
            <p className="text-slate-600 text-base leading-relaxed">{p.d}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);