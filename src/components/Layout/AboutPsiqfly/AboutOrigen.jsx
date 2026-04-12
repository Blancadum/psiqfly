import React from 'react';

export const AboutOrigen = () => {
  const hitos = [
    { 
      icon: '🎓', 
      label: 'Trabajo de Fin de Máster', 
      desc: 'Desarrollado en ISEP (2026) bajo el programa de Psicología Clínica.' 
    },
    { 
      icon: '🧪', 
      label: 'Enfoque basado en evidencia', 
      desc: 'Fundamentado en literatura sobre razonamiento clínico y mitigación de sesgos.' 
    },
    { 
      icon: '🛠️', 
      label: 'PWA Funcional', 
      desc: 'Herramienta tecnológica accesible diseñada para el entorno docente.' 
    }
  ];

  return (
    <section className="psi-about-origen-grid">
      {/* Columna Izquierda: Texto */}
      <div className="psi-origen-content">
        <h2>
          El <span className="psi-gradient-text">origen</span> del proyecto
        </h2>
        <p className="psi-origen-text">
          PsiQFly nace de la necesidad de cerrar la brecha entre la teoría académica y la práctica clínica real. Es una propuesta de <strong>Blanca De Uña Martín</strong> para transformar la formación de psicólogos noveles.
        </p>
        <p className="psi-origen-text">
          El proyecto se centra en cómo la simulación clínica puede reducir la carga cognitiva y mejorar la toma de decisiones diagnósticas, permitiendo un aprendizaje seguro y supervisado.
        </p>
      </div>

      {/* Columna Derecha: Tarjeta de Hitos */}
      <div className="psi-origen-card-list">
        {hitos.map((hito) => (
          <div key={hito.label} className="psi-origen-item">
            <span className="psi-origen-item-icon">{hito.icon}</span>
            <div>
              <p className="psi-origen-item-title">{hito.label}</p>
              <p className="psi-origen-item-desc">{hito.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};