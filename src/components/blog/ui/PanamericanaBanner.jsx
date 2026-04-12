'use client';

import PropTypes from 'prop-types';
import Image from 'next/image';

// Cada post puede incluir un array `books` con:
// { title, author, cover, url } donde url es el enlace de afiliado de Panamericana
export const PanamericanaBanner = ({ books }) => {
  if (!books?.length) return null;

  return (
    <aside className="my-10 rounded-2xl border border-indigo-100 dark:border-slate-700 bg-indigo-50/40 dark:bg-slate-800/40 px-6 py-5">
      <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-3">
        Lecturas recomendadas · Editorial Médica Panamericana
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        {books.map((book, i) => (
          <a
            key={i}
            href={book.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-center gap-3 flex-1 group"
          >
            {book.cover && (
              <Image
                src={book.cover}
                alt={book.title}
                width={48}
                height={64}
                className="w-12 h-16 object-cover rounded-md shadow-sm flex-shrink-0 group-hover:shadow-md transition-shadow"
              />
            )}
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">
                {book.title}
              </p>
              {book.author && (
                <p className="text-xs text-slate-400 mt-0.5">{book.author}</p>
              )}
              <span className="text-xs text-indigo-500 font-medium mt-1 inline-block">
                Ver en Panamericana →
              </span>
            </div>
          </a>
        ))}
      </div>
    </aside>
  );
};

PanamericanaBanner.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      cover: PropTypes.string,
      url: PropTypes.string.isRequired,
    })
  ),
};
