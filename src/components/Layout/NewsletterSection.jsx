'use client';
import { useNewsletterForm } from '@/hooks/Form/useNewsletterForm';
import { FormCheck } from '@/components/ui/FormField';

export const NewsletterSection = () => {
  const { form, loading, sent, error, handleChange, handleSubmit } = useNewsletterForm();

  if (sent) {
    return (
      <section id="newsletter" className="psi-newsletter-sent">
        <div className="text-4xl mb-3">🎉</div>
        <h2 className="psi-newsletter-sent-title">¡Ya estás dentro!</h2>
        <p className="psi-newsletter-sent-desc">
          Te avisaremos cuando publiquemos nuevos recursos sobre razonamiento clínico y psicopatología.
        </p>
      </section>
    );
  }

  return (
    <section
      id="newsletter"
      className="psi-newsletter-card"
    >
      <div className="flex flex-col md:flex-row">

        {/* Columna izquierda — descripción */}
        <div className="psi-newsletter-left">
          <div className="relative w-14 h-14 mb-4 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full blur-xl opacity-70" style={{ background: 'radial-gradient(circle, #a78bfa, #7c3aed, transparent)' }} />
            <svg xmlns="http://www.w3.org/2000/svg" className="relative w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
            </svg>
          </div>
          <span className="psi-newsletter-label">Newsletter</span>
          <h2 className="psi-newsletter-title">Recursos clínicos en tu bandeja</h2>
          <ul className="psi-newsletter-list">
            {[
              'Artículos sobre sesgos cognitivos',
              'Psicopatología y diagnóstico diferencial',
              'Recursos para psicólogos en formación',
            ].map(item => (
              <li key={item} className="psi-newsletter-list-item">
                <span className="text-white font-black mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="psi-newsletter-disclaimer">Sin spam. Baja cuando quieras.</p>
        </div>

        {/* Columna derecha — formulario */}
        <div className="psi-newsletter-right">
          <p className="psi-newsletter-subtitle">Apúntate a la Newsletter</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="psi-newsletter-fields">
              <input
                type="text"
                placeholder="Nombre"
                value={form.nombre}
                onChange={e => handleChange('nombre', e.target.value)}
                required
                className="psi-newsletter-input"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={form.email}
                onChange={e => handleChange('email', e.target.value)}
                required
                className="psi-newsletter-input"
              />
            </div>

            <FormCheck
              checked={form.consent}
              onChange={e => handleChange('consent', e.target.checked)}
              required
            >
              <span className="psi-form-note">
                Acepto recibir contenido de PsiQFly y puedo darme de baja en cualquier momento.
              </span>
            </FormCheck>

            {error && <p className="text-xs text-red-500">⚠️ {error}</p>}

            <button
              type="submit"
              disabled={loading || !form.consent}
              className="psi-newsletter-submit"
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
