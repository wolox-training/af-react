import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import history from './Config/history';
import WBooks from './WBooks';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <WBooks />
    </Router>
  </Provider>,
  document.getElementById('root')
);
