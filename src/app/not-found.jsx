'use client';
import { useState } from 'react';
import Link from 'next/link';
import { posts } from '@/Data/Contents/posts';

export default function NotFound() {
  const [query, setQuery] = useState('');

  const results = query.trim().length < 2 ? [] : posts.filter(p => {
    const q = query.toLowerCase();
    return (
      p.title?.toLowerCase().includes(q) ||
      p.excerpt?.toLowerCase().includes(q) ||
      p.tags?.some(t => t.toLowerCase().includes(q))
    );
  }).slice(0, 6);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20">

      {/* Emoji + título */}
      <div className="text-6xl mb-4 select-none">🧭</div>
      <h1 className="text-3xl md:text-4xl font-black text-[#1e293b] tracking-tight mb-2 text-center">
        Página no encontrada
      </h1>
      <p className="text-slate-500 text-base mb-10 text-center max-w-md">
        Esta URL no existe o fue eliminada. Usa el buscador para encontrar lo que necesitas.
      </p>

      {/* Buscador */}
      <div className="w-full max-w-lg relative mb-6">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">🔍</span>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Busca un post, trastorno, sesgo..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#9333ea]/40 focus:border-[#9333ea] transition"
          autoFocus
        />
      </div>

      {/* Resultados */}
      {results.length > 0 && (
        <ul className="w-full max-w-lg divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white shadow-sm mb-8 overflow-hidden">
          {results.map(p => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.categorySlug}/${p.slug}`}
                className="flex items-start gap-3 px-4 py-3 hover:bg-[#f9f5ff] transition-colors group"
              >
                <span className="text-xl mt-0.5 shrink-0">{p.emoji}</span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#1e293b] group-hover:text-[#9333ea] transition-colors truncate">
                    {p.title}
                  </p>
                  <p className="text-xs text-slate-400 truncate">{p.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {query.trim().length >= 2 && results.length === 0 && (
        <p className="text-sm text-slate-400 mb-8">No se encontraron resultados para &ldquo;{query}&rdquo;.</p>
      )}

      {/* Links de escape */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/blog"
          className="px-5 py-2.5 rounded-xl bg-[#9333ea] text-white text-sm font-semibold hover:bg-[#7e22ce] transition-colors"
        >
          Ir al Blog
        </Link>
        <Link
          href="/"
          className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-600 text-sm font-semibold hover:bg-slate-200 transition-colors"
        >
          Inicio
        </Link>
      </div>

    </div>
  );
}
