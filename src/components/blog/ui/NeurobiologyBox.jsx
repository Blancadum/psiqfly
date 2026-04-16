'use client';

import PropTypes from 'prop-types';

export const NeurobiologyBox = ({ items }) => {
  return (
    <div className="psi-neurobiology-container">
      {items.map((item, index) => (
        <div key={index} className="psi-neurobiology-card">
          <div className="psi-neurobiology-header">
            <span className="psi-neurobiology-icon">{item.icon}</span>
            <h4 className="psi-neurobiology-title">{item.title}</h4>
          </div>
          <p className="psi-neurobiology-content">
            {item.content}
          </p>
          {item.highlight && (
            <div className="psi-neurobiology-highlight">
              {item.highlight}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

NeurobiologyBox.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      highlight: PropTypes.string,
    })
  ).isRequired,
};
