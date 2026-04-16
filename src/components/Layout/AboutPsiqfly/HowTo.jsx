import React from 'react';

const steps = [
  { n: '01', t: 'Accede con tu centro', d: 'Tu institución activa el acceso. Perfiles diferenciados.' },
  { n: '02', t: 'Elige un caso clínico', d: 'Casos organizados por dificultad y área clínica.' },
  { n: '03', t: 'Razona paso a paso', d: 'Explora la historia, aplica criterios DSM-5-TR.' },
  { n: '04', t: 'Recibe feedback real', d: 'Cada decisión genera feedback fundamentado.' }
];

export const HowTo = () => (
  <section className="psi-howto">
    <h2 className="psi-about-title-section">Cómo <span className="psi-gradient-text">funciona</span></h2>
    <div className="space-y-5">
      {steps.map(p => (
        <div key={p.n} className="psi-step-card">
          <span className="psi-step-number">{p.n}</span>
          <div>
            <p className="psi-step-title">{p.t}</p>
            <p className="psi-step-desc">{p.d}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);