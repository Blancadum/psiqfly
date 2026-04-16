import PropTypes from 'prop-types';

export const FormField = ({ label, id, error, action, children }) => (
  <div className="psi-field-group">
    {(label || action) && (
      <div className={action ? 'psi-field-header' : ''}>
        {label && <label htmlFor={id} className="psi-field-label">{label}</label>}
        {action}
      </div>
    )}
    {children}
    {error && <p className="psi-field-error-text">{error}</p>}
  </div>
);

FormField.propTypes = {
  label: PropTypes.node,
  id: PropTypes.string,
  error: PropTypes.string,
  action: PropTypes.node,
  children: PropTypes.node.isRequired,
};

export const FormCheck = ({ checked, onChange, required, children }) => (
  <label className="psi-form-check">
    <input 
      type="checkbox" 
      className="psi-form-check-input"
      required={required} 
      checked={checked} 
      onChange={onChange} 
    />
    <span className="psi-form-check-text">{children}</span>
  </label>
);

FormCheck.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

FormCheck.defaultProps = { required: false };