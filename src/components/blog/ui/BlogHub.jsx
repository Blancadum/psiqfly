'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { NavDropdown } from '@/components/blog/ui/NavDropdown';

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

export const BlogHub = ({ posts, categories = [] }) => {
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

  const filtered = useMemo(() => posts.filter(p => {
    const matchLetter   = !activeLetter    || p.title?.[0]?.toUpperCase() === activeLetter;
    const matchTag      = !activeTag       || p.tags?.includes(activeTag);
    const matchCategory = !activeCategory  || p.categorySlug === activeCategory;
    const q = search.toLowerCase();
    const matchSearch   = !q || p.title?.toLowerCase().includes(q) || p.excerpt?.toLowerCase().includes(q);
    return matchLetter && matchTag && matchCategory && matchSearch;
  }), [posts, activeLetter, activeTag, activeCategory, search]);

  const toggleCategory = (slug) => {
    setActiveCategory(c => c === slug ? '' : slug);
    setActiveLetter(null);
    setSearch('');
  };

  return (
    <div className="space-y-8">

      {/* Dropdown de categorías */}
      {categories.length > 0 && (
        <NavDropdown label="Explorar por categoría" items={categories} />
      )}

      {/* Buscador */}
      <div className="psi-hub-search">
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

      {/* Índice alfabético */}
      <div className="flex flex-wrap justify-center gap-1.5">
        <button
          onClick={() => setActiveLetter(null)}
          className={`px-3 psi-hub-alpha-btn ${!activeLetter ? 'psi-hub-alpha-btn--active' : ''}`}
        >
          Todos
        </button>
        {letters.map(l => (
          <button
            key={l}
            onClick={() => { setActiveLetter(l === activeLetter ? null : l); setSearch(''); }}
            className={`w-8 psi-hub-alpha-btn ${activeLetter === l ? 'psi-hub-alpha-btn--active' : ''}`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Etiquetas */}
      {allTags.length > 0 && (
        <div className="text-center">
          <button onClick={() => setTagsOpen(o => !o)} className="psi-hub-tag-toggle">
            {tagsOpen ? 'Ver menos ▲' : 'Ver más ▼'}
            {activeTag && !tagsOpen && (
              <span className="psi-hub-tag-badge">{activeTag}</span>
            )}
          </button>

          {tagsOpen && (
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <button
                onClick={() => setActiveTag('')}
                className={`psi-hub-tag-btn ${!activeTag ? 'psi-hub-tag-btn--active' : ''}`}
              >
                Todas
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag === activeTag ? '' : tag)}
                  className={`psi-hub-tag-btn ${activeTag === tag ? 'psi-hub-tag-btn--active' : ''}`}
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

      {/* Grid de posts */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(post => {
            const color = CATEGORY_COLORS[post.categorySlug] ?? DEFAULT_COLOR;
            return (
              <div key={post.slug} className="psi-hub-post-card group">
                <Link href={`/blog/${post.categorySlug}${post.subcategorySlug ? '/' + post.subcategorySlug : ''}/${post.slug}`} className="flex flex-col flex-1">
                  {post.emoji && <span className="text-2xl mb-3">{post.emoji}</span>}
                  <p className="psi-hub-post-title">{post.title}</p>
                  <p className="psi-hub-post-excerpt">{post.excerpt}</p>
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
                  {post.readTime && <span className="psi-hub-post-readtime">{post.readTime}</span>}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="psi-hub-empty">Sin resultados{search ? ` para "${search}"` : activeCategory ? ` en esta categoría` : ''}.</p>
      )}

    </div>
  );
};
