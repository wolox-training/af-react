import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import authActions from '../redux/auth/actions';

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
    this.props.dispatch(authActions.signup(user));
  };

  render() {
    return <Signup onSubmit={this.handleSubmit} />;
  }
}

const mapStateToProps = state => ({ logState: state.auth.logState });

export default withRouter(connect(mapStateToProps)(SignupContainer));
