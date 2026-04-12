'use client';
import Link from 'next/link';
import { SocialLoginButtons } from '@/components/auth/SocialLoginButtons';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-sm bg-white rounded-2xl border border-slate-100 shadow-sm p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-slate-800">Acceder</h1>
          <p className="text-slate-500 text-sm mt-1">Inicia sesión en tu cuenta PsiQFly</p>
        </div>
        <SocialLoginButtons callbackUrl="/dashboard" />
        <p className="text-center text-sm text-slate-500">
          ¿No tienes cuenta?{' '}
          <Link href="/register" className="text-indigo-600 font-semibold hover:underline">Regístrate</Link>
        </p>
      </div>
    </div>
  );
}
