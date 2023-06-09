const FormRow = ({ type, name, value, handleChange, labelText, placeholder, disabled }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
