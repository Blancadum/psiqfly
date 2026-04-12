"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { EDUCATION_DATA } from '@/Data/Cv/Education';

// Mini carrusel de imágenes dentro de una card
const ImageSlider = ({ images, title, onOpen }) => {
  const [idx, setIdx] = useState(0);
  const touchRef = useRef(null);
  const total = images.length;

  const prev = (e) => { e.stopPropagation(); setIdx(i => (i - 1 + total) % total); };
  const next = (e) => { e.stopPropagation(); setIdx(i => (i + 1) % total); };
  const onTouchStart = (e) => { touchRef.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchRef.current === null) return;
    const dx = e.changedTouches[0].clientX - touchRef.current;
    if (dx < -40) setIdx(i => (i + 1) % total);
    else if (dx > 40) setIdx(i => (i - 1 + total) % total);
    touchRef.current = null;
  };

  return (
    <div className="relative w-full h-64 mb-4 bg-slate-50 group"
      onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {/* Imágenes */}
      <div className="relative w-full h-full overflow-hidden">
        <div className="flex h-full transition-transform duration-400 ease-in-out"
          style={{ transform: `translateX(-${idx * 100}%)` }}>
          {images.map((src, i) => (
            <div key={i} className="w-full flex-shrink-0 h-full relative cursor-zoom-in"
              onClick={() => onOpen(src)}>
              <Image src={src} alt={`${title} — ${i + 1}`} fill
                className="object-contain p-2" sizes="600px" />
            </div>
          ))}
        </div>
      </div>
      {/* Flechas (solo si hay más de 1) */}
      {total > 1 && (
        <>
          <button onClick={prev}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-slate-200 rounded w-7 h-7 flex items-center justify-center text-sm shadow transition">‹</button>
          <button onClick={next}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-slate-200 rounded w-7 h-7 flex items-center justify-center text-sm shadow transition">›</button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <span key={i} className={`block w-1.5 h-1.5 rounded-full transition-all ${i === idx ? 'bg-indigo-500 w-3' : 'bg-slate-300'}`} />
            ))}
          </div>
        </>
      )}
      {/* Hint ampliar */}
      <span className="absolute bottom-2 right-2 bg-black/40 text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        🔍 Ampliar
      </span>
    </div>
  );
};

export const CredentialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const touchStartX = useRef(null);
  const total = EDUCATION_DATA.length;

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Swipe táctil
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -40) next();
    else if (dx > 40) prev();
    touchStartX.current = null;
  };

  if (!isMounted) return null;

  return (
    <section className="psi-credentials-section py-10">

      <div className="psi-credentials-header-intro mb-8">
        <p className="text-base font-black text-indigo-500 uppercase tracking-widest mb-1">
          Formación académica
        </p>
        <h2 className="psi-title-main text-2xl">
          Mis <span className="psi-gradient-text">títulos</span>
        </h2>
        <p className="text-base text-slate-500 mt-2 italic">
          Trayectoria profesional verificable en psicología y educación.
        </p>
      </div>

      {/* Carrusel con flechas a los lados */}
      <div className="relative flex items-center gap-2">

        {/* Flecha izquierda */}
        <button
          type="button"
          onClick={prev}
          className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white border border-slate-200 shadow hover:bg-indigo-50 hover:border-indigo-300 transition-colors rounded"
          aria-label="Anterior"
        >
          ←
        </button>

        {/* Viewport */}
        <div
          className="overflow-hidden flex-1"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * 100%))` }}
          >
            {EDUCATION_DATA.map((item, i) => (
              <div key={i} className="w-full flex-shrink-0 px-2">
                <div className={`bg-white border border-slate-200 rounded p-5 transition-all duration-300 ${i === current ? 'shadow-md' : 'opacity-40 scale-95'}`}>

                  {/* Cabecera */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-black text-indigo-500 text-base">{item.year}</span>
                    {item.note && (
                      <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded text-[10px] font-bold">
                        {item.note}
                      </span>
                    )}
                  </div>

                  {/* Imagen(es) */}
                  {(item.images || item.image) && (
                    <ImageSlider
                      images={item.images ?? [item.image]}
                      title={item.title}
                      onOpen={setLightbox}
                    />
                  )}

                  {/* Texto */}
                  <div className="text-center">
                    <h3 className="text-xl font-extrabold text-slate-800 leading-tight mb-2">
                      {item.title}
                    </h3>
                    {item.institution && (
                      <p className="flex items-center justify-center gap-1.5 text-sm font-semibold text-indigo-600 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 9l10 6 10-6-10-6zM2 15l10 6 10-6" />
                        </svg>
                        {item.institution}
                      </p>
                    )}
                  </div>

                  {!item.image && (
                    <div className="text-4xl mt-6 opacity-20 text-center">🎓</div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flecha derecha */}
        <button
          type="button"
          onClick={next}
          className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white border border-slate-200 shadow hover:bg-indigo-50 hover:border-indigo-300 transition-colors rounded"
          aria-label="Siguiente"
        >
          →
        </button>

      </div>

      {/* Dots + contador */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {EDUCATION_DATA.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-6 bg-indigo-500' : 'w-2 bg-indigo-200'
            }`}
            aria-label={`Ir a título ${i + 1}`}
          />
        ))}
        <span className="ml-3 text-xs text-slate-400 font-mono">{current + 1} / {total}</span>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-3xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Certificado ampliado"
              width={900}
              height={650}
              className="object-contain w-full h-auto max-h-[85vh] rounded shadow-2xl"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-2 right-2 bg-black/60 text-white rounded px-3 py-1 text-sm hover:bg-black/80 transition"
            >
              ✕ Cerrar
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
