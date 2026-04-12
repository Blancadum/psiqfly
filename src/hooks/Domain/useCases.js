import { useState, useEffect } from 'react';
import { getCasos } from '@/services/api';

export function useCases() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCasos()
      .then(res => setCases(res.data))
      .catch(() => setError('No se pudieron cargar los casos clínicos.'))
      .finally(() => setLoading(false));
  }, []);

  return { cases, loading, error };
}
