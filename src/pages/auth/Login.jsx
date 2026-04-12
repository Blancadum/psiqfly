'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { login as loginApi } from '@/services/api';
import { useAuth } from '@/hooks/Auth/useAuth.jsx';
import { FormField } from '@/components/ui/FormField';
import { SocialLoginButtons } from '@/components/auth/SocialLoginButtons';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await loginApi({ email, password });
      if (response.data) {
        login(response.data);
        router.push('/dashboard');
      }
    } catch (err) {
      console.error(err);
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="psi-form-page">
      <div className="w-full max-w-md">
        <div className="psi-form-card psi-form-card--compact">

          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
              Bienvenida <span className="psi-gradient-text">de nuevo</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Accede con tu correo institucional
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <FormField label="Email institucional" id="email">
              <input id="email" type="email" className="psi-input" placeholder="nombre@centro.edu"
                value={email} onChange={(e) => setEmail(e.target.value)} required />
            </FormField>

            <FormField
              id="password"
              label="Contraseña"
              action={
                <button type="button" className="text-xs text-[#634AE6] hover:underline font-medium">
                  ¿La olvidaste?
                </button>
              }
            >
              <input id="password" type="password" className="psi-input" placeholder="••••••••"
                value={password} onChange={(e) => setPassword(e.target.value)} required />
            </FormField>

            {error && <p className="psi-form-error">{error}</p>}

            <button type="submit" disabled={loading}
              className="w-full psi-btn-primary py-3 text-base disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? 'Verificando...' : 'Entrar →'}
            </button>
          </form>

          <div className="mt-6">
            <SocialLoginButtons />
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              ¿No tienes cuenta?{' '}
              <Link href="/register" className="text-[#634AE6] font-bold hover:underline">
                Regístrate gratis
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
