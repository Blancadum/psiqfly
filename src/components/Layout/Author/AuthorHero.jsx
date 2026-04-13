import React from 'react';
import Image from 'next/image';
import blancaFoto from '@/assets/images/perfil/blanca.webp';
import { SocialLinks } from './SocialLinks';

export const AuthorHero = () => {
  return (
    <section className="psi-author-card animate-fade-in">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8">
        
        {/* Profile Picture */}
        <div className="relative group">
          {/* Halo decorativo detrás de la foto */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-[#634AE6]/30 to-[#E245B6]/20 rounded-full blur-md opacity-0 group-hover:opacity-60 transition duration-500 -z-10"></div>
          <Image
            src={blancaFoto}
            alt="Blanca De Uña Martín"
            width={128}
            height={128}
            className="relative flex-shrink-0 w-32 h-32 rounded-full object-cover shadow-lg border-2 border-white dark:border-slate-700 transition-transform duration-500 group-hover:scale-105 z-10"
          />
        </div>

        <div className="flex-1 text-center sm:text-left">
          {/* Header row: Badge + Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <span className="psi-tag-category">
              Autora de PsiQFly®
            </span>
            <SocialLinks />
          </div>

          {/* Name & Title */}
          <h1 className="psi-title-main text-3xl md:text-4xl mb-1">
            Blanca De Uña Martín
          </h1>
          <p className="text-slate-900 font-bold text-xs mb-4 tracking-wide uppercase">
            Psicóloga Clínica · Autora de PsiQFly
          </p>

          {/* Quick Intro */}
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6 max-w-2xl">
            Combino visión clínica, experiencia en SEO y programación fullstack
            para construir herramientas digitales con alma. Especializada en innovación
            en salud mental y software accesible.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            <a
              href="mailto:info.psiqfly@gmail.com"
              className="psi-btn-primary text-sm px-8 py-2.5 shadow-md hover:shadow-indigo-500/20"
            >
              ✉️ Escríbeme
            </a>
            <a
              href="/CV_BlancaDeUna_WebDev.pdf"
              download="CV_Blanca_DeUna_Martin.pdf"
              className="psi-btn-primary"
            >
              📄 Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};