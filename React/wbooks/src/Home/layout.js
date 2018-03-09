import React from 'react';
import PropTypes from 'prop-types';

import BookContainer from './Components/BookContainer';

import { BOOKS, FILTERS } from '../books_json';

function HomeLayout({ filterOption, searchText, handleFilterOptionChange, handleSearchTextChange }) {
  return (
    <div>
      <BookFilter
        filters={FILTERS}
        filterOption={filterOption}
        onFilterOptionChange={handleFilterOptionChange}
      />
      <BookSearch searchText={searchText} onSearchTextChange={handleSearchTextChange} />
      <BookContainer books={BOOKS} searchText={searchText} filterOption={filterOption} />
    </div>
  );
}

HomeLayout.propTypes = {
  filterOption: PropTypes.string,
  searchText: PropTypes.string,
  handleFilterOptionChange: PropTypes.func,
  handleSearchTextChange: PropTypes.func
};

export default HomeLayout;
