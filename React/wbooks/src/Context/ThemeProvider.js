import React, { Component } from 'react';

export const ThemeContext = React.createContext();

export class ThemeProvider extends Component {
  state = {
    theme: 'light'
  };
  handleToogleTheme = () =>
    this.state.theme === 'light' ? this.setState({ theme: 'dark' }) : this.setState({ theme: 'light' });

  render() {
    return (
      <ThemeContext.Provider
        value={{
          state: this.state,
          handleToogleTheme: this.handleToogleTheme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
