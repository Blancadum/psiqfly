"use client"; // 1. Indispensable para usar eventos de ventana y hooks

import { useState, useEffect } from 'react'; // 2. Importación correcta

/**
 * Hook para detectar si el usuario ha hecho scroll más allá de un umbral.
 */
export const useScroll = (threshold = 80) => {
  // 3. ¡Faltaba declarar el useState en el import!
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // 4. Verificación de seguridad para SSR (Server Side Rendering)
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      // Optimizamos la lógica: solo cambia el estado si es necesario
      const isScrolled = window.scrollY > threshold;
      setScrolled(isScrolled);
    };

    // Suscribimos el evento
    window.addEventListener('scroll', handleScroll);

    // Ejecutamos una vez al inicio por si la página ya carga con scroll
    handleScroll();

    // Limpieza (como el .close() de un Socket)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};