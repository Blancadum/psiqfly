"use client"; // 1. Marcamos la frontera de cliente

import React, { useState } from 'react'; // 2. IMPORTAMOS EL HOOK

const ISEP_URL = 'https://www.isep.es/tesina/psiqfly-recurso-didactico-pwa-razonamiento-diagnostico-mitigacion-sesgos-autocuidado-psicologos-noveles/';

const keyFeatures = [
  'Diagnóstico diferencial por criterios (incluyendo comorbilidad).',
  'Recordatorios antiseguezo contextuales durante la toma de decisiones.',
  'Analítica formativa (calibración de confianza vs. precisión y tiempo de acierto).',
  'Módulo de autocuidado profesional integrado en el flujo de trabajo.',
];

export const Publication = () => {
  // Ahora useState funcionará porque lo hemos importado y marcado como "use client"
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="publication" className="animate-fade-in my-10">
      <h2 className="psi-section-title">
        Publicación <span className="psi-gradient-text">Académica</span>
      </h2>

      <div className={`psi-author-card psi-pub-card ${isOpen ? 'psi-pub-card--open' : ''}`}>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="psi-pub-header w-full text-left"
          aria-expanded={isOpen}
        >
          <div className="psi-pub-emoji">🏛️</div>
          <div className="psi-pub-info">
            <p className="psi-pub-label">Thesis · ISEP 2026</p>
            <h3 className="psi-pub-title">
              PsiQFly®: Recurso didáctico PWA para el razonamiento diagnóstico, la mitigación de sesgos y el autocuidado en psicólogos noveles.
            </h3>
            <p className="psi-pub-author">Blanca De Uña Martín — Publicado en ISEP</p>
          </div>
          <span className="psi-pub-toggle">{isOpen ? '−' : '+'}</span>
        </button>

        {isOpen && (
          <div className="psi-pub-body animate-fade-in">
            <p className="psi-form-label psi-pub-abstract-label">Resumen</p>

            <div className="psi-pub-abstract">
              <p>
                Este TFM presenta <span className="psi-pub-highlight">PsiQFly®</span>, un recurso digital en formato PWA diseñado para entrenar el razonamiento diagnóstico y mitigar los sesgos cognitivos en psicólogos noveles, integrando microprácticas de autocuidado profesional.
              </p>

              <p className="psi-pub-arch-title font-bold mt-4">Arquitectura central del sistema:</p>
              <ul className="psi-pub-feature-list space-y-2 mt-2">
                {keyFeatures.map((feature, i) => (
                  <li key={i} className="psi-pub-feature-item flex gap-2">
                    <span className="psi-pub-feature-index font-bold text-indigo-500">
                      ({String.fromCodePoint(97 + i)})
                    </span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4">
                El proyecto aborda una brecha crítica en la formación clínica: aunque existen simulaciones, raramente combinan <span className="italic">diagnóstico diferencial por criterios</span>, <span className="italic">mitigación de sesgos</span> y <span className="italic">bienestar del clínico</span> en un flujo de trabajo único y cohesionado.
              </p>

              <div className="psi-pub-impact bg-indigo-50 p-4 rounded-xl mt-6 border border-indigo-100">
                <span className="psi-pub-impact-label font-bold text-indigo-700">Impacto esperado:</span> Mayor precisión diagnóstica, aumento de la autoeficacia profesional y reducción del burnout/ansiedad en psicólogos en formación.
              </div>
            </div>

            <div className="psi-pub-cta mt-8">
              <a 
                href={ISEP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="psi-btn-primary psi-btn-primary--flex inline-flex items-center"
              >
                🏛️ Ver Publicación Completa →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};