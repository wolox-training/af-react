import React, { Component } from 'react';
import { connect } from 'react-redux';

import authActions from '../redux/auth/actions';

import NavBar from './layout';

class NavbarContainer extends Component {
  state = { isMenuDisplayed: false, areNotificationsDisplayed: false };

  handleToogleMenu = () => {
    this.setState({ isMenuDisplayed: !this.state.isMenuDisplayed });
  };

  handleToogleNotif = () => {
    this.setState({ areNotificationsDisplayed: !this.state.areNotificationsDisplayed });
  };

  logoutHandler = () => {
    this.props.dispatch(authActions.logout());
  };

  render() {
    return (
      <NavBar
        logoutHandler={this.logoutHandler}
        isMenuDisplayed={this.state.isMenuDisplayed}
        areNotificationsDisplayed={this.state.areNotificationsDisplayed}
        onToogleNotif={this.handleToogleNotif}
        onToogleMenu={this.handleToogleMenu}
      />
    );
  }
}

const mapStateToProps = state => ({ logState: state.auth.logState });

export default connect(mapStateToProps)(NavbarContainer);
