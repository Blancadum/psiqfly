import PropTypes from 'prop-types';

/**
 * FeatureCard — tarjeta reutilizable para mostrar una característica o punto cardinal.
 *
 * variant="feature"  → grande, hover animado, título en gradiente (FeaturesGrid, Home)
 * variant="cardinal" → compacta, título en gradiente (CardinalPoints, Autora)
 */
export const FeatureCard = ({ icon, title, text, variant = 'feature' }) => {
  if (variant === 'cardinal') {
    return (
      <div className="psi-card-cardinal text-center">
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="psi-cardinal-card-title">{title}</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{text}</p>
      </div>
    );
  }

  return (
    <div className="psi-feature-card">
      <div className="psi-feature-card-icon">{icon}</div>
      <h3 className="psi-feature-card-title">{title}</h3>
      <p className="psi-feature-card-text">{text}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['feature', 'cardinal']),
};
