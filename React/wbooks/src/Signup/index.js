import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import signupActions from '../redux/signup/actions';

import Signup from './layout';

class SignupContainer extends Component {
  handleSubmit = data => {
    const user = {
      email: data.email,
      password: data.password,
      first_name: data.name,
      last_name: data.lastname,
      locale: 'en'
    };
    this.props.dispatch(signupActions.signup(user));
  };

  render() {
    return <Signup onSubmit={this.handleSubmit} />;
  }
}

const mapStateToProps = state => ({ logState: state.login.logState });

export default withRouter(connect(mapStateToProps)(SignupContainer));
