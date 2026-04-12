'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import banner from '@/assets/images/affiliates/panamericana-descuento.jpg';
import logoCopy from '@/assets/images/affiliates/image copy.png';

const URL = 'https://www.medicapanamericana.com/es/?ref=psiqfly';
const SESSION_KEY = 'panamericana_float_dismissed';

export const PanamericanaFloat = () => {
  const [state, setState] = useState('visible'); // 'visible' | 'confirm' | 'closed'

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      setState('closed');
    }
  }, []);

  if (state === 'closed') return null;

  const handleDismiss = () => {
    sessionStorage.setItem(SESSION_KEY, 'true');
    setState('closed');
  };

  return (
    <div className="fixed bottom-5 right-5 sm:top-28 sm:bottom-auto z-50 flex flex-col items-end gap-1">

      {/* Confirmación */}
      {state === 'confirm' && (
        <div className="mb-1 bg-white rounded-xl shadow-lg border border-slate-100 px-3 py-2.5 text-xs w-44">
          <p className="font-semibold text-slate-700 mb-2">¿Ocultar para esta sesión?</p>
          <div className="flex gap-2">
            <button
              onClick={handleDismiss}
              className="flex-1 bg-indigo-600 text-white rounded-lg py-1 font-bold hover:bg-indigo-700 transition-colors"
            >
              Sí
            </button>
            <button
              onClick={() => setState('visible')}
              className="flex-1 bg-slate-100 text-slate-600 rounded-lg py-1 font-bold hover:bg-slate-200 transition-colors"
            >
              No
            </button>
          </div>
        </div>
      )}

      {/* Botón cerrar */}
      <button
        onClick={() => setState('confirm')}
        className="self-end w-5 h-5 rounded-full bg-slate-600/70 hover:bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center transition-colors"
        aria-label="Cerrar"
      >
        ✕
      </button>

      {/* Banner */}
      <Link
        href={URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        aria-label="10% de descuento en Editorial Médica Panamericana"
        className="block w-32 shadow-2xl [perspective:600px] group"
      >
        <div
          className="relative w-full [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]"
          style={{ aspectRatio: '1/1' }}
        >
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <Image src={banner} alt="10% descuento Panamericana" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white flex items-center justify-center p-2">
            <Image src={logoCopy} alt="Editorial Médica Panamericana" fill className="object-contain p-2" />
          </div>
        </div>
      </Link>
    </div>
  );
};
