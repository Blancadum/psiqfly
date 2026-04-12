import React from 'react';
import PropTypes from 'prop-types';

// Pieza pequeña: Bloque de texto con estilo
const InfoBlock = ({ children, isGradient = false }) => (
  <section className={`psi-block-info ${isGradient ? 'psi-block-info--gradient' : ''}`}>
    {children}
  </section>
);

InfoBlock.propTypes = {
  children: PropTypes.node.isRequired,
  isGradient: PropTypes.bool,
};

export const AuthorBio = () => {
  return (
    <div className="space-y-12">

      {/* 1. Apps con alma (Historia y trayectoria) */}
      <InfoBlock>
        <h2 className="psi-section-title">
          Apps con <span className="psi-gradient-text">Alma</span>
        </h2>
        <div className="psi-body-text">
          <p>
            Soy la creadora de <span className="psi-text-emphasis">PsiQFly®</span>, una aplicación diseñada para acompañar a psicólogas y psicólogos noveles desde la universidad hasta la práctica profesional. Entrena las competencias clínicas y el razonamiento diagnóstico a través del autoconocimiento y el metapensamiento.
          </p>
          <p>
            Mi trayectoria combina <span className="psi-text-emphasis">Educación (UB)</span> y <span className="psi-text-emphasis">Psicología (UOC)</span>, con especializaciones en <strong>Psicología Infantojuvenil y Clínica (ISEP)</strong>. La curiosidad me llevó a un <strong>Máster en SEO (Bigschool) y a la programación fullstack en Ironhack</strong>. Actualmente amplío mi formación técnica en <span className="psi-text-emphasis">Desarrollo de Aplicaciones Web (DAW)</span> en el IOC.
          </p>
          <p>
            A nivel personal, me muevo bien en equipo y me encanta impulsar <strong>ideas nuevas</strong>. La disciplina es fundamental, pero también lo es respirar y disfrutar el proceso. No existen los errores malos: solo gemas escondidas esperando ser descubiertas.
          </p>
        </div>
      </InfoBlock>

      {/* 2. El Superpoder (Perfil híbrido) */}
      <InfoBlock isGradient>
        <p className="psi-highlight-text">
          <span className="psi-gradient-text font-black text-base">El Superpoder.</span>{' '}
          En el desarrollo de aplicaciones web, mi formación en Psicología y SEO es mi brújula.
          Todo contribuye a estructurar problemas con lógica, organizar la información con claridad,
          pensar en las personas usuarias y construir soluciones digitales que sean técnicamente
          sólidas, pero también útiles, comprensibles y accesibles.
        </p>
      </InfoBlock>
    </div>
  );
};
