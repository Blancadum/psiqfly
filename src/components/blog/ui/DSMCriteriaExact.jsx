'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

export const DSMCriteriaExact = ({ criteria }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCriteria = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const renderItems = (items, itemType = 'numbered') => {
    if (!items || items.length === 0) return null;

    if (itemType === 'bullets') {
      return (
        <ul className="psi-dsm-exact-items-bullets">
          {items.map((subitem, subindex) => (
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
        </ul>
      );
    }

    return (
      <ol className="psi-dsm-exact-items">
        {items.map((subitem, subindex) => (
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
    );
  };

  return (
    <div className="psi-dsm-exact-container">
      {criteria.map((item, index) => (
        <div key={index} className="psi-dsm-exact-item">
          <button
            type="button"
            className="psi-dsm-exact-trigger"
            onClick={() => toggleCriteria(index)}
            aria-expanded={expandedIndex === index}
          >
            <span className="psi-dsm-exact-letter">{item.letter}.</span>
            <span className="psi-dsm-exact-title">{item.title}</span>
            <span className={`psi-dsm-exact-toggle ${expandedIndex === index ? 'expanded' : ''}`}>
              ▶
            </span>
          </button>

          {expandedIndex === index && (
            <div className="psi-dsm-exact-content">
              {item.description && (
                <p className="psi-dsm-exact-description">
                  {item.description}
                </p>
              )}

              {item.items && item.items.length > 0 && (
                renderItems(item.items, item.itemType || 'numbered')
              )}

              {item.note && (
                <p className="psi-dsm-exact-note">
                  <strong>Nota:</strong> {item.note}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

DSMCriteriaExact.propTypes = {
  criteria: PropTypes.arrayOf(
    PropTypes.shape({
      letter: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      items: PropTypes.array,
      itemType: PropTypes.oneOf(['numbered', 'bullets']),
      note: PropTypes.string,
    })
  ).isRequired,
};
