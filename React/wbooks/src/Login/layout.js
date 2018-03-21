import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field, reduxForm } from 'redux-form';

import './style.css';

const required = value => (value ? undefined : 'Requerido');
const maxPassLen = 52;
const minPassLen = 8;
const passLength = value =>
  value && (value.length > maxPassLen || value.length < minPassLen)
    ? `Debe tener entre ${minPassLen} y ${maxPassLen} caracteres`
    : undefined;
const passFormat = value =>
  value && !(/[a-zA-Z]/.test(value) && /[0-9]/.test(value))
    ? 'Debe contener al menos una letra y un numero'
    : undefined;
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Mail invalido' : undefined;

const renderField = ({ input, className, placeholder, type, meta: { touched, error, warning } }) => (
  <div className="form-input-group">
    <input {...input} placeholder={placeholder} type={type} className={className} />
    {touched &&
      ((error && <span className="input-error">{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

function Login({ handleSubmit, logState }) {
  return (
    <div className="body-container login-back">
      <Form className="login-container" onSubmit={handleSubmit}>
        <label htmlFor="email" className="form-label">
          Mail:
        </label>
        <Field
          name="email"
          component={renderField}
          type="email"
          className="form-input"
          placeholder="Ingrese su mail."
          validate={[required, email]}
        />
        <label htmlFor="password" className="form-label">
          Contraseña:
        </label>
        <Field
          name="password"
          component={renderField}
          type="password"
          className="form-input"
          placeholder="Ingrese su contraseña."
          validate={[required, passLength]}
        />
        <button className="form-button" type="submit">
          Log in
        </button>
      </Form>
    </div>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func,
  logState: PropTypes.shape({
    loading: PropTypes.bool,
    loggedIn: PropTypes.bool,
    loginFail: PropTypes.bool
  })
};

export default reduxForm({
  form: 'loginForm'
})(Login);
