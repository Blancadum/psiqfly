"use client";

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const TableOfContents = ({ sections }) => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - 80, behavior: 'smooth' });
    }
  };

  if (!isMounted) return null;

  // MÓVIL: índice inline al principio del artículo
  if (isMobile) {
    return (
      <div className="psi-toc-mobile">
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          className="psi-toc-mobile-trigger"
          aria-expanded={open}
        >
          <span className="flex items-center gap-2">
            <span className="text-base">≡</span> Índice del artículo
          </span>
          <span className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▾</span>
        </button>

        {open && (
          <ul className="psi-toc-mobile-list">
            {sections.map(({ id, label, level = 2 }) => (
              <li key={id} style={{ paddingLeft: `${(level - 2) * 12}px` }}>
                <button
                  type="button"
                  className="psi-toc-link w-full text-left text-sm"
                  onClick={() => handleClick(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  // DESKTOP: floating fixed (comportamiento original con click)
  return (
    <nav
      className="psi-toc-wrapper"
      aria-label="Tabla de contenidos"
    >
      <div className="psi-toc-trigger-area">
        <button
          type="button"
          className="psi-toc-trigger"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span className="psi-toc-trigger-icon">≡</span>
          <span>Índice</span>
        </button>
      </div>

      {open && (
        <div className="psi-toc-panel animate-fade-in">
          <p className="psi-toc-heading">Contenidos</p>
          <ul className="psi-toc-list">
            {sections.map(({ id, label, level = 2 }) => (
              <li key={id} style={{ paddingLeft: `${(level - 2) * 12}px` }}>
                <button
                  type="button"
                  className="psi-toc-link"
                  onClick={() => handleClick(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

TableOfContents.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
