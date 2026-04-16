import React from 'react';

const ACCESS_STYLES = {
  libre:        'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  restringido:  'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  comercial:    'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
};

export function AssessmentScales({ scales }) {
  if (!scales?.length) return null;

  return (
    <section className="psi-scales-section">
      <h2 className="psi-article-h2 mt-10 mb-1">Instrumentos de Evaluación Clínica</h2>
      <p className="psi-scales-subtitle">
        Escalas y cuestionarios validados recomendados por las principales organizaciones de salud mental (APA, OMS, NICE).
      </p>

      <div className="psi-scales-grid">
        {scales.map((scale, i) => (
          <div key={i} className="psi-scale-card">
            <div className="psi-scale-header">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="psi-scale-name">{scale.name}</span>
                  {scale.recommended && (
                    <span className="psi-scale-badge-primary">Primera línea</span>
                  )}
                </div>
                <span className={`psi-scale-access ${ACCESS_STYLES[scale.access?.toLowerCase()] ?? ACCESS_STYLES.restringido}`}>
                  {scale.access}
                </span>
              </div>
              <p className="psi-scale-fullname">{scale.fullName}</p>
            </div>

            <p className="psi-scale-purpose">{scale.purpose}</p>

            <div className="psi-scale-meta">
              {scale.items && (
                <div className="psi-scale-meta-item">
                  <span className="psi-scale-meta-label">Ítems</span>
                  <span className="psi-scale-meta-value">{scale.items}</span>
                </div>
              )}
              {scale.time && (
                <div className="psi-scale-meta-item">
                  <span className="psi-scale-meta-label">Duración</span>
                  <span className="psi-scale-meta-value">{scale.time}</span>
                </div>
              )}
              {scale.cutoff && (
                <div className="psi-scale-meta-item psi-scale-meta-item--wide">
                  <span className="psi-scale-meta-label">Punto de corte</span>
                  <span className="psi-scale-meta-value">{scale.cutoff}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
