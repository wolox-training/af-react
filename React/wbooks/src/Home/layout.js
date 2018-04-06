import React from 'react';
import PropTypes from 'prop-types';

import withTheme from '../HOC/withTheme';
import { FILTERS } from '../books_json';

import './style.css';

import BookContainer from './Components/BookContainer';
import BookSearch from './Components/BookSearch';
import BookFilterContainer from './Components/BookFilter';

function Home({ filterOption, searchText, handleFilterOptionChange, handleSearchTextChange, theme }) {
  return (
    <div className={`body-container theme-${theme}`}>
      <BookFilterContainer
        filters={FILTERS}
        filterOption={filterOption}
        onFilterOptionChange={handleFilterOptionChange}
      />
      <BookSearch searchText={searchText} onSearchTextChange={handleSearchTextChange} />
      <BookContainer searchText={searchText} filterOption={filterOption} />
    </div>
  );
}

Home.propTypes = {
  filterOption: PropTypes.string,
  searchText: PropTypes.string,
  handleFilterOptionChange: PropTypes.func.isRequired,
  handleSearchTextChange: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
};

export default withTheme(Home);
