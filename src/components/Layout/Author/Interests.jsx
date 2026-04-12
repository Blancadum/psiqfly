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

    <div className="flex flex-wrap gap-2">
      {INTERESTS.map(({ label, emoji }) => (
        <span
          key={label}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-sm font-semibold text-slate-700 shadow-sm hover:border-indigo-300 hover:text-indigo-700 transition-colors"
        >
          <span className="text-base leading-none">{emoji}</span>
          {label}
        </span>
      ))}
    </div>
  </section>
);
