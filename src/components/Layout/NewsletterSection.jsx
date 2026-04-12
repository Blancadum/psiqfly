'use client';
import { useNewsletterForm } from '@/hooks/Form/useNewsletterForm';
import { FormCheck } from '@/components/ui/FormField';

export const NewsletterSection = () => {
  const { form, loading, sent, error, handleChange, handleSubmit } = useNewsletterForm();

  if (sent) {
    return (
      <section id="newsletter" className="rounded-2xl border border-slate-200 bg-white px-8 py-10 text-center shadow-sm">
        <div className="text-4xl mb-3">🎉</div>
        <h2 className="text-xl font-extrabold text-slate-800 mb-1">¡Ya estás dentro!</h2>
        <p className="text-slate-500 text-sm max-w-sm mx-auto">
          Te avisaremos cuando publiquemos nuevos recursos sobre razonamiento clínico y psicopatología.
        </p>
      </section>
    );
  }

  return (
    <section
      id="newsletter"
      className="rounded-2xl bg-white shadow-xl ring-2 ring-[#2d1b6b] overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">

        {/* Columna izquierda — descripción */}
        <div className="md:w-2/5 px-7 py-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/20" style={{ background: 'linear-gradient(135deg, #3b2199, #634AE6, #a78bfa, #c4b5fd)' }}>
          {/* Icono con haz de luz */}
          <div className="relative w-14 h-14 mb-4 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full blur-xl opacity-70" style={{ background: 'radial-gradient(circle, #a78bfa, #7c3aed, transparent)' }} />
            <svg xmlns="http://www.w3.org/2000/svg" className="relative w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
            </svg>
          </div>
          <span className="text-base font-black uppercase tracking-widest text-white mb-3">Newsletter</span>
          <h2 className="text-2xl font-black text-white leading-snug mb-4">
            Recursos clínicos en tu bandeja
          </h2>
          <ul className="space-y-2.5">
            {[
              'Artículos sobre sesgos cognitivos',
              'Psicopatología y diagnóstico diferencial',
              'Recursos para psicólogos en formación',
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm font-semibold text-white/90">
                <span className="text-white font-black mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm font-bold text-white/80 mt-5">Sin spam. Baja cuando quieras.</p>
        </div>

        {/* Columna derecha — formulario */}
        <div className="flex-1 px-7 py-8 flex flex-col justify-center">
          <p className="text-base font-black text-slate-800 mb-4">Apúntate a la Newsletter</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Nombre"
                value={form.nombre}
                onChange={e => handleChange('nombre', e.target.value)}
                required
                className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={form.email}
                onChange={e => handleChange('email', e.target.value)}
                required
                className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              />
            </div>

            <FormCheck
              checked={form.consent}
              onChange={e => handleChange('consent', e.target.checked)}
              required
            >
              <span className="text-xs text-slate-500">
                Acepto recibir contenido de PsiQFly y puedo darme de baja en cualquier momento.
              </span>
            </FormCheck>

            {error && (
              <p className="text-xs text-red-500">⚠️ {error}</p>
            )}

            <button
              type="submit"
              disabled={loading || !form.consent}
              className="w-full py-3 rounded-lg text-sm font-black transition-all duration-300 hover:opacity-90 hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 35%, #f5f3ff 70%, #ffffff 100%)',
                color: '#634AE6',
              }}
            >
              {loading
                ? <span className="flex items-center justify-center gap-2"><span className="animate-spin">↻</span> Suscribiendo...</span>
                : '¡Vale, me apunto! →'
              }
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
