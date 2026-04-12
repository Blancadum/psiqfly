'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const GA_ID = 'G-KXD21555QS';
const KEY = 'psiqfly_cookie_consent';

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    if (!stored) setVisible(true);
    if (stored === 'rejected') {
      window[`ga-disable-${GA_ID}`] = true;
    }
  }, []);

  const accept = () => {
    localStorage.setItem(KEY, 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(KEY, 'rejected');
    window[`ga-disable-${GA_ID}`] = true;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-2xl bg-white border border-slate-200 shadow-xl rounded-xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-800 mb-0.5">Usamos cookies 🍪</p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Utilizamos cookies analíticas (Google Analytics) para mejorar el contenido. Puedes aceptarlas o rechazarlas. Consulta nuestra{' '}
            <Link href="/cookies" className="underline hover:text-indigo-600">política de cookies</Link>.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-xs font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Solo esenciales
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-xs font-black text-white rounded-lg transition-colors hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #634AE6, #E245B6)' }}
          >
            Aceptar todo
          </button>
        </div>

      </div>
    </div>
  );
};
