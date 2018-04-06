import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withTheme from '../../../HOC/withTheme';
import './style.css';

class BookSearch extends Component {
  handleSearchTextChange = e => this.props.onSearchTextChange(e.target.value);

  render() {
    const { searchText, theme } = this.props;
    return (
      <input
        className={`book-input book-search theme-${theme}`}
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
  onSearchTextChange: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
};

export default withTheme(BookSearch);
