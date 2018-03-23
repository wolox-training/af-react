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
import DashboardContainer from './Dashboard';

function WBooks() {
  return (
    <Switch>
      <PrivateRoute authed={isAuthenticated()} path="/book/:id" component={BookDetail} />
      <AnonymousRoute authed={isAuthenticated()} path="/login" component={LoginContainer} />
      <PrivateRoute authed={isAuthenticated()} path="/dashboard" component={DashboardContainer} />
      <PrivateRoute authed={isAuthenticated()} path="/" component={HomeContainer} />
    </Switch>
  );
}

export default withRouter(connect()(WBooks));
