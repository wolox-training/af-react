import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './application.css';

import HomeContainer from './Home/';
import BookDetail from './BookDetail';
import Login from './Login';

function WBooks() {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/book/:id" component={BookDetail} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={null} />
    </Switch>
  );
}

export default WBooks;
