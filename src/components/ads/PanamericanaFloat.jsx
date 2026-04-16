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
    <div className="psi-float-wrapper">

      {/* Confirmación */}
      {state === 'confirm' && (
        <div className="psi-float-confirm">
          <p className="psi-float-confirm-text">¿Ocultar para esta sesión?</p>
          <div className="psi-float-confirm-actions">
            <button onClick={handleDismiss} className="psi-float-confirm-yes">Sí</button>
            <button onClick={() => setState('visible')} className="psi-float-confirm-no">No</button>
          </div>
        </div>
      )}

      {/* Botón cerrar */}
      <button onClick={() => setState('confirm')} className="psi-float-dismiss-btn" aria-label="Cerrar">
        ✕
      </button>

      {/* Banner */}
      <Link
        href={URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        aria-label="10% de descuento en Editorial Médica Panamericana"
        className="psi-float-banner-link"
      >
        <div className="psi-float-banner-card">
          <div className="psi-float-banner-front">
            <Image src={banner} alt="10% descuento Panamericana" fill className="object-cover" />
          </div>
          <div className="psi-float-banner-back">
            <Image src={logoCopy} alt="Editorial Médica Panamericana" fill className="object-contain p-2" />
          </div>
        </div>
      </Link>
    </div>
  );
};
