import React from 'react';

const FormField = ({ name, label, type = 'text', value, onChange, error }) => (
  <div>
    <label>
      {label}
      <input name={name} type={type} value={value} onChange={onChange} />
    </label>
    {error && <span className="error">{error}</span>}
  </div>
);

export default FormField;
