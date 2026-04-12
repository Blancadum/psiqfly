'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { registro } from '@/services/api';
import { FormField, FormCheck } from '@/components/ui/FormField';
import { SocialLoginButtons } from '@/components/auth/SocialLoginButtons';

const ROLES = [
  { value: '', label: 'Selecciona tu perfil…' },
  { value: 'estudiante_grado', label: '👩‍🎓 Estudiante de Grado en Psicología' },
  { value: 'estudiante_master', label: '🎓 Estudiante de Máster en Psicología Clínica' },
  { value: 'en_practicas', label: '🏥 En prácticas clínicas actualmente' },
  { value: 'tutor', label: '🧑‍🏫 Tutor o supervisor clínico' },
  { value: 'docente', label: '🏫 Docente universitario' },
  { value: 'psicologo', label: '🧠 Psicólogo/a en activo' },
  { value: 'institucion', label: '🏛️ Responsable de institución o máster' },
  { value: 'otro', label: '✨ Otro' },
];

const SOURCES = [
  { value: '', label: '¿Cómo conociste PsiQFly?' },
  { value: 'isep', label: 'ISEP / TFM' },
  { value: 'rrss', label: 'Redes sociales' },
  { value: 'buscador', label: 'Buscador (Google, etc.)' },
  { value: 'compañero', label: 'Un compañero o compañera' },
  { value: 'docente', label: 'Mi docente o tutor' },
  { value: 'otro', label: 'Otro' },
];

export const Register = () => {
  const [form, setForm] = useState({
    name: '', email: '', password: '', confirm: '',
    role: '', source: '',
    accept: false, newsletter: false,
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const getStrength = (p) => {
    let s = 0;
    if (p.length >= 8) s += 25;
    if (/[A-Z]/.test(p)) s += 25;
    if (/[0-9]/.test(p)) s += 25;
    if (/[^A-Za-z0-9]/.test(p)) s += 25;
    return s;
  };

  const strengthLabel = (s) => {
    if (s === 0) return { text: '', color: 'bg-slate-200' };
    if (s <= 25) return { text: 'Muy débil', color: 'bg-red-400' };
    if (s <= 50) return { text: 'Débil', color: 'bg-orange-400' };
    if (s <= 75) return { text: 'Aceptable', color: 'bg-yellow-400' };
    return { text: 'Fuerte', color: 'bg-green-400' };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (form.password !== form.confirm) {
      setError({ confirm: 'Las contraseñas no coinciden' });
      setLoading(false);
      return;
    }
    try {
      await registro({
        nombre: form.name, email: form.email, password: form.password,
        perfil: form.role, comoNosConocio: form.source,
        aceptaDatos: form.accept, newsletter: form.newsletter,
      });
      router.push('/login');
    } catch (err) {
      console.error(err);
      setError({ server: 'Error al conectar con el servidor o el email ya existe.' });
    } finally {
      setLoading(false);
    }
  };

  const strength = getStrength(form.password);
  const { text: strengthText, color: strengthColor } = strengthLabel(strength);

  return (
    <div className="psi-form-page">
      <div className="w-full max-w-lg">
        <div className="psi-form-card psi-form-card--compact">

          <div className="text-center mb-4">
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">
              Crea tu <span className="psi-gradient-text">cuenta</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Empieza tu entrenamiento clínico hoy mismo
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">

            <div className="psi-form-row">
              <FormField label="Nombre completo" id="name">
                <input id="name" type="text" className="psi-input" placeholder="Tu nombre"
                  required value={form.name} onChange={e => set('name', e.target.value)} />
              </FormField>
              <FormField label="Email" id="email">
                <input id="email" type="email" className="psi-input" placeholder="usuario@universidad.edu"
                  required value={form.email} onChange={e => set('email', e.target.value)} />
              </FormField>
            </div>

            <div className="psi-form-row">
              <FormField label="Contraseña" id="password">
                <input id="password" type="password" className="psi-input"
                  required value={form.password} onChange={e => set('password', e.target.value)} />
                <div className="psi-strength-track">
                  <div className={`psi-strength-bar h-full transition-all duration-300 rounded-full ${strengthColor}`}
                    style={{ '--strength': `${strength}%` }} />
                </div>
                {strengthText && <p className="text-xs text-slate-400 mt-0.5">{strengthText}</p>}
              </FormField>
              <FormField label="Confirmar" id="confirm" error={error.confirm}>
                <input id="confirm" type="password" className="psi-input"
                  required value={form.confirm} onChange={e => set('confirm', e.target.value)} />
              </FormField>
            </div>

            <div className="psi-form-row">
              <FormField label={<>¿Cuál es tu perfil? <span className="text-[#634AE6]">*</span></>} id="role">
                <select id="role" required className="psi-input"
                  value={form.role} onChange={e => set('role', e.target.value)}>
                  {ROLES.map(r => (
                    <option key={r.value} value={r.value} disabled={r.value === ''}>{r.label}</option>
                  ))}
                </select>
              </FormField>
              <FormField label="¿Cómo nos conociste?" id="source">
                <select id="source" className="psi-input"
                  value={form.source} onChange={e => set('source', e.target.value)}>
                  {SOURCES.map(s => (
                    <option key={s.value} value={s.value} disabled={s.value === ''}>{s.label}</option>
                  ))}
                </select>
              </FormField>
            </div>

            <FormCheck required checked={form.accept} onChange={e => set('accept', e.target.checked)}>
              Acepto el tratamiento de datos y la{' '}
              <Link href="/privacidad" className="text-[#634AE6] hover:underline">política de privacidad</Link>.{' '}
              <span className="text-[#634AE6]">*</span>
            </FormCheck>

            <FormCheck checked={form.newsletter} onChange={e => set('newsletter', e.target.checked)}>
              Quiero recibir artículos sobre razonamiento clínico y formación.{' '}
              <span className="text-slate-400">(Opcional)</span>
            </FormCheck>

            {error.server && <p className="psi-form-error">{error.server}</p>}

            <button type="submit" disabled={loading}
              className="w-full psi-btn-primary py-2.5 text-base disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? 'Procesando...' : 'Crear cuenta →'}
            </button>
          </form>

          <div className="mt-4">
            <SocialLoginButtons />
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              ¿Ya tienes cuenta?{' '}
              <Link href="/login" className="text-[#634AE6] font-bold hover:underline">Inicia sesión</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
