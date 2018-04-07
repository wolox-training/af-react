import React, { Children } from 'react';

import { dropdownContext } from '../index';

function DropTabList({ children }) {
  return (
    <dropdownContext.Consumer>
      {({ updateActive }) =>
        Children.map(children, (child, index) => <button onClick={updateActive(index)}>{child}</button>)
      }
    </dropdownContext.Consumer>
  );
}

export default DropTabList;
