import React from 'react';

import ThemeContext from '../Context/ThemeProvider';

export function withTheme(Component) {
  return function ThemedComponent(props) {
    return (
      <ThemeContext.Consumer>
        {({ theme, handleToogleTheme }) => (
          <Component {...props} theme={theme} handleToogleTheme={handleToogleTheme} />
        )}
      </ThemeContext.Consumer>
    );
  };
}
