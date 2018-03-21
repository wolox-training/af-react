import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import './application.css';

import HomeContainer from './Home/';
import BookDetail from './BookDetail';
import LoginContainer from './Login';
import SignUpContainer from './SignUp';
import DashboardContainer from './Dashboard';

function WBooks() {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/book/:id" component={BookDetail} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/signup" component={SignUpContainer} />
      <Route path="/dashboard" component={DashboardContainer} />
    </Switch>
  );
}

export default withRouter(connect()(WBooks));
