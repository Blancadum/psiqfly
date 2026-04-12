import React from 'react';

const alumno = {
  nombre: "Lucía",
  nivel: 5,
  xp: 1250,
  xpSiguienteNivel: 2000,
};

const estadisticas = [
  { label: "Casos Completados", valor: "12 / 20", icon: "✅" },
  { label: "Sesgos Detectados", valor: "85%", icon: "🧠" },
  { label: "Tiempo de Diagnóstico", valor: "14 min", icon: "⏱️" },
  { label: "Puntos de Empatía", valor: "+350", icon: "❤️" },
];

export const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">

      <header className="border-b border-slate-100 pb-6 dark:border-slate-800">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          ¡Bienvenida de nuevo, <span className="text-indigo-600 dark:text-indigo-400">{alumno.nombre}</span>!
        </h1>
        <p className="text-slate-500 mt-2 dark:text-slate-400">
          Tu progreso clínico hoy: Nivel {alumno.nivel} ({alumno.xp} XP)
        </p>
      </header>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {estadisticas.map((stat) => (
          <div key={stat.label} className="psi-card p-6 flex items-center gap-4">
            <div className="text-4xl">{stat.icon}</div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.valor}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Siguientes Casos Clínicos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="psi-card">
            <h3 className="font-bold">Caso #21: Ansiedad Generalizada</h3>
            <p className="text-sm text-slate-600 mt-1 dark:text-slate-400">Paciente: M.G., 34 años.</p>
            <button className="psi-btn-primary mt-4 w-full">Comenzar entrenamiento</button>
          </div>
          <div className="psi-card">
            <h3 className="font-bold">Caso #22: Depresión Mayor</h3>
            <p className="text-sm text-slate-600 mt-1 dark:text-slate-400">Paciente: R.F., 28 años.</p>
            <button className="psi-btn-primary mt-4 w-full">Comenzar entrenamiento</button>
          </div>
        </div>
      </section>
    </div>
  );
};
