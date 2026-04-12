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
    <section className="max-w-6xl mx-auto px-8 py-12 space-y-10">

      {/* Header */}
      <div className="text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
          Recursos
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Presentación y <span className="psi-gradient-text">documentación</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-base">
          Vídeo de presentación del proyecto y memoria académica completa.
        </p>
      </div>

      {/* Publicación ISEP */}
      <a
        href={ISEP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-5 bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 rounded-2xl shadow-sm p-6 hover:border-[#634AE6] transition-all duration-200 group"
      >
        <div className="text-4xl flex-shrink-0">🏛️</div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-1">Publicación oficial · ISEP</p>
          <h3 className="font-extrabold text-slate-900 dark:text-white text-sm leading-snug mb-1">
            PsiQFly®: recurso didáctico PWA para razonamiento diagnóstico, mitigación de sesgos y autocuidado en psicólogos noveles
          </h3>
          <p className="text-xs text-slate-400">Blanca De Uña Martín — Trabajo de Fin de Máster, ISEP 2026</p>
        </div>
        <span className="text-[#634AE6] font-bold text-sm flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
      </a>

      {/* VIDEO — centrado, no full-width */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 rounded-3xl shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center gap-3">
            <span className="text-xl">🎬</span>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Vídeo de presentación</h3>
              <p className="text-xs text-slate-400">Presentación del TFM PsiQFly</p>
            </div>
            {youtubeId && (
              <a
                href={`https://www.youtube.com/watch?v=${youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs text-[#634AE6] hover:underline font-medium"
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
            <div className="flex flex-col items-center justify-center py-16 px-8 text-center bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-700 dark:to-slate-800">
              <span className="text-6xl mb-4">📹</span>
              <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Vídeo próximamente</p>
              <p className="text-sm text-slate-400">El vídeo de presentación estará disponible en breve.</p>
            </div>
          )}
        </div>
      </div>

      {/* PDF READER — ancho completo, alto generoso */}
      <div className="bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 rounded-3xl shadow-sm overflow-hidden">

        {/* Barra superior estilo lector */}
        <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xl">📄</span>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Memoria del TFM</h3>
              <p className="text-xs text-slate-400">Blanca De Uña Martín — ISEP, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPdfExpanded(!pdfExpanded)}
              className="psi-btn-secondary text-xs"
            >
              {pdfExpanded ? 'Vista compacta ↑' : 'Expandir lector ↓'}
            </button>
            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="psi-btn-primary text-xs"
            >
              Abrir en nueva pestaña →
            </a>
          </div>
        </div>

        {/* Visor PDF */}
        {PDF_URL && !pdfError ? (
          <iframe
            src={PDF_URL}
            className={`w-full block transition-all duration-500 ${pdfExpanded ? 'psi-pdf-reader--expanded' : 'psi-pdf-reader'}`}
            title="TFM PsiQFly — Memoria académica"
            onError={() => setPdfError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-8 text-center bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-700 dark:to-slate-800">
            {pdfError ? (
              <>
                <span className="text-6xl mb-4">📂</span>
                <p className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Tu navegador no puede mostrar el documento</p>
                <a href={PDF_URL} target="_blank" rel="noopener noreferrer" className="psi-btn-primary text-sm">
                  Abrirlo en nueva pestaña →
                </a>
              </>
            ) : (
              <>
                <span className="text-6xl mb-4">📑</span>
                <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1">Documento próximamente</p>
                <p className="text-sm text-slate-400">La memoria completa del TFM estará disponible en breve.</p>
              </>
            )}
          </div>
        )}
      </div>

    </section>
  );
};
