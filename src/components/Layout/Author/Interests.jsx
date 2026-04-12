import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ children }) => (
  <span className="psi-tag-category animate-fade-in hover:scale-105 transition-all">
    {children}
  </span>
);

Tag.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Interests = () => {
  // Cambiamos AREAS por FIELDS o INTERESTS
  const INTERESTS_LIST = [
    'Razonamiento Clínico', 'Sesgos Diagnósticos', 'Debiasing',
    'Simulación Clínica', 'SEO', 'Desarrollo Web', 'Didáctica',
    'Psicología Infantojuvenil', 'Autocuidado del Clínico', 'UX'
  ];

  return (
    <section className="py-4">
      <h2 className="psi-section-title">
        Áreas de <span className="psi-gradient-text">Interés</span>
      </h2>
      
      <div className="flex flex-wrap justify-center gap-2.5">
        {INTERESTS_LIST.map((item) => (
          <Tag key={item}>
            {item}
          </Tag>
        ))}
      </div>
    </section>
  );
};