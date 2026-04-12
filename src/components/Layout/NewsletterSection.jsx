'use client';
import { useNewsletterForm } from '@/hooks/Form/useNewsletterForm';
import { FormCheck } from '@/components/ui/FormField';

export const NewsletterSection = () => {
  const { form, loading, sent, error, handleChange, handleSubmit } = useNewsletterForm();

  if (sent) {
    return (
      <section className="bg-gradient-to-br from-[#f3ebff] to-[#ede0ff] rounded-3xl px-8 py-12 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-xl font-black text-[#1e293b] mb-2">¡Ya estás dentro!</h2>
        <p className="text-slate-500 text-sm max-w-sm mx-auto">
          Te avisaremos cuando publiquemos nuevos recursos sobre razonamiento clínico y psicopatología.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-[#f3ebff] to-[#ede0ff] rounded-3xl px-8 py-12">
      <div className="max-w-lg mx-auto text-center">

        <div className="text-4xl mb-4">📬</div>
        <h2 className="text-2xl font-black text-[#1e293b] tracking-tight mb-2">
          Recursos clínicos en tu bandeja
        </h2>
        <p className="text-slate-500 text-sm mb-8 leading-relaxed">
          Sin spam. Solo artículos sobre razonamiento diagnóstico, sesgos cognitivos y psicopatología para psicólogos que empiezan.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={e => handleChange('nombre', e.target.value)}
              required
              className="psi-input flex-1"
            />
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              value={form.email}
              onChange={e => handleChange('email', e.target.value)}
              required
              className="psi-input flex-1"
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
            <p className="text-xs text-red-500 text-left">⚠️ {error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !form.consent}
            className="psi-btn-primary w-full py-3 text-sm flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <><span className="animate-spin">↻</span> Suscribiendo...</>
            ) : (
              'Suscribirme →'
            )}
          </button>
        </form>

      </div>
    </section>
  );
};
