import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './application.css';

import HomeContainer from './Home/';
import BookDetail from './BookDetail';

function WBooks() {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/book/:id" component={BookDetail} />
    </Switch>
  );
}

export default WBooks;
