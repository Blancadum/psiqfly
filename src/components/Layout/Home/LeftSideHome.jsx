import React from "react";

export const LeftSideHome = () => {
  return (
    <div className="lg:col-span-7">
      <div className="space-y-6">

        {/* Novedad */}
        <div className="psi-badge-novelty">
          <span className="psi-ping-dot">
            <span className="psi-ping-dot-outer"></span>
            <span className="psi-ping-dot-inner"></span>
          </span>
          {" Nueva • Itinerarios guiados"}
        </div>

        {/* H1 */}
        <h1 className="psi-title-main text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1]">
          Entrena tu <span className="psi-gradient-text">razonamiento diagnóstico</span>.
        </h1>

        <p className="psi-lead-text">
          Mejora la precisión clínica con un entorno de práctica diseñado para la excelencia.
        </p>

        {/* Badges de confianza */}
        <div className="psi-trust-badges">
          <span>🛡️ Datos seguros</span>
          <span>🎓 Enfoque docente</span>
          <span>👥 Tutores y alumnos</span>
        </div>

        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          Diseñado para profesionales en formación
        </p>

        {/* Botones */}
        <div className="psi-btn-group" style={{ display: 'none' }}>
          <button className="psi-btn-primary psi-btn-compact">Soy alumno ›</button>
          <button className="psi-btn-secondary psi-btn-compact">Soy tutor ›</button>
        </div>

      </div>
    </div>
  );
};
