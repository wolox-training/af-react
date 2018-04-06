import React, { Component, Children } from 'react';

class Dropdowns extends Component {
  state = {
    activeDropdown: -1
  };

  componentDidMount = () => {};

  dropdownContext = React.createContext();

  render() {
    return (
      <this.dropdownContext.Provider value={this.state}>{this.props.children}</this.dropdownContext.Provider>
    );
  }
}

export default Dropdowns;

// return Children.map(this.props.children, (child, index) => {
//   if (index === this.state.activeDropdown) {
//     return child;
//   }
//   return null;
// });
