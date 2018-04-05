import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from './Context/ThemeProvider';
import store from './redux/store';
import history from './Config/history';
import WBooks from './WBooks';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <Router history={history}>
        <WBooks />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
