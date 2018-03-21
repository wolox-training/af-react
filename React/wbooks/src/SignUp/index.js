import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router-dom';

import loginActions from '../redux/login/actions';
import localStorage from '../Services/LocalStorage';

import './style.css';

import SignUp from './layout';

class SignUpContainer extends Component {
  componentWillMount() {
    if (localStorage.getSessionToken()) {
      this.props.dispatch(push('/dashboard'));
    }
  }

  handleSubmit = data => {
    this.props.dispatch(loginActions.login(data.email, data.password));
  };

  render() {
    return <SignUp onSubmit={this.handleSubmit} logState={this.props.logState} />;
  }
}

SignUpContainer.propTypes = {
  logState: PropTypes.shape({
    loading: PropTypes.bool,
    loggedIn: PropTypes.bool,
    loginFail: PropTypes.bool
  })
};

const mapStateToProps = state => ({ logState: state.login.logState });

export default withRouter(connect(mapStateToProps)(SignUpContainer));
