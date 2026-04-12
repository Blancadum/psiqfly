"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { EDUCATION_DATA } from '@/Data/Cv/Education';

export const CredentialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // 2. Protección de Hidratación
  
  const total = EDUCATION_DATA.length;

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Si no está montado en el cliente, no renderizamos para evitar parpadeos
  if (!isMounted) return null;

  return (
    <section className="psi-credentials-section py-10">

      <div className="psi-credentials-header-intro">
        <p className="psi-credentials-header-label">Formación académica</p>
        <h2 className="psi-title-main text-2xl">
          Mis <span className="psi-gradient-text">títulos</span>
        </h2>
        <p className="psi-excerpt text-sm mt-2 italic">
          Trayectoria profesional verificable en psicología y educación.
        </p>
      </div>

      {/* Carrusel */}
      <div className="psi-credentials-viewport relative overflow-hidden">
        <div
          className="psi-credentials-track flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(calc(-${current} * 100%))`,
            // Opcional: si prefieres mantener tu variable CSS personalizada
            '--offset': current 
          }}
        >
          {EDUCATION_DATA.map((item, i) => (
            <div key={i} className="psi-credentials-slide w-full flex-shrink-0 px-4">
              <div className={`psi-credentials-card ${i === current ? 'psi-credentials-card--active' : 'opacity-40 scale-95'}`}>

                {/* Cabecera estilo diploma */}
                <div className="psi-credentials-card-header flex justify-between items-center mb-4">
                  <span className="psi-credentials-year font-black text-indigo-500">{item.year}</span>
                  {item.note && (
                    <span className="psi-credentials-badge bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-[10px] font-bold">
                      {item.note}
                    </span>
                  )}
                </div>

                {/* Imagen del certificado */}
                {item.image && (
                  <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-slate-50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                )}

                {/* Contenido */}
                <div className="psi-credentials-card-body text-center">
                  <p className="psi-credentials-institution uppercase tracking-widest text-[11px] text-slate-400 mb-2">
                    {item.institution}
                  </p>
                  <h3 className="psi-credentials-title text-xl font-extrabold text-slate-800 leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Sello decorativo (solo si no hay imagen) */}
                {!item.image && (
                  <div className="psi-credentials-seal text-4xl mt-6 opacity-20">🎓</div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className="psi-credentials-controls flex items-center justify-center gap-6 mt-8">
        <button
          type="button"
          onClick={prev}
          className="psi-credentials-btn w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-indigo-50 transition-colors"
          aria-label="Anterior"
        >
          ←
        </button>

        <div className="psi-credentials-dots flex gap-2">
          {EDUCATION_DATA.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`psi-credentials-dot w-2 h-2 rounded-full transition-all ${
                i === current ? 'psi-credentials-dot--active w-6 bg-indigo-500' : 'bg-indigo-200'
              }`}
              aria-label={`Ir a título ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="psi-credentials-btn w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-indigo-50 transition-colors"
          aria-label="Siguiente"
        >
          →
        </button>
      </div>

      <p className="psi-credentials-counter text-center text-xs text-slate-400 mt-4 font-mono">
        {current + 1} / {total}
      </p>

    </section>
  );
};