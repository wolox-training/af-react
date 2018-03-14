import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../application.css';
import BookFilterLayout from './layout';

class BookFilter extends Component {
  handleFilterOptionChange = e => this.props.onFilterOptionChange(e.target.value);

  render() {
    const { filters } = this.props;
    return <BookFilterLayout filters={filters} handleFilterOptionChange={this.handleFilterOptionChange} />;
  }
}
BookFilter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  onFilterOptionChange: PropTypes.func
};

export default BookFilter;
