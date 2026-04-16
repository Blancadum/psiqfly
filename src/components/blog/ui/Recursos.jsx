'use client';
import React, { useState } from 'react';

const YOUTUBE_URL = 'https://www.youtube.com/embed/0BskVJwwbls';
const PDF_URL = 'https://docs.google.com/document/d/1-lyUzaBRDTg7IwyQ_tc6_D-2N1FYHdHRouASPgZ8p2o/preview';
const ISEP_URL = 'https://www.isep.es/tesina/psiqfly-recurso-didactico-pwa-razonamiento-diagnostico-mitigacion-sesgos-autocuidado-psicologos-noveles/';

const getYouTubeId = (url) => {
  const match = url.match(/(?:embed\/|v=|youtu\.be\/)([^&?/]+)/);
  return match ? match[1] : null;
};

export const Recursos = () => {
  const [pdfError, setPdfError] = useState(false);
  const [pdfExpanded, setPdfExpanded] = useState(false);
  const youtubeId = getYouTubeId(YOUTUBE_URL);

  return (
    <section className="psi-recursos">

      {/* Header */}
      <div className="psi-recursos-header">
        <span className="psi-tag-category mb-4">Recursos</span>
        <h2 className="psi-recursos-title">
          Presentación y <span className="psi-gradient-text">documentación</span>
        </h2>
        <p className="psi-recursos-subtitle">
          Vídeo de presentación del proyecto y memoria académica completa.
        </p>
      </div>

      {/* Publicación ISEP */}
      <a href={ISEP_URL} target="_blank" rel="noopener noreferrer" className="psi-recursos-isep-card group">
        <div className="text-4xl flex-shrink-0">🏛️</div>
        <div className="flex-1 min-w-0">
          <p className="psi-recursos-isep-label">Publicación oficial · ISEP</p>
          <h3 className="psi-recursos-isep-title">
            PsiQFly®: recurso didáctico PWA para razonamiento diagnóstico, mitigación de sesgos y autocuidado en psicólogos noveles
          </h3>
          <p className="psi-recursos-media-meta">Blanca De Uña Martín — Trabajo de Fin de Máster, ISEP 2026</p>
        </div>
        <span className="psi-recursos-isep-arrow">→</span>
      </a>

      {/* VIDEO */}
      <div className="max-w-2xl mx-auto">
        <div className="psi-recursos-media-card">
          <div className="psi-recursos-media-header">
            <span className="text-xl">🎬</span>
            <div>
              <h3 className="psi-recursos-media-title">Vídeo de presentación</h3>
              <p className="psi-recursos-media-meta">Presentación del TFM PsiQFly</p>
            </div>
            {youtubeId && (
              <a
                href={`https://www.youtube.com/watch?v=${youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="psi-recursos-yt-link"
              >
                Ver en YouTube →
              </a>
            )}
          </div>

          {youtubeId ? (
            <div className="psi-video-ratio">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                title="Presentación PsiQFly"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="psi-recursos-empty">
              <span className="text-6xl mb-4">📹</span>
              <p className="psi-recursos-empty-title">Vídeo próximamente</p>
              <p className="psi-recursos-empty-desc">El vídeo de presentación estará disponible en breve.</p>
            </div>
          )}
        </div>
      </div>

      {/* PDF READER */}
      <div className="psi-recursos-media-card">
        <div className="psi-recursos-pdf-toolbar">
          <div className="flex items-center gap-3">
            <span className="text-xl">📄</span>
            <div>
              <h3 className="psi-recursos-media-title">Memoria del TFM</h3>
              <p className="psi-recursos-media-meta">Blanca De Uña Martín — ISEP, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setPdfExpanded(!pdfExpanded)} className="psi-btn-secondary text-xs">
              {pdfExpanded ? 'Vista compacta ↑' : 'Expandir lector ↓'}
            </button>
            <a href={PDF_URL} target="_blank" rel="noopener noreferrer" className="psi-btn-primary text-xs">
              Abrir en nueva pestaña →
            </a>
          </div>
        </div>

        {PDF_URL && !pdfError ? (
          <iframe
            src={PDF_URL}
            className={`w-full block transition-all duration-500 ${pdfExpanded ? 'psi-pdf-reader--expanded' : 'psi-pdf-reader'}`}
            title="TFM PsiQFly — Memoria académica"
            onError={() => setPdfError(true)}
          />
        ) : (
          <div className="psi-recursos-empty">
            {pdfError ? (
              <>
                <span className="text-6xl mb-4">📂</span>
                <p className="psi-recursos-empty-title mb-3">Tu navegador no puede mostrar el documento</p>
                <a href={PDF_URL} target="_blank" rel="noopener noreferrer" className="psi-btn-primary text-sm">
                  Abrirlo en nueva pestaña →
                </a>
              </>
            ) : (
              <>
                <span className="text-6xl mb-4">📑</span>
                <p className="psi-recursos-empty-title">Documento próximamente</p>
                <p className="psi-recursos-empty-desc">La memoria completa del TFM estará disponible en breve.</p>
              </>
            )}
          </div>
        )}
      </div>

    </section>
  );
};
