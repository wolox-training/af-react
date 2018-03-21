import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import WBooks from './WBooks';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <WBooks />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
