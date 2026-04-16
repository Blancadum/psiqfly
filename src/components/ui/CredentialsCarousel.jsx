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
      
      <div className="relative w-full h-full overflow-hidden">
        {/* Aquí es correcto mantener el style, pero lo hacemos limpio */}
        <div className="flex h-full transition-transform duration-500 ease-in-out"
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
      
      {total > 1 && (
        <>
          <button onClick={prev} className="psi-slider-arrow left-1">‹</button>
          <button onClick={next} className="psi-slider-arrow right-1">›</button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <span key={i} className={`psi-slider-dot ${i === idx ? 'psi-slider-dot--active' : ''}`} />
            ))}
          </div>
        </>
      )}
      <span className="psi-slider-hint">🔍 Ampliar</span>
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
        <p className="psi-credentials-header-label">Formación académica</p>
        <h2 className="psi-title-main text-2xl">Mis <span className="psi-gradient-text">títulos</span></h2>
        <p className="psi-credentials-subtitle">Trayectoria profesional verificable en psicología y educación.</p>
      </div>

      <div className="relative flex items-center gap-2">
        <button type="button" onClick={prev} className="psi-credentials-arrow" aria-label="Anterior">←</button>

        <div className="psi-credentials-viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {/* Fíjate cómo pasamos la variable `--offset` desde React al CSS */}
          <div className="psi-credentials-track" style={{ '--offset': current }}>
            {EDUCATION_DATA.map((item, i) => (
              <div key={i} className="psi-credentials-slide">
                <div className={`psi-credentials-card ${i === current ? 'psi-credentials-card--active' : ''}`}>

                  <div className="flex justify-between items-center mb-3">
                    <span className="psi-credentials-card-year">{item.year}</span>
                    {item.note && <span className="psi-credentials-card-note">{item.note}</span>}
                  </div>

                  {(item.images || item.image) && (
                    <ImageSlider images={item.images ?? [item.image]} title={item.title} onOpen={setLightbox} />
                  )}

                  <div className="text-center">
                    <h3 className="psi-credentials-card-title">{item.title}</h3>
                    {item.institution && (
                      <p className="psi-credentials-card-institution">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 9l10 6 10-6-10-6zM2 15l10 6 10-6" />
                        </svg>
                        {item.institution}
                      </p>
                    )}
                  </div>

                  {!item.image && <div className="psi-credentials-seal">🎓</div>}

                </div>
              </div>
            ))}
          </div>
        </div>

        <button type="button" onClick={next} className="psi-credentials-arrow" aria-label="Siguiente">→</button>
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {EDUCATION_DATA.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`psi-credentials-dot ${i === current ? 'psi-credentials-dot--active' : ''}`}
            aria-label={`Ir a título ${i + 1}`}
          />
        ))}
        <span className="psi-credentials-counter">{current + 1} / {total}</span>
      </div>

      {lightbox && (
        <div className="psi-lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="relative max-w-3xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Certificado ampliado"
              width={900}
              height={650}
              className="object-contain w-full h-auto max-h-[85vh] rounded shadow-2xl"
            />
            <button onClick={() => setLightbox(null)} className="psi-lightbox-close">✕ Cerrar</button>
          </div>
        </div>
      )}

    </section>
  );
};