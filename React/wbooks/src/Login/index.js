import React, { Component } from 'react';
import { connect } from 'react-redux';

import loginActions from '../redux/login/actions';

import './style.css';

import Login from './layout';

class LoginContainer extends Component {
  handleSubmit = data => {
    this.props.dispatch(loginActions.login(data.email, data.password));
  };

  render() {
    return <Login onSubmit={this.handleSubmit} />;
  }
}

export default connect()(LoginContainer);
