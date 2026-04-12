"use client";
import React from 'react';
import Link from 'next/link';

export const RightSideHome = () => {
  const features = [
    'Casos de ansiedad y depresión progresivos',
    'Checklist DSM-5-TR e instrumentos validados',
    'Wiki de sesgos y estrategias de debiasing',
    'Módulo de autocuidado para el clínico'
  ];

  return (
    
    <div className="lg:col-span-5 flex justify-center lg:justify-end">

      <div className="psi-action-card">
        <h2 className="psi-action-card-title">Empieza en minutos</h2>

        <p className="psi-action-card-text">
          Crea una <span className="psi-text-strong">cuenta institucional</span> y resuelve tu primer caso guiado con criterios <span className="psi-text-strong">DSM-5-TR</span>.
        </p>

        <ul className="psi-action-card-list">
          {features.map((item, i) => (
            <li key={i} className="psi-action-card-item">
              <span className="psi-action-card-bullet">•</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="psi-action-card-buttons" style={{ display: 'none' }}>
          <button disabled className="psi-btn-primary psi-btn-card">
            Empezar ahora ›
          </button>
          <button disabled className="psi-btn-secondary psi-btn-card">
            Ver casos
          </button>
        </div>
        <p className="text-xs font-semibold text-slate-400 text-center mt-3 tracking-wide">
          Próximamente
        </p>
      </div>

    </div>
  );
};
