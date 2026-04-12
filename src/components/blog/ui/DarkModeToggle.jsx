"use client";
import { useState, useEffect } from 'react';

export const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`psi-toggle-track w-10 h-6 rounded-full flex items-center px-0.5 flex-shrink-0 ${dark ? 'psi-toggle-track--dark' : ''}`}
      title={dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <span
        className={`psi-toggle-thumb w-5 h-5 rounded-full bg-white shadow flex items-center justify-center text-xs ${dark ? 'psi-toggle-thumb--dark' : ''}`}
      >
        {dark ? '🌙' : '☀️'}
      </span>
    </button>
  );
};
