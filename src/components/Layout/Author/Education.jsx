"use client"; // 1. Obligatorio porque usas useState y onClick
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImageIcon, ExternalLink, FileText } from 'lucide-react';
import { CertificateModal } from '@/components/ui/CertificateModal';

const INSTITUTION_NAMES = {
  'ISEP':          'ISEP — Instituto Superior de Estudios Psicológicos',
  'UOC':           'Universitat Oberta de Catalunya',
  'UB':            'Universitat de Barcelona',
  'IOC':           'Institut Obert de Catalunya',
  'Ironhack':      'Ironhack Bootcamp',
  'Bigschool':     'Bigschool Formación Online',
  'Defoin':        'Defoin — Formación Profesional',
  'Cum Laude':     'Cum Laude Formación',
  'Grupo Hedima':  'Grupo Hedima Formación',
};

export const EducationItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCert, setShowCert] = useState(false);

  // Lógica para decidir qué mostrar en el modal (Prioriza PDF sobre Imagen)
  const certSource = item.docs?.titulo || item.image;

  return (
    <div className={`psi-edu-card ${isOpen ? 'psi-edu-card--open' : ''}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="psi-edu-header"
      >
        <div className="psi-edu-year">
          <span className="psi-edu-year-label">{item.year}</span>
        </div>
        <div className="psi-edu-info">
          <h3 className="psi-edu-title">{item.title}</h3>
          <p className="psi-edu-meta">{item.institution}{item.note ? ` · ${item.note}` : ''}</p>
        </div>
        <div className={`psi-edu-toggle ${isOpen ? 'psi-edu-toggle--open' : ''}`}>
          {isOpen ? '−' : '+'}
        </div>
      </button>

      {isOpen && (
        <div className="psi-edu-panel">
          {/* Institución con nombre completo */}
          <p className="text-sm font-semibold text-slate-900 mb-4">
            {INSTITUTION_NAMES[item.institution] ?? item.institution}
          </p>

          <p className="text-sm font-black text-indigo-500 uppercase tracking-widest mb-4">Competencias Adquiridas</p>
          <div className="psi-edu-skills">
            {item.skills.map((skill) => (
              <div key={skill.label} className="psi-skill-card">
                <span className="text-xl flex-shrink-0">{skill.icon}</span>
                <div>
                  <p className="psi-skill-label">{skill.label}</p>
                  <p className="psi-skill-desc">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="psi-edu-cert-actions">
            {/* BOTÓN 1: Ver en Modal (Imagen o PDF) */}
            {certSource && (
              <button onClick={() => setShowCert(true)} className="psi-btn-cert">
                <ImageIcon size={16} />
                Ver documento
              </button>
            )}

            {/* BOTÓN 2: Enlace Externo (Si existe) */}
            {item.link && item.link !== '#' && (
              <a href={item.link} target="_blank" rel="noopener noreferrer nofollow" className="psi-btn-cert-link">
                <ExternalLink size={16} />
                Info oficial
              </a>
            )}

            {/* BOTÓN 3: Descargar Notas (Si existe en tu nuevo objeto docs) */}
            {item.docs?.notas && (
              <a href={item.docs.notas} download className="psi-btn-cert-link text-xs">
                <FileText size={14} />
                Notas
              </a>
            )}
          </div>

          {showCert && (
            <CertificateModal
              src={certSource}
              title={`${item.title} — ${item.institution}`}
              onClose={() => setShowCert(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

// 2. ACTUALIZACIÓN DE PROPTYPES (Como actualizar una Interfaz en Java)
EducationItem.propTypes = {
  item: PropTypes.shape({
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    note: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.any, // Puede ser un objeto de import o string
    docs: PropTypes.shape({
      titulo: PropTypes.string,
      notas: PropTypes.string,
    }),
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.node,
        label: PropTypes.string.isRequired,
        desc: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};