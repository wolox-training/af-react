import React from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../Context/ThemeProvider';
import { BOOKS, FILTERS } from '../books_json';

import './style.css';

import BookContainer from './Components/BookContainer';
import BookSearch from './Components/BookSearch';
import BookFilterContainer from './Components/BookFilter';

function Home({ filterOption, searchText, handleFilterOptionChange, handleSearchTextChange }) {
  return (
    <ThemeContext.Consumer>
      {context => (
        <div className={`body-container theme-${context.state.theme}`}>
          <BookFilterContainer
            filters={FILTERS}
            filterOption={filterOption}
            onFilterOptionChange={handleFilterOptionChange}
          />
          <BookSearch searchText={searchText} onSearchTextChange={handleSearchTextChange} />
          <BookContainer searchText={searchText} filterOption={filterOption} />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

Home.propTypes = {
  filterOption: PropTypes.string,
  searchText: PropTypes.string,
  handleFilterOptionChange: PropTypes.func.isRequired,
  handleSearchTextChange: PropTypes.func.isRequired
};

export default Home;
