import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import authActions from '../redux/auth/actions';

import Login from './layout';

class LoginContainer extends Component {
  handleSubmit = data => {
    this.props.dispatch(authActions.login(data.email, data.password));
  };

  render() {
    return <Login onSubmit={this.handleSubmit} logState={this.props.logState} />;
  }
}

LoginContainer.propTypes = {
  logState: PropTypes.shape({
    loading: PropTypes.bool,
    loggedIn: PropTypes.bool,
    loginFail: PropTypes.bool
  })
};

const mapStateToProps = state => ({ logState: state.auth.logState });

export default withRouter(connect(mapStateToProps)(LoginContainer));
