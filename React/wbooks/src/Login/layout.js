import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import FormInput from '../Components/FormInput';
import { email, passLength, required } from '../Utils/inputValidations';
import '../Components/forms.css';

function Login({ handleSubmit }) {
  return (
    <div className="body-container auth-back">
      <Form className="auth-container" onSubmit={handleSubmit}>
        <h2 className="form-title">Log In</h2>
        <label htmlFor="email" className="form-label">
          Mail:
        </label>
        <Field
          name="email"
          component={FormInput}
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
          component={FormInput}
          type="password"
          className="form-input"
          placeholder="Ingrese su contraseña."
          validate={[required, passLength]}
        />
        <button className="form-button" type="submit">
          Log in
        </button>
        <span>
          No tenes cuenta?{' '}
          <Link className="link" to="/signup">
            Registrate
          </Link>
        </span>
      </Form>
    </div>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'loginForm'
})(Login);
