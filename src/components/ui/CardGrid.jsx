import PropTypes from 'prop-types';
import { FeatureCard } from '@/components/ui/FeatureCard';

const DEFAULT_POINTS = [
  { icon: "🔍", title: "SEO Posicionamiento", text: "Estrategia de contenido, investigación de palabras clave y posicionamiento orgánico para proyectos digitales con impacto real." },
  { icon: "💻", title: "Desarrollo web",       text: "React, Java, Node.js y diseño UI. Construcción de aplicaciones web con visión fullstack y enfoque en la experiencia de usuario." },
  { icon: "📚", title: "Didáctica",            text: "Formación en Ciencias de la Educación (UB) aplicada al diseño de recursos de aprendizaje claros, accesibles y pedagógicamente sólidos." },
  { icon: "🧠", title: "Psicología",           text: "Razonamiento diagnóstico, mitigación de sesgos cognitivos y psicología clínica aplicada a la formación de profesionales de la salud mental." },
];

export const CardGrid = ({ items = DEFAULT_POINTS, title, subtitle, cols = 4 }) => {
  const colsClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[cols] ?? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <section>
      {title && <h2 className="psi-title-main text-2xl mb-2">{title}</h2>}
      {subtitle && <p className="psi-excerpt mb-5">{subtitle}</p>}
      <div className={`grid ${colsClass} gap-4`}>
        {items.map((item) => (
          <FeatureCard key={item.title} icon={item.icon} title={item.title} text={item.text} variant="cardinal" />
        ))}
      </div>
    </section>
  );
};

CardGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    icon:  PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text:  PropTypes.string.isRequired,
  })),
  title:    PropTypes.node,
  subtitle: PropTypes.string,
  cols:     PropTypes.oneOf([2, 3, 4]),
};
