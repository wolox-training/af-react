import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookSearch extends Component {
  handleSearchTextChange = e => this.props.onSearchTextChange(e.target.value);

  render() {
    const { searchText } = this.props;
    return (
      <input
        className="book-input book-search"
        type="text"
        placeholder="Buscar..."
        value={searchText}
        onChange={this.handleSearchTextChange}
      />
    );
  }
}

BookSearch.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired
};

export default BookSearch;
