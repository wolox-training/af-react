import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropElem extends Component {
  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClickOutside);
  };

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClickOutside);
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.updateActive();
    }
  };

  render() {
    return <div ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}

DropElem.propTypes = {
  updateActive: PropTypes.func.isRequired
};

export default DropElem;
