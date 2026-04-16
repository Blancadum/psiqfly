'use client';

import PropTypes from 'prop-types';
import Image from 'next/image';

// Cada post puede incluir un array `books` con:
// { title, author, cover, url } donde url es el enlace de afiliado de Panamericana
export const PanamericanaBanner = ({ books }) => {
  if (!books?.length) return null;

  return (
    <aside className="psi-pana-banner">
      <p className="psi-pana-label">Lecturas recomendadas · Editorial Médica Panamericana</p>
      <div className="psi-pana-books">
        {books.map((book, i) => (
          <a key={i} href={book.url} target="_blank" rel="noopener noreferrer sponsored" className="psi-pana-book group">
            {book.cover && (
              <Image src={book.cover} alt={book.title} width={48} height={64} className="psi-pana-cover" />
            )}
            <div className="min-w-0">
              <p className="psi-pana-title">{book.title}</p>
              {book.author && <p className="psi-pana-author">{book.author}</p>}
              <span className="psi-pana-cta">Ver en Panamericana →</span>
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
