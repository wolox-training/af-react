import React, { Component } from 'react';

import { themes } from '../Config/themes';

export const ThemeContext = React.createContext();

class ThemeProvider extends Component {
  state = {
    theme: themes.LIGHT
  };
  handleToogleTheme = () =>
    this.state.theme === themes.LIGHT
      ? this.setState({ theme: themes.DARK })
      : this.setState({ theme: themes.LIGHT });

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleToogleTheme: this.handleToogleTheme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
