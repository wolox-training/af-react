import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './application.css';

import HomeContainer from './Home/';
import BookDetail from './BookDetail/layout';

function WBooks() {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/book/:number" component={BookDetail} />
    </Switch>
  );
}

export default WBooks;
