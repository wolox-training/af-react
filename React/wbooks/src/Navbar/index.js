import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import logoutActions from '../redux/logout/actions';

import NavBar from './layout';

class NavbarContainer extends Component {
  state = { isMenuDisplayed: false, areNotificationsDisplayed: false };

  toogleMenu = () => {
    this.setState({ isMenuDisplayed: !this.state.isMenuDisplayed });
  };

  toogleNotif = () => {
    this.setState({ areNotificationsDisplayed: !this.state.areNotificationsDisplayed });
  };

  logoutHandler = () => {
    this.props.dispatch(logoutActions.logout());
  };

  render() {
    return (
      <NavBar
        logoutHandler={this.logoutHandler}
        isMenuDisplayed={this.isMenuDisplayed}
        areNotificationsDisplayed={this.areNotificationsDisplayed}
        toogleNotif={this.toogleNotif}
        toogleMenu={this.toogleMenu}
      />
    );
  }
}

const mapStateToProps = state => ({ logState: state.logout.logState });

export default withRouter(connect(mapStateToProps)(NavbarContainer));
