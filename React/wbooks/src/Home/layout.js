import React from 'react';
import PropTypes from 'prop-types';

import { BOOKS, FILTERS } from '../books_json';

import BookContainer from './Components/BookContainer';
import BookSearch from './Components/BookSearch';
import BookFilterContainer from './Components/BookFilter';

function Home({ filterOption, searchText, handleFilterOptionChange, handleSearchTextChange, books }) {
  return (
    <div className="body-container">
      <BookFilterContainer
        filters={FILTERS}
        filterOption={filterOption}
        onFilterOptionChange={handleFilterOptionChange}
      />
      <BookSearch searchText={searchText} onSearchTextChange={handleSearchTextChange} />
      <BookContainer books={books} searchText={searchText} filterOption={filterOption} />
    </div>
  );
}

Home.propTypes = {
  filterOption: PropTypes.string,
  searchText: PropTypes.string,
  handleFilterOptionChange: PropTypes.func.isRequired,
  handleSearchTextChange: PropTypes.func.isRequired
};

export default Home;
