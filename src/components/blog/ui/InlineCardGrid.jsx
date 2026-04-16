import Link from 'next/link';
import PropTypes from 'prop-types';

export const InlineCardGrid = ({ cards }) => {
  if (!cards?.length) return null;

  return (
    <div className="psi-inline-card-grid">
      {cards.map((card, i) => (
        <div key={i} className="psi-inline-card group">
          {card.emoji && <span className="psi-inline-card-emoji">{card.emoji}</span>}
          <p className="psi-inline-card-title">{card.title}</p>
          <p className="psi-inline-card-desc">{card.description}</p>

          {card.slug ? (
            <Link
              href={
                '/blog/' +
                card.categorySlug +
                (card.subcategorySlug ? '/' + card.subcategorySlug : '') +
                '/' +
                card.slug
              }
              rel="nofollow"
              className="psi-inline-card-link"
            >
              <span className="psi-inline-card-link-text">Explorar</span>
              <span className="psi-inline-card-link-arrow">→</span>
            </Link>
          ) : (
            <span className="psi-inline-card-soon">Próximamente</span>
          )}
        </div>
      ))}
    </div>
  );
};

InlineCardGrid.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      emoji: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      slug: PropTypes.string,
      categorySlug: PropTypes.string,
      subcategorySlug: PropTypes.string,
    })
  ).isRequired,
};
