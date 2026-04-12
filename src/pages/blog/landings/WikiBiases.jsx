'use client';
import { useState } from 'react';

const sesgosData = [
  { name: 'Sesgo de confirmación', description: 'Favorecer información que confirma creencias previas.', tags: ['Heurístico', 'Hipótesis'] },
  { name: 'Anclaje', description: 'La primera impresión condiciona juicios posteriores.', tags: ['Estimación', 'Heurístico'] },
  // ... añade el resto de sesgos aquí
];

export const WikiBiases = () => {
  const [busqueda, setBusqueda] = useState('');

  const filtrados = sesgosData.filter(s =>
    s.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
      <section className="psi-card-hover p-6">
        <h1 className="text-xl font-semibold text-[#634AE6]">Wiki de sesgos cognitivos</h1>
        <input
          type="text"
          placeholder="Buscar sesgo..."
          className="mt-4 w-full rounded-xl border border-slate-200 dark:border-slate-700 p-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:ring-2 focus:ring-[#634AE6] outline-none text-sm"
          onChange={e => setBusqueda(e.target.value)}
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtrados.map(s => (
          <div key={s.name} className="psi-card-hover p-4 flex flex-col">
            <h3 className="font-bold text-slate-800 dark:text-white">{s.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 flex-1">{s.description}</p>
            <button className="psi-btn-secondary mt-4 text-sm w-full">Abrir</button>
          </div>
        ))}
      </section>
    </div>
  );
};
