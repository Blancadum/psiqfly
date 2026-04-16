'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

export const DSMCriteriaCompact = ({ criteria }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCriteria = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="psi-dsm-compact-container">
      <div className="psi-dsm-compact-list">
        {criteria.map((item, index) => (
          <div key={index} className="psi-dsm-compact-item">
            <button
              type="button"
              className="psi-dsm-compact-trigger"
              onClick={() => toggleCriteria(index)}
              aria-expanded={expandedIndex === index}
            >
              <span className="psi-dsm-compact-letter">{item.letter}</span>
              <span className="psi-dsm-compact-title">{item.title}</span>
              <span className={`psi-dsm-compact-toggle transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {expandedIndex === index && (
              <div className="psi-dsm-compact-content animate-fade-in">
                {item.description && (
                  <p className="psi-dsm-compact-description">
                    {item.description}
                  </p>
                )}

                {item.items && item.items.length > 0 && (
                  <ul className="psi-dsm-compact-items">
                    {item.items.map((subitem, subindex) => (
                      <li key={subindex}>
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
                  <p className="psi-dsm-compact-note">
                    <strong>Nota:</strong> {item.note}
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

DSMCriteriaCompact.propTypes = {
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
