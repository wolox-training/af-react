import React from 'react';
import PropTypes from 'prop-types';

import { BOOKS, FILTERS } from '../books_json';

import BookContainer from './Components/BookContainer';
import BookSearch from './Components/BookSearch';
import BookFilter from './Components/BookFilter';

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
