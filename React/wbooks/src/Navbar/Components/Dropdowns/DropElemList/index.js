import React, { Children } from 'react';

import { dropdownContext } from '../index';

import DropElem from './DropElem';

function DropElemList({ children }) {
  return (
    <dropdownContext.Consumer>
      {({ activeDropdown, updateActive }) =>
        Children.map(children, (child, index) => {
          if (index === activeDropdown) {
            return <DropElem updateActive={updateActive(index)}>{child}</DropElem>;
          }
          return null;
        })
      }
    </dropdownContext.Consumer>
  );
}

export default DropElemList;
