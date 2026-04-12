import { useCases } from '@/hooks/Domain/useCases';

export const Cases = () => {
  const { cases, loading, error } = useCases();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Cargando casos clínicos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8">
        Casos <span className="psi-gradient-text">Clínicos</span>
      </h1>

      {cases.length === 0 ? (
        <p className="text-slate-500">No hay casos disponibles todavía.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map(caso => (
            <div key={caso.id} className="psi-action-card">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{caso.titulo}</h2>
              <p className="text-sm text-slate-500">{caso.descripcion}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
