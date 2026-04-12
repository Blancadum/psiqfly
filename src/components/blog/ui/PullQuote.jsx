import PropTypes from 'prop-types';

export const PullQuote = ({ text, author }) => (
  <blockquote className="psi-pullquote">
    <p className="psi-pullquote-text">"{text}"</p>
    {author && <cite className="psi-pullquote-author">— {author}</cite>}
  </blockquote>
);

PullQuote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
};
