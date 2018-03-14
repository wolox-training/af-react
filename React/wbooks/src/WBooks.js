import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/';
import BookDetailLayout from './BookDetail/layout';

function WBooks() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/book/:number" component={BookDetailLayout} />
    </Switch>
  );
}

export default WBooks;
