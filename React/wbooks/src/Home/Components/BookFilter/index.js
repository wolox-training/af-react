import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookFilter from './layout';

class BookFilterContainer extends Component {
  handleFilterOptionChange = e => this.props.onFilterOptionChange(e.target.value);

  render() {
    const { filters } = this.props;
    return <BookFilter filters={filters} handleFilterOptionChange={this.handleFilterOptionChange} />;
  }
}
BookFilterContainer.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  onFilterOptionChange: PropTypes.func
};

export default BookFilterContainer;
