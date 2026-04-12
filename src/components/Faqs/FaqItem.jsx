'use client';
// Componente base de una pregunta FAQ con acordeón (abre/cierra al clicar).
// Recibe q (pregunta) y a (respuesta). Usado por FAQAccordion, FaqPsiqfly y FaqSectionTM.
import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { useAccordion } from '@/hooks/Faq/useAccordion';

export const FaqItem = ({ q, a }) => {
  const { isOpen, toggle } = useAccordion();

  return (
    <div className="psi-faq-container">
      <button onClick={toggle} className="psi-faq-trigger">
        <span className="psi-faq-question">{q}</span>
        <span className="psi-faq-icon">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      {isOpen && (
        <div className="psi-faq-content">
          {typeof a === 'string'
            ? <ReactMarkdown components={{
                p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                strong: ({ children }) => <strong className="font-semibold text-slate-800 dark:text-slate-200">{children}</strong>,
                a: ({ href, children }) => <a href={href} className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>,
              }}>{a}</ReactMarkdown>
            : a}
        </div>
      )}
    </div>
  );
};

FaqItem.propTypes = {
  q: PropTypes.string.isRequired,
  a: PropTypes.node.isRequired,
};