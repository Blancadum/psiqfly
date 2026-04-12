'use client';
import { useState, useCallback } from 'react';

const INITIAL = { nombre: '', email: '', consent: false };

export const useNewsletterForm = () => {
  const [form, setForm] = useState(INITIAL);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = useCallback((key, val) => {
    setForm(prev => ({ ...prev, [key]: val }));
    if (error) setError(null);
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre: form.nombre, email: form.email }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError('No se pudo completar la suscripción. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, sent, error, handleChange, handleSubmit };
};
