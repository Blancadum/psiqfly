'use client';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const CRITERION_COLORS = {
  A: { border: 'border-red-400 dark:border-red-700',    header: 'bg-red-50 dark:bg-red-950/30',    badge: 'bg-red-500 dark:bg-red-700',    content: 'bg-red-50/50 dark:bg-red-950/10' },
  B: { border: 'border-orange-400 dark:border-orange-700', header: 'bg-orange-50 dark:bg-orange-950/30', badge: 'bg-orange-500 dark:bg-orange-700', content: 'bg-orange-50/50 dark:bg-orange-950/10' },
  C: { border: 'border-amber-400 dark:border-amber-700',  header: 'bg-amber-50 dark:bg-amber-950/30',  badge: 'bg-amber-500 dark:bg-amber-700',  content: 'bg-amber-50/50 dark:bg-amber-950/10' },
  D: { border: 'border-yellow-400 dark:border-yellow-700', header: 'bg-yellow-50 dark:bg-yellow-950/30', badge: 'bg-yellow-500 dark:bg-yellow-700', content: 'bg-yellow-50/50 dark:bg-yellow-950/10' },
  E: { border: 'border-green-400 dark:border-green-700',  header: 'bg-green-50 dark:bg-green-950/30',  badge: 'bg-green-500 dark:bg-green-700',  content: 'bg-green-50/50 dark:bg-green-950/10' },
  F: { border: 'border-blue-400 dark:border-blue-700',   header: 'bg-blue-50 dark:bg-blue-950/30',   badge: 'bg-blue-500 dark:bg-blue-700',   content: 'bg-blue-50/50 dark:bg-blue-950/10' },
  G: { border: 'border-indigo-400 dark:border-indigo-700', header: 'bg-indigo-50 dark:bg-indigo-950/30', badge: 'bg-indigo-500 dark:bg-indigo-700', content: 'bg-indigo-50/50 dark:bg-indigo-950/10' },
};

const DEFAULT_COLORS = {
  border: 'border-slate-300 dark:border-slate-600',
  header: 'bg-slate-100 dark:bg-slate-800/60',
  badge: 'bg-slate-500 dark:bg-slate-600',
  content: 'bg-white dark:bg-slate-900',
};

const MD_COMPONENTS = {
  p:      ({ children }) => <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-2 last:mb-0">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-slate-800 dark:text-slate-200">{children}</strong>,
  em:     ({ children }) => <em className="italic">{children}</em>,
  ol:     ({ children }) => <ol className="list-decimal pl-5 space-y-1.5 text-slate-700 dark:text-slate-300 my-2">{children}</ol>,
  ul:     ({ children }) => <ul className="list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300 my-2">{children}</ul>,
  li:     ({ children }) => <li className="text-sm leading-relaxed">{children}</li>,
};

export const DSMAccordion = ({ items }) => {
  const [open, setOpen] = useState(null);

  return (
    <div className="psi-dsm-accordion">
      {items.map((item, i) => {
        // Detecta "Criterio X: Título" o "Criterio X"
        const match = item.title.match(/^Criterio\s+([A-Ga-g])(?:[:]\s*)?(.*)$/);
        const letter = match?.[1]?.toUpperCase();
        const label = letter && match?.[2] ? match[2] : item.title;
        const colors = CRITERION_COLORS[letter] || DEFAULT_COLORS;
        const isOpen = open === i;

        return (
          <div key={i} className={`psi-dsm-accordion-item ${colors.border}`}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className={`psi-dsm-accordion-btn ${colors.header}`}
              aria-expanded={isOpen}
            >
              {letter ? (
                <span className={`psi-dsm-accordion-badge ${colors.badge}`}>
                  {letter}
                </span>
              ) : (
                <span className="psi-dsm-accordion-dot" />
              )}
              <span className="psi-dsm-accordion-label">
                {label}
              </span>
              <span className={`psi-dsm-accordion-chevron ${isOpen ? 'rotate-90' : ''}`}>
                ▶
              </span>
            </button>

            {isOpen && (
              <div className={`psi-dsm-accordion-panel ${colors.border} ${colors.content}`}>
                <ReactMarkdown components={MD_COMPONENTS}>{item.body}</ReactMarkdown>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
