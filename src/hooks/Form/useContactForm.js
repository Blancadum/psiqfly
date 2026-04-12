"use client"; // <--- ESTA ES LA CLAVE PARA QUE NEXT.JS ACEPTE USESTATE

import { useState, useCallback } from 'react';
import { enviarContacto } from '@/services/api';

/**
 * useContactForm - Hook para gestionar la lógica de contacto.
 * @param {Object} initialState - Estructura inicial del formulario.
 */
export const useContactForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  // handleChange: Actualiza el estado de forma dinámica.
  // Usamos useCallback para que la función no se recree en cada render.
  const handleChange = useCallback((key, val) => {
    setForm((prev) => ({ ...prev, [key]: val }));
    if (error) setError(null); 
  }, [error]);

  const resetForm = useCallback(() => {
    setForm(initialState);
    setSent(false);
    setError(null);
  }, [initialState]);

  const handleSubmit = async (e) => {
    // Evitamos el comportamiento por defecto del formulario (recarga de página)
    if (e) e.preventDefault();
    
    setLoading(true);
    setError(null);

    try {
      await enviarContacto(form);
      setSent(true);
    } catch (err) {
      console.error('Error sending message:', err);
      setError('No se pudo enviar el mensaje. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    loading,
    sent,
    error,
    handleChange,
    handleSubmit,
    resetForm
  };
};