'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

export const DSMCriteria = ({ criteria }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCriteria = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="psi-dsm-criteria-container">
      <div className="psi-dsm-criteria-wrapper">
        {criteria.map((item, index) => (
          <div key={index} className="psi-dsm-criteria-item">
            <button
              type="button"
              className="psi-dsm-criteria-trigger"
              onClick={() => toggleCriteria(index)}
              aria-expanded={expandedIndex === index}
            >
              <div className="psi-dsm-criteria-header">
                <span className="psi-dsm-criteria-letter">{item.letter}</span>
                <span className="psi-dsm-criteria-title">{item.title}</span>
              </div>
              <span className={`psi-dsm-criteria-icon transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                ▾
              </span>
            </button>

            {expandedIndex === index && (
              <div className="psi-dsm-criteria-content animate-fade-in">
                {item.description && (
                  <p className="psi-dsm-criteria-description">
                    {item.description}
                  </p>
                )}

                {item.items && item.items.length > 0 && (
                  <ul className="psi-dsm-criteria-list">
                    {item.items.map((subitem, subindex) => (
                      <li key={subindex} className="psi-dsm-criteria-list-item">
                        {typeof subitem === 'string' ? (
                          subitem
                        ) : (
                          <>
                            <strong>{subitem.title}:</strong> {subitem.description}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {item.note && (
                  <p className="psi-dsm-criteria-note">
                    <span className="psi-dsm-criteria-note-label">Nota:</span> {item.note}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

DSMCriteria.propTypes = {
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
