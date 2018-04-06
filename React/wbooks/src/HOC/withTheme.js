import React from 'react';

import { ThemeContext } from '../Context/ThemeProvider';

function withTheme(Component) {
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

export default withTheme;
