'use client';
import React, { useState } from 'react';
import { HomeLayout } from '@/components/Layout/Home/HomeLayout';
import { BlogSearchHub } from '@/components/blog/ui/BlogSearchHub';
import { categoryColors } from '@/utils/categoryColors';
import { usePost } from '@/hooks/Domain/usePost';
import Link from 'next/link';
import { PanamericanaBanner } from '@/components/ads/PanamericanaBanner';
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const Blog = () => {
  const [expandSearch, setExpandSearch] = useState(false);
  const [activeLetter, setActiveLetter] = useState(null);
  const {
    posts: filteredPosts,
    categories,
    allTags,
    activeTag,
    activeCategory,
    setQuery,
    setActiveCategory,
    setActiveTag,
  } = usePost();

  return (
    <HomeLayout>
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* 1. Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Archivo <span className="psi-gradient-text">Clínico</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Profundiza en la psicopatología y el razonamiento diagnóstico con guías diseñadas para la práctica real.
          </p>
        </div>

        {/* 2. Buscador y filtro de categorías */}
        <div className="mb-8">
          <BlogSearchHub
            categories={categories}
            activeCategory={activeCategory}
            onSearch={setQuery}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* 3. Buscar más — desplegable de tags y etiquetas DSM */}
        <div className="mb-12 pb-8 border-b border-slate-100 dark:border-slate-800">
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setExpandSearch(!expandSearch)}
              className="flex items-center gap-1.5 text-sm font-bold text-slate-400 hover:text-[#634AE6] transition-colors"
            >
              <span>{expandSearch ? 'Cerrar' : 'Buscar más'}</span>
              <span className={`transition-transform duration-200 ${expandSearch ? 'rotate-180' : ''}`}>↓</span>
            </button>
          </div>

          {expandSearch && (() => {
            const allTerms = allTags.map(tag => ({ label: tag, tag })).sort((a, b) =>
              a.label.localeCompare(b.label, 'es')
            );
            const lettersWithTerms = new Set(allTerms.map(t => t.label[0].toUpperCase()));
            const visibleTerms = activeLetter
              ? allTerms.filter(t => t.label[0].toUpperCase() === activeLetter)
              : allTerms;

            const getLetterClass = (letter) => {
              if (activeLetter === letter) return 'bg-[#634AE6] text-white';
              if (lettersWithTerms.has(letter)) return 'text-slate-500 hover:text-[#634AE6]';
              return 'text-slate-200 dark:text-slate-700 cursor-default';
            };

            return (
              <div className="space-y-5 animate-fade-in">

                {/* Abecedario */}
                <div className="flex flex-wrap justify-center gap-1">
                  <button
                    onClick={() => setActiveLetter(null)}
                    className={`w-7 h-7 rounded text-xs font-bold transition-all ${
                      activeLetter ? 'text-slate-400 hover:text-[#634AE6]' : 'bg-[#634AE6] text-white'
                    }`}
                  >
                    Todos
                  </button>
                  {ALPHABET.map(letter => (
                    <button
                      key={letter}
                      disabled={!lettersWithTerms.has(letter)}
                      onClick={() => setActiveLetter(activeLetter === letter ? null : letter)}
                      className={`w-7 h-7 rounded text-xs font-bold transition-all ${getLetterClass(letter)}`}
                    >
                      {letter}
                    </button>
                  ))}
                </div>

                {/* Desplegable rápido */}
                <div className="flex justify-center">
                  <select
                    value={activeTag || ''}
                    onChange={e => setActiveTag(e.target.value || null)}
                    className="psi-input text-sm max-w-xs"
                  >
                    <option value="">— Selecciona una palabra clave —</option>
                    {visibleTerms.filter(t => t.tag).map(t => (
                      <option key={t.tag} value={t.tag}>{t.label}</option>
                    ))}
                  </select>
                </div>

                {/* Nube de términos filtrada */}
                <div className="flex flex-wrap justify-center gap-2">
                  {visibleTerms.map((t, i) =>
                    t.href ? (
                      <Link
                        key={i}
                        href={t.href}
                        className="px-3 py-1 rounded-full text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-indigo-50 hover:text-[#634AE6] transition-all"
                      >
                        {t.label}
                      </Link>
                    ) : (
                      <button
                        key={i}
                        onClick={() => setActiveTag(activeTag === t.tag ? null : t.tag)}
                        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
                          activeTag === t.tag
                            ? 'bg-[#634AE6] text-white shadow-sm'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-indigo-50 hover:text-[#634AE6]'
                        }`}
                      >
                        {t.label}
                      </button>
                    )
                  )}
                </div>

              </div>
            );
          })()}
        </div>

        {/* Banner Panamericana */}
        <div className="mb-10">
          <PanamericanaBanner />
        </div>

        {/* 5. Grid de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredPosts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.categorySlug}/${post.slug}`}
              className="psi-action-card group flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{post.emoji || '📄'}</span>
                <div>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase ${categoryColors[post.category] || categoryColors['Default']}`}>
                    {post.category}
                  </span>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{post.date}</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#634AE6] transition-colors mb-3 leading-tight">
                {post.title}
              </h3>
              <p className="text-sm text-slate-500 mb-6 flex-1 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center gap-1 text-sm font-bold text-[#634AE6] group-hover:gap-2 transition-all">
                <span>Leer</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Estado vacío */}
        {filteredPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center pt-0 pb-24">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-slate-500 font-bold">No hemos encontrado artículos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </HomeLayout>
  );
};
