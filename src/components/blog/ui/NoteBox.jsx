import PropTypes from 'prop-types';

export const NoteBox = ({ emoji = '💙', content }) => {
  if (!content) return null;

  return (
    <div className="psi-note-box">
      <span className="psi-note-box-emoji">{emoji}</span>
      <p className="psi-note-box-text">{content}</p>
    </div>
  );
};

NoteBox.propTypes = {
  emoji: PropTypes.string,
  content: PropTypes.node
};
