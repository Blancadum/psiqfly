'use client';
import { useState } from 'react';
import Link from 'next/link';

export const NotFoundSearch = ({ posts }) => {
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
    <>
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
    </>
  );
};
