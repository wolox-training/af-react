import React, { Component } from 'react';
import { connect } from 'react-redux';

import authActions from '../redux/auth/actions';

import NavBar from './layout';

class NavbarContainer extends Component {
  logoutHandler = () => {
    this.props.dispatch(authActions.logout());
  };

  render() {
    return <NavBar logoutHandler={this.logoutHandler} />;
  }
}

const mapStateToProps = state => ({ logState: state.auth.logState });

export default connect(mapStateToProps)(NavbarContainer);
