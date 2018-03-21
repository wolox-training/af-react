import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import './application.css';

import HomeContainer from './Home/';
import BookDetail from './BookDetail';
import LoginContainer from './Login';
import DashboardContainer from './Dashboard';
import localStorage from './Services/LocalStorage';
import history from './Config/history';

class WBooks extends Component {
  componentWillMount() {
    if (!localStorage.getSessionToken()) {
      history.push('/login');
    } else {
      history.push('/dashboard');
    }
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/book/:id" component={BookDetail} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/dashboard" component={DashboardContainer} />
      </Switch>
    );
  }
}

export default withRouter(connect()(WBooks));
