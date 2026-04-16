'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

const colorMap = {
  A: 'red',
  B: 'orange',
  C: 'amber',
  D: 'yellow',
  E: 'green',
  F: 'blue',
  G: 'indigo',
};

const getColorClasses = (letter) => {
  const color = colorMap[letter] || 'slate';
  const colorConfig = {
    red: { border: 'border-red-400 dark:border-red-700', bg: 'bg-red-50 dark:bg-red-950/20', header: 'bg-red-100 dark:bg-red-900/40', letter: 'bg-red-500 dark:bg-red-700' },
    orange: { border: 'border-orange-400 dark:border-orange-700', bg: 'bg-orange-50 dark:bg-orange-950/20', header: 'bg-orange-100 dark:bg-orange-900/40', letter: 'bg-orange-500 dark:bg-orange-700' },
    amber: { border: 'border-amber-400 dark:border-amber-700', bg: 'bg-amber-50 dark:bg-amber-950/20', header: 'bg-amber-100 dark:bg-amber-900/40', letter: 'bg-amber-500 dark:bg-amber-700' },
    yellow: { border: 'border-yellow-400 dark:border-yellow-700', bg: 'bg-yellow-50 dark:bg-yellow-950/20', header: 'bg-yellow-100 dark:bg-yellow-900/40', letter: 'bg-yellow-500 dark:bg-yellow-700' },
    green: { border: 'border-green-400 dark:border-green-700', bg: 'bg-green-50 dark:bg-green-950/20', header: 'bg-green-100 dark:bg-green-900/40', letter: 'bg-green-500 dark:bg-green-700' },
    blue: { border: 'border-blue-400 dark:border-blue-700', bg: 'bg-blue-50 dark:bg-blue-950/20', header: 'bg-blue-100 dark:bg-blue-900/40', letter: 'bg-blue-500 dark:bg-blue-700' },
    indigo: { border: 'border-indigo-400 dark:border-indigo-700', bg: 'bg-indigo-50 dark:bg-indigo-950/20', header: 'bg-indigo-100 dark:bg-indigo-900/40', letter: 'bg-indigo-500 dark:bg-indigo-700' },
  };
  return colorConfig[color] || colorConfig.slate;
};

export const DSMCriteriaCollapsible = ({ criteria }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCriteria = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="psi-dsm-collapsible-container">
      {criteria.map((item, index) => {
        const colors = getColorClasses(item.letter);
        return (
          <div key={index} className={`psi-dsm-collapsible-item border-2 ${colors.border}`}>
            <button
              type="button"
              className={`psi-dsm-collapsible-trigger ${colors.header} w-full flex items-center gap-3 px-3 py-2 hover:opacity-80 transition-opacity cursor-pointer`}
              onClick={() => toggleCriteria(index)}
              aria-expanded={expandedIndex === index}
            >
              <span className={`psi-dsm-collapsible-letter ${colors.letter} w-7 h-7 flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                {item.letter}
              </span>
              <span className="psi-dsm-collapsible-title flex-1 font-semibold text-sm text-slate-900 dark:text-slate-100 text-left">
                {item.title}
              </span>
              <span className={`psi-dsm-collapsible-toggle text-slate-600 dark:text-slate-400 transition-transform duration-200 ${expandedIndex === index ? 'rotate-90' : ''}`}>
                ▶
              </span>
            </button>

            {expandedIndex === index && (
              <div className={`psi-dsm-collapsible-content ${colors.bg} px-3 py-2.5 border-t-2 ${colors.border} space-y-2`}>
                {item.description && (
                  <p className="psi-dsm-collapsible-description text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    {item.description}
                  </p>
                )}

                {item.items && item.items.length > 0 && (
                  <ol className="psi-dsm-collapsible-items list-decimal pl-5 space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {item.items.map((subitem, subindex) => (
                      <li key={subindex}>
                        {typeof subitem === 'string' ? (
                          <span>{subitem}</span>
                        ) : (
                          <span>
                            <strong>{subitem.title}:</strong> {subitem.description}
                          </span>
                        )}
                      </li>
                    ))}
                  </ol>
                )}

                {item.note && (
                  <p className="psi-dsm-collapsible-note text-xs text-slate-700 dark:text-slate-300 border-l-2 border-slate-400 dark:border-slate-600 pl-2 py-1">
                    <strong>Nota:</strong> {item.note}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

DSMCriteriaCollapsible.propTypes = {
  criteria: PropTypes.arrayOf(
    PropTypes.shape({
      letter: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      items: PropTypes.array,
      note: PropTypes.string,
    })
  ).isRequired,
};
