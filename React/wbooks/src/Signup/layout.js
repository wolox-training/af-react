import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field, reduxForm } from 'redux-form';

import FormInput from '../Components/FormInput';
import { email, passLength, required, passFormat, name } from '../Utils/inputValidations';
import '../Components/forms.css';

function Signup({ handleSubmit }) {
  return (
    <div className="body-container auth-back">
      <Form className="auth-container" onSubmit={handleSubmit}>
        <h2 className="form-title">Sign Up</h2>
        <label htmlFor="name" className="form-label">
          Nombre:
        </label>
        <Field
          name="name"
          component={FormInput}
          type="text"
          className="form-input"
          placeholder="Ingrese su nombre."
          validate={[required, name]}
        />
        <label htmlFor="lastname" className="form-label">
          Apellido:
        </label>
        <Field
          name="lastname"
          component={FormInput}
          type="text"
          className="form-input"
          placeholder="Ingrese su apellido."
          validate={[required, name]}
        />
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
          validate={[required, passLength, passFormat]}
        />
        <button className="form-button" type="submit">
          Sign up
        </button>
      </Form>
    </div>
  );
}

Signup.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'SignupForm'
})(Signup);
