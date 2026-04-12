'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

const CATEGORY_COLORS = {
  'sesgos-cognitivos':   { bg: 'bg-amber-50',   text: 'text-amber-700',   hover: 'hover:bg-amber-100',   ring: 'ring-amber-200'   },
  'trastornos-mentales': { bg: 'bg-rose-50',     text: 'text-rose-700',    hover: 'hover:bg-rose-100',    ring: 'ring-rose-200'    },
  'autocuidado':         { bg: 'bg-emerald-50',  text: 'text-emerald-700', hover: 'hover:bg-emerald-100', ring: 'ring-emerald-200' },
  'colaboraciones':      { bg: 'bg-orange-50',   text: 'text-orange-700',  hover: 'hover:bg-orange-100',  ring: 'ring-orange-200'  },
  'razonamiento-clinico':{ bg: 'bg-indigo-50',   text: 'text-indigo-700',  hover: 'hover:bg-indigo-100',  ring: 'ring-indigo-200'  },
  'simulacion-clinica':  { bg: 'bg-sky-50',      text: 'text-sky-700',     hover: 'hover:bg-sky-100',     ring: 'ring-sky-200'     },
  'recursos':            { bg: 'bg-violet-50',   text: 'text-violet-700',  hover: 'hover:bg-violet-100',  ring: 'ring-violet-200'  },
};

const DEFAULT_COLOR = { bg: 'bg-slate-50', text: 'text-slate-600', hover: 'hover:bg-slate-100', ring: 'ring-slate-200' };

export const BlogHub = ({ posts }) => {
  const [activeLetter, setActiveLetter] = useState(null);
  const [activeTag, setActiveTag] = useState('');
  const [activeCategory, setActiveCategory] = useState('');
  const [search, setSearch] = useState('');
  const [tagsOpen, setTagsOpen] = useState(false);

  const letters = useMemo(() => {
    const set = new Set(posts.map(p => p.title?.[0]?.toUpperCase()).filter(Boolean));
    return Array.from(set).sort();
  }, [posts]);

  const allTags = useMemo(() => {
    const set = new Set(posts.flatMap(p => p.tags ?? []));
    return Array.from(set).sort();
  }, [posts]);

  const filtered = posts.filter(p => {
    const matchLetter   = !activeLetter    || p.title?.[0]?.toUpperCase() === activeLetter;
    const matchTag      = !activeTag       || p.tags?.includes(activeTag);
    const matchCategory = !activeCategory  || p.categorySlug === activeCategory;
    const q = search.toLowerCase();
    const matchSearch   = !q || p.title?.toLowerCase().includes(q) || p.excerpt?.toLowerCase().includes(q);
    return matchLetter && matchTag && matchCategory && matchSearch;
  });

  const toggleCategory = (slug) => {
    setActiveCategory(c => c === slug ? '' : slug);
    setActiveLetter(null);
    setSearch('');
  };

  return (
    <div className="space-y-8">

      {/* Buscador — centrado */}
      <div className="relative max-w-xl mx-auto">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Busca por sesgo, ansiedad, DSM-5-TR..."
          value={search}
          onChange={e => { setSearch(e.target.value); setActiveLetter(null); }}
          className="psi-input pl-11 h-11 text-sm w-full shadow-sm"
        />
      </div>

      {/* Índice alfabético — centrado */}
      <div className="flex flex-wrap justify-center gap-1.5">
        <button
          onClick={() => setActiveLetter(null)}
          className={`px-3 h-8 rounded-lg text-sm font-black transition-all ${
            !activeLetter ? 'bg-indigo-600 text-white shadow' : 'bg-slate-100 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600'
          }`}
        >
          Todos
        </button>
        {letters.map(l => (
          <button
            key={l}
            onClick={() => { setActiveLetter(l === activeLetter ? null : l); setSearch(''); }}
            className={`w-8 h-8 rounded-lg text-sm font-black transition-all ${
              activeLetter === l ? 'bg-indigo-600 text-white shadow' : 'bg-slate-100 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Etiquetas con "Ver más" — centrado */}
      {allTags.length > 0 && (
        <div className="text-center">
          <button
            onClick={() => setTagsOpen(o => !o)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            {tagsOpen ? 'Ver menos ▲' : 'Ver más ▼'}
            {activeTag && !tagsOpen && (
              <span className="ml-1 px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">{activeTag}</span>
            )}
          </button>

          {tagsOpen && (
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <button
                onClick={() => setActiveTag('')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  !activeTag ? 'bg-indigo-600 text-white shadow' : 'bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                Todas
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag === activeTag ? '' : tag)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    activeTag === tag ? 'bg-indigo-600 text-white shadow' : 'bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Filtro activo por categoría */}
      {activeCategory && (
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs text-slate-500">Filtrando por:</span>
          <button
            onClick={() => setActiveCategory('')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ring-1 transition-all ${(CATEGORY_COLORS[activeCategory] ?? DEFAULT_COLOR).bg} ${(CATEGORY_COLORS[activeCategory] ?? DEFAULT_COLOR).text} ${(CATEGORY_COLORS[activeCategory] ?? DEFAULT_COLOR).ring}`}
          >
            {filtered[0]?.category ?? activeCategory} ✕
          </button>
        </div>
      )}

      {/* Grid de posts — 3 columnas */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(post => {
            const color = CATEGORY_COLORS[post.categorySlug] ?? DEFAULT_COLOR;
            return (
              <div key={post.slug} className="flex flex-col p-5 rounded-xl border border-slate-100 bg-white hover:border-indigo-200 hover:shadow-md transition-all group">
                <Link href={`/blog/${post.categorySlug}/${post.slug}`} className="flex flex-col flex-1">
                  {post.emoji && <span className="text-2xl mb-3">{post.emoji}</span>}
                  <p className="text-sm font-semibold text-slate-800 leading-snug group-hover:text-indigo-700 transition-colors">
                    {post.title}
                  </p>
                  <p className="text-sm text-slate-400 mt-1.5 line-clamp-2 flex-1">{post.excerpt}</p>
                </Link>
                <div className="flex items-center gap-2 mt-3">
                  {post.category && (
                    <button
                      onClick={() => toggleCategory(post.categorySlug)}
                      className={`text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ring-1 transition-all cursor-pointer ${color.bg} ${color.text} ${color.hover} ${color.ring} ${activeCategory === post.categorySlug ? 'ring-2' : ''}`}
                    >
                      {post.category}
                    </button>
                  )}
                  {post.readTime && (
                    <span className="text-[11px] text-slate-400 ml-auto">{post.readTime}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-slate-400 py-12">Sin resultados{search ? ` para "${search}"` : activeCategory ? ` en esta categoría` : ''}.</p>
      )}

    </div>
  );
};
