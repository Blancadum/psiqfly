import React from 'react';
import Link from 'next/link';
import { HomeLayout } from '@/components/Layout/Home/HomeLayout';
import { AboutOrigen } from '@/components/Layout/AboutPsiqfly/AboutOrigen';
import { Recursos } from '@/components/blog/ui/Recursos';
import { HowTo } from '@/components/Layout/AboutPsiqfly/HowTo';
import { FaqPsiqfly } from '@/components/Faqs/FaqPsiqfly';
import { CtaFinal } from '@/components/Layout/AboutPsiqfly/CTAFinal';

const AutoraBanner = () => (
  <div className="max-w-4xl mx-auto px-6 pt-16 pb-4">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 rounded-3xl px-8 py-6 shadow-sm">
      <div>
        <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">Detrás del proyecto</p>
        <h2 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
          ¿Quién hay detrás de <span className="psi-gradient-text">PsiQFly®</span>?
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Psicóloga, desarrolladora y creadora. Conoce la historia y la trayectoria de Blanca.
        </p>
      </div>
      <Link href="/autora" className="psi-btn-primary shrink-0 px-6 py-2.5 text-sm">
        Conocer a la autora →
      </Link>
    </div>
  </div>
);

export const AboutPsiqfly = () => {
  return (
    <HomeLayout>
      <AboutOrigen />
      <Recursos />
      <HowTo />
      <FaqPsiqfly />
      <CtaFinal />
      <AutoraBanner />
    </HomeLayout>
  );
};