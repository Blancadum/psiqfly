import React from 'react';

const INTERESTS = [
  { label: 'Razonamiento Clínico',     emoji: '🧠' },
  { label: 'Sesgos Diagnósticos',      emoji: '🔍' },
  { label: 'Debiasing',                emoji: '⚖️' },
  { label: 'Simulación Clínica',       emoji: '🩺' },
  { label: 'SEO',                      emoji: '📈' },
  { label: 'Desarrollo Web',           emoji: '💻' },
  { label: 'Didáctica',                emoji: '🎓' },
  { label: 'Psicología Infantojuvenil',emoji: '🧒' },
  { label: 'Autocuidado del Clínico',  emoji: '🌿' },
  { label: 'UX',                       emoji: '✦'  },
];

export const Interests = () => (
  <section className="py-4">
    <h2 className="psi-section-title mb-6">
      Áreas de <span className="psi-gradient-text">Interés</span>
    </h2>

    <div className="psi-interests-grid">
      {INTERESTS.map(({ label, emoji }) => (
        <span key={label} className="psi-interest-tag">
          <span className="text-base leading-none">{emoji}</span>
          {label}
        </span>
      ))}
    </div>
  </section>
);
