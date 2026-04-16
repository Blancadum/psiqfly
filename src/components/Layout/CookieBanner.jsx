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
    <div className="psi-cookie-wrapper">
      <div className="psi-cookie-card">

        <div className="flex-1 min-w-0">
          <p className="psi-cookie-text-title">Usamos cookies 🍪</p>
          <p className="psi-cookie-text-body">
            Utilizamos cookies analíticas (Google Analytics) para mejorar el contenido. Puedes aceptarlas o rechazarlas. Consulta nuestra{' '}
            <Link href="/cookies" className="underline hover:text-indigo-600">política de cookies</Link>.
          </p>
        </div>

        <div className="psi-cookie-actions">
          <button onClick={reject} className="psi-cookie-reject">Solo esenciales</button>
          <button onClick={accept} className="psi-cookie-accept">Aceptar todo</button>
        </div>

      </div>
    </div>
  );
};
