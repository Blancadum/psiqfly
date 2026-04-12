'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo/psiqfly_whiteT.webp';

const MEGA_MENU = [
  {
    label: 'Sesgos cognitivos',
    slug: 'sesgos-cognitivos',
    emoji: '🔍',
    posts: [
      { title: 'Cierre prematuro', slug: 'cierre-prematuro' },
      { title: 'Sesgo de anclaje', slug: 'anclaje' },
      { title: 'Introducción a los sesgos', slug: 'sesgos-cognitivos' },
    ],
  },
  {
    label: 'Trastornos mentales',
    slug: 'trastornos-mentales',
    emoji: '🧠',
    posts: [
      { title: 'Depresión mayor', slug: 'mayor' },
      { title: 'Trastorno bipolar I', slug: 'tipo-1' },
      { title: 'TLP', slug: 'tlp' },
      { title: 'TDAH', slug: 'tdah' },
    ],
  },
  {
    label: 'Autocuidado del clínico',
    slug: 'autocuidado',
    emoji: '🌿',
    posts: [
      { title: 'Autocuidado en psicología', slug: 'autocuidado' },
    ],
  },
  {
    label: 'Colaboraciones',
    slug: 'colaboraciones',
    emoji: '📚',
    posts: [
      { title: 'Descuento Editorial Panamericana', slug: 'editorial-medica-panamericana-descuento' },
    ],
  },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const megaRef = useRef(null);
  let closeTimer = useRef(null);

  const openMega  = () => { clearTimeout(closeTimer.current); setMegaOpen(true); };
  const closeMega = () => { closeTimer.current = setTimeout(() => setMegaOpen(false), 150); };

  return (
    <nav className="psi-nav-glass">
      <div className="psi-nav-container">

        <Link href="/" className="psi-nav-logo-link">
          <Image src={logo} alt="PsiQFly" className="h-10 w-auto" width={120} height={40} />
        </Link>

        {/* Desktop menu */}
        <div className="psi-nav-menu hidden sm:flex items-center">

          {/* Blog con mega menu */}
          <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega} ref={megaRef}>
            <Link
              href="/blog"
              className="psi-nav-link flex items-center gap-1"
              onClick={() => setMegaOpen(false)}
            >
              Blog
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* Mega menu panel */}
            {megaOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-white border border-slate-100 shadow-xl rounded-xl p-5 grid grid-cols-2 gap-4 z-50"
                onMouseEnter={openMega} onMouseLeave={closeMega}
              >
                {MEGA_MENU.map(col => (
                  <div key={col.slug}>
                    <Link
                      href={`/blog/${col.slug}`}
                      className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-500 hover:text-indigo-700 mb-2"
                      onClick={() => setMegaOpen(false)}
                    >
                      <span>{col.emoji}</span> {col.label}
                    </Link>
                    <ul className="space-y-1">
                      {col.posts.map(p => (
                        <li key={p.slug}>
                          <Link
                            href={`/blog/${col.slug}/${p.slug}`}
                            className="block text-sm text-slate-600 hover:text-indigo-700 hover:pl-1 transition-all py-0.5"
                            onClick={() => setMegaOpen(false)}
                          >
                            › {p.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="col-span-2 pt-3 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs text-slate-400">Explora todos los contenidos</span>
                  <Link
                    href="/blog"
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
                    onClick={() => setMegaOpen(false)}
                  >
                    Ver todo el blog →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/autora" className="psi-nav-link hidden sm:inline">Sobre mí</Link>
          <Link href="/contacto" className="psi-nav-link hidden md:inline">Contacto</Link>

          <Link
            href="/blog"
            aria-label="Buscar"
            className="text-[#4c1d95] hover:text-[#634AE6] transition-colors ml-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </Link>

          <Link
            href="/#newsletter"
            className="ml-2 px-4 py-1.5 text-sm font-black rounded-md text-white whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #634AE6, #E245B6, #634AE6)', backgroundSize: '200% 200%', animation: 'gradientShift 3s ease infinite' }}
          >
            Newsletter
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2 rounded-md text-[#4c1d95] hover:bg-indigo-50 transition-colors"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Abrir menú"
        >
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-indigo-100 bg-white/95 backdrop-blur px-4 py-4 flex flex-col gap-1">

          {/* Blog con submenú móvil */}
          <div>
            <button
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
              onClick={() => setMobileBlogOpen(o => !o)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Blog
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 ml-auto transition-transform duration-200 ${mobileBlogOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileBlogOpen && (
              <div className="mt-1 ml-4 flex flex-col gap-3 pb-2">
                {MEGA_MENU.map(col => (
                  <div key={col.slug}>
                    <Link
                      href={`/blog/${col.slug}`}
                      className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-indigo-500 mb-1"
                      onClick={() => { setMobileOpen(false); setMobileBlogOpen(false); }}
                    >
                      <span>{col.emoji}</span> {col.label}
                    </Link>
                    <ul className="space-y-0.5 pl-1">
                      {col.posts.map(p => (
                        <li key={p.slug}>
                          <Link
                            href={`/blog/${col.slug}/${p.slug}`}
                            className="block text-sm text-slate-600 hover:text-indigo-700 py-0.5"
                            onClick={() => { setMobileOpen(false); setMobileBlogOpen(false); }}
                          >
                            › {p.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link
                  href="/blog"
                  className="text-xs font-bold text-indigo-600 pt-1 border-t border-slate-100"
                  onClick={() => { setMobileOpen(false); setMobileBlogOpen(false); }}
                >
                  Ver todo el blog →
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
            Buscar
          </Link>

          <Link
            href="/blog/colaboraciones/libros/editorial-medica-panamericana-descuento"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-base leading-none">📚</span>
            Promo
            <span className="ml-auto text-[10px] font-black px-1.5 py-0.5 rounded bg-amber-100 text-amber-600">-10%</span>
          </Link>

          <div className="pt-2 mt-1 border-t border-slate-100">
            <Link
              href="/#newsletter"
              className="flex items-center justify-center px-4 py-2.5 text-sm font-black rounded-lg text-white"
              style={{ background: 'linear-gradient(135deg, #634AE6, #E245B6, #634AE6)' }}
              onClick={() => setMobileOpen(false)}
            >
              Newsletter
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
