"use client"; // 1. Frontera de cliente obligatoria

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const TableOfContents = ({ sections }) => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Evitamos errores de hidratación (SSR mismatch)
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    
    // 2. Cálculo de scroll con Offset para que el Navbar no tape el título
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 60; // Ajusta según la altura de tu psi-nav-glass
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - 20; // 20px extra de cortesía

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isMounted) return null;

  return (
    <nav
      className="psi-toc-wrapper"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      aria-label="Tabla de contenidos"
    >
      {/* Botón trigger */}
      <div className="psi-toc-trigger-area">
        <button 
          type="button" 
          className="psi-toc-trigger" 
          aria-expanded={open}
        >
          <span className="psi-toc-trigger-icon">≡</span>
          <span>Índice</span>
        </button>
      </div>

      {/* Panel desplegable */}
      {open && (
        <div className="psi-toc-panel animate-fade-in">
          <p className="psi-toc-heading">Contenidos</p>
          <ul className="psi-toc-list">
            {sections.map(({ id, label }) => (
              <li key={id}>
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