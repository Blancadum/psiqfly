'use client';
import React from 'react';

// Dracula palette: https://draculatheme.com/contribute
// Background #282a36 · Current Line #44475a · Comment #6272a4
// Cyan #8be9fd · Green #50fa7b · Orange #ffb86c
// Pink #ff79c6 · Purple #bd93f9 · Red #ff5555 · Yellow #f1fa8c · Foreground #f8f8f2

const items = [
  { label: 'TypeScript',               note: 'Siguiente paso desde JS · tipado estático' },
  { label: 'Spring Boot',              note: 'Framework Java estándar en empresa' },
  { label: 'Testing (Jest + Cypress)', note: 'Tests unitarios y e2e · muy valorado' },
  { label: 'GitHub Actions',           note: 'CI/CD automatizado con cada push' },
  { label: 'PostgreSQL',               note: 'SQL relacional más usado en producción' },
  { label: 'Python básico',            note: 'Automatización, datos e IA' },
  { label: 'LangChain / OpenAI API',   note: 'Construir apps con IA' },
  { label: 'Core Web Vitals',          note: 'SEO técnico de rendimiento web' },
  { label: 'Docker',                   note: 'Contenedores · despliegue portable' },
];

export const LearningNotepad = () => (
  <section>
    <h2 className="psi-section-title mb-6">
      Pendiente de <span className="psi-gradient-text">aprender</span>
    </h2>

    <div className="w-full flex flex-col shadow-2xl" style={{ fontFamily: "'Consolas', 'Menlo', 'Monaco', monospace", background: '#282a36' }}>

      {/* Barra de título — Dracula */}
      <div className="flex items-center gap-1.5 px-4 py-2 flex-shrink-0" style={{ background: '#21222c' }}>
        <span className="w-3 h-3 rounded-full" style={{ background: '#ff5555' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#f1fa8c' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#50fa7b' }} />
        <span className="mx-auto text-xs" style={{ color: '#6272a4' }}>to-learn.ts — Dracula</span>
      </div>

      {/* Barra de tabs */}
      <div className="flex items-end flex-shrink-0" style={{ background: '#21222c' }}>
        <div
          className="flex items-center gap-2 px-4 py-2 text-xs"
          style={{ background: '#282a36', color: '#f8f8f2', borderTop: '2px solid #bd93f9' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#bd93f9">
            <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.769.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 00.102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.653 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 00.313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 01-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z"/>
          </svg>
          <span>to-learn.ts</span>
          <span className="ml-1 cursor-pointer" style={{ color: '#6272a4' }}>×</span>
        </div>
      </div>

      {/* Editor */}
      <div className="flex flex-1 text-sm leading-6" style={{ background: '#282a36' }}>

        {/* Números de línea */}
        <div className="flex flex-col items-end px-3 py-4 select-none flex-shrink-0 text-right" style={{ background: '#282a36', color: '#6272a4', minWidth: '3rem' }}>
          {[1, 2, 3, ...items.map((_, i) => i + 4), items.length + 4, items.length + 5].map(n => (
            <span key={n} className="leading-6">{n}</span>
          ))}
        </div>

        {/* Código */}
        <div className="py-4 pr-6 overflow-x-auto flex-1">

          {/* Línea 1: comentario */}
          <div className="leading-6">
            <span style={{ color: '#7a8ab8' }}>{'// 📚 Roadmap de aprendizaje — Blanca'}</span>
          </div>

          {/* Línea 2: vacía */}
          <div className="leading-6">&nbsp;</div>

          {/* Línea 3: declaración */}
          <div className="leading-6">
            <span style={{ color: '#ff79c6' }}>const </span>
            <span style={{ color: '#f8f8f2' }}>roadmap</span>
            <span style={{ color: '#f8f8f2' }}> = [</span>
          </div>

          {/* Items */}
          {items.map((item) => (
            <div key={item.label} className="leading-6 flex flex-wrap">
              <span style={{ color: '#f8f8f2' }}>&nbsp;&nbsp;{'{ '}</span>
              <span style={{ color: '#8be9fd' }}>skill</span>
              <span style={{ color: '#f8f8f2' }}>: </span>
              <span style={{ color: '#f1fa8c' }}>"{item.label}"</span>
              <span style={{ color: '#f8f8f2' }}>, </span>
              <span style={{ color: '#8be9fd' }}>note</span>
              <span style={{ color: '#f8f8f2' }}>: </span>
              <span style={{ color: '#50fa7b' }}>"{item.note}"</span>
              <span style={{ color: '#f8f8f2' }}>{' },'}</span>
            </div>
          ))}

          {/* Cierre */}
          <div className="leading-6"><span style={{ color: '#f8f8f2' }}>]</span></div>

          {/* Cursor parpadeante */}
          <div className="leading-6 flex items-center">
            <span style={{ color: '#f8f8f2' }}>&nbsp;</span>
            <span
              className="inline-block w-[2px] h-[1.1em] align-middle ml-0.5"
              style={{ background: '#bd93f9', animation: 'draculaCursor 1.1s step-end infinite' }}
            />
          </div>

        </div>
      </div>

      {/* Status bar — Dracula purple */}
      <div className="flex items-center justify-between px-4 py-0.5 text-xs flex-shrink-0" style={{ background: '#bd93f9', color: '#282a36' }}>
        <div className="flex items-center gap-3 font-semibold">
          <span>⎇ main</span>
          <span>TypeScript</span>
        </div>
        <div className="flex items-center gap-3 font-semibold">
          <span>UTF-8</span>
          <span>Ln {items.length + 5}, Col 1</span>
        </div>
      </div>

    </div>

    <style>{`
      @keyframes draculaCursor {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
    `}</style>
  </section>
);
