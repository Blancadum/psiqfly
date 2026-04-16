'use client';

import PropTypes from 'prop-types';

export const DSMCriteriaVisual = ({ criteria }) => {
  const colorMap = {
    A: { bg: 'from-red-50 to-red-100', border: 'border-red-400', letter: 'bg-red-500', text: 'text-red-900', dark: { bg: 'dark:from-red-950/40 dark:to-red-900/30', border: 'dark:border-red-700', letter: 'dark:bg-red-700', text: 'dark:text-red-100' } },
    B: { bg: 'from-orange-50 to-orange-100', border: 'border-orange-400', letter: 'bg-orange-500', text: 'text-orange-900', dark: { bg: 'dark:from-orange-950/40 dark:to-orange-900/30', border: 'dark:border-orange-700', letter: 'dark:bg-orange-700', text: 'dark:text-orange-100' } },
    C: { bg: 'from-amber-50 to-amber-100', border: 'border-amber-400', letter: 'bg-amber-500', text: 'text-amber-900', dark: { bg: 'dark:from-amber-950/40 dark:to-amber-900/30', border: 'dark:border-amber-700', letter: 'dark:bg-amber-700', text: 'dark:text-amber-100' } },
    D: { bg: 'from-yellow-50 to-yellow-100', border: 'border-yellow-400', letter: 'bg-yellow-500', text: 'text-yellow-900', dark: { bg: 'dark:from-yellow-950/40 dark:to-yellow-900/30', border: 'dark:border-yellow-700', letter: 'dark:bg-yellow-700', text: 'dark:text-yellow-100' } },
    E: { bg: 'from-green-50 to-green-100', border: 'border-green-400', letter: 'bg-green-500', text: 'text-green-900', dark: { bg: 'dark:from-green-950/40 dark:to-green-900/30', border: 'dark:border-green-700', letter: 'dark:bg-green-700', text: 'dark:text-green-100' } },
    F: { bg: 'from-blue-50 to-blue-100', border: 'border-blue-400', letter: 'bg-blue-500', text: 'text-blue-900', dark: { bg: 'dark:from-blue-950/40 dark:to-blue-900/30', border: 'dark:border-blue-700', letter: 'dark:bg-blue-700', text: 'dark:text-blue-100' } },
    G: { bg: 'from-indigo-50 to-indigo-100', border: 'border-indigo-400', letter: 'bg-indigo-500', text: 'text-indigo-900', dark: { bg: 'dark:from-indigo-950/40 dark:to-indigo-900/30', border: 'dark:border-indigo-700', letter: 'dark:bg-indigo-700', text: 'dark:text-indigo-100' } },
  };

  return (
    <div className="psi-dsm-visual-container">
      {criteria.map((item, index) => {
        const colors = colorMap[item.letter] || colorMap.A;
        return (
          <div
            key={index}
            className={`psi-dsm-visual-card bg-gradient-to-br ${colors.bg} ${colors.dark.bg} border-3 ${colors.border} ${colors.dark.border}`}
          >
            {/* Header */}
            <div className="psi-dsm-visual-header">
              <div className={`psi-dsm-visual-letter ${colors.letter} ${colors.dark.letter}`}>
                {item.letter}
              </div>
              <h3 className={`psi-dsm-visual-title ${colors.text} ${colors.dark.text}`}>
                {item.title}
              </h3>
            </div>

            {/* Description */}
            {item.description && (
              <p className={`psi-dsm-visual-description ${colors.text} ${colors.dark.text}`}>
                {item.description}
              </p>
            )}

            {/* Items List */}
            {item.items && item.items.length > 0 && (
              <ul className={`psi-dsm-visual-list ${colors.text} ${colors.dark.text}`}>
                {item.items.map((subitem, subindex) => (
                  <li key={subindex} className="psi-dsm-visual-list-item">
                    {typeof subitem === 'string' ? (
                      <>
                        <span className="psi-dsm-visual-bullet">▪</span>
                        {subitem}
                      </>
                    ) : (
                      <>
                        <span className="psi-dsm-visual-bullet">▪</span>
                        <strong>{subitem.title}:</strong> {subitem.description}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {/* Note */}
            {item.note && (
              <div className={`psi-dsm-visual-note ${colors.text} ${colors.dark.text}`}>
                <span className="font-semibold">Nota:</span> {item.note}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

DSMCriteriaVisual.propTypes = {
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
