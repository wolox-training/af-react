import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
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

function WBooks() {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/book/:id" component={BookDetail} />
      <AnonymousRoute authed={isAuthenticated()} path="/login" component={LoginContainer} />
      <AnonymousRoute authed={isAuthenticated()} path="/signup" component={SignupContainer} />
      <PrivateRoute authed={isAuthenticated()} path="/dashboard" component={DashboardContainer} />
    </Switch>
  );
}

export default withRouter(connect()(WBooks));
