import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import WBooks from './WBooks';

ReactDOM.render(
  <BrowserRouter>
    <WBooks />
  </BrowserRouter>,
  document.getElementById('root')
);
