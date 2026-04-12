import PropTypes from 'prop-types';

export const BookCluster = ({ title = 'Lecturas recomendadas', items }) => (
  <div className="psi-book-cluster">
    <p className="psi-book-cluster-title">{title}</p>
    <div className="psi-book-grid">
      {items.map((book, i) => (
        <div key={i} className="psi-book-card">
          <div className="psi-book-cover">
            {book.cover
              ? <img src={book.cover} alt={book.title} />
              : <div className="psi-book-cover-placeholder">📚</div>
            }
          </div>
          <div className="psi-book-info">
            <p className="psi-book-title">{book.title}</p>
            <p className="psi-book-author">{book.author}</p>
            {book.description && <p className="psi-book-desc">{book.description}</p>}
            {book.link && (
              <a href={book.link} target="_blank" rel="noopener noreferrer" className="psi-book-cta">
                Ver libro →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

BookCluster.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    cover: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
  })).isRequired,
};
