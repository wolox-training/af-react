import React, { Component } from 'react';

export const dropdownContext = React.createContext();

class Dropdowns extends Component {
  state = {
    activeDropdown: -1
  };

  updateActive = value => () => {
    if (value === this.state.activeDropdown) {
      this.setState({ activeDropdown: -1 });
    } else {
      this.setState({ activeDropdown: value });
    }
  };

  render() {
    return (
      <dropdownContext.Provider
        value={{
          updateActive: this.updateActive,
          activeDropdown: this.state.activeDropdown
        }}
      >
        {this.props.children}
      </dropdownContext.Provider>
    );
  }
}

export default Dropdowns;
