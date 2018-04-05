import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../../Context/ThemeProvider';
import './style.css';

class BookSearch extends Component {
  handleSearchTextChange = e => this.props.onSearchTextChange(e.target.value);

  render() {
    const { searchText } = this.props;
    return (
      <ThemeContext.Consumer>
        {context => (
          <input
            className={`book-input book-search theme-${context.state.theme}`}
            type="text"
            placeholder="Buscar..."
            value={searchText}
            onChange={this.handleSearchTextChange}
          />
        )}
      </ThemeContext.Consumer>
    );
  }
}

BookSearch.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired
};

export default BookSearch;
