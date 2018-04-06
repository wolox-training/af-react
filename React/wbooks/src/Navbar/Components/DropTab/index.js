import React, { Component, Children } from 'react';

class DropTab extends Component {
  state = {
    activeDropdown: -1
  };

  componentDidMount = () => {};

  render() {
    return Children.map(this.props.children, (child, index) => {
      if (index === this.state.activeDropdown) {
        return child;
      }
      return null;
    });
  }
}

export default DropTab;
