import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './application.css';

import isAuthenticated from './Utils/authentication';
import PrivateRoute from './Components/PrivateRoute';
import AnonymousRoute from './Components/AnonymousRoute';
import HomeContainer from './Home/';
import BookDetail from './BookDetail';
import LoginContainer from './Login';
import SignupContainer from './Signup';
import DashboardContainer from './Dashboard';
import NavbarContainer from './Navbar';

function WBooks() {
  return (
    <div>
      <NavbarContainer />
      <Switch>
        <AnonymousRoute authed={isAuthenticated()} path="/login" component={LoginContainer} />
        <AnonymousRoute authed={isAuthenticated()} path="/signup" component={SignupContainer} />
        <PrivateRoute authed={isAuthenticated()} path="/dashboard" component={DashboardContainer} />
        <PrivateRoute authed={isAuthenticated()} path="/book/:id" component={BookDetail} />
        <PrivateRoute authed={isAuthenticated()} path="/" component={HomeContainer} />
      </Switch>
    </div>
  );
}

export default withRouter(connect()(WBooks));
