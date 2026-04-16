import PropTypes from 'prop-types';
import { FeatureCard } from '@/components/ui/FeatureCard';

const DEFAULT_FEATURES = [
  { icon: "📖", title: "Casos simulados",  text: "Historias clínicas interactivas con feedback inmediato para entrenar el razonamiento diagnóstico." },
  { icon: "🧠", title: "Wiki de sesgos",   text: "Detecta anclaje, confirmación, disponibilidad, halo… y practica estrategias de mitigación." },
  { icon: "🚀", title: "Itinerarios",       text: "Progresión de dificultad para consolidar criterios y evitar el cierre prematuro." },
  { icon: "🌿", title: "Autocuidado",       text: "Módulo de bienestar: síndrome del impostor, carga vicaria y gestión emocional." },
];

export const FeaturesGrid = ({
  items = DEFAULT_FEATURES,
  title = 'Diseñado para',
  titleHighlight = 'profesionales en formación',
}) => (
  <section className="psi-features-section">
    <header className="psi-features-header">
      <h2 className="psi-title-section">
        {title} <span className="psi-gradient-text">{titleHighlight}</span>
      </h2>
    </header>
    <div className="psi-features-grid">
      {items.map((f) => (
        <FeatureCard key={f.title} icon={f.icon} title={f.title} text={f.text} />
      ))}
    </div>
  </section>
);

FeaturesGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    icon:  PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text:  PropTypes.string.isRequired,
  })),
  title:          PropTypes.string,
  titleHighlight: PropTypes.string,
};
