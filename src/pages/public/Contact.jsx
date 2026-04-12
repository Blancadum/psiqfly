import React from 'react';
import { HomeLayout } from '@/components/Layout/Home/HomeLayout';
import { ContactForm } from '@/components/Layout/ContactForm';

export const ContactPage = () => (
  <HomeLayout>
    <div className="psi-form-centered">
      <div className="w-full max-w-xl">
        <div className="psi-form-card psi-form-card--compact animate-fade-in">
          <div className="text-center mb-4">
            <h1 className="psi-title-main text-2xl mb-1">
              ¿<span className="psi-gradient-text">Hablamos</span>?
            </h1>
            <p className="psi-excerpt text-sm">Escríbeme sobre PsiQFly, colaboraciones o lo que necesites.</p>
          </div>
          <ContactForm />
        </div>
        <div className="mt-4 text-center text-sm text-slate-400 dark:text-slate-500 flex justify-center gap-4 flex-wrap">
          <a href="https://linkedin.com/in/blancadum/" className="text-[#634AE6] hover:underline font-medium">LinkedIn</a>
          <a href="https://youtube.com/@BlancaTF" className="text-[#634AE6] hover:underline font-medium">YouTube</a>
          <a href="mailto:blancadum@gmail.com" className="text-[#634AE6] hover:underline font-medium">contacto@psiqfly.com</a>
        </div>
      </div>
    </div>
  </HomeLayout>
);