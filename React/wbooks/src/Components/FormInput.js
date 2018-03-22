import React from 'react';

import './forms.css';

function FormInput({ input, className, placeholder, type, meta: { touched, error, warning } }) {
  return (
    <div className="form-input-group">
      <input {...input} placeholder={placeholder} type={type} className={className} />
      {touched &&
        ((error && <span className="input-error">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  );
}

export default FormInput;
