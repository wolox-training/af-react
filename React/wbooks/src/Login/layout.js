import React from 'react';
import { Form, Field, reduxForm } from 'redux-form';

import './style.css';

function Login(props) {
  return (
    <div className="body-container login-back">
      <Form className="login-container" onSubmit={props.handleSubmit}>
        <label className="form-label">Mail:</label>
        <Field
          name="email"
          component="input"
          type="email"
          className="form-input"
          placeholder="Ingrese su mail."
        />
        <label className="form-label">Contraseña:</label>
        <Field
          name="password"
          component="input"
          type="password"
          className="form-input"
          placeholder="Ingrese su contraseña."
        />
        <button className="form-button" type="submit">
          Log in
        </button>
      </Form>
    </div>
  );
}

export default reduxForm({
  form: 'loginForm'
})(Login);
